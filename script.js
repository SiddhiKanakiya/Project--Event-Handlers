let warningOne = document.querySelector("#wOne");
let warningTwo = document.querySelector("#wTwo");
let warningThree = document.querySelector("#wThree");

let submitButton = document.getElementById("submitBtn");
let email = document.getElementById("emailaddress");
let password = document.getElementById("password");
let eCheck= false;
let pCheck = false;

// Email check if everything is perfect
function emailcheck(){
    email = document.getElementById("emailaddress");
    let emailstring = email.value;
    
    if(emailstring.length>3 && emailstring.includes("@") && emailstring.includes(".")){
        warningOne.setAttribute("style","color:white");
        eCheck= true;
    }
    else{
        warningOne.setAttribute("style","color:red");
        warningThree.setAttribute("style","color:white");
        document.querySelector(".Password").style.top= '107px';
        document.querySelector("#password").style.top= '130px';
        eCheck= false;
    }

    if(eCheck==true && pCheck==true){
        frame2()
    }
}

email.onchange = emailcheck;
// Password check if everythig is perfect
function passwordcheck(){
    password = document.getElementById("password");
    let passwordstring = password.value;
    
    if(passwordstring.length>8){
        warningTwo.setAttribute("style","color:white");
        pCheck = true;
    }
    else{
        warningTwo.setAttribute("style","color:red");
        warningThree.setAttribute("style","color:white");
        document.querySelector(".Password").style.top= '107px';
        document.querySelector("#password").style.top= '130px';
        pCheck = false;
    }

    if(eCheck==true && pCheck==true){
        frame2();
    }
}

password.onchange = passwordcheck;


// Clicking submit button
function confirmation(){
    let result = confirm("Are you sure");
    if(result==true){
        alert("Successful signup!");
        location.reload();
    }
    else{
        location.reload();
    }
}

submitButton.onclick = confirmation

// Frame 2 when everything is good

function frame2(){
    warningOne.setAttribute("style","color:white");
    warningTwo.setAttribute("style","color:white");
    warningThree.setAttribute("style","color:green");


    // Changing Attributes of password block
    document.querySelector(".Password").style.top= '89px';
    document.querySelector("#password").style.top= '112px';
}
