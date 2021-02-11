const CracoLessPlugin = require('craco-less');
const lessToJS = require('less-vars-to-js')

const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './src/res/styles/antd-custom.less'), 'utf8')
)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: themeVariables, // make your antd custom effective
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};