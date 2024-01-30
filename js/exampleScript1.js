"use strict"

function selectMonth(){
    let raqam = +document.getElementById("oy").value;
    if(raqam<0 || raqam>100){
        document.getElementById("readNumber").innerHTML = "Kursatilgan oraliqda son kiriting🎯🎯";
    }
    switch (parseInt(raqam/10)){
        case 1:{
            document.getElementById("readNumber").innerHTML = "O'n";
            break;
        }
        case 2:{
            document.getElementById("readNumber").innerHTML = "Yigirma";
            break;
        }
        case 3:{
            document.getElementById("readNumber").innerHTML = "O'ttiz";
            break;
        }
        case 4:{
            document.getElementById("readNumber").innerHTML = "Qirq";
            break;
        }
        case 5:{
            document.getElementById("readNumber").innerHTML = "Ellik";
            break;
        }
        case 6:{
            document.getElementById("readNumber").innerHTML = "Oltmush";
            break;
        }
        case 7:{
            document.getElementById("readNumber").innerHTML = "Yetmush";
            break;
        }
        case 8:{
            document.getElementById("readNumber").innerHTML = "Sakson";
            break;
        }
        case 9:{
            document.getElementById("readNumber").innerHTML = "To'qson";
            break;
        }
    }
    switch (raqam%10){
        case 1:{
            document.getElementById("readNumber2").innerHTML = " bir";
            break;
        }
        case 2:{
            document.getElementById("readNumber2").innerHTML = " ikki";
            break;
        }
        case 3:{
            document.getElementById("readNumber2").innerHTML = " uch";
            break;
        }
        case 4:{
            document.getElementById("readNumber2").innerHTML = " turt";
            break;
        }
        case 5:{
            document.getElementById("readNumber2").innerHTML = " besh";
            break;
        }
        case 6:{
            document.getElementById("readNumber2").innerHTML = " olti";
            break;
        }
        case 7:{
            document.getElementById("readNumber2").innerHTML = " yetti";
            break;
        }
        case 8:{
            document.getElementById("readNumber2").innerHTML = " sakkiz";
            break;
        }
        case 9:{
            document.getElementById("readNumber2").innerHTML = " to'qqiz";
            break;
        }
    }

}


