let num = [10,20,30,45,55];

let a = num.filter((val,ind,array)=>
{
  if(val>=10 && val<=45){
  return val;
  }
})
console.log(a);


let nums = [10,20,30,44,55];
let b = num.find((val)=>
{
    return val==30;
})
console.log(b);

// Split array

let Num = '10,20,30';

let arr = Num.split(',');

arr.forEach(element => {
    console.log(element);
});
console.log(arr);

// Join array

let jo = arr.join(" , ");
console.log(jo);


