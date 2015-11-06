from bottle import route, run

@route('/')
def hello():
    return "Let's go!\n"

run(host='0.0.0.0', port=8080, debug=True)