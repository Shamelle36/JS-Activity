
function proceed(){
    let text=document.getElementById("txtInput").value;
    let textH1=`Hey! ${text}, what's your oder?`;

    document.getElementById("first-form").style.display="none";
    document.getElementById("h1Value").innerHTML=textH1;
    document.getElementById("second-form").style.display="block"; 
}

function proceed2(){
    document.getElementById("first-form").style.display="none";
    document.getElementById("second-form").style.display="none"; 
    document.getElementById("third-form").style.display="block"; 
}

function proceed3(){
    document.getElementById("first-form").style.display="none";
    document.getElementById("second-form").style.display="none"; 
    document.getElementById("fourth-form").style.display="block"; 
}

function proceed4(){
    document.getElementById("first-form").style.display="none";
    document.getElementById("second-form").style.display="none";  
    document.getElementById("fifth-form").style.display="block"; 
}

function proceed5(){
    document.getElementById("first-form").style.display="none";
    document.getElementById("second-form").style.display="none"; 
    document.getElementById("sixth-form").style.display="block"; 
}

function back(){
    document.getElementById("first-form").style.display="none";
    document.getElementById("second-form").style.display="block"; 
    document.getElementById("third-form").style.display="none"; 
    document.getElementById("fourth-form").style.display="none"; 
    document.getElementById("fifth-form").style.display="none"; 
    document.getElementById("sixth-form").style.display="none"; 

}

