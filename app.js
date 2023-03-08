let burger = document.querySelector(".fa-bars");
let back = document.querySelector(".back");
let hidden_menu = document.querySelector(".hidden-menu");
let close = document.querySelector(".close");

burger.addEventListener("click",()=>{
    back.style.display = "block";
    hidden_menu.style.left= "0";
    document.body.style.overflow = 'hidden';

});

close.addEventListener("click",()=>{
    back.style.display = "none";
    hidden_menu.style.left= "-100%"
});

back.addEventListener("click",()=>{
    back.style.display = "none";
    hidden_menu.style.left= "-100%"
})

