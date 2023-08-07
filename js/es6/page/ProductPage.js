export default class ProductPage {
    attach() {
        if (window.Konesso.settings.PageType != 'product') {
            return;
        }

        this.ProductSlider();
        this.GenerateBuyerInfoModal();
        this.TriggerOpinionsModal();
        this.SideBarAdditionalInfo();
        this.OpinionsList();
    }

    OpinionsList() {
        let options = {
            pagination: true,
            page: 7,
            //valueNames: ['date-sort', 'opinion-sort', 'text'],
        };

        window.opinionList = new List('list-opinion', options);
        
        console.log(window.opinionList);
        var monkeyList = new List('test-list', {
            valueNames: ['name'],
            page: 3,
            pagination: true
          });
        // $(window).on('hashchange',() => {
        //     let hash = window.location.hash.substr(1);
        //     if (hash == 'date-asc') {
        //         window.opinionList.sort('date-sort', { order: "asc" });
        //     } else if (hash == 'date-desc') {
        //         window.opinionList.sort('date-sort', { order: "desc" });
        //     } else if (hash == 'opinion-asc') {
        //         window.opinionList.sort('opinion-sort', { order: "desc" });
        //     } else if (hash == 'opinion-desc') {
        //         window.opinionList.sort('opinion-sort', { order: "asc" });
        //     }
        // });

        $(document).on('click', '.product-panel .product-additional li', (e) => {
            let target = $(e.currentTarget);
            $('.meny-product-info').html("");
            $('.meny-product-info').html(target.find('.modal-content').html());
            this.MenyProduct.open();
        });

        $(document).on('click', '.meny-overlay', () => {
            this.MenyProduct.close();
        });

        $(document).on('click', '.modal-close', () => {
            this.MenyProduct.close();
        });
    }

    SideBarAdditionalInfo() {
        this.MenyProduct = Meny.create({
            menuElement: document.querySelector('.meny-product-info'),
            contentsElement: document.querySelector('.meny-content'),
            position: 'right',
            width: $(window).width() < 768 ? '100%' : '',
            angle: 0,
            threshold: 0,
            overlap: 0,
            transitionDuration: '0.5s',
            transitionEasing: 'ease',
            gradient: 'rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)',
            mouse: false,
            touch: false
        });
    }

    TriggerOpinionsModal() {
        $(document).on('click', '.product-panel .info .first-wrapper .opinions', () => {
            $('.opinions-modal').click();
        })
    }

    GenerateBuyerInfoModal() {
        $('.product-panel .info .checkout .item [data-modal]').each((i, el) => {
            new Modal($(el).find('.modal-content').html(), $(el).data('modal').slice($(el).data('modal').indexOf('-') + 1), 'buyer-info-modal');
        });
    }

    ProductSlider() {
        let productImagePagination = new Swiper(".product-image-pagination", {
            spaceBetween: 10,
            slidesPerView: 4.6,
            freeMode: true,
            watchSlidesProgress: true,
          }); 
        let productImageSlider = new Swiper(".product-image-slider", {
            spaceBetween: 10,
            speed: 1000,
            navigation: {
                nextEl: ".product-button-next",
                prevEl: ".product-button-prev",
            },
            on: {
                slideChange: function() {
                    if (this.activeIndex == 3) {
                        let url = 'https://konesso-gfx.pl/' + '360/';
                        let obj = $('.product-image-slider');
                        inject_orbitvu("viewer_content_360", url + "_files/", "", {
                            ovus_folder: url + 7686 + "/",
                            content2: "yes",
                            width: obj.length ? obj.width() : "auto",
                            height: obj.length ? obj.height() : "auto",
                            use_config_url: "no",
                            teaserplay_overlay_color: "0x25500000",
                            color_theme: "",
                            mousewheel: "no",
                            disable_nosize: "yes",
                            loader: "yes",
                            transition: "blur",
                            btn_drag_rotate: "no",
                            btn_info: "no",
                            max_scale: "1",
                            vmove_dir: "down",
                            html5_initial_info: "yes",
                            border: "no",
                            ovskin: "no",
                            vmove: "yes",
                            rotate_dir: "right",
                            auto_rotate_dir: "right",
                            lang: "pl",
                            gui_background: "0xffffff00",
                            gui_foreground: "0x000000ff",
                            gui_foreground_active: "0x999999ff",
                            style: "0",
                            teaser: "autorotate",
                            preload: "yes",
                            border_color: "0xffffff",
                            background_color: "0xffffffff",
                            frame_rate: 7,
                            html5_hint: "yes",
                            continous: "yes",
                            border_frame: "1",
                            buttons_type: "desktop",
                            preload_width: "auto",
                            preload_height: "auto",
                            hires_support: "yes",
                            report_bugs: "no",
                            auto_drag_switch: "yes",
                            partial_load: "yes",
                            hires_forced_zoom: "yes"
                        })
                    }
                }
            },
            thumbs: {
                swiper: productImagePagination,
            },
        }); 
    }
}