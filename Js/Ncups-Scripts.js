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
        case "sethree":
            document.getElementById("caf-season").style.display = "block";
             document.getElementById("hash").innerHTML = " Three";
             break;
        case "sefour":
            document.getElementById("caf-season").style.display = "block";
             document.getElementById("hash").innerHTML = " Four";
             break;
        case "sefive":
            document.getElementById("caf-season").style.display = "block";
             document.getElementById("hash").innerHTML = " Five";
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
        case "sethree":
            document.getElementById("wcq-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " Three";
             break;
        case "sefour":
            document.getElementById("wcq-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " Four";
             break;
        case "sefive":
            document.getElementById("wcq-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " Five";
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
        case "sethree":
            document.getElementById("wc-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " Three";
             break;
        case "sefour":
            document.getElementById("wc-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " Four";
             break;
         case "sefive":
            document.getElementById("wc-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " Five";
             break;
          
     }  
}


                /* SHOW IMGs SEASONS FUNCTIONS */

function CAFcheckSeason(){
    var selectValue = document.getElementById("cafselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw").onclick = function(){
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
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
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            break;
        case "sethree":
            document.getElementById("draw").onclick = function(){
            document.getElementById("cafimg").style.display = "none";
            document.getElementById("cafSlides").style.display = "block";
            document.getElementById("caf-g1").src = "https://image.ibb.co/bxV5U8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_09_01_43_15_86_min.png";
            document.getElementById("caf-g2").src = "https://image.ibb.co/h2Ys98/Pro_Evolution_Soccer_2018_Screenshot_2018_07_09_01_43_16_81_min.png";
            document.getElementById("caf-g3").src = "https://image.ibb.co/hCoQU8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_09_01_43_17_77_min.png";
            document.getElementById("caf-ko").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            document.getElementById("cafimg").src = "https://image.ibb.co/c2Kzp8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_09_01_42_27_20_min.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            document.getElementById("cafimg").src = "https://i.imgur.com/FuQtL3S.gif";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("cafimg").style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
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
            document.getElementById("wcqimg").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
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
            document.getElementById("wcq-g1").src = "https://image.ibb.co/dEVThT/Untitled_1_min.png";
            document.getElementById("wcq-g2").src = "https://image.ibb.co/eWuohT/Untitled_2_min.png";
            }
            document.getElementById("nround1").onclick = function(){
            document.getElementById("wcqimg").src = "https://image.ibb.co/d8zJGd/Pro_Evolution_Soccer_2018_Screenshot_2018_06_30_23_58_08_45_min.png";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/sVDya45.png";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/Vr8eU1K.png";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
        case "sethree":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
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
        case "sefour":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("wcqimg").style.display = "none";
            document.getElementById("wcqslidediv").style.display = "block";
            document.getElementById("wcq-g1").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcq-g2").src = "https://i.imgur.com/uu0yH57.gif";
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
        case "sefive":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("wcqimg").src = "https://i.imgur.com/uu0yH57.gif";
            document.getElementById("wcqimg").style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
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
}
}

function WCcheckSeason(){
    var selectValue = document.getElementById("wcselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
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
            document.getElementById("wc-g1").src = "https://image.ibb.co/fpY4Rd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_47_31_min.png";
            document.getElementById("wc-g2").src = "https://image.ibb.co/gwzB6d/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_48_75_min.png";
            document.getElementById("wc-g3").src = "https://image.ibb.co/gMkJmd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_49_73_min.png";
            document.getElementById("wc-g4").src = "https://image.ibb.co/h5tSey/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_50_57_min.png";
            document.getElementById("wc-g5").src = "https://image.ibb.co/fTkjRd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_51_33_min.png";
            document.getElementById("wc-g6").src = "https://image.ibb.co/e0wDKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_52_20_min.png";
            document.getElementById("wc-g7").src = "https://image.ibb.co/nQQOKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_53_17_min.png";
            document.getElementById("wc-g8").src = "https://image.ibb.co/ks2g6d/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_54_05_min.png";
            document.getElementById("wc-ko").src = "https://image.ibb.co/ik5yKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_15_23_min.png";
            }
            document.getElementById("nround2").onclick = function(){
            document.getElementById("wcimg").src = "https://i.imgur.com/OxUmMxL.gif";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("wcimg").src = "https://image.ibb.co/fkXpRd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_21_83_min.png";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("wcimg").src = "https://image.ibb.co/i04dmd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_22_19_34_40_min.png";
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            break;
        case "sethree":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("wcimg").style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
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


var slideIndexas = 1;
showSlidesas(slideIndexas);

function plusSlidesas(nas) {
  showSlidesas(slideIndexas += nas);
}

function currentSlideas(nas) {
  showSlides(slideIndex = nas);
}

function showSlidesas(nas) {
  var ias;
  var slidesas = document.getElementsByClassName("mySlidesas");
  var dotsas = document.getElementsByClassName("dotas");
  if (nas > slidesas.length) {slideIndexas = 1}    
  if (nas < 1) {slideIndexas = slidesas.length}
  for (ias = 0; ias < slidesas.length; ias++) {
      slidesas[ias].style.display = "none";  
  }
  for (ias = 0; ias < dotsas.length; ias++) {
      dotsas[ias].className = dotsas[ias].className.replace(" active", "");
  }
  slidesas[slideIndexas-1].style.display = "block";  
  dotsas[slideIndexas-1].className += " active";
}