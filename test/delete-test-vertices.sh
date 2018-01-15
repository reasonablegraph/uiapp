#!/bin/bash


echo "select i.item_id,i.obj_type,i.label from dsd.item2 i JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id) WHERE v.element='ea:test:key1';"|psql $ARC_DB
echo "select dsd.delete_item(item_id) from dsd.metadatavalue2 WHERE element='ea:test:key1';"|psql $ARC_DB
#echo "DELETE from dsd.metadatavalue2 WHERE element='ea:test:key1';"|psql $ARC_DB
