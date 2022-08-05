const btn = document.getElementById("above");
window.onscroll = function (){
    if(scrollY >= 200){
        btn.style.display = "block"
    }
   else if(scrollY >= 1200)
   btn.style.color = "yellow"
    else{
        btn.style.display = "none"
    }
}


btn.onclick = function(){
  scroll({
      top:0,
      behavior: "smooth"

  })
}

const nav = document.getElementById("nav");
const help = document.getElementById("helpme")

help.onmouseover = function(){
   nav.style.display = "block"
}

 help.onmouseleave = function(){
    nav.style.display = "none"
 }






 