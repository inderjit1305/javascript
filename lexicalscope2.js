var a = 4;  //This is Lexical Function
function fun()
{
    console.log("This is function"  +a);
    function fun2()
    {
        console.log("This is function"  +a);
    }
    fun2();
}
fun();