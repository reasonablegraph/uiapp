#!/bin/bash

OUT_FILE=/tmp/data.txt
echo "
WITH TITEMS1 AS (
    SELECT
      v.text_value AS key,
      i.item_id,
      i.obj_type,
      i.label,
      i.jdata,
      i.title
    FROM dsd.item2 i
     LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
)
SELECT  i.key, i.item_id, i.obj_type, i.label, i.title, i.jdata  FROM TITEMS1 i;
" |psql  $ARC_DB > $OUT_FILE
echo "data:  $OUT_FILE"
less -S $OUT_FILE



