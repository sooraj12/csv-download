(this["webpackJsonpcsv-download"]=this["webpackJsonpcsv-download"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),c=t(8),o=t.n(c),i=t(12),u=t(0);function s(){return Object(u.jsx)("button",{type:"button",onClick:function(){new Promise((function(n,e){setTimeout((function(){n({data:["Name","Age","Company"]})}),200)})).then((function(n){var e=n.data,t="";e.forEach((function(n){t+=n+","}));var r=document.createElement("a");r.href="data:text/csv;charset=utf-8,"+encodeURI(t),console.log(r.href),r.target="_blank",r.download="csv file.csv"})).catch((function(n){}))},children:"Legacy Link"})}var l=t(7),f=t(13),d=t(9),h=t(10),p=t(5),v=t(14),y=t(11),b=t(3),j=function(n){return Array.isArray(n)&&n.every((function(n){return"object"===typeof n&&!(n instanceof Array)}))},k=function(n,e){var t,r=e=e||(t=n,Array.from(t.map((function(n){return Object.keys(n)})).reduce((function(n,e){return new Set([].concat(Object(b.a)(n),Object(b.a)(e)))}),[]))),a=e;j(e)&&(r=e.map((function(n){return n.label})),a=e.map((function(n){return n.key})));var c=n.map((function(n){return a.map((function(e){return m(e,n)}))}));return[r].concat(Object(b.a)(c))},m=function(n,e){var t=n.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(n,e,t,r){if(void 0!==n[e])return n[e];r.splice(1)}),e);return void 0===t?n in e?e[n]:"":t},g=function(n){return"undefined"===typeof n||null===n?"":n},O=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return n.filter((function(n){return n})).map((function(n){return n.map((function(n){return g(n)})).map((function(n){return"".concat(t).concat(n).concat(t)})).join(e)})).join("\n")},C=function(n,e,t,r){if(j(n))return function(n,e,t,r){return O(k(n,e),t,r)}(n,e,t,r);if(a=n,Array.isArray(a)&&a.every((function(n){return Array.isArray(n)})))return function(n,e,t,r){return O(e?[e].concat(Object(b.a)(n)):n,t,r)}(n,e,t,r);var a;if("string"===typeof n)return function(n,e,t,r){return e?"".concat(e.join(t),"\n").concat(n):n}(n,e,t);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')},F=function(n,e,t,r,a){var c="Name,Age,Company,";console.log(c);var o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?"application/csv":"text/csv";console.log({type:o,uFEFF:e});new Blob([e?"\ufeff":"",c],{type:o});var i="data:".concat(o,";charset=utf-8,").concat(e?"\ufeff":"").concat(c);console.log(i);window.URL||window.webkitURL;return i},w=function(n){Object(v.a)(t,n);var e=Object(y.a)(t);function t(n){var r;return Object(d.a)(this,t),(r=e.call(this,n)).buildURI=r.buildURI.bind(Object(p.a)(r)),r.state={href:""},r}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.data,t=n.headers,r=n.separator,a=n.uFEFF,c=n.enclosingCharacter;this.setState({href:this.buildURI(e,a,t,r,c)})}},{key:"componentDidUpdate",value:function(n){if(this.props!==n){var e=this.props,t=e.data,r=e.headers,a=e.separator,c=e.uFEFF;this.setState({href:this.buildURI(t,c,r,a)})}}},{key:"buildURI",value:function(){return F.apply(void 0,arguments)}},{key:"handleLegacy",value:function(n){if(window.navigator.msSaveOrOpenBlob){n.preventDefault();var e=this.props,t=e.data,r=e.headers,a=e.separator,c=e.filename,o=e.enclosingCharacter,i=e.uFEFF,u=new Blob([i?"\ufeff":"",C(t,r,a,o)]);return window.navigator.msSaveBlob(u,c),!1}}},{key:"handleAsyncClick",value:function(n){var e=this;this.props.onClick(n,(function(t){!1!==t?e.handleLegacy(n):n.preventDefault()}))}},{key:"handleSyncClick",value:function(n){!1===this.props.onClick(n)?n.preventDefault():this.handleLegacy(n)}},{key:"handleClick",value:function(){var n=this;return function(e){if("function"===typeof n.props.onClick)return n.props.asyncOnClick?n.handleAsyncClick(e):n.handleSyncClick(e);n.handleLegacy(e)}}},{key:"render",value:function(){var n=this,e=this.props,t=(e.data,e.headers,e.separator,e.filename),r=(e.uFEFF,e.children),a=(e.onClick,e.asyncOnClick,e.enclosingCharacter,Object(f.a)(e,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return Object(u.jsx)("a",Object(l.a)(Object(l.a)({download:t},a),{},{ref:function(e){return n.link=e},target:"_self",href:this.state.href,onClick:this.handleClick(),children:r}))}}]),t}(r.Component);w.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1};var A=function(){var n=Object(r.useState)([]),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useRef)("");return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-xs",type:"button",onClick:function(){new Promise((function(n,e){setTimeout((function(){n({data:["Name","Age","Company"]})}),200)})).then((function(n){var e=n.data.map((function(n){return{label:n,key:n}}));a(e),c.current.link.click()})).catch((function(n){}))},children:"Link"}),Object(u.jsx)(w,{ref:c,data:[],filename:"csv_react.csv",headers:t})]}),Object(u.jsx)("div",{style:{marginTop:"8px"},children:Object(u.jsx)(s,{})})]})},x=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.60f77c7b.chunk.js.map