function hj(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pj(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var xk={exports:{}},H0={},wk={exports:{}},tn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh=Symbol.for("react.element"),gj=Symbol.for("react.portal"),mj=Symbol.for("react.fragment"),vj=Symbol.for("react.strict_mode"),yj=Symbol.for("react.profiler"),xj=Symbol.for("react.provider"),wj=Symbol.for("react.context"),_j=Symbol.for("react.forward_ref"),bj=Symbol.for("react.suspense"),Sj=Symbol.for("react.memo"),Cj=Symbol.for("react.lazy"),gb=Symbol.iterator;function kj(e){return e===null||typeof e!="object"?null:(e=gb&&e[gb]||e["@@iterator"],typeof e=="function"?e:null)}var _k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bk=Object.assign,Sk={};function Gf(e,t,n){this.props=e,this.context=t,this.refs=Sk,this.updater=n||_k}Gf.prototype.isReactComponent={};Gf.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gf.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ck(){}Ck.prototype=Gf.prototype;function Ay(e,t,n){this.props=e,this.context=t,this.refs=Sk,this.updater=n||_k}var Ry=Ay.prototype=new Ck;Ry.constructor=Ay;bk(Ry,Gf.prototype);Ry.isPureReactComponent=!0;var mb=Array.isArray,kk=Object.prototype.hasOwnProperty,Py={current:null},Ek={key:!0,ref:!0,__self:!0,__source:!0};function Tk(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)kk.call(t,r)&&!Ek.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Sh,type:e,key:o,ref:a,props:i,_owner:Py.current}}function Ej(e,t){return{$$typeof:Sh,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $y(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sh}function Tj(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vb=/\/+/g;function Um(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tj(""+e.key):t.toString(36)}function Ep(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Sh:case gj:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Um(a,0):r,mb(i)?(n="",e!=null&&(n=e.replace(vb,"$&/")+"/"),Ep(i,t,n,"",function(f){return f})):i!=null&&($y(i)&&(i=Ej(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(vb,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",mb(e))for(var u=0;u<e.length;u++){o=e[u];var c=r+Um(o,u);a+=Ep(o,t,n,c,i)}else if(c=kj(e),typeof c=="function")for(e=c.call(e),u=0;!(o=e.next()).done;)o=o.value,c=r+Um(o,u++),a+=Ep(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ip(e,t,n){if(e==null)return e;var r=[],i=0;return Ep(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Aj(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var io={current:null},Tp={transition:null},Rj={ReactCurrentDispatcher:io,ReactCurrentBatchConfig:Tp,ReactCurrentOwner:Py};tn.Children={map:ip,forEach:function(e,t,n){ip(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ip(e,function(){t++}),t},toArray:function(e){return ip(e,function(t){return t})||[]},only:function(e){if(!$y(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};tn.Component=Gf;tn.Fragment=mj;tn.Profiler=yj;tn.PureComponent=Ay;tn.StrictMode=vj;tn.Suspense=bj;tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rj;tn.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bk({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Py.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)kk.call(t,c)&&!Ek.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Sh,type:e.type,key:i,ref:o,props:r,_owner:a}};tn.createContext=function(e){return e={$$typeof:wj,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xj,_context:e},e.Consumer=e};tn.createElement=Tk;tn.createFactory=function(e){var t=Tk.bind(null,e);return t.type=e,t};tn.createRef=function(){return{current:null}};tn.forwardRef=function(e){return{$$typeof:_j,render:e}};tn.isValidElement=$y;tn.lazy=function(e){return{$$typeof:Cj,_payload:{_status:-1,_result:e},_init:Aj}};tn.memo=function(e,t){return{$$typeof:Sj,type:e,compare:t===void 0?null:t}};tn.startTransition=function(e){var t=Tp.transition;Tp.transition={};try{e()}finally{Tp.transition=t}};tn.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};tn.useCallback=function(e,t){return io.current.useCallback(e,t)};tn.useContext=function(e){return io.current.useContext(e)};tn.useDebugValue=function(){};tn.useDeferredValue=function(e){return io.current.useDeferredValue(e)};tn.useEffect=function(e,t){return io.current.useEffect(e,t)};tn.useId=function(){return io.current.useId()};tn.useImperativeHandle=function(e,t,n){return io.current.useImperativeHandle(e,t,n)};tn.useInsertionEffect=function(e,t){return io.current.useInsertionEffect(e,t)};tn.useLayoutEffect=function(e,t){return io.current.useLayoutEffect(e,t)};tn.useMemo=function(e,t){return io.current.useMemo(e,t)};tn.useReducer=function(e,t,n){return io.current.useReducer(e,t,n)};tn.useRef=function(e){return io.current.useRef(e)};tn.useState=function(e){return io.current.useState(e)};tn.useSyncExternalStore=function(e,t,n){return io.current.useSyncExternalStore(e,t,n)};tn.useTransition=function(){return io.current.useTransition()};tn.version="18.2.0";wk.exports=tn;var we=wk.exports;const vt=Rc(we),Kv=hj({__proto__:null,default:vt},[we]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pj=we,$j=Symbol.for("react.element"),Oj=Symbol.for("react.fragment"),jj=Object.prototype.hasOwnProperty,Ij=Pj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lj={key:!0,ref:!0,__self:!0,__source:!0};function Ak(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)jj.call(t,r)&&!Lj.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$j,type:e,key:o,ref:a,props:i,_owner:Ij.current}}H0.Fragment=Oj;H0.jsx=Ak;H0.jsxs=Ak;xk.exports=H0;var m=xk.exports,Rk={exports:{}},is={},Pk={exports:{}},$k={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(ie,te){var xe=ie.length;ie.push(te);e:for(;0<xe;){var $e=xe-1>>>1,Ee=ie[$e];if(0<i(Ee,te))ie[$e]=te,ie[xe]=Ee,xe=$e;else break e}}function n(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var te=ie[0],xe=ie.pop();if(xe!==te){ie[0]=xe;e:for(var $e=0,Ee=ie.length,_e=Ee>>>1;$e<_e;){var M=2*($e+1)-1,A=ie[M],T=M+1,V=ie[T];if(0>i(A,xe))T<Ee&&0>i(V,A)?(ie[$e]=V,ie[T]=xe,$e=T):(ie[$e]=A,ie[M]=xe,$e=M);else if(T<Ee&&0>i(V,xe))ie[$e]=V,ie[T]=xe,$e=T;else break e}}return te}function i(ie,te){var xe=ie.sortIndex-te.sortIndex;return xe!==0?xe:ie.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var c=[],f=[],v=1,b=null,x=3,g=!1,S=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(ie){for(var te=n(f);te!==null;){if(te.callback===null)r(f);else if(te.startTime<=ie)r(f),te.sortIndex=te.expirationTime,t(c,te);else break;te=n(f)}}function I(ie){if(w=!1,E(ie),!S)if(n(c)!==null)S=!0,Ce(k);else{var te=n(f);te!==null&&ce(I,te.startTime-ie)}}function k(ie,te){S=!1,w&&(w=!1,$(O),O=-1),g=!0;var xe=x;try{for(E(te),b=n(c);b!==null&&(!(b.expirationTime>te)||ie&&!K());){var $e=b.callback;if(typeof $e=="function"){b.callback=null,x=b.priorityLevel;var Ee=$e(b.expirationTime<=te);te=e.unstable_now(),typeof Ee=="function"?b.callback=Ee:b===n(c)&&r(c),E(te)}else r(c);b=n(c)}if(b!==null)var _e=!0;else{var M=n(f);M!==null&&ce(I,M.startTime-te),_e=!1}return _e}finally{b=null,x=xe,g=!1}}var D=!1,R=null,O=-1,G=5,q=-1;function K(){return!(e.unstable_now()-q<G)}function ee(){if(R!==null){var ie=e.unstable_now();q=ie;var te=!0;try{te=R(!0,ie)}finally{te?ae():(D=!1,R=null)}}else D=!1}var ae;if(typeof y=="function")ae=function(){y(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Re=le.port2;le.port1.onmessage=ee,ae=function(){Re.postMessage(null)}}else ae=function(){j(ee,0)};function Ce(ie){R=ie,D||(D=!0,ae())}function ce(ie,te){O=j(function(){ie(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ie){ie.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,Ce(k))},e.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<ie?Math.floor(1e3/ie):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(ie){switch(x){case 1:case 2:case 3:var te=3;break;default:te=x}var xe=x;x=te;try{return ie()}finally{x=xe}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ie,te){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var xe=x;x=ie;try{return te()}finally{x=xe}},e.unstable_scheduleCallback=function(ie,te,xe){var $e=e.unstable_now();switch(typeof xe=="object"&&xe!==null?(xe=xe.delay,xe=typeof xe=="number"&&0<xe?$e+xe:$e):xe=$e,ie){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=xe+Ee,ie={id:v++,callback:te,priorityLevel:ie,startTime:xe,expirationTime:Ee,sortIndex:-1},xe>$e?(ie.sortIndex=xe,t(f,ie),n(c)===null&&ie===n(f)&&(w?($(O),O=-1):w=!0,ce(I,xe-$e))):(ie.sortIndex=Ee,t(c,ie),S||g||(S=!0,Ce(k))),ie},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(ie){var te=x;return function(){var xe=x;x=te;try{return ie.apply(this,arguments)}finally{x=xe}}}})($k);Pk.exports=$k;var Uj=Pk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ok=we,ts=Uj;function He(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jk=new Set,Hd={};function Pc(e,t){Ef(e,t),Ef(e+"Capture",t)}function Ef(e,t){for(Hd[e]=t,e=0;e<t.length;e++)jk.add(t[e])}var vl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qv=Object.prototype.hasOwnProperty,Mj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yb={},xb={};function Dj(e){return qv.call(xb,e)?!0:qv.call(yb,e)?!1:Mj.test(e)?xb[e]=!0:(yb[e]=!0,!1)}function Fj(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function zj(e,t,n,r){if(t===null||typeof t>"u"||Fj(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function oo(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var _i={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_i[e]=new oo(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_i[t]=new oo(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_i[e]=new oo(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_i[e]=new oo(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_i[e]=new oo(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_i[e]=new oo(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_i[e]=new oo(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_i[e]=new oo(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_i[e]=new oo(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oy=/[\-:]([a-z])/g;function jy(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oy,jy);_i[t]=new oo(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oy,jy);_i[t]=new oo(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oy,jy);_i[t]=new oo(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_i[e]=new oo(e,1,!1,e.toLowerCase(),null,!1,!1)});_i.xlinkHref=new oo("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_i[e]=new oo(e,1,!1,e.toLowerCase(),null,!0,!0)});function Iy(e,t,n,r){var i=_i.hasOwnProperty(t)?_i[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(zj(t,n,i,r)&&(n=null),r||i===null?Dj(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var El=Ok.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,op=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Ly=Symbol.for("react.strict_mode"),Qv=Symbol.for("react.profiler"),Ik=Symbol.for("react.provider"),Lk=Symbol.for("react.context"),Uy=Symbol.for("react.forward_ref"),Jv=Symbol.for("react.suspense"),Zv=Symbol.for("react.suspense_list"),My=Symbol.for("react.memo"),eu=Symbol.for("react.lazy"),Uk=Symbol.for("react.offscreen"),wb=Symbol.iterator;function ud(e){return e===null||typeof e!="object"?null:(e=wb&&e[wb]||e["@@iterator"],typeof e=="function"?e:null)}var lr=Object.assign,Mm;function _d(e){if(Mm===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mm=t&&t[1]||""}return`
`+Mm+e}var Dm=!1;function Fm(e,t){if(!e||Dm)return"";Dm=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,u=o.length-1;1<=a&&0<=u&&i[a]!==o[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==o[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==o[u]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=u);break}}}finally{Dm=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_d(e):""}function Bj(e){switch(e.tag){case 5:return _d(e.type);case 16:return _d("Lazy");case 13:return _d("Suspense");case 19:return _d("SuspenseList");case 0:case 2:case 15:return e=Fm(e.type,!1),e;case 11:return e=Fm(e.type.render,!1),e;case 1:return e=Fm(e.type,!0),e;default:return""}}function e1(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jc:return"Fragment";case Qc:return"Portal";case Qv:return"Profiler";case Ly:return"StrictMode";case Jv:return"Suspense";case Zv:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lk:return(e.displayName||"Context")+".Consumer";case Ik:return(e._context.displayName||"Context")+".Provider";case Uy:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case My:return t=e.displayName||null,t!==null?t:e1(e.type)||"Memo";case eu:t=e._payload,e=e._init;try{return e1(e(t))}catch{}}return null}function Nj(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return e1(t);case 8:return t===Ly?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tu(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mk(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wj(e){var t=Mk(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sp(e){e._valueTracker||(e._valueTracker=Wj(e))}function Dk(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mk(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function t1(e,t){var n=t.checked;return lr({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _b(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tu(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fk(e,t){t=t.checked,t!=null&&Iy(e,"checked",t,!1)}function n1(e,t){Fk(e,t);var n=Tu(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?r1(e,t.type,n):t.hasOwnProperty("defaultValue")&&r1(e,t.type,Tu(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bb(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function r1(e,t,n){(t!=="number"||Xp(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var bd=Array.isArray;function hf(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tu(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function i1(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(He(91));return lr({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sb(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(He(92));if(bd(n)){if(1<n.length)throw Error(He(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tu(n)}}function zk(e,t){var n=Tu(t.value),r=Tu(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cb(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bk(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function o1(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bk(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ap,Nk=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ap=ap||document.createElement("div"),ap.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ap.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vd(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rd={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hj=["Webkit","ms","Moz","O"];Object.keys(Rd).forEach(function(e){Hj.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rd[t]=Rd[e]})});function Wk(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rd.hasOwnProperty(e)&&Rd[e]?(""+t).trim():t+"px"}function Hk(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wk(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vj=lr({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function s1(e,t){if(t){if(Vj[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(He(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(He(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(He(61))}if(t.style!=null&&typeof t.style!="object")throw Error(He(62))}}function a1(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l1=null;function Dy(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var u1=null,pf=null,gf=null;function kb(e){if(e=Eh(e)){if(typeof u1!="function")throw Error(He(280));var t=e.stateNode;t&&(t=K0(t),u1(e.stateNode,e.type,t))}}function Vk(e){pf?gf?gf.push(e):gf=[e]:pf=e}function Gk(){if(pf){var e=pf,t=gf;if(gf=pf=null,kb(e),t)for(e=0;e<t.length;e++)kb(t[e])}}function Yk(e,t){return e(t)}function Xk(){}var zm=!1;function Kk(e,t,n){if(zm)return e(t,n);zm=!0;try{return Yk(e,t,n)}finally{zm=!1,(pf!==null||gf!==null)&&(Xk(),Gk())}}function Gd(e,t){var n=e.stateNode;if(n===null)return null;var r=K0(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(He(231,t,typeof n));return n}var c1=!1;if(vl)try{var cd={};Object.defineProperty(cd,"passive",{get:function(){c1=!0}}),window.addEventListener("test",cd,cd),window.removeEventListener("test",cd,cd)}catch{c1=!1}function Gj(e,t,n,r,i,o,a,u,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var Pd=!1,Kp=null,qp=!1,f1=null,Yj={onError:function(e){Pd=!0,Kp=e}};function Xj(e,t,n,r,i,o,a,u,c){Pd=!1,Kp=null,Gj.apply(Yj,arguments)}function Kj(e,t,n,r,i,o,a,u,c){if(Xj.apply(this,arguments),Pd){if(Pd){var f=Kp;Pd=!1,Kp=null}else throw Error(He(198));qp||(qp=!0,f1=f)}}function $c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qk(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eb(e){if($c(e)!==e)throw Error(He(188))}function qj(e){var t=e.alternate;if(!t){if(t=$c(e),t===null)throw Error(He(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Eb(i),e;if(o===r)return Eb(i),t;o=o.sibling}throw Error(He(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=o;break}if(u===r){a=!0,r=i,n=o;break}u=u.sibling}if(!a){for(u=o.child;u;){if(u===n){a=!0,n=o,r=i;break}if(u===r){a=!0,r=o,n=i;break}u=u.sibling}if(!a)throw Error(He(189))}}if(n.alternate!==r)throw Error(He(190))}if(n.tag!==3)throw Error(He(188));return n.stateNode.current===n?e:t}function Qk(e){return e=qj(e),e!==null?Jk(e):null}function Jk(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jk(e);if(t!==null)return t;e=e.sibling}return null}var Zk=ts.unstable_scheduleCallback,Tb=ts.unstable_cancelCallback,Qj=ts.unstable_shouldYield,Jj=ts.unstable_requestPaint,Pr=ts.unstable_now,Zj=ts.unstable_getCurrentPriorityLevel,Fy=ts.unstable_ImmediatePriority,eE=ts.unstable_UserBlockingPriority,Qp=ts.unstable_NormalPriority,e6=ts.unstable_LowPriority,tE=ts.unstable_IdlePriority,V0=null,Oa=null;function t6(e){if(Oa&&typeof Oa.onCommitFiberRoot=="function")try{Oa.onCommitFiberRoot(V0,e,void 0,(e.current.flags&128)===128)}catch{}}var ia=Math.clz32?Math.clz32:i6,n6=Math.log,r6=Math.LN2;function i6(e){return e>>>=0,e===0?32:31-(n6(e)/r6|0)|0}var lp=64,up=4194304;function Sd(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jp(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=Sd(u):(o&=a,o!==0&&(r=Sd(o)))}else a=n&~i,a!==0?r=Sd(a):o!==0&&(r=Sd(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ia(t),i=1<<n,r|=e[n],t&=~i;return r}function o6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-ia(o),u=1<<a,c=i[a];c===-1?(!(u&n)||u&r)&&(i[a]=o6(u,t)):c<=t&&(e.expiredLanes|=u),o&=~u}}function d1(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nE(){var e=lp;return lp<<=1,!(lp&4194240)&&(lp=64),e}function Bm(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ch(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ia(t),e[t]=n}function a6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ia(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function zy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ia(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Cn=0;function rE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var iE,By,oE,sE,aE,h1=!1,cp=[],pu=null,gu=null,mu=null,Yd=new Map,Xd=new Map,nu=[],l6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ab(e,t){switch(e){case"focusin":case"focusout":pu=null;break;case"dragenter":case"dragleave":gu=null;break;case"mouseover":case"mouseout":mu=null;break;case"pointerover":case"pointerout":Yd.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xd.delete(t.pointerId)}}function fd(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Eh(t),t!==null&&By(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function u6(e,t,n,r,i){switch(t){case"focusin":return pu=fd(pu,e,t,n,r,i),!0;case"dragenter":return gu=fd(gu,e,t,n,r,i),!0;case"mouseover":return mu=fd(mu,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Yd.set(o,fd(Yd.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xd.set(o,fd(Xd.get(o)||null,e,t,n,r,i)),!0}return!1}function lE(e){var t=ac(e.target);if(t!==null){var n=$c(t);if(n!==null){if(t=n.tag,t===13){if(t=qk(n),t!==null){e.blockedOn=t,aE(e.priority,function(){oE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ap(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=p1(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);l1=r,n.target.dispatchEvent(r),l1=null}else return t=Eh(n),t!==null&&By(t),e.blockedOn=n,!1;t.shift()}return!0}function Rb(e,t,n){Ap(e)&&n.delete(t)}function c6(){h1=!1,pu!==null&&Ap(pu)&&(pu=null),gu!==null&&Ap(gu)&&(gu=null),mu!==null&&Ap(mu)&&(mu=null),Yd.forEach(Rb),Xd.forEach(Rb)}function dd(e,t){e.blockedOn===t&&(e.blockedOn=null,h1||(h1=!0,ts.unstable_scheduleCallback(ts.unstable_NormalPriority,c6)))}function Kd(e){function t(i){return dd(i,e)}if(0<cp.length){dd(cp[0],e);for(var n=1;n<cp.length;n++){var r=cp[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pu!==null&&dd(pu,e),gu!==null&&dd(gu,e),mu!==null&&dd(mu,e),Yd.forEach(t),Xd.forEach(t),n=0;n<nu.length;n++)r=nu[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nu.length&&(n=nu[0],n.blockedOn===null);)lE(n),n.blockedOn===null&&nu.shift()}var mf=El.ReactCurrentBatchConfig,Zp=!0;function f6(e,t,n,r){var i=Cn,o=mf.transition;mf.transition=null;try{Cn=1,Ny(e,t,n,r)}finally{Cn=i,mf.transition=o}}function d6(e,t,n,r){var i=Cn,o=mf.transition;mf.transition=null;try{Cn=4,Ny(e,t,n,r)}finally{Cn=i,mf.transition=o}}function Ny(e,t,n,r){if(Zp){var i=p1(e,t,n,r);if(i===null)Qm(e,t,r,e0,n),Ab(e,r);else if(u6(i,e,t,n,r))r.stopPropagation();else if(Ab(e,r),t&4&&-1<l6.indexOf(e)){for(;i!==null;){var o=Eh(i);if(o!==null&&iE(o),o=p1(e,t,n,r),o===null&&Qm(e,t,r,e0,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qm(e,t,r,null,n)}}var e0=null;function p1(e,t,n,r){if(e0=null,e=Dy(r),e=ac(e),e!==null)if(t=$c(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qk(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return e0=e,null}function uE(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zj()){case Fy:return 1;case eE:return 4;case Qp:case e6:return 16;case tE:return 536870912;default:return 16}default:return 16}}var au=null,Wy=null,Rp=null;function cE(){if(Rp)return Rp;var e,t=Wy,n=t.length,r,i="value"in au?au.value:au.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Rp=i.slice(e,1<r?1-r:void 0)}function Pp(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fp(){return!0}function Pb(){return!1}function os(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fp:Pb,this.isPropagationStopped=Pb,this}return lr(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fp)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fp)},persist:function(){},isPersistent:fp}),t}var Yf={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hy=os(Yf),kh=lr({},Yf,{view:0,detail:0}),h6=os(kh),Nm,Wm,hd,G0=lr({},kh,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vy,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hd&&(hd&&e.type==="mousemove"?(Nm=e.screenX-hd.screenX,Wm=e.screenY-hd.screenY):Wm=Nm=0,hd=e),Nm)},movementY:function(e){return"movementY"in e?e.movementY:Wm}}),$b=os(G0),p6=lr({},G0,{dataTransfer:0}),g6=os(p6),m6=lr({},kh,{relatedTarget:0}),Hm=os(m6),v6=lr({},Yf,{animationName:0,elapsedTime:0,pseudoElement:0}),y6=os(v6),x6=lr({},Yf,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w6=os(x6),_6=lr({},Yf,{data:0}),Ob=os(_6),b6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C6[e])?!!t[e]:!1}function Vy(){return k6}var E6=lr({},kh,{key:function(e){if(e.key){var t=b6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pp(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vy,charCode:function(e){return e.type==="keypress"?Pp(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pp(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T6=os(E6),A6=lr({},G0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jb=os(A6),R6=lr({},kh,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vy}),P6=os(R6),$6=lr({},Yf,{propertyName:0,elapsedTime:0,pseudoElement:0}),O6=os($6),j6=lr({},G0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I6=os(j6),L6=[9,13,27,32],Gy=vl&&"CompositionEvent"in window,$d=null;vl&&"documentMode"in document&&($d=document.documentMode);var U6=vl&&"TextEvent"in window&&!$d,fE=vl&&(!Gy||$d&&8<$d&&11>=$d),Ib=String.fromCharCode(32),Lb=!1;function dE(e,t){switch(e){case"keyup":return L6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zc=!1;function M6(e,t){switch(e){case"compositionend":return hE(t);case"keypress":return t.which!==32?null:(Lb=!0,Ib);case"textInput":return e=t.data,e===Ib&&Lb?null:e;default:return null}}function D6(e,t){if(Zc)return e==="compositionend"||!Gy&&dE(e,t)?(e=cE(),Rp=Wy=au=null,Zc=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fE&&t.locale!=="ko"?null:t.data;default:return null}}var F6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ub(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F6[e.type]:t==="textarea"}function pE(e,t,n,r){Vk(r),t=t0(t,"onChange"),0<t.length&&(n=new Hy("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Od=null,qd=null;function z6(e){kE(e,0)}function Y0(e){var t=nf(e);if(Dk(t))return e}function B6(e,t){if(e==="change")return t}var gE=!1;if(vl){var Vm;if(vl){var Gm="oninput"in document;if(!Gm){var Mb=document.createElement("div");Mb.setAttribute("oninput","return;"),Gm=typeof Mb.oninput=="function"}Vm=Gm}else Vm=!1;gE=Vm&&(!document.documentMode||9<document.documentMode)}function Db(){Od&&(Od.detachEvent("onpropertychange",mE),qd=Od=null)}function mE(e){if(e.propertyName==="value"&&Y0(qd)){var t=[];pE(t,qd,e,Dy(e)),Kk(z6,t)}}function N6(e,t,n){e==="focusin"?(Db(),Od=t,qd=n,Od.attachEvent("onpropertychange",mE)):e==="focusout"&&Db()}function W6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Y0(qd)}function H6(e,t){if(e==="click")return Y0(t)}function V6(e,t){if(e==="input"||e==="change")return Y0(t)}function G6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var la=typeof Object.is=="function"?Object.is:G6;function Qd(e,t){if(la(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qv.call(t,i)||!la(e[i],t[i]))return!1}return!0}function Fb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zb(e,t){var n=Fb(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fb(n)}}function vE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yE(){for(var e=window,t=Xp();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xp(e.document)}return t}function Yy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y6(e){var t=yE(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vE(n.ownerDocument.documentElement,n)){if(r!==null&&Yy(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zb(n,o);var a=zb(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X6=vl&&"documentMode"in document&&11>=document.documentMode,ef=null,g1=null,jd=null,m1=!1;function Bb(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;m1||ef==null||ef!==Xp(r)||(r=ef,"selectionStart"in r&&Yy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jd&&Qd(jd,r)||(jd=r,r=t0(g1,"onSelect"),0<r.length&&(t=new Hy("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ef)))}function dp(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tf={animationend:dp("Animation","AnimationEnd"),animationiteration:dp("Animation","AnimationIteration"),animationstart:dp("Animation","AnimationStart"),transitionend:dp("Transition","TransitionEnd")},Ym={},xE={};vl&&(xE=document.createElement("div").style,"AnimationEvent"in window||(delete tf.animationend.animation,delete tf.animationiteration.animation,delete tf.animationstart.animation),"TransitionEvent"in window||delete tf.transitionend.transition);function X0(e){if(Ym[e])return Ym[e];if(!tf[e])return e;var t=tf[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xE)return Ym[e]=t[n];return e}var wE=X0("animationend"),_E=X0("animationiteration"),bE=X0("animationstart"),SE=X0("transitionend"),CE=new Map,Nb="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lu(e,t){CE.set(e,t),Pc(t,[e])}for(var Xm=0;Xm<Nb.length;Xm++){var Km=Nb[Xm],K6=Km.toLowerCase(),q6=Km[0].toUpperCase()+Km.slice(1);Lu(K6,"on"+q6)}Lu(wE,"onAnimationEnd");Lu(_E,"onAnimationIteration");Lu(bE,"onAnimationStart");Lu("dblclick","onDoubleClick");Lu("focusin","onFocus");Lu("focusout","onBlur");Lu(SE,"onTransitionEnd");Ef("onMouseEnter",["mouseout","mouseover"]);Ef("onMouseLeave",["mouseout","mouseover"]);Ef("onPointerEnter",["pointerout","pointerover"]);Ef("onPointerLeave",["pointerout","pointerover"]);Pc("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pc("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pc("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pc("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pc("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pc("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cd));function Wb(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kj(r,t,void 0,e),e.currentTarget=null}function kE(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==o&&i.isPropagationStopped())break e;Wb(i,u,f),o=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,f=u.currentTarget,u=u.listener,c!==o&&i.isPropagationStopped())break e;Wb(i,u,f),o=c}}}if(qp)throw e=f1,qp=!1,f1=null,e}function zn(e,t){var n=t[_1];n===void 0&&(n=t[_1]=new Set);var r=e+"__bubble";n.has(r)||(EE(t,e,2,!1),n.add(r))}function qm(e,t,n){var r=0;t&&(r|=4),EE(n,e,r,t)}var hp="_reactListening"+Math.random().toString(36).slice(2);function Jd(e){if(!e[hp]){e[hp]=!0,jk.forEach(function(n){n!=="selectionchange"&&(Q6.has(n)||qm(n,!1,e),qm(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hp]||(t[hp]=!0,qm("selectionchange",!1,t))}}function EE(e,t,n,r){switch(uE(t)){case 1:var i=f6;break;case 4:i=d6;break;default:i=Ny}n=i.bind(null,t,n,e),i=void 0,!c1||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Qm(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;u!==null;){if(a=ac(u),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}u=u.parentNode}}r=r.return}Kk(function(){var f=o,v=Dy(n),b=[];e:{var x=CE.get(e);if(x!==void 0){var g=Hy,S=e;switch(e){case"keypress":if(Pp(n)===0)break e;case"keydown":case"keyup":g=T6;break;case"focusin":S="focus",g=Hm;break;case"focusout":S="blur",g=Hm;break;case"beforeblur":case"afterblur":g=Hm;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$b;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=g6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=P6;break;case wE:case _E:case bE:g=y6;break;case SE:g=O6;break;case"scroll":g=h6;break;case"wheel":g=I6;break;case"copy":case"cut":case"paste":g=w6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jb}var w=(t&4)!==0,j=!w&&e==="scroll",$=w?x!==null?x+"Capture":null:x;w=[];for(var y=f,E;y!==null;){E=y;var I=E.stateNode;if(E.tag===5&&I!==null&&(E=I,$!==null&&(I=Gd(y,$),I!=null&&w.push(Zd(y,I,E)))),j)break;y=y.return}0<w.length&&(x=new g(x,S,null,n,v),b.push({event:x,listeners:w}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",x&&n!==l1&&(S=n.relatedTarget||n.fromElement)&&(ac(S)||S[yl]))break e;if((g||x)&&(x=v.window===v?v:(x=v.ownerDocument)?x.defaultView||x.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=f,S=S?ac(S):null,S!==null&&(j=$c(S),S!==j||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=f),g!==S)){if(w=$b,I="onMouseLeave",$="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=jb,I="onPointerLeave",$="onPointerEnter",y="pointer"),j=g==null?x:nf(g),E=S==null?x:nf(S),x=new w(I,y+"leave",g,n,v),x.target=j,x.relatedTarget=E,I=null,ac(v)===f&&(w=new w($,y+"enter",S,n,v),w.target=E,w.relatedTarget=j,I=w),j=I,g&&S)t:{for(w=g,$=S,y=0,E=w;E;E=Nc(E))y++;for(E=0,I=$;I;I=Nc(I))E++;for(;0<y-E;)w=Nc(w),y--;for(;0<E-y;)$=Nc($),E--;for(;y--;){if(w===$||$!==null&&w===$.alternate)break t;w=Nc(w),$=Nc($)}w=null}else w=null;g!==null&&Hb(b,x,g,w,!1),S!==null&&j!==null&&Hb(b,j,S,w,!0)}}e:{if(x=f?nf(f):window,g=x.nodeName&&x.nodeName.toLowerCase(),g==="select"||g==="input"&&x.type==="file")var k=B6;else if(Ub(x))if(gE)k=V6;else{k=W6;var D=N6}else(g=x.nodeName)&&g.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(k=H6);if(k&&(k=k(e,f))){pE(b,k,n,v);break e}D&&D(e,x,f),e==="focusout"&&(D=x._wrapperState)&&D.controlled&&x.type==="number"&&r1(x,"number",x.value)}switch(D=f?nf(f):window,e){case"focusin":(Ub(D)||D.contentEditable==="true")&&(ef=D,g1=f,jd=null);break;case"focusout":jd=g1=ef=null;break;case"mousedown":m1=!0;break;case"contextmenu":case"mouseup":case"dragend":m1=!1,Bb(b,n,v);break;case"selectionchange":if(X6)break;case"keydown":case"keyup":Bb(b,n,v)}var R;if(Gy)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Zc?dE(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(fE&&n.locale!=="ko"&&(Zc||O!=="onCompositionStart"?O==="onCompositionEnd"&&Zc&&(R=cE()):(au=v,Wy="value"in au?au.value:au.textContent,Zc=!0)),D=t0(f,O),0<D.length&&(O=new Ob(O,e,null,n,v),b.push({event:O,listeners:D}),R?O.data=R:(R=hE(n),R!==null&&(O.data=R)))),(R=U6?M6(e,n):D6(e,n))&&(f=t0(f,"onBeforeInput"),0<f.length&&(v=new Ob("onBeforeInput","beforeinput",null,n,v),b.push({event:v,listeners:f}),v.data=R))}kE(b,t)})}function Zd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function t0(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gd(e,n),o!=null&&r.unshift(Zd(e,o,i)),o=Gd(e,t),o!=null&&r.push(Zd(e,o,i))),e=e.return}return r}function Nc(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hb(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,f=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&f!==null&&(u=f,i?(c=Gd(n,o),c!=null&&a.unshift(Zd(n,c,u))):i||(c=Gd(n,o),c!=null&&a.push(Zd(n,c,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var J6=/\r\n?/g,Z6=/\u0000|\uFFFD/g;function Vb(e){return(typeof e=="string"?e:""+e).replace(J6,`
`).replace(Z6,"")}function pp(e,t,n){if(t=Vb(t),Vb(e)!==t&&n)throw Error(He(425))}function n0(){}var v1=null,y1=null;function x1(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var w1=typeof setTimeout=="function"?setTimeout:void 0,eI=typeof clearTimeout=="function"?clearTimeout:void 0,Gb=typeof Promise=="function"?Promise:void 0,tI=typeof queueMicrotask=="function"?queueMicrotask:typeof Gb<"u"?function(e){return Gb.resolve(null).then(e).catch(nI)}:w1;function nI(e){setTimeout(function(){throw e})}function Jm(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kd(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kd(t)}function vu(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yb(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xf=Math.random().toString(36).slice(2),Aa="__reactFiber$"+Xf,eh="__reactProps$"+Xf,yl="__reactContainer$"+Xf,_1="__reactEvents$"+Xf,rI="__reactListeners$"+Xf,iI="__reactHandles$"+Xf;function ac(e){var t=e[Aa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yl]||n[Aa]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yb(e);e!==null;){if(n=e[Aa])return n;e=Yb(e)}return t}e=n,n=e.parentNode}return null}function Eh(e){return e=e[Aa]||e[yl],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nf(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(He(33))}function K0(e){return e[eh]||null}var b1=[],rf=-1;function Uu(e){return{current:e}}function Bn(e){0>rf||(e.current=b1[rf],b1[rf]=null,rf--)}function jn(e,t){rf++,b1[rf]=e.current,e.current=t}var Au={},Gi=Uu(Au),_o=Uu(!1),xc=Au;function Tf(e,t){var n=e.type.contextTypes;if(!n)return Au;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bo(e){return e=e.childContextTypes,e!=null}function r0(){Bn(_o),Bn(Gi)}function Xb(e,t,n){if(Gi.current!==Au)throw Error(He(168));jn(Gi,t),jn(_o,n)}function TE(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(He(108,Nj(e)||"Unknown",i));return lr({},n,r)}function i0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Au,xc=Gi.current,jn(Gi,e),jn(_o,_o.current),!0}function Kb(e,t,n){var r=e.stateNode;if(!r)throw Error(He(169));n?(e=TE(e,t,xc),r.__reactInternalMemoizedMergedChildContext=e,Bn(_o),Bn(Gi),jn(Gi,e)):Bn(_o),jn(_o,n)}var dl=null,q0=!1,Zm=!1;function AE(e){dl===null?dl=[e]:dl.push(e)}function oI(e){q0=!0,AE(e)}function Mu(){if(!Zm&&dl!==null){Zm=!0;var e=0,t=Cn;try{var n=dl;for(Cn=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dl=null,q0=!1}catch(i){throw dl!==null&&(dl=dl.slice(e+1)),Zk(Fy,Mu),i}finally{Cn=t,Zm=!1}}return null}var of=[],sf=0,o0=null,s0=0,ws=[],_s=0,wc=null,pl=1,gl="";function nc(e,t){of[sf++]=s0,of[sf++]=o0,o0=e,s0=t}function RE(e,t,n){ws[_s++]=pl,ws[_s++]=gl,ws[_s++]=wc,wc=e;var r=pl;e=gl;var i=32-ia(r)-1;r&=~(1<<i),n+=1;var o=32-ia(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,pl=1<<32-ia(t)+i|n<<i|r,gl=o+e}else pl=1<<o|n<<i|r,gl=e}function Xy(e){e.return!==null&&(nc(e,1),RE(e,1,0))}function Ky(e){for(;e===o0;)o0=of[--sf],of[sf]=null,s0=of[--sf],of[sf]=null;for(;e===wc;)wc=ws[--_s],ws[_s]=null,gl=ws[--_s],ws[_s]=null,pl=ws[--_s],ws[_s]=null}var Xo=null,Yo=null,Yn=!1,ea=null;function PE(e,t){var n=Cs(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qb(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xo=e,Yo=vu(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xo=e,Yo=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wc!==null?{id:pl,overflow:gl}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Cs(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xo=e,Yo=null,!0):!1;default:return!1}}function S1(e){return(e.mode&1)!==0&&(e.flags&128)===0}function C1(e){if(Yn){var t=Yo;if(t){var n=t;if(!qb(e,t)){if(S1(e))throw Error(He(418));t=vu(n.nextSibling);var r=Xo;t&&qb(e,t)?PE(r,n):(e.flags=e.flags&-4097|2,Yn=!1,Xo=e)}}else{if(S1(e))throw Error(He(418));e.flags=e.flags&-4097|2,Yn=!1,Xo=e}}}function Qb(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xo=e}function gp(e){if(e!==Xo)return!1;if(!Yn)return Qb(e),Yn=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!x1(e.type,e.memoizedProps)),t&&(t=Yo)){if(S1(e))throw $E(),Error(He(418));for(;t;)PE(e,t),t=vu(t.nextSibling)}if(Qb(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(He(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Yo=vu(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Yo=null}}else Yo=Xo?vu(e.stateNode.nextSibling):null;return!0}function $E(){for(var e=Yo;e;)e=vu(e.nextSibling)}function Af(){Yo=Xo=null,Yn=!1}function qy(e){ea===null?ea=[e]:ea.push(e)}var sI=El.ReactCurrentBatchConfig;function Js(e,t){if(e&&e.defaultProps){t=lr({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var a0=Uu(null),l0=null,af=null,Qy=null;function Jy(){Qy=af=l0=null}function Zy(e){var t=a0.current;Bn(a0),e._currentValue=t}function k1(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vf(e,t){l0=e,Qy=af=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wo=!0),e.firstContext=null)}function $s(e){var t=e._currentValue;if(Qy!==e)if(e={context:e,memoizedValue:t,next:null},af===null){if(l0===null)throw Error(He(308));af=e,l0.dependencies={lanes:0,firstContext:e}}else af=af.next=e;return t}var lc=null;function ex(e){lc===null?lc=[e]:lc.push(e)}function OE(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ex(t)):(n.next=i.next,i.next=n),t.interleaved=n,xl(e,r)}function xl(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tu=!1;function tx(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jE(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ml(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yu(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fn&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xl(e,n)}return i=r.interleaved,i===null?(t.next=t,ex(r)):(t.next=i.next,i.next=t),r.interleaved=t,xl(e,n)}function $p(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zy(e,n)}}function Jb(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function u0(e,t,n,r){var i=e.updateQueue;tu=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,f=c.next;c.next=null,a===null?o=f:a.next=f,a=c;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==a&&(u===null?v.firstBaseUpdate=f:u.next=f,v.lastBaseUpdate=c))}if(o!==null){var b=i.baseState;a=0,v=f=c=null,u=o;do{var x=u.lane,g=u.eventTime;if((r&x)===x){v!==null&&(v=v.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,w=u;switch(x=t,g=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){b=S.call(g,b,x);break e}b=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,x=typeof S=="function"?S.call(g,b,x):S,x==null)break e;b=lr({},b,x);break e;case 2:tu=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[u]:x.push(u))}else g={eventTime:g,lane:x,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(f=v=g,c=b):v=v.next=g,a|=x;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;x=u,u=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(1);if(v===null&&(c=b),i.baseState=c,i.firstBaseUpdate=f,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);bc|=a,e.lanes=a,e.memoizedState=b}}function Zb(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(He(191,i));i.call(r)}}}var IE=new Ok.Component().refs;function E1(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:lr({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Q0={isMounted:function(e){return(e=e._reactInternals)?$c(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ro(),i=wu(e),o=ml(r,i);o.payload=t,n!=null&&(o.callback=n),t=yu(e,o,i),t!==null&&(oa(t,e,i,r),$p(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ro(),i=wu(e),o=ml(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yu(e,o,i),t!==null&&(oa(t,e,i,r),$p(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ro(),r=wu(e),i=ml(n,r);i.tag=2,t!=null&&(i.callback=t),t=yu(e,i,r),t!==null&&(oa(t,e,r,n),$p(t,e,r))}};function e2(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Qd(n,r)||!Qd(i,o):!0}function LE(e,t,n){var r=!1,i=Au,o=t.contextType;return typeof o=="object"&&o!==null?o=$s(o):(i=bo(t)?xc:Gi.current,r=t.contextTypes,o=(r=r!=null)?Tf(e,i):Au),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Q0,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function t2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Q0.enqueueReplaceState(t,t.state,null)}function T1(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=IE,tx(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$s(o):(o=bo(t)?xc:Gi.current,i.context=Tf(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(E1(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Q0.enqueueReplaceState(i,i.state,null),u0(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pd(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(He(309));var r=n.stateNode}if(!r)throw Error(He(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var u=i.refs;u===IE&&(u=i.refs={}),a===null?delete u[o]:u[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(He(284));if(!n._owner)throw Error(He(290,e))}return e}function mp(e,t){throw e=Object.prototype.toString.call(t),Error(He(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function n2(e){var t=e._init;return t(e._payload)}function UE(e){function t($,y){if(e){var E=$.deletions;E===null?($.deletions=[y],$.flags|=16):E.push(y)}}function n($,y){if(!e)return null;for(;y!==null;)t($,y),y=y.sibling;return null}function r($,y){for($=new Map;y!==null;)y.key!==null?$.set(y.key,y):$.set(y.index,y),y=y.sibling;return $}function i($,y){return $=_u($,y),$.index=0,$.sibling=null,$}function o($,y,E){return $.index=E,e?(E=$.alternate,E!==null?(E=E.index,E<y?($.flags|=2,y):E):($.flags|=2,y)):($.flags|=1048576,y)}function a($){return e&&$.alternate===null&&($.flags|=2),$}function u($,y,E,I){return y===null||y.tag!==6?(y=sv(E,$.mode,I),y.return=$,y):(y=i(y,E),y.return=$,y)}function c($,y,E,I){var k=E.type;return k===Jc?v($,y,E.props.children,I,E.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===eu&&n2(k)===y.type)?(I=i(y,E.props),I.ref=pd($,y,E),I.return=$,I):(I=Mp(E.type,E.key,E.props,null,$.mode,I),I.ref=pd($,y,E),I.return=$,I)}function f($,y,E,I){return y===null||y.tag!==4||y.stateNode.containerInfo!==E.containerInfo||y.stateNode.implementation!==E.implementation?(y=av(E,$.mode,I),y.return=$,y):(y=i(y,E.children||[]),y.return=$,y)}function v($,y,E,I,k){return y===null||y.tag!==7?(y=hc(E,$.mode,I,k),y.return=$,y):(y=i(y,E),y.return=$,y)}function b($,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return y=sv(""+y,$.mode,E),y.return=$,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case op:return E=Mp(y.type,y.key,y.props,null,$.mode,E),E.ref=pd($,null,y),E.return=$,E;case Qc:return y=av(y,$.mode,E),y.return=$,y;case eu:var I=y._init;return b($,I(y._payload),E)}if(bd(y)||ud(y))return y=hc(y,$.mode,E,null),y.return=$,y;mp($,y)}return null}function x($,y,E,I){var k=y!==null?y.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return k!==null?null:u($,y,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case op:return E.key===k?c($,y,E,I):null;case Qc:return E.key===k?f($,y,E,I):null;case eu:return k=E._init,x($,y,k(E._payload),I)}if(bd(E)||ud(E))return k!==null?null:v($,y,E,I,null);mp($,E)}return null}function g($,y,E,I,k){if(typeof I=="string"&&I!==""||typeof I=="number")return $=$.get(E)||null,u(y,$,""+I,k);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case op:return $=$.get(I.key===null?E:I.key)||null,c(y,$,I,k);case Qc:return $=$.get(I.key===null?E:I.key)||null,f(y,$,I,k);case eu:var D=I._init;return g($,y,E,D(I._payload),k)}if(bd(I)||ud(I))return $=$.get(E)||null,v(y,$,I,k,null);mp(y,I)}return null}function S($,y,E,I){for(var k=null,D=null,R=y,O=y=0,G=null;R!==null&&O<E.length;O++){R.index>O?(G=R,R=null):G=R.sibling;var q=x($,R,E[O],I);if(q===null){R===null&&(R=G);break}e&&R&&q.alternate===null&&t($,R),y=o(q,y,O),D===null?k=q:D.sibling=q,D=q,R=G}if(O===E.length)return n($,R),Yn&&nc($,O),k;if(R===null){for(;O<E.length;O++)R=b($,E[O],I),R!==null&&(y=o(R,y,O),D===null?k=R:D.sibling=R,D=R);return Yn&&nc($,O),k}for(R=r($,R);O<E.length;O++)G=g(R,$,O,E[O],I),G!==null&&(e&&G.alternate!==null&&R.delete(G.key===null?O:G.key),y=o(G,y,O),D===null?k=G:D.sibling=G,D=G);return e&&R.forEach(function(K){return t($,K)}),Yn&&nc($,O),k}function w($,y,E,I){var k=ud(E);if(typeof k!="function")throw Error(He(150));if(E=k.call(E),E==null)throw Error(He(151));for(var D=k=null,R=y,O=y=0,G=null,q=E.next();R!==null&&!q.done;O++,q=E.next()){R.index>O?(G=R,R=null):G=R.sibling;var K=x($,R,q.value,I);if(K===null){R===null&&(R=G);break}e&&R&&K.alternate===null&&t($,R),y=o(K,y,O),D===null?k=K:D.sibling=K,D=K,R=G}if(q.done)return n($,R),Yn&&nc($,O),k;if(R===null){for(;!q.done;O++,q=E.next())q=b($,q.value,I),q!==null&&(y=o(q,y,O),D===null?k=q:D.sibling=q,D=q);return Yn&&nc($,O),k}for(R=r($,R);!q.done;O++,q=E.next())q=g(R,$,O,q.value,I),q!==null&&(e&&q.alternate!==null&&R.delete(q.key===null?O:q.key),y=o(q,y,O),D===null?k=q:D.sibling=q,D=q);return e&&R.forEach(function(ee){return t($,ee)}),Yn&&nc($,O),k}function j($,y,E,I){if(typeof E=="object"&&E!==null&&E.type===Jc&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case op:e:{for(var k=E.key,D=y;D!==null;){if(D.key===k){if(k=E.type,k===Jc){if(D.tag===7){n($,D.sibling),y=i(D,E.props.children),y.return=$,$=y;break e}}else if(D.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===eu&&n2(k)===D.type){n($,D.sibling),y=i(D,E.props),y.ref=pd($,D,E),y.return=$,$=y;break e}n($,D);break}else t($,D);D=D.sibling}E.type===Jc?(y=hc(E.props.children,$.mode,I,E.key),y.return=$,$=y):(I=Mp(E.type,E.key,E.props,null,$.mode,I),I.ref=pd($,y,E),I.return=$,$=I)}return a($);case Qc:e:{for(D=E.key;y!==null;){if(y.key===D)if(y.tag===4&&y.stateNode.containerInfo===E.containerInfo&&y.stateNode.implementation===E.implementation){n($,y.sibling),y=i(y,E.children||[]),y.return=$,$=y;break e}else{n($,y);break}else t($,y);y=y.sibling}y=av(E,$.mode,I),y.return=$,$=y}return a($);case eu:return D=E._init,j($,y,D(E._payload),I)}if(bd(E))return S($,y,E,I);if(ud(E))return w($,y,E,I);mp($,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,y!==null&&y.tag===6?(n($,y.sibling),y=i(y,E),y.return=$,$=y):(n($,y),y=sv(E,$.mode,I),y.return=$,$=y),a($)):n($,y)}return j}var Rf=UE(!0),ME=UE(!1),Th={},ja=Uu(Th),th=Uu(Th),nh=Uu(Th);function uc(e){if(e===Th)throw Error(He(174));return e}function nx(e,t){switch(jn(nh,t),jn(th,e),jn(ja,Th),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:o1(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=o1(t,e)}Bn(ja),jn(ja,t)}function Pf(){Bn(ja),Bn(th),Bn(nh)}function DE(e){uc(nh.current);var t=uc(ja.current),n=o1(t,e.type);t!==n&&(jn(th,e),jn(ja,n))}function rx(e){th.current===e&&(Bn(ja),Bn(th))}var rr=Uu(0);function c0(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ev=[];function ix(){for(var e=0;e<ev.length;e++)ev[e]._workInProgressVersionPrimary=null;ev.length=0}var Op=El.ReactCurrentDispatcher,tv=El.ReactCurrentBatchConfig,_c=0,ar=null,Gr=null,Zr=null,f0=!1,Id=!1,rh=0,aI=0;function Mi(){throw Error(He(321))}function ox(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!la(e[n],t[n]))return!1;return!0}function sx(e,t,n,r,i,o){if(_c=o,ar=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Op.current=e===null||e.memoizedState===null?fI:dI,e=n(r,i),Id){o=0;do{if(Id=!1,rh=0,25<=o)throw Error(He(301));o+=1,Zr=Gr=null,t.updateQueue=null,Op.current=hI,e=n(r,i)}while(Id)}if(Op.current=d0,t=Gr!==null&&Gr.next!==null,_c=0,Zr=Gr=ar=null,f0=!1,t)throw Error(He(300));return e}function ax(){var e=rh!==0;return rh=0,e}function ka(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zr===null?ar.memoizedState=Zr=e:Zr=Zr.next=e,Zr}function Os(){if(Gr===null){var e=ar.alternate;e=e!==null?e.memoizedState:null}else e=Gr.next;var t=Zr===null?ar.memoizedState:Zr.next;if(t!==null)Zr=t,Gr=e;else{if(e===null)throw Error(He(310));Gr=e,e={memoizedState:Gr.memoizedState,baseState:Gr.baseState,baseQueue:Gr.baseQueue,queue:Gr.queue,next:null},Zr===null?ar.memoizedState=Zr=e:Zr=Zr.next=e}return Zr}function ih(e,t){return typeof t=="function"?t(e):t}function nv(e){var t=Os(),n=t.queue;if(n===null)throw Error(He(311));n.lastRenderedReducer=e;var r=Gr,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=a=null,c=null,f=o;do{var v=f.lane;if((_c&v)===v)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var b={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=b,a=r):c=c.next=b,ar.lanes|=v,bc|=v}f=f.next}while(f!==null&&f!==o);c===null?a=r:c.next=u,la(r,t.memoizedState)||(wo=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ar.lanes|=o,bc|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rv(e){var t=Os(),n=t.queue;if(n===null)throw Error(He(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);la(o,t.memoizedState)||(wo=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function FE(){}function zE(e,t){var n=ar,r=Os(),i=t(),o=!la(r.memoizedState,i);if(o&&(r.memoizedState=i,wo=!0),r=r.queue,lx(WE.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Zr!==null&&Zr.memoizedState.tag&1){if(n.flags|=2048,oh(9,NE.bind(null,n,r,i,t),void 0,null),ei===null)throw Error(He(349));_c&30||BE(n,t,i)}return i}function BE(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ar.updateQueue,t===null?(t={lastEffect:null,stores:null},ar.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function NE(e,t,n,r){t.value=n,t.getSnapshot=r,HE(t)&&VE(e)}function WE(e,t,n){return n(function(){HE(t)&&VE(e)})}function HE(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!la(e,n)}catch{return!0}}function VE(e){var t=xl(e,1);t!==null&&oa(t,e,1,-1)}function r2(e){var t=ka();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ih,lastRenderedState:e},t.queue=e,e=e.dispatch=cI.bind(null,ar,e),[t.memoizedState,e]}function oh(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ar.updateQueue,t===null?(t={lastEffect:null,stores:null},ar.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function GE(){return Os().memoizedState}function jp(e,t,n,r){var i=ka();ar.flags|=e,i.memoizedState=oh(1|t,n,void 0,r===void 0?null:r)}function J0(e,t,n,r){var i=Os();r=r===void 0?null:r;var o=void 0;if(Gr!==null){var a=Gr.memoizedState;if(o=a.destroy,r!==null&&ox(r,a.deps)){i.memoizedState=oh(t,n,o,r);return}}ar.flags|=e,i.memoizedState=oh(1|t,n,o,r)}function i2(e,t){return jp(8390656,8,e,t)}function lx(e,t){return J0(2048,8,e,t)}function YE(e,t){return J0(4,2,e,t)}function XE(e,t){return J0(4,4,e,t)}function KE(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qE(e,t,n){return n=n!=null?n.concat([e]):null,J0(4,4,KE.bind(null,t,e),n)}function ux(){}function QE(e,t){var n=Os();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ox(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function JE(e,t){var n=Os();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ox(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ZE(e,t,n){return _c&21?(la(n,t)||(n=nE(),ar.lanes|=n,bc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wo=!0),e.memoizedState=n)}function lI(e,t){var n=Cn;Cn=n!==0&&4>n?n:4,e(!0);var r=tv.transition;tv.transition={};try{e(!1),t()}finally{Cn=n,tv.transition=r}}function e3(){return Os().memoizedState}function uI(e,t,n){var r=wu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},t3(e))n3(t,n);else if(n=OE(e,t,n,r),n!==null){var i=ro();oa(n,e,r,i),r3(n,t,r)}}function cI(e,t,n){var r=wu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(t3(e))n3(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,u=o(a,n);if(i.hasEagerState=!0,i.eagerState=u,la(u,a)){var c=t.interleaved;c===null?(i.next=i,ex(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=OE(e,t,i,r),n!==null&&(i=ro(),oa(n,e,r,i),r3(n,t,r))}}function t3(e){var t=e.alternate;return e===ar||t!==null&&t===ar}function n3(e,t){Id=f0=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function r3(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,zy(e,n)}}var d0={readContext:$s,useCallback:Mi,useContext:Mi,useEffect:Mi,useImperativeHandle:Mi,useInsertionEffect:Mi,useLayoutEffect:Mi,useMemo:Mi,useReducer:Mi,useRef:Mi,useState:Mi,useDebugValue:Mi,useDeferredValue:Mi,useTransition:Mi,useMutableSource:Mi,useSyncExternalStore:Mi,useId:Mi,unstable_isNewReconciler:!1},fI={readContext:$s,useCallback:function(e,t){return ka().memoizedState=[e,t===void 0?null:t],e},useContext:$s,useEffect:i2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jp(4194308,4,KE.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jp(4194308,4,e,t)},useInsertionEffect:function(e,t){return jp(4,2,e,t)},useMemo:function(e,t){var n=ka();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ka();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uI.bind(null,ar,e),[r.memoizedState,e]},useRef:function(e){var t=ka();return e={current:e},t.memoizedState=e},useState:r2,useDebugValue:ux,useDeferredValue:function(e){return ka().memoizedState=e},useTransition:function(){var e=r2(!1),t=e[0];return e=lI.bind(null,e[1]),ka().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ar,i=ka();if(Yn){if(n===void 0)throw Error(He(407));n=n()}else{if(n=t(),ei===null)throw Error(He(349));_c&30||BE(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,i2(WE.bind(null,r,o,e),[e]),r.flags|=2048,oh(9,NE.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ka(),t=ei.identifierPrefix;if(Yn){var n=gl,r=pl;n=(r&~(1<<32-ia(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rh++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=aI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dI={readContext:$s,useCallback:QE,useContext:$s,useEffect:lx,useImperativeHandle:qE,useInsertionEffect:YE,useLayoutEffect:XE,useMemo:JE,useReducer:nv,useRef:GE,useState:function(){return nv(ih)},useDebugValue:ux,useDeferredValue:function(e){var t=Os();return ZE(t,Gr.memoizedState,e)},useTransition:function(){var e=nv(ih)[0],t=Os().memoizedState;return[e,t]},useMutableSource:FE,useSyncExternalStore:zE,useId:e3,unstable_isNewReconciler:!1},hI={readContext:$s,useCallback:QE,useContext:$s,useEffect:lx,useImperativeHandle:qE,useInsertionEffect:YE,useLayoutEffect:XE,useMemo:JE,useReducer:rv,useRef:GE,useState:function(){return rv(ih)},useDebugValue:ux,useDeferredValue:function(e){var t=Os();return Gr===null?t.memoizedState=e:ZE(t,Gr.memoizedState,e)},useTransition:function(){var e=rv(ih)[0],t=Os().memoizedState;return[e,t]},useMutableSource:FE,useSyncExternalStore:zE,useId:e3,unstable_isNewReconciler:!1};function $f(e,t){try{var n="",r=t;do n+=Bj(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function iv(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function A1(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pI=typeof WeakMap=="function"?WeakMap:Map;function i3(e,t,n){n=ml(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){p0||(p0=!0,D1=r),A1(e,t)},n}function o3(e,t,n){n=ml(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){A1(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){A1(e,t),typeof r!="function"&&(xu===null?xu=new Set([this]):xu.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function o2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=AI.bind(null,e,t,n),t.then(e,e))}function s2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function a2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ml(-1,1),t.tag=2,yu(n,t,1))),n.lanes|=1),e)}var gI=El.ReactCurrentOwner,wo=!1;function eo(e,t,n,r){t.child=e===null?ME(t,null,n,r):Rf(t,e.child,n,r)}function l2(e,t,n,r,i){n=n.render;var o=t.ref;return vf(t,i),r=sx(e,t,n,r,o,i),n=ax(),e!==null&&!wo?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wl(e,t,i)):(Yn&&n&&Xy(t),t.flags|=1,eo(e,t,r,i),t.child)}function u2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!vx(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,s3(e,t,o,r,i)):(e=Mp(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qd,n(a,r)&&e.ref===t.ref)return wl(e,t,i)}return t.flags|=1,e=_u(o,r),e.ref=t.ref,e.return=t,t.child=e}function s3(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qd(o,r)&&e.ref===t.ref)if(wo=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(wo=!0);else return t.lanes=e.lanes,wl(e,t,i)}return R1(e,t,n,r,i)}function a3(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},jn(uf,Wo),Wo|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,jn(uf,Wo),Wo|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,jn(uf,Wo),Wo|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,jn(uf,Wo),Wo|=r;return eo(e,t,i,n),t.child}function l3(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function R1(e,t,n,r,i){var o=bo(n)?xc:Gi.current;return o=Tf(t,o),vf(t,i),n=sx(e,t,n,r,o,i),r=ax(),e!==null&&!wo?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wl(e,t,i)):(Yn&&r&&Xy(t),t.flags|=1,eo(e,t,n,i),t.child)}function c2(e,t,n,r,i){if(bo(n)){var o=!0;i0(t)}else o=!1;if(vf(t,i),t.stateNode===null)Ip(e,t),LE(t,n,r),T1(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var c=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=$s(f):(f=bo(n)?xc:Gi.current,f=Tf(t,f));var v=n.getDerivedStateFromProps,b=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function";b||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==f)&&t2(t,a,r,f),tu=!1;var x=t.memoizedState;a.state=x,u0(t,r,a,i),c=t.memoizedState,u!==r||x!==c||_o.current||tu?(typeof v=="function"&&(E1(t,n,v,r),c=t.memoizedState),(u=tu||e2(t,n,u,r,x,c,f))?(b||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=f,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,jE(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:Js(t.type,u),a.props=f,b=t.pendingProps,x=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=$s(c):(c=bo(n)?xc:Gi.current,c=Tf(t,c));var g=n.getDerivedStateFromProps;(v=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==b||x!==c)&&t2(t,a,r,c),tu=!1,x=t.memoizedState,a.state=x,u0(t,r,a,i);var S=t.memoizedState;u!==b||x!==S||_o.current||tu?(typeof g=="function"&&(E1(t,n,g,r),S=t.memoizedState),(f=tu||e2(t,n,f,r,x,S,c)||!1)?(v||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),a.props=r,a.state=S,a.context=c,r=f):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return P1(e,t,n,r,o,i)}function P1(e,t,n,r,i,o){l3(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Kb(t,n,!1),wl(e,t,o);r=t.stateNode,gI.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Rf(t,e.child,null,o),t.child=Rf(t,null,u,o)):eo(e,t,u,o),t.memoizedState=r.state,i&&Kb(t,n,!0),t.child}function u3(e){var t=e.stateNode;t.pendingContext?Xb(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xb(e,t.context,!1),nx(e,t.containerInfo)}function f2(e,t,n,r,i){return Af(),qy(i),t.flags|=256,eo(e,t,n,r),t.child}var $1={dehydrated:null,treeContext:null,retryLane:0};function O1(e){return{baseLanes:e,cachePool:null,transitions:null}}function c3(e,t,n){var r=t.pendingProps,i=rr.current,o=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),jn(rr,i&1),e===null)return C1(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=tg(a,r,0,null),e=hc(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=O1(n),t.memoizedState=$1,e):cx(t,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return mI(e,t,a,r,u,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=_u(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=_u(u,o):(o=hc(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?O1(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=$1,r}return o=e.child,e=o.sibling,r=_u(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cx(e,t){return t=tg({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vp(e,t,n,r){return r!==null&&qy(r),Rf(t,e.child,null,n),e=cx(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mI(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=iv(Error(He(422))),vp(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=tg({mode:"visible",children:r.children},i,0,null),o=hc(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Rf(t,e.child,null,a),t.child.memoizedState=O1(a),t.memoizedState=$1,o);if(!(t.mode&1))return vp(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(He(419)),r=iv(o,r,void 0),vp(e,t,a,r)}if(u=(a&e.childLanes)!==0,wo||u){if(r=ei,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xl(e,i),oa(r,e,i,-1))}return mx(),r=iv(Error(He(421))),vp(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=RI.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Yo=vu(i.nextSibling),Xo=t,Yn=!0,ea=null,e!==null&&(ws[_s++]=pl,ws[_s++]=gl,ws[_s++]=wc,pl=e.id,gl=e.overflow,wc=t),t=cx(t,r.children),t.flags|=4096,t)}function d2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),k1(e.return,t,n)}function ov(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function f3(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(eo(e,t,r.children,n),r=rr.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&d2(e,n,t);else if(e.tag===19)d2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(jn(rr,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&c0(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ov(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&c0(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ov(t,!0,n,null,o);break;case"together":ov(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ip(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bc|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(He(153));if(t.child!==null){for(e=t.child,n=_u(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_u(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vI(e,t,n){switch(t.tag){case 3:u3(t),Af();break;case 5:DE(t);break;case 1:bo(t.type)&&i0(t);break;case 4:nx(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;jn(a0,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(jn(rr,rr.current&1),t.flags|=128,null):n&t.child.childLanes?c3(e,t,n):(jn(rr,rr.current&1),e=wl(e,t,n),e!==null?e.sibling:null);jn(rr,rr.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return f3(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),jn(rr,rr.current),r)break;return null;case 22:case 23:return t.lanes=0,a3(e,t,n)}return wl(e,t,n)}var d3,j1,h3,p3;d3=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};j1=function(){};h3=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,uc(ja.current);var o=null;switch(n){case"input":i=t1(e,i),r=t1(e,r),o=[];break;case"select":i=lr({},i,{value:void 0}),r=lr({},r,{value:void 0}),o=[];break;case"textarea":i=i1(e,i),r=i1(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=n0)}s1(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Hd.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var c=r[f];if(u=i?.[f],r.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(o=o||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Hd.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&zn("scroll",e),o||u===c||(o=[])):(o=o||[]).push(f,c))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};p3=function(e,t,n,r){n!==r&&(t.flags|=4)};function gd(e,t){if(!Yn)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Di(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yI(e,t,n){var r=t.pendingProps;switch(Ky(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Di(t),null;case 1:return bo(t.type)&&r0(),Di(t),null;case 3:return r=t.stateNode,Pf(),Bn(_o),Bn(Gi),ix(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gp(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ea!==null&&(B1(ea),ea=null))),j1(e,t),Di(t),null;case 5:rx(t);var i=uc(nh.current);if(n=t.type,e!==null&&t.stateNode!=null)h3(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(He(166));return Di(t),null}if(e=uc(ja.current),gp(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Aa]=t,r[eh]=o,e=(t.mode&1)!==0,n){case"dialog":zn("cancel",r),zn("close",r);break;case"iframe":case"object":case"embed":zn("load",r);break;case"video":case"audio":for(i=0;i<Cd.length;i++)zn(Cd[i],r);break;case"source":zn("error",r);break;case"img":case"image":case"link":zn("error",r),zn("load",r);break;case"details":zn("toggle",r);break;case"input":_b(r,o),zn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},zn("invalid",r);break;case"textarea":Sb(r,o),zn("invalid",r)}s1(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var u=o[a];a==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&pp(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&pp(r.textContent,u,e),i=["children",""+u]):Hd.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&zn("scroll",r)}switch(n){case"input":sp(r),bb(r,o,!0);break;case"textarea":sp(r),Cb(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=n0)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bk(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Aa]=t,e[eh]=r,d3(e,t,!1,!1),t.stateNode=e;e:{switch(a=a1(n,r),n){case"dialog":zn("cancel",e),zn("close",e),i=r;break;case"iframe":case"object":case"embed":zn("load",e),i=r;break;case"video":case"audio":for(i=0;i<Cd.length;i++)zn(Cd[i],e);i=r;break;case"source":zn("error",e),i=r;break;case"img":case"image":case"link":zn("error",e),zn("load",e),i=r;break;case"details":zn("toggle",e),i=r;break;case"input":_b(e,r),i=t1(e,r),zn("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=lr({},r,{value:void 0}),zn("invalid",e);break;case"textarea":Sb(e,r),i=i1(e,r),zn("invalid",e);break;default:i=r}s1(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?Hk(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nk(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vd(e,c):typeof c=="number"&&Vd(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hd.hasOwnProperty(o)?c!=null&&o==="onScroll"&&zn("scroll",e):c!=null&&Iy(e,o,c,a))}switch(n){case"input":sp(e),bb(e,r,!1);break;case"textarea":sp(e),Cb(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tu(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hf(e,!!r.multiple,o,!1):r.defaultValue!=null&&hf(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=n0)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Di(t),null;case 6:if(e&&t.stateNode!=null)p3(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(He(166));if(n=uc(nh.current),uc(ja.current),gp(t)){if(r=t.stateNode,n=t.memoizedProps,r[Aa]=t,(o=r.nodeValue!==n)&&(e=Xo,e!==null))switch(e.tag){case 3:pp(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pp(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Aa]=t,t.stateNode=r}return Di(t),null;case 13:if(Bn(rr),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Yn&&Yo!==null&&t.mode&1&&!(t.flags&128))$E(),Af(),t.flags|=98560,o=!1;else if(o=gp(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(He(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(He(317));o[Aa]=t}else Af(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Di(t),o=!1}else ea!==null&&(B1(ea),ea=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||rr.current&1?Yr===0&&(Yr=3):mx())),t.updateQueue!==null&&(t.flags|=4),Di(t),null);case 4:return Pf(),j1(e,t),e===null&&Jd(t.stateNode.containerInfo),Di(t),null;case 10:return Zy(t.type._context),Di(t),null;case 17:return bo(t.type)&&r0(),Di(t),null;case 19:if(Bn(rr),o=t.memoizedState,o===null)return Di(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)gd(o,!1);else{if(Yr!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=c0(e),a!==null){for(t.flags|=128,gd(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return jn(rr,rr.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pr()>Of&&(t.flags|=128,r=!0,gd(o,!1),t.lanes=4194304)}else{if(!r)if(e=c0(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gd(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Yn)return Di(t),null}else 2*Pr()-o.renderingStartTime>Of&&n!==1073741824&&(t.flags|=128,r=!0,gd(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pr(),t.sibling=null,n=rr.current,jn(rr,r?n&1|2:n&1),t):(Di(t),null);case 22:case 23:return gx(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Wo&1073741824&&(Di(t),t.subtreeFlags&6&&(t.flags|=8192)):Di(t),null;case 24:return null;case 25:return null}throw Error(He(156,t.tag))}function xI(e,t){switch(Ky(t),t.tag){case 1:return bo(t.type)&&r0(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pf(),Bn(_o),Bn(Gi),ix(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rx(t),null;case 13:if(Bn(rr),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(He(340));Af()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Bn(rr),null;case 4:return Pf(),null;case 10:return Zy(t.type._context),null;case 22:case 23:return gx(),null;case 24:return null;default:return null}}var yp=!1,Bi=!1,wI=typeof WeakSet=="function"?WeakSet:Set,ot=null;function lf(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xr(e,t,r)}else n.current=null}function I1(e,t,n){try{n()}catch(r){xr(e,t,r)}}var h2=!1;function _I(e,t){if(v1=Zp,e=yE(),Yy(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,f=0,v=0,b=e,x=null;t:for(;;){for(var g;b!==n||i!==0&&b.nodeType!==3||(u=a+i),b!==o||r!==0&&b.nodeType!==3||(c=a+r),b.nodeType===3&&(a+=b.nodeValue.length),(g=b.firstChild)!==null;)x=b,b=g;for(;;){if(b===e)break t;if(x===n&&++f===i&&(u=a),x===o&&++v===r&&(c=a),(g=b.nextSibling)!==null)break;b=x,x=b.parentNode}b=g}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(y1={focusedElem:e,selectionRange:n},Zp=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){t=ot;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,j=S.memoizedState,$=t.stateNode,y=$.getSnapshotBeforeUpdate(t.elementType===t.type?w:Js(t.type,w),j);$.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(He(163))}}catch(I){xr(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}return S=h2,h2=!1,S}function Ld(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&I1(t,n,o)}i=i.next}while(i!==r)}}function Z0(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function L1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function g3(e){var t=e.alternate;t!==null&&(e.alternate=null,g3(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Aa],delete t[eh],delete t[_1],delete t[rI],delete t[iI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m3(e){return e.tag===5||e.tag===3||e.tag===4}function p2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function U1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=n0));else if(r!==4&&(e=e.child,e!==null))for(U1(e,t,n),e=e.sibling;e!==null;)U1(e,t,n),e=e.sibling}function M1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(M1(e,t,n),e=e.sibling;e!==null;)M1(e,t,n),e=e.sibling}var vi=null,Zs=!1;function ql(e,t,n){for(n=n.child;n!==null;)v3(e,t,n),n=n.sibling}function v3(e,t,n){if(Oa&&typeof Oa.onCommitFiberUnmount=="function")try{Oa.onCommitFiberUnmount(V0,n)}catch{}switch(n.tag){case 5:Bi||lf(n,t);case 6:var r=vi,i=Zs;vi=null,ql(e,t,n),vi=r,Zs=i,vi!==null&&(Zs?(e=vi,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vi.removeChild(n.stateNode));break;case 18:vi!==null&&(Zs?(e=vi,n=n.stateNode,e.nodeType===8?Jm(e.parentNode,n):e.nodeType===1&&Jm(e,n),Kd(e)):Jm(vi,n.stateNode));break;case 4:r=vi,i=Zs,vi=n.stateNode.containerInfo,Zs=!0,ql(e,t,n),vi=r,Zs=i;break;case 0:case 11:case 14:case 15:if(!Bi&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&I1(n,t,a),i=i.next}while(i!==r)}ql(e,t,n);break;case 1:if(!Bi&&(lf(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){xr(n,t,u)}ql(e,t,n);break;case 21:ql(e,t,n);break;case 22:n.mode&1?(Bi=(r=Bi)||n.memoizedState!==null,ql(e,t,n),Bi=r):ql(e,t,n);break;default:ql(e,t,n)}}function g2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wI),t.forEach(function(r){var i=PI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qs(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:vi=u.stateNode,Zs=!1;break e;case 3:vi=u.stateNode.containerInfo,Zs=!0;break e;case 4:vi=u.stateNode.containerInfo,Zs=!0;break e}u=u.return}if(vi===null)throw Error(He(160));v3(o,a,i),vi=null,Zs=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(f){xr(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)y3(t,e),t=t.sibling}function y3(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qs(t,e),Ca(e),r&4){try{Ld(3,e,e.return),Z0(3,e)}catch(w){xr(e,e.return,w)}try{Ld(5,e,e.return)}catch(w){xr(e,e.return,w)}}break;case 1:Qs(t,e),Ca(e),r&512&&n!==null&&lf(n,n.return);break;case 5:if(Qs(t,e),Ca(e),r&512&&n!==null&&lf(n,n.return),e.flags&32){var i=e.stateNode;try{Vd(i,"")}catch(w){xr(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Fk(i,o),a1(u,a);var f=a1(u,o);for(a=0;a<c.length;a+=2){var v=c[a],b=c[a+1];v==="style"?Hk(i,b):v==="dangerouslySetInnerHTML"?Nk(i,b):v==="children"?Vd(i,b):Iy(i,v,b,f)}switch(u){case"input":n1(i,o);break;case"textarea":zk(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?hf(i,!!o.multiple,g,!1):x!==!!o.multiple&&(o.defaultValue!=null?hf(i,!!o.multiple,o.defaultValue,!0):hf(i,!!o.multiple,o.multiple?[]:"",!1))}i[eh]=o}catch(w){xr(e,e.return,w)}}break;case 6:if(Qs(t,e),Ca(e),r&4){if(e.stateNode===null)throw Error(He(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){xr(e,e.return,w)}}break;case 3:if(Qs(t,e),Ca(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kd(t.containerInfo)}catch(w){xr(e,e.return,w)}break;case 4:Qs(t,e),Ca(e);break;case 13:Qs(t,e),Ca(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(hx=Pr())),r&4&&g2(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Bi=(f=Bi)||v,Qs(t,e),Bi=f):Qs(t,e),Ca(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(ot=e,v=e.child;v!==null;){for(b=ot=v;ot!==null;){switch(x=ot,g=x.child,x.tag){case 0:case 11:case 14:case 15:Ld(4,x,x.return);break;case 1:lf(x,x.return);var S=x.stateNode;if(typeof S.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){xr(r,n,w)}}break;case 5:lf(x,x.return);break;case 22:if(x.memoizedState!==null){v2(b);continue}}g!==null?(g.return=x,ot=g):v2(b)}v=v.sibling}e:for(v=null,b=e;;){if(b.tag===5){if(v===null){v=b;try{i=b.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=b.stateNode,c=b.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Wk("display",a))}catch(w){xr(e,e.return,w)}}}else if(b.tag===6){if(v===null)try{b.stateNode.nodeValue=f?"":b.memoizedProps}catch(w){xr(e,e.return,w)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;v===b&&(v=null),b=b.return}v===b&&(v=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Qs(t,e),Ca(e),r&4&&g2(e);break;case 21:break;default:Qs(t,e),Ca(e)}}function Ca(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m3(n)){var r=n;break e}n=n.return}throw Error(He(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vd(i,""),r.flags&=-33);var o=p2(e);M1(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=p2(e);U1(e,u,a);break;default:throw Error(He(161))}}catch(c){xr(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bI(e,t,n){ot=e,x3(e)}function x3(e,t,n){for(var r=(e.mode&1)!==0;ot!==null;){var i=ot,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||yp;if(!a){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Bi;u=yp;var f=Bi;if(yp=a,(Bi=c)&&!f)for(ot=i;ot!==null;)a=ot,c=a.child,a.tag===22&&a.memoizedState!==null?y2(i):c!==null?(c.return=a,ot=c):y2(i);for(;o!==null;)ot=o,x3(o),o=o.sibling;ot=i,yp=u,Bi=f}m2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ot=o):m2(e)}}function m2(e){for(;ot!==null;){var t=ot;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Bi||Z0(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Bi)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Js(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zb(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zb(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var b=v.dehydrated;b!==null&&Kd(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(He(163))}Bi||t.flags&512&&L1(t)}catch(x){xr(t,t.return,x)}}if(t===e){ot=null;break}if(n=t.sibling,n!==null){n.return=t.return,ot=n;break}ot=t.return}}function v2(e){for(;ot!==null;){var t=ot;if(t===e){ot=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ot=n;break}ot=t.return}}function y2(e){for(;ot!==null;){var t=ot;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Z0(4,t)}catch(c){xr(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){xr(t,i,c)}}var o=t.return;try{L1(t)}catch(c){xr(t,o,c)}break;case 5:var a=t.return;try{L1(t)}catch(c){xr(t,a,c)}}}catch(c){xr(t,t.return,c)}if(t===e){ot=null;break}var u=t.sibling;if(u!==null){u.return=t.return,ot=u;break}ot=t.return}}var SI=Math.ceil,h0=El.ReactCurrentDispatcher,fx=El.ReactCurrentOwner,Rs=El.ReactCurrentBatchConfig,fn=0,ei=null,Br=null,wi=0,Wo=0,uf=Uu(0),Yr=0,sh=null,bc=0,eg=0,dx=0,Ud=null,yo=null,hx=0,Of=1/0,cl=null,p0=!1,D1=null,xu=null,xp=!1,lu=null,g0=0,Md=0,F1=null,Lp=-1,Up=0;function ro(){return fn&6?Pr():Lp!==-1?Lp:Lp=Pr()}function wu(e){return e.mode&1?fn&2&&wi!==0?wi&-wi:sI.transition!==null?(Up===0&&(Up=nE()),Up):(e=Cn,e!==0||(e=window.event,e=e===void 0?16:uE(e.type)),e):1}function oa(e,t,n,r){if(50<Md)throw Md=0,F1=null,Error(He(185));Ch(e,n,r),(!(fn&2)||e!==ei)&&(e===ei&&(!(fn&2)&&(eg|=n),Yr===4&&ru(e,wi)),So(e,r),n===1&&fn===0&&!(t.mode&1)&&(Of=Pr()+500,q0&&Mu()))}function So(e,t){var n=e.callbackNode;s6(e,t);var r=Jp(e,e===ei?wi:0);if(r===0)n!==null&&Tb(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tb(n),t===1)e.tag===0?oI(x2.bind(null,e)):AE(x2.bind(null,e)),tI(function(){!(fn&6)&&Mu()}),n=null;else{switch(rE(r)){case 1:n=Fy;break;case 4:n=eE;break;case 16:n=Qp;break;case 536870912:n=tE;break;default:n=Qp}n=T3(n,w3.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function w3(e,t){if(Lp=-1,Up=0,fn&6)throw Error(He(327));var n=e.callbackNode;if(yf()&&e.callbackNode!==n)return null;var r=Jp(e,e===ei?wi:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=m0(e,r);else{t=r;var i=fn;fn|=2;var o=b3();(ei!==e||wi!==t)&&(cl=null,Of=Pr()+500,dc(e,t));do try{EI();break}catch(u){_3(e,u)}while(1);Jy(),h0.current=o,fn=i,Br!==null?t=0:(ei=null,wi=0,t=Yr)}if(t!==0){if(t===2&&(i=d1(e),i!==0&&(r=i,t=z1(e,i))),t===1)throw n=sh,dc(e,0),ru(e,r),So(e,Pr()),n;if(t===6)ru(e,r);else{if(i=e.current.alternate,!(r&30)&&!CI(i)&&(t=m0(e,r),t===2&&(o=d1(e),o!==0&&(r=o,t=z1(e,o))),t===1))throw n=sh,dc(e,0),ru(e,r),So(e,Pr()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(He(345));case 2:rc(e,yo,cl);break;case 3:if(ru(e,r),(r&130023424)===r&&(t=hx+500-Pr(),10<t)){if(Jp(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ro(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=w1(rc.bind(null,e,yo,cl),t);break}rc(e,yo,cl);break;case 4:if(ru(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ia(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Pr()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*SI(r/1960))-r,10<r){e.timeoutHandle=w1(rc.bind(null,e,yo,cl),r);break}rc(e,yo,cl);break;case 5:rc(e,yo,cl);break;default:throw Error(He(329))}}}return So(e,Pr()),e.callbackNode===n?w3.bind(null,e):null}function z1(e,t){var n=Ud;return e.current.memoizedState.isDehydrated&&(dc(e,t).flags|=256),e=m0(e,t),e!==2&&(t=yo,yo=n,t!==null&&B1(t)),e}function B1(e){yo===null?yo=e:yo.push.apply(yo,e)}function CI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!la(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ru(e,t){for(t&=~dx,t&=~eg,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ia(t),r=1<<n;e[n]=-1,t&=~r}}function x2(e){if(fn&6)throw Error(He(327));yf();var t=Jp(e,0);if(!(t&1))return So(e,Pr()),null;var n=m0(e,t);if(e.tag!==0&&n===2){var r=d1(e);r!==0&&(t=r,n=z1(e,r))}if(n===1)throw n=sh,dc(e,0),ru(e,t),So(e,Pr()),n;if(n===6)throw Error(He(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rc(e,yo,cl),So(e,Pr()),null}function px(e,t){var n=fn;fn|=1;try{return e(t)}finally{fn=n,fn===0&&(Of=Pr()+500,q0&&Mu())}}function Sc(e){lu!==null&&lu.tag===0&&!(fn&6)&&yf();var t=fn;fn|=1;var n=Rs.transition,r=Cn;try{if(Rs.transition=null,Cn=1,e)return e()}finally{Cn=r,Rs.transition=n,fn=t,!(fn&6)&&Mu()}}function gx(){Wo=uf.current,Bn(uf)}function dc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,eI(n)),Br!==null)for(n=Br.return;n!==null;){var r=n;switch(Ky(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&r0();break;case 3:Pf(),Bn(_o),Bn(Gi),ix();break;case 5:rx(r);break;case 4:Pf();break;case 13:Bn(rr);break;case 19:Bn(rr);break;case 10:Zy(r.type._context);break;case 22:case 23:gx()}n=n.return}if(ei=e,Br=e=_u(e.current,null),wi=Wo=t,Yr=0,sh=null,dx=eg=bc=0,yo=Ud=null,lc!==null){for(t=0;t<lc.length;t++)if(n=lc[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}lc=null}return e}function _3(e,t){do{var n=Br;try{if(Jy(),Op.current=d0,f0){for(var r=ar.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}f0=!1}if(_c=0,Zr=Gr=ar=null,Id=!1,rh=0,fx.current=null,n===null||n.return===null){Yr=1,sh=t,Br=null;break}e:{var o=e,a=n.return,u=n,c=t;if(t=wi,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,v=u,b=v.tag;if(!(v.mode&1)&&(b===0||b===11||b===15)){var x=v.alternate;x?(v.updateQueue=x.updateQueue,v.memoizedState=x.memoizedState,v.lanes=x.lanes):(v.updateQueue=null,v.memoizedState=null)}var g=s2(a);if(g!==null){g.flags&=-257,a2(g,a,u,o,t),g.mode&1&&o2(o,f,t),t=g,c=f;var S=t.updateQueue;if(S===null){var w=new Set;w.add(c),t.updateQueue=w}else S.add(c);break e}else{if(!(t&1)){o2(o,f,t),mx();break e}c=Error(He(426))}}else if(Yn&&u.mode&1){var j=s2(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),a2(j,a,u,o,t),qy($f(c,u));break e}}o=c=$f(c,u),Yr!==4&&(Yr=2),Ud===null?Ud=[o]:Ud.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var $=i3(o,c,t);Jb(o,$);break e;case 1:u=c;var y=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(xu===null||!xu.has(E)))){o.flags|=65536,t&=-t,o.lanes|=t;var I=o3(o,u,t);Jb(o,I);break e}}o=o.return}while(o!==null)}C3(n)}catch(k){t=k,Br===n&&n!==null&&(Br=n=n.return);continue}break}while(1)}function b3(){var e=h0.current;return h0.current=d0,e===null?d0:e}function mx(){(Yr===0||Yr===3||Yr===2)&&(Yr=4),ei===null||!(bc&268435455)&&!(eg&268435455)||ru(ei,wi)}function m0(e,t){var n=fn;fn|=2;var r=b3();(ei!==e||wi!==t)&&(cl=null,dc(e,t));do try{kI();break}catch(i){_3(e,i)}while(1);if(Jy(),fn=n,h0.current=r,Br!==null)throw Error(He(261));return ei=null,wi=0,Yr}function kI(){for(;Br!==null;)S3(Br)}function EI(){for(;Br!==null&&!Qj();)S3(Br)}function S3(e){var t=E3(e.alternate,e,Wo);e.memoizedProps=e.pendingProps,t===null?C3(e):Br=t,fx.current=null}function C3(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xI(n,t),n!==null){n.flags&=32767,Br=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Yr=6,Br=null;return}}else if(n=yI(n,t,Wo),n!==null){Br=n;return}if(t=t.sibling,t!==null){Br=t;return}Br=t=e}while(t!==null);Yr===0&&(Yr=5)}function rc(e,t,n){var r=Cn,i=Rs.transition;try{Rs.transition=null,Cn=1,TI(e,t,n,r)}finally{Rs.transition=i,Cn=r}return null}function TI(e,t,n,r){do yf();while(lu!==null);if(fn&6)throw Error(He(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(He(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(a6(e,o),e===ei&&(Br=ei=null,wi=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xp||(xp=!0,T3(Qp,function(){return yf(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Rs.transition,Rs.transition=null;var a=Cn;Cn=1;var u=fn;fn|=4,fx.current=null,_I(e,n),y3(n,e),Y6(y1),Zp=!!v1,y1=v1=null,e.current=n,bI(n),Jj(),fn=u,Cn=a,Rs.transition=o}else e.current=n;if(xp&&(xp=!1,lu=e,g0=i),o=e.pendingLanes,o===0&&(xu=null),t6(n.stateNode),So(e,Pr()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(p0)throw p0=!1,e=D1,D1=null,e;return g0&1&&e.tag!==0&&yf(),o=e.pendingLanes,o&1?e===F1?Md++:(Md=0,F1=e):Md=0,Mu(),null}function yf(){if(lu!==null){var e=rE(g0),t=Rs.transition,n=Cn;try{if(Rs.transition=null,Cn=16>e?16:e,lu===null)var r=!1;else{if(e=lu,lu=null,g0=0,fn&6)throw Error(He(331));var i=fn;for(fn|=4,ot=e.current;ot!==null;){var o=ot,a=o.child;if(ot.flags&16){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(ot=f;ot!==null;){var v=ot;switch(v.tag){case 0:case 11:case 15:Ld(8,v,o)}var b=v.child;if(b!==null)b.return=v,ot=b;else for(;ot!==null;){v=ot;var x=v.sibling,g=v.return;if(g3(v),v===f){ot=null;break}if(x!==null){x.return=g,ot=x;break}ot=g}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}ot=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ot=a;else e:for(;ot!==null;){if(o=ot,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ld(9,o,o.return)}var $=o.sibling;if($!==null){$.return=o.return,ot=$;break e}ot=o.return}}var y=e.current;for(ot=y;ot!==null;){a=ot;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,ot=E;else e:for(a=y;ot!==null;){if(u=ot,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Z0(9,u)}}catch(k){xr(u,u.return,k)}if(u===a){ot=null;break e}var I=u.sibling;if(I!==null){I.return=u.return,ot=I;break e}ot=u.return}}if(fn=i,Mu(),Oa&&typeof Oa.onPostCommitFiberRoot=="function")try{Oa.onPostCommitFiberRoot(V0,e)}catch{}r=!0}return r}finally{Cn=n,Rs.transition=t}}return!1}function w2(e,t,n){t=$f(n,t),t=i3(e,t,1),e=yu(e,t,1),t=ro(),e!==null&&(Ch(e,1,t),So(e,t))}function xr(e,t,n){if(e.tag===3)w2(e,e,n);else for(;t!==null;){if(t.tag===3){w2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xu===null||!xu.has(r))){e=$f(n,e),e=o3(t,e,1),t=yu(t,e,1),e=ro(),t!==null&&(Ch(t,1,e),So(t,e));break}}t=t.return}}function AI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ro(),e.pingedLanes|=e.suspendedLanes&n,ei===e&&(wi&n)===n&&(Yr===4||Yr===3&&(wi&130023424)===wi&&500>Pr()-hx?dc(e,0):dx|=n),So(e,t)}function k3(e,t){t===0&&(e.mode&1?(t=up,up<<=1,!(up&130023424)&&(up=4194304)):t=1);var n=ro();e=xl(e,t),e!==null&&(Ch(e,t,n),So(e,n))}function RI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),k3(e,n)}function PI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(He(314))}r!==null&&r.delete(t),k3(e,n)}var E3;E3=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_o.current)wo=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wo=!1,vI(e,t,n);wo=!!(e.flags&131072)}else wo=!1,Yn&&t.flags&1048576&&RE(t,s0,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ip(e,t),e=t.pendingProps;var i=Tf(t,Gi.current);vf(t,n),i=sx(null,t,r,e,i,n);var o=ax();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bo(r)?(o=!0,i0(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tx(t),i.updater=Q0,t.stateNode=i,i._reactInternals=t,T1(t,r,e,n),t=P1(null,t,r,!0,o,n)):(t.tag=0,Yn&&o&&Xy(t),eo(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ip(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=OI(r),e=Js(r,e),i){case 0:t=R1(null,t,r,e,n);break e;case 1:t=c2(null,t,r,e,n);break e;case 11:t=l2(null,t,r,e,n);break e;case 14:t=u2(null,t,r,Js(r.type,e),n);break e}throw Error(He(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Js(r,i),R1(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Js(r,i),c2(e,t,r,i,n);case 3:e:{if(u3(t),e===null)throw Error(He(387));r=t.pendingProps,o=t.memoizedState,i=o.element,jE(e,t),u0(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=$f(Error(He(423)),t),t=f2(e,t,r,n,i);break e}else if(r!==i){i=$f(Error(He(424)),t),t=f2(e,t,r,n,i);break e}else for(Yo=vu(t.stateNode.containerInfo.firstChild),Xo=t,Yn=!0,ea=null,n=ME(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Af(),r===i){t=wl(e,t,n);break e}eo(e,t,r,n)}t=t.child}return t;case 5:return DE(t),e===null&&C1(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,x1(r,i)?a=null:o!==null&&x1(r,o)&&(t.flags|=32),l3(e,t),eo(e,t,a,n),t.child;case 6:return e===null&&C1(t),null;case 13:return c3(e,t,n);case 4:return nx(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rf(t,null,r,n):eo(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Js(r,i),l2(e,t,r,i,n);case 7:return eo(e,t,t.pendingProps,n),t.child;case 8:return eo(e,t,t.pendingProps.children,n),t.child;case 12:return eo(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,jn(a0,r._currentValue),r._currentValue=a,o!==null)if(la(o.value,a)){if(o.children===i.children&&!_o.current){t=wl(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){a=o.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=ml(-1,n&-n),c.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?c.next=c:(c.next=v.next,v.next=c),f.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),k1(o.return,n,t),u.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(He(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),k1(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}eo(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vf(t,n),i=$s(i),r=r(i),t.flags|=1,eo(e,t,r,n),t.child;case 14:return r=t.type,i=Js(r,t.pendingProps),i=Js(r.type,i),u2(e,t,r,i,n);case 15:return s3(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Js(r,i),Ip(e,t),t.tag=1,bo(r)?(e=!0,i0(t)):e=!1,vf(t,n),LE(t,r,i),T1(t,r,i,n),P1(null,t,r,!0,e,n);case 19:return f3(e,t,n);case 22:return a3(e,t,n)}throw Error(He(156,t.tag))};function T3(e,t){return Zk(e,t)}function $I(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cs(e,t,n,r){return new $I(e,t,n,r)}function vx(e){return e=e.prototype,!(!e||!e.isReactComponent)}function OI(e){if(typeof e=="function")return vx(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uy)return 11;if(e===My)return 14}return 2}function _u(e,t){var n=e.alternate;return n===null?(n=Cs(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mp(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")vx(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jc:return hc(n.children,i,o,t);case Ly:a=8,i|=8;break;case Qv:return e=Cs(12,n,t,i|2),e.elementType=Qv,e.lanes=o,e;case Jv:return e=Cs(13,n,t,i),e.elementType=Jv,e.lanes=o,e;case Zv:return e=Cs(19,n,t,i),e.elementType=Zv,e.lanes=o,e;case Uk:return tg(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ik:a=10;break e;case Lk:a=9;break e;case Uy:a=11;break e;case My:a=14;break e;case eu:a=16,r=null;break e}throw Error(He(130,e==null?e:typeof e,""))}return t=Cs(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function hc(e,t,n,r){return e=Cs(7,e,r,t),e.lanes=n,e}function tg(e,t,n,r){return e=Cs(22,e,r,t),e.elementType=Uk,e.lanes=n,e.stateNode={isHidden:!1},e}function sv(e,t,n){return e=Cs(6,e,null,t),e.lanes=n,e}function av(e,t,n){return t=Cs(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bm(0),this.expirationTimes=Bm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bm(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yx(e,t,n,r,i,o,a,u,c){return e=new jI(e,t,n,u,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Cs(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tx(o),e}function II(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qc,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function A3(e){if(!e)return Au;e=e._reactInternals;e:{if($c(e)!==e||e.tag!==1)throw Error(He(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bo(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(He(171))}if(e.tag===1){var n=e.type;if(bo(n))return TE(e,n,t)}return t}function R3(e,t,n,r,i,o,a,u,c){return e=yx(n,r,!0,e,i,o,a,u,c),e.context=A3(null),n=e.current,r=ro(),i=wu(n),o=ml(r,i),o.callback=t??null,yu(n,o,i),e.current.lanes=i,Ch(e,i,r),So(e,r),e}function ng(e,t,n,r){var i=t.current,o=ro(),a=wu(i);return n=A3(n),t.context===null?t.context=n:t.pendingContext=n,t=ml(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yu(i,t,a),e!==null&&(oa(e,i,a,o),$p(e,i,a)),a}function v0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xx(e,t){_2(e,t),(e=e.alternate)&&_2(e,t)}function LI(){return null}var P3=typeof reportError=="function"?reportError:function(e){console.error(e)};function wx(e){this._internalRoot=e}rg.prototype.render=wx.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(He(409));ng(e,t,null,null)};rg.prototype.unmount=wx.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sc(function(){ng(null,e,null,null)}),t[yl]=null}};function rg(e){this._internalRoot=e}rg.prototype.unstable_scheduleHydration=function(e){if(e){var t=sE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nu.length&&t!==0&&t<nu[n].priority;n++);nu.splice(n,0,e),n===0&&lE(e)}};function _x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ig(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function b2(){}function UI(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=v0(a);o.call(f)}}var a=R3(t,r,e,0,null,!1,!1,"",b2);return e._reactRootContainer=a,e[yl]=a.current,Jd(e.nodeType===8?e.parentNode:e),Sc(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=v0(c);u.call(f)}}var c=yx(e,0,!1,null,null,!1,!1,"",b2);return e._reactRootContainer=c,e[yl]=c.current,Jd(e.nodeType===8?e.parentNode:e),Sc(function(){ng(t,c,n,r)}),c}function og(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var u=i;i=function(){var c=v0(a);u.call(c)}}ng(t,a,e,i)}else a=UI(n,t,e,i,r);return v0(a)}iE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sd(t.pendingLanes);n!==0&&(zy(t,n|1),So(t,Pr()),!(fn&6)&&(Of=Pr()+500,Mu()))}break;case 13:Sc(function(){var r=xl(e,1);if(r!==null){var i=ro();oa(r,e,1,i)}}),xx(e,1)}};By=function(e){if(e.tag===13){var t=xl(e,134217728);if(t!==null){var n=ro();oa(t,e,134217728,n)}xx(e,134217728)}};oE=function(e){if(e.tag===13){var t=wu(e),n=xl(e,t);if(n!==null){var r=ro();oa(n,e,t,r)}xx(e,t)}};sE=function(){return Cn};aE=function(e,t){var n=Cn;try{return Cn=e,t()}finally{Cn=n}};u1=function(e,t,n){switch(t){case"input":if(n1(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=K0(r);if(!i)throw Error(He(90));Dk(r),n1(r,i)}}}break;case"textarea":zk(e,n);break;case"select":t=n.value,t!=null&&hf(e,!!n.multiple,t,!1)}};Yk=px;Xk=Sc;var MI={usingClientEntryPoint:!1,Events:[Eh,nf,K0,Vk,Gk,px]},md={findFiberByHostInstance:ac,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},DI={bundleType:md.bundleType,version:md.version,rendererPackageName:md.rendererPackageName,rendererConfig:md.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:El.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qk(e),e===null?null:e.stateNode},findFiberByHostInstance:md.findFiberByHostInstance||LI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wp.isDisabled&&wp.supportsFiber)try{V0=wp.inject(DI),Oa=wp}catch{}}is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MI;is.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_x(t))throw Error(He(200));return II(e,t,null,n)};is.createRoot=function(e,t){if(!_x(e))throw Error(He(299));var n=!1,r="",i=P3;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yx(e,1,!1,null,null,n,!1,r,i),e[yl]=t.current,Jd(e.nodeType===8?e.parentNode:e),new wx(t)};is.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(He(188)):(e=Object.keys(e).join(","),Error(He(268,e)));return e=Qk(t),e=e===null?null:e.stateNode,e};is.flushSync=function(e){return Sc(e)};is.hydrate=function(e,t,n){if(!ig(t))throw Error(He(200));return og(null,e,t,!0,n)};is.hydrateRoot=function(e,t,n){if(!_x(e))throw Error(He(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=P3;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=R3(t,null,e,1,n??null,i,!1,o,a),e[yl]=t.current,Jd(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new rg(t)};is.render=function(e,t,n){if(!ig(t))throw Error(He(200));return og(null,e,t,!1,n)};is.unmountComponentAtNode=function(e){if(!ig(e))throw Error(He(40));return e._reactRootContainer?(Sc(function(){og(null,null,e,!1,function(){e._reactRootContainer=null,e[yl]=null})}),!0):!1};is.unstable_batchedUpdates=px;is.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ig(n))throw Error(He(200));if(e==null||e._reactInternals===void 0)throw Error(He(38));return og(e,t,n,!1,r)};is.version="18.2.0-next-9e3b772b8-20220608";function $3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($3)}catch(e){console.error(e)}}$3(),Rk.exports=is;var sg=Rk.exports,O3,S2=sg;O3=S2.createRoot,S2.hydrateRoot;var j3={exports:{}},kn={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx=Symbol.for("react.element"),Sx=Symbol.for("react.portal"),ag=Symbol.for("react.fragment"),lg=Symbol.for("react.strict_mode"),ug=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),FI=Symbol.for("react.server_context"),dg=Symbol.for("react.forward_ref"),hg=Symbol.for("react.suspense"),pg=Symbol.for("react.suspense_list"),gg=Symbol.for("react.memo"),mg=Symbol.for("react.lazy"),zI=Symbol.for("react.offscreen"),I3;I3=Symbol.for("react.module.reference");function Is(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case bx:switch(e=e.type,e){case ag:case ug:case lg:case hg:case pg:return e;default:switch(e=e&&e.$$typeof,e){case FI:case fg:case dg:case mg:case gg:case cg:return e;default:return t}}case Sx:return t}}}kn.ContextConsumer=fg;kn.ContextProvider=cg;kn.Element=bx;kn.ForwardRef=dg;kn.Fragment=ag;kn.Lazy=mg;kn.Memo=gg;kn.Portal=Sx;kn.Profiler=ug;kn.StrictMode=lg;kn.Suspense=hg;kn.SuspenseList=pg;kn.isAsyncMode=function(){return!1};kn.isConcurrentMode=function(){return!1};kn.isContextConsumer=function(e){return Is(e)===fg};kn.isContextProvider=function(e){return Is(e)===cg};kn.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===bx};kn.isForwardRef=function(e){return Is(e)===dg};kn.isFragment=function(e){return Is(e)===ag};kn.isLazy=function(e){return Is(e)===mg};kn.isMemo=function(e){return Is(e)===gg};kn.isPortal=function(e){return Is(e)===Sx};kn.isProfiler=function(e){return Is(e)===ug};kn.isStrictMode=function(e){return Is(e)===lg};kn.isSuspense=function(e){return Is(e)===hg};kn.isSuspenseList=function(e){return Is(e)===pg};kn.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ag||e===ug||e===lg||e===hg||e===pg||e===zI||typeof e=="object"&&e!==null&&(e.$$typeof===mg||e.$$typeof===gg||e.$$typeof===cg||e.$$typeof===fg||e.$$typeof===dg||e.$$typeof===I3||e.getModuleId!==void 0)};kn.typeOf=Is;j3.exports=kn;var Cx=j3.exports;function BI(e){function t(Ee,_e,M,A,T){for(var V=0,N=0,he=0,oe=0,Se,Oe,Pe=0,Xe=0,Ne,Ze=Ne=Se=0,Me=0,st=0,Lt=0,it=0,$t=M.length,Nn=$t-1,et,tt="",Jt="",Or="",ur="",Rn;Me<$t;){if(Oe=M.charCodeAt(Me),Me===Nn&&N+oe+he+V!==0&&(N!==0&&(Oe=N===47?10:47),oe=he=V=0,$t++,Nn++),N+oe+he+V===0){if(Me===Nn&&(0<st&&(tt=tt.replace(x,"")),0<tt.trim().length)){switch(Oe){case 32:case 9:case 59:case 13:case 10:break;default:tt+=M.charAt(Me)}Oe=59}switch(Oe){case 123:for(tt=tt.trim(),Se=tt.charCodeAt(0),Ne=1,it=++Me;Me<$t;){switch(Oe=M.charCodeAt(Me)){case 123:Ne++;break;case 125:Ne--;break;case 47:switch(Oe=M.charCodeAt(Me+1)){case 42:case 47:e:{for(Ze=Me+1;Ze<Nn;++Ze)switch(M.charCodeAt(Ze)){case 47:if(Oe===42&&M.charCodeAt(Ze-1)===42&&Me+2!==Ze){Me=Ze+1;break e}break;case 10:if(Oe===47){Me=Ze+1;break e}}Me=Ze}}break;case 91:Oe++;case 40:Oe++;case 34:case 39:for(;Me++<Nn&&M.charCodeAt(Me)!==Oe;);}if(Ne===0)break;Me++}switch(Ne=M.substring(it,Me),Se===0&&(Se=(tt=tt.replace(b,"").trim()).charCodeAt(0)),Se){case 64:switch(0<st&&(tt=tt.replace(x,"")),Oe=tt.charCodeAt(1),Oe){case 100:case 109:case 115:case 45:st=_e;break;default:st=Ce}if(Ne=t(_e,st,Ne,Oe,T+1),it=Ne.length,0<ie&&(st=n(Ce,tt,Lt),Rn=u(3,Ne,st,_e,ae,ee,it,Oe,T,A),tt=st.join(""),Rn!==void 0&&(it=(Ne=Rn.trim()).length)===0&&(Oe=0,Ne="")),0<it)switch(Oe){case 115:tt=tt.replace(D,a);case 100:case 109:case 45:Ne=tt+"{"+Ne+"}";break;case 107:tt=tt.replace(y,"$1 $2"),Ne=tt+"{"+Ne+"}",Ne=Re===1||Re===2&&o("@"+Ne,3)?"@-webkit-"+Ne+"@"+Ne:"@"+Ne;break;default:Ne=tt+Ne,A===112&&(Ne=(Jt+=Ne,""))}else Ne="";break;default:Ne=t(_e,n(_e,tt,Lt),Ne,A,T+1)}Or+=Ne,Ne=Lt=st=Ze=Se=0,tt="",Oe=M.charCodeAt(++Me);break;case 125:case 59:if(tt=(0<st?tt.replace(x,""):tt).trim(),1<(it=tt.length))switch(Ze===0&&(Se=tt.charCodeAt(0),Se===45||96<Se&&123>Se)&&(it=(tt=tt.replace(" ",":")).length),0<ie&&(Rn=u(1,tt,_e,Ee,ae,ee,Jt.length,A,T,A))!==void 0&&(it=(tt=Rn.trim()).length)===0&&(tt="\0\0"),Se=tt.charCodeAt(0),Oe=tt.charCodeAt(1),Se){case 0:break;case 64:if(Oe===105||Oe===99){ur+=tt+M.charAt(Me);break}default:tt.charCodeAt(it-1)!==58&&(Jt+=i(tt,Se,Oe,tt.charCodeAt(2)))}Lt=st=Ze=Se=0,tt="",Oe=M.charCodeAt(++Me)}}switch(Oe){case 13:case 10:N===47?N=0:1+Se===0&&A!==107&&0<tt.length&&(st=1,tt+="\0"),0<ie*xe&&u(0,tt,_e,Ee,ae,ee,Jt.length,A,T,A),ee=1,ae++;break;case 59:case 125:if(N+oe+he+V===0){ee++;break}default:switch(ee++,et=M.charAt(Me),Oe){case 9:case 32:if(oe+V+N===0)switch(Pe){case 44:case 58:case 9:case 32:et="";break;default:Oe!==32&&(et=" ")}break;case 0:et="\\0";break;case 12:et="\\f";break;case 11:et="\\v";break;case 38:oe+N+V===0&&(st=Lt=1,et="\f"+et);break;case 108:if(oe+N+V+le===0&&0<Ze)switch(Me-Ze){case 2:Pe===112&&M.charCodeAt(Me-3)===58&&(le=Pe);case 8:Xe===111&&(le=Xe)}break;case 58:oe+N+V===0&&(Ze=Me);break;case 44:N+he+oe+V===0&&(st=1,et+="\r");break;case 34:case 39:N===0&&(oe=oe===Oe?0:oe===0?Oe:oe);break;case 91:oe+N+he===0&&V++;break;case 93:oe+N+he===0&&V--;break;case 41:oe+N+V===0&&he--;break;case 40:if(oe+N+V===0){if(Se===0)switch(2*Pe+3*Xe){case 533:break;default:Se=1}he++}break;case 64:N+he+oe+V+Ze+Ne===0&&(Ne=1);break;case 42:case 47:if(!(0<oe+V+he))switch(N){case 0:switch(2*Oe+3*M.charCodeAt(Me+1)){case 235:N=47;break;case 220:it=Me,N=42}break;case 42:Oe===47&&Pe===42&&it+2!==Me&&(M.charCodeAt(it+2)===33&&(Jt+=M.substring(it,Me+1)),et="",N=0)}}N===0&&(tt+=et)}Xe=Pe,Pe=Oe,Me++}if(it=Jt.length,0<it){if(st=_e,0<ie&&(Rn=u(2,Jt,st,Ee,ae,ee,it,A,T,A),Rn!==void 0&&(Jt=Rn).length===0))return ur+Jt+Or;if(Jt=st.join(",")+"{"+Jt+"}",Re*le!==0){switch(Re!==2||o(Jt,2)||(le=0),le){case 111:Jt=Jt.replace(I,":-moz-$1")+Jt;break;case 112:Jt=Jt.replace(E,"::-webkit-input-$1")+Jt.replace(E,"::-moz-$1")+Jt.replace(E,":-ms-input-$1")+Jt}le=0}}return ur+Jt+Or}function n(Ee,_e,M){var A=_e.trim().split(j);_e=A;var T=A.length,V=Ee.length;switch(V){case 0:case 1:var N=0;for(Ee=V===0?"":Ee[0]+" ";N<T;++N)_e[N]=r(Ee,_e[N],M).trim();break;default:var he=N=0;for(_e=[];N<T;++N)for(var oe=0;oe<V;++oe)_e[he++]=r(Ee[oe]+" ",A[N],M).trim()}return _e}function r(Ee,_e,M){var A=_e.charCodeAt(0);switch(33>A&&(A=(_e=_e.trim()).charCodeAt(0)),A){case 38:return _e.replace($,"$1"+Ee.trim());case 58:return Ee.trim()+_e.replace($,"$1"+Ee.trim());default:if(0<1*M&&0<_e.indexOf("\f"))return _e.replace($,(Ee.charCodeAt(0)===58?"":"$1")+Ee.trim())}return Ee+_e}function i(Ee,_e,M,A){var T=Ee+";",V=2*_e+3*M+4*A;if(V===944){Ee=T.indexOf(":",9)+1;var N=T.substring(Ee,T.length-1).trim();return N=T.substring(0,Ee).trim()+N+";",Re===1||Re===2&&o(N,1)?"-webkit-"+N+N:N}if(Re===0||Re===2&&!o(T,1))return T;switch(V){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(K,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return N=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+T+"-ms-flex-pack"+N+T;case 1005:return S.test(T)?T.replace(g,":-webkit-")+T.replace(g,":-moz-")+T:T;case 1e3:switch(N=T.substring(13).trim(),_e=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(_e)){case 226:N=T.replace(k,"tb");break;case 232:N=T.replace(k,"tb-rl");break;case 220:N=T.replace(k,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+N+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(_e=(T=Ee).length-10,N=(T.charCodeAt(_e)===33?T.substring(0,_e):T).substring(Ee.indexOf(":",7)+1).trim(),V=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:T=T.replace(N,"-webkit-"+N)+";"+T;break;case 207:case 102:T=T.replace(N,"-webkit-"+(102<V?"inline-":"")+"box")+";"+T.replace(N,"-webkit-"+N)+";"+T.replace(N,"-ms-"+N+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return N=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+N+"-ms-flex-"+N+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(O,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(O,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(q.test(Ee)===!0)return(N=Ee.substring(Ee.indexOf(":")+1)).charCodeAt(0)===115?i(Ee.replace("stretch","fill-available"),_e,M,A).replace(":fill-available",":stretch"):T.replace(N,"-webkit-"+N)+T.replace(N,"-moz-"+N.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,M+A===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+T}return T}function o(Ee,_e){var M=Ee.indexOf(_e===1?":":"{"),A=Ee.substring(0,_e!==3?M:10);return M=Ee.substring(M+1,Ee.length-1),te(_e!==2?A:A.replace(G,"$1"),M,_e)}function a(Ee,_e){var M=i(_e,_e.charCodeAt(0),_e.charCodeAt(1),_e.charCodeAt(2));return M!==_e+";"?M.replace(R," or ($1)").substring(4):"("+_e+")"}function u(Ee,_e,M,A,T,V,N,he,oe,Se){for(var Oe=0,Pe=_e,Xe;Oe<ie;++Oe)switch(Xe=ce[Oe].call(v,Ee,Pe,M,A,T,V,N,he,oe,Se)){case void 0:case!1:case!0:case null:break;default:Pe=Xe}if(Pe!==_e)return Pe}function c(Ee){switch(Ee){case void 0:case null:ie=ce.length=0;break;default:if(typeof Ee=="function")ce[ie++]=Ee;else if(typeof Ee=="object")for(var _e=0,M=Ee.length;_e<M;++_e)c(Ee[_e]);else xe=!!Ee|0}return c}function f(Ee){return Ee=Ee.prefix,Ee!==void 0&&(te=null,Ee?typeof Ee!="function"?Re=1:(Re=2,te=Ee):Re=0),f}function v(Ee,_e){var M=Ee;if(33>M.charCodeAt(0)&&(M=M.trim()),$e=M,M=[$e],0<ie){var A=u(-1,_e,M,M,ae,ee,0,0,0,0);A!==void 0&&typeof A=="string"&&(_e=A)}var T=t(Ce,M,_e,0,0);return 0<ie&&(A=u(-2,T,M,M,ae,ee,T.length,0,0,0),A!==void 0&&(T=A)),$e="",le=0,ee=ae=1,T}var b=/^\0+/g,x=/[\0\r\f]/g,g=/: */g,S=/zoo|gra/,w=/([,: ])(transform)/g,j=/,\r+?/g,$=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,E=/::(place)/g,I=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,D=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,O=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,q=/stretch|:\s*\w+\-(?:conte|avail)/,K=/([^-])(image-set\()/,ee=1,ae=1,le=0,Re=1,Ce=[],ce=[],ie=0,te=null,xe=0,$e="";return v.use=c,v.set=f,e!==void 0&&f(e),v}var NI={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function L3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var WI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,N1=L3(function(e){return WI.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),U3={exports:{}},En={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ni=typeof Symbol=="function"&&Symbol.for,kx=ni?Symbol.for("react.element"):60103,Ex=ni?Symbol.for("react.portal"):60106,vg=ni?Symbol.for("react.fragment"):60107,yg=ni?Symbol.for("react.strict_mode"):60108,xg=ni?Symbol.for("react.profiler"):60114,wg=ni?Symbol.for("react.provider"):60109,_g=ni?Symbol.for("react.context"):60110,Tx=ni?Symbol.for("react.async_mode"):60111,bg=ni?Symbol.for("react.concurrent_mode"):60111,Sg=ni?Symbol.for("react.forward_ref"):60112,Cg=ni?Symbol.for("react.suspense"):60113,HI=ni?Symbol.for("react.suspense_list"):60120,kg=ni?Symbol.for("react.memo"):60115,Eg=ni?Symbol.for("react.lazy"):60116,VI=ni?Symbol.for("react.block"):60121,GI=ni?Symbol.for("react.fundamental"):60117,YI=ni?Symbol.for("react.responder"):60118,XI=ni?Symbol.for("react.scope"):60119;function ss(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case kx:switch(e=e.type,e){case Tx:case bg:case vg:case xg:case yg:case Cg:return e;default:switch(e=e&&e.$$typeof,e){case _g:case Sg:case Eg:case kg:case wg:return e;default:return t}}case Ex:return t}}}function M3(e){return ss(e)===bg}En.AsyncMode=Tx;En.ConcurrentMode=bg;En.ContextConsumer=_g;En.ContextProvider=wg;En.Element=kx;En.ForwardRef=Sg;En.Fragment=vg;En.Lazy=Eg;En.Memo=kg;En.Portal=Ex;En.Profiler=xg;En.StrictMode=yg;En.Suspense=Cg;En.isAsyncMode=function(e){return M3(e)||ss(e)===Tx};En.isConcurrentMode=M3;En.isContextConsumer=function(e){return ss(e)===_g};En.isContextProvider=function(e){return ss(e)===wg};En.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===kx};En.isForwardRef=function(e){return ss(e)===Sg};En.isFragment=function(e){return ss(e)===vg};En.isLazy=function(e){return ss(e)===Eg};En.isMemo=function(e){return ss(e)===kg};En.isPortal=function(e){return ss(e)===Ex};En.isProfiler=function(e){return ss(e)===xg};En.isStrictMode=function(e){return ss(e)===yg};En.isSuspense=function(e){return ss(e)===Cg};En.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vg||e===bg||e===xg||e===yg||e===Cg||e===HI||typeof e=="object"&&e!==null&&(e.$$typeof===Eg||e.$$typeof===kg||e.$$typeof===wg||e.$$typeof===_g||e.$$typeof===Sg||e.$$typeof===GI||e.$$typeof===YI||e.$$typeof===XI||e.$$typeof===VI)};En.typeOf=ss;U3.exports=En;var W1=U3.exports,Ax=W1,KI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},QI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},D3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rx={};Rx[Ax.ForwardRef]=QI;Rx[Ax.Memo]=D3;function C2(e){return Ax.isMemo(e)?D3:Rx[e.$$typeof]||KI}var JI=Object.defineProperty,ZI=Object.getOwnPropertyNames,k2=Object.getOwnPropertySymbols,eL=Object.getOwnPropertyDescriptor,tL=Object.getPrototypeOf,E2=Object.prototype;function F3(e,t,n){if(typeof t!="string"){if(E2){var r=tL(t);r&&r!==E2&&F3(e,r,n)}var i=ZI(t);k2&&(i=i.concat(k2(t)));for(var o=C2(e),a=C2(t),u=0;u<i.length;++u){var c=i[u];if(!qI[c]&&!(n&&n[c])&&!(a&&a[c])&&!(o&&o[c])){var f=eL(t,c);try{JI(e,c,f)}catch{}}}}return e}var nL=F3;const rL=Rc(nL);function na(){return(na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var T2=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},H1=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Cx.typeOf(e)},y0=Object.freeze([]),bu=Object.freeze({});function jf(e){return typeof e=="function"}function A2(e){return e.displayName||e.name||"Component"}function Px(e){return e&&typeof e.styledComponentId=="string"}var If=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",$x=typeof window<"u"&&"HTMLElement"in window,iL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),oL={};function Cc(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var sL=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Cc(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var u=o;u<a;u++)this.groupSizes[u]=0}for(var c=this.indexOfGroup(n+1),f=0,v=r.length;f<v;f++)this.tag.insertRule(c,r[f])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,u=o;u<a;u++)r+=this.tag.getRule(u)+`/*!sc*/
`;return r},e}(),Dp=new Map,x0=new Map,Dd=1,_p=function(e){if(Dp.has(e))return Dp.get(e);for(;x0.has(Dd);)Dd++;var t=Dd++;return Dp.set(e,t),x0.set(t,e),t},aL=function(e){return x0.get(e)},lL=function(e,t){t>=Dd&&(Dd=t+1),Dp.set(e,t),x0.set(t,e)},uL="style["+If+'][data-styled-version="5.3.6"]',cL=new RegExp("^"+If+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fL=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},dL=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var u=a.match(cL);if(u){var c=0|parseInt(u[1],10),f=u[2];c!==0&&(lL(f,c),fL(e,f,u[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},hL=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},z3=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(u){for(var c=u.childNodes,f=c.length;f>=0;f--){var v=c[f];if(v&&v.nodeType===1&&v.hasAttribute(If))return v}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(If,"active"),r.setAttribute("data-styled-version","5.3.6");var a=hL();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},pL=function(){function e(n){var r=this.element=z3(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,u=o.length;a<u;a++){var c=o[a];if(c.ownerNode===i)return c}Cc(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),gL=function(){function e(n){var r=this.element=z3(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),mL=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),R2=$x,vL={isServer:!$x,useCSSOMInjection:!iL},w0=function(){function e(n,r,i){n===void 0&&(n=bu),r===void 0&&(r={}),this.options=na({},vL,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&$x&&R2&&(R2=!1,function(o){for(var a=document.querySelectorAll(uL),u=0,c=a.length;u<c;u++){var f=a[u];f&&f.getAttribute(If)!=="active"&&(dL(o,f),f.parentNode&&f.parentNode.removeChild(f))}}(this))}e.registerId=function(n){return _p(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(na({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new mL(a):o?new pL(a):new gL(a),new sL(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(_p(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(_p(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(_p(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var u=aL(a);if(u!==void 0){var c=n.names.get(u),f=r.getGroup(a);if(c&&f&&c.size){var v=If+".g"+a+'[id="'+u+'"]',b="";c!==void 0&&c.forEach(function(x){x.length>0&&(b+=x+",")}),o+=""+f+v+'{content:"'+b+`"}/*!sc*/
`}}}return o}(this)},e}(),yL=/(a)(d)/gi,P2=function(e){return String.fromCharCode(e+(e>25?39:97))};function V1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=P2(t%52)+n;return(P2(t%52)+n).replace(yL,"$1-$2")}var cf=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},B3=function(e){return cf(5381,e)};function N3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jf(n)&&!Px(n))return!1}return!0}var xL=B3("5.3.6"),wL=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&N3(t),this.componentId=n,this.baseHash=cf(xL,n),this.baseStyle=r,w0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=kc(this.rules,t,n,r).join(""),u=V1(cf(this.baseHash,a)>>>0);if(!n.hasNameForId(i,u)){var c=r(a,"."+u,void 0,i);n.insertRules(i,u,c)}o.push(u),this.staticRulesId=u}else{for(var f=this.rules.length,v=cf(this.baseHash,r.hash),b="",x=0;x<f;x++){var g=this.rules[x];if(typeof g=="string")b+=g;else if(g){var S=kc(g,t,n,r),w=Array.isArray(S)?S.join(""):S;v=cf(v,w+x),b+=w}}if(b){var j=V1(v>>>0);if(!n.hasNameForId(i,j)){var $=r(b,"."+j,void 0,i);n.insertRules(i,j,$)}o.push(j)}}return o.join(" ")},e}(),_L=/^\s*\/\/.*$/gm,bL=[":","[",".","#"];function SL(e){var t,n,r,i,o=e===void 0?bu:e,a=o.options,u=a===void 0?bu:a,c=o.plugins,f=c===void 0?y0:c,v=new BI(u),b=[],x=function(w){function j($){if($)try{w($+"}")}catch{}}return function($,y,E,I,k,D,R,O,G,q){switch($){case 1:if(G===0&&y.charCodeAt(0)===64)return w(y+";"),"";break;case 2:if(O===0)return y+"/*|*/";break;case 3:switch(O){case 102:case 112:return w(E[0]+y),"";default:return y+(q===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(j)}}}(function(w){b.push(w)}),g=function(w,j,$){return j===0&&bL.indexOf($[n.length])!==-1||$.match(i)?w:"."+t};function S(w,j,$,y){y===void 0&&(y="&");var E=w.replace(_L,""),I=j&&$?$+" "+j+" { "+E+" }":E;return t=y,n=j,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),v($||!j?"":j,I)}return v.use([].concat(f,[function(w,j,$){w===2&&$.length&&$[0].lastIndexOf(n)>0&&($[0]=$[0].replace(r,g))},x,function(w){if(w===-2){var j=b;return b=[],j}}])),S.hash=f.length?f.reduce(function(w,j){return j.name||Cc(15),cf(w,j.name)},5381).toString():"",S}var W3=vt.createContext();W3.Consumer;var H3=vt.createContext(),CL=(H3.Consumer,new w0),G1=SL();function V3(){return we.useContext(W3)||CL}function G3(){return we.useContext(H3)||G1}var Y3=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=G1);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Cc(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=G1),this.name+t.hash},e}(),kL=/([A-Z])/,EL=/([A-Z])/g,TL=/^ms-/,AL=function(e){return"-"+e.toLowerCase()};function $2(e){return kL.test(e)?e.replace(EL,AL).replace(TL,"-ms-"):e}var O2=function(e){return e==null||e===!1||e===""};function kc(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,u=e.length;a<u;a+=1)(i=kc(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(O2(e))return"";if(Px(e))return"."+e.styledComponentId;if(jf(e)){if(typeof(f=e)!="function"||f.prototype&&f.prototype.isReactComponent||!t)return e;var c=e(t);return kc(c,t,n,r)}var f;return e instanceof Y3?n?(e.inject(n,r),e.getName(r)):e:H1(e)?function v(b,x){var g,S,w=[];for(var j in b)b.hasOwnProperty(j)&&!O2(b[j])&&(Array.isArray(b[j])&&b[j].isCss||jf(b[j])?w.push($2(j)+":",b[j],";"):H1(b[j])?w.push.apply(w,v(b[j],j)):w.push($2(j)+": "+(g=j,(S=b[j])==null||typeof S=="boolean"||S===""?"":typeof S!="number"||S===0||g in NI?String(S).trim():S+"px")+";"));return x?[x+" {"].concat(w,["}"]):w}(e):e.toString()}var j2=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return jf(e)||H1(e)?j2(kc(T2(y0,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:j2(kc(T2(e,n)))}var X3=function(e,t,n){return n===void 0&&(n=bu),e.theme!==n.theme&&e.theme||t||n.theme},RL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,PL=/(^-|-$)/g;function lv(e){return e.replace(RL,"-").replace(PL,"")}var Ox=function(e){return V1(B3(e)>>>0)};function bp(e){return typeof e=="string"&&!0}var Y1=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},$L=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function OL(e,t,n){var r=e[n];Y1(t)&&Y1(r)?K3(r,t):e[n]=t}function K3(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Y1(a))for(var u in a)$L(u)&&OL(e,a[u],u)}return e}var Lf=vt.createContext();Lf.Consumer;function jL(e){var t=we.useContext(Lf),n=we.useMemo(function(){return function(r,i){if(!r)return Cc(14);if(jf(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Cc(8):i?na({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?vt.createElement(Lf.Provider,{value:n},e.children):null}var uv={};function q3(e,t,n){var r=Px(e),i=!bp(e),o=t.attrs,a=o===void 0?y0:o,u=t.componentId,c=u===void 0?function(y,E){var I=typeof y!="string"?"sc":lv(y);uv[I]=(uv[I]||0)+1;var k=I+"-"+Ox("5.3.6"+I+uv[I]);return E?E+"-"+k:k}(t.displayName,t.parentComponentId):u,f=t.displayName,v=f===void 0?function(y){return bp(y)?"styled."+y:"Styled("+A2(y)+")"}(e):f,b=t.displayName&&t.componentId?lv(t.displayName)+"-"+t.componentId:t.componentId||c,x=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(y,E,I){return e.shouldForwardProp(y,E,I)&&t.shouldForwardProp(y,E,I)}:e.shouldForwardProp);var S,w=new wL(n,b,r?e.componentStyle:void 0),j=w.isStatic&&a.length===0,$=function(y,E){return function(I,k,D,R){var O=I.attrs,G=I.componentStyle,q=I.defaultProps,K=I.foldedComponentIds,ee=I.shouldForwardProp,ae=I.styledComponentId,le=I.target,Re=function(A,T,V){A===void 0&&(A=bu);var N=na({},T,{theme:A}),he={};return V.forEach(function(oe){var Se,Oe,Pe,Xe=oe;for(Se in jf(Xe)&&(Xe=Xe(N)),Xe)N[Se]=he[Se]=Se==="className"?(Oe=he[Se],Pe=Xe[Se],Oe&&Pe?Oe+" "+Pe:Oe||Pe):Xe[Se]}),[N,he]}(X3(k,we.useContext(Lf),q)||bu,k,O),Ce=Re[0],ce=Re[1],ie=function(A,T,V,N){var he=V3(),oe=G3(),Se=T?A.generateAndInjectStyles(bu,he,oe):A.generateAndInjectStyles(V,he,oe);return Se}(G,R,Ce),te=D,xe=ce.$as||k.$as||ce.as||k.as||le,$e=bp(xe),Ee=ce!==k?na({},k,{},ce):k,_e={};for(var M in Ee)M[0]!=="$"&&M!=="as"&&(M==="forwardedAs"?_e.as=Ee[M]:(ee?ee(M,N1,xe):!$e||N1(M))&&(_e[M]=Ee[M]));return k.style&&ce.style!==k.style&&(_e.style=na({},k.style,{},ce.style)),_e.className=Array.prototype.concat(K,ae,ie!==ae?ie:null,k.className,ce.className).filter(Boolean).join(" "),_e.ref=te,we.createElement(xe,_e)}(S,y,E,j)};return $.displayName=v,(S=vt.forwardRef($)).attrs=x,S.componentStyle=w,S.displayName=v,S.shouldForwardProp=g,S.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):y0,S.styledComponentId=b,S.target=r?e.target:e,S.withComponent=function(y){var E=t.componentId,I=function(D,R){if(D==null)return{};var O,G,q={},K=Object.keys(D);for(G=0;G<K.length;G++)O=K[G],R.indexOf(O)>=0||(q[O]=D[O]);return q}(t,["componentId"]),k=E&&E+"-"+(bp(y)?y:lv(A2(y)));return q3(y,na({},I,{attrs:x,componentId:k}),n)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?K3({},e.defaultProps,y):y}}),S.toString=function(){return"."+S.styledComponentId},i&&rL(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var X1=function(e){return function t(n,r,i){if(i===void 0&&(i=bu),!Cx.isValidElementType(r))return Cc(1,String(r));var o=function(){return n(r,i,xt.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,na({},i,{},a))},o.attrs=function(a){return t(n,r,na({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(q3,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){X1[e]=X1(e)});var IL=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=N3(n),w0.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(kc(this.rules,r,i,o).join(""),""),u=this.componentId+n;i.insertRules(u,u,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&w0.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function Q3(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xt.apply(void 0,[e].concat(n)),o="sc-global-"+Ox(JSON.stringify(i)),a=new IL(i,o);function u(f){var v=V3(),b=G3(),x=we.useContext(Lf),g=we.useRef(v.allocateGSInstance(o)).current;return v.server&&c(g,f,v,x,b),we.useLayoutEffect(function(){if(!v.server)return c(g,f,v,x,b),function(){return a.removeStyles(g,v)}},[g,f,v,x,b]),null}function c(f,v,b,x,g){if(a.isStatic)a.renderStyles(f,oL,b,g);else{var S=na({},v,{theme:X3(v,x,u.defaultProps)});a.renderStyles(f,S,b,g)}}return vt.memo(u)}function Nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xt.apply(void 0,[e].concat(n)).join(""),o=Ox(i);return new Y3(o,i)}var LL=function(){return we.useContext(Lf)};const Q=X1,UL=Q.img`
  //this was inline-block but it was upsetting the carousel, not sure if it's neededs
  display: block;
  ${({center:e})=>e?"margin: auto;":""}
`,Ut=we.forwardRef(({className:e,style:t,src:n,srcTablet:r,srcMobile:i,alt:o,center:a},u)=>{const[c,f]=we.useState(n),v=we.useCallback(()=>{r&&window.innerWidth<1025?f(r):i&&window.innerWidth<769?f(i):f(n)},[n,i,r]);return we.useEffect(()=>(window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}),[v]),we.useEffect(()=>{v()},[v]),m.jsx(UL,{ref:u,src:c,alt:o,style:t,className:e,draggable:!1,center:a})});Ut.displayName="Image";function fl(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J3(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ko={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Uf={duration:.5,overwrite:!1,delay:0},jx,Hi,wr,ks=1e8,$n=1/ks,K1=Math.PI*2,ML=K1/4,DL=0,Z3=Math.sqrt,FL=Math.cos,zL=Math.sin,ti=function(t){return typeof t=="string"},_r=function(t){return typeof t=="function"},_l=function(t){return typeof t=="number"},Ix=function(t){return typeof t>"u"},Fa=function(t){return typeof t=="object"},Co=function(t){return t!==!1},Lx=function(){return typeof window<"u"},Sp=function(t){return _r(t)||ti(t)},eT=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vi=Array.isArray,q1=/(?:-?\.?\d|\.)+/gi,tT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ff=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cv=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nT=/[+-]=-?[.\d]+/,rT=/[^,'"\[\]\s]+/gi,BL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ir,xs,Q1,Ux,ns={},_0={},iT,oT=function(t){return(_0=Ec(t,ns))&&Ao},Mx=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},b0=function(t,n){return!n&&console.warn(t)},sT=function(t,n){return t&&(ns[t]=n)&&_0&&(_0[t]=n)||ns},ah=function(){return 0},NL={suppressEvents:!0,isStart:!0,kill:!1},Fp={suppressEvents:!0,kill:!1},WL={suppressEvents:!0},Dx={},Su=[],J1={},aT,Ho={},fv={},I2=30,zp=[],Fx="",zx=function(t){var n=t[0],r,i;if(Fa(n)||_r(n)||(t=[t]),!(r=(n._gsap||{}).harness)){for(i=zp.length;i--&&!zp[i].targetTest(n););r=zp[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new $T(t[i],r)))||t.splice(i,1);return t},pc=function(t){return t._gsap||zx(Es(t))[0]._gsap},lT=function(t,n,r){return(r=t[n])&&_r(r)?t[n]():Ix(r)&&t.getAttribute&&t.getAttribute(n)||r},ko=function(t,n){return(t=t.split(",")).forEach(n)||t},Rr=function(t){return Math.round(t*1e5)/1e5||0},xi=function(t){return Math.round(t*1e7)/1e7||0},xf=function(t,n){var r=n.charAt(0),i=parseFloat(n.substr(2));return t=parseFloat(t),r==="+"?t+i:r==="-"?t-i:r==="*"?t*i:t/i},HL=function(t,n){for(var r=n.length,i=0;t.indexOf(n[i])<0&&++i<r;);return i<r},S0=function(){var t=Su.length,n=Su.slice(0),r,i;for(J1={},Su.length=0,r=0;r<t;r++)i=n[r],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},uT=function(t,n,r,i){Su.length&&!Hi&&S0(),t.render(n,r,i||Hi&&n<0&&(t._initted||t._startAt)),Su.length&&!Hi&&S0()},cT=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(rT).length<2?n:ti(t)?t.trim():t},fT=function(t){return t},js=function(t,n){for(var r in n)r in t||(t[r]=n[r]);return t},VL=function(t){return function(n,r){for(var i in r)i in n||i==="duration"&&t||i==="ease"||(n[i]=r[i])}},Ec=function(t,n){for(var r in n)t[r]=n[r];return t},L2=function e(t,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=Fa(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},C0=function(t,n){var r={},i;for(i in t)i in n||(r[i]=t[i]);return r},Fd=function(t){var n=t.parent||ir,r=t.keyframes?VL(Vi(t.keyframes)):js;if(Co(t.inherit))for(;n;)r(t,n.vars.defaults),n=n.parent||n._dp;return t},GL=function(t,n){for(var r=t.length,i=r===n.length;i&&r--&&t[r]===n[r];);return r<0},dT=function(t,n,r,i,o){r===void 0&&(r="_first"),i===void 0&&(i="_last");var a=t[i],u;if(o)for(u=n[o];a&&a[o]>u;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=t[r],t[r]=n),n._next?n._next._prev=n:t[i]=n,n._prev=a,n.parent=n._dp=t,n},Tg=function(t,n,r,i){r===void 0&&(r="_first"),i===void 0&&(i="_last");var o=n._prev,a=n._next;o?o._next=a:t[r]===n&&(t[r]=a),a?a._prev=o:t[i]===n&&(t[i]=o),n._next=n._prev=n.parent=null},Ru=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gc=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t},YL=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Z1=function(t,n,r,i){return t._startAt&&(Hi?t._startAt.revert(Fp):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,i))},XL=function e(t){return!t||t._ts&&e(t.parent)},U2=function(t){return t._repeat?Mf(t._tTime,t=t.duration()+t._rDelay)*t:0},Mf=function(t,n){var r=Math.floor(t/=n);return t&&r===t?r-1:r},k0=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Ag=function(t){return t._end=xi(t._start+(t._tDur/Math.abs(t._ts||t._rts||$n)||0))},Rg=function(t,n){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=xi(r._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Ag(t),r._dirty||gc(r,t)),t},hT=function(t,n){var r;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(r=k0(t.rawTime(),n),(!n._dur||Ah(0,n.totalDuration(),r)-n._tTime>$n)&&n.render(r,!0)),gc(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-$n}},Ra=function(t,n,r,i){return n.parent&&Ru(n),n._start=xi((_l(r)?r:r||t!==ir?ys(t,r,n):t._time)+n._delay),n._end=xi(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),dT(t,n,"_first","_last",t._sort?"_start":0),ey(n)||(t._recent=n),i||hT(t,n),t._ts<0&&Rg(t,t._tTime),t},pT=function(t,n){return(ns.ScrollTrigger||Mx("scrollTrigger",n))&&ns.ScrollTrigger.create(n,t)},gT=function(t,n,r,i,o){if(Nx(t,n,o),!t._initted)return 1;if(!r&&t._pt&&!Hi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&aT!==Vo.frame)return Su.push(t),t._lazy=[o,i],1},KL=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},ey=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},qL=function(t,n,r,i){var o=t.ratio,a=n<0||!n&&(!t._start&&KL(t)&&!(!t._initted&&ey(t))||(t._ts<0||t._dp._ts<0)&&!ey(t))?0:1,u=t._rDelay,c=0,f,v,b;if(u&&t._repeat&&(c=Ah(0,t._tDur,n),v=Mf(c,u),t._yoyo&&v&1&&(a=1-a),v!==Mf(t._tTime,u)&&(o=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==o||Hi||i||t._zTime===$n||!n&&t._zTime){if(!t._initted&&gT(t,n,i,r,c))return;for(b=t._zTime,t._zTime=n||(r?$n:0),r||(r=n&&!b),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,f=t._pt;f;)f.r(a,f.d),f=f._next;n<0&&Z1(t,n,r,!0),t._onUpdate&&!r&&Ts(t,"onUpdate"),c&&t._repeat&&!r&&t.parent&&Ts(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===a&&(a&&Ru(t,1),!r&&!Hi&&(Ts(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},QL=function(t,n,r){var i;if(r>n)for(i=t._first;i&&i._start<=r;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},Df=function(t,n,r,i){var o=t._repeat,a=xi(n)||0,u=t._tTime/t._tDur;return u&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=o?o<0?1e10:xi(a*(o+1)+t._rDelay*o):a,u>0&&!i&&Rg(t,t._tTime=t._tDur*u),t.parent&&Ag(t),r||gc(t.parent,t),t},M2=function(t){return t instanceof xo?gc(t):Df(t,t._dur)},JL={_start:0,endTime:ah,totalDuration:ah},ys=function e(t,n,r){var i=t.labels,o=t._recent||JL,a=t.duration()>=ks?o.endTime(!1):t._dur,u,c,f;return ti(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),f=n.substr(-1)==="%",u=n.indexOf("="),c==="<"||c===">"?(u>=0&&(n=n.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(n.substr(1))||0)*(f?(u<0?o:r).totalDuration()/100:1)):u<0?(n in i||(i[n]=a),i[n]):(c=parseFloat(n.charAt(u-1)+n.substr(u+1)),f&&r&&(c=c/100*(Vi(r)?r[0]:r).totalDuration()),u>1?e(t,n.substr(0,u-1),r)+c:a+c)):n==null?a:+n},zd=function(t,n,r){var i=_l(n[1]),o=(i?2:1)+(t<2?0:1),a=n[o],u,c;if(i&&(a.duration=n[1]),a.parent=r,t){for(u=a,c=r;c&&!("immediateRender"in u);)u=c.vars.defaults||{},c=Co(c.vars.inherit)&&c.parent;a.immediateRender=Co(u.immediateRender),t<2?a.runBackwards=1:a.startAt=n[o-1]}return new Dr(n[0],a,n[o+1])},Du=function(t,n){return t||t===0?n(t):n},Ah=function(t,n,r){return r<t?t:r>n?n:r},Ni=function(t,n){return!ti(t)||!(n=BL.exec(t))?"":n[1]},ZL=function(t,n,r){return Du(r,function(i){return Ah(t,n,i)})},ty=[].slice,mT=function(t,n){return t&&Fa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Fa(t[0]))&&!t.nodeType&&t!==xs},eU=function(t,n,r){return r===void 0&&(r=[]),t.forEach(function(i){var o;return ti(i)&&!n||mT(i,1)?(o=r).push.apply(o,Es(i)):r.push(i)})||r},Es=function(t,n,r){return wr&&!n&&wr.selector?wr.selector(t):ti(t)&&!r&&(Q1||!Ff())?ty.call((n||Ux).querySelectorAll(t),0):Vi(t)?eU(t,r):mT(t)?ty.call(t,0):t?[t]:[]},ny=function(t){return t=Es(t)[0]||b0("Invalid scope")||{},function(n){var r=t.current||t.nativeElement||t;return Es(n,r.querySelectorAll?r:r===t?b0("Invalid scope")||Ux.createElement("div"):t)}},vT=function(t){return t.sort(function(){return .5-Math.random()})},yT=function(t){if(_r(t))return t;var n=Fa(t)?t:{each:t},r=mc(n.ease),i=n.from||0,o=parseFloat(n.base)||0,a={},u=i>0&&i<1,c=isNaN(i)||u,f=n.axis,v=i,b=i;return ti(i)?v=b={center:.5,edges:.5,end:1}[i]||0:!u&&c&&(v=i[0],b=i[1]),function(x,g,S){var w=(S||n).length,j=a[w],$,y,E,I,k,D,R,O,G;if(!j){if(G=n.grid==="auto"?0:(n.grid||[1,ks])[1],!G){for(R=-ks;R<(R=S[G++].getBoundingClientRect().left)&&G<w;);G--}for(j=a[w]=[],$=c?Math.min(G,w)*v-.5:i%G,y=G===ks?0:c?w*b/G-.5:i/G|0,R=0,O=ks,D=0;D<w;D++)E=D%G-$,I=y-(D/G|0),j[D]=k=f?Math.abs(f==="y"?I:E):Z3(E*E+I*I),k>R&&(R=k),k<O&&(O=k);i==="random"&&vT(j),j.max=R-O,j.min=O,j.v=w=(parseFloat(n.amount)||parseFloat(n.each)*(G>w?w-1:f?f==="y"?w/G:G:Math.max(G,w/G))||0)*(i==="edges"?-1:1),j.b=w<0?o-w:o,j.u=Ni(n.amount||n.each)||0,r=r&&w<0?AT(r):r}return w=(j[x]-j.min)/j.max||0,xi(j.b+(r?r(w):w)*j.v)+j.u}},ry=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(r){var i=xi(Math.round(parseFloat(r)/t)*t*n);return(i-i%1)/n+(_l(r)?0:Ni(r))}},xT=function(t,n){var r=Vi(t),i,o;return!r&&Fa(t)&&(i=r=t.radius||ks,t.values?(t=Es(t.values),(o=!_l(t[0]))&&(i*=i)):t=ry(t.increment)),Du(n,r?_r(t)?function(a){return o=t(a),Math.abs(o-a)<=i?o:a}:function(a){for(var u=parseFloat(o?a.x:a),c=parseFloat(o?a.y:0),f=ks,v=0,b=t.length,x,g;b--;)o?(x=t[b].x-u,g=t[b].y-c,x=x*x+g*g):x=Math.abs(t[b]-u),x<f&&(f=x,v=b);return v=!i||f<=i?t[v]:a,o||v===a||_l(a)?v:v+Ni(a)}:ry(t))},wT=function(t,n,r,i){return Du(Vi(t)?!n:r===!0?!!(r=0):!i,function(){return Vi(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(n-t+r*.99))/r)*r*i)/i})},tU=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduce(function(o,a){return a(o)},i)}},nU=function(t,n){return function(r){return t(parseFloat(r))+(n||Ni(r))}},rU=function(t,n,r){return bT(t,n,0,1,r)},_T=function(t,n,r){return Du(r,function(i){return t[~~n(i)]})},iU=function e(t,n,r){var i=n-t;return Vi(t)?_T(t,e(0,t.length),n):Du(r,function(o){return(i+(o-t)%i)%i+t})},oU=function e(t,n,r){var i=n-t,o=i*2;return Vi(t)?_T(t,e(0,t.length-1),n):Du(r,function(a){return a=(o+(a-t)%o)%o||0,t+(a>i?o-a:a)})},lh=function(t){for(var n=0,r="",i,o,a,u;~(i=t.indexOf("random(",n));)a=t.indexOf(")",i),u=t.charAt(i+7)==="[",o=t.substr(i+7,a-i-7).match(u?rT:q1),r+=t.substr(n,i-n)+wT(u?o:+o[0],u?0:+o[1],+o[2]||1e-5),n=a+1;return r+t.substr(n,t.length-n)},bT=function(t,n,r,i,o){var a=n-t,u=i-r;return Du(o,function(c){return r+((c-t)/a*u||0)})},sU=function e(t,n,r,i){var o=isNaN(t+n)?0:function(g){return(1-g)*t+g*n};if(!o){var a=ti(t),u={},c,f,v,b,x;if(r===!0&&(i=1)&&(r=null),a)t={p:t},n={p:n};else if(Vi(t)&&!Vi(n)){for(v=[],b=t.length,x=b-2,f=1;f<b;f++)v.push(e(t[f-1],t[f]));b--,o=function(S){S*=b;var w=Math.min(x,~~S);return v[w](S-w)},r=n}else i||(t=Ec(Vi(t)?[]:{},t));if(!v){for(c in n)Bx.call(u,t,c,"get",n[c]);o=function(S){return Vx(S,u)||(a?t.p:t)}}}return Du(r,o)},D2=function(t,n,r){var i=t.labels,o=ks,a,u,c;for(a in i)u=i[a]-n,u<0==!!r&&u&&o>(u=Math.abs(u))&&(c=a,o=u);return c},Ts=function(t,n,r){var i=t.vars,o=i[n],a=wr,u=t._ctx,c,f,v;if(o)return c=i[n+"Params"],f=i.callbackScope||t,r&&Su.length&&S0(),u&&(wr=u),v=c?o.apply(f,c):o.call(f),wr=a,v},kd=function(t){return Ru(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Hi),t.progress()<1&&Ts(t,"onInterrupt"),t},df,ST=[],CT=function(t){if(Lx()&&t){t=!t.name&&t.default||t;var n=t.name,r=_r(t),i=n&&!r&&t.init?function(){this._props=[]}:t,o={init:ah,render:Vx,add:Bx,kill:bU,modifier:_U,rawVars:0},a={targetTest:0,get:0,getSetter:Hx,aliases:{},register:0};if(Ff(),t!==i){if(Ho[n])return;js(i,js(C0(t,o),a)),Ec(i.prototype,Ec(o,C0(t,a))),Ho[i.prop=n]=i,t.targetTest&&(zp.push(i),Dx[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}sT(n,i),t.register&&t.register(Ao,i,Eo)}else t&&ST.push(t)},Pn=255,Ed={aqua:[0,Pn,Pn],lime:[0,Pn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pn],navy:[0,0,128],white:[Pn,Pn,Pn],olive:[128,128,0],yellow:[Pn,Pn,0],orange:[Pn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pn,0,0],pink:[Pn,192,203],cyan:[0,Pn,Pn],transparent:[Pn,Pn,Pn,0]},dv=function(t,n,r){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(r-n)*t*6:t<.5?r:t*3<2?n+(r-n)*(2/3-t)*6:n)*Pn+.5|0},kT=function(t,n,r){var i=t?_l(t)?[t>>16,t>>8&Pn,t&Pn]:0:Ed.black,o,a,u,c,f,v,b,x,g,S;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ed[t])i=Ed[t];else if(t.charAt(0)==="#"){if(t.length<6&&(o=t.charAt(1),a=t.charAt(2),u=t.charAt(3),t="#"+o+o+a+a+u+u+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Pn,i&Pn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Pn,t&Pn]}else if(t.substr(0,3)==="hsl"){if(i=S=t.match(q1),!n)c=+i[0]%360/360,f=+i[1]/100,v=+i[2]/100,a=v<=.5?v*(f+1):v+f-v*f,o=v*2-a,i.length>3&&(i[3]*=1),i[0]=dv(c+1/3,o,a),i[1]=dv(c,o,a),i[2]=dv(c-1/3,o,a);else if(~t.indexOf("="))return i=t.match(tT),r&&i.length<4&&(i[3]=1),i}else i=t.match(q1)||Ed.transparent;i=i.map(Number)}return n&&!S&&(o=i[0]/Pn,a=i[1]/Pn,u=i[2]/Pn,b=Math.max(o,a,u),x=Math.min(o,a,u),v=(b+x)/2,b===x?c=f=0:(g=b-x,f=v>.5?g/(2-b-x):g/(b+x),c=b===o?(a-u)/g+(a<u?6:0):b===a?(u-o)/g+2:(o-a)/g+4,c*=60),i[0]=~~(c+.5),i[1]=~~(f*100+.5),i[2]=~~(v*100+.5)),r&&i.length<4&&(i[3]=1),i},ET=function(t){var n=[],r=[],i=-1;return t.split(Cu).forEach(function(o){var a=o.match(ff)||[];n.push.apply(n,a),r.push(i+=a.length+1)}),n.c=r,n},F2=function(t,n,r){var i="",o=(t+i).match(Cu),a=n?"hsla(":"rgba(",u=0,c,f,v,b;if(!o)return t;if(o=o.map(function(x){return(x=kT(x,n,1))&&a+(n?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),r&&(v=ET(t),c=r.c,c.join(i)!==v.c.join(i)))for(f=t.replace(Cu,"1").split(ff),b=f.length-1;u<b;u++)i+=f[u]+(~c.indexOf(u)?o.shift()||a+"0,0,0,0)":(v.length?v:o.length?o:r).shift());if(!f)for(f=t.split(Cu),b=f.length-1;u<b;u++)i+=f[u]+o[u];return i+f[b]},Cu=function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ed)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),aU=/hsl[a]?\(/,TT=function(t){var n=t.join(" "),r;if(Cu.lastIndex=0,Cu.test(n))return r=aU.test(n),t[1]=F2(t[1],r),t[0]=F2(t[0],r,ET(t[1])),!0},uh,Vo=function(){var e=Date.now,t=500,n=33,r=e(),i=r,o=1e3/240,a=o,u=[],c,f,v,b,x,g,S=function w(j){var $=e()-i,y=j===!0,E,I,k,D;if($>t&&(r+=$-n),i+=$,k=i-r,E=k-a,(E>0||y)&&(D=++b.frame,x=k-b.time*1e3,b.time=k=k/1e3,a+=E+(E>=o?4:o-E),I=1),y||(c=f(w)),I)for(g=0;g<u.length;g++)u[g](k,x,D,j)};return b={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(j){return x/(1e3/(j||60))},wake:function(){iT&&(!Q1&&Lx()&&(xs=Q1=window,Ux=xs.document||{},ns.gsap=Ao,(xs.gsapVersions||(xs.gsapVersions=[])).push(Ao.version),oT(_0||xs.GreenSockGlobals||!xs.gsap&&xs||{}),v=xs.requestAnimationFrame,ST.forEach(CT)),c&&b.sleep(),f=v||function(j){return setTimeout(j,a-b.time*1e3+1|0)},uh=1,S(2))},sleep:function(){(v?xs.cancelAnimationFrame:clearTimeout)(c),uh=0,f=ah},lagSmoothing:function(j,$){t=j||1/0,n=Math.min($||33,t)},fps:function(j){o=1e3/(j||240),a=b.time*1e3+o},add:function(j,$,y){var E=$?function(I,k,D,R){j(I,k,D,R),b.remove(E)}:j;return b.remove(j),u[y?"unshift":"push"](E),Ff(),E},remove:function(j,$){~($=u.indexOf(j))&&u.splice($,1)&&g>=$&&g--},_listeners:u},b}(),Ff=function(){return!uh&&Vo.wake()},sn={},lU=/^[\d.\-M][\d.\-,\s]/,uU=/["']/g,cU=function(t){for(var n={},r=t.substr(1,t.length-3).split(":"),i=r[0],o=1,a=r.length,u,c,f;o<a;o++)c=r[o],u=o!==a-1?c.lastIndexOf(","):c.length,f=c.substr(0,u),n[i]=isNaN(f)?f.replace(uU,"").trim():+f,i=c.substr(u+1).trim();return n},fU=function(t){var n=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",n);return t.substring(n,~i&&i<r?t.indexOf(")",r+1):r)},dU=function(t){var n=(t+"").split("("),r=sn[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[cU(n[1])]:fU(t).split(",").map(cT)):sn._CE&&lU.test(t)?sn._CE("",t):r},AT=function(t){return function(n){return 1-t(1-n)}},RT=function e(t,n){for(var r=t._first,i;r;)r instanceof xo?e(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?e(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},mc=function(t,n){return t&&(_r(t)?t:sn[t]||dU(t))||n},Oc=function(t,n,r,i){r===void 0&&(r=function(c){return 1-n(1-c)}),i===void 0&&(i=function(c){return c<.5?n(c*2)/2:1-n((1-c)*2)/2});var o={easeIn:n,easeOut:r,easeInOut:i},a;return ko(t,function(u){sn[u]=ns[u]=o,sn[a=u.toLowerCase()]=r;for(var c in o)sn[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=sn[u+"."+c]=o[c]}),o},PT=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},hv=function e(t,n,r){var i=n>=1?n:1,o=(r||(t?.3:.45))/(n<1?n:1),a=o/K1*(Math.asin(1/i)||0),u=function(v){return v===1?1:i*Math.pow(2,-10*v)*zL((v-a)*o)+1},c=t==="out"?u:t==="in"?function(f){return 1-u(1-f)}:PT(u);return o=K1/o,c.config=function(f,v){return e(t,f,v)},c},pv=function e(t,n){n===void 0&&(n=1.70158);var r=function(a){return a?--a*a*((n+1)*a+n)+1:0},i=t==="out"?r:t==="in"?function(o){return 1-r(1-o)}:PT(r);return i.config=function(o){return e(t,o)},i};ko("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;Oc(e+",Power"+(n-1),t?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});sn.Linear.easeNone=sn.none=sn.Linear.easeIn;Oc("Elastic",hv("in"),hv("out"),hv());(function(e,t){var n=1/t,r=2*n,i=2.5*n,o=function(u){return u<n?e*u*u:u<r?e*Math.pow(u-1.5/t,2)+.75:u<i?e*(u-=2.25/t)*u+.9375:e*Math.pow(u-2.625/t,2)+.984375};Oc("Bounce",function(a){return 1-o(1-a)},o)})(7.5625,2.75);Oc("Expo",function(e){return e?Math.pow(2,10*(e-1)):0});Oc("Circ",function(e){return-(Z3(1-e*e)-1)});Oc("Sine",function(e){return e===1?1:-FL(e*ML)+1});Oc("Back",pv("in"),pv("out"),pv());sn.SteppedEase=sn.steps=ns.SteppedEase={config:function(t,n){t===void 0&&(t=1);var r=1/t,i=t+(n?0:1),o=n?1:0,a=1-$n;return function(u){return((i*Ah(0,a,u)|0)+o)*r}}};Uf.ease=sn["quad.out"];ko("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Fx+=e+","+e+"Params,"});var $T=function(t,n){this.id=DL++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:lT,this.set=n?n.getSetter:Hx},ch=function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Df(this,+n.duration,1,1),this.data=n.data,wr&&(this._ctx=wr,wr.data.push(this)),uh||Vo.wake()}var t=e.prototype;return t.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},t.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},t.totalDuration=function(r){return arguments.length?(this._dirty=0,Df(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(r,i){if(Ff(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Rg(this,r),!o._dp||o.parent||hT(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&Ra(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$n||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),uT(this,r,i)),this},t.time=function(r,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+U2(this))%(this._dur+this._rDelay)||(r?this._dur:0),i):this._time},t.totalProgress=function(r,i){return arguments.length?this.totalTime(this.totalDuration()*r,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(r,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+U2(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(r,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*o,i):this._repeat?Mf(this._tTime,o)+1:1},t.timeScale=function(r){if(!arguments.length)return this._rts===-$n?0:this._rts;if(this._rts===r)return this;var i=this.parent&&this._ts?k0(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-$n?0:this._rts,this.totalTime(Ah(-Math.abs(this._delay),this._tDur,i),!0),Ag(this),YL(this)},t.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ff(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$n&&(this._tTime-=$n)))),this):this._ps},t.startTime=function(r){if(arguments.length){this._start=r;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ra(i,this,r-this._delay),this}return this._start},t.endTime=function(r){return this._start+(Co(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(r){var i=this.parent||this._dp;return i?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?k0(i.rawTime(r),this):this._tTime:this._tTime},t.revert=function(r){r===void 0&&(r=WL);var i=Hi;return Hi=r,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Hi=i,this},t.globalTime=function(r){for(var i=this,o=arguments.length?r:i.rawTime();i;)o=i._start+o/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(r):o},t.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,M2(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(r){if(arguments.length){var i=this._time;return this._rDelay=r,M2(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},t.seek=function(r,i){return this.totalTime(ys(this,r),Co(i))},t.restart=function(r,i){return this.play().totalTime(r?-this._delay:0,Co(i))},t.play=function(r,i){return r!=null&&this.seek(r,i),this.reversed(!1).paused(!1)},t.reverse=function(r,i){return r!=null&&this.seek(r||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(r,i){return r!=null&&this.seek(r,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-$n:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$n,this},t.isActive=function(){var r=this.parent||this._dp,i=this._start,o;return!!(!r||this._ts&&this._initted&&r.isActive()&&(o=r.rawTime(!0))>=i&&o<this.endTime(!0)-$n)},t.eventCallback=function(r,i,o){var a=this.vars;return arguments.length>1?(i?(a[r]=i,o&&(a[r+"Params"]=o),r==="onUpdate"&&(this._onUpdate=i)):delete a[r],this):a[r]},t.then=function(r){var i=this;return new Promise(function(o){var a=_r(r)?r:fT,u=function(){var f=i.then;i.then=null,_r(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=f),o(a),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?u():i._prom=u})},t.kill=function(){kd(this)},e}();js(ch.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$n,_prom:0,_ps:!1,_rts:1});var xo=function(e){J3(t,e);function t(r,i){var o;return r===void 0&&(r={}),o=e.call(this,r)||this,o.labels={},o.smoothChildTiming=!!r.smoothChildTiming,o.autoRemoveChildren=!!r.autoRemoveChildren,o._sort=Co(r.sortChildren),ir&&Ra(r.parent||ir,fl(o),i),r.reversed&&o.reverse(),r.paused&&o.paused(!0),r.scrollTrigger&&pT(fl(o),r.scrollTrigger),o}var n=t.prototype;return n.to=function(i,o,a){return zd(0,arguments,this),this},n.from=function(i,o,a){return zd(1,arguments,this),this},n.fromTo=function(i,o,a,u){return zd(2,arguments,this),this},n.set=function(i,o,a){return o.duration=0,o.parent=this,Fd(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Dr(i,o,ys(this,a),1),this},n.call=function(i,o,a){return Ra(this,Dr.delayedCall(0,i,o),a)},n.staggerTo=function(i,o,a,u,c,f,v){return a.duration=o,a.stagger=a.stagger||u,a.onComplete=f,a.onCompleteParams=v,a.parent=this,new Dr(i,a,ys(this,c)),this},n.staggerFrom=function(i,o,a,u,c,f,v){return a.runBackwards=1,Fd(a).immediateRender=Co(a.immediateRender),this.staggerTo(i,o,a,u,c,f,v)},n.staggerFromTo=function(i,o,a,u,c,f,v,b){return u.startAt=a,Fd(u).immediateRender=Co(u.immediateRender),this.staggerTo(i,o,u,c,f,v,b)},n.render=function(i,o,a){var u=this._time,c=this._dirty?this.totalDuration():this._tDur,f=this._dur,v=i<=0?0:xi(i),b=this._zTime<0!=i<0&&(this._initted||!f),x,g,S,w,j,$,y,E,I,k,D,R;if(this!==ir&&v>c&&i>=0&&(v=c),v!==this._tTime||a||b){if(u!==this._time&&f&&(v+=this._time-u,i+=this._time-u),x=v,I=this._start,E=this._ts,$=!E,b&&(f||(u=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(D=this._yoyo,j=f+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(j*100+i,o,a);if(x=xi(v%j),v===c?(w=this._repeat,x=f):(w=~~(v/j),w&&w===v/j&&(x=f,w--),x>f&&(x=f)),k=Mf(this._tTime,j),!u&&this._tTime&&k!==w&&this._tTime-k*j-this._dur<=0&&(k=w),D&&w&1&&(x=f-x,R=1),w!==k&&!this._lock){var O=D&&k&1,G=O===(D&&w&1);if(w<k&&(O=!O),u=O?0:v%f?f:v,this._lock=1,this.render(u||(R?0:xi(w*j)),o,!f)._lock=0,this._tTime=v,!o&&this.parent&&Ts(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),u&&u!==this._time||$!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,c=this._tDur,G&&(this._lock=2,u=O?f:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!$)return this;RT(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=QL(this,xi(u),xi(x)),y&&(v-=x-(x=y._start))),this._tTime=v,this._time=x,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,u=0),!u&&x&&!o&&!w&&(Ts(this,"onStart"),this._tTime!==v))return this;if(x>=u&&i>=0)for(g=this._first;g;){if(S=g._next,(g._act||x>=g._start)&&g._ts&&y!==g){if(g.parent!==this)return this.render(i,o,a);if(g.render(g._ts>0?(x-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(x-g._start)*g._ts,o,a),x!==this._time||!this._ts&&!$){y=0,S&&(v+=this._zTime=-$n);break}}g=S}else{g=this._last;for(var q=i<0?i:x;g;){if(S=g._prev,(g._act||q<=g._end)&&g._ts&&y!==g){if(g.parent!==this)return this.render(i,o,a);if(g.render(g._ts>0?(q-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(q-g._start)*g._ts,o,a||Hi&&(g._initted||g._startAt)),x!==this._time||!this._ts&&!$){y=0,S&&(v+=this._zTime=q?-$n:$n);break}}g=S}}if(y&&!o&&(this.pause(),y.render(x>=u?0:-$n)._zTime=x>=u?1:-1,this._ts))return this._start=I,Ag(this),this.render(i,o,a);this._onUpdate&&!o&&Ts(this,"onUpdate",!0),(v===c&&this._tTime>=this.totalDuration()||!v&&u)&&(I===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!f)&&(v===c&&this._ts>0||!v&&this._ts<0)&&Ru(this,1),!o&&!(i<0&&!u)&&(v||u||!c)&&(Ts(this,v===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(v<c&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,o){var a=this;if(_l(o)||(o=ys(this,o,i)),!(i instanceof ch)){if(Vi(i))return i.forEach(function(u){return a.add(u,o)}),this;if(ti(i))return this.addLabel(i,o);if(_r(i))i=Dr.delayedCall(0,i);else return this}return this!==i?Ra(this,i,o):this},n.getChildren=function(i,o,a,u){i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),u===void 0&&(u=-ks);for(var c=[],f=this._first;f;)f._start>=u&&(f instanceof Dr?o&&c.push(f):(a&&c.push(f),i&&c.push.apply(c,f.getChildren(!0,o,a)))),f=f._next;return c},n.getById=function(i){for(var o=this.getChildren(1,1,1),a=o.length;a--;)if(o[a].vars.id===i)return o[a]},n.remove=function(i){return ti(i)?this.removeLabel(i):_r(i)?this.killTweensOf(i):(Tg(this,i),i===this._recent&&(this._recent=this._last),gc(this))},n.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xi(Vo.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),e.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},n.addLabel=function(i,o){return this.labels[i]=ys(this,o),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,o,a){var u=Dr.delayedCall(0,o||ah,a);return u.data="isPause",this._hasPause=1,Ra(this,u,ys(this,i))},n.removePause=function(i){var o=this._first;for(i=ys(this,i);o;)o._start===i&&o.data==="isPause"&&Ru(o),o=o._next},n.killTweensOf=function(i,o,a){for(var u=this.getTweensOf(i,a),c=u.length;c--;)uu!==u[c]&&u[c].kill(i,o);return this},n.getTweensOf=function(i,o){for(var a=[],u=Es(i),c=this._first,f=_l(o),v;c;)c instanceof Dr?HL(c._targets,u)&&(f?(!uu||c._initted&&c._ts)&&c.globalTime(0)<=o&&c.globalTime(c.totalDuration())>o:!o||c.isActive())&&a.push(c):(v=c.getTweensOf(u,o)).length&&a.push.apply(a,v),c=c._next;return a},n.tweenTo=function(i,o){o=o||{};var a=this,u=ys(a,i),c=o,f=c.startAt,v=c.onStart,b=c.onStartParams,x=c.immediateRender,g,S=Dr.to(a,js({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:o.duration||Math.abs((u-(f&&"time"in f?f.time:a._time))/a.timeScale())||$n,onStart:function(){if(a.pause(),!g){var j=o.duration||Math.abs((u-(f&&"time"in f?f.time:a._time))/a.timeScale());S._dur!==j&&Df(S,j,0,1).render(S._time,!0,!0),g=1}v&&v.apply(S,b||[])}},o));return x?S.render(0):S},n.tweenFromTo=function(i,o,a){return this.tweenTo(o,js({startAt:{time:ys(this,i)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),D2(this,ys(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),D2(this,ys(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$n)},n.shiftChildren=function(i,o,a){a===void 0&&(a=0);for(var u=this._first,c=this.labels,f;u;)u._start>=a&&(u._start+=i,u._end+=i),u=u._next;if(o)for(f in c)c[f]>=a&&(c[f]+=i);return gc(this)},n.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return e.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,a;o;)a=o._next,this.remove(o),o=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),gc(this)},n.totalDuration=function(i){var o=0,a=this,u=a._last,c=ks,f,v,b;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(b=a.parent;u;)f=u._prev,u._dirty&&u.totalDuration(),v=u._start,v>c&&a._sort&&u._ts&&!a._lock?(a._lock=1,Ra(a,u,v-u._delay,1)._lock=0):c=v,v<0&&u._ts&&(o-=v,(!b&&!a._dp||b&&b.smoothChildTiming)&&(a._start+=v/a._ts,a._time-=v,a._tTime-=v),a.shiftChildren(-v,!1,-1/0),c=0),u._end>o&&u._ts&&(o=u._end),u=f;Df(a,a===ir&&a._time>o?a._time:o,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ir._ts&&(uT(ir,k0(i,ir)),aT=Vo.frame),Vo.frame>=I2){I2+=Ko.autoSleep||120;var o=ir._first;if((!o||!o._ts)&&Ko.autoSleep&&Vo._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Vo.sleep()}}},t}(ch);js(xo.prototype,{_lock:0,_hasPause:0,_forcing:0});var hU=function(t,n,r,i,o,a,u){var c=new Eo(this._pt,t,n,0,1,MT,null,o),f=0,v=0,b,x,g,S,w,j,$,y;for(c.b=r,c.e=i,r+="",i+="",($=~i.indexOf("random("))&&(i=lh(i)),a&&(y=[r,i],a(y,t,n),r=y[0],i=y[1]),x=r.match(cv)||[];b=cv.exec(i);)S=b[0],w=i.substring(f,b.index),g?g=(g+1)%5:w.substr(-5)==="rgba("&&(g=1),S!==x[v++]&&(j=parseFloat(x[v-1])||0,c._pt={_next:c._pt,p:w||v===1?w:",",s:j,c:S.charAt(1)==="="?xf(j,S)-j:parseFloat(S)-j,m:g&&g<4?Math.round:0},f=cv.lastIndex);return c.c=f<i.length?i.substring(f,i.length):"",c.fp=u,(nT.test(i)||$)&&(c.e=0),this._pt=c,c},Bx=function(t,n,r,i,o,a,u,c,f,v){_r(i)&&(i=i(o||0,t,a));var b=t[n],x=r!=="get"?r:_r(b)?f?t[n.indexOf("set")||!_r(t["get"+n.substr(3)])?n:"get"+n.substr(3)](f):t[n]():b,g=_r(b)?f?yU:LT:Wx,S;if(ti(i)&&(~i.indexOf("random(")&&(i=lh(i)),i.charAt(1)==="="&&(S=xf(x,i)+(Ni(x)||0),(S||S===0)&&(i=S))),!v||x!==i||iy)return!isNaN(x*i)&&i!==""?(S=new Eo(this._pt,t,n,+x||0,i-(x||0),typeof b=="boolean"?wU:UT,0,g),f&&(S.fp=f),u&&S.modifier(u,this,t),this._pt=S):(!b&&!(n in t)&&Mx(n,i),hU.call(this,t,n,x,i,g,c||Ko.stringFilter,f))},pU=function(t,n,r,i,o){if(_r(t)&&(t=Bd(t,o,n,r,i)),!Fa(t)||t.style&&t.nodeType||Vi(t)||eT(t))return ti(t)?Bd(t,o,n,r,i):t;var a={},u;for(u in t)a[u]=Bd(t[u],o,n,r,i);return a},OT=function(t,n,r,i,o,a){var u,c,f,v;if(Ho[t]&&(u=new Ho[t]).init(o,u.rawVars?n[t]:pU(n[t],i,o,a,r),r,i,a)!==!1&&(r._pt=c=new Eo(r._pt,o,t,0,1,u.render,u,0,u.priority),r!==df))for(f=r._ptLookup[r._targets.indexOf(o)],v=u._props.length;v--;)f[u._props[v]]=c;return u},uu,iy,Nx=function e(t,n,r){var i=t.vars,o=i.ease,a=i.startAt,u=i.immediateRender,c=i.lazy,f=i.onUpdate,v=i.onUpdateParams,b=i.callbackScope,x=i.runBackwards,g=i.yoyoEase,S=i.keyframes,w=i.autoRevert,j=t._dur,$=t._startAt,y=t._targets,E=t.parent,I=E&&E.data==="nested"?E.vars.targets:y,k=t._overwrite==="auto"&&!jx,D=t.timeline,R,O,G,q,K,ee,ae,le,Re,Ce,ce,ie,te;if(D&&(!S||!o)&&(o="none"),t._ease=mc(o,Uf.ease),t._yEase=g?AT(mc(g===!0?o:g,Uf.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!D&&!!i.runBackwards,!D||S&&!i.stagger){if(le=y[0]?pc(y[0]).harness:0,ie=le&&i[le.prop],R=C0(i,Dx),$&&($._zTime<0&&$.progress(1),n<0&&x&&u&&!w?$.render(-1,!0):$.revert(x&&j?Fp:NL),$._lazy=0),a){if(Ru(t._startAt=Dr.set(y,js({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:!$&&Co(c),startAt:null,delay:0,onUpdate:f,onUpdateParams:v,callbackScope:b,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Hi||!u&&!w)&&t._startAt.revert(Fp),u&&j&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(x&&j&&!$){if(n&&(u=!1),G=js({overwrite:!1,data:"isFromStart",lazy:u&&!$&&Co(c),immediateRender:u,stagger:0,parent:E},R),ie&&(G[le.prop]=ie),Ru(t._startAt=Dr.set(y,G)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Hi?t._startAt.revert(Fp):t._startAt.render(-1,!0)),t._zTime=n,!u)e(t._startAt,$n,$n);else if(!n)return}for(t._pt=t._ptCache=0,c=j&&Co(c)||c&&!j,O=0;O<y.length;O++){if(K=y[O],ae=K._gsap||zx(y)[O]._gsap,t._ptLookup[O]=Ce={},J1[ae.id]&&Su.length&&S0(),ce=I===y?O:I.indexOf(K),le&&(Re=new le).init(K,ie||R,t,ce,I)!==!1&&(t._pt=q=new Eo(t._pt,K,Re.name,0,1,Re.render,Re,0,Re.priority),Re._props.forEach(function(xe){Ce[xe]=q}),Re.priority&&(ee=1)),!le||ie)for(G in R)Ho[G]&&(Re=OT(G,R,t,ce,K,I))?Re.priority&&(ee=1):Ce[G]=q=Bx.call(t,K,G,"get",R[G],ce,I,0,i.stringFilter);t._op&&t._op[O]&&t.kill(K,t._op[O]),k&&t._pt&&(uu=t,ir.killTweensOf(K,Ce,t.globalTime(n)),te=!t.parent,uu=0),t._pt&&c&&(J1[ae.id]=1)}ee&&DT(t),t._onInit&&t._onInit(t)}t._onUpdate=f,t._initted=(!t._op||t._pt)&&!te,S&&n<=0&&D.render(ks,!0,!0)},gU=function(t,n,r,i,o,a,u){var c=(t._pt&&t._ptCache||(t._ptCache={}))[n],f,v,b,x;if(!c)for(c=t._ptCache[n]=[],b=t._ptLookup,x=t._targets.length;x--;){if(f=b[x][n],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==n&&f.fp!==n;)f=f._next;if(!f)return iy=1,t.vars[n]="+=0",Nx(t,u),iy=0,1;c.push(f)}for(x=c.length;x--;)v=c[x],f=v._pt||v,f.s=(i||i===0)&&!o?i:f.s+(i||0)+a*f.c,f.c=r-f.s,v.e&&(v.e=Rr(r)+Ni(v.e)),v.b&&(v.b=f.s+Ni(v.b))},mU=function(t,n){var r=t[0]?pc(t[0]).harness:0,i=r&&r.aliases,o,a,u,c;if(!i)return n;o=Ec({},n);for(a in i)if(a in o)for(c=i[a].split(","),u=c.length;u--;)o[c[u]]=o[a];return o},vU=function(t,n,r,i){var o=n.ease||i||"power1.inOut",a,u;if(Vi(n))u=r[t]||(r[t]=[]),n.forEach(function(c,f){return u.push({t:f/(n.length-1)*100,v:c,e:o})});else for(a in n)u=r[a]||(r[a]=[]),a==="ease"||u.push({t:parseFloat(t),v:n[a],e:o})},Bd=function(t,n,r,i,o){return _r(t)?t.call(n,r,i,o):ti(t)&&~t.indexOf("random(")?lh(t):t},jT=Fx+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",IT={};ko(jT+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return IT[e]=1});var Dr=function(e){J3(t,e);function t(r,i,o,a){var u;typeof i=="number"&&(o.duration=i,i=o,o=null),u=e.call(this,a?i:Fd(i))||this;var c=u.vars,f=c.duration,v=c.delay,b=c.immediateRender,x=c.stagger,g=c.overwrite,S=c.keyframes,w=c.defaults,j=c.scrollTrigger,$=c.yoyoEase,y=i.parent||ir,E=(Vi(r)||eT(r)?_l(r[0]):"length"in i)?[r]:Es(r),I,k,D,R,O,G,q,K;if(u._targets=E.length?zx(E):b0("GSAP target "+r+" not found. https://greensock.com",!Ko.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=g,S||x||Sp(f)||Sp(v)){if(i=u.vars,I=u.timeline=new xo({data:"nested",defaults:w||{},targets:y&&y.data==="nested"?y.vars.targets:E}),I.kill(),I.parent=I._dp=fl(u),I._start=0,x||Sp(f)||Sp(v)){if(R=E.length,q=x&&yT(x),Fa(x))for(O in x)~jT.indexOf(O)&&(K||(K={}),K[O]=x[O]);for(k=0;k<R;k++)D=C0(i,IT),D.stagger=0,$&&(D.yoyoEase=$),K&&Ec(D,K),G=E[k],D.duration=+Bd(f,fl(u),k,G,E),D.delay=(+Bd(v,fl(u),k,G,E)||0)-u._delay,!x&&R===1&&D.delay&&(u._delay=v=D.delay,u._start+=v,D.delay=0),I.to(G,D,q?q(k,G,E):0),I._ease=sn.none;I.duration()?f=v=0:u.timeline=0}else if(S){Fd(js(I.vars.defaults,{ease:"none"})),I._ease=mc(S.ease||i.ease||"none");var ee=0,ae,le,Re;if(Vi(S))S.forEach(function(Ce){return I.to(E,Ce,">")}),I.duration();else{D={};for(O in S)O==="ease"||O==="easeEach"||vU(O,S[O],D,S.easeEach);for(O in D)for(ae=D[O].sort(function(Ce,ce){return Ce.t-ce.t}),ee=0,k=0;k<ae.length;k++)le=ae[k],Re={ease:le.e,duration:(le.t-(k?ae[k-1].t:0))/100*f},Re[O]=le.v,I.to(E,Re,ee),ee+=Re.duration;I.duration()<f&&I.to({},{duration:f-I.duration()})}}f||u.duration(f=I.duration())}else u.timeline=0;return g===!0&&!jx&&(uu=fl(u),ir.killTweensOf(E),uu=0),Ra(y,fl(u),o),i.reversed&&u.reverse(),i.paused&&u.paused(!0),(b||!f&&!S&&u._start===xi(y._time)&&Co(b)&&XL(fl(u))&&y.data!=="nested")&&(u._tTime=-$n,u.render(Math.max(0,-v)||0)),j&&pT(fl(u),j),u}var n=t.prototype;return n.render=function(i,o,a){var u=this._time,c=this._tDur,f=this._dur,v=i<0,b=i>c-$n&&!v?c:i<$n?0:i,x,g,S,w,j,$,y,E,I;if(!f)qL(this,i,o,a);else if(b!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==v){if(x=b,E=this.timeline,this._repeat){if(w=f+this._rDelay,this._repeat<-1&&v)return this.totalTime(w*100+i,o,a);if(x=xi(b%w),b===c?(S=this._repeat,x=f):(S=~~(b/w),S&&S===b/w&&(x=f,S--),x>f&&(x=f)),$=this._yoyo&&S&1,$&&(I=this._yEase,x=f-x),j=Mf(this._tTime,w),x===u&&!a&&this._initted)return this._tTime=b,this;S!==j&&(E&&this._yEase&&RT(E,$),this.vars.repeatRefresh&&!$&&!this._lock&&(this._lock=a=1,this.render(xi(w*S),!0).invalidate()._lock=0))}if(!this._initted){if(gT(this,v?i:x,a,o,b))return this._tTime=0,this;if(u!==this._time)return this;if(f!==this._dur)return this.render(i,o,a)}if(this._tTime=b,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(I||this._ease)(x/f),this._from&&(this.ratio=y=1-y),x&&!u&&!o&&!S&&(Ts(this,"onStart"),this._tTime!==b))return this;for(g=this._pt;g;)g.r(y,g.d),g=g._next;E&&E.render(i<0?i:!x&&$?-$n:E._dur*E._ease(x/this._dur),o,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(v&&Z1(this,i,o,a),Ts(this,"onUpdate")),this._repeat&&S!==j&&this.vars.onRepeat&&!o&&this.parent&&Ts(this,"onRepeat"),(b===this._tDur||!b)&&this._tTime===b&&(v&&!this._onUpdate&&Z1(this,i,!0,!0),(i||!f)&&(b===this._tDur&&this._ts>0||!b&&this._ts<0)&&Ru(this,1),!o&&!(v&&!u)&&(b||u||$)&&(Ts(this,b===c?"onComplete":"onReverseComplete",!0),this._prom&&!(b<c&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),e.prototype.invalidate.call(this,i)},n.resetTo=function(i,o,a,u){uh||Vo.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Nx(this,c),f=this._ease(c/this._dur),gU(this,i,o,a,u,f,c)?this.resetTo(i,o,a,u):(Rg(this,0),this.parent||dT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?kd(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,uu&&uu.vars.overwrite!==!0)._first||kd(this),this.parent&&a!==this.timeline.totalDuration()&&Df(this,this._dur*this.timeline._tDur/a,0,1),this}var u=this._targets,c=i?Es(i):u,f=this._ptLookup,v=this._pt,b,x,g,S,w,j,$;if((!o||o==="all")&&GL(u,c))return o==="all"&&(this._pt=0),kd(this);for(b=this._op=this._op||[],o!=="all"&&(ti(o)&&(w={},ko(o,function(y){return w[y]=1}),o=w),o=mU(u,o)),$=u.length;$--;)if(~c.indexOf(u[$])){x=f[$],o==="all"?(b[$]=o,S=x,g={}):(g=b[$]=b[$]||{},S=o);for(w in S)j=x&&x[w],j&&((!("kill"in j.d)||j.d.kill(w)===!0)&&Tg(this,j,"_pt"),delete x[w]),g!=="all"&&(g[w]=1)}return this._initted&&!this._pt&&v&&kd(this),this},t.to=function(i,o){return new t(i,o,arguments[2])},t.from=function(i,o){return zd(1,arguments)},t.delayedCall=function(i,o,a,u){return new t(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:u})},t.fromTo=function(i,o,a){return zd(2,arguments)},t.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new t(i,o)},t.killTweensOf=function(i,o,a){return ir.killTweensOf(i,o,a)},t}(ch);js(Dr.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ko("staggerTo,staggerFrom,staggerFromTo",function(e){Dr[e]=function(){var t=new xo,n=ty.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var Wx=function(t,n,r){return t[n]=r},LT=function(t,n,r){return t[n](r)},yU=function(t,n,r,i){return t[n](i.fp,r)},xU=function(t,n,r){return t.setAttribute(n,r)},Hx=function(t,n){return _r(t[n])?LT:Ix(t[n])&&t.setAttribute?xU:Wx},UT=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},wU=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},MT=function(t,n){var r=n._pt,i="";if(!t&&n.b)i=n.b;else if(t===1&&n.e)i=n.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+i,r=r._next;i+=n.c}n.set(n.t,n.p,i,n)},Vx=function(t,n){for(var r=n._pt;r;)r.r(t,r.d),r=r._next},_U=function(t,n,r,i){for(var o=this._pt,a;o;)a=o._next,o.p===i&&o.modifier(t,n,r),o=a},bU=function(t){for(var n=this._pt,r,i;n;)i=n._next,n.p===t&&!n.op||n.op===t?Tg(this,n,"_pt"):n.dep||(r=1),n=i;return!r},SU=function(t,n,r,i){i.mSet(t,n,i.m.call(i.tween,r,i.mt),i)},DT=function(t){for(var n=t._pt,r,i,o,a;n;){for(r=n._next,i=o;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:a)?n._prev._next=n:o=n,(n._next=i)?i._prev=n:a=n,n=r}t._pt=o},Eo=function(){function e(n,r,i,o,a,u,c,f,v){this.t=r,this.s=o,this.c=a,this.p=i,this.r=u||UT,this.d=c||this,this.set=f||Wx,this.pr=v||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(r,i,o){this.mSet=this.mSet||this.set,this.set=SU,this.m=r,this.mt=o,this.tween=i},e}();ko(Fx+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return Dx[e]=1});ns.TweenMax=ns.TweenLite=Dr;ns.TimelineLite=ns.TimelineMax=xo;ir=new xo({sortChildren:!1,defaults:Uf,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ko.stringFilter=TT;var vc=[],Bp={},CU=[],z2=0,kU=0,gv=function(t){return(Bp[t]||CU).map(function(n){return n()})},oy=function(){var t=Date.now(),n=[];t-z2>2&&(gv("matchMediaInit"),vc.forEach(function(r){var i=r.queries,o=r.conditions,a,u,c,f;for(u in i)a=xs.matchMedia(i[u]).matches,a&&(c=1),a!==o[u]&&(o[u]=a,f=1);f&&(r.revert(),c&&n.push(r))}),gv("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r)}),z2=t,gv("matchMedia"))},FT=function(){function e(n,r){this.selector=r&&ny(r),this.data=[],this._r=[],this.isReverted=!1,this.id=kU++,n&&this.add(n)}var t=e.prototype;return t.add=function(r,i,o){_r(r)&&(o=i,i=r,r=_r);var a=this,u=function(){var f=wr,v=a.selector,b;return f&&f!==a&&f.data.push(a),o&&(a.selector=ny(o)),wr=a,b=i.apply(a,arguments),_r(b)&&a._r.push(b),wr=f,a.selector=v,a.isReverted=!1,b};return a.last=u,r===_r?u(a):r?a[r]=u:u},t.ignore=function(r){var i=wr;wr=null,r(this),wr=i},t.getTweens=function(){var r=[];return this.data.forEach(function(i){return i instanceof e?r.push.apply(r,i.getTweens()):i instanceof Dr&&!(i.parent&&i.parent.data==="nested")&&r.push(i)}),r},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(r,i){var o=this;if(r){var a=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(f){return a.splice(a.indexOf(f),1)}))}),a.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(r)}),this.data.forEach(function(c){return!(c instanceof Dr)&&c.revert&&c.revert(r)}),this._r.forEach(function(c){return c(r,o)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i)for(var u=vc.length;u--;)vc[u].id===this.id&&vc.splice(u,1)},t.revert=function(r){this.kill(r||{})},e}(),EU=function(){function e(n){this.contexts=[],this.scope=n}var t=e.prototype;return t.add=function(r,i,o){Fa(r)||(r={matches:r});var a=new FT(0,o||this.scope),u=a.conditions={},c,f,v;wr&&!a.selector&&(a.selector=wr.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=r;for(f in r)f==="all"?v=1:(c=xs.matchMedia(r[f]),c&&(vc.indexOf(a)<0&&vc.push(a),(u[f]=c.matches)&&(v=1),c.addListener?c.addListener(oy):c.addEventListener("change",oy)));return v&&i(a),this},t.revert=function(r){this.kill(r||{})},t.kill=function(r){this.contexts.forEach(function(i){return i.kill(r,!0)})},e}(),E0={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.forEach(function(i){return CT(i)})},timeline:function(t){return new xo(t)},getTweensOf:function(t,n){return ir.getTweensOf(t,n)},getProperty:function(t,n,r,i){ti(t)&&(t=Es(t)[0]);var o=pc(t||{}).get,a=r?fT:cT;return r==="native"&&(r=""),t&&(n?a((Ho[n]&&Ho[n].get||o)(t,n,r,i)):function(u,c,f){return a((Ho[u]&&Ho[u].get||o)(t,u,c,f))})},quickSetter:function(t,n,r){if(t=Es(t),t.length>1){var i=t.map(function(v){return Ao.quickSetter(v,n,r)}),o=i.length;return function(v){for(var b=o;b--;)i[b](v)}}t=t[0]||{};var a=Ho[n],u=pc(t),c=u.harness&&(u.harness.aliases||{})[n]||n,f=a?function(v){var b=new a;df._pt=0,b.init(t,r?v+r:v,df,0,[t]),b.render(1,b),df._pt&&Vx(1,df)}:u.set(t,c);return a?f:function(v){return f(t,c,r?v+r:v,u,1)}},quickTo:function(t,n,r){var i,o=Ao.to(t,Ec((i={},i[n]="+=0.1",i.paused=!0,i),r||{})),a=function(c,f,v){return o.resetTo(n,c,f,v)};return a.tween=o,a},isTweening:function(t){return ir.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=mc(t.ease,Uf.ease)),L2(Uf,t||{})},config:function(t){return L2(Ko,t||{})},registerEffect:function(t){var n=t.name,r=t.effect,i=t.plugins,o=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(u){return u&&!Ho[u]&&!ns[u]&&b0(n+" effect requires "+u+" plugin.")}),fv[n]=function(u,c,f){return r(Es(u),js(c||{},o),f)},a&&(xo.prototype[n]=function(u,c,f){return this.add(fv[n](u,Fa(c)?c:(f=c)&&{},this),f)})},registerEase:function(t,n){sn[t]=mc(n)},parseEase:function(t,n){return arguments.length?mc(t,n):sn},getById:function(t){return ir.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var r=new xo(t),i,o;for(r.smoothChildTiming=Co(t.smoothChildTiming),ir.remove(r),r._dp=0,r._time=r._tTime=ir._time,i=ir._first;i;)o=i._next,(n||!(!i._dur&&i instanceof Dr&&i.vars.onComplete===i._targets[0]))&&Ra(r,i,i._start-i._delay),i=o;return Ra(ir,r,0),r},context:function(t,n){return t?new FT(t,n):wr},matchMedia:function(t){return new EU(t)},matchMediaRefresh:function(){return vc.forEach(function(t){var n=t.conditions,r,i;for(i in n)n[i]&&(n[i]=!1,r=1);r&&t.revert()})||oy()},addEventListener:function(t,n){var r=Bp[t]||(Bp[t]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(t,n){var r=Bp[t],i=r&&r.indexOf(n);i>=0&&r.splice(i,1)},utils:{wrap:iU,wrapYoyo:oU,distribute:yT,random:wT,snap:xT,normalize:rU,getUnit:Ni,clamp:ZL,splitColor:kT,toArray:Es,selector:ny,mapRange:bT,pipe:tU,unitize:nU,interpolate:sU,shuffle:vT},install:oT,effects:fv,ticker:Vo,updateRoot:xo.updateRoot,plugins:Ho,globalTimeline:ir,core:{PropTween:Eo,globals:sT,Tween:Dr,Timeline:xo,Animation:ch,getCache:pc,_removeLinkedListItem:Tg,reverting:function(){return Hi},context:function(t){return t&&wr&&(wr.data.push(t),t._ctx=wr),wr},suppressOverwrites:function(t){return jx=t}}};ko("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return E0[e]=Dr[e]});Vo.add(xo.updateRoot);df=E0.to({},{duration:0});var TU=function(t,n){for(var r=t._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},AU=function(t,n){var r=t._targets,i,o,a;for(i in n)for(o=r.length;o--;)a=t._ptLookup[o][i],a&&(a=a.d)&&(a._pt&&(a=TU(a,i)),a&&a.modifier&&a.modifier(n[i],t,r[o],i))},mv=function(t,n){return{name:t,rawVars:1,init:function(i,o,a){a._onInit=function(u){var c,f;if(ti(o)&&(c={},ko(o,function(v){return c[v]=1}),o=c),n){c={};for(f in o)c[f]=n(o[f]);o=c}AU(u,o)}}}},Ao=E0.registerPlugin({name:"attr",init:function(t,n,r,i,o){var a,u,c;this.tween=r;for(a in n)c=t.getAttribute(a)||"",u=this.add(t,"setAttribute",(c||0)+"",n[a],i,o,0,0,a),u.op=a,u.b=c,this._props.push(a)},render:function(t,n){for(var r=n._pt;r;)Hi?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function(t,n){for(var r=n.length;r--;)this.add(t,r,t[r]||0,n[r],0,0,0,0,0,1)}},mv("roundProps",ry),mv("modifiers"),mv("snap",xT))||E0;Dr.version=xo.version=Ao.version="3.12.2";iT=1;Lx()&&Ff();sn.Power0;sn.Power1;sn.Power2;sn.Power3;sn.Power4;sn.Linear;sn.Quad;sn.Cubic;sn.Quart;sn.Quint;sn.Strong;sn.Elastic;sn.Back;sn.SteppedEase;sn.Bounce;sn.Sine;sn.Expo;sn.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var B2,cu,wf,Gx,cc,N2,Yx,RU=function(){return typeof window<"u"},bl={},ic=180/Math.PI,_f=Math.PI/180,Wc=Math.atan2,W2=1e8,Xx=/([A-Z])/g,PU=/(left|right|width|margin|padding|x)/i,$U=/[\s,\(]\S/,Pa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sy=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},OU=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},jU=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},IU=function(t,n){var r=n.s+n.c*t;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},zT=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},BT=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},LU=function(t,n,r){return t.style[n]=r},UU=function(t,n,r){return t.style.setProperty(n,r)},MU=function(t,n,r){return t._gsap[n]=r},DU=function(t,n,r){return t._gsap.scaleX=t._gsap.scaleY=r},FU=function(t,n,r,i,o){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(o,a)},zU=function(t,n,r,i,o){var a=t._gsap;a[n]=r,a.renderTransform(o,a)},sr="transform",sa=sr+"Origin",BU=function e(t,n){var r=this,i=this.target,o=i.style;if(t in bl&&o){if(this.tfm=this.tfm||{},t!=="transform")t=Pa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return r.tfm[a]=hl(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:hl(i,t);else return Pa.transform.split(",").forEach(function(a){return e.call(r,a,n)});if(this.props.indexOf(sr)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sa,n,"")),t=sr}(o||n)&&this.props.push(t,n,o[t])},NT=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},NU=function(){var t=this.props,n=this.target,r=n.style,i=n._gsap,o,a;for(o=0;o<t.length;o+=3)t[o+1]?n[t[o]]=t[o+2]:t[o+2]?r[t[o]]=t[o+2]:r.removeProperty(t[o].substr(0,2)==="--"?t[o]:t[o].replace(Xx,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),o=Yx(),(!o||!o.isStart)&&!r[sr]&&(NT(r),i.uncache=1)}},WT=function(t,n){var r={target:t,props:[],revert:NU,save:BU};return t._gsap||Ao.core.getCache(t),n&&n.split(",").forEach(function(i){return r.save(i)}),r},HT,ay=function(t,n){var r=cu.createElementNS?cu.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cu.createElement(t);return r.style?r:cu.createElement(t)},Ia=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Xx,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&e(t,zf(n)||n,1)||""},H2="O,Moz,ms,Ms,Webkit".split(","),zf=function(t,n,r){var i=n||cc,o=i.style,a=5;if(t in o&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(H2[a]+t in o););return a<0?null:(a===3?"ms":a>=0?H2[a]:"")+t},ly=function(){RU()&&window.document&&(B2=window,cu=B2.document,wf=cu.documentElement,cc=ay("div")||{style:{}},ay("div"),sr=zf(sr),sa=sr+"Origin",cc.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",HT=!!zf("perspective"),Yx=Ao.core.reverting,Gx=1)},vv=function e(t){var n=ay("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=this.parentNode,i=this.nextSibling,o=this.style.cssText,a;if(wf.appendChild(n),n.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch{}else this._gsapBBox&&(a=this._gsapBBox());return r&&(i?r.insertBefore(this,i):r.appendChild(this)),wf.removeChild(n),this.style.cssText=o,a},V2=function(t,n){for(var r=n.length;r--;)if(t.hasAttribute(n[r]))return t.getAttribute(n[r])},VT=function(t){var n;try{n=t.getBBox()}catch{n=vv.call(t,!0)}return n&&(n.width||n.height)||t.getBBox===vv||(n=vv.call(t,!0)),n&&!n.width&&!n.x&&!n.y?{x:+V2(t,["x","cx","x1"])||0,y:+V2(t,["y","cy","y1"])||0,width:0,height:0}:n},GT=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&VT(t))},fh=function(t,n){if(n){var r=t.style;n in bl&&n!==sa&&(n=sr),r.removeProperty?((n.substr(0,2)==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(n.replace(Xx,"-$1").toLowerCase())):r.removeAttribute(n)}},fu=function(t,n,r,i,o,a){var u=new Eo(t._pt,n,r,0,1,a?BT:zT);return t._pt=u,u.b=i,u.e=o,t._props.push(r),u},G2={deg:1,rad:1,turn:1},WU={grid:1,flex:1},Pu=function e(t,n,r,i){var o=parseFloat(r)||0,a=(r+"").trim().substr((o+"").length)||"px",u=cc.style,c=PU.test(n),f=t.tagName.toLowerCase()==="svg",v=(f?"client":"offset")+(c?"Width":"Height"),b=100,x=i==="px",g=i==="%",S,w,j,$;return i===a||!o||G2[i]||G2[a]?o:(a!=="px"&&!x&&(o=e(t,n,r,"px")),$=t.getCTM&&GT(t),(g||a==="%")&&(bl[n]||~n.indexOf("adius"))?(S=$?t.getBBox()[c?"width":"height"]:t[v],Rr(g?o/S*b:o/100*S)):(u[c?"width":"height"]=b+(x?a:i),w=~n.indexOf("adius")||i==="em"&&t.appendChild&&!f?t:t.parentNode,$&&(w=(t.ownerSVGElement||{}).parentNode),(!w||w===cu||!w.appendChild)&&(w=cu.body),j=w._gsap,j&&g&&j.width&&c&&j.time===Vo.time&&!j.uncache?Rr(o/j.width*b):((g||a==="%")&&!WU[Ia(w,"display")]&&(u.position=Ia(t,"position")),w===t&&(u.position="static"),w.appendChild(cc),S=cc[v],w.removeChild(cc),u.position="absolute",c&&g&&(j=pc(w),j.time=Vo.time,j.width=w[v]),Rr(x?S*o/b:S&&o?b/S*o:0))))},hl=function(t,n,r,i){var o;return Gx||ly(),n in Pa&&n!=="transform"&&(n=Pa[n],~n.indexOf(",")&&(n=n.split(",")[0])),bl[n]&&n!=="transform"?(o=hh(t,i),o=n!=="transformOrigin"?o[n]:o.svg?o.origin:A0(Ia(t,sa))+" "+o.zOrigin+"px"):(o=t.style[n],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=T0[n]&&T0[n](t,n,r)||Ia(t,n)||lT(t,n)||(n==="opacity"?1:0))),r&&!~(o+"").trim().indexOf(" ")?Pu(t,n,o,r)+r:o},HU=function(t,n,r,i){if(!r||r==="none"){var o=zf(n,t,1),a=o&&Ia(t,o,1);a&&a!==r?(n=o,r=a):n==="borderColor"&&(r=Ia(t,"borderTopColor"))}var u=new Eo(this._pt,t.style,n,0,1,MT),c=0,f=0,v,b,x,g,S,w,j,$,y,E,I,k;if(u.b=r,u.e=i,r+="",i+="",i==="auto"&&(t.style[n]=i,i=Ia(t,n)||i,t.style[n]=r),v=[r,i],TT(v),r=v[0],i=v[1],x=r.match(ff)||[],k=i.match(ff)||[],k.length){for(;b=ff.exec(i);)j=b[0],y=i.substring(c,b.index),S?S=(S+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(S=1),j!==(w=x[f++]||"")&&(g=parseFloat(w)||0,I=w.substr((g+"").length),j.charAt(1)==="="&&(j=xf(g,j)+I),$=parseFloat(j),E=j.substr(($+"").length),c=ff.lastIndex-E.length,E||(E=E||Ko.units[n]||I,c===i.length&&(i+=E,u.e+=E)),I!==E&&(g=Pu(t,n,w,E)||0),u._pt={_next:u._pt,p:y||f===1?y:",",s:g,c:$-g,m:S&&S<4||n==="zIndex"?Math.round:0});u.c=c<i.length?i.substring(c,i.length):""}else u.r=n==="display"&&i==="none"?BT:zT;return nT.test(i)&&(u.e=0),this._pt=u,u},Y2={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VU=function(t){var n=t.split(" "),r=n[0],i=n[1]||"50%";return(r==="top"||r==="bottom"||i==="left"||i==="right")&&(t=r,r=i,i=t),n[0]=Y2[r]||r,n[1]=Y2[i]||i,n.join(" ")},GU=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,i=r.style,o=n.u,a=r._gsap,u,c,f;if(o==="all"||o===!0)i.cssText="",c=1;else for(o=o.split(","),f=o.length;--f>-1;)u=o[f],bl[u]&&(c=1,u=u==="transformOrigin"?sa:sr),fh(r,u);c&&(fh(r,sr),a&&(a.svg&&r.removeAttribute("transform"),hh(r,1),a.uncache=1,NT(i)))}},T0={clearProps:function(t,n,r,i,o){if(o.data!=="isFromStart"){var a=t._pt=new Eo(t._pt,n,r,0,0,GU);return a.u=i,a.pr=-10,a.tween=o,t._props.push(r),1}}},dh=[1,0,0,1,0,0],YT={},XT=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},X2=function(t){var n=Ia(t,sr);return XT(n)?dh:n.substr(7).match(tT).map(Rr)},Kx=function(t,n){var r=t._gsap||pc(t),i=t.style,o=X2(t),a,u,c,f;return r.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,o=[c.a,c.b,c.c,c.d,c.e,c.f],o.join(",")==="1,0,0,1,0,0"?dh:o):(o===dh&&!t.offsetParent&&t!==wf&&!r.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(f=1,u=t.nextElementSibling,wf.appendChild(t)),o=X2(t),c?i.display=c:fh(t,"display"),f&&(u?a.insertBefore(t,u):a?a.appendChild(t):wf.removeChild(t))),n&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},uy=function(t,n,r,i,o,a){var u=t._gsap,c=o||Kx(t,!0),f=u.xOrigin||0,v=u.yOrigin||0,b=u.xOffset||0,x=u.yOffset||0,g=c[0],S=c[1],w=c[2],j=c[3],$=c[4],y=c[5],E=n.split(" "),I=parseFloat(E[0])||0,k=parseFloat(E[1])||0,D,R,O,G;r?c!==dh&&(R=g*j-S*w)&&(O=I*(j/R)+k*(-w/R)+(w*y-j*$)/R,G=I*(-S/R)+k*(g/R)-(g*y-S*$)/R,I=O,k=G):(D=VT(t),I=D.x+(~E[0].indexOf("%")?I/100*D.width:I),k=D.y+(~(E[1]||E[0]).indexOf("%")?k/100*D.height:k)),i||i!==!1&&u.smooth?($=I-f,y=k-v,u.xOffset=b+($*g+y*w)-$,u.yOffset=x+($*S+y*j)-y):u.xOffset=u.yOffset=0,u.xOrigin=I,u.yOrigin=k,u.smooth=!!i,u.origin=n,u.originIsAbsolute=!!r,t.style[sa]="0px 0px",a&&(fu(a,u,"xOrigin",f,I),fu(a,u,"yOrigin",v,k),fu(a,u,"xOffset",b,u.xOffset),fu(a,u,"yOffset",x,u.yOffset)),t.setAttribute("data-svg-origin",I+" "+k)},hh=function(t,n){var r=t._gsap||new $T(t);if("x"in r&&!n&&!r.uncache)return r;var i=t.style,o=r.scaleX<0,a="px",u="deg",c=getComputedStyle(t),f=Ia(t,sa)||"0",v,b,x,g,S,w,j,$,y,E,I,k,D,R,O,G,q,K,ee,ae,le,Re,Ce,ce,ie,te,xe,$e,Ee,_e,M,A;return v=b=x=w=j=$=y=E=I=0,g=S=1,r.svg=!!(t.getCTM&&GT(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[sr]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[sr]!=="none"?c[sr]:"")),i.scale=i.rotate=i.translate="none"),R=Kx(t,r.svg),r.svg&&(r.uncache?(ie=t.getBBox(),f=r.xOrigin-ie.x+"px "+(r.yOrigin-ie.y)+"px",ce=""):ce=!n&&t.getAttribute("data-svg-origin"),uy(t,ce||f,!!ce||r.originIsAbsolute,r.smooth!==!1,R)),k=r.xOrigin||0,D=r.yOrigin||0,R!==dh&&(K=R[0],ee=R[1],ae=R[2],le=R[3],v=Re=R[4],b=Ce=R[5],R.length===6?(g=Math.sqrt(K*K+ee*ee),S=Math.sqrt(le*le+ae*ae),w=K||ee?Wc(ee,K)*ic:0,y=ae||le?Wc(ae,le)*ic+w:0,y&&(S*=Math.abs(Math.cos(y*_f))),r.svg&&(v-=k-(k*K+D*ae),b-=D-(k*ee+D*le))):(A=R[6],_e=R[7],xe=R[8],$e=R[9],Ee=R[10],M=R[11],v=R[12],b=R[13],x=R[14],O=Wc(A,Ee),j=O*ic,O&&(G=Math.cos(-O),q=Math.sin(-O),ce=Re*G+xe*q,ie=Ce*G+$e*q,te=A*G+Ee*q,xe=Re*-q+xe*G,$e=Ce*-q+$e*G,Ee=A*-q+Ee*G,M=_e*-q+M*G,Re=ce,Ce=ie,A=te),O=Wc(-ae,Ee),$=O*ic,O&&(G=Math.cos(-O),q=Math.sin(-O),ce=K*G-xe*q,ie=ee*G-$e*q,te=ae*G-Ee*q,M=le*q+M*G,K=ce,ee=ie,ae=te),O=Wc(ee,K),w=O*ic,O&&(G=Math.cos(O),q=Math.sin(O),ce=K*G+ee*q,ie=Re*G+Ce*q,ee=ee*G-K*q,Ce=Ce*G-Re*q,K=ce,Re=ie),j&&Math.abs(j)+Math.abs(w)>359.9&&(j=w=0,$=180-$),g=Rr(Math.sqrt(K*K+ee*ee+ae*ae)),S=Rr(Math.sqrt(Ce*Ce+A*A)),O=Wc(Re,Ce),y=Math.abs(O)>2e-4?O*ic:0,I=M?1/(M<0?-M:M):0),r.svg&&(ce=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!XT(Ia(t,sr)),ce&&t.setAttribute("transform",ce))),Math.abs(y)>90&&Math.abs(y)<270&&(o?(g*=-1,y+=w<=0?180:-180,w+=w<=0?180:-180):(S*=-1,y+=y<=0?180:-180)),n=n||r.uncache,r.x=v-((r.xPercent=v&&(!n&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-v)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+a,r.y=b-((r.yPercent=b&&(!n&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-b)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+a,r.z=x+a,r.scaleX=Rr(g),r.scaleY=Rr(S),r.rotation=Rr(w)+u,r.rotationX=Rr(j)+u,r.rotationY=Rr($)+u,r.skewX=y+u,r.skewY=E+u,r.transformPerspective=I+a,(r.zOrigin=parseFloat(f.split(" ")[2])||0)&&(i[sa]=A0(f)),r.xOffset=r.yOffset=0,r.force3D=Ko.force3D,r.renderTransform=r.svg?XU:HT?KT:YU,r.uncache=0,r},A0=function(t){return(t=t.split(" "))[0]+" "+t[1]},yv=function(t,n,r){var i=Ni(n);return Rr(parseFloat(n)+parseFloat(Pu(t,"x",r+"px",i)))+i},YU=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,KT(t,n)},ec="0deg",vd="0px",tc=") ",KT=function(t,n){var r=n||this,i=r.xPercent,o=r.yPercent,a=r.x,u=r.y,c=r.z,f=r.rotation,v=r.rotationY,b=r.rotationX,x=r.skewX,g=r.skewY,S=r.scaleX,w=r.scaleY,j=r.transformPerspective,$=r.force3D,y=r.target,E=r.zOrigin,I="",k=$==="auto"&&t&&t!==1||$===!0;if(E&&(b!==ec||v!==ec)){var D=parseFloat(v)*_f,R=Math.sin(D),O=Math.cos(D),G;D=parseFloat(b)*_f,G=Math.cos(D),a=yv(y,a,R*G*-E),u=yv(y,u,-Math.sin(D)*-E),c=yv(y,c,O*G*-E+E)}j!==vd&&(I+="perspective("+j+tc),(i||o)&&(I+="translate("+i+"%, "+o+"%) "),(k||a!==vd||u!==vd||c!==vd)&&(I+=c!==vd||k?"translate3d("+a+", "+u+", "+c+") ":"translate("+a+", "+u+tc),f!==ec&&(I+="rotate("+f+tc),v!==ec&&(I+="rotateY("+v+tc),b!==ec&&(I+="rotateX("+b+tc),(x!==ec||g!==ec)&&(I+="skew("+x+", "+g+tc),(S!==1||w!==1)&&(I+="scale("+S+", "+w+tc),y.style[sr]=I||"translate(0, 0)"},XU=function(t,n){var r=n||this,i=r.xPercent,o=r.yPercent,a=r.x,u=r.y,c=r.rotation,f=r.skewX,v=r.skewY,b=r.scaleX,x=r.scaleY,g=r.target,S=r.xOrigin,w=r.yOrigin,j=r.xOffset,$=r.yOffset,y=r.forceCSS,E=parseFloat(a),I=parseFloat(u),k,D,R,O,G;c=parseFloat(c),f=parseFloat(f),v=parseFloat(v),v&&(v=parseFloat(v),f+=v,c+=v),c||f?(c*=_f,f*=_f,k=Math.cos(c)*b,D=Math.sin(c)*b,R=Math.sin(c-f)*-x,O=Math.cos(c-f)*x,f&&(v*=_f,G=Math.tan(f-v),G=Math.sqrt(1+G*G),R*=G,O*=G,v&&(G=Math.tan(v),G=Math.sqrt(1+G*G),k*=G,D*=G)),k=Rr(k),D=Rr(D),R=Rr(R),O=Rr(O)):(k=b,O=x,D=R=0),(E&&!~(a+"").indexOf("px")||I&&!~(u+"").indexOf("px"))&&(E=Pu(g,"x",a,"px"),I=Pu(g,"y",u,"px")),(S||w||j||$)&&(E=Rr(E+S-(S*k+w*R)+j),I=Rr(I+w-(S*D+w*O)+$)),(i||o)&&(G=g.getBBox(),E=Rr(E+i/100*G.width),I=Rr(I+o/100*G.height)),G="matrix("+k+","+D+","+R+","+O+","+E+","+I+")",g.setAttribute("transform",G),y&&(g.style[sr]=G)},KU=function(t,n,r,i,o){var a=360,u=ti(o),c=parseFloat(o)*(u&&~o.indexOf("rad")?ic:1),f=c-i,v=i+f+"deg",b,x;return u&&(b=o.split("_")[1],b==="short"&&(f%=a,f!==f%(a/2)&&(f+=f<0?a:-a)),b==="cw"&&f<0?f=(f+a*W2)%a-~~(f/a)*a:b==="ccw"&&f>0&&(f=(f-a*W2)%a-~~(f/a)*a)),t._pt=x=new Eo(t._pt,n,r,i,f,OU),x.e=v,x.u="deg",t._props.push(r),x},K2=function(t,n){for(var r in n)t[r]=n[r];return t},qU=function(t,n,r){var i=K2({},r._gsap),o="perspective,force3D,transformOrigin,svgOrigin",a=r.style,u,c,f,v,b,x,g,S;i.svg?(f=r.getAttribute("transform"),r.setAttribute("transform",""),a[sr]=n,u=hh(r,1),fh(r,sr),r.setAttribute("transform",f)):(f=getComputedStyle(r)[sr],a[sr]=n,u=hh(r,1),a[sr]=f);for(c in bl)f=i[c],v=u[c],f!==v&&o.indexOf(c)<0&&(g=Ni(f),S=Ni(v),b=g!==S?Pu(r,c,f,S):parseFloat(f),x=parseFloat(v),t._pt=new Eo(t._pt,u,c,b,x-b,sy),t._pt.u=S||0,t._props.push(c));K2(u,i)};ko("padding,margin,Width,Radius",function(e,t){var n="Top",r="Right",i="Bottom",o="Left",a=(t<3?[n,r,i,o]:[n+o,n+r,i+r,i+o]).map(function(u){return t<2?e+u:"border"+u+e});T0[t>1?"border"+e:e]=function(u,c,f,v,b){var x,g;if(arguments.length<4)return x=a.map(function(S){return hl(u,S,f)}),g=x.join(" "),g.split(x[0]).length===5?x[0]:g;x=(v+"").split(" "),g={},a.forEach(function(S,w){return g[S]=x[w]=x[w]||x[(w-1)/2|0]}),u.init(c,g,b)}});var qT={name:"css",register:ly,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,r,i,o){var a=this._props,u=t.style,c=r.vars.startAt,f,v,b,x,g,S,w,j,$,y,E,I,k,D,R,O;Gx||ly(),this.styles=this.styles||WT(t),O=this.styles.props,this.tween=r;for(w in n)if(w!=="autoRound"&&(v=n[w],!(Ho[w]&&OT(w,n,r,i,t,o)))){if(g=typeof v,S=T0[w],g==="function"&&(v=v.call(r,i,t,o),g=typeof v),g==="string"&&~v.indexOf("random(")&&(v=lh(v)),S)S(this,t,w,v,r)&&(R=1);else if(w.substr(0,2)==="--")f=(getComputedStyle(t).getPropertyValue(w)+"").trim(),v+="",Cu.lastIndex=0,Cu.test(f)||(j=Ni(f),$=Ni(v)),$?j!==$&&(f=Pu(t,w,f,$)+$):j&&(v+=j),this.add(u,"setProperty",f,v,i,o,0,0,w),a.push(w),O.push(w,0,u[w]);else if(g!=="undefined"){if(c&&w in c?(f=typeof c[w]=="function"?c[w].call(r,i,t,o):c[w],ti(f)&&~f.indexOf("random(")&&(f=lh(f)),Ni(f+"")||(f+=Ko.units[w]||Ni(hl(t,w))||""),(f+"").charAt(1)==="="&&(f=hl(t,w))):f=hl(t,w),x=parseFloat(f),y=g==="string"&&v.charAt(1)==="="&&v.substr(0,2),y&&(v=v.substr(2)),b=parseFloat(v),w in Pa&&(w==="autoAlpha"&&(x===1&&hl(t,"visibility")==="hidden"&&b&&(x=0),O.push("visibility",0,u.visibility),fu(this,u,"visibility",x?"inherit":"hidden",b?"inherit":"hidden",!b)),w!=="scale"&&w!=="transform"&&(w=Pa[w],~w.indexOf(",")&&(w=w.split(",")[0]))),E=w in bl,E){if(this.styles.save(w),I||(k=t._gsap,k.renderTransform&&!n.parseTransform||hh(t,n.parseTransform),D=n.smoothOrigin!==!1&&k.smooth,I=this._pt=new Eo(this._pt,u,sr,0,1,k.renderTransform,k,0,-1),I.dep=1),w==="scale")this._pt=new Eo(this._pt,k,"scaleY",k.scaleY,(y?xf(k.scaleY,y+b):b)-k.scaleY||0,sy),this._pt.u=0,a.push("scaleY",w),w+="X";else if(w==="transformOrigin"){O.push(sa,0,u[sa]),v=VU(v),k.svg?uy(t,v,0,D,0,this):($=parseFloat(v.split(" ")[2])||0,$!==k.zOrigin&&fu(this,k,"zOrigin",k.zOrigin,$),fu(this,u,w,A0(f),A0(v)));continue}else if(w==="svgOrigin"){uy(t,v,1,D,0,this);continue}else if(w in YT){KU(this,k,w,x,y?xf(x,y+v):v);continue}else if(w==="smoothOrigin"){fu(this,k,"smooth",k.smooth,v);continue}else if(w==="force3D"){k[w]=v;continue}else if(w==="transform"){qU(this,v,t);continue}}else w in u||(w=zf(w)||w);if(E||(b||b===0)&&(x||x===0)&&!$U.test(v)&&w in u)j=(f+"").substr((x+"").length),b||(b=0),$=Ni(v)||(w in Ko.units?Ko.units[w]:j),j!==$&&(x=Pu(t,w,f,$)),this._pt=new Eo(this._pt,E?k:u,w,x,(y?xf(x,y+b):b)-x,!E&&($==="px"||w==="zIndex")&&n.autoRound!==!1?IU:sy),this._pt.u=$||0,j!==$&&$!=="%"&&(this._pt.b=f,this._pt.r=jU);else if(w in u)HU.call(this,t,w,f,y?y+v:v);else if(w in t)this.add(t,w,f||t[w],y?y+v:v,i,o);else if(w!=="parseTransform"){Mx(w,v);continue}E||(w in u?O.push(w,0,u[w]):O.push(w,1,f||t[w])),a.push(w)}}R&&DT(this)},render:function(t,n){if(n.tween._time||!Yx())for(var r=n._pt;r;)r.r(t,r.d),r=r._next;else n.styles.revert()},get:hl,aliases:Pa,getSetter:function(t,n,r){var i=Pa[n];return i&&i.indexOf(",")<0&&(n=i),n in bl&&n!==sa&&(t._gsap.x||hl(t,"x"))?r&&N2===r?n==="scale"?DU:MU:(N2=r||{})&&(n==="scale"?FU:zU):t.style&&!Ix(t.style[n])?LU:~n.indexOf("-")?UU:Hx(t,n)},core:{_removeProperty:fh,_getMatrix:Kx}};Ao.utils.checkPrefix=zf;Ao.core.getStyleSaver=WT;(function(e,t,n,r){var i=ko(e+","+t+","+n,function(o){bl[o]=1});ko(t,function(o){Ko.units[o]="deg",YT[o]=1}),Pa[i[13]]=e+","+t,ko(r,function(o){var a=o.split(":");Pa[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ko("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){Ko.units[e]="px"});Ao.registerPlugin(qT);var $a=Ao.registerPlugin(qT)||Ao;$a.core.Tween;var cy={exports:{}};(function(e,t){(function(n,r){r(t)})(Ss,function(n){function r(ye,z){for(var Z=0;Z<z.length;Z++){var H=z[Z];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(ye,H.key,H)}}function i(ye,z,Z){return z&&r(ye.prototype,z),Z&&r(ye,Z),ye}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var o,a,u,c,f,v,b,x,g,S,w,j,$,y=function(){return o||typeof window<"u"&&(o=window.gsap)&&o.registerPlugin&&o},E=1,I=[],k=[],D=[],R=Date.now,O=function(z,Z){return Z},G=function(){var z=g.core,Z=z.bridge||{},H=z._scrollers,Y=z._proxies;H.push.apply(H,k),Y.push.apply(Y,D),k=H,D=Y,O=function(Te,be){return Z[Te](be)}},q=function(z,Z){return~D.indexOf(z)&&D[D.indexOf(z)+1][Z]},K=function(z){return!!~S.indexOf(z)},ee=function(z,Z,H,Y,fe){return z.addEventListener(Z,H,{passive:!Y,capture:!!fe})},ae=function(z,Z,H,Y){return z.removeEventListener(Z,H,!!Y)},le="scrollLeft",Re="scrollTop",Ce=function(){return w&&w.isPressed||k.cache++},ce=function(z,Z){var H=function Y(fe){if(fe||fe===0){E&&(u.history.scrollRestoration="manual");var Te=w&&w.isPressed;fe=Y.v=Math.round(fe)||(w&&w.iOS?1:0),z(fe),Y.cacheID=k.cache,Te&&O("ss",fe)}else(Z||k.cache!==Y.cacheID||O("ref"))&&(Y.cacheID=k.cache,Y.v=z());return Y.v+Y.offset};return H.offset=0,z&&H},ie={s:le,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ce(function(ye){return arguments.length?u.scrollTo(ye,te.sc()):u.pageXOffset||c[le]||f[le]||v[le]||0})},te={s:Re,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ie,sc:ce(function(ye){return arguments.length?u.scrollTo(ie.sc(),ye):u.pageYOffset||c[Re]||f[Re]||v[Re]||0})},xe=function(z,Z){return(Z&&Z._ctx&&Z._ctx.selector||o.utils.toArray)(z)[0]||(typeof z=="string"&&o.config().nullTargetWarn!==!1?console.warn("Element not found:",z):null)},$e=function(z,Z){var H=Z.s,Y=Z.sc;K(z)&&(z=c.scrollingElement||f);var fe=k.indexOf(z),Te=Y===te.sc?1:2;!~fe&&(fe=k.push(z)-1),k[fe+Te]||ee(z,"scroll",Ce);var be=k[fe+Te],Ke=be||(k[fe+Te]=ce(q(z,H),!0)||(K(z)?Y:ce(function(Et){return arguments.length?z[H]=Et:z[H]})));return Ke.target=z,be||(Ke.smooth=o.getProperty(z,"scrollBehavior")==="smooth"),Ke},Ee=function(z,Z,H){var Y=z,fe=z,Te=R(),be=Te,Ke=Z||50,Et=Math.max(500,Ke*3),Vt=function(ft,On){var dn=R();On||dn-Te>Ke?(fe=Y,Y=ft,be=Te,Te=dn):H?Y+=ft:Y=fe+(ft-fe)/(dn-be)*(Te-be)},Gt=function(){fe=Y=H?0:Y,be=Te=0},lt=function(ft){var On=be,dn=fe,Un=R();return(ft||ft===0)&&ft!==Y&&Vt(ft),Te===be||Un-be>Et?0:(Y+(H?dn:-dn))/((H?Un:Te)-On)*1e3};return{update:Vt,reset:Gt,getVelocity:lt}},_e=function(z,Z){return Z&&!z._gsapAllow&&z.preventDefault(),z.changedTouches?z.changedTouches[0]:z},M=function(z){var Z=Math.max.apply(Math,z),H=Math.min.apply(Math,z);return Math.abs(Z)>=Math.abs(H)?Z:H},A=function(){g=o.core.globals().ScrollTrigger,g&&g.core&&G()},T=function(z){return o=z||y(),o&&typeof document<"u"&&document.body&&(u=window,c=document,f=c.documentElement,v=c.body,S=[u,c,f,v],o.utils.clamp,$=o.core.context||function(){},x="onpointerenter"in v?"pointer":"mouse",b=V.isTouch=u.matchMedia&&u.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in u||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,j=V.eventTypes=("ontouchstart"in f?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in f?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return E=0},500),A(),a=1),a};ie.op=te,k.cache=0;var V=function(){function ye(Z){this.init(Z)}var z=ye.prototype;return z.init=function(H){a||T(o)||console.warn("Please gsap.registerPlugin(Observer)"),g||A();var Y=H.tolerance,fe=H.dragMinimum,Te=H.type,be=H.target,Ke=H.lineHeight,Et=H.debounce,Vt=H.preventDefault,Gt=H.onStop,lt=H.onStopDelay,Le=H.ignore,ft=H.wheelSpeed,On=H.event,dn=H.onDragStart,Un=H.onDragEnd,An=H.onDrag,Zn=H.onPress,ut=H.onRelease,Wr=H.onRight,Nt=H.onLeft,_t=H.onUp,Cr=H.onDown,Hr=H.onChangeX,ht=H.onChangeY,dr=H.onChange,Tt=H.onToggleX,$i=H.onToggleY,wn=H.onHover,d=H.onHoverEnd,p=H.onMove,_=H.ignoreCheck,P=H.isNormalizer,F=H.onGestureStart,L=H.onGestureEnd,ne=H.onWheel,pe=H.onEnable,ke=H.onDisable,ue=H.onClick,Ue=H.scrollSpeed,We=H.capture,Ge=H.allowClicks,se=H.lockAxis,De=H.onLockAxis;this.target=be=xe(be)||f,this.vars=H,Le&&(Le=o.utils.toArray(Le)),Y=Y||1e-9,fe=fe||0,ft=ft||1,Ue=Ue||1,Te=Te||"wheel,touch,pointer",Et=Et!==!1,Ke||(Ke=parseFloat(u.getComputedStyle(v).lineHeight)||22);var Fe,dt,pt,X,ve,me,Ve,de=this,qe=0,Wt=0,Ae=$e(be,ie),Ye=$e(be,te),Mt=Ae(),yt=Ye(),St=~Te.indexOf("touch")&&!~Te.indexOf("pointer")&&j[0]==="pointerdown",wt=K(be),at=be.ownerDocument||c,jt=[0,0,0],_n=[0,0,0],gt=0,hr=function(){return gt=R()},hn=function(bt,un){return(de.event=bt)&&Le&&~Le.indexOf(bt.target)||un&&St&&bt.pointerType!=="touch"||_&&_(bt,un)},pr=function(){de._vx.reset(),de._vy.reset(),dt.pause(),Gt&&Gt(de)},cs=function(){var bt=de.deltaX=M(jt),un=de.deltaY=M(_n),Wn=Math.abs(bt)>=Y,nt=Math.abs(un)>=Y;dr&&(Wn||nt)&&dr(de,bt,un,jt,_n),Wn&&(Wr&&de.deltaX>0&&Wr(de),Nt&&de.deltaX<0&&Nt(de),Hr&&Hr(de),Tt&&de.deltaX<0!=qe<0&&Tt(de),qe=de.deltaX,jt[0]=jt[1]=jt[2]=0),nt&&(Cr&&de.deltaY>0&&Cr(de),_t&&de.deltaY<0&&_t(de),ht&&ht(de),$i&&de.deltaY<0!=Wt<0&&$i(de),Wt=de.deltaY,_n[0]=_n[1]=_n[2]=0),(X||pt)&&(p&&p(de),pt&&(An(de),pt=!1),X=!1),me&&!(me=!1)&&De&&De(de),ve&&(ne(de),ve=!1),Fe=0},co=function(bt,un,Wn){jt[Wn]+=bt,_n[Wn]+=un,de._vx.update(bt),de._vy.update(un),Et?Fe||(Fe=requestAnimationFrame(cs)):cs()},fo=function(bt,un){se&&!Ve&&(de.axis=Ve=Math.abs(bt)>Math.abs(un)?"x":"y",me=!0),Ve!=="y"&&(jt[2]+=bt,de._vx.update(bt,!0)),Ve!=="x"&&(_n[2]+=un,de._vy.update(un,!0)),Et?Fe||(Fe=requestAnimationFrame(cs)):cs()},Mr=function(bt){if(!hn(bt,1)){bt=_e(bt,Vt);var un=bt.clientX,Wn=bt.clientY,nt=un-de.x,Xt=Wn-de.y,Ct=de.isDragging;de.x=un,de.y=Wn,(Ct||Math.abs(de.startX-un)>=fe||Math.abs(de.startY-Wn)>=fe)&&(An&&(pt=!0),Ct||(de.isDragging=!0),fo(nt,Xt),Ct||dn&&dn(de))}},Mn=de.onPress=function(It){hn(It,1)||It&&It.button||(de.axis=Ve=null,dt.pause(),de.isPressed=!0,It=_e(It),qe=Wt=0,de.startX=de.x=It.clientX,de.startY=de.y=It.clientY,de._vx.reset(),de._vy.reset(),ee(P?be:at,j[1],Mr,Vt,!0),de.deltaX=de.deltaY=0,Zn&&Zn(de))},Oi=de.onRelease=function(It){if(!hn(It,1)){ae(P?be:at,j[1],Mr,!0);var bt=!isNaN(de.y-de.startY),un=de.isDragging&&(Math.abs(de.x-de.startX)>3||Math.abs(de.y-de.startY)>3),Wn=_e(It);!un&&bt&&(de._vx.reset(),de._vy.reset(),Vt&&Ge&&o.delayedCall(.08,function(){if(R()-gt>300&&!It.defaultPrevented){if(It.target.click)It.target.click();else if(at.createEvent){var nt=at.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,u,1,Wn.screenX,Wn.screenY,Wn.clientX,Wn.clientY,!1,!1,!1,!1,0,null),It.target.dispatchEvent(nt)}}})),de.isDragging=de.isGesturing=de.isPressed=!1,Gt&&!P&&dt.restart(!0),Un&&un&&Un(de),ut&&ut(de,un)}},Yt=function(bt){return bt.touches&&bt.touches.length>1&&(de.isGesturing=!0)&&F(bt,de.isDragging)},Vr=function(){return(de.isGesturing=!1)||L(de)},ji=function(bt){if(!hn(bt)){var un=Ae(),Wn=Ye();co((un-Mt)*Ue,(Wn-yt)*Ue,1),Mt=un,yt=Wn,Gt&&dt.restart(!0)}},ci=function(bt){if(!hn(bt)){bt=_e(bt,Vt),ne&&(ve=!0);var un=(bt.deltaMode===1?Ke:bt.deltaMode===2?u.innerHeight:1)*ft;co(bt.deltaX*un,bt.deltaY*un,0),Gt&&!P&&dt.restart(!0)}},Ii=function(bt){if(!hn(bt)){var un=bt.clientX,Wn=bt.clientY,nt=un-de.x,Xt=Wn-de.y;de.x=un,de.y=Wn,X=!0,(nt||Xt)&&fo(nt,Xt)}},wa=function(bt){de.event=bt,wn(de)},fs=function(bt){de.event=bt,d(de)},fi=function(bt){return hn(bt)||_e(bt,Vt)&&ue(de)};dt=de._dc=o.delayedCall(lt||.25,pr).pause(),de.deltaX=de.deltaY=0,de._vx=Ee(0,50,!0),de._vy=Ee(0,50,!0),de.scrollX=Ae,de.scrollY=Ye,de.isDragging=de.isGesturing=de.isPressed=!1,$(this),de.enable=function(It){return de.isEnabled||(ee(wt?at:be,"scroll",Ce),Te.indexOf("scroll")>=0&&ee(wt?at:be,"scroll",ji,Vt,We),Te.indexOf("wheel")>=0&&ee(be,"wheel",ci,Vt,We),(Te.indexOf("touch")>=0&&b||Te.indexOf("pointer")>=0)&&(ee(be,j[0],Mn,Vt,We),ee(at,j[2],Oi),ee(at,j[3],Oi),Ge&&ee(be,"click",hr,!1,!0),ue&&ee(be,"click",fi),F&&ee(at,"gesturestart",Yt),L&&ee(at,"gestureend",Vr),wn&&ee(be,x+"enter",wa),d&&ee(be,x+"leave",fs),p&&ee(be,x+"move",Ii)),de.isEnabled=!0,It&&It.type&&Mn(It),pe&&pe(de)),de},de.disable=function(){de.isEnabled&&(I.filter(function(It){return It!==de&&K(It.target)}).length||ae(wt?at:be,"scroll",Ce),de.isPressed&&(de._vx.reset(),de._vy.reset(),ae(P?be:at,j[1],Mr,!0)),ae(wt?at:be,"scroll",ji,We),ae(be,"wheel",ci,We),ae(be,j[0],Mn,We),ae(at,j[2],Oi),ae(at,j[3],Oi),ae(be,"click",hr,!0),ae(be,"click",fi),ae(at,"gesturestart",Yt),ae(at,"gestureend",Vr),ae(be,x+"enter",wa),ae(be,x+"leave",fs),ae(be,x+"move",Ii),de.isEnabled=de.isPressed=de.isDragging=!1,ke&&ke(de))},de.kill=de.revert=function(){de.disable();var It=I.indexOf(de);It>=0&&I.splice(It,1),w===de&&(w=0)},I.push(de),P&&K(be)&&(w=de),de.enable(On)},i(ye,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),ye}();V.version="3.12.2",V.create=function(ye){return new V(ye)},V.register=T,V.getAll=function(){return I.slice()},V.getById=function(ye){return I.filter(function(z){return z.vars.id===ye})[0]},y()&&o.registerPlugin(V);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var N,he,oe,Se,Oe,Pe,Xe,Ne,Ze,Me,st,Lt,it,$t,Nn,et,tt,Jt,Or,ur,Rn,Al,jr,Rl,Ba,Us,Yi,bi,Ms,Po,Pl,$l,Na=1,br=Date.now,Ol=br(),Si=0,Wa=0,Fu=function(z,Z,H){var Y=Xr(z)&&(z.substr(0,6)==="clamp("||z.indexOf("max")>-1);return H["_"+Z+"Clamp"]=Y,Y?z.substr(6,z.length-7):z},Dt=function(z,Z){return Z&&(!Xr(z)||z.substr(0,6)!=="clamp(")?"clamp("+z+")":z},jc=function ye(){return Wa&&requestAnimationFrame(ye)},jl=function(){return $t=1},zu=function(){return $t=0},ri=function(z){return z},Ds=function(z){return Math.round(z*1e5)/1e5||0},ua=function(){return typeof window<"u"},Ha=function(){return N||ua()&&(N=window.gsap)&&N.registerPlugin&&N},Qe=function(z){return!!~Xe.indexOf(z)},Il=function(z){return(z==="Height"?Pl:oe["inner"+z])||Oe["client"+z]||Pe["client"+z]},$o=function(z){return q(z,"getBoundingClientRect")||(Qe(z)?function(){return cr.width=oe.innerWidth,cr.height=Pl,cr}:function(){return ki(z)})},Bu=function(z,Z,H){var Y=H.d,fe=H.d2,Te=H.a;return(Te=q(z,"getBoundingClientRect"))?function(){return Te()[Y]}:function(){return(Z?Il(fe):z["client"+fe])||0}},Ic=function(z,Z){return!Z||~D.indexOf(z)?$o(z):function(){return cr}},Ci=function(z,Z){var H=Z.s,Y=Z.d2,fe=Z.d,Te=Z.a;return Math.max(0,(H="scroll"+Y)&&(Te=q(z,H))?Te()-$o(z)()[fe]:Qe(z)?(Oe[H]||Pe[H])-Il(Y):z[H]-z["offset"+Y])},Va=function(z,Z){for(var H=0;H<Or.length;H+=3)(!Z||~Z.indexOf(Or[H+1]))&&z(Or[H],Or[H+1],Or[H+2])},Xr=function(z){return typeof z=="string"},Kn=function(z){return typeof z=="function"},Ga=function(z){return typeof z=="number"},Fs=function(z){return typeof z=="object"},ii=function(z,Z,H){return z&&z.progress(Z?0:1)&&H&&z.pause()},Ll=function(z,Z){if(z.enabled){var H=Z(z);H&&H.totalTime&&(z.callbackAnimation=H)}},ca=Math.abs,Ul="left",fa="top",oi="right",Oo="bottom",jo="width",zs="height",as="Right",Bs="Left",Ns="Top",Ws="Bottom",Tn="padding",Kr="margin",si="Width",Hs="Height",In="px",Sr=function(z){return oe.getComputedStyle(z)},so=function(z){var Z=Sr(z).position;z.style.position=Z==="absolute"||Z==="fixed"?Z:"relative"},Ya=function(z,Z){for(var H in Z)H in z||(z[H]=Z[H]);return z},ki=function(z,Z){var H=Z&&Sr(z)[Nn]!=="matrix(1, 0, 0, 1, 0, 0)"&&N.to(z,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),Y=z.getBoundingClientRect();return H&&H.progress(0).kill(),Y},Xa=function(z,Z){var H=Z.d2;return z["offset"+H]||z["client"+H]||0},Ir=function(z){var Z=[],H=z.labels,Y=z.duration(),fe;for(fe in H)Z.push(H[fe]/Y);return Z},Vs=function(z){return function(Z){return N.utils.snap(Ir(z),Z)}},Ot=function(z){var Z=N.utils.snap(z),H=Array.isArray(z)&&z.slice(0).sort(function(Y,fe){return Y-fe});return H?function(Y,fe,Te){Te===void 0&&(Te=.001);var be;if(!fe)return Z(Y);if(fe>0){for(Y-=Te,be=0;be<H.length;be++)if(H[be]>=Y)return H[be];return H[be-1]}else for(be=H.length,Y+=Te;be--;)if(H[be]<=Y)return H[be];return H[0]}:function(Y,fe,Te){Te===void 0&&(Te=.001);var be=Z(Y);return!fe||Math.abs(be-Y)<Te||be-Y<0==fe<0?be:Z(fe<0?Y-z:Y+z)}},Ei=function(z){return function(Z,H){return Ot(Ir(z))(Z,H.direction)}},qr=function(z,Z,H,Y){return H.split(",").forEach(function(fe){return z(Z,fe,Y)})},Ln=function(z,Z,H,Y,fe){return z.addEventListener(Z,H,{passive:!Y,capture:!!fe})},qn=function(z,Z,H,Y){return z.removeEventListener(Z,H,!!Y)},da=function(z,Z,H){H=H&&H.wheelHandler,H&&(z(Z,"wheel",H),z(Z,"touchmove",H))},yn={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ao={toggleActions:"play",anticipatePin:0},Xi={top:0,left:0,center:.5,bottom:1,right:1},Io=function(z,Z){if(Xr(z)){var H=z.indexOf("="),Y=~H?+(z.charAt(H-1)+1)*parseFloat(z.substr(H+1)):0;~H&&(z.indexOf("%")>H&&(Y*=Z/100),z=z.substr(0,H-1)),z=Y+(z in Xi?Xi[z]*Z:~z.indexOf("%")?parseFloat(z)*Z/100:parseFloat(z)||0)}return z},ai=function(z,Z,H,Y,fe,Te,be,Ke){var Et=fe.startColor,Vt=fe.endColor,Gt=fe.fontSize,lt=fe.indent,Le=fe.fontWeight,ft=Se.createElement("div"),On=Qe(H)||q(H,"pinType")==="fixed",dn=z.indexOf("scroller")!==-1,Un=On?Pe:H,An=z.indexOf("start")!==-1,Zn=An?Et:Vt,ut="border-color:"+Zn+";font-size:"+Gt+";color:"+Zn+";font-weight:"+Le+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return ut+="position:"+((dn||Ke)&&On?"fixed;":"absolute;"),(dn||Ke||!On)&&(ut+=(Y===te?oi:Oo)+":"+(Te+parseFloat(lt))+"px;"),be&&(ut+="box-sizing:border-box;text-align:left;width:"+be.offsetWidth+"px;"),ft._isStart=An,ft.setAttribute("class","gsap-marker-"+z+(Z?" marker-"+Z:"")),ft.style.cssText=ut,ft.innerText=Z||Z===0?z+"-"+Z:z,Un.children[0]?Un.insertBefore(ft,Un.children[0]):Un.appendChild(ft),ft._offset=ft["offset"+Y.op.d2],ha(ft,0,Y,An),ft},ha=function(z,Z,H,Y){var fe={display:"block"},Te=H[Y?"os2":"p2"],be=H[Y?"p2":"os2"];z._isFlipped=Y,fe[H.a+"Percent"]=Y?-100:0,fe[H.a]=Y?"1px":0,fe["border"+Te+si]=1,fe["border"+be+si]=0,fe[H.p]=Z+"px",N.set(z,fe)},Pt=[],Ka={},lo,pa=function(){return br()-Si>34&&(lo||(lo=requestAnimationFrame(Ki)))},ls=function(){(!jr||!jr.isPressed||jr.startX>Pe.clientWidth)&&(k.cache++,jr?lo||(lo=requestAnimationFrame(Ki)):Ki(),Si||uo("scrollStart"),Si=br())},Ml=function(){Us=oe.innerWidth,Ba=oe.innerHeight},ga=function(){k.cache++,!it&&!Al&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!Rl||Us!==oe.innerWidth||Math.abs(oe.innerHeight-Ba)>oe.innerHeight*.25)&&Ne.restart(!0)},Lo={},Jf=[],Nu=function ye(){return qn(mt,"scrollEnd",ye)||Gs(!0)},uo=function(z){return Lo[z]&&Lo[z].map(function(Z){return Z()})||Jf},Lr=[],Uo=function(z){for(var Z=0;Z<Lr.length;Z+=5)(!z||Lr[Z+4]&&Lr[Z+4].query===z)&&(Lr[Z].style.cssText=Lr[Z+1],Lr[Z].getBBox&&Lr[Z].setAttribute("transform",Lr[Z+2]||""),Lr[Z+3].uncache=1)},ma=function(z,Z){var H;for(et=0;et<Pt.length;et++)H=Pt[et],H&&(!Z||H._ctx===Z)&&(z?H.kill(1):H.revert(!0,!0));Z&&Uo(Z),Z||uo("revert")},va=function(z,Z){k.cache++,(Z||!Qn)&&k.forEach(function(H){return Kn(H)&&H.cacheID++&&(H.rec=0)}),Xr(z)&&(oe.history.scrollRestoration=Ms=z)},Qn,Ti=0,qa,zt=function(){if(qa!==Ti){var z=qa=Ti;requestAnimationFrame(function(){return z===Ti&&Gs(!0)})}},an=function(){Pe.appendChild(Po),Pl=Po.offsetHeight||oe.innerHeight,Pe.removeChild(Po)},Gs=function(z,Z){if(Si&&!z){Ln(mt,"scrollEnd",Nu);return}an(),Qn=mt.isRefreshing=!0,k.forEach(function(Y){return Kn(Y)&&++Y.cacheID&&(Y.rec=Y())});var H=uo("refreshInit");ur&&mt.sort(),Z||ma(),k.forEach(function(Y){Kn(Y)&&(Y.smooth&&(Y.target.style.scrollBehavior="auto"),Y(0))}),Pt.slice(0).forEach(function(Y){return Y.refresh()}),Pt.forEach(function(Y,fe){if(Y._subPinOffset&&Y.pin){var Te=Y.vars.horizontal?"offsetWidth":"offsetHeight",be=Y.pin[Te];Y.revert(!0,1),Y.adjustPinSpacing(Y.pin[Te]-be),Y.refresh()}}),Pt.forEach(function(Y){var fe=Ci(Y.scroller,Y._dir);(Y.vars.end==="max"||Y._endClamp&&Y.end>fe)&&Y.setPositions(Y.start,Math.max(Y.start+1,fe),!0)}),H.forEach(function(Y){return Y&&Y.render&&Y.render(-1)}),k.forEach(function(Y){Kn(Y)&&(Y.smooth&&requestAnimationFrame(function(){return Y.target.style.scrollBehavior="smooth"}),Y.rec&&Y(Y.rec))}),va(Ms,1),Ne.pause(),Ti++,Qn=2,Ki(2),Pt.forEach(function(Y){return Kn(Y.vars.onRefresh)&&Y.vars.onRefresh(Y)}),Qn=mt.isRefreshing=!1,uo("refresh")},Ai=0,ya=1,Ri,Ki=function(z){if(!Qn||z===2){mt.isUpdating=!0,Ri&&Ri.update(0);var Z=Pt.length,H=br(),Y=H-Ol>=50,fe=Z&&Pt[0].scroll();if(ya=Ai>fe?-1:1,Qn||(Ai=fe),Y&&(Si&&!$t&&H-Si>200&&(Si=0,uo("scrollEnd")),st=Ol,Ol=H),ya<0){for(et=Z;et-- >0;)Pt[et]&&Pt[et].update(0,Y);ya=1}else for(et=0;et<Z;et++)Pt[et]&&Pt[et].update(0,Y);mt.isUpdating=!1}lo=0},Qa=[Ul,fa,Oo,oi,Kr+Ws,Kr+as,Kr+Ns,Kr+Bs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ja=Qa.concat([jo,zs,"boxSizing","max"+si,"max"+Hs,"position",Kr,Tn,Tn+Ns,Tn+as,Tn+Ws,Tn+Bs]),Dl=function(z,Z,H){Pi(H);var Y=z._gsap;if(Y.spacerIsNative)Pi(Y.spacerState);else if(z._gsap.swappedIn){var fe=Z.parentNode;fe&&(fe.insertBefore(z,Z),fe.removeChild(Z))}z._gsap.swappedIn=!1},Jn=function(z,Z,H,Y){if(!z._gsap.swappedIn){for(var fe=Qa.length,Te=Z.style,be=z.style,Ke;fe--;)Ke=Qa[fe],Te[Ke]=H[Ke];Te.position=H.position==="absolute"?"absolute":"relative",H.display==="inline"&&(Te.display="inline-block"),be[Oo]=be[oi]="auto",Te.flexBasis=H.flexBasis||"auto",Te.overflow="visible",Te.boxSizing="border-box",Te[jo]=Xa(z,ie)+In,Te[zs]=Xa(z,te)+In,Te[Tn]=be[Kr]=be[fa]=be[Ul]="0",Pi(Y),be[jo]=be["max"+si]=H[jo],be[zs]=be["max"+Hs]=H[zs],be[Tn]=H[Tn],z.parentNode!==Z&&(z.parentNode.insertBefore(Z,z),Z.appendChild(z)),z._gsap.swappedIn=!0}},Wu=/([A-Z])/g,Pi=function(z){if(z){var Z=z.t.style,H=z.length,Y=0,fe,Te;for((z.t._gsap||N.core.getCache(z.t)).uncache=1;Y<H;Y+=2)Te=z[Y+1],fe=z[Y],Te?Z[fe]=Te:Z[fe]&&Z.removeProperty(fe.replace(Wu,"-$1").toLowerCase())}},li=function(z){for(var Z=Ja.length,H=z.style,Y=[],fe=0;fe<Z;fe++)Y.push(Ja[fe],H[Ja[fe]]);return Y.t=z,Y},Fl=function(z,Z,H){for(var Y=[],fe=z.length,Te=H?8:0,be;Te<fe;Te+=2)be=z[Te],Y.push(be,be in Z?Z[be]:z[Te+1]);return Y.t=z.t,Y},cr={left:0,top:0},zl=function(z,Z,H,Y,fe,Te,be,Ke,Et,Vt,Gt,lt,Le,ft){Kn(z)&&(z=z(Ke)),Xr(z)&&z.substr(0,3)==="max"&&(z=lt+(z.charAt(4)==="="?Io("0"+z.substr(3),H):0));var On=Le?Le.time():0,dn,Un,An;if(Le&&Le.seek(0),isNaN(z)||(z=+z),Ga(z))Le&&(z=N.utils.mapRange(Le.scrollTrigger.start,Le.scrollTrigger.end,0,lt,z)),be&&ha(be,H,Y,!0);else{Kn(Z)&&(Z=Z(Ke));var Zn=(z||"0").split(" "),ut,Wr,Nt,_t;An=xe(Z,Ke)||Pe,ut=ki(An)||{},(!ut||!ut.left&&!ut.top)&&Sr(An).display==="none"&&(_t=An.style.display,An.style.display="block",ut=ki(An),_t?An.style.display=_t:An.style.removeProperty("display")),Wr=Io(Zn[0],ut[Y.d]),Nt=Io(Zn[1]||"0",H),z=ut[Y.p]-Et[Y.p]-Vt+Wr+fe-Nt,be&&ha(be,Nt,Y,H-Nt<20||be._isStart&&Nt>20),H-=H-Nt}if(ft&&(Ke[ft]=z||-.001,z<0&&(z=0)),Te){var Cr=z+H,Hr=Te._isStart;dn="scroll"+Y.d2,ha(Te,Cr,Y,Hr&&Cr>20||!Hr&&(Gt?Math.max(Pe[dn],Oe[dn]):Te.parentNode[dn])<=Cr+1),Gt&&(Et=ki(be),Gt&&(Te.style[Y.op.p]=Et[Y.op.p]-Y.op.m-Te._offset+In))}return Le&&An&&(dn=ki(An),Le.seek(lt),Un=ki(An),Le._caScrollDist=dn[Y.p]-Un[Y.p],z=z/Le._caScrollDist*lt),Le&&Le.seek(On),Le?z:Math.round(z)},Lc=/(webkit|moz|length|cssText|inset)/i,fr=function(z,Z,H,Y){if(z.parentNode!==Z){var fe=z.style,Te,be;if(Z===Pe){z._stOrig=fe.cssText,be=Sr(z);for(Te in be)!+Te&&!Lc.test(Te)&&be[Te]&&typeof fe[Te]=="string"&&Te!=="0"&&(fe[Te]=be[Te]);fe.top=H,fe.left=Y}else fe.cssText=z._stOrig;N.core.getCache(z).uncache=1,Z.appendChild(z)}},Bl=function(z,Z,H){var Y=Z,fe=Y;return function(Te){var be=Math.round(z());return be!==Y&&be!==fe&&Math.abs(be-Y)>3&&Math.abs(be-fe)>3&&(Te=be,H&&H()),fe=Y,Y=Te,Te}},ui=function(z,Z,H){var Y={};Y[Z.p]="+="+H,N.set(z,Y)},xa=function(z,Z){var H=$e(z,Z),Y="_scroll"+Z.p2,fe=function Te(be,Ke,Et,Vt,Gt){var lt=Te.tween,Le=Ke.onComplete,ft={};Et=Et||H();var On=Bl(H,Et,function(){lt.kill(),Te.tween=0});return Gt=Vt&&Gt||0,Vt=Vt||be-Et,lt&&lt.kill(),Ke[Y]=be,Ke.modifiers=ft,ft[Y]=function(){return On(Et+Vt*lt.ratio+Gt*lt.ratio*lt.ratio)},Ke.onUpdate=function(){k.cache++,Ki()},Ke.onComplete=function(){Te.tween=0,Le&&Le.call(lt)},lt=Te.tween=N.to(z,Ke),lt};return z[Y]=H,H.wheelHandler=function(){return fe.tween&&fe.tween.kill()&&(fe.tween=0)},Ln(z,"wheel",H.wheelHandler),mt.isTouch&&Ln(z,"touchmove",H.wheelHandler),fe},mt=function(){function ye(Z,H){he||ye.register(N)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bi(this),this.init(Z,H)}var z=ye.prototype;return z.init=function(H,Y){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wa){this.update=this.refresh=this.kill=ri;return}H=Ya(Xr(H)||Ga(H)||H.nodeType?{trigger:H}:H,ao);var fe=H,Te=fe.onUpdate,be=fe.toggleClass,Ke=fe.id,Et=fe.onToggle,Vt=fe.onRefresh,Gt=fe.scrub,lt=fe.trigger,Le=fe.pin,ft=fe.pinSpacing,On=fe.invalidateOnRefresh,dn=fe.anticipatePin,Un=fe.onScrubComplete,An=fe.onSnapComplete,Zn=fe.once,ut=fe.snap,Wr=fe.pinReparent,Nt=fe.pinSpacer,_t=fe.containerAnimation,Cr=fe.fastScrollEnd,Hr=fe.preventOverlaps,ht=H.horizontal||H.containerAnimation&&H.horizontal!==!1?ie:te,dr=!Gt&&Gt!==0,Tt=xe(H.scroller||oe),$i=N.core.getCache(Tt),wn=Qe(Tt),d=("pinType"in H?H.pinType:q(Tt,"pinType")||wn&&"fixed")==="fixed",p=[H.onEnter,H.onLeave,H.onEnterBack,H.onLeaveBack],_=dr&&H.toggleActions.split(" "),P="markers"in H?H.markers:ao.markers,F=wn?0:parseFloat(Sr(Tt)["border"+ht.p2+si])||0,L=this,ne=H.onRefreshInit&&function(){return H.onRefreshInit(L)},pe=Bu(Tt,wn,ht),ke=Ic(Tt,wn),ue=0,Ue=0,We=0,Ge=$e(Tt,ht),se,De,Fe,dt,pt,X,ve,me,Ve,de,qe,Wt,Ae,Ye,Mt,yt,St,wt,at,jt,_n,gt,hr,hn,pr,cs,co,fo,Mr,Mn,Oi,Yt,Vr,ji,ci,Ii,wa,fs,fi;if(L._startClamp=L._endClamp=!1,L._dir=ht,dn*=45,L.scroller=Tt,L.scroll=_t?_t.time.bind(_t):Ge,dt=Ge(),L.vars=H,Y=Y||H.animation,"refreshPriority"in H&&(ur=1,H.refreshPriority===-9999&&(Ri=L)),$i.tweenScroll=$i.tweenScroll||{top:xa(Tt,te),left:xa(Tt,ie)},L.tweenTo=se=$i.tweenScroll[ht.p],L.scrubDuration=function(nt){Vr=Ga(nt)&&nt,Vr?Yt?Yt.duration(nt):Yt=N.to(Y,{ease:"expo",totalProgress:"+=0",duration:Vr,paused:!0,onComplete:function(){return Un&&Un(L)}}):(Yt&&Yt.progress(1).kill(),Yt=0)},Y&&(Y.vars.lazy=!1,Y._initted&&!L.isReverted||Y.vars.immediateRender!==!1&&H.immediateRender!==!1&&Y.duration()&&Y.render(0,!0,!0),L.animation=Y.pause(),Y.scrollTrigger=L,L.scrubDuration(Gt),Mn=0,Ke||(Ke=Y.vars.id)),ut&&((!Fs(ut)||ut.push)&&(ut={snapTo:ut}),"scrollBehavior"in Pe.style&&N.set(wn?[Pe,Oe]:Tt,{scrollBehavior:"auto"}),k.forEach(function(nt){return Kn(nt)&&nt.target===(wn?Se.scrollingElement||Oe:Tt)&&(nt.smooth=!1)}),Fe=Kn(ut.snapTo)?ut.snapTo:ut.snapTo==="labels"?Vs(Y):ut.snapTo==="labelsDirectional"?Ei(Y):ut.directional!==!1?function(nt,Xt){return Ot(ut.snapTo)(nt,br()-Ue<500?0:Xt.direction)}:N.utils.snap(ut.snapTo),ji=ut.duration||{min:.1,max:2},ji=Fs(ji)?Me(ji.min,ji.max):Me(ji,ji),ci=N.delayedCall(ut.delay||Vr/2||.1,function(){var nt=Ge(),Xt=br()-Ue<500,Ct=se.tween;if((Xt||Math.abs(L.getVelocity())<10)&&!Ct&&!$t&&ue!==nt){var Kt=(nt-X)/Ye,kr=Y&&!dr?Y.totalProgress():Kt,nn=Xt?0:(kr-Oi)/(br()-st)*1e3||0,er=N.utils.clamp(-Kt,1-Kt,ca(nn/2)*nn/.185),rn=Kt+(ut.inertia===!1?0:er),ln=Me(0,1,Fe(rn,L)),Dn=Math.round(X+ln*Ye),bn=ut,ho=bn.onStart,Fn=bn.onInterrupt,di=bn.onComplete;if(nt<=ve&&nt>=X&&Dn!==nt){if(Ct&&!Ct._initted&&Ct.data<=ca(Dn-nt))return;ut.inertia===!1&&(er=ln-Kt),se(Dn,{duration:ji(ca(Math.max(ca(rn-kr),ca(ln-kr))*.185/nn/.05||0)),ease:ut.ease||"power3",data:ca(Dn-nt),onInterrupt:function(){return ci.restart(!0)&&Fn&&Fn(L)},onComplete:function(){L.update(),ue=Ge(),Mn=Oi=Y&&!dr?Y.totalProgress():L.progress,An&&An(L),di&&di(L)}},nt,er*Ye,Dn-nt-er*Ye),ho&&ho(L,se.tween)}}else L.isActive&&ue!==nt&&ci.restart(!0)}).pause()),Ke&&(Ka[Ke]=L),lt=L.trigger=xe(lt||Le!==!0&&Le),fi=lt&&lt._gsap&&lt._gsap.stRevert,fi&&(fi=fi(L)),Le=Le===!0?lt:xe(Le),Xr(be)&&(be={targets:lt,className:be}),Le&&(ft===!1||ft===Kr||(ft=!ft&&Le.parentNode&&Le.parentNode.style&&Sr(Le.parentNode).display==="flex"?!1:Tn),L.pin=Le,De=N.core.getCache(Le),De.spacer?Mt=De.pinState:(Nt&&(Nt=xe(Nt),Nt&&!Nt.nodeType&&(Nt=Nt.current||Nt.nativeElement),De.spacerIsNative=!!Nt,Nt&&(De.spacerState=li(Nt))),De.spacer=wt=Nt||Se.createElement("div"),wt.classList.add("pin-spacer"),Ke&&wt.classList.add("pin-spacer-"+Ke),De.pinState=Mt=li(Le)),H.force3D!==!1&&N.set(Le,{force3D:!0}),L.spacer=wt=De.spacer,Mr=Sr(Le),hn=Mr[ft+ht.os2],jt=N.getProperty(Le),_n=N.quickSetter(Le,ht.a,In),Jn(Le,wt,Mr),St=li(Le)),P){Wt=Fs(P)?Ya(P,yn):yn,de=ai("scroller-start",Ke,Tt,ht,Wt,0),qe=ai("scroller-end",Ke,Tt,ht,Wt,0,de),at=de["offset"+ht.op.d2];var It=xe(q(Tt,"content")||Tt);me=this.markerStart=ai("start",Ke,It,ht,Wt,at,0,_t),Ve=this.markerEnd=ai("end",Ke,It,ht,Wt,at,0,_t),_t&&(fs=N.quickSetter([me,Ve],ht.a,In)),!d&&!(D.length&&q(Tt,"fixedMarkers")===!0)&&(so(wn?Pe:Tt),N.set([de,qe],{force3D:!0}),cs=N.quickSetter(de,ht.a,In),fo=N.quickSetter(qe,ht.a,In))}if(_t){var bt=_t.vars.onUpdate,un=_t.vars.onUpdateParams;_t.eventCallback("onUpdate",function(){L.update(0,0,1),bt&&bt.apply(_t,un||[])})}if(L.previous=function(){return Pt[Pt.indexOf(L)-1]},L.next=function(){return Pt[Pt.indexOf(L)+1]},L.revert=function(nt,Xt){if(!Xt)return L.kill(!0);var Ct=nt!==!1||!L.enabled,Kt=it;Ct!==L.isReverted&&(Ct&&(Ii=Math.max(Ge(),L.scroll.rec||0),We=L.progress,wa=Y&&Y.progress()),me&&[me,Ve,de,qe].forEach(function(kr){return kr.style.display=Ct?"none":"block"}),Ct&&(it=L,L.update(Ct)),Le&&(!Wr||!L.isActive)&&(Ct?Dl(Le,wt,Mt):Jn(Le,wt,Sr(Le),pr)),Ct||L.update(Ct),it=Kt,L.isReverted=Ct)},L.refresh=function(nt,Xt,Ct,Kt){if(!((it||!L.enabled)&&!Xt)){if(Le&&nt&&Si){Ln(ye,"scrollEnd",Nu);return}!Qn&&ne&&ne(L),it=L,se.tween&&!Ct&&(se.tween.kill(),se.tween=0),Yt&&Yt.pause(),On&&Y&&Y.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var kr=pe(),nn=ke(),er=_t?_t.duration():Ci(Tt,ht),rn=Ye<=.01,ln=0,Dn=Kt||0,bn=Fs(Ct)?Ct.end:H.end,ho=H.endTrigger||lt,Fn=Fs(Ct)?Ct.start:H.start||(H.start===0||!lt?0:Le?"0 0":"0 100%"),di=L.pinnedContainer=H.pinnedContainer&&xe(H.pinnedContainer,L),Li=lt&&Math.max(0,Pt.indexOf(L))||0,hi=Li,Hn,gr,Do,el,tr,Er,ds,Zf,Ih,Vu,qi,Ys,Gu;for(P&&Fs(Ct)&&(Ys=N.getProperty(de,ht.p),Gu=N.getProperty(qe,ht.p));hi--;)Er=Pt[hi],Er.end||Er.refresh(0,1)||(it=L),ds=Er.pin,ds&&(ds===lt||ds===Le||ds===di)&&!Er.isReverted&&(Vu||(Vu=[]),Vu.unshift(Er),Er.revert(!0,!0)),Er!==Pt[hi]&&(Li--,hi--);for(Kn(Fn)&&(Fn=Fn(L)),Fn=Fu(Fn,"start",L),X=zl(Fn,lt,kr,ht,Ge(),me,de,L,nn,F,d,er,_t,L._startClamp&&"_startClamp")||(Le?-.001:0),Kn(bn)&&(bn=bn(L)),Xr(bn)&&!bn.indexOf("+=")&&(~bn.indexOf(" ")?bn=(Xr(Fn)?Fn.split(" ")[0]:"")+bn:(ln=Io(bn.substr(2),kr),bn=Xr(Fn)?Fn:(_t?N.utils.mapRange(0,_t.duration(),_t.scrollTrigger.start,_t.scrollTrigger.end,X):X)+ln,ho=lt)),bn=Fu(bn,"end",L),ve=Math.max(X,zl(bn||(ho?"100% 0":er),ho,kr,ht,Ge()+ln,Ve,qe,L,nn,F,d,er,_t,L._endClamp&&"_endClamp"))||-.001,ln=0,hi=Li;hi--;)Er=Pt[hi],ds=Er.pin,ds&&Er.start-Er._pinPush<=X&&!_t&&Er.end>0&&(Hn=Er.end-(L._startClamp?Math.max(0,Er.start):Er.start),(ds===lt&&Er.start-Er._pinPush<X||ds===di)&&isNaN(Fn)&&(ln+=Hn*(1-Er.progress)),ds===Le&&(Dn+=Hn));if(X+=ln,ve+=ln,L._startClamp&&(L._startClamp+=ln),L._endClamp&&!Qn&&(L._endClamp=ve||-.001,ve=Math.min(ve,Ci(Tt,ht))),Ye=ve-X||(X-=.01)&&.001,rn&&(We=N.utils.clamp(0,1,N.utils.normalize(X,ve,Ii))),L._pinPush=Dn,me&&ln&&(Hn={},Hn[ht.a]="+="+ln,di&&(Hn[ht.p]="-="+Ge()),N.set([me,Ve],Hn)),Le)Hn=Sr(Le),el=ht===te,Do=Ge(),gt=parseFloat(jt(ht.a))+Dn,!er&&ve>1&&(qi=(wn?Se.scrollingElement||Oe:Tt).style,qi={style:qi,value:qi["overflow"+ht.a.toUpperCase()]},wn&&Sr(Pe)["overflow"+ht.a.toUpperCase()]!=="scroll"&&(qi.style["overflow"+ht.a.toUpperCase()]="scroll")),Jn(Le,wt,Hn),St=li(Le),gr=ki(Le,!0),Zf=d&&$e(Tt,el?ie:te)(),ft&&(pr=[ft+ht.os2,Ye+Dn+In],pr.t=wt,hi=ft===Tn?Xa(Le,ht)+Ye+Dn:0,hi&&pr.push(ht.d,hi+In),Pi(pr),di&&Pt.forEach(function(B){B.pin===di&&B.vars.pinSpacing!==!1&&(B._subPinOffset=!0)}),d&&Ge(Ii)),d&&(tr={top:gr.top+(el?Do-X:Zf)+In,left:gr.left+(el?Zf:Do-X)+In,boxSizing:"border-box",position:"fixed"},tr[jo]=tr["max"+si]=Math.ceil(gr.width)+In,tr[zs]=tr["max"+Hs]=Math.ceil(gr.height)+In,tr[Kr]=tr[Kr+Ns]=tr[Kr+as]=tr[Kr+Ws]=tr[Kr+Bs]="0",tr[Tn]=Hn[Tn],tr[Tn+Ns]=Hn[Tn+Ns],tr[Tn+as]=Hn[Tn+as],tr[Tn+Ws]=Hn[Tn+Ws],tr[Tn+Bs]=Hn[Tn+Bs],yt=Fl(Mt,tr,Wr),Qn&&Ge(0)),Y?(Ih=Y._initted,Rn(1),Y.render(Y.duration(),!0,!0),hr=jt(ht.a)-gt+Ye+Dn,co=Math.abs(Ye-hr)>1,d&&co&&yt.splice(yt.length-2,2),Y.render(0,!0,!0),Ih||Y.invalidate(!0),Y.parent||Y.totalTime(Y.totalTime()),Rn(0)):hr=Ye,qi&&(qi.value?qi.style["overflow"+ht.a.toUpperCase()]=qi.value:qi.style.removeProperty("overflow-"+ht.a));else if(lt&&Ge()&&!_t)for(gr=lt.parentNode;gr&&gr!==Pe;)gr._pinOffset&&(X-=gr._pinOffset,ve-=gr._pinOffset),gr=gr.parentNode;Vu&&Vu.forEach(function(B){return B.revert(!1,!0)}),L.start=X,L.end=ve,dt=pt=Qn?Ii:Ge(),!_t&&!Qn&&(dt<Ii&&Ge(Ii),L.scroll.rec=0),L.revert(!1,!0),Ue=br(),ci&&(ue=-1,ci.restart(!0)),it=0,Y&&dr&&(Y._initted||wa)&&Y.progress()!==wa&&Y.progress(wa||0,!0).render(Y.time(),!0,!0),(rn||We!==L.progress||_t)&&(Y&&!dr&&Y.totalProgress(_t&&X<-.001&&!We?N.utils.normalize(X,ve,0):We,!0),L.progress=rn||(dt-X)/Ye===We?0:We),Le&&ft&&(wt._pinOffset=Math.round(L.progress*hr)),Yt&&Yt.invalidate(),isNaN(Ys)||(Ys-=N.getProperty(de,ht.p),Gu-=N.getProperty(qe,ht.p),ui(de,ht,Ys),ui(me,ht,Ys-(Kt||0)),ui(qe,ht,Gu),ui(Ve,ht,Gu-(Kt||0))),rn&&!Qn&&L.update(),Vt&&!Qn&&!Ae&&(Ae=!0,Vt(L),Ae=!1)}},L.getVelocity=function(){return(Ge()-pt)/(br()-st)*1e3||0},L.endAnimation=function(){ii(L.callbackAnimation),Y&&(Yt?Yt.progress(1):Y.paused()?dr||ii(Y,L.direction<0,1):ii(Y,Y.reversed()))},L.labelToScroll=function(nt){return Y&&Y.labels&&(X||L.refresh()||X)+Y.labels[nt]/Y.duration()*Ye||0},L.getTrailing=function(nt){var Xt=Pt.indexOf(L),Ct=L.direction>0?Pt.slice(0,Xt).reverse():Pt.slice(Xt+1);return(Xr(nt)?Ct.filter(function(Kt){return Kt.vars.preventOverlaps===nt}):Ct).filter(function(Kt){return L.direction>0?Kt.end<=X:Kt.start>=ve})},L.update=function(nt,Xt,Ct){if(!(_t&&!Ct&&!nt)){var Kt=Qn===!0?Ii:L.scroll(),kr=nt?0:(Kt-X)/Ye,nn=kr<0?0:kr>1?1:kr||0,er=L.progress,rn,ln,Dn,bn,ho,Fn,di,Li;if(Xt&&(pt=dt,dt=_t?Ge():Kt,ut&&(Oi=Mn,Mn=Y&&!dr?Y.totalProgress():nn)),dn&&!nn&&Le&&!it&&!Na&&Si&&X<Kt+(Kt-pt)/(br()-st)*dn&&(nn=1e-4),nn!==er&&L.enabled){if(rn=L.isActive=!!nn&&nn<1,ln=!!er&&er<1,Fn=rn!==ln,ho=Fn||!!nn!=!!er,L.direction=nn>er?1:-1,L.progress=nn,ho&&!it&&(Dn=nn&&!er?0:nn===1?1:er===1?2:3,dr&&(bn=!Fn&&_[Dn+1]!=="none"&&_[Dn+1]||_[Dn],Li=Y&&(bn==="complete"||bn==="reset"||bn in Y))),Hr&&(Fn||Li)&&(Li||Gt||!Y)&&(Kn(Hr)?Hr(L):L.getTrailing(Hr).forEach(function(Do){return Do.endAnimation()})),dr||(Yt&&!it&&!Na?(Yt._dp._time-Yt._start!==Yt._time&&Yt.render(Yt._dp._time-Yt._start),Yt.resetTo?Yt.resetTo("totalProgress",nn,Y._tTime/Y._tDur):(Yt.vars.totalProgress=nn,Yt.invalidate().restart())):Y&&Y.totalProgress(nn,!!(it&&(Ue||nt)))),Le){if(nt&&ft&&(wt.style[ft+ht.os2]=hn),!d)_n(Ds(gt+hr*nn));else if(ho){if(di=!nt&&nn>er&&ve+1>Kt&&Kt+1>=Ci(Tt,ht),Wr)if(!nt&&(rn||di)){var hi=ki(Le,!0),Hn=Kt-X;fr(Le,Pe,hi.top+(ht===te?Hn:0)+In,hi.left+(ht===te?0:Hn)+In)}else fr(Le,wt);Pi(rn||di?yt:St),co&&nn<1&&rn||_n(gt+(nn===1&&!di?hr:0))}}ut&&!se.tween&&!it&&!Na&&ci.restart(!0),be&&(Fn||Zn&&nn&&(nn<1||!$l))&&Ze(be.targets).forEach(function(Do){return Do.classList[rn||Zn?"add":"remove"](be.className)}),Te&&!dr&&!nt&&Te(L),ho&&!it?(dr&&(Li&&(bn==="complete"?Y.pause().totalProgress(1):bn==="reset"?Y.restart(!0).pause():bn==="restart"?Y.restart(!0):Y[bn]()),Te&&Te(L)),(Fn||!$l)&&(Et&&Fn&&Ll(L,Et),p[Dn]&&Ll(L,p[Dn]),Zn&&(nn===1?L.kill(!1,1):p[Dn]=0),Fn||(Dn=nn===1?1:3,p[Dn]&&Ll(L,p[Dn]))),Cr&&!rn&&Math.abs(L.getVelocity())>(Ga(Cr)?Cr:2500)&&(ii(L.callbackAnimation),Yt?Yt.progress(1):ii(Y,bn==="reverse"?1:!nn,1))):dr&&Te&&!it&&Te(L)}if(fo){var gr=_t?Kt/_t.duration()*(_t._caScrollDist||0):Kt;cs(gr+(de._isFlipped?1:0)),fo(gr)}fs&&fs(-Kt/_t.duration()*(_t._caScrollDist||0))}},L.enable=function(nt,Xt){L.enabled||(L.enabled=!0,Ln(Tt,"resize",ga),wn||Ln(Tt,"scroll",ls),ne&&Ln(ye,"refreshInit",ne),nt!==!1&&(L.progress=We=0,dt=pt=ue=Ge()),Xt!==!1&&L.refresh())},L.getTween=function(nt){return nt&&se?se.tween:Yt},L.setPositions=function(nt,Xt,Ct,Kt){if(_t){var kr=_t.scrollTrigger,nn=_t.duration(),er=kr.end-kr.start;nt=kr.start+er*nt/nn,Xt=kr.start+er*Xt/nn}L.refresh(!1,!1,{start:Dt(nt,Ct&&!!L._startClamp),end:Dt(Xt,Ct&&!!L._endClamp)},Kt),L.update()},L.adjustPinSpacing=function(nt){if(pr&&nt){var Xt=pr.indexOf(ht.d)+1;pr[Xt]=parseFloat(pr[Xt])+nt+In,pr[1]=parseFloat(pr[1])+nt+In,Pi(pr)}},L.disable=function(nt,Xt){if(L.enabled&&(nt!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Xt||Yt&&Yt.pause(),Ii=0,De&&(De.uncache=1),ne&&qn(ye,"refreshInit",ne),ci&&(ci.pause(),se.tween&&se.tween.kill()&&(se.tween=0)),!wn)){for(var Ct=Pt.length;Ct--;)if(Pt[Ct].scroller===Tt&&Pt[Ct]!==L)return;qn(Tt,"resize",ga),wn||qn(Tt,"scroll",ls)}},L.kill=function(nt,Xt){L.disable(nt,Xt),Yt&&!Xt&&Yt.kill(),Ke&&delete Ka[Ke];var Ct=Pt.indexOf(L);Ct>=0&&Pt.splice(Ct,1),Ct===et&&ya>0&&et--,Ct=0,Pt.forEach(function(Kt){return Kt.scroller===L.scroller&&(Ct=1)}),Ct||Qn||(L.scroll.rec=0),Y&&(Y.scrollTrigger=null,nt&&Y.revert({kill:!1}),Xt||Y.kill()),me&&[me,Ve,de,qe].forEach(function(Kt){return Kt.parentNode&&Kt.parentNode.removeChild(Kt)}),Ri===L&&(Ri=0),Le&&(De&&(De.uncache=1),Ct=0,Pt.forEach(function(Kt){return Kt.pin===Le&&Ct++}),Ct||(De.spacer=0)),H.onKill&&H.onKill(L)},Pt.push(L),L.enable(!1,!1),fi&&fi(L),Y&&Y.add&&!Ye){var Wn=L.update;L.update=function(){L.update=Wn,X||ve||L.refresh()},N.delayedCall(.01,L.update),Ye=.01,X=ve=0}else L.refresh();Le&&zt()},ye.register=function(H){return he||(N=H||Ha(),ua()&&window.document&&ye.enable(),he=Wa),he},ye.defaults=function(H){if(H)for(var Y in H)ao[Y]=H[Y];return ao},ye.disable=function(H,Y){Wa=0,Pt.forEach(function(Te){return Te[Y?"kill":"disable"](H)}),qn(oe,"wheel",ls),qn(Se,"scroll",ls),clearInterval(Lt),qn(Se,"touchcancel",ri),qn(Pe,"touchstart",ri),qr(qn,Se,"pointerdown,touchstart,mousedown",jl),qr(qn,Se,"pointerup,touchend,mouseup",zu),Ne.kill(),Va(qn);for(var fe=0;fe<k.length;fe+=3)da(qn,k[fe],k[fe+1]),da(qn,k[fe],k[fe+2])},ye.enable=function(){if(oe=window,Se=document,Oe=Se.documentElement,Pe=Se.body,N&&(Ze=N.utils.toArray,Me=N.utils.clamp,bi=N.core.context||ri,Rn=N.core.suppressOverwrites||ri,Ms=oe.history.scrollRestoration||"auto",Ai=oe.pageYOffset,N.core.globals("ScrollTrigger",ye),Pe)){Wa=1,Po=document.createElement("div"),Po.style.height="100vh",Po.style.position="absolute",an(),jc(),V.register(N),ye.isTouch=V.isTouch,Yi=V.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ln(oe,"wheel",ls),Xe=[oe,Se,Oe,Pe],N.matchMedia?(ye.matchMedia=function(Ke){var Et=N.matchMedia(),Vt;for(Vt in Ke)Et.add(Vt,Ke[Vt]);return Et},N.addEventListener("matchMediaInit",function(){return ma()}),N.addEventListener("matchMediaRevert",function(){return Uo()}),N.addEventListener("matchMedia",function(){Gs(0,1),uo("matchMedia")}),N.matchMedia("(orientation: portrait)",function(){return Ml(),Ml})):console.warn("Requires GSAP 3.11.0 or later"),Ml(),Ln(Se,"scroll",ls);var H=Pe.style,Y=H.borderTopStyle,fe=N.core.Animation.prototype,Te,be;for(fe.revert||Object.defineProperty(fe,"revert",{value:function(){return this.time(-.01,!0)}}),H.borderTopStyle="solid",Te=ki(Pe),te.m=Math.round(Te.top+te.sc())||0,ie.m=Math.round(Te.left+ie.sc())||0,Y?H.borderTopStyle=Y:H.removeProperty("border-top-style"),Lt=setInterval(pa,250),N.delayedCall(.5,function(){return Na=0}),Ln(Se,"touchcancel",ri),Ln(Pe,"touchstart",ri),qr(Ln,Se,"pointerdown,touchstart,mousedown",jl),qr(Ln,Se,"pointerup,touchend,mouseup",zu),Nn=N.utils.checkPrefix("transform"),Ja.push(Nn),he=br(),Ne=N.delayedCall(.2,Gs).pause(),Or=[Se,"visibilitychange",function(){var Ke=oe.innerWidth,Et=oe.innerHeight;Se.hidden?(tt=Ke,Jt=Et):(tt!==Ke||Jt!==Et)&&ga()},Se,"DOMContentLoaded",Gs,oe,"load",Gs,oe,"resize",ga],Va(Ln),Pt.forEach(function(Ke){return Ke.enable(0,1)}),be=0;be<k.length;be+=3)da(qn,k[be],k[be+1]),da(qn,k[be],k[be+2])}},ye.config=function(H){"limitCallbacks"in H&&($l=!!H.limitCallbacks);var Y=H.syncInterval;Y&&clearInterval(Lt)||(Lt=Y)&&setInterval(pa,Y),"ignoreMobileResize"in H&&(Rl=ye.isTouch===1&&H.ignoreMobileResize),"autoRefreshEvents"in H&&(Va(qn)||Va(Ln,H.autoRefreshEvents||"none"),Al=(H.autoRefreshEvents+"").indexOf("resize")===-1)},ye.scrollerProxy=function(H,Y){var fe=xe(H),Te=k.indexOf(fe),be=Qe(fe);~Te&&k.splice(Te,be?6:2),Y&&(be?D.unshift(oe,Y,Pe,Y,Oe,Y):D.unshift(fe,Y))},ye.clearMatchMedia=function(H){Pt.forEach(function(Y){return Y._ctx&&Y._ctx.query===H&&Y._ctx.kill(!0,!0)})},ye.isInViewport=function(H,Y,fe){var Te=(Xr(H)?xe(H):H).getBoundingClientRect(),be=Te[fe?jo:zs]*Y||0;return fe?Te.right-be>0&&Te.left+be<oe.innerWidth:Te.bottom-be>0&&Te.top+be<oe.innerHeight},ye.positionInViewport=function(H,Y,fe){Xr(H)&&(H=xe(H));var Te=H.getBoundingClientRect(),be=Te[fe?jo:zs],Ke=Y==null?be/2:Y in Xi?Xi[Y]*be:~Y.indexOf("%")?parseFloat(Y)*be/100:parseFloat(Y)||0;return fe?(Te.left+Ke)/oe.innerWidth:(Te.top+Ke)/oe.innerHeight},ye.killAll=function(H){if(Pt.slice(0).forEach(function(fe){return fe.vars.id!=="ScrollSmoother"&&fe.kill()}),H!==!0){var Y=Lo.killAll||[];Lo={},Y.forEach(function(fe){return fe()})}},ye}();mt.version="3.12.2",mt.saveStyles=function(ye){return ye?Ze(ye).forEach(function(z){if(z&&z.style){var Z=Lr.indexOf(z);Z>=0&&Lr.splice(Z,5),Lr.push(z,z.style.cssText,z.getBBox&&z.getAttribute("transform"),N.core.getCache(z),bi())}}):Lr},mt.revert=function(ye,z){return ma(!ye,z)},mt.create=function(ye,z){return new mt(ye,z)},mt.refresh=function(ye){return ye?ga():(he||mt.register())&&Gs(!0)},mt.update=function(ye){return++k.cache&&Ki(ye===!0?2:0)},mt.clearScrollMemory=va,mt.maxScroll=function(ye,z){return Ci(ye,z?ie:te)},mt.getScrollFunc=function(ye,z){return $e(xe(ye),z?ie:te)},mt.getById=function(ye){return Ka[ye]},mt.getAll=function(){return Pt.filter(function(ye){return ye.vars.id!=="ScrollSmoother"})},mt.isScrolling=function(){return!!Si},mt.snapDirectional=Ot,mt.addEventListener=function(ye,z){var Z=Lo[ye]||(Lo[ye]=[]);~Z.indexOf(z)||Z.push(z)},mt.removeEventListener=function(ye,z){var Z=Lo[ye],H=Z&&Z.indexOf(z);H>=0&&Z.splice(H,1)},mt.batch=function(ye,z){var Z=[],H={},Y=z.interval||.016,fe=z.batchMax||1e9,Te=function(Et,Vt){var Gt=[],lt=[],Le=N.delayedCall(Y,function(){Vt(Gt,lt),Gt=[],lt=[]}).pause();return function(ft){Gt.length||Le.restart(!0),Gt.push(ft.trigger),lt.push(ft),fe<=Gt.length&&Le.progress(1)}},be;for(be in z)H[be]=be.substr(0,2)==="on"&&Kn(z[be])&&be!=="onRefreshInit"?Te(be,z[be]):z[be];return Kn(fe)&&(fe=fe(),Ln(mt,"refresh",function(){return fe=z.batchMax()})),Ze(ye).forEach(function(Ke){var Et={};for(be in H)Et[be]=H[be];Et.trigger=Ke,Z.push(mt.create(Et))}),Z};var Hu=function(z,Z,H,Y){return Z>Y?z(Y):Z<0&&z(0),H>Y?(Y-Z)/(H-Z):H<0?Z/(Z-H):1},Ur=function ye(z,Z){Z===!0?z.style.removeProperty("touch-action"):z.style.touchAction=Z===!0?"auto":Z?"pan-"+Z+(V.isTouch?" pinch-zoom":""):"none",z===Oe&&ye(Pe,Z)},Nl={auto:1,scroll:1},Wl=function(z){var Z=z.event,H=z.target,Y=z.axis,fe=(Z.changedTouches?Z.changedTouches[0]:Z).target,Te=fe._gsap||N.core.getCache(fe),be=br(),Ke;if(!Te._isScrollT||be-Te._isScrollT>2e3){for(;fe&&fe!==Pe&&(fe.scrollHeight<=fe.clientHeight&&fe.scrollWidth<=fe.clientWidth||!(Nl[(Ke=Sr(fe)).overflowY]||Nl[Ke.overflowX]));)fe=fe.parentNode;Te._isScroll=fe&&fe!==H&&!Qe(fe)&&(Nl[(Ke=Sr(fe)).overflowY]||Nl[Ke.overflowX]),Te._isScrollT=be}(Te._isScroll||Y==="x")&&(Z.stopPropagation(),Z._gsapAllow=!0)},Mo=function(z,Z,H,Y){return V.create({target:z,capture:!0,debounce:!1,lockAxis:!0,type:Z,onWheel:Y=Y&&Wl,onPress:Y,onDrag:Y,onScroll:Y,onEnable:function(){return H&&Ln(Se,V.eventTypes[0],xn,!1,!0)},onDisable:function(){return qn(Se,V.eventTypes[0],xn,!0)}})},Hl=/(input|label|select|textarea)/i,Za,xn=function(z){var Z=Hl.test(z.target.tagName);(Z||Za)&&(z._gsapAllow=!0,Za=Z)},us=function(z){Fs(z)||(z={}),z.preventDefault=z.isNormalizer=z.allowClicks=!0,z.type||(z.type="wheel,touch"),z.debounce=!!z.debounce,z.id=z.id||"normalizer";var Z=z,H=Z.normalizeScrollX,Y=Z.momentum,fe=Z.allowNestedScroll,Te=Z.onRelease,be,Ke,Et=xe(z.target)||Oe,Vt=N.core.globals().ScrollSmoother,Gt=Vt&&Vt.get(),lt=Yi&&(z.content&&xe(z.content)||Gt&&z.content!==!1&&!Gt.smooth()&&Gt.content()),Le=$e(Et,te),ft=$e(Et,ie),On=1,dn=(V.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,Un=0,An=Kn(Y)?function(){return Y(be)}:function(){return Y||2.8},Zn,ut,Wr=Mo(Et,z.type,!0,fe),Nt=function(){return ut=!1},_t=ri,Cr=ri,Hr=function(){Ke=Ci(Et,te),Cr=Me(Yi?1:0,Ke),H&&(_t=Me(0,Ci(Et,ie))),Zn=Ti},ht=function(){lt._gsap.y=Ds(parseFloat(lt._gsap.y)+Le.offset)+"px",lt.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(lt._gsap.y)+", 0, 1)",Le.offset=Le.cacheID=0},dr=function(){if(ut){requestAnimationFrame(Nt);var P=Ds(be.deltaY/2),F=Cr(Le.v-P);if(lt&&F!==Le.v+Le.offset){Le.offset=F-Le.v;var L=Ds((parseFloat(lt&&lt._gsap.y)||0)-Le.offset);lt.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",lt._gsap.y=L+"px",Le.cacheID=k.cache,Ki()}return!0}Le.offset&&ht(),ut=!0},Tt,$i,wn,d,p=function(){Hr(),Tt.isActive()&&Tt.vars.scrollY>Ke&&(Le()>Ke?Tt.progress(1)&&Le(Ke):Tt.resetTo("scrollY",Ke))};return lt&&N.set(lt,{y:"+=0"}),z.ignoreCheck=function(_){return Yi&&_.type==="touchmove"&&dr()||On>1.05&&_.type!=="touchstart"||be.isGesturing||_.touches&&_.touches.length>1},z.onPress=function(){ut=!1;var _=On;On=Ds((oe.visualViewport&&oe.visualViewport.scale||1)/dn),Tt.pause(),_!==On&&Ur(Et,On>1.01?!0:H?!1:"x"),$i=ft(),wn=Le(),Hr(),Zn=Ti},z.onRelease=z.onGestureStart=function(_,P){if(Le.offset&&ht(),!P)d.restart(!0);else{k.cache++;var F=An(),L,ne;H&&(L=ft(),ne=L+F*.05*-_.velocityX/.227,F*=Hu(ft,L,ne,Ci(Et,ie)),Tt.vars.scrollX=_t(ne)),L=Le(),ne=L+F*.05*-_.velocityY/.227,F*=Hu(Le,L,ne,Ci(Et,te)),Tt.vars.scrollY=Cr(ne),Tt.invalidate().duration(F).play(.01),(Yi&&Tt.vars.scrollY>=Ke||L>=Ke-1)&&N.to({},{onUpdate:p,duration:F})}Te&&Te(_)},z.onWheel=function(){Tt._ts&&Tt.pause(),br()-Un>1e3&&(Zn=0,Un=br())},z.onChange=function(_,P,F,L,ne){if(Ti!==Zn&&Hr(),P&&H&&ft(_t(L[2]===P?$i+(_.startX-_.x):ft()+P-L[1])),F){Le.offset&&ht();var pe=ne[2]===F,ke=pe?wn+_.startY-_.y:Le()+F-ne[1],ue=Cr(ke);pe&&ke!==ue&&(wn+=ue-ke),Le(ue)}(F||P)&&Ki()},z.onEnable=function(){Ur(Et,H?!1:"x"),mt.addEventListener("refresh",p),Ln(oe,"resize",p),Le.smooth&&(Le.target.style.scrollBehavior="auto",Le.smooth=ft.smooth=!1),Wr.enable()},z.onDisable=function(){Ur(Et,!0),qn(oe,"resize",p),mt.removeEventListener("refresh",p),Wr.kill()},z.lockAxis=z.lockAxis!==!1,be=new V(z),be.iOS=Yi,Yi&&!Le()&&Le(1),Yi&&N.ticker.add(ri),d=be._dc,Tt=N.to(be,{ease:"power4",paused:!0,scrollX:H?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bl(Le,Le(),function(){return Tt.pause()})},onUpdate:Ki,onComplete:d.vars.onComplete}),be};mt.sort=function(ye){return Pt.sort(ye||function(z,Z){return(z.vars.refreshPriority||0)*-1e6+z.start-(Z.start+(Z.vars.refreshPriority||0)*-1e6)})},mt.observe=function(ye){return new V(ye)},mt.normalizeScroll=function(ye){if(typeof ye>"u")return jr;if(ye===!0&&jr)return jr.enable();if(ye===!1)return jr&&jr.kill();var z=ye instanceof V?ye:us(ye);return jr&&jr.target===z.target&&jr.kill(),Qe(z.target)&&(jr=z),z},mt.core={_getVelocityProp:Ee,_inputObserver:Mo,_scrollers:k,_proxies:D,bridge:{ss:function(){Si||uo("scrollStart"),Si=br()},ref:function(){return it}}},Ha()&&N.registerPlugin(mt),n.ScrollTrigger=mt,n.default=mt,typeof window>"u"||window!==n?Object.defineProperty(n,"__esModule",{value:!0}):delete window.default})})(cy,cy.exports);var QU=cy.exports;function ra(){return ra=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ra.apply(this,arguments)}function Pg(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function R0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function iu(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JU(e,t){if(e){if(typeof e=="string")return q2(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q2(e,t)}}function q2(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ZU(e,t){var n;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=JU(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return n=e[Symbol.iterator](),n.next.bind(n)}var to;(function(e){e.play="play",e.restart="restart",e.reverse="reverse",e.restartReverse="restartReverse",e.stop="stop",e.stopEnd="stopEnd",e.pause="pause",e.resume="resume"})(to||(to={}));String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.indexOf(e,t)===t});var qx=function(t,n,r){r===void 0&&(r=null),r&&t&&t!==n&&(t===to.play?r.play():t===to.restart?r.restart(!0):t===to.reverse?r.reverse():t===to.restartReverse?r.reverse(0):t===to.stop?r.pause(0):t===to.stopEnd?(r.reverse(0),r.pause()):t===to.pause?r.pause():t===to.resume&&r.resume())},QT=function(t,n){var r=n.playState;r&&qx(r,to.play,t)},JT=function(t){return t&&(t===to.stop||t===to.stopEnd||t===to.pause)},ZT=function(t,n,r){var i,o=n.duration,a=o===void 0?1:o,u=n.from,c=n.to,f=n.stagger,v=n.playState,b=n.onCompleteAll,x=n.onCompleteAllParams,g=n.onCompleteAllScope,S=n.onStartAll,w=R0(n,["children","wrapper","duration","from","to","stagger","progress","totalProgress","playState","disabled","onlyInvalidateTo","onCompleteAll","onCompleteAllParams","onCompleteAllScope","onStartAll","position","target"]),j,$=JT(v),y=(i=r?.getPlugins(r?.plugins,t))!==null&&i!==void 0?i:{};return u&&c?j=$a.fromTo(t,u,ra({stagger:f,duration:a,paused:$},c,w,y)):c?j=$a.to(t,ra({stagger:f,duration:a,paused:$},c,w,y)):j=$a.from(t,ra({stagger:f,duration:a,paused:$},u,w,y)),Array.isArray(j)&&(j.forEach(function(E){E.paused(!1)}),j=$a.timeline(ra({},w,{tweens:j,smoothChildTiming:!0,onComplete:b,onCompleteParams:x,onCompleteScope:g,onStart:S}))),j},eM=function(t,n){return JSON.stringify(t)===JSON.stringify(n)};function tM(e,t){t===void 0&&(t=0);var n=Object.keys(e??{}).find(function(f){return f.startsWith("__reactInternalInstance$")||f.startsWith("__reactFiber$")}),r=n&&e[n];if(!r)return null;if(r._currentElement){for(var i=r._currentElement._owner,o=0;o<t;o++)i=i._currentElement._owner;return i._instance}if(r.stateNode)return r.stateNode;for(var a=function(v){for(var b=v.return;typeof b.type=="string";)b=b.return;return b},u=a(r),c=0;c<t;c++)u=a(u);return u.stateNode}var nM=function(t,n){return t.props.innerRef?{innerRef:function(i){n(i);var o=t.props.innerRef;typeof o=="function"?o(i):o&&(o.current=i)}}:{ref:function(i){n(i);var o=t.ref;typeof o=="function"?o(i):o&&(o.current=i)}}},Q2=function(t,n,r){var i=tM(t);i?r(i):t&&Object.keys(t).forEach(function(o){var a=t[o];typeof a=="object"&&a.current&&(Array.isArray(a.current)?a.current.forEach(function(u){n(o,u)}):n(o,a.current))})},rM=function(t,n,r){return t.props.innerRef?{innerRef:function(o){Q2(o,n,r);var a=t.props.innerRef;typeof a=="function"?a(o):a&&(a.current=o)}}:{ref:function(o){Q2(o,n,r);var a=t.ref;typeof a=="function"?a(o):a&&(a.current=o)}}},As=function(t,n){return t===null||typeof t>"u"?n:t},P0=function(t,n,r){n.progress!==void 0&&n.progress!==r?.progress&&t.progress(n.progress),n.totalProgress!==void 0&&n.totalProgress!==r?.totalProgress&&t.totalProgress(n.totalProgress),t.duration!==void 0&&n.duration&&n.duration!==r?.duration&&t.duration(n.duration)},Qx=vt.createContext({registerConsumer:function(){},getPlugins:function(){},plugins:{}}),Jx=function(e){Pg(t,e);function t(r){var i;return i=e.call(this,r)||this,i.consumers=[],i.plugins={},i.registerConsumer=i.registerConsumer.bind(iu(i)),i.getContextValue=i.getContextValue.bind(iu(i)),i.getPlugin=i.getPlugin.bind(iu(i)),i.getPlugins=i.getPlugins.bind(iu(i)),i.renderWithProvider=i.renderWithProvider.bind(iu(i)),i}var n=t.prototype;return n.registerConsumer=function(i){this.consumers.push(i)},n.getContextValue=function(i){return i===void 0&&(i={}),{registerConsumer:this.registerConsumer,plugins:i,getPlugins:this.getPlugins}},n.getPlugin=function(i,o){return{}},n.getPlugins=function(i,o){var a=this;return Object.keys(i??{}).reduce(function(u,c){if(Object.prototype.hasOwnProperty.call(i,c)){var f;return ra({},u,(f={},f[c]=a.getPlugin(i[c],o),f))}return u},{})},n.renderWithProvider=function(i,o){return vt.createElement(Qx.Provider,{value:this.getContextValue(o)},i)},t}(vt.Component);Jx.contextType=Qx;var du,xv,wv,iM=function(){return du||typeof window<"u"&&(du=window.gsap)&&du.registerPlugin&&du};function Zx(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function oM(e){return 2*Math.PI*parseFloat(As(e.getAttribute("r"),"1")||"0")}function sM(e){return parseFloat(As(e.getAttribute("width"),"1")||"0")*2+parseFloat(As(e.getAttribute("height"),"1")||"0")*2}function aM(e){return Zx({x:parseFloat(As(e.getAttribute("x1"),"1")||"0"),y:parseFloat(As(e.getAttribute("y1"),"1")||"0")},{x:parseFloat(As(e.getAttribute("x2"),"1")||"0"),y:parseFloat(As(e.getAttribute("y2"),"1")||"0")})}function e5(e){for(var t=e.points,n=0,r=void 0,i=0;i<t.numberOfItems;i++){var o=t.getItem(i);r&&(n+=Zx(r,o)),r=o}return n}function lM(e){var t=e.points;return e5(e)+Zx(t.getItem(t.numberOfItems-1),t.getItem(0))}function uM(e){if(!e.hasAttribute("d"))return e.getTotalLength();var t=e.getAttribute("d"),n=t?t.replace(/m/gi,"M"):null;if(!n)return e.getTotalLength();var r=n.split("M").filter(function(o){return o!==""}).map(function(o){return"M"+o});if(r.length===1)return e.getTotalLength();var i=0;return r.forEach(function(o){var a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",o),i=Math.max(i,a.getTotalLength())}),i}function cM(e){if(e.getTotalLength)return uM(e);switch(e.tagName.toLowerCase()){case"circle":return oM(e);case"rect":return sM(e);case"line":return aM(e);case"polyline":return e5(e);case"polygon":return lM(e);default:return 0}}var t5={version:"2.0.0",name:"svgDraw",register:function(t,n,r){du=t,xv=du.utils.interpolate,wv=du.getProperty},init:function(t,n,r,i,o){var a=cM(t),u=n,c=0;Array.isArray(n)&&(u=n[0],n.length>=2&&(c=n[1]*-1));var f=this;f.target=t,f.strokeDashoffset=xv(wv(t,"stroke-dashoffset"),a*c),f.strokeDasharray=xv(wv(t,"stroke-dasharray"),[u*a,a])},render:function(t,n){n.target.setAttribute("stroke-dashoffset",n.strokeDashoffset(t)),n.target.setAttribute("stroke-dasharray",n.strokeDasharray(t))}};iM()&&du.registerPlugin(t5);var fc,J2,Z2,fM=function(){return fc||typeof window<"u"&&(fc=window.gsap)&&fc.registerPlugin&&fc},n5={version:"1.0.0",name:"count",register:function(t,n,r){fc=t,J2=fc.utils.interpolate,Z2=function(o){return parseInt(o.toString(),10)}},init:function(t,n,r,i,o){var a=n,u=Z2;typeof n=="object"&&(a=As(n.value,0),n.format&&(u=n.format));var c=parseFloat(t.innerText),f=this;f.target=t,f.count=J2(c,parseFloat(a.toString())),f.format=u},render:function(t,n){n.target.innerText=n.format(n.count(t))}};fM()&&fc.registerPlugin(n5);$a.registerPlugin(t5);$a.registerPlugin(n5);var Tc=function(e){Pg(t,e);function t(r){var i;return i=e.call(this,r)||this,i.targets=[],i.addTarget=i.addTarget.bind(iu(i)),i}var n=t.prototype;return n.componentDidMount=function(){this.createTween(),P0(this.tween,this.props),QT(this.tween,this.props),this.context.registerConsumer(this)},n.componentWillUnmount=function(){this.tween&&this.tween.kill()},n.getSnapshotBeforeUpdate=function(){return this.targets=[],null},n.componentDidUpdate=function(i){var o=this.props,a=o.children,u=o.to,c=o.playState,f=o.disabled,v=o.onlyInvalidateTo,b=R0(o,["children","wrapper","duration","from","to","stagger","progress","totalProgress","playState","disabled","onlyInvalidateTo","onCompleteAll","onCompleteAllParams","onCompleteAllScope","onStartAll","position","target"]);if(vt.Children.count(i.children)!==vt.Children.count(a)&&this.createTween(),!f){if(P0(this.tween,this.props,i),!eM(u,i.to)){if(this.tween.getChildren){var g=0;this.tween.getChildren(!1,!0,!1).forEach(function(S){S.vars=ra({},u,b,{delay:g}),S.invalidate()})}else if(this.tween.vars=ra({},u,b),v){var x=this.tween.progress();this.tween.progress(0).invalidate().progress(x)}else this.tween.invalidate();this.tween.paused()||this.tween.restart()}qx(c,i.playState,this.tween)}},n.createTween=function(){this.tween&&this.tween.kill(),this.props.children?this.tween=ZT(this.targets,this.props,this.context):this.tween=function(){}},n.getGSAP=function(){return this.tween},n.setGSAP=function(i){this.tween=i},n.addTarget=function(i){i!==null&&this.targets.push(i)},n.getTargets=function(){return this.targets},n.render=function(){var i=this,o=this.props,a=o.children,u=o.wrapper,c=vt.createElement(we.Fragment,null,vt.Children.map(a,function(f){return vt.cloneElement(f,nM(f,i.addTarget))}));return u?vt.cloneElement(u,[],c):c},t}(vt.Component);Tc.displayName="Tween";Tc.contextType=Qx;var ph=function(e){Pg(t,e);function t(r){var i;return i=e.call(this,r)||this,i.targets=new Map,i.addTarget=i.addTarget.bind(iu(i)),i.setTarget=i.setTarget.bind(iu(i)),i}var n=t.prototype;return n.componentDidMount=function(){this.createTimeline(),P0(this.timeline,this.props),QT(this.timeline,this.props),this.context.registerConsumer(this)},n.componentWillUnmount=function(){this.timeline.kill()},n.getSnapshotBeforeUpdate=function(){return this.targets=new Map,null},n.componentDidUpdate=function(i){var o=this.props,a=o.children,u=o.playState;vt.Children.count(i.children)!==vt.Children.count(a)&&this.createTimeline(),P0(this.timeline,this.props,i),qx(u,i.playState,this.timeline)},n.createTimeline=function(){var i,o,a,u=this,c=this.props,f=c.playState,v=c.labels,b=R0(c,["children","target","duration","progress","totalProgress","playState","labels","position"]);this.timeline&&this.timeline.kill();var x=(i=(o=this.context)===null||o===void 0?void 0:o.getPlugins((a=this.context)===null||a===void 0?void 0:a.plugins,this.targets))!==null&&i!==void 0?i:{};this.timeline=$a.timeline(ra({smoothChildTiming:!0,paused:JT(f)},b,x)),v&&v.forEach(function(g){u.timeline.addLabel(g.label,g.position)}),this.consumers.forEach(function(g){if(g.tween&&!g.props.children){var S=g.props,w=S.position,j=S.target,$=S.stagger,y=R0(S,["position","target","stagger"]),E=null;j!==null&&typeof j<"u"&&(E=u.targets.get(j));var I=ZT(As(E,Array.from(u.targets.values())),ra({stagger:$},y));u.timeline.add(I,As(w,"+=0")),g.setGSAP(I)}else{var k=g.props.position;u.timeline.add(g.getGSAP(),As(k,"+=0"))}})},n.getGSAP=function(){return this.timeline},n.addTarget=function(i){i!==null&&this.targets.set(this.targets.size,i)},n.setTarget=function(i,o){if(o!==null)if(this.targets.has(i)){var a=this.targets.get(i);Array.isArray(a)?this.targets.set(i,[].concat(a,[o])):this.targets.set(i,[a,o])}else this.targets.set(i,o)},n.setTargets=function(i){this.targets=i},n.getTargets=function(){return this.targets},n.cloneElement=function(i){return vt.cloneElement(i,rM(i,this.setTarget,this.addTarget))},n.renderTarget=function(i){var o=this;return i?W1.isForwardRef(i)?this.cloneElement(i):vt.createElement(we.Fragment,null,vt.Children.map(i,function(a){return W1.isFragment(a)?vt.Children.map(a.props.children,function(u){return o.cloneElement(u)}):o.cloneElement(a)})):null},n.render=function(){var i=this.props,o=i.target,a=i.children,u=i.wrapper,c=this.renderTarget(o),f=vt.createElement(we.Fragment,null,c,a);return u&&(f=vt.cloneElement(u,[],f)),this.renderWithProvider(f)},t}(Jx);ph.displayName="Timeline";ph.defaultProps={playState:to.play};var sc;(function(e){e[e.unknown=0]="unknown",e[e.entered=1]="entered",e[e.exited=2]="exited"})(sc||(sc={}));var $g=function(e){Pg(t,e);function t(){var r;return r=e.apply(this,arguments)||this,r.triggerRef=null,r.observer=null,r.intersectionObserverCallback=function(i){for(var o=r.props,a=o.repeat,u=o.threshold,c=sc.unknown,f=ZU(i),v;!(v=f()).done;){var b=v.value;if(b.isIntersecting&&b.intersectionRatio>=u){r.timeline.play(),c=sc.entered;break}else if(!b.isIntersecting){c=sc.exited;break}}!a&&c===sc.entered?r.killIntersectionObserver():a&&c===sc.exited&&r.timeline.pause(0)},r}var n=t.prototype;return n.init=function(){this.createTimeline(),this.createIntersectionObserver()},n.kill=function(){this.killTimeline(),this.killIntersectionObserver()},n.componentDidMount=function(){this.init()},n.componentWillUnmount=function(){this.kill()},n.componentDidUpdate=function(i){var o=this.props,a=o.children,u=o.trigger;vt.Children.count(i.children)!==vt.Children.count(a)&&this.init(),i.trigger!==u&&this.init()},n.createTimeline=function(){var i=this;this.killTimeline(),this.timeline=$a.timeline({smoothChildTiming:!0,paused:!0}),this.consumers.forEach(function(o){var a=o.props.position;i.timeline.add(o.getGSAP().play(),As(a,0))})},n.killTimeline=function(){this.timeline&&this.timeline.kill()},n.createIntersectionObserver=function(){var i=this,o=this.props,a=o.root,u=o.rootMargin,c=o.threshold,f={root:a,rootMargin:u,threshold:[0,c]};this.observer=new IntersectionObserver(this.intersectionObserverCallback,f),this.triggerRef?this.observer&&this.observer.observe(this.triggerRef):this.consumers.forEach(function(v){v.getTargets().forEach(function(b){i.observer&&i.observer.observe(b)})})},n.killIntersectionObserver=function(){this.unobserveAll(),this.observer=null},n.unobserveAll=function(){var i=this;this.observer&&(this.triggerRef?this.observer&&this.observer.unobserve(this.triggerRef):this.consumers.forEach(function(o){o.getTargets().forEach(function(a){i.observer&&i.observer.unobserve(a)})}))},n.getGSAP=function(){return this.timeline},n.render=function(){var i=this,o=this.props,a=o.children,u=o.trigger,c=u?vt.createElement(u.type,Object.assign({},u.props,{ref:function(v){return i.triggerRef=v}}),a):a;return this.renderWithProvider(c)},t}(Jx);$g.displayName="Reveal";$g.defaultProps={trigger:null,repeat:!1,root:null,rootMargin:"0px",threshold:.66};$a.registerPlugin(QU.ScrollTrigger);const dM={up:{y:"50%"},down:{y:"-50%"},left:{x:"-50%"},right:{x:"50%"},zoom:{scale:0},none:{y:"0%"}},Sn=({children:e,debugMode:t={active:!1,name:""},direction:n="up",delay:r,duration:i=1.5,repeat:o,stagger:a=.5,isEnabled:u=!0,keepActive:c=!1,isTweenOnly:f=!1,transformConfig:v,opacity:b=0,easeConfig:x,style:g,containerStyle:S})=>{const[w,j]=we.useState(),[$,y]=we.useState(u),[E,I]=we.useState(""),[k,D]=we.useState();we.useEffect(function(){let G="";if(v){const{x:q,y:K,scale:ee,rotate:ae}=v;q!==void 0&&K!==void 0?G+=`translate(${q}, ${K}) `:q!==void 0&&K===void 0?G+=`translateX(${q}) `:K!==void 0&&q===void 0&&(G+=`translateY(${K}) `),ee!==void 0&&(G+=`scale(${ee}) `),ae!==void 0&&(G+=`rotate(${ae}deg) `)}else{const q=dM[n];if(typeof q=="object"){const{x:K,y:ee,scale:ae,rotate:le}=q;K!==void 0&&ee!==void 0?G+=`translate(${K}, ${ee}) `:K!==void 0&&ee===void 0?G+=`translateX(${K}) `:ee!==void 0&&K===void 0&&(G+=`translateY(${ee}) `),ae!==void 0&&(G+=`scale(${ae}) `),le!==void 0&&(G+=`rotate(${le}deg) `)}}I(G)},[n,E,v]),we.useEffect(function(){let G="";x?x.function==="none"?G="none":x.function==="steps"?G=`${x.function}(${x.amount?x.amount:12})`:x.function==="power1"||x.function==="power2"||x.function==="power3"||x.function==="power4"||x.function==="circ"||x.function==="bounce"?G=`${x.function}.${x.direction}`:x.function==="elastic"?G=`${x.function}.${x.direction}(${x.amount}, ${x.amount/2})`:(x.function==="back"||x.function==="expo"||x.function==="sine")&&(G=`${x.function}.${x.direction}(${x.amount})`):G="back.out(0.5)",D(G)},[n,x]),we.useEffect(()=>{t.active&&console.log(t.name,{isActive:$})},[t.active,t.name,$]),we.useEffect(()=>{j($&&E!==""?m.jsx(Tc,{position:0,onComplete:()=>y(!!(o||c)),delay:r,stagger:a,duration:i,ease:k,from:{css:{opacity:b,transform:E}},to:{css:{opacity:1,transform:"translate(0%, 0%) scale(1) rotate(0deg)"}},children:m.jsx("div",{style:{height:"100%"},children:e})}):e)},[e,r,i,k,$,c,b,o,a,E]);const R=`${n}-${r}-${i}-${o}-${a}-${f}-${b}`;return f?w:m.jsx("div",{style:S,children:m.jsx($g,{repeat:o,trigger:m.jsx("div",{style:g}),children:w})},R)},hM=Q.div`
  ${({blurColor:e,position:t="absolute",height:n="100%",flexCenter:r,blurAngle:i=0,blurStart:o=0,blurEnd:a=100})=>xt`
    position: ${t};
    display: ${r?"flex":"inline-block"};
    width: 100%;
    height: ${n||"auto"};
    align-items: center;
    justify-content: center;

    // Only apply the gradient on specific media conditions
    ${e&&`
      @media (max-width: 1024px) and (min-height: 1300px),
             (max-width: 920px) {
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%; 
          height: 101%; 
          background: linear-gradient(${i}deg, ${e} ${o}%, transparent ${a}%);
        }
      }
    `}
  `}
`,pM=Q(Ut)`
  ${({objectFit:e,responsiveObjectFit:t,objectPosition:n,responsiveObjectPosition:r,imageHeight:i,flexCenter:o})=>`
    object-fit: ${e};
    object-position: ${n};
    @media (max-width: 1024px) {
      object-fit: ${t||e};
      object-position: ${r||n};
    }
    width: 100%;
    height: ${i||"100%"};
    ${o?`@media (min-width: 768px) {
      max-width: 35vw;
    }`:"max-width: 100vw;"}

  `}
`,gM=Q.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: 100%;
  ${({isHotspotBackground:e})=>`
  ${e?"position: relative;":"position: absolute;"}
  `}
`,Ps=({containerHeight:e="100%",containerWidth:t="100%",containerRight:n,containerStyle:r,blurColor:i,objectFit:o="cover",responsiveObjectFit:a,objectPosition:u="center",responsiveObjectPosition:c,position:f,children:v,animation:b,blurAngle:x,blurStart:g,blurEnd:S,className:w,isTweenOnly:j=!1,imageHeight:$,height:y,flexCenter:E,imageWidth:I,style:k,src:D,srcTablet:R,srcMobile:O,altText:G="",isHotspotBackground:q=!1,animationDelay:K=.5})=>m.jsx(gM,{isHotspotBackground:q,id:"outer-cont",children:m.jsx(Sn,{isEnabled:!!b,direction:b||void 0,delay:K,duration:2,isTweenOnly:j,containerStyle:{height:"100%"},style:{height:"100%"},children:m.jsx("div",{id:"outer-div",style:{height:e,width:t,marginLeft:n?"auto":0,display:E?"flex":"block",alignItems:E?"center":"unset",justifyContent:E?"center":"unset",position:"relative",...r},children:m.jsxs(hM,{id:"blur-cont",blurColor:i,position:f,blurAngle:x,blurStart:g,blurEnd:S,height:y,flexCenter:E,children:[m.jsx(pM,{flexCenter:E,srcMobile:O,srcTablet:R,src:D,alt:G,className:w,objectFit:o,responsiveObjectFit:a,objectPosition:u,responsiveObjectPosition:c,imageHeight:$,imageWidth:I,style:k}),v]})})})});var eS=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ew=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},tw=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),mM=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},r5=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nw=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},rw=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},gh=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e};/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */var i5={};i5.addEventListener=function(){};var iw=function(e,t){var n=function(){a.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};n.version="2.0.7",e.addEventListener("mousewheel",function(){});var r="data-scrollmagic-pin-spacer";n.Controller=function(u){var c="ScrollMagic.Controller",f="FORWARD",v="REVERSE",b="PAUSED",x=i.defaults,g=this,S=a.extend({},x,u),w=[],j=!1,$=0,y=b,E=!0,I=0,k=!0,D,R,O=function(){for(var xe in S)x.hasOwnProperty(xe)||(ce(2,'WARNING: Unknown option "'+xe+'"'),delete S[xe]);if(S.container=a.get.elements(S.container)[0],!S.container)throw ce(1,"ERROR creating object "+c+": No valid scroll container supplied"),c+" init failed.";E=S.container===e||S.container===t.body||!t.body.contains(S.container),E&&(S.container=e),I=K(),S.container.addEventListener("resize",Re),S.container.addEventListener("scroll",Re);var $e=parseInt(S.refreshInterval,10);S.refreshInterval=a.type.Number($e)?$e:x.refreshInterval,G(),ce(3,"added new "+c+" controller (v"+n.version+")")},G=function(){S.refreshInterval>0&&(R=e.setTimeout(Ce,S.refreshInterval))},q=function(){return S.vertical?a.get.scrollTop(S.container):a.get.scrollLeft(S.container)},K=function(){return S.vertical?a.get.height(S.container):a.get.width(S.container)},ee=this._setScrollPos=function(te){S.vertical?E?e.scrollTo(a.get.scrollLeft(),te):S.container.scrollTop=te:E?e.scrollTo(te,a.get.scrollTop()):S.container.scrollLeft=te},ae=function(){if(k&&j){var xe=a.type.Array(j)?j:w.slice(0);j=!1;var $e=$;$=g.scrollPos();var Ee=$-$e;Ee!==0&&(y=Ee>0?f:v),y===v&&xe.reverse(),xe.forEach(function(_e,M){ce(3,"updating Scene "+(M+1)+"/"+xe.length+" ("+w.length+" total)"),_e.update(!0)}),xe.length===0&&S.loglevel>=3&&ce(3,"updating 0 Scenes (nothing added to controller)")}},le=function(){D=a.rAF(ae)},Re=function(xe){ce(3,"event fired causing an update:",xe.type),xe.type=="resize"&&(I=K(),y=b),j!==!0&&(j=!0,le())},Ce=function(){if(!E&&I!=K()){var xe;try{xe=new Event("resize",{bubbles:!1,cancelable:!1})}catch{xe=t.createEvent("Event"),xe.initEvent("resize",!1,!1)}S.container.dispatchEvent(xe)}w.forEach(function($e,Ee){$e.refresh()}),G()},ce=this._log=function(te,xe){S.loglevel>=te&&(Array.prototype.splice.call(arguments,1,0,"("+c+") ->"),a.log.apply(e,arguments))};this._options=S;var ie=function(xe){if(xe.length<=1)return xe;var $e=xe.slice(0);return $e.sort(function(Ee,_e){return Ee.scrollOffset()>_e.scrollOffset()?1:-1}),$e};return this.addScene=function(te){if(a.type.Array(te))te.forEach(function($e,Ee){g.addScene($e)});else if(te instanceof n.Scene){if(te.controller()!==g)te.addTo(g);else if(w.indexOf(te)<0){w.push(te),w=ie(w),te.on("shift.controller_sort",function(){w=ie(w)});for(var xe in S.globalSceneOptions)te[xe]&&te[xe].call(te,S.globalSceneOptions[xe]);ce(3,"adding Scene (now "+w.length+" total)")}}else ce(1,"ERROR: invalid argument supplied for '.addScene()'");return g},this.removeScene=function(te){if(a.type.Array(te))te.forEach(function($e,Ee){g.removeScene($e)});else{var xe=w.indexOf(te);xe>-1&&(te.off("shift.controller_sort"),w.splice(xe,1),ce(3,"removing Scene (now "+w.length+" left)"),te.remove())}return g},this.updateScene=function(te,xe){return a.type.Array(te)?te.forEach(function($e,Ee){g.updateScene($e,xe)}):xe?te.update(!0):j!==!0&&te instanceof n.Scene&&(j=j||[],j.indexOf(te)==-1&&j.push(te),j=ie(j),le()),g},this.update=function(te){return Re({type:"resize"}),te&&ae(),g},this.scrollTo=function(te,xe){if(a.type.Number(te))ee.call(S.container,te,xe);else if(te instanceof n.Scene)te.controller()===g?g.scrollTo(te.scrollOffset(),xe):ce(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",te);else if(a.type.Function(te))ee=te;else{var $e=a.get.elements(te)[0];if($e){for(;$e.parentNode.hasAttribute(r);)$e=$e.parentNode;var Ee=S.vertical?"top":"left",_e=a.get.offset(S.container),M=a.get.offset($e);E||(_e[Ee]-=g.scrollPos()),g.scrollTo(M[Ee]-_e[Ee],xe)}else ce(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",te)}return g},this.scrollPos=function(te){if(arguments.length)a.type.Function(te)?q=te:ce(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");else return q.call(g);return g},this.info=function(te){var xe={size:I,vertical:S.vertical,scrollPos:$,scrollDirection:y,container:S.container,isDocument:E};if(arguments.length){if(xe[te]!==void 0)return xe[te];ce(1,'ERROR: option "'+te+'" is not available');return}else return xe},this.loglevel=function(te){if(arguments.length)S.loglevel!=te&&(S.loglevel=te);else return S.loglevel;return g},this.enabled=function(te){if(arguments.length)k!=te&&(k=!!te,g.updateScene(w,!0));else return k;return g},this.destroy=function(te){e.clearTimeout(R);for(var xe=w.length;xe--;)w[xe].destroy(te);return S.container.removeEventListener("resize",Re),S.container.removeEventListener("scroll",Re),a.cAF(D),ce(3,"destroyed "+c+" (reset: "+(te?"true":"false")+")"),null},O(),g};var i={defaults:{container:e,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};n.Controller.addOption=function(u,c){i.defaults[u]=c},n.Controller.extend=function(u){var c=this;n.Controller=function(){return c.apply(this,arguments),this.$super=a.extend({},this),u.apply(this,arguments)||this},a.extend(n.Controller,c),n.Controller.prototype=c.prototype,n.Controller.prototype.constructor=n.Controller},n.Scene=function(u){var c="ScrollMagic.Scene",f="BEFORE",v="DURING",b="AFTER",x=o.defaults,g=this,S=a.extend({},x,u),w=f,j=0,$={start:0,end:0},y=0,E=!0,I,k,D=function(){for(var V in S)x.hasOwnProperty(V)||(O(2,'WARNING: Unknown option "'+V+'"'),delete S[V]);for(var N in x)Ce(N);le()},R={};this.on=function(T,V){return a.type.Function(V)?(T=T.trim().split(" "),T.forEach(function(N){var he=N.split("."),oe=he[0],Se=he[1];oe!="*"&&(R[oe]||(R[oe]=[]),R[oe].push({namespace:Se||"",callback:V}))})):O(1,"ERROR when calling '.on()': Supplied callback for '"+T+"' is not a valid function!"),g},this.off=function(T,V){return T?(T=T.trim().split(" "),T.forEach(function(N,he){var oe=N.split("."),Se=oe[0],Oe=oe[1]||"",Pe=Se==="*"?Object.keys(R):[Se];Pe.forEach(function(Xe){for(var Ne=R[Xe]||[],Ze=Ne.length;Ze--;){var Me=Ne[Ze];Me&&(Oe===Me.namespace||Oe==="*")&&(!V||V==Me.callback)&&Ne.splice(Ze,1)}Ne.length||delete R[Xe]})}),g):(O(1,"ERROR: Invalid event name supplied."),g)},this.trigger=function(T,V){if(T){var N=T.trim().split("."),he=N[0],oe=N[1],Se=R[he];O(3,"event fired:",he,V?"->":"",V||""),Se&&Se.forEach(function(Oe,Pe){(!oe||oe===Oe.namespace)&&Oe.callback.call(g,new n.Event(he,Oe.namespace,g,V))})}else O(1,"ERROR: Invalid event name supplied.");return g},g.on("change.internal",function(T){T.what!=="loglevel"&&T.what!=="tweenChanges"&&(T.what==="triggerElement"?K():T.what==="reverse"&&g.update())}).on("shift.internal",function(T){G(),g.update()});var O=this._log=function(T,V){S.loglevel>=T&&(Array.prototype.splice.call(arguments,1,0,"("+c+") ->"),a.log.apply(e,arguments))};this.addTo=function(T){return T instanceof n.Controller?k!=T&&(k&&k.removeScene(g),k=T,le(),q(!0),K(!0),G(),k.info("container").addEventListener("resize",ee),T.addScene(g),g.trigger("add",{controller:k}),O(3,"added "+c+" to controller"),g.update()):O(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),g},this.enabled=function(T){if(arguments.length)E!=T&&(E=!!T,g.update(!0));else return E;return g},this.remove=function(){if(k){k.info("container").removeEventListener("resize",ee);var T=k;k=void 0,T.removeScene(g),g.trigger("remove"),O(3,"removed "+c+" from controller")}return g},this.destroy=function(T){return g.trigger("destroy",{reset:T}),g.remove(),g.off("*.*"),O(3,"destroyed "+c+" (reset: "+(T?"true":"false")+")"),null},this.update=function(T){if(k)if(T)if(k.enabled()&&E){var V=k.info("scrollPos"),N;S.duration>0?N=(V-$.start)/($.end-$.start):N=V>=$.start?1:0,g.trigger("update",{startPos:$.start,endPos:$.end,scrollPos:V}),g.progress(N)}else ce&&w===v&&te(!0);else k.updateScene(g,!1);return g},this.refresh=function(){return q(),K(),g},this.progress=function(T){if(arguments.length){var V=!1,N=w,he=k?k.info("scrollDirection"):"PAUSED",oe=S.reverse||T>=j;if(S.duration===0?(V=j!=T,j=T<1&&oe?0:1,w=j===0?f:v):T<0&&w!==f&&oe?(j=0,w=f,V=!0):T>=0&&T<1&&oe?(j=T,w=v,V=!0):T>=1&&w!==b?(j=1,w=b,V=!0):w===v&&!oe&&te(),V){var Se={progress:j,state:w,scrollDirection:he},Oe=w!=N,Pe=function(Ne){g.trigger(Ne,Se)};Oe&&N!==v&&(Pe("enter"),Pe(N===f?"start":"end")),Pe("progress"),Oe&&w!==v&&(Pe(w===f?"start":"end"),Pe("leave"))}return g}else return j};var G=function(){$={start:y+S.offset},k&&S.triggerElement&&($.start-=k.info("size")*S.triggerHook),$.end=$.start+S.duration},q=function(V){if(I){var N="duration";Re(N,I.call(g))&&!V&&(g.trigger("change",{what:N,newval:S[N]}),g.trigger("shift",{reason:N}))}},K=function(V){var N=0,he=S.triggerElement;if(k&&(he||y>0)){if(he)if(he.parentNode){for(var oe=k.info(),Se=a.get.offset(oe.container),Oe=oe.vertical?"top":"left";he.parentNode.hasAttribute(r);)he=he.parentNode;var Pe=a.get.offset(he);oe.isDocument||(Se[Oe]-=k.scrollPos()),N=Pe[Oe]-Se[Oe]}else O(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),g.triggerElement(void 0);var Xe=N!=y;y=N,Xe&&!V&&g.trigger("shift",{reason:"triggerElementPosition"})}},ee=function(V){S.triggerHook>0&&g.trigger("shift",{reason:"containerResize"})},ae=a.extend(o.validate,{duration:function(V){if(a.type.String(V)&&V.match(/^(\.|\d)*\d+%$/)){var N=parseFloat(V)/100;V=function(){return k?k.info("size")*N:0}}if(a.type.Function(V)){I=V;try{V=parseFloat(I.call(g))}catch{V=-1}}if(V=parseFloat(V),!a.type.Number(V)||V<0)throw I?(I=void 0,['Invalid return value of supplied function for option "duration":',V]):['Invalid value for option "duration":',V];return V}}),le=function(V){V=arguments.length?[V]:Object.keys(ae),V.forEach(function(N,he){var oe;if(ae[N])try{oe=ae[N](S[N])}catch(Oe){oe=x[N];var Se=a.type.String(Oe)?[Oe]:Oe;a.type.Array(Se)?(Se[0]="ERROR: "+Se[0],Se.unshift(1),O.apply(this,Se)):O(1,"ERROR: Problem executing validation callback for option '"+N+"':",Oe.message)}finally{S[N]=oe}})},Re=function(V,N){var he=!1,oe=S[V];return S[V]!=N&&(S[V]=N,le(V),he=oe!=S[V]),he},Ce=function(V){g[V]||(g[V]=function(N){if(arguments.length)V==="duration"&&(I=void 0),Re(V,N)&&(g.trigger("change",{what:V,newval:S[V]}),o.shifts.indexOf(V)>-1&&g.trigger("shift",{reason:V}));else return S[V];return g})};this.controller=function(){return k},this.state=function(){return w},this.scrollOffset=function(){return $.start},this.triggerPosition=function(){var T=S.offset;return k&&(S.triggerElement?T+=y:T+=k.info("size")*g.triggerHook()),T};var ce,ie;g.on("shift.internal",function(T){var V=T.reason==="duration";(w===b&&V||w===v&&S.duration===0)&&te(),V&&xe()}).on("progress.internal",function(T){te()}).on("add.internal",function(T){xe()}).on("destroy.internal",function(T){g.removePin(T.reset)});var te=function(V){if(ce&&k){var N=k.info(),he=ie.spacer.firstChild;if(!V&&w===v){a.css(he,"position")!="fixed"&&(a.css(he,{position:"fixed"}),xe());var oe=a.get.offset(ie.spacer,!0),Se=S.reverse||S.duration===0?N.scrollPos-$.start:Math.round(j*S.duration*10)/10;oe[N.vertical?"top":"left"]+=Se,a.css(ie.spacer.firstChild,{top:oe.top,left:oe.left})}else{var Oe={position:ie.inFlow?"relative":"absolute",top:0,left:0},Pe=a.css(he,"position")!=Oe.position;ie.pushFollowers?S.duration>0&&(w===b&&parseFloat(a.css(ie.spacer,"padding-top"))===0||w===f&&parseFloat(a.css(ie.spacer,"padding-bottom"))===0)&&(Pe=!0):Oe[N.vertical?"top":"left"]=S.duration*j,a.css(he,Oe),Pe&&xe()}}},xe=function(){if(ce&&k&&ie.inFlow){var V=w===v,N=k.info("vertical"),he=ie.spacer.firstChild,oe=a.isMarginCollapseType(a.css(ie.spacer,"display")),Se={};ie.relSize.width||ie.relSize.autoFullWidth?V?a.css(ce,{width:a.get.width(ie.spacer)}):a.css(ce,{width:"100%"}):(Se["min-width"]=a.get.width(N?ce:he,!0,!0),Se.width=V?Se["min-width"]:"auto"),ie.relSize.height?V?a.css(ce,{height:a.get.height(ie.spacer)-(ie.pushFollowers?S.duration:0)}):a.css(ce,{height:"100%"}):(Se["min-height"]=a.get.height(N?he:ce,!0,!oe),Se.height=V?Se["min-height"]:"auto"),ie.pushFollowers&&(Se["padding"+(N?"Top":"Left")]=S.duration*j,Se["padding"+(N?"Bottom":"Right")]=S.duration*(1-j)),a.css(ie.spacer,Se)}},$e=function(){k&&ce&&w===v&&!k.info("isDocument")&&te()},Ee=function(){k&&ce&&w===v&&((ie.relSize.width||ie.relSize.autoFullWidth)&&a.get.width(e)!=a.get.width(ie.spacer.parentNode)||ie.relSize.height&&a.get.height(e)!=a.get.height(ie.spacer.parentNode))&&xe()},_e=function(V){k&&ce&&w===v&&!k.info("isDocument")&&(V.preventDefault(),k._setScrollPos(k.info("scrollPos")-((V.wheelDelta||V[k.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||-V.detail*30)))};this.setPin=function(T,V){var N={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},he=V&&V.hasOwnProperty("pushFollowers");if(V=a.extend({},N,V),T=a.get.elements(T)[0],T){if(a.css(T,"position")==="fixed")return O(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),g}else return O(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),g;if(ce){if(ce===T)return g;g.removePin()}ce=T;var oe=ce.parentNode.style.display,Se=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];ce.parentNode.style.display="none";var Oe=a.css(ce,"position")!="absolute",Pe=a.css(ce,Se.concat(["display"])),Xe=a.css(ce,["width","height"]);ce.parentNode.style.display=oe,!Oe&&V.pushFollowers&&(O(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),V.pushFollowers=!1),e.setTimeout(function(){ce&&S.duration===0&&he&&V.pushFollowers&&O(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var Ne=ce.parentNode.insertBefore(t.createElement("div"),ce),Ze=a.extend(Pe,{position:Oe?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(Oe||a.extend(Ze,a.css(ce,["width","height"])),a.css(Ne,Ze),Ne.setAttribute(r,""),a.addClass(Ne,V.spacerClass),ie={spacer:Ne,relSize:{width:Xe.width.slice(-1)==="%",height:Xe.height.slice(-1)==="%",autoFullWidth:Xe.width==="auto"&&Oe&&a.isMarginCollapseType(Pe.display)},pushFollowers:V.pushFollowers,inFlow:Oe},!ce.___origStyle){ce.___origStyle={};var Me=ce.style,st=Se.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);st.forEach(function(Lt){ce.___origStyle[Lt]=Me[Lt]||""})}return ie.relSize.width&&a.css(Ne,{width:Xe.width}),ie.relSize.height&&a.css(Ne,{height:Xe.height}),Ne.appendChild(ce),a.css(ce,{position:Oe?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(ie.relSize.width||ie.relSize.autoFullWidth)&&a.css(ce,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),e.addEventListener("scroll",$e),e.addEventListener("resize",$e),e.addEventListener("resize",Ee),ce.addEventListener("mousewheel",_e),ce.addEventListener("DOMMouseScroll",_e),O(3,"added pin"),te(),g},this.removePin=function(T){if(ce){if(w===v&&te(!0),T||!k){var V=ie.spacer.firstChild;if(V.hasAttribute(r)){var N=ie.spacer.style,he=["margin","marginLeft","marginRight","marginTop","marginBottom"],oe={};he.forEach(function(Se){oe[Se]=N[Se]||""}),a.css(V,oe)}ie.spacer.parentNode.insertBefore(V,ie.spacer),ie.spacer.parentNode.removeChild(ie.spacer),ce.parentNode.hasAttribute(r)||(a.css(ce,ce.___origStyle),delete ce.___origStyle)}e.removeEventListener("scroll",$e),e.removeEventListener("resize",$e),e.removeEventListener("resize",Ee),ce.removeEventListener("mousewheel",_e),ce.removeEventListener("DOMMouseScroll",_e),ce=void 0,O(3,"removed pin (reset: "+(T?"true":"false")+")")}return g};var M,A=[];return g.on("destroy.internal",function(T){g.removeClassToggle(T.reset)}),this.setClassToggle=function(T,V){var N=a.get.elements(T);return N.length===0||!a.type.String(V)?(O(1,"ERROR calling method 'setClassToggle()': Invalid "+(N.length===0?"element":"classes")+" supplied."),g):(A.length>0&&g.removeClassToggle(),M=V,A=N,g.on("enter.internal_class leave.internal_class",function(he){var oe=he.type==="enter"?a.addClass:a.removeClass;A.forEach(function(Se,Oe){oe(Se,M)})}),g)},this.removeClassToggle=function(T){return T&&A.forEach(function(V,N){a.removeClass(V,M)}),g.off("start.internal_class end.internal_class"),M=void 0,A=[],g},D(),g};var o={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(c){if(c=parseFloat(c),!a.type.Number(c))throw['Invalid value for option "offset":',c];return c},triggerElement:function(c){if(c=c||void 0,c){var f=a.get.elements(c)[0];if(f&&f.parentNode)c=f;else throw['Element defined in option "triggerElement" was not found:',c]}return c},triggerHook:function(c){var f={onCenter:.5,onEnter:1,onLeave:0};if(a.type.Number(c))c=Math.max(0,Math.min(parseFloat(c),1));else if(c in f)c=f[c];else throw['Invalid value for option "triggerHook": ',c];return c},reverse:function(c){return!!c},loglevel:function(c){if(c=parseInt(c),!a.type.Number(c)||c<0||c>3)throw['Invalid value for option "loglevel":',c];return c}},shifts:["duration","offset","triggerHook"]};n.Scene.addOption=function(u,c,f,v){u in o.defaults?n._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+u+"', because it already exists."):(o.defaults[u]=c,o.validate[u]=f,v&&o.shifts.push(u))},n.Scene.extend=function(u){var c=this;n.Scene=function(){return c.apply(this,arguments),this.$super=a.extend({},this),u.apply(this,arguments)||this},a.extend(n.Scene,c),n.Scene.prototype=c.prototype,n.Scene.prototype.constructor=n.Scene},n.Event=function(u,c,f,v){v=v||{};for(var b in v)this[b]=v[b];return this.type=u,this.target=this.currentTarget=f,this.namespace=c||"",this.timeStamp=this.timestamp=Date.now(),this};var a=n._util=function(u){var c={},f,v=function(O){return parseFloat(O)||0},b=function(O){return O.currentStyle?O.currentStyle:u.getComputedStyle(O)},x=function(O,G,q,K){if(G=G===t?u:G,G===u)K=!1;else if(!k.DomElement(G))return 0;O=O.charAt(0).toUpperCase()+O.substr(1).toLowerCase();var ee=(q?G["offset"+O]||G["outer"+O]:G["client"+O]||G["inner"+O])||0;if(q&&K){var ae=b(G);ee+=O==="Height"?v(ae.marginTop)+v(ae.marginBottom):v(ae.marginLeft)+v(ae.marginRight)}return ee},g=function(O){return O.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(G){return G[1].toUpperCase()})};c.extend=function(R){for(R=R||{},f=1;f<arguments.length;f++)if(arguments[f])for(var O in arguments[f])arguments[f].hasOwnProperty(O)&&(R[O]=arguments[f][O]);return R},c.isMarginCollapseType=function(R){return["block","flex","list-item","table","-webkit-box"].indexOf(R)>-1};var S=0,w=["ms","moz","webkit","o"],j=u.requestAnimationFrame,$=u.cancelAnimationFrame;for(f=0;!j&&f<w.length;++f)j=u[w[f]+"RequestAnimationFrame"],$=u[w[f]+"CancelAnimationFrame"]||u[w[f]+"CancelRequestAnimationFrame"];j||(j=function(O){var G=new Date().getTime(),q=Math.max(0,16-(G-S)),K=u.setTimeout(function(){O(G+q)},q);return S=G+q,K}),$||($=function(O){u.clearTimeout(O)}),c.rAF=j.bind(u),c.cAF=$.bind(u);var y=["error","warn","log"],E=u.console||{};for(E.log=E.log||function(){},f=0;f<y.length;f++){var I=y[f];E[I]||(E[I]=E.log)}c.log=function(R){(R>y.length||R<=0)&&(R=y.length);var O=new Date,G=("0"+O.getHours()).slice(-2)+":"+("0"+O.getMinutes()).slice(-2)+":"+("0"+O.getSeconds()).slice(-2)+":"+("00"+O.getMilliseconds()).slice(-3),q=y[R-1],K=Array.prototype.splice.call(arguments,1),ee=Function.prototype.bind.call(E[q],E);K.unshift(G),ee.apply(E,K)};var k=c.type=function(R){return Object.prototype.toString.call(R).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};k.String=function(R){return k(R)==="string"},k.Function=function(R){return k(R)==="function"},k.Array=function(R){return Array.isArray(R)},k.Number=function(R){return!k.Array(R)&&R-parseFloat(R)+1>=0},k.DomElement=function(R){return(typeof HTMLElement>"u"?"undefined":eS(HTMLElement))==="object"||typeof HTMLElement=="function"?R instanceof HTMLElement||R instanceof SVGElement:R&&(typeof R>"u"?"undefined":eS(R))==="object"&&R!==null&&R.nodeType===1&&typeof R.nodeName=="string"};var D=c.get={};return D.elements=function(R){var O=[];if(k.String(R))try{R=t.querySelectorAll(R)}catch{return O}if(k(R)==="nodelist"||k.Array(R)||R instanceof NodeList)for(var G=0,q=O.length=R.length;G<q;G++){var K=R[G];O[G]=k.DomElement(K)?K:D.elements(K)}else(k.DomElement(R)||R===t||R===u)&&(O=[R]);return O},D.scrollTop=function(R){return R&&typeof R.scrollTop=="number"?R.scrollTop:u.pageYOffset||0},D.scrollLeft=function(R){return R&&typeof R.scrollLeft=="number"?R.scrollLeft:u.pageXOffset||0},D.width=function(R,O,G){return x("width",R,O,G)},D.height=function(R,O,G){return x("height",R,O,G)},D.offset=function(R,O){var G={top:0,left:0};if(R&&R.getBoundingClientRect){var q=R.getBoundingClientRect();G.top=q.top,G.left=q.left,O||(G.top+=D.scrollTop(),G.left+=D.scrollLeft())}return G},c.addClass=function(R,O){O&&(R.classList?R.classList.add(O):R.className+=" "+O)},c.removeClass=function(R,O){O&&(R.classList?R.classList.remove(O):R.className=R.className.replace(new RegExp("(^|\\b)"+O.split(" ").join("|")+"(\\b|$)","gi")," "))},c.css=function(R,O){if(k.String(O))return b(R)[g(O)];if(k.Array(O)){var G={},q=b(R);return O.forEach(function(ae,le){G[ae]=q[g(ae)]}),G}else for(var K in O){var ee=O[K];ee==parseFloat(ee)&&(ee+="px"),R.style[g(K)]=ee}},c}(e||{});return n}(typeof window>"u"?i5:window,typeof document>"u"?{}:document),o5=vt.createContext(null),vM=function(e){nw(t,e);function t(){var n,r,i,o;ew(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return o=(r=(i=gh(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(u))),i),i.state={controller:null},r),gh(i,o)}return tw(t,[{key:"componentDidMount",value:function(){var r=this.props;r.children;var i=rw(r,["children"]);this.setState({controller:new iw.Controller(i)})}},{key:"componentWillUnmount",value:function(){this.controller=null}},{key:"render",value:function(){var r=this.props.children,i=this.state.controller;return i?vt.createElement(o5.Provider,{value:i},r):r}}]),t}(vt.Component);/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file Debug Extension for ScrollMagic.
 */function yM(e){var t="debug.addIndicators";if(typeof n>"u"){var n={};n.addEventListener=function(){}}var r=n.console||{},i=Function.prototype.bind.call(r.error||r.log||function(){},r);e||i("("+t+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");var o="0.85em",a="9999",u=15,c=e._util,f=0;e.Scene.extend(function(){var x=this,g;x.addIndicators=function(S){if(!g){var w={name:"",indent:0,parent:void 0,colorStart:"green",colorEnd:"red",colorTrigger:"blue"};S=c.extend({},w,S),f++,g=new v(x,S),x.on("add.plugin_addIndicators",g.add),x.on("remove.plugin_addIndicators",g.remove),x.on("destroy.plugin_addIndicators",x.removeIndicators),x.controller()&&g.add()}return x},x.removeIndicators=function(){return g&&(g.remove(),this.off("*.plugin_addIndicators"),g=void 0),x}}),e.Controller.addOption("addIndicators",!1),e.Controller.extend(function(){var x=this,g=x.info(),S=g.container,w=g.isDocument,j=g.vertical,$={groups:[]},y=function(){x._log&&(Array.prototype.splice.call(arguments,1,0,"("+t+")","->"),x._log.apply(this,arguments))};x._indicators&&y(2,"WARNING: Scene already has a property '_indicators', which will be overwritten by plugin."),this._indicators=$;var E=function(){$.updateBoundsPositions()},I=function(){$.updateTriggerGroupPositions()};return S.addEventListener("resize",I),w||(n.addEventListener("resize",I),n.addEventListener("scroll",I)),S.addEventListener("resize",E),S.addEventListener("scroll",E),this._indicators.updateBoundsPositions=function(k){for(var D=k?[c.extend({},k.triggerGroup,{members:[k]})]:$.groups,R=D.length,O={},G=j?"left":"top",q=j?"width":"height",K=j?c.get.scrollLeft(S)+c.get.width(S)-u:c.get.scrollTop(S)+c.get.height(S)-u,ee,ae,le;R--;)for(le=D[R],ee=le.members.length,ae=c.get[q](le.element.firstChild);ee--;)O[G]=K-ae,c.css(le.members[ee].bounds,O)},this._indicators.updateTriggerGroupPositions=function(k){for(var D=k?[k]:$.groups,R=D.length,O=w?document.body:S,G=w?{top:0,left:0}:c.get.offset(O,!0),q=j?c.get.width(S)-u:c.get.height(S)-u,K=j?"width":"height",ee=j?"Y":"X",ae,le,Re,Ce,ce;R--;)ae=D[R],le=ae.element,Re=ae.triggerHook*x.info("size"),Ce=c.get[K](le.firstChild.firstChild),ce=Re>Ce?"translate"+ee+"(-100%)":"",c.css(le,{top:G.top+(j?Re:q-ae.members[0].options.indent),left:G.left+(j?q-ae.members[0].options.indent:Re)}),c.css(le.firstChild.firstChild,{"-ms-transform":ce,"-webkit-transform":ce,transform:ce})},this._indicators.updateTriggerGroupLabel=function(k){var D="trigger"+(k.members.length>1?"":" "+k.members[0].options.name),R=k.element.firstChild.firstChild,O=R.textContent!==D;O&&(R.textContent=D,j&&$.updateBoundsPositions())},this.addScene=function(k){this._options.addIndicators&&k instanceof e.Scene&&k.controller()===x&&k.addIndicators(),this.$super.addScene.apply(this,arguments)},this.destroy=function(){S.removeEventListener("resize",I),w||(n.removeEventListener("resize",I),n.removeEventListener("scroll",I)),S.removeEventListener("resize",E),S.removeEventListener("scroll",E),this.$super.destroy.apply(this,arguments)},x});var v=function(g,S){var w=this,j=b.bounds(),$=b.start(S.colorStart),y=b.end(S.colorEnd),E=S.parent&&c.get.elements(S.parent)[0],I,k,D=function(){g._log&&(Array.prototype.splice.call(arguments,1,0,"("+t+")","->"),g._log.apply(this,arguments))};S.name=S.name||f,$.firstChild.textContent+=" "+S.name,y.textContent+=" "+S.name,j.appendChild($),j.appendChild(y),w.options=S,w.bounds=j,w.triggerGroup=void 0,this.add=function(){k=g.controller(),I=k.info("vertical");var Re=k.info("isDocument");E||(E=Re?document.body:k.info("container")),!Re&&c.css(E,"position")==="static"&&c.css(E,{position:"relative"}),g.on("change.plugin_addIndicators",O),g.on("shift.plugin_addIndicators",R),le(),K(),setTimeout(function(){k._indicators.updateBoundsPositions(w)},0),D(3,"added indicators")},this.remove=function(){if(w.triggerGroup){if(g.off("change.plugin_addIndicators",O),g.off("shift.plugin_addIndicators",R),w.triggerGroup.members.length>1){var Re=w.triggerGroup;Re.members.splice(Re.members.indexOf(w),1),k._indicators.updateTriggerGroupLabel(Re),k._indicators.updateTriggerGroupPositions(Re),w.triggerGroup=void 0}else ae();q(),D(3,"removed indicators")}};var R=function(){K()},O=function(Ce){Ce.what==="triggerHook"&&le()},G=function(){var Ce=k.info("vertical");c.css($.firstChild,{"border-bottom-width":Ce?1:0,"border-right-width":Ce?0:1,bottom:Ce?-1:S.indent,right:Ce?S.indent:-1,padding:Ce?"0 8px":"2px 4px"}),c.css(y,{"border-top-width":Ce?1:0,"border-left-width":Ce?0:1,top:Ce?"100%":"",right:Ce?S.indent:"",bottom:Ce?"":S.indent,left:Ce?"":"100%",padding:Ce?"0 8px":"2px 4px"}),E.appendChild(j)},q=function(){j.parentNode.removeChild(j)},K=function(){j.parentNode!==E&&G();var Ce={};Ce[I?"top":"left"]=g.triggerPosition(),Ce[I?"height":"width"]=g.duration(),c.css(j,Ce),c.css(y,{display:g.duration()>0?"":"none"})},ee=function(){var Ce=b.trigger(S.colorTrigger),ce={};ce[I?"right":"bottom"]=0,ce[I?"border-top-width":"border-left-width"]=1,c.css(Ce.firstChild,ce),c.css(Ce.firstChild.firstChild,{padding:I?"0 8px 3px 8px":"3px 4px"}),document.body.appendChild(Ce);var ie={triggerHook:g.triggerHook(),element:Ce,members:[w]};k._indicators.groups.push(ie),w.triggerGroup=ie,k._indicators.updateTriggerGroupLabel(ie),k._indicators.updateTriggerGroupPositions(ie)},ae=function(){k._indicators.groups.splice(k._indicators.groups.indexOf(w.triggerGroup),1),w.triggerGroup.element.parentNode.removeChild(w.triggerGroup.element),w.triggerGroup=void 0},le=function(){var Ce=g.triggerHook(),ce=1e-4;if(!(w.triggerGroup&&Math.abs(w.triggerGroup.triggerHook-Ce)<ce)){for(var ie=k._indicators.groups,te,xe=ie.length;xe--;)if(te=ie[xe],Math.abs(te.triggerHook-Ce)<ce){w.triggerGroup&&(w.triggerGroup.members.length===1?ae():(w.triggerGroup.members.splice(w.triggerGroup.members.indexOf(w),1),k._indicators.updateTriggerGroupLabel(w.triggerGroup),k._indicators.updateTriggerGroupPositions(w.triggerGroup))),te.members.push(w),w.triggerGroup=te,k._indicators.updateTriggerGroupLabel(te);return}if(w.triggerGroup)if(w.triggerGroup.members.length===1){w.triggerGroup.triggerHook=Ce,k._indicators.updateTriggerGroupPositions(w.triggerGroup);return}else w.triggerGroup.members.splice(w.triggerGroup.members.indexOf(w),1),k._indicators.updateTriggerGroupLabel(w.triggerGroup),k._indicators.updateTriggerGroupPositions(w.triggerGroup),w.triggerGroup=void 0;ee()}}},b={start:function(g){var S=document.createElement("div");S.textContent="start",c.css(S,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:g,"border-color":g});var w=document.createElement("div");return c.css(w,{position:"absolute",overflow:"visible",width:0,height:0}),w.appendChild(S),w},end:function(g){var S=document.createElement("div");return S.textContent="end",c.css(S,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:g,"border-color":g}),S},bounds:function(){var g=document.createElement("div");return c.css(g,{position:"absolute",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),g.style.zIndex=a,g},trigger:function(g){var S=document.createElement("div");S.textContent="trigger",c.css(S,{position:"relative"});var w=document.createElement("div");c.css(w,{position:"absolute",overflow:"visible","border-width":0,"border-style":"solid",color:g,"border-color":g}),w.appendChild(S);var j=document.createElement("div");return c.css(j,{position:"fixed",overflow:"visible","white-space":"nowrap","pointer-events":"none","font-size":o}),j.style.zIndex=a,j.appendChild(w),j}}}yM(iw);var xM=function(t){return t.type&&t.type.$$typeof&&t.type.$$typeof.toString()==="Symbol(react.forward_ref)"?"ref":t.type&&t.type.styledComponentId?"innerRef":"ref"},s5=function(t){return!!(vt.Children.count(t)===1&&t.type&&(t.type.displayName==="Tween"||t.type.displayName==="Timeline"))},wM=function(t,n,r){if(s5(t)){var i=r5({},t.props,{totalProgress:n,paused:!0});return vt.createElement("div",null,vt.createElement(t.type,i))}return t},a5=function(t,n,r){return t&&typeof t=="function"?t(n,r):t},l5=function(t,n,r){return t=wM(t,n),t=a5(t,n,r),vt.Children.only(t)},_M=function(t){return typeof t=="string"||t instanceof String},bM=function(e){nw(t,e);function t(){var n,r,i,o;ew(this,t);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return o=(r=(i=gh(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(u))),i),i.state={event:"init",progress:0},r),gh(i,o)}return tw(t,[{key:"componentDidMount",value:function(){var r=this.props;r.children;var i=r.controller,o=r.classToggle,a=r.pin,u=r.pinSettings,c=r.indicators,f=r.enabled,v=rw(r,["children","controller","classToggle","pin","pinSettings","indicators","enabled"]),b=this.ref;v.triggerElement=v.triggerElement===null?null:v.triggerElement||b,this.scene=new iw.Scene(v),this.initEventHandlers(),o&&this.setClassToggle(this.scene,b,o),(a||u)&&this.setPin(this.scene,b,a,u),c&&this.scene.addIndicators({name:" "}),f!==void 0&&this.scene.enabled(f),this.scene.addTo(i)}},{key:"componentDidUpdate",value:function(r){var i=this.props,o=i.duration,a=i.offset,u=i.triggerElement,c=i.triggerHook,f=i.reverse,v=i.enabled;o!==void 0&&o!==r.duration&&this.scene.duration(o),a!==void 0&&a!==r.offset&&this.scene.offset(a),u!==void 0&&r.triggerElement,c!==void 0&&c!==r.triggerHook&&this.scene.triggerHook(c),f!==void 0&&f!==r.reverse&&this.scene.reverse(f),v!==void 0&&v!==r.enabled&&this.scene.enabled(v)}},{key:"componentWillUnmount",value:function(){this.scene.destroy()}},{key:"setClassToggle",value:function(r,i,o){Array.isArray(o)&&o.length===2?r.setClassToggle(o[0],o[1]):r.setClassToggle(i,o)}},{key:"setPin",value:function(r,i,o,a){i=_M(o)?o:i,r.setPin(i,a)}},{key:"initEventHandlers",value:function(){var r=this,i=this.props,o=i.children,a=i.progressEvents,u=a===void 0?!0:a;typeof o!="function"&&!s5(a5(o,0,"init"))||(this.scene.on("start end enter leave",function(c){r.setState({event:c})}),u&&this.scene.on("progress",function(c){r.setState({progress:c.progress})}))}},{key:"render",value:function(){var r=this,i=this.props.children,o=this.state,a=o.progress,u=o.event,c=l5(i,a,u);return vt.cloneElement(c,mM({},xM(c),function(f){return r.ref=f}))}}]),t}(vt.PureComponent),u5=function(e){nw(t,e);function t(){return ew(this,t),gh(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return tw(t,[{key:"render",value:function(){if(!this.props.controller){var r=this.props.children,i=0,o="init";return l5(r,i,o)}return vt.createElement(bM,this.props)}}]),t}(vt.PureComponent);u5.displayName="Scene";var c5=function(t){var n=t.children,r=rw(t,["children"]);return vt.createElement(o5.Consumer,null,function(i){return vt.createElement(u5,r5({controller:i},r),n)})};let SM=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const tS=""+new URL("metal-texture-e9336396.png",import.meta.url).href,CM=Q.div`
  ${({backgroundSrc:e,xPosition:t,yPosition:n,texturedBackground:r,backgroundColor:i})=>`
  width: 100vw;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
  background: ${e?`url(${e})`:"none"};
  background-position: ${t||"50%"} ${n||"50%"} ;
  background-attachment: scroll;
  background-size: cover;
  pointer-events: none;

  //this is for the metal texture in micros
  ${r?`
      
  background-color: ${i};
  background-blend-mode: overlay;
  `:""}

  @media screen and (max-height: 420px) {
    min-height: 200vh;
  }`}
`,kM=Q.span`
  ${({blurColor:e,position:t="absolute"})=>`
    position: ${t};
    display: inline-block;
    width: 100%;
    height: 100%;
    ${e?`
    color: ${e};
    @media (max-width: 1200px) {
      bottom: 0%;
      height: 75%;
      position: absolute;
      &:after {
        box-shadow: inset 0 40px 40px -16px;
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-collapse: separate;
      }
    }`:""}
  `}
`,Wi=({src:e,srcTablet:t,srcMobile:n,blurColor:r,position:i,children:o,offset:a=100,fixedDuration:u="150%",customOpacity:c=0,xPosition:f,yPosition:v,style:b,className:x,backgroundColor:g,texturedBackground:S=!1})=>{const w=S?tS:e,[j,$]=we.useState(w),[y,E]=we.useState("undefined"),I=we.useCallback(()=>{S?$(tS):window.innerWidth<768&&n?$(n):window.innerWidth<1024&&t?$(t):$(e)},[e,n,t,S]);return we.useEffect(function(){return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)}},[I]),we.useEffect(function(){I()},[I]),we.useEffect(function(){E(SM())},[]),m.jsxs(kM,{blurColor:r,position:i,children:[m.jsx(vM,{refreshInterval:1,children:m.jsx(c5,{triggerHook:"onCenter",offset:a,duration:u,classToggle:[`.hide-after-${y}`,"show-bg"],children:m.jsx(ph,{target:m.jsxs("div",{children:[m.jsx("div",{children:m.jsx(Tc,{position:0,from:{css:{opacity:c,display:"none"}},to:{css:{opacity:1,display:"block"}},children:m.jsx("div",{className:`hide-after-${y}`,children:m.jsx(CM,{className:x,style:b,backgroundSrc:j,xPosition:f,yPosition:v,texturedBackground:S,backgroundColor:g})})})}),m.jsx(Tc,{position:2,to:{css:{opacity:c,display:"none"}},duration:1})]}),children:m.jsx(m.Fragment,{})})})}),o]})},EM=Q.div`
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes fadeInNone {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      transform: translateY(-50%);
    }
  }
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 0;
      transform: translateY(50%);
    }
  }
  @keyframes fadeOutNone {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  opacity: ${({$exit:e})=>e?1:0};
  animation-name: ${({$direction:e,$exitDirection:t,$exit:n})=>{if(n)switch(t){case"down":return"fadeOutDown";case"none":return"fadeOutNone";case"up":default:return"fadeOutUp"}else switch(e){case"down":return"fadeInDown";case"none":return"fadeInNone";case"up":default:return"fadeInUp"}}};
  animation-play-state: ${({$playState:e="running"})=>e};
  animation-fill-mode: forwards;
  ${({$delay:e=0,$duration:t=1})=>`
    animation-delay: ${e}s;
    animation-duration: ${t}s;
  `}
`,TM=e=>{const t=e.getBoundingClientRect();return[t.top>=0,t.top<=window.innerHeight].every(i=>i)},qo=({children:e,className:t,style:n,duration:r,delay:i,direction:o="up",exitDirection:a="down",exitDelay:u=0,exitDuration:c=1.5,enableExitAnimation:f=!1})=>{const[v,b]=we.useState(!1),[x,g]=we.useState(!1),S=we.useRef(null);return we.useEffect(()=>{const w=()=>{if(!S.current)return;const j=TM(S.current);b(j)};return w(),document.addEventListener("scroll",w),()=>{document.removeEventListener("scroll",w)}},[]),we.useEffect(()=>{if(v&&f){const w=(r||1)*1e3,j=setTimeout(()=>{g(!0)},w+u*1e3);return()=>clearTimeout(j)}},[v,r,u,f]),m.jsx(EM,{ref:S,style:n,className:t,$delay:x?u:i,$duration:x?c:r,$playState:v?"running":"paused",$direction:o,$exitDirection:a,$exit:f&&x,children:e})};var f5={exports:{}};(function(e,t){(function(r,i){e.exports=i(we,sg)})(Ss,function(n,r){return function(i){var o={};function a(u){if(o[u])return o[u].exports;var c=o[u]={i:u,l:!1,exports:{}};return i[u].call(c.exports,c,c.exports,a),c.l=!0,c.exports}return a.m=i,a.c=o,a.d=function(u,c,f){a.o(u,c)||Object.defineProperty(u,c,{enumerable:!0,get:f})},a.r=function(u){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},a.t=function(u,c){if(c&1&&(u=a(u)),c&8||c&4&&typeof u=="object"&&u&&u.__esModule)return u;var f=Object.create(null);if(a.r(f),Object.defineProperty(f,"default",{enumerable:!0,value:u}),c&2&&typeof u!="string")for(var v in u)a.d(f,v,function(b){return u[b]}.bind(null,v));return f},a.n=function(u){var c=u&&u.__esModule?function(){return u.default}:function(){return u};return a.d(c,"a",c),c},a.o=function(u,c){return Object.prototype.hasOwnProperty.call(u,c)},a.p="",a(a.s=4)}([function(i,o,a){i.exports=a(5)()},function(i,o){i.exports=n},function(i,o){i.exports=r},function(i,o){i.exports=function(a,u,c){var f=a.direction,v=a.value;switch(f){case"top":return c.top+v<u.top&&c.bottom>u.bottom&&c.left<u.left&&c.right>u.right;case"left":return c.left+v<u.left&&c.bottom>u.bottom&&c.top<u.top&&c.right>u.right;case"bottom":return c.bottom-v>u.bottom&&c.left<u.left&&c.right>u.right&&c.top<u.top;case"right":return c.right-v>u.right&&c.left<u.left&&c.top<u.top&&c.bottom>u.bottom}}},function(i,o,a){a.r(o),a.d(o,"default",function(){return q});var u=a(1),c=a.n(u),f=a(2),v=a.n(f),b=a(0),x=a.n(b),g=a(3),S=a.n(g);function w(K){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(ae){return typeof ae}:w=function(ae){return ae&&typeof Symbol=="function"&&ae.constructor===Symbol&&ae!==Symbol.prototype?"symbol":typeof ae},w(K)}function j(K,ee){if(!(K instanceof ee))throw new TypeError("Cannot call a class as a function")}function $(K,ee){for(var ae=0;ae<ee.length;ae++){var le=ee[ae];le.enumerable=le.enumerable||!1,le.configurable=!0,"value"in le&&(le.writable=!0),Object.defineProperty(K,le.key,le)}}function y(K,ee,ae){return ee&&$(K.prototype,ee),ae&&$(K,ae),K}function E(K,ee){return ee&&(w(ee)==="object"||typeof ee=="function")?ee:k(K)}function I(K){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(ae){return ae.__proto__||Object.getPrototypeOf(ae)},I(K)}function k(K){if(K===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return K}function D(K,ee){if(typeof ee!="function"&&ee!==null)throw new TypeError("Super expression must either be null or a function");K.prototype=Object.create(ee&&ee.prototype,{constructor:{value:K,writable:!0,configurable:!0}}),ee&&R(K,ee)}function R(K,ee){return R=Object.setPrototypeOf||function(le,Re){return le.__proto__=Re,le},R(K,ee)}function O(K,ee,ae){return ee in K?Object.defineProperty(K,ee,{value:ae,enumerable:!0,configurable:!0,writable:!0}):K[ee]=ae,K}function G(K){return K.width===void 0&&(K.width=K.right-K.left),K.height===void 0&&(K.height=K.bottom-K.top),K}var q=function(K){D(ee,K);function ee(ae){var le;return j(this,ee),le=E(this,I(ee).call(this,ae)),O(k(le),"getContainer",function(){return le.props.containment||window}),O(k(le),"addEventListener",function(Re,Ce,ce,ie){le.debounceCheck||(le.debounceCheck={});var te,xe,$e=function(){te=null,le.check()};ie>-1?xe=function(){te||(te=setTimeout($e,ie||0))}:xe=function(){clearTimeout(te),te=setTimeout($e,ce||0)};var Ee={target:Re,fn:xe,getLastTimeout:function(){return te}};Re.addEventListener(Ce,Ee.fn),le.debounceCheck[Ce]=Ee}),O(k(le),"startWatching",function(){le.debounceCheck||le.interval||(le.props.intervalCheck&&(le.interval=setInterval(le.check,le.props.intervalDelay)),le.props.scrollCheck&&le.addEventListener(le.getContainer(),"scroll",le.props.scrollDelay,le.props.scrollThrottle),le.props.resizeCheck&&le.addEventListener(window,"resize",le.props.resizeDelay,le.props.resizeThrottle),!le.props.delayedCall&&le.check())}),O(k(le),"stopWatching",function(){if(le.debounceCheck){for(var Re in le.debounceCheck)if(le.debounceCheck.hasOwnProperty(Re)){var Ce=le.debounceCheck[Re];clearTimeout(Ce.getLastTimeout()),Ce.target.removeEventListener(Re,Ce.fn),le.debounceCheck[Re]=null}}le.debounceCheck=null,le.interval&&(le.interval=clearInterval(le.interval))}),O(k(le),"check",function(){var Re=le.node,Ce,ce;if(!Re)return le.state;if(Ce=G(le.roundRectDown(Re.getBoundingClientRect())),le.props.containment){var ie=le.props.containment.getBoundingClientRect();ce={top:ie.top,left:ie.left,bottom:ie.bottom,right:ie.right}}else ce={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var te=le.props.offset||{},xe=w(te)==="object";xe&&(ce.top+=te.top||0,ce.left+=te.left||0,ce.bottom-=te.bottom||0,ce.right-=te.right||0);var $e={top:Ce.top>=ce.top,left:Ce.left>=ce.left,bottom:Ce.bottom<=ce.bottom,right:Ce.right<=ce.right},Ee=Ce.height>0&&Ce.width>0,_e=Ee&&$e.top&&$e.left&&$e.bottom&&$e.right;if(Ee&&le.props.partialVisibility){var M=Ce.top<=ce.bottom&&Ce.bottom>=ce.top&&Ce.left<=ce.right&&Ce.right>=ce.left;typeof le.props.partialVisibility=="string"&&(M=$e[le.props.partialVisibility]),_e=le.props.minTopValue?M&&Ce.top<=ce.bottom-le.props.minTopValue:M}typeof te.direction=="string"&&typeof te.value=="number"&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",te.direction,te.value),_e=S()(te,Ce,ce));var A=le.state;return le.state.isVisible!==_e&&(A={isVisible:_e,visibilityRect:$e},le.setState(A),le.props.onChange&&le.props.onChange(_e)),A}),le.state={isVisible:null,visibilityRect:{}},le}return y(ee,[{key:"componentDidMount",value:function(){this.node=v.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(le){this.node=v.a.findDOMNode(this),this.props.active&&!le.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(le){return{top:Math.floor(le.top),left:Math.floor(le.left),bottom:Math.floor(le.bottom),right:Math.floor(le.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):c.a.Children.only(this.props.children)}}]),ee}(c.a.Component);O(q,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:c.a.createElement("span",null)}),O(q,"propTypes",{onChange:x.a.func,active:x.a.bool,partialVisibility:x.a.oneOfType([x.a.bool,x.a.oneOf(["top","right","bottom","left"])]),delayedCall:x.a.bool,offset:x.a.oneOfType([x.a.shape({top:x.a.number,left:x.a.number,bottom:x.a.number,right:x.a.number}),x.a.shape({direction:x.a.oneOf(["top","right","bottom","left"]),value:x.a.number})]),scrollCheck:x.a.bool,scrollDelay:x.a.number,scrollThrottle:x.a.number,resizeCheck:x.a.bool,resizeDelay:x.a.number,resizeThrottle:x.a.number,intervalCheck:x.a.bool,intervalDelay:x.a.number,containment:typeof window<"u"?x.a.instanceOf(window.Element):x.a.any,children:x.a.oneOfType([x.a.element,x.a.func]),minTopValue:x.a.number})},function(i,o,a){var u=a(6);function c(){}function f(){}f.resetWarningCache=c,i.exports=function(){function v(g,S,w,j,$,y){if(y!==u){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}v.isRequired=v;function b(){return v}var x={array:v,bool:v,func:v,number:v,object:v,string:v,symbol:v,any:v,arrayOf:b,element:v,elementType:v,instanceOf:b,node:v,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:f,resetWarningCache:c};return x.PropTypes=x,x}},function(i,o,a){var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";i.exports=u}])})})(f5);var AM=f5.exports;const RM=Rc(AM),PM=Nr`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;Nr`
0% {
  opacity: 0;

}
100% {
  opacity: 1;
}
`;Nr`
0% {
  opacity: 0;
  transform: translateY(50%);
}
100% {
  opacity: 1;
  transform: translateY(0%);
}
`;Nr`
0% {
  opacity: 0;
  transform: translateY(-50%);
}
100% {
  opacity: 1;
  transform: translateY(0%);
}
`;Nr`
0% {
  opacity: 0;
  transform: translateX(-50%);
}
100% {
  opacity: 1;
  transform: translateX(0%);
}
`;Nr`
0% {
  opacity: 0;
  transform: translateX(50%);
}
100% {
  opacity: 1;
  transform: translateX(0%);
}
`;Nr`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;Nr`
  from {
    opacity: 1;
    transform: translateX(0%);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;Nr`
0% {
  opacity: 1;
  transform: translateX(0%);
}
100% {
  opacity: 0;
  transform: translateX(100%);
}
`;Nr`
0% {
  opacity: 1;
  transform: translateY(0%);
}
100% {
  opacity: 0;
  transform: translateY(50%);
}
`;Nr`
0% {
  opacity: 1;
  transform: translateY(0%);
}
100% {
  opacity: 0;
  transform: translateY(50%);
}
`;Q(RM)`
  overflow-x: hidden !important;
`;Q.div`
  animation: ${({animation:e})=>e};
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  ${({isBackgroundImage:e})=>`
    ${e&&`
      position: absolute;
      height: 100%;
      // min-height: 100vh;
      width: 100%;
      overflow: hidden;
      `} 
    `}
`;Q.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  ${({isBackgroundImage:e})=>`
    ${e&&`
      position: absolute;
      height: 100%;
      width: 100%;
       overflow: hidden !important;
      `} 
    `}
`;var no={},d5={exports:{}};(function(e,t){(function(r,i){e.exports=i()})(Ss,()=>(()=>{var n=[,(a,u,c)=>{c.r(u),c.d(u,{default:()=>v});var f=(()=>{var b=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(x={}){var g=x,S,w;g.ready=new Promise((d,p)=>{S=d,w=p});function j(){function d(ne){const pe=P;_=p=0,P=new Map,pe.forEach(ke=>{try{ke(ne)}catch(ue){console.error(ue)}}),this.pb(),F&&F.Yb()}let p=0,_=0,P=new Map,F=null,L=null;this.requestAnimationFrame=function(ne){p||(p=requestAnimationFrame(d.bind(this)));const pe=++_;return P.set(pe,ne),pe},this.cancelAnimationFrame=function(ne){P.delete(ne),p&&P.size==0&&(cancelAnimationFrame(p),p=0)},this.Wb=function(ne){L&&(document.body.remove(L),L=null),ne||(L=document.createElement("div"),L.style.backgroundColor="black",L.style.position="fixed",L.style.right=0,L.style.top=0,L.style.color="white",L.style.padding="4px",L.innerHTML="RIVE FPS",ne=function(pe){L.innerHTML="RIVE FPS "+pe.toFixed(1)},document.body.appendChild(L)),F=new function(){let pe=0,ke=0;this.Yb=function(){var ue=performance.now();ke?(++pe,ue-=ke,1e3<ue&&(ne(1e3*pe/ue),pe=ke=0)):(ke=ue,pe=0)}}},this.Tb=function(){L&&(document.body.remove(L),L=null),F=null},this.pb=function(){}}function $(d){console.assert(!0);const p=new Map;let _=-1/0;this.push=function(P){return P=P+((1<<d)-1)>>d,p.has(P)&&clearTimeout(p.get(P)),p.set(P,setTimeout(function(){p.delete(P),p.length==0?_=-1/0:P==_&&(_=Math.max(...p.keys()),console.assert(_<P))},1e3)),_=Math.max(P,_),_<<d}}const y=g.onRuntimeInitialized;g.onRuntimeInitialized=function(){y&&y();let d=g.decodeAudio;g.decodeAudio=function(P,F){P=d(P),F(P)};let p=g.decodeFont;g.decodeFont=function(P,F){P=p(P),F(P)};const _=g.FileAssetLoader;g.ptrToAsset=P=>{let F=g.ptrToFileAsset(P);return F.isImage?g.ptrToImageAsset(P):F.isFont?g.ptrToFontAsset(P):F.isAudio?g.ptrToAudioAsset(P):F},g.CustomFileAssetLoader=_.extend("CustomFileAssetLoader",{__construct:function({loadContents:P}){this.__parent.__construct.call(this),this.Hb=P},loadContents:function(P,F){return P=g.ptrToAsset(P),this.Hb(P,F)}}),g.CDNFileAssetLoader=_.extend("CDNFileAssetLoader",{__construct:function(){this.__parent.__construct.call(this)},loadContents:function(P){let F=g.ptrToAsset(P);return P=F.cdnUuid,P===""?!1:(function(L,ne){var pe=new XMLHttpRequest;pe.responseType="arraybuffer",pe.onreadystatechange=function(){pe.readyState==4&&pe.status==200&&ne(pe)},pe.open("GET",L,!0),pe.send(null)}(F.cdnBaseUrl+"/"+P,L=>{F.decode(new Uint8Array(L.response))}),!0)}}),g.FallbackFileAssetLoader=_.extend("FallbackFileAssetLoader",{__construct:function(){this.__parent.__construct.call(this),this.lb=[]},addLoader:function(P){this.lb.push(P)},loadContents:function(P,F){for(let L of this.lb)if(L.loadContents(P,F))return!0;return!1}})};const E="createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "),I=new function(){function d(){if(!p){let dt=function(pt,X,ve){if(X=Fe.createShader(X),Fe.shaderSource(X,ve),Fe.compileShader(X),ve=Fe.getShaderInfoLog(X),0<(ve||"").length)throw ve;Fe.attachShader(pt,X)};var se=document.createElement("canvas"),De={alpha:1,depth:0,stencil:0,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,preferLowPowerToHighPerformance:0,failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:1,renderViaOffscreenBackBuffer:1};let Fe;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){if(Fe=se.getContext("webgl",De),_=1,!Fe)return console.log("No WebGL support. Image mesh will not be drawn."),!1}else if(Fe=se.getContext("webgl2",De))_=2;else if(Fe=se.getContext("webgl",De))_=1;else return console.log("No WebGL support. Image mesh will not be drawn."),!1;if(Fe=new Proxy(Fe,{get(pt,X){if(pt.isContextLost()){if(ke||(console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ",X),ke=!0),typeof pt[X]=="function")return function(){}}else return typeof pt[X]=="function"?function(...ve){return pt[X].apply(pt,ve)}:pt[X]},set(pt,X,ve){if(pt.isContextLost())ke||(console.error("Cannot render the mesh because the GL Context was lost. Tried to set property "+X),ke=!0);else return pt[X]=ve,!0}}),P=Math.min(Fe.getParameter(Fe.MAX_RENDERBUFFER_SIZE),Fe.getParameter(Fe.MAX_TEXTURE_SIZE)),se=Fe.createProgram(),dt(se,Fe.VERTEX_SHADER,`attribute vec2 vertex;
                attribute vec2 uv;
                uniform vec4 mat;
                uniform vec2 translate;
                varying vec2 st;
                void main() {
                    st = uv;
                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);
                }`),dt(se,Fe.FRAGMENT_SHADER,`precision highp float;
                uniform sampler2D image;
                varying vec2 st;
                void main() {
                    gl_FragColor = texture2D(image, st);
                }`),Fe.bindAttribLocation(se,0,"vertex"),Fe.bindAttribLocation(se,1,"uv"),Fe.linkProgram(se),De=Fe.getProgramInfoLog(se),0<(De||"").trim().length)throw De;F=Fe.getUniformLocation(se,"mat"),L=Fe.getUniformLocation(se,"translate"),Fe.useProgram(se),Fe.bindBuffer(Fe.ARRAY_BUFFER,Fe.createBuffer()),Fe.enableVertexAttribArray(0),Fe.enableVertexAttribArray(1),Fe.bindBuffer(Fe.ELEMENT_ARRAY_BUFFER,Fe.createBuffer()),Fe.uniform1i(Fe.getUniformLocation(se,"image"),0),Fe.pixelStorei(Fe.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),p=Fe}return!0}let p=null,_=0,P=0,F=null,L=null,ne=0,pe=0,ke=!1;d(),this.nc=function(){return d(),P},this.Qb=function(se){p.deleteTexture&&p.deleteTexture(se)},this.Ob=function(se){if(!d())return null;const De=p.createTexture();return De?(p.bindTexture(p.TEXTURE_2D,De),p.texImage2D(p.TEXTURE_2D,0,p.RGBA,p.RGBA,p.UNSIGNED_BYTE,se),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_S,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_WRAP_T,p.CLAMP_TO_EDGE),p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MAG_FILTER,p.LINEAR),_==2?(p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.LINEAR_MIPMAP_LINEAR),p.generateMipmap(p.TEXTURE_2D)):p.texParameteri(p.TEXTURE_2D,p.TEXTURE_MIN_FILTER,p.LINEAR),De):null};const ue=new $(8),Ue=new $(8),We=new $(10),Ge=new $(10);this.Vb=function(se,De,Fe,dt,pt){if(d()){var X=ue.push(se),ve=Ue.push(De);if(p.canvas){(p.canvas.width!=X||p.canvas.height!=ve)&&(p.canvas.width=X,p.canvas.height=ve),p.viewport(0,ve-De,se,De),p.disable(p.SCISSOR_TEST),p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT),p.enable(p.SCISSOR_TEST),Fe.sort((qe,Wt)=>Wt.xb-qe.xb),X=We.push(dt),ne!=X&&(p.bufferData(p.ARRAY_BUFFER,8*X,p.DYNAMIC_DRAW),ne=X),X=0;for(var me of Fe)p.bufferSubData(p.ARRAY_BUFFER,X,me.Ua),X+=4*me.Ua.length;console.assert(X==4*dt);for(var Ve of Fe)p.bufferSubData(p.ARRAY_BUFFER,X,Ve.Eb),X+=4*Ve.Eb.length;console.assert(X==8*dt),X=Ge.push(pt),pe!=X&&(p.bufferData(p.ELEMENT_ARRAY_BUFFER,2*X,p.DYNAMIC_DRAW),pe=X),me=0;for(var de of Fe)p.bufferSubData(p.ELEMENT_ARRAY_BUFFER,me,de.indices),me+=2*de.indices.length;console.assert(me==2*pt),de=0,Ve=!0,X=me=0;for(const qe of Fe){qe.image.Ka!=de&&(p.bindTexture(p.TEXTURE_2D,qe.image.Ja||null),de=qe.image.Ka),qe.tc?(p.scissor(qe.Za,ve-qe.$a-qe.jb,qe.Ic,qe.jb),Ve=!0):Ve&&(p.scissor(0,ve-De,se,De),Ve=!1),Fe=2/se;const Wt=-2/De;p.uniform4f(F,qe.ha[0]*Fe*qe.Ba,qe.ha[1]*Wt*qe.Ca,qe.ha[2]*Fe*qe.Ba,qe.ha[3]*Wt*qe.Ca),p.uniform2f(L,qe.ha[4]*Fe*qe.Ba+Fe*(qe.Za-qe.oc*qe.Ba)-1,qe.ha[5]*Wt*qe.Ca+Wt*(qe.$a-qe.pc*qe.Ca)+1),p.vertexAttribPointer(0,2,p.FLOAT,!1,0,X),p.vertexAttribPointer(1,2,p.FLOAT,!1,0,X+4*dt),p.drawElements(p.TRIANGLES,qe.indices.length,p.UNSIGNED_SHORT,me),X+=4*qe.Ua.length,me+=2*qe.indices.length}console.assert(X==4*dt),console.assert(me==2*pt)}}},this.canvas=function(){return d()&&p.canvas}},k=g.onRuntimeInitialized;g.onRuntimeInitialized=function(){function d(Ae){switch(Ae){case ue.srcOver:return"source-over";case ue.screen:return"screen";case ue.overlay:return"overlay";case ue.darken:return"darken";case ue.lighten:return"lighten";case ue.colorDodge:return"color-dodge";case ue.colorBurn:return"color-burn";case ue.hardLight:return"hard-light";case ue.softLight:return"soft-light";case ue.difference:return"difference";case ue.exclusion:return"exclusion";case ue.multiply:return"multiply";case ue.hue:return"hue";case ue.saturation:return"saturation";case ue.color:return"color";case ue.luminosity:return"luminosity"}}function p(Ae){return"rgba("+((16711680&Ae)>>>16)+","+((65280&Ae)>>>8)+","+((255&Ae)>>>0)+","+((4278190080&Ae)>>>24)/255+")"}function _(){0<ve.length&&(I.Vb(X.drawWidth(),X.drawHeight(),ve,me,Ve),ve=[],Ve=me=0,X.reset(512,512));for(const Ae of pt){for(const Ye of Ae.J)Ye();Ae.J=[]}pt.clear()}k&&k();var P=g.RenderPaintStyle;const F=g.RenderPath,L=g.RenderPaint,ne=g.Renderer,pe=g.StrokeCap,ke=g.StrokeJoin,ue=g.BlendMode,Ue=P.fill,We=P.stroke,Ge=g.FillRule.evenOdd;let se=1;var De=g.RenderImage.extend("CanvasRenderImage",{__construct:function({la:Ae,ya:Ye}={}){this.__parent.__construct.call(this),this.Ka=se,se=se+1&2147483647||1,this.la=Ae,this.ya=Ye},__destruct:function(){this.Ja&&(I.Qb(this.Ja),URL.revokeObjectURL(this.Xa)),this.__parent.__destruct.call(this)},decode:function(Ae){var Ye=this;Ye.ya&&Ye.ya(Ye);var Mt=new Image;Ye.Xa=URL.createObjectURL(new Blob([Ae],{type:"image/png"})),Mt.onload=function(){Ye.Gb=Mt,Ye.Ja=I.Ob(Mt),Ye.size(Mt.width,Mt.height),Ye.la&&Ye.la(Ye)},Mt.src=Ye.Xa}}),Fe=F.extend("CanvasRenderPath",{__construct:function(){this.__parent.__construct.call(this),this.U=new Path2D},rewind:function(){this.U=new Path2D},addPath:function(Ae,Ye,Mt,yt,St,wt,at){var jt=this.U,_n=jt.addPath;Ae=Ae.U;const gt=new DOMMatrix;gt.a=Ye,gt.b=Mt,gt.c=yt,gt.d=St,gt.e=wt,gt.f=at,_n.call(jt,Ae,gt)},fillRule:function(Ae){this.Wa=Ae},moveTo:function(Ae,Ye){this.U.moveTo(Ae,Ye)},lineTo:function(Ae,Ye){this.U.lineTo(Ae,Ye)},cubicTo:function(Ae,Ye,Mt,yt,St,wt){this.U.bezierCurveTo(Ae,Ye,Mt,yt,St,wt)},close:function(){this.U.closePath()}}),dt=L.extend("CanvasRenderPaint",{color:function(Ae){this.Ya=p(Ae)},thickness:function(Ae){this.Jb=Ae},join:function(Ae){switch(Ae){case ke.miter:this.Ia="miter";break;case ke.round:this.Ia="round";break;case ke.bevel:this.Ia="bevel"}},cap:function(Ae){switch(Ae){case pe.butt:this.Ha="butt";break;case pe.round:this.Ha="round";break;case pe.square:this.Ha="square"}},style:function(Ae){this.Ib=Ae},blendMode:function(Ae){this.Fb=d(Ae)},clearGradient:function(){this.ja=null},linearGradient:function(Ae,Ye,Mt,yt){this.ja={zb:Ae,Ab:Ye,cb:Mt,eb:yt,Sa:[]}},radialGradient:function(Ae,Ye,Mt,yt){this.ja={zb:Ae,Ab:Ye,cb:Mt,eb:yt,Sa:[],lc:!0}},addStop:function(Ae,Ye){this.ja.Sa.push({color:Ae,stop:Ye})},completeGradient:function(){},draw:function(Ae,Ye,Mt){let yt=this.Ib;var St=this.Ya,wt=this.ja;if(Ae.globalCompositeOperation=this.Fb,wt!=null){St=wt.zb;var at=wt.Ab;const _n=wt.cb;var jt=wt.eb;const gt=wt.Sa;wt.lc?(wt=_n-St,jt-=at,St=Ae.createRadialGradient(St,at,0,St,at,Math.sqrt(wt*wt+jt*jt))):St=Ae.createLinearGradient(St,at,_n,jt);for(let hr=0,hn=gt.length;hr<hn;hr++)at=gt[hr],St.addColorStop(at.stop,p(at.color));this.Ya=St,this.ja=null}switch(yt){case We:Ae.strokeStyle=St,Ae.lineWidth=this.Jb,Ae.lineCap=this.Ha,Ae.lineJoin=this.Ia,Ae.stroke(Ye);break;case Ue:Ae.fillStyle=St,Ae.fill(Ye,Mt)}}});const pt=new Set;let X=null,ve=[],me=0,Ve=0;var de=g.CanvasRenderer=ne.extend("Renderer",{__construct:function(Ae){this.__parent.__construct.call(this),this.T=[1,0,0,1,0,0],this.C=Ae.getContext("2d"),this.Va=Ae,this.J=[]},save:function(){this.T.push(...this.T.slice(this.T.length-6)),this.J.push(this.C.save.bind(this.C))},restore:function(){const Ae=this.T.length-6;if(6>Ae)throw"restore() called without matching save().";this.T.splice(Ae),this.J.push(this.C.restore.bind(this.C))},transform:function(Ae,Ye,Mt,yt,St,wt){const at=this.T,jt=at.length-6;at.splice(jt,6,at[jt]*Ae+at[jt+2]*Ye,at[jt+1]*Ae+at[jt+3]*Ye,at[jt]*Mt+at[jt+2]*yt,at[jt+1]*Mt+at[jt+3]*yt,at[jt]*St+at[jt+2]*wt+at[jt+4],at[jt+1]*St+at[jt+3]*wt+at[jt+5]),this.J.push(this.C.transform.bind(this.C,Ae,Ye,Mt,yt,St,wt))},rotate:function(Ae){const Ye=Math.sin(Ae);Ae=Math.cos(Ae),this.transform(Ae,Ye,-Ye,Ae,0,0)},_drawPath:function(Ae,Ye){this.J.push(Ye.draw.bind(Ye,this.C,Ae.U,Ae.Wa===Ge?"evenodd":"nonzero"))},_drawRiveImage:function(Ae,Ye,Mt){var yt=Ae.Gb;if(yt){var St=this.C,wt=d(Ye);this.J.push(function(){St.globalCompositeOperation=wt,St.globalAlpha=Mt,St.drawImage(yt,0,0),St.globalAlpha=1})}},_getMatrix:function(Ae){const Ye=this.T,Mt=Ye.length-6;for(let yt=0;6>yt;++yt)Ae[yt]=Ye[Mt+yt]},_drawImageMesh:function(Ae,Ye,Mt,yt,St,wt,at,jt,_n,gt){var hr=this.C.canvas.width,hn=this.C.canvas.height;const pr=_n-at,cs=gt-jt;at=Math.max(at,0),jt=Math.max(jt,0),_n=Math.min(_n,hr),gt=Math.min(gt,hn);const co=_n-at,fo=gt-jt;if(console.assert(co<=Math.min(pr,hr)),console.assert(fo<=Math.min(cs,hn)),!(0>=co||0>=fo)){_n=co<pr||fo<cs,hr=gt=1;var Mr=Math.ceil(co*gt),Mn=Math.ceil(fo*hr);hn=I.nc(),Mr>hn&&(gt*=hn/Mr,Mr=hn),Mn>hn&&(hr*=hn/Mn,Mn=hn),X||(X=new g.DynamicRectanizer(hn),X.reset(512,512)),hn=X.addRect(Mr,Mn),0>hn&&(_(),pt.add(this),hn=X.addRect(Mr,Mn),console.assert(0<=hn));var Oi=hn&65535,Yt=hn>>16;ve.push({ha:this.T.slice(this.T.length-6),image:Ae,Za:Oi,$a:Yt,oc:at,pc:jt,Ic:Mr,jb:Mn,Ba:gt,Ca:hr,Ua:new Float32Array(yt),Eb:new Float32Array(St),indices:new Uint16Array(wt),tc:_n,xb:Ae.Ka<<1|(_n?1:0)}),me+=yt.length,Ve+=wt.length;var Vr=this.C,ji=d(Ye);this.J.push(function(){Vr.save(),Vr.resetTransform(),Vr.globalCompositeOperation=ji,Vr.globalAlpha=Mt;const ci=I.canvas();ci&&Vr.drawImage(ci,Oi,Yt,Mr,Mn,at,jt,co,fo),Vr.restore()})}},_clipPath:function(Ae){this.J.push(this.C.clip.bind(this.C,Ae.U,Ae.Wa===Ge?"evenodd":"nonzero"))},clear:function(){pt.add(this),this.J.push(this.C.clearRect.bind(this.C,0,0,this.Va.width,this.Va.height))},flush:function(){},translate:function(Ae,Ye){this.transform(1,0,0,1,Ae,Ye)}});g.makeRenderer=function(Ae){const Ye=new de(Ae),Mt=Ye.C;return new Proxy(Ye,{get(yt,St){if(typeof yt[St]=="function")return function(...wt){return yt[St].apply(yt,wt)};if(typeof Mt[St]=="function"){if(-1<E.indexOf(St))throw Error("RiveException: Method call to '"+St+"()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");return function(...wt){Ye.J.push(Mt[St].bind(Mt,...wt))}}return yt[St]},set(yt,St,wt){if(St in Mt)return Mt[St]=wt,!0}})},g.decodeImage=function(Ae,Ye){new De({la:Ye}).decode(Ae)},g.renderFactory={makeRenderPaint:function(){return new dt},makeRenderPath:function(){return new Fe},makeRenderImage:function(){let Ae=Wt;return new De({ya:()=>{Ae.total++},la:()=>{if(Ae.loaded++,Ae.loaded===Ae.total){const Ye=Ae.ready;Ye&&(Ye(),Ae.ready=null)}}})}};let qe=g.load,Wt=null;g.load=function(Ae,Ye,Mt=!0){const yt=new g.FallbackFileAssetLoader;return Ye!==void 0&&yt.addLoader(Ye),Mt&&(Ye=new g.CDNFileAssetLoader,yt.addLoader(Ye)),new Promise(function(St){let wt=null;Wt={total:0,loaded:0,ready:function(){St(wt)}},wt=qe(Ae,yt),Wt.total==0&&St(wt)})},P=new j,g.requestAnimationFrame=P.requestAnimationFrame.bind(P),g.cancelAnimationFrame=P.cancelAnimationFrame.bind(P),g.enableFPSCounter=P.Wb.bind(P),g.disableFPSCounter=P.Tb,P.pb=_,g.resolveAnimationFrame=_,g.cleanup=function(){X&&X.delete()}};var D=Object.assign({},g),R="./this.program",O=typeof window=="object",G=typeof importScripts=="function",q="",K,ee;(O||G)&&(G?q=self.location.href:typeof document<"u"&&document.currentScript&&(q=document.currentScript.src),b&&(q=b),q.indexOf("blob:")!==0?q=q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):q="",G&&(ee=d=>{var p=new XMLHttpRequest;return p.open("GET",d,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),K=(d,p,_)=>{var P=new XMLHttpRequest;P.open("GET",d,!0),P.responseType="arraybuffer",P.onload=()=>{P.status==200||P.status==0&&P.response?p(P.response):_()},P.onerror=_,P.send(null)});var ae=g.print||console.log.bind(console),le=g.printErr||console.error.bind(console);Object.assign(g,D),D=null,g.thisProgram&&(R=g.thisProgram);var Re;g.wasmBinary&&(Re=g.wasmBinary),g.noExitRuntime,typeof WebAssembly!="object"&&Ne("no native wasm support detected");var Ce,ce,ie=!1,te,xe,$e,Ee,_e,M,A,T;function V(){var d=Ce.buffer;g.HEAP8=te=new Int8Array(d),g.HEAP16=$e=new Int16Array(d),g.HEAP32=_e=new Int32Array(d),g.HEAPU8=xe=new Uint8Array(d),g.HEAPU16=Ee=new Uint16Array(d),g.HEAPU32=M=new Uint32Array(d),g.HEAPF32=A=new Float32Array(d),g.HEAPF64=T=new Float64Array(d)}var N,he=[],oe=[],Se=[];function Oe(){var d=g.preRun.shift();he.unshift(d)}var Pe=0,Xe=null;function Ne(d){throw g.onAbort&&g.onAbort(d),d="Aborted("+d+")",le(d),ie=!0,d=new WebAssembly.RuntimeError(d+". Build with -sASSERTIONS for more info."),w(d),d}function Ze(d){return d.startsWith("data:application/octet-stream;base64,")}var Me;if(Me="canvas_advanced.wasm",!Ze(Me)){var st=Me;Me=g.locateFile?g.locateFile(st,q):q+st}function Lt(d){if(d==Me&&Re)return new Uint8Array(Re);if(ee)return ee(d);throw"both async and sync fetching of the wasm failed"}function it(d){if(!Re&&(O||G)){if(typeof fetch=="function"&&!d.startsWith("file://"))return fetch(d,{credentials:"same-origin"}).then(p=>{if(!p.ok)throw"failed to load wasm binary file at '"+d+"'";return p.arrayBuffer()}).catch(()=>Lt(d));if(K)return new Promise((p,_)=>{K(d,P=>p(new Uint8Array(P)),_)})}return Promise.resolve().then(()=>Lt(d))}function $t(d,p,_){return it(d).then(P=>WebAssembly.instantiate(P,p)).then(P=>P).then(_,P=>{le("failed to asynchronously prepare wasm: "+P),Ne(P)})}function Nn(d,p){var _=Me;return Re||typeof WebAssembly.instantiateStreaming!="function"||Ze(_)||_.startsWith("file://")||typeof fetch!="function"?$t(_,d,p):fetch(_,{credentials:"same-origin"}).then(P=>WebAssembly.instantiateStreaming(P,d).then(p,function(F){return le("wasm streaming compile failed: "+F),le("falling back to ArrayBuffer instantiation"),$t(_,d,p)}))}var et,tt,Jt={433788:(d,p,_,P,F)=>{if(typeof window>"u"||(window.AudioContext||window.webkitAudioContext)===void 0)return 0;if(typeof window.h>"u"){window.h={Aa:0},window.h.H={},window.h.H.za=d,window.h.H.capture=p,window.h.H.La=_,window.h.ga={},window.h.ga.stopped=P,window.h.ga.yb=F;let L=window.h;L.D=[],L.Gc=function(ne){for(var pe=0;pe<L.D.length;++pe)if(L.D[pe]==null)return L.D[pe]=ne,pe;return L.D.push(ne),L.D.length-1},L.Db=function(ne){for(L.D[ne]=null;0<L.D.length&&L.D[L.D.length-1]==null;)L.D.pop()},L.Sc=function(ne){for(var pe=0;pe<L.D.length;++pe)if(L.D[pe]==ne)return L.Db(pe)},L.sa=function(ne){return L.D[ne]},L.Cb=["touchend","click"],L.unlock=function(){for(var ne=0;ne<L.D.length;++ne){var pe=L.D[ne];pe!=null&&pe.I!=null&&pe.state===L.ga.yb&&pe.I.resume().then(()=>{Cr(pe.qb)},ke=>{console.error("Failed to resume audiocontext",ke)})}L.Cb.map(function(ke){document.removeEventListener(ke,L.unlock,!0)})},L.Cb.map(function(ne){document.addEventListener(ne,L.unlock,!0)})}return window.h.Aa+=1,1},435966:()=>{typeof window.h<"u"&&(--window.h.Aa,window.h.Aa===0&&delete window.h)},436130:()=>navigator.mediaDevices!==void 0&&navigator.mediaDevices.getUserMedia!==void 0,436234:()=>{try{var d=new(window.AudioContext||window.webkitAudioContext),p=d.sampleRate;return d.close(),p}catch{return 0}},436405:(d,p,_,P,F,L)=>{if(typeof window.h>"u")return-1;var ne={},pe={};return d==window.h.H.za&&_!=0&&(pe.sampleRate=_),ne.I=new(window.AudioContext||window.webkitAudioContext)(pe),ne.I.suspend(),ne.state=window.h.ga.stopped,_=0,d!=window.h.H.za&&(_=p),ne.$=ne.I.createScriptProcessor(P,_,p),ne.$.onaudioprocess=function(ke){if((ne.ta==null||ne.ta.length==0)&&(ne.ta=new Float32Array(A.buffer,F,P*p)),d==window.h.H.capture||d==window.h.H.La){for(var ue=0;ue<p;ue+=1)for(var Ue=ke.inputBuffer.getChannelData(ue),We=ne.ta,Ge=0;Ge<P;Ge+=1)We[Ge*p+ue]=Ue[Ge];Hr(L,P,F)}if(d==window.h.H.za||d==window.h.H.La)for(ht(L,P,F),ue=0;ue<ke.outputBuffer.numberOfChannels;++ue)for(Ue=ke.outputBuffer.getChannelData(ue),We=ne.ta,Ge=0;Ge<P;Ge+=1)Ue[Ge]=We[Ge*p+ue];else for(ue=0;ue<ke.outputBuffer.numberOfChannels;++ue)ke.outputBuffer.getChannelData(ue).fill(0)},d!=window.h.H.capture&&d!=window.h.H.La||navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(function(ke){ne.Da=ne.I.createMediaStreamSource(ke),ne.Da.connect(ne.$),ne.$.connect(ne.I.destination)}).catch(function(ke){console.log("Failed to get user media: "+ke)}),d==window.h.H.za&&ne.$.connect(ne.I.destination),ne.qb=L,window.h.Gc(ne)},439282:d=>window.h.sa(d).I.sampleRate,439355:d=>{d=window.h.sa(d),d.$!==void 0&&(d.$.onaudioprocess=function(){},d.$.disconnect(),d.$=void 0),d.Da!==void 0&&(d.Da.disconnect(),d.Da=void 0),d.I.close(),d.I=void 0,d.qb=void 0},439755:d=>{window.h.Db(d)},439805:d=>{d=window.h.sa(d),d.I.resume(),d.state=window.h.ga.yb},439944:d=>{d=window.h.sa(d),d.I.suspend(),d.state=window.h.ga.stopped}},Or=d=>{for(;0<d.length;)d.shift()(g)},ur=(d,p)=>{for(var _=0,P=d.length-1;0<=P;P--){var F=d[P];F==="."?d.splice(P,1):F===".."?(d.splice(P,1),_++):_&&(d.splice(P,1),_--)}if(p)for(;_;_--)d.unshift("..");return d},Rn=d=>{var p=d.charAt(0)==="/",_=d.substr(-1)==="/";return(d=ur(d.split("/").filter(P=>!!P),!p).join("/"))||p||(d="."),d&&_&&(d+="/"),(p?"/":"")+d},Al=d=>{var p=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(d).slice(1);return d=p[0],p=p[1],!d&&!p?".":(p&&(p=p.substr(0,p.length-1)),d+p)},jr=d=>{if(d==="/")return"/";d=Rn(d),d=d.replace(/\/$/,"");var p=d.lastIndexOf("/");return p===-1?d:d.substr(p+1)},Rl=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return d=>crypto.getRandomValues(d);Ne("initRandomDevice")},Ba=d=>(Ba=Rl())(d);function Us(){for(var d="",p=!1,_=arguments.length-1;-1<=_&&!p;_--){if(p=0<=_?arguments[_]:"/",typeof p!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!p)return"";d=p+"/"+d,p=p.charAt(0)==="/"}return d=ur(d.split("/").filter(P=>!!P),!p).join("/"),(p?"/":"")+d||"."}var Yi=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,bi=(d,p,_)=>{var P=p+_;for(_=p;d[_]&&!(_>=P);)++_;if(16<_-p&&d.buffer&&Yi)return Yi.decode(d.subarray(p,_));for(P="";p<_;){var F=d[p++];if(F&128){var L=d[p++]&63;if((F&224)==192)P+=String.fromCharCode((F&31)<<6|L);else{var ne=d[p++]&63;F=(F&240)==224?(F&15)<<12|L<<6|ne:(F&7)<<18|L<<12|ne<<6|d[p++]&63,65536>F?P+=String.fromCharCode(F):(F-=65536,P+=String.fromCharCode(55296|F>>10,56320|F&1023))}}else P+=String.fromCharCode(F)}return P},Ms=[],Po=d=>{for(var p=0,_=0;_<d.length;++_){var P=d.charCodeAt(_);127>=P?p++:2047>=P?p+=2:55296<=P&&57343>=P?(p+=4,++_):p+=3}return p},Pl=(d,p,_,P)=>{if(!(0<P))return 0;var F=_;P=_+P-1;for(var L=0;L<d.length;++L){var ne=d.charCodeAt(L);if(55296<=ne&&57343>=ne){var pe=d.charCodeAt(++L);ne=65536+((ne&1023)<<10)|pe&1023}if(127>=ne){if(_>=P)break;p[_++]=ne}else{if(2047>=ne){if(_+1>=P)break;p[_++]=192|ne>>6}else{if(65535>=ne){if(_+2>=P)break;p[_++]=224|ne>>12}else{if(_+3>=P)break;p[_++]=240|ne>>18,p[_++]=128|ne>>12&63}p[_++]=128|ne>>6&63}p[_++]=128|ne&63}}return p[_]=0,_-F};function $l(d,p){var _=Array(Po(d)+1);return d=Pl(d,_,0,_.length),p&&(_.length=d),_}var Na=[];function br(d,p){Na[d]={input:[],F:[],W:p},Ul(d,Ol)}var Ol={open:function(d){var p=Na[d.node.ma];if(!p)throw new Qe(43);d.s=p,d.seekable=!1},close:function(d){d.s.W.ra(d.s)},ra:function(d){d.s.W.ra(d.s)},read:function(d,p,_,P){if(!d.s||!d.s.W.ib)throw new Qe(60);for(var F=0,L=0;L<P;L++){try{var ne=d.s.W.ib(d.s)}catch{throw new Qe(29)}if(ne===void 0&&F===0)throw new Qe(6);if(ne==null)break;F++,p[_+L]=ne}return F&&(d.node.timestamp=Date.now()),F},write:function(d,p,_,P){if(!d.s||!d.s.W.Pa)throw new Qe(60);try{for(var F=0;F<P;F++)d.s.W.Pa(d.s,p[_+F])}catch{throw new Qe(29)}return P&&(d.node.timestamp=Date.now()),F}},Si={ib:function(){e:{if(!Ms.length){var d=null;if(typeof window<"u"&&typeof window.prompt=="function"?(d=window.prompt("Input: "),d!==null&&(d+=`
`)):typeof readline=="function"&&(d=readline(),d!==null&&(d+=`
`)),!d){d=null;break e}Ms=$l(d,!0)}d=Ms.shift()}return d},Pa:function(d,p){p===null||p===10?(ae(bi(d.F,0)),d.F=[]):p!=0&&d.F.push(p)},ra:function(d){d.F&&0<d.F.length&&(ae(bi(d.F,0)),d.F=[])},ic:function(){return{Lc:25856,Nc:5,Kc:191,Mc:35387,Jc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},jc:function(){return 0},kc:function(){return[24,80]}},Wa={Pa:function(d,p){p===null||p===10?(le(bi(d.F,0)),d.F=[]):p!=0&&d.F.push(p)},ra:function(d){d.F&&0<d.F.length&&(le(bi(d.F,0)),d.F=[])}};function Fu(d,p){var _=d.l?d.l.length:0;_>=p||(p=Math.max(p,_*(1048576>_?2:1.125)>>>0),_!=0&&(p=Math.max(p,256)),_=d.l,d.l=new Uint8Array(p),0<d.v&&d.l.set(_.subarray(0,d.v),0))}var Dt={P:null,V(){return Dt.createNode(null,"/",16895,0)},createNode(d,p,_,P){if((_&61440)===24576||(_&61440)===4096)throw new Qe(63);return Dt.P||(Dt.P={dir:{node:{N:Dt.j.N,R:Dt.j.R,ka:Dt.j.ka,wa:Dt.j.wa,vb:Dt.j.vb,Bb:Dt.j.Bb,wb:Dt.j.wb,tb:Dt.j.tb,Ea:Dt.j.Ea},stream:{ba:Dt.m.ba}},file:{node:{N:Dt.j.N,R:Dt.j.R},stream:{ba:Dt.m.ba,read:Dt.m.read,write:Dt.m.write,qa:Dt.m.qa,mb:Dt.m.mb,ob:Dt.m.ob}},link:{node:{N:Dt.j.N,R:Dt.j.R,na:Dt.j.na},stream:{}},ab:{node:{N:Dt.j.N,R:Dt.j.R},stream:ca}}),_=Va(d,p,_,P),(_.mode&61440)===16384?(_.j=Dt.P.dir.node,_.m=Dt.P.dir.stream,_.l={}):(_.mode&61440)===32768?(_.j=Dt.P.file.node,_.m=Dt.P.file.stream,_.v=0,_.l=null):(_.mode&61440)===40960?(_.j=Dt.P.link.node,_.m=Dt.P.link.stream):(_.mode&61440)===8192&&(_.j=Dt.P.ab.node,_.m=Dt.P.ab.stream),_.timestamp=Date.now(),d&&(d.l[p]=_,d.timestamp=_.timestamp),_},Oc(d){return d.l?d.l.subarray?d.l.subarray(0,d.v):new Uint8Array(d.l):new Uint8Array(0)},j:{N(d){var p={};return p.Sb=(d.mode&61440)===8192?d.id:1,p.kb=d.id,p.mode=d.mode,p.uc=1,p.uid=0,p.dc=0,p.ma=d.ma,(d.mode&61440)===16384?p.size=4096:(d.mode&61440)===32768?p.size=d.v:(d.mode&61440)===40960?p.size=d.link.length:p.size=0,p.Kb=new Date(d.timestamp),p.rc=new Date(d.timestamp),p.Pb=new Date(d.timestamp),p.Lb=4096,p.Mb=Math.ceil(p.size/p.Lb),p},R(d,p){if(p.mode!==void 0&&(d.mode=p.mode),p.timestamp!==void 0&&(d.timestamp=p.timestamp),p.size!==void 0&&(p=p.size,d.v!=p))if(p==0)d.l=null,d.v=0;else{var _=d.l;d.l=new Uint8Array(p),_&&d.l.set(_.subarray(0,Math.min(p,d.v))),d.v=p}},ka(){throw Il[44]},wa(d,p,_,P){return Dt.createNode(d,p,_,P)},vb(d,p,_){if((d.mode&61440)===16384){try{var P=Ci(p,_)}catch{}if(P)for(var F in P.l)throw new Qe(55)}delete d.parent.l[d.name],d.parent.timestamp=Date.now(),d.name=_,p.l[_]=d,p.timestamp=d.parent.timestamp,d.parent=p},Bb(d,p){delete d.l[p],d.timestamp=Date.now()},wb(d,p){var _=Ci(d,p),P;for(P in _.l)throw new Qe(55);delete d.l[p],d.timestamp=Date.now()},tb(d){var p=[".",".."],_;for(_ in d.l)d.l.hasOwnProperty(_)&&p.push(_);return p},Ea(d,p,_){return d=Dt.createNode(d,p,41471,0),d.link=_,d},na(d){if((d.mode&61440)!==40960)throw new Qe(28);return d.link}},m:{read(d,p,_,P,F){var L=d.node.l;if(F>=d.node.v)return 0;if(d=Math.min(d.node.v-F,P),8<d&&L.subarray)p.set(L.subarray(F,F+d),_);else for(P=0;P<d;P++)p[_+P]=L[F+P];return d},write(d,p,_,P,F,L){if(p.buffer===te.buffer&&(L=!1),!P)return 0;if(d=d.node,d.timestamp=Date.now(),p.subarray&&(!d.l||d.l.subarray)){if(L)return d.l=p.subarray(_,_+P),d.v=P;if(d.v===0&&F===0)return d.l=p.slice(_,_+P),d.v=P;if(F+P<=d.v)return d.l.set(p.subarray(_,_+P),F),P}if(Fu(d,F+P),d.l.subarray&&p.subarray)d.l.set(p.subarray(_,_+P),F);else for(L=0;L<P;L++)d.l[F+L]=p[_+L];return d.v=Math.max(d.v,F+P),P},ba(d,p,_){if(_===1?p+=d.position:_===2&&(d.node.mode&61440)===32768&&(p+=d.node.v),0>p)throw new Qe(28);return p},qa(d,p,_){Fu(d.node,p+_),d.node.v=Math.max(d.node.v,p+_)},mb(d,p,_,P,F){if((d.node.mode&61440)!==32768)throw new Qe(43);if(d=d.node.l,F&2||d.buffer!==te.buffer){if((0<_||_+p<d.length)&&(d.subarray?d=d.subarray(_,_+p):d=Array.prototype.slice.call(d,_,_+p)),_=!0,Ne(),p=void 0,!p)throw new Qe(48);te.set(d,p)}else _=!1,p=d.byteOffset;return{o:p,M:_}},ob(d,p,_,P){return Dt.m.write(d,p,0,P,_,!1),0}}};function jc(d,p){var _=0;return d&&(_|=365),p&&(_|=146),_}var jl=null,zu={},ri=[],Ds=1,ua=null,Ha=!0,Qe=null,Il={},$o=(d,p={})=>{if(d=Us(d),!d)return{path:"",node:null};if(p=Object.assign({gb:!0,Ra:0},p),8<p.Ra)throw new Qe(32);d=d.split("/").filter(ne=>!!ne);for(var _=jl,P="/",F=0;F<d.length;F++){var L=F===d.length-1;if(L&&p.parent)break;if(_=Ci(_,d[F]),P=Rn(P+"/"+d[F]),_.xa&&(!L||L&&p.gb)&&(_=_.xa.root),!L||p.Ma){for(L=0;(_.mode&61440)===40960;)if(_=zs(P),P=Us(Al(P),_),_=$o(P,{Ra:p.Ra+1}).node,40<L++)throw new Qe(32)}}return{path:P,node:_}},Bu=d=>{for(var p;;){if(d===d.parent)return d=d.V.nb,p?d[d.length-1]!=="/"?`${d}/${p}`:d+p:d;p=p?`${d.name}/${p}`:d.name,d=d.parent}},Ic=(d,p)=>{for(var _=0,P=0;P<p.length;P++)_=(_<<5)-_+p.charCodeAt(P)|0;return(d+_>>>0)%ua.length},Ci=(d,p)=>{var _;if(_=(_=Kn(d,"x"))?_:d.j.ka?0:2)throw new Qe(_,d);for(_=ua[Ic(d.id,p)];_;_=_.sc){var P=_.name;if(_.parent.id===d.id&&P===p)return _}return d.j.ka(d,p)},Va=(d,p,_,P)=>(d=new An(d,p,_,P),p=Ic(d.parent.id,d.name),d.sc=ua[p],ua[p]=d),Xr=d=>{var p=["r","w","rw"][d&3];return d&512&&(p+="w"),p},Kn=(d,p)=>{if(Ha)return 0;if(!p.includes("r")||d.mode&292){if(p.includes("w")&&!(d.mode&146)||p.includes("x")&&!(d.mode&73))return 2}else return 2;return 0},Ga=(d,p)=>{try{return Ci(d,p),20}catch{}return Kn(d,"wx")},Fs=()=>{for(var d=0;4096>=d;d++)if(!ri[d])return d;throw new Qe(33)},ii=d=>{if(d=ri[d],!d)throw new Qe(8);return d},Ll=(d,p=-1)=>(Hs||(Hs=function(){this.h={}},Hs.prototype={},Object.defineProperties(Hs.prototype,{object:{get(){return this.node},set(_){this.node=_}},flags:{get(){return this.h.flags},set(_){this.h.flags=_}},position:{get(){return this.h.position},set(_){this.h.position=_}}})),d=Object.assign(new Hs,d),p==-1&&(p=Fs()),d.Z=p,ri[p]=d),ca={open:d=>{d.m=zu[d.node.ma].m,d.m.open&&d.m.open(d)},ba:()=>{throw new Qe(70)}},Ul=(d,p)=>{zu[d]={m:p}},fa=(d,p)=>{var _=p==="/",P=!p;if(_&&jl)throw new Qe(10);if(!_&&!P){var F=$o(p,{gb:!1});if(p=F.path,F=F.node,F.xa)throw new Qe(10);if((F.mode&61440)!==16384)throw new Qe(54)}p={type:d,Qc:{},nb:p,qc:[]},d=d.V(p),d.V=p,p.root=d,_?jl=d:F&&(F.xa=p,F.V&&F.V.qc.push(p))},oi=(d,p,_)=>{var P=$o(d,{parent:!0}).node;if(d=jr(d),!d||d==="."||d==="..")throw new Qe(28);var F=Ga(P,d);if(F)throw new Qe(F);if(!P.j.wa)throw new Qe(63);return P.j.wa(P,d,p,_)},Oo=(d,p,_)=>{typeof _>"u"&&(_=p,p=438),oi(d,p|8192,_)},jo=(d,p)=>{if(!Us(d))throw new Qe(44);var _=$o(p,{parent:!0}).node;if(!_)throw new Qe(44);p=jr(p);var P=Ga(_,p);if(P)throw new Qe(P);if(!_.j.Ea)throw new Qe(63);_.j.Ea(_,p,d)},zs=d=>{if(d=$o(d).node,!d)throw new Qe(44);if(!d.j.na)throw new Qe(28);return Us(Bu(d.parent),d.j.na(d))},as=(d,p,_)=>{if(d==="")throw new Qe(44);if(typeof p=="string"){var P={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[p];if(typeof P>"u")throw Error(`Unknown file open mode: ${p}`);p=P}if(_=p&64?(typeof _>"u"?438:_)&4095|32768:0,typeof d=="object")var F=d;else{d=Rn(d);try{F=$o(d,{Ma:!(p&131072)}).node}catch{}}if(P=!1,p&64)if(F){if(p&128)throw new Qe(20)}else F=oi(d,_,0),P=!0;if(!F)throw new Qe(44);if((F.mode&61440)===8192&&(p&=-513),p&65536&&(F.mode&61440)!==16384)throw new Qe(54);if(!P&&(_=F?(F.mode&61440)===40960?32:(F.mode&61440)===16384&&(Xr(p)!=="r"||p&512)?31:Kn(F,Xr(p)):44))throw new Qe(_);if(p&512&&!P){if(_=F,_=typeof _=="string"?$o(_,{Ma:!0}).node:_,!_.j.R)throw new Qe(63);if((_.mode&61440)===16384)throw new Qe(31);if((_.mode&61440)!==32768)throw new Qe(28);if(P=Kn(_,"w"))throw new Qe(P);_.j.R(_,{size:0,timestamp:Date.now()})}return p&=-131713,F=Ll({node:F,path:Bu(F),flags:p,seekable:!0,position:0,m:F.m,Hc:[],error:!1}),F.m.open&&F.m.open(F),!g.logReadFiles||p&1||(In||(In={}),d in In||(In[d]=1)),F},Bs=(d,p,_)=>{if(d.Z===null)throw new Qe(8);if(!d.seekable||!d.m.ba)throw new Qe(70);if(_!=0&&_!=1&&_!=2)throw new Qe(28);d.position=d.m.ba(d,p,_),d.Hc=[]},Ns=()=>{Qe||(Qe=function(d,p){this.name="ErrnoError",this.node=p,this.xc=function(_){this.Y=_},this.xc(d),this.message="FS error"},Qe.prototype=Error(),Qe.prototype.constructor=Qe,[44].forEach(d=>{Il[d]=new Qe(d),Il[d].stack="<generic error, no stack>"}))},Ws,Tn=(d,p,_)=>{d=Rn("/dev/"+d);var P=jc(!!p,!!_);Kr||(Kr=64);var F=Kr++<<8|0;Ul(F,{open:L=>{L.seekable=!1},close:()=>{_&&_.buffer&&_.buffer.length&&_(10)},read:(L,ne,pe,ke)=>{for(var ue=0,Ue=0;Ue<ke;Ue++){try{var We=p()}catch{throw new Qe(29)}if(We===void 0&&ue===0)throw new Qe(6);if(We==null)break;ue++,ne[pe+Ue]=We}return ue&&(L.node.timestamp=Date.now()),ue},write:(L,ne,pe,ke)=>{for(var ue=0;ue<ke;ue++)try{_(ne[pe+ue])}catch{throw new Qe(29)}return ke&&(L.node.timestamp=Date.now()),ue}}),Oo(d,P,F)},Kr,si={},Hs,In,Sr=void 0;function so(){return Sr+=4,_e[Sr-4>>2]}function Ya(d){if(d===void 0)return"_unknown";d=d.replace(/[^a-zA-Z0-9_]/g,"$");var p=d.charCodeAt(0);return 48<=p&&57>=p?`_${d}`:d}function ki(d,p){return d=Ya(d),{[d]:function(){return p.apply(this,arguments)}}[d]}function Xa(){this.M=[void 0],this.hb=[]}var Ir=new Xa,Vs=void 0;function Ot(d){throw new Vs(d)}var Ei=d=>(d||Ot("Cannot use deleted val. handle = "+d),Ir.get(d).value),qr=d=>{switch(d){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Ir.qa({ub:1,value:d})}};function Ln(d){var p=Error,_=ki(d,function(P){this.name=d,this.message=P,P=Error(P).stack,P!==void 0&&(this.stack=this.toString()+`
`+P.replace(/^Error(:[^\n]*)?\n/,""))});return _.prototype=Object.create(p.prototype),_.prototype.constructor=_,_.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},_}var qn=void 0,da=void 0;function yn(d){for(var p="";xe[d];)p+=da[xe[d++]];return p}var ao=[];function Xi(){for(;ao.length;){var d=ao.pop();d.g.fa=!1,d.delete()}}var Io=void 0,ai={};function ha(d,p){for(p===void 0&&Ot("ptr should not be undefined");d.A;)p=d.oa(p),d=d.A;return p}var Pt={};function Ka(d){d=Tt(d);var p=yn(d);return Nt(d),p}function lo(d,p){var _=Pt[d];return _===void 0&&Ot(p+" has unknown type "+Ka(d)),_}function pa(){}var ls=!1;function Ml(d){--d.count.value,d.count.value===0&&(d.G?d.L.X(d.G):d.u.i.X(d.o))}function ga(d,p,_){return p===_?d:_.A===void 0?null:(d=ga(d,p,_.A),d===null?null:_.Ub(d))}var Lo={};function Jf(d,p){return p=ha(d,p),ai[p]}var Nu=void 0;function uo(d){throw new Nu(d)}function Lr(d,p){return p.u&&p.o||uo("makeClassHandle requires ptr and ptrType"),!!p.L!=!!p.G&&uo("Both smartPtrType and smartPtr must be specified"),p.count={value:1},Uo(Object.create(d,{g:{value:p}}))}function Uo(d){return typeof FinalizationRegistry>"u"?(Uo=p=>p,d):(ls=new FinalizationRegistry(p=>{Ml(p.g)}),Uo=p=>{var _=p.g;return _.G&&ls.register(p,{g:_},p),p},pa=p=>{ls.unregister(p)},Uo(d))}var ma={};function va(d){for(;d.length;){var p=d.pop();d.pop()(p)}}function Qn(d){return this.fromWireType(_e[d>>2])}var Ti={},qa={};function zt(d,p,_){function P(pe){pe=_(pe),pe.length!==d.length&&uo("Mismatched type converter count");for(var ke=0;ke<d.length;++ke)Ai(d[ke],pe[ke])}d.forEach(function(pe){qa[pe]=p});var F=Array(p.length),L=[],ne=0;p.forEach((pe,ke)=>{Pt.hasOwnProperty(pe)?F[ke]=Pt[pe]:(L.push(pe),Ti.hasOwnProperty(pe)||(Ti[pe]=[]),Ti[pe].push(()=>{F[ke]=Pt[pe],++ne,ne===L.length&&P(F)}))}),L.length===0&&P(F)}function an(d){switch(d){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${d}`)}}function Gs(d,p,_={}){var P=p.name;if(d||Ot(`type "${P}" must have a positive integer typeid pointer`),Pt.hasOwnProperty(d)){if(_.fc)return;Ot(`Cannot register type '${P}' twice`)}Pt[d]=p,delete qa[d],Ti.hasOwnProperty(d)&&(p=Ti[d],delete Ti[d],p.forEach(F=>F()))}function Ai(d,p,_={}){if(!("argPackAdvance"in p))throw new TypeError("registerType registeredInstance requires argPackAdvance");Gs(d,p,_)}function ya(d){Ot(d.g.u.i.name+" instance already deleted")}function Ri(){}function Ki(d,p,_){if(d[p].B===void 0){var P=d[p];d[p]=function(){return d[p].B.hasOwnProperty(arguments.length)||Ot(`Function '${_}' called with an invalid number of arguments (${arguments.length}) - expects one of (${d[p].B})!`),d[p].B[arguments.length].apply(this,arguments)},d[p].B=[],d[p].B[P.ea]=P}}function Qa(d,p,_){g.hasOwnProperty(d)?((_===void 0||g[d].B!==void 0&&g[d].B[_]!==void 0)&&Ot(`Cannot register public name '${d}' twice`),Ki(g,d,d),g.hasOwnProperty(_)&&Ot(`Cannot register multiple overloads of a function with the same number of arguments (${_})!`),g[d].B[_]=p):(g[d]=p,_!==void 0&&(g[d].Pc=_))}function Ja(d,p,_,P,F,L,ne,pe){this.name=d,this.constructor=p,this.O=_,this.X=P,this.A=F,this.Zb=L,this.oa=ne,this.Ub=pe,this.rb=[]}function Dl(d,p,_){for(;p!==_;)p.oa||Ot(`Expected null or instance of ${_.name}, got an instance of ${p.name}`),d=p.oa(d),p=p.A;return d}function Jn(d,p){return p===null?(this.Oa&&Ot(`null is not a valid ${this.name}`),0):(p.g||Ot(`Cannot pass "${Wl(p)}" as a ${this.name}`),p.g.o||Ot(`Cannot pass deleted object as a pointer of type ${this.name}`),Dl(p.g.o,p.g.u.i,this.i))}function Wu(d,p){if(p===null){if(this.Oa&&Ot(`null is not a valid ${this.name}`),this.va){var _=this.Qa();return d!==null&&d.push(this.X,_),_}return 0}if(p.g||Ot(`Cannot pass "${Wl(p)}" as a ${this.name}`),p.g.o||Ot(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.ua&&p.g.u.ua&&Ot(`Cannot convert argument of type ${p.g.L?p.g.L.name:p.g.u.name} to parameter type ${this.name}`),_=Dl(p.g.o,p.g.u.i,this.i),this.va)switch(p.g.G===void 0&&Ot("Passing raw pointer to smart pointer is illegal"),this.Bc){case 0:p.g.L===this?_=p.g.G:Ot(`Cannot convert argument of type ${p.g.L?p.g.L.name:p.g.u.name} to parameter type ${this.name}`);break;case 1:_=p.g.G;break;case 2:if(p.g.L===this)_=p.g.G;else{var P=p.clone();_=this.wc(_,qr(function(){P.delete()})),d!==null&&d.push(this.X,_)}break;default:Ot("Unsupporting sharing policy")}return _}function Pi(d,p){return p===null?(this.Oa&&Ot(`null is not a valid ${this.name}`),0):(p.g||Ot(`Cannot pass "${Wl(p)}" as a ${this.name}`),p.g.o||Ot(`Cannot pass deleted object as a pointer of type ${this.name}`),p.g.u.ua&&Ot(`Cannot convert argument of type ${p.g.u.name} to parameter type ${this.name}`),Dl(p.g.o,p.g.u.i,this.i))}function li(d,p,_,P){this.name=d,this.i=p,this.Oa=_,this.ua=P,this.va=!1,this.X=this.wc=this.Qa=this.sb=this.Bc=this.vc=void 0,p.A!==void 0?this.toWireType=Wu:(this.toWireType=P?Jn:Pi,this.K=null)}function Fl(d,p,_){g.hasOwnProperty(d)||uo("Replacing nonexistant public symbol"),g[d].B!==void 0&&_!==void 0?g[d].B[_]=p:(g[d]=p,g[d].ea=_)}var cr=[],zl=d=>{var p=cr[d];return p||(d>=cr.length&&(cr.length=d+1),cr[d]=p=N.get(d)),p},Lc=(d,p)=>{var _=[];return function(){if(_.length=0,Object.assign(_,arguments),d.includes("j")){var P=g["dynCall_"+d];P=_&&_.length?P.apply(null,[p].concat(_)):P.call(null,p)}else P=zl(p).apply(null,_);return P}};function fr(d,p){d=yn(d);var _=d.includes("j")?Lc(d,p):zl(p);return typeof _!="function"&&Ot(`unknown function pointer with signature ${d}: ${p}`),_}var Bl=void 0;function ui(d,p){function _(L){F[L]||Pt[L]||(qa[L]?qa[L].forEach(_):(P.push(L),F[L]=!0))}var P=[],F={};throw p.forEach(_),new Bl(`${d}: `+P.map(Ka).join([", "]))}function xa(d,p,_,P,F){var L=p.length;2>L&&Ot("argTypes array size mismatch! Must at least get return value and 'this' types!");var ne=p[1]!==null&&_!==null,pe=!1;for(_=1;_<p.length;++_)if(p[_]!==null&&p[_].K===void 0){pe=!0;break}var ke=p[0].name!=="void",ue=L-2,Ue=Array(ue),We=[],Ge=[];return function(){if(arguments.length!==ue&&Ot(`function ${d} called with ${arguments.length} arguments, expected ${ue} args!`),Ge.length=0,We.length=ne?2:1,We[0]=F,ne){var se=p[1].toWireType(Ge,this);We[1]=se}for(var De=0;De<ue;++De)Ue[De]=p[De+2].toWireType(Ge,arguments[De]),We.push(Ue[De]);if(De=P.apply(null,We),pe)va(Ge);else for(var Fe=ne?1:2;Fe<p.length;Fe++){var dt=Fe===1?se:Ue[Fe-2];p[Fe].K!==null&&p[Fe].K(dt)}return se=ke?p[0].fromWireType(De):void 0,se}}function mt(d,p){for(var _=[],P=0;P<d;P++)_.push(M[p+4*P>>2]);return _}function Hu(d,p,_){return d instanceof Object||Ot(`${_} with invalid "this": ${d}`),d instanceof p.i.constructor||Ot(`${_} incompatible with "this" of type ${d.constructor.name}`),d.g.o||Ot(`cannot call emscripten binding method ${_} on deleted object`),Dl(d.g.o,d.g.u.i,p.i)}function Ur(d){d>=Ir.h&&--Ir.get(d).ub===0&&Ir.ec(d)}function Nl(d,p,_){switch(p){case 0:return function(P){return this.fromWireType((_?te:xe)[P])};case 1:return function(P){return this.fromWireType((_?$e:Ee)[P>>1])};case 2:return function(P){return this.fromWireType((_?_e:M)[P>>2])};default:throw new TypeError("Unknown integer type: "+d)}}function Wl(d){if(d===null)return"null";var p=typeof d;return p==="object"||p==="array"||p==="function"?d.toString():""+d}function Mo(d,p){switch(p){case 2:return function(_){return this.fromWireType(A[_>>2])};case 3:return function(_){return this.fromWireType(T[_>>3])};default:throw new TypeError("Unknown float type: "+d)}}function Hl(d,p,_){switch(p){case 0:return _?function(P){return te[P]}:function(P){return xe[P]};case 1:return _?function(P){return $e[P>>1]}:function(P){return Ee[P>>1]};case 2:return _?function(P){return _e[P>>2]}:function(P){return M[P>>2]};default:throw new TypeError("Unknown integer type: "+d)}}var Za=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,xn=(d,p)=>{for(var _=d>>1,P=_+p/2;!(_>=P)&&Ee[_];)++_;if(_<<=1,32<_-d&&Za)return Za.decode(xe.subarray(d,_));for(_="",P=0;!(P>=p/2);++P){var F=$e[d+2*P>>1];if(F==0)break;_+=String.fromCharCode(F)}return _},us=(d,p,_)=>{if(_===void 0&&(_=2147483647),2>_)return 0;_-=2;var P=p;_=_<2*d.length?_/2:d.length;for(var F=0;F<_;++F)$e[p>>1]=d.charCodeAt(F),p+=2;return $e[p>>1]=0,p-P},ye=d=>2*d.length,z=(d,p)=>{for(var _=0,P="";!(_>=p/4);){var F=_e[d+4*_>>2];if(F==0)break;++_,65536<=F?(F-=65536,P+=String.fromCharCode(55296|F>>10,56320|F&1023)):P+=String.fromCharCode(F)}return P},Z=(d,p,_)=>{if(_===void 0&&(_=2147483647),4>_)return 0;var P=p;_=P+_-4;for(var F=0;F<d.length;++F){var L=d.charCodeAt(F);if(55296<=L&&57343>=L){var ne=d.charCodeAt(++F);L=65536+((L&1023)<<10)|ne&1023}if(_e[p>>2]=L,p+=4,p+4>_)break}return _e[p>>2]=0,p-P},H=d=>{for(var p=0,_=0;_<d.length;++_){var P=d.charCodeAt(_);55296<=P&&57343>=P&&++_,p+=4}return p},Y={};function fe(d){var p=Y[d];return p===void 0?yn(d):p}var Te=[];function be(d){var p=Te.length;return Te.push(d),p}function Ke(d,p){for(var _=Array(d),P=0;P<d;++P)_[P]=lo(M[p+4*P>>2],"parameter "+P);return _}var Et=[],Vt=[],Gt={},lt=()=>{if(!Le){var d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:R||"./this.program"},p;for(p in Gt)Gt[p]===void 0?delete d[p]:d[p]=Gt[p];var _=[];for(p in d)_.push(`${p}=${d[p]}`);Le=_}return Le},Le,ft=d=>d%4===0&&(d%100!==0||d%400===0),On=[31,29,31,30,31,30,31,31,30,31,30,31],dn=[31,28,31,30,31,30,31,31,30,31,30,31],Un=(d,p,_,P)=>{function F(se,De,Fe){for(se=typeof se=="number"?se.toString():se||"";se.length<De;)se=Fe[0]+se;return se}function L(se,De){return F(se,De,"0")}function ne(se,De){function Fe(pt){return 0>pt?-1:0<pt?1:0}var dt;return(dt=Fe(se.getFullYear()-De.getFullYear()))===0&&(dt=Fe(se.getMonth()-De.getMonth()))===0&&(dt=Fe(se.getDate()-De.getDate())),dt}function pe(se){switch(se.getDay()){case 0:return new Date(se.getFullYear()-1,11,29);case 1:return se;case 2:return new Date(se.getFullYear(),0,3);case 3:return new Date(se.getFullYear(),0,2);case 4:return new Date(se.getFullYear(),0,1);case 5:return new Date(se.getFullYear()-1,11,31);case 6:return new Date(se.getFullYear()-1,11,30)}}function ke(se){var De=se.ca;for(se=new Date(new Date(se.da+1900,0,1).getTime());0<De;){var Fe=se.getMonth(),dt=(ft(se.getFullYear())?On:dn)[Fe];if(De>dt-se.getDate())De-=dt-se.getDate()+1,se.setDate(1),11>Fe?se.setMonth(Fe+1):(se.setMonth(0),se.setFullYear(se.getFullYear()+1));else{se.setDate(se.getDate()+De);break}}return Fe=new Date(se.getFullYear()+1,0,4),De=pe(new Date(se.getFullYear(),0,4)),Fe=pe(Fe),0>=ne(De,se)?0>=ne(Fe,se)?se.getFullYear()+1:se.getFullYear():se.getFullYear()-1}var ue=_e[P+40>>2];P={Ec:_e[P>>2],Dc:_e[P+4>>2],Fa:_e[P+8>>2],Ta:_e[P+12>>2],Ga:_e[P+16>>2],da:_e[P+20>>2],S:_e[P+24>>2],ca:_e[P+28>>2],Rc:_e[P+32>>2],Cc:_e[P+36>>2],Fc:ue&&ue?bi(xe,ue):""},_=_?bi(xe,_):"",ue={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var Ue in ue)_=_.replace(new RegExp(Ue,"g"),ue[Ue]);var We="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ge="January February March April May June July August September October November December".split(" ");ue={"%a":se=>We[se.S].substring(0,3),"%A":se=>We[se.S],"%b":se=>Ge[se.Ga].substring(0,3),"%B":se=>Ge[se.Ga],"%C":se=>L((se.da+1900)/100|0,2),"%d":se=>L(se.Ta,2),"%e":se=>F(se.Ta,2," "),"%g":se=>ke(se).toString().substring(2),"%G":se=>ke(se),"%H":se=>L(se.Fa,2),"%I":se=>(se=se.Fa,se==0?se=12:12<se&&(se-=12),L(se,2)),"%j":se=>{for(var De=0,Fe=0;Fe<=se.Ga-1;De+=(ft(se.da+1900)?On:dn)[Fe++]);return L(se.Ta+De,3)},"%m":se=>L(se.Ga+1,2),"%M":se=>L(se.Dc,2),"%n":()=>`
`,"%p":se=>0<=se.Fa&&12>se.Fa?"AM":"PM","%S":se=>L(se.Ec,2),"%t":()=>"	","%u":se=>se.S||7,"%U":se=>L(Math.floor((se.ca+7-se.S)/7),2),"%V":se=>{var De=Math.floor((se.ca+7-(se.S+6)%7)/7);if(2>=(se.S+371-se.ca-2)%7&&De++,De)De==53&&(Fe=(se.S+371-se.ca)%7,Fe==4||Fe==3&&ft(se.da)||(De=1));else{De=52;var Fe=(se.S+7-se.ca-1)%7;(Fe==4||Fe==5&&ft(se.da%400-1))&&De++}return L(De,2)},"%w":se=>se.S,"%W":se=>L(Math.floor((se.ca+7-(se.S+6)%7)/7),2),"%y":se=>(se.da+1900).toString().substring(2),"%Y":se=>se.da+1900,"%z":se=>{se=se.Cc;var De=0<=se;return se=Math.abs(se)/60,(De?"+":"-")+("0000"+(se/60*100+se%60)).slice(-4)},"%Z":se=>se.Fc,"%%":()=>"%"},_=_.replace(/%%/g,"\0\0");for(Ue in ue)_.includes(Ue)&&(_=_.replace(new RegExp(Ue,"g"),ue[Ue](P)));return _=_.replace(/\0\0/g,"%"),Ue=$l(_,!1),Ue.length>p?0:(te.set(Ue,d),Ue.length-1)};function An(d,p,_,P){d||(d=this),this.parent=d,this.V=d.V,this.xa=null,this.id=Ds++,this.name=p,this.mode=_,this.j={},this.m={},this.ma=P}Object.defineProperties(An.prototype,{read:{get:function(){return(this.mode&365)===365},set:function(d){d?this.mode|=365:this.mode&=-366}},write:{get:function(){return(this.mode&146)===146},set:function(d){d?this.mode|=146:this.mode&=-147}}}),Ns(),ua=Array(4096),fa(Dt,"/"),oi("/tmp",16895,0),oi("/home",16895,0),oi("/home/web_user",16895,0),(()=>{oi("/dev",16895,0),Ul(259,{read:()=>0,write:(P,F,L,ne)=>ne}),Oo("/dev/null",259),br(1280,Si),br(1536,Wa),Oo("/dev/tty",1280),Oo("/dev/tty1",1536);var d=new Uint8Array(1024),p=0,_=()=>(p===0&&(p=Ba(d).byteLength),d[--p]);Tn("random",_),Tn("urandom",_),oi("/dev/shm",16895,0),oi("/dev/shm/tmp",16895,0)})(),(()=>{oi("/proc",16895,0);var d=oi("/proc/self",16895,0);oi("/proc/self/fd",16895,0),fa({V:()=>{var p=Va(d,"fd",16895,73);return p.j={ka:(_,P)=>{var F=ii(+P);return _={parent:null,V:{nb:"fake"},j:{na:()=>F.path}},_.parent=_}},p}},"/proc/self/fd")})(),Object.assign(Xa.prototype,{get(d){return this.M[d]},has(d){return this.M[d]!==void 0},qa(d){var p=this.hb.pop()||this.M.length;return this.M[p]=d,p},ec(d){this.M[d]=void 0,this.hb.push(d)}}),Vs=g.BindingError=class extends Error{constructor(d){super(d),this.name="BindingError"}},Ir.M.push({value:void 0},{value:null},{value:!0},{value:!1}),Ir.h=Ir.M.length,g.count_emval_handles=function(){for(var d=0,p=Ir.h;p<Ir.M.length;++p)Ir.M[p]!==void 0&&++d;return d},qn=g.PureVirtualError=Ln("PureVirtualError");for(var Zn=Array(256),ut=0;256>ut;++ut)Zn[ut]=String.fromCharCode(ut);da=Zn,g.getInheritedInstanceCount=function(){return Object.keys(ai).length},g.getLiveInheritedInstances=function(){var d=[],p;for(p in ai)ai.hasOwnProperty(p)&&d.push(ai[p]);return d},g.flushPendingDeletes=Xi,g.setDelayFunction=function(d){Io=d,ao.length&&Io&&Io(Xi)},Nu=g.InternalError=class extends Error{constructor(d){super(d),this.name="InternalError"}},Ri.prototype.isAliasOf=function(d){if(!(this instanceof Ri&&d instanceof Ri))return!1;var p=this.g.u.i,_=this.g.o,P=d.g.u.i;for(d=d.g.o;p.A;)_=p.oa(_),p=p.A;for(;P.A;)d=P.oa(d),P=P.A;return p===P&&_===d},Ri.prototype.clone=function(){if(this.g.o||ya(this),this.g.ia)return this.g.count.value+=1,this;var d=Uo,p=Object,_=p.create,P=Object.getPrototypeOf(this),F=this.g;return d=d(_.call(p,P,{g:{value:{count:F.count,fa:F.fa,ia:F.ia,o:F.o,u:F.u,G:F.G,L:F.L}}})),d.g.count.value+=1,d.g.fa=!1,d},Ri.prototype.delete=function(){this.g.o||ya(this),this.g.fa&&!this.g.ia&&Ot("Object already scheduled for deletion"),pa(this),Ml(this.g),this.g.ia||(this.g.G=void 0,this.g.o=void 0)},Ri.prototype.isDeleted=function(){return!this.g.o},Ri.prototype.deleteLater=function(){return this.g.o||ya(this),this.g.fa&&!this.g.ia&&Ot("Object already scheduled for deletion"),ao.push(this),ao.length===1&&Io&&Io(Xi),this.g.fa=!0,this},li.prototype.$b=function(d){return this.sb&&(d=this.sb(d)),d},li.prototype.bb=function(d){this.X&&this.X(d)},li.prototype.argPackAdvance=8,li.prototype.readValueFromPointer=Qn,li.prototype.deleteObject=function(d){d!==null&&d.delete()},li.prototype.fromWireType=function(d){function p(){return this.va?Lr(this.i.O,{u:this.vc,o:_,L:this,G:d}):Lr(this.i.O,{u:this,o:d})}var _=this.$b(d);if(!_)return this.bb(d),null;var P=Jf(this.i,_);if(P!==void 0)return P.g.count.value===0?(P.g.o=_,P.g.G=d,P.clone()):(P=P.clone(),this.bb(d),P);if(P=this.i.Zb(_),P=Lo[P],!P)return p.call(this);P=this.ua?P.Nb:P.pointerType;var F=ga(_,this.i,P.i);return F===null?p.call(this):this.va?Lr(P.i.O,{u:P,o:F,L:this,G:d}):Lr(P.i.O,{u:P,o:F})},Bl=g.UnboundTypeError=Ln("UnboundTypeError");var Wr={__syscall_fcntl64:function(d,p,_){Sr=_;try{var P=ii(d);switch(p){case 0:var F=so();return 0>F?-28:Ll(P,F).Z;case 1:case 2:return 0;case 3:return P.flags;case 4:return F=so(),P.flags|=F,0;case 5:return F=so(),$e[F+0>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return _e[dr()>>2]=28,-1;default:return-28}}catch(L){if(typeof si>"u"||L.name!=="ErrnoError")throw L;return-L.Y}},__syscall_fstat64:function(d,p){try{e:{var _=ii(d).path;try{var P=$o(_,{Ma:!0}).node;if(!P)throw new Qe(44);if(!P.j.N)throw new Qe(63);var F=P.j.N(P)}catch(ue){if(ue&&ue.node&&Rn(_)!==Rn(Bu(ue.node))){var L=-54;break e}throw ue}_e[p>>2]=F.Sb,_e[p+4>>2]=F.mode,M[p+8>>2]=F.uc,_e[p+12>>2]=F.uid,_e[p+16>>2]=F.dc,_e[p+20>>2]=F.ma,tt=[F.size>>>0,(et=F.size,1<=+Math.abs(et)?0<et?+Math.floor(et/4294967296)>>>0:~~+Math.ceil((et-+(~~et>>>0))/4294967296)>>>0:0)],_e[p+24>>2]=tt[0],_e[p+28>>2]=tt[1],_e[p+32>>2]=4096,_e[p+36>>2]=F.Mb;var ne=F.Kb.getTime(),pe=F.rc.getTime(),ke=F.Pb.getTime();tt=[Math.floor(ne/1e3)>>>0,(et=Math.floor(ne/1e3),1<=+Math.abs(et)?0<et?+Math.floor(et/4294967296)>>>0:~~+Math.ceil((et-+(~~et>>>0))/4294967296)>>>0:0)],_e[p+40>>2]=tt[0],_e[p+44>>2]=tt[1],M[p+48>>2]=ne%1e3*1e3,tt=[Math.floor(pe/1e3)>>>0,(et=Math.floor(pe/1e3),1<=+Math.abs(et)?0<et?+Math.floor(et/4294967296)>>>0:~~+Math.ceil((et-+(~~et>>>0))/4294967296)>>>0:0)],_e[p+56>>2]=tt[0],_e[p+60>>2]=tt[1],M[p+64>>2]=pe%1e3*1e3,tt=[Math.floor(ke/1e3)>>>0,(et=Math.floor(ke/1e3),1<=+Math.abs(et)?0<et?+Math.floor(et/4294967296)>>>0:~~+Math.ceil((et-+(~~et>>>0))/4294967296)>>>0:0)],_e[p+72>>2]=tt[0],_e[p+76>>2]=tt[1],M[p+80>>2]=ke%1e3*1e3,tt=[F.kb>>>0,(et=F.kb,1<=+Math.abs(et)?0<et?+Math.floor(et/4294967296)>>>0:~~+Math.ceil((et-+(~~et>>>0))/4294967296)>>>0:0)],_e[p+88>>2]=tt[0],_e[p+92>>2]=tt[1],L=0}return L}catch(ue){if(typeof si>"u"||ue.name!=="ErrnoError")throw ue;return-ue.Y}},__syscall_ioctl:function(d,p,_){Sr=_;try{var P=ii(d);switch(p){case 21509:return P.s?0:-59;case 21505:if(!P.s)return-59;if(P.s.W.ic){p=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var F=so();_e[F>>2]=25856,_e[F+4>>2]=5,_e[F+8>>2]=191,_e[F+12>>2]=35387;for(var L=0;32>L;L++)te[F+L+17>>0]=p[L]||0}return 0;case 21510:case 21511:case 21512:return P.s?0:-59;case 21506:case 21507:case 21508:if(!P.s)return-59;if(P.s.W.jc)for(F=so(),p=[],L=0;32>L;L++)p.push(te[F+L+17>>0]);return 0;case 21519:return P.s?(F=so(),_e[F>>2]=0):-59;case 21520:return P.s?-28:-59;case 21531:if(F=so(),!P.m.hc)throw new Qe(59);return P.m.hc(P,p,F);case 21523:return P.s?(P.s.W.kc&&(L=[24,80],F=so(),$e[F>>1]=L[0],$e[F+2>>1]=L[1]),0):-59;case 21524:return P.s?0:-59;case 21515:return P.s?0:-59;default:return-28}}catch(ne){if(typeof si>"u"||ne.name!=="ErrnoError")throw ne;return-ne.Y}},__syscall_openat:function(d,p,_,P){Sr=P;try{p=p?bi(xe,p):"";var F=p;if(F.charAt(0)==="/")p=F;else{var L=d===-100?"/":ii(d).path;if(F.length==0)throw new Qe(44);p=Rn(L+"/"+F)}var ne=P?so():0;return as(p,_,ne).Z}catch(pe){if(typeof si>"u"||pe.name!=="ErrnoError")throw pe;return-pe.Y}},_embind_create_inheriting_constructor:function(d,p,_){d=yn(d),p=lo(p,"wrapper"),_=Ei(_);var P=[].slice,F=p.i,L=F.O,ne=F.A.O,pe=F.A.constructor;d=ki(d,function(){F.A.rb.forEach(function(ue){if(this[ue]===ne[ue])throw new qn(`Pure virtual function ${ue} must be implemented in JavaScript`)}.bind(this)),Object.defineProperty(this,"__parent",{value:L}),this.__construct.apply(this,P.call(arguments))}),L.__construct=function(){this===L&&Ot("Pass correct 'this' to __construct");var ue=pe.implement.apply(void 0,[this].concat(P.call(arguments)));pa(ue);var Ue=ue.g;ue.notifyOnDestruction(),Ue.ia=!0,Object.defineProperties(this,{g:{value:Ue}}),Uo(this),ue=Ue.o,ue=ha(F,ue),ai.hasOwnProperty(ue)?Ot(`Tried to register registered instance: ${ue}`):ai[ue]=this},L.__destruct=function(){this===L&&Ot("Pass correct 'this' to __destruct"),pa(this);var ue=this.g.o;ue=ha(F,ue),ai.hasOwnProperty(ue)?delete ai[ue]:Ot(`Tried to unregister unregistered instance: ${ue}`)},d.prototype=Object.create(L);for(var ke in _)d.prototype[ke]=_[ke];return qr(d)},_embind_finalize_value_object:function(d){var p=ma[d];delete ma[d];var _=p.Qa,P=p.X,F=p.fb,L=F.map(ne=>ne.cc).concat(F.map(ne=>ne.zc));zt([d],L,ne=>{var pe={};return F.forEach((ke,ue)=>{var Ue=ne[ue],We=ke.ac,Ge=ke.bc,se=ne[ue+F.length],De=ke.yc,Fe=ke.Ac;pe[ke.Xb]={read:dt=>Ue.fromWireType(We(Ge,dt)),write:(dt,pt)=>{var X=[];De(Fe,dt,se.toWireType(X,pt)),va(X)}}}),[{name:p.name,fromWireType:function(ke){var ue={},Ue;for(Ue in pe)ue[Ue]=pe[Ue].read(ke);return P(ke),ue},toWireType:function(ke,ue){for(var Ue in pe)if(!(Ue in ue))throw new TypeError(`Missing field: "${Ue}"`);var We=_();for(Ue in pe)pe[Ue].write(We,ue[Ue]);return ke!==null&&ke.push(P,We),We},argPackAdvance:8,readValueFromPointer:Qn,K:P}]})},_embind_register_bigint:function(){},_embind_register_bool:function(d,p,_,P,F){var L=an(_);p=yn(p),Ai(d,{name:p,fromWireType:function(ne){return!!ne},toWireType:function(ne,pe){return pe?P:F},argPackAdvance:8,readValueFromPointer:function(ne){if(_===1)var pe=te;else if(_===2)pe=$e;else if(_===4)pe=_e;else throw new TypeError("Unknown boolean type size: "+p);return this.fromWireType(pe[ne>>L])},K:null})},_embind_register_class:function(d,p,_,P,F,L,ne,pe,ke,ue,Ue,We,Ge){Ue=yn(Ue),L=fr(F,L),pe&&(pe=fr(ne,pe)),ue&&(ue=fr(ke,ue)),Ge=fr(We,Ge);var se=Ya(Ue);Qa(se,function(){ui(`Cannot construct ${Ue} due to unbound types`,[P])}),zt([d,p,_],P?[P]:[],function(De){if(De=De[0],P)var Fe=De.i,dt=Fe.O;else dt=Ri.prototype;De=ki(se,function(){if(Object.getPrototypeOf(this)!==pt)throw new Vs("Use 'new' to construct "+Ue);if(X.aa===void 0)throw new Vs(Ue+" has no accessible constructor");var me=X.aa[arguments.length];if(me===void 0)throw new Vs(`Tried to invoke ctor of ${Ue} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(X.aa).toString()}) parameters instead!`);return me.apply(this,arguments)});var pt=Object.create(dt,{constructor:{value:De}});De.prototype=pt;var X=new Ja(Ue,De,pt,Ge,Fe,L,pe,ue);X.A&&(X.A.pa===void 0&&(X.A.pa=[]),X.A.pa.push(X)),Fe=new li(Ue,X,!0,!1),dt=new li(Ue+"*",X,!1,!1);var ve=new li(Ue+" const*",X,!1,!0);return Lo[d]={pointerType:dt,Nb:ve},Fl(se,De),[Fe,dt,ve]})},_embind_register_class_class_function:function(d,p,_,P,F,L,ne){var pe=mt(_,P);p=yn(p),L=fr(F,L),zt([],[d],function(ke){function ue(){ui(`Cannot call ${Ue} due to unbound types`,pe)}ke=ke[0];var Ue=`${ke.name}.${p}`;p.startsWith("@@")&&(p=Symbol[p.substring(2)]);var We=ke.i.constructor;return We[p]===void 0?(ue.ea=_-1,We[p]=ue):(Ki(We,p,Ue),We[p].B[_-1]=ue),zt([],pe,function(Ge){if(Ge=xa(Ue,[Ge[0],null].concat(Ge.slice(1)),null,L,ne),We[p].B===void 0?(Ge.ea=_-1,We[p]=Ge):We[p].B[_-1]=Ge,ke.i.pa)for(const se of ke.i.pa)se.constructor.hasOwnProperty(p)||(se.constructor[p]=Ge);return[]}),[]})},_embind_register_class_class_property:function(d,p,_,P,F,L,ne,pe){p=yn(p),L=fr(F,L),zt([],[d],function(ke){ke=ke[0];var ue=`${ke.name}.${p}`,Ue={get(){ui(`Cannot access ${ue} due to unbound types`,[_])},enumerable:!0,configurable:!0};return Ue.set=pe?()=>{ui(`Cannot access ${ue} due to unbound types`,[_])}:()=>{Ot(`${ue} is a read-only property`)},Object.defineProperty(ke.i.constructor,p,Ue),zt([],[_],function(We){We=We[0];var Ge={get(){return We.fromWireType(L(P))},enumerable:!0};return pe&&(pe=fr(ne,pe),Ge.set=se=>{var De=[];pe(P,We.toWireType(De,se)),va(De)}),Object.defineProperty(ke.i.constructor,p,Ge),[]}),[]})},_embind_register_class_constructor:function(d,p,_,P,F,L){var ne=mt(p,_);F=fr(P,F),zt([],[d],function(pe){pe=pe[0];var ke=`constructor ${pe.name}`;if(pe.i.aa===void 0&&(pe.i.aa=[]),pe.i.aa[p-1]!==void 0)throw new Vs(`Cannot register multiple constructors with identical number of parameters (${p-1}) for class '${pe.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return pe.i.aa[p-1]=()=>{ui(`Cannot construct ${pe.name} due to unbound types`,ne)},zt([],ne,function(ue){return ue.splice(1,0,null),pe.i.aa[p-1]=xa(ke,ue,null,F,L),[]}),[]})},_embind_register_class_function:function(d,p,_,P,F,L,ne,pe){var ke=mt(_,P);p=yn(p),L=fr(F,L),zt([],[d],function(ue){function Ue(){ui(`Cannot call ${We} due to unbound types`,ke)}ue=ue[0];var We=`${ue.name}.${p}`;p.startsWith("@@")&&(p=Symbol[p.substring(2)]),pe&&ue.i.rb.push(p);var Ge=ue.i.O,se=Ge[p];return se===void 0||se.B===void 0&&se.className!==ue.name&&se.ea===_-2?(Ue.ea=_-2,Ue.className=ue.name,Ge[p]=Ue):(Ki(Ge,p,We),Ge[p].B[_-2]=Ue),zt([],ke,function(De){return De=xa(We,De,ue,L,ne),Ge[p].B===void 0?(De.ea=_-2,Ge[p]=De):Ge[p].B[_-2]=De,[]}),[]})},_embind_register_class_property:function(d,p,_,P,F,L,ne,pe,ke,ue){p=yn(p),F=fr(P,F),zt([],[d],function(Ue){Ue=Ue[0];var We=`${Ue.name}.${p}`,Ge={get(){ui(`Cannot access ${We} due to unbound types`,[_,ne])},enumerable:!0,configurable:!0};return Ge.set=ke?()=>{ui(`Cannot access ${We} due to unbound types`,[_,ne])}:()=>{Ot(We+" is a read-only property")},Object.defineProperty(Ue.i.O,p,Ge),zt([],ke?[_,ne]:[_],function(se){var De=se[0],Fe={get(){var pt=Hu(this,Ue,We+" getter");return De.fromWireType(F(L,pt))},enumerable:!0};if(ke){ke=fr(pe,ke);var dt=se[1];Fe.set=function(pt){var X=Hu(this,Ue,We+" setter"),ve=[];ke(ue,X,dt.toWireType(ve,pt)),va(ve)}}return Object.defineProperty(Ue.i.O,p,Fe),[]}),[]})},_embind_register_emval:function(d,p){p=yn(p),Ai(d,{name:p,fromWireType:function(_){var P=Ei(_);return Ur(_),P},toWireType:function(_,P){return qr(P)},argPackAdvance:8,readValueFromPointer:Qn,K:null})},_embind_register_enum:function(d,p,_,P){function F(){}_=an(_),p=yn(p),F.values={},Ai(d,{name:p,constructor:F,fromWireType:function(L){return this.constructor.values[L]},toWireType:function(L,ne){return ne.value},argPackAdvance:8,readValueFromPointer:Nl(p,_,P),K:null}),Qa(p,F)},_embind_register_enum_value:function(d,p,_){var P=lo(d,"enum");p=yn(p),d=P.constructor,P=Object.create(P.constructor.prototype,{value:{value:_},constructor:{value:ki(`${P.name}_${p}`,function(){})}}),d.values[_]=P,d[p]=P},_embind_register_float:function(d,p,_){_=an(_),p=yn(p),Ai(d,{name:p,fromWireType:function(P){return P},toWireType:function(P,F){return F},argPackAdvance:8,readValueFromPointer:Mo(p,_),K:null})},_embind_register_function:function(d,p,_,P,F,L){var ne=mt(p,_);d=yn(d),F=fr(P,F),Qa(d,function(){ui(`Cannot call ${d} due to unbound types`,ne)},p-1),zt([],ne,function(pe){return Fl(d,xa(d,[pe[0],null].concat(pe.slice(1)),null,F,L),p-1),[]})},_embind_register_integer:function(d,p,_,P,F){p=yn(p),F===-1&&(F=4294967295),F=an(_);var L=pe=>pe;if(P===0){var ne=32-8*_;L=pe=>pe<<ne>>>ne}_=p.includes("unsigned")?function(pe,ke){return ke>>>0}:function(pe,ke){return ke},Ai(d,{name:p,fromWireType:L,toWireType:_,argPackAdvance:8,readValueFromPointer:Hl(p,F,P!==0),K:null})},_embind_register_memory_view:function(d,p,_){function P(L){L>>=2;var ne=M;return new F(ne.buffer,ne[L+1],ne[L])}var F=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][p];_=yn(_),Ai(d,{name:_,fromWireType:P,argPackAdvance:8,readValueFromPointer:P},{fc:!0})},_embind_register_std_string:function(d,p){p=yn(p);var _=p==="std::string";Ai(d,{name:p,fromWireType:function(P){var F=M[P>>2],L=P+4;if(_)for(var ne=L,pe=0;pe<=F;++pe){var ke=L+pe;if(pe==F||xe[ke]==0){if(ne=ne?bi(xe,ne,ke-ne):"",ue===void 0)var ue=ne;else ue+=String.fromCharCode(0),ue+=ne;ne=ke+1}}else{for(ue=Array(F),pe=0;pe<F;++pe)ue[pe]=String.fromCharCode(xe[L+pe]);ue=ue.join("")}return Nt(P),ue},toWireType:function(P,F){F instanceof ArrayBuffer&&(F=new Uint8Array(F));var L=typeof F=="string";L||F instanceof Uint8Array||F instanceof Uint8ClampedArray||F instanceof Int8Array||Ot("Cannot pass non-string to std::string");var ne=_&&L?Po(F):F.length,pe=_t(4+ne+1),ke=pe+4;if(M[pe>>2]=ne,_&&L)Pl(F,xe,ke,ne+1);else if(L)for(L=0;L<ne;++L){var ue=F.charCodeAt(L);255<ue&&(Nt(ke),Ot("String has UTF-16 code units that do not fit in 8 bits")),xe[ke+L]=ue}else for(L=0;L<ne;++L)xe[ke+L]=F[L];return P!==null&&P.push(Nt,pe),pe},argPackAdvance:8,readValueFromPointer:Qn,K:function(P){Nt(P)}})},_embind_register_std_wstring:function(d,p,_){if(_=yn(_),p===2)var P=xn,F=us,L=ye,ne=()=>Ee,pe=1;else p===4&&(P=z,F=Z,L=H,ne=()=>M,pe=2);Ai(d,{name:_,fromWireType:function(ke){for(var ue=M[ke>>2],Ue=ne(),We,Ge=ke+4,se=0;se<=ue;++se){var De=ke+4+se*p;(se==ue||Ue[De>>pe]==0)&&(Ge=P(Ge,De-Ge),We===void 0?We=Ge:(We+=String.fromCharCode(0),We+=Ge),Ge=De+p)}return Nt(ke),We},toWireType:function(ke,ue){typeof ue!="string"&&Ot(`Cannot pass non-string to C++ string type ${_}`);var Ue=L(ue),We=_t(4+Ue+p);return M[We>>2]=Ue>>pe,F(ue,We+4,Ue+p),ke!==null&&ke.push(Nt,We),We},argPackAdvance:8,readValueFromPointer:Qn,K:function(ke){Nt(ke)}})},_embind_register_value_object:function(d,p,_,P,F,L){ma[d]={name:yn(p),Qa:fr(_,P),X:fr(F,L),fb:[]}},_embind_register_value_object_field:function(d,p,_,P,F,L,ne,pe,ke,ue){ma[d].fb.push({Xb:yn(p),cc:_,ac:fr(P,F),bc:L,zc:ne,yc:fr(pe,ke),Ac:ue})},_embind_register_void:function(d,p){p=yn(p),Ai(d,{mc:!0,name:p,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},_emval_as:function(d,p,_){d=Ei(d),p=lo(p,"emval::as");var P=[],F=qr(P);return M[_>>2]=F,p.toWireType(P,d)},_emval_call_method:function(d,p,_,P,F){d=Te[d],p=Ei(p),_=fe(_);var L=[];return M[P>>2]=qr(L),d(p,_,L,F)},_emval_call_void_method:function(d,p,_,P){d=Te[d],p=Ei(p),_=fe(_),d(p,_,null,P)},_emval_decref:Ur,_emval_get_method_caller:function(d,p){var _=Ke(d,p),P=_[0];p=P.name+"_$"+_.slice(1).map(function(ne){return ne.name}).join("_")+"$";var F=Et[p];if(F!==void 0)return F;var L=Array(d-1);return F=be((ne,pe,ke,ue)=>{for(var Ue=0,We=0;We<d-1;++We)L[We]=_[We+1].readValueFromPointer(ue+Ue),Ue+=_[We+1].argPackAdvance;for(ne=ne[pe].apply(ne,L),We=0;We<d-1;++We)_[We+1].Rb&&_[We+1].Rb(L[We]);if(!P.mc)return P.toWireType(ke,ne)}),Et[p]=F},_emval_get_module_property:function(d){return d=fe(d),qr(g[d])},_emval_get_property:function(d,p){return d=Ei(d),p=Ei(p),qr(d[p])},_emval_incref:function(d){4<d&&(Ir.get(d).ub+=1)},_emval_new_cstring:function(d){return qr(fe(d))},_emval_new_object:function(){return qr({})},_emval_run_destructors:function(d){var p=Ei(d);va(p),Ur(d)},_emval_set_property:function(d,p,_){d=Ei(d),p=Ei(p),_=Ei(_),d[p]=_},_emval_take_value:function(d,p){return d=lo(d,"_emval_take_value"),d=d.readValueFromPointer(p),qr(d)},abort:()=>{Ne("")},emscripten_asm_const_int:(d,p,_)=>{Vt.length=0;var P;for(_>>=2;P=xe[p++];)_+=P!=105&_,Vt.push(P==105?_e[_]:T[_++>>1]),++_;return Jt[d].apply(null,Vt)},emscripten_memcpy_big:(d,p,_)=>xe.copyWithin(d,p,p+_),emscripten_resize_heap:d=>{var p=xe.length;if(d>>>=0,2147483648<d)return!1;for(var _=1;4>=_;_*=2){var P=p*(1+.2/_);P=Math.min(P,d+100663296);var F=Math;P=Math.max(d,P);e:{F=F.min.call(F,2147483648,P+(65536-P%65536)%65536)-Ce.buffer.byteLength+65535>>>16;try{Ce.grow(F),V();var L=1;break e}catch{}L=void 0}if(L)return!0}return!1},environ_get:(d,p)=>{var _=0;return lt().forEach(function(P,F){var L=p+_;for(F=M[d+4*F>>2]=L,L=0;L<P.length;++L)te[F++>>0]=P.charCodeAt(L);te[F>>0]=0,_+=P.length+1}),0},environ_sizes_get:(d,p)=>{var _=lt();M[d>>2]=_.length;var P=0;return _.forEach(function(F){P+=F.length+1}),M[p>>2]=P,0},fd_close:function(d){try{var p=ii(d);if(p.Z===null)throw new Qe(8);p.Na&&(p.Na=null);try{p.m.close&&p.m.close(p)}catch(_){throw _}finally{ri[p.Z]=null}return p.Z=null,0}catch(_){if(typeof si>"u"||_.name!=="ErrnoError")throw _;return _.Y}},fd_read:function(d,p,_,P){try{e:{var F=ii(d);d=p;for(var L,ne=p=0;ne<_;ne++){var pe=M[d>>2],ke=M[d+4>>2];d+=8;var ue=F,Ue=pe,We=ke,Ge=L,se=te;if(0>We||0>Ge)throw new Qe(28);if(ue.Z===null)throw new Qe(8);if((ue.flags&2097155)===1)throw new Qe(8);if((ue.node.mode&61440)===16384)throw new Qe(31);if(!ue.m.read)throw new Qe(28);var De=typeof Ge<"u";if(!De)Ge=ue.position;else if(!ue.seekable)throw new Qe(70);var Fe=ue.m.read(ue,se,Ue,We,Ge);De||(ue.position+=Fe);var dt=Fe;if(0>dt){var pt=-1;break e}if(p+=dt,dt<ke)break;typeof L<"u"&&(L+=dt)}pt=p}return M[P>>2]=pt,0}catch(X){if(typeof si>"u"||X.name!=="ErrnoError")throw X;return X.Y}},fd_seek:function(d,p,_,P,F){p=_+2097152>>>0<4194305-!!p?(p>>>0)+4294967296*_:NaN;try{if(isNaN(p))return 61;var L=ii(d);return Bs(L,p,P),tt=[L.position>>>0,(et=L.position,1<=+Math.abs(et)?0<et?+Math.floor(et/4294967296)>>>0:~~+Math.ceil((et-+(~~et>>>0))/4294967296)>>>0:0)],_e[F>>2]=tt[0],_e[F+4>>2]=tt[1],L.Na&&p===0&&P===0&&(L.Na=null),0}catch(ne){if(typeof si>"u"||ne.name!=="ErrnoError")throw ne;return ne.Y}},fd_write:function(d,p,_,P){try{e:{var F=ii(d);d=p;for(var L,ne=p=0;ne<_;ne++){var pe=M[d>>2],ke=M[d+4>>2];d+=8;var ue=F,Ue=pe,We=ke,Ge=L,se=te;if(0>We||0>Ge)throw new Qe(28);if(ue.Z===null)throw new Qe(8);if(!(ue.flags&2097155))throw new Qe(8);if((ue.node.mode&61440)===16384)throw new Qe(31);if(!ue.m.write)throw new Qe(28);ue.seekable&&ue.flags&1024&&Bs(ue,0,2);var De=typeof Ge<"u";if(!De)Ge=ue.position;else if(!ue.seekable)throw new Qe(70);var Fe=ue.m.write(ue,se,Ue,We,Ge,void 0);De||(ue.position+=Fe);var dt=Fe;if(0>dt){var pt=-1;break e}p+=dt,typeof L<"u"&&(L+=dt)}pt=p}return M[P>>2]=pt,0}catch(X){if(typeof si>"u"||X.name!=="ErrnoError")throw X;return X.Y}},strftime_l:(d,p,_,P)=>Un(d,p,_,P)};(function(){function d(_){if(ce=_=_.exports,Ce=ce.memory,V(),N=ce.__indirect_function_table,oe.unshift(ce.__wasm_call_ctors),Pe--,g.monitorRunDependencies&&g.monitorRunDependencies(Pe),Pe==0&&Xe){var P=Xe;Xe=null,P()}return _}var p={env:Wr,wasi_snapshot_preview1:Wr};if(Pe++,g.monitorRunDependencies&&g.monitorRunDependencies(Pe),g.instantiateWasm)try{return g.instantiateWasm(p,d)}catch(_){le("Module.instantiateWasm callback failed with error: "+_),w(_)}return Nn(p,function(_){d(_.instance)}).catch(w),{}})();var Nt=d=>(Nt=ce.free)(d),_t=d=>(_t=ce.malloc)(d),Cr=g._ma_device__on_notification_unlocked=d=>(Cr=g._ma_device__on_notification_unlocked=ce.ma_device__on_notification_unlocked)(d);g._ma_malloc_emscripten=(d,p)=>(g._ma_malloc_emscripten=ce.ma_malloc_emscripten)(d,p),g._ma_free_emscripten=(d,p)=>(g._ma_free_emscripten=ce.ma_free_emscripten)(d,p);var Hr=g._ma_device_process_pcm_frames_capture__webaudio=(d,p,_)=>(Hr=g._ma_device_process_pcm_frames_capture__webaudio=ce.ma_device_process_pcm_frames_capture__webaudio)(d,p,_),ht=g._ma_device_process_pcm_frames_playback__webaudio=(d,p,_)=>(ht=g._ma_device_process_pcm_frames_playback__webaudio=ce.ma_device_process_pcm_frames_playback__webaudio)(d,p,_),dr=()=>(dr=ce.__errno_location)(),Tt=d=>(Tt=ce.__getTypeName)(d);g.__embind_initialize_bindings=()=>(g.__embind_initialize_bindings=ce._embind_initialize_bindings)(),g.dynCall_iiiji=(d,p,_,P,F,L)=>(g.dynCall_iiiji=ce.dynCall_iiiji)(d,p,_,P,F,L),g.dynCall_iiji=(d,p,_,P,F)=>(g.dynCall_iiji=ce.dynCall_iiji)(d,p,_,P,F),g.dynCall_jiji=(d,p,_,P,F)=>(g.dynCall_jiji=ce.dynCall_jiji)(d,p,_,P,F),g.dynCall_iij=(d,p,_,P)=>(g.dynCall_iij=ce.dynCall_iij)(d,p,_,P),g.dynCall_jii=(d,p,_)=>(g.dynCall_jii=ce.dynCall_jii)(d,p,_),g.dynCall_viijii=(d,p,_,P,F,L,ne)=>(g.dynCall_viijii=ce.dynCall_viijii)(d,p,_,P,F,L,ne),g.dynCall_iiiiij=(d,p,_,P,F,L,ne)=>(g.dynCall_iiiiij=ce.dynCall_iiiiij)(d,p,_,P,F,L,ne),g.dynCall_iiiiijj=(d,p,_,P,F,L,ne,pe,ke)=>(g.dynCall_iiiiijj=ce.dynCall_iiiiijj)(d,p,_,P,F,L,ne,pe,ke),g.dynCall_iiiiiijj=(d,p,_,P,F,L,ne,pe,ke,ue)=>(g.dynCall_iiiiiijj=ce.dynCall_iiiiiijj)(d,p,_,P,F,L,ne,pe,ke,ue);var $i;Xe=function d(){$i||wn(),$i||(Xe=d)};function wn(){function d(){if(!$i&&($i=!0,g.calledRun=!0,!ie)){if(g.noFSInit||Ws||(Ws=!0,Ns(),g.stdin=g.stdin,g.stdout=g.stdout,g.stderr=g.stderr,g.stdin?Tn("stdin",g.stdin):jo("/dev/tty","/dev/stdin"),g.stdout?Tn("stdout",null,g.stdout):jo("/dev/tty","/dev/stdout"),g.stderr?Tn("stderr",null,g.stderr):jo("/dev/tty1","/dev/stderr"),as("/dev/stdin",0),as("/dev/stdout",1),as("/dev/stderr",1)),Ha=!1,Or(oe),S(g),g.onRuntimeInitialized&&g.onRuntimeInitialized(),g.postRun)for(typeof g.postRun=="function"&&(g.postRun=[g.postRun]);g.postRun.length;){var p=g.postRun.shift();Se.unshift(p)}Or(Se)}}if(!(0<Pe)){if(g.preRun)for(typeof g.preRun=="function"&&(g.preRun=[g.preRun]);g.preRun.length;)Oe();Or(he),0<Pe||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1),d()},1)):d())}}if(g.preInit)for(typeof g.preInit=="function"&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();return wn(),x.ready}})();const v=f},a=>{a.exports=JSON.parse(`{"name":"@rive-app/canvas","version":"2.15.2","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`)},(a,u,c)=>{c.r(u),c.d(u,{BLANK_URL:()=>v.BLANK_URL,registerTouchInteractions:()=>f.registerTouchInteractions,sanitizeUrl:()=>v.sanitizeUrl});var f=c(4),v=c(5)},(a,u,c)=>{c.r(u),c.d(u,{registerTouchInteractions:()=>b});var f=void 0,v=function(x,g){var S,w;return["touchstart","touchmove"].indexOf(x.type)>-1&&(!((S=x.touches)===null||S===void 0)&&S.length)?(g||x.preventDefault(),{clientX:x.touches[0].clientX,clientY:x.touches[0].clientY}):x.type==="touchend"&&(!((w=x.changedTouches)===null||w===void 0)&&w.length)?{clientX:x.changedTouches[0].clientX,clientY:x.changedTouches[0].clientY}:{clientX:x.clientX,clientY:x.clientY}},b=function(x){var g=x.canvas,S=x.artboard,w=x.stateMachines,j=w===void 0?[]:w,$=x.renderer,y=x.rive,E=x.fit,I=x.alignment,k=x.isTouchScrollEnabled,D=k===void 0?!1:k;if(!g||!j.length||!$||!y||!S||typeof window>"u")return null;var R=function(G){var q=G.currentTarget.getBoundingClientRect(),K=v(G,D),ee=K.clientX,ae=K.clientY;if(!(!ee&&!ae)){var le=ee-q.left,Re=ae-q.top,Ce=y.computeAlignment(E,I,{minX:0,minY:0,maxX:q.width,maxY:q.height},S.bounds),ce=new y.Mat2D;Ce.invert(ce);var ie=new y.Vec2D(le,Re),te=y.mapXY(ce,ie),xe=te.x(),$e=te.y();switch(te.delete(),ce.delete(),ie.delete(),Ce.delete(),G.type){case"mouseout":for(var Ee=0,_e=j;Ee<_e.length;Ee++){var M=_e[Ee];M.pointerMove(xe<0?xe-1e4:xe+1e4,$e<0?$e-1e4:$e+1e4)}break;case"touchmove":case"mouseover":case"mousemove":{for(var A=0,T=j;A<T.length;A++){var M=T[A];M.pointerMove(xe,$e)}break}case"touchstart":case"mousedown":{for(var V=0,N=j;V<N.length;V++){var M=N[V];M.pointerDown(xe,$e)}break}case"touchend":case"mouseup":{for(var he=0,oe=j;he<oe.length;he++){var M=oe[he];M.pointerUp(xe,$e)}break}}}},O=R.bind(f);return g.addEventListener("mouseover",O),g.addEventListener("mouseout",O),g.addEventListener("mousemove",O),g.addEventListener("mousedown",O),g.addEventListener("mouseup",O),g.addEventListener("touchmove",O),g.addEventListener("touchstart",O),g.addEventListener("touchend",O),function(){g.removeEventListener("mouseover",O),g.removeEventListener("mouseout",O),g.removeEventListener("mousemove",O),g.removeEventListener("mousedown",O),g.removeEventListener("mouseup",O),g.removeEventListener("touchmove",O),g.removeEventListener("touchstart",O),g.removeEventListener("touchend",O)}}},(a,u,c)=>{c.r(u),c.d(u,{BLANK_URL:()=>w,sanitizeUrl:()=>y});var f=/^([^\w]*)(javascript|data|vbscript)/im,v=/&#(\w+)(^\w|;)?/g,b=/&(newline|tab);/gi,x=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,g=/^.+(:|&colon;)/gim,S=[".","/"],w="about:blank";function j(E){return S.indexOf(E[0])>-1}function $(E){var I=E.replace(x,"");return I.replace(v,function(k,D){return String.fromCharCode(D)})}function y(E){if(!E)return w;var I=$(E).replace(b,"").replace(x,"").trim();if(!I)return w;if(j(I))return I;var k=I.match(g);if(!k)return I;var D=k[0];return f.test(D)?w:I}}],r={};function i(a){var u=r[a];if(u!==void 0)return u.exports;var c=r[a]={exports:{}};return n[a](c,c.exports,i),c.exports}i.d=(a,u)=>{for(var c in u)i.o(u,c)&&!i.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:u[c]})},i.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{Alignment:()=>g,EventType:()=>D,Fit:()=>x,Layout:()=>S,LoopType:()=>R,Rive:()=>ce,RiveEventType:()=>E,RuntimeLoader:()=>w,StateMachineInput:()=>y,StateMachineInputType:()=>$,Testing:()=>xe,decodeAudio:()=>$e,decodeFont:()=>_e,decodeImage:()=>Ee});var a=i(1),u=i(2),c=i(3),f=function(){var M=function(A,T){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(V,N){V.__proto__=N}||function(V,N){for(var he in N)Object.prototype.hasOwnProperty.call(N,he)&&(V[he]=N[he])},M(A,T)};return function(A,T){if(typeof T!="function"&&T!==null)throw new TypeError("Class extends value "+String(T)+" is not a constructor or null");M(A,T);function V(){this.constructor=A}A.prototype=T===null?Object.create(T):(V.prototype=T.prototype,new V)}}(),v=function(M,A,T,V){function N(he){return he instanceof T?he:new T(function(oe){oe(he)})}return new(T||(T=Promise))(function(he,oe){function Se(Xe){try{Pe(V.next(Xe))}catch(Ne){oe(Ne)}}function Oe(Xe){try{Pe(V.throw(Xe))}catch(Ne){oe(Ne)}}function Pe(Xe){Xe.done?he(Xe.value):N(Xe.value).then(Se,Oe)}Pe((V=V.apply(M,A||[])).next())})},b=function(M,A){var T={label:0,sent:function(){if(he[0]&1)throw he[1];return he[1]},trys:[],ops:[]},V,N,he,oe;return oe={next:Se(0),throw:Se(1),return:Se(2)},typeof Symbol=="function"&&(oe[Symbol.iterator]=function(){return this}),oe;function Se(Pe){return function(Xe){return Oe([Pe,Xe])}}function Oe(Pe){if(V)throw new TypeError("Generator is already executing.");for(;oe&&(oe=0,Pe[0]&&(T=0)),T;)try{if(V=1,N&&(he=Pe[0]&2?N.return:Pe[0]?N.throw||((he=N.return)&&he.call(N),0):N.next)&&!(he=he.call(N,Pe[1])).done)return he;switch(N=0,he&&(Pe=[Pe[0]&2,he.value]),Pe[0]){case 0:case 1:he=Pe;break;case 4:return T.label++,{value:Pe[1],done:!1};case 5:T.label++,N=Pe[1],Pe=[0];continue;case 7:Pe=T.ops.pop(),T.trys.pop();continue;default:if(he=T.trys,!(he=he.length>0&&he[he.length-1])&&(Pe[0]===6||Pe[0]===2)){T=0;continue}if(Pe[0]===3&&(!he||Pe[1]>he[0]&&Pe[1]<he[3])){T.label=Pe[1];break}if(Pe[0]===6&&T.label<he[1]){T.label=he[1],he=Pe;break}if(he&&T.label<he[2]){T.label=he[2],T.ops.push(Pe);break}he[2]&&T.ops.pop(),T.trys.pop();continue}Pe=A.call(M,T)}catch(Xe){Pe=[6,Xe],N=0}finally{V=he=0}if(Pe[0]&5)throw Pe[1];return{value:Pe[0]?Pe[1]:void 0,done:!0}}},x;(function(M){M.Cover="cover",M.Contain="contain",M.Fill="fill",M.FitWidth="fitWidth",M.FitHeight="fitHeight",M.None="none",M.ScaleDown="scaleDown"})(x||(x={}));var g;(function(M){M.Center="center",M.TopLeft="topLeft",M.TopCenter="topCenter",M.TopRight="topRight",M.CenterLeft="centerLeft",M.CenterRight="centerRight",M.BottomLeft="bottomLeft",M.BottomCenter="bottomCenter",M.BottomRight="bottomRight"})(g||(g={}));var S=function(){function M(A){var T,V,N,he,oe,Se;this.fit=(T=A?.fit)!==null&&T!==void 0?T:x.Contain,this.alignment=(V=A?.alignment)!==null&&V!==void 0?V:g.Center,this.minX=(N=A?.minX)!==null&&N!==void 0?N:0,this.minY=(he=A?.minY)!==null&&he!==void 0?he:0,this.maxX=(oe=A?.maxX)!==null&&oe!==void 0?oe:0,this.maxY=(Se=A?.maxY)!==null&&Se!==void 0?Se:0}return M.new=function(A){var T=A.fit,V=A.alignment,N=A.minX,he=A.minY,oe=A.maxX,Se=A.maxY;return console.warn("This function is deprecated: please use `new Layout({})` instead"),new M({fit:T,alignment:V,minX:N,minY:he,maxX:oe,maxY:Se})},M.prototype.copyWith=function(A){var T=A.fit,V=A.alignment,N=A.minX,he=A.minY,oe=A.maxX,Se=A.maxY;return new M({fit:T??this.fit,alignment:V??this.alignment,minX:N??this.minX,minY:he??this.minY,maxX:oe??this.maxX,maxY:Se??this.maxY})},M.prototype.runtimeFit=function(A){if(this.cachedRuntimeFit)return this.cachedRuntimeFit;var T;return this.fit===x.Cover?T=A.Fit.cover:this.fit===x.Contain?T=A.Fit.contain:this.fit===x.Fill?T=A.Fit.fill:this.fit===x.FitWidth?T=A.Fit.fitWidth:this.fit===x.FitHeight?T=A.Fit.fitHeight:this.fit===x.ScaleDown?T=A.Fit.scaleDown:T=A.Fit.none,this.cachedRuntimeFit=T,T},M.prototype.runtimeAlignment=function(A){if(this.cachedRuntimeAlignment)return this.cachedRuntimeAlignment;var T;return this.alignment===g.TopLeft?T=A.Alignment.topLeft:this.alignment===g.TopCenter?T=A.Alignment.topCenter:this.alignment===g.TopRight?T=A.Alignment.topRight:this.alignment===g.CenterLeft?T=A.Alignment.centerLeft:this.alignment===g.CenterRight?T=A.Alignment.centerRight:this.alignment===g.BottomLeft?T=A.Alignment.bottomLeft:this.alignment===g.BottomCenter?T=A.Alignment.bottomCenter:this.alignment===g.BottomRight?T=A.Alignment.bottomRight:T=A.Alignment.center,this.cachedRuntimeAlignment=T,T},M}(),w=function(){function M(){}return M.loadRuntime=function(){a.default({locateFile:function(){return M.wasmURL}}).then(function(A){var T;for(M.runtime=A;M.callBackQueue.length>0;)(T=M.callBackQueue.shift())===null||T===void 0||T(M.runtime)}).catch(function(){var A="https://cdn.jsdelivr.net/npm/".concat(u.name,"@").concat(u.version,"/rive.wasm");M.wasmURL.toLowerCase()!==A?(console.warn("Failed to load WASM from ".concat(M.wasmURL,", trying jsdelivr as a backup")),M.setWasmUrl(A),M.loadRuntime()):console.error("Could not load Rive WASM file from unpkg or jsdelivr, network connection may be down, or 	        you may need to call set a new WASM source via RuntimeLoader.setWasmUrl() and call 	        RuntimeLoader.loadRuntime() again")})},M.getInstance=function(A){M.isLoading||(M.isLoading=!0,M.loadRuntime()),M.runtime?A(M.runtime):M.callBackQueue.push(A)},M.awaitInstance=function(){return new Promise(function(A){return M.getInstance(function(T){return A(T)})})},M.setWasmUrl=function(A){M.wasmURL=A},M.isLoading=!1,M.callBackQueue=[],M.wasmURL="https://unpkg.com/".concat(u.name,"@").concat(u.version,"/rive.wasm"),M}(),j=function(){function M(A,T,V,N){this.animation=A,this.artboard=T,this.playing=N,this.loopCount=0,this.scrubTo=null,this.instance=new V.LinearAnimationInstance(A,T)}return Object.defineProperty(M.prototype,"name",{get:function(){return this.animation.name},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"time",{get:function(){return this.instance.time},set:function(A){this.instance.time=A},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"loopValue",{get:function(){return this.animation.loopValue},enumerable:!1,configurable:!0}),M.prototype.advance=function(A){this.scrubTo===null?this.instance.advance(A):(this.instance.time=0,this.instance.advance(this.scrubTo),this.scrubTo=null)},M.prototype.apply=function(A){this.instance.apply(A)},Object.defineProperty(M.prototype,"needsScrub",{get:function(){return this.scrubTo!==null},enumerable:!1,configurable:!0}),M.prototype.cleanup=function(){this.instance.delete()},M}(),$;(function(M){M[M.Number=56]="Number",M[M.Trigger=58]="Trigger",M[M.Boolean=59]="Boolean"})($||($={}));var y=function(){function M(A,T){this.type=A,this.runtimeInput=T}return Object.defineProperty(M.prototype,"name",{get:function(){return this.runtimeInput.name},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"value",{get:function(){return this.runtimeInput.value},set:function(A){this.runtimeInput.value=A},enumerable:!1,configurable:!0}),M.prototype.fire=function(){this.type===$.Trigger&&this.runtimeInput.fire()},M}(),E;(function(M){M[M.General=128]="General",M[M.OpenUrl=131]="OpenUrl"})(E||(E={}));var I=function(){function M(A,T,V,N){this.stateMachine=A,this.playing=V,this.artboard=N,this.inputs=[],this.instance=new T.StateMachineInstance(A,N),this.initInputs(T)}return Object.defineProperty(M.prototype,"name",{get:function(){return this.stateMachine.name},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"statesChanged",{get:function(){for(var A=[],T=0;T<this.instance.stateChangedCount();T++)A.push(this.instance.stateChangedNameByIndex(T));return A},enumerable:!1,configurable:!0}),M.prototype.advance=function(A){this.instance.advance(A)},M.prototype.reportedEventCount=function(){return this.instance.reportedEventCount()},M.prototype.reportedEventAt=function(A){return this.instance.reportedEventAt(A)},M.prototype.initInputs=function(A){for(var T=0;T<this.instance.inputCount();T++){var V=this.instance.input(T);this.inputs.push(this.mapRuntimeInput(V,A))}},M.prototype.mapRuntimeInput=function(A,T){if(A.type===T.SMIInput.bool)return new y($.Boolean,A.asBool());if(A.type===T.SMIInput.number)return new y($.Number,A.asNumber());if(A.type===T.SMIInput.trigger)return new y($.Trigger,A.asTrigger())},M.prototype.cleanup=function(){this.instance.delete()},M}(),k=function(){function M(A,T,V,N,he){N===void 0&&(N=[]),he===void 0&&(he=[]),this.runtime=A,this.artboard=T,this.eventManager=V,this.animations=N,this.stateMachines=he}return M.prototype.add=function(A,T,V){if(V===void 0&&(V=!0),A=te(A),A.length===0)this.animations.forEach(function(Me){return Me.playing=T}),this.stateMachines.forEach(function(Me){return Me.playing=T});else for(var N=this.animations.map(function(Me){return Me.name}),he=this.stateMachines.map(function(Me){return Me.name}),oe=0;oe<A.length;oe++){var Se=N.indexOf(A[oe]),Oe=he.indexOf(A[oe]);if(Se>=0||Oe>=0)Se>=0?this.animations[Se].playing=T:this.stateMachines[Oe].playing=T;else{var Pe=this.artboard.animationByName(A[oe]);if(Pe){var Xe=new j(Pe,this.artboard,this.runtime,T);Xe.advance(0),Xe.apply(1),this.animations.push(Xe)}else{var Ne=this.artboard.stateMachineByName(A[oe]);if(Ne){var Ze=new I(Ne,this.runtime,T,this.artboard);this.stateMachines.push(Ze)}}}}return V&&(T?this.eventManager.fire({type:D.Play,data:this.playing}):this.eventManager.fire({type:D.Pause,data:this.paused})),T?this.playing:this.paused},M.prototype.initLinearAnimations=function(A,T){for(var V=this.animations.map(function(Oe){return Oe.name}),N=0;N<A.length;N++){var he=V.indexOf(A[N]);if(he>=0)this.animations[he].playing=T;else{var oe=this.artboard.animationByName(A[N]);if(oe){var Se=new j(oe,this.artboard,this.runtime,T);Se.advance(0),Se.apply(1),this.animations.push(Se)}}}},M.prototype.initStateMachines=function(A,T){for(var V=this.stateMachines.map(function(Oe){return Oe.name}),N=0;N<A.length;N++){var he=V.indexOf(A[N]);if(he>=0)this.stateMachines[he].playing=T;else{var oe=this.artboard.stateMachineByName(A[N]);if(oe){var Se=new I(oe,this.runtime,T,this.artboard);this.stateMachines.push(Se)}else this.initLinearAnimations([A[N]],T)}}},M.prototype.play=function(A){return this.add(A,!0)},M.prototype.pause=function(A){return this.add(A,!1)},M.prototype.scrub=function(A,T){var V=this.animations.filter(function(N){return A.includes(N.name)});return V.forEach(function(N){return N.scrubTo=T}),V.map(function(N){return N.name})},Object.defineProperty(M.prototype,"playing",{get:function(){return this.animations.filter(function(A){return A.playing}).map(function(A){return A.name}).concat(this.stateMachines.filter(function(A){return A.playing}).map(function(A){return A.name}))},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"paused",{get:function(){return this.animations.filter(function(A){return!A.playing}).map(function(A){return A.name}).concat(this.stateMachines.filter(function(A){return!A.playing}).map(function(A){return A.name}))},enumerable:!1,configurable:!0}),M.prototype.stop=function(A){var T=this;A=te(A);var V=[];if(A.length===0)V=this.animations.map(function(oe){return oe.name}).concat(this.stateMachines.map(function(oe){return oe.name})),this.animations.forEach(function(oe){return oe.cleanup()}),this.stateMachines.forEach(function(oe){return oe.cleanup()}),this.animations.splice(0,this.animations.length),this.stateMachines.splice(0,this.stateMachines.length);else{var N=this.animations.filter(function(oe){return A.includes(oe.name)});N.forEach(function(oe){oe.cleanup(),T.animations.splice(T.animations.indexOf(oe),1)});var he=this.stateMachines.filter(function(oe){return A.includes(oe.name)});he.forEach(function(oe){oe.cleanup(),T.stateMachines.splice(T.stateMachines.indexOf(oe),1)}),V=N.map(function(oe){return oe.name}).concat(he.map(function(oe){return oe.name}))}return this.eventManager.fire({type:D.Stop,data:V}),V},Object.defineProperty(M.prototype,"isPlaying",{get:function(){return this.animations.reduce(function(A,T){return A||T.playing},!1)||this.stateMachines.reduce(function(A,T){return A||T.playing},!1)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"isPaused",{get:function(){return!this.isPlaying&&(this.animations.length>0||this.stateMachines.length>0)},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"isStopped",{get:function(){return this.animations.length===0&&this.stateMachines.length===0},enumerable:!1,configurable:!0}),M.prototype.atLeastOne=function(A,T){T===void 0&&(T=!0);var V;return this.animations.length===0&&this.stateMachines.length===0&&(this.artboard.animationCount()>0?this.add([V=this.artboard.animationByIndex(0).name],A,T):this.artboard.stateMachineCount()>0&&this.add([V=this.artboard.stateMachineByIndex(0).name],A,T)),V},M.prototype.handleLooping=function(){for(var A=0,T=this.animations.filter(function(N){return N.playing});A<T.length;A++){var V=T[A];V.loopValue===0&&V.loopCount?(V.loopCount=0,this.stop(V.name)):V.loopValue===1&&V.loopCount?(this.eventManager.fire({type:D.Loop,data:{animation:V.name,type:R.Loop}}),V.loopCount=0):V.loopValue===2&&V.loopCount>1&&(this.eventManager.fire({type:D.Loop,data:{animation:V.name,type:R.PingPong}}),V.loopCount=0)}},M.prototype.handleStateChanges=function(){for(var A=[],T=0,V=this.stateMachines.filter(function(he){return he.playing});T<V.length;T++){var N=V[T];A.push.apply(A,N.statesChanged)}A.length>0&&this.eventManager.fire({type:D.StateChange,data:A})},M.prototype.handleAdvancing=function(A){this.eventManager.fire({type:D.Advance,data:A})},M}(),D;(function(M){M.Load="load",M.LoadError="loaderror",M.Play="play",M.Pause="pause",M.Stop="stop",M.Loop="loop",M.Draw="draw",M.Advance="advance",M.StateChange="statechange",M.RiveEvent="riveevent",M.AudioStatusChange="audiostatuschange"})(D||(D={}));var R;(function(M){M.OneShot="oneshot",M.Loop="loop",M.PingPong="pingpong"})(R||(R={}));var O=function(){function M(A){A===void 0&&(A=[]),this.listeners=A}return M.prototype.getListeners=function(A){return this.listeners.filter(function(T){return T.type===A})},M.prototype.add=function(A){this.listeners.includes(A)||this.listeners.push(A)},M.prototype.remove=function(A){for(var T=0;T<this.listeners.length;T++){var V=this.listeners[T];if(V.type===A.type&&V.callback===A.callback){this.listeners.splice(T,1);break}}},M.prototype.removeAll=function(A){var T=this;A?this.listeners.filter(function(V){return V.type===A}).forEach(function(V){return T.remove(V)}):this.listeners.splice(0,this.listeners.length)},M.prototype.fire=function(A){var T=this.getListeners(A.type);T.forEach(function(V){return V.callback(A)})},M}(),G=function(){function M(A){this.eventManager=A,this.queue=[]}return M.prototype.add=function(A){this.queue.push(A)},M.prototype.process=function(){for(;this.queue.length>0;){var A=this.queue.shift();A?.action&&A.action(),A?.event&&this.eventManager.fire(A.event)}},M}(),q;(function(M){M[M.AVAILABLE=0]="AVAILABLE",M[M.UNAVAILABLE=1]="UNAVAILABLE"})(q||(q={}));var K=function(M){f(A,M);function A(){var T=M!==null&&M.apply(this,arguments)||this;return T._started=!1,T._enabled=!1,T._status=q.UNAVAILABLE,T}return A.prototype.delay=function(T){return v(this,void 0,void 0,function(){return b(this,function(V){return[2,new Promise(function(N){return setTimeout(N,T)})]})})},A.prototype.timeout=function(){return v(this,void 0,void 0,function(){return b(this,function(T){return[2,new Promise(function(V,N){return setTimeout(N,50)})]})})},A.prototype.reportToListeners=function(){this.fire({type:D.AudioStatusChange}),this.removeAll()},A.prototype.enableAudio=function(){return v(this,void 0,void 0,function(){return b(this,function(T){return this._enabled||(this._enabled=!0,this._status=q.AVAILABLE,this.reportToListeners()),[2]})})},A.prototype.testAudio=function(){return v(this,void 0,void 0,function(){return b(this,function(T){switch(T.label){case 0:if(!(this._status===q.UNAVAILABLE&&this._audioContext!==null))return[3,4];T.label=1;case 1:return T.trys.push([1,3,,4]),[4,Promise.race([this._audioContext.resume(),this.timeout()])];case 2:return T.sent(),this.enableAudio(),[3,4];case 3:return T.sent(),[3,4];case 4:return[2]}})})},A.prototype._establishAudio=function(){return v(this,void 0,void 0,function(){return b(this,function(T){switch(T.label){case 0:return this._started?[3,5]:(this._started=!0,typeof window>"u"?(this.enableAudio(),[3,5]):[3,1]);case 1:this._audioContext=new AudioContext,this.listenForUserAction(),T.label=2;case 2:return this._status!==q.UNAVAILABLE?[3,5]:[4,this.testAudio()];case 3:return T.sent(),[4,this.delay(1e3)];case 4:return T.sent(),[3,2];case 5:return[2]}})})},A.prototype.listenForUserAction=function(){var T=this,V=function(){return v(T,void 0,void 0,function(){return b(this,function(N){return this.enableAudio(),[2]})})};document.addEventListener("pointerdown",V,{once:!0})},A.prototype.establishAudio=function(){return v(this,void 0,void 0,function(){return b(this,function(T){return this._establishAudio(),[2]})})},Object.defineProperty(A.prototype,"systemVolume",{get:function(){return this._status===q.UNAVAILABLE?(this.testAudio(),0):1},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"status",{get:function(){return this._status},enumerable:!1,configurable:!0}),A}(O),ee=new K,ae=function(){function M(){}return M.prototype.observe=function(){},M.prototype.unobserve=function(){},M.prototype.disconnect=function(){},M}(),le=globalThis.ResizeObserver||ae,Re=function(){function M(){var A=this;this._elementsMap=new Map,this._onObservedEntry=function(T){var V=A._elementsMap.get(T.target);V!==null?V.onResize(T.target.clientWidth==0||T.target.clientHeight==0):A._resizeObserver.unobserve(T.target)},this._onObserved=function(T){T.forEach(A._onObservedEntry)},this._resizeObserver=new le(this._onObserved)}return M.prototype.add=function(A,T){var V={onResize:T,element:A};return this._elementsMap.set(A,V),this._resizeObserver.observe(A),V},M.prototype.remove=function(A){this._resizeObserver.unobserve(A.element),this._elementsMap.delete(A.element)},M}(),Ce=new Re,ce=function(){function M(A){var T=this,V;this.loaded=!1,this.readyForPlaying=!1,this.artboard=null,this.eventCleanup=null,this.shouldDisableRiveListeners=!1,this.automaticallyHandleEvents=!1,this.enableRiveAssetCDN=!0,this._volume=1,this._hasZeroSize=!1,this.durations=[],this.frameTimes=[],this.frameCount=0,this.isTouchScrollEnabled=!1,this.onCanvasResize=function(N){T._hasZeroSize=N,(!T._layout.maxX||!T._layout.maxY)&&T.resizeToCanvas()},this.renderSecondTimer=0,this.canvas=A.canvas,A.canvas.constructor===HTMLCanvasElement&&(this._observed=Ce.add(this.canvas,this.onCanvasResize)),this.src=A.src,this.buffer=A.buffer,this.layout=(V=A.layout)!==null&&V!==void 0?V:new S,this.shouldDisableRiveListeners=!!A.shouldDisableRiveListeners,this.isTouchScrollEnabled=!!A.isTouchScrollEnabled,this.automaticallyHandleEvents=!!A.automaticallyHandleEvents,this.enableRiveAssetCDN=A.enableRiveAssetCDN===void 0?!0:A.enableRiveAssetCDN,this.eventManager=new O,A.onLoad&&this.on(D.Load,A.onLoad),A.onLoadError&&this.on(D.LoadError,A.onLoadError),A.onPlay&&this.on(D.Play,A.onPlay),A.onPause&&this.on(D.Pause,A.onPause),A.onStop&&this.on(D.Stop,A.onStop),A.onLoop&&this.on(D.Loop,A.onLoop),A.onStateChange&&this.on(D.StateChange,A.onStateChange),A.onAdvance&&this.on(D.Advance,A.onAdvance),A.onload&&!A.onLoad&&this.on(D.Load,A.onload),A.onloaderror&&!A.onLoadError&&this.on(D.LoadError,A.onloaderror),A.onplay&&!A.onPlay&&this.on(D.Play,A.onplay),A.onpause&&!A.onPause&&this.on(D.Pause,A.onpause),A.onstop&&!A.onStop&&this.on(D.Stop,A.onstop),A.onloop&&!A.onLoop&&this.on(D.Loop,A.onloop),A.onstatechange&&!A.onStateChange&&this.on(D.StateChange,A.onstatechange),A.assetLoader&&(this.assetLoader=A.assetLoader),this.taskQueue=new G(this.eventManager),this.init({src:this.src,buffer:this.buffer,autoplay:A.autoplay,animations:A.animations,stateMachines:A.stateMachines,artboard:A.artboard,useOffscreenRenderer:A.useOffscreenRenderer})}return M.new=function(A){return console.warn("This function is deprecated: please use `new Rive({})` instead"),new M(A)},M.prototype.onSystemAudioChanged=function(){this.volume=this._volume},M.prototype.init=function(A){var T=this,V=A.src,N=A.buffer,he=A.animations,oe=A.stateMachines,Se=A.artboard,Oe=A.autoplay,Pe=Oe===void 0?!1:Oe,Xe=A.useOffscreenRenderer,Ne=Xe===void 0?!1:Xe;if(this.src=V,this.buffer=N,!this.src&&!this.buffer)throw new Error(M.missingErrorMessage);var Ze=te(he),Me=te(oe);this.loaded=!1,this.readyForPlaying=!1,w.awaitInstance().then(function(st){T.runtime=st,T.renderer=T.runtime.makeRenderer(T.canvas,Ne),T.canvas.width||T.canvas.height||T.resizeDrawingSurfaceToCanvas(),T.initData(Se,Ze,Me,Pe).then(function(){return T.setupRiveListeners()}).catch(function(Lt){console.error(Lt)})}).catch(function(st){console.error(st)})},M.prototype.setupRiveListeners=function(A){var T=this;if(!this.shouldDisableRiveListeners){var V=(this.animator.stateMachines||[]).filter(function(he){return he.playing&&T.runtime.hasListeners(he.instance)}).map(function(he){return he.instance}),N=this.isTouchScrollEnabled;A&&"isTouchScrollEnabled"in A&&(N=A.isTouchScrollEnabled),this.eventCleanup=(0,c.registerTouchInteractions)({canvas:this.canvas,artboard:this.artboard,stateMachines:V,renderer:this.renderer,rive:this.runtime,fit:this._layout.runtimeFit(this.runtime),alignment:this._layout.runtimeAlignment(this.runtime),isTouchScrollEnabled:N})}},M.prototype.removeRiveListeners=function(){this.eventCleanup&&this.eventCleanup()},M.prototype.initializeAudio=function(){var A=this,T;ee.status==q.UNAVAILABLE&&!((T=this.artboard)===null||T===void 0)&&T.hasAudio&&(ee.add({type:D.AudioStatusChange,callback:function(){return A.onSystemAudioChanged()}}),ee.establishAudio())},M.prototype.initData=function(A,T,V,N){var he;return v(this,void 0,void 0,function(){var oe,Se,Oe,Pe;return b(this,function(Xe){switch(Xe.label){case 0:return this.src?(oe=this,[4,ie(this.src)]):[3,2];case 1:oe.buffer=Xe.sent(),Xe.label=2;case 2:return this.assetLoader&&(Se=new this.runtime.CustomFileAssetLoader({loadContents:this.assetLoader})),Oe=this,[4,this.runtime.load(new Uint8Array(this.buffer),Se,this.enableRiveAssetCDN)];case 3:return Oe.file=Xe.sent(),this.file?(this.initArtboard(A,T,V,N),this.initializeAudio(),this.loaded=!0,this.eventManager.fire({type:D.Load,data:(he=this.src)!==null&&he!==void 0?he:"buffer"}),this.readyForPlaying=!0,this.taskQueue.process(),this.drawFrame(),[2,Promise.resolve()]):(Pe="Problem loading file; may be corrupt!",console.warn(Pe),this.eventManager.fire({type:D.LoadError,data:Pe}),[2,Promise.reject(Pe)])}})})},M.prototype.initArtboard=function(A,T,V,N){var he=A?this.file.artboardByName(A):this.file.defaultArtboard();if(!he){var oe="Invalid artboard name or no default artboard";console.warn(oe),this.eventManager.fire({type:D.LoadError,data:oe});return}if(this.artboard=he,he.volume=this._volume*ee.systemVolume,this.artboard.animationCount()<1){var oe="Artboard has no animations";throw this.eventManager.fire({type:D.LoadError,data:oe}),oe}this.animator=new k(this.runtime,this.artboard,this.eventManager);var Se;T.length>0||V.length>0?(Se=T.concat(V),this.animator.initLinearAnimations(T,N),this.animator.initStateMachines(V,N)):Se=[this.animator.atLeastOne(N,!1)],this.taskQueue.add({event:{type:N?D.Play:D.Pause,data:Se}})},M.prototype.drawFrame=function(){this.startRendering()},M.prototype.draw=function(A,T){this.frameRequestId=null;var V=performance.now();this.lastRenderTime||(this.lastRenderTime=A),this.renderSecondTimer+=A-this.lastRenderTime,this.renderSecondTimer>5e3&&(this.renderSecondTimer=0,T?.());var N=(A-this.lastRenderTime)/1e3;this.lastRenderTime=A;for(var he=this.animator.animations.filter(function(ur){return ur.playing||ur.needsScrub}).sort(function(ur){return ur.needsScrub?-1:1}),oe=0,Se=he;oe<Se.length;oe++){var Oe=Se[oe];Oe.advance(N),Oe.instance.didLoop&&(Oe.loopCount+=1),Oe.apply(1)}for(var Pe=this.animator.stateMachines.filter(function(ur){return ur.playing}),Xe=0,Ne=Pe;Xe<Ne.length;Xe++){var Ze=Ne[Xe],Me=Ze.reportedEventCount();if(Me)for(var st=0;st<Me;st++){var Lt=Ze.reportedEventAt(st);if(Lt)if(Lt.type===E.OpenUrl){if(this.eventManager.fire({type:D.RiveEvent,data:Lt}),this.automaticallyHandleEvents){var it=document.createElement("a"),$t=Lt,Nn=$t.url,et=$t.target,tt=(0,c.sanitizeUrl)(Nn);Nn&&it.setAttribute("href",tt),et&&it.setAttribute("target",et),tt&&tt!==c.BLANK_URL&&it.click()}}else this.eventManager.fire({type:D.RiveEvent,data:Lt})}Ze.advance(N)}this.artboard.advance(N);var Jt=this.renderer;Jt.clear(),Jt.save(),this.alignRenderer(),this._hasZeroSize||this.artboard.draw(Jt),Jt.restore(),Jt.flush(),this.animator.handleLooping(),this.animator.handleStateChanges(),this.animator.handleAdvancing(N),this.frameCount++;var Or=performance.now();for(this.frameTimes.push(Or),this.durations.push(Or-V);this.frameTimes[0]<=Or-1e3;)this.frameTimes.shift(),this.durations.shift();this.animator.isPlaying?this.startRendering():this.animator.isPaused?this.lastRenderTime=0:this.animator.isStopped&&(this.lastRenderTime=0)},M.prototype.alignRenderer=function(){var A=this,T=A.renderer,V=A.runtime,N=A._layout,he=A.artboard;T.align(N.runtimeFit(V),N.runtimeAlignment(V),{minX:N.minX,minY:N.minY,maxX:N.maxX,maxY:N.maxY},he.bounds)},Object.defineProperty(M.prototype,"fps",{get:function(){return this.durations.length},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"frameTime",{get:function(){return this.durations.length===0?0:(this.durations.reduce(function(A,T){return A+T},0)/this.durations.length).toFixed(4)},enumerable:!1,configurable:!0}),M.prototype.cleanup=function(){var A;this.stopRendering(),this.cleanupInstances(),this._observed!==null&&Ce.remove(this._observed),(A=this.file)===null||A===void 0||A.delete(),this.file=null},M.prototype.deleteRiveRenderer=function(){var A;(A=this.renderer)===null||A===void 0||A.delete(),this.renderer=null},M.prototype.cleanupInstances=function(){this.eventCleanup!==null&&this.eventCleanup(),this.stop(),this.artboard&&(this.artboard.delete(),this.artboard=null)},M.prototype.retrieveTextRun=function(A){var T;if(!A){console.warn("No text run name provided");return}if(!this.artboard){console.warn("Tried to access text run, but the Artboard is null");return}var V=this.artboard.textRun(A);if(!V){console.warn("Could not access a text run with name '".concat(A,"' in the '").concat((T=this.artboard)===null||T===void 0?void 0:T.name,"' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));return}return V},M.prototype.getTextRunValue=function(A){var T=this.retrieveTextRun(A);return T?T.text:void 0},M.prototype.setTextRunValue=function(A,T){var V=this.retrieveTextRun(A);V&&(V.text=T)},M.prototype.play=function(A,T){var V=this;if(A=te(A),!this.readyForPlaying){this.taskQueue.add({action:function(){return V.play(A,T)}});return}this.animator.play(A),this.eventCleanup&&this.eventCleanup(),this.setupRiveListeners(),this.startRendering()},M.prototype.pause=function(A){var T=this;if(A=te(A),!this.readyForPlaying){this.taskQueue.add({action:function(){return T.pause(A)}});return}this.eventCleanup&&this.eventCleanup(),this.animator.pause(A)},M.prototype.scrub=function(A,T){var V=this;if(A=te(A),!this.readyForPlaying){this.taskQueue.add({action:function(){return V.scrub(A,T)}});return}this.animator.scrub(A,T||0),this.drawFrame()},M.prototype.stop=function(A){var T=this;if(A=te(A),!this.readyForPlaying){this.taskQueue.add({action:function(){return T.stop(A)}});return}this.animator.stop(A),this.eventCleanup&&this.eventCleanup()},M.prototype.reset=function(A){var T,V=A?.artboard,N=te(A?.animations),he=te(A?.stateMachines),oe=(T=A?.autoplay)!==null&&T!==void 0?T:!1;this.cleanupInstances(),this.initArtboard(V,N,he,oe),this.taskQueue.process()},M.prototype.load=function(A){this.stop(),this.init(A)},Object.defineProperty(M.prototype,"layout",{get:function(){return this._layout},set:function(A){this._layout=A,(!A.maxX||!A.maxY)&&this.resizeToCanvas(),this.loaded&&!this.animator.isPlaying&&this.drawFrame()},enumerable:!1,configurable:!0}),M.prototype.resizeToCanvas=function(){this._layout=this.layout.copyWith({minX:0,minY:0,maxX:this.canvas.width,maxY:this.canvas.height})},M.prototype.resizeDrawingSurfaceToCanvas=function(A){if(this.canvas instanceof HTMLCanvasElement&&window){var T=this.canvas.getBoundingClientRect(),V=T.width,N=T.height,he=A||window.devicePixelRatio||1;this.canvas.width=he*V,this.canvas.height=he*N,this.startRendering(),this.resizeToCanvas()}},Object.defineProperty(M.prototype,"source",{get:function(){return this.src},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"activeArtboard",{get:function(){return this.artboard?this.artboard.name:""},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"animationNames",{get:function(){if(!this.loaded)return[];for(var A=[],T=0;T<this.artboard.animationCount();T++)A.push(this.artboard.animationByIndex(T).name);return A},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"stateMachineNames",{get:function(){if(!this.loaded)return[];for(var A=[],T=0;T<this.artboard.stateMachineCount();T++)A.push(this.artboard.stateMachineByIndex(T).name);return A},enumerable:!1,configurable:!0}),M.prototype.stateMachineInputs=function(A){if(this.loaded){var T=this.animator.stateMachines.find(function(V){return V.name===A});return T?.inputs}},Object.defineProperty(M.prototype,"playingStateMachineNames",{get:function(){return this.loaded?this.animator.stateMachines.filter(function(A){return A.playing}).map(function(A){return A.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"playingAnimationNames",{get:function(){return this.loaded?this.animator.animations.filter(function(A){return A.playing}).map(function(A){return A.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"pausedAnimationNames",{get:function(){return this.loaded?this.animator.animations.filter(function(A){return!A.playing}).map(function(A){return A.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"pausedStateMachineNames",{get:function(){return this.loaded?this.animator.stateMachines.filter(function(A){return!A.playing}).map(function(A){return A.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"isPlaying",{get:function(){return this.animator.isPlaying},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"isPaused",{get:function(){return this.animator.isPaused},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"isStopped",{get:function(){return this.animator.isStopped},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"bounds",{get:function(){return this.artboard?this.artboard.bounds:void 0},enumerable:!1,configurable:!0}),M.prototype.on=function(A,T){this.eventManager.add({type:A,callback:T})},M.prototype.off=function(A,T){this.eventManager.remove({type:A,callback:T})},M.prototype.unsubscribe=function(A,T){console.warn("This function is deprecated: please use `off()` instead."),this.off(A,T)},M.prototype.removeAllRiveEventListeners=function(A){this.eventManager.removeAll(A)},M.prototype.unsubscribeAll=function(A){console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead."),this.removeAllRiveEventListeners(A)},M.prototype.stopRendering=function(){this.loaded&&this.frameRequestId&&(this.runtime.cancelAnimationFrame?this.runtime.cancelAnimationFrame(this.frameRequestId):cancelAnimationFrame(this.frameRequestId),this.frameRequestId=null)},M.prototype.startRendering=function(){this.loaded&&this.artboard&&!this.frameRequestId&&(this.runtime.requestAnimationFrame?this.frameRequestId=this.runtime.requestAnimationFrame(this.draw.bind(this)):this.frameRequestId=requestAnimationFrame(this.draw.bind(this)))},M.prototype.enableFPSCounter=function(A){this.runtime.enableFPSCounter(A)},M.prototype.disableFPSCounter=function(){this.runtime.disableFPSCounter()},Object.defineProperty(M.prototype,"contents",{get:function(){if(this.loaded){for(var A={artboards:[]},T=0;T<this.file.artboardCount();T++){for(var V=this.file.artboardByIndex(T),N={name:V.name,animations:[],stateMachines:[]},he=0;he<V.animationCount();he++){var oe=V.animationByIndex(he);N.animations.push(oe.name)}for(var Se=0;Se<V.stateMachineCount();Se++){for(var Oe=V.stateMachineByIndex(Se),Pe=Oe.name,Xe=new this.runtime.StateMachineInstance(Oe,V),Ne=[],Ze=0;Ze<Xe.inputCount();Ze++){var Me=Xe.input(Ze);Ne.push({name:Me.name,type:Me.type})}N.stateMachines.push({name:Pe,inputs:Ne})}A.artboards.push(N)}return A}},enumerable:!1,configurable:!0}),Object.defineProperty(M.prototype,"volume",{get:function(){return this.artboard&&this.artboard.volume!==this._volume&&(this._volume=this.artboard.volume),this._volume},set:function(A){this._volume=A,this.artboard&&(this.artboard.volume=A*ee.systemVolume)},enumerable:!1,configurable:!0}),M.missingErrorMessage="Rive source file or data buffer required",M}(),ie=function(M){return v(void 0,void 0,void 0,function(){var A,T,V;return b(this,function(N){switch(N.label){case 0:return A=new Request(M),[4,fetch(A)];case 1:return T=N.sent(),[4,T.arrayBuffer()];case 2:return V=N.sent(),[2,V]}})})},te=function(M){return typeof M=="string"?[M]:M instanceof Array?M:[]},xe={EventManager:O,TaskQueueManager:G},$e=function(M){return new Promise(function(A){return w.getInstance(function(T){T.decodeAudio(M,A)})})},Ee=function(M){return new Promise(function(A){return w.getInstance(function(T){T.decodeImage(M,A)})})},_e=function(M){return new Promise(function(A){return w.getInstance(function(T){T.decodeFont(M,A)})})}})(),o})())})(d5);var h5=d5.exports;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=we,n=h5;function r(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var i=r(t),o=function(){return o=Object.assign||function(y){for(var E,I=1,k=arguments.length;I<k;I++)for(var D in E=arguments[I])Object.prototype.hasOwnProperty.call(E,D)&&(y[D]=E[D]);return y},o.apply(this,arguments)};function a(y,E){var I={};for(var k in y)Object.prototype.hasOwnProperty.call(y,k)&&E.indexOf(k)<0&&(I[k]=y[k]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function"){var D=0;for(k=Object.getOwnPropertySymbols(y);D<k.length;D++)E.indexOf(k[D])<0&&Object.prototype.propertyIsEnumerable.call(y,k[D])&&(I[k[D]]=y[k[D]])}return I}function u(){var y=typeof window<"u"&&typeof window.devicePixelRatio=="number"?window.devicePixelRatio:1;return Math.min(Math.max(1,y),3)}typeof SuppressedError=="function"&&SuppressedError;var c=function(){function y(){}return y.prototype.observe=function(){},y.prototype.unobserve=function(){},y.prototype.disconnect=function(){},y}(),f=globalThis.ResizeObserver||c,v=globalThis.ResizeObserver!==void 0,b=!v;function x(y,E){E===void 0&&(E=!0);var I=t.useState({width:0,height:0}),k=I[0],D=I[1];t.useEffect(function(){if(typeof window<"u"&&E){var K=function(){D({width:window.innerWidth,height:window.innerHeight})};return b&&(K(),window.addEventListener("resize",K)),function(){return window.removeEventListener("resize",K)}}},[]);var R,O,G,q=t.useRef(new f((R=function(K){v&&D({width:K[K.length-1].contentRect.width,height:K[K.length-1].contentRect.height})},O=0,G=0,function(){for(var K=this,ee=[],ae=0;ae<arguments.length;ae++)ee[ae]=arguments[ae];clearTimeout(G),G=window.setTimeout(function(){return R.apply(K,ee)},O)})));return t.useEffect(function(){var K=q.current;if(E){var ee=y.current;return y.current&&v&&K.observe(y.current),function(){K.disconnect(),ee&&v&&K.unobserve(ee)}}K.disconnect()},[y,q]),k}var g={useDevicePixelRatio:!0,fitCanvasToArtboardHeight:!1,useOffscreenRenderer:!0,shouldResizeCanvasToContainer:!0};function S(y){return Object.assign({},g,y)}function w(y){var E=y.riveLoaded,I=E!==void 0&&E,k=y.canvasRef,D=y.containerRef,R=y.options,O=R===void 0?{}:R,G=y.onCanvasHasResized,q=y.artboardBounds,K=S(O),ee=t.useState({height:0,width:0}),ae=ee[0],le=ae.height,Re=ae.width,Ce=ee[1],ce=t.useState({height:0,width:0}),ie=ce[0],te=ie.height,xe=ie.width,$e=ce[1],Ee=t.useState(!0),_e=Ee[0],M=Ee[1],A=K.fitCanvasToArtboardHeight,T=K.shouldResizeCanvasToContainer,V=K.useDevicePixelRatio,N=K.customDevicePixelRatio,he=x(D,T),oe=function(Ne){var Ze=Ne||u(),Me=t.useState(Ze),st=Me[0],Lt=Me[1];return t.useEffect(function(){if(typeof window<"u"&&"matchMedia"in window){var it=function(){var Nn=Ne||u();Lt(Nn)},$t=window.matchMedia("screen and (resolution: ".concat(st,"dppx)"));return $t.hasOwnProperty("addEventListener")?$t.addEventListener("change",it):$t.addListener(it),function(){$t.hasOwnProperty("removeEventListener")?$t.removeEventListener("change",it):$t.removeListener(it)}}},[st,Ne]),st}(N),Se=q??{},Oe=Se.maxX,Pe=Se.maxY,Xe=t.useCallback(function(){var Ne,Ze,Me,st,Lt=(Ze=(Ne=D.current)===null||Ne===void 0?void 0:Ne.clientWidth)!==null&&Ze!==void 0?Ze:0,it=(st=(Me=D.current)===null||Me===void 0?void 0:Me.clientHeight)!==null&&st!==void 0?st:0;return A&&q?{width:Lt,height:Lt*(q.maxY/q.maxX)}:{width:Lt,height:it}},[D,A,Oe,Pe]);t.useEffect(function(){if(T&&D.current&&I){var Ne=Xe(),Ze=Ne.width,Me=Ne.height,st=!1;if(k.current){var Lt=Ze!==Re||Me!==le;if(K.fitCanvasToArtboardHeight&&Lt&&(D.current.style.height=Me+"px",st=!0),K.useDevicePixelRatio){if(Lt||Ze*oe!==xe||Me*oe!==te){var it=oe*Ze,$t=oe*Me;k.current.width=it,k.current.height=$t,k.current.style.width=Ze+"px",k.current.style.height=Me+"px",$e({width:it,height:$t}),st=!0}}else Lt&&(k.current.width=Ze,k.current.height=Me,$e({width:Ze,height:Me}),st=!0);Ce({width:Ze,height:Me})}G&&(_e||st)&&G&&G(),_e&&M(!1)}},[k,D,he,oe,Xe,_e,M,te,xe,le,Re,G,T,A,V,I])}function j(y){var E=y.setContainerRef,I=y.setCanvasRef,k=y.className,D=k===void 0?"":k,R=y.style,O=y.children,G=a(y,["setContainerRef","setCanvasRef","className","style","children"]),q=o({width:"100%",height:"100%"},R);return i.default.createElement("div",o({ref:E,className:D},!D&&{style:q}),i.default.createElement("canvas",o({ref:I,style:{verticalAlign:"top",width:0,height:0}},G),O))}function $(y,E){E===void 0&&(E={});var I=t.useRef(null),k=t.useRef(null),D=t.useState(null),R=D[0],O=D[1],G=!!y,q=S(E),K=t.useCallback(function(){R&&(R.startRendering(),R.resizeToCanvas())},[R]);w({riveLoaded:!!R,canvasRef:I,containerRef:k,options:q,onCanvasHasResized:K,artboardBounds:R?.bounds});var ee=t.useCallback(function(Ce){if(Ce&&y&&G){var ce=q.useOffscreenRenderer,ie=new n.Rive(o(o({useOffscreenRenderer:ce},y),{canvas:Ce}));ie.on(n.EventType.Load,function(){I.current?O(ie):ie.cleanup()})}else Ce===null&&I.current&&(I.current.height=0,I.current.width=0);I.current=Ce},[G]),ae=t.useCallback(function(Ce){k.current=Ce},[]);t.useEffect(function(){var Ce=new IntersectionObserver(function(ce){ce[0].isIntersecting?R&&R.startRendering():R&&R.stopRendering()});return I.current&&Ce.observe(I.current),function(){Ce.disconnect()}},[R]),t.useEffect(function(){return function(){R&&(R.cleanup(),O(null))}},[R]);var le=y?.animations;t.useEffect(function(){R&&le&&(R.isPlaying?(R.stop(R.animationNames),R.play(le)):R.isPaused&&(R.stop(R.animationNames),R.pause(le)))},[le,R]);var Re=t.useCallback(function(Ce){return i.default.createElement(j,o({setContainerRef:ae,setCanvasRef:ee},Ce))},[ee,ae]);return{canvas:I.current,container:k.current,setCanvasRef:ee,setContainerRef:ae,rive:R,RiveComponent:Re}}e.default=function(y){var E=y.src,I=y.artboard,k=y.animations,D=y.stateMachines,R=y.layout,O=y.useOffscreenRenderer,G=O===void 0||O,q=y.shouldDisableRiveListeners,K=q!==void 0&&q,ee=y.shouldResizeCanvasToContainer,ae=ee===void 0||ee,le=y.automaticallyHandleEvents,Re=le!==void 0&&le,Ce=y.children,ce=a(y,["src","artboard","animations","stateMachines","layout","useOffscreenRenderer","shouldDisableRiveListeners","shouldResizeCanvasToContainer","automaticallyHandleEvents","children"]),ie=$({src:E,artboard:I,animations:k,layout:R,stateMachines:D,autoplay:!0,shouldDisableRiveListeners:K,automaticallyHandleEvents:Re},{useOffscreenRenderer:G,shouldResizeCanvasToContainer:ae}).RiveComponent;return i.default.createElement(ie,o({},ce),Ce)},e.useResizeCanvas=w,e.useRive=$,e.useStateMachineInput=function(y,E,I,k){var D=t.useState(null),R=D[0],O=D[1];return t.useEffect(function(){function G(){if(y&&E&&I||O(null),y&&E&&I){var q=y.stateMachineInputs(E);if(q){var K=q.find(function(ee){return ee.name===I});k!==void 0&&K&&(K.value=k),O(K||null)}}else O(null)}G(),y&&y.on(n.EventType.Play,function(){G()})},[y]),R},Object.keys(n).forEach(function(y){y==="default"||e.hasOwnProperty(y)||Object.defineProperty(e,y,{enumerable:!0,get:function(){return n[y]}})})})(no);const $M=Q.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({customStyle:e})=>e&&{...e}};
`,nS=({src:e,style:t,containerStyle:n,autoplay:r=!1,animations:i,delay:o=1e3,stateMachines:a,...u})=>{const c=we.useRef(null),{RiveComponent:f,rive:v}=no.useRive({src:e,layout:new no.Layout({fit:no.Fit.Contain,alignment:no.Alignment.Center}),autoplay:r,animations:i,stateMachines:a}),b=we.useRef(null);we.useEffect(()=>{if(v&&!b.current){const g=v.stateMachineInputs("State Machine Name");b.current=g?g["Input Name"]:null}},[v]);const x=()=>{b.current&&(b.current.value=1)};return we.useEffect(()=>{const g=setTimeout(()=>{v&&v.play()},o);return()=>clearTimeout(g)},[v,o]),m.jsx($M,{customStyle:n,children:m.jsx(f,{onClick:x,ref:c,...u,style:t})})},Sl=({imageUrls:e})=>{const t=we.useState()[1];return we.useEffect(()=>{const n=[];e.forEach(r=>{const i=new Image;i.src=r,n.push(i)}),t(n)},[e,t]),m.jsx(m.Fragment,{})};Q.div`
  display: flex;
  align-items: center;
  font-family: Vollkorn;
  font-weight: 700;
  color: #1a1a1a;
  @media (max-width: 767px) {
    align-items: flex-start;
  }
`;Q.div`
  margin: -5px 25px 0 0px;
  font-size: 70px;
  line-height: 70px;
  color: inherit;
  @media (max-width: 767px) {
    font-size: 40px;
    line-height: 92%;
  }
`;Q.div`
  font-size: 40px;
  color: inherit;
  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 110%;
  }
`;const p5=xt`
  ${e=>`color: ${e.theme.color.text.heading||"#pink"};`}
  letter-spacing: 0em;
`,ow=xt`
  ${p5}
  ${e=>`font-family: ${e.theme.font.family||"Vollkorn"};`}
`,Og=xt`
  ${p5}
  ${e=>`font-family: ${e.theme.font.family||"Sarabun"};`}
`,OM=Q.h1`
  ${ow}
  font-weight: 700;
  font-size: 70px;
  line-height: 130%;
  text-transform: none;
  ${e=>`color: ${e.theme.color.text.heading||"#1a1a1a"};`}
  ${({center:e})=>e?"text-align: center;":""}

  @media (max-width: 1024px) {
    font-size: 60px;
    line-height: 110%;
  }
  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    font-size: 40px;
    line-height: 105%;
  }
`,sw=Q.h2`
  ${ow}
  font-weight: 700;
  font-family: "Vollkorn", serif;
  font-size: 2rem;
  line-height: 120%;
  ${e=>`color: ${e.theme.color.text.heading||"#1a1a1a"};`}
  ${({center:e})=>e?"text-align: center;":""}
  @media (min-width: 450px) {
    font-size: 2.2rem;
    line-height: 130%;
  }
  @media (min-width: 769px) {
    font-size: 2.5rem;
  }
`,aw=Q.h3`
  ${ow}
  font-weight: 700;
  font-family: "Vollkorn", serif;
  font-size: 1.8rem;
  line-height: 130%;
  ${e=>`color: ${e.theme.color.text.heading||"white"};`}
  ${({center:e})=>e?"text-align: center;":""}
  @media (min-width: 450px) {
    line-height: 140%;
    font-size: 2rem;
  }
`,g5=Q.h4`
  ${Og}
  font-weight: 700;
  font-family: "Sarabun", sans-serif;
  font-size: 22px;
  line-height: 100%;
  ${e=>`color: ${e.theme.color.text.heading||"#1a1a1a"};`}
  ${({center:e})=>e?"text-align: center;":""}
  @media (min-width: 450px) {
    line-height: 120%;
    font-size: 2rem;
    line-height: 130%;
  }
`,jM=Q.h5`
  ${Og}
  font-weight: 700;
  font-family: "Sarabun", sans-serif;
  font-size: 1.5rem;
  line-height: 120%;
  ${e=>`color: ${e.theme.color.text.heading||"#1a1a1a"};`}
  ${({center:e})=>e?"text-align: center;":""}
  @media (min-width: 450px) {
    font-size: 2rem;
    line-height: 130%;
  }
`,IM={1:OM,2:sw,3:aw,4:g5,5:jM},lw=({children:e,className:t,style:n,level:r=1,center:i})=>{const[o,a]=we.useState();return we.useEffect(function(){const c=IM[r];a(m.jsx(c,{center:i,style:n,className:t,children:e}))},[r,e,t,n,i]),o},LM=Q.div`
  ${Og}
  ${({fontSize:e})=>`font-size: ${e?`${e}`:m5.medium};`}
  ${({center:e})=>e?"text-align: center;":""}
  ${({inline:e})=>e?"display: inline;":""}
  ${e=>`color: ${e.theme.color.text.body||"#1a1a1a"};`}
  ${e=>`color: ${e.color};`}
  ${({inheritColor:e})=>e?"color: inherit;":""}
  ${({noPadding:e})=>e?"padding: 0px;":"padding: 10px 0px 10px;"}
  line-height: 145%;
  width: 100%;
  em,
  p,
  b {
    padding: 0px !important;
    font-size: inherit;
    color: inherit;
    // text-align: inherit;
    ${e=>`color: "inherit" ||${e.theme.color.text.body};`}
    ${({inheritColor:e})=>e?"color: inherit;":""}
  }
`,m5={button:"25px",extrasmall:"clamp(0.875rem, 2vw, 1rem)",small:"clamp(1rem, 2vw, 1.5rem )",medium:"calc(clamp(20px, 2.6vw, 27px))",large:"calc(clamp(24px, 2.6vw, 32px))"},Xn=({children:e,className:t,style:n,italics:r,bold:i,size:o,center:a,inline:u,inheritColor:c,noPadding:f})=>{const[v,b]=we.useState(),[x,g]=we.useState();return we.useEffect(function(){o&&g(m5[o])},[o]),we.useEffect(function(){b(r&&i?m.jsx("em",{children:m.jsx("b",{children:e})}):r?m.jsx("em",{children:e}):i?m.jsx("b",{children:e}):e)},[i,e,r]),m.jsx(LM,{center:a,fontSize:x,inheritColor:c,noPadding:f,inline:u,style:n,className:t,children:v})};Q.div`
  margin-top: 10px;
  margin-bottom: auto;
  display: flex;
  align-self: stretch;
`;Q.div`
  ${({barColor:e,isResponsive:t})=>`
  ${t?` @media (min-width: 541px) {
        background: ${e||"#34669"};
        }
      }`:`background: ${e||"#34669"};
        width: 6px;

  }`}
  @media (min-width: 541px) {
  width: 6px;
  }
`}
`;Q(Xn)`
  width: 100%;
  margin-right: auto;
  margin-left: calc(max(15px, 2vw));
  padding: 0px 0px;
  color: inherit;
  ${({isResponsive:e})=>`
  ${e?`  @media (max-width: 540px) {
        margin-left: auto;
      }
      }`:`margin-left: calc(max(15px, 2vw));
        
  }`}
  `}
`;Q.div`
  counter-reset: list-number;
`;Q(Xn)`
  counter-increment: list-number;
  display: flex;
  padding-left: 0px;
  padding-right: 0px;
  &:before {
    content: counter(list-number);
    color: #42c5ef;
    font-weight: 700;
    line-height: 145%;
    margin-right: 15px;
    font-family: Vollkorn;
    font-size: 2rem;
    ${({counterStyle:e})=>e&&xt(e)}
  }
`;Q.a`
  ${({inline:e})=>e?"display: inline;":""}
`;Q.div`
  position: relative;
  display: table-cell;
  width: 0;
  left: -50%;
  /* Adjust for smaller screens */
  @media screen and (max-width: 600px) {
    position: absolute;
    left: 50%;
  }
`;Q.div`
  ${({showModal:e})=>`
    opacity: ${e?1:0};
    transition: opacity 0.2s, transform 0.2s ease-out, scale 0.2s ease-out;
    position: absolute;
    background: white;
    border-radius: 10px;
    padding: 10px;
    box-shadow: none;
border: none;
    /* Positioning */
    left: 50%; /* Center horizontally */
    min-width: calc(clamp(300px, 20%, 600px)); /* Set min width */
    transform: translate(-50%, ${e?"calc(-100% - 15px)":"-50%"}) scale(${e?1:.5});

  `}
`;Q.div`
  a {
    // font-size: 16px !important;
    // font-style: italic;
    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;Q.div`
  opacity: inherit;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  top: calc(100% - 1px);
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
`;Q.div`
  transition: all 0.2s;
  background: none;
  border: none;
  padding: 0;
  color: #1976d2;
  font-weight: 700;
  &:hover {
    // text-decoration: underline;
    text-underline-offset: 0.3rem;
    @media (min-width: 768px) {
      text-underline-offset: 0.5rem;
    }
  }
  display: inline;
`;Q.div`
  display: table-row;
`;Q.div`
  ${({color:e,hover:t})=>`
  background: ${e};
  border: solid 4px white;
  border-radius: 20px;
  padding: 10px;
  width: 260px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  filter: drop-shadow(3px 5px 3px rgba(0, 0, 0, 0.3));
  @media (max-width: 920px) {
    pointer-events: none;
  }
  &:hover {
    transition: all ease-in-out 0.3s;
    background: ${t};
  }
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`}
`;Q.img`
  object-fit: cover;
  margin: 10px auto;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;Q.div`
  width: 100%;
  height: auto;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;Q.h3`
  color: #1a1a1a !important;
  text-align: center;
  font-family: Vollkorn;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;Q.p`
  color: #1a1a1a !important;
  font-family: Sarabun;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;const UM=Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: inherit;
  ${({background:e,borderRadius:t,padding:n,tabletPadding:r,mobilePadding:i,textStyle:o})=>xt`
    background: ${e||"white"};
    padding: ${n||"50px"};
    border-radius: ${t||"20px"};
    @media (max-width: 920px) {
      padding: ${r||"40px"};
    }
    @media (max-width: 540px) {
      padding: ${i||"30px"};
    }

    p,
    b,
    em {
      width: 100%;
      ${o&&xt(o)};
    }
  `}
`,MM=({children:e,className:t,textboxStyle:n,style:r})=>m.jsx(UM,{className:t,background:n?.background,borderRadius:n?.borderRadius,padding:n?.padding,tabletPadding:n?.tabletPadding,mobilePadding:n?.mobilePadding,textStyle:n?.textStyle,style:{...r,...n},children:e}),rS=(e,t)=>{e===void 0&&(e="leftBottom");const n=DM[e],r=n.transform,i=t?"scaleY(-1)":"";return`
    top: ${n.top||"auto"};
    bottom: ${n.bottom||"auto"};
    left: ${n.left||"auto"};
    right: ${n.right||"auto"};
    transform: ${r} ${i};
  `},DM={topLeft:{top:"-75px",left:"20px",transform:"rotate(90deg)"},top:{top:"-75px",left:"50%",transform:"translateX(-50%) rotate(90deg)"},topRight:{top:"-75px",right:"20px",transform:"rotate(90deg)"},bottomLeft:{bottom:"-75px",left:"20px",transform:"rotate(270deg)"},bottom:{bottom:"-75px",left:"50%",transform:"translateX(-50%) rotate(270deg)"},bottomRight:{bottom:"-75px",right:"20px",transform:"rotate(270deg)"},rightTop:{top:"20px",right:"-75px",transform:"rotate(180deg)"},right:{top:"50%",right:"-75px",transform:"translateY(-50%) rotate(180deg)"},rightBottom:{bottom:"20px",right:"-75px",transform:"rotate(180deg)"},leftTop:{top:"20px",left:"-75px",transform:"rotate(0deg)"},left:{top:"50%",left:"-75px",transform:"translateY(-50%) rotate(0deg)"},leftBottom:{bottom:"20px",left:"-75px",transform:"rotate(0deg)"}};Q.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({alignment:e})=>e};
  font-size: clamp(20px, 5vw, 27px);
  ${({isQuestionBlock:e})=>e&&`
    margin-bottom: 65px;
    min-width: 265px;
    max-width: 265px;
    @media (max-width: 540px) {
      min-width: 85vw;
      height: 180px;
      min-height: 180px;
      margin-bottom: 55px;
    }
  `}
`;Q.div`
  transition: all ease-in-out 0.2s;
  padding: 30px;
  height: auto;
  ${({minHeight:e})=>`min-height: ${e};`}
  ${({minWidth:e})=>`min-width: ${e};`}

  width: 100%;
  border-radius: ${({borderRadius:e})=>e}px;
  background: ${({backgroundColor:e})=>e};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p,
  b,
  em {
    color: ${({textColor:e})=>e||"inherit"};
    text-align: ${({textAlign:e})=>e};
    ${({isQuestionBlock:e})=>e&&"font-size: clamp(20px, 5vw, 27px);"}
  }

  ${({isQuestionBlock:e})=>e&&`
    min-width: 265px;
    min-height: 200px;
    @media (max-width: 540px) {
      width: 80vw;
    }
  `}
`;Q.svg`
  transition: fill ease-in-out 0.2s;
  position: absolute;
  width: 80px;
  height: 80px;

  ${({tailPosition:e,tailFlip:t})=>rS(e,t)}

  ${({isResponsive:e,tailPositionResponsive:t,tailFlip:n,hideTail:r})=>e&&t&&`
      @media (max-width: ${e==="tablet"?1023:767}px) {
        ${rS(t,n)}
      }
      @media (max-width: ${r==="tablet"?1023:r==="mobile"?767:0}px) {
        display: none;
      }
      @media (max-width: ${r==="tablet"?1023:r==="mobile"?767:0}px) {
        display: none;
      }
    `}
`;Q.div`
  position: relative;
  display: inline-block;
`;Q.img`
  width: 100%;
  display: block;
  ${({hide:e})=>e?"display: none;":""}
  ${({blur:e})=>e?`
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(8px);
      `:""}
`;Q.img`
  display: inline-block;
`;const FM=Q.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  max-width: 100vw;
  overflow: hidden;
  background: inherit;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: none;
  }
`,zM=({id:e,onEnd:t})=>{const n=we.useRef(),r=we.useRef(),i=we.useCallback(()=>{setTimeout(()=>{console.debug("Setting up Wistia..",window.Wistia),window._wq=window._wq||[],window._wq.push({id:e,onReady:o=>{if(console.debug("on ready"),t){console.debug("on end configured.."),r.current=o;const a=u=>{console.debug("time change");const c=u/o.duration;c>.9&&(console.debug("progress percent ",c),t(),o.unbind("timechange",n.current))};n.current=a,o.bind("timechange",a)}}})},1e3)},[e,t]);return m.jsx(FM,{children:m.jsx("iframe",{title:"wistia",src:`https://fast.wistia.net/embed/iframe/${e}`,allowFullScreen:!0,onLoad:i})})},BM=Q.div`
  /** Add styles here if required */
`,NM=({id:e})=>m.jsx(BM,{children:m.jsx("iframe",{title:"vimeo",src:`https://player.vimeo.com/video/${e}`,allowFullScreen:!0})}),v5=we.createContext(void 0);function WM(e){const t=we.useContext(v5);if(!t)throw new Error(`${e} must be used within a RowStateProvider`);return t}const HM=()=>{const{currentRowIndex:e}=WM("useCurrentRowIndex");return e},VM=({children:e,rowIndex:t})=>m.jsx(v5.Provider,{value:{currentRowIndex:t},children:e}),y5=we.createContext(void 0);function Rh(e){const t=we.useContext(y5);if(!t)throw new Error(`${e} must be used within a CourseStateProvider`);return t}const GM=()=>{const{sections:e}=Rh("useSections");return e},YM=()=>{const{unlockRow:e}=Rh("useUnlockRow");return e},XM=()=>{const{firstLockedRowIndex:e}=Rh("useCheckRowIsGated");return e},KM=()=>{const{activeRowIndex:e}=Rh("useActiveRowIndex");return e},qM=()=>{const{goToRowIndex:e}=Rh("useGoToRowIndex");return e};var x5={exports:{}},w5={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf=we;function QM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var JM=typeof Object.is=="function"?Object.is:QM,ZM=Bf.useState,e9=Bf.useEffect,t9=Bf.useLayoutEffect,n9=Bf.useDebugValue;function r9(e,t){var n=t(),r=ZM({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return t9(function(){i.value=n,i.getSnapshot=t,_v(i)&&o({inst:i})},[e,n,t]),e9(function(){return _v(i)&&o({inst:i}),e(function(){_v(i)&&o({inst:i})})},[e]),n9(n),n}function _v(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!JM(e,n)}catch{return!0}}function i9(e,t){return t()}var o9=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?i9:r9;w5.useSyncExternalStore=Bf.useSyncExternalStore!==void 0?Bf.useSyncExternalStore:o9;x5.exports=w5;var s9=x5.exports,_5={exports:{}},b5={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg=we,a9=s9;function l9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var u9=typeof Object.is=="function"?Object.is:l9,c9=a9.useSyncExternalStore,f9=jg.useRef,d9=jg.useEffect,h9=jg.useMemo,p9=jg.useDebugValue;b5.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=f9(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=h9(function(){function c(g){if(!f){if(f=!0,v=g,g=r(g),i!==void 0&&a.hasValue){var S=a.value;if(i(S,g))return b=S}return b=g}if(S=b,u9(v,g))return S;var w=r(g);return i!==void 0&&i(S,w)?S:(v=g,b=w)}var f=!1,v,b,x=n===void 0?null:n;return[function(){return c(t())},x===null?void 0:function(){return c(x())}]},[t,n,r,i]);var u=c9(e,o[0],o[1]);return d9(function(){a.hasValue=!0,a.value=u},[u]),p9(u),u};_5.exports=b5;var g9=_5.exports;function m9(e){e()}let S5=m9;const v9=e=>S5=e,y9=()=>S5,iS=Symbol.for("react-redux-context"),oS=typeof globalThis<"u"?globalThis:{};function x9(){var e;if(!we.createContext)return{};const t=(e=oS[iS])!=null?e:oS[iS]=new Map;let n=t.get(we.createContext);return n||(n=we.createContext(null),t.set(we.createContext,n)),n}const $u=x9();function uw(e=$u){return function(){return we.useContext(e)}}const C5=uw(),w9=()=>{throw new Error("uSES not initialized!")};let k5=w9;const _9=e=>{k5=e},b9=(e,t)=>e===t;function S9(e=$u){const t=e===$u?C5:uw(e);return function(r,i={}){const{equalityFn:o=b9,stabilityCheck:a=void 0,noopCheck:u=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:f,getServerState:v,stabilityCheck:b,noopCheck:x}=t();we.useRef(!0);const g=we.useCallback({[r.name](w){return r(w)}}[r.name],[r,b,a]),S=k5(f.addNestedSub,c.getState,v||c.getState,g,o);return we.useDebugValue(S),S}}const fy=S9();function dy(){return dy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dy.apply(this,arguments)}function C9(){const e=y9();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const sS={notify(){},get:()=>[]};function k9(e,t){let n,r=sS,i=0,o=!1;function a(w){v();const j=r.subscribe(w);let $=!1;return()=>{$||($=!0,j(),b())}}function u(){r.notify()}function c(){S.onStateChange&&S.onStateChange()}function f(){return o}function v(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=C9())}function b(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=sS)}function x(){o||(o=!0,v())}function g(){o&&(o=!1,b())}const S={addNestedSub:a,notifyNestedSubs:u,handleChangeWrapper:c,isSubscribed:f,trySubscribe:x,tryUnsubscribe:g,getListeners:()=>r};return S}const E9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",T9=E9?we.useLayoutEffect:we.useEffect;function A9({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:o="once"}){const a=we.useMemo(()=>{const f=k9(e);return{store:e,subscription:f,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:o}},[e,r,i,o]),u=we.useMemo(()=>e.getState(),[e]);T9(()=>{const{subscription:f}=a;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),u!==e.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[a,u]);const c=t||$u;return we.createElement(c.Provider,{value:a},n)}function E5(e=$u){const t=e===$u?C5:uw(e);return function(){const{store:r}=t();return r}}const R9=E5();function P9(e=$u){const t=e===$u?R9:E5(e);return function(){return t().dispatch}}const cw=P9();_9(g9.useSyncExternalStoreWithSelector);v9(sg.unstable_batchedUpdates);function ta(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ou(e){return!!e&&!!e[Gn]}function Cl(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===F9}(e)||Array.isArray(e)||!!e[hS]||!!(!((t=e.constructor)===null||t===void 0)&&t[hS])||fw(e)||dw(e))}function Ac(e,t,n){n===void 0&&(n=!1),Kf(e)===0?(n?Object.keys:Sf)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Kf(e){var t=e[Gn];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:fw(e)?2:dw(e)?3:0}function bf(e,t){return Kf(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function $9(e,t){return Kf(e)===2?e.get(t):e[t]}function T5(e,t,n){var r=Kf(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function A5(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function fw(e){return M9&&e instanceof Map}function dw(e){return D9&&e instanceof Set}function oc(e){return e.o||e.t}function hw(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=P5(e);delete t[Gn];for(var n=Sf(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function pw(e,t){return t===void 0&&(t=!1),gw(e)||Ou(e)||!Cl(e)||(Kf(e)>1&&(e.set=e.add=e.clear=e.delete=O9),Object.freeze(e),t&&Ac(e,function(n,r){return pw(r,!0)},!0)),e}function O9(){ta(2)}function gw(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function La(e){var t=my[e];return t||ta(18,e),t}function j9(e,t){my[e]||(my[e]=t)}function hy(){return mh}function bv(e,t){t&&(La("Patches"),e.u=[],e.s=[],e.v=t)}function $0(e){py(e),e.p.forEach(I9),e.p=null}function py(e){e===mh&&(mh=e.l)}function aS(e){return mh={p:[],l:mh,h:e,m:!0,_:0}}function I9(e){var t=e[Gn];t.i===0||t.i===1?t.j():t.g=!0}function Sv(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||La("ES5").S(t,e,r),r?(n[Gn].P&&($0(t),ta(4)),Cl(e)&&(e=O0(t,e),t.l||j0(t,e)),t.u&&La("Patches").M(n[Gn].t,e,t.u,t.s)):e=O0(t,n,[]),$0(t),t.u&&t.v(t.u,t.s),e!==R5?e:void 0}function O0(e,t,n){if(gw(t))return t;var r=t[Gn];if(!r)return Ac(t,function(u,c){return lS(e,r,t,u,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return j0(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=hw(r.k):r.o,o=i,a=!1;r.i===3&&(o=new Set(i),i.clear(),a=!0),Ac(o,function(u,c){return lS(e,r,i,u,c,n,a)}),j0(e,i,!1),n&&e.u&&La("Patches").N(r,n,e.u,e.s)}return r.o}function lS(e,t,n,r,i,o,a){if(Ou(i)){var u=O0(e,i,o&&t&&t.i!==3&&!bf(t.R,r)?o.concat(r):void 0);if(T5(n,r,u),!Ou(u))return;e.m=!1}else a&&n.add(i);if(Cl(i)&&!gw(i)){if(!e.h.D&&e._<1)return;O0(e,i),t&&t.A.l||j0(e,i)}}function j0(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&pw(t,n)}function Cv(e,t){var n=e[Gn];return(n?oc(n):e)[t]}function uS(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function ou(e){e.P||(e.P=!0,e.l&&ou(e.l))}function kv(e){e.o||(e.o=hw(e.t))}function gy(e,t,n){var r=fw(t)?La("MapSet").F(t,n):dw(t)?La("MapSet").T(t,n):e.O?function(i,o){var a=Array.isArray(i),u={i:a?1:0,A:o?o.A:hy(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},c=u,f=vh;a&&(c=[u],f=Td);var v=Proxy.revocable(c,f),b=v.revoke,x=v.proxy;return u.k=x,u.j=b,x}(t,n):La("ES5").J(t,n);return(n?n.A:hy()).p.push(r),r}function L9(e){return Ou(e)||ta(22,e),function t(n){if(!Cl(n))return n;var r,i=n[Gn],o=Kf(n);if(i){if(!i.P&&(i.i<4||!La("ES5").K(i)))return i.t;i.I=!0,r=cS(n,o),i.I=!1}else r=cS(n,o);return Ac(r,function(a,u){i&&$9(i.t,a)===u||T5(r,a,t(u))}),o===3?new Set(r):r}(e)}function cS(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return hw(e)}function U9(){function e(o,a){var u=i[o];return u?u.enumerable=a:i[o]=u={configurable:!0,enumerable:a,get:function(){var c=this[Gn];return vh.get(c,o)},set:function(c){var f=this[Gn];vh.set(f,o,c)}},u}function t(o){for(var a=o.length-1;a>=0;a--){var u=o[a][Gn];if(!u.P)switch(u.i){case 5:r(u)&&ou(u);break;case 4:n(u)&&ou(u)}}}function n(o){for(var a=o.t,u=o.k,c=Sf(u),f=c.length-1;f>=0;f--){var v=c[f];if(v!==Gn){var b=a[v];if(b===void 0&&!bf(a,v))return!0;var x=u[v],g=x&&x[Gn];if(g?g.t!==b:!A5(x,b))return!0}}var S=!!a[Gn];return c.length!==Sf(a).length+(S?0:1)}function r(o){var a=o.k;if(a.length!==o.t.length)return!0;var u=Object.getOwnPropertyDescriptor(a,a.length-1);if(u&&!u.get)return!0;for(var c=0;c<a.length;c++)if(!a.hasOwnProperty(c))return!0;return!1}var i={};j9("ES5",{J:function(o,a){var u=Array.isArray(o),c=function(v,b){if(v){for(var x=Array(b.length),g=0;g<b.length;g++)Object.defineProperty(x,""+g,e(g,!0));return x}var S=P5(b);delete S[Gn];for(var w=Sf(S),j=0;j<w.length;j++){var $=w[j];S[$]=e($,v||!!S[$].enumerable)}return Object.create(Object.getPrototypeOf(b),S)}(u,o),f={i:u?5:4,A:a?a.A:hy(),P:!1,I:!1,R:{},l:a,t:o,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,Gn,{value:f,writable:!0}),c},S:function(o,a,u){u?Ou(a)&&a[Gn].A===o&&t(o.p):(o.u&&function c(f){if(f&&typeof f=="object"){var v=f[Gn];if(v){var b=v.t,x=v.k,g=v.R,S=v.i;if(S===4)Ac(x,function(E){E!==Gn&&(b[E]!==void 0||bf(b,E)?g[E]||c(x[E]):(g[E]=!0,ou(v)))}),Ac(b,function(E){x[E]!==void 0||bf(x,E)||(g[E]=!1,ou(v))});else if(S===5){if(r(v)&&(ou(v),g.length=!0),x.length<b.length)for(var w=x.length;w<b.length;w++)g[w]=!1;else for(var j=b.length;j<x.length;j++)g[j]=!0;for(var $=Math.min(x.length,b.length),y=0;y<$;y++)x.hasOwnProperty(y)||(g[y]=!0),g[y]===void 0&&c(x[y])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var fS,mh,mw=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",M9=typeof Map<"u",D9=typeof Set<"u",dS=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",R5=mw?Symbol.for("immer-nothing"):((fS={})["immer-nothing"]=!0,fS),hS=mw?Symbol.for("immer-draftable"):"__$immer_draftable",Gn=mw?Symbol.for("immer-state"):"__$immer_state",F9=""+Object.prototype.constructor,Sf=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,P5=Object.getOwnPropertyDescriptors||function(e){var t={};return Sf(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},my={},vh={get:function(e,t){if(t===Gn)return e;var n=oc(e);if(!bf(n,t))return function(i,o,a){var u,c=uS(o,a);return c?"value"in c?c.value:(u=c.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Cl(r)?r:r===Cv(e.t,t)?(kv(e),e.o[t]=gy(e.A.h,r,e)):r},has:function(e,t){return t in oc(e)},ownKeys:function(e){return Reflect.ownKeys(oc(e))},set:function(e,t,n){var r=uS(oc(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Cv(oc(e),t),o=i?.[Gn];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(A5(n,i)&&(n!==void 0||bf(e.t,t)))return!0;kv(e),ou(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Cv(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,kv(e),ou(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=oc(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){ta(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){ta(12)}},Td={};Ac(vh,function(e,t){Td[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Td.deleteProperty=function(e,t){return Td.set.call(this,e,t,void 0)},Td.set=function(e,t,n){return vh.set.call(this,e[0],t,n,e[0])};var z9=function(){function e(n){var r=this;this.O=dS,this.D=!0,this.produce=function(i,o,a){if(typeof i=="function"&&typeof o!="function"){var u=o;o=i;var c=r;return function(w){var j=this;w===void 0&&(w=u);for(var $=arguments.length,y=Array($>1?$-1:0),E=1;E<$;E++)y[E-1]=arguments[E];return c.produce(w,function(I){var k;return(k=o).call.apply(k,[j,I].concat(y))})}}var f;if(typeof o!="function"&&ta(6),a!==void 0&&typeof a!="function"&&ta(7),Cl(i)){var v=aS(r),b=gy(r,i,void 0),x=!0;try{f=o(b),x=!1}finally{x?$0(v):py(v)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(w){return bv(v,a),Sv(w,v)},function(w){throw $0(v),w}):(bv(v,a),Sv(f,v))}if(!i||typeof i!="object"){if((f=o(i))===void 0&&(f=i),f===R5&&(f=void 0),r.D&&pw(f,!0),a){var g=[],S=[];La("Patches").M(i,f,g,S),a(g,S)}return f}ta(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(f){for(var v=arguments.length,b=Array(v>1?v-1:0),x=1;x<v;x++)b[x-1]=arguments[x];return r.produceWithPatches(f,function(g){return i.apply(void 0,[g].concat(b))})};var a,u,c=r.produce(i,o,function(f,v){a=f,u=v});return typeof Promise<"u"&&c instanceof Promise?c.then(function(f){return[f,a,u]}):[c,a,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Cl(n)||ta(8),Ou(n)&&(n=L9(n));var r=aS(this),i=gy(this,n,void 0);return i[Gn].C=!0,py(r),i},t.finishDraft=function(n,r){var i=n&&n[Gn],o=i.A;return bv(o,r),Sv(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!dS&&ta(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var a=La("Patches").$;return Ou(n)?a(n,r):this.produce(n,function(u){return a(u,r)})},e}(),rs=new z9,$5=rs.produce;rs.produceWithPatches.bind(rs);rs.setAutoFreeze.bind(rs);rs.setUseProxies.bind(rs);rs.applyPatches.bind(rs);rs.createDraft.bind(rs);rs.finishDraft.bind(rs);function yh(e){"@babel/helpers - typeof";return yh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yh(e)}function B9(e,t){if(yh(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(yh(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function N9(e){var t=B9(e,"string");return yh(t)==="symbol"?t:String(t)}function W9(e,t,n){return t=N9(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pS(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gS(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pS(Object(n),!0).forEach(function(r){W9(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pS(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zi(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var mS=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ev=function(){return Math.random().toString(36).substring(7).split("").join(".")},I0={INIT:"@@redux/INIT"+Ev(),REPLACE:"@@redux/REPLACE"+Ev(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ev()}};function H9(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function O5(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(zi(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(zi(1));return n(O5)(e,t)}if(typeof e!="function")throw new Error(zi(2));var i=e,o=t,a=[],u=a,c=!1;function f(){u===a&&(u=a.slice())}function v(){if(c)throw new Error(zi(3));return o}function b(w){if(typeof w!="function")throw new Error(zi(4));if(c)throw new Error(zi(5));var j=!0;return f(),u.push(w),function(){if(j){if(c)throw new Error(zi(6));j=!1,f();var y=u.indexOf(w);u.splice(y,1),a=null}}}function x(w){if(!H9(w))throw new Error(zi(7));if(typeof w.type>"u")throw new Error(zi(8));if(c)throw new Error(zi(9));try{c=!0,o=i(o,w)}finally{c=!1}for(var j=a=u,$=0;$<j.length;$++){var y=j[$];y()}return w}function g(w){if(typeof w!="function")throw new Error(zi(10));i=w,x({type:I0.REPLACE})}function S(){var w,j=b;return w={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(zi(11));function E(){y.next&&y.next(v())}E();var I=j(E);return{unsubscribe:I}}},w[mS]=function(){return this},w}return x({type:I0.INIT}),r={dispatch:x,subscribe:b,getState:v,replaceReducer:g},r[mS]=S,r}function V9(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:I0.INIT});if(typeof r>"u")throw new Error(zi(12));if(typeof n(void 0,{type:I0.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(zi(13))})}function j5(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{V9(n)}catch(u){a=u}return function(c,f){if(c===void 0&&(c={}),a)throw a;for(var v=!1,b={},x=0;x<o.length;x++){var g=o[x],S=n[g],w=c[g],j=S(w,f);if(typeof j>"u")throw f&&f.type,new Error(zi(14));b[g]=j,v=v||j!==w}return v=v||o.length!==Object.keys(c).length,v?b:c}}function L0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function G9(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(zi(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},u=t.map(function(c){return c(a)});return o=L0.apply(void 0,u)(i.dispatch),gS(gS({},i),{},{dispatch:o})}}}function I5(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(u){return typeof u=="function"?u(i,o,e):a(u)}}};return t}var L5=I5();L5.withExtraArgument=I5;const vS=L5;var U5=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Y9=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(f){return function(v){return c([f,v])}}function c(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=f[0]&2?i.return:f[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,f[1])).done)return o;switch(i=0,o&&(f=[f[0]&2,o.value]),f[0]){case 0:case 1:o=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!o||f[1]>o[0]&&f[1]<o[3])){n.label=f[1];break}if(f[0]===6&&n.label<o[1]){n.label=o[1],o=f;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(f);break}o[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(v){f=[6,v],i=0}finally{r=o=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Nf=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},X9=Object.defineProperty,K9=Object.defineProperties,q9=Object.getOwnPropertyDescriptors,yS=Object.getOwnPropertySymbols,Q9=Object.prototype.hasOwnProperty,J9=Object.prototype.propertyIsEnumerable,xS=function(e,t,n){return t in e?X9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ku=function(e,t){for(var n in t||(t={}))Q9.call(t,n)&&xS(e,n,t[n]);if(yS)for(var r=0,i=yS(t);r<i.length;r++){var n=i[r];J9.call(t,n)&&xS(e,n,t[n])}return e},Tv=function(e,t){return K9(e,q9(t))},Z9=function(e,t,n){return new Promise(function(r,i){var o=function(c){try{u(n.next(c))}catch(f){i(f)}},a=function(c){try{u(n.throw(c))}catch(f){i(f)}},u=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(o,a)};u((n=n.apply(e,t)).next())})},eD=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?L0:L0.apply(null,arguments)};function tD(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function Eu(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return ku(ku({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var nD=function(e){U5(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Nf([void 0],n[0].concat(this)))):new(t.bind.apply(t,Nf([void 0],n.concat(this))))},t}(Array),rD=function(e){U5(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Nf([void 0],n[0].concat(this)))):new(t.bind.apply(t,Nf([void 0],n.concat(this))))},t}(Array);function vy(e){return Cl(e)?$5(e,function(){}):e}function iD(e){return typeof e=="boolean"}function oD(){return function(t){return sD(t)}}function sD(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new nD;return n&&(iD(n)?r.push(vS):r.push(vS.withExtraArgument(n.extraArgument))),r}var aD=!0;function lD(e){var t=oD(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,a=o===void 0?t():o,u=n.devTools,c=u===void 0?!0:u,f=n.preloadedState,v=f===void 0?void 0:f,b=n.enhancers,x=b===void 0?void 0:b,g;if(typeof i=="function")g=i;else if(tD(i))g=j5(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var S=a;typeof S=="function"&&(S=S(t));var w=G9.apply(void 0,S),j=L0;c&&(j=eD(ku({trace:!aD},typeof c=="object"&&c)));var $=new rD(w),y=$;Array.isArray(x)?y=Nf([w],x):typeof x=="function"&&(y=x($));var E=j.apply(void 0,y);return O5(g,v,E)}function M5(e){var t={},n=[],r,i={addCase:function(o,a){var u=typeof o=="string"?o:o.type;if(!u)throw new Error("`builder.addCase` cannot be called with an empty action type");if(u in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[u]=a,i},addMatcher:function(o,a){return n.push({matcher:o,reducer:a}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function uD(e){return typeof e=="function"}function cD(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?M5(t):[t,n,r],o=i[0],a=i[1],u=i[2],c;if(uD(e))c=function(){return vy(e())};else{var f=vy(e);c=function(){return f}}function v(b,x){b===void 0&&(b=c());var g=Nf([o[x.type]],a.filter(function(S){var w=S.matcher;return w(x)}).map(function(S){var w=S.reducer;return w}));return g.filter(function(S){return!!S}).length===0&&(g=[u]),g.reduce(function(S,w){if(w)if(Ou(S)){var j=S,$=w(j,x);return $===void 0?S:$}else{if(Cl(S))return $5(S,function(y){return w(y,x)});var $=w(S,x);if($===void 0){if(S===null)return S;throw Error("A case reducer on a non-draftable value must not return undefined")}return $}return S},b)}return v.getInitialState=c,v}function fD(e,t){return e+"/"+t}function vw(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:vy(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},a={},u={};i.forEach(function(v){var b=r[v],x=fD(t,v),g,S;"reducer"in b?(g=b.reducer,S=b.prepare):g=b,o[v]=g,a[x]=g,u[v]=S?Eu(x,S):Eu(x)});function c(){var v=typeof e.extraReducers=="function"?M5(e.extraReducers):[e.extraReducers],b=v[0],x=b===void 0?{}:b,g=v[1],S=g===void 0?[]:g,w=v[2],j=w===void 0?void 0:w,$=ku(ku({},x),a);return cD(n,function(y){for(var E in $)y.addCase(E,$[E]);for(var I=0,k=S;I<k.length;I++){var D=k[I];y.addMatcher(D.matcher,D.reducer)}j&&y.addDefaultCase(j)})}var f;return{name:t,reducer:function(v,b){return f||(f=c()),f(v,b)},actions:u,caseReducers:o,getInitialState:function(){return f||(f=c()),f.getInitialState()}}}var dD="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hD=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=dD[Math.random()*64|0];return t},pD=["name","message","stack","code"],Av=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),wS=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),gD=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=pD;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=Eu(t+"/fulfilled",function(f,v,b,x){return{payload:f,meta:Tv(ku({},x||{}),{arg:b,requestId:v,requestStatus:"fulfilled"})}}),o=Eu(t+"/pending",function(f,v,b){return{payload:void 0,meta:Tv(ku({},b||{}),{arg:v,requestId:f,requestStatus:"pending"})}}),a=Eu(t+"/rejected",function(f,v,b,x,g){return{payload:x,error:(r&&r.serializeError||gD)(f||"Rejected"),meta:Tv(ku({},g||{}),{arg:b,requestId:v,rejectedWithValue:!!x,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function c(f){return function(v,b,x){var g=r?.idGenerator?r.idGenerator(f):hD(),S=new u,w;function j(y){w=y,S.abort()}var $=function(){return Z9(this,null,function(){var y,E,I,k,D,R,O;return Y9(this,function(G){switch(G.label){case 0:return G.trys.push([0,4,,5]),k=(y=r?.condition)==null?void 0:y.call(r,f,{getState:b,extra:x}),vD(k)?[4,k]:[3,2];case 1:k=G.sent(),G.label=2;case 2:if(k===!1||S.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return D=new Promise(function(q,K){return S.signal.addEventListener("abort",function(){return K({name:"AbortError",message:w||"Aborted"})})}),v(o(g,f,(E=r?.getPendingMeta)==null?void 0:E.call(r,{requestId:g,arg:f},{getState:b,extra:x}))),[4,Promise.race([D,Promise.resolve(n(f,{dispatch:v,getState:b,extra:x,requestId:g,signal:S.signal,abort:j,rejectWithValue:function(q,K){return new Av(q,K)},fulfillWithValue:function(q,K){return new wS(q,K)}})).then(function(q){if(q instanceof Av)throw q;return q instanceof wS?i(q.payload,g,f,q.meta):i(q,g,f)})])];case 3:return I=G.sent(),[3,5];case 4:return R=G.sent(),I=R instanceof Av?a(null,g,f,R.payload,R.meta):a(R,g,f),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&a.match(I)&&I.meta.condition,O||v(I),[2,I]}})})}();return Object.assign($,{abort:j,requestId:g,arg:f,unwrap:function(){return $.then(mD)}})}}return Object.assign(c,{pending:o,rejected:a,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function mD(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function vD(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var yw="listenerMiddleware";Eu(yw+"/add");Eu(yw+"/removeAll");Eu(yw+"/remove");var _S;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);U9();const yD={completionStatus:{},activeSectionIndex:0,sectionIds:[],sectionRowCounts:{}},xD=vw({name:"sections",initialState:yD,reducers:{completeSection(e,t){const n=t.payload;e.completionStatus[n]=!0},setActiveSectionIndex(e,t){e.activeSectionIndex=t.payload},incrementActiveSectionIndex(e){e.activeSectionIndex+=1},initializeSectionIds(e,t){e.sectionIds=t.payload},setSectionRowCount:(e,t)=>{const{sectionIndex:n,rowCount:r}=t.payload;e.sectionRowCounts[n]=r},updateSectionRowCount:(e,t)=>{const{sectionIndex:n,change:r}=t.payload;e.sectionRowCounts[n]!==void 0&&(e.sectionRowCounts[n]+=r)}}}),wD=xD.reducer,_D={completionStatus:{},activeRowIndex:0,rowIds:[],gatedRows:[]},D5=vw({name:"rows",initialState:_D,reducers:{completeRow(e,t){const n=t.payload;e.completionStatus[n]=!0},setActiveRowIndex(e,t){e.activeRowIndex=t.payload},incrementActiveRowIndex(e){e.activeRowIndex+=1},addRowId(e,t){const n=t.payload;e.rowIds.push(n)},unlockRow:(e,t)=>{const n=t.payload;e.gatedRows=e.gatedRows.filter(r=>r!==n)},lockRow:(e,t)=>{const n=t.payload;e.gatedRows.push(n)}}}),{completeRow:EW,setActiveRowIndex:bS,incrementActiveRowIndex:TW,addRowId:bD,unlockRow:SD,lockRow:CD}=D5.actions,kD=D5.reducer,ED={totalSections:0},TD=vw({name:"course",initialState:ED,reducers:{setTotalSections:(e,t)=>{e.totalSections=t.payload}}}),AD=TD.reducer,RD=j5({sections:wD,rows:kD,course:AD}),PD=lD({reducer:RD}),$D=({inputSections:e,getRowIndex:t,getRowId:n})=>{const r=fy(f=>f.rows.gatedRows),[i,o]=we.useState(null),a=cw();we.useEffect(()=>{console.debug("searching for first locked row...");let f=!1;if(r.length>0){const v=r[0],b=t(v);b!==-1&&(o(b),f=!0,console.debug("...row",b,"is locked."))}f||(o(null),console.debug("...none found"))},[r,t,e]);const u=we.useCallback(f=>r[f]||!1,[r]),c=we.useCallback(f=>{const v=n(f);if(v===null){console.warn("Trying to unlock row",f,"but no ID is stored for that row.");return}a(SD(v))},[a,n]);return{firstLockedRowIndex:i,checkRowIsGated:u,unlockRowFunc:c}};var U0={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */U0.exports;(function(e,t){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",u="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",f=500,v="__lodash_placeholder__",b=1,x=2,g=4,S=1,w=2,j=1,$=2,y=4,E=8,I=16,k=32,D=64,R=128,O=256,G=512,q=30,K="...",ee=800,ae=16,le=1,Re=2,Ce=3,ce=1/0,ie=9007199254740991,te=17976931348623157e292,xe=0/0,$e=4294967295,Ee=$e-1,_e=$e>>>1,M=[["ary",R],["bind",j],["bindKey",$],["curry",E],["curryRight",I],["flip",G],["partial",k],["partialRight",D],["rearg",O]],A="[object Arguments]",T="[object Array]",V="[object AsyncFunction]",N="[object Boolean]",he="[object Date]",oe="[object DOMException]",Se="[object Error]",Oe="[object Function]",Pe="[object GeneratorFunction]",Xe="[object Map]",Ne="[object Number]",Ze="[object Null]",Me="[object Object]",st="[object Promise]",Lt="[object Proxy]",it="[object RegExp]",$t="[object Set]",Nn="[object String]",et="[object Symbol]",tt="[object Undefined]",Jt="[object WeakMap]",Or="[object WeakSet]",ur="[object ArrayBuffer]",Rn="[object DataView]",Al="[object Float32Array]",jr="[object Float64Array]",Rl="[object Int8Array]",Ba="[object Int16Array]",Us="[object Int32Array]",Yi="[object Uint8Array]",bi="[object Uint8ClampedArray]",Ms="[object Uint16Array]",Po="[object Uint32Array]",Pl=/\b__p \+= '';/g,$l=/\b(__p \+=) '' \+/g,Na=/(__e\(.*?\)|\b__t\)) \+\n'';/g,br=/&(?:amp|lt|gt|quot|#39);/g,Ol=/[&<>"']/g,Si=RegExp(br.source),Wa=RegExp(Ol.source),Fu=/<%-([\s\S]+?)%>/g,Dt=/<%([\s\S]+?)%>/g,jc=/<%=([\s\S]+?)%>/g,jl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zu=/^\w*$/,ri=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ds=/[\\^$.*+?()[\]{}|]/g,ua=RegExp(Ds.source),Ha=/^\s+/,Qe=/\s/,Il=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,$o=/\{\n\/\* \[wrapped with (.+)\] \*/,Bu=/,? & /,Ic=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ci=/[()=,{}\[\]\/\s]/,Va=/\\(\\)?/g,Xr=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Kn=/\w*$/,Ga=/^[-+]0x[0-9a-f]+$/i,Fs=/^0b[01]+$/i,ii=/^\[object .+?Constructor\]$/,Ll=/^0o[0-7]+$/i,ca=/^(?:0|[1-9]\d*)$/,Ul=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fa=/($^)/,oi=/['\n\r\u2028\u2029\\]/g,Oo="\\ud800-\\udfff",jo="\\u0300-\\u036f",zs="\\ufe20-\\ufe2f",as="\\u20d0-\\u20ff",Bs=jo+zs+as,Ns="\\u2700-\\u27bf",Ws="a-z\\xdf-\\xf6\\xf8-\\xff",Tn="\\xac\\xb1\\xd7\\xf7",Kr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",si="\\u2000-\\u206f",Hs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",In="A-Z\\xc0-\\xd6\\xd8-\\xde",Sr="\\ufe0e\\ufe0f",so=Tn+Kr+si+Hs,Ya="['’]",ki="["+Oo+"]",Xa="["+so+"]",Ir="["+Bs+"]",Vs="\\d+",Ot="["+Ns+"]",Ei="["+Ws+"]",qr="[^"+Oo+so+Vs+Ns+Ws+In+"]",Ln="\\ud83c[\\udffb-\\udfff]",qn="(?:"+Ir+"|"+Ln+")",da="[^"+Oo+"]",yn="(?:\\ud83c[\\udde6-\\uddff]){2}",ao="[\\ud800-\\udbff][\\udc00-\\udfff]",Xi="["+In+"]",Io="\\u200d",ai="(?:"+Ei+"|"+qr+")",ha="(?:"+Xi+"|"+qr+")",Pt="(?:"+Ya+"(?:d|ll|m|re|s|t|ve))?",Ka="(?:"+Ya+"(?:D|LL|M|RE|S|T|VE))?",lo=qn+"?",pa="["+Sr+"]?",ls="(?:"+Io+"(?:"+[da,yn,ao].join("|")+")"+pa+lo+")*",Ml="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ga="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Lo=pa+lo+ls,Jf="(?:"+[Ot,yn,ao].join("|")+")"+Lo,Nu="(?:"+[da+Ir+"?",Ir,yn,ao,ki].join("|")+")",uo=RegExp(Ya,"g"),Lr=RegExp(Ir,"g"),Uo=RegExp(Ln+"(?="+Ln+")|"+Nu+Lo,"g"),ma=RegExp([Xi+"?"+Ei+"+"+Pt+"(?="+[Xa,Xi,"$"].join("|")+")",ha+"+"+Ka+"(?="+[Xa,Xi+ai,"$"].join("|")+")",Xi+"?"+ai+"+"+Pt,Xi+"+"+Ka,ga,Ml,Vs,Jf].join("|"),"g"),va=RegExp("["+Io+Oo+Bs+Sr+"]"),Qn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ti=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qa=-1,zt={};zt[Al]=zt[jr]=zt[Rl]=zt[Ba]=zt[Us]=zt[Yi]=zt[bi]=zt[Ms]=zt[Po]=!0,zt[A]=zt[T]=zt[ur]=zt[N]=zt[Rn]=zt[he]=zt[Se]=zt[Oe]=zt[Xe]=zt[Ne]=zt[Me]=zt[it]=zt[$t]=zt[Nn]=zt[Jt]=!1;var an={};an[A]=an[T]=an[ur]=an[Rn]=an[N]=an[he]=an[Al]=an[jr]=an[Rl]=an[Ba]=an[Us]=an[Xe]=an[Ne]=an[Me]=an[it]=an[$t]=an[Nn]=an[et]=an[Yi]=an[bi]=an[Ms]=an[Po]=!0,an[Se]=an[Oe]=an[Jt]=!1;var Gs={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ai={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ya={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ri={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ki=parseFloat,Qa=parseInt,Ja=typeof Ss=="object"&&Ss&&Ss.Object===Object&&Ss,Dl=typeof self=="object"&&self&&self.Object===Object&&self,Jn=Ja||Dl||Function("return this")(),Wu=t&&!t.nodeType&&t,Pi=Wu&&!0&&e&&!e.nodeType&&e,li=Pi&&Pi.exports===Wu,Fl=li&&Ja.process,cr=function(){try{var X=Pi&&Pi.require&&Pi.require("util").types;return X||Fl&&Fl.binding&&Fl.binding("util")}catch{}}(),zl=cr&&cr.isArrayBuffer,Lc=cr&&cr.isDate,fr=cr&&cr.isMap,Bl=cr&&cr.isRegExp,ui=cr&&cr.isSet,xa=cr&&cr.isTypedArray;function mt(X,ve,me){switch(me.length){case 0:return X.call(ve);case 1:return X.call(ve,me[0]);case 2:return X.call(ve,me[0],me[1]);case 3:return X.call(ve,me[0],me[1],me[2])}return X.apply(ve,me)}function Hu(X,ve,me,Ve){for(var de=-1,qe=X==null?0:X.length;++de<qe;){var Wt=X[de];ve(Ve,Wt,me(Wt),X)}return Ve}function Ur(X,ve){for(var me=-1,Ve=X==null?0:X.length;++me<Ve&&ve(X[me],me,X)!==!1;);return X}function Nl(X,ve){for(var me=X==null?0:X.length;me--&&ve(X[me],me,X)!==!1;);return X}function Wl(X,ve){for(var me=-1,Ve=X==null?0:X.length;++me<Ve;)if(!ve(X[me],me,X))return!1;return!0}function Mo(X,ve){for(var me=-1,Ve=X==null?0:X.length,de=0,qe=[];++me<Ve;){var Wt=X[me];ve(Wt,me,X)&&(qe[de++]=Wt)}return qe}function Hl(X,ve){var me=X==null?0:X.length;return!!me&&Ke(X,ve,0)>-1}function Za(X,ve,me){for(var Ve=-1,de=X==null?0:X.length;++Ve<de;)if(me(ve,X[Ve]))return!0;return!1}function xn(X,ve){for(var me=-1,Ve=X==null?0:X.length,de=Array(Ve);++me<Ve;)de[me]=ve(X[me],me,X);return de}function us(X,ve){for(var me=-1,Ve=ve.length,de=X.length;++me<Ve;)X[de+me]=ve[me];return X}function ye(X,ve,me,Ve){var de=-1,qe=X==null?0:X.length;for(Ve&&qe&&(me=X[++de]);++de<qe;)me=ve(me,X[de],de,X);return me}function z(X,ve,me,Ve){var de=X==null?0:X.length;for(Ve&&de&&(me=X[--de]);de--;)me=ve(me,X[de],de,X);return me}function Z(X,ve){for(var me=-1,Ve=X==null?0:X.length;++me<Ve;)if(ve(X[me],me,X))return!0;return!1}var H=lt("length");function Y(X){return X.split("")}function fe(X){return X.match(Ic)||[]}function Te(X,ve,me){var Ve;return me(X,function(de,qe,Wt){if(ve(de,qe,Wt))return Ve=qe,!1}),Ve}function be(X,ve,me,Ve){for(var de=X.length,qe=me+(Ve?1:-1);Ve?qe--:++qe<de;)if(ve(X[qe],qe,X))return qe;return-1}function Ke(X,ve,me){return ve===ve?pe(X,ve,me):be(X,Vt,me)}function Et(X,ve,me,Ve){for(var de=me-1,qe=X.length;++de<qe;)if(Ve(X[de],ve))return de;return-1}function Vt(X){return X!==X}function Gt(X,ve){var me=X==null?0:X.length;return me?dn(X,ve)/me:xe}function lt(X){return function(ve){return ve==null?n:ve[X]}}function Le(X){return function(ve){return X==null?n:X[ve]}}function ft(X,ve,me,Ve,de){return de(X,function(qe,Wt,Ae){me=Ve?(Ve=!1,qe):ve(me,qe,Wt,Ae)}),me}function On(X,ve){var me=X.length;for(X.sort(ve);me--;)X[me]=X[me].value;return X}function dn(X,ve){for(var me,Ve=-1,de=X.length;++Ve<de;){var qe=ve(X[Ve]);qe!==n&&(me=me===n?qe:me+qe)}return me}function Un(X,ve){for(var me=-1,Ve=Array(X);++me<X;)Ve[me]=ve(me);return Ve}function An(X,ve){return xn(ve,function(me){return[me,X[me]]})}function Zn(X){return X&&X.slice(0,We(X)+1).replace(Ha,"")}function ut(X){return function(ve){return X(ve)}}function Wr(X,ve){return xn(ve,function(me){return X[me]})}function Nt(X,ve){return X.has(ve)}function _t(X,ve){for(var me=-1,Ve=X.length;++me<Ve&&Ke(ve,X[me],0)>-1;);return me}function Cr(X,ve){for(var me=X.length;me--&&Ke(ve,X[me],0)>-1;);return me}function Hr(X,ve){for(var me=X.length,Ve=0;me--;)X[me]===ve&&++Ve;return Ve}var ht=Le(Gs),dr=Le(Ai);function Tt(X){return"\\"+Ri[X]}function $i(X,ve){return X==null?n:X[ve]}function wn(X){return va.test(X)}function d(X){return Qn.test(X)}function p(X){for(var ve,me=[];!(ve=X.next()).done;)me.push(ve.value);return me}function _(X){var ve=-1,me=Array(X.size);return X.forEach(function(Ve,de){me[++ve]=[de,Ve]}),me}function P(X,ve){return function(me){return X(ve(me))}}function F(X,ve){for(var me=-1,Ve=X.length,de=0,qe=[];++me<Ve;){var Wt=X[me];(Wt===ve||Wt===v)&&(X[me]=v,qe[de++]=me)}return qe}function L(X){var ve=-1,me=Array(X.size);return X.forEach(function(Ve){me[++ve]=Ve}),me}function ne(X){var ve=-1,me=Array(X.size);return X.forEach(function(Ve){me[++ve]=[Ve,Ve]}),me}function pe(X,ve,me){for(var Ve=me-1,de=X.length;++Ve<de;)if(X[Ve]===ve)return Ve;return-1}function ke(X,ve,me){for(var Ve=me+1;Ve--;)if(X[Ve]===ve)return Ve;return Ve}function ue(X){return wn(X)?se(X):H(X)}function Ue(X){return wn(X)?De(X):Y(X)}function We(X){for(var ve=X.length;ve--&&Qe.test(X.charAt(ve)););return ve}var Ge=Le(ya);function se(X){for(var ve=Uo.lastIndex=0;Uo.test(X);)++ve;return ve}function De(X){return X.match(Uo)||[]}function Fe(X){return X.match(ma)||[]}var dt=function X(ve){ve=ve==null?Jn:pt.defaults(Jn.Object(),ve,pt.pick(Jn,Ti));var me=ve.Array,Ve=ve.Date,de=ve.Error,qe=ve.Function,Wt=ve.Math,Ae=ve.Object,Ye=ve.RegExp,Mt=ve.String,yt=ve.TypeError,St=me.prototype,wt=qe.prototype,at=Ae.prototype,jt=ve["__core-js_shared__"],_n=wt.toString,gt=at.hasOwnProperty,hr=0,hn=function(){var s=/[^.]+$/.exec(jt&&jt.keys&&jt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),pr=at.toString,cs=_n.call(Ae),co=Jn._,fo=Ye("^"+_n.call(gt).replace(Ds,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mr=li?ve.Buffer:n,Mn=ve.Symbol,Oi=ve.Uint8Array,Yt=Mr?Mr.allocUnsafe:n,Vr=P(Ae.getPrototypeOf,Ae),ji=Ae.create,ci=at.propertyIsEnumerable,Ii=St.splice,wa=Mn?Mn.isConcatSpreadable:n,fs=Mn?Mn.iterator:n,fi=Mn?Mn.toStringTag:n,It=function(){try{var s=Qu(Ae,"defineProperty");return s({},"",{}),s}catch{}}(),bt=ve.clearTimeout!==Jn.clearTimeout&&ve.clearTimeout,un=Ve&&Ve.now!==Jn.Date.now&&Ve.now,Wn=ve.setTimeout!==Jn.setTimeout&&ve.setTimeout,nt=Wt.ceil,Xt=Wt.floor,Ct=Ae.getOwnPropertySymbols,Kt=Mr?Mr.isBuffer:n,kr=ve.isFinite,nn=St.join,er=P(Ae.keys,Ae),rn=Wt.max,ln=Wt.min,Dn=Ve.now,bn=ve.parseInt,ho=Wt.random,Fn=St.reverse,di=Qu(ve,"DataView"),Li=Qu(ve,"Map"),hi=Qu(ve,"Promise"),Hn=Qu(ve,"Set"),gr=Qu(ve,"WeakMap"),Do=Qu(Ae,"create"),el=gr&&new gr,tr={},Er=Ju(di),ds=Ju(Li),Zf=Ju(hi),Ih=Ju(Hn),Vu=Ju(gr),qi=Mn?Mn.prototype:n,Ys=qi?qi.valueOf:n,Gu=qi?qi.toString:n;function B(s){if(mr(s)&&!Ft(s)&&!(s instanceof en)){if(s instanceof hs)return s;if(gt.call(s,"__wrapped__"))return I_(s)}return new hs(s)}var Uc=function(){function s(){}return function(l){if(!nr(l))return{};if(ji)return ji(l);s.prototype=l;var h=new s;return s.prototype=n,h}}();function Lh(){}function hs(s,l){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}B.templateSettings={escape:Fu,evaluate:Dt,interpolate:jc,variable:"",imports:{_:B}},B.prototype=Lh.prototype,B.prototype.constructor=B,hs.prototype=Uc(Lh.prototype),hs.prototype.constructor=hs;function en(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=$e,this.__views__=[]}function EA(){var s=new en(this.__wrapped__);return s.__actions__=po(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=po(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=po(this.__views__),s}function TA(){if(this.__filtered__){var s=new en(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function AA(){var s=this.__wrapped__.value(),l=this.__dir__,h=Ft(s),C=l<0,U=h?s.length:0,W=z4(0,U,this.__views__),J=W.start,re=W.end,ge=re-J,je=C?re:J-1,Ie=this.__iteratees__,Be=Ie.length,Je=0,ct=ln(ge,this.__takeCount__);if(!h||!C&&U==ge&&ct==ge)return r_(s,this.__actions__);var At=[];e:for(;ge--&&Je<ct;){je+=l;for(var Ht=-1,Rt=s[je];++Ht<Be;){var Zt=Ie[Ht],on=Zt.iteratee,Bo=Zt.type,Zi=on(Rt);if(Bo==Re)Rt=Zi;else if(!Zi){if(Bo==le)continue e;break e}}At[Je++]=Rt}return At}en.prototype=Uc(Lh.prototype),en.prototype.constructor=en;function Yu(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function RA(){this.__data__=Do?Do(null):{},this.size=0}function PA(s){var l=this.has(s)&&delete this.__data__[s];return this.size-=l?1:0,l}function $A(s){var l=this.__data__;if(Do){var h=l[s];return h===c?n:h}return gt.call(l,s)?l[s]:n}function OA(s){var l=this.__data__;return Do?l[s]!==n:gt.call(l,s)}function jA(s,l){var h=this.__data__;return this.size+=this.has(s)?0:1,h[s]=Do&&l===n?c:l,this}Yu.prototype.clear=RA,Yu.prototype.delete=PA,Yu.prototype.get=$A,Yu.prototype.has=OA,Yu.prototype.set=jA;function tl(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function IA(){this.__data__=[],this.size=0}function LA(s){var l=this.__data__,h=Uh(l,s);if(h<0)return!1;var C=l.length-1;return h==C?l.pop():Ii.call(l,h,1),--this.size,!0}function UA(s){var l=this.__data__,h=Uh(l,s);return h<0?n:l[h][1]}function MA(s){return Uh(this.__data__,s)>-1}function DA(s,l){var h=this.__data__,C=Uh(h,s);return C<0?(++this.size,h.push([s,l])):h[C][1]=l,this}tl.prototype.clear=IA,tl.prototype.delete=LA,tl.prototype.get=UA,tl.prototype.has=MA,tl.prototype.set=DA;function nl(s){var l=-1,h=s==null?0:s.length;for(this.clear();++l<h;){var C=s[l];this.set(C[0],C[1])}}function FA(){this.size=0,this.__data__={hash:new Yu,map:new(Li||tl),string:new Yu}}function zA(s){var l=Xh(this,s).delete(s);return this.size-=l?1:0,l}function BA(s){return Xh(this,s).get(s)}function NA(s){return Xh(this,s).has(s)}function WA(s,l){var h=Xh(this,s),C=h.size;return h.set(s,l),this.size+=h.size==C?0:1,this}nl.prototype.clear=FA,nl.prototype.delete=zA,nl.prototype.get=BA,nl.prototype.has=NA,nl.prototype.set=WA;function Xu(s){var l=-1,h=s==null?0:s.length;for(this.__data__=new nl;++l<h;)this.add(s[l])}function HA(s){return this.__data__.set(s,c),this}function VA(s){return this.__data__.has(s)}Xu.prototype.add=Xu.prototype.push=HA,Xu.prototype.has=VA;function Xs(s){var l=this.__data__=new tl(s);this.size=l.size}function GA(){this.__data__=new tl,this.size=0}function YA(s){var l=this.__data__,h=l.delete(s);return this.size=l.size,h}function XA(s){return this.__data__.get(s)}function KA(s){return this.__data__.has(s)}function qA(s,l){var h=this.__data__;if(h instanceof tl){var C=h.__data__;if(!Li||C.length<i-1)return C.push([s,l]),this.size=++h.size,this;h=this.__data__=new nl(C)}return h.set(s,l),this.size=h.size,this}Xs.prototype.clear=GA,Xs.prototype.delete=YA,Xs.prototype.get=XA,Xs.prototype.has=KA,Xs.prototype.set=qA;function Iw(s,l){var h=Ft(s),C=!h&&Zu(s),U=!h&&!C&&Kl(s),W=!h&&!C&&!U&&zc(s),J=h||C||U||W,re=J?Un(s.length,Mt):[],ge=re.length;for(var je in s)(l||gt.call(s,je))&&!(J&&(je=="length"||U&&(je=="offset"||je=="parent")||W&&(je=="buffer"||je=="byteLength"||je=="byteOffset")||sl(je,ge)))&&re.push(je);return re}function Lw(s){var l=s.length;return l?s[nm(0,l-1)]:n}function QA(s,l){return Kh(po(s),Ku(l,0,s.length))}function JA(s){return Kh(po(s))}function Gg(s,l,h){(h!==n&&!Ks(s[l],h)||h===n&&!(l in s))&&rl(s,l,h)}function ed(s,l,h){var C=s[l];(!(gt.call(s,l)&&Ks(C,h))||h===n&&!(l in s))&&rl(s,l,h)}function Uh(s,l){for(var h=s.length;h--;)if(Ks(s[h][0],l))return h;return-1}function ZA(s,l,h,C){return Vl(s,function(U,W,J){l(C,U,h(U),J)}),C}function Uw(s,l){return s&&ba(l,Qr(l),s)}function e4(s,l){return s&&ba(l,mo(l),s)}function rl(s,l,h){l=="__proto__"&&It?It(s,l,{configurable:!0,enumerable:!0,value:h,writable:!0}):s[l]=h}function Yg(s,l){for(var h=-1,C=l.length,U=me(C),W=s==null;++h<C;)U[h]=W?n:Tm(s,l[h]);return U}function Ku(s,l,h){return s===s&&(h!==n&&(s=s<=h?s:h),l!==n&&(s=s>=l?s:l)),s}function ps(s,l,h,C,U,W){var J,re=l&b,ge=l&x,je=l&g;if(h&&(J=U?h(s,C,U,W):h(s)),J!==n)return J;if(!nr(s))return s;var Ie=Ft(s);if(Ie){if(J=N4(s),!re)return po(s,J)}else{var Be=Ui(s),Je=Be==Oe||Be==Pe;if(Kl(s))return s_(s,re);if(Be==Me||Be==A||Je&&!U){if(J=ge||Je?{}:k_(s),!re)return ge?$4(s,e4(J,s)):P4(s,Uw(J,s))}else{if(!an[Be])return U?s:{};J=W4(s,Be,re)}}W||(W=new Xs);var ct=W.get(s);if(ct)return ct;W.set(s,J),eb(s)?s.forEach(function(Rt){J.add(ps(Rt,l,h,Rt,s,W))}):J_(s)&&s.forEach(function(Rt,Zt){J.set(Zt,ps(Rt,l,h,Zt,s,W))});var At=je?ge?hm:dm:ge?mo:Qr,Ht=Ie?n:At(s);return Ur(Ht||s,function(Rt,Zt){Ht&&(Zt=Rt,Rt=s[Zt]),ed(J,Zt,ps(Rt,l,h,Zt,s,W))}),J}function t4(s){var l=Qr(s);return function(h){return Mw(h,s,l)}}function Mw(s,l,h){var C=h.length;if(s==null)return!C;for(s=Ae(s);C--;){var U=h[C],W=l[U],J=s[U];if(J===n&&!(U in s)||!W(J))return!1}return!0}function Dw(s,l,h){if(typeof s!="function")throw new yt(a);return ad(function(){s.apply(n,h)},l)}function td(s,l,h,C){var U=-1,W=Hl,J=!0,re=s.length,ge=[],je=l.length;if(!re)return ge;h&&(l=xn(l,ut(h))),C?(W=Za,J=!1):l.length>=i&&(W=Nt,J=!1,l=new Xu(l));e:for(;++U<re;){var Ie=s[U],Be=h==null?Ie:h(Ie);if(Ie=C||Ie!==0?Ie:0,J&&Be===Be){for(var Je=je;Je--;)if(l[Je]===Be)continue e;ge.push(Ie)}else W(l,Be,C)||ge.push(Ie)}return ge}var Vl=f_(_a),Fw=f_(Kg,!0);function n4(s,l){var h=!0;return Vl(s,function(C,U,W){return h=!!l(C,U,W),h}),h}function Mh(s,l,h){for(var C=-1,U=s.length;++C<U;){var W=s[C],J=l(W);if(J!=null&&(re===n?J===J&&!zo(J):h(J,re)))var re=J,ge=W}return ge}function r4(s,l,h,C){var U=s.length;for(h=Bt(h),h<0&&(h=-h>U?0:U+h),C=C===n||C>U?U:Bt(C),C<0&&(C+=U),C=h>C?0:nb(C);h<C;)s[h++]=l;return s}function zw(s,l){var h=[];return Vl(s,function(C,U,W){l(C,U,W)&&h.push(C)}),h}function pi(s,l,h,C,U){var W=-1,J=s.length;for(h||(h=V4),U||(U=[]);++W<J;){var re=s[W];l>0&&h(re)?l>1?pi(re,l-1,h,C,U):us(U,re):C||(U[U.length]=re)}return U}var Xg=d_(),Bw=d_(!0);function _a(s,l){return s&&Xg(s,l,Qr)}function Kg(s,l){return s&&Bw(s,l,Qr)}function Dh(s,l){return Mo(l,function(h){return al(s[h])})}function qu(s,l){l=Yl(l,s);for(var h=0,C=l.length;s!=null&&h<C;)s=s[Sa(l[h++])];return h&&h==C?s:n}function Nw(s,l,h){var C=l(s);return Ft(s)?C:us(C,h(s))}function Qi(s){return s==null?s===n?tt:Ze:fi&&fi in Ae(s)?F4(s):J4(s)}function qg(s,l){return s>l}function i4(s,l){return s!=null&&gt.call(s,l)}function o4(s,l){return s!=null&&l in Ae(s)}function s4(s,l,h){return s>=ln(l,h)&&s<rn(l,h)}function Qg(s,l,h){for(var C=h?Za:Hl,U=s[0].length,W=s.length,J=W,re=me(W),ge=1/0,je=[];J--;){var Ie=s[J];J&&l&&(Ie=xn(Ie,ut(l))),ge=ln(Ie.length,ge),re[J]=!h&&(l||U>=120&&Ie.length>=120)?new Xu(J&&Ie):n}Ie=s[0];var Be=-1,Je=re[0];e:for(;++Be<U&&je.length<ge;){var ct=Ie[Be],At=l?l(ct):ct;if(ct=h||ct!==0?ct:0,!(Je?Nt(Je,At):C(je,At,h))){for(J=W;--J;){var Ht=re[J];if(!(Ht?Nt(Ht,At):C(s[J],At,h)))continue e}Je&&Je.push(At),je.push(ct)}}return je}function a4(s,l,h,C){return _a(s,function(U,W,J){l(C,h(U),W,J)}),C}function nd(s,l,h){l=Yl(l,s),s=R_(s,l);var C=s==null?s:s[Sa(ms(l))];return C==null?n:mt(C,s,h)}function Ww(s){return mr(s)&&Qi(s)==A}function l4(s){return mr(s)&&Qi(s)==ur}function u4(s){return mr(s)&&Qi(s)==he}function rd(s,l,h,C,U){return s===l?!0:s==null||l==null||!mr(s)&&!mr(l)?s!==s&&l!==l:c4(s,l,h,C,rd,U)}function c4(s,l,h,C,U,W){var J=Ft(s),re=Ft(l),ge=J?T:Ui(s),je=re?T:Ui(l);ge=ge==A?Me:ge,je=je==A?Me:je;var Ie=ge==Me,Be=je==Me,Je=ge==je;if(Je&&Kl(s)){if(!Kl(l))return!1;J=!0,Ie=!1}if(Je&&!Ie)return W||(W=new Xs),J||zc(s)?b_(s,l,h,C,U,W):M4(s,l,ge,h,C,U,W);if(!(h&S)){var ct=Ie&&gt.call(s,"__wrapped__"),At=Be&&gt.call(l,"__wrapped__");if(ct||At){var Ht=ct?s.value():s,Rt=At?l.value():l;return W||(W=new Xs),U(Ht,Rt,h,C,W)}}return Je?(W||(W=new Xs),D4(s,l,h,C,U,W)):!1}function f4(s){return mr(s)&&Ui(s)==Xe}function Jg(s,l,h,C){var U=h.length,W=U,J=!C;if(s==null)return!W;for(s=Ae(s);U--;){var re=h[U];if(J&&re[2]?re[1]!==s[re[0]]:!(re[0]in s))return!1}for(;++U<W;){re=h[U];var ge=re[0],je=s[ge],Ie=re[1];if(J&&re[2]){if(je===n&&!(ge in s))return!1}else{var Be=new Xs;if(C)var Je=C(je,Ie,ge,s,l,Be);if(!(Je===n?rd(Ie,je,S|w,C,Be):Je))return!1}}return!0}function Hw(s){if(!nr(s)||Y4(s))return!1;var l=al(s)?fo:ii;return l.test(Ju(s))}function d4(s){return mr(s)&&Qi(s)==it}function h4(s){return mr(s)&&Ui(s)==$t}function p4(s){return mr(s)&&tp(s.length)&&!!zt[Qi(s)]}function Vw(s){return typeof s=="function"?s:s==null?vo:typeof s=="object"?Ft(s)?Xw(s[0],s[1]):Yw(s):hb(s)}function Zg(s){if(!sd(s))return er(s);var l=[];for(var h in Ae(s))gt.call(s,h)&&h!="constructor"&&l.push(h);return l}function g4(s){if(!nr(s))return Q4(s);var l=sd(s),h=[];for(var C in s)C=="constructor"&&(l||!gt.call(s,C))||h.push(C);return h}function em(s,l){return s<l}function Gw(s,l){var h=-1,C=go(s)?me(s.length):[];return Vl(s,function(U,W,J){C[++h]=l(U,W,J)}),C}function Yw(s){var l=gm(s);return l.length==1&&l[0][2]?T_(l[0][0],l[0][1]):function(h){return h===s||Jg(h,s,l)}}function Xw(s,l){return vm(s)&&E_(l)?T_(Sa(s),l):function(h){var C=Tm(h,s);return C===n&&C===l?Am(h,s):rd(l,C,S|w)}}function Fh(s,l,h,C,U){s!==l&&Xg(l,function(W,J){if(U||(U=new Xs),nr(W))m4(s,l,J,h,Fh,C,U);else{var re=C?C(xm(s,J),W,J+"",s,l,U):n;re===n&&(re=W),Gg(s,J,re)}},mo)}function m4(s,l,h,C,U,W,J){var re=xm(s,h),ge=xm(l,h),je=J.get(ge);if(je){Gg(s,h,je);return}var Ie=W?W(re,ge,h+"",s,l,J):n,Be=Ie===n;if(Be){var Je=Ft(ge),ct=!Je&&Kl(ge),At=!Je&&!ct&&zc(ge);Ie=ge,Je||ct||At?Ft(re)?Ie=re:Tr(re)?Ie=po(re):ct?(Be=!1,Ie=s_(ge,!0)):At?(Be=!1,Ie=a_(ge,!0)):Ie=[]:ld(ge)||Zu(ge)?(Ie=re,Zu(re)?Ie=rb(re):(!nr(re)||al(re))&&(Ie=k_(ge))):Be=!1}Be&&(J.set(ge,Ie),U(Ie,ge,C,W,J),J.delete(ge)),Gg(s,h,Ie)}function Kw(s,l){var h=s.length;if(h)return l+=l<0?h:0,sl(l,h)?s[l]:n}function qw(s,l,h){l.length?l=xn(l,function(W){return Ft(W)?function(J){return qu(J,W.length===1?W[0]:W)}:W}):l=[vo];var C=-1;l=xn(l,ut(kt()));var U=Gw(s,function(W,J,re){var ge=xn(l,function(je){return je(W)});return{criteria:ge,index:++C,value:W}});return On(U,function(W,J){return R4(W,J,h)})}function v4(s,l){return Qw(s,l,function(h,C){return Am(s,C)})}function Qw(s,l,h){for(var C=-1,U=l.length,W={};++C<U;){var J=l[C],re=qu(s,J);h(re,J)&&id(W,Yl(J,s),re)}return W}function y4(s){return function(l){return qu(l,s)}}function tm(s,l,h,C){var U=C?Et:Ke,W=-1,J=l.length,re=s;for(s===l&&(l=po(l)),h&&(re=xn(s,ut(h)));++W<J;)for(var ge=0,je=l[W],Ie=h?h(je):je;(ge=U(re,Ie,ge,C))>-1;)re!==s&&Ii.call(re,ge,1),Ii.call(s,ge,1);return s}function Jw(s,l){for(var h=s?l.length:0,C=h-1;h--;){var U=l[h];if(h==C||U!==W){var W=U;sl(U)?Ii.call(s,U,1):om(s,U)}}return s}function nm(s,l){return s+Xt(ho()*(l-s+1))}function x4(s,l,h,C){for(var U=-1,W=rn(nt((l-s)/(h||1)),0),J=me(W);W--;)J[C?W:++U]=s,s+=h;return J}function rm(s,l){var h="";if(!s||l<1||l>ie)return h;do l%2&&(h+=s),l=Xt(l/2),l&&(s+=s);while(l);return h}function qt(s,l){return wm(A_(s,l,vo),s+"")}function w4(s){return Lw(Bc(s))}function _4(s,l){var h=Bc(s);return Kh(h,Ku(l,0,h.length))}function id(s,l,h,C){if(!nr(s))return s;l=Yl(l,s);for(var U=-1,W=l.length,J=W-1,re=s;re!=null&&++U<W;){var ge=Sa(l[U]),je=h;if(ge==="__proto__"||ge==="constructor"||ge==="prototype")return s;if(U!=J){var Ie=re[ge];je=C?C(Ie,ge,re):n,je===n&&(je=nr(Ie)?Ie:sl(l[U+1])?[]:{})}ed(re,ge,je),re=re[ge]}return s}var Zw=el?function(s,l){return el.set(s,l),s}:vo,b4=It?function(s,l){return It(s,"toString",{configurable:!0,enumerable:!1,value:Pm(l),writable:!0})}:vo;function S4(s){return Kh(Bc(s))}function gs(s,l,h){var C=-1,U=s.length;l<0&&(l=-l>U?0:U+l),h=h>U?U:h,h<0&&(h+=U),U=l>h?0:h-l>>>0,l>>>=0;for(var W=me(U);++C<U;)W[C]=s[C+l];return W}function C4(s,l){var h;return Vl(s,function(C,U,W){return h=l(C,U,W),!h}),!!h}function zh(s,l,h){var C=0,U=s==null?C:s.length;if(typeof l=="number"&&l===l&&U<=_e){for(;C<U;){var W=C+U>>>1,J=s[W];J!==null&&!zo(J)&&(h?J<=l:J<l)?C=W+1:U=W}return U}return im(s,l,vo,h)}function im(s,l,h,C){var U=0,W=s==null?0:s.length;if(W===0)return 0;l=h(l);for(var J=l!==l,re=l===null,ge=zo(l),je=l===n;U<W;){var Ie=Xt((U+W)/2),Be=h(s[Ie]),Je=Be!==n,ct=Be===null,At=Be===Be,Ht=zo(Be);if(J)var Rt=C||At;else je?Rt=At&&(C||Je):re?Rt=At&&Je&&(C||!ct):ge?Rt=At&&Je&&!ct&&(C||!Ht):ct||Ht?Rt=!1:Rt=C?Be<=l:Be<l;Rt?U=Ie+1:W=Ie}return ln(W,Ee)}function e_(s,l){for(var h=-1,C=s.length,U=0,W=[];++h<C;){var J=s[h],re=l?l(J):J;if(!h||!Ks(re,ge)){var ge=re;W[U++]=J===0?0:J}}return W}function t_(s){return typeof s=="number"?s:zo(s)?xe:+s}function Fo(s){if(typeof s=="string")return s;if(Ft(s))return xn(s,Fo)+"";if(zo(s))return Gu?Gu.call(s):"";var l=s+"";return l=="0"&&1/s==-ce?"-0":l}function Gl(s,l,h){var C=-1,U=Hl,W=s.length,J=!0,re=[],ge=re;if(h)J=!1,U=Za;else if(W>=i){var je=l?null:L4(s);if(je)return L(je);J=!1,U=Nt,ge=new Xu}else ge=l?[]:re;e:for(;++C<W;){var Ie=s[C],Be=l?l(Ie):Ie;if(Ie=h||Ie!==0?Ie:0,J&&Be===Be){for(var Je=ge.length;Je--;)if(ge[Je]===Be)continue e;l&&ge.push(Be),re.push(Ie)}else U(ge,Be,h)||(ge!==re&&ge.push(Be),re.push(Ie))}return re}function om(s,l){return l=Yl(l,s),s=R_(s,l),s==null||delete s[Sa(ms(l))]}function n_(s,l,h,C){return id(s,l,h(qu(s,l)),C)}function Bh(s,l,h,C){for(var U=s.length,W=C?U:-1;(C?W--:++W<U)&&l(s[W],W,s););return h?gs(s,C?0:W,C?W+1:U):gs(s,C?W+1:0,C?U:W)}function r_(s,l){var h=s;return h instanceof en&&(h=h.value()),ye(l,function(C,U){return U.func.apply(U.thisArg,us([C],U.args))},h)}function sm(s,l,h){var C=s.length;if(C<2)return C?Gl(s[0]):[];for(var U=-1,W=me(C);++U<C;)for(var J=s[U],re=-1;++re<C;)re!=U&&(W[U]=td(W[U]||J,s[re],l,h));return Gl(pi(W,1),l,h)}function i_(s,l,h){for(var C=-1,U=s.length,W=l.length,J={};++C<U;){var re=C<W?l[C]:n;h(J,s[C],re)}return J}function am(s){return Tr(s)?s:[]}function lm(s){return typeof s=="function"?s:vo}function Yl(s,l){return Ft(s)?s:vm(s,l)?[s]:j_(vn(s))}var k4=qt;function Xl(s,l,h){var C=s.length;return h=h===n?C:h,!l&&h>=C?s:gs(s,l,h)}var o_=bt||function(s){return Jn.clearTimeout(s)};function s_(s,l){if(l)return s.slice();var h=s.length,C=Yt?Yt(h):new s.constructor(h);return s.copy(C),C}function um(s){var l=new s.constructor(s.byteLength);return new Oi(l).set(new Oi(s)),l}function E4(s,l){var h=l?um(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.byteLength)}function T4(s){var l=new s.constructor(s.source,Kn.exec(s));return l.lastIndex=s.lastIndex,l}function A4(s){return Ys?Ae(Ys.call(s)):{}}function a_(s,l){var h=l?um(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.length)}function l_(s,l){if(s!==l){var h=s!==n,C=s===null,U=s===s,W=zo(s),J=l!==n,re=l===null,ge=l===l,je=zo(l);if(!re&&!je&&!W&&s>l||W&&J&&ge&&!re&&!je||C&&J&&ge||!h&&ge||!U)return 1;if(!C&&!W&&!je&&s<l||je&&h&&U&&!C&&!W||re&&h&&U||!J&&U||!ge)return-1}return 0}function R4(s,l,h){for(var C=-1,U=s.criteria,W=l.criteria,J=U.length,re=h.length;++C<J;){var ge=l_(U[C],W[C]);if(ge){if(C>=re)return ge;var je=h[C];return ge*(je=="desc"?-1:1)}}return s.index-l.index}function u_(s,l,h,C){for(var U=-1,W=s.length,J=h.length,re=-1,ge=l.length,je=rn(W-J,0),Ie=me(ge+je),Be=!C;++re<ge;)Ie[re]=l[re];for(;++U<J;)(Be||U<W)&&(Ie[h[U]]=s[U]);for(;je--;)Ie[re++]=s[U++];return Ie}function c_(s,l,h,C){for(var U=-1,W=s.length,J=-1,re=h.length,ge=-1,je=l.length,Ie=rn(W-re,0),Be=me(Ie+je),Je=!C;++U<Ie;)Be[U]=s[U];for(var ct=U;++ge<je;)Be[ct+ge]=l[ge];for(;++J<re;)(Je||U<W)&&(Be[ct+h[J]]=s[U++]);return Be}function po(s,l){var h=-1,C=s.length;for(l||(l=me(C));++h<C;)l[h]=s[h];return l}function ba(s,l,h,C){var U=!h;h||(h={});for(var W=-1,J=l.length;++W<J;){var re=l[W],ge=C?C(h[re],s[re],re,h,s):n;ge===n&&(ge=s[re]),U?rl(h,re,ge):ed(h,re,ge)}return h}function P4(s,l){return ba(s,mm(s),l)}function $4(s,l){return ba(s,S_(s),l)}function Nh(s,l){return function(h,C){var U=Ft(h)?Hu:ZA,W=l?l():{};return U(h,s,kt(C,2),W)}}function Mc(s){return qt(function(l,h){var C=-1,U=h.length,W=U>1?h[U-1]:n,J=U>2?h[2]:n;for(W=s.length>3&&typeof W=="function"?(U--,W):n,J&&Ji(h[0],h[1],J)&&(W=U<3?n:W,U=1),l=Ae(l);++C<U;){var re=h[C];re&&s(l,re,C,W)}return l})}function f_(s,l){return function(h,C){if(h==null)return h;if(!go(h))return s(h,C);for(var U=h.length,W=l?U:-1,J=Ae(h);(l?W--:++W<U)&&C(J[W],W,J)!==!1;);return h}}function d_(s){return function(l,h,C){for(var U=-1,W=Ae(l),J=C(l),re=J.length;re--;){var ge=J[s?re:++U];if(h(W[ge],ge,W)===!1)break}return l}}function O4(s,l,h){var C=l&j,U=od(s);function W(){var J=this&&this!==Jn&&this instanceof W?U:s;return J.apply(C?h:this,arguments)}return W}function h_(s){return function(l){l=vn(l);var h=wn(l)?Ue(l):n,C=h?h[0]:l.charAt(0),U=h?Xl(h,1).join(""):l.slice(1);return C[s]()+U}}function Dc(s){return function(l){return ye(fb(cb(l).replace(uo,"")),s,"")}}function od(s){return function(){var l=arguments;switch(l.length){case 0:return new s;case 1:return new s(l[0]);case 2:return new s(l[0],l[1]);case 3:return new s(l[0],l[1],l[2]);case 4:return new s(l[0],l[1],l[2],l[3]);case 5:return new s(l[0],l[1],l[2],l[3],l[4]);case 6:return new s(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new s(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var h=Uc(s.prototype),C=s.apply(h,l);return nr(C)?C:h}}function j4(s,l,h){var C=od(s);function U(){for(var W=arguments.length,J=me(W),re=W,ge=Fc(U);re--;)J[re]=arguments[re];var je=W<3&&J[0]!==ge&&J[W-1]!==ge?[]:F(J,ge);if(W-=je.length,W<h)return y_(s,l,Wh,U.placeholder,n,J,je,n,n,h-W);var Ie=this&&this!==Jn&&this instanceof U?C:s;return mt(Ie,this,J)}return U}function p_(s){return function(l,h,C){var U=Ae(l);if(!go(l)){var W=kt(h,3);l=Qr(l),h=function(re){return W(U[re],re,U)}}var J=s(l,h,C);return J>-1?U[W?l[J]:J]:n}}function g_(s){return ol(function(l){var h=l.length,C=h,U=hs.prototype.thru;for(s&&l.reverse();C--;){var W=l[C];if(typeof W!="function")throw new yt(a);if(U&&!J&&Yh(W)=="wrapper")var J=new hs([],!0)}for(C=J?C:h;++C<h;){W=l[C];var re=Yh(W),ge=re=="wrapper"?pm(W):n;ge&&ym(ge[0])&&ge[1]==(R|E|k|O)&&!ge[4].length&&ge[9]==1?J=J[Yh(ge[0])].apply(J,ge[3]):J=W.length==1&&ym(W)?J[re]():J.thru(W)}return function(){var je=arguments,Ie=je[0];if(J&&je.length==1&&Ft(Ie))return J.plant(Ie).value();for(var Be=0,Je=h?l[Be].apply(this,je):Ie;++Be<h;)Je=l[Be].call(this,Je);return Je}})}function Wh(s,l,h,C,U,W,J,re,ge,je){var Ie=l&R,Be=l&j,Je=l&$,ct=l&(E|I),At=l&G,Ht=Je?n:od(s);function Rt(){for(var Zt=arguments.length,on=me(Zt),Bo=Zt;Bo--;)on[Bo]=arguments[Bo];if(ct)var Zi=Fc(Rt),No=Hr(on,Zi);if(C&&(on=u_(on,C,U,ct)),W&&(on=c_(on,W,J,ct)),Zt-=No,ct&&Zt<je){var Ar=F(on,Zi);return y_(s,l,Wh,Rt.placeholder,h,on,Ar,re,ge,je-Zt)}var qs=Be?h:this,ul=Je?qs[s]:s;return Zt=on.length,re?on=Z4(on,re):At&&Zt>1&&on.reverse(),Ie&&ge<Zt&&(on.length=ge),this&&this!==Jn&&this instanceof Rt&&(ul=Ht||od(ul)),ul.apply(qs,on)}return Rt}function m_(s,l){return function(h,C){return a4(h,s,l(C),{})}}function Hh(s,l){return function(h,C){var U;if(h===n&&C===n)return l;if(h!==n&&(U=h),C!==n){if(U===n)return C;typeof h=="string"||typeof C=="string"?(h=Fo(h),C=Fo(C)):(h=t_(h),C=t_(C)),U=s(h,C)}return U}}function cm(s){return ol(function(l){return l=xn(l,ut(kt())),qt(function(h){var C=this;return s(l,function(U){return mt(U,C,h)})})})}function Vh(s,l){l=l===n?" ":Fo(l);var h=l.length;if(h<2)return h?rm(l,s):l;var C=rm(l,nt(s/ue(l)));return wn(l)?Xl(Ue(C),0,s).join(""):C.slice(0,s)}function I4(s,l,h,C){var U=l&j,W=od(s);function J(){for(var re=-1,ge=arguments.length,je=-1,Ie=C.length,Be=me(Ie+ge),Je=this&&this!==Jn&&this instanceof J?W:s;++je<Ie;)Be[je]=C[je];for(;ge--;)Be[je++]=arguments[++re];return mt(Je,U?h:this,Be)}return J}function v_(s){return function(l,h,C){return C&&typeof C!="number"&&Ji(l,h,C)&&(h=C=n),l=ll(l),h===n?(h=l,l=0):h=ll(h),C=C===n?l<h?1:-1:ll(C),x4(l,h,C,s)}}function Gh(s){return function(l,h){return typeof l=="string"&&typeof h=="string"||(l=vs(l),h=vs(h)),s(l,h)}}function y_(s,l,h,C,U,W,J,re,ge,je){var Ie=l&E,Be=Ie?J:n,Je=Ie?n:J,ct=Ie?W:n,At=Ie?n:W;l|=Ie?k:D,l&=~(Ie?D:k),l&y||(l&=~(j|$));var Ht=[s,l,U,ct,Be,At,Je,re,ge,je],Rt=h.apply(n,Ht);return ym(s)&&P_(Rt,Ht),Rt.placeholder=C,$_(Rt,s,l)}function fm(s){var l=Wt[s];return function(h,C){if(h=vs(h),C=C==null?0:ln(Bt(C),292),C&&kr(h)){var U=(vn(h)+"e").split("e"),W=l(U[0]+"e"+(+U[1]+C));return U=(vn(W)+"e").split("e"),+(U[0]+"e"+(+U[1]-C))}return l(h)}}var L4=Hn&&1/L(new Hn([,-0]))[1]==ce?function(s){return new Hn(s)}:jm;function x_(s){return function(l){var h=Ui(l);return h==Xe?_(l):h==$t?ne(l):An(l,s(l))}}function il(s,l,h,C,U,W,J,re){var ge=l&$;if(!ge&&typeof s!="function")throw new yt(a);var je=C?C.length:0;if(je||(l&=~(k|D),C=U=n),J=J===n?J:rn(Bt(J),0),re=re===n?re:Bt(re),je-=U?U.length:0,l&D){var Ie=C,Be=U;C=U=n}var Je=ge?n:pm(s),ct=[s,l,h,C,U,Ie,Be,W,J,re];if(Je&&q4(ct,Je),s=ct[0],l=ct[1],h=ct[2],C=ct[3],U=ct[4],re=ct[9]=ct[9]===n?ge?0:s.length:rn(ct[9]-je,0),!re&&l&(E|I)&&(l&=~(E|I)),!l||l==j)var At=O4(s,l,h);else l==E||l==I?At=j4(s,l,re):(l==k||l==(j|k))&&!U.length?At=I4(s,l,h,C):At=Wh.apply(n,ct);var Ht=Je?Zw:P_;return $_(Ht(At,ct),s,l)}function w_(s,l,h,C){return s===n||Ks(s,at[h])&&!gt.call(C,h)?l:s}function __(s,l,h,C,U,W){return nr(s)&&nr(l)&&(W.set(l,s),Fh(s,l,n,__,W),W.delete(l)),s}function U4(s){return ld(s)?n:s}function b_(s,l,h,C,U,W){var J=h&S,re=s.length,ge=l.length;if(re!=ge&&!(J&&ge>re))return!1;var je=W.get(s),Ie=W.get(l);if(je&&Ie)return je==l&&Ie==s;var Be=-1,Je=!0,ct=h&w?new Xu:n;for(W.set(s,l),W.set(l,s);++Be<re;){var At=s[Be],Ht=l[Be];if(C)var Rt=J?C(Ht,At,Be,l,s,W):C(At,Ht,Be,s,l,W);if(Rt!==n){if(Rt)continue;Je=!1;break}if(ct){if(!Z(l,function(Zt,on){if(!Nt(ct,on)&&(At===Zt||U(At,Zt,h,C,W)))return ct.push(on)})){Je=!1;break}}else if(!(At===Ht||U(At,Ht,h,C,W))){Je=!1;break}}return W.delete(s),W.delete(l),Je}function M4(s,l,h,C,U,W,J){switch(h){case Rn:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case ur:return!(s.byteLength!=l.byteLength||!W(new Oi(s),new Oi(l)));case N:case he:case Ne:return Ks(+s,+l);case Se:return s.name==l.name&&s.message==l.message;case it:case Nn:return s==l+"";case Xe:var re=_;case $t:var ge=C&S;if(re||(re=L),s.size!=l.size&&!ge)return!1;var je=J.get(s);if(je)return je==l;C|=w,J.set(s,l);var Ie=b_(re(s),re(l),C,U,W,J);return J.delete(s),Ie;case et:if(Ys)return Ys.call(s)==Ys.call(l)}return!1}function D4(s,l,h,C,U,W){var J=h&S,re=dm(s),ge=re.length,je=dm(l),Ie=je.length;if(ge!=Ie&&!J)return!1;for(var Be=ge;Be--;){var Je=re[Be];if(!(J?Je in l:gt.call(l,Je)))return!1}var ct=W.get(s),At=W.get(l);if(ct&&At)return ct==l&&At==s;var Ht=!0;W.set(s,l),W.set(l,s);for(var Rt=J;++Be<ge;){Je=re[Be];var Zt=s[Je],on=l[Je];if(C)var Bo=J?C(on,Zt,Je,l,s,W):C(Zt,on,Je,s,l,W);if(!(Bo===n?Zt===on||U(Zt,on,h,C,W):Bo)){Ht=!1;break}Rt||(Rt=Je=="constructor")}if(Ht&&!Rt){var Zi=s.constructor,No=l.constructor;Zi!=No&&"constructor"in s&&"constructor"in l&&!(typeof Zi=="function"&&Zi instanceof Zi&&typeof No=="function"&&No instanceof No)&&(Ht=!1)}return W.delete(s),W.delete(l),Ht}function ol(s){return wm(A_(s,n,M_),s+"")}function dm(s){return Nw(s,Qr,mm)}function hm(s){return Nw(s,mo,S_)}var pm=el?function(s){return el.get(s)}:jm;function Yh(s){for(var l=s.name+"",h=tr[l],C=gt.call(tr,l)?h.length:0;C--;){var U=h[C],W=U.func;if(W==null||W==s)return U.name}return l}function Fc(s){var l=gt.call(B,"placeholder")?B:s;return l.placeholder}function kt(){var s=B.iteratee||$m;return s=s===$m?Vw:s,arguments.length?s(arguments[0],arguments[1]):s}function Xh(s,l){var h=s.__data__;return G4(l)?h[typeof l=="string"?"string":"hash"]:h.map}function gm(s){for(var l=Qr(s),h=l.length;h--;){var C=l[h],U=s[C];l[h]=[C,U,E_(U)]}return l}function Qu(s,l){var h=$i(s,l);return Hw(h)?h:n}function F4(s){var l=gt.call(s,fi),h=s[fi];try{s[fi]=n;var C=!0}catch{}var U=pr.call(s);return C&&(l?s[fi]=h:delete s[fi]),U}var mm=Ct?function(s){return s==null?[]:(s=Ae(s),Mo(Ct(s),function(l){return ci.call(s,l)}))}:Im,S_=Ct?function(s){for(var l=[];s;)us(l,mm(s)),s=Vr(s);return l}:Im,Ui=Qi;(di&&Ui(new di(new ArrayBuffer(1)))!=Rn||Li&&Ui(new Li)!=Xe||hi&&Ui(hi.resolve())!=st||Hn&&Ui(new Hn)!=$t||gr&&Ui(new gr)!=Jt)&&(Ui=function(s){var l=Qi(s),h=l==Me?s.constructor:n,C=h?Ju(h):"";if(C)switch(C){case Er:return Rn;case ds:return Xe;case Zf:return st;case Ih:return $t;case Vu:return Jt}return l});function z4(s,l,h){for(var C=-1,U=h.length;++C<U;){var W=h[C],J=W.size;switch(W.type){case"drop":s+=J;break;case"dropRight":l-=J;break;case"take":l=ln(l,s+J);break;case"takeRight":s=rn(s,l-J);break}}return{start:s,end:l}}function B4(s){var l=s.match($o);return l?l[1].split(Bu):[]}function C_(s,l,h){l=Yl(l,s);for(var C=-1,U=l.length,W=!1;++C<U;){var J=Sa(l[C]);if(!(W=s!=null&&h(s,J)))break;s=s[J]}return W||++C!=U?W:(U=s==null?0:s.length,!!U&&tp(U)&&sl(J,U)&&(Ft(s)||Zu(s)))}function N4(s){var l=s.length,h=new s.constructor(l);return l&&typeof s[0]=="string"&&gt.call(s,"index")&&(h.index=s.index,h.input=s.input),h}function k_(s){return typeof s.constructor=="function"&&!sd(s)?Uc(Vr(s)):{}}function W4(s,l,h){var C=s.constructor;switch(l){case ur:return um(s);case N:case he:return new C(+s);case Rn:return E4(s,h);case Al:case jr:case Rl:case Ba:case Us:case Yi:case bi:case Ms:case Po:return a_(s,h);case Xe:return new C;case Ne:case Nn:return new C(s);case it:return T4(s);case $t:return new C;case et:return A4(s)}}function H4(s,l){var h=l.length;if(!h)return s;var C=h-1;return l[C]=(h>1?"& ":"")+l[C],l=l.join(h>2?", ":" "),s.replace(Il,`{
/* [wrapped with `+l+`] */
`)}function V4(s){return Ft(s)||Zu(s)||!!(wa&&s&&s[wa])}function sl(s,l){var h=typeof s;return l=l??ie,!!l&&(h=="number"||h!="symbol"&&ca.test(s))&&s>-1&&s%1==0&&s<l}function Ji(s,l,h){if(!nr(h))return!1;var C=typeof l;return(C=="number"?go(h)&&sl(l,h.length):C=="string"&&l in h)?Ks(h[l],s):!1}function vm(s,l){if(Ft(s))return!1;var h=typeof s;return h=="number"||h=="symbol"||h=="boolean"||s==null||zo(s)?!0:zu.test(s)||!jl.test(s)||l!=null&&s in Ae(l)}function G4(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function ym(s){var l=Yh(s),h=B[l];if(typeof h!="function"||!(l in en.prototype))return!1;if(s===h)return!0;var C=pm(h);return!!C&&s===C[0]}function Y4(s){return!!hn&&hn in s}var X4=jt?al:Lm;function sd(s){var l=s&&s.constructor,h=typeof l=="function"&&l.prototype||at;return s===h}function E_(s){return s===s&&!nr(s)}function T_(s,l){return function(h){return h==null?!1:h[s]===l&&(l!==n||s in Ae(h))}}function K4(s){var l=Zh(s,function(C){return h.size===f&&h.clear(),C}),h=l.cache;return l}function q4(s,l){var h=s[1],C=l[1],U=h|C,W=U<(j|$|R),J=C==R&&h==E||C==R&&h==O&&s[7].length<=l[8]||C==(R|O)&&l[7].length<=l[8]&&h==E;if(!(W||J))return s;C&j&&(s[2]=l[2],U|=h&j?0:y);var re=l[3];if(re){var ge=s[3];s[3]=ge?u_(ge,re,l[4]):re,s[4]=ge?F(s[3],v):l[4]}return re=l[5],re&&(ge=s[5],s[5]=ge?c_(ge,re,l[6]):re,s[6]=ge?F(s[5],v):l[6]),re=l[7],re&&(s[7]=re),C&R&&(s[8]=s[8]==null?l[8]:ln(s[8],l[8])),s[9]==null&&(s[9]=l[9]),s[0]=l[0],s[1]=U,s}function Q4(s){var l=[];if(s!=null)for(var h in Ae(s))l.push(h);return l}function J4(s){return pr.call(s)}function A_(s,l,h){return l=rn(l===n?s.length-1:l,0),function(){for(var C=arguments,U=-1,W=rn(C.length-l,0),J=me(W);++U<W;)J[U]=C[l+U];U=-1;for(var re=me(l+1);++U<l;)re[U]=C[U];return re[l]=h(J),mt(s,this,re)}}function R_(s,l){return l.length<2?s:qu(s,gs(l,0,-1))}function Z4(s,l){for(var h=s.length,C=ln(l.length,h),U=po(s);C--;){var W=l[C];s[C]=sl(W,h)?U[W]:n}return s}function xm(s,l){if(!(l==="constructor"&&typeof s[l]=="function")&&l!="__proto__")return s[l]}var P_=O_(Zw),ad=Wn||function(s,l){return Jn.setTimeout(s,l)},wm=O_(b4);function $_(s,l,h){var C=l+"";return wm(s,H4(C,eR(B4(C),h)))}function O_(s){var l=0,h=0;return function(){var C=Dn(),U=ae-(C-h);if(h=C,U>0){if(++l>=ee)return arguments[0]}else l=0;return s.apply(n,arguments)}}function Kh(s,l){var h=-1,C=s.length,U=C-1;for(l=l===n?C:l;++h<l;){var W=nm(h,U),J=s[W];s[W]=s[h],s[h]=J}return s.length=l,s}var j_=K4(function(s){var l=[];return s.charCodeAt(0)===46&&l.push(""),s.replace(ri,function(h,C,U,W){l.push(U?W.replace(Va,"$1"):C||h)}),l});function Sa(s){if(typeof s=="string"||zo(s))return s;var l=s+"";return l=="0"&&1/s==-ce?"-0":l}function Ju(s){if(s!=null){try{return _n.call(s)}catch{}try{return s+""}catch{}}return""}function eR(s,l){return Ur(M,function(h){var C="_."+h[0];l&h[1]&&!Hl(s,C)&&s.push(C)}),s.sort()}function I_(s){if(s instanceof en)return s.clone();var l=new hs(s.__wrapped__,s.__chain__);return l.__actions__=po(s.__actions__),l.__index__=s.__index__,l.__values__=s.__values__,l}function tR(s,l,h){(h?Ji(s,l,h):l===n)?l=1:l=rn(Bt(l),0);var C=s==null?0:s.length;if(!C||l<1)return[];for(var U=0,W=0,J=me(nt(C/l));U<C;)J[W++]=gs(s,U,U+=l);return J}function nR(s){for(var l=-1,h=s==null?0:s.length,C=0,U=[];++l<h;){var W=s[l];W&&(U[C++]=W)}return U}function rR(){var s=arguments.length;if(!s)return[];for(var l=me(s-1),h=arguments[0],C=s;C--;)l[C-1]=arguments[C];return us(Ft(h)?po(h):[h],pi(l,1))}var iR=qt(function(s,l){return Tr(s)?td(s,pi(l,1,Tr,!0)):[]}),oR=qt(function(s,l){var h=ms(l);return Tr(h)&&(h=n),Tr(s)?td(s,pi(l,1,Tr,!0),kt(h,2)):[]}),sR=qt(function(s,l){var h=ms(l);return Tr(h)&&(h=n),Tr(s)?td(s,pi(l,1,Tr,!0),n,h):[]});function aR(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:Bt(l),gs(s,l<0?0:l,C)):[]}function lR(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:Bt(l),l=C-l,gs(s,0,l<0?0:l)):[]}function uR(s,l){return s&&s.length?Bh(s,kt(l,3),!0,!0):[]}function cR(s,l){return s&&s.length?Bh(s,kt(l,3),!0):[]}function fR(s,l,h,C){var U=s==null?0:s.length;return U?(h&&typeof h!="number"&&Ji(s,l,h)&&(h=0,C=U),r4(s,l,h,C)):[]}function L_(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var U=h==null?0:Bt(h);return U<0&&(U=rn(C+U,0)),be(s,kt(l,3),U)}function U_(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var U=C-1;return h!==n&&(U=Bt(h),U=h<0?rn(C+U,0):ln(U,C-1)),be(s,kt(l,3),U,!0)}function M_(s){var l=s==null?0:s.length;return l?pi(s,1):[]}function dR(s){var l=s==null?0:s.length;return l?pi(s,ce):[]}function hR(s,l){var h=s==null?0:s.length;return h?(l=l===n?1:Bt(l),pi(s,l)):[]}function pR(s){for(var l=-1,h=s==null?0:s.length,C={};++l<h;){var U=s[l];C[U[0]]=U[1]}return C}function D_(s){return s&&s.length?s[0]:n}function gR(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var U=h==null?0:Bt(h);return U<0&&(U=rn(C+U,0)),Ke(s,l,U)}function mR(s){var l=s==null?0:s.length;return l?gs(s,0,-1):[]}var vR=qt(function(s){var l=xn(s,am);return l.length&&l[0]===s[0]?Qg(l):[]}),yR=qt(function(s){var l=ms(s),h=xn(s,am);return l===ms(h)?l=n:h.pop(),h.length&&h[0]===s[0]?Qg(h,kt(l,2)):[]}),xR=qt(function(s){var l=ms(s),h=xn(s,am);return l=typeof l=="function"?l:n,l&&h.pop(),h.length&&h[0]===s[0]?Qg(h,n,l):[]});function wR(s,l){return s==null?"":nn.call(s,l)}function ms(s){var l=s==null?0:s.length;return l?s[l-1]:n}function _R(s,l,h){var C=s==null?0:s.length;if(!C)return-1;var U=C;return h!==n&&(U=Bt(h),U=U<0?rn(C+U,0):ln(U,C-1)),l===l?ke(s,l,U):be(s,Vt,U,!0)}function bR(s,l){return s&&s.length?Kw(s,Bt(l)):n}var SR=qt(F_);function F_(s,l){return s&&s.length&&l&&l.length?tm(s,l):s}function CR(s,l,h){return s&&s.length&&l&&l.length?tm(s,l,kt(h,2)):s}function kR(s,l,h){return s&&s.length&&l&&l.length?tm(s,l,n,h):s}var ER=ol(function(s,l){var h=s==null?0:s.length,C=Yg(s,l);return Jw(s,xn(l,function(U){return sl(U,h)?+U:U}).sort(l_)),C});function TR(s,l){var h=[];if(!(s&&s.length))return h;var C=-1,U=[],W=s.length;for(l=kt(l,3);++C<W;){var J=s[C];l(J,C,s)&&(h.push(J),U.push(C))}return Jw(s,U),h}function _m(s){return s==null?s:Fn.call(s)}function AR(s,l,h){var C=s==null?0:s.length;return C?(h&&typeof h!="number"&&Ji(s,l,h)?(l=0,h=C):(l=l==null?0:Bt(l),h=h===n?C:Bt(h)),gs(s,l,h)):[]}function RR(s,l){return zh(s,l)}function PR(s,l,h){return im(s,l,kt(h,2))}function $R(s,l){var h=s==null?0:s.length;if(h){var C=zh(s,l);if(C<h&&Ks(s[C],l))return C}return-1}function OR(s,l){return zh(s,l,!0)}function jR(s,l,h){return im(s,l,kt(h,2),!0)}function IR(s,l){var h=s==null?0:s.length;if(h){var C=zh(s,l,!0)-1;if(Ks(s[C],l))return C}return-1}function LR(s){return s&&s.length?e_(s):[]}function UR(s,l){return s&&s.length?e_(s,kt(l,2)):[]}function MR(s){var l=s==null?0:s.length;return l?gs(s,1,l):[]}function DR(s,l,h){return s&&s.length?(l=h||l===n?1:Bt(l),gs(s,0,l<0?0:l)):[]}function FR(s,l,h){var C=s==null?0:s.length;return C?(l=h||l===n?1:Bt(l),l=C-l,gs(s,l<0?0:l,C)):[]}function zR(s,l){return s&&s.length?Bh(s,kt(l,3),!1,!0):[]}function BR(s,l){return s&&s.length?Bh(s,kt(l,3)):[]}var NR=qt(function(s){return Gl(pi(s,1,Tr,!0))}),WR=qt(function(s){var l=ms(s);return Tr(l)&&(l=n),Gl(pi(s,1,Tr,!0),kt(l,2))}),HR=qt(function(s){var l=ms(s);return l=typeof l=="function"?l:n,Gl(pi(s,1,Tr,!0),n,l)});function VR(s){return s&&s.length?Gl(s):[]}function GR(s,l){return s&&s.length?Gl(s,kt(l,2)):[]}function YR(s,l){return l=typeof l=="function"?l:n,s&&s.length?Gl(s,n,l):[]}function bm(s){if(!(s&&s.length))return[];var l=0;return s=Mo(s,function(h){if(Tr(h))return l=rn(h.length,l),!0}),Un(l,function(h){return xn(s,lt(h))})}function z_(s,l){if(!(s&&s.length))return[];var h=bm(s);return l==null?h:xn(h,function(C){return mt(l,n,C)})}var XR=qt(function(s,l){return Tr(s)?td(s,l):[]}),KR=qt(function(s){return sm(Mo(s,Tr))}),qR=qt(function(s){var l=ms(s);return Tr(l)&&(l=n),sm(Mo(s,Tr),kt(l,2))}),QR=qt(function(s){var l=ms(s);return l=typeof l=="function"?l:n,sm(Mo(s,Tr),n,l)}),JR=qt(bm);function ZR(s,l){return i_(s||[],l||[],ed)}function eP(s,l){return i_(s||[],l||[],id)}var tP=qt(function(s){var l=s.length,h=l>1?s[l-1]:n;return h=typeof h=="function"?(s.pop(),h):n,z_(s,h)});function B_(s){var l=B(s);return l.__chain__=!0,l}function nP(s,l){return l(s),s}function qh(s,l){return l(s)}var rP=ol(function(s){var l=s.length,h=l?s[0]:0,C=this.__wrapped__,U=function(W){return Yg(W,s)};return l>1||this.__actions__.length||!(C instanceof en)||!sl(h)?this.thru(U):(C=C.slice(h,+h+(l?1:0)),C.__actions__.push({func:qh,args:[U],thisArg:n}),new hs(C,this.__chain__).thru(function(W){return l&&!W.length&&W.push(n),W}))});function iP(){return B_(this)}function oP(){return new hs(this.value(),this.__chain__)}function sP(){this.__values__===n&&(this.__values__=tb(this.value()));var s=this.__index__>=this.__values__.length,l=s?n:this.__values__[this.__index__++];return{done:s,value:l}}function aP(){return this}function lP(s){for(var l,h=this;h instanceof Lh;){var C=I_(h);C.__index__=0,C.__values__=n,l?U.__wrapped__=C:l=C;var U=C;h=h.__wrapped__}return U.__wrapped__=s,l}function uP(){var s=this.__wrapped__;if(s instanceof en){var l=s;return this.__actions__.length&&(l=new en(this)),l=l.reverse(),l.__actions__.push({func:qh,args:[_m],thisArg:n}),new hs(l,this.__chain__)}return this.thru(_m)}function cP(){return r_(this.__wrapped__,this.__actions__)}var fP=Nh(function(s,l,h){gt.call(s,h)?++s[h]:rl(s,h,1)});function dP(s,l,h){var C=Ft(s)?Wl:n4;return h&&Ji(s,l,h)&&(l=n),C(s,kt(l,3))}function hP(s,l){var h=Ft(s)?Mo:zw;return h(s,kt(l,3))}var pP=p_(L_),gP=p_(U_);function mP(s,l){return pi(Qh(s,l),1)}function vP(s,l){return pi(Qh(s,l),ce)}function yP(s,l,h){return h=h===n?1:Bt(h),pi(Qh(s,l),h)}function N_(s,l){var h=Ft(s)?Ur:Vl;return h(s,kt(l,3))}function W_(s,l){var h=Ft(s)?Nl:Fw;return h(s,kt(l,3))}var xP=Nh(function(s,l,h){gt.call(s,h)?s[h].push(l):rl(s,h,[l])});function wP(s,l,h,C){s=go(s)?s:Bc(s),h=h&&!C?Bt(h):0;var U=s.length;return h<0&&(h=rn(U+h,0)),np(s)?h<=U&&s.indexOf(l,h)>-1:!!U&&Ke(s,l,h)>-1}var _P=qt(function(s,l,h){var C=-1,U=typeof l=="function",W=go(s)?me(s.length):[];return Vl(s,function(J){W[++C]=U?mt(l,J,h):nd(J,l,h)}),W}),bP=Nh(function(s,l,h){rl(s,h,l)});function Qh(s,l){var h=Ft(s)?xn:Gw;return h(s,kt(l,3))}function SP(s,l,h,C){return s==null?[]:(Ft(l)||(l=l==null?[]:[l]),h=C?n:h,Ft(h)||(h=h==null?[]:[h]),qw(s,l,h))}var CP=Nh(function(s,l,h){s[h?0:1].push(l)},function(){return[[],[]]});function kP(s,l,h){var C=Ft(s)?ye:ft,U=arguments.length<3;return C(s,kt(l,4),h,U,Vl)}function EP(s,l,h){var C=Ft(s)?z:ft,U=arguments.length<3;return C(s,kt(l,4),h,U,Fw)}function TP(s,l){var h=Ft(s)?Mo:zw;return h(s,ep(kt(l,3)))}function AP(s){var l=Ft(s)?Lw:w4;return l(s)}function RP(s,l,h){(h?Ji(s,l,h):l===n)?l=1:l=Bt(l);var C=Ft(s)?QA:_4;return C(s,l)}function PP(s){var l=Ft(s)?JA:S4;return l(s)}function $P(s){if(s==null)return 0;if(go(s))return np(s)?ue(s):s.length;var l=Ui(s);return l==Xe||l==$t?s.size:Zg(s).length}function OP(s,l,h){var C=Ft(s)?Z:C4;return h&&Ji(s,l,h)&&(l=n),C(s,kt(l,3))}var jP=qt(function(s,l){if(s==null)return[];var h=l.length;return h>1&&Ji(s,l[0],l[1])?l=[]:h>2&&Ji(l[0],l[1],l[2])&&(l=[l[0]]),qw(s,pi(l,1),[])}),Jh=un||function(){return Jn.Date.now()};function IP(s,l){if(typeof l!="function")throw new yt(a);return s=Bt(s),function(){if(--s<1)return l.apply(this,arguments)}}function H_(s,l,h){return l=h?n:l,l=s&&l==null?s.length:l,il(s,R,n,n,n,n,l)}function V_(s,l){var h;if(typeof l!="function")throw new yt(a);return s=Bt(s),function(){return--s>0&&(h=l.apply(this,arguments)),s<=1&&(l=n),h}}var Sm=qt(function(s,l,h){var C=j;if(h.length){var U=F(h,Fc(Sm));C|=k}return il(s,C,l,h,U)}),G_=qt(function(s,l,h){var C=j|$;if(h.length){var U=F(h,Fc(G_));C|=k}return il(l,C,s,h,U)});function Y_(s,l,h){l=h?n:l;var C=il(s,E,n,n,n,n,n,l);return C.placeholder=Y_.placeholder,C}function X_(s,l,h){l=h?n:l;var C=il(s,I,n,n,n,n,n,l);return C.placeholder=X_.placeholder,C}function K_(s,l,h){var C,U,W,J,re,ge,je=0,Ie=!1,Be=!1,Je=!0;if(typeof s!="function")throw new yt(a);l=vs(l)||0,nr(h)&&(Ie=!!h.leading,Be="maxWait"in h,W=Be?rn(vs(h.maxWait)||0,l):W,Je="trailing"in h?!!h.trailing:Je);function ct(Ar){var qs=C,ul=U;return C=U=n,je=Ar,J=s.apply(ul,qs),J}function At(Ar){return je=Ar,re=ad(Zt,l),Ie?ct(Ar):J}function Ht(Ar){var qs=Ar-ge,ul=Ar-je,pb=l-qs;return Be?ln(pb,W-ul):pb}function Rt(Ar){var qs=Ar-ge,ul=Ar-je;return ge===n||qs>=l||qs<0||Be&&ul>=W}function Zt(){var Ar=Jh();if(Rt(Ar))return on(Ar);re=ad(Zt,Ht(Ar))}function on(Ar){return re=n,Je&&C?ct(Ar):(C=U=n,J)}function Bo(){re!==n&&o_(re),je=0,C=ge=U=re=n}function Zi(){return re===n?J:on(Jh())}function No(){var Ar=Jh(),qs=Rt(Ar);if(C=arguments,U=this,ge=Ar,qs){if(re===n)return At(ge);if(Be)return o_(re),re=ad(Zt,l),ct(ge)}return re===n&&(re=ad(Zt,l)),J}return No.cancel=Bo,No.flush=Zi,No}var LP=qt(function(s,l){return Dw(s,1,l)}),UP=qt(function(s,l,h){return Dw(s,vs(l)||0,h)});function MP(s){return il(s,G)}function Zh(s,l){if(typeof s!="function"||l!=null&&typeof l!="function")throw new yt(a);var h=function(){var C=arguments,U=l?l.apply(this,C):C[0],W=h.cache;if(W.has(U))return W.get(U);var J=s.apply(this,C);return h.cache=W.set(U,J)||W,J};return h.cache=new(Zh.Cache||nl),h}Zh.Cache=nl;function ep(s){if(typeof s!="function")throw new yt(a);return function(){var l=arguments;switch(l.length){case 0:return!s.call(this);case 1:return!s.call(this,l[0]);case 2:return!s.call(this,l[0],l[1]);case 3:return!s.call(this,l[0],l[1],l[2])}return!s.apply(this,l)}}function DP(s){return V_(2,s)}var FP=k4(function(s,l){l=l.length==1&&Ft(l[0])?xn(l[0],ut(kt())):xn(pi(l,1),ut(kt()));var h=l.length;return qt(function(C){for(var U=-1,W=ln(C.length,h);++U<W;)C[U]=l[U].call(this,C[U]);return mt(s,this,C)})}),Cm=qt(function(s,l){var h=F(l,Fc(Cm));return il(s,k,n,l,h)}),q_=qt(function(s,l){var h=F(l,Fc(q_));return il(s,D,n,l,h)}),zP=ol(function(s,l){return il(s,O,n,n,n,l)});function BP(s,l){if(typeof s!="function")throw new yt(a);return l=l===n?l:Bt(l),qt(s,l)}function NP(s,l){if(typeof s!="function")throw new yt(a);return l=l==null?0:rn(Bt(l),0),qt(function(h){var C=h[l],U=Xl(h,0,l);return C&&us(U,C),mt(s,this,U)})}function WP(s,l,h){var C=!0,U=!0;if(typeof s!="function")throw new yt(a);return nr(h)&&(C="leading"in h?!!h.leading:C,U="trailing"in h?!!h.trailing:U),K_(s,l,{leading:C,maxWait:l,trailing:U})}function HP(s){return H_(s,1)}function VP(s,l){return Cm(lm(l),s)}function GP(){if(!arguments.length)return[];var s=arguments[0];return Ft(s)?s:[s]}function YP(s){return ps(s,g)}function XP(s,l){return l=typeof l=="function"?l:n,ps(s,g,l)}function KP(s){return ps(s,b|g)}function qP(s,l){return l=typeof l=="function"?l:n,ps(s,b|g,l)}function QP(s,l){return l==null||Mw(s,l,Qr(l))}function Ks(s,l){return s===l||s!==s&&l!==l}var JP=Gh(qg),ZP=Gh(function(s,l){return s>=l}),Zu=Ww(function(){return arguments}())?Ww:function(s){return mr(s)&&gt.call(s,"callee")&&!ci.call(s,"callee")},Ft=me.isArray,e$=zl?ut(zl):l4;function go(s){return s!=null&&tp(s.length)&&!al(s)}function Tr(s){return mr(s)&&go(s)}function t$(s){return s===!0||s===!1||mr(s)&&Qi(s)==N}var Kl=Kt||Lm,n$=Lc?ut(Lc):u4;function r$(s){return mr(s)&&s.nodeType===1&&!ld(s)}function i$(s){if(s==null)return!0;if(go(s)&&(Ft(s)||typeof s=="string"||typeof s.splice=="function"||Kl(s)||zc(s)||Zu(s)))return!s.length;var l=Ui(s);if(l==Xe||l==$t)return!s.size;if(sd(s))return!Zg(s).length;for(var h in s)if(gt.call(s,h))return!1;return!0}function o$(s,l){return rd(s,l)}function s$(s,l,h){h=typeof h=="function"?h:n;var C=h?h(s,l):n;return C===n?rd(s,l,n,h):!!C}function km(s){if(!mr(s))return!1;var l=Qi(s);return l==Se||l==oe||typeof s.message=="string"&&typeof s.name=="string"&&!ld(s)}function a$(s){return typeof s=="number"&&kr(s)}function al(s){if(!nr(s))return!1;var l=Qi(s);return l==Oe||l==Pe||l==V||l==Lt}function Q_(s){return typeof s=="number"&&s==Bt(s)}function tp(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=ie}function nr(s){var l=typeof s;return s!=null&&(l=="object"||l=="function")}function mr(s){return s!=null&&typeof s=="object"}var J_=fr?ut(fr):f4;function l$(s,l){return s===l||Jg(s,l,gm(l))}function u$(s,l,h){return h=typeof h=="function"?h:n,Jg(s,l,gm(l),h)}function c$(s){return Z_(s)&&s!=+s}function f$(s){if(X4(s))throw new de(o);return Hw(s)}function d$(s){return s===null}function h$(s){return s==null}function Z_(s){return typeof s=="number"||mr(s)&&Qi(s)==Ne}function ld(s){if(!mr(s)||Qi(s)!=Me)return!1;var l=Vr(s);if(l===null)return!0;var h=gt.call(l,"constructor")&&l.constructor;return typeof h=="function"&&h instanceof h&&_n.call(h)==cs}var Em=Bl?ut(Bl):d4;function p$(s){return Q_(s)&&s>=-ie&&s<=ie}var eb=ui?ut(ui):h4;function np(s){return typeof s=="string"||!Ft(s)&&mr(s)&&Qi(s)==Nn}function zo(s){return typeof s=="symbol"||mr(s)&&Qi(s)==et}var zc=xa?ut(xa):p4;function g$(s){return s===n}function m$(s){return mr(s)&&Ui(s)==Jt}function v$(s){return mr(s)&&Qi(s)==Or}var y$=Gh(em),x$=Gh(function(s,l){return s<=l});function tb(s){if(!s)return[];if(go(s))return np(s)?Ue(s):po(s);if(fs&&s[fs])return p(s[fs]());var l=Ui(s),h=l==Xe?_:l==$t?L:Bc;return h(s)}function ll(s){if(!s)return s===0?s:0;if(s=vs(s),s===ce||s===-ce){var l=s<0?-1:1;return l*te}return s===s?s:0}function Bt(s){var l=ll(s),h=l%1;return l===l?h?l-h:l:0}function nb(s){return s?Ku(Bt(s),0,$e):0}function vs(s){if(typeof s=="number")return s;if(zo(s))return xe;if(nr(s)){var l=typeof s.valueOf=="function"?s.valueOf():s;s=nr(l)?l+"":l}if(typeof s!="string")return s===0?s:+s;s=Zn(s);var h=Fs.test(s);return h||Ll.test(s)?Qa(s.slice(2),h?2:8):Ga.test(s)?xe:+s}function rb(s){return ba(s,mo(s))}function w$(s){return s?Ku(Bt(s),-ie,ie):s===0?s:0}function vn(s){return s==null?"":Fo(s)}var _$=Mc(function(s,l){if(sd(l)||go(l)){ba(l,Qr(l),s);return}for(var h in l)gt.call(l,h)&&ed(s,h,l[h])}),ib=Mc(function(s,l){ba(l,mo(l),s)}),rp=Mc(function(s,l,h,C){ba(l,mo(l),s,C)}),b$=Mc(function(s,l,h,C){ba(l,Qr(l),s,C)}),S$=ol(Yg);function C$(s,l){var h=Uc(s);return l==null?h:Uw(h,l)}var k$=qt(function(s,l){s=Ae(s);var h=-1,C=l.length,U=C>2?l[2]:n;for(U&&Ji(l[0],l[1],U)&&(C=1);++h<C;)for(var W=l[h],J=mo(W),re=-1,ge=J.length;++re<ge;){var je=J[re],Ie=s[je];(Ie===n||Ks(Ie,at[je])&&!gt.call(s,je))&&(s[je]=W[je])}return s}),E$=qt(function(s){return s.push(n,__),mt(ob,n,s)});function T$(s,l){return Te(s,kt(l,3),_a)}function A$(s,l){return Te(s,kt(l,3),Kg)}function R$(s,l){return s==null?s:Xg(s,kt(l,3),mo)}function P$(s,l){return s==null?s:Bw(s,kt(l,3),mo)}function $$(s,l){return s&&_a(s,kt(l,3))}function O$(s,l){return s&&Kg(s,kt(l,3))}function j$(s){return s==null?[]:Dh(s,Qr(s))}function I$(s){return s==null?[]:Dh(s,mo(s))}function Tm(s,l,h){var C=s==null?n:qu(s,l);return C===n?h:C}function L$(s,l){return s!=null&&C_(s,l,i4)}function Am(s,l){return s!=null&&C_(s,l,o4)}var U$=m_(function(s,l,h){l!=null&&typeof l.toString!="function"&&(l=pr.call(l)),s[l]=h},Pm(vo)),M$=m_(function(s,l,h){l!=null&&typeof l.toString!="function"&&(l=pr.call(l)),gt.call(s,l)?s[l].push(h):s[l]=[h]},kt),D$=qt(nd);function Qr(s){return go(s)?Iw(s):Zg(s)}function mo(s){return go(s)?Iw(s,!0):g4(s)}function F$(s,l){var h={};return l=kt(l,3),_a(s,function(C,U,W){rl(h,l(C,U,W),C)}),h}function z$(s,l){var h={};return l=kt(l,3),_a(s,function(C,U,W){rl(h,U,l(C,U,W))}),h}var B$=Mc(function(s,l,h){Fh(s,l,h)}),ob=Mc(function(s,l,h,C){Fh(s,l,h,C)}),N$=ol(function(s,l){var h={};if(s==null)return h;var C=!1;l=xn(l,function(W){return W=Yl(W,s),C||(C=W.length>1),W}),ba(s,hm(s),h),C&&(h=ps(h,b|x|g,U4));for(var U=l.length;U--;)om(h,l[U]);return h});function W$(s,l){return sb(s,ep(kt(l)))}var H$=ol(function(s,l){return s==null?{}:v4(s,l)});function sb(s,l){if(s==null)return{};var h=xn(hm(s),function(C){return[C]});return l=kt(l),Qw(s,h,function(C,U){return l(C,U[0])})}function V$(s,l,h){l=Yl(l,s);var C=-1,U=l.length;for(U||(U=1,s=n);++C<U;){var W=s==null?n:s[Sa(l[C])];W===n&&(C=U,W=h),s=al(W)?W.call(s):W}return s}function G$(s,l,h){return s==null?s:id(s,l,h)}function Y$(s,l,h,C){return C=typeof C=="function"?C:n,s==null?s:id(s,l,h,C)}var ab=x_(Qr),lb=x_(mo);function X$(s,l,h){var C=Ft(s),U=C||Kl(s)||zc(s);if(l=kt(l,4),h==null){var W=s&&s.constructor;U?h=C?new W:[]:nr(s)?h=al(W)?Uc(Vr(s)):{}:h={}}return(U?Ur:_a)(s,function(J,re,ge){return l(h,J,re,ge)}),h}function K$(s,l){return s==null?!0:om(s,l)}function q$(s,l,h){return s==null?s:n_(s,l,lm(h))}function Q$(s,l,h,C){return C=typeof C=="function"?C:n,s==null?s:n_(s,l,lm(h),C)}function Bc(s){return s==null?[]:Wr(s,Qr(s))}function J$(s){return s==null?[]:Wr(s,mo(s))}function Z$(s,l,h){return h===n&&(h=l,l=n),h!==n&&(h=vs(h),h=h===h?h:0),l!==n&&(l=vs(l),l=l===l?l:0),Ku(vs(s),l,h)}function eO(s,l,h){return l=ll(l),h===n?(h=l,l=0):h=ll(h),s=vs(s),s4(s,l,h)}function tO(s,l,h){if(h&&typeof h!="boolean"&&Ji(s,l,h)&&(l=h=n),h===n&&(typeof l=="boolean"?(h=l,l=n):typeof s=="boolean"&&(h=s,s=n)),s===n&&l===n?(s=0,l=1):(s=ll(s),l===n?(l=s,s=0):l=ll(l)),s>l){var C=s;s=l,l=C}if(h||s%1||l%1){var U=ho();return ln(s+U*(l-s+Ki("1e-"+((U+"").length-1))),l)}return nm(s,l)}var nO=Dc(function(s,l,h){return l=l.toLowerCase(),s+(h?ub(l):l)});function ub(s){return Rm(vn(s).toLowerCase())}function cb(s){return s=vn(s),s&&s.replace(Ul,ht).replace(Lr,"")}function rO(s,l,h){s=vn(s),l=Fo(l);var C=s.length;h=h===n?C:Ku(Bt(h),0,C);var U=h;return h-=l.length,h>=0&&s.slice(h,U)==l}function iO(s){return s=vn(s),s&&Wa.test(s)?s.replace(Ol,dr):s}function oO(s){return s=vn(s),s&&ua.test(s)?s.replace(Ds,"\\$&"):s}var sO=Dc(function(s,l,h){return s+(h?"-":"")+l.toLowerCase()}),aO=Dc(function(s,l,h){return s+(h?" ":"")+l.toLowerCase()}),lO=h_("toLowerCase");function uO(s,l,h){s=vn(s),l=Bt(l);var C=l?ue(s):0;if(!l||C>=l)return s;var U=(l-C)/2;return Vh(Xt(U),h)+s+Vh(nt(U),h)}function cO(s,l,h){s=vn(s),l=Bt(l);var C=l?ue(s):0;return l&&C<l?s+Vh(l-C,h):s}function fO(s,l,h){s=vn(s),l=Bt(l);var C=l?ue(s):0;return l&&C<l?Vh(l-C,h)+s:s}function dO(s,l,h){return h||l==null?l=0:l&&(l=+l),bn(vn(s).replace(Ha,""),l||0)}function hO(s,l,h){return(h?Ji(s,l,h):l===n)?l=1:l=Bt(l),rm(vn(s),l)}function pO(){var s=arguments,l=vn(s[0]);return s.length<3?l:l.replace(s[1],s[2])}var gO=Dc(function(s,l,h){return s+(h?"_":"")+l.toLowerCase()});function mO(s,l,h){return h&&typeof h!="number"&&Ji(s,l,h)&&(l=h=n),h=h===n?$e:h>>>0,h?(s=vn(s),s&&(typeof l=="string"||l!=null&&!Em(l))&&(l=Fo(l),!l&&wn(s))?Xl(Ue(s),0,h):s.split(l,h)):[]}var vO=Dc(function(s,l,h){return s+(h?" ":"")+Rm(l)});function yO(s,l,h){return s=vn(s),h=h==null?0:Ku(Bt(h),0,s.length),l=Fo(l),s.slice(h,h+l.length)==l}function xO(s,l,h){var C=B.templateSettings;h&&Ji(s,l,h)&&(l=n),s=vn(s),l=rp({},l,C,w_);var U=rp({},l.imports,C.imports,w_),W=Qr(U),J=Wr(U,W),re,ge,je=0,Ie=l.interpolate||fa,Be="__p += '",Je=Ye((l.escape||fa).source+"|"+Ie.source+"|"+(Ie===jc?Xr:fa).source+"|"+(l.evaluate||fa).source+"|$","g"),ct="//# sourceURL="+(gt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qa+"]")+`
`;s.replace(Je,function(Rt,Zt,on,Bo,Zi,No){return on||(on=Bo),Be+=s.slice(je,No).replace(oi,Tt),Zt&&(re=!0,Be+=`' +
__e(`+Zt+`) +
'`),Zi&&(ge=!0,Be+=`';
`+Zi+`;
__p += '`),on&&(Be+=`' +
((__t = (`+on+`)) == null ? '' : __t) +
'`),je=No+Rt.length,Rt}),Be+=`';
`;var At=gt.call(l,"variable")&&l.variable;if(!At)Be=`with (obj) {
`+Be+`
}
`;else if(Ci.test(At))throw new de(u);Be=(ge?Be.replace(Pl,""):Be).replace($l,"$1").replace(Na,"$1;"),Be="function("+(At||"obj")+`) {
`+(At?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(re?", __e = _.escape":"")+(ge?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Be+`return __p
}`;var Ht=db(function(){return qe(W,ct+"return "+Be).apply(n,J)});if(Ht.source=Be,km(Ht))throw Ht;return Ht}function wO(s){return vn(s).toLowerCase()}function _O(s){return vn(s).toUpperCase()}function bO(s,l,h){if(s=vn(s),s&&(h||l===n))return Zn(s);if(!s||!(l=Fo(l)))return s;var C=Ue(s),U=Ue(l),W=_t(C,U),J=Cr(C,U)+1;return Xl(C,W,J).join("")}function SO(s,l,h){if(s=vn(s),s&&(h||l===n))return s.slice(0,We(s)+1);if(!s||!(l=Fo(l)))return s;var C=Ue(s),U=Cr(C,Ue(l))+1;return Xl(C,0,U).join("")}function CO(s,l,h){if(s=vn(s),s&&(h||l===n))return s.replace(Ha,"");if(!s||!(l=Fo(l)))return s;var C=Ue(s),U=_t(C,Ue(l));return Xl(C,U).join("")}function kO(s,l){var h=q,C=K;if(nr(l)){var U="separator"in l?l.separator:U;h="length"in l?Bt(l.length):h,C="omission"in l?Fo(l.omission):C}s=vn(s);var W=s.length;if(wn(s)){var J=Ue(s);W=J.length}if(h>=W)return s;var re=h-ue(C);if(re<1)return C;var ge=J?Xl(J,0,re).join(""):s.slice(0,re);if(U===n)return ge+C;if(J&&(re+=ge.length-re),Em(U)){if(s.slice(re).search(U)){var je,Ie=ge;for(U.global||(U=Ye(U.source,vn(Kn.exec(U))+"g")),U.lastIndex=0;je=U.exec(Ie);)var Be=je.index;ge=ge.slice(0,Be===n?re:Be)}}else if(s.indexOf(Fo(U),re)!=re){var Je=ge.lastIndexOf(U);Je>-1&&(ge=ge.slice(0,Je))}return ge+C}function EO(s){return s=vn(s),s&&Si.test(s)?s.replace(br,Ge):s}var TO=Dc(function(s,l,h){return s+(h?" ":"")+l.toUpperCase()}),Rm=h_("toUpperCase");function fb(s,l,h){return s=vn(s),l=h?n:l,l===n?d(s)?Fe(s):fe(s):s.match(l)||[]}var db=qt(function(s,l){try{return mt(s,n,l)}catch(h){return km(h)?h:new de(h)}}),AO=ol(function(s,l){return Ur(l,function(h){h=Sa(h),rl(s,h,Sm(s[h],s))}),s});function RO(s){var l=s==null?0:s.length,h=kt();return s=l?xn(s,function(C){if(typeof C[1]!="function")throw new yt(a);return[h(C[0]),C[1]]}):[],qt(function(C){for(var U=-1;++U<l;){var W=s[U];if(mt(W[0],this,C))return mt(W[1],this,C)}})}function PO(s){return t4(ps(s,b))}function Pm(s){return function(){return s}}function $O(s,l){return s==null||s!==s?l:s}var OO=g_(),jO=g_(!0);function vo(s){return s}function $m(s){return Vw(typeof s=="function"?s:ps(s,b))}function IO(s){return Yw(ps(s,b))}function LO(s,l){return Xw(s,ps(l,b))}var UO=qt(function(s,l){return function(h){return nd(h,s,l)}}),MO=qt(function(s,l){return function(h){return nd(s,h,l)}});function Om(s,l,h){var C=Qr(l),U=Dh(l,C);h==null&&!(nr(l)&&(U.length||!C.length))&&(h=l,l=s,s=this,U=Dh(l,Qr(l)));var W=!(nr(h)&&"chain"in h)||!!h.chain,J=al(s);return Ur(U,function(re){var ge=l[re];s[re]=ge,J&&(s.prototype[re]=function(){var je=this.__chain__;if(W||je){var Ie=s(this.__wrapped__),Be=Ie.__actions__=po(this.__actions__);return Be.push({func:ge,args:arguments,thisArg:s}),Ie.__chain__=je,Ie}return ge.apply(s,us([this.value()],arguments))})}),s}function DO(){return Jn._===this&&(Jn._=co),this}function jm(){}function FO(s){return s=Bt(s),qt(function(l){return Kw(l,s)})}var zO=cm(xn),BO=cm(Wl),NO=cm(Z);function hb(s){return vm(s)?lt(Sa(s)):y4(s)}function WO(s){return function(l){return s==null?n:qu(s,l)}}var HO=v_(),VO=v_(!0);function Im(){return[]}function Lm(){return!1}function GO(){return{}}function YO(){return""}function XO(){return!0}function KO(s,l){if(s=Bt(s),s<1||s>ie)return[];var h=$e,C=ln(s,$e);l=kt(l),s-=$e;for(var U=Un(C,l);++h<s;)l(h);return U}function qO(s){return Ft(s)?xn(s,Sa):zo(s)?[s]:po(j_(vn(s)))}function QO(s){var l=++hr;return vn(s)+l}var JO=Hh(function(s,l){return s+l},0),ZO=fm("ceil"),ej=Hh(function(s,l){return s/l},1),tj=fm("floor");function nj(s){return s&&s.length?Mh(s,vo,qg):n}function rj(s,l){return s&&s.length?Mh(s,kt(l,2),qg):n}function ij(s){return Gt(s,vo)}function oj(s,l){return Gt(s,kt(l,2))}function sj(s){return s&&s.length?Mh(s,vo,em):n}function aj(s,l){return s&&s.length?Mh(s,kt(l,2),em):n}var lj=Hh(function(s,l){return s*l},1),uj=fm("round"),cj=Hh(function(s,l){return s-l},0);function fj(s){return s&&s.length?dn(s,vo):0}function dj(s,l){return s&&s.length?dn(s,kt(l,2)):0}return B.after=IP,B.ary=H_,B.assign=_$,B.assignIn=ib,B.assignInWith=rp,B.assignWith=b$,B.at=S$,B.before=V_,B.bind=Sm,B.bindAll=AO,B.bindKey=G_,B.castArray=GP,B.chain=B_,B.chunk=tR,B.compact=nR,B.concat=rR,B.cond=RO,B.conforms=PO,B.constant=Pm,B.countBy=fP,B.create=C$,B.curry=Y_,B.curryRight=X_,B.debounce=K_,B.defaults=k$,B.defaultsDeep=E$,B.defer=LP,B.delay=UP,B.difference=iR,B.differenceBy=oR,B.differenceWith=sR,B.drop=aR,B.dropRight=lR,B.dropRightWhile=uR,B.dropWhile=cR,B.fill=fR,B.filter=hP,B.flatMap=mP,B.flatMapDeep=vP,B.flatMapDepth=yP,B.flatten=M_,B.flattenDeep=dR,B.flattenDepth=hR,B.flip=MP,B.flow=OO,B.flowRight=jO,B.fromPairs=pR,B.functions=j$,B.functionsIn=I$,B.groupBy=xP,B.initial=mR,B.intersection=vR,B.intersectionBy=yR,B.intersectionWith=xR,B.invert=U$,B.invertBy=M$,B.invokeMap=_P,B.iteratee=$m,B.keyBy=bP,B.keys=Qr,B.keysIn=mo,B.map=Qh,B.mapKeys=F$,B.mapValues=z$,B.matches=IO,B.matchesProperty=LO,B.memoize=Zh,B.merge=B$,B.mergeWith=ob,B.method=UO,B.methodOf=MO,B.mixin=Om,B.negate=ep,B.nthArg=FO,B.omit=N$,B.omitBy=W$,B.once=DP,B.orderBy=SP,B.over=zO,B.overArgs=FP,B.overEvery=BO,B.overSome=NO,B.partial=Cm,B.partialRight=q_,B.partition=CP,B.pick=H$,B.pickBy=sb,B.property=hb,B.propertyOf=WO,B.pull=SR,B.pullAll=F_,B.pullAllBy=CR,B.pullAllWith=kR,B.pullAt=ER,B.range=HO,B.rangeRight=VO,B.rearg=zP,B.reject=TP,B.remove=TR,B.rest=BP,B.reverse=_m,B.sampleSize=RP,B.set=G$,B.setWith=Y$,B.shuffle=PP,B.slice=AR,B.sortBy=jP,B.sortedUniq=LR,B.sortedUniqBy=UR,B.split=mO,B.spread=NP,B.tail=MR,B.take=DR,B.takeRight=FR,B.takeRightWhile=zR,B.takeWhile=BR,B.tap=nP,B.throttle=WP,B.thru=qh,B.toArray=tb,B.toPairs=ab,B.toPairsIn=lb,B.toPath=qO,B.toPlainObject=rb,B.transform=X$,B.unary=HP,B.union=NR,B.unionBy=WR,B.unionWith=HR,B.uniq=VR,B.uniqBy=GR,B.uniqWith=YR,B.unset=K$,B.unzip=bm,B.unzipWith=z_,B.update=q$,B.updateWith=Q$,B.values=Bc,B.valuesIn=J$,B.without=XR,B.words=fb,B.wrap=VP,B.xor=KR,B.xorBy=qR,B.xorWith=QR,B.zip=JR,B.zipObject=ZR,B.zipObjectDeep=eP,B.zipWith=tP,B.entries=ab,B.entriesIn=lb,B.extend=ib,B.extendWith=rp,Om(B,B),B.add=JO,B.attempt=db,B.camelCase=nO,B.capitalize=ub,B.ceil=ZO,B.clamp=Z$,B.clone=YP,B.cloneDeep=KP,B.cloneDeepWith=qP,B.cloneWith=XP,B.conformsTo=QP,B.deburr=cb,B.defaultTo=$O,B.divide=ej,B.endsWith=rO,B.eq=Ks,B.escape=iO,B.escapeRegExp=oO,B.every=dP,B.find=pP,B.findIndex=L_,B.findKey=T$,B.findLast=gP,B.findLastIndex=U_,B.findLastKey=A$,B.floor=tj,B.forEach=N_,B.forEachRight=W_,B.forIn=R$,B.forInRight=P$,B.forOwn=$$,B.forOwnRight=O$,B.get=Tm,B.gt=JP,B.gte=ZP,B.has=L$,B.hasIn=Am,B.head=D_,B.identity=vo,B.includes=wP,B.indexOf=gR,B.inRange=eO,B.invoke=D$,B.isArguments=Zu,B.isArray=Ft,B.isArrayBuffer=e$,B.isArrayLike=go,B.isArrayLikeObject=Tr,B.isBoolean=t$,B.isBuffer=Kl,B.isDate=n$,B.isElement=r$,B.isEmpty=i$,B.isEqual=o$,B.isEqualWith=s$,B.isError=km,B.isFinite=a$,B.isFunction=al,B.isInteger=Q_,B.isLength=tp,B.isMap=J_,B.isMatch=l$,B.isMatchWith=u$,B.isNaN=c$,B.isNative=f$,B.isNil=h$,B.isNull=d$,B.isNumber=Z_,B.isObject=nr,B.isObjectLike=mr,B.isPlainObject=ld,B.isRegExp=Em,B.isSafeInteger=p$,B.isSet=eb,B.isString=np,B.isSymbol=zo,B.isTypedArray=zc,B.isUndefined=g$,B.isWeakMap=m$,B.isWeakSet=v$,B.join=wR,B.kebabCase=sO,B.last=ms,B.lastIndexOf=_R,B.lowerCase=aO,B.lowerFirst=lO,B.lt=y$,B.lte=x$,B.max=nj,B.maxBy=rj,B.mean=ij,B.meanBy=oj,B.min=sj,B.minBy=aj,B.stubArray=Im,B.stubFalse=Lm,B.stubObject=GO,B.stubString=YO,B.stubTrue=XO,B.multiply=lj,B.nth=bR,B.noConflict=DO,B.noop=jm,B.now=Jh,B.pad=uO,B.padEnd=cO,B.padStart=fO,B.parseInt=dO,B.random=tO,B.reduce=kP,B.reduceRight=EP,B.repeat=hO,B.replace=pO,B.result=V$,B.round=uj,B.runInContext=X,B.sample=AP,B.size=$P,B.snakeCase=gO,B.some=OP,B.sortedIndex=RR,B.sortedIndexBy=PR,B.sortedIndexOf=$R,B.sortedLastIndex=OR,B.sortedLastIndexBy=jR,B.sortedLastIndexOf=IR,B.startCase=vO,B.startsWith=yO,B.subtract=cj,B.sum=fj,B.sumBy=dj,B.template=xO,B.times=KO,B.toFinite=ll,B.toInteger=Bt,B.toLength=nb,B.toLower=wO,B.toNumber=vs,B.toSafeInteger=w$,B.toString=vn,B.toUpper=_O,B.trim=bO,B.trimEnd=SO,B.trimStart=CO,B.truncate=kO,B.unescape=EO,B.uniqueId=QO,B.upperCase=TO,B.upperFirst=Rm,B.each=N_,B.eachRight=W_,B.first=D_,Om(B,function(){var s={};return _a(B,function(l,h){gt.call(B.prototype,h)||(s[h]=l)}),s}(),{chain:!1}),B.VERSION=r,Ur(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){B[s].placeholder=B}),Ur(["drop","take"],function(s,l){en.prototype[s]=function(h){h=h===n?1:rn(Bt(h),0);var C=this.__filtered__&&!l?new en(this):this.clone();return C.__filtered__?C.__takeCount__=ln(h,C.__takeCount__):C.__views__.push({size:ln(h,$e),type:s+(C.__dir__<0?"Right":"")}),C},en.prototype[s+"Right"]=function(h){return this.reverse()[s](h).reverse()}}),Ur(["filter","map","takeWhile"],function(s,l){var h=l+1,C=h==le||h==Ce;en.prototype[s]=function(U){var W=this.clone();return W.__iteratees__.push({iteratee:kt(U,3),type:h}),W.__filtered__=W.__filtered__||C,W}}),Ur(["head","last"],function(s,l){var h="take"+(l?"Right":"");en.prototype[s]=function(){return this[h](1).value()[0]}}),Ur(["initial","tail"],function(s,l){var h="drop"+(l?"":"Right");en.prototype[s]=function(){return this.__filtered__?new en(this):this[h](1)}}),en.prototype.compact=function(){return this.filter(vo)},en.prototype.find=function(s){return this.filter(s).head()},en.prototype.findLast=function(s){return this.reverse().find(s)},en.prototype.invokeMap=qt(function(s,l){return typeof s=="function"?new en(this):this.map(function(h){return nd(h,s,l)})}),en.prototype.reject=function(s){return this.filter(ep(kt(s)))},en.prototype.slice=function(s,l){s=Bt(s);var h=this;return h.__filtered__&&(s>0||l<0)?new en(h):(s<0?h=h.takeRight(-s):s&&(h=h.drop(s)),l!==n&&(l=Bt(l),h=l<0?h.dropRight(-l):h.take(l-s)),h)},en.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},en.prototype.toArray=function(){return this.take($e)},_a(en.prototype,function(s,l){var h=/^(?:filter|find|map|reject)|While$/.test(l),C=/^(?:head|last)$/.test(l),U=B[C?"take"+(l=="last"?"Right":""):l],W=C||/^find/.test(l);U&&(B.prototype[l]=function(){var J=this.__wrapped__,re=C?[1]:arguments,ge=J instanceof en,je=re[0],Ie=ge||Ft(J),Be=function(Zt){var on=U.apply(B,us([Zt],re));return C&&Je?on[0]:on};Ie&&h&&typeof je=="function"&&je.length!=1&&(ge=Ie=!1);var Je=this.__chain__,ct=!!this.__actions__.length,At=W&&!Je,Ht=ge&&!ct;if(!W&&Ie){J=Ht?J:new en(this);var Rt=s.apply(J,re);return Rt.__actions__.push({func:qh,args:[Be],thisArg:n}),new hs(Rt,Je)}return At&&Ht?s.apply(this,re):(Rt=this.thru(Be),At?C?Rt.value()[0]:Rt.value():Rt)})}),Ur(["pop","push","shift","sort","splice","unshift"],function(s){var l=St[s],h=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",C=/^(?:pop|shift)$/.test(s);B.prototype[s]=function(){var U=arguments;if(C&&!this.__chain__){var W=this.value();return l.apply(Ft(W)?W:[],U)}return this[h](function(J){return l.apply(Ft(J)?J:[],U)})}}),_a(en.prototype,function(s,l){var h=B[l];if(h){var C=h.name+"";gt.call(tr,C)||(tr[C]=[]),tr[C].push({name:l,func:h})}}),tr[Wh(n,$).name]=[{name:"wrapper",func:n}],en.prototype.clone=EA,en.prototype.reverse=TA,en.prototype.value=AA,B.prototype.at=rP,B.prototype.chain=iP,B.prototype.commit=oP,B.prototype.next=sP,B.prototype.plant=lP,B.prototype.reverse=uP,B.prototype.toJSON=B.prototype.valueOf=B.prototype.value=cP,B.prototype.first=B.prototype.head,fs&&(B.prototype[fs]=aP),B},pt=dt();Pi?((Pi.exports=pt)._=pt,Wu._=pt):Jn._=pt}).call(Ss)})(U0,U0.exports);var OD=U0.exports;const jD=Rc(OD),SS={color:{primary:"yellow",secondary:"blue",background:"black",text:{heading:"red",body:"blue",button:"white",link:"green"},button:{primary:{background:"black",hoverShadow:"grey"},secondary:{background:"blue",hoverShadow:"blue"},tertiary:{background:"red",hoverShadow:"red"}},error:"red",warning:"amber",success:"green"},font:{family:"Sarabun",size:{xlarge:"70px",large:"60px",medium:"50px",small:"40px"},weight:{light:300,regular:400,bold:700}},spacing:{xlarge:"",large:"",medium:"",small:"",xsmall:""},breakpoint:{mobile:"(max-width: 320px)",tablet:"(min-width: 321px && max-width: 640px)",desktop:"(min-width: 641px && max-width: 1440px)",largeDesktop:"(min-width: 1441px)"},navigation:{color:{background:"white",foreground:"blue",border:"black",text:"black"}}},F5=({theme:e,children:t})=>{const[n,r]=we.useState(SS),i=LL();return we.useEffect(function(){e&&r(jD.merge({},SS,i,e))},[i,e]),m.jsx(jL,{theme:n,children:t})},ID=Q.div`
margin-bottom: -1px;
  ${e=>`background: ${e.background?e.background:e.theme.color.background};`}
`,z5=we.forwardRef(({id:e,children:t,className:n,style:r,theme:i,rowIndex:o},a)=>{const u=XM();return we.useMemo(()=>u===null||o!==void 0&&o<u,[u,o])?m.jsx(ID,{id:e,style:r,className:n,background:i?.color?.background,ref:a,children:m.jsx(VM,{rowIndex:o!==void 0?o:null,children:i?m.jsx(F5,{theme:i,children:t}):t})}):null}),LD=we.createContext(void 0),UD=({children:e,sectionIndex:t})=>m.jsx(LD.Provider,{value:{currentSectionIndex:t},children:e}),B5=({children:e,sectionIndex:t})=>m.jsx(UD,{sectionIndex:t!==void 0?t:null,children:vt.Children.map(e,n=>vt.isValidElement(n)?(n.type!==z5&&console.warn("Section only accepts Row components as children, at section ",t,"."),n.props.rowIndex===0&&n.props.gated&&console.warn("The first row in the first section cannot be gated!"),n):null)}),MD=(e,t)=>`s${e+1}r${t+1}`,DD=({inputSections:e})=>{const t=cw(),[n,r]=we.useState([]);return we.useEffect(()=>{console.debug("initialising course layout...");let i=0;const o=e.map((a,u)=>{const c=a.props.children;return m.jsx(B5,{children:c.map((f,v)=>{const b=f.props.id?f.props.id:MD(u,v);t(bD(b)),(f.props.gated||!1)&&t(CD(b));const g=vt.cloneElement(f,{id:b,key:b,rowIndex:i});return console.debug("set row",i,"id to",b),i++,g})},`section-${u}`)});r(o),console.debug("..done")},[t,e]),{outputSections:n}},CS=e=>{const t=document.getElementById(e);t?(t.scrollIntoView({behavior:"smooth",block:"nearest"}),console.debug("scrolled to ",e)):console.debug("trying to scroll to ",e," but no element with that ID found")},FD=({children:e,sections:t})=>{const n=fy(g=>g.rows.rowIds),r=we.useCallback(g=>n.length>g?n[g]:null,[n]),i=we.useCallback(g=>{const S=n.indexOf(g);return S!==-1?S:null},[n]),{firstLockedRowIndex:o,checkRowIsGated:a,unlockRowFunc:u}=$D({inputSections:t,getRowId:r,getRowIndex:i}),{outputSections:c}=DD({inputSections:t}),f=cw(),v=fy(g=>g.rows.activeRowIndex),b=we.useCallback(g=>{f(bS(g));const S=r(g);S!==null?(console.debug("Navigating to row",g,S),CS(S)):console.warn("Attempting to go to row index",g,"but no ID was found for that row.")},[f,r]),x=we.useCallback(g=>{const S=n.indexOf(g);S!==-1?(f(bS(S)),CS(g)):console.warn("Attempting to navigate to row ID '",g,"' but provided ID not found.")},[f,n]);return m.jsx(y5.Provider,{value:{sections:c,unlockRow:u,checkRowIsGated:a,firstLockedRowIndex:o,activeRowIndex:v,goToRowIndex:b,goToRowId:x,getRowId:r,getRowIndex:i},children:e})},zD=we.memo(FD),N5=()=>{const e=HM(),t=YM(),n=KM(),r=qM(),i=we.useMemo(()=>e!==null&&n<=e,[n,e]),o=we.useCallback(()=>{if(e===null){console.warn("Attempting to go to row but an invalid row ID was provided:",e);return}const u=e+1;t(u),setTimeout(()=>r(u),100)},[e,r,t]),a=we.useCallback(u=>{a(u)},[]);return{goToNextRow:o,goToRowId:a,userHasPassedThisRow:i}},BD=Q.div`
  /* Add styles as needed */
  height: 100%;
`,ND=({id:e,host:t,alternateId:n,onEnd:r,children:i})=>{const[o,a]=we.useState(e),{goToNextRow:u}=N5(),c=g=>{a(g)},f=n===o?e:n||"default-id",v=n===o?"Original Version":"Descriptive Audio Version",b=n&&m.jsx("a",{href:`#${o}`,"aria-labelledby":"Show alternate video source",onClick:()=>c(f),children:v}),x=()=>{switch(t){case"wistia":return m.jsx(zM,{id:o,onEnd:()=>{u(),r&&r()}});case"vimeo":return m.jsx(NM,{id:o});default:return m.jsx("span",{children:"Sorry no video found, please check if the host is correct."})}};return m.jsxs(BD,{id:`#${o}`,children:[b,i,x()]})};Q.div`
  position: relative;
  width: fit-content;
`;Q.iframe`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  border: none;
`;const WD=Q.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  ${({hideDivider:e})=>`
    gap: ${e?"45px":"30px"};
  `}

  @media (max-width: 767px) {
    flex-direction: ${({orientation:e})=>e==="left"?"column":"column-reverse"};
    > div {
      flex-basis: 100%;
    }
  }
`,kS=Q.div`
  ${({imageFlexBasis:e})=>`
  flex-basis: ${e}%;
`}
`,ES=Q.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: ${({orientation:e})=>e==="left"?"flex-end":"flex-start"};
`,TS=Q(Ut)`
  height: auto;

  @media (max-width: 540px) {
    margin-left: auto;
    margin-right: auto;
  }
`,AS=Q.div`
  ${({dividerColor:e,hideDivider:t})=>`
  width: 6px;
  background: ${e||"#34669c"};
    margin-right: calc(max(20px, 2vw));
  ${t&&`
  display: none; 
  margin-right: 0px;
  `}
`}
`,RS=Q.div`
  ${({textFlexBasis:e})=>`
  flex-basis: ${e}%;
`}
`,PS=Q.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-self: stretch;
`,$S=Q(Xn)`
  ${({subtitleColor:e})=>`
color: ${e};
`}
`,OS=Q(Xn)`
  ${({textColor:e})=>`
  width: 100%;
  color: ${e};
 p {
    color: ${e};
    // font-size: calc(clamp(20px, 2.5vw, 27px));
  }
  @media (max-width: 540px) {
    width: 100%;
  }
`}
`,HD={maxHeight:"600px"},VD=({orientation:e="left",imageUrl:t,text:n,textStyle:r,dividerColor:i="#34669c",subtitle:o,subtitleStyle:a,imageFlexBasis:u=50,textFlexBasis:c=50,repeat:f=!1,hideDivider:v=!1,dividerStyle:b,imageStyle:x=HD,imageContainerStyle:g,simpleFade:S,className:w})=>{const[j,$]=we.useState();return we.useEffect(()=>{$(()=>e==="left"?m.jsxs(m.Fragment,{children:[m.jsx(kS,{imageFlexBasis:u,children:m.jsx(Sn,{direction:S?"none":"zoom",repeat:f,children:m.jsx("div",{children:m.jsx(ES,{style:g,orientation:e,children:m.jsx(TS,{style:x,src:t})})})})}),m.jsx(RS,{textFlexBasis:c,children:m.jsxs(Sn,{direction:S?"none":"right",stagger:.2,repeat:f,children:[o?m.jsx("div",{children:m.jsx($S,{style:a,children:o})}):m.jsx("div",{}),m.jsx("div",{children:m.jsxs(PS,{children:[m.jsx(AS,{dividerColor:i,hideDivider:v,style:b}),m.jsx(OS,{noPadding:!0,style:r,children:n})]})})]})})]}):m.jsxs(m.Fragment,{children:[m.jsx(RS,{textFlexBasis:c,children:m.jsxs(Sn,{direction:S?"none":"left",stagger:.2,repeat:f,children:[o?m.jsx("div",{children:m.jsx($S,{style:a,children:o})}):m.jsx("div",{}),m.jsx("div",{children:m.jsxs(PS,{children:[m.jsx(AS,{dividerColor:i,hideDivider:v,style:b}),m.jsx(OS,{noPadding:!0,style:r,children:n})]})})]})}),m.jsx(kS,{imageFlexBasis:u,children:m.jsx(Sn,{direction:S?"none":"zoom",repeat:f,children:m.jsx("div",{children:m.jsx(ES,{style:g,orientation:e,children:m.jsx(TS,{style:x,src:t})})})})})]}))},[i,v,x,u,t,e,f,o,n,c,g,a,r,b,S]),m.jsx(WD,{orientation:e,className:w,hideDivider:v,children:j})};Q.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: auto;
  margin-top: 2vh;
`;Q.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: baseline;
`;Q.div`
  ${({minWidth:e,mobileMinWidth:t})=>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: nowrap column;
  flex-basis: ${e}%;
  min-width: ${e}%;
  padding: 10px;
  @media (max-width: 767px) {
    flex-flow: ${t?"row wrap":"column"};
    min-width: ${t||"200px"};
  }
  @media (max-width: 540px) {
    flex-basis: ${t?"unset":"50%"};
    width: fit-content;
    margin-bottom: 20px;
  }
`}
`;Q.img`
  ${({imagesMaxHeight:e})=>`
max-height: ${e&&typeof e=="string"?e:e&&typeof e=="number"?`${e}px`:"100%"};
`}
`;Q(Xn)`
  ${({color:e,textAlign:t="center",fontSize:n="calc(clamp(18px, 1.15vw, 24px))"})=>`
    text-align: ${t};
    ${e?`color: ${e}`:""};
    padding: 10px;
    font-size: ${n} ;
  `}
`;Q(Xn)`
  ${({color:e,textAlign:t="center"})=>`
    text-align: ${t};
    ${e?`color: ${e}`:""};
    p {
      text-align: ${t};
      ${e?`color: ${e}`:""};
    }
  `}
`;Q.div`
  ${({vh:e,vhTablet:t,vhMobile:n,minHeight:r})=>`
  position: relative;
  height: ${e||90}vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${r!==void 0?r:"700"}px;
  @media (min-width: 768px) and (max-width: 920px) {
    min-height: ${t||90}vh;
    height: auto;
  }
  @media (max-width: 767px) {
    min-height: ${n||90}vh;
    height: auto;
  }
`}
`;Q.div`
  ${({offset:e,mobileOffset:t,containerStyle:n})=>xt`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e||"0"}%;
    @media (max-width: 920px) {
      margin-bottom: ${t||"0"}%;
    }
    ${n&&n};
  `}
`;Q(lw)`
  ${e=>e?`color: ${e};`:""}
  text-align: center;
  margin-bottom: 20px !important;
`;Q(lw)`
  ${e=>e?`color: ${e};`:""}
  font-family: "Vollkorn", serif;
  font-weight: 700;
  letter-spacing: 0em;
  font-size: 33px;
  line-height: 105%;
  text-transform: none;
  text-align: center;
  @media (min-width: 1440px) {
    font-size: 70px;
  }
  @media (min-width: 769px) {
    font-size: calc(clamp(40px, 3.8vw, 60px));
  }
  @media (max-width: 450px) {
    font-size: 40px;
    line-height: 110%;
  }
  @media (max-width: 380px) {
    font-size: 40px;
    line-height: 105%;
  }
`;Q(Xn)`
text-align: center;
${e=>e?`color: ${e};`:""}
h1, h2, h3, h4, h5, p, b, em {
  ${e=>e?`color: ${e};`:""}
p, b, em {
  font-size: calc(clamp(20px, 2vw, 27px));
}

`;Q.div`
  @media (max-width: 920px) {
    margin-bottom: ${({mobileOffset:e})=>e}%;
  }
`;Q.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;Q(sw)`
  ${e=>`color: ${e.theme.color.text.heading||"white"};`}
  text-align: center;
`;Q(aw)``;Q(g5)`
  ${e=>`color: ${e.theme.color.text.heading||"white"};`}
  font-family: Sarabun;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  padding-bottom: 15px;
`;Q.img`
  ${({imageMaxHeight:e})=>`
  max-height: ${e||200}px;
  margin-bottom: 25px;
`}
`;Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;Q(Xn)`
  text-align: center;
  font-size: calc(clamp(20px, 3.1vw, 27px));
  ${e=>`color: ${e.theme.color.text.heading||"inherit"};`}
`;Q(Xn)`
  color: #1a1a1a;
  font-weight: 700;
  font-family: Vollkorn;
  font-size: 40px;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;Q(Xn)`
  color: #1a1a1a;
  font-size: 30px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;const GD=()=>GM(),YD=({name:e,theme:t,sections:n})=>m.jsx(F5,{theme:t,children:m.jsx(zD,{sections:n,children:m.jsx("div",{id:e,children:m.jsx(GD,{})})})});Q.div`
  display: block;
`;const XD=Q(Xn)`
  ${({theme:e})=>`color: ${e.color.text.button||"white"};`}
`,KD=Q.div`
  ${e=>{let t;switch(e.variant){case"primary":default:t=e.theme.color.button.primary.background;break;case"secondary":t=e.theme.color.button.secondary.background;break;case"tertiary":t=e.theme.color.button.tertiary.background;break}return`background: ${t||"white"};`}}
  position: relative;
  z-index: 100;
  width: fit-content;
  ${({autoWidth:e})=>`
  ${e?"min-width: max-content":"min-width: calc(100% - 40px)"};
  `}
  min-height: 55px;
  border: none;
  border-radius: 15px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  min-width: 100%;
  bottom: 0;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  padding-left: 30px;
  padding-right: 30px;
  @media (min-width: 450px) {
    ${({autoWidth:e})=>`
    ${e?"min-width: max-content":"min-width: 280px"};
    `}
  }
  @media (min-width: 360px) {
    ${({autoWidth:e})=>`
    ${e?"min-width: max-content":" min-width: 220px"};
    `}
  }
  &:hover {
    ${e=>{let t;const n=e.theme;switch(e.variant){case"primary":default:t=n.color.button.primary.hoverShadow;break;case"secondary":t=n.color.button.secondary.hoverShadow;break;case"tertiary":t=n.color.button.tertiary.hoverShadow;break}return`
      
      
      box-shadow: 0px 6px 0px 0px ${t||"#1d98be"};
    `}}
    bottom: 6px;
  }
`,Ig=({children:e,buttonStyle:t,textStyle:n,onClick:r,className:i,variant:o})=>m.jsx(KD,{onClick:r,style:t,hoverBackground:t?.hoverBackground,hoverBoxShadowColour:t?.hoverBoxShadowColour,autoWidth:t?.autoWidth,className:i,variant:t?.variant||o,children:m.jsx(XD,{size:"button",style:t?.textStyle||n,children:e})});Q.div`
  ${({isVisible:e})=>e===!1?`
    transition: opacity 0.5s;
    opacity: 0;
    pointer-events: none;
  `:""}
  > div {
    &.disabled {
      display: none;
    }
  }
`;Q(Ig)`
  margin: 50px auto auto;
`;const qD=({style:e,className:t,arrowColor:n})=>m.jsx("svg",{width:"42",height:"37",viewBox:"0 0 42 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e,className:t,children:m.jsx("path",{d:"M39.8405 18.4202L21.4202 32.1678L3 18.4202",stroke:n||"white",strokeWidth:"4.25806",strokeLinecap:"round"})}),QD=Q.div`
  ${({isVisible:e})=>e===!1?`
    transition: opacity 0.5s;
    opacity: 0 !important; // this one's actually necessary, FadeEffect tries to overwrite opacity
    pointer-events: none;
  `:""}
  z-index: 100;
  position: relative;
  margin: auto;
  display: flex;
  height: 15vh;
  align-items: flex-end;
  justify-content: center;
  background: none;
  border: none;
  @media screen and (max-width: 767px) {
    height: 10vh;
    min-height: 70px;
    ${({mobilePositionRelative:e})=>`
      ${e?"position: relative !important;":""}
    `}
  }
`,JD=Nr`
  0% {
    bottom: 5vh;
    filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.2));
  }
  50% {
    bottom: 4vh;
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.2));
  }
  100% {
    bottom: 5vh;
    filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.2));
  }
`,ZD=Q(qD)`
  position: relative;
  transition: all ease-in-out 0.3s;
  filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  animation: ${JD} 3s ease-in-out infinite;

  &:hover {
    animation: none;
    filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.2));
    bottom: 4vh;
  }
`,Qo=({style:e,className:t,arrowColor:n,mobilePositionRelative:r=!1,onClick:i})=>{const o=N5(),a=i||o.goToNextRow;return m.jsx(c5,{triggerHook:"onLeave",offset:"-250%",duration:"50%",children:m.jsx(ph,{wrapper:m.jsx("div",{}),children:m.jsx(Tc,{from:{autoAlpha:1},to:{autoAlpha:0},children:m.jsx("div",{children:m.jsx(ph,{wrapper:m.jsx("div",{}),children:m.jsx($g,{repeat:!0,threshold:.5,trigger:m.jsx("div",{}),children:m.jsx(Tc,{from:{autoAlpha:0},to:{autoAlpha:1},children:m.jsx(QD,{style:e,className:t,onClick:a,mobilePositionRelative:r,children:m.jsx(ZD,{arrowColor:n})})})})})})})})})};var xw={},W5={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(W5);var H5=W5.exports,Rv={};function cn(){return cn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cn.apply(this,arguments)}function su(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function V5(e){if(!su(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=V5(e[n])}),t}function aa(e,t,n={clone:!0}){const r=n.clone?cn({},e):e;return su(e)&&su(t)&&Object.keys(t).forEach(i=>{i!=="__proto__"&&(su(t[i])&&i in e&&su(e[i])?r[i]=aa(e[i],t[i],n):n.clone?r[i]=su(t[i])?V5(t[i]):t[i]:r[i]=t[i])}),r}var Pv={exports:{}},$v,jS;function e8(){if(jS)return $v;jS=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $v=e,$v}var Ov,IS;function t8(){if(IS)return Ov;IS=1;var e=e8();function t(){}function n(){}return n.resetWarningCache=t,Ov=function(){function r(a,u,c,f,v,b){if(b!==e){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},Ov}var LS;function G5(){return LS||(LS=1,Pv.exports=t8()()),Pv.exports}var n8=G5();const Ql=Rc(n8);function Wf(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function Ua(e){if(typeof e!="string")throw new Error(Wf(7));return e.charAt(0).toUpperCase()+e.slice(1)}function r8(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function i8(e,t=166){let n;function r(...i){const o=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(o,t)}return r.clear=()=>{clearTimeout(n)},r}function o8(e,t){return()=>null}function s8(e,t){var n,r;return we.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Y5(e){return e&&e.ownerDocument||document}function a8(e){return Y5(e).defaultView||window}function l8(e,t){return()=>null}function X5(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const u8=typeof window<"u"?we.useLayoutEffect:we.useEffect,K5=u8;let US=0;function c8(e){const[t,n]=we.useState(e),r=e||t;return we.useEffect(()=>{t==null&&(US+=1,n(`mui-${US}`))},[t]),r}const MS=Kv["useId".toString()];function f8(e){if(MS!==void 0){const t=MS();return e??t}return c8(e)}function d8(e,t,n,r,i){return null}function h8({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=we.useRef(e!==void 0),[o,a]=we.useState(t),u=i?e:o,c=we.useCallback(f=>{i||a(f)},[]);return[u,c]}function p8(e){const t=we.useRef(e);return K5(()=>{t.current=e}),we.useRef((...n)=>(0,t.current)(...n)).current}function g8(...e){return we.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{X5(n,t)})},e)}let Lg=!0,yy=!1,DS;const m8={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function v8(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&m8[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function y8(e){e.metaKey||e.altKey||e.ctrlKey||(Lg=!0)}function jv(){Lg=!1}function x8(){this.visibilityState==="hidden"&&yy&&(Lg=!0)}function w8(e){e.addEventListener("keydown",y8,!0),e.addEventListener("mousedown",jv,!0),e.addEventListener("pointerdown",jv,!0),e.addEventListener("touchstart",jv,!0),e.addEventListener("visibilitychange",x8,!0)}function _8(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Lg||v8(t)}function b8(){const e=we.useCallback(i=>{i!=null&&w8(i.ownerDocument)},[]),t=we.useRef(!1);function n(){return t.current?(yy=!0,window.clearTimeout(DS),DS=window.setTimeout(()=>{yy=!1},100),t.current=!1,!0):!1}function r(i){return _8(i)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function q5(e,t){const n=cn({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=cn({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=e[r]||{},o=t[r];n[r]={},!o||!Object.keys(o)?n[r]=i:!i||!Object.keys(i)?n[r]=o:(n[r]=cn({},o),Object.keys(i).forEach(a=>{n[r][a]=q5(i[a],o[a])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function S8(e,t,n=void 0){const r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((o,a)=>{if(a){const u=t(a);u!==""&&o.push(u),n&&n[a]&&o.push(n[a])}return o},[]).join(" ")}),r}const FS=e=>e,C8=()=>{let e=FS;return{configure(t){e=t},generate(t){return e(t)},reset(){e=FS}}},k8=C8(),Q5=k8,E8={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function J5(e,t,n="Mui"){const r=E8[t];return r?`${n}-${r}`:`${Q5.generate(e)}-${t}`}function T8(e,t,n="Mui"){const r={};return t.forEach(i=>{r[i]=J5(e,i,n)}),r}function Tl(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Z5(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Z5(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function A8(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Z5(e))&&(r&&(r+=" "),r+=t);return r}function R8(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function P8(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var $8=function(){function e(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(P8(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=R8(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Fi="-ms-",M0="-moz-",gn="-webkit-",eA="comm",ww="rule",_w="decl",O8="@import",tA="@keyframes",j8="@layer",I8=Math.abs,Ug=String.fromCharCode,L8=Object.assign;function U8(e,t){return yi(e,0)^45?(((t<<2^yi(e,0))<<2^yi(e,1))<<2^yi(e,2))<<2^yi(e,3):0}function nA(e){return e.trim()}function M8(e,t){return(e=t.exec(e))?e[0]:e}function mn(e,t,n){return e.replace(t,n)}function xy(e,t){return e.indexOf(t)}function yi(e,t){return e.charCodeAt(t)|0}function xh(e,t,n){return e.slice(t,n)}function Ea(e){return e.length}function bw(e){return e.length}function Cp(e,t){return t.push(e),e}function D8(e,t){return e.map(t).join("")}var Mg=1,Hf=1,rA=0,Ro=0,Fr=0,qf="";function Dg(e,t,n,r,i,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Mg,column:Hf,length:a,return:""}}function yd(e,t){return L8(Dg("",null,null,"",null,null,0),e,{length:-e.length},t)}function F8(){return Fr}function z8(){return Fr=Ro>0?yi(qf,--Ro):0,Hf--,Fr===10&&(Hf=1,Mg--),Fr}function Jo(){return Fr=Ro<rA?yi(qf,Ro++):0,Hf++,Fr===10&&(Hf=1,Mg++),Fr}function Ma(){return yi(qf,Ro)}function Np(){return Ro}function Ph(e,t){return xh(qf,e,t)}function wh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iA(e){return Mg=Hf=1,rA=Ea(qf=e),Ro=0,[]}function oA(e){return qf="",e}function Wp(e){return nA(Ph(Ro-1,wy(e===91?e+2:e===40?e+1:e)))}function B8(e){for(;(Fr=Ma())&&Fr<33;)Jo();return wh(e)>2||wh(Fr)>3?"":" "}function N8(e,t){for(;--t&&Jo()&&!(Fr<48||Fr>102||Fr>57&&Fr<65||Fr>70&&Fr<97););return Ph(e,Np()+(t<6&&Ma()==32&&Jo()==32))}function wy(e){for(;Jo();)switch(Fr){case e:return Ro;case 34:case 39:e!==34&&e!==39&&wy(Fr);break;case 40:e===41&&wy(e);break;case 92:Jo();break}return Ro}function W8(e,t){for(;Jo()&&e+Fr!==47+10;)if(e+Fr===42+42&&Ma()===47)break;return"/*"+Ph(t,Ro-1)+"*"+Ug(e===47?e:Jo())}function H8(e){for(;!wh(Ma());)Jo();return Ph(e,Ro)}function V8(e){return oA(Hp("",null,null,null,[""],e=iA(e),0,[0],e))}function Hp(e,t,n,r,i,o,a,u,c){for(var f=0,v=0,b=a,x=0,g=0,S=0,w=1,j=1,$=1,y=0,E="",I=i,k=o,D=r,R=E;j;)switch(S=y,y=Jo()){case 40:if(S!=108&&yi(R,b-1)==58){xy(R+=mn(Wp(y),"&","&\f"),"&\f")!=-1&&($=-1);break}case 34:case 39:case 91:R+=Wp(y);break;case 9:case 10:case 13:case 32:R+=B8(S);break;case 92:R+=N8(Np()-1,7);continue;case 47:switch(Ma()){case 42:case 47:Cp(G8(W8(Jo(),Np()),t,n),c);break;default:R+="/"}break;case 123*w:u[f++]=Ea(R)*$;case 125*w:case 59:case 0:switch(y){case 0:case 125:j=0;case 59+v:$==-1&&(R=mn(R,/\f/g,"")),g>0&&Ea(R)-b&&Cp(g>32?BS(R+";",r,n,b-1):BS(mn(R," ","")+";",r,n,b-2),c);break;case 59:R+=";";default:if(Cp(D=zS(R,t,n,f,v,i,u,E,I=[],k=[],b),o),y===123)if(v===0)Hp(R,t,D,D,I,o,b,u,k);else switch(x===99&&yi(R,3)===110?100:x){case 100:case 108:case 109:case 115:Hp(e,D,D,r&&Cp(zS(e,D,D,0,0,i,u,E,i,I=[],b),k),i,k,b,u,r?I:k);break;default:Hp(R,D,D,D,[""],k,0,u,k)}}f=v=g=0,w=$=1,E=R="",b=a;break;case 58:b=1+Ea(R),g=S;default:if(w<1){if(y==123)--w;else if(y==125&&w++==0&&z8()==125)continue}switch(R+=Ug(y),y*w){case 38:$=v>0?1:(R+="\f",-1);break;case 44:u[f++]=(Ea(R)-1)*$,$=1;break;case 64:Ma()===45&&(R+=Wp(Jo())),x=Ma(),v=b=Ea(E=R+=H8(Np())),y++;break;case 45:S===45&&Ea(R)==2&&(w=0)}}return o}function zS(e,t,n,r,i,o,a,u,c,f,v){for(var b=i-1,x=i===0?o:[""],g=bw(x),S=0,w=0,j=0;S<r;++S)for(var $=0,y=xh(e,b+1,b=I8(w=a[S])),E=e;$<g;++$)(E=nA(w>0?x[$]+" "+y:mn(y,/&\f/g,x[$])))&&(c[j++]=E);return Dg(e,t,n,i===0?ww:u,c,f,v)}function G8(e,t,n){return Dg(e,t,n,eA,Ug(F8()),xh(e,2,-2),0)}function BS(e,t,n,r){return Dg(e,t,n,_w,xh(e,0,r),xh(e,r+1,-1),r)}function Cf(e,t){for(var n="",r=bw(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Y8(e,t,n,r){switch(e.type){case j8:if(e.children.length)break;case O8:case _w:return e.return=e.return||e.value;case eA:return"";case tA:return e.return=e.value+"{"+Cf(e.children,r)+"}";case ww:e.value=e.props.join(",")}return Ea(n=Cf(e.children,r))?e.return=e.value+"{"+n+"}":""}function X8(e){var t=bw(e);return function(n,r,i,o){for(var a="",u=0;u<t;u++)a+=e[u](n,r,i,o)||"";return a}}function K8(e){return function(t){t.root||(t=t.return)&&e(t)}}var q8=function(t,n,r){for(var i=0,o=0;i=o,o=Ma(),i===38&&o===12&&(n[r]=1),!wh(o);)Jo();return Ph(t,Ro)},Q8=function(t,n){var r=-1,i=44;do switch(wh(i)){case 0:i===38&&Ma()===12&&(n[r]=1),t[r]+=q8(Ro-1,n,r);break;case 2:t[r]+=Wp(i);break;case 4:if(i===44){t[++r]=Ma()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ug(i)}while(i=Jo());return t},J8=function(t,n){return oA(Q8(iA(t),n))},NS=new WeakMap,Z8=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!NS.get(r))&&!i){NS.set(t,!0);for(var o=[],a=J8(n,o),u=r.props,c=0,f=0;c<a.length;c++)for(var v=0;v<u.length;v++,f++)t.props[f]=o[c]?a[c].replace(/&\f/g,u[v]):u[v]+" "+a[c]}}},eF=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function sA(e,t){switch(U8(e,t)){case 5103:return gn+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return gn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return gn+e+M0+e+Fi+e+e;case 6828:case 4268:return gn+e+Fi+e+e;case 6165:return gn+e+Fi+"flex-"+e+e;case 5187:return gn+e+mn(e,/(\w+).+(:[^]+)/,gn+"box-$1$2"+Fi+"flex-$1$2")+e;case 5443:return gn+e+Fi+"flex-item-"+mn(e,/flex-|-self/,"")+e;case 4675:return gn+e+Fi+"flex-line-pack"+mn(e,/align-content|flex-|-self/,"")+e;case 5548:return gn+e+Fi+mn(e,"shrink","negative")+e;case 5292:return gn+e+Fi+mn(e,"basis","preferred-size")+e;case 6060:return gn+"box-"+mn(e,"-grow","")+gn+e+Fi+mn(e,"grow","positive")+e;case 4554:return gn+mn(e,/([^-])(transform)/g,"$1"+gn+"$2")+e;case 6187:return mn(mn(mn(e,/(zoom-|grab)/,gn+"$1"),/(image-set)/,gn+"$1"),e,"")+e;case 5495:case 3959:return mn(e,/(image-set\([^]*)/,gn+"$1$`$1");case 4968:return mn(mn(e,/(.+:)(flex-)?(.*)/,gn+"box-pack:$3"+Fi+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+gn+e+e;case 4095:case 3583:case 4068:case 2532:return mn(e,/(.+)-inline(.+)/,gn+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ea(e)-1-t>6)switch(yi(e,t+1)){case 109:if(yi(e,t+4)!==45)break;case 102:return mn(e,/(.+:)(.+)-([^]+)/,"$1"+gn+"$2-$3$1"+M0+(yi(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xy(e,"stretch")?sA(mn(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(yi(e,t+1)!==115)break;case 6444:switch(yi(e,Ea(e)-3-(~xy(e,"!important")&&10))){case 107:return mn(e,":",":"+gn)+e;case 101:return mn(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+gn+(yi(e,14)===45?"inline-":"")+"box$3$1"+gn+"$2$3$1"+Fi+"$2box$3")+e}break;case 5936:switch(yi(e,t+11)){case 114:return gn+e+Fi+mn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return gn+e+Fi+mn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return gn+e+Fi+mn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return gn+e+Fi+e+e}return e}var tF=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case _w:t.return=sA(t.value,t.length);break;case tA:return Cf([yd(t,{value:mn(t.value,"@","@"+gn)})],i);case ww:if(t.length)return D8(t.props,function(o){switch(M8(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Cf([yd(t,{props:[mn(o,/:(read-\w+)/,":"+M0+"$1")]})],i);case"::placeholder":return Cf([yd(t,{props:[mn(o,/:(plac\w+)/,":"+gn+"input-$1")]}),yd(t,{props:[mn(o,/:(plac\w+)/,":"+M0+"$1")]}),yd(t,{props:[mn(o,/:(plac\w+)/,Fi+"input-$1")]})],i)}return""})}},nF=[tF],rF=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var j=w.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var i=t.stylisPlugins||nF,o={},a,u=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(w){for(var j=w.getAttribute("data-emotion").split(" "),$=1;$<j.length;$++)o[j[$]]=!0;u.push(w)});var c,f=[Z8,eF];{var v,b=[Y8,K8(function(w){v.insert(w)})],x=X8(f.concat(i,b)),g=function(j){return Cf(V8(j),x)};c=function(j,$,y,E){v=y,g(j?j+"{"+$.styles+"}":$.styles),E&&(S.inserted[$.name]=!0)}}var S={key:n,sheet:new $8({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:c};return S.sheet.hydrate(u),S},iF=!0;function oF(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):r+=i+" "}),r}var aA=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||iF===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},sF=function(t,n,r){aA(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var o=n;do t.insert(n===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function aF(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var lF={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uF=/[A-Z]|^ms/g,cF=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lA=function(t){return t.charCodeAt(1)===45},WS=function(t){return t!=null&&typeof t!="boolean"},Iv=L3(function(e){return lA(e)?e:e.replace(uF,"-$&").toLowerCase()}),HS=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(cF,function(r,i,o){return Ta={name:i,styles:o,next:Ta},i})}return lF[t]!==1&&!lA(t)&&typeof n=="number"&&n!==0?n+"px":n};function _h(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ta={name:n.name,styles:n.styles,next:Ta},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Ta={name:r.name,styles:r.styles,next:Ta},r=r.next;var i=n.styles+";";return i}return fF(e,t,n)}case"function":{if(e!==void 0){var o=Ta,a=n(e);return Ta=o,_h(e,t,a)}break}}if(t==null)return n;var u=t[n];return u!==void 0?u:n}function fF(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=_h(e,t,n[i])+";";else for(var o in n){var a=n[o];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=o+"{"+t[a]+"}":WS(a)&&(r+=Iv(o)+":"+HS(o,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var u=0;u<a.length;u++)WS(a[u])&&(r+=Iv(o)+":"+HS(o,a[u])+";");else{var c=_h(e,t,a);switch(o){case"animation":case"animationName":{r+=Iv(o)+":"+c+";";break}default:r+=o+"{"+c+"}"}}}return r}var VS=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ta,dF=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,o="";Ta=void 0;var a=t[0];a==null||a.raw===void 0?(i=!1,o+=_h(r,n,a)):o+=a[0];for(var u=1;u<t.length;u++)o+=_h(r,n,t[u]),i&&(o+=a[u]);VS.lastIndex=0;for(var c="",f;(f=VS.exec(o))!==null;)c+="-"+f[1];var v=aF(o)+c;return{name:v,styles:o,next:Ta}},hF=function(t){return t()},pF=Kv["useInsertionEffect"]?Kv["useInsertionEffect"]:!1,gF=pF||hF,uA=we.createContext(typeof HTMLElement<"u"?rF({key:"css"}):null);uA.Provider;var mF=function(t){return we.forwardRef(function(n,r){var i=we.useContext(uA);return t(n,i,r)})},cA=we.createContext({}),vF=N1,yF=function(t){return t!=="theme"},GS=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?vF:yF},YS=function(t,n,r){var i;if(n){var o=n.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},xF=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return aA(n,r,i),gF(function(){return sF(n,r,i)}),null},wF=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,o,a;n!==void 0&&(o=n.label,a=n.target);var u=YS(t,n,r),c=u||GS(i),f=!c("as");return function(){var v=arguments,b=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&b.push("label:"+o+";"),v[0]==null||v[0].raw===void 0)b.push.apply(b,v);else{b.push(v[0][0]);for(var x=v.length,g=1;g<x;g++)b.push(v[g],v[0][g])}var S=mF(function(w,j,$){var y=f&&w.as||i,E="",I=[],k=w;if(w.theme==null){k={};for(var D in w)k[D]=w[D];k.theme=we.useContext(cA)}typeof w.className=="string"?E=oF(j.registered,I,w.className):w.className!=null&&(E=w.className+" ");var R=dF(b.concat(I),j.registered,k);E+=j.key+"-"+R.name,a!==void 0&&(E+=" "+a);var O=f&&u===void 0?GS(y):c,G={};for(var q in w)f&&q==="as"||O(q)&&(G[q]=w[q]);return G.className=E,G.ref=$,we.createElement(we.Fragment,null,we.createElement(xF,{cache:j,serialized:R,isStringTag:typeof y=="string"}),we.createElement(y,G))});return S.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",S.defaultProps=t.defaultProps,S.__emotion_real=S,S.__emotion_base=i,S.__emotion_styles=b,S.__emotion_forwardProp=u,Object.defineProperty(S,"toString",{value:function(){return"."+a}}),S.withComponent=function(w,j){return e(w,dy({},n,j,{shouldForwardProp:YS(S,j,!0)})).apply(void 0,b)},S}},_F=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],_y=wF.bind();_F.forEach(function(e){_y[e]=_y(e)});/**
 * @mui/styled-engine v5.15.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function bF(e,t){return _y(e,t)}const SF=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},CF=["values","unit","step"],kF=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>cn({},n,{[r.key]:r.val}),{})};function EF(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,i=Tl(e,CF),o=kF(t),a=Object.keys(o);function u(x){return`@media (min-width:${typeof t[x]=="number"?t[x]:x}${n})`}function c(x){return`@media (max-width:${(typeof t[x]=="number"?t[x]:x)-r/100}${n})`}function f(x,g){const S=a.indexOf(g);return`@media (min-width:${typeof t[x]=="number"?t[x]:x}${n}) and (max-width:${(S!==-1&&typeof t[a[S]]=="number"?t[a[S]]:g)-r/100}${n})`}function v(x){return a.indexOf(x)+1<a.length?f(x,a[a.indexOf(x)+1]):u(x)}function b(x){const g=a.indexOf(x);return g===0?u(a[1]):g===a.length-1?c(a[g]):f(x,a[a.indexOf(x)+1]).replace("@media","@media not all and")}return cn({keys:a,values:o,up:u,down:c,between:f,only:v,not:b,unit:n},i)}const TF={borderRadius:4},AF=TF;function Nd(e,t){return t?aa(e,t,{clone:!1}):e}const Sw={xs:0,sm:600,md:900,lg:1200,xl:1536},XS={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Sw[e]}px)`};function kl(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const o=r.breakpoints||XS;return t.reduce((a,u,c)=>(a[o.up(o.keys[c])]=n(t[c]),a),{})}if(typeof t=="object"){const o=r.breakpoints||XS;return Object.keys(t).reduce((a,u)=>{if(Object.keys(o.values||Sw).indexOf(u)!==-1){const c=o.up(u);a[c]=n(t[u],u)}else{const c=u;a[c]=t[c]}return a},{})}return n(t)}function RF(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,i)=>{const o=e.up(i);return r[o]={},r},{}))||{}}function PF(e,t){return e.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},t)}function Fg(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,e);if(r!=null)return r}return t.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,e)}function D0(e,t,n,r=n){let i;return typeof e=="function"?i=e(n):Array.isArray(e)?i=e[n]||r:i=Fg(e,n)||r,t&&(i=t(i,r,e)),i}function $r(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:i}=e,o=a=>{if(a[t]==null)return null;const u=a[t],c=a.theme,f=Fg(c,r)||{};return kl(a,u,b=>{let x=D0(f,i,b);return b===x&&typeof b=="string"&&(x=D0(f,i,`${t}${b==="default"?"":Ua(b)}`,b)),n===!1?x:{[n]:x}})};return o.propTypes={},o.filterProps=[t],o}function $F(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const OF={m:"margin",p:"padding"},jF={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},KS={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},IF=$F(e=>{if(e.length>2)if(KS[e])e=KS[e];else return[e];const[t,n]=e.split(""),r=OF[t],i=jF[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),Cw=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],kw=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Cw,...kw];function $h(e,t,n,r){var i;const o=(i=Fg(e,t,!1))!=null?i:n;return typeof o=="number"?a=>typeof a=="string"?a:o*a:Array.isArray(o)?a=>typeof a=="string"?a:o[a]:typeof o=="function"?o:()=>{}}function fA(e){return $h(e,"spacing",8)}function Oh(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function LF(e,t){return n=>e.reduce((r,i)=>(r[i]=Oh(t,n),r),{})}function UF(e,t,n,r){if(t.indexOf(n)===-1)return null;const i=IF(n),o=LF(i,r),a=e[n];return kl(e,a,o)}function dA(e,t){const n=fA(e.theme);return Object.keys(e).map(r=>UF(e,t,r,n)).reduce(Nd,{})}function vr(e){return dA(e,Cw)}vr.propTypes={};vr.filterProps=Cw;function yr(e){return dA(e,kw)}yr.propTypes={};yr.filterProps=kw;function MF(e=8){if(e.mui)return e;const t=fA({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const a=t(o);return typeof a=="number"?`${a}px`:a}).join(" ");return n.mui=!0,n}function zg(...e){const t=e.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>t[o]?Nd(i,t[o](r)):i,{});return n.propTypes={},n.filterProps=e.reduce((r,i)=>r.concat(i.filterProps),[]),n}function bs(e){return typeof e!="number"?e:`${e}px solid`}function Ls(e,t){return $r({prop:e,themeKey:"borders",transform:t})}const DF=Ls("border",bs),FF=Ls("borderTop",bs),zF=Ls("borderRight",bs),BF=Ls("borderBottom",bs),NF=Ls("borderLeft",bs),WF=Ls("borderColor"),HF=Ls("borderTopColor"),VF=Ls("borderRightColor"),GF=Ls("borderBottomColor"),YF=Ls("borderLeftColor"),XF=Ls("outline",bs),KF=Ls("outlineColor"),Bg=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=$h(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Oh(t,r)});return kl(e,e.borderRadius,n)}return null};Bg.propTypes={};Bg.filterProps=["borderRadius"];zg(DF,FF,zF,BF,NF,WF,HF,VF,GF,YF,Bg,XF,KF);const Ng=e=>{if(e.gap!==void 0&&e.gap!==null){const t=$h(e.theme,"spacing",8),n=r=>({gap:Oh(t,r)});return kl(e,e.gap,n)}return null};Ng.propTypes={};Ng.filterProps=["gap"];const Wg=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=$h(e.theme,"spacing",8),n=r=>({columnGap:Oh(t,r)});return kl(e,e.columnGap,n)}return null};Wg.propTypes={};Wg.filterProps=["columnGap"];const Hg=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=$h(e.theme,"spacing",8),n=r=>({rowGap:Oh(t,r)});return kl(e,e.rowGap,n)}return null};Hg.propTypes={};Hg.filterProps=["rowGap"];const qF=$r({prop:"gridColumn"}),QF=$r({prop:"gridRow"}),JF=$r({prop:"gridAutoFlow"}),ZF=$r({prop:"gridAutoColumns"}),e7=$r({prop:"gridAutoRows"}),t7=$r({prop:"gridTemplateColumns"}),n7=$r({prop:"gridTemplateRows"}),r7=$r({prop:"gridTemplateAreas"}),i7=$r({prop:"gridArea"});zg(Ng,Wg,Hg,qF,QF,JF,ZF,e7,t7,n7,r7,i7);function kf(e,t){return t==="grey"?t:e}const o7=$r({prop:"color",themeKey:"palette",transform:kf}),s7=$r({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:kf}),a7=$r({prop:"backgroundColor",themeKey:"palette",transform:kf});zg(o7,s7,a7);function Go(e){return e<=1&&e!==0?`${e*100}%`:e}const l7=$r({prop:"width",transform:Go}),Ew=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,i;const o=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Sw[n];return o?((i=e.theme)==null||(i=i.breakpoints)==null?void 0:i.unit)!=="px"?{maxWidth:`${o}${e.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Go(n)}};return kl(e,e.maxWidth,t)}return null};Ew.filterProps=["maxWidth"];const u7=$r({prop:"minWidth",transform:Go}),c7=$r({prop:"height",transform:Go}),f7=$r({prop:"maxHeight",transform:Go}),d7=$r({prop:"minHeight",transform:Go});$r({prop:"size",cssProperty:"width",transform:Go});$r({prop:"size",cssProperty:"height",transform:Go});const h7=$r({prop:"boxSizing"});zg(l7,Ew,u7,c7,f7,d7,h7);const p7={border:{themeKey:"borders",transform:bs},borderTop:{themeKey:"borders",transform:bs},borderRight:{themeKey:"borders",transform:bs},borderBottom:{themeKey:"borders",transform:bs},borderLeft:{themeKey:"borders",transform:bs},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:bs},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Bg},color:{themeKey:"palette",transform:kf},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:kf},backgroundColor:{themeKey:"palette",transform:kf},p:{style:yr},pt:{style:yr},pr:{style:yr},pb:{style:yr},pl:{style:yr},px:{style:yr},py:{style:yr},padding:{style:yr},paddingTop:{style:yr},paddingRight:{style:yr},paddingBottom:{style:yr},paddingLeft:{style:yr},paddingX:{style:yr},paddingY:{style:yr},paddingInline:{style:yr},paddingInlineStart:{style:yr},paddingInlineEnd:{style:yr},paddingBlock:{style:yr},paddingBlockStart:{style:yr},paddingBlockEnd:{style:yr},m:{style:vr},mt:{style:vr},mr:{style:vr},mb:{style:vr},ml:{style:vr},mx:{style:vr},my:{style:vr},margin:{style:vr},marginTop:{style:vr},marginRight:{style:vr},marginBottom:{style:vr},marginLeft:{style:vr},marginX:{style:vr},marginY:{style:vr},marginInline:{style:vr},marginInlineStart:{style:vr},marginInlineEnd:{style:vr},marginBlock:{style:vr},marginBlockStart:{style:vr},marginBlockEnd:{style:vr},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ng},rowGap:{style:Hg},columnGap:{style:Wg},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Go},maxWidth:{style:Ew},minWidth:{transform:Go},height:{transform:Go},maxHeight:{transform:Go},minHeight:{transform:Go},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Tw=p7;function g7(...e){const t=e.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function m7(e,t){return typeof e=="function"?e(t):e}function v7(){function e(n,r,i,o){const a={[n]:r,theme:i},u=o[n];if(!u)return{[n]:r};const{cssProperty:c=n,themeKey:f,transform:v,style:b}=u;if(r==null)return null;if(f==="typography"&&r==="inherit")return{[n]:r};const x=Fg(i,f)||{};return b?b(a):kl(a,r,S=>{let w=D0(x,v,S);return S===w&&typeof S=="string"&&(w=D0(x,v,`${n}${S==="default"?"":Ua(S)}`,S)),c===!1?w:{[c]:w}})}function t(n){var r;const{sx:i,theme:o={}}=n||{};if(!i)return null;const a=(r=o.unstable_sxConfig)!=null?r:Tw;function u(c){let f=c;if(typeof c=="function")f=c(o);else if(typeof c!="object")return c;if(!f)return null;const v=RF(o.breakpoints),b=Object.keys(v);let x=v;return Object.keys(f).forEach(g=>{const S=m7(f[g],o);if(S!=null)if(typeof S=="object")if(a[g])x=Nd(x,e(g,S,o,a));else{const w=kl({theme:o},S,j=>({[g]:j}));g7(w,S)?x[g]=t({sx:S,theme:o}):x=Nd(x,w)}else x=Nd(x,e(g,S,o,a))}),PF(b,x)}return Array.isArray(i)?i.map(u):u(i)}return t}const hA=v7();hA.filterProps=["sx"];const Aw=hA,y7=["breakpoints","palette","spacing","shape"];function Rw(e={},...t){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=e,a=Tl(e,y7),u=EF(n),c=MF(i);let f=aa({breakpoints:u,direction:"ltr",components:{},palette:cn({mode:"light"},r),spacing:c,shape:cn({},AF,o)},a);return f=t.reduce((v,b)=>aa(v,b),f),f.unstable_sxConfig=cn({},Tw,a?.unstable_sxConfig),f.unstable_sx=function(b){return Aw({sx:b,theme:this})},f}function x7(e){return Object.keys(e).length===0}function w7(e=null){const t=we.useContext(cA);return!t||x7(t)?e:t}const _7=Rw();function b7(e=_7){return w7(e)}const S7=["variant"];function qS(e){return e.length===0}function pA(e){const{variant:t}=e,n=Tl(e,S7);let r=t||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=qS(r)?e[i]:Ua(e[i]):r+=`${qS(r)?i:Ua(i)}${Ua(e[i].toString())}`}),r}const C7=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function k7(e){return Object.keys(e).length===0}function E7(e){return typeof e=="string"&&e.charCodeAt(0)>96}const T7=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,F0=e=>{const t={};return e&&e.forEach(n=>{const r=pA(n.props);t[r]=n.style}),t},A7=(e,t)=>{let n=[];return t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants),F0(n)},z0=(e,t,n)=>{const{ownerState:r={}}=e,i=[];return n&&n.forEach(o=>{let a=!0;Object.keys(o.props).forEach(u=>{r[u]!==o.props[u]&&e[u]!==o.props[u]&&(a=!1)}),a&&i.push(t[pA(o.props)])}),i},R7=(e,t,n,r)=>{var i;const o=n==null||(i=n.components)==null||(i=i[r])==null?void 0:i.variants;return z0(e,t,o)};function Vp(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const P7=Rw(),$7=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Gp({defaultTheme:e,theme:t,themeId:n}){return k7(t)?e:t[n]||t}function O7(e){return e?(t,n)=>n[e]:null}const QS=({styledArg:e,props:t,defaultTheme:n,themeId:r})=>{const i=e(cn({},t,{theme:Gp(cn({},t,{defaultTheme:n,themeId:r}))}));let o;if(i&&i.variants&&(o=i.variants,delete i.variants),o){const a=z0(t,F0(o),o);return[i,...a]}return i};function j7(e={}){const{themeId:t,defaultTheme:n=P7,rootShouldForwardProp:r=Vp,slotShouldForwardProp:i=Vp}=e,o=a=>Aw(cn({},a,{theme:Gp(cn({},a,{defaultTheme:n,themeId:t}))}));return o.__mui_systemSx=!0,(a,u={})=>{SF(a,I=>I.filter(k=>!(k!=null&&k.__mui_systemSx)));const{name:c,slot:f,skipVariantsResolver:v,skipSx:b,overridesResolver:x=O7($7(f))}=u,g=Tl(u,C7),S=v!==void 0?v:f&&f!=="Root"&&f!=="root"||!1,w=b||!1;let j,$=Vp;f==="Root"||f==="root"?$=r:f?$=i:E7(a)&&($=void 0);const y=bF(a,cn({shouldForwardProp:$,label:j},g)),E=(I,...k)=>{const D=k?k.map(q=>{if(typeof q=="function"&&q.__emotion_real!==q)return K=>QS({styledArg:q,props:K,defaultTheme:n,themeId:t});if(su(q)){let K=q,ee;return q&&q.variants&&(ee=q.variants,delete K.variants,K=ae=>{let le=q;return z0(ae,F0(ee),ee).forEach(Ce=>{le=aa(le,Ce)}),le}),K}return q}):[];let R=I;if(su(I)){let q;I&&I.variants&&(q=I.variants,delete R.variants,R=K=>{let ee=I;return z0(K,F0(q),q).forEach(le=>{ee=aa(ee,le)}),ee})}else typeof I=="function"&&I.__emotion_real!==I&&(R=q=>QS({styledArg:I,props:q,defaultTheme:n,themeId:t}));c&&x&&D.push(q=>{const K=Gp(cn({},q,{defaultTheme:n,themeId:t})),ee=T7(c,K);if(ee){const ae={};return Object.entries(ee).forEach(([le,Re])=>{ae[le]=typeof Re=="function"?Re(cn({},q,{theme:K})):Re}),x(q,ae)}return null}),c&&!S&&D.push(q=>{const K=Gp(cn({},q,{defaultTheme:n,themeId:t}));return R7(q,A7(c,K),K,c)}),w||D.push(o);const O=D.length-k.length;if(Array.isArray(I)&&O>0){const q=new Array(O).fill("");R=[...I,...q],R.raw=[...I.raw,...q]}const G=y(R,...D);return a.muiName&&(G.muiName=a.muiName),G};return y.withConfig&&(E.withConfig=y.withConfig),E}}function I7(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:q5(t.components[n].defaultProps,r)}function L7({props:e,name:t,defaultTheme:n,themeId:r}){let i=b7(n);return r&&(i=i[r]||i),I7({theme:i,name:t,props:e})}function gA(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function U7(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Vf(e){if(e.type)return e;if(e.charAt(0)==="#")return Vf(U7(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Wf(9,e));let r=e.substring(t+1,e.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(Wf(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function Pw(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function M7(e){e=Vf(e);const{values:t}=e,n=t[0],r=t[1]/100,i=t[2]/100,o=r*Math.min(i,1-i),a=(f,v=(f+n/30)%12)=>i-o*Math.max(Math.min(v-3,9-v,1),-1);let u="rgb";const c=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(u+="a",c.push(t[3])),Pw({type:u,values:c})}function JS(e){e=Vf(e);let t=e.type==="hsl"||e.type==="hsla"?Vf(M7(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function D7(e,t){const n=JS(e),r=JS(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function F7(e,t){if(e=Vf(e),t=gA(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Pw(e)}function z7(e,t){if(e=Vf(e),t=gA(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Pw(e)}function B7(e,t){return cn({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const N7={black:"#000",white:"#fff"},bh=N7,W7={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},H7=W7,V7={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Hc=V7,G7={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Vc=G7,Y7={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},xd=Y7,X7={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Gc=X7,K7={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Yc=K7,q7={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Xc=q7,Q7=["mode","contrastThreshold","tonalOffset"],ZS={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:bh.white,default:bh.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Lv={text:{primary:bh.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:bh.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function eC(e,t,n,r){const i=r.light||r,o=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=z7(e.main,i):t==="dark"&&(e.dark=F7(e.main,o)))}function J7(e="light"){return e==="dark"?{main:Gc[200],light:Gc[50],dark:Gc[400]}:{main:Gc[700],light:Gc[400],dark:Gc[800]}}function Z7(e="light"){return e==="dark"?{main:Hc[200],light:Hc[50],dark:Hc[400]}:{main:Hc[500],light:Hc[300],dark:Hc[700]}}function ez(e="light"){return e==="dark"?{main:Vc[500],light:Vc[300],dark:Vc[700]}:{main:Vc[700],light:Vc[400],dark:Vc[800]}}function tz(e="light"){return e==="dark"?{main:Yc[400],light:Yc[300],dark:Yc[700]}:{main:Yc[700],light:Yc[500],dark:Yc[900]}}function nz(e="light"){return e==="dark"?{main:Xc[400],light:Xc[300],dark:Xc[700]}:{main:Xc[800],light:Xc[500],dark:Xc[900]}}function rz(e="light"){return e==="dark"?{main:xd[400],light:xd[300],dark:xd[700]}:{main:"#ed6c02",light:xd[500],dark:xd[900]}}function iz(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,i=Tl(e,Q7),o=e.primary||J7(t),a=e.secondary||Z7(t),u=e.error||ez(t),c=e.info||tz(t),f=e.success||nz(t),v=e.warning||rz(t);function b(w){return D7(w,Lv.text.primary)>=n?Lv.text.primary:ZS.text.primary}const x=({color:w,name:j,mainShade:$=500,lightShade:y=300,darkShade:E=700})=>{if(w=cn({},w),!w.main&&w[$]&&(w.main=w[$]),!w.hasOwnProperty("main"))throw new Error(Wf(11,j?` (${j})`:"",$));if(typeof w.main!="string")throw new Error(Wf(12,j?` (${j})`:"",JSON.stringify(w.main)));return eC(w,"light",y,r),eC(w,"dark",E,r),w.contrastText||(w.contrastText=b(w.main)),w},g={dark:Lv,light:ZS};return aa(cn({common:cn({},bh),mode:t,primary:x({color:o,name:"primary"}),secondary:x({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:x({color:u,name:"error"}),warning:x({color:v,name:"warning"}),info:x({color:c,name:"info"}),success:x({color:f,name:"success"}),grey:H7,contrastThreshold:n,getContrastText:b,augmentColor:x,tonalOffset:r},g[t]),i)}const oz=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function sz(e){return Math.round(e*1e5)/1e5}const tC={textTransform:"uppercase"},nC='"Roboto", "Helvetica", "Arial", sans-serif';function az(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=nC,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:a=400,fontWeightMedium:u=500,fontWeightBold:c=700,htmlFontSize:f=16,allVariants:v,pxToRem:b}=n,x=Tl(n,oz),g=i/14,S=b||($=>`${$/f*g}rem`),w=($,y,E,I,k)=>cn({fontFamily:r,fontWeight:$,fontSize:S(y),lineHeight:E},r===nC?{letterSpacing:`${sz(I/y)}em`}:{},k,v),j={h1:w(o,96,1.167,-1.5),h2:w(o,60,1.2,-.5),h3:w(a,48,1.167,0),h4:w(a,34,1.235,.25),h5:w(a,24,1.334,0),h6:w(u,20,1.6,.15),subtitle1:w(a,16,1.75,.15),subtitle2:w(u,14,1.57,.1),body1:w(a,16,1.5,.15),body2:w(a,14,1.43,.15),button:w(u,14,1.75,.4,tC),caption:w(a,12,1.66,.4),overline:w(a,12,2.66,1,tC),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return aa(cn({htmlFontSize:f,pxToRem:S,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:a,fontWeightMedium:u,fontWeightBold:c},j),x,{clone:!1})}const lz=.2,uz=.14,cz=.12;function Vn(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${lz})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${uz})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${cz})`].join(",")}const fz=["none",Vn(0,2,1,-1,0,1,1,0,0,1,3,0),Vn(0,3,1,-2,0,2,2,0,0,1,5,0),Vn(0,3,3,-2,0,3,4,0,0,1,8,0),Vn(0,2,4,-1,0,4,5,0,0,1,10,0),Vn(0,3,5,-1,0,5,8,0,0,1,14,0),Vn(0,3,5,-1,0,6,10,0,0,1,18,0),Vn(0,4,5,-2,0,7,10,1,0,2,16,1),Vn(0,5,5,-3,0,8,10,1,0,3,14,2),Vn(0,5,6,-3,0,9,12,1,0,3,16,2),Vn(0,6,6,-3,0,10,14,1,0,4,18,3),Vn(0,6,7,-4,0,11,15,1,0,4,20,3),Vn(0,7,8,-4,0,12,17,2,0,5,22,4),Vn(0,7,8,-4,0,13,19,2,0,5,24,4),Vn(0,7,9,-4,0,14,21,2,0,5,26,4),Vn(0,8,9,-5,0,15,22,2,0,6,28,5),Vn(0,8,10,-5,0,16,24,2,0,6,30,5),Vn(0,8,11,-5,0,17,26,2,0,6,32,5),Vn(0,9,11,-5,0,18,28,2,0,7,34,6),Vn(0,9,12,-6,0,19,29,2,0,7,36,6),Vn(0,10,13,-6,0,20,31,3,0,8,38,7),Vn(0,10,13,-6,0,21,33,3,0,8,40,7),Vn(0,10,14,-6,0,22,35,3,0,8,42,7),Vn(0,11,14,-7,0,23,36,3,0,9,44,8),Vn(0,11,15,-7,0,24,38,3,0,9,46,8)],dz=fz,hz=["duration","easing","delay"],pz={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},gz={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function rC(e){return`${Math.round(e)}ms`}function mz(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function vz(e){const t=cn({},pz,e.easing),n=cn({},gz,e.duration);return cn({getAutoHeightDuration:mz,create:(i=["all"],o={})=>{const{duration:a=n.standard,easing:u=t.easeInOut,delay:c=0}=o;return Tl(o,hz),(Array.isArray(i)?i:[i]).map(f=>`${f} ${typeof a=="string"?a:rC(a)} ${u} ${typeof c=="string"?c:rC(c)}`).join(",")}},e,{easing:t,duration:n})}const yz={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},xz=yz,wz=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function _z(e={},...t){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=e,a=Tl(e,wz);if(e.vars)throw new Error(Wf(18));const u=iz(r),c=Rw(e);let f=aa(c,{mixins:B7(c.breakpoints,n),palette:u,shadows:dz.slice(),typography:az(u,o),transitions:vz(i),zIndex:cn({},xz)});return f=aa(f,a),f=t.reduce((v,b)=>aa(v,b),f),f.unstable_sxConfig=cn({},Tw,a?.unstable_sxConfig),f.unstable_sx=function(b){return Aw({sx:b,theme:this})},f}const bz=_z(),mA=bz,vA="$$material";function Sz({props:e,name:t}){return L7({props:e,name:t,defaultTheme:mA,themeId:vA})}const Cz=e=>Vp(e)&&e!=="classes",kz=j7({themeId:vA,defaultTheme:mA,rootShouldForwardProp:Cz}),Ez=kz;function Tz(e){return J5("MuiSvgIcon",e)}T8("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Az=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Rz=e=>{const{color:t,fontSize:n,classes:r}=e,i={root:["root",t!=="inherit"&&`color${Ua(t)}`,`fontSize${Ua(n)}`]};return S8(i,Tz,r)},Pz=Ez("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Ua(n.color)}`],t[`fontSize${Ua(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,i,o,a,u,c,f,v,b,x,g,S;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=e.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((o=e.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((u=e.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,24))||"1.5rem",large:((f=e.typography)==null||(v=f.pxToRem)==null?void 0:v.call(f,35))||"2.1875rem"}[t.fontSize],color:(b=(x=(e.vars||e).palette)==null||(x=x[t.color])==null?void 0:x.main)!=null?b:{action:(g=(e.vars||e).palette)==null||(g=g.action)==null?void 0:g.active,disabled:(S=(e.vars||e).palette)==null||(S=S.action)==null?void 0:S.disabled,inherit:void 0}[t.color]}}),yA=we.forwardRef(function(t,n){const r=Sz({props:t,name:"MuiSvgIcon"}),{children:i,className:o,color:a="inherit",component:u="svg",fontSize:c="medium",htmlColor:f,inheritViewBox:v=!1,titleAccess:b,viewBox:x="0 0 24 24"}=r,g=Tl(r,Az),S=we.isValidElement(i)&&i.type==="svg",w=cn({},r,{color:a,component:u,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:v,viewBox:x,hasSvgAsChild:S}),j={};v||(j.viewBox=x);const $=Rz(w);return m.jsxs(Pz,cn({as:u,className:A8($.root,o),focusable:"false",color:f,"aria-hidden":b?void 0:!0,role:b?"img":void 0,ref:n},j,g,S&&i.props,{ownerState:w,children:[S?i.props.children:i,b?m.jsx("title",{children:b}):null]}))});yA.muiName="SvgIcon";const iC=yA;function $z(e,t){function n(r,i){return m.jsx(iC,cn({"data-testid":`${t}Icon`,ref:i},r,{children:e}))}return n.muiName=iC.muiName,we.memo(we.forwardRef(n))}const Oz={configure:e=>{Q5.configure(e)}},jz=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ua,createChainedFunction:r8,createSvgIcon:$z,debounce:i8,deprecatedPropType:o8,isMuiElement:s8,ownerDocument:Y5,ownerWindow:a8,requirePropFactory:l8,setRef:X5,unstable_ClassNameGenerator:Oz,unstable_useEnhancedEffect:K5,unstable_useId:f8,unsupportedProp:d8,useControlled:h8,useEventCallback:p8,useForkRef:g8,useIsFocusVisible:b8},Symbol.toStringTag,{value:"Module"})),Iz=pj(jz);var oC;function xA(){return oC||(oC=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Iz}(Rv)),Rv}var Lz=H5;Object.defineProperty(xw,"__esModule",{value:!0});var wA=xw.default=void 0,Uz=Lz(xA()),Mz=m,Dz=(0,Uz.default)((0,Mz.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");wA=xw.default=Dz;Q.button`
  ${({buttonStyle:e,buttonColor:t,buttonIconColor:n,buttonIconColorHover:r})=>xt`
    transition: all ease-in-out 0.3s;
    position: fixed;
    top: 15px;
    left: 25px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${t||"white"};
    outline: none;
    border: none;
    z-index: 1000;
    ${e&&e}
    svg {
      z-index: 1010;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      fill: ${n||"#1a1a1a"};
    }
    &:hover {
      svg {
        fill: ${r||"white"};
      }
    }
  `}

  ${({buttonColorHover:e,buttonText:t,buttonTextStyle:n,buttonHoverBeforeStyle:r,buttonHoverAfterStyle:i})=>xt`
    :hover::after {
      animation: back_button_text 0.3s ease-out both;
      content: ${t?`${t}`:'"BACK"'};
      font-family: Sarabun;
      position: absolute;
      color: white;
      font-size: 17px;
      font-weight: 700;
      top: 50%;
      transform: translateY(-50%);
      left: 30px;
      ${n&&n}
      ${i&&i}
    }

    :hover::before {
      animation: back_button_back 0.3s ease-out both;
      content: "";
      position: absolute;
      z-index: 0;
      left: 0px;
      top: 0px;
      display: block;
      background-color: ${e||"#f19a87"};
      width: 90px;
      height: 30px;
      border-radius: 50px;
      ${r&&r}
    }
  `}

  @keyframes back_button_back {
    0% {
      width: 30px;
    }
    100% {
      width: 90px;
    }
  }

  @keyframes back_button_text {
    0% {
      left: 0px;
      opacity: 0;
    }
    100% {
      left: 30px;
      opacity: 1;
    }
  }
`;Q.div`
  height: 15vh;
`;Q.img`
  width: 100%;
`;const Fz=({fill:e})=>m.jsx("path",{d:"M1920 30V207.34H0V52.89C32.64 63.89 64 79 96.53 90.32C169.306 115.619 247.269 122.242 323.27 109.58C349.9 105.11 378.15 97.01 394.68 75.58C402.99 64.89 407.55 51.7 415.33 40.58C437.56 8.84999 480.73 0.259989 519.49 -1.12765e-05C616.07 -0.630011 708.87 33.76 802.49 57.54C902.718 82.9963 1005.6 96.5432 1109 97.9C1149.54 98.42 1190.55 97 1229.72 86.52C1266.87 76.6 1301.36 58.77 1336.72 43.6C1428.58 4.19999 1542.87 -14.93 1622.52 45.44C1633.32 53.62 1643.38 63.21 1655.89 68.44C1696.3 85.35 1738.08 51.5 1779.01 35.87C1823.54 18.86 1872 23.81 1920 30Z",fill:e}),zz=({fill:e})=>m.jsx("path",{d:"M1920 5.44C1742.11 -23.87 1579 75.61 1418.61 59.73C1242 42.24 1060.32 -24 843.93 38.24C625.24 101.24 402.35 33.68 184.85 2.39C125.62 -1.54 58.66 -2.3 0 15.62V132H1920V5.44Z",fill:e}),Bz=({fill:e})=>m.jsx("path",{d:"M0 105.561V179.001H1920V42.0005C1871 52.8306 1820.12 54.8206 1770.14 51.7705C1712.75 48.2847 1656.07 38.4637 1599.37 28.6394C1570.03 23.5547 1540.68 18.469 1511.22 14.2605C1368.48 -6.11959 1219.64 -8.82955 1082.61 36.0606C972.5 72.1304 774.72 124.221 697.82 134.741C467.93 166.21 228.13 154.111 0 105.561Z",fill:e}),Nz=({fill:e})=>m.jsx("path",{d:"M1890.55 108.471C1804.79 68.661 1765.45 113.241 1765.45 113.241C1765.45 113.241 1768.05 28.391 1674.45 4.93096C1580.85 -18.529 1551.66 49.241 1551.66 49.241C1468.17 -13.309 1450.11 108.471 1450.11 108.471C1450.11 108.471 1421.44 77.911 1323.19 93.551C1233.19 107.881 1226.49 207.551 1226 224.131C1225.9 210.761 1220.68 144.001 1127.51 129.131C1023.85 112.571 995.66 194.231 995.66 194.231C995.66 194.231 960.09 59.671 845.41 64.121C730.73 68.571 725.52 194.221 725.52 194.221C725.52 194.221 689.2 122.161 627.45 120.001C565.7 117.841 543.08 194.261 543.08 194.261C543.08 194.261 531.86 83.411 427.81 75.831C302.7 66.711 255.81 169.661 255.81 169.661C232.33 68.001 143.68 93.551 97.39 166.531C64.4 142.001 29.42 143.141 0 152.601V291.601H1920V126.601C1910.9 119.459 1901.02 113.377 1890.55 108.471Z",fill:e}),Wz=({fill:e})=>m.jsx("path",{d:"M1752.49 44.9001C1658.78 44.9001 1659.03 0.380127 1586.28 0.380127C1536.42 0.380127 1519.28 44.9301 1452.28 44.9301C1350.9 44.9001 1359.89 0.380127 1295.28 0.380127C1213.55 0.380127 1216.82 44.9301 1139.99 44.9301C1063.16 44.9301 1057.48 0.380127 989.65 0.380127C926.71 0.380127 916.09 44.9301 836.77 44.9301C757.45 44.9301 752.63 0.380127 687.28 0.380127C630.89 0.380127 603.15 44.9301 536.89 44.9301C453.49 44.9001 448.74 0.380127 388.1 0.380127C316.18 0.380127 311.28 44.9001 234.45 44.9001C169.88 44.9001 136.39 0.470127 79.16 0.380127C47.28 0.380127 17.39 17.3801 0 29.6001L0 133L1920 133V0.570127C1803.78 3.93013 1821.98 44.9001 1752.49 44.9001Z",fill:e}),Hz=({fill:e})=>m.jsx("path",{d:"M0 50.4554C229.5 -1.02461 471.92 -14.8046 704.07 16.9754C779.14 27.2454 854.41 38.5754 926.84 60.7854C978.35 76.5854 1028.09 97.7854 1079.68 113.305C1214.48 153.855 1358.74 154.475 1498.08 134.585C1582.39 122.585 1665.82 103.135 1750.82 97.9654C1805.42 94.6454 1861.1 97.4754 1914.13 111.655C1915.94 112.145 1917.92 112.655 1920 113.165V192.805H0V50.4554Z",fill:e}),Vz=({fill:e,path:t})=>m.jsx("path",{d:t,fill:e}),Gz=[Fz,zz,Bz,Nz,Wz,Hz],Yz=Q.svg`
  ${({location:e,offset:t,reverse:n})=>`
  position: absolute;
  left: 0px;
  ${e==="top"?`
  top: ${t}px; bottom: unset;
  `:`
  bottom: ${t}px; top: unset;
  `}
  // width: calc(100vw + 1.5em); -- not sure if this is needed anymore
  width: 100%;
  ${n==="x"?"transform: scaleX(-1)":n==="y"?"transform: scaleY(-1)":n==="both"?"transform: scale(-1)":""}
  `}
`,Da=({fill:e="#FFF",variant:t=0,offset:n=-2,location:r="bottom",reverse:i,customViewBox:o,path:a,style:u})=>{const[c,f]=we.useState(),[v,b]=we.useState(),x=we.useCallback(()=>{f(window.innerWidth>1919?"none":"xMinYMax meet")},[]);we.useEffect(function(){return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}},[x]),we.useEffect(function(){x()},[x]);const[g,S]=we.useState();return we.useEffect(()=>a?(S(we.createElement(Vz,{fill:e,path:a})),b(o||"0 0 1920 208")):(S(we.createElement(Gz[t],{fill:e})),b(t===0?"0 0 1920 208":t===1?"0 0 1920 133":t===2?"0 0 1920 179":t===3?"0 0 1920 217":t===4?"0 0 1920 130":t===5?"0 0 1920 149":"0 0 1920 134")),[o,e,a,t]),m.jsx("div",{style:{maxWidth:"100vw",overflow:"hidden"},children:m.jsx(Yz,{style:u,offset:n,location:r,reverse:i,viewBox:v||o,path:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:c,children:g})})},Xz=Q.div`
  ${({bgColor:e="#aaa",bgColorHover:t,cardWidth:n,cardHeight:r,justifyContent:i,isDragging:o,cardPadding:a})=>`
  background: ${e||"#fff"};
  border: solid 4px white;
  border-radius: 20px;
  padding: ${a??"8px"};
  width: ${n??200}px;
  min-width: ${n??180}px;
  height: ${r??280}px;
  min-height: ${r??270}px;
  display: flex;
  flex-direction: column;
  justify-content: ${i??"flex-start"};
  box-shadow: 3px 5px 3px rgba(0, 0, 0, 0.3);
  transition: margin-top 0.3s, background-color 0.3s;
  opacity: 1;

  @media (max-width: 540px) {
    gap: 0px;
    box-shadow: none;
    border: none;
    flex-direction: column;
    width: 140px;
    min-width: 90px;
    height: 100%;
    min-height: 190px;
    padding: 10px 5px;
  }

  &:hover {
    ${t?`background: ${t};`:""}
    cursor: pointer;
  `}
`,Kz=Q.img`
  object-fit: cover;
  max-height: ${e=>e.cardImageHeight??"auto"}px;
  margin: 10px auto;
  
  @media (max-width: 540px) {
    object-fit: contain;
    margin: 0px;
    max-height: 55px;
  }
`,qz=Q.div`
  width: 100%;
  height: auto;
  // why is this here?
  // padding-left: 20px;
`,Qz=Q(aw)`
  color: ${e=>e.cardHeadingColor??"#1a1a1a"};
  text-align: center;
  font-size: ${e=>e.cardHeadingSize??25}px;
`,Jz=Q(Xn)`
  color: ${e=>e.cardTextColor??"inherit"};
  text-align: left;
  font-weight: 700;
  font-size: ${e=>e.cardTextSize??20}px;
  @media (max-width: 540px) {
    font-size: 16px;
  }
`,$w=({className:e,cardImage:t,cardHoverImage:n,cardText:r,cardHeadingText:i,cardContainerStyle:o,cardImageStyle:a,cardTextStyle:u,cardHeadingStyle:c,isDragging:f=!1})=>{const[v,b]=we.useState(t);return m.jsxs(Xz,{className:e,...o,isDragging:f,style:o,onMouseEnter:()=>n&&b(n),onMouseLeave:()=>n&&b(t),children:[v&&m.jsx(Kz,{...a,src:v,draggable:!1}),m.jsxs(qz,{children:[i&&m.jsx(Qz,{...c,children:i}),r&&m.jsx(Jz,{...u,children:r})]})]})},Uv=()=>console.log("EventContext not implemented - is there an EventProvider higher in the tree?");we.createContext({score:0,setScore:Uv,incrementScore:Uv,resetScore:Uv});Q($w)`
  transition: opacity 0.5s;
  ${({isVisible:e})=>e?"opacity: 1;":`
        opacity: 0;
        pointer-events: none;
  `}
  &:hover {
    cursor: move;
  }
`;const Zz=xt`
  ${Nr`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
`} 0.4s ease-in
`,eB=xt`
  ${Nr`
  0%, 100% { transform: translateY(0); }
  20%, 60% { transform: translateY(-10px); }
  40%, 80% { transform: translateY(10px); }
`} 0.5s ease-out
`;Q($w)`
  ${({dragState:e,changeColor:t})=>e==="correct"?xt`
          animation: ${eB};
          ${t?"background: #c1ef8f":""};
        `:e==="incorrect"?xt`
          animation: ${Zz};
          ${t?"background: #ff4b4b":""};
        `:""}
  transition: background 1s;
`;Q.div`
  margin: auto;
  display: flex;
  flex-flow: column;
  gap: 40px;
  align-items: center;
`;Q.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;Q($w)`
  ${({cardStyle:e})=>xt`
    background: #3c53dd;
    cursor: move;
    transition: opacity 0.5s;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: none;
    border-radius: 20px;
    height: 70px;
    min-height: 70px;
    border: 2px solid var(--White, #fff);
    color: inherit;
    margin: auto;
    width: 100%;
    ${e}
  `}
`;var sC={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(R){return typeof R=="object"&&!("toString"in R)?Object.prototype.toString.call(R).slice(8,-1):R}var r=typeof process=="object"&&!0;function i(R,O){if(!R)throw r?new Error("Invariant failed"):new Error(O())}t.invariant=i;var o=Object.prototype.hasOwnProperty,a=Array.prototype.splice,u=Object.prototype.toString;function c(R){return u.call(R).slice(8,-1)}var f=Object.assign||function(R,O){return v(O).forEach(function(G){o.call(O,G)&&(R[G]=O[G])}),R},v=typeof Object.getOwnPropertySymbols=="function"?function(R){return Object.keys(R).concat(Object.getOwnPropertySymbols(R))}:function(R){return Object.keys(R)};function b(R){return Array.isArray(R)?f(R.constructor(R.length),R):c(R)==="Map"?new Map(R):c(R)==="Set"?new Set(R):R&&typeof R=="object"?f(Object.create(Object.getPrototypeOf(R)),R):R}var x=function(){function R(){this.commands=f({},g),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(O,G){return O===G},this.update.newContext=function(){return new R().update}}return Object.defineProperty(R.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(O){this.update.isEquals=O},enumerable:!0,configurable:!0}),R.prototype.extend=function(O,G){this.commands[O]=G},R.prototype.update=function(O,G){var q=this,K=typeof G=="function"?{$apply:G}:G;Array.isArray(O)&&Array.isArray(K)||i(!Array.isArray(K),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),i(typeof K=="object"&&K!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(q.commands).join(", ")+".")});var ee=O;return v(K).forEach(function(ae){if(o.call(q.commands,ae)){var le=O===ee;ee=q.commands[ae](K[ae],ee,K,O),le&&q.isEquals(ee,O)&&(ee=O)}else{var Re=c(O)==="Map"?q.update(O.get(ae),K[ae]):q.update(O[ae],K[ae]),Ce=c(ee)==="Map"?ee.get(ae):ee[ae];(!q.isEquals(Re,Ce)||typeof Re>"u"&&!o.call(O,ae))&&(ee===O&&(ee=b(O)),c(ee)==="Map"?ee.set(ae,Re):ee[ae]=Re)}}),ee},R}();t.Context=x;var g={$push:function(R,O,G){return w(O,G,"$push"),R.length?O.concat(R):O},$unshift:function(R,O,G){return w(O,G,"$unshift"),R.length?R.concat(O):O},$splice:function(R,O,G,q){return $(O,G),R.forEach(function(K){y(K),O===q&&K.length&&(O=b(q)),a.apply(O,K)}),O},$set:function(R,O,G){return I(G),R},$toggle:function(R,O){j(R,"$toggle");var G=R.length?b(O):O;return R.forEach(function(q){G[q]=!O[q]}),G},$unset:function(R,O,G,q){return j(R,"$unset"),R.forEach(function(K){Object.hasOwnProperty.call(O,K)&&(O===q&&(O=b(q)),delete O[K])}),O},$add:function(R,O,G,q){return D(O,"$add"),j(R,"$add"),c(O)==="Map"?R.forEach(function(K){var ee=K[0],ae=K[1];O===q&&O.get(ee)!==ae&&(O=b(q)),O.set(ee,ae)}):R.forEach(function(K){O===q&&!O.has(K)&&(O=b(q)),O.add(K)}),O},$remove:function(R,O,G,q){return D(O,"$remove"),j(R,"$remove"),R.forEach(function(K){O===q&&O.has(K)&&(O=b(q)),O.delete(K)}),O},$merge:function(R,O,G,q){return k(O,R),v(R).forEach(function(K){R[K]!==O[K]&&(O===q&&(O=b(q)),O[K]=R[K])}),O},$apply:function(R,O){return E(R),R(O)}},S=new x;t.isEquals=S.update.isEquals,t.extend=S.extend,t.default=S.update,t.default.default=e.exports=f(t.default,t);function w(R,O,G){i(Array.isArray(R),function(){return"update(): expected target of "+n(G)+" to be an array; got "+n(R)+"."}),j(O[G],G)}function j(R,O){i(Array.isArray(R),function(){return"update(): expected spec of "+n(O)+" to be an array; got "+n(R)+". Did you forget to wrap your parameter in an array?"})}function $(R,O){i(Array.isArray(R),function(){return"Expected $splice target to be an array; got "+n(R)}),y(O.$splice)}function y(R){i(Array.isArray(R),function(){return"update(): expected spec of $splice to be an array of arrays; got "+n(R)+". Did you forget to wrap your parameters in an array?"})}function E(R){i(typeof R=="function",function(){return"update(): expected spec of $apply to be a function; got "+n(R)+"."})}function I(R){i(Object.keys(R).length===1,function(){return"Cannot have more than one key in an object with $set"})}function k(R,O){i(O&&typeof O=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+n(O)}),i(R&&typeof R=="object",function(){return"update(): $merge expects a target of type 'object'; got "+n(R)})}function D(R,O){var G=c(R);i(G==="Map"||G==="Set",function(){return"update(): "+n(O)+" expects a target of type Set or Map; got "+n(G)})}})(sC,sC.exports);Q.div`
  ${({previewCardStyle:e})=>xt`
    ${e}
    width: inherit;
    max-width: inherit;
    padding: 0 10px;
    transition: opacity ease-in-out 0.3s;
    opacity: 0.8;
  `}
`;Q.div`
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  justify-content: center;
  background: rgba(14, 47, 5, 0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;Q(Xn)`
  color: white;
  text-align: center;
`;const aC=""+new URL("expand_more-874ac6ff.svg",import.meta.url).href,lC=""+new URL("expand_less-dc9f3bd4.svg",import.meta.url).href,tB=Q.button`
  ${({isActive:e,backgroundSelected:t,backgroundMobile:n,useArrowBelow:r,useArrowRight:i,arrowStyle:o,arrowActiveStyle:a,arrowHoverStyle:u,hoverStyle:c,activeStyle:f,isHovered:v})=>xt`
    position: relative;
    transition: all ease-in-out 0.3s;
    width: 100%;
    min-height: 60px;
    cursor: pointer;
    padding: 20px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 20px;
    ${e?xt`
          border-radius: 20px 20px 0px 0px;
          ${f}
        `:v?c:""}

    @media (max-width: 767px) {
      background: ${e?t:n} !important;
    }

    ${r&&xt`
      @media (min-width: 768px) {
        ::after {
          content: "";
          transition: all ease-in-out 0.2s;
          height: 50px;
          width: 50px;
          background: url(${e?lC:aC}) no-repeat;
          background-size: contain;
          display: flex;
          ${e?a:v?u:o}
        }
      `}

    ${i&&xt`
      padding-right: 60px;
      ::after {
        content: "";
        transition: all ease-in-out 0.2s;
        height: 50px;
        width: 50px;
        background: url(${e?lC:aC})
          no-repeat;
        background-size: contain;
        display: block;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        ${e?a:v?u:o}
      }
    `}
  `}
`,Qt=Q.div`
  ${({x:e,y:t,width:n,tabletWidth:r,mobileWidth:i,maxWidth:o=1280,height:a,auto:u,noCenterX:c=!1,noCenterY:f=!1,noPadding:v=!1})=>`
    position: relative;
    left: ${e!==void 0?e:50}%;
    top: ${t!==void 0?t:50}%;
    transform: translate(${c?"0":"-50%"}, ${f?"0":"-50%"});
    width: ${n!==void 0?`${n}%`:"fit-content"};
    max-width: ${o!=="unset"?`${o}px`:o};
    height: ${a!==void 0?`${a}%`:"fit-content"};
    padding-left: ${v?"0px":"60px"};
    padding-right: ${v?"0px":"60px"};
    @media (min-width: 768px) and (max-width: 1024px) {
      width: ${r!==void 0?`${r}%`:"fit-content"};
      padding-left: ${v?"0px":"40px"};
      padding-right: ${v?"0px":"40px"};
    }
    @media (min-width: 376px) and (max-width: 767px)  {
      width: ${i!==void 0?`${i}%`:"100%"} !important;
      padding-left: ${v?"0px":"30px"};
      padding-right: ${v?"0px":"30px"};
      height: fit-content;
      transform: none;
      top: unset;
      left: unset;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 376px) {
      width: ${i!==void 0?`${i}%`:"100%"} !important;
      padding-left: ${v?"0px":"20px"};
      padding-right: ${v?"0px":"20px"};
      height: fit-content;
      transform: none;
      top: unset;
      left: unset;
      margin-left: auto;
      margin-right: auto;
    }
    ${u?`transform: none;
          top: unset;
          left: unset;
          margin-left: auto;
          margin-right: auto;
          `:""}
  `}
`,nB=Q.div`
  ${({height:e=10,tabletHeight:t,mobileHeight:n})=>`
position: relative;
height: ${e!==void 0?`${e}vh`:"10vh"};
@media (min-width: 768px) and (max-width: 920px) {
  height: ${t!==void 0?`${t}vh`:`${e}vh`};
}
@media (min-width: 376px) and (max-width: 767px)  {
  height: ${n!==void 0?`${n}vh`:`${e}vh`};
}
@media (max-width: 375px) {
  height: ${n!==void 0?`${n}vh`:`${e}vh`};
}
`}
`;Q.div`
  ${({vh:e,minHeight:t,vhMobile:n,vhTablet:r,margin:i,flex:o=0})=>`
    position: relative;
    height: ${e!==void 0?e:"100"}vh;
    ${i&&i>0?`margin: calc(max(30px, ${i}vh)) 0;`:"margin: 0"};
    @media (min-width: 768px) and (max-width: 920px) {
      min-height: ${r!==void 0?r:"100"}vh;
      height: auto;
      ${t?`min-height: ${t}px`:""};
    }
    @media (max-width: 767px) {
      min-height: ${n!==void 0?n:"100"}vh;
      height: auto;
      ${t?`min-height: ${t}px`:""};
    }
    ${t?`min-height: ${t}px`:""};
    ${o?`display: flex;
        flex-direction: column;
        justify-content: space-evenly;
          `:""}
    `}
`;const pn=Q.div`
  ${({autoHeight:e=!1,noBottomPadding:t=!1,noTopPadding:n,justifyContent:r="space-evenly",justifyContentMobile:i})=>`
  position: relative;
  ${e===!1?"min-height: 100vh":""};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: ${r};
  ${!n&&"padding-top: 120px;"};
  ${!t&&"padding-bottom: 120px"};
  // removes block gaps on larger screens
  margin-top: -0.15em; 
  margin-bottom: -0.15em;
  @media (min-width: 1025px) {
    ${e===!1?"min-height: calc(max(860px, 100vh))":""};
  }
  @media (max-width: 920px) {
    ${!n&&"padding-top: 70px;"};
    ${!t&&"padding-bottom: 70px"};
    margin-top: 0;
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    justify-content: ${i};
  }
  @media (max-width: 540px) {
    ${!n&&"padding-top: 50px;"};
    ${!t&&"padding-bottom: 50px"};
  }
`}
`,rB=Q.div`
  ${({maxWidth:e,verticalAlign:t,isResponsive:n,responsiveReverse:r,gap:i,rowGap:o,columnGap:a,flexWrap:u})=>`
  max-width: ${e};
  margin-left: auto;
  margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: ${u};
    justify-content: ${u!=="nowrap"?"center":"space-between"};
    align-items: ${t};
    row-gap: ${o?typeof o=="string"?o:o+"px":typeof i=="string"?i:i+"px"};
    column-gap: ${a?typeof a=="string"?a:a+"px":typeof i=="string"?i:i+"px"};
    ${n==="mobile"?`
        @media (max-width: 767px) {
          flex-direction: ${r===!0?"column-reverse":"column"}
        }
      `:n==="tablet"?`
      @media (max-width: 1024px) {
        flex-direction: ${r===!0?"column-reverse":"column"}
      }
      @media (max-width: 920px) {
        flex-direction: ${r===!0?"column-reverse":"column"}
      }
    `:""}
  `}
`,iB=Q.div`
  display: flex;
  ${({flexBasis:e,isResponsive:t,flexWrap:n})=>`
  ${n==="nowrap"?`flex-basis: ${e}%`:""};

  ${t==="mobile"?`
      @media (max-width: 767px) {
        flex-basis: 100%;
        width: 100%;
      }
    `:t==="tablet"?`
    @media (max-width: 1024px) and (min-height: 1300px) {
      flex-basis: 100%;
       width: 100%;
    }
    @media (max-width: 920px) {
      flex-basis: 100%;
       width: 100%;
    }
  `:""}
  `}
`,Yp=({className:e,id:t,style:n,columns:r,verticalAlign:i="center",flexBases:o=[50,50],isResponsive:a="mobile",gap:u=20,rowGap:c,columnGap:f,responsiveReverse:v=!1,flexWrap:b="nowrap",maxWidth:x})=>m.jsx(rB,{className:e,id:t,flexWrap:b,gap:u,rowGap:c,columnGap:f,verticalAlign:i,isResponsive:a,responsiveReverse:v,maxWidth:x,style:n,children:r.map((g,S)=>m.jsx(iB,{isResponsive:a,flexWrap:b,flexBasis:o[S],children:g},`column-${S}`))}),oB=Q(Xn)`
  ${({isHovered:e,textColor:t,textHoverColor:n,textActiveColor:r,isActive:i,isVisited:o,textVisitedColor:a})=>`
color: ${i?r:e&&!i?n:o?a??t:t} !important;
width: 100%;
`}
`,sB=Q(tB)`
  ${({isHovered:e,isActive:t,isVisited:n,background:r,backgroundHover:i,backgroundSelected:o,backgroundVisited:a,hoverStyle:u,activeStyle:c})=>xt`
      background: ${t?o:e&&!t?i:n?a??r:r} !important;
      width: 100%;
      ${t?c:e?u:""}
    `}
`,aB=Q(Yp)`
  > div {
    width: 100% !important;
    margin-bottom: 20px;
  }
  display: block;
  ${({useColumnLayout:e})=>e?`
      display: flex;  
      align-items: stretch;
      > div {
        justify-content: center;
        flex: 1;
        > div {
          flex: 1;
        }
      }
        @media (max-width: 768px) {
          align-items: stretch;
          // Use rowGap to specify this from now on
          // gap: 0px;
          text-align: center;
        }
    `:""}
`,lB=Q.div`
  @keyframes wipe-in-down {
    from {
      clip-path: inset(0 0 100% 0);
      opacity: 0;
    }
    to {
      clip-path: inset(0 0 0 0);
      opacity: 1;
    }
  }

  width: 100% !important;
  // height: 50%;
  animation: wipe-in-down 0.4s ease-in-out 1;
`,uB=Q.div``,_A=({unlockedContent:e,contents:t,contentStyle:n,dropdownStyle:r,titleStyle:i={color:"inherit"},columnStyle:o,instructionText:a,allowMultipleExpands:u=!1,useColumnLayout:c=!1,className:f,style:v,padding:b,tabletPadding:x,mobilePadding:g})=>{const[S,w]=vt.useState([]),[j,$]=vt.useState([]),[y,E]=vt.useState(!1),[I,k]=vt.useState(Array(t.length).fill(!1)),D=K=>{console.log({allowMultipleExpands:u}),u?S.includes(K)?(w(S.filter(ee=>ee!==K)),$([...j,K])):(w([...S,K]),$(j.filter(ee=>ee!==K))):w([K]),j.includes(K)||$([...j,K])};vt.useEffect(()=>{j.length===t.length&&E(!0)},[j,t.length]);const R=K=>{k(ee=>ee.map((ae,le)=>le===K?!0:ae))},O=K=>{k(ee=>ee.map((ae,le)=>le===K?!1:ae))},G=100/t.length,q=Array(t.length).fill(G);return m.jsxs(m.Fragment,{children:[a&&m.jsx(_B,{style:{color:"black"},children:a}),m.jsx(aB,{style:{width:"100%",...o},flexBases:c?q:Array(t.length).fill("auto"),useColumnLayout:c,columns:t.map((K,ee)=>{const ae=ee+1,le=I[ee];return m.jsxs("div",{style:{width:"100%"},children:[m.jsx(uB,{children:K.topElement}),m.jsx(sB,{onClick:()=>D(ae),onMouseEnter:()=>R(ee),onMouseLeave:()=>O(ee),isHovered:le,isActive:!!S.includes(ae),isVisited:!!j.includes(ae),style:r,background:r?.background,backgroundMobile:r?.backgroundMobile,backgroundHover:r?.backgroundHover,backgroundSelected:r?.backgroundSelected,backgroundVisited:r?.backgroundVisited,useArrowRight:r?.useArrowRight,useArrowBelow:r?.useArrowBelow,arrowStyle:r?.arrowStyle,arrowHoverStyle:r?.arrowHoverStyle,arrowActiveStyle:r?.arrowActiveStyle,hoverStyle:r?.hoverStyle,activeStyle:r?.activeStyle,children:m.jsx(oB,{isActive:!!S.includes(ae),isVisited:!!j.includes(ae),isHovered:le,style:i,textColor:i.textColor,textHoverColor:i.textHoverColor,textActiveColor:i.textActiveColor,textVisitedColor:i.textVisitedColor,children:j.includes(ae)&&K.titleActive||K.title})}),S.includes(ae)&&m.jsx(lB,{children:m.jsx(MM,{className:f,style:n,textboxStyle:{borderRadius:"0px 0px 20px 20px",...n},children:m.jsx(Xn,{inheritColor:!0,style:n?.textStyle,children:K.body})})})]},ae)})}),y&&e]})};Q(lw)`
  font-size: calc(clamp(32px, 3.5vw, 40px));
  line-height: calc(clamp(42px, 3.8vw, 52px));
`;Q(Xn)`
  font-size: calc(clamp(20px, 2.6vw, 27px));
  em {
    font-size: calc(clamp(20px, 2.6vw, 27px));
  }
  text-align: center;
`;Q(Xn)`
  padding: 30px 0px 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;Q.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 30px;
  max-height: 200px;
`;Q.div`
  @media (max-width: 767px) {
    width: 100%;
    background-color: white;
    border-radius: 15px;
    height: auto;
    margin-bottom: 10px;
  
  }
`;Q(Xn)`
  margin-bottom: 50px !important;
`;Q.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 10vw;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 0px 20px;
  }
`;Q.input`
  appearance: none;
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  outline: none;
  margin-top: -20px;
  &:hover {
    transition: all ease-in-out 0.2s;
  }
  @media (max-width: 767px) {
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
    margin: 0;
  }
`;Q.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;Q.label`
  ${Og}
  // top: 50%;
  // transform: translateY(-50%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  min-height: 80px;
  padding: 0px 4px 30px 4px;
  cursor: pointer;
  margin: auto;
  &:hover {
    transition: all ease-in-out 0.2s;
  }
  @media (min-width: 1597px) {
    min-height: 30px;
  }
  @media (max-width: 767px) {
    display: inline;
    transform: none;
    padding: 10px 0px;
    line-height: 58px;
    &:hover {
      transition: none;
    }
    padding-left: 15px;
    text-align: left;
  }
`;Q.div`
  ${({defaultColor:e,hoverColor:t,hoverBorderColor:n,checkedColor:r,checkedBorderColor:i,radioLabelColor:o,radioLabelHover:a,defaultColorMobile:u,checkedColorMobile:c,checkedBorderColorMobile:f,textColorMobile:v,checkedTextColorMobile:b})=>`
  .likert-radio-button-container {

    .likert-radio-button {
      border: 3px solid ${e} !important;
      &:hover {
        border: 3px solid ${n} !important;
        background-color: ${t} !important;
      }
      &:checked {
        background-color: ${r} !important;
        border: 3px solid ${i} !important;
      }
    }
    .likert-radio-button-label {
      color: ${o||e};
      &:hover {
        font-weight: 700;
        color: ${a||t} !important;
        padding: 0px 0px 30px 0px;
         @media (max-width: 767px) {
     padding: 10px 0px 10px 15px;
  }
      }
      &.checked {
        font-weight: 700;
        color: ${r} !important;
        padding: 0px 0px 30px 0px;
         @media (max-width: 767px) {
      padding: 10px 0px 10px 15px;
  }
      }
    }
  
    @media (max-width: 767px) {
      .likert-radio-button {
        border: 4px solid ${u||e} !important;
        &:checked {
    
          background-color: ${c} !important;
          border: 4px solid ${f||i} !important;
        }
      }
      .likert-radio-button-label {
        width: 100%;
        font-weight: 700;
        color: ${v||u};
        &.checked {
          color: ${b} !important;
        }
      }
    }
  }
`}
`;Q.img`
  max-height: 50vh;
  @media (max-width: 540px) {
    max-height: 50vh;
  }
  margin-left: auto;
  margin-right: auto;
`;Q.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;Q.div`
  width: 100%;
  min-height: 100vh;
  height: inherit;
  position: relative;
  max-width: 100vw;
  overflow-x: hidden; //stops background images from overflowing
  overflow-y: clip;
  padding-bottom: inherit;
  ${({isCorrectResponse:e,correctStyle:t,incorrectStyle:n})=>{const r=e?t:n;return xt`
      ${r}

      ${cB} {
        color: ${r?.color};
      }

      ${fB} {
        color: ${r?.color};
      }
    `}}
`;const cB=Q(sw)`
  // color: #1a1a1a;
  padding-bottom: 20px;
`,fB=Q(Xn)``,dB=Q.div`
  position: relative;
  width: 50px;
`,hB=Q.img``,pB=Q.img``,gB=({backdropUrl:e,backdropAlt:t="A trivia backdrop",iconUrl:n,iconAlt:r="A trivia icon",hideIcon:i=!1})=>m.jsx(dB,{children:i?e!==void 0&&m.jsx(hB,{src:e,alt:t}):m.jsx(pB,{src:n,alt:r})}),mB=Q.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-bottom: -30px;
`,vB=({position:e="relative",maxScore:t,scoreIcons:n,scoreIconBackdrop:r,score:i,className:o})=>m.jsx(mB,{className:o,style:{position:e,paddingTop:"40px",zIndex:20},children:[...Array(t)].map((a,u)=>m.jsx(gB,{iconUrl:n[u],backdropUrl:r,hideIcon:u>=i},`score-icon-${u}`))});Q.div`
  width: 100%;
  // min-height: 100vh;
  position: relative;
  background: aliceblue;
  padding-bottom: 120px;
`;Q.img`
  max-height: 290px;
  margin-top: 40px;
  margin-bottom: 40px;
`;Q.div`
  // margin-bottom: 40px;
  text-align: center;
  font-size: calc(clamp(20px, 2.6vw, 27px));
  p,
  b {
    color: #1a1a1a;
  }
`;Q.button`
  /* Common styles */
  cursor: pointer;
  animation: fadeIn ease-in-out 0.75s;
  display: flex;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-family: "Sarabun";
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* Dynamic styles based on props */
  ${({selected:e,backgroundColor:t="white",backgroundColorSelected:n="#ffddbb",backgroundColorHover:r="#ffefe0",backgroundColorSelectedHover:i=n,colorHover:o="inherit",color:a="inherit",colorSelected:u="inherit"})=>`
      background: ${e?n:t};
      color: ${e?u:a};

      &:hover {
        background: ${e?i:r};
        color: ${e?u:o};
      }
    `}
`;Q.div`
  position: relative;
  margin: 0;
  margin-right: 20px;
  min-height: 24px;
  min-width: 24px;
  border-width: 3px;
  border-style: solid;
  ${({selected:e,isHovered:t,iconType:n="radio",backgroundColor:r="white",borderColor:i,backgroundColorSelected:o,borderColorSelected:a,hoverBackgroundColor:u,hoverBorderColor:c="white",hoverBackgroundColorSelected:f=o,hoverBorderColorSelected:v=a})=>`
    border-radius: ${n==="check"?"5px":"50%"};
    background: ${e?t?f:o:t?u:r};
    border-color: ${e?t?v:a:t?c:i};

  `}
`;Q.img`
  margin: 0;
  margin-right: 20px;
`;Q.div`
  text-align: left;
  font-weight: 600;
`;Q.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  position: relative;
  z-index: 10;
`;const yB=Nr`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
`;Q.div`
  ${({shake:e})=>e&&xt`
      animation: ${yB} 0.5s ease;
    `}
`;Q.div`
  p {
    color: #1a1a1a;
  }
  margin-bottom: 20px;
  padding-top: 20px;
  @media (min-width: 1024px) {
    padding-top: 60px;
  }
`;Q(vB)`
  @media (min-width: 920px) {
    justify-content: left;
  }
`;Q.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  height: 100%;
  min-height: 100vh;
  @media (max-width: 1024px) {
    height: auto;
    min-height: 50vh;
  }
`;const xB=Q.div`
  ${({background:e,top:t,animationDelay:n})=>`

  text-align: center;
  position: relative;
  background: ${e||"rgba(255, 255, 255, 0.5)"};
  border-radius: 50px;
  width: fit-content;
  height: auto;
  padding: 15px;
  margin-top: 2em;
  margin-bottom: 2em;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  animation: 1s fadeIn ease-out ${n||"0"}s forwards;
  @media (max-width: 767px) {
    border-radius: 30px;
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  ${t?`
  top: ${t}%;
  position: absolute;`:""}
  `}
`,wB=Q(Xn)`
  padding-left: 15px;
  padding-right: 15px;
  }

`,_B=({children:e,top:t=0,background:n="rgba(255, 255, 255, 0.5)",animationDelay:r,style:i,containerStyle:o})=>m.jsx(xB,{top:t,background:n,animationDelay:r,style:o,children:m.jsx(wB,{italics:!0,style:{color:"black",fontSize:"18px",...i},children:e})});Q.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  svg {
    transition: all ease-in-out 0.2s;
    height: 40px;
    width: 40px;
    fill: ${({closeButtonColor:e="#DE493D"})=>e};
    stroke: ${({closeButtonColor:e="#DE493D"})=>e};
    stroke-width: 2;
    &:hover {
      fill: ${({closeButtonHover:e="#EE7C58"})=>e};
      stroke: ${({closeButtonHover:e="#EE7C58"})=>e};
    }
  }
  display: ${({noCloseIcon:e})=>e?"none":"block"};
`;Q.div`
  position: absolute;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  // max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    position: relative;
    transform: none;
    top: unset;
    left: unset;
  }
`;Q.div`
  ${({textBoxStyle:e})=>xt`
      padding: calc(max(30px, 2vw));
      border-radius: 25px;
      width: 100%;
      max-width: 1000px;
      ${e}
    `}
`;Q(Ut)`
  ${({imageStyle:e})=>xt`
      position: relative;
      max-height: 240px;
      margin-bottom: -40px;
      opacity: 1;
      animation: PopIn 0.5s ease-in-out both;
      @media (max-width: 768px) {
        max-height: 170px;
        animation: PopInMobile 0.5s ease-in-out both;
      }

      @media (min-width: 1025px) and (max-height: 860px) {
        display: none;
      }
      @keyframes PopIn {
        0% {
          opacity: 0;
          margin-bottom: 0px;
        }
        100% {
          opacity: 1;
          margin-bottom: -40px;
        }
      }
      @keyframes PopInMobile {
        0% {
          opacity: 0;
          margin-bottom: 0px;
        }
        100% {
          opacity: 1;
          margin-bottom: -20px;
        }
      }
      ${e}
    `}
`;Q.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px;
  @media (max-width: 920px) {
    padding: 90px;
  }
  @media (max-width: 540px) {
    padding: 30px;
  }
  animation: 0.5s FadeIn ease-in-out both;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;Q.button`
  ${({itemStyle:e,itemHoverStyle:t,itemActiveStyle:n,isActive:r})=>xt`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      transition: all ease-in-out 0.3s;
      // width: calc(25% - 20px);
      height: 100%;
      // min-width: 225px;
      // max-width: 226px;
      min-height: 225px;
      background: white;
      border: none;
      position: relative;
      border-radius: 20px;
      flex: 1;
      ${e}
      &:hover {
     
        cursor: pointer;
        ${t}
      }
      ${r&&n}
    `}
`;Q.img`
  width: 100%;
  max-height: 110px;
`;Q.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  color: rgba(26, 26, 26, 0.7);
`;Q.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  max-width: 1100px;
  height: 100%;
  margin: auto;

  @media (max-width: 767px) {
    width: 75%;
  }
`;Q.div`
  ${({delay:e,isActive:t})=>`
    display: flex;
    opacity: 0; // Start with hidden
    transform: translateY(50%);
    transition: opacity 0.75s ease-in-out ${e}s, transform 0.75s ease-in-out ${e}s;
    height: 100%;
    
    ${t&&`
      opacity: 1;
      transform: translateY(0);
    `}
  `}
`;Q.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  // width: 75%;
  // max-width: 1000px;
  height: auto;
  margin: auto;
`;Q.div`
  display: flex;
  flex-flow: row;
  gap: 20px;
  align-items: stretch;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: auto;
`;const bB=Nr`
  0% {
    transform: rotateY(280deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`,SB=Nr`
  0% {
    transform: rotateY(280deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`,CB=Q.button`
  // static styles
  border: solid 4px white;
  border-radius: 20px;
  padding: 15px 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  filter: drop-shadow(3px 5px 3px rgba(0, 0, 0, 0.3));
  cursor: pointer;
  &:hover {
    transition: all ease-in-out 0.3s;
  }

  ${({isHovered:e,isActive:t,isResponsive:n,responsiveStyle:r,activeStyle:i,hoverStyle:o,inactiveStyle:a,useFlipAnimation:u,persistingStyle:c})=>{const f=t?i:e?o:a;return xt`
    
    
    
    @media (min-width: 541px) {
      ${c};
        ${f}
      }

   @media (max-width: 540px) {
        gap: 10px;
        border: none;
        flex-direction: row;
        align-items: center;
        width: 100% !important;
        height: 100%;
        min-height: auto !important;
        text-align: left;
          ${f}
       ${n&&r};
      }

        // animation: ${t&&u?bB:SB} 0.6s ease both;

      ${CB} {
        height: ${f?.height};
        font-family: ${f?.fontFamily};
        font-weight: ${f}
        font-size: ${f}
        padding: 0px;
      }

      ${EB} {
        color: ${f?.color};
        font-family: ${f?.fontFamily};
        font-weight: ${f?.fontWeight}
        font-size: ${f?.fontSize}
      }

      ${kB} {
        color: ${f?.color};
        font-family: ${f?.fontFamily};
        font-weight: ${f?.fontWeight}
        font-size: ${f?.fontSize}
        padding: 0px;
      }

      ${uC} {
        max-height: ${f?.maxHeight};
      }

      @media (max-width: 540px) {
        ${uC} {
          max-height: 75px;
        }
      }
    `}}
`,uC=Q.img`
  ${({color:e,isResponsive:t})=>`
  object-fit: cover;
  margin: 0 auto;
  ${t?`@media (max-width: 540px) {
     
    }`:""}
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`}
`;Q.div`
width: 100%;
height: auto;
  ${({isResponsive:e})=>`  
  ${e?`@media (max-width: 540px) {
    width: 100%;
    position: relative;
    text-align: left;
  }`:""}
`}
}
`;const kB=Q(Xn)`
  line-height: 1.5;
`,EB=Q(Xn)`
  font-size: inherit;
  ${({isResponsive:e})=>`
  text-align: center;
  // margin-bottom: -15px; Not sure if this is needed anymore
  padding-bottom: 0px;
  ${e?`@media (max-width: 540px) {
        padding: 0;
        //I don't think this is needed now we have responsiveStyle
    // margin: 0;
    // text-align: left;
    `:""}
}
`}
`;Q.div`
  ${({numberOfColumns:e,useFlexbox:t})=>`
  ${t?`
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      `:`
  display: grid;
  grid-template-columns: repeat(
    ${e},
    1fr
  ); // Adjust the column count as needed
  grid-template-rows: auto; // Equal height rows
  gap: 20px;
  
  `};


  @media (max-width: 540px) {
    display: flex;
    flex-flow: column;
    gap: 20px;
  }
  `}
`;Q.span`
  display: inline;
  @media (max-width: 920px) {
    display: none;
  }
`;Q.span`
  display: none;
  text-align: left;
  @media (max-width: 920px) {
    display: inline;
  }
`;Q.button`
  ${({color:e,isActive:t,hover:n})=>`
  background: ${e||"none"};
  border: none;
  padding: 10px;
  width: 200px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${t?"pointer-events: none;":""}
  margin: auto;
  cursor: pointer;
  > div {
    width: 100%;
  }
  @media (max-width: 540px) {
    flex-flow: row wrap;
    width: calc(100% - 20px);
    align-items: center;
    justify-content: center;
  
  }
  @media (max-width: 320px) {
    flex-flow: row wrap;
    width: calc(100% - 50px);
    align-items: center;
    justify-content: center;
  }
  &:hover {
    transition: all ease-in-out 0.3s;
    ${t?"":`background: ${n||"none"}; `}
    filter: brightness(1.3);
  }
`}
`;Q.img`
  object-fit: cover;
  margin: 0 auto;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;Q.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
`;Q.h3`
  color: #1a1a1a !important;
  text-align: center;
  font-family: Vollkorn;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
  text-align: center;
`;Q.span`
  p,
  b,
  em {
    color: #1a1a1a;
    font-family: Sarabun;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
    @media (max-width: 540px) {
      font-size: 18px;
    }
  }
`;Q.div`
  left: 50%;
  position: relative;
  transform: translate(-50%, 0);
  width: 90vw;
  @media (max-width: 540px) {
    width: 90vw;
  }
`;Q.div`
  transition: all ease-in-out 0.5s;
  @keyframes FadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;Q.div`
  display: flex;
  flex-flow: wrap row;
  gap: 30px;
  justify-content: center;
  @media (max-width: 540px) {
    flex-flow: row wrap;
    gap: 0;
    > div {
      flex-basis: 50%;
    }
  }
  @media (max-width: 320px) {
    flex-flow: column;
    gap: 0;
    > div {
      flex-basis: 100%;
    }
  }
`;Q.span`
  display: inline;
  font-size: 18px;
  @media (max-width: 920px) {
    display: none;
  }
`;Q.span`
  display: none;
  font-size: 16px;
  @media (max-width: 920px) {
    display: inline;
    text-align: center;
  }
`;Q.div`
  @media (min-width: 768px) {
    position: relative;
    z-index: 10;
    top: 50%;
    // left: 50%;
    transform: translateY(-50%);
    // width: 100%;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 1025px) and (max-height: 860px) {
      overflow: hidden;
      max-height: calc(max(860px, 100vh));
      padding: 60px 0px;
    }

    /* ----STYLES FOR BUTTONLESS POPUPS---- */
    ${({isSimpleHotspot:e})=>`
    ${e?`
       
            position: absolute;
            z-index: 0;
            left: 50%;
             transform: translateX(-50%);
            top: 75%;
           width: 100%;
            padding: 0px !important;
                @media (max-width: 1400px) {
              top: 75%;
          }
        `:""};
  `}
  }
`;Q.div`
  z-index: 100 !important;
  position: relative;
  // margin: auto;
  background: ${({backgroundColor:e})=>e||"#c8eefd"};
  padding: calc(max(20px, 1.4vw));
  border-radius: 25px;
  width: 100%;
  max-width: 1000px;
  z-index: 2;

  @media (min-width: 1025px) and (max-height: 860px) {
    max-height: 95vh;
    // overflow-y: auto;
    overflow-x: hidden;
  }

  margin-top: ${({infoImage:e})=>e?"150px":"auto"};

  @media (min-width: 1025px) and (max-height: 860px) {
    margin-top: ${({infoImage:e})=>"auto"};
  }
  @media (max-width: 767px) {
    ${({mobileStyle:e})=>e&&xt`
        ${Object.entries(e).map(([t,n])=>`${t}: ${n} !important;`).join(" ")}
      `};
    margin-top: ${({infoImage:e})=>e?"130px":"30px"};
    margin-bottom: ${({infoImage:e})=>e?"auto":"30px"};
    margin-left: auto;
    margin-right: auto;
  }
  //TO DO: ADD TO ANIMATION LIBRARY
  animation: zoomOut cubic-bezier(0.15, 0.08, 0.3, 1.3) 0.6s;

  @keyframes zoomOut {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;Q(Ut)`
  position: absolute;
  max-height: 240px;
  left: 50%;
  top: -200px;
  transform: translateX(-50%);
  animation: PopIn 0.5s ease-in-out both;
  @media (max-width: 768px) {
    max-height: 170px;
    animation: PopInMobile 0.5s ease-in-out both;
  }

  @media (min-width: 1025px) and (max-height: 860px) {
    display: none;
  }
  @keyframes PopIn {
    0% {
      opacity: 0;
      top: -400px;
    }
    100% {
      opacity: 1;
      top: -200px;
    }
  }
  @keyframes PopInMobile {
    0% {
      opacity: 0;
      top: -200px;
    }
    100% {
      opacity: 1;
      top: -130px;
    }
  }
`;Q.div`
  p,
  b {
    line-height: 145%;
    text-align: left;
    // font-size: calc(max(20px, 1vw));
  }
`;Q.button`
  ${({x:e,y:t,xT:n,yT:r})=>`
    width: 5%;
    min-width: 60px;
    left: ${e}%;
    top: ${t}%;
    background: none;
    border: none;
    position: absolute;
    z-index: 2;
    &:hover {
      cursor: pointer;
      transition: all ease-in-out 0.3s;
      filter: brightness(1.1);
      transform: scale(1.1);
    }
    @media (max-width: 1024px) {
      left: ${n||e}%;
      top: ${r||t}%;
    }
  `}
  ${({usePulseAnimation:e})=>e&&xt`
      animation: ${PM} 1.5s infinite;
    `}
`;Q.img`
  width: 100%;
`;Q.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation: 0.5s FadeIn ease-in-out both;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;Q.div``;Q.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  // margin-top: 1vh;
  z-index: 10;
`;Q.button`
  // static styles
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all ease-in-out 0.3s;
  width: 100%;
  height: 100%;
  // min-width: 100px;
  // min-height: 120px;
  position: relative;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  ${({isHovered:e,isActive:t,isVisited:n,inactiveStyle:r,hoverStyle:i,activeStyle:o,visitedStyle:a})=>{const u=t?o:n?a:e?i:r;return xt`
      ${u};

      ${TB} {
        color: ${u?.color};
        fontsize: ${u?.fontSize};
        fontweight: ${u?.fontWeight};
      }
    `}}
`;Q.div`
  position: absolute;
  pointer-events: none;
  top: 53%;
  transform: translateY(-50%);
  right: -80px;
  @media (max-width: 1080px) {
    right: -35px;
  }
`;const TB=Q(Xn)`
  border: none !important;
  height: none !important;
  background: none !important;
  line-height: 100%;
  width: 100%;
`;Q.img`
  width: 100%;
  max-height: 110px;
  margin: auto;
`;Q.div`
  width: 100%;
`;Q.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;Q.div`
  ${({showArrows:e,buttonsFillWidth:t=!0})=>`
  gap: ${e?"100px":"20px"};
  @media (max-width: 1080px) {
    gap: ${e?"40px":"20px"};
  }
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  > div {
    width: ${t?"100%":"auto"};
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
}
  `}
`;const AB="modulepreload",RB=function(e,t){return new URL(e,t).href},cC={},PB=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=RB(o,r),o in cC)return;cC[o]=!0;const a=o.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let v=i.length-1;v>=0;v--){const b=i[v];if(b.href===o&&(!a||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":AB,a||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),a)return new Promise((v,b)=>{f.addEventListener("load",v),f.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var bA={exports:{}},Mv={exports:{}},fC;function $B(){return fC||(fC=1,function(e){(function(t,n){e.exports?e.exports=n():t.EvEmitter=n()})(typeof window<"u"?window:Ss,function(){function t(){}var n=t.prototype;return n.on=function(r,i){if(!(!r||!i)){var o=this._events=this._events||{},a=o[r]=o[r]||[];return a.indexOf(i)==-1&&a.push(i),this}},n.once=function(r,i){if(!(!r||!i)){this.on(r,i);var o=this._onceEvents=this._onceEvents||{},a=o[r]=o[r]||{};return a[i]=!0,this}},n.off=function(r,i){var o=this._events&&this._events[r];if(!(!o||!o.length)){var a=o.indexOf(i);return a!=-1&&o.splice(a,1),this}},n.emitEvent=function(r,i){var o=this._events&&this._events[r];if(!(!o||!o.length)){o=o.slice(0),i=i||[];for(var a=this._onceEvents&&this._onceEvents[r],u=0;u<o.length;u++){var c=o[u],f=a&&a[c];f&&(this.off(r,c),delete a[c]),c.apply(this,i)}return this}},n.allOff=function(){delete this._events,delete this._onceEvents},t})}(Mv)),Mv.exports}/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(e){(function(t,n){e.exports?e.exports=n(t,$B()):t.imagesLoaded=n(t,t.EvEmitter)})(typeof window<"u"?window:Ss,function(n,r){var i=n.jQuery,o=n.console;function a(g,S){for(var w in S)g[w]=S[w];return g}var u=Array.prototype.slice;function c(g){if(Array.isArray(g))return g;var S=typeof g=="object"&&typeof g.length=="number";return S?u.call(g):[g]}function f(g,S,w){if(!(this instanceof f))return new f(g,S,w);var j=g;if(typeof g=="string"&&(j=document.querySelectorAll(g)),!j){o.error("Bad element for imagesLoaded "+(j||g));return}this.elements=c(j),this.options=a({},this.options),typeof S=="function"?w=S:a(this.options,S),w&&this.on("always",w),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))}f.prototype=Object.create(r.prototype),f.prototype.options={},f.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},f.prototype.addElementImages=function(g){g.nodeName=="IMG"&&this.addImage(g),this.options.background===!0&&this.addElementBackgroundImages(g);var S=g.nodeType;if(!(!S||!v[S])){for(var w=g.querySelectorAll("img"),j=0;j<w.length;j++){var $=w[j];this.addImage($)}if(typeof this.options.background=="string"){var y=g.querySelectorAll(this.options.background);for(j=0;j<y.length;j++){var E=y[j];this.addElementBackgroundImages(E)}}}};var v={1:!0,9:!0,11:!0};f.prototype.addElementBackgroundImages=function(g){var S=getComputedStyle(g);if(S)for(var w=/url\((['"])?(.*?)\1\)/gi,j=w.exec(S.backgroundImage);j!==null;){var $=j&&j[2];$&&this.addBackground($,g),j=w.exec(S.backgroundImage)}},f.prototype.addImage=function(g){var S=new b(g);this.images.push(S)},f.prototype.addBackground=function(g,S){var w=new x(g,S);this.images.push(w)},f.prototype.check=function(){var g=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}function S(w,j,$){setTimeout(function(){g.progress(w,j,$)})}this.images.forEach(function(w){w.once("progress",S),w.check()})},f.prototype.progress=function(g,S,w){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!g.isLoaded,this.emitEvent("progress",[this,g,S]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,g),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+w,g,S)},f.prototype.complete=function(){var g=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(g,[this]),this.emitEvent("always",[this]),this.jqDeferred){var S=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[S](this)}};function b(g){this.img=g}b.prototype=Object.create(r.prototype),b.prototype.check=function(){var g=this.getIsImageComplete();if(g){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},b.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},b.prototype.confirm=function(g,S){this.isLoaded=g,this.emitEvent("progress",[this,this.img,S])},b.prototype.handleEvent=function(g){var S="on"+g.type;this[S]&&this[S](g)},b.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},b.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},b.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function x(g,S){this.url=g,this.element=S,this.img=new Image}return x.prototype=Object.create(b.prototype),x.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var g=this.getIsImageComplete();g&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},x.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},x.prototype.confirm=function(g,S){this.isLoaded=g,this.emitEvent("progress",[this,this.element,S])},f.makeJQueryPlugin=function(g){g=g||n.jQuery,g&&(i=g,i.fn.imagesLoaded=function(S,w){var j=new f(this,S,w);return j.jqDeferred.promise(i(this))})},f.makeJQueryPlugin(),f})})(bA);var OB=bA.exports;const dC=Rc(OB),jB=!!(typeof window<"u"&&window.document&&window.document.createElement);class Ow extends we.Component{constructor(t){super(t),this.state={flickityReady:!1,flickityCreated:!1,cellCount:0},this.carousel=null,this.flkty=null}static getDerivedStateFromProps(t,n){const r=vt.Children.count(t.children);return r!==n.cellCount?{flickityReady:!1,cellCount:r}:null}componentDidUpdate(t,n){if(!this.flkty)return;const{children:r,options:{draggable:i,initialIndex:o},reloadOnUpdate:a,disableImagesLoaded:u}=this.props,{flickityReady:c}=this.state;if(a||!n.flickityReady&&c){const f=this.flkty.isActive;this.flkty.deactivate(),this.flkty.selectedIndex=o||0,this.flkty.options.draggable=i===void 0?r?r.length>1:!1:i,f&&this.flkty.activate(),!u&&this.carousel&&dC(this.carousel,()=>{this.flkty.reloadCells()})}else this.flkty.reloadCells()}async componentDidMount(){if(!jB||!this.carousel)return null;const t=(await PB(()=>import("./index-7f8b1dd5.js").then(i=>i.i),[],import.meta.url)).default,{flickityRef:n,options:r}=this.props;this.flkty=new t(this.carousel,r),n&&n(this.flkty),this.props.static?this.setReady():this.setState({flickityCreated:!0})}setReady(){if(this.state.flickityReady)return;const t=()=>this.setState({flickityReady:!0});this.props.disableImagesLoaded?t():dC(this.carousel,t)}renderPortal(){if(!this.carousel)return null;const t=this.carousel.querySelector(".flickity-slider");if(t){const n=sg.createPortal(this.props.children,t);return setTimeout(()=>this.setReady(),0),n}}render(){return vt.createElement(this.props.elementType,{className:this.props.className,ref:t=>{this.carousel=t}},this.props.static?this.props.children:this.renderPortal())}}Ow.propTypes={children:Ql.array,className:Ql.string,disableImagesLoaded:Ql.bool,elementType:Ql.string,flickityRef:Ql.func,options:Ql.object,reloadOnUpdate:Ql.bool,static:Ql.bool};Ow.defaultProps={className:"",disableImagesLoaded:!1,elementType:"div",options:{},reloadOnUpdate:!1,static:!1};const IB=Q.div`
  ${({navStyle:e,contentStyle:t,pageDotStyle:n})=>xt`
    .flickity-enabled {
      position: relative;
    }

    .flickity-enabled:focus {
      outline: none;
    }

    .flickity-viewport {
      //whether or not you can see the next slide.
      overflow: hidden;
      position: relative;
      height: 100%;
    }

    .flickity-slider {
      left: 50%;
      height: 100%;
      display: flex;
      align-items: ${t.alignItems};
      justify-content: center;
      cursor: grab;
      @media (max-width: 768px) {
        align-items: ${t.alignItemsMobile};
      }

      > div {
        padding: ${t.contentPadding};

        @media (max-width: 768px) {
          padding: ${t.contentPaddingMobile};
        }

        /* ----STYLES FOR CHARACTER CAROUSEL---- */
        ${t.isCharacterCarousel?`
          transition: filter 2s ease-in-out;
          filter: contrast(80%) saturate(50%) brightness(40%);
          -webkit-filter: contrast(80%) saturate(50%) brightness(40%);

          /* TEXTBOX STLYING */
          > div {
            position: absolute;
            width: calc(clamp(400px, 20vw, 800px));
            left: calc(-50vw + 50%);
            top: 5%;
            margin-left: 15vw;
            transition: opacity 0.5s ease-out 0.2s;
            opacity: 0;

            @media (max-width: 1100px) {
              margin: auto;
              width: 80%;
              left: 10%;
              top: auto;
              bottom: 10%;
            }
          
            @media (max-width: 768px) {
              position: relative;
              margin: auto;
              width: 85%;
              left: auto;
              top: auto;
              bottom: auto;
              margin-bottom: 40px;
            }           
          }
        }

        .is-selected {
          filter: contrast(100%) brightness(1) !important;
            > div {
              opacity: 1;
              z-index: 10;
            }
        }

        @media (max-width: 768px) {
          img { 
            position: relative;
            z-index: 100;
            margin: auto;
            margin-bottom: -20px;
          }
        }
  
          `:""};
      }
    }

    .flickity-slider {
      /* ----STYLES FOR CUSTOM FILTER ---- */
      ${t.customFilter?`
      > div:not(.is-selected) {
        opacity: 1;
      
        filter: ${t.customFilter} 1s ease-in-out;
        -webkit-filter: ${t.customFilter};
       
      }

      `:""};
      > div {
        transition: all 0.5s ease-in-out;
      }
      > div .is-selected {
        filter: contrast(100%) brightness(1);
        > div {
          opacity: 1;
          z-index: 10;
        }
      }
    }

    ${t.useCrossFade&&!t.useSwipeOnMobile?`
      .flickity-slider {
        transform: none !important;
      }
      .fade-cell {
        .toggle-content {
          display: none;
          animation-duration: 0s;
        }
        transform: none !important;
        left: 0 !important;
        opacity: 0 !important;
        transition: opacity 0.3s ease-in-out;
        z-index: 0;
      }
    
      .fade-cell.is-selected {
        opacity: 1 !important;
        z-index: 1;
        transform: none !important;
        .toggle-content {
          display: flex;
          animation-duration: 0.75s;
        }
      }
    `:""};

    ${t.useSwipeOnMobile&&t.useSwipeOnMobile?`
        @media (min-width: 768px) {
          /* Apply cross-fade effect only if screen size is above 768px */
          .flickity-slider {
            transform: none !important;
          }
          .fade-cell {
            transform: none !important;
            left: 0 !important;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            z-index: 0;
          }
          .fade-cell.is-selected {
            opacity: 1;
            z-index: 1;
            transform: none !important;
          }
        }
        `:""}

    /* draggable *

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
navStyle
.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ----color of navigation buttons ---- */

    .flickity-button {
      transition: all ease-in-out 0.3s;
      display: none;
      position: absolute;
      z-index: 100;
      border: none;
      ${e?.background?`background: ${e?.background}; `:""}
      ${e?.iconColor?`color: ${e?.iconColor}; `:""}
        @media (min-width: 921px) {
        display: block;
      }
    }

    .flickity-button:hover {
      ${e?.backgroundHover?`background: ${e?.backgroundHover}; `:""}
      ${e?.iconColorHover?`color: ${e?.iconColorHover}; `:""}
      cursor: pointer;
    }

    .flickity-button:focus {
      outline: none;
      box-shadow: 0px;
    }

    .flickity-button:active {
      opacity: 0.8;
    }

    .flickity-button:disabled {
      opacity: 0;
      cursor: auto;
      /* prevent disabled button from capturing pointer up event. #716 */
      pointer-events: none;
    }

    .flickity-button-icon {
      fill: currentColor;
    }

    /* ----size and placement of nav buttons ---- */

    .flickity-prev-next-button {
      top: 50%;
      ${e?.buttonSize?`width: ${e?.buttonSize}; `:""}
      ${e?.buttonSize?`height: ${e?.buttonSize}; `:""}
    border-radius: 50%;
      /* vertically center */
      transform: translateY(-50%);
    }

    //offet placement of nav buttons left or right
    .flickity-prev-next-button.previous {
      ${e?.offsetIconLeft?`left: ${e?.offsetIconLeft}; `:""}
      @media (min-width: 2000px) {
        ${e?.offsetIconLeft?`left: calc(${e?.offsetIconLeft} * 2); `:""}
      }
      @media (max-width: 921px) {
        left: 30px;
      }
    }
    .flickity-prev-next-button.next {
      ${e?.offsetIconRight?`right: ${e?.offsetIconRight}; `:""}
      @media (min-width: 2000px) {
        ${e?.offsetIconRight?`right: calc(${e?.offsetIconRight} * 2); `:""}
      }
      @media (max-width: 921px) {
        right: 30px;
      }
    }

    //placement of arrow icon within circle
    .flickity-prev-next-button .flickity-button-icon {
      position: absolute;
      left: 20%;
      top: 20%;
      width: 60%;
      height: 60%;
    }

    /* ---- page dots ---- */

    .flickity-page-dots {
      z-index: 100;
      position: absolute;
      width: 100%;
      bottom: 65px;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;
      line-height: 1;
      counter-reset: dot;
      @media (max-width: 767px) {
        bottom: 30px;
      }
      ${n?.containerStyle?xt`
            ${n.containerStyle}
            ${n?.useNumberedDots?xt`
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                `:""}
          `:""};
    }

    .flickity-rtl .flickity-page-dots {
      direction: rtl;
    }

    .flickity-page-dots .dot {
      transition: all ease-in-out 0.3s;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 10px;
      height: 10px;
      margin: 0 8px;
      background: #333;
      border-radius: 50%;
      opacity: 0.5;

      cursor: pointer;
      ${n?.background?`background: ${n.background}; `:""}
      ${n?.defaultStyle?xt`
            ${n.defaultStyle}
          `:""};

      ${n?.useNumberedDots?xt`
            &::before {
              font-size: 24px;
              font-family: Sarabun;
              font-weight: 700;
              content: counter(dot);
              counter-increment: dot;
              color: white;
              margin-top: -3px;
              margin-left: -1px;
              width: 100%;
              ${n.counterStyle}
            }
          `:""};

      &:hover {
        opacity: 1;
        ${n?.backgroundHover?`background: ${n.backgroundHover}; `:""}
      }
    }

    .flickity-page-dots .dot.is-selected {
      opacity: 1;
      ${n?.backgroundActive&&!n?.activeStyle?`background: ${n.backgroundActive};
       
        `:""}
      ${n?.activeStyle?xt`
            ${n.activeStyle}
            ${n?.useNumberedDots?xt`
                  &::before {
                    margin-left: 0px;
                    margin-top: 0px;
                    transition: all 0.3s ease-in-out;
                    ${n.counterStyle}
                  }
                `:""}
          `:""};
    }
  `}
`,LB={background:"white",backgroundHover:"grey",iconColor:"#1a1a1a",iconColorHover:"#1a1a1a",offsetIconLeft:"64px",offsetIconRight:"64px",buttonSize:"44px"},UB={contentPadding:"80px",contentPaddingMobile:"0px",alignItems:"center",alignItemsMobile:"center",isCharacterCarousel:!1,useCrossFade:!1},MB={background:"white",backgroundHover:"grey",backgroundActive:"white",useNumberedDots:!1},DB=({children:e,enablePageDots:t=!1,enableWrapAround:n=!1,className:r,style:i,navStyle:o,contentStyle:a,FlickityOptions:u,pageDotStyle:c,unlockedContent:f,onBeforeSlideChange:v,onAfterSlideChange:b})=>{const[x,g]=we.useState(0),[S,w]=we.useState(!1),j=we.useRef(null),$=async y=>{v&&await v(x,y),g(y),b&&b(y);const E=vt.Children.count(e);y===E-1&&w(!0)};return m.jsxs(m.Fragment,{children:[m.jsx(IB,{style:i,navStyle:{...LB,...o},contentStyle:{...UB,...a},pageDotStyle:{...MB,...c},className:r,children:m.jsx(Ow,{options:{pageDots:t,wrapAround:n,...u},flickityRef:y=>{j.current=y,y&&y.on("select",()=>$(y.selectedIndex))},children:e})}),S&&f]})};var SA={},Dv={},hC;function FB(){return hC||(hC=1,function(e){(function(t,n){n(e,we,G5())})(Ss,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=S;var i=a(n),o=a(r);function a(y){return y&&y.__esModule?y:{default:y}}var u=Object.assign||function(y){for(var E=1;E<arguments.length;E++){var I=arguments[E];for(var k in I)Object.prototype.hasOwnProperty.call(I,k)&&(y[k]=I[k])}return y};function c(y,E){var I={};for(var k in y)E.indexOf(k)>=0||Object.prototype.hasOwnProperty.call(y,k)&&(I[k]=y[k]);return I}function f(y,E){if(!(y instanceof E))throw new TypeError("Cannot call a class as a function")}var v=function(){function y(E,I){for(var k=0;k<I.length;k++){var D=I[k];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(E,D.key,D)}}return function(E,I,k){return I&&y(E.prototype,I),k&&y(E,k),E}}();function b(y,E){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:y}function x(y,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);y.prototype=Object.create(E&&E.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(y,E):y.__proto__=E)}var g=!1;function S(y){g=y}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){S(!0)}}))}catch{}function w(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return g?y:!1}function j(y){if("touches"in y){var E=y.touches[0],I=E.pageX,k=E.pageY;return{x:I,y:k}}var D=y.screenX,R=y.screenY;return{x:D,y:R}}var $=function(y){x(E,y);function E(){var I;f(this,E);for(var k=arguments.length,D=Array(k),R=0;R<k;R++)D[R]=arguments[R];var O=b(this,(I=E.__proto__||Object.getPrototypeOf(E)).call.apply(I,[this].concat(D)));return O._handleSwipeStart=O._handleSwipeStart.bind(O),O._handleSwipeMove=O._handleSwipeMove.bind(O),O._handleSwipeEnd=O._handleSwipeEnd.bind(O),O._onMouseDown=O._onMouseDown.bind(O),O._onMouseMove=O._onMouseMove.bind(O),O._onMouseUp=O._onMouseUp.bind(O),O._setSwiperRef=O._setSwiperRef.bind(O),O}return v(E,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,w({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,w({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(k){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(k))}},{key:"_onMouseMove",value:function(k){this.mouseDown&&this._handleSwipeMove(k)}},{key:"_onMouseUp",value:function(k){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(k)}},{key:"_handleSwipeStart",value:function(k){var D=j(k),R=D.x,O=D.y;this.moveStart={x:R,y:O},this.props.onSwipeStart(k)}},{key:"_handleSwipeMove",value:function(k){if(this.moveStart){var D=j(k),R=D.x,O=D.y,G=R-this.moveStart.x,q=O-this.moveStart.y;this.moving=!0;var K=this.props.onSwipeMove({x:G,y:q},k);K&&k.cancelable&&k.preventDefault(),this.movePosition={deltaX:G,deltaY:q}}}},{key:"_handleSwipeEnd",value:function(k){this.props.onSwipeEnd(k);var D=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-D?this.props.onSwipeLeft(1,k):this.movePosition.deltaX>D&&this.props.onSwipeRight(1,k),this.movePosition.deltaY<-D?this.props.onSwipeUp(1,k):this.movePosition.deltaY>D&&this.props.onSwipeDown(1,k)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(k){this.swiper=k,this.props.innerRef(k)}},{key:"render",value:function(){var k=this.props;k.tagName;var D=k.className,R=k.style,O=k.children;k.allowMouseEvents,k.onSwipeUp,k.onSwipeDown,k.onSwipeLeft,k.onSwipeRight,k.onSwipeStart,k.onSwipeMove,k.onSwipeEnd,k.innerRef,k.tolerance;var G=c(k,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return i.default.createElement(this.props.tagName,u({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:D,style:R},G),O)}}]),E}(n.Component);$.displayName="ReactSwipe",$.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},$.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=$})}(Dv)),Dv}(function(e){(function(t,n){n(e,FB())})(Ss,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default})})(SA);const zB=Rc(SA);var jw={},BB=H5;Object.defineProperty(jw,"__esModule",{value:!0});var by=jw.default=void 0,NB=BB(xA()),WB=m,HB=(0,NB.default)((0,WB.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");by=jw.default=HB;const VB=Q.button`
  ${({$active:e,$isHovered:t,usePaginationIcons:n})=>`
transition: all ease-in-out 0.25s;
border-radius: 50%;
width: 15px;
height: 15px;

border: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${e?"blue":"white"};
${({paginationActiveStyle:r})=>xt`
  ${e&&r?r:""}
`};
${n&&`
width: ${e||t?"55px":"35px"};
height: ${e||t?"55px":"35px"};
`};
cursor: ${e?"default":"pointer"};
&:hover {
  background: blue;
}
${({paginationHoverStyle:r})=>xt`
  ${t&&r?r:""}
`};
`}
`,GB=Q.span`
  color: white;
  fill: white;
  font-size: 18px;
  font-weight: 700;
  font-family: Sarabun;
  transition: all ease-in-out 0.25s;
  ${({$active:e,paginationIconStyle:t,paginationActiveIconStyle:n})=>{const r=e&&n?n:t||"";return xt`
      ${r}
      > img {
        max-height: 40px;
        max-width: 40px;
        ${r}
      }
      > svg {
        width: 100%;
        height: 100%;
        stroke: white;
        stroke-width: 1.5px;
        ${r}
      }
    `}}
`,YB=({$active:e,onClick:t,paginationIcon:n,usePaginationIcons:r,paginationIconStyle:i,paginationActiveIconStyle:o,paginationStyle:a,paginationHoverStyle:u,paginationActiveStyle:c})=>{const[f,v]=we.useState(!1);return m.jsx(VB,{$active:e,$isHovered:f,onClick:()=>t(),onMouseOver:()=>v(!0),onMouseOut:()=>v(!1),usePaginationIcons:r,style:e?c:f?u:a,children:m.jsx(GB,{$active:e,style:e?o:i,children:n})})},XB=Q.div`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
  min-height: 60px;
  ${({usePaginationDivider:e})=>`
  ${e&&`
  gap: 0px;
  `}
  `}
`,KB=Q.div`
  width: 30px;
  height: 3px;

  ${({paginationDividerStyle:e})=>xt`
    ${e&&e};
  `}
`,qB=({content:e,activeIndex:t,handleClick:n,usePaginationIcons:r,paginationIcons:i=[],paginationIconDefault:o,usePaginationDivider:a,paginationDividerStyle:u,paginationIconStyle:c,paginationActiveIconStyle:f,paginationStyle:v,paginationHoverStyle:b,paginationActiveStyle:x,paginationContainerStyle:g})=>m.jsx(XB,{style:g,usePaginationDivider:a,children:e.map((S,w)=>m.jsxs(m.Fragment,{children:[m.jsx(YB,{$active:t===w,onClick:()=>n(w),paginationStyle:v,paginationHoverStyle:b,paginationActiveStyle:x,paginationIconStyle:c,paginationActiveIconStyle:f,usePaginationIcons:r,paginationIcon:i[w]||o},"carousel-dot-"+w),a&&w!==e.length-1?m.jsx(KB,{style:u}):null]}))}),QB=Q.button`
  position: relative;
  z-index: 150;
  background: none;
  border: none;
  outline: none;
  visibility: visible;
  svg {
    ${({$iconStyle:e})=>xt`
      transition: all ease-in-out 0.2s;
      color: white;
      font-weight: 700;
      width: 80px;
      height: 80px;
      ${e&&e}
    `}
  }
  &:hover {
    @media (min-width: 921px) {
      cursor: pointer;
      svg {
        ${({$iconHoverStyle:e})=>xt`
          ${t=>`color: ${t.theme.navigation.background||"#0cbdc8"};`}
          ${e&&e}
        `}
      }
    }
  }
  @media (max-width: 920px) {
    position: absolute;
    z-index: 150;
    border-radius: 10px;
    bottom: 0;
    max-width: 220px;
    width: calc((100% - 120px) / 2);
    ${e=>`background: ${e.theme.navigation.background||"#0cbdc8"};`}
    ${({$navDirection:e})=>xt`
      ${e==="forward"?"right: 15px;":"left: 15px;"}
    `}
    svg {
      background: none;
      color: white;
      height: 10vh;
      min-height: 50px;
      max-height: 80px;
    }
    ${({$responsiveStyle:e})=>xt`
    ${e&&e};
  }`}
`,pC=({goToSlide:e,icon:t,hide:n,iconStyle:r,iconHoverStyle:i,navDirection:o,responsiveStyle:a})=>m.jsx(QB,{style:{visibility:n?"hidden":"visible"},$navDirection:o,$iconStyle:r,$iconHoverStyle:i,$responsiveStyle:a,onClick:()=>e(),children:t}),JB=Q.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`,ZB=Q.div`
  position: relative;
  // display: flex;
  // flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all ease-in-out 0.5s;
`,eN=Q.div`
  width: 100%;
  transition: all ease-in-out 0.5s;
  opacity: 0;
  position: absolute;
  flex: 1;
  display: flex;
`,tN=({content:e,activeIndex:t,contentStyle:n,fadeContent:r=!1})=>m.jsx(JB,{style:n,children:e.map((i,o)=>{const a=r?{}:{display:t===o?"block":"none",position:"absolute",top:0,left:0};return m.jsx(ZB,{style:{opacity:t===o?1:0,zIndex:t===o?10:-1},children:m.jsx(eN,{style:{opacity:t===o?1:0,zIndex:t===o?10:-1,displayStyle:a},children:i},"carousel-content-"+o)},"carousel-animation-container-"+o)})}),nN=Q.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: none;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 920px) {
    width: 100% !important;
  }
`,rN=Q.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;

  @media (max-width: 920px) {
    justify-content: center;


`,iN=({startAt:e,content:t,extra:n,hidePagination:r=!1,hideNavigation:i=!1,usePaginationDivider:o=!1,paginationDividerStyle:a,unlockedContent:u,loop:c=!0,buttonStyle:f,buttonHoverStyle:v,responsiveButtonStyle:b,fadeContent:x=!1,containerStyle:g,contentStyle:S,className:w,usePaginationIcons:j=!1,paginationIconDefault:$=m.jsx(by,{}),paginationIcons:y=[],paginationIconStyle:E,paginationActiveIconStyle:I,paginationStyle:k,paginationHoverStyle:D,paginationActiveStyle:R,paginationContainerStyle:O,activeIndex:G,setActiveIndex:q})=>{const[K,ee]=we.useState(e||0),ae=G??K,le=q??ee,[Re,Ce]=we.useState(!1),ce=()=>{xe()},ie=()=>{$e()},te=Ee=>{le(Ee);const _e=t.length-1;Ee===_e&&Ce(!0)},xe=()=>{const Ee=t.length-1;ae<Ee?le(ae+1):c!==!1&&le(0),ae===Ee-1&&Ce(!0)},$e=()=>{const Ee=t.length-1;ae>0?le(ae-1):c!==!1&&le(Ee)};return m.jsx(zB,{onSwipeLeft:ce,onSwipeRight:ie,children:m.jsxs(nN,{className:w,style:g,children:[m.jsxs(rN,{children:[m.jsx(pC,{navDirection:"backward",iconStyle:f,iconHoverStyle:v,responsiveStyle:b,goToSlide:$e,hide:c===!1&&ae===0||i,icon:m.jsx(wA,{})}),m.jsx(tN,{content:t,contentStyle:S,activeIndex:ae,fadeContent:x}),m.jsx(pC,{navDirection:"forward",iconStyle:f,iconHoverStyle:v,responsiveStyle:b,goToSlide:xe,hide:c===!1&&ae===t.length-1||i,icon:m.jsx(by,{})})]}),!r&&m.jsx(qB,{activeIndex:ae,usePaginationIcons:j,usePaginationDivider:o,paginationDividerStyle:a,paginationIcons:j?y:void 0,paginationIconDefault:j&&$,content:t,handleClick:te,paginationIconStyle:E,paginationActiveIconStyle:I,paginationStyle:k,paginationHoverStyle:D,paginationContainerStyle:O,paginationActiveStyle:R}),Re?m.jsx("div",{children:u}):m.jsx("div",{children:n})]})})};Q.div`
  position: relative;
  max-width: 1200px;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  &.css-79ws1d-MuiModal-root {
    position: absolute !important;
  }
`;Q(Ig)`
  transition: all 0.2s;
  background: none;
  border: none;
  padding: 0;
`;Q(Ig)`
  transition: all 0.2s;
  background: none;
  border: none;
  padding: 0;
`;function Sy(e,t){return Sy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Sy(e,t)}function oN(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Sy(e,t)}var sN=!!(typeof window<"u"&&window.document&&window.document.createElement);function aN(){if(!sN||!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){function r(){e=!0}return r}()}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch{}return e}var Fv=void 0;function lN(){return Fv===void 0&&(Fv=aN()),Fv}function uN(e){if(e)return lN()?e:!!e.capture}function cN(e){if(!e)return 0;if(e===!0)return 100;var t=e.capture<<0,n=e.passive<<1,r=e.once<<2;return t+n+r}function gC(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function Vg(e){this.target=e,this.events={}}Vg.prototype.getEventHandlers=function(){function e(t,n){var r=String(t)+" "+String(cN(n));return this.events[r]||(this.events[r]={handlers:[],handleEvent:void 0},this.events[r].nextHandlers=this.events[r].handlers),this.events[r]}return e}();Vg.prototype.handleEvent=function(){function e(t,n,r){var i=this.getEventHandlers(t,n);i.handlers=i.nextHandlers,i.handlers.forEach(function(o){o&&o(r)})}return e}();Vg.prototype.add=function(){function e(t,n,r){var i=this,o=this.getEventHandlers(t,r);gC(o),o.nextHandlers.length===0&&(o.handleEvent=this.handleEvent.bind(this,t,r),this.target.addEventListener(t,o.handleEvent,r)),o.nextHandlers.push(n);var a=!0,u=function(){function c(){if(a){a=!1,gC(o);var f=o.nextHandlers.indexOf(n);o.nextHandlers.splice(f,1),o.nextHandlers.length===0&&(i.target&&i.target.removeEventListener(t,o.handleEvent,r),o.handleEvent=void 0)}}return c}();return u}return e}();var zv="__consolidated_events_handlers__";function mC(e,t,n,r){e[zv]||(e[zv]=new Vg(e));var i=uN(r);return e[zv].add(t,n,i)}function fN(e){if(e.slice(-1)==="%")return parseFloat(e.slice(0,-1))/100}function dN(e){if(!isNaN(parseFloat(e))&&isFinite(e))return parseFloat(e);if(e.slice(-2)==="px")return parseFloat(e.slice(0,-2))}function vC(e,t){var n=dN(e);if(typeof n=="number")return n;var r=fN(e);if(typeof r=="number")return r*t}var B0="above",hu="inside",N0="below",Cy="invisible";function CA(e){return typeof e.type=="string"}var hN=`<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.

See https://goo.gl/LrBNgw for more info.`;function pN(e,t){if(e&&!CA(e)&&!t)throw new Error(hN)}function gN(e){return e.viewportBottom-e.viewportTop===0?Cy:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?hu:e.viewportBottom<e.waypointTop?N0:e.waypointTop<e.viewportTop?B0:Cy}var Kc,wd=[];function yC(e){wd.push(e),Kc||(Kc=setTimeout(function(){Kc=null;for(var n;n=wd.shift();)n()},0));var t=!0;return function(){if(t){t=!1;var r=wd.indexOf(e);r!==-1&&(wd.splice(r,1),!wd.length&&Kc&&(clearTimeout(Kc),Kc=null))}}}function mN(e){return e==="window"?global.window:e}var Bv=typeof window<"u",vN={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},ju=function(e){oN(t,e);function t(r){var i;return i=e.call(this,r)||this,i.refElement=function(o){i._ref=o},i}var n=t.prototype;return n.componentDidMount=function(){var i=this;Bv&&(this.cancelOnNextTick=yC(function(){i.cancelOnNextTick=null;var o=i.props,a=o.children;o.debug,pN(a,i._ref),i._handleScroll=i._handleScroll.bind(i),i.scrollableAncestor=i._findScrollableAncestor(),i.scrollEventListenerUnsubscribe=mC(i.scrollableAncestor,"scroll",i._handleScroll,{passive:!0}),i.resizeEventListenerUnsubscribe=mC(window,"resize",i._handleScroll,{passive:!0}),i._handleScroll(null)}))},n.componentDidUpdate=function(){var i=this;Bv&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=yC(function(){i.cancelOnNextTick=null,i._handleScroll(null)})))},n.componentWillUnmount=function(){Bv&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())},n._findScrollableAncestor=function(){var i=this.props,o=i.horizontal,a=i.scrollableAncestor;if(a)return mN(a);for(var u=this._ref;u.parentNode;){if(u=u.parentNode,u===document.body)return window;var c=window.getComputedStyle(u),f=o?c.getPropertyValue("overflow-x"):c.getPropertyValue("overflow-y"),v=f||c.getPropertyValue("overflow");if(v==="auto"||v==="scroll"||v==="overlay")return u}return window},n._handleScroll=function(i){if(this._ref){var o=this._getBounds(),a=gN(o),u=this._previousPosition,c=this.props;c.debug;var f=c.onPositionChange,v=c.onEnter,b=c.onLeave,x=c.fireOnRapidScroll;if(this._previousPosition=a,u!==a){var g={currentPosition:a,previousPosition:u,event:i,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom};f.call(this,g),a===hu?v.call(this,g):u===hu&&b.call(this,g);var S=u===N0&&a===B0,w=u===B0&&a===N0;x&&(S||w)&&(v.call(this,{currentPosition:hu,previousPosition:u,event:i,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}),b.call(this,{currentPosition:a,previousPosition:hu,event:i,waypointTop:o.waypointTop,waypointBottom:o.waypointBottom,viewportTop:o.viewportTop,viewportBottom:o.viewportBottom}))}}},n._getBounds=function(){var i=this.props,o=i.horizontal;i.debug;var a=this._ref.getBoundingClientRect(),u=a.left,c=a.top,f=a.right,v=a.bottom,b=o?u:c,x=o?f:v,g,S;this.scrollableAncestor===window?(g=o?window.innerWidth:window.innerHeight,S=0):(g=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,S=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var w=this.props,j=w.bottomOffset,$=w.topOffset,y=vC($,g),E=vC(j,g),I=S+g;return{waypointTop:b,waypointBottom:x,viewportTop:S+y,viewportBottom:I-E}},n.render=function(){var i=this,o=this.props.children;if(!o)return vt.createElement("span",{ref:this.refElement,style:{fontSize:0}});if(CA(o)||Cx.isForwardRef(o)){var a=function(c){i.refElement(c),o.ref&&(typeof o.ref=="function"?o.ref(c):o.ref.current=c)};return vt.cloneElement(o,{ref:a})}return vt.cloneElement(o,{innerRef:this.refElement})},t}(vt.PureComponent);ju.above=B0;ju.below=N0;ju.inside=hu;ju.invisible=Cy;ju.defaultProps=vN;ju.displayName="Waypoint";const yN=Q.div`
  display: block;
`,xN=({children:e,className:t,style:n,id:r})=>m.jsx(yN,{style:n,className:t,id:r,children:e}),wN=Q.button`
  // preset styles
  transition: all ease-in-out 0.3s;
  background: none;
  border: none;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  @media (max-width: 767px) {
    width: calc((100% - 40px) / 5);
    height: auto;
    ${({buttonMobileStyle:e})=>xt`
      ${e!==void 0?e:""}
    `};
  }
  border-radius: 8.75px;
  // dynamic styles
  ${({$isActive:e,$isHovered:t})=>`
  ${({buttonActiveStyle:n})=>xt`
    ${e&&n?n:""}
  `};
  ${({buttonHoverStyle:n})=>xt`
    ${t&&n?n:""}
  `};
  ${t&&"cursor: pointer;"}
`}
`,_N=({$active:e,onClick:t,children:n,hoverChildren:r,className:i,buttonStyle:o,buttonHoverStyle:a,buttonActiveStyle:u,buttonMobileStyle:c,hoverDelay:f=200})=>{const[v,b]=we.useState(!1),[x,g]=we.useState(!1),S=we.useRef(null),w=()=>{b(!0),S.current||(S.current=setTimeout(()=>g(!0),f))},j=()=>{b(!1),S.current&&(clearTimeout(S.current),S.current=null),setTimeout(()=>g(!1),50)};return m.jsx(wN,{$isActive:e,onClick:t,onMouseEnter:w,onMouseLeave:j,$isHovered:v,className:i,style:v?a:e?u:o,buttonMobileStyle:c,children:x?r:n})},bN=Q.div`
  ${({$isVisible:e})=>`
  transition: all ease-in-out 0.5s;
  position: fixed;
  opacity: ${e?1:0};
  z-index: 50;
  left: ${e?"30px":"-200px"};
  top: 50%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  max-width: 100px;
  max-height: 90vh;
  gap: 10px;
  @media (max-width: 767px) {
    justify-content: center;
    top: ${e?"20px":"-100%"};
    left: 20px;
    transform: translateY(0%);
    width: 100%;
    max-width: calc(100vw - 40px);
    flex-flow: row wrap;
    background: rgba(255, 255, 255, 0.1);
  }
`}
`,SN=({buttonContent:e,hoverContent:t=[],activeIndex:n,handleClick:r,isVisible:i=!0,className:o,menuStyle:a,buttonStyle:u,buttonHoverStyle:c,buttonActiveStyle:f,buttonMobileStyle:v})=>m.jsx(bN,{$isVisible:i,style:a,className:o,children:e.map((b,x)=>m.jsx(_N,{$active:n===x,onClick:()=>r(x),buttonStyle:u,buttonHoverStyle:c,buttonActiveStyle:f,buttonMobileStyle:v,hoverChildren:t[x],children:b},"waypoint-button"+x))}),CN=Q.div``,kN=({content:e,buttonContent:t,hoverButtonContent:n=t,panelConfig:r={idPrefix:"panel"},className:i,style:o,menuStyle:a,buttonStyle:u,buttonHoverStyle:c,buttonActiveStyle:f,buttonMobileStyle:v})=>{const[b,x]=we.useState(0),[g,S]=we.useState();function w($){const y=document.getElementById($);y&&y.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}const j=$=>{x($),w(`${r?.idPrefix}-${$}`)};return m.jsx(ju,{onEnter:()=>S(!0),onLeave:()=>S(!1),topOffset:window.innerHeight/2,bottomOffset:"600px",children:m.jsxs(CN,{style:o,className:i,children:[m.jsx(SN,{isVisible:g,menuStyle:a,activeIndex:b,handleClick:j,buttonContent:t,hoverContent:n,buttonStyle:u,buttonHoverStyle:c,buttonActiveStyle:f,buttonMobileStyle:v}),e.map(($,y)=>m.jsx(ju,{onEnter:()=>x(y),topOffset:"20%",bottomOffset:"20%",children:m.jsx("div",{children:m.jsxs(xN,{id:`${r?.idPrefix}-${y}`,children:[m.jsx(nB,{height:0,tabletHeight:0,mobileHeight:20}),$]},`${r?.idPrefix}-${y}`)})},`${r?.idPrefix}-${y}`))]})})};Q.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  max-width: 50%;
  max-height: 50vh;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  // display: ${e=>e.visible?"block":"none"};
  > img {
    animation: ${e=>e.visible?"fadeIn":"fadeOut"} 0.25s
      ease-out forwards;
  }
  @media (max-height: 900px) {
    max-height: 70vh;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 40%;
  }
`;Q(Ut)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  pointer-events: none;
  opacity: ${e=>e.visible?1:0};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  margin-left: 60px;
  margin-right: 60px;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 40px;
    margin-right: 40px;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    margin-left: 30px;
    margin-right: 40px;
  }
  @media (max-width: 376px) {
    margin-left: 20px;
    margin-right: 40px;
  }
`;Q.div`
  margin-left: auto;
  max-width: 50%;
`;we.createContext({scenes:[],activeSceneId:null,unlockedScenes:new Set,setActiveScene:()=>{},setUnlockedScenes:()=>{}});const EN=Nr`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,TN=Nr`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;Q.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${({useCrossfade:e,isVisible:t})=>e&&xt`
      animation: ${t?EN:TN} 1s ease-in-out;
      opacity: ${t?1:0};
      transition: opacity 1s ease-in-out;
    `}
  
  ${({isVisible:e,useCrossfade:t})=>!t&&!e&&xt`
      display: none;
    `}
`;Q.div`
  ${e=>`animation:   ${e.fadeIn?"fadeIn":"none"} ${e.duration?e.duration:"1"}s ease-in-out ${e.delay?e.delay:"0"}s;`}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;Q.div`
  ${e=>`background: ${e.background?e.background:e.theme.color.background};`}
`;Q.div``;Q.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background: ${e=>e.background};
  padding: 80px 20px 120px 20px;
  transition: background-color 1s;
  min-height: 100vh;
  height: 100%;
`;Q.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: 110px;
  height: 50px;
  background: ${({checked:e,onColor:t,offColor:n,toggleButtonBackground:r})=>e?t||r:n||r};
  border-radius: 50px;
  transition: background-color 0.2s;
  margin-bottom: 40px;
`;Q.span`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({checked:e,onCircleColor:t,offCircleColor:n})=>e?t:n};
  transition: transform 0.2s;
  transform: ${({checked:e})=>e?"translateX(60px)":"none"};
`;Q.input`
  display: none;
`;var Ad={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=we,n=h5;function r(y){return y&&typeof y=="object"&&"default"in y?y:{default:y}}var i=r(t),o=function(){return o=Object.assign||function(y){for(var E,I=1,k=arguments.length;I<k;I++)for(var D in E=arguments[I])Object.prototype.hasOwnProperty.call(E,D)&&(y[D]=E[D]);return y},o.apply(this,arguments)};function a(y,E){var I={};for(var k in y)Object.prototype.hasOwnProperty.call(y,k)&&E.indexOf(k)<0&&(I[k]=y[k]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function"){var D=0;for(k=Object.getOwnPropertySymbols(y);D<k.length;D++)E.indexOf(k[D])<0&&Object.prototype.propertyIsEnumerable.call(y,k[D])&&(I[k[D]]=y[k[D]])}return I}function u(){var y=typeof window<"u"&&typeof window.devicePixelRatio=="number"?window.devicePixelRatio:1;return Math.min(Math.max(1,y),3)}typeof SuppressedError=="function"&&SuppressedError;var c=function(){function y(){}return y.prototype.observe=function(){},y.prototype.unobserve=function(){},y.prototype.disconnect=function(){},y}(),f=globalThis.ResizeObserver||c,v=globalThis.ResizeObserver!==void 0,b=!v;function x(y,E){E===void 0&&(E=!0);var I=t.useState({width:0,height:0}),k=I[0],D=I[1];t.useEffect(function(){if(typeof window<"u"&&E){var K=function(){D({width:window.innerWidth,height:window.innerHeight})};return b&&(K(),window.addEventListener("resize",K)),function(){return window.removeEventListener("resize",K)}}},[]);var R,O,G,q=t.useRef(new f((R=function(K){v&&D({width:K[K.length-1].contentRect.width,height:K[K.length-1].contentRect.height})},O=0,G=0,function(){for(var K=this,ee=[],ae=0;ae<arguments.length;ae++)ee[ae]=arguments[ae];clearTimeout(G),G=window.setTimeout(function(){return R.apply(K,ee)},O)})));return t.useEffect(function(){var K=q.current;if(E){var ee=y.current;return y.current&&v&&K.observe(y.current),function(){K.disconnect(),ee&&v&&K.unobserve(ee)}}K.disconnect()},[y,q]),k}var g={useDevicePixelRatio:!0,fitCanvasToArtboardHeight:!1,useOffscreenRenderer:!0,shouldResizeCanvasToContainer:!0};function S(y){return Object.assign({},g,y)}function w(y){var E=y.riveLoaded,I=E!==void 0&&E,k=y.canvasRef,D=y.containerRef,R=y.options,O=R===void 0?{}:R,G=y.onCanvasHasResized,q=y.artboardBounds,K=S(O),ee=t.useState({height:0,width:0}),ae=ee[0],le=ae.height,Re=ae.width,Ce=ee[1],ce=t.useState({height:0,width:0}),ie=ce[0],te=ie.height,xe=ie.width,$e=ce[1],Ee=t.useState(!0),_e=Ee[0],M=Ee[1],A=K.fitCanvasToArtboardHeight,T=K.shouldResizeCanvasToContainer,V=K.useDevicePixelRatio,N=K.customDevicePixelRatio,he=x(D,T),oe=function(Ne){var Ze=Ne||u(),Me=t.useState(Ze),st=Me[0],Lt=Me[1];return t.useEffect(function(){if(typeof window<"u"&&"matchMedia"in window){var it=function(){var Nn=Ne||u();Lt(Nn)},$t=window.matchMedia("screen and (resolution: ".concat(st,"dppx)"));return $t.hasOwnProperty("addEventListener")?$t.addEventListener("change",it):$t.addListener(it),function(){$t.hasOwnProperty("removeEventListener")?$t.removeEventListener("change",it):$t.removeListener(it)}}},[st,Ne]),st}(N),Se=q??{},Oe=Se.maxX,Pe=Se.maxY,Xe=t.useCallback(function(){var Ne,Ze,Me,st,Lt=(Ze=(Ne=D.current)===null||Ne===void 0?void 0:Ne.clientWidth)!==null&&Ze!==void 0?Ze:0,it=(st=(Me=D.current)===null||Me===void 0?void 0:Me.clientHeight)!==null&&st!==void 0?st:0;return A&&q?{width:Lt,height:Lt*(q.maxY/q.maxX)}:{width:Lt,height:it}},[D,A,Oe,Pe]);t.useEffect(function(){if(T&&D.current&&I){var Ne=Xe(),Ze=Ne.width,Me=Ne.height,st=!1;if(k.current){var Lt=Ze!==Re||Me!==le;if(K.fitCanvasToArtboardHeight&&Lt&&(D.current.style.height=Me+"px",st=!0),K.useDevicePixelRatio){if(Lt||Ze*oe!==xe||Me*oe!==te){var it=oe*Ze,$t=oe*Me;k.current.width=it,k.current.height=$t,k.current.style.width=Ze+"px",k.current.style.height=Me+"px",$e({width:it,height:$t}),st=!0}}else Lt&&(k.current.width=Ze,k.current.height=Me,$e({width:Ze,height:Me}),st=!0);Ce({width:Ze,height:Me})}G&&(_e||st)&&G&&G(),_e&&M(!1)}},[k,D,he,oe,Xe,_e,M,te,xe,le,Re,G,T,A,V,I])}function j(y){var E=y.setContainerRef,I=y.setCanvasRef,k=y.className,D=k===void 0?"":k,R=y.style,O=y.children,G=a(y,["setContainerRef","setCanvasRef","className","style","children"]),q=o({width:"100%",height:"100%"},R);return i.default.createElement("div",o({ref:E,className:D},!D&&{style:q}),i.default.createElement("canvas",o({ref:I,style:{verticalAlign:"top",width:0,height:0}},G),O))}function $(y,E){E===void 0&&(E={});var I=t.useRef(null),k=t.useRef(null),D=t.useState(null),R=D[0],O=D[1],G=!!y,q=S(E),K=t.useCallback(function(){R&&(R.startRendering(),R.resizeToCanvas())},[R]);w({riveLoaded:!!R,canvasRef:I,containerRef:k,options:q,onCanvasHasResized:K,artboardBounds:R?.bounds});var ee=t.useCallback(function(Ce){if(Ce&&y&&G){var ce=q.useOffscreenRenderer,ie=new n.Rive(o(o({useOffscreenRenderer:ce},y),{canvas:Ce}));ie.on(n.EventType.Load,function(){I.current?O(ie):ie.cleanup()})}else Ce===null&&I.current&&(I.current.height=0,I.current.width=0);I.current=Ce},[G]),ae=t.useCallback(function(Ce){k.current=Ce},[]);t.useEffect(function(){var Ce=new IntersectionObserver(function(ce){ce[0].isIntersecting?R&&R.startRendering():R&&R.stopRendering()});return I.current&&Ce.observe(I.current),function(){Ce.disconnect()}},[R]),t.useEffect(function(){return function(){R&&(R.cleanup(),O(null))}},[R]);var le=y?.animations;t.useEffect(function(){R&&le&&(R.isPlaying?(R.stop(R.animationNames),R.play(le)):R.isPaused&&(R.stop(R.animationNames),R.pause(le)))},[le,R]);var Re=t.useCallback(function(Ce){return i.default.createElement(j,o({setContainerRef:ae,setCanvasRef:ee},Ce))},[ee,ae]);return{canvas:I.current,container:k.current,setCanvasRef:ee,setContainerRef:ae,rive:R,RiveComponent:Re}}e.default=function(y){var E=y.src,I=y.artboard,k=y.animations,D=y.stateMachines,R=y.layout,O=y.useOffscreenRenderer,G=O===void 0||O,q=y.shouldDisableRiveListeners,K=q!==void 0&&q,ee=y.shouldResizeCanvasToContainer,ae=ee===void 0||ee,le=y.automaticallyHandleEvents,Re=le!==void 0&&le,Ce=y.children,ce=a(y,["src","artboard","animations","stateMachines","layout","useOffscreenRenderer","shouldDisableRiveListeners","shouldResizeCanvasToContainer","automaticallyHandleEvents","children"]),ie=$({src:E,artboard:I,animations:k,layout:R,stateMachines:D,autoplay:!0,shouldDisableRiveListeners:K,automaticallyHandleEvents:Re},{useOffscreenRenderer:G,shouldResizeCanvasToContainer:ae}).RiveComponent;return i.default.createElement(ie,o({},ce),Ce)},e.useResizeCanvas=w,e.useRive=$,e.useStateMachineInput=function(y,E,I,k){var D=t.useState(null),R=D[0],O=D[1];return t.useEffect(function(){function G(){if(y&&E&&I||O(null),y&&E&&I){var q=y.stateMachineInputs(E);if(q){var K=q.find(function(ee){return ee.name===I});k!==void 0&&K&&(K.value=k),O(K||null)}}else O(null)}G(),y&&y.on(n.EventType.Play,function(){G()})},[y]),R},Object.keys(n).forEach(function(y){y==="default"||e.hasOwnProperty(y)||Object.defineProperty(e,y,{enumerable:!0,get:function(){return n[y]}})})})(Ad);const AN=({src:e,entranceAnimation:t,exitAnimation:n,isActive:r,isExiting:i,animationHeight:o})=>{const a=we.useRef(null),{rive:u,RiveComponent:c}=Ad.useRive({src:e,autoplay:!1,layout:new Ad.Layout({fit:Ad.Fit.Contain,alignment:Ad.Alignment.TopCenter})});return we.useEffect(()=>{if(!u||!a.current)return;const f=new IntersectionObserver(v=>{v.forEach(b=>{b.isIntersecting?i&&n?u.play(n):r&&t&&(u.stop(),u.reset(),u.play(t)):(u.stop(),u.reset())})},{threshold:.2});return f.observe(a.current),()=>{f.disconnect()}},[r,i,u,t,n]),m.jsx("div",{ref:a,children:m.jsx(c,{style:{width:"1000px",height:o?o+"px":"600px"}})})},Iu=({slides:e,animationDuration:t=700,...n})=>{const[r,i]=we.useState(0),[o,a]=we.useState(null),[u,c]=we.useState(!1),[f,v]=we.useState(0),[b,x]=we.useState(0),g=we.useRef([]),S=we.useRef([]),w=we.useRef([]);we.useEffect(()=>{g.current=e.map((k,D)=>g.current[D]||null),S.current=e.map((k,D)=>S.current[D]||null),w.current=e.map((k,D)=>w.current[D]||null);const y=()=>{const k=Math.max(...g.current.filter(Boolean).map(O=>O?.offsetHeight??0)),D=Math.max(...w.current.filter(Boolean).map(O=>O?.offsetHeight??0)),R=k;k>0&&(v(R),x(D))};y();const E=new ResizeObserver(y);return[...g.current,...S.current,...w.current].forEach(k=>{k&&E.observe(k)}),()=>E.disconnect()},[e]);const j=y=>{u||(c(!0),a(r),setTimeout(()=>{i(y),a(null),c(!1)},t))},$=e.map((y,E)=>m.jsxs("div",{ref:I=>g.current[E]=I,children:[m.jsx(AN,{src:y.src,entranceAnimation:y.entranceAnimation,exitAnimation:y.exitAnimation,isActive:E===r,isExiting:E===o,animationHeight:y.animationHeight}),m.jsx("div",{ref:I=>S.current[E]=I,style:{height:b>0?`${b}px`:void 0,display:"flex",alignItems:"center",justifyContent:"center"},children:m.jsx("div",{ref:I=>w.current[E]=I,children:Array.isArray(y.content)?y.content.map((I,k)=>m.jsx("div",{children:I},k)):y.content})})]},`${y.src}-${E}`));return m.jsx(iN,{...n,content:$,loop:!1,startAt:0,fadeContent:!1,activeIndex:r,setActiveIndex:j,contentStyle:{height:f>0?`${f}px`:void 0}})},RN=xt`
  /* thai */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVhJx26TKEr37c9aBB5iXwJxArepzhN.woff2)
      format("woff2");
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVhJx26TKEr37c9aBB5knwJxArepzhN.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVhJx26TKEr37c9aBB5k3wJxArepzhN.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVhJx26TKEr37c9aBB5nXwJxArepw.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxQlgc_SjTjQJElti5.woff2)
      format("woff2");
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxQlgc5ijTjQJElti5.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxQlgc5yjTjQJElti5.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxQlgc6SjTjQJElg.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxJlkc_SjTjQJElti5.woff2)
      format("woff2");
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxJlkc5ijTjQJElti5.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxJlkc5yjTjQJElti5.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Sarabun";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVkJx26TKEr37c9aBBxJlkc6SjTjQJElg.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVjJx26TKEr37c9aAFJn3YO5gjupg.woff2)
      format("woff2");
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVjJx26TKEr37c9aBpJn3YO5gjupg.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVjJx26TKEr37c9aBtJn3YO5gjupg.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVjJx26TKEr37c9aBVJn3YO5gg.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YMptik8s6yLUrwB0lw.woff2)
      format("woff2");
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YMptilQs6yLUrwB0lw.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YMptilUs6yLUrwB0lw.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YMptilss6yLUrwA.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* thai */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YK5sik8s6yLUrwB0lw.woff2)
      format("woff2");
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }
  /* vietnamese */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YK5silQs6yLUrwB0lw.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YK5silUs6yLUrwB0lw.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Sarabun";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/sarabun/v15/DtVmJx26TKEr37c9YK5silss6yLUrwA.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkkaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxktaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkqaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkmaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxknaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkkaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxktaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkqaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkmaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxknaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkkaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxktaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkqaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkmaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
      U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323,
      U+0329, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxknaE0Urhg0xTY.woff2)
      format("woff2");
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF,
      U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Vollkorn";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/vollkorn/v23/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122,
      U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`,PN=Q3`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent scroll chaining and bounce effect */
html, body {
  overscroll-behavior-y: none;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
h1, h2, h3, h4,
button, input, label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

p, b, em {
  color: inherit;
  font-size: inherit;
}

/* Fonts */
${RN}
`,rt={accent1:"#FF6D22",accent2:"#BE0000",accent3:"#FF9900",accent4:"#FFE600",accent5:"#7D6A56",accent6:"#75787B",text:"#3C3C3C",button1:"#48BCFC",button1_shade:"#3A98CC",button2:"#FF9900",button2_shade:"#FF6D22",link:"#3A98CC",accent7:"#642219",accent8:"#B85140",accent9:"#ECE6B1",accent10:"#8D925C"},$N=""+new URL("../fonts/GothamHTF-Book.otf",import.meta.url).href,ON=""+new URL("../fonts/GothamHTF-Light.otf",import.meta.url).href,jN=""+new URL("../fonts/GothamHTF-Bold.otf",import.meta.url).href,IN=Q3`
/* Body */
  @font-face {
    font-family: "Gotham HTF";
    src: url(${$N}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }

/* Title */
  @font-face {
    font-family: "Gotham HTF Light";
    src: url(${ON}) format('opentype');
    font-weight: light;
    font-style: normal;
  }

  /* Bold */
  @font-face {
    font-family: "Gotham HTF Bold";
    src: url(${jN}) format('opentype');
    font-weight: bold;
    font-style: normal;
  }
`,LN=""+new URL("railflow_interactions_v2-7d05041b.riv",import.meta.url).href,UN=""+new URL("01_portal-login_v2-25ac104f.riv",import.meta.url).href;function or(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}function Qf({scrollTarget:e="section6",child:t}){const{rive:n,RiveComponent:r}=no.useRive({src:LN,stateMachines:"interactions",autoplay:!0,layout:new no.Layout({fit:no.Fit.Contain,alignment:no.Alignment.TopCenter})});return we.useEffect(()=>{if(n){try{requestAnimationFrame(()=>{if(!n.stateMachineInputs("interactions")?.length){console.warn("No Rive inputs found for interactions state machine");return}const o=a=>{if(a.type==="statechange")switch(a.data?.[0]){case"newbooking-click":or("CreateBookingStart");break;case"bookings_click":or("BookingsStart");break;case"departure-click":or("DepartureStart");break;case"truckslotbooking-click":or("TruckSlotBookingStart");break;case"truckslottrips-click":or("TruckSlotTripsStart");break;case"reporting-click":or("ReportingStart");break}};n.on(no.EventType.StateChange,o)})}catch(i){console.error("Error setting up Rive inputs:",i)}return()=>{n&&n.removeAllRiveEventListeners()}}},[n,e]),m.jsxs("div",{style:{position:"relative"},children:[m.jsx(r,{style:{width:"1000px",height:"650px"}}),t]})}function MN({scrollTarget:e}){const{rive:t,RiveComponent:n}=no.useRive({src:UN,stateMachines:"interactions",autoplay:!0,layout:new no.Layout({fit:no.Fit.Contain,alignment:no.Alignment.TopCenter})});return we.useEffect(()=>{if(t){try{requestAnimationFrame(()=>{if(!t.stateMachineInputs("interactions")?.length){console.warn("No Rive inputs found for interactions state machine");return}const i=o=>{if(o.type==="statechange")switch(o.data?.[0]){case"portallogin-click":or("railflow-home");break}};t.on(no.EventType.StateChange,i)})}catch(r){console.error("Error setting up Rive inputs:",r)}return()=>{t&&t.removeAllRiveEventListeners()}}},[t,e]),m.jsx(n,{style:{height:"550px"}})}function Zo(){const e=window.scrollY,t=window.innerHeight;window.scrollTo({top:e+t,behavior:"smooth"})}const xC={button:"25px",extrasmall:"18px",small:"20px",medium:"24px",large:"36px"},DN=Q(Xn)`
  // Add any Aurizon-specific styling overrides here
  line-height: 40px;
  letter-spacing: -1.2px;
  font-weight: 500;
  font-size: ${xC.medium};
  ${e=>e.size&&`font-size: ${xC[e.size]};`}

  b {
    font-family: "Gotham HTF Bold";
    font-weight: bold;
    letter-spacing: -0.96px;
  }
`,ze=e=>m.jsx(DN,{...e}),zr={divider:{path:"M1920 .22 1920 133.39 0 133.39 0 115.23 64.59 50.64 283.06 51.07 217.83 116.3 381.32 116.3 473.36 24.26 564.48 115.39 565.39 116.3 684.92 116.3 752.83 48.39 820.74 116.3 1262.43 116.3 1157.2 11.07 1375.66 10.64 1480.41 115.39 1480.42 115.39 1479.51 116.3 1481.33 116.3 1480.42 115.39 1571.55 24.26 1663.59 116.3 1803.48 116.3 1919.78 0 Z",viewBox:"0 0 1920 133.39"}},FN=Nr`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
`,zN=Q.div`
  position: absolute;
  top: ${e=>e.top||"50%"};
  left: -20px;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.2));
  animation: ${FN} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  will-change: transform;
`,jh=({top:e})=>m.jsx(zN,{top:e,children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:m.jsx("path",{d:"M2.08869e-09 23.024L12.2084 23.0479L23.5 11.1395L23.4911 11.1306L23.5 11.1218L12.2084 3.33451e-05L2.01282e-06 0.0239237L11.2766 11.1306L2.08869e-09 23.024Z",fill:"#FFEC40"})})}),Nv=""+new URL("cover-4562bb16.png",import.meta.url).href,wC=""+new URL("intro-1-08f49397.png",import.meta.url).href,ky=""+new URL("bg-motif-1-b4cc4d77.png",import.meta.url).href,za=""+new URL("bg-motif-2-8ef4630e.png",import.meta.url).href,_C=""+new URL("dropdown-1-ed0eb383.svg",import.meta.url).href,bC=""+new URL("dropdown-2-9c1e9b23.svg",import.meta.url).href,SC=""+new URL("dropdown-3-8de4a584.svg",import.meta.url).href,CC=""+new URL("dropdown-4-628b13ab.svg",import.meta.url).href,kC=""+new URL("dropdown-5-b17f36cc.svg",import.meta.url).href,Ey=""+new URL("arrow-4f39fc42.svg",import.meta.url).href,Ty=""+new URL("arrow-hover-1a3b4eb1.svg",import.meta.url).href,To=Q(Ig)`
  border-radius: 30px;

  > div {
    font-family: "Gotham HTF";
  }
  &:hover {
    box-shadow: none;
    background: #3a98cc;
    bottom: 0px;
  }
`,BN=Q.div`
  background: ${e=>e.theme.color.background} !important;
`,es=Q.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;
`,NN=m.jsxs(BN,{children:[m.jsx(Sl,{imageUrls:[Nv,wC,ky,za,_C,bC,SC,CC,kC,Ey,Ty]}),m.jsxs(pn,{style:{position:"relative",zIndex:11},children:[m.jsx(Sl,{imageUrls:[Nv]}),m.jsx(Ps,{src:Nv}),m.jsxs(Qt,{auto:!0,width:70,maxWidth:1200,children:[m.jsx(Sn,{children:m.jsx(ze,{center:!0,style:{color:"white",fontSize:"44px"},children:"Welcome to"})}),m.jsx(Sn,{delay:.75,children:m.jsx(ze,{center:!0,style:{color:"white",fontSize:"100px",paddingTop:"40px"},children:"Rail-Flow"})}),m.jsx(qo,{delay:1.2,direction:"none",children:m.jsx(To,{onClick:()=>or("section1"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Begin"})})]})]}),m.jsxs(pn,{id:"section1",children:[m.jsx(Wi,{src:ky}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1350,children:m.jsx(VD,{imageUrl:wC,hideDivider:!0,orientation:"right",text:[m.jsxs(ze,{children:[m.jsx("b",{children:"Rail-Flow"})," is a system designed to make booking trains"," ",m.jsx("b",{children:"easier"}),", ",m.jsx("b",{children:"faster"}),", and ",m.jsx("b",{children:"clearer"}),"."]}),m.jsx(ze,{children:"This training covers everything you need to know to make and manage container bookings with Rail-Flow."}),m.jsx(ze,{style:{marginBottom:"40px"},children:"If you are a returning user, you can use the menu on the left to skip ahead to any section."}),m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"160",height:"23",viewBox:"0 0 160 23",fill:"none",children:m.jsx("path",{d:"M0.93934 10.4393C0.353553 11.0251 0.353553 11.9749 0.93934 12.5607L10.4853 22.1066C11.0711 22.6924 12.0208 22.6924 12.6066 22.1066C13.1924 21.5208 13.1924 20.5711 12.6066 19.9853L4.12132 11.5L12.6066 3.01472C13.1924 2.42893 13.1924 1.47919 12.6066 0.893398C12.0208 0.307611 11.0711 0.307611 10.4853 0.893398L0.93934 10.4393ZM160 10H2V13H160V10Z",fill:"#3C3C3C"})})]})}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo(),arrowColor:rt.accent1})})]}),m.jsx(pn,{noTopPadding:!0,noBottomPadding:!0,style:{zIndex:12,position:"relative"},children:m.jsx(ND,{host:"wistia",id:"db1nbhiaie"})}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:11},children:[m.jsx(Wi,{src:za,offset:-160,fixedDuration:"250%"}),m.jsx(Qt,{auto:!0,width:75,maxWidth:900,children:m.jsx(Sn,{children:m.jsx(ze,{bold:!0,center:!0,style:{color:"white"},children:"Before we walk through how to make a booking, let’s look at a few key principles for operating Rail-Flow."})})}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"white",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{justifyContent:"flex-start",style:{position:"relative",zIndex:12,background:"white"},children:[m.jsxs(Qt,{auto:!0,width:100,maxWidth:950,children:[m.jsx(ze,{center:!0,children:"In order to make a complete booking with Rail-Flow, there are five key pieces of information that the system needs."}),m.jsx(ze,{size:"extrasmall",center:!0,style:{margin:"30px auto"},children:"Click on each icon to learn more."})]}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1380,style:{paddingTop:"30px",paddingBottom:"60px"},children:m.jsx(_A,{useColumnLayout:!0,allowMultipleExpands:!0,columnStyle:{gap:"25px"},dropdownStyle:{background:"white",backgroundHover:rt.accent1,backgroundSelected:rt.accent1,padding:"8px 10px 15px",borderRadius:"13px",hoverStyle:{img:{filter:"brightness(0) invert(1)"}},activeStyle:{transition:"box-shadow ease-in 0.2s 0.2s",boxShadow:"-10px 10px 0px 0px rgba(255, 109, 34, 0.34)",borderRadius:"13px 13px 0px 0px !important",padding:"8px 10px 10px !important",img:{filter:"brightness(0) invert(1)"}},useArrowBelow:!0,arrowStyle:{background:`url(${Ey}) no-repeat center center`,height:"30px"},arrowHoverStyle:{background:`url(${Ty}) no-repeat center center`,height:"30px"},arrowActiveStyle:{display:"none"}},titleStyle:{paddingBottom:"0px",color:rt.accent6,textHoverColor:"white",textActiveColor:"white"},contentStyle:{background:"white",border:`solid 2px ${rt.accent1}`,position:"relative",zIndex:1,padding:"0px 10px 7px ",boxShadow:"-10px 9.7px 0px 0px rgba(255, 109, 34, 0.34)",transition:"all ease-in-out 1.3s 1.4s forwards",borderRadius:"0px 0px 13px 13px",textAlign:"center",height:"fit-content",minHeight:"130px",textStyle:{fontSize:"18px"}},contents:[{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:_C}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"Truck Slot Dropoff"})]}),body:"The date and time you book for a truck to deliver your container to an Aurizon yard."},{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:bC}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"Loading Date"})]}),body:"The date you would like your container to be loaded onto a train to begin its journey."},{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:SC}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"Origin"})]}),body:"The starting location of the first train your container is booked on."},{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:CC}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"Destination"})]}),body:"The ending location of the final train your container is booked on."},{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:kC}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"Truck Slot Pickup"})]}),body:"The date and time you book for a truck to collect your container from its destination."}]})}),m.jsxs(Qt,{auto:!0,width:100,maxWidth:950,children:[m.jsx(ze,{center:!0,children:"With these five pieces of information, Rail-Flow can plan a journey to get your container from your Origin to your Destination."}),m.jsxs(ze,{center:!0,children:["Rail-Flow will automatically select the most efficient route to deliver your container within a reasonable amount of time (this is the"," ",m.jsx("b",{children:"achievement date"}),")."]}),m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section2"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Continue"})})]})]})]}),Wv=""+new URL("bg-motif-3-96e9b982.png",import.meta.url).href,EC=""+new URL("container-intro-7c08b74d.png",import.meta.url).href,TC=""+new URL("container-slide-1-544dd2fc.png",import.meta.url).href,AC=""+new URL("container-slide-2-cf940457.png",import.meta.url).href,RC=""+new URL("container-slide-3-e989297f.png",import.meta.url).href,PC=""+new URL("container-slide-4-bd4b47f5.png",import.meta.url).href,$C=""+new URL("container-slide-5-79f457fd.png",import.meta.url).href,OC=""+new URL("container-slide-6-8bc448d2.png",import.meta.url).href,jC=""+new URL("container-slide-7-127f420a.png",import.meta.url).href,IC=""+new URL("dropdown-1-ca723746.svg",import.meta.url).href,LC=""+new URL("dropdown-2-07e31b1e.svg",import.meta.url).href,UC=""+new URL("dropdown-3-d42a7168.svg",import.meta.url).href,Hv=""+new URL("02_railflow-16d4ef21.riv",import.meta.url).href,kp=""+new URL("04_railflow-bee37602.riv",import.meta.url).href,WN=""+new URL("05_railflow-6622339e.riv",import.meta.url).href,MC=Q.div`
  position: absolute;
  height: inherit;
  min-height: inherit;
  left: 0;
  right: 0;
  top: 0;

  mask-image: linear-gradient(to bottom, black 0%, black 99%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 99%,
    transparent 100%
  );
`,HN=Q.div``,VN=m.jsxs(HN,{id:"section2",children:[m.jsx(Sl,{imageUrls:[Wv,EC,TC,AC,RC,PC,$C,OC,jC,IC,LC,UC,Hv,kp,WN]}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:10},justifyContent:"flex-start",children:[m.jsx(MC,{children:m.jsx(Wi,{src:za,offset:-150,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:900,children:[m.jsx(Sn,{children:m.jsx(ze,{center:!0,style:{color:"white",marginBottom:"20px"},children:"Let’s start by logging into the Customer Portal."})}),m.jsx(MN,{})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"white",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{id:"railflow-home",style:{background:"white",position:"relative",zIndex:9},children:[m.jsx(Ps,{src:ky,style:{zIndex:10}}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1300,children:m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},slides:[{src:Hv,entranceAnimation:"2_Railflow-State01",exitAnimation:"2.5_Railflow-State01-02 Transition",content:[m.jsxs(ze,{center:!0,children:["When you log in, you'll land on the ",m.jsx("b",{children:"home page"}),"."]}),m.jsxs(ze,{center:!0,children:["From here, you can navigate the site using the panel on the"," ",m.jsx("b",{children:"left"}),". Click on the ",m.jsx("b",{children:"top left corner"})," to expand the panel. From here, you can navigate to specific pages. This training will cover off each page on this menu."]})]},{src:Hv,entranceAnimation:"3_Railflow-State02",content:[m.jsxs(ze,{center:!0,children:["At the top of your home page you can view your bookings by"," ",m.jsx("b",{children:"status"}),"."]}),m.jsxs(ze,{center:!0,children:["Understanding the ",m.jsx("b",{children:"operational status"})," is key to navigating your bookings. There will be changes you can or can't make to your booking based on the status."]})]}]})})]}),m.jsxs(pn,{style:{position:"relative",zIndex:10,background:rt.accent1},children:[m.jsx(MC,{children:m.jsx(Wi,{src:za,offset:-450,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:900,children:[m.jsx(Sn,{direction:"none",children:m.jsx(Ut,{src:EC})}),m.jsxs(Sn,{delay:.8,children:[m.jsx(ze,{center:!0,bold:!0,style:{color:"white",marginBottom:"20px",marginTop:"30px"},children:"An operational status is assigned to each booking to show where on its journey the container currently is."}),m.jsx(ze,{center:!0,style:{color:"white"},children:"Let’s look at each of the statuses along a container booking’s journey."})]})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"#FFE5BF",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{style:{background:"#FFE5BF",position:"relative",zIndex:9},children:[m.jsx(Wi,{src:Wv,offset:-150}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1300,children:m.jsxs(DB,{enablePageDots:!0,contentStyle:{useCrossFade:!0,margin:"auto",alignItems:"flex-start",alignItemsMobile:"flex-start"},navStyle:{background:"rgba(0, 0, 0, 0)",backgroundHover:"rgba(0, 0, 0, 0)",buttonSize:"60px",iconColor:rt.button2,iconColorHover:rt.button1,offsetIconLeft:"0%",offsetIconRight:"0%"},pageDotStyle:{background:"#fff",backgroundHover:rt.button2,backgroundActive:rt.accent1,defaultStyle:{zoom:1.4,margin:"0 4px"}},unlockedContent:m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("issues"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Continue"})}),children:[m.jsxs("div",{className:"fade-cell",children:[m.jsx(Ut,{src:TC}),m.jsxs("div",{style:{padding:"30px 40px"},children:[m.jsx(ze,{center:!0,children:"The booking has been assigned a specific slot on each wagon along its journey."}),m.jsx(ze,{center:!0,children:"Rail-Flow accounts for any waste or dangerous goods containers that might need to be separated from each other on the same train. Once a booking is Preloaded, these conditions can no longer be added to a booking."})]})]}),m.jsxs("div",{className:"fade-cell",children:[m.jsx(Ut,{src:AC}),m.jsx("div",{style:{padding:"30px 40px"},children:m.jsx(ze,{center:!0,children:"The container has arrived at the origin terminal on its booked delivery truck."})})]}),m.jsxs("div",{className:"fade-cell",children:[m.jsx(Ut,{src:RC}),m.jsx("div",{style:{padding:"30px 40px"},children:m.jsx(ze,{center:!0,children:"The container has been successfully loaded onto the train."})})]}),m.jsxs("div",{className:"fade-cell",children:[m.jsx(Ut,{src:PC}),m.jsx("div",{style:{padding:"30px 40px"},children:m.jsx(ze,{center:!0,children:"The train carrying the container has left the terminal."})})]}),m.jsxs("div",{className:"fade-cell",children:[m.jsx(Ut,{src:$C}),m.jsx("div",{style:{padding:"30px 40px"},children:m.jsx(ze,{center:!0,children:"The container has arrived at its destination terminal."})})]}),m.jsxs("div",{className:"fade-cell",children:[m.jsx(Ut,{src:OC}),m.jsx("div",{style:{padding:"30px 40px"},children:m.jsx(ze,{center:!0,children:"The container has been taken off the train and is ready for collection."})})]}),m.jsxs("div",{className:"fade-cell",children:[m.jsx(Ut,{src:jC}),m.jsx("div",{style:{padding:"30px 40px"},children:m.jsx(ze,{center:!0,children:"The container has been picked up from the destination terminal."})})]})]})})]}),m.jsxs(pn,{id:"issues",justifyContent:"flex-start",style:{position:"relative",zIndex:9,background:"white"},children:[m.jsxs(Qt,{auto:!0,width:100,maxWidth:950,children:[m.jsx(ze,{center:!0,children:"Along with the operational status progress, there are three additional statuses that identify the progress of your container booking. Status icons are displayed in the left hand column of the booking detail row."}),m.jsx(ze,{size:"extrasmall",center:!0,style:{margin:"30px auto"},children:"Click on each icon to learn more."})]}),m.jsx(Qt,{auto:!0,width:100,maxWidth:900,style:{paddingTop:"30px",paddingBottom:"60px"},children:m.jsx(_A,{useColumnLayout:!0,allowMultipleExpands:!0,columnStyle:{gap:"25px"},dropdownStyle:{background:"white",backgroundHover:rt.accent1,backgroundSelected:rt.accent1,padding:"8px 10px 15px",borderRadius:"13px",hoverStyle:{img:{filter:"brightness(0) invert(1)"}},activeStyle:{transition:"box-shadow ease-in 0.2s 0.2s",boxShadow:"-10px 10px 0px 0px rgba(255, 109, 34, 0.34)",borderRadius:"13px 13px 0px 0px !important",padding:"8px 10px 10px !important",img:{filter:"brightness(0) invert(1)"}},useArrowBelow:!0,arrowStyle:{background:`url(${Ey}) no-repeat center center`,height:"30px"},arrowHoverStyle:{background:`url(${Ty}) no-repeat center center`,height:"30px"},arrowActiveStyle:{display:"none"}},titleStyle:{paddingBottom:"0px",color:rt.accent6,textHoverColor:"white",textActiveColor:"white"},contentStyle:{background:"white",border:`solid 2px ${rt.accent1}`,position:"relative",zIndex:1,padding:"0px 10px 7px ",boxShadow:"-10px 9.7px 0px 0px rgba(255, 109, 34, 0.34)",transition:"all ease-in-out 1.3s 1.4s forwards",borderRadius:"0px 0px 13px 13px",textAlign:"center",textStyle:{fontSize:"18px"}},contents:[{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:IC}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"New"})]}),body:"Rail-Flow can’t find a route between your origin and destination that meets a reasonable achievement date."},{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:LC}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"Incomplete"})]}),body:"The booking is missing some information required to progress."},{title:m.jsxs("div",{children:[m.jsx(Ut,{center:!0,src:UC}),m.jsx(ze,{bold:!0,inheritColor:!0,children:"Planned"})]}),body:"Planned status indicates the container booking has been planned to a service and is awaiting safe loading validation."}]})}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo(),arrowColor:rt.accent1})}),m.jsx(Da,{fill:"#FFE5BF",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{style:{background:"#FFE5BF",position:"relative",zIndex:8},children:[m.jsx(Wi,{src:Wv,offset:-150}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1300,children:m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},unlockedContent:m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section3"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Next Section"})}),slides:[{src:kp,entranceAnimation:"4_Railflow-State01",exitAnimation:"none",content:[m.jsxs(ze,{center:!0,style:{height:"100%"},children:["The table in the ",m.jsx("b",{children:"middle"})," of your screen shows your"," ",m.jsx("b",{children:"current active bookings"}),"."]})]},{src:kp,entranceAnimation:"5_Railflow-State02",exitAnimation:"5.5_Railflow-State02-3 Transition",content:[m.jsxs(ze,{center:!0,style:{height:"100%"},children:["All tables in Rail-Flow can be changed to display your preferred view. You can ",m.jsx("b",{children:"add"}),", ",m.jsx("b",{children:"remove"}),", and"," ",m.jsx("b",{children:"rearrange"})," the columns to show you the most helpful information. Save the arrangement as a ",m.jsx("b",{children:"report"})," to see your customised view every time you log in to Rail-Flow."]})]},{src:kp,entranceAnimation:"6_Railflow-State03",exitAnimation:"none",content:[m.jsx(ze,{center:!0,style:{height:"100%"},children:"At the bottom of this page, you will see information about upcoming train departures. When you select a booking, this map will show you the status of your containers from the point of gate-in."})]}]})})]})]}),DC=""+new URL("icon-intro-e17be7c0.svg",import.meta.url).href,FC=""+new URL("icon-home-772144d9.svg",import.meta.url).href,zC=""+new URL("icon-create-booking-dba931ab.svg",import.meta.url).href,BC=""+new URL("icon-manage-booking-bf970798.svg",import.meta.url).href,NC=""+new URL("icon-truck-slot-booking-73d2ea28.svg",import.meta.url).href,WC=""+new URL("icon-truck-slot-trips-7a4ecf09.svg",import.meta.url).href,HC=""+new URL("icon-departure-8d03b10e.svg",import.meta.url).href,VC=""+new URL("icon-reporting-f358ff19.svg",import.meta.url).href,yc=""+new URL("bg-motif-5-ecade228.png",import.meta.url).href,GC=""+new URL("bg-motif-6-c78d5d70.png",import.meta.url).href,Wd=""+new URL("bg-motif-4-be4f26b8.png",import.meta.url).href,YC=""+new URL("section-conclusion-46eb7041.png",import.meta.url).href,XC=""+new URL("rail-flow-icons-4e21bbb2.png",import.meta.url).href,KC=""+new URL("hover-interaction-a17c7081.png",import.meta.url).href,qc=""+new URL("07_newbookpage-d6889dc7.riv",import.meta.url).href,qC=""+new URL("12_newbookpage-state06-f494fa16.riv",import.meta.url).href,QC=""+new URL("13_newbookpage-state07-b4e72fd0.riv",import.meta.url).href,JC=""+new URL("14_newbookpage-state08-09e2166a.riv",import.meta.url).href,ZC=""+new URL("15_newbookpage-state09-a347e132.riv",import.meta.url).href,Vv=Q.div`
  position: absolute;
  height: inherit;
  min-height: inherit;
  left: 0;
  right: 0;
  top: 0;

  mask-image: linear-gradient(to bottom, black 0%, black 99%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 99%,
    transparent 100%
  );
`,GN=Q.div``,YN=Q.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-top: 90px;
`,Jr=Q.div`
  position: absolute;
  width: 315px;
  height: 30px;
  cursor: pointer;
  /* Uncomment to see hotspots during development */
   background: rgba(72, 188, 252, 0.2); */
`,gi=Q(ze)`
  line-height: 23px;
  font-size: 20px;
  color: white;
  padding: 0;
  text-align: left;
  em {
    margin-right: 2px;
  }
`,mi=Q.div`
  visibility: hidden;
  position: absolute;
  background-color: ${rt.accent1};
  color: white;
  text-align: center;
  padding: 8px 12px;
  border-radius: 6px;
  width: max-content;
  max-width: 450px;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(50%) scale(0.5);
  margin-bottom: 8px;
  z-index: 100;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  /* Triangle pointer */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: ${rt.accent1} transparent transparent transparent;
  }

  ${Jr}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`,XN=m.jsxs(GN,{id:"section3",children:[m.jsx(Sl,{imageUrls:[Wd,yc,GC,YC,XC,KC,qc,qC,QC,JC,ZC]}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:10},justifyContent:"flex-start",children:[m.jsx(Vv,{children:m.jsx(Wi,{src:za,offset:-150,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1150,children:[m.jsxs(Sn,{children:[m.jsx(ze,{center:!0,style:{color:"white"},children:"Now that you’re familiar with the layout of the home page, let’s make a booking together."}),m.jsxs(ze,{center:!0,style:{color:"white",marginBottom:"20px"},children:["To get started making your first booking, click on the"," ",m.jsx("b",{children:"New Booking"})," button in the top right."]})]}),m.jsx(Qf,{})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"#EDEEEE",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{id:"CreateBookingStart",justifyContent:"center",style:{position:"relative",zIndex:9,background:"#EDEEEE"},children:[m.jsx(Vv,{children:m.jsx(Wi,{src:Wd,offset:-450,fixedDuration:"300%"})}),m.jsx(Qt,{auto:!0,maxWidth:1200,children:m.jsx(Sn,{direction:"none",children:m.jsx(Ut,{src:XC})})}),m.jsx(Qt,{auto:!0,width:75,maxWidth:950,children:m.jsxs(Sn,{delay:.8,children:[m.jsxs(ze,{center:!0,style:{marginBottom:"20px",marginTop:"30px"},children:["When you create a booking, Rail-Flow will use your information to plan your container’s journey, starting from your"," ",m.jsx("b",{children:"Loading Date"})," (or as close as possible), leaving from your chosen ",m.jsx("b",{children:"Origin"}),", and ending at your chosen ",m.jsx("b",{children:"Destination"}),"."]}),m.jsxs(ze,{center:!0,children:["Rail-Flow will use this information to calculate an"," ",m.jsx("b",{children:"achievement date"})," - the date that it expects your container to arrive at its destination."]})]})}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo(),arrowColor:rt.accent1})})]}),m.jsxs(pn,{style:{position:"relative",zIndex:9},children:[m.jsx(Ps,{src:yc,style:{zIndex:10}}),m.jsxs(Qt,{auto:!0,width:100,maxWidth:1300,children:[m.jsx(ze,{center:!0,size:"large",style:{fontWeight:300,marginBottom:"40px"},children:"Adding Booking Information"}),m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},unlockedContent:m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("hover-fields"),buttonStyle:{margin:"auto",marginTop:"0px",textTransform:"none"},children:"Continue"})}),slides:[{src:qc,entranceAnimation:"7_NewBookPage-state01",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["At the top of the ",m.jsx("b",{children:"New Booking"})," page you will find some required details about your booking, such as the"," ",m.jsx("b",{children:"booking type"}),", your ",m.jsx("b",{children:"origin"})," and ",m.jsx("b",{children:"destination"}),", and who will be sending and ",m.jsx("b",{children:"receiving"})," your container."]})]},{src:qc,entranceAnimation:"8_NewBookPage-state02",exitAnimation:"8.5_NewBookPage-state02-3 Transition",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["In the middle are checkboxes that allow you to nominate any"," ",m.jsx("b",{children:"special conditions"})," of your container, such as"," ",m.jsx("b",{children:"dangerous goods"}),", ",m.jsx("b",{children:"waste"}),", or is"," ",m.jsx("b",{children:"temperature controlled"}),"."]}),m.jsxs(ze,{center:!0,children:["If you tick one of these options, additional fields will be added at the ",m.jsx("b",{children:"bottom"})," of the page for you to provide further information."]})]},{src:qc,entranceAnimation:"9_NewBookPage-state03",exitAnimation:"9.5_NewBookPage-state03-4 Transition",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["In the centre are fields related to the container you are booking, like the ",m.jsx("b",{children:"container type"}),","," ",m.jsx("b",{children:"container number"}),", and its ",m.jsx("b",{children:"gross weight"}),". Some fields will be automatically populated based on your other responses."]}),m.jsx(ze,{center:!0,children:"If the container number you enter has been used previously, the container type will be updated to reflect previous bookings."})]},{src:qc,entranceAnimation:"10_NewBookPage-state04",exitAnimation:"none",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["At the bottom of the page is a table for providing additional information about your booking (if there are"," ",m.jsx("b",{children:"dangerous goods"})," for example)."]})]},{src:qc,entranceAnimation:"11_NewBookPage-state05",exitAnimation:"none",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["In this section you will enter the"," ",m.jsx("b",{children:"type of dangerous goods"})," you’re moving, the"," ",m.jsx("b",{children:"type of waste"}),", or the ",m.jsx("b",{children:"temperature requirements"})," ","depending on your choice."]})]},{src:qC,entranceAnimation:"12_NewBookPage-state06",exitAnimation:"none",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["Once you've added this information, you may need to"," ",m.jsx("b",{children:"add documents"}),". If you select Waste, that is also a Dangerous Good, you will need to ensure you have ticked both Waste and DG, and provide the required documents for both."," ",m.jsx("em",{children:"This is a requirement for dangerous goods and waste bookings."})]}),m.jsx(ze,{bold:!0,center:!0,children:"Ensure you provide the correct document, and document type."})]}]})]})]}),m.jsxs(pn,{style:{position:"relative",zIndex:9},id:"hover-fields",children:[m.jsx(Ps,{src:GC,style:{zIndex:10}}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1200,children:[m.jsxs(Sn,{delay:.8,children:[m.jsx(ze,{center:!0,children:"Unsure of what you’re being asked to place in a field?"}),m.jsxs(ze,{center:!0,noPadding:!0,children:["Try ",m.jsx("b",{children:"hovering"})," over the fields below for more information."]})]}),m.jsxs(YN,{children:[m.jsx(Ut,{src:KC}),m.jsx(Jr,{style:{top:"5.4%",left:"3%",width:"478px"},children:m.jsx(mi,{children:m.jsxs(gi,{children:[m.jsx("b",{children:"Booking Type"})," refers to whether this booking is staying within Australia (",m.jsx("em",{children:"Domestic"}),") or if it’s being received or dispatched via a port (",m.jsx("em",{children:"Import/Export"}),")."]})})}),m.jsx(Jr,{style:{top:"5.4%",left:"48.2%",width:"410px"},children:m.jsx(mi,{children:m.jsxs(gi,{children:[m.jsx("b",{children:"Customer"})," will ",m.jsx("em",{children:"auto populate"})," based on your personal login."]})})}),m.jsx(Jr,{style:{top:"13.6%",left:"3%",width:"478px"},children:m.jsx(mi,{children:m.jsxs(gi,{children:[m.jsx("b",{children:"Origin"})," is the Aurizon terminal where your container starts its journey."]})})}),m.jsx(Jr,{style:{top:"13.6%",left:"48.2%",width:"410px"},children:m.jsx(mi,{children:m.jsxs(gi,{children:[m.jsx("b",{children:"Destination"})," is the Aurizon terminal where you wanted your container delivered."]})})}),m.jsx(Jr,{style:{top:"21.7%",left:"3%"},children:m.jsx(mi,{style:{maxWidth:"320px"},children:m.jsxs(gi,{children:[m.jsx("b",{children:"Sender"})," is the business unit who is initiating/paying for the container journey."]})})}),m.jsx(Jr,{style:{top:"21.7%",left:"33.1%"},children:m.jsx(mi,{style:{maxWidth:"330px"},children:m.jsxs(gi,{children:[m.jsx("b",{children:"Receiver"})," is the business unit who will be responsible for collecting the container from the ",m.jsx("em",{children:"Destination"}),"."]})})}),m.jsx(Jr,{style:{top:"21.7%",left:"63.1%",width:"250px"},children:m.jsx(mi,{children:m.jsxs(gi,{children:[m.jsx("b",{children:"Priority"})," tells us which of ",m.jsx("em",{children:"your containers"})," ","Aurizon should prioritise over your other containers. This does not change the priority of your booking between Aurizon customers. It’s specific to you."]})})}),m.jsx(Jr,{style:{top:"41.1%",left:"3%",width:"478px"},children:m.jsx(mi,{children:m.jsxs(gi,{children:["If you have a preferred way to reference your booking, you can put that in the ",m.jsx("b",{children:"Reference"})," box."]})})}),m.jsx(Jr,{style:{top:"41.1%",left:"48.2%",width:"250px"},children:m.jsx(mi,{style:{maxWidth:"340px"},children:m.jsxs(gi,{children:[m.jsx("b",{children:"Loading Date"})," is the date you would like your container to be loaded onto a train to begin its journey."]})})}),m.jsx(Jr,{style:{top:"49%",left:"3%"},children:m.jsx(mi,{style:{maxWidth:"330px"},children:m.jsxs(gi,{children:[m.jsx("b",{children:"Container Type"})," is the ",m.jsx("em",{children:"size"})," of the container being booked."]})})}),m.jsx(Jr,{style:{top:"49%",left:"33.1%"},children:m.jsx(mi,{children:m.jsxs(gi,{children:["Your ",m.jsx("b",{children:"Container Number"})," will be recognised from previous bookings and will"," ",m.jsx("em",{children:"automatically update the Container Type"})," based on previous travel."]})})}),m.jsx(Jr,{style:{top:"49%",left:"63.1%",width:"250px"},children:m.jsx(mi,{style:{maxWidth:"325px"},children:m.jsxs(gi,{children:["If this container journey requires a seal, record the"," ",m.jsx("b",{children:"seal number"})," here."]})})}),m.jsx(Jr,{style:{top:"57.3%",left:"3%"},children:m.jsx(mi,{style:{maxWidth:"380px"},children:m.jsxs(gi,{children:["The ",m.jsx("b",{children:"Tare Weight"})," of your container is the container’s weight without any contents."," ",m.jsx("em",{children:"This is generated automatically based on your container type."})]})})}),m.jsx(Jr,{style:{top:"57.3%",left:"33.1%"},children:m.jsx(mi,{style:{maxWidth:"410px"},children:m.jsxs(gi,{children:["The ",m.jsx("b",{children:"Gross Weight"})," of your container is your total declared weight, including contents. After gate-in this weight will"," ",m.jsx("em",{children:"automatically update"})," to reflect actual weight."]})})}),m.jsx(Jr,{style:{top:"57.3%",left:"63.1%",width:"250px"},children:m.jsx(mi,{style:{maxWidth:"410px"},children:m.jsxs(gi,{children:[m.jsx("b",{children:"Booked Weight"})," will ",m.jsx("em",{children:"auto update"})," from your declared Gross Weight. Once your container has been gated-in, the Booked Weight will be frozen, providing a static view of your declared Gross Weight."]})})}),m.jsx(Jr,{style:{top:"67%",left:"3%",width:"54px"},children:m.jsx(mi,{style:{maxWidth:"390px"},children:m.jsxs(gi,{children:["The line items in the ",m.jsx("b",{children:"Goods"})," Tab contains the commodity type. For example, GENL (",m.jsx("em",{children:"general"}),") / DG SLOAD (",m.jsx("em",{children:"Dangerous Goods"}),") / REEF (",m.jsx("em",{children:"Refrigerated Cargo"}),")."]})})}),m.jsx(Jr,{style:{top:"67%",left:"15.5%",width:"80px"},children:m.jsx(mi,{children:m.jsxs(gi,{children:["The ",m.jsx("b",{children:"Documents"})," Tab is where you upload all documentation for your container booking. For example,"," ",m.jsx("em",{children:"Mandatory DG and Waste documents"}),"."]})})})]})]})]}),m.jsxs(pn,{style:{background:"white",position:"relative",zIndex:9},children:[m.jsx(Ps,{src:yc,style:{zIndex:10}}),m.jsxs(Qt,{auto:!0,width:100,maxWidth:1300,children:[m.jsx(ze,{center:!0,size:"large",style:{fontWeight:300,marginBottom:"40px"},children:"Completing Your Booking"}),m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},unlockedContent:m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section3End"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Continue"})}),slides:[{src:QC,entranceAnimation:"13_NewBookPage-state07",exitAnimation:"13_NewBookPage-state07to08",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["When you’re done, press ",m.jsx("b",{children:"Create"})," to initiate your booking request."]})]},{src:JC,entranceAnimation:"14_NewBookPage-state08",exitAnimation:"14_NewBookPage-state08to09",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["Now that your booking is created, you'll see an"," ",m.jsx("b",{children:"overview"})," of your container booking on the right side of the screen. It shows your ",m.jsx("b",{children:"booking number"}),","," ",m.jsx("b",{children:"operational status"})," and ",m.jsx("b",{children:"slot type"}),"."]})]},{src:ZC,entranceAnimation:"15_NewBookPage-state09",animationHeight:450,content:[m.jsxs(ze,{center:!0,children:["Your new booking will also update to show the"," ",m.jsx("b",{children:"logistics flow"})," tab at the ",m.jsx("b",{children:"bottom"}),". It contains a map that highlights the route from ",m.jsx("b",{children:"origin"})," (O) to"," ",m.jsx("b",{children:"destination"})," (D), including any"," ",m.jsx("b",{children:"train change points"})," (T)."]})]}]})]})]}),m.jsxs(pn,{style:{position:"relative",zIndex:10,background:"#EDEEEE"},id:"section3End",children:[m.jsx(Vv,{children:m.jsx(Wi,{src:Wd,offset:-450,fixedDuration:"300%"})}),m.jsx(Qt,{auto:!0,width:75,maxWidth:1160,children:m.jsx(Sn,{direction:"none",children:m.jsx(Ut,{src:YC})})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:900,children:[m.jsx(Sn,{delay:.8,children:m.jsxs(ze,{center:!0,children:["Now that you've created your container booking, let's look at how can you continue to ",m.jsx("b",{children:"manage the booking"}),"."]})}),m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section4"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Next Section"})})]})]})]}),ek=""+new URL("16_booking-status_state1-1ca96697.riv",import.meta.url).href,tk=""+new URL("17_booking-status_state2-66172f2b.riv",import.meta.url).href,nk=""+new URL("18_booking-status_state3-703acc5f.riv",import.meta.url).href,rk=""+new URL("19_booking-status_state4-cfa3bd0f.riv",import.meta.url).href,KN=Q.div`
  position: absolute;
  height: inherit;
  min-height: inherit;
  left: 0;
  right: 0;
  top: 0;

  mask-image: linear-gradient(to bottom, black 0%, black 99%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 99%,
    transparent 100%
  );
`,qN=Q.div``,QN=m.jsxs(qN,{id:"section4",children:[m.jsx(Sl,{imageUrls:[ek,tk,nk,rk]}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:10},justifyContent:"flex-start",children:[m.jsx(KN,{children:m.jsx(Wi,{src:za,offset:-150,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1100,children:[m.jsx(Sn,{children:m.jsxs(ze,{center:!0,style:{color:"white",marginBottom:"20px"},children:["Container Bookings can be tracked and managed using the"," ",m.jsx("b",{children:"Bookings"})," tab. From here, you can edit or cancel, plan or replan, and copy your bookings."]})}),m.jsx(Qf,{child:m.jsx(jh,{top:"25%"})})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"#fff",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{id:"BookingsStart",style:{position:"relative",zIndex:9},children:[m.jsx(Ps,{src:yc,style:{zIndex:10}}),m.jsxs(Qt,{auto:!0,width:100,maxWidth:1300,children:[m.jsx(ze,{center:!0,size:"large",style:{fontWeight:300,marginBottom:"40px"},children:"Managing Your Bookings"}),m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},unlockedContent:m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section5"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Next Section"})}),slides:[{src:ek,entranceAnimation:"Booking-status_state1",content:[m.jsx(ze,{center:!0,children:"The table in the centre of the Bookings tab will allow you to access relevant information on all of your active bookings."}),m.jsx(ze,{center:!0,children:"These columns of information can be edited to create a view that meets your requirements."})]},{src:tk,entranceAnimation:"Booking-status_state2",exitAnimation:"none",content:[m.jsx(ze,{center:!0,children:"Information can be sorted quickly using the operational status options at the top."}),m.jsxs(ze,{center:!0,children:["You can ",m.jsx("b",{children:"add"}),", ",m.jsx("b",{children:"remove"}),", and ",m.jsx("b",{children:"rearrange"})," the columns to show you the most helpful information. Save the arrangement as a ",m.jsx("b",{children:"report"})," to see your customised view every time you log in to Rail-Flow."]})]},{src:nk,entranceAnimation:"Booking-status_state3",exitAnimation:"transition_to_state4",content:[m.jsxs(ze,{center:!0,children:["You can use the ",m.jsx("b",{children:"search bar"})," to quickly find a container booking across all the columns."]})]},{src:rk,entranceAnimation:"Booking-status_state4",exitAnimation:"Booking-status_state4backto3",content:[m.jsxs(ze,{center:!0,children:["If you need to ",m.jsx("b",{children:"cancel"})," or ",m.jsx("b",{children:"update"})," your booking, you can click on the ",m.jsx("b",{children:"pencil icon"})," next to your booking or select the ",m.jsx("b",{children:"User Actions"})," button for access to some relevant actions."]})]}]})]})]})]}),JN=""+new URL("bg-motif-7-f45c1a44.png",import.meta.url).href,ZN=""+new URL("bg-motif-8-47abe959.png",import.meta.url).href,eW=""+new URL("infoblock-1-b0bac538.png",import.meta.url).href,tW=""+new URL("section-conclusion-a48c31f2.png",import.meta.url).href,nW=""+new URL("rail-flow-icons-5cff9444.png",import.meta.url).href,rW=""+new URL("book-placeholder-df76d47e.png",import.meta.url).href,ik=""+new URL("20_slotsearch-06d6fe0d.riv",import.meta.url).href,ok=""+new URL("21_show-all-2bc6311c.riv",import.meta.url).href,Gv=""+new URL("22_truck_slot_booking_state1-6cd0b32d.riv",import.meta.url).href,sk=""+new URL("23_truck_slot_booking_state2-0e938480.riv",import.meta.url).href,ak=""+new URL("24_truck_slot_booking_state3-446d13c2.riv",import.meta.url).href,lk=""+new URL("24_truckslotbooking_state4-aafa1919.riv",import.meta.url).href,Yv=Q.div`
  position: absolute;
  top: 302px;
  left: ${e=>e.leftOffset||466}px;
  height: 241px;
  width: 45px;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`,Xv=Q.div`
  position: absolute;
  height: inherit;
  min-height: inherit;
  left: 0;
  right: 0;
  top: 0;

  mask-image: linear-gradient(to bottom, black 0%, black 99%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 99%,
    transparent 100%
  );
`,iW=Q.div``,oW=m.jsxs(iW,{id:"section5",children:[m.jsx(Sl,{imageUrls:[ik,ok,Gv,sk,ak,lk]}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:10},justifyContent:"flex-start",children:[m.jsx(Xv,{children:m.jsx(Wi,{src:za,offset:-150,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1100,children:[m.jsx(Sn,{children:m.jsxs(ze,{center:!0,style:{color:"white",marginBottom:"20px"},children:["Let’s take a look at the ",m.jsx("b",{children:"Truck Slot Booking"})," tab"]})}),m.jsx(Qf,{child:m.jsx(jh,{top:"36.7%"})})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"#EDEEEE",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{id:"TruckSlotBookingStart",justifyContent:"center",style:{position:"relative",zIndex:9,background:"#EDEEEE"},children:[m.jsx(Xv,{children:m.jsx(Wi,{src:Wd,offset:-450,fixedDuration:"300%"})}),m.jsx(Qt,{auto:!0,maxWidth:1200,children:m.jsx(Sn,{direction:"none",children:m.jsx(Ut,{src:nW})})}),m.jsx(Qt,{auto:!0,width:75,maxWidth:950,children:m.jsx(Sn,{delay:.8,children:m.jsxs(ze,{center:!0,style:{marginBottom:"20px",marginTop:"30px"},children:["Create your ",m.jsx("b",{children:"Truck Slot Booking"})," to confirm when you will drop off, and pick up your container."]})})}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo(),arrowColor:rt.accent1})})]}),m.jsxs(pn,{style:{position:"relative",zIndex:9},children:[m.jsx(Ps,{src:JN,style:{zIndex:10},objectPosition:"top center"}),m.jsxs(Qt,{auto:!0,width:100,maxWidth:1300,children:[m.jsx(Yp,{style:{paddingBottom:"340px"},columns:[m.jsxs(ze,{children:["You can navigate to the ",m.jsx("b",{children:"Truck Slot booking page"})," either through the main menu, or by using the ",m.jsx("b",{children:"Book Slot"})," user action button in the ",m.jsx("b",{children:" Bookings tab"}),"."]}),m.jsx(Ut,{src:eW})]}),m.jsx(Yp,{style:{paddingBottom:"300px"},columns:[m.jsx(nS,{src:ik,style:{height:"340px"}}),m.jsxs(ze,{children:["Selecting the ",m.jsx("b",{children:"Terminal"})," and a ",m.jsx("b",{children:"Start Date"})," will bring up all of the available truck slots within a three day period."]})]}),m.jsx(Yp,{columns:[m.jsxs("div",{children:[m.jsxs(ze,{children:["The ",m.jsx("b",{children:"Show Basic"})," button provides an overview of the available slots."]}),m.jsxs(ze,{children:["If you click this to ",m.jsx("b",{children:"Show All"}),", the view will change to show you the bookings you have already made against the slots."]})]}),m.jsx(nS,{src:ok,style:{height:"640px"}})]})]})]}),m.jsx(pn,{style:{position:"relative",zIndex:9},children:m.jsxs(Qt,{auto:!0,width:100,maxWidth:1300,children:[m.jsx(ze,{center:!0,children:"Your container will need two Truck Slot bookings: one for drop-off, and one for pick-up."}),m.jsxs(ze,{center:!0,bold:!0,children:["Press ",m.jsx("em",{children:"Book"})," next to any date and time to start your truck slot booking."]}),m.jsxs("div",{style:{position:"relative"},children:[m.jsx(Ut,{src:rW}),m.jsx(Yv,{onClick:()=>or("book")}),m.jsx(Yv,{onClick:()=>or("book"),leftOffset:763}),m.jsx(Yv,{onClick:()=>or("book"),leftOffset:1060})]})]})}),m.jsxs(pn,{style:{position:"relative",zIndex:9},id:"book",children:[m.jsx(Ps,{src:ZN,style:{zIndex:10}}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1300,children:m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},unlockedContent:m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section5-conclusion"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Continue"})}),slides:[{src:Gv,content:[m.jsxs(ze,{center:!0,children:[m.jsx("b",{children:"A Truck Slot Booking is a reserved time for your truck to enter our terminal"}),". During that slot your truck can drop-off and pick-up whichever containers you book using this screen."]})]},{src:Gv,entranceAnimation:"22_truckslotbooking_state1",exitAnimation:"22_truckslotbooking_state1tostate2",content:[m.jsxs(ze,{center:!0,children:["First, ",m.jsx("b",{children:"enter the details"})," of the Truck that will be"," ",m.jsx("b",{children:"arriving"})," for this booking."]})]},{src:sk,entranceAnimation:"23_truckslotbooking_state2",exitAnimation:"none",content:[m.jsxs(ze,{center:!0,children:[m.jsx("b",{children:"Select"})," any ",m.jsx("b",{children:"containers"})," you wish to"," ",m.jsx("b",{children:"drop-off"})," during this truck slot booking from the table on the left, then click ",m.jsx("b",{children:"add"}),"."]}),m.jsxs(ze,{center:!0,children:["Do the same for any ",m.jsx("b",{children:"containers"})," you wish to"," ",m.jsx("b",{children:"pick-up"})," from the table on the right. This will add these containers to the ",m.jsx("b",{children:"Selected Booking"})," table at the bottom."]}),m.jsx(ze,{center:!0,children:"If there is a pass through unit, this can be added here."})]},{src:ak,entranceAnimation:"24_truckslotbooking_state3",exitAnimation:"24_truckslotbooking_state3to4",content:[m.jsxs(ze,{center:!0,children:["To manage any ",m.jsx("b",{children:"trailers"})," associated with a"," ",m.jsx("b",{children:"drop-off"})," or ",m.jsx("b",{children:"pick-up"}),", select the relevant container and then use the Trailers table."]})]},{src:lk,entranceAnimation:"24_truckslotbooking_state4",content:[m.jsxs(ze,{center:!0,children:["Click the ",m.jsx("b",{children:"Book Slot"})," button to finalise your booking."]})]}]})})]}),m.jsxs(pn,{style:{position:"relative",zIndex:9,background:"#EDEEEE"},id:"section5-conclusion",children:[m.jsx(Xv,{children:m.jsx(Wi,{src:Wd,offset:-450,fixedDuration:"300%"})}),m.jsx(Qt,{auto:!0,width:75,maxWidth:900,children:m.jsx(Sn,{delay:.8,children:m.jsx(ze,{center:!0,children:"With all of the key information now provided, your container booking is now complete and ready to travel on Aurizon's national network."})})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1160,children:[m.jsx(Sn,{direction:"none",children:m.jsx(Ut,{src:tW})}),m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section6"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Next Section"})})]})]})]}),uk=""+new URL("25_truck_slot_trips-state1-7b362f03.riv",import.meta.url).href,ck=""+new URL("26_truck_slot_trips-state2-f4542e38.riv",import.meta.url).href,fk=""+new URL("27_truck_slot_trips-state3-25ffa1c0.riv",import.meta.url).href,dk=""+new URL("28_truck_slot_trips-state4-4e1b4ecf.riv",import.meta.url).href,hk=""+new URL("29_truck_slot_trips-state5-5acf0898.riv",import.meta.url).href,sW=Q.div`
  position: absolute;
  height: inherit;
  min-height: inherit;
  left: 0;
  right: 0;
  top: 0;

  mask-image: linear-gradient(to bottom, black 0%, black 99%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 99%,
    transparent 100%
  );
`,aW=Q.div``,lW=m.jsxs(aW,{id:"section6",children:[m.jsx(Sl,{imageUrls:[uk,ck,fk,dk,hk]}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:10},justifyContent:"flex-start",children:[m.jsx(sW,{children:m.jsx(Wi,{src:za,offset:-150,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1100,children:[m.jsx(Sn,{children:m.jsxs(ze,{center:!0,style:{color:"white",paddingBottom:"20px",maxWidth:"870px",margin:"auto"},children:["If you’re looking to report on your current truck slot bookings, click on the ",m.jsx("b",{children:"Truck Slot Trips"})," page."]})}),m.jsx(Qf,{child:m.jsx(jh,{top:"42.6%"})})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"#fff",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{id:"TruckSlotTripsStart",style:{position:"relative",zIndex:9},children:[m.jsx(Ps,{src:yc,style:{zIndex:10}}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1300,children:m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},unlockedContent:m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section7"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Next Section"})}),slides:[{src:uk,entranceAnimation:"25_state1",exitAnimation:"25_state1to2",content:[m.jsxs(ze,{center:!0,children:["The Truck Slot Trips page provides all of the"," ",m.jsx("b",{children:"truck slot information"})," for all of your"," ",m.jsx("b",{children:"active bookings"}),"."]})]},{src:ck,entranceAnimation:"26_state2",exitAnimation:"26_state2to3",content:[m.jsxs(ze,{center:!0,children:["The table at the ",m.jsx("b",{children:"top of the page"})," shows each of your"," ",m.jsx("b",{children:"active truck slot bookings"}),", and can be easily sorted to display and print relevant reports - such as a list of containers for each driver."]})]},{src:fk,entranceAnimation:"27_state3",exitAnimation:"27_state3to4",content:[m.jsxs(ze,{center:!0,children:[m.jsx("b",{children:"Selecting a Truck Slot Booking"})," from the list at the top will display each of the containers nominated for drop-off and pick-up in the middle two tables."]})]},{src:dk,entranceAnimation:"28_state4",exitAnimation:"28_state4to5",content:[m.jsxs(ze,{center:!0,children:["And with a booking selected, any automated or manually delivered ",m.jsx("b",{children:"SMS information"})," will appear at the"," ",m.jsx("b",{children:"bottom of the screen"}),"."]})]},{src:hk,entranceAnimation:"29_state5",content:[m.jsxs(ze,{center:!0,children:["To run relevant reports, or manually send an SMS to a driver, click the ",m.jsx("b",{children:"User Actions"})," button on the table."]})]}]})})]})]}),pk=""+new URL("30_departures_opening-784c3264.riv",import.meta.url).href,gk=""+new URL("31_departures_search-d682dc17.riv",import.meta.url).href,mk=""+new URL("32_departure_voyage-004bb08e.riv",import.meta.url).href,uW=Q.div`
  position: absolute;
  height: inherit;
  min-height: inherit;
  left: 0;
  right: 0;
  top: 0;

  mask-image: linear-gradient(to bottom, black 0%, black 99%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 99%,
    transparent 100%
  );
`,cW=Q.div``,fW=m.jsxs(cW,{id:"section7",children:[m.jsx(Sl,{imageUrls:[pk,gk,mk]}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:10},justifyContent:"flex-start",children:[m.jsx(uW,{children:m.jsx(Wi,{src:za,offset:-150,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1100,children:[m.jsx(Sn,{children:m.jsxs(ze,{center:!0,style:{color:"white",marginBottom:"20px"},children:["To check on the upcoming departures, click on the ",m.jsx("b",{children:"Departure"})," ","tab."]})}),m.jsx(Qf,{child:m.jsx(jh,{top:"31%"})})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"#fff",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{id:"DepartureStart",style:{position:"relative",zIndex:9},children:[m.jsx(Ps,{src:yc,style:{zIndex:10}}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1300,children:m.jsx(Iu,{buttonStyle:{color:rt.button2},buttonHoverStyle:{color:rt.button1},paginationStyle:{background:"#DCDDDE"},paginationHoverStyle:{background:rt.button2},paginationActiveStyle:{background:rt.accent1},unlockedContent:m.jsx(Sn,{delay:1.2,children:m.jsx(To,{onClick:()=>or("section8"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Next Section"})}),slides:[{src:pk,entranceAnimation:"Departure_opening",content:[m.jsxs(ze,{center:!0,children:["The ",m.jsx("b",{children:"Departures"})," page lets you view our upcoming Train services across a five day window."]})]},{src:gk,entranceAnimation:"Departure_search",content:[m.jsxs(ze,{center:!0,children:["Like the Bookings page, you can quickly ",m.jsx("b",{children:"search"})," or"," ",m.jsx("b",{children:"filter"})," these voyages to find services relevant to you."]})]},{src:mk,entranceAnimation:"Departure_voyage",content:[m.jsxs(ze,{center:!0,children:["Selecting a service from the table and the ",m.jsx("b",{children:"Voyage Map"})," ","tab will show you the route for that service, including its Origin, Destination, and all Stops in between."]})]}]})})]})]}),vk=""+new URL("trip-report-5ddbee37.png",import.meta.url).href,yk=""+new URL("cover-52aa1475.png",import.meta.url).href,W0="background: #111; color: #3cd070;";function dW(){if(window.pipwerks!==void 0){window.sco=window.pipwerks.SCORM,window.sco.init(),window.sco.debug.isActive=!1;const e=kA();e!==null&&(window.store!=null?vW(e):mW(e))}}function hW(){window.sco.version==="1.2"?(window.sco.set("cmi.core.score.min","0"),window.sco.set("cmi.core.score.max","100"),window.sco.set("cmi.core.lesson_status","completed"),window.sco.set("cmi.core.score.raw","100"),console.log("%c >> Completion Set ",W0)):window.sco.version==="2004"&&(window.sco.set("cmi.score.min","0"),window.sco.set("cmi.score.max","100"),window.sco.set("cmi.completion_status","completed"),window.sco.set("cmi.success_status","passed"),window.sco.set("cmi.score.scaled","1"),console.log("%c >> Completion Set ",W0))}function pW(e){switch(window.sco.version){case"1.2":case"2004":window.sco.set("cmi.suspend_data",JSON.stringify(e)),window.sco.save();break;default:console.log(JSON.stringify(e).length),localStorage.setItem("cmi.suspend_data",JSON.stringify(e))}}function kA(){switch(window.sco.version){case"1.2":case"2004":try{return JSON.parse(window.sco.get("cmi.suspend_data"))}catch{return null}default:return JSON.parse(localStorage.getItem("cmi.suspend_data"))}}function gW(){window.sco.version==="1.2"?(window.sco.set("cmi.core.exit","suspend"),window.sco.quit(),console.log("%c >> Exiting ",W0)):window.sco.version==="2004"&&(window.sco.set("cmi.exit","suspend"),window.sco.set("adl.nav.request","exitAll"),window.sco.quit(),console.log("%c >> Exiting ",W0))}function mW(e){console.log(e.blocks),console.log(e.sections),console.log(e.menu);var t=0;e.activeSection!==void 0&&(t=e.activeSection.sID),console.log(`ActiveSessionID: ${t}`)}function vW(e){window.store.dispatch(updateBlockState(e.blocks)),window.store.dispatch(updateSectionState(e.sections)),window.store.dispatch(updateMenuState(e.menu)),e.activeSection===void 0?window.store.dispatch(updateActiveSection(0)):window.store.dispatch(updateActiveSection(e.activeSection.sID)),window.reset=function(){window.store.dispatch(updateBlockState([])),window.store.dispatch(updateSectionState([])),window.store.dispatch(updateMenuState([])),window.store.dispatch(updateActiveSection([]))}}const yW=Q.div`
  position: absolute;
  height: inherit;
  min-height: inherit;
  left: 0;
  right: 0;
  top: 0;

  mask-image: linear-gradient(to bottom, black 0%, black 99%, transparent 100%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    black 0%,
    black 99%,
    transparent 100%
  );
`,xW=Q.div``,wW=m.jsxs(xW,{id:"section8",children:[m.jsx(Sl,{imageUrls:[vk,yk]}),m.jsxs(pn,{style:{background:rt.accent1,position:"relative",zIndex:10},justifyContent:"flex-start",children:[m.jsx(yW,{children:m.jsx(Wi,{src:za,offset:-150,fixedDuration:"300%"})}),m.jsxs(Qt,{auto:!0,width:75,maxWidth:1100,children:[m.jsxs(Sn,{children:[m.jsxs(ze,{center:!0,style:{color:"white",marginBottom:"20px"},children:["There are also truck reports available under ",m.jsx("b",{children:"Reporting"}),"."]}),m.jsx(ze,{bold:!0,center:!0,style:{color:"white",marginBottom:"20px"},children:"Let's take at look."})]}),m.jsx(Qf,{child:m.jsx(jh,{top:"48.6%"})})]}),m.jsx(es,{children:m.jsx(Qo,{onClick:()=>Zo()})}),m.jsx(Da,{fill:"#fff",location:"bottom",path:zr.divider.path,customViewBox:zr.divider.viewBox})]}),m.jsxs(pn,{id:"ReportingStart",style:{position:"relative",zIndex:9},children:[m.jsx(Ps,{src:yc,style:{zIndex:10}}),m.jsx(Qt,{auto:!0,width:100,maxWidth:1e3,children:m.jsxs(Sn,{children:[m.jsxs(ze,{center:!0,children:["The available reports can all be edited to create a customised view. These can be ",m.jsx("b",{children:"downloaded"})," (excel is the best viewing option)."]}),m.jsxs(ze,{center:!0,children:["By ",m.jsx("b",{children:"subscribing"})," to a report, you can have it emailed to you, and other nominated recipients, either daily, weekly or monthly."]})]})}),m.jsxs(Qt,{auto:!0,width:100,maxWidth:1200,children:[m.jsx(Sn,{direction:"up",children:m.jsx(Ut,{src:vk})}),m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>or("ExitPage"),buttonStyle:{margin:"auto",marginTop:"80px",textTransform:"none"},children:"Continue"})})]})]}),m.jsxs(pn,{style:{position:"relative",zIndex:9},id:"ExitPage",children:[m.jsx(Ps,{src:yk}),m.jsxs(Qt,{auto:!0,width:70,maxWidth:1200,style:{justifyContent:"center"},children:[m.jsx(ze,{center:!0,style:{color:"white",fontSize:"48px",marginBottom:"20px"},children:"Complete"}),m.jsx(ze,{center:!0,bold:!0,style:{color:"white",marginBottom:"20px"},children:"Need a refresher?"}),m.jsx(ze,{center:!0,style:{color:"white"},children:"You can jump back to any section with the side menu."}),m.jsx(ze,{center:!0,children:m.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"160",height:"24",viewBox:"0 0 160 24",fill:"none",children:m.jsx("path",{d:"M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM160 10.5H2V13.5H160V10.5Z",fill:"white"})})}),m.jsx(ze,{center:!0,style:{color:"white",paddingTop:"60px"},children:m.jsxs("em",{children:["To view and download further training resources, go to the Admin menu then select ",m.jsx("b",{children:"Manuals"}),"."]})}),m.jsx(qo,{delay:1.2,children:m.jsx(To,{onClick:()=>{dW(),hW();const e=kA();pW(e),gW()},buttonStyle:{margin:"auto",marginTop:"200px",textTransform:"none"},children:"Exit"})})]})]})]}),Jl=Q.div`
  display: flex;
  align-items: center;
  color: white;
  img {
    max-width: 100%;
  }
`,Zl=Q(ze)`
  width: 220px;
  text-align: left;
  transition: all ease-in-out 0.5s 0.5s;
  color: white;
  font-size: 18px;
`,_W=m.jsx(B5,{children:[m.jsx(z5,{theme:{color:{background:"inherit"}},style:{position:"relative",zIndex:1},children:m.jsx(kN,{panelConfig:{idPrefix:"RailFlow"},menuStyle:{background:rt.accent6,borderRadius:"5px",padding:"0px",width:"56px",gap:"0px",zIndex:10},buttonContent:[m.jsx(Ut,{src:DC}),m.jsx(Ut,{src:FC}),m.jsx(Ut,{src:zC}),m.jsx(Ut,{src:BC}),m.jsx(Ut,{src:NC}),m.jsx(Ut,{src:WC}),m.jsx(Ut,{src:HC}),m.jsx(Ut,{src:VC})],hoverButtonContent:[m.jsxs(Jl,{children:[m.jsx(Ut,{src:DC})," ",m.jsx(Zl,{children:"Introduction"})]}),m.jsxs(Jl,{children:[m.jsx(Ut,{src:FC})," ",m.jsx(Zl,{children:"Home Page"})]}),m.jsxs(Jl,{children:[m.jsx(Ut,{src:zC})," ",m.jsx(Zl,{children:"Create Booking"})]}),m.jsxs(Jl,{children:[m.jsx(Ut,{src:BC})," ",m.jsx(Zl,{children:"Manage Booking"})]}),m.jsxs(Jl,{children:[m.jsx(Ut,{src:NC})," ",m.jsx(Zl,{children:"Truck Slot Booking"})]}),m.jsxs(Jl,{children:[m.jsx(Ut,{src:WC})," ",m.jsx(Zl,{children:"Truck Slot Trips"})]}),m.jsxs(Jl,{children:[m.jsx(Ut,{src:HC})," ",m.jsx(Zl,{children:"Departure"})]}),m.jsxs(Jl,{children:[m.jsx(Ut,{src:VC})," ",m.jsx(Zl,{children:"Reporting"})]})],buttonStyle:{borderRadius:"none",width:"56px",height:"56px"},buttonHoverStyle:{background:rt.button2,borderRadius:"0px",width:"224px",height:"56px",transition:"all ease-in-out 0.5s"},buttonActiveStyle:{background:rt.button2_shade,borderRadius:"0px",width:"100%",height:"56px"},content:[NN,VN,XN,QN,oW,lW,fW,wW]})})]});function bW(){return m.jsxs(m.Fragment,{children:[m.jsx(PN,{}),m.jsx(IN,{}),m.jsx(YD,{name:"railflow",theme:{font:{family:'"Gotham HTF Light", sans-serif'},color:{text:{body:rt.text,button:"white",heading:"COL.accent3",link:rt.link},background:"inherit",button:{primary:{background:rt.button1,hoverShadow:rt.button1_shade},secondary:{background:rt.button2,hoverShadow:rt.button2_shade},tertiary:{background:"white",hoverShadow:"lightgrey"}}}},sections:[_W]})]})}const SW=new Date;console.log(`%c>> Build Date - ${SW}`,"background: #1B1632; color: #3cd070");const CW=window.location.href.indexOf("localhost")!==-1?0:3e3,kW=O3(document.getElementById("root"));setTimeout(()=>{kW.render(m.jsx(we.StrictMode,{children:m.jsx(A9,{store:PD,children:m.jsx(bW,{})})}))},CW);export{Rc as g,$B as r};
