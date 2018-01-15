

##
./delete-all.sh && ./testrg c3 && cp /tmp/context.json /tmp/context.json.bak


## edit phpunit test
cp /tmp/context.json.bak /tmp/context.json && ./testrg assert_vertices --skip-rm-initial-context

cp /tmp/context.json.bak /tmp/context.json && ./testrg  testrg/VerticesTest --laravel --skip-rm-initial-context
