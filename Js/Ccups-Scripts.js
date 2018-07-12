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
        case "sethree":
            document.getElementById("pl-season").style.display = "block";
            document.getElementById("hash").innerHTML = " Three";
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
        case "sethree":
            document.getElementById("fa-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " Three";
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
        case "sethree":
            document.getElementById("cs-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " Three";
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
        case "sethree":
            document.getElementById("ucl-season").style.display = "block";
             document.getElementById("hash3").innerHTML = " Three";
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
        case "sethree":
            document.getElementById("uel-season").style.display = "block";
             document.getElementById("hash4").innerHTML = " Three";
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
        case "sethree":
            document.getElementById("usc-season").style.display = "block";
             document.getElementById("hash5").innerHTML = " Three";
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
        case "sethree":
            document.getElementById("fcwc-season").style.display = "block";
             document.getElementById("hash6").innerHTML = " Three";
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
            document.getElementById("plimg").src = "https://image.ibb.co/dCCLzy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_23_08_15_31_min.png";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/bwmkXJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_23_08_38_25_min.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/mkG8md/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_23_08_44_11_min.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/eW73Ky/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_23_08_50_93_min.png";
            }
            document.getElementById("steam").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/fyC3Ky/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_23_09_41_99_min.png";
            }
            document.getElementById("sbeast").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/nKYXCJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_02_23_09_03_25_min.png";
            }
            break;
            
            case "sethree":
            document.getElementById("draw").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/kKeNCJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_30_07_76_min.png";
            }
            document.getElementById("nround").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/c2jYKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_29_56_03_min.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/6SQ4Dvr.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/6SQ4Dvr.png";
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
        case "sethree":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/inMfzy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_28_59_02_min.png";
            }
            document.getElementById("nround1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/cpKB6d/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_28_48_73_min.png";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/6SQ4Dvr.png";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/6SQ4Dvr.png";
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
            document.getElementById("csimg").src = "https://image.ibb.co/m5UYKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_17_23_05_min.png";
            }
            document.getElementById("nround2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/mOENCJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_17_44_42_min.png";
            }
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/mRdtKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_17_49_29_min.png";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/knsymd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_18_01_39_min.png";
            }
            break;
        case "sethree":
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
            document.getElementById("ucl-r4").src = "https://image.ibb.co/gggLUy/Pro_Evolution_Soccer_2018_Screenshot_2018_06_30_23_55_48_08_min.png";
            document.getElementById("ucl-f").src = "https://image.ibb.co/irw9NJ/Pro_Evolution_Soccer_2018_Screenshot_2018_06_30_23_55_13_01_min.png";
            }
            document.getElementById("nround3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/f0QfUy/Pro_Evolution_Soccer_2018_Screenshot_2018_06_30_23_55_02_83_min.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("gscorer3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/hGbn9y/Pro_Evolution_Soccer_2018_Screenshot_2018_06_30_23_56_11_81_min.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("amaker3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/bBhG2J/Pro_Evolution_Soccer_2018_Screenshot_2018_06_30_23_56_27_16_min.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
        case "sethree":
            document.getElementById("draw3").onclick = function(){
            document.getElementById("uclimg").style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            document.getElementById("ucl-g1").src = "https://image.ibb.co/bywKsJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_32_66_min.png";
            document.getElementById("ucl-g2").src = "https://image.ibb.co/hWX3Ky/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_33_59_min.png";
            document.getElementById("ucl-g3").src = "https://image.ibb.co/ikjiKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_34_33_min.png";
            document.getElementById("ucl-g4").src = "https://image.ibb.co/eVRKsJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_35_05_min.png";
            document.getElementById("ucl-g5").src = "https://image.ibb.co/dOOAzy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_35_92_min.png";
            document.getElementById("ucl-g6").src = "https://image.ibb.co/e6ziKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_36_75_min.png";
            document.getElementById("ucl-g7").src = "https://image.ibb.co/fWwxey/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_37_54_min.png";
            document.getElementById("ucl-g8").src = "https://image.ibb.co/bE4uRd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_38_32_min.png";
            document.getElementById("ucl-r16").src = "https://i.imgur.com/E26q62r.png";
            document.getElementById("ucl-r8").src = "https://i.imgur.com/E26q62r.png";
            document.getElementById("ucl-r4").src = "https://i.imgur.com/E26q62r.png";
            document.getElementById("ucl-f").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("nround3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/eTV7ey/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_31_06_18_min.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("gscorer3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/E26q62r.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("amaker3").onclick = function(){
            document.getElementById("uclimg").src = "https://i.imgur.com/E26q62r.png";
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
        case "sethree":
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
        case "sethree":
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
            document.getElementById("fcwcimg").src = "https://image.ibb.co/iwW8md/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_01_58_48_00_min.png";
            }
            document.getElementById("nround6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://i.imgur.com/Z8gcTG1.png";
            }
            document.getElementById("gscorer6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://image.ibb.co/hVH3Ky/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_01_59_00_57_min.png";
            }
            document.getElementById("amaker6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://image.ibb.co/bBjuRd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_01_59_07_64_min.png";
            }
            break;
        case "sethree":
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