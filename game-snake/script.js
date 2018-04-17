function Game(containerSelector) {

    containerSelector = containerSelector || 'body'

    this.gameContainer = document.querySelector(containerSelector)
    this.boardElement = null
    this.step = 2
    this.snakeArray = [
        {x: 25, y: 25},
        {x: 24, y: 25},
        {x: 23, y: 25},
        {x: 22, y: 25}
    ]
}

Game.prototype.init = function () {
    this.makeBoard()
    this.renderSnake()
    this.makeGameTick()
}

Game.prototype.makeGameTick = function () {
    this.gameInterval = setInterval(
        this.gameTick.bind(this),
        1000
    )
}

Game.prototype.gameTick = function () {
    this.moveSnake()
}

Game.prototype.moveSnake = function () {
    var snakesHead = this.snakeArray.slice(0, 1)[0]
    var newSnakesHead

    switch (this.direction) {
        case 'right':
            newSnakesHead = {
                x: snakesHead.x + 1,
                y: snakesHead.y
            }
            break
        case 'left':
            newSnakesHead = {
                x: snakesHead.x - 1,
                y: snakesHead.y
            }
            break
    }

    this.snakeArray = [newSnakesHead].concat(
        this.snakeArray.slice(0, -1)
    )

    this.renderSnake()
}

Game.prototype.checkValidityOfMove = function (newX, newY) {
    var ifNewPositionMatchesOld = (this.snakeArray.filter(function (snakeBodyCellPos) {
        return snakeBodyCellPos.x === newX && snakeBodyCellPos.y === newY
    }).length)

    if (
        newX < 0
        ||
        newY < 0
        ||
        newX > ( 100 / this.step )
        ||
        newY > ( 100 / this.step )
    ) {
        return false
    }

    return true
}

Game.prototype.endGame = function () {
    clearInterval(this.gameInterval)
    alert('YOU LOSE!')
}

Game.prototype.renderSnake = function () {
    this.boardElement.innerHTML = ''

    this.snakeArray.forEach((function (position) {
        console.log(this)
        this.placeSnakeBodyCell(position.x, position.y)
    }).bind(this))

    // WE CAN DO IT ALSO USING FOR INSTEAD OF FOREACH
    // for (var i = 0; i < this.snakeArray.length; i++)
    //      this.placeSnakeBodyCell(this.snakeArray[i].x, this.snakeArray[i].y)

}

Game.prototype.placeSnakeBodyCell = function (x, y) {
    var cell = document.createElement('div')
    cell.style.width = this.step + '%'
    cell.style.height = this.step + '%'
    cell.style.backgroundColor = 'black'
    cell.style.position = 'absolute'
    cell.style.top = y * this.step + '%'
    cell.style.left = x * this.step + '%'

    this.boardElement.appendChild(cell)
}

Game.prototype.makeBoard = function () {
    var board = document.createElement('div')
    board.style.width = '50vh'
    board.style.height = '50vh'
    board.style.position = 'relative'
    board.style.border = '2px solid black'
    board.style.margin = '0 auto'

    this.gameContainer.appendChild(board)

    this.boardElement = board
}

var myGame = new Game()
myGame.init()