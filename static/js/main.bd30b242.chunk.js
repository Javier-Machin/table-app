(this["webpackJsonptable-app"]=this["webpackJsonptable-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a(1),l=a(3),i=(a(23),a(11)),s=a(7),u=a(12),m={data:[],lastFetchedPet:null};var p=Object(o.c)({pets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PETS":return Object(u.a)({},t.pets);case"FETCH_ADDITIONAL_PETS":return{data:[].concat(Object(s.a)(e.data),Object(s.a)(t.pets.data)),lastFetchedPet:t.pets.lastFetchedPet};default:return e}}}),f=function(){for(var e=[],t=0;t<1e6;t++){var a=t+1;e.push({id:a,value:"My pet number ".concat(a)})}return e}(),h=function(e,t){return f.slice(e-1,e+t-1)};var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=h(e,t),r={data:n,lastFetchedPet:e+50};return{type:a?"FETCH_ADDITIONAL_PETS":"FETCH_PETS",pets:r}},v=Object(n.memo)((function(e){var t=e.pet,a=e.handleRowOnchange;return r.a.createElement("div",{className:"table-row"},r.a.createElement("textarea",{className:"table-input",rows:"1",onChange:a,name:"input-".concat(t.id),defaultValue:t.value}))})),b=(a(24),Object(n.memo)((function(e){var t=e.actions,a=e.pets,c=t.fetchPets,o=a.data,l=a.lastFetchedPet,i=Object(n.createRef)();Object(n.useEffect)((function(){c(1)}),[c]);var s=function(e,t){var a=!1;return function(){a||(e.call(this),a=!0,setTimeout((function(){a=!1}),t))}}((function(){var e=i.current,t=e.scrollTop,a=e.scrollHeight;100-(a-t-e.offsetHeight)/a*100>=85&&c(l+1,50,!0)}),100),u=function(e){!function(e){e.style.height="auto",e.style.height="".concat(e.scrollHeight,"px")}(e.target)};return r.a.createElement("div",{className:"table-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target).entries(),a=Object.fromEntries(t),n=Number(a["jump-to-row-input"]);c(n),i.current.scrollTop=0}},r.a.createElement("input",{type:"number",min:"1",max:"1000000",name:"jump-to-row-input",className:"jump-to-row-input",placeholder:"Jump to a row"}),r.a.createElement("button",{className:"submit-button",type:"submit"},"GO")),r.a.createElement("div",{className:"table",ref:i,onScroll:s},o.map((function(e){return r.a.createElement(v,{key:e.id,pet:e,handleRowOnchange:u})}))),r.a.createElement("span",{className:"total-rows"},"Total rows: 1000000"))}))),E=Object(l.b)((function(e){return{pets:e.pets}}),(function(e){return{actions:Object(o.b)({fetchPets:d},e)}}))(b);a(25);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26);var g=[i.a];var O=Object(o.d)(p,o.a.apply(void 0,g));Object(c.render)(r.a.createElement(l.a,{store:O},r.a.createElement(w,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.bd30b242.chunk.js.map