const LEFT_SYMBOL = '←'
const UP_SYMBOL = '↑'
const RIGHT_SYMBOL = '→'
const DOWN_SYMBOL = '↓'
const left = document.getElementById('left')
const up = document.getElementById('up')
const right = document.getElementById('right')
const down = document.getElementById('down')
const backspace = document.getElementById('backspace')
const ok = document.getElementById('ok')
const userInput = document.querySelector('.user-input')
const pauseContainer = document.querySelector('.pause-container')
const pauseClose = document.querySelector('.pause-close')
const audio = new Audio('asset/audio/bup.mp3');

left.addEventListener('click', function(e){
    userInput.innerHTML += LEFT_SYMBOL
})
up.addEventListener('click', function(e){
    userInput.innerHTML += UP_SYMBOL
})
right.addEventListener('click', function(e){
    userInput.innerHTML += RIGHT_SYMBOL
})
down.addEventListener('click', function(e){
    userInput.innerHTML += DOWN_SYMBOL
})
backspace.addEventListener('click', function(e){
    let currentCode = userInput.innerHTML
    currentCode = currentCode.replaceAt(currentCode.length-1, '')
    userInput.innerHTML = currentCode
})
ok.addEventListener('click', function(el){
    run(userInput.innerHTML)
})
pauseClose.addEventListener('click', function(e){
    pauseContainer.classList.add('d-none')
    let player = document.querySelector('.player')
    startPosition = player.parentElement.parentElement.rows[1].cells[1]
    move(player, startPosition)
})

function toRight(){
    currentPosition = document.querySelector('.player')
    newPosition = currentPosition.nextElementSibling
    move(currentPosition, newPosition)
}
function toLeft(){
    currentPosition = document.querySelector('.player')
    newPosition = currentPosition.previousElementSibling
    move(currentPosition, newPosition)
}
function toDown(){
    currentPosition = document.querySelector('.player')
    newPosition = currentPosition.parentElement.nextElementSibling.cells[currentPosition.cellIndex]
    move(currentPosition, newPosition)
}
function toUp(){
    currentPosition = document.querySelector('.player')
    newPosition = currentPosition.parentElement.previousElementSibling.cells[currentPosition.cellIndex]
    move(currentPosition, newPosition)
}
function run(code){
    setTimeout(function(){ 
        audio.pause
        audio.currentTime = 0
        if(code.length===0){
            let player = document.querySelector('.player')
            if(player.classList.contains('end')){
                pauseContainer.classList.remove('d-none')
                return
            }else{
                console.log('gagal')
                startPosition = player.parentElement.parentElement.rows[1].cells[1]
                move(player, startPosition)
                return
            }
        }
        switch(code.charAt(0)){
            case LEFT_SYMBOL:
                toLeft()
                break
            case UP_SYMBOL:
                toUp()
                break
            case RIGHT_SYMBOL:
                toRight()
                break
            case DOWN_SYMBOL:
                toDown()
                break
        }
        audio.play();
        code = code.replaceAt(0, '')
        run(code)
    }, 500);
}

function move(currentPosition, newPosition){
    if(newPosition.classList.contains('path')){
        currentPosition.classList.remove('player')
        currentPosition.innerHTML = ''
        newPosition.classList.add('player')
        let newDiv = document.createElement('div')
        newPosition.appendChild(newDiv)
    }
}

String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}

	return this.substring(0, index) + replacement + this.substring(index + 1);
}