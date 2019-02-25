/* ////////////// G A L L E R Y  O N E ////////////// */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    //var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";

    document.getElementById('myViewModal').classList.toggle('transition-fadeIn');
    document.getElementById('myViewModal').classList.toggle('transition-fadeInPersist');
    //dots[slideIndex-1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
}

function openModal() {
    document.getElementById('myModal').classList.toggle('transition-fadeIn');
    document.getElementById('myModal').classList.toggle('transition-fadeInPersist');
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n); 
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
/* ////////////// G A L L E R Y  T W O ////////////// */
function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    //var captionText = document.getElementById("caption2");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";

    document.getElementById('myViewModal2').classList.toggle('transition-fadeIn');
    document.getElementById('myViewModal2').classList.toggle('transition-fadeInPersist');
    //dots[slideIndex-1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
}

function openModal2() {
    document.getElementById('myModal2').classList.toggle('transition-fadeIn');
    document.getElementById('myModal2').classList.toggle('transition-fadeInPersist');
    document.getElementById('myModal2').style.display = "block";
  }
  
  function closeModal2() {
    document.getElementById('myModal2').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides2(slideIndex);
  
  function plusSlides2(n) {
    showSlides2(slideIndex += n); 
  }
  
  function currentSlide2(n) {
    showSlides2(slideIndex = n);
  }

  /* ////////////// G A L L E R Y  T H R E E ////////////// */
function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");
    //var captionText = document.getElementById("caption2");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";

    document.getElementById('myViewModal3').classList.toggle('transition-fadeIn');
    document.getElementById('myViewModal3').classList.toggle('transition-fadeInPersist');
    //dots[slideIndex-1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
}

function openModal3() {
    document.getElementById('myModal3').classList.toggle('transition-fadeIn');
    document.getElementById('myModal3').classList.toggle('transition-fadeInPersist');
    document.getElementById('myModal3').style.display = "block";
  }
  
  function closeModal3() {
    document.getElementById('myModal3').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides3(slideIndex);
  
  function plusSlides3(n) {
    showSlides3(slideIndex += n); 
  }
  
  function currentSlide3(n) {
    showSlides3(slideIndex = n);
  }
  
  