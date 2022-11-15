class Side {
    constructor (center, edges=[], corners=[]) {
        this.center = center

        if (edges.length == 0) {
                edges = [
                    new Edge({'front': center.front}, 2),
                    new Edge({'front': center.front}, 4),
                    new Edge({'front': center.front}, 6),
                    new Edge({'front': center.front}, 8),
                ],
                corners = [
                    new Corner({'front': center.front}, 1),
                    new Corner({'front': center.front}, 3),
                    new Corner({'front': center.front}, 7),
                    new Corner({'front': center.front}, 9),
                ]
        }
        else if (corners.length == 0) {
            corners[0] = new Corner({'up': edges[0].up, 'left': edges[1].left, 'front': this.center.front})
            corners[1] = new Corner({'up': edges[0].up, 'right': edges[2].right, 'front': this.center.front})
            corners[2] = new Corner({'down': edges[3].down, 'left': edges[1].left, 'front': this.center.front})
            corners[3] = new Corner({'down': edges[3].down, 'right': edges[2].right, 'front': this.center.front})
        }

        this.rows = [
            [corners[0], edges[0], corners[1]],
            [edges[1], center, edges[2]],
            [corners[2], edges[3], corners[3]]
        ]

    }

    set which_side(side) {
        this._which_side = side

        if (this._which_side == 'back') {
            let rows_copy = Object.assign([], this.rows)

            this.rows[0] = rows_copy[2].reverse()
            this.rows[1] = rows_copy[1].reverse()
            this.rows[2] = rows_copy[0].reverse()
        }
    }

    r_move(col_to_replace) {
        let actual_col_copy
        if (this._which_side == 'back') {
            actual_col_copy = Object.assign([], this.cols[0])
            this.cols = [Object.assign([], col_to_replace), this.cols[1], this.cols[2]]
        }
        else {
            actual_col_copy = Object.assign([], this.cols[2])
            this.cols = [this.cols[0], this.cols[1], Object.assign([], col_to_replace)]
        }
        return actual_col_copy
    }

    l_move(col_to_replace) {
        let actual_col_copy
        if (this._which_side == 'back') {
            actual_col_copy = Object.assign([], this.cols[2])
            this.cols = [this.cols[0], this.cols[1], Object.assign([], col_to_replace)]
        }
        else {
            actual_col_copy = Object.assign([], this.cols[0])
            this.cols = [Object.assign([], col_to_replace), this.cols[1], this.cols[2]]
        }


        return actual_col_copy
    }

    f_move() {
        // let actual_rows_copy = Object.assign([], this.rows)
        let actual_cols_copy = Object.assign([], this.cols)

        this.rows = [
            actual_cols_copy[0].reverse(),
            actual_cols_copy[1].reverse(),
            actual_cols_copy[2].reverse()
        ]
    }
    f_p_move() {
        // let actual_rows_copy = Object.assign([], this.rows)
        let actual_cols_copy = Object.assign([], this.cols)

        this.rows = [
            actual_cols_copy[2],
            actual_cols_copy[1],
            actual_cols_copy[0]
        ]
    }

    u_move(row_to_replace) {
        let actual_row_copy
        if (this._which_side == 'back') {
            actual_row_copy = Object.assign([], this.rows[2]).reverse()
            this.rows = [this.rows[0], this.rows[1], Object.assign([], row_to_replace).reverse()]
        }
        else {
            actual_row_copy = Object.assign([], this.rows[0])
            this.rows = [Object.assign([], row_to_replace), this.rows[1], this.rows[2]]
        }
        return actual_row_copy
    }

    d_move(row_to_replace) {
        let actual_row_copy
        if (this._which_side == 'back') {
            actual_row_copy = Object.assign([], this.rows[0]).reverse()
            this.rows = [Object.assign([], row_to_replace).reverse(), this.rows[1], this.rows[2]]
        }
        else {
            actual_row_copy = Object.assign([], this.rows[2])
            this.rows = [this.rows[0], this.rows[1], Object.assign([], row_to_replace)]
        }
        return actual_row_copy
    }
    
    get cols() {
        return [
            [this.rows[0][0], this.rows[1][0], this.rows[2][0]],
            [this.rows[0][1], this.rows[1][1], this.rows[2][1]],
            [this.rows[0][2], this.rows[1][2], this.rows[2][2]]
        ]
    }
    set cols(c) {
        this.rows = [
            [c[0][0], c[1][0], c[2][0]],
            [c[0][1], c[1][1], c[2][1]],
            [c[0][2], c[1][2], c[2][2]]
        ]
    }
    print() {
        let row
        for (let i=0; i<this.rows.length; i++) {
            row = ''
            for (let j=0; j<this.rows[i].length; j++) {
                row += this.rows[i][j].front + ' '
            }
            console.log(row)
        }
    }

    draw(surface) {
        let row
        for (let i=0; i<this.rows.length; i++) {
            row = ''
            for (let j=0; j<this.rows[i].length; j++) {
                surface.children[(3*i + j)].style.backgroundColor = this.rows[i][j].front
            }
        }
    }
}