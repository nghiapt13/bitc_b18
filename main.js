// let newArray = ["Nghia","Son","Hiep","Sang"];
// console.log(newArray);
// console.log(newArray.toString());
// console.log(newArray.join(' '));
// console.log(newArray.pop());
// console.log(newArray.push('ABC','XYZ'));
// console.log(newArray.sort());

// let num = 10;
// console.log(Number.isInteger(num) && num >0);

// let a = 4;
// let b = 3;
// let result = a/b;
// console.log(result.toFixed(2));

// let array = [1,3,5,7,9];
// console.log(array.shift());
// console.log(array.pop());
// console.log(array.push("X"))
// console.log(array);

// let array2 = ["x",'y','z','a','b','c'];
// console.log(array2.sort());

// let array3 = [6,5,2,4,3,1];
// console.log(array3.sort());



// Bài 1
alert("Bài 1")
var b1 = prompt("Mời nhập:");
if (!isNaN(b1)){
    alert(b1 + " là số");
}else{
    alert(b1 + " không phải là số");
}

// Bài 1 nhma cách khác
// let b1 = Number(prompt("Mời nhập"));
// if(Number.isInteger(b1)){
//     alert(b1 + " là số")
// }else{
//     alert(b1 + " không phải là số")
// }

// Bài 2
// chịu chết

// Bài 3
alert("Bài 3 check console nhe")
let b3 = [1,2,3,4,5,6,7,1,2,5];
var unique = Array.from(new Set(b3));

console.log(unique);