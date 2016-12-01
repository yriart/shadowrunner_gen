requirejs.config({
    baseUrl: '../../build/node_modules',
    paths: {
        app: '../app'
    }
});

requirejs(['app/main']);