!function(t){var e={};function o(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=0)}([function(t,e,o){"use strict";o.r(e),o.d(e,"LayoutWorker",(function(){return r}));var a=function(t,e){var o=t.toString(),a=new Blob(["importScripts('".concat(e,"');(").concat(o,")()")],{type:"text/javascript"});return new Worker(URL.createObjectURL(a))},r=function(t){return void 0===t&&(t="https://unpkg.com/@antv/layout@latest/dist/layout.min.js"),new a((function(){var t="LAYOUT_RUN",e="LAYOUT_END",o="LAYOUT_ERROR",a="GPU_LAYOUT_RUN";layout.registerLayout("grid",layout.GridLayout),layout.registerLayout("random",layout.RandomLayout),layout.registerLayout("force",layout.ForceLayout),layout.registerLayout("circular",layout.CircularLayout),layout.registerLayout("dagre",layout.DagreLayout),layout.registerLayout("radial",layout.RadialLayout),layout.registerLayout("concentric",layout.ConcentricLayout),layout.registerLayout("mds",layout.MDSLayout),layout.registerLayout("fruchterman",layout.FruchtermanLayout),layout.registerLayout("fruchterman-gpu",layout.FruchtermanGPULayout),layout.registerLayout("gForce",layout.GForceLayout),layout.registerLayout("gForce-gpu",layout.GForceGPULayout),layout.registerLayout("comboForce",layout.ComboForceLayout),layout.registerLayout("forceAtlas2",layout.ForceAtlas2Layout),onmessage=function(r){(function(e){var o=e.data.type;return o===t||o===a})(r)&&function(r){var u=this;switch(r.data.type){case t:var n,s=r.data,y=s.nodes,i=s.edges,c=s.layoutCfg,l=(L=void 0===c?{}:c).type;if(!(d=layout.getLayoutByName(l))){this.postMessage({type:o,message:"layout ".concat(l," not found")});break}L.onLayoutEnd=function(){u.postMessage({type:e,nodes:y}),null==n||n.destroy()},(n=new d(L)).init({nodes:y,edges:i}),n.execute();break;case a:var d,g=r.data,p=g.nodes,f=(i=g.edges,g.layoutCfg),L=void 0===f?{}:f,m=g.canvas;l=L.type;if(!(d=layout.getLayoutByName(l))){this.postMessage({type:o,message:"layout ".concat(l," not found")});break}if("gpu"!==l.split("-")[1]){this.postMessage({type:o,message:"layout ".concat(l," does not support GPU")});break}var v=new d(L);v.init({nodes:p,edges:i}),v.executeWithWorker(m,this)}}(r)}}),t)};addEventListener("message",(function(t){var o,a=t.data,r=a.type,u=a.method,n=a.id,s=a.params;"RPC"===r&&u&&((o=e[u])?Promise.resolve().then((function(){return o.apply(e,s)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:n,result:t})})).catch((function(t){var e={message:t};t.stack&&(e.message=t.message,e.stack=t.stack,e.name=t.name),postMessage({type:"RPC",id:n,error:e})}))})),postMessage({type:"RPC",method:"ready"})}]);