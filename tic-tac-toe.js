//const button= 
const boardElements = document.querySelectorAll('#board');
boardElements.forEach(childNodes => {childNodes.classList.add("square")});

document.addEventListener("DOMContentLoaded",  () =>{
    let btn=document.getElementsByClassName('btn');
    btn.addEventListener('click', ()=> { console.log("clicked"); 
    });
});
