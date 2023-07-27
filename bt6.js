// Viết chương trình khởi tạo nhập vào một mảng số nguyên
// gồm 10 phần tử.Nhập phần tử số nguyên và tìm xem số đó
// có nằm trong mảng số nguyên không ? Nếu có thuộc mảng số nguyên
// thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".

let arr = prompt("Nhập vào 1 dãy gồm 10 số cách nhau bởi dấu ','");
arr = arr.split(',');
for (i = 0; i < arr.length; i++){
    arr[i] = Number(arr[i]);
}
let n = +prompt("Nhập vào một số bất kỳ");
let flag = false;
for (i = 0; i < arr.length; i++) {
    if (n == arr[i]) {
        console.log("Number X is in the array");
        flag = true;
    }
}
if (flag == false) {
    console.log("Number X is not in the array");
}

