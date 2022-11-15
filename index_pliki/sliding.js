
document.body.ondragstart = function() { return false; };

var selected_side
var selected_sticker_down
var selected_sticker_up

for (let i=0; i<6; i++) {
    cube_html_object.children[i].setAttribute('onmousedown', 'side_mouse_down(this)')
    cube_html_object.children[i].setAttribute('onmouseup', 'side_mouse_up(this)')

    for (let j=0; j<9; j++) {
        let sticker = cube_html_object.children[i].children[j]

        sticker.setAttribute('onmousedown', 'sticker_mouse_down(this)')
        sticker.setAttribute('onmouseup', 'sticker_mouse_up(this)')
    }
}

function sticker_mouse_down(sticker) {
    selected_sticker_down = sticker
}

function sticker_mouse_up(sticker) {
    selected_sticker_up = sticker


}

function side_mouse_down(side) {
    selected_side = side
}
function side_mouse_up(side) {
    if (selected_side != side) return

    let cube_side = cube.sides[side.id[side.id.length-1]]

    let selected_sticker_down_id = selected_sticker_down.getAttribute('class')[selected_sticker_down.getAttribute('class').length - 1]
    let selected_sticker_up_id = selected_sticker_up.getAttribute('class')[selected_sticker_up.getAttribute('class').length - 1]

    // R AND R' MOVE
    if (selected_sticker_down_id == selected_sticker_up_id) return
    if (['2', '5', '8'].indexOf(selected_sticker_down_id) != -1 && ['2', '5', '8'].indexOf(selected_sticker_up_id) != -1) {

        if (['yellow', 'blue', 'white', 'green'].indexOf(cube_side.center.front) != -1) {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.r_p_move()
            }
            else {
                cube.r_move()
            }
        }

        else if (cube_side.center.front == 'red') {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.b_p_move()
            }
            else {
                cube.b_move()
            }
        }
        else {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.f_p_move()
            }
            else {
                cube.f_move()
            }
        }

    }

    
    else if (['0', '3', '6'].indexOf(selected_sticker_down_id) != -1 && ['0', '3', '6'].indexOf(selected_sticker_up_id) != -1) {

        if (['yellow', 'blue', 'white', 'green'].indexOf(cube_side.center.front) != -1) {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.l_move()
            }
            else {
                cube.l_p_move()
            }
        }

        else if (cube_side.center.front == 'red') {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.f_move()
            }
            else {
                cube.f_p_move()
            }
        }
        else {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.b_move()
            }
            else {
                cube.b_p_move()
            }
        }
    }

    
    else if (['0', '1', '2'].indexOf(selected_sticker_down_id) != -1 && ['0', '1', '2'].indexOf(selected_sticker_up_id) != -1) {
        if (['orange', 'blue', 'red', 'green'].indexOf(cube_side.center.front) != -1) {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                if (cube_side.center.front != 'green') cube.u_p_move()
                else cube.d_p_move()
            }
            else {
                if (cube_side.center.front != 'green') cube.u_move()
                else cube.d_move()
            }
        }
        
        else if (cube_side.center.front == 'yellow') {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.b_p_move()
            }
            else {
                cube.b_move()
            }
        }
        else {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.f_p_move()
            }
            else {
                cube.f_move()
            }
        }
    }
    
    else if (['6', '7', '8'].indexOf(selected_sticker_down_id) != -1 && ['6', '7', '8'].indexOf(selected_sticker_up_id) != -1) {
        if (['orange', 'blue', 'red', 'green'].indexOf(cube_side.center.front) != -1) {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                if (cube_side.center.front != 'green') cube.d_move()
                else cube.u_move()
            }
            else {
                if (cube_side.center.front != 'green') cube.d_p_move()
                else cube.u_p_move()
            }
        }
        
        else if (cube_side.center.front == 'yellow') {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.f_move()
            }
            else {
                cube.f_p_move()
            }
        }
        else {
            if (selected_sticker_down_id < selected_sticker_up_id) {
                cube.b_move()
            }
            else {
                cube.b_p_move()
            }
        }
    }
}