#!/bin/bash
cd /home/ec2-user/trip-planner-api
curl -sL https://rpm.nodesource.com/setup_17.x | sudo -E bash -
yum -y install nodejs npm
