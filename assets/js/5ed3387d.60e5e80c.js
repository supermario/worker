"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[2032],{5318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(5773),o=(r(7378),r(5318));const a={title:"Requirements",sidebar_position:30},i=void 0,s={unversionedId:"requirements",id:"requirements",title:"Requirements",description:"The current version of Graphile Worker requires PostgreSQL 12+ and Node 18+.",source:"@site/docs/requirements.md",sourceDirName:".",slug:"/requirements",permalink:"/docs/requirements",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/requirements.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Requirements",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Installation",permalink:"/docs/installation"}},l={},p=[{value:"Rationality checks",id:"rationality-checks",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The current version of Graphile Worker requires PostgreSQL 12+ and Node 18+",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,o.kt)("p",null,"Once a version of PostgreSQL or Node.js reaches end of life, we also no longer\nsupport it and may drop support in a minor update. Should you require support\nfor an end-of-life version of one of these projects, please\n",(0,o.kt)("a",{parentName:"p",href:"https://graphile.org/support/"},"get in touch about our commercial support options"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"graphile-worker")," versions before 0.13.0 installed the ",(0,o.kt)("inlineCode",{parentName:"p"},"pgcrypto")," extension into\nthe public schema of your database (if it wasn't already installed). As of\nversion 0.13.0 we no longer use ",(0,o.kt)("inlineCode",{parentName:"p"},"pgcrypto"),". Existing users may want to uninstall\nit - see the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphile/worker/blob/main/RELEASE_NOTES.md#v0130"},"release notes"),"\nfor instructions.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Postgres 12 is required for the ",(0,o.kt)("inlineCode",{parentName:"p"},"generated always as (expression)")," feature; if\nyou need to use earlier versions of Postgres or Node, please use version 0.13.x\nor earlier.")),(0,o.kt)("h2",{id:"rationality-checks"},"Rationality checks"),(0,o.kt)("p",null,"We recommend that you limit ",(0,o.kt)("inlineCode",{parentName:"p"},"queue_name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"task_identifier")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"job_key")," to\nprintable ASCII characters."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queue_name")," can be at most 128 characters long"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"task_identifier")," can be at most 128 characters long"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"job_key")," can be at most 512 characters long"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"schema")," should be reasonable; max 32 characters is preferred. Defaults to\n",(0,o.kt)("inlineCode",{parentName:"li"},"graphile_worker")," (15 chars)")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Might work with older versions, but has not been tested. Node 18 won't run\nour jest tests due to segfault, fixed in Node 20.8.1, so CI cannot run\nagainst Node 18.",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);