
//toggle experiences read more
const plusButtons = document.querySelectorAll('.plus');

function scrollToMyDiv(element) {
  var windowHeight = window.innerHeight;
  var elementHeight = element.offsetHeight;
  var padding = (windowHeight - elementHeight) / 2 + 50;

  window.scroll({
    top: element.offsetTop - padding,
    left: 0,
    behavior: 'smooth'
  });
};

plusButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const text = card.querySelector('.read-more');
    const isReadMoreOpen = text.classList.toggle('read-more--open');

    if (isReadMoreOpen) {
      var element = document.querySelectorAll('.experience-num');
      scrollToMyDiv(element[0]);
    }
  });
});




function scrollReveal() {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll(".demo");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
};

window.addEventListener("scroll", scrollReveal);

//link to projects
function gotolink(link) {
    console.log(link.value);
    location.href = link.value;
};

//slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

