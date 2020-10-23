# How to pack

Instructions for building & packing the date time picker project

1. Update the project's version in datetime-picker/package.json

2. Go to the project's root directory ad run the following
   `ng build NgxMatDatetimePicker`

3. You'll now have a dist folder. Browse to
   `cd ./dist/@angular-material-components/datetime-picker/`

4. Time to pack
   `npm pack`

5. You'll now have a .tgz file which you can use in your project
