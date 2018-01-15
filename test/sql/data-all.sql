
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
SELECT  i.key, i.item_id, i.obj_type, i.label, i.title, i.jdata  FROM TITEMS1 i
;

--RELATIONS
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
), RELS1 AS (
      SELECT
        i1.key       AS "from",
        i2.key       AS "to",
        i1.item_id   AS from_id,
        i2.item_id   AS to_id,
        r.element,
        r.inferred   AS inferred,
        r.link,
        r.level,
        p.element    AS parent_element,
        p.text_value AS parent_value,
        r.text_value,
        r.relation   AS rel
      FROM dsd.metadatavalue2 r
        JOIN TITEMS1 i1 ON (r.item_id = i1.item_id)
        JOIN TITEMS1 i2 ON (r.ref_item = i2.item_id)
        LEFT JOIN dsd.metadatavalue2 p ON (p.lid = r.link AND p.item_id = r.item_id AND r.ref_item IS NOT NULL)
      ORDER BY i1.key, i1.item_id, r.element, i2.key,i2.item_id
)
SELECT * FROM RELS1;

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
), ATTRS1 AS (
    SELECT item_id, element,text_value,inferred, ref_item,relation,lid,link,level, data from dsd.metadatavalue2
), ATTRS2 AS (
   SELECT i1.key,i1.item_id, a.element, a.text_value,a.inferred,i2.key as  ref_key, a.relation, a.lid,a.link,a.level,a.data
   FROM ATTRS1 a
   JOIN TITEMS1 i1  ON (i1.item_id = a.item_id)
   LEFT JOIN TITEMS1 i2  ON (i2.item_id = a.ref_item)
 ORDER BY key,item_id, lid,inferred,ref_item,element)
 SELECT  a.key as key, a.item_id as item_id, a.element, a.inferred, ref_key as ref_key,  a.relation, a.lid, a.link, a.level, substr(a.text_value,1,120) as text_value_120, a.data
 FROM ATTRS2 a ORDER BY key,item_id, lid,inferred,ref_key,element;










