"use strict"

let musbatSon=0,manfiySon=0;
let son1 = + prompt("1- soni kiriting ");
let son2 = + prompt("2- soni kiriting ");
let son3 = + prompt("3- soni kiriting ");

if(son1>0){
    musbatSon++;
}else{
    manfiySon++;
}
if(son2>0){
    musbatSon++;
}else{
    manfiySon++;
}
if(son3>0){
    musbatSon++;
}else{
    manfiySon++;
}
alert(`musbatlar soni - ${musbatSon} manfiylar soni - ${manfiySon} `)


// if va else va  else if
// if() - biror bir uzgaruvchini qiymatini shartga tekshirish uchun k.k
// >=  katta yoki teng
// <=  kichik yoki teng
// >  katta
// <  kichik
// == tengmi
// != tengmasmi
// === tengmi bu qiymatini va data type ni ham tekshiradi
// !== tengmasmi bu ham data type ham teng bulmasligi kerak "5" !== 5

// &&  va   -   bu  ikkila tomini ham shart ga tushishi k.k
// let month = 4;
// if(month >=3 && month <=5)

// ||  yoki -  bu ikkila tomonidan bittasi tushsa buldi
// let son = 5;
// if(son%2 == 0 || son>0)

// if va else qachon ishlatiladi?
// shartlar  ikkita bulsa  va  1- sh 2-sh ga tushmasa
// musbat yoki manfiy
// juft yoki toq
// let son = -5;
// if(a>0){
//     alert("musbat son")
// }
// else{// aks holda degani
//     alert("manfiy son")
// }

// else if qachon ishlatiladi?
// shart kamida 3 ta kup bulsa
// if(a>0){
//     alert("musbat son")
// }
// else if(a<0){ 
//      alert("manfiy son")
// }
// else{// aks holda degani bu 0 ga tenglik  sharti
//     alert("son 0 ga teng")
// }
