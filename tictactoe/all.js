// const p1 = document.querySelector('#p1')
// const p2 = document.querySelector('#p2')
// const p3 = document.querySelector('#p3')
// const p4 = document.querySelector('#p4')
// const p5 = document.querySelector('#p5')
// const p6 = document.querySelector('#p6')
// const p7 = document.querySelector('#p7')
// const p8 = document.querySelector('#p8')
// const p9 = document.querySelector('#p9')



//start
const boxSeletor = document.querySelectorAll('#section > li')
const resetbtn = document.querySelector('#reset')
let step = 0

//以此陣列控制點選位子的附值
let temp = [0,0,0,0,0,0,0,0,0]
init()

resetbtn.addEventListener('click',resetHandler)
boxSeletor.forEach((element,index) => {
    element.addEventListener('click',function(e){
        let vm = this
        let determine = e.target.className == 'circle' || e.target.className == 'cross'
        if(step % 2 === 0 && !determine){
            vm.className = 'circle'
            vm.textContent = 'O'
            temp[index] = 1 //若是circle則在 以此li的索引 在temp中附值 1
            step++
            if(step > 4){
                checkWinner()
            }
            // result()            
        }else if(step % 2 === 1 && !determine){
            vm.className = 'cross'
            vm.textContent = 'X'
            temp[index] = 10 //若是cross則在 以此li的索引 在temp中附值 10
            step++
            if(step > 4){
                checkWinner()
            }
            // result()
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
    temp = [0,0,0,0,0,0,0,0,0]

}




function checkWinner(){
    //用另一個Array 記錄所有連線位置的加總
    let resultAry = [
                     temp[0]+temp[1]+temp[2],
                     temp[3]+temp[4]+temp[5],
                     temp[8]+temp[7]+temp[8],
                     temp[0]+temp[3]+temp[6],
                     temp[1]+temp[4]+temp[7],
                     temp[2]+temp[5]+temp[8],
                     temp[0]+temp[4]+temp[8],
                     temp[2]+temp[4]+temp[6]
                    ]
    //若加總中 有 3 or 30 則回傳值到變數中
    let foundSum = resultAry.find(item =>{
        return  item === 30 || item === 3
    })
    

    //回傳值若為 3 則 circle win 若為 30 則 cross win
    if(foundSum === 3){
        alert('Winner: circle')
        resetHandler()
    }else if(foundSum === 30){
        alert('Winner: cross')
        resetHandler()
    }else if(step > 7){
        alert('平手')
        resetHandler()
    }

}

//end


// function checkWinner(player){
//     if( p1.className === player && p2.className === player && p3.className === player ||
//         p4.className === player && p5.className === player && p6.className === player ||
//         p7.className === player && p8.className === player && p9.className === player ||
//         p1.className === player && p4.className === player && p7.className === player ||
//         p2.className === player && p5.className === player && p8.className === player ||
//         p3.className === player && p6.className === player && p9.className === player ||
//         p1.className === player && p5.className === player && p9.className === player ||
//         p3.className === player && p5.className === player && p7.className === player){
//         return true
//     }else{
//         return false
//     }
// }



// function result(){
//     if(checkWinner('circle')){
//         alert('Winner is Circle')
//         resetHandler()
//     }else if(checkWinner('cross')){
//         alert('Winner is Cross')
//         resetHandler()
//     }else if(step > 7){
//         alert('平手')
//         resetHandler()
//     }
// }