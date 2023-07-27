// Viết chương trình nhập vào một mảng ký tự,
// tìm tất cả các ký tự trong mảng là(-) và thay thế các ký tự này bởi ký tự(_)

let arr = prompt("Nhập 1 mảng ký tự cách nhau bởi dấu ','");
arr = arr.split(",");
for (let i = 0; i < arr.length; i++){
    if (arr[i] == "-") {
        arr[i] = "_";
    }
}
console.log(arr);