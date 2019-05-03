<p align="center"><a href="https://github.com/yejiang1015/xeacss" target="_blank" rel="noopener noreferrer"><img width="100" src="https://postcss.org/_/web_modules/Hero/postcss.svg" alt="Xea Css"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev">
    <img src="https://img.shields.io/static/v1.svg?label=build&message=passing&color=<COLOR>Colors" alt="Build Status">
  </a>
  <a href="https://npmcharts.com/compare/xeacss?minimal=true">
    <img src="https://img.shields.io/static/v1.svg?label=download&message=month&color=<COLOR>Colors" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/xeacss">
    <img src="https://img.shields.io/static/v1.svg?label=npm&message=v1.1.0&color=<COLOR>Colors" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/xeacss">
    <img src="https://img.shields.io/static/v1.svg?label=license&message=MIT&color=<COLOR>Colors" alt="Version">
  </a>
</p>

<h2 align="center">xeacss</h2>

## Installation

In a browser:
```html
<link rel="stylesheet" href="https://github.com/yejiang1015/xeacss/blob/master/dist/index.css" />
```

Using npm:
```shell
$ npm i xeacss
```

Using yarn:
```shell
$ yarn add xeacss
```

In project:

```js
// global style
// entry file
// vue: main.vue
// react: index.js || index.jsx

import xeacss from 'xeacss';

```

```html

<section class="flex just-center align-center ui-f18 ui-fw-b color-fff bg-000">xeacss</section>

<!-- 
  section: {
    display: flex;
    just-centent: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
  }
-->

```

## Options

Details [https://github.com/yejiang1015/xeacss/tree/master/src/](https://github.com/yejiang1015/xeacss/tree/master/src/)

Reset
```js
http://meyerweb.com/eric/tools/css/reset/
v4.0 | 20180602
License: none (public domain)

```

Size 尺寸相关

```
/* 基本间距 s xm m xl l */
$spaces: 0, 5, 8, 10, 15, 16, 20, 24, 25, 30, 32, 35, 40;

/* 公共字体颜色 */
$textColors: 000, 333, 666, 999, fff, ccc, ddd;

/* 公共字体大小 */
$textFonts: 12, 14, 16, 18, 20, 24, 28, 32;

/* 公共背景颜色 */
$backgroundColors: 000, 333, 666, 999, fff, ccc, ddd;

```

Size 非尺寸相关

```css

.flex {
    display: flex;
}

.flex-1 {
    flex: 1;
}

.flex-2 {
    flex: 2;
}

.flex-3 {
    flex: 3;
}

.flex-4 {
    flex: 4;
}

.flex-5 {
    flex: 5;
}

.flex-col {
    display: flex;
    flex-direction: column;
}

.just-start {
    justify-content: flex-start;
}

.just-center {
    justify-content: center;
}

.just-end {
    justify-content: flex-end;
}

.align-start {
    align-items: flex-start;
}

.align-center {
    align-items: center;
}

.align-end {
    align-items: flex-end;
}

.user-select {
    user-select: none;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.cursor {
    cursor: pointer;
}

```

## Postcss Plugins

```
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

```