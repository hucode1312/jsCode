"use strict";
// %  - 10 % 7 =3   / - 10/7 = parseInt(10/7) = 1
// %  - 21 % 10 = 1
//%   -  34 % 20 = 14
//  % -  25 % 12 = 1
// %   - 25 % 5 = 0
//4  va 5 berilsa => 4*10+5 = 45
// 7 va 8 -> 7*10+8
//78  ->  87
// 7  -> parseInt(78/10) = 7
// 8  -> 78%10 = 8
// let sonIkkiXona = + prompt("Ikki xonali son kiriting ?");
// let son1 = parseInt(sonIkkiXona/10);//6
// let son2 = sonIkkiXona%10;//3
// let son = son2 * 10 + son1;
// alert(son)

// const son3Xona = +prompt("Endi uch xonli son kiriting? ");//son3Xona = 152/10  = 2*100+5*10+1 = 251
// const son4 = son3Xona%10; 
// const son5 = parseInt(son3Xona/10)%10;
// const son6 = parseInt(son3Xona/100);
// const sonFinish = son4*100 + son5*10 +son6;
// alert(sonFinish);

// const numberOfVideos = +prompt("Nechta video ko'rdingiz?");
// console.log(numberOfVideos)
// let seriesDB = {
//     count:numberOfVideos,
//     series:{ },
//     actors:{ },
//     genres:[ ],
//     privat:false
// }
// console.log(seriesDB)

// const lastVideo1 = prompt("Oxirgi ko'rgan videongiz?");
// const grade1 = +prompt("Nechi baho berasiz?");
// const lastVideo2 = prompt("Oxirgi ko'rgan videongiz?");
// const grade2 = +prompt("Nechi baho berasiz?");

// seriesDB.series= {
//     [lastVideo1]:grade1,
//     [lastVideo2]:grade2
// }
// console.log(seriesDB)

//Interpolatsiya
// const name = prompt("What is your name?");
// const lname = prompt("What is your lastname?");
// // alert("Sizning ismingiz "+ name);
// alert(`Sizning ismingiz ${name}  familiyangiz ${lname}`)
// %
// / 

// ++ increment -  qiymatini 1 ga oshiradi
// let son = 25;
// son++;
// son++;
// // alert(son);

// -- decrement qiymatini 1 ga kamaytiradi
// let son1 = 45;
// son1--;
// son1--;
// // alert(son1);

// let num = 63;
// num++;
// num--;
// alert(num);




// && - va   ikkita mantiqiy toifa uchun  urtasida keladi
// true && true   => true
// true && false   => false
// false && true   => false
// false && false   => false

// alert (7==7  && 5==5);

// || - yoki ikkita mantiqiy toifa uchun  urtasida keladi

// true && true   => true
// true && false   => true
// false && true   => true
// false && false   => false

//alert(15==16 || 25==26 || 85==85);// -> true
 
// ==    -> tengmi? tengligiga tekshiradi 
// alert(5=="5");//-> true

// ===  -> tengmi? son qiymatini va data type ham bir xil bulishi kerak;
// alert(5==="5");// false
// alert("5" === "5");// true


//  !=  - >tengmasmi? teng bumasa hursand yani true
// alert(5!=6); // true
// let son1 = 25,son2 = 25;
// alert(son1!=son2);

//  !== -> tengmasmi? data type ni ham teng bumasligi kerak
// alert(5!==5);


// alert(6>=8 && 6<=7);


let son = +  prompt("sonni kiriting?");
if(son>0){// bu sonni musbatligini tekshirish uchun
    son++;// bu soni qiymatini birga oshiradi
}
alert(son);

