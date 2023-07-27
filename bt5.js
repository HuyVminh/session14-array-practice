// Viết chương trình đếm số nguyên âm trong một chuỗi.

let str = ("Nhập một chuỗi");
let count = 0;
str = str.split(" ");
for (let i = 0; i < str.length; i++){
    if (str[i] < 0) {
        count++;
    }
}
console.log(count);