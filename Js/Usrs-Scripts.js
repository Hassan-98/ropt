/*global document*/  

                                            /*   SHOW SECTIONS FUNCTIONS   */

function showHdata(){
    document.getElementById("HassanSection").style.display = "block";
    document.getElementById("NaserSection").style.display = "none";
    return fixedHover()
}
function showNdata(){
    document.getElementById("HassanSection").style.display = "none";
    document.getElementById("NaserSection").style.display = "block";
    return fixedHover()
}


                                             /*   FIXED HOVER FUNTIONS   */


function fixedHover(){
    var hassan = document.getElementById("HassanSection").style.display;
    var naser = document.getElementById("NaserSection").style.display;
    if(hassan == "block"){
        document.getElementById("image2").style.background = "linear-gradient(to bottom right, #200122 , #6f0000)";
        document.getElementById("image2").style.color = "#fff";
        document.getElementById("paragraph2").style.background = "linear-gradient(to bottom right, #200122 , #6f0000)";
        document.getElementById("paragraph2").style.color = "#fff";
        
        document.getElementById("image1").style.background = "#fff";
        document.getElementById("image1").style.color = "#000";
        document.getElementById("paragraph1").style.background = "#fff";
        document.getElementById("paragraph1").style.color = "#000";
       }
    else if(naser == "block"){
        document.getElementById("image1").style.background = "linear-gradient(to bottom right, #200122 , #6f0000)";
        document.getElementById("image1").style.color = "#fff";
        document.getElementById("paragraph1").style.background = "linear-gradient(to bottom right, #200122 , #6f0000)";
        document.getElementById("paragraph1").style.color = "#fff";
        
        document.getElementById("image2").style.background = "#fff";
        document.getElementById("image2").style.color = "#000";
        document.getElementById("paragraph2").style.background = "#fff";
        document.getElementById("paragraph2").style.color = "#000";
            }
}