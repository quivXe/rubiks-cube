class Edge {

    constructor(colors = {'up': undefined, 'down': undefined, 'left': undefined, 'right': undefined, 'front': undefined}, text) {
        if (colors['up'] != undefined) this.up = colors['up']
        if (colors['down'] != undefined) this.down = colors['down']
        if (colors['left'] != undefined) this.left = colors['left']
        if (colors['right'] != undefined) this.right = colors['right']
        this.front = colors['front']
        
        this.text = text
    }
}