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
            inner:'123'
        },
        {
            id: 2,
            inner:'456'
        },
        {
            id: 3,
            inner:'789'
        }
    ]

    liSelector.forEach((el , index) => {
        el.addEventListener('click',function(){
            liSelector.forEach(el => {
                el.className = ''
            })
            el.className = 'active'
            let str = dataContent[index].inner
            datalist.innerHTML = `<p>${str}</p>`
        })
    })

})()










