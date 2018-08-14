/*global document*/  

document.getElementById("clicked").click();

        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

var c = 0;
var x = 0;
var lcomChances = ["نجاح الصفقة" , "فشل الصفقة"];
var gcomChances = ["نجاح الصفقة" , "فشل الصفقة"];


                                        /*      Local COM-Side Transfer Functions        */  


                        
                    /*    The Randomizer Function    */

function lcomRandomizer(){
    var chance1 = lcomChances[Math.floor(Math.random() * lcomChances.length)];
    var message1 = "لقد قرر النادى " + chance1 ;
    
    if(c<3){
        c++;
        document.getElementById("numofchanceselcom").innerHTML = "هذه هي المحاولة رقم " + c;
        document.getElementById("decisionlcom").innerHTML = message1;
        return checkLcomSuccess();
        
    }
    else if (c>=3){
        c++;
        document.getElementById("numofchanceselcom").innerHTML = "هذه المحاولة غير قانونية فهي رقم " + c;
        document.getElementById("decisionlcom").innerHTML = "لقد أنهيت جميع المحاولات المتاحة";
    }
    
}


                                /*    Collecting L-Com Data Function    */


function addInputlcom(){
    
                                        /*     OVERALL-POWER SITTINGS      */
    
    
    if(document.getElementById("lcom-pwr-s").value <= "80" && document.getElementById("lcom-pwr-s").value > "50"){
        lcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("lcom-pwr-s").value >= "83"){
        lcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("lcom-pwr-s").value >= "85"){
        lcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("lcom-pwr-s").value >= "88"){
        lcomChances.push("فشل الصفقة");
        lcomChances.push("فشل الصفقة");
       }
    
    
    
                                            /*     MAIN SQUAD STATUE SITTINGS      */
    
    
    if(document.getElementById("lcom-mainplayer-s").checked == true){
       lcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("lcom-altplayer-s").checked == true){
       lcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("lcom-outplayer-s").checked == true){
       lcomChances.push("نجاح الصفقة");
        lcomChances.push("نجاح الصفقة");
       }
    

                                            /*     NEXT SEASON TOURPHIES SITTINGS      */
    
    
    if(document.getElementById("lcom-buyer-nucl-s").checked == true){
       lcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("lcom-buyer-nuel-s").checked == true){
       lcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("lcom-seller-nucl-s").checked == true){
       lcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("lcom-seller-nuel-s").checked == true){
       lcomChances.push("فشل الصفقة");
       }
    
    
                                            /*     LEAGUE RANKING SITTINGS | BUYER > SELLER |     */
    
    

    if(document.getElementById("lcom-buyerrank-s").value < document.getElementById("lcom-sellerrank-s").value){
        var sdef = document.getElementById("lcom-sellerrank-s").value - document.getElementById("lcom-buyerrank-s").value;
        
        
        if(sdef >= "3" && sdef < "6"){
           lcomChances.push("نجاح الصفقة");
           }
        if(sdef >= "6" && sdef < "9"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(sdef >= "9" && sdef < "12"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(sdef >= "12" && sdef < "15"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(sdef >= "15" && sdef < "18"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(sdef >= "18"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
    }
    
    
                                               /*     LEAGUE RANKING SITTINGS | BUYER < SELLER |     */
    
    
        if(document.getElementById("lcom-buyerrank-s").value > document.getElementById("lcom-sellerrank-s").value){
        var bdef = document.getElementById("lcom-buyerrank-s").value - document.getElementById("lcom-sellerrank-s").value;
        
        
        if(bdef >= "3" && bdef < "6"){
           lcomChances.push("فشل الصفقة");
           }
        if(bdef >= "6" && bdef < "9"){
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           }
        if(bdef >= "9" && bdef < "12"){
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           }
        if(bdef >= "12" && bdef < "15"){
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           }
        if(bdef >= "15" && bdef < "18"){
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           }
        if(bdef >= "18"){
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           lcomChances.push("فشل الصفقة");
           }
    }
    
                                               /*      LAST SEASON TOURPHIES SITTINGS     */
    
    
    /*      LAST UCL SITTINGS     */
    
    if(document.getElementById("lcom-buyer-lucl-s").value != "not"){
        var bstatueucl = document.getElementById("lcom-buyer-lucl-s").value;
        
        if(bstatueucl == "g"){
           lcomChances.push("فشل الصفقة");
           }
        if(bstatueucl == "s"){
           lcomChances.push("نجاح الصفقة");
           }
        if(bstatueucl == "f"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(bstatueucl == "w"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
    }
    
    /*      LAST UEL SITTINGS     */    
    
    if(document.getElementById("lcom-buyer-luel-s").value != "not"){
        var bstatueuel = document.getElementById("lcom-buyer-luel-s").value;
        
        if(bstatueuel == "g"){
           lcomChances.push("فشل الصفقة");
           }
        if(bstatueuel == "r32"){
           lcomChances.push("فشل الصفقة");
           }
        if(bstatueuel == "s"){
           lcomChances.push("نجاح الصفقة");
           }
        if(bstatueuel == "f"){
           lcomChances.push("نجاح الصفقة");
           }
        if(bstatueuel == "w"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
    }
    
    /*      LAST FA SITTINGS     */    
    
    if(document.getElementById("lcom-buyer-lfa-s").value != "not"){
        var bstatuefa = document.getElementById("lcom-buyer-lfa-s").value;
        
        if(bstatuefa == "r32"){
           lcomChances.push("فشل الصفقة");
           }
        if(bstatuefa == "f"){
           lcomChances.push("نجاح الصفقة");
           }
        if(bstatuefa == "w"){
           lcomChances.push("نجاح الصفقة");
           }
    }
    
    /*      LAST FCWC SITTINGS     */    
    
    if(document.getElementById("lcom-buyer-lfcwc-s").value != "not"){
        var bstatuefcwc = document.getElementById("lcom-buyer-lfcwc-s").value;
        
        if(bstatuefcwc == "w"){
           lcomChances.push("نجاح الصفقة");
           }
    }
    
        
    
                                            /*      PAYING MORE SITTINGS     */
    
    
    
    if(document.getElementById("lcom-buyer-paymore-s").value != "nopay"){
        
        var paym = document.getElementById("lcom-buyer-paymore-s").value;
        
        if(paym == "25"){
           lcomChances.push("نجاح الصفقة");
           }
        if(paym == "50"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "75"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "100"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "125"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "150"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "175"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "200"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "225"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "250"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "275"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
        if(paym == "300"){
           lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
            lcomChances.push("نجاح الصفقة");
           }
    }
    
    document.getElementById("lcom-chances").innerHTML = " الفرص المتاحة لنجاح الصفقة :: " + "&#40; " + countInArray(lcomChances, "نجاح الصفقة") + " نجاح الصفقة " + " | " + countInArray(lcomChances, "فشل الصفقة") + " فشل الصفقة " + " &#41;";
    document.getElementById("submitting-lcom").disabled = true;
}



                        /*        CHECKING THE SUCCESS OF THE DEAL FUNCTION lcom-side      */

    
function checkLcomSuccess(){
    if (document.getElementById("decisionlcom").innerHTML === "لقد قرر النادى نجاح الصفقة"){
            document.getElementById("Lcom-Cert-Button").disabled = false;
            document.getElementById("Lcom-Cert-Button").click();
        
     }
    else if (document.getElementById("decisionlcom").innerHTML === "لقد قرر النادى فشل الصفقة"){
            document.getElementById("Lcom-Cert-Button").disabled = true;
     }
}






                                                /*      Global COM-Side Transfer Functions        */







                            /*    The Randomizer Function    */

function gcomRandomizer(){
    var chance2 = gcomChances[Math.floor(Math.random() * gcomChances.length)];
    var message2 = "لقد قرر النادى " + chance2 ;

    if(x<3){
        x++;
        document.getElementById("numofchancesegcom").innerHTML = "هذه هي المحاولة رقم " + x;
        document.getElementById("decisiongcom").innerHTML = message2;
        return checkGcomSuccess();
    }
    else if (x>=3){
        x++;
        document.getElementById("numofchancesegcom").innerHTML = "هذه المحاولة غير قانونية فهي رقم " + x;
        document.getElementById("decisiongcom").innerHTML = "لقد أنهيت جميع المحاولات المتاحة";
    }
    
}


                        /*    Collecting G-Com Data Function    */



function addInputgcom(){
    
                                        /*     OVERALL-POWER SITTINGS      */
    
    
    if(document.getElementById("gcom-pwr-s").value <= "80" && document.getElementById("gcom-pwr-s").value > "50"){
        gcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("gcom-pwr-s").value >= "82"){
        gcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("gcom-pwr-s").value >= "84"){
        gcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("gcom-pwr-s").value >= "86"){
        gcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("gcom-pwr-s").value >= "88"){
        gcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("gcom-pwr-s").value >= "90"){
        gcomChances.push("فشل الصفقة");
        gcomChances.push("فشل الصفقة");
       }
    
    
    
                                            /*     MAIN SQUAD STATUE SITTINGS      */
    
    
    if(document.getElementById("gcom-mainplayer-s").checked == true){
       gcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("gcom-altplayer-s").checked == true){
       gcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("gcom-outplayer-s").checked == true){
       gcomChances.push("نجاح الصفقة");
        gcomChances.push("نجاح الصفقة");
       }
    

                                            /*     NEXT SEASON TOURPHIES SITTINGS      */
    
    
    if(document.getElementById("gcom-buyer-nucl-s").checked == true){
       gcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("gcom-buyer-nuel-s").checked == true){
       gcomChances.push("نجاح الصفقة");
       }
    if(document.getElementById("gcom-seller-nucl-s").checked == true){
       gcomChances.push("فشل الصفقة");
       }
    if(document.getElementById("gcom-seller-nuel-s").checked == true){
       gcomChances.push("فشل الصفقة");
       }
    
    
                                               /*      LAST SEASON TOURPHIES SITTINGS     */
    
    
    /*      LAST UCL SITTINGS     */
    
    if(document.getElementById("gcom-buyer-lucl-s").value != "not"){
        var bstatueucl = document.getElementById("gcom-buyer-lucl-s").value;
        
        if(bstatueucl == "g"){
           gcomChances.push("فشل الصفقة");
           }
        if(bstatueucl == "s"){
           gcomChances.push("نجاح الصفقة");
           }
        if(bstatueucl == "f"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(bstatueucl == "w"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
    }
    
    /*      LAST UEL SITTINGS     */    
    
    if(document.getElementById("gcom-buyer-luel-s").value != "not"){
        var bstatueuel = document.getElementById("gcom-buyer-luel-s").value;
        
        if(bstatueuel == "g"){
           gcomChances.push("فشل الصفقة");
           }
        if(bstatueuel == "r32"){
           gcomChances.push("فشل الصفقة");
           }
        if(bstatueuel == "s"){
           gcomChances.push("نجاح الصفقة");
           }
        if(bstatueuel == "f"){
           gcomChances.push("نجاح الصفقة");
           }
        if(bstatueuel == "w"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
    }

    
                                            /*      PAYING MORE SITTINGS     */
    
    
    
    if(document.getElementById("gcom-buyer-paymore-s").value != "nopay"){
        
        var gpaym = document.getElementById("gcom-buyer-paymore-s").value,
            gdealValue = document.getElementById("gcom-dealvalue-s").value;
        
        if(gpaym == "25"){
           gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "50"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "75"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "100"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "125"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "150"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "175"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "200"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "225"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "250"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "275"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
        if(gpaym == "300"){
           gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
            gcomChances.push("نجاح الصفقة");
           }
    }
    
    document.getElementById("gcom-chances").innerHTML = " الفرص المتاحة لنجاح الصفقة :: " + "&#40; " + countInArray(gcomChances, "نجاح الصفقة") + " نجاح الصفقة " + " | " + countInArray(gcomChances, "فشل الصفقة") + " فشل الصفقة " + " &#41;";
    document.getElementById("submitting-gcom").disabled = true;
}



                        /*        CHECKING THE SUCCESS OF THE DEAL FUNCTION gcom-side      */


function checkGcomSuccess(){
    if (document.getElementById("decisiongcom").innerHTML === "لقد قرر النادى نجاح الصفقة"){
            document.getElementById("Gcom-Cert-Button").disabled = false;
            document.getElementById("Gcom-Cert-Button").click();
        
     }
    else if (document.getElementById("decisiongcom").innerHTML === "لقد قرر النادى فشل الصفقة"){
            document.getElementById("Gcom-Cert-Button").disabled = true;
     }
}
    


                        /*      Create LCom Cerftificate       */




function createlcomCertificate(){
    var dealValue = document.getElementById("lcom-dealvalue-s").value;
    var paymore = document.getElementById("lcom-buyer-paymore-s").value;
    var valueRecive = document.getElementById("deal-value-r");
    var sellerTeam = document.getElementById("lcom-sellername-s").value;
    var buyerTeam = document.getElementById("lcom-buyername-s").value;
    document.getElementById("player-name-r").innerHTML = document.getElementById("lcom-pname-s").value
    document.getElementById("player-signture").innerHTML = document.getElementById("lcom-pname-s").value
    document.getElementById("player-pwr-r").innerHTML = document.getElementById("lcom-pwr-s").value
    document.getElementById("player-pos-r").innerHTML = document.getElementById("lcom-pos-s").value
    document.getElementById("team-signture").innerHTML = document.getElementById("lcom-sellername-s").value
    document.getElementById("certific").style.display = "block";
    
    switch (sellerTeam) {
        case "LEICESTER CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/lei.svg"
        break;
            
        case "MANCHESTER CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/mancity.svg"
        break;
            
        case "ARSENAL FC":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/ars.svg"
        break;
            
        case "CHELSEA FC":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/che.svg"
        break;
            
        case "TOTENHAM HOTSPUR":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/tot.svg"
        break;
            
        case "EVERTON FC":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/eve.svg"
        break;
            
        case "MANCHESTER UNITED":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/manutd.svg"
        break;
            
        case "LIVERPOOL FC":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/liv.svg"
        break;
            
        case "WEST HAM UNITED":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west.svg"
        break;
            
        case "SWANSEA CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/swa.svg"
        break;
            
        case "SOUTHAMPTON FC":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/south.svg"
        break;
            
        case "AFC BOURNEMOTH":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/broun.svg"
        break;
            
        case "NEWCASTLE UNITED":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/new%20catle.svg"
        break;
            
        case "BURNLEY FC":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/burn.svg"
        break;
            
        case "HUDDERSFIELD TWON":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/hudder.svg"
        break;
            
        case "WEST BROMWITCH ALBION":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west%20brom.svg"
        break;
            
        case "WATFORD FC":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/wat.svg"
        break;
            
        case "CRYSTAL PALACE":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/cry.svg"
        break;
            
        case "STOKE CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/stoke.svg"
        break;
            
        case "BRIGHTON AND HOVE":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/brighton.svg"
        break;
    }
    
    switch (buyerTeam) {
        case "LEICESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/lei.svg"
        break;
            
        case "MANCHESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/mancity.svg"
        break;
            
        case "ARSENAL FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/ars.svg"
        break;
            
        case "CHELSEA FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/che.svg"
        break;
            
        case "TOTENHAM HOTSPUR":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/tot.svg"
        break;
            
        case "EVERTON FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/eve.svg"
        break;
            
        case "MANCHESTER UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/manutd.svg"
        break;
            
        case "LIVERPOOL FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/liv.svg"
        break;
            
        case "WEST HAM UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west.svg"
        break;
            
        case "SWANSEA CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/swa.svg"
        break;
            
        case "SOUTHAMPTON FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/south.svg"
        break;
            
        case "AFC BOURNEMOTH":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/broun.svg"
        break;
            
        case "NEWCASTLE UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/new%20catle.svg"
        break;
            
        case "BURNLEY FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/burn.svg"
        break;
            
        case "HUDDERSFIELD TWON":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/hudder.svg"
        break;
            
        case "WEST BROMWITCH ALBION":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west%20brom.svg"
        break;
            
        case "WATFORD FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/wat.svg"
        break;
            
        case "CRYSTAL PALACE":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/cry.svg"
        break;
            
        case "STOKE CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/stoke.svg"
        break;
            
        case "BRIGHTON AND HOVE":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/brighton.svg"
        break;
    }
        
    
         if (document.getElementById("numofchanceselcom").innerHTML === "هذه هي المحاولة رقم 1"){
             
                if(document.getElementById("lcom-buyer-paymore-s").value != "nopay"){
        
                    if(paymore == "25"){
                        valueRecive.innerHTML = (Number(dealValue * 0.25) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "50"){
                        valueRecive.innerHTML = (Number(dealValue * 0.5) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "75"){
                        valueRecive.innerHTML = (Number(dealValue * 0.75) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "100"){
                        valueRecive.innerHTML = (Number(dealValue * 1) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "125"){
                        valueRecive.innerHTML = (Number(dealValue * 1.25) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "150"){
                        valueRecive.innerHTML = (Number(dealValue * 1.5) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "175"){
                        valueRecive.innerHTML = (Number(dealValue * 1.75) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "200"){
                        valueRecive.innerHTML = (Number(dealValue * 2) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "225"){
                        valueRecive.innerHTML = (Number(dealValue * 2.25) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "250"){
                        valueRecive.innerHTML = (Number(dealValue * 2.5) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "275"){
                        valueRecive.innerHTML = (Number(dealValue * 2.75) + Number(dealValue)).toFixed(1);
                       }
                    else if(paymore == "300"){
                        valueRecive.innerHTML = (Number(dealValue * 3) + Number(dealValue)).toFixed(1);
                       }
                }
             else {
                 
                 valueRecive.innerHTML = dealValue;
                 
             }
            }
    
    else if (document.getElementById("numofchanceselcom").innerHTML === "هذه هي المحاولة رقم 2"){
        
        if(document.getElementById("lcom-buyer-paymore-s").value != "nopay"){
        
                    if(paymore == "25"){
                        valueRecive.innerHTML = (Number(dealValue * 0.25) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "50"){
                        valueRecive.innerHTML = (Number(dealValue * 0.5) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "75"){
                        valueRecive.innerHTML = (Number(dealValue * 0.75) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "100"){
                        valueRecive.innerHTML = (Number(dealValue * 1) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "125"){
                        valueRecive.innerHTML = (Number(dealValue * 1.25) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "150"){
                        valueRecive.innerHTML = (Number(dealValue * 1.5) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "175"){
                        valueRecive.innerHTML = (Number(dealValue * 1.75) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "200"){
                        valueRecive.innerHTML = (Number(dealValue * 2) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "225"){
                        valueRecive.innerHTML = (Number(dealValue * 2.25) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "250"){
                        valueRecive.innerHTML = (Number(dealValue * 2.5) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "275"){
                        valueRecive.innerHTML = (Number(dealValue * 2.75) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                    else if(paymore == "300"){
                        valueRecive.innerHTML = (Number(dealValue * 3) + Number(dealValue) + Number(dealValue * 0.1)).toFixed(1);
                       }
                }
             else {
                 
                 valueRecive.innerHTML = (Number(dealValue * 0.1) + Number(dealValue)).toFixed(1);
                 
             }
            }
    
    else if (document.getElementById("numofchanceselcom").innerHTML === "هذه هي المحاولة رقم 3"){
        
        if(document.getElementById("lcom-buyer-paymore-s").value != "nopay"){
        
                    if(paymore == "25"){
                        valueRecive.innerHTML = (Number(dealValue * 0.25) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "50"){
                        valueRecive.innerHTML = (Number(dealValue * 0.5) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "75"){
                        valueRecive.innerHTML = (Number(dealValue * 0.75) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "100"){
                        valueRecive.innerHTML = (Number(dealValue * 1) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "125"){
                        valueRecive.innerHTML = (Number(dealValue * 1.25) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "150"){
                        valueRecive.innerHTML = (Number(dealValue * 1.5) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "175"){
                        valueRecive.innerHTML = (Number(dealValue * 1.75) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "200"){
                        valueRecive.innerHTML = (Number(dealValue * 2) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "225"){
                        valueRecive.innerHTML = (Number(dealValue * 2.25) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "250"){
                        valueRecive.innerHTML = (Number(dealValue * 2.5) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "275"){
                        valueRecive.innerHTML = (Number(dealValue * 2.75) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                    else if(paymore == "300"){
                        valueRecive.innerHTML = (Number(dealValue * 3) + Number(dealValue) + Number(dealValue * 0.2)).toFixed(1);
                       }
                }
             else {
                 
                 valueRecive.innerHTML = (Number(dealValue * 0.2) + Number(dealValue)).toFixed(1);
                 
             }
            }
    
    
}



                        /*      Create GCom Cerftificate       */




function creategcomCertificate(){
    var dealValueg = document.getElementById("gcom-dealvalue-s").value;
    var paymoreg = document.getElementById("gcom-buyer-paymore-s").value;
    var valueReciveg = document.getElementById("deal-value-r");
    var buyerTeamg = document.getElementById("gcom-buyername-s").value;
    document.getElementById("player-name-r").innerHTML = document.getElementById("gcom-pname-s").value
    document.getElementById("player-signture").innerHTML = document.getElementById("gcom-pname-s").value
    document.getElementById("player-pwr-r").innerHTML = document.getElementById("gcom-pwr-s").value
    document.getElementById("player-pos-r").innerHTML = document.getElementById("gcom-pos-s").value
    document.getElementById("team-signture").innerHTML = document.getElementById("gcom-sellername-s").value
    document.getElementById("certific").style.display = "block";
    
    document.getElementById("seller-team-src-r").src = document.getElementById("gcom-sellersrc-s").value;
    
    switch (buyerTeamg) {
        case "LEICESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/lei.svg"
        break;
            
        case "MANCHESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/mancity.svg"
        break;
            
        case "ARSENAL FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/ars.svg"
        break;
            
        case "CHELSEA FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/che.svg"
        break;
            
        case "TOTENHAM HOTSPUR":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/tot.svg"
        break;
            
        case "EVERTON FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/eve.svg"
        break;
            
        case "MANCHESTER UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/manutd.svg"
        break;
            
        case "LIVERPOOL FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/liv.svg"
        break;
            
        case "WEST HAM UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west.svg"
        break;
            
        case "SWANSEA CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/swa.svg"
        break;
            
        case "SOUTHAMPTON FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/south.svg"
        break;
            
        case "AFC BOURNEMOTH":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/broun.svg"
        break;
            
        case "NEWCASTLE UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/new%20catle.svg"
        break;
            
        case "BURNLEY FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/burn.svg"
        break;
            
        case "HUDDERSFIELD TWON":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/hudder.svg"
        break;
            
        case "WEST BROMWITCH ALBION":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west%20brom.svg"
        break;
            
        case "WATFORD FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/wat.svg"
        break;
            
        case "CRYSTAL PALACE":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/cry.svg"
        break;
            
        case "STOKE CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/stoke.svg"
        break;
            
        case "BRIGHTON AND HOVE":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/brighton.svg"
        break;
    }
        
    
         if (document.getElementById("numofchancesegcom").innerHTML === "هذه هي المحاولة رقم 1"){
             
                if(document.getElementById("gcom-buyer-paymore-s").value != "nopay"){
        
                    if(paymoreg == "25"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.25) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "50"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.5) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "75"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.75) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "100"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "125"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.25) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "150"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.5) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "175"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.75) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "200"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "225"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.25) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "250"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.5) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "275"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.75) + Number(dealValueg)).toFixed(1);
                       }
                    else if(paymoreg == "300"){
                        valueReciveg.innerHTML = (Number(dealValueg * 3) + Number(dealValueg)).toFixed(1);
                       }
                }
             else {
                 
                 valueReciveg.innerHTML = dealValueg;
                 
             }
            }
    
    else if (document.getElementById("numofchancesegcom").innerHTML === "هذه هي المحاولة رقم 2"){
        
        if(document.getElementById("gcom-buyer-paymore-s").value != "nopay"){
        
                    if(paymoreg == "25"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.25) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "50"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.5) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "75"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.75) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "100"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "125"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.25) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "150"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.5) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "175"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.75) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "200"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "225"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.25) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "250"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.5) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "275"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.75) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                    else if(paymoreg == "300"){
                        valueReciveg.innerHTML = (Number(dealValueg * 3) + Number(dealValueg) + Number(dealValueg * 0.1)).toFixed(1);
                       }
                }
             else {
                 
                 valueReciveg.innerHTML = (Number(dealValueg * 0.1) + Number(dealValueg)).toFixed(1);
                 
             }
            }
    
    else if (document.getElementById("numofchancesegcom").innerHTML === "هذه هي المحاولة رقم 3"){
        
        if(document.getElementById("gcom-buyer-paymore-s").value != "nopay"){
        
                    if(paymoreg == "25"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.25) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "50"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.5) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "75"){
                        valueReciveg.innerHTML = (Number(dealValueg * 0.75) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "100"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "125"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.25) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "150"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.5) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "175"){
                        valueReciveg.innerHTML = (Number(dealValueg * 1.75) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "200"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "225"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.25) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "250"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.5) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "275"){
                        valueReciveg.innerHTML = (Number(dealValueg * 2.75) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                    else if(paymoreg == "300"){
                        valueReciveg.innerHTML = (Number(dealValueg * 3) + Number(dealValueg) + Number(dealValueg * 0.2)).toFixed(1);
                       }
                }
             else {
                 
                 valueReciveg.innerHTML = (Number(dealValueg * 0.2) + Number(dealValueg)).toFixed(1);
                 
             }
            }
    
    
}
    


                        /*      Create Usr Cerftificate       */




function createusrCertificate(){
    var dealValueu = document.getElementById("usr-dealvalue-s").value;
    var valueReciveu = document.getElementById("deal-value-r");
    var sellerTeamu = document.getElementById("usr-sellername-s").value;
    var buyerTeamu = document.getElementById("usr-buyername-s").value;
    document.getElementById("player-name-r").innerHTML = document.getElementById("usr-pname-s").value
    document.getElementById("player-signture").innerHTML = document.getElementById("usr-pname-s").value
    document.getElementById("player-pwr-r").innerHTML = document.getElementById("usr-pwr-s").value
    document.getElementById("player-pos-r").innerHTML = document.getElementById("usr-pos-s").value
    document.getElementById("team-signture").innerHTML = document.getElementById("usr-sellername-s").value
    valueReciveu.innerHTML = dealValueu;
    document.getElementById("certific").style.display = "block";
    
    switch (sellerTeamu) {
        case "LEICESTER CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/lei.svg"
        break;
            
        case "MANCHESTER CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/mancity.svg"
        break;
    }
    
    switch (buyerTeamu) {
        case "LEICESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/lei.svg"
        break;
            
        case "MANCHESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/mancity.svg"
        break;
    }
    
}
    


                        /*      Create Sell Cerftificate       */




function createsellCertificate(){
    var dealValues = document.getElementById("sell-dealvalue-s").value;
    var valueRecives = document.getElementById("deal-value-r");
    var sellerTeams = document.getElementById("sell-sellername-s").value;
    var buyerTeams = document.getElementById("sell-buyername-s").value;
    document.getElementById("player-name-r").innerHTML = document.getElementById("sell-pname-s").value
    document.getElementById("player-signture").innerHTML = document.getElementById("sell-pname-s").value
    document.getElementById("player-pwr-r").innerHTML = document.getElementById("sell-pwr-s").value
    document.getElementById("player-pos-r").innerHTML = document.getElementById("sell-pos-s").value
    document.getElementById("team-signture").innerHTML = document.getElementById("sell-sellername-s").value
    valueRecives.innerHTML = (dealValues - dealValues * 0.25).toFixed(1);
    document.getElementById("certific").style.display = "block";
    
    switch (sellerTeams) {
        case "LEICESTER CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/lei.svg"
        break;
            
        case "MANCHESTER CITY":
            document.getElementById("seller-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/mancity.svg"
        break;
    }
    
    switch (buyerTeams) {
        case "LEICESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/lei.svg"
        break;
            
        case "MANCHESTER CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/mancity.svg"
        break;
            
        case "ARSENAL FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/ars.svg"
        break;
            
        case "CHELSEA FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/che.svg"
        break;
            
        case "TOTENHAM HOTSPUR":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/tot.svg"
        break;
            
        case "EVERTON FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/eve.svg"
        break;
            
        case "MANCHESTER UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/manutd.svg"
        break;
            
        case "LIVERPOOL FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/liv.svg"
        break;
            
        case "WEST HAM UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west.svg"
        break;
            
        case "SWANSEA CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/swa.svg"
        break;
            
        case "SOUTHAMPTON FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/south.svg"
        break;
            
        case "AFC BOURNEMOTH":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/broun.svg"
        break;
            
        case "NEWCASTLE UNITED":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/new%20catle.svg"
        break;
            
        case "BURNLEY FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/burn.svg"
        break;
            
        case "HUDDERSFIELD TWON":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/hudder.svg"
        break;
            
        case "WEST BROMWITCH ALBION":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/west%20brom.svg"
        break;
            
        case "WATFORD FC":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/wat.svg"
        break;
            
        case "CRYSTAL PALACE":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/cry.svg"
        break;
            
        case "STOKE CITY":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/stoke.svg"
        break;
            
        case "BRIGHTON AND HOVE":
            document.getElementById("buyer-team-src-r").src = "http://ropt.bitballoon.com/imgs/clubs/brighton.svg"
        break;
    }
    
}

function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}