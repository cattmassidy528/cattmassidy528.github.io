var area = document.getElementById('area')
var pCount = 0
var jsCount = 0

class Ship {
    constructor(height, width, top, cName) {
        this.ship = document.createElement('div')
        this.ship.style.height = height + 'px'
        this.ship.style.width = width + 'px'
        this.ship.style.top = top + 'px'
        this.ship.innerText = 'world'
        this.ship.classList.add(cName)
        area.appendChild(this.ship)
    }
}

let ship = new Ship(50, 100, 540, 'ship')

area.addEventListener('mousemove', function move(e) {
    var x = e.clientX - 55
    ship = document.querySelector('.ship')
    ship.style.bottom = 0 + 'px'
    ship.style.left = x + 'px'
    if(x < 0) {
        ship.style.left = 0 + 'px'
    }
    if (x > 280) {
        ship.style.left = 280 + 'px'
    }
})

class Enemy {
    constructor(height, width, left, cName, innerSaying) {
        this.enemy = document.createElement('div')
        this.enemy.style.height = height + 'px'
        this.enemy.style.width = width + 'px'
        this.enemy.style.left = left + 'px'
        this.enemy.classList.add(cName)
        this.enemy.innerHTML = innerSaying
        // '<br><b><i>everything</i></b> in javascript is an <b><span> object </b></span>'
        area.appendChild(this.enemy)
    }
}


const typical = [
    '<p style="font-size:28px;">polite</p>',
    '<p style="font-size:28px;">courteous</p>',
    '<p style="font-size:24px;">loves <br>programming</p>',
    '<p style="font-size:28px;">driven</p>',
    '<p style="font-size:28px;">values your time</p>',
    '<p style="font-size:28px;">hard working</p>'
]

arbitrary = Math.floor(Math.random() * 6) 
console.log(arbitrary +1 )
innerSaying = typical[arbitrary]

let enemy = new Enemy(125, 125, 125, 'enemy', innerSaying)

area.addEventListener('click', function (e){
    let laser = document.createElement('div')
    laser.classList.add('laser')
    area.appendChild(laser)
    var x = e.clientX - 22
    laser.innerHTML = 'Hello!'
    var laserPos = 550
    var pageTop = -60
    laser.style.top = laserPos + 'px'
    laser.style.left = x + 'px'
    check()
        let fireInt = setInterval(fire,20)
        function fire() {
        setInterval(() => {
            if (laserPos > pageTop) {
                laserPos = laserPos - 10
                laser.style.top = laserPos + 'px'
            }
            if(laserPos === pageTop){
                laser.classList.remove('laser')
                laser.remove()
            }
            clearInterval(fireInt)
        }, 20);
    }
})

function check() {
    let checkInt = setInterval(checker,20)
    function checker() {
    laser = document.querySelector('.laser')
    var laserBounds = laser.getBoundingClientRect(laser)
    enemy = document.querySelector('.enemy')
    var enemyBounds = enemy.getBoundingClientRect(enemy) 
        
        if (laserBounds.bottom < enemyBounds.bottom &&
            laserBounds.left > enemyBounds.left &&
            laserBounds.right < enemyBounds.right &&
            laserBounds.top > enemyBounds.top
            ) {
                enemy.remove()
                createanother()                
            }    
        }
        function clearit(){    
            clearInterval(checkInt)
        }
        setTimeout(clearit, 1000)
    }

function createanother() {
    let randomLeft = Math.random() * 250
    arbitrary = Math.floor(Math.random() * 6)
    innerSaying = typical[arbitrary]
    let enemy = new Enemy(125, 125, randomLeft, 'enemy', innerSaying)

    score()
}
var pScore = document.getElementById('playerScore')
var jsScore = document.getElementById('jsScore')

function score() {
    let rnum = Math.floor(Math.random() * 10)
    pCount = pCount  - 1
    pScore.innerHTML = pCount
    jsCount = jsCount + rnum + 1
    jsScore.innerHTML = jsCount
}











