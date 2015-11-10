# docker-registry-web
Simple web ui for docker private registry v2.

# Abstract
Web ui for docker private registry v2, provided as docker image.

# Usage

## docker-compose.yml

    registry-web:
      restart: always
      image: quantsresearch/docker-registy-web
      ports:
        - 80:8080
      environment:
        ENV_DOCKER_REGISTRY_URL: your_docker_registry_host:your_docker_registry_port
        ENV_DOCKER_REGISTRY_USE_SSL: 1

# Remarks
* Registry server certification is not verified.


# Development

## Server side
* python 3.5
* bottle.py

## Client side
* angular 1.4

## Develop with Vagrant

### Example(Windows)

Start virtual machine.

    set HTTP_PROXY=your_proxy
    set HTTPS_PROXY=your_proxy
    set NO_PROXY=localhost,127.0.0.1,your_docker_registry_host(if your docker registry server exists inside your LAN)
    vagrant up

Start docker-registry-web.

    vagrant ssh
    ...
    sudo su web
    export DOCKER_REGISTRY_URL=your_docker_registry_host:your_docker_registry_port
    export DOCKER_REGISTRY_USE_SSL=1 # if http, set 0.
    cd /var/local/web/
    python main.py
    
Open http://192.168.33.99:8080/ with browser.
    
## Note

### cors
If "cors" is enabled, all that I need to develop is client side application(almost js).
But, unfortunately docker regstry api v2 doesn't support cors.
http://stackoverflow.com/questions/30164083/docker-registry-2-0-enable-cors

