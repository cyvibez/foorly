// nav 

var menubtn = document.getElementById ("menubtn")
// var menubtn2 = document.getElementById ("menubtn2")
var sidenav = document.getElementById ("sidenav")

            sidenav.style.right ="-180px"
            menubtn.onclick = function(){
                if(sidenav.style.right == "-180px"){
                    sidenav.style.right = "0"
                } 
                else{
                    sidenav.style.right = "-180px"
                }
            }

// change of colour on click 

// menubtn.addEventListener ('click', () => {
//     menubtn.style.colour = "white";
// })