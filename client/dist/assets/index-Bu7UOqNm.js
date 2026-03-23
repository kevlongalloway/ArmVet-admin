(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var os={exports:{}},yl={},as={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),Nc=Symbol.for("react.portal"),Cc=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),_c=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),Pc=Symbol.for("react.suspense"),Tc=Symbol.for("react.memo"),Fc=Symbol.for("react.lazy"),Xo=Symbol.iterator;function Dc(e){return e===null||typeof e!="object"?null:(e=Xo&&e[Xo]||e["@@iterator"],typeof e=="function"?e:null)}var ss={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},us=Object.assign,cs={};function yn(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||ss}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ds(){}ds.prototype=yn.prototype;function eo(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||ss}var to=eo.prototype=new ds;to.constructor=eo;us(to,yn.prototype);to.isPureReactComponent=!0;var Zo=Array.isArray,ps=Object.prototype.hasOwnProperty,no={current:null},fs={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)ps.call(t,r)&&!fs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:cr,type:e,key:o,ref:a,props:l,_owner:no.current}}function Mc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Ac(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jo=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ac(""+e.key):t.toString(36)}function Mr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case cr:case Nc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Al(a,0):r,Zo(l)?(n="",e!=null&&(n=e.replace(Jo,"$&/")+"/"),Mr(l,t,n,"",function(c){return c})):l!=null&&(ro(l)&&(l=Mc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Jo,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Zo(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Al(o,s);a+=Mr(o,t,n,u,l)}else if(u=Dc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Al(o,s++),a+=Mr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gr(e,t,n){if(e==null)return e;var r=[],l=0;return Mr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Oc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Ar={transition:null},Rc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Ar,ReactCurrentOwner:no};function ms(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!ro(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=yn;D.Fragment=Cc;D.Profiler=Ec;D.PureComponent=eo;D.StrictMode=bc;D.Suspense=Pc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rc;D.act=ms;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=us({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=no.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ps.call(t,u)&&!fs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:cr,type:e.type,key:l,ref:o,props:r,_owner:a}};D.createContext=function(e){return e={$$typeof:_c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zc,_context:e},e.Consumer=e};D.createElement=hs;D.createFactory=function(e){var t=hs.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Lc,render:e}};D.isValidElement=ro;D.lazy=function(e){return{$$typeof:Fc,_payload:{_status:-1,_result:e},_init:Oc}};D.memo=function(e,t){return{$$typeof:Tc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Ar.transition;Ar.transition={};try{e()}finally{Ar.transition=t}};D.unstable_act=ms;D.useCallback=function(e,t){return me.current.useCallback(e,t)};D.useContext=function(e){return me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return me.current.useDeferredValue(e)};D.useEffect=function(e,t){return me.current.useEffect(e,t)};D.useId=function(){return me.current.useId()};D.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return me.current.useMemo(e,t)};D.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};D.useRef=function(e){return me.current.useRef(e)};D.useState=function(e){return me.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return me.current.useTransition()};D.version="18.3.1";as.exports=D;var _=as.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=_,Bc=Symbol.for("react.element"),Uc=Symbol.for("react.fragment"),$c=Object.prototype.hasOwnProperty,Wc=Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hc={key:!0,ref:!0,__self:!0,__source:!0};function gs(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)$c.call(t,r)&&!Hc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Bc,type:e,key:o,ref:a,props:l,_owner:Wc.current}}yl.Fragment=Uc;yl.jsx=gs;yl.jsxs=gs;os.exports=yl;var i=os.exports,vs={exports:{}},Ee={},xs={exports:{}},ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,P){var T=S.length;S.push(P);e:for(;0<T;){var $=T-1>>>1,X=S[$];if(0<l(X,P))S[$]=P,S[T]=X,T=$;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var P=S[0],T=S.pop();if(T!==P){S[0]=T;e:for(var $=0,X=S.length,Wt=X>>>1;$<Wt;){var Xe=2*($+1)-1,Nn=S[Xe],Ze=Xe+1,Z=S[Ze];if(0>l(Nn,T))Ze<X&&0>l(Z,Nn)?(S[$]=Z,S[Ze]=T,$=Ze):(S[$]=Nn,S[Xe]=T,$=Xe);else if(Ze<X&&0>l(Z,T))S[$]=Z,S[Ze]=T,$=Ze;else break e}}return P}function l(S,P){var T=S.sortIndex-P.sortIndex;return T!==0?T:S.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],m=1,g=null,f=3,y=!1,v=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(S){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=S)r(c),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(c)}}function w(S){if(k=!1,h(S),!v)if(n(u)!==null)v=!0,jn(C);else{var P=n(c);P!==null&&Sn(w,P.startTime-S)}}function C(S,P){v=!1,k&&(k=!1,p(N),N=-1),y=!0;var T=f;try{for(h(P),g=n(u);g!==null&&(!(g.expirationTime>P)||S&&!pe());){var $=g.callback;if(typeof $=="function"){g.callback=null,f=g.priorityLevel;var X=$(g.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?g.callback=X:g===n(u)&&r(u),h(P)}else r(u);g=n(u)}if(g!==null)var Wt=!0;else{var Xe=n(c);Xe!==null&&Sn(w,Xe.startTime-P),Wt=!1}return Wt}finally{g=null,f=T,y=!1}}var z=!1,x=null,N=-1,M=5,F=-1;function pe(){return!(e.unstable_now()-F<M)}function q(){if(x!==null){var S=e.unstable_now();F=S;var P=!0;try{P=x(!0,S)}finally{P?Ge():(z=!1,x=null)}}else z=!1}var Ge;if(typeof d=="function")Ge=function(){d(q)};else if(typeof MessageChannel<"u"){var mr=new MessageChannel,Ml=mr.port2;mr.port1.onmessage=q,Ge=function(){Ml.postMessage(null)}}else Ge=function(){b(q,0)};function jn(S){x=S,z||(z=!0,Ge())}function Sn(S,P){N=b(function(){S(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,jn(C))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var T=f;f=P;try{return S()}finally{f=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,P){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var T=f;f=S;try{return P()}finally{f=T}},e.unstable_scheduleCallback=function(S,P,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=T+X,S={id:m++,callback:P,priorityLevel:S,startTime:T,expirationTime:X,sortIndex:-1},T>$?(S.sortIndex=T,t(c,S),n(u)===null&&S===n(c)&&(k?(p(N),N=-1):k=!0,Sn(w,T-$))):(S.sortIndex=X,t(u,S),v||y||(v=!0,jn(C))),S},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(S){var P=f;return function(){var T=f;f=P;try{return S.apply(this,arguments)}finally{f=T}}}})(ys);xs.exports=ys;var Vc=xs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=_,be=Vc;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ws=new Set,Kn={};function Ut(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Kn[e]=t,e=0;e<t.length;e++)ws.add(t[e])}var lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),si=Object.prototype.hasOwnProperty,Kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qo={},ea={};function Yc(e){return si.call(ea,e)?!0:si.call(qo,e)?!1:Kc.test(e)?ea[e]=!0:(qo[e]=!0,!1)}function Gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xc(e,t,n,r){if(t===null||typeof t>"u"||Gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var lo=/[\-:]([a-z])/g;function io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lo,io);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lo,io);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lo,io);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function oo(e,t,n,r){var l=ae.hasOwnProperty(t)?ae[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xc(t,n,l,r)&&(n=null),r||l===null?Yc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),ao=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),ks=Symbol.for("react.provider"),js=Symbol.for("react.context"),so=Symbol.for("react.forward_ref"),ci=Symbol.for("react.suspense"),di=Symbol.for("react.suspense_list"),uo=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Ss=Symbol.for("react.offscreen"),ta=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ol;function Dn(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Rl=!1;function Il(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Zc(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Vt:return"Portal";case ui:return"Profiler";case ao:return"StrictMode";case ci:return"Suspense";case di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case js:return(e.displayName||"Context")+".Consumer";case ks:return(e._context.displayName||"Context")+".Provider";case so:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uo:return t=e.displayName||null,t!==null?t:pi(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return pi(e(t))}catch{}}return null}function Jc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(t);case 8:return t===ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ns(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qc(e){var t=Ns(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=qc(e))}function Cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ns(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fi(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function na(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bs(e,t){t=t.checked,t!=null&&oo(e,"checked",t,!1)}function hi(e,t){bs(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&mi(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mi(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function gi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function la(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Mn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Es(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ia(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,_s=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ed=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){ed.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Ls(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Ps(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ls(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var td=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(e,t){if(t){if(td[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,on=null,an=null;function oa(e){if(e=fr(e)){if(typeof ki!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Nl(t),ki(e.stateNode,e.type,t))}}function Ts(e){on?an?an.push(e):an=[e]:on=e}function Fs(){if(on){var e=on,t=an;if(an=on=null,oa(e),t)for(e=0;e<t.length;e++)oa(t[e])}}function Ds(e,t){return e(t)}function Ms(){}var Bl=!1;function As(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return Ds(e,t,n)}finally{Bl=!1,(on!==null||an!==null)&&(Ms(),Fs())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var ji=!1;if(lt)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){ji=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{ji=!1}function nd(e,t,n,r,l,o,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var In=!1,Gr=null,Xr=!1,Si=null,rd={onError:function(e){In=!0,Gr=e}};function ld(e,t,n,r,l,o,a,s,u){In=!1,Gr=null,nd.apply(rd,arguments)}function id(e,t,n,r,l,o,a,s,u){if(ld.apply(this,arguments),In){if(In){var c=Gr;In=!1,Gr=null}else throw Error(j(198));Xr||(Xr=!0,Si=c)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Os(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function aa(e){if($t(e)!==e)throw Error(j(188))}function od(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return aa(l),e;if(o===r)return aa(l),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Rs(e){return e=od(e),e!==null?Is(e):null}function Is(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Is(e);if(t!==null)return t;e=e.sibling}return null}var Bs=be.unstable_scheduleCallback,sa=be.unstable_cancelCallback,ad=be.unstable_shouldYield,sd=be.unstable_requestPaint,G=be.unstable_now,ud=be.unstable_getCurrentPriorityLevel,po=be.unstable_ImmediatePriority,Us=be.unstable_UserBlockingPriority,Zr=be.unstable_NormalPriority,cd=be.unstable_LowPriority,$s=be.unstable_IdlePriority,wl=null,Ke=null;function dd(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(wl,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:hd,pd=Math.log,fd=Math.LN2;function hd(e){return e>>>=0,e===0?32:31-(pd(e)/fd|0)|0}var wr=64,kr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=An(s):(o&=a,o!==0&&(r=An(o)))}else a=n&~l,a!==0?r=An(a):o!==0&&(r=An(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),l=1<<n,r|=e[n],t&=~l;return r}function md(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Be(o),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=md(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ni(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ws(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function vd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Be(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function fo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function Hs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vs,ho,Qs,Ks,Ys,Ci=!1,jr=[],gt=null,vt=null,xt=null,Xn=new Map,Zn=new Map,pt=[],xd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ua(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function En(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&ho(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function yd(e,t,n,r,l){switch(t){case"focusin":return gt=En(gt,e,t,n,r,l),!0;case"dragenter":return vt=En(vt,e,t,n,r,l),!0;case"mouseover":return xt=En(xt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Xn.set(o,En(Xn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Zn.set(o,En(Zn.get(o)||null,e,t,n,r,l)),!0}return!1}function Gs(e){var t=Pt(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Os(n),t!==null){e.blockedOn=t,Ys(e.priority,function(){Qs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wi=r,n.target.dispatchEvent(r),wi=null}else return t=fr(n),t!==null&&ho(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){Or(e)&&n.delete(t)}function wd(){Ci=!1,gt!==null&&Or(gt)&&(gt=null),vt!==null&&Or(vt)&&(vt=null),xt!==null&&Or(xt)&&(xt=null),Xn.forEach(ca),Zn.forEach(ca)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ci||(Ci=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,wd)))}function Jn(e){function t(l){return zn(l,e)}if(0<jr.length){zn(jr[0],e);for(var n=1;n<jr.length;n++){var r=jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&zn(gt,e),vt!==null&&zn(vt,e),xt!==null&&zn(xt,e),Xn.forEach(t),Zn.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)Gs(n),n.blockedOn===null&&pt.shift()}var sn=st.ReactCurrentBatchConfig,qr=!0;function kd(e,t,n,r){var l=O,o=sn.transition;sn.transition=null;try{O=1,mo(e,t,n,r)}finally{O=l,sn.transition=o}}function jd(e,t,n,r){var l=O,o=sn.transition;sn.transition=null;try{O=4,mo(e,t,n,r)}finally{O=l,sn.transition=o}}function mo(e,t,n,r){if(qr){var l=bi(e,t,n,r);if(l===null)Zl(e,t,r,el,n),ua(e,r);else if(yd(l,e,t,n,r))r.stopPropagation();else if(ua(e,r),t&4&&-1<xd.indexOf(e)){for(;l!==null;){var o=fr(l);if(o!==null&&Vs(o),o=bi(e,t,n,r),o===null&&Zl(e,t,r,el,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var el=null;function bi(e,t,n,r){if(el=null,e=co(r),e=Pt(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Os(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return el=e,null}function Xs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ud()){case po:return 1;case Us:return 4;case Zr:case cd:return 16;case $s:return 536870912;default:return 16}default:return 16}}var ht=null,go=null,Rr=null;function Zs(){if(Rr)return Rr;var e,t=go,n=t.length,r,l="value"in ht?ht.value:ht.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function da(){return!1}function ze(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Sr:da,this.isPropagationStopped=da,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=ze(wn),pr=Q({},wn,{view:0,detail:0}),Sd=ze(pr),$l,Wl,_n,kl=Q({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?($l=e.screenX-_n.screenX,Wl=e.screenY-_n.screenY):Wl=$l=0,_n=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Wl}}),pa=ze(kl),Nd=Q({},kl,{dataTransfer:0}),Cd=ze(Nd),bd=Q({},pr,{relatedTarget:0}),Hl=ze(bd),Ed=Q({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),zd=ze(Ed),_d=Q({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ld=ze(_d),Pd=Q({},wn,{data:0}),fa=ze(Pd),Td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dd[e])?!!t[e]:!1}function xo(){return Md}var Ad=Q({},pr,{key:function(e){if(e.key){var t=Td[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Od=ze(Ad),Rd=Q({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ha=ze(Rd),Id=Q({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),Bd=ze(Id),Ud=Q({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$d=ze(Ud),Wd=Q({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=ze(Wd),Vd=[9,13,27,32],yo=lt&&"CompositionEvent"in window,Bn=null;lt&&"documentMode"in document&&(Bn=document.documentMode);var Qd=lt&&"TextEvent"in window&&!Bn,Js=lt&&(!yo||Bn&&8<Bn&&11>=Bn),ma=" ",ga=!1;function qs(e,t){switch(e){case"keyup":return Vd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Kd(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(ga=!0,ma);case"textInput":return e=t.data,e===ma&&ga?null:e;default:return null}}function Yd(e,t){if(Kt)return e==="compositionend"||!yo&&qs(e,t)?(e=Zs(),Rr=go=ht=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Js&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function tu(e,t,n,r){Ts(r),t=tl(t,"onChange"),0<t.length&&(n=new vo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,qn=null;function Xd(e){pu(e,0)}function jl(e){var t=Xt(e);if(Cs(t))return e}function Zd(e,t){if(e==="change")return t}var nu=!1;if(lt){var Vl;if(lt){var Ql="oninput"in document;if(!Ql){var xa=document.createElement("div");xa.setAttribute("oninput","return;"),Ql=typeof xa.oninput=="function"}Vl=Ql}else Vl=!1;nu=Vl&&(!document.documentMode||9<document.documentMode)}function ya(){Un&&(Un.detachEvent("onpropertychange",ru),qn=Un=null)}function ru(e){if(e.propertyName==="value"&&jl(qn)){var t=[];tu(t,qn,e,co(e)),As(Xd,t)}}function Jd(e,t,n){e==="focusin"?(ya(),Un=t,qn=n,Un.attachEvent("onpropertychange",ru)):e==="focusout"&&ya()}function qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(qn)}function ep(e,t){if(e==="click")return jl(t)}function tp(e,t){if(e==="input"||e==="change")return jl(t)}function np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:np;function er(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!si.call(t,l)||!$e(e[l],t[l]))return!1}return!0}function wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ka(e,t){var n=wa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wa(n)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rp(e){var t=iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lu(n.ownerDocument.documentElement,n)){if(r!==null&&wo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ka(n,o);var a=ka(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lp=lt&&"documentMode"in document&&11>=document.documentMode,Yt=null,Ei=null,$n=null,zi=!1;function ja(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Yt==null||Yt!==Yr(r)||(r=Yt,"selectionStart"in r&&wo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&er($n,r)||($n=r,r=tl(Ei,"onSelect"),0<r.length&&(t=new vo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},Kl={},ou={};lt&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Sl(e){if(Kl[e])return Kl[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Kl[e]=t[n];return e}var au=Sl("animationend"),su=Sl("animationiteration"),uu=Sl("animationstart"),cu=Sl("transitionend"),du=new Map,Sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){du.set(e,t),Ut(t,[e])}for(var Yl=0;Yl<Sa.length;Yl++){var Gl=Sa[Yl],ip=Gl.toLowerCase(),op=Gl[0].toUpperCase()+Gl.slice(1);bt(ip,"on"+op)}bt(au,"onAnimationEnd");bt(su,"onAnimationIteration");bt(uu,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(cu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function Na(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,id(r,t,void 0,e),e.currentTarget=null}function pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;Na(l,s,c),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;Na(l,s,c),o=u}}}if(Xr)throw e=Si,Xr=!1,Si=null,e}function I(e,t){var n=t[Fi];n===void 0&&(n=t[Fi]=new Set);var r=e+"__bubble";n.has(r)||(fu(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),fu(n,e,r,t)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Cr]){e[Cr]=!0,ws.forEach(function(n){n!=="selectionchange"&&(ap.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cr]||(t[Cr]=!0,Xl("selectionchange",!1,t))}}function fu(e,t,n,r){switch(Xs(t)){case 1:var l=kd;break;case 4:l=jd;break;default:l=mo}n=l.bind(null,t,n,e),l=void 0,!ji||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=Pt(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}As(function(){var c=o,m=co(n),g=[];e:{var f=du.get(e);if(f!==void 0){var y=vo,v=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":y=Od;break;case"focusin":v="focus",y=Hl;break;case"focusout":v="blur",y=Hl;break;case"beforeblur":case"afterblur":y=Hl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Bd;break;case au:case su:case uu:y=zd;break;case cu:y=$d;break;case"scroll":y=Sd;break;case"wheel":y=Hd;break;case"copy":case"cut":case"paste":y=Ld;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ha}var k=(t&4)!==0,b=!k&&e==="scroll",p=k?f!==null?f+"Capture":null:f;k=[];for(var d=c,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=Gn(d,p),w!=null&&k.push(nr(d,w,h)))),b)break;d=d.return}0<k.length&&(f=new y(f,v,null,n,m),g.push({event:f,listeners:k}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==wi&&(v=n.relatedTarget||n.fromElement)&&(Pt(v)||v[it]))break e;if((y||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?Pt(v):null,v!==null&&(b=$t(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(k=pa,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=ha,w="onPointerLeave",p="onPointerEnter",d="pointer"),b=y==null?f:Xt(y),h=v==null?f:Xt(v),f=new k(w,d+"leave",y,n,m),f.target=b,f.relatedTarget=h,w=null,Pt(m)===c&&(k=new k(p,d+"enter",v,n,m),k.target=h,k.relatedTarget=b,w=k),b=w,y&&v)t:{for(k=y,p=v,d=0,h=k;h;h=Ht(h))d++;for(h=0,w=p;w;w=Ht(w))h++;for(;0<d-h;)k=Ht(k),d--;for(;0<h-d;)p=Ht(p),h--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=Ht(k),p=Ht(p)}k=null}else k=null;y!==null&&Ca(g,f,y,k,!1),v!==null&&b!==null&&Ca(g,b,v,k,!0)}}e:{if(f=c?Xt(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var C=Zd;else if(va(f))if(nu)C=tp;else{C=qd;var z=Jd}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=ep);if(C&&(C=C(e,c))){tu(g,C,n,m);break e}z&&z(e,f,c),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&mi(f,"number",f.value)}switch(z=c?Xt(c):window,e){case"focusin":(va(z)||z.contentEditable==="true")&&(Yt=z,Ei=c,$n=null);break;case"focusout":$n=Ei=Yt=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,ja(g,n,m);break;case"selectionchange":if(lp)break;case"keydown":case"keyup":ja(g,n,m)}var x;if(yo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Kt?qs(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Js&&n.locale!=="ko"&&(Kt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Kt&&(x=Zs()):(ht=m,go="value"in ht?ht.value:ht.textContent,Kt=!0)),z=tl(c,N),0<z.length&&(N=new fa(N,e,null,n,m),g.push({event:N,listeners:z}),x?N.data=x:(x=eu(n),x!==null&&(N.data=x)))),(x=Qd?Kd(e,n):Yd(e,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(m=new fa("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:c}),m.data=x))}pu(g,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Gn(e,n),o!=null&&r.unshift(nr(e,o,l)),o=Gn(e,t),o!=null&&r.push(nr(e,o,l))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ca(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Gn(n,o),u!=null&&a.unshift(nr(n,u,s))):l||(u=Gn(n,o),u!=null&&a.push(nr(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var sp=/\r\n?/g,up=/\u0000|\uFFFD/g;function ba(e){return(typeof e=="string"?e:""+e).replace(sp,`
`).replace(up,"")}function br(e,t,n){if(t=ba(t),ba(e)!==t&&n)throw Error(j(425))}function nl(){}var _i=null,Li=null;function Pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,cp=typeof clearTimeout=="function"?clearTimeout:void 0,Ea=typeof Promise=="function"?Promise:void 0,dp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ea<"u"?function(e){return Ea.resolve(null).then(e).catch(pp)}:Ti;function pp(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Jn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Jn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function za(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+kn,rr="__reactProps$"+kn,it="__reactContainer$"+kn,Fi="__reactEvents$"+kn,fp="__reactListeners$"+kn,hp="__reactHandles$"+kn;function Pt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=za(e);e!==null;){if(n=e[Qe])return n;e=za(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Qe]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Nl(e){return e[rr]||null}var Di=[],Zt=-1;function Et(e){return{current:e}}function B(e){0>Zt||(e.current=Di[Zt],Di[Zt]=null,Zt--)}function R(e,t){Zt++,Di[Zt]=e.current,e.current=t}var Ct={},de=Et(Ct),ye=Et(!1),At=Ct;function fn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function rl(){B(ye),B(de)}function _a(e,t,n){if(de.current!==Ct)throw Error(j(168));R(de,t),R(ye,n)}function hu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(j(108,Jc(e)||"Unknown",l));return Q({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,At=de.current,R(de,e),R(ye,ye.current),!0}function La(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=hu(e,t,At),r.__reactInternalMemoizedMergedChildContext=e,B(ye),B(de),R(de,e)):B(ye),R(ye,n)}var qe=null,Cl=!1,ql=!1;function mu(e){qe===null?qe=[e]:qe.push(e)}function mp(e){Cl=!0,mu(e)}function zt(){if(!ql&&qe!==null){ql=!0;var e=0,t=O;try{var n=qe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Cl=!1}catch(l){throw qe!==null&&(qe=qe.slice(e+1)),Bs(po,zt),l}finally{O=t,ql=!1}}return null}var Jt=[],qt=0,il=null,ol=0,_e=[],Le=0,Ot=null,et=1,tt="";function _t(e,t){Jt[qt++]=ol,Jt[qt++]=il,il=e,ol=t}function gu(e,t,n){_e[Le++]=et,_e[Le++]=tt,_e[Le++]=Ot,Ot=e;var r=et;e=tt;var l=32-Be(r)-1;r&=~(1<<l),n+=1;var o=32-Be(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,et=1<<32-Be(t)+l|n<<l|r,tt=o+e}else et=1<<o|n<<l|r,tt=e}function ko(e){e.return!==null&&(_t(e,1),gu(e,1,0))}function jo(e){for(;e===il;)il=Jt[--qt],Jt[qt]=null,ol=Jt[--qt],Jt[qt]=null;for(;e===Ot;)Ot=_e[--Le],_e[Le]=null,tt=_e[--Le],_e[Le]=null,et=_e[--Le],_e[Le]=null}var Ce=null,Ne=null,U=!1,Ie=null;function vu(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,Ne=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ai(e){if(U){var t=Ne;if(t){var n=t;if(!Pa(e,t)){if(Mi(e))throw Error(j(418));t=yt(n.nextSibling);var r=Ce;t&&Pa(e,t)?vu(r,n):(e.flags=e.flags&-4097|2,U=!1,Ce=e)}}else{if(Mi(e))throw Error(j(418));e.flags=e.flags&-4097|2,U=!1,Ce=e}}}function Ta(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Er(e){if(e!==Ce)return!1;if(!U)return Ta(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pi(e.type,e.memoizedProps)),t&&(t=Ne)){if(Mi(e))throw xu(),Error(j(418));for(;t;)vu(e,t),t=yt(t.nextSibling)}if(Ta(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Ce?yt(e.stateNode.nextSibling):null;return!0}function xu(){for(var e=Ne;e;)e=yt(e.nextSibling)}function hn(){Ne=Ce=null,U=!1}function So(e){Ie===null?Ie=[e]:Ie.push(e)}var gp=st.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fa(e){var t=e._init;return t(e._payload)}function yu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=St(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,h,w){return d===null||d.tag!==6?(d=oi(h,p.mode,w),d.return=p,d):(d=l(d,h),d.return=p,d)}function u(p,d,h,w){var C=h.type;return C===Qt?m(p,d,h.props.children,w,h.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&Fa(C)===d.type)?(w=l(d,h.props),w.ref=Ln(p,d,h),w.return=p,w):(w=Qr(h.type,h.key,h.props,null,p.mode,w),w.ref=Ln(p,d,h),w.return=p,w)}function c(p,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ai(h,p.mode,w),d.return=p,d):(d=l(d,h.children||[]),d.return=p,d)}function m(p,d,h,w,C){return d===null||d.tag!==7?(d=Mt(h,p.mode,w,C),d.return=p,d):(d=l(d,h),d.return=p,d)}function g(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=oi(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vr:return h=Qr(d.type,d.key,d.props,null,p.mode,h),h.ref=Ln(p,null,d),h.return=p,h;case Vt:return d=ai(d,p.mode,h),d.return=p,d;case ct:var w=d._init;return g(p,w(d._payload),h)}if(Mn(d)||Cn(d))return d=Mt(d,p.mode,h,null),d.return=p,d;zr(p,d)}return null}function f(p,d,h,w){var C=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(p,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vr:return h.key===C?u(p,d,h,w):null;case Vt:return h.key===C?c(p,d,h,w):null;case ct:return C=h._init,f(p,d,C(h._payload),w)}if(Mn(h)||Cn(h))return C!==null?null:m(p,d,h,w,null);zr(p,h)}return null}function y(p,d,h,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,s(d,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vr:return p=p.get(w.key===null?h:w.key)||null,u(d,p,w,C);case Vt:return p=p.get(w.key===null?h:w.key)||null,c(d,p,w,C);case ct:var z=w._init;return y(p,d,h,z(w._payload),C)}if(Mn(w)||Cn(w))return p=p.get(h)||null,m(d,p,w,C,null);zr(d,w)}return null}function v(p,d,h,w){for(var C=null,z=null,x=d,N=d=0,M=null;x!==null&&N<h.length;N++){x.index>N?(M=x,x=null):M=x.sibling;var F=f(p,x,h[N],w);if(F===null){x===null&&(x=M);break}e&&x&&F.alternate===null&&t(p,x),d=o(F,d,N),z===null?C=F:z.sibling=F,z=F,x=M}if(N===h.length)return n(p,x),U&&_t(p,N),C;if(x===null){for(;N<h.length;N++)x=g(p,h[N],w),x!==null&&(d=o(x,d,N),z===null?C=x:z.sibling=x,z=x);return U&&_t(p,N),C}for(x=r(p,x);N<h.length;N++)M=y(x,p,N,h[N],w),M!==null&&(e&&M.alternate!==null&&x.delete(M.key===null?N:M.key),d=o(M,d,N),z===null?C=M:z.sibling=M,z=M);return e&&x.forEach(function(pe){return t(p,pe)}),U&&_t(p,N),C}function k(p,d,h,w){var C=Cn(h);if(typeof C!="function")throw Error(j(150));if(h=C.call(h),h==null)throw Error(j(151));for(var z=C=null,x=d,N=d=0,M=null,F=h.next();x!==null&&!F.done;N++,F=h.next()){x.index>N?(M=x,x=null):M=x.sibling;var pe=f(p,x,F.value,w);if(pe===null){x===null&&(x=M);break}e&&x&&pe.alternate===null&&t(p,x),d=o(pe,d,N),z===null?C=pe:z.sibling=pe,z=pe,x=M}if(F.done)return n(p,x),U&&_t(p,N),C;if(x===null){for(;!F.done;N++,F=h.next())F=g(p,F.value,w),F!==null&&(d=o(F,d,N),z===null?C=F:z.sibling=F,z=F);return U&&_t(p,N),C}for(x=r(p,x);!F.done;N++,F=h.next())F=y(x,p,N,F.value,w),F!==null&&(e&&F.alternate!==null&&x.delete(F.key===null?N:F.key),d=o(F,d,N),z===null?C=F:z.sibling=F,z=F);return e&&x.forEach(function(q){return t(p,q)}),U&&_t(p,N),C}function b(p,d,h,w){if(typeof h=="object"&&h!==null&&h.type===Qt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case vr:e:{for(var C=h.key,z=d;z!==null;){if(z.key===C){if(C=h.type,C===Qt){if(z.tag===7){n(p,z.sibling),d=l(z,h.props.children),d.return=p,p=d;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&Fa(C)===z.type){n(p,z.sibling),d=l(z,h.props),d.ref=Ln(p,z,h),d.return=p,p=d;break e}n(p,z);break}else t(p,z);z=z.sibling}h.type===Qt?(d=Mt(h.props.children,p.mode,w,h.key),d.return=p,p=d):(w=Qr(h.type,h.key,h.props,null,p.mode,w),w.ref=Ln(p,d,h),w.return=p,p=w)}return a(p);case Vt:e:{for(z=h.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=l(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=ai(h,p.mode,w),d.return=p,p=d}return a(p);case ct:return z=h._init,b(p,d,z(h._payload),w)}if(Mn(h))return v(p,d,h,w);if(Cn(h))return k(p,d,h,w);zr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,h),d.return=p,p=d):(n(p,d),d=oi(h,p.mode,w),d.return=p,p=d),a(p)):n(p,d)}return b}var mn=yu(!0),wu=yu(!1),al=Et(null),sl=null,en=null,No=null;function Co(){No=en=sl=null}function bo(e){var t=al.current;B(al),e._currentValue=t}function Oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){sl=e,No=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(sl===null)throw Error(j(308));en=e,sl.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Tt=null;function Eo(e){Tt===null?Tt=[e]:Tt.push(e)}function ku(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Eo(t)):(n.next=l.next,l.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ju(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,ot(e,n)}return l=r.interleaved,l===null?(t.next=t,Eo(r)):(t.next=l.next,l.next=t),r.interleaved=t,ot(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fo(e,n)}}function Da(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ul(e,t,n,r){var l=e.updateQueue;dt=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;a=0,m=c=u=null,s=o;do{var f=s.lane,y=s.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(f=t,y=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){g=v.call(y,g,f);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,f=typeof v=="function"?v.call(y,g,f):v,f==null)break e;g=Q({},g,f);break e;case 2:dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=l.effects,f===null?l.effects=[s]:f.push(s))}else y={eventTime:y,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=y,u=g):m=m.next=y,a|=f;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;f=s,s=f.next,f.next=null,l.lastBaseUpdate=f,l.shared.pending=null}}while(!0);if(m===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);It|=a,e.lanes=a,e.memoizedState=g}}function Ma(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(j(191,l));l.call(r)}}}var hr={},Ye=Et(hr),lr=Et(hr),ir=Et(hr);function Ft(e){if(e===hr)throw Error(j(174));return e}function _o(e,t){switch(R(ir,t),R(lr,e),R(Ye,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vi(t,e)}B(Ye),R(Ye,t)}function gn(){B(Ye),B(lr),B(ir)}function Su(e){Ft(ir.current);var t=Ft(Ye.current),n=vi(t,e.type);t!==n&&(R(lr,e),R(Ye,n))}function Lo(e){lr.current===e&&(B(Ye),B(lr))}var H=Et(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ei=[];function Po(){for(var e=0;e<ei.length;e++)ei[e]._workInProgressVersionPrimary=null;ei.length=0}var Ur=st.ReactCurrentDispatcher,ti=st.ReactCurrentBatchConfig,Rt=0,V=null,ee=null,ne=null,dl=!1,Wn=!1,or=0,vp=0;function se(){throw Error(j(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,l,o){if(Rt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?kp:jp,e=n(r,l),Wn){o=0;do{if(Wn=!1,or=0,25<=o)throw Error(j(301));o+=1,ne=ee=null,t.updateQueue=null,Ur.current=Sp,e=n(r,l)}while(Wn)}if(Ur.current=pl,t=ee!==null&&ee.next!==null,Rt=0,ne=ee=V=null,dl=!1,t)throw Error(j(300));return e}function Do(){var e=or!==0;return or=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?V.memoizedState=ne=e:ne=ne.next=e,ne}function De(){if(ee===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?V.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(j(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?V.memoizedState=ne=e:ne=ne.next=e}return ne}function ar(e,t){return typeof t=="function"?t(e):t}function ni(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ee,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=a=null,u=null,c=o;do{var m=c.lane;if((Rt&m)===m)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,V.lanes|=m,It|=m}c=c.next}while(c!==null&&c!==o);u===null?a=r:u.next=s,$e(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,V.lanes|=o,It|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ri(e){var t=De(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);$e(o,t.memoizedState)||(xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Nu(){}function Cu(e,t){var n=V,r=De(),l=t(),o=!$e(r.memoizedState,l);if(o&&(r.memoizedState=l,xe=!0),r=r.queue,Mo(zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,sr(9,Eu.bind(null,n,r,l,t),void 0,null),re===null)throw Error(j(349));Rt&30||bu(n,t,l)}return l}function bu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eu(e,t,n,r){t.value=n,t.getSnapshot=r,_u(t)&&Lu(e)}function zu(e,t,n){return n(function(){_u(t)&&Lu(e)})}function _u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Lu(e){var t=ot(e,1);t!==null&&Ue(t,e,1,-1)}function Aa(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:e},t.queue=e,e=e.dispatch=wp.bind(null,V,e),[t.memoizedState,e]}function sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pu(){return De().memoizedState}function $r(e,t,n,r){var l=Ve();V.flags|=e,l.memoizedState=sr(1|t,n,void 0,r===void 0?null:r)}function bl(e,t,n,r){var l=De();r=r===void 0?null:r;var o=void 0;if(ee!==null){var a=ee.memoizedState;if(o=a.destroy,r!==null&&To(r,a.deps)){l.memoizedState=sr(t,n,o,r);return}}V.flags|=e,l.memoizedState=sr(1|t,n,o,r)}function Oa(e,t){return $r(8390656,8,e,t)}function Mo(e,t){return bl(2048,8,e,t)}function Tu(e,t){return bl(4,2,e,t)}function Fu(e,t){return bl(4,4,e,t)}function Du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,Du.bind(null,t,e),n)}function Ao(){}function Au(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ou(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&To(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ru(e,t,n){return Rt&21?($e(n,t)||(n=Ws(),V.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function xp(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=ti.transition;ti.transition={};try{e(!1),t()}finally{O=n,ti.transition=r}}function Iu(){return De().memoizedState}function yp(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))Uu(t,n);else if(n=ku(e,t,n,r),n!==null){var l=he();Ue(n,e,r,l),$u(n,t,r)}}function wp(e,t,n){var r=jt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Uu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(l.hasEagerState=!0,l.eagerState=s,$e(s,a)){var u=t.interleaved;u===null?(l.next=l,Eo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=ku(e,t,l,r),n!==null&&(l=he(),Ue(n,e,r,l),$u(n,t,r))}}function Bu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Uu(e,t){Wn=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $u(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fo(e,n)}}var pl={readContext:Fe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},kp={readContext:Fe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Oa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$r(4194308,4,Du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){return $r(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:Aa,useDebugValue:Ao,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=Aa(!1),t=e[0];return e=xp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Ve();if(U){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),re===null)throw Error(j(349));Rt&30||bu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Oa(zu.bind(null,r,o,e),[e]),r.flags|=2048,sr(9,Eu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ve(),t=re.identifierPrefix;if(U){var n=tt,r=et;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jp={readContext:Fe,useCallback:Au,useContext:Fe,useEffect:Mo,useImperativeHandle:Mu,useInsertionEffect:Tu,useLayoutEffect:Fu,useMemo:Ou,useReducer:ni,useRef:Pu,useState:function(){return ni(ar)},useDebugValue:Ao,useDeferredValue:function(e){var t=De();return Ru(t,ee.memoizedState,e)},useTransition:function(){var e=ni(ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Iu,unstable_isNewReconciler:!1},Sp={readContext:Fe,useCallback:Au,useContext:Fe,useEffect:Mo,useImperativeHandle:Mu,useInsertionEffect:Tu,useLayoutEffect:Fu,useMemo:Ou,useReducer:ri,useRef:Pu,useState:function(){return ri(ar)},useDebugValue:Ao,useDeferredValue:function(e){var t=De();return ee===null?t.memoizedState=e:Ru(t,ee.memoizedState,e)},useTransition:function(){var e=ri(ar)[0],t=De().memoizedState;return[e,t]},useMutableSource:Nu,useSyncExternalStore:Cu,useId:Iu,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var El={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),l=jt(e),o=nt(r,l);o.payload=t,n!=null&&(o.callback=n),t=wt(e,o,l),t!==null&&(Ue(t,e,l,r),Br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),l=jt(e),o=nt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=wt(e,o,l),t!==null&&(Ue(t,e,l,r),Br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=jt(e),l=nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=wt(e,l,r),t!==null&&(Ue(t,e,r,n),Br(t,e,r))}};function Ra(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(l,o):!0}function Wu(e,t,n){var r=!1,l=Ct,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(l=we(t)?At:de.current,r=t.contextTypes,o=(r=r!=null)?fn(e,l):Ct),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=El,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ia(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&El.enqueueReplaceState(t,t.state,null)}function Ii(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},zo(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Fe(o):(o=we(t)?At:de.current,l.context=fn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ri(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&El.enqueueReplaceState(l,l.state,null),ul(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=Zc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Np=typeof WeakMap=="function"?WeakMap:Map;function Hu(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hl||(hl=!0,Xi=r),Bi(e,t)},n}function Vu(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Bi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Bi(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Np;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function Ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $a(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Cp=st.ReactCurrentOwner,xe=!1;function fe(e,t,n,r){t.child=e===null?wu(t,null,n,r):mn(t,e.child,n,r)}function Wa(e,t,n,r,l){n=n.render;var o=t.ref;return un(t,l),r=Fo(e,t,n,r,o,l),n=Do(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(U&&n&&ko(t),t.flags|=1,fe(e,t,r,l),t.child)}function Ha(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ho(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Qu(e,t,o,r,l)):(e=Qr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(a,r)&&e.ref===t.ref)return at(e,t,l)}return t.flags|=1,e=St(o,r),e.ref=t.ref,e.return=t,t.child=e}function Qu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,at(e,t,l)}return Ui(e,t,n,r,l)}function Ku(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(nn,Se),Se|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(nn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,R(nn,Se),Se|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,R(nn,Se),Se|=r;return fe(e,t,l,n),t.child}function Yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ui(e,t,n,r,l){var o=we(n)?At:de.current;return o=fn(t,o),un(t,l),n=Fo(e,t,n,r,o,l),r=Do(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,at(e,t,l)):(U&&r&&ko(t),t.flags|=1,fe(e,t,n,l),t.child)}function Va(e,t,n,r,l){if(we(n)){var o=!0;ll(t)}else o=!1;if(un(t,l),t.stateNode===null)Wr(e,t),Wu(t,n,r),Ii(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=we(n)?At:de.current,c=fn(t,c));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Ia(t,a,r,c),dt=!1;var f=t.memoizedState;a.state=f,ul(t,r,a,l),u=t.memoizedState,s!==r||f!==u||ye.current||dt?(typeof m=="function"&&(Ri(t,n,m,r),u=t.memoizedState),(s=dt||Ra(t,n,s,r,f,u,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ju(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Oe(t.type,s),a.props=c,g=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=we(n)?At:de.current,u=fn(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||f!==u)&&Ia(t,a,r,u),dt=!1,f=t.memoizedState,a.state=f,ul(t,r,a,l);var v=t.memoizedState;s!==g||f!==v||ye.current||dt?(typeof y=="function"&&(Ri(t,n,y,r),v=t.memoizedState),(c=dt||Ra(t,n,c,r,f,v,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,o,l)}function $i(e,t,n,r,l,o){Yu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&La(t,n,!1),at(e,t,o);r=t.stateNode,Cp.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=mn(t,e.child,null,o),t.child=mn(t,null,s,o)):fe(e,t,s,o),t.memoizedState=r.state,l&&La(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?_a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_a(e,t.context,!1),_o(e,t.containerInfo)}function Qa(e,t,n,r,l){return hn(),So(l),t.flags|=256,fe(e,t,n,r),t.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,t,n){var r=t.pendingProps,l=H.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),R(H,l&1),e===null)return Ai(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ll(a,r,0,null),e=Mt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Hi(n),t.memoizedState=Wi,e):Oo(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return bp(e,t,a,r,s,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=St(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=St(s,o):(o=Mt(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Hi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Wi,r}return o=e.child,e=o.sibling,r=St(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Oo(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&So(r),mn(t,e.child,null,n),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bp(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=li(Error(j(422))),_r(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ll({mode:"visible",children:r.children},l,0,null),o=Mt(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mn(t,e.child,null,a),t.child.memoizedState=Hi(a),t.memoizedState=Wi,o);if(!(t.mode&1))return _r(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(j(419)),r=li(o,r,void 0),_r(e,t,a,r)}if(s=(a&e.childLanes)!==0,xe||s){if(r=re,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,ot(e,l),Ue(r,e,l,-1))}return Wo(),r=li(Error(j(421))),_r(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ip.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ne=yt(l.nextSibling),Ce=t,U=!0,Ie=null,e!==null&&(_e[Le++]=et,_e[Le++]=tt,_e[Le++]=Ot,et=e.id,tt=e.overflow,Ot=t),t=Oo(t,r.children),t.flags|=4096,t)}function Ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oi(e.return,t,n)}function ii(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Zu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(fe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ka(e,n,t);else if(e.tag===19)Ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ii(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ii(t,!0,n,null,o);break;case"together":ii(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function at(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:Gu(t),hn();break;case 5:Su(t);break;case 1:we(t.type)&&ll(t);break;case 4:_o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;R(al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(R(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?Xu(e,t,n):(R(H,H.current&1),e=at(e,t,n),e!==null?e.sibling:null);R(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),R(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Ku(e,t,n)}return at(e,t,n)}var Ju,Vi,qu,ec;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};qu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ft(Ye.current);var o=null;switch(n){case"input":l=fi(e,l),r=fi(e,r),o=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":l=gi(e,l),r=gi(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nl)}xi(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Kn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&I("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};ec=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zp(e,t,n){var r=t.pendingProps;switch(jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&rl(),ue(t),null;case 3:return r=t.stateNode,gn(),B(ye),B(de),Po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(qi(Ie),Ie=null))),Vi(e,t),ue(t),null;case 5:Lo(t);var l=Ft(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)qu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ue(t),null}if(e=Ft(Ye.current),Er(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qe]=t,r[rr]=o,e=(t.mode&1)!==0,n){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(l=0;l<On.length;l++)I(On[l],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":na(r,o),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},I("invalid",r);break;case"textarea":la(r,o),I("invalid",r)}xi(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&br(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&br(r.textContent,s,e),l=["children",""+s]):Kn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&I("scroll",r)}switch(n){case"input":xr(r),ra(r,o,!0);break;case"textarea":xr(r),ia(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=nl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qe]=t,e[rr]=r,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(a=yi(n,r),n){case"dialog":I("cancel",e),I("close",e),l=r;break;case"iframe":case"object":case"embed":I("load",e),l=r;break;case"video":case"audio":for(l=0;l<On.length;l++)I(On[l],e);l=r;break;case"source":I("error",e),l=r;break;case"img":case"image":case"link":I("error",e),I("load",e),l=r;break;case"details":I("toggle",e),l=r;break;case"input":na(e,r),l=fi(e,r),I("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),I("invalid",e);break;case"textarea":la(e,r),l=gi(e,r),I("invalid",e);break;default:l=r}xi(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ps(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_s(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yn(e,u):typeof u=="number"&&Yn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&I("scroll",e):u!=null&&oo(e,o,u,a))}switch(n){case"input":xr(e),ra(e,r,!1);break;case"textarea":xr(e),ia(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)ec(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=Ft(ir.current),Ft(Ye.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&br(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ue(t),null;case 13:if(B(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Ne!==null&&t.mode&1&&!(t.flags&128))xu(),hn(),t.flags|=98560,o=!1;else if(o=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[Qe]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Ie!==null&&(qi(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?te===0&&(te=3):Wo())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return gn(),Vi(e,t),e===null&&tr(t.stateNode.containerInfo),ue(t),null;case 10:return bo(t.type._context),ue(t),null;case 17:return we(t.type)&&rl(),ue(t),null;case 19:if(B(H),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Pn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=cl(e),a!==null){for(t.flags|=128,Pn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>xn&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304)}else{if(!r)if(e=cl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!U)return ue(t),null}else 2*G()-o.renderingStartTime>xn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,n=H.current,R(H,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return $o(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function _p(e,t){switch(jo(t),t.tag){case 1:return we(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),B(ye),B(de),Po(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lo(t),null;case 13:if(B(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(H),null;case 4:return gn(),null;case 10:return bo(t.type._context),null;case 22:case 23:return $o(),null;case 24:return null;default:return null}}var Lr=!1,ce=!1,Lp=typeof WeakSet=="function"?WeakSet:Set,E=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Qi(e,t,n){try{n()}catch(r){K(e,t,r)}}var Ya=!1;function Pp(e,t){if(_i=qr,e=iu(),wo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,m=0,g=e,f=null;t:for(;;){for(var y;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)f=g,g=y;for(;;){if(g===e)break t;if(f===n&&++c===l&&(s=a),f===o&&++m===r&&(u=a),(y=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Li={focusedElem:e,selectionRange:n},qr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,b=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Oe(t.type,k),b);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return v=Ya,Ya=!1,v}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Qi(t,n,o)}l=l.next}while(l!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tc(e){var t=e.alternate;t!==null&&(e.alternate=null,tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[rr],delete t[Fi],delete t[fp],delete t[hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nc(e){return e.tag===5||e.tag===3||e.tag===4}function Ga(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nl));else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}function Gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gi(e,t,n),e=e.sibling;e!==null;)Gi(e,t,n),e=e.sibling}var ie=null,Re=!1;function ut(e,t,n){for(n=n.child;n!==null;)rc(e,t,n),n=n.sibling}function rc(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:ce||tn(n,t);case 6:var r=ie,l=Re;ie=null,ut(e,t,n),ie=r,Re=l,ie!==null&&(Re?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Re?(e=ie,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),Jn(e)):Jl(ie,n.stateNode));break;case 4:r=ie,l=Re,ie=n.stateNode.containerInfo,Re=!0,ut(e,t,n),ie=r,Re=l;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Qi(n,t,a),l=l.next}while(l!==r)}ut(e,t,n);break;case 1:if(!ce&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){K(n,t,s)}ut(e,t,n);break;case 21:ut(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,ut(e,t,n),ce=r):ut(e,t,n);break;default:ut(e,t,n)}}function Xa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lp),t.forEach(function(r){var l=Bp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Re=!1;break e;case 3:ie=s.stateNode.containerInfo,Re=!0;break e;case 4:ie=s.stateNode.containerInfo,Re=!0;break e}s=s.return}if(ie===null)throw Error(j(160));rc(o,a,l),ie=null,Re=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){K(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),He(e),r&4){try{Hn(3,e,e.return),zl(3,e)}catch(k){K(e,e.return,k)}try{Hn(5,e,e.return)}catch(k){K(e,e.return,k)}}break;case 1:Ae(t,e),He(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Ae(t,e),He(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var l=e.stateNode;try{Yn(l,"")}catch(k){K(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&bs(l,o),yi(s,a);var c=yi(s,o);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?Ps(l,g):m==="dangerouslySetInnerHTML"?_s(l,g):m==="children"?Yn(l,g):oo(l,m,g,c)}switch(s){case"input":hi(l,o);break;case"textarea":Es(l,o);break;case"select":var f=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ln(l,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?ln(l,!!o.multiple,o.defaultValue,!0):ln(l,!!o.multiple,o.multiple?[]:"",!1))}l[rr]=o}catch(k){K(e,e.return,k)}}break;case 6:if(Ae(t,e),He(e),r&4){if(e.stateNode===null)throw Error(j(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(k){K(e,e.return,k)}}break;case 3:if(Ae(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jn(t.containerInfo)}catch(k){K(e,e.return,k)}break;case 4:Ae(t,e),He(e);break;case 13:Ae(t,e),He(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Bo=G())),r&4&&Xa(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(c=ce)||m,Ae(t,e),ce=c):Ae(t,e),He(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(g=E=m;E!==null;){switch(f=E,y=f.child,f.tag){case 0:case 11:case 14:case 15:Hn(4,f,f.return);break;case 1:tn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){K(r,n,k)}}break;case 5:tn(f,f.return);break;case 22:if(f.memoizedState!==null){Ja(g);continue}}y!==null?(y.return=f,E=y):Ja(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{l=g.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ls("display",a))}catch(k){K(e,e.return,k)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(k){K(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ae(t,e),He(e),r&4&&Xa(e);break;case 21:break;default:Ae(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nc(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Yn(l,""),r.flags&=-33);var o=Ga(e);Gi(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ga(e);Yi(e,s,a);break;default:throw Error(j(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tp(e,t,n){E=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Lr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ce;s=Lr;var c=ce;if(Lr=a,(ce=u)&&!c)for(E=l;E!==null;)a=E,u=a.child,a.tag===22&&a.memoizedState!==null?qa(l):u!==null?(u.return=a,E=u):qa(l);for(;o!==null;)E=o,ic(o),o=o.sibling;E=l,Lr=s,ce=c}Za(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,E=o):Za(e)}}function Za(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ma(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ma(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Jn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ce||t.flags&512&&Ki(t)}catch(f){K(t,t.return,f)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Ja(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function qa(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){K(t,l,u)}}var o=t.return;try{Ki(t)}catch(u){K(t,o,u)}break;case 5:var a=t.return;try{Ki(t)}catch(u){K(t,a,u)}}}catch(u){K(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Fp=Math.ceil,fl=st.ReactCurrentDispatcher,Ro=st.ReactCurrentOwner,Te=st.ReactCurrentBatchConfig,A=0,re=null,J=null,oe=0,Se=0,nn=Et(0),te=0,ur=null,It=0,_l=0,Io=0,Vn=null,ve=null,Bo=0,xn=1/0,Je=null,hl=!1,Xi=null,kt=null,Pr=!1,mt=null,ml=0,Qn=0,Zi=null,Hr=-1,Vr=0;function he(){return A&6?G():Hr!==-1?Hr:Hr=G()}function jt(e){return e.mode&1?A&2&&oe!==0?oe&-oe:gp.transition!==null?(Vr===0&&(Vr=Ws()),Vr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Xs(e.type)),e):1}function Ue(e,t,n,r){if(50<Qn)throw Qn=0,Zi=null,Error(j(185));dr(e,n,r),(!(A&2)||e!==re)&&(e===re&&(!(A&2)&&(_l|=n),te===4&&ft(e,oe)),ke(e,r),n===1&&A===0&&!(t.mode&1)&&(xn=G()+500,Cl&&zt()))}function ke(e,t){var n=e.callbackNode;gd(e,t);var r=Jr(e,e===re?oe:0);if(r===0)n!==null&&sa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sa(n),t===1)e.tag===0?mp(es.bind(null,e)):mu(es.bind(null,e)),dp(function(){!(A&6)&&zt()}),n=null;else{switch(Hs(r)){case 1:n=po;break;case 4:n=Us;break;case 16:n=Zr;break;case 536870912:n=$s;break;default:n=Zr}n=fc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Hr=-1,Vr=0,A&6)throw Error(j(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Jr(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gl(e,r);else{t=r;var l=A;A|=2;var o=sc();(re!==e||oe!==t)&&(Je=null,xn=G()+500,Dt(e,t));do try{Ap();break}catch(s){ac(e,s)}while(!0);Co(),fl.current=o,A=l,J!==null?t=0:(re=null,oe=0,t=te)}if(t!==0){if(t===2&&(l=Ni(e),l!==0&&(r=l,t=Ji(e,l))),t===1)throw n=ur,Dt(e,0),ft(e,r),ke(e,G()),n;if(t===6)ft(e,r);else{if(l=e.current.alternate,!(r&30)&&!Dp(l)&&(t=gl(e,r),t===2&&(o=Ni(e),o!==0&&(r=o,t=Ji(e,o))),t===1))throw n=ur,Dt(e,0),ft(e,r),ke(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Lt(e,ve,Je);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=Bo+500-G(),10<t)){if(Jr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ti(Lt.bind(null,e,ve,Je),t);break}Lt(e,ve,Je);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Be(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=Ti(Lt.bind(null,e,ve,Je),r);break}Lt(e,ve,Je);break;case 5:Lt(e,ve,Je);break;default:throw Error(j(329))}}}return ke(e,G()),e.callbackNode===n?oc.bind(null,e):null}function Ji(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=gl(e,t),e!==2&&(t=ve,ve=n,t!==null&&qi(t)),e}function qi(e){ve===null?ve=e:ve.push.apply(ve,e)}function Dp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!$e(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~Io,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function es(e){if(A&6)throw Error(j(327));cn();var t=Jr(e,0);if(!(t&1))return ke(e,G()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var r=Ni(e);r!==0&&(t=r,n=Ji(e,r))}if(n===1)throw n=ur,Dt(e,0),ft(e,t),ke(e,G()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,ve,Je),ke(e,G()),null}function Uo(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(xn=G()+500,Cl&&zt())}}function Bt(e){mt!==null&&mt.tag===0&&!(A&6)&&cn();var t=A;A|=1;var n=Te.transition,r=O;try{if(Te.transition=null,O=1,e)return e()}finally{O=r,Te.transition=n,A=t,!(A&6)&&zt()}}function $o(){Se=nn.current,B(nn)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cp(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:gn(),B(ye),B(de),Po();break;case 5:Lo(r);break;case 4:gn();break;case 13:B(H);break;case 19:B(H);break;case 10:bo(r.type._context);break;case 22:case 23:$o()}n=n.return}if(re=e,J=e=St(e.current,null),oe=Se=t,te=0,ur=null,Io=_l=It=0,ve=Vn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}Tt=null}return e}function ac(e,t){do{var n=J;try{if(Co(),Ur.current=pl,dl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(Rt=0,ne=ee=V=null,Wn=!1,or=0,Ro.current=null,n===null||n.return===null){te=1,ur=t,J=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=oe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ua(a);if(y!==null){y.flags&=-257,$a(y,a,s,o,t),y.mode&1&&Ba(o,c,t),t=y,u=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(u),t.updateQueue=k}else v.add(u);break e}else{if(!(t&1)){Ba(o,c,t),Wo();break e}u=Error(j(426))}}else if(U&&s.mode&1){var b=Ua(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),$a(b,a,s,o,t),So(vn(u,s));break e}}o=u=vn(u,s),te!==4&&(te=2),Vn===null?Vn=[o]:Vn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Hu(o,u,t);Da(o,p);break e;case 1:s=u;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(kt===null||!kt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Vu(o,s,t);Da(o,w);break e}}o=o.return}while(o!==null)}cc(n)}catch(C){t=C,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function sc(){var e=fl.current;return fl.current=pl,e===null?pl:e}function Wo(){(te===0||te===3||te===2)&&(te=4),re===null||!(It&268435455)&&!(_l&268435455)||ft(re,oe)}function gl(e,t){var n=A;A|=2;var r=sc();(re!==e||oe!==t)&&(Je=null,Dt(e,t));do try{Mp();break}catch(l){ac(e,l)}while(!0);if(Co(),A=n,fl.current=r,J!==null)throw Error(j(261));return re=null,oe=0,te}function Mp(){for(;J!==null;)uc(J)}function Ap(){for(;J!==null&&!ad();)uc(J)}function uc(e){var t=pc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?cc(e):J=t,Ro.current=null}function cc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_p(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(n=zp(n,t,Se),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function Lt(e,t,n){var r=O,l=Te.transition;try{Te.transition=null,O=1,Op(e,t,n,r)}finally{Te.transition=l,O=r}return null}function Op(e,t,n,r){do cn();while(mt!==null);if(A&6)throw Error(j(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(vd(e,o),e===re&&(J=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,fc(Zr,function(){return cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Te.transition,Te.transition=null;var a=O;O=1;var s=A;A|=4,Ro.current=null,Pp(e,n),lc(n,e),rp(Li),qr=!!_i,Li=_i=null,e.current=n,Tp(n),sd(),A=s,O=a,Te.transition=o}else e.current=n;if(Pr&&(Pr=!1,mt=e,ml=l),o=e.pendingLanes,o===0&&(kt=null),dd(n.stateNode),ke(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(hl)throw hl=!1,e=Xi,Xi=null,e;return ml&1&&e.tag!==0&&cn(),o=e.pendingLanes,o&1?e===Zi?Qn++:(Qn=0,Zi=e):Qn=0,zt(),null}function cn(){if(mt!==null){var e=Hs(ml),t=Te.transition,n=O;try{if(Te.transition=null,O=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,ml=0,A&6)throw Error(j(331));var l=A;for(A|=4,E=e.current;E!==null;){var o=E,a=o.child;if(E.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(E=c;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Hn(8,m,o)}var g=m.child;if(g!==null)g.return=m,E=g;else for(;E!==null;){m=E;var f=m.sibling,y=m.return;if(tc(m),m===c){E=null;break}if(f!==null){f.return=y,E=f;break}E=y}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}E=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,E=a;else e:for(;E!==null;){if(o=E,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,E=p;break e}E=o.return}}var d=e.current;for(E=d;E!==null;){a=E;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,E=h;else e:for(a=d;E!==null;){if(s=E,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zl(9,s)}}catch(C){K(s,s.return,C)}if(s===a){E=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,E=w;break e}E=s.return}}if(A=l,zt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(wl,e)}catch{}r=!0}return r}finally{O=n,Te.transition=t}}return!1}function ts(e,t,n){t=vn(n,t),t=Hu(e,t,1),e=wt(e,t,1),t=he(),e!==null&&(dr(e,1,t),ke(e,t))}function K(e,t,n){if(e.tag===3)ts(e,e,n);else for(;t!==null;){if(t.tag===3){ts(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=vn(n,e),e=Vu(t,e,1),t=wt(t,e,1),e=he(),t!==null&&(dr(t,1,e),ke(t,e));break}}t=t.return}}function Rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(te===4||te===3&&(oe&130023424)===oe&&500>G()-Bo?Dt(e,0):Io|=n),ke(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=kr,kr<<=1,!(kr&130023424)&&(kr=4194304)):t=1);var n=he();e=ot(e,t),e!==null&&(dr(e,t,n),ke(e,n))}function Ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Bp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),dc(e,n)}var pc;pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Ep(e,t,n);xe=!!(e.flags&131072)}else xe=!1,U&&t.flags&1048576&&gu(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var l=fn(t,de.current);un(t,n),l=Fo(null,t,r,e,l,n);var o=Do();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(o=!0,ll(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zo(t),l.updater=El,t.stateNode=l,l._reactInternals=t,Ii(t,r,e,n),t=$i(null,t,r,!0,o,n)):(t.tag=0,U&&o&&ko(t),fe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=$p(r),e=Oe(r,e),l){case 0:t=Ui(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Ha(null,t,r,Oe(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Ui(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Va(e,t,r,l,n);case 3:e:{if(Gu(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ju(e,t),ul(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=vn(Error(j(423)),t),t=Qa(e,t,r,n,l);break e}else if(r!==l){l=vn(Error(j(424)),t),t=Qa(e,t,r,n,l);break e}else for(Ne=yt(t.stateNode.containerInfo.firstChild),Ce=t,U=!0,Ie=null,n=wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===l){t=at(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return Su(t),e===null&&Ai(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Pi(r,l)?a=null:o!==null&&Pi(r,o)&&(t.flags|=32),Yu(e,t),fe(e,t,a,n),t.child;case 6:return e===null&&Ai(t),null;case 13:return Xu(e,t,n);case 4:return _o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Wa(e,t,r,l,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,R(al,r._currentValue),r._currentValue=a,o!==null)if($e(o.value,a)){if(o.children===l.children&&!ye.current){t=at(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=nt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?u.next=u:(u.next=m.next,m.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Oi(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Oi(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}fe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,un(t,n),l=Fe(l),r=r(l),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,l=Oe(r,t.pendingProps),l=Oe(r.type,l),Ha(e,t,r,l,n);case 15:return Qu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Oe(r,l),Wr(e,t),t.tag=1,we(r)?(e=!0,ll(t)):e=!1,un(t,n),Wu(t,r,l),Ii(t,r,l,n),$i(null,t,r,!0,e,n);case 19:return Zu(e,t,n);case 22:return Ku(e,t,n)}throw Error(j(156,t.tag))};function fc(e,t){return Bs(e,t)}function Up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Up(e,t,n,r)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $p(e){if(typeof e=="function")return Ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===so)return 11;if(e===uo)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")Ho(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qt:return Mt(n.children,l,o,t);case ao:a=8,l|=8;break;case ui:return e=Pe(12,n,t,l|2),e.elementType=ui,e.lanes=o,e;case ci:return e=Pe(13,n,t,l),e.elementType=ci,e.lanes=o,e;case di:return e=Pe(19,n,t,l),e.elementType=di,e.lanes=o,e;case Ss:return Ll(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ks:a=10;break e;case js:a=9;break e;case so:a=11;break e;case uo:a=14;break e;case ct:a=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Pe(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Mt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function Ll(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Ss,e.lanes=n,e.stateNode={isHidden:!1},e}function oi(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function ai(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ul(0),this.expirationTimes=Ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ul(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vo(e,t,n,r,l,o,a,s,u){return e=new Wp(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zo(o),e}function Hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hc(e){if(!e)return Ct;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(we(n))return hu(e,n,t)}return t}function mc(e,t,n,r,l,o,a,s,u){return e=Vo(n,r,!0,e,l,o,a,s,u),e.context=hc(null),n=e.current,r=he(),l=jt(n),o=nt(r,l),o.callback=t??null,wt(n,o,l),e.current.lanes=l,dr(e,l,r),ke(e,r),e}function Pl(e,t,n,r){var l=t.current,o=he(),a=jt(l);return n=hc(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(l,t,a),e!==null&&(Ue(e,l,a,o),Br(e,l,a)),a}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ns(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qo(e,t){ns(e,t),(e=e.alternate)&&ns(e,t)}function Vp(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}Tl.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Pl(e,t,null,null)};Tl.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Pl(null,e,null,null)}),t[it]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ks();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&Gs(e)}};function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rs(){}function Qp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=vl(a);o.call(c)}}var a=mc(t,r,e,0,null,!1,!1,"",rs);return e._reactRootContainer=a,e[it]=a.current,tr(e.nodeType===8?e.parentNode:e),Bt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=vl(u);s.call(c)}}var u=Vo(e,0,!1,null,null,!1,!1,"",rs);return e._reactRootContainer=u,e[it]=u.current,tr(e.nodeType===8?e.parentNode:e),Bt(function(){Pl(t,u,n,r)}),u}function Dl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var u=vl(a);s.call(u)}}Pl(t,a,e,l)}else a=Qp(n,t,e,l,r);return vl(a)}Vs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(fo(t,n|1),ke(t,G()),!(A&6)&&(xn=G()+500,zt()))}break;case 13:Bt(function(){var r=ot(e,1);if(r!==null){var l=he();Ue(r,e,1,l)}}),Qo(e,1)}};ho=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=he();Ue(t,e,134217728,n)}Qo(e,134217728)}};Qs=function(e){if(e.tag===13){var t=jt(e),n=ot(e,t);if(n!==null){var r=he();Ue(n,e,t,r)}Qo(e,t)}};Ks=function(){return O};Ys=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};ki=function(e,t,n){switch(t){case"input":if(hi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Nl(r);if(!l)throw Error(j(90));Cs(r),hi(r,l)}}}break;case"textarea":Es(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Ds=Uo;Ms=Bt;var Kp={usingClientEntryPoint:!1,Events:[fr,Xt,Nl,Ts,Fs,Uo]},Tn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yp={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rs(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{wl=Tr.inject(Yp),Ke=Tr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yo(t))throw Error(j(200));return Hp(e,t,null,n)};Ee.createRoot=function(e,t){if(!Yo(e))throw Error(j(299));var n=!1,r="",l=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vo(e,1,!1,null,null,n,!1,r,l),e[it]=t.current,tr(e.nodeType===8?e.parentNode:e),new Ko(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Rs(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Bt(e)};Ee.hydrate=function(e,t,n){if(!Fl(t))throw Error(j(200));return Dl(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!Yo(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=gc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=mc(t,null,e,1,n??null,l,!1,o,a),e[it]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Tl(t)};Ee.render=function(e,t,n){if(!Fl(t))throw Error(j(200));return Dl(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Fl(e))throw Error(j(40));return e._reactRootContainer?(Bt(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Ee.unstable_batchedUpdates=Uo;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Dl(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc)}catch(e){console.error(e)}}vc(),vs.exports=Ee;var Gp=vs.exports,xc,ls=Gp;xc=ls.createRoot,ls.hydrateRoot;const Xp="/api";function yc(){return localStorage.getItem("armvet_token")}function Zp(e){localStorage.setItem("armvet_token",e)}function wc(){localStorage.removeItem("armvet_token")}async function le(e,t,n){const r={"Content-Type":"application/json"},l=yc();l&&(r.Authorization=`Bearer ${l}`);const o=await fetch(Xp+t,{method:e,headers:r,body:n!==void 0?JSON.stringify(n):void 0});if(o.status===401){wc(),window.location.reload();return}if(!o.ok){const a=await o.text();throw new Error(a||`HTTP ${o.status}`)}return o.json()}const W={login:async(e,t)=>{const n=await le("POST","/auth/login",{username:e,password:t});return n!=null&&n.token&&Zp(n.token),n},logout:wc,getBookings:()=>le("GET","/bookings"),updateBookingStatus:(e,t)=>le("PUT",`/bookings/${e}/status`,{status:t}),getContacts:()=>le("GET","/contacts"),updateContactStatus:(e,t)=>le("PUT",`/contacts/${e}/status`,{status:t}),getAvailability:()=>le("GET","/availability"),createSlot:e=>le("POST","/availability",e),createSlotRange:e=>le("POST","/availability/batch",e),deleteSlot:e=>le("DELETE",`/availability/${e}`),changePassword:(e,t)=>le("POST","/auth/change-password",{currentPassword:e,newPassword:t}),completeTutorial:()=>le("PUT","/auth/tutorial-complete"),resetTutorial:()=>le("DELETE","/auth/tutorial-complete"),deleteBooking:e=>le("DELETE",`/bookings/${e}`),deleteContact:e=>le("DELETE",`/contacts/${e}`),hasToken:()=>!!yc(),getAdminConfig:()=>le("GET","/admin/config"),saveConfig:e=>le("PUT","/admin/config",e),getDocs:()=>le("GET","/admin/docs")},kc=["Leadership Development","Executive Coaching","Small Group Workshops","Individual Development","Organizational Culture Training","Federal HR Consulting","Workforce Planning","HR Modernization","Speaking Engagements"],Go=["Military","Federal","Corporate"],L={dashboard:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),calendar:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),i.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),i.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),bookings:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),inbox:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M22 12h-6l-2 3H10l-2-3H2"}),i.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),check:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"20 6 9 17 4 12"})}),x:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),clock:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("polyline",{points:"12 6 12 12 16 14"})]}),chevronRight:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"9 18 15 12 9 6"})}),back:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"15 18 9 12 15 6"})}),logout:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),i.jsx("polyline",{points:"16 17 21 12 16 7"}),i.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),menu:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),star:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",children:i.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),phone:i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),mail:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),i.jsx("polyline",{points:"22,6 12,13 2,6"})]}),calendarPlus:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),i.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),i.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),i.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"20"}),i.jsx("line",{x1:"9",y1:"17",x2:"15",y2:"17"})]}),filter:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),search:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"11",cy:"11",r:"8"}),i.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),trash:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"3 6 5 6 21 6"}),i.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),i.jsx("path",{d:"M10 11v6M14 11v6"}),i.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),archive:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"21 8 21 21 3 21 3 8"}),i.jsx("rect",{x:"1",y:"3",width:"22",height:"5"}),i.jsx("line",{x1:"10",y1:"12",x2:"14",y2:"12"})]}),helpCircle:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),i.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),mobile:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),i.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),clipboardList:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),i.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),i.jsx("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),i.jsx("line",{x1:"9",y1:"16",x2:"15",y2:"16"})]}),home:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),i.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),brush:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L3 14.67V21h6.33L20.84 9.39a5.5 5.5 0 0 0 0-7.78z"})}),list:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),i.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),i.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),i.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),tag:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),i.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),globe:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),i.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),code:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"16 18 22 12 16 6"}),i.jsx("polyline",{points:"8 6 2 12 8 18"})]}),download:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i.jsx("polyline",{points:"7 10 12 15 17 10"}),i.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),copy:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),i.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),plus:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),settings:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"3"}),i.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),sun:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"5"}),i.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),i.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),i.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),i.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),i.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),i.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),i.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),i.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},is=`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');

/* ─── Theme: Dark (default) ─── */
:root, [data-theme="dark"] {
  --bg-primary: #0C0F14;
  --bg-secondary: #141820;
  --bg-card: #1A1F2B;
  --bg-card-hover: #1F2537;
  --bg-input: #141820;
  --border: #262D3D;
  --border-light: #1E2433;
  --text-primary: #F0F2F5;
  --text-secondary: #8A94A6;
  --text-muted: #5A6478;
  --accent: #C8A84E;
  --accent-dim: rgba(200,168,78,0.12);
  --accent-glow: rgba(200,168,78,0.25);
  --green: #34D399; --green-dim: rgba(52,211,153,0.12);
  --red: #F87171; --red-dim: rgba(248,113,113,0.12);
  --blue: #60A5FA; --blue-dim: rgba(96,165,250,0.12);
  --orange: #FBBF24; --orange-dim: rgba(251,191,36,0.12);
  --purple: #A78BFA; --purple-dim: rgba(167,139,250,0.12);
  --radius: 10px; --radius-lg: 14px;
  --shadow: 0 2px 12px rgba(0,0,0,0.3);
  --transition: 0.2s ease;
}

/* ─── Theme: Light ─── */
[data-theme="light"] {
  --bg-primary: #F0F2F7;
  --bg-secondary: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-card-hover: #F5F7FB;
  --bg-input: #F0F2F7;
  --border: #DDE1EB;
  --border-light: #E8ECF3;
  --text-primary: #1A1F2E;
  --text-secondary: #5A6478;
  --text-muted: #9AA3B5;
  --accent: #A8862A;
  --accent-dim: rgba(168,134,42,0.12);
  --accent-glow: rgba(168,134,42,0.25);
  --green: #059669; --green-dim: rgba(5,150,105,0.1);
  --red: #DC2626; --red-dim: rgba(220,38,38,0.1);
  --blue: #2563EB; --blue-dim: rgba(37,99,235,0.1);
  --orange: #D97706; --orange-dim: rgba(217,119,6,0.1);
  --purple: #7C3AED; --purple-dim: rgba(124,58,237,0.1);
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
}

/* ─── Theme: Auto (follows system) ─── */
@media (prefers-color-scheme: light) {
  [data-theme="auto"] {
    --bg-primary: #F0F2F7;
    --bg-secondary: #FFFFFF;
    --bg-card: #FFFFFF;
    --bg-card-hover: #F5F7FB;
    --bg-input: #F0F2F7;
    --border: #DDE1EB;
    --border-light: #E8ECF3;
    --text-primary: #1A1F2E;
    --text-secondary: #5A6478;
    --text-muted: #9AA3B5;
    --accent: #A8862A;
    --accent-dim: rgba(168,134,42,0.12);
    --accent-glow: rgba(168,134,42,0.25);
    --green: #059669; --green-dim: rgba(5,150,105,0.1);
    --red: #DC2626; --red-dim: rgba(220,38,38,0.1);
    --blue: #2563EB; --blue-dim: rgba(37,99,235,0.1);
    --orange: #D97706; --orange-dim: rgba(217,119,6,0.1);
    --purple: #7C3AED; --purple-dim: rgba(124,58,237,0.1);
    --shadow: 0 2px 12px rgba(0,0,0,0.08);
  }
}

/* ─── Theme: Alpha Psi Phi (Deep Purple & Gold) ─── */
[data-theme="alpha-psi-phi"] {
  --bg-primary: #0F0720;
  --bg-secondary: #180B33;
  --bg-card: #1F1040;
  --bg-card-hover: #281554;
  --bg-input: #180B33;
  --border: #3D1F72;
  --border-light: #2B1558;
  --text-primary: #F0E8FF;
  --text-secondary: #B89FD8;
  --text-muted: #7B5FA0;
  --accent: #D4AF37;
  --accent-dim: rgba(212,175,55,0.15);
  --accent-glow: rgba(212,175,55,0.32);
  --green: #34D399; --green-dim: rgba(52,211,153,0.12);
  --red: #F87171; --red-dim: rgba(248,113,113,0.12);
  --blue: #818CF8; --blue-dim: rgba(129,140,248,0.15);
  --orange: #FBBF24; --orange-dim: rgba(251,191,36,0.12);
  --purple: #C084FC; --purple-dim: rgba(192,132,252,0.15);
  --shadow: 0 2px 16px rgba(0,0,0,0.5);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html {
  overflow-x: hidden;
  height: 100%;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
  min-height: 100%;
  min-height: -webkit-fill-available;
}

#root {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.login-page::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(ellipse at 30% 20%, rgba(200,168,78,0.04) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(200,168,78,0.03) 0%, transparent 50%);
  pointer-events: none;
}

.login-box {
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
}

.login-logo {
  text-align: center;
  margin-bottom: 40px;
}

.login-logo h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 3px;
  color: var(--text-primary);
  text-transform: uppercase;
}

.login-logo p {
  color: var(--accent);
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 6px;
  font-weight: 600;
}

.login-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
}

.login-card h2 {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.login-card .subtitle {
  color: var(--text-secondary);
  font-size: 13px;
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  transition: border-color var(--transition);
  outline: none;
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.form-group input::placeholder {
  color: var(--text-muted);
}

.btn-primary {
  width: 100%;
  padding: 13px;
  background: var(--accent);
  color: #0C0F14;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary:hover {
  background: #D4B65E;
  box-shadow: 0 4px 20px var(--accent-glow);
}

.btn-secondary {
  padding: 8px 16px;
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
}

.btn-secondary:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.btn-action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
}

.btn-approve {
  background: var(--green-dim);
  color: var(--green);
}
.btn-approve:hover { background: rgba(52, 211, 153, 0.2); }

.btn-decline {
  background: var(--red-dim);
  color: var(--red);
}
.btn-decline:hover { background: rgba(248, 113, 113, 0.2); }

.btn-calendar {
  background: var(--blue-dim);
  color: var(--blue);
}
.btn-calendar:hover { background: rgba(96, 165, 250, 0.2); }

.btn-delete {
  background: var(--red-dim);
  color: var(--red);
  margin-left: auto;
}
.btn-delete:hover { background: rgba(248, 113, 113, 0.2); }

.btn-archive {
  background: rgba(90,100,120,0.15);
  color: var(--text-muted);
}
.btn-archive:hover { background: rgba(90,100,120,0.25); }

.login-error {
  background: var(--red-dim);
  color: var(--red);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 18px;
  text-align: center;
}

.login-hint {
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  color: var(--text-muted);
}

.login-hint code {
  background: var(--bg-input);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--text-secondary);
  font-size: 11px;
}

/* ─── Layout ─── */
.app-layout {
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
}

.sidebar {
  width: 240px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;
}

.sidebar-logo {
  padding: 0 24px;
  margin-bottom: 8px;
}

.sidebar-logo h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sidebar-logo p {
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 2px;
}

.sidebar-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 24px 8px;
}

.sidebar-nav {
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition);
  border-left: 3px solid transparent;
  position: relative;
}

.nav-item:hover {
  color: var(--text-primary);
  background: rgba(255,255,255,0.03);
}

.nav-item.active {
  color: var(--accent);
  background: var(--accent-dim);
  border-left-color: var(--accent);
}

.nav-badge {
  position: absolute;
  right: 20px;
  background: var(--accent);
  color: #0C0F14;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
}

.sidebar-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--text-muted);
  cursor: pointer;
  transition: color var(--transition);
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
}

.logout-btn:hover { color: var(--red); }

.main-content {
  flex: 1;
  margin-left: 240px;
  padding: 28px;
  min-height: 100vh;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 12px 16px;
  z-index: 90;
  align-items: center;
  justify-content: space-between;
}

.mobile-header h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.mobile-menu-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 4px;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 99;
}

/* ─── Page Header ─── */
.page-header {
  margin-bottom: 28px;
}

.page-header h2 {
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 700;
}

.page-header p {
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 4px;
}

/* ─── Stats Row ─── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  min-width: 0;
  box-sizing: border-box;
  transition: border-color var(--transition);
}

.stat-card:hover {
  border-color: var(--border-light);
}

.stat-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.stat-value {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 700;
}

.stat-sub {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* ─── Card List ─── */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.section-title {
  font-size: 16px;
  font-weight: 700;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-chip {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  font-family: 'DM Sans', sans-serif;
  transition: all var(--transition);
  white-space: nowrap;
}

.filter-chip:hover {
  border-color: var(--text-secondary);
}

.filter-chip.active {
  background: var(--accent-dim);
  border-color: var(--accent);
  color: var(--accent);
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  cursor: pointer;
  transition: all var(--transition);
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  box-sizing: border-box;
}

.list-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent-dim);
}

.card-status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}

.card-name {
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-date {
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
}

.card-preview {
  font-size: 13px;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-tags {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.tag {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tag-military { background: rgba(52,211,153,0.12); color: #34D399; }
.tag-federal { background: rgba(96,165,250,0.12); color: #60A5FA; }
.tag-corporate { background: rgba(167,139,250,0.12); color: #A78BFA; }

.status-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-pending { background: var(--orange-dim); color: var(--orange); }
.status-approved { background: var(--green-dim); color: var(--green); }
.status-declined { background: var(--red-dim); color: var(--red); }
.status-new { background: var(--blue-dim); color: var(--blue); }
.status-replied { background: var(--green-dim); color: var(--green); }
.status-archived { background: rgba(90,100,120,0.2); color: var(--text-muted); }
.status-on-calendar { background: var(--purple-dim); color: var(--purple); }

.card-chevron {
  color: var(--text-muted);
  flex-shrink: 0;
}

/* ─── Detail View ─── */
.detail-view {
  max-width: 640px;
}

.detail-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
  transition: color var(--transition);
}

.detail-back:hover { color: var(--accent); }

.detail-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
}

.detail-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.detail-name {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 700;
}

.detail-org {
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 2px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.detail-field label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.detail-field span {
  font-size: 14px;
  color: var(--text-primary);
}

.detail-field a {
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
}

.detail-field a:hover { text-decoration: underline; }

.detail-message {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.detail-message label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.detail-message p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.detail-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.detail-status-select {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.detail-status-select label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.detail-status-select select {
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  outline: none;
  cursor: pointer;
}

.detail-status-select select:focus {
  border-color: var(--accent);
}

/* ─── Calendar View ─── */
.cal-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  align-items: start;
}
.cal-left { min-width: 0; }
.cal-right { position: sticky; top: 80px; }
.cal-mobile-upcoming { display: none; margin-top: 24px; grid-column: 1 / -1; }

.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 16px;
}

.cal-header-cell {
  background: var(--bg-secondary);
  padding: 10px 6px;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cal-cell {
  background: var(--bg-card);
  padding: 8px 8px 6px;
  min-height: 100px;
  font-size: 12px;
  position: relative;
  cursor: pointer;
  transition: background var(--transition);
  overflow: hidden;
}
.cal-cell:hover:not(.other-month) { background: var(--bg-card-hover); }
.cal-cell.selected { background: rgba(200,168,78,0.08) !important; box-shadow: inset 0 0 0 1.5px var(--accent); }
.cal-cell.other-month { background: var(--bg-secondary); opacity: 0.45; cursor: default; }

.cal-day-num {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}
.cal-cell.today .cal-day-num { background: var(--accent); color: #0C0F14; }
.cal-cell.selected:not(.today) .cal-day-num { color: var(--accent); }

.cal-event {
  background: var(--green-dim);
  color: var(--green);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: opacity var(--transition);
}
.cal-event:hover { opacity: 0.8; }
.cal-event.on-cal { background: var(--purple-dim); color: var(--purple); }
.cal-event-more { font-size: 10px; color: var(--text-muted); padding: 1px 4px; }

/* Mobile-only: dots instead of event chips */
.cal-dots { display: none; gap: 3px; margin-top: 4px; flex-wrap: wrap; }
.cal-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.cal-dot.green { background: var(--green); }
.cal-dot.purple { background: var(--purple); }

.cal-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
}
.cal-month {
  font-family: 'Syne', sans-serif;
  font-size: 20px;
  font-weight: 700;
}
.cal-nav-btns { display: flex; gap: 6px; }
.cal-nav-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 7px 13px;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  font-family: inherit;
  transition: all var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.cal-nav-btn:hover { border-color: var(--accent); color: var(--accent); }
.cal-nav-icon { padding: 7px 10px; }

.cal-legend { display: flex; gap: 16px; margin-bottom: 4px; flex-wrap: wrap; }
.cal-legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); }
.cal-legend-dot { width: 8px; height: 8px; border-radius: 50%; }
.cal-legend-dot.green { background: var(--green); }
.cal-legend-dot.purple { background: var(--purple); }

/* Right detail panel */
.cal-panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
  min-height: 200px;
}
.cal-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
}
.cal-panel-title {
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}
.cal-panel-close {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 2px;
  flex-shrink: 0;
  transition: color var(--transition);
}
.cal-panel-close:hover { color: var(--text-primary); }
.cal-panel-empty {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
  padding: 24px 0;
  line-height: 1.6;
}
.cal-panel-event {
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 10px;
  cursor: pointer;
  transition: all var(--transition);
}
.cal-panel-event:hover { border-color: var(--accent); background: var(--accent-dim); }
.cal-panel-event-time {
  font-size: 10px;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cal-panel-event-name { font-size: 14px; font-weight: 600; margin-top: 4px; }
.cal-panel-event-service { font-size: 12px; color: var(--text-secondary); margin-top: 2px; }
.cal-panel-event-org { font-size: 11px; color: var(--text-muted); margin-top: 2px; }

/* Upcoming list in panel */
.cal-upcoming-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-light);
  cursor: pointer;
}
.cal-upcoming-item:last-child { border-bottom: none; }
.cal-upcoming-item:hover .cal-upcoming-name { color: var(--accent); }
.cal-upcoming-badge {
  width: 42px;
  text-align: center;
  flex-shrink: 0;
}
.cal-upcoming-badge-month {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
}
.cal-upcoming-badge-day {
  font-size: 22px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-primary);
}
.cal-upcoming-name {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--transition);
}
.cal-upcoming-meta { font-size: 11px; color: var(--text-secondary); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ─── Toast ─── */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 20px;
  font-size: 13px;
  box-shadow: var(--shadow);
  animation: slideUp 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 360px;
}

.toast-success { border-left: 3px solid var(--green); }
.toast-info { border-left: 3px solid var(--blue); }
.toast-error { border-left: 3px solid var(--red); }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Search ─── */
.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 14px;
  margin-bottom: 16px;
  transition: border-color var(--transition);
}

.search-bar:focus-within {
  border-color: var(--accent);
}

.search-bar input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 14px;
  font-family: inherit;
}

.search-bar input::placeholder { color: var(--text-muted); }

.search-icon { color: var(--text-muted); flex-shrink: 0; }

/* ─── Empty State ─── */
.empty-state {
  text-align: center;
  padding: 48px 20px;
  color: var(--text-muted);
}

.empty-state p {
  font-size: 14px;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar.open {
    transform: translateX(0);
    box-shadow: 4px 0 24px rgba(0,0,0,0.5);
  }
  .sidebar-overlay.show {
    display: block;
  }
  .mobile-header {
    display: flex;
  }
  .main-content {
    margin-left: 0;
    padding: 72px 16px 24px;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .stat-value { font-size: 22px; }
  .detail-grid {
    grid-template-columns: 1fr;
  }
  .cal-layout { grid-template-columns: 1fr; }
  .cal-right { display: none; position: static; margin-top: 16px; }
  .cal-layout.day-selected .cal-right { display: block; }
  .cal-layout.day-selected .cal-mobile-upcoming { display: none; }
  .cal-mobile-upcoming { display: block; }
  .cal-cell { min-height: 56px; padding: 5px 4px; }
  .cal-event { display: none; }
  .cal-event-more { display: none; }
  .cal-dots { display: flex; }
  .cal-day-num { width: 22px; height: 22px; font-size: 12px; }
  .page-header h2 { font-size: 20px; }
  .toast-container {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }
  .toast { max-width: 100%; }
}

@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .detail-card { padding: 20px; }
  .detail-name { font-size: 18px; }
}

/* ─── Availability Page ─── */
.avail-intro {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 24px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}
.avail-form-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  margin-bottom: 28px;
}
.avail-form-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
}
.avail-form-card .avail-section-hint {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}
.avail-form-row { display: flex; flex-direction: column; gap: 18px; }
.avail-form-inline {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.avail-field-hint {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 5px;
  line-height: 1.5;
}
.avail-form-row .form-group { margin-bottom: 0; }
.avail-preview {
  background: var(--accent-dim);
  border: 1px solid var(--accent);
  border-radius: var(--radius);
  padding: 14px 18px;
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.7;
}
.avail-preview strong { color: var(--accent); }
.avail-date-group { margin-bottom: 32px; }
.avail-date-header {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.avail-slot-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 8px;
  transition: border-color var(--transition);
  flex-wrap: wrap;
}
.avail-slot-row:hover { border-color: var(--border-light); }
.avail-slot-time { font-weight: 700; font-size: 15px; min-width: 80px; }
.avail-slot-duration { font-size: 12px; color: var(--text-muted); min-width: 55px; }
.avail-slot-label { font-size: 13px; color: var(--text-secondary); flex: 1; font-style: italic; }
.avail-slot-booked-by { font-size: 13px; color: var(--text-secondary); flex: 1; cursor: pointer; }
.avail-slot-booked-by:hover { color: var(--accent); text-decoration: underline; }
.btn-slot-delete {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 7px; background: transparent; color: var(--text-muted);
  border: 1px solid var(--border); border-radius: 6px; cursor: pointer;
  transition: all var(--transition); flex-shrink: 0;
}
.btn-slot-delete:hover { background: var(--red-dim); color: var(--red); border-color: var(--red); }
.avail-empty {
  text-align: center; padding: 56px 20px; color: var(--text-muted); font-size: 14px;
  background: var(--bg-card); border: 1px dashed var(--border); border-radius: var(--radius-lg);
}
.avail-empty .avail-empty-icon { display: flex; justify-content: center; margin-bottom: 12px; color: var(--text-muted); }
.avail-empty .avail-empty-icon svg { width: 40px; height: 40px; }
.avail-empty p { color: var(--text-muted); font-size: 14px; margin-top: 6px; line-height: 1.6; }

/* ─── Tutorial Overlay ─── */
.tutorial-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.88);
  z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 24px;
}
.tutorial-card {
  background: var(--bg-card); border: 1px solid var(--accent);
  border-radius: var(--radius-lg); padding: 44px 36px;
  max-width: 500px; width: 100%; text-align: center;
}
.tutorial-icon { display: flex; justify-content: center; margin-bottom: 20px; color: var(--accent); }
.tutorial-icon svg { width: 52px; height: 52px; }
.tutorial-step-num {
  font-size: 11px; font-weight: 700; color: var(--accent);
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px;
}
.tutorial-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; margin-bottom: 16px; }
.tutorial-body { font-size: 16px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 32px; }
.tutorial-dots { display: flex; justify-content: center; gap: 8px; margin-bottom: 28px; }
.tutorial-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--border); transition: background var(--transition); }
.tutorial-dot.active { background: var(--accent); }
.tutorial-btn-row { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.tutorial-next { width: 100%; padding: 14px; background: var(--accent); color: #0C0F14; border: none; border-radius: 8px; font-size: 15px; font-weight: 700; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all var(--transition); }
.tutorial-next:hover { background: #D4B65E; }
.tutorial-dismiss { background: none; border: none; color: var(--text-muted); font-size: 13px; cursor: pointer; font-family: inherit; }
.tutorial-dismiss:hover { color: var(--text-secondary); }
.tutorial-no-show { background: none; border: 1px solid var(--border); color: var(--text-muted); font-size: 12px; cursor: pointer; font-family: inherit; padding: 8px 16px; border-radius: 6px; transition: all var(--transition); }
.tutorial-no-show:hover { border-color: var(--red); color: var(--red); }
.sidebar-visit-divider {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 20px 0;
}
.sidebar-visit-divider::before,
.sidebar-visit-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}
.sidebar-visit-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
  transition: color var(--transition);
}
.sidebar-visit-btn:hover { color: var(--text-secondary); }
.sidebar-tutorial-btn { display: flex; align-items: center; gap: 10px; width: 100%; background: none; border: none; color: var(--text-muted); font-size: 13px; font-family: inherit; cursor: pointer; padding: 10px 24px; transition: color var(--transition); text-align: left; }
.sidebar-tutorial-btn:hover { color: var(--text-secondary); }

/* ─── Settings Page ─── */
.settings-section {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  margin-bottom: 20px;
}
.settings-section > h3 {
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 6px;
}
.settings-desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 22px;
  line-height: 1.6;
}
.theme-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius);
  border: 2px solid transparent;
  transition: all var(--transition);
}
.theme-option:hover:not(.active) { border-color: var(--border); }
.theme-option.active { border-color: var(--accent); }
.theme-swatch {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
}
.theme-swatch-header {
  height: 32%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 4px;
}
.theme-swatch-dot { width: 5px; height: 5px; border-radius: 50%; opacity: 0.6; }
.theme-swatch-body {
  flex: 1;
  display: grid;
  grid-template-columns: 28% 1fr;
  gap: 3px;
  padding: 3px;
}
.theme-swatch-sidebar { border-radius: 3px; }
.theme-swatch-content { display: flex; flex-direction: column; gap: 3px; }
.theme-swatch-card { flex: 1; border-radius: 3px; }
.theme-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: center;
}
.theme-option.active .theme-label { color: var(--accent); }

/* Generic form elements */
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.form-input {
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  outline: none;
  transition: border-color var(--transition);
  width: 100%;
}
.form-input:focus { border-color: var(--accent); }
.btn-primary {
  background: var(--accent);
  color: #0C0F14;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
  align-self: flex-start;
}
.btn-primary:hover { opacity: 0.9; }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.settings-form { display: flex; flex-direction: column; gap: 18px; max-width: 420px; }
.settings-info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-light);
  font-size: 14px;
}
.settings-info-row:last-child { border-bottom: none; }
.settings-info-label { color: var(--text-muted); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
.settings-info-value { color: var(--text-primary); font-weight: 500; }

/* ─── Setup Wizard ─── */
.wizard-step-content { display: flex; flex-direction: column; gap: 18px; text-align: left; }
.wizard-info-banner {
  background: var(--accent-dim); border: 1px solid var(--accent-glow);
  border-radius: 8px; padding: 12px 16px; font-size: 13px; color: var(--text-secondary); line-height: 1.6;
}
.wizard-list-editor { display: flex; flex-direction: column; gap: 10px; }
.wizard-pills { display: flex; flex-wrap: wrap; gap: 8px; min-height: 36px; }
.wizard-pill {
  display: flex; align-items: center; gap: 6px;
  background: var(--accent-dim); border: 1px solid var(--accent-glow);
  color: var(--text-primary); border-radius: 20px; padding: 4px 10px 4px 12px; font-size: 13px;
}
.wizard-pill-remove {
  background: none; border: none; color: var(--text-muted); cursor: pointer;
  display: flex; align-items: center; padding: 0; transition: color var(--transition);
}
.wizard-pill-remove:hover { color: var(--red); }
.wizard-add-row { display: flex; gap: 8px; }
.wizard-add-row .form-input { flex: 1; }
.wizard-add-btn {
  background: var(--accent); color: #0C0F14; border: none; border-radius: 8px;
  padding: 10px 14px; font-size: 13px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; white-space: nowrap; transition: opacity var(--transition); display: flex; align-items: center; gap: 6px;
}
.wizard-add-btn:hover { opacity: 0.85; }
.wizard-logo-preview { margin-top: 12px; }
.wizard-logo-preview img { max-width: 160px; max-height: 80px; border-radius: var(--radius); border: 1px solid var(--border); object-fit: contain; background: var(--bg-input); padding: 8px; }
.wizard-review-section { background: var(--bg-input); border-radius: 8px; padding: 14px; margin-bottom: 8px; }
.wizard-review-label { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
.wizard-review-value { font-size: 14px; color: var(--text-primary); line-height: 1.5; }
.wizard-skip-link { background: none; border: none; color: var(--text-muted); font-size: 12px; cursor: pointer; font-family: inherit; text-decoration: underline; margin-top: 8px; }
.wizard-skip-link:hover { color: var(--text-secondary); }

/* ─── Customize & Advanced Pages ─── */
.page-actions { display: flex; justify-content: flex-end; margin-top: 6px; }
.logo-preview-wrap { margin-top: 12px; display: flex; align-items: center; gap: 16px; }
.logo-preview-wrap img { max-width: 160px; max-height: 80px; border-radius: var(--radius); border: 1px solid var(--border); object-fit: contain; background: var(--bg-input); padding: 8px; }
.logo-remove-btn { background: none; border: 1px solid var(--border); color: var(--text-muted); font-size: 12px; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-family: inherit; transition: all var(--transition); }
.logo-remove-btn:hover { border-color: var(--red); color: var(--red); }

/* Allowed Origins page */
.origins-info { background: var(--blue-dim); border: 1px solid var(--blue); border-radius: 8px; padding: 14px 16px; font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; }
.origins-info strong { color: var(--text-primary); }

/* API Docs page */
.api-docs-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 8px; }
.api-docs-generated { font-size: 12px; color: var(--text-muted); }
.api-docs-endpoint {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  margin-bottom: 12px; overflow: hidden;
}
.api-docs-endpoint-header {
  display: flex; align-items: center; gap: 12px; padding: 16px 20px;
  cursor: pointer; user-select: none;
}
.api-docs-endpoint-header:hover { background: var(--bg-card-hover); }
.api-docs-method-badge {
  font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 4px;
  font-family: monospace; letter-spacing: 0.5px;
}
.badge-get { background: var(--green-dim); color: var(--green); }
.badge-post { background: var(--blue-dim); color: var(--blue); }
.badge-put { background: var(--orange-dim); color: var(--orange); }
.badge-delete { background: var(--red-dim); color: var(--red); }
.api-docs-path { font-family: monospace; font-size: 13px; color: var(--text-primary); }
.api-docs-desc { font-size: 13px; color: var(--text-secondary); margin-left: auto; }
.api-docs-endpoint-body { padding: 0 20px 20px; border-top: 1px solid var(--border-light); }
.api-docs-code-block {
  background: var(--bg-input); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 16px; font-family: monospace; font-size: 12px;
  color: var(--text-secondary); overflow-x: auto; white-space: pre; line-height: 1.6; margin-top: 12px;
}
.api-docs-tabs { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
.api-docs-tab {
  background: var(--bg-input); border: 1px solid var(--border); color: var(--text-muted);
  font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 6px;
  cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all var(--transition);
}
.api-docs-tab.active { background: var(--accent-dim); border-color: var(--accent); color: var(--accent); }
.api-docs-copy-btn {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--bg-input); border: 1px solid var(--border); color: var(--text-muted);
  font-size: 12px; padding: 6px 12px; border-radius: 6px; cursor: pointer;
  font-family: 'DM Sans', sans-serif; transition: all var(--transition); margin-top: 8px;
}
.api-docs-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
.api-docs-dl-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent); color: #0C0F14; border: none; border-radius: 8px;
  padding: 10px 18px; font-size: 13px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; transition: opacity var(--transition);
}
.api-docs-dl-btn:hover { opacity: 0.88; }

/* Sidebar Customize/Advanced sections */
.sidebar-section-group { margin-top: 4px; }

@media (max-width: 768px) {
  .avail-form-inline { grid-template-columns: 1fr; }
  .tutorial-card { padding: 32px 24px; }
  .tutorial-title { font-size: 19px; }
  .tutorial-body { font-size: 15px; }
  .theme-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .api-docs-header { flex-direction: column; align-items: flex-start; }
  .api-docs-desc { margin-left: 0; }
}
`;typeof localStorage<"u"&&document.documentElement.setAttribute("data-theme",localStorage.getItem("armvet_theme")||"auto");function Jp(){const[e,t]=_.useState(()=>localStorage.getItem("armvet_theme")||"auto");return[e,r=>{localStorage.setItem("armvet_theme",r),document.documentElement.setAttribute("data-theme",r),t(r)}]}function xl(e){return{pending:"var(--orange)",approved:"var(--green)",declined:"var(--red)",new:"var(--blue)",replied:"var(--green)",archived:"var(--text-muted)","on-calendar":"var(--purple)"}[e]||"var(--text-muted)"}function rt(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Kr(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function rn(e){if(!e)return"";const[t,n]=e.split(":").map(Number),r=t>=12?"PM":"AM";return`${t%12||12}:${String(n).padStart(2,"0")} ${r}`}function qp({toasts:e}){return i.jsx("div",{className:"toast-container",children:e.map(t=>i.jsxs("div",{className:`toast toast-${t.type||"success"}`,children:[t.type==="success"&&i.jsx("span",{style:{color:"var(--green)"},children:L.check}),t.type==="info"&&i.jsx("span",{style:{color:"var(--blue)"},children:L.calendarPlus}),t.message]},t.id))})}function ef({page:e,setPage:t,bookings:n,contacts:r,isOpen:l,onClose:o,onLogout:a,onShowTutorial:s,appConfig:u}){const c=n.filter(k=>k.status==="pending").length,m=r.filter(k=>k.status==="new").length,g=(u==null?void 0:u.company_website)||"https://ArmVet.onrender.com",f=u==null?void 0:u.company_logo,y=(u==null?void 0:u.company_name)||"Armvet",v=(k,b,p,d)=>i.jsxs("div",{className:`nav-item ${e===k?"active":""}`,onClick:()=>{t(k),o()},children:[b,p,d>0&&i.jsx("span",{className:"nav-badge",children:d})]},k);return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`sidebar-overlay ${l?"show":""}`,onClick:o}),i.jsxs("aside",{className:`sidebar ${l?"open":""}`,children:[i.jsxs("div",{className:"sidebar-logo",children:[f?i.jsx("img",{src:f,alt:y,style:{maxHeight:36,maxWidth:140,objectFit:"contain",marginBottom:4}}):i.jsx("h1",{children:y}),i.jsx("p",{children:"Admin Portal"})]}),i.jsx("div",{className:"sidebar-label",children:"Manage"}),i.jsxs("nav",{className:"sidebar-nav",children:[v("dashboard",L.dashboard,"Dashboard"),v("bookings",L.bookings,"Bookings",c),v("contacts",L.inbox,"Inbox",m),v("availability",L.clock,"Availability"),v("calendar",L.calendar,"Calendar")]}),i.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Customize"}),i.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[v("customize-branding",L.brush,"Branding"),v("customize-services",L.list,"Services"),v("customize-categories",L.tag,"Categories"),v("customize-appearance",L.sun,"Appearance")]}),i.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Advanced"}),i.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[v("advanced-origins",L.globe,"Allowed Origins"),v("advanced-docs",L.code,"API Docs")]}),i.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Account"}),i.jsx("nav",{className:"sidebar-nav sidebar-section-group",children:v("settings",L.settings,"Settings")}),i.jsx("div",{className:"sidebar-visit-divider",children:i.jsxs("a",{className:"sidebar-visit-btn",href:g,target:"_blank",rel:"noopener noreferrer",children:["Visit Website",i.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),i.jsx("polyline",{points:"15 3 21 3 21 9"}),i.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})}),i.jsxs("div",{className:"sidebar-footer",children:[i.jsxs("button",{className:"sidebar-tutorial-btn",onClick:()=>{s(),o()},children:[L.helpCircle,"Show Tutorial"]}),i.jsxs("button",{className:"logout-btn",onClick:a,children:[L.logout,"Sign Out"]})]})]})]})}function Fr({label:e,value:t,sub:n,color:r}){return i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-label",children:e}),i.jsx("div",{className:"stat-value",style:r?{color:r}:{},children:t}),n&&i.jsx("div",{className:"stat-sub",children:n})]})}function tf({bookings:e,contacts:t,setPage:n,setSelectedBooking:r,setSelectedContact:l}){const o=e.filter(u=>u.status==="pending"),a=e.filter(u=>u.status==="approved"||u.status==="on-calendar"),s=t.filter(u=>u.status==="new");return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Dashboard"}),i.jsx("p",{children:"Overview of your consultation bookings and inquiries"})]}),i.jsxs("div",{className:"stats-grid",children:[i.jsx(Fr,{label:"Pending Bookings",value:o.length,sub:"Need your review",color:"var(--orange)"}),i.jsx(Fr,{label:"Approved",value:a.length,sub:"Confirmed consultations",color:"var(--green)"}),i.jsx(Fr,{label:"New Messages",value:s.length,sub:"Unread inquiries",color:"var(--blue)"}),i.jsx(Fr,{label:"Total Leads",value:e.length+t.length,sub:"All time"})]}),o.length>0&&i.jsxs("div",{style:{marginBottom:28},children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-title",children:"Needs Your Attention"}),i.jsx("button",{className:"btn-secondary",onClick:()=>n("bookings"),children:"View All Bookings"})]}),i.jsx("div",{className:"card-list",children:o.slice(0,3).map(u=>i.jsxs("div",{className:"list-card",onClick:()=>{r(u.id),n("booking-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:xl(u.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:u.name}),i.jsx("span",{className:"card-date",children:rt(u.date)})]}),i.jsxs("div",{className:"card-preview",children:[u.service," — ",u.org]}),i.jsxs("div",{className:"card-tags",children:[i.jsx("span",{className:`tag tag-${u.category.toLowerCase()}`,children:u.category}),i.jsx("span",{className:`status-badge status-${u.status}`,children:u.status})]})]}),i.jsx("span",{className:"card-chevron",children:L.chevronRight})]},u.id))})]}),s.length>0&&i.jsxs("div",{children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-title",children:"New Inquiries"}),i.jsx("button",{className:"btn-secondary",onClick:()=>n("contacts"),children:"View Inbox"})]}),i.jsx("div",{className:"card-list",children:s.slice(0,3).map(u=>i.jsxs("div",{className:"list-card",onClick:()=>{l(u.id),n("contact-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:xl(u.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:u.name}),i.jsx("span",{className:"card-date",children:rt(u.submittedAt)})]}),i.jsx("div",{className:"card-preview",children:u.subject}),i.jsx("div",{className:"card-tags",children:i.jsx("span",{className:`tag tag-${u.category.toLowerCase()}`,children:u.category})})]}),i.jsx("span",{className:"card-chevron",children:L.chevronRight})]},u.id))})]})]})}function nf({bookings:e,setPage:t,setSelectedBooking:n,searchTerm:r,setSearchTerm:l,statusFilter:o,setStatusFilter:a,categoryFilter:s,setCategoryFilter:u,categories:c}){const m=c||Go,g=e.filter(f=>{const y=!r||f.name.toLowerCase().includes(r.toLowerCase())||f.org.toLowerCase().includes(r.toLowerCase())||f.service.toLowerCase().includes(r.toLowerCase()),v=o==="all"||f.status===o,k=s==="all"||f.category===s;return y&&v&&k});return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Consultation Bookings"}),i.jsx("p",{children:"Manage requests for proposals and consultation appointments"})]}),i.jsxs("div",{className:"search-bar",children:[i.jsx("span",{className:"search-icon",children:L.search}),i.jsx("input",{placeholder:"Search by name, organization, or service...",value:r,onChange:f=>l(f.target.value)})]}),i.jsxs("div",{className:"section-header",children:[i.jsx("div",{className:"filters",children:["all","pending","approved","on-calendar","declined"].map(f=>i.jsx("button",{className:`filter-chip ${o===f?"active":""}`,onClick:()=>a(f),children:f==="all"?"All":f==="on-calendar"?"On Calendar":f.charAt(0).toUpperCase()+f.slice(1)},f))}),i.jsx("div",{className:"filters",children:["all",...m].map(f=>i.jsx("button",{className:`filter-chip ${s===f?"active":""}`,onClick:()=>u(f),children:f==="all"?"All Sectors":f},f))})]}),i.jsx("div",{className:"card-list",children:g.length===0?i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"No bookings match your filters."})}):g.map(f=>i.jsxs("div",{className:"list-card",onClick:()=>{n(f.id),t("booking-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:xl(f.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:f.name}),i.jsxs("span",{className:"card-date",children:[f.time," · ",rt(f.date)]})]}),i.jsxs("div",{className:"card-preview",children:[f.service," — ",f.org]}),i.jsxs("div",{className:"card-tags",children:[i.jsx("span",{className:`tag tag-${f.category.toLowerCase()}`,children:f.category}),i.jsx("span",{className:`status-badge status-${f.status}`,children:f.status==="on-calendar"?"On Calendar":f.status})]})]}),i.jsx("span",{className:"card-chevron",children:L.chevronRight})]},f.id))})]})}function rf({booking:e,onBack:t,onUpdateStatus:n,onAddToCalendar:r,onDelete:l,addToast:o}){if(!e)return null;const a=u=>{n(e.id,u),o({message:`Booking ${u==="approved"?"approved":u==="declined"?"declined":"updated"} — ${e.name}`,type:"success"})},s=async()=>{window.confirm(`Permanently delete this booking from ${e.name}? This cannot be undone.`)&&(await l(e.id),t())};return i.jsxs("div",{className:"detail-view",children:[i.jsxs("button",{className:"detail-back",onClick:t,children:[L.back," Back to Bookings"]}),i.jsxs("div",{className:"detail-card",children:[i.jsxs("div",{className:"detail-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"detail-name",children:e.name}),i.jsx("div",{className:"detail-org",children:e.org})]}),i.jsx("span",{className:`status-badge status-${e.status}`,children:e.status==="on-calendar"?"On Calendar":e.status})]}),i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Service Requested"}),i.jsx("span",{children:e.service})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Sector"}),i.jsx("span",{className:`tag tag-${e.category.toLowerCase()}`,children:e.category})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Consultation Date"}),i.jsxs("span",{children:[rt(e.date)," at ",e.time]})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Submitted"}),i.jsx("span",{children:rt(e.submittedAt)})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Email"}),i.jsx("a",{href:`mailto:${e.email}`,children:e.email})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("a",{href:`tel:${e.phone}`,children:e.phone})]})]}),i.jsxs("div",{className:"detail-message",children:[i.jsx("label",{children:"Message"}),i.jsx("p",{children:e.message})]}),i.jsxs("div",{className:"detail-status-select",children:[i.jsx("label",{children:"Status:"}),i.jsxs("select",{value:e.status,onChange:u=>a(u.target.value),children:[i.jsx("option",{value:"pending",children:"Pending"}),i.jsx("option",{value:"approved",children:"Approved"}),i.jsx("option",{value:"declined",children:"Declined"}),i.jsx("option",{value:"on-calendar",children:"On Calendar"}),i.jsx("option",{value:"archived",children:"Archived"})]})]}),i.jsxs("div",{className:"detail-actions",children:[e.status==="pending"&&i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"btn-action btn-approve",onClick:()=>a("approved"),children:[L.check," Approve"]}),i.jsxs("button",{className:"btn-action btn-decline",onClick:()=>a("declined"),children:[L.x," Decline"]})]}),e.status==="approved"&&i.jsxs("button",{className:"btn-action btn-calendar",onClick:()=>{r(e.id),o({message:`Added to calendar — ${e.name}, ${rt(e.date)}`,type:"info"})},children:[L.calendarPlus," Add to Calendar"]}),e.status==="on-calendar"&&i.jsxs("span",{style:{fontSize:13,color:"var(--purple)",display:"flex",alignItems:"center",gap:6},children:[L.check," On your calendar"]}),i.jsxs("a",{href:`mailto:${e.email}`,className:"btn-action",style:{background:"var(--accent-dim)",color:"var(--accent)",textDecoration:"none"},children:[L.mail," Email Client"]}),i.jsxs("a",{href:`tel:${e.phone}`,className:"btn-action",style:{background:"rgba(255,255,255,0.06)",color:"var(--text-secondary)",textDecoration:"none"},children:[L.phone," Call"]}),e.status!=="archived"&&i.jsxs("button",{className:"btn-action btn-archive",onClick:()=>a("archived"),children:[L.archive," Archive"]}),i.jsxs("button",{className:"btn-action btn-delete",onClick:s,children:[L.trash," Delete"]})]})]})]})}function lf({contacts:e,setPage:t,setSelectedContact:n,searchTerm:r,setSearchTerm:l,contactStatusFilter:o,setContactStatusFilter:a}){const s=e.filter(u=>{const c=!r||u.name.toLowerCase().includes(r.toLowerCase())||u.subject.toLowerCase().includes(r.toLowerCase()),m=o==="all"||u.status===o;return c&&m});return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Contact Inbox"}),i.jsx("p",{children:"Messages from the website contact form"})]}),i.jsxs("div",{className:"search-bar",children:[i.jsx("span",{className:"search-icon",children:L.search}),i.jsx("input",{placeholder:"Search by name or subject...",value:r,onChange:u=>l(u.target.value)})]}),i.jsx("div",{className:"section-header",children:i.jsx("div",{className:"filters",children:["all","new","replied","archived"].map(u=>i.jsx("button",{className:`filter-chip ${o===u?"active":""}`,onClick:()=>a(u),children:u==="all"?"All":u.charAt(0).toUpperCase()+u.slice(1)},u))})}),i.jsx("div",{className:"card-list",children:s.length===0?i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"No messages match your filters."})}):s.map(u=>i.jsxs("div",{className:"list-card",onClick:()=>{n(u.id),t("contact-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:xl(u.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:u.name}),i.jsx("span",{className:"card-date",children:rt(u.submittedAt)})]}),i.jsx("div",{className:"card-preview",children:u.subject}),i.jsxs("div",{className:"card-tags",children:[i.jsx("span",{className:`tag tag-${u.category.toLowerCase()}`,children:u.category}),i.jsx("span",{className:`status-badge status-${u.status}`,children:u.status})]})]}),i.jsx("span",{className:"card-chevron",children:L.chevronRight})]},u.id))})]})}function of({contact:e,onBack:t,onUpdateStatus:n,onDelete:r,addToast:l}){if(!e)return null;const o=s=>{n(e.id,s),l({message:`Marked as ${s} — ${e.name}`,type:"success"})},a=async()=>{window.confirm(`Permanently delete this message from ${e.name}? This cannot be undone.`)&&(await r(e.id),t())};return i.jsxs("div",{className:"detail-view",children:[i.jsxs("button",{className:"detail-back",onClick:t,children:[L.back," Back to Inbox"]}),i.jsxs("div",{className:"detail-card",children:[i.jsxs("div",{className:"detail-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"detail-name",children:e.name}),i.jsx("div",{className:"detail-org",children:e.subject})]}),i.jsx("span",{className:`status-badge status-${e.status}`,children:e.status})]}),i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Sector"}),i.jsx("span",{className:`tag tag-${e.category.toLowerCase()}`,children:e.category})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Received"}),i.jsx("span",{children:rt(e.submittedAt)})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Email"}),i.jsx("a",{href:`mailto:${e.email}`,children:e.email})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("a",{href:`tel:${e.phone}`,children:e.phone})]})]}),i.jsxs("div",{className:"detail-message",children:[i.jsx("label",{children:"Message"}),i.jsx("p",{children:e.message})]}),i.jsxs("div",{className:"detail-status-select",children:[i.jsx("label",{children:"Status:"}),i.jsxs("select",{value:e.status,onChange:s=>o(s.target.value),children:[i.jsx("option",{value:"new",children:"New"}),i.jsx("option",{value:"replied",children:"Replied"}),i.jsx("option",{value:"archived",children:"Archived"})]})]}),i.jsxs("div",{className:"detail-actions",children:[e.status==="new"&&i.jsxs("button",{className:"btn-action btn-approve",onClick:()=>o("replied"),children:[L.check," Mark as Replied"]}),i.jsxs("a",{href:`mailto:${e.email}`,className:"btn-action",style:{background:"var(--accent-dim)",color:"var(--accent)",textDecoration:"none"},children:[L.mail," Email Client"]}),i.jsxs("a",{href:`tel:${e.phone}`,className:"btn-action",style:{background:"rgba(255,255,255,0.06)",color:"var(--text-secondary)",textDecoration:"none"},children:[L.phone," Call"]}),e.status!=="archived"&&i.jsxs("button",{className:"btn-action btn-archive",onClick:()=>o("archived"),children:[L.archive," Archive"]}),i.jsxs("button",{className:"btn-action btn-delete",onClick:a,children:[L.trash," Delete"]})]})]})]})}function af({bookings:e,setPage:t,setSelectedBooking:n}){const[r,l]=_.useState(0),[o,a]=_.useState(null),s=new Date;s.setHours(0,0,0,0);const u=s.toISOString().split("T")[0],c=new Date(s.getFullYear(),s.getMonth()+r,1),m=c.getFullYear(),g=c.getMonth(),f=c.toLocaleString("en-US",{month:"long",year:"numeric"}),y=new Date(m,g,1).getDay(),v=new Date(m,g+1,0).getDate(),k=new Date(m,g,0).getDate(),b=[];for(let x=y-1;x>=0;x--)b.push({day:k-x,otherMonth:!0,dateStr:null});for(let x=1;x<=v;x++){const N=`${m}-${String(g+1).padStart(2,"0")}-${String(x).padStart(2,"0")}`;b.push({day:x,otherMonth:!1,dateStr:N})}for(;b.length<42;)b.push({day:b.length-y-v+1,otherMonth:!0,dateStr:null});const p=e.filter(x=>x.status==="approved"||x.status==="on-calendar"),d=x=>p.filter(N=>N.date===x).sort((N,M)=>(N.time||"").localeCompare(M.time||"")),h=p.filter(x=>x.date>=u).sort((x,N)=>x.date.localeCompare(N.date)||(x.time||"").localeCompare(N.time||"")),w=o?d(o):null,C=x=>{x.otherMonth||a(N=>N===x.dateStr?null:x.dateStr)},z=x=>{l(N=>N+x),a(null)};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Calendar"}),i.jsx("p",{children:"Your approved consultations and scheduled appointments"})]}),i.jsxs("div",{className:`cal-layout${o?" day-selected":""}`,children:[i.jsxs("div",{className:"cal-left",children:[i.jsxs("div",{className:"cal-nav",children:[i.jsx("span",{className:"cal-month",children:f}),i.jsxs("div",{className:"cal-nav-btns",children:[i.jsx("button",{className:"cal-nav-btn cal-nav-icon",onClick:()=>z(-1),title:"Previous month",children:L.back}),i.jsx("button",{className:"cal-nav-btn",onClick:()=>{l(0),a(null)},children:"Today"}),i.jsx("button",{className:"cal-nav-btn cal-nav-icon",onClick:()=>z(1),title:"Next month",children:L.chevronRight})]})]}),i.jsxs("div",{className:"cal-grid",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>i.jsx("div",{className:"cal-header-cell",children:x},x)),b.map((x,N)=>{const M=x.dateStr?d(x.dateStr):[],F=x.dateStr===u,pe=x.dateStr&&x.dateStr===o;return i.jsxs("div",{className:`cal-cell${x.otherMonth?" other-month":""}${F?" today":""}${pe?" selected":""}`,onClick:()=>C(x),children:[i.jsx("div",{className:"cal-day-num",children:x.day}),!x.otherMonth&&M.slice(0,2).map(q=>i.jsxs("div",{className:`cal-event${q.status==="on-calendar"?" on-cal":""}`,onClick:Ge=>{Ge.stopPropagation(),n(q.id),t("booking-detail")},title:`${q.name} — ${q.service}`,children:[q.time?rn(q.time)+" ":"",q.name.split(" ")[0]]},q.id)),!x.otherMonth&&M.length>2&&i.jsxs("div",{className:"cal-event-more",children:["+",M.length-2," more"]}),!x.otherMonth&&M.length>0&&i.jsx("div",{className:"cal-dots",children:M.map(q=>i.jsx("div",{className:`cal-dot ${q.status==="on-calendar"?"purple":"green"}`},q.id))})]},N)})]}),i.jsxs("div",{className:"cal-legend",children:[i.jsxs("div",{className:"cal-legend-item",children:[i.jsx("div",{className:"cal-legend-dot green"}),"Approved"]}),i.jsxs("div",{className:"cal-legend-item",children:[i.jsx("div",{className:"cal-legend-dot purple"}),"On Calendar"]})]})]}),i.jsx("div",{className:"cal-right",children:i.jsx("div",{className:"cal-panel",children:o&&w?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"cal-panel-header",children:[i.jsx("div",{className:"cal-panel-title",children:Kr(o)}),i.jsx("button",{className:"cal-panel-close",onClick:()=>a(null),title:"Close",children:L.x})]}),w.length===0?i.jsxs("div",{className:"cal-panel-empty",children:["No bookings on this day.",i.jsx("br",{}),"Click any other day to view its events."]}):w.map(x=>i.jsxs("div",{className:"cal-panel-event",onClick:()=>{n(x.id),t("booking-detail")},children:[i.jsx("div",{className:"cal-panel-event-time",children:rn(x.time)||"Time TBD"}),i.jsx("div",{className:"cal-panel-event-name",children:x.name}),i.jsx("div",{className:"cal-panel-event-service",children:x.service}),i.jsx("div",{className:"cal-panel-event-org",children:x.org}),i.jsx("span",{className:`status-badge status-${x.status}`,style:{marginTop:8,display:"inline-block"},children:x.status==="on-calendar"?"On Calendar":"Approved"})]},x.id))]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cal-panel-title",style:{marginBottom:16},children:"Upcoming"}),h.length===0?i.jsxs("div",{className:"cal-panel-empty",children:["No upcoming consultations.",i.jsx("br",{}),"Approve bookings to see them here."]}):h.slice(0,12).map(x=>{const N=new Date(x.date+"T00:00:00").toLocaleString("en-US",{month:"short"}),M=Number(x.date.split("-")[2]);return i.jsxs("div",{className:"cal-upcoming-item",onClick:()=>{n(x.id),t("booking-detail")},children:[i.jsxs("div",{className:"cal-upcoming-badge",children:[i.jsx("div",{className:"cal-upcoming-badge-month",children:N}),i.jsx("div",{className:"cal-upcoming-badge-day",children:M})]}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{className:"cal-upcoming-name",children:x.name}),i.jsxs("div",{className:"cal-upcoming-meta",children:[rn(x.time)||x.time," · ",x.service]}),i.jsx("span",{className:`status-badge status-${x.status}`,style:{marginTop:4,display:"inline-block"},children:x.status==="on-calendar"?"On Calendar":"Approved"})]}),i.jsx("span",{style:{color:"var(--text-muted)",flexShrink:0},children:L.chevronRight})]},x.id)})]})})}),i.jsxs("div",{className:"cal-mobile-upcoming",children:[i.jsx("div",{className:"section-title",style:{marginBottom:12},children:"Upcoming Consultations"}),h.length===0?i.jsx("div",{className:"cal-panel-empty",style:{textAlign:"center",padding:"24px 0"},children:"No upcoming approved consultations."}):i.jsx("div",{className:"card-list",children:h.map(x=>i.jsxs("div",{className:"list-card",onClick:()=>{n(x.id),t("booking-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:x.status==="on-calendar"?"var(--purple)":"var(--green)"}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:x.name}),i.jsx("span",{className:"card-date",children:rn(x.time)||x.time})]}),i.jsxs("div",{className:"card-preview",children:[x.service," — ",rt(x.date)]}),i.jsx("div",{className:"card-tags",children:i.jsx("span",{className:`status-badge status-${x.status}`,children:x.status==="on-calendar"?"On Calendar":"Approved"})})]}),i.jsx("span",{className:"card-chevron",children:L.chevronRight})]},x.id))})]})]})]})}function sf(e,t,n){if(!e||!t||!n)return[];const[r,l]=e.split(":").map(Number),[o,a]=t.split(":").map(Number),s=r*60+l,u=o*60+a;if(u<=s)return[];const c=[];for(let m=s;m+n<=u;m+=n){const g=Math.floor(m/60),f=m%60;c.push(`${String(g).padStart(2,"0")}:${String(f).padStart(2,"0")}`)}return c}function uf({slots:e,setSlots:t,addToast:n,setPage:r,setSelectedBooking:l}){const o=new Date().toISOString().split("T")[0],[a,s]=_.useState({date:"",fromTime:"09:00",toTime:"17:00",durationMinutes:60,label:""}),[u,c]=_.useState(!1),m=sf(a.fromTime,a.toTime,Number(a.durationMinutes)),g=a.date&&m.length>0,f=async()=>{if(!g){n({message:"Please fill in the date and a valid time range.",type:"error"});return}c(!0);try{const b=await W.createSlotRange({date:a.date,fromTime:a.fromTime,toTime:a.toTime,durationMinutes:Number(a.durationMinutes),label:a.label}),p=await W.getAvailability();t(p);const d=b.total-b.count,h=d>0?`${b.count} slots opened for ${Kr(a.date)} (${d} already existed)`:`${b.count} slots opened for ${Kr(a.date)}`;n({message:h}),s(w=>({...w,date:""}))}catch{n({message:"Could not open those slots. Please try again.",type:"error"})}finally{c(!1)}},y=async b=>{try{await W.deleteSlot(b),t(p=>p.filter(d=>d.id!==b)),n({message:"Slot removed"})}catch(p){const d=(p==null?void 0:p.message)||"";d.includes("409")||d.toLowerCase().includes("booked")?n({message:"This slot has already been booked and cannot be removed.",type:"error"}):n({message:"Could not remove that slot. Please try again.",type:"error"})}},v=e.reduce((b,p)=>((b[p.date]=b[p.date]||[]).push(p),b),{}),k=Object.keys(v).sort();return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Availability"}),i.jsx("p",{children:"Control when clients can book a session with you."})]}),i.jsxs("div",{className:"avail-intro",children:[i.jsx("strong",{children:"How this works:"})," Pick a day and the hours you're free. We'll automatically create one bookable time slot for every session in that window. Those open slots will appear on your website for clients to choose from — when someone books one, it shows up here as a new booking."]}),i.jsxs("div",{className:"avail-form-card",children:[i.jsx("h3",{children:"Open Up a Day"}),i.jsx("p",{className:"avail-section-hint",children:"Tell us the date and the hours you're available. We'll take care of splitting it into individual appointment slots."}),i.jsxs("div",{className:"avail-form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"What day are you available?"}),i.jsx("input",{type:"date",min:o,value:a.date,onChange:b=>s(p=>({...p,date:b.target.value}))})]}),i.jsxs("div",{className:"avail-form-inline",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Available from"}),i.jsx("input",{type:"time",value:a.fromTime,onChange:b=>s(p=>({...p,fromTime:b.target.value}))}),i.jsx("div",{className:"avail-field-hint",children:"The earliest you can start a session"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Available until"}),i.jsx("input",{type:"time",value:a.toTime,onChange:b=>s(p=>({...p,toTime:b.target.value}))}),i.jsx("div",{className:"avail-field-hint",children:"The latest a session should end"})]})]}),i.jsxs("div",{className:"avail-form-inline",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"How long is each session?"}),i.jsxs("select",{value:a.durationMinutes,onChange:b=>s(p=>({...p,durationMinutes:Number(b.target.value)})),children:[i.jsx("option",{value:30,children:"30 minutes"}),i.jsx("option",{value:60,children:"60 minutes (1 hour)"}),i.jsx("option",{value:90,children:"90 minutes (1.5 hours)"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Add a note (optional)"}),i.jsx("input",{type:"text",placeholder:"e.g. Leadership coaching only",maxLength:100,value:a.label,onChange:b=>s(p=>({...p,label:b.target.value}))})]})]}),a.fromTime&&a.toTime&&m.length>0&&i.jsxs("div",{className:"avail-preview",children:[i.jsxs("strong",{children:[m.length," session",m.length!==1?"s":""," will open:"]})," ",m.map(rn).join("  ·  ")]}),a.fromTime&&a.toTime&&m.length===0&&i.jsxs("div",{className:"avail-preview",style:{borderColor:"var(--red)",background:"var(--red-dim)"},children:["The time range is too short for even one session at ",a.durationMinutes," minutes. Try a wider window or shorter session length."]}),i.jsx("button",{className:"btn-primary",onClick:f,disabled:u||!g,children:u?"Opening slots…":`Open ${m.length>0?m.length+" slot"+(m.length!==1?"s":""):"Slots"}`})]})]}),k.length===0?i.jsxs("div",{className:"avail-empty",children:[i.jsx("div",{className:"avail-empty-icon",children:L.calendar}),i.jsx("strong",{children:"No open slots yet"}),i.jsxs("p",{children:["Use the form above to pick a day and open your available hours.",i.jsx("br",{}),"Your clients will see those times on the website and can book directly."]})]}):k.map(b=>i.jsxs("div",{className:"avail-date-group",children:[i.jsx("div",{className:"avail-date-header",children:Kr(b)}),v[b].map(p=>i.jsxs("div",{className:"avail-slot-row",children:[i.jsx("span",{className:"avail-slot-time",children:rn(p.startTime)}),i.jsxs("span",{className:"avail-slot-duration",children:[p.durationMinutes," min"]}),i.jsx("span",{className:"avail-slot-label",children:p.label||""}),p.isBooked?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"status-badge status-approved",style:{flexShrink:0},children:"Booked"}),p.bookedBy&&i.jsxs("span",{className:"avail-slot-booked-by",onClick:()=>{l(p.bookingId),r("booking-detail")},children:[p.bookedBy," →"]})]}):i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"status-badge status-new",style:{flexShrink:0},children:"Open"}),i.jsx("span",{style:{flex:1}}),i.jsx("button",{className:"btn-slot-delete",onClick:()=>y(p.id),title:"Remove this slot",children:L.trash})]})]},p.id))]},b))]})}const cf=[{id:"auto",label:"Auto",swatch:{header:"#141820",sidebar:"#141820",content:"#0C0F14",card:"#1A1F2B",accent:"#C8A84E"}},{id:"dark",label:"Dark",swatch:{header:"#141820",sidebar:"#141820",content:"#0C0F14",card:"#1A1F2B",accent:"#C8A84E"}},{id:"light",label:"Light",swatch:{header:"#FFFFFF",sidebar:"#FFFFFF",content:"#F0F2F7",card:"#FFFFFF",accent:"#A8862A"}},{id:"alpha-psi-phi",label:"Alpha Ψ Φ",swatch:{header:"#180B33",sidebar:"#180B33",content:"#0F0720",card:"#1F1040",accent:"#D4AF37"}}];function df({addToast:e,appConfig:t}){const[n,r]=_.useState(""),[l,o]=_.useState(""),[a,s]=_.useState(""),[u,c]=_.useState(!1),m=async f=>{if(f.preventDefault(),!n){e({message:"Current password is required",type:"error"});return}if(l.length<8){e({message:"New password must be at least 8 characters",type:"error"});return}if(l!==a){e({message:"New passwords don't match",type:"error"});return}c(!0);try{await W.changePassword(n,l),e({message:"Password updated successfully"}),r(""),o(""),s("")}catch(y){const v=((y==null?void 0:y.message)||"").includes("401")||((y==null?void 0:y.message)||"").toLowerCase().includes("incorrect")?"Current password is incorrect":"Failed to update password. Please try again.";e({message:v,type:"error"})}finally{c(!1)}},g=(t==null?void 0:t.support_email)||"support@armvet.com";return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Settings"}),i.jsx("p",{children:"Manage your account preferences"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Change Password"}),i.jsx("p",{className:"settings-desc",children:"Update your admin login password. Once changed, use the new password to log in. Must be at least 8 characters."}),i.jsxs("form",{className:"settings-form",onSubmit:m,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Current Password"}),i.jsx("input",{type:"password",className:"form-input",value:n,onChange:f=>r(f.target.value),autoComplete:"current-password",placeholder:"Enter your current password"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"New Password"}),i.jsx("input",{type:"password",className:"form-input",value:l,onChange:f=>o(f.target.value),autoComplete:"new-password",placeholder:"At least 8 characters"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Confirm New Password"}),i.jsx("input",{type:"password",className:"form-input",value:a,onChange:f=>s(f.target.value),autoComplete:"new-password",placeholder:"Repeat your new password"})]}),i.jsx("button",{type:"submit",className:"btn-primary",disabled:u,children:u?"Saving...":"Update Password"})]})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"About"}),i.jsxs("div",{className:"settings-info-row",children:[i.jsx("span",{className:"settings-info-label",children:"Platform"}),i.jsx("span",{className:"settings-info-value",children:"Armvet Admin Portal"})]}),i.jsxs("div",{className:"settings-info-row",children:[i.jsx("span",{className:"settings-info-label",children:"Version"}),i.jsx("span",{className:"settings-info-value",children:"1.0.0"})]}),i.jsxs("div",{className:"settings-info-row",children:[i.jsx("span",{className:"settings-info-label",children:"Support"}),i.jsx("a",{href:`mailto:${g}`,style:{color:"var(--accent)",fontSize:14},children:g})]})]})]})}function dn({items:e,onChange:t,placeholder:n,validateItem:r}){const[l,o]=_.useState(""),a=()=>{const s=l.trim();if(s){if(r){const u=r(s);if(u){alert(u);return}}e.includes(s)||t([...e,s]),o("")}};return i.jsxs("div",{className:"wizard-list-editor",children:[i.jsxs("div",{className:"wizard-pills",children:[e.map(s=>i.jsxs("div",{className:"wizard-pill",children:[i.jsx("span",{children:s}),i.jsx("button",{className:"wizard-pill-remove",onClick:()=>t(e.filter(u=>u!==s)),children:L.x})]},s)),e.length===0&&i.jsx("span",{style:{fontSize:13,color:"var(--text-muted)"},children:"No items yet."})]}),i.jsxs("div",{className:"wizard-add-row",children:[i.jsx("input",{className:"form-input",placeholder:n||"Add item...",value:l,onChange:s=>o(s.target.value),onKeyDown:s=>s.key==="Enter"&&(s.preventDefault(),a())}),i.jsxs("button",{className:"wizard-add-btn",onClick:a,children:[L.plus," Add"]})]})]})}const Fn=["Welcome","Logo","Services","Categories","Contact Info","Allowed Origins","Review & Finish"];function pf({onComplete:e,onSkip:t,addToast:n}){const[r,l]=_.useState(0),[o,a]=_.useState(!1),[s,u]=_.useState({company_name:"Armvet",company_tagline:"",company_logo:"",services:[...kc],categories:[...Go],support_email:"",company_website:"",company_phone:"",allowed_origins:[]}),c=(v,k)=>u(b=>({...b,[v]:k})),m=v=>{const k=v.target.files[0];if(!k)return;if(k.size>2*1024*1024){n({message:"Logo must be under 2MB",type:"error"});return}const b=new FileReader;b.onload=p=>c("company_logo",p.target.result),b.readAsDataURL(k)},g=async()=>{a(!0);try{await W.saveConfig({...s,setup_complete:"1"}),e()}catch{n({message:"Failed to save setup. Please try again.",type:"error"})}finally{a(!1)}},f=r===Fn.length-1;let y;return r===0?y=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("div",{className:"wizard-info-banner",children:"Welcome! Let's set up your admin portal in a few quick steps. You can always change these settings later under Customize in the sidebar."}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Company / Organization Name"}),i.jsx("input",{className:"form-input",value:s.company_name,onChange:v=>c("company_name",v.target.value),placeholder:"e.g. Armvet"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tagline (optional)"}),i.jsx("input",{className:"form-input",value:s.company_tagline,onChange:v=>c("company_tagline",v.target.value),placeholder:"e.g. Veteran-Led Leadership Solutions"})]})]}):r===1?y=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"Upload your logo. It will appear in the admin sidebar. Max 2MB (PNG, JPG, SVG)."}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Logo File"}),i.jsx("input",{type:"file",className:"form-input",accept:"image/*",onChange:m})]}),s.company_logo&&i.jsx("div",{className:"wizard-logo-preview",children:i.jsx("img",{src:s.company_logo,alt:"Logo preview"})})]}):r===2?y=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"These are the services you offer. They appear in booking forms for clients to choose from."}),i.jsx(dn,{items:s.services,onChange:v=>c("services",v),placeholder:"Add a service..."}),s.services.length===0&&i.jsx("div",{className:"wizard-info-banner",style:{marginTop:8},children:"At least one service is recommended for booking forms."})]}):r===3?y=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"Categories group your clients (e.g. Military, Federal, Corporate). Used in booking and contact filters."}),i.jsx(dn,{items:s.categories,onChange:v=>c("categories",v),placeholder:"Add a category..."})]}):r===4?y=i.jsxs("div",{className:"wizard-step-content",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Support Email"}),i.jsx("input",{className:"form-input",type:"email",value:s.support_email,onChange:v=>c("support_email",v.target.value),placeholder:"e.g. support@armvet.com"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Website URL (optional)"}),i.jsx("input",{className:"form-input",value:s.company_website,onChange:v=>c("company_website",v.target.value),placeholder:"e.g. https://armvet.com"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Phone (optional)"}),i.jsx("input",{className:"form-input",value:s.company_phone,onChange:v=>c("company_phone",v.target.value),placeholder:"e.g. +1 (555) 000-0000"})]})]}):r===5?y=i.jsxs("div",{className:"wizard-step-content",children:[i.jsxs("div",{className:"origins-info",children:[i.jsx("strong",{children:"CORS Allowed Origins"})," — Add the domain(s) of your public website that will use the booking/contact API. Example: ",i.jsx("code",{children:"https://armvet.onrender.com"}),". Changes take effect within 60 seconds."]}),i.jsx(dn,{items:s.allowed_origins,onChange:v=>c("allowed_origins",v),placeholder:"https://your-site.com",validateItem:v=>/^https?:\/\/.+/.test(v)?null:"Must be a valid URL starting with http:// or https://"})]}):r===6&&(y=i.jsxs("div",{className:"wizard-step-content",children:[i.jsxs("div",{className:"wizard-review-section",children:[i.jsx("div",{className:"wizard-review-label",children:"Company"}),i.jsxs("div",{className:"wizard-review-value",children:[s.company_name,s.company_tagline?` — ${s.company_tagline}`:""]})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsxs("div",{className:"wizard-review-label",children:["Services (",s.services.length,")"]}),i.jsx("div",{className:"wizard-review-value",children:s.services.join(", ")||"None"})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsxs("div",{className:"wizard-review-label",children:["Categories (",s.categories.length,")"]}),i.jsx("div",{className:"wizard-review-value",children:s.categories.join(", ")||"None"})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsx("div",{className:"wizard-review-label",children:"Contact"}),i.jsxs("div",{className:"wizard-review-value",children:[s.support_email||"Not set",s.company_website?` · ${s.company_website}`:""]})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsxs("div",{className:"wizard-review-label",children:["Allowed Origins (",s.allowed_origins.length,")"]}),i.jsx("div",{className:"wizard-review-value",children:s.allowed_origins.join(", ")||"None"})]})]})),i.jsx("div",{className:"tutorial-overlay",children:i.jsxs("div",{className:"tutorial-card",style:{maxWidth:560,width:"100%"},children:[i.jsxs("div",{className:"tutorial-step-num",children:["Step ",r+1," of ",Fn.length," — ",Fn[r]]}),i.jsx("div",{className:"tutorial-title",style:{marginBottom:20,textAlign:"left"},children:r===0?`Welcome to ${s.company_name||"Your Portal"}`:Fn[r]}),y,i.jsx("div",{className:"tutorial-dots",style:{marginTop:24},children:Fn.map((v,k)=>i.jsx("div",{className:`tutorial-dot${k===r?" active":""}`},k))}),i.jsxs("div",{className:"tutorial-btn-row",children:[i.jsxs("div",{style:{display:"flex",gap:10,width:"100%"},children:[r>0&&i.jsx("button",{className:"tutorial-next",style:{background:"var(--bg-input)",color:"var(--text-primary)",border:"1px solid var(--border)",flex:"0 0 auto",width:"auto",padding:"14px 20px"},onClick:()=>l(v=>v-1),children:"← Back"}),i.jsx("button",{className:"tutorial-next",style:{flex:1},onClick:f?g:()=>l(v=>v+1),disabled:o,children:f?o?"Saving...":"Finish Setup →":"Next →"})]}),i.jsx("button",{className:"wizard-skip-link",onClick:t,children:"Skip setup for now"})]})]})})}function ff({addToast:e}){const[t,n]=Jp();return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Appearance"}),i.jsx("p",{children:"Choose how the dashboard looks"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Theme"}),i.jsxs("p",{className:"settings-desc",children:["Choose how the dashboard looks. ",i.jsx("strong",{children:"Auto"})," follows your device's light or dark mode setting automatically."]}),i.jsx("div",{className:"theme-grid",children:cf.map(r=>i.jsxs("div",{className:`theme-option${t===r.id?" active":""}`,onClick:()=>n(r.id),children:[i.jsxs("div",{className:"theme-swatch",children:[i.jsxs("div",{className:"theme-swatch-header",style:{background:r.swatch.header,borderBottom:`2px solid ${r.swatch.accent}`},children:[i.jsx("div",{className:"theme-swatch-dot",style:{background:r.swatch.accent}}),i.jsx("div",{className:"theme-swatch-dot",style:{background:r.swatch.accent}})]}),i.jsxs("div",{className:"theme-swatch-body",style:{background:r.swatch.content},children:[i.jsx("div",{className:"theme-swatch-sidebar",style:{background:r.swatch.sidebar}}),i.jsxs("div",{className:"theme-swatch-content",children:[i.jsx("div",{className:"theme-swatch-card",style:{background:r.swatch.card}}),i.jsx("div",{className:"theme-swatch-card",style:{background:r.swatch.card}})]})]})]}),i.jsx("span",{className:"theme-label",children:r.label})]},r.id))})]})]})}function hf({appConfig:e,setAppConfig:t,addToast:n}){const[r,l]=_.useState((e==null?void 0:e.company_name)||""),[o,a]=_.useState((e==null?void 0:e.company_tagline)||""),[s,u]=_.useState((e==null?void 0:e.company_logo)||""),[c,m]=_.useState(!1),g=y=>{const v=y.target.files[0];if(!v)return;if(v.size>2*1024*1024){n({message:"Logo must be under 2MB",type:"error"});return}const k=new FileReader;k.onload=b=>u(b.target.result),k.readAsDataURL(v)},f=async()=>{m(!0);try{await W.saveConfig({company_name:r,company_tagline:o,company_logo:s}),t(y=>({...y,company_name:r,company_tagline:o,company_logo:s})),n({message:"Branding saved"})}catch{n({message:"Failed to save branding",type:"error"})}finally{m(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Branding"}),i.jsx("p",{children:"Set your company name, tagline, and logo"})]}),i.jsx("div",{className:"settings-section",children:i.jsxs("div",{className:"settings-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Company Name"}),i.jsx("input",{className:"form-input",value:r,onChange:y=>l(y.target.value),placeholder:"e.g. Armvet"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tagline"}),i.jsx("input",{className:"form-input",value:o,onChange:y=>a(y.target.value),placeholder:"e.g. Veteran-Led Leadership Solutions"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Logo (max 2MB)"}),i.jsx("input",{type:"file",className:"form-input",accept:"image/*",onChange:g}),s&&i.jsxs("div",{className:"logo-preview-wrap",children:[i.jsx("img",{src:s,alt:"Logo preview"}),i.jsx("button",{className:"logo-remove-btn",onClick:()=>u(""),children:"Remove"})]})]}),i.jsx("button",{className:"btn-primary",onClick:f,disabled:c,children:c?"Saving...":"Save Branding"})]})})]})}function mf({appConfig:e,setAppConfig:t,addToast:n}){const[r,l]=_.useState((e==null?void 0:e.services)||kc),[o,a]=_.useState(!1),s=async()=>{a(!0);try{await W.saveConfig({services:r}),t(u=>({...u,services:r})),n({message:"Services saved"})}catch{n({message:"Failed to save services",type:"error"})}finally{a(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Services"}),i.jsx("p",{children:"Manage the services available for booking requests"})]}),i.jsxs("div",{className:"settings-section",children:[r.length===0&&i.jsx("div",{className:"wizard-info-banner",style:{marginBottom:16},children:"At least one service is recommended for booking forms to work correctly."}),i.jsx(dn,{items:r,onChange:l,placeholder:"Add a service..."}),i.jsx("div",{className:"page-actions",style:{marginTop:20},children:i.jsx("button",{className:"btn-primary",onClick:s,disabled:o,children:o?"Saving...":"Save Services"})})]})]})}function gf({appConfig:e,setAppConfig:t,addToast:n}){const[r,l]=_.useState((e==null?void 0:e.categories)||Go),[o,a]=_.useState(!1),s=async()=>{a(!0);try{await W.saveConfig({categories:r}),t(u=>({...u,categories:r})),n({message:"Categories saved"})}catch{n({message:"Failed to save categories",type:"error"})}finally{a(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Categories"}),i.jsx("p",{children:"Manage the client sector categories (e.g. Military, Federal, Corporate)"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx(dn,{items:r,onChange:l,placeholder:"Add a category..."}),i.jsx("div",{className:"page-actions",style:{marginTop:20},children:i.jsx("button",{className:"btn-primary",onClick:s,disabled:o,children:o?"Saving...":"Save Categories"})})]})]})}function vf({appConfig:e,setAppConfig:t,addToast:n}){const[r,l]=_.useState((e==null?void 0:e.allowed_origins)||[]),[o,a]=_.useState(!1),s=async()=>{a(!0);try{await W.saveConfig({allowed_origins:r}),t(u=>({...u,allowed_origins:r})),n({message:"Allowed origins saved. Changes take effect within 60 seconds."})}catch{n({message:"Failed to save origins",type:"error"})}finally{a(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Allowed Origins"}),i.jsx("p",{children:"Control which domains can access the public API"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsxs("div",{className:"origins-info",children:[i.jsx("strong",{children:"CORS Allowed Origins"})," — Add the domain(s) of your public website that will call the booking/contact API. Example: ",i.jsx("code",{children:"https://armvet.onrender.com"}),". The dev origins (",i.jsx("code",{children:"localhost:3000"}),", ",i.jsx("code",{children:"localhost:5173"}),") are always allowed. Changes take effect within 60 seconds — no restart needed."]}),i.jsx(dn,{items:r,onChange:l,placeholder:"https://your-site.com",validateItem:u=>/^https?:\/\/.+/.test(u)?null:"Must be a valid URL starting with http:// or https://"}),i.jsx("div",{className:"page-actions",style:{marginTop:20},children:i.jsx("button",{className:"btn-primary",onClick:s,disabled:o,children:o?"Saving...":"Save Origins"})})]})]})}function xf({addToast:e}){const[t,n]=_.useState(null),[r,l]=_.useState(!0),[o,a]=_.useState("js"),[s,u]=_.useState(null);_.useEffect(()=>{W.getDocs().then(n).catch(()=>e({message:"Failed to load API docs",type:"error"})).finally(()=>l(!1))},[]);const c=f=>{navigator.clipboard.writeText(f).then(()=>e({message:"Copied to clipboard"}),()=>e({message:"Copy failed",type:"error"}))},m=()=>{if(!t)return;const f=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),y=URL.createObjectURL(f),v=document.createElement("a");v.href=y,v.download="api-docs.json",v.click(),URL.revokeObjectURL(y)};if(r)return i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"API Documentation"}),i.jsx("p",{children:"Loading..."})]});if(!t)return i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"API Documentation"}),i.jsx("p",{style:{color:"var(--red)"},children:"Failed to load documentation."})]});const g=f=>`api-docs-method-badge badge-${f.toLowerCase()}`;return i.jsxs("div",{children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{className:"api-docs-header",children:[i.jsxs("div",{children:[i.jsx("h2",{children:"API Documentation"}),i.jsxs("p",{className:"api-docs-generated",children:["Generated ",new Date(t.generatedAt).toLocaleString()]})]}),i.jsxs("button",{className:"api-docs-dl-btn",onClick:m,children:[L.download," Download JSON"]})]})}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Endpoints"}),i.jsxs("p",{className:"settings-desc",children:["Base URL: ",i.jsx("code",{children:t.baseUrl})]}),t.endpoints.map((f,y)=>i.jsxs("div",{className:"api-docs-endpoint",children:[i.jsxs("div",{className:"api-docs-endpoint-header",onClick:()=>u(s===y?null:y),children:[i.jsx("span",{className:g(f.method),children:f.method}),i.jsx("span",{className:"api-docs-path",children:f.path}),i.jsx("span",{className:"api-docs-desc",children:f.description})]}),s===y&&i.jsxs("div",{className:"api-docs-endpoint-body",children:[i.jsxs("p",{style:{fontSize:13,color:"var(--text-secondary)",marginTop:12},children:[i.jsx("strong",{children:"Auth:"})," ",f.auth]}),f.request&&i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:12,fontWeight:700},children:"REQUEST BODY"}),i.jsx("pre",{className:"api-docs-code-block",children:JSON.stringify(f.request,null,2)})]}),f.response&&i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:12,fontWeight:700},children:"RESPONSE"}),i.jsx("pre",{className:"api-docs-code-block",children:JSON.stringify(f.response,null,2)})]})]})]},y))]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Code Examples"}),i.jsx("div",{className:"api-docs-tabs",children:[{id:"js",label:"JavaScript"},{id:"contactFormHTML",label:"Contact Form HTML"},{id:"bookingFormHTML",label:"Booking Form HTML"}].map(f=>i.jsx("button",{className:`api-docs-tab${o===f.id?" active":""}`,onClick:()=>a(f.id),children:f.label},f.id))}),i.jsx("pre",{className:"api-docs-code-block",children:o==="js"?t.examples.jsSnippet:o==="contactFormHTML"?t.examples.contactFormHTML:t.examples.bookingFormHTML}),i.jsxs("button",{className:"api-docs-copy-btn",onClick:()=>c(o==="js"?t.examples.jsSnippet:o==="contactFormHTML"?t.examples.contactFormHTML:t.examples.bookingFormHTML),children:[L.copy," Copy"]})]})]})}const Dr=[{iconKey:"home",title:"Welcome to Your Dashboard",body:"This is your home base. At a glance you can see new booking requests, unread messages, and anything that needs your attention — all in one place."},{iconKey:"bookings",title:"Managing Bookings",body:"When someone on your website requests a consultation, it shows up here under Bookings. You can review the details, approve or decline the request, and add approved sessions to your calendar."},{iconKey:"inbox",title:"Your Inbox",body:"General messages and inquiries from the website land here. You can mark them as replied or archive them once you've followed up."},{iconKey:"clock",title:"Setting Your Availability",body:"This is how clients book sessions with you. Go to the Availability page, pick a day and your available hours, and we'll create the open time slots automatically. Clients see those slots on the website and choose a time."},{iconKey:"calendar",title:"Your Calendar",body:"Once you approve a booking and add it to your calendar, it shows up here. This gives you a clear view of your upcoming consultation schedule."},{iconKey:"mobile",title:"Install as an App",body:`You can add this dashboard to your phone or tablet's home screen so it opens like a regular app — no browser address bar, full screen.

iPhone/iPad: Tap the Share button (the box with an arrow), then tap "Add to Home Screen".

Android: Tap the three-dot menu in the top right, then tap "Add to Home Screen" or "Install App".`}];function yf({onDone:e}){const[t,n]=_.useState(0),r=Dr[t],l=t===Dr.length-1,o=()=>{l?e():n(s=>s+1)},a=async()=>{try{await W.completeTutorial()}catch{}e()};return i.jsx("div",{className:"tutorial-overlay",children:i.jsxs("div",{className:"tutorial-card",children:[i.jsx("div",{className:"tutorial-icon",children:L[r.iconKey]}),i.jsxs("div",{className:"tutorial-step-num",children:["Step ",t+1," of ",Dr.length]}),i.jsx("div",{className:"tutorial-title",children:r.title}),i.jsx("div",{className:"tutorial-body",style:{whiteSpace:"pre-line"},children:r.body}),i.jsx("div",{className:"tutorial-dots",children:Dr.map((s,u)=>i.jsx("div",{className:`tutorial-dot${u===t?" active":""}`},u))}),i.jsxs("div",{className:"tutorial-btn-row",children:[i.jsx("button",{className:"tutorial-next",onClick:o,children:l?"Got it, close →":"Next →"}),i.jsx("button",{className:"tutorial-no-show",onClick:a,children:"Don't show this again"})]})]})})}function wf({onLogin:e}){const[t,n]=_.useState(""),[r,l]=_.useState(""),[o,a]=_.useState(""),[s,u]=_.useState(!1),c=async()=>{if(!t||!r){a("Please enter username and password.");return}u(!0),a("");try{const m=await W.login(t,r);e(m.tutorialComplete===!1,m.setupComplete===!0)}catch{a("Invalid credentials. Please try again.")}finally{u(!1)}};return i.jsx("div",{className:"login-page",children:i.jsxs("div",{className:"login-box",children:[i.jsxs("div",{className:"login-logo",children:[i.jsx("h1",{children:"Armvet"}),i.jsx("p",{children:"Admin Portal"})]}),i.jsxs("div",{className:"login-card",children:[i.jsx("h2",{children:"Sign In"}),i.jsx("p",{className:"subtitle",children:"Access your consultation management dashboard"}),o&&i.jsx("div",{className:"login-error",children:o}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Username"}),i.jsx("input",{type:"text",placeholder:"Enter username",value:t,onChange:m=>{n(m.target.value),a("")},onKeyDown:m=>m.key==="Enter"&&c()})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Password"}),i.jsx("input",{type:"password",placeholder:"Enter password",value:r,onChange:m=>{l(m.target.value),a("")},onKeyDown:m=>m.key==="Enter"&&c()})]}),i.jsx("button",{className:"btn-primary",onClick:c,disabled:s,children:s?"Signing in…":"Sign In"})]})]})})}function kf(){const[e,t]=_.useState(W.hasToken()),[n,r]=_.useState(!1),[l,o]=_.useState(!1),[a,s]=_.useState(null),[u,c]=_.useState("dashboard"),[m,g]=_.useState([]),[f,y]=_.useState([]),[v,k]=_.useState([]),[b,p]=_.useState(null),[d,h]=_.useState(null),[w,C]=_.useState([]),[z,x]=_.useState(!1),[N,M]=_.useState(""),[F,pe]=_.useState("all"),[q,Ge]=_.useState("all"),[mr,Ml]=_.useState(""),[jn,Sn]=_.useState("all");_.useEffect(()=>{e&&(W.getBookings().then(g).catch(()=>{}),W.getContacts().then(y).catch(()=>{}),W.getAvailability().then(k).catch(()=>{}),W.getAdminConfig().then(s).catch(()=>{}))},[e]);const S=({message:Y,type:je="success"})=>{const We=Date.now();C(Me=>[...Me,{id:We,message:Y,type:je}]),setTimeout(()=>C(Me=>Me.filter(Sc=>Sc.id!==We)),3500)},P=async(Y,je)=>{try{await W.updateBookingStatus(Y,je),g(We=>We.map(Me=>Me.id===Y?{...Me,status:je}:Me))}catch{S({message:"Failed to update status",type:"error"})}},T=async Y=>{await P(Y,"on-calendar")},$=async(Y,je)=>{try{await W.updateContactStatus(Y,je),y(We=>We.map(Me=>Me.id===Y?{...Me,status:je}:Me))}catch{S({message:"Failed to update status",type:"error"})}},X=async Y=>{try{await W.deleteBooking(Y),g(je=>je.filter(We=>We.id!==Y)),S({message:"Booking deleted",type:"success"})}catch{S({message:"Failed to delete booking",type:"error"})}},Wt=async Y=>{try{await W.deleteContact(Y),y(je=>je.filter(We=>We.id!==Y)),S({message:"Message deleted",type:"success"})}catch{S({message:"Failed to delete message",type:"error"})}},Xe=()=>{W.logout(),t(!1),r(!1),o(!1),s(null),g([]),y([]),k([]),c("dashboard")},Nn=m.find(Y=>Y.id===b),Ze=f.find(Y=>Y.id===d);if(!e)return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:is}),i.jsx(wf,{onLogin:(Y,je)=>{t(!0),je?Y&&r(!0):o(!0)}})]});let Z;u==="dashboard"?Z=i.jsx(tf,{bookings:m,contacts:f,setPage:c,setSelectedBooking:p,setSelectedContact:h}):u==="bookings"?Z=i.jsx(nf,{bookings:m,setPage:c,setSelectedBooking:p,searchTerm:N,setSearchTerm:M,statusFilter:F,setStatusFilter:pe,categoryFilter:q,setCategoryFilter:Ge,categories:a==null?void 0:a.categories}):u==="booking-detail"?Z=i.jsx(rf,{booking:Nn,onBack:()=>c("bookings"),onUpdateStatus:P,onAddToCalendar:T,onDelete:X,addToast:S}):u==="contacts"?Z=i.jsx(lf,{contacts:f,setPage:c,setSelectedContact:h,searchTerm:mr,setSearchTerm:Ml,contactStatusFilter:jn,setContactStatusFilter:Sn}):u==="contact-detail"?Z=i.jsx(of,{contact:Ze,onBack:()=>c("contacts"),onUpdateStatus:$,onDelete:Wt,addToast:S}):u==="availability"?Z=i.jsx(uf,{slots:v,setSlots:k,addToast:S,setPage:c,setSelectedBooking:p}):u==="calendar"?Z=i.jsx(af,{bookings:m,setPage:c,setSelectedBooking:p}):u==="settings"?Z=i.jsx(df,{addToast:S,appConfig:a}):u==="customize-branding"?Z=i.jsx(hf,{appConfig:a,setAppConfig:s,addToast:S}):u==="customize-services"?Z=i.jsx(mf,{appConfig:a,setAppConfig:s,addToast:S}):u==="customize-categories"?Z=i.jsx(gf,{appConfig:a,setAppConfig:s,addToast:S}):u==="customize-appearance"?Z=i.jsx(ff,{addToast:S}):u==="advanced-origins"?Z=i.jsx(vf,{appConfig:a,setAppConfig:s,addToast:S}):u==="advanced-docs"&&(Z=i.jsx(xf,{addToast:S}));const jc=(a==null?void 0:a.company_name)||"Armvet";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:is}),i.jsxs("div",{className:"app-layout",children:[i.jsxs("div",{className:"mobile-header",children:[i.jsx("h1",{children:jc}),i.jsx("button",{className:"mobile-menu-btn",onClick:()=>x(!0),children:L.menu})]}),i.jsx(ef,{page:u,setPage:c,bookings:m,contacts:f,isOpen:z,onClose:()=>x(!1),onLogout:Xe,onShowTutorial:()=>r(!0),appConfig:a}),i.jsx("main",{className:"main-content",children:Z}),i.jsx(qp,{toasts:w}),l&&i.jsx(pf,{onComplete:()=>{o(!1),W.getAdminConfig().then(s).catch(()=>{})},onSkip:()=>o(!1),addToast:S}),!l&&n&&i.jsx(yf,{onDone:()=>r(!1)})]})]})}class jf extends _.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}render(){return this.state.error?i.jsxs("div",{style:{padding:40,fontFamily:"monospace",color:"#F87171",background:"#0C0F14",minHeight:"100vh"},children:[i.jsx("h2",{style:{color:"#C8A84E",marginBottom:16},children:"Something went wrong"}),i.jsx("pre",{style:{whiteSpace:"pre-wrap",fontSize:13},children:String(this.state.error)}),i.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:24,background:"#C8A84E",color:"#0C0F14",border:"none",padding:"10px 20px",borderRadius:8,fontWeight:700,cursor:"pointer"},children:"Reload"})]}):this.props.children}}xc(document.getElementById("root")).render(i.jsx(_.StrictMode,{children:i.jsx(jf,{children:i.jsx(kf,{})})}));
