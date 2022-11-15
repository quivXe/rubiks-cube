class Cube {
    constructor (sides=[]) {
        // up, left, front, right, down, back

        this.sides = sides

        this.up = this.sides[0]
        this.left = this.sides[1]
        this.front = this.sides[2]
        this.right = this.sides[3]
        this.down = this.sides[4]
        this.back = this.sides[5]

        this.up.which_side = 'up'
        this.left.which_side = 'left'
        this.front.which_side = 'front'
        this.right.which_side = 'right'
        this.down.which_side = 'down'
        this.back.which_side = 'back'

        this.surfaces = []
        for (let i=0; i<6; i++) {
            this.surfaces.push(document.getElementById(`side${i}`))
        }
    }

    r_move() {
        let f_r_col = this.front.r_move(this.down.cols[2])
        let u_r_col = this.up.r_move(f_r_col)
        let b_l_col = this.back.l_move(u_r_col)
        let d_r_col = this.down.r_move(b_l_col)
        this.right.f_move()

        this.draw()
    }
    r_p_move() {
        let f_r_col = this.front.r_move(this.up.cols[2])
        let d_r_col = this.down.r_move(f_r_col)
        let b_l_col = this.back.l_move(d_r_col)
        let u_r_col = this.up.r_move(b_l_col)
        this.right.f_p_move()

        this.draw()
    }
    l_move() {
        let f_l_col = this.front.l_move(this.up.cols[0])
        let d_l_col = this.down.l_move(f_l_col)
        let b_r_col = this.back.r_move(d_l_col)
        let u_l_col = this.up.l_move(b_r_col)
        this.left.f_move()

        this.draw()
    }
    l_p_move() {
        let f_l_col = this.front.l_move(this.down.cols[0])
        let u_l_col = this.up.l_move(f_l_col)
        let b_r_col = this.back.r_move(u_l_col)
        let d_l_col = this.down.l_move(b_r_col)
        this.left.f_p_move()

        this.draw()
    }
    u_move() {
        let f_u_row = this.front.u_move(this.right.rows[0])
        let l_u_row = this.left.u_move(f_u_row)
        let b_u_row = this.back.u_move(l_u_row)
        let r_u_row = this.right.u_move(b_u_row)
        this.up.f_move()
        
        this.draw()
    }
    u_p_move() {
        let f_u_row = this.front.u_move(this.left.rows[0])
        let r_u_row = this.right.u_move(f_u_row)
        let b_u_row = this.back.u_move(r_u_row)
        let l_u_row = this.left.u_move(b_u_row)
        this.up.f_p_move()
        
        this.draw()
    }
    d_move() {
        let f_d_row = this.front.d_move(this.left.rows[2])
        let r_d_row = this.right.d_move(f_d_row)
        let b_d_row = this.back.d_move(r_d_row)
        let l_d_row = this.left.d_move(b_d_row)
        this.down.f_move()

        this.draw()
    }
    d_p_move() {
        let f_d_row = this.front.d_move(this.right.rows[2])
        let l_d_row = this.left.d_move(f_d_row)
        let b_d_row = this.back.d_move(l_d_row)
        let r_d_row = this.right.d_move(b_d_row)
        this.down.f_p_move()

        this.draw()
    }
    f_move() {
        // i think i could go just x_rotation, u, x'_rotation, but creating these copies scares me XD

        let u_d_row = this.up.d_move(this.left.cols[2].reverse())
        let r_l_col = this.right.l_move(u_d_row)
        let d_u_row = this.down.u_move(r_l_col.reverse())
        let l_r_col = this.left.r_move(d_u_row)
        this.front.f_move()

        this.draw()
    }
    f_p_move() {
        // fuck this shit XD
        this.f_move()
        this.f_move()
        this.f_move()
    }
    b_move() {
        // :C
        let u_u_row = this.up.u_move(this.right.cols[2])
        let l_l_col = this.left.l_move(u_u_row.reverse())
        let d_d_row = this.down.d_move(l_l_col)
        let r_r_col = this.right.r_move(d_d_row.reverse())
        this.back.f_move()

        this.draw()
    }
    b_p_move() {
        // :C
        this.b_move()
        this.b_move()
        this.b_move()
    }

    x_rotation() {
        let up_copy = Object.assign(Object.create(Object.getPrototypeOf(this.up)), this.up)
        let left_Copy = Object.assign(Object.create(Object.getPrototypeOf(this.left)), this.left)
        let right_copy = Object.assign(Object.create(Object.getPrototypeOf(this.right)), this.right)
        let front_copy = Object.assign(Object.create(Object.getPrototypeOf(this.front)), this.front)
        let down_copy = Object.assign(Object.create(Object.getPrototypeOf(this.down)), this.down)
        let back_copy = Object.assign(Object.create(Object.getPrototypeOf(this.back)), this.back)

        this.up = front_copy
        this.front = down_copy
        this.down = back_copy
        this.back = up_copy

        this.up.which_side = 'up'
        this.left.which_side = 'left'
        this.front.which_side = 'front'
        this.right.which_side = 'right'
        this.down.which_side = 'down'
        this.back.which_side = 'back'
        this.sides[0] = this.up
        this.sides[1] = this.left
        this.sides[2] = this.front
        this.sides[3] = this.right
        this.sides[4] = this.down
        this.sides[5] = this.back

        this.draw()
    }
    y_rotation() {
        let up_copy = Object.assign(Object.create(Object.getPrototypeOf(this.up)), this.up)
        let left_Copy = Object.assign(Object.create(Object.getPrototypeOf(this.left)), this.left)
        let right_copy = Object.assign(Object.create(Object.getPrototypeOf(this.right)), this.right)
        let front_copy = Object.assign(Object.create(Object.getPrototypeOf(this.front)), this.front)
        let down_copy = Object.assign(Object.create(Object.getPrototypeOf(this.down)), this.down)
        let back_copy = Object.assign(Object.create(Object.getPrototypeOf(this.back)), this.back)

        this.left = front_copy
        this.front = right_copy
        this.right = back_copy
        this.back = left_Copy

        this.up.which_side = 'up'
        this.left.which_side = 'left'
        this.front.which_side = 'front'
        this.right.which_side = 'right'
        this.down.which_side = 'down'
        this.back.which_side = 'back'
        this.sides[0] = this.up
        this.sides[1] = this.left
        this.sides[2] = this.front
        this.sides[3] = this.right
        this.sides[4] = this.down
        this.sides[5] = this.back

        this.draw()
    }

    print() {
        for (let i=0; i<this.sides.length; i++) {
            this.sides[i].print()
        }
    }
    draw() {
        for (let i=0; i<this.sides.length; i++) {
            this.sides[i].draw(this.surfaces[i])
        }
    }

    do_algorithm(a) {
        a=a.replaceAll("‘", "'")
        a=a.replaceAll("’", "'")
        for (let i=0; i<a.length; i++) {
            let char = a[i]
            
            if (char == ' ') continue
            else if (char == 'R') {
                if (a[i+1] == "'") this.r_p_move()
                else if (a[i+1] == '2') {
                    this.r_move()
                    this.r_move()
                }
                else this.r_move()
            }
            else if (char == 'L') {
                if (a[i+1] == "'") this.l_p_move()
                else if (a[i+1] == '2') {
                    this.l_move()
                    this.l_move()
                }
                else this.l_move()
            }
            else if (char == 'U') {
                if (a[i+1] == "'") this.u_p_move()
                else if (a[i+1] == '2') {
                    this.u_move()
                    this.u_move()
                }
                else this.u_move()
            }
            else if (char == 'D') {
                if (a[i+1] == "'") this.d_p_move()
                else if (a[i+1] == '2') {
                    this.d_move()
                    this.d_move()
                }
                else this.d_move()
            }
            else if (char == 'F') {
                if (a[i+1] == "'") this.f_p_move()
                else if (a[i+1] == '2') {
                    this.f_move()
                    this.f_move()
                }
                else this.f_move()
            }
            else if (char == 'B') {
                if (a[i+1] == "'") this.b_p_move()
                else if (a[i+1] == '2') {
                    this.b_move()
                    this.b_move()
                }
                else this.b_move()
            }
        }
    }
}