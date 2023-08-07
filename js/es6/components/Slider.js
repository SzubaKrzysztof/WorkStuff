export default class Slider {
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
        var labels = this.$el.find('div[data-label]').map((k,x) => $(x).data('label')).get();

        this.id = parseInt(Math.random() * 9999);

        this.$el.attr('id', 'slider' + this.id).html(this.beforeInit());

        this.options = {
            infinite: true,
            speed: 1000,
            preloadImages: true,
            mousewheel:  false,
            loop: true,
            spaceBetween: false
        }   

        Object.keys(this.data).forEach((data, i) => {
            if (data == 'pagination') {
                this.options.pagination = {
                    el: `.swiper-pagination`,
                    clickable: true,
                    renderBullet: function(i, className) {
                        return `<span class="${className}">${labels[i] || labels}</span>`;
                    }
                };
            } else if (data == 'navigation') {
                this.options.navigation = {
                    nextEl: `.arrows .arrow-next`,
                    prevEl: `.arrows .arrow-prev`,
                };
            } else if (data == 'fade') {
                this.options.effect = 'fade';
                this.options.fadeEffect = {
                    crossFade: true
                  }
            } else if (data == 'perview') {
                this.options.breakpoints = {
                    1300: {
                        slidesPerView: this.data.perview.lg,
                    },
                    768: {
                        slidesPerView: this.data.perview.md,
                    },
                    360: {
                        slidesPerView: this.data.perview.sm,
                    }
                }
            } else if (data == 'autoplay') {
                this.options.autoplay = {"delay": this.data.autoplay};
            } else if (data in this.options) {
                this.options[data] = this.data[data];
            } 
        });

        this.slider = new Swiper('#slider' + this.id, this.options);
        this.afterInit();
    }

    beforeInit() {
        let html = `<div class="swiper-wrapper">
        `
        this.$el = this.$el.children().map((i, el) => {
            html += `<div class="swiper-slide">${$(el).prop('outerHTML')}</div>`;
        });

        html += '</div>';

        if (this.data.navigation) {
            html += `<div class="arrows ${this.data.arrows ? this.data.arrows : 'main'}">
                        <div class="arrow-prev"><i class="zwicon-chevron-left"></i></div>
                        <div class="arrow-next"><i class="zwicon-chevron-right"></i></div>`;

            if (this.data.showmoremobile == true) {
                let id = this.id;
                let item = $(`#slider${id} .item`);
                
                let modalHtml = item.map((k, el) => {
                    return `<a href="#" class="item">
                        <img src="${$(el).find('img').get()[0].src}">
                        ${!$(el).attr('data-label') ? '' : `<div class="name">${$(el).attr('data-label')}</div>`}
                    </a>`; 
                }).get().join("");

                html += `<a href="#" class="show-banners-${this.id}" data-modal="#modal-${this.id}" data-show-modal="true">Pokaż wszystkie banery (${this.$el.prevObject.length})</a>`;
                
                new Modal(modalHtml, this.id);
            }

            html += `</div>`;
        }

        if (this.data.pagination) {
            html += `<div class="swiper-pagination"></div>`;
        }

        return html;
    }
    afterInit() {
        Konesso.behaviors.Components.attach();
    }
}