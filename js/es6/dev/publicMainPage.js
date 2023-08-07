export default class PublicHomePage{
	constructor(){
        // this.init();
    }
	
    attach(){
		if(Konesso.settings.PageType != 'main') return;
		
		this.ResetZone();

		this.UseWebP = CanIuseWebP()
		this.Data = false;
		this.Timers = [];
		this.Zones = [
			{Id: 1, Name: 'Strefa nowości', Desc: '', Link: '/Nowosc-snewproducts-pol.html'}, 
			{Id: 2, Name: 'Strefa promocji', Desc: '', Link: '/Promocja-spromo-pol.html'}, 
			{Id: 3, Name: 'Specjalne', Desc: '', Link: ''}, 
			{Id: 4, Name: 'Najcześciej kupowane', Desc: '', Link: '/Bestseller-sbestseller-pol.html '}, 
			{Id: 5, Name: 'Wyróżnione', Desc: '', Link: ''}, 
			{Id: 6, Name: 'Świeżo palone', Desc: '', Link: ''}, 
		]

		this.getDataOptions = { Newest : 16, Promo : 16, Bests : 12, Specials : 0, Awards : 0, Roast: 16, t : String(Date.now()).slice(0, -5) }

		this.getData();
        
	}
	
	styles(){
		let html = ``
		
		return html;
	}

	getData(){
		$.ajax({
			data: this.getDataOptions,
            url: 'https://public.konesso.pl/?module=homepage&json=true',
        }).done((x)=> {
            this.Data = x;
			
			this.SiteContent();

			Konesso.behaviors.MainPage.CategoriesList(this.Data.BaseCategories);
			
			$('#placeholder-content').remove();
        })
	}

	SiteContent(){
		if(!this.Data)
			return;

		let html = '';
        let opt = {};
		let mainB = '';
		
		let hit = this.HitProducts()
		if(hit)
			html += '<div class="container"><div class="row"><div class="col-sm-8">'
		
		
		html += this.MainBanners('Zone5')
		
		if(hit)
			html += '</div><div class="col-sm-4">' + hit + '</div></div></div>';
		
		
		// $('#main_banner1').html( mainB );/
		
		
		
		
		html += this.Banners('Zone7')
        
        html += this.BannersTwoColumns('Zone6');

		if(this.Data.Products.Newest){
			html += this.HotspotCreateHtml(this.Data.Products.Newest, this.getZone(1));
		}
		
		html += this.Branded('Zone12');
		
		if(this.Data.Products.Roast){
			html += this.HotspotCreateHtml(this.Data.Products.Roast, this.getZone(6));
		}
		
		
		
		let promo = '';
		if(this.Data.Products.Promo){
            opt = {}
			if(this.Data.Banners.Zone9){
                opt.Items = 3
            }
            
			promo += this.HotspotCreateHtml(this.Data.Products.Promo, false, opt);
		}
		
		if(promo || this.Data.Banners.Zone9){
			html += '<div class="m-t-5"><a href="'+this.Zones[1].Link+'" class="big-label"><span>'+this.Zones[1].Name+'</span><small>Zobacz wszystkie</small></a></div>'
		}
		
		html += this.BannersTwoColumns('Zone8')
		
		
		if(this.Data.Banners.Zone9 && promo){
			html += `<div class="row">
				<div class="col-md-6">${promo}</div>
				<div class="col-md-6">${this.BannersSlider('Zone9')}</div>
			</div>`
		} else if(promo){
			html += promo;
		} else {
			html += this.BannersSlider('Zone9');
		}
		
		
		if(this.Data.Banners.Zone10){
			html += `<section class="full-width-row">${this.MainBanners('Zone10')}</section>`
		}
		
		
		if(this.Data.Products.Bests){
			
			if(this.Data.Banners.Zone4){
				this.HotSpotSlider = false;
				this.HotSpotWithBannerZone = Object.values(this.Data.Banners.Zone4); //reindex
			}
			
			html += this.HotspotCreateHtml(this.Data.Products.Bests, this.getZone(4));
			
		}
		
		html += this.Branded('Zone11');
		

		

		if(this.Data.Products.Awards){
			
            html += this.HotspotCreateHtml(this.Data.Products.Awards, this.getZone(5));
			
		}

		html += this.BannersTwoColumns('Zone3');

		if(this.Data.Products.Specials){
			html += this.HotspotCreateHtml(this.Data.Products.Specials, this.getZone(3));
			
		}
		
		html += this.styles();
		
		$('#container').prepend(html)
		
		html = this.Branded('Zone13')
		if(html)
			$('#main_news2').after(html);
			
		this.runTimers();
		// Konesso.behaviors.Body.AddToBasketBtns();
		Konesso.behaviors.Components.attach()
	}

	
	MainBanners(ZoneName = ''){
		let html = '' 
		let zone = this.Data.Banners[ZoneName];
		if(!zone)
			return html;
		
        html += '<div class="swiper-labels" id="'+ZoneName+'" data-component="SliderLabel"><div class="swiper-container"><div class="swiper-wrapper">';
        for(var i in zone){
			var item = zone[i];
			if(item.isHTML){
				html += '<div class="swiper-slide" data-label="'+ item.Title +'">' + item.HTML + '</div>';
			} else {
				html += `<div class="swiper-slide" data-label="${item.Title}"><a href="${item.Url}" target="${item.Target}" rel="${item.Rel}" title="${item.Title}"><img src="${this.getImageSize(item)}" title="${item.Title}" alt="${item.Title}"></a></div>`;
			}
        }
        html += '</div><div class="btns"><div class="btn-prev"></div><div class="btn-next"></div></div><div class="pagination"></div></div></div>'
		
		return html;
	}

	
	BannersTwoColumns(ZoneName = ''){
		let html = '' 
		let zone = this.Data.Banners[ZoneName];
		
		if(!zone)
			return html;
	
		let row = '<div class="d-flex align-items-center justify-content-between '+(zone.length > 2 ? '' : 'row ')+' text-center">';
		
        html += '<section id="'+ZoneName+'" class="'+ZoneName+'" '+(zone.length > 2 ? 'data-component="Slider" data-arrows="true" data-slides-to-show="1" data-slides-to-scroll="1"' : '')+'>';
		
		html += row;
		
        for(var i in zone){
			var item = zone[i];
			
			if(item.isHTML){
				html += item.HTML;
			} else {
				html += `<div class="col-md-6 m-b-2 bnr"><a href="${item.Url}" target="${item.Target}" rel="${item.Rel}" title="${item.Title}" ><img  src="${this.getImageSize(item)}"  title="${item.Title}" alt="${item.Title}" ></a></div>`;
			}
			if(zone.length > 2 && ( i % 2  || zone.length - 1 == i )){
				html += '</div>'
				if(i % 2 && zone.length - 1 > i)
					html += row;
			}
        }
        html += '</div></section>'
		
		return html;
	}
	
	
	BannersSlider(ZoneName = ''){
		var html = '';
		let zone = this.Data.Banners[ZoneName];
		if(zone){
			html += `<ul id="${ZoneName}" class="slider" ${ Object.values(zone).length > 1 ? 'data-component="Slider" data-arrows="true"' : '' }>`;
			for(var i in zone){
				var item = zone[i];
				if(item.isHTML){
					html += item.HTML;
				} else {
					html += `<li>
					<a href="${item.Url}" target="${item.Target}" rel="${item.Rel}" title="${item.Title}">
						<img src="${this.getImageSize(item)}" alt="${item.Title}">
					</a></li>`
				}
			}
			
			html += `</ul>`
		}

		return html;
	}
	
	
	Banners(ZoneName = ''){
		var html = '';
		let zone = this.Data.Banners[ZoneName];
		if(zone){
			html += '<section id="'+ZoneName+'">';
			for(var i in zone){
				var item = zone[i];
				if(item.isHTML){
					html += item.HTML;
				} else {
					html += `<div>
					<a href="${item.Url}" target="${item.Target}" rel="${item.Rel}" title="${item.Title}">
						<img src="${this.getImageSize(item)}" alt="${item.Title}">
					</a></div>`
				}
			}
			html += '</section>';
			
		}

		return html;
	}
	
	Branded(ZoneName = ''){
		var html = '';
		let zone = this.Data.Banners[ZoneName];
		
		if(!zone) return html;
		
		zone = zone[0];
		
		if(!zone.Products || !zone.Products.length) return html;
		
		html += `<div class="m-t-5"><a href="${zone.Url}" target="${zone.Target}" rel="${zone.Rel}" title="${zone.Title}" class="big-label"><span>${zone.Title}</span></a></div>`;
		html += '<section id="'+ZoneName+'" class="full-width-row branded" style="'+(window.innerWidth >= 1200 && zone.Image.Desktop ? `background:url(${zone.Image.Desktop}) no-repeat top center;background-size:contain;padding-top:170px;` : '' )+'">';
		html += '<div class="container">'
        
       
		if(zone.Image.Mobile && zone.Products.length >= 2){
            
            var opt = {}
			opt.Items = 4
           
            let banner = `<a href="${zone.Url}" target="${zone.Target}" rel="${zone.Rel}" title="${zone.Title}" class="d-block text-center"><img src="${this.getImage(zone.Image.Mobile)}"></a>`

            let hotspot = this.HotspotCreateHtml(zone.Products, false, opt);

            html += `<div class="row"><div class="col-md-3">${banner}</div><div class="col-md-9">${hotspot}</div></div>`				
		} else {
			
			if(window.innerWidth < 1200){
				html += `<a href="${zone.Url}" target="${zone.Target}" rel="${zone.Rel}" title="${zone.Title}" class="d-block text-center">
					<img src="${this.getImageSize(zone)}">
				</a>`
			}
			
            html += this.HotspotCreateHtml(zone.Products, false);
            
		}
		html += '</div>'
		html += '</section>'
		
		return html;
	}
	
	HitProducts(){
		let html = '';
		let zone = this.Data.Products.Hits;
		if(!zone)
			return html;
		
		html += `<div id="hit-container" >
			<div id="hity">
				
				<div class="hit-items" ${ this.Data.Products.Hits.length > 1 ? 'data-component="Slider" data-arrows="true" data-dots="false"'  : '' }>
				`;
				
				for(var i in zone){
					var item = zone[i];
					var url = this.getProductUrl(item.ProductId, item.productName);
					var RetailPriceFormat = this.priceFormat(item.productRetailPrice);
					var RetailPriceNettoFormat = this.priceFormat(Math.round( (item.productRetailPrice - item.productRetailPrice * (item.productVat / 100)) * 100) / 100);
					var StrikethroughRetailPriceFormat = this.priceFormat(item.productStrikethroughRetailPrice);
					var selled = item.Selled + item.Selled2;
					if(item.Items - selled < 0 || item.Items == selled)
						continue;

					html += `
						<div class="hit-item">
                            <div class="p-wrap product_${item.ProductId} type-product" data-product-id="${item.ProductId}">
                                <div class="name">Okazje Konesso!</div>
                                <div class="discount">Oszczędź <b>${item.Value}${item.Type ? '%' : 'zł'}</b></div>
								<a class="p-icon" href="${url}" title="${item.productName}">
                                    <figure><img src="${this.getProductIcon(item.ProductId, {name: item.productName})}"  alt="${item.productName}"></figure>
                                    <div class="p-labels text-center"> ${ProductLabelsHtml(item)}</div>
                                </a>
                                
                                <a class="p-name" href="${url}" title="${item.productName}"><h5>${item.Name ? item.Name : item.productName}</h5></a>

                                <div class="loader"><i style="width:${(selled) * 100 / item.Items}%"></i></div>
								
								
								<div class="info">
                                    <div class="p-amout"><span class="text"><b>Pozostało:</b> <span class="selled">${item.Items - selled}</span> / <span class="items">${(item.Items)}</span></span></div>

                                    <div class="timer" data-component="CountDownTimer" data-time="${item.TimeEnd}" data-style="big"></div>

                                    <div class="prices">
                                        ${(item.productStrikethroughRetailPrice ? `<del class="max-price">${StrikethroughRetailPriceFormat}</del>` : '')}    
                                        <span class="price promo">${RetailPriceFormat}</span>
											
                                    </div>
								</div>
								
							</div>
						</div>
					`;
					
					// this.Timers.push({id: '#hit_timer_'+item.ProductId, time: item.TimeEnd});
				}
				
			html += `</div></div>`;
			
		html += `</div>`;
		
		return html;
		
	}
	
	
	ProductLabelsHtml(product = false){
		let html = '';
		if(!product)
			return html;

		html += (product.discount ? `<span class="promo icon-promo">-${product.discount}% </span>` : '');

		return html;

	}

	getImageSize(item){
		let src = ''
		if(!item.Image) return src;
		
		if(window.innerWidth < 600 && item.Image.Mobile)
			src = item.Image.Mobile;
		else if(window.innerWidth < 900 && item.Image.Tablet)
			src = item.Image.Tablet;
		else
			src = item.Image.Desktop;
		
		return this.getImage(src);
	}
	
	getImage(img = ''){
		if(this.UseWebP)
			return img.replace('.png', '.webp').replace('.jpg', '.webp')
		
		return img;
	}
	
 	HotspotCreateHtml(products, zone, opt = {}){

        var HotSpot = new HotSpotZone(products, zone, opt);

        var html = HotSpot.HotspotCreateHtml();

        return html;

       
    }
	
	ProductHTML(item, cls = ''){
		
		let html = '';
		if(!item || !item.productId) return html;
		
		let link = this.getProductUrl(item.productId, item.productName);
			
		html += '<div class="p-wrap type-product product_'+ item.productId +' col-12 '+cls+'" data-product-id="'+item.productId+'">'
			html += '<a class="p-icon" href="'+ link +'" title="'+item.productName+'"><figure><img data-sizes="auto"  data-src="'+ this.getProductIcon(item.productId, {name: item.productName}) +'"  alt="'+item.productName+'" class="lazyload"></img> </figure> <div class="p-labels">' + this.ProductLabelsHtml(item) +'</div></a>';

			
			
			html += '<div class="p-content">'
				html += '<a class="p-name" href="'+ link +'" title="'+item.productName+'">'+item.productName+'</a>';

				
				html += '<div class="p-prices">'
				  
						var RetailPriceFormat = this.priceFormat(item.productRetailPrice);
						var RetailPriceNettoFormat = this.priceFormat(Math.round( (item.productRetailPrice - item.productRetailPrice * (item.productVat / 100)) * 100) / 100);
						var StrikethroughRetailPriceFormat = this.priceFormat(item.productStrikethroughRetailPrice);

						 html += '<span class="client-b2b">';
							 html += '<span class="price">'+ RetailPriceNettoFormat +' <small>netto</small></span>';
							 if(item.productStrikethroughRetailPrice)
								 html += '<del class="max-price">'+ (item.productStrikethroughRetailPrice ? StrikethroughRetailPriceFormat : '') +' </del>';
								 
							 html += '<span class="price-small">'+ RetailPriceFormat +' <small>brutto</small></span>';
						 html += '</span>';
				  
						html += '<span class="client-detal">';
							html += '<span class="price">'+ RetailPriceFormat +' </span>'
							if(item.productStrikethroughRetailPrice)
								html += '<del class="max-price">'+ (item.productStrikethroughRetailPrice ? StrikethroughRetailPriceFormat : '') +' </del>'
							
							html += '<span class="point-price">'+ this.pricePointFormat(item.productRetailPrice) +'<span class="currency"> pkt.</span></span>'
						html += '</span>';
						
				html += '</div>';
			html += '</div>';
		html += '</div>';
			
		return html;
	}
	

	ResetZone(){
		this.Zone = false;
		this.HotSpotItems = 4;
		this.HotSpotSlider = true;
		this.HotSpotWithBannerZone = false;
	}

	getZone(Zone = 0){
		if(!Zone)
			return;

       return this.Zone = this.Zones.filter( x => x.Id == Zone)[0];
	}
	

	runTimers(){
		if(!this.Timers || !this.Timers.length) return;
		
		for(var i in this.Timers){
			var end_date = new Date( this.Timers[i].time  );

			var timern = new CountdownTimer($(this.Timers[i].id), end_date);
			timern.countDown();
		}
	}
	
    slugify(text)
    {
		text = text.toString()
       
        var from = "ĄĆĘŁŃÓŚŹŻąćęłńóśźż";
        var to   = "ACELNOSZZacelnoszz";
        for (var i=0, l=from.length ; i<l ; i++) {
             text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }
      	return text //.toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }
	
	pricePointFormat(price = 0){
		var price = Math.round(price * 2000) / 100
		var p = price.toString().split('.');
		if(p.length == 2){
			return p[0] +',' + (p[1].length == 1 ? p[1] + '0' : p[1])
		}
		return String(price).replace('.', ',')
	}

	priceFormat(price = 0, currency = 'zł'){
		var p = price.toString().split('.');
		if(p.length == 2){
			return p[0] +',' + (p[1].length == 1 ? p[1] + '0' : p[1]) + ' ' + currency;
		}
		return price + ',00 ' + currency;
		
	}
	
	getProductUrl(Id, Name = ''){
		if(!Id) return;

		return '/product-pol-' + Id + '-' + this.slugify(Name) + '.html';
	}
	
	getProductIcon(Id, options = {}){
        if(!Id) return;

        var $options = Object.assign({size : 'small', type : 'Icon', url : true, name : ''}, options);

        var url = '/pol_il_' + this.slugify($options.name) + '-' + Id + '.jpg';

        if($options.url)
          return url;
        else
          return '<img src="'+url+'" alt="'+$options.name+'" title="'+$options.name+'">';
  	}
}
