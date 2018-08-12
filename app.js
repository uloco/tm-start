#!/usr/bin/env node

const { exec } = require('child_process');

const run = (cmd) => exec(cmd, {stdio: 'inherit'})

run('http-server /home/pi/dynd/dynd-app-frontend/dist')
process.chdir('/home/pi/dynd/dynd-app-backend')
run('npm start')
