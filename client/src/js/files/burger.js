const selector = {
    ["burger-button"]: document.querySelector(".burger-button"),
    ["header__burger-menu"]: document.querySelector(".header__burger-menu"),
    ["nav__item"]: document.querySelectorAll(".nav__item")
 }


export const closeBurgerMenu = () => {
   const isOpenBurgerButton = selector["burger-button"]?.classList.contains("burger-button_open");

   if (isOpenBurgerButton) {
      selector["burger-button"]?.classList.remove("burger-button_open");
      selector["header__burger-menu"]?.classList.remove("header__burger-menu_open");
      document.body.classList.remove("block-scroll");
   }
}
 
export const initialMenuBurger = () => {
    selector["burger-button"]?.addEventListener("click", () => {
       const isOpenBurgerButton = selector["burger-button"]?.classList.contains("burger-button_open")
       const isOpenBurgerMenu = selector["header__burger-menu"]?.classList.contains("header__burger-menu_open")
    
       if (!isOpenBurgerButton && !isOpenBurgerMenu) {
          selector["burger-button"]?.classList.add("burger-button_open");
          selector["header__burger-menu"]?.classList.add("header__burger-menu_open");
          document.body.classList.add("block-scroll");
       }
    
       if (isOpenBurgerButton) {
          selector["burger-button"]?.classList.remove("burger-button_open");
          selector["header__burger-menu"]?.classList.remove("header__burger-menu_open");
          document.body.classList.remove("block-scroll");
       }
    })
 
 
    const setVhVariable = () => {
       const vh = window.innerHeight * 0.01;
       document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    window.addEventListener('resize', setVhVariable);
    setVhVariable();


    selector["nav__item"].forEach(item => {
      item.addEventListener("click", () => {
         closeBurgerMenu();
      })
    });
 }
 
 
 