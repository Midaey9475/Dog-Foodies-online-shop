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
    burgerDrop.style.scale = '1'
    burgerMenu.style.display = 'none'
    closeMenu.style.display = 'block'
}
function closeburgerMenu(){
    burgerDrop.style.scale = '0'
    burgerMenu.style.display = 'grid'
    closeMenu.style.display = 'none'
}

var heroImage = document.getElementById('heroImg')

setInterval(function(){
    heroImage.style.backgroundImage = 'url(dogSketch1.png)'
    setInterval(function(){
        heroImage.style.backgroundImage = 'url(dogSketch3.png)';
        setInterval(function(){
            heroImage.style.backgroundImage = 'url(dogSketch4-.png)';
            setInterval(function(){
                heroImage.style.backgroundImage = 'url(dogSketch5.png)'
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)




function aboutProduct(){
    location.href = 'productPage.html'
}