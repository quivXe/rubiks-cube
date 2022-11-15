class Corner {

    constructor(colors = {'up': undefined, 'down': undefined, 'left': undefined, 'right': undefined, 'front': undefined}, text) {
        if (colors['up'] != undefined) this.up = colors['up']
        if (colors['down'] != undefined) this.down = colors['down']
        if (colors['left'] != undefined) this.left = colors['left']
        if (colors['right'] != undefined) this.right = colors['right']
        this.front = colors['front']

        this.text = text
    }

    // f_move() {
    //     if (this.up != undefined) {
    //         this.right = this.up
    //         this.up = undefined
    //     }
    //     if (this.left != undefined) {
    //         this.up = this.left
    //         this.left = undefined
    //     }
    //     if (this.right != undefined) {
    //         this.down = 
    //     }
    //     this.front = colors['front']
    // }
}