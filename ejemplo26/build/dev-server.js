const webpack = require("webpack");
const configuraCliente = require("./webpack.client.config");

module.exports = function setupDevServer(app) {
    configuraCliente.entry.app = [
        "webpack-hot-middleware/client",
        configuraCliente.entry.app
    ];
    
    configuraCliente.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );

    const compilaCliente = webpack(configuraCliente);
    app.use(
        require("webpack-dev-middleware")(compilaCliente, {
            stats: {
                colors: true
            }
        })
    );
    app.use(require("webpack-hot-middleware")(compilaCliente));
};