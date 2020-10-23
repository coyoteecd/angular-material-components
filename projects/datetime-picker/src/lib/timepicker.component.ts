import { ChangeDetectorRef, Component, forwardRef, Input, OnChanges, OnInit, Optional, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NgxMatDateAdapter } from './core/date-adapter';
import { createMissingDateImplError, DEFAULT_STEP, formatTwoDigitTimeValue, LIMIT_TIMES, MERIDIANS, NUMERIC_REGEX, PATTERN_INPUT_HOUR, PATTERN_INPUT_MINUTE, PATTERN_INPUT_SECOND } from './utils/date-utils';

@Component({
  selector: 'ngx-mat-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  host: {
    'class': 'ngx-mat-timepicker'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatTimepickerComponent),
      multi: true
    }
  ],
  exportAs: 'ngxMatTimepicker',
  encapsulation: ViewEncapsulation.None,
})
export class NgxMatTimepickerComponent<D> implements ControlValueAccessor, OnInit, OnChanges {

  public form: FormGroup;

  @Input() disabled = false;
  @Input() showSpinners = true;
  @Input() stepHour: number = DEFAULT_STEP;
  @Input() stepMinute: number = DEFAULT_STEP;
  @Input() stepSecond: number = DEFAULT_STEP;
  @Input() showSeconds = false;
  @Input() disableMinute = false;
  @Input() enableMeridian = false;
  @Input() defaultTime: number[];
  @Input() color: ThemePalette = 'primary';
  @Input() roundToStep = false;
  @Input() swipeSensitivity = 15; // Between 5 and 50

  public meridian: string = MERIDIANS.AM;

  /** Hour */
  private get hour() {
    let val = Number(this.form.controls['hour'].value);
    return isNaN(val) ? 0 : val;
  };

  private get minute() {
    let val = Number(this.form.controls['minute'].value);
    return isNaN(val) ? 0 : val;
  };

  private get second() {
    let val = Number(this.form.controls['second'].value);
    return isNaN(val) ? 0 : val;
  };

  /** Whether or not the form is valid */
  public get valid(): boolean {
    return this.form.valid;
  }

  private _onChange: any = () => { };
  private _onTouched: any = () => { };
  private _disabled: boolean;
  private _model: D;

  private _destroyed: Subject<void> = new Subject<void>();

  public pattern = PATTERN_INPUT_HOUR;

  constructor(@Optional() public _dateAdapter: NgxMatDateAdapter<D>,
    private cd: ChangeDetectorRef, private formBuilder: FormBuilder) {
    if (!this._dateAdapter) {
      throw createMissingDateImplError('NgxMatDateAdapter');
    }
    this.form = this.formBuilder.group(
      {
        hour: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_HOUR)]],
        minute: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_MINUTE)]],
        second: [{ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern(PATTERN_INPUT_SECOND)]]
      });
  }

  ngOnInit() {
    this.form.valueChanges.pipe(takeUntil(this._destroyed), debounceTime(400)).subscribe(val => {
      this._updateModel();
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled && !changes.disabled.firstChange) {
      this.disabled ? this.form.disable() : this.form.enable();
    }

    this.disableMinute ? this.form.get('minute').disable() : this.form.get('minute').enable();

  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  /**
   * Writes a new value to the element.
   * @param obj
   */
  writeValue(val: D): void {
    if (val != null) {
      this._model = val;
    } else {
      this._model = this._dateAdapter.today();
      if (this.defaultTime != null) {
        this._dateAdapter.setTimeByDefaultValues(this._model, this.defaultTime);
      }
    }
    this._updateHourMinuteSecond();
  }

  /** Registers a callback function that is called when the control's value changes in the UI. */
  registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: () => {}): void {
    this._onTouched = fn;
  }

  /** Enables or disables the appropriate DOM element */
  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.cd.markForCheck();
  }

  /**
   * Format input
   * @param input
   */
  public formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(NUMERIC_REGEX, '');
  }

  /** Toggle meridian */
  public toggleMeridian() {
    this.meridian = (this.meridian === MERIDIANS.AM) ? MERIDIANS.PM : MERIDIANS.AM;
    this.change('hour');
  }

  /** Change property of time based on arrow buttons */
  public change(prop: string, up?: boolean) {
    const next = this._getNextValueByProp(prop, up);
    this._changeTime(prop, next);
  }

  public inputTouchStart(startEvent: TouchEvent, prop: string) {
    // Single finger touch only
    // For info about touches and changedTouches, see https://stackoverflow.com/a/7236327
    if (startEvent.touches.length === 1) {

      const touchYStart = startEvent.changedTouches[0].clientY;
      const target = startEvent.currentTarget as HTMLElement;
      const initialValue = this[prop];

      const cssPixelsPerStep = Math.min(Math.max(this.swipeSensitivity, 5), 50);
      const pixelsPerStep = cssPixelsPerStep * devicePixelRatio;

      // Handler for touch move
      const touchMoveListener = (moveEvent: TouchEvent) => {
        const deltaY = moveEvent.changedTouches[0].clientY - touchYStart;
        const steps = Math.trunc(-deltaY / pixelsPerStep);
        const value = this._getValueByTouchPos(prop, initialValue, steps);
        this._changeTime(prop, value);
      };

      // Handler for removing touch listeners
      const touchRemoveListeners = () => {
        window.removeEventListener('touchmove', touchMoveListener);
        window.removeEventListener('touchend', touchRemoveListeners);
        target.removeEventListener('touchcancel', touchRemoveListeners);
      };

      // Add it here so it can capture finger up when finger moved outside the element
      target.addEventListener('touchcancel', touchRemoveListeners);
      window.addEventListener('touchend', touchRemoveListeners);
      window.addEventListener('touchmove', touchMoveListener);
    }
  }

  /** Change property of time with specified value */
  private _changeTime(prop: string, value: number) {
    const formattedValue = (prop === 'hour' && this.enableMeridian) ? value : formatTwoDigitTimeValue(value);
    this.form.controls[prop].setValue(formattedValue, { onlySelf: false, emitEvent: false });
    this._updateModel();
  }

  /** Update controls of form by model */
  private _updateHourMinuteSecond() {
    let _hour = this._dateAdapter.getHour(this._model);
    const _minute = this._dateAdapter.getMinute(this._model);
    const _second = this._dateAdapter.getSecond(this._model);

    if (this.enableMeridian) {
      if (_hour < LIMIT_TIMES.meridian) {
        this.meridian = MERIDIANS.AM;
      } else {
        this.meridian = MERIDIANS.PM;
        _hour = _hour - LIMIT_TIMES.meridian;
      }
      if (_hour === 0) {
        _hour = LIMIT_TIMES.meridian;
      }
    }

    this.form.controls['hour'].setValue(this.enableMeridian ? _hour : formatTwoDigitTimeValue(_hour));
    this.form.controls['minute'].setValue(formatTwoDigitTimeValue(_minute));
    this.form.controls['second'].setValue(formatTwoDigitTimeValue(_second));
  }

  /** Update model */
  private _updateModel() {
    let _hour = this.hour;
    if (this.enableMeridian) {
      if (this.meridian === MERIDIANS.AM && _hour === LIMIT_TIMES.meridian) {
        _hour = 0;
      } else if (this.meridian === MERIDIANS.PM && _hour !== LIMIT_TIMES.meridian) {
        _hour = _hour + LIMIT_TIMES.meridian;
      }
    }

    this._dateAdapter.setHour(this._model, _hour);
    this._dateAdapter.setMinute(this._model, this.minute);
    this._dateAdapter.setSecond(this._model, this.second);
    this._onChange(this._model);
  }

  private _getNextValue(value: number, step: number, stepCount: number) {
    if (this.roundToStep && value % step !== 0) {
      if (stepCount > 0) {
        value = Math.ceil(value / step) * step;
        stepCount -= 1;
      } else if (stepCount < 0) {
        value -= (value % step);
        stepCount += 1;
      }
    }
    return value + step * stepCount;
  }

  // Makes sure that the value is within the boundaries of the prop
  private _normalizeValue(prop: string, value: number): number {
    const keyProp = prop[0].toUpperCase() + prop.slice(1);
    const min = LIMIT_TIMES[`min${keyProp}`];
    let max = LIMIT_TIMES[`max${keyProp}`];

    if (prop === 'hour' && this.enableMeridian) {
      max = LIMIT_TIMES.meridian;
    }

    value %= max;
    value = value > max ? (value - max + min) : value;
    value = value < min ? (value - min + max) : value;

    if (prop === 'hour' && this.enableMeridian) {
      if (value === 0) value = max;
    }

    return value;
  }

  /**
   * Get next value by property based on up/down
   * @param prop
   * @param up
   */
  private _getNextValueByProp(prop: string, up?: boolean): number {
    const keyProp = prop[0].toUpperCase() + prop.slice(1);

    const next = (up == null) ?
      this[prop] :
      this._getNextValue(this[prop], this[`step${keyProp}`], up ? 1 : -1);

    return this._normalizeValue(prop, next);
  }

  /**
   * Get next value by touch position
   */
  private _getValueByTouchPos(prop: string, initialVal: number, stepCount: number): number {
    const keyProp = prop[0].toUpperCase() + prop.slice(1);
    const step = this[`step${keyProp}`];

    const next = this._getNextValue(initialVal, step, stepCount);
    return this._normalizeValue(prop, next);
  }
}
