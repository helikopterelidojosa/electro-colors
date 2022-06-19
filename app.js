//function that will make randomised colors 
function rcxy(){
let r = Math.floor(Math.random()*256); //rgb(255,255,255) the   red
let g = Math.floor(Math.random()*256); //the green
let b = Math.floor(Math.random()*256); //the blue
return "rgba("+r+","+g+","+b+")"; //now put together
}

setInterval(
function changeColors(){
    document.getElementById("e").style.color = rcxy();
    document.getElementById("l").style.color = rcxy(); 
    document.getElementById("e2").style.color = rcxy(); 
    document.getElementById("c").style.color = rcxy(); 
    document.getElementById("t").style.color = rcxy(); 
    document.getElementById("r").style.color = rcxy(); 
    document.getElementById("o").style.color = rcxy(); 
},
300);