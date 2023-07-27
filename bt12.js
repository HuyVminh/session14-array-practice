// Viết một chương trình khai báo một mảng ký tự.In ra số “ký tự số” trong mảng.

let c = ["h", "1", "m", "1", "u", "3"];
let arr = [];
for (let i = 0; i < c.length; i++) {
    if (c[i] > 0 || c[i] <= 0) {
        arr.push(c[i]);
    }
}
console.log(arr);