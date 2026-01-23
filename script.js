const items = document.querySelectorAll(".reveal");

function showOnScroll(){
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if(top < window.innerHeight * 0.85){
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
