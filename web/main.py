#!/usr/bin/env python
from bottle import route, run, static_file, view, functools
import os, http.client, ssl

DOCKER_REGISTRY_URL=os.environ["DOCKER_REGISTRY_URL"]
DOCKER_REGISTRY_USE_SSL=(os.environ["DOCKER_REGISTRY_USE_SSL"] == "1")

# static
@route("/<filepath:re:.*\.js>")
def js(filepath):
    return static_file(filepath, root='./static/js')
@route("/<filepath:re:.*\.html>")
def html(filepath):
    return static_file(filepath, root='./static/html/')

# main
@route("/")
@view("main")
def main():
    return

# docker registry api
@route("/registryApi/<api:path>")
def callApi(api):
    return callRegistryApi(api, "GET", "")

# exec call docker registry api
def callRegistryApi(api, method, param):
    conn = http.client.HTTPSConnection(DOCKER_REGISTRY_URL, context=ssl._create_unverified_context() ) if DOCKER_REGISTRY_USE_SSL else http.client.HTTPConnection(DOCKER_REGISTRY_URL)
    conn.request( method, "/v2/" + api )
    res = conn.getresponse()
    status = res.status
    body = res.read().decode("UTF-8");
    #rint("status=" + str(status))
    conn.close()
    if status == 200:
        return body
    else:
        return "{error:" + status + "}"



run(host='0.0.0.0', port=8080, debug=True)