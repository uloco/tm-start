# Tendermate Start Script

## Paths

app.js -> /home/pi
autostart -> /home/pi/.config/lxsession/LXDE-pi

Add following line to `/etc/rc.local` (before `exit 0`)
`su pi -c 'node /home/pi/app.js < /dev/null &`

## TODO
* Start backend 
* (optimize start up speed?)

