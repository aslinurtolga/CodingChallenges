//* JS-CC-001 : Reverse String

//* Bu kodlama zorluğunun amacı, verilen bir dizgenin tersini döndüren bir kod yazmaktır.

//? Problem Statement

//! Write a function that takes an array of characters and reverses the letters in place.

//* Örnekler: 

reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC 
reverse("Happy") ➞ yppaH

const str = "Clarusway Rocks!";

const arr = str .split('')
.reverse()
.join('');

console.log(arr);


const str2 = "Happy";
const arr2 = str2.split("").reverse().join("");
console.log(arr2);


//* JS-CC-002 : Reverse Words

//* Bu kodlama zorluğunun amacı, bir dize verilen ve kelimelerin ters sırasını döndüren bir kod yazmaktır.


Input : 'Clarusway' => Output : 'Clarusway'
Input : 'days. big make things Little' => Output : 'Little things make big days.'

const words = "Clarusway";

const arr3 = words.split('').join('');

console.log(arr3);




const words2 = "days. big make things Little";

const arr4 = words2.split(' ').reverse().join(' ');

console.log(arr4);


//TODO: (NEŞE HOCA)

let word = prompt("cümle giriniz:");
let sonuc = word.split(" ").reverse().toString();
console.log(sonuc);


let word = prompt("cümle giriniz:");
let sonuc = word.split(" ").reverse().join(" ");
console.log(sonuc);
let sonuc1 = word.split("").reverse().join("");
console.log(sonuc1);