--CREATE TYPE testrg_node AS  (item_id integer, label varchar, title varchar, obj_type varchar, jdata json );
--CREATE TYPE testrg_rel AS  ("from" varchar, "to" varchar , "element" varchar, "inferred" boolean);

\echo {
\echo ''

--SELECT '"testrg-version":"__TESTRG_VERSION__",';
SELECT '"validation-version":"1",';
SELECT '"generated": '||to_json(now())||',';


\echo "vertices": {


WITH TITEMS1 AS (
    SELECT
      i.item_id,
      i.obj_type,
      i.label,
      i.jdata,
      i.title,
      v.text_value AS key
    FROM dsd.item2 i
      JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id)
    WHERE v.element = 'ea:test:key1' ORDER BY v.text_value
),TITEMS1_CNT as (
    SELECT COUNT(*) as count
    FROM dsd.item2 i
      JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id)
    WHERE v.element = 'ea:test:key1'
), NODES as(
    SELECT c.count as total,row_number() OVER () as rn,
           to_json(key)  || ':'  || json_build_object('id',i.item_id,'label', i.label,'title',i.title,'obj_type',i.obj_type,'jdata',i.jdata)  as node
    FROM TITEMS1 i, TITEMS1_CNT c)
SELECT node  || CASE WHEN total <> rn THEN ',' ELSE '' END FROM NODES
;

\echo },
\echo "relations": {


WITH TITEMS1 AS (
    SELECT
      i.item_id,
      i.obj_type,
      i.label,
      v.text_value AS key
    FROM dsd.item2 i
      JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id)
    WHERE v.element = 'ea:test:key1'
), RELS1 AS (
    SELECT -- row_number() OVER () as rn1,
      i1.key as "from",i2.key as "to",r.element,r.inferred as inferred, r.link, r.level, p.element as parent_element, p.text_value as parent_value, r.text_value,r.relation as rel
    FROM dsd.metadatavalue2 r
      JOIN TITEMS1 i1 ON (r.item_id = i1.item_id)
      JOIN TITEMS1 i2 ON (r.ref_item = i2.item_id)
      LEFT JOIN dsd.metadatavalue2 p ON (p.lid = r.link AND p.item_id = r.item_id AND r.ref_item is not null)
    ORDER BY i1.key,r.element,i2.key
), RELS2 AS (
    SELECT '"r'|| to_json(row_number() OVER ()) || '":' || json_build_object('from',"from",'to',"to", 'element',"element", 'level',"level",'link',"link", 'inferred',"inferred",'rel',"rel",'text_value',"text_value",'parent_element',"parent_element",'parent_value',"parent_value") as rel  FROM RELS1
  --SELECT json_build_object('from',"from",'to',"to", 'element',"element", 'inferred',"inferred") as rel  FROM RELS1
), LINES AS (
    SELECT row_number() OVER () as rn, rel FROM RELS2
), LINES_CNT AS (
    SELECT count(*) as total FROM LINES
)
SELECT l.rel || CASE WHEN c.total <> l.rn THEN ',' ELSE '' END FROM LINES l , LINES_CNT c;



\echo },
\echo "properties": {

WITH TITEMS1 AS (
    SELECT
      i.item_id,
      i.obj_type,
      i.label,
      v.text_value AS key
    FROM dsd.item2 i
      JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id)
    WHERE v.element = 'ea:test:key1'
), ATTRS1 AS (
    SELECT item_id, element,text_value,inferred, ref_item,relation,lid,link,level, data from dsd.metadatavalue2
), ATTRS2 AS (
    SELECT i1.key, a.element, a.text_value,a.inferred,i2.key as  ref_key, a.relation, a.lid,a.link,a.level,a.data
    FROM ATTRS1 a
  JOIN TITEMS1 i1  ON (i1.item_id = a.item_id)
  LEFT JOIN TITEMS1 i2  ON (i2.item_id = a.ref_item)
ORDER BY key, lid,inferred,ref_item,element),
ATTRS AS (
SELECT '"a'||to_json(row_number() OVER ()) || '":'|| json_build_object('from_key',a.key, 'element',a.element,'text_value', a.text_value,'inferred',a.inferred,'ref_key',ref_key,'relation', a.relation,'lid', a.lid,'link',a.link,'level',a.level,'data',a.data   ) as attr
FROM ATTRS2 a ORDER BY key, lid,inferred,ref_key,element
), LINES AS(
SELECT row_number() OVER () as rn, attr  FROM ATTRS
), LINES_CNT AS (
  SELECT count(*) as total FROM LINES
)
SELECT l.attr || CASE WHEN c.total <> l.rn THEN ',' ELSE '' END FROM LINES l , LINES_CNT c;


--SELECT item_id, element,text_value,inferred, ref_item,relation,lid,link,data from dsd.metadatavalue2;





\echo }
\echo }
