const mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", function () { alert("button clicked"); });

const changebackground = document.querySelector('.blue-background');

changebackground.addEventListener("click",function(){
	document.body.style.backgroundColor = "red";
	});

