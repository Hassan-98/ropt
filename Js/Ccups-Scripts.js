/* global document */

/*      CALLING FUNCTIONS     */
function callPlFunctions(){
    showPl();
    showPlSeason(); 
    PLcheckSeason();
    fixedHover();
}
function callFaFunctions(){
    showFa();
    showFaSeason();
    FAcheckSeason();
    fixedHover();
}
function callCsFunctions(){
    showCs();
    showCsSeason(); 
    CScheckSeason();
    fixedHover();
}
function callUclFunctions(){
    showUcl();
    showUclSeason(); 
    UCLcheckSeason();
    fixedHover();
}
function callUelFunctions(){
    showUel();
    showUelSeason(); 
    UELcheckSeason();
    fixedHover();
}
function callUscFunctions(){
    showUsc();
    showUscSeason(); 
    USCcheckSeason();
    fixedHover();
}
function callFcwcFunctions(){
    showFcwc();
    showFcwcSeason(); 
    FcwccheckSeason();
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
}
function showFa(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "block";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
}
function showCs(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "block";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
}
function showUcl(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "block";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
}
function showUel(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "block";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
}
function showUsc(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("usccup").style.display = "block";
}
function showFcwc(){
    document.getElementById("pleague").style.display = "none";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "block";
}

         /*  SHOW SEASONS FUNCTIONS  */

function showPlSeason(){
    var selectValue = document.getElementById("plselect").value;
     switch (selectValue){
         case "sepre":
             document.getElementById("pl-season").style.display = "block";
             document.getElementById("hash").innerHTML = "preliminary";
             break;
        case "seone":
            document.getElementById("pl-season").style.display = "block";
            document.getElementById("hash").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("pl-season").style.display = "block";
            document.getElementById("hash").innerHTML = " Two";
             break;

     }
    
}
function showFaSeason(){
    var selectValue = document.getElementById("faselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("fa-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("fa-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " Two";
             break;

     }
    
}
function showCsSeason(){
    var selectValue = document.getElementById("csselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("cs-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("cs-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " Two";
             break;

     }
    
}
function showUclSeason(){
    var selectValue = document.getElementById("uclselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("ucl-season").style.display = "block";
             document.getElementById("hash3").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("ucl-season").style.display = "block";
             document.getElementById("hash3").innerHTML = " Two";
             break;

     }
    
}
function showUelSeason(){
    var selectValue = document.getElementById("uelselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("uel-season").style.display = "block";
             document.getElementById("hash4").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("uel-season").style.display = "block";
             document.getElementById("hash4").innerHTML = " Two";
             break;

     }
    
}
function showUscSeason(){
    var selectValue = document.getElementById("uscselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("usc-season").style.display = "block";
             document.getElementById("hash5").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("usc-season").style.display = "block";
             document.getElementById("hash5").innerHTML = " Two";
             break;

     }
    
}
function showFcwcSeason(){
    var selectValue = document.getElementById("fcwcselect").value;
     switch (selectValue){
        case "seone":
            document.getElementById("fcwc-season").style.display = "block";
             document.getElementById("hash6").innerHTML = " One";
             break;
        case "setwo":
            document.getElementById("fcwc-season").style.display = "block";
             document.getElementById("hash6").innerHTML = " Two";
             break;

     }
    
}

        /* SHOW IMGs SEASONS FUNCTIONS */

function PLcheckSeason(){
    var selectValue = document.getElementById("plselect").value;
    switch (selectValue){
        case "sepre":
            document.getElementById("draw").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/Gy8THrF.jpg";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/6SQ4Dvr.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/sWi7QdZ.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/jtYjzxB.png";
            }
            document.getElementById("steam").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/WfcQRdt.png";
            }
            document.getElementById("sbeast").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/vVNzeBS.jpg";
            }
            break;
        case "seone":
            document.getElementById("draw").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/53TKE7Z.png";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/Z3LlJ4N.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/rAA2now.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/mrbrceS.png";
            }
            document.getElementById("steam").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/ASwI5pg.png";
            }
            document.getElementById("sbeast").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/PTv7MuK.png";
            }
            break;
        case "setwo":
            document.getElementById("draw").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/jhxrLjr.png";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/RZ7hUuV.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/kOK5qlI.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/X1S5ZzA.png";
            }
            document.getElementById("steam").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/6SQ4Dvr.png";
            }
            document.getElementById("sbeast").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/6SQ4Dvr.png";
            }
            break;
}
}
function FAcheckSeason(){
    var selectValue = document.getElementById("faselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/YsADoet.png";
            }
            document.getElementById("nround1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/Ms7Krvp.png";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/GjOXOcP.png";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/QmfnR8Z.png";
            }
            break;
        case "setwo":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/2UQlD3a.png";
            }
            document.getElementById("nround1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/ceKYjA1.png";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/gPUiXH1.png";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/SG7whZ0.png";
            }
            break;
}
}

function CScheckSeason(){
    var selectValue = document.getElementById("csselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/9fprnmJ.png";
            }
            document.getElementById("nround2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/Ms7Krvp.png";
            }
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/X0DCSZt.png";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/X8fM7es.png";
            }
            break;
        case "setwo":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("nround2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/E26q62r.png";
            }
            break;
}
}

function UCLcheckSeason(){
    var selectValue = document.getElementById("uclselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw3").onclick = function(){
            document.getElementById("uclimg").style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            document.getElementById("ucl-g1").src = "https://i.imgur.com/vBpic63.png";
            document.getElementById("ucl-g2").src = "https://i.imgur.com/vmBwBUp.png";
            document.getElementById("ucl-g3").src = "https://i.imgur.com/U9TZzJh.png";
            document.getElementById("ucl-g4").src = "https://i.imgur.com/wBniaNf.png";
            document.getElementById("ucl-g5").src = "https://i.imgur.com/TKzj9zZ.png";
            document.getElementById("ucl-g6").src = "https://i.imgur.com/2i2SihE.png";
            document.getElementById("ucl-g7").src = "https://i.imgur.com/hHVVhTK.png";
            document.getElementById("ucl-g8").src = "https://i.imgur.com/JjbKkrG.png";
            document.getElementById("ucl-r16").src = "https://i.imgur.com/cGSfNxt.png";
            document.getElementById("ucl-r8").src = "https://i.imgur.com/B6sIGeW.png";
            document.getElementById("ucl-r4").src = "https://i.imgur.com/PzWBPKK.png";
            document.getElementById("ucl-f").src = "https://i.imgur.com/iP8c51z.png";
            }
            document.getElementById("nround3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/zkOjaHp.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("gscorer3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/ILGHnS9.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("amaker3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/IzaxLqN.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "setwo":
            document.getElementById("draw3").onclick = function(){
            document.getElementById("uclimg").style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            document.getElementById("ucl-g1").src = "https://i.imgur.com/Io0PyhN.png";
            document.getElementById("ucl-g2").src = "https://i.imgur.com/czwzcqe.png";
            document.getElementById("ucl-g3").src = "https://i.imgur.com/NL4rdw1.png";
            document.getElementById("ucl-g4").src = "https://i.imgur.com/hNrCEoH.png";
            document.getElementById("ucl-g5").src = "https://i.imgur.com/OdHwjwf.png";
            document.getElementById("ucl-g6").src = "https://i.imgur.com/dWIfPBi.png";
            document.getElementById("ucl-g7").src = "https://i.imgur.com/T4N5wQW.png";
            document.getElementById("ucl-g8").src = "https://i.imgur.com/RXwbpxh.png";
            document.getElementById("ucl-r16").src = "https://i.imgur.com/uPVeDJw.png";
            document.getElementById("ucl-r8").src = "https://i.imgur.com/ITVJh6R.png";
            document.getElementById("ucl-r4").src = "https://i.imgur.com/TYbxvMi.png";
            document.getElementById("ucl-f").src = "https://i.imgur.com/6HrDL0Q.gif";
            }
            document.getElementById("nround3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/DAM5dvY.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("gscorer3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/o2ekkuz.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("amaker3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/pC13V7v.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
}
}

function UELcheckSeason(){
    var selectValue = document.getElementById("uelselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw4").onclick = function(){
            document.getElementById("uelimg").style.display = "none";
            document.getElementById("uelslidediv").style.display = "block";
            document.getElementById("uel-g1").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g2").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g3").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g4").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g5").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g6").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g7").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g8").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g9").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g10").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g11").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-g12").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-r32").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-r16").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-r8").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-r4").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uel-f").src = "https://i.imgur.com/h1QybZ9.gif";
            }
            document.getElementById("nround4").onclick = function(){
            document.getElementById("uelimg").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            document.getElementById("gscorer4").onclick = function(){
            document.getElementById("uelimg").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            document.getElementById("amaker4").onclick = function(){
            document.getElementById("uelimg").src = "https://i.imgur.com/h1QybZ9.gif";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            break;
        case "setwo":
            document.getElementById("draw4").onclick = function(){
            document.getElementById("uelimg").style.display = "none";
            document.getElementById("uelslidediv").style.display = "block";
            document.getElementById("uel-g1").src = "https://i.imgur.com/1L3k2C6.png";
            document.getElementById("uel-g2").src = "https://i.imgur.com/sScNnsQ.png";
            document.getElementById("uel-g3").src = "https://i.imgur.com/x1p5lJE.png";
            document.getElementById("uel-g4").src = "https://i.imgur.com/HR2G5Ml.png";
            document.getElementById("uel-g5").src = "https://i.imgur.com/CYB7i03.png";
            document.getElementById("uel-g6").src = "https://i.imgur.com/wEQ0vVb.png";
            document.getElementById("uel-g7").src = "https://i.imgur.com/lTYpuaw.png";
            document.getElementById("uel-g8").src = "https://i.imgur.com/qp29ljZ.png";
            document.getElementById("uel-g9").src = "https://i.imgur.com/Voe6jN4.png";
            document.getElementById("uel-g10").src = "https://i.imgur.com/rfW0SxB.png";
            document.getElementById("uel-g11").src = "https://i.imgur.com/sgwURms.png";
            document.getElementById("uel-g12").src = "https://i.imgur.com/ruZffcu.png";
            document.getElementById("uel-r32").src = "https://i.imgur.com/5PPbeWu.png";
            document.getElementById("uel-r16").src = "https://i.imgur.com/Fk91Giq.png";
            document.getElementById("uel-r8").src = "https://i.imgur.com/cf81Chn.png";
            document.getElementById("uel-r4").src = "https://i.imgur.com/xQNy2sA.png";
            document.getElementById("uel-f").src = "https://i.imgur.com/umZ0iPR.png";
            }
            document.getElementById("nround4").onclick = function(){
            document.getElementById("uelimg").src = "https://i.imgur.com/2rStrHa.png";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            document.getElementById("gscorer4").onclick = function(){
            document.getElementById("uelimg").src = "https://i.imgur.com/pO6IcTU.png";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            document.getElementById("amaker4").onclick = function(){
            document.getElementById("uelimg").src = "https://i.imgur.com/yoVB7Jw.png";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            break;
}
}

function USCcheckSeason(){
    var selectValue = document.getElementById("uscselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/bCRW2AF.png";
            }
            document.getElementById("nround5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/Ms7Krvp.png";
            }
            document.getElementById("gscorer5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/SngNVfX.png";
            }
            document.getElementById("amaker5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/dykJ79g.png";
            }
            break;
        case "setwo":
            document.getElementById("draw5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("nround5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("gscorer5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("amaker5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/E26q62r.png";
            }
            break;
}
}

function FcwccheckSeason(){
    var selectValue = document.getElementById("fcwcselect").value;
    switch (selectValue){
        case "seone":
            document.getElementById("draw6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            document.getElementById("nround6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            document.getElementById("gscorer6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            document.getElementById("amaker6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            break;
        case "setwo":
            document.getElementById("draw6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            document.getElementById("nround6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            document.getElementById("gscorer6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            document.getElementById("amaker6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            break;
}
}



                                             /*   FIXED HOVER FUNCTIONS   */


function fixedHover(){
    var pl = document.getElementById("pleague").style.display;
    var fa = document.getElementById("facup").style.display;
    var cs = document.getElementById("cscup").style.display;
    var ucl = document.getElementById("uclcup").style.display;
    var uel = document.getElementById("uelcup").style.display;
    var usc = document.getElementById("usccup").style.display;
    var fcwc = document.getElementById("fcwc").style.display;
    
    if(pl == "block"){
        document.getElementById("image1").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
       }
    else if(fa == "block"){
        document.getElementById("image2").style.background = "#EEE";
        
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
            }
    else if(cs == "block"){
        document.getElementById("image3").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
            }
    else if(ucl == "block"){
        document.getElementById("image4").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
            }
    else if(uel == "block"){
        document.getElementById("image5").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
            }
    else if(usc == "block"){
        document.getElementById("image6").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image7").style.background = "#fff";
            }
    else if(fcwc == "block"){
        document.getElementById("image7").style.background = "#EEE";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image3").style.background = "#fff";
        document.getElementById("image4").style.background = "#fff";
        document.getElementById("image5").style.background = "#fff";
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image6").style.background = "#fff";
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