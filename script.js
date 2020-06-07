const LEFT_SYMBOL = '&#8592;'
const UP_SYMBOL = '&#8593;'
const RIGHT_SYMBOL = '&#8594;'
const DOWN_SYMBOL = '&#8595;'
const left = document.getElementById('left')
const up = document.getElementById('up')
const right = document.getElementById('right')
const down = document.getElementById('down')
const backspace = document.getElementById('backspace')
const ok = document.getElementById('ok')
const userInput = document.querySelector('.user-input')

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
String.prototype.replaceAt = function(index, replacement) {
	if (index >= this.length) {
		return this.valueOf();
	}

	return this.substring(0, index) + replacement + this.substring(index + 1);
}