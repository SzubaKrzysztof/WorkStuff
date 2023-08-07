export default class Modal {
    constructor(data, id, additionalClass, title) {
        this.data = data;
        this.id = id;
        this.title = title;
        this.additionalClass = additionalClass;
        this.init();
    }

    init() {
        $('body').append(
            `<div class="modal ${this.additionalClass ? this.additionalClass : ''}" id="modal-${this.id ? this.id : ''}" aria-hidden="true">
                <div class="modal__wrap">
                    <div class="modal__window" role="dialog" aria-modal="true">
                        <button data-modalclose class="modal__close"><i class="zwicon-close"></i></button>  
                        ${this.title ? `<h4 class="modal-title">${this.title}</h4>` : ''}
                        ${this.data}
                    </div>
                </div> 
            </div>`
        )
    }
}
