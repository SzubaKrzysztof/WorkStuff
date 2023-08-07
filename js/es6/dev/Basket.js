export default class Basket{
    constructor(){
        this.attach();
    }

    attach(){
        this.el = '#Cart';
        this.$el = $(this.el);
        
        this.json = window.JSONS.DemoBasket;
        this.Update();
    }

    EmptyBasketHtml(msg = '', cls = '') {
        return `<div class="empty ${cls}">
                    <span>${msg}</span>
                    <i class="material-symbols-rounded">shopping_basket</i>
                    <a class="button" href="/basketedit.php?mode=1">Przejdź do koszyka</a>
                </div>`;
    }

    Loading() {
        this.$el.html( this.EmptyBasketHtml('Trwa aktualizowanie Twojego koszyka', 'loading') );
    }

    ShowError() {
        this.$el.html( this.EmptyBasketHtml('Wystąpił nieoczekiwany błąd :(', 'error', '') );
    }

    GetIAIData() {
        if(!this.params){
            this.params = {Basket: {format: "json"}}
            if(this.ProductId)
            {
                this.params.Hotspots = {"format":"json","params":{"action":"get-hotspots-html","zones-names":"p_associated_zone2","components":"basket","zones-types":"projector","product" : this.ProductId}}
            }
        }

        return Konesso.behaviors.Body.GetIAIData( this.params ).then( (x) => {
            var x = getJSON(x);

            if(!x) return;
            
            if(x.Hotspots && x.Hotspots.response  && x.Hotspots.response.basket){
                Konesso.settings.Hotspots.Basket = JSON.parse(x.Hotspots.response.basket.trim().replace(/(\r\n|\n|\r|\\n)/gm, ''));
            }

            if(x.Basket){
                Konesso.settings.IAIData.Basket = x.Basket;

                if(Konesso.behaviors.Body.Basket)
                    Konesso.behaviors.Body.Basket.Update()
            }
        })
    }


    ChangeBasket(id = 1, mode = 1, qty = 1, rmv = false, additional= '') {
        this.ProductId = id;

        let rand = this.json.Basket.response.basket.products[Math.floor(Math.random() * this.json.Basket.response.basket.products.length) ];

        this.json.Basket.response.basket.products.push(rand);

        // return new Promise((resolve, reject) => {
        //     $.ajax({
        //         type: "POST",
        //         url: "/basketchange.php",
        //         async: true,
        //         data: '&mode='+ mode +'&product='+ this.ProductId + (rmv ? '&change=empty' : '&number='+ qty ) +'&size=uniw&getAjax=true' + (additional ? '&additional='+additional : ''),
        //         dataType: 'json',
        //     }).success( (x) => {
        //         if(rmv){
        //             this.ProductId = false;
        //         }
        //         if( this.GetIAIData() ){
        //             resolve(x)
        //         }
        //     }).error( (x) => {
        //         reject(x);
        //         this.ShowError();
        //     })
        // })
        this.Update();

        
    }

    Update() {
        
        var html = '';
        // if Konesso.settings.IAIData && !Konesso.settings.IAIData.Basket.error && Konesso.settings.IAIData.Basket.response.basket
        if(this.json){
            let basket = this.json.Basket.response.basket;
            let productsCounter = 0;
            if(basket.productsCounter && basket.products){
                var shippingFree = (basket.toShippingFree == '0.00' ? true : false);
                var sum = !shippingFree ? Konesso.behaviors.Body.priceFormat(basket.worth + parseFloat(basket.shippingCost) ) : basket.worth_formatted;
                var p = basket.products;
                productsCounter = basket.productsCounter;
                p.reverse();

                html += `<div class="basket row no-gutters">
                <div class="checkout col-md-8">
                    <span class="title">Podsumowanie</span>
                    <div class="summary">
                        <div class="line">
                            <span class="name">Suma:</span>
                            <b class="price">${sum}</b>
                        </div>
                        <div class="line">
                            <span class="name">Ilość:</span>
                            <b class="price">${basket.productsNumber}</b>
                        </div>
                        <div class="line">
                            <span class="name">Dostawa:</span>
                            <b class="price">${(!shippingFree ? 'od ' + basket.shippingCost_formatted : 'Darmowa')}</b>
                        </div>
                        <div class="line">
                            <span class="name">Wartość zamówienia:</span>
                            <b class="price">${basket.worth_formatted}</b>
                        </div>
                    </div>
                    <a href="#" class="btn green">Przejdź do koszyka</a>
                </div>
                <div class="products col-md-4">`
                for (let i in p) {
                    let item = p[i];
                    html += `
                    <div class="item" data-product-id=${item.id} data-additional="${item.md5_additional}">
                        <a class="image" href="${item.link}">
                            <img src="${item.icon}" alt="">
                        </a>
                        <div class="title">${item.name}</div>
                        <div class="sell">
                            <div class="qty">
                                <i>Ilość:</i>
                                <span>${item.count}</span>
                            </div>
                            <div class="price">
                                <i>Cena:</i>
                                <span>${item.prices.worth_gros_formatted}</span>
                            </div>
                        </div>
                        <button class="remove">
                          <i class="zwicon-trash"></i>
                      </button> 
                  </div>`
               }
                html += `</div>
            </div>`;
            } else {
                html = this.EmptyBasketHtml('Twój koszyk jest pusty');
            }
            // $('#MainHeader .basket-trigger .badge').html(productsCounter);
        } else {
            this.ShowError();
            return;
        }

        this.$el.html(html);

        $('[data-tab="Cart"]').trigger('click');
    }
}