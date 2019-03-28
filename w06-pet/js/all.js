let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:{
        delay:3000,
    },
    effect: ['slide'],
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

;(function(){
    const liSelector = document.querySelectorAll('.newsBar li')
    const datalist = document.querySelector('.datalist')
    let dataContent = [
        {
            id: 1,
            inner:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem iusto dolores cum aspernatur. Dignissimos praesentium esse eum libero, alias consectetur voluptates architecto enim doloremque aliquam distinctio fuga odit unde?`
        },
        {
            id: 2,
            inner:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error autem impedit tempore nisi eaque repudiandae? Temporibus deleniti fugit tempora quas officia aspernatur nemo iure cumque sunt minima ad officiis atque rem obcaecati commodi dolor, vel laudantium! Mollitia suscipit totam ullam.`
        },
        {
            id: 3,
            inner:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum suscipit fuga officia numquam voluptatum excepturi porro, odit nemo adipisci et, reiciendis necessitatibus beatae minima, eius nam debitis ad aliquid vero perferendis tempora placeat nesciunt eos? Doloribus, suscipit ducimus. Enim.`
        }
    ]

    liSelector.forEach((el , index) => {
        el.addEventListener('click',function(){
            liSelector.forEach(el => {
                el.className = ''
            })
            el.className = 'js_active'

            let str = dataContent[index].inner
            datalist.innerHTML = `<p>${str}</p>`

        })
    })

})()










