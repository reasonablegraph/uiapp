#!/bin/bash

#if [ "x$1"  != "x" ]; then
	if [ -d /tmp/rules/ ]; then
		echo "delete /tmp/rules";
		OWNER=`stat -c '%U'  /tmp/rules`;
		sudo -u $OWNER rm -rf /tmp/rules
	fi
#fi
#echo "SELECT  item_id,obj_type,label from dsd.item2;"|psql $ARC_DB;
#echo "SELECT  count(*) from dsd.item2;"|psql $ARC_DB;

echo "
DELETE FROM  dsd.thumbs;
DELETE FROM  public.bitstream_md5;
DELETE FROM  public.bundle2bitstream        ;
DELETE FROM  public.item2bundle             ;
DELETE FROM  dsd.download_log               ;
DELETE FROM  public.bitstream               ;
DELETE FROM  dsd.thumbs                     ;
DELETE FROM  dsd.submits                    ;
DELETE FROM  dsd.item2_history              ;
DELETE FROM  public.bitstream_md5           ;
DELETE FROM  dsd.artifacts                  ;
DELETE FROM  dsd.item_relation_arc_det      ;
DELETE FROM  dsd.subject_relation_arc_det   ;
DELETE FROM  public.bundle                  ;
DELETE FROM  dsd.subject_relation_type      ;
DELETE FROM  public.handle                  ;
DELETE FROM  public.checksum_results        ;
DELETE FROM  public.checksum_history        ;
DELETE FROM  public.bundle2content          ;

SELECT dsd.delete_item(item_id) from dsd.item2;

DELETE FROM dsd.value_year_ranges;
DELETE FROM dsd.activity_log;
DELETE FROM dsd.ruleengine_lock_log;
DELETE FROM dsd.ruleengine_log;
DELETE FROM dsd.db_messages;

SELECT setval('dsd.item2_id_seq',1);
SELECT setval('dsd.metadatavalue2_id_seq',1);
SELECT setval('dsd.submits_id_seq',1);
SELECT setval('dsd.value_year_ranges_id_seq',1);

"|psql $ARC_DB

#echo "SELECT dsd.delete_item(item_id) from dsd.item2;"|psql $ARC_DB
