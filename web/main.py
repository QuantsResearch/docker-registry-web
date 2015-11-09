#!/usr/bin/env python
from bottle import route, run, static_file, view, functools
import bottle

# static
@route('/js/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='./static/js')

@route('/')
@view('main')
def hello():
    return

run(host='0.0.0.0', port=8080, debug=True)