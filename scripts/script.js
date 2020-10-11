var a = document.querySelector('.hamburger');
var b = false;
const c = document.querySelector('nav')
a.addEventListener('click', function () {
    if (!b) {
        c.style.setProperty("display", "block");
        console.log('text');
        b = true;
    } else {
       b = false;
     c.style.setProperty("display", "none");
        console.log('poop');
    }
},false);
