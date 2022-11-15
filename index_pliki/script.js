
const algorithm_input = document.getElementById('algorithm_input')
const cube_html_object = document.getElementById('cube')
function algo_from_html() {
    cube.do_algorithm(algorithm_input.value)
}

var current_y_rotation = 30
var current_x_rotation = 30
function change_y(inpt) {
    current_y_rotation = inpt.value
    cube_html_object.style.transform = `rotateX(${current_x_rotation}deg) rotateY(${current_y_rotation}deg)`
}
function change_x(inpt) {
    current_x_rotation = inpt.value
    cube_html_object.style.transform = `rotateX(${current_x_rotation}deg) rotateY(${current_y_rotation}deg)`
}
const side = new Side(
    new Center('blue'),
    [
        new Edge({'up': 'white', 'front': 'blue'}),
        new Edge({'left': 'red', 'front': 'blue'}),
        new Edge({'right': 'orange', 'front': 'blue'}),
        new Edge({'down': 'yellow', 'front': 'blue'})
    ],
    []
)

const w1 = new Side(
    new Center('blue'),
    [
        new Edge({'front': 'orange'}),
        new Edge({'front': 'blue'}),
        new Edge({'front': 'yellow'}),
        new Edge({'front': 'blue'}),
    ],
    [
        new Corner({'front': 'orange'}),
        new Corner({'front': 'orange'}),
        new Corner({'front': 'blue'}),
        new Corner({'front': 'yellow'}),
    ]
)

const cube = new Cube(
    [
        new Side(
            new Center('yellow')
        ),
        new Side(
            new Center('orange')
        ),
        new Side(
            new Center('blue')
        ),
        new Side(
            new Center('red')
        ),
        new Side(
            new Center('white')
        ),
        new Side(
            new Center('green')
        ),
    ]
)

const s = document.getElementById('w2')

cube.draw()