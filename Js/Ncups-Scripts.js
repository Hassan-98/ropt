/* global document */


/*      CALLING FUNCTIONS     */

function callCafFunctions(){
    showCaf();
    showCafSeason(); 
    CAFcheckSeason();
    fixedHover()
}
function callWcqFunctions(){
    showWcq();
    showWcqSeason();
    WCQcheckSeason();
    fixedHover()
}
function callWCFunctions(){
    showWc();
    showWcSeason(); 
    WCcheckSeason();
    fixedHover()
}



                    /* SHOW SECTIONS FUNCTIONS */


function showCaf(){
    document.getElementById("caf").style.display = "block";
    document.getElementById("wcq").style.display = "none";
    document.getElementById("wc").style.display = "none";
}
function showWcq(){
    document.getElementById("caf").style.display = "none";
    document.getElementById("wcq").style.display = "block";
    document.getElementById("wc").style.display = "none";
}
function showWc(){
    document.getElementById("caf").style.display = "none";
    document.getElementById("wcq").style.display = "none";
    document.getElementById("wc").style.display = "block";
}


         /*  SHOW SEASONS FUNCTIONS  */

function showCafSeason(){
    var selectValue = document.getElementById("cafselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("caf-season").style.display = "block";
             document.getElementById("hash").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("caf-season").style.display = "block";
             document.getElementById("hash").innerHTML = " Two";
             break;
     }
}
function showWcqSeason(){
    var selectValue = document.getElementById("wcqselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("wcq-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("wcq-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " Two";
             break;
     } 
}
function showWcSeason(){
    var selectValue = document.getElementById("wcselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("wc-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("wc-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " Two";
             break;
          
     }  
}


                /* SHOW IMGs SEASONS FUNCTIONS */

function CAFcheckSeason(){
    var selectValue = document.getElementById("cafselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/iylr2Js.png";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/vxXPBO1.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/qFV7Xzs.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/EYj6dJ4.png";
            }
            break;
        case "setwo":
            document.getElementById("draw").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            break;
}
}
function WCQcheckSeason(){
    var selectValue = document.getElementById("wcqselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("wcqimg").style.display = "none";
            document.getElementById("wcqslidediv").style.display = "block";
            document.getElementById("wcq-g1").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcq-g2").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcq-g3").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcq-sup").src = "https://i.imgur.com/uu0yH57.gif";
            }
            document.getElementById("nround1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
        case "setwo":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("wcqimg").style.display = "none";
            document.getElementById("wcqslidediv").style.display = "block";
            document.getElementById("wcq-g1").src = "https://i.imgur.com/iSD461e.png";
            document.getElementById("wcq-g2").src = "https://i.imgur.com/iSe4rsY.png";
            document.getElementById("wcq-g3").src = "https://i.imgur.com/ua5PblG.png";
            document.getElementById("wcq-sup").src = "https://i.imgur.com/uu0yH57.gif";
            }
            document.getElementById("nround1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/OBcu798.png";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/8jynToy.png";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/MxkertO.png";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
}
}

function WCcheckSeason(){
    var selectValue = document.getElementById("wcselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("wcimg").style.display = "none";
            document.getElementById("wcslidediv").style.display = "block";
            document.getElementById("wc-g1").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-g2").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-g3").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-g4").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-g5").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-g6").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-g7").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-g8").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-r16").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-r8").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-r4").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wc-f").src = "https://i.imgur.com/YfhFeBy.gif";
            }
            document.getElementById("nround2").onclick = function(){
            document.getElementById("wcimg").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("wcimg").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("wcimg").src = "https://i.imgur.com/YfhFeBy.gif";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            break;
        case "setwo":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("wcimg").style.display = "none";
            document.getElementById("wcslidediv").style.display = "block";
            document.getElementById("wc-g1").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-g2").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-g3").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-g4").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-g5").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-g6").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-g7").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-g8").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-r16").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-r8").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-r4").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wc-f").src = "https://i.imgur.com/OxUmMxL.gif";
            }
            document.getElementById("nround2").onclick = function(){
            document.getElementById("wcimg").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("wcimg").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("wcimg").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            break;
}
}

                                             /*   FIXED HOVER FUNCTIONS   */


function fixedHover(){
    var caf = document.getElementById("caf").style.display;
    var wcq = document.getElementById("wcq").style.display;
    var wc = document.getElementById("wc").style.display;
    
    if(caf == "block"){
        document.getElementById("image1").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
       }
    else if(wcq == "block"){
        document.getElementById("image2").style.background = "#EEE";
        
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
            }
    else if(wc == "block"){
        document.getElementById("image3").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
            }
}


                            /* Sliders */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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


var slideIndexa = 1;
showSlidesa(slideIndexa);

function plusSlidesa(na) {
  showSlidesa(slideIndexa += na);
}

function currentSlidea(na) {
  showSlides(slideIndex = na);
}

function showSlidesa(na) {
  var ia;
  var slidesa = document.getElementsByClassName("mySlidesa");
  var dotsa = document.getElementsByClassName("dota");
  if (na > slidesa.length) {slideIndexa = 1}    
  if (na < 1) {slideIndexa = slidesa.length}
  for (ia = 0; ia < slidesa.length; ia++) {
      slidesa[ia].style.display = "none";  
  }
  for (ia = 0; ia < dotsa.length; ia++) {
      dotsa[ia].className = dotsa[ia].className.replace(" active", "");
  }
  slidesa[slideIndexa-1].style.display = "block";  
  dotsa[slideIndexa-1].className += " active";
}