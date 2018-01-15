#!/bin/bash



# item_id, mfid, element, text_value, vid, ref, lid, lnk, lvl, data, obj_type, obj_class, w, r,lng 
# SELECT i1.key, r.item_id, r.mfid, r.element, r.text_value, r.vid, r.ref, r.lid, r.lnk, r.lvl, substr(r.data,1,22) as data, r.obj_type, r.w, r.r,r.lng  FROM dsd.admin_item_metadata_view_6 r
echo "
WITH TITEMS1 AS (
    SELECT
      i.item_id,
      i.obj_type,
      i.label,
      v.text_value AS key
    FROM dsd.item2 i
      JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id)
    WHERE v.element = 'ea:test:key1'
)

SELECT i1.key, r.item_id, r.mfid, r.element, r.text_value, r.vid, r.ref, r.lid, r.lnk, r.lvl, substr(r.data,1,12) as data, r.obj_type, r.w, r.r,r.lng  FROM dsd.admin_item_metadata_view_6 r
  JOIN TITEMS1 i1 ON (r.item_id = i1.item_id)
ORDER BY i1.key, element;
" | psql $ARC_DB


