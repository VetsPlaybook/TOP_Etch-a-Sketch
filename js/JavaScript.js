let submit = document.querySelector('.submit');
let container = document.querySelector('.container');
let boxes = document.querySelector('.boxes');
let create = document.createElement("div");

function createAndColorBoxes(){
	for (var i = 0; i < 256; i++) {
	let create = document.createElement("div");
	let square = create.classList.add('boxes');
	container.appendChild(create);
	create.addEventListener('mouseover', function(){
		create.classList.remove('boxes');
		create.classList.add('boxes2');
	});
	}
};

createAndColorBoxes();


