module.exports = {
    entry: 'app/main.js',
    output: {
        path: 'dist',
        filename: 'main.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extension: ['', '.js', '.scss']
    }
};