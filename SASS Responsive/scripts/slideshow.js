const prevBtn = document.getElementsByClassName("slideshow-prev")[0];
const nextBtn = document.getElementsByClassName("slideshow-next")[0];

const plusSlides = n => {
    console.log(n);
    showSlides(slideIndex += n);
}

const showSlides = n => {
    var i;
    var slides = document.getElementsByClassName("slideshow-img");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

prevBtn.addEventListener("click", function() {plusSlides(-1)});
nextBtn.addEventListener("click", function() {plusSlides(1)});