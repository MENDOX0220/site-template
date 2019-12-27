var sc = document.getElementById("scrollCurrent")
var scrollHeight = 4

let hasPermission = false;
window.addEventListener("wheel", e => {
    scrollHeight += (10 - scrollHeight) / 17
    sc.style.width = 100 - ((document.body.clientHeight - innerHeight) - scrollY) / (document.body.clientHeight - innerHeight) * 100 + "%"

})
window.addEventListener("scroll", e => {
    if (window.scrollY >= last)
        hasPermission = true;
})
setInterval(() => {
    scrollHeight += (2 - scrollHeight) / 100
    sc.style.height = scrollHeight + "px"
}, 1000 / 65)

var hiki = document.getElementById("hiki")
var wep = document.getElementById("wepDevelop")
var jongs = document.getElementById("jongss")
var count = 0;
var last = document.getElementById("asdf").offsetTop;

function gotoo(a) {
    var el = document.getElementById(a);
    el.scrollIntoView(true);
}

wep.addEventListener("click", () => {
    hiki.style.display = "block";
    if (hiki.style.display = "block") {
        setTimeout(() => {
            hiki.style.display = "none";
        }, 1000);
    }
})

jong.addEventListener("click", () => {
    jongs.style.display = "block";
    if (jongs.style.display = "block") {
        setTimeout(() => {
            jongs.style.display = "none";
        }, 1000);
    }
})  
var iwop = document.getElementById("iwop1");
var video = document.getElementById("videos");
var iimg = document.getElementById("iwop-cimg");
iwop.addEventListener("click", () => {
    iwop2.style.display = "block";
    video.style.display = "block";
    iimg.style.display = "block";
})

function changer() {
    var a = document.getElementById("gameover");
    a.style.opacity = "1";
    a.style.display = "block";
    count++;
    if (count == 2) {
        a.style.opacity = "0";
        a.style.display = "none";
        count = 0;
    }
}


function changer1() {
    var a = document.getElementById("gamebattle");
    a.style.opacity = "1";
    a.style.display = "block";
    count++;
    if (count == 2) {
        a.style.opacity = "0";
        a.style.display = "none";
        count = 0;
    }
}


function honmono(e) {
    document.getElementById("honmono-sec").style.display = "block";
    document.getElementById("boxx").style.display = "block";
    var el = document.getElementById(e);
    el.scrollIntoView(true);
}

function scrollToHon() {
    if(hasPermission){
        gotoo('honmono-sec');
        return;
    }
    alert("접근 금지")
    
}