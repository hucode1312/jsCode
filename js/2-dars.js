"use script"

const hasMoney = true;
// const  place = confirm("Siz 18 yoshdan katta misiz?");
// console.log(place);
// let car = {
//     name:"lasetti",
//     year:2021,
//     color:"black"
// }

// massiv  array- bir nechta uzgaruvchilarni bitta uzgaruvchi ushlab turish
// massiv lar indeks orqali ishlaydi
// massivni indeks uzunligidan 1 kam buladi
// const name1 = "Amir";
// const name2 = "Sardor";
// const name3 = "Botir";
// const name4 = "Ruslan";
// indeks-       0      1       2        3
// const name = ["Amir","Sardor","Botir","Ruslan"];
                    //0 1  2 3
// const son = [5,2,3,4];
//
//
// console.log(son[0]*son[0]);
// console.log(son[1]*son[1]);
// console.log(son[2]*son[2]);
// console.log(son[3]*son[3]);

// const place = +prompt("Necha yoshdasiz ? ")
// console.log(place+10);

// operatorlar
// +,*,/,-
//   /,% - ikkalsi ham bulish
// % - qoldiq qismini chiqarib beradi


// minutni kiriting 250
// 4 soat
// 10 minut

// const place = +prompt("Necha yoshdasiz ? ")
// console.log(10%10);
// console.log(10/10);

// console.log(parseInt(5.25));

// const minut =+prompt("Minutni Kiriting ","");//250
// console.log(parseInt(minut/60) + " soat");
// console.log(minut%60 + " minut");
// console.log("https://www.youtube.com/Texnoplov");
// const channel = prompt ("YouTube kanal nomini kiriting")
// console.log ("https://www.youtube.com/"+channel )

// let ism = prompt("ismingizni kiriting ")
// let familya = prompt("familyangizni  kiriting ")
// console.log("Mening ismim "+ ism + " Mening familyam "+familya )

const numberOfSeries = prompt("Nechta serial ko'rdingiz?");

let serialDB = {
    count:numberOfSeries,
    series:{

    },
    actors:{

    },
    genres:[],
    private: false
}

const serial=prompt("Oxirgi ko'rgan serialingiz?")
const grade=prompt("Nechi baho berasiz?")
const serial1=prompt("Oxirgi ko'rgan serialingiz?")
const grade1=prompt("Nechi baho berasiz?")
serialDB.series = {
    [serial]:grade,
    [serial1]:grade1
}
console.log(serialDB)

