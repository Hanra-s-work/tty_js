#!/bin/bash
# This script is used to run the web version of the container.

SUDO=sudo

PULL_NAME="httpd:2.4.57"

CONTAINER_NAME=borwein
CONTAINER_IMAGE=my-apache2-borwein
CONTAINER_PORT=80

SRC_FOLD=../website
DEST_FOLD=/usr/local/apache2/htdocs/

PORT=8080
URL="http://localhost:$PORT"

function check_if_SRC_FOLD_exists {
    if [ ! -d "$SRC_FOLD" ]; then
        echo "Source folder not found."
        exit 1
    fi
    return 0
}

function create_dockerfile {
    echo "Creating Dockerfile ..."
    echo "FROM $PULL_NAME" >Dockerfile
    echo "RUN mkdir -p $DEST_FOLD" >>Dockerfile
    # echo "COPY $SRC_FOLD $DEST_FOLD" >> Dockerfile
    echo "EXPOSE $PORT" >>Dockerfile
    # echo "CMD [\"httpd-foreground\"]" >> Dockerfile
    return $?
}

function check_for_the_dockerfile {
    if [ ! -f Dockerfile ]; then
        echo "Dockerfile not found."
        create_dockerfile
        return $?
    fi
    return 0
}

function check_for_the_docker {
    if ! command -v docker &>/dev/null; then
        echo "docker could not be found."
        exit 1
    fi
    return 0
}

function check_for_the_docker_image {
    if ! $SUDO docker image ls | grep -q "$CONTAINER_IMAGE"; then
        echo "Docker image not found."
        return 1
    fi
    return 0
}

function check_for_the_docker_container {
    if ! $SUDO docker container ls -a | grep -q "$CONTAINER_NAME"; then
        echo "Docker container not found."
        return 1
    fi
    return 0
}

function check_for_the_docker_container_running {
    if ! $SUDO docker container ls | grep -q "$CONTAINER_NAME"; then
        echo "Docker container not running."
        return 1
    fi
    return 0
}

function create_docker_image {
    echo "Building image ..."
    $SUDO docker build -t "$CONTAINER_IMAGE" .
    return $?
}

function create_docker_container {
    echo "Creating container ..."
    $SUDO docker run -v "$(pwd)/$SRC_FOLD":"$DEST_FOLD" -p "$PORT":"$CONTAINER_PORT" -d --name "$CONTAINER_NAME" $CONTAINER_IMAGE
    return $?
}

function stop_docker_container {
    echo "Stopping container ..."
    $SUDO docker stop "$CONTAINER_NAME"
    return $?
}

function start_docker_container {
    echo "Starting container ..."
    $SUDO docker start "$CONTAINER_NAME"
    return $?
}

function remove_docker_container {
    echo "Removing container ..."
    $SUDO docker rm "$CONTAINER_NAME"
    return $?
}

function remove_docker_image {
    echo "Removing image ..."
    $SUDO docker rmi "$CONTAINER_IMAGE"
    return $?
}

function run_docker_container {
    echo "Running container ..."
    $SUDO docker run -v "$(pwd)/$SRC_FOLD":"$DEST_FOLD" -p "$PORT":"$CONTAINER_PORT" -d --name "$CONTAINER_NAME" $CONTAINER_IMAGE
    return $?
}

function exec_docker_container {
    echo "Executing container ..."
    $SUDO docker exec -it "$CONTAINER_NAME" /bin/bash
    return $?
}

function let_spin_up {
    echo "Letting the container spin up ..."
    sleep 4
    return 0
}

function get_home_page {
    echo "Getting the home page ..."
    curl -s "$URL"
    return $?
}

function display_url {
    echo "PORT: $PORT"
    echo "URL: $URL"
    return 0
}

function build_docker {
    echo "Building the docker ..."
    check_for_the_dockerfile
    check_for_the_docker
    check_for_the_docker_image
    if [ $? -eq 0 ]; then
        remove_docker_image
    fi
    create_docker_image
    return 0
}

function start_container {
    check_for_the_docker
    check_for_the_docker_container
    if [ $? -eq 0 ]; then
        start_docker_container
        let_spin_up
        get_home_page
        display_url
        return 0
    else
        build_docker
        check_for_the_docker_container
        if [ $? -eq 0 ]; then
            start_docker_container
            let_spin_up
            get_home_page
            display_url
            return 0
        else
            create_docker_container
            let_spin_up
            get_home_page
            display_url
            return 0
        fi
        echo "Docker container not found."
        return 1
    fi
}

function rebuild {
    echo "Rebuilding the docker ..."
    check_for_the_dockerfile
    check_for_the_docker
    check_for_the_docker_container
    if [ $? -eq 0 ]; then
        stop_docker_container
        remove_docker_container
    fi
    build_docker
    create_docker_container
    # start_docker_container
    start_container
    return 0
}

function exec_docker {
    echo "Entering the container ..."
    start_container
    if [ $? -eq 0 ]; then
        exec_docker_container
        return 0
    else
        echo "Docker container not found."
        return 1
    fi
}

function run_the_container {
    echo "Running the container ..."
    start_container
}

function disp_help {
    echo "Usage: ./run.sh [OPTION]"
    echo "Run the web version of the container."
    echo ""
    echo "Options:"
    echo "  rebuild         Rebuild the docker."
    echo "  exec            Enter the container."
    echo "  url             Display the URL."
    echo "  start, run      Start the container."
    echo "  build           Build the docker."
    echo "  create          Create the container."
    echo "  stop            Stop the container."
    echo "  remove          Remove the container."
    echo "  image           Remove the image."
    echo "  --help, -h, /?  Display this help and exit."
}

if [ $# -ge 1 ]; then
    if [ $1 == "--help" ] || [ $1 == "-h" ] || [ $1 == "/?" ]; then
        disp_help
        exit 0
    fi
    while [ $# -gt 0 ]; do
        if [ $1 == "rebuild" ]; then
            rebuild
        fi
        if [ $1 == "exec" ]; then
            exec_docker
        fi
        if [ $1 == "url" ]; then
            display_url
        fi
        if [ $1 == "start" ]; then
            start_container
        fi
        if [ $1 == "build" ]; then
            build_docker
        fi
        if [ $1 == "create" ]; then
            create_docker_container
        fi
        if [ $1 == "stop" ]; then
            stop_docker_container
        fi
        if [ $1 == "remove" ]; then
            remove_docker_container
        fi
        if [ $1 == "image" ]; then
            remove_docker_image
        fi
        if [ $1 == "run" ]; then
            run_the_container
        fi
        shift
    done
    exit $?
else
    disp_help
    exit 0
fi
