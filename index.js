var bar =document.querySelector(".ham-container");
footer=document.querySelector("footer")
// console.log(footer);
console.log();  
// arr=footer.querySelectorAll("li")
// arr.forEach((value)=>{
//     value.setAttribute("data-aos","slide-right")
//     value.setAttribute("data-aos-duration","2000")
// });
console.log(li);
bar.addEventListener("click",()=>{
    console.log("clicked");
    document.getElementsByTagName("nav")[0].children[2].classList.toggle("none")
    document.querySelector(".menu-btn").classList.toggle("open")
    
})