#!/bin/bash
echo "" > methods.txt
echo "----------------------------------------------------" >> methods.txt
echo "FieldModelAccessor" >> methods.txt
echo "----------------------------------------------------" >> methods.txt
echo "" >> methods.txt
cat ../src/js/form/fctrl10_fieldmodelaccessor.js |grep prototype |egrep -v "^//" |egrep -v _remoteCreateSubItem |sed s/FieldModelAccessor.prototype.// |sed s/function// |sed s/{// |sed s/=// |sort >> methods.txt

echo "" >> methods.txt
echo "" >> methods.txt
echo "----------------------------------------------------" >> methods.txt
echo "FieldModel" >> methods.txt
echo "----------------------------------------------------" >> methods.txt
echo "" >> methods.txt
 
cat ../src/js/form/fctrl08_fieldmodel.js |grep FieldModel.prototype| egrep -v "prototype.constructor"|egrep -v "ObservableBase" |egrep -v "^//"  |sed s/FieldModel.prototype.// |sed s/function// |sed s/{// |sed s/=// |sort >> methods.txt


