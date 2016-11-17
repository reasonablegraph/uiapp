#!/bin/bash

grunt  clean commands commands-deps

mkdir -p ./target/deps/

function make_graph {
	echo "make_graph $1";
	cat  ./target/deps.dot |gvpr    -f ./src/g/subgraph.g  -a "100 $1" > ./target/deps/$1.dot
	dot -Tpng  -o ./target/deps/$1.png ./target/deps/$1.dot
}  



make_graph "form@auth-organization"
make_graph "form@auth-place"
make_graph "form@auth-manifestation"
make_graph "form@auth-work"
make_graph "form@auth-concept"
make_graph "form@auth-event"
make_graph "form@auth-genre"
make_graph "form@auth-object"
make_graph "form@auth-general"
make_graph "form@auth-object_collection"

eog ./target/deps/*.png
