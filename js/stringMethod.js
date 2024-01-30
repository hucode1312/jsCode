"use strict"
// string  data type matnlar bilan ishlaydi

// console.log("Ismi :" + firstName +"\n"+"Familiya :"+ lastName);
// console.log(lastName.length);
// let  txt = new String("salom bollalar");
// let  txt1 = new String("salom bollalar");
// let s1 = "salom";
// let s2 = "salom";
// console.log(typeof txt);
// console.log(txt === txt1);
let text ="Bugun havo, sovuq, Bugun";
// console.log(text.padStart(20,"$"));
// console.log(text.padEnd(text.length + 4,"%"))
// console.log(text.repeat(2))
let  text2 = text.replace("Bugun","Ertaga");
console.log(text2)
let text1 = text.split(",");
for (let i = 0; i < text1.length; i++) {
    console.log(text1[i]);
}



// console.log(text.trimEnd());
// console.log(s1.charAt(4));
// console.log(text.slice(11,text.length))
// console.log(text.slice(-5))
// console.log(text.substring(11,text.length))
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
// let firstName = "Amir";
// let lastName = "Aglayev";
// console.log(firstName.concat(" ",lastName))

// Bobir - 0,0,1,0.5,1,0.5,0,0,0 = 3
// Botir - 0,0,0,0,0,0,0.5,0,0,0.5 = 1
// Amir  - 1,1,0,0,0,0.2,1,0,0 = 3.2
// Jasur - 0,0,0.5,0.5,0,0.7,0,0,0 = 1.7
// Sardor - 0,1,1,1,1,0.6,1,1,1 = 7.6
// Sevinch - 0,0,0,1,0,1,0.5,0,0.7,0 = 3.2


