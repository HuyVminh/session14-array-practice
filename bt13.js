// Viết một chương trình để đếm số từ trong một chuỗi.

let str = ("vu minh huy sinh nam 1991");
str = str.split(" ");
let count = 0;
console.log(str);
for (i = 0; i < str.length; i++){
    count++;
}
console.log(count);