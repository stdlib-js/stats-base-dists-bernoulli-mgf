// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r){return r>=0&&r<=1}function y(r){return r!=r}var v=Math.floor,p=Math.ceil;function b(r){return r<0?p(r):v(r)}var A=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY;function w(r){return r===_||r===A}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var d=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var h,s="function"==typeof Symbol?Symbol.toStringTag:"";h=m&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return d.call(r);n=r[s],a=s,t=null!=(o=r)&&U.call(o,a);try{r[s]=void 0}catch(t){return d.call(r)}return e=d.call(r),t?r[s]=n:delete r[s],e}:function(r){return d.call(r)};var j=h,g="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var I,O="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(g&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,E="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var H,T="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,t,n;if("function"!=typeof F)return!1;try{t=new F([1,3.14,-3.14,NaN]),n=t,r=(E&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G=H,P="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var V,W="function"==typeof Uint8Array?Uint8Array:void 0;V=function(){var r,t,n;if("function"!=typeof L)return!1;try{t=new L(t=[1,3.14,-3.14,256,257]),n=t,r=(P&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var M=V,k="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var Y,C="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,65536,65537]),n=t,r=(k&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?C:function(){throw new Error("not implemented")};var q,z={uint16:Y,uint8:M};(q=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(q.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new G(1),R=new S(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,t){return Q[0]=t,r[0]=R[X],r[1]=R[Z],r}function rr(r,t){return 1===arguments.length?$([0,0],r):$(r,t)}var tr,nr,er=!0===J?1:0,or=new G(1),ar=new S(or.buffer);function ir(r){return or[0]=r,ar[er]}!0===J?(tr=1,nr=0):(tr=0,nr=1);var ur={HIGH:tr,LOW:nr},fr=new G(1),cr=new S(fr.buffer),lr=ur.HIGH,yr=ur.LOW;function vr(r,t){return cr[lr]=r,cr[yr]=t,fr[0]}var pr=[0,0];function br(r,t){return y(t)||w(t)?(r[0]=t,r[1]=0,r):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Ar=[0,0],_r=[0,0];function wr(r,t){var n,e,o,a,i;return 0===t||0===r||y(r)||w(r)?r:(function(r,t){1===arguments.length?br([0,0],r):br(r,t)}(Ar,r),t+=Ar[1],t+=function(r){var t=ir(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Ar[0]),t<-1074?(o=r,rr(pr,0),a=pr[0],a&=2147483647,i=ir(o),vr(a|=i&=2147483648,pr[1])):t>1023?r<0?A:_:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,rr(_r,r),n=_r[0],n&=2148532223,e*vr(n|=t+1023<<20,_r[1])))}function mr(r){var t;return y(r)||r===_?r:r===A?0:r>709.782712893384?_:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,i;return wr(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=b(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function dr(r,t){return y(r)||!l(t)?NaN:1-t+t*mr(r)}function Ur(r){return l(r)?function(t){if(y(t))return NaN;return 1-r+r*mr(t)}:(t=NaN,function(){return t});var t}c(dr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Ur});export{dr as default,Ur as factory};
//# sourceMappingURL=mod.js.map
