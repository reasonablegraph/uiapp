#!/bin/bash

LOCK_SECONDS=8;
if [ "x$1" != "x" ]; then
	LOCK_SECONDS=$1;
fi

NAME=""
if [ "x$2" != "x" ]; then
	NAME=$2;
fi

echo "s: $NAME `date`";
curl "http://localhost/prepo/lock_test?t={$LOCK_SECONDS}&n=${NAME}"
echo "e: $NAME `date`";
