let a = document.querySelectorAll('.col1 option')
let b = document.querySelector('.op9')
let c = document.querySelector('.op10')
let d = document.querySelectorAll('.op9 option')
let B = document.querySelector('.op2')
let C = document.querySelector('.op3')
let D = document.querySelector('.op4')
let F = document.querySelector('.op6')
let O = document.querySelector('.origin')
let but = document.querySelector('.btn')
let dest = document.querySelector('.desti')
let inp = document.querySelectorAll('input')
let inp5 = document.querySelector('.inp5')
let inp6 = document.querySelector('.inp6')
let inp7 = document.querySelector('.inp7')
let inp8 = document.querySelector('.inp8')
let bod = document.querySelector('body')
let text = document.querySelector('textarea')
let sel1 = document.querySelector('.sel1')
let sel2 = document.querySelector('.sel2')
let op1 = document.querySelector('.op1')
inp5.value = ''
inp6.value = ''
inp6.value = ''
inp7.value = ''
inp8.value = ''
dest.value = ''
O.value = ''
text.value = ''
window.addEventListener('DOMContentLoaded', function () {
    let Def = 'Voice Of Coustomer*'
    sel1.value = Def
    b.value = 'Coustomer Touch Point*'
    c.value = 'Reason*'
    b.disabled = true
    c.disabled = true
})
but.addEventListener('click', function () {
    if (inp5.value === '' || inp6.value === '' || inp7.value === '' || inp8.value === '' || dest.value === '' || dest.value === '') {
        alert("Please Fields Should Not Empty!")
    }
    else {
        window.location.href = 'Thanks.html'
    }
})
for (let i = 0; i < a.length; i++) {

    let p = a[i]
    p.addEventListener('click', function () {
        let q = a[i].innerHTML;
        if (q === 'Voice Of Coustomer*') {
            b.style.visibility = 'visible'
            b.disabled = true
            c.style.visibility = 'visible'
            c.disabled = true
        }
        else if (q === 'FeedBack') {
            b.style.visibility = 'hidden'
            c.style.visibility = 'hidden'
        }
        else if (q === 'Appreciation') {
            b.style.visibility = 'hidden'
            c.style.visibility = 'hidden'
        }
        else if (q === 'Suggestion') {

            b.disabled = false
            c.style.visibility = 'visible'
            b.style.visibility = 'visible'
            c.disabled = false
        }
        else if (q === 'Complaint' || q === 'Request' || q === 'Enquiry') {
            b.disabled = false
            c.style.visibility = 'visible'
            b.style.visibility = 'visible'
            c.disabled = true
        }
    })
}
for (let i = 1; i < d.length; i++) {
    let f = d[i]
    f.addEventListener('click', function () {
        let g = f.innerHTML;
        if (g === 'Airport Services FAQS') {
            window.open('airlines.html')
        }
        else if (g === 'Inflight Services FAQS') {
            B.innerHTML = 'Meal Services'
            C.innerHTML = 'On Board Merchadise'
            D.innerHTML = 'Staff Related'
            window.open('Inflight.html')
        }
        else if (g === 'Digital/Website FAQS') {
            B.innerHTML = 'New Booking Related'
            C.innerHTML = 'Fares Related'
            D.innerHTML = 'Website Content'
            F.innerHTML = 'Offers & Promos'
            window.open('Digital.html')
        }
        else if (g === 'Flight Schedule FAQS') {
            B.innerHTML = 'Flight Cancelled'
            C.innerHTML = 'Flight Delayed'
            D.innerHTML = 'Flight Diverted'
            F.innerHTML = 'New Destinations'
            window.open('FlightDel.html')
        }

    })
}
let drop = document.querySelector('.drop')
let close = document.querySelector('.icon')
let Drop = document.querySelectorAll('.drop span')
O.value = ''
O.addEventListener('click', function () {
    drop.style.visibility = 'visible'
    close.style.visibility = 'visible'
    Drop.forEach((e) => {
        e.addEventListener('click', function () {
            O.value = e.innerHTML
            drop.style.visibility = 'hidden'
            close.style.visibility = 'hidden'
        })
    })
})
close.style.visibility = 'hidden'
function Closed() {
    drop.style.visibility = 'hidden'
    close.style.visibility = 'visible'
    close.style.visibility = 'hidden'
}
let drop1 = document.querySelector('.drop2')
let close1 = document.querySelector('.icon1')
let Drop1 = document.querySelectorAll('.drop2 span')
dest.value = ''
dest.addEventListener('click', function () {
    if (O.value === '') {
        alert("Please Select Origin Airport City")
    }
    else {
        drop1.style.visibility = 'visible'
        close1.style.visibility = 'visible'
        Drop1.forEach((e) => {
            e.addEventListener('click', function () {
                dest.value = e.innerHTML
                drop1.style.visibility = 'hidden'
                close1.style.visibility = 'hidden'
            })
        })
    }
})

close1.style.visibility = 'hidden'
function Closed1() {
    drop1.style.visibility = 'hidden'
    close1.style.visibility = 'visible'
    close1.style.visibility = 'hidden'
}

let butt = document.querySelector('.icon3')
let pho = document.querySelector('.phone')
let butt1 = document.querySelector('.icon4')
let span1 = document.querySelectorAll('.phone span')
let up1 = document.querySelector('.down')
let up2 = document.querySelector('.Tel')
butt.addEventListener('click', function () {
    pho.style.visibility = 'visible'
    butt.style.visibility = 'hidden'
    up1.style.visibility = 'visible'

})
up1.addEventListener('click', function () {
    pho.style.visibility = 'hidden'
    up1.style.visibility = 'hidden'
    butt.style.visibility = 'visible'
})
let butt2 = document.querySelector('.Span')
span1.forEach((e) => {
    let content = e.innerHTML;
    e.addEventListener('click', function () {
        if (content.includes('India (+91)')) {
            butt2.innerHTML = '+91';
        } else if (content.includes('United States (+1)')) {
            butt2.innerHTML = '+1';
        } else if (content.includes('United Kingdom (+44)')) {
            butt2.innerHTML = '+44';
        } else if (content.includes('Germany (+49)')) {
            butt2.innerHTML = '+49';
        } else if (content.includes('China (+86)')) {
            butt2.innerHTML = '+86';
        } else if (content.includes('Australia (+61)')) {
            butt2.innerHTML = '+61';
        } else if (content.includes('Brazil (+55)')) {
            butt2.innerHTML = '+55';
        } else if (content.includes('Canada (+1)')) {
            butt2.innerHTML = '+1';
        } else if (content.includes('France (+33)')) {
            butt2.innerHTML = '+33';
        } else if (content.includes('Italy (+39)')) {
            butt2.innerHTML = '+39';
        } else if (content.includes('Japan (+81)')) {
            butt2.innerHTML = '+81';
        } else if (content.includes('Mexico (+52)')) {
            butt2.innerHTML = '+52';
        } else if (content.includes('Netherlands (+31)')) {
            butt2.innerHTML = '+31';
        } else if (content.includes('Russia (+7)')) {
            butt2.innerHTML = '+7';
        } else if (content.includes('Saudi Arabia (+966)')) {
            butt2.innerHTML = '+966';
        } else if (content.includes('South Korea (+82)')) {
            butt2.innerHTML = '+82';
        } else if (content.includes('Spain (+34)')) {
            butt2.innerHTML = '+34';
        } else if (content.includes('Sweden (+46)')) {
            butt2.innerHTML = '+46';
        } else if (content.includes('Switzerland (+41)')) {
            butt2.innerHTML = '+41';
        } else if (content.includes('Turkey (+90)')) {
            butt2.innerHTML = '+90';
        } else if (content.includes('Argentina (+54)')) {
            butt2.innerHTML = '+54';
        } else if (content.includes('Austria (+43)')) {
            butt2.innerHTML = '+43';
        } else if (content.includes('Belgium (+32)')) {
            butt2.innerHTML = '+32';
        } else if (content.includes('Chile (+56)')) {
            butt2.innerHTML = '+56';
        } else if (content.includes('Colombia (+57)')) {
            butt2.innerHTML = '+57';
        } else if (content.includes('Czech Republic (+420)')) {
            butt2.innerHTML = '+420';
        } else if (content.includes('Denmark (+45)')) {
            butt2.innerHTML = '+45';
        } else if (content.includes('Egypt (+20)')) {
            butt2.innerHTML = '+20';
        } else if (content.includes('Greece (+30)')) {
            butt2.innerHTML = '+30';
        } else if (content.includes('Hong Kong (+852)')) {
            butt2.innerHTML = '+852';
        } else if (content.includes('Hungary (+36)')) {
            butt2.innerHTML = '+36';
        } else if (content.includes('Indonesia (+62)')) {
            butt2.innerHTML = '+62';
        } else if (content.includes('Ireland (+353)')) {
            butt2.innerHTML = '+353';
        } else if (content.includes('Israel (+972)')) {
            butt2.innerHTML = '+972';
        } else if (content.includes('Malaysia (+60)')) {
            butt2.innerHTML = '+60';
        } else if (content.includes('New Zealand (+64)')) {
            butt2.innerHTML = '+64';
        } else if (content.includes('Norway (+47)')) {
            butt2.innerHTML = '+47';
        } else if (content.includes('Poland (+48)')) {
            butt2.innerHTML = '+48';
        } else if (content.includes('Portugal (+351)')) {
            butt2.innerHTML = '+351';
        }
        pho.style.visibility = 'hidden'
        butt.style.visibility = 'visible'
        up1.style.visibility = 'hidden'
    })

    // Add more conditions for other countries as needed
});
