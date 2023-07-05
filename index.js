// *Change the background color of an HTML element.

let h1=document.querySelector(".saxeli");
h1.style.backgroundColor="pink";

// *Hide an HTML element by changing its display property.

let h2=document.querySelector(".email")
h2.style.display="none";

// *Toggle a CSS class on an element when it is clicked.

let btn=document.querySelector("#btn");
let paragraph=document.querySelector("#paragraph")

btn.addEventListener("click", () =>{
    if(paragraph.style.display==="none"){
        paragraph.style.display="block";
    }else{
        paragraph.style.display="none"
    }

})

// *Change the text content of an element when a button is clicked.

let button=document.querySelector("#button")
let h3=document.querySelector(".h3")

button.addEventListener("click",()=> {
    h3.innerHTML="this is true text"
})


// *Increment or decrement a counter when respective buttons are clicked.

let inc=document.querySelector("#inc");
let dec=document.querySelector("#dec");
let numb=document.querySelector("#numb");

let count=0;

inc.addEventListener("click",()=>{
    numb.innerHTML=count++
})

dec.addEventListener("click",()=>{
    numb.innerHTML=count--
})


// *change box color to click the button

let box=document.querySelector(".box")
let cbc=document.querySelector(".CBC")

cbc.addEventListener("click", ()=>{
    box.style.backgroundColor="blue"
})



