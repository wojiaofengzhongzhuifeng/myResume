
/**
!function(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
}()
 */

 //使用 MVC 思想封装代码
 !function(){
    var view = document.querySelector("div.mySlider")

    var controller = {
        view: null,
        init: function(view){
            this.view = view
            this.createSwiper()
        },
        swiperOptions: {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
    
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
    
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        },
        createSwiper: function(){
            var mySwiper = new Swiper ('.swiper-container', this.swiperOptions)             
        }
    }

    controller.init(view)
 }()


