var slideIndex = 1;
var slides,dots;
var timer;

function showSlides(n) {
    var i;
    slides  = document.getElementsByClassName("slides");
    dots    = document.getElementsByClassName("dot");
    
    if(n > slides.length)   slideIndex = 1;
    if(n < 1)		    	slideIndex = slides.length;
    
    for(i = 0 ; i < slides.length ; i++)
		slides[i].style.display = "none";  
    for(i = 0 ; i < dots.length ; i++)	
		dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex-1].style.display = "block";  
    dots  [slideIndex-1].className    += " active";
}

function main() {
    showSlides(slideIndex);
    timer = setInterval(function() {
	plusSlides(1);
    }, 4000);
}

function plusSlides(n) {
    clearInterval(timer);
    if(n == -1) {
	slideIndex -= 1;
	showSlides(slideIndex);
    } else {
	slideIndex += 1;
	showSlides(slideIndex);
    }
    timer = setInterval(function() {
        slideIndex += 1;
        showSlides(slideIndex);
    }, 4000);
}

function currentSlide(n) {
    clearInterval(timer);
    showSlides(slideIndex = n);
    timer = setInterval(function() {
        showSlides(slideIndex);
	slideIndex += 1;
    }, 4000);
}
