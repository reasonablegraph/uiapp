#!/bin/bash
LOG=lock.log
echo > $LOG

./lock.sh 10 t1 >> $LOG&
./lock.sh 10 t2 >> $LOG&
