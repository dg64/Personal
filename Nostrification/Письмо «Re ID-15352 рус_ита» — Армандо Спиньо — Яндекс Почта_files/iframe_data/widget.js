(()=>{var e,t,r={7349:e=>{e.exports={prefix:"uxs",windowClass:"UXS",windowSettings:"_uxsSettings",sessionId:"uxs_uid",event:"UXS_event",shownCampaignsEvents:"uxs_campaigns",iframeMessageType:"uxfb",auxiliaryComment:"UX Feedback Widget Script",sessionValue:"UXS_session_value",updatedTime:"UXS_updated_time",sessionCampaigns:"UXS_session_campaigns",eventCounts:"UXS_event_counts",pageCounts:"UXS_page_counts",brandName:"UX Feedback",widgetUrl:"https://cdn.uxfeedback.ru/"}},4426:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7349),i=r.n(n);const o={LOCALIZATION:"ru",API_URL:"https://api.uxfeedback.yandex.net/v1",IMAGES_URL:"https://uxfeedback-cdn.s3.yandex.net/_static/images",PREFIX:i().prefix,WINDOW_CLASS:i().windowClass,WINDOW_SETTINGS:i().windowSettings,SESSION_ID:i().sessionId,EVENT:i().event,SHOWN_CAMPAIGNS_LS:i().shownCampaignsEvents,IFRAME_MESSAGE_TYPE:i().iframeMessageType,SESSION_VALUE:i().sessionValue,UPDATED_TIME:i().updatedTime,SESSION_CAMPAIGNS:i().sessionCampaigns,EVENT_COUNTS:i().eventCounts,PAGE_COUNTS:i().pageCounts,BRAND_NAME:i().brandName}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets-3.5.0/"+e+"."+{418:"1c711692bc9eeace8051",470:"66b562d11ce06d27bce6",675:"4379d257499fa75f567e",761:"708e4d0be26e54585295"}[e]+".js",i.miniCssF=e=>"assets-3.5.0/"+e+"c495991b11c560513a7f.css",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="widget:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,u;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var l=d[c];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){s=l;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous")),e[r]=[n];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{if("undefined"!=typeof document){var e={263:0};i.f.miniCss=(t,r)=>{e[t]?r.push(e[t]):0!==e[t]&&{470:1}[t]&&r.push(e[t]=(e=>new Promise(((t,r)=>{var n=i.miniCssF(e),o=i.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var i=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var a;if((i=(a=o[n]).getAttribute("data-href"))===e||i===t)return a}})(n,o))return t();((e,t,r,n,i)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=r=>{if(o.onerror=o.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),i(u)}},o.href=t,0!==o.href.indexOf(window.location.origin+"/")&&(o.crossOrigin="anonymous"),document.head.appendChild(o)})(e,o,0,t,r)})))(t).then((()=>{e[t]=0}),(r=>{throw delete e[t],r})))}}})(),(()=>{var e={263:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,u]=r,d=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);u&&u(i)}for(t&&t(r);d<a.length;d++)o=a[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkwidget=self.webpackChunkwidget||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o={};(()=>{"use strict";i.r(o);var e=i(4426);!function(){const t=/Trident|MSIE/.test(navigator.userAgent),r=void 0!==window[e.Z.WINDOW_CLASS];t||r||function(t){t[e.Z.WINDOW_SETTINGS]||(t[e.Z.WINDOW_SETTINGS]={}),t[e.Z.WINDOW_CLASS]=new function(){const r=e.Z.WINDOW_SETTINGS,n="properties",i=[];return this.previewFormConfiguration=null,{sendEvent:e=>{i.push(e)},getSentEvents:()=>i,addProperties:e=>{Object.hasOwnProperty.call(t[r],n)||(t[r][n]={}),t[r][n]={...t[r][n],...e}},getProperties:()=>t[r][n]||{},sendPreviewData:e=>{this.previewFormConfiguration=e},getPreviewFormConfiguration:()=>this.previewFormConfiguration,getFullInstructionSetStatus:()=>!1}},Promise.all([i.e(761),i.e(418)]).then(i.bind(i,418))}(window)}()})(),window.widget=o})();