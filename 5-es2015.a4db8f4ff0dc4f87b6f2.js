(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{rSwl:function(n,t,l){"use strict";l.r(t);var e=l("8Y7J");class r{constructor(){}ngOnInit(){}historyBack(){history.go(-1)}}class i{}var o=l("pMnS"),u=e.mb({encapsulation:0,styles:[[""]],data:{}});function c(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,3,"div",[["style","text-align: center"]],null,null,null,null,null)),(n()(),e.ob(1,0,null,null,1,"button",[["style","float: left"]],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.historyBack()&&e),e}),null,null)),(n()(),e.Bb(-1,null,["\u8fd4\u56de"])),(n()(),e.Bb(-1,null,[" Git\u5e38\u7528\u547d\u4ee4\n"])),(n()(),e.ob(4,0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),e.Bb(-1,null,['git reset --sort [commit] \u91cd\u7f6e\u5f53\u524d\u5206\u652f\u7684\u6307\u9488\u5230\u6307\u5b9a\u7684commit\uff0c\u4e0d\u6539\u53d8\u6682\u5b58\u533a\u548c\u5de5\u4f5c\u533a\u7684\u6539\u52a8\ngit reset --hard [commit] \u91cd\u7f6e\u5f53\u524d\u5206\u652f\u7684\u6307\u9488\u5230\u6307\u5b9a\u7684commit\uff0c\u540c\u65f6\u91cd\u7f6e\u5de5\u4f5c\u533a\u548c\u6682\u5b58\u533a\u7684\u6587\u4ef6\uff0c\u4e0e\u6307\u5b9a\u7684\u63d0\u4ea4\u4fdd\u6301\u4e00\u81f4\n\ngit stash \u5c06\u672a\u63d0\u4ea4\u7684\u66f4\u6539\u53d8\u5316\u6682\u5b58\u8d77\u6765\uff0c\u6682\u65f6\u79fb\u51fa\u5de5\u4f5c\u533a\u548c\u6682\u5b58\u533a\n\ngit cherry-pick [commit1] [commit2]\u5c06\u6307\u5b9a\u7684\u5176\u4ed6\u5206\u652f\u7684\u63d0\u4ea4\u63d0\u4ea4\u5230\u5f53\u524d\u5206\u652f\n-n \u53ea\u66f4\u65b0\u5de5\u4f5c\u533a\u548c\u6682\u5b58\u533a\uff0c\u4e0d\u4ea7\u751f\u65b0\u7684\u63d0\u4ea4\n--continue \u89e3\u51b3\u51b2\u7a81\u540e\uff0cgit add\u81f3\u6682\u5b58\u533a\uff0c\u7136\u540egit cherry-pick --continue\n\ngit branch --track [branch] [remote-branch] \u65b0\u5efa\u4e00\u4e2a\u5206\u652f\uff0c\u5e76\u4e0e\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\ngit branch -v \u67e5\u770b\u672c\u5730\u5206\u652f -vv \u4ea7\u770b\u672c\u5730\u5206\u652f\u53ca\u5bf9\u5e94\u7684\u8fdc\u7a0b\u5206\u652f\u7684\u5173\u7cfb\ngit branch --set-upstream-to/-u [branch] [remote-branch] \u5c06\u5f53\u524d\u5206\u652f\u4e0e\u6307\u5b9a\u7684\u8fdc\u7a0b\u5206\u652f\u5efa\u7acb\u8ffd\u8e2a\u5173\u7cfb\ngit branch --set-upstream-to=origin/[remote-branch] [branch]\ngit branch -d [branch] \u5220\u9664\u672c\u5730\u5206\u652f -D \u5f3a\u5236\u5220\u9664\n\ngit revert [commit] \u64a4\u9500\u6307\u5b9a\u7684\u7248\u672c\uff0c\u64a4\u9500\u4e5f\u4f1a\u4f5c\u4e3a\u4e00\u6b21\u63d0\u4ea4\u8fdb\u884c\u4fdd\u5b58\n\ngit checkout [branch] \u5207\u6362\u5230\u6307\u5b9a\u5206\u652f\n-b \u65b0\u5efa\u5206\u652f\u5e76\u5207\u6362\u5230\u8be5\u5206\u652f\ngit checkout -b [branch] [remote-brabch] \u65b0\u5efa\u5206\u652f,\u5207\u6362\u5230\u8be5\u5206\u652f\u5e76\u4e14\u8ddf\u8e2a\u8fdc\u7a0b\u5206\u652f\n\ngit merge -n [other-branch] \u5408\u5e76\u5176\u5206\u652f\u5230\u5f53\u524d\u5206\u652f\uff0c -n \u4e0d\u63d0\u4ea4\u4ee3\u7801\ngit merge --abort \u53d6\u6d88\u5408\u5e76\n\nssh-keygen -t rsa -C "your_email@example.com"  \u751f\u6210git\u516c\u94a5\u548c\u79c1\u94a5\n\ngit pull origin [remote-branch] \u62c9\u53d6\u8fdc\u7a0b\u5206\u652f\u5230\u5f53\u524d\u5206\u652f\n\n\ngit rebase --continue\ngit rebase --skip\ngit rebase --abort\n\n\u64a4\u9500\u67d0\u6b21commit\u7684\u67d0\u4e2a\u6587\u4ef6\u7684\u66f4\u6539\ngit reset [last-commit] [filename] -> git checkout [filename] -> git commit --amend -no-edit \n\n\u65b0\u5efa\u4e00\u4e2a\u5206\u652f\u540e\u7528\u8fdc\u7a0b\u5206\u652f\u8986\u76d6\u6b64\u5206\u652f\uff08\u5f53\u524d\u5206\u652f\u4e3a\u65b0\u5efa\u7684\u5206\u652f\uff09\ngit fetch --all  ->  git reset --hard origin/[remote-baranch-name]\n\n\u4fee\u6539\u8fdc\u7a0b\u4ed3\u5e93\u5730\u5740\ngit remote set-url origin  [url]\ngit remote set-url --add/--delete origin  [url]\v\v\n\u5728\u672c\u5730\u66f4\u65b0\u8fdc\u7a0b\u4ed3\u5e93\u65b0\u5efa\u7684\u5206\u652f\uff08\u8fdc\u7a0b\u4ed3\u5e93\u65b0\u5efa\u4e86\u5206\u652f\u4f46\u662f\u672c\u5730\u62c9\u4e0d\u4e0b\u6765\uff09\ngit remote update origin --prune\n']))],null,null)}function a(n){return e.Cb(0,[(n()(),e.ob(0,0,null,null,1,"app-git",[],null,null,null,c,u)),e.nb(1,114688,null,0,r,[],null,null)],(function(n,t){n(t,1,0)}),null)}var b=e.kb("app-git",r,a,{},{},[]),g=l("iInd");l.d(t,"GitModuleNgFactory",(function(){return m}));var m=e.lb(i,[],(function(n){return e.wb([e.xb(512,e.j,e.W,[[8,[o.a,b]],[3,e.j],e.v]),e.xb(1073742336,g.o,g.o,[[2,g.t],[2,g.k]]),e.xb(1073742336,i,i,[]),e.xb(1024,g.i,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);