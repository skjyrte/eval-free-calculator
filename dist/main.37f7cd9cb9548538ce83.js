(()=>{var e={137:(e,r,t)=>{"use strict";var o=t(81),a=t.n(o),n=t(645),i=t.n(n),c=t(667),l=t.n(c),s=new URL(t(227),t.b),d=i()(a()),u=l()(s);d.push([e.id,`@font-face{font-family:"League Spartan";src:url(${u}) format("woff2")}.theme1Color{--color1: hsl(0, 0%, 100%);--color2: hsl(6, 63%, 50%);--color3: hsl(6, 70%, 34%);--color4: hsl(30, 25%, 89%);--color5: hsl(221, 14%, 31%);--color6: hsl(222, 26%, 31%);--color7: hsl(223, 31%, 20%);--color8: hsl(224, 36%, 15%);--color9: hsl(224, 28%, 35%)}.theme2Color{--color1: hsl(10, 50%, 100%);--color2: hsl(56, 63%, 50%);--color3: hsl(36, 70%, 34%);--color4: hsl(130, 25%, 89%);--color5: hsl(231, 14%, 31%);--color6: hsl(232, 26%, 31%);--color7: hsl(233, 31%, 20%);--color8: hsl(234, 36%, 15%);--color9: hsl(234, 28%, 35%)}.theme3Color{--color1: hsl(10, 0%, 100%);--color2: hsl(16, 63%, 50%);--color3: hsl(16, 70%, 34%);--color4: hsl(50, 25%, 89%);--color5: hsl(201, 14%, 31%);--color6: hsl(202, 26%, 31%);--color7: hsl(203, 31%, 20%);--color8: hsl(204, 36%, 15%);--color9: hsl(204, 28%, 35%)}html{font-family:"League Spartan",sans-serif;font-weight:700}body{background-color:var(--color6);width:100vw;min-width:300px;height:100vh;padding:25px;display:flex;flex-direction:column;justify-content:start;box-sizing:border-box;color:var(--color1)}.outerFrame{background-color:var(--color6);display:flex;flex-direction:column;justify-content:start;box-sizing:border-box;width:100%;height:100%;border-radius:5px}.resultBoxFrame{padding:10px;border-radius:10px;margin-bottom:30px;min-height:80px;background-color:var(--color8)}.resultBox{width:100%;height:100%;display:flex;justify-content:end;align-items:center;overflow-wrap:anywhere;font-size:36px}.keyboardFrame{border-radius:10px;background-color:var(--color7);padding:20px;flex:1;display:flex}.keyboard{width:100%;display:grid;grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);grid-template-rows:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);row-gap:11px;column-gap:11px;grid-template-areas:"keySeven keyEight keyNine keyDel" "keyFour keyFive keySix keyAdd" "keyOne keyTwo keyThree keySubstract" "keyDot keyZero keyDivide keyMultiply" "keyReset keyReset keyEqual keyEqual"}.gridItem{width:100%;padding:0;display:flex;align-items:center;justify-content:center;background-color:var(--color4);font-size:32px;text-align:center;border-radius:5px;color:var(--color5);font-family:inherit;font-weight:inherit}.gridItem:active{transition:.2s;background-color:var(--color1)}.keyOne{grid-area:keyOne}.keyTwo{grid-area:keyTwo}.keyThree{grid-area:keyThree}.keyFour{grid-area:keyFour}.keyFive{grid-area:keyFive}.keySix{grid-area:keySix}.keySeven{grid-area:keySeven}.keyEight{grid-area:keyEight}.keyNine{grid-area:keyNine}.keyZero{grid-area:keyZero}.keyDel,.keyReset{font-size:20px;color:var(--color1);background-color:var(--color9)}.keyDel:active,.keyReset:active{transition:.2s;background-color:var(--color6)}.keyDel{grid-area:keyDel}.keyReset{grid-area:keyReset}.keyAdd{grid-area:keyAdd}.keySubstract{grid-area:keySubstract}.keyMultiply{grid-area:keyMultiply}.keyDivide{grid-area:keyDivide}.keyDot{grid-area:keyDot}.keyEqual{grid-area:keyEqual;color:var(--color1);background-color:var(--color2);font-size:24px}.keyEqual:active{transition:.2s;background-color:var(--color3)}.headerBox{min-height:50px;margin-bottom:30px;width:100%;display:flex}.titleBar{font-size:30px}.spaceBar{flex:1}.themeParagraph{padding-top:30px;height:20px;text-align:center}.themeRadio{width:96px;height:30px;display:flex;margin-top:20px}.radioBox{width:100%;height:30px;background-color:var(--color7);border-radius:15px;display:flex;flex-direction:row}.theme1Button,.theme2Button,.theme3Button{width:20px;height:20px;border-radius:10px;text-align:center;border:1px solid var(--color2);margin:5px}.theme1Button .label,.theme2Button .label,.theme3Button .label{transform:translate(0, -20px)}@media(hover: hover){.activatedStateOff:hover,.activatedStateOn:hover{transition:.5s;background-color:var(--color4)}}.activatedStateOff{background-color:rgba(0,0,0,0)}.activatedStateOn{background-color:var(--color3)}@media(min-width: 600px){.outerFrame{width:550px;height:800px;margin-left:auto;margin-right:auto}}`,""])},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",o=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),o&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),o&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,o,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&i[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),r.push(d))}},r}},667:e=>{"use strict";e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},546:()=>{var e;function r(){document.querySelectorAll(".theme").forEach((function(e){e.classList.remove("activatedStateOn"),e.classList.add("activatedStateOff")}))}function t(e){document.documentElement.className="theme".concat(e,"Color"),document.querySelector(".theme".concat(e,"Button")).classList.remove("activatedStateOff"),document.querySelector(".theme".concat(e,"Button")).classList.add("activatedStateOn")}"1"===(e=localStorage.getItem("theme"))||"2"===e||"3"===e?(r(),t(e)):(r(),t("1")),document.querySelector(".radioBox").addEventListener("click",(function(e){var o=e.target.dataset.value;"1"!==o&&"2"!==o&&"3"!==o||(r(),t(o),localStorage.setItem("theme",o))}))},227:(e,r,t)=>{"use strict";e.exports=t.p+"20305c507db5eb95a028.ttf"}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={id:o,exports:{}};return e[o](n,n.exports,t),n.exports}t.m=e,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{"use strict";function e(e,t){return"="===e?function(e){var r=new RegExp(/(\+|-|\/|\*|\.|[0-9])/g);try{for(var t=0,o=e;t<o.length;t++)if(-1===o[t].search(r))throw new TypeError("INTERNAL ERROR");return function(e){var r=new RegExp(/(\+|-|\/|\*)/g),t=new RegExp(/(\/|\*)/g);try{for(var o=e;-1!==o.search(t);){var a=o[o.search(t)],n=o.split(r),i=n.indexOf(a),c=i-1,l=i+1;if("*"===a&&(n[c]=(parseFloat(n[c])*parseFloat(n[l])).toString()),"/"===a){if(0===parseFloat(n[l]))throw new TypeError("DIVIDE BY ZERO");n[c]=(parseFloat(n[c])/parseFloat(n[l])).toString()}n[i]="",n[l]="",o=n.join("")}return function(e){var r=new RegExp(/(?=[+-])/g),t=new RegExp(/(\/|\*)/g);try{if(-1!==e.search(t))throw new TypeError("INTERNAL ERROR");var o=e.split(r).map((function(e){return parseFloat(e)})).reduce((function(e,r){return e+r}),0).toString();if("NaN"===o)throw new TypeError("INPUT ERROR");return o}catch(e){return e.message}}(o)}catch(e){return e.message}}(e)}catch(e){return e.message}}(t):function(e,t){if(e.match(new RegExp(/^[0-9.]$/g)))return function(e,t){var o=Math.max(t.lastIndexOf("-"),t.lastIndexOf("+"),t.lastIndexOf("*"),t.lastIndexOf("/"));return r("."===e?-1===t.substring(o,t.length-1).indexOf(".")?t+e:t:"0"!==t?t+e:e)}(e,t);if(e.match(new RegExp(/[+\-/*]$/g)))return function(e,t){var o=""===t?t="0":t;return r(o=o[o.length-1].match(new RegExp(/[+\-/*]$/g))?o:o+e)}(e,t);if("del"===e)return function(e){return r(e.slice(0,-1))}(t);if("reset"===e)return"0";throw new TypeError("INTERNAL ERROR")}(e,t)}function r(e){return""===e||-1!==e.search(new RegExp(/^[A-Z]/g))?"0":e}t(137),t(546),document.querySelector(".keyboard").addEventListener("click",(function(r){null!=r.target.value&&(document.querySelector(".resultBox").innerHTML=e(r.target.value,document.querySelector(".resultBox").innerHTML))}))})()})();