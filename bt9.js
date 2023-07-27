// Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử,
// gọi là mảng a và b.Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.Hiển thị mảng c.

let arrA = prompt("Nhap mang so nguyen A gom 10 phan tu");
let arrB = prompt("Nhap mang so nguyen B gom 10 phan tu");
arrA = arrA.split(",");
arrB = arrB.split(",");
for (i = 0; i < arrA.length; i++) {
    arrA[i] = +arrA[i];
    arrB[i] = +arrB[i];
}
let arrC = arrA.concat(arrB);
console.log(arrC);