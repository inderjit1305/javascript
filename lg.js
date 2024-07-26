let a = 5;  // Global = Khi vi kam krega 
function local()
{
 let b = 3;
 console.log(b);  //Local = jis function meh likha hai usi meh kam krega
}
local();
console.log(a);