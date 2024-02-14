// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterDedupeBy=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(e){return"string"==typeof e}var u=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":u(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):l.call(i)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var i=r-e.length;return i<0?e:e=t?e+E(i):E(i)+e}var S=String.fromCharCode,k=isNaN,T=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,u,l,p,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,p=0;p<e.length;p++)if(s(i=e[p]))u+=i;else{if(r=void 0!==i.precision,!(i=V(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,k(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=x(i.arg,i.width,i.padRight)),u+=i.arg||"",l+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function _(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,i,n;for(t=[],n=0,i=I.exec(e);i;)(r=e.slice(n,I.lastIndex-i[0].length)).length&&t.push(r),t.push(_(i)),n=I.lastIndex,i=I.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function F(e){return"string"==typeof e}function A(e){var r,t;if(!F(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var C,O=Object.prototype,R=O.toString,N=O.__defineGetter__,Z=O.__defineSetter__,P=O.__lookupGetter__,L=O.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||L.call(e,r)?(i=e.__proto__,e.__proto__=O,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var W=C;function G(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function U(e){return"boolean"==typeof e}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function z(){return M&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function q(e,r){return null!=e&&D.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=z()?function(e){var r,t,i;if(null==e)return Y.call(e);t=e[J],r=q(e,J);try{e[J]=void 0}catch(r){return Y.call(e)}return i=Y.call(e),r?e[J]=t:delete e[J],i}:function(e){return Y.call(e)},Q=Boolean,ee=Boolean.prototype.toString;var re=z();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function ie(e){return U(e)||te(e)}function ne(e){return"number"==typeof e}function ae(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function oe(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+ae(n):ae(n)+e,i&&(e="-"+e)),e}G(ie,"isPrimitive",U),G(ie,"isObject",te);var ce=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ue(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ne(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=oe(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=oe(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===se.call(e.specifier)?se.call(t):ce.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function le(e){return"string"==typeof e}var pe=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,be=/e-(\d)$/,we=/^(\d+)$/,ve=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":pe(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=de.call(t,Ee,"$1e"),t=de.call(t,me,"e"),t=de.call(t,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=de.call(t,he,"e+0$1"),t=de.call(t,be,"e-0$1"),e.alternate&&(t=de.call(t,we,"$1."),t=de.call(t,ve,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ge.call(e.specifier)?ge.call(t):fe.call(t)}function Se(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ke(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Se(i):Se(i)+e}var Te=String.fromCharCode,Ve=isNaN,je=Array.isArray;function Ie(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _e(e){var r,t,i,n,a,o,c,s,u;if(!je(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(le(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ie(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ve(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ve(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ue(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ve(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ve(a)?String(i.arg):Te(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=xe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=oe(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ke(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var $e=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Fe(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ae(e){var r,t,i,n;for(t=[],n=0,i=$e.exec(e);i;)(r=e.slice(n,$e.lastIndex-i[0].length)).length&&t.push(r),t.push(Fe(i)),n=$e.lastIndex,i=$e.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Ce(e){return"string"==typeof e}function Oe(e){var r,t;if(!Ce(e))throw new TypeError(Oe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ae(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return _e.apply(null,r)}function Re(){return new Function("return this;")()}var Ne="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Pe="object"==typeof global?global:null,Le="object"==typeof globalThis?globalThis:null;var We=function(e){if(arguments.length){if(!U(e))throw new TypeError(Oe("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(Le)return Le;if(Ne)return Ne;if(Ze)return Ze;if(Pe)return Pe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=We.document&&We.document.childNodes,Be=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Xe=/^\s*function\s*([^(]*)/i;G(Ue,"REGEXP",Xe);var Me=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ze(e){return null!==e&&"object"==typeof e}function Ye(e){var r,t,i,n;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=Xe.exec(i.toString()))return r[1]}return ze(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(ze,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Oe("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!Me(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(ze));var De="function"==typeof B||"object"==typeof Be||"function"==typeof Ge?function(e){return Ye(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ye(e).toLowerCase():r};function qe(e){return"function"===De(e)}function He(e){return"number"==typeof e}var Je=X();function Ke(){return Je&&"symbol"==typeof Symbol.toStringTag}var Qe=Object.prototype.toString;var er="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof er?er.toStringTag:"";var tr=Ke()?function(e){var r,t,i;if(null==e)return Qe.call(e);t=e[rr],r=q(e,rr);try{e[rr]=void 0}catch(r){return Qe.call(e)}return i=Qe.call(e),r?e[rr]=t:delete e[rr],i}:function(e){return Qe.call(e)},ir=Number,nr=ir.prototype.toString;var ar=Ke();function or(e){return"object"==typeof e&&(e instanceof ir||(ar?function(e){try{return nr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===tr(e)))}function cr(e){return He(e)||or(e)}G(cr,"isPrimitive",He),G(cr,"isObject",or);var sr=Number.POSITIVE_INFINITY,ur=ir.NEGATIVE_INFINITY,lr=Math.floor;function pr(e){return e<sr&&e>ur&&lr(r=e)===r;var r}function fr(e){return He(e)&&pr(e)}function gr(e){return or(e)&&pr(e.valueOf())}function dr(e){return fr(e)||gr(e)}function hr(e){return fr(e)&&e>0}function br(e){return gr(e)&&e.valueOf()>0}function wr(e){return hr(e)||br(e)}function vr(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&qe(e.next)}G(dr,"isPrimitive",fr),G(dr,"isObject",gr),G(wr,"isPrimitive",hr),G(wr,"isObject",br);var yr="function"==typeof Symbol?Symbol:void 0;var mr="function"==typeof yr&&"symbol"==typeof yr("foo")&&q(yr,"iterator")&&"symbol"==typeof yr.iterator?Symbol.iterator:null;function Er(e){return"number"==typeof e}function xr(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Sr(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+xr(n):xr(n)+e,i&&(e="-"+e)),e}var kr=String.prototype.toLowerCase,Tr=String.prototype.toUpperCase;function Vr(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Er(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Sr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Sr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Tr.call(e.specifier)?Tr.call(t):kr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function jr(e){return"string"==typeof e}var Ir=Math.abs,_r=String.prototype.toLowerCase,$r=String.prototype.toUpperCase,Fr=String.prototype.replace,Ar=/e\+(\d)$/,Cr=/e-(\d)$/,Or=/^(\d+)$/,Rr=/^(\d+)e/,Nr=/\.0$/,Zr=/\.0*e/,Pr=/(\..*[^0])0*e/;function Lr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Er(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Ir(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Fr.call(t,Pr,"$1e"),t=Fr.call(t,Zr,"e"),t=Fr.call(t,Nr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Fr.call(t,Ar,"e+0$1"),t=Fr.call(t,Cr,"e-0$1"),e.alternate&&(t=Fr.call(t,Or,"$1."),t=Fr.call(t,Rr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===$r.call(e.specifier)?$r.call(t):_r.call(t)}function Wr(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Gr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Wr(i):Wr(i)+e}var Br=String.fromCharCode,Ur=isNaN,Xr=Array.isArray;function Mr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function zr(e){var r,t,i,n,a,o,c,s,u;if(!Xr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(jr(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Mr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(n=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ur(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ur(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Vr(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ur(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ur(a)?String(i.arg):Br(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Lr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Sr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Gr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Yr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Dr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function qr(e){var r,t,i,n;for(t=[],n=0,i=Yr.exec(e);i;)(r=e.slice(n,Yr.lastIndex-i[0].length)).length&&t.push(r),t.push(Dr(i)),n=Yr.lastIndex,i=Yr.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Hr(e){return"string"==typeof e}function Jr(e){var r,t,i;if(!Hr(e))throw new TypeError(Jr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=qr(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return zr.apply(null,t)}return function e(r,t,i){var n,a,o,c,s,u,l,p,f;if(!vr(r))throw new TypeError(Jr("invalid argument. First argument must an iterator protocol-compliant object. Value: `%s`.",r));if(!qe(l=arguments[arguments.length-1]))throw new TypeError(Jr("invalid argument. Last argument must be a function. Value: `%s`.",l));if(arguments.length>2){if(!hr(t))throw new TypeError(Jr("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));p=t}else p=1;return s=NaN,n=0,f=-1,G(c={},"next",g),G(c,"return",d),mr&&qe(r[mr])&&G(c,mr,h),c;function g(){var e,t;if(u)return{done:!0};if(t=r.next(),f+=1,t.done)return u=!0,t;if((e=l(t.value,a,o,f,s))===s){if(a=t.value,(n+=1)>p){for(;e===s;){if(t=r.next(),f+=1,t.done)return u=!0,t;e=l(t.value,a,o,f,s),a=t.value}s=e,n=1}o=a}else a=t.value,o=a,s=e,n=1;return{value:o,done:!1}}function d(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return e(r[mr](),p,l)}}}));
//# sourceMappingURL=index.js.map
