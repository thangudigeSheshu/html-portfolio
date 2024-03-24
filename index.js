let drop = false
let dropdown = document.querySelector('.book');
let triangle = document.querySelector('.before');
let drop1Icon = document.querySelector('.drop1');
let info = document.querySelector('.info')
let dropdown1 = document.querySelector('.drop2')
let triangle1 = document.querySelector('.before1')
function drop1() {
    if (drop === false) {
        dropdown.style.visibility = 'visible';
        triangle.style.visibility = 'visible';
        drop1Icon.style.visibility = 'hidden'
        drop = true
    }
    else if (drop === true) {
        info.style.visibility = 'hidden'
        triangle1.style.visibility = 'hidden'
        dropdown1.style.visibility = 'visible'
        dropdown.style.visibility = 'visible';
        triangle.style.visibility = 'visible';
        drop1Icon.style.visibility = 'hidden'

    }
}
function drop2() {

    dropdown.style.visibility = 'hidden';
    triangle.style.visibility = 'hidden';
    drop1Icon.style.visibility = 'visible'
    drop = false
}
function Info() {
    if (drop === false) {
        info.style.visibility = 'visible'
        triangle1.style.visibility = 'visible'
        dropdown1.style.visibility = 'hidden'
        drop = true
    }
    else if (drop === true) {
        dropdown.style.visibility = 'hidden';
        triangle.style.visibility = 'hidden';
        drop1Icon.style.visibility = 'visible'
        info.style.visibility = 'visible'
        triangle1.style.visibility = 'visible'
        dropdown1.style.visibility = 'hidden'
    }
}

function Info1() {
    info.style.visibility = 'hidden'
    triangle1.style.visibility = 'hidden'
    dropdown1.style.visibility = 'visible'
    drop = false
}

function discount() {
    let but = document.querySelector('.discount')
    but.style.visibility = 'hidden'
    let nav = document.querySelector('.nav')
    nav.style.top = '20px'
    let bef = document.querySelector('.before')
    bef.style.top = '48px'
    let bef1 = document.querySelector('.before1')
    bef1.style.top = '48px'
}
setInterval(function dateTime() {
    let date = new Date()
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec
    }

    if (hours < 10) {
        hours = '0' + hours
    }
    let hourtext = document.querySelector('.hours')
    let mintext = document.querySelector('.min')
    let sectext = document.querySelector('.sec')
    hourtext.innerHTML = hours
    mintext.innerHTML = min;
    sectext.innerHTML = sec;

}, 1000);
let date = new Date();
let date1 = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let date1text = document.querySelector('.date2');
let monthText = document.querySelector('.month');
let yearText = document.querySelector('.year');
date1text.innerHTML = (date1 < 10 ? '0' : '') + date1;
monthText.innerHTML = cheakMonthName(month);
yearText.innerHTML = year;
function cheakMonthName(num) {
    if (num === 1) {
        return 'January'
    }
    else if (num === 2) {
        return 'February'
    }
    else if (num === 3) {
        return 'March'
    }
    else if (num === 4) {
        return 'April'
    }
    else if (num === 5) {
        return 'May'
    }
    else if (num === 6) {
        return 'June'
    }
    else if (num === 7) {
        return 'July'
    }
    else if (num === 8) {
        return 'August'
    }
    else if (num === 9) {
        return 'September'
    }
    else if (num === 10) {
        return 'October'
    }
    else if (num === 11) {
        return 'November'
    }
    else if (num === 12) {
        return 'December'
    }

}

window.addEventListener('load', function () {
    setInterval(function () {
        document.querySelector('.container').style.visibility = 'visible';
        document.querySelector('.preloader').style.visibility = 'hidden';
        document.querySelector('.img').style.visibility = 'visible';
    }, 1000)
});
