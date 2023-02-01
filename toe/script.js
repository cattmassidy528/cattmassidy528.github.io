
var numX = 0
var numO = 0

// the board 
var board     = document.getElementById("board")
const xOwns   = []       
const oOwns   = []
const x       = 'x'     // redundant, but i thought i was gonna use these as vaiables later.
const o       = 'o'     // maybe i did and forgot? who knows
var turnNum   = 2       // still uncertain if i'm actually callin stalemate correctly. all i know is i'm calling this project

for (let i = 0; i < 9; i++) {
    const spot = document.createElement('div')
    spot.classList.add('spot')
    spot.setAttribute('id', i)
    board.appendChild(spot)
    spot.addEventListener('click', function(e) {
        decideTurn(spot)
        decideWinner(spot)
    })
}

function decideTurn(spot) {
    if (turnNum % 2 === 0 && spot.innerHTML !== o) {
        player.one(spot)
    } else if (turnNum % 2 === 1 && spot.innerHTML !== x) {
        player.two(spot)
    }
}

const player = {
    one: (spot) => { 
        spot.innerHTML = x 
        spot.classList.add('x')
        turnNum++
    }, 
    two: (spot) => { 
        spot.innerHTML = o 
        spot.classList.add('o')
        turnNum++
    }
}

var spotZero = document.getElementById('0')
var spotOne = document.getElementById('1')
var spotTwo = document.getElementById('2')
var spotThree = document.getElementById('3')
var spotFour = document.getElementById('4')
var spotFive = document.getElementById('5')
var spotSix = document.getElementById('6')
var spotSeven = document.getElementById('7')
var spotEight = document.getElementById('8')


function decideWinner(spot) {
//   HORIZONALS   ///
    if (spotZero.classList.contains('x') && spotOne.classList.contains('x') && spotTwo.classList.contains('x')){
        xWins()
    }
    if (spotZero.classList.contains('o') && spotOne.classList.contains('o') && spotTwo.classList.contains('o')){
        oWins()
    }
    if (spotThree.classList.contains('x') && spotFour.classList.contains('x') && spotFive.classList.contains('x')){
        xWins()
    }
    if (spotThree.classList.contains('o') && spotFour.classList.contains('o') && spotFive.classList.contains('o')){
        oWins()
    }
    if (spotSix.classList.contains('x') && spotSeven.classList.contains('x') && spotEight.classList.contains('x')){
        xWins()
    }
    if (spotSix.classList.contains('o') && spotSeven.classList.contains('o') && spotEight.classList.contains('o')){
        oWins()
/////   VERTICALS   /////
    }
    if (spotZero.classList.contains('x') && spotThree.classList.contains('x') && spotSix.classList.contains('x')){
        xWins()
    }
    if (spotZero.classList.contains('o') && spotThree.classList.contains('o') && spotSix.classList.contains('o')){
        oWins()
    }
    if (spotOne.classList.contains('x') && spotFour.classList.contains('x') && spotSeven.classList.contains('x')){
        xWins()
    }
    if (spotOne.classList.contains('o') && spotFour.classList.contains('o') && spotSeven.classList.contains('o')){
        oWins()
    }
    if (spotTwo.classList.contains('x') && spotFive.classList.contains('x') && spotEight.classList.contains('x')){
        xWins()
    }
    if (spotTwo.classList.contains('o') && spotFive.classList.contains('o') && spotEight.classList.contains('o')){
        oWins()
    }
/////   DIAGONALS   ///// 
    if (spotZero.classList.contains('x') && spotFour.classList.contains('x') && spotEight.classList.contains('x')){
        xWins()
    }
    if (spotZero.classList.contains('o') && spotFour.classList.contains('o') && spotEight.classList.contains('o')){
        oWins()
    }
    if (spotTwo.classList.contains('x') && spotFour.classList.contains('x') && spotSix.classList.contains('x')){
        xWins()
    }
    if (spotTwo.classList.contains('o') && spotFour.classList.contains('o') && spotSix.classList.contains('o')){
        oWins()
    }
///// truthfully, this is still messed up. it calls the game sometimes when it shouldn't. but my hands hurt and im tired. /////  
    else if (turnNum >= 11) {
        stalemate()
    }

}
function stalemate() {
    alert('both of you suck, equally.')
    reset()
}


function xWins() {
    alert('X wins. you suck, O.')
    reset()
    tallyX()
}

function oWins() {
    alert('O wins. you suck, X.')
    reset()
    tallyO()
}

function tallyX() {
    let displayX = document.getElementById("displayX")
    numX = numX + 1
    displayX.innerHTML = numX 
}
function tallyO() {
    let displayO = document.getElementById("displayO")
    numO = numO + 1
    displayO.innerHTML = numO
}

function reset() {
    turnNum = 2
    spotZero.classList.remove('x') 
    spotZero.classList.remove('o') 
    spotZero.innerHTML = ''

    spotOne.classList.remove('x')
    spotOne.classList.remove('o')
    spotOne.innerHTML = ''

    spotTwo.classList.remove('x')
    spotTwo.classList.remove('o')
    spotTwo.innerHTML = ''

    spotThree.classList.remove('x') 
    spotThree.classList.remove('o') 
    spotThree.innerHTML = ''
    
    spotFour.classList.remove('x'); 
    spotFour.classList.remove('o')
    spotFour.innerHTML = ''

    spotFive.classList.remove('x')
    spotFive.classList.remove('o')
    spotFive.innerHTML = ''
    
    spotSix.classList.remove('x')
    spotSix.classList.remove('o')
    spotSix.innerHTML = ''
    
    spotSeven.classList.remove('x')
    spotSeven.classList.remove('o')
    spotSeven.innerHTML = ''
    
    spotEight.classList.remove('x')
    spotEight.classList.remove('o')
    spotEight.innerHTML = ''
}
