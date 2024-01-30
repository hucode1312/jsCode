"use strict"
//function bu nima?

// funksiya -  bu bitta yozilgan kodni bir nech marta foydalanish

//  function funksiyaNomi(...){
//     barcha kodlar shu erda yoziladi
//  }



function juftToq(){
    let son =  + prompt("son kiriting ");
    if(son % 2 ==1){
       alert(`${son}  -> toq`)
    }else{
       alert(`${son} -> juft `)
    }
}
// funksiya qachon  ishlaydi ?
// u qayergadir  chaqirilsa ishlaydi

// bu esa global uzgaruvchi d-di
// bular chaqirilgan hamma joyda ishlaydi
const ism = "Islom";

function salom(){
    //funksiya ichida elon qilinadigan uzgaruvchi local uzgaruvchi deyiladi
    //  bular  faqat gina funksiya ichida ishlaydi
    const text = "salom Ruslan darsdamisan";
    return text;
    // console.log(`salom ${ism}`);
}


//( ) qavs ichida funksiyaga kirib keluvchi parametrlar yoziladi

// agar da funksiya return ishlatilmasa undifined chiqib qoladi
function summa(a, b){
    alert(salom());
    let c= a+b;
    // bu funksiyada qaytadigan uzgaruvchi yoziladi
    return c;
}
alert(summa(5,6));


// uyga vazifa 
// 5 ta turli xil  funksiya tuzish(if dagi misollarni f-ya yozib kuringlar)
// utilgan temani qaytarish
// java script da funksiya turlarini urganib kelish (yana ikkita turi bor)
// funkisiya  ichida obekt lardan foydalanish bunga 2 ta mashq



