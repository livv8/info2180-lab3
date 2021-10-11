const X_input 
const O_input
var Victory= new Array();
const boardElements = document.querySelectorAll('#board');
boardElements.forEach(childNodes => {childNodes.classList.add("square")});

document.addEventListener("DOMContentLoaded",  () =>{
    let btn=document.getElementsByClassName('btn');
    btn.addEventListener('click', ()=> { console.log(childNodes); 
    });
});

function turns(){
    X_input=document.classList.add("square.X");
    O_input=document.classList.add("square.O");
    let x= document.getElementById("#board"    
    );
    x.textContent = " X"
    O_input.textContent= "O"
}