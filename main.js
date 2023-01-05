// nav 

var menubtn = document.getElementById ("menubtn")
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