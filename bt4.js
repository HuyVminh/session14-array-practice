// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên 
// và đảo ngược các phần tử trong mảng đó.
let number = +prompt("Nhập số lượng phần tử bạn muốn thêm:");
let arr = [];
for (i = 0; i < number; i++) {
    let element = +prompt(`Nhập giá trị cho phần tử thứ ${i}:`);
    arr.push(element);
}
//đảo ngc
console.log(arr.reverse());