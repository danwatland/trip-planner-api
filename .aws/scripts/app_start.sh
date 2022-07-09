#!/bin/bash
cd /home/ec2-user/trip-planner-api
pm2 start npm --name "trip-planner-api" -- start
pm2 startup
pm2 save
pm2 restart all
