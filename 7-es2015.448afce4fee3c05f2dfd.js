(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1Cxw":function(t,e,o){"use strict";o.r(e),o.d(e,"DemoColorpickerModule",function(){return yt});var n=o("ofXK"),r=o("3Pt+"),i=o("Wp6s"),a=o("kmnG"),s=o("qFsG"),c=o("QibW"),l=o("d3UM"),h=o("tyNb"),p=o("+rOU"),u=o("bTqV"),d=o("0IaG"),b=o("NFeN"),g=o("fXoL");const f=/^\s+/,m=/\s+$/,x=Math.round,_=(Math,Math,Math,/[^0-9]/g),C=["#ffffff","#ffff00","#ff00ff","#ff0000","#c0c0c0","#808080","#808000","#800080","#800000","#00ffff","#00ff00","#008080","#008000","#0000ff","#000080","#000000"];function v(t,e,o){const n=t.getImageData(e,o,1,1).data;return{r:n[0],g:n[1],b:n[2]}}function w(t){return 1==t.length?"0"+t:""+t}function R(t){return y(t)/255}function y(t){return parseInt(t,16)}function k(t,e,o,n){var r=[w(x(t).toString(16)),w(x(e).toString(16)),w(x(o).toString(16))];return n&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}const M="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",O="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",A="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",Q={CSS_UNIT:new RegExp(M),rgb:new RegExp("rgb"+O),rgba:new RegExp("rgba"+A),hsl:new RegExp("hsl"+O),hsla:new RegExp("hsla"+A),hsv:new RegExp("hsv"+O),hsva:new RegExp("hsva"+A),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function S(t){let e;return t=t.replace(f,"").replace(m,"").toLowerCase(),(e=Q.rgb.exec(t))?{r:e[1],g:e[2],b:e[3],a:1}:(e=Q.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=Q.hex8.exec(t))?{r:y(e[1]),g:y(e[2]),b:y(e[3]),a:R(e[4])}:(e=Q.hex6.exec(t))?{r:y(e[1]),g:y(e[2]),b:y(e[3]),a:1}:(e=Q.hex4.exec(t))?{r:y(e[1]+""+e[1]),g:y(e[2]+""+e[2]),b:y(e[3]+""+e[3]),a:R(e[4]+""+e[4])}:(e=Q.hex3.exec(t))?{r:y(e[1]+""+e[1]),g:y(e[2]+""+e[2]),b:y(e[3]+""+e[3]),a:1}:null}class I{constructor(t,e,o,n){this.r=t>255?255:t,this.g=e>255?255:e,this.b=o>255?255:o,this.a=null!=n?n>1?1:n:1,this.roundA=Math.round(this.a),this.hex=k(this.r,this.g,this.b),this.rgba=this.toRgba()}toHex(t){return k(this.r,this.g,this.b,t)}toRgba(){return`rgba(${this.r},${this.g},${this.b},${this.a})`}toHexString(t){return"#"+this.toHex(t)}toRgbString(){return 1===this.a?"rgb("+Math.round(this.r)+", "+Math.round(this.g)+", "+Math.round(this.b)+")":"rgba("+Math.round(this.r)+", "+Math.round(this.g)+", "+Math.round(this.b)+", "+this.roundA+")"}toHex8(t){return function(t,e,o,n,r){var i,a=[w(x(t).toString(16)),w(x(e).toString(16)),w(x(o).toString(16)),w((i=n,Math.round(255*parseFloat(i)).toString(16)))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t){return"#"+this.toHex8(t)}toString(t){let e;return t||!(this.a<1&&this.a>=0)||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t?("rgb"===t&&(e=this.toRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),e||this.toHexString()):this.toRgbString()}}var P=o("VRyK"),F=o("1G5W"),E=o("Kj3r"),T=o("/uUt"),B=o("XNiG");let N=(()=>{class t{constructor(t,e){this.zone=t,this.colorChanged=new g.n,this.x=0,this.y=0,this.drag=!1,this._destroyed=new B.a,this.elementId=e}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}ngAfterViewInit(){this.canvas=document.getElementById(this.elementId),this.ctx=this.canvas.getContext("2d"),this.width=this.canvas.width,this.height=this.canvas.height,this.draw()}draw(){this.ctx.clearRect(0,0,this.width,this.height),this.ctx.rect(0,0,this.width,this.height),this.fillGradient(),0!=this.y&&this.redrawIndicator(this.x,this.y)}onMousedown(t){this.drag=!0,this.changeColor(t),this.zone.runOutsideAngular(()=>{this.canvas.addEventListener("mousemove",this.onMousemove.bind(this))})}onMousemove(t){this.drag&&this.zone.run(()=>{this.changeColor(t)})}onMouseup(t){this.drag=!1,this.canvas.removeEventListener("mousemove",this.onMousemove)}emitChange(t){this.colorChanged.emit(t)}}return t.\u0275fac=function(t){g.Yb()},t.\u0275dir=g.Hb({type:t,inputs:{color:"color"},outputs:{colorChanged:"colorChanged"}}),t})(),G=(()=>{class t extends N{constructor(t){super(t,"color-strip"),this.zone=t}ngOnInit(){}ngAfterViewInit(){super.ngAfterViewInit()}fillGradient(){const t=this.ctx.createLinearGradient(0,0,0,this.height);t.addColorStop(0,"rgba(255, 0, 0, 1)"),t.addColorStop(.17,"rgba(255, 255, 0, 1)"),t.addColorStop(.34,"rgba(0, 255, 0, 1)"),t.addColorStop(.51,"rgba(0, 255, 255, 1)"),t.addColorStop(.68,"rgba(0, 0, 255, 1)"),t.addColorStop(.85,"rgba(255, 0, 255, 1)"),t.addColorStop(1,"rgba(255, 0, 0, 1)"),this.ctx.fillStyle=t,this.ctx.fill()}redrawIndicator(t,e){this.ctx.beginPath(),this.ctx.strokeStyle="white",this.ctx.lineWidth=2,this.ctx.arc(7.5,e,7.5,0,2*Math.PI,!1),this.ctx.stroke(),this.ctx.closePath()}changeColor(t){this.x=t.offsetX,this.y=t.offsetY,this.draw();const{r:e,g:o,b:n}=v(this.ctx,t.offsetX,t.offsetY);this.emitChange(new I(e,o,n))}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(g.A))},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-color-slider"]],features:[g.yb],decls:1,vars:0,consts:[["id","color-strip","width","15","height","200",1,"zone-strip",3,"mousedown","mouseup"]],template:function(t,e){1&t&&(g.Rb(0,"canvas",0),g.Zb("mousedown",function(t){return e.onMousedown(t)})("mouseup",function(t){return e.onMouseup(t)}),g.Qb())},styles:[""]}),t})(),z=(()=>{class t{constructor(){}onInput(t){this._formatInput(t.target)}_formatInput(t){let e=Number(t.value.replace(_,""));e=isNaN(e)?0:e,t.value=e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=g.Hb({type:t,selectors:[["","ngxMatNumericColorInput",""]],hostBindings:function(t,e){1&t&&g.Zb("input",function(t){return e.onInput(t)})}}),t})(),j=(()=>{class t extends N{constructor(t){super(t,"color-block"),this.zone=t,this._resetBaseColor=!0,this.formGroup=new r.h({r:new r.e(null,[r.u.required]),g:new r.e(null,[r.u.required]),b:new r.e(null,[r.u.required]),a:new r.e(null,[r.u.required]),hex:new r.e(null,[r.u.required,r.u.pattern(Q.hex6)])})}get rCtrl(){return this.formGroup.get("r")}get gCtrl(){return this.formGroup.get("g")}get bCtrl(){return this.formGroup.get("b")}get aCtrl(){return this.formGroup.get("a")}get hexCtrl(){return this.formGroup.get("hex")}ngOnInit(){Object(P.a)(this.rCtrl.valueChanges,this.gCtrl.valueChanges,this.bCtrl.valueChanges,this.aCtrl.valueChanges).pipe(Object(F.a)(this._destroyed),Object(E.a)(400)).subscribe(t=>{const e=new I(Number(this.rCtrl.value),Number(this.gCtrl.value),Number(this.bCtrl.value),Number(this.aCtrl.value));this.emitChange(e)}),this.hexCtrl.valueChanges.pipe(Object(F.a)(this._destroyed),Object(E.a)(400),Object(T.a)()).subscribe(t=>{const e=S(t);if(null!=e){const t=new I(e.r,e.g,e.b,e.a);this.emitChange(t)}})}ngOnChanges(t){t.color&&t.color.currentValue&&(this.updateForm(t.color.currentValue),this._resetBaseColor&&(this._baseColor=t.color.currentValue),this._resetBaseColor=!0,t.color.firstChange||this.draw())}updateForm(t){const e={emitEvent:!1};this.rCtrl.setValue(t.r,e),this.gCtrl.setValue(t.g,e),this.bCtrl.setValue(t.b,e),this.aCtrl.setValue(t.a,e),this.hexCtrl.setValue(t.hex,e)}redrawIndicator(t,e){this.ctx.beginPath(),this.ctx.strokeStyle="white",this.ctx.arc(t,e,5,0,2*Math.PI,!1),this.ctx.stroke(),this.ctx.closePath()}fillGradient(){this.ctx.fillStyle=this._baseColor?this._baseColor.rgba:"rgba(255,255,255,1)",this.ctx.fillRect(0,0,this.width,this.height);const t=this.ctx.createLinearGradient(0,0,this.width,0);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.width,this.height);const e=this.ctx.createLinearGradient(0,0,0,this.height);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,1)"),this.ctx.fillStyle=e,this.ctx.fillRect(0,0,this.width,this.height)}onSliderColorChanged(t){this._baseColor=t,this.color=t,this.fillGradient(),this.emitChange(t)}changeColor(t){this.x=t.offsetX,this.y=t.offsetY,this._resetBaseColor=!1,this.draw();const{r:e,g:o,b:n}=v(this.ctx,t.offsetX,t.offsetY);this.emitChange(new I(e,o,n))}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(g.A))},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-color-canvas"]],hostAttrs:[1,"ngx-mat-color-canvas"],features:[g.yb,g.zb],decls:30,vars:3,consts:[[3,"formGroup"],[1,"color-canvas-row"],[1,"zone-canvas"],["id","color-block","width","200","height","200",1,"zone-block",3,"mousedown","mouseup"],[3,"colorChanged"],[1,"zone-inputs"],["matInput","","formControlName","r","ngxMatNumericColorInput","","autocomplete","off"],["matInput","","formControlName","g","ngxMatNumericColorInput","","autocomplete","off"],["matInput","","formControlName","b","ngxMatNumericColorInput","","autocomplete","off"],["mat-mini-fab","",1,"preview"],["matPrefix","",1,"symbol"],["matInput","","formControlName","hex","autocomplete","off"],["matInput","","formControlName","a","type","number","min","0","max","1","step","0.1","autocomplete","off"]],template:function(t,e){1&t&&(g.Rb(0,"form",0),g.Rb(1,"div",1),g.Rb(2,"div",2),g.Rb(3,"canvas",3),g.Zb("mousedown",function(t){return e.onMousedown(t)})("mouseup",function(t){return e.onMouseup(t)}),g.Qb(),g.Rb(4,"ngx-mat-color-slider",4),g.Zb("colorChanged",function(t){return e.onSliderColorChanged(t)}),g.Qb(),g.Qb(),g.Rb(5,"div",5),g.Rb(6,"mat-form-field"),g.Rb(7,"mat-label"),g.vc(8,"R"),g.Qb(),g.Nb(9,"input",6),g.Qb(),g.Rb(10,"mat-form-field"),g.Rb(11,"mat-label"),g.vc(12,"G"),g.Qb(),g.Nb(13,"input",7),g.Qb(),g.Rb(14,"mat-form-field"),g.Rb(15,"mat-label"),g.vc(16,"B"),g.Qb(),g.Nb(17,"input",8),g.Qb(),g.Qb(),g.Qb(),g.Rb(18,"div",1),g.Nb(19,"button",9),g.Rb(20,"mat-form-field"),g.Rb(21,"mat-label"),g.vc(22,"HEX6"),g.Qb(),g.Rb(23,"mat-label",10),g.vc(24,"#\xa0"),g.Qb(),g.Nb(25,"input",11),g.Qb(),g.Rb(26,"mat-form-field"),g.Rb(27,"mat-label"),g.vc(28,"A"),g.Qb(),g.Nb(29,"input",12),g.Qb(),g.Qb(),g.Qb()),2&t&&(g.ic("formGroup",e.formGroup),g.Bb(19),g.rc("background-color",(null==e.color?null:e.color.rgba)||"transparent"))},directives:[r.v,r.p,r.i,G,a.c,a.g,s.b,r.c,r.o,r.g,z,u.b,a.h,r.s],styles:[".ngx-mat-color-canvas .color-canvas-row{display:flex}.ngx-mat-color-canvas .color-canvas-row:first-of-type{height:200px;margin-bottom:12px}.ngx-mat-color-canvas .color-canvas-row:first-of-type .card{height:180px}.ngx-mat-color-canvas .color-canvas-row canvas:hover{cursor:crosshair}.ngx-mat-color-canvas .color-canvas-row .zone{display:flex}.ngx-mat-color-canvas .color-canvas-row .zone-canvas{height:200px}.ngx-mat-color-canvas .color-canvas-row .zone-canvas .zone-block{border:1px solid rgba(0,0,0,.12)}.ngx-mat-color-canvas .color-canvas-row .zone-strip{flex-basis:auto;margin-left:10px}.ngx-mat-color-canvas .color-canvas-row .zone-inputs{display:flex;width:40px;height:200px;flex-direction:column;margin-left:16px;margin-top:12px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2){display:flex}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .preview{min-width:40px;min-height:40px;height:40px;width:40px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field{margin-left:16px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:first-of-type{width:170px}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:first-of-type .symbol{font-weight:700;color:rgba(0,0,0,.54)}.ngx-mat-color-canvas .color-canvas-row:nth-of-type(2) .mat-form-field:last-of-type{width:40px}.ngx-mat-color-canvas .mat-form-field-label{font-weight:700}"],encapsulation:2}),t})();const V=function(t){return{active:t}};function U(t,e){if(1&t){const t=g.Sb();g.Rb(0,"button",2),g.Zb("click",function(){g.oc(t);const o=e.$implicit;return g.dc().select(o)}),g.Qb()}if(2&t){const t=e.$implicit,o=g.dc();g.rc("background-color",t),g.ic("ngClass",g.kc(3,V,o.selectedColor===t))}}function D(t,e){if(1&t){const t=g.Sb();g.Rb(0,"button",2),g.Zb("click",function(){g.oc(t);const o=e.$implicit;return g.dc().select(o)}),g.Qb()}if(2&t){const t=e.$implicit,o=g.dc();g.rc("background-color",t),g.ic("ngClass",g.kc(3,V,o.selectedColor===t))}}let L=(()=>{class t{constructor(){this.colorChanged=new g.n,this.colors1=C.slice(0,8),this.colors2=C.slice(8,16)}set color(t){t&&(this.selectedColor=t.toHexString())}ngOnInit(){}select(t){this.selectedColor=t;const{r:e,g:o,b:n,a:r}=S(t);this.colorChanged.emit(new I(e,o,n,r))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-color-collection"]],hostAttrs:[1,"ngx-mat-color-collection"],inputs:{color:"color"},outputs:{colorChanged:"colorChanged"},decls:4,vars:2,consts:[[1,"color-collection-row"],["mat-mini-fab","","class","btn-color",3,"background-color","ngClass","click",4,"ngFor","ngForOf"],["mat-mini-fab","",1,"btn-color",3,"ngClass","click"]],template:function(t,e){1&t&&(g.Rb(0,"div",0),g.uc(1,U,1,5,"button",1),g.Qb(),g.Rb(2,"div",0),g.uc(3,D,1,5,"button",1),g.Qb()),2&t&&(g.Bb(1),g.ic("ngForOf",e.colors1),g.Bb(2),g.ic("ngForOf",e.colors2))},directives:[n.j,u.b,n.i],styles:[".ngx-mat-color-collection .btn-color{height:20px;width:20px;margin-right:11px;box-shadow:none;opacity:.3}.ngx-mat-color-collection .btn-color.active{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);opacity:1}"],encapsulation:2}),t})(),H=(()=>{class t{constructor(){this.colorChanged=new g.n}ngOnInit(){}handleColorChanged(t){this.colorChanged.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-color-palette"]],hostAttrs:[1,"ngx-mat-color-palette"],inputs:{color:"color"},outputs:{colorChanged:"colorChanged"},decls:2,vars:2,consts:[[3,"color","colorChanged"]],template:function(t,e){1&t&&(g.Rb(0,"ngx-mat-color-canvas",0),g.Zb("colorChanged",function(t){return e.handleColorChanged(t)}),g.Qb(),g.Rb(1,"ngx-mat-color-collection",0),g.Zb("colorChanged",function(t){return e.handleColorChanged(t)}),g.Qb()),2&t&&(g.ic("color",e.color),g.Bb(1),g.ic("color",e.color))},directives:[j,L],styles:[".ngx-mat-color-palette .actions{margin-top:10px;display:flex}.ngx-mat-color-palette .actions .left{display:flex;flex-direction:column;margin-right:15px}.ngx-mat-color-palette .actions .left .preview{flex:2 1 auto;margin-bottom:10px}.ngx-mat-color-palette .actions .right{display:flex;width:40px;flex-direction:column}"],encapsulation:2}),t})();var X=o("8LU1"),Y=o("FtGj"),Z=o("rDax"),$=o("FKr1"),q=o("iadO"),K=o("quSY"),W=o("IzEk"),J=o("pLZG");let tt=(()=>{class t{constructor(){}sameColor(t,e){return null==t&&null==e||null!=t&&null!=e&&t.rgba===e.rgba}format(t,e){return t.toString(e)}parse(t){const e=S(t);return e?new I(e.r,e.g,e.b,e.a):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=g.Ib({token:t,factory:t.\u0275fac}),t})();const et=new g.r("mat-color-formats");var ot=o("cH1L");const nt=new g.r("ngx-mat-colorpicker-scroll-strategy"),rt={provide:nt,deps:[Z.c],useFactory:function(t){return()=>t.scrollStrategies.reposition()}},it=Object($.t)(class{constructor(t){this._elementRef=t}});let at=(()=>{class t extends it{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(g.l))},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-color-picker-content"]],viewQuery:function(t,e){if(1&t&&g.yc(H,1),2&t){let t;g.mc(t=g.ac())&&(e._palette=t.first)}},hostAttrs:[1,"ngx-mat-colorpicker-content"],hostVars:3,hostBindings:function(t,e){2&t&&(g.tc("@transformPanel","enter"),g.Eb("ngx-mat-colorpicker-content-touch",e.picker.touchUi))},inputs:{color:"color"},exportAs:["ngxMatColorPickerContent"],features:[g.yb],decls:1,vars:1,consts:[[3,"color","colorChanged"]],template:function(t,e){1&t&&(g.Rb(0,"ngx-mat-color-palette",0),g.Zb("colorChanged",function(t){return e.picker.select(t)}),g.Qb()),2&t&&g.ic("color",e.picker._selected)},directives:[H],styles:[".ngx-mat-colorpicker-content{display:block;border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87);padding:16px}.ngx-mat-colorpicker-content .ngx-mat-color-palette{width:296px;height:354px}.ngx-mat-colorpicker-content-touch{display:block;max-height:80vh;overflow:auto}.ngx-mat-colorpicker-content-touch .ngx-mat-color-palette{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media (orientation:landscape){.mat-colorpicker-content-touch .ngx-mat-color-palette{width:64vh;height:80vh}}@media (orientation:portrait){.mat-colorpicker-content-touch .ngx-mat-color-palette{width:80vw;height:100vw}}"],encapsulation:2,data:{animation:[q.g.transformPanel,q.g.fadeInCalendar]},changeDetection:0}),t})(),st=(()=>{class t{constructor(t,e,o,n,r,i,a,s){this._dialog=t,this._overlay=e,this._zone=o,this._adapter=n,this._dir=r,this._document=a,this._viewContainerRef=s,this.openedStream=new g.n,this.closedStream=new g.n,this._touchUi=!1,this._opened=!1,this._defaultColor="primary",this._validSelected=null,this._disabledChange=new B.a,this._focusedElementBeforeOpen=null,this._inputSubscription=K.a.EMPTY,this._selectedChanged=new B.a,this._scrollStrategy=i}get disabled(){return void 0===this._disabled&&this._pickerInput?this._pickerInput.disabled:!!this._disabled}set disabled(t){const e=Object(X.b)(t);e!==this._disabled&&(this._disabled=e,this._disabledChange.next(e))}get touchUi(){return this._touchUi}set touchUi(t){this._touchUi=Object(X.b)(t)}get opened(){return this._opened}set opened(t){t?this.open():this.close()}get defaultColor(){return this._defaultColor}set defaultColor(t){this._defaultColor=t}get color(){return this._color||(this._pickerInput?this._pickerInput.getThemePalette():void 0)}set color(t){this._color=t}get _selected(){return this._validSelected}set _selected(t){this._validSelected=t}ngOnInit(){}ngOnDestroy(){this.close(),this._inputSubscription.unsubscribe(),this._disabledChange.complete(),this._popupRef&&(this._popupRef.dispose(),this._popupComponentRef=null)}select(t){let e=this._selected;this._selected=t,this._adapter.sameColor(e,this._selected)||this._selectedChanged.next(t)}registerInput(t){if(this._pickerInput)throw Error("A ColorPicker can only be associated with a single input.");this._pickerInput=t,this._inputSubscription=this._pickerInput._valueChange.subscribe(t=>this._selected=t)}open(){if(!this._opened&&!this.disabled){if(!this._pickerInput)throw Error("Attempted to open an ColorPicker with no associated input.");this._document&&(this._focusedElementBeforeOpen=this._document.activeElement),this.touchUi?this._openAsDialog():this._openAsPopup(),this._opened=!0,this.openedStream.emit()}}_openAsDialog(){this._dialogRef&&this._dialogRef.close(),this._dialogRef=this._dialog.open(at,{direction:this._dir?this._dir.value:"ltr",viewContainerRef:this._viewContainerRef,panelClass:"ngx-mat-colorpicker-dialog"}),this._dialogRef.afterClosed().subscribe(()=>this.close()),this._dialogRef.componentInstance.picker=this,this._setColor()}_openAsPopup(){this._portal||(this._portal=new p.d(at,this._viewContainerRef)),this._popupRef||this._createPopup(),this._popupRef.hasAttached()||(this._popupComponentRef=this._popupRef.attach(this._portal),this._popupComponentRef.instance.picker=this,this._setColor(),this._zone.onStable.asObservable().pipe(Object(W.a)(1)).subscribe(()=>{this._popupRef.updatePosition()}))}_createPopup(){const t=new Z.d({positionStrategy:this._createPopupPositionStrategy(),hasBackdrop:!0,backdropClass:"mat-overlay-transparent-backdrop",direction:this._dir,scrollStrategy:this._scrollStrategy(),panelClass:"mat-colorpicker-popup"});this._popupRef=this._overlay.create(t),this._popupRef.overlayElement.setAttribute("role","dialog"),Object(P.a)(this._popupRef.backdropClick(),this._popupRef.detachments(),this._popupRef.keydownEvents().pipe(Object(J.a)(t=>t.keyCode===Y.f||this._pickerInput&&t.altKey&&t.keyCode===Y.o))).subscribe(t=>{t&&t.preventDefault(),this.close()})}close(){if(!this._opened)return;this._popupRef&&this._popupRef.hasAttached()&&this._popupRef.detach(),this._dialogRef&&(this._dialogRef.close(),this._dialogRef=null),this._portal&&this._portal.isAttached&&this._portal.detach();const t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit(),this._focusedElementBeforeOpen=null)};this._focusedElementBeforeOpen&&"function"==typeof this._focusedElementBeforeOpen.focus?(this._focusedElementBeforeOpen.focus(),setTimeout(t)):t()}_setColor(){const t=this.color;this._popupComponentRef&&(this._popupComponentRef.instance.color=t),this._dialogRef&&(this._dialogRef.componentInstance.color=t)}_createPopupPositionStrategy(){return this._overlay.position().flexibleConnectedTo(this._pickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".ngx-mat-colorpicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition().withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"}])}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(d.a),g.Mb(Z.c),g.Mb(g.A),g.Mb(tt),g.Mb(ot.b,8),g.Mb(nt),g.Mb(n.c,8),g.Mb(g.Q))},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-color-picker"]],inputs:{disabled:"disabled",touchUi:"touchUi",opened:"opened",defaultColor:"defaultColor",color:"color"},outputs:{openedStream:"opened",closedStream:"closed"},exportAs:["ngxMatColorPicker"],decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),t})();class ct{constructor(t,e){this.target=t,this.targetElement=e,this.value=this.target.value}}const lt={provide:r.m,useExisting:Object(g.U)(()=>pt),multi:!0},ht={provide:r.l,useExisting:Object(g.U)(()=>pt),multi:!0};let pt=(()=>{class t{constructor(t,e,o,n){if(this._elementRef=t,this._formField=e,this._colorFormats=o,this._adapter=n,this.colorChange=new g.n,this.colorInput=new g.n,this._disabledChange=new g.n,this._valueChange=new g.n,this._onTouched=()=>{},this._cvaOnChange=()=>{},this._validatorOnChange=()=>{},this._pickerSubscription=K.a.EMPTY,this._validator=r.u.compose([]),this._lastValueValid=!1,!this._colorFormats)throw Error("NgxMatColorPicker: No provider found for MAT_COLOR_FORMATS. You must define MAT_COLOR_FORMATS in your module")}set ngxMatColorPicker(t){t&&(this._picker=t,this._picker.registerInput(this),this._pickerSubscription.unsubscribe(),this._pickerSubscription=this._picker._selectedChanged.subscribe(t=>{this.value=t,this._cvaOnChange(t),this._onTouched(),this.colorInput.emit(new ct(this,this._elementRef.nativeElement)),this.colorChange.emit(new ct(this,this._elementRef.nativeElement))}))}get disabled(){return!!this._disabled}set disabled(t){const e=Object(X.b)(t),o=this._elementRef.nativeElement;this._disabled!==e&&(this._disabled=e,this._disabledChange.emit(e)),e&&o.blur&&o.blur()}get value(){return this._value}set value(t){const e=this.value;this._value=t,this._formatValue(t),this._adapter.sameColor(e,t)||this._valueChange.emit(t)}getThemePalette(){return this._formField?this._formField.color:void 0}registerOnValidatorChange(t){this._validatorOnChange=t}validate(t){return this._validator?this._validator(t):null}getPopupConnectionElementRef(){return this.getConnectedOverlayOrigin()}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}ngOnInit(){}ngOnDestroy(){this._pickerSubscription.unsubscribe(),this._valueChange.complete(),this._disabledChange.complete()}writeValue(t){this.value=t}registerOnChange(t){this._cvaOnChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_onChange(){this.colorChange.emit(new ct(this,this._elementRef.nativeElement))}_onKeydown(t){this._picker&&t.altKey&&t.keyCode===Y.c&&!this._elementRef.nativeElement.readOnly&&(this._picker.open(),t.preventDefault())}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(t){this._elementRef.nativeElement.value=t?this._adapter.format(t,this._colorFormats.display.colorInput):""}_onInput(t){const e=this._lastValueValid,o=this._adapter.parse(t);this._adapter.sameColor(o,this._value)?e!==this._lastValueValid&&this._validatorOnChange():(this._value=o,this._cvaOnChange(o),this._valueChange.emit(o),this.colorInput.emit(new ct(this,this._elementRef.nativeElement)))}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(g.l),g.Mb(a.c,8),g.Mb(et,8),g.Mb(tt))},t.\u0275dir=g.Hb({type:t,selectors:[["input","ngxMatColorPicker",""]],hostVars:3,hostBindings:function(t,e){1&t&&g.Zb("input",function(t){return e._onInput(t.target.value)})("change",function(){return e._onChange()})("blur",function(){return e._onBlur()})("keydown",function(t){return e._onKeydown(t)}),2&t&&(g.Ub("disabled",e.disabled),g.Cb("aria-haspopup",e._picker?"dialog":null)("aria-owns",(null==e._picker?null:e._picker.opened)&&e._picker.id||null))},inputs:{ngxMatColorPicker:"ngxMatColorPicker",disabled:"disabled",value:"value"},outputs:{colorChange:"colorChange",colorInput:"colorInput"},exportAs:["ngxMatColorPickerInput"],features:[g.Ab([lt,ht,{provide:s.a,useExisting:t}])]}),t})();var ut=o("LRne");const dt=["button"];let bt=(()=>{class t{constructor(t){this._cd=t,this._stateChanges=K.a.EMPTY}get disabled(){if(null==this._disabled&&this.picker)return this.picker.disabled}set disabled(t){this._disabled=t}ngOnInit(){}ngOnChanges(t){t.picker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}open(t){this.picker&&!this.disabled&&(this.picker.open(),t.stopPropagation())}_watchStateChanges(){const t=this.picker?this.picker._disabledChange:Object(ut.a)(),e=this.picker&&this.picker._pickerInput?this.picker._pickerInput._disabledChange:Object(ut.a)(),o=this.picker?Object(P.a)(this.picker.openedStream,this.picker.closedStream):Object(ut.a)();this._stateChanges.unsubscribe(),this._stateChanges=Object(P.a)(t,e,o).subscribe(()=>this._cd.markForCheck())}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(g.h))},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-color-toggle"]],viewQuery:function(t,e){if(1&t&&g.yc(dt,1),2&t){let t;g.mc(t=g.ac())&&(e._button=t.first)}},hostAttrs:[1,"ngx-mat-color-toggle"],hostVars:7,hostBindings:function(t,e){1&t&&g.Zb("focus",function(){return e._button.focus()}),2&t&&(g.Cb("tabindex",-1),g.Eb("ngx-mat-color-toggle-active",e.picker&&e.picker.opened)("mat-accent",e.picker&&"accent"===e.picker.color)("mat-warn",e.picker&&"warn"===e.picker.color))},inputs:{picker:["for","picker"],tabIndex:"tabIndex",disabled:"disabled"},exportAs:["ngxMatColorPickerToggle"],features:[g.zb],decls:4,vars:5,consts:[["mat-icon-button","","type","button",3,"disabled","click"],["button",""]],template:function(t,e){1&t&&(g.Rb(0,"button",0,1),g.Zb("click",function(t){return e.open(t)}),g.Rb(2,"mat-icon"),g.vc(3,"palette"),g.Qb(),g.Qb()),2&t&&(g.ic("disabled",e.disabled),g.Cb("aria-haspopup",e.picker?"dialog":null)("tabindex",e.disabled?-1:e.tabIndex),g.Bb(2),g.rc("color",null==e.picker||null==e.picker._selected?null:e.picker._selected.rgba))},directives:[u.b,b.a],styles:[".mat-form-field-appearance-legacy .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .ngx-mat-color-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .ngx-mat-color-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .ngx-mat-color-toggle-default-icon{margin:auto}"],encapsulation:2}),t})(),gt=(()=>{class t{}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},providers:[tt,rt],imports:[[n.b,s.c,u.c,i.b,c.c,r.j,r.t,d.b,p.f,b.b]]}),t})();var ft=o("wZkO"),mt=o("DScz");function xt(t,e){if(1&t&&(g.Rb(0,"mat-radio-button",21),g.vc(1),g.Qb()),2&t){const t=e.$implicit;g.ic("value",t.value),g.Bb(1),g.xc(" ",t.label,"")}}function _t(t,e){if(1&t&&(g.Rb(0,"mat-radio-button",21),g.vc(1),g.Qb()),2&t){const t=e.$implicit;g.ic("value",t.value),g.Bb(1),g.xc(" ",t.label,"")}}let Ct=(()=>{class t{constructor(){this.disabled=!1,this.color="primary",this.touchUi=!1,this.colorCtr=new r.e(new I(255,243,0),[r.u.required]),this.options=[{value:!0,label:"True"},{value:!1,label:"False"}],this.listColors=["primary","accent","warn"],this.code3='<mat-form-field>\n  <input matInput [ngxMatColorPicker]="picker" [formControl]="colorCtr" [disabled]="disabled">\n  <ngx-mat-color-toggle matSuffix [for]="picker"></ngx-mat-color-toggle>\n  <ngx-mat-color-picker #picker [touchUi]="touchUi" [color]="color"></ngx-mat-color-picker>\n</mat-form-field>',this.code6="\nimport { Color } from '@angular-material-components/color-picker';\ncolorCtr: AbstractControl = new FormControl(new Color(255, 243, 0), [Validators.required]);",this.code1="npm install --save @angular-material-components/color-picker",this.code2="import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } \n  from '@angular-material-components/color-picker'\n\n  @NgModule({\n    ...\n    imports: [\n         ...\n         NgxMatColorPickerModule\n    ],\n    providers: [\n     { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }\n    ],\n    ...\n })\n export class AppModule { }",this.code4="export const CUSTOM_MAT_COLOR_FORMATS: MatColorFormats = {\n    display: {\n        colorInput: 'hex'\n    }\n}\n\n@NgModule({\n    ...\n    providers: [\n      { provide: MAT_COLOR_FORMATS, useValue: CUSTOM_MAT_COLOR_FORMATS }\n    ],\n    ...\n  })\nexport class AppModule { }",this.code5='<link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=block" rel="stylesheet">'}ngOnInit(){}onDisabledChanged(t){t?this.colorCtr.disable():this.colorCtr.enable()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Gb({type:t,selectors:[["ngx-mat-demo-colorpicker"]],decls:104,vars:20,consts:[["label","API"],["href","https://www.npmjs.com/package/@angular-material-components/color-picker","target","_blank"],["src","https://badge.fury.io/js/%40angular-material-components%2Fcolor-picker.svg"],["ngxMatHighlight","",1,"language-typescript"],[1,"api-table-properties"],["href","https://material.angular.io/guide/theming#using-a-pre-built-theme"],["ngxMatHighlight","",1,"language-css"],["label","Example"],[1,"zone","zone-value"],[1,"row"],[1,"zone","zone-picker"],["matInput","",3,"ngxMatColorPicker","formControl","disabled"],["matSuffix","",3,"for"],[3,"touchUi","color"],["picker",""],[1,"zone","zone-config"],[1,"config-wrapper"],[1,"label"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],["ngxMatHighlight","",1,"html"],[1,"example-radio-button",3,"value"]],template:function(t,e){if(1&t&&(g.Rb(0,"mat-tab-group"),g.Rb(1,"mat-tab",0),g.Rb(2,"h1"),g.vc(3,"API reference for @angular-material-components/color-picker"),g.Qb(),g.Rb(4,"h2"),g.vc(5,"Getting started"),g.Qb(),g.Rb(6,"a",1),g.Nb(7,"img",2),g.Qb(),g.Rb(8,"pre"),g.Rb(9,"code"),g.vc(10),g.Qb(),g.Qb(),g.Rb(11,"h2"),g.vc(12,"Setup"),g.Qb(),g.Rb(13,"pre"),g.Rb(14,"code",3),g.vc(15),g.Qb(),g.Qb(),g.Rb(16,"h2"),g.vc(17,"Properties @Input"),g.Qb(),g.Rb(18,"table",4),g.Rb(19,"tbody"),g.Rb(20,"tr"),g.Rb(21,"th"),g.vc(22,"Name"),g.Qb(),g.Rb(23,"th"),g.vc(24,"Type"),g.Qb(),g.Rb(25,"th"),g.vc(26,"Default value"),g.Qb(),g.Rb(27,"th"),g.vc(28,"Description"),g.Qb(),g.Qb(),g.Rb(29,"tr"),g.Rb(30,"td"),g.Rb(31,"div"),g.vc(32,"disabled"),g.Qb(),g.Qb(),g.Rb(33,"td"),g.vc(34,"boolean"),g.Qb(),g.Rb(35,"td"),g.vc(36,"null"),g.Qb(),g.Rb(37,"td"),g.Rb(38,"p"),g.vc(39,"If true, the picker is readonly and can't be modified"),g.Qb(),g.Qb(),g.Qb(),g.Rb(40,"tr"),g.Rb(41,"td"),g.Rb(42,"div"),g.vc(43,"touchUi"),g.Qb(),g.Qb(),g.Rb(44,"td"),g.vc(45,"boolean"),g.Qb(),g.Rb(46,"td"),g.vc(47,"false"),g.Qb(),g.Rb(48,"td"),g.Rb(49,"p"),g.vc(50,"Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather than a popup and elements have more padding to allow for bigger touch targets. "),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Qb(),g.Rb(51,"h2"),g.vc(52,"Choosing color format settings to display in input "),g.Qb(),g.Rb(53,"p"),g.vc(54,"The color-picker use "),g.Rb(55,"strong"),g.vc(56,"NGX_MAT_COLOR_FORMATS"),g.Qb(),g.vc(57," by default."),g.Qb(),g.Rb(58,"p"),g.vc(59,"You can also customize the color format by providing your custom MAT_COLOR_FORMATS in your module."),g.Qb(),g.vc(60," For example: "),g.Rb(61,"pre"),g.Rb(62,"code",3),g.vc(63),g.Qb(),g.Qb(),g.Rb(64,"h2"),g.vc(65,"Theming"),g.Qb(),g.Rb(66,"p"),g.vc(67,"@see @angular/material "),g.Rb(68,"a",5),g.vc(69,"Using a pre-built theme"),g.Qb(),g.Qb(),g.Rb(70,"p"),g.vc(71,"Add the Material Design icon font to your index.html"),g.Qb(),g.Rb(72,"pre"),g.Rb(73,"code",6),g.vc(74),g.Qb(),g.Qb(),g.Qb(),g.Rb(75,"mat-tab",7),g.Rb(76,"mat-card",8),g.Rb(77,"div",9),g.vc(78),g.Qb(),g.Rb(79,"div",9),g.vc(80),g.Qb(),g.Qb(),g.Rb(81,"mat-card",10),g.Rb(82,"mat-form-field"),g.Nb(83,"input",11),g.Nb(84,"ngx-mat-color-toggle",12),g.Nb(85,"ngx-mat-color-picker",13,14),g.Qb(),g.Qb(),g.Rb(87,"mat-card",15),g.Rb(88,"div",16),g.Rb(89,"span",17),g.vc(90,"disabled (Default: false) "),g.Qb(),g.Rb(91,"mat-radio-group",18),g.Zb("ngModelChange",function(t){return e.onDisabledChanged(t)}),g.uc(92,xt,2,2,"mat-radio-button",19),g.Qb(),g.Qb(),g.Rb(93,"div",16),g.Rb(94,"span",17),g.vc(95,"touchUi (Default: false) "),g.Qb(),g.Rb(96,"mat-radio-group",18),g.Zb("ngModelChange",function(t){return e.touchUi=t}),g.uc(97,_t,2,2,"mat-radio-button",19),g.Qb(),g.Qb(),g.Qb(),g.Rb(98,"pre"),g.Rb(99,"code",3),g.vc(100),g.Qb(),g.Qb(),g.Rb(101,"pre"),g.Rb(102,"code",20),g.vc(103),g.Qb(),g.Qb(),g.Qb(),g.Qb()),2&t){const t=g.nc(86);g.Bb(10),g.wc(e.code1),g.Bb(5),g.wc(e.code2),g.Bb(48),g.wc(e.code4),g.Bb(11),g.wc(e.code5),g.Bb(3),g.rc("background-color",null==e.colorCtr.value?null:e.colorCtr.value.rgba),g.Bb(1),g.xc("HEX: ",null==e.colorCtr.value?null:e.colorCtr.value.hex,""),g.Bb(2),g.xc("RGBA: ",null==e.colorCtr.value?null:e.colorCtr.value.rgba,""),g.Bb(3),g.ic("ngxMatColorPicker",t)("formControl",e.colorCtr)("disabled",e.disabled),g.Bb(1),g.ic("for",t),g.Bb(1),g.ic("touchUi",e.touchUi)("color",e.color),g.Bb(6),g.ic("ngModel",e.disabled),g.Bb(1),g.ic("ngForOf",e.options),g.Bb(4),g.ic("ngModel",e.touchUi),g.Bb(1),g.ic("ngForOf",e.options),g.Bb(3),g.wc(e.code6),g.Bb(3),g.wc(e.code3)}},directives:[ft.b,ft.a,mt.a,i.a,a.c,s.b,pt,r.c,r.o,r.f,bt,a.i,st,c.b,r.r,n.j,c.a],styles:[".config-wrapper[_ngcontent-%COMP%]{margin-bottom:15px}.config-wrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700;margin-right:15px}.config-wrapper[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.config-wrapper_step[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{margin-right:20px;width:100px}.zone[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}.zone-value[_ngcontent-%COMP%]{font-weight:700}.zone-config[_ngcontent-%COMP%]{flex-direction:column}pre[_ngcontent-%COMP%]{background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.03);border-radius:5px;display:block;overflow-x:auto;padding:20px;white-space:pre-wrap;font-family:Roboto Mono,monospace}pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:transparent;padding:0;font-size:100%}.api-table-properties[_ngcontent-%COMP%]{text-align:left;border-radius:2px;border-spacing:0;margin:0 0 32px;width:100%;box-shadow:0 2px 2px rgba(0,0,0,.24),0 0 2px rgba(0,0,0,.12);border-collapse:collapse;border-spacing:2px;border-color:grey}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table-row-group;vertical-align:middle}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.03);padding:8px 16px}.api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .api-table-properties[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{font-weight:700}.zone-value[_ngcontent-%COMP%]{display:flex;flex-direction:column}.zone-value[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:block;padding:5px}"]}),t})();var vt=o("M0ag");const wt=[{path:"",component:Ct}],Rt={display:{colorInput:"hex8"}};let yt=(()=>{class t{}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},providers:[{provide:et,useValue:Rt}],imports:[[n.b,h.c.forChild(wt),gt,i.b,r.j,r.t,a.e,s.c,c.c,l.b,vt.a]]}),t})()}}]);