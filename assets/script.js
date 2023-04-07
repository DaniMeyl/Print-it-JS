const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", (event) => {
	if (event.button === 0) {console.log("Clic gauche détecté arrowLeft !");}       
	 else if (event.button === 1) {
		console.log("Clic droit détecté arrowLeft !");}
});

arrowRight.addEventListener("mouseup", (event) => {
	if (event.button === 0) {console.log("Clic gauche détecté arrowRight!");} 
	else if (event.button === 2) {
		console.log("Clic droit détecté arrowRight !");}
});
