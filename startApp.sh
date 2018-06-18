#!/bin/sh
export NODE_ENV=production
export NODE_HOST=localhost
export NODE_PORT=3000
pm2 start /myapp/index.js -f index
exit 0
