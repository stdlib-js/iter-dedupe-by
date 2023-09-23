// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,S=isNaN,x=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,l,f,s,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,s=0;s<e.length;s++)if(u(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=I.exec(e);n;)(r=e.slice(i,I.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=I.lastIndex,n=I.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function V(e){return"string"==typeof e}function N(e){var r,t,n;if(!V(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var P,F=Object.prototype,C=F.toString,$=F.__defineGetter__,B=F.__defineSetter__,R=F.__lookupGetter__,L=F.__lookupSetter__;P=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var G=P;function Z(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=/./;function U(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var z,J="function"==typeof Symbol?Symbol:void 0,D="function"==typeof J?J.toStringTag:"";z=X()?function(e){var r,t,n,i,o;if(null==e)return Y.call(e);t=e[D],o=D,r=null!=(i=e)&&q.call(i,o);try{e[D]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[D]=t:delete e[D],n}:function(e){return Y.call(e)};var H=z,K=Boolean,Q=Boolean.prototype.toString;var ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return U(e)||re(e)}function ne(){return new Function("return this;")()}Z(te,"isPrimitive",U),Z(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ce="object"==typeof ae?ae:null,ue="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!U(e))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ue)return ue;if(ie)return ie;if(oe)return oe;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=le.document&&le.document.childNodes,se=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge,de=/^\s*function\s*([^(]*)/i;Z(pe,"REGEXP",de),ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};var ye=ge;function be(e){return null!==e&&"object"==typeof e}var he=function(e){if("function"!=typeof e)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ye(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(be);function ve(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=de.exec(n.toString()))return r[1]}return be(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(be,"isObjectLikeArray",he);var we="function"==typeof M||"object"==typeof se||"function"==typeof fe?function(e){return ve(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ve(e).toLowerCase():r};function me(e){return"function"===we(e)}function je(e){return"number"==typeof e}var _e=Number,Ee=_e.prototype.toString;var Se=X();function xe(e){return"object"==typeof e&&(e instanceof _e||(Se?function(e){try{return Ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Oe(e){return je(e)||xe(e)}Z(Oe,"isPrimitive",je),Z(Oe,"isObject",xe);var Te=Number.POSITIVE_INFINITY,Ie=_e.NEGATIVE_INFINITY,ke=Math.floor;function Ae(e){return e<Te&&e>Ie&&ke(r=e)===r;var r}function Ve(e){return je(e)&&Ae(e)}function Ne(e){return xe(e)&&Ae(e.valueOf())}function Pe(e){return Ve(e)||Ne(e)}function Fe(e){return Ve(e)&&e>0}function Ce(e){return Ne(e)&&e.valueOf()>0}function $e(e){return Fe(e)||Ce(e)}function Be(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&me(e.next)}Z(Pe,"isPrimitive",Ve),Z(Pe,"isObject",Ne),Z($e,"isPrimitive",Fe),Z($e,"isObject",Ce);var Re=Object.prototype.hasOwnProperty;var Le,Ge,Ze="function"==typeof J&&"symbol"==typeof J("foo")&&(Ge="iterator",null!=(Le=J)&&Re.call(Le,Ge))&&"symbol"==typeof J.iterator?Symbol.iterator:null;function Me(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function Ue(e,r,t){var n,i,o,a,c,u,l,f,s;if(!Be(e))throw new TypeError(Me("0Oj44,Ln",e));if(!me(l=arguments[arguments.length-1]))throw new TypeError(Me("0Oj3q,JV",l));if(arguments.length>2){if(!Fe(r))throw new TypeError(Me("0Oj45,IB",r));f=r}else f=1;return c=NaN,n=0,s=-1,Z(a={},"next",p),Z(a,"return",g),Ze&&me(e[Ze])&&Z(a,Ze,d),a;function p(){var r,t;if(u)return{done:!0};if(t=e.next(),s+=1,t.done)return u=!0,t;if((r=l(t.value,i,o,s,c))===c){if(i=t.value,(n+=1)>f){for(;r===c;){if(t=e.next(),s+=1,t.done)return u=!0,t;r=l(t.value,i,o,s,c),i=t.value}c=r,n=1}o=i}else i=t.value,o=i,c=r,n=1;return{value:o,done:!1}}function g(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function d(){return Ue(e[Ze](),f,l)}}export{Ue as default};
//# sourceMappingURL=mod.js.map
