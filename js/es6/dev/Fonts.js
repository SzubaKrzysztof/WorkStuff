var WebFont = require('webfontloader');

const Fonts = {
    init() {
        WebFont.load({
            google: {
                families: ['Hind:300,400,500,600,700&subset=latin-ext']
            },
            custom: {
              families: ['fontawesome'],
              urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css']
            },
            // custom: {
            //   families: ['Hind', 'fontawesome'],
            //   urls: [window.location.origin + '/data/include/cms/konesso-page/theme/fonts/fonts.min.css']
            // },
            // active: function() {
            //     $('body').append("<style>.wf-hind-n4-active body { font-family: 'Hind', 'Arial', sans-serif; } .wf-fontawesome-n4-active .fa{ font: normal normal normal 14px/1 FontAwesome;}</style>");
                
            //     var end = new Date().getTime();
            //     var time = end - start;
            //     console.log('Execution time: ' + time);
            // }
        });
    }
}

export default Fonts;