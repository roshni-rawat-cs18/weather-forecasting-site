var slides, slideIndex, captionText;
slideIndex = 0;

function init(){
	slides = document.getElementsByClassName("imageHolder");
	slides[slideIndex].style.opacity = 1;
	captionText = document.querySelector(".captionHolder .text");
	captionText.innerText = slides[slideIndex].querySelector('.caption').innerText;
}

init();

function plus(n){
	moveSlide(n + slideIndex);
}

function moveSlide(n){
	var i, current, next;
	var collect = {
		forCurrent: "",
		forNext: ""
	};
	if(n > slideIndex){
		if(n >= slides.length) n = 0;
		collect.forCurrent = "moveRightCurrent";
		collect.forNext = "moveRightNext";
	}else if(n < slideIndex){
		if(n < 0) n = slides.length-1;
		collect.forCurrent = "moveLeftCurrent";
		collect.forNext = "moveLeftNext";
	}
	if(n != slideIndex){
		next = slides[n];
		current = slides[slideIndex];
		for(i = 0; i<slides.length; i++){
			slides[i].className = "imageHolder";
			slides[i].style.opacity = 0;
		}
		next.classList.add(collect.forNext);
		current.classList.add(collect.forCurrent);
		slideIndex = n;
		init();
	}
}