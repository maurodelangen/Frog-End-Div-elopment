var a = document.querySelector('.hamburger');
var b = false;
const c = document.querySelector('nav')
const d = document.querySelector('body')

a.addEventListener('click', function () {
    if (!b) {
        c.style.setProperty("display", "block");
        d.style.setProperty("overflow","hidden");
        console.log('text');
        b = true;
    } else {
       b = false;
     c.style.setProperty("display", "none");
        d.style.setProperty("overflow","auto");
        console.log('poop');
    }
},false);

var thumbnailShirts = document.getElementById('thumbnailShirts');
var thumbnailsS = ["/images/shirts/shirt1.png", "/images/shirts/shirt2.png", "/images/shirts/shirt3.png", "/images/shirts/shirt4.png", "/images/shirts/shirt5.png"];
var thumbnailIndex = 0;

function ThumbnailS(){
thumbnailShirts.setAttribute("src",thumbnailsS[thumbnailIndex]);
thumbnailIndex++;
if (thumbnailIndex > 4) {thumbnailIndex = o;}
}


var thumbnailHats = document.getElementById('thumbnailHats');
var thumbnailsH = ["/images/hats/hat1.png", "/images/hats/hat2.png","/images/hats/hat3.png","/images/hats/hat4.png",];
var thumbnailIndex = 0;

function ThumbnailH(){
thumbnailHats.setAttribute("src",thumbnailsH[thumbnailIndex]);
thumbnailIndex++;
if (thumbnailIndex > 3) {thumbnailIndex = o;}
}



var thumbnailBags = document.getElementById('thumbnailBags');
var thumbnailsB = ["/images/bags/bags1.png", "/images/bags/bags2.png", "/images/bags/bags3.png",];
var thumbnailIndex = 0;

function ThumbnailB(){
thumbnailBags.setAttribute("src",thumbnailsB[thumbnailIndex]);
thumbnailIndex++;
if (thumbnailIndex > 2) {thumbnailIndex = o;}
}


var thumbnailAccessories = document.getElementById('thumbnailAccessories');
var thumbnailsA = ["/images/Accessories/Accessories1.png", "/images/Accessories/Accessories2.png", "/images/Accessories/Accessories3.png", "/images/Accessories/Accessories4.png"];
var thumbnailIndex = 0;

function ThumbnailA(){
thumbnailAccessories.setAttribute("src",thumbnailsA[thumbnailIndex]);
thumbnailIndex++;
if (thumbnailIndex > 3) {thumbnailIndex = o;}
}

