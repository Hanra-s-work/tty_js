#!/bin/bash

CONTAINER_NAME=neutrinos
RESSOURCE_DIR=./website
CONTAINER_PORT=80
HOST_PORT=8080
WEBSITE_CONTENT=/usr/local/apache2/htdocs/

echo "Cleaning cache"
sudo docker container stop $CONTAINER_NAME
sudo docker container rm $CONTAINER_NAME
sudo docker volume prune -f
sudo docker buildx prune -f
sudo docker network prune -f
echo "Entering project"
cd $RESSOURCE_DIR
echo "Building image"
sudo docker build -t $CONTAINER_NAME ..
echo "Starting container"
sudo docker run \
    -d \
    -p $HOST_PORT:$CONTAINER_PORT \
    -v "$(pwd)":$WEBSITE_CONTENT \
    --name $CONTAINER_NAME $CONTAINER_NAME
echo "Exiting project"
cd ..
echo "End of script"
