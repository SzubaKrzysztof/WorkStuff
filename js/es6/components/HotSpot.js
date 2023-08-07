export default class HotSpot {
    constructor(el, data, settings) {
        this.el = el;
        this.$el = $(el);
        this.data = data;
        this.options = null;
        this.slider = false;
        this.init();
        this.id = null;
    }

    init() {
        this.id = parseInt(Math.random() * 9999);

        this.$el.attr('id', 'slider' + this.id).html(this.beforeInit());

        this.options = {
            infinite: true,
            speed: 1000,
            preloadImages: true,
            mousewheel:  false,
            navigation: {
                nextEl: `.arrows .arrow-next`,
                prevEl: `.arrows .arrow-prev`,
                disabledClass: 'disabled-arrow'
            },
            breakpoints: {
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    slidesPerGroup: 3
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                    slidesPerGroup: 3
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 2
                },
                380: {
                    slidesPerView: 2.4,
                    spaceBetween: 20,
                    slidesPerGroup: 2,
                },
                300: {
                    slidesPerView: 1.4,
                    spaceBetween: 10,
                    slidesPerGroup: 1
                }
            }
        }   

        Object.keys(this.data).forEach((data, i) => {
            if(data in this.options){
                this.options[data] = this.data[data];
            } else if (data == 'size') {
                if (!this.data.size  || this.data.size >= 5) {
                    this.options.breakpoints = {
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                            slidesPerGroup: 3
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                            slidesPerGroup: 3
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            slidesPerGroup: 2
                        },
                        380: {
                            slidesPerView: 2.4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        },
                        300: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                            slidesPerGroup: 1
                        }
                    }
                } else if (this.data.size == 4) {
                    this.options.breakpoints = {
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                            slidesPerGroup: 3
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            slidesPerGroup: 3
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            slidesPerGroup: 2
                        },
                        380: {
                            slidesPerView: 2.4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        }
                    }
                } else if (this.data.size == 3) {
                    this.options.breakpoints = {
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                            slidesPerGroup: 3
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            slidesPerGroup: 3
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            slidesPerGroup: 2
                        },
                        380: {
                            slidesPerView: 2.4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        }
                    }
                } else if (this.data.size <= 2) {
                    this.options.breakpoints = {
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                            slidesPerGroup: 3
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                            slidesPerGroup: 3
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            slidesPerGroup: 2
                        },
                        380: {
                            slidesPerView: 2.4,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        }
                    }
                }
            } 
        });

        this.slider = new Swiper('#slider' + this.id, this.options);
    }

    beforeInit() {
        let html = `<div class="swiper-wrapper">
        `
        this.$el = this.$el.children().map((i, el) => {
            html += `<div class="swiper-slide">${$(el).prop('outerHTML')}</div>`;
        });

        html += '</div>';
        
        html += `<div class="arrows main">
                    <div class="arrow-prev"><i class="zwicon-chevron-left"></i></div>
                    <div class="arrow-next"><i class="zwicon-chevron-right"></i></div>
                </div>`;
                
        return html;
    }
}