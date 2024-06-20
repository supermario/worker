"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[341],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7378),a=n(7140);const o={tabItem:"tabItem_wHwb"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},3930:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(5773),a=n(7378),o=n(7140),i=n(3457),s=n(3620),l=n(654),u=n(784),p=n(1819);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:n,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=l??c;return h({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var k=n(6457);const f={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==s&&(c(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},5196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(5773),a=(n(7378),n(5318)),o=n(3930),i=n(9798);const s={title:"Worker Pro!",sidebar_position:46},l=void 0,u={unversionedId:"pro/index",id:"pro/index",title:"Worker Pro!",description:"Worker Pro (@graphile-pro/worker) is a proprietary (not open source) preset",source:"@site/docs/pro/index.md",sourceDirName:"pro",slug:"/pro/",permalink:"/docs/pro/",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/pro/index.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{title:"Worker Pro!",sidebar_position:46},sidebar:"tutorialSidebar",previous:{title:"Task executors",permalink:"/docs/tasks"},next:{title:"Live migration",permalink:"/docs/pro/migration"}},p={},c=[{value:"Getting access",id:"getting-access",level:2},{value:"Service account",id:"service-account",level:3},{value:"Source available",id:"source-available",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"FAQ",id:"faq",level:2},{value:"If I pay for Worker Pro, am I a sponsor?",id:"if-i-pay-for-worker-pro-am-i-a-sponsor",level:3},{value:"Is Worker Pro needed for production usage?",id:"is-worker-pro-needed-for-production-usage",level:3},{value:"Can I implement these features myself instead?",id:"can-i-implement-these-features-myself-instead",level:3}],d={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Worker Pro (",(0,a.kt)("inlineCode",{parentName:"p"},"@graphile-pro/worker"),") is a proprietary (not open source) preset\nfor Graphile Worker that adds advanced and quality-of-life features. Graphile\nWorker existed for 5 years without these features, so they are definitely not\nessential, but they are things your team is likely to appreciate:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/pro/migration"},"Live migration")," ","\u2014"," remove the need to scale to zero to\nsafely upgrade Worker versions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/pro/recovery"},"Crashed worker recovery")," ","\u2014"," track running workers and\nunlock jobs automatically when a worker seems to have unexpectedly stopped"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"More features planned"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("del",{parentName:"em"},"Worker Pro is priced at USD $100/mo and helps to fund the ongoing maintenance\nof Graphile Worker and other Graphile projects. It is also available\n",(0,a.kt)("strong",{parentName:"del"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/benjie"},"free to sponsors"))," on the $100/mo tier\nor above."))),(0,a.kt)("admonition",{title:"Launch offer",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Worker Pro is in early access with a limited feature set; during this period get\naccess by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/benjie"},"sponsoring")," at ",(0,a.kt)("strong",{parentName:"p"},"just $25+/mo"),"\nand, as a thank you for being an early adopter, keep this preferential rate for\nat least 18 months after the launch offer ends.")),(0,a.kt)("h2",{id:"getting-access"},"Getting access"),(0,a.kt)("p",null,"Worker Pro is currently in sponsors-only early access; any\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/benjie"},"sponsor")," on ",(0,a.kt)("del",{parentName:"p"},"$100/mo")," $25+/mo may request\naccess from @jemgillam or @benjie via the Discord, or email ",(0,a.kt)("inlineCode",{parentName:"p"},"team")," at the domain\n",(0,a.kt)("inlineCode",{parentName:"p"},"graphile.com"),"."),(0,a.kt)("p",null,'The module is stored on and access is managed through GitHub Packages. We will\nneed to know the GitHub username(s) of the person(s) that will need access so\nthat we can add them to the repository. We strongly recommend that you also send\nus the GitHub username of a GitHub "service account" (see below) that you can\nuse to generate an access token which can be shared across your various\nenvironments.'),(0,a.kt)("p",null,"The usernames will be added to a team within the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile-pro"},"https://github.com/graphile-pro"),"\norganization. This will grant access to the GitHub Packages module and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile-pro/worker"},"the source code repository on GitHub"),",\nincluding the ability to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile-pro/worker/issues/new"},"file issues")," and open\ndiscussions about Worker Pro. Though the repositories are currently private, any\ncontent posted to them via issues, discussions, PRs or otherwise may be made\npublic in future, so post accordingly."),(0,a.kt)("h3",{id:"service-account"},"Service account"),(0,a.kt)("p",null,"Access to GitHub Packages requires a (highly restricted) security token. Despite\nthe very limited scope of these tokens, using your own security credentials for\nshared systems (production, staging, development) isn't ideal; we therefore\nsuggest that you create (if you haven't already) a separate GitHub user account\nthat is granted minimal privileges, and this account can be used to generate a\ntoken that can be shared between the team and production environments. The\nservice account you create on GitHub likely doesn't even need access to your\nsource code."),(0,a.kt)("p",null,"Send us the username of the service account and we can invite it to the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphile-pro"},"https://github.com/graphile-pro")," organization."),(0,a.kt)("h3",{id:"source-available"},"Source available"),(0,a.kt)("p",null,"Worker Pro is not open source, but it is ","\u201c","source available","\u201d","; the\nsource code is licensed in a way that forbids publishing and redistribution but\nis otherwise very flexible, allowing you to make your own modifications for\ninternal usage should you need to do so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"Copyright \xa9 2023 Benjie Gillam\n\nUse and modification of this software and associated documentation files (the\n\u201cSoftware\u201d) is permitted, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software. The Software is not to be\ndistributed, published, sold, or sub-licensed.\n\nTHE SOFTWARE IS PROVIDED \u201cAS IS\u201d, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Worker Pro can be installed from GitHub Packages using\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token"},"an authenticated ",(0,a.kt)("inlineCode",{parentName:"a"},"authToken")," or ",(0,a.kt)("inlineCode",{parentName:"a"},"npm login --scope=@graphile-pro")),"."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," in your project directory containing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title=".npmrc"',title:'".npmrc"'},"@graphile-pro:registry=https://npm.pkg.github.com\n")),(0,a.kt)("p",null,"This will tell ",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," (and ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),", etc) that any ",(0,a.kt)("inlineCode",{parentName:"p"},"@graphile-pro/*")," package should\ninstead be installed from the GitHub Packages package registry rather than from\nthe regular npm package registry."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You need to authenticate to GitHub packages, one way to do this is to create a\n",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," file in your home directory (this is ",(0,a.kt)("strong",{parentName:"p"},"different")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},".npmrc")," in\nyour project folder mentioned above), and enter into it:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="~/.npmrc"',title:'"~/.npmrc"'},"//npm.pkg.github.com/:_authToken=TOKEN\n")),(0,a.kt)("p",{parentName:"admonition"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"TOKEN")," with a GitHub personal access token with the ",(0,a.kt)("inlineCode",{parentName:"p"},"read:packages"),"\nscope (it might be nested under ",(0,a.kt)("inlineCode",{parentName:"p"},"write:packages"),"); you can generate a personal\naccess token at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens"),".")),(0,a.kt)("p",null,"Then (assuming you have your\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token"},"GitHub Packages authentication configured"),")\nyou can install as you would any other module:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @graphile-pro/worker\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @graphile-pro/worker\n"))),(0,a.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @graphile-pro/worker\n")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more help installing from GitHub packages, see the GitHub Packages\ndocumentation, in particular:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token"},"Authenticating with a personal access token"),",\nand"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package"},"Installing a package"),".")),(0,a.kt)("p",{parentName:"admonition"},"If you still need help, ask in #help-and-support on the\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/graphile"},"Graphile Discord"),".")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Load ",(0,a.kt)("inlineCode",{parentName:"p"},"@graphile-pro/worker")," as a preset into your\n",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"graphile.config.ts or similar file")," via the ",(0,a.kt)("inlineCode",{parentName:"p"},"extends")," key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="graphile.config.ts"',title:'"graphile.config.ts"'},'import type {} from "graphile-config";\nimport type {} from "graphile-worker";\nimport { WorkerProPreset } from "@graphile-pro/worker";\n\nconst preset: GraphileConfig.Preset = {\n  extends: [WorkerProPreset],\n  worker: {\n    /* Your worker config options here */\n  },\n};\n')),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"if-i-pay-for-worker-pro-am-i-a-sponsor"},"If I pay for Worker Pro, am I a sponsor?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/sponsors/benjie/"},"sponsor Graphile")," at $100+/mo via\nGitHub Sponsors then Worker Pro is included as one of the many perks to\nsponsorship.")),(0,a.kt)("p",null,"Paying $100/mo for Worker Pro via Graphile Store ",(0,a.kt)("em",{parentName:"p"},"(not available at time of\nwriting)")," gives you access to Worker Pro but that is all, you are not a sponsor\nand you are not entitled to other\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/benjie/"},"sponsor perks"),". We strongly encourage you\nto sponsor Graphile instead, there","'","s only upsides!"),(0,a.kt)("p",null,"Why? Some companies claim they ","\u201c","cannot","\u201d"," use sponsorship platforms;\nif your company is one of these then either you need to make do without the\nadditional sponsor perks, or you need to help your organization to see the value\nof supporting the software that their business relies upon. Once you","'","ve\nsuccessfully gained approval for sponsorship, you may discover other valuable\nopen source projects within your stack that you could benefit from supporting.\nReady to enhance the entire open source ecosystem together?"),(0,a.kt)("h3",{id:"is-worker-pro-needed-for-production-usage"},"Is Worker Pro needed for production usage?"),(0,a.kt)("p",null,"No, absolutely not! Graphile Worker existed without these features for 5 years\nso they are not ","\u201c","essential","\u201d","; they're ","\u201c","nice to have","\u201d","\nfeatures, especially for larger teams or systems with more complex deployments."),(0,a.kt)("h3",{id:"can-i-implement-these-features-myself-instead"},"Can I implement these features myself instead?"),(0,a.kt)("p",null,"Sure! Worker Pro is just a preset for the open source Graphile Worker, so you\nhave all the same interfaces that we do! Hopefully it will work out\nsignificantly cheaper and easier to use Worker Pro than to build the solution\nyourself, and Worker Pro has been designed by the maintainer of Graphile Worker\nso it thinks carefully about all the edge cases, but if your needs are limited\nor your budget is constrained then please go ahead and use the plugin and events\nsystem to implement a similar solution. (Please note that it","'","s extremely\nunlikely we","'","ll accept your solution as a pull request.)"),(0,a.kt)("admonition",{title:"Not for profit?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your budget is constrained because you","'","re a charity or non-profit\norganization (including community projects such as Makerspaces) please get in\ntouch and we may be able to offer you a discount.")),(0,a.kt)("admonition",{title:"Starting a competitor?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Want to open source your own alternative, or maybe even build a business around\nit? You're entirely welcome to do so ","\u2014"," that is the open source way! But,\nplease consider sponsoring us anyway, to support us to keep improving the\nunderlying open source project for you and your users."),(0,a.kt)("p",{parentName:"admonition"},"We retain copyright in Worker Pro, so if you are going to implement and\ndistribute your own solution, ensure that you do it without using or being\n","\u201c","inspired by","\u201d"," the source code to Graphile Pro. Figure out your own\nindependent solution, please.")))}m.isMDXComponent=!0}}]);