/* global document */

/*      CALLING FUNCTIONS     */
function callPlFunctions(){
    showPl();
    PLcheckSeason();
    fixedHover();
}
function callFaFunctions(){
    showFa();
    FAcheckSeason();
    fixedHover();
}
function callCsFunctions(){
    showCs();
    CScheckSeason();
    fixedHover();
}
function callUclFunctions(){
    showUcl();
    UCLcheckSeason();
    fixedHover();
}
function callUelFunctions(){
    showUel();
    UELcheckSeason();
    fixedHover();
}
function callUscFunctions(){
    showUsc();
    USCcheckSeason();
    fixedHover();
}
function callFcwcFunctions(){
    showFcwc();
    FcwccheckSeason();
    fixedHover();
}
function callEflFunctions(){
    showEfl();
    EFLcheckSeason();
    fixedHover();
}
function callIccFunctions(){
    showIcc();
    ICCcheckSeason();
    fixedHover();
}

        /* SHOW SECTIONS FUNCTIONS */

function showPl(){
    document.getElementById("pleague").style.display = "block";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("pleague").style.display == "block"){
       $('html, body').animate({scrollTop: $("#pleague").offset().top}, 1000);
       }
}
function showFa(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "block";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("facup").style.display == "block"){
       $('html, body').animate({scrollTop: $("#facup").offset().top}, 1000);
       }
}
function showCs(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "block";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("cscup").style.display == "block"){
       $('html, body').animate({scrollTop: $("#cscup").offset().top}, 1000);
       }
}
function showUcl(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "block";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("uclcup").style.display == "block"){
       $('html, body').animate({scrollTop: $("#uclcup").offset().top}, 1000);
       }
}
function showUel(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "block";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("uelcup").style.display == "block"){
       $('html, body').animate({scrollTop: $("#uelcup").offset().top}, 1000);
       }
}
function showUsc(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "block";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("usccup").style.display == "block"){
       $('html, body').animate({scrollTop: $("#usccup").offset().top}, 1000);
       }
}
function showFcwc(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "block";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("fcwc").style.display == "block"){
       $('html, body').animate({scrollTop: $("#fcwc").offset().top}, 1000);
       }
}
function showEfl(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "block";
    document.getElementById("icc").style.display = "none";
    if(document.getElementById("efl").style.display == "block"){
       $('html, body').animate({scrollTop: $("#efl").offset().top}, 1000);
       }
}
function showIcc(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("efl").style.display = "none";
    document.getElementById("icc").style.display = "block";
    if(document.getElementById("icc").style.display == "block"){
       $('html, body').animate({scrollTop: $("#icc").offset().top}, 1000);
       }
}


        /* SHOW IMGs SEASONS FUNCTIONS */

function PLcheckSeason(){
    var selectValue = document.getElementById("plselect").value,
        hash = document.getElementById("hash"),
        seaseon = document.getElementById("pl-season"),
        draw = document.getElementById("draw"),
        goalScorer = document.getElementById("gscorer"),
        assistMaker = document.getElementById("amaker"),
        seasonTeam = document.getElementById("steam"),
        seasonBest = document.getElementById("sbeast"),
        Image = document.getElementById("plimg");
     switch (selectValue){
         case "sepre":
             seaseon.style.display = "block";
             hash.innerHTML = "التمهيدي";
             break;
        case "seone":
            seaseon.style.display = "block";
            hash.innerHTML = " الاول";
             break;
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
        case "sesix":
            seaseon.style.display = "block";
            hash.innerHTML = " السادس";
             break;

     }
    switch (selectValue){
        case "sepre":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Pre/league.jpg";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Pre/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Pre/as.png";
            }
            seasonTeam.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Pre/st.png";
            }
            seasonBest.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Pre/sb.jpg";
            }
            break;
        case "seone":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se1/league.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se1/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se1/as.png";
            }
            seasonTeam.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se1/st.png";
            }
            seasonBest.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se1/sb.png";
            }
            break;
        case "setwo":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se2/league.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se2/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se2/as.png";
            }
            seasonTeam.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se2/st.png";
            }
            seasonBest.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se2/sb.png";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se3/league.jpg";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se3/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se3/as.png";
            }
            seasonTeam.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se3/st.png";
            }
            seasonBest.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se3/sb.png";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se4/league.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se4/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se4/as.png";
            }
            seasonTeam.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se4/st.png";
            }
            seasonBest.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/PL/Se4/sb.png";
            }
            break;
      case "sefive":
          draw.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se5/league.png";
          }
          goalScorer.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se5/gs.png";
          }
          assistMaker.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se5/as.png";
          }
          seasonTeam.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se5/st.png";
          }
          seasonBest.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se5/sb.png";
          }
          break;
      case "sesix":
          draw.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se6/league.png";
          }
          goalScorer.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se6/gs.png";
          }
          assistMaker.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se6/as.png";
          }
          seasonTeam.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se6/st.png";
          }
          seasonBest.onclick = function(){
          Image.src = "imgs/Cups-Images/Clubs/PL/Se6/sb.png";
          }
          break;
}
}

function FAcheckSeason(){
    var selectValue = document.getElementById("faselect").value,
        hash = document.getElementById("hash1"),
        seaseon = document.getElementById("fa-season"),
        draw = document.getElementById("draw1"),
        goalScorer = document.getElementById("gscorer1"),
        assistMaker = document.getElementById("amaker1"),
        Image = document.getElementById("faimg");
    switch (selectValue){
        case "seone":
            seaseon.style.display = "block";
             hash.innerHTML = " الاول";
             break;
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
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;

     }
    switch (selectValue){
        case "seone":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se1/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se1/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se1/as.png";
            }
            break;
        case "setwo":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se2/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se2/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se2/as.png";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se3/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se3/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se3/as.png";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se4/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se4/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se4/as.png";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se5/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se5/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se5/as.png";
            }
            break;
        case "sesix":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se6/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se6/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FA/Se6/as.png";
            }
            break;
}
}

function CScheckSeason(){
    var selectValue = document.getElementById("csselect").value,
        hash = document.getElementById("hash2"),
        seaseon = document.getElementById("cs-season"),
        draw = document.getElementById("draw2"),
        goalScorer = document.getElementById("gscorer2"),
        assistMaker = document.getElementById("amaker2"),
        Image = document.getElementById("csimg");
    switch (selectValue){
        case "seone":
            seaseon.style.display = "block";
             hash.innerHTML = " الاول";
             break;
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
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;

     }
    switch (selectValue){
        case "seone":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se1/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se1/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se1/as.png";
            }
            break;
        case "setwo":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se2/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se2/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se2/as.png";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se3/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se3/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se3/as.png";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se4/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se4/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se4/as.png";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se5/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se5/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/CS/Se5/as.png";
            }
            break;
}
}

function UCLcheckSeason(){
    var selectValue = document.getElementById("uclselect").value,
        hash = document.getElementById("hash3"),
        seaseon = document.getElementById("ucl-season"),
        draw = document.getElementById("draw3"),
        goalScorer = document.getElementById("gscorer3"),
        assistMaker = document.getElementById("amaker3"),
        Image = document.getElementById("uclimg"),
        GroupOne = document.getElementById("ucl-g1"),
        GroupTwo = document.getElementById("ucl-g2"),
        GroupThree = document.getElementById("ucl-g3"),
        GroupFour = document.getElementById("ucl-g4"),
        GroupFive = document.getElementById("ucl-g5"),
        GroupSix = document.getElementById("ucl-g6"),
        GroupSeven = document.getElementById("ucl-g7"),
        GroupEight = document.getElementById("ucl-g8"),
        Ro16 = document.getElementById("ucl-r16"),
        Ro8 = document.getElementById("ucl-r8"),
        Ro4 = document.getElementById("ucl-r4"),
        Final = document.getElementById("ucl-f");
    switch (selectValue){
        case "seone":
            seaseon.style.display = "block";
             hash.innerHTML = " الاول";
             break;
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
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;

     }
    switch (selectValue){
        case "seone":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UCL/Se1/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UCL/Se1/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UCL/Se1/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UCL/Se1/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UCL/Se1/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UCL/Se1/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UCL/Se1/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UCL/Se1/g8.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UCL/Se1/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UCL/Se1/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UCL/Se1/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UCL/Se1/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se1/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se1/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "setwo":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UCL/Se2/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UCL/Se2/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UCL/Se2/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UCL/Se2/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UCL/Se2/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UCL/Se2/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UCL/Se2/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UCL/Se2/g8.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UCL/Se2/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UCL/Se2/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UCL/Se2/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UCL/Se2/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se2/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se2/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UCL/Se3/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UCL/Se3/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UCL/Se3/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UCL/Se3/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UCL/Se3/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UCL/Se3/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UCL/Se3/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UCL/Se3/g8.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UCL/Se3/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UCL/Se3/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UCL/Se3/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UCL/Se3/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se3/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se3/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UCL/Se4/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UCL/Se4/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UCL/Se4/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UCL/Se4/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UCL/Se4/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UCL/Se4/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UCL/Se4/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UCL/Se4/g8.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UCL/Se4/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UCL/Se4/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UCL/Se4/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UCL/Se4/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se4/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se4/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UCL/Se5/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UCL/Se5/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UCL/Se5/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UCL/Se5/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UCL/Se5/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UCL/Se5/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UCL/Se5/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UCL/Se5/g8.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UCL/Se5/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UCL/Se5/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UCL/Se5/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UCL/Se5/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se5/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se5/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sesix":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UCL/Se6/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UCL/Se6/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UCL/Se6/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UCL/Se6/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UCL/Se6/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UCL/Se6/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UCL/Se6/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UCL/Se6/g8.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UCL/Se6/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UCL/Se6/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UCL/Se6/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UCL/Se6/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se6/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UCL/Se6/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
}
}

function UELcheckSeason(){
    var selectValue = document.getElementById("uelselect").value,
        hash = document.getElementById("hash4"),
        seaseon = document.getElementById("uel-season"),
        draw = document.getElementById("draw4"),
        goalScorer = document.getElementById("gscorer4"),
        assistMaker = document.getElementById("amaker4"),
        Image = document.getElementById("uelimg"),
        GroupOne = document.getElementById("uel-g1"),
        GroupTwo = document.getElementById("uel-g2"),
        GroupThree = document.getElementById("uel-g3"),
        GroupFour = document.getElementById("uel-g4"),
        GroupFive = document.getElementById("uel-g5"),
        GroupSix = document.getElementById("uel-g6"),
        GroupSeven = document.getElementById("uel-g7"),
        GroupEight = document.getElementById("uel-g8"),
        GroupNine = document.getElementById("uel-g9"),
        GroupTen = document.getElementById("uel-g10"),
        GroupEleven = document.getElementById("uel-g11"),
        GroupTwelve = document.getElementById("uel-g12"),
        Ro321 = document.getElementById("uel-r321"),
        Ro322 = document.getElementById("uel-r322"),
        Ro16 = document.getElementById("uel-r16"),
        Ro8 = document.getElementById("uel-r8"),
        Ro4 = document.getElementById("uel-r4"),
        Final = document.getElementById("uel-f");
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
             hash.innerHTML = " الرايع";
             break;
        case "sefive":
            seaseon.style.display = "block";
             hash.innerHTML = " الخامس";
             break;
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;

     }
    switch (selectValue){
        case "setwo":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UEL/Se2/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UEL/Se2/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UEL/Se2/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UEL/Se2/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UEL/Se2/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UEL/Se2/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UEL/Se2/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UEL/Se2/g8.png";
            GroupNine.src = "imgs/Cups-Images/Clubs/UEL/Se2/g9.png";
            GroupTen.src = "imgs/Cups-Images/Clubs/UEL/Se2/g10.png";
            GroupEleven.src = "imgs/Cups-Images/Clubs/UEL/Se2/g11.png";
            GroupTwelve.src = "imgs/Cups-Images/Clubs/UEL/Se2/g12.png";
            Ro321.src = "imgs/Cups-Images/Clubs/UEL/Se2/r321.png";
            Ro322.src = "imgs/Cups-Images/Clubs/UEL/Se2/r322.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UEL/Se2/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UEL/Se2/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UEL/Se2/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UEL/Se2/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se2/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se2/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UEL/Se3/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UEL/Se3/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UEL/Se3/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UEL/Se3/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UEL/Se3/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UEL/Se3/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UEL/Se3/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UEL/Se3/g8.png";
            GroupNine.src = "imgs/Cups-Images/Clubs/UEL/Se3/g9.png";
            GroupTen.src = "imgs/Cups-Images/Clubs/UEL/Se3/g10.png";
            GroupEleven.src = "imgs/Cups-Images/Clubs/UEL/Se3/g11.png";
            GroupTwelve.src = "imgs/Cups-Images/Clubs/UEL/Se3/g12.png";
            Ro321.src = "imgs/Cups-Images/Clubs/UEL/Se3/r321.png";
            Ro322.src = "imgs/Cups-Images/Clubs/UEL/Se3/r322.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UEL/Se3/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UEL/Se3/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UEL/Se3/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UEL/Se3/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se3/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se3/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UEL/Se4/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UEL/Se4/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UEL/Se4/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UEL/Se4/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UEL/Se4/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UEL/Se4/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UEL/Se4/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UEL/Se4/g8.png";
            GroupNine.src = "imgs/Cups-Images/Clubs/UEL/Se4/g9.png";
            GroupTen.src = "imgs/Cups-Images/Clubs/UEL/Se4/g10.png";
            GroupEleven.src = "imgs/Cups-Images/Clubs/UEL/Se4/g11.png";
            GroupTwelve.src = "imgs/Cups-Images/Clubs/UEL/Se4/g12.png";
            Ro321.src = "imgs/Cups-Images/Clubs/UEL/Se4/r321.png";
            Ro322.src = "imgs/Cups-Images/Clubs/UEL/Se4/r322.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UEL/Se4/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UEL/Se4/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UEL/Se4/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UEL/Se4/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se4/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se4/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UEL/Se5/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UEL/Se5/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UEL/Se5/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UEL/Se5/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UEL/Se5/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UEL/Se5/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UEL/Se5/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UEL/Se5/g8.png";
            GroupNine.src = "imgs/Cups-Images/Clubs/UEL/Se5/g9.png";
            GroupTen.src = "imgs/Cups-Images/Clubs/UEL/Se5/g10.png";
            GroupEleven.src = "imgs/Cups-Images/Clubs/UEL/Se5/g11.png";
            GroupTwelve.src = "imgs/Cups-Images/Clubs/UEL/Se5/g12.png";
            Ro321.src = "imgs/Cups-Images/Clubs/UEL/Se5/r321.png";
            Ro322.src = "imgs/Cups-Images/Clubs/UEL/Se5/r322.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UEL/Se5/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UEL/Se5/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UEL/Se5/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UEL/Se5/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se2/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se2/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sesix":
            draw.onclick = function(){
            Image.style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            GroupOne.src = "imgs/Cups-Images/Clubs/UEL/Se6/g1.png";
            GroupTwo.src = "imgs/Cups-Images/Clubs/UEL/Se6/g2.png";
            GroupThree.src = "imgs/Cups-Images/Clubs/UEL/Se6/g3.png";
            GroupFour.src = "imgs/Cups-Images/Clubs/UEL/Se6/g4.png";
            GroupFive.src = "imgs/Cups-Images/Clubs/UEL/Se6/g5.png";
            GroupSix.src = "imgs/Cups-Images/Clubs/UEL/Se6/g6.png";
            GroupSeven.src = "imgs/Cups-Images/Clubs/UEL/Se6/g7.png";
            GroupEight.src = "imgs/Cups-Images/Clubs/UEL/Se6/g8.png";
            GroupNine.src = "imgs/Cups-Images/Clubs/UEL/Se6/g9.png";
            GroupTen.src = "imgs/Cups-Images/Clubs/UEL/Se6/g10.png";
            GroupEleven.src = "imgs/Cups-Images/Clubs/UEL/Se6/g11.png";
            GroupTwelve.src = "imgs/Cups-Images/Clubs/UEL/Se6/g12.png";
            Ro321.src = "imgs/Cups-Images/Clubs/UEL/Se6/r321.png";
            Ro322.src = "imgs/Cups-Images/Clubs/UEL/Se6/r322.png";
            Ro16.src = "imgs/Cups-Images/Clubs/UEL/Se6/r16.png";
            Ro8.src = "imgs/Cups-Images/Clubs/UEL/Se6/r8.png";
            Ro4.src = "imgs/Cups-Images/Clubs/UEL/Se6/r4.png";
            Final.src = "imgs/Cups-Images/Clubs/UEL/Se6/f.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se6/gs.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/UEL/Se6/as.png";
            Image.style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
}
}

function USCcheckSeason(){
    var selectValue = document.getElementById("uscselect").value,
        hash = document.getElementById("hash5"),
        seaseon = document.getElementById("usc-season"),
        draw = document.getElementById("draw5"),
        goalScorer = document.getElementById("gscorer5"),
        assistMaker = document.getElementById("amaker5"),
        Image = document.getElementById("uscimg");
    switch (selectValue){
        case "seone":
            seaseon.style.display = "block";
             hash.innerHTML = " الاول";
             break;
        case "sefour":
            seaseon.style.display = "block";
             hash.innerHTML = " الرابع";
             break;
        case "sefive":
            seaseon.style.display = "block";
             hash.innerHTML = " الخامس";
             break;
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;

     }
    switch (selectValue){
        case "seone":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se1/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se1/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se1/as.png";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se4/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se4/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se4/as.png";
            }
            break;
        case "sefive":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se5/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se5/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/USC/Se5/as.png";
            }
            break;
}
}

function FcwccheckSeason(){
    var selectValue = document.getElementById("fcwcselect").value,
        hash = document.getElementById("hash6"),
        seaseon = document.getElementById("fcwc-season"),
        draw = document.getElementById("draw6"),
        goalScorer = document.getElementById("gscorer6"),
        assistMaker = document.getElementById("amaker6"),
        Image = document.getElementById("fcwcimg");
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
        case "sesix":
            seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;

     }
    switch (selectValue){
        case "setwo":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se2/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se2/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se2/as.png";
            }
            break;
        case "sethree":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se3/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se3/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se3/as.png";
            }
            break;
        case "sefour":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se4/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se4/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se4/as.png";
            }
            break;
        case "sesix":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se6/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se6/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/FCWC/Se6/as.png";
            }
            break;
}
}
function EFLcheckSeason(){
    var selectValue = document.getElementById("eflselect").value,
        hash = document.getElementById("hash7"),
        seaseon = document.getElementById("efl-season"),
        draw = document.getElementById("draw7"),
        goalScorer = document.getElementById("gscorer7"),
        assistMaker = document.getElementById("amaker7"),
        Image = document.getElementById("eflimg");
     switch (selectValue){
         case "sesix":
             seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;
        case "seseven":
            seaseon.style.display = "block";
            hash.innerHTML = " السابع";
             break;

     }
    switch (selectValue){
        case "sesix":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/EFL/Se6/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/EFL/Se6/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/EFL/Se6/as.png";
            }
            break;
        case "seseven":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/EFL/Se7/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/EFL/Se7/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/EFL/Se7/as.png";
            }
            break;
}
}
function ICCcheckSeason(){
    var selectValue = document.getElementById("iccselect").value,
        hash = document.getElementById("hash8"),
        seaseon = document.getElementById("icc-season"),
        draw = document.getElementById("draw8"),
        goalScorer = document.getElementById("gscorer8"),
        assistMaker = document.getElementById("amaker8"),
        Image = document.getElementById("iccimg");
     switch (selectValue){
         case "sesix":
             seaseon.style.display = "block";
             hash.innerHTML = " السادس";
             break;
        case "seseven":
            seaseon.style.display = "block";
            hash.innerHTML = " السابع";
             break;

     }
    switch (selectValue){
        case "sesix":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/ICC/Se6/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/ICC/Se6/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/ICC/Se6/as.png";
            }
            break;
        case "seseven":
            draw.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/ICC/Se7/cup.png";
            }
            goalScorer.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/ICC/Se7/gs.png";
            }
            assistMaker.onclick = function(){
            Image.src = "imgs/Cups-Images/Clubs/ICC/Se7/as.png";
            }
            break;
}
}



                                             /*   FIXED HOVER FUNCTIONS   */


function fixedHover(){
    var pl = document.getElementById("pleague").style.display,
        fa = document.getElementById("facup").style.display,
        cs = document.getElementById("cscup").style.display,
        ucl = document.getElementById("uclcup").style.display,
        uel = document.getElementById("uelcup").style.display,
        usc = document.getElementById("usccup").style.display,
        fcwc = document.getElementById("fcwc").style.display,
        efl = document.getElementById("efl").style.display,
        icc = document.getElementById("icc").style.display;

    if(pl == "block"){
        document.getElementById("image1").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
       }
    else if(fa == "block"){
        document.getElementById("image2").style.background = "#EEE";

        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
            }
    else if(cs == "block"){
        document.getElementById("image3").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
            }
    else if(ucl == "block"){
        document.getElementById("image4").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
            }
    else if(uel == "block"){
        document.getElementById("image5").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
            }
    else if(usc == "block"){
        document.getElementById("image6").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
            }
    else if(fcwc == "block"){
        document.getElementById("image7").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
            }
    else if(efl == "block"){
        document.getElementById("image8").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image9").style.background = "#fff";
            }
    else if(icc == "block"){
        document.getElementById("image9").style.background = "#EEE";

        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image8").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
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


$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 4000);
