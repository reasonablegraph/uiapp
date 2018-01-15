-- metadata_value_id | integer                     | not null default nextval('dsd.metadatavalue2_id_seq'::regclass)
-- item_id           | integer                     |
-- metadata_field_id | integer                     |
-- text_value        | text                        |
-- text_value_search | text                        |
-- text_lang         | character varying           |
-- dt_create         | timestamp without time zone | default now()
-- text_value_fst    | tsvector                    |
-- weight            | integer                     |
-- mvalue            | integer                     |
-- so                | boolean                     | default false
-- ref_item          | integer                     |
-- relation          | bigint                      |
-- element           | character varying           |
-- data              | json                        |
-- lid               | integer                     |
-- link              | integer                     |
-- obj_type          | character varying           |
-- obj_class         | character varying           |
-- deps              | character varying[]         |
-- inferred          | boolean                     | default false
-- level             | integer                     | default 0
-- neighbor          | boolean                     | default true



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
      i1.key as "from",i2.key as "to",r.element,r.inferred as inferred, r.link, r.level, p.element as parent_element, p.text_value as parent_value
    FROM dsd.metadatavalue2 r
      JOIN TITEMS1 i1 ON (r.item_id = i1.item_id)
      JOIN TITEMS1 i2 ON (r.ref_item = i2.item_id)
      LEFT JOIN dsd.metadatavalue2 p ON (p.lid = r.link AND p.item_id = r.item_id AND r.ref_item is not null)
    ORDER BY i1.key,r.element,i2.key
), RELS2 AS (
    SELECT json_build_object('key', to_json('r'||row_number() OVER ()), 'from',"from",'to',"to", 'element',"element", 'level',"level",'link',"link", 'inferred',"inferred",'parent_element',"parent_element",'parent_value',"parent_value") as rel  FROM RELS1
  --SELECT json_build_object('from',"from",'to',"to", 'element',"element", 'inferred',"inferred") as rel  FROM RELS1
), LINES AS (
    SELECT row_number() OVER () as rn, rel FROM RELS2
), LINES_CNT AS (
    SELECT count(*) as total FROM LINES
)
SELECT l.rel || CASE WHEN c.total <> l.rn THEN ',' ELSE '' END FROM LINES l , LINES_CNT c;





-- SELECT r.item_id, r.element, r.ref_item, r.link,r.lid, r.level, p.element as parent, p.item_id as p_item_id, p.lid as p_lid,p.link as p_link,p.level as p_level
-- FROM dsd.metadatavalue2 r
--   LEFT JOIN dsd.metadatavalue2 p ON (p.lid = r.link AND p.item_id = r.item_id AND r.ref_item is not null);