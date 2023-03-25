const up = document.querySelector(".up")
const btn = document.querySelector(".btn")

window.onscroll= function()
{
  if(window.scrollY >= 700){
    up.style.right="30px"
    up.style.transition="1s"
  }else{
    up.style.right="-50px"
    up.style.transition="1s"
  }
}

up.onclick= function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}

