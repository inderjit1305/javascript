function fun()
{
    var a = 1   // This is lexical Function
    console.log("This is function" +a);
    function fun2()
    {
        var a = 2;
        console.log("This is function" +a);
    }
    fun2();
}
fun();