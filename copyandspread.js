let arr1 = ["John",202,true];
let arr2 = arr1.slice(0).concat(["item"]);

arr2.push("Thomos");
console.log(arr1);
console.log(arr2);


// Spread Method

let arr3 = ["John",202,true];
arr2 = [...arr1]; //Spread Method

arr2.push("Thomos");
console.log(arr1);
console.log(arr2);
