#!/bin/bash

if [ $# -lt 1 ]; 
    then echo "command name expected"
fi


DEPTH=100;
if [ $# -gt 1 ];
then 
	DEPTH=$2; 
fi

grunt  commands commands-deps;

mkdir -p ./target/tmp/

cat  ./target/deps.dot |gvpr    -f ./src/g/parents.g  -a "$DEPTH $1" > ./target/tmp/$1-p.dot
dot -Tpng  -o ./target/tmp/$1-p.png ./target/tmp/$1-p.dot
eog ./target/tmp/$1-p.png &
