from bottle import route, run, static_file, view, functools

MyAdapter = functools.partial(bottle.SimpleTemplate, syntax='<% %> % {^^}'))
template = functools.partial(bottle.template, template_adapter=MyAdapter)

# static
@route('/js/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='/static/js/')

@route('/')
@view('main')
def hello():
    return

run(host='0.0.0.0', port=8080, debug=True)