let _Api = [
    'on',
    'one',
    'off',
    'trigger'
];

let Dispatcher = {
    _stores: [],

    addStore: function(store) {
        this._stores.push(store);
    }
};

_Api.forEach(function(api){
    Dispatcher[api] = function() {
        let args = [].slice.call(arguments);

        this._stores.forEach(function(el){
            el[api].apply(null, args);
        });
    };
});

module.exports = Dispatcher;
