(function(e){function t(t){for(var i,a,l=t[0],c=t[1],r=t[2],u=0,h=[];u<l.length;u++)a=l[u],s[a]&&h.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(h.length)h.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,l=1;l<n.length;l++){var c=n[l];0!==s[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"1afb":function(e,t,n){},"27f1":function(e,t,n){e.exports=n.p+"img/angle-left-solid.b735719b.svg"},3407:function(e,t,n){e.exports=n.p+"img/angle-double-right-solid.67a570c7.svg"},"4e21":function(e,t,n){"use strict";var i=n("1afb"),s=n.n(i);s.a},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container mt-3"},[n("DualListBox",{attrs:{source:e.source,destination:e.destination,label:"label"},on:{onChangeList:e.onChangeList}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6"},[n("pre",[e._v(e._s(e.source))])]),n("div",{staticClass:"col-sm-6"},[n("pre",[e._v(e._s(e.destination))])])]),n("div",{staticClass:"btn btn-primary",on:{click:e.display}},[e._v("Display")])],1)])},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-box-wrapper"},[n("div",{staticClass:"list-box-item"},[n("md-field",{staticClass:"search",attrs:{"md-clearable":""}},[n("label",[e._v("Search")]),n("md-input",{model:{value:e.searchSource,callback:function(t){e.searchSource=t},expression:"searchSource"}})],1),n("md-content",{staticClass:"md-scrollbar"},[n("md-list",[e._l(e.source.map(function(e,t){return Object.assign({},{inx:t},e)}).filter(function(t){return t[e.label in t?e.label:"label"].toLowerCase().includes(e.searchSource.toLowerCase())}),function(t,i){return n("md-list-item",{key:i,class:t.selected?"active":"",on:{click:function(n){return e.selectSource(e.searchSource?t.inx:i)}}},[e._v(e._s(t[e.label in t?e.label:"label"]))])}),0==e.source.filter(function(t){return t[e.label in t?e.label:"label"].toLowerCase().includes(e.searchSource.toLowerCase())}).length&&e.source.length?n("md-list-item",[e._v("No results found")]):e._e()],2)],1),n("div",{staticClass:"bulk-action"},[n("md-button",{staticClass:"md-raised md-primary width-100 no-margin",on:{click:e.selectAllSource}},[e._v("Select All")]),n("md-button",{staticClass:"md-raised width-100 no-margin",on:{click:e.deSelectAllSource}},[e._v("None")])],1)],1),n("div",{staticClass:"actions"},[n("md-button",{staticClass:"btn-action md-fab md-primary",on:{click:e.moveDestination}},[n("md-icon",[e._v("keyboard_arrow_right")])],1),n("md-button",{staticClass:"btn-action md-fab md-primary",on:{click:e.moveAllDestination}},[n("md-icon",[e._v("fast_forward")])],1),n("md-button",{staticClass:"btn-action md-fab md-primary",on:{click:e.moveSource}},[n("md-icon",[e._v("keyboard_arrow_left")])],1),n("md-button",{staticClass:"btn-action md-fab md-primary",on:{click:e.moveAllSource}},[n("md-icon",[e._v("fast_rewind")])],1)],1),n("div",{staticClass:"list-box-item"},[n("md-field",{staticClass:"search",attrs:{"md-clearable":""}},[n("label",[e._v("Search")]),n("md-input",{model:{value:e.searchDestination,callback:function(t){e.searchDestination=t},expression:"searchDestination"}})],1),n("md-content",{staticClass:"md-scrollbar"},[n("md-list",e._l(e.destination.map(function(e,t){return Object.assign({},{inx:t},e)}).filter(function(t){return t[e.label in t?e.label:"label"].toLowerCase().includes(e.searchDestination.toLowerCase())}),function(t,i){return n("md-list-item",{key:i,class:t.selected?" active":"",on:{click:function(n){return e.selectDestination(e.searchDestination?t.inx:i)}}},[e._v(e._s(t[e.label in t?e.label:"label"]))])}),1),0==e.destination.filter(function(t){return t[e.label in t?e.label:"label"].toLowerCase().includes(e.searchDestination.toLowerCase())}).length&&e.destination.length?n("md-list-item",{staticClass:"list-item"},[e._v("No results found")]):e._e()],1),n("div",{staticClass:"bulk-action"},[n("md-button",{staticClass:"md-raised md-primary width-100 no-margin",on:{click:e.selectAllDestination}},[e._v("Select All")]),n("md-button",{staticClass:"md-raised width-100 no-margin",on:{click:e.deSelectAllDestination}},[e._v("None")])],1)],1)])},l=[],c=n("667a"),r=n.n(c),d=n("27f1"),u=n.n(d),h=n("cf78"),f=n.n(h),m=n("3407"),b=n.n(m),p=(n("7d05"),{props:{source:Array,destination:Array,label:String},data:function(){return{angleRight:r.a,angleLeft:u.a,angleDoubleLeft:f.a,angleDoubleRight:b.a,searchSource:"",searchDestination:""}},methods:{moveDestination:function(){let e=this.source.filter(e=>e.selected);if(!e.length)return;e=e.map(e=>({...e,selected:!1}));let t=[...e,...this.destination],n=this.source.filter(e=>!e.selected);this.searchSource="",this.searchDestination="",this.$emit("onChangeList",{source:n,destination:t})},moveSource:function(){let e=this.destination.filter(e=>e.selected);if(!e.length)return;e=e.map(e=>({...e,selected:!1}));let t=[...e,...this.source],n=this.destination.filter(e=>!e.selected);this.searchSource="",this.searchDestination="",this.$emit("onChangeList",{source:t,destination:n})},moveAllDestination:function(){let e=[...this.source.map(e=>({...e,selected:!1})),...this.destination],t=[];this.searchSource="",this.searchDestination="",this.$emit("onChangeList",{source:t,destination:e})},moveAllSource:function(){let e=[...this.destination.map(e=>({...e,selected:!1})),...this.source],t=[];this.searchSource="",this.searchDestination="",this.$emit("onChangeList",{source:e,destination:t})},selectDestination:function(e){let t=this.source,n=this.destination.map((t,n)=>{return n===e&&(t.selected=!t.selected),t});this.$emit("onChangeList",{source:t,destination:n})},selectSource:function(e){let t=this.destination,n=this.source.map((t,n)=>{return n===e&&(t.selected=!t.selected),t});this.$emit("onChangeList",{source:n,destination:t})},selectAllSource:function(){let e=this.source.map(e=>({...e,selected:!0})),t=this.destination;this.$emit("onChangeList",{source:e,destination:t})},deSelectAllSource:function(){let e=this.source.map(e=>({...e,selected:!1})),t=this.destination;this.$emit("onChangeList",{source:e,destination:t})},selectAllDestination:function(){let e=this.destination.map(e=>({...e,selected:!0})),t=this.source;this.$emit("onChangeList",{source:t,destination:e})},deSelectAllDestination:function(){let e=this.destination.map(e=>({...e,selected:!1})),t=this.source;this.$emit("onChangeList",{source:t,destination:e})}}}),v=p,g=(n("4e21"),n("2877")),C=Object(g["a"])(v,a,l,!1,null,"84735fc4",null),_=C.exports;const S=[{label:"WHITE",code:"#FFFFFF"},{label:"SILVER",code:"#C0C0C0"},{label:"GRAY",code:"#808080"},{label:"BLACK",code:"#000000"},{label:"RED",code:"#FF0000"},{label:"MAROON",code:"#800000"},{label:"YELLOW",code:"#FFFF00"},{label:"OLIVE",code:"#808000"},{label:"LIME",code:"#00FF00"},{label:"GREEN",code:"#008000"},{label:"AQUA",code:"#00FFFF"},{label:"TEAL",code:"#008080"},{label:"BLUE",code:"#0000FF"},{label:"NAVY",code:"#000080"},{label:"FUCHSIA",code:"#FF00FF"},{label:"PURPLE",code:"#800080"}],L=[{label:"AQUA",code:"#00FFFF"},{label:"TEAL",code:"#008080"},{label:"BLUE",code:"#0000FF"},{label:"NAVY",code:"#000080"},{label:"FUCHSIA",code:"#FF00FF"},{label:"PURPLE",code:"#800080"}];var F={name:"App",components:{DualListBox:_},data:function(){return{source:S,destination:L}},methods:{display:function(){console.log("source",this.source),console.log("destination",this.destination)},onChangeList:function({source:e,destination:t}){this.source=e,this.destination=t}}},y=F,A=(n("034f"),Object(g["a"])(y,s,o,!1,null,null,null)),w=A.exports,D=n("43f9"),x=n.n(D);n("51de"),n("e094");i["default"].config.productionTip=!1,i["default"].use(x.a),new i["default"]({render:e=>e(w)}).$mount("#app")},"64a9":function(e,t,n){},"667a":function(e,t,n){e.exports=n.p+"img/angle-right-solid.eef567e9.svg"},"7d05":function(e,t,n){},cf78:function(e,t,n){e.exports=n.p+"img/angle-double-left-solid.efde4c1b.svg"}});
//# sourceMappingURL=app.dde212d7.js.map