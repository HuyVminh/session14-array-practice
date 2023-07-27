// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên
// gồm 10 phần tử.Chương trình thực hiện tính và hiển thị
// xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

let arr = prompt("Nhập vào 1 dãy gồm 10 số nguyên cách nhau bởi dấu ','");
arr = arr.split(",");
let count = 0;
for (i = 0; i < arr.length; i++){
    arr[i] = +arr[i];
    if (arr[i] >= 10) {
        count++;
    }
}
console.log(count);
