// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iterDedupeBy=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var l,a,y,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(e,t)||c.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var l=t;function a(e,t,r){l(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(e){return"boolean"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(e,t){return null!=e&&d.call(e,t)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(e){var t,r,n;if(null==e)return v.call(e);r=e[j],t=m(e,j);try{e[j]=void 0}catch(t){return v.call(e)}return n=v.call(e),t?e[j]=r:delete e[j],n}:function(e){return v.call(e)},g=Boolean.prototype.toString;var _=s();function h(e){return"object"==typeof e&&(e instanceof Boolean||(_?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function S(e){return p(e)||h(e)}function O(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof I?I:null;var P=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return O()}if(E)return E;if(T)return T;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",C);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function F(e){return null!==e&&"object"==typeof e}function G(e){var t,r,n,o;if(("Object"===(r=w(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return F(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(F,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(F));var H="function"==typeof y||"object"==typeof x||"function"==typeof A?function(e){return G(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?G(e).toLowerCase():t};function k(e){return"function"===H(e)}function L(e){return"number"==typeof e}var M=Number,R=M.prototype.toString;var U=s();function Y(e){return"object"==typeof e&&(e instanceof M||(U?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object Number]"===w(e)))}function D(e){return L(e)||Y(e)}a(D,"isPrimitive",L),a(D,"isObject",Y);var X=Number.POSITIVE_INFINITY,q=M.NEGATIVE_INFINITY,z=Math.floor;function J(e){return e<X&&e>q&&z(t=e)===t;var t}function K(e){return L(e)&&J(e)}function Q(e){return Y(e)&&J(e.valueOf())}function W(e){return K(e)||Q(e)}function Z(e){return K(e)&&e>0}function $(e){return Q(e)&&e.valueOf()>0}function ee(e){return Z(e)||$(e)}function te(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&k(e.next)}a(W,"isPrimitive",K),a(W,"isObject",Q),a(ee,"isPrimitive",Z),a(ee,"isObject",$);var re="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function ne(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function e(t,r,n){var o,u,i,f,c,l,y,p,b;if(!te(t))throw new TypeError(ne("0CH4H",t));if(!k(y=arguments[arguments.length-1]))throw new TypeError(ne("0CH43",y));if(arguments.length>2){if(!Z(r))throw new TypeError(ne("0CH4I",r));p=r}else p=1;return c=NaN,o=0,b=-1,a(f={},"next",s),a(f,"return",v),re&&k(t[re])&&a(f,re,d),f;function s(){var e,r;if(l)return{done:!0};if(r=t.next(),b+=1,r.done)return l=!0,r;if((e=y(r.value,u,i,b,c))===c){if(u=r.value,(o+=1)>p){for(;e===c;){if(r=t.next(),b+=1,r.done)return l=!0,r;e=y(r.value,u,i,b,c),u=r.value}c=e,o=1}i=u}else u=r.value,i=u,c=e,o=1;return{value:i,done:!1}}function v(e){return l=!0,arguments.length?{value:e,done:!0}:{done:!0}}function d(){return e(t[re](),p,y)}}}));
//# sourceMappingURL=browser.js.map
