(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{370:function(e,t,n){"use strict";n(29),n(2),n(21);var a,o,i,s,r,l,c,u=!1,d=[];"undefined"!=typeof document&&(s=function(e){return u||"interactive"===document.readyState||"complete"===document.readyState?e.call(document):d.push((function(){return e.call(this)})),this},l=function(){for(var e=0,t=d.length;e<t;e++)d[e].apply(document);d=[]},c=function(){u||(u=!0,l.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",c,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",c),window==window.top&&(clearInterval(r),r=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",c,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){/loaded|complete/.test(document.readyState)&&c()})),window==window.top&&(r=setInterval((function(){try{u||document.documentElement.doScroll("left")}catch(e){return}c()}),5)))),a={fetch:function(e,t){var n="BusuanziCallback_"+Math.floor(1099511627776*Math.random());e=e.replace("=BusuanziCallback","="+n),(i=document.createElement("SCRIPT")).type="text/javascript",i.defer=!0,i.src=e,document.getElementsByTagName("HEAD")[0].appendChild(i),window[n]=this.evalCall(t)},evalCall:function(e){return function(t){s((function(){try{e(t),i&&i.parentElement&&i.parentElement.removeChild&&i.parentElement.removeChild(i)}catch(e){console.log(e),o.hides()}}))}}},o={bszs:["site_pv","page_pv","site_uv"],texts:function(e){this.bszs.map((function(t){var n=document.getElementById("busuanzi_value_"+t);n&&(n.innerHTML=e[t])}))},hides:function(){this.bszs.map((function(e){var t=document.getElementById("busuanzi_container_"+e);t&&(t.style.display="none")}))},shows:function(){this.bszs.map((function(e){var t=document.getElementById("busuanzi_container_"+e);t&&(t.style.display="inline")}))}},t.a=()=>{o&&o.hides(),a.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",(function(e){o.texts(e),o.shows()}))}},379:function(e,t,n){},405:function(e,t,n){"use strict";n(379)},412:function(e,t,n){"use strict";n.r(t);n(2),n(17);function a(e){return e instanceof Date||(e=new Date(e)),`${e.getUTCFullYear()}-${o(e.getUTCMonth()+1)}-${o(e.getUTCDate())}`}function o(e){return e.toString().padStart(2,"0")}function i(e){return e.sort((e,t)=>{return n=e,s(t)-s(n);var n}),e}function s(e){let t=e.lastUpdated||e.frontmatter.date,n=new Date(t);return"Invalid Date"==n&&t&&(n=new Date(t.replace(/-/g,"/"))),n.getTime()}function r(e,t){let n=30;return 2===e?n=t%4==0?29:28:1!==e&&3!==e&&5!==e&&7!==e&&8!==e&&10!==e&&12!==e||(n=31),n}var l=n(370),c={data:()=>({mdFileCount:0,createToNowDay:0,lastActiveDate:"",totalWords:0,indexView:!0}),computed:{$lastUpdatePosts(){return i(this.$filterPosts)}},mounted(){if(Object.keys(this.$themeConfig.blogInfo).length>0){const{blogCreate:n,mdFileCountType:o,totalWords:i,moutedEvent:s,eachFileWords:l,indexIteration:c,indexView:u}=this.$themeConfig.blogInfo;if(this.createToNowDay=(e=n,t||(t=e,e=new Date),e=a(e),t=a(t),parseInt(Math.abs(new Date(e)-new Date(t))/864e5)),this.mdFileCount="archives"!=o?o.length:this.$filterPosts.length,"archives"==i&&l){let e=0;l.forEach(t=>{if(t.wordsCount<1e3)e+=t.wordsCount;else{let n=t.wordsCount.slice(0,t.wordsCount.length-1);e+=1e3*n}}),this.totalWords=Math.round(e/100)/10+"k"}else"archives"==i?(this.totalWords=0,console.log("如果 totalWords = 'archives'，必须传入 eachFileWords，显然您并没有传入！")):this.totalWords=i;this.lastActiveDate=function(e,t){t||(t=e,e=new Date),e instanceof Date||(e=new Date(e)),t instanceof Date||(t=new Date(t));const n=parseInt(Math.abs(t-e)/1e3);return 0==n?"刚刚":n<60?n+" 秒":parseInt(n/60)<60?parseInt(n/60)+" 分":parseInt(n/3600)<24?parseInt(n/3600)+" 时":parseInt(n/86400)<r(e.getMonth,e.getFullYear)?parseInt(n/86400)+" 天":parseInt(n/(86400*r(e.getMonth,e.getFullYear)))<12?parseInt(n/(86400*r(e.getMonth,e.getFullYear)))+" 月":parseInt(n/(86400*r(e.getMonth,e.getFullYear)*12))+" 年"}(this.$lastUpdatePosts[0].lastUpdated),this.mountedWebInfo(s),this.indexView=null==u||u,this.indexView&&this.getIndexViewCouter(c)}var e,t},methods:{mountedWebInfo(e=".tags-wrapper"){let t=setInterval(()=>{const n=document.querySelector(e),a=document.querySelector(".web-info");n&&a&&(this.isSiblilngNode(n,a)||(n.parentNode.insertBefore(a,n.nextSibling),clearInterval(t)))},200)},isSiblilngNode:(e,t)=>e.siblingNode==t,getIndexViewCouter(e=3e3){Object(l.a)();var t=0;setTimeout(()=>{let n=document.querySelector(".web-site-pv"),a=document.querySelector(".web-site-uv");if(a&&n&&""==a.innerText&&""==n.innerText){let o=setInterval(()=>{a&&n&&""==a.innerText&&""==n.innerText?((t+=e)>5*e&&(a.innerText="9999",n.innerText="9999",clearInterval(o)),""==a.innerText&&""==n.innerText?Object(l.a)():clearInterval(o)):clearInterval(o)},e);this.$once("hook:beforeDestroy",()=>{clearInterval(o),o=null})}},e)},beforeMount(){let e=document.querySelector(".web-info");e&&e.parentNode.removeChild(e)}}},u=(n(405),n(8)),d=Object(u.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"web-info card-box"},[e._m(0),e._v(" "),t("div",{staticClass:"webinfo-item"},[t("div",{staticClass:"webinfo-item-title"},[e._v("文章数目：")]),e._v(" "),t("div",{staticClass:"webinfo-content"},[e._v(e._s(e.mdFileCount)+" 篇")])]),e._v(" "),t("div",{staticClass:"webinfo-item"},[t("div",{staticClass:"webinfo-item-title"},[e._v("已运行时间：")]),e._v(" "),t("div",{staticClass:"webinfo-content"},[e._v("\n      "+e._s(0!=e.createToNowDay?e.createToNowDay+" 天":"不到一天")+"\n    ")])]),e._v(" "),t("div",{staticClass:"webinfo-item"},[t("div",{staticClass:"webinfo-item-title"},[e._v("本站总字数：")]),e._v(" "),t("div",{staticClass:"webinfo-content"},[e._v(e._s(e.totalWords)+" 字")])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"webinfo-title"},[e("i",{staticClass:"iconfont icon-wenjianjia",staticStyle:{"font-size":"1.2rem"}}),this._v(" "),e("span",[this._v("站点信息")])])}],!1,null,"7cfc96eb",null);t.default=d.exports}}]);