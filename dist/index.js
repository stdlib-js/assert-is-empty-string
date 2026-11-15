"use strict";var e=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(o){throw (i=0, o)}};};var t=e(function(S,n){
function p(r){return r===""}n.exports=p
});var s=e(function(E,c){
var q=require('@stdlib/assert-is-string/dist').isObject;function O(r){return q(r)&&r.valueOf()===""}c.exports=O
});var a=e(function(P,v){
var b=t(),f=s();function g(r){return b(r)||f(r)}v.exports=g
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),j=t(),x=s();m(u,"isPrimitive",j);m(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
