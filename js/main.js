let burger = document.querySelector('.header__burger');

//  видвижне меню
burger.onclick = function(){
    document.querySelector('.meny').classList.remove('close');
    burger.classList.toggle('active');
    document.querySelector('.meny').classList.toggle('activeMeny');
   

}
document.querySelector('.meny__close').onclick = function(){
    document.querySelector('.meny').classList.toggle('close');
     burger.classList.remove('active');
     document.querySelector('.meny').classList.remove('activeMeny');
}

function clickLi(){
    document.querySelector('.meny').classList.toggle('close');
    burger.classList.remove('active');
    document.querySelector('.meny').classList.remove('activeMeny');
}
