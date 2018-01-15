#!/bin/bash
LOG=lock.log
echo > $LOG

./lock.sh 4 t1 >> $LOG&
./lock.sh 5 t2 >> $LOG&
./lock.sh 6 t3 >> $LOG&
