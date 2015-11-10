# docker-registy-web
Simple web ui for docker private registry v2.

# Abstract
Web ui for docker private registry v2, provided as docker image.

# Development

## Server side
* python 3.5
* bottle.py

## Client side
* angular 1.4

# Usage

## Set env
    export DOCKER_REGISTRY_URL=yourRegistryHost:5000
    export DOCKER_REGISTRY_IS_SECURE=1 # if http, set 0.

# Remarks
* Registry server certification is not verified.

