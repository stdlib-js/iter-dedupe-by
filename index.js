// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterDedupeBy=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[j],e=m(t,j);try{t[j]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[j]=r:delete t[j],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var h=s();function w(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function S(t){return p(t)||w(t)}function O(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",w);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,I="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(E)return E;if(T)return T;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),P=N.document&&N.document.childNodes,A=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(x,"REGEXP",B);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function V(t){return null!==t&&"object"==typeof t}function F(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!C(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var G="function"==typeof y||"object"==typeof A||"function"==typeof P?function(t){return F(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?F(t).toLowerCase():e};function H(t){return"function"===G(t)}function k(t){return"number"==typeof t}var L=Number,M=L.prototype.toString;var R=s();function U(t){return"object"==typeof t&&(t instanceof L||(R?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function Y(t){return k(t)||U(t)}a(Y,"isPrimitive",k),a(Y,"isObject",U);var D=Number.POSITIVE_INFINITY,X=L.NEGATIVE_INFINITY,q=Math.floor;function z(t){return t<D&&t>X&&q(e=t)===e;var e}function J(t){return k(t)&&z(t)}function K(t){return U(t)&&z(t.valueOf())}function Q(t){return J(t)||K(t)}function W(t){return J(t)&&t>0}function Z(t){return K(t)&&t.valueOf()>0}function $(t){return W(t)||Z(t)}function tt(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&H(t.next)}a(Q,"isPrimitive",J),a(Q,"isObject",K),a($,"isPrimitive",W),a($,"isObject",Z);var et="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function rt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function t(e,r,n){var o,u,i,f,c,l,y,p,b;if(!tt(e))throw new TypeError(rt("0CH4H",e));if(!H(y=arguments[arguments.length-1]))throw new TypeError(rt("0CH43",y));if(arguments.length>2){if(!W(r))throw new TypeError(rt("0CH4I",r));p=r}else p=1;return c=NaN,o=0,b=-1,a(f={},"next",s),a(f,"return",v),et&&H(e[et])&&a(f,et,d),f;function s(){var t,r;if(l)return{done:!0};if(r=e.next(),b+=1,r.done)return l=!0,r;if((t=y(r.value,u,i,b,c))===c){if(u=r.value,(o+=1)>p){for(;t===c;){if(r=e.next(),b+=1,r.done)return l=!0,r;t=y(r.value,u,i,b,c),u=r.value}c=t,o=1}i=u}else u=r.value,i=u,c=t,o=1;return{value:i,done:!1}}function v(t){return l=!0,arguments.length?{value:t,done:!0}:{done:!0}}function d(){return t(e[et](),p,y)}}}));
//# sourceMappingURL=index.js.map
