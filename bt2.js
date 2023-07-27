// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử
// khác nhau.Chương trình hiển thị ra được phần tử có giá trị lớn nhất
// trong mảng và vị trí của phần tử đó.

let arr = prompt("Nhập vào 1 mảng số nguyên gồm 10 phần tử khác nhau");
arr = arr.split(",");
for (i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
}
console.log(arr);
let vitri;
let max = arr[0];
for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
        vitri = i;
    }
}

console.log(`Giá trị lớn nhất là ${max} tại vị trí thứ ${vitri + 1}`);