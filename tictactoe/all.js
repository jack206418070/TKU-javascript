const boxSeletor = document.querySelectorAll('#section > li')
const resetbtn = document.querySelector('#reset')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const p5 = document.querySelector('#p5')
const p6 = document.querySelector('#p6')
const p7 = document.querySelector('#p7')
const p8 = document.querySelector('#p8')
const p9 = document.querySelector('#p9')
let step = 0
let flag = false

init()

resetbtn.addEventListener('click',resetHandler)
boxSeletor.forEach(element => {
    element.addEventListener('click',function(e){
        let vm = this
        let determine = e.target.className == 'circle' || e.target.className == 'cross'
        if(step % 2 === 0 && !determine){
            vm.className = 'circle'
            vm.textContent = 'O'
            step++
            result()            
        }else if(step % 2 === 1 && !determine){
            vm.className = 'cross'
            vm.textContent = 'X'
            step++
            result()
        }
    })
})




function init(){
    resetHandler()
}


function resetHandler(){
    boxSeletor.forEach(item =>{
        item.className = ''
        item.textContent = '+'
    })
    step = 0
}

function checkWinner(player){
    if( p1.className === player && p2.className === player && p3.className === player ||
        p4.className === player && p5.className === player && p6.className === player ||
        p7.className === player && p8.className === player && p9.className === player ||
        p1.className === player && p4.className === player && p7.className === player ||
        p2.className === player && p5.className === player && p8.className === player ||
        p3.className === player && p6.className === player && p9.className === player ||
        p1.className === player && p5.className === player && p9.className === player ||
        p3.className === player && p5.className === player && p7.className === player){
        return true
    }else{
        return false
    }
}


function result(){
    if(checkWinner('circle')){
        alert('Winner is Circle')
        resetHandler()
    }else if(checkWinner('cross')){
        alert('Winner is Cross')
        resetHandler()
    }else if(step > 7){
        alert('平手')
        resetHandler()
    }
}