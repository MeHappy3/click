var cookie= document.getElementById("cookie"), num=0;
var numbers = document.getElementById("numbers");
function cookieClick()
{
num += 1;	
	numbers.innerHTML = "Cookies: " + num;
}