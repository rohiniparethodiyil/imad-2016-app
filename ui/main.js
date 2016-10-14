console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML = ' N EW VALUE';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    merginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);
    img.style.marginLeft='100px';
    
};