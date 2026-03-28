(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var ho={exports:{}},ba={},go={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=Symbol.for("react.element"),Md=Symbol.for("react.portal"),Bd=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),$d=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Hd=Symbol.for("react.memo"),Vd=Symbol.for("react.lazy"),ns=Symbol.iterator;function Qd(e){return e===null||typeof e!="object"?null:(e=ns&&e[ns]||e["@@iterator"],typeof e=="function"?e:null)}var xo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vo=Object.assign,yo={};function Sn(e,t,n){this.props=e,this.context=t,this.refs=yo,this.updater=n||xo}Sn.prototype.isReactComponent={};Sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jo(){}jo.prototype=Sn.prototype;function ai(e,t,n){this.props=e,this.context=t,this.refs=yo,this.updater=n||xo}var li=ai.prototype=new jo;li.constructor=ai;vo(li,Sn.prototype);li.isPureReactComponent=!0;var rs=Array.isArray,wo=Object.prototype.hasOwnProperty,ii={current:null},ko={key:!0,ref:!0,__self:!0,__source:!0};function bo(e,t,n){var a,l={},i=null,s=null;if(t!=null)for(a in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)wo.call(t,a)&&!ko.hasOwnProperty(a)&&(l[a]=t[a]);var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){for(var o=Array(c),p=0;p<c;p++)o[p]=arguments[p+2];l.children=o}if(e&&e.defaultProps)for(a in c=e.defaultProps,c)l[a]===void 0&&(l[a]=c[a]);return{$$typeof:mr,type:e,key:i,ref:s,props:l,_owner:ii.current}}function Kd(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function si(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function Yd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var as=/\/+/g;function Oa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yd(""+e.key):t.toString(36)}function Or(e,t,n,a,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mr:case Md:s=!0}}if(s)return s=e,l=l(s),e=a===""?"."+Oa(s,0):a,rs(l)?(n="",e!=null&&(n=e.replace(as,"$&/")+"/"),Or(l,t,n,"",function(p){return p})):l!=null&&(si(l)&&(l=Kd(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(as,"$&/")+"/")+e)),t.push(l)),1;if(s=0,a=a===""?".":a+":",rs(e))for(var c=0;c<e.length;c++){i=e[c];var o=a+Oa(i,c);s+=Or(i,t,n,o,l)}else if(o=Qd(e),typeof o=="function")for(e=o.call(e),c=0;!(i=e.next()).done;)i=i.value,o=a+Oa(i,c++),s+=Or(i,t,n,o,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function jr(e,t,n){if(e==null)return e;var a=[],l=0;return Or(e,a,"","",function(i){return t.call(n,i,l++)}),a}function Gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Ir={transition:null},Xd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:ii};function No(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:jr,forEach:function(e,t,n){jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jr(e,function(){t++}),t},toArray:function(e){return jr(e,function(t){return t})||[]},only:function(e){if(!si(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Sn;I.Fragment=Bd;I.Profiler=Od;I.PureComponent=ai;I.StrictMode=Rd;I.Suspense=Ud;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;I.act=No;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=vo({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ii.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(o in t)wo.call(t,o)&&!ko.hasOwnProperty(o)&&(a[o]=t[o]===void 0&&c!==void 0?c[o]:t[o])}var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){c=Array(o);for(var p=0;p<o;p++)c[p]=arguments[p+2];a.children=c}return{$$typeof:mr,type:e.type,key:l,ref:i,props:a,_owner:s}};I.createContext=function(e){return e={$$typeof:$d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};I.createElement=bo;I.createFactory=function(e){var t=bo.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Wd,render:e}};I.isValidElement=si;I.lazy=function(e){return{$$typeof:Vd,_payload:{_status:-1,_result:e},_init:Gd}};I.memo=function(e,t){return{$$typeof:Hd,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};I.unstable_act=No;I.useCallback=function(e,t){return ge.current.useCallback(e,t)};I.useContext=function(e){return ge.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};I.useEffect=function(e,t){return ge.current.useEffect(e,t)};I.useId=function(){return ge.current.useId()};I.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return ge.current.useMemo(e,t)};I.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};I.useRef=function(e){return ge.current.useRef(e)};I.useState=function(e){return ge.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return ge.current.useTransition()};I.version="18.3.1";go.exports=I;var S=go.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=S,qd=Symbol.for("react.element"),Jd=Symbol.for("react.fragment"),eu=Object.prototype.hasOwnProperty,tu=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nu={key:!0,ref:!0,__self:!0,__source:!0};function So(e,t,n){var a,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)eu.call(t,a)&&!nu.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)l[a]===void 0&&(l[a]=t[a]);return{$$typeof:qd,type:e,key:i,ref:s,props:l,_owner:tu.current}}ba.Fragment=Jd;ba.jsx=So;ba.jsxs=So;ho.exports=ba;var r=ho.exports,Co={exports:{}},Te={},zo={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,B){var R=T.length;T.push(B);e:for(;0<R;){var G=R-1>>>1,M=T[G];if(0<l(M,B))T[G]=B,T[R]=M,R=G;else break e}}function n(T){return T.length===0?null:T[0]}function a(T){if(T.length===0)return null;var B=T[0],R=T.pop();if(R!==B){T[0]=R;e:for(var G=0,M=T.length,Dt=M>>>1;G<Dt;){var tt=2*(G+1)-1,En=T[tt],nt=tt+1,Yt=T[nt];if(0>l(En,R))nt<M&&0>l(Yt,En)?(T[G]=Yt,T[nt]=R,G=nt):(T[G]=En,T[tt]=R,G=tt);else if(nt<M&&0>l(Yt,R))T[G]=Yt,T[nt]=R,G=nt;else break e}}return B}function l(T,B){var R=T.sortIndex-B.sortIndex;return R!==0?R:T.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var o=[],p=[],g=1,j=null,h=3,y=!1,x=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var B=n(p);B!==null;){if(B.callback===null)a(p);else if(B.startTime<=T)a(p),B.sortIndex=B.expirationTime,t(o,B);else break;B=n(p)}}function b(T){if(w=!1,m(T),!x)if(n(o)!==null)x=!0,be(N);else{var B=n(p);B!==null&&Ne(b,B.startTime-T)}}function N(T,B){x=!1,w&&(w=!1,d(v),v=-1),y=!0;var R=h;try{for(m(B),j=n(o);j!==null&&(!(j.expirationTime>B)||T&&!D());){var G=j.callback;if(typeof G=="function"){j.callback=null,h=j.priorityLevel;var M=G(j.expirationTime<=B);B=e.unstable_now(),typeof M=="function"?j.callback=M:j===n(o)&&a(o),m(B)}else a(o);j=n(o)}if(j!==null)var Dt=!0;else{var tt=n(p);tt!==null&&Ne(b,tt.startTime-B),Dt=!1}return Dt}finally{j=null,h=R,y=!1}}var C=!1,f=null,v=-1,E=5,F=-1;function D(){return!(e.unstable_now()-F<E)}function Y(){if(f!==null){var T=e.unstable_now();F=T;var B=!0;try{B=f(!0,T)}finally{B?Oe():(C=!1,f=null)}}else C=!1}var Oe;if(typeof u=="function")Oe=function(){u(Y)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,P=et.port2;et.port1.onmessage=Y,Oe=function(){P.postMessage(null)}}else Oe=function(){k(Y,0)};function be(T){f=T,C||(C=!0,Oe())}function Ne(T,B){v=k(function(){T(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,be(N))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var R=h;h=B;try{return T()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,B){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=h;h=T;try{return B()}finally{h=R}},e.unstable_scheduleCallback=function(T,B,R){var G=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,T){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=R+M,T={id:g++,callback:B,priorityLevel:T,startTime:R,expirationTime:M,sortIndex:-1},R>G?(T.sortIndex=R,t(p,T),n(o)===null&&T===n(p)&&(w?(d(v),v=-1):w=!0,Ne(b,R-G))):(T.sortIndex=M,t(o,T),x||y||(x=!0,be(N))),T},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(T){var B=h;return function(){var R=h;h=B;try{return T.apply(this,arguments)}finally{h=R}}}})(Eo);zo.exports=Eo;var ru=zo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au=S,_e=ru;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _o=new Set,Zn={};function Qt(e,t){xn(e,t),xn(e+"Capture",t)}function xn(e,t){for(Zn[e]=t,e=0;e<t.length;e++)_o.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,lu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},is={};function iu(e){return pl.call(is,e)?!0:pl.call(ls,e)?!1:lu.test(e)?is[e]=!0:(ls[e]=!0,!1)}function su(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ou(e,t,n,a){if(t===null||typeof t>"u"||su(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,a,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var oi=/[\-:]([a-z])/g;function ci(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(oi,ci);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(oi,ci);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(oi,ci);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function di(e,t,n,a){var l=ce.hasOwnProperty(t)?ce[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ou(t,n,l,a)&&(n=null),a||l===null?iu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,a=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var pt=au.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),ui=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),To=Symbol.for("react.provider"),Lo=Symbol.for("react.context"),pi=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),fi=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Fo=Symbol.for("react.offscreen"),ss=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=ss&&e[ss]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ia;function Rn(e){if(Ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ia=t&&t[1]||""}return`
`+Ia+e}var $a=!1;function Wa(e,t){if(!e||$a)return"";$a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var a=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){a=p}e.call(t.prototype)}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=a.stack.split(`
`),s=l.length-1,c=i.length-1;1<=s&&0<=c&&l[s]!==i[c];)c--;for(;1<=s&&0<=c;s--,c--)if(l[s]!==i[c]){if(s!==1||c!==1)do if(s--,c--,0>c||l[s]!==i[c]){var o=`
`+l[s].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=s&&0<=c);break}}}finally{$a=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function cu(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Wa(e.type,!1),e;case 11:return e=Wa(e.type.render,!1),e;case 1:return e=Wa(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Xt:return"Portal";case fl:return"Profiler";case ui:return"StrictMode";case ml:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lo:return(e.displayName||"Context")+".Consumer";case To:return(e._context.displayName||"Context")+".Provider";case pi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fi:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function du(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===ui?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Do(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uu(e){var t=Do(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=uu(e))}function Po(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Do(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function os(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ao(e,t){t=t.checked,t!=null&&di(e,"checked",t,!1)}function vl(e,t){Ao(e,t);var n=Et(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function dn(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(On(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function Mo(e,t){var n=Et(t.value),a=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function us(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Ro=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pu=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(e){pu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wn[t]=Wn[e]})});function Oo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wn.hasOwnProperty(e)&&Wn[e]?(""+t).trim():t+"px"}function Io(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,l=Oo(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,l):e[n]=l}}var fu=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nl=null;function mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,un=null,pn=null;function ps(e){if(e=xr(e)){if(typeof Sl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Ea(t),Sl(e.stateNode,e.type,t))}}function $o(e){un?pn?pn.push(e):pn=[e]:un=e}function Wo(){if(un){var e=un,t=pn;if(pn=un=null,ps(e),t)for(e=0;e<t.length;e++)ps(t[e])}}function Uo(e,t){return e(t)}function Ho(){}var Ua=!1;function Vo(e,t,n){if(Ua)return e(t,n);Ua=!0;try{return Uo(e,t,n)}finally{Ua=!1,(un!==null||pn!==null)&&(Ho(),Wo())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var a=Ea(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Cl=!1;if(ot)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Cl=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Cl=!1}function mu(e,t,n,a,l,i,s,c,o){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(g){this.onError(g)}}var Un=!1,Jr=null,ea=!1,zl=null,hu={onError:function(e){Un=!0,Jr=e}};function gu(e,t,n,a,l,i,s,c,o){Un=!1,Jr=null,mu.apply(hu,arguments)}function xu(e,t,n,a,l,i,s,c,o){if(gu.apply(this,arguments),Un){if(Un){var p=Jr;Un=!1,Jr=null}else throw Error(z(198));ea||(ea=!0,zl=p)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fs(e){if(Kt(e)!==e)throw Error(z(188))}function vu(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return fs(l),e;if(i===a)return fs(l),t;i=i.sibling}throw Error(z(188))}if(n.return!==a.return)n=l,a=i;else{for(var s=!1,c=l.child;c;){if(c===n){s=!0,n=l,a=i;break}if(c===a){s=!0,a=l,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,a=l;break}if(c===a){s=!0,a=i,n=l;break}c=c.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==a)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Ko(e){return e=vu(e),e!==null?Yo(e):null}function Yo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yo(e);if(t!==null)return t;e=e.sibling}return null}var Go=_e.unstable_scheduleCallback,ms=_e.unstable_cancelCallback,yu=_e.unstable_shouldYield,ju=_e.unstable_requestPaint,te=_e.unstable_now,wu=_e.unstable_getCurrentPriorityLevel,hi=_e.unstable_ImmediatePriority,Xo=_e.unstable_UserBlockingPriority,ta=_e.unstable_NormalPriority,ku=_e.unstable_LowPriority,Zo=_e.unstable_IdlePriority,Na=null,qe=null;function bu(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Cu,Nu=Math.log,Su=Math.LN2;function Cu(e){return e>>>=0,e===0?32:31-(Nu(e)/Su|0)|0}var Nr=64,Sr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~l;c!==0?a=In(c):(i&=s,i!==0&&(a=In(i)))}else s=n&~l,s!==0?a=In(s):i!==0&&(a=In(i));if(a===0)return 0;if(t!==0&&t!==a&&!(t&l)&&(l=a&-a,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Ve(t),l=1<<n,a|=e[n],t&=~l;return a}function zu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eu(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Ve(i),c=1<<s,o=l[s];o===-1?(!(c&n)||c&a)&&(l[s]=zu(c,t)):o<=t&&(e.expiredLanes|=c),i&=~c}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qo(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function _u(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ve(n),i=1<<l;t[l]=0,a[l]=-1,e[l]=-1,n&=~i}}function gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ve(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}var W=0;function Jo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,xi,tc,nc,rc,_l=!1,Cr=[],jt=null,wt=null,kt=null,er=new Map,tr=new Map,gt=[],Tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hs(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tr.delete(t.pointerId)}}function Ln(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=xr(t),t!==null&&xi(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Lu(e,t,n,a,l){switch(t){case"focusin":return jt=Ln(jt,e,t,n,a,l),!0;case"dragenter":return wt=Ln(wt,e,t,n,a,l),!0;case"mouseover":return kt=Ln(kt,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return er.set(i,Ln(er.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,tr.set(i,Ln(tr.get(i)||null,e,t,n,a,l)),!0}return!1}function ac(e){var t=Mt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Qo(n),t!==null){e.blockedOn=t,rc(e.priority,function(){tc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Nl=a,n.target.dispatchEvent(a),Nl=null}else return t=xr(n),t!==null&&xi(t),e.blockedOn=n,!1;t.shift()}return!0}function gs(e,t,n){$r(e)&&n.delete(t)}function Fu(){_l=!1,jt!==null&&$r(jt)&&(jt=null),wt!==null&&$r(wt)&&(wt=null),kt!==null&&$r(kt)&&(kt=null),er.forEach(gs),tr.forEach(gs)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Fu)))}function nr(e){function t(l){return Fn(l,e)}if(0<Cr.length){Fn(Cr[0],e);for(var n=1;n<Cr.length;n++){var a=Cr[n];a.blockedOn===e&&(a.blockedOn=null)}}for(jt!==null&&Fn(jt,e),wt!==null&&Fn(wt,e),kt!==null&&Fn(kt,e),er.forEach(t),tr.forEach(t),n=0;n<gt.length;n++)a=gt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&gt.shift()}var fn=pt.ReactCurrentBatchConfig,ra=!0;function Du(e,t,n,a){var l=W,i=fn.transition;fn.transition=null;try{W=1,vi(e,t,n,a)}finally{W=l,fn.transition=i}}function Pu(e,t,n,a){var l=W,i=fn.transition;fn.transition=null;try{W=4,vi(e,t,n,a)}finally{W=l,fn.transition=i}}function vi(e,t,n,a){if(ra){var l=Tl(e,t,n,a);if(l===null)el(e,t,a,aa,n),hs(e,a);else if(Lu(l,e,t,n,a))a.stopPropagation();else if(hs(e,a),t&4&&-1<Tu.indexOf(e)){for(;l!==null;){var i=xr(l);if(i!==null&&ec(i),i=Tl(e,t,n,a),i===null&&el(e,t,a,aa,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else el(e,t,a,null,n)}}var aa=null;function Tl(e,t,n,a){if(aa=null,e=mi(a),e=Mt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return aa=e,null}function lc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case hi:return 1;case Xo:return 4;case ta:case ku:return 16;case Zo:return 536870912;default:return 16}default:return 16}}var vt=null,yi=null,Wr=null;function ic(){if(Wr)return Wr;var e,t=yi,n=t.length,a,l="value"in vt?vt.value:vt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===l[i-a];a++);return Wr=l.slice(e,1<a?1-a:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zr(){return!0}function xs(){return!1}function Le(e){function t(n,a,l,i,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?zr:xs,this.isPropagationStopped=xs,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=Le(Cn),gr=q({},Cn,{view:0,detail:0}),Au=Le(gr),Va,Qa,Dn,Sa=q({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(Va=e.screenX-Dn.screenX,Qa=e.screenY-Dn.screenY):Qa=Va=0,Dn=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:Qa}}),vs=Le(Sa),Mu=q({},Sa,{dataTransfer:0}),Bu=Le(Mu),Ru=q({},gr,{relatedTarget:0}),Ka=Le(Ru),Ou=q({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=Le(Ou),$u=q({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wu=Le($u),Uu=q({},Cn,{data:0}),ys=Le(Uu),Hu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ku(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qu[e])?!!t[e]:!1}function wi(){return Ku}var Yu=q({},gr,{key:function(e){if(e.key){var t=Hu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wi,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gu=Le(Yu),Xu=q({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),js=Le(Xu),Zu=q({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wi}),qu=Le(Zu),Ju=q({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=Le(Ju),tp=q({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),np=Le(tp),rp=[9,13,27,32],ki=ot&&"CompositionEvent"in window,Hn=null;ot&&"documentMode"in document&&(Hn=document.documentMode);var ap=ot&&"TextEvent"in window&&!Hn,sc=ot&&(!ki||Hn&&8<Hn&&11>=Hn),ws=" ",ks=!1;function oc(e,t){switch(e){case"keyup":return rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function lp(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(ks=!0,ws);case"textInput":return e=t.data,e===ws&&ks?null:e;default:return null}}function ip(e,t){if(qt)return e==="compositionend"||!ki&&oc(e,t)?(e=ic(),Wr=yi=vt=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sc&&t.locale!=="ko"?null:t.data;default:return null}}var sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sp[e.type]:t==="textarea"}function dc(e,t,n,a){$o(a),t=la(t,"onChange"),0<t.length&&(n=new ji("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Vn=null,rr=null;function op(e){wc(e,0)}function Ca(e){var t=tn(e);if(Po(t))return e}function cp(e,t){if(e==="change")return t}var uc=!1;if(ot){var Ya;if(ot){var Ga="oninput"in document;if(!Ga){var Ns=document.createElement("div");Ns.setAttribute("oninput","return;"),Ga=typeof Ns.oninput=="function"}Ya=Ga}else Ya=!1;uc=Ya&&(!document.documentMode||9<document.documentMode)}function Ss(){Vn&&(Vn.detachEvent("onpropertychange",pc),rr=Vn=null)}function pc(e){if(e.propertyName==="value"&&Ca(rr)){var t=[];dc(t,rr,e,mi(e)),Vo(op,t)}}function dp(e,t,n){e==="focusin"?(Ss(),Vn=t,rr=n,Vn.attachEvent("onpropertychange",pc)):e==="focusout"&&Ss()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ca(rr)}function pp(e,t){if(e==="click")return Ca(t)}function fp(e,t){if(e==="input"||e==="change")return Ca(t)}function mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:mp;function ar(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!pl.call(t,l)||!Ke(e[l],t[l]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zs(e,t){var n=Cs(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cs(n)}}function fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mc(){for(var e=window,t=qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function bi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hp(e){var t=mc(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fc(n.ownerDocument.documentElement,n)){if(a!==null&&bi(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!e.extend&&i>a&&(l=a,a=i,i=l),l=zs(n,i);var s=zs(n,a);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gp=ot&&"documentMode"in document&&11>=document.documentMode,Jt=null,Ll=null,Qn=null,Fl=!1;function Es(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fl||Jt==null||Jt!==qr(a)||(a=Jt,"selectionStart"in a&&bi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qn&&ar(Qn,a)||(Qn=a,a=la(Ll,"onSelect"),0<a.length&&(t=new ji("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Jt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var en={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},Xa={},hc={};ot&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete en.animationend.animation,delete en.animationiteration.animation,delete en.animationstart.animation),"TransitionEvent"in window||delete en.transitionend.transition);function za(e){if(Xa[e])return Xa[e];if(!en[e])return e;var t=en[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hc)return Xa[e]=t[n];return e}var gc=za("animationend"),xc=za("animationiteration"),vc=za("animationstart"),yc=za("transitionend"),jc=new Map,_s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){jc.set(e,t),Qt(t,[e])}for(var Za=0;Za<_s.length;Za++){var qa=_s[Za],xp=qa.toLowerCase(),vp=qa[0].toUpperCase()+qa.slice(1);Tt(xp,"on"+vp)}Tt(gc,"onAnimationEnd");Tt(xc,"onAnimationIteration");Tt(vc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(yc,"onTransitionEnd");xn("onMouseEnter",["mouseout","mouseover"]);xn("onMouseLeave",["mouseout","mouseover"]);xn("onPointerEnter",["pointerout","pointerover"]);xn("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat($n));function Ts(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,xu(a,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var s=a.length-1;0<=s;s--){var c=a[s],o=c.instance,p=c.currentTarget;if(c=c.listener,o!==i&&l.isPropagationStopped())break e;Ts(l,c,p),i=o}else for(s=0;s<a.length;s++){if(c=a[s],o=c.instance,p=c.currentTarget,c=c.listener,o!==i&&l.isPropagationStopped())break e;Ts(l,c,p),i=o}}}if(ea)throw e=zl,ea=!1,zl=null,e}function V(e,t){var n=t[Bl];n===void 0&&(n=t[Bl]=new Set);var a=e+"__bubble";n.has(a)||(kc(t,e,2,!1),n.add(a))}function Ja(e,t,n){var a=0;t&&(a|=4),kc(n,e,a,t)}var _r="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[_r]){e[_r]=!0,_o.forEach(function(n){n!=="selectionchange"&&(yp.has(n)||Ja(n,!1,e),Ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_r]||(t[_r]=!0,Ja("selectionchange",!1,t))}}function kc(e,t,n,a){switch(lc(t)){case 1:var l=Du;break;case 4:l=Pu;break;default:l=vi}n=l.bind(null,t,n,e),l=void 0,!Cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function el(e,t,n,a,l){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(s===4)for(s=a.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;s=s.return}for(;c!==null;){if(s=Mt(c),s===null)return;if(o=s.tag,o===5||o===6){a=i=s;continue e}c=c.parentNode}}a=a.return}Vo(function(){var p=i,g=mi(n),j=[];e:{var h=jc.get(e);if(h!==void 0){var y=ji,x=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":y=Gu;break;case"focusin":x="focus",y=Ka;break;case"focusout":x="blur",y=Ka;break;case"beforeblur":case"afterblur":y=Ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Bu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=qu;break;case gc:case xc:case vc:y=Iu;break;case yc:y=ep;break;case"scroll":y=Au;break;case"wheel":y=np;break;case"copy":case"cut":case"paste":y=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=js}var w=(t&4)!==0,k=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var u=p,m;u!==null;){m=u;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,d!==null&&(b=Jn(u,d),b!=null&&w.push(ir(u,b,m)))),k)break;u=u.return}0<w.length&&(h=new y(h,x,null,n,g),j.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Nl&&(x=n.relatedTarget||n.fromElement)&&(Mt(x)||x[ct]))break e;if((y||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=p,x=x?Mt(x):null,x!==null&&(k=Kt(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=p),y!==x)){if(w=vs,b="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=js,b="onPointerLeave",d="onPointerEnter",u="pointer"),k=y==null?h:tn(y),m=x==null?h:tn(x),h=new w(b,u+"leave",y,n,g),h.target=k,h.relatedTarget=m,b=null,Mt(g)===p&&(w=new w(d,u+"enter",x,n,g),w.target=m,w.relatedTarget=k,b=w),k=b,y&&x)t:{for(w=y,d=x,u=0,m=w;m;m=Gt(m))u++;for(m=0,b=d;b;b=Gt(b))m++;for(;0<u-m;)w=Gt(w),u--;for(;0<m-u;)d=Gt(d),m--;for(;u--;){if(w===d||d!==null&&w===d.alternate)break t;w=Gt(w),d=Gt(d)}w=null}else w=null;y!==null&&Ls(j,h,y,w,!1),x!==null&&k!==null&&Ls(j,k,x,w,!0)}}e:{if(h=p?tn(p):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var N=cp;else if(bs(h))if(uc)N=fp;else{N=up;var C=dp}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=pp);if(N&&(N=N(e,p))){dc(j,N,n,g);break e}C&&C(e,h,p),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&yl(h,"number",h.value)}switch(C=p?tn(p):window,e){case"focusin":(bs(C)||C.contentEditable==="true")&&(Jt=C,Ll=p,Qn=null);break;case"focusout":Qn=Ll=Jt=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,Es(j,n,g);break;case"selectionchange":if(gp)break;case"keydown":case"keyup":Es(j,n,g)}var f;if(ki)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else qt?oc(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(sc&&n.locale!=="ko"&&(qt||v!=="onCompositionStart"?v==="onCompositionEnd"&&qt&&(f=ic()):(vt=g,yi="value"in vt?vt.value:vt.textContent,qt=!0)),C=la(p,v),0<C.length&&(v=new ys(v,e,null,n,g),j.push({event:v,listeners:C}),f?v.data=f:(f=cc(n),f!==null&&(v.data=f)))),(f=ap?lp(e,n):ip(e,n))&&(p=la(p,"onBeforeInput"),0<p.length&&(g=new ys("onBeforeInput","beforeinput",null,n,g),j.push({event:g,listeners:p}),g.data=f))}wc(j,t)})}function ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function la(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Jn(e,n),i!=null&&a.unshift(ir(e,i,l)),i=Jn(e,t),i!=null&&a.push(ir(e,i,l))),e=e.return}return a}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,t,n,a,l){for(var i=t._reactName,s=[];n!==null&&n!==a;){var c=n,o=c.alternate,p=c.stateNode;if(o!==null&&o===a)break;c.tag===5&&p!==null&&(c=p,l?(o=Jn(n,i),o!=null&&s.unshift(ir(n,o,c))):l||(o=Jn(n,i),o!=null&&s.push(ir(n,o,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function Fs(e){return(typeof e=="string"?e:""+e).replace(jp,`
`).replace(wp,"")}function Tr(e,t,n){if(t=Fs(t),Fs(e)!==t&&n)throw Error(z(425))}function ia(){}var Dl=null,Pl=null;function Al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,Ds=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ds<"u"?function(e){return Ds.resolve(null).then(e).catch(Np)}:Ml;function Np(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){e.removeChild(l),nr(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);nr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+zn,sr="__reactProps$"+zn,ct="__reactContainer$"+zn,Bl="__reactEvents$"+zn,Sp="__reactListeners$"+zn,Cp="__reactHandles$"+zn;function Mt(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ps(e);e!==null;){if(n=e[Ze])return n;e=Ps(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[Ze]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Ea(e){return e[sr]||null}var Rl=[],nn=-1;function Lt(e){return{current:e}}function Q(e){0>nn||(e.current=Rl[nn],Rl[nn]=null,nn--)}function U(e,t){nn++,Rl[nn]=e.current,e.current=t}var _t={},fe=Lt(_t),je=Lt(!1),$t=_t;function vn(e,t){var n=e.type.contextTypes;if(!n)return _t;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function we(e){return e=e.childContextTypes,e!=null}function sa(){Q(je),Q(fe)}function As(e,t,n){if(fe.current!==_t)throw Error(z(168));U(fe,t),U(je,n)}function bc(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(z(108,du(e)||"Unknown",l));return q({},n,a)}function oa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,$t=fe.current,U(fe,e),U(je,je.current),!0}function Ms(e,t,n){var a=e.stateNode;if(!a)throw Error(z(169));n?(e=bc(e,t,$t),a.__reactInternalMemoizedMergedChildContext=e,Q(je),Q(fe),U(fe,e)):Q(je),U(je,n)}var at=null,_a=!1,nl=!1;function Nc(e){at===null?at=[e]:at.push(e)}function zp(e){_a=!0,Nc(e)}function Ft(){if(!nl&&at!==null){nl=!0;var e=0,t=W;try{var n=at;for(W=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}at=null,_a=!1}catch(l){throw at!==null&&(at=at.slice(e+1)),Go(hi,Ft),l}finally{W=t,nl=!1}}return null}var rn=[],an=0,ca=null,da=0,Fe=[],De=0,Wt=null,lt=1,it="";function Pt(e,t){rn[an++]=da,rn[an++]=ca,ca=e,da=t}function Sc(e,t,n){Fe[De++]=lt,Fe[De++]=it,Fe[De++]=Wt,Wt=e;var a=lt;e=it;var l=32-Ve(a)-1;a&=~(1<<l),n+=1;var i=32-Ve(t)+l;if(30<i){var s=l-l%5;i=(a&(1<<s)-1).toString(32),a>>=s,l-=s,lt=1<<32-Ve(t)+l|n<<l|a,it=i+e}else lt=1<<i|n<<l|a,it=e}function Ni(e){e.return!==null&&(Pt(e,1),Sc(e,1,0))}function Si(e){for(;e===ca;)ca=rn[--an],rn[an]=null,da=rn[--an],rn[an]=null;for(;e===Wt;)Wt=Fe[--De],Fe[De]=null,it=Fe[--De],Fe[De]=null,lt=Fe[--De],Fe[De]=null}var Ee=null,ze=null,K=!1,He=null;function Cc(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,ze=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wt!==null?{id:lt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,ze=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(K){var t=ze;if(t){var n=t;if(!Bs(e,t)){if(Ol(e))throw Error(z(418));t=bt(n.nextSibling);var a=Ee;t&&Bs(e,t)?Cc(a,n):(e.flags=e.flags&-4097|2,K=!1,Ee=e)}}else{if(Ol(e))throw Error(z(418));e.flags=e.flags&-4097|2,K=!1,Ee=e}}}function Rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Lr(e){if(e!==Ee)return!1;if(!K)return Rs(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Al(e.type,e.memoizedProps)),t&&(t=ze)){if(Ol(e))throw zc(),Error(z(418));for(;t;)Cc(e,t),t=bt(t.nextSibling)}if(Rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ee?bt(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=ze;e;)e=bt(e.nextSibling)}function yn(){ze=Ee=null,K=!1}function Ci(e){He===null?He=[e]:He.push(e)}var Ep=pt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var a=n.stateNode}if(!a)throw Error(z(147,e));var l=a,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var c=l.refs;s===null?delete c[i]:c[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Fr(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Os(e){var t=e._init;return t(e._payload)}function Ec(e){function t(d,u){if(e){var m=d.deletions;m===null?(d.deletions=[u],d.flags|=16):m.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function a(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function l(d,u){return d=zt(d,u),d.index=0,d.sibling=null,d}function i(d,u,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<u?(d.flags|=2,u):m):(d.flags|=2,u)):(d.flags|=1048576,u)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function c(d,u,m,b){return u===null||u.tag!==6?(u=cl(m,d.mode,b),u.return=d,u):(u=l(u,m),u.return=d,u)}function o(d,u,m,b){var N=m.type;return N===Zt?g(d,u,m.props.children,b,m.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mt&&Os(N)===u.type)?(b=l(u,m.props),b.ref=Pn(d,u,m),b.return=d,b):(b=Xr(m.type,m.key,m.props,null,d.mode,b),b.ref=Pn(d,u,m),b.return=d,b)}function p(d,u,m,b){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=dl(m,d.mode,b),u.return=d,u):(u=l(u,m.children||[]),u.return=d,u)}function g(d,u,m,b,N){return u===null||u.tag!==7?(u=It(m,d.mode,b,N),u.return=d,u):(u=l(u,m),u.return=d,u)}function j(d,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=cl(""+u,d.mode,m),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case wr:return m=Xr(u.type,u.key,u.props,null,d.mode,m),m.ref=Pn(d,null,u),m.return=d,m;case Xt:return u=dl(u,d.mode,m),u.return=d,u;case mt:var b=u._init;return j(d,b(u._payload),m)}if(On(u)||_n(u))return u=It(u,d.mode,m,null),u.return=d,u;Fr(d,u)}return null}function h(d,u,m,b){var N=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:c(d,u,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:return m.key===N?o(d,u,m,b):null;case Xt:return m.key===N?p(d,u,m,b):null;case mt:return N=m._init,h(d,u,N(m._payload),b)}if(On(m)||_n(m))return N!==null?null:g(d,u,m,b,null);Fr(d,m)}return null}function y(d,u,m,b,N){if(typeof b=="string"&&b!==""||typeof b=="number")return d=d.get(m)||null,c(u,d,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wr:return d=d.get(b.key===null?m:b.key)||null,o(u,d,b,N);case Xt:return d=d.get(b.key===null?m:b.key)||null,p(u,d,b,N);case mt:var C=b._init;return y(d,u,m,C(b._payload),N)}if(On(b)||_n(b))return d=d.get(m)||null,g(u,d,b,N,null);Fr(u,b)}return null}function x(d,u,m,b){for(var N=null,C=null,f=u,v=u=0,E=null;f!==null&&v<m.length;v++){f.index>v?(E=f,f=null):E=f.sibling;var F=h(d,f,m[v],b);if(F===null){f===null&&(f=E);break}e&&f&&F.alternate===null&&t(d,f),u=i(F,u,v),C===null?N=F:C.sibling=F,C=F,f=E}if(v===m.length)return n(d,f),K&&Pt(d,v),N;if(f===null){for(;v<m.length;v++)f=j(d,m[v],b),f!==null&&(u=i(f,u,v),C===null?N=f:C.sibling=f,C=f);return K&&Pt(d,v),N}for(f=a(d,f);v<m.length;v++)E=y(f,d,v,m[v],b),E!==null&&(e&&E.alternate!==null&&f.delete(E.key===null?v:E.key),u=i(E,u,v),C===null?N=E:C.sibling=E,C=E);return e&&f.forEach(function(D){return t(d,D)}),K&&Pt(d,v),N}function w(d,u,m,b){var N=_n(m);if(typeof N!="function")throw Error(z(150));if(m=N.call(m),m==null)throw Error(z(151));for(var C=N=null,f=u,v=u=0,E=null,F=m.next();f!==null&&!F.done;v++,F=m.next()){f.index>v?(E=f,f=null):E=f.sibling;var D=h(d,f,F.value,b);if(D===null){f===null&&(f=E);break}e&&f&&D.alternate===null&&t(d,f),u=i(D,u,v),C===null?N=D:C.sibling=D,C=D,f=E}if(F.done)return n(d,f),K&&Pt(d,v),N;if(f===null){for(;!F.done;v++,F=m.next())F=j(d,F.value,b),F!==null&&(u=i(F,u,v),C===null?N=F:C.sibling=F,C=F);return K&&Pt(d,v),N}for(f=a(d,f);!F.done;v++,F=m.next())F=y(f,d,v,F.value,b),F!==null&&(e&&F.alternate!==null&&f.delete(F.key===null?v:F.key),u=i(F,u,v),C===null?N=F:C.sibling=F,C=F);return e&&f.forEach(function(Y){return t(d,Y)}),K&&Pt(d,v),N}function k(d,u,m,b){if(typeof m=="object"&&m!==null&&m.type===Zt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:e:{for(var N=m.key,C=u;C!==null;){if(C.key===N){if(N=m.type,N===Zt){if(C.tag===7){n(d,C.sibling),u=l(C,m.props.children),u.return=d,d=u;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mt&&Os(N)===C.type){n(d,C.sibling),u=l(C,m.props),u.ref=Pn(d,C,m),u.return=d,d=u;break e}n(d,C);break}else t(d,C);C=C.sibling}m.type===Zt?(u=It(m.props.children,d.mode,b,m.key),u.return=d,d=u):(b=Xr(m.type,m.key,m.props,null,d.mode,b),b.ref=Pn(d,u,m),b.return=d,d=b)}return s(d);case Xt:e:{for(C=m.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(d,u.sibling),u=l(u,m.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=dl(m,d.mode,b),u.return=d,d=u}return s(d);case mt:return C=m._init,k(d,u,C(m._payload),b)}if(On(m))return x(d,u,m,b);if(_n(m))return w(d,u,m,b);Fr(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(d,u.sibling),u=l(u,m),u.return=d,d=u):(n(d,u),u=cl(m,d.mode,b),u.return=d,d=u),s(d)):n(d,u)}return k}var jn=Ec(!0),_c=Ec(!1),ua=Lt(null),pa=null,ln=null,zi=null;function Ei(){zi=ln=pa=null}function _i(e){var t=ua.current;Q(ua),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function mn(e,t){pa=e,zi=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(pa===null)throw Error(z(308));ln=e,pa.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Bt=null;function Ti(e){Bt===null?Bt=[e]:Bt.push(e)}function Tc(e,t,n,a){var l=t.interleaved;return l===null?(n.next=n,Ti(t)):(n.next=l.next,l.next=n),t.interleaved=n,dt(e,a)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function Li(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function st(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,$&2){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,dt(e,n)}return l=a.interleaved,l===null?(t.next=t,Ti(a)):(t.next=l.next,l.next=t),a.interleaved=t,dt(e,n)}function Hr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,gi(e,n)}}function Is(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fa(e,t,n,a){var l=e.updateQueue;ht=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var o=c,p=o.next;o.next=null,s===null?i=p:s.next=p,s=o;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==s&&(c===null?g.firstBaseUpdate=p:c.next=p,g.lastBaseUpdate=o))}if(i!==null){var j=l.baseState;s=0,g=p=o=null,c=i;do{var h=c.lane,y=c.eventTime;if((a&h)===h){g!==null&&(g=g.next={eventTime:y,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,w=c;switch(h=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){j=x.call(y,j,h);break e}j=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(y,j,h):x,h==null)break e;j=q({},j,h);break e;case 2:ht=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[c]:h.push(c))}else y={eventTime:y,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(p=g=y,o=j):g=g.next=y,s|=h;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;h=c,c=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(g===null&&(o=j),l.baseState=o,l.firstBaseUpdate=p,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ht|=s,e.lanes=s,e.memoizedState=j}}function $s(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=n,typeof l!="function")throw Error(z(191,l));l.call(a)}}}var vr={},Je=Lt(vr),or=Lt(vr),cr=Lt(vr);function Rt(e){if(e===vr)throw Error(z(174));return e}function Fi(e,t){switch(U(cr,t),U(or,e),U(Je,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wl(t,e)}Q(Je),U(Je,t)}function wn(){Q(Je),Q(or),Q(cr)}function Fc(e){Rt(cr.current);var t=Rt(Je.current),n=wl(t,e.type);t!==n&&(U(or,e),U(Je,n))}function Di(e){or.current===e&&(Q(Je),Q(or))}var X=Lt(0);function ma(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function Pi(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Vr=pt.ReactCurrentDispatcher,al=pt.ReactCurrentBatchConfig,Ut=0,Z=null,re=null,le=null,ha=!1,Kn=!1,dr=0,_p=0;function de(){throw Error(z(321))}function Ai(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Mi(e,t,n,a,l,i){if(Ut=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?Dp:Pp,e=n(a,l),Kn){i=0;do{if(Kn=!1,dr=0,25<=i)throw Error(z(301));i+=1,le=re=null,t.updateQueue=null,Vr.current=Ap,e=n(a,l)}while(Kn)}if(Vr.current=ga,t=re!==null&&re.next!==null,Ut=0,le=re=Z=null,ha=!1,t)throw Error(z(300));return e}function Bi(){var e=dr!==0;return dr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Z.memoizedState=le=e:le=le.next=e,le}function Re(){if(re===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?Z.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(z(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?Z.memoizedState=le=e:le=le.next=e}return le}function ur(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Re(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=re,l=a.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}a.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,a=a.baseState;var c=s=null,o=null,p=i;do{var g=p.lane;if((Ut&g)===g)o!==null&&(o=o.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),a=p.hasEagerState?p.eagerState:e(a,p.action);else{var j={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};o===null?(c=o=j,s=a):o=o.next=j,Z.lanes|=g,Ht|=g}p=p.next}while(p!==null&&p!==i);o===null?s=a:o.next=c,Ke(a,t.memoizedState)||(ye=!0),t.memoizedState=a,t.baseState=s,t.baseQueue=o,n.lastRenderedState=a}if(e=n.interleaved,e!==null){l=e;do i=l.lane,Z.lanes|=i,Ht|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=Re(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Ke(i,t.memoizedState)||(ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Dc(){}function Pc(e,t){var n=Z,a=Re(),l=t(),i=!Ke(a.memoizedState,l);if(i&&(a.memoizedState=l,ye=!0),a=a.queue,Ri(Bc.bind(null,n,a,e),[e]),a.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,pr(9,Mc.bind(null,n,a,l,t),void 0,null),ie===null)throw Error(z(349));Ut&30||Ac(n,t,l)}return l}function Ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mc(e,t,n,a){t.value=n,t.getSnapshot=a,Rc(t)&&Oc(e)}function Bc(e,t,n){return n(function(){Rc(t)&&Oc(e)})}function Rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function Oc(e){var t=dt(e,1);t!==null&&Qe(t,e,1,-1)}function Ws(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Fp.bind(null,Z,e),[t.memoizedState,e]}function pr(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Ic(){return Re().memoizedState}function Qr(e,t,n,a){var l=Xe();Z.flags|=e,l.memoizedState=pr(1|t,n,void 0,a===void 0?null:a)}function Ta(e,t,n,a){var l=Re();a=a===void 0?null:a;var i=void 0;if(re!==null){var s=re.memoizedState;if(i=s.destroy,a!==null&&Ai(a,s.deps)){l.memoizedState=pr(t,n,i,a);return}}Z.flags|=e,l.memoizedState=pr(1|t,n,i,a)}function Us(e,t){return Qr(8390656,8,e,t)}function Ri(e,t){return Ta(2048,8,e,t)}function $c(e,t){return Ta(4,2,e,t)}function Wc(e,t){return Ta(4,4,e,t)}function Uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hc(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4,4,Uc.bind(null,t,e),n)}function Oi(){}function Vc(e,t){var n=Re();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ai(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Qc(e,t){var n=Re();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ai(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Kc(e,t,n){return Ut&21?(Ke(n,t)||(n=qo(),Z.lanes|=n,Ht|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Tp(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var a=al.transition;al.transition={};try{e(!1),t()}finally{W=n,al.transition=a}}function Yc(){return Re().memoizedState}function Lp(e,t,n){var a=Ct(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Gc(e))Xc(t,n);else if(n=Tc(e,t,n,a),n!==null){var l=he();Qe(n,e,a,l),Zc(n,t,a)}}function Fp(e,t,n){var a=Ct(e),l={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gc(e))Xc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,c=i(s,n);if(l.hasEagerState=!0,l.eagerState=c,Ke(c,s)){var o=t.interleaved;o===null?(l.next=l,Ti(t)):(l.next=o.next,o.next=l),t.interleaved=l;return}}catch{}finally{}n=Tc(e,t,l,a),n!==null&&(l=he(),Qe(n,e,a,l),Zc(n,t,a))}}function Gc(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Xc(e,t){Kn=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zc(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,gi(e,n)}}var ga={readContext:Be,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Dp={readContext:Be,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Us,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qr(4194308,4,Uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qr(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Xe();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Lp.bind(null,Z,e),[a.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:Ws,useDebugValue:Oi,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Ws(!1),t=e[0];return e=Tp.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=Z,l=Xe();if(K){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),ie===null)throw Error(z(349));Ut&30||Ac(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Us(Bc.bind(null,a,i,e),[e]),a.flags|=2048,pr(9,Mc.bind(null,a,i,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if(K){var n=it,a=lt;n=(a&~(1<<32-Ve(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_p++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pp={readContext:Be,useCallback:Vc,useContext:Be,useEffect:Ri,useImperativeHandle:Hc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Qc,useReducer:ll,useRef:Ic,useState:function(){return ll(ur)},useDebugValue:Oi,useDeferredValue:function(e){var t=Re();return Kc(t,re.memoizedState,e)},useTransition:function(){var e=ll(ur)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Pc,useId:Yc,unstable_isNewReconciler:!1},Ap={readContext:Be,useCallback:Vc,useContext:Be,useEffect:Ri,useImperativeHandle:Hc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Qc,useReducer:il,useRef:Ic,useState:function(){return il(ur)},useDebugValue:Oi,useDeferredValue:function(e){var t=Re();return re===null?t.memoizedState=e:Kc(t,re.memoizedState,e)},useTransition:function(){var e=il(ur)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Pc,useId:Yc,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wl(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var La={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=he(),l=Ct(e),i=st(a,l);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,l),t!==null&&(Qe(t,e,l,a),Hr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=he(),l=Ct(e),i=st(a,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,l),t!==null&&(Qe(t,e,l,a),Hr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),a=Ct(e),l=st(n,a);l.tag=2,t!=null&&(l.callback=t),t=Nt(e,l,a),t!==null&&(Qe(t,e,a,n),Hr(t,e,a))}};function Hs(e,t,n,a,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):t.prototype&&t.prototype.isPureReactComponent?!ar(n,a)||!ar(l,i):!0}function qc(e,t,n){var a=!1,l=_t,i=t.contextType;return typeof i=="object"&&i!==null?i=Be(i):(l=we(t)?$t:fe.current,a=t.contextTypes,i=(a=a!=null)?vn(e,l):_t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vs(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,a){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Li(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Be(i):(i=we(t)?$t:fe.current,l.context=vn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Wl(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&La.enqueueReplaceState(l,l.state,null),fa(e,n,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function kn(e,t){try{var n="",a=t;do n+=cu(a),a=a.return;while(a);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Jc(e,t,n){n=st(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){va||(va=!0,ei=a),Hl(e,t)},n}function ed(e,t,n){n=st(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){Hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof a!="function"&&(St===null?St=new Set([this]):St.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qs(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Mp;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(l.add(n),e=Xp.bind(null,e,t,n),t.then(e,e))}function Ks(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ys(e,t,n,a,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=st(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Bp=pt.ReactCurrentOwner,ye=!1;function me(e,t,n,a){t.child=e===null?_c(t,null,n,a):jn(t,e.child,n,a)}function Gs(e,t,n,a,l){n=n.render;var i=t.ref;return mn(t,l),a=Mi(e,t,n,a,i,l),n=Bi(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(K&&n&&Ni(t),t.flags|=1,me(e,t,a,l),t.child)}function Xs(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ki(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,td(e,t,i,a,l)):(e=Xr(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(s,a)&&e.ref===t.ref)return ut(e,t,l)}return t.flags|=1,e=zt(i,a),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(ar(i,a)&&e.ref===t.ref)if(ye=!1,t.pendingProps=a=i,(e.lanes&l)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ut(e,t,l)}return Vl(e,t,n,a,l)}function nd(e,t,n){var a=t.pendingProps,l=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(on,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(on,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:n,U(on,Ce),Ce|=a}else i!==null?(a=i.baseLanes|n,t.memoizedState=null):a=n,U(on,Ce),Ce|=a;return me(e,t,l,n),t.child}function rd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,a,l){var i=we(n)?$t:fe.current;return i=vn(t,i),mn(t,l),n=Mi(e,t,n,a,i,l),a=Bi(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,ut(e,t,l)):(K&&a&&Ni(t),t.flags|=1,me(e,t,n,l),t.child)}function Zs(e,t,n,a,l){if(we(n)){var i=!0;oa(t)}else i=!1;if(mn(t,l),t.stateNode===null)Kr(e,t),qc(t,n,a),Ul(t,n,a,l),a=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var o=s.context,p=n.contextType;typeof p=="object"&&p!==null?p=Be(p):(p=we(n)?$t:fe.current,p=vn(t,p));var g=n.getDerivedStateFromProps,j=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";j||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==a||o!==p)&&Vs(t,s,a,p),ht=!1;var h=t.memoizedState;s.state=h,fa(t,a,s,l),o=t.memoizedState,c!==a||h!==o||je.current||ht?(typeof g=="function"&&(Wl(t,n,g,a),o=t.memoizedState),(c=ht||Hs(t,n,c,a,h,o,p))?(j||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=o),s.props=a,s.state=o,s.context=p,a=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,Lc(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:We(t.type,c),s.props=p,j=t.pendingProps,h=s.context,o=n.contextType,typeof o=="object"&&o!==null?o=Be(o):(o=we(n)?$t:fe.current,o=vn(t,o));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==j||h!==o)&&Vs(t,s,a,o),ht=!1,h=t.memoizedState,s.state=h,fa(t,a,s,l);var x=t.memoizedState;c!==j||h!==x||je.current||ht?(typeof y=="function"&&(Wl(t,n,y,a),x=t.memoizedState),(p=ht||Hs(t,n,p,a,h,x,o)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,x,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,x,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=x),s.props=a,s.state=x,s.context=o,a=p):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return Ql(e,t,n,a,i,l)}function Ql(e,t,n,a,l,i){rd(e,t);var s=(t.flags&128)!==0;if(!a&&!s)return l&&Ms(t,n,!1),ut(e,t,i);a=t.stateNode,Bp.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&s?(t.child=jn(t,e.child,null,i),t.child=jn(t,null,c,i)):me(e,t,c,i),t.memoizedState=a.state,l&&Ms(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?As(e,t.pendingContext,t.pendingContext!==t.context):t.context&&As(e,t.context,!1),Fi(e,t.containerInfo)}function qs(e,t,n,a,l){return yn(),Ci(l),t.flags|=256,me(e,t,n,a),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ld(e,t,n){var a=t.pendingProps,l=X.current,i=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),U(X,l&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=a.children,e=a.fallback,i?(a=t.mode,i=t.child,s={mode:"hidden",children:s},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Pa(s,a,0,null),e=It(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yl(n),t.memoizedState=Kl,e):Ii(t,s));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return Rp(e,t,s,a,c,l,n);if(i){i=a.fallback,s=t.mode,l=e.child,c=l.sibling;var o={mode:"hidden",children:a.children};return!(s&1)&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=o,t.deletions=null):(a=zt(l,o),a.subtreeFlags=l.subtreeFlags&14680064),c!==null?i=zt(c,i):(i=It(i,s,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,s=e.child.memoizedState,s=s===null?Yl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Kl,a}return i=e.child,e=i.sibling,a=zt(i,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ii(e,t){return t=Pa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dr(e,t,n,a){return a!==null&&Ci(a),jn(t,e.child,null,n),e=Ii(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,n,a,l,i,s){if(n)return t.flags&256?(t.flags&=-257,a=sl(Error(z(422))),Dr(e,t,s,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=a.fallback,l=t.mode,a=Pa({mode:"visible",children:a.children},l,0,null),i=It(i,l,s,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,t.mode&1&&jn(t,e.child,null,s),t.child.memoizedState=Yl(s),t.memoizedState=Kl,i);if(!(t.mode&1))return Dr(e,t,s,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var c=a.dgst;return a=c,i=Error(z(419)),a=sl(i,a,void 0),Dr(e,t,s,a)}if(c=(s&e.childLanes)!==0,ye||c){if(a=ie,a!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(a.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,dt(e,l),Qe(a,e,l,-1))}return Qi(),a=sl(Error(z(421))),Dr(e,t,s,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Zp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ze=bt(l.nextSibling),Ee=t,K=!0,He=null,e!==null&&(Fe[De++]=lt,Fe[De++]=it,Fe[De++]=Wt,lt=e.id,it=e.overflow,Wt=t),t=Ii(t,a.children),t.flags|=4096,t)}function Js(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),$l(e.return,t,n)}function ol(e,t,n,a,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=l)}function id(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;if(me(e,t,a.children,n),a=X.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,n,t);else if(e.tag===19)Js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(U(X,a),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ma(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ol(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ma(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ol(t,!0,n,null,i);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Op(e,t,n){switch(t.tag){case 3:ad(t),yn();break;case 5:Fc(t);break;case 1:we(t.type)&&oa(t);break;case 4:Fi(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;U(ua,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(U(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?ld(e,t,n):(U(X,X.current&1),e=ut(e,t,n),e!==null?e.sibling:null);U(X,X.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return id(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),U(X,X.current),a)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,n)}return ut(e,t,n)}var sd,Gl,od,cd;sd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};od=function(e,t,n,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Rt(Je.current);var i=null;switch(n){case"input":l=xl(e,l),a=xl(e,a),i=[];break;case"select":l=q({},l,{value:void 0}),a=q({},a,{value:void 0}),i=[];break;case"textarea":l=jl(e,l),a=jl(e,a),i=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=ia)}kl(n,a);var s;n=null;for(p in l)if(!a.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var c=l[p];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Zn.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in a){var o=a[p];if(c=l!=null?l[p]:void 0,a.hasOwnProperty(p)&&o!==c&&(o!=null||c!=null))if(p==="style")if(c){for(s in c)!c.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in o)o.hasOwnProperty(s)&&c[s]!==o[s]&&(n||(n={}),n[s]=o[s])}else n||(i||(i=[]),i.push(p,n)),n=o;else p==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(i=i||[]).push(p,o)):p==="children"?typeof o!="string"&&typeof o!="number"||(i=i||[]).push(p,""+o):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Zn.hasOwnProperty(p)?(o!=null&&p==="onScroll"&&V("scroll",e),i||c===o||(i=[])):(i=i||[]).push(p,o))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};cd=function(e,t,n,a){n!==a&&(t.flags|=4)};function An(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ip(e,t,n){var a=t.pendingProps;switch(Si(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&sa(),ue(t),null;case 3:return a=t.stateNode,wn(),Q(je),Q(fe),Pi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ri(He),He=null))),Gl(e,t),ue(t),null;case 5:Di(t);var l=Rt(cr.current);if(n=t.type,e!==null&&t.stateNode!=null)od(e,t,n,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(z(166));return ue(t),null}if(e=Rt(Je.current),Lr(t)){a=t.stateNode,n=t.type;var i=t.memoizedProps;switch(a[Ze]=t,a[sr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",a),V("close",a);break;case"iframe":case"object":case"embed":V("load",a);break;case"video":case"audio":for(l=0;l<$n.length;l++)V($n[l],a);break;case"source":V("error",a);break;case"img":case"image":case"link":V("error",a),V("load",a);break;case"details":V("toggle",a);break;case"input":os(a,i),V("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},V("invalid",a);break;case"textarea":ds(a,i),V("invalid",a)}kl(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="children"?typeof c=="string"?a.textContent!==c&&(i.suppressHydrationWarning!==!0&&Tr(a.textContent,c,e),l=["children",c]):typeof c=="number"&&a.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Tr(a.textContent,c,e),l=["children",""+c]):Zn.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&V("scroll",a)}switch(n){case"input":kr(a),cs(a,i,!0);break;case"textarea":kr(a),us(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=ia)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(n,{is:a.is}):(e=s.createElement(n),n==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,n),e[Ze]=t,e[sr]=a,sd(e,t,!1,!1),t.stateNode=e;e:{switch(s=bl(n,a),n){case"dialog":V("cancel",e),V("close",e),l=a;break;case"iframe":case"object":case"embed":V("load",e),l=a;break;case"video":case"audio":for(l=0;l<$n.length;l++)V($n[l],e);l=a;break;case"source":V("error",e),l=a;break;case"img":case"image":case"link":V("error",e),V("load",e),l=a;break;case"details":V("toggle",e),l=a;break;case"input":os(e,a),l=xl(e,a),V("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=q({},a,{value:void 0}),V("invalid",e);break;case"textarea":ds(e,a),l=jl(e,a),V("invalid",e);break;default:l=a}kl(n,l),c=l;for(i in c)if(c.hasOwnProperty(i)){var o=c[i];i==="style"?Io(e,o):i==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Ro(e,o)):i==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&qn(e,o):typeof o=="number"&&qn(e,""+o):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zn.hasOwnProperty(i)?o!=null&&i==="onScroll"&&V("scroll",e):o!=null&&di(e,i,o,s))}switch(n){case"input":kr(e),cs(e,a,!1);break;case"textarea":kr(e),us(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Et(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?dn(e,!!a.multiple,i,!1):a.defaultValue!=null&&dn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)cd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(z(166));if(n=Rt(cr.current),Rt(Je.current),Lr(t)){if(a=t.stateNode,n=t.memoizedProps,a[Ze]=t,(i=a.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:Tr(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(a.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Ze]=t,t.stateNode=a}return ue(t),null;case 13:if(Q(X),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ze!==null&&t.mode&1&&!(t.flags&128))zc(),yn(),t.flags|=98560,i=!1;else if(i=Lr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Ze]=t}else yn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else He!==null&&(ri(He),He=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ae===0&&(ae=3):Qi())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return wn(),Gl(e,t),e===null&&lr(t.stateNode.containerInfo),ue(t),null;case 10:return _i(t.type._context),ue(t),null;case 17:return we(t.type)&&sa(),ue(t),null;case 19:if(Q(X),i=t.memoizedState,i===null)return ue(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)An(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ma(e),s!==null){for(t.flags|=128,An(i,!1),a=s.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)i=n,e=a,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>bn&&(t.flags|=128,a=!0,An(i,!1),t.lanes=4194304)}else{if(!a)if(e=ma(s),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),An(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!K)return ue(t),null}else 2*te()-i.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,a=!0,An(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=X.current,U(X,a?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Vi(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Ce&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function $p(e,t){switch(Si(t),t.tag){case 1:return we(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),Q(je),Q(fe),Pi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Di(t),null;case 13:if(Q(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(X),null;case 4:return wn(),null;case 10:return _i(t.type._context),null;case 22:case 23:return Vi(),null;case 24:return null;default:return null}}var Pr=!1,pe=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,L=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){J(e,t,a)}else n.current=null}function Xl(e,t,n){try{n()}catch(a){J(e,t,a)}}var eo=!1;function Up(e,t){if(Dl=ra,e=mc(),bi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,c=-1,o=-1,p=0,g=0,j=e,h=null;t:for(;;){for(var y;j!==n||l!==0&&j.nodeType!==3||(c=s+l),j!==i||a!==0&&j.nodeType!==3||(o=s+a),j.nodeType===3&&(s+=j.nodeValue.length),(y=j.firstChild)!==null;)h=j,j=y;for(;;){if(j===e)break t;if(h===n&&++p===l&&(c=s),h===i&&++g===a&&(o=s),(y=j.nextSibling)!==null)break;j=h,h=j.parentNode}j=y}n=c===-1||o===-1?null:{start:c,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pl={focusedElem:e,selectionRange:n},ra=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,k=x.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),k);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){J(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return x=eo,eo=!1,x}function Yn(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Xl(t,n,i)}l=l.next}while(l!==a)}}function Fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[sr],delete t[Bl],delete t[Sp],delete t[Cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ud(e){return e.tag===5||e.tag===3||e.tag===4}function to(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(a!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Jl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var se=null,Ue=!1;function ft(e,t,n){for(n=n.child;n!==null;)pd(e,t,n),n=n.sibling}function pd(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:pe||sn(n,t);case 6:var a=se,l=Ue;se=null,ft(e,t,n),se=a,Ue=l,se!==null&&(Ue?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ue?(e=se,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),nr(e)):tl(se,n.stateNode));break;case 4:a=se,l=Ue,se=n.stateNode.containerInfo,Ue=!0,ft(e,t,n),se=a,Ue=l;break;case 0:case 11:case 14:case 15:if(!pe&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Xl(n,t,s),l=l.next}while(l!==a)}ft(e,t,n);break;case 1:if(!pe&&(sn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(c){J(n,t,c)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(pe=(a=pe)||n.memoizedState!==null,ft(e,t,n),pe=a):ft(e,t,n);break;default:ft(e,t,n)}}function no(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wp),t.forEach(function(a){var l=qp.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];try{var i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:se=c.stateNode,Ue=!1;break e;case 3:se=c.stateNode.containerInfo,Ue=!0;break e;case 4:se=c.stateNode.containerInfo,Ue=!0;break e}c=c.return}if(se===null)throw Error(z(160));pd(i,s,l),se=null,Ue=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(p){J(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fd(t,e),t=t.sibling}function fd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),Ge(e),a&4){try{Yn(3,e,e.return),Fa(3,e)}catch(w){J(e,e.return,w)}try{Yn(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:$e(t,e),Ge(e),a&512&&n!==null&&sn(n,n.return);break;case 5:if($e(t,e),Ge(e),a&512&&n!==null&&sn(n,n.return),e.flags&32){var l=e.stateNode;try{qn(l,"")}catch(w){J(e,e.return,w)}}if(a&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,c=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Ao(l,i),bl(c,s);var p=bl(c,i);for(s=0;s<o.length;s+=2){var g=o[s],j=o[s+1];g==="style"?Io(l,j):g==="dangerouslySetInnerHTML"?Ro(l,j):g==="children"?qn(l,j):di(l,g,j,p)}switch(c){case"input":vl(l,i);break;case"textarea":Mo(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?dn(l,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?dn(l,!!i.multiple,i.defaultValue,!0):dn(l,!!i.multiple,i.multiple?[]:"",!1))}l[sr]=i}catch(w){J(e,e.return,w)}}break;case 6:if($e(t,e),Ge(e),a&4){if(e.stateNode===null)throw Error(z(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if($e(t,e),Ge(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{nr(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:$e(t,e),Ge(e);break;case 13:$e(t,e),Ge(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ui=te())),a&4&&no(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(p=pe)||g,$e(t,e),pe=p):$e(t,e),Ge(e),a&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&e.mode&1)for(L=e,g=e.child;g!==null;){for(j=L=g;L!==null;){switch(h=L,y=h.child,h.tag){case 0:case 11:case 14:case 15:Yn(4,h,h.return);break;case 1:sn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){a=h,n=h.return;try{t=a,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){J(a,n,w)}}break;case 5:sn(h,h.return);break;case 22:if(h.memoizedState!==null){ao(j);continue}}y!==null?(y.return=h,L=y):ao(j)}g=g.sibling}e:for(g=null,j=e;;){if(j.tag===5){if(g===null){g=j;try{l=j.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=j.stateNode,o=j.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=Oo("display",s))}catch(w){J(e,e.return,w)}}}else if(j.tag===6){if(g===null)try{j.stateNode.nodeValue=p?"":j.memoizedProps}catch(w){J(e,e.return,w)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;g===j&&(g=null),j=j.return}g===j&&(g=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:$e(t,e),Ge(e),a&4&&no(e);break;case 21:break;default:$e(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ud(n)){var a=n;break e}n=n.return}throw Error(z(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(qn(l,""),a.flags&=-33);var i=to(e);Jl(e,i,l);break;case 3:case 4:var s=a.stateNode.containerInfo,c=to(e);ql(e,c,s);break;default:throw Error(z(161))}}catch(o){J(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hp(e,t,n){L=e,md(e)}function md(e,t,n){for(var a=(e.mode&1)!==0;L!==null;){var l=L,i=l.child;if(l.tag===22&&a){var s=l.memoizedState!==null||Pr;if(!s){var c=l.alternate,o=c!==null&&c.memoizedState!==null||pe;c=Pr;var p=pe;if(Pr=s,(pe=o)&&!p)for(L=l;L!==null;)s=L,o=s.child,s.tag===22&&s.memoizedState!==null?lo(l):o!==null?(o.return=s,L=o):lo(l);for(;i!==null;)L=i,md(i),i=i.sibling;L=l,Pr=c,pe=p}ro(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,L=i):ro(e)}}function ro(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Fa(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!pe)if(n===null)a.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);a.componentDidUpdate(l,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$s(t,i,a);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$s(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var j=g.dehydrated;j!==null&&nr(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}pe||t.flags&512&&Zl(t)}catch(h){J(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function ao(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function lo(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fa(4,t)}catch(o){J(t,n,o)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(o){J(t,l,o)}}var i=t.return;try{Zl(t)}catch(o){J(t,i,o)}break;case 5:var s=t.return;try{Zl(t)}catch(o){J(t,s,o)}}}catch(o){J(t,t.return,o)}if(t===e){L=null;break}var c=t.sibling;if(c!==null){c.return=t.return,L=c;break}L=t.return}}var Vp=Math.ceil,xa=pt.ReactCurrentDispatcher,$i=pt.ReactCurrentOwner,Ae=pt.ReactCurrentBatchConfig,$=0,ie=null,ne=null,oe=0,Ce=0,on=Lt(0),ae=0,fr=null,Ht=0,Da=0,Wi=0,Gn=null,ve=null,Ui=0,bn=1/0,rt=null,va=!1,ei=null,St=null,Ar=!1,yt=null,ya=0,Xn=0,ti=null,Yr=-1,Gr=0;function he(){return $&6?te():Yr!==-1?Yr:Yr=te()}function Ct(e){return e.mode&1?$&2&&oe!==0?oe&-oe:Ep.transition!==null?(Gr===0&&(Gr=qo()),Gr):(e=W,e!==0||(e=window.event,e=e===void 0?16:lc(e.type)),e):1}function Qe(e,t,n,a){if(50<Xn)throw Xn=0,ti=null,Error(z(185));hr(e,n,a),(!($&2)||e!==ie)&&(e===ie&&(!($&2)&&(Da|=n),ae===4&&xt(e,oe)),ke(e,a),n===1&&$===0&&!(t.mode&1)&&(bn=te()+500,_a&&Ft()))}function ke(e,t){var n=e.callbackNode;Eu(e,t);var a=na(e,e===ie?oe:0);if(a===0)n!==null&&ms(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&ms(n),t===1)e.tag===0?zp(io.bind(null,e)):Nc(io.bind(null,e)),bp(function(){!($&6)&&Ft()}),n=null;else{switch(Jo(a)){case 1:n=hi;break;case 4:n=Xo;break;case 16:n=ta;break;case 536870912:n=Zo;break;default:n=ta}n=kd(n,hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hd(e,t){if(Yr=-1,Gr=0,$&6)throw Error(z(327));var n=e.callbackNode;if(hn()&&e.callbackNode!==n)return null;var a=na(e,e===ie?oe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=ja(e,a);else{t=a;var l=$;$|=2;var i=xd();(ie!==e||oe!==t)&&(rt=null,bn=te()+500,Ot(e,t));do try{Yp();break}catch(c){gd(e,c)}while(!0);Ei(),xa.current=i,$=l,ne!==null?t=0:(ie=null,oe=0,t=ae)}if(t!==0){if(t===2&&(l=El(e),l!==0&&(a=l,t=ni(e,l))),t===1)throw n=fr,Ot(e,0),xt(e,a),ke(e,te()),n;if(t===6)xt(e,a);else{if(l=e.current.alternate,!(a&30)&&!Qp(l)&&(t=ja(e,a),t===2&&(i=El(e),i!==0&&(a=i,t=ni(e,i))),t===1))throw n=fr,Ot(e,0),xt(e,a),ke(e,te()),n;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(z(345));case 2:At(e,ve,rt);break;case 3:if(xt(e,a),(a&130023424)===a&&(t=Ui+500-te(),10<t)){if(na(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){he(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ml(At.bind(null,e,ve,rt),t);break}At(e,ve,rt);break;case 4:if(xt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var s=31-Ve(a);i=1<<s,s=t[s],s>l&&(l=s),a&=~i}if(a=l,a=te()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Vp(a/1960))-a,10<a){e.timeoutHandle=Ml(At.bind(null,e,ve,rt),a);break}At(e,ve,rt);break;case 5:At(e,ve,rt);break;default:throw Error(z(329))}}}return ke(e,te()),e.callbackNode===n?hd.bind(null,e):null}function ni(e,t){var n=Gn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=ja(e,t),e!==2&&(t=ve,ve=n,t!==null&&ri(t)),e}function ri(e){ve===null?ve=e:ve.push.apply(ve,e)}function Qp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Ke(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xt(e,t){for(t&=~Wi,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),a=1<<n;e[n]=-1,t&=~a}}function io(e){if($&6)throw Error(z(327));hn();var t=na(e,0);if(!(t&1))return ke(e,te()),null;var n=ja(e,t);if(e.tag!==0&&n===2){var a=El(e);a!==0&&(t=a,n=ni(e,a))}if(n===1)throw n=fr,Ot(e,0),xt(e,t),ke(e,te()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,At(e,ve,rt),ke(e,te()),null}function Hi(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(bn=te()+500,_a&&Ft())}}function Vt(e){yt!==null&&yt.tag===0&&!($&6)&&hn();var t=$;$|=1;var n=Ae.transition,a=W;try{if(Ae.transition=null,W=1,e)return e()}finally{W=a,Ae.transition=n,$=t,!($&6)&&Ft()}}function Vi(){Ce=on.current,Q(on)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kp(n)),ne!==null)for(n=ne.return;n!==null;){var a=n;switch(Si(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&sa();break;case 3:wn(),Q(je),Q(fe),Pi();break;case 5:Di(a);break;case 4:wn();break;case 13:Q(X);break;case 19:Q(X);break;case 10:_i(a.type._context);break;case 22:case 23:Vi()}n=n.return}if(ie=e,ne=e=zt(e.current,null),oe=Ce=t,ae=0,fr=null,Wi=Da=Ht=0,ve=Gn=null,Bt!==null){for(t=0;t<Bt.length;t++)if(n=Bt[t],a=n.interleaved,a!==null){n.interleaved=null;var l=a.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,a.next=s}n.pending=a}Bt=null}return e}function gd(e,t){do{var n=ne;try{if(Ei(),Vr.current=ga,ha){for(var a=Z.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}ha=!1}if(Ut=0,le=re=Z=null,Kn=!1,dr=0,$i.current=null,n===null||n.return===null){ae=1,fr=t,ne=null;break}e:{var i=e,s=n.return,c=n,o=t;if(t=oe,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var p=o,g=c,j=g.tag;if(!(g.mode&1)&&(j===0||j===11||j===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Ks(s);if(y!==null){y.flags&=-257,Ys(y,s,c,i,t),y.mode&1&&Qs(i,p,t),t=y,o=p;var x=t.updateQueue;if(x===null){var w=new Set;w.add(o),t.updateQueue=w}else x.add(o);break e}else{if(!(t&1)){Qs(i,p,t),Qi();break e}o=Error(z(426))}}else if(K&&c.mode&1){var k=Ks(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ys(k,s,c,i,t),Ci(kn(o,c));break e}}i=o=kn(o,c),ae!==4&&(ae=2),Gn===null?Gn=[i]:Gn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Jc(i,o,t);Is(i,d);break e;case 1:c=o;var u=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(St===null||!St.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=ed(i,c,t);Is(i,b);break e}}i=i.return}while(i!==null)}yd(n)}catch(N){t=N,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function xd(){var e=xa.current;return xa.current=ga,e===null?ga:e}function Qi(){(ae===0||ae===3||ae===2)&&(ae=4),ie===null||!(Ht&268435455)&&!(Da&268435455)||xt(ie,oe)}function ja(e,t){var n=$;$|=2;var a=xd();(ie!==e||oe!==t)&&(rt=null,Ot(e,t));do try{Kp();break}catch(l){gd(e,l)}while(!0);if(Ei(),$=n,xa.current=a,ne!==null)throw Error(z(261));return ie=null,oe=0,ae}function Kp(){for(;ne!==null;)vd(ne)}function Yp(){for(;ne!==null&&!yu();)vd(ne)}function vd(e){var t=wd(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?yd(e):ne=t,$i.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$p(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ne=null;return}}else if(n=Ip(n,t,Ce),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ae===0&&(ae=5)}function At(e,t,n){var a=W,l=Ae.transition;try{Ae.transition=null,W=1,Gp(e,t,n,a)}finally{Ae.transition=l,W=a}return null}function Gp(e,t,n,a){do hn();while(yt!==null);if($&6)throw Error(z(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(_u(e,i),e===ie&&(ne=ie=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ar||(Ar=!0,kd(ta,function(){return hn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var s=W;W=1;var c=$;$|=4,$i.current=null,Up(e,n),fd(n,e),hp(Pl),ra=!!Dl,Pl=Dl=null,e.current=n,Hp(n),ju(),$=c,W=s,Ae.transition=i}else e.current=n;if(Ar&&(Ar=!1,yt=e,ya=l),i=e.pendingLanes,i===0&&(St=null),bu(n.stateNode),ke(e,te()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],a(l.value,{componentStack:l.stack,digest:l.digest});if(va)throw va=!1,e=ei,ei=null,e;return ya&1&&e.tag!==0&&hn(),i=e.pendingLanes,i&1?e===ti?Xn++:(Xn=0,ti=e):Xn=0,Ft(),null}function hn(){if(yt!==null){var e=Jo(ya),t=Ae.transition,n=W;try{if(Ae.transition=null,W=16>e?16:e,yt===null)var a=!1;else{if(e=yt,yt=null,ya=0,$&6)throw Error(z(331));var l=$;for($|=4,L=e.current;L!==null;){var i=L,s=i.child;if(L.flags&16){var c=i.deletions;if(c!==null){for(var o=0;o<c.length;o++){var p=c[o];for(L=p;L!==null;){var g=L;switch(g.tag){case 0:case 11:case 15:Yn(8,g,i)}var j=g.child;if(j!==null)j.return=g,L=j;else for(;L!==null;){g=L;var h=g.sibling,y=g.return;if(dd(g),g===p){L=null;break}if(h!==null){h.return=y,L=h;break}L=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}L=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,L=s;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,L=d;break e}L=i.return}}var u=e.current;for(L=u;L!==null;){s=L;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,L=m;else e:for(s=u;L!==null;){if(c=L,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Fa(9,c)}}catch(N){J(c,c.return,N)}if(c===s){L=null;break e}var b=c.sibling;if(b!==null){b.return=c.return,L=b;break e}L=c.return}}if($=l,Ft(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Na,e)}catch{}a=!0}return a}finally{W=n,Ae.transition=t}}return!1}function so(e,t,n){t=kn(n,t),t=Jc(e,t,1),e=Nt(e,t,1),t=he(),e!==null&&(hr(e,1,t),ke(e,t))}function J(e,t,n){if(e.tag===3)so(e,e,n);else for(;t!==null;){if(t.tag===3){so(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(St===null||!St.has(a))){e=kn(n,e),e=ed(t,e,1),t=Nt(t,e,1),e=he(),t!==null&&(hr(t,1,e),ke(t,e));break}}t=t.return}}function Xp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(oe&n)===n&&(ae===4||ae===3&&(oe&130023424)===oe&&500>te()-Ui?Ot(e,0):Wi|=n),ke(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=he();e=dt(e,t),e!==null&&(hr(e,t,n),ke(e,n))}function Zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function qp(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(z(314))}a!==null&&a.delete(t),jd(e,n)}var wd;wd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Op(e,t,n);ye=!!(e.flags&131072)}else ye=!1,K&&t.flags&1048576&&Sc(t,da,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Kr(e,t),e=t.pendingProps;var l=vn(t,fe.current);mn(t,n),l=Mi(null,t,a,e,l,n);var i=Bi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(a)?(i=!0,oa(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Li(t),l.updater=La,t.stateNode=l,l._reactInternals=t,Ul(t,a,e,n),t=Ql(null,t,a,!0,i,n)):(t.tag=0,K&&i&&Ni(t),me(null,t,l,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Kr(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=ef(a),e=We(a,e),l){case 0:t=Vl(null,t,a,e,n);break e;case 1:t=Zs(null,t,a,e,n);break e;case 11:t=Gs(null,t,a,e,n);break e;case 14:t=Xs(null,t,a,We(a.type,e),n);break e}throw Error(z(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:We(a,l),Vl(e,t,a,l,n);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:We(a,l),Zs(e,t,a,l,n);case 3:e:{if(ad(t),e===null)throw Error(z(387));a=t.pendingProps,i=t.memoizedState,l=i.element,Lc(e,t),fa(t,a,null,n);var s=t.memoizedState;if(a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=kn(Error(z(423)),t),t=qs(e,t,a,n,l);break e}else if(a!==l){l=kn(Error(z(424)),t),t=qs(e,t,a,n,l);break e}else for(ze=bt(t.stateNode.containerInfo.firstChild),Ee=t,K=!0,He=null,n=_c(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yn(),a===l){t=ut(e,t,n);break e}me(e,t,a,n)}t=t.child}return t;case 5:return Fc(t),e===null&&Il(t),a=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,Al(a,l)?s=null:i!==null&&Al(a,i)&&(t.flags|=32),rd(e,t),me(e,t,s,n),t.child;case 6:return e===null&&Il(t),null;case 13:return ld(e,t,n);case 4:return Fi(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=jn(t,null,a,n):me(e,t,a,n),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:We(a,l),Gs(e,t,a,l,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,U(ua,a._currentValue),a._currentValue=s,i!==null)if(Ke(i.value,s)){if(i.children===l.children&&!je.current){t=ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){s=i.child;for(var o=c.firstContext;o!==null;){if(o.context===a){if(i.tag===1){o=st(-1,n&-n),o.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?o.next=o:(o.next=g.next,g.next=o),p.pending=o}}i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),$l(i.return,n,t),c.lanes|=n;break}o=o.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(z(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),$l(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}me(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,mn(t,n),l=Be(l),a=a(l),t.flags|=1,me(e,t,a,n),t.child;case 14:return a=t.type,l=We(a,t.pendingProps),l=We(a.type,l),Xs(e,t,a,l,n);case 15:return td(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:We(a,l),Kr(e,t),t.tag=1,we(a)?(e=!0,oa(t)):e=!1,mn(t,n),qc(t,a,l),Ul(t,a,l,n),Ql(null,t,a,!0,e,n);case 19:return id(e,t,n);case 22:return nd(e,t,n)}throw Error(z(156,t.tag))};function kd(e,t){return Go(e,t)}function Jp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,a){return new Jp(e,t,n,a)}function Ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ef(e){if(typeof e=="function")return Ki(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pi)return 11;if(e===fi)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xr(e,t,n,a,l,i){var s=2;if(a=e,typeof e=="function")Ki(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zt:return It(n.children,l,i,t);case ui:s=8,l|=8;break;case fl:return e=Pe(12,n,t,l|2),e.elementType=fl,e.lanes=i,e;case ml:return e=Pe(13,n,t,l),e.elementType=ml,e.lanes=i,e;case hl:return e=Pe(19,n,t,l),e.elementType=hl,e.lanes=i,e;case Fo:return Pa(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case To:s=10;break e;case Lo:s=9;break e;case pi:s=11;break e;case fi:s=14;break e;case mt:s=16,a=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Pe(s,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function It(e,t,n,a){return e=Pe(7,e,a,t),e.lanes=n,e}function Pa(e,t,n,a){return e=Pe(22,e,a,t),e.elementType=Fo,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function dl(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tf(e,t,n,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Yi(e,t,n,a,l,i,s,c,o){return e=new tf(e,t,n,c,o),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Pe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Li(i),e}function nf(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function bd(e){if(!e)return _t;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(we(n))return bc(e,n,t)}return t}function Nd(e,t,n,a,l,i,s,c,o){return e=Yi(n,a,!0,e,l,i,s,c,o),e.context=bd(null),n=e.current,a=he(),l=Ct(n),i=st(a,l),i.callback=t??null,Nt(n,i,l),e.current.lanes=l,hr(e,l,a),ke(e,a),e}function Aa(e,t,n,a){var l=t.current,i=he(),s=Ct(l);return n=bd(n),t.context===null?t.context=n:t.pendingContext=n,t=st(i,s),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Nt(l,t,s),e!==null&&(Qe(e,l,s,i),Hr(e,l,s)),s}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gi(e,t){oo(e,t),(e=e.alternate)&&oo(e,t)}function rf(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}Ma.prototype.render=Xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Aa(e,t,null,null)};Ma.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Aa(null,e,null,null)}),t[ct]=null}};function Ma(e){this._internalRoot=e}Ma.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&ac(e)}};function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function co(){}function af(e,t,n,a,l){if(l){if(typeof a=="function"){var i=a;a=function(){var p=wa(s);i.call(p)}}var s=Nd(t,a,e,0,null,!1,!1,"",co);return e._reactRootContainer=s,e[ct]=s.current,lr(e.nodeType===8?e.parentNode:e),Vt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var c=a;a=function(){var p=wa(o);c.call(p)}}var o=Yi(e,0,!1,null,null,!1,!1,"",co);return e._reactRootContainer=o,e[ct]=o.current,lr(e.nodeType===8?e.parentNode:e),Vt(function(){Aa(t,o,n,a)}),o}function Ra(e,t,n,a,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var c=l;l=function(){var o=wa(s);c.call(o)}}Aa(t,s,e,l)}else s=af(n,t,e,l,a);return wa(s)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(gi(t,n|1),ke(t,te()),!($&6)&&(bn=te()+500,Ft()))}break;case 13:Vt(function(){var a=dt(e,1);if(a!==null){var l=he();Qe(a,e,1,l)}}),Gi(e,1)}};xi=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=he();Qe(t,e,134217728,n)}Gi(e,134217728)}};tc=function(e){if(e.tag===13){var t=Ct(e),n=dt(e,t);if(n!==null){var a=he();Qe(n,e,t,a)}Gi(e,t)}};nc=function(){return W};rc=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Sl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=Ea(a);if(!l)throw Error(z(90));Po(a),vl(a,l)}}}break;case"textarea":Mo(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}};Uo=Hi;Ho=Vt;var lf={usingClientEntryPoint:!1,Events:[xr,tn,Ea,$o,Wo,Hi]},Mn={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sf={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ko(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{Na=Mr.inject(sf),qe=Mr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zi(t))throw Error(z(200));return nf(e,t,null,n)};Te.createRoot=function(e,t){if(!Zi(e))throw Error(z(299));var n=!1,a="",l=Sd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Yi(e,1,!1,null,null,n,!1,a,l),e[ct]=t.current,lr(e.nodeType===8?e.parentNode:e),new Xi(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Ko(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Vt(e)};Te.hydrate=function(e,t,n){if(!Ba(t))throw Error(z(200));return Ra(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Zi(e))throw Error(z(405));var a=n!=null&&n.hydratedSources||null,l=!1,i="",s=Sd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Nd(t,null,e,1,n??null,l,!1,i,s),e[ct]=t.current,lr(e),a)for(e=0;e<a.length;e++)n=a[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ma(t)};Te.render=function(e,t,n){if(!Ba(t))throw Error(z(200));return Ra(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(z(40));return e._reactRootContainer?(Vt(function(){Ra(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Te.unstable_batchedUpdates=Hi;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Ba(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ra(e,t,n,!1,a)};Te.version="18.3.1-next-f1338f8080-20240426";function Cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cd)}catch(e){console.error(e)}}Cd(),Co.exports=Te;var of=Co.exports,zd,uo=of;zd=uo.createRoot,uo.hydrateRoot;const cf="/api";function Ed(){return localStorage.getItem("armvet_token")}function df(e){localStorage.setItem("armvet_token",e)}function _d(){localStorage.removeItem("armvet_token")}async function O(e,t,n){const a={"Content-Type":"application/json"},l=Ed();l&&(a.Authorization=`Bearer ${l}`);const i=await fetch(cf+t,{method:e,headers:a,body:n!==void 0?JSON.stringify(n):void 0});if(i.status===401){_d(),window.location.reload();return}if(!i.ok){const s=await i.text();throw new Error(s||`HTTP ${i.status}`)}return i.json()}const A={login:async(e,t)=>{const n=await O("POST","/auth/login",{username:e,password:t});return n!=null&&n.token&&df(n.token),n},logout:_d,getBookings:()=>O("GET","/bookings"),createBooking:e=>O("POST","/bookings",e),updateBookingStatus:(e,t)=>O("PUT",`/bookings/${e}/status`,{status:t}),getContacts:()=>O("GET","/contacts"),updateContactStatus:(e,t)=>O("PUT",`/contacts/${e}/status`,{status:t}),getAvailability:()=>O("GET","/availability"),createSlot:e=>O("POST","/availability",e),createSlotRange:e=>O("POST","/availability/batch",e),deleteSlot:e=>O("DELETE",`/availability/${e}`),changePassword:(e,t)=>O("POST","/auth/change-password",{currentPassword:e,newPassword:t}),completeTutorial:()=>O("PUT","/auth/tutorial-complete"),resetTutorial:()=>O("DELETE","/auth/tutorial-complete"),deleteBooking:e=>O("DELETE",`/bookings/${e}`),deleteContact:e=>O("DELETE",`/contacts/${e}`),hasToken:()=>!!Ed(),getAdminConfig:()=>O("GET","/admin/config"),saveConfig:e=>O("PUT","/admin/config",e),getDocs:()=>O("GET","/admin/docs"),resetSetup:()=>O("DELETE","/admin/config/setup_complete"),getDeals:()=>O("GET","/deals"),createDeal:e=>O("POST","/deals",e),updateDeal:(e,t)=>O("PUT",`/deals/${e}`,t),deleteDeal:e=>O("DELETE",`/deals/${e}`),getActivity:(e,t)=>O("GET",`/activity?entity_type=${e}&entity_id=${t}`),addActivity:e=>O("POST","/activity",e),deleteActivity:e=>O("DELETE",`/activity/${e}`),getTasks:()=>O("GET","/tasks"),createTask:e=>O("POST","/tasks",e),updateTask:(e,t)=>O("PUT",`/tasks/${e}`,t),deleteTask:e=>O("DELETE",`/tasks/${e}`),getTags:()=>O("GET","/tags"),createTag:e=>O("POST","/tags",e),deleteTag:e=>O("DELETE",`/tags/${e}`),getEntityTags:(e,t)=>O("GET",`/entity-tags?entity_type=${e}&entity_id=${t}`),addEntityTag:e=>O("POST","/entity-tags",e),removeEntityTag:e=>O("POST","/entity-tags/remove",e),getAnalytics:()=>O("GET","/analytics")},qi=["Leadership Development","Executive Coaching","Small Group Workshops","Individual Development","Organizational Culture Training","Federal HR Consulting","Workforce Planning","HR Modernization","Speaking Engagements"],Ji=["Military","Federal","Corporate"],_={dashboard:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),r.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),calendar:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),bookings:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"9",cy:"7",r:"4"}),r.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),r.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),inbox:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 12h-6l-2 3H10l-2-3H2"}),r.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),check:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})}),x:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),clock:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("polyline",{points:"12 6 12 12 16 14"})]}),chevronRight:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"9 18 15 12 9 6"})}),back:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"15 18 9 12 15 6"})}),logout:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),r.jsx("polyline",{points:"16 17 21 12 16 7"}),r.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),menu:r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),star:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",children:r.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),phone:r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),mail:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.jsx("polyline",{points:"22,6 12,13 2,6"})]}),calendarPlus:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),r.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),r.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"20"}),r.jsx("line",{x1:"9",y1:"17",x2:"15",y2:"17"})]}),filter:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),search:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),trash:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"3 6 5 6 21 6"}),r.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),r.jsx("path",{d:"M10 11v6M14 11v6"}),r.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),archive:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"21 8 21 21 3 21 3 8"}),r.jsx("rect",{x:"1",y:"3",width:"22",height:"5"}),r.jsx("line",{x1:"10",y1:"12",x2:"14",y2:"12"})]}),helpCircle:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),mobile:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),r.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),clipboardList:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),r.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),r.jsx("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),r.jsx("line",{x1:"9",y1:"16",x2:"15",y2:"16"})]}),home:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),brush:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L3 14.67V21h6.33L20.84 9.39a5.5 5.5 0 0 0 0-7.78z"})}),list:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),r.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),r.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),r.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),r.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),r.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),tag:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),r.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),globe:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),r.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),code:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"16 18 22 12 16 6"}),r.jsx("polyline",{points:"8 6 2 12 8 18"})]}),download:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"7 10 12 15 17 10"}),r.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),copy:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),r.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),plus:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),settings:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"3"}),r.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),sun:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"5"}),r.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),r.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),r.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),r.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),pipeline:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("rect",{x:"2",y:"3",width:"5",height:"18",rx:"1"}),r.jsx("rect",{x:"9.5",y:"3",width:"5",height:"13",rx:"1"}),r.jsx("rect",{x:"17",y:"3",width:"5",height:"8",rx:"1"})]}),deals:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),r.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"})]}),tasks:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("polyline",{points:"9 11 12 14 22 4"}),r.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),analytics:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),r.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),r.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"}),r.jsx("line",{x1:"2",y1:"20",x2:"22",y2:"20"})]}),bell:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),r.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),activity:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),fields:r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"9",y1:"13",x2:"15",y2:"13"}),r.jsx("line",{x1:"9",y1:"17",x2:"12",y2:"17"})]}),scoring:r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("path",{d:"M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),convertDeal:r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),r.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"})]}),checkCircle:r.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),circle:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("circle",{cx:"12",cy:"12",r:"10"})})},po=`
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

/* ─── Theme: Forest (Deep Green & Sage) ─── */
[data-theme="forest"] {
  --bg-primary: #0D1510;
  --bg-secondary: #111C14;
  --bg-card: #172019;
  --bg-card-hover: #1E2B20;
  --bg-input: #111C14;
  --border: #2A3D2C;
  --border-light: #1F2E21;
  --text-primary: #E8F0E9;
  --text-secondary: #9DB89F;
  --text-muted: #5E7A60;
  --accent: #7EC87A;
  --accent-dim: rgba(126,200,122,0.13);
  --accent-glow: rgba(126,200,122,0.28);
  --green: #4ADE80; --green-dim: rgba(74,222,128,0.12);
  --red: #F87171; --red-dim: rgba(248,113,113,0.12);
  --blue: #67C4E0; --blue-dim: rgba(103,196,224,0.15);
  --orange: #FBBF24; --orange-dim: rgba(251,191,36,0.12);
  --purple: #C084FC; --purple-dim: rgba(192,132,252,0.15);
  --shadow: 0 2px 16px rgba(0,0,0,0.45);
}

/* ─── Theme: Ocean (Slate Blue & Teal) ─── */
[data-theme="ocean"] {
  --bg-primary: #0A1628;
  --bg-secondary: #0E1E36;
  --bg-card: #132743;
  --bg-card-hover: #1A3255;
  --bg-input: #0E1E36;
  --border: #1E3A5F;
  --border-light: #162D4A;
  --text-primary: #E2EDF8;
  --text-secondary: #8BADC8;
  --text-muted: #4E718F;
  --accent: #38BDF8;
  --accent-dim: rgba(56,189,248,0.13);
  --accent-glow: rgba(56,189,248,0.28);
  --green: #34D399; --green-dim: rgba(52,211,153,0.12);
  --red: #F87171; --red-dim: rgba(248,113,113,0.12);
  --blue: #818CF8; --blue-dim: rgba(129,140,248,0.15);
  --orange: #FBBF24; --orange-dim: rgba(251,191,36,0.12);
  --purple: #C084FC; --purple-dim: rgba(192,132,252,0.15);
  --shadow: 0 2px 16px rgba(0,0,0,0.5);
}

/* ─── Theme: Sand (Warm Tan & Terracotta) ─── */
[data-theme="sand"] {
  --bg-primary: #FAF7F2;
  --bg-secondary: #F2EDE4;
  --bg-card: #FFFFFF;
  --bg-card-hover: #F7F3EE;
  --bg-input: #FFFFFF;
  --border: #DDD5C8;
  --border-light: #EAE4DB;
  --text-primary: #2D2018;
  --text-secondary: #6B5244;
  --text-muted: #A08878;
  --accent: #C06030;
  --accent-dim: rgba(192,96,48,0.1);
  --accent-glow: rgba(192,96,48,0.22);
  --green: #2D8A5E; --green-dim: rgba(45,138,94,0.12);
  --red: #C0392B; --red-dim: rgba(192,57,43,0.12);
  --blue: #2A6EBB; --blue-dim: rgba(42,110,187,0.12);
  --orange: #D97706; --orange-dim: rgba(217,119,6,0.12);
  --purple: #7C3AED; --purple-dim: rgba(124,58,237,0.12);
  --shadow: 0 2px 16px rgba(0,0,0,0.08);
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
}

.sidebar-scroll-area {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
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

/* Danger Zone */
.danger-zone-card {
  border: 1px solid #e53e3e55;
  border-radius: 10px;
  overflow: hidden;
  max-width: 560px;
}
.danger-zone-header {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 20px;
  background: rgba(229,62,62,0.07);
  border-bottom: 1px solid #e53e3e33;
}
.danger-zone-header strong { display: block; font-size: 14px; color: #e53e3e; margin-bottom: 6px; }
.danger-zone-header p { font-size: 13px; color: var(--text-secondary); margin: 0; line-height: 1.5; }
.danger-zone-confirm {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.danger-zone-confirm label { font-size: 13px; color: var(--text-secondary); }
.danger-zone-confirm label code { background: var(--bg-tertiary); padding: 1px 6px; border-radius: 4px; font-size: 12px; letter-spacing: 0.5px; color: var(--text-primary); }
.danger-zone-input {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: monospace;
  letter-spacing: 1px;
  transition: border-color 0.2s;
  outline: none;
}
.danger-zone-input:focus { border-color: #e53e3e88; }
.btn-danger {
  background: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  align-self: flex-start;
}
.btn-danger:disabled { opacity: 0.35; cursor: not-allowed; }

/* ─── CRM: Analytics ─── */
.analytics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
.chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
.chart-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
.chart-card h4 { font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px; }
.chart-empty { color: var(--text-muted); font-size: 13px; text-align: center; padding: 24px 0; }
.analytics-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.analytics-table th { text-align: left; padding: 6px 8px; color: var(--text-muted); font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border); }
.analytics-table td { padding: 8px 8px; border-bottom: 1px solid var(--border-light); color: var(--text-secondary); }
.analytics-table td:first-child { color: var(--text-primary); font-weight: 500; }
.analytics-pct-bar { background: var(--bg-primary); border-radius: 4px; height: 6px; flex: 1; overflow: hidden; }
.analytics-pct-fill { background: var(--accent); border-radius: 4px; height: 100%; }

/* ─── CRM: Pipeline ─── */
.pipeline-board { display: flex; gap: 16px; overflow-x: auto; padding-bottom: 16px; align-items: flex-start; }
.pipeline-col { flex: 0 0 260px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.pipeline-col-header { padding: 14px 16px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
.pipeline-col-title { font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
.pipeline-col-meta { font-size: 11px; color: var(--text-muted); }
.pipeline-col-body { padding: 10px; min-height: 80px; }
.pipeline-card { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin-bottom: 8px; cursor: pointer; transition: border-color 0.2s, transform 0.15s; }
.pipeline-card:hover { border-color: var(--accent); transform: translateY(-1px); }
.pipeline-card-title { font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px; }
.pipeline-card-meta { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.pipeline-card-value { font-size: 13px; font-weight: 700; color: var(--accent); }
.pipeline-card-sub { font-size: 11px; color: var(--text-muted); }
.pipeline-card-stage-btns { display: flex; gap: 4px; margin-top: 8px; flex-wrap: wrap; }
.pipeline-stage-btn { font-size: 10px; padding: 2px 8px; border-radius: 10px; border: 1px solid var(--border); background: none; color: var(--text-muted); cursor: pointer; font-family: inherit; transition: all 0.15s; }
.pipeline-stage-btn:hover { border-color: var(--accent); color: var(--accent); }
.pipeline-add-btn { width: 100%; background: none; border: 1px dashed var(--border); border-radius: 8px; color: var(--text-muted); padding: 8px; font-size: 12px; font-family: inherit; cursor: pointer; margin-top: 4px; transition: all 0.15s; }
.pipeline-add-btn:hover { border-color: var(--accent); color: var(--accent); }
.pipeline-empty { color: var(--text-muted); font-size: 12px; text-align: center; padding: 16px 8px; }

/* ─── CRM: Deals ─── */
.deal-list-row { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--border-light); cursor: pointer; transition: background 0.15s; }
.deal-list-row:hover { background: var(--bg-card-hover); }
.deal-list-title { font-size: 14px; font-weight: 600; color: var(--text-primary); flex: 1; min-width: 0; }
.deal-list-sub { font-size: 12px; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.deal-status-badge { font-size: 11px; font-weight: 700; padding: 2px 10px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.5px; }
.deal-status-open { background: var(--blue-dim); color: var(--blue); }
.deal-status-won { background: var(--green-dim); color: var(--green); }
.deal-status-lost { background: rgba(248,113,113,0.12); color: var(--red); }
.deal-detail-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 24px; align-items: flex-start; }
.deal-meta-section { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
.deal-meta-row { display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px; }
.deal-meta-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); font-weight: 600; }
.deal-meta-value { font-size: 14px; color: var(--text-primary); }
.stage-chip { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 10px; font-size: 12px; font-weight: 600; cursor: pointer; border: 2px solid transparent; transition: all 0.15s; margin: 2px; }
.stage-chip.active { border-color: currentColor; }
.prob-row { display: flex; align-items: center; gap: 10px; }
.prob-bar { flex: 1; height: 8px; background: var(--bg-primary); border-radius: 4px; overflow: hidden; }
.prob-fill { height: 100%; background: var(--accent); border-radius: 4px; transition: width 0.3s; }

/* ─── CRM: Activity Timeline ─── */
.activity-timeline { display: flex; flex-direction: column; gap: 0; }
.activity-entry { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border-light); }
.activity-entry:last-child { border-bottom: none; }
.activity-icon { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px; margin-top: 2px; }
.activity-icon-note { background: var(--blue-dim); color: var(--blue); }
.activity-icon-call { background: var(--green-dim); color: var(--green); }
.activity-icon-email { background: var(--accent-dim); color: var(--accent); }
.activity-icon-meeting { background: var(--purple-dim); color: var(--purple); }
.activity-icon-status_change { background: var(--orange-dim); color: var(--orange); }
.activity-content { flex: 1; min-width: 0; }
.activity-type { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); }
.activity-text { font-size: 13px; color: var(--text-secondary); margin-top: 2px; line-height: 1.5; word-break: break-word; }
.activity-time { font-size: 11px; color: var(--text-muted); margin-top: 3px; }
.activity-delete { background: none; border: none; cursor: pointer; color: var(--text-muted); opacity: 0; padding: 2px; transition: opacity 0.15s; }
.activity-entry:hover .activity-delete { opacity: 1; }
.activity-add-form { display: flex; gap: 8px; margin-top: 12px; align-items: flex-end; flex-wrap: wrap; }
.activity-type-select { background: var(--bg-input); border: 1px solid var(--border); border-radius: 8px; padding: 8px 10px; font-size: 13px; color: var(--text-primary); font-family: inherit; cursor: pointer; }
.activity-textarea { background: var(--bg-input); border: 1px solid var(--border); border-radius: 8px; padding: 8px 12px; font-size: 13px; color: var(--text-primary); font-family: inherit; resize: none; flex: 1; min-width: 200px; }
.activity-textarea:focus { outline: none; border-color: var(--accent); }

/* ─── CRM: Tags ─── */
.tag-chip { display: inline-flex; align-items: center; gap: 4px; padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 600; cursor: default; }
.tag-chip-remove { background: none; border: none; cursor: pointer; padding: 0 0 0 2px; line-height: 1; color: inherit; opacity: 0.6; font-size: 13px; }
.tag-chip-remove:hover { opacity: 1; }
.tags-add-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; align-items: center; }
.tag-add-btn { font-size: 11px; padding: 3px 10px; border-radius: 10px; border: 1px dashed var(--border); background: none; color: var(--text-muted); cursor: pointer; font-family: inherit; transition: all 0.15s; }
.tag-add-btn:hover { border-color: var(--accent); color: var(--accent); }
.tag-create-input { background: var(--bg-input); border: 1px solid var(--border); border-radius: 8px; padding: 5px 10px; font-size: 12px; color: var(--text-primary); font-family: inherit; width: 120px; }
.tag-create-input:focus { outline: none; border-color: var(--accent); }

/* ─── CRM: Lead Score ─── */
.lead-score-badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 10px; font-size: 12px; font-weight: 700; }
.lead-score-hot { background: var(--green-dim); color: var(--green); }
.lead-score-warm { background: var(--orange-dim); color: var(--orange); }
.lead-score-cold { background: var(--bg-card); color: var(--text-muted); border: 1px solid var(--border); }

/* ─── CRM: Tasks ─── */
.tasks-group-header { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); padding: 16px 0 8px; }
.tasks-group-header.overdue { color: var(--red); }
.tasks-group-header.today { color: var(--orange); }
.task-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border-light); }
.task-checkbox { width: 18px; height: 18px; border-radius: 5px; border: 2px solid var(--border); background: none; cursor: pointer; flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.task-checkbox.done { background: var(--accent); border-color: var(--accent); }
.task-title { flex: 1; font-size: 14px; color: var(--text-primary); }
.task-title.done { text-decoration: line-through; color: var(--text-muted); }
.task-entity-link { font-size: 11px; color: var(--accent); cursor: pointer; }
.task-due { font-size: 11px; color: var(--text-muted); white-space: nowrap; }
.task-due.overdue { color: var(--red); font-weight: 600; }
.task-delete-btn { background: none; border: none; cursor: pointer; color: var(--text-muted); opacity: 0; padding: 2px; transition: opacity 0.15s; }
.task-row:hover .task-delete-btn { opacity: 1; }
.task-add-form { display: grid; grid-template-columns: 1fr auto auto; gap: 8px; margin-top: 16px; padding: 14px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; }
.task-entity-select { background: var(--bg-input); border: 1px solid var(--border); border-radius: 8px; padding: 8px 10px; font-size: 13px; color: var(--text-primary); font-family: inherit; }

/* ─── Customize: Pipeline Stages ─── */
.stage-editor-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border-light); }
.stage-color-dot { width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; }
.stage-color-picker { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
.stage-color-swatch { width: 18px; height: 18px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: border-color 0.15s; }
.stage-color-swatch.selected { border-color: var(--text-primary); }

/* ─── Customize: Lead Scoring ─── */
.scoring-rule-row { display: flex; align-items: center; gap: 8px; padding: 10px 0; border-bottom: 1px solid var(--border-light); flex-wrap: wrap; }
.scoring-rule-row select, .scoring-rule-row input { background: var(--bg-input); border: 1px solid var(--border); border-radius: 6px; padding: 6px 10px; font-size: 13px; color: var(--text-primary); font-family: inherit; }
.scoring-threshold-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; }
.scoring-preview { background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 12px 16px; font-size: 13px; margin-top: 12px; }

/* ─── Dashboard CRM widgets ─── */
.dash-crm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
.dash-widget { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
.dash-widget h3 { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); margin-bottom: 14px; }
.dash-task-item { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border-light); font-size: 13px; }
.dash-task-item:last-child { border-bottom: none; }
.dash-activity-item { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--border-light); font-size: 13px; }
.dash-activity-item:last-child { border-bottom: none; }
.dash-pipeline-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 4px; }
.dash-pipeline-pill { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 8px 14px; font-size: 12px; }

/* ─── Modal ─── */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 300; display: flex; align-items: center; justify-content: center; padding: 16px; }
.modal-box { background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px; padding: 28px; max-width: 480px; width: 100%; }
.modal-box h3 { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
.modal-box p { font-size: 13px; color: var(--text-secondary); margin-bottom: 20px; }
.modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px; }

/* ─── Customize: Custom Fields ─── */
.field-editor-row { display: flex; align-items: center; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--border-light); }
.field-type-badge { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 6px; background: var(--bg-secondary); color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid var(--border); }

/* ─── Customize: Notifications ─── */
.notif-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--border-light); }
.notif-row:last-child { border-bottom: none; }
.notif-label { font-size: 14px; color: var(--text-primary); font-weight: 500; }
.notif-sub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
.toggle-switch { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
.toggle-switch input { opacity: 0; width: 0; height: 0; }
.toggle-track { position: absolute; inset: 0; background: var(--border); border-radius: 11px; cursor: pointer; transition: background 0.2s; }
.toggle-track:before { content: ''; position: absolute; width: 16px; height: 16px; left: 3px; top: 3px; background: white; border-radius: 50%; transition: transform 0.2s; }
.toggle-switch input:checked + .toggle-track { background: var(--accent); }
.toggle-switch input:checked + .toggle-track:before { transform: translateX(18px); }

/* ─── Deal form / quick form ─── */
.quick-form { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; margin-bottom: 20px; }
.quick-form h3 { font-size: 14px; font-weight: 700; margin-bottom: 16px; color: var(--text-primary); }
.quick-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.quick-form-actions { display: flex; gap: 8px; margin-top: 16px; }

/* ─── Analytics: KPI row ─── */
.kpi-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
.kpi-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); margin-bottom: 8px; }
.kpi-value { font-size: 28px; font-weight: 800; color: var(--text-primary); line-height: 1; }
.kpi-sub { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

/* ─── Pipeline: Add deal form inline ─── */
.pipeline-new-form { padding: 10px; background: var(--bg-primary); border-top: 1px solid var(--border); }
.pipeline-new-form input { width: 100%; background: var(--bg-input); border: 1px solid var(--border); border-radius: 6px; padding: 7px 10px; font-size: 13px; color: var(--text-primary); font-family: inherit; margin-bottom: 6px; box-sizing: border-box; }
.pipeline-new-form input:focus { outline: none; border-color: var(--accent); }
.pipeline-new-form-btns { display: flex; gap: 6px; }

/* ─── Deal detail tabs ─── */
.detail-tabs { display: flex; gap: 0; border-bottom: 1px solid var(--border); margin-bottom: 20px; }
.detail-tab { background: none; border: none; cursor: pointer; padding: 10px 16px; font-size: 13px; font-weight: 600; color: var(--text-muted); border-bottom: 2px solid transparent; font-family: inherit; transition: color 0.15s; }
.detail-tab.active { color: var(--accent); border-bottom-color: var(--accent); }
.detail-tab:hover:not(.active) { color: var(--text-primary); }

/* ─── Probability slider ─── */
.prob-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 6px; border-radius: 3px; background: var(--bg-primary); outline: none; }
.prob-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--accent); cursor: pointer; }

@media (max-width: 768px) {
  .avail-form-inline { grid-template-columns: 1fr; }
  .tutorial-card { padding: 32px 24px; }
  .tutorial-title { font-size: 19px; }
  .tutorial-body { font-size: 15px; }
  .theme-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .api-docs-header { flex-direction: column; align-items: flex-start; }
  .api-docs-desc { margin-left: 0; }
  .analytics-grid { grid-template-columns: 1fr 1fr; }
  .chart-grid { grid-template-columns: 1fr; }
  .deal-detail-layout { grid-template-columns: 1fr; }
  .dash-crm-row { grid-template-columns: 1fr; }
  .pipeline-board { flex-direction: column; }
  .pipeline-col { flex: none; width: 100%; }
  .quick-form-grid { grid-template-columns: 1fr; }
  .analytics-grid { grid-template-columns: 1fr 1fr; }
}
`;typeof localStorage<"u"&&document.documentElement.setAttribute("data-theme",localStorage.getItem("armvet_theme")||"auto");function uf(){const[e,t]=S.useState(()=>localStorage.getItem("armvet_theme")||"auto");return[e,a=>{localStorage.setItem("armvet_theme",a),document.documentElement.setAttribute("data-theme",a),t(a)}]}function ka(e){return{pending:"var(--orange)",approved:"var(--green)",declined:"var(--red)",new:"var(--blue)",replied:"var(--green)",archived:"var(--text-muted)","on-calendar":"var(--purple)"}[e]||"var(--text-muted)"}function Me(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Zr(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function cn(e){if(!e)return"";const[t,n]=e.split(":").map(Number),a=t>=12?"PM":"AM";return`${t%12||12}:${String(n).padStart(2,"0")} ${a}`}function Nn(e){return"$"+(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})}function pf(e){const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"just now";if(n<60)return`${n}m ago`;const a=Math.floor(n/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function ff(e,t){if(!t||!t.length)return 0;let n=0;for(const a of t){const l=String(e[a.field]||"").toLowerCase(),i=String(a.value||"").toLowerCase();a.operator==="equals"&&l===i&&(n+=Number(a.points)||0),a.operator==="contains"&&l.includes(i)&&(n+=Number(a.points)||0)}return Math.max(0,Math.min(100,n))}function Td({entity:e,appConfig:t}){var c,o;const n=((c=t==null?void 0:t.lead_scoring_rules)==null?void 0:c.rules)||[],a=((o=t==null?void 0:t.lead_scoring_rules)==null?void 0:o.thresholds)||{hot:70,warm:40},l=ff(e,n);if(!n.length)return null;const i=l>=a.hot?"hot":l>=a.warm?"warm":"cold",s=i==="hot"?"🔥 Hot":i==="warm"?"◆ Warm":"· Cold";return r.jsxs("span",{className:`lead-score-badge lead-score-${i}`,children:[s," ",l,"%"]})}function fo({data:e,valueKey:t,labelKey:n,color:a="var(--accent)"}){if(!e||!e.length)return r.jsx("div",{className:"chart-empty",children:"No data yet"});const l=Math.max(...e.map(o=>o[t]),1),i=100,s=300,c=Math.max(8,s/e.length-6);return r.jsx("svg",{viewBox:`0 0 ${s} ${i+22}`,style:{width:"100%"},children:e.map((o,p)=>{const g=Math.max(2,o[t]/l*i),j=s/e.length*p+(s/e.length-c)/2;return r.jsxs("g",{children:[r.jsx("rect",{x:j,y:i-g,width:c,height:g,fill:a,rx:3,opacity:.85}),r.jsx("text",{x:j+c/2,y:i+14,textAnchor:"middle",fontSize:9,fill:"var(--text-muted)",children:o[n]}),o[t]>0&&r.jsx("text",{x:j+c/2,y:i-g-3,textAnchor:"middle",fontSize:9,fill:"var(--text-secondary)",children:o[t]})]},p)})})}function mo({data:e,valueKey:t,labelKey:n,color:a="var(--accent)"}){if(!e||!e.length)return r.jsx("div",{className:"chart-empty",children:"No data yet"});const l=Math.max(...e.map(o=>o[t]),1),i=28,s=280,c=100;return r.jsx("svg",{viewBox:`0 0 ${s} ${e.length*i}`,style:{width:"100%"},children:e.map((o,p)=>{const g=Math.max(2,o[t]/l*(s-c-30)),j=p*i;return r.jsxs("g",{children:[r.jsx("text",{x:c-4,y:j+i/2+4,textAnchor:"end",fontSize:10,fill:"var(--text-secondary)",children:String(o[n]).substring(0,16)}),r.jsx("rect",{x:c,y:j+6,width:g,height:i-12,fill:a,rx:3,opacity:.85}),r.jsx("text",{x:c+g+4,y:j+i/2+4,fontSize:10,fill:"var(--text-muted)",children:o[t]})]},p)})})}function mf({data:e,colors:t}){if(!e||!e.length)return r.jsx("div",{className:"chart-empty",children:"No data yet"});const n=e.reduce((p,g)=>p+g.value,0);if(n===0)return r.jsx("div",{className:"chart-empty",children:"No data yet"});const a=50,l=70,i=60,s=22,c=2*Math.PI*a;let o=0;return r.jsxs("svg",{viewBox:"0 0 200 120",style:{width:"100%"},children:[e.map((p,g)=>{const h=p.value/n*c,y=r.jsx("circle",{cx:l,cy:i,r:a,fill:"none",stroke:t[g%t.length],strokeWidth:s,strokeDasharray:`${h} ${c-h}`,strokeDashoffset:-o,transform:`rotate(-90 ${l} ${i})`},g);return o+=h,y}),r.jsx("text",{x:l,y:i+5,textAnchor:"middle",fontSize:14,fontWeight:"700",fill:"var(--text-primary)",children:n}),r.jsx("g",{children:e.map((p,g)=>r.jsxs("g",{children:[r.jsx("rect",{x:130,y:g*18+8,width:10,height:10,rx:2,fill:t[g%t.length]}),r.jsxs("text",{x:144,y:g*18+17,fontSize:10,fill:"var(--text-secondary)",children:[p.label," (",p.value,")"]})]},g))})]})}function es({entityType:e,entityId:t,addToast:n}){const[a,l]=S.useState([]),[i,s]=S.useState(!0),[c,o]=S.useState("note"),[p,g]=S.useState(""),[j,h]=S.useState(!1);S.useEffect(()=>{A.getActivity(e,t).then(l).catch(()=>{}).finally(()=>s(!1))},[e,t]);const y=async()=>{if(p.trim()){h(!0);try{const k=await A.addActivity({entity_type:e,entity_id:t,type:c,content:p.trim()});l(d=>[k,...d]),g("")}catch{n({message:"Failed to add note",type:"error"})}finally{h(!1)}}},x=async k=>{try{await A.deleteActivity(k),l(d=>d.filter(u=>u.id!==k))}catch{n({message:"Failed to delete",type:"error"})}},w={note:"📝",call:"📞",email:"✉️",meeting:"🤝",status_change:"🔄"};return r.jsxs("div",{children:[r.jsxs("div",{className:"activity-add-form",children:[r.jsxs("select",{className:"activity-type-select",value:c,onChange:k=>o(k.target.value),children:[r.jsx("option",{value:"note",children:"Note"}),r.jsx("option",{value:"call",children:"Call"}),r.jsx("option",{value:"email",children:"Email"}),r.jsx("option",{value:"meeting",children:"Meeting"})]}),r.jsx("textarea",{className:"activity-textarea",rows:2,placeholder:"Add a note...",value:p,onChange:k=>g(k.target.value),onKeyDown:k=>{k.key==="Enter"&&(k.ctrlKey||k.metaKey)&&y()}}),r.jsx("button",{className:"btn-primary",onClick:y,disabled:j||!p.trim(),style:{alignSelf:"flex-end",padding:"8px 14px",fontSize:13},children:j?"...":"Add"})]}),i&&r.jsx("div",{style:{color:"var(--text-muted)",fontSize:13,padding:"12px 0"},children:"Loading…"}),!i&&!a.length&&r.jsx("div",{style:{color:"var(--text-muted)",fontSize:13,padding:"12px 0"},children:"No activity yet. Add a note above."}),r.jsx("div",{className:"activity-timeline",style:{marginTop:12},children:a.map(k=>r.jsxs("div",{className:"activity-entry",children:[r.jsx("div",{className:`activity-icon activity-icon-${k.type}`,children:w[k.type]||"📝"}),r.jsxs("div",{className:"activity-content",children:[r.jsx("div",{className:"activity-type",children:k.type}),r.jsx("div",{className:"activity-text",children:k.content}),r.jsx("div",{className:"activity-time",children:pf(k.createdAt)})]}),r.jsx("button",{className:"activity-delete",onClick:()=>x(k.id),title:"Delete",children:r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[r.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},k.id))})]})}function ts({entityType:e,entityId:t,addToast:n}){const[a,l]=S.useState([]),[i,s]=S.useState([]),[c,o]=S.useState(!1),[p,g]=S.useState(""),[j,h]=S.useState("#6B7280"),y=["#6B7280","#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#EC4899","#14B8A6"];S.useEffect(()=>{Promise.all([A.getTags(),A.getEntityTags(e,t)]).then(([u,m])=>{l(u),s(m)}).catch(()=>{})},[e,t]);const x=async u=>{if(!i.find(m=>m.id===u.id))try{await A.addEntityTag({entity_type:e,entity_id:t,tag_id:u.id}),s(m=>[...m,u])}catch{n({message:"Failed to add tag",type:"error"})}},w=async u=>{try{await A.removeEntityTag({entity_type:e,entity_id:t,tag_id:u}),s(m=>m.filter(b=>b.id!==u))}catch{n({message:"Failed to remove tag",type:"error"})}},k=async()=>{if(p.trim())try{const u=await A.createTag({name:p.trim(),color:j});l(m=>[...m.filter(b=>b.id!==u.id),u]),await x(u),g(""),o(!1)}catch{n({message:"Failed to create tag",type:"error"})}},d=a.filter(u=>!i.find(m=>m.id===u.id));return r.jsxs("div",{children:[r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:i.map(u=>r.jsxs("span",{className:"tag-chip",style:{background:u.color+"22",color:u.color},children:[u.name,r.jsx("button",{className:"tag-chip-remove",onClick:()=>w(u.id),children:"×"})]},u.id))}),r.jsxs("div",{className:"tags-add-row",children:[d.map(u=>r.jsxs("button",{className:"tag-add-btn",onClick:()=>x(u),style:{borderColor:u.color+"66",color:u.color},children:["+ ",u.name]},u.id)),!c&&r.jsx("button",{className:"tag-add-btn",onClick:()=>o(!0),children:"+ New Tag"}),c&&r.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"},children:[r.jsx("input",{className:"tag-create-input",placeholder:"Tag name",value:p,onChange:u=>g(u.target.value),onKeyDown:u=>u.key==="Enter"&&k(),autoFocus:!0}),r.jsx("div",{style:{display:"flex",gap:4},children:y.map(u=>r.jsx("button",{onClick:()=>h(u),style:{width:16,height:16,borderRadius:"50%",background:u,border:j===u?"2px solid var(--text-primary)":"2px solid transparent",cursor:"pointer"}},u))}),r.jsx("button",{className:"btn-primary",onClick:k,style:{padding:"5px 12px",fontSize:12},children:"Create"}),r.jsx("button",{className:"btn-secondary",onClick:()=>o(!1),style:{padding:"5px 12px",fontSize:12},children:"Cancel"})]})]})]})}function hf({deals:e,setDeals:t,appConfig:n,setPage:a,setSelectedDeal:l,addToast:i}){const s=(n==null?void 0:n.pipeline_stages)||yr,[c,o]=S.useState(null),[p,g]=S.useState(""),[j,h]=S.useState(""),y=e.filter(d=>d.status==="open"),x=d=>y.filter(u=>u.stageId===d),w=async(d,u)=>{try{const m=await A.updateDeal(d.id,{stage_id:u});t(b=>b.map(N=>N.id===d.id?{...N,stageId:m.stageId}:N))}catch{i({message:"Failed to move deal",type:"error"})}},k=async d=>{const u=p.trim();if(u)try{const m=await A.createDeal({title:u,stage_id:d,value:parseFloat(j)||0});t(b=>[m,...b]),g(""),h(""),o(null),i({message:`Deal "${m.title}" created`})}catch{i({message:"Failed to create deal",type:"error"})}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Pipeline"}),r.jsx("p",{children:"Track deals through your sales stages"})]}),r.jsx("div",{className:"pipeline-board",children:s.map(d=>{const u=x(d.id),m=u.reduce((b,N)=>b+(N.value||0),0);return r.jsxs("div",{className:"pipeline-col",children:[r.jsxs("div",{className:"pipeline-col-header",children:[r.jsxs("div",{className:"pipeline-col-title",children:[r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:d.color,flexShrink:0}}),d.name,r.jsx("span",{style:{background:d.color+"22",color:d.color,fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:10},children:u.length})]}),r.jsx("div",{className:"pipeline-col-meta",children:Nn(m)})]}),r.jsxs("div",{className:"pipeline-col-body",children:[u.length===0&&c!==d.id&&r.jsx("div",{className:"pipeline-empty",children:"No deals"}),u.map(b=>r.jsxs("div",{className:"pipeline-card",onClick:()=>{l(b.id),a("deal-detail")},children:[r.jsx("div",{className:"pipeline-card-title",children:b.title}),r.jsxs("div",{className:"pipeline-card-meta",children:[r.jsx("span",{className:"pipeline-card-value",children:Nn(b.value)}),b.contactName&&r.jsx("span",{className:"pipeline-card-sub",children:b.contactName})]}),r.jsx("div",{className:"pipeline-card-stage-btns",children:s.filter(N=>N.id!==d.id).slice(0,3).map(N=>r.jsxs("button",{className:"pipeline-stage-btn",onClick:C=>{C.stopPropagation(),w(b,N.id)},children:["→ ",N.name]},N.id))})]},b.id)),c===d.id?r.jsxs("div",{className:"pipeline-new-form",children:[r.jsx("input",{placeholder:"Deal title",value:p,onChange:b=>g(b.target.value),onKeyDown:b=>{b.key==="Enter"&&k(d.id),b.key==="Escape"&&o(null)},autoFocus:!0}),r.jsx("input",{placeholder:"Value ($)",type:"number",value:j,onChange:b=>h(b.target.value),style:{marginBottom:8}}),r.jsxs("div",{className:"pipeline-new-form-btns",children:[r.jsx("button",{className:"btn-primary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>k(d.id),children:"Add"}),r.jsx("button",{className:"btn-secondary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>{o(null),g(""),h("")},children:"Cancel"})]})]}):r.jsx("button",{className:"pipeline-add-btn",onClick:()=>{o(d.id),g(""),h("")},children:"+ Add Deal"})]})]},d.id)})})]})}function gf({appConfig:e}){const[t,n]=S.useState(null),[a,l]=S.useState(!0),[i,s]=S.useState(!1);if(S.useEffect(()=>{A.getAnalytics().then(n).catch(()=>s(!0)).finally(()=>l(!1))},[]),a)return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Analytics"}),r.jsx("p",{children:"Performance overview and pipeline insights"})]}),r.jsx("div",{style:{color:"var(--text-muted)",fontSize:14,padding:"40px 0"},children:"Loading analytics…"})]});if(i||!t)return r.jsxs("div",{children:[r.jsx("div",{className:"page-header",children:r.jsx("h2",{children:"Analytics"})}),r.jsx("div",{className:"empty-state",children:r.jsx("p",{children:"Failed to load analytics data."})})]});const c=(e==null?void 0:e.pipeline_stages)||yr,o=t.bookings_by_status||{},p=Object.values(o).reduce((d,u)=>d+u,0),g=(t.bookings_by_month||[]).map(d=>({label:d.month.slice(5),value:d.count})),j=(t.revenue_by_month||[]).map(d=>({label:d.month.slice(5),value:Math.round(d.won_value)})),h=(t.top_services||[]).map(d=>({label:d.service,value:d.count})),y=(t.top_categories||[]).map(d=>({label:d.category,value:d.count})),x=c.map(d=>({label:d.name,value:(t.deals_by_stage||[]).filter(u=>u.stageId===d.id&&u.status==="open").reduce((u,m)=>u+m.count,0)})).filter(d=>d.value>0),w=c.map(d=>d.color),k=t.tasks_summary||{overdue:0,due_today:0,upcoming:0};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Analytics"}),r.jsx("p",{children:"Performance overview and pipeline insights"})]}),r.jsxs("div",{className:"analytics-grid",children:[r.jsxs("div",{className:"kpi-card",children:[r.jsx("div",{className:"kpi-label",children:"Total Bookings"}),r.jsx("div",{className:"kpi-value",children:p}),r.jsxs("div",{className:"kpi-sub",children:[o.pending||0," pending review"]})]}),r.jsxs("div",{className:"kpi-card",children:[r.jsx("div",{className:"kpi-label",children:"Conversion Rate"}),r.jsxs("div",{className:"kpi-value",children:[t.conversion_rate,"%"]}),r.jsx("div",{className:"kpi-sub",children:"Approved or on-calendar"})]}),r.jsxs("div",{className:"kpi-card",children:[r.jsx("div",{className:"kpi-label",children:"Open Pipeline"}),r.jsx("div",{className:"kpi-value",style:{fontSize:22},children:Nn(t.open_deals_value)}),r.jsx("div",{className:"kpi-sub",children:"Total value of open deals"})]}),r.jsxs("div",{className:"kpi-card",children:[r.jsx("div",{className:"kpi-label",children:"Won Revenue"}),r.jsx("div",{className:"kpi-value",style:{fontSize:22,color:"var(--green)"},children:Nn(t.won_revenue)}),r.jsx("div",{className:"kpi-sub",children:"Last 6 months"})]})]}),r.jsxs("div",{className:"analytics-grid",style:{gridTemplateColumns:"repeat(3, 1fr)",marginBottom:24},children:[r.jsxs("div",{className:"kpi-card",children:[r.jsx("div",{className:"kpi-label",children:"Overdue Tasks"}),r.jsx("div",{className:"kpi-value",style:{color:k.overdue>0?"var(--red)":void 0},children:k.overdue})]}),r.jsxs("div",{className:"kpi-card",children:[r.jsx("div",{className:"kpi-label",children:"Due Today"}),r.jsx("div",{className:"kpi-value",style:{color:k.due_today>0?"var(--orange)":void 0},children:k.due_today})]}),r.jsxs("div",{className:"kpi-card",children:[r.jsx("div",{className:"kpi-label",children:"Upcoming Tasks"}),r.jsx("div",{className:"kpi-value",children:k.upcoming})]})]}),r.jsxs("div",{className:"chart-grid",children:[r.jsxs("div",{className:"chart-card",children:[r.jsx("h4",{children:"Bookings Per Month"}),r.jsx(fo,{data:g,valueKey:"value",labelKey:"label"})]}),r.jsxs("div",{className:"chart-card",children:[r.jsx("h4",{children:"Revenue Won Per Month"}),r.jsx(fo,{data:j,valueKey:"value",labelKey:"label",color:"var(--green)"})]})]}),r.jsxs("div",{className:"chart-grid",children:[r.jsxs("div",{className:"chart-card",children:[r.jsx("h4",{children:"Open Deals by Stage"}),x.length>0?r.jsx(mf,{data:x,colors:w}):r.jsx("div",{className:"chart-empty",children:"No open deals yet"})]}),r.jsxs("div",{className:"chart-card",children:[r.jsx("h4",{children:"Bookings by Status"}),r.jsxs("table",{className:"analytics-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Count"}),r.jsx("th",{style:{width:"45%"},children:"Share"})]})}),r.jsx("tbody",{children:Object.entries(o).sort((d,u)=>u[1]-d[1]).map(([d,u])=>{const m=p?Math.round(u/p*100):0;return r.jsxs("tr",{children:[r.jsx("td",{children:d}),r.jsx("td",{children:u}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("div",{className:"analytics-pct-bar",children:r.jsx("div",{className:"analytics-pct-fill",style:{width:`${m}%`}})}),r.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",minWidth:28},children:[m,"%"]})]})})]},d)})})]})]})]}),r.jsxs("div",{className:"chart-grid",children:[r.jsxs("div",{className:"chart-card",children:[r.jsx("h4",{children:"Top Services"}),r.jsx(mo,{data:h,valueKey:"value",labelKey:"label"})]}),r.jsxs("div",{className:"chart-card",children:[r.jsx("h4",{children:"Top Categories"}),r.jsx(mo,{data:y,valueKey:"value",labelKey:"label",color:"var(--purple)"})]})]})]})}function xf({deals:e,setDeals:t,appConfig:n,setPage:a,setSelectedDeal:l,addToast:i}){var N;const s=(n==null?void 0:n.pipeline_stages)||yr,[c,o]=S.useState("open"),[p,g]=S.useState(""),[j,h]=S.useState(!1),[y,x]=S.useState(""),[w,k]=S.useState(""),[d,u]=S.useState(((N=s[0])==null?void 0:N.id)||"new"),m=e.filter(C=>{const f=c==="all"||C.status===c,v=!p||C.title.toLowerCase().includes(p.toLowerCase())||(C.contactName||"").toLowerCase().includes(p.toLowerCase());return f&&v}),b=async()=>{var f;const C=y.trim();if(C)try{const v=await A.createDeal({title:C,stage_id:d,value:parseFloat(w)||0});t(E=>[v,...E]),x(""),k(""),u(((f=s[0])==null?void 0:f.id)||"new"),h(!1),i({message:`Deal "${v.title}" created`})}catch{i({message:"Failed to create deal",type:"error"})}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Deals"}),r.jsx("p",{children:"All deals across your pipeline"})]}),r.jsxs("div",{style:{display:"flex",gap:10,marginBottom:16,alignItems:"center"},children:[r.jsxs("div",{className:"search-bar",style:{flex:1,marginBottom:0},children:[r.jsx("span",{className:"search-icon",children:_.search}),r.jsx("input",{placeholder:"Search deals or contacts…",value:p,onChange:C=>g(C.target.value)})]}),r.jsxs("button",{className:"btn-primary",onClick:()=>h(C=>!C),style:{whiteSpace:"nowrap",flexShrink:0},children:[_.plus," New Deal"]})]}),j&&r.jsxs("div",{className:"quick-form",children:[r.jsx("h3",{children:"New Deal"}),r.jsxs("div",{className:"quick-form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Title"}),r.jsx("input",{className:"form-input",value:y,onChange:C=>x(C.target.value),placeholder:"Deal name",autoFocus:!0,onKeyDown:C=>C.key==="Enter"&&b()})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Value ($)"}),r.jsx("input",{className:"form-input",type:"number",value:w,onChange:C=>k(C.target.value),placeholder:"0"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Stage"}),r.jsx("select",{className:"form-input",value:d,onChange:C=>u(C.target.value),children:s.map(C=>r.jsx("option",{value:C.id,children:C.name},C.id))})]})]}),r.jsxs("div",{className:"quick-form-actions",children:[r.jsx("button",{className:"btn-primary",onClick:b,children:"Create Deal"}),r.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:"Cancel"})]})]}),r.jsxs("div",{className:"section-header",style:{marginBottom:0},children:[r.jsx("div",{className:"filters",children:["all","open","won","lost"].map(C=>r.jsx("button",{className:`filter-chip ${c===C?"active":""}`,onClick:()=>o(C),children:C==="all"?"All":C.charAt(0).toUpperCase()+C.slice(1)},C))}),r.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:[m.length," deal",m.length!==1?"s":""]})]}),r.jsx("div",{className:"settings-section",style:{padding:0,marginTop:12},children:m.length===0?r.jsx("div",{className:"empty-state",children:r.jsx("p",{children:"No deals found."})}):m.map(C=>{const f=s.find(v=>v.id===C.stageId);return r.jsxs("div",{className:"deal-list-row",onClick:()=>{l(C.id),a("deal-detail")},children:[r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{className:"deal-list-title",children:C.title}),r.jsxs("div",{className:"deal-list-sub",children:[C.contactName||C.bookingName||"No contact linked",C.closeDate?` · Close ${Me(C.closeDate.split("T")[0])}`:""]})]}),f&&r.jsx("span",{style:{fontSize:11,padding:"2px 10px",borderRadius:10,background:f.color+"22",color:f.color,fontWeight:700,whiteSpace:"nowrap",flexShrink:0},children:f.name}),r.jsx("span",{style:{fontSize:14,fontWeight:700,color:"var(--accent)",whiteSpace:"nowrap",flexShrink:0},children:Nn(C.value)}),r.jsx("span",{className:`deal-status-badge deal-status-${C.status}`,children:C.status}),r.jsx("span",{className:"card-chevron",children:_.chevronRight})]},C.id)})})]})}function vf({dealId:e,deals:t,setDeals:n,appConfig:a,setPage:l,addToast:i}){const s=t.find(P=>P.id===e),c=(a==null?void 0:a.pipeline_stages)||yr,[o,p]=S.useState("details"),[g,j]=S.useState(!1),[h,y]=S.useState(""),[x,w]=S.useState(""),[k,d]=S.useState(""),[u,m]=S.useState(0),[b,N]=S.useState(""),[C,f]=S.useState("open"),[v,E]=S.useState(!1);if(S.useEffect(()=>{var P;s&&(y(s.title),w(String(s.value||"")),d(s.stageId||((P=c[0])==null?void 0:P.id)||""),m(s.probability||0),N(s.closeDate?s.closeDate.split("T")[0]:""),f(s.status||"open"))},[s==null?void 0:s.id]),!s)return r.jsxs("div",{children:[r.jsxs("button",{className:"detail-back",onClick:()=>l("deals"),children:[_.back," Back to Deals"]}),r.jsx("div",{className:"empty-state",children:r.jsx("p",{children:"Deal not found."})})]});const F=async()=>{E(!0);try{const P=await A.updateDeal(s.id,{title:h,value:parseFloat(x)||0,stage_id:k,probability:u,close_date:b||null,status:C});n(be=>be.map(Ne=>Ne.id===s.id?{...Ne,...P}:Ne)),j(!1),i({message:"Deal updated"})}catch{i({message:"Failed to update deal",type:"error"})}finally{E(!1)}},D=async()=>{if(window.confirm(`Delete deal "${s.title}"? This cannot be undone.`))try{await A.deleteDeal(s.id),n(P=>P.filter(be=>be.id!==s.id)),l("deals"),i({message:"Deal deleted"})}catch{i({message:"Failed to delete deal",type:"error"})}},Y=async P=>{try{const be=await A.updateDeal(s.id,{stage_id:P});n(Ne=>Ne.map(T=>T.id===s.id?{...T,...be}:T))}catch{i({message:"Failed to update stage",type:"error"})}},Oe=async P=>{try{const be=await A.updateDeal(s.id,{status:P});n(Ne=>Ne.map(T=>T.id===s.id?{...T,...be}:T))}catch{i({message:"Failed to update status",type:"error"})}},et=c.find(P=>P.id===s.stageId);return r.jsxs("div",{className:"detail-view",children:[r.jsxs("button",{className:"detail-back",onClick:()=>l("deals"),children:[_.back," Back to Deals"]}),r.jsxs("div",{className:"detail-card",children:[r.jsxs("div",{className:"detail-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"detail-name",children:s.title}),r.jsx("div",{className:"detail-org",children:s.contactName||s.bookingName||""})]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[et&&r.jsx("span",{style:{fontSize:12,padding:"3px 12px",borderRadius:10,background:et.color+"22",color:et.color,fontWeight:700},children:et.name}),r.jsx("span",{className:`deal-status-badge deal-status-${s.status}`,children:s.status})]})]}),r.jsx("div",{style:{display:"flex",gap:8,marginBottom:20,borderBottom:"1px solid var(--border)",paddingBottom:0},children:["details","activity","tags"].map(P=>r.jsx("button",{onClick:()=>p(P),style:{background:"none",border:"none",cursor:"pointer",padding:"8px 14px",fontSize:13,fontWeight:600,color:o===P?"var(--accent)":"var(--text-muted)",borderBottom:o===P?"2px solid var(--accent)":"2px solid transparent",fontFamily:"inherit",textTransform:"capitalize"},children:P},P))}),o==="details"&&(g?r.jsxs("div",{children:[r.jsxs("div",{className:"quick-form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Title"}),r.jsx("input",{className:"form-input",value:h,onChange:P=>y(P.target.value),autoFocus:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Value ($)"}),r.jsx("input",{className:"form-input",type:"number",value:x,onChange:P=>w(P.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Stage"}),r.jsx("select",{className:"form-input",value:k,onChange:P=>d(P.target.value),children:c.map(P=>r.jsx("option",{value:P.id,children:P.name},P.id))})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Status"}),r.jsxs("select",{className:"form-input",value:C,onChange:P=>f(P.target.value),children:[r.jsx("option",{value:"open",children:"Open"}),r.jsx("option",{value:"won",children:"Won"}),r.jsx("option",{value:"lost",children:"Lost"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("label",{className:"form-label",children:["Probability — ",u,"%"]}),r.jsx("input",{className:"prob-slider",type:"range",min:0,max:100,value:u,onChange:P=>m(Number(P.target.value))})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Close Date"}),r.jsx("input",{className:"form-input",type:"date",value:b,onChange:P=>N(P.target.value)})]})]}),r.jsxs("div",{className:"detail-actions",children:[r.jsx("button",{className:"btn-primary",onClick:F,disabled:v,children:v?"Saving…":"Save"}),r.jsx("button",{className:"btn-secondary",onClick:()=>j(!1),children:"Cancel"})]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"deal-detail-layout",children:[r.jsxs("div",{className:"deal-meta-section",children:[r.jsxs("div",{className:"deal-meta-row",children:[r.jsx("div",{className:"deal-meta-label",children:"Value"}),r.jsx("div",{className:"deal-meta-value",style:{fontSize:24,fontWeight:800,color:"var(--accent)"},children:Nn(s.value)})]}),r.jsxs("div",{className:"deal-meta-row",children:[r.jsx("div",{className:"deal-meta-label",children:"Probability"}),r.jsxs("div",{className:"prob-row",children:[r.jsx("div",{className:"prob-bar",children:r.jsx("div",{className:"prob-fill",style:{width:`${s.probability||0}%`}})}),r.jsxs("span",{style:{fontSize:13,color:"var(--text-secondary)",minWidth:35},children:[s.probability||0,"%"]})]})]}),r.jsxs("div",{className:"deal-meta-row",children:[r.jsx("div",{className:"deal-meta-label",children:"Close Date"}),r.jsx("div",{className:"deal-meta-value",children:s.closeDate?Me(s.closeDate.split("T")[0]):"—"})]}),s.contactName&&r.jsxs("div",{className:"deal-meta-row",children:[r.jsx("div",{className:"deal-meta-label",children:"Contact"}),r.jsx("div",{className:"deal-meta-value",children:s.contactName})]}),s.bookingName&&r.jsxs("div",{className:"deal-meta-row",children:[r.jsx("div",{className:"deal-meta-label",children:"Booking"}),r.jsx("div",{className:"deal-meta-value",children:s.bookingName})]}),r.jsxs("div",{className:"deal-meta-row",children:[r.jsx("div",{className:"deal-meta-label",children:"Created"}),r.jsx("div",{className:"deal-meta-value",style:{fontSize:12,color:"var(--text-muted)"},children:s.createdAt?new Date(s.createdAt).toLocaleDateString():"—"})]})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"deal-meta-section",style:{marginBottom:16},children:[r.jsx("div",{className:"deal-meta-label",style:{marginBottom:10},children:"Stage"}),r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:c.map(P=>r.jsx("span",{className:`stage-chip${s.stageId===P.id?" active":""}`,style:{background:P.color+"22",color:P.color,cursor:"pointer"},onClick:()=>Y(P.id),children:P.name},P.id))})]}),r.jsxs("div",{className:"deal-meta-section",children:[r.jsx("div",{className:"deal-meta-label",style:{marginBottom:10},children:"Status"}),r.jsx("div",{style:{display:"flex",gap:8},children:["open","won","lost"].map(P=>r.jsx("button",{onClick:()=>Oe(P),style:{padding:"6px 16px",borderRadius:8,border:`2px solid ${s.status===P?"var(--accent)":"var(--border)"}`,background:s.status===P?"var(--accent-dim)":"none",color:s.status===P?"var(--accent)":"var(--text-muted)",cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"inherit",textTransform:"capitalize",transition:"all 0.15s"},children:P},P))})]})]})]}),r.jsxs("div",{className:"detail-actions",style:{marginTop:16},children:[r.jsxs("button",{className:"btn-action",style:{background:"var(--accent-dim)",color:"var(--accent)"},onClick:()=>j(!0),children:[_.brush," Edit"]}),r.jsxs("button",{className:"btn-action btn-delete",onClick:D,children:[_.trash," Delete"]})]})]})),o==="activity"&&r.jsx(es,{entityType:"deal",entityId:s.id,addToast:i}),o==="tags"&&r.jsx(ts,{entityType:"deal",entityId:s.id,addToast:i})]})]})}function yf({deals:e,contacts:t,bookings:n,addToast:a}){const[l,i]=S.useState([]),[s,c]=S.useState(!0),[o,p]=S.useState(""),[g,j]=S.useState(""),[h,y]=S.useState(""),[x,w]=S.useState(""),k=new Date().toISOString().split("T")[0];S.useEffect(()=>{A.getTasks().then(i).catch(()=>{}).finally(()=>c(!1))},[]);const d=async f=>{try{const v=await A.updateTask(f.id,{completed:!f.completed});i(E=>E.map(F=>F.id===f.id?{...F,completed:v.completed}:F))}catch{a({message:"Failed to update task",type:"error"})}},u=async f=>{try{await A.deleteTask(f),i(v=>v.filter(E=>E.id!==f))}catch{a({message:"Failed to delete task",type:"error"})}},m=async()=>{const f=o.trim();if(f)try{const v=await A.createTask({title:f,due_date:g||null,entity_type:h||null,entity_id:x?Number(x):null});i(E=>[...E,v]),p(""),j(""),y(""),w(""),a({message:"Task created"})}catch{a({message:"Failed to create task",type:"error"})}},b=f=>{var v,E,F;return!f.entityType||!f.entityId?null:f.entityType==="deal"?(v=e.find(D=>D.id===f.entityId))!=null&&v.title?`Deal: ${e.find(D=>D.id===f.entityId).title}`:null:f.entityType==="contact"?(E=t.find(D=>D.id===f.entityId))!=null&&E.name?`Contact: ${t.find(D=>D.id===f.entityId).name}`:null:f.entityType==="booking"&&(F=n.find(D=>D.id===f.entityId))!=null&&F.name?`Booking: ${n.find(D=>D.id===f.entityId).name}`:null},N=f=>f.dueDate?f.dueDate.split("T")[0]:null,C=[{key:"overdue",label:"Overdue",cls:"overdue",items:l.filter(f=>!f.completed&&N(f)&&N(f)<k)},{key:"today",label:"Due Today",cls:"today",items:l.filter(f=>!f.completed&&N(f)===k)},{key:"upcoming",label:"Upcoming",cls:"",items:l.filter(f=>!f.completed&&(!N(f)||N(f)>k))},{key:"done",label:"Completed",cls:"",items:l.filter(f=>f.completed)}];return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Tasks"}),r.jsx("p",{children:"Follow-up tasks and to-dos linked to your deals and contacts"})]}),r.jsxs("div",{className:"quick-form",children:[r.jsx("h3",{children:"Add Task"}),r.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"flex-end"},children:[r.jsxs("div",{className:"form-group",style:{flex:"2 1 200px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Task"}),r.jsx("input",{className:"form-input",placeholder:"e.g. Follow up with client",value:o,onChange:f=>p(f.target.value),onKeyDown:f=>f.key==="Enter"&&m(),autoFocus:!0})]}),r.jsxs("div",{className:"form-group",style:{flex:"1 1 130px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Due Date"}),r.jsx("input",{className:"form-input",type:"date",value:g,onChange:f=>j(f.target.value)})]}),r.jsxs("div",{className:"form-group",style:{flex:"1 1 120px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Link to"}),r.jsxs("select",{className:"form-input",value:h,onChange:f=>{y(f.target.value),w("")},children:[r.jsx("option",{value:"",children:"None"}),r.jsx("option",{value:"deal",children:"Deal"}),r.jsx("option",{value:"contact",children:"Contact"}),r.jsx("option",{value:"booking",children:"Booking"})]})]}),h==="deal"&&r.jsxs("div",{className:"form-group",style:{flex:"1 1 160px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Deal"}),r.jsxs("select",{className:"form-input",value:x,onChange:f=>w(f.target.value),children:[r.jsx("option",{value:"",children:"Select…"}),e.map(f=>r.jsx("option",{value:f.id,children:f.title},f.id))]})]}),h==="contact"&&r.jsxs("div",{className:"form-group",style:{flex:"1 1 160px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Contact"}),r.jsxs("select",{className:"form-input",value:x,onChange:f=>w(f.target.value),children:[r.jsx("option",{value:"",children:"Select…"}),t.map(f=>r.jsx("option",{value:f.id,children:f.name},f.id))]})]}),h==="booking"&&r.jsxs("div",{className:"form-group",style:{flex:"1 1 160px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Booking"}),r.jsxs("select",{className:"form-input",value:x,onChange:f=>w(f.target.value),children:[r.jsx("option",{value:"",children:"Select…"}),n.map(f=>r.jsx("option",{value:f.id,children:f.name},f.id))]})]}),r.jsx("button",{className:"btn-primary",onClick:m,disabled:!o.trim(),style:{alignSelf:"flex-end",flexShrink:0},children:"Add"})]})]}),s&&r.jsx("div",{style:{color:"var(--text-muted)",fontSize:13,padding:"20px 0"},children:"Loading tasks…"}),!s&&l.length===0&&r.jsx("div",{className:"empty-state",children:r.jsx("p",{children:"No tasks yet. Add one above."})}),!s&&C.map(f=>f.items.length>0&&r.jsxs("div",{children:[r.jsxs("div",{className:`tasks-group-header${f.cls?` ${f.cls}`:""}`,children:[f.label," ",r.jsxs("span",{style:{fontWeight:400},children:["(",f.items.length,")"]})]}),f.items.map(v=>{const E=!v.completed&&N(v)&&N(v)<k,F=b(v);return r.jsxs("div",{className:"task-row",children:[r.jsx("button",{className:`task-checkbox${v.completed?" done":""}`,onClick:()=>d(v),children:v.completed&&_.check}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{className:`task-title${v.completed?" done":""}`,children:v.title}),F&&r.jsx("div",{className:"task-entity-link",children:F})]}),N(v)&&r.jsx("span",{className:`task-due${E?" overdue":""}`,children:Me(N(v))}),r.jsx("button",{className:"task-delete-btn",onClick:()=>u(v.id),title:"Delete",children:_.trash})]},v.id)})]},f.key))]})}function jf({appConfig:e,setAppConfig:t,addToast:n}){const a=["category","service","status","org"],l=["equals","contains"],[i,s]=S.useState(()=>{var w;return((w=e==null?void 0:e.lead_scoring_rules)==null?void 0:w.rules)||[]}),[c,o]=S.useState(()=>{var w;return((w=e==null?void 0:e.lead_scoring_rules)==null?void 0:w.thresholds)||{hot:70,warm:40}}),[p,g]=S.useState(!1),j=()=>s(w=>[...w,{id:"rule_"+Date.now(),field:"category",operator:"equals",value:"",points:10}]),h=(w,k,d)=>s(u=>u.map(m=>m.id===w?{...m,[k]:d}:m)),y=w=>s(k=>k.filter(d=>d.id!==w)),x=async()=>{g(!0);try{await A.saveConfig({lead_scoring_rules:{rules:i,thresholds:c}}),t(w=>({...w,lead_scoring_rules:{rules:i,thresholds:c}})),n({message:"Lead scoring rules saved"})}catch{n({message:"Failed to save rules",type:"error"})}finally{g(!1)}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Lead Scoring"}),r.jsx("p",{children:"Automatically score bookings and contacts based on their attributes. Scores appear as Hot / Warm / Cold badges."})]}),r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"Scoring Rules"}),r.jsx("p",{className:"settings-desc",children:"Each matching rule adds points to a lead. Scores are capped at 100."}),i.length===0&&r.jsx("div",{style:{color:"var(--text-muted)",fontSize:13,padding:"8px 0 12px"},children:"No rules yet — add one below."}),i.map(w=>r.jsxs("div",{className:"scoring-rule-row",children:[r.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",flexShrink:0},children:"If"}),r.jsx("select",{value:w.field,onChange:k=>h(w.id,"field",k.target.value),children:a.map(k=>r.jsx("option",{value:k,children:k},k))}),r.jsx("select",{value:w.operator,onChange:k=>h(w.id,"operator",k.target.value),children:l.map(k=>r.jsx("option",{value:k,children:k},k))}),r.jsx("input",{placeholder:"value",value:w.value,onChange:k=>h(w.id,"value",k.target.value),style:{width:130}}),r.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",flexShrink:0},children:"→ add"}),r.jsx("input",{type:"number",placeholder:"pts",value:w.points,onChange:k=>h(w.id,"points",k.target.value),style:{width:64}}),r.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",flexShrink:0},children:"pts"}),r.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",padding:"2px 4px"},onClick:()=>y(w.id),children:_.trash})]},w.id)),r.jsxs("button",{className:"btn-secondary",style:{marginTop:10},onClick:j,children:[_.plus," Add Rule"]})]}),r.jsxs("div",{className:"settings-section",style:{marginTop:20},children:[r.jsx("h3",{children:"Score Thresholds"}),r.jsx("p",{className:"settings-desc",children:"Set the minimum score required for each tier."}),r.jsxs("div",{className:"scoring-threshold-row",children:[r.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",minWidth:90},children:"🔥 Hot ≥"}),r.jsx("input",{type:"number",className:"form-input",style:{width:80},min:0,max:100,value:c.hot,onChange:w=>o(k=>({...k,hot:Number(w.target.value)}))}),r.jsx("span",{style:{fontSize:13,color:"var(--text-muted)"},children:"points"})]}),r.jsxs("div",{className:"scoring-threshold-row",children:[r.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",minWidth:90},children:"◆ Warm ≥"}),r.jsx("input",{type:"number",className:"form-input",style:{width:80},min:0,max:100,value:c.warm,onChange:w=>o(k=>({...k,warm:Number(w.target.value)}))}),r.jsx("span",{style:{fontSize:13,color:"var(--text-muted)"},children:"points"})]}),r.jsxs("div",{className:"scoring-preview",children:["Score ≥ ",c.hot," → 🔥 Hot  ·  Score ≥ ",c.warm," → ◆ Warm  ·  Below → · Cold"]}),r.jsx("div",{className:"page-actions",style:{marginTop:20},children:r.jsx("button",{className:"btn-primary",onClick:x,disabled:p,children:p?"Saving…":"Save Rules"})})]})]})}function wf({appConfig:e,setAppConfig:t,addToast:n}){const a=["text","number","date","select"],[l,i]=S.useState("bookings"),[s,c]=S.useState(()=>(e==null?void 0:e.custom_fields_bookings)||[]),[o,p]=S.useState(()=>(e==null?void 0:e.custom_fields_contacts)||[]),[g,j]=S.useState(""),[h,y]=S.useState("text"),[x,w]=S.useState(!1),k=l==="bookings"?s:o,d=l==="bookings"?c:p,u=()=>{const N=g.trim();if(N){if(k.find(C=>C.name.toLowerCase()===N.toLowerCase())){n({message:"A field with that name already exists",type:"error"});return}d(C=>[...C,{id:"field_"+Date.now(),name:N,type:h}]),j("")}},m=N=>d(C=>C.filter(f=>f.id!==N)),b=async()=>{w(!0);try{await A.saveConfig({custom_fields_bookings:s,custom_fields_contacts:o}),t(N=>({...N,custom_fields_bookings:s,custom_fields_contacts:o})),n({message:"Custom fields saved"})}catch{n({message:"Failed to save fields",type:"error"})}finally{w(!1)}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Custom Fields"}),r.jsx("p",{children:"Add extra data fields to bookings and contacts for your team to fill in."})]}),r.jsxs("div",{className:"settings-section",children:[r.jsx("div",{className:"filters",style:{marginBottom:20},children:["bookings","contacts"].map(N=>r.jsx("button",{className:`filter-chip ${l===N?"active":""}`,onClick:()=>i(N),children:N.charAt(0).toUpperCase()+N.slice(1)},N))}),k.length===0&&r.jsxs("div",{style:{color:"var(--text-muted)",fontSize:13,padding:"8px 0 12px"},children:["No custom fields for ",l," yet."]}),k.map(N=>r.jsxs("div",{className:"field-editor-row",children:[r.jsx("span",{style:{flex:1,fontSize:14,color:"var(--text-primary)",fontWeight:500},children:N.name}),r.jsx("span",{className:"field-type-badge",children:N.type}),r.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",padding:"2px 4px"},onClick:()=>m(N.id),children:_.trash})]},N.id)),r.jsxs("div",{style:{display:"flex",gap:10,marginTop:16,alignItems:"flex-end",flexWrap:"wrap"},children:[r.jsxs("div",{className:"form-group",style:{flex:"2 1 160px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Field Name"}),r.jsx("input",{className:"form-input",placeholder:"e.g. Budget",value:g,onChange:N=>j(N.target.value),onKeyDown:N=>N.key==="Enter"&&u()})]}),r.jsxs("div",{className:"form-group",style:{flex:"1 1 100px",marginBottom:0},children:[r.jsx("label",{className:"form-label",children:"Type"}),r.jsx("select",{className:"form-input",value:h,onChange:N=>y(N.target.value),children:a.map(N=>r.jsx("option",{value:N,children:N},N))})]}),r.jsxs("button",{className:"btn-secondary",onClick:u,style:{flexShrink:0},children:[_.plus," Add"]})]}),r.jsx("div",{className:"page-actions",style:{marginTop:20},children:r.jsx("button",{className:"btn-primary",onClick:b,disabled:x,children:x?"Saving…":"Save Fields"})})]})]})}function kf({appConfig:e,setAppConfig:t,addToast:n}){const a={smtp_host:"",smtp_port:587,smtp_user:"",smtp_pass:"",from_address:"",notify_new_booking:!1,notify_new_contact:!1,notify_task_due:!1},[l,i]=S.useState(()=>({...a,...(e==null?void 0:e.email_notifications_config)||{}})),[s,c]=S.useState(!1),[o,p]=S.useState(!1),g=(x,w)=>i(k=>({...k,[x]:w})),j=async()=>{c(!0);try{await A.saveConfig({email_notifications_config:l}),t(x=>({...x,email_notifications_config:l})),n({message:"Notification settings saved"})}catch{n({message:"Failed to save settings",type:"error"})}finally{c(!1)}},h=({k:x,label:w,sub:k})=>r.jsxs("div",{className:"notif-row",children:[r.jsxs("div",{children:[r.jsx("div",{className:"notif-label",children:w}),k&&r.jsx("div",{className:"notif-sub",children:k})]}),r.jsxs("label",{className:"toggle-switch",children:[r.jsx("input",{type:"checkbox",checked:!!l[x],onChange:d=>g(x,d.target.checked)}),r.jsx("span",{className:"toggle-track"})]})]}),y=l.smtp_host&&l.smtp_user&&l.from_address;return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Notifications"}),r.jsx("p",{children:"Configure outgoing email alerts for key events"})]}),r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"SMTP Settings"}),r.jsxs("p",{className:"settings-desc",children:["Provide your outgoing mail server details. Gmail users: use an App Password with ",r.jsx("code",{style:{background:"var(--bg-tertiary, var(--bg-secondary))",padding:"1px 5px",borderRadius:4,fontSize:12},children:"smtp.gmail.com"})," on port 587."]}),r.jsxs("div",{className:"settings-form",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"SMTP Host"}),r.jsx("input",{className:"form-input",value:l.smtp_host,onChange:x=>g("smtp_host",x.target.value),placeholder:"e.g. smtp.gmail.com"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"SMTP Port"}),r.jsx("input",{className:"form-input",type:"number",value:l.smtp_port,onChange:x=>g("smtp_port",Number(x.target.value)),style:{maxWidth:120}})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Username"}),r.jsx("input",{className:"form-input",value:l.smtp_user,onChange:x=>g("smtp_user",x.target.value),placeholder:"your@email.com",autoComplete:"off"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Password / App Password"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx("input",{className:"form-input",type:o?"text":"password",value:l.smtp_pass,onChange:x=>g("smtp_pass",x.target.value),placeholder:"••••••••",autoComplete:"new-password",style:{paddingRight:44}}),r.jsx("button",{onClick:()=>p(x=>!x),style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",fontSize:12,padding:0},children:o?"Hide":"Show"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"From Address"}),r.jsx("input",{className:"form-input",value:l.from_address,onChange:x=>g("from_address",x.target.value),placeholder:"no-reply@yourcompany.com"})]})]}),!y&&r.jsx("div",{style:{marginTop:12,padding:"10px 14px",background:"var(--orange-dim)",border:"1px solid var(--orange)",borderRadius:8,fontSize:13,color:"var(--orange)"},children:"Complete SMTP host, username, and from address to enable email triggers."})]}),r.jsxs("div",{className:"settings-section",style:{marginTop:20},children:[r.jsx("h3",{children:"Email Triggers"}),r.jsx("p",{className:"settings-desc",children:"Choose which events send an email notification to your support address."}),r.jsx(h,{k:"notify_new_booking",label:"New Booking Request",sub:"Send an email when a visitor submits a consultation request"}),r.jsx(h,{k:"notify_new_contact",label:"New Contact Message",sub:"Send an email when someone submits the website contact form"}),r.jsx(h,{k:"notify_task_due",label:"Daily Task Reminder",sub:"Send a morning digest of tasks due today"}),r.jsx("div",{className:"page-actions",style:{marginTop:20},children:r.jsx("button",{className:"btn-primary",onClick:j,disabled:s,children:s?"Saving…":"Save Settings"})})]})]})}const bf=["#6B7280","#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#EC4899","#14B8A6","#F97316"],yr=[{id:"new",name:"New",color:"#6B7280"},{id:"qualified",name:"Qualified",color:"#3B82F6"},{id:"proposal",name:"Proposal Sent",color:"#F59E0B"},{id:"negotiation",name:"Negotiation",color:"#8B5CF6"},{id:"won",name:"Won",color:"#10B981"},{id:"lost",name:"Lost",color:"#EF4444"}];function Nf({appConfig:e,setAppConfig:t,addToast:n}){const[a,l]=S.useState(()=>(e==null?void 0:e.pipeline_stages)||yr),[i,s]=S.useState(null),[c,o]=S.useState(!1),p=(y,x,w)=>l(k=>k.map(d=>d.id===y?{...d,[x]:w}:d)),g=()=>{const y="stage_"+Date.now();l(x=>[...x,{id:y,name:"New Stage",color:"#6B7280"}]),s(y)},j=y=>{if(a.length<=1){n({message:"Must have at least one stage",type:"error"});return}l(x=>x.filter(w=>w.id!==y)),i===y&&s(null)},h=async()=>{o(!0);try{await A.saveConfig({pipeline_stages:a}),t(y=>({...y,pipeline_stages:a})),n({message:"Pipeline stages saved"}),s(null)}catch{n({message:"Failed to save stages",type:"error"})}finally{o(!1)}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Pipeline Stages"}),r.jsx("p",{children:"Customize the stages deals move through. Changes apply to the Pipeline board immediately after saving."})]}),r.jsxs("div",{className:"settings-section",children:[a.map(y=>r.jsxs("div",{className:"stage-editor-row",children:[r.jsx("div",{className:"stage-color-dot",style:{background:y.color}}),i===y.id?r.jsxs(r.Fragment,{children:[r.jsx("input",{className:"form-input",style:{flex:1},value:y.name,onChange:x=>p(y.id,"name",x.target.value),onKeyDown:x=>x.key==="Enter"&&s(null),autoFocus:!0}),r.jsx("div",{className:"stage-color-picker",children:bf.map(x=>r.jsx("button",{className:`stage-color-swatch${y.color===x?" selected":""}`,style:{background:x},onClick:()=>p(y.id,"color",x),title:x},x))}),r.jsx("button",{className:"btn-secondary",style:{fontSize:12,padding:"5px 12px",whiteSpace:"nowrap"},onClick:()=>s(null),children:"Done"})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{style:{flex:1,fontSize:14,color:"var(--text-primary)",fontWeight:500},children:y.name}),r.jsx("button",{className:"btn-secondary",style:{fontSize:12,padding:"5px 12px"},onClick:()=>s(y.id),children:"Edit"}),r.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",padding:"4px 6px",fontSize:13},onClick:()=>j(y.id),title:"Remove stage",children:_.trash})]})]},y.id)),r.jsxs("div",{style:{display:"flex",gap:10,marginTop:20},children:[r.jsxs("button",{className:"btn-secondary",onClick:g,children:[_.plus," Add Stage"]}),r.jsx("button",{className:"btn-primary",onClick:h,disabled:c,children:c?"Saving…":"Save Stages"})]}),r.jsxs("div",{style:{marginTop:24,padding:"14px 16px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:10},children:[r.jsx("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:10},children:"Preview"}),r.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:a.map(y=>r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,background:y.color+"22",color:y.color,padding:"4px 12px",borderRadius:10,fontSize:12,fontWeight:700},children:[r.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:y.color}}),y.name]},y.id))})]})]})]})}function Sf({toasts:e}){return r.jsx("div",{className:"toast-container",children:e.map(t=>r.jsxs("div",{className:`toast toast-${t.type||"success"}`,children:[t.type==="success"&&r.jsx("span",{style:{color:"var(--green)"},children:_.check}),t.type==="info"&&r.jsx("span",{style:{color:"var(--blue)"},children:_.calendarPlus}),t.message]},t.id))})}function Cf({page:e,setPage:t,bookings:n,contacts:a,isOpen:l,onClose:i,onLogout:s,onShowTutorial:c,appConfig:o}){const p=n.filter(w=>w.status==="pending").length,g=a.filter(w=>w.status==="new").length,j=(o==null?void 0:o.company_website)||"#",h=o==null?void 0:o.company_logo,y=(o==null?void 0:o.company_name)||"Admin",x=(w,k,d,u)=>r.jsxs("div",{className:`nav-item ${e===w?"active":""}`,onClick:()=>{t(w),i()},children:[k,d,u>0&&r.jsx("span",{className:"nav-badge",children:u})]},w);return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:`sidebar-overlay ${l?"show":""}`,onClick:i}),r.jsxs("aside",{className:`sidebar ${l?"open":""}`,children:[r.jsxs("div",{className:"sidebar-logo",children:[h?r.jsx("img",{src:h,alt:y,style:{maxHeight:36,maxWidth:140,objectFit:"contain",marginBottom:4}}):r.jsx("h1",{children:y}),r.jsx("p",{children:"Admin Portal"})]}),r.jsxs("div",{className:"sidebar-scroll-area",children:[r.jsx("div",{className:"sidebar-label",children:"Manage"}),r.jsxs("nav",{className:"sidebar-nav",children:[x("dashboard",_.dashboard,"Dashboard"),x("bookings",_.bookings,"Bookings",p),x("contacts",_.inbox,"Inbox",g),x("availability",_.clock,"Availability"),x("calendar",_.calendar,"Calendar")]}),r.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"CRM"}),r.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[x("pipeline",_.pipeline,"Pipeline"),x("deals",_.deals,"Deals"),x("tasks",_.tasks,"Tasks"),x("analytics",_.analytics,"Analytics")]}),r.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Customize"}),r.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[x("customize-branding",_.brush,"Branding"),x("customize-services",_.list,"Services"),x("customize-categories",_.tag,"Categories"),x("customize-stages",_.pipeline,"Pipeline Stages"),x("customize-fields",_.fields,"Custom Fields"),x("customize-scoring",_.scoring,"Lead Scoring"),x("customize-notifications",_.bell,"Notifications"),x("customize-appearance",_.sun,"Appearance")]}),r.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Advanced"}),r.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[x("advanced-origins",_.globe,"Allowed Origins"),x("advanced-docs",_.code,"API Docs"),x("advanced-reset",_.settings,"Reset Setup")]}),r.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Account"}),r.jsx("nav",{className:"sidebar-nav sidebar-section-group",children:x("settings",_.settings,"Settings")}),r.jsx("div",{className:"sidebar-visit-divider",children:r.jsxs("a",{className:"sidebar-visit-btn",href:j,target:"_blank",rel:"noopener noreferrer",children:["Visit Website",r.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),r.jsx("polyline",{points:"15 3 21 3 21 9"}),r.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})})]}),r.jsxs("div",{className:"sidebar-footer",children:[r.jsxs("button",{className:"sidebar-tutorial-btn",onClick:()=>{c(),i()},children:[_.helpCircle,"Show Tutorial"]}),r.jsxs("button",{className:"logout-btn",onClick:s,children:[_.logout,"Sign Out"]})]})]})]})}function Br({label:e,value:t,sub:n,color:a}){return r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-label",children:e}),r.jsx("div",{className:"stat-value",style:a?{color:a}:{},children:t}),n&&r.jsx("div",{className:"stat-sub",children:n})]})}function zf({bookings:e,contacts:t,setPage:n,setSelectedBooking:a,setSelectedContact:l}){const i=e.filter(o=>o.status==="pending"),s=e.filter(o=>o.status==="approved"||o.status==="on-calendar"),c=t.filter(o=>o.status==="new");return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Dashboard"}),r.jsx("p",{children:"Overview of your consultation bookings and inquiries"})]}),r.jsxs("div",{className:"stats-grid",children:[r.jsx(Br,{label:"Pending Bookings",value:i.length,sub:"Need your review",color:"var(--orange)"}),r.jsx(Br,{label:"Approved",value:s.length,sub:"Confirmed consultations",color:"var(--green)"}),r.jsx(Br,{label:"New Messages",value:c.length,sub:"Unread inquiries",color:"var(--blue)"}),r.jsx(Br,{label:"Total Leads",value:e.length+t.length,sub:"All time"})]}),i.length>0&&r.jsxs("div",{style:{marginBottom:28},children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-title",children:"Needs Your Attention"}),r.jsx("button",{className:"btn-secondary",onClick:()=>n("bookings"),children:"View All Bookings"})]}),r.jsx("div",{className:"card-list",children:i.slice(0,3).map(o=>r.jsxs("div",{className:"list-card",onClick:()=>{a(o.id),n("booking-detail")},children:[r.jsx("div",{className:"card-status-dot",style:{background:ka(o.status)}}),r.jsxs("div",{className:"card-body",children:[r.jsxs("div",{className:"card-top-row",children:[r.jsx("span",{className:"card-name",children:o.name}),r.jsx("span",{className:"card-date",children:Me(o.date)})]}),r.jsxs("div",{className:"card-preview",children:[o.service," — ",o.org]}),r.jsxs("div",{className:"card-tags",children:[r.jsx("span",{className:`tag tag-${o.category.toLowerCase()}`,children:o.category}),r.jsx("span",{className:`status-badge status-${o.status}`,children:o.status})]})]}),r.jsx("span",{className:"card-chevron",children:_.chevronRight})]},o.id))})]}),c.length>0&&r.jsxs("div",{children:[r.jsxs("div",{className:"section-header",children:[r.jsx("span",{className:"section-title",children:"New Inquiries"}),r.jsx("button",{className:"btn-secondary",onClick:()=>n("contacts"),children:"View Inbox"})]}),r.jsx("div",{className:"card-list",children:c.slice(0,3).map(o=>r.jsxs("div",{className:"list-card",onClick:()=>{l(o.id),n("contact-detail")},children:[r.jsx("div",{className:"card-status-dot",style:{background:ka(o.status)}}),r.jsxs("div",{className:"card-body",children:[r.jsxs("div",{className:"card-top-row",children:[r.jsx("span",{className:"card-name",children:o.name}),r.jsx("span",{className:"card-date",children:Me(o.submittedAt)})]}),r.jsx("div",{className:"card-preview",children:o.subject}),r.jsx("div",{className:"card-tags",children:r.jsx("span",{className:`tag tag-${o.category.toLowerCase()}`,children:o.category})})]}),r.jsx("span",{className:"card-chevron",children:_.chevronRight})]},o.id))})]})]})}function Ef({bookings:e,setBookings:t,setPage:n,setSelectedBooking:a,searchTerm:l,setSearchTerm:i,statusFilter:s,setStatusFilter:c,categoryFilter:o,setCategoryFilter:p,categories:g,services:j,addToast:h}){const y=g||Ji,x=j||qi,[w,k]=S.useState(!1),[d,u]=S.useState({name:"",email:"",phone:"",org:"",service:x[0]||"",category:y[0]||"",date:"",time:"",status:"pending",message:""}),[m,b]=S.useState(!1),N=(v,E)=>u(F=>({...F,[v]:E})),C=async()=>{if(!d.name.trim()){h({message:"Name is required",type:"error"});return}b(!0);try{const v=await A.createBooking({...d,name:d.name.trim()});t(E=>[v,...E]),k(!1),u({name:"",email:"",phone:"",org:"",service:x[0]||"",category:y[0]||"",date:"",time:"",status:"pending",message:""}),h({message:`Booking added for ${v.name}`})}catch{h({message:"Failed to create booking",type:"error"})}finally{b(!1)}},f=e.filter(v=>{const E=!l||v.name.toLowerCase().includes(l.toLowerCase())||(v.org||"").toLowerCase().includes(l.toLowerCase())||(v.service||"").toLowerCase().includes(l.toLowerCase()),F=s==="all"||v.status===s,D=o==="all"||v.category===o;return E&&F&&D});return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",flexWrap:"wrap",gap:12},children:[r.jsxs("div",{children:[r.jsx("h2",{children:"Consultation Bookings"}),r.jsx("p",{children:"Manage requests for proposals and consultation appointments"})]}),r.jsxs("button",{className:"btn-primary",onClick:()=>k(v=>!v),style:{flexShrink:0},children:[_.plus," New Booking"]})]}),w&&r.jsxs("div",{className:"quick-form",style:{marginBottom:20},children:[r.jsx("h3",{children:"Add Booking Manually"}),r.jsxs("div",{className:"quick-form-grid",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Name *"}),r.jsx("input",{className:"form-input",value:d.name,onChange:v=>N("name",v.target.value),placeholder:"Full name",autoFocus:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Email"}),r.jsx("input",{className:"form-input",type:"email",value:d.email,onChange:v=>N("email",v.target.value),placeholder:"email@example.com"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Phone"}),r.jsx("input",{className:"form-input",value:d.phone,onChange:v=>N("phone",v.target.value),placeholder:"+1 (555) 000-0000"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Organization"}),r.jsx("input",{className:"form-input",value:d.org,onChange:v=>N("org",v.target.value),placeholder:"Company or agency"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Service"}),r.jsx("select",{className:"form-input",value:d.service,onChange:v=>N("service",v.target.value),children:x.map(v=>r.jsx("option",{value:v,children:v},v))})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Sector"}),r.jsx("select",{className:"form-input",value:d.category,onChange:v=>N("category",v.target.value),children:y.map(v=>r.jsx("option",{value:v,children:v},v))})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Consultation Date"}),r.jsx("input",{className:"form-input",type:"date",value:d.date,onChange:v=>N("date",v.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Time"}),r.jsx("input",{className:"form-input",type:"time",value:d.time,onChange:v=>N("time",v.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Status"}),r.jsxs("select",{className:"form-input",value:d.status,onChange:v=>N("status",v.target.value),children:[r.jsx("option",{value:"pending",children:"Pending"}),r.jsx("option",{value:"approved",children:"Approved"}),r.jsx("option",{value:"on-calendar",children:"On Calendar"}),r.jsx("option",{value:"declined",children:"Declined"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Message / Notes"}),r.jsx("textarea",{className:"form-input",rows:3,style:{resize:"vertical"},value:d.message,onChange:v=>N("message",v.target.value),placeholder:"Optional notes…"})]}),r.jsxs("div",{className:"quick-form-actions",children:[r.jsx("button",{className:"btn-primary",onClick:C,disabled:m,children:m?"Saving…":"Add Booking"}),r.jsx("button",{className:"btn-secondary",onClick:()=>k(!1),children:"Cancel"})]})]}),r.jsxs("div",{className:"search-bar",children:[r.jsx("span",{className:"search-icon",children:_.search}),r.jsx("input",{placeholder:"Search by name, organization, or service...",value:l,onChange:v=>i(v.target.value)})]}),r.jsxs("div",{className:"section-header",children:[r.jsx("div",{className:"filters",children:["all","pending","approved","on-calendar","declined"].map(v=>r.jsx("button",{className:`filter-chip ${s===v?"active":""}`,onClick:()=>c(v),children:v==="all"?"All":v==="on-calendar"?"On Calendar":v.charAt(0).toUpperCase()+v.slice(1)},v))}),r.jsx("div",{className:"filters",children:["all",...y].map(v=>r.jsx("button",{className:`filter-chip ${o===v?"active":""}`,onClick:()=>p(v),children:v==="all"?"All Sectors":v},v))})]}),r.jsx("div",{className:"card-list",children:f.length===0?r.jsx("div",{className:"empty-state",children:r.jsx("p",{children:"No bookings match your filters."})}):f.map(v=>r.jsxs("div",{className:"list-card",onClick:()=>{a(v.id),n("booking-detail")},children:[r.jsx("div",{className:"card-status-dot",style:{background:ka(v.status)}}),r.jsxs("div",{className:"card-body",children:[r.jsxs("div",{className:"card-top-row",children:[r.jsx("span",{className:"card-name",children:v.name}),r.jsxs("span",{className:"card-date",children:[v.time?`${v.time} · `:"",v.date?Me(v.date):"—"]})]}),r.jsxs("div",{className:"card-preview",children:[v.service,v.org?` — ${v.org}`:""]}),r.jsxs("div",{className:"card-tags",children:[v.category&&r.jsx("span",{className:`tag tag-${v.category.toLowerCase()}`,children:v.category}),r.jsx("span",{className:`status-badge status-${v.status}`,children:v.status==="on-calendar"?"On Calendar":v.status})]})]}),r.jsx("span",{className:"card-chevron",children:_.chevronRight})]},v.id))})]})}function _f({booking:e,onBack:t,onUpdateStatus:n,onAddToCalendar:a,onDelete:l,addToast:i,appConfig:s,setPage:c,setSelectedDeal:o,setDeals:p,deals:g}){var E,F;if(!e)return null;const[j,h]=S.useState(!1),[y,x]=S.useState(e.name),[w,k]=S.useState(""),[d,u]=S.useState(((F=(E=s==null?void 0:s.pipeline_stages)==null?void 0:E[0])==null?void 0:F.id)||"new"),[m,b]=S.useState("details"),N=(s==null?void 0:s.pipeline_stages)||[],C=D=>{n(e.id,D),i({message:`Booking ${D==="approved"?"approved":D==="declined"?"declined":"updated"} — ${e.name}`,type:"success"})},f=async()=>{window.confirm(`Permanently delete this booking from ${e.name}? This cannot be undone.`)&&(await l(e.id),t())},v=async()=>{try{const D=await A.createDeal({title:y,booking_id:e.id,stage_id:d,value:parseFloat(w)||0});i({message:`Deal "${D.title}" created`}),h(!1),p&&p(Y=>[D,...Y]),o&&o(D.id),c&&c("deal-detail")}catch{i({message:"Failed to create deal",type:"error"})}};return r.jsxs("div",{className:"detail-view",children:[r.jsxs("button",{className:"detail-back",onClick:t,children:[_.back," Back to Bookings"]}),r.jsxs("div",{className:"detail-card",children:[r.jsxs("div",{className:"detail-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"detail-name",children:e.name}),r.jsx("div",{className:"detail-org",children:e.org})]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsx(Td,{entity:e,appConfig:s}),r.jsx("span",{className:`status-badge status-${e.status}`,children:e.status==="on-calendar"?"On Calendar":e.status})]})]}),r.jsx("div",{style:{display:"flex",gap:8,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:0},children:["details","activity","tags"].map(D=>r.jsx("button",{onClick:()=>b(D),style:{background:"none",border:"none",cursor:"pointer",padding:"8px 14px",fontSize:13,fontWeight:600,color:m===D?"var(--accent)":"var(--text-muted)",borderBottom:m===D?"2px solid var(--accent)":"2px solid transparent",fontFamily:"inherit",textTransform:"capitalize"},children:D},D))}),m==="details"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Service Requested"}),r.jsx("span",{children:e.service})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Sector"}),r.jsx("span",{className:`tag tag-${e.category.toLowerCase()}`,children:e.category})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Consultation Date"}),r.jsxs("span",{children:[Me(e.date)," at ",e.time]})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Submitted"}),r.jsx("span",{children:Me(e.submittedAt)})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Email"}),r.jsx("a",{href:`mailto:${e.email}`,children:e.email})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Phone"}),r.jsx("a",{href:`tel:${e.phone}`,children:e.phone})]})]}),r.jsxs("div",{className:"detail-message",children:[r.jsx("label",{children:"Message"}),r.jsx("p",{children:e.message})]}),r.jsxs("div",{className:"detail-status-select",children:[r.jsx("label",{children:"Status:"}),r.jsxs("select",{value:e.status,onChange:D=>C(D.target.value),children:[r.jsx("option",{value:"pending",children:"Pending"}),r.jsx("option",{value:"approved",children:"Approved"}),r.jsx("option",{value:"declined",children:"Declined"}),r.jsx("option",{value:"on-calendar",children:"On Calendar"}),r.jsx("option",{value:"archived",children:"Archived"})]})]}),r.jsxs("div",{className:"detail-actions",children:[e.status==="pending"&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:"btn-action btn-approve",onClick:()=>C("approved"),children:[_.check," Approve"]}),r.jsxs("button",{className:"btn-action btn-decline",onClick:()=>C("declined"),children:[_.x," Decline"]})]}),e.status==="approved"&&r.jsxs("button",{className:"btn-action btn-calendar",onClick:()=>{a(e.id),i({message:`Added to calendar — ${e.name}, ${Me(e.date)}`,type:"info"})},children:[_.calendarPlus," Add to Calendar"]}),e.status==="on-calendar"&&r.jsxs("span",{style:{fontSize:13,color:"var(--purple)",display:"flex",alignItems:"center",gap:6},children:[_.check," On your calendar"]}),r.jsxs("a",{href:`mailto:${e.email}`,className:"btn-action",style:{background:"var(--accent-dim)",color:"var(--accent)",textDecoration:"none"},children:[_.mail," Email Client"]}),r.jsxs("a",{href:`tel:${e.phone}`,className:"btn-action",style:{background:"rgba(255,255,255,0.06)",color:"var(--text-secondary)",textDecoration:"none"},children:[_.phone," Call"]}),r.jsxs("button",{className:"btn-action",style:{background:"var(--green-dim)",color:"var(--green)"},onClick:()=>h(!0),children:[_.convertDeal," Convert to Deal"]}),e.status!=="archived"&&r.jsxs("button",{className:"btn-action btn-archive",onClick:()=>C("archived"),children:[_.archive," Archive"]}),r.jsxs("button",{className:"btn-action btn-delete",onClick:f,children:[_.trash," Delete"]})]})]}),m==="activity"&&r.jsx(es,{entityType:"booking",entityId:e.id,addToast:i}),m==="tags"&&r.jsx(ts,{entityType:"booking",entityId:e.id,addToast:i})]}),j&&r.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:r.jsxs("div",{className:"modal-box",onClick:D=>D.stopPropagation(),children:[r.jsx("h3",{children:"Convert to Deal"}),r.jsx("p",{children:"Create a deal in your pipeline linked to this booking."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Deal Title"}),r.jsx("input",{className:"form-input",value:y,onChange:D=>x(D.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Deal Value ($)"}),r.jsx("input",{className:"form-input",type:"number",value:w,onChange:D=>k(D.target.value),placeholder:"0"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Stage"}),r.jsx("select",{className:"form-input",value:d,onChange:D=>u(D.target.value),children:N.map(D=>r.jsx("option",{value:D.id,children:D.name},D.id))})]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:v,children:"Create Deal"})]})]})})]})}function Tf({contacts:e,setPage:t,setSelectedContact:n,searchTerm:a,setSearchTerm:l,contactStatusFilter:i,setContactStatusFilter:s}){const c=e.filter(o=>{const p=!a||o.name.toLowerCase().includes(a.toLowerCase())||o.subject.toLowerCase().includes(a.toLowerCase()),g=i==="all"||o.status===i;return p&&g});return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Contact Inbox"}),r.jsx("p",{children:"Messages from the website contact form"})]}),r.jsxs("div",{className:"search-bar",children:[r.jsx("span",{className:"search-icon",children:_.search}),r.jsx("input",{placeholder:"Search by name or subject...",value:a,onChange:o=>l(o.target.value)})]}),r.jsx("div",{className:"section-header",children:r.jsx("div",{className:"filters",children:["all","new","replied","archived"].map(o=>r.jsx("button",{className:`filter-chip ${i===o?"active":""}`,onClick:()=>s(o),children:o==="all"?"All":o.charAt(0).toUpperCase()+o.slice(1)},o))})}),r.jsx("div",{className:"card-list",children:c.length===0?r.jsx("div",{className:"empty-state",children:r.jsx("p",{children:"No messages match your filters."})}):c.map(o=>r.jsxs("div",{className:"list-card",onClick:()=>{n(o.id),t("contact-detail")},children:[r.jsx("div",{className:"card-status-dot",style:{background:ka(o.status)}}),r.jsxs("div",{className:"card-body",children:[r.jsxs("div",{className:"card-top-row",children:[r.jsx("span",{className:"card-name",children:o.name}),r.jsx("span",{className:"card-date",children:Me(o.submittedAt)})]}),r.jsx("div",{className:"card-preview",children:o.subject}),r.jsxs("div",{className:"card-tags",children:[r.jsx("span",{className:`tag tag-${o.category.toLowerCase()}`,children:o.category}),r.jsx("span",{className:`status-badge status-${o.status}`,children:o.status})]})]}),r.jsx("span",{className:"card-chevron",children:_.chevronRight})]},o.id))})]})}function Lf({contact:e,onBack:t,onUpdateStatus:n,onDelete:a,addToast:l,appConfig:i,setPage:s,setSelectedDeal:c,setDeals:o}){var f,v;if(!e)return null;const[p,g]=S.useState(!1),[j,h]=S.useState(e.name),[y,x]=S.useState(""),[w,k]=S.useState(((v=(f=i==null?void 0:i.pipeline_stages)==null?void 0:f[0])==null?void 0:v.id)||"new"),[d,u]=S.useState("details"),m=(i==null?void 0:i.pipeline_stages)||[],b=E=>{n(e.id,E),l({message:`Marked as ${E} — ${e.name}`,type:"success"})},N=async()=>{window.confirm(`Permanently delete this message from ${e.name}? This cannot be undone.`)&&(await a(e.id),t())},C=async()=>{try{const E=await A.createDeal({title:j,contact_id:e.id,stage_id:w,value:parseFloat(y)||0});l({message:`Deal "${E.title}" created`}),g(!1),o&&o(F=>[E,...F]),c&&c(E.id),s&&s("deal-detail")}catch{l({message:"Failed to create deal",type:"error"})}};return r.jsxs("div",{className:"detail-view",children:[r.jsxs("button",{className:"detail-back",onClick:t,children:[_.back," Back to Inbox"]}),r.jsxs("div",{className:"detail-card",children:[r.jsxs("div",{className:"detail-header",children:[r.jsxs("div",{children:[r.jsx("div",{className:"detail-name",children:e.name}),r.jsx("div",{className:"detail-org",children:e.subject})]}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[r.jsx(Td,{entity:e,appConfig:i}),r.jsx("span",{className:`status-badge status-${e.status}`,children:e.status})]})]}),r.jsx("div",{style:{display:"flex",gap:8,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:0},children:["details","activity","tags"].map(E=>r.jsx("button",{onClick:()=>u(E),style:{background:"none",border:"none",cursor:"pointer",padding:"8px 14px",fontSize:13,fontWeight:600,color:d===E?"var(--accent)":"var(--text-muted)",borderBottom:d===E?"2px solid var(--accent)":"2px solid transparent",fontFamily:"inherit",textTransform:"capitalize"},children:E},E))}),d==="details"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Sector"}),r.jsx("span",{className:`tag tag-${e.category.toLowerCase()}`,children:e.category})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Received"}),r.jsx("span",{children:Me(e.submittedAt)})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Email"}),r.jsx("a",{href:`mailto:${e.email}`,children:e.email})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("label",{children:"Phone"}),r.jsx("a",{href:`tel:${e.phone}`,children:e.phone})]})]}),r.jsxs("div",{className:"detail-message",children:[r.jsx("label",{children:"Message"}),r.jsx("p",{children:e.message})]}),r.jsxs("div",{className:"detail-status-select",children:[r.jsx("label",{children:"Status:"}),r.jsxs("select",{value:e.status,onChange:E=>b(E.target.value),children:[r.jsx("option",{value:"new",children:"New"}),r.jsx("option",{value:"replied",children:"Replied"}),r.jsx("option",{value:"archived",children:"Archived"})]})]}),r.jsxs("div",{className:"detail-actions",children:[e.status==="new"&&r.jsxs("button",{className:"btn-action btn-approve",onClick:()=>b("replied"),children:[_.check," Mark as Replied"]}),r.jsxs("a",{href:`mailto:${e.email}`,className:"btn-action",style:{background:"var(--accent-dim)",color:"var(--accent)",textDecoration:"none"},children:[_.mail," Email Client"]}),r.jsxs("a",{href:`tel:${e.phone}`,className:"btn-action",style:{background:"rgba(255,255,255,0.06)",color:"var(--text-secondary)",textDecoration:"none"},children:[_.phone," Call"]}),r.jsxs("button",{className:"btn-action",style:{background:"var(--green-dim)",color:"var(--green)"},onClick:()=>g(!0),children:[_.convertDeal," Convert to Deal"]}),e.status!=="archived"&&r.jsxs("button",{className:"btn-action btn-archive",onClick:()=>b("archived"),children:[_.archive," Archive"]}),r.jsxs("button",{className:"btn-action btn-delete",onClick:N,children:[_.trash," Delete"]})]})]}),d==="activity"&&r.jsx(es,{entityType:"contact",entityId:e.id,addToast:l}),d==="tags"&&r.jsx(ts,{entityType:"contact",entityId:e.id,addToast:l})]}),p&&r.jsx("div",{className:"modal-overlay",onClick:()=>g(!1),children:r.jsxs("div",{className:"modal-box",onClick:E=>E.stopPropagation(),children:[r.jsx("h3",{children:"Convert to Deal"}),r.jsx("p",{children:"Create a deal linked to this contact."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Deal Title"}),r.jsx("input",{className:"form-input",value:j,onChange:E=>h(E.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Deal Value ($)"}),r.jsx("input",{className:"form-input",type:"number",value:y,onChange:E=>x(E.target.value),placeholder:"0"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Stage"}),r.jsx("select",{className:"form-input",value:w,onChange:E=>k(E.target.value),children:m.map(E=>r.jsx("option",{value:E.id,children:E.name},E.id))})]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>g(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:C,children:"Create Deal"})]})]})})]})}function Ff({bookings:e,setPage:t,setSelectedBooking:n}){const[a,l]=S.useState(0),[i,s]=S.useState(null),c=new Date;c.setHours(0,0,0,0);const o=c.toISOString().split("T")[0],p=new Date(c.getFullYear(),c.getMonth()+a,1),g=p.getFullYear(),j=p.getMonth(),h=p.toLocaleString("en-US",{month:"long",year:"numeric"}),y=new Date(g,j,1).getDay(),x=new Date(g,j+1,0).getDate(),w=new Date(g,j,0).getDate(),k=[];for(let f=y-1;f>=0;f--)k.push({day:w-f,otherMonth:!0,dateStr:null});for(let f=1;f<=x;f++){const v=`${g}-${String(j+1).padStart(2,"0")}-${String(f).padStart(2,"0")}`;k.push({day:f,otherMonth:!1,dateStr:v})}for(;k.length<42;)k.push({day:k.length-y-x+1,otherMonth:!0,dateStr:null});const d=e.filter(f=>f.status==="approved"||f.status==="on-calendar"),u=f=>d.filter(v=>v.date===f).sort((v,E)=>(v.time||"").localeCompare(E.time||"")),m=d.filter(f=>f.date>=o).sort((f,v)=>f.date.localeCompare(v.date)||(f.time||"").localeCompare(v.time||"")),b=i?u(i):null,N=f=>{f.otherMonth||s(v=>v===f.dateStr?null:f.dateStr)},C=f=>{l(v=>v+f),s(null)};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Calendar"}),r.jsx("p",{children:"Your approved consultations and scheduled appointments"})]}),r.jsxs("div",{className:`cal-layout${i?" day-selected":""}`,children:[r.jsxs("div",{className:"cal-left",children:[r.jsxs("div",{className:"cal-nav",children:[r.jsx("span",{className:"cal-month",children:h}),r.jsxs("div",{className:"cal-nav-btns",children:[r.jsx("button",{className:"cal-nav-btn cal-nav-icon",onClick:()=>C(-1),title:"Previous month",children:_.back}),r.jsx("button",{className:"cal-nav-btn",onClick:()=>{l(0),s(null)},children:"Today"}),r.jsx("button",{className:"cal-nav-btn cal-nav-icon",onClick:()=>C(1),title:"Next month",children:_.chevronRight})]})]}),r.jsxs("div",{className:"cal-grid",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(f=>r.jsx("div",{className:"cal-header-cell",children:f},f)),k.map((f,v)=>{const E=f.dateStr?u(f.dateStr):[],F=f.dateStr===o,D=f.dateStr&&f.dateStr===i;return r.jsxs("div",{className:`cal-cell${f.otherMonth?" other-month":""}${F?" today":""}${D?" selected":""}`,onClick:()=>N(f),children:[r.jsx("div",{className:"cal-day-num",children:f.day}),!f.otherMonth&&E.slice(0,2).map(Y=>r.jsxs("div",{className:`cal-event${Y.status==="on-calendar"?" on-cal":""}`,onClick:Oe=>{Oe.stopPropagation(),n(Y.id),t("booking-detail")},title:`${Y.name} — ${Y.service}`,children:[Y.time?cn(Y.time)+" ":"",Y.name.split(" ")[0]]},Y.id)),!f.otherMonth&&E.length>2&&r.jsxs("div",{className:"cal-event-more",children:["+",E.length-2," more"]}),!f.otherMonth&&E.length>0&&r.jsx("div",{className:"cal-dots",children:E.map(Y=>r.jsx("div",{className:`cal-dot ${Y.status==="on-calendar"?"purple":"green"}`},Y.id))})]},v)})]}),r.jsxs("div",{className:"cal-legend",children:[r.jsxs("div",{className:"cal-legend-item",children:[r.jsx("div",{className:"cal-legend-dot green"}),"Approved"]}),r.jsxs("div",{className:"cal-legend-item",children:[r.jsx("div",{className:"cal-legend-dot purple"}),"On Calendar"]})]})]}),r.jsx("div",{className:"cal-right",children:r.jsx("div",{className:"cal-panel",children:i&&b?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"cal-panel-header",children:[r.jsx("div",{className:"cal-panel-title",children:Zr(i)}),r.jsx("button",{className:"cal-panel-close",onClick:()=>s(null),title:"Close",children:_.x})]}),b.length===0?r.jsxs("div",{className:"cal-panel-empty",children:["No bookings on this day.",r.jsx("br",{}),"Click any other day to view its events."]}):b.map(f=>r.jsxs("div",{className:"cal-panel-event",onClick:()=>{n(f.id),t("booking-detail")},children:[r.jsx("div",{className:"cal-panel-event-time",children:cn(f.time)||"Time TBD"}),r.jsx("div",{className:"cal-panel-event-name",children:f.name}),r.jsx("div",{className:"cal-panel-event-service",children:f.service}),r.jsx("div",{className:"cal-panel-event-org",children:f.org}),r.jsx("span",{className:`status-badge status-${f.status}`,style:{marginTop:8,display:"inline-block"},children:f.status==="on-calendar"?"On Calendar":"Approved"})]},f.id))]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"cal-panel-title",style:{marginBottom:16},children:"Upcoming"}),m.length===0?r.jsxs("div",{className:"cal-panel-empty",children:["No upcoming consultations.",r.jsx("br",{}),"Approve bookings to see them here."]}):m.slice(0,12).map(f=>{const v=new Date(f.date+"T00:00:00").toLocaleString("en-US",{month:"short"}),E=Number(f.date.split("-")[2]);return r.jsxs("div",{className:"cal-upcoming-item",onClick:()=>{n(f.id),t("booking-detail")},children:[r.jsxs("div",{className:"cal-upcoming-badge",children:[r.jsx("div",{className:"cal-upcoming-badge-month",children:v}),r.jsx("div",{className:"cal-upcoming-badge-day",children:E})]}),r.jsxs("div",{style:{flex:1,minWidth:0},children:[r.jsx("div",{className:"cal-upcoming-name",children:f.name}),r.jsxs("div",{className:"cal-upcoming-meta",children:[cn(f.time)||f.time," · ",f.service]}),r.jsx("span",{className:`status-badge status-${f.status}`,style:{marginTop:4,display:"inline-block"},children:f.status==="on-calendar"?"On Calendar":"Approved"})]}),r.jsx("span",{style:{color:"var(--text-muted)",flexShrink:0},children:_.chevronRight})]},f.id)})]})})}),r.jsxs("div",{className:"cal-mobile-upcoming",children:[r.jsx("div",{className:"section-title",style:{marginBottom:12},children:"Upcoming Consultations"}),m.length===0?r.jsx("div",{className:"cal-panel-empty",style:{textAlign:"center",padding:"24px 0"},children:"No upcoming approved consultations."}):r.jsx("div",{className:"card-list",children:m.map(f=>r.jsxs("div",{className:"list-card",onClick:()=>{n(f.id),t("booking-detail")},children:[r.jsx("div",{className:"card-status-dot",style:{background:f.status==="on-calendar"?"var(--purple)":"var(--green)"}}),r.jsxs("div",{className:"card-body",children:[r.jsxs("div",{className:"card-top-row",children:[r.jsx("span",{className:"card-name",children:f.name}),r.jsx("span",{className:"card-date",children:cn(f.time)||f.time})]}),r.jsxs("div",{className:"card-preview",children:[f.service," — ",Me(f.date)]}),r.jsx("div",{className:"card-tags",children:r.jsx("span",{className:`status-badge status-${f.status}`,children:f.status==="on-calendar"?"On Calendar":"Approved"})})]}),r.jsx("span",{className:"card-chevron",children:_.chevronRight})]},f.id))})]})]})]})}function Df(e,t,n){if(!e||!t||!n)return[];const[a,l]=e.split(":").map(Number),[i,s]=t.split(":").map(Number),c=a*60+l,o=i*60+s;if(o<=c)return[];const p=[];for(let g=c;g+n<=o;g+=n){const j=Math.floor(g/60),h=g%60;p.push(`${String(j).padStart(2,"0")}:${String(h).padStart(2,"0")}`)}return p}function Pf({slots:e,setSlots:t,addToast:n,setPage:a,setSelectedBooking:l}){const i=new Date().toISOString().split("T")[0],[s,c]=S.useState({date:"",fromTime:"09:00",toTime:"17:00",durationMinutes:60,label:""}),[o,p]=S.useState(!1),g=Df(s.fromTime,s.toTime,Number(s.durationMinutes)),j=s.date&&g.length>0,h=async()=>{if(!j){n({message:"Please fill in the date and a valid time range.",type:"error"});return}p(!0);try{const k=await A.createSlotRange({date:s.date,fromTime:s.fromTime,toTime:s.toTime,durationMinutes:Number(s.durationMinutes),label:s.label}),d=await A.getAvailability();t(d);const u=k.total-k.count,m=u>0?`${k.count} slots opened for ${Zr(s.date)} (${u} already existed)`:`${k.count} slots opened for ${Zr(s.date)}`;n({message:m}),c(b=>({...b,date:""}))}catch{n({message:"Could not open those slots. Please try again.",type:"error"})}finally{p(!1)}},y=async k=>{try{await A.deleteSlot(k),t(d=>d.filter(u=>u.id!==k)),n({message:"Slot removed"})}catch(d){const u=(d==null?void 0:d.message)||"";u.includes("409")||u.toLowerCase().includes("booked")?n({message:"This slot has already been booked and cannot be removed.",type:"error"}):n({message:"Could not remove that slot. Please try again.",type:"error"})}},x=e.reduce((k,d)=>((k[d.date]=k[d.date]||[]).push(d),k),{}),w=Object.keys(x).sort();return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Availability"}),r.jsx("p",{children:"Control when clients can book a session with you."})]}),r.jsxs("div",{className:"avail-intro",children:[r.jsx("strong",{children:"How this works:"})," Pick a day and the hours you're free. We'll automatically create one bookable time slot for every session in that window. Those open slots will appear on your website for clients to choose from — when someone books one, it shows up here as a new booking."]}),r.jsxs("div",{className:"avail-form-card",children:[r.jsx("h3",{children:"Open Up a Day"}),r.jsx("p",{className:"avail-section-hint",children:"Tell us the date and the hours you're available. We'll take care of splitting it into individual appointment slots."}),r.jsxs("div",{className:"avail-form-row",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"What day are you available?"}),r.jsx("input",{type:"date",min:i,value:s.date,onChange:k=>c(d=>({...d,date:k.target.value}))})]}),r.jsxs("div",{className:"avail-form-inline",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Available from"}),r.jsx("input",{type:"time",value:s.fromTime,onChange:k=>c(d=>({...d,fromTime:k.target.value}))}),r.jsx("div",{className:"avail-field-hint",children:"The earliest you can start a session"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Available until"}),r.jsx("input",{type:"time",value:s.toTime,onChange:k=>c(d=>({...d,toTime:k.target.value}))}),r.jsx("div",{className:"avail-field-hint",children:"The latest a session should end"})]})]}),r.jsxs("div",{className:"avail-form-inline",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"How long is each session?"}),r.jsxs("select",{value:s.durationMinutes,onChange:k=>c(d=>({...d,durationMinutes:Number(k.target.value)})),children:[r.jsx("option",{value:30,children:"30 minutes"}),r.jsx("option",{value:60,children:"60 minutes (1 hour)"}),r.jsx("option",{value:90,children:"90 minutes (1.5 hours)"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Add a note (optional)"}),r.jsx("input",{type:"text",placeholder:"e.g. Leadership coaching only",maxLength:100,value:s.label,onChange:k=>c(d=>({...d,label:k.target.value}))})]})]}),s.fromTime&&s.toTime&&g.length>0&&r.jsxs("div",{className:"avail-preview",children:[r.jsxs("strong",{children:[g.length," session",g.length!==1?"s":""," will open:"]})," ",g.map(cn).join("  ·  ")]}),s.fromTime&&s.toTime&&g.length===0&&r.jsxs("div",{className:"avail-preview",style:{borderColor:"var(--red)",background:"var(--red-dim)"},children:["The time range is too short for even one session at ",s.durationMinutes," minutes. Try a wider window or shorter session length."]}),r.jsx("button",{className:"btn-primary",onClick:h,disabled:o||!j,children:o?"Opening slots…":`Open ${g.length>0?g.length+" slot"+(g.length!==1?"s":""):"Slots"}`})]})]}),w.length===0?r.jsxs("div",{className:"avail-empty",children:[r.jsx("div",{className:"avail-empty-icon",children:_.calendar}),r.jsx("strong",{children:"No open slots yet"}),r.jsxs("p",{children:["Use the form above to pick a day and open your available hours.",r.jsx("br",{}),"Your clients will see those times on the website and can book directly."]})]}):w.map(k=>r.jsxs("div",{className:"avail-date-group",children:[r.jsx("div",{className:"avail-date-header",children:Zr(k)}),x[k].map(d=>r.jsxs("div",{className:"avail-slot-row",children:[r.jsx("span",{className:"avail-slot-time",children:cn(d.startTime)}),r.jsxs("span",{className:"avail-slot-duration",children:[d.durationMinutes," min"]}),r.jsx("span",{className:"avail-slot-label",children:d.label||""}),d.isBooked?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"status-badge status-approved",style:{flexShrink:0},children:"Booked"}),d.bookedBy&&r.jsxs("span",{className:"avail-slot-booked-by",onClick:()=>{l(d.bookingId),a("booking-detail")},children:[d.bookedBy," →"]})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"status-badge status-new",style:{flexShrink:0},children:"Open"}),r.jsx("span",{style:{flex:1}}),r.jsx("button",{className:"btn-slot-delete",onClick:()=>y(d.id),title:"Remove this slot",children:_.trash})]})]},d.id))]},k))]})}const Af=[{id:"auto",label:"Auto",swatch:{header:"#141820",sidebar:"#141820",content:"#0C0F14",card:"#1A1F2B",accent:"#C8A84E"}},{id:"dark",label:"Dark",swatch:{header:"#141820",sidebar:"#141820",content:"#0C0F14",card:"#1A1F2B",accent:"#C8A84E"}},{id:"light",label:"Light",swatch:{header:"#FFFFFF",sidebar:"#FFFFFF",content:"#F0F2F7",card:"#FFFFFF",accent:"#A8862A"}},{id:"forest",label:"Forest",swatch:{header:"#111C14",sidebar:"#111C14",content:"#0D1510",card:"#172019",accent:"#7EC87A"}},{id:"ocean",label:"Ocean",swatch:{header:"#0E1E36",sidebar:"#0E1E36",content:"#0A1628",card:"#132743",accent:"#38BDF8"}},{id:"sand",label:"Sand",swatch:{header:"#F2EDE4",sidebar:"#F2EDE4",content:"#FAF7F2",card:"#FFFFFF",accent:"#C06030"}}];function Mf({addToast:e,appConfig:t}){const[n,a]=S.useState(""),[l,i]=S.useState(""),[s,c]=S.useState(""),[o,p]=S.useState(!1),g=async h=>{if(h.preventDefault(),!n){e({message:"Current password is required",type:"error"});return}if(l.length<8){e({message:"New password must be at least 8 characters",type:"error"});return}if(l!==s){e({message:"New passwords don't match",type:"error"});return}p(!0);try{await A.changePassword(n,l),e({message:"Password updated successfully"}),a(""),i(""),c("")}catch(y){const x=((y==null?void 0:y.message)||"").includes("401")||((y==null?void 0:y.message)||"").toLowerCase().includes("incorrect")?"Current password is incorrect":"Failed to update password. Please try again.";e({message:x,type:"error"})}finally{p(!1)}},j=(t==null?void 0:t.support_email)||"support@example.com";return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Settings"}),r.jsx("p",{children:"Manage your account preferences"})]}),r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"Change Password"}),r.jsx("p",{className:"settings-desc",children:"Update your admin login password. Once changed, use the new password to log in. Must be at least 8 characters."}),r.jsxs("form",{className:"settings-form",onSubmit:g,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Current Password"}),r.jsx("input",{type:"password",className:"form-input",value:n,onChange:h=>a(h.target.value),autoComplete:"current-password",placeholder:"Enter your current password"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"New Password"}),r.jsx("input",{type:"password",className:"form-input",value:l,onChange:h=>i(h.target.value),autoComplete:"new-password",placeholder:"At least 8 characters"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Confirm New Password"}),r.jsx("input",{type:"password",className:"form-input",value:s,onChange:h=>c(h.target.value),autoComplete:"new-password",placeholder:"Repeat your new password"})]}),r.jsx("button",{type:"submit",className:"btn-primary",disabled:o,children:o?"Saving...":"Update Password"})]})]}),r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"About"}),r.jsxs("div",{className:"settings-info-row",children:[r.jsx("span",{className:"settings-info-label",children:"Platform"}),r.jsx("span",{className:"settings-info-value",children:"Admin Portal"})]}),r.jsxs("div",{className:"settings-info-row",children:[r.jsx("span",{className:"settings-info-label",children:"Version"}),r.jsx("span",{className:"settings-info-value",children:"1.0.0"})]}),r.jsxs("div",{className:"settings-info-row",children:[r.jsx("span",{className:"settings-info-label",children:"Support"}),r.jsx("a",{href:`mailto:${j}`,style:{color:"var(--accent)",fontSize:14},children:j})]})]})]})}function gn({items:e,onChange:t,placeholder:n,validateItem:a}){const[l,i]=S.useState(""),s=()=>{const c=l.trim();if(c){if(a){const o=a(c);if(o){alert(o);return}}e.includes(c)||t([...e,c]),i("")}};return r.jsxs("div",{className:"wizard-list-editor",children:[r.jsxs("div",{className:"wizard-pills",children:[e.map(c=>r.jsxs("div",{className:"wizard-pill",children:[r.jsx("span",{children:c}),r.jsx("button",{className:"wizard-pill-remove",onClick:()=>t(e.filter(o=>o!==c)),children:_.x})]},c)),e.length===0&&r.jsx("span",{style:{fontSize:13,color:"var(--text-muted)"},children:"No items yet."})]}),r.jsxs("div",{className:"wizard-add-row",children:[r.jsx("input",{className:"form-input",placeholder:n||"Add item...",value:l,onChange:c=>i(c.target.value),onKeyDown:c=>c.key==="Enter"&&(c.preventDefault(),s())}),r.jsxs("button",{className:"wizard-add-btn",onClick:s,children:[_.plus," Add"]})]})]})}const Bn=["Welcome","Logo","Services","Categories","Contact Info","Allowed Origins","Review & Finish"];function Bf({onComplete:e,onSkip:t,addToast:n}){const[a,l]=S.useState(0),[i,s]=S.useState(!1),[c,o]=S.useState({company_name:"",company_tagline:"",company_logo:"",services:[...qi],categories:[...Ji],support_email:"",company_website:"",company_phone:"",allowed_origins:[]}),p=(x,w)=>o(k=>({...k,[x]:w})),g=x=>{const w=x.target.files[0];if(!w)return;if(w.size>2*1024*1024){n({message:"Logo must be under 2MB",type:"error"});return}const k=new FileReader;k.onload=d=>p("company_logo",d.target.result),k.readAsDataURL(w)},j=async()=>{s(!0);try{await A.saveConfig({...c,setup_complete:"1"}),e()}catch{n({message:"Failed to save setup. Please try again.",type:"error"})}finally{s(!1)}},h=a===Bn.length-1;let y;return a===0?y=r.jsxs("div",{className:"wizard-step-content",children:[r.jsx("div",{className:"wizard-info-banner",children:"Welcome! Let's set up your admin portal in a few quick steps. You can always change these settings later under Customize in the sidebar."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Company / Organization Name"}),r.jsx("input",{className:"form-input",value:c.company_name,onChange:x=>p("company_name",x.target.value),placeholder:"e.g. Acme Corp"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Tagline (optional)"}),r.jsx("input",{className:"form-input",value:c.company_tagline,onChange:x=>p("company_tagline",x.target.value),placeholder:"e.g. Veteran-Led Leadership Solutions"})]})]}):a===1?y=r.jsxs("div",{className:"wizard-step-content",children:[r.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"Upload your logo. It will appear in the admin sidebar. Max 2MB (PNG, JPG, SVG)."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Logo File"}),r.jsx("input",{type:"file",className:"form-input",accept:"image/*",onChange:g})]}),c.company_logo&&r.jsx("div",{className:"wizard-logo-preview",children:r.jsx("img",{src:c.company_logo,alt:"Logo preview"})})]}):a===2?y=r.jsxs("div",{className:"wizard-step-content",children:[r.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"These are the services you offer. They appear in booking forms for clients to choose from."}),r.jsx(gn,{items:c.services,onChange:x=>p("services",x),placeholder:"Add a service..."}),c.services.length===0&&r.jsx("div",{className:"wizard-info-banner",style:{marginTop:8},children:"At least one service is recommended for booking forms."})]}):a===3?y=r.jsxs("div",{className:"wizard-step-content",children:[r.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"Categories group your clients (e.g. Military, Federal, Corporate). Used in booking and contact filters."}),r.jsx(gn,{items:c.categories,onChange:x=>p("categories",x),placeholder:"Add a category..."})]}):a===4?y=r.jsxs("div",{className:"wizard-step-content",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Support Email"}),r.jsx("input",{className:"form-input",type:"email",value:c.support_email,onChange:x=>p("support_email",x.target.value),placeholder:"e.g. support@yourcompany.com"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Website URL (optional)"}),r.jsx("input",{className:"form-input",value:c.company_website,onChange:x=>p("company_website",x.target.value),placeholder:"e.g. https://yourcompany.com"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Phone (optional)"}),r.jsx("input",{className:"form-input",value:c.company_phone,onChange:x=>p("company_phone",x.target.value),placeholder:"e.g. +1 (555) 000-0000"})]})]}):a===5?y=r.jsxs("div",{className:"wizard-step-content",children:[r.jsxs("div",{className:"origins-info",children:[r.jsx("strong",{children:"CORS Allowed Origins"})," — Add the domain(s) of your public website that will use the booking/contact API. Example: ",r.jsx("code",{children:"https://yoursite.com"}),". Changes take effect within 60 seconds."]}),r.jsx(gn,{items:c.allowed_origins,onChange:x=>p("allowed_origins",x),placeholder:"https://your-site.com",validateItem:x=>/^https?:\/\/.+/.test(x)?null:"Must be a valid URL starting with http:// or https://"})]}):a===6&&(y=r.jsxs("div",{className:"wizard-step-content",children:[r.jsxs("div",{className:"wizard-review-section",children:[r.jsx("div",{className:"wizard-review-label",children:"Company"}),r.jsxs("div",{className:"wizard-review-value",children:[c.company_name,c.company_tagline?` — ${c.company_tagline}`:""]})]}),r.jsxs("div",{className:"wizard-review-section",children:[r.jsxs("div",{className:"wizard-review-label",children:["Services (",c.services.length,")"]}),r.jsx("div",{className:"wizard-review-value",children:c.services.join(", ")||"None"})]}),r.jsxs("div",{className:"wizard-review-section",children:[r.jsxs("div",{className:"wizard-review-label",children:["Categories (",c.categories.length,")"]}),r.jsx("div",{className:"wizard-review-value",children:c.categories.join(", ")||"None"})]}),r.jsxs("div",{className:"wizard-review-section",children:[r.jsx("div",{className:"wizard-review-label",children:"Contact"}),r.jsxs("div",{className:"wizard-review-value",children:[c.support_email||"Not set",c.company_website?` · ${c.company_website}`:""]})]}),r.jsxs("div",{className:"wizard-review-section",children:[r.jsxs("div",{className:"wizard-review-label",children:["Allowed Origins (",c.allowed_origins.length,")"]}),r.jsx("div",{className:"wizard-review-value",children:c.allowed_origins.join(", ")||"None"})]})]})),r.jsx("div",{className:"tutorial-overlay",children:r.jsxs("div",{className:"tutorial-card",style:{maxWidth:560,width:"100%"},children:[r.jsxs("div",{className:"tutorial-step-num",children:["Step ",a+1," of ",Bn.length," — ",Bn[a]]}),r.jsx("div",{className:"tutorial-title",style:{marginBottom:20,textAlign:"left"},children:a===0?`Welcome to ${c.company_name||"Your Portal"}`:Bn[a]}),y,r.jsx("div",{className:"tutorial-dots",style:{marginTop:24},children:Bn.map((x,w)=>r.jsx("div",{className:`tutorial-dot${w===a?" active":""}`},w))}),r.jsxs("div",{className:"tutorial-btn-row",children:[r.jsxs("div",{style:{display:"flex",gap:10,width:"100%"},children:[a>0&&r.jsx("button",{className:"tutorial-next",style:{background:"var(--bg-input)",color:"var(--text-primary)",border:"1px solid var(--border)",flex:"0 0 auto",width:"auto",padding:"14px 20px"},onClick:()=>l(x=>x-1),children:"← Back"}),r.jsx("button",{className:"tutorial-next",style:{flex:1},onClick:h?j:()=>l(x=>x+1),disabled:i,children:h?i?"Saving...":"Finish Setup →":"Next →"})]}),r.jsx("button",{className:"wizard-skip-link",onClick:t,children:"Skip setup for now"})]})]})})}function Rf({addToast:e}){const[t,n]=uf();return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Appearance"}),r.jsx("p",{children:"Choose how the dashboard looks"})]}),r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"Theme"}),r.jsxs("p",{className:"settings-desc",children:["Choose how the dashboard looks. ",r.jsx("strong",{children:"Auto"})," follows your device's light or dark mode setting automatically."]}),r.jsx("div",{className:"theme-grid",children:Af.map(a=>r.jsxs("div",{className:`theme-option${t===a.id?" active":""}`,onClick:()=>n(a.id),children:[r.jsxs("div",{className:"theme-swatch",children:[r.jsxs("div",{className:"theme-swatch-header",style:{background:a.swatch.header,borderBottom:`2px solid ${a.swatch.accent}`},children:[r.jsx("div",{className:"theme-swatch-dot",style:{background:a.swatch.accent}}),r.jsx("div",{className:"theme-swatch-dot",style:{background:a.swatch.accent}})]}),r.jsxs("div",{className:"theme-swatch-body",style:{background:a.swatch.content},children:[r.jsx("div",{className:"theme-swatch-sidebar",style:{background:a.swatch.sidebar}}),r.jsxs("div",{className:"theme-swatch-content",children:[r.jsx("div",{className:"theme-swatch-card",style:{background:a.swatch.card}}),r.jsx("div",{className:"theme-swatch-card",style:{background:a.swatch.card}})]})]})]}),r.jsx("span",{className:"theme-label",children:a.label})]},a.id))})]})]})}function Of({appConfig:e,setAppConfig:t,addToast:n}){const[a,l]=S.useState((e==null?void 0:e.company_name)||""),[i,s]=S.useState((e==null?void 0:e.company_tagline)||""),[c,o]=S.useState((e==null?void 0:e.company_logo)||""),[p,g]=S.useState(!1),j=y=>{const x=y.target.files[0];if(!x)return;if(x.size>2*1024*1024){n({message:"Logo must be under 2MB",type:"error"});return}const w=new FileReader;w.onload=k=>o(k.target.result),w.readAsDataURL(x)},h=async()=>{g(!0);try{await A.saveConfig({company_name:a,company_tagline:i,company_logo:c}),t(y=>({...y,company_name:a,company_tagline:i,company_logo:c})),n({message:"Branding saved"})}catch{n({message:"Failed to save branding",type:"error"})}finally{g(!1)}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Branding"}),r.jsx("p",{children:"Set your company name, tagline, and logo"})]}),r.jsx("div",{className:"settings-section",children:r.jsxs("div",{className:"settings-form",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Company Name"}),r.jsx("input",{className:"form-input",value:a,onChange:y=>l(y.target.value),placeholder:"e.g. Acme Corp"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Tagline"}),r.jsx("input",{className:"form-input",value:i,onChange:y=>s(y.target.value),placeholder:"e.g. Veteran-Led Leadership Solutions"})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Logo (max 2MB)"}),r.jsx("input",{type:"file",className:"form-input",accept:"image/*",onChange:j}),c&&r.jsxs("div",{className:"logo-preview-wrap",children:[r.jsx("img",{src:c,alt:"Logo preview"}),r.jsx("button",{className:"logo-remove-btn",onClick:()=>o(""),children:"Remove"})]})]}),r.jsx("button",{className:"btn-primary",onClick:h,disabled:p,children:p?"Saving...":"Save Branding"})]})})]})}function If({appConfig:e,setAppConfig:t,addToast:n}){const[a,l]=S.useState((e==null?void 0:e.services)||qi),[i,s]=S.useState(!1),c=async()=>{s(!0);try{await A.saveConfig({services:a}),t(o=>({...o,services:a})),n({message:"Services saved"})}catch{n({message:"Failed to save services",type:"error"})}finally{s(!1)}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Services"}),r.jsx("p",{children:"Manage the services available for booking requests"})]}),r.jsxs("div",{className:"settings-section",children:[a.length===0&&r.jsx("div",{className:"wizard-info-banner",style:{marginBottom:16},children:"At least one service is recommended for booking forms to work correctly."}),r.jsx(gn,{items:a,onChange:l,placeholder:"Add a service..."}),r.jsx("div",{className:"page-actions",style:{marginTop:20},children:r.jsx("button",{className:"btn-primary",onClick:c,disabled:i,children:i?"Saving...":"Save Services"})})]})]})}function $f({appConfig:e,setAppConfig:t,addToast:n}){const[a,l]=S.useState((e==null?void 0:e.categories)||Ji),[i,s]=S.useState(!1),c=async()=>{s(!0);try{await A.saveConfig({categories:a}),t(o=>({...o,categories:a})),n({message:"Categories saved"})}catch{n({message:"Failed to save categories",type:"error"})}finally{s(!1)}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Categories"}),r.jsx("p",{children:"Manage the client sector categories (e.g. Military, Federal, Corporate)"})]}),r.jsxs("div",{className:"settings-section",children:[r.jsx(gn,{items:a,onChange:l,placeholder:"Add a category..."}),r.jsx("div",{className:"page-actions",style:{marginTop:20},children:r.jsx("button",{className:"btn-primary",onClick:c,disabled:i,children:i?"Saving...":"Save Categories"})})]})]})}const ul="RESET SETUP";function Wf({addToast:e,onResetComplete:t}){const[n,a]=S.useState(""),[l,i]=S.useState(!1),s=n===ul,c=async()=>{if(s){i(!0);try{await A.resetSetup(),e({message:"Setup reset. The wizard will appear on next login."}),t()}catch{e({message:"Failed to reset setup",type:"error"})}finally{i(!1)}}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Reset Setup Wizard"}),r.jsx("p",{children:"Restart the first-run setup wizard"})]}),r.jsxs("div",{className:"danger-zone-card",children:[r.jsxs("div",{className:"danger-zone-header",children:[r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"#e53e3e",flexShrink:0,marginTop:1},children:[r.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),r.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),r.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Danger Zone"}),r.jsxs("p",{children:["This will erase the setup completion record and show the setup wizard the next time any admin logs in. Your data (bookings, contacts, services, branding) will ",r.jsx("strong",{children:"not"}),' be deleted — only the "setup complete" flag is cleared.']})]})]}),r.jsxs("div",{className:"danger-zone-confirm",children:[r.jsxs("label",{children:["To confirm, type ",r.jsx("code",{children:ul})," below:"]}),r.jsx("input",{className:"danger-zone-input",type:"text",value:n,onChange:o=>a(o.target.value),placeholder:ul,autoComplete:"off",spellCheck:!1}),r.jsx("button",{className:"btn-danger",disabled:!s||l,onClick:c,children:l?"Resetting...":"Reset Setup Wizard"})]})]})]})}function Uf({appConfig:e,setAppConfig:t,addToast:n}){const[a,l]=S.useState((e==null?void 0:e.allowed_origins)||[]),[i,s]=S.useState(!1),c=async()=>{s(!0);try{await A.saveConfig({allowed_origins:a}),t(o=>({...o,allowed_origins:a})),n({message:"Allowed origins saved. Changes take effect within 60 seconds."})}catch{n({message:"Failed to save origins",type:"error"})}finally{s(!1)}};return r.jsxs("div",{children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Allowed Origins"}),r.jsx("p",{children:"Control which domains can access the public API"})]}),r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"origins-info",children:[r.jsx("strong",{children:"CORS Allowed Origins"})," — Add the domain(s) of your public website that will call the booking/contact API. Example: ",r.jsx("code",{children:"https://yoursite.com"}),". The dev origins (",r.jsx("code",{children:"localhost:3000"}),", ",r.jsx("code",{children:"localhost:5173"}),") are always allowed. Changes take effect within 60 seconds — no restart needed."]}),r.jsx(gn,{items:a,onChange:l,placeholder:"https://your-site.com",validateItem:o=>/^https?:\/\/.+/.test(o)?null:"Must be a valid URL starting with http:// or https://"}),r.jsx("div",{className:"page-actions",style:{marginTop:20},children:r.jsx("button",{className:"btn-primary",onClick:c,disabled:i,children:i?"Saving...":"Save Origins"})})]})]})}function Hf({addToast:e}){const[t,n]=S.useState(null),[a,l]=S.useState(!0),[i,s]=S.useState("js"),[c,o]=S.useState(null);S.useEffect(()=>{A.getDocs().then(n).catch(()=>e({message:"Failed to load API docs",type:"error"})).finally(()=>l(!1))},[]);const p=h=>{navigator.clipboard.writeText(h).then(()=>e({message:"Copied to clipboard"}),()=>e({message:"Copy failed",type:"error"}))},g=()=>{if(!t)return;const h=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),y=URL.createObjectURL(h),x=document.createElement("a");x.href=y,x.download="api-docs.json",x.click(),URL.revokeObjectURL(y)};if(a)return r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"API Documentation"}),r.jsx("p",{children:"Loading..."})]});if(!t)return r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"API Documentation"}),r.jsx("p",{style:{color:"var(--red)"},children:"Failed to load documentation."})]});const j=h=>`api-docs-method-badge badge-${h.toLowerCase()}`;return r.jsxs("div",{children:[r.jsx("div",{className:"page-header",children:r.jsxs("div",{className:"api-docs-header",children:[r.jsxs("div",{children:[r.jsx("h2",{children:"API Documentation"}),r.jsxs("p",{className:"api-docs-generated",children:["Generated ",new Date(t.generatedAt).toLocaleString()]})]}),r.jsxs("button",{className:"api-docs-dl-btn",onClick:g,children:[_.download," Download JSON"]})]})}),r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"Endpoints"}),r.jsxs("p",{className:"settings-desc",children:["Base URL: ",r.jsx("code",{children:t.baseUrl})]}),t.endpoints.map((h,y)=>r.jsxs("div",{className:"api-docs-endpoint",children:[r.jsxs("div",{className:"api-docs-endpoint-header",onClick:()=>o(c===y?null:y),children:[r.jsx("span",{className:j(h.method),children:h.method}),r.jsx("span",{className:"api-docs-path",children:h.path}),r.jsx("span",{className:"api-docs-desc",children:h.description})]}),c===y&&r.jsxs("div",{className:"api-docs-endpoint-body",children:[r.jsxs("p",{style:{fontSize:13,color:"var(--text-secondary)",marginTop:12},children:[r.jsx("strong",{children:"Auth:"})," ",h.auth]}),h.request&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:12,fontWeight:700},children:"REQUEST BODY"}),r.jsx("pre",{className:"api-docs-code-block",children:JSON.stringify(h.request,null,2)})]}),h.response&&r.jsxs(r.Fragment,{children:[r.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:12,fontWeight:700},children:"RESPONSE"}),r.jsx("pre",{className:"api-docs-code-block",children:JSON.stringify(h.response,null,2)})]})]})]},y))]}),r.jsxs("div",{className:"settings-section",children:[r.jsx("h3",{children:"Code Examples"}),r.jsx("div",{className:"api-docs-tabs",children:[{id:"js",label:"JavaScript"},{id:"contactFormHTML",label:"Contact Form HTML"},{id:"bookingFormHTML",label:"Booking Form HTML"}].map(h=>r.jsx("button",{className:`api-docs-tab${i===h.id?" active":""}`,onClick:()=>s(h.id),children:h.label},h.id))}),r.jsx("pre",{className:"api-docs-code-block",children:i==="js"?t.examples.jsSnippet:i==="contactFormHTML"?t.examples.contactFormHTML:t.examples.bookingFormHTML}),r.jsxs("button",{className:"api-docs-copy-btn",onClick:()=>p(i==="js"?t.examples.jsSnippet:i==="contactFormHTML"?t.examples.contactFormHTML:t.examples.bookingFormHTML),children:[_.copy," Copy"]})]})]})}const Rr=[{iconKey:"home",title:"Welcome to Your Dashboard",body:"This is your home base. At a glance you can see new booking requests, unread messages, and anything that needs your attention — all in one place."},{iconKey:"bookings",title:"Managing Bookings",body:"When someone on your website requests a consultation, it shows up here under Bookings. You can review the details, approve or decline the request, and add approved sessions to your calendar."},{iconKey:"inbox",title:"Your Inbox",body:"General messages and inquiries from the website land here. You can mark them as replied or archive them once you've followed up."},{iconKey:"clock",title:"Setting Your Availability",body:"This is how clients book sessions with you. Go to the Availability page, pick a day and your available hours, and we'll create the open time slots automatically. Clients see those slots on the website and choose a time."},{iconKey:"calendar",title:"Your Calendar",body:"Once you approve a booking and add it to your calendar, it shows up here. This gives you a clear view of your upcoming consultation schedule."},{iconKey:"mobile",title:"Install as an App",body:`You can add this dashboard to your phone or tablet's home screen so it opens like a regular app — no browser address bar, full screen.

iPhone/iPad: Tap the Share button (the box with an arrow), then tap "Add to Home Screen".

Android: Tap the three-dot menu in the top right, then tap "Add to Home Screen" or "Install App".`}];function Vf({onDone:e}){const[t,n]=S.useState(0),a=Rr[t],l=t===Rr.length-1,i=()=>{l?e():n(c=>c+1)},s=async()=>{try{await A.completeTutorial()}catch{}e()};return r.jsx("div",{className:"tutorial-overlay",children:r.jsxs("div",{className:"tutorial-card",children:[r.jsx("div",{className:"tutorial-icon",children:_[a.iconKey]}),r.jsxs("div",{className:"tutorial-step-num",children:["Step ",t+1," of ",Rr.length]}),r.jsx("div",{className:"tutorial-title",children:a.title}),r.jsx("div",{className:"tutorial-body",style:{whiteSpace:"pre-line"},children:a.body}),r.jsx("div",{className:"tutorial-dots",children:Rr.map((c,o)=>r.jsx("div",{className:`tutorial-dot${o===t?" active":""}`},o))}),r.jsxs("div",{className:"tutorial-btn-row",children:[r.jsx("button",{className:"tutorial-next",onClick:i,children:l?"Got it, close →":"Next →"}),r.jsx("button",{className:"tutorial-no-show",onClick:s,children:"Don't show this again"})]})]})})}function Qf({onLogin:e}){const[t,n]=S.useState(""),[a,l]=S.useState(""),[i,s]=S.useState(""),[c,o]=S.useState(!1),p=async()=>{if(!t||!a){s("Please enter username and password.");return}o(!0),s("");try{const g=await A.login(t,a);e(g.tutorialComplete===!1,g.setupComplete===!0)}catch{s("Invalid credentials. Please try again.")}finally{o(!1)}};return r.jsx("div",{className:"login-page",children:r.jsxs("div",{className:"login-box",children:[r.jsxs("div",{className:"login-logo",children:[r.jsx("h1",{children:"Admin"}),r.jsx("p",{children:"Admin Portal"})]}),r.jsxs("div",{className:"login-card",children:[r.jsx("h2",{children:"Sign In"}),r.jsx("p",{className:"subtitle",children:"Access your consultation management dashboard"}),i&&r.jsx("div",{className:"login-error",children:i}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Username"}),r.jsx("input",{type:"text",placeholder:"Enter username",value:t,onChange:g=>{n(g.target.value),s("")},onKeyDown:g=>g.key==="Enter"&&p()})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Password"}),r.jsx("input",{type:"password",placeholder:"Enter password",value:a,onChange:g=>{l(g.target.value),s("")},onKeyDown:g=>g.key==="Enter"&&p()})]}),r.jsx("button",{className:"btn-primary",onClick:p,disabled:c,children:c?"Signing in…":"Sign In"})]})]})})}function Kf(){const[e,t]=S.useState(A.hasToken()),[n,a]=S.useState(!1),[l,i]=S.useState(!1),[s,c]=S.useState(null),[o,p]=S.useState("dashboard"),[g,j]=S.useState([]),[h,y]=S.useState([]),[x,w]=S.useState([]),[k,d]=S.useState([]),[u,m]=S.useState(null),[b,N]=S.useState(null),[C,f]=S.useState(null),[v,E]=S.useState([]),[F,D]=S.useState(!1),[Y,Oe]=S.useState(""),[et,P]=S.useState("all"),[be,Ne]=S.useState("all"),[T,B]=S.useState(""),[R,G]=S.useState("all");S.useEffect(()=>{e&&(A.getBookings().then(j).catch(()=>{}),A.getContacts().then(y).catch(()=>{}),A.getAvailability().then(w).catch(()=>{}),A.getAdminConfig().then(c).catch(()=>{}),A.getDeals().then(d).catch(()=>{}))},[e]);const M=({message:ee,type:Se="success"})=>{const Ye=Date.now();E(Ie=>[...Ie,{id:Ye,message:ee,type:Se}]),setTimeout(()=>E(Ie=>Ie.filter(Ad=>Ad.id!==Ye)),3500)},Dt=async(ee,Se)=>{try{await A.updateBookingStatus(ee,Se),j(Ye=>Ye.map(Ie=>Ie.id===ee?{...Ie,status:Se}:Ie))}catch{M({message:"Failed to update status",type:"error"})}},tt=async ee=>{await Dt(ee,"on-calendar")},En=async(ee,Se)=>{try{await A.updateContactStatus(ee,Se),y(Ye=>Ye.map(Ie=>Ie.id===ee?{...Ie,status:Se}:Ie))}catch{M({message:"Failed to update status",type:"error"})}},nt=async ee=>{try{await A.deleteBooking(ee),j(Se=>Se.filter(Ye=>Ye.id!==ee)),M({message:"Booking deleted",type:"success"})}catch{M({message:"Failed to delete booking",type:"error"})}},Yt=async ee=>{try{await A.deleteContact(ee),y(Se=>Se.filter(Ye=>Ye.id!==ee)),M({message:"Message deleted",type:"success"})}catch{M({message:"Failed to delete message",type:"error"})}},Ld=()=>{A.logout(),t(!1),a(!1),i(!1),c(null),j([]),y([]),w([]),d([]),p("dashboard")},Fd=g.find(ee=>ee.id===b),Dd=h.find(ee=>ee.id===C);if(!e)return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:po}),r.jsx(Qf,{onLogin:(ee,Se)=>{t(!0),Se?ee&&a(!0):i(!0)}})]});let H;o==="dashboard"?H=r.jsx(zf,{bookings:g,contacts:h,setPage:p,setSelectedBooking:N,setSelectedContact:f}):o==="bookings"?H=r.jsx(Ef,{bookings:g,setBookings:j,setPage:p,setSelectedBooking:N,searchTerm:Y,setSearchTerm:Oe,statusFilter:et,setStatusFilter:P,categoryFilter:be,setCategoryFilter:Ne,categories:s==null?void 0:s.categories,services:s==null?void 0:s.services,addToast:M}):o==="booking-detail"?H=r.jsx(_f,{booking:Fd,onBack:()=>p("bookings"),onUpdateStatus:Dt,onAddToCalendar:tt,onDelete:nt,addToast:M,appConfig:s,setPage:p,setSelectedDeal:m,setDeals:d,deals:k}):o==="contacts"?H=r.jsx(Tf,{contacts:h,setPage:p,setSelectedContact:f,searchTerm:T,setSearchTerm:B,contactStatusFilter:R,setContactStatusFilter:G}):o==="contact-detail"?H=r.jsx(Lf,{contact:Dd,onBack:()=>p("contacts"),onUpdateStatus:En,onDelete:Yt,addToast:M,appConfig:s,setPage:p,setSelectedDeal:m,setDeals:d}):o==="availability"?H=r.jsx(Pf,{slots:x,setSlots:w,addToast:M,setPage:p,setSelectedBooking:N}):o==="calendar"?H=r.jsx(Ff,{bookings:g,setPage:p,setSelectedBooking:N}):o==="settings"?H=r.jsx(Mf,{addToast:M,appConfig:s}):o==="customize-branding"?H=r.jsx(Of,{appConfig:s,setAppConfig:c,addToast:M}):o==="customize-services"?H=r.jsx(If,{appConfig:s,setAppConfig:c,addToast:M}):o==="customize-categories"?H=r.jsx($f,{appConfig:s,setAppConfig:c,addToast:M}):o==="analytics"?H=r.jsx(gf,{appConfig:s}):o==="customize-stages"?H=r.jsx(Nf,{appConfig:s,setAppConfig:c,addToast:M}):o==="customize-scoring"?H=r.jsx(jf,{appConfig:s,setAppConfig:c,addToast:M}):o==="customize-fields"?H=r.jsx(wf,{appConfig:s,setAppConfig:c,addToast:M}):o==="customize-notifications"?H=r.jsx(kf,{appConfig:s,setAppConfig:c,addToast:M}):o==="customize-appearance"?H=r.jsx(Rf,{addToast:M}):o==="advanced-origins"?H=r.jsx(Uf,{appConfig:s,setAppConfig:c,addToast:M}):o==="advanced-docs"?H=r.jsx(Hf,{addToast:M}):o==="advanced-reset"?H=r.jsx(Wf,{addToast:M,onResetComplete:()=>{i(!0),p("dashboard")}}):o==="pipeline"?H=r.jsx(hf,{deals:k,setDeals:d,appConfig:s,setPage:p,setSelectedDeal:m,addToast:M}):o==="deals"?H=r.jsx(xf,{deals:k,setDeals:d,appConfig:s,setPage:p,setSelectedDeal:m,addToast:M}):o==="deal-detail"?H=r.jsx(vf,{dealId:u,deals:k,setDeals:d,appConfig:s,setPage:p,addToast:M}):o==="tasks"&&(H=r.jsx(yf,{deals:k,contacts:h,bookings:g,addToast:M}));const Pd=(s==null?void 0:s.company_name)||"Admin";return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:po}),r.jsxs("div",{className:"app-layout",children:[r.jsxs("div",{className:"mobile-header",children:[r.jsx("h1",{children:Pd}),r.jsx("button",{className:"mobile-menu-btn",onClick:()=>D(!0),children:_.menu})]}),r.jsx(Cf,{page:o,setPage:p,bookings:g,contacts:h,isOpen:F,onClose:()=>D(!1),onLogout:Ld,onShowTutorial:()=>a(!0),appConfig:s}),r.jsx("main",{className:"main-content",children:H}),r.jsx(Sf,{toasts:v}),l&&r.jsx(Bf,{onComplete:()=>{i(!1),A.getAdminConfig().then(c).catch(()=>{})},onSkip:()=>i(!1),addToast:M}),!l&&n&&r.jsx(Vf,{onDone:()=>a(!1)})]})]})}class Yf extends S.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}render(){return this.state.error?r.jsxs("div",{style:{padding:40,fontFamily:"monospace",color:"#F87171",background:"#0C0F14",minHeight:"100vh"},children:[r.jsx("h2",{style:{color:"#C8A84E",marginBottom:16},children:"Something went wrong"}),r.jsx("pre",{style:{whiteSpace:"pre-wrap",fontSize:13},children:String(this.state.error)}),r.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:24,background:"#C8A84E",color:"#0C0F14",border:"none",padding:"10px 20px",borderRadius:8,fontWeight:700,cursor:"pointer"},children:"Reload"})]}):this.props.children}}zd(document.getElementById("root")).render(r.jsx(S.StrictMode,{children:r.jsx(Yf,{children:r.jsx(Kf,{})})}));
