/* eslint配置 */
module.exports = {
    root: true,     // 只在项目目录中寻找eslint配置文件，禁止向父级目录寻找配置文件。
    env: {          // 在env中指定脚本的运行环境
        node: true  // 使用 Node.js 全局变量和 Node.js 作用域。
    },
    extends: [                  // 扩展配置
        "plugin:vue/essential", // 启用esline-plugin-vue的essential配置
        "eslint:recommended"    // 启用eslint推荐的规则
    ],
    parserOptions: {            // 解析器选项
        parser: "babel-eslint"  // 一个对Babel解析器的包装，使其能够与 ESLint 兼容。
    },
    plugins: [  // 插件
        'vue',  // eslint-plugin-vue插件
        'html'  // eslint-plugin-html插件
    ],
    rules: {
        "no-multiple-empty-lines": [2, { "max": 3 }],   // 空行不得连续超过三行。
        "no-extra-boolean-cast": 2,  // 禁止不必要的布尔类型转换
        "no-extra-semi": 2,          // 禁止使用额外的分号，禁止情况如：";;"
    }
}