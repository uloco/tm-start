#!/usr/bin/env node

const { exec } = require('child_process');

exec('http-server /home/pi/dynd/dynd-app-frontend/dist', {stdio: 'inherit'})
// exec('/usr/bin/chromium-browser --kiosk --disable-restore-session-state "http://localhost:8080"', {stdio: 'inherit'})
