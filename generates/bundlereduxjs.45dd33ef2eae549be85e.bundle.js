"use strict";(self.webpackChunklahelu_client=self.webpackChunklahelu_client||[]).push([[106],{60258:(e,n,t)=>{t.r(n),t.d(n,{EnhancerArray:()=>x,MiddlewareArray:()=>I,SHOULD_AUTOBATCH:()=>Ge,TaskAbortError:()=>ke,__DO_NOT_USE__ActionTypes:()=>o.$d,addListener:()=>Xe,applyMiddleware:()=>o.Tw,autoBatchEnhancer:()=>en,bindActionCreators:()=>o.zH,clearAllListeners:()=>Fe,combineReducers:()=>o.HY,compose:()=>o.Zz,configureStore:()=>X,createAction:()=>S,createActionCreatorInvariantMiddleware:()=>M,createAsyncThunk:()=>ie,createDraftSafeSelector:()=>O,createEntityAdapter:()=>J,createImmutableStateInvariantMiddleware:()=>R,createListenerMiddleware:()=>Qe,createNextState:()=>i.Ay,createReducer:()=>W,createSelector:()=>u.Mz,createSerializableStateInvariantMiddleware:()=>V,createSlice:()=>H,createStore:()=>o.y$,current:()=>i.ss,findNonSerializableValue:()=>D,freeze:()=>i.CN,getDefaultMiddleware:()=>B,getType:()=>C,isAction:()=>_,isActionCreator:()=>P,isAllOf:()=>ce,isAnyOf:()=>ae,isAsyncThunkAction:()=>ye,isDraft:()=>i.Qx,isFluxStandardAction:()=>k,isFulfilled:()=>ve,isImmutableDefault:()=>L,isPending:()=>se,isPlain:()=>z,isPlainObject:()=>E,isRejected:()=>de,isRejectedWithValue:()=>pe,legacy_createStore:()=>o.Yl,miniSerializeError:()=>re,nanoid:()=>K,original:()=>i.c2,prepareAutoBatched:()=>Ye,removeListener:()=>We,unwrapResult:()=>oe});var r,i=t(16535),o=t(82960),u=t(22325),a=t(1265),c=(r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),f=function(e,n){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},l=function(e,n){for(var t=0,r=n.length,i=e.length;t<r;t++,i++)e[i]=n[t];return e},s=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=function(e,n,t){return n in e?s(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},b=function(e,n){for(var t in n||(n={}))y.call(n,t)&&g(e,t,n[t]);if(v)for(var r=0,i=v(n);r<i.length;r++)t=i[r],h.call(n,t)&&g(e,t,n[t]);return e},m=function(e,n){return d(e,p(n))},w=function(e,n,t){return new Promise((function(r,i){var o=function(e){try{a(t.next(e))}catch(e){i(e)}},u=function(e){try{a(t.throw(e))}catch(e){i(e)}},a=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(o,u)};a((t=t.apply(e,n)).next())}))},O=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=u.Mz.apply(void 0,e);return function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return t.apply(void 0,l([(0,i.Qx)(e)?(0,i.ss)(e):e],n))}},A="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?o.Zz:o.Zz.apply(null,arguments)};function E(e){if("object"!=typeof e||null===e)return!1;var n=Object.getPrototypeOf(e);if(null===n)return!0;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return n===t}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var j=function(e){return e&&"function"==typeof e.match};function S(e,n){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(n){var i=n.apply(void 0,t);if(!i)throw new Error("prepareAction did not return an object");return b(b({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:t[0]}}return t.toString=function(){return""+e},t.type=e,t.match=function(n){return n.type===e},t}function _(e){return E(e)&&"type"in e}function P(e){return"function"==typeof e&&"type"in e&&j(e)}function k(e){return _(e)&&"string"==typeof e.type&&Object.keys(e).every(T)}function T(e){return["type","payload","error","meta"].indexOf(e)>-1}function C(e){return""+e}function M(e){return void 0===e&&(e={}),function(){return function(e){return function(n){return e(n)}}}}var I=function(e){function n(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return Object.setPrototypeOf(i,n.prototype),i}return c(n,e),Object.defineProperty(n,Symbol.species,{get:function(){return n},enumerable:!1,configurable:!0}),n.prototype.concat=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.prototype.concat.apply(this,n)},n.prototype.prepend=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 1===e.length&&Array.isArray(e[0])?new(n.bind.apply(n,l([void 0],e[0].concat(this)))):new(n.bind.apply(n,l([void 0],e.concat(this))))},n}(Array),x=function(e){function n(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return Object.setPrototypeOf(i,n.prototype),i}return c(n,e),Object.defineProperty(n,Symbol.species,{get:function(){return n},enumerable:!1,configurable:!0}),n.prototype.concat=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.prototype.concat.apply(this,n)},n.prototype.prepend=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 1===e.length&&Array.isArray(e[0])?new(n.bind.apply(n,l([void 0],e[0].concat(this)))):new(n.bind.apply(n,l([void 0],e.concat(this))))},n}(Array);function q(e){return(0,i.a6)(e)?(0,i.Ay)(e,(function(){})):e}function L(e){return"object"!=typeof e||null==e||Object.isFrozen(e)}function R(e){return void 0===e&&(e={}),function(){return function(e){return function(n){return e(n)}}}}function z(e){var n=typeof e;return null==e||"string"===n||"boolean"===n||"number"===n||Array.isArray(e)||E(e)}function D(e,n,t,r,i,o){var u;if(void 0===n&&(n=""),void 0===t&&(t=z),void 0===i&&(i=[]),!t(e))return{keyPath:n||"<root>",value:e};if("object"!=typeof e||null===e)return!1;if(null==o?void 0:o.has(e))return!1;for(var a=null!=r?r(e):Object.entries(e),c=i.length>0,f=function(e,a){var f=n?n+"."+e:e;return c&&i.some((function(e){return e instanceof RegExp?e.test(f):f===e}))?"continue":t(a)?"object"==typeof a&&(u=D(a,f,t,r,i,o))?{value:u}:void 0:{value:{keyPath:f,value:a}}},l=0,s=a;l<s.length;l++){var d=s[l],p=f(d[0],d[1]);if("object"==typeof p)return p.value}return o&&N(e)&&o.add(e),!1}function N(e){if(!Object.isFrozen(e))return!1;for(var n=0,t=Object.values(e);n<t.length;n++){var r=t[n];if("object"==typeof r&&null!==r&&!N(r))return!1}return!0}function V(e){return void 0===e&&(e={}),function(){return function(e){return function(n){return e(n)}}}}function B(e){void 0===e&&(e={});var n=e.thunk,t=void 0===n||n,r=(e.immutableCheck,e.serializableCheck,e.actionCreatorCheck,new I);return t&&("boolean"==typeof t?r.push(a.A):r.push(a.A.withExtraArgument(t.extraArgument))),r}var U=!0;function X(e){var n,t=function(e){return B(e)},r=e||{},i=r.reducer,u=void 0===i?void 0:i,a=r.middleware,c=void 0===a?t():a,f=r.devTools,s=void 0===f||f,d=r.preloadedState,p=void 0===d?void 0:d,v=r.enhancers,y=void 0===v?void 0:v;if("function"==typeof u)n=u;else{if(!E(u))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');n=(0,o.HY)(u)}var h=c;if("function"==typeof h&&(h=h(t),!U&&!Array.isArray(h)))throw new Error("when using a middleware builder function, an array of middleware must be returned");if(!U&&h.some((function(e){return"function"!=typeof e})))throw new Error("each middleware provided to configureStore must be a function");var g=o.Tw.apply(void 0,h),m=o.Zz;s&&(m=A(b({trace:!U},"object"==typeof s&&s)));var w=new x(g),O=w;Array.isArray(y)?O=l([g],y):"function"==typeof y&&(O=y(w));var j=m.apply(void 0,O);return(0,o.y$)(n,p,j)}function F(e){var n,t={},r=[],i={addCase:function(e,n){var r="string"==typeof e?e:e.type;if(!r)throw new Error("`builder.addCase` cannot be called with an empty action type");if(r in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[r]=n,i},addMatcher:function(e,n){return r.push({matcher:e,reducer:n}),i},addDefaultCase:function(e){return n=e,i}};return e(i),[t,r,n]}function W(e,n,t,r){void 0===t&&(t=[]);var o,u="function"==typeof n?F(n):[n,t,r],a=u[0],c=u[1],f=u[2];if("function"==typeof e)o=function(){return q(e())};else{var s=q(e);o=function(){return s}}function d(e,n){void 0===e&&(e=o());var t=l([a[n.type]],c.filter((function(e){return(0,e.matcher)(n)})).map((function(e){return e.reducer})));return 0===t.filter((function(e){return!!e})).length&&(t=[f]),t.reduce((function(e,t){if(t){var r;if((0,i.Qx)(e))return void 0===(r=t(e,n))?e:r;if((0,i.a6)(e))return(0,i.Ay)(e,(function(e){return t(e,n)}));if(void 0===(r=t(e,n))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e}),e)}return d.getInitialState=o,d}function H(e){var n=e.name;if(!n)throw new Error("`name` is a required option for createSlice");var t,r="function"==typeof e.initialState?e.initialState:q(e.initialState),i=e.reducers||{},o=Object.keys(i),u={},a={},c={};function f(){var n="function"==typeof e.extraReducers?F(e.extraReducers):[e.extraReducers],t=n[0],i=void 0===t?{}:t,o=n[1],u=void 0===o?[]:o,c=n[2],f=void 0===c?void 0:c,l=b(b({},i),a);return W(r,(function(e){for(var n in l)e.addCase(n,l[n]);for(var t=0,r=u;t<r.length;t++){var i=r[t];e.addMatcher(i.matcher,i.reducer)}f&&e.addDefaultCase(f)}))}return o.forEach((function(e){var t,r,o=i[e],f=n+"/"+e;"reducer"in o?(t=o.reducer,r=o.prepare):t=o,u[e]=t,a[f]=t,c[e]=r?S(f,r):S(f)})),{name:n,reducer:function(e,n){return t||(t=f()),t(e,n)},actions:c,caseReducers:u,getInitialState:function(){return t||(t=f()),t.getInitialState()}}}function Q(e){return function(n,t){var r=function(n){k(t)?e(t.payload,n):e(t,n)};return(0,i.Qx)(n)?(r(n),n):(0,i.Ay)(n,r)}}function Z(e,n){return n(e)}function G(e){return Array.isArray(e)||(e=Object.values(e)),e}function Y(e,n,t){for(var r=[],i=[],o=0,u=e=G(e);o<u.length;o++){var a=u[o],c=Z(a,n);c in t.entities?i.push({id:c,changes:a}):r.push(a)}return[r,i]}function $(e){function n(n,t){var r=Z(n,e);r in t.entities||(t.ids.push(r),t.entities[r]=n)}function t(e,t){for(var r=0,i=e=G(e);r<i.length;r++)n(i[r],t)}function r(n,t){var r=Z(n,e);r in t.entities||t.ids.push(r),t.entities[r]=n}function i(e,n){var t=!1;e.forEach((function(e){e in n.entities&&(delete n.entities[e],t=!0)})),t&&(n.ids=n.ids.filter((function(e){return e in n.entities})))}function o(n,t){var r={},i={};if(n.forEach((function(e){e.id in t.entities&&(i[e.id]={id:e.id,changes:b(b({},i[e.id]?i[e.id].changes:null),e.changes)})})),(n=Object.values(i)).length>0){var o=n.filter((function(n){return function(n,t,r){var i=r.entities[t.id],o=Object.assign({},i,t.changes),u=Z(o,e),a=u!==t.id;return a&&(n[t.id]=u,delete r.entities[t.id]),r.entities[u]=o,a}(r,n,t)})).length>0;o&&(t.ids=Object.keys(t.entities))}}function u(n,r){var i=Y(n,e,r),u=i[0];o(i[1],r),t(u,r)}return{removeAll:(a=function(e){Object.assign(e,{ids:[],entities:{}})},c=Q((function(e,n){return a(n)})),function(e){return c(e,void 0)}),addOne:Q(n),addMany:Q(t),setOne:Q(r),setMany:Q((function(e,n){for(var t=0,i=e=G(e);t<i.length;t++)r(i[t],n)})),setAll:Q((function(e,n){e=G(e),n.ids=[],n.entities={},t(e,n)})),updateOne:Q((function(e,n){return o([e],n)})),updateMany:Q(o),upsertOne:Q((function(e,n){return u([e],n)})),upsertMany:Q(u),removeOne:Q((function(e,n){return i([e],n)})),removeMany:Q(i)};var a,c}function J(e){void 0===e&&(e={});var n=b({sortComparer:!1,selectId:function(e){return e.id}},e),t=n.selectId,r=n.sortComparer,i={getInitialState:function(e){return void 0===e&&(e={}),Object.assign({ids:[],entities:{}},e)}},o={getSelectors:function(e){var n=function(e){return e.ids},t=function(e){return e.entities},r=O(n,t,(function(e,n){return e.map((function(e){return n[e]}))})),i=function(e,n){return n},o=function(e,n){return e[n]},u=O(n,(function(e){return e.length}));if(!e)return{selectIds:n,selectEntities:t,selectAll:r,selectTotal:u,selectById:O(t,i,o)};var a=O(e,t);return{selectIds:O(e,n),selectEntities:a,selectAll:O(e,r),selectTotal:O(e,u),selectById:O(a,i,o)}}},u=r?function(e,n){var t=$(e);function r(n,t){var r=(n=G(n)).filter((function(n){return!(Z(n,e)in t.entities)}));0!==r.length&&a(r,t)}function i(e,n){0!==(e=G(e)).length&&a(e,n)}function o(n,t){for(var r=!1,i=0,o=n;i<o.length;i++){var u=o[i],a=t.entities[u.id];if(a){r=!0,Object.assign(a,u.changes);var f=e(a);u.id!==f&&(delete t.entities[u.id],t.entities[f]=a)}}r&&c(t)}function u(n,t){var i=Y(n,e,t),u=i[0];o(i[1],t),r(u,t)}function a(n,t){n.forEach((function(n){t.entities[e(n)]=n})),c(t)}function c(t){var r=Object.values(t.entities);r.sort(n);var i=r.map(e);(function(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(e[t]!==n[t])return!1;return!0})(t.ids,i)||(t.ids=i)}return{removeOne:t.removeOne,removeMany:t.removeMany,removeAll:t.removeAll,addOne:Q((function(e,n){return r([e],n)})),updateOne:Q((function(e,n){return o([e],n)})),upsertOne:Q((function(e,n){return u([e],n)})),setOne:Q((function(e,n){return i([e],n)})),setMany:Q(i),setAll:Q((function(e,n){e=G(e),n.entities={},n.ids=[],r(e,n)})),addMany:Q(r),updateMany:Q(o),upsertMany:Q(u)}}(t,r):$(t);return b(b(b({selectId:t,sortComparer:r},i),o),u)}var K=function(e){void 0===e&&(e=21);for(var n="",t=e;t--;)n+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return n},ee=["name","message","stack","code"],ne=function(e,n){this.payload=e,this.meta=n},te=function(e,n){this.payload=e,this.meta=n},re=function(e){if("object"==typeof e&&null!==e){for(var n={},t=0,r=ee;t<r.length;t++){var i=r[t];"string"==typeof e[i]&&(n[i]=e[i])}return n}return{message:String(e)}},ie=function(){function e(e,n,t){var r=S(e+"/fulfilled",(function(e,n,t,r){return{payload:e,meta:m(b({},r||{}),{arg:t,requestId:n,requestStatus:"fulfilled"})}})),i=S(e+"/pending",(function(e,n,t){return{payload:void 0,meta:m(b({},t||{}),{arg:n,requestId:e,requestStatus:"pending"})}})),o=S(e+"/rejected",(function(e,n,r,i,o){return{payload:i,error:(t&&t.serializeError||re)(e||"Rejected"),meta:m(b({},o||{}),{arg:r,requestId:n,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),u="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(a,c,l){var s,d=(null==t?void 0:t.idGenerator)?t.idGenerator(e):K(),p=new u;function v(e){s=e,p.abort()}var y=function(){return w(this,null,(function(){var u,y,h,g,b,m;return f(this,(function(f){switch(f.label){case 0:return f.trys.push([0,4,,5]),null===(w=g=null==(u=null==t?void 0:t.condition)?void 0:u.call(t,e,{getState:c,extra:l}))||"object"!=typeof w||"function"!=typeof w.then?[3,2]:[4,g];case 1:g=f.sent(),f.label=2;case 2:if(!1===g||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=new Promise((function(e,n){return p.signal.addEventListener("abort",(function(){return n({name:"AbortError",message:s||"Aborted"})}))})),a(i(d,e,null==(y=null==t?void 0:t.getPendingMeta)?void 0:y.call(t,{requestId:d,arg:e},{getState:c,extra:l}))),[4,Promise.race([b,Promise.resolve(n(e,{dispatch:a,getState:c,extra:l,requestId:d,signal:p.signal,abort:v,rejectWithValue:function(e,n){return new ne(e,n)},fulfillWithValue:function(e,n){return new te(e,n)}})).then((function(n){if(n instanceof ne)throw n;return n instanceof te?r(n.payload,d,e,n.meta):r(n,d,e)}))])];case 3:return h=f.sent(),[3,5];case 4:return m=f.sent(),h=m instanceof ne?o(null,d,e,m.payload,m.meta):o(m,d,e),[3,5];case 5:return t&&!t.dispatchConditionRejection&&o.match(h)&&h.meta.condition||a(h),[2,h]}var w}))}))}();return Object.assign(y,{abort:v,requestId:d,arg:e,unwrap:function(){return y.then(oe)}})}}),{pending:i,rejected:o,fulfilled:r,typePrefix:e})}return e.withTypes=function(){return e},e}();function oe(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var ue=function(e,n){return j(e)?e.match(n):e(n)};function ae(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return function(n){return e.some((function(e){return ue(e,n)}))}}function ce(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return function(n){return e.every((function(e){return ue(e,n)}))}}function fe(e,n){if(!e||!e.meta)return!1;var t="string"==typeof e.meta.requestId,r=n.indexOf(e.meta.requestStatus)>-1;return t&&r}function le(e){return"function"==typeof e[0]&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function se(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return fe(e,["pending"])}:le(e)?function(n){var t=e.map((function(e){return e.pending}));return ae.apply(void 0,t)(n)}:se()(e[0])}function de(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return fe(e,["rejected"])}:le(e)?function(n){var t=e.map((function(e){return e.rejected}));return ae.apply(void 0,t)(n)}:de()(e[0])}function pe(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=function(e){return e&&e.meta&&e.meta.rejectedWithValue};return 0===e.length||le(e)?function(n){return ce(de.apply(void 0,e),t)(n)}:pe()(e[0])}function ve(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return fe(e,["fulfilled"])}:le(e)?function(n){var t=e.map((function(e){return e.fulfilled}));return ae.apply(void 0,t)(n)}:ve()(e[0])}function ye(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return fe(e,["pending","fulfilled","rejected"])}:le(e)?function(n){for(var t=[],r=0,i=e;r<i.length;r++){var o=i[r];t.push(o.pending,o.rejected,o.fulfilled)}return ae.apply(void 0,t)(n)}:ye()(e[0])}var he=function(e,n){if("function"!=typeof e)throw new TypeError(n+" is not a function")},ge=function(){},be=function(e,n){return void 0===n&&(n=ge),e.catch(n),e},me=function(e,n){return e.addEventListener("abort",n,{once:!0}),function(){return e.removeEventListener("abort",n)}},we=function(e,n){var t=e.signal;t.aborted||("reason"in t||Object.defineProperty(t,"reason",{enumerable:!0,value:n,configurable:!0,writable:!0}),e.abort(n))},Oe="listener",Ae="completed",Ee="cancelled",je="task-"+Ee,Se="task-"+Ae,_e=Oe+"-"+Ee,Pe=Oe+"-"+Ae,ke=function(e){this.code=e,this.name="TaskAbortError",this.message="task "+Ee+" (reason: "+e+")"},Te=function(e){if(e.aborted)throw new ke(e.reason)};function Ce(e,n){var t=ge;return new Promise((function(r,i){var o=function(){return i(new ke(e.reason))};e.aborted?o():(t=me(e,o),n.finally((function(){return t()})).then(r,i))})).finally((function(){t=ge}))}var Me=function(e){return function(n){return be(Ce(e,n).then((function(n){return Te(e),n})))}},Ie=function(e){var n=Me(e);return function(e){return n(new Promise((function(n){return setTimeout(n,e)})))}},xe=Object.assign,qe={},Le="listenerMiddleware",Re=function(e,n){return function(t,r){he(t,"taskExecutor");var i,o=new AbortController;i=o,me(e,(function(){return we(i,e.reason)}));var u,a,c=(u=function(){return w(void 0,null,(function(){var n;return f(this,(function(r){switch(r.label){case 0:return Te(e),Te(o.signal),[4,t({pause:Me(o.signal),delay:Ie(o.signal),signal:o.signal})];case 1:return n=r.sent(),Te(o.signal),[2,n]}}))}))},a=function(){return we(o,Se)},w(void 0,null,(function(){var e;return f(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,4,5]),[4,Promise.resolve()];case 1:return n.sent(),[4,u()];case 2:return[2,{status:"ok",value:n.sent()}];case 3:return[2,{status:(e=n.sent())instanceof ke?"cancelled":"rejected",error:e}];case 4:return null==a||a(),[7];case 5:return[2]}}))})));return(null==r?void 0:r.autoJoin)&&n.push(c),{result:Me(e)(c),cancel:function(){we(o,je)}}}},ze=function(e,n){return function(t,r){return be(function(t,r){return w(void 0,null,(function(){var i,o,u,a;return f(this,(function(c){switch(c.label){case 0:Te(n),i=function(){},o=new Promise((function(n,r){var o=e({predicate:t,effect:function(e,t){t.unsubscribe(),n([e,t.getState(),t.getOriginalState()])}});i=function(){o(),r()}})),u=[o],null!=r&&u.push(new Promise((function(e){return setTimeout(e,r,null)}))),c.label=1;case 1:return c.trys.push([1,,3,4]),[4,Ce(n,Promise.race(u))];case 2:return a=c.sent(),Te(n),[2,a];case 3:return i(),[7];case 4:return[2]}}))}))}(t,r))}},De=function(e){var n=e.type,t=e.actionCreator,r=e.matcher,i=e.predicate,o=e.effect;if(n)i=S(n).match;else if(t)n=t.type,i=t.match;else if(r)i=r;else if(!i)throw new Error("Creating or removing a listener requires one of the known fields for matching an action");return he(o,"options.listener"),{predicate:i,type:n,effect:o}},Ne=function(e){var n=De(e),t=n.type,r=n.predicate,i=n.effect;return{id:K(),effect:i,type:t,predicate:r,pending:new Set,unsubscribe:function(){throw new Error("Unsubscribe not initialized")}}},Ve=function(e){e.pending.forEach((function(e){we(e,_e)}))},Be=function(e){return function(){e.forEach(Ve),e.clear()}},Ue=function(e,n,t){try{e(n,t)}catch(e){setTimeout((function(){throw e}),0)}},Xe=S(Le+"/add"),Fe=S(Le+"/removeAll"),We=S(Le+"/remove"),He=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.error.apply(console,l([Le+"/error"],e))};function Qe(e){var n=this;void 0===e&&(e={});var t=new Map,r=e.extra,i=e.onError,o=void 0===i?He:i;he(o,"onError");var u=function(e){for(var n=0,r=Array.from(t.values());n<r.length;n++){var i=r[n];if(e(i))return i}},a=function(e){var n=u((function(n){return n.effect===e.effect}));return n||(n=Ne(e)),function(e){return e.unsubscribe=function(){return t.delete(e.id)},t.set(e.id,e),function(n){e.unsubscribe(),(null==n?void 0:n.cancelActive)&&Ve(e)}}(n)},c=function(e){var n=De(e),t=n.type,r=n.effect,i=n.predicate,o=u((function(e){return("string"==typeof t?e.type===t:e.predicate===i)&&e.effect===r}));return o&&(o.unsubscribe(),e.cancelActive&&Ve(o)),!!o},l=function(e,i,u,c){return w(n,null,(function(){var n,l,s,d;return f(this,(function(f){switch(f.label){case 0:n=new AbortController,l=ze(a,n.signal),s=[],f.label=1;case 1:return f.trys.push([1,3,4,6]),e.pending.add(n),[4,Promise.resolve(e.effect(i,xe({},u,{getOriginalState:c,condition:function(e,n){return l(e,n).then(Boolean)},take:l,delay:Ie(n.signal),pause:Me(n.signal),extra:r,signal:n.signal,fork:Re(n.signal,s),unsubscribe:e.unsubscribe,subscribe:function(){t.set(e.id,e)},cancelActiveListeners:function(){e.pending.forEach((function(e,t,r){e!==n&&(we(e,_e),r.delete(e))}))}})))];case 2:return f.sent(),[3,6];case 3:return(d=f.sent())instanceof ke||Ue(o,d,{raisedBy:"effect"}),[3,6];case 4:return[4,Promise.allSettled(s)];case 5:return f.sent(),we(n,Pe),e.pending.delete(n),[7];case 6:return[2]}}))}))},s=Be(t);return{middleware:function(e){return function(n){return function(r){if(!_(r))return n(r);if(Xe.match(r))return a(r.payload);if(!Fe.match(r)){if(We.match(r))return c(r.payload);var i,u=e.getState(),f=function(){if(u===qe)throw new Error(Le+": getOriginalState can only be called synchronously");return u};try{if(i=n(r),t.size>0)for(var d=e.getState(),p=Array.from(t.values()),v=0,y=p;v<y.length;v++){var h=y[v],g=!1;try{g=h.predicate(r,d,u)}catch(e){g=!1,Ue(o,e,{raisedBy:"predicate"})}g&&l(h,r,e,f)}}finally{u=qe}return i}s()}}},startListening:a,stopListening:c,clearListeners:s}}var Ze,Ge="RTK_autoBatch",Ye=function(){return function(e){var n;return{payload:e,meta:(n={},n[Ge]=!0,n)}}},$e="function"==typeof queueMicrotask?queueMicrotask.bind("undefined"!=typeof window?window:void 0!==t.g?t.g:globalThis):function(e){return(Ze||(Ze=Promise.resolve())).then(e).catch((function(e){return setTimeout((function(){throw e}),0)}))},Je=function(e){return function(n){setTimeout(n,e)}},Ke="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Je(10),en=function(e){return void 0===e&&(e={type:"raf"}),function(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=n.apply(void 0,t),o=!0,u=!1,a=!1,c=new Set,f="tick"===e.type?$e:"raf"===e.type?Ke:"callback"===e.type?e.queueNotification:Je(e.timeout),l=function(){a=!1,u&&(u=!1,c.forEach((function(e){return e()})))};return Object.assign({},i,{subscribe:function(e){var n=i.subscribe((function(){return o&&e()}));return c.add(e),function(){n(),c.delete(e)}},dispatch:function(e){var n;try{return o=!(null==(n=null==e?void 0:e.meta)?void 0:n[Ge]),(u=!o)&&(a||(a=!0,f(l))),i.dispatch(e)}finally{o=!0}}})}}};(0,i.rF)()}}]);