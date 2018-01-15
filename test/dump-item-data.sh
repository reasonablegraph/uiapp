#!/bin/bash

pg_dump -t dsd.item2  -t dsd.metadatavalue2 -a  $ARC_DB
