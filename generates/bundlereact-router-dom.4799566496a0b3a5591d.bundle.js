/*! For license information please see bundlereact-router-dom.4799566496a0b3a5591d.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunklahelu_client=self.webpackChunklahelu_client||[]).push([[669],{84976:(e,t,n)=>{var r,o;n.r(t),n.d(t,{AbortedDeferredError:()=>u.tH,Await:()=>s.jD,BrowserRouter:()=>O,Form:()=>z,HashRouter:()=>D,Link:()=>M,MemoryRouter:()=>s.fS,NavLink:()=>I,Navigate:()=>s.C5,NavigationType:()=>u.rc,Outlet:()=>s.sv,Route:()=>s.qh,Router:()=>s.Ix,RouterProvider:()=>P,Routes:()=>s.BV,ScrollRestoration:()=>H,UNSAFE_DataRouterContext:()=>s.sp,UNSAFE_DataRouterStateContext:()=>s.Rq,UNSAFE_ErrorResponseImpl:()=>u.VV,UNSAFE_FetchersContext:()=>C,UNSAFE_LocationContext:()=>s.yN,UNSAFE_NavigationContext:()=>s.jb,UNSAFE_RouteContext:()=>s.UX,UNSAFE_ViewTransitionContext:()=>L,UNSAFE_useRouteId:()=>s.$3,UNSAFE_useScrollRestoration:()=>oe,createBrowserRouter:()=>S,createHashRouter:()=>R,createMemoryRouter:()=>s.bg,createPath:()=>u.AO,createRoutesFromChildren:()=>s.AV,createRoutesFromElements:()=>s.Eu,createSearchParams:()=>h,defer:()=>u.v6,generatePath:()=>u.tW,isRouteErrorResponse:()=>u.pX,json:()=>u.Pq,matchPath:()=>u.B6,matchRoutes:()=>u.ue,parsePath:()=>u.Rr,redirect:()=>u.V2,redirectDocument:()=>u.Sk,renderMatches:()=>s.KT,replace:()=>u.HC,resolvePath:()=>u.o1,unstable_HistoryRouter:()=>V,unstable_usePrompt:()=>ie,useActionData:()=>s.mP,useAsyncError:()=>s.oI,useAsyncValue:()=>s.J8,useBeforeUnload:()=>ae,useBlocker:()=>s.KP,useFetcher:()=>ee,useFetchers:()=>te,useFormAction:()=>G,useHref:()=>s.$P,useInRouterContext:()=>s.Ri,useLinkClickHandler:()=>X,useLoaderData:()=>s.LG,useLocation:()=>s.zy,useMatch:()=>s.RQ,useMatches:()=>s.FE,useNavigate:()=>s.Zp,useNavigation:()=>s.cq,useNavigationType:()=>s.wQ,useOutlet:()=>s.P1,useOutletContext:()=>s.KC,useParams:()=>s.g,useResolvedPath:()=>s.x$,useRevalidator:()=>s.vL,useRouteError:()=>s.r5,useRouteLoaderData:()=>s.Ew,useRoutes:()=>s.Ye,useSearchParams:()=>Y,useSubmit:()=>Q,useViewTransitionState:()=>se});var a=n(96540),i=n(40961),s=n(47767),u=n(45588);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}const f="get",d="application/x-www-form-urlencoded";function m(e){return null!=e&&"string"==typeof e.tagName}function h(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}let v=null;const p=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function w(e){return null==e||p.has(e)?e:null}const y=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],g=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],b=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}function S(e,t){return(0,u.aE)({basename:null==t?void 0:t.basename,future:l({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,u.zR)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||E(),routes:e,mapRouteProperties:s.wE,dataStrategy:null==t?void 0:t.dataStrategy,patchRoutesOnNavigation:null==t?void 0:t.patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize()}function R(e,t){return(0,u.aE)({basename:null==t?void 0:t.basename,future:l({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,u.TM)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||E(),routes:e,mapRouteProperties:s.wE,dataStrategy:null==t?void 0:t.dataStrategy,patchRoutesOnNavigation:null==t?void 0:t.patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize()}function E(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=l({},t,{errors:T(t.errors)})),t}function T(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new u.VV(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){if(r.__subType){let t=window[r.__subType];if("function"==typeof t)try{let o=new t(r.message);o.stack="",n[e]=o}catch(e){}}if(null==n[e]){let t=new Error(r.message);t.stack="",n[e]=t}}else n[e]=r;return n}const L=a.createContext({isTransitioning:!1}),C=a.createContext(new Map),x=(r||(r=n.t(a,2))).startTransition,A=(o||(o=n.t(i,2))).flushSync,_=(r||(r=n.t(a,2))).useId;function k(e){A?A(e):e()}class F{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function P(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=a.useState(n.state),[u,l]=a.useState(),[c,f]=a.useState({isTransitioning:!1}),[d,m]=a.useState(),[h,v]=a.useState(),[p,w]=a.useState(),y=a.useRef(new Map),{v7_startTransition:g}=r||{},b=a.useCallback((e=>{g?function(e){x?x(e):e()}(e):e()}),[g]),S=a.useCallback(((e,t)=>{let{deletedFetchers:r,flushSync:o,viewTransitionOpts:a}=t;r.forEach((e=>y.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&y.current.set(t,e.data)}));let s=null==n.window||null==n.window.document||"function"!=typeof n.window.document.startViewTransition;if(a&&!s){if(o){k((()=>{h&&(d&&d.resolve(),h.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:a.currentLocation,nextLocation:a.nextLocation})}));let t=n.window.document.startViewTransition((()=>{k((()=>i(e)))}));return t.finished.finally((()=>{k((()=>{m(void 0),v(void 0),l(void 0),f({isTransitioning:!1})}))})),void k((()=>v(t)))}h?(d&&d.resolve(),h.skipTransition(),w({state:e,currentLocation:a.currentLocation,nextLocation:a.nextLocation})):(l(e),f({isTransitioning:!0,flushSync:!1,currentLocation:a.currentLocation,nextLocation:a.nextLocation}))}else o?k((()=>i(e))):b((()=>i(e)))}),[n.window,h,d,y,b]);a.useLayoutEffect((()=>n.subscribe(S)),[n,S]),a.useEffect((()=>{c.isTransitioning&&!c.flushSync&&m(new F)}),[c]),a.useEffect((()=>{if(d&&u&&n.window){let e=u,t=d.promise,r=n.window.document.startViewTransition((async()=>{b((()=>i(e))),await t}));r.finished.finally((()=>{m(void 0),v(void 0),l(void 0),f({isTransitioning:!1})})),v(r)}}),[b,u,d,n.window]),a.useEffect((()=>{d&&u&&o.location.key===u.location.key&&d.resolve()}),[d,h,o.location,u]),a.useEffect((()=>{!c.isTransitioning&&p&&(l(p.state),f({isTransitioning:!0,flushSync:!1,currentLocation:p.currentLocation,nextLocation:p.nextLocation}),w(void 0))}),[c.isTransitioning,p]),a.useEffect((()=>{}),[]);let R=a.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),E=n.basename||"/",T=a.useMemo((()=>({router:n,navigator:R,static:!1,basename:E})),[n,R,E]),A=a.useMemo((()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath})),[n.future.v7_relativeSplatPath]);return a.useEffect((()=>(0,s.V8)(r,n.future)),[r,n.future]),a.createElement(a.Fragment,null,a.createElement(s.sp.Provider,{value:T},a.createElement(s.Rq.Provider,{value:o},a.createElement(C.Provider,{value:y.current},a.createElement(L.Provider,{value:c},a.createElement(s.Ix,{basename:E,location:o.location,navigationType:o.historyAction,navigator:R,future:A},o.initialized||n.future.v7_partialHydration?a.createElement(U,{routes:n.routes,future:n.future,state:o}):t))))),null)}const U=a.memo(N);function N(e){let{routes:t,future:n,state:r}=e;return(0,s.ph)(t,void 0,r,n)}function O(e){let{basename:t,children:n,future:r,window:o}=e,i=a.useRef();null==i.current&&(i.current=(0,u.zR)({window:o,v5Compat:!0}));let l=i.current,[c,f]=a.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},m=a.useCallback((e=>{d&&x?x((()=>f(e))):f(e)}),[f,d]);return a.useLayoutEffect((()=>l.listen(m)),[l,m]),a.useEffect((()=>(0,s.V8)(r)),[r]),a.createElement(s.Ix,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}function D(e){let{basename:t,children:n,future:r,window:o}=e,i=a.useRef();null==i.current&&(i.current=(0,u.TM)({window:o,v5Compat:!0}));let l=i.current,[c,f]=a.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},m=a.useCallback((e=>{d&&x?x((()=>f(e))):f(e)}),[f,d]);return a.useLayoutEffect((()=>l.listen(m)),[l,m]),a.useEffect((()=>(0,s.V8)(r)),[r]),a.createElement(s.Ix,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}function V(e){let{basename:t,children:n,future:r,history:o}=e,[i,u]=a.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},c=a.useCallback((e=>{l&&x?x((()=>u(e))):u(e)}),[u,l]);return a.useLayoutEffect((()=>o.listen(c)),[o,c]),a.useEffect((()=>(0,s.V8)(r)),[r]),a.createElement(s.Ix,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:o,future:r})}const K="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,j=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=a.forwardRef((function(e,t){let n,{onClick:r,relative:o,reloadDocument:i,replace:f,state:d,target:m,to:h,preventScrollReset:v,viewTransition:p}=e,w=c(e,y),{basename:g}=a.useContext(s.jb),b=!1;if("string"==typeof h&&j.test(h)&&(n=h,K))try{let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h),n=(0,u.pb)(t.pathname,g);t.origin===e.origin&&null!=n?h=n+t.search+t.hash:b=!0}catch(e){}let S=(0,s.$P)(h,{relative:o}),R=X(h,{replace:f,state:d,target:m,preventScrollReset:v,relative:o,viewTransition:p});return a.createElement("a",l({},w,{href:n||S,onClick:b||i?r:function(e){r&&r(e),e.defaultPrevented||R(e)},ref:t,target:m}))})),I=a.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:o="",end:i=!1,style:f,to:d,viewTransition:m,children:h}=e,v=c(e,g),p=(0,s.x$)(d,{relative:v.relative}),w=(0,s.zy)(),y=a.useContext(s.Rq),{navigator:b,basename:S}=a.useContext(s.jb),R=null!=y&&se(p)&&!0===m,E=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,T=w.pathname,L=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(T=T.toLowerCase(),L=L?L.toLowerCase():null,E=E.toLowerCase()),L&&S&&(L=(0,u.pb)(L,S)||L);const C="/"!==E&&E.endsWith("/")?E.length-1:E.length;let x,A=T===E||!i&&T.startsWith(E)&&"/"===T.charAt(C),_=null!=L&&(L===E||!i&&L.startsWith(E)&&"/"===L.charAt(E.length)),k={isActive:A,isPending:_,isTransitioning:R},F=A?n:void 0;x="function"==typeof o?o(k):[o,A?"active":null,_?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let P="function"==typeof f?f(k):f;return a.createElement(M,l({},v,{"aria-current":F,className:x,ref:t,style:P,to:d,viewTransition:m}),"function"==typeof h?h(k):h)})),z=a.forwardRef(((e,t)=>{let{fetcherKey:n,navigate:r,reloadDocument:o,replace:i,state:s,method:u=f,action:d,onSubmit:m,relative:h,preventScrollReset:v,viewTransition:p}=e,w=c(e,b),y=Q(),g=G(d,{relative:h}),S="get"===u.toLowerCase()?"get":"post";return a.createElement("form",l({ref:t,method:S,action:g,onSubmit:o?m:e=>{if(m&&m(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,o=(null==t?void 0:t.getAttribute("formmethod"))||u;y(t||e.currentTarget,{fetcherKey:n,method:o,navigate:r,replace:i,state:s,relative:h,preventScrollReset:v,viewTransition:p})}},w))}));function H(e){let{getKey:t,storageKey:n}=e;return oe({getKey:t,storageKey:n}),null}var B,$;function q(e){let t=a.useContext(s.sp);return t||(0,u.Oi)(!1),t}function W(e){let t=a.useContext(s.Rq);return t||(0,u.Oi)(!1),t}function X(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,viewTransition:c}=void 0===t?{}:t,f=(0,s.Zp)(),d=(0,s.zy)(),m=(0,s.x$)(e,{relative:l});return a.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:(0,u.AO)(d)===(0,u.AO)(m);f(e,{replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:c})}}),[d,f,m,r,o,n,e,i,l,c])}function Y(e){let t=a.useRef(h(e)),n=a.useRef(!1),r=(0,s.zy)(),o=a.useMemo((()=>function(e,t){let n=h(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(r.search,n.current?null:t.current)),[r.search]),i=(0,s.Zp)(),u=a.useCallback(((e,t)=>{const r=h("function"==typeof e?e(o):e);n.current=!0,i("?"+r,t)}),[i,o]);return[o,u]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(B||(B={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}($||($={}));let J=0,Z=()=>"__"+String(++J)+"__";function Q(){let{router:e}=q(B.UseSubmit),{basename:t}=a.useContext(s.jb),n=(0,s.$3)();return a.useCallback((function(r,o){void 0===o&&(o={}),function(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}();let{action:a,method:i,encType:s,formData:l,body:c}=function(e,t){let n,r,o,a,i;if(m(s=e)&&"form"===s.tagName.toLowerCase()){let i=e.getAttribute("action");r=i?(0,u.pb)(i,t):null,n=e.getAttribute("method")||f,o=w(e.getAttribute("enctype"))||d,a=new FormData(e)}else if(function(e){return m(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return m(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||i.getAttribute("action");if(r=s?(0,u.pb)(s,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||f,o=w(e.getAttribute("formenctype"))||w(i.getAttribute("enctype"))||d,a=new FormData(i,e),!function(){if(null===v)try{new FormData(document.createElement("form"),0),v=!1}catch(e){v=!0}return v}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?t+".":"";a.append(e+"x","0"),a.append(e+"y","0")}else t&&a.append(t,r)}}else{if(m(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=f,r=null,o=d,i=e}var s;return a&&"text/plain"===o&&(i=a,a=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:a,body:i}}(r,t);if(!1===o.navigate){let t=o.fetcherKey||Z();e.fetch(t,n,o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||i,formEncType:o.encType||s,flushSync:o.flushSync})}else e.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||i,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[e,t,n])}function G(e,t){let{relative:n}=void 0===t?{}:t,{basename:r}=a.useContext(s.jb),o=a.useContext(s.UX);o||(0,u.Oi)(!1);let[i]=o.matches.slice(-1),c=l({},(0,s.x$)(e||".",{relative:n})),f=(0,s.zy)();if(null==e){c.search=f.search;let e=new URLSearchParams(c.search),t=e.getAll("index");if(t.some((e=>""===e))){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();c.search=n?"?"+n:""}}return e&&"."!==e||!i.route.index||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(c.pathname="/"===c.pathname?r:(0,u.HS)([r,c.pathname])),(0,u.AO)(c)}function ee(e){var t;let{key:n}=void 0===e?{}:e,{router:r}=q(B.UseFetcher),o=W($.UseFetcher),i=a.useContext(C),c=a.useContext(s.UX),f=null==(t=c.matches[c.matches.length-1])?void 0:t.route.id;i||(0,u.Oi)(!1),c||(0,u.Oi)(!1),null==f&&(0,u.Oi)(!1);let d=_?_():"",[m,h]=a.useState(n||d);n&&n!==m?h(n):m||h(Z()),a.useEffect((()=>(r.getFetcher(m),()=>{r.deleteFetcher(m)})),[r,m]);let v=a.useCallback(((e,t)=>{f||(0,u.Oi)(!1),r.fetch(m,f,e,t)}),[m,f,r]),p=Q(),w=a.useCallback(((e,t)=>{p(e,l({},t,{navigate:!1,fetcherKey:m}))}),[m,p]),y=a.useMemo((()=>a.forwardRef(((e,t)=>a.createElement(z,l({},e,{navigate:!1,fetcherKey:m,ref:t}))))),[m]),g=o.fetchers.get(m)||u.HW,b=i.get(m);return a.useMemo((()=>l({Form:y,submit:w,load:v},g,{data:b})),[y,w,v,g,b])}function te(){let e=W($.UseFetchers);return Array.from(e.fetchers.entries()).map((e=>{let[t,n]=e;return l({},n,{key:t})}))}const ne="react-router-scroll-positions";let re={};function oe(e){let{getKey:t,storageKey:n}=void 0===e?{}:e,{router:r}=q(B.UseScrollRestoration),{restoreScrollPosition:o,preventScrollReset:i}=W($.UseScrollRestoration),{basename:c}=a.useContext(s.jb),f=(0,s.zy)(),d=(0,s.FE)(),m=(0,s.cq)();a.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),function(e){let{capture:t}={};a.useEffect((()=>{let n=null!=t?{capture:t}:void 0;return window.addEventListener("pagehide",e,n),()=>{window.removeEventListener("pagehide",e,n)}}),[e,t])}(a.useCallback((()=>{if("idle"===m.state){let e=(t?t(f,d):null)||f.key;re[e]=window.scrollY}try{sessionStorage.setItem(n||ne,JSON.stringify(re))}catch(e){}window.history.scrollRestoration="auto"}),[n,t,m.state,f,d])),"undefined"!=typeof document&&(a.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(n||ne);e&&(re=JSON.parse(e))}catch(e){}}),[n]),a.useLayoutEffect((()=>{let e=t&&"/"!==c?(e,n)=>t(l({},e,{pathname:(0,u.pb)(e.pathname,c)||e.pathname}),n):t,n=null==r?void 0:r.enableScrollRestoration(re,(()=>window.scrollY),e);return()=>n&&n()}),[r,c,t]),a.useLayoutEffect((()=>{if(!1!==o)if("number"!=typeof o){if(f.hash){let e=document.getElementById(decodeURIComponent(f.hash.slice(1)));if(e)return void e.scrollIntoView()}!0!==i&&window.scrollTo(0,0)}else window.scrollTo(0,o)}),[f,o,i]))}function ae(e,t){let{capture:n}=t||{};a.useEffect((()=>{let t=null!=n?{capture:n}:void 0;return window.addEventListener("beforeunload",e,t),()=>{window.removeEventListener("beforeunload",e,t)}}),[e,n])}function ie(e){let{when:t,message:n}=e,r=(0,s.KP)(t);a.useEffect((()=>{"blocked"===r.state&&(window.confirm(n)?setTimeout(r.proceed,0):r.reset())}),[r,n]),a.useEffect((()=>{"blocked"!==r.state||t||r.reset()}),[r,t])}function se(e,t){void 0===t&&(t={});let n=a.useContext(L);null==n&&(0,u.Oi)(!1);let{basename:r}=q(B.useViewTransitionState),o=(0,s.x$)(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=(0,u.pb)(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=(0,u.pb)(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=(0,u.B6)(o.pathname,l)||null!=(0,u.B6)(o.pathname,i)}}}]);