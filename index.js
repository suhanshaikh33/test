var bar =document.querySelector(".ham-container");
console.log(bar);
bar.addEventListener("click",()=>{
    console.log("clicked");
    document.getElementsByTagName("nav")[0].children[2].classList.toggle("none")
    document.querySelector(".menu-btn").classList.toggle("open")
    
})