

--"CHAIN3":{relations:[]}

SELECT
  '"' || v.text_value  || '":{}' as nodes
FROM dsd.item2 i
  JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id)
WHERE v.element = 'ea:test:key1' ORDER BY v.text_value
