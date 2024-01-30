"use strict"

let userName  ;
let parol ;

function loginFunc(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(userName)
    console.log(parol);
    if ( username === userName && password === parol ){
        window.open('dashboard.html', '_blank');
    }else {
        document.getElementById("error").innerText = "Username yoki parol xato kiritildi";
    }
}

function registr(){
    let us =  document.getElementById("username1").value;
    let  p = document.getElementById("password1").style.display="block";
    userName = us;
    parol = p;
    if (userName!==undefined && parol!==undefined){
        window.open('login.html','_blank')
    }
}


