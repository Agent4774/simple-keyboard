window.addEventListener('DOMContentLoaded', function(){
	let divLetters = document.querySelector('#letters'),
		divOther = document.querySelector('#other'),
		divText = document.querySelector('#text'),
		letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		spaceBtn = document.createElement('button'),
		bspaceBtn = document.createElement('button');

	// Creating letter buttons
	for(let i = 0; i < letters.length; i++){
		let btn = document.createElement('button');
		btn.setAttribute('class', 'letter');
		btn.textContent = letters[i];
		divLetters.appendChild(btn);
	}

	// Adding Space and Backspace
	spaceBtn.setAttribute('class', 'space');
	bspaceBtn.setAttribute('class', 'bspace');
	spaceBtn.textContent = 'Space';
	bspaceBtn.textContent = 'Backspace';
	divOther.appendChild(spaceBtn);
	divOther.appendChild(bspaceBtn);

	// Adding letter values to div
	divLetters.addEventListener('click', function(event){
		event.preventDefault();
		if(event.target.classList.contains('letter')){
			divText.textContent += event.target.textContent;
		}	
	});

	// Adding Space/Backspace values to div
	divOther.addEventListener('click', function(event){
		event.preventDefault();
		if(event.target.classList.contains('space')){
			divText.textContent += ' ';
		}
		if(event.target.classList.contains('bspace')){
			divText.textContent = divText.textContent.slice(0, divText.textContent.length - 1)
		}
	});
});