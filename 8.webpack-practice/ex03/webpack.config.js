
const path = require('path');
module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'assets/js/bundle.js'
    },
    devServer:{
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        compress: true, //	모든 항목에 대해 gzip압축 사용
        hot: false //webpack의 HMR 기능 활성화
    }
}