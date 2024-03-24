
let a = document.getElementById('down1')
let b = document.getElementById('down2')
let c = document.querySelectorAll('.Way span')
let d = document.querySelector('.One')
let f = document.querySelector('.Way')
let g = document.querySelector('.cross')
let h = document.querySelector('.In')
let j = document.querySelector('.date')
let i = document.querySelector('.date1')
let but = document.querySelector('button')
let k = document.querySelector('.sec')
let m = document.querySelector('.cross1')
let m1 = document.querySelector('.From')
let m2 = document.querySelector('.inp')
let m3 = document.querySelectorAll('.From span') //m3
let R = document.querySelector('#Inp')
let m4 = document.querySelectorAll('.From1 span')  //m4
let m5 = document.querySelector('.From1')
let m6 = document.querySelector('.cross2')
let y = document.querySelector('.swap')
let s = document.querySelector('.T')
let s1 = document.querySelector('.Y1')
let s2 = document.querySelector('.sec1')
let s3 = document.querySelector('.sec1 #D1')
let s4 = document.querySelector('.sec1 .inp1')
let s5 = document.querySelector('.sec1 #Inp1')
let y1 = document.querySelector('.swap1')
let y2 = document.querySelector('.bef')
let y3 = document.querySelector('.bef1')
c.forEach((e) => {
    e.addEventListener('click', function () {
        d.innerHTML = e.innerHTML
        f.style.visibility = 'hidden'
        h.style.marginLeft = '83%'
        if (e.innerHTML === 'Round Trip') {
            m5.style.visibility = 'hidden'
            s4.value = ''
            s5.value = ''
            j.style.visibility = 'visible'
            i.style.visibility = 'hidden'
            s2.style.visibility = 'visible'
            k.style.visibility = 'hidden'
            y2.style.visibility = 'hidden'
            y3.style.visibility = 'visible'
            y3.innerHTML = 'Travel Dates'
        }
        else if (e.innerHTML == 'One Way') {
            m1.style.visibility = 'hidden'
            m5.style.visibility = 'hidden'
            y3.style.visibility = 'hidden'
            y2.style.visibility = 'visible'
            m2.value = ''
            R.value = ''
            j.style.visibility = 'hidden'
            i.style.visibility = 'visible'
            s2.style.visibility = 'hidden'
            k.style.visibility = 'visible'

        }
    })
})
a.addEventListener('click', function () {
    f.style.visibility = 'visible'
})
g.addEventListener('click', function () {
    f.style.visibility = 'hidden'
})

m.addEventListener('click', function () {
    m1.style.visibility = 'hidden'
})
m2.value = ''
R.value = ''
let cheak = false
let cheak1 = false
let clicked = false
let clicked1 = false
let p = ''
m2.addEventListener('click', function () {
    if (cheak === false && cheak1 === false) {
        m1.style.visibility = 'visible'
        m3.forEach((e) => {
            e.addEventListener('click', function () {
                m2.value = e.innerHTML
                p = m2.value
                m1.style.visibility = 'hidden'
            })
        })
        cheak = true
        cheak1 = false

    }
    else if (cheak1 === true) {
        m5.style.visibility = 'hidden'
        m1.style.visibility = 'visible'
        m3.forEach((e) => {
            e.addEventListener('click', function () {
                m2.value = e.innerHTML
                p = m2.value
                m1.style.visibility = 'hidden'
            })
        })
        cheak1 = false
        cheak = true
    }

})
R.addEventListener('click', function () {
    if (cheak === false && cheak1 === false) {
        m1.style.visibility = 'hidden'
        m5.style.visibility = 'visible'
        m4.forEach((e) => {
            e.addEventListener('click', function () {
                if (p !== e.innerHTML) {
                    R.value = e.innerHTML
                    m5.style.visibility = 'hidden'
                }
                else {

                    alert("Source and Destination Should Not be Same!")
                }

            })
        })
        cheak = false
        cheak1 = true
    }
    else if (cheak === true) {
        m1.style.visibility = 'hidden'
        m5.style.visibility = 'visible'
        m4.forEach((e) => {
            e.addEventListener('click', function () {
                if (p !== e.innerHTML) {
                    R.value = e.innerHTML
                    m5.style.visibility = 'hidden'
                }
                else {

                    alert("Source and Destination Should Not be Same!")
                }
            })
        })
        cheak = false
        cheak1 = true

    }
})
s4.value = ''
s5.value = ''
s4.addEventListener('click', function () {
    if (clicked === false && clicked1 === false) {
        m1.style.visibility = 'visible'
        m3.forEach((e) => {
            e.addEventListener('click', function () {
                s4.value = e.innerHTML
                p = s4.value
                m1.style.visibility = 'hidden'
            })
        })
        clicked = true
        clicked1 = false

    }
    else if (clicked === true && clicked1 === false) {
        m5.style.visibility = 'hidden'
        m1.style.visibility = 'visible'
        m3.forEach((e) => {
            e.addEventListener('click', function () {
                s4.value = e.innerHTML
                p = s5.value
                m1.style.visibility = 'hidden'
            })
        })
        clicked1 = false
        clicked = true
    }
    else if(clicked === false && clicked1 === true){
        m5.style.visibility = 'visible'
        m1.style.visibility = 'hidden'
        m4.forEach((e)=>{
            e.addEventListener('click',function(){
                if (p !== e.innerHTML) {
                    s5.value = e.innerHTML
                    m1.style.visibility = 'hidden'
                }
                else{

                    alert("Source and Destination Should Not be Same!")
                }
            })
        })
        clicked = true
        clicked1 = false
    }

})
s5.addEventListener('click', function () {
    if (clicked === false && clicked1 === false) {
        m1.style.visibility = 'hidden'
        m5.style.visibility = 'visible'
        m4.forEach((e) => {
            e.addEventListener('click', function () {
                if (p !== e.innerHTML) {
                    s5.value = e.innerHTML
                    m5.style.visibility = 'hidden'
                }
                else {

                    alert("Source and Destination Should Not be Same!")
                }

            })
        })
        clicked = true
        clicked1 = false
    }
    else if (clicked === true && clicked1 === false) {
        m1.style.visibility = 'hidden'
        m5.style.visibility = 'visible'
        m4.forEach((e) => {
            e.addEventListener('click', function () {
                if (p !== e.innerHTML) {
                    s5.value = e.innerHTML
                    m5.style.visibility = 'hidden'
                }
                else {

                    alert("Source and Destination Should Not be Same!")
                }
            })
        })
        clicked = false
        clicked1 = true

    }
})
m6.addEventListener('click', function () {
    m5.style.visibility = 'hidden'
})
y.addEventListener('click', function () {
    let z = m2.value
    m2.value = R.value
    R.value = z
})
y1.addEventListener('click', function () {
    let z = s4.value
    s4.value = s5.value
    s5.value = z
})