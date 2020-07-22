module.exports ={
    entry: `./src/js/index.js`,

    output:{
        path: `${__dirname}/public`,
        filename:"main.js"
    },
    //production -> 最適化(ビルドに時間かかるけどパフォーマンスいい感じ)
    //development -> ソースマップ有効(容量がクソ多い)
    mode:"development",
    devServer: {
        contentBase: `${__dirname}/`,//ホストする先
        port: 8080,//ポート
        open: true
    }
};