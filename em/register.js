function changehtml(){
    document.getElementById("example").innerHTML="I just changed the HTML";
}
// function changecss(){
//     document.getElementById("example").style.fontSize="35px";
//     document.getElementById("example").style.color="red";
// }

// window.onload=function(){
//     document.getElementById("date").innerHTML=Date();
// }

window.onload=function(){
    var d=new Date();
    document.getElementById("date").innerHTML=d.getFullYear();
}
function validateForm(){
    var x=document.forms["confirm"]["code"].value;
    if(x !=""){
        alert("thank you for your input")
    }
    // else if (x=="2"){
    //     alert("You are close to the correct code");
    // }

    // else if (x!="1") {
    //     alert("you are close to the correct code");
    // }
    else {
        alert("please fill the field");
    }
}

function performOp(){
    var x=document.forms["practice"]["number"].value;
    var changedX = +x * 3;
    alert (changedX);
}

function performOp(){
    var x=document.forms["serviceprice"]["number"].value;
    var changedX = x * 100;
    alert (changedX);
}