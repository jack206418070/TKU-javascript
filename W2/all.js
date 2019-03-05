let btn01 = document.querySelector('play1')
let btn02 = document.querySelector('play2')
let btn03 = document.querySelector('play3')
let btn04 = document.querySelector('play4')
let btn05 = document.querySelector('play5')


function changeSrc(num){
    console.log(num)
}



btn01.addEventListener(click,changeSrc(1))
btn02.addEventListener(click,changeSrc(2))
btn03.addEventListener(click,changeSrc(3))
btn04.addEventListener(click,changeSrc(4))
btn05.addEventListener(click,changeSrc(5))


