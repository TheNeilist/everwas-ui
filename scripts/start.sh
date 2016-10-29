#!/usr/bin/env bash

BUILD_ID=pleaseDontKillMeUI
cd /var/lib/jenkins/workspace/everwas-ui;
nohup ember s --environment production > log.txt 2> errors.txt < /dev/null &
PID_EVERWAS_UI=$!
echo $PID_EVERWAS_UI > /tmp/everwas-ui-pid
echo "started everwas-ui PID $PID_EVERWAS_UI"
