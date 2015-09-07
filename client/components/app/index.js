import riot from 'riot';
import styles from './styles.less';
import dispatcher from 'utilities/dispatcher';

riot.tag(
    'app',

    `
        <div class="{styles.content}"
             onclick="{changeText()}">
            {currentText}
        </div>
    `,

    function(opts){
        let app = this;

        app.styles = styles;

        app.changeText = function(){
            return function(event){
                return dispatcher.trigger('change_text');
            };
        };

        app.on('mount', function(){
            dispatcher.trigger('get_text');
        });

        dispatcher.on('change_text_finished', function(choice){
            app.currentText = choice;
            app.update();
        });

        return app;
    }
);
