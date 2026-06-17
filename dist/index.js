"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var a=n(function(l,u){
var i=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist');function v(e,r){return i(e)||i(r)||r<0||r>1?NaN:1-r+r*q(e)}u.exports=v
});var f=n(function(F,c){
var N=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-exp/dist');function y(e){if(s(e)||e<0||e>1)return N(NaN);return r;function r(t){return s(t)?NaN:1-e+e*x(t)}}c.exports=y
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=a(),g=f();m(o,"factory",g);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
