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
SELECT
  --i1.key as key1, r.element, i2.key as key2, r.r, r.item1, r.item2,
  '{from: "' || i1.key || '", to: "' || i2.key  || '", element: "' || r.element || '", inferred: ' || r.r  ||'}, '
--r.text_value
FROM dsd.admin_item_graph_view_2b r
  JOIN TITEMS1 i1 ON (r.item1 = i1.item_id)
  JOIN TITEMS1 i2 ON (r.item2 = i2.item_id)
ORDER BY i1.key,r.element;
