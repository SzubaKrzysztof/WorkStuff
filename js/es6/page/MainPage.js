export default class MainPage{
    attach(){
        if (window.Konesso.settings.PageType != 'main') {
            return;
        }

        this.GenerateAsideCategories();
        this.KnowledgeBaseSlider();
        this.TurnOffLinksRecepies();
    }

    GenerateAsideCategories() {
        $(".menuJSON").slidingMenu({
            className : "gn-menu",
            backLabel: 'Wróć',
            dataJSON: window.JSONS.MainCategories
        })
    }

    KnowledgeBaseSlider() {
        let swiper2 = new Swiper(".knowledge-base .knowledge-pagination", {
            spaceBetween: 10,
            direction: 'vertical',
            watchSlidesProgress: true,
            slidesPerView: 4,
            allowTouchMove: false,
            speed: 1000
        });

        let swiper = new Swiper(".knowledge-base .knowledge-slider", {
            spaceBetween: 10,
            speed: 1000,
            thumbs: {
                swiper: swiper2,
            },
        });
    }

    TurnOffLinksRecepies() {
        $(document).on('click', '.knowledge-pagination .item-pagination', (e) => {
            if ($(window).width() >= 768) {
                e.preventDefault();
            }
        })
    }

    RunIAIData(){
        if(!Konesso.settings.IAIData)
            return;

        // if(Konesso.settings.Hotspots.main_hotspot_zone1){
        //     this.HeroProducts(Konesso.settings.Hotspots.main_hotspot_zone1);
        //     Konesso.settings.Hotspots.main_hotspot_zone1.attached = 1;
        // }
        // this.HotSpotInit(Konesso.settings.Hotspots.main_hotspot_zone2, '#HotSpotMainZone2' )

        // this.HotSpotInit(Konesso.settings.Hotspots.main_hotspot_zone3, '#HotSpotMainZone3' )

        // this.HotSpotInit(Konesso.settings.Hotspots.main_hotspot_zone4, '#HotSpotMainZone4' )

        // if(this.HotSpotsRecommendedData()){
            
        //     this.HotSpotsRecommendedSlider(1, '#AboutUs', true);

        //     this.HotSpotsRecommendedSlider(3, '#HotSpotMainZone4', false);

        //     this.HotSpotsRecommendedSlider(0, '#HotSpotMainZone3', true);

        // }

        Konesso.behaviors.Components.attach()
    }

    // HotSpotsRecommendedData(){
    //     if(!Konesso.settings.IAIData)
    //         return;

    //     Konesso.settings.HotspotsMain = Konesso.settings.MainPage.hotspots;

    //     if(!Konesso.settings.HotspotsMain) return;

    //     for(var i in Konesso.settings.Hotspots){
    //         if(Konesso.settings.Hotspots[i].Products){
    //             Konesso.settings.Hotspots[i].Products.forEach( (v,k) => {
                    
    //                 if(v.Trails.length){
    //                     Konesso.settings.HotspotsMain.forEach( (item) => {
    //                         if(item.Ids.indexOf(v.Id) !== -1)
    //                             return;
            
    //                         v.Trails.forEach( (g) => {
    //                             if(g.GroupName == item.GroupName){
    //                                 if(g.Name == item.Value){
    //                                     item.Products.push(v)
    //                                     item.Ids.push(v.Id)
    //                                 } else if(g.Siblings && g.Siblings.length) {
    //                                     g.Siblings.forEach( (s) => {
    //                                         if(s.Name == item.Value){
    //                                             item.Products.push(v)
    //                                             item.Ids.push(v.Id)
    //                                         }
    //                                     })
    //                                 }
    //                             }
    //                         })
    //                     })
    //                 }
    //             })
    //         }
    //     }

    //     return Konesso.settings.HotspotsMain;
    // }

    // HotSpotsRecommendedHTML(index = 2){
    //     var html = '';
    //     if(!Konesso.settings.HotspotsMain || !Konesso.settings.HotspotsMain[index])
    //         return html;
        
    //     var item = Konesso.settings.HotspotsMain[index];

    //     html += `
    //     <section id="${item.SectionId}" class="rec-p b-slider">
    //     <div class="swiper-container">
    //     <div class="swiper-wrapper">`
    //         item.Products.forEach( (p) => {
    //             var przygotowanie = [];
    //             var img = p.Images.Normal || getProductIcon(p.Id, {name: p.Name}) ;
    //             var s = img.split('.')
    //             if(s.length == 2 && (s[1] == 'jpg' || s[1] == 'png') ){
    //                 img = '/pol_pl_' +  slugify(p.Name) + '-' + p.Id + '_1.' + s[1];
    //             }
    //             html += `<div class="swiper-slide product product-${p.Id}" data-product-id="${p.Id}"">
                    
    //                 <div class="s-block">
    //                     <div class="s-block-img text-center img-holder" data-swiper-parallax-x="-70%">
    //                         <a href="${p.Link}" title="${p.Name}"><img data-src="${(p.Images.Normal || getProductIcon(p.Id, {name: p.Name}))}" data-srcset="${img}" class="swiper-lazy"><div class="swiper-lazy-preloader"></div></a>
    //                         ${Konesso.settings.ProductBtns}
    //                     </div>
    //                     <div class="s-block-txt desc">
    //                         <div class="b-title">${item.Title}</div>
    //                         <a href="${p.Link}" title="${p.Name}" class="s-title" data-swiper-parallax-x="-10%">${p.Name}</a>
    //                         <div class="prices"><span class="price">${p.Prices.PriceFormat}</span></div><p data-swiper-parallax-x="-20%" class="paragraphe">${p.ShortDesc.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/<[^>]*>?/gm, '')}</p>

    //                         <div class="d-flex justify-content-between mt-5" >
                            
    //                             <div class="sposoby">
    //                                 <h5 class="mb-4 cechy">Najważniejsze cechy:</h5>
    //                                 <ul class="trails">`;
    //                                 p.Trails.forEach( (t) => {
    //                                     if(t.GroupId == 1335603878){
    //                                         przygotowanie = t;
    //                                     }
    //                                     if(this.showGroup.indexOf(t.GroupId) === -1)
    //                                         return;
                                            
    //                                     html += `<li class="g-${t.GroupId}">
    //                                         <span class="g-name">${t.GroupName}:</span>
    //                                         <span class="g-params">
    //                                             <a href="${t.Link}" class="g-param">${t.Name}</a>`
    //                                             if(t.Siblings && t.Siblings.length){
    //                                                 t.Siblings.forEach( (g) => {
    //                                                     html += `, <a href="${g.Link}" class="g-param">${g.Name}</a>`
    //                                                 })
    //                                             }
                                            
    //                                     html += `</span></li>`;
    //                                 })
                                
    //                             html += `</ul></div>`;
    //                             if(przygotowanie && przygotowanie.Name){
    //                                 html += `<div class="sposoby" data-swiper-parallax-x="-10%" >
    //                                     <h5 class="mb-4 cechy">Sposoby przygotowania:</h5>
    //                                     <div class="d-flex align-items-center justify-content-between sposoby-2">
    //                                         <a href="${przygotowanie.Link}" title="${przygotowanie.Name}"><i class="${SposobyIconByName(przygotowanie.Name)}"></i></a>
    //                                     `
    //                                     if(przygotowanie.Siblings && przygotowanie.Siblings.length){
    //                                         przygotowanie.Siblings.forEach( (x) => {
    //                                             html += `<a href="${x.Link}" title="${x.Name}"><i class="${SposobyIconByName(x.Name)}"></i></a>`
    //                                         })
    //                                     }
    //                                     html += `</div>`;
    //                                 html += `</div>`
    //                             }
    //                         html += '</div>';
    //                         html += `
    //                             <div class="more-info"><a href="${p.Link}" class="btn main arrow right" title="${p.Name}"><span>Więcej informacji</span></a></div>
    //                     </div>
    //                 </div>
    //             </div>`
    //         })

    //     html += ` </div>
    //     <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"><i class="ico-sl-arrow-right" aria-hidden="true"></i></div>
    //     <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Prev slide"><i class="ico-sl-arrow-left" aria-hidden="true"></i></div>
    //     </div>`
    //     if(item.HTML)
    //         html += item.HTML;

    //     html += `</section>`

    //     return html;
    // }

    // HotSpotInit(Zone, target = false){
    //     if(!Zone || !$(target).length || !Zone.Products || !Zone.Products.length)
    //         return;

    //     var HotSpot = new HotSpotZone(Zone.Products, { 
    //         Name: Zone.Name,
    //         Link: Zone.Link
    //     });

    //     Zone.attached = true;
        
    //     html = HotSpot.HotspotCreateHtml();
    //     $(target).eq(0)[0].outerHTML = html;
    // }

    // HotSpotsRecommendedSlider(item = 0, target = '#Layout', before = true){
      
    //     html = this.HotSpotsRecommendedHTML(item)
    //     if(!html || !$(target).length)
    //         return;
        
    //     if(before)
    //         $(target).eq(0).before(html);
    //     else
    //         $(target).eq(0).after(html);

    //     var options = {
    //         direction: "horizontal",
    //         slidesPerView: 1,
    //         paginationClickable: !0,
    //         spaceBetween: 0,
    //         autoHeight:1,
    //         preloadImages: true,
    //         watchSlidesVisibility: true,
    //         updateOnImagesReady:true,
    //         lazy: {
    //             loadPrevNext: true,
    //             // loadOnTransitionStart:true,
    //         },
    //         autoplay: 0,
    //         // autoplay: {
    //         //     delay: 16500,
    //         // },
    //         loop: 0,
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //         mousewheel:  false, //window.innerWidth < 1200 ? false : { sensitivity: 5, releaseOnEdges: true },
    //         // on: {
    //         //     init: function() {
    //         //         console.log(this);
    //         //         this.slideNext()
    //         //     },
    //         // }
            
    //     }
        
    //     if(window.innerWidth >= 1200) {
    //         options.parallax = !0;
    //         options.speed = 1500;
    //     }
        
    //     var container = '#' + Konesso.settings.HotspotsMain[item].SectionId +' .swiper-container';
    //     Konesso.settings.HotspotsMain[item].slider =  new Swiper(container, options);

    //     // if(Konesso.settings.HotspotsMain[item].slider){
    //     //         $(container)
    //     //         .on('mouseenter', (e) => {
    //     //             Konesso.settings.HotspotsMain[item].slider.autoplay.stop()
    //     //         })
    //     //         .on('mouseleave', (e) => {
    //     //             Konesso.settings.HotspotsMain[item].slider.autoplay.start()
    //     //         })
    //     // }
    // }

    // BlogSlider2()
    // {
    //     if(!$('#main-blog').length) return;

    //     $('.as-wrap').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         adaptiveHeight: true,
    //         infinite: true,
    //         asNavFor: '.ats-wrap',
    //       });
    //       $('.ats-wrap').slick({
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         asNavFor: '.as-wrap',
    //         vertical: true,
    //         verticalSwiping: true,
    //         focusOnSelect: true,
    //         infinite: false,
    //       });

    // }

    // BlogSlider(){
    //     var slider = "#MainBlogSlider .swiper-container";

    //     $(slider + ' .date').each(function() {
    //         var obj = $(this);
    //         var txt = app_shop.fn.news_data({
    //             data: obj.text(),
    //             month_names: iaical_monthNames2,
    //             format: '<span>%d</span> <b>%m</b>'
    //         });
    //         if (txt)
    //             obj.html(txt);
    //     });

    //     var options = {
    //         direction: "horizontal",
    //         slidesPerView: 1,
    //         paginationClickable: !0,
    //         spaceBetween: 0,
    //         autoplay: 2500,
    //         loop: 0,
    //         watchSlidesVisibility:true,
    //         preloadImages: true,
    //         lazy: {
    //             loadPrevNext:true,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //         mousewheel:  false, //window.innerWidth < 1200 ? false : {sensitivity: 5, releaseOnEdges: true },
    //     }

    //     if(window.innerWidth >= 1200) {
    //         options.parallax = !0;
    //         options.speed = 1500;
    //         options.parallax = !0;
    //     }

    //     this.MainBlogSlider =  new Swiper(slider, options);

    // }

    // HeroImage(){
    //     return;

    //     if(window.innerWidth < 1200)
    //         return;

    //     var lFollowX = 0
    //     , lFollowY = 0
    //     , x = 0
    //     , y = 0
    //     , friction = 1 / 30;
    //     function moveBackground() {
    //         x += (lFollowX - x) * friction;
    //         y += (lFollowY - y) * friction;
    //         var translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
    //         $('.bg-animation').css({
    //             '-webit-transform': translate,
    //             '-moz-transform': translate,
    //             'transform': translate
    //         });
    //         window.requestAnimationFrame(moveBackground);
    //     }

    //     $(window).on('mousemove click', function(e) {
    //         var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    //         var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    //         lFollowX = (20 * lMouseX) / 100;
    //         lFollowY = (10 * lMouseY) / 100;
    //     });

    //     moveBackground();
    // }

    // HeroProducts(Zone = false){
    //     return;

    //     if(Zone.attached) return;

    //     if(!Zone || !Zone.Products.length){
          
    //         $('.main-hero .hero-baner').addClass('col-12').removeClass('col-md-6');
    //         $('.main-hero .products').addClass('d-none');
        
    //         return;
    //     }
        
    //     $('.main-hero .hero-baner').removeClass('col-12').addClass('col-md-6')
    //     $('.main-hero .products').removeClass('d-none').html( this.HeroProductsHTML(Zone) );
    
    //     this.HeroProductsOptions = {
    //         init: false,
    //         loop: false,
    //         speed:800,
    //         slidesPerView: 1, // or 'auto'
    //         // spaceBetween: 10,
    //         centeredSlides : 1,
    //         effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    //         coverflowEffect: {
    //             rotate: 0, // Slide rotate in degrees
    //             stretch: 0, // Stretch space between slides (in px)
    //             depth: 100, // Depth offset in px (slides translate in Z axis)
    //             modifier: 1, // Effect multipler
    //             slideShadows : false, // Enables slides shadows
    //         },
    //         grabCursor: true,
    //         parallax: true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //             clickable: true,
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //         breakpoints: {
                
    //             1700: {
    //                 slidesPerView: 3,
    //                 spaceBetween: 30,
    //                 centeredSlides:1,
    //                 parallax:0,
    //                 effect:'slide'
    //             },
    //             1023: {
    //                 slidesPerView: 2,
    //                 spaceBetween: 0
    //             }
    //         },
    //         mousewheel:  false, //window.innerWidth < 1200 ? false : {  sensitivity: 5, releaseOnEdges: true },
    //     };
    //     this.HeroProductsSlider = new Swiper('#HeroProducts', this.HeroProductsOptions);
    //     this.HeroProductsSlider.init();
        
    // }

    // HeroProductsHTML(Zone = false){
    //     var html = '';
    //     if(!Zone)
    //         return html;
    //     var trails = Konesso.settings.MainPage.HeroProductsTraits;
    //     html += `<section id="HeroProducts" class="swiper-container ">
    //                 <div class="swiper-wrapper">`
    //                 for(var i in Zone.Products){
    //                     var item = Zone.Products[i];
    //                     html += `
    //                     <div class="swiper-slide product product-${item.Id}" data-product-id="${item.Id}" >
    //                         ${Konesso.settings.ProductBtns}
    //                         <a href="${item.Link}" title="${item.Name}" class="image"><img src="${Konesso.settings.gfx.loader}" data-src="${( item.Images.Normal || getProductIcon(item.Id, {name: item.Name}) )}" class="lazyload"></a>
    //                         <div class="content">
    //                             <ul class="trails" data-swiper-parallax="-40%">`
    //                                 item.Trails.forEach( (x) => {
    //                                     if(trails.indexOf(x.GroupId) !== -1){
    //                                         html += `<li class="trail-${x.GroupId}"><b>${x.GroupName}:</b> <a href="${x.Link}" title="${x.Name}">${x.Name}</a></li>`
    //                                     }
    //                                 })
    //                     html +=  `</ul>
    //                             <div class="product">
    //                                 <p class="price" data-swiper-parallax="-50%" data-swiper-parallax-scale=".7">${item.Prices.PriceFormat}</p>
    //                                 <a class="title" href="${item.Link}" title="${item.Name}"><h6 data-swiper-parallax="-30%" data-swiper-parallax-scale=".7">${item.Name}</h6></a>
    //                             </div>
                               
    //                         </div>
                            
    //                     </div>
    //                     `
    //                 }
    //         html += `</div>
    //                 <div class="swiper-pagination"></div>
    //                 <div class="swiper-button-prev swiper-button-black"></div>
    //                 <div class="swiper-button-next swiper-button-black"></div>
    //             </section>`;

    //     return html;

    // }

    // CategoriesList(json = null){
    //     // this.el = el;
    //     this.$el = $('#CategoriesList');
    //     // this.data = data;
    //     this.$items = null;
    //     this.json = json;
    //     this.more = {
    //         showChar : 150,
    //         ellipsestext : "...",
    //         moretext : "Przeczytaj więcej",
    //         lesstext: "Ukryj opis",
    //         catMoreTxt : "",
    //         catLessTxt : "",
    //     }
    //     this.maxItemsToShow = 12;

    //     if(!this.json)
    //         return;

    //     this.CategoriesListInit();
    // }

    // CategoriesListInit(){

    //     this.onResize();
        
    //     this.$items = this.$el.find('.item');

    //     this.updateCategories();
    //     // this.JSON();

    //     $(document).on('click', '.more-link', this.onMoreLinkClick.bind(this));
    //     $(window).on('resize', () =>  {
    //         this.onResize.bind(this);
    //         this.updateCategories.bind(this);
    //     })
    // }

    // onResize(){
    //     var br = Konesso.behaviors.Grid.config['grid-breakpoints'];
    //     if($(window).width() <= parseInt(br['sm'])){
    //         this.maxItemsToShow = 2;
    //     } else if($(window).width() <= parseInt(br['md'])){
    //         this.maxItemsToShow = 4;
    //     } 
    // }

    // JSON(){
    //     ///ajax/search-menu.php?action=getParents&tree=1
    //     $.ajax({url: "https://public.konesso.pl/?module=homecategories&json=true", success: (result) => {
    //         this.json = result;

    //         this.updateCategories();
    //     }});

    // }

    // updateCategories(){
    //     if(!this.json || !this.$items) return;

    //     let limit;

    //     this.$items.each((k, item) => {
    //         var current = this.json.find(x => x.ni == $(item).data('categoryid')) ;
    //         let content = $(current.description).text();
    //         let $desc = $(item).find('.desc');

    //         if(content.length > this.more.showChar) {

    //             var c = content.substr(0, this.more.showChar);
    //             var h = content.substr(this.more.showChar, content.length - this.more.showChar);

    //             var html = c + '<span class="moreellipses">' + this.more.ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<button class="more-link link bb white">' + this.more.moretext + '</button></span>';

    //             $desc.html(html);
    //         }

    //         if(k >= this.maxItemsToShow){
    //             $(item).hide();
    //             limit = true;
    //         }
    //     })

    //     if(limit && !$('button.show-more').length){
    //         this.$items.last().after('<button class="show-more less btn main  small arrow-down">'+this.more.catMoreTxt+'</button>');
    //         $(document).on('click', '.show-more', this.onMoreCategoriesLinkCLick.bind(this));
    //     }
    // }

    // onMoreCategoriesLinkCLick(e){
    //     let target = $(e.currentTarget);
        
	// 	if(target.hasClass("less")) {
	// 		target.removeClass("less").addClass('arrow-up');
	// 		target.html(this.more.catLessTxt);
    //         this.$items.show();
	// 	} else {
	// 		target.addClass("less arrow-up").removeClass('arrow-down');
	// 		target.html(this.more.catMoreTxt);
    //         this.$items.each((k,item) => {
    //             if(k < this.maxItemsToShow){
    //                 $(item).show();
    //             }else{
    //                 $(item).hide();
    //             }
    //         })
	// 	}

    //     return false;
    // }

    // onMoreLinkClick(e){
    //     let target = $(e.currentTarget);
        
	// 	if(target.hasClass("less")) {
	// 		target.removeClass("less");
	// 		target.html(this.more.moretext);
	// 	} else {
	// 		target.addClass("less");
	// 		target.html(this.more.lesstext);
	// 	}
	// 	target.parent().prev().toggle();
	// 	target.prev().toggle();
        
	// 	return false;
	
    // }
}