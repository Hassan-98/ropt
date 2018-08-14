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

        /* SHOW SECTIONS FUNCTIONS */

function showPl(){
    document.getElementById("pleague").style.display = "block";
    document.getElementById("facup").style.display = "none";
    document.getElementById("cscup").style.display = "none";
    document.getElementById("uclcup").style.display = "none";
    document.getElementById("uelcup").style.display = "none";
    document.getElementById("usccup").style.display = "none";
    document.getElementById("fcwc").style.display = "none";
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
    document.getElementById("fcwc").style.display = "none";
    document.getElementById("usccup").style.display = "block";
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
    if(document.getElementById("fcwc").style.display == "block"){
       $('html, body').animate({scrollTop: $("#fcwc").offset().top}, 1000);
       }
}


        /* SHOW IMGs SEASONS FUNCTIONS */

function PLcheckSeason(){
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
        case "sefour":
            document.getElementById("pl-season").style.display = "block";
            document.getElementById("hash").innerHTML = " Four";
             break;

     }
    switch (selectValue){
        case "sepre":
            document.getElementById("draw").onclick = function(){
            document.getElementById("plimg").src = "https://i.imgur.com/Gy8THrF.jpg";
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
            document.getElementById("plimg").src = "https://image.ibb.co/jjCfr8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_30_22_40_46_min.jpg";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/j5x24T/Pro_Evolution_Soccer_2018_Screenshot_2018_07_30_22_43_03_23_min.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/iDFByo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_30_22_42_24_09_min.png";
            }
            document.getElementById("steam").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/b15ddo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_30_22_42_07_04_min.png";
            }
            document.getElementById("sbeast").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/fhXfr8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_30_22_42_17_71_min.png";
            }
            break;
        
        case "sefour":
            document.getElementById("draw").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/jkWDqp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_14_29_22_86_min.png";
            }
            document.getElementById("gscorer").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/nJZcGU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_14_29_26_10_min.png";
            }
            document.getElementById("amaker").onclick = function(){
            document.getElementById("plimg").src = "https://image.ibb.co/mBeYqp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_14_29_32_71_min.png";
            }
            document.getElementById("steam").onclick = function(){
            document.getElementById("plimg").src = "";
            }
            document.getElementById("sbeast").onclick = function(){
            document.getElementById("plimg").src = "";
            }
            break;
}
}

function FAcheckSeason(){
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
        case "sefour":
            document.getElementById("fa-season").style.display = "block";
             document.getElementById("hash1").innerHTML = " Four";
             break;

     }
    switch (selectValue){
        case "seone":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/YsADoet.png";
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
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/gPUiXH1.png";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("faimg").src = "https://i.imgur.com/SG7whZ0.png";
            }
            break;
        case "sethree":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/encgPT/fa_gd_min.png";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/ksaqJo/fa_gs_min.png";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/d2nsW8/fa_ar_min.png";
            }
            break;
        case "sefour":
            document.getElementById("draw1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/g4Lv39/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_14_30_27_48_min.png";
            }
            document.getElementById("gscorer1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/mHuYqp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_14_30_30_71_min.png";
            }
            document.getElementById("amaker1").onclick = function(){
            document.getElementById("faimg").src = "https://image.ibb.co/jANxGU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_14_30_33_75_min.png";
            }
            break;
}
}

function CScheckSeason(){
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
        case "sefour":
            document.getElementById("cs-season").style.display = "block";
             document.getElementById("hash2").innerHTML = " Four";
             break;

     }
    switch (selectValue){
        case "seone":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("csimg").src = "https://i.imgur.com/9fprnmJ.png";
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
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/mRdtKy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_17_49_29_min.png";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/knsymd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_02_18_01_39_min.png";
            }
            break;
        case "sethree":
            document.getElementById("draw2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/cAG20e/DRAW.png";
            }
            document.getElementById("gscorer2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/ns3RRK/gk.png";
            }
            document.getElementById("amaker2").onclick = function(){
            document.getElementById("csimg").src = "https://image.ibb.co/iceN0e/as.png";
            }
            break;
        case "sefour":
            document.getElementById("draw2").onclick = function(){
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
        case "sefour":
            document.getElementById("ucl-season").style.display = "block";
             document.getElementById("hash3").innerHTML = " Four";
             break;

     }
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
            document.getElementById("ucl-g1").src = "https://image.ibb.co/i3xk6y/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_29_05_min.png";
            document.getElementById("ucl-g2").src = "https://image.ibb.co/iJrjzJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_30_86_min.png";
            document.getElementById("ucl-g3").src = "https://image.ibb.co/gWkoRy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_32_92_min.png";
            document.getElementById("ucl-g4").src = "https://image.ibb.co/nRmjzJ/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_34_53_min.png";
            document.getElementById("ucl-g5").src = "https://image.ibb.co/gtrCmy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_20_50_min.png";
            document.getElementById("ucl-g6").src = "https://image.ibb.co/j4HJRy/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_22_23_min.png";
            document.getElementById("ucl-g7").src = "https://image.ibb.co/f3wpYd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_24_89_min.png";
            document.getElementById("ucl-g8").src = "https://image.ibb.co/nHjbDd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_23_04_33_26_64_min.png";
            document.getElementById("ucl-r16").src = "https://image.ibb.co/eLQwr8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_28_00_36_10_35_min.png";
            document.getElementById("ucl-r8").src = "https://image.ibb.co/mFrfJo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_28_00_36_11_51_min.png";
            document.getElementById("ucl-r4").src = "https://image.ibb.co/b6qHjT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_29_12_40_53_77_min.png";
            document.getElementById("ucl-f").src = "https://image.ibb.co/jc9zyo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_29_12_40_51_88_min.png";
            }
            document.getElementById("gscorer3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/hZ6ZW8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_29_12_40_57_41_min.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("amaker3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/etjA4T/Pro_Evolution_Soccer_2018_Screenshot_2018_07_29_12_41_01_30_min.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            break;
            
        case "sefour":
            document.getElementById("draw3").onclick = function(){
            document.getElementById("uclimg").style.display = "none";
            document.getElementById("uclslidediv").style.display = "block";
            document.getElementById("ucl-g1").src = "https://image.ibb.co/cNEPVp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_35_48_min.png";
            document.getElementById("ucl-g2").src = "https://image.ibb.co/iFnBAp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_36_30_min.png";
            document.getElementById("ucl-g3").src = "https://image.ibb.co/iDnpwU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_37_05_min.png";
            document.getElementById("ucl-g4").src = "https://image.ibb.co/cjtUwU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_37_91_min.png";
            document.getElementById("ucl-g5").src = "https://image.ibb.co/hwT7i9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_38_68_min.png";
            document.getElementById("ucl-g6").src = "https://image.ibb.co/nK5bbU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_39_45_min.png";
            document.getElementById("ucl-g7").src = "https://image.ibb.co/hPKPVp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_40_21_min.png";
            document.getElementById("ucl-g8").src = "https://image.ibb.co/kzVbbU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_40_93_min.png";
            document.getElementById("ucl-r16").src = "https://image.ibb.co/n1Ndqp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_46_13_min.png";
            document.getElementById("ucl-r8").src = "";
            document.getElementById("ucl-r4").src = "";
            document.getElementById("ucl-f").src = "";
            }
            document.getElementById("gscorer3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/mEjoO9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_53_52_min.png";
            document.getElementById("uclimg").style.display = "block";
            document.getElementById("uclslidediv").style.display = "none";
            }
            document.getElementById("amaker3").onclick = function(){
            document.getElementById("uclimg").src = "https://image.ibb.co/dgThi9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_11_42_57_32_min.png";
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
        case "sefour":
            document.getElementById("uel-season").style.display = "block";
             document.getElementById("hash4").innerHTML = " Four";
             break;

     }
    switch (selectValue){
        case "seone":
            document.getElementById("draw4").onclick = function(){
            document.getElementById("uelimg").style.display = "none";
            document.getElementById("uelslidediv").style.display = "block";
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
            document.getElementById("uel-r321").src = "https://i.imgur.com/5PPbeWu.png";
            document.getElementById("uel-r322").src = "https://i.imgur.com/5PPbeWu.png";
            document.getElementById("uel-r16").src = "https://i.imgur.com/Fk91Giq.png";
            document.getElementById("uel-r8").src = "https://i.imgur.com/cf81Chn.png";
            document.getElementById("uel-r4").src = "https://i.imgur.com/xQNy2sA.png";
            document.getElementById("uel-f").src = "https://i.imgur.com/umZ0iPR.png";
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
            document.getElementById("uel-g1").src = "https://image.ibb.co/ezrPHT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_16_67_min.png";
            document.getElementById("uel-g2").src = "https://image.ibb.co/e7Mfro/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_18_02_min.png";
            document.getElementById("uel-g3").src = "https://image.ibb.co/ffWPHT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_19_40_min.png";
            document.getElementById("uel-g4").src = "https://image.ibb.co/dwR248/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_20_73_min.png";
            document.getElementById("uel-g5").src = "https://image.ibb.co/iiTFP8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_21_96_min.png";
            document.getElementById("uel-g6").src = "https://image.ibb.co/gdnaP8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_23_63_min.png";
            document.getElementById("uel-g7").src = "https://image.ibb.co/hEEdcT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_24_97_min.png";
            document.getElementById("uel-g8").src = "https://image.ibb.co/m4EYBo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_27_46_min.png";
            document.getElementById("uel-g9").src = "https://image.ibb.co/gwNLro/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_28_73_min.png";
            document.getElementById("uel-g10").src = "https://image.ibb.co/nR2ycT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_29_81_min.png";
            document.getElementById("uel-g11").src = "https://image.ibb.co/ku6DBo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_30_93_min.png";
            document.getElementById("uel-g12").src = "https://image.ibb.co/cX3X48/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_32_04_min.png";
            document.getElementById("uel-r321").src = "https://image.ibb.co/n37QP8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_55_53_min.png";
            document.getElementById("uel-r322").src = "https://image.ibb.co/n37QP8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_55_53_min.png";
            document.getElementById("uel-r16").src = "https://image.ibb.co/g4dzj8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_57_04_90_min.png";
            document.getElementById("uel-r8").src = "https://image.ibb.co/guS3Bo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_57_06_19_min.png";
            document.getElementById("uel-r4").src = "https://image.ibb.co/hXfOBo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_57_07_19_min.png";
            document.getElementById("uel-f").src = "https://image.ibb.co/iQSEHT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_56_52_89_min.png";
            }
            document.getElementById("gscorer4").onclick = function(){
            document.getElementById("uelimg").src = "https://image.ibb.co/dA6wWo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_57_17_02_min.png";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            document.getElementById("amaker4").onclick = function(){
            document.getElementById("uelimg").src = "https://image.ibb.co/macEHT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_15_02_57_21_52_min.png";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            break;
        
        case "sefour":
            document.getElementById("draw4").onclick = function(){
            document.getElementById("uelimg").style.display = "none";
            document.getElementById("uelslidediv").style.display = "block";
            document.getElementById("uel-g1").src = "https://image.ibb.co/c4joO9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_04_26_min.png";
            document.getElementById("uel-g2").src = "https://image.ibb.co/myS8O9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_05_07_min.png";
            document.getElementById("uel-g3").src = "https://image.ibb.co/kgbrbU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_05_85_min.png";
            document.getElementById("uel-g4").src = "https://image.ibb.co/dTzNi9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_06_77_min.png";
            document.getElementById("uel-g5").src = "https://image.ibb.co/iuGDqp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_07_53_min.png";
            document.getElementById("uel-g6").src = "https://image.ibb.co/d18F39/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_08_25_min.png";
            document.getElementById("uel-g7").src = "https://image.ibb.co/mVTRAp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_09_01_min.png";
            document.getElementById("uel-g8").src = "https://image.ibb.co/h3ZYqp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_09_72_min.png";
            document.getElementById("uel-g9").src = "https://image.ibb.co/hbZBbU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_10_64_min.png";
            document.getElementById("uel-g10").src = "https://image.ibb.co/hBbJO9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_11_32_min.png";
            document.getElementById("uel-g11").src = "https://image.ibb.co/hCDXi9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_12_24_min.png";
            document.getElementById("uel-g12").src = "https://image.ibb.co/huhQ39/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_13_16_min.png";
            document.getElementById("uel-r321").src = "https://image.ibb.co/j5euwU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_43_99_min.png";
            document.getElementById("uel-r322").src = "https://image.ibb.co/krZiqp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_42_29_min.png";
            document.getElementById("uel-r16").src = "https://image.ibb.co/eAfpVp/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_40_35_min.png";
            document.getElementById("uel-r8").src = "https://image.ibb.co/bVssi9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_38_57_min.png";
            document.getElementById("uel-r4").src = "https://image.ibb.co/mO9539/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_36_90_min.png";
            document.getElementById("uel-f").src = "https://image.ibb.co/dRJyO9/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_35_22_min.png";
            }
            document.getElementById("gscorer4").onclick = function(){
            document.getElementById("uelimg").src = "https://image.ibb.co/dh0ZwU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_48_44_min.png";
            document.getElementById("uelimg").style.display = "block";
            document.getElementById("uelslidediv").style.display = "none";
            }
            document.getElementById("amaker4").onclick = function(){
            document.getElementById("uelimg").src = "https://image.ibb.co/jq4uwU/Pro_Evolution_Soccer_2018_Screenshot_2018_08_14_12_00_52_31_min.png";
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
        case "sefour":
            document.getElementById("usc-season").style.display = "block";
             document.getElementById("hash5").innerHTML = " Four";
             break;

     }
    switch (selectValue){
        case "seone":
            document.getElementById("draw5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/bCRW2AF.png";
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
            document.getElementById("gscorer5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/E26q62r.png";
            }
            document.getElementById("amaker5").onclick = function(){
            document.getElementById("uscimg").src = "https://i.imgur.com/E26q62r.png";
            }
            break;
        case "sefour":
            document.getElementById("draw5").onclick = function(){
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
        case "sefour":
            document.getElementById("fcwc-season").style.display = "block";
             document.getElementById("hash6").innerHTML = " Four";
             break;

     }
    switch (selectValue){
        case "seone":
            document.getElementById("draw6").onclick = function(){
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
            document.getElementById("gscorer6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://image.ibb.co/hVH3Ky/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_01_59_00_57_min.png";
            }
            document.getElementById("amaker6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://image.ibb.co/bBjuRd/Pro_Evolution_Soccer_2018_Screenshot_2018_07_03_01_59_07_64_min.png";
            }
            break;
        case "sethree":
            document.getElementById("draw6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://image.ibb.co/fUWqM8/Pro_Evolution_Soccer_2018_Screenshot_2018_07_29_15_27_16_01_min.png";
            }
            document.getElementById("gscorer6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://image.ibb.co/b6cYPT/Pro_Evolution_Soccer_2018_Screenshot_2018_07_29_15_27_50_61_min.png";
            }
            document.getElementById("amaker6").onclick = function(){
            document.getElementById("fcwcimg").src = "https://image.ibb.co/d4Xpyo/Pro_Evolution_Soccer_2018_Screenshot_2018_07_29_15_27_57_30_min.png";
            }
            break;
        case "sefour":
            document.getElementById("draw6").onclick = function(){
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


$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 4000);

