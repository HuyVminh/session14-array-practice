// Viết chương trình khởi tạo mảng 2 chiều,
// gồm một bộ các phần tử có sẵn, in ra các phần tử trong mảng.

let arr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
for (let i = 0; i < arr.length; i++){
    console.log(`row${i}`);
    for (let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}