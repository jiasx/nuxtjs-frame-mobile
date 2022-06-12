const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'ent-service-mobile',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '36氪企业服务' },
            { name: 'applicable-device', content: 'pc,mobile' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            {
                src: 'https://static.sensorsdata.cn/sdk/1.18.14/sensorsdata.min.js'
            },
            {
                src: '//www.36dianping.com/js/hitpoint-' + process.env.NODE_ENV + '.js'
            },
            {
                src: 'https://hm.baidu.com/hm.js?e0a48dd96e6a367177c2ae8889a85047',
                body: true
            },
            {
                src: 'https://sf1-scmcdn-tos.pstatp.com/goofy/ttzz/push.js?6d720fa35ad3631ccc2439b8b8e73b0e688894b14a58b05cad0f21d32119b3e833e2d43a9dc7f39b29ca68c1743fff9035917839a6b0ada31f59214ef24d7e2365a032a6f74cef7f403fad74862f7d2d',
                id: 'ttzz',
                body: true
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/styles/reset.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/axios', '@/plugins/vant'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios', // 发送请求方式
        '@nuxtjs/style-resources', // 全局引入样式文件
        '@nuxtjs/proxy', // 代理方式
        '@nuxtjs/component-cache' // 组件缓存
    ],

    axios: {
        baseURL: 'https://v.36kr.com'
    },

    proxy: {
        '/api': {
            target: 'https://v.36kr.com',
            changeOrigin: true,
            headers: {
                Host: 'v.36kr.com'
            }
        }
    },

    styleResources: {
        less: ['@/assets/styles/variables.less', '@/assets/styles/common.less']
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // analyze: true, // 优化：如果为 true 开启分析并可视化构建后的打包文件
        // 打包分析
        analyza: {
            analyzeMode: 'static'
        },
        extractCSS: true,
        cache: true,
        extend(config, ctx) {
            if (ctx.isDev) {
                config.plugins.push(
                    new HardSourceWebpackPlugin({
                        cacheDirectory: '.cache/hard-source/[confighash]'
                    })
                );
            }
        },
        postcss: {
            // 添加插件名称作为键，参数作为值
            plugins: {
                'postcss-px-to-viewport': {
                    unitToConvert: 'px', // 默认值`px`，需要转换的单位
                    viewportWidth: 375, // 视窗的宽度,对应设计稿宽度
                    // viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
                    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
                    propList: ['*'], // 转化为vw的属性列表
                    viewportUnit: 'vw', // 指定需要转换成视窗单位
                    fontViewportUnit: 'vw', // 字体使用的视窗单位
                    selectorBlaskList: ['.ignore-'], // 指定不需要转换为视窗单位的类
                    mediaQuery: false, // 允许在媒体查询中转换`px`
                    minPixelValue: 1, // 小于或等于`1px`时不转换为视窗单位
                    replace: true, // 是否直接更换属性值而不添加备用属性
                    exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件
                    landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
                    landscapeUnit: 'vw', // 横屏时使用的单位
                    landscapeWidth: 568 // 横屏时使用的视窗宽度
                }
            },
            preset: {
                // 更改postcss-preset-env 设置
                autoprefixer: {}
            }
        }
    },
    server: {
        port: 3003,
        host: '0.0.0.0' // default: localhost
    }
};
