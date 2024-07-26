let fun = function()  // Anonymous Function
{
    console.log("Hello");
}
fun();

// Self and imidetly invoke function

(function()
{
    console.log("Hello");
})();