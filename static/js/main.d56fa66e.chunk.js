(this["webpackJsonpreact-countries-challenger"]=this["webpackJsonpreact-countries-challenger"]||[]).push([[0],{25:function(e,t,n){e.exports=n(55)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),u=n.n(c),l=n(23),o=n(1),i=n(14),s=n.n(i),m=n(11),f=Object(a.createContext)({theme:"light",toggleDarkTheme:function(){}});function d(e){var t=e.children,n=Object(a.useState)({theme:"light"}),c=Object(m.a)(n,2),u=c[0],l=c[1],o=Object(a.useCallback)((function(){l((function(e){return{theme:"dark"===e.theme?"light":"dark"}}))}),[]),i=Object(a.useMemo)((function(){return{theme:u.theme,toggleDarkTheme:o}}),[u.theme,o]);return Object(a.useEffect)((function(){"dark"===u.theme?(document.body.classList.add("dark-mode"),document.body.classList.remove("light-mode")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode"))}),[u]),r.a.createElement(f.Provider,{value:i},t)}n(42);function h(){var e=Object(a.useContext)(f),t=e.theme,n=e.toggleDarkTheme,c="light"===t?{icon:"far fa-moon",text:"Dark Mode"}:{icon:"far fa-sun",text:"Light Mode"};return r.a.createElement("button",{onClick:n,className:"theme-switch"},r.a.createElement("i",{className:c.icon}),c.text)}n(43);function v(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Where in the world?"),r.a.createElement(h,null))}n(44);function b(e){var t=e.children;return r.a.createElement("div",{className:"container"},t)}n(45);function p(e){var t=e.placeholder,n=e.className,a=e.value,c=e.onChange;return r.a.createElement("label",{className:"input-search ".concat(n||"")},r.a.createElement("i",{className:"fas fa-search input-search__icon"}),r.a.createElement("input",{placeholder:t,className:"input-search__element",onChange:c,value:a}))}n(46);function E(e){var t=e.name,n=e.flag,a=e.population,c=e.region,u=e.capital;return r.a.createElement("div",{key:t,className:"country-card"},r.a.createElement("div",{className:"country-card__image"},r.a.createElement("img",{src:n,alt:"".concat(t," flag")})),r.a.createElement("div",{className:"country-card__content"},r.a.createElement("h2",{className:"country-card__title"},t),r.a.createElement("div",null,r.a.createElement("span",{className:"country-card__label"},"Population: "),r.a.createElement("span",{className:"country-card__value"},function(e){return e.toLocaleString()}(a))),r.a.createElement("div",null,r.a.createElement("span",{className:"country-card__label"},"Region: "),r.a.createElement("span",{className:"country-card__value"},c)),r.a.createElement("div",null,r.a.createElement("span",{className:"country-card__label"},"Capital: "),r.a.createElement("span",{className:"country-card__value"},u))))}n(47);function g(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=function(n,a){clearTimeout(e),e=setTimeout((function(){n()}),a||t)};return{call:n,clear:function(){return clearTimeout(e)},wait:t}}var j=r.a.memo((function(e){var t=e.countries,n=e.loading,c=e.setLoading,u=e.search,l=e.setSearch,o=e.makeSearch,i=function(e){var t=Object(a.useRef)(g(e));return Object(a.useEffect)((function(){e!==t.current.wait&&(t.current.clear(),t.current=g(e))}),[e]),t.current.call}(300);return Object(a.useEffect)((function(){c(!0),u?i((function(){return o(u)})):i((function(){return o(u)}),0)}),[u,c,o,i]),r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(b,null,r.a.createElement(p,{placeholder:"Search for a country...",className:"home__input",value:u,onChange:function(e){return l(e.target.value)}}),function(e,t){if(e)return r.a.createElement("div",{className:"home--loading"},"Loading...");if(!t.length)return r.a.createElement("div",{className:"home--not-found"},r.a.createElement("div",null,"No countries found ",r.a.createElement("strong",null,":(")));return r.a.createElement("div",{className:"home"},t.map((function(e){return r.a.createElement(E,Object.assign({key:e.name},e))})))}(n,t)))})),k=n(7),O=n(6),y=n.n(O),N=n(10),_=n(21),x=n(22),w=function(e,t){return Object(N.a)(y.a.mark((function n(){var a,r;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,Object(k.a)(Object(k.a)({},t),{},{method:"GET"}));case 2:return a=n.sent,n.next=5,a.json();case 5:if(n.t0=n.sent,n.t1=a,r={data:n.t0,response:n.t1},!a.ok){n.next=12;break}return n.abrupt("return",r);case 12:return n.abrupt("return",Promise.reject(r));case 13:case"end":return n.stop()}}),n)})))()},C=new(function(){function e(){Object(_.a)(this,e)}return Object(x.a)(e,[{key:"findAll",value:function(){var e=Object(N.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://restcountries.eu/rest/v2/all",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"findByName",value:function(){var e=Object(N.a)(y.a.mark((function e(t,n){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("https://restcountries.eu/rest/v2/name/".concat(t),n);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()),L={countries:[],loading:!1,search:void 0};function S(e){var t=e.location,n=e.history,c=function(){var e=Object(a.useState)(L),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null),u=Object(a.useCallback)((function(e){r((function(t){return Object(k.a)(Object(k.a)({},t),{},{loading:e})}))}),[]),l=Object(a.useCallback)((function(e){r((function(t){return Object(k.a)(Object(k.a)({},t),{},{loading:!1,countries:e})}))}),[]);return{state:n,makeSearch:Object(a.useCallback)((function(e){var t;null===(t=c.current)||void 0===t||t.abort(),c.current=new AbortController;var n={signal:c.current.signal},a=function(e){e.then(l).then((function(){return c.current=null})).catch((function(){return l([])}))};u(!0),a(e?C.findByName(e,n):C.findAll(n))}),[l,u]),setLoading:u}}(),u=c.state,l=c.setLoading,o=c.makeSearch,i=Object(a.useMemo)((function(){return s.a.parse(t.search)}),[t.search]),f=Object(a.useCallback)((function(e){var a=e?{search:e}:{},r=s.a.stringifyUrl({url:t.pathname,query:a});n.push(r)}),[n,t.pathname]);return r.a.createElement(j,{search:i.search||"",countries:u.countries,loading:u.loading,setLoading:l,setSearch:f,makeSearch:o})}function T(){return r.a.createElement("div",null,"Country")}function M(){return r.a.createElement(l.a,{basename:"/react-countries-challenger"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:S}),r.a.createElement(o.a,{exact:!0,path:"/country",component:T})))}n(54);var D=function(){return r.a.createElement(d,null,r.a.createElement(M,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d56fa66e.chunk.js.map