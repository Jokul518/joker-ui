import hljs from 'highlight.js';
import Vue from 'vue';
// 如果开启了typescript 需要额外安装 npm install @types/highlight.js
// 通过 import * as hljs from 'highlight.js' 引入
Vue.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach(block => {
        hljs.highlightBlock(block);
    });
});
