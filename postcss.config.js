/**
 * @file: xeacss
 * @author: yejiang1015
 * @Date: 2019-03-06 11:44:47
 * @Last Modified by: v_xieyejiang
 * @Last Modified time: 2019-03-06 11:45:52
 */

module.exports = {
    parser: 'postcss-comment', // postcss 支持注释插件
    plugins: [
        require('postcss-import'),
        require('precss'),
        require('cssnano'),
        require('cssnext'),
        require('autoprefixer')({
            browsers: ['last 2 versions'],
            flexbox: 'no-2009'
        }),
        require('postcss-flexbugs-fixes')
    ]
};
