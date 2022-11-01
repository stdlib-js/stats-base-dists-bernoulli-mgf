// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(t){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(a.call(t,n)||f.call(t,n)?(c=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=c):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,n,r.get),p&&u&&u.call(t,n,r.set),t};function l(t,n,r){c(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return t>=0&&t<=1}function p(t){return t!=t}var b=Math.floor,v=Math.ceil;function d(t){return t<0?v(t):b(t)}var _=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY;function A(t){return t===s||t===_}var w,m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,U=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",j=m&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return h.call(t);r=t[g],i=g,n=null!=(o=t)&&U.call(o,i);try{t[g]=void 0}catch(n){return h.call(t)}return e=h.call(t),n?t[g]=r:delete t[g],e}:function(t){return h.call(t)},N="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(N&&r instanceof Uint32Array||"[object Uint32Array]"===j(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=w,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,n,r;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),r=n,t=(F&&r instanceof Float64Array||"[object Float64Array]"===j(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var t,n,r;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),r=n,t=(x&&r instanceof Uint8Array||"[object Uint8Array]"===j(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?M:function(){throw new Error("not implemented")};var V,W=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),r=n,t=(k&&r instanceof Uint16Array||"[object Uint16Array]"===j(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?C:function(){throw new Error("not implemented")};var q,z={uint16:V,uint8:W};(q=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(q.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(t,n){return Q[0]=n,t[0]=R[X],t[1]=R[Z],t}function tt(t,n){return 1===arguments.length?$([0,0],t):$(t,n)}var nt,rt,et=!0===J?1:0,ot=new P(1),it=new E(ot.buffer);function ut(t){return ot[0]=t,it[et]}!0===J?(nt=1,rt=0):(nt=0,rt=1);var at={HIGH:nt,LOW:rt},ft=new P(1),ct=new E(ft.buffer),lt=at.HIGH,yt=at.LOW;function pt(t,n){return ct[lt]=t,ct[yt]=n,ft[0]}var bt=[0,0];function vt(t,n,r,e){return p(t)||A(t)?(n[e]=t,n[e+r]=0,n):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}l((function(t){return vt(t,[0,0],1,0)}),"assign",vt);var dt=[0,0],_t=[0,0];function st(t,n){var r,e,o,i,u;return 0===n||0===t||p(t)||A(t)?t:(vt(t,dt,1,0),n+=dt[1],n+=function(t){var n=ut(t);return(n=(2146435072&n)>>>20)-1023|0}(t=dt[0]),n<-1074?(o=t,tt(bt,0),i=bt[0],i&=2147483647,u=ut(o),pt(i|=u&=2147483648,bt[1])):n>1023?t<0?_:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tt(_t,t),r=_t[0],r&=2148532223,e*pt(r|=n+1023<<20,_t[1])))}var At=1.4426950408889634,wt=1/(1<<28);function mt(t){var n;return p(t)||t===s?t:t===_?0:t>709.782712893384?s:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<wt?1+t:function(t,n,r){var e,o,i,u;return st(1-(n-(e=t-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),r)}(t-.6931471803691238*(n=d(t<0?At*t-.5:At*t+.5)),1.9082149292705877e-10*n,n)}function ht(t,n){return p(t)||!y(n)?NaN:1-n+n*mt(t)}function Ut(t){return y(t)?function(n){return p(n)?NaN:1-t+t*mt(n)}:(n=NaN,function(){return n});var n}l(ht,"factory",Ut),t.default=ht,t.factory=Ut,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).mgf={});
//# sourceMappingURL=index.js.map
