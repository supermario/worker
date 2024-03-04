"use strict";(self.webpackChunkgraphile_worker=self.webpackChunkgraphile_worker||[]).push([[1644],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(5773),r=(n(7378),n(5318));const i={title:"Administrative functions",sidebar_position:100},o=void 0,l={unversionedId:"admin-functions",id:"admin-functions",title:"Administrative functions",description:"When implementing an administrative UI you may need more control over the jobs.",source:"@site/docs/admin-functions.md",sourceDirName:".",slug:"/admin-functions",permalink:"/docs/admin-functions",draft:!1,editUrl:"https://github.com/graphile/worker/tree/main/website/docs/admin-functions.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Administrative functions",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Recurring tasks (crontab)",permalink:"/docs/cron"},next:{title:"The 'jobs' view",permalink:"/docs/jobs-view"}},s={},d=[{value:"Complete jobs",id:"complete-jobs",level:2},{value:"Permanently fail jobs",id:"permanently-fail-jobs",level:2},{value:"Rescheduling jobs",id:"rescheduling-jobs",level:2},{value:"Force unlock workers",id:"force-unlock-workers",level:2},{value:"Database cleanup",id:"database-cleanup",level:2},{value:"GC_JOB_QUEUES",id:"gc_job_queues",level:3},{value:"GC_TASK_IDENTIFIERS",id:"gc_task_identifiers",level:3},{value:"DELETE_PERMAFAILED_JOBS",id:"delete_permafailed_jobs",level:3},{value:"Example",id:"example",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When implementing an administrative UI you may need more control over the jobs.\nFor this we have added a few administrative functions that can be called in SQL\nor through the JS API. The JS API is exposed via a ",(0,r.kt)("inlineCode",{parentName:"p"},"WorkerUtils")," instance; see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/library/queue#makeworkerutils"},(0,r.kt)("inlineCode",{parentName:"a"},"makeWorkerUtils")),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you choose to run ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," commands against the underlying\ntables, be sure to ",(0,r.kt)("em",{parentName:"p"},"NOT")," manipulate jobs that are locked as this could have\nunintended consequences. The following administrative functions will\nautomatically ensure that the jobs are not locked before applying any changes.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"These methods are not meant to be called on the currently running job from\ninside the job itself; they are administration functions intended to be called\nexternally. Unless otherwise noted, these functions ignore locked jobs (which\nincludes all currently running jobs).")),(0,r.kt)("h2",{id:"complete-jobs"},"Complete jobs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="SQL API"',title:'"SQL','API"':!0},"SELECT * FROM graphile_worker.complete_jobs(ARRAY[7, 99, 38674, ...]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="JS API"',title:'"JS','API"':!0},"const deletedJobs = await workerUtils.completeJobs([7, 99, 38674, ...]);\n")),(0,r.kt)("p",null,"Marks the specified jobs (by their ids) as if they were completed, assuming they\nare not locked. Note that completing a job deletes it. You may mark failed and\npermanently failed jobs as completed if you wish. The deleted jobs will be\nreturned (note that this may be fewer jobs than you requested)."),(0,r.kt)("h2",{id:"permanently-fail-jobs"},"Permanently fail jobs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="SQL API"',title:'"SQL','API"':!0},"SELECT * FROM graphile_worker.permanently_fail_jobs(ARRAY[7, 99, 38674, ...], 'Enter reason here');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="JS API"',title:'"JS','API"':!0},"const updatedJobs = await workerUtils.permanentlyFailJobs([7, 99, 38674, ...], 'Enter reason here');\n")),(0,r.kt)("p",null,"Marks the specified jobs (by their ids) as failed permanently, assuming they are\nnot locked. This means setting their ",(0,r.kt)("inlineCode",{parentName:"p"},"attempts")," equal to their ",(0,r.kt)("inlineCode",{parentName:"p"},"max_attempts"),".\nThe updated jobs will be returned (note that this may be fewer jobs than you\nrequested)."),(0,r.kt)("h2",{id:"rescheduling-jobs"},"Rescheduling jobs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="SQL API"',title:'"SQL','API"':!0},"SELECT * FROM graphile_worker.reschedule_jobs(\n  ARRAY[7, 99, 38674, ...],\n  run_at := NOW() + interval '5 minutes',\n  priority := 5,\n  attempts := 5,\n  max_attempts := 25\n);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="JS API"',title:'"JS','API"':!0},"const updatedJobs = await workerUtils.rescheduleJobs(\n  [7, 99, 38674, ...],\n  {\n    runAt: '2020-02-02T02:02:02Z',\n    priority: 5,\n    attempts: 5,\n    maxAttempts: 25\n  }\n);\n")),(0,r.kt)("p",null,"Updates the specified scheduling properties of the jobs (assuming they are not\nlocked). All of the specified options are optional, omitted or null values will\nleft unmodified."),(0,r.kt)("p",null,"This method can be used to postpone or advance job execution, or to schedule a\npreviously failed or permanently failed job for execution. The updated jobs will\nbe returned (note that this may be fewer jobs than you requested)."),(0,r.kt)("h2",{id:"force-unlock-workers"},"Force unlock workers"),(0,r.kt)("p",null,"(Since v0.16)"),(0,r.kt)("p",null,'If a worker crashes or is otherwise terminated without unlocking its jobs, then\nthose jobs will remain locked for 4 hours before they can be re-attempted. If\nyou have a system in place that can determine this has happened (for example a\nheartbeat server, or the process that runs Graphile Worker notices that it has\nexited) then you can use the "force unlock workers" functionality to unlock all\nof the jobs from the given list of worker IDs.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="SQL API"',title:'"SQL','API"':!0},"SELECT graphile_worker.force_unlock_workers(ARRAY[\n  'worker-0d069f0d6be41d1adb',\n  'worker-cd357d05e3382cd169'\n]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="JS API"',title:'"JS','API"':!0},'await workerUtils.forceUnlockWorkers([\n  "worker-0d069f0d6be41d1adb",\n  "worker-cd357d05e3382cd169",\n]);\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"only")," legitimate reason to manually unlock a job is if the worker has\ncrashed/died/exited/ceased to exist; in all other cases it's almost certainly\nthe wrong thing to do. That is why this method relates to unlocking any jobs\nfrom the given list of crashed workers (rather than unlocking jobs directly via\ntheir IDs/keys). Do ",(0,r.kt)("strong",{parentName:"p"},"NOT")," pass any alive worker ids to this method or Bad\nThings may happen.")),(0,r.kt)("h2",{id:"database-cleanup"},"Database cleanup"),(0,r.kt)("p",null,"Over time it's likely that graphile_worker's tables will grow with stale values\nfor old job queue names, task identifiers, or permanently failed jobs. You can\nclean up this stale information with the cleanup function, indicating which\ncleanup operations you would like to undertake."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you find yourself calling this quite often or on a schedule, it's likely that\nyou are doing something wrong (e.g. allowing jobs to permafail, using random\nvalues for job queue names, etc).")),(0,r.kt)("h3",{id:"gc_job_queues"},"GC_JOB_QUEUES"),(0,r.kt)("p",null,"Delete job queues that don't contain any jobs. Safe."),(0,r.kt)("h3",{id:"gc_task_identifiers"},"GC_TASK_IDENTIFIERS"),(0,r.kt)("p",null,"Deletes task identifiers that don't contain any jobs. Unsafe to execute whilst\nany Worker is running."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"It is currently unsafe to run this whilst any Graphile Worker instance is\nrunning since any task identifiers for which there are no jobs queued will be\ndeleted; when another job with that identifier is queued a ",(0,r.kt)("em",{parentName:"p"},"new")," unique\nidentifier will be generated and that won't match the internal identifiers that\nthe running workers have cached.")),(0,r.kt)("h3",{id:"delete_permafailed_jobs"},"DELETE_PERMAFAILED_JOBS"),(0,r.kt)("p",null,"Deletes any unlocked jobs that will never be reattempted due to ",(0,r.kt)("inlineCode",{parentName:"p"},"attempts"),"\nreaching ",(0,r.kt)("inlineCode",{parentName:"p"},"max_attempts"),". Will delete this data, but is otherwise safe."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should write your tasks such that no job will ever permafail; for example\nafter 20 attempts you might have the job do some cleanup and then exit\nsuccessfuly.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"In the CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"graphile-worker --cleanup DELETE_PERMAFAILED_JOBS,GC_TASK_IDENTIFIERS,GC_JOB_QUEUES\n")),(0,r.kt)("p",null,"Or in the library using ",(0,r.kt)("a",{parentName:"p",href:"/docs/library/queue#workerutils"},"WorkerUtils"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="JS API"',title:'"JS','API"':!0},'await workerUtils.cleanup([\n  "DELETE_PERMAFAILED_JOBS",\n  "GC_TASK_IDENTIFIERS",\n  "GC_JOB_QUEUES",\n]);\n')))}c.isMDXComponent=!0}}]);