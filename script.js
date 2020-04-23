var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector('h3');
var body = document.getElementById('gradient');
var button = document.getElementById('random');
var button1 = document.getElementById('radial');

//function helps to create a linear gradient background
function setGradient(){
		body.style.background = 
				"linear-gradient(to right,"
				+ color1.value 
				+", " 
				+ color2.value + ")";

		css.textContent = body.style.background + ";";
}

//function helps to generate different colors hexa code
function generateNumber(){
	return((Math.floor(Math.random()*16777215)).toString(16));
}

//function assign new values of color to each of the color variable
function generateColor(){
	//console.log(window.event.target.innerText);
	var c1 = "#"+ generateNumber();
	var c2 = "#"+ generateNumber();
	color1.value = c1;
	color2.value = c2;
	if(window.event.target.innerText === "Random Gradient"){
		setGradient();
	}
	else if (window.event.target.innerText === "Radial Gradient"){
		setRadialGradient();
	}	
}

//function helps to create a radial gradient background
function setRadialGradient(){
	
	body.style.background = 
				"radial-gradient("
				+ color1.value 
				+", " 
				+ color2.value + ")";

		css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", generateColor);
button1.addEventListener("click",generateColor );


