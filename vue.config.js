const registerRouter = require('./backend/router')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // 全局引入变量和 mixin
                additionalData: `
                    @import "@/assets/scss/variable.scss";
                    @import "@/assets/scss/mixin.scss";
                `
            }
        }
    },
    // express服务,app是express实例
    devServer: {
        before(app) {
            registerRouter(app)
        }
    }
}
