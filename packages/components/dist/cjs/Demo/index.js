"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=require("react/jsx-runtime"),n=function(){return n=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var s in r=arguments[n])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},n.apply(this,arguments)};exports.Gender=void 0,(e=exports.Gender||(exports.Gender={}))[e.male=0]="male",e[e.female=1]="female";exports.Demo=function(e){var t=e.name,s=e.age,a=e.gender;return r.jsxs(r.Fragment,{children:[r.jsx("div",{children:"demo component"}),r.jsxs("div",n({className:"name"},{children:["name: ",t]})),r.jsxs("div",{children:["age: ",s]}),r.jsxs("div",{children:["gender: ",a===exports.Gender.male?"男":"女"]})]})};