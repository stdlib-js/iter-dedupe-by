// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,d=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",T=_,x=O,S=w;var V=j,k=function(r){var e,t,n;if(null==r)return S.call(r);t=r[x],e=T(r,x);try{r[x]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[x]=t:delete r[x],n},I=y()?k:V,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},N=h,C=M;var B=m,G=function(r){return N(r)||C(r)},L=M;B(G,"isPrimitive",h),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=d,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;m(ir,"REGEXP",nr());var ar=ir,or=I;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};m(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var fr=cr;var sr=I,lr=ar.REGEXP,vr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pr=function(r){var e,t,n;if(("Object"===(t=sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return vr(r)?"Buffer":t},gr=pr;var mr=pr;var dr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},hr=function(r){return mr(r).toLowerCase()},br=tr()?hr:dr;var yr=function(r){return"function"===br(r)};var wr=function(r){return"number"==typeof r},Er=Number,jr=Er.prototype.toString;var Pr=I,_r=Er,Or=function(r){try{return jr.call(r),!0}catch(r){return!1}},Tr=y();var xr=function(r){return"object"==typeof r&&(r instanceof _r||(Tr?Or(r):"[object Number]"===Pr(r)))},Sr=wr,Vr=xr;var kr=m,Ir=function(r){return Sr(r)||Vr(r)},Ar=xr;kr(Ir,"isPrimitive",wr),kr(Ir,"isObject",Ar);var Fr=Ir,Rr=Number.POSITIVE_INFINITY,$r=Er.NEGATIVE_INFINITY,Mr=Math.floor;var Nr=function(r){return Mr(r)===r},Cr=Rr,Br=$r,Gr=Nr;var Lr=function(r){return r<Cr&&r>Br&&Gr(r)},Zr=Fr.isPrimitive,Wr=Lr;var Xr=function(r){return Zr(r)&&Wr(r)},zr=Fr.isObject,Ur=Lr;var Yr=function(r){return zr(r)&&Ur(r.valueOf())},Dr=Xr,qr=Yr;var Hr=m,Jr=function(r){return Dr(r)||qr(r)},Kr=Yr;Hr(Jr,"isPrimitive",Xr),Hr(Jr,"isObject",Kr);var Qr=Jr,re=Qr.isPrimitive;var ee=function(r){return re(r)&&r>0},te=Qr.isObject;var ne=function(r){return te(r)&&r.valueOf()>0},ie=ee,ae=ne;var oe=m,ue=function(r){return ie(r)||ae(r)},ce=ne;oe(ue,"isPrimitive",ee),oe(ue,"isObject",ce);var fe=ue,se=yr;var le=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&se(r.next)},ve=_;var pe=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&ve(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var ge=function(r){return"string"==typeof r},me=String.prototype.valueOf;var de=I,he=function(r){try{return me.call(r),!0}catch(r){return!1}},be=y();var ye=function(r){return"object"==typeof r&&(r instanceof String||(be?he(r):"[object String]"===de(r)))},we=ge,Ee=ye;var je=m,Pe=function(r){return we(r)||Ee(r)},_e=ye;je(Pe,"isPrimitive",ge),je(Pe,"isObject",_e);var Oe=Pe,Te=Nr;var xe=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Te(r.length)&&r.length>=0&&r.length<=9007199254740991};var Se=function(r){return r!=r},Ve=Fr.isPrimitive,ke=Se;var Ie=function(r){return Ve(r)&&ke(r)},Ae=Fr.isObject,Fe=Se;var Re=function(r){return Ae(r)&&Fe(r.valueOf())},$e=Ie,Me=Re;var Ne=m,Ce=function(r){return $e(r)||Me(r)},Be=Re;Ne(Ce,"isPrimitive",Ie),Ne(Ce,"isObject",Be);var Ge=xe,Le=Qr.isPrimitive,Ze=Oe.isPrimitive,We=Ce.isPrimitive;var Xe=function(r,e,t){var n,i,a;if(!Ge(r)&&!Ze(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Le(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ze(r)){if(!Ze(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,We(e)){for(a=i;a<n;a++)if(We(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},ze=Oe.isPrimitive;var Ue=function(r){if(!ze(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ye=Oe.isPrimitive;var De=function(r){if(!Ye(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},qe=Ue,He=De,Je=Oe.isPrimitive;var Ke=function(r){return Je(r)&&r===He(r)&&r!==qe(r)},Qe=Rr,rt=$r;var et=function(r){return r==r&&r>rt&&r<Qe},tt=Qr.isPrimitive;var nt=function(r){return tt(r)&&r>=0},it=Qr.isObject;var at=function(r){return it(r)&&r.valueOf()>=0},ot=nt,ut=at;var ct=m,ft=function(r){return ot(r)||ut(r)},st=at;ct(ft,"isPrimitive",nt),ct(ft,"isObject",st);var lt=ft.isPrimitive,vt=Oe.isPrimitive;var pt=function(r,e){var t,n;if(!vt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!lt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},gt=Qr.isPrimitive,mt=Oe.isPrimitive;var dt=pt,ht=function(r,e,t){var n,i;if(!mt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!mt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!gt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var bt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ht(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+dt("0",i):dt("0",i)+r,n&&(r="-"+r)),r},yt=Ke,wt=De,Et=Ue,jt=et,Pt=Fr.isPrimitive,_t=bt;var Ot=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!jt(n)){if(!Pt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_t(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_t(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=yt(r.specifier)?wt(t):Et(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Tt=Oe.isPrimitive,xt=/[-\/\\^$*+?.()|[\]{}]/g;var St=function(r){var e,t;if(!Tt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(xt,"\\$&"):(e=(e=r.substring(1,t)).replace(xt,"\\$&"),r=r[0]+e+r.substring(t))},Vt=RegExp.prototype.exec;var kt=I,It=function(r){try{return Vt.call(r),!0}catch(r){return!1}},At=y();var Ft=St,Rt=yr,$t=Oe.isPrimitive,Mt=function(r){return"object"==typeof r&&(r instanceof RegExp||(At?It(r):"[object RegExp]"===kt(r)))};var Nt=Ke,Ct=De,Bt=Ue,Gt=function(r,e,t){if(!$t(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if($t(e))e=Ft(e),e=new RegExp(e,"g");else if(!Mt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!$t(t)&&!Rt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Lt=et,Zt=Fr.isPrimitive,Wt=function(r){return Math.abs(r)},Xt=/e\+(\d)$/,zt=/e-(\d)$/,Ut=/^(\d+)$/,Yt=/^(\d+)e/,Dt=/\.0$/,qt=/\.0*e/,Ht=/(\..*[^0])0*e/;var Jt=function(r){var e,t,n=parseFloat(r.arg);if(!Lt(n)){if(!Zt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Wt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Gt(t,Ht,"$1e"),t=Gt(t,qt,"e"),t=Gt(t,Dt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Gt(t,Xt,"e+0$1"),t=Gt(t,zt,"e-0$1"),r.alternate&&(t=Gt(t,Ut,"$1."),t=Gt(t,Yt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Nt(r.specifier)?Ct(t):Bt(t)},Kt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Qt=pt;var rn=Oe.isPrimitive,en=Xe,tn=Se,nn=Ot,an=Jt,on=function(r){var e,t,n,i,a;for(e=0,n=[],a=Kt.exec(r);a;)(t=r.slice(e,Kt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Kt.lastIndex,a=Kt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},un=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Qt(" ",n):Qt(" ",n)+r},cn=bt,fn=String.fromCharCode;var sn=m,ln=yr,vn=fe.isPrimitive,pn=le,gn=pe,mn=function(r){var e,t,n,i,a,o,u,c,f;if(!rn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=on(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],rn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!en(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,tn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,tn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=nn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!tn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=tn(a)?String(n.arg):fn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=an(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=cn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=un(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var dn=function r(e,t,n){var i,a,o,u,c,f,s,l,v;if(!pn(e))throw new TypeError(mn("invalid argument. First argument must an iterator protocol-compliant object. Value: `%s`.",e));if(!ln(s=arguments[arguments.length-1]))throw new TypeError(mn("invalid argument. Last argument must be a function. Value: `%s`.",s));if(arguments.length>2){if(!vn(t))throw new TypeError(mn("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));l=t}else l=1;return c=NaN,i=0,v=-1,sn(u={},"next",p),sn(u,"return",g),gn&&ln(e[gn])&&sn(u,gn,m),u;function p(){var r,t;if(f)return{done:!0};if(t=e.next(),v+=1,t.done)return f=!0,t;if((r=s(t.value,a,o,v,c))===c){if(a=t.value,(i+=1)>l){for(;r===c;){if(t=e.next(),v+=1,t.done)return f=!0,t;r=s(t.value,a,o,v,c),a=t.value}c=r,i=1}o=a}else a=t.value,o=a,c=r,i=1;return{value:o,done:!1}}function g(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function m(){return r(e[gn](),l,s)}},hn=dn;export{hn as default};
//# sourceMappingURL=mod.js.map
