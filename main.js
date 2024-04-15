var myCrt = document.getElementById('addCart')
var addcrt = document.getElementById('addCrt')
addcrt.onclick = function(){
    myCrt.innerHTML = Number(myCrt.innerHTML) + 1
}