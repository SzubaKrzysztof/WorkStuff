export default class CountDownTimer {
    constructor(el, data, settings){
        this.el = el;
        this.$el = $(el);
        this.data = data;
        this.options = null;
        this.tid = '';
        this.tl = '';
        this.init();
    }

    
    init(){
        if(!isDate(this.data.time)) return;

        this.tl = new Date(this.data.time);
       
        this.countDown(); 
    }

    countDown()
    {
        var style = this.data.style || 'small';
        var timer = '';
        var today = new Date();
        var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));
        var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
        var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
        var me = this;

        if ((this.tl - today) > 0) {
            timer += '<div class="cdtimer '+ (this.data.label ? 'label' : '') + ' '+ style +'">';
            if(this.data.label)
                timer += '<label class="caption">' + this.data.label + '</label>';
            timer += '<div class="nbrs">';

            if (day > 0)
                timer += this.labelHtml(day, 'day');
                
            timer += this.labelHtml(hour, 'hour');
            timer += this.labelHtml(min, 'min');
            timer += this.labelHtml(sec, 'sec');

            timer += '</div></div>';
           

            this.$el.html(timer);
            this.tid = setTimeout(function() {
                me.countDown();
            }, 1000);
        } else {
            clearTimeout(this.tid);

            this.$el.remove();
            return;
        }
    }

    addZero(num) {
        return ('0' + num).slice(-2);
    }

    labelHtml(v, type)
    {
        return '<span class="nb"><span class="number '+type+'">' + this.addZero(v) + '</span><span class="caption">'+this.getLabelType(type)+'</span></span>'
    }

    getLabelType(type)
    {
        var v = '';
        if(type == 'day')
            v = 'dni';
        else if(type == 'hour')
            v = 'godz';
        else if(type == 'min')
            v = 'min';
        else if(type == 'sec')
            v = 'sek';

        return v;
    }
}
