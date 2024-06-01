"use strict";var e=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var t=e(function(y,n){
function o(r){return r===""}n.exports=o
});var s=e(function(S,c){
var p=require('@stdlib/assert-is-string/dist').isObject;function q(r){return p(r)&&r.valueOf()===""}c.exports=q
});var a=e(function(E,v){
var O=t(),b=s();function f(r){return O(r)||b(r)}v.exports=f
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=a(),g=t(),j=s();m(u,"isPrimitive",g);m(u,"isObject",j);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
