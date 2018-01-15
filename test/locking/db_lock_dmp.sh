#!/bin/bash

LOG_LIMIT=12;
if [ "x$1" != "x" ]; then
	LOG_LIMIT=$1;
fi



echo "
SELECT * from dsd.ruleengine_lock; 
SELECT *  from (SELECT *  from dsd.ruleengine_lock_log ORDER BY ts desc limit ${LOG_LIMIT}) koko ORDER BY 3 asc;
"|psql $ARC_DB
