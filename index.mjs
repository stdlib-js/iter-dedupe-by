// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function o(d,l,m){var f,u,v,j,p,a,h,c,g;if(!n(d))throw new TypeError(i("0Oj44",d));if(!r(h=arguments[arguments.length-1]))throw new TypeError(i("0Oj3q",h));if(arguments.length>2){if(!t(l))throw new TypeError(i("0Oj45",l));c=l}else c=1;return p=NaN,f=0,g=-1,e(j={},"next",(function(){var e,r;if(a)return{done:!0};if(r=d.next(),g+=1,r.done)return a=!0,r;if((e=h(r.value,u,v,g,p))===p){if(u=r.value,(f+=1)>c){for(;e===p;){if(r=d.next(),g+=1,r.done)return a=!0,r;e=h(r.value,u,v,g,p),u=r.value}p=e,f=1}v=u}else u=r.value,v=u,p=e,f=1;return{value:v,done:!1}})),e(j,"return",(function(e){if(a=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&r(d[s])&&e(j,s,(function(){return o(d[s](),c,h)})),j}export{o as default};
//# sourceMappingURL=index.mjs.map
