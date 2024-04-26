var myCrt = document.getElementById('addCart')
var addcrt = document.getElementById('addCrt')
function adCrt(value){
    myCrt.innerHTML = eval(Number(myCrt.innerHTML)  + Number(value));
}