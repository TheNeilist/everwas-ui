if [ -a /tmp/everwas-ui-pid ]
        then
                PID=$(cat /tmp/everwas-ui-pid)
		echo "Killing process $PID_EVERWAS_UI"
                kill -9 $PID_EVERWAS_UI
                rm -f /tmp/everwas-ui-pid
	else
		echo "pid file does not exist"
fi
