function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return; // stop the function from running all together
	audio.currentTime = 0; //rewind to start
	audio.play();
	key.classList.add('playing');
}
function removeTransition(e){
	if(e.propertyName !== 'transform') return; // skip it if it's not a transform
	// console.log(this);
	this.classList.remove('playing');
}
/* window.addEventListener('keyup', function(e){
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	key.classList.remove('playing');
}); */
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);