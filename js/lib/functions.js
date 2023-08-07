$('.banner-main .second-banner .progress-bar').each((i, el) => {
    $(el).append(`<i class="progress" style="width:${$(el).data('all') - $(el).data('left') * 100 / $(el).data('all')}%"></i>`);
})

// Changes XML to JSON
function xmlToJson(xml) {
        
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
};

function getJSON(text){
    if (typeof text === "object"){
        return text;
    } else if (typeof text!=="string"){
        return false;
    }

    try{
        text = JSON.parse(text);
        return text;
    }
    catch (error){
        return false;
    }
}
	
function slugify(text)
{
    var text = text || '';

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


function SposobyIconByName(name){
    var name = name || false;
    if(!name) return '';
    
    var n = 'fi fi-';
    if(name == 'Ekspres automatyczny')
        n += 'coffee-machine-3';
    else if(name == 'Ekspres kolbowy')
        n += 'coffee-machine-2';
    else if(name == 'Ekspres przelewowy')
        n += 'coffee-machine';
    else if(name == 'Ekspres na kapsułki')
        n += 'coffee-machine';
    else if(name == 'French Press')
        n += 'french-press';
    else if(name == 'Kawiarka')
        n += 'coffee-maker';
    else if(name == 'Tradycyjny')
        n += 'food';
    
    return n;
}

function ProductLabelsHtml(product){
    var product = product || false;
    var html = '';
   
    if(product.Labels){
        if(product.Labels.Discount || product.Labels.Promo)
            html += getLabelTypeInfo('promo')
        if(product.Labels.Distinguished || product.Labels.Special)
            html += getLabelTypeInfo('special')
        if(product.Labels.Bestseller)
            html += getLabelTypeInfo('best')
        if(product.Labels.New)
            html += getLabelTypeInfo('new')
    } else if(product.productName){
        if(product.productInPromotion || product.productInDiscount || product.productStrikethroughRetailPrice)
            html += getLabelTypeInfo('promo')
        if(product.productInSpecial)
            html += getLabelTypeInfo('special')
        if(product.productInBestseller)
            html += getLabelTypeInfo('best')
        if(product.productInNew)
            html += getLabelTypeInfo('new')
    }

    if(product.ProductionDate && isDate(product.ProductionDate)){

        var date1 = new Date();
        var date2 = new Date(product.ProductionDate);
        
        var time = date2.getTime() - date1.getTime();

        time = parseInt( Math.abs( time / (1000 * 3600 * 24)))

        html += '<span class="p-label roast" data-tippy-content="Data produkcji '+product.ProductionDate+'"><i class="ico-sl-fire"></i> '+time+' dni temu</span>'
    }
    return html;
}

function getLabelTypeInfo(type)
{
    var type = type || '';

    var html = '<span class="p-label '+type+'">'
    if(type == 'new')
        html += 'Nowość';
    else if(type == 'best')
        html += 'Bestseller';
    else if(type == 'special')
        html += 'Polecany';
    else if(type == 'promo')
        html += 'Promocja';
    html += '</span>';
    return html;
}


function getProductStars(note , counter)
{
    var html = ''
    let cls = '';
    var note = parseFloat(note) || 0;
    var counter = parseInt(counter) || 0;
    if(!note || !counter) return html;

    html += '<span class="stars">';
						
    for(var i =1; i<=5; i++)
                            {
        cls = 'fa-star';
        if(note >= i){
            cls += ' active'
        } else if(note >= i - 0.5){
            cls += '-half-o active'
        } else 
            cls += '-o';

        html += '<i class="fa '+cls+'"></i>'
    }

    html += '</span><span class="avg"><b>'+ note +'</b> ('+counter +' opini'+(counter == 1 ? 'a' : (counter <= 4 ? 'e' : 'i')) +')</span>'

    return html;
}


function pricePointFormat(price){
    var price = price || 0;
    var price = Math.round(price * 2000) / 100
    var p = price.toString().split('.');
    if(p.length == 2){
        return p[0] +',' + (p[1].length == 1 ? p[1] + '0' : p[1])
    }
    return String(price).replace('.', ',')
}

function priceFormat(price, currency){
    var price = price || 0;
    var currency = currency || 'zł';
    var p = price.toString().split('.');
    if(p.length == 2){
        return p[0] +',' + (p[1].length == 1 ? p[1] + '0' : p[1]) + ' ' + currency;
    }
    return price + ',00 ' + currency;
    
}

function getProductUrl(Id, Name){
    var Id = Id || null;
    var Name = Name || '';
    if(!Id) return '';

    return  '/product-pol-' + Id + '-' + slugify(Name) + '.html';
}

function getProductIcon(Id, options){
    var Id = Id || null;
    var options = options || {};
    if(!Id) return '';

    var $options = Object.assign({size : 'small', type : 'Icon', url : true, name : ''}, options);

    var url =  '/pol_il_' + slugify($options.name) + '-' + Id + '.jpg';

    if($options.url)
      return url;
    else
      return '<img src="'+url+'" alt="'+$options.name+'" title="'+$options.name+'">';
  }

function isDate(date) {  
    var date = date || false;
    if(!date) return;
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date)); 
}

function CanIuseWebP(){
    var a = false;
    
    // var canIUse = ["Chrome", "Firefox", "Microsoft Edge", "Opera", "Opera Coast", "Android Browser", "Samsung Internet for Android",  ]

    // if(canIUse.indexOf( Konesso.browser.getBrowserName()) !== -1)
    //     a = true;

    // if(['iOS', 'MacOS'].indexOf( Konesso.browser.getOSName() ) !== -1)
    //     a = false;

    return a;
}