/*global document*/  

var i = 0;
var nameInput = document.getElementById("name");
var dec = document.getElementById("decision");
var names = ["نجاح الصفقة" , "فشل الصفقة"];
var nameone = names[Math.floor(Math.random() * names.length)];
var nametwo = names[Math.floor(Math.random() * names.length)];
var vale = document.getElementById("val");
var num = document.getElementById("numofchancese");

function ouatRandomizer() {
    nameone = names[Math.floor(Math.random() * names.length)];
    message = "لقد قرر النادى " + nameone ;
    if(i<3){
        i++;
        document.getElementById("numofchancese").innerHTML = "هذه هي المحاولة رقم " + i;
        document.getElementById("decision").innerHTML = message;
        return checkSuccess();
    }
    else if (i>=3){
        i++;
        document.getElementById("numofchancese").innerHTML = "هذه المحاولة غير قانونية فهي رقم " + i;
        document.getElementById("decision").innerHTML = "لقد أنهيت جميع المحاولات المتاحة";
        document.getElementById("myBtn").disabled = true;
        document.getElementById("myBtn").style.backgroundColor = "#848484"
    }
    
}
function addInput () {
    var name = document.getElementById("name").value;
    addToArray(name);
}
    
function addToArray( name ) {
    names.push( name );
    console.log(names.join());
    document.getElementById("chances").innerHTML = " الفرص المتاحة لنجاح الصفقة :: " + "&#40; " + names + " &#41;";
}
    
function checkSuccess(){
    if (dec.innerHTML === "لقد قرر النادى نجاح الصفقة"){
        if (document.getElementById("rpass").value === "roptwebsite"){
            document.getElementById("myBtn").disabled = false;
            document.getElementById("myBtn").style.backgroundColor = "darkred"
        }
     }
    else if (dec.innerHTML === "لقد قرر النادى فشل الصفقة"){
            document.getElementById("myBtn").disabled = true;
            document.getElementById("myBtn").style.backgroundColor = "#848484"
     }
}
    
function createCertificate(){
    document.getElementById("certific").style.display = "block";
    document.getElementById("Rpname").innerHTML = document.getElementById("pname").value;
    document.getElementById("Rpos").innerHTML = document.getElementById("pos").value;
    document.getElementById("Rse").innerHTML = document.getElementById("se").value;
    document.getElementById("Rsellt").innerHTML = document.getElementById("sellt").value;
    document.getElementById("Rbuyt").innerHTML = document.getElementById("buyt").value;
    document.getElementById("Rbuytsrc").src = document.getElementById("selltsrc").value;
    document.getElementById("Rselltsrc").src = document.getElementById("buytsrc").value;

         if (num.innerHTML === "هذه هي المحاولة رقم 1"){
            document.getElementById("Rval").innerHTML = vale.value;
            }
    else if (num.innerHTML === "هذه هي المحاولة رقم 2"){
            document.getElementById("Rval").innerHTML = (Number(vale.value * 0.1) + Number(vale.value)).toFixed(1);
            }
    else if (num.innerHTML === "هذه هي المحاولة رقم 3"){
            document.getElementById("Rval").innerHTML = (Number(vale.value * 0.2) + Number(vale.value)).toFixed(1);
            }
    
        if (document.getElementById("ssub").value == ""){
            document.getElementById("sub").innerHTML = "" ;
       }
    else if (document.getElementById("ssub").value !== "") {
        document.getElementById("sub").innerHTML = " + " + document.getElementById("ssub").value + "<br>" ;
    }
    
}
