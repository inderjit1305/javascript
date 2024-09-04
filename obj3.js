let obj = 
{
    "name":"Bravo",
    "age": 23,
    "last name":"John",
    fun : function(){
        console.log("I am function");
    },
    arr : [10,20,30]
}
//object ki sari values ik he bar meh print karwani
for(let i in obj)
{
    console.log(obj[i]);
}

// for(i of Object.keys(obj))
// {
//     console.log(obj[i]);
// }

