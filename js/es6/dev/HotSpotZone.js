export default class HotSpotZone{
	constructor($Products, Info, Options = {}){
		this.Zone = Info || false;
		this.$products = $Products || false;
		this.HotSpotItems = Options.Items || 6;
		this.HotSpotSlider = Options.Slider || true;
		this.HotSpotSliderMargines = Options.Margines || true;
		this.HotSpotWithBannerZone = Options.Banners || false;
		this.Cls = Options.Cls || '';
		this.PCls = Options.PCls || '';
		this.PWCls = Options.PWCls || '';
	}
    attach(){
    }
	
 	HotspotCreateHtml(){
		if(!this.$products || this.$products.length < 1)
			return;

		if(!this.Zone)
			this.Zone = { Id : parseInt(Math.random() * 100000)};
		else if(this.Zone && !this.Zone.Id)
			this.Zone.Id = parseInt(Math.random() * 100000);

        let html = '';
        let slider = this.HotSpotSlider  ? true : false;
        html += '<section class="main-hotspot" id="HotSpotZone_'+this.Zone.Id+'" '+ (slider ? ' data-component="HotSpot" data-items="'+this.HotSpotItems+'" data-margines="'+this.HotSpotSliderMargines+'"' : '') +'><div>'+ (this.Zone && this.Zone.Name ? '<div class="big-label"><span>'+ this.Zone.Name +'</span></div>' : '' ) +(this.Zone && this.Zone.Desc ? '<div class="desc">'+ this.Zone.Desc +'</div>' : '' ) +'</div><div class="main-hotspot-items"> <div class="ps-wrap '+this.Cls+'"> ';
         
        html +=  '<div class="'+this.PWCls+'">';
        
        for(var i in this.$products){
			let item = this.$products[i];
			if(item.Html){
				html += '<div class="p-wrap product-html">' + item.Html + '</div>';
				continue;
			}

			let cls = '';
		
			if(!slider)
				cls = this.PCls + (this.$products && this.$products.length > 3 ? ' col-sm-6 col-md-4 col-lg-3' : 'col-sm-6 col-md-4');
			else
				cls = this.PCls;
				
			if(this.HotSpotWithBannerZone && this.HotSpotWithBannerZone.length){
				if(i % 6 == 0 || i == 0){
					var item = this.HotSpotWithBannerZone.shift();
					if(item) {
						html += `<div class="p-wrap product-banner justify-content-center ${cls}"><a href="${item.Url}" target="${item.Target}" rel="${item.Rel}" title="${item.Title}"><img src="${Konesso.settings.gfx.loader}" data-src="${item.Image.Mobile}" data-srcset="${item.Image.Tablet} 100w, ${item.Image.Desktop} 200w" class="lazyload" alt="${item.Title}" title="${item.Title}"></a></div>`
						continue;
					}
				}
			}

			html += this.ProductHTML(item);
        }

		html += `</div>`
		if(this.HotSpotSlider){
			html += '<div class="btns"><div class="btn-prev"></div><div class="btn-next"></div></div>'
		}
		html += `</div></div></section>`

        return html;
    }
	

	ProductHTML(item, cls = '')
	{
		let html = '';
		let name = item.Name || item.productName;
		let id = item.Id || item.productId;
		let link = getProductUrl(id, name);
		
		html += '<div class="product p-wrap type-product product-'+ id +' '+cls+'" data-product-id="'+ id +'">'
			html += '<a class="p-icon" href="'+ link +'" title="'+name+'"><figure><img src="'+Konesso.settings.gfx.loader+'" data-sizes="auto"  data-src="'+ ( (item.Images && item.Images.Normal ? item.Images.Normal : false) || getProductIcon(id, {name: name}) )+'"  alt="'+name+'" class="lazyload"></img> </figure> ';
			
			if(window.innerWidth > 440)
				html += '<div class="p-labels">' + ProductLabelsHtml(item) +'</div>'

			html += '</a>';

			html += '<div class="p-content">'
				html += '<a class="p-name" href="'+ link +'" title="'+name+'">'+name+'</a>';
				html += '<div class="info">';

				html += '<div class="p-notes notes">';
				if(item.Note){
					html += getProductStars(item.Note, item.Counter);
				}
				html += '</div>';
				
				html += '<div class="p-prices">'
						var price = (item.Prices ? item.Prices.Price : false) || item.productRetailPrice;
						var vat = (item.Prices ? item.Prices.Vat : false) || item.productVat;
						var priceMax = (item.Prices ? item.Prices.PriceMax : false) || item.productStrikethroughRetailPrice;

						var RetailPriceFormat = priceFormat(price);
						// var RetailPriceNettoFormat = this.priceFormat(Math.round( (price - price * (vat / 100)) * 100) / 100);
						var StrikethroughRetailPriceFormat = priceFormat(priceMax);

						
						if(priceMax && StrikethroughRetailPriceFormat != RetailPriceFormat)
							html += '<del class="max-price">'+ StrikethroughRetailPriceFormat +' </del>';
						
						html += '<span class="price '+(priceMax ? 'promo' : '')+'">'+ RetailPriceFormat +' </span>'
						// html += '<span class="point-price">'+ this.pricePointFormat(RetailPriceFormat) +'<span class="currency"> pkt.</span></span>'
						
				html += '</div>';
				
				html += '</div>';
			
				if(window.innerWidth <= 440)
					html += '<div class="p-labels">' + ProductLabelsHtml(item) +'</div>';
					
			html += '</div>';
		html += '</div>';
		
		return html;
	}
}