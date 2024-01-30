"use strict"



function checkSeason(){
    let n = + document.getElementById("son1").value;
    //tanlash operatori
    switch (n){
        case 1:{
            document.getElementById("natija").innerHTML = "Dushanba";
            break;
        }
        case 2:{
            document.getElementById("natija").innerHTML = "Seshanba";
            break;
        }
        case 3:{
            document.getElementById("natija").innerHTML = "chorshanba";
            break;
        }
        case 4:{
            document.getElementById("natija").innerHTML = "payshanba";
            break;
        }
        case 7:{
                document.getElementById("natija").innerHTML = "Yakshanba";
              break;
        }
        default:{
            document.createElement("input").value = n**2
            // document.getElementById("natija").innerHTML = n**2;
        }


    }

}






