var myCrt = document.getElementById('addCart')
var addcrt = document.getElementById('addCrt')
function adCrt(value){
    myCrt.innerHTML = eval(Number(myCrt.innerHTML)  + Number(value));
}

var hamburger = document.getElementById('hamburger')
var burgerMenu = document.getElementById('burgerMenu')
var closeMenu = document.getElementById('closeMenu')
var burgerDrop = document.getElementById('burgerDrop')

function openMenu(){
    burgerDrop.style.display = 'grid'
    burgerMenu.style.display = 'none'
    closeMenu.style.display = 'block'
}
function closeburgerMenu(){
    burgerDrop.style.display = 'none'
    burgerMenu.style.display = 'grid'
    closeMenu.style.display = 'none'
}