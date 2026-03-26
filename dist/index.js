"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=t(function(d,a){
var c=require('@stdlib/math-base-assert-is-probability/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist');function v(e,r){return f(e)||!c(r)?NaN:1-r+r*q(e)}a.exports=v
});var s=t(function(p,n){
var y=require('@stdlib/utils-constant-function/dist'),N=require('@stdlib/math-base-assert-is-probability/dist'),x=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-exp/dist');function l(e){if(!N(e))return y(NaN);return r;function r(i){return x(i)?NaN:1-e+e*b(i)}}n.exports=l
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),g=s();m(o,"factory",g);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
