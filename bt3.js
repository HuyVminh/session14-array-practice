// Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình
// của các phần tử trong mảng.

let arr = prompt("Nhap day so nguyen");
arr = arr.split(",");
for (i = 0; i < arr.length; i++){
    arr[i] = +arr[i];
}
let max = arr[0];
let value = 0;
for (i = 0; i < arr.length; i++){
    value += arr[i];
    if (max < arr[i]) {
        max = arr[i];
    }
}
let tb = value / (arr.length + 1);
console.log(arr);
console.log(`Gia tri lon nhat la ${max}`);
console.log(`Gia tri trung binh la ${tb}`);