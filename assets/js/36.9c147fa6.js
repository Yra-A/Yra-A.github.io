(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{298:function(e,t,r){},319:function(e,t,r){"use strict";r(298)},323:function(e,t,r){"use strict";r.r(t);r(2),r(21),r(65);var a=r(20);function s(e,t,r,a){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}},r)}function n(e,t,r,i,l,o=1){return!t||o>l?null:e("ul",{class:"sidebar-sub-headers"},t.map(t=>{const u=Object(a.f)(i,r+"#"+t.slug);return e("li",{class:"sidebar-sub-header level"+t.level},[s(e,r+"#"+t.slug,t.title,u),n(e,t.children,r,i,l,o+1)])}))}var i={functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:r,$route:i,$themeConfig:l,$themeLocaleConfig:o},props:{item:u,sidebarDepth:p}}){const c=Object(a.f)(i,u.path),d="auto"===u.type?c||u.children.some(e=>Object(a.f)(i,u.basePath+"#"+e.slug)):c,h="external"===u.type?function(e,t,r){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[r,e("OutboundLink")])}(e,u.path,u.title||u.path):s(e,u.path,u.title||u.path,d),b=[t.frontmatter.sidebarDepth,p,o.sidebarDepth,l.sidebarDepth,1].find(e=>void 0!==e),f=o.displayAllHeaders||l.displayAllHeaders;if("auto"===u.type)return[h,n(e,u.children,u.basePath,i,b)];if((d||f)&&u.headers&&!a.e.test(u.path)){return[h,n(e,Object(a.d)(u.headers),u.path,i,b)]}return h}},l=(r(319),r(8)),o=Object(l.a)(i,void 0,void 0,!1,null,null,null);t.default=o.exports}}]);