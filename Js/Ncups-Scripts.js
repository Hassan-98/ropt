/* global document */


/*      CALLING FUNCTIONS     */

function callCafFunctions(){
    showCaf();
    CAFcheckSeason();
    fixedHover()
}
function callWcqFunctions(){
    showWcq();
    WCQcheckSeason();
    fixedHover()
}
function callWCFunctions(){
    showWc();
    WCcheckSeason();
    fixedHover()
}
function callCNLFunctions(){
    showCnl();
    CNLcheckSeason();
    fixedHover()
}
function callCSCFunctions(){
    showCsc();
    CSCcheckSeason();
    fixedHover()
}
function callCCFunctions(){
    showCc();
    CCcheckSeason();
    fixedHover()
}



                    /* SHOW SECTIONS FUNCTIONS */


function showCaf(){
    document.getElementById("caf").style.display = "block";
    document.getElementById("wcq").style.display = "none";
    document.getElementById("wc").style.display = "none";
    document.getElementById("csc").style.display = "none";
    document.getElementById("cc").style.display = "none";
    document.getElementById("cnl").style.display = "none";
    if(document.getElementById("caf").style.display == "block"){
       $('html, body').animate({scrollTop: $("#caf").offset().top}, 1000);
       }
}
function showWcq(){
    document.getElementById("caf").style.display = "none";
    document.getElementById("wcq").style.display = "block";
    document.getElementById("wc").style.display = "none";
    document.getElementById("csc").style.display = "none";
    document.getElementById("cc").style.display = "none";
    document.getElementById("cnl").style.display = "none";
    if(document.getElementById("wcq").style.display == "block"){
       $('html, body').animate({scrollTop: $("#wcq").offset().top}, 1000);
       }
}
function showWc(){
    document.getElementById("caf").style.display = "none";
    document.getElementById("wcq").style.display = "none";
    document.getElementById("wc").style.display = "block";
    document.getElementById("csc").style.display = "none";
    document.getElementById("cc").style.display = "none";
    document.getElementById("cnl").style.display = "none";
    if(document.getElementById("wc").style.display == "block"){
       $('html, body').animate({scrollTop: $("#wc").offset().top}, 1000);
       }
}
function showCnl(){
    document.getElementById("caf").style.display = "none";
    document.getElementById("wcq").style.display = "none";
    document.getElementById("wc").style.display = "none";
    document.getElementById("csc").style.display = "none";
    document.getElementById("cc").style.display = "none";
    document.getElementById("cnl").style.display = "block";
    if(document.getElementById("cnl").style.display == "block"){
       $('html, body').animate({scrollTop: $("#cnl").offset().top}, 1000);
       }
}
function showCsc(){
    document.getElementById("caf").style.display = "none";
    document.getElementById("wcq").style.display = "none";
    document.getElementById("wc").style.display = "none";
    document.getElementById("csc").style.display = "block";
    document.getElementById("cc").style.display = "none";
    document.getElementById("cnl").style.display = "none";
    if(document.getElementById("csc").style.display == "block"){
       $('html, body').animate({scrollTop: $("#csc").offset().top}, 1000);
       }
}
function showCc(){
    document.getElementById("caf").style.display = "none";
    document.getElementById("wcq").style.display = "none";
    document.getElementById("wc").style.display = "none";
    document.getElementById("csc").style.display = "none";
    document.getElementById("cc").style.display = "block";
    document.getElementById("cnl").style.display = "none";
    if(document.getElementById("cc").style.display == "block"){
       $('html, body').animate({scrollTop: $("#cc").offset().top}, 1000);
       }
}



            /* SHOW IMGs SEASONS FUNCTIONS */


function CAFcheckSeason(){
    var selectValue = document.getElementById("cafselect").value,
        hash = document.getElementById("hash"),
        seaseon = document.getElementById("caf-season"),
        draw = document.getElementById("draw"),
        goalScorer = document.getElementById("gscorer"),
        assistMaker = document.getElementById("amaker"),
        Image = document.getElementById("cafimg"),
        GroupOne = document.getElementById("caf-g1"),
        GroupTwo = document.getElementById("caf-g2"),
        GroupThree = document.getElementById("caf-g3"),
        GroupFour = document.getElementById("caf-g4"),
        GroupFive = document.getElementById("caf-g5"),
        Knockout = document.getElementById("caf-ko");
    switch (selectValue){
        case "seone":
            seaseon.style.display = "block";
             hash.innerHTML = " الاول";
             break;
        case "sethree":
            seaseon.style.display = "block";
             hash.innerHTML = " الثالث";
             break;
        case "sefive":
            seaseon.style.display = "block";
             hash.innerHTML = " الخامس";
             break;
        case "seseven":
            seaseon.style.display = "block";
             hash.innerHTML = " السابع";
             break;
     }
    switch (selectValue){
        case "seone":
            draw.onclick = function(){
            Image.style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            Image.src = "imgs/Cups-Images/National/CAF/Se1/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CAF/Se1/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CAF/Se1/as.png";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("cafSlides").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/CAF/Se3/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/CAF/Se3/g2.png";
            GroupThree.src = "imgs/Cups-Images/National/CAF/Se3/g3.png";
            GroupFour.src = "imgs/Cups-Images/National/CAF/Se3/g4.png";
            GroupFive.src = "imgs/Cups-Images/National/CAF/Se3/g5.png";
            Knockout.src = "imgs/Cups-Images/National/CAF/Se3/ko.png";
            }
            goalScorer.onclick = function(){
            Image.style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            Image.src = "imgs/Cups-Images/National/CAF/Se3/gs.png";
            }
            assistMaker.onclick = function(){
            Image.style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            Image.src = "imgs/Cups-Images/National/CAF/Se3/as.png";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("cafSlides").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/CAF/Se5/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/CAF/Se5/g2.png";
            GroupThree.src = "imgs/Cups-Images/National/CAF/Se5/g3.png";
            GroupFour.src = "imgs/Cups-Images/National/CAF/Se5/g4.png";
            GroupFive.src = "imgs/Cups-Images/National/CAF/Se5/g5.png";
            Knockout.src = "imgs/Cups-Images/National/CAF/Se5/ko.png";
            }
            goalScorer.onclick = function(){
            Image.style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            Image.src = "imgs/Cups-Images/National/CAF/Se5/gs.png";
            }
            assistMaker.onclick = function(){
            Image.style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            Image.src = "imgs/Cups-Images/National/CAF/Se5/as.png";
            }
            break;
        case "seseven":
            draw.onclick = function(){
            Image.style.display = "block";
            document.getElementById("cafSlides").style.display = "none";
            Image.src = "imgs/Cups-Images/National/CAF/Se7/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CAF/Se7/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CAF/Se7/as.png";
            }
            break;
}
}
function WCQcheckSeason(){
    var selectValue = document.getElementById("wcqselect").value,
        hash = document.getElementById("hash1"),
        seaseon = document.getElementById("wcq-season"),
        draw = document.getElementById("draw1"),
        goalScorer = document.getElementById("gscorer1"),
        assistMaker = document.getElementById("amaker1"),
        Image = document.getElementById("wcqimg"),
        GroupOne = document.getElementById("wcq-g1"),
        GroupTwo = document.getElementById("wcq-g2"),
        GroupThree = document.getElementById("wcq-g3"),
        GroupFour = document.getElementById("wcq-g4");
    switch (selectValue){
        case "setwo":
            seaseon.style.display = "block";
             hash.innerHTML = " الثاني";
             break;
        case "sethree":
            seaseon.style.display = "block";
             hash.innerHTML = " الثالث";
             break;
        case "sefour":
            seaseon.style.display = "block";
             hash.innerHTML = " الرابع";
             break;
        case "sefive":
            seaseon.style.display = "block";
             hash.innerHTML = " الخامس";
             break;
        case "seseven":
            seaseon.style.display = "block";
             hash.innerHTML = " السابع";
             break;
     }
    switch (selectValue){
        case "setwo":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("wcqslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/WCQ/Se2/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/WCQ/Se2/g2.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se2/gs.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se2/as.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se3/ko.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se3/gs.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se3/as.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se4/ko.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se4/gs.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se4/as.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se5/ko.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se5/gs.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se5/as.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
        case "seseven":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("wcqslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/WCQ/Se7/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/WCQ/Se7/g2.png";
            GroupThree.src = "imgs/Cups-Images/National/WCQ/Se7/g3.png";
            GroupFour.src = "imgs/Cups-Images/National/WCQ/Se7/g4.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se7/gs.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WCQ/Se7/as.png";
            Image.style.display = "block";
            document.getElementById("wcqslidediv").style.display = "none";
            }
            break;
}
}

function WCcheckSeason(){
    var selectValue = document.getElementById("wcselect").value,
        hash = document.getElementById("hash2"),
        seaseon = document.getElementById("wc-season"),
        draw = document.getElementById("draw2"),
        goalScorer = document.getElementById("gscorer2"),
        assistMaker = document.getElementById("amaker2"),
        Image = document.getElementById("wcimg"),
        GroupOne = document.getElementById("wc-g1"),
        GroupTwo = document.getElementById("wc-g2"),
        GroupThree = document.getElementById("wc-g3"),
        GroupFour = document.getElementById("wc-g4"),
        GroupFive = document.getElementById("wc-g5"),
        GroupSix = document.getElementById("wc-g6"),
        GroupSeven = document.getElementById("wc-g7"),
        GroupEight = document.getElementById("wc-g8"),
        Knockout = document.getElementById("wc-ko");
    switch (selectValue){
        case "setwo":
            seaseon.style.display = "block";
             hash.innerHTML = " الثاني";
             break;
         case "sefive":
            seaseon.style.display = "block";
             hash.innerHTML = " الخامس";
             break;

     }
    switch (selectValue){
        case "setwo":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("wcslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/WC/Se2/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/WC/Se2/g2.png";
            GroupThree.src = "imgs/Cups-Images/National/WC/Se2/g3.png";
            GroupFour.src = "imgs/Cups-Images/National/WC/Se2/g4.png";
            GroupFive.src = "imgs/Cups-Images/National/WC/Se2/g5.png";
            GroupSix.src = "imgs/Cups-Images/National/WC/Se2/g6.png";
            GroupSeven.src = "imgs/Cups-Images/National/WC/Se2/g7.png";
            GroupEight.src = "imgs/Cups-Images/National/WC/Se2/g8.png";
            Knockout.src = "imgs/Cups-Images/National/WC/Se2/ko.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WC/Se2/gs.png";
            Image.style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WC/Se2/as.png";
            Image.style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("wcslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/WC/Se5/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/WC/Se5/g2.png";
            GroupThree.src = "imgs/Cups-Images/National/WC/Se5/g3.png";
            GroupFour.src = "imgs/Cups-Images/National/WC/Se5/g4.png";
            GroupFive.src = "imgs/Cups-Images/National/WC/Se5/g5.png";
            GroupSix.src = "imgs/Cups-Images/National/WC/Se5/g6.png";
            GroupSeven.src = "imgs/Cups-Images/National/WC/Se5/g7.png";
            GroupEight.src = "imgs/Cups-Images/National/WC/Se5/g8.png";
            Knockout.src = "imgs/Cups-Images/National/WC/Se5/ko.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WC/Se5/gs.png";
            Image.style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/WC/Se5/as.png";
            Image.style.display = "block";
            document.getElementById("wcslidediv").style.display = "none";
            }
            break;
}
}

function CNLcheckSeason(){
    var selectValue = document.getElementById("cnlselect").value,
        hash = document.getElementById("hash3"),
        seaseon = document.getElementById("cnl-season"),
        draw = document.getElementById("draw3"),
        goalScorer = document.getElementById("gscorer3"),
        assistMaker = document.getElementById("amaker3"),
        Image = document.getElementById("cnlimg");
    switch (selectValue){
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;
        case "seeight":
            seaseon.style.display = "block";
             hash.innerHTML = " الثامن";
             break;
     }
    switch (selectValue){
        case "sesix":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CNL/Se8/league.png";
            Image.style.display = "block";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CNL/Se6/gs.png";
            Image.style.display = "block";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CNL/Se6/as.png";
            Image.style.display = "block";
            }
            break;
        case "seeight":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CNL/Se8/league.png";
            Image.style.display = "block";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CNL/Se8/gs.png";
            Image.style.display = "block";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CNL/Se8/as.png";
            Image.style.display = "block";
            }
            break;
}
}

function CSCcheckSeason(){
    var selectValue = document.getElementById("cscselect").value,
        hash = document.getElementById("hash4"),
        seaseon = document.getElementById("csc-season"),
        draw = document.getElementById("draw4"),
        goalScorer = document.getElementById("gscorer4"),
        assistMaker = document.getElementById("amaker4"),
        Image = document.getElementById("cscimg");
    switch (selectValue){
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;
        case "seeight":
            seaseon.style.display = "block";
             hash.innerHTML = " الثامن";
             break;
     }
    switch (selectValue){
        case "sesix":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CSC/Se6/cup.png";
            Image.style.display = "block";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CSC/Se6/gs.png";
            Image.style.display = "block";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CSC/Se6/as.png";
            Image.style.display = "block";
            }
            break;
        case "seeight":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CSC/Se8/cup.png";
            Image.style.display = "block";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CSC/Se8/gs.png";
            Image.style.display = "block";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CSC/Se8/as.png";
            Image.style.display = "block";
            }
            break;
}
}

function CCcheckSeason(){
    var selectValue = document.getElementById("ccselect").value,
        hash = document.getElementById("hash5"),
        seaseon = document.getElementById("cc-season"),
        draw = document.getElementById("draw5"),
        goalScorer = document.getElementById("gscorer5"),
        assistMaker = document.getElementById("amaker5"),
        Image = document.getElementById("ccimg"),
        GroupOne = document.getElementById("cc-g1"),
        GroupTwo = document.getElementById("cc-g2"),
        GroupThree = document.getElementById("cc-g3"),
        Knockout = document.getElementById("cc-ko");
    switch (selectValue){
        case "seseven":
            seaseon.style.display = "block";
             hash.innerHTML = " السابع";
             break;
        case "seten":
            seaseon.style.display = "block";
             hash.innerHTML = " العاشر";
             break;
     }
    switch (selectValue){
        case "seseven":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("ccslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/CC/Se7/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/CC/Se7/g2.png";
            GroupThree.src = "imgs/Cups-Images/National/CC/Se7/g3.png";
            Knockout.src = "imgs/Cups-Images/National/CC/Se7/ko.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CC/Se7/gs.png";
            Image.style.display = "block";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CC/Se7/as.png";
            Image.style.display = "block";
            }
            break;
        case "seten":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("ccslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/National/CC/Se10/g1.png";
            GroupTwo.src = "imgs/Cups-Images/National/CC/Se10/g2.png";
            GroupThree.src = "imgs/Cups-Images/National/CC/Se10/g3.png";
            Knockout.src = "imgs/Cups-Images/National/CC/Se10/ko.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CC/Se10/gs.png";
            Image.style.display = "block";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/National/CC/Se10/as.png";
            Image.style.display = "block";
            }
            break;
}
}

                                             /*   FIXED HOVER FUNCTIONS   */


function fixedHover(){
    var caf = document.getElementById("caf").style.display,
        wcq = document.getElementById("wcq").style.display,
        wc = document.getElementById("wc").style.display,
        cnl = document.getElementById("cnl").style.display,
        csc = document.getElementById("csc").style.display,
        cc = document.getElementById("cc").style.display;

    if(caf == "block"){
        document.getElementById("image1").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
       }
    else if(wcq == "block"){
        document.getElementById("image2").style.background = "#EEE";

        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
            }
    else if(wc == "block"){
        document.getElementById("image3").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
            }
    else if(cnl == "block"){
        document.getElementById("image4").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
            }
    else if(csc == "block"){
        document.getElementById("image5").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
            }
    else if(cc == "block"){
        document.getElementById("image6").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
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
  showSlides(slideIndexa = na);
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
  showSlides(slideIndexas = nas);
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


var slideIndexass = 1;
showSlidesass(slideIndexass);

function plusSlidesass(nass) {
  showSlidesass(slideIndexass += nass);
}

function currentSlideass(nass) {
  showSlides(slideIndexass = nass);
}

function showSlidesass(nass) {
  var iass;
  var slidesass = document.getElementsByClassName("mySlidesass");
  var dotsass = document.getElementsByClassName("dotass");
  if (nass > slidesass.length) {slideIndexass = 1}
  if (nass < 1) {slideIndexass = slidesass.length}
  for (iass = 0; iass < slidesass.length; iass++) {
      slidesass[iass].style.display = "none";
  }
  for (iass = 0; iass < dotsass.length; iass++) {
      dotsass[iass].className = dotsass[iass].className.replace(" active", "");
  }
  slidesass[slideIndexass-1].style.display = "block";
  dotsass[slideIndexass-1].className += " active";
}



$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 4000);
