/* let btnOpenMenu = document.querySelector("#open-menu");
let btnCloseMenu = document.querySelector("#close-menu");
let menu = document.querySelector("#mobile-menu");


btnOpenMenu.addEventListener("click",() => {
    menu.classList.remove("disabled");
})

btnCloseMenu.addEventListener("click",() =>{
    menu.classList.add("disabled")
})

 */
document.addEventListener("DOMContentLoaded", () => {
    let btnOpenMenu = document.querySelector("#open-menu");
    let btnCloseMenu = document.querySelector("#close-menu");
    let menu = document.querySelector("#mobile-menu");
  
    console.log(btnOpenMenu, btnCloseMenu, menu); // Check if elements are selected
  
    btnOpenMenu.addEventListener("click",() => {
      menu.classList.remove("disabled");
    });
    
    btnCloseMenu.addEventListener("click",() =>{
      menu.classList.add("disabled");
    });
  });
  