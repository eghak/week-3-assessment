console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`The form has been submitted succesfully!`)
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const duckPic = document.querySelector(`img`)
console.log(duckPic)

function imgMouseOver() {
	alert(`Nice! Amazing! Awesome! Stunning! Breathtaking! Incredible! magnificent! Astonishing!`)
}

duckPic.addEventListener(`mouseover`, imgMouseOver)