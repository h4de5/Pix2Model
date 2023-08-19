#!/bin/bash

# build new images and start
echo "Starting Images2Mesh ..."
docker-compose --profile deploy up --build -d
