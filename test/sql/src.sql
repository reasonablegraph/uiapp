--- CHANGE XXX to testrg.js to CURRENT VERSION FROM testrg_version
--- SELECT count(*) FROM dsd.testrg_version WHERE version >= XXX;



CREATE TABLE dsd.testrg_version(id serial primary key, version integer, info varchar);
insert into dsd.testrg_version values (default,1,null);



alter table dsd.item2 add key1 varchar unique;

CREATE OR REPLACE FUNCTION dsd.mvalue_testrg() RETURNS trigger AS $$
DECLARE
BEGIN

  if (NEW.element = 'ea:test:key1') then
    update dsd.item2 set  key1 = NEW.text_value where item_id = NEW.item_id;
  end if;

  return NEW;
END
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_metadatavalue2_testrg_trigger ON dsd.metadatavalue2;
CREATE TRIGGER update_metadatavalue2_testrg_trigger
AFTER INSERT OR UPDATE ON dsd.metadatavalue2
FOR EACH ROW
EXECUTE PROCEDURE  dsd.mvalue_testrg();









DROP VIEW IF EXISTS dsd.testrg_items ;
CREATE VIEW dsd.testrg_items AS
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
        key, i.label, i.title,i.obj_type,i.jdata
      FROM TITEMS1 i, TITEMS1_CNT c)
  SELECT * FROM NODES
;

--RELATIONS
DROP VIEW IF EXISTS dsd.testrg_relations ;
CREATE VIEW dsd.testrg_relations AS
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
        i1.key as "from",i2.key as "to",r.element,r.inferred as inferred, r.link, r.level, p.element as parent_element, p.text_value as parent_value, r.text_value, r.relation as rel
      FROM dsd.metadatavalue2 r
        JOIN TITEMS1 i1 ON (r.item_id = i1.item_id)
        JOIN TITEMS1 i2 ON (r.ref_item = i2.item_id)
        LEFT JOIN dsd.metadatavalue2 p ON (p.lid = r.link AND p.item_id = r.item_id AND r.ref_item is not null)
      ORDER BY i1.key,r.element,i2.key
  ), RELS2 AS (
      SELECT row_number() OVER () as rid, "from","to","element","level","link", "inferred",rel, text_value, "parent_element","parent_value"  FROM RELS1
  ), LINES AS (
      SELECT row_number() OVER () as rn, r2.* FROM RELS2 r2
  ), LINES_CNT AS (
      SELECT count(*) as total FROM LINES
  )
  SELECT l.* FROM LINES l;



--ATTRIBUTES
DROP VIEW IF EXISTS dsd.testrg_properties ;
CREATE VIEW dsd.testrg_properties AS
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
      ORDER BY key, lid,inferred,ref_item,element)
  SELECT row_number() OVER () as aid, a.key as from_key, a.element, a.text_value, a.inferred, ref_key as ref_key,  a.relation, a.lid, a.link, a.level, a.data
  FROM ATTRS2 a ORDER BY key, lid,inferred,ref_key,element;



