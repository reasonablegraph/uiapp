#!/bin/bash


if [ "x$1" == "x" ]; then

	echo "
	SELECT v.text_value as key, i.item_id,  --i.obj_type,
	(i.jdata::json)->'neighbourhood'->'def' as old,
	(i.jdata::json)->'neighborhood'->'def' as new,
	--(i.jdata::json)->'neighborhood' as new,
	replace((((i.jdata::json)->'neighborhood')::jsonb - 'def')::varchar,', ',',') as new2
	FROM dsd.item2  i
	LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
	ORDER BY 2;
	"|psql $ARC_DB


	echo "
	SELECT v.text_value as key, i.item_id,
	(i.jdata::json)->'neighborhood'->'def' as new,
	--(i.jdata::json)->'neighborhood' as new,
	replace((((i.jdata::json)->'neighborhood')::jsonb - 'def')::varchar,', ',',') as new2
	FROM dsd.item2  i
	LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
	ORDER BY 2;
	"|psql $ARC_DB

	exit;

fi




#SELECT i.item_id	FROM dsd.item2  i	WHERE i.key1 = '$1' OR i.item_id::varchar = '$1'
ID=`echo "
	SELECT i.item_id
	FROM dsd.item2  i
	LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
	WHERE v.text_value = '$1' OR i.item_id::varchar = '$1'
	"|psql -t $ARC_DB`;

#echo "ID: $ID";
#exit

C1=`echo "
SELECT count(*) FROM (SELECT json_array_elements((jdata::json)->'neighbourhood'->'def')::varchar::integer FROM dsd.item2 WHERE item_id = $ID) foo
"|psql -t $ARC_DB`
C2=`echo "
SELECT count(*) FROM (SELECT json_array_elements((jdata::json)->'neighborhood'->'def')::varchar::integer FROM dsd.item2 WHERE item_id = $ID) foo
"|psql -t $ARC_DB`


echo "================================================================================================="
echo "SELECT v.text_value as test_key ,i.item_id, i.obj_type, i.label
FROM dsd.item2 i
LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
WHERE i.item_id = $ID
" |psql -t $ARC_DB|head -1
echo "SELECT 'old   : ' || coalesce(((jdata::json)->'neighbourhood'->'def')::varchar,'') FROM dsd.item2 WHERE item_id = $ID"|psql -t $ARC_DB|head -1
echo "SELECT 'new   : ' || coalesce(((jdata::json)->'neighborhood'->'def')::varchar,'') FROM dsd.item2 WHERE item_id = $ID"|psql -t $ARC_DB|head -1
echo "SELECT 'all   : ' || coalesce(replace((((jdata::json)->'neighborhood')::jsonb -'def')::varchar,', ',','),'') FROM dsd.item2 WHERE item_id = $ID"|psql -t $ARC_DB|head -1
#echo "SELECT 'labelF: ' || coalesce(((jdata::json)->'neighborhood'->'labelF')::varchar,'') FROM dsd.item2 WHERE item_id = $ID"|psql -t $ARC_DB|head -1
echo "================================================================================================="
echo ""
echo "OLD COUNT $C1"
echo "NEW COUNT $C2"
echo "------------------"
echo ""


echo "def: OLD INTERSECT NEW";
echo "
WITH ne as ( SELECT  (i.jdata::json)->'neighbourhood'->'def' n1, (i.jdata::json)->'neighborhood'->'def' n2 
FROM dsd.item2 i
WHERE i.item_id = $ID),
n1 as   (SELECT json_array_elements(n1)::varchar::integer as old FROM ne),
n2 as   (SELECT json_array_elements(n2)::varchar::integer as new FROM ne)
SELECT v.text_value as key, n1.old, i.obj_type, i.label FROM n1 JOIN dsd.item2 i ON (i.item_id = n1.old)  LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
INTERSECT
SELECT v.text_value as key, new , i.obj_type, i.label FROM n2 JOIN dsd.item2 i ON (i.item_id = n2.new)  LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
" |psql $ARC_DB


echo "def: OLD EXCEPT NEW";
echo "
WITH ne as ( SELECT  (jdata::json)->'neighbourhood'->'def' n1, (jdata::json)->'neighborhood'->'def' n2 FROM dsd.item2 WHERE item_id = $ID),
n1 as   (SELECT json_array_elements(n1)::varchar::integer as old FROM ne),
n2 as   (SELECT json_array_elements(n2)::varchar::integer as new FROM ne)
SELECT v.text_value as key, n1.old, i.obj_type, i.label FROM n1 JOIN dsd.item2 i ON (i.item_id = n1.old) LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
EXCEPT
SELECT v.text_value as key, n2.new, i.obj_type, i.label FROM n2 JOIN dsd.item2 i ON (i.item_id = n2.new) LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
" |psql $ARC_DB


echo "def: NEW EXCEPT OLD";
echo "
WITH ne as ( SELECT  (jdata::json)->'neighbourhood'->'def' n1, (jdata::json)->'neighborhood'->'def' n2 FROM dsd.item2 WHERE item_id = $ID),
n1 as   (SELECT json_array_elements(n1)::varchar::integer as old FROM ne),
n2 as   (SELECT json_array_elements(n2)::varchar::integer as new FROM ne)
SELECT v.text_value as key, new , i.obj_type, i.label FROM n2 JOIN dsd.item2 i ON (i.item_id = n2.new) LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
EXCEPT
SELECT v.text_value as key, n1.old, i.obj_type, i.label FROM n1 JOIN dsd.item2 i ON (i.item_id = n1.old) LEFT JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id AND v.element = 'ea:test:key1' )
" |psql $ARC_DB




