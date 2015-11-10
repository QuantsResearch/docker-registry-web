# docker-registry-web
Simple web ui for docker private registry v2.

# Abstract
Web ui for docker private registry v2, provided as docker image.

# Usage

## docker-compose.yml
<pre>
    registry-web:
        restart: always
        image: quantsresearch/docker-registy-web
        ports:
            - 80:8080
        environment:
            ENV_DOCKER_REGISTRY_URL: <i>your_docker_registry_host:your_docker_registry_port</i>
            ENV_DOCKER_REGISTRY_USE_SSL: 1
</pre>

# Compatible browser
* Google Chrome
* Safari
* Firefox

Old browsers are not supported.

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
<pre>
    set HTTP_PROXY=<i>your_proxy</i>
    set HTTPS_PROXY=<i>your_proxy</i>
    set NO_PROXY=localhost,127.0.0.1,<i>your_docker_registry_host(if your docker registry server exists behind proxy)</i>
    vagrant up
</pre>

Start docker-registry-web.
<pre>
    vagrant ssh
    ...
    sudo su web
    export DOCKER_REGISTRY_URL=<i>your_docker_registry_host:your_docker_registry_port</i>
    export DOCKER_REGISTRY_USE_SSL=1 # if http, set 0.
    cd /var/local/web/
    python main.py
</pre>
Open http://192.168.33.99:8080/ with browser.
    
## Note

### cors
If "cors" is enabled, all that I need to develop is client side application(almost js).
But, unfortunately docker regstry api v2 doesn't support cors.
http://stackoverflow.com/questions/30164083/docker-registry-2-0-enable-cors

