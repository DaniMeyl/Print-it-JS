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
const dotsContainer = document.querySelector(".dots");
const imageSlide = document.querySelector(".banner-img");
const txtSlide = document.querySelector(".slider-text")
let counter = 0;
let dots = [];

for ( let i=0 ; i < slides.length; i ++ ){
	let dot = document.createElement("p");
	dotsContainer.appendChild(dot);
	dot.classList.add('dot');
	dots.push(dot);
}

dots[0].classList.add ('dot_selected');

arrowLeft.addEventListener("click", ()=> {

	dots[counter].classList.remove("dot_selected")
	
	if ( counter === 0) {
		imageSlide.src = "./assets/images/slideshow/" + slides[slides.length - 1].image;
		txtSlide.innerHTML = slides[slides.length - 1].tagLine;
		dots[dots.length - 1].classList.add("dot_selected");
		counter = slides.length - 1 		
	}

	else { 
		imageSlide.src= "./assets/images/slideshow/" + slides[ counter - 1].image; 
		txtSlide.innerHTML = slides [counter -1 ].tagLine;
		dots[counter -1].classList.add("dot_selected")
		counter = counter -1;
	}
})

arrowRight.addEventListener("click", ()=> {

	dots[counter].classList.remove("dot_selected")
	
	if ( counter == slides.length -1) {
		imageSlide.src = "./assets/images/slideshow/" + slides[0].image;
		txtSlide.innerHTML = slides[0].tagLine;
		dots[0].classList.add("dot_selected");
		counter = 0 ;	
	}
	
	else { 	
		imageSlide.src= "./assets/images/slideshow/" + slides[counter+1].image; 
		txtSlide.innerHTML = slides [counter + 1 ].tagLine;
		dots[counter + 1].classList.add("dot_selected")
		counter = counter + 1;
	}
})
