(function(e){function t(t){for(var r,i,l=t[0],o=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e61":function(e,t,n){},4597:function(e,t,n){e.exports=n.p+"img/logo-small.db147a0e.svg"},"48aa":function(e,t,n){"use strict";n("1e61")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{albums:e.albums},on:{changed:e.getAlbumsRemaning}}),n("Main",{attrs:{albums:e.albums,newGenres:e.newGenres}})],1)},s=[],i=n("bc3a"),l=n.n(i),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("nav",{staticClass:"bg-navbar d-flex justify-content-between align-items-center"},[r("img",{staticClass:"py-2 mx-5",attrs:{src:n("4597"),alt:"Spotify Logo"}}),r("form",{staticClass:"mx-5"},[r("label",{staticClass:"text-white px-3",attrs:{for:"genere"}},[e._v("Scegli il genere: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.genere,expression:"genere"}],attrs:{name:"genere"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.genere=t.target.multiple?n:n[0]},function(t){return e.$emit("changed",e.genere)}]}},[r("option",{attrs:{value:"All"}},[e._v("All")]),e._l(e.filterGenre,(function(t,n){return r("option",{key:n,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)])])])},u=[],c=(n("d3b7"),n("159b"),n("caad"),{name:"Header",props:["albums"],computed:{filterGenre:function(){var e=[];return this.albums.forEach((function(t){e.includes(t.genre)||e.push(t.genre)})),e}},data:function(){return{genere:"All"}},methods:{}}),f=c,p=(n("e86e"),n("2877")),d=Object(p["a"])(f,o,u,!1,null,"ff0a39b8",null),m=d.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"bg-main"},[n("div",{staticClass:"container"},[e.isLoading?n("Loader"):n("div",{staticClass:"cards text-center py-4"},e._l(e.albums,(function(e,t){return n("Card",{key:t,attrs:{album:e}})})),1)],1)])},g=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card py-3"},[n("figure",{staticClass:"d-flex justify-content-center"},[n("img",{staticClass:"img-fluid p-3",attrs:{src:e.album.poster,alt:e.album.title}})]),n("h5",{staticClass:"text-white"},[e._v(e._s(e.album.title.toUpperCase()))]),n("div",{staticClass:"my-3"},[n("p",{staticClass:"text-secondary"},[e._v(e._s(e.album.author))]),n("p",{staticClass:"text-secondary"},[e._v(e._s(e.album.year))])])])},h=[],y={name:"Card",props:["album"]},_=y,x=Object(p["a"])(_,v,h,!1,null,null,null),w=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader text-center h2 text-white"},[e._v("Loading...")])},j=[],O={name:"Loader"},A=O,L=(n("dc9d"),Object(p["a"])(A,C,j,!1,null,null,null)),P=L.exports,G={name:"Main",components:{Card:w,Loader:P},props:["albums","newGenres"],data:function(){return{isLoading:!1}}},M=G,S=(n("48aa"),Object(p["a"])(M,b,g,!1,null,"15d37c40",null)),$=S.exports,E={name:"App",components:{Header:m,Main:$},data:function(){return{albums:[],newGenres:""}},methods:{getAlbums:function(){var e=this;this.isLoading=!0,l.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.albums=t.data.response,e.isLoading=!1}))},getAlbumsRemaning:function(e){return this.newGenres=e}},mounted:function(){this.getAlbums()}},k=E,H=(n("5c0b"),Object(p["a"])(k,a,s,!1,null,null,null)),T=H.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},d8ef:function(e,t,n){},dc9d:function(e,t,n){"use strict";n("e5eb")},e5eb:function(e,t,n){},e86e:function(e,t,n){"use strict";n("d8ef")}});
//# sourceMappingURL=app.b4188791.js.map