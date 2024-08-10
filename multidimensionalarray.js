let arr = [
    ["John",30],
    ["Thomos",40],
    ["Jany",20]
]
// console.log(arr);
// console.log(arr[1]);
// console.log(arr[1][0]);
for(let i=0;i<arr.length;i++)    // sabi values ko print karwane le lyi 
{
    for(let j=0;j<arr[i].length;j++)
    {
    console.log(arr[i][j]);
    }
}

// for each
  arr.forEach(data => {
    data.forEach(val=>
    {
        console.log(val);

    } )
    
});

// for of

for(let ar of arr)
{
    for(i of ar)
    {
        console.log(i);
    }
}