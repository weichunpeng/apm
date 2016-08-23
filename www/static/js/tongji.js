!function(e,t){function n(e,t){try{if("function"!=typeof e)return e;if(!e.bugsnag){var n=o();e.bugsnag=function(r){if(t&&t.eventHandler&&(b=r),w=n,!T){var o=e.apply(this,arguments);return w=null,o}try{return e.apply(this,arguments)}catch(a){throw f("autoNotify",!0)&&(R.notifyException(a,null,null,"error"),h()),a}finally{w=null}},e.bugsnag.bugsnag=e.bugsnag}return e.bugsnag}catch(r){return e}}function r(){U=!1}function o(){var e=document.currentScript||w;if(!e&&U){var t=document.scripts||document.getElementsByTagName("script");e=t[t.length-1]}return e}function a(e){var t=o();t&&(e.script={src:t.src,content:f("inlineScript",!0)?t.innerHTML:""})}function i(t){var n=f("disableLog"),r=e.console;void 0===r||void 0===r.log||n||r.log("[apm] "+t)}function u(t,n,r){var o=f("maxDepth",C);if(r>=o)return encodeURIComponent(n)+"=[RECURSIVE]";r=r+1||1;try{if(e.Node&&t instanceof e.Node)return encodeURIComponent(n)+"="+encodeURIComponent(y(t));var a=[];for(var i in t)if(t.hasOwnProperty(i)&&null!=i&&null!=t[i]){var c=n?n+"["+i+"]":i,s=t[i];a.push("object"==typeof s?u(s,c,r):encodeURIComponent(c)+"="+encodeURIComponent(s))}return a.join("&")}catch(l){return encodeURIComponent(n)+"="+encodeURIComponent(""+l)}}function c(e,t,n){if(null==t)return e;if(n>=f("maxDepth",C))return"[RECURSIVE]";e=e||{};for(var r in t)if(t.hasOwnProperty(r))try{e[r]=t[r].constructor===Object?c(e[r],t[r],n+1||1):t[r]}catch(o){e[r]=t[r]}return e}function s(e,t){if(e+="?"+u(t)+"&ct=img&cb="+(new Date).getTime(),"undefined"!=typeof BUGSNAG_TESTING&&R.testRequest)R.testRequest(e,t);else{var n=f("notifyHandler");if("xhr"===n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.send()}else{var o=new Image;o.src=e}}}function l(e){var t={},n=/^data\-([\w\-]+)$/;if(e)for(var r=e.attributes,o=0;o<r.length;o++){var a=r[o];if(n.test(a.nodeName)){var i=a.nodeName.match(n)[1];t[i]=a.value||a.nodeValue}}return t}function f(e,t){q=q||l(_);var n=void 0!==R[e]?R[e]:q[e.toLowerCase()];return"false"===n&&(n=!1),void 0!==n?n:t}function d(e){return e&&e.match(x)?!0:(i("Invalid API key '"+e+"'"),!1)}function p(t,n){var r=f("apiKey");if(d(r)&&k){k-=1;var o=f("releaseStage","production"),a=f("notifyReleaseStages");if(a){for(var u=!1,l=0;l<a.length;l++)if(o===a[l]){u=!0;break}if(!u)return}var p=[t.name,t.message,t.stacktrace].join("|");if(p!==L){L=p,b&&(n=n||{},n["Last Event"]=v(b));var m={notifierVersion:H,apiKey:r,projectRoot:f("projectRoot")||e.location.protocol+"//"+e.location.host,context:f("context")||e.location.pathname,userId:f("userId"),user:f("user"),metaData:c(c({},f("metaData")),n),releaseStage:o,appVersion:f("appVersion"),url:e.location.href,userAgent:navigator.userAgent,language:navigator.language||navigator.userLanguage,severity:t.severity,name:t.name,message:t.message,stacktrace:t.stacktrace,file:t.file,lineNumber:t.lineNumber,columnNumber:t.columnNumber,payloadVersion:"2"},g=R.beforeNotify;if("function"==typeof g){var y=g(m,m.metaData);if(y===!1)return}return 0===m.lineNumber&&/Script error\.?/.test(m.message)?i("Ignoring cross-domain script error. See https://bugsnag.com/docs/notifiers/js/cors"):void s(f("endpoint")||G,m)}}}function m(){var e,t,n=10,r="[anonymous]";try{throw new Error("")}catch(o){e="<generated>\n",t=g(o)}if(!t){e="<generated-ie>\n";var a=[];try{for(var u=arguments.callee.caller.caller;u&&a.length<n;){var c=M.test(u.toString())?RegExp.$1||r:r;a.push(c),u=u.caller}}catch(s){i(s)}t=a.join("\n")}return e+t}function g(e){return e.stack||e.backtrace||e.stacktrace}function v(e){var t={millisecondsAgo:new Date-e.timeStamp,type:e.type,which:e.which,target:y(e.target)};return t}function y(e){if(e){var t=e.attributes;if(t){for(var n="<"+e.nodeName.toLowerCase(),r=0;r<t.length;r++)t[r].value&&"null"!==t[r].value.toString()&&(n+=" "+t[r].name+'="'+t[r].value+'"');return n+">"}return e.nodeName}}function h(){I+=1,e.setTimeout(function(){I-=1})}function E(t,n,r){var o=t[n],a=r(o);t[n]=a,"undefined"!=typeof BUGSNAG_TESTING&&e.undo&&e.undo.push(function(){t[n]=o})}function S(){if("undefined"===e.performance)return i("performance does not support"),!1;var t=e.performance.timing,n={apiKey:f("apiKey"),name:"pef",type:"pef",url:e.location.href,connect:t.connectEnd-t.connectStart,pageloadtime:t.loadEventStart-t.navigationStart,ttfb:t.responseStart-t.navigationStart,request:t.responseStart-t.requestStart,response:t.responseEnd-t.responseStart,dom:t.domContentLoadedEventStart-t.domLoading,domReady:"",load:t.loadEventStart-t.domLoading,tcp:t.connectEnd-t.connectStart,dns:t.domainLookupEnd-t.domainLookupStart,black_waiting_time:t.responseStart-t.navigationStart,fist_page_time:t.responseStart-t.navigationStart,operation_time:0,total_time:t.loadEventEnd-t.navigationStart,last_unload:t.unloadEventEnd-t.unloadEventStart,redirect:t.redirectEnd-t.redirectStart};console.log(t.loadEventEnd,t.navigationStart),s(f("endpoint")||G,n)}function N(){var t=e.XMLHttpRequest.prototype.open,n=e.XMLHttpRequest.prototype.send,r={apiKey:f("apiKey"),name:"ajax",domain:e.location.host,type:"xhr"};e.XMLHttpRequest.prototype.open=function(n,o){return r.method=n,r.url=/^http|https/g.test(o)?o:e.location.origin+o,s(f("endpoint")||G,r),t.apply(this,arguments)},e.XMLHttpRequest.prototype.send=function(){return n.apply(this,arguments)}}var b,w,L,R={},T=!0,I=0,k=10,C=5;R.noConflict=function(){return e.Bugsnag=t,"undefined"==typeof t&&delete e.Bugsnag,R},R.refresh=function(){k=10},R.notifyException=function(e,t,n,r){e&&(t&&"string"!=typeof t&&(n=t,t=void 0),n||(n={}),a(n),p({name:t||e.name,message:e.message||e.description,stacktrace:g(e)||m(),file:e.fileName||e.sourceURL,lineNumber:e.lineNumber||e.line,columnNumber:e.columnNumber?e.columnNumber+1:void 0,severity:r||"warning"},n))},R.notify=function(t,n,r,o){p({name:t,message:n,stacktrace:m(),file:e.location.toString(),lineNumber:1,severity:o||"warning"},r)};var U="complete"!==document.readyState;document.addEventListener?(document.addEventListener("DOMContentLoaded",r,!0),e.addEventListener("load",r,!0)):e.attachEvent("onload",r);var q,x=/^[0-9a-f]{32}$/i,M=/function\s*([\w\-$]+)?\s*\(/i,A="http://apm.431103.com/",G=A+"js",H="2.5.0",B=document.getElementsByTagName("script"),_=B[B.length-1];if(e.atob){if(e.ErrorEvent)try{0===new e.ErrorEvent("test").colno&&(T=!1)}catch(j){}}else T=!1;if(f("autoNotify",!0)&&(N(),setTimeout(function(){S()},0)),f("autoNotify",!0)){E(e,"onerror",function(t){return"undefined"!=typeof BUGSNAG_TESTING&&(R._onerror=t),function(n,r,o,i,u){var c=f("autoNotify",!0),s={};!i&&e.event&&(i=e.event.errorCharacter),a(s),w=null,c&&!I&&p({name:u&&u.name||"window.onerror",message:n,file:r,lineNumber:o,columnNumber:i,stacktrace:u&&g(u)||m(),severity:"error"},s),"undefined"!=typeof BUGSNAG_TESTING&&(t=R._onerror),t&&t(n,r,o,i,u)}});var D=function(e){return function(t,r){if("function"==typeof t){t=n(t);var o=Array.prototype.slice.call(arguments,2);return e(function(){t.apply(this,o)},r)}return e(t,r)}};E(e,"setTimeout",D),E(e,"setInterval",D),e.requestAnimationFrame&&E(e,"requestAnimationFrame",function(e){return function(t){return e(n(t))}}),e.setImmediate&&E(e,"setImmediate",function(e){return function(){var t=Array.prototype.slice.call(arguments);return t[0]=n(t[0]),e.apply(this,t)}}),"EventTarget Window Node ApplicationCache AudioTrackList ChannelMergerNode CryptoOperation EventSource FileReader HTMLUnknownElement IDBDatabase IDBRequest IDBTransaction KeyOperation MediaController MessagePort ModalWindow Notification SVGElementInstance Screen TextTrack TextTrackCue TextTrackList WebSocket WebSocketWorker Worker XMLHttpRequest XMLHttpRequestEventTarget XMLHttpRequestUpload".replace(/\w+/g,function(t){var r=e[t]&&e[t].prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(E(r,"addEventListener",function(e){return function(t,r,o,a){try{r&&r.handleEvent&&(r.handleEvent=n(r.handleEvent,{eventHandler:!0}))}catch(u){i(u)}return e.call(this,t,n(r,{eventHandler:!0}),o,a)}}),E(r,"removeEventListener",function(e){return function(t,r,o,a){return e.call(this,t,r,o,a),e.call(this,t,n(r),o,a)}}))})}e.Bugsnag=R,"function"==typeof define&&define.amd?define([],function(){return R}):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=R)}(window,window.Bugsnag);