# docker-registy-web
web ui for docker private registry v2

# Abstract
Web ui for docker private registry v2, provided as docker image.

# Development

This is written by python, with bottle.py.

# Usage

## Set env
    export DOCKER_REGISTRY_URL=yourRegistryHost:5000
    export DOCKER_REGISTRY_IS_SECURE=1 # if http, set 0.

# Remarks
* Registry server certification is not verified.

