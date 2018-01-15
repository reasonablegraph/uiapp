#!/bin/bash

echo "
DELETE FROM dsd.ruleengine_lock;
INSERT INTO dsd.ruleengine_lock  (id,ts_start) VALUES (1,null) ;
"|psql $ARC_DB
