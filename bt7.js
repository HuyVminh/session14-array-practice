// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không ?
// Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.


const a = 10;
let arr = [];
let arrdelete = [];
for (let i = 0; i < a;i++){
    let n = prompt(`Nhap phan tu th ${i + 1} cua mang 10 phan tu`);
    arr.push(n);
}
let num = +prompt("Nhap 1 so nguyen de kiem tra");
let check = false;
for (let i = 0; i < arr.length; i++){
    if (arr[i] === num) {
        check = true;
    } else {
        arrdelete.push(arr[i]);
    }
}
if (check) {
    arr = arrdelete;
} else {
    alert(`Phan tu ${num} khong nam trong mang`);
}
console.log(arrdelete);