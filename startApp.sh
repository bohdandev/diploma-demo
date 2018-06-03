#!/bin/sh
export NODE_ENV=production
export DB_PRD_HOST=diploma-demo-postgresql.crgbxd1fpnkx.us-east-2.rds.amazonaws.com
export DB_PRD_USER=diplomademo
export DB_PRD_PASS=diplomademo
export NODE_HOST=localhost
export NODE_PORT=3000
pm2 start /myapp/index.js -f index
exit 0
