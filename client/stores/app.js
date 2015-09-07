import riot from 'riot';
import dispatcher from 'utilities/dispatcher';

module.exports = function(){
    riot.observable(this);

    let app = this;

    app.text = 'hello';

    app.on('get_text', function(){
        return dispatcher.trigger('change_text_finished', app.text);
    });

    app.on('change_text', function(){
        if (app.text === 'hello') {
            app.text = 'world';
        } else {
            app.text = 'hello';
        }

        return dispatcher.trigger('change_text_finished', app.text);
    });

    return app;
};
