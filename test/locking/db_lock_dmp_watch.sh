#!/bin/bash

LOG_LIMIT=12;
if [ "x$1" != "x" ]; then
	LOG_LIMIT=$1;
fi


#./delete_lock_log.sh
watch -n 1 ./db_lock_dmp.sh $LOG_LIMIT
