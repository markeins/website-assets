!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=1)}({1:function(e,n,t){e.exports=t("g+Rh")},"g+Rh":function(e,n){var t=lottie.loadAnimation({container:document.getElementById("intelligent-animation"),renderer:"svg",loop:!1,autoplay:!1,path:"files/intelligent.json"}),o=lottie.loadAnimation({container:document.getElementById("camera-animation"),renderer:"svg",loop:!1,autoplay:!1,path:"files/camera_blocking.json"}),a=lottie.loadAnimation({container:document.getElementById("anywhere-animation"),renderer:"svg",loop:!1,autoplay:!1,path:"files/take_anywhere.json"});new Waypoint({element:document.getElementById("intelligent-animation"),handler:function(e){"down"==e&&t.play()},offset:"50%"}),new Waypoint({element:document.getElementById("camera-animation"),handler:function(e){"down"==e&&o.play()},offset:"50%"}),new Waypoint({element:document.getElementById("anywhere-animation"),handler:function(e){"down"==e&&a.play()},offset:"50%"})}});