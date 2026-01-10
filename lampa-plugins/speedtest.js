(function () {
    'use strict';
    
    var SpeedTestPlugin = {
        config: {
            textColor: 'rgba(255, 255, 255, 0.2)',
            fontSize: '2em',
            fontWeight: '600'
        },
        
        speedTest: function(url, params) {
            if (!Lampa || !Lampa.Speedtest) {
                console.error('SpeedTest plugin: Lampa.Speedtest not available');
                return;
            }
            
            if (Lampa.Controller) {
                Lampa.Controller.toggle('content');
            }
            
            Lampa.Speedtest.start({url: url});
            
            if (window.$) {
                var style = 'color:' + this.config.textColor + ';font-size:' + this.config.fontSize + ';font-weight:' + this.config.fontWeight;
                $('.speedtest__body')
                    .prepend('<center style="' + style + '">' + (params.balanser || '') + '</center>')
                    .append('<center style="' + style + '">' + (params.title || '') + '<br>(' + (params.info || '') + ')</center>');
            }
        },
        
        init: function() {
            console.log('SpeedTest Plugin initialized');
            window.SpeedTestPlugin = this;
        }
    };
    
    // Инициализация при загрузке документа
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            SpeedTestPlugin.init();
        });
    } else {
        SpeedTestPlugin.init();
    }
    
})();
