#!/usr/bin/env python
from bottle import route, run, static_file, view, functools
import os, http.client, ssl

DOCKER_REGISTRY_URL=os.environ["DOCKER_REGISTRY_URL"]
DOCKER_REGISTRY_IS_SECURE=(os.environ["DOCKER_REGISTRY_IS_SECURE"] == "1")

# static
@route("/js/<filepath:path>")
def serverStatic(filepath):
    return static_file(filepath, root='./static/js')

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
    print("callRegistryApi with " + ("https" if DOCKER_REGISTRY_IS_SECURE else "http"))
    conn = http.client.HTTPSConnection(DOCKER_REGISTRY_URL, context=ssl._create_unverified_context() ) if DOCKER_REGISTRY_IS_SECURE else http.client.HTTPConnection(DOCKER_REGISTRY_URL)
    conn.request( method, "/v2/" + api )
    res = conn.getresponse()
    status = res.status
    body = res.read().decode("UTF-8");
    print("status=" + str(status))
    conn.close()
    if status == 200:
        return body
    else:
        return "{error:" + status + "}"



run(host='0.0.0.0', port=8080, debug=True)