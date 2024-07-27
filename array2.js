let num = [10,20,30,40,50,60];

for(i=0;i<num.length;i++)
{
  console.log(num[i]);
}


let Num = [10,20,30,40,50,60];
Num.forEach((val,index,array)=>    //forEach = same array meh kam krta hai
{
    console.log(val,index,array);
});

let Nums = [4,10,15,20,25,30];
let a = num.map((val,ind)=>      //map = hor array meh kam krta hai 
{
    return val;
});
console.log(a);