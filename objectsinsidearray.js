let arr = [
    {user:1,name:"tate"},
    {user:2,name:"shalby"},
    {user:3,name:"chad"}
]
// console.log(arr[0]);
// console.log(arr);

// for(let i in arr)
// {
//     console.log(arr[i]);
// }


// let[item1,item2] = arr;
// console.log(item1);
// console.log(item2);


let[{name}, ,{name:name1}] = arr;
console.log(name);
console.log(name1);
