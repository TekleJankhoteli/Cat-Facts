


const btn=document.querySelector("button")
const h1=document.querySelector("h1")
const img=document.querySelector("img")

btn.addEventListener("click", ()=>{
  fetchCat();
})

async function fetchCat(){
  let res=await fetch("https://catfact.ninja/fact")
  let data=await res.json();
  console.log(data)
  h1.innerHTML=data.fact;


let imgRes= await fetch("https://api.thecatapi.com/v1/images/search");
let imgData= await imgRes.json();
console.log(imgData);

let catImglink=imgData[0].url;
  img.style.display="block";
  img.src=catImglink
  
}