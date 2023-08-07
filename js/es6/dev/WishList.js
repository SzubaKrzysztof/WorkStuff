export default class Basket{
    constructor(){
        this.attach();
    }

    attach(){
        this.el = '#MenuFavs';
        this.$el = $(this.el);
        
        this.Update()
    }

    Loading(){
        this.$el.html('<div class="empty loading"><img src="../../img/loader.png"></img><span>Trwa aktualizowanie Twojej listy obserwowanych</span> <div class="mt-5"> <a href="/basketedit.php?mode=2" class="btn main arrow has-icon"><span>Przejdź do obserwowanych</span><i class="ico-sl-heart"></i></a></div></div>')
    }


    ShowError(){
        this.$el.html('<div class="empty error"><i class="ico-sl-heart"></i><span>Wystąpił nieoczekiwany błąd :(</span> <div class="mt-5"> <a href="/basketedit.php?mode=1" class="btn main arrow has-icon"><span>Przejdź do obserwowanych</span><i class="ico-sl-heart"></i></a></div></div>');
    }

    GetIAIData(){
        return Konesso.behaviors.Body.GetIAIData({Wishlist: {format: "json"}}).then( (x) => {
            x = getJSON(x);
            if(!x) return;

            Konesso.settings.IAIData.Wishlist = x.Wishlist;

            // if(Konesso.behaviors.Body.WishList)
                this.Update()
        })
    }

    ChangeBasket(id = 1, mode = 1, qty = 1, rmv = false){

        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "/basketchange.php",
                async: true,
                data: '&mode='+ mode +'&product='+ id + (rmv ? '&change=empty' : '&number='+ qty ) +'&size=&getAjax=true',
                dataType: 'json',
            }).success( (x) => {
                if( this.GetIAIData() ){
                    resolve(x)
                }
            }).error( (x) => {
                reject(x);
                this.ShowError();
            })
        })
       
    } 

    Update(){
        var html = '';
        if(Konesso.settings.IAIData && !Konesso.settings.IAIData.Wishlist.error && Konesso.settings.IAIData.Wishlist.response.product){
            var basket = Konesso.settings.IAIData.Wishlist.response;
            var productCounter = 0;
            if(basket.product.length){
            
                var p = basket.product;
                p.reverse();

                html += `<div class="align-items-center no-gutters row">

                            <div class="col-12 "><div class="basket">
                           
                                <div class="summary">
                                    <div><span class="qty">Ilość produktów:</span><i class="price">${basket.attributes.count}</i></div>
                                    <div><span class="delivery">Wartość:</span><i class="price">${Konesso.behaviors.Body.priceFormat(basket.attributes.cost)}</i></div>
                                </div>

                                <a href="/basketedit.php?mode=2" class="btn main arrow has-icon"><span>Przejdź do listy</span><i class="ico-sl-heart"></i></a>
                            </div>
                        </div>
                            <div class="col-12 products">`
                        for(var i in p) {
                            var item = p[i]
                            html += `<a class="product" href="${item.attributes.link}" data-product-id="${item.attributes.id}" data-mode="2" data-rmv="1">
                               
                                <div class="img"><img src="${item.icon}"></div>
                                <div class="desc title">
                                    <i>Produkt:</i>
                                    <span>${item.name}</span>
                                </div>

                                <div class="desc price">
                                    <i>Cena:</i>
                                    <span>${item.price.attributes.price_formatted}</span>
                                </div>

                                <button class="btn remove add-to-favs" ><i class="ico-sl-trash"></i></button>
                            </a>`
                        }
                        html += `
                        </div>
                </div>`;
                $('#MainHeader .btn main favs-trigger .badge').html(basket.attributes.count);
            } else {
                html = '<div class="empty"><i class="ico-sl-heart"></i><span>Niestety Twoja lista jest pusta.</span></div>';
                $('#MainHeader .btn main favs-trigger .badge').html('');
            }
        } else {
            if(!Konesso.settings.IAIData || Konesso.settings.IAIData.Wishlist.error){
                this.ShowError();
                return;
            }
            
            html = '<div class="empty"><i class="ico-sl-heart"></i><span>Niestety Twoja lista jest pusta.</span></div>';
            $('#MainHeader .btn main favs-trigger .badge').html('');
        }

        this.$el.html(html)
    }
}