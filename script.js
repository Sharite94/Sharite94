let toggleNavStatus = true;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarTittle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === true) {
        getSidebarUL.style.visibility = 'visible';
        getSidebar.style.width = "150px";
        getSidebarTittle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
        toggleNavStatus = false;
    }

    else if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = 'hidden';
        getSidebar.style.width = "50px";
        getSidebarTittle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        toggleNavStatus = true;
    }
}

const changebackground = document.querySelector('#home');

changebackground.addEventListener("click",function(){
    document.body.style.backgroundColor = "white";
    });

const changebackground1 = document.querySelector('#red');

changebackground1.addEventListener("click",function(){
	document.body.style.backgroundColor = "red";
	});

    const changebackground2 = document.querySelector('#orange');

    changebackground2.addEventListener("click",function(){
        document.body.style.backgroundColor = "orange";
        });
    
        const changebackground3 = document.querySelector('#purple');

        changebackground3.addEventListener("click",function(){
            document.body.style.backgroundColor = "purple";
        });
            
        const changebackground4 = document.querySelector('#green');

        changebackground4.addEventListener("click",function(){
            document.body.style.backgroundColor = "green";
        
        });
            
