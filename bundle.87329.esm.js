!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mwRR")}({Cyw9:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[K]}function i(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[H]||!!e.constructor[H]||f(e)||s(e))}function u(e,t,n){void 0===n&&(n=!1),0===_(e)?(n?Object.keys:z)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function _(e){var t=e[K];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:f(e)?2:s(e)?3:0}function l(e,t){return 2===_(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function c(e,t,n){var r=_(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function f(e){return L&&e instanceof Map}function s(e){return U&&e instanceof Set}function a(e){return e.o||e.t}function p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=B(e);delete t[K];for(var n=z(t),r=0;r<n.length;r++){var o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function d(e,t){return void 0===t&&(t=!1),m(e)||o(e)||!i(e)||(_(e)>1&&(e.set=e.add=e.clear=e.delete=h),t&&u(e,(function(e,t){return d(t,!0)}),!0)),e}function h(){r(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function v(e){var t=$[e];return t||r(18,e),t}function y(){return T}function g(e,t){t&&(v("Patches"),e.u=[],e.s=[],e.v=t)}function b(e){P(e),e.p.forEach(k),e.p=null}function P(e){e===T&&(T=e.l)}function E(e){return T={p:[],l:T,h:e,m:!0,_:0}}function k(e){var t=e[K];0===t.i||1===t.i?t.j():t.g=!0}function w(e,t){t._=t.p.length;var n=t.p[0],o=void 0!==e&&e!==n;return t.h.O||v("ES5").S(t,e,o),o?(n[K].P&&(b(t),r(4)),i(e)&&(e=O(t,e),t.l||A(t,e)),t.u&&v("Patches").M(n[K],e,t.u,t.s)):e=O(t,n,[]),b(t),t.u&&t.v(t.u,t.s),e!==F?e:void 0}function O(e,t,n){if(m(t))return t;var r=t[K];if(!r)return u(t,(function(o,i){return S(e,r,t,o,i,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return A(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=p(r.k):r.o;u(3===r.i?new Set(o):o,(function(t,i){return S(e,r,o,t,i,n)})),A(e,o,!1),n&&e.u&&v("Patches").R(r,n,e.u,e.s)}return r.o}function S(e,t,n,r,u,_){if(o(u)){var f=O(e,u,_&&t&&3!==t.i&&!l(t.D,r)?_.concat(r):void 0);if(c(n,r,f),!o(f))return;e.m=!1}if(i(u)&&!m(u)){if(!e.h.N&&e._<1)return;O(e,u),t&&t.A.l||A(e,u)}}function A(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&d(t,n)}function D(e,t){var n=e[K];return(n?a(n):e)[t]}function x(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function q(e){e.P||(e.P=!0,e.l&&q(e.l))}function C(e){e.o||(e.o=p(e.t))}function M(e,t,n){var r=f(t)?v("MapSet").T(t,n):s(t)?v("MapSet").F(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:y(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,i=Q;n&&(o=[r],i=V);var u=Proxy.revocable(o,i),_=u.revoke,l=u.proxy;return r.k=l,r.j=_,l}(t,n):v("ES5").J(t,n);return(n?n.A:y()).p.push(r),r}function j(e){return o(e)||r(22,e),function e(t){if(!i(t))return t;var n,r=t[K],o=_(t);if(r){if(!r.P&&(r.i<4||!v("ES5").K(r)))return r.t;r.I=!0,n=R(t,o),r.I=!1}else n=R(t,o);return u(n,(function(t,o){r&&function(e,t){return 2===_(e)?e.get(t):e[t]}(r.t,t)===o||c(n,t,e(o))})),3===o?new Set(n):n}(e)}function R(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return p(e)}n.d(t,"a",(function(){return J}));var N,T,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),L="undefined"!=typeof Map,U="undefined"!=typeof Set,I="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,F=W?Symbol.for("immer-nothing"):((N={})["immer-nothing"]=!0,N),H=W?Symbol.for("immer-draftable"):"__$immer_draftable",K=W?Symbol.for("immer-state"):"__$immer_state",z=("undefined"!=typeof Symbol&&Symbol,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),B=Object.getOwnPropertyDescriptors||function(e){var t={};return z(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},$={},Q={get:function(e,t){if(t===K)return e;var n=a(e);if(!l(n,t))return function(e,t,n){var r,o=x(t,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!i(r)?r:r===D(e.t,t)?(C(e),e.o[t]=M(e.A.h,r,e)):r},has:function(e,t){return t in a(e)},ownKeys:function(e){return Reflect.ownKeys(a(e))},set:function(e,t,n){var r=x(a(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=D(a(e),t),i=null==o?void 0:o[K];if(i&&i.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,o)&&(void 0!==n||l(e.t,t)))return!0;C(e),q(e)}return e.o[t]=n,e.D[t]=!0,!0},deleteProperty:function(e,t){return void 0!==D(e.t,t)||t in e.t?(e.D[t]=!1,C(e),q(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=a(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},V={};u(Q,(function(e,t){V[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),V.deleteProperty=function(e,t){return Q.deleteProperty.call(this,e[0],t)},V.set=function(e,t,n){return Q.set.call(this,e[0],t,n,e[0])};var G=new(function(){function e(e){this.O=I,this.N=!0,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var o=t;t=e;var u=this;return function(e){var n=this;void 0===e&&(e=o);for(var r=arguments.length,i=Array(r>1?r-1:0),_=1;_<r;_++)i[_-1]=arguments[_];return u.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(i))}))}}var _;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),i(e)){var l=E(this),c=M(this,e,void 0),f=!0;try{_=t(c),f=!1}finally{f?b(l):P(l)}return"undefined"!=typeof Promise&&_ instanceof Promise?_.then((function(e){return g(l,n),w(e,l)}),(function(e){throw b(l),e})):(g(l,n),w(_,l))}if(!e||"object"!=typeof e){if((_=t(e))===F)return;return void 0===_&&(_=e),this.N&&d(_,!0),_}r(21,e)},t.produceWithPatches=function(e,t){var n,r,o=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return o.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){i(e)||r(8),o(e)&&(e=j(e));var t=E(this),n=M(this,e,void 0);return n[K].C=!0,P(t),n},t.finishDraft=function(e,t){var n=(e&&e[K]).A;return g(n,t),w(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!I&&r(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var i=v("Patches").$;return o(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(n+1))}))},e}()),J=G.produce;G.produceWithPatches.bind(G),G.setAutoFreeze.bind(G),G.setUseProxies.bind(G),G.applyPatches.bind(G),G.createDraft.bind(G),G.finishDraft.bind(G)},MV5A:function(){},QRet:function(e,t,n){"use strict";function r(e){return a=1,function(e,t){var n=function(e,t){s.options.__h&&s.options.__h(c,e,a||t),a=0;var n=c.__H||(c.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}(l++,2);return n.t=e,n.__c||(n.__=[_(void 0,t),function(e){var t=n.t(n.__[0],e);n.__[0]!==t&&(n.__=[t,n.__[1]],n.__c.setState({}))}],n.__c=c),n.__}(_,e)}function o(){p.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(i),e.__H.__h.forEach(u),e.__H.__h=[]}catch(t){e.__H.__h=[],s.options.__e(t,e.__v)}})),p=[]}function i(e){var t=c;"function"==typeof e.__c&&e.__c(),c=t}function u(e){var t=c;e.__c=e.__(),c=t}function _(e,t){return"function"==typeof t?t(e):t}n.d(t,"a",(function(){return r}));var l,c,f,s=n("hosL"),a=0,p=[],d=s.options.__b,h=s.options.__r,m=s.options.diffed,v=s.options.__c,y=s.options.unmount;s.options.__b=function(e){c=null,d&&d(e)},s.options.__r=function(e){h&&h(e),l=0;var t=(c=e.__c).__H;t&&(t.__h.forEach(i),t.__h.forEach(u),t.__h=[])},s.options.diffed=function(e){m&&m(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==p.push(t)&&f===s.options.requestAnimationFrame||((f=s.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),g&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);g&&(t=requestAnimationFrame(n))})(o)),c=void 0},s.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(i),e.__h=e.__h.filter((function(e){return!e.__||u(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],s.options.__e(n,e.__v)}})),v&&v(e,t)},s.options.unmount=function(e){y&&y(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(i)}catch(e){s.options.__e(e,t.__v)}};var g="function"==typeof requestAnimationFrame},QfWi:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(h){function App(){return h("div",null,h("h1",null,"Special relativity quick calculator!"),h(Eq,{imgSrc:"formula/gamma.png",names:["u","gamma (1/lorentz factor)"],fns:[(e,t)=>sqrt(c**2*(1-t**2)),e=>gamma(e)]}),h(Eq,{imgSrc:"formula/doppler.png",names:["f_","f","u (not supported)"],fns:[(e,t,n)=>t*sqrt((1-n/c)/(1+n/c)),(e,t,n)=>e*sqrt((1+n/c)/(1-n/c)),()=>NaN]}),h(Eq,{imgSrc:"formula/mom_energy.png",names:["E","m (not supported)","p (not supported)"],fns:[(e,t,n)=>sqrt((n*c)**2+(t*c**2)**2),()=>NaN,()=>NaN]}),h(Eq,{imgSrc:"formula/momentum.png",names:[],fns:[]}),h(Eq,{imgSrc:"formula/kinetic.png",names:[],fns:[]}),h(Eq,{imgSrc:"formula/rest_energy.png",names:["m","E"],fns:[(e,t)=>t/c**2,e=>e*c**2]}),h(Eq,{imgSrc:"formula/total_energy.png",names:[],fns:[]}),h(Eq,{imgSrc:"formula/length.png",names:["l","l0","u"],fns:[(e,t,n)=>t*gamma(n),(e,t,n)=>e/gamma(n),(e,t)=>sqrt(c**2*(1-(e/t)**2))]}),h(Eq,{imgSrc:"formula/mass.png",names:["m_rel","m_rest (m)","v"],fns:[(e,t,n)=>t/gamma(n),(e,t,n)=>e*gamma(n),(e,t)=>sqrt(c**2*(1-(t/e)**2))]}),h(Eq,{imgSrc:"formula/time.png",names:["t","t0","u"],fns:[(e,t,n)=>t/gamma(n),(e,t,n)=>e*gamma(n),(e,t)=>sqrt(c**2*(1-(t/e)**2))]}),h(Eq,{imgSrc:"formula/velocity.png",names:["v","v_ (not supported)","u (not supported)"],fns:[(e,t,n)=>(t+n)/(1+t/c*(n/c)),()=>NaN,()=>NaN]}),h(Eq,{imgSrc:"formula/lorentz_x.png",names:[],fns:[]}),h(Eq,{imgSrc:"formula/lorentz_t.png",names:[],fns:[]}),h(Eq,{imgSrc:"formula/lorentz_vx.png",names:[],fns:[]}),h(Eq,{imgSrc:"formula/lorentz_vy.png",names:[],fns:[]}))}function Eq({imgSrc:imgSrc,names:names,fns:fns}){function onInput(i,e){ss(Object(immer__WEBPACK_IMPORTED_MODULE_2__.a)(s=>{try{s[i]=eval(e.target.value)}catch(e){s[i]=void 0}}))}let[s,ss]=Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__.a)(names.map(()=>{})),len=s.filter(e=>e).length,ind=0,res=0,showRes=!1;if(len==s.length-1){var _fns$ind;showRes=!0;for(let e=0;e<s.length;e++)if(!s[e]){ind=e;break}res=null==fns||null==(_fns$ind=fns[ind])?void 0:_fns$ind.call(fns,...s)}return h("div",{class:"flexcont eq"},h("div",null,h("img",{src:imgSrc})),names.map((e,t)=>h("div",{class:"field"},h("p",null,e),h("input",{type:"text",onInput:onInput.bind(this,t)}),t===ind&&showRes&&h("p",null,res))))}var preact__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("hosL"),preact_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("QRet"),immer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("Cyw9"),_style_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("MV5A"),_style_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);__webpack_exports__.default=App;let sqrt=Math.sqrt,c=3e8,gamma=e=>sqrt(1-(e/c)**2);"undefined"!=typeof window&&(window.g=window.gamma=gamma)}.call(this,__webpack_require__("hosL").h)},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,_=arguments,l={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:l[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(_[i]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===l[i]&&(l[i]=e.defaultProps[i]);return u(e,l,r,o,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M.__v:o};return null!=M.vnode&&M.vnode(i),i}function _(){return{current:null}}function l(e){return e.children}function c(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?f(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function a(e){(!e.__d&&(e.__d=!0)&&R.push(e)&&!p.__r++||T!==M.debounceRendering)&&((T=M.debounceRendering)||N)(p)}function p(){for(var e;p.__r=R.length;)e=R.sort((function(e,t){return e.__v.__b-t.__v.__b})),R=[],e.some((function(e){var t,n,o,i,u,_,l;e.__d&&(_=(u=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=r({},u)).__v=u.__v+1,i=E(l,u,o,t.__n,void 0!==l.ownerSVGElement,null!=u.__h?[_]:null,n,null==_?f(u):_,u.__h),k(n,u),i!=_&&s(u)))}))}function d(e,t,n,r,i,_,c,s,a,p){var d,h,v,y,g,b,P,k=r&&r.__k||I,w=k.length;for(a==U&&(a=null!=c?c[0]:w?f(r,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(y=n.__k[d]=null==(y=t[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y?u(null,y,null,null,y):Array.isArray(y)?u(l,{children:y},null,null,null):null!=y.__e||null!=y.__c?u(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=k[d])||v&&y.key==v.key&&y.type===v.type)k[d]=void 0;else for(h=0;h<w;h++){if((v=k[h])&&y.key==v.key&&y.type===v.type){k[h]=void 0;break}v=null}g=E(e,y,v=v||U,i,_,c,s,a,p),(h=y.ref)&&v.ref!=h&&(P||(P=[]),v.ref&&P.push(v.ref,null,y),P.push(h,y.__c||g,y)),null!=g?(null==b&&(b=g),a=m(e,y,v,k,c,g,a),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&v.__e==a&&a.parentNode!=e&&(a=f(v))}if(n.__e=b,null!=c&&"function"!=typeof n.type)for(d=c.length;d--;)null!=c[d]&&o(c[d]);for(d=w;d--;)null!=k[d]&&S(k[d],k[d]);if(P)for(d=0;d<P.length;d++)O(P[d],P[++d],P[++d])}function h(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){h(e,t)})):t.push(e)),t}function m(e,t,n,r,o,i,u){var _,l,c;if(void 0!==t.__d)_=t.__d,t.__d=void 0;else if(o==n||i!=u||null==i.parentNode)e:if(null==u||u.parentNode!==e)e.appendChild(i),_=null;else{for(l=u,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==i)break e;e.insertBefore(i,u),_=u}return void 0!==_?_:i.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||F.test(t)?n:n+"px"}function y(e,t,n,r,o){var i,u,_;if(o&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||v(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||v(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),(u=t.toLowerCase())in e&&(t=u),t=t.slice(2),e.l||(e.l={}),e.l[t+i]=n,_=i?b:g,n?r||e.addEventListener(t,_,i):e.removeEventListener(t,_,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function g(e){this.l[e.type+!1](M.event?M.event(e):e)}function b(e){this.l[e.type+!0](M.event?M.event(e):e)}function P(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&P(o,t,n),t=m(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function E(e,t,n,o,i,u,_,f,s){var a,p,h,m,v,y,g,b,E,k,O,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,f=t.__e=n.__e,t.__h=null,u=[f]),(a=M.__b)&&a(t);try{e:if("function"==typeof S){if(b=t.props,E=(a=S.contextType)&&o[a.__c],k=a?E?E.props.value:a.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in S&&S.prototype.render?t.__c=p=new S(b,k):(t.__c=p=new c(b,k),p.constructor=S,p.render=A),E&&E.sub(p),p.props=b,p.state||(p.state={}),p.context=k,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,S.getDerivedStateFromProps(b,p.__s))),m=p.props,v=p.state,h)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,k),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,k)||t.__v===n.__v){p.props=b,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&_.push(p),P(t,f,e);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,k),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,v,y)}))}p.context=k,p.props=b,p.state=p.__s,(a=M.__r)&&a(t),p.__d=!1,p.__v=t,p.__P=e,a=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(m,v)),O=null!=a&&a.type==l&&null==a.key?a.props.children:a,d(e,Array.isArray(O)?O:[O],t,n,o,i,u,_,f,s),p.base=t.__e,t.__h=null,p.__h.length&&_.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=w(n.__e,t,n,o,i,u,_,s);(a=M.diffed)&&a(t)}catch(e){t.__v=null,(s||null!=u)&&(t.__e=f,t.__h=!!s,u[u.indexOf(f)]=null),M.__e(e,t,n)}return t.__e}function k(e,t){M.__c&&M.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){M.__e(e,t.__v)}}))}function w(e,t,n,r,o,i,u,_){var l,c,f,s,a,p=n.props,h=t.props;if(o="svg"===t.type||o,null!=i)for(l=0;l<i.length;l++)if(null!=(c=i[l])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,i[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),i=null,_=!1}if(null===t.type)p===h||_&&e.data===h||(e.data=h);else{if(null!=i&&(i=I.slice.call(e.childNodes)),f=(p=n.props||U).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!_){if(null!=i)for(p={},a=0;a<e.attributes.length;a++)p[e.attributes[a].name]=e.attributes[a].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||y(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||y(e,i,t[i],n[i],r)})(e,h,p,o,_),s?t.__k=[]:(l=t.props.children,d(e,Array.isArray(l)?l:[l],t,n,r,"foreignObject"!==t.type&&o,i,u,U,_)),_||("value"in h&&void 0!==(l=h.value)&&(l!==e.value||"progress"===t.type&&!l)&&y(e,"value",l,p.value,!1),"checked"in h&&void 0!==(l=h.checked)&&l!==e.checked&&y(e,"checked",l,p.checked,!1))}return e}function O(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){M.__e(e,n)}}function S(e,t,n){var r,i,u;if(M.unmount&&M.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||O(r,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){M.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&S(r[u],t,n);null!=i&&o(i)}function A(e,t,n){return this.constructor(e,n)}function D(e,t,n){var r,o,u;M.__&&M.__(e,t),o=(r=n===W)?null:n&&n.__k||t.__k,e=i(l,null,[e]),u=[],E(t,(r?t:n||t).__k=e,o||U,U,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?I.slice.call(t.childNodes):null,u,n||U,r),k(u,e)}function x(e,t){D(e,t,W)}function q(e,t,n){var o,i,_,l=arguments,c=r({},e.props);for(_ in t)"key"==_?o=t[_]:"ref"==_?i=t[_]:c[_]=t[_];if(arguments.length>3)for(n=[n],_=3;_<arguments.length;_++)n.push(l[_]);return null!=n&&(c.children=n),u(e.type,c,o||e.key,i||e.ref,null)}function C(e,t){var n={__c:t="__cC"+L++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,r){return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(a)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return D})),n.d(t,"hydrate",(function(){return x})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return l})),n.d(t,"createRef",(function(){return _})),n.d(t,"isValidElement",(function(){return j})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return q})),n.d(t,"createContext",(function(){return C})),n.d(t,"toChildArray",(function(){return h})),n.d(t,"__u",(function(){return S})),n.d(t,"options",(function(){return M}));var M,j,R,N,T,W,L,U={},I=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;M={__e:function(e,t){for(var n,r,o,i=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return t.__h=i,n.__E=n}catch(t){e=t}throw e},__v:0},j=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),a(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),a(this))},c.prototype.render=l,R=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,W=U,L=0},mwRR:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,_=e=>e&&e.default?e.default:e,l=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof _(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let t=_(n("QfWi")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const f={preRenderData:r},s=r.url?l(r.url):"",a=u&&s===l(location.pathname);e=(a?u:i)(o(t,{CLI_DATA:f}),document.body,e)})()}}});