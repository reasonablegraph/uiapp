#!/bin/bash

export PSQLRC=./etc/psqlrc
PSQL="psql -q -t"

echo "vertices: {"
	$PSQL -f ./sql/nodes-json.sql $ARC_DB
echo "},"
echo "relations: ["
	$PSQL -f ./sql/relations-json.sql $ARC_DB 
echo "]"
