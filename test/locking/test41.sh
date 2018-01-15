#!/bin/bash
LOG=lock.log
echo > $LOG

./lock.sh 6 t1 >> $LOG&
./lock.sh 6 t2 >> $LOG&
./lock.sh 6 t3 >> $LOG&
./lock.sh 6 t4 >> $LOG&
