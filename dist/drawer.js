var RevealDrawer=function(){"use strict";function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function n(n,t){var o;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(o=function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){o&&(n=o);var r=0,l=function(){};return{s:l,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var e=o.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==o.return||o.return()}finally{if(i)throw a}}}}var t={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222},o={parentElement:null,color:"red",selected:!1,onClick:null},r={parentElement:null,colors:["red","blue","green","yellow"],onColorChange:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=e.parentElement,t=e.color,r=e.selected,l=e.onClick,a={color:t,selected:r};null==n&&console.error("Please provide parent element for color selector");var c=function(){null!=l&&l(a.color),a.selected=!0},i=function(){r.settings=!1};return a.element=document.createElement("div"),a.element.className="revealjs-drawer-color_picker",a.element.style.backgroundColor=t,a.element.addEventListener("click",c),n.append(a.element),{unSelect:i,select:c}},a=function(e){var n=e.parentElement,t=void 0===n?null:n;null==t&&console.error("Please provide parent element for color container");var o=document.createElement("div");o.className="revealjs-drawer-pen_icon",t.append(o);return{changeColor:function(e){o.style.backgroundColor=e},disable:function(){o.classList.add("disabled")},enable:function(){o.classList.remove("disabled")}}};return function(){var e={},o=!1,c={},i=null,d=null,s=null,u=null,m=null,p={drawerElement:null,drawerElementContext:null,paths:[]},f=!1,v={x:0,y:0,prevX:0,prevY:0,isVisible:!1};function y(e){return t[e]}function h(){if(v.dirty=!1,v.prevX=v.x,v.prevY=v.y,0===p.paths.length)return!1;var e=p.paths[p.paths.length-1];p.drawerElementContext.fillStyle=e.color,p.drawerElementContext.strokeStyle=e.color,p.drawerElementContext.lineWidth=e.pathSize,p.drawerElementContext.stroke(e)}function g(){p.drawerElementContext.clearRect(0,0,p.drawerElement.width,p.drawerElement.height);var e,t=n(p.paths);try{for(t.s();!(e=t.n()).done;){var o=e.value;p.drawerElementContext.fillStyle=o.color,p.drawerElementContext.strokeStyle=o.color,p.drawerElementContext.lineWidth=o.pathSize,p.drawerElementContext.stroke(o)}}catch(e){t.e(e)}finally{t.f()}}function w(e){if(1===e.buttons||"touchmove"===e.type){var n=p.drawerElement.getBoundingClientRect();"touchmove"===e.type?p.paths[p.paths.length-1].lineTo(e.touches[0].clientX-n.left,e.touches[0].clientY-n.top):p.paths[p.paths.length-1].lineTo(e.clientX-n.left,e.clientY-n.top)}"touchmove"===e.type?(v.x=e.touches[0].pageX,v.y=e.touches[0].pageY):(v.x=e.pageX,v.y=e.pageY),v.dirty||!f||1!==e.buttons&&"touchmove"!==e.type||(v.dirty=!0,requestAnimationFrame(h))}function E(n){h(),p.paths.push(new Path2D),p.paths[p.paths.length-1].color=e.color,p.paths[p.paths.length-1].pathSize=e.pathSize}function C(){document.addEventListener("mousemove",w),document.addEventListener("mouseup",E),document.addEventListener("touchmove",w),document.addEventListener("touchend",E),v.isVisible=!0,u.enablePen(),s.classList.remove("disabled")}function b(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",E),v.isVisible=!1,u.disablePen(),s.classList.add("disabled"),requestAnimationFrame(h)}function k(e){var n;(n=document.createElement("canvas")).className="revealjs-drawer_canvas",document.querySelector(".revealjs-drawer").appendChild(n),(d=(i=n).getContext("2d")).canvas.width=window.innerWidth,d.canvas.height=window.innerHeight,d.imageSmoothingEnabled=!0,c[e]={drawerElement:i,drawerElementContext:d,paths:[]},p.drawerElement&&(p.drawerElement.style.display="none"),p=c[e],E()}var x=function(n){e.color=n,null!=m&&m({type:"pointerColorChange",data:{color:n}}),E()};function S(n){m=n.dispatchEvent,s=function(){var n=document.createElement("div");n.className="revealjs-drawer",n.style.display="none";var t=document.createElement("div");t.className="revealjs-drawer-menu",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=e.parentElement,t=e.colors,o=e.onColorChange;null==n&&console.error("Please provide parent element for color container");var c=a({parentElement:n}),i=document.createElement("div");i.className="revealjs-drawer-color_container",n.append(i);var d=function(e){s.selectColor=e,null!=o&&o(e),c.changeColor(e)},s={selectedColor:t[0],colors:t.reduce((function(e,n){return e[n]=l({parentElement:i,color:n,selected:n===t[0],onClick:d}),e}),{})};return c.changeColor(s.selectedColor),{selectColor:function(e){s.colors[e].select()},disablePen:function(){c.disable()},enablePen:function(){c.enable()}}}({parentElement:t,colors:e.colors,onColorChange:x}),n.append(t);var o,c,i=document.querySelector(".slides");return o=n,(c=i).parentNode.insertBefore(o,c.nextSibling),n}()}function K(e){if(e.ctrlKey&&"z"===e.key){var n=p.paths.pop();p.paths.pop(),p.paths.push(n),requestAnimationFrame(g)}}function L(n){e.colors.map((function(e,n){return String(n+1)})).includes(n.key)&&u.selectColor(e.colors[Number(n.key)-1])}function j(){s.style.display="none"===s.style.display?"block":"none",(o="none"!==s.style.display)?(document.addEventListener("keydown",K),document.addEventListener("keydown",L),C(),f=!0,null!=m&&m({type:"pointerColorChange",data:{color:e.color}})):(document.removeEventListener("keydown",K),document.removeEventListener("keydown",L),b(),f=!1,null!=m&&m({type:"pointerColorChange",data:{color:null}}))}function A(e){B(),(p=c[e]).drawerElement.style.display="block"}function B(){p.drawerElement&&(p.drawerElement.style.display="none")}return{id:"drawer",init:function(n){var t;t=n.getConfig(),null==(e=t.drawer||{}).toggleDrawKey?e.toggleDrawKey="d":e.toggleDrawKey=e.toggleDrawKey.toLowerCase(),null==e.toggleBoardKey?e.toggleBoardKey="t":e.toggleBoardKey=e.toggleBoardKey.toLowerCase(),null!=e.pathSize&&"number"==typeof e.pathSize||(e.pathSize=12),Array.isArray(e.colors)&&0!==e.colors.length||(e.colors=["#fa1e0e","#8ac926","#1982c4","#ffca3a"]),null!=e.color&&"string"==typeof e.color||(e.color=e.colors[0]),e.drawKeyCode=y(e.toggleDrawKey),e.boradKeyCode=y(e.toggleBoardKey),S(n),Reveal.on("slidetransitionend",(function(e){var n="slide-".concat(e.indexh,"-").concat(e.indexv);c[n]?A(n):k(n)})),Reveal.on("slidechanged",(function(e){B()})),Reveal.on("ready",(function(e){var n="slide-".concat(e.indexh,"-").concat(e.indexv);c[n]?A(n):k(n)})),n.addKeyBinding({keyCode:e.drawKeyCode,key:e.toggleDrawKey},(function(){(o=!o)?C():b()})),n.addKeyBinding({keyCode:e.boradKeyCode,key:e.toggleBoardKey},(function(){j()}))}}}}();
