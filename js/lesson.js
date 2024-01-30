"use strict"


// let num = 25 ;
//boolean -> true,false
//string - > "matn"
//number  -> 2.5,100
//null -> object keladi
//object ->
//undefined ->
//bigint
// console.log(son);

function summa(){

    // return person;
}

function  salom(){// kurasitib turibdiki void bu f-ya dan qiymat qaytmaydi
    let age = 14;
    // return age;
}

// let result = salom();
// console.log(result)
// console.log(salom()) bu holatda undefined
//alert(salom())  undefined

// +-*/ %
//parseInt()
// >= bu nima katta yoki teng
// <= kichik yoki teng
// == tengmi?
// != tengmasmi
// === tengmi  data type bir xil bulishi k.k
// !== tengmasmi data type qaraydi


let num  = "5";

// if(son===num && son==num){
//     console.log("good");
// }else{
//     console.log("bad");
// }
// else if ni qachon
// let son = -1;
// if(son>0){
//     console.log("musbat son");
// }else if(son<0){
//     console.log("manfiy son");
// }else {
//     console.log(0);
// }
//                     0 1 2 3
// let massiv = [5,3,6,8,15,150,25];
// massiv lar har doim indeks bilan ishlaydi
//                       0      1     2       3
// let massiv1 = ["olma","nok","banan","gilos"];
// console.log("uzunliogi -> "+ massiv.length)
// console.log("indeks -> "+ massiv[6])

//for sikl operatori
//  nimaga kerak?
// 3 ta asosiy narsa
//1-boshlanish nuqtasi
//2- tugash nuqtasi
//3 - qadam birxil buladi

// for(boshlanish nuqtasi,tugash nuqtasi,qadam){
//     // code
// }

// let b = 10;
// for(b;b<=100;b=b+10){
//     console.log(b)
// }
// let j = 10;
// for(j;j>=1;j--){
//     console.log(j)
// }
//
// for(let i=100;i>=10;i=i-10){
//     console.log(i);
// }
// for(let c = 1; c<=64;c=c*2){
//     console.log(c);
// }
// let son1 = +prompt( "1-chi sonni kiriting");
// let son2 = +prompt("2-chi sonni kiriting");
// let s = 0;
// for(son1;son1<=son2;son1++){
//     console.log("son1 : "+ son1);
//     s = s + son1;
// }
// console.log("yig'indi : "+ s);


// 7*1 =7
// 7*2 =14
// console.log(11<=10);// false
// for(let index = 1;index<=10;index++){
//     console.log(index);
// }
// let a = + prompt("1- son ");//25
// let b = + prompt("2- son ");//5
// if(a<b){//5<10
//     for(let i=a;i<=b;i++){
//         console.log(i);
//     }
// }else{//25>15
//     for(let i=a;i>=b;i--){
//         console.log(i);
//     }
// }

// let kanNarxi = + prompt("1-kg konfet narxini kiritng ");
// let  summ = 0;// yig'indini hisoblash uchun k.k va 0  qiymat beriladi
// for (let i = 1; i <= 10 ; i++) {
//     console.log( i+ "kg = " + kanNarxi * i + " sum" );
//     summ  +=  kanNarxi * i;
// }
// console.log("Jami kanfet narxi : "+ summ + " sum");


// let kara=+prompt("Sonni kiriting")
// let jami = 0;
// for (let i=1;i<=10;i++){
//     console.log( kara + " * "+i+" = "+kara*i)
//     jami += kara*i;
// }
// console.log("Jami : "+jami);


//-5
//-4
//-3
//-2
//-1
// salom

// let a= + prompt("a");
// let b = +prompt("b");
// let count = 0;
// for (let i = a+1; i < b; i++) {
//     console.log(i);
//     count++;
// }
// console.log("soni : " + count);


// let narx = +prompt("Narx : ");
// for (let i = 0.1; i <= 1; i = i+0.1) {
//     let s = narx *i;
//     console.log(s.toFixed(3));
// }

// event lar

// global elon qilish
let son =1;
function myFunction(){
    console.log(son++);
}
function juftSon(){
    for (let i = 1; i < 5 ; i++) {
        if (i % 2 == 0){
            console.log(i);
        }

    }
    // 2,4,6,8,10
}

// function myMassiv(){
//     //                   0        1     2
//     let mas = ["olma","banan","nok"];//- length = 3
//     for (let i = 0; i < mas.length; i++) {
//       console.log(mas[i]);
//     }
// }
// let mas = ["olma","banan","nok"];
//
// // for (let i = 0; i < mas.length; i++) {
// //     console.log(mas[i]);
// // }
// mas.forEach(item=>{
//     console.log(item);
// })






