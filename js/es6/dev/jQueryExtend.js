export default class jQueryExtend{
    attach(){
        this.Headroom();
        this.horizontalScroll();
    }

    Headroom(){
        $.fn.headroom = function(option) {
            return this.each(function() {
              var $this   = $(this),
                data      = $this.data('headroom'),
                options   = typeof option === 'object' && option;
        
              options = $.extend(true, {}, Headroom.options, options);
        
              if (!data) {
                data = new Headroom(this, options);
                data.init();
                $this.data('headroom', data);
              }
              if (typeof option === 'string') {
                data[option]();
        
                if(option === 'destroy'){
                  $this.removeData('headroom');
                }
              }
            });
        };
    
        //////////////
        // Data API //
        //////////////
    
        $('[data-headroom]').each(function() {
        var $this = $(this);
        $this.headroom($this.data());
        });
        
    }

    horizontalScroll(){
        $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })

        $('[data-vscroll], .h-scroll, .hscroll').hScroll();
    }

    
  };
}