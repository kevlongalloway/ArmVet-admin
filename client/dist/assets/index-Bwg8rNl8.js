(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var fs={exports:{}},ji={},hs={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Md=Symbol.for("react.portal"),Rd=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),$d=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Hd=Symbol.for("react.memo"),Vd=Symbol.for("react.lazy"),eo=Symbol.iterator;function Qd(e){return e===null||typeof e!="object"?null:(e=eo&&e[eo]||e["@@iterator"],typeof e=="function"?e:null)}var ms={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gs=Object.assign,xs={};function wn(e,t,n){this.props=e,this.context=t,this.refs=xs,this.updater=n||ms}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vs(){}vs.prototype=wn.prototype;function rl(e,t,n){this.props=e,this.context=t,this.refs=xs,this.updater=n||ms}var il=rl.prototype=new vs;il.constructor=rl;gs(il,wn.prototype);il.isPureReactComponent=!0;var to=Array.isArray,ys=Object.prototype.hasOwnProperty,al={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function js(e,t,n){var r,a={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)ys.call(t,r)&&!ws.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:pr,type:e,key:l,ref:o,props:a,_owner:al.current}}function Kd(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ll(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function Yd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var no=/\/+/g;function Bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yd(""+e.key):t.toString(36)}function Rr(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case pr:case Md:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Bi(o,0):r,to(a)?(n="",e!=null&&(n=e.replace(no,"$&/")+"/"),Rr(a,t,n,"",function(p){return p})):a!=null&&(ll(a)&&(a=Kd(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(no,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",to(e))for(var s=0;s<e.length;s++){l=e[s];var c=r+Bi(l,s);o+=Rr(l,t,n,c,a)}else if(c=Qd(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=r+Bi(l,s++),o+=Rr(l,t,n,c,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function vr(e,t,n){if(e==null)return e;var r=[],a=0;return Rr(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Br={transition:null},Xd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Br,ReactCurrentOwner:al};function ks(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!ll(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=wn;R.Fragment=Rd;R.Profiler=Od;R.PureComponent=rl;R.StrictMode=Bd;R.Suspense=Ud;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;R.act=ks;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gs({},e.props),a=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=al.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)ys.call(t,c)&&!ws.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var p=0;p<c;p++)s[p]=arguments[p+2];r.children=s}return{$$typeof:pr,type:e.type,key:a,ref:l,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:$d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};R.createElement=js;R.createFactory=function(e){var t=js.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Wd,render:e}};R.isValidElement=ll;R.lazy=function(e){return{$$typeof:Vd,_payload:{_status:-1,_result:e},_init:Gd}};R.memo=function(e,t){return{$$typeof:Hd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Br.transition;Br.transition={};try{e()}finally{Br.transition=t}};R.unstable_act=ks;R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.3.1";hs.exports=R;var N=hs.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=N,Jd=Symbol.for("react.element"),qd=Symbol.for("react.fragment"),eu=Object.prototype.hasOwnProperty,tu=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nu={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,a={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)eu.call(t,r)&&!nu.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Jd,type:e,key:l,ref:o,props:a,_owner:tu.current}}ji.Fragment=qd;ji.jsx=bs;ji.jsxs=bs;fs.exports=ji;var i=fs.exports,Ss={exports:{}},ze={},Ns={exports:{}},Cs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,F){var P=_.length;_.push(F);e:for(;0<P;){var Q=P-1>>>1,D=_[Q];if(0<a(D,F))_[Q]=F,_[P]=D,P=Q;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var F=_[0],P=_.pop();if(P!==F){_[0]=P;e:for(var Q=0,D=_.length,_t=D>>>1;Q<_t;){var Xe=2*(Q+1)-1,Nn=_[Xe],Ze=Xe+1,Ht=_[Ze];if(0>a(Nn,P))Ze<D&&0>a(Ht,Nn)?(_[Q]=Ht,_[Ze]=P,Q=Ze):(_[Q]=Nn,_[Xe]=P,Q=Xe);else if(Ze<D&&0>a(Ht,P))_[Q]=Ht,_[Ze]=P,Q=Ze;else break e}}return F}function a(_,F){var P=_.sortIndex-F.sortIndex;return P!==0?P:_.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],p=[],m=1,x=null,f=3,v=!1,g=!1,j=!1,k=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var F=n(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=_)r(p),F.sortIndex=F.expirationTime,t(c,F);else break;F=n(p)}}function w(_){if(j=!1,h(_),!g)if(n(c)!==null)g=!0,bn(C);else{var F=n(p);F!==null&&Sn(w,F.startTime-_)}}function C(_,F){g=!1,j&&(j=!1,u(b),b=-1),v=!0;var P=f;try{for(h(F),x=n(c);x!==null&&(!(x.expirationTime>F)||_&&!se());){var Q=x.callback;if(typeof Q=="function"){x.callback=null,f=x.priorityLevel;var D=Q(x.expirationTime<=F);F=e.unstable_now(),typeof D=="function"?x.callback=D:x===n(c)&&r(c),h(F)}else r(c);x=n(c)}if(x!==null)var _t=!0;else{var Xe=n(p);Xe!==null&&Sn(w,Xe.startTime-F),_t=!1}return _t}finally{x=null,f=P,v=!1}}var z=!1,y=null,b=-1,M=5,E=-1;function se(){return!(e.unstable_now()-E<M)}function ee(){if(y!==null){var _=e.unstable_now();E=_;var F=!0;try{F=y(!0,_)}finally{F?Ge():(z=!1,y=null)}}else z=!1}var Ge;if(typeof d=="function")Ge=function(){d(ee)};else if(typeof MessageChannel<"u"){var xr=new MessageChannel,Ri=xr.port2;xr.port1.onmessage=ee,Ge=function(){Ri.postMessage(null)}}else Ge=function(){k(ee,0)};function bn(_){y=_,z||(z=!0,Ge())}function Sn(_,F){b=k(function(){_(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,bn(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var P=f;f=F;try{return _()}finally{f=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,F){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=f;f=_;try{return F()}finally{f=P}},e.unstable_scheduleCallback=function(_,F,P){var Q=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Q+P:Q):P=Q,_){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=P+D,_={id:m++,callback:F,priorityLevel:_,startTime:P,expirationTime:D,sortIndex:-1},P>Q?(_.sortIndex=P,t(p,_),n(c)===null&&_===n(p)&&(j?(u(b),b=-1):j=!0,Sn(w,P-Q))):(_.sortIndex=D,t(c,_),g||v||(g=!0,bn(C))),_},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(_){var F=f;return function(){var P=f;f=F;try{return _.apply(this,arguments)}finally{f=P}}}})(Cs);Ns.exports=Cs;var ru=Ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu=N,Ce=ru;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zs=new Set,Yn={};function Wt(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)zs.add(t[e])}var it=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ua=Object.prototype.hasOwnProperty,au=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ro={},io={};function lu(e){return ua.call(io,e)?!0:ua.call(ro,e)?!1:au.test(e)?io[e]=!0:(ro[e]=!0,!1)}function ou(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function su(e,t,n,r){if(t===null||typeof t>"u"||ou(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,a,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ol=/[\-:]([a-z])/g;function sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ol,sl);oe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ol,sl);oe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ol,sl);oe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function cl(e,t,n,r){var a=oe.hasOwnProperty(t)?oe[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(su(t,n,a,r)&&(n=null),r||a===null?lu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=iu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),Es=Symbol.for("react.provider"),_s=Symbol.for("react.context"),ul=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),pl=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Ls=Symbol.for("react.offscreen"),ao=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=ao&&e[ao]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Oi;function An(e){if(Oi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oi=t&&t[1]||""}return`
`+Oi+e}var Ii=!1;function $i(e,t){if(!e||Ii)return"";Ii=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),l=r.stack.split(`
`),o=a.length-1,s=l.length-1;1<=o&&0<=s&&a[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==l[s]){var c=`
`+a[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Ii=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?An(e):""}function cu(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=$i(e.type,!1),e;case 11:return e=$i(e.type.render,!1),e;case 1:return e=$i(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Qt:return"Portal";case pa:return"Profiler";case dl:return"StrictMode";case fa:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _s:return(e.displayName||"Context")+".Consumer";case Es:return(e._context.displayName||"Context")+".Provider";case ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pl:return t=e.displayName||null,t!==null?t:ma(e.type)||"Memo";case dt:t=e._payload,e=e._init;try{return ma(e(t))}catch{}}return null}function du(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(t);case 8:return t===dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ts(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uu(e){var t=Ts(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=uu(e))}function Fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ts(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ps(e,t){t=t.checked,t!=null&&cl(e,"checked",t,!1)}function xa(e,t){Ps(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?va(e,t.type,n):t.hasOwnProperty("defaultValue")&&va(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function va(e,t,n){(t!=="number"||Xr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function so(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Mn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Ds(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function co(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function As(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?As(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,Ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pu=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){pu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function Rs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function Bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Rs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var fu=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(e,t){if(t){if(fu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sa=null,on=null,sn=null;function uo(e){if(e=mr(e)){if(typeof Sa!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Ci(t),Sa(e.stateNode,e.type,t))}}function Os(e){on?sn?sn.push(e):sn=[e]:on=e}function Is(){if(on){var e=on,t=sn;if(sn=on=null,uo(e),t)for(e=0;e<t.length;e++)uo(t[e])}}function $s(e,t){return e(t)}function Ws(){}var Wi=!1;function Us(e,t,n){if(Wi)return e(t,n);Wi=!0;try{return $s(e,t,n)}finally{Wi=!1,(on!==null||sn!==null)&&(Ws(),Is())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=Ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Na=!1;if(it)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Na=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Na=!1}function hu(e,t,n,r,a,l,o,s,c){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(m){this.onError(m)}}var In=!1,Zr=null,Jr=!1,Ca=null,mu={onError:function(e){In=!0,Zr=e}};function gu(e,t,n,r,a,l,o,s,c){In=!1,Zr=null,hu.apply(mu,arguments)}function xu(e,t,n,r,a,l,o,s,c){if(gu.apply(this,arguments),In){if(In){var p=Zr;In=!1,Zr=null}else throw Error(S(198));Jr||(Jr=!0,Ca=p)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hs(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function po(e){if(Ut(e)!==e)throw Error(S(188))}function vu(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return po(a),e;if(l===r)return po(a),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=l;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=l;break}if(s===r){o=!0,r=a,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=a;break}if(s===r){o=!0,r=l,n=a;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Vs(e){return e=vu(e),e!==null?Qs(e):null}function Qs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qs(e);if(t!==null)return t;e=e.sibling}return null}var Ks=Ce.unstable_scheduleCallback,fo=Ce.unstable_cancelCallback,yu=Ce.unstable_shouldYield,wu=Ce.unstable_requestPaint,Z=Ce.unstable_now,ju=Ce.unstable_getCurrentPriorityLevel,hl=Ce.unstable_ImmediatePriority,Ys=Ce.unstable_UserBlockingPriority,qr=Ce.unstable_NormalPriority,ku=Ce.unstable_LowPriority,Gs=Ce.unstable_IdlePriority,ki=null,Ke=null;function bu(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:Cu,Su=Math.log,Nu=Math.LN2;function Cu(e){return e>>>=0,e===0?32:31-(Su(e)/Nu|0)|0}var kr=64,br=4194304;function Rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ei(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=Rn(s):(l&=o,l!==0&&(r=Rn(l)))}else o=n&~a,o!==0?r=Rn(o):l!==0&&(r=Rn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),a=1<<n,r|=e[n],t&=~a;return r}function zu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Ie(l),s=1<<o,c=a[o];c===-1?(!(s&n)||s&r)&&(a[o]=zu(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xs(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Ui(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function _u(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ie(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var I=0;function Zs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Js,gl,qs,ec,tc,Ea=!1,Sr=[],gt=null,xt=null,vt=null,Zn=new Map,Jn=new Map,pt=[],Lu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ho(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function En(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=mr(t),t!==null&&gl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Tu(e,t,n,r,a){switch(t){case"focusin":return gt=En(gt,e,t,n,r,a),!0;case"dragenter":return xt=En(xt,e,t,n,r,a),!0;case"mouseover":return vt=En(vt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Zn.set(l,En(Zn.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Jn.set(l,En(Jn.get(l)||null,e,t,n,r,a)),!0}return!1}function nc(e){var t=Ft(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=Hs(n),t!==null){e.blockedOn=t,tc(e.priority,function(){qs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ba=r,n.target.dispatchEvent(r),ba=null}else return t=mr(n),t!==null&&gl(t),e.blockedOn=n,!1;t.shift()}return!0}function mo(e,t,n){Or(e)&&n.delete(t)}function Fu(){Ea=!1,gt!==null&&Or(gt)&&(gt=null),xt!==null&&Or(xt)&&(xt=null),vt!==null&&Or(vt)&&(vt=null),Zn.forEach(mo),Jn.forEach(mo)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,Ea||(Ea=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,Fu)))}function qn(e){function t(a){return _n(a,e)}if(0<Sr.length){_n(Sr[0],e);for(var n=1;n<Sr.length;n++){var r=Sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&_n(gt,e),xt!==null&&_n(xt,e),vt!==null&&_n(vt,e),Zn.forEach(t),Jn.forEach(t),n=0;n<pt.length;n++)r=pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pt.length&&(n=pt[0],n.blockedOn===null);)nc(n),n.blockedOn===null&&pt.shift()}var cn=st.ReactCurrentBatchConfig,ti=!0;function Pu(e,t,n,r){var a=I,l=cn.transition;cn.transition=null;try{I=1,xl(e,t,n,r)}finally{I=a,cn.transition=l}}function Du(e,t,n,r){var a=I,l=cn.transition;cn.transition=null;try{I=4,xl(e,t,n,r)}finally{I=a,cn.transition=l}}function xl(e,t,n,r){if(ti){var a=_a(e,t,n,r);if(a===null)qi(e,t,r,ni,n),ho(e,r);else if(Tu(a,e,t,n,r))r.stopPropagation();else if(ho(e,r),t&4&&-1<Lu.indexOf(e)){for(;a!==null;){var l=mr(a);if(l!==null&&Js(l),l=_a(e,t,n,r),l===null&&qi(e,t,r,ni,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else qi(e,t,r,null,n)}}var ni=null;function _a(e,t,n,r){if(ni=null,e=fl(r),e=Ft(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hs(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ni=e,null}function rc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case hl:return 1;case Ys:return 4;case qr:case ku:return 16;case Gs:return 536870912;default:return 16}default:return 16}}var ht=null,vl=null,Ir=null;function ic(){if(Ir)return Ir;var e,t=vl,n=t.length,r,a="value"in ht?ht.value:ht.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[l-r];r++);return Ir=a.slice(e,1<r?1-r:void 0)}function $r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function go(){return!1}function Ee(e){function t(n,r,a,l,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nr:go,this.isPropagationStopped=go,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ee(jn),hr=G({},jn,{view:0,detail:0}),Au=Ee(hr),Hi,Vi,Ln,bi=G({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Hi=e.screenX-Ln.screenX,Vi=e.screenY-Ln.screenY):Vi=Hi=0,Ln=e),Hi)},movementY:function(e){return"movementY"in e?e.movementY:Vi}}),xo=Ee(bi),Mu=G({},bi,{dataTransfer:0}),Ru=Ee(Mu),Bu=G({},hr,{relatedTarget:0}),Qi=Ee(Bu),Ou=G({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Iu=Ee(Ou),$u=G({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wu=Ee($u),Uu=G({},jn,{data:0}),vo=Ee(Uu),Hu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ku(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qu[e])?!!t[e]:!1}function wl(){return Ku}var Yu=G({},hr,{key:function(e){if(e.key){var t=Hu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(e){return e.type==="keypress"?$r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gu=Ee(Yu),Xu=G({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yo=Ee(Xu),Zu=G({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),Ju=Ee(Zu),qu=G({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=Ee(qu),tp=G({},bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),np=Ee(tp),rp=[9,13,27,32],jl=it&&"CompositionEvent"in window,$n=null;it&&"documentMode"in document&&($n=document.documentMode);var ip=it&&"TextEvent"in window&&!$n,ac=it&&(!jl||$n&&8<$n&&11>=$n),wo=" ",jo=!1;function lc(e,t){switch(e){case"keyup":return rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function ap(e,t){switch(e){case"compositionend":return oc(t);case"keypress":return t.which!==32?null:(jo=!0,wo);case"textInput":return e=t.data,e===wo&&jo?null:e;default:return null}}function lp(e,t){if(Yt)return e==="compositionend"||!jl&&lc(e,t)?(e=ic(),Ir=vl=ht=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ac&&t.locale!=="ko"?null:t.data;default:return null}}var op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!op[e.type]:t==="textarea"}function sc(e,t,n,r){Os(r),t=ri(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wn=null,er=null;function sp(e){yc(e,0)}function Si(e){var t=Zt(e);if(Fs(t))return e}function cp(e,t){if(e==="change")return t}var cc=!1;if(it){var Ki;if(it){var Yi="oninput"in document;if(!Yi){var bo=document.createElement("div");bo.setAttribute("oninput","return;"),Yi=typeof bo.oninput=="function"}Ki=Yi}else Ki=!1;cc=Ki&&(!document.documentMode||9<document.documentMode)}function So(){Wn&&(Wn.detachEvent("onpropertychange",dc),er=Wn=null)}function dc(e){if(e.propertyName==="value"&&Si(er)){var t=[];sc(t,er,e,fl(e)),Us(sp,t)}}function dp(e,t,n){e==="focusin"?(So(),Wn=t,er=n,Wn.attachEvent("onpropertychange",dc)):e==="focusout"&&So()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(er)}function pp(e,t){if(e==="click")return Si(t)}function fp(e,t){if(e==="input"||e==="change")return Si(t)}function hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:hp;function tr(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ua.call(t,a)||!We(e[a],t[a]))return!1}return!0}function No(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Co(e,t){var n=No(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=No(n)}}function uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pc(){for(var e=window,t=Xr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xr(e.document)}return t}function kl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mp(e){var t=pc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uc(n.ownerDocument.documentElement,n)){if(r!==null&&kl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Co(n,l);var o=Co(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gp=it&&"documentMode"in document&&11>=document.documentMode,Gt=null,La=null,Un=null,Ta=!1;function zo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ta||Gt==null||Gt!==Xr(r)||(r=Gt,"selectionStart"in r&&kl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&tr(Un,r)||(Un=r,r=ri(La,"onSelect"),0<r.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},Gi={},fc={};it&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Ni(e){if(Gi[e])return Gi[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fc)return Gi[e]=t[n];return e}var hc=Ni("animationend"),mc=Ni("animationiteration"),gc=Ni("animationstart"),xc=Ni("transitionend"),vc=new Map,Eo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){vc.set(e,t),Wt(t,[e])}for(var Xi=0;Xi<Eo.length;Xi++){var Zi=Eo[Xi],xp=Zi.toLowerCase(),vp=Zi[0].toUpperCase()+Zi.slice(1);Ct(xp,"on"+vp)}Ct(hc,"onAnimationEnd");Ct(mc,"onAnimationIteration");Ct(gc,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(xc,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));function _o(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xu(r,t,void 0,e),e.currentTarget=null}function yc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==l&&a.isPropagationStopped())break e;_o(a,s,p),l=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,p=s.currentTarget,s=s.listener,c!==l&&a.isPropagationStopped())break e;_o(a,s,p),l=c}}}if(Jr)throw e=Ca,Jr=!1,Ca=null,e}function U(e,t){var n=t[Ma];n===void 0&&(n=t[Ma]=new Set);var r=e+"__bubble";n.has(r)||(wc(t,e,2,!1),n.add(r))}function Ji(e,t,n){var r=0;t&&(r|=4),wc(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function nr(e){if(!e[zr]){e[zr]=!0,zs.forEach(function(n){n!=="selectionchange"&&(yp.has(n)||Ji(n,!1,e),Ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,Ji("selectionchange",!1,t))}}function wc(e,t,n,r){switch(rc(t)){case 1:var a=Pu;break;case 4:a=Du;break;default:a=xl}n=a.bind(null,t,n,e),a=void 0,!Na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function qi(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;o=o.return}for(;s!==null;){if(o=Ft(s),o===null)return;if(c=o.tag,c===5||c===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Us(function(){var p=l,m=fl(n),x=[];e:{var f=vc.get(e);if(f!==void 0){var v=yl,g=e;switch(e){case"keypress":if($r(n)===0)break e;case"keydown":case"keyup":v=Gu;break;case"focusin":g="focus",v=Qi;break;case"focusout":g="blur",v=Qi;break;case"beforeblur":case"afterblur":v=Qi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ju;break;case hc:case mc:case gc:v=Iu;break;case xc:v=ep;break;case"scroll":v=Au;break;case"wheel":v=np;break;case"copy":case"cut":case"paste":v=Wu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=yo}var j=(t&4)!==0,k=!j&&e==="scroll",u=j?f!==null?f+"Capture":null:f;j=[];for(var d=p,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,u!==null&&(w=Xn(d,u),w!=null&&j.push(rr(d,w,h)))),k)break;d=d.return}0<j.length&&(f=new v(f,g,null,n,m),x.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==ba&&(g=n.relatedTarget||n.fromElement)&&(Ft(g)||g[at]))break e;if((v||f)&&(f=m.window===m?m:(f=m.ownerDocument)?f.defaultView||f.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=p,g=g?Ft(g):null,g!==null&&(k=Ut(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=p),v!==g)){if(j=xo,w="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=yo,w="onPointerLeave",u="onPointerEnter",d="pointer"),k=v==null?f:Zt(v),h=g==null?f:Zt(g),f=new j(w,d+"leave",v,n,m),f.target=k,f.relatedTarget=h,w=null,Ft(m)===p&&(j=new j(u,d+"enter",g,n,m),j.target=h,j.relatedTarget=k,w=j),k=w,v&&g)t:{for(j=v,u=g,d=0,h=j;h;h=Vt(h))d++;for(h=0,w=u;w;w=Vt(w))h++;for(;0<d-h;)j=Vt(j),d--;for(;0<h-d;)u=Vt(u),h--;for(;d--;){if(j===u||u!==null&&j===u.alternate)break t;j=Vt(j),u=Vt(u)}j=null}else j=null;v!==null&&Lo(x,f,v,j,!1),g!==null&&k!==null&&Lo(x,k,g,j,!0)}}e:{if(f=p?Zt(p):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var C=cp;else if(ko(f))if(cc)C=fp;else{C=up;var z=dp}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=pp);if(C&&(C=C(e,p))){sc(x,C,n,m);break e}z&&z(e,f,p),e==="focusout"&&(z=f._wrapperState)&&z.controlled&&f.type==="number"&&va(f,"number",f.value)}switch(z=p?Zt(p):window,e){case"focusin":(ko(z)||z.contentEditable==="true")&&(Gt=z,La=p,Un=null);break;case"focusout":Un=La=Gt=null;break;case"mousedown":Ta=!0;break;case"contextmenu":case"mouseup":case"dragend":Ta=!1,zo(x,n,m);break;case"selectionchange":if(gp)break;case"keydown":case"keyup":zo(x,n,m)}var y;if(jl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Yt?lc(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(ac&&n.locale!=="ko"&&(Yt||b!=="onCompositionStart"?b==="onCompositionEnd"&&Yt&&(y=ic()):(ht=m,vl="value"in ht?ht.value:ht.textContent,Yt=!0)),z=ri(p,b),0<z.length&&(b=new vo(b,e,null,n,m),x.push({event:b,listeners:z}),y?b.data=y:(y=oc(n),y!==null&&(b.data=y)))),(y=ip?ap(e,n):lp(e,n))&&(p=ri(p,"onBeforeInput"),0<p.length&&(m=new vo("onBeforeInput","beforeinput",null,n,m),x.push({event:m,listeners:p}),m.data=y))}yc(x,t)})}function rr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Xn(e,n),l!=null&&r.unshift(rr(e,l,a)),l=Xn(e,t),l!=null&&r.push(rr(e,l,a))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lo(e,t,n,r,a){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,p=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&p!==null&&(s=p,a?(c=Xn(n,l),c!=null&&o.unshift(rr(n,c,s))):a||(c=Xn(n,l),c!=null&&o.push(rr(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var wp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function To(e){return(typeof e=="string"?e:""+e).replace(wp,`
`).replace(jp,"")}function Er(e,t,n){if(t=To(t),To(e)!==t&&n)throw Error(S(425))}function ii(){}var Fa=null,Pa=null;function Da(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,Fo=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Fo<"u"?function(e){return Fo.resolve(null).then(e).catch(Sp)}:Aa;function Sp(e){setTimeout(function(){throw e})}function ea(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);qn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Po(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+kn,ir="__reactProps$"+kn,at="__reactContainer$"+kn,Ma="__reactEvents$"+kn,Np="__reactListeners$"+kn,Cp="__reactHandles$"+kn;function Ft(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Po(e);e!==null;){if(n=e[Qe])return n;e=Po(e)}return t}e=n,n=e.parentNode}return null}function mr(e){return e=e[Qe]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Ci(e){return e[ir]||null}var Ra=[],Jt=-1;function zt(e){return{current:e}}function H(e){0>Jt||(e.current=Ra[Jt],Ra[Jt]=null,Jt--)}function W(e,t){Jt++,Ra[Jt]=e.current,e.current=t}var Nt={},pe=zt(Nt),we=zt(!1),Rt=Nt;function hn(e,t){var n=e.type.contextTypes;if(!n)return Nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function je(e){return e=e.childContextTypes,e!=null}function ai(){H(we),H(pe)}function Do(e,t,n){if(pe.current!==Nt)throw Error(S(168));W(pe,t),W(we,n)}function jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,du(e)||"Unknown",a));return G({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nt,Rt=pe.current,W(pe,e),W(we,we.current),!0}function Ao(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=jc(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,H(we),H(pe),W(pe,e)):H(we),W(we,n)}var qe=null,zi=!1,ta=!1;function kc(e){qe===null?qe=[e]:qe.push(e)}function zp(e){zi=!0,kc(e)}function Et(){if(!ta&&qe!==null){ta=!0;var e=0,t=I;try{var n=qe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,zi=!1}catch(a){throw qe!==null&&(qe=qe.slice(e+1)),Ks(hl,Et),a}finally{I=t,ta=!1}}return null}var qt=[],en=0,oi=null,si=0,_e=[],Le=0,Bt=null,et=1,tt="";function Lt(e,t){qt[en++]=si,qt[en++]=oi,oi=e,si=t}function bc(e,t,n){_e[Le++]=et,_e[Le++]=tt,_e[Le++]=Bt,Bt=e;var r=et;e=tt;var a=32-Ie(r)-1;r&=~(1<<a),n+=1;var l=32-Ie(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,et=1<<32-Ie(t)+a|n<<a|r,tt=l+e}else et=1<<l|n<<a|r,tt=e}function bl(e){e.return!==null&&(Lt(e,1),bc(e,1,0))}function Sl(e){for(;e===oi;)oi=qt[--en],qt[en]=null,si=qt[--en],qt[en]=null;for(;e===Bt;)Bt=_e[--Le],_e[Le]=null,tt=_e[--Le],_e[Le]=null,et=_e[--Le],_e[Le]=null}var Ne=null,Se=null,V=!1,Oe=null;function Sc(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Se=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Se=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(V){var t=Se;if(t){var n=t;if(!Mo(e,t)){if(Ba(e))throw Error(S(418));t=yt(n.nextSibling);var r=Ne;t&&Mo(e,t)?Sc(r,n):(e.flags=e.flags&-4097|2,V=!1,Ne=e)}}else{if(Ba(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,Ne=e}}}function Ro(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function _r(e){if(e!==Ne)return!1;if(!V)return Ro(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Da(e.type,e.memoizedProps)),t&&(t=Se)){if(Ba(e))throw Nc(),Error(S(418));for(;t;)Sc(e,t),t=yt(t.nextSibling)}if(Ro(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Ne?yt(e.stateNode.nextSibling):null;return!0}function Nc(){for(var e=Se;e;)e=yt(e.nextSibling)}function mn(){Se=Ne=null,V=!1}function Nl(e){Oe===null?Oe=[e]:Oe.push(e)}var Ep=st.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=a.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bo(e){var t=e._init;return t(e._payload)}function Cc(e){function t(u,d){if(e){var h=u.deletions;h===null?(u.deletions=[d],u.flags|=16):h.push(d)}}function n(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function a(u,d){return u=bt(u,d),u.index=0,u.sibling=null,u}function l(u,d,h){return u.index=h,e?(h=u.alternate,h!==null?(h=h.index,h<d?(u.flags|=2,d):h):(u.flags|=2,d)):(u.flags|=1048576,d)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function s(u,d,h,w){return d===null||d.tag!==6?(d=sa(h,u.mode,w),d.return=u,d):(d=a(d,h),d.return=u,d)}function c(u,d,h,w){var C=h.type;return C===Kt?m(u,d,h.props.children,w,h.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&Bo(C)===d.type)?(w=a(d,h.props),w.ref=Tn(u,d,h),w.return=u,w):(w=Yr(h.type,h.key,h.props,null,u.mode,w),w.ref=Tn(u,d,h),w.return=u,w)}function p(u,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ca(h,u.mode,w),d.return=u,d):(d=a(d,h.children||[]),d.return=u,d)}function m(u,d,h,w,C){return d===null||d.tag!==7?(d=Mt(h,u.mode,w,C),d.return=u,d):(d=a(d,h),d.return=u,d)}function x(u,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=sa(""+d,u.mode,h),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return h=Yr(d.type,d.key,d.props,null,u.mode,h),h.ref=Tn(u,null,d),h.return=u,h;case Qt:return d=ca(d,u.mode,h),d.return=u,d;case dt:var w=d._init;return x(u,w(d._payload),h)}if(Mn(d)||Cn(d))return d=Mt(d,u.mode,h,null),d.return=u,d;Lr(u,d)}return null}function f(u,d,h,w){var C=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(u,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yr:return h.key===C?c(u,d,h,w):null;case Qt:return h.key===C?p(u,d,h,w):null;case dt:return C=h._init,f(u,d,C(h._payload),w)}if(Mn(h)||Cn(h))return C!==null?null:m(u,d,h,w,null);Lr(u,h)}return null}function v(u,d,h,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(h)||null,s(d,u,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yr:return u=u.get(w.key===null?h:w.key)||null,c(d,u,w,C);case Qt:return u=u.get(w.key===null?h:w.key)||null,p(d,u,w,C);case dt:var z=w._init;return v(u,d,h,z(w._payload),C)}if(Mn(w)||Cn(w))return u=u.get(h)||null,m(d,u,w,C,null);Lr(d,w)}return null}function g(u,d,h,w){for(var C=null,z=null,y=d,b=d=0,M=null;y!==null&&b<h.length;b++){y.index>b?(M=y,y=null):M=y.sibling;var E=f(u,y,h[b],w);if(E===null){y===null&&(y=M);break}e&&y&&E.alternate===null&&t(u,y),d=l(E,d,b),z===null?C=E:z.sibling=E,z=E,y=M}if(b===h.length)return n(u,y),V&&Lt(u,b),C;if(y===null){for(;b<h.length;b++)y=x(u,h[b],w),y!==null&&(d=l(y,d,b),z===null?C=y:z.sibling=y,z=y);return V&&Lt(u,b),C}for(y=r(u,y);b<h.length;b++)M=v(y,u,b,h[b],w),M!==null&&(e&&M.alternate!==null&&y.delete(M.key===null?b:M.key),d=l(M,d,b),z===null?C=M:z.sibling=M,z=M);return e&&y.forEach(function(se){return t(u,se)}),V&&Lt(u,b),C}function j(u,d,h,w){var C=Cn(h);if(typeof C!="function")throw Error(S(150));if(h=C.call(h),h==null)throw Error(S(151));for(var z=C=null,y=d,b=d=0,M=null,E=h.next();y!==null&&!E.done;b++,E=h.next()){y.index>b?(M=y,y=null):M=y.sibling;var se=f(u,y,E.value,w);if(se===null){y===null&&(y=M);break}e&&y&&se.alternate===null&&t(u,y),d=l(se,d,b),z===null?C=se:z.sibling=se,z=se,y=M}if(E.done)return n(u,y),V&&Lt(u,b),C;if(y===null){for(;!E.done;b++,E=h.next())E=x(u,E.value,w),E!==null&&(d=l(E,d,b),z===null?C=E:z.sibling=E,z=E);return V&&Lt(u,b),C}for(y=r(u,y);!E.done;b++,E=h.next())E=v(y,u,b,E.value,w),E!==null&&(e&&E.alternate!==null&&y.delete(E.key===null?b:E.key),d=l(E,d,b),z===null?C=E:z.sibling=E,z=E);return e&&y.forEach(function(ee){return t(u,ee)}),V&&Lt(u,b),C}function k(u,d,h,w){if(typeof h=="object"&&h!==null&&h.type===Kt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yr:e:{for(var C=h.key,z=d;z!==null;){if(z.key===C){if(C=h.type,C===Kt){if(z.tag===7){n(u,z.sibling),d=a(z,h.props.children),d.return=u,u=d;break e}}else if(z.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dt&&Bo(C)===z.type){n(u,z.sibling),d=a(z,h.props),d.ref=Tn(u,z,h),d.return=u,u=d;break e}n(u,z);break}else t(u,z);z=z.sibling}h.type===Kt?(d=Mt(h.props.children,u.mode,w,h.key),d.return=u,u=d):(w=Yr(h.type,h.key,h.props,null,u.mode,w),w.ref=Tn(u,d,h),w.return=u,u=w)}return o(u);case Qt:e:{for(z=h.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(u,d.sibling),d=a(d,h.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else t(u,d);d=d.sibling}d=ca(h,u.mode,w),d.return=u,u=d}return o(u);case dt:return z=h._init,k(u,d,z(h._payload),w)}if(Mn(h))return g(u,d,h,w);if(Cn(h))return j(u,d,h,w);Lr(u,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(u,d.sibling),d=a(d,h),d.return=u,u=d):(n(u,d),d=sa(h,u.mode,w),d.return=u,u=d),o(u)):n(u,d)}return k}var gn=Cc(!0),zc=Cc(!1),ci=zt(null),di=null,tn=null,Cl=null;function zl(){Cl=tn=di=null}function El(e){var t=ci.current;H(ci),e._currentValue=t}function Ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){di=e,Cl=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Cl!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(di===null)throw Error(S(308));tn=e,di.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Pt=null;function _l(e){Pt===null?Pt=[e]:Pt.push(e)}function Ec(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,_l(t)):(n.next=a.next,a.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Ll(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,lt(e,n)}return a=r.interleaved,a===null?(t.next=t,_l(r)):(t.next=a.next,a.next=t),r.interleaved=t,lt(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}function Oo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var a=e.updateQueue;ut=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,p=c.next;c.next=null,o===null?l=p:o.next=p,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=p:s.next=p,m.lastBaseUpdate=c))}if(l!==null){var x=a.baseState;o=0,m=p=c=null,s=l;do{var f=s.lane,v=s.eventTime;if((r&f)===f){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,j=s;switch(f=t,v=n,j.tag){case 1:if(g=j.payload,typeof g=="function"){x=g.call(v,x,f);break e}x=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=j.payload,f=typeof g=="function"?g.call(v,x,f):g,f==null)break e;x=G({},x,f);break e;case 2:ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[s]:f.push(s))}else v={eventTime:v,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(p=m=v,c=x):m=m.next=v,o|=f;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;f=s,s=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(m===null&&(c=x),a.baseState=c,a.firstBaseUpdate=p,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=x}}function Io(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var gr={},Ye=zt(gr),ar=zt(gr),lr=zt(gr);function Dt(e){if(e===gr)throw Error(S(174));return e}function Tl(e,t){switch(W(lr,t),W(ar,e),W(Ye,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wa(t,e)}H(Ye),W(Ye,t)}function xn(){H(Ye),H(ar),H(lr)}function Lc(e){Dt(lr.current);var t=Dt(Ye.current),n=wa(t,e.type);t!==n&&(W(ar,e),W(Ye,n))}function Fl(e){ar.current===e&&(H(Ye),H(ar))}var K=zt(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function Pl(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var Ur=st.ReactCurrentDispatcher,ra=st.ReactCurrentBatchConfig,Ot=0,Y=null,te=null,re=null,fi=!1,Hn=!1,or=0,_p=0;function ce(){throw Error(S(321))}function Dl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Al(e,t,n,r,a,l){if(Ot=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?Pp:Dp,e=n(r,a),Hn){l=0;do{if(Hn=!1,or=0,25<=l)throw Error(S(301));l+=1,re=te=null,t.updateQueue=null,Ur.current=Ap,e=n(r,a)}while(Hn)}if(Ur.current=hi,t=te!==null&&te.next!==null,Ot=0,re=te=Y=null,fi=!1,t)throw Error(S(300));return e}function Ml(){var e=or!==0;return or=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function De(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function sr(e,t){return typeof t=="function"?t(e):t}function ia(e){var t=De(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var s=o=null,c=null,p=l;do{var m=p.lane;if((Ot&m)===m)c!==null&&(c=c.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var x={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};c===null?(s=c=x,o=r):c=c.next=x,Y.lanes|=m,It|=m}p=p.next}while(p!==null&&p!==l);c===null?o=r:c.next=s,We(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,Y.lanes|=l,It|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function aa(e){var t=De(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);We(l,t.memoizedState)||(ye=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Tc(){}function Fc(e,t){var n=Y,r=De(),a=t(),l=!We(r.memoizedState,a);if(l&&(r.memoizedState=a,ye=!0),r=r.queue,Rl(Ac.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,cr(9,Dc.bind(null,n,r,a,t),void 0,null),ie===null)throw Error(S(349));Ot&30||Pc(n,t,a)}return a}function Pc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dc(e,t,n,r){t.value=n,t.getSnapshot=r,Mc(t)&&Rc(e)}function Ac(e,t,n){return n(function(){Mc(t)&&Rc(e)})}function Mc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Rc(e){var t=lt(e,1);t!==null&&$e(t,e,1,-1)}function $o(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Fp.bind(null,Y,e),[t.memoizedState,e]}function cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bc(){return De().memoizedState}function Hr(e,t,n,r){var a=Ve();Y.flags|=e,a.memoizedState=cr(1|t,n,void 0,r===void 0?null:r)}function Ei(e,t,n,r){var a=De();r=r===void 0?null:r;var l=void 0;if(te!==null){var o=te.memoizedState;if(l=o.destroy,r!==null&&Dl(r,o.deps)){a.memoizedState=cr(t,n,l,r);return}}Y.flags|=e,a.memoizedState=cr(1|t,n,l,r)}function Wo(e,t){return Hr(8390656,8,e,t)}function Rl(e,t){return Ei(2048,8,e,t)}function Oc(e,t){return Ei(4,2,e,t)}function Ic(e,t){return Ei(4,4,e,t)}function $c(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wc(e,t,n){return n=n!=null?n.concat([e]):null,Ei(4,4,$c.bind(null,t,e),n)}function Bl(){}function Uc(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hc(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Dl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vc(e,t,n){return Ot&21?(We(n,t)||(n=Xs(),Y.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function Lp(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ra.transition;ra.transition={};try{e(!1),t()}finally{I=n,ra.transition=r}}function Qc(){return De().memoizedState}function Tp(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kc(e))Yc(t,n);else if(n=Ec(e,t,n,r),n!==null){var a=me();$e(n,e,r,a),Gc(n,t,r)}}function Fp(e,t,n){var r=kt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Yc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(a.hasEagerState=!0,a.eagerState=s,We(s,o)){var c=t.interleaved;c===null?(a.next=a,_l(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}n=Ec(e,t,a,r),n!==null&&(a=me(),$e(n,e,r,a),Gc(n,t,r))}}function Kc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Yc(e,t){Hn=fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}var hi={readContext:Pe,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Pp={readContext:Pe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Wo,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,$c.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Tp.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:$o,useDebugValue:Bl,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=$o(!1),t=e[0];return e=Lp.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,a=Ve();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ie===null)throw Error(S(349));Ot&30||Pc(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Wo(Ac.bind(null,r,l,e),[e]),r.flags|=2048,cr(9,Dc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ve(),t=ie.identifierPrefix;if(V){var n=tt,r=et;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_p++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dp={readContext:Pe,useCallback:Uc,useContext:Pe,useEffect:Rl,useImperativeHandle:Wc,useInsertionEffect:Oc,useLayoutEffect:Ic,useMemo:Hc,useReducer:ia,useRef:Bc,useState:function(){return ia(sr)},useDebugValue:Bl,useDeferredValue:function(e){var t=De();return Vc(t,te.memoizedState,e)},useTransition:function(){var e=ia(sr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:Fc,useId:Qc,unstable_isNewReconciler:!1},Ap={readContext:Pe,useCallback:Uc,useContext:Pe,useEffect:Rl,useImperativeHandle:Wc,useInsertionEffect:Oc,useLayoutEffect:Ic,useMemo:Hc,useReducer:aa,useRef:Bc,useState:function(){return aa(sr)},useDebugValue:Bl,useDeferredValue:function(e){var t=De();return te===null?t.memoizedState=e:Vc(t,te.memoizedState,e)},useTransition:function(){var e=aa(sr)[0],t=De().memoizedState;return[e,t]},useMutableSource:Tc,useSyncExternalStore:Fc,useId:Qc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $a(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _i={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),a=kt(e),l=nt(r,a);l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,a),t!==null&&($e(t,e,a,r),Wr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),a=kt(e),l=nt(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=wt(e,l,a),t!==null&&($e(t,e,a,r),Wr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=kt(e),a=nt(n,r);a.tag=2,t!=null&&(a.callback=t),t=wt(e,a,r),t!==null&&($e(t,e,r,n),Wr(t,e,r))}};function Uo(e,t,n,r,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!tr(n,r)||!tr(a,l):!0}function Xc(e,t,n){var r=!1,a=Nt,l=t.contextType;return typeof l=="object"&&l!==null?l=Pe(l):(a=je(t)?Rt:pe.current,r=t.contextTypes,l=(r=r!=null)?hn(e,a):Nt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_i,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ho(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_i.enqueueReplaceState(t,t.state,null)}function Wa(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ll(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Pe(l):(l=je(t)?Rt:pe.current,a.context=hn(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&($a(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&_i.enqueueReplaceState(a,a.state,null),ui(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=cu(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function la(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mp=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,qa=r),Ua(e,t)},n}function Jc(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ua(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ua(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Vo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Xp.bind(null,e,t,n),t.then(e,e))}function Qo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ko(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Rp=st.ReactCurrentOwner,ye=!1;function he(e,t,n,r){t.child=e===null?zc(t,null,n,r):gn(t,e.child,n,r)}function Yo(e,t,n,r,a){n=n.render;var l=t.ref;return dn(t,a),r=Al(e,t,n,r,l,a),n=Ml(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ot(e,t,a)):(V&&n&&bl(t),t.flags|=1,he(e,t,r,a),t.child)}function Go(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Ql(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,qc(e,t,l,r,a)):(e=Yr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(o,r)&&e.ref===t.ref)return ot(e,t,a)}return t.flags|=1,e=bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function qc(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(tr(l,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,ot(e,t,a)}return Ha(e,t,n,r,a)}function ed(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(rn,be),be|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(rn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,W(rn,be),be|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,W(rn,be),be|=r;return he(e,t,a,n),t.child}function td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ha(e,t,n,r,a){var l=je(n)?Rt:pe.current;return l=hn(t,l),dn(t,a),n=Al(e,t,n,r,l,a),r=Ml(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,ot(e,t,a)):(V&&r&&bl(t),t.flags|=1,he(e,t,n,a),t.child)}function Xo(e,t,n,r,a){if(je(n)){var l=!0;li(t)}else l=!1;if(dn(t,a),t.stateNode===null)Vr(e,t),Xc(t,n,r),Wa(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Pe(p):(p=je(n)?Rt:pe.current,p=hn(t,p));var m=n.getDerivedStateFromProps,x=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||c!==p)&&Ho(t,o,r,p),ut=!1;var f=t.memoizedState;o.state=f,ui(t,r,o,a),c=t.memoizedState,s!==r||f!==c||we.current||ut?(typeof m=="function"&&($a(t,n,m,r),c=t.memoizedState),(s=ut||Uo(t,n,s,r,f,c,p))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=p,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,_c(e,t),s=t.memoizedProps,p=t.type===t.elementType?s:Re(t.type,s),o.props=p,x=t.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Pe(c):(c=je(n)?Rt:pe.current,c=hn(t,c));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==x||f!==c)&&Ho(t,o,r,c),ut=!1,f=t.memoizedState,o.state=f,ui(t,r,o,a);var g=t.memoizedState;s!==x||f!==g||we.current||ut?(typeof v=="function"&&($a(t,n,v,r),g=t.memoizedState),(p=ut||Uo(t,n,p,r,f,g,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=c,r=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Va(e,t,n,r,l,a)}function Va(e,t,n,r,a,l){td(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&Ao(t,n,!1),ot(e,t,l);r=t.stateNode,Rp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=gn(t,e.child,null,l),t.child=gn(t,null,s,l)):he(e,t,s,l),t.memoizedState=r.state,a&&Ao(t,n,!0),t.child}function nd(e){var t=e.stateNode;t.pendingContext?Do(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Do(e,t.context,!1),Tl(e,t.containerInfo)}function Zo(e,t,n,r,a){return mn(),Nl(a),t.flags|=256,he(e,t,n,r),t.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,n){var r=t.pendingProps,a=K.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),W(K,a&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Fi(o,r,0,null),e=Mt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ka(n),t.memoizedState=Qa,e):Ol(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Bp(e,t,o,r,s,a,n);if(l){l=r.fallback,o=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=bt(a,c),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?l=bt(s,l):(l=Mt(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Ka(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Qa,r}return l=e.child,e=l.sibling,r=bt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ol(e,t){return t=Fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&Nl(r),gn(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bp(e,t,n,r,a,l,o){if(n)return t.flags&256?(t.flags&=-257,r=la(Error(S(422))),Tr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Fi({mode:"visible",children:r.children},a,0,null),l=Mt(l,a,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&gn(t,e.child,null,o),t.child.memoizedState=Ka(o),t.memoizedState=Qa,l);if(!(t.mode&1))return Tr(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=la(l,r,void 0),Tr(e,t,o,r)}if(s=(o&e.childLanes)!==0,ye||s){if(r=ie,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,lt(e,a),$e(r,e,a,-1))}return Vl(),r=la(Error(S(421))),Tr(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zp.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,Se=yt(a.nextSibling),Ne=t,V=!0,Oe=null,e!==null&&(_e[Le++]=et,_e[Le++]=tt,_e[Le++]=Bt,et=e.id,tt=e.overflow,Bt=t),t=Ol(t,r.children),t.flags|=4096,t)}function Jo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ia(e.return,t,n)}function oa(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function id(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(he(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jo(e,n,t);else if(e.tag===19)Jo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),oa(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&pi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}oa(t,!0,n,null,l);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Op(e,t,n){switch(t.tag){case 3:nd(t),mn();break;case 5:Lc(t);break;case 1:je(t.type)&&li(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;W(ci,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?rd(e,t,n):(W(K,K.current&1),e=ot(e,t,n),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return id(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,ed(e,t,n)}return ot(e,t,n)}var ad,Ya,ld,od;ad=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};ld=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Dt(Ye.current);var l=null;switch(n){case"input":a=ga(e,a),r=ga(e,r),l=[];break;case"select":a=G({},a,{value:void 0}),r=G({},r,{value:void 0}),l=[];break;case"textarea":a=ya(e,a),r=ya(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ii)}ja(n,r);var o;n=null;for(p in a)if(!r.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var s=a[p];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Yn.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var c=r[p];if(s=a!=null?a[p]:void 0,r.hasOwnProperty(p)&&c!==s&&(c!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(l||(l=[]),l.push(p,n)),n=c;else p==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(p,c)):p==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(p,""+c):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(p)?(c!=null&&p==="onScroll"&&U("scroll",e),l||s===c||(l=[])):(l=l||[]).push(p,c))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}};od=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ip(e,t,n){var r=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return je(t.type)&&ai(),de(t),null;case 3:return r=t.stateNode,xn(),H(we),H(pe),Pl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(nl(Oe),Oe=null))),Ya(e,t),de(t),null;case 5:Fl(t);var a=Dt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)ld(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Dt(Ye.current),_r(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Qe]=t,r[ir]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(a=0;a<Bn.length;a++)U(Bn[a],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":lo(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":so(r,l),U("invalid",r)}ja(n,l),a=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,s,e),a=["children",""+s]):Yn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":wr(r),oo(r,l,!0);break;case"textarea":wr(r),co(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ii)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=As(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Qe]=t,e[ir]=r,ad(e,t,!1,!1),t.stateNode=e;e:{switch(o=ka(n,r),n){case"dialog":U("cancel",e),U("close",e),a=r;break;case"iframe":case"object":case"embed":U("load",e),a=r;break;case"video":case"audio":for(a=0;a<Bn.length;a++)U(Bn[a],e);a=r;break;case"source":U("error",e),a=r;break;case"img":case"image":case"link":U("error",e),U("load",e),a=r;break;case"details":U("toggle",e),a=r;break;case"input":lo(e,r),a=ga(e,r),U("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=G({},r,{value:void 0}),U("invalid",e);break;case"textarea":so(e,r),a=ya(e,r),U("invalid",e);break;default:a=r}ja(n,a),s=a;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Bs(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ms(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Gn(e,c):typeof c=="number"&&Gn(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?c!=null&&l==="onScroll"&&U("scroll",e):c!=null&&cl(e,l,c,o))}switch(n){case"input":wr(e),oo(e,r,!1);break;case"textarea":wr(e),co(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)od(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(lr.current),Dt(Ye.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return de(t),null;case 13:if(H(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Se!==null&&t.mode&1&&!(t.flags&128))Nc(),mn(),t.flags|=98560,l=!1;else if(l=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Qe]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),l=!1}else Oe!==null&&(nl(Oe),Oe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ne===0&&(ne=3):Vl())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return xn(),Ya(e,t),e===null&&nr(t.stateNode.containerInfo),de(t),null;case 10:return El(t.type._context),de(t),null;case 17:return je(t.type)&&ai(),de(t),null;case 19:if(H(K),l=t.memoizedState,l===null)return de(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Fn(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=pi(e),o!==null){for(t.flags|=128,Fn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(K,K.current&1|2),t.child}e=e.sibling}l.tail!==null&&Z()>yn&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304)}else{if(!r)if(e=pi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!V)return de(t),null}else 2*Z()-l.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Z(),t.sibling=null,n=K.current,W(K,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function $p(e,t){switch(Sl(t),t.tag){case 1:return je(t.type)&&ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),H(we),H(pe),Pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fl(t),null;case 13:if(H(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(K),null;case 4:return xn(),null;case 10:return El(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var Fr=!1,ue=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,L=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ga(e,t,n){try{n()}catch(r){X(e,t,r)}}var qo=!1;function Up(e,t){if(Fa=ti,e=pc(),kl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,c=-1,p=0,m=0,x=e,f=null;t:for(;;){for(var v;x!==n||a!==0&&x.nodeType!==3||(s=o+a),x!==l||r!==0&&x.nodeType!==3||(c=o+r),x.nodeType===3&&(o+=x.nodeValue.length),(v=x.firstChild)!==null;)f=x,x=v;for(;;){if(x===e)break t;if(f===n&&++p===a&&(s=o),f===l&&++m===r&&(c=o),(v=x.nextSibling)!==null)break;x=f,f=x.parentNode}x=v}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:e,selectionRange:n},ti=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var j=g.memoizedProps,k=g.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?j:Re(t.type,j),k);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=qo,qo=!1,g}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Ga(t,n,l)}a=a.next}while(a!==r)}}function Li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sd(e){var t=e.alternate;t!==null&&(e.alternate=null,sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[ir],delete t[Ma],delete t[Np],delete t[Cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cd(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ii));else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}var ae=null,Be=!1;function ct(e,t,n){for(n=n.child;n!==null;)dd(e,t,n),n=n.sibling}function dd(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:ue||nn(n,t);case 6:var r=ae,a=Be;ae=null,ct(e,t,n),ae=r,Be=a,ae!==null&&(Be?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Be?(e=ae,n=n.stateNode,e.nodeType===8?ea(e.parentNode,n):e.nodeType===1&&ea(e,n),qn(e)):ea(ae,n.stateNode));break;case 4:r=ae,a=Be,ae=n.stateNode.containerInfo,Be=!0,ct(e,t,n),ae=r,Be=a;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Ga(n,t,o),a=a.next}while(a!==r)}ct(e,t,n);break;case 1:if(!ue&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}ct(e,t,n);break;case 21:ct(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,ct(e,t,n),ue=r):ct(e,t,n);break;default:ct(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wp),t.forEach(function(r){var a=Jp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Be=!1;break e;case 3:ae=s.stateNode.containerInfo,Be=!0;break e;case 4:ae=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(ae===null)throw Error(S(160));dd(l,o,a),ae=null,Be=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(p){X(a,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ud(t,e),t=t.sibling}function ud(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),He(e),r&4){try{Vn(3,e,e.return),Li(3,e)}catch(j){X(e,e.return,j)}try{Vn(5,e,e.return)}catch(j){X(e,e.return,j)}}break;case 1:Me(t,e),He(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Me(t,e),He(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var a=e.stateNode;try{Gn(a,"")}catch(j){X(e,e.return,j)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ps(a,l),ka(s,o);var p=ka(s,l);for(o=0;o<c.length;o+=2){var m=c[o],x=c[o+1];m==="style"?Bs(a,x):m==="dangerouslySetInnerHTML"?Ms(a,x):m==="children"?Gn(a,x):cl(a,m,x,p)}switch(s){case"input":xa(a,l);break;case"textarea":Ds(a,l);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?ln(a,!!l.multiple,v,!1):f!==!!l.multiple&&(l.defaultValue!=null?ln(a,!!l.multiple,l.defaultValue,!0):ln(a,!!l.multiple,l.multiple?[]:"",!1))}a[ir]=l}catch(j){X(e,e.return,j)}}break;case 6:if(Me(t,e),He(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(j){X(e,e.return,j)}}break;case 3:if(Me(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(j){X(e,e.return,j)}break;case 4:Me(t,e),He(e);break;case 13:Me(t,e),He(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Wl=Z())),r&4&&ts(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(p=ue)||m,Me(t,e),ue=p):Me(t,e),He(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(x=L=m;L!==null;){switch(f=L,v=f.child,f.tag){case 0:case 11:case 14:case 15:Vn(4,f,f.return);break;case 1:nn(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(j){X(r,n,j)}}break;case 5:nn(f,f.return);break;case 22:if(f.memoizedState!==null){rs(x);continue}}v!==null?(v.return=f,L=v):rs(x)}m=m.sibling}e:for(m=null,x=e;;){if(x.tag===5){if(m===null){m=x;try{a=x.stateNode,p?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=x.stateNode,c=x.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Rs("display",o))}catch(j){X(e,e.return,j)}}}else if(x.tag===6){if(m===null)try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch(j){X(e,e.return,j)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;m===x&&(m=null),x=x.return}m===x&&(m=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Me(t,e),He(e),r&4&&ts(e);break;case 21:break;default:Me(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Gn(a,""),r.flags&=-33);var l=es(e);Ja(e,l,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=es(e);Za(e,s,o);break;default:throw Error(S(161))}}catch(c){X(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hp(e,t,n){L=e,pd(e)}function pd(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var a=L,l=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Fr;if(!o){var s=a.alternate,c=s!==null&&s.memoizedState!==null||ue;s=Fr;var p=ue;if(Fr=o,(ue=c)&&!p)for(L=a;L!==null;)o=L,c=o.child,o.tag===22&&o.memoizedState!==null?is(a):c!==null?(c.return=o,L=c):is(a);for(;l!==null;)L=l,pd(l),l=l.sibling;L=a,Fr=s,ue=p}ns(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,L=l):ns(e)}}function ns(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||Li(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Io(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Io(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var x=m.dehydrated;x!==null&&qn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ue||t.flags&512&&Xa(t)}catch(f){X(t,t.return,f)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function rs(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function is(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Li(4,t)}catch(c){X(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){X(t,a,c)}}var l=t.return;try{Xa(t)}catch(c){X(t,l,c)}break;case 5:var o=t.return;try{Xa(t)}catch(c){X(t,o,c)}}}catch(c){X(t,t.return,c)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var Vp=Math.ceil,mi=st.ReactCurrentDispatcher,Il=st.ReactCurrentOwner,Fe=st.ReactCurrentBatchConfig,O=0,ie=null,q=null,le=0,be=0,rn=zt(0),ne=0,dr=null,It=0,Ti=0,$l=0,Qn=null,ve=null,Wl=0,yn=1/0,Je=null,gi=!1,qa=null,jt=null,Pr=!1,mt=null,xi=0,Kn=0,el=null,Qr=-1,Kr=0;function me(){return O&6?Z():Qr!==-1?Qr:Qr=Z()}function kt(e){return e.mode&1?O&2&&le!==0?le&-le:Ep.transition!==null?(Kr===0&&(Kr=Xs()),Kr):(e=I,e!==0||(e=window.event,e=e===void 0?16:rc(e.type)),e):1}function $e(e,t,n,r){if(50<Kn)throw Kn=0,el=null,Error(S(185));fr(e,n,r),(!(O&2)||e!==ie)&&(e===ie&&(!(O&2)&&(Ti|=n),ne===4&&ft(e,le)),ke(e,r),n===1&&O===0&&!(t.mode&1)&&(yn=Z()+500,zi&&Et()))}function ke(e,t){var n=e.callbackNode;Eu(e,t);var r=ei(e,e===ie?le:0);if(r===0)n!==null&&fo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fo(n),t===1)e.tag===0?zp(as.bind(null,e)):kc(as.bind(null,e)),bp(function(){!(O&6)&&Et()}),n=null;else{switch(Zs(r)){case 1:n=hl;break;case 4:n=Ys;break;case 16:n=qr;break;case 536870912:n=Gs;break;default:n=qr}n=wd(n,fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fd(e,t){if(Qr=-1,Kr=0,O&6)throw Error(S(327));var n=e.callbackNode;if(un()&&e.callbackNode!==n)return null;var r=ei(e,e===ie?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vi(e,r);else{t=r;var a=O;O|=2;var l=md();(ie!==e||le!==t)&&(Je=null,yn=Z()+500,At(e,t));do try{Yp();break}catch(s){hd(e,s)}while(!0);zl(),mi.current=l,O=a,q!==null?t=0:(ie=null,le=0,t=ne)}if(t!==0){if(t===2&&(a=za(e),a!==0&&(r=a,t=tl(e,a))),t===1)throw n=dr,At(e,0),ft(e,r),ke(e,Z()),n;if(t===6)ft(e,r);else{if(a=e.current.alternate,!(r&30)&&!Qp(a)&&(t=vi(e,r),t===2&&(l=za(e),l!==0&&(r=l,t=tl(e,l))),t===1))throw n=dr,At(e,0),ft(e,r),ke(e,Z()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Tt(e,ve,Je);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=Wl+500-Z(),10<t)){if(ei(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Aa(Tt.bind(null,e,ve,Je),t);break}Tt(e,ve,Je);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-Ie(r);l=1<<o,o=t[o],o>a&&(a=o),r&=~l}if(r=a,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=Aa(Tt.bind(null,e,ve,Je),r);break}Tt(e,ve,Je);break;case 5:Tt(e,ve,Je);break;default:throw Error(S(329))}}}return ke(e,Z()),e.callbackNode===n?fd.bind(null,e):null}function tl(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=vi(e,t),e!==2&&(t=ve,ve=n,t!==null&&nl(t)),e}function nl(e){ve===null?ve=e:ve.push.apply(ve,e)}function Qp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!We(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~$l,t&=~Ti,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function as(e){if(O&6)throw Error(S(327));un();var t=ei(e,0);if(!(t&1))return ke(e,Z()),null;var n=vi(e,t);if(e.tag!==0&&n===2){var r=za(e);r!==0&&(t=r,n=tl(e,r))}if(n===1)throw n=dr,At(e,0),ft(e,t),ke(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,ve,Je),ke(e,Z()),null}function Ul(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(yn=Z()+500,zi&&Et())}}function $t(e){mt!==null&&mt.tag===0&&!(O&6)&&un();var t=O;O|=1;var n=Fe.transition,r=I;try{if(Fe.transition=null,I=1,e)return e()}finally{I=r,Fe.transition=n,O=t,!(O&6)&&Et()}}function Hl(){be=rn.current,H(rn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:xn(),H(we),H(pe),Pl();break;case 5:Fl(r);break;case 4:xn();break;case 13:H(K);break;case 19:H(K);break;case 10:El(r.type._context);break;case 22:case 23:Hl()}n=n.return}if(ie=e,q=e=bt(e.current,null),le=be=t,ne=0,dr=null,$l=Ti=It=0,ve=Qn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=a,r.next=o}n.pending=r}Pt=null}return e}function hd(e,t){do{var n=q;try{if(zl(),Ur.current=hi,fi){for(var r=Y.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}fi=!1}if(Ot=0,re=te=Y=null,Hn=!1,or=0,Il.current=null,n===null||n.return===null){ne=1,dr=t,q=null;break}e:{var l=e,o=n.return,s=n,c=t;if(t=le,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var p=c,m=s,x=m.tag;if(!(m.mode&1)&&(x===0||x===11||x===15)){var f=m.alternate;f?(m.updateQueue=f.updateQueue,m.memoizedState=f.memoizedState,m.lanes=f.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Qo(o);if(v!==null){v.flags&=-257,Ko(v,o,s,l,t),v.mode&1&&Vo(l,p,t),t=v,c=p;var g=t.updateQueue;if(g===null){var j=new Set;j.add(c),t.updateQueue=j}else g.add(c);break e}else{if(!(t&1)){Vo(l,p,t),Vl();break e}c=Error(S(426))}}else if(V&&s.mode&1){var k=Qo(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ko(k,o,s,l,t),Nl(vn(c,s));break e}}l=c=vn(c,s),ne!==4&&(ne=2),Qn===null?Qn=[l]:Qn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var u=Zc(l,c,t);Oo(l,u);break e;case 1:s=c;var d=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(jt===null||!jt.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Jc(l,s,t);Oo(l,w);break e}}l=l.return}while(l!==null)}xd(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function md(){var e=mi.current;return mi.current=hi,e===null?hi:e}function Vl(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(It&268435455)&&!(Ti&268435455)||ft(ie,le)}function vi(e,t){var n=O;O|=2;var r=md();(ie!==e||le!==t)&&(Je=null,At(e,t));do try{Kp();break}catch(a){hd(e,a)}while(!0);if(zl(),O=n,mi.current=r,q!==null)throw Error(S(261));return ie=null,le=0,ne}function Kp(){for(;q!==null;)gd(q)}function Yp(){for(;q!==null&&!yu();)gd(q)}function gd(e){var t=yd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?xd(e):q=t,Il.current=null}function xd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$p(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,q=null;return}}else if(n=Ip(n,t,be),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ne===0&&(ne=5)}function Tt(e,t,n){var r=I,a=Fe.transition;try{Fe.transition=null,I=1,Gp(e,t,n,r)}finally{Fe.transition=a,I=r}return null}function Gp(e,t,n,r){do un();while(mt!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(_u(e,l),e===ie&&(q=ie=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,wd(qr,function(){return un(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var o=I;I=1;var s=O;O|=4,Il.current=null,Up(e,n),ud(n,e),mp(Pa),ti=!!Fa,Pa=Fa=null,e.current=n,Hp(n),wu(),O=s,I=o,Fe.transition=l}else e.current=n;if(Pr&&(Pr=!1,mt=e,xi=a),l=e.pendingLanes,l===0&&(jt=null),bu(n.stateNode),ke(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(gi)throw gi=!1,e=qa,qa=null,e;return xi&1&&e.tag!==0&&un(),l=e.pendingLanes,l&1?e===el?Kn++:(Kn=0,el=e):Kn=0,Et(),null}function un(){if(mt!==null){var e=Zs(xi),t=Fe.transition,n=I;try{if(Fe.transition=null,I=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,xi=0,O&6)throw Error(S(331));var a=O;for(O|=4,L=e.current;L!==null;){var l=L,o=l.child;if(L.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var p=s[c];for(L=p;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:Vn(8,m,l)}var x=m.child;if(x!==null)x.return=m,L=x;else for(;L!==null;){m=L;var f=m.sibling,v=m.return;if(sd(m),m===p){L=null;break}if(f!==null){f.return=v,L=f;break}L=v}}}var g=l.alternate;if(g!==null){var j=g.child;if(j!==null){g.child=null;do{var k=j.sibling;j.sibling=null,j=k}while(j!==null)}}L=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,L=o;else e:for(;L!==null;){if(l=L,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Vn(9,l,l.return)}var u=l.sibling;if(u!==null){u.return=l.return,L=u;break e}L=l.return}}var d=e.current;for(L=d;L!==null;){o=L;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,L=h;else e:for(o=d;L!==null;){if(s=L,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Li(9,s)}}catch(C){X(s,s.return,C)}if(s===o){L=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,L=w;break e}L=s.return}}if(O=a,Et(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{I=n,Fe.transition=t}}return!1}function ls(e,t,n){t=vn(n,t),t=Zc(e,t,1),e=wt(e,t,1),t=me(),e!==null&&(fr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)ls(e,e,n);else for(;t!==null;){if(t.tag===3){ls(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=vn(n,e),e=Jc(t,e,1),t=wt(t,e,1),e=me(),t!==null&&(fr(t,1,e),ke(t,e));break}}t=t.return}}function Xp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(le&n)===n&&(ne===4||ne===3&&(le&130023424)===le&&500>Z()-Wl?At(e,0):$l|=n),ke(e,t)}function vd(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=me();e=lt(e,t),e!==null&&(fr(e,t,n),ke(e,n))}function Zp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vd(e,n)}function Jp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),vd(e,n)}var yd;yd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Op(e,t,n);ye=!!(e.flags&131072)}else ye=!1,V&&t.flags&1048576&&bc(t,si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var a=hn(t,pe.current);dn(t,n),a=Al(null,t,r,e,a,n);var l=Ml();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(l=!0,li(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ll(t),a.updater=_i,t.stateNode=a,a._reactInternals=t,Wa(t,r,e,n),t=Va(null,t,r,!0,l,n)):(t.tag=0,V&&l&&bl(t),he(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=ef(r),e=Re(r,e),a){case 0:t=Ha(null,t,r,e,n);break e;case 1:t=Xo(null,t,r,e,n);break e;case 11:t=Yo(null,t,r,e,n);break e;case 14:t=Go(null,t,r,Re(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Re(r,a),Ha(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Re(r,a),Xo(e,t,r,a,n);case 3:e:{if(nd(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,a=l.element,_c(e,t),ui(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=vn(Error(S(423)),t),t=Zo(e,t,r,n,a);break e}else if(r!==a){a=vn(Error(S(424)),t),t=Zo(e,t,r,n,a);break e}else for(Se=yt(t.stateNode.containerInfo.firstChild),Ne=t,V=!0,Oe=null,n=zc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===a){t=ot(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Oa(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,o=a.children,Da(r,a)?o=null:l!==null&&Da(r,l)&&(t.flags|=32),td(e,t),he(e,t,o,n),t.child;case 6:return e===null&&Oa(t),null;case 13:return rd(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Re(r,a),Yo(e,t,r,a,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,o=a.value,W(ci,r._currentValue),r._currentValue=o,l!==null)if(We(l.value,o)){if(l.children===a.children&&!we.current){t=ot(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=nt(-1,n&-n),c.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?c.next=c:(c.next=m.next,m.next=c),p.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ia(l.return,n,t),s.lanes|=n;break}c=c.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ia(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}he(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,dn(t,n),a=Pe(a),r=r(a),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,a=Re(r,t.pendingProps),a=Re(r.type,a),Go(e,t,r,a,n);case 15:return qc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Re(r,a),Vr(e,t),t.tag=1,je(r)?(e=!0,li(t)):e=!1,dn(t,n),Xc(t,r,a),Wa(t,r,a,n),Va(null,t,r,!0,e,n);case 19:return id(e,t,n);case 22:return ed(e,t,n)}throw Error(S(156,t.tag))};function wd(e,t){return Ks(e,t)}function qp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new qp(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ef(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ul)return 11;if(e===pl)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,a,l){var o=2;if(r=e,typeof e=="function")Ql(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kt:return Mt(n.children,a,l,t);case dl:o=8,a|=8;break;case pa:return e=Te(12,n,t,a|2),e.elementType=pa,e.lanes=l,e;case fa:return e=Te(13,n,t,a),e.elementType=fa,e.lanes=l,e;case ha:return e=Te(19,n,t,a),e.elementType=ha,e.lanes=l,e;case Ls:return Fi(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Es:o=10;break e;case _s:o=9;break e;case ul:o=11;break e;case pl:o=14;break e;case dt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Te(o,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Mt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function Fi(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Ls,e.lanes=n,e.stateNode={isHidden:!1},e}function sa(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tf(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ui(0),this.expirationTimes=Ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Kl(e,t,n,r,a,l,o,s,c){return e=new tf(e,t,n,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Te(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ll(l),e}function nf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jd(e){if(!e)return Nt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(je(n))return jc(e,n,t)}return t}function kd(e,t,n,r,a,l,o,s,c){return e=Kl(n,r,!0,e,a,l,o,s,c),e.context=jd(null),n=e.current,r=me(),a=kt(n),l=nt(r,a),l.callback=t??null,wt(n,l,a),e.current.lanes=a,fr(e,a,r),ke(e,r),e}function Pi(e,t,n,r){var a=t.current,l=me(),o=kt(a);return n=jd(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(a,t,o),e!==null&&($e(e,a,o,l),Wr(e,a,o)),o}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function os(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yl(e,t){os(e,t),(e=e.alternate)&&os(e,t)}function rf(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gl(e){this._internalRoot=e}Di.prototype.render=Gl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Pi(e,t,null,null)};Di.prototype.unmount=Gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Pi(null,e,null,null)}),t[at]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=ec();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pt.length&&t!==0&&t<pt[n].priority;n++);pt.splice(n,0,e),n===0&&nc(e)}};function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function af(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var p=yi(o);l.call(p)}}var o=kd(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=o,e[at]=o.current,nr(e.nodeType===8?e.parentNode:e),$t(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var p=yi(c);s.call(p)}}var c=Kl(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=c,e[at]=c.current,nr(e.nodeType===8?e.parentNode:e),$t(function(){Pi(t,c,n,r)}),c}function Mi(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if(typeof a=="function"){var s=a;a=function(){var c=yi(o);s.call(c)}}Pi(t,o,e,a)}else o=af(n,t,e,a,r);return yi(o)}Js=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rn(t.pendingLanes);n!==0&&(ml(t,n|1),ke(t,Z()),!(O&6)&&(yn=Z()+500,Et()))}break;case 13:$t(function(){var r=lt(e,1);if(r!==null){var a=me();$e(r,e,1,a)}}),Yl(e,1)}};gl=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=me();$e(t,e,134217728,n)}Yl(e,134217728)}};qs=function(e){if(e.tag===13){var t=kt(e),n=lt(e,t);if(n!==null){var r=me();$e(n,e,t,r)}Yl(e,t)}};ec=function(){return I};tc=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Sa=function(e,t,n){switch(t){case"input":if(xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ci(r);if(!a)throw Error(S(90));Fs(r),xa(r,a)}}}break;case"textarea":Ds(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};$s=Ul;Ws=$t;var lf={usingClientEntryPoint:!1,Events:[mr,Zt,Ci,Os,Is,Ul]},Pn={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},of={bundleType:Pn.bundleType,version:Pn.version,rendererPackageName:Pn.rendererPackageName,rendererConfig:Pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vs(e),e===null?null:e.stateNode},findFiberByHostInstance:Pn.findFiberByHostInstance||rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{ki=Dr.inject(of),Ke=Dr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xl(t))throw Error(S(200));return nf(e,t,null,n)};ze.createRoot=function(e,t){if(!Xl(e))throw Error(S(299));var n=!1,r="",a=bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Kl(e,1,!1,null,null,n,!1,r,a),e[at]=t.current,nr(e.nodeType===8?e.parentNode:e),new Gl(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Vs(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return $t(e)};ze.hydrate=function(e,t,n){if(!Ai(t))throw Error(S(200));return Mi(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Xl(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",o=bd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=kd(t,null,e,1,n??null,a,!1,l,o),e[at]=t.current,nr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Di(t)};ze.render=function(e,t,n){if(!Ai(t))throw Error(S(200));return Mi(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(S(40));return e._reactRootContainer?($t(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};ze.unstable_batchedUpdates=Ul;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ai(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Mi(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Sd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sd)}catch(e){console.error(e)}}Sd(),Ss.exports=ze;var sf=Ss.exports,Nd,cs=sf;Nd=cs.createRoot,cs.hydrateRoot;const cf="/api";function Cd(){return localStorage.getItem("armvet_token")}function df(e){localStorage.setItem("armvet_token",e)}function zd(){localStorage.removeItem("armvet_token")}async function B(e,t,n){const r={"Content-Type":"application/json"},a=Cd();a&&(r.Authorization=`Bearer ${a}`);const l=await fetch(cf+t,{method:e,headers:r,body:n!==void 0?JSON.stringify(n):void 0});if(l.status===401){zd(),window.location.reload();return}if(!l.ok){const o=await l.text();throw new Error(o||`HTTP ${l.status}`)}return l.json()}const A={login:async(e,t)=>{const n=await B("POST","/auth/login",{username:e,password:t});return n!=null&&n.token&&df(n.token),n},logout:zd,getBookings:()=>B("GET","/bookings"),updateBookingStatus:(e,t)=>B("PUT",`/bookings/${e}/status`,{status:t}),getContacts:()=>B("GET","/contacts"),updateContactStatus:(e,t)=>B("PUT",`/contacts/${e}/status`,{status:t}),getAvailability:()=>B("GET","/availability"),createSlot:e=>B("POST","/availability",e),createSlotRange:e=>B("POST","/availability/batch",e),deleteSlot:e=>B("DELETE",`/availability/${e}`),changePassword:(e,t)=>B("POST","/auth/change-password",{currentPassword:e,newPassword:t}),completeTutorial:()=>B("PUT","/auth/tutorial-complete"),resetTutorial:()=>B("DELETE","/auth/tutorial-complete"),deleteBooking:e=>B("DELETE",`/bookings/${e}`),deleteContact:e=>B("DELETE",`/contacts/${e}`),hasToken:()=>!!Cd(),getAdminConfig:()=>B("GET","/admin/config"),saveConfig:e=>B("PUT","/admin/config",e),getDocs:()=>B("GET","/admin/docs"),resetSetup:()=>B("DELETE","/admin/config/setup_complete"),getDeals:()=>B("GET","/deals"),createDeal:e=>B("POST","/deals",e),updateDeal:(e,t)=>B("PUT",`/deals/${e}`,t),deleteDeal:e=>B("DELETE",`/deals/${e}`),getActivity:(e,t)=>B("GET",`/activity?entity_type=${e}&entity_id=${t}`),addActivity:e=>B("POST","/activity",e),deleteActivity:e=>B("DELETE",`/activity/${e}`),getTasks:()=>B("GET","/tasks"),createTask:e=>B("POST","/tasks",e),updateTask:(e,t)=>B("PUT",`/tasks/${e}`,t),deleteTask:e=>B("DELETE",`/tasks/${e}`),getTags:()=>B("GET","/tags"),createTag:e=>B("POST","/tags",e),deleteTag:e=>B("DELETE",`/tags/${e}`),getEntityTags:(e,t)=>B("GET",`/entity-tags?entity_type=${e}&entity_id=${t}`),addEntityTag:e=>B("POST","/entity-tags",e),removeEntityTag:e=>B("POST","/entity-tags/remove",e),getAnalytics:()=>B("GET","/analytics")},Ed=["Leadership Development","Executive Coaching","Small Group Workshops","Individual Development","Organizational Culture Training","Federal HR Consulting","Workforce Planning","HR Modernization","Speaking Engagements"],Zl=["Military","Federal","Corporate"],T={dashboard:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),i.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"})]}),calendar:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),i.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),i.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),bookings:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),inbox:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M22 12h-6l-2 3H10l-2-3H2"}),i.jsx("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"})]}),check:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"20 6 9 17 4 12"})}),x:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),clock:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("polyline",{points:"12 6 12 12 16 14"})]}),chevronRight:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"9 18 15 12 9 6"})}),back:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"15 18 9 12 15 6"})}),logout:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),i.jsx("polyline",{points:"16 17 21 12 16 7"}),i.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),menu:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),star:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",children:i.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),phone:i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),mail:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),i.jsx("polyline",{points:"22,6 12,13 2,6"})]}),calendarPlus:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),i.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),i.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),i.jsx("line",{x1:"12",y1:"14",x2:"12",y2:"20"}),i.jsx("line",{x1:"9",y1:"17",x2:"15",y2:"17"})]}),filter:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})}),search:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"11",cy:"11",r:"8"}),i.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),trash:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"3 6 5 6 21 6"}),i.jsx("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),i.jsx("path",{d:"M10 11v6M14 11v6"}),i.jsx("path",{d:"M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"})]}),archive:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"21 8 21 21 3 21 3 8"}),i.jsx("rect",{x:"1",y:"3",width:"22",height:"5"}),i.jsx("line",{x1:"10",y1:"12",x2:"14",y2:"12"})]}),helpCircle:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),i.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),mobile:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),i.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]}),clipboardList:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),i.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),i.jsx("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),i.jsx("line",{x1:"9",y1:"16",x2:"15",y2:"16"})]}),home:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),i.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),brush:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L3 14.67V21h6.33L20.84 9.39a5.5 5.5 0 0 0 0-7.78z"})}),list:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),i.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),i.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),i.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),tag:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),i.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]}),globe:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),i.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),code:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"16 18 22 12 16 6"}),i.jsx("polyline",{points:"8 6 2 12 8 18"})]}),download:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),i.jsx("polyline",{points:"7 10 12 15 17 10"}),i.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),copy:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2"}),i.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),plus:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),settings:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"3"}),i.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),sun:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"5"}),i.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),i.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),i.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),i.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),i.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),i.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),i.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),i.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),pipeline:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"3",width:"5",height:"18",rx:"1"}),i.jsx("rect",{x:"9.5",y:"3",width:"5",height:"13",rx:"1"}),i.jsx("rect",{x:"17",y:"3",width:"5",height:"8",rx:"1"})]}),deals:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),i.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"})]}),tasks:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"9 11 12 14 22 4"}),i.jsx("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"})]}),analytics:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),i.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),i.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"}),i.jsx("line",{x1:"2",y1:"20",x2:"22",y2:"20"})]}),bell:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),i.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),activity:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),fields:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),i.jsx("polyline",{points:"14 2 14 8 20 8"}),i.jsx("line",{x1:"9",y1:"13",x2:"15",y2:"13"}),i.jsx("line",{x1:"9",y1:"17",x2:"12",y2:"17"})]}),scoring:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),convertDeal:i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"23"}),i.jsx("path",{d:"M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"})]}),checkCircle:i.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),i.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),circle:i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:i.jsx("circle",{cx:"12",cy:"12",r:"10"})})},ds=`
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
`;typeof localStorage<"u"&&document.documentElement.setAttribute("data-theme",localStorage.getItem("armvet_theme")||"auto");function uf(){const[e,t]=N.useState(()=>localStorage.getItem("armvet_theme")||"auto");return[e,r=>{localStorage.setItem("armvet_theme",r),document.documentElement.setAttribute("data-theme",r),t(r)}]}function wi(e){return{pending:"var(--orange)",approved:"var(--green)",declined:"var(--red)",new:"var(--blue)",replied:"var(--green)",archived:"var(--text-muted)","on-calendar":"var(--purple)"}[e]||"var(--text-muted)"}function rt(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function Gr(e){return new Date(e+"T00:00:00").toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function an(e){if(!e)return"";const[t,n]=e.split(":").map(Number),r=t>=12?"PM":"AM";return`${t%12||12}:${String(n).padStart(2,"0")} ${r}`}function ur(e){return"$"+(parseFloat(e)||0).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0})}function pf(e){const t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return"just now";if(n<60)return`${n}m ago`;const r=Math.floor(n/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function ff(e,t){if(!t||!t.length)return 0;let n=0;for(const r of t){const a=String(e[r.field]||"").toLowerCase(),l=String(r.value||"").toLowerCase();r.operator==="equals"&&a===l&&(n+=Number(r.points)||0),r.operator==="contains"&&a.includes(l)&&(n+=Number(r.points)||0)}return Math.max(0,Math.min(100,n))}function _d({entity:e,appConfig:t}){var s,c;const n=((s=t==null?void 0:t.lead_scoring_rules)==null?void 0:s.rules)||[],r=((c=t==null?void 0:t.lead_scoring_rules)==null?void 0:c.thresholds)||{hot:70,warm:40},a=ff(e,n);if(!n.length)return null;const l=a>=r.hot?"hot":a>=r.warm?"warm":"cold",o=l==="hot"?"🔥 Hot":l==="warm"?"◆ Warm":"· Cold";return i.jsxs("span",{className:`lead-score-badge lead-score-${l}`,children:[o," ",a,"%"]})}function us({data:e,valueKey:t,labelKey:n,color:r="var(--accent)"}){if(!e||!e.length)return i.jsx("div",{className:"chart-empty",children:"No data yet"});const a=Math.max(...e.map(c=>c[t]),1),l=100,o=300,s=Math.max(8,o/e.length-6);return i.jsx("svg",{viewBox:`0 0 ${o} ${l+22}`,style:{width:"100%"},children:e.map((c,p)=>{const m=Math.max(2,c[t]/a*l),x=o/e.length*p+(o/e.length-s)/2;return i.jsxs("g",{children:[i.jsx("rect",{x,y:l-m,width:s,height:m,fill:r,rx:3,opacity:.85}),i.jsx("text",{x:x+s/2,y:l+14,textAnchor:"middle",fontSize:9,fill:"var(--text-muted)",children:c[n]}),c[t]>0&&i.jsx("text",{x:x+s/2,y:l-m-3,textAnchor:"middle",fontSize:9,fill:"var(--text-secondary)",children:c[t]})]},p)})})}function ps({data:e,valueKey:t,labelKey:n,color:r="var(--accent)"}){if(!e||!e.length)return i.jsx("div",{className:"chart-empty",children:"No data yet"});const a=Math.max(...e.map(c=>c[t]),1),l=28,o=280,s=100;return i.jsx("svg",{viewBox:`0 0 ${o} ${e.length*l}`,style:{width:"100%"},children:e.map((c,p)=>{const m=Math.max(2,c[t]/a*(o-s-30)),x=p*l;return i.jsxs("g",{children:[i.jsx("text",{x:s-4,y:x+l/2+4,textAnchor:"end",fontSize:10,fill:"var(--text-secondary)",children:String(c[n]).substring(0,16)}),i.jsx("rect",{x:s,y:x+6,width:m,height:l-12,fill:r,rx:3,opacity:.85}),i.jsx("text",{x:s+m+4,y:x+l/2+4,fontSize:10,fill:"var(--text-muted)",children:c[t]})]},p)})})}function hf({data:e,colors:t}){if(!e||!e.length)return i.jsx("div",{className:"chart-empty",children:"No data yet"});const n=e.reduce((p,m)=>p+m.value,0);if(n===0)return i.jsx("div",{className:"chart-empty",children:"No data yet"});const r=50,a=70,l=60,o=22,s=2*Math.PI*r;let c=0;return i.jsxs("svg",{viewBox:"0 0 200 120",style:{width:"100%"},children:[e.map((p,m)=>{const f=p.value/n*s,v=i.jsx("circle",{cx:a,cy:l,r,fill:"none",stroke:t[m%t.length],strokeWidth:o,strokeDasharray:`${f} ${s-f}`,strokeDashoffset:-c,transform:`rotate(-90 ${a} ${l})`},m);return c+=f,v}),i.jsx("text",{x:a,y:l+5,textAnchor:"middle",fontSize:14,fontWeight:"700",fill:"var(--text-primary)",children:n}),i.jsx("g",{children:e.map((p,m)=>i.jsxs("g",{children:[i.jsx("rect",{x:130,y:m*18+8,width:10,height:10,rx:2,fill:t[m%t.length]}),i.jsxs("text",{x:144,y:m*18+17,fontSize:10,fill:"var(--text-secondary)",children:[p.label," (",p.value,")"]})]},m))})]})}function Jl({entityType:e,entityId:t,addToast:n}){const[r,a]=N.useState([]),[l,o]=N.useState(!0),[s,c]=N.useState("note"),[p,m]=N.useState(""),[x,f]=N.useState(!1);N.useEffect(()=>{A.getActivity(e,t).then(a).catch(()=>{}).finally(()=>o(!1))},[e,t]);const v=async()=>{if(p.trim()){f(!0);try{const k=await A.addActivity({entity_type:e,entity_id:t,type:s,content:p.trim()});a(u=>[k,...u]),m("")}catch{n({message:"Failed to add note",type:"error"})}finally{f(!1)}}},g=async k=>{try{await A.deleteActivity(k),a(u=>u.filter(d=>d.id!==k))}catch{n({message:"Failed to delete",type:"error"})}},j={note:"📝",call:"📞",email:"✉️",meeting:"🤝",status_change:"🔄"};return i.jsxs("div",{children:[i.jsxs("div",{className:"activity-add-form",children:[i.jsxs("select",{className:"activity-type-select",value:s,onChange:k=>c(k.target.value),children:[i.jsx("option",{value:"note",children:"Note"}),i.jsx("option",{value:"call",children:"Call"}),i.jsx("option",{value:"email",children:"Email"}),i.jsx("option",{value:"meeting",children:"Meeting"})]}),i.jsx("textarea",{className:"activity-textarea",rows:2,placeholder:"Add a note...",value:p,onChange:k=>m(k.target.value),onKeyDown:k=>{k.key==="Enter"&&(k.ctrlKey||k.metaKey)&&v()}}),i.jsx("button",{className:"btn-primary",onClick:v,disabled:x||!p.trim(),style:{alignSelf:"flex-end",padding:"8px 14px",fontSize:13},children:x?"...":"Add"})]}),l&&i.jsx("div",{style:{color:"var(--text-muted)",fontSize:13,padding:"12px 0"},children:"Loading…"}),!l&&!r.length&&i.jsx("div",{style:{color:"var(--text-muted)",fontSize:13,padding:"12px 0"},children:"No activity yet. Add a note above."}),i.jsx("div",{className:"activity-timeline",style:{marginTop:12},children:r.map(k=>i.jsxs("div",{className:"activity-entry",children:[i.jsx("div",{className:`activity-icon activity-icon-${k.type}`,children:j[k.type]||"📝"}),i.jsxs("div",{className:"activity-content",children:[i.jsx("div",{className:"activity-type",children:k.type}),i.jsx("div",{className:"activity-text",children:k.content}),i.jsx("div",{className:"activity-time",children:pf(k.createdAt)})]}),i.jsx("button",{className:"activity-delete",onClick:()=>g(k.id),title:"Delete",children:i.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]},k.id))})]})}function Ld({entityType:e,entityId:t,addToast:n}){const[r,a]=N.useState([]),[l,o]=N.useState([]),[s,c]=N.useState(!1),[p,m]=N.useState(""),[x,f]=N.useState("#6B7280"),v=["#6B7280","#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#EC4899","#14B8A6"];N.useEffect(()=>{Promise.all([A.getTags(),A.getEntityTags(e,t)]).then(([d,h])=>{a(d),o(h)}).catch(()=>{})},[e,t]);const g=async d=>{if(!l.find(h=>h.id===d.id))try{await A.addEntityTag({entity_type:e,entity_id:t,tag_id:d.id}),o(h=>[...h,d])}catch{n({message:"Failed to add tag",type:"error"})}},j=async d=>{try{await A.removeEntityTag({entity_type:e,entity_id:t,tag_id:d}),o(h=>h.filter(w=>w.id!==d))}catch{n({message:"Failed to remove tag",type:"error"})}},k=async()=>{if(p.trim())try{const d=await A.createTag({name:p.trim(),color:x});a(h=>[...h.filter(w=>w.id!==d.id),d]),await g(d),m(""),c(!1)}catch{n({message:"Failed to create tag",type:"error"})}},u=r.filter(d=>!l.find(h=>h.id===d.id));return i.jsxs("div",{children:[i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:l.map(d=>i.jsxs("span",{className:"tag-chip",style:{background:d.color+"22",color:d.color},children:[d.name,i.jsx("button",{className:"tag-chip-remove",onClick:()=>j(d.id),children:"×"})]},d.id))}),i.jsxs("div",{className:"tags-add-row",children:[u.map(d=>i.jsxs("button",{className:"tag-add-btn",onClick:()=>g(d),style:{borderColor:d.color+"66",color:d.color},children:["+ ",d.name]},d.id)),!s&&i.jsx("button",{className:"tag-add-btn",onClick:()=>c(!0),children:"+ New Tag"}),s&&i.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"},children:[i.jsx("input",{className:"tag-create-input",placeholder:"Tag name",value:p,onChange:d=>m(d.target.value),onKeyDown:d=>d.key==="Enter"&&k(),autoFocus:!0}),i.jsx("div",{style:{display:"flex",gap:4},children:v.map(d=>i.jsx("button",{onClick:()=>f(d),style:{width:16,height:16,borderRadius:"50%",background:d,border:x===d?"2px solid var(--text-primary)":"2px solid transparent",cursor:"pointer"}},d))}),i.jsx("button",{className:"btn-primary",onClick:k,style:{padding:"5px 12px",fontSize:12},children:"Create"}),i.jsx("button",{className:"btn-secondary",onClick:()=>c(!1),style:{padding:"5px 12px",fontSize:12},children:"Cancel"})]})]})]})}function mf({deals:e,setDeals:t,appConfig:n,setPage:r,setSelectedDeal:a,addToast:l}){const o=(n==null?void 0:n.pipeline_stages)||ql,[s,c]=N.useState(null),[p,m]=N.useState(""),[x,f]=N.useState(""),v=e.filter(u=>u.status==="open"),g=u=>v.filter(d=>d.stageId===u),j=async(u,d)=>{try{const h=await A.updateDeal(u.id,{stage_id:d});t(w=>w.map(C=>C.id===u.id?{...C,stageId:h.stageId}:C))}catch{l({message:"Failed to move deal",type:"error"})}},k=async u=>{const d=p.trim();if(d)try{const h=await A.createDeal({title:d,stage_id:u,value:parseFloat(x)||0});t(w=>[h,...w]),m(""),f(""),c(null),l({message:`Deal "${h.title}" created`})}catch{l({message:"Failed to create deal",type:"error"})}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Pipeline"}),i.jsx("p",{children:"Track deals through your sales stages"})]}),i.jsx("div",{className:"pipeline-board",children:o.map(u=>{const d=g(u.id),h=d.reduce((w,C)=>w+(C.value||0),0);return i.jsxs("div",{className:"pipeline-col",children:[i.jsxs("div",{className:"pipeline-col-header",children:[i.jsxs("div",{className:"pipeline-col-title",children:[i.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:u.color,flexShrink:0}}),u.name,i.jsx("span",{style:{background:u.color+"22",color:u.color,fontSize:10,fontWeight:700,padding:"1px 7px",borderRadius:10},children:d.length})]}),i.jsx("div",{className:"pipeline-col-meta",children:ur(h)})]}),i.jsxs("div",{className:"pipeline-col-body",children:[d.length===0&&s!==u.id&&i.jsx("div",{className:"pipeline-empty",children:"No deals"}),d.map(w=>i.jsxs("div",{className:"pipeline-card",onClick:()=>{a(w.id),r("deal-detail")},children:[i.jsx("div",{className:"pipeline-card-title",children:w.title}),i.jsxs("div",{className:"pipeline-card-meta",children:[i.jsx("span",{className:"pipeline-card-value",children:ur(w.value)}),w.contactName&&i.jsx("span",{className:"pipeline-card-sub",children:w.contactName})]}),i.jsx("div",{className:"pipeline-card-stage-btns",children:o.filter(C=>C.id!==u.id).slice(0,3).map(C=>i.jsxs("button",{className:"pipeline-stage-btn",onClick:z=>{z.stopPropagation(),j(w,C.id)},children:["→ ",C.name]},C.id))})]},w.id)),s===u.id?i.jsxs("div",{className:"pipeline-new-form",children:[i.jsx("input",{placeholder:"Deal title",value:p,onChange:w=>m(w.target.value),onKeyDown:w=>{w.key==="Enter"&&k(u.id),w.key==="Escape"&&c(null)},autoFocus:!0}),i.jsx("input",{placeholder:"Value ($)",type:"number",value:x,onChange:w=>f(w.target.value),style:{marginBottom:8}}),i.jsxs("div",{className:"pipeline-new-form-btns",children:[i.jsx("button",{className:"btn-primary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>k(u.id),children:"Add"}),i.jsx("button",{className:"btn-secondary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>{c(null),m(""),f("")},children:"Cancel"})]})]}):i.jsx("button",{className:"pipeline-add-btn",onClick:()=>{c(u.id),m(""),f("")},children:"+ Add Deal"})]})]},u.id)})})]})}function gf({appConfig:e}){const[t,n]=N.useState(null),[r,a]=N.useState(!0),[l,o]=N.useState(!1);if(N.useEffect(()=>{A.getAnalytics().then(n).catch(()=>o(!0)).finally(()=>a(!1))},[]),r)return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Analytics"}),i.jsx("p",{children:"Performance overview and pipeline insights"})]}),i.jsx("div",{style:{color:"var(--text-muted)",fontSize:14,padding:"40px 0"},children:"Loading analytics…"})]});if(l||!t)return i.jsxs("div",{children:[i.jsx("div",{className:"page-header",children:i.jsx("h2",{children:"Analytics"})}),i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"Failed to load analytics data."})})]});const s=(e==null?void 0:e.pipeline_stages)||ql,c=t.bookings_by_status||{},p=Object.values(c).reduce((u,d)=>u+d,0),m=(t.bookings_by_month||[]).map(u=>({label:u.month.slice(5),value:u.count})),x=(t.revenue_by_month||[]).map(u=>({label:u.month.slice(5),value:Math.round(u.won_value)})),f=(t.top_services||[]).map(u=>({label:u.service,value:u.count})),v=(t.top_categories||[]).map(u=>({label:u.category,value:u.count})),g=s.map(u=>({label:u.name,value:(t.deals_by_stage||[]).filter(d=>d.stageId===u.id&&d.status==="open").reduce((d,h)=>d+h.count,0)})).filter(u=>u.value>0),j=s.map(u=>u.color),k=t.tasks_summary||{overdue:0,due_today:0,upcoming:0};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Analytics"}),i.jsx("p",{children:"Performance overview and pipeline insights"})]}),i.jsxs("div",{className:"analytics-grid",children:[i.jsxs("div",{className:"kpi-card",children:[i.jsx("div",{className:"kpi-label",children:"Total Bookings"}),i.jsx("div",{className:"kpi-value",children:p}),i.jsxs("div",{className:"kpi-sub",children:[c.pending||0," pending review"]})]}),i.jsxs("div",{className:"kpi-card",children:[i.jsx("div",{className:"kpi-label",children:"Conversion Rate"}),i.jsxs("div",{className:"kpi-value",children:[t.conversion_rate,"%"]}),i.jsx("div",{className:"kpi-sub",children:"Approved or on-calendar"})]}),i.jsxs("div",{className:"kpi-card",children:[i.jsx("div",{className:"kpi-label",children:"Open Pipeline"}),i.jsx("div",{className:"kpi-value",style:{fontSize:22},children:ur(t.open_deals_value)}),i.jsx("div",{className:"kpi-sub",children:"Total value of open deals"})]}),i.jsxs("div",{className:"kpi-card",children:[i.jsx("div",{className:"kpi-label",children:"Won Revenue"}),i.jsx("div",{className:"kpi-value",style:{fontSize:22,color:"var(--green)"},children:ur(t.won_revenue)}),i.jsx("div",{className:"kpi-sub",children:"Last 6 months"})]})]}),i.jsxs("div",{className:"analytics-grid",style:{gridTemplateColumns:"repeat(3, 1fr)",marginBottom:24},children:[i.jsxs("div",{className:"kpi-card",children:[i.jsx("div",{className:"kpi-label",children:"Overdue Tasks"}),i.jsx("div",{className:"kpi-value",style:{color:k.overdue>0?"var(--red)":void 0},children:k.overdue})]}),i.jsxs("div",{className:"kpi-card",children:[i.jsx("div",{className:"kpi-label",children:"Due Today"}),i.jsx("div",{className:"kpi-value",style:{color:k.due_today>0?"var(--orange)":void 0},children:k.due_today})]}),i.jsxs("div",{className:"kpi-card",children:[i.jsx("div",{className:"kpi-label",children:"Upcoming Tasks"}),i.jsx("div",{className:"kpi-value",children:k.upcoming})]})]}),i.jsxs("div",{className:"chart-grid",children:[i.jsxs("div",{className:"chart-card",children:[i.jsx("h4",{children:"Bookings Per Month"}),i.jsx(us,{data:m,valueKey:"value",labelKey:"label"})]}),i.jsxs("div",{className:"chart-card",children:[i.jsx("h4",{children:"Revenue Won Per Month"}),i.jsx(us,{data:x,valueKey:"value",labelKey:"label",color:"var(--green)"})]})]}),i.jsxs("div",{className:"chart-grid",children:[i.jsxs("div",{className:"chart-card",children:[i.jsx("h4",{children:"Open Deals by Stage"}),g.length>0?i.jsx(hf,{data:g,colors:j}):i.jsx("div",{className:"chart-empty",children:"No open deals yet"})]}),i.jsxs("div",{className:"chart-card",children:[i.jsx("h4",{children:"Bookings by Status"}),i.jsxs("table",{className:"analytics-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Count"}),i.jsx("th",{style:{width:"45%"},children:"Share"})]})}),i.jsx("tbody",{children:Object.entries(c).sort((u,d)=>d[1]-u[1]).map(([u,d])=>{const h=p?Math.round(d/p*100):0;return i.jsxs("tr",{children:[i.jsx("td",{children:u}),i.jsx("td",{children:d}),i.jsx("td",{children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[i.jsx("div",{className:"analytics-pct-bar",children:i.jsx("div",{className:"analytics-pct-fill",style:{width:`${h}%`}})}),i.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",minWidth:28},children:[h,"%"]})]})})]},u)})})]})]})]}),i.jsxs("div",{className:"chart-grid",children:[i.jsxs("div",{className:"chart-card",children:[i.jsx("h4",{children:"Top Services"}),i.jsx(ps,{data:f,valueKey:"value",labelKey:"label"})]}),i.jsxs("div",{className:"chart-card",children:[i.jsx("h4",{children:"Top Categories"}),i.jsx(ps,{data:v,valueKey:"value",labelKey:"label",color:"var(--purple)"})]})]})]})}const xf=["#6B7280","#3B82F6","#10B981","#F59E0B","#EF4444","#8B5CF6","#EC4899","#14B8A6","#F97316"],ql=[{id:"new",name:"New",color:"#6B7280"},{id:"qualified",name:"Qualified",color:"#3B82F6"},{id:"proposal",name:"Proposal Sent",color:"#F59E0B"},{id:"negotiation",name:"Negotiation",color:"#8B5CF6"},{id:"won",name:"Won",color:"#10B981"},{id:"lost",name:"Lost",color:"#EF4444"}];function vf({appConfig:e,setAppConfig:t,addToast:n}){const[r,a]=N.useState(()=>(e==null?void 0:e.pipeline_stages)||ql),[l,o]=N.useState(null),[s,c]=N.useState(!1),p=(v,g,j)=>a(k=>k.map(u=>u.id===v?{...u,[g]:j}:u)),m=()=>{const v="stage_"+Date.now();a(g=>[...g,{id:v,name:"New Stage",color:"#6B7280"}]),o(v)},x=v=>{if(r.length<=1){n({message:"Must have at least one stage",type:"error"});return}a(g=>g.filter(j=>j.id!==v)),l===v&&o(null)},f=async()=>{c(!0);try{await A.saveConfig({pipeline_stages:r}),t(v=>({...v,pipeline_stages:r})),n({message:"Pipeline stages saved"}),o(null)}catch{n({message:"Failed to save stages",type:"error"})}finally{c(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Pipeline Stages"}),i.jsx("p",{children:"Customize the stages deals move through. Changes apply to the Pipeline board immediately after saving."})]}),i.jsxs("div",{className:"settings-section",children:[r.map(v=>i.jsxs("div",{className:"stage-editor-row",children:[i.jsx("div",{className:"stage-color-dot",style:{background:v.color}}),l===v.id?i.jsxs(i.Fragment,{children:[i.jsx("input",{className:"form-input",style:{flex:1},value:v.name,onChange:g=>p(v.id,"name",g.target.value),onKeyDown:g=>g.key==="Enter"&&o(null),autoFocus:!0}),i.jsx("div",{className:"stage-color-picker",children:xf.map(g=>i.jsx("button",{className:`stage-color-swatch${v.color===g?" selected":""}`,style:{background:g},onClick:()=>p(v.id,"color",g),title:g},g))}),i.jsx("button",{className:"btn-secondary",style:{fontSize:12,padding:"5px 12px",whiteSpace:"nowrap"},onClick:()=>o(null),children:"Done"})]}):i.jsxs(i.Fragment,{children:[i.jsx("span",{style:{flex:1,fontSize:14,color:"var(--text-primary)",fontWeight:500},children:v.name}),i.jsx("button",{className:"btn-secondary",style:{fontSize:12,padding:"5px 12px"},onClick:()=>o(v.id),children:"Edit"}),i.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)",padding:"4px 6px",fontSize:13},onClick:()=>x(v.id),title:"Remove stage",children:T.trash})]})]},v.id)),i.jsxs("div",{style:{display:"flex",gap:10,marginTop:20},children:[i.jsxs("button",{className:"btn-secondary",onClick:m,children:[T.plus," Add Stage"]}),i.jsx("button",{className:"btn-primary",onClick:f,disabled:s,children:s?"Saving…":"Save Stages"})]}),i.jsxs("div",{style:{marginTop:24,padding:"14px 16px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:10},children:[i.jsx("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",letterSpacing:"0.5px",marginBottom:10},children:"Preview"}),i.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:r.map(v=>i.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,background:v.color+"22",color:v.color,padding:"4px 12px",borderRadius:10,fontSize:12,fontWeight:700},children:[i.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:v.color}}),v.name]},v.id))})]})]})]})}function yf({toasts:e}){return i.jsx("div",{className:"toast-container",children:e.map(t=>i.jsxs("div",{className:`toast toast-${t.type||"success"}`,children:[t.type==="success"&&i.jsx("span",{style:{color:"var(--green)"},children:T.check}),t.type==="info"&&i.jsx("span",{style:{color:"var(--blue)"},children:T.calendarPlus}),t.message]},t.id))})}function wf({page:e,setPage:t,bookings:n,contacts:r,isOpen:a,onClose:l,onLogout:o,onShowTutorial:s,appConfig:c}){const p=n.filter(j=>j.status==="pending").length,m=r.filter(j=>j.status==="new").length,x=(c==null?void 0:c.company_website)||"#",f=c==null?void 0:c.company_logo,v=(c==null?void 0:c.company_name)||"Admin",g=(j,k,u,d)=>i.jsxs("div",{className:`nav-item ${e===j?"active":""}`,onClick:()=>{t(j),l()},children:[k,u,d>0&&i.jsx("span",{className:"nav-badge",children:d})]},j);return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`sidebar-overlay ${a?"show":""}`,onClick:l}),i.jsxs("aside",{className:`sidebar ${a?"open":""}`,children:[i.jsxs("div",{className:"sidebar-logo",children:[f?i.jsx("img",{src:f,alt:v,style:{maxHeight:36,maxWidth:140,objectFit:"contain",marginBottom:4}}):i.jsx("h1",{children:v}),i.jsx("p",{children:"Admin Portal"})]}),i.jsxs("div",{className:"sidebar-scroll-area",children:[i.jsx("div",{className:"sidebar-label",children:"Manage"}),i.jsxs("nav",{className:"sidebar-nav",children:[g("dashboard",T.dashboard,"Dashboard"),g("bookings",T.bookings,"Bookings",p),g("contacts",T.inbox,"Inbox",m),g("availability",T.clock,"Availability"),g("calendar",T.calendar,"Calendar")]}),i.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"CRM"}),i.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[g("pipeline",T.pipeline,"Pipeline"),g("deals",T.deals,"Deals"),g("tasks",T.tasks,"Tasks"),g("analytics",T.analytics,"Analytics")]}),i.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Customize"}),i.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[g("customize-branding",T.brush,"Branding"),g("customize-services",T.list,"Services"),g("customize-categories",T.tag,"Categories"),g("customize-stages",T.pipeline,"Pipeline Stages"),g("customize-fields",T.fields,"Custom Fields"),g("customize-scoring",T.scoring,"Lead Scoring"),g("customize-notifications",T.bell,"Notifications"),g("customize-appearance",T.sun,"Appearance")]}),i.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Advanced"}),i.jsxs("nav",{className:"sidebar-nav sidebar-section-group",children:[g("advanced-origins",T.globe,"Allowed Origins"),g("advanced-docs",T.code,"API Docs"),g("advanced-reset",T.settings,"Reset Setup")]}),i.jsx("div",{className:"sidebar-label",style:{marginTop:8},children:"Account"}),i.jsx("nav",{className:"sidebar-nav sidebar-section-group",children:g("settings",T.settings,"Settings")}),i.jsx("div",{className:"sidebar-visit-divider",children:i.jsxs("a",{className:"sidebar-visit-btn",href:x,target:"_blank",rel:"noopener noreferrer",children:["Visit Website",i.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),i.jsx("polyline",{points:"15 3 21 3 21 9"}),i.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})]})})]}),i.jsxs("div",{className:"sidebar-footer",children:[i.jsxs("button",{className:"sidebar-tutorial-btn",onClick:()=>{s(),l()},children:[T.helpCircle,"Show Tutorial"]}),i.jsxs("button",{className:"logout-btn",onClick:o,children:[T.logout,"Sign Out"]})]})]})]})}function Ar({label:e,value:t,sub:n,color:r}){return i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-label",children:e}),i.jsx("div",{className:"stat-value",style:r?{color:r}:{},children:t}),n&&i.jsx("div",{className:"stat-sub",children:n})]})}function jf({bookings:e,contacts:t,setPage:n,setSelectedBooking:r,setSelectedContact:a}){const l=e.filter(c=>c.status==="pending"),o=e.filter(c=>c.status==="approved"||c.status==="on-calendar"),s=t.filter(c=>c.status==="new");return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Dashboard"}),i.jsx("p",{children:"Overview of your consultation bookings and inquiries"})]}),i.jsxs("div",{className:"stats-grid",children:[i.jsx(Ar,{label:"Pending Bookings",value:l.length,sub:"Need your review",color:"var(--orange)"}),i.jsx(Ar,{label:"Approved",value:o.length,sub:"Confirmed consultations",color:"var(--green)"}),i.jsx(Ar,{label:"New Messages",value:s.length,sub:"Unread inquiries",color:"var(--blue)"}),i.jsx(Ar,{label:"Total Leads",value:e.length+t.length,sub:"All time"})]}),l.length>0&&i.jsxs("div",{style:{marginBottom:28},children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-title",children:"Needs Your Attention"}),i.jsx("button",{className:"btn-secondary",onClick:()=>n("bookings"),children:"View All Bookings"})]}),i.jsx("div",{className:"card-list",children:l.slice(0,3).map(c=>i.jsxs("div",{className:"list-card",onClick:()=>{r(c.id),n("booking-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:wi(c.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:c.name}),i.jsx("span",{className:"card-date",children:rt(c.date)})]}),i.jsxs("div",{className:"card-preview",children:[c.service," — ",c.org]}),i.jsxs("div",{className:"card-tags",children:[i.jsx("span",{className:`tag tag-${c.category.toLowerCase()}`,children:c.category}),i.jsx("span",{className:`status-badge status-${c.status}`,children:c.status})]})]}),i.jsx("span",{className:"card-chevron",children:T.chevronRight})]},c.id))})]}),s.length>0&&i.jsxs("div",{children:[i.jsxs("div",{className:"section-header",children:[i.jsx("span",{className:"section-title",children:"New Inquiries"}),i.jsx("button",{className:"btn-secondary",onClick:()=>n("contacts"),children:"View Inbox"})]}),i.jsx("div",{className:"card-list",children:s.slice(0,3).map(c=>i.jsxs("div",{className:"list-card",onClick:()=>{a(c.id),n("contact-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:wi(c.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:c.name}),i.jsx("span",{className:"card-date",children:rt(c.submittedAt)})]}),i.jsx("div",{className:"card-preview",children:c.subject}),i.jsx("div",{className:"card-tags",children:i.jsx("span",{className:`tag tag-${c.category.toLowerCase()}`,children:c.category})})]}),i.jsx("span",{className:"card-chevron",children:T.chevronRight})]},c.id))})]})]})}function kf({bookings:e,setPage:t,setSelectedBooking:n,searchTerm:r,setSearchTerm:a,statusFilter:l,setStatusFilter:o,categoryFilter:s,setCategoryFilter:c,categories:p}){const m=p||Zl,x=e.filter(f=>{const v=!r||f.name.toLowerCase().includes(r.toLowerCase())||f.org.toLowerCase().includes(r.toLowerCase())||f.service.toLowerCase().includes(r.toLowerCase()),g=l==="all"||f.status===l,j=s==="all"||f.category===s;return v&&g&&j});return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Consultation Bookings"}),i.jsx("p",{children:"Manage requests for proposals and consultation appointments"})]}),i.jsxs("div",{className:"search-bar",children:[i.jsx("span",{className:"search-icon",children:T.search}),i.jsx("input",{placeholder:"Search by name, organization, or service...",value:r,onChange:f=>a(f.target.value)})]}),i.jsxs("div",{className:"section-header",children:[i.jsx("div",{className:"filters",children:["all","pending","approved","on-calendar","declined"].map(f=>i.jsx("button",{className:`filter-chip ${l===f?"active":""}`,onClick:()=>o(f),children:f==="all"?"All":f==="on-calendar"?"On Calendar":f.charAt(0).toUpperCase()+f.slice(1)},f))}),i.jsx("div",{className:"filters",children:["all",...m].map(f=>i.jsx("button",{className:`filter-chip ${s===f?"active":""}`,onClick:()=>c(f),children:f==="all"?"All Sectors":f},f))})]}),i.jsx("div",{className:"card-list",children:x.length===0?i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"No bookings match your filters."})}):x.map(f=>i.jsxs("div",{className:"list-card",onClick:()=>{n(f.id),t("booking-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:wi(f.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:f.name}),i.jsxs("span",{className:"card-date",children:[f.time," · ",rt(f.date)]})]}),i.jsxs("div",{className:"card-preview",children:[f.service," — ",f.org]}),i.jsxs("div",{className:"card-tags",children:[i.jsx("span",{className:`tag tag-${f.category.toLowerCase()}`,children:f.category}),i.jsx("span",{className:`status-badge status-${f.status}`,children:f.status==="on-calendar"?"On Calendar":f.status})]})]}),i.jsx("span",{className:"card-chevron",children:T.chevronRight})]},f.id))})]})}function bf({booking:e,onBack:t,onUpdateStatus:n,onAddToCalendar:r,onDelete:a,addToast:l,appConfig:o,setPage:s,setSelectedDeal:c,deals:p}){var b,M;if(!e)return null;const[m,x]=N.useState(!1),[f,v]=N.useState(e.name),[g,j]=N.useState(""),[k,u]=N.useState(((M=(b=o==null?void 0:o.pipeline_stages)==null?void 0:b[0])==null?void 0:M.id)||"new"),[d,h]=N.useState("details"),w=(o==null?void 0:o.pipeline_stages)||[],C=E=>{n(e.id,E),l({message:`Booking ${E==="approved"?"approved":E==="declined"?"declined":"updated"} — ${e.name}`,type:"success"})},z=async()=>{window.confirm(`Permanently delete this booking from ${e.name}? This cannot be undone.`)&&(await a(e.id),t())},y=async()=>{try{const E=await A.createDeal({title:f,booking_id:e.id,stage_id:k,value:parseFloat(g)||0});l({message:`Deal "${E.title}" created`}),x(!1),c&&c(E.id),s&&s("deal-detail")}catch{l({message:"Failed to create deal",type:"error"})}};return i.jsxs("div",{className:"detail-view",children:[i.jsxs("button",{className:"detail-back",onClick:t,children:[T.back," Back to Bookings"]}),i.jsxs("div",{className:"detail-card",children:[i.jsxs("div",{className:"detail-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"detail-name",children:e.name}),i.jsx("div",{className:"detail-org",children:e.org})]}),i.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[i.jsx(_d,{entity:e,appConfig:o}),i.jsx("span",{className:`status-badge status-${e.status}`,children:e.status==="on-calendar"?"On Calendar":e.status})]})]}),i.jsx("div",{style:{display:"flex",gap:8,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:0},children:["details","activity","tags"].map(E=>i.jsx("button",{onClick:()=>h(E),style:{background:"none",border:"none",cursor:"pointer",padding:"8px 14px",fontSize:13,fontWeight:600,color:d===E?"var(--accent)":"var(--text-muted)",borderBottom:d===E?"2px solid var(--accent)":"2px solid transparent",fontFamily:"inherit",textTransform:"capitalize"},children:E},E))}),d==="details"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Service Requested"}),i.jsx("span",{children:e.service})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Sector"}),i.jsx("span",{className:`tag tag-${e.category.toLowerCase()}`,children:e.category})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Consultation Date"}),i.jsxs("span",{children:[rt(e.date)," at ",e.time]})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Submitted"}),i.jsx("span",{children:rt(e.submittedAt)})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Email"}),i.jsx("a",{href:`mailto:${e.email}`,children:e.email})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("a",{href:`tel:${e.phone}`,children:e.phone})]})]}),i.jsxs("div",{className:"detail-message",children:[i.jsx("label",{children:"Message"}),i.jsx("p",{children:e.message})]}),i.jsxs("div",{className:"detail-status-select",children:[i.jsx("label",{children:"Status:"}),i.jsxs("select",{value:e.status,onChange:E=>C(E.target.value),children:[i.jsx("option",{value:"pending",children:"Pending"}),i.jsx("option",{value:"approved",children:"Approved"}),i.jsx("option",{value:"declined",children:"Declined"}),i.jsx("option",{value:"on-calendar",children:"On Calendar"}),i.jsx("option",{value:"archived",children:"Archived"})]})]}),i.jsxs("div",{className:"detail-actions",children:[e.status==="pending"&&i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:"btn-action btn-approve",onClick:()=>C("approved"),children:[T.check," Approve"]}),i.jsxs("button",{className:"btn-action btn-decline",onClick:()=>C("declined"),children:[T.x," Decline"]})]}),e.status==="approved"&&i.jsxs("button",{className:"btn-action btn-calendar",onClick:()=>{r(e.id),l({message:`Added to calendar — ${e.name}, ${rt(e.date)}`,type:"info"})},children:[T.calendarPlus," Add to Calendar"]}),e.status==="on-calendar"&&i.jsxs("span",{style:{fontSize:13,color:"var(--purple)",display:"flex",alignItems:"center",gap:6},children:[T.check," On your calendar"]}),i.jsxs("a",{href:`mailto:${e.email}`,className:"btn-action",style:{background:"var(--accent-dim)",color:"var(--accent)",textDecoration:"none"},children:[T.mail," Email Client"]}),i.jsxs("a",{href:`tel:${e.phone}`,className:"btn-action",style:{background:"rgba(255,255,255,0.06)",color:"var(--text-secondary)",textDecoration:"none"},children:[T.phone," Call"]}),i.jsxs("button",{className:"btn-action",style:{background:"var(--green-dim)",color:"var(--green)"},onClick:()=>x(!0),children:[T.convertDeal," Convert to Deal"]}),e.status!=="archived"&&i.jsxs("button",{className:"btn-action btn-archive",onClick:()=>C("archived"),children:[T.archive," Archive"]}),i.jsxs("button",{className:"btn-action btn-delete",onClick:z,children:[T.trash," Delete"]})]})]}),d==="activity"&&i.jsx(Jl,{entityType:"booking",entityId:e.id,addToast:l}),d==="tags"&&i.jsx(Ld,{entityType:"booking",entityId:e.id,addToast:l})]}),m&&i.jsx("div",{className:"modal-overlay",onClick:()=>x(!1),children:i.jsxs("div",{className:"modal-box",onClick:E=>E.stopPropagation(),children:[i.jsx("h3",{children:"Convert to Deal"}),i.jsx("p",{children:"Create a deal in your pipeline linked to this booking."}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Deal Title"}),i.jsx("input",{className:"form-input",value:f,onChange:E=>v(E.target.value)})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Deal Value ($)"}),i.jsx("input",{className:"form-input",type:"number",value:g,onChange:E=>j(E.target.value),placeholder:"0"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Stage"}),i.jsx("select",{className:"form-input",value:k,onChange:E=>u(E.target.value),children:w.map(E=>i.jsx("option",{value:E.id,children:E.name},E.id))})]}),i.jsxs("div",{className:"modal-actions",children:[i.jsx("button",{className:"btn-secondary",onClick:()=>x(!1),children:"Cancel"}),i.jsx("button",{className:"btn-primary",onClick:y,children:"Create Deal"})]})]})})]})}function Sf({contacts:e,setPage:t,setSelectedContact:n,searchTerm:r,setSearchTerm:a,contactStatusFilter:l,setContactStatusFilter:o}){const s=e.filter(c=>{const p=!r||c.name.toLowerCase().includes(r.toLowerCase())||c.subject.toLowerCase().includes(r.toLowerCase()),m=l==="all"||c.status===l;return p&&m});return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Contact Inbox"}),i.jsx("p",{children:"Messages from the website contact form"})]}),i.jsxs("div",{className:"search-bar",children:[i.jsx("span",{className:"search-icon",children:T.search}),i.jsx("input",{placeholder:"Search by name or subject...",value:r,onChange:c=>a(c.target.value)})]}),i.jsx("div",{className:"section-header",children:i.jsx("div",{className:"filters",children:["all","new","replied","archived"].map(c=>i.jsx("button",{className:`filter-chip ${l===c?"active":""}`,onClick:()=>o(c),children:c==="all"?"All":c.charAt(0).toUpperCase()+c.slice(1)},c))})}),i.jsx("div",{className:"card-list",children:s.length===0?i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"No messages match your filters."})}):s.map(c=>i.jsxs("div",{className:"list-card",onClick:()=>{n(c.id),t("contact-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:wi(c.status)}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:c.name}),i.jsx("span",{className:"card-date",children:rt(c.submittedAt)})]}),i.jsx("div",{className:"card-preview",children:c.subject}),i.jsxs("div",{className:"card-tags",children:[i.jsx("span",{className:`tag tag-${c.category.toLowerCase()}`,children:c.category}),i.jsx("span",{className:`status-badge status-${c.status}`,children:c.status})]})]}),i.jsx("span",{className:"card-chevron",children:T.chevronRight})]},c.id))})]})}function Nf({contact:e,onBack:t,onUpdateStatus:n,onDelete:r,addToast:a,appConfig:l,setPage:o,setSelectedDeal:s}){var z,y;if(!e)return null;const[c,p]=N.useState(!1),[m,x]=N.useState(e.name),[f,v]=N.useState(""),[g,j]=N.useState(((y=(z=l==null?void 0:l.pipeline_stages)==null?void 0:z[0])==null?void 0:y.id)||"new"),[k,u]=N.useState("details"),d=(l==null?void 0:l.pipeline_stages)||[],h=b=>{n(e.id,b),a({message:`Marked as ${b} — ${e.name}`,type:"success"})},w=async()=>{window.confirm(`Permanently delete this message from ${e.name}? This cannot be undone.`)&&(await r(e.id),t())},C=async()=>{try{const b=await A.createDeal({title:m,contact_id:e.id,stage_id:g,value:parseFloat(f)||0});a({message:`Deal "${b.title}" created`}),p(!1),s&&s(b.id),o&&o("deal-detail")}catch{a({message:"Failed to create deal",type:"error"})}};return i.jsxs("div",{className:"detail-view",children:[i.jsxs("button",{className:"detail-back",onClick:t,children:[T.back," Back to Inbox"]}),i.jsxs("div",{className:"detail-card",children:[i.jsxs("div",{className:"detail-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"detail-name",children:e.name}),i.jsx("div",{className:"detail-org",children:e.subject})]}),i.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[i.jsx(_d,{entity:e,appConfig:l}),i.jsx("span",{className:`status-badge status-${e.status}`,children:e.status})]})]}),i.jsx("div",{style:{display:"flex",gap:8,marginBottom:16,borderBottom:"1px solid var(--border)",paddingBottom:0},children:["details","activity","tags"].map(b=>i.jsx("button",{onClick:()=>u(b),style:{background:"none",border:"none",cursor:"pointer",padding:"8px 14px",fontSize:13,fontWeight:600,color:k===b?"var(--accent)":"var(--text-muted)",borderBottom:k===b?"2px solid var(--accent)":"2px solid transparent",fontFamily:"inherit",textTransform:"capitalize"},children:b},b))}),k==="details"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Sector"}),i.jsx("span",{className:`tag tag-${e.category.toLowerCase()}`,children:e.category})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Received"}),i.jsx("span",{children:rt(e.submittedAt)})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Email"}),i.jsx("a",{href:`mailto:${e.email}`,children:e.email})]}),i.jsxs("div",{className:"detail-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("a",{href:`tel:${e.phone}`,children:e.phone})]})]}),i.jsxs("div",{className:"detail-message",children:[i.jsx("label",{children:"Message"}),i.jsx("p",{children:e.message})]}),i.jsxs("div",{className:"detail-status-select",children:[i.jsx("label",{children:"Status:"}),i.jsxs("select",{value:e.status,onChange:b=>h(b.target.value),children:[i.jsx("option",{value:"new",children:"New"}),i.jsx("option",{value:"replied",children:"Replied"}),i.jsx("option",{value:"archived",children:"Archived"})]})]}),i.jsxs("div",{className:"detail-actions",children:[e.status==="new"&&i.jsxs("button",{className:"btn-action btn-approve",onClick:()=>h("replied"),children:[T.check," Mark as Replied"]}),i.jsxs("a",{href:`mailto:${e.email}`,className:"btn-action",style:{background:"var(--accent-dim)",color:"var(--accent)",textDecoration:"none"},children:[T.mail," Email Client"]}),i.jsxs("a",{href:`tel:${e.phone}`,className:"btn-action",style:{background:"rgba(255,255,255,0.06)",color:"var(--text-secondary)",textDecoration:"none"},children:[T.phone," Call"]}),i.jsxs("button",{className:"btn-action",style:{background:"var(--green-dim)",color:"var(--green)"},onClick:()=>p(!0),children:[T.convertDeal," Convert to Deal"]}),e.status!=="archived"&&i.jsxs("button",{className:"btn-action btn-archive",onClick:()=>h("archived"),children:[T.archive," Archive"]}),i.jsxs("button",{className:"btn-action btn-delete",onClick:w,children:[T.trash," Delete"]})]})]}),k==="activity"&&i.jsx(Jl,{entityType:"contact",entityId:e.id,addToast:a}),k==="tags"&&i.jsx(Ld,{entityType:"contact",entityId:e.id,addToast:a})]}),c&&i.jsx("div",{className:"modal-overlay",onClick:()=>p(!1),children:i.jsxs("div",{className:"modal-box",onClick:b=>b.stopPropagation(),children:[i.jsx("h3",{children:"Convert to Deal"}),i.jsx("p",{children:"Create a deal linked to this contact."}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Deal Title"}),i.jsx("input",{className:"form-input",value:m,onChange:b=>x(b.target.value)})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Deal Value ($)"}),i.jsx("input",{className:"form-input",type:"number",value:f,onChange:b=>v(b.target.value),placeholder:"0"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Stage"}),i.jsx("select",{className:"form-input",value:g,onChange:b=>j(b.target.value),children:d.map(b=>i.jsx("option",{value:b.id,children:b.name},b.id))})]}),i.jsxs("div",{className:"modal-actions",children:[i.jsx("button",{className:"btn-secondary",onClick:()=>p(!1),children:"Cancel"}),i.jsx("button",{className:"btn-primary",onClick:C,children:"Create Deal"})]})]})})]})}function Cf({bookings:e,setPage:t,setSelectedBooking:n}){const[r,a]=N.useState(0),[l,o]=N.useState(null),s=new Date;s.setHours(0,0,0,0);const c=s.toISOString().split("T")[0],p=new Date(s.getFullYear(),s.getMonth()+r,1),m=p.getFullYear(),x=p.getMonth(),f=p.toLocaleString("en-US",{month:"long",year:"numeric"}),v=new Date(m,x,1).getDay(),g=new Date(m,x+1,0).getDate(),j=new Date(m,x,0).getDate(),k=[];for(let y=v-1;y>=0;y--)k.push({day:j-y,otherMonth:!0,dateStr:null});for(let y=1;y<=g;y++){const b=`${m}-${String(x+1).padStart(2,"0")}-${String(y).padStart(2,"0")}`;k.push({day:y,otherMonth:!1,dateStr:b})}for(;k.length<42;)k.push({day:k.length-v-g+1,otherMonth:!0,dateStr:null});const u=e.filter(y=>y.status==="approved"||y.status==="on-calendar"),d=y=>u.filter(b=>b.date===y).sort((b,M)=>(b.time||"").localeCompare(M.time||"")),h=u.filter(y=>y.date>=c).sort((y,b)=>y.date.localeCompare(b.date)||(y.time||"").localeCompare(b.time||"")),w=l?d(l):null,C=y=>{y.otherMonth||o(b=>b===y.dateStr?null:y.dateStr)},z=y=>{a(b=>b+y),o(null)};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Calendar"}),i.jsx("p",{children:"Your approved consultations and scheduled appointments"})]}),i.jsxs("div",{className:`cal-layout${l?" day-selected":""}`,children:[i.jsxs("div",{className:"cal-left",children:[i.jsxs("div",{className:"cal-nav",children:[i.jsx("span",{className:"cal-month",children:f}),i.jsxs("div",{className:"cal-nav-btns",children:[i.jsx("button",{className:"cal-nav-btn cal-nav-icon",onClick:()=>z(-1),title:"Previous month",children:T.back}),i.jsx("button",{className:"cal-nav-btn",onClick:()=>{a(0),o(null)},children:"Today"}),i.jsx("button",{className:"cal-nav-btn cal-nav-icon",onClick:()=>z(1),title:"Next month",children:T.chevronRight})]})]}),i.jsxs("div",{className:"cal-grid",children:[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(y=>i.jsx("div",{className:"cal-header-cell",children:y},y)),k.map((y,b)=>{const M=y.dateStr?d(y.dateStr):[],E=y.dateStr===c,se=y.dateStr&&y.dateStr===l;return i.jsxs("div",{className:`cal-cell${y.otherMonth?" other-month":""}${E?" today":""}${se?" selected":""}`,onClick:()=>C(y),children:[i.jsx("div",{className:"cal-day-num",children:y.day}),!y.otherMonth&&M.slice(0,2).map(ee=>i.jsxs("div",{className:`cal-event${ee.status==="on-calendar"?" on-cal":""}`,onClick:Ge=>{Ge.stopPropagation(),n(ee.id),t("booking-detail")},title:`${ee.name} — ${ee.service}`,children:[ee.time?an(ee.time)+" ":"",ee.name.split(" ")[0]]},ee.id)),!y.otherMonth&&M.length>2&&i.jsxs("div",{className:"cal-event-more",children:["+",M.length-2," more"]}),!y.otherMonth&&M.length>0&&i.jsx("div",{className:"cal-dots",children:M.map(ee=>i.jsx("div",{className:`cal-dot ${ee.status==="on-calendar"?"purple":"green"}`},ee.id))})]},b)})]}),i.jsxs("div",{className:"cal-legend",children:[i.jsxs("div",{className:"cal-legend-item",children:[i.jsx("div",{className:"cal-legend-dot green"}),"Approved"]}),i.jsxs("div",{className:"cal-legend-item",children:[i.jsx("div",{className:"cal-legend-dot purple"}),"On Calendar"]})]})]}),i.jsx("div",{className:"cal-right",children:i.jsx("div",{className:"cal-panel",children:l&&w?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"cal-panel-header",children:[i.jsx("div",{className:"cal-panel-title",children:Gr(l)}),i.jsx("button",{className:"cal-panel-close",onClick:()=>o(null),title:"Close",children:T.x})]}),w.length===0?i.jsxs("div",{className:"cal-panel-empty",children:["No bookings on this day.",i.jsx("br",{}),"Click any other day to view its events."]}):w.map(y=>i.jsxs("div",{className:"cal-panel-event",onClick:()=>{n(y.id),t("booking-detail")},children:[i.jsx("div",{className:"cal-panel-event-time",children:an(y.time)||"Time TBD"}),i.jsx("div",{className:"cal-panel-event-name",children:y.name}),i.jsx("div",{className:"cal-panel-event-service",children:y.service}),i.jsx("div",{className:"cal-panel-event-org",children:y.org}),i.jsx("span",{className:`status-badge status-${y.status}`,style:{marginTop:8,display:"inline-block"},children:y.status==="on-calendar"?"On Calendar":"Approved"})]},y.id))]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cal-panel-title",style:{marginBottom:16},children:"Upcoming"}),h.length===0?i.jsxs("div",{className:"cal-panel-empty",children:["No upcoming consultations.",i.jsx("br",{}),"Approve bookings to see them here."]}):h.slice(0,12).map(y=>{const b=new Date(y.date+"T00:00:00").toLocaleString("en-US",{month:"short"}),M=Number(y.date.split("-")[2]);return i.jsxs("div",{className:"cal-upcoming-item",onClick:()=>{n(y.id),t("booking-detail")},children:[i.jsxs("div",{className:"cal-upcoming-badge",children:[i.jsx("div",{className:"cal-upcoming-badge-month",children:b}),i.jsx("div",{className:"cal-upcoming-badge-day",children:M})]}),i.jsxs("div",{style:{flex:1,minWidth:0},children:[i.jsx("div",{className:"cal-upcoming-name",children:y.name}),i.jsxs("div",{className:"cal-upcoming-meta",children:[an(y.time)||y.time," · ",y.service]}),i.jsx("span",{className:`status-badge status-${y.status}`,style:{marginTop:4,display:"inline-block"},children:y.status==="on-calendar"?"On Calendar":"Approved"})]}),i.jsx("span",{style:{color:"var(--text-muted)",flexShrink:0},children:T.chevronRight})]},y.id)})]})})}),i.jsxs("div",{className:"cal-mobile-upcoming",children:[i.jsx("div",{className:"section-title",style:{marginBottom:12},children:"Upcoming Consultations"}),h.length===0?i.jsx("div",{className:"cal-panel-empty",style:{textAlign:"center",padding:"24px 0"},children:"No upcoming approved consultations."}):i.jsx("div",{className:"card-list",children:h.map(y=>i.jsxs("div",{className:"list-card",onClick:()=>{n(y.id),t("booking-detail")},children:[i.jsx("div",{className:"card-status-dot",style:{background:y.status==="on-calendar"?"var(--purple)":"var(--green)"}}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{className:"card-top-row",children:[i.jsx("span",{className:"card-name",children:y.name}),i.jsx("span",{className:"card-date",children:an(y.time)||y.time})]}),i.jsxs("div",{className:"card-preview",children:[y.service," — ",rt(y.date)]}),i.jsx("div",{className:"card-tags",children:i.jsx("span",{className:`status-badge status-${y.status}`,children:y.status==="on-calendar"?"On Calendar":"Approved"})})]}),i.jsx("span",{className:"card-chevron",children:T.chevronRight})]},y.id))})]})]})]})}function zf(e,t,n){if(!e||!t||!n)return[];const[r,a]=e.split(":").map(Number),[l,o]=t.split(":").map(Number),s=r*60+a,c=l*60+o;if(c<=s)return[];const p=[];for(let m=s;m+n<=c;m+=n){const x=Math.floor(m/60),f=m%60;p.push(`${String(x).padStart(2,"0")}:${String(f).padStart(2,"0")}`)}return p}function Ef({slots:e,setSlots:t,addToast:n,setPage:r,setSelectedBooking:a}){const l=new Date().toISOString().split("T")[0],[o,s]=N.useState({date:"",fromTime:"09:00",toTime:"17:00",durationMinutes:60,label:""}),[c,p]=N.useState(!1),m=zf(o.fromTime,o.toTime,Number(o.durationMinutes)),x=o.date&&m.length>0,f=async()=>{if(!x){n({message:"Please fill in the date and a valid time range.",type:"error"});return}p(!0);try{const k=await A.createSlotRange({date:o.date,fromTime:o.fromTime,toTime:o.toTime,durationMinutes:Number(o.durationMinutes),label:o.label}),u=await A.getAvailability();t(u);const d=k.total-k.count,h=d>0?`${k.count} slots opened for ${Gr(o.date)} (${d} already existed)`:`${k.count} slots opened for ${Gr(o.date)}`;n({message:h}),s(w=>({...w,date:""}))}catch{n({message:"Could not open those slots. Please try again.",type:"error"})}finally{p(!1)}},v=async k=>{try{await A.deleteSlot(k),t(u=>u.filter(d=>d.id!==k)),n({message:"Slot removed"})}catch(u){const d=(u==null?void 0:u.message)||"";d.includes("409")||d.toLowerCase().includes("booked")?n({message:"This slot has already been booked and cannot be removed.",type:"error"}):n({message:"Could not remove that slot. Please try again.",type:"error"})}},g=e.reduce((k,u)=>((k[u.date]=k[u.date]||[]).push(u),k),{}),j=Object.keys(g).sort();return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Availability"}),i.jsx("p",{children:"Control when clients can book a session with you."})]}),i.jsxs("div",{className:"avail-intro",children:[i.jsx("strong",{children:"How this works:"})," Pick a day and the hours you're free. We'll automatically create one bookable time slot for every session in that window. Those open slots will appear on your website for clients to choose from — when someone books one, it shows up here as a new booking."]}),i.jsxs("div",{className:"avail-form-card",children:[i.jsx("h3",{children:"Open Up a Day"}),i.jsx("p",{className:"avail-section-hint",children:"Tell us the date and the hours you're available. We'll take care of splitting it into individual appointment slots."}),i.jsxs("div",{className:"avail-form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"What day are you available?"}),i.jsx("input",{type:"date",min:l,value:o.date,onChange:k=>s(u=>({...u,date:k.target.value}))})]}),i.jsxs("div",{className:"avail-form-inline",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Available from"}),i.jsx("input",{type:"time",value:o.fromTime,onChange:k=>s(u=>({...u,fromTime:k.target.value}))}),i.jsx("div",{className:"avail-field-hint",children:"The earliest you can start a session"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Available until"}),i.jsx("input",{type:"time",value:o.toTime,onChange:k=>s(u=>({...u,toTime:k.target.value}))}),i.jsx("div",{className:"avail-field-hint",children:"The latest a session should end"})]})]}),i.jsxs("div",{className:"avail-form-inline",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"How long is each session?"}),i.jsxs("select",{value:o.durationMinutes,onChange:k=>s(u=>({...u,durationMinutes:Number(k.target.value)})),children:[i.jsx("option",{value:30,children:"30 minutes"}),i.jsx("option",{value:60,children:"60 minutes (1 hour)"}),i.jsx("option",{value:90,children:"90 minutes (1.5 hours)"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Add a note (optional)"}),i.jsx("input",{type:"text",placeholder:"e.g. Leadership coaching only",maxLength:100,value:o.label,onChange:k=>s(u=>({...u,label:k.target.value}))})]})]}),o.fromTime&&o.toTime&&m.length>0&&i.jsxs("div",{className:"avail-preview",children:[i.jsxs("strong",{children:[m.length," session",m.length!==1?"s":""," will open:"]})," ",m.map(an).join("  ·  ")]}),o.fromTime&&o.toTime&&m.length===0&&i.jsxs("div",{className:"avail-preview",style:{borderColor:"var(--red)",background:"var(--red-dim)"},children:["The time range is too short for even one session at ",o.durationMinutes," minutes. Try a wider window or shorter session length."]}),i.jsx("button",{className:"btn-primary",onClick:f,disabled:c||!x,children:c?"Opening slots…":`Open ${m.length>0?m.length+" slot"+(m.length!==1?"s":""):"Slots"}`})]})]}),j.length===0?i.jsxs("div",{className:"avail-empty",children:[i.jsx("div",{className:"avail-empty-icon",children:T.calendar}),i.jsx("strong",{children:"No open slots yet"}),i.jsxs("p",{children:["Use the form above to pick a day and open your available hours.",i.jsx("br",{}),"Your clients will see those times on the website and can book directly."]})]}):j.map(k=>i.jsxs("div",{className:"avail-date-group",children:[i.jsx("div",{className:"avail-date-header",children:Gr(k)}),g[k].map(u=>i.jsxs("div",{className:"avail-slot-row",children:[i.jsx("span",{className:"avail-slot-time",children:an(u.startTime)}),i.jsxs("span",{className:"avail-slot-duration",children:[u.durationMinutes," min"]}),i.jsx("span",{className:"avail-slot-label",children:u.label||""}),u.isBooked?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"status-badge status-approved",style:{flexShrink:0},children:"Booked"}),u.bookedBy&&i.jsxs("span",{className:"avail-slot-booked-by",onClick:()=>{a(u.bookingId),r("booking-detail")},children:[u.bookedBy," →"]})]}):i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"status-badge status-new",style:{flexShrink:0},children:"Open"}),i.jsx("span",{style:{flex:1}}),i.jsx("button",{className:"btn-slot-delete",onClick:()=>v(u.id),title:"Remove this slot",children:T.trash})]})]},u.id))]},k))]})}const _f=[{id:"auto",label:"Auto",swatch:{header:"#141820",sidebar:"#141820",content:"#0C0F14",card:"#1A1F2B",accent:"#C8A84E"}},{id:"dark",label:"Dark",swatch:{header:"#141820",sidebar:"#141820",content:"#0C0F14",card:"#1A1F2B",accent:"#C8A84E"}},{id:"light",label:"Light",swatch:{header:"#FFFFFF",sidebar:"#FFFFFF",content:"#F0F2F7",card:"#FFFFFF",accent:"#A8862A"}},{id:"forest",label:"Forest",swatch:{header:"#111C14",sidebar:"#111C14",content:"#0D1510",card:"#172019",accent:"#7EC87A"}},{id:"ocean",label:"Ocean",swatch:{header:"#0E1E36",sidebar:"#0E1E36",content:"#0A1628",card:"#132743",accent:"#38BDF8"}},{id:"sand",label:"Sand",swatch:{header:"#F2EDE4",sidebar:"#F2EDE4",content:"#FAF7F2",card:"#FFFFFF",accent:"#C06030"}}];function Lf({addToast:e,appConfig:t}){const[n,r]=N.useState(""),[a,l]=N.useState(""),[o,s]=N.useState(""),[c,p]=N.useState(!1),m=async f=>{if(f.preventDefault(),!n){e({message:"Current password is required",type:"error"});return}if(a.length<8){e({message:"New password must be at least 8 characters",type:"error"});return}if(a!==o){e({message:"New passwords don't match",type:"error"});return}p(!0);try{await A.changePassword(n,a),e({message:"Password updated successfully"}),r(""),l(""),s("")}catch(v){const g=((v==null?void 0:v.message)||"").includes("401")||((v==null?void 0:v.message)||"").toLowerCase().includes("incorrect")?"Current password is incorrect":"Failed to update password. Please try again.";e({message:g,type:"error"})}finally{p(!1)}},x=(t==null?void 0:t.support_email)||"support@example.com";return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Settings"}),i.jsx("p",{children:"Manage your account preferences"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Change Password"}),i.jsx("p",{className:"settings-desc",children:"Update your admin login password. Once changed, use the new password to log in. Must be at least 8 characters."}),i.jsxs("form",{className:"settings-form",onSubmit:m,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Current Password"}),i.jsx("input",{type:"password",className:"form-input",value:n,onChange:f=>r(f.target.value),autoComplete:"current-password",placeholder:"Enter your current password"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"New Password"}),i.jsx("input",{type:"password",className:"form-input",value:a,onChange:f=>l(f.target.value),autoComplete:"new-password",placeholder:"At least 8 characters"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Confirm New Password"}),i.jsx("input",{type:"password",className:"form-input",value:o,onChange:f=>s(f.target.value),autoComplete:"new-password",placeholder:"Repeat your new password"})]}),i.jsx("button",{type:"submit",className:"btn-primary",disabled:c,children:c?"Saving...":"Update Password"})]})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"About"}),i.jsxs("div",{className:"settings-info-row",children:[i.jsx("span",{className:"settings-info-label",children:"Platform"}),i.jsx("span",{className:"settings-info-value",children:"Admin Portal"})]}),i.jsxs("div",{className:"settings-info-row",children:[i.jsx("span",{className:"settings-info-label",children:"Version"}),i.jsx("span",{className:"settings-info-value",children:"1.0.0"})]}),i.jsxs("div",{className:"settings-info-row",children:[i.jsx("span",{className:"settings-info-label",children:"Support"}),i.jsx("a",{href:`mailto:${x}`,style:{color:"var(--accent)",fontSize:14},children:x})]})]})]})}function pn({items:e,onChange:t,placeholder:n,validateItem:r}){const[a,l]=N.useState(""),o=()=>{const s=a.trim();if(s){if(r){const c=r(s);if(c){alert(c);return}}e.includes(s)||t([...e,s]),l("")}};return i.jsxs("div",{className:"wizard-list-editor",children:[i.jsxs("div",{className:"wizard-pills",children:[e.map(s=>i.jsxs("div",{className:"wizard-pill",children:[i.jsx("span",{children:s}),i.jsx("button",{className:"wizard-pill-remove",onClick:()=>t(e.filter(c=>c!==s)),children:T.x})]},s)),e.length===0&&i.jsx("span",{style:{fontSize:13,color:"var(--text-muted)"},children:"No items yet."})]}),i.jsxs("div",{className:"wizard-add-row",children:[i.jsx("input",{className:"form-input",placeholder:n||"Add item...",value:a,onChange:s=>l(s.target.value),onKeyDown:s=>s.key==="Enter"&&(s.preventDefault(),o())}),i.jsxs("button",{className:"wizard-add-btn",onClick:o,children:[T.plus," Add"]})]})]})}const Dn=["Welcome","Logo","Services","Categories","Contact Info","Allowed Origins","Review & Finish"];function Tf({onComplete:e,onSkip:t,addToast:n}){const[r,a]=N.useState(0),[l,o]=N.useState(!1),[s,c]=N.useState({company_name:"",company_tagline:"",company_logo:"",services:[...Ed],categories:[...Zl],support_email:"",company_website:"",company_phone:"",allowed_origins:[]}),p=(g,j)=>c(k=>({...k,[g]:j})),m=g=>{const j=g.target.files[0];if(!j)return;if(j.size>2*1024*1024){n({message:"Logo must be under 2MB",type:"error"});return}const k=new FileReader;k.onload=u=>p("company_logo",u.target.result),k.readAsDataURL(j)},x=async()=>{o(!0);try{await A.saveConfig({...s,setup_complete:"1"}),e()}catch{n({message:"Failed to save setup. Please try again.",type:"error"})}finally{o(!1)}},f=r===Dn.length-1;let v;return r===0?v=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("div",{className:"wizard-info-banner",children:"Welcome! Let's set up your admin portal in a few quick steps. You can always change these settings later under Customize in the sidebar."}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Company / Organization Name"}),i.jsx("input",{className:"form-input",value:s.company_name,onChange:g=>p("company_name",g.target.value),placeholder:"e.g. Acme Corp"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tagline (optional)"}),i.jsx("input",{className:"form-input",value:s.company_tagline,onChange:g=>p("company_tagline",g.target.value),placeholder:"e.g. Veteran-Led Leadership Solutions"})]})]}):r===1?v=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"Upload your logo. It will appear in the admin sidebar. Max 2MB (PNG, JPG, SVG)."}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Logo File"}),i.jsx("input",{type:"file",className:"form-input",accept:"image/*",onChange:m})]}),s.company_logo&&i.jsx("div",{className:"wizard-logo-preview",children:i.jsx("img",{src:s.company_logo,alt:"Logo preview"})})]}):r===2?v=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"These are the services you offer. They appear in booking forms for clients to choose from."}),i.jsx(pn,{items:s.services,onChange:g=>p("services",g),placeholder:"Add a service..."}),s.services.length===0&&i.jsx("div",{className:"wizard-info-banner",style:{marginTop:8},children:"At least one service is recommended for booking forms."})]}):r===3?v=i.jsxs("div",{className:"wizard-step-content",children:[i.jsx("p",{style:{fontSize:14,color:"var(--text-secondary)"},children:"Categories group your clients (e.g. Military, Federal, Corporate). Used in booking and contact filters."}),i.jsx(pn,{items:s.categories,onChange:g=>p("categories",g),placeholder:"Add a category..."})]}):r===4?v=i.jsxs("div",{className:"wizard-step-content",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Support Email"}),i.jsx("input",{className:"form-input",type:"email",value:s.support_email,onChange:g=>p("support_email",g.target.value),placeholder:"e.g. support@yourcompany.com"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Website URL (optional)"}),i.jsx("input",{className:"form-input",value:s.company_website,onChange:g=>p("company_website",g.target.value),placeholder:"e.g. https://yourcompany.com"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Phone (optional)"}),i.jsx("input",{className:"form-input",value:s.company_phone,onChange:g=>p("company_phone",g.target.value),placeholder:"e.g. +1 (555) 000-0000"})]})]}):r===5?v=i.jsxs("div",{className:"wizard-step-content",children:[i.jsxs("div",{className:"origins-info",children:[i.jsx("strong",{children:"CORS Allowed Origins"})," — Add the domain(s) of your public website that will use the booking/contact API. Example: ",i.jsx("code",{children:"https://yoursite.com"}),". Changes take effect within 60 seconds."]}),i.jsx(pn,{items:s.allowed_origins,onChange:g=>p("allowed_origins",g),placeholder:"https://your-site.com",validateItem:g=>/^https?:\/\/.+/.test(g)?null:"Must be a valid URL starting with http:// or https://"})]}):r===6&&(v=i.jsxs("div",{className:"wizard-step-content",children:[i.jsxs("div",{className:"wizard-review-section",children:[i.jsx("div",{className:"wizard-review-label",children:"Company"}),i.jsxs("div",{className:"wizard-review-value",children:[s.company_name,s.company_tagline?` — ${s.company_tagline}`:""]})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsxs("div",{className:"wizard-review-label",children:["Services (",s.services.length,")"]}),i.jsx("div",{className:"wizard-review-value",children:s.services.join(", ")||"None"})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsxs("div",{className:"wizard-review-label",children:["Categories (",s.categories.length,")"]}),i.jsx("div",{className:"wizard-review-value",children:s.categories.join(", ")||"None"})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsx("div",{className:"wizard-review-label",children:"Contact"}),i.jsxs("div",{className:"wizard-review-value",children:[s.support_email||"Not set",s.company_website?` · ${s.company_website}`:""]})]}),i.jsxs("div",{className:"wizard-review-section",children:[i.jsxs("div",{className:"wizard-review-label",children:["Allowed Origins (",s.allowed_origins.length,")"]}),i.jsx("div",{className:"wizard-review-value",children:s.allowed_origins.join(", ")||"None"})]})]})),i.jsx("div",{className:"tutorial-overlay",children:i.jsxs("div",{className:"tutorial-card",style:{maxWidth:560,width:"100%"},children:[i.jsxs("div",{className:"tutorial-step-num",children:["Step ",r+1," of ",Dn.length," — ",Dn[r]]}),i.jsx("div",{className:"tutorial-title",style:{marginBottom:20,textAlign:"left"},children:r===0?`Welcome to ${s.company_name||"Your Portal"}`:Dn[r]}),v,i.jsx("div",{className:"tutorial-dots",style:{marginTop:24},children:Dn.map((g,j)=>i.jsx("div",{className:`tutorial-dot${j===r?" active":""}`},j))}),i.jsxs("div",{className:"tutorial-btn-row",children:[i.jsxs("div",{style:{display:"flex",gap:10,width:"100%"},children:[r>0&&i.jsx("button",{className:"tutorial-next",style:{background:"var(--bg-input)",color:"var(--text-primary)",border:"1px solid var(--border)",flex:"0 0 auto",width:"auto",padding:"14px 20px"},onClick:()=>a(g=>g-1),children:"← Back"}),i.jsx("button",{className:"tutorial-next",style:{flex:1},onClick:f?x:()=>a(g=>g+1),disabled:l,children:f?l?"Saving...":"Finish Setup →":"Next →"})]}),i.jsx("button",{className:"wizard-skip-link",onClick:t,children:"Skip setup for now"})]})]})})}function Ff({addToast:e}){const[t,n]=uf();return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Appearance"}),i.jsx("p",{children:"Choose how the dashboard looks"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Theme"}),i.jsxs("p",{className:"settings-desc",children:["Choose how the dashboard looks. ",i.jsx("strong",{children:"Auto"})," follows your device's light or dark mode setting automatically."]}),i.jsx("div",{className:"theme-grid",children:_f.map(r=>i.jsxs("div",{className:`theme-option${t===r.id?" active":""}`,onClick:()=>n(r.id),children:[i.jsxs("div",{className:"theme-swatch",children:[i.jsxs("div",{className:"theme-swatch-header",style:{background:r.swatch.header,borderBottom:`2px solid ${r.swatch.accent}`},children:[i.jsx("div",{className:"theme-swatch-dot",style:{background:r.swatch.accent}}),i.jsx("div",{className:"theme-swatch-dot",style:{background:r.swatch.accent}})]}),i.jsxs("div",{className:"theme-swatch-body",style:{background:r.swatch.content},children:[i.jsx("div",{className:"theme-swatch-sidebar",style:{background:r.swatch.sidebar}}),i.jsxs("div",{className:"theme-swatch-content",children:[i.jsx("div",{className:"theme-swatch-card",style:{background:r.swatch.card}}),i.jsx("div",{className:"theme-swatch-card",style:{background:r.swatch.card}})]})]})]}),i.jsx("span",{className:"theme-label",children:r.label})]},r.id))})]})]})}function Pf({appConfig:e,setAppConfig:t,addToast:n}){const[r,a]=N.useState((e==null?void 0:e.company_name)||""),[l,o]=N.useState((e==null?void 0:e.company_tagline)||""),[s,c]=N.useState((e==null?void 0:e.company_logo)||""),[p,m]=N.useState(!1),x=v=>{const g=v.target.files[0];if(!g)return;if(g.size>2*1024*1024){n({message:"Logo must be under 2MB",type:"error"});return}const j=new FileReader;j.onload=k=>c(k.target.result),j.readAsDataURL(g)},f=async()=>{m(!0);try{await A.saveConfig({company_name:r,company_tagline:l,company_logo:s}),t(v=>({...v,company_name:r,company_tagline:l,company_logo:s})),n({message:"Branding saved"})}catch{n({message:"Failed to save branding",type:"error"})}finally{m(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Branding"}),i.jsx("p",{children:"Set your company name, tagline, and logo"})]}),i.jsx("div",{className:"settings-section",children:i.jsxs("div",{className:"settings-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Company Name"}),i.jsx("input",{className:"form-input",value:r,onChange:v=>a(v.target.value),placeholder:"e.g. Acme Corp"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Tagline"}),i.jsx("input",{className:"form-input",value:l,onChange:v=>o(v.target.value),placeholder:"e.g. Veteran-Led Leadership Solutions"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Logo (max 2MB)"}),i.jsx("input",{type:"file",className:"form-input",accept:"image/*",onChange:x}),s&&i.jsxs("div",{className:"logo-preview-wrap",children:[i.jsx("img",{src:s,alt:"Logo preview"}),i.jsx("button",{className:"logo-remove-btn",onClick:()=>c(""),children:"Remove"})]})]}),i.jsx("button",{className:"btn-primary",onClick:f,disabled:p,children:p?"Saving...":"Save Branding"})]})})]})}function Df({appConfig:e,setAppConfig:t,addToast:n}){const[r,a]=N.useState((e==null?void 0:e.services)||Ed),[l,o]=N.useState(!1),s=async()=>{o(!0);try{await A.saveConfig({services:r}),t(c=>({...c,services:r})),n({message:"Services saved"})}catch{n({message:"Failed to save services",type:"error"})}finally{o(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Services"}),i.jsx("p",{children:"Manage the services available for booking requests"})]}),i.jsxs("div",{className:"settings-section",children:[r.length===0&&i.jsx("div",{className:"wizard-info-banner",style:{marginBottom:16},children:"At least one service is recommended for booking forms to work correctly."}),i.jsx(pn,{items:r,onChange:a,placeholder:"Add a service..."}),i.jsx("div",{className:"page-actions",style:{marginTop:20},children:i.jsx("button",{className:"btn-primary",onClick:s,disabled:l,children:l?"Saving...":"Save Services"})})]})]})}function Af({appConfig:e,setAppConfig:t,addToast:n}){const[r,a]=N.useState((e==null?void 0:e.categories)||Zl),[l,o]=N.useState(!1),s=async()=>{o(!0);try{await A.saveConfig({categories:r}),t(c=>({...c,categories:r})),n({message:"Categories saved"})}catch{n({message:"Failed to save categories",type:"error"})}finally{o(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Categories"}),i.jsx("p",{children:"Manage the client sector categories (e.g. Military, Federal, Corporate)"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsx(pn,{items:r,onChange:a,placeholder:"Add a category..."}),i.jsx("div",{className:"page-actions",style:{marginTop:20},children:i.jsx("button",{className:"btn-primary",onClick:s,disabled:l,children:l?"Saving...":"Save Categories"})})]})]})}const da="RESET SETUP";function Mf({addToast:e,onResetComplete:t}){const[n,r]=N.useState(""),[a,l]=N.useState(!1),o=n===da,s=async()=>{if(o){l(!0);try{await A.resetSetup(),e({message:"Setup reset. The wizard will appear on next login."}),t()}catch{e({message:"Failed to reset setup",type:"error"})}finally{l(!1)}}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Reset Setup Wizard"}),i.jsx("p",{children:"Restart the first-run setup wizard"})]}),i.jsxs("div",{className:"danger-zone-card",children:[i.jsxs("div",{className:"danger-zone-header",children:[i.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{color:"#e53e3e",flexShrink:0,marginTop:1},children:[i.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),i.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),i.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:"Danger Zone"}),i.jsxs("p",{children:["This will erase the setup completion record and show the setup wizard the next time any admin logs in. Your data (bookings, contacts, services, branding) will ",i.jsx("strong",{children:"not"}),' be deleted — only the "setup complete" flag is cleared.']})]})]}),i.jsxs("div",{className:"danger-zone-confirm",children:[i.jsxs("label",{children:["To confirm, type ",i.jsx("code",{children:da})," below:"]}),i.jsx("input",{className:"danger-zone-input",type:"text",value:n,onChange:c=>r(c.target.value),placeholder:da,autoComplete:"off",spellCheck:!1}),i.jsx("button",{className:"btn-danger",disabled:!o||a,onClick:s,children:a?"Resetting...":"Reset Setup Wizard"})]})]})]})}function Rf({appConfig:e,setAppConfig:t,addToast:n}){const[r,a]=N.useState((e==null?void 0:e.allowed_origins)||[]),[l,o]=N.useState(!1),s=async()=>{o(!0);try{await A.saveConfig({allowed_origins:r}),t(c=>({...c,allowed_origins:r})),n({message:"Allowed origins saved. Changes take effect within 60 seconds."})}catch{n({message:"Failed to save origins",type:"error"})}finally{o(!1)}};return i.jsxs("div",{children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"Allowed Origins"}),i.jsx("p",{children:"Control which domains can access the public API"})]}),i.jsxs("div",{className:"settings-section",children:[i.jsxs("div",{className:"origins-info",children:[i.jsx("strong",{children:"CORS Allowed Origins"})," — Add the domain(s) of your public website that will call the booking/contact API. Example: ",i.jsx("code",{children:"https://yoursite.com"}),". The dev origins (",i.jsx("code",{children:"localhost:3000"}),", ",i.jsx("code",{children:"localhost:5173"}),") are always allowed. Changes take effect within 60 seconds — no restart needed."]}),i.jsx(pn,{items:r,onChange:a,placeholder:"https://your-site.com",validateItem:c=>/^https?:\/\/.+/.test(c)?null:"Must be a valid URL starting with http:// or https://"}),i.jsx("div",{className:"page-actions",style:{marginTop:20},children:i.jsx("button",{className:"btn-primary",onClick:s,disabled:l,children:l?"Saving...":"Save Origins"})})]})]})}function Bf({addToast:e}){const[t,n]=N.useState(null),[r,a]=N.useState(!0),[l,o]=N.useState("js"),[s,c]=N.useState(null);N.useEffect(()=>{A.getDocs().then(n).catch(()=>e({message:"Failed to load API docs",type:"error"})).finally(()=>a(!1))},[]);const p=f=>{navigator.clipboard.writeText(f).then(()=>e({message:"Copied to clipboard"}),()=>e({message:"Copy failed",type:"error"}))},m=()=>{if(!t)return;const f=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),v=URL.createObjectURL(f),g=document.createElement("a");g.href=v,g.download="api-docs.json",g.click(),URL.revokeObjectURL(v)};if(r)return i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"API Documentation"}),i.jsx("p",{children:"Loading..."})]});if(!t)return i.jsxs("div",{className:"page-header",children:[i.jsx("h2",{children:"API Documentation"}),i.jsx("p",{style:{color:"var(--red)"},children:"Failed to load documentation."})]});const x=f=>`api-docs-method-badge badge-${f.toLowerCase()}`;return i.jsxs("div",{children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{className:"api-docs-header",children:[i.jsxs("div",{children:[i.jsx("h2",{children:"API Documentation"}),i.jsxs("p",{className:"api-docs-generated",children:["Generated ",new Date(t.generatedAt).toLocaleString()]})]}),i.jsxs("button",{className:"api-docs-dl-btn",onClick:m,children:[T.download," Download JSON"]})]})}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Endpoints"}),i.jsxs("p",{className:"settings-desc",children:["Base URL: ",i.jsx("code",{children:t.baseUrl})]}),t.endpoints.map((f,v)=>i.jsxs("div",{className:"api-docs-endpoint",children:[i.jsxs("div",{className:"api-docs-endpoint-header",onClick:()=>c(s===v?null:v),children:[i.jsx("span",{className:x(f.method),children:f.method}),i.jsx("span",{className:"api-docs-path",children:f.path}),i.jsx("span",{className:"api-docs-desc",children:f.description})]}),s===v&&i.jsxs("div",{className:"api-docs-endpoint-body",children:[i.jsxs("p",{style:{fontSize:13,color:"var(--text-secondary)",marginTop:12},children:[i.jsx("strong",{children:"Auth:"})," ",f.auth]}),f.request&&i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:12,fontWeight:700},children:"REQUEST BODY"}),i.jsx("pre",{className:"api-docs-code-block",children:JSON.stringify(f.request,null,2)})]}),f.response&&i.jsxs(i.Fragment,{children:[i.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:12,fontWeight:700},children:"RESPONSE"}),i.jsx("pre",{className:"api-docs-code-block",children:JSON.stringify(f.response,null,2)})]})]})]},v))]}),i.jsxs("div",{className:"settings-section",children:[i.jsx("h3",{children:"Code Examples"}),i.jsx("div",{className:"api-docs-tabs",children:[{id:"js",label:"JavaScript"},{id:"contactFormHTML",label:"Contact Form HTML"},{id:"bookingFormHTML",label:"Booking Form HTML"}].map(f=>i.jsx("button",{className:`api-docs-tab${l===f.id?" active":""}`,onClick:()=>o(f.id),children:f.label},f.id))}),i.jsx("pre",{className:"api-docs-code-block",children:l==="js"?t.examples.jsSnippet:l==="contactFormHTML"?t.examples.contactFormHTML:t.examples.bookingFormHTML}),i.jsxs("button",{className:"api-docs-copy-btn",onClick:()=>p(l==="js"?t.examples.jsSnippet:l==="contactFormHTML"?t.examples.contactFormHTML:t.examples.bookingFormHTML),children:[T.copy," Copy"]})]})]})}const Mr=[{iconKey:"home",title:"Welcome to Your Dashboard",body:"This is your home base. At a glance you can see new booking requests, unread messages, and anything that needs your attention — all in one place."},{iconKey:"bookings",title:"Managing Bookings",body:"When someone on your website requests a consultation, it shows up here under Bookings. You can review the details, approve or decline the request, and add approved sessions to your calendar."},{iconKey:"inbox",title:"Your Inbox",body:"General messages and inquiries from the website land here. You can mark them as replied or archive them once you've followed up."},{iconKey:"clock",title:"Setting Your Availability",body:"This is how clients book sessions with you. Go to the Availability page, pick a day and your available hours, and we'll create the open time slots automatically. Clients see those slots on the website and choose a time."},{iconKey:"calendar",title:"Your Calendar",body:"Once you approve a booking and add it to your calendar, it shows up here. This gives you a clear view of your upcoming consultation schedule."},{iconKey:"mobile",title:"Install as an App",body:`You can add this dashboard to your phone or tablet's home screen so it opens like a regular app — no browser address bar, full screen.

iPhone/iPad: Tap the Share button (the box with an arrow), then tap "Add to Home Screen".

Android: Tap the three-dot menu in the top right, then tap "Add to Home Screen" or "Install App".`}];function Of({onDone:e}){const[t,n]=N.useState(0),r=Mr[t],a=t===Mr.length-1,l=()=>{a?e():n(s=>s+1)},o=async()=>{try{await A.completeTutorial()}catch{}e()};return i.jsx("div",{className:"tutorial-overlay",children:i.jsxs("div",{className:"tutorial-card",children:[i.jsx("div",{className:"tutorial-icon",children:T[r.iconKey]}),i.jsxs("div",{className:"tutorial-step-num",children:["Step ",t+1," of ",Mr.length]}),i.jsx("div",{className:"tutorial-title",children:r.title}),i.jsx("div",{className:"tutorial-body",style:{whiteSpace:"pre-line"},children:r.body}),i.jsx("div",{className:"tutorial-dots",children:Mr.map((s,c)=>i.jsx("div",{className:`tutorial-dot${c===t?" active":""}`},c))}),i.jsxs("div",{className:"tutorial-btn-row",children:[i.jsx("button",{className:"tutorial-next",onClick:l,children:a?"Got it, close →":"Next →"}),i.jsx("button",{className:"tutorial-no-show",onClick:o,children:"Don't show this again"})]})]})})}function If({onLogin:e}){const[t,n]=N.useState(""),[r,a]=N.useState(""),[l,o]=N.useState(""),[s,c]=N.useState(!1),p=async()=>{if(!t||!r){o("Please enter username and password.");return}c(!0),o("");try{const m=await A.login(t,r);e(m.tutorialComplete===!1,m.setupComplete===!0)}catch{o("Invalid credentials. Please try again.")}finally{c(!1)}};return i.jsx("div",{className:"login-page",children:i.jsxs("div",{className:"login-box",children:[i.jsxs("div",{className:"login-logo",children:[i.jsx("h1",{children:"Admin"}),i.jsx("p",{children:"Admin Portal"})]}),i.jsxs("div",{className:"login-card",children:[i.jsx("h2",{children:"Sign In"}),i.jsx("p",{className:"subtitle",children:"Access your consultation management dashboard"}),l&&i.jsx("div",{className:"login-error",children:l}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Username"}),i.jsx("input",{type:"text",placeholder:"Enter username",value:t,onChange:m=>{n(m.target.value),o("")},onKeyDown:m=>m.key==="Enter"&&p()})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Password"}),i.jsx("input",{type:"password",placeholder:"Enter password",value:r,onChange:m=>{a(m.target.value),o("")},onKeyDown:m=>m.key==="Enter"&&p()})]}),i.jsx("button",{className:"btn-primary",onClick:p,disabled:s,children:s?"Signing in…":"Sign In"})]})]})})}function $f(){const[e,t]=N.useState(A.hasToken()),[n,r]=N.useState(!1),[a,l]=N.useState(!1),[o,s]=N.useState(null),[c,p]=N.useState("dashboard"),[m,x]=N.useState([]),[f,v]=N.useState([]),[g,j]=N.useState([]),[k,u]=N.useState([]),[d,h]=N.useState(null),[w,C]=N.useState(null),[z,y]=N.useState(null),[b,M]=N.useState([]),[E,se]=N.useState(!1),[ee,Ge]=N.useState(""),[xr,Ri]=N.useState("all"),[bn,Sn]=N.useState("all"),[_,F]=N.useState(""),[P,Q]=N.useState("all");N.useEffect(()=>{e&&(A.getBookings().then(x).catch(()=>{}),A.getContacts().then(v).catch(()=>{}),A.getAvailability().then(j).catch(()=>{}),A.getAdminConfig().then(s).catch(()=>{}),A.getDeals().then(u).catch(()=>{}))},[e]);const D=({message:$,type:fe="success"})=>{const Ue=Date.now();M(Ae=>[...Ae,{id:Ue,message:$,type:fe}]),setTimeout(()=>M(Ae=>Ae.filter(Ad=>Ad.id!==Ue)),3500)},_t=async($,fe)=>{try{await A.updateBookingStatus($,fe),x(Ue=>Ue.map(Ae=>Ae.id===$?{...Ae,status:fe}:Ae))}catch{D({message:"Failed to update status",type:"error"})}},Xe=async $=>{await _t($,"on-calendar")},Nn=async($,fe)=>{try{await A.updateContactStatus($,fe),v(Ue=>Ue.map(Ae=>Ae.id===$?{...Ae,status:fe}:Ae))}catch{D({message:"Failed to update status",type:"error"})}},Ze=async $=>{try{await A.deleteBooking($),x(fe=>fe.filter(Ue=>Ue.id!==$)),D({message:"Booking deleted",type:"success"})}catch{D({message:"Failed to delete booking",type:"error"})}},Ht=async $=>{try{await A.deleteContact($),v(fe=>fe.filter(Ue=>Ue.id!==$)),D({message:"Message deleted",type:"success"})}catch{D({message:"Failed to delete message",type:"error"})}},Td=()=>{A.logout(),t(!1),r(!1),l(!1),s(null),x([]),v([]),j([]),u([]),p("dashboard")},Fd=m.find($=>$.id===w),Pd=f.find($=>$.id===z);if(!e)return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:ds}),i.jsx(If,{onLogin:($,fe)=>{t(!0),fe?$&&r(!0):l(!0)}})]});let J;if(c==="dashboard")J=i.jsx(jf,{bookings:m,contacts:f,setPage:p,setSelectedBooking:C,setSelectedContact:y});else if(c==="bookings")J=i.jsx(kf,{bookings:m,setPage:p,setSelectedBooking:C,searchTerm:ee,setSearchTerm:Ge,statusFilter:xr,setStatusFilter:Ri,categoryFilter:bn,setCategoryFilter:Sn,categories:o==null?void 0:o.categories});else if(c==="booking-detail")J=i.jsx(bf,{booking:Fd,onBack:()=>p("bookings"),onUpdateStatus:_t,onAddToCalendar:Xe,onDelete:Ze,addToast:D});else if(c==="contacts")J=i.jsx(Sf,{contacts:f,setPage:p,setSelectedContact:y,searchTerm:_,setSearchTerm:F,contactStatusFilter:P,setContactStatusFilter:Q});else if(c==="contact-detail")J=i.jsx(Nf,{contact:Pd,onBack:()=>p("contacts"),onUpdateStatus:Nn,onDelete:Ht,addToast:D});else if(c==="availability")J=i.jsx(Ef,{slots:g,setSlots:j,addToast:D,setPage:p,setSelectedBooking:C});else if(c==="calendar")J=i.jsx(Cf,{bookings:m,setPage:p,setSelectedBooking:C});else if(c==="settings")J=i.jsx(Lf,{addToast:D,appConfig:o});else if(c==="customize-branding")J=i.jsx(Pf,{appConfig:o,setAppConfig:s,addToast:D});else if(c==="customize-services")J=i.jsx(Df,{appConfig:o,setAppConfig:s,addToast:D});else if(c==="customize-categories")J=i.jsx(Af,{appConfig:o,setAppConfig:s,addToast:D});else if(c==="analytics")J=i.jsx(gf,{appConfig:o});else if(c==="customize-stages")J=i.jsx(vf,{appConfig:o,setAppConfig:s,addToast:D});else if(c==="customize-appearance")J=i.jsx(Ff,{addToast:D});else if(c==="advanced-origins")J=i.jsx(Rf,{appConfig:o,setAppConfig:s,addToast:D});else if(c==="advanced-docs")J=i.jsx(Bf,{addToast:D});else if(c==="advanced-reset")J=i.jsx(Mf,{addToast:D,onResetComplete:()=>{l(!0),p("dashboard")}});else if(c==="pipeline")J=i.jsx(mf,{deals:k,setDeals:u,appConfig:o,setPage:p,setSelectedDeal:h,addToast:D});else if(c==="deal-detail"){const $=k.find(fe=>fe.id===d);J=$?i.jsxs("div",{className:"detail-view",children:[i.jsxs("button",{className:"detail-back",onClick:()=>p("pipeline"),children:[T.back," Back to Pipeline"]}),i.jsxs("div",{className:"detail-card",children:[i.jsxs("div",{className:"detail-header",children:[i.jsxs("div",{children:[i.jsx("div",{className:"detail-name",children:$.title}),i.jsx("div",{className:"detail-org",children:$.contactName||$.bookingName||""})]}),i.jsx("span",{style:{fontSize:22,fontWeight:800,color:"var(--accent)"},children:ur($.value)})]}),i.jsx(Jl,{entityType:"deal",entityId:$.id,addToast:D})]})]}):i.jsx("div",{className:"empty-state",children:i.jsx("p",{children:"Deal not found."})})}const Dd=(o==null?void 0:o.company_name)||"Admin";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:ds}),i.jsxs("div",{className:"app-layout",children:[i.jsxs("div",{className:"mobile-header",children:[i.jsx("h1",{children:Dd}),i.jsx("button",{className:"mobile-menu-btn",onClick:()=>se(!0),children:T.menu})]}),i.jsx(wf,{page:c,setPage:p,bookings:m,contacts:f,isOpen:E,onClose:()=>se(!1),onLogout:Td,onShowTutorial:()=>r(!0),appConfig:o}),i.jsx("main",{className:"main-content",children:J}),i.jsx(yf,{toasts:b}),a&&i.jsx(Tf,{onComplete:()=>{l(!1),A.getAdminConfig().then(s).catch(()=>{})},onSkip:()=>l(!1),addToast:D}),!a&&n&&i.jsx(Of,{onDone:()=>r(!1)})]})]})}class Wf extends N.Component{constructor(t){super(t),this.state={error:null}}static getDerivedStateFromError(t){return{error:t}}render(){return this.state.error?i.jsxs("div",{style:{padding:40,fontFamily:"monospace",color:"#F87171",background:"#0C0F14",minHeight:"100vh"},children:[i.jsx("h2",{style:{color:"#C8A84E",marginBottom:16},children:"Something went wrong"}),i.jsx("pre",{style:{whiteSpace:"pre-wrap",fontSize:13},children:String(this.state.error)}),i.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:24,background:"#C8A84E",color:"#0C0F14",border:"none",padding:"10px 20px",borderRadius:8,fontWeight:700,cursor:"pointer"},children:"Reload"})]}):this.props.children}}Nd(document.getElementById("root")).render(i.jsx(N.StrictMode,{children:i.jsx(Wf,{children:i.jsx($f,{})})}));
