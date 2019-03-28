$(document).ready(function () {
    let step = 0
    let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    let section = ['123', '456', '789', '147', '258', '369', '159', '357']

    const p1 = $('#p1')
    const p2 = $('#p2')
    const p3 = $('#p3')
    const p4 = $('#p4')
    const p5 = $('#p5')
    const p6 = $('#p6')
    const p7 = $('#p7')
    const p8 = $('#p8')
    const p9 = $('#p9')

    init()

    $('#board > li').on('click', function () {
        if (step % 2 === 0 && !$(this).hasClass('disabled')) {
            $(this).text('O').addClass('disabled circle')
            step++
            if(step > 4){
                result()
            }
        }else if (step % 2 === 1 && !$(this).hasClass('disabled')) {
            $(this).text('X').addClass('disabled  cross')
            step++
            if(step > 4){
                result()
            }
        }else{
            alert('已點擊過,請選另一個位子')
        }
    })
    
    $('#reset').on('click', function () {
        reset()
    })

    function init(){
        reset()
    }

    function result() {
        if (checkWinner('circle')) {
            alert('Winner: O')
            reset()
        } else if (checkWinner('cross')) {
            alert('Winner: X')
            reset()
        } else if (step > 7) {
            alert('平手')
            reset()
        }
    }

    function checkWinner(player) {
        if (p1.hasClass(player) && p2.hasClass(player) && p3.hasClass(player) ||
            p4.hasClass(player) && p5.hasClass(player) && p6.hasClass(player) ||
            p7.hasClass(player) && p8.hasClass(player) && p9.hasClass(player) ||
            p1.hasClass(player) && p4.hasClass(player) && p7.hasClass(player) ||
            p2.hasClass(player) && p5.hasClass(player) && p8.hasClass(player) ||
            p3.hasClass(player) && p6.hasClass(player) && p9.hasClass(player) ||
            p1.hasClass(player) && p5.hasClass(player) && p9.hasClass(player) ||
            p3.hasClass(player) && p5.hasClass(player) && p7.hasClass(player)
        )
            return true;
        else
            return false;

    }

    function reset() {
        $('#board > li').text('+').removeClass()
        step = 0
    }
})





