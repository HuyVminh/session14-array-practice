// Viết một chương trình nhập vào 2 chuỗi,
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
let str1 = ("vu minh huy");
let str2 = ("vu minh huy");
str1 = str1.split(" ");
str2 = str2.split(" ");
check = false;
if (str1.length == str2.length) {
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == str2[i]) {
            check = true;
        }
    }
    if (check == true) {
        console.log("2 chuỗi giống nhau");
    } else {
        console.log("2 chuỗi không giống nhau");
    }
} else {
    console.log("2 chuỗi không giống nhau");
}