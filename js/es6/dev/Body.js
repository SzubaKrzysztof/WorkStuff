export default class Body {
    constructor() {
    }
    attach() {
      //  $('body').addClass(Konesso.settings.PageType + '-page');

      console.log('aaa');
      
      
       this.SideBar();
       
       
      //  this.Basket = new Basket();
      //  this.WishList = new WishList();

      //  this.RunIAIData();

       this.Tabs(); // todo; zmiana na globalną funkcję 

      //  this.ScrollTo();  //todo; zamiec na html5



       this.Listeners();

       this.StickyHeader();

       this.AccordionFooter(); //todo; zmiana na funkcje globalna możliwą do uzycia na innych stronach / czesciach strony

       this.GenerateMenuCategories();

       
       this.isTopInfoClosed(); //todo;


       this.TippyInit();

      
       //  this.GenerateIdsForModalTriggers('[data-modal]'); todo; nie generowac od razu a uzyc trigger do uruchomienia wskazanego modalu

      //  this.ActiveIAIHotspots();
      //  this.IsMenyEmpty();
       
      // todo: search jako osobny komponent; 
      this.SearchProduct();
      this.SearchFields();
       this.ActiveSearchBlock();


       this.hystModalInit(); //todo; check 


       this.MenyHashChange();


       this.ProductQtyDropdown();

       this.QtySelectToInput();
       setTimeout(() => {
        this.GenerateAsideCategories();
       }, 100)
    }

    QtySelectToInput() {
      $(document).on('change', '.qty', (e) => {
         let target = $(e.currentTarget);
         if (target.find('.qty-select :selected').text() == 'więcej') {
              target.html('');
              target.append('<input type="number" class="qty-input">');
              target.find('.qty-input').val(1).focus();
         }
      });
    }

    GenerateIdsForModalTriggers(element) {
        $(element).each((i, el) => {
            console.log(el);
            console.log(i);
            let id = Math.ceil(Math.random() * 2152153);
            $(el).attr('data-modal', `#modal-${id}`);
            console.log(el);
        })
    }

    hystModalInit() {
        let newModal = new HystModal({
            linkAttributeName: 'data-modal'
        })
    }

    checkCategory(name = '') {
        if(this.Breadcrumbs.length && this.Breadcrumbs.indexOf(name) !== -1) {
            return true;
        }
        
        return;
    }

   //  ActiveIAIHotspots() {
   //      if(Konesso.settings.PageType == 'main'){
   //          Konesso.settings.IaIParams.Hotspots = {"format":"json","params":{"action":"get-hotspots-html","zones-names":"main_hotspot_zone1,main_hotspot_zone2,main_hotspot_zone3,main_hotspot_zone4","components":"main_hotspot_zone1,main_hotspot_zone2,main_hotspot_zone3,main_hotspot_zone4","zones-types":"main,main,main,main"}}
   //      } else if (Konesso.settings.PageType == 'projector'){
   //          Konesso.settings.ProductId = $('#p_product_hidden').val();
   //          Konesso.settings.IaIParams.Hotspots = {"format":"json","params":{"action":"get-hotspots-html","zones-names":"p_associated_zone1,p_associated_zone2,p_associated_zone3","components":"products_zone1,products_zone2,products_zone3","zones-types":"projector,projector,projector", "product" : Konesso.settings.ProductId}}
   //          // Konesso.settings.IaIParams.Hotspots = {"format":"json","params":{"action":"get-hotspots-html","zones-names":"p_associated_zone1,p_associated_zone2,p_associated_zone3,p_associated_zone4","components":"products_zone1,products_zone2,products_zone3,products_zone4","zones-types":"projector,projector,projector,projector", "product" : Konesso.settings.ProductId}}
   //      }  else if(Konesso.settings.PageType == 'basketedit'){
   //          Konesso.settings.IaIParams.Hotspots = {"format":"json","params":{"action":"get-hotspots-html","zones-names":"basketedit_hotspot_zone1,","components":"basketedit_hotspot_zone1","zones-types":"basket"}}
   //      }
   //  }

   //  RunIAIData() {
      

   //      this.Basket = new Basket();
   //      this.WishList = new WishList();
   //  }

    GetIAIData(params = false) {
        return;
        var params = params ||  Konesso.settings.IaIParams;
        return new Promise((resolve, reject) => {
            if(!params)
                return;

            $.ajax({
                data : {request: JSON.stringify(params)},
                url: '/ajax/get.php'
            }).success( (x) => {
                resolve(x)
            }).error( (x) => {
                reject(x);
            })
        })
    }

    AccordionFooter() {
      //todo zmienic na jquery
      // jako funkcja globalna Accordion

        const acc = document.getElementsByClassName("accordion");
        let i;

        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function(e) {
                let target = $(e.currentTarget);
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    target.find('i').removeClass('zwicon-chevron-up').addClass('zwicon-chevron-down')
                    panel.style.maxHeight = null;
                } else {
                    target.find('i').removeClass('zwicon-chevron-down').addClass('zwicon-chevron-up')
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
    }

    StickyHeader() {
        var bodyClassT = 'h-top';
        var bodyClassNT = 'h-not-top';
        var bodyClassSU = 'h-s-up';
        var bodyClassSD = 'h-s-down';
        $('body').addClass(bodyClassT)
        $("#MainHeader").addClass('h-sticky ').headroom({
            "offset": 120,
            "tolerance": 100,
            "classes": {
              "initial": "animated",
              "pinned": "slideDown",
              "unpinned": "slideUp"
            },
            onPin : function() {
                $('body').addClass(bodyClassSU).removeClass([bodyClassT, bodyClassSD].join(' '))
            },
            onUnpin : function() {
                $('body').addClass(bodyClassSD).removeClass([bodyClassT. bodyClassSU].join(' '))
            },
            onTop : function() {
                $('body').addClass(bodyClassT).removeClass([bodyClassNT, bodyClassSD, bodyClassSU].join(' '))
            },
            onNotTop : function() {
                $('body').addClass(bodyClassNT).removeClass([bodyClassT, bodyClassSD, bodyClassSU].join(' '))
            },
            onBottom : function() {},
            onNotBottom : function() {}
        });

    }

    SearchFields() {
        var searchOptions = {
            strings: ['Kawa ziarnista', 'Herbata zielona', 'Ekspress przelewowy', 'Zestaw prezentowy dla dziewczyny'],
            typeSpeed: 100,
            backSpeed: 30,
            attr: 'placeholder',
            shuffle: true,
            smartBackspace: true,
            bindInputFocusEvents: true,
            cursorChar: '|',
            loop: true
        }

        let elements = [document.querySelector('.header-main .search-input'), document.querySelector('.meny-konesso #Search .input')]
        elements.forEach(el => {
            new Typed(el, searchOptions);
        }) 
    }

   //  ScrollTo() {
   //      $(document).on('click', '*[data-scroll-to]', function(){
   //          var $this = $(this),
   //              data = $this.data();

   //          if(!$(data.scrollTo).length)
   //              return;

   //          var top = $(data.scrollTo).offset().top;
   //          if(data.scrollMargin)
   //              top -= data.scrollMargin;

   //          window.Konesso.behaviors.Scroll.Smooth(top);
   //      })
   //  }

    isTopInfoClosed() {
        if (!localStorage.getItem('isTopInfoClosed')) { //todo; oznaczenie versji + dorobienie generowania slidow na podstawie dnaych JSON
            $('#MainHeader').prepend(
                `<div class="top-info">
                    <div class="slider" data-component="Slider" data-autoplay="7000">
                        <div class="item">
                            <a href="#"><span>Darmowa dostawa</span></a> 
                        </div>
                        <div class="item">
                            <a href="#"><span>Akcja 22 zł</span></a>
                        </div>
                        <div class="item">
                            <a href="#"><span>Kawy lawazza 30% taniej</span></a>
                        </div>
                    </div>
                    <button><i class="zwicon-close"></i></button>
                </div>`
            )
        }
    }

    SearchProduct() {

      //todo; .main-search-fom
        $(document).on('click', '.search-bar .submit, .meny-konesso #Search .submit', (e) => {
            const target = $(e.currentTarget);
            const searchBar = target.parent().find('input');
            if (searchBar.val().length < 1) {
                e.preventDefault();
                searchBar.css('box-shadow', '0px 0px 5px 0px red'); //todo; to style css 
            } else {
                searchBar.removeAttr('style');
            }
        });
        $(document).on('keydown', '.search-bar .search-input, .meny-konesso #Search .input', (e) => {
            const target = $(e.currentTarget);
            if (target.val().length < 1 && e.keyCode == 13) {
                e.preventDefault();
                target.css('box-shadow', '0px 0px 5px 0px red');
            } else if (e.keyCode == 13 && searchBar.val().length > 1) {
                e.preventDefault();
                target.removeAttr('style');
                window.location.href = `search.php?text=${target.val()}`;
            }
        });
        //search aside menu
        $(document).on('keyup', '.tabs #Search input', () => {
            if ($('.tabs #Search input').val().length > 1) {
               $('.tabs #Search .products').fadeIn().addClass('active');
            } else {
               $('.tabs #Search .products').fadeOut();
            }
      });
    }

   //  IsMenyEmpty() {
   //      $(document).on('click', '.meny-konesso #Fav .remove', () => {
   //          let basket = $('.meny-konesso #Fav .basket');
   //          let fav = $('.meny-konesso #Fav .basket .favourites');
   //          if (fav.children().length == 0) {
   //              basket.addClass('d-flex align-items-center justify-content-center');
   //              basket.css('height', '85vh');
   //              basket.children().remove();
   //              basket.append(`<div class="empty">
   //                              <span>Twoja lista jest pusta</span>
   //                              <i class="zwicon-heart"></i>
   //                              <a class="btn black" href="/basketedit.php?mode=2">Przejdź do ulubionych</a>
   //                          </div>`);
   //          } else {
   //              basket.removeClass('d-flex').removeClass('align-items-center');
   //              $('.meny-konesso #Fav .basket .empty').remove();
   //              basket.removeAttr('style');
   //          }
   //      })

   //      $(document).on('click', '.meny-konesso #Cart .remove', () => {
   //          let basket = $('.meny-konesso #Cart .basket');
   //          let prods = $('.meny-konesso #Cart .basket .products');
   //          if (prods.children().length == 0) {
   //              basket.addClass('d-flex align-items-center justify-content-center');
   //              basket.css('height', '85vh');
   //              basket.children().remove();
   //              basket.append(`<div class="empty">
   //                              <span>Twój koszyk jest pusty</span>
   //                              <i class="zwicon-shopping-cart"></i>
   //                              <a class="btn black" href="/basketedit.php?mode=1">Przejdź do koszyka</a>
   //                          </div>`);
   //          } else {
   //              basket.removeClass('d-flex').removeClass('align-items-center');
   //              $('.meny-konesso #Cart .basket .empty').remove();
   //              basket.removeAttr('style');
   //          }
   //      })
   //  }

    ProductQtyDropdown() {
      //todo kod jako przyklad
      $('input.qty-product').get().forEach(x => {
         html = `<select name="xxx"  class="qty-select">`
           
         for(let i= 1; i<=15;i++)
            html += `<option value="${i}">${i}</option>`
           
            html += `<option value="x">więcej</option>
         </select>`
         x.outerHTML = html;
      })

      $(document).on('change', '.qty-select', (e) => {
         $t = $(e.currentTarget);
         if($t == 'x'){
            $t.get()[0].outerHTML = '<input name="xxx" value="1">';
         }
      })

     
    }

    Tabs() {
      //w chwili obecnej jest to taby sidemenu - a powinno byc rozgraniczenie
      //todo; zmienic na funkcje globalna 
      
        $(document).on('click', '*[data-tab]', function(e){
            var tab_id = $(this).attr('data-tab');
            let tab_title = $(this).attr('data-title');
            var $target = $("#"+tab_id);
            var $tabs = $target.parents('.tabs');

            if(!$target.length || !$tabs.length) {
                return;
            }
        
            $('.close-panel .title').html(tab_title);
            $('.close-panel .block i').attr('class', tab_id == 'Cart' ? 'zwicon-shopping-cart' : tab_id == 'Fav' ? 'zwicon-heart' : tab_id == 'Search' ? 'zwicon-search' : tab_id == 'Menu' ? 'zwicon-hamburger-menu' : 'zwicon-user');
            $('.close-panel .title').attr('href', tab_id == 'Cart' ? '#koszyk' : tab_id == 'Fav' ? '#ulubione' : tab_id == 'Search' ? '#szukaj' : '#'); 
            $tabs.find('.item').removeClass('active');
            $tabs.find('*[data-tab="'+tab_id+'"]').addClass('active');
            $tabs.find('.wrapper').removeClass('active');
            $target.addClass('active');
            $('body').css('overflow', 'hidden');
        })
    }

    Scrollable() {
        $(document).on( 'mousewheel DOMMouseScroll', '.scrollable', function ( e ) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
        
            this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
            e.preventDefault();
        });
    }

    GenerateMenuCategories() {
        let json = window.JSONS.MainCategories;
 
        json.forEach(el => { 
            if (el.label == 'Infolinia' || el.label == 'Konesso') {
                return;
            }
            let html = `<li class="item">
                    <span>${el.label}</span>
                    
                    ${el.children  ? 
                        `<div class="content">
                            <div class="types">
                                ${el.children.map(es => {
                                    if (es.children != undefined) {
                                        return `<div class="block ${es.children.length >= 17 ? 'big-element' : ''}">
                                            <ul>
                                                <li><b>${es.label}</b></li>
                                                ${es.children.map(ex => {
                                                        return `<li><a href="#">${ex.label}</a></li>`;
                                                    }).join("")
                                                }
                                            </ul>
                                        </div>`
                                    } else {
                                        return '';
                                    }
                                }).join("")}
                            </div>
                            ${el.children.map(ex => {
                                if (ex.label == 'Promo' || ex.html) {
                                    return ex.html;
                                }
                            }).join("")}
                        </div>` : ''}
                </li>`;

            $('.menu-categories .list').append(html); //todo;
        });
    }

    TippyInit() {
      //   $(document).ready(function(){
      //       window.Konesso.behaviors.init();
        
      //    $('[data-tippy-content]').each((i, el) => {
      //         tippy($('[data-tippy-content]').get(), {
      //             content: $(el).data('tippy'),
      //             animation: 'shift-away',
      //             arrow: true,
      //             duration: 2500
      //         });
      //     })
      //   });

      tippy('body *[data-tippy-content]')
    }

    ActiveSearchBlock() {
        $(document).on('click', '.header-main .search-bar', () => {
            if ($(window).width() < 768) {
                return;
            } else {
                $('.search-window').fadeIn().addClass('active');
                $('.header-main .main-overlay').addClass('active');
                $('body').css('overflow', 'hidden');
            }
        });
        $(document).on('click', '.header-main .main-overlay', () => {
                $('.search-window').fadeOut().removeClass('active');
                $('.header-main .main-overlay').removeClass('active');
                $('body').removeAttr('style');
        });
        $(document).on('keyup', '.header-main .search-bar .search-input', () => {
            if ($('.search-bar .search-input').val().length > 1) {
                $('.search-window').addClass('searching');
            } else {
                $('.search-window').removeClass('searching');
            }
        });
    }

    MenyHashChange() {
      this.hashVar = [];
      //słuzy do uzycia przegladarkowego cofnij
//todo; breakpoint mobile
//nie dziala zamnkniecie calkowiete menu mobile
        $(document).on('click', '.close-panel .zwicon-close', () => {
            $('.mobile-menu li').removeClass('current');
            $('body').css('overflow-y', 'visible');
            this.Meny.close();
        });

        $(document).on('click', '.trigger-menu', (e) => {
            window.history.pushState([], "menu-href", '#' + $('.s-menu-panel-root').data('id'));
            this.hashVar.push($('.s-menu-panel-root').data('id'));
        });

        $(document).on('click', '.meny-konesso .s-menu-nav', (e) => {
            if ($(e.currentTarget).hasClass('s-menu-back')) {
                return;
            }
            window.history.pushState([], "menu-href", '#' + $(e.currentTarget).data('id'));
            this.hashVar.push($(e.currentTarget).data('id'));
        });

        // meny close 

        $('.menuJSON') //todo close trigger-menu

        $('.mobile-menu .item').each((i, el) => {
            if ($(el).hasClass('trigger-menu')) {
               return;
            } 
            $(el).data('hash', `s-menu-panel-${Math.ceil(99999 * Math.random())}`);
         })

         $(document).on('click', '.mobile-menu .item', (e) => {
            let target = $(e.currentTarget);
            if (target.hasClass('trigger-menu')) {
               return;
            }
            window.history.pushState([], "menu-href", '#' + target.data('hash'));
         });

         //

        $(window).on('hashchange', (e) => {
            if (e.originalEvent.newURL == e.originalEvent.oldURL) {
                $(`a[href="${window.location.hash}"]`).eq(0).trigger('click');
            }
            $(`a[href="${window.location.hash}"]`).eq(0).trigger('click');

            if (!$('.mobile-menu .trigger-menu').hasClass('current')) {
               $(`.zwicon-close`).eq(0).trigger('click');
            }

            $('.filter-modal .s-menu-back').click();
            $('.filter-modal .modal__close').click();
        });
    }

    Listeners() {
        // $(document).on('click', '.search-trigger, #TopSearch form a', this.TopSearchTrigger.bind(this));
        $(document).on('click', '*[data-meny-open]', this.ActiveMenyTab.bind(this));
        $(document).on('click', '.meny-overlay, *[data-meny-close]', this.MenyReset.bind(this));
        $(document).on('click', '.add-to-basket', this.AddToBasket.bind(this));
        $(document).on('click', '.add-to-favs', this.AddToWishList.bind(this));


        // $(document).on('click', '[data-modal]', this.Modal.bind(this));

        //top info bar
        $(document).on('click', '.top-info .zwicon-close', () => {
            $('.top-info').remove();
            localStorage.setItem('isTopInfoClosed', 'true');
        });

        $(document).on('scroll', () => {
            if ($(window).scrollTop() >= 200) {
                $('.top-info').addClass('hidden');
            }
        })  
        //

        //hide menu
        $(document).on('click', '.menu-categories .list .back', () => {
            $('.menu-trigger').css('pointer-events', 'none');
            setTimeout(() => {
                $('.menu-trigger').removeAttr('style');
            }, 1000)
        });
        //

        //cart aside menu
        $(document).on('click', '.meny-konesso #Cart .item .remove', (e) => {
            let $target = $(e.currentTarget);
            $target.parent().remove();
        });
        //

        //fav aside menu
        $(document).on('click', '.meny-konesso #Fav .item .remove', (e) => {
            let $target = $(e.currentTarget);
            $target.parent().remove();
        });
        //

        // categories menu
        $(document).on('mouseenter', '.menu-categories', () => {
            $('.menu-categories').addClass('active');
        })
        $(document).on('mouseleave', '.menu-categories', () => {
            $('.menu-categories').removeClass('active');
        });
        //

        
        //

        //tablet
        if ($(window).width() >= 768 && $(window).width() <= 992) {
            $(document).on('click', '.menu-trigger', () => {
                this.Meny.open();
            });
        }
        //

        //show more additional info
        $(document).on('click', '.additional-more', (e) => {
            if ($(e.currentTarget).hasClass('active')) {
                $('.additional-info').css('height', '300px');
                $(e.currentTarget).removeClass('active');
                $(e.currentTarget).find('i').removeClass('zwicon-chevron-up').addClass('zwicon-chevron-down');
            } else {
                $('.additional-info').css('height', '100%');
                $(e.currentTarget).addClass('active');
                $(e.currentTarget).find('i').removeClass('zwicon-chevron-down').addClass('zwicon-chevron-up');
            }
        });
        //

        //show all banners
        $(document).on('click', '.banner-main .show-banners', () => {
            $('.main-modal').addClass('active');
        });
        //

        $(document).on('click', '.user-login, .loginPopUpShow', (e) => {
            e.preventDefault();
            var content ;
            var link = '/login.php';
            $.ajax( {
                url: link + '?set_render=content'
            }).done( (x) => {
                content = $(x).find('#content').html()
                if(!content || !content.length)
                    window.location.href = link;

                $('body').dialog({
                    content: content,
                    wrapperClass: 'signin-dialog',
                    fixed: true,
                    fitToWindow: true,
                    animate: true,
                    maxWidth: 812,
                    modal: true,
                });
            }).error((x) => {
                window.location.href = link;
            })

            return;
        })

        $(document).on('click', '#menuJSON a', (e) => {
            if(e.target.href && e.target.className != 's-menu-nav' )
                window.location.href = e.target.href;
        })

        $(document).on('keyup', '.menu-search-text', _.debounce((e) => {
            var $target = $(e.target);
            var val = $target.val();
            var $container = $target.parents('.search-container');
            var data = $target.data();
            var $results = $container.find('.search-results');
            var options = {
                items: data.items || 10,
                categories: data.categories && data.categories == true ? true : false,  
            }
           
            if(val.length < 2 || !$container.length){
                $results.html('');
                return;
            }
            
            if(!$results.length){
                $container.append('<div class="search-results"></div>');
                $results = $container.find('.search-results');
            }

            $results.html('<div class="d-flex align-items-center justify-content-center flex-column mt-3 mb-3 pt-3 pb-3"><i class="fi fi-coffee-beans icon-spin icon-3x"></i><div class="mt-3">wyszukiwanie...</div></div>');

            this.SearchTextIAI(val, false, options.items).then((data) =>  {

                if(data.error)  {
                    this.SearchError($results, data.results)
                    return;
                }

                
                $results.html(data.result);

                $("#TopSearch .search-results > ul").mousewheel(function(event, delta) {

                    this.scrollLeft -= (delta * 100);
                  
                    event.preventDefault();
              
                 });

            }).catch( (err) => {
                if(err.error)  {
                    this.SearchError($results, err.results)
                    return;
                }
            })
        }, 300))

        if ($(window).width() < 768) {
            $('.search-bar').attr('data-meny-open', true).attr('data-tab', 'Search');
        }

        this.Scrollable();

    }

    AddToBasket(e) {
        e.preventDefault();
        // var $product;
        // if($(e.currentTarget).data('productId'))
        //     $product = $(e.currentTarget)
        // else 
        //     $product = $(e.currentTarget).parents('.product')

        // var id = $product.data('productId')
        // if(!id)
        //     return false;

        // var rmv = $product.data('rmv') ? 1 : 0;
        // var qty = $product.data('qty') || 1;
        // var additional = $product.data('additional') || 1;

        // if($product.data('qtyTarget') && $($product.data('qtyTarget')).length)
        //     qty = $($product.data('qtyTarget')).val();

        // if(rmv)
        //     qty = 0;

        // this.Basket.Loading();
        // new Basket();
        window.Basket.ChangeBasket();
        // id, 1, qty, rmv, additional

    }

    AddToWishList(e) {
        // e.preventDefault()
        // var $product;
        // if($(e.currentTarget).data('productId'))
        //     $product = $(e.currentTarget)
        // else 
        //     $product = $(e.currentTarget).parents('.product')

        // var id = $product.data('productId')
        // if(!id)
        //     return false;

        // var rmv = $product.data('rmv') ? 1 : 0;
        // var qty = $product.data('qty') ? $product.data('qty') : 1;

        // if(rmv)
        //     qty = 0;

        // this.WishList.Loading();
        $(document).on('click', '.add-to-favourites', (e) => {
            e.preventDefault();
            $('#Fav .basket').append(`<a href="#" class="btn green">Przejdź do ulubionych</a>                  
            <div class="favourites">
                  <div class="item">
                     <a href="#" class="image">
                        <img src="img/coffee-product.jpg" alt="">
                     </a>
                     <div class="title">Kawa Ziarnista Java Kenya Muhara Magomano 250g</div>
                     <div class="sell">
                        <div class="qty">
                              <i>Ilość:</i>
                              <span>1</span>
                        </div>
                        <div class="price">
                              <i>Cena:</i>
                              <span>82.00 zł</span>
                        </div>
                     </div>
                     <button class="remove">
                        <i class="zwicon-trash"></i>
                     </button>
                  </div>
                  <div class="item">
                     <a class="image" href="#">
                        <img src="img/coffee-product.jpg" alt="">
                     </a>
                     <div class="title">Kawa Ziarnista Java Kenya Muhara Magomano 250g</div>
                     <div class="sell">
                        <div class="qty">
                              <i>Ilość:</i>
                              <span>1</span>
                        </div>
                        <div class="price">
                              <i>Cena:</i>
                              <span>82.00 zł</span>
                        </div>
                     </div>
                     <button class="remove">
                        <i class="zwicon-trash"></i>
                     </button>
                  </div>
            </div>`);
            this.Meny.open();
            $('[data-tab="Fav"]').trigger('click');
        }); 

        this.WishList.ChangeBasket(id, 2, qty, rmv);
       
    }

    SideBar() {
        this.MenyWidthNormal = 350;
        this.MenyWidthMobile = '100%';
        this.MenyWidthLarge = 600;
        this.MenyOptionsChanged = false;

        let $menu = $('.meny-konesso');
        let $content = $('.meny-content');

        if(!$menu.length || !$content.length)
            return;
        
        this.MenyOptions = {
            menuElement: $menu[0],
            contentsElement: $content[0],
            height: $(window).width() < 768 ? '100%' : '',
            position: $(window).width() < 768 ? 'bottom' : 'left',
            width: $(window).width() < 768 ? this.MenyWidthMobile : this.MenyWidthNormal,
            threshold: 20,
            overlap: 0,
            angle: 0,
            mouse: true,
            touch: false
        }

        this.Meny = Meny.create(this.MenyOptions);
    }

    GenerateAsideCategories() {
        $(".menuJSON").slidingMenu({
            className : "gn-menu",
            backLabel: 'Wróć',
            dataJSON: window.JSONS.MainCategories
        })
    }

    GenerateIdsForModalTriggers(element) {
        $(element).each((i, el) => {
            let id = Math.ceil(Math.random() * 2152153);
            $(el).attr('data-modal', `#modal-${id}`);
        })
    }

    MenyReset(){
        this.MenyOptions.mouse = true;
        this.MenyUpdateOptions();
        this.MenyOptionsChanged = false;
    }

    MenyUpdateOptions(){
        if(this.Meny.isOpen()) {
            this.Meny.close()
        }

        this.Meny.configure(this.MenyOptions)
        this.MenyOptionsChanged = false;
    }

    CartTab(){
        if (this.MenyOptions.width != this.MenyWidthLarge) {
            this.MenyOptions.width = this.MenyWidthLarge;
            this.MenyOptionsChanged = true;
        }

        if ($('#Cart').hasClass('active')) {
            $('#Cart').addClass('active');
            $('li[data-tab="Cart"]').addClass('active');
        }
    }

    ActiveMenyTab(x){
        var $x = $(x.currentTarget);
        var data = $x.data();

        var find = false;

        x.preventDefault();

        if(data.menyOpen) {
            this.MenyOptions.mouse = false;
            this.MenyOptionsChanged = true;
        }

        if(data.tab == 'Cart') {
            this.CartTab();
        } else if(this.MenyOptions.width != this.MenyWidthNormal) {
            this.MenyOptions.width = this.MenyWidthNormal;
            this.MenyOptionsChanged = true;
        }

        if(this.MenyOptionsChanged) {
            this.MenyUpdateOptions();
            this.MenyOptionsChanged = false;
        }

        if(!this.Meny.isOpen()) {
            this.Meny.open();
        }

        if($x.is('a')){
            if(find && find.length) {
                find.trigger('click');
            }
            return;
        }
        
        if ($(window).width() <= 768) {
            if(!$x.hasClass('current')) {
                $('.mobile-menu li').removeClass('current');
                $x.addClass('current');
            } else {
                $x.removeClass('current');
                this.Meny.close();
            }
        }
    }
  }
