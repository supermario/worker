"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[3604],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,m=p["".concat(s,".").concat(b)]||p[b]||c[b]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(5773),o=(n(7378),n(5318));const r={title:"addJob()"},i=void 0,l={unversionedId:"library/add-job",id:"library/add-job",title:"addJob()",description:"The addJob API exists in many places in graphile-worker, but all the instances",source:"@site/docs/library/add-job.md",sourceDirName:"library",slug:"/library/add-job",permalink:"/docs/library/add-job",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/library/add-job.md",tags:[],version:"current",frontMatter:{title:"addJob()"},sidebar:"tutorialSidebar",previous:{title:"Queueing jobs",permalink:"/docs/library/queue"},next:{title:"Logger",permalink:"/docs/library/logger"}},s={},d=[{value:"Batch jobs",id:"batch-jobs",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"addJob")," API exists in many places in graphile-worker, but all the instances\nhave exactly the same call signature. The API is used to add a job to the queue\nfor immediate or delayed execution. With ",(0,o.kt)("inlineCode",{parentName:"p"},"jobKey")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jobKeyMode")," it can also\nbe used to replace existing jobs."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"quickAddJob")," is similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"addJob"),", but accepts an additional initial\nparameter describing how to connect to the database.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"addJob")," arguments are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"identifier"),": the name of the task to be executed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload"),": an optional JSON-compatible object to give the task more context on\nwhat it is doing, or a list of these objects in ","\u201c","batch job","\u201d"," mode"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),": an optional object specifying:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queueName"),": the queue to run this task under"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runAt"),": a ",(0,o.kt)("inlineCode",{parentName:"li"},"Date")," to schedule this task to run in the future"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxAttempts"),": the maximum number of attempts we'll give the job\n(Default: 25)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jobKey"),": unique identifier for the job, used to replace, update or remove\nit later if needed (see\n",(0,o.kt)("a",{parentName:"li",href:"/docs/job-key#replacingupdating-jobs"},"Replacing and updating jobs")," and\n",(0,o.kt)("a",{parentName:"li",href:"/docs/job-key#removing-jobs"},"removing jobs"),"); can be used for\nde-duplication (i.e. throttling or debouncing)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jobKeyMode"),": controls the behavior of ",(0,o.kt)("inlineCode",{parentName:"li"},"jobKey")," when a matching job is found\n(see ",(0,o.kt)("a",{parentName:"li",href:"/docs/job-key#replacingupdating-jobs"},"Replacing and updating jobs")," and\n",(0,o.kt)("a",{parentName:"li",href:"/docs/job-key#removing-jobs"},"removing jobs"),")")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await addJob("send_email", { to: "someone@example.com" });\n')),(0,o.kt)("p",null,"Definitions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type AddJobFunction = (\n  /**\n   * The name of the task that will be executed for this job.\n   */\n  identifier: string,\n\n  /**\n   * The payload (typically a JSON object) that will be passed to the task executor.\n   * By default, for safety, payloads are typed as unknown since they may have been\n   * populated by out of date code, or even from other sources.\n   */\n  payload: unknown,\n\n  /**\n   * Additional details about how the job should be handled.\n   */\n  spec?: TaskSpec,\n) => Promise<Job>;\n\nexport interface TaskSpec {\n  /**\n   * The queue to run this task under (only specify if you want jobs in this\n   * queue to run serially). (Default: null)\n   */\n  queueName?: string;\n\n  /**\n   * A Date to schedule this task to run in the future. (Default: now)\n   */\n  runAt?: Date;\n\n  /**\n   * Jobs are executed in numerically ascending order of priority (jobs with a\n   * numerically smaller priority are run first). (Default: 0)\n   */\n  priority?: number;\n\n  /**\n   * How many attempts should this task get? The minimum is 1, in which case the\n   * task will only be attempted once and won't be retried. (Default: 25)\n   */\n  maxAttempts?: number;\n\n  /**\n   * Unique identifier for the job, can be used to update or remove it later if\n   * needed. (Default: null)\n   */\n  jobKey?: string;\n\n  /**\n   * Modifies the behavior of `jobKey`; when 'replace' all attributes will be\n   * updated, when 'preserve_run_at' all attributes except 'run_at' will be\n   * updated, when 'unsafe_dedupe' a new job will only be added if no existing\n   * job (including locked jobs and permanently failed jobs) with matching job\n   * key exists. (Default: 'replace')\n   */\n  jobKeyMode?: \"replace\" | \"preserve_run_at\" | \"unsafe_dedupe\";\n\n  /**\n   * Flags for the job, can be used to dynamically filter which jobs can and\n   * cannot run at runtime. (Default: null)\n   */\n  flags?: string[];\n}\n")),(0,o.kt)("h3",{id:"batch-jobs"},"Batch jobs"),(0,o.kt)("p",null,"Normally a job","'","s ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," is an object; however we also allow for jobs to\nhave a ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," that is an array of objects. When ",(0,o.kt)("inlineCode",{parentName:"p"},"payload")," is an array of\nobjects, we call this a ","\u201c","batch job","\u201d"," and it has a few special\nbehaviors:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"when you use ",(0,o.kt)("inlineCode",{parentName:"li"},"job_key")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"replace")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"preserve_run_at")," mode, when a job is\nreplaced/updated, instead of overwriting the payload, the existing and new\npayloads will be merged into a larger array (this only occurs when the\nexisting and new payloads are both arrays, otherwise the payload is simply\nreplaced)."),(0,o.kt)("li",{parentName:"ol"},"when a task executes a batch job, it may return a list of promises that is\nthe same length as the payload array. If any of these promises reject, then\nthe job is said to have ","\u201c","partial success","\u201d",", the result of which is\nit being sent back to the queue for a retry, but with the successful objects\nremoved from the payload so only the failed objects will be retried.")),(0,o.kt)("p",null,"Batch jobs can be useful where you need to aggregate multiple tasks together\nover time for efficiency; for example if you have a notification system you\nmight schedule a notification to be sent to a user in 2 minutes time that they\nreceived a DM. Over the next 2 minutes if any other DMs are received, these can\nbe appended to the job payload such that when the job executes it can inform the\nuser of all of these DMs, not just the latest one."))}c.isMDXComponent=!0}}]);