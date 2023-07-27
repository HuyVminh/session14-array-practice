// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

let arr = [];
for (let i = 0; i < 10; i++) {
    let num = +prompt(`Nhap phan tu thu ${i + 1}`);
    arr.push(num);
}
for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let a = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = a;
        }
    }
}
console.log(arr);