(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function ti(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Bh(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_r={duration:.5,overwrite:!1,delay:0},Rl,Xe,Se,An=1e8,pe=1/An,To=Math.PI*2,Md=To/4,Sd=0,zh=Math.sqrt,Ed=Math.cos,bd=Math.sin,He=function(t){return typeof t=="string"},Pe=function(t){return typeof t=="function"},ri=function(t){return typeof t=="number"},Pl=function(t){return typeof t>"u"},qn=function(t){return typeof t=="object"},sn=function(t){return t!==!1},Ll=function(){return typeof window<"u"},Ir=function(t){return Pe(t)||He(t)},Vh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,Td=/random\([^)]+\)/g,wd=/,\s*/g,uc=/(?:-?\.?\d|\.)+/gi,Gh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Na=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hh=/[+-]=-?[.\d]+/,Ad=/[^,'"\[\]\s]+/gi,Cd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Te,Bn,wo,Dl,Mn={},ma={},Wh,Xh=function(t){return(ma=Fs(t,Mn))&&hn},Il=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},gr=function(t,e){return!e&&console.warn(t)},qh=function(t,e){return t&&(Mn[t]=e)&&ma&&(ma[t]=e)||Mn},vr=function(){return 0},Rd={suppressEvents:!0,isStart:!0,kill:!1},ra={suppressEvents:!0,kill:!1},Pd={suppressEvents:!0},Nl={},Si=[],Ao={},Yh,mn={},Ua={},dc=30,aa=[],Ul="",Ol=function(t){var e=t[0],n,i;if(qn(e)||Pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=aa.length;i--&&!aa[i].targetTest(e););n=aa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new mu(t[i],n)))||t.splice(i,1);return t},$i=function(t){return t._gsap||Ol(Cn(t))[0]._gsap},Kh=function(t,e,n){return(n=t[e])&&Pe(n)?t[e]():Pl(n)&&t.getAttribute&&t.getAttribute(e)||n},rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Le=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},Ps=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ld=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},_a=function(){var t=Si.length,e=Si.slice(0),n,i;for(Ao={},Si.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fl=function(t){return!!(t._initted||t._startAt||t.add)},jh=function(t,e,n,i){Si.length&&!Xe&&_a(),t.render(e,n,!!(Xe&&e<0&&Fl(t))),Si.length&&!Xe&&_a()},$h=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ad).length<2?e:He(t)?t.trim():t},Zh=function(t){return t},Sn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Dd=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Fs=function(t,e){for(var n in e)t[n]=e[n];return t},fc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=qn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ga=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ur=function(t){var e=t.parent||Te,n=t.keyframes?Dd($e(t.keyframes)):Sn;if(sn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Id=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Jh=function(t,e,n,i,r){var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ta=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},wi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Nd=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Co=function(t,e,n,i){return t._startAt&&(Xe?t._startAt.revert(ra):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ud=function s(t){return!t||t._ts&&s(t.parent)},pc=function(t){return t._repeat?ks(t._tTime,t=t.duration()+t._rDelay)*t:0},ks=function(t,e){var n=Math.floor(t=be(t/e));return t&&n===t?n-1:n},va=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},wa=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||pe)||0))},Aa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),wa(t),n._dirty||Zi(n,t)),t},Qh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=va(t.rawTime(),e),(!e._dur||wr(0,e.totalDuration(),n)-e._tTime>pe)&&e.render(n,!0)),Zi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-pe}},Gn=function(t,e,n,i){return e.parent&&wi(e),e._start=be((ri(n)?n:n||t!==Te?Tn(t,n,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Jh(t,e,"_first","_last",t._sort?"_start":0),Ro(e)||(t._recent=e),i||Qh(t,e),t._ts<0&&Aa(t,t._tTime),t},tu=function(t,e){return(Mn.ScrollTrigger||Il("scrollTrigger",e))&&Mn.ScrollTrigger.create(e,t)},eu=function(t,e,n,i,r){if(Bl(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Xe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Yh!==gn.frame)return Si.push(t),t._lazy=[r,i],1},Od=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ro=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Fd=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Od(t)&&!(!t._initted&&Ro(t))||(t._ts<0||t._dp._ts<0)&&!Ro(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=wr(0,t._tDur,e),h=ks(l,o),t._yoyo&&h&1&&(a=1-a),h!==ks(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Xe||i||t._zTime===pe||!e&&t._zTime){if(!t._initted&&eu(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?pe:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Co(t,e,n,!0),t._onUpdate&&!n&&vn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&wi(t,1),!n&&!Xe&&(vn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},kd=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Bs=function(t,e,n,i){var r=t._repeat,a=be(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:be(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Aa(t,t._tTime=t._tDur*o),t.parent&&wa(t),n||Zi(t.parent,t),t},mc=function(t){return t instanceof nn?Zi(t):Bs(t,t._dur)},Bd={_start:0,endTime:vr,totalDuration:vr},Tn=function s(t,e,n){var i=t.labels,r=t._recent||Bd,a=t.duration()>=An?r.endTime(!1):t._dur,o,l,c;return He(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*($e(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},dr=function(t,e,n){var i=ri(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;a.immediateRender=sn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Ie(e[0],a,e[r+1])},Li=function(t,e){return t||t===0?e(t):e},wr=function(t,e,n){return n<t?t:n>e?e:n},je=function(t,e){return!He(t)||!(e=Cd.exec(t))?"":e[1]},zd=function(t,e,n){return Li(n,function(i){return wr(t,e,i)})},Po=[].slice,nu=function(t,e){return t&&qn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&qn(t[0]))&&!t.nodeType&&t!==Bn},Vd=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return He(i)&&!e||nu(i,1)?(r=n).push.apply(r,Cn(i)):n.push(i)})||n},Cn=function(t,e,n){return Se&&!e&&Se.selector?Se.selector(t):He(t)&&!n&&(wo||!zs())?Po.call((e||Dl).querySelectorAll(t),0):$e(t)?Vd(t,n):nu(t)?Po.call(t,0):t?[t]:[]},Lo=function(t){return t=Cn(t)[0]||gr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Cn(e,n.querySelectorAll?n:n===t?gr("Invalid scope")||Dl.createElement("div"):t)}},iu=function(t){return t.sort(function(){return .5-Math.random()})},su=function(t){if(Pe(t))return t;var e=qn(t)?t:{each:t},n=Ji(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return He(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,m=a[_],p,x,y,v,A,w,T,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,An])[1],!M){for(T=-An;T<(T=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*h-.5:i%M,x=M===An?0:l?_*d/M-.5:i/M|0,T=0,C=An,w=0;w<_;w++)y=w%M-p,v=x-(w/M|0),m[w]=A=c?Math.abs(c==="y"?v:y):zh(y*y+v*v),A>T&&(T=A),A<C&&(C=A);i==="random"&&iu(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=je(e.amount||e.each)||0,n=n&&_<0?tf(n):n}return _=(m[u]-m.min)/m.max||0,be(m.b+(n?n(_):_)*m.v)+m.u}},Do=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ri(n)?0:je(n))}},ru=function(t,e){var n=$e(t),i,r;return!n&&qn(t)&&(i=n=t.radius||An,t.values?(t=Cn(t.values),(r=!ri(t[0]))&&(i*=i)):t=Do(t.increment)),Li(e,n?Pe(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=An,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,r||h===a||ri(a)?h:h+je(a)}:Do(t))},au=function(t,e,n,i){return Li($e(t)?!e:n===!0?!!(n=0):!i,function(){return $e(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Gd=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Hd=function(t,e){return function(n){return t(parseFloat(n))+(e||je(n))}},Wd=function(t,e,n){return lu(t,e,0,1,n)},ou=function(t,e,n){return Li(n,function(i){return t[~~e(i)]})},Xd=function s(t,e,n){var i=e-t;return $e(t)?ou(t,s(0,t.length),e):Li(n,function(r){return(i+(r-t)%i)%i+t})},qd=function s(t,e,n){var i=e-t,r=i*2;return $e(t)?ou(t,s(0,t.length-1),e):Li(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},xr=function(t){return t.replace(Td,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(wd);return au(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},lu=function(t,e,n,i,r){var a=e-t,o=i-n;return Li(r,function(l){return n+((l-t)/a*o||0)})},Yd=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=He(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if($e(t)&&!$e(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Fs($e(t)?[]:{},t));if(!h){for(l in e)kl.call(o,t,l,"get",e[l]);r=function(g){return Gl(g,o)||(a?t.p:t)}}}return Li(n,r)},_c=function(t,e,n){var i=t.labels,r=An,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},vn=function(t,e,n){var i=t.vars,r=i[e],a=Se,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Si.length&&_a(),o&&(Se=o),h=l?r.apply(c,l):r.call(c),Se=a,h},or=function(t){return wi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Xe),t.progress()<1&&vn(t,"onInterrupt"),t},ws,cu=[],hu=function(t){if(t)if(t=!t.name&&t.default||t,Ll()||t.headless){var e=t.name,n=Pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:vr,render:Gl,add:kl,kill:uf,modifier:hf,rawVars:0},a={targetTest:0,get:0,getSetter:Vl,aliases:{},register:0};if(zs(),t!==i){if(mn[e])return;Sn(i,Sn(ga(t,r),a)),Fs(i.prototype,Fs(r,ga(t,a))),mn[i.prop=e]=i,t.targetTest&&(aa.push(i),Nl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}qh(e,i),t.register&&t.register(hn,i,an)}else cu.push(t)},fe=255,lr={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},Oa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*fe+.5|0},uu=function(t,e,n){var i=t?ri(t)?[t>>16,t>>8&fe,t&fe]:0:lr.black,r,a,o,l,c,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),lr[t])i=lr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&fe,i&fe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&fe,t&fe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(uc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Oa(l+1/3,r,a),i[1]=Oa(l,r,a),i[2]=Oa(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(Gh),n&&i.length<4&&(i[3]=1),i}else i=t.match(uc)||lr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/fe,a=i[1]/fe,o=i[2]/fe,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},du=function(t){var e=[],n=[],i=-1;return t.split(Ei).forEach(function(r){var a=r.match(Ts)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},gc=function(t,e,n){var i="",r=(t+i).match(Ei),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=uu(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=du(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ei,"1").split(Ts),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ei),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},Ei=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in lr)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Kd=/hsl[a]?\(/,fu=function(t){var e=t.join(" "),n;if(Ei.lastIndex=0,Ei.test(e))return n=Kd.test(e),t[1]=gc(t[1],n),t[0]=gc(t[0],n,du(t[1])),!0},yr,gn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,d,u,f,g=function _(m){var p=s()-i,x=m===!0,y,v,A,w;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,y=A-a,(y>0||x)&&(w=++d.frame,u=A-d.time*1e3,d.time=A=A/1e3,a+=y+(y>=r?4:r-y),v=1),x||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](A,u,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Wh&&(!wo&&Ll()&&(Bn=wo=window,Dl=Bn.document||{},Mn.gsap=hn,(Bn.gsapVersions||(Bn.gsapVersions=[])).push(hn.version),Xh(ma||Bn.GreenSockGlobals||!Bn.gsap&&Bn||{}),cu.forEach(hu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},yr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),yr=0,c=vr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,p,x){var y=p?function(v,A,w,T){m(v,A,w,T),d.remove(y)}:m;return d.remove(m),o[x?"unshift":"push"](y),zs(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),zs=function(){return!yr&&gn.wake()},ne={},jd=/^[\d.\-M][\d.\-,\s]/,$d=/["']/g,Zd=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace($d,"").trim():+c,i=l.substr(o+1).trim();return e},Jd=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Qd=function(t){var e=(t+"").split("("),n=ne[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Zd(e[1])]:Jd(t).split(",").map($h)):ne._CE&&jd.test(t)?ne._CE("",t):n},tf=function(t){return function(e){return 1-t(1-e)}},Ji=function(t,e){return t&&(Pe(t)?t:ne[t]||Qd(t))||e},rs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return rn(t,function(o){ne[o]=Mn[o]=r,ne[a=o.toLowerCase()]=n;for(var l in r)ne[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ne[o+"."+l]=r[l]}),r},pu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Fa=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/To*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*bd((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:pu(o);return r=To/r,l.config=function(c,h){return s(t,c,h)},l},ka=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:pu(n);return i.config=function(r){return s(t,r)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;rs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ne.Linear.easeNone=ne.none=ne.Linear.easeIn;rs("Elastic",Fa("in"),Fa("out"),Fa());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};rs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);rs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});rs("Circ",function(s){return-(zh(1-s*s)-1)});rs("Sine",function(s){return s===1?1:-Ed(s*Md)+1});rs("Back",ka("in"),ka("out"),ka());ne.SteppedEase=ne.steps=Mn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-pe;return function(o){return((i*wr(0,a,o)|0)+r)*n}}};_r.ease=ne["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ul+=s+","+s+"Params,"});var mu=function(t,e){this.id=Sd++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Kh,this.set=e?e.getSetter:Vl},Mr=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bs(this,+e.duration,1,1),this.data=e.data,Se&&(this._ctx=Se,Se.data.push(this)),yr||gn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(zs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Aa(this,n),!r._dp||r.parent||Qh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ks(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-pe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?va(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pe?0:this._rts,this.totalTime(wr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),wa(this),Nd(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pe&&(this._tTime-=pe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=be(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?va(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Pd);var i=Xe;return Xe=n,Fl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Xe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Tn(this,n),sn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,sn(i)),this._dur||(this._zTime=-pe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-pe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-pe)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Pe(n)?n:Zh,l=function(){var h=i.then;i.then=null,r&&r(),Pe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){or(this)},s})();Sn(Mr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pe,_prom:0,_ps:!1,_rts:1});var nn=(function(s){Bh(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=sn(n.sortChildren),Te&&Gn(n.parent||Te,ti(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&tu(ti(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return dr(0,arguments,this),this},e.from=function(i,r,a){return dr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return dr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,ur(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ie(i,r,Tn(this,a),1),this},e.call=function(i,r,a){return Gn(this,Ie.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ie(i,a,Tn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,ur(a).immediateRender=sn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,d){return o.startAt=a,ur(o).immediateRender=sn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,d)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:be(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,m,p,x,y,v,A,w,T;if(this!==Te&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,v=this._start,y=this._ts,p=!y,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(u=be(h%m),h===l?(_=this._repeat,u=c):(A=be(h/m),_=~~A,_&&_===A&&(u=c,_--),u>c&&(u=c)),A=ks(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(u=c-u,T=1),_!==A&&!this._lock){var C=w&&A&1,M=C===(w&&_&1);if(_<A&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:be(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=kd(this,be(o),be(u)),x&&(h-=u-(u=x._start))),this._tTime=h,this._time=u,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!A&&(vn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=-pe);break}}f=g}else{f=this._last;for(var S=i<0?i:u;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,a||Xe&&Fl(f)),u!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=S?-pe:pe);break}}f=g}}if(x&&!r&&(this.pause(),x.render(u>=o?0:-pe)._zTime=u>=o?1:-1,this._ts))return this._start=v,wa(this),this.render(i,r,a);this._onUpdate&&!r&&vn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&wi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(vn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(ri(r)||(r=Tn(this,r,i)),!(i instanceof Mr)){if($e(i))return i.forEach(function(o){return a.add(o,r)}),this;if(He(i))return this.addLabel(i,r);if(Pe(i))i=Ie.delayedCall(0,i);else return this}return this!==i?Gn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-An);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ie?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return He(i)?this.removeLabel(i):Pe(i)?this.killTweensOf(i):(i.parent===this&&Ta(this,i),i===this._recent&&(this._recent=this._last),Zi(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Tn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Ie.delayedCall(0,r||vr,a);return o.data="isPause",this._hasPause=1,Gn(this,o,Tn(this,i))},e.removePause=function(i){var r=this._first;for(i=Tn(this,i);r;)r._start===i&&r.data==="isPause"&&wi(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)xi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Cn(i),l=this._first,c=ri(r),h;l;)l instanceof Ie?Ld(l._targets,o)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Tn(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=Ie.to(a,Sn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pe,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Bs(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},r));return u?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,Sn({startAt:{time:Tn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),_c(this,Tn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),_c(this,Tn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pe)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=be(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Zi(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zi(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=An,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=be(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Bs(a,a===Te&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Te._ts&&(jh(Te,va(i,Te)),Yh=gn.frame),gn.frame>=dc){dc+=yn.autoSleep||120;var r=Te._first;if((!r||!r._ts)&&yn.autoSleep&&gn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||gn.sleep()}}},t})(Mr);Sn(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ef=function(t,e,n,i,r,a,o){var l=new an(this._pt,t,e,0,1,Mu,null,r),c=0,h=0,d,u,f,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=xr(i)),a&&(x=[n,i],a(x,t,e),n=x[0],i=x[1]),u=n.match(Na)||[];d=Na.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Ps(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Na.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Hh.test(i)||p)&&(l.e=0),this._pt=l,l},kl=function(t,e,n,i,r,a,o,l,c,h){Pe(i)&&(i=i(r||0,t,a));var d=t[e],u=n!=="get"?n:Pe(d)?c?t[e.indexOf("set")||!Pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Pe(d)?c?of:xu:zl,g;if(He(i)&&(~i.indexOf("random(")&&(i=xr(i)),i.charAt(1)==="="&&(g=Ps(u,i)+(je(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Io)return!isNaN(u*i)&&i!==""?(g=new an(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?cf:yu,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Il(e,i),ef.call(this,t,e,u,i,f,l||yn.stringFilter,c))},nf=function(t,e,n,i,r){if(Pe(t)&&(t=fr(t,r,e,n,i)),!qn(t)||t.style&&t.nodeType||$e(t)||Vh(t))return He(t)?fr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=fr(t[o],r,e,n,i);return a},_u=function(t,e,n,i,r,a){var o,l,c,h;if(mn[t]&&(o=new mn[t]).init(r,o.rawVars?e[t]:nf(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new an(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==ws))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},xi,Io,Bl=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!Rl,v=t.timeline,A=i.easeReverse||d,w,T,C,M,S,L,G,F,Y,J,H,Q,q;if(v&&(!u||!r)&&(r="none"),t._ease=Ji(r,_r.ease),t._rEase=A&&(Ji(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(F=m[0]?$i(m[0]).harness:0,Q=F&&i[F.prop],w=ga(i,Nl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?ra:Rd),_._lazy=0),a){if(wi(t._startAt=Ie.set(m,Sn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&sn(l),startAt:null,delay:0,onUpdate:c&&function(){return vn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Xe||!o&&!f)&&t._startAt.revert(ra),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),C=Sn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&sn(l),immediateRender:o,stagger:0,parent:p},w),Q&&(C[F.prop]=Q),wi(t._startAt=Ie.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Xe?t._startAt.revert(ra):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,pe,pe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&sn(l)||l&&!g,T=0;T<m.length;T++){if(S=m[T],G=S._gsap||Ol(m)[T]._gsap,t._ptLookup[T]=J={},Ao[G.id]&&Si.length&&_a(),H=x===m?T:x.indexOf(S),F&&(Y=new F).init(S,Q||w,t,H,x)!==!1&&(t._pt=M=new an(t._pt,S,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(dt){J[dt]=M}),Y.priority&&(L=1)),!F||Q)for(C in w)mn[C]&&(Y=_u(C,w,t,H,S,x))?Y.priority&&(L=1):J[C]=M=kl.call(t,S,C,"get",w[C],H,x,0,i.stringFilter);t._op&&t._op[T]&&t.kill(S,t._op[T]),y&&t._pt&&(xi=t,Te.killTweensOf(S,J,t.globalTime(e)),q=!t.parent,xi=0),t._pt&&l&&(Ao[G.id]=1)}L&&Su(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,u&&e<=0&&v.render(An,!0,!0)},sf=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Io=1,t.vars[e]="+=0",Bl(t,o),Io=0,l?gr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Le(n)+je(d.e)),d.b&&(d.b=h.s+je(d.b))},rf=function(t,e){var n=t[0]?$i(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=Fs({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},af=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if($e(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},fr=function(t,e,n,i,r){return Pe(t)?t.call(e,n,i,r):He(t)&&~t.indexOf("random(")?xr(t):t},gu=Ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",vu={};rn(gu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return vu[s]=1});var Ie=(function(s){Bh(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ur(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Te,x=($e(n)||Vh(n)?ri(n[0]):"length"in i)?[n]:Cn(n),y,v,A,w,T,C,M,S;if(o._targets=x.length?Ol(x):gr("GSAP target "+n+" not found. https://gsap.com",!yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||Ir(c)||Ir(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(y=o.timeline=new nn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),y.kill(),y.parent=y._dp=ti(o),y._start=0,u||Ir(c)||Ir(h)){if(w=x.length,M=u&&su(u),qn(u))for(T in u)~gu.indexOf(T)&&(S||(S={}),S[T]=u[T]);for(v=0;v<w;v++)A=ga(i,vu),A.stagger=0,L&&(A.easeReverse=L),S&&Fs(A,S),C=x[v],A.duration=+fr(c,ti(o),v,C,x),A.delay=(+fr(h,ti(o),v,C,x)||0)-o._delay,!u&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),y.to(C,A,M?M(v,C,x):0),y._ease=ne.none;y.duration()?c=h=0:o.timeline=0}else if(g){ur(Sn(y.vars.defaults,{ease:"none"})),y._ease=Ji(g.ease||i.ease||"none");var G=0,F,Y,J;if($e(g))g.forEach(function(H){return y.to(x,H,">")}),y.duration();else{A={};for(T in g)T==="ease"||T==="easeEach"||af(T,g[T],A,g.easeEach);for(T in A)for(F=A[T].sort(function(H,Q){return H.t-Q.t}),G=0,v=0;v<F.length;v++)Y=F[v],J={ease:Y.e,duration:(Y.t-(v?F[v-1].t:0))/100*c},J[T]=Y.v,y.to(x,J,G),G+=J.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!Rl&&(xi=ti(o),Te.killTweensOf(x),xi=0),Gn(p,ti(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===be(p._time)&&sn(d)&&Ud(ti(o))&&p.data!=="nested")&&(o._tTime=-pe,o.render(Math.max(0,-h)||0)),m&&tu(ti(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-pe&&!h?l:i<pe?0:i,u,f,g,_,m,p,x,y;if(!c)Fd(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(u=be(d%_),d===l?(g=this._repeat,u=c):(m=be(d/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(u=c-u),m=ks(this._tTime,_),u===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(be(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(eu(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var A=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(vn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Co(this,i,r,a),vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&vn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Co(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&wi(this,1),!r&&!(h&&!o)&&(d||o||p)&&(vn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){yr||gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Bl(this,c),h=this._ease(c/this._dur),sf(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Aa(this,0),this.parent||Jh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?or(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Xe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,xi&&xi.vars.overwrite!==!0)._first||or(this),this.parent&&a!==this.timeline.totalDuration()&&Bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Cn(i):o,c=this._ptLookup,h=this._pt,d,u,f,g,_,m,p;if((!r||r==="all")&&Id(o,l))return r==="all"&&(this._pt=0),or(this);for(d=this._op=this._op||[],r!=="all"&&(He(r)&&(_={},rn(r,function(x){return _[x]=1}),r=_),r=rf(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],r==="all"?(d[p]=r,g=u,f={}):(f=d[p]=d[p]||{},g=r);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ta(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&or(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return dr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return dr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Te.killTweensOf(i,r,a)},t})(Mr);Sn(Ie.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(s){Ie[s]=function(){var t=new nn,e=Po.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var zl=function(t,e,n){return t[e]=n},xu=function(t,e,n){return t[e](n)},of=function(t,e,n,i){return t[e](i.fp,n)},lf=function(t,e,n){return t.setAttribute(e,n)},Vl=function(t,e){return Pe(t[e])?xu:Pl(t[e])&&t.setAttribute?lf:zl},yu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},cf=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Mu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Gl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},hf=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},uf=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ta(this,e,"_pt"):e.dep||(n=1),e=i;return!n},df=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Su=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},an=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||yu,this.d=l||this,this.set=c||zl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=df,this.m=n,this.mt=r,this.tween=i},s})();rn(Ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Nl[s]=1});Mn.TweenMax=Mn.TweenLite=Ie;Mn.TimelineLite=Mn.TimelineMax=nn;Te=new nn({sortChildren:!1,defaults:_r,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yn.stringFilter=fu;var Qi=[],oa={},ff=[],vc=0,pf=0,Ba=function(t){return(oa[t]||ff).map(function(e){return e()})},No=function(){var t=Date.now(),e=[];t-vc>2&&(Ba("matchMediaInit"),Qi.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Bn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ba("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vc=t,Ba("matchMedia"))},Eu=(function(){function s(e,n){this.selector=n&&Lo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pf++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Pe(n)&&(r=i,i=n,n=Pe);var a=this,o=function(){var c=Se,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Lo(r)),Se=a,d=i.apply(a,arguments),Pe(d)&&a._r.push(d),Se=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Pe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Se;Se=null,n(this),Se=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ie&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ie)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Qi.length;a--;)Qi[a].id===this.id&&Qi.splice(a,1)},t.revert=function(n){this.kill(n||{})},s})(),mf=(function(){function s(e){this.contexts=[],this.scope=e,Se&&Se.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){qn(n)||(n={matches:n});var a=new Eu(0,r||this.scope),o=a.conditions={},l,c,h;Se&&!a.selector&&(a.selector=Se.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Bn.matchMedia(n[c]),l&&(Qi.indexOf(a)<0&&Qi.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(No):l.addEventListener("change",No)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),xa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return hu(i)})},timeline:function(t){return new nn(t)},getTweensOf:function(t,e){return Te.getTweensOf(t,e)},getProperty:function(t,e,n,i){He(t)&&(t=Cn(t)[0]);var r=$i(t||{}).get,a=n?Zh:$h;return n==="native"&&(n=""),t&&(e?a((mn[e]&&mn[e].get||r)(t,e,n,i)):function(o,l,c){return a((mn[o]&&mn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Cn(t),t.length>1){var i=t.map(function(h){return hn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var a=mn[e],o=$i(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;ws._pt=0,d.init(t,n?h+n:h,ws,0,[t]),d.render(1,d),ws._pt&&Gl(1,ws)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=hn.to(t,Sn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return Te.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ji(t.ease,_r.ease)),fc(_r,t||{})},config:function(t){return fc(yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!mn[o]&&!Mn[o]&&gr(e+" effect requires "+o+" plugin.")}),Ua[e]=function(o,l,c){return n(Cn(o),Sn(l||{},r),c)},a&&(nn.prototype[e]=function(o,l,c){return this.add(Ua[e](o,qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ne[t]=Ji(e)},parseEase:function(t,e){return arguments.length?Ji(t,e):ne},getById:function(t){return Te.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new nn(t),i,r;for(n.smoothChildTiming=sn(t.smoothChildTiming),Te.remove(n),n._dp=0,n._time=n._tTime=Te._time,i=Te._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ie&&i.vars.onComplete===i._targets[0]))&&Gn(n,i,i._start-i._delay),i=r;return Gn(Te,n,0),n},context:function(t,e){return t?new Eu(t,e):Se},matchMedia:function(t){return new mf(t)},matchMediaRefresh:function(){return Qi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||No()},addEventListener:function(t,e){var n=oa[t]||(oa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=oa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Xd,wrapYoyo:qd,distribute:su,random:au,snap:ru,normalize:Wd,getUnit:je,clamp:zd,splitColor:uu,toArray:Cn,selector:Lo,mapRange:lu,pipe:Gd,unitize:Hd,interpolate:Yd,shuffle:iu},install:Xh,effects:Ua,ticker:gn,updateRoot:nn.updateRoot,plugins:mn,globalTimeline:Te,core:{PropTween:an,globals:qh,Tween:Ie,Timeline:nn,Animation:Mr,getCache:$i,_removeLinkedListItem:Ta,reverting:function(){return Xe},context:function(t){return t&&Se&&(Se.data.push(t),t._ctx=Se),Se},suppressOverwrites:function(t){return Rl=t}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return xa[s]=Ie[s]});gn.add(nn.updateRoot);ws=xa.to({},{duration:0});var _f=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},gf=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=_f(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},za=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(He(r)&&(l={},rn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}gf(o,r)}}}},hn=xa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Xe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},za("roundProps",Do),za("modifiers"),za("snap",ru))||xa;Ie.version=nn.version=hn.version="3.15.0";Wh=1;Ll()&&zs();ne.Power0;ne.Power1;ne.Power2;ne.Power3;ne.Power4;ne.Linear;ne.Quad;ne.Cubic;ne.Quart;ne.Quint;ne.Strong;ne.Elastic;ne.Back;ne.SteppedEase;ne.Bounce;ne.Sine;ne.Expo;ne.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xc,yi,Ls,Hl,Yi,yc,Wl,vf=function(){return typeof window<"u"},ai={},Hi=180/Math.PI,Ds=Math.PI/180,hs=Math.atan2,Mc=1e8,Xl=/([A-Z])/g,xf=/(left|right|width|margin|padding|x)/i,yf=/[\s,\(]\S/,Wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Mf=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Sf=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ef=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bf=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Tu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Tf=function(t,e,n){return t.style[e]=n},wf=function(t,e,n){return t.style.setProperty(e,n)},Af=function(t,e,n){return t._gsap[e]=n},Cf=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Rf=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Pf=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},we="transform",on=we+"Origin",Lf=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ai&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Wn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ei(i,o)}):this.tfm[t]=a.x?a[t]:ei(i,t),t===on&&(this.tfm.zOrigin=a.zOrigin);else return Wn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(we)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(on,e,"")),t=we}(r||e)&&this.props.push(t,e,r[t])},wu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Df=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Xl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Wl(),(!r||!r.isStart)&&!n[we]&&(wu(n),i.zOrigin&&n[on]&&(n[on]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Au=function(t,e){var n={target:t,props:[],revert:Df,save:Lf};return t._gsap||hn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Cu,Oo=function(t,e){var n=yi.createElementNS?yi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):yi.createElement(t);return n&&n.style?n:yi.createElement(t)},xn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Vs(e)||e,1)||""},Sc="O,Moz,ms,Ms,Webkit".split(","),Vs=function(t,e,n){var i=e||Yi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Sc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Sc[a]:"")+t},Fo=function(){vf()&&window.document&&(xc=window,yi=xc.document,Ls=yi.documentElement,Yi=Oo("div")||{style:{}},Oo("div"),we=Vs(we),on=we+"Origin",Yi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cu=!!Vs("perspective"),Wl=hn.core.reverting,Hl=1)},Ec=function(t){var e=t.ownerSVGElement,n=Oo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ls.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ls.removeChild(n),r},bc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ru=function(t){var e,n;try{e=t.getBBox()}catch{e=Ec(t),n=1}return e&&(e.width||e.height)||n||(e=Ec(t)),e&&!e.width&&!e.x&&!e.y?{x:+bc(t,["x","cx","x1"])||0,y:+bc(t,["y","cy","y1"])||0,width:0,height:0}:e},Pu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ru(t))},Ai=function(t,e){if(e){var n=t.style,i;e in ai&&e!==on&&(e=we),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xl,"-$1").toLowerCase())):n.removeAttribute(e)}},Mi=function(t,e,n,i,r,a){var o=new an(t._pt,e,n,0,1,a?Tu:bu);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Tc={deg:1,rad:1,turn:1},If={grid:1,flex:1},Ci=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Yi.style,l=xf.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,m,p;if(i===a||!r||Tc[i]||Tc[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),p=t.getCTM&&Pu(t),(f||a==="%")&&(ai[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Le(f?r/g*d:r/100*g);if(o[l?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===yi||!_.appendChild)&&(_=yi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===gn.time&&!m.uncache)return Le(r/m.width*d);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=d+i,g=t[h],x?t.style[e]=x:Ai(t,e)}else(f||a==="%")&&!If[xn(_,"display")]&&(o.position=xn(t,"position")),_===t&&(o.position="static"),_.appendChild(Yi),g=Yi[h],_.removeChild(Yi),o.position="absolute";return l&&f&&(m=$i(_),m.time=gn.time,m.width=_[h]),Le(u?g*r/d:g&&r?d/g*r:0)},ei=function(t,e,n,i){var r;return Hl||Fo(),e in Wn&&e!=="transform"&&(e=Wn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ai[e]&&e!=="transform"?(r=Er(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ma(xn(t,on))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ya[e]&&ya[e](t,e,n)||xn(t,e)||Kh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ci(t,e,r,n)+n:r},Nf=function(t,e,n,i){if(!n||n==="none"){var r=Vs(e,t,1),a=r&&xn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=xn(t,"borderTopColor"))}var o=new an(this._pt,t.style,e,0,1,Mu),l=0,c=0,h,d,u,f,g,_,m,p,x,y,v,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=xn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=xn(t,e)||i,_?t.style[e]=_:Ai(t,e)),h=[n,i],fu(h),n=h[0],i=h[1],u=n.match(Ts)||[],A=i.match(Ts)||[],A.length){for(;d=Ts.exec(i);)m=d[0],x=i.substring(l,d.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ps(f,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=Ts.lastIndex-y.length,y||(y=y||yn.units[e]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(f=Ci(t,e,_,y)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Tu:bu;return Hh.test(i)&&(o.e=0),this._pt=o,o},wc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Uf=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=wc[n]||n,e[1]=wc[i]||i,e.join(" ")},Of=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ai[o]&&(l=1,o=o==="transformOrigin"?on:we),Ai(n,o);l&&(Ai(n,we),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Er(n,1),a.uncache=1,wu(i)))}},ya={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new an(t._pt,e,n,0,0,Of);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Sr=[1,0,0,1,0,0],Lu={},Du=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ac=function(t){var e=xn(t,we);return Du(e)?Sr:e.substr(7).match(Gh).map(Le)},ql=function(t,e){var n=t._gsap||$i(t),i=t.style,r=Ac(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Sr:r):(r===Sr&&!t.offsetParent&&t!==Ls&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ls.appendChild(t)),r=Ac(t),l?i.display=l:Ai(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ls.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ko=function(t,e,n,i,r,a){var o=t._gsap,l=r||ql(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],y=e.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,w,T,C,M;n?l!==Sr&&(T=f*m-g*_)&&(C=v*(m/T)+A*(-_/T)+(_*x-m*p)/T,M=v*(-g/T)+A*(f/T)-(f*x-g*p)/T,v=C,A=M):(w=Ru(t),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(y[1]||y[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(p=v-c,x=A-h,o.xOffset=d+(p*f+x*_)-p,o.yOffset=u+(p*g+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[on]="0px 0px",a&&(Mi(a,o,"xOrigin",c,v),Mi(a,o,"yOrigin",h,A),Mi(a,o,"xOffset",d,o.xOffset),Mi(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},Er=function(t,e){var n=t._gsap||new mu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=xn(t,on)||"0",h,d,u,f,g,_,m,p,x,y,v,A,w,T,C,M,S,L,G,F,Y,J,H,Q,q,dt,N,P,at,pt,V,K;return h=d=u=_=m=p=x=y=v=0,f=g=1,n.svg=!!(t.getCTM&&Pu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[we]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[we]!=="none"?l[we]:"")),i.scale=i.rotate=i.translate="none"),T=ql(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",Q=""):Q=!e&&t.getAttribute("data-svg-origin"),ko(t,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,w=n.yOrigin||0,T!==Sr&&(L=T[0],G=T[1],F=T[2],Y=T[3],h=J=T[4],d=H=T[5],T.length===6?(f=Math.sqrt(L*L+G*G),g=Math.sqrt(Y*Y+F*F),_=L||G?hs(G,L)*Hi:0,x=F||Y?hs(F,Y)*Hi+_:0,x&&(g*=Math.abs(Math.cos(x*Ds))),n.svg&&(h-=A-(A*L+w*F),d-=w-(A*G+w*Y))):(K=T[6],pt=T[7],N=T[8],P=T[9],at=T[10],V=T[11],h=T[12],d=T[13],u=T[14],C=hs(K,at),m=C*Hi,C&&(M=Math.cos(-C),S=Math.sin(-C),Q=J*M+N*S,q=H*M+P*S,dt=K*M+at*S,N=J*-S+N*M,P=H*-S+P*M,at=K*-S+at*M,V=pt*-S+V*M,J=Q,H=q,K=dt),C=hs(-F,at),p=C*Hi,C&&(M=Math.cos(-C),S=Math.sin(-C),Q=L*M-N*S,q=G*M-P*S,dt=F*M-at*S,V=Y*S+V*M,L=Q,G=q,F=dt),C=hs(G,L),_=C*Hi,C&&(M=Math.cos(C),S=Math.sin(C),Q=L*M+G*S,q=J*M+H*S,G=G*M-L*S,H=H*M-J*S,L=Q,J=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Le(Math.sqrt(L*L+G*G+F*F)),g=Le(Math.sqrt(H*H+K*K)),C=hs(J,H),x=Math.abs(C)>2e-4?C*Hi:0,v=V?1/(V<0?-V:V):0),n.svg&&(Q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Du(xn(t,we)),Q&&t.setAttribute("transform",Q))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Le(f),n.scaleY=Le(g),n.rotation=Le(_)+o,n.rotationX=Le(m)+o,n.rotationY=Le(p)+o,n.skewX=x+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[on]=Ma(c)),n.xOffset=n.yOffset=0,n.force3D=yn.force3D,n.renderTransform=n.svg?kf:Cu?Iu:Ff,n.uncache=0,n},Ma=function(t){return(t=t.split(" "))[0]+" "+t[1]},Va=function(t,e,n){var i=je(e);return Le(parseFloat(e)+parseFloat(Ci(t,"x",n+"px",i)))+i},Ff=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Iu(t,e)},Ui="0deg",tr="0px",Oi=") ",Iu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(y&&(d!==Ui||h!==Ui)){var w=parseFloat(h)*Ds,T=Math.sin(w),C=Math.cos(w),M;w=parseFloat(d)*Ds,M=Math.cos(w),a=Va(x,a,T*M*-y),o=Va(x,o,-Math.sin(w)*-y),l=Va(x,l,C*M*-y+y)}m!==tr&&(v+="perspective("+m+Oi),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(A||a!==tr||o!==tr||l!==tr)&&(v+=l!==tr||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Oi),c!==Ui&&(v+="rotate("+c+Oi),h!==Ui&&(v+="rotateY("+h+Oi),d!==Ui&&(v+="rotateX("+d+Oi),(u!==Ui||f!==Ui)&&(v+="skew("+u+", "+f+Oi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Oi),x.style[we]=v||"translate(0, 0)"},kf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(a),v=parseFloat(o),A,w,T,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ds,c*=Ds,A=Math.cos(l)*d,w=Math.sin(l)*d,T=Math.sin(l-c)*-u,C=Math.cos(l-c)*u,c&&(h*=Ds,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=Le(A),w=Le(w),T=Le(T),C=Le(C)):(A=d,C=u,w=T=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=Ci(f,"x",a,"px"),v=Ci(f,"y",o,"px")),(g||_||m||p)&&(y=Le(y+g-(g*A+_*T)+m),v=Le(v+_-(g*w+_*C)+p)),(i||r)&&(M=f.getBBox(),y=Le(y+i/100*M.width),v=Le(v+r/100*M.height)),M="matrix("+A+","+w+","+T+","+C+","+y+","+v+")",f.setAttribute("transform",M),x&&(f.style[we]=M)},Bf=function(t,e,n,i,r){var a=360,o=He(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Hi:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Mc)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Mc)%a-~~(c/a)*a)),t._pt=u=new an(t._pt,e,n,i,c,Mf),u.e=h,u.u="deg",t._props.push(n),u},Cc=function(t,e){for(var n in e)t[n]=e[n];return t},zf=function(t,e,n){var i=Cc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[we]=e,o=Er(n,1),Ai(n,we),n.setAttribute("transform",c)):(c=getComputedStyle(n)[we],a[we]=e,o=Er(n,1),a[we]=c);for(l in ai)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=je(c),g=je(h),d=f!==g?Ci(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new an(t._pt,o,l,d,u-d,Uo),t._pt.u=g||0,t._props.push(l));Cc(o,i)};rn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});ya[t>1?"border"+s:s]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return ei(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var Nu={name:"css",register:Fo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,f,g,_,m,p,x,y,v,A,w,T,C,M;Hl||Fo(),this.styles=this.styles||Au(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(mn[_]&&_u(_,e,n,i,t,r)))){if(f=typeof h,g=ya[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=xr(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ei.lastIndex=0,Ei.test(c)||(m=je(c),p=je(h),p?m!==p&&(c=Ci(t,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],He(c)&&~c.indexOf("random(")&&(c=xr(c)),je(c+"")||c==="auto"||(c+=yn.units[_]||je(ei(t,_))||""),(c+"").charAt(1)==="="&&(c=ei(t,_))):c=ei(t,_),u=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),d=parseFloat(h),_ in Wn&&(_==="autoAlpha"&&(u===1&&ei(t,"visibility")==="hidden"&&d&&(u=0),C.push("visibility",0,o.visibility),Mi(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Wn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ai,y){if(this.styles.save(_),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=xn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=xn(t,"perspective"),S?t.style.perspective=S:Ai(t,"perspective")}d=parseFloat(h)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||Er(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new an(this._pt,o,we,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new an(this._pt,A,"scaleY",A.scaleY,(x?Ps(A.scaleY,x+d):d)-A.scaleY||0,Uo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(on,0,o[on]),h=Uf(h),A.svg?ko(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Mi(this,A,"zOrigin",A.zOrigin,p),Mi(this,o,_,Ma(c),Ma(h)));continue}else if(_==="svgOrigin"){ko(t,h,1,w,0,this);continue}else if(_ in Lu){Bf(this,A,_,u,x?Ps(u,x+h):h);continue}else if(_==="smoothOrigin"){Mi(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){zf(this,h,t);continue}}else _ in o||(_=Vs(_)||_);if(y||(d||d===0)&&(u||u===0)&&!yf.test(h)&&_ in o)m=(c+"").substr((u+"").length),d||(d=0),p=je(h)||(_ in yn.units?yn.units[_]:m),m!==p&&(u=Ci(t,_,c,p)),this._pt=new an(this._pt,y?A:o,_,u,(x?Ps(u,x+d):d)-u,!y&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?bf:Uo),this._pt.u=p||0,y&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Ef):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Sf);else if(_ in o)Nf.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,r);else if(_!=="parseTransform"){Il(_,h);continue}y||(_ in o?C.push(_,0,o[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),a.push(_)}}T&&Su(this)},render:function(t,e){if(e.tween._time||!Wl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ei,aliases:Wn,getSetter:function(t,e,n){var i=Wn[e];return i&&i.indexOf(",")<0&&(e=i),e in ai&&e!==on&&(t._gsap.x||ei(t,"x"))?n&&yc===n?e==="scale"?Cf:Af:(yc=n||{})&&(e==="scale"?Rf:Pf):t.style&&!Pl(t.style[e])?Tf:~e.indexOf("-")?wf:Vl(t,e)},core:{_removeProperty:Ai,_getMatrix:ql}};hn.utils.checkPrefix=Vs;hn.core.getStyleSaver=Au;(function(s,t,e,n){var i=rn(s+","+t+","+e,function(r){ai[r]=1});rn(t,function(r){yn.units[r]="deg",Lu[r]=1}),Wn[i[13]]=s+","+t,rn(n,function(r){var a=r.split(":");Wn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){yn.units[s]="px"});hn.registerPlugin(Nu);var zn=hn.registerPlugin(Nu)||hn;zn.core.Tween;var Yl={};(function s(t,e,n,i){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!t.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),P=N.getContext("2d");P.fillRect(0,0,1,1);var at=N.transferToImageBitmap();P.createPattern(at,"no-repeat")}catch{return!1}return!0})();function l(){}function c(N){var P=e.exports.Promise,at=P!==void 0?P:t.Promise;return typeof at=="function"?new at(N):(N(l,l),null)}var h=(function(N,P){return{transform:function(at){if(N)return at;if(P.has(at))return P.get(at);var pt=new OffscreenCanvas(at.width,at.height),V=pt.getContext("2d");return V.drawImage(at,0,0),P.set(at,pt),pt},clear:function(){P.clear()}}})(o,new Map),d=(function(){var N=Math.floor(16.666666666666668),P,at,pt={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(K){var ot=Math.random();return pt[ot]=requestAnimationFrame(function et(ft){V===ft||V+N-1<ft?(V=ft,delete pt[ot],K()):pt[ot]=requestAnimationFrame(et)}),ot},at=function(K){pt[K]&&cancelAnimationFrame(pt[K])}):(P=function(K){return setTimeout(K,N)},at=function(K){return clearTimeout(K)}),{frame:P,cancel:at}})(),u=(function(){var N,P,at={};function pt(V){function K(ot,et){V.postMessage({options:ot||{},callback:et})}V.init=function(et){var ft=et.transferControlToOffscreen();V.postMessage({canvas:ft},[ft])},V.fire=function(et,ft,Tt){if(P)return K(et,null),P;var Ct=Math.random().toString(36).slice(2);return P=c(function(Bt){function Ut(Kt){Kt.data.callback===Ct&&(delete at[Ct],V.removeEventListener("message",Ut),P=null,h.clear(),Tt(),Bt())}V.addEventListener("message",Ut),K(et,Ct),at[Ct]=Ut.bind(null,{data:{callback:Ct}})}),P},V.reset=function(){V.postMessage({reset:!0});for(var et in at)at[et](),delete at[et]}}return function(){if(N)return N;if(!n&&r){var V=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([V])))}catch(K){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",K),null}pt(N)}return N}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(N,P){return P?P(N):N}function _(N){return N!=null}function m(N,P,at){return g(N&&_(N[P])?N[P]:f[P],at)}function p(N){return N<0?0:Math.floor(N)}function x(N,P){return Math.floor(Math.random()*(P-N))+N}function y(N){return parseInt(N,16)}function v(N){return N.map(A)}function A(N){var P=String(N).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:y(P.substring(0,2)),g:y(P.substring(2,4)),b:y(P.substring(4,6))}}function w(N){var P=m(N,"origin",Object);return P.x=m(P,"x",Number),P.y=m(P,"y",Number),P}function T(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function C(N){var P=N.getBoundingClientRect();N.width=P.width,N.height=P.height}function M(N){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=N,P}function S(N,P,at,pt,V,K,ot,et,ft){N.save(),N.translate(P,at),N.rotate(K),N.scale(pt,V),N.arc(0,0,1,ot,et,ft),N.restore()}function L(N){var P=N.angle*(Math.PI/180),at=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-P+(.5*at-Math.random()*at),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function G(N,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var at=P.tick++/P.totalTicks,pt=P.x+P.random*P.tiltCos,V=P.y+P.random*P.tiltSin,K=P.wobbleX+P.random*P.tiltCos,ot=P.wobbleY+P.random*P.tiltSin;if(N.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-at)+")",N.beginPath(),a&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))N.fill(Q(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(K-pt)*.1,Math.abs(ot-V)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var et=Math.PI/10*P.wobble,ft=Math.abs(K-pt)*.1,Tt=Math.abs(ot-V)*.1,Ct=P.shape.bitmap.width*P.scalar,Bt=P.shape.bitmap.height*P.scalar,Ut=new DOMMatrix([Math.cos(et)*ft,Math.sin(et)*ft,-Math.sin(et)*Tt,Math.cos(et)*Tt,P.x,P.y]);Ut.multiplySelf(new DOMMatrix(P.shape.matrix));var Kt=N.createPattern(h.transform(P.shape.bitmap),"no-repeat");Kt.setTransform(Ut),N.globalAlpha=1-at,N.fillStyle=Kt,N.fillRect(P.x-Ct/2,P.y-Bt/2,Ct,Bt),N.globalAlpha=1}else if(P.shape==="circle")N.ellipse?N.ellipse(P.x,P.y,Math.abs(K-pt)*P.ovalScalar,Math.abs(ot-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):S(N,P.x,P.y,Math.abs(K-pt)*P.ovalScalar,Math.abs(ot-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var O=Math.PI/2*3,oe=4*P.scalar,Gt=8*P.scalar,It=P.x,Nt=P.y,te=5,Lt=Math.PI/te;te--;)It=P.x+Math.cos(O)*Gt,Nt=P.y+Math.sin(O)*Gt,N.lineTo(It,Nt),O+=Lt,It=P.x+Math.cos(O)*oe,Nt=P.y+Math.sin(O)*oe,N.lineTo(It,Nt),O+=Lt;else N.moveTo(Math.floor(P.x),Math.floor(P.y)),N.lineTo(Math.floor(P.wobbleX),Math.floor(V)),N.lineTo(Math.floor(K),Math.floor(ot)),N.lineTo(Math.floor(pt),Math.floor(P.wobbleY));return N.closePath(),N.fill(),P.tick<P.totalTicks}function F(N,P,at,pt,V){var K=P.slice(),ot=N.getContext("2d"),et,ft,Tt=c(function(Ct){function Bt(){et=ft=null,ot.clearRect(0,0,pt.width,pt.height),h.clear(),V(),Ct()}function Ut(){n&&!(pt.width===i.width&&pt.height===i.height)&&(pt.width=N.width=i.width,pt.height=N.height=i.height),!pt.width&&!pt.height&&(at(N),pt.width=N.width,pt.height=N.height),ot.clearRect(0,0,pt.width,pt.height),K=K.filter(function(Kt){return G(ot,Kt)}),K.length?et=d.frame(Ut):Bt()}et=d.frame(Ut),ft=Bt});return{addFettis:function(Ct){return K=K.concat(Ct),Tt},canvas:N,promise:Tt,reset:function(){et&&d.cancel(et),ft&&ft()}}}function Y(N,P){var at=!N,pt=!!m(P||{},"resize"),V=!1,K=m(P,"disableForReducedMotion",Boolean),ot=r&&!!m(P||{},"useWorker"),et=ot?u():null,ft=at?T:C,Tt=N&&et?!!N.__confetti_initialized:!1,Ct=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Bt;function Ut(O,oe,Gt){for(var It=m(O,"particleCount",p),Nt=m(O,"angle",Number),te=m(O,"spread",Number),Lt=m(O,"startVelocity",Number),R=m(O,"decay",Number),E=m(O,"gravity",Number),W=m(O,"drift",Number),st=m(O,"colors",v),lt=m(O,"ticks",Number),nt=m(O,"shapes"),mt=m(O,"scalar"),_t=!!m(O,"flat"),At=w(O),Zt=It,ut=[],St=N.width*At.x,zt=N.height*At.y;Zt--;)ut.push(L({x:St,y:zt,angle:Nt,spread:te,startVelocity:Lt,color:st[Zt%st.length],shape:nt[x(0,nt.length)],ticks:lt,decay:R,gravity:E,drift:W,scalar:mt,flat:_t}));return Bt?Bt.addFettis(ut):(Bt=F(N,ut,ft,oe,Gt),Bt.promise)}function Kt(O){var oe=K||m(O,"disableForReducedMotion",Boolean),Gt=m(O,"zIndex",Number);if(oe&&Ct)return c(function(Lt){Lt()});at&&Bt?N=Bt.canvas:at&&!N&&(N=M(Gt),document.body.appendChild(N)),pt&&!Tt&&ft(N);var It={width:N.width,height:N.height};et&&!Tt&&et.init(N),Tt=!0,et&&(N.__confetti_initialized=!0);function Nt(){if(et){var Lt={getBoundingClientRect:function(){if(!at)return N.getBoundingClientRect()}};ft(Lt),et.postMessage({resize:{width:Lt.width,height:Lt.height}});return}It.width=It.height=null}function te(){Bt=null,pt&&(V=!1,t.removeEventListener("resize",Nt)),at&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Tt=!1)}return pt&&!V&&(V=!0,t.addEventListener("resize",Nt,!1)),et?et.fire(O,It,te):Ut(O,It,te)}return Kt.reset=function(){et&&et.reset(),Bt&&Bt.reset()},Kt}var J;function H(){return J||(J=Y(null,{useWorker:!0,resize:!0})),J}function Q(N,P,at,pt,V,K,ot){var et=new Path2D(N),ft=new Path2D;ft.addPath(et,new DOMMatrix(P));var Tt=new Path2D;return Tt.addPath(ft,new DOMMatrix([Math.cos(ot)*V,Math.sin(ot)*V,-Math.sin(ot)*K,Math.cos(ot)*K,at,pt])),Tt}function q(N){if(!a)throw new Error("path confetti are not supported in this browser");var P,at;typeof N=="string"?P=N:(P=N.path,at=N.matrix);var pt=new Path2D(P),V=document.createElement("canvas"),K=V.getContext("2d");if(!at){for(var ot=1e3,et=ot,ft=ot,Tt=0,Ct=0,Bt,Ut,Kt=0;Kt<ot;Kt+=2)for(var O=0;O<ot;O+=2)K.isPointInPath(pt,Kt,O,"nonzero")&&(et=Math.min(et,Kt),ft=Math.min(ft,O),Tt=Math.max(Tt,Kt),Ct=Math.max(Ct,O));Bt=Tt-et,Ut=Ct-ft;var oe=10,Gt=Math.min(oe/Bt,oe/Ut);at=[Gt,0,0,Gt,-Math.round(Bt/2+et)*Gt,-Math.round(Ut/2+ft)*Gt]}return{type:"path",path:P,matrix:at}}function dt(N){var P,at=1,pt="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?P=N:(P=N.text,at="scalar"in N?N.scalar:at,V="fontFamily"in N?N.fontFamily:V,pt="color"in N?N.color:pt);var K=10*at,ot=""+K+"px "+V,et=new OffscreenCanvas(K,K),ft=et.getContext("2d");ft.font=ot;var Tt=ft.measureText(P),Ct=Math.ceil(Tt.actualBoundingBoxRight+Tt.actualBoundingBoxLeft),Bt=Math.ceil(Tt.actualBoundingBoxAscent+Tt.actualBoundingBoxDescent),Ut=2,Kt=Tt.actualBoundingBoxLeft+Ut,O=Tt.actualBoundingBoxAscent+Ut;Ct+=Ut+Ut,Bt+=Ut+Ut,et=new OffscreenCanvas(Ct,Bt),ft=et.getContext("2d"),ft.font=ot,ft.fillStyle=pt,ft.fillText(P,Kt,O);var oe=1/at;return{type:"bitmap",bitmap:et.transferToImageBitmap(),matrix:[oe,0,0,oe,-Ct*oe/2,-Bt*oe/2]}}e.exports=function(){return H().apply(this,arguments)},e.exports.reset=function(){H().reset()},e.exports.create=Y,e.exports.shapeFromPath=q,e.exports.shapeFromText=dt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Yl,!1);const Vf=Yl.exports;Yl.exports.create;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kl="170",Is={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gf=0,Rc=1,Hf=2,Uu=1,Ou=2,Qn=3,Ri=0,ln=1,Hn=2,bi=0,Ns=1,Bo=2,Pc=3,Lc=4,Wf=5,Xi=100,Xf=101,qf=102,Yf=103,Kf=104,jf=200,$f=201,Zf=202,Jf=203,zo=204,Vo=205,Qf=206,tp=207,ep=208,np=209,ip=210,sp=211,rp=212,ap=213,op=214,Go=0,Ho=1,Wo=2,Gs=3,Xo=4,qo=5,Yo=6,Ko=7,Fu=0,lp=1,cp=2,Ti=0,hp=1,up=2,dp=3,ku=4,fp=5,pp=6,mp=7,Bu=300,Hs=301,Ws=302,jo=303,$o=304,Ca=306,Zo=1e3,Ki=1001,Jo=1002,On=1003,_p=1004,Nr=1005,Xn=1006,Ga=1007,ji=1008,oi=1009,zu=1010,Vu=1011,br=1012,jl=1013,es=1014,ni=1015,Ar=1016,$l=1017,Zl=1018,Xs=1020,Gu=35902,Hu=1021,Wu=1022,Un=1023,Xu=1024,qu=1025,Us=1026,qs=1027,Yu=1028,Jl=1029,Ku=1030,Ql=1031,tc=1033,la=33776,ca=33777,ha=33778,ua=33779,Qo=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,_l=37818,gl=37819,vl=37820,xl=37821,da=36492,yl=36494,Ml=36495,ju=36283,Sl=36284,El=36285,bl=36286,gp=3200,vp=3201,ec=0,xp=1,vi="",wn="srgb",Ks="srgb-linear",Ra="linear",ce="srgb",us=7680,Dc=519,yp=512,Mp=513,Sp=514,$u=515,Ep=516,bp=517,Tp=518,wp=519,Ic=35044,Nc="300 es",ii=2e3,Sa=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fa=Math.PI/180,Tl=180/Math.PI;function Cr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function Ap(s,t){return(s%t+t)%t}function Ha(s,t,e){return(1-e)*s+e*t}function er(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Cp={DEG2RAD:fa};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,r,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],y=i[4],v=i[7],A=i[2],w=i[5],T=i[8];return r[0]=a*_+o*x+l*A,r[3]=a*m+o*y+l*w,r[6]=a*p+o*v+l*T,r[1]=c*_+h*x+d*A,r[4]=c*m+h*y+d*w,r[7]=c*p+h*v+d*T,r[2]=u*_+f*x+g*A,r[5]=u*m+f*y+g*w,r[8]=u*p+f*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new jt;function Zu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rp(){const s=Ea("canvas");return s.style.display="block",s}const Uc={};function cr(s){s in Uc||(Uc[s]=!0,console.warn(s))}function Pp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lp(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dp(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Ra:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Oc=[.64,.33,.3,.6,.15,.06],Fc=[.2126,.7152,.0722],kc=[.3127,.329],Bc=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Ks]:{primaries:Oc,whitePoint:kc,transfer:Ra,toXYZ:Bc,fromXYZ:zc,luminanceCoefficients:Fc,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:Oc,whitePoint:kc,transfer:ce,toXYZ:Bc,fromXYZ:zc,luminanceCoefficients:Fc,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}});let ds;class Ip{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Ea("canvas")),ds.width=t.width,ds.height=t.height;const n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Np=0;class Ju{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xa(i[a].image)):r.push(Xa(i[a]))}else r=Xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ip.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Up=0;class cn extends as{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,n=Ki,i=Ki,r=Xn,a=ji,o=Un,l=oi,c=cn.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Cr(),this.name="",this.source=new Ju(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Bu;cn.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+u)/4,T=(d+_)/4,C=(g+m)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=T/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=C/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Op extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ju(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends Op{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qu extends cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fp extends cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*x);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*x;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qa.copy(this).projectOnVector(t),this.sub(qa)}reflect(t){return this.sub(qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new D,Vc=new is;class Rr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Or.subVectors(this.max,nr),fs.subVectors(t.a,nr),ps.subVectors(t.b,nr),ms.subVectors(t.c,nr),ui.subVectors(ps,fs),di.subVectors(ms,ps),Fi.subVectors(fs,ms);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Fi.z,Fi.y,ui.z,0,-ui.x,di.z,0,-di.x,Fi.z,0,-Fi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Fi.y,Fi.x,0];return!Ya(e,fs,ps,ms,Or)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,fs,ps,ms,Or))?!1:(Fr.crossVectors(ui,di),e=[Fr.x,Fr.y,Fr.z],Ya(e,fs,ps,ms,Or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new D,new D,new D,new D,new D,new D,new D,new D],Ln=new D,Ur=new Rr,fs=new D,ps=new D,ms=new D,ui=new D,di=new D,Fi=new D,nr=new D,Or=new D,Fr=new D,ki=new D;function Ya(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ki.fromArray(s,r);const o=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kp=new Rr,ir=new D,Ka=new D;class Pa{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ir,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Ka)),this.expandByPoint(ir.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new D,ja=new D,kr=new D,fi=new D,$a=new D,Br=new D,Za=new D;class La{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ja.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(ja);const r=t.distanceTo(e)*.5,a=-this.direction.dot(kr),o=fi.dot(this.direction),l=-fi.dot(kr),c=fi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ja).addScaledVector(kr,u),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,i,r){$a.subVectors(e,t),Br.subVectors(n,t),Za.crossVectors($a,Br);let a=this.direction.dot(Za),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);const l=o*this.direction.dot(Br.crossVectors(fi,Br));if(l<0)return null;const c=o*this.direction.dot($a.cross(fi));if(c<0||l+c>a)return null;const h=-o*fi.dot(Za);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bp,t,zp)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),pi.crossVectors(n,fn),pi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),pi.crossVectors(n,fn)),pi.normalize(),zr.crossVectors(fn,pi),i[0]=pi.x,i[4]=zr.x,i[8]=fn.x,i[1]=pi.y,i[5]=zr.y,i[9]=fn.y,i[2]=pi.z,i[6]=zr.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],A=n[15],w=i[0],T=i[4],C=i[8],M=i[12],S=i[1],L=i[5],G=i[9],F=i[13],Y=i[2],J=i[6],H=i[10],Q=i[14],q=i[3],dt=i[7],N=i[11],P=i[15];return r[0]=a*w+o*S+l*Y+c*q,r[4]=a*T+o*L+l*J+c*dt,r[8]=a*C+o*G+l*H+c*N,r[12]=a*M+o*F+l*Q+c*P,r[1]=h*w+d*S+u*Y+f*q,r[5]=h*T+d*L+u*J+f*dt,r[9]=h*C+d*G+u*H+f*N,r[13]=h*M+d*F+u*Q+f*P,r[2]=g*w+_*S+m*Y+p*q,r[6]=g*T+_*L+m*J+p*dt,r[10]=g*C+_*G+m*H+p*N,r[14]=g*M+_*F+m*Q+p*P,r[3]=x*w+y*S+v*Y+A*q,r[7]=x*T+y*L+v*J+A*dt,r[11]=x*C+y*G+v*H+A*N,r[15]=x*M+y*F+v*Q+A*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+_*(+e*l*f-e*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,y=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,v=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,A=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,w=e*x+n*y+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=x*T,t[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*T,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*T,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*T,t[4]=y*T,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*T,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*T,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*f+e*l*f)*T,t[8]=v*T,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*T,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*T,t[12]=A*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*T,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,x=l*c,y=l*h,v=l*d,A=n.x,w=n.y,T=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+v)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+y)*T,i[9]=(m-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=_s.set(i[0],i[1],i[2]).length();const a=_s.set(i[4],i[5],i[6]).length(),o=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Dn.copy(this);const c=1/r,h=1/a,d=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ii){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(o===ii)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ii){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*c,f=(n+i)*h;let g,_;if(o===ii)g=(a+r)*d,_=-2*d;else if(o===Sa)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new D,Dn=new ve,Bp=new D(0,0,0),zp=new D(1,1,1),pi=new D,zr=new D,fn=new D,Gc=new ve,Hc=new is;class Yn{constructor(t=0,e=0,n=0,i=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vp=0;const Wc=new D,gs=new is,$n=new ve,Vr=new D,sr=new D,Gp=new D,Hp=new is,Xc=new D(1,0,0),qc=new D(0,1,0),Yc=new D(0,0,1),Kc={type:"added"},Wp={type:"removed"},vs={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Ge extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new D,e=new Yn,n=new is,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(sr,Vr,this.up):$n.lookAt(Vr,sr,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),gs.setFromRotationMatrix($n),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kc),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wp),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kc),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,Gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Hp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ge.DEFAULT_UP=new D(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new D,Zn=new D,Qa=new D,Jn=new D,xs=new D,ys=new D,jc=new D,to=new D,eo=new D,no=new D,io=new ue,so=new ue,ro=new ue;class Nn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),Zn.subVectors(n,e),Qa.subVectors(t,e);const a=In.dot(In),o=In.dot(Zn),l=In.dot(Qa),c=Zn.dot(Zn),h=Zn.dot(Qa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(t,e),so.fromBufferAttribute(t,n),ro.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(io,r.x),a.addScaledVector(so,r.y),a.addScaledVector(ro,r.z),a}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Zn.subVectors(t,e),In.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;xs.subVectors(i,n),ys.subVectors(r,n),to.subVectors(t,n);const l=xs.dot(to),c=ys.dot(to);if(l<=0&&c<=0)return e.copy(n);eo.subVectors(t,i);const h=xs.dot(eo),d=ys.dot(eo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xs,a);no.subVectors(t,r);const f=xs.dot(no),g=ys.dot(no);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ys,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return jc.subVectors(r,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(jc,o);const p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(xs,a).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ao(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Ap(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ao(a,r,t+1/3),this.g=ao(a,r,t),this.b=ao(a,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){const n=td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return ie.fromWorkingColorSpace(Ke.copy(this),t),Math.round(We(Ke.r*255,0,255))*65536+Math.round(We(Ke.g*255,0,255))*256+Math.round(We(Ke.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,r=Ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=wn){ie.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Gr);const n=Ha(mi.h,Gr.h,e),i=Ha(mi.s,Gr.s,e),r=Ha(mi.l,Gr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Qt;Qt.NAMES=td;let Xp=0;class os extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Cr(),this.name="",this.blending=Ns,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Vo,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cs extends os{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new D,Hr=new Rt;class Fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ic&&(t.usage=this.usage),t}}class ed extends Fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nd extends Fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends Fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qp=0;const bn=new ve,oo=new Ge,Ms=new D,pn=new Rr,rr=new Rr,Ve=new D;class Qe extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?nd:ed)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(pn.min,rr.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,rr.max),pn.expandByPoint(Ve)):(pn.expandByPoint(rr.min),pn.expandByPoint(rr.max))}pn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(t,c),Ve.add(Ms)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;const c=new D,h=new D,d=new D,u=new Rt,f=new Rt,g=new Rt,_=new D,m=new D;function p(C,M,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[C].add(_),o[M].add(_),o[S].add(_),l[C].add(m),l[M].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,M=x.length;C<M;++C){const S=x[C],L=S.start,G=S.count;for(let F=L,Y=L+G;F<Y;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new D,v=new D,A=new D,w=new D;function T(C){A.fromBufferAttribute(i,C),w.copy(A);const M=o[C];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const L=v.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,M=x.length;C<M;++C){const S=x[C],L=S.start,G=S.count;for(let F=L,Y=L+G;F<Y;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Fn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new ve,Bi=new La,Wr=new Pa,Zc=new D,Xr=new D,qr=new D,Yr=new D,lo=new D,Kr=new D,Jc=new D,jr=new D;class it extends Ge{constructor(t=new Qe,e=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(lo.fromBufferAttribute(d,t),a?Kr.addScaledVector(lo,h):Kr.addScaledVector(lo.sub(e),h))}e.add(Kr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Wr,Zc)===null||Bi.origin.distanceToSquared(Zc)>(t.far-t.near)**2))&&($c.copy(r).invert(),Bi.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const w=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);i=$r(this,p,t,n,c,h,d,w,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=$r(this,a,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const w=v,T=v+1,C=v+2;i=$r(this,p,t,n,c,h,d,w,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;i=$r(this,a,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Yp(s,t,e,n,i,r,a,o){let l;if(t.side===ln?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ri,o),l===null)return null;jr.copy(o),jr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:s}}function $r(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Xr),s.getVertexPosition(l,qr),s.getVertexPosition(c,Yr);const h=Yp(s,t,e,n,Xr,qr,Yr,Jc);if(h){const d=new D;Nn.getBarycoord(Jc,Xr,qr,Yr,d),i&&(h.uv=Nn.getInterpolatedAttribute(i,o,l,c,d,new Rt)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,o,l,c,d,new Rt)),a&&(h.normal=Nn.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};Nn.getNormal(Xr,qr,Yr,u.normal),h.face=u,h.barycoord=d}return h}class Wt extends Qe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function g(_,m,p,x,y,v,A,w,T,C,M){const S=v/T,L=A/C,G=v/2,F=A/2,Y=w/2,J=T+1,H=C+1;let Q=0,q=0;const dt=new D;for(let N=0;N<H;N++){const P=N*L-F;for(let at=0;at<J;at++){const pt=at*S-G;dt[_]=pt*x,dt[m]=P*y,dt[p]=Y,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[p]=w>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(at/T),d.push(1-N/C),Q+=1}}for(let N=0;N<C;N++)for(let P=0;P<T;P++){const at=u+P+J*N,pt=u+P+J*(N+1),V=u+(P+1)+J*(N+1),K=u+(P+1)+J*N;l.push(at,pt,K),l.push(pt,V,K),q+=6}o.addGroup(f,q,M),f+=q,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(s){const t={};for(let e=0;e<s.length;e++){const n=Ys(s[e]);for(const i in n)t[i]=n[i]}return t}function Kp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function id(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const jp={clone:Ys,merge:Ze};var $p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends os{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$p,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sd extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new D,Qc=new Rt,th=new Rt;class _n extends sd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Qc,th),e.subVectors(th,Qc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,Es=1;class Jp extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(Ss,Es,t,e);i.layers=this.layers,this.add(i);const r=new _n(Ss,Es,t,e);r.layers=this.layers,this.add(r);const a=new _n(Ss,Es,t,e);a.layers=this.layers,this.add(a);const o=new _n(Ss,Es,t,e);o.layers=this.layers,this.add(o);const l=new _n(Ss,Es,t,e);l.layers=this.layers,this.add(l);const c=new _n(Ss,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rd extends cn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qp extends ns{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wt(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:bi});r.uniforms.tEquirect.value=e;const a=new it(i,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=Xn),new Jp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const co=new D,tm=new D,em=new jt;class gi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=co.subVectors(n,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(co),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||em.getNormalMatrix(t),i=this.coplanarPoint(co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Pa,Zr=new D;class ic{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,u-c,m-f,v-p).normalize(),n[1].setComponents(l+r,u+c,m+f,v+p).normalize(),n[2].setComponents(l+a,u+h,m+g,v+x).normalize(),n[3].setComponents(l-a,u-h,m-g,v-x).normalize(),n[4].setComponents(l-o,u-d,m-_,v-y).normalize(),e===ii)n[5].setComponents(l+o,u+d,m+_,v+y).normalize();else if(e===Sa)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nm(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class ts extends Qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let y=0;y<c;y++){const v=y*d-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,v=x+c*(p+1),A=x+1+c*(p+1),w=x+1+c*p;f.push(y,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.widthSegments,t.heightSegments)}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_m=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,e_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,d_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,W_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:_m,bumpmap_pars_fragment:gm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:Em,color_pars_vertex:bm,color_vertex:Tm,common:wm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Im,colorspace_pars_fragment:Nm,envmap_fragment:Um,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:km,envmap_physical_pars_fragment:jm,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Km,lights_toon_fragment:$m,lights_toon_pars_fragment:Zm,lights_phong_fragment:Jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:t_,lights_physical_pars_fragment:e_,lights_fragment_begin:n_,lights_fragment_maps:i_,lights_fragment_end:s_,logdepthbuf_fragment:r_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:o_,logdepthbuf_vertex:l_,map_fragment:c_,map_pars_fragment:h_,map_particle_fragment:u_,map_particle_pars_fragment:d_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:p_,morphinstance_vertex:m_,morphcolor_vertex:__,morphnormal_vertex:g_,morphtarget_pars_vertex:v_,morphtarget_vertex:x_,normal_fragment_begin:y_,normal_fragment_maps:M_,normal_pars_fragment:S_,normal_pars_vertex:E_,normal_vertex:b_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:w_,clearcoat_normal_fragment_maps:A_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:R_,opaque_fragment:P_,packing:L_,premultiplied_alpha_fragment:D_,project_vertex:I_,dithering_fragment:N_,dithering_pars_fragment:U_,roughnessmap_fragment:O_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:k_,shadowmap_pars_vertex:B_,shadowmap_vertex:z_,shadowmask_pars_fragment:V_,skinbase_vertex:G_,skinning_pars_vertex:H_,skinning_vertex:W_,skinnormal_vertex:X_,specularmap_fragment:q_,specularmap_pars_fragment:Y_,tonemapping_fragment:K_,tonemapping_pars_fragment:j_,transmission_fragment:$_,transmission_pars_fragment:Z_,uv_pars_fragment:J_,uv_pars_vertex:Q_,uv_vertex:tg,worldpos_vertex:eg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distanceRGBA_vert:hg,distanceRGBA_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:_g,meshbasic_frag:gg,meshlambert_vert:vg,meshlambert_frag:xg,meshmatcap_vert:yg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:Eg,meshphong_vert:bg,meshphong_frag:Tg,meshphysical_vert:wg,meshphysical_frag:Ag,meshtoon_vert:Cg,meshtoon_frag:Rg,points_vert:Pg,points_frag:Lg,shadow_vert:Dg,shadow_frag:Ig,sprite_vert:Ng,sprite_frag:Ug},Mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Vn={basic:{uniforms:Ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ze([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ze([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ze([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ze([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ze([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ze([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ze([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ze([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ze([Mt.common,Mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ze([Mt.lights,Mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Vn.physical={uniforms:Ze([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Jr={r:0,b:0,g:0},Vi=new Yn,Og=new ve;function Fg(s,t,e,n,i,r,a){const o=new Qt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?p(o,l):v&&v.isColor&&(p(v,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Ca)?(h===void 0&&(h=new it(new Wt(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Ys(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vi.copy(y.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Vi)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,(d!==v||u!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new ts(2,2),new Pi({name:"BackgroundMaterial",uniforms:Ys(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Jr,id(s)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function kg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(S,L,G,F,Y){let J=!1;const H=d(F,G,L);r!==H&&(r=H,c(r.object)),J=f(S,F,G,Y),J&&g(S,F,G,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(S,L,G,F),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,L,G){const F=G.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let J=Y[L.id];J===void 0&&(J={},Y[L.id]=J);let H=J[F];return H===void 0&&(H=u(l()),J[F]=H),H}function u(S){const L=[],G=[],F=[];for(let Y=0;Y<e;Y++)L[Y]=0,G[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,L,G,F){const Y=r.attributes,J=L.attributes;let H=0;const Q=G.getAttributes();for(const q in Q)if(Q[q].location>=0){const N=Y[q];let P=J[q];if(P===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(P=S.instanceColor)),N===void 0||N.attribute!==P||P&&N.data!==P.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(S,L,G,F){const Y={},J=L.attributes;let H=0;const Q=G.getAttributes();for(const q in Q)if(Q[q].location>=0){let N=J[q];N===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(N=S.instanceColor));const P={};P.attribute=N,N&&N.data&&(P.data=N.data),Y[q]=P,H++}r.attributes=Y,r.attributesNum=H,r.index=F}function _(){const S=r.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const G=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;G[S]=1,F[S]===0&&(s.enableVertexAttribArray(S),F[S]=1),Y[S]!==L&&(s.vertexAttribDivisor(S,L),Y[S]=L)}function x(){const S=r.newAttributes,L=r.enabledAttributes;for(let G=0,F=L.length;G<F;G++)L[G]!==S[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function y(S,L,G,F,Y,J,H){H===!0?s.vertexAttribIPointer(S,L,G,Y,J):s.vertexAttribPointer(S,L,G,F,Y,J)}function v(S,L,G,F){_();const Y=F.attributes,J=G.getAttributes(),H=L.defaultAttributeValues;for(const Q in J){const q=J[Q];if(q.location>=0){let dt=Y[Q];if(dt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(dt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(dt=S.instanceColor)),dt!==void 0){const N=dt.normalized,P=dt.itemSize,at=t.get(dt);if(at===void 0)continue;const pt=at.buffer,V=at.type,K=at.bytesPerElement,ot=V===s.INT||V===s.UNSIGNED_INT||dt.gpuType===jl;if(dt.isInterleavedBufferAttribute){const et=dt.data,ft=et.stride,Tt=dt.offset;if(et.isInstancedInterleavedBuffer){for(let Ct=0;Ct<q.locationSize;Ct++)p(q.location+Ct,et.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ct=0;Ct<q.locationSize;Ct++)m(q.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Ct=0;Ct<q.locationSize;Ct++)y(q.location+Ct,P/q.locationSize,V,N,ft*K,(Tt+P/q.locationSize*Ct)*K,ot)}else{if(dt.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)p(q.location+et,dt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let et=0;et<q.locationSize;et++)y(q.location+et,P/q.locationSize,V,N,P*K,P/q.locationSize*et*K,ot)}}else if(H!==void 0){const N=H[Q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(q.location,N);break;case 3:s.vertexAttrib3fv(q.location,N);break;case 4:s.vertexAttrib4fv(q.location,N);break;default:s.vertexAttrib1fv(q.location,N)}}}}x()}function A(){C();for(const S in n){const L=n[S];for(const G in L){const F=L[G];for(const Y in F)h(F[Y].object),delete F[Y];delete L[G]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const G in L){const F=L[G];for(const Y in F)h(F[Y].object),delete F[Y];delete L[G]}delete n[S.id]}function T(S){for(const L in n){const G=n[L];if(G[S.id]===void 0)continue;const F=G[S.id];for(const Y in F)h(F[Y].object),delete F[Y];delete G[S.id]}}function C(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Bg(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Un&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==oi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ni&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function Vg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new gi,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(g,u,y,f);for(let A=0;A!==y;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gg(s){let t=new WeakMap;function e(a,o){return o===jo?a.mapping=Hs:o===$o&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===jo||o===$o)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qp(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class od extends sd{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,eh=[.125,.215,.35,.446,.526,.582],qi=20,ho=new od,nh=new Qt;let uo=null,fo=0,po=0,mo=!1;const Wi=(1+Math.sqrt(5))/2,bs=1/Wi,ih=[new D(-Wi,bs,0),new D(Wi,bs,0),new D(-bs,0,Wi),new D(bs,0,Wi),new D(0,Wi,-bs),new D(0,Wi,bs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uo,fo,po),this._renderer.xr.enabled=mo,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uo=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Ar,format:Un,colorSpace:Ks,depthBuffer:!1},i=rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hg(r)),this._blurMaterial=Wg(r,t,e)}return i}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,n,i){const o=new _n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(nh),h.toneMapping=Ti,h.autoClear=!1;const f=new Cs({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new it(new Wt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(nh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Qr(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ih[(i-r-1)%ih.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new it(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let x=0;for(let T=0;T<qi;++T){const C=T/_,M=Math.exp(-C*C/2);p.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-Rs?i-y+Rs:0),w=4*(this._cubeSize-v);Qr(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(d,ho)}}function Hg(s){const t=[],e=[],n=[];let i=s;const r=s-Rs+1+eh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Rs?l=eh[a-s+Rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,C=w>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(M,_*g*w),y.set(u,m*g*w);const S=[w,w,w,w,w,w];v.set(S,p*g*w)}const A=new Qe;A.setAttribute("position",new Fn(x,_)),A.setAttribute("uv",new Fn(y,m)),A.setAttribute("faceIndex",new Fn(v,p)),t.push(A),i>Rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rh(s,t,e){const n=new ns(s,t,e);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Wg(s,t,e){const n=new Float32Array(qi),i=new D(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function ah(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function oh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===jo||l===$o,h=l===Hs||l===Ws;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new sh(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new sh(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yg(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],w=x[y+1],T=x[y+2];u.push(A,w,w,T,T,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,w=y+1,T=y+2;u.push(A,w,w,T,T,A)}}else return;const m=new(Zu(u)?nd:ed)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Kg(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function jg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $g(s,t,e){const n=new WeakMap,i=new ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*w*4*d),C=new Qu(T,A,w,d);C.type=ni,C.needsUpdate=!0;const M=v*4;for(let L=0;L<d;L++){const G=p[L],F=x[L],Y=y[L],J=A*w*4*L;for(let H=0;H<G.count;H++){const Q=H*M;g===!0&&(i.fromBufferAttribute(G,H),T[J+Q+0]=i.x,T[J+Q+1]=i.y,T[J+Q+2]=i.z,T[J+Q+3]=0),_===!0&&(i.fromBufferAttribute(F,H),T[J+Q+4]=i.x,T[J+Q+5]=i.y,T[J+Q+6]=i.z,T[J+Q+7]=0),m===!0&&(i.fromBufferAttribute(Y,H),T[J+Q+8]=i.x,T[J+Q+9]=i.y,T[J+Q+10]=i.z,T[J+Q+11]=Y.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Rt(A,w)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Zg(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ld extends cn{constructor(t,e,n,i,r,a,o,l,c,h=Us){if(h!==Us&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=es),n===void 0&&h===qs&&(n=Xs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cd=new cn,lh=new ld(1,1),hd=new Qu,ud=new Fp,dd=new rd,ch=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function js(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ch[i];if(r===void 0&&(r=new Float32Array(i),ch[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Da(s,t){let e=hh[t];e===void 0&&(e=new Int32Array(t),hh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Jg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function t0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function e0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function n0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;fh.set(n),s.uniformMatrix2fv(this.addr,!1,fh),ke(e,n)}}function i0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;dh.set(n),s.uniformMatrix3fv(this.addr,!1,dh),ke(e,n)}}function s0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;uh.set(n),s.uniformMatrix4fv(this.addr,!1,uh),ke(e,n)}}function r0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function a0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function o0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function l0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function c0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function h0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function u0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function d0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function f0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lh.compareFunction=$u,r=lh):r=cd,e.setTexture2D(t||r,i)}function p0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ud,i)}function m0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dd,i)}function _0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hd,i)}function g0(s){switch(s){case 5126:return Jg;case 35664:return Qg;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(s,t){s.uniform1fv(this.addr,t)}function x0(s,t){const e=js(t,this.size,2);s.uniform2fv(this.addr,e)}function y0(s,t){const e=js(t,this.size,3);s.uniform3fv(this.addr,e)}function M0(s,t){const e=js(t,this.size,4);s.uniform4fv(this.addr,e)}function S0(s,t){const e=js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function E0(s,t){const e=js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function b0(s,t){const e=js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function T0(s,t){s.uniform1iv(this.addr,t)}function w0(s,t){s.uniform2iv(this.addr,t)}function A0(s,t){s.uniform3iv(this.addr,t)}function C0(s,t){s.uniform4iv(this.addr,t)}function R0(s,t){s.uniform1uiv(this.addr,t)}function P0(s,t){s.uniform2uiv(this.addr,t)}function L0(s,t){s.uniform3uiv(this.addr,t)}function D0(s,t){s.uniform4uiv(this.addr,t)}function I0(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||cd,r[a])}function N0(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ud,r[a])}function U0(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dd,r[a])}function O0(s,t,e){const n=this.cache,i=t.length,r=Da(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||hd,r[a])}function F0(s){switch(s){case 5126:return v0;case 35664:return x0;case 35665:return y0;case 35666:return M0;case 35674:return S0;case 35675:return E0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return w0;case 35668:case 35672:return A0;case 35669:case 35673:return C0;case 5125:return R0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return O0}}class k0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=g0(e.type)}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}}class z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function ph(s,t){s.seq.push(t),s.map[t.id]=t}function V0(s,t,e){const n=s.name,i=n.length;for(_o.lastIndex=0;;){const r=_o.exec(n),a=_o.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ph(e,c===void 0?new k0(o,s,t):new B0(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new z0(o),ph(e,d)),e=d}}}class pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);V0(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function mh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const G0=37297;let H0=0;function W0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const _h=new jt;function X0(s){ie._getMatrix(_h,ie.workingColorSpace,s);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Ra:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+W0(s.getShaderSource(t),a)}else return i}function q0(s,t){const e=X0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Y0(s,t){let e;switch(t){case hp:e="Linear";break;case up:e="Reinhard";break;case dp:e="Cineon";break;case ku:e="ACESFilmic";break;case pp:e="AgX";break;case mp:e="Neutral";break;case fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ta=new D;function K0(){ie.getLuminanceCoefficients(ta);const s=ta.x.toFixed(4),t=ta.y.toFixed(4),e=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function $0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function hr(s){return s!==""}function vh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(s){return s.replace(J0,tv)}const Q0=new Map;function tv(s,t){let e=$t[t];if(e===void 0){const n=Q0.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wl(e)}const ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(s){return s.replace(ev,nv)}function nv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Mh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function iv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function sv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function av(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fu:t="ENVMAP_BLENDING_MULTIPLY";break;case lp:t="ENVMAP_BLENDING_MIX";break;case cp:t="ENVMAP_BLENDING_ADD";break}return t}function ov(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lv(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=iv(e),c=sv(e),h=rv(e),d=av(e),u=ov(e),f=j0(e),g=$0(r),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,q0("linearToOutputTexel",e.outputColorSpace),K0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=wl(a),a=vh(a,e),a=xh(a,e),o=wl(o),o=vh(o,e),o=xh(o,e),a=yh(a),o=yh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,v=x+p+o,A=mh(i,i.VERTEX_SHADER,y),w=mh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(L){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),Y=i.getShaderInfoLog(w).trim();let J=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const Q=gh(i,A,"vertex"),q=gh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+Q+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||Y==="")&&(H=!1);H&&(L.diagnostics={runnable:J,programLog:G,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(A),i.deleteShader(w),C=new pa(i,_),M=Z0(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,G0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let cv=0;class hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new uv(t),e.set(t,n)),n}}class uv{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}}function dv(s,t,e,n,i,r,a){const o=new nc,l=new hv,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,G,F){const Y=G.fog,J=F.geometry,H=M.isMeshStandardMaterial?G.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),q=Q&&Q.mapping===Ca?Q.image.height:null,dt=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const N=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,P=N!==void 0?N.length:0;let at=0;J.morphAttributes.position!==void 0&&(at=1),J.morphAttributes.normal!==void 0&&(at=2),J.morphAttributes.color!==void 0&&(at=3);let pt,V,K,ot;if(dt){const se=Vn[dt];pt=se.vertexShader,V=se.fragmentShader}else pt=M.vertexShader,V=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),ot=l.getFragmentShaderID(M);const et=s.getRenderTarget(),ft=s.state.buffers.depth.getReversed(),Tt=F.isInstancedMesh===!0,Ct=F.isBatchedMesh===!0,Bt=!!M.map,Ut=!!M.matcap,Kt=!!Q,O=!!M.aoMap,oe=!!M.lightMap,Gt=!!M.bumpMap,It=!!M.normalMap,Nt=!!M.displacementMap,te=!!M.emissiveMap,Lt=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,W=M.clearcoat>0,st=M.dispersion>0,lt=M.iridescence>0,nt=M.sheen>0,mt=M.transmission>0,_t=E&&!!M.anisotropyMap,At=W&&!!M.clearcoatMap,Zt=W&&!!M.clearcoatNormalMap,ut=W&&!!M.clearcoatRoughnessMap,St=lt&&!!M.iridescenceMap,zt=lt&&!!M.iridescenceThicknessMap,Ot=nt&&!!M.sheenColorMap,Pt=nt&&!!M.sheenRoughnessMap,ee=!!M.specularMap,Yt=!!M.specularColorMap,le=!!M.specularIntensityMap,k=mt&&!!M.transmissionMap,yt=mt&&!!M.thicknessMap,Z=!!M.gradientMap,rt=!!M.alphaMap,wt=M.alphaTest>0,Et=!!M.alphaHash,kt=!!M.extensions;let me=Ti;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(me=s.toneMapping);const Be={shaderID:dt,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:V,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:ot,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&F._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&F.instanceColor!==null,instancingMorph:Tt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ks,alphaToCoverage:!!M.alphaToCoverage,map:Bt,matcap:Ut,envMap:Kt,envMapMode:Kt&&Q.mapping,envMapCubeUVHeight:q,aoMap:O,lightMap:oe,bumpMap:Gt,normalMap:It,displacementMap:u&&Nt,emissiveMap:te,normalMapObjectSpace:It&&M.normalMapType===xp,normalMapTangentSpace:It&&M.normalMapType===ec,metalnessMap:Lt,roughnessMap:R,anisotropy:E,anisotropyMap:_t,clearcoat:W,clearcoatMap:At,clearcoatNormalMap:Zt,clearcoatRoughnessMap:ut,dispersion:st,iridescence:lt,iridescenceMap:St,iridescenceThicknessMap:zt,sheen:nt,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:ee,specularColorMap:Yt,specularIntensityMap:le,transmission:mt,transmissionMap:k,thicknessMap:yt,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:rt,alphaTest:wt,alphaHash:Et,combine:M.combine,mapUv:Bt&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:oe&&_(M.lightMap.channel),bumpMapUv:Gt&&_(M.bumpMap.channel),normalMapUv:It&&_(M.normalMap.channel),displacementMapUv:Nt&&_(M.displacementMap.channel),emissiveMapUv:te&&_(M.emissiveMap.channel),metalnessMapUv:Lt&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:_t&&_(M.anisotropyMap.channel),clearcoatMapUv:At&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(M.sheenRoughnessMap.channel),specularMapUv:ee&&_(M.specularMap.channel),specularColorMapUv:Yt&&_(M.specularColorMap.channel),specularIntensityMapUv:le&&_(M.specularIntensityMap.channel),transmissionMapUv:k&&_(M.transmissionMap.channel),thicknessMapUv:yt&&_(M.thicknessMap.channel),alphaMapUv:rt&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(It||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(Bt||rt),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ft,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:Bt&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===ce,decodeVideoTextureEmissive:te&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const S=g[M.type];let L;if(S){const G=Vn[S];L=jp.clone(G.uniforms)}else L=M.uniforms;return L}function A(M,S){let L;for(let G=0,F=h.length;G<F;G++){const Y=h[G];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new lv(s,S,M,r),h.push(L)),L}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:C}}function fv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function pv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Eh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||pv),n.length>1&&n.sort(u||Sh),i.length>1&&i.sort(u||Sh)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function mv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Eh,s.set(n,[a])):i>=r.length?(a=new Eh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function _v(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Qt};break;case"SpotLight":e={position:new D,direction:new D,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function gv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let vv=0;function xv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function yv(s){const t=new _v,e=gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new ve,a=new ve;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,A=0,w=0,T=0;c.sort(xv);for(let M=0,S=c.length;M<S;M++){const L=c[M],G=L.color,F=L.intensity,Y=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*F,d+=G.g*F,u+=G.b*F;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],F);T++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,q=e.get(L);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(G).multiplyScalar(F),H.distance=Y,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const Q=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,Q.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const q=e.get(L);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=J,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(G).multiplyScalar(F),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Q=L.shadow,q=e.get(L);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(F),H.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=T,n.version=vv++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function bh(s){const t=new yv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mv(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new bh(s),t.set(i,[o])):r>=a.length?(o=new bh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sv extends os{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ev extends os{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wv(s,t,e){let n=new ic;const i=new Rt,r=new Rt,a=new ue,o=new Sv({depthPacking:vp}),l=new Ev,c={},h=e.maxTextureSize,d={[Ri]:ln,[ln]:Ri,[Hn]:Hn},u=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:bv,fragmentShader:Tv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uu;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(bi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const F=p!==Qn&&this.type===Qn,Y=p===Qn&&this.type!==Qn;for(let J=0,H=w.length;J<H;J++){const Q=w[J],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const dt=q.getFrameExtents();if(i.multiply(dt),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/dt.x),i.x=r.x*dt.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/dt.y),i.y=r.y*dt.y,q.mapSize.y=r.y)),q.map===null||F===!0||Y===!0){const P=this.type!==Qn?{minFilter:On,magFilter:On}:{};q.map!==null&&q.map.dispose(),q.map=new ns(i.x,i.y,P),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const N=q.getViewportCount();for(let P=0;P<N;P++){const at=q.getViewport(P);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),G.viewport(a),q.updateMatrices(Q,P),n=q.getFrustum(),v(T,C,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Qn&&x(q,C),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,L)};function x(w,T){const C=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ns(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,C,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,C,f,_,null)}function y(w,T,C,M){let S=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=S.uuid,F=T.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let J=Y[F];J===void 0&&(J=S.clone(),Y[F]=J,T.addEventListener("dispose",A)),S=J}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Qn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=s.properties.get(S);G.light=C}return S}function v(w,T,C,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=t.update(w),Y=w.material;if(Array.isArray(Y)){const J=F.groups;for(let H=0,Q=J.length;H<Q;H++){const q=J[H],dt=Y[q.materialIndex];if(dt&&dt.visible){const N=y(w,dt,M,S);w.onBeforeShadow(s,w,T,C,F,N,q),s.renderBufferDirect(C,null,F,N,w,q),w.onAfterShadow(s,w,T,C,F,N,q)}}}else if(Y.visible){const J=y(w,Y,M,S);w.onBeforeShadow(s,w,T,C,F,J,null),s.renderBufferDirect(C,null,F,J,w,null),w.onAfterShadow(s,w,T,C,F,J,null)}}const G=w.children;for(let F=0,Y=G.length;F<Y;F++)v(G[F],T,C,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Av={[Go]:Ho,[Wo]:Yo,[Xo]:Ko,[Gs]:qo,[Ho]:Go,[Yo]:Wo,[Ko]:Xo,[qo]:Gs};function Cv(s,t){function e(){let k=!1;const yt=new ue;let Z=null;const rt=new ue(0,0,0,0);return{setMask:function(wt){Z!==wt&&!k&&(s.colorMask(wt,wt,wt,wt),Z=wt)},setLocked:function(wt){k=wt},setClear:function(wt,Et,kt,me,Be){Be===!0&&(wt*=me,Et*=me,kt*=me),yt.set(wt,Et,kt,me),rt.equals(yt)===!1&&(s.clearColor(wt,Et,kt,me),rt.copy(yt))},reset:function(){k=!1,Z=null,rt.set(-1,0,0,0)}}}function n(){let k=!1,yt=!1,Z=null,rt=null,wt=null;return{setReversed:function(Et){if(yt!==Et){const kt=t.get("EXT_clip_control");yt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const me=wt;wt=null,this.setClear(me)}yt=Et},getReversed:function(){return yt},setTest:function(Et){Et?et(s.DEPTH_TEST):ft(s.DEPTH_TEST)},setMask:function(Et){Z!==Et&&!k&&(s.depthMask(Et),Z=Et)},setFunc:function(Et){if(yt&&(Et=Av[Et]),rt!==Et){switch(Et){case Go:s.depthFunc(s.NEVER);break;case Ho:s.depthFunc(s.ALWAYS);break;case Wo:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case Xo:s.depthFunc(s.EQUAL);break;case qo:s.depthFunc(s.GEQUAL);break;case Yo:s.depthFunc(s.GREATER);break;case Ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){wt!==Et&&(yt&&(Et=1-Et),s.clearDepth(Et),wt=Et)},reset:function(){k=!1,Z=null,rt=null,wt=null,yt=!1}}}function i(){let k=!1,yt=null,Z=null,rt=null,wt=null,Et=null,kt=null,me=null,Be=null;return{setTest:function(se){k||(se?et(s.STENCIL_TEST):ft(s.STENCIL_TEST))},setMask:function(se){yt!==se&&!k&&(s.stencilMask(se),yt=se)},setFunc:function(se,un,Rn){(Z!==se||rt!==un||wt!==Rn)&&(s.stencilFunc(se,un,Rn),Z=se,rt=un,wt=Rn)},setOp:function(se,un,Rn){(Et!==se||kt!==un||me!==Rn)&&(s.stencilOp(se,un,Rn),Et=se,kt=un,me=Rn)},setLocked:function(se){k=se},setClear:function(se){Be!==se&&(s.clearStencil(se),Be=se)},reset:function(){k=!1,yt=null,Z=null,rt=null,wt=null,Et=null,kt=null,me=null,Be=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,A=null,w=null,T=new Qt(0,0,0),C=0,M=!1,S=null,L=null,G=null,F=null,Y=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=Q>=2);let dt=null,N={};const P=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),pt=new ue().fromArray(P),V=new ue().fromArray(at);function K(k,yt,Z,rt){const wt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(k,Et),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Z;kt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(yt,0,s.RGBA,1,1,rt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(yt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Et}const ot={};ot[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Gs),Gt(!1),It(Rc),et(s.CULL_FACE),O(bi);function et(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function ft(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Tt(k,yt){return d[k]!==yt?(s.bindFramebuffer(k,yt),d[k]=yt,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=yt),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=yt),!0):!1}function Ct(k,yt){let Z=f,rt=!1;if(k){Z=u.get(yt),Z===void 0&&(Z=[],u.set(yt,Z));const wt=k.textures;if(Z.length!==wt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,kt=wt.length;Et<kt;Et++)Z[Et]=s.COLOR_ATTACHMENT0+Et;Z.length=wt.length,rt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,rt=!0);rt&&s.drawBuffers(Z)}function Bt(k){return g!==k?(s.useProgram(k),g=k,!0):!1}const Ut={[Xi]:s.FUNC_ADD,[Xf]:s.FUNC_SUBTRACT,[qf]:s.FUNC_REVERSE_SUBTRACT};Ut[Yf]=s.MIN,Ut[Kf]=s.MAX;const Kt={[jf]:s.ZERO,[$f]:s.ONE,[Zf]:s.SRC_COLOR,[zo]:s.SRC_ALPHA,[ip]:s.SRC_ALPHA_SATURATE,[ep]:s.DST_COLOR,[Qf]:s.DST_ALPHA,[Jf]:s.ONE_MINUS_SRC_COLOR,[Vo]:s.ONE_MINUS_SRC_ALPHA,[np]:s.ONE_MINUS_DST_COLOR,[tp]:s.ONE_MINUS_DST_ALPHA,[sp]:s.CONSTANT_COLOR,[rp]:s.ONE_MINUS_CONSTANT_COLOR,[ap]:s.CONSTANT_ALPHA,[op]:s.ONE_MINUS_CONSTANT_ALPHA};function O(k,yt,Z,rt,wt,Et,kt,me,Be,se){if(k===bi){_===!0&&(ft(s.BLEND),_=!1);return}if(_===!1&&(et(s.BLEND),_=!0),k!==Wf){if(k!==m||se!==M){if((p!==Xi||v!==Xi)&&(s.blendEquation(s.FUNC_ADD),p=Xi,v=Xi),se)switch(k){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.ONE,s.ONE);break;case Pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}x=null,y=null,A=null,w=null,T.set(0,0,0),C=0,m=k,M=se}return}wt=wt||yt,Et=Et||Z,kt=kt||rt,(yt!==p||wt!==v)&&(s.blendEquationSeparate(Ut[yt],Ut[wt]),p=yt,v=wt),(Z!==x||rt!==y||Et!==A||kt!==w)&&(s.blendFuncSeparate(Kt[Z],Kt[rt],Kt[Et],Kt[kt]),x=Z,y=rt,A=Et,w=kt),(me.equals(T)===!1||Be!==C)&&(s.blendColor(me.r,me.g,me.b,Be),T.copy(me),C=Be),m=k,M=!1}function oe(k,yt){k.side===Hn?ft(s.CULL_FACE):et(s.CULL_FACE);let Z=k.side===ln;yt&&(Z=!Z),Gt(Z),k.blending===Ns&&k.transparent===!1?O(bi):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const rt=k.stencilWrite;o.setTest(rt),rt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(k){S!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),S=k)}function It(k){k!==Gf?(et(s.CULL_FACE),k!==L&&(k===Rc?s.cullFace(s.BACK):k===Hf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ft(s.CULL_FACE),L=k}function Nt(k){k!==G&&(H&&s.lineWidth(k),G=k)}function te(k,yt,Z){k?(et(s.POLYGON_OFFSET_FILL),(F!==yt||Y!==Z)&&(s.polygonOffset(yt,Z),F=yt,Y=Z)):ft(s.POLYGON_OFFSET_FILL)}function Lt(k){k?et(s.SCISSOR_TEST):ft(s.SCISSOR_TEST)}function R(k){k===void 0&&(k=s.TEXTURE0+J-1),dt!==k&&(s.activeTexture(k),dt=k)}function E(k,yt,Z){Z===void 0&&(dt===null?Z=s.TEXTURE0+J-1:Z=dt);let rt=N[Z];rt===void 0&&(rt={type:void 0,texture:void 0},N[Z]=rt),(rt.type!==k||rt.texture!==yt)&&(dt!==Z&&(s.activeTexture(Z),dt=Z),s.bindTexture(k,yt||ot[k]),rt.type=k,rt.texture=yt)}function W(){const k=N[dt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function st(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){pt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),pt.copy(k))}function Pt(k){V.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),V.copy(k))}function ee(k,yt){let Z=c.get(yt);Z===void 0&&(Z=new WeakMap,c.set(yt,Z));let rt=Z.get(k);rt===void 0&&(rt=s.getUniformBlockIndex(yt,k.name),Z.set(k,rt))}function Yt(k,yt){const rt=c.get(yt).get(k);l.get(yt)!==rt&&(s.uniformBlockBinding(yt,rt,k.__bindingPointIndex),l.set(yt,rt))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,N={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,A=null,w=null,T=new Qt(0,0,0),C=0,M=!1,S=null,L=null,G=null,F=null,Y=null,pt.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:ft,bindFramebuffer:Tt,drawBuffers:Ct,useProgram:Bt,setBlending:O,setMaterial:oe,setFlipSided:Gt,setCullFace:It,setLineWidth:Nt,setPolygonOffset:te,setScissorTest:Lt,activeTexture:R,bindTexture:E,unbindTexture:W,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:St,texImage3D:zt,updateUBOMapping:ee,uniformBlockBinding:Yt,texStorage2D:Zt,texStorage3D:ut,texSubImage2D:nt,texSubImage3D:mt,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:Ot,viewport:Pt,reset:le}}function Th(s,t,e,n){const i=Rv(n);switch(e){case Hu:return s*t;case Xu:return s*t;case qu:return s*t*2;case Yu:return s*t/i.components*i.byteLength;case Jl:return s*t/i.components*i.byteLength;case Ku:return s*t*2/i.components*i.byteLength;case Ql:return s*t*2/i.components*i.byteLength;case Wu:return s*t*3/i.components*i.byteLength;case Un:return s*t*4/i.components*i.byteLength;case tc:return s*t*4/i.components*i.byteLength;case la:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(s,16)*Math.max(t,8)/4;case Qo:case el:return Math.max(s,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case da:case yl:case Ml:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ju:case Sl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case El:case bl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rv(s){switch(s){case oi:case zu:return{byteLength:1,components:1};case br:case Vu:case Ar:return{byteLength:2,components:1};case $l:case Zl:return{byteLength:2,components:4};case es:case jl:case ni:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Pv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):Ea("canvas")}function _(R,E,W){let st=1;const lt=Lt(R);if((lt.width>W||lt.height>W)&&(st=W/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const nt=Math.floor(st*lt.width),mt=Math.floor(st*lt.height);d===void 0&&(d=g(nt,mt));const _t=E?g(nt,mt):d;return _t.width=nt,_t.height=mt,_t.getContext("2d").drawImage(R,0,0,nt,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+nt+"x"+mt+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,E,W,st,lt=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=E;if(E===s.RED&&(W===s.FLOAT&&(nt=s.R32F),W===s.HALF_FLOAT&&(nt=s.R16F),W===s.UNSIGNED_BYTE&&(nt=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.R8UI),W===s.UNSIGNED_SHORT&&(nt=s.R16UI),W===s.UNSIGNED_INT&&(nt=s.R32UI),W===s.BYTE&&(nt=s.R8I),W===s.SHORT&&(nt=s.R16I),W===s.INT&&(nt=s.R32I)),E===s.RG&&(W===s.FLOAT&&(nt=s.RG32F),W===s.HALF_FLOAT&&(nt=s.RG16F),W===s.UNSIGNED_BYTE&&(nt=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.RG8UI),W===s.UNSIGNED_SHORT&&(nt=s.RG16UI),W===s.UNSIGNED_INT&&(nt=s.RG32UI),W===s.BYTE&&(nt=s.RG8I),W===s.SHORT&&(nt=s.RG16I),W===s.INT&&(nt=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),W===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),W===s.UNSIGNED_INT&&(nt=s.RGB32UI),W===s.BYTE&&(nt=s.RGB8I),W===s.SHORT&&(nt=s.RGB16I),W===s.INT&&(nt=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),W===s.UNSIGNED_INT&&(nt=s.RGBA32UI),W===s.BYTE&&(nt=s.RGBA8I),W===s.SHORT&&(nt=s.RGBA16I),W===s.INT&&(nt=s.RGBA32I)),E===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),E===s.RGBA){const mt=lt?Ra:ie.getTransfer(st);W===s.FLOAT&&(nt=s.RGBA32F),W===s.HALF_FLOAT&&(nt=s.RGBA16F),W===s.UNSIGNED_BYTE&&(nt=mt===ce?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(R,E){let W;return R?E===null||E===es||E===Xs?W=s.DEPTH24_STENCIL8:E===ni?W=s.DEPTH32F_STENCIL8:E===br&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===es||E===Xs?W=s.DEPTH_COMPONENT24:E===ni?W=s.DEPTH_COMPONENT32F:E===br&&(W=s.DEPTH_COMPONENT16),W}function A(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==On&&R.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),S(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const W=R.source,st=u.get(W);if(st){const lt=st[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&M(R),Object.keys(st).length===0&&u.delete(W)}n.remove(R)}function M(R){const E=n.get(R);s.deleteTexture(E.__webglTexture);const W=R.source,st=u.get(W);delete st[E.__cacheKey],a.memory.textures--}function S(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let lt=0;lt<E.__webglFramebuffer[st].length;lt++)s.deleteFramebuffer(E.__webglFramebuffer[st][lt]);else s.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)s.deleteFramebuffer(E.__webglFramebuffer[st]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let st=0,lt=W.length;st<lt;st++){const nt=n.get(W[st]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(W[st])}n.remove(R)}let L=0;function G(){L=0}function F(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function J(R,E){const W=n.get(R);if(R.isVideoTexture&&Nt(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(W,R,E);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function H(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){V(W,R,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function Q(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){V(W,R,E);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function q(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const dt={[Zo]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[Jo]:s.MIRRORED_REPEAT},N={[On]:s.NEAREST,[_p]:s.NEAREST_MIPMAP_NEAREST,[Nr]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[Ga]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},P={[yp]:s.NEVER,[wp]:s.ALWAYS,[Mp]:s.LESS,[$u]:s.LEQUAL,[Sp]:s.EQUAL,[Tp]:s.GEQUAL,[Ep]:s.GREATER,[bp]:s.NOTEQUAL};function at(R,E){if(E.type===ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===Ga||E.magFilter===Nr||E.magFilter===ji||E.minFilter===Xn||E.minFilter===Ga||E.minFilter===Nr||E.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,dt[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,dt[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,dt[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,N[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,N[E.minFilter]),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==Nr&&E.minFilter!==ji||E.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function pt(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const st=E.source;let lt=u.get(st);lt===void 0&&(lt={},u.set(st,lt));const nt=Y(E);if(nt!==R.__cacheKey){lt[nt]===void 0&&(lt[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),lt[nt].usedTimes++;const mt=lt[R.__cacheKey];mt!==void 0&&(lt[R.__cacheKey].usedTimes--,mt.usedTimes===0&&M(E)),R.__cacheKey=nt,R.__webglTexture=lt[nt].texture}return W}function V(R,E,W){let st=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=s.TEXTURE_3D);const lt=pt(R,E),nt=E.source;e.bindTexture(st,R.__webglTexture,s.TEXTURE0+W);const mt=n.get(nt);if(nt.version!==mt.__version||lt===!0){e.activeTexture(s.TEXTURE0+W);const _t=ie.getPrimaries(ie.workingColorSpace),At=E.colorSpace===vi?null:ie.getPrimaries(E.colorSpace),Zt=E.colorSpace===vi||_t===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ut=_(E.image,!1,i.maxTextureSize);ut=te(E,ut);const St=r.convert(E.format,E.colorSpace),zt=r.convert(E.type);let Ot=y(E.internalFormat,St,zt,E.colorSpace,E.isVideoTexture);at(st,E);let Pt;const ee=E.mipmaps,Yt=E.isVideoTexture!==!0,le=mt.__version===void 0||lt===!0,k=nt.dataReady,yt=A(E,ut);if(E.isDepthTexture)Ot=v(E.format===qs,E.type),le&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,Ot,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ut.width,ut.height,0,St,zt,null));else if(E.isDataTexture)if(ee.length>0){Yt&&le&&e.texStorage2D(s.TEXTURE_2D,yt,Ot,ee[0].width,ee[0].height);for(let Z=0,rt=ee.length;Z<rt;Z++)Pt=ee[Z],Yt?k&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,St,zt,Pt.data):e.texImage2D(s.TEXTURE_2D,Z,Ot,Pt.width,Pt.height,0,St,zt,Pt.data);E.generateMipmaps=!1}else Yt?(le&&e.texStorage2D(s.TEXTURE_2D,yt,Ot,ut.width,ut.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,St,zt,ut.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,ut.width,ut.height,0,St,zt,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Yt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Ot,ee[0].width,ee[0].height,ut.depth);for(let Z=0,rt=ee.length;Z<rt;Z++)if(Pt=ee[Z],E.format!==Un)if(St!==null)if(Yt){if(k)if(E.layerUpdates.size>0){const wt=Th(Pt.width,Pt.height,E.format,E.type);for(const Et of E.layerUpdates){const kt=Pt.data.subarray(Et*wt/Pt.data.BYTES_PER_ELEMENT,(Et+1)*wt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,Et,Pt.width,Pt.height,1,St,kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,ut.depth,St,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Ot,Pt.width,Pt.height,ut.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,ut.depth,St,zt,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Ot,Pt.width,Pt.height,ut.depth,0,St,zt,Pt.data)}else{Yt&&le&&e.texStorage2D(s.TEXTURE_2D,yt,Ot,ee[0].width,ee[0].height);for(let Z=0,rt=ee.length;Z<rt;Z++)Pt=ee[Z],E.format!==Un?St!==null?Yt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,St,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Ot,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?k&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,St,zt,Pt.data):e.texImage2D(s.TEXTURE_2D,Z,Ot,Pt.width,Pt.height,0,St,zt,Pt.data)}else if(E.isDataArrayTexture)if(Yt){if(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Ot,ut.width,ut.height,ut.depth),k)if(E.layerUpdates.size>0){const Z=Th(ut.width,ut.height,E.format,E.type);for(const rt of E.layerUpdates){const wt=ut.data.subarray(rt*Z/ut.data.BYTES_PER_ELEMENT,(rt+1)*Z/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,rt,ut.width,ut.height,1,St,zt,wt)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,St,zt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ut.width,ut.height,ut.depth,0,St,zt,ut.data);else if(E.isData3DTexture)Yt?(le&&e.texStorage3D(s.TEXTURE_3D,yt,Ot,ut.width,ut.height,ut.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,St,zt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ut.width,ut.height,ut.depth,0,St,zt,ut.data);else if(E.isFramebufferTexture){if(le)if(Yt)e.texStorage2D(s.TEXTURE_2D,yt,Ot,ut.width,ut.height);else{let Z=ut.width,rt=ut.height;for(let wt=0;wt<yt;wt++)e.texImage2D(s.TEXTURE_2D,wt,Ot,Z,rt,0,St,zt,null),Z>>=1,rt>>=1}}else if(ee.length>0){if(Yt&&le){const Z=Lt(ee[0]);e.texStorage2D(s.TEXTURE_2D,yt,Ot,Z.width,Z.height)}for(let Z=0,rt=ee.length;Z<rt;Z++)Pt=ee[Z],Yt?k&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,St,zt,Pt):e.texImage2D(s.TEXTURE_2D,Z,Ot,St,zt,Pt);E.generateMipmaps=!1}else if(Yt){if(le){const Z=Lt(ut);e.texStorage2D(s.TEXTURE_2D,yt,Ot,Z.width,Z.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,zt,ut)}else e.texImage2D(s.TEXTURE_2D,0,Ot,St,zt,ut);m(E)&&p(st),mt.__version=nt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function K(R,E,W){if(E.image.length!==6)return;const st=pt(R,E),lt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);const nt=n.get(lt);if(lt.version!==nt.__version||st===!0){e.activeTexture(s.TEXTURE0+W);const mt=ie.getPrimaries(ie.workingColorSpace),_t=E.colorSpace===vi?null:ie.getPrimaries(E.colorSpace),At=E.colorSpace===vi||mt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,ut=E.image[0]&&E.image[0].isDataTexture,St=[];for(let rt=0;rt<6;rt++)!Zt&&!ut?St[rt]=_(E.image[rt],!0,i.maxCubemapSize):St[rt]=ut?E.image[rt].image:E.image[rt],St[rt]=te(E,St[rt]);const zt=St[0],Ot=r.convert(E.format,E.colorSpace),Pt=r.convert(E.type),ee=y(E.internalFormat,Ot,Pt,E.colorSpace),Yt=E.isVideoTexture!==!0,le=nt.__version===void 0||st===!0,k=lt.dataReady;let yt=A(E,zt);at(s.TEXTURE_CUBE_MAP,E);let Z;if(Zt){Yt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,ee,zt.width,zt.height);for(let rt=0;rt<6;rt++){Z=St[rt].mipmaps;for(let wt=0;wt<Z.length;wt++){const Et=Z[wt];E.format!==Un?Ot!==null?Yt?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Et.width,Et.height,Ot,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,ee,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,0,0,Et.width,Et.height,Ot,Pt,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt,ee,Et.width,Et.height,0,Ot,Pt,Et.data)}}}else{if(Z=E.mipmaps,Yt&&le){Z.length>0&&yt++;const rt=Lt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,ee,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ut){Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St[rt].width,St[rt].height,Ot,Pt,St[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ee,St[rt].width,St[rt].height,0,Ot,Pt,St[rt].data);for(let wt=0;wt<Z.length;wt++){const kt=Z[wt].image[rt].image;Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,kt.width,kt.height,Ot,Pt,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,ee,kt.width,kt.height,0,Ot,Pt,kt.data)}}else{Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,Pt,St[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ee,Ot,Pt,St[rt]);for(let wt=0;wt<Z.length;wt++){const Et=Z[wt];Yt?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,0,0,Ot,Pt,Et.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,wt+1,ee,Ot,Pt,Et.image[rt])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),nt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ot(R,E,W,st,lt,nt){const mt=r.convert(W.format,W.colorSpace),_t=r.convert(W.type),At=y(W.internalFormat,mt,_t,W.colorSpace),Zt=n.get(E),ut=n.get(W);if(ut.__renderTarget=E,!Zt.__hasExternalTextures){const St=Math.max(1,E.width>>nt),zt=Math.max(1,E.height>>nt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,nt,At,St,zt,E.depth,0,mt,_t,null):e.texImage2D(lt,nt,At,St,zt,0,mt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),It(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,lt,ut.__webglTexture,0,Gt(E)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,lt,ut.__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(R,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer){const st=E.depthTexture,lt=st&&st.isDepthTexture?st.type:null,nt=v(E.stencilBuffer,lt),mt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=Gt(E);It(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,nt,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,nt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,nt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,R)}else{const st=E.textures;for(let lt=0;lt<st.length;lt++){const nt=st[lt],mt=r.convert(nt.format,nt.colorSpace),_t=r.convert(nt.type),At=y(nt.internalFormat,mt,_t,nt.colorSpace),Zt=Gt(E);W&&It(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,At,E.width,E.height):It(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,At,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,At,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(E.depthTexture);st.__renderTarget=E,(!st.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const lt=st.__webglTexture,nt=Gt(E);if(E.depthTexture.format===Us)It(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0);else if(E.depthTexture.format===qs)It(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Tt(R){const E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const st=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=st}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ft(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=s.createRenderbuffer(),et(E.__webglDepthbuffer[st],R,!1);else{const lt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),et(E.__webglDepthbuffer,R,!1);else{const st=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,lt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(R,E,W){const st=n.get(R);E!==void 0&&ot(st.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Tt(R)}function Bt(R){const E=R.texture,W=n.get(R),st=n.get(E);R.addEventListener("dispose",T);const lt=R.textures,nt=R.isWebGLCubeRenderTarget===!0,mt=lt.length>1;if(mt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=E.version,a.memory.textures++),nt){W.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[_t]=[];for(let At=0;At<E.mipmaps.length;At++)W.__webglFramebuffer[_t][At]=s.createFramebuffer()}else W.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)W.__webglFramebuffer[_t]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(mt)for(let _t=0,At=lt.length;_t<At;_t++){const Zt=n.get(lt[_t]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&It(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){const At=lt[_t];W.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[_t]);const Zt=r.convert(At.format,At.colorSpace),ut=r.convert(At.type),St=y(At.internalFormat,Zt,ut,At.colorSpace,R.isXRRenderTarget===!0),zt=Gt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,St,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,W.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),et(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),at(s.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)ot(W.__webglFramebuffer[_t][At],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else ot(W.__webglFramebuffer[_t],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(E)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let _t=0,At=lt.length;_t<At;_t++){const Zt=lt[_t],ut=n.get(Zt);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),at(s.TEXTURE_2D,Zt),ot(W.__webglFramebuffer,R,Zt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),m(Zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),at(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)ot(W.__webglFramebuffer[At],R,E,s.COLOR_ATTACHMENT0,_t,At);else ot(W.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,_t,0);m(E)&&p(_t),e.unbindTexture()}R.depthBuffer&&Tt(R)}function Ut(R){const E=R.textures;for(let W=0,st=E.length;W<st;W++){const lt=E[W];if(m(lt)){const nt=x(R),mt=n.get(lt).__webglTexture;e.bindTexture(nt,mt),p(nt),e.unbindTexture()}}}const Kt=[],O=[];function oe(R){if(R.samples>0){if(It(R)===!1){const E=R.textures,W=R.width,st=R.height;let lt=s.COLOR_BUFFER_BIT;const nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=n.get(R),_t=E.length>1;if(_t)for(let At=0;At<E.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let At=0;At<E.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,mt.__webglColorRenderbuffer[At]);const Zt=n.get(E[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,W,st,0,0,W,st,lt,s.NEAREST),l===!0&&(Kt.length=0,O.length=0,Kt.push(s.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Kt.push(nt),O.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<E.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,mt.__webglColorRenderbuffer[At]);const Zt=n.get(E[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Gt(R){return Math.min(i.maxSamples,R.samples)}function It(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Nt(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function te(R,E){const W=R.colorSpace,st=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Ks&&W!==vi&&(ie.getTransfer(W)===ce?(st!==Un||lt!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Lt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Ct,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=It}function Lv(s,t){function e(n,i=vi){let r;const a=ie.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===$l)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return s.BYTE;if(n===Vu)return s.SHORT;if(n===br)return s.UNSIGNED_SHORT;if(n===jl)return s.INT;if(n===es)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===Ar)return s.HALF_FLOAT;if(n===Hu)return s.ALPHA;if(n===Wu)return s.RGB;if(n===Un)return s.RGBA;if(n===Xu)return s.LUMINANCE;if(n===qu)return s.LUMINANCE_ALPHA;if(n===Us)return s.DEPTH_COMPONENT;if(n===qs)return s.DEPTH_STENCIL;if(n===Yu)return s.RED;if(n===Jl)return s.RED_INTEGER;if(n===Ku)return s.RG;if(n===Ql)return s.RG_INTEGER;if(n===tc)return s.RGBA_INTEGER;if(n===la||n===ca||n===ha||n===ua)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===_l||n===gl||n===vl||n===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===yl||n===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ju||n===Sl||n===El||n===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Dv extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xe extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Nv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new cn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:Nv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends as{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new Ov,m=e.getContextAttributes();let p=null,x=null;const y=[],v=[],A=new Rt;let w=null;const T=new _n;T.viewport=new ue;const C=new _n;C.viewport=new ue;const M=[T,C],S=new Dv;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=y[V];return K===void 0&&(K=new go,y[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=y[V];return K===void 0&&(K=new go,y[V]=K),K.getGripSpace()},this.getHand=function(V){let K=y[V];return K===void 0&&(K=new go,y[V]=K),K.getHandSpace()};function F(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const ot=y[K];ot!==void 0&&(ot.update(V.inputSource,V.frame,c||a),ot.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",J);for(let V=0;V<y.length;V++){const K=v[V];K!==null&&(v[V]=null,y[V].disconnect(K))}L=null,G=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ns(f.framebufferWidth,f.framebufferHeight,{format:Un,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ot=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?qs:Us,ot=m.stencil?Xs:es);const ft={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(ft),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ns(u.textureWidth,u.textureHeight,{format:Un,type:oi,depthTexture:new ld(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(V){for(let K=0;K<V.removed.length;K++){const ot=V.removed[K],et=v.indexOf(ot);et>=0&&(v[et]=null,y[et].disconnect(ot))}for(let K=0;K<V.added.length;K++){const ot=V.added[K];let et=v.indexOf(ot);if(et===-1){for(let Tt=0;Tt<y.length;Tt++)if(Tt>=v.length){v.push(ot),et=Tt;break}else if(v[Tt]===null){v[Tt]=ot,et=Tt;break}if(et===-1)break}const ft=y[et];ft&&ft.connect(ot)}}const H=new D,Q=new D;function q(V,K,ot){H.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);const et=H.distanceTo(Q),ft=K.projectionMatrix.elements,Tt=ot.projectionMatrix.elements,Ct=ft[14]/(ft[10]-1),Bt=ft[14]/(ft[10]+1),Ut=(ft[9]+1)/ft[5],Kt=(ft[9]-1)/ft[5],O=(ft[8]-1)/ft[0],oe=(Tt[8]+1)/Tt[0],Gt=Ct*O,It=Ct*oe,Nt=et/(-O+oe),te=Nt*-O;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(te),V.translateZ(Nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ft[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Lt=Ct+Nt,R=Bt+Nt,E=Gt-te,W=It+(et-te),st=Ut*Bt/R*Lt,lt=Kt*Bt/R*Lt;V.projectionMatrix.makePerspective(E,W,st,lt,Lt,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function dt(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let K=V.near,ot=V.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),S.near=C.near=T.near=K,S.far=C.far=T.far=ot,(L!==S.near||G!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,G=S.far),T.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const et=V.parent,ft=S.cameras;dt(S,et);for(let Tt=0;Tt<ft.length;Tt++)dt(ft[Tt],et);ft.length===2?q(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),N(V,S,et)};function N(V,K,ot){ot===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ot.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Tl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let P=null;function at(V,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let et=!1;ot.length!==S.cameras.length&&(S.cameras.length=0,et=!0);for(let Tt=0;Tt<ot.length;Tt++){const Ct=ot[Tt];let Bt=null;if(f!==null)Bt=f.getViewport(Ct);else{const Kt=d.getViewSubImage(u,Ct);Bt=Kt.viewport,Tt===0&&(t.setRenderTargetTextures(x,Kt.colorTexture,u.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(x))}let Ut=M[Tt];Ut===void 0&&(Ut=new _n,Ut.layers.enable(Tt),Ut.viewport=new ue,M[Tt]=Ut),Ut.matrix.fromArray(Ct.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ct.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Tt===0&&(S.matrix.copy(Ut.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),et===!0&&S.cameras.push(Ut)}const ft=i.enabledFeatures;if(ft&&ft.includes("depth-sensing")){const Tt=d.getDepthInformation(ot[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,i.renderState)}}for(let ot=0;ot<y.length;ot++){const et=v[ot],ft=y[ot];et!==null&&ft!==void 0&&ft.update(et,K,c||a)}P&&P(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const pt=new ad;pt.setAnimationLoop(at),this.setAnimationLoop=function(V){P=V},this.dispose=function(){}}}const Gi=new Yn,kv=new ve;function Bv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,id(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Gi.copy(v),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(Gi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zv(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(x,A);const w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const y=d();x.__bindingPointIndex=y;const v=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],v=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,T=v.length;w<T;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=C.length;M<S;M++){const L=C[M];if(f(L,w,M,A)===!0){const G=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let J=0;J<F.length;J++){const H=F[J],Q=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+Y,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,v,A){const w=x.value,T=y+"_"+v;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const C=A[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const y=x.uniforms;let v=0;const A=16;for(let T=0,C=y.length;T<C;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,L=M.length;S<L;S++){const G=M[S],F=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,J=F.length;Y<J;Y++){const H=F[Y],Q=_(H),q=v%A,dt=q%Q.boundary,N=q+dt;v+=dt,N!==0&&A-N<Q.storage&&(v+=A-N),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=Q.storage}}}const w=v%A;return w>0&&(v+=A-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Vv{constructor(t={}){const{canvas:e=Rp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let A=!1,w=0,T=0,C=null,M=-1,S=null;const L=new ue,G=new ue;let F=null;const Y=new Qt(0);let J=0,H=e.width,Q=e.height,q=1,dt=null,N=null;const P=new ue(0,0,H,Q),at=new ue(0,0,H,Q);let pt=!1;const V=new ic;let K=!1,ot=!1;const et=new ve,ft=new ve,Tt=new D,Ct=new ue,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Kt(){return C===null?q:1}let O=n;function oe(b,B){return e.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),O===null){const B="webgl2";if(O=oe(B,b),O===null)throw oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Gt,It,Nt,te,Lt,R,E,W,st,lt,nt,mt,_t,At,Zt,ut,St,zt,Ot,Pt,ee,Yt,le,k;function yt(){Gt=new qg(O),Gt.init(),Yt=new Lv(O,Gt),It=new zg(O,Gt,t,Yt),Nt=new Cv(O,Gt),It.reverseDepthBuffer&&u&&Nt.buffers.depth.setReversed(!0),te=new jg(O),Lt=new fv,R=new Pv(O,Gt,Nt,Lt,It,Yt,te),E=new Gg(v),W=new Xg(v),st=new nm(O),le=new kg(O,st),lt=new Yg(O,st,te,le),nt=new Zg(O,lt,st,te),Ot=new $g(O,It,R),ut=new Vg(Lt),mt=new dv(v,E,W,Gt,It,le,ut),_t=new Bv(v,Lt),At=new mv,Zt=new Mv(Gt),zt=new Fg(v,E,W,Nt,nt,f,l),St=new wv(v,nt,It),k=new zv(O,te,It,Nt),Pt=new Bg(O,Gt,te),ee=new Kg(O,Gt,te),te.programs=mt.programs,v.capabilities=It,v.extensions=Gt,v.properties=Lt,v.renderLists=At,v.shadowMap=St,v.state=Nt,v.info=te}yt();const Z=new Fv(v,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=Gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(H,Q,!1))},this.getSize=function(b){return b.set(H,Q)},this.setSize=function(b,B,$=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,Q=B,e.width=Math.floor(b*q),e.height=Math.floor(B*q),$===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(H*q,Q*q).floor()},this.setDrawingBufferSize=function(b,B,$){H=b,Q=B,q=$,e.width=Math.floor(b*$),e.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,B,$,j){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,B,$,j),Nt.viewport(L.copy(P).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,B,$,j){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,B,$,j),Nt.scissor(G.copy(at).multiplyScalar(q).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(b){Nt.setScissorTest(pt=b)},this.setOpaqueSort=function(b){dt=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(b=!0,B=!0,$=!0){let j=0;if(b){let z=!1;if(C!==null){const I=C.texture.format;z=I===tc||I===Ql||I===Jl}if(z){const I=C.texture.type,X=I===oi||I===es||I===br||I===Xs||I===$l||I===Zl,ht=zt.getClearColor(),U=zt.getClearAlpha(),vt=ht.r,Dt=ht.g,ct=ht.b;X?(g[0]=vt,g[1]=Dt,g[2]=ct,g[3]=U,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=vt,_[1]=Dt,_[2]=ct,_[3]=U,O.clearBufferiv(O.COLOR,0,_))}else j|=O.COLOR_BUFFER_BIT}B&&(j|=O.DEPTH_BUFFER_BIT),$&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),Zt.dispose(),Lt.dispose(),E.dispose(),W.dispose(),nt.dispose(),le.dispose(),k.dispose(),mt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",$s),Z.removeEventListener("sessionend",Pr),kn.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=te.autoReset,B=St.enabled,$=St.autoUpdate,j=St.needsUpdate,z=St.type;yt(),te.autoReset=b,St.enabled=B,St.autoUpdate=$,St.needsUpdate=j,St.type=z}function Et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kt(b){const B=b.target;B.removeEventListener("dispose",kt),me(B)}function me(b){Be(b),Lt.remove(b)}function Be(b){const B=Lt.get(b).programs;B!==void 0&&(B.forEach(function($){mt.releaseProgram($)}),b.isShaderMaterial&&mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,j,z,I){B===null&&(B=Bt);const X=z.isMesh&&z.matrixWorld.determinant()<0,ht=En(b,B,$,j,z);Nt.setMaterial(j,X);let U=$.index,vt=1;if(j.wireframe===!0){if(U=lt.getWireframeAttribute($),U===void 0)return;vt=2}const Dt=$.drawRange,ct=$.attributes.position;let bt=Dt.start*vt,Ft=(Dt.start+Dt.count)*vt;I!==null&&(bt=Math.max(bt,I.start*vt),Ft=Math.min(Ft,(I.start+I.count)*vt)),U!==null?(bt=Math.max(bt,0),Ft=Math.min(Ft,U.count)):ct!=null&&(bt=Math.max(bt,0),Ft=Math.min(Ft,ct.count));const Ht=Ft-bt;if(Ht<0||Ht===1/0)return;le.setup(z,j,ht,$,U);let Xt,Vt=Pt;if(U!==null&&(Xt=st.get(U),Vt=ee,Vt.setIndex(Xt)),z.isMesh)j.wireframe===!0?(Nt.setLineWidth(j.wireframeLinewidth*Kt()),Vt.setMode(O.LINES)):Vt.setMode(O.TRIANGLES);else if(z.isLine){let gt=j.linewidth;gt===void 0&&(gt=1),Nt.setLineWidth(gt*Kt()),z.isLineSegments?Vt.setMode(O.LINES):z.isLineLoop?Vt.setMode(O.LINE_LOOP):Vt.setMode(O.LINE_STRIP)}else z.isPoints?Vt.setMode(O.POINTS):z.isSprite&&Vt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Vt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const gt=z._multiDrawStarts,Ae=z._multiDrawCounts,qt=z._multiDrawCount,ze=U?st.get(U).bytesPerElement:1,qe=Lt.get(j).currentProgram.getUniforms();for(let de=0;de<qt;de++)qe.setValue(O,"_gl_DrawID",de),Vt.render(gt[de]/ze,Ae[de])}else if(z.isInstancedMesh)Vt.renderInstances(bt,Ht,z.count);else if($.isInstancedBufferGeometry){const gt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ae=Math.min($.instanceCount,gt);Vt.renderInstances(bt,Ht,Ae)}else Vt.render(bt,Ht)};function se(b,B,$){b.transparent===!0&&b.side===Hn&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,Ii(b,B,$),b.side=Ri,b.needsUpdate=!0,Ii(b,B,$),b.side=Hn):Ii(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),p=Zt.get($),p.init(B),y.push(p),$.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==$&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const j=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const I=z.material;if(I)if(Array.isArray(I))for(let X=0;X<I.length;X++){const ht=I[X];se(ht,$,z),j.add(ht)}else se(I,$,z),j.add(I)}),y.pop(),p=null,j},this.compileAsync=function(b,B,$=null){const j=this.compile(b,B,$);return new Promise(z=>{function I(){if(j.forEach(function(X){Lt.get(X).currentProgram.isReady()&&j.delete(X)}),j.size===0){z(b);return}setTimeout(I,10)}Gt.get("KHR_parallel_shader_compile")!==null?I():setTimeout(I,10)})};let un=null;function Rn(b){un&&un(b)}function $s(){kn.stop()}function Pr(){kn.start()}const kn=new ad;kn.setAnimationLoop(Rn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(b){un=b,Z.setAnimationLoop(b),b===null?kn.stop():kn.start()},Z.addEventListener("sessionstart",$s),Z.addEventListener("sessionend",Pr),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,C),p=Zt.get(b,y.length),p.init(B),y.push(p),ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(ft),ot=this.localClippingEnabled,K=ut.init(this.clippingPlanes,ot),m=At.get(b,x.length),m.init(),x.push(m),Z.enabled===!0&&Z.isPresenting===!0){const I=v.xr.getDepthSensingMesh();I!==null&&ls(I,B,-1/0,v.sortObjects)}ls(b,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(dt,N),Ut=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ut&&zt.addToRenderList(m,b),this.info.render.frame++,K===!0&&ut.beginShadows();const $=p.state.shadowsArray;St.render($,b,B),K===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const I=B.cameras;if(z.length>0)for(let X=0,ht=I.length;X<ht;X++){const U=I[X];Zs(j,z,b,U)}Ut&&zt.render(b);for(let X=0,ht=I.length;X<ht;X++){const U=I[X];Di(m,b,U,U.viewport)}}else z.length>0&&Zs(j,z,b,B),Ut&&zt.render(b),Di(m,b,B);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,B),le.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&ut.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ls(b,B,$,j){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){j&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ft);const X=nt.update(b),ht=b.material;ht.visible&&m.push(b,X,ht,$,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){const X=nt.update(b),ht=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),Ct.copy(X.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(ft)),Array.isArray(ht)){const U=X.groups;for(let vt=0,Dt=U.length;vt<Dt;vt++){const ct=U[vt],bt=ht[ct.materialIndex];bt&&bt.visible&&m.push(b,X,bt,$,Ct.z,ct)}}else ht.visible&&m.push(b,X,ht,$,Ct.z,null)}}const I=b.children;for(let X=0,ht=I.length;X<ht;X++)ls(I[X],B,$,j)}function Di(b,B,$,j){const z=b.opaque,I=b.transmissive,X=b.transparent;p.setupLightsView($),K===!0&&ut.setGlobalState(v.clippingPlanes,$),j&&Nt.viewport(L.copy(j)),z.length>0&&hi(z,B,$),I.length>0&&hi(I,B,$),X.length>0&&hi(X,B,$),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Zs(b,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ns(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Ar:oi,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const I=p.state.transmissionRenderTarget[j.id],X=j.viewport||L;I.setSize(X.z,X.w);const ht=v.getRenderTarget();v.setRenderTarget(I),v.getClearColor(Y),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Ut&&zt.render($);const U=v.toneMapping;v.toneMapping=Ti;const vt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),K===!0&&ut.setGlobalState(v.clippingPlanes,j),hi(b,$,j),R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ct=0,bt=B.length;ct<bt;ct++){const Ft=B[ct],Ht=Ft.object,Xt=Ft.geometry,Vt=Ft.material,gt=Ft.group;if(Vt.side===Hn&&Ht.layers.test(j.layers)){const Ae=Vt.side;Vt.side=ln,Vt.needsUpdate=!0,Js(Ht,$,j,Xt,Vt,gt),Vt.side=Ae,Vt.needsUpdate=!0,Dt=!0}}Dt===!0&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I))}v.setRenderTarget(ht),v.setClearColor(Y,J),vt!==void 0&&(j.viewport=vt),v.toneMapping=U}function hi(b,B,$){const j=B.isScene===!0?B.overrideMaterial:null;for(let z=0,I=b.length;z<I;z++){const X=b[z],ht=X.object,U=X.geometry,vt=j===null?X.material:j,Dt=X.group;ht.layers.test($.layers)&&Js(ht,B,$,U,vt,Dt)}}function Js(b,B,$,j,z,I){b.onBeforeRender(v,B,$,j,z,I),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(v,B,$,j,b,I),z.transparent===!0&&z.side===Hn&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,v.renderBufferDirect($,B,j,z,b,I),z.side=Ri,z.needsUpdate=!0,v.renderBufferDirect($,B,j,z,b,I),z.side=Hn):v.renderBufferDirect($,B,j,z,b,I),b.onAfterRender(v,B,$,j,z,I)}function Ii(b,B,$){B.isScene!==!0&&(B=Bt);const j=Lt.get(b),z=p.state.lights,I=p.state.shadowsArray,X=z.state.version,ht=mt.getParameters(b,z.state,I,B,$),U=mt.getProgramCacheKey(ht);let vt=j.programs;j.environment=b.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(b.isMeshStandardMaterial?W:E).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,vt===void 0&&(b.addEventListener("dispose",kt),vt=new Map,j.programs=vt);let Dt=vt.get(U);if(Dt!==void 0){if(j.currentProgram===Dt&&j.lightsStateVersion===X)return Ni(b,ht),Dt}else ht.uniforms=mt.getUniforms(b),b.onBeforeCompile(ht,v),Dt=mt.acquireProgram(ht,U),vt.set(U,Dt),j.uniforms=ht.uniforms;const ct=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ct.clippingPlanes=ut.uniform),Ni(b,ht),j.needsLights=Lr(b),j.lightsStateVersion=X,j.needsLights&&(ct.ambientLightColor.value=z.state.ambient,ct.lightProbe.value=z.state.probe,ct.directionalLights.value=z.state.directional,ct.directionalLightShadows.value=z.state.directionalShadow,ct.spotLights.value=z.state.spot,ct.spotLightShadows.value=z.state.spotShadow,ct.rectAreaLights.value=z.state.rectArea,ct.ltc_1.value=z.state.rectAreaLTC1,ct.ltc_2.value=z.state.rectAreaLTC2,ct.pointLights.value=z.state.point,ct.pointLightShadows.value=z.state.pointShadow,ct.hemisphereLights.value=z.state.hemi,ct.directionalShadowMap.value=z.state.directionalShadowMap,ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ct.spotShadowMap.value=z.state.spotShadowMap,ct.spotLightMatrix.value=z.state.spotLightMatrix,ct.spotLightMap.value=z.state.spotLightMap,ct.pointShadowMap.value=z.state.pointShadowMap,ct.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Dt,j.uniformsList=null,Dt}function Qs(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=pa.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ni(b,B){const $=Lt.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function En(b,B,$,j,z){B.isScene!==!0&&(B=Bt),R.resetTextureUnits();const I=B.fog,X=j.isMeshStandardMaterial?B.environment:null,ht=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ks,U=(j.isMeshStandardMaterial?W:E).get(j.envMap||X),vt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Dt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ct=!!$.morphAttributes.position,bt=!!$.morphAttributes.normal,Ft=!!$.morphAttributes.color;let Ht=Ti;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const Xt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Vt=Xt!==void 0?Xt.length:0,gt=Lt.get(j),Ae=p.state.lights;if(K===!0&&(ot===!0||b!==S)){const ge=b===S&&j.id===M;ut.setState(j,b,ge)}let qt=!1;j.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Ae.state.version||gt.outputColorSpace!==ht||z.isBatchedMesh&&gt.batching===!1||!z.isBatchedMesh&&gt.batching===!0||z.isBatchedMesh&&gt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&gt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&gt.instancing===!1||!z.isInstancedMesh&&gt.instancing===!0||z.isSkinnedMesh&&gt.skinning===!1||!z.isSkinnedMesh&&gt.skinning===!0||z.isInstancedMesh&&gt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&gt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&gt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&gt.instancingMorph===!1&&z.morphTexture!==null||gt.envMap!==U||j.fog===!0&&gt.fog!==I||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==ut.numPlanes||gt.numIntersection!==ut.numIntersection)||gt.vertexAlphas!==vt||gt.vertexTangents!==Dt||gt.morphTargets!==ct||gt.morphNormals!==bt||gt.morphColors!==Ft||gt.toneMapping!==Ht||gt.morphTargetsCount!==Vt)&&(qt=!0):(qt=!0,gt.__version=j.version);let ze=gt.currentProgram;qt===!0&&(ze=Ii(j,B,z));let qe=!1,de=!1,dn=!1;const Jt=ze.getUniforms(),_e=gt.uniforms;if(Nt.useProgram(ze.program)&&(qe=!0,de=!0,dn=!0),j.id!==M&&(M=j.id,de=!0),qe||S!==b){Nt.buffers.depth.getReversed()?(et.copy(b.projectionMatrix),Lp(et),Dp(et),Jt.setValue(O,"projectionMatrix",et)):Jt.setValue(O,"projectionMatrix",b.projectionMatrix),Jt.setValue(O,"viewMatrix",b.matrixWorldInverse);const Re=Jt.map.cameraPosition;Re!==void 0&&Re.setValue(O,Tt.setFromMatrixPosition(b.matrixWorld)),It.logarithmicDepthBuffer&&Jt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Jt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,de=!0,dn=!0)}if(z.isSkinnedMesh){Jt.setOptional(O,z,"bindMatrix"),Jt.setOptional(O,z,"bindMatrixInverse");const ge=z.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),Jt.setValue(O,"boneTexture",ge.boneTexture,R))}z.isBatchedMesh&&(Jt.setOptional(O,z,"batchingTexture"),Jt.setValue(O,"batchingTexture",z._matricesTexture,R),Jt.setOptional(O,z,"batchingIdTexture"),Jt.setValue(O,"batchingIdTexture",z._indirectTexture,R),Jt.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Jt.setValue(O,"batchingColorTexture",z._colorsTexture,R));const Ce=$.morphAttributes;if((Ce.position!==void 0||Ce.normal!==void 0||Ce.color!==void 0)&&Ot.update(z,$,ze),(de||gt.receiveShadow!==z.receiveShadow)&&(gt.receiveShadow=z.receiveShadow,Jt.setValue(O,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_e.envMap.value=U,_e.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(_e.envMapIntensity.value=B.environmentIntensity),de&&(Jt.setValue(O,"toneMappingExposure",v.toneMappingExposure),gt.needsLights&&cs(_e,dn),I&&j.fog===!0&&_t.refreshFogUniforms(_e,I),_t.refreshMaterialUniforms(_e,j,q,Q,p.state.transmissionRenderTarget[b.id]),pa.upload(O,Qs(gt),_e,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(pa.upload(O,Qs(gt),_e,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Jt.setValue(O,"center",z.center),Jt.setValue(O,"modelViewMatrix",z.modelViewMatrix),Jt.setValue(O,"normalMatrix",z.normalMatrix),Jt.setValue(O,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const ge=j.uniformsGroups;for(let Re=0,Ee=ge.length;Re<Ee;Re++){const Pn=ge[Re];k.update(Pn,ze),k.bind(Pn,ze)}}return ze}function cs(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Lr(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,$){Lt.get(b.texture).__webglTexture=B,Lt.get(b.depthTexture).__webglTexture=$;const j=Lt.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const $=Lt.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){C=b,w=B,T=$;let j=!0,z=null,I=!1,X=!1;if(b){const U=Lt.get(b);if(U.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(U.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(U.__hasExternalTextures)R.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ct=b.depthTexture;if(U.__boundDepthTexture!==ct){if(ct!==null&&Lt.has(ct)&&(b.width!==ct.image.width||b.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const vt=b.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(X=!0);const Dt=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[B])?z=Dt[B][$]:z=Dt[B],I=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?z=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[$]:z=Dt,L.copy(b.viewport),G.copy(b.scissor),F=b.scissorTest}else L.copy(P).multiplyScalar(q).floor(),G.copy(at).multiplyScalar(q).floor(),F=pt;if(Nt.bindFramebuffer(O.FRAMEBUFFER,z)&&j&&Nt.drawBuffers(b,z),Nt.viewport(L),Nt.scissor(G),Nt.setScissorTest(F),I){const U=Lt.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,U.__webglTexture,$)}else if(X){const U=Lt.get(b.texture),vt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,U.__webglTexture,$||0,vt)}M=-1},this.readRenderTargetPixels=function(b,B,$,j,z,I,X){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&X!==void 0&&(ht=ht[X]),ht){Nt.bindFramebuffer(O.FRAMEBUFFER,ht);try{const U=b.texture,vt=U.format,Dt=U.type;if(!It.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-j&&$>=0&&$<=b.height-z&&O.readPixels(B,$,j,z,Yt.convert(vt),Yt.convert(Dt),I)}finally{const U=C!==null?Lt.get(C).__webglFramebuffer:null;Nt.bindFramebuffer(O.FRAMEBUFFER,U)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,j,z,I,X){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&X!==void 0&&(ht=ht[X]),ht){const U=b.texture,vt=U.format,Dt=U.type;if(!It.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-j&&$>=0&&$<=b.height-z){Nt.bindFramebuffer(O.FRAMEBUFFER,ht);const ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,I.byteLength,O.STREAM_READ),O.readPixels(B,$,j,z,Yt.convert(vt),Yt.convert(Dt),0);const bt=C!==null?Lt.get(C).__webglFramebuffer:null;Nt.bindFramebuffer(O.FRAMEBUFFER,bt);const Ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Pp(O,Ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,I),O.deleteBuffer(ct),O.deleteSync(Ft),I}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,$=0){b.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const j=Math.pow(2,-$),z=Math.floor(b.image.width*j),I=Math.floor(b.image.height*j),X=B!==null?B.x:0,ht=B!==null?B.y:0;R.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,X,ht,z,I),Nt.unbindTexture()},this.copyTextureToTexture=function(b,B,$=null,j=null,z=0){b.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],B=arguments[2],z=arguments[3]||0,$=null);let I,X,ht,U,vt,Dt,ct,bt,Ft;const Ht=b.isCompressedTexture?b.mipmaps[z]:b.image;$!==null?(I=$.max.x-$.min.x,X=$.max.y-$.min.y,ht=$.isBox3?$.max.z-$.min.z:1,U=$.min.x,vt=$.min.y,Dt=$.isBox3?$.min.z:0):(I=Ht.width,X=Ht.height,ht=Ht.depth||1,U=0,vt=0,Dt=0),j!==null?(ct=j.x,bt=j.y,Ft=j.z):(ct=0,bt=0,Ft=0);const Xt=Yt.convert(B.format),Vt=Yt.convert(B.type);let gt;B.isData3DTexture?(R.setTexture3D(B,0),gt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),gt=O.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),gt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Ae=O.getParameter(O.UNPACK_ROW_LENGTH),qt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ze=O.getParameter(O.UNPACK_SKIP_PIXELS),qe=O.getParameter(O.UNPACK_SKIP_ROWS),de=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,U),O.pixelStorei(O.UNPACK_SKIP_ROWS,vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dt);const dn=b.isDataArrayTexture||b.isData3DTexture,Jt=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const _e=Lt.get(b),Ce=Lt.get(B),ge=Lt.get(_e.__renderTarget),Re=Lt.get(Ce.__renderTarget);Nt.bindFramebuffer(O.READ_FRAMEBUFFER,ge.__webglFramebuffer),Nt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ee=0;Ee<ht;Ee++)dn&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.get(b).__webglTexture,z,Dt+Ee),b.isDepthTexture?(Jt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.get(B).__webglTexture,z,Ft+Ee),O.blitFramebuffer(U,vt,I,X,ct,bt,I,X,O.DEPTH_BUFFER_BIT,O.NEAREST)):Jt?O.copyTexSubImage3D(gt,z,ct,bt,Ft+Ee,U,vt,I,X):O.copyTexSubImage2D(gt,z,ct,bt,Ft+Ee,U,vt,I,X);Nt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Jt?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(gt,z,ct,bt,Ft,I,X,ht,Xt,Vt,Ht.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(gt,z,ct,bt,Ft,I,X,ht,Xt,Ht.data):O.texSubImage3D(gt,z,ct,bt,Ft,I,X,ht,Xt,Vt,Ht):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,ct,bt,I,X,Xt,Vt,Ht.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,ct,bt,Ht.width,Ht.height,Xt,Ht.data):O.texSubImage2D(O.TEXTURE_2D,z,ct,bt,I,X,Xt,Vt,Ht);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ae),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,qt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,de),z===0&&B.generateMipmaps&&O.generateMipmap(gt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,$=null,j=null,z=0){return b.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,b=arguments[2],B=arguments[3],z=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,$,j,z)},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Nt.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,Nt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class rc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new rc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gv extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fd extends os{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wh=new ve,Al=new La,ea=new Pa,na=new D;class Hv extends Ge{constructor(t=new Qe,e=new fd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;wh.copy(i).invert(),Al.copy(t.ray).applyMatrix4(wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);na.fromBufferAttribute(d,m),Ah(na,m,l,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)na.fromBufferAttribute(d,g),Ah(na,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ah(s,t,e,n,i,r,a){const o=Al.distanceSqToPoint(s);if(o<e){const l=new D;Al.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Rt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,l=new ve;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(We(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class pd extends ci{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Rt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wv extends pd{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ac(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ia=new D,vo=new ac,xo=new ac,yo=new ac;class md extends ci{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(ia.subVectors(i[0],i[1]).add(i[0]),c=ia);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ia.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),xo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),yo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),xo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),yo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(vo.calc(l),xo.calc(l),yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ch(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Xv(s,t){const e=1-s;return e*e*t}function qv(s,t){return 2*(1-s)*s*t}function Yv(s,t){return s*s*t}function pr(s,t,e,n){return Xv(s,t)+qv(s,e)+Yv(s,n)}function Kv(s,t){const e=1-s;return e*e*e*t}function jv(s,t){const e=1-s;return 3*e*e*s*t}function $v(s,t){return 3*(1-s)*s*s*t}function Zv(s,t){return s*s*s*t}function mr(s,t,e,n,i){return Kv(s,t)+jv(s,e)+$v(s,n)+Zv(s,i)}class Jv extends ci{constructor(t=new Rt,e=new Rt,n=new Rt,i=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Rt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,i.x,r.x,a.x,o.x),mr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qv extends ci{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,i.x,r.x,a.x,o.x),mr(t,i.y,r.y,a.y,o.y),mr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tx extends ci{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ex extends ci{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nx extends ci{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(pr(t,i.x,r.x,a.x),pr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends ci{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(pr(t,i.x,r.x,a.x),pr(t,i.y,r.y,a.y),pr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ix extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Ch(o,l.x,c.x,h.x,d.x),Ch(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Rt().fromArray(i))}return this}}var sx=Object.freeze({__proto__:null,ArcCurve:Wv,CatmullRomCurve3:md,CubicBezierCurve:Jv,CubicBezierCurve3:Qv,EllipseCurve:pd,LineCurve:tx,LineCurve3:ex,QuadraticBezierCurve:nx,QuadraticBezierCurve3:_d,SplineCurve:ix});class ae extends Qe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function x(){const v=new D,A=new D;let w=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const M=[],S=C/r,L=S*(e-t)+t;for(let G=0;G<=i;G++){const F=G/i,Y=F*l+o,J=Math.sin(Y),H=Math.cos(Y);A.x=L*J,A.y=-S*n+m,A.z=L*H,d.push(A.x,A.y,A.z),v.set(J,T,H).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-S),M.push(g++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){const S=_[M][C],L=_[M+1][C],G=_[M+1][C+1],F=_[M][C+1];(t>0||M!==0)&&(h.push(S,L,F),w+=3),(e>0||M!==r-1)&&(h.push(L,G,F),w+=3)}c.addGroup(p,w,0),p+=w}function y(v){const A=g,w=new Rt,T=new D;let C=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),g++;const L=g;for(let G=0;G<=i;G++){const Y=G/i*l+o,J=Math.cos(Y),H=Math.sin(Y);T.x=M*H,T.y=m*S,T.z=M*J,d.push(T.x,T.y,T.z),u.push(0,S,0),w.x=J*.5+.5,w.y=H*.5*S+.5,f.push(w.x,w.y),g++}for(let G=0;G<i;G++){const F=A+G,Y=L+G;v===!0?h.push(Y,Y+1,F):h.push(Y+1,Y,F),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class li extends ae{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new li(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ia extends Qe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new D,v=new D,A=new D;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],v),f(e[w+2],A),l(y,v,A,x)}function l(x,y,v,A){const w=A+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const M=x.clone().lerp(v,C/w),S=y.clone().lerp(v,C/w),L=w-C;for(let G=0;G<=L;G++)G===0&&C===w?T[C][G]=M:T[C][G]=M.clone().lerp(S,G/L)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){const S=Math.floor(M/2);M%2===0?(u(T[C][S+1]),u(T[C+1][S]),u(T[C][S])):(u(T[C][S+1]),u(T[C+1][S+1]),u(T[C+1][S]))}}function c(x){const y=new D;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new D;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;a.push(v,1-A)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],A=a[x+4],w=Math.max(y,v,A),T=Math.min(y,v,A);w>.9&&T<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new D,y=new D,v=new D,A=new D,w=new Rt,T=new Rt,C=new Rt;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),A.copy(x).add(y).add(v).divideScalar(3);const L=m(A);_(w,S+0,x,L),_(T,S+2,y,L),_(C,S+4,v,L)}}function _(x,y,v,A){A<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.vertices,t.indices,t.radius,t.details)}}class ss extends Ia{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ss(t.radius,t.detail)}}class oc extends Ia{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oc(t.radius,t.detail)}}class ba extends Qe{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new D,g=new Rt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,A=x+n+2,w=x+1;o.push(y,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Oe extends Qe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(i+w*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(i+w*r)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],A=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(y,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tr extends Qe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lc extends Qe{constructor(t=new _d(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new Rt;let h=new D;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),x(),p()}function m(y){h=t.getPointAt(y/e,h);const v=a.normals[y],A=a.binormals[y];for(let w=0;w<=i;w++){const T=w/i*Math.PI*2,C=Math.sin(T),M=-Math.cos(T);l.x=M*v.x+C*A.x,l.y=M*v.y+C*A.y,l.z=M*v.z+C*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const A=(i+1)*(y-1)+(v-1),w=(i+1)*y+(v-1),T=(i+1)*y+v,C=(i+1)*(y-1)+v;g.push(A,w,C),g.push(w,T,C)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lc(new sx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ne extends os{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class re extends os{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class cc extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rx extends cc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mo=new ve,Rh=new D,Ph=new D;class gd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ic,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lh=new ve,ar=new D,So=new D;class ax extends gd{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(ar),So.copy(n.position),So.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(So),n.updateMatrixWorld(),i.makeTranslation(-ar.x,-ar.y,-ar.z),Lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh)}}class Dh extends cc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ax}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ox extends gd{constructor(){super(new od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends cc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new ox}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ih=new ve;class cx{constructor(t,e,n=0,i=1/0){this.ray=new La(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(t,e=!0,n=[]){return Cl(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Cl(t[i],this,n,e);return n.sort(Nh),n}}function Nh(s,t){return s.distance-t.distance}function Cl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Cl(r[a],t,e,!0)}}class Uh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(We(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hx extends as{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);const Oh={type:"change"},hc={type:"start"},vd={type:"end"},sa=new La,Fh=new gi,ux=Math.cos(70*Cp.DEG2RAD),Ue=new D,en=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eo=1e-6;class dx extends hx{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new is,this._lastTargetPosition=new D,this._quat=new is().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uh,this._sphericalDelta=new Uh,this._scale=1,this._panOffset=new D,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new D,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=px.bind(this),this._onPointerDown=fx.bind(this),this._onPointerUp=mx.bind(this),this._onContextMenu=Sx.bind(this),this._onMouseWheel=vx.bind(this),this._onKeyDown=xx.bind(this),this._onTouchStart=yx.bind(this),this._onTouchMove=Mx.bind(this),this._onMouseDown=_x.bind(this),this._onMouseMove=gx.bind(this),this._interceptControlDown=Ex.bind(this),this._interceptControlUp=bx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oh),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),i<-Math.PI?i+=en:i>Math.PI&&(i-=en),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ue.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sa.origin.copy(this.object.position),sa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sa.direction))<ux?this.object.lookAt(this.target):(Fh.setFromNormalAndCoplanarPoint(this.object.up,this.target),sa.intersectPlane(Fh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eo||this._lastTargetPosition.distanceToSquared(this.target)>Eo?(this.dispatchEvent(Oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ue.copy(i).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function px(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function mx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vd),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _x(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=he.DOLLY;break;case Is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=he.ROTATE}break;case Is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(hc)}function gx(s){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function vx(s){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(s.preventDefault(),this.dispatchEvent(hc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(vd))}function xx(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function yx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=he.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=he.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(hc)}function Mx(s){switch(this._trackPointer(s),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=he.NONE}}function Sx(s){this.enabled!==!1&&s.preventDefault()}function Ex(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const tt={grass:new re({color:8843180}),grassDark:new re({color:4906624}),rock:new re({color:9595976}),rockDark:new re({color:7424813}),sand:new re({color:16707722}),water:new Ne({color:3718648,roughness:.15,metalness:.3,transparent:!0,opacity:.88}),road:new re({color:3359061}),roadLine:new Cs({color:16436245}),crosswalk:new Cs({color:16777215}),dirt:new re({color:10576391}),concrete:new re({color:14870768}),concreteDark:new re({color:9741240}),white:new re({color:16317180}),cyan:new re({color:440020}),yellow:new re({color:16498468}),red:new re({color:15680580}),orange:new re({color:16347926}),blue:new re({color:2450411}),darkBlue:new re({color:1981066}),darkGray:new re({color:1976635}),metal:new Ne({color:9741240,roughness:.35,metalness:.7}),metalDark:new Ne({color:4674921,roughness:.4,metalness:.8}),gold:new Ne({color:16096779,roughness:.2,metalness:.9}),copper:new Ne({color:14251782,roughness:.3,metalness:.8}),glass:new Ne({color:10875900,roughness:.05,metalness:.9,transparent:!0,opacity:.7}),solarPanel:new Ne({color:1981066,roughness:.1,metalness:.85}),wood:new re({color:7877903}),leavesGreen:new re({color:1409085}),leavesLight:new re({color:2278750}),leavesPink:new re({color:16020150}),glowCyan:new Ne({color:62463,emissive:62463,emissiveIntensity:2.5,roughness:.1}),glowGreen:new Ne({color:1096065,emissive:1096065,emissiveIntensity:2.5,roughness:.1}),glowRed:new Ne({color:16711748,emissive:16711748,emissiveIntensity:3,roughness:.1}),glowAmber:new Ne({color:16096779,emissive:16096779,emissiveIntensity:2.5,roughness:.1}),glowWhite:new Ne({color:16777215,emissive:16777215,emissiveIntensity:2.2,roughness:.1}),porcelain:new Ne({color:7877903,roughness:.1,metalness:.2}),hazardYellow:new Cs({color:16436245}),shield:new Ne({color:3718648,transparent:!0,opacity:.45,roughness:.1,metalness:.9,side:Hn}),dogFur:new re({color:14653493}),dogFurLight:new re({color:16707722}),dogEarFur:new re({color:12877349}),dogNose:new re({color:1976635}),dogTongue:new re({color:16007006}),dogEye:new Ne({color:988970,roughness:.1,metalness:.9}),dogEyePupil:new Cs({color:16777215}),dogCollar:new re({color:440020}),dogCollarTag:new Ne({color:16096779,roughness:.2,metalness:.9}),dogVest:new re({color:16347926}),dogVestStripe:new Ne({color:15857145,roughness:.1,metalness:.7}),helmetWhite:new Ne({color:16777215,roughness:.2,metalness:.1}),helmetBadge:new re({color:165063}),platformCyan:new Ne({color:988970,roughness:.3,metalness:.8})};function Tx(){const s=new xe,t=new ae(26,27.5,3,48),e=new it(t,tt.grass);e.position.y=0,e.receiveShadow=!0,s.add(e);const n=new ae(27.4,28.5,.6,48),i=new it(n,tt.sand);i.position.y=1.25,i.receiveShadow=!0,s.add(i);const r=new ae(27.5,23,4,32),a=new it(r,tt.rock);a.position.y=-3.5,s.add(a);const o=new li(23,8.5,32),l=new it(o,tt.rockDark);l.position.y=-9.5,l.rotation.x=Math.PI,s.add(l);const c=new ae(44,44,1.4,48),h=new it(c,tt.water);h.position.y=-.7,h.receiveShadow=!0,s.add(h);const d=new it(new ss(5.5,2),tt.grassDark);d.position.set(-14,.5,-12),d.scale.set(1.4,.7,1.2),d.receiveShadow=!0,s.add(d);const u=new it(new ss(4.5,2),tt.grassDark);u.position.set(-16,.3,10),u.scale.set(1.2,.6,1.2),u.receiveShadow=!0,s.add(u);const f=tt.road,g=1.52,_=new ba(13.5,16.5,48),m=new it(_,f);m.rotation.x=-Math.PI/2,m.position.y=g,m.receiveShadow=!0,s.add(m);const p=new ba(14.9,15.1,48),x=new it(p,tt.roadLine);x.rotation.x=-Math.PI/2,x.position.y=g+.01,s.add(x);const y=new it(new ts(3,30),f);y.rotation.x=-Math.PI/2,y.position.y=g,y.receiveShadow=!0,s.add(y);const v=new it(new ts(30,3),f);v.rotation.x=-Math.PI/2,v.position.y=g,v.receiveShadow=!0,s.add(v);for(let A=-1;A<=1;A++){const w=new it(new ts(.3,2.6),tt.crosswalk);w.rotation.x=-Math.PI/2,w.position.set(7.5+A*.6,g+.02,0),s.add(w)}return s}function wx(s,t){const e=new xe;e.position.set(s,1.5,t),e.name="bus32";const n=new it(new Wt(8.5,.4,8.5),tt.concreteDark);n.position.y=.2,n.receiveShadow=!0,e.add(n);for(let p=-1;p<=1;p+=2){const x=p*2.2,y=-1.5,v=new it(new Wt(2.2,2.4,2),tt.concrete);v.position.set(x,1.4,y),v.castShadow=!0,e.add(v);for(let T=-3;T<=3;T++){const C=new it(new Wt(.08,1.8,2.2),tt.metalDark);C.position.set(x+T*.32,1.3,y),e.add(C)}const A=new it(new ae(.35,.35,1.8,16),tt.metal);A.rotation.z=Math.PI/2,A.position.set(x,2.8,y+.3),e.add(A);const w=[tt.red,tt.yellow,tt.blue];for(let T=0;T<3;T++){const C=x+(T-1)*.65,M=y-.5;for(let L=0;L<4;L++){const G=new it(new ae(.18-L*.02,.18-L*.02,.15,10),w[T]);G.position.set(C,2.6+L*.18,M),e.add(G)}const S=new it(new ae(.04,.04,.3,8),tt.copper);S.position.set(C,3.4,M),e.add(S)}}const i=new xe;for(let p=-1;p<=1;p+=2){const x=new it(new ae(.08,.12,4.2,8),tt.metal);x.position.set(p*3.4,2.1,0),i.add(x)}const r=new it(new Wt(7,.25,.25),tt.metal);r.position.set(0,4.2,0),i.add(r),e.add(i);const a=new it(new Wt(2.2,1.4,1.6),tt.darkGray);a.position.set(0,.9,2.2),e.add(a);const o=new xe;o.position.set(0,1.6,2.2);const l=new it(new Wt(.15,1.2,.15),tt.copper);l.position.y=.6,o.add(l);const c=new it(new Oe(.18,12,12),tt.gold);c.position.y=1.2,o.add(c),e.add(o);const h=new it(new Oe(.22,16,16),tt.glowGreen);h.position.set(0,1.9,3.05),e.add(h);const d=new it(new Wt(2.2,1.8,2.2),tt.white);d.position.set(-2.8,1.1,2.2),d.castShadow=!0,e.add(d);const u=new it(new Wt(.7,.4,.7),tt.concreteDark);u.position.set(-2.8,2.2,2.2),e.add(u);const f=new it(new ae(.35,.1,.15,12),tt.metal);f.rotation.x=.6,f.position.set(-2.4,2.5,2.2),e.add(f);const g=new it(new ae(.12,.16,.28,12),tt.glowGreen);g.position.set(-2.8,2.3,2.2),e.add(g);for(let p=0;p<4;p++){const x=p*(Math.PI/2),y=new it(new Wt(8,.8,.05),tt.metal);y.position.set(Math.cos(x)*4.1,.8,Math.sin(x)*4.1),y.rotation.y=x+Math.PI/2,e.add(y)}const _=new it(new Wt(1.4,.45,.08),tt.hazardYellow);_.position.set(0,.9,4.14),e.add(_);const m=new it(new Wt(1.5,.55,.04),tt.darkGray);return m.position.set(0,.9,4.12),e.add(m),e.userData={breakerArm:o,statusLed:h,statusStrobe:g,nodeId:"bus32"},e}function Ax(s,t){const e=new xe;e.position.set(s,1.5,t),e.name="gen30";const n=new it(new Wt(8,.4,8),tt.concreteDark);n.position.y=.2,e.add(n);const i=new it(new Wt(5,2.8,3.2),tt.white);i.position.set(0,1.6,-1.8),i.castShadow=!0,e.add(i);for(let a=-1;a<=1;a++){const o=new it(new li(.7,.8,4),tt.cyan);o.position.set(a*1.5,3.4,-1.8),o.rotation.y=Math.PI/4,e.add(o)}const r=[];for(let a=-1;a<=1;a+=2){const o=a*2.2,l=1.8,c=new ae(1.2,1.9,4.5,24),h=new it(c,tt.concrete);h.position.set(o,2.4,l),h.castShadow=!0,e.add(h);const d=new it(new Tr(1.22,.1,8,24),tt.concreteDark);d.rotation.x=Math.PI/2,d.position.set(o,4.65,l),e.add(d);for(let u=0;u<2;u++){const f=new re({color:16777215,transparent:!0,opacity:.85}),g=new it(new ss(.65-u*.15),f);g.position.set(o,5.2+u*.8,l),e.add(g),r.push(g)}}for(let a=-1;a<=1;a+=2){const o=new it(new ae(.18,.22,4,12),tt.metal);o.position.set(a*1.8,3.5,-3.2),e.add(o)}return e.userData={puffs:r,nodeId:"gen30"},e}function Cx(s,t){const e=new xe;e.position.set(s,1.5,t),e.name="renewables";const n=kh(0,0);e.add(n);const i=kh(-4,-3);e.add(i);for(let a=0;a<2;a++)for(let o=0;o<3;o++){const l=new it(new Wt(1.6,.08,1),tt.solarPanel);l.position.set(2.5+(o-1)*1.8,.7,(a-.5)*1.6),l.rotation.x=.35,l.castShadow=!0,e.add(l);const c=new it(new ae(.05,.05,.6,6),tt.metal);c.position.set(2.5+(o-1)*1.8,.3,(a-.5)*1.6),e.add(c)}const r=new it(new Wt(3,1.5,1.6),tt.white);r.position.set(2.5,.95,-2.8),r.castShadow=!0,e.add(r);for(let a=0;a<4;a++){const o=new it(new Wt(.3,.12,.05),tt.glowGreen);o.position.set(1.8+a*.45,1.3,-2),e.add(o)}return e.userData={turbines:[n.userData.rotorHub,i.userData.rotorHub],nodeId:"renewables"},e}function kh(s,t){const e=new xe;e.position.set(s,0,t);const n=new it(new ae(.2,.42,7.5,16),tt.white);n.position.y=3.75,n.castShadow=!0,e.add(n);const i=new it(new Wt(.9,.7,1.5),tt.cyan);i.position.set(0,7.5,0),e.add(i);const r=new it(new Oe(.12,8,8),tt.glowRed);r.position.set(0,8,-.4),e.add(r);const a=new xe;a.position.set(0,7.5,.85);const o=new it(new li(.35,.6,16),tt.yellow);o.rotation.x=Math.PI/2,a.add(o);for(let l=0;l<3;l++){const c=l*Math.PI*2/3,h=new it(new Wt(.25,3.2,.06),tt.white);h.position.set(Math.sin(c)*1.7,Math.cos(c)*1.7,0),h.rotation.z=-c,a.add(h);const d=new it(new Wt(.26,.6,.07),tt.red);d.position.set(Math.sin(c)*3,Math.cos(c)*3,0),d.rotation.z=-c,a.add(d)}return e.add(a),e.userData={rotorHub:a},e}function Rx(s,t){const e=new xe;e.position.set(s,1.5,t),e.name="cityCenter";const n=new xe;n.position.set(-2,0,-1.8);const i=new it(new Wt(3.2,3.8,2.6),tt.white);i.position.y=1.9,i.castShadow=!0,n.add(i);const r=new it(new ae(1.1,1.1,.1,16),tt.darkGray);r.position.set(0,3.85,0),n.add(r);const a=new it(new Wt(.8,.25,.05),tt.red);a.position.set(0,3.2,1.35),n.add(a);const o=new it(new Wt(.25,.8,.05),tt.red);o.position.set(0,3.2,1.35),n.add(o),e.add(n);const l=new xe;l.position.set(2.2,0,-1.8);const c=new it(new Wt(3,2.4,2.6),tt.darkGray);c.position.y=1.2,c.castShadow=!0,l.add(c);for(let u=-1;u<=1;u++){const f=new it(new li(.6,.7,4),tt.orange);f.position.set(u*.9,2.6,0),f.rotation.y=Math.PI/4,l.add(f)}const h=new it(new ae(.2,.25,3.4,12),tt.concreteDark);return h.position.set(1,2.6,1),l.add(h),e.add(l),[{x:-2.2,z:2,w:2,h:2.4,d:2,c:tt.yellow,r:tt.red},{x:.2,z:2.2,w:2.2,h:3.2,d:2,c:tt.blue,r:tt.darkBlue},{x:2.5,z:1.8,w:2,h:2,d:1.8,c:tt.white,r:tt.orange}].forEach(u=>{const f=new it(new Wt(u.w,u.h,u.d),u.c);f.position.set(u.x,u.h/2,u.z),f.castShadow=!0,e.add(f);const g=new it(new li(u.w*.75,1.1,4),u.r);g.position.set(u.x,u.h+.55,u.z),g.rotation.y=Math.PI/4,e.add(g)}),e.userData={nodeId:"cityCenter"},e}function bo(s,t,e=5.2){const n=new xe;n.position.set(s,1.5,t);const i=new it(new ae(.25,1.2,e,4),tt.metal);i.position.y=e/2,i.rotation.y=Math.PI/4,i.castShadow=!0,n.add(i);const r=new it(new Wt(3.6,.22,.22),tt.metal);r.position.y=e*.82,n.add(r);const a=new it(new Wt(2.4,.2,.2),tt.metal);a.position.y=e*.94,n.add(a);for(let o=-1;o<=1;o++){const l=new it(new ae(.1,.1,.5,8),tt.darkGray);l.position.set(o*1.6,e*.72,0),n.add(l)}return n}function Px(){const s=new xe;s.name="pypyMascot";const t=new xe,e=new it(new ae(1.4,1.5,.22,28),tt.platformCyan);e.position.y=.11,e.receiveShadow=!0,t.add(e);const n=new it(new Tr(1.45,.04,8,32),tt.glowCyan);n.rotation.x=Math.PI/2,n.position.y=.18,t.add(n);for(let V=0;V<3;V++){const K=V*Math.PI*2/3,ot=new it(new li(.18,.4,12),tt.glowCyan);ot.position.set(Math.cos(K)*.9,-.15,Math.sin(K)*.9),ot.rotation.x=Math.PI,t.add(ot)}s.add(t);const i=new xe;i.position.set(0,.85,0);const r=new it(new Wt(.95,.85,1.35),tt.dogFur);r.castShadow=!0,i.add(r);const a=new it(new Wt(.65,.6,.2),tt.dogFurLight);a.position.set(0,-.05,.62),i.add(a);const o=new it(new Wt(1.02,.9,.85),tt.dogVest);o.position.set(0,.02,-.05),i.add(o);const l=new it(new Wt(1.04,.14,.87),tt.dogVestStripe);l.position.set(0,-.15,-.05),i.add(l);const c=new it(new Wt(.12,.92,.87),tt.dogVestStripe);c.position.set(-.35,.02,-.05),i.add(c);const h=new it(new Wt(.12,.92,.87),tt.dogVestStripe);h.position.set(.35,.02,-.05),i.add(h);const d=new it(new Wt(.24,.14,.04),tt.darkGray);d.position.set(.35,.22,.4),i.add(d);const u=new it(new ae(.48,.48,.12,16),tt.dogCollar);u.position.set(0,.35,.45),u.rotation.x=Math.PI/6,i.add(u);const f=new it(new ae(.1,.1,.04,6),tt.dogCollarTag);f.position.set(0,.2,.66),f.rotation.x=Math.PI/2,i.add(f),[{x:-.38,z:.42},{x:.38,z:.42},{x:-.38,z:-.42},{x:.38,z:-.42}].forEach(V=>{const K=new it(new ae(.16,.18,.55,12),tt.dogFur);K.position.set(V.x,-.42,V.z),K.castShadow=!0,i.add(K);const ot=new it(new Oe(.2,12,12),tt.dogFurLight);ot.position.set(V.x,-.65,V.z+.05),ot.scale.set(1,.6,1.2),i.add(ot)});const _=new xe;_.position.set(0,.25,-.65);const m=new it(new ae(.11,.14,.55,10),tt.dogFur);m.position.set(0,.25,-.15),m.rotation.x=-Math.PI/3.5,_.add(m);const p=new it(new Oe(.18,12,12),tt.dogFurLight);p.position.set(0,.5,-.3),_.add(p),i.add(_),s.add(i);const x=new xe;x.position.set(0,1.7,.45);const y=new it(new Oe(.68,20,18),tt.dogFur);y.castShadow=!0,x.add(y);const v=new it(new Wt(.52,.38,.45),tt.dogFurLight);v.position.set(0,-.12,.52),x.add(v);const A=new it(new Oe(.12,12,12),tt.dogNose);A.position.set(0,-.02,.74),x.add(A);const w=new it(new Wt(.18,.05,.22),tt.dogTongue);w.position.set(0,-.25,.62),w.rotation.x=.2,x.add(w);const T=new it(new Oe(.14,16,16),tt.dogEye);T.position.set(-.25,.14,.55),x.add(T);const C=new it(new Oe(.14,16,16),tt.dogEye);C.position.set(.25,.14,.55),x.add(C);const M=new it(new Oe(.045,8,8),tt.dogEyePupil);M.position.set(-.21,.18,.66),x.add(M);const S=new it(new Oe(.045,8,8),tt.dogEyePupil);S.position.set(.29,.18,.66),x.add(S);const L=new it(new Wt(.18,.62,.38),tt.dogEarFur);L.position.set(-.64,.02,.05),L.rotation.z=.25,L.rotation.x=.1,x.add(L);const G=new it(new Wt(.18,.62,.38),tt.dogEarFur);G.position.set(.64,.02,.05),G.rotation.z=-.25,G.rotation.x=.1,x.add(G);const F=new xe;F.position.set(0,.42,.02),F.rotation.x=-.05;const Y=new it(new Oe(.68,24,16,0,Math.PI*2,0,Math.PI*.55),tt.helmetWhite);Y.castShadow=!0,F.add(Y);const J=new it(new ae(.82,.84,.08,28),tt.helmetWhite);J.position.y=.02,F.add(J);const H=new it(new ae(.45,.55,.06,16,1,!1,0,Math.PI),tt.helmetWhite);H.position.set(0,.02,.5),H.rotation.x=.1,F.add(H);const Q=new it(new Wt(.14,.22,1.15),tt.helmetWhite);Q.position.set(0,.52,0),F.add(Q);const q=new it(new ae(.18,.18,.04,16),tt.helmetBadge);q.position.set(0,.32,.64),q.rotation.x=Math.PI/2.8,F.add(q);const dt=new it(new Wt(.2,.06,.02),tt.white);dt.position.set(0,.33,.66),dt.rotation.x=Math.PI/2.8,F.add(dt);const N=new it(new Wt(.06,.2,.02),tt.white);N.position.set(0,.33,.66),N.rotation.x=Math.PI/2.8,F.add(N);const P=new it(new Tr(.66,.03,6,20,Math.PI),tt.darkGray);P.position.set(0,-.3,.12),P.rotation.y=Math.PI,F.add(P),x.add(F),s.add(x);const at=new oc(2.6,2),pt=new it(at,tt.shield);return pt.position.y=1.4,pt.scale.set(.001,.001,.001),s.add(pt),s.userData={head:x,tail:_,ears:[L,G],eyes:[T,C],shield:pt,antennaBall:{material:tt.gold},nodeId:"aiHub"},s}const Lx=Px;function Dx(s,t,e,n=1){const i=new xe;i.position.set(s,t,e),i.scale.set(n,n,n);const r=new re({color:16777215,transparent:!0,opacity:.92});return[{x:0,y:0,z:0,r:1.2},{x:-1,y:-.2,z:.2,r:.85},{x:1.1,y:-.1,z:-.1,r:.95},{x:.4,y:.5,z:0,r:.9},{x:-.5,y:.4,z:-.2,r:.8}].forEach(o=>{const l=new it(new ss(o.r,1),r);l.position.set(o.x,o.y,o.z),i.add(l)}),i}function Ix(s=tt.red){const t=new xe,e=new it(new Wt(1.4,.5,.75),s);e.position.y=.45,e.castShadow=!0,t.add(e);const n=new it(new Wt(.8,.4,.65),tt.glass);n.position.set(-.1,.8,0),t.add(n);for(let a=-.45;a<=.45;a+=.9)for(let o=-.4;o<=.4;o+=.8){const l=new it(new ae(.2,.2,.12,10),tt.darkGray);l.rotation.x=Math.PI/2,l.position.set(a,.2,o),t.add(l)}const i=new it(new Oe(.08,8,8),tt.glowWhite);i.position.set(.7,.45,.25),t.add(i);const r=new it(new Oe(.08,8,8),tt.glowWhite);return r.position.set(.7,.45,-.25),t.add(r),t}function Nx(s,t,e){const n=new xe;n.position.set(s,t,e),n.name="cyberBug";const i=new it(new ss(.5,1),tt.red);n.add(i);const r=new it(new Oe(.1,8,8),tt.glowRed);r.position.set(-.18,.15,.42),n.add(r);const a=new it(new Oe(.1,8,8),tt.glowRed);a.position.set(.18,.15,.42),n.add(a);for(let o=0;o<4;o++){const l=o*Math.PI/2,c=new it(new li(.08,.4,6),tt.darkGray);c.position.set(Math.cos(l)*.45,-.25,Math.sin(l)*.45),c.rotation.z=Math.cos(l)*.6,n.add(c)}return n}function Ux(s){const t=new md(s),e=new lc(t,40,.05,8,!1),n=new it(e,tt.darkGray),i=[],r=6;for(let a=0;a<r;a++){const o=new it(new Oe(.25,12,12),tt.glowCyan);i.push({mesh:o,progress:a/r})}return{lineMesh:n,pulses:i,curve:t}}class Ox{constructor(t){this.container=t,this.isNight=!1,this.interactiveObjects=[],this.powerLines=[],this.cyberBugs=[],this.clouds=[],this.cars=[],this.init(),this.setupLighting(),this.buildWorld(),this.setupInteractions(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}init(){this.scene=new Gv,this.scene.background=new Qt(12576507),this.scene.fog=new rc(12576507,.01);const t=window.innerWidth/window.innerHeight;this.camera=new _n(45,t,.1,1e3),this.camera.position.set(30,26,32),this.renderer=new Vv({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ou,this.renderer.toneMapping=ku,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement),this.controls=new dx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2.12,this.controls.minDistance=8,this.controls.maxDistance=85,this.controls.target.set(0,2,0),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}setupLighting(){this.hemiLight=new rx(16777215,12317430,.75),this.scene.add(this.hemiLight),this.sunLight=new lx(16775920,1.25),this.sunLight.position.set(28,42,22),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=110,this.sunLight.shadow.camera.left=-32,this.sunLight.shadow.camera.right=32,this.sunLight.shadow.camera.top=32,this.sunLight.shadow.camera.bottom=-32,this.sunLight.shadow.bias=-4e-4,this.scene.add(this.sunLight),this.cyberLight1=new Dh(440020,0,35),this.cyberLight1.position.set(-10,10,-10),this.scene.add(this.cyberLight1),this.cyberLight2=new Dh(11032055,0,35),this.cyberLight2.position.set(10,10,10),this.scene.add(this.cyberLight2)}toggleTheme(){return this.isNight=!this.isNight,this.isNight?(document.body.classList.add("night-mode"),this.scene.background.set(329745),this.scene.fog.color.set(329745),this.hemiLight.intensity=.25,this.sunLight.intensity=.3,this.cyberLight1.intensity=3,this.cyberLight2.intensity=3):(document.body.classList.remove("night-mode"),this.scene.background.set(12576507),this.scene.fog.color.set(12576507),this.hemiLight.intensity=.75,this.sunLight.intensity=1.25,this.cyberLight1.intensity=0,this.cyberLight2.intensity=0),this.isNight}buildWorld(){const t=Tx();this.scene.add(t),this.genStation=Ax(-11,-10),this.scene.add(this.genStation),this.interactiveObjects.push(this.genStation),this.substation=wx(0,0),this.scene.add(this.substation),this.interactiveObjects.push(this.substation);const e=bo(-5,-5,5.2),n=bo(6,6,5.2),i=bo(-6,6,5.2);this.scene.add(e,n,i),this.renewables=Cx(-12,10),this.scene.add(this.renewables),this.interactiveObjects.push(this.renewables),this.city=Rx(11,-7),this.scene.add(this.city),this.interactiveObjects.push(this.city),this.pypyRobot=Lx(),this.pypyRobot.position.set(3,4.5,3),this.scene.add(this.pypyRobot),this.interactiveObjects.push(this.pypyRobot),[{x:-16,y:16,z:-10,s:1.2,speed:.008},{x:12,y:18,z:14,s:1.4,speed:.006},{x:-6,y:15,z:18,s:1,speed:.009},{x:18,y:17,z:-12,s:1.3,speed:.007}].forEach(f=>{const g=Dx(f.x,f.y,f.z,f.s);g.userData={speed:f.speed,initialX:f.x},this.scene.add(g),this.clouds.push(g)});const a=[tt.red,tt.blue,tt.yellow];for(let f=0;f<3;f++){const g=Ix(a[f]);g.userData={angle:f*Math.PI*2/3,speed:.008+f*.003},this.scene.add(g),this.cars.push(g)}const o=[new D(-11,4.2,-10),new D(-5,5.6,-5),new D(0,4.2,0)],l=[new D(0,4.2,0),new D(6,5.6,6),new D(11,4.8,-7)],c=[new D(-12,6,10),new D(-6,5.6,6),new D(0,4.2,0)];[o,l,c].forEach(f=>{const g=Ux(f);this.scene.add(g.lineMesh),g.pulses.forEach(_=>this.scene.add(_.mesh)),this.powerLines.push(g)});const h=36,d=new Qe,u=new Float32Array(h*3);this.sparkVelocities=[];for(let f=0;f<h;f++)u[f*3]=(Math.random()-.5)*4,u[f*3+1]=2+Math.random()*2.2,u[f*3+2]=(Math.random()-.5)*4,this.sparkVelocities.push({vx:(Math.random()-.5)*.08,vy:Math.random()*.08+.04,vz:(Math.random()-.5)*.08,life:Math.random()});d.setAttribute("position",new Fn(u,3)),this.sparkMaterial=new fd({color:62463,size:.38,transparent:!0,opacity:.85,blending:Bo}),this.sparkPoints=new Hv(d,this.sparkMaterial),this.scene.add(this.sparkPoints)}setupInteractions(){this.raycaster=new cx,this.mouse=new Rt,this.container.addEventListener("click",t=>{this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0);if(e.length>0){let n=e[0].object;for(;n.parent&&!n.userData.nodeId&&n!==this.scene;)n=n.parent;n&&n.userData.nodeId&&this.onNodeClick&&this.onNodeClick(n.userData.nodeId,n)}})}spawnCyberAttack(t){this.clearCyberBugs();for(let e=0;e<6;e++){const n=e*Math.PI*2/6,i=Math.cos(n)*3.5,r=Math.sin(n)*3.5,a=Nx(i,2.5,r);this.scene.add(a),this.cyberBugs.push(a)}this.substation&&this.substation.userData.breakerArm&&zn.to(this.substation.userData.breakerArm.rotation,{x:-Math.PI/2.8,duration:.6,ease:"back.out(2)"}),this.substation&&this.substation.userData.statusLed&&(this.substation.userData.statusLed.material=tt.glowRed),this.powerLines.forEach(e=>{e.pulses.forEach(n=>n.mesh.material=tt.glowRed)}),this.pypyRobot&&(this.pypyRobot.userData.eyes&&this.pypyRobot.userData.eyes.forEach(e=>e.material=tt.glowRed),this.pypyRobot.userData.ears&&(this.pypyRobot.userData.ears[0].rotation.z=.55,this.pypyRobot.userData.ears[1].rotation.z=-.55))}clearCyberBugs(){this.cyberBugs.forEach(t=>this.scene.remove(t)),this.cyberBugs=[],this.substation&&this.substation.userData.breakerArm&&zn.to(this.substation.userData.breakerArm.rotation,{x:0,duration:.45,ease:"power2.inOut"}),this.substation&&this.substation.userData.statusLed&&(this.substation.userData.statusLed.material=tt.glowGreen),this.powerLines.forEach(t=>{t.pulses.forEach(e=>e.mesh.material=tt.glowCyan)}),this.pypyRobot&&(this.pypyRobot.userData.eyes&&this.pypyRobot.userData.eyes.forEach(t=>t.material=tt.dogEye),this.pypyRobot.userData.ears&&(this.pypyRobot.userData.ears[0].rotation.z=.25,this.pypyRobot.userData.ears[1].rotation.z=-.25))}animate(t){requestAnimationFrame(this.animate);const e=t*.001;this.controls.update(),this.renewables&&this.renewables.userData.turbines&&this.renewables.userData.turbines.forEach((a,o)=>{a.rotation.z+=.03+o*.008}),this.genStation&&this.genStation.userData.puffs&&this.genStation.userData.puffs.forEach((a,o)=>{a.position.y=5.2+Math.sin(e*2+o)*.35,a.scale.setScalar(.9+Math.cos(e*1.5+o)*.12)});const n=window.gridState&&window.gridState.isCompromised,i=n?.014:.007;if(this.powerLines.forEach(a=>{a.pulses.forEach(o=>{o.progress=(o.progress+i)%1;const l=a.curve.getPointAt(o.progress);o.mesh.position.copy(l),n?o.mesh.material=tt.glowRed:o.mesh.material=tt.glowCyan})}),this.substation&&this.substation.userData.statusStrobe){const a=this.substation.userData.statusStrobe;n?a.material=Math.sin(e*16)>0?tt.glowRed:tt.darkGray:a.material=Math.sin(e*4)>.2?tt.glowGreen:tt.darkGray}if(this.sparkPoints&&this.sparkVelocities){const a=this.sparkPoints.geometry.attributes.position.array,o=this.sparkVelocities.length;this.sparkMaterial.color.setHex(n?16711748:62463),this.sparkMaterial.size=n?.55:.28;for(let l=0;l<o;l++){const c=this.sparkVelocities[l];a[l*3]+=c.vx*(n?2.5:1),a[l*3+1]+=c.vy*(n?2.5:1),a[l*3+2]+=c.vz*(n?2.5:1),c.life+=.035,c.life>1&&(c.life=0,a[l*3]=(Math.random()-.5)*(n?4.5:2.5),a[l*3+1]=1.8+Math.random()*1.5,a[l*3+2]=(Math.random()-.5)*(n?4.5:2.5))}this.sparkPoints.geometry.attributes.position.needsUpdate=!0}const r=15;this.cars.forEach(a=>{a.userData.angle+=a.userData.speed;const o=Math.cos(a.userData.angle)*r,l=Math.sin(a.userData.angle)*r;a.position.set(o,1.52,l),a.rotation.y=-a.userData.angle+Math.PI/2}),this.clouds.forEach(a=>{a.position.x+=a.userData.speed*4,a.position.x>32&&(a.position.x=-32)}),this.pypyRobot&&(this.pypyRobot.position.y=4.5+Math.sin(e*2.5)*.2,this.pypyRobot.rotation.y=Math.sin(e*.8)*.15,this.pypyRobot.userData.tail&&(this.pypyRobot.userData.tail.rotation.y=Math.sin(e*12)*.45),this.pypyRobot.userData.ears&&(this.pypyRobot.userData.ears[0].rotation.x=.1+Math.sin(e*3.5)*.08,this.pypyRobot.userData.ears[1].rotation.x=.1+Math.sin(e*3.5+.4)*.08),this.pypyRobot.userData.head&&(this.pypyRobot.userData.head.rotation.z=Math.sin(e*1.5)*.05)),this.cyberBugs.forEach((a,o)=>{a.position.y=2.4+Math.sin(e*8+o)*.25,a.rotation.y+=.06,a.rotation.x=Math.sin(e*10+o)*.15}),this.renderer.render(this.scene,this.camera)}}const Je={NONE:"NONE",FDI:"FDI (False Data Injection)",DDOS:"DDoS Cyber Storm",RANSOM:"Ransomware Breaker Lockout",TRIP:"N-1 Transmission Line Trip"};class Fx{constructor(){this.activeTab="overview",this.connected=!0,this.frequency=60,this.nominalFreq=60,this.totalLoad=6150.8,this.totalGen=6192.4,this.systemInertia=4.2,this.aiTrust=.998,this.threatScore=.02,this.currentAttack=Je.NONE,this.statusText="IEEE 39-BUS SECURED",this.isCompromised=!1,this.shieldActive=!1,this.isRecovering=!1,this.wsLatency=14,this.messageRate=120,this.isLiveMode=!1,this.backendWsUrl="ws://localhost:8000/ws",this.ws=null,this.pages=[{id:"overview",label:"Ringkasan",icon:"📊",desc:"Gambaran menyeluruh keselamatan grid"},{id:"grid",label:"Digital Twin 3D",icon:"⚡",desc:"Telemetri 39-Bus, talian & suis"},{id:"detection",label:"Pengesanan AI",icon:"🛡️",desc:"Bukti ancaman LSTM, GNN, ST-GNN, PINN"},{id:"decision",label:"Keputusan AI",icon:"🧠",desc:"Konsensus PPO & DQN serta gabungan risiko"},{id:"recovery",label:"Pemulihan FLISR",icon:"🔄",desc:"Protokol keselamatan Layer 6 terbukti"},{id:"simulation",label:"Simulasi Serangan",icon:"🎯",desc:"Cyber range & suntikan ancaman"},{id:"forensics",label:"Log & Forensik",icon:"📜",desc:"Rekod audit mesej topik MQTT"},{id:"health",label:"Kesihatan Sistem",icon:"💓",desc:"Status perkhidmatan, broker & kontena"}],this.aiModels={lstm:{name:"LSTM Temporal",risk:.02,threshold:.65,status:"Selamat (Normal)",anomalous:!1,latency:"8ms"},gnn:{name:"GNN Topologi",risk:.03,threshold:.6,status:"Topologi Sah (Normal)",anomalous:!1,latency:"12ms"},stgnn:{name:"ST-GNN Spatio-Temporal",risk:.01,threshold:.7,status:"Aliran Kuasa Normal",anomalous:!1,latency:"15ms"},pinn:{name:"PINN Fizik (Kirchhoff)",residual:.002,threshold:.05,status:"KCL/KVL 100% Sah",anomalous:!1,latency:"6ms"}},this.rlRecovery={ppoAction:"Voltage Trim [Bus 32: +0.01 p.u.]",ppoConfidence:.96,dqnAction:"Breaker Reconnect Feeder #4",dqnConfidence:.94,agreement:"100% Persetujuan PPO/DQN",sandboxStatus:"AC Newton-Raphson Solver Converged"},this.recoverySteps=[{id:1,label:"Breaker OPEN Dikesan",desc:"Status suis pemutus litar disahkan terbuka",done:!0,active:!1},{id:2,label:"Arahan Palsu Disekat",desc:"Tapis trafik berniat jahat & asingkan penderia",done:!0,active:!1},{id:3,label:"Kelulusan Konsensus AI",desc:"Konsensus dwi-ejen PPO & DQN diluluskan",done:!0,active:!1},{id:4,label:"AC Solver Menumpu",desc:"Aliran kuasa AC selamat disahkan Newton-Raphson",done:!0,active:!1},{id:5,label:"Arahan CLOSE Dihantar",desc:"Isyarat penutupan selamat ke suis Feeder #4",done:!0,active:!1},{id:6,label:"GRID SECURED (Level 6)",desc:"Pengesahan telemetri baharu: Grid Selamat!",done:!0,active:!1}],this.services=[{name:"IEEE-39 Digital Twin",status:"ONLINE",latency:"4ms",role:"Simulasi Fizik Grid Kuasa"},{name:"MQTT Mosquitto Broker",status:"ONLINE",latency:"2ms",role:"Mesej Telemetri Port 1883"},{name:"AI Fusion & Detection Engine",status:"ONLINE",latency:"12ms",role:"Inferens Selari 4-Model"},{name:"PPO/DQN Recovery Orchestrator",status:"ONLINE",latency:"18ms",role:"Konsensus Pemulihan Pintar"},{name:"PINN Physics Validator",status:"ONLINE",latency:"6ms",role:"Pengesahan Hukum Kirchhoff"},{name:"Layer-6 Safety Gate Guard",status:"ONLINE",latency:"3ms",role:"Pemeriksaan Veto & Kelulusan"}],this.buses39=[];for(let t=1;t<=39;t++){const e=t>=30;let n=e?`Penjana G${t-29}`:"Nod Beban / Transmisi";t===5&&(n="Beban Hospital Utama (Keutamaan)"),t===8&&(n="Beban Industri Utama (Keutamaan)"),t===30&&(n="G1 Pangkalan Nuklear (1040 MW)"),t===31&&(n="G2 Hidroelektrik (646 MW)"),t===32&&(n="G3 / Pencawang Utama (650 MW)"),t===39&&(n="G10 / Interkoneksi Grid Import (1000 MW)"),this.buses39.push({num:t,id:`Bus_${t}`,name:`Bas #${t}`,type:e?"GENERATOR":"LOAD",isGen:e,role:n,voltage:e?1.03:1.012,power:e?t===30?1040:t===31?646:t===32?650:540:t===5?322:t===8?522:180,qPower:e?250:60,angle:-2.5+t*.2,risk:.01,status:"NORMAL"})}this.lines=[{id:"Line_1_2",from:1,to:2,flow:145.2,rating:400,breaker:"CLOSED"},{id:"Line_2_3",from:2,to:3,flow:210.5,rating:500,breaker:"CLOSED"},{id:"Line_3_4",from:3,to:4,flow:-85,rating:400,breaker:"CLOSED"},{id:"Line_4_5",from:4,to:5,flow:320.1,rating:600,breaker:"CLOSED"},{id:"Line_5_6",from:5,to:6,flow:190.4,rating:500,breaker:"CLOSED"},{id:"Line_14_15",from:14,to:15,flow:280,rating:600,breaker:"CLOSED"},{id:"Line_16_17",from:16,to:17,flow:175.8,rating:450,breaker:"CLOSED"},{id:"Line_32_feeder4",from:32,to:10,flow:450,rating:700,breaker:"CLOSED"}],this.logs=[],this.addLog("MQTT [pypy/grid/telemetry]: Data telemetri IEEE 39-Bus aktif","info"),this.addLog("AI [grid/ai/fusion]: 4 Model (LSTM, GNN, ST-GNN, PINN) disahkan bersedia","success"),this.addLog("PINN [grid/physics_validation]: Hukum Kirchhoff dipatuhi (Residu = 0.002 MW)","info"),this.addLog("IMMUNE [grid/l6_recovery]: Grid Secured Level 6 diaktifkan","success"),this.listeners=[],setInterval(()=>this.tick(),1e3)}subscribe(t){this.listeners.push(t)}notify(){this.listeners.forEach(t=>t(this))}setTab(t){this.activeTab=t,this.notify()}addLog(t,e="info"){const n=new Date().toLocaleTimeString("ms-MY",{hour12:!1});this.logs.unshift({time:n,msg:t,type:e}),this.logs.length>80&&this.logs.pop()}tick(){if(!this.isLiveMode&&!this.isCompromised&&!this.isRecovering){const t=(Math.random()-.5)*.02;this.frequency=parseFloat((60+t).toFixed(3)),this.totalLoad=parseFloat((6150.8+(Math.random()-.5)*4).toFixed(1));const e=this.buses39.find(n=>n.num===32);e&&(e.voltage=parseFloat((1.025+(Math.random()-.5)*.004).toFixed(3))),this.notify()}}connectLiveBackend(t){if(this.ws){try{this.ws.close()}catch{}this.ws=null}const e=t||this.backendWsUrl||"ws://localhost:8000/ws";this.backendWsUrl=e,this.addLog(`[BACKEND] Menyambung ke WebSocket: ${e}...`,"info");try{this.ws=new WebSocket(e),this.ws.onopen=()=>{this.isLiveMode=!0,this.connected=!0,this.addLog(`[BACKEND] Sambungan BERJAYA ke ${e}! Mod Live Telemetri Aktif.`,"success"),this.notify()},this.ws.onmessage=n=>{try{const i=JSON.parse(n.data);this.handleLiveMessage(i)}catch(i){console.error("Failed to parse backend message:",i)}},this.ws.onerror=n=>{console.warn("Backend WebSocket error:",n),this.isLiveMode&&this.addLog("[BACKEND] Ralat sambungan WebSocket. Kembali ke Mod Simulasi Autonomi.","warning"),this.isLiveMode=!1,this.notify()},this.ws.onclose=()=>{this.isLiveMode&&this.addLog("[BACKEND] Sambungan WebSocket terputus. Beralih ke Mod Simulasi Autonomi.","warning"),this.isLiveMode=!1,this.notify()}}catch(n){console.error("Failed to initialize WebSocket:",n),this.isLiveMode=!1,this.notify()}}disconnectLiveBackend(){if(this.ws){try{this.ws.close()}catch{}this.ws=null}this.isLiveMode=!1,this.addLog("[BACKEND] Mod Live ditamatkan. Kembali ke Mod Simulasi Tempatan.","info"),this.notify()}handleLiveMessage(t){if(t.type==="PONG"){const e=t.payload;e&&(this.wsLatency=Date.now()-e);return}if(t.type==="BOOTSTRAP"){t.telemetry&&this.applyLiveTelemetry(t.telemetry),t.threat&&(this.threatScore=t.threat.instability_risk||this.threatScore),t.trust_scores&&(this.aiTrust=t.trust_scores.overall_trust||this.aiTrust);return}if(t.topic&&t.payload){const{topic:e,payload:n}=t;e==="pypy/grid/telemetry"||e==="grid/telemetry"?this.applyLiveTelemetry(n):e.includes("attack")||e.includes("alerts")?this.addLog(`[MQTT: ${e}] ${typeof n=="string"?n:JSON.stringify(n)}`,"danger"):e==="pypy/ai/fusion"&&(n.overall_trust!==void 0&&(this.aiTrust=n.overall_trust),n.threat_score!==void 0&&(this.threatScore=n.threat_score));return}t.state&&t.state.buses&&this.applyLiveTelemetry(t)}applyLiveTelemetry(t){if(!t||!t.state)return;const e=t.state;if(e.frequency!==void 0&&(this.frequency=parseFloat(e.frequency.toFixed(3))),e.total_load!==void 0&&(this.totalLoad=parseFloat(e.total_load.toFixed(1))),e.total_gen!==void 0&&(this.totalGen=parseFloat(e.total_gen.toFixed(1))),t.attack_status){const n=t.attack_status.active_attack;this.isCompromised=!!n,n?(this.currentAttack=n,this.statusText=`AMARAN: ${n.toUpperCase()} AKTIF!`):(this.currentAttack=Je.NONE,this.statusText="IEEE 39-BUS SECURED (LIVE)")}if(e.buses){const n=e.buses.Bus_32||e.buses[32]||e.buses[32];if(n){const i=this.buses39.find(r=>r.num===32);i&&(i.voltage=n.voltage_pu||n.voltage||i.voltage,i.power=n.active_power_mw||n.power||i.power,i.qPower=n.reactive_power_mvar||n.qPower||i.qPower,i.status=this.isCompromised?"ATTACKED":"NORMAL")}}this.notify()}triggerAttack(t){this.currentAttack=t,this.isCompromised=!0,this.shieldActive=!1,this.isRecovering=!1,this.recoverySteps.forEach(n=>{n.done=!1,n.active=!1});const e=this.buses39.find(n=>n.num===32);switch(t){case Je.FDI:this.frequency=60.48,this.totalLoad=6980.5,this.aiTrust=.38,this.threatScore=.94,this.statusText="AMARAN: SERANGAN FDI DIKESAN!",this.aiModels.lstm.risk=.91,this.aiModels.lstm.anomalous=!0,this.aiModels.lstm.status="Anomali Temporal (Z-Score = 4.8)",this.aiModels.pinn.residual=.284,this.aiModels.pinn.anomalous=!0,this.aiModels.pinn.status="KCL/KVL TIDAK PATUH! (Data Palsu)",this.aiModels.gnn.risk=.84,this.aiModels.gnn.anomalous=!0,this.aiModels.gnn.status="Graf Hubungan Corrupt",this.aiModels.stgnn.risk=.76,this.aiModels.stgnn.anomalous=!0,this.aiModels.stgnn.status="Gelombang Aliran Tidak Selari",e&&(e.voltage=1.185,e.risk=.95,e.status="FDI ATTACK"),this.addLog("[MQTT: grid/alerts] Serangan FDI dikesan pada penderia Bus 32!","danger"),this.addLog("[PINN: physics_validation] Pelanggaran Kirchhoff: Residual 0.284 MW melebihi had toleransi!","danger"),this.addLog("[LSTM: ai/lstm] Anomali temporal tinggi pada bacaan fasa voltan","danger");break;case Je.DDOS:this.frequency=59.82,this.aiTrust=.55,this.threatScore=.82,this.statusText="AMARAN: BANJIR PAKET DDOS!",this.aiModels.stgnn.risk=.89,this.aiModels.stgnn.anomalous=!0,this.aiModels.stgnn.status="Kelewatan Telemetri > 1,450ms",this.aiModels.gnn.risk=.78,this.aiModels.gnn.anomalous=!0,this.aiModels.gnn.status="Paket Drop Topologi 42%",this.addLog("[MQTT: grid/alerts] Banjir paket DDoS SCADA/MQTT melanda broker port 1883","danger"),this.addLog("[ST-GNN: ai/stgnn] Kelewatan spatio-temporal kritikal melebihi ambang selamat","danger");break;case Je.RANSOM:this.frequency=59.41,this.totalLoad=5380,this.aiTrust=.22,this.threatScore=.92,this.statusText="AMARAN: PEMUTUS LITAR DIKUNCI RANSOMWARE!",this.aiModels.lstm.risk=.94,this.aiModels.lstm.anomalous=!0,this.aiModels.lstm.status="Penurunan Beban Mendadak (-770 MW)",this.aiModels.pinn.residual=.31,this.aiModels.pinn.anomalous=!0,this.aiModels.pinn.status="Aliran Terhalang Paksa";const n=this.lines.find(r=>r.id==="Line_32_feeder4");n&&(n.breaker="LOCKED_OPEN"),this.addLog("[BREAKER] Perintah berniat jahat dikesan: Feeder #4 dikunci OPEN secara paksa!","danger"),this.addLog("[AI ORCHESTRATOR] Percubaan rampasan suis dikesan oleh Layer 6 Safety Guard","danger");break;case Je.TRIP:this.frequency=59.22,this.totalLoad=5790,this.aiTrust=.62,this.threatScore=.74,this.statusText="AMARAN: TALIAN 14-15 TERPUTUS (N-1 TRIP)!",this.aiModels.stgnn.risk=.88,this.aiModels.stgnn.anomalous=!0,this.aiModels.stgnn.status="Lebihan Aliran Spatio-Temporal",this.aiModels.pinn.residual=.195,this.aiModels.pinn.anomalous=!0,this.aiModels.pinn.status="Ketidakseimbangan Aliran AC";const i=this.lines.find(r=>r.id==="Line_14_15");i&&(i.breaker="TRIPPED"),this.addLog("[GRID] Talian 14-15 terputus! Kontinjensi N-1 diaktifkan","danger"),this.addLog("[PINN] Keseimbangan aliran kuasa AC terjejas","warning");break}this.notify()}async executeRecoveryPipeline(t){this.isRecovering=!0,this.addLog("[RECOVERY] Memulakan protokol pemulihan autonomi Level 6...","info");for(let n=0;n<this.recoverySteps.length;n++)this.recoverySteps.forEach(i=>i.active=!1),this.recoverySteps[n].active=!0,this.notify(),t&&t(this.recoverySteps[n]),await new Promise(i=>setTimeout(i,650)),this.recoverySteps[n].done=!0,n===0?this.addLog("[L6: STEP 1] Status pemutus litar disahkan OPEN di Digital Twin","info"):n===1?this.addLog("[L6: STEP 2] Arahan berniat jahat diasingkan & penderia ditapis","info"):n===2?this.addLog("[L6: STEP 3] Konsensus Dwi-Ejen PPO (0.96) & DQN (0.94) diluluskan","success"):n===3?this.addLog("[L6: STEP 4] AC Power Flow Solver menumpu dalam 3 lelaran Newton-Raphson","success"):n===4?this.addLog("[L6: STEP 5] Arahan CLOSE selamat dihantar ke pemutus litar","info"):n===5&&this.addLog("[L6: STEP 6] Pengesahan telemetri baharu: GRID SECURED LEVEL 6!","success");this.currentAttack=Je.NONE,this.isCompromised=!1,this.isRecovering=!1,this.shieldActive=!0,this.frequency=60,this.totalLoad=6150.8,this.aiTrust=.999,this.threatScore=.01,this.statusText="GRID SECURED (Level 6 Verified)",this.aiModels.lstm.risk=.02,this.aiModels.lstm.anomalous=!1,this.aiModels.lstm.status="Selamat (Normal)",this.aiModels.gnn.risk=.02,this.aiModels.gnn.anomalous=!1,this.aiModels.gnn.status="Topologi Sah",this.aiModels.stgnn.risk=.01,this.aiModels.stgnn.anomalous=!1,this.aiModels.stgnn.status="Aliran Kuasa Normal",this.aiModels.pinn.residual=.002,this.aiModels.pinn.anomalous=!1,this.aiModels.pinn.status="KCL/KVL 100% Patuh";const e=this.buses39.find(n=>n.num===32);e&&(e.voltage=1.025,e.risk=.01,e.status="NORMAL"),this.lines.forEach(n=>n.breaker="CLOSED"),this.notify()}}const xt=new Fx;class kx{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggle(){return this.enabled=!this.enabled,this.enabled}playClick(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(600,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(1200,this.ctx.currentTime+.05),e.gain.setValueAtTime(.15,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.05)}playAttackSiren(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth";const n=this.ctx.currentTime;t.frequency.setValueAtTime(440,n),t.frequency.linearRampToValueAtTime(880,n+.2),t.frequency.linearRampToValueAtTime(440,n+.4),t.frequency.linearRampToValueAtTime(880,n+.6),e.gain.setValueAtTime(.2,n),e.gain.exponentialRampToValueAtTime(.01,n+.7),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(n+.7)}playShield(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine";const n=this.ctx.currentTime;t.frequency.setValueAtTime(220,n),t.frequency.exponentialRampToValueAtTime(880,n+.25),t.frequency.exponentialRampToValueAtTime(440,n+.5),e.gain.setValueAtTime(.25,n),e.gain.exponentialRampToValueAtTime(.001,n+.5),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(n+.5)}playGlitch(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square";const n=this.ctx.currentTime;t.frequency.setValueAtTime(150,n),t.frequency.setValueAtTime(300,n+.05),t.frequency.setValueAtTime(100,n+.1),t.frequency.setValueAtTime(600,n+.15),e.gain.setValueAtTime(.18,n),e.gain.exponentialRampToValueAtTime(.001,n+.25),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(n+.25)}playVictory(){if(!this.enabled||(this.init(),!this.ctx))return;const t=[523.25,659.25,783.99,1046.5],e=this.ctx.currentTime;t.forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.value=n;const o=e+i*.1;a.gain.setValueAtTime(.2,o),a.gain.exponentialRampToValueAtTime(.001,o+.25),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+.25)})}}const Me=new kx;window.addEventListener("DOMContentLoaded",()=>{window.gridState=xt;const s=document.getElementById("canvas-container"),t=new Ox(s),e=document.getElementById("tele-freq"),n=document.getElementById("tele-load"),i=document.getElementById("tele-trust"),r=document.getElementById("tele-threat"),a=document.getElementById("grid-status-text"),o=document.querySelector(".status-indicator"),l=document.getElementById("comic-toast"),c=document.getElementById("toast-icon"),h=document.getElementById("toast-title"),d=document.getElementById("toast-desc"),u=document.getElementById("speech-text"),f=document.getElementById("hud-window"),g=document.getElementById("btn-toggle-hud"),_=document.getElementById("hud-toggle-text"),m=document.getElementById("btn-minimize-hud"),p=document.getElementById("hud-tab-icon"),x=document.getElementById("hud-tab-title"),y=document.getElementById("hud-tab-subtitle"),v=document.querySelectorAll(".nav-tab"),A=document.querySelectorAll(".tab-pane"),w=document.querySelectorAll(".cam-btn"),T=document.getElementById("btn-theme"),C=document.getElementById("theme-icon"),M=document.getElementById("btn-sound"),S=document.getElementById("sound-icon"),L=document.getElementById("btn-reset-cam"),G=document.getElementById("btn-auto-demo"),F=document.getElementById("btn-mode-toggle"),Y=document.getElementById("mode-icon"),J=document.getElementById("mode-text"),H=document.getElementById("backend-modal"),Q=document.getElementById("btn-close-backend-modal"),q=document.getElementById("backend-ws-url"),dt=document.getElementById("btn-connect-backend"),N=document.getElementById("btn-disconnect-backend"),P=document.getElementById("bmc-status-box"),at=document.getElementById("bmc-status-title"),pt=document.getElementById("bmc-status-sub");function V(){xt.isLiveMode?(F&&(F.classList.add("live"),Y&&(Y.textContent="📡"),J&&(J.textContent="Live Docker")),P&&P.classList.add("live"),at&&(at.textContent="📡 Mod Live Backend Aktif"),pt&&(pt.textContent=`Bersambung ke ${xt.backendWsUrl||"WebSocket Gateway"}`)):(F&&(F.classList.remove("live"),Y&&(Y.textContent="🎮"),J&&(J.textContent="Simulasi")),P&&P.classList.remove("live"),at&&(at.textContent="🎮 Mod Simulasi Autonomi (Aktif)"),pt&&(pt.textContent="Digital twin berjalan kendiri tanpa memerlukan server."))}F&&F.addEventListener("click",()=>{Me.playClick(),q&&(q.value=localStorage.getItem("pypy_backend_url")||xt.backendWsUrl||"ws://localhost:8000/ws"),V(),H&&H.classList.remove("hidden")}),Q&&Q.addEventListener("click",()=>{Me.playClick(),H&&H.classList.add("hidden")}),H&&H.addEventListener("click",I=>{I.target===H&&H.classList.add("hidden")}),dt&&dt.addEventListener("click",()=>{Me.playClick();const I=q?q.value.trim():"ws://localhost:8000/ws";I&&(localStorage.setItem("pypy_backend_url",I),xt.connectLiveBackend(I),V(),H&&H.classList.add("hidden"),kt("📡","MENYAMBUNG KE BACKEND",`Menghubungi WebSocket ${I}...`,"normal"))}),N&&N.addEventListener("click",()=>{Me.playClick(),xt.disconnectLiveBackend(),V(),H&&H.classList.add("hidden"),kt("🎮","MOD SIMULASI AKTIF","Beroperasi secara kendiri (Offline Digital Twin).","normal")});const K=document.getElementById("scada-modal"),ot=document.getElementById("btn-close-scada-modal"),et=document.getElementById("btn-header-scada"),ft=document.getElementById("nav-tab-scada"),Tt=document.getElementById("btn-quick-scada-open"),Ct=document.getElementById("scada-tunnel-url"),Bt=document.getElementById("btn-open-scada-tunnel");function Ut(){if(Me.playClick(),Ct){const I=localStorage.getItem("pypy_tunnel_url")||"https://cleaner-simply-moss-respected.trycloudflare.com";Ct.value=I}K&&K.classList.remove("hidden")}et&&et.addEventListener("click",Ut),ft&&ft.addEventListener("click",Ut),Tt&&Tt.addEventListener("click",Ut),ot&&ot.addEventListener("click",()=>{Me.playClick(),K&&K.classList.add("hidden")}),K&&K.addEventListener("click",I=>{I.target===K&&K.classList.add("hidden")}),Bt&&Bt.addEventListener("click",()=>{Me.playClick();const I=Ct?Ct.value.trim():"";if(I){const X=I.startsWith("http")?I:`https://${I}`;localStorage.setItem("pypy_tunnel_url",X),window.open(X,"_blank"),kt("🌐","MEMBUKA DASHBOARD AWAM",`Membuka ${X}...`,"normal")}else kt("⚠️","URL DIPERLUKAN","Sila masukkan URL Cloudflare Quick Tunnel anda.","warn")});const Kt=document.getElementById("btn-mascot-cheer"),O=document.getElementById("btn-mascot-scan"),oe=document.getElementById("btn-mascot-shield"),Gt=document.getElementById("waveform-canvas"),It=Gt?Gt.getContext("2d"):null,Nt=document.getElementById("wave-freq-text");let te=0;const Lt=document.getElementById("gauge-freq-canvas"),R=document.getElementById("gauge-load-canvas"),E=document.getElementById("gauge-freq-val"),W=document.getElementById("gauge-load-val"),st=document.getElementById("gauge-status-badge"),lt=document.getElementById("ai-radar-canvas"),nt=document.getElementById("scope-3phase-canvas"),mt=nt?nt.getContext("2d"):null,_t=document.getElementById("scope-status-badge"),At=document.querySelector(".phase-chip.va"),Zt=document.querySelector(".phase-chip.vb"),ut=document.querySelector(".phase-chip.vc");let St=0;const zt={island:{pos:{x:30,y:26,z:32},target:{x:0,y:2,z:0}},substation:{pos:{x:0,y:9,z:12},target:{x:0,y:1.5,z:0}},generators:{pos:{x:-16,y:10,z:-4},target:{x:-11,y:2,z:-10}},city:{pos:{x:18,y:13,z:-1},target:{x:11,y:3,z:-7}},mascot:{pos:{x:4,y:6,z:7},target:{x:3,y:4,z:3}}};function Ot(I){const X=zt[I];X&&(Me.playClick(),zn.to(t.camera.position,{x:X.pos.x,y:X.pos.y,z:X.pos.z,duration:1.2,ease:"power2.inOut"}),zn.to(t.controls.target,{x:X.target.x,y:X.target.y,z:X.target.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>t.controls.update()}))}w.forEach(I=>{I.addEventListener("click",()=>{w.forEach(ht=>ht.classList.remove("active")),I.classList.add("active");const X=I.getAttribute("data-view");Ot(X)})});function Pt(){if(!It)return;const I=Gt.width,X=Gt.height;It.fillStyle="#0a0f1d",It.fillRect(0,0,I,X),It.strokeStyle="rgba(56, 189, 248, 0.15)",It.lineWidth=1,It.beginPath(),It.moveTo(0,X/2),It.lineTo(I,X/2),It.stroke(),It.strokeStyle=xt.isCompromised?"#ef4444":"#00f3ff",It.lineWidth=2,It.beginPath();const ht=xt.frequency/60,U=X/2.6*(xt.buses39[31].voltage/1.025);for(let vt=0;vt<I;vt++){const Dt=vt/I*Math.PI*4*ht+te,ct=xt.isCompromised?Math.sin(Dt*3)*4:0,bt=X/2+Math.sin(Dt)*U+ct;vt===0?It.moveTo(vt,bt):It.lineTo(vt,bt)}It.stroke(),te+=.12*ht,Nt&&(Nt.textContent=`${xt.frequency.toFixed(2)} Hz`),requestAnimationFrame(Pt)}requestAnimationFrame(Pt);function ee(I,X,ht){if(!I)return;const U=I.getContext("2d"),vt=I.width,Dt=I.height;U.clearRect(0,0,vt,Dt);const ct=vt/2,bt=Dt-20,Ft=Math.min(vt*.42,Dt-32),Ht=10;U.beginPath(),U.arc(ct,bt,Ft,Math.PI,2*Math.PI,!1),U.strokeStyle="rgba(148, 163, 184, 0.2)",U.lineWidth=Ht,U.lineCap="round",U.stroke();const Xt=qe=>Math.PI+Math.PI*Math.max(0,Math.min(1,(qe-59)/2));U.beginPath(),U.arc(ct,bt,Ft,Xt(59),Xt(59.7),!1),U.strokeStyle="#ef4444",U.lineWidth=Ht,U.lineCap="butt",U.stroke(),U.beginPath(),U.arc(ct,bt,Ft,Xt(59.7),Xt(59.9),!1),U.strokeStyle="#f59e0b",U.lineWidth=Ht,U.stroke(),U.beginPath(),U.arc(ct,bt,Ft,Xt(59.9),Xt(60.1),!1),U.strokeStyle="#10b981",U.lineWidth=Ht,U.stroke(),U.beginPath(),U.arc(ct,bt,Ft,Xt(60.1),Xt(60.3),!1),U.strokeStyle="#f59e0b",U.lineWidth=Ht,U.stroke(),U.beginPath(),U.arc(ct,bt,Ft,Xt(60.3),Xt(61),!1),U.strokeStyle="#ef4444",U.lineWidth=Ht,U.stroke(),[59,59.5,60,60.5,61].forEach(qe=>{const de=Xt(qe),dn=Ft-15,Jt=Ft-6,_e=ct+Math.cos(de)*dn,Ce=bt+Math.sin(de)*dn,ge=ct+Math.cos(de)*Jt,Re=bt+Math.sin(de)*Jt;U.beginPath(),U.moveTo(_e,Ce),U.lineTo(ge,Re),U.strokeStyle="#64748b",U.lineWidth=1.5,U.stroke();const Ee=Ft-23,Pn=ct+Math.cos(de)*Ee,Dr=bt+Math.sin(de)*Ee+3;U.fillStyle="#64748b",U.font="bold 8px Inter, sans-serif",U.textAlign="center",U.fillText(qe.toFixed(1),Pn,Dr)});const gt=Xt(X),Ae=Ft-8,qt=ct+Math.cos(gt)*Ae,ze=bt+Math.sin(gt)*Ae;U.beginPath(),U.moveTo(ct,bt),U.lineTo(qt,ze),U.strokeStyle=ht?"#ef4444":"#0284c7",U.lineWidth=3,U.lineCap="round",U.stroke(),U.beginPath(),U.arc(ct,bt,6,0,Math.PI*2),U.fillStyle="#1e293b",U.fill(),U.beginPath(),U.arc(ct,bt,3,0,Math.PI*2),U.fillStyle=ht?"#ef4444":"#0284c7",U.fill()}function Yt(I,X,ht){if(!I)return;const U=I.getContext("2d"),vt=I.width,Dt=I.height;U.clearRect(0,0,vt,Dt);const ct=vt/2,bt=Dt-20,Ft=Math.min(vt*.42,Dt-32),Ht=10;U.beginPath(),U.arc(ct,bt,Ft,Math.PI,2*Math.PI,!1),U.strokeStyle="rgba(148, 163, 184, 0.2)",U.lineWidth=Ht,U.lineCap="round",U.stroke();const Xt=de=>Math.PI+Math.PI*Math.max(0,Math.min(1,de/1e4));U.beginPath(),U.arc(ct,bt,Ft,Xt(0),Xt(7e3),!1),U.strokeStyle="#10b981",U.lineWidth=Ht,U.lineCap="butt",U.stroke(),U.beginPath(),U.arc(ct,bt,Ft,Xt(7e3),Xt(8800),!1),U.strokeStyle="#f59e0b",U.lineWidth=Ht,U.stroke(),U.beginPath(),U.arc(ct,bt,Ft,Xt(8800),Xt(1e4),!1),U.strokeStyle="#ef4444",U.lineWidth=Ht,U.stroke();const Vt=[0,2500,5e3,7500,1e4],gt=["0","2.5k","5k","7.5k","10k"];Vt.forEach((de,dn)=>{const Jt=Xt(de),_e=Ft-15,Ce=Ft-6,ge=ct+Math.cos(Jt)*_e,Re=bt+Math.sin(Jt)*_e,Ee=ct+Math.cos(Jt)*Ce,Pn=bt+Math.sin(Jt)*Ce;U.beginPath(),U.moveTo(ge,Re),U.lineTo(Ee,Pn),U.strokeStyle="#64748b",U.lineWidth=1.5,U.stroke();const Dr=Ft-23,xd=ct+Math.cos(Jt)*Dr,yd=bt+Math.sin(Jt)*Dr+3;U.fillStyle="#64748b",U.font="bold 8px Inter, sans-serif",U.textAlign="center",U.fillText(gt[dn],xd,yd)});const Ae=Xt(X),qt=Ft-8,ze=ct+Math.cos(Ae)*qt,qe=bt+Math.sin(Ae)*qt;U.beginPath(),U.moveTo(ct,bt),U.lineTo(ze,qe),U.strokeStyle=ht?"#ef4444":"#0284c7",U.lineWidth=3,U.lineCap="round",U.stroke(),U.beginPath(),U.arc(ct,bt,6,0,Math.PI*2),U.fillStyle="#1e293b",U.fill(),U.beginPath(),U.arc(ct,bt,3,0,Math.PI*2),U.fillStyle=ht?"#ef4444":"#0284c7",U.fill()}function le(I,X,ht){if(!I)return;const U=I.getContext("2d"),vt=I.width,Dt=I.height;U.clearRect(0,0,vt,Dt);const ct=vt/2,bt=Dt/2-2,Ft=Math.min(vt,Dt)*.36,Ht=[-Math.PI/2,0,Math.PI/2,Math.PI],Xt=["⚡ PINN","🕸️ GNN","⏱️ ST-GNN","🧠 LSTM"];[.25,.5,.75,1].forEach(_e=>{U.beginPath(),Ht.forEach((Ce,ge)=>{const Re=Ft*_e,Ee=ct+Math.cos(Ce)*Re,Pn=bt+Math.sin(Ce)*Re;ge===0?U.moveTo(Ee,Pn):U.lineTo(Ee,Pn)}),U.closePath(),U.strokeStyle="rgba(56, 189, 248, 0.2)",U.lineWidth=1,U.stroke()}),Ht.forEach((_e,Ce)=>{U.beginPath(),U.moveTo(ct,bt);const ge=ct+Math.cos(_e)*Ft,Re=bt+Math.sin(_e)*Ft;U.lineTo(ge,Re),U.strokeStyle="rgba(148, 163, 184, 0.25)",U.lineWidth=1,U.stroke();const Ee=ct+Math.cos(_e)*(Ft+14),Pn=bt+Math.sin(_e)*(Ft+14);U.fillStyle="#64748b",U.font="bold 9px Inter, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText(Xt[Ce],Ee,Pn)});const Vt=Math.max(.12,Math.min(1,1-X.pinn.residual/.15)),gt=Math.max(.12,Math.min(1,1-X.gnn.risk)),Ae=Math.max(.12,Math.min(1,1-X.stgnn.risk)),qt=Math.max(.12,Math.min(1,1-X.lstm.risk)),ze=[Vt,gt,Ae,qt];U.beginPath(),ze.forEach((_e,Ce)=>{const ge=Ft*_e,Re=ct+Math.cos(Ht[Ce])*ge,Ee=bt+Math.sin(Ht[Ce])*ge;Ce===0?U.moveTo(Re,Ee):U.lineTo(Re,Ee)}),U.closePath(),U.fillStyle=ht?"rgba(239, 68, 68, 0.35)":"rgba(2, 132, 199, 0.32)",U.fill(),U.strokeStyle=ht?"#ef4444":"#00f3ff",U.lineWidth=2.5,U.stroke(),ze.forEach((_e,Ce)=>{const ge=Ft*_e,Re=ct+Math.cos(Ht[Ce])*ge,Ee=bt+Math.sin(Ht[Ce])*ge;U.beginPath(),U.arc(Re,Ee,4,0,Math.PI*2),U.fillStyle=ht?"#ef4444":"#00f3ff",U.fill(),U.strokeStyle="#ffffff",U.lineWidth=1.5,U.stroke()});const qe=document.querySelector(".rl-item.pinn"),de=document.querySelector(".rl-item.gnn"),dn=document.querySelector(".rl-item.stgnn"),Jt=document.querySelector(".rl-item.lstm");qe&&(qe.textContent=`● PINN Kirchhoff: ${(Vt*100).toFixed(1)}%`),de&&(de.textContent=`● GNN Topologi: ${(gt*100).toFixed(1)}%`),dn&&(dn.textContent=`● ST-GNN Kuasa: ${(Ae*100).toFixed(1)}%`),Jt&&(Jt.textContent=`● LSTM Masa: ${(qt*100).toFixed(1)}%`)}function k(){if(!mt)return;const I=nt.width,X=nt.height;mt.fillStyle="#060a12",mt.fillRect(0,0,I,X),mt.strokeStyle="rgba(56, 189, 248, 0.12)",mt.lineWidth=1;const ht=4;for(let Vt=1;Vt<ht;Vt++){const gt=X/ht*Vt;mt.beginPath(),mt.setLineDash(Vt===ht/2?[]:[2,4]),mt.moveTo(0,gt),mt.lineTo(I,gt),mt.stroke()}const U=10;for(let Vt=1;Vt<U;Vt++){const gt=I/U*Vt;mt.beginPath(),mt.setLineDash([2,4]),mt.moveTo(gt,0),mt.lineTo(gt,X),mt.stroke()}mt.setLineDash([]);const vt=xt.isCompromised,Dt=xt.frequency/60,ct=X/3*(xt.buses39[31].voltage/1.025);[{name:"Va",offset:0,color:"#f59e0b",ampMod:vt?.85:1},{name:"Vb",offset:-2*Math.PI/3,color:"#06b6d4",ampMod:vt?1.15:1},{name:"Vc",offset:2*Math.PI/3,color:"#ec4899",ampMod:vt?.92:1}].forEach(Vt=>{mt.strokeStyle=Vt.color,mt.lineWidth=2,mt.beginPath();for(let gt=0;gt<I;gt++){const Ae=gt/I*Math.PI*4*Dt+St+Vt.offset;let qt=X/2+Math.sin(Ae)*(ct*Vt.ampMod);vt&&(qt+=Math.sin(Ae*3)*(ct*.22),qt+=Math.sin(Ae*5)*(ct*.1),gt%15===0&&(qt+=(Math.random()-.5)*6)),gt===0?mt.moveTo(gt,qt):mt.lineTo(gt,qt)}mt.stroke()}),St+=.09*Dt,_t&&(vt?(_t.textContent="⚡ DISTORTION & FDIA HARMONICS",_t.className="badge-tag red"):(_t.textContent="SINE WAVE NORMAL (60.0 Hz)",_t.className="badge-tag green"));const Ft=vt?(.872+Math.sin(St)*.015).toFixed(3):(1.025+Math.sin(St*.5)*.003).toFixed(3),Ht=vt?(1.164+Math.cos(St)*.018).toFixed(3):(1.022+Math.cos(St*.5)*.003).toFixed(3),Xt=vt?(.941+Math.sin(St+1)*.014).toFixed(3):(1.028+Math.sin(St*.5+1)*.003).toFixed(3);At&&(At.innerHTML=`<span class="dot-va"></span> Fasa A (Va): ${Ft} pu`),Zt&&(Zt.innerHTML=`<span class="dot-vb"></span> Fasa B (Vb): ${Ht} pu`),ut&&(ut.innerHTML=`<span class="dot-vc"></span> Fasa C (Vc): ${Xt} pu`),requestAnimationFrame(k)}requestAnimationFrame(k);const yt={overview:{icon:"📊",title:"Ringkasan Sistem (Overview)",subtitle:"Gambaran Menyeluruh Status Grid & Pertahanan AI"},grid:{icon:"⚡",title:"Matriks IEEE 39-Bus (Digital Twin)",subtitle:"Pemeriksaan 39 Bas, 10 Penjana Kuasa & 46 Talian"},detection:{icon:"🛡️",title:"Pengesanan AI Multi-Model",subtitle:"Bukti Ancaman LSTM, GNN, ST-GNN & PINN"},decision:{icon:"🧠",title:"Keputusan & Gabungan Bukti AI",subtitle:"Konsensus Dwi-Ejen PPO & DQN serta Skor Kepercayaan"},recovery:{icon:"🔄",title:"Pemulihan Autonomi Level 6 (FLISR)",subtitle:"6 Langkah Pengesahan Keselamatan Grid"},simulation:{icon:"🎯",title:"Cyber Range: Simulasi Serangan",subtitle:"Suntikan FDI, DDoS, Ransomware & Line Trip"},forensics:{icon:"📜",title:"Log Forensik & Jejak Audit MQTT",subtitle:"Rekod Mesej Telemetri Mengikut Topik"},health:{icon:"💓",title:"Kesihatan Perkhidmatan & Kontena",subtitle:"Status Kependaman Broker & Model AI"}};function Z(I){Me.playClick(),xt.setTab(I),f.classList.contains("hidden")&&rt(!0),v.forEach(ht=>{ht.getAttribute("data-tab")===I?ht.classList.add("active"):ht.classList.remove("active")}),A.forEach(ht=>{ht.id===`pane-${I}`?ht.classList.add("active"):ht.classList.remove("active")});const X=yt[I]||yt.overview;switch(p.textContent=X.icon,x.textContent=X.title,y.textContent=X.subtitle,I){case"overview":Ot("island"),u.textContent="Mod Ringkasan: Status keseluruhan keselamatan grid IEEE 39-Bus dan metrik 4-model AI.";break;case"grid":Ot("substation"),u.textContent="Mod Digital Twin: Periksa kesemua 39 bas sistem IEEE 39-Bus New England dalam matriks di sebelah!";break;case"detection":Ot("island"),u.textContent="Mod Pengesanan AI: 4 model (LSTM, GNN, ST-GNN, PINN) menganalisis keselamatan grid secara selari.";break;case"decision":Ot("mascot"),u.textContent="Mod Keputusan AI: Menggabungkan bukti penderia dan membandingkan konsensus dwi-ejen RL (PPO + DQN).";break;case"recovery":Ot("substation"),u.textContent="Mod Pemulihan FLISR: Protokol 6 langkah keselamatan Level 6 memastikan grid hanya pulih apabila kestabilan AC disahkan!";break;case"simulation":Ot("substation"),u.textContent="Cyber Range: Cuba suntik serangan FDI, DDoS, Ransomware atau Line Trip untuk melihat tindak balas 3D!";break;case"forensics":u.textContent="Log & Forensik: Jejak audit masa nyata bagi semua mesej telemetri dan amaran topik MQTT.";break;case"health":u.textContent="Kesihatan Sistem: Memantau kependaman perkhidmatan kontena, broker MQTT, dan enjin inferens AI.";break}Ni()}v.forEach(I=>{I.addEventListener("click",()=>{const X=I.getAttribute("data-tab");X&&Z(X)})});function rt(I=null){Me.playClick();const X=f.classList.contains("hidden");(I!==null?I:X)?(f.classList.remove("hidden"),document.body.classList.add("hud-open"),_&&(_.textContent="👁️ Panel")):(f.classList.add("hidden"),document.body.classList.remove("hud-open"),_&&(_.textContent="👁️ Panel"))}g&&g.addEventListener("click",()=>rt()),m&&m.addEventListener("click",()=>rt(!1));const wt=document.getElementById("btn-mobile-hud");wt&&wt.addEventListener("click",()=>rt(!0)),T.addEventListener("click",()=>{Me.playClick();const I=t.toggleTheme();C.textContent=I?"☀️":"🌙",kt(I?"🌃":"☀️",I?"MOD CYBER-NIGHT AKTIF":"MOD SIANG DIAKTIFKAN",I?"Lampu neon futuristik dan grid bercahaya aktif!":"Pencahayaan matahari kartun terang.")}),M.addEventListener("click",()=>{const I=Me.toggle();S.textContent=I?"🔊":"🔇",Me.playClick()}),L.addEventListener("click",()=>{Ot("island"),w.forEach(I=>I.classList.remove("active")),document.querySelector('.cam-btn[data-view="island"]').classList.add("active")});let Et=null;function kt(I,X,ht,U="normal"){clearTimeout(Et),c.textContent=I,h.textContent=X,d.textContent=ht,l.className="comic-toast "+(U==="danger"?"danger":U==="success"?"success":""),l.classList.remove("hidden"),Et=setTimeout(()=>{l.classList.add("hidden")},4500)}const me=document.getElementById("full-39-bus-matrix"),Be=document.getElementById("bic-title"),se=document.getElementById("bic-v"),un=document.getElementById("bic-p"),Rn=document.getElementById("bic-q"),$s=document.getElementById("bic-status"),Pr=document.getElementById("bic-desc");me&&xt.buses39&&(me.innerHTML="",xt.buses39.forEach(I=>{const X=document.createElement("div");X.className=`bus-cell ${I.isGen?"gen":"load"} ${I.num===32?"target active":""}`,X.innerHTML=`
        <span class="bc-num">B${I.num}</span>
        <span class="bc-type">${I.isGen?"GEN":"LOAD"}</span>
      `,X.title=`Bas #${I.num}: ${I.role}`,X.addEventListener("click",()=>{Me.playClick(),document.querySelectorAll(".bus-cell").forEach(ht=>ht.classList.remove("active")),X.classList.add("active"),Be.textContent=`⚡ Bas #${I.num} — ${I.role}`,se.textContent=`${I.voltage.toFixed(3)} p.u.`,un.textContent=`${I.power} MW`,Rn.textContent=`${I.qPower} MVAR`,$s.textContent=I.status,$s.className=I.status==="NORMAL"?"green":"red",Pr.innerHTML=I.num===32?"🌟 <strong>Bas #32</strong> ialah stesen utama dalam IEEE 39-Bus yang menempatkan Penjana 3 dan Pencawang Pengagihan Utama!":`Bas #${I.num} adalah nod ${I.type} dalam rangkaian New England IEEE 39-Bus.`,I.num===32?Ot("substation"):I.num>=30?Ot("generators"):(I.num===5||I.num===8)&&Ot("city")}),me.appendChild(X)}));const kn=document.getElementById("sld-bus32");kn&&kn.addEventListener("click",()=>{Me.playClick();const I=document.querySelector(".bus-cell.target");I&&I.click()});const ls=document.getElementById("forensics-terminal"),Di=document.getElementById("log-search-input"),Zs=document.getElementById("btn-clear-logs");function hi(I=""){if(!ls)return;const X=xt.logs.filter(ht=>!I||ht.msg.toLowerCase().includes(I.toLowerCase()));ls.innerHTML=X.map(ht=>`
      <div class="log-line">
        <span class="log-time">[${ht.time}]</span>
        <span class="log-msg ${ht.type}">${ht.msg}</span>
      </div>
    `).join("")}Di&&Di.addEventListener("input",I=>{hi(I.target.value)}),Zs&&Zs.addEventListener("click",()=>{xt.logs=[],hi()});const Js=document.getElementById("services-table");Js&&xt.services&&(Js.innerHTML=xt.services.map(I=>`
      <div class="service-row">
        <div class="sr-left">
          <strong>${I.name}</strong>
          <span>${I.role}</span>
        </div>
        <div class="sr-right">
          <span class="sr-lat">${I.latency}</span>
          <span class="badge-tag green">${I.status}</span>
        </div>
      </div>
    `).join("")),document.querySelectorAll("[data-attack]").forEach(I=>{I.addEventListener("click",()=>{const X=I.getAttribute("data-attack");Me.playAttackSiren(),Me.playGlitch(),X==="fdi"?(xt.triggerAttack(Je.FDI),t.spawnCyberAttack("fdi"),u.textContent="Grrr! Hidung saya terhidu data palsu! Serangan FDI di Bas #32! Model PINN kesan residu Kirchhoff 0.284 MW!",kt("⚡","SERANGAN FDI DILANCARKAN","Data penderia Bus #32 dimanipulasi! Voltan dilaporkan 1.185 pu (Palsu).","danger"),Ot("substation")):X==="ddos"?(xt.triggerAttack(Je.DDOS),t.spawnCyberAttack("ddos"),u.textContent="Grrr! Banjir trafik DDoS! Protokol MQTT dihujani paket palsu! Ekor saya tegak tanda amaran!",kt("👾","BANJIR DDOS MENGGANAS","Kelewatan penderia SCADA/MQTT melebihi 1,450ms!","danger"),Ot("substation")):X==="ransom"?(xt.triggerAttack(Je.RANSOM),t.spawnCyberAttack("ransom"),u.textContent="Auuu! Ransomware mengunci pemutus litar Feeder #4! Lengan suis terbuka paksa!",kt("🔒","RANSOMWARE MENGUNCI LITAR","Feeder #4 terkunci! Arahan berniat jahat dikesan oleh AI Guard.","danger"),Ot("substation")):X==="trip"&&(xt.triggerAttack(Je.TRIP),t.spawnCyberAttack("trip"),u.textContent="Woof bahaya! Talian 14-15 terputus! Kontinjensi N-1 dikesan, aliran kuasa melencong ke talian lain!",kt("💥","KONTINJENSI N-1 (LINE TRIP)","Talian penghantaran terputus! Frekuensi menjunam ke 59.22 Hz.","danger"),Ot("generators"))})});async function Ii(){if(!xt.isRecovering){if(Me.playShield(),u.textContent="Woof! Memulakan Protokol Pemulihan Level 6: Mengasingkan arahan palsu, mengira aliran kuasa AC, dan menutup suis...",t.pypyRobot&&t.pypyRobot.userData.shield){const I=t.pypyRobot.userData.shield;zn.fromTo(I.scale,{x:.1,y:.1,z:.1},{x:1.6,y:1.6,z:1.6,duration:1,ease:"elastic.out(1, 0.4)"})}await xt.executeRecoveryPipeline(I=>{const X=document.getElementById(`step-box-${I.id}`);X&&(X.className="l6-step-box "+(I.done?"done ":"")+(I.active?"active ":""))}),Me.playVictory(),t.clearCyberBugs(),Vf({particleCount:90,spread:75,origin:{y:.6}}),t.pypyRobot&&t.pypyRobot.userData.shield&&zn.to(t.pypyRobot.userData.shield.scale,{x:.001,y:.001,z:.001,duration:1.5,delay:1}),u.textContent="Woof woof! BERJAYA! Konsensus PPO & DQN bersama pengesah fizik AC Newton-Raphson pulihkan grid! 🐾⚡",kt("🛡️","GRID SECURED (LEVEL 6)","Semua 39 Bas, 10 Generator, dan Pemutus Litar disahkan stabil pada 60.00 Hz!","success")}}const Qs=document.getElementById("btn-tab-recover");Qs&&Qs.addEventListener("click",Ii),G.addEventListener("click",async()=>{Me.playClick(),kt("🎬","TUR PANDUAN BERMULA","Memulakan demonstrasi sistem pintar IEEE 39-Bus..."),Z("overview"),await new Promise(X=>setTimeout(X,3500)),Z("grid"),await new Promise(X=>setTimeout(X,4e3)),Z("simulation"),await new Promise(X=>setTimeout(X,2e3));const I=document.querySelector('[data-attack="fdi"]');I&&I.click(),await new Promise(X=>setTimeout(X,4500)),Z("detection"),await new Promise(X=>setTimeout(X,4e3)),Z("recovery"),await new Promise(X=>setTimeout(X,2500)),Ii()}),Kt.addEventListener("click",()=>{Me.playClick(),u.textContent="Woof woof! Gembira dapat berkhidmat! PYPY si jurutera siber comel bersedia jaga keselamatan grid! 🐶🦺⚡",t.pypyRobot&&(zn.to(t.pypyRobot.rotation,{y:t.pypyRobot.rotation.y+Math.PI*2,duration:.8,ease:"back.out(2)"}),t.pypyRobot.userData.tail&&zn.to(t.pypyRobot.userData.tail.rotation,{y:Math.PI/2.5,yoyo:!0,repeat:5,duration:.1}))}),O.addEventListener("click",()=>{Me.playClick(),u.textContent="Hidung saya menghidu... Pengesahan Fizik PINN: Aliran arus KCL normal! Residu 0.002 MW (Pematuhan 100%)! 🐾",kt("🐶🔍","DERIA PINN PYPY","Hukum Kirchhoff dipatuhi di kesemua 39 nod bas tanpa anomali.")}),oe.addEventListener("click",()=>{if(Me.playShield(),u.textContent="Auuuu! Topi putih keselamatan diikat rapi, Perisai Pertahanan AI diaktifkan melindungi grid!",t.pypyRobot&&t.pypyRobot.userData.shield){const I=t.pypyRobot.userData.shield;zn.fromTo(I.scale,{x:.1,y:.1,z:.1},{x:1.4,y:1.4,z:1.4,duration:.6,yoyo:!0,repeat:1,ease:"power2.out"})}});function Ni(){e.textContent=xt.frequency.toFixed(3)+" Hz",n.textContent=xt.totalLoad.toLocaleString()+" MW",i.textContent=(xt.aiTrust*100).toFixed(1)+"%",r.textContent=xt.currentAttack,xt.isCompromised?(a.textContent="AMARAN: SERANGAN AKTIF",o.className="status-indicator danger",i.className="tele-val highlight-red",r.className="tele-val highlight-red"):(a.textContent=xt.statusText,o.className="status-indicator normal",i.className="tele-val highlight-green",r.className="tele-val highlight-blue");const I=document.getElementById("ov-lstm-val"),X=document.getElementById("ov-gnn-val"),ht=document.getElementById("ov-stgnn-val"),U=document.getElementById("ov-pinn-val");I&&(I.textContent=`Risiko ${xt.aiModels.lstm.risk.toFixed(2)} (${xt.aiModels.lstm.status})`,I.className=xt.aiModels.lstm.anomalous?"red":"green"),X&&(X.textContent=`Risiko ${xt.aiModels.gnn.risk.toFixed(2)} (${xt.aiModels.gnn.status})`,X.className=xt.aiModels.gnn.anomalous?"red":"green"),ht&&(ht.textContent=`Risiko ${xt.aiModels.stgnn.risk.toFixed(2)} (${xt.aiModels.stgnn.status})`,ht.className=xt.aiModels.stgnn.anomalous?"red":"green"),U&&(U.textContent=`Residu ${xt.aiModels.pinn.residual.toFixed(3)} MW (${xt.aiModels.pinn.status})`,U.className=xt.aiModels.pinn.anomalous?"red":"green");const vt=document.getElementById("mf-lstm"),Dt=document.getElementById("mf-gnn"),ct=document.getElementById("mf-stgnn"),bt=document.getElementById("mf-pinn");vt&&(vt.style.width=`${Math.min(100,xt.aiModels.lstm.risk*100)}%`,vt.className="meter-fill "+(xt.aiModels.lstm.anomalous?"danger":"")),Dt&&(Dt.style.width=`${Math.min(100,xt.aiModels.gnn.risk*100)}%`,Dt.className="meter-fill "+(xt.aiModels.gnn.anomalous?"danger":"")),ct&&(ct.style.width=`${Math.min(100,xt.aiModels.stgnn.risk*100)}%`,ct.className="meter-fill "+(xt.aiModels.stgnn.anomalous?"danger":"")),bt&&(bt.style.width=`${Math.min(100,xt.aiModels.pinn.residual*300)}%`,bt.className="meter-fill "+(xt.aiModels.pinn.anomalous?"danger":""));const Ft=document.getElementById("dec-trust"),Ht=document.getElementById("dec-threat");Ft&&(Ft.textContent=`${(xt.aiTrust*100).toFixed(1)}%`),Ht&&(Ht.textContent=`${xt.threatScore.toFixed(2)} (${xt.isCompromised?"KRITIKAL":"Selamat"})`),ee(Lt,xt.frequency,xt.isCompromised),Yt(R,xt.totalLoad,xt.isCompromised),le(lt,xt.aiModels,xt.isCompromised),E&&(E.textContent=xt.frequency.toFixed(3)+" Hz"),W&&(W.textContent=xt.totalLoad.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})+" MW"),st&&(st.textContent=xt.isCompromised?`${xt.frequency.toFixed(2)} Hz AMARAN`:`${xt.frequency.toFixed(2)} Hz NORMAL`,st.className=xt.isCompromised?"badge-tag red":"badge-tag green");const Xt=document.getElementById("sld-bus32"),Vt=document.getElementById("sld-line-bus32");Xt&&(xt.isCompromised?Xt.classList.add("attacked"):Xt.classList.remove("attacked")),Vt&&(Vt.style.stroke=xt.isCompromised?"#ef4444":"#0284c7"),V(),hi(Di?Di.value:"")}xt.subscribe(Ni),t.onNodeClick=I=>{if(Me.playClick(),I==="bus32"){Z("grid");const X=document.querySelector(".bus-cell.target");X&&X.click()}else Z(I==="aiHub"?"decision":"grid")},Ni();const En=new URLSearchParams(window.location.search),cs=En.get("open"),Lr=En.get("tab"),b=En.get("attack"),B=En.get("live"),$=En.get("ws")||En.get("backend");cs==="1"||cs==="true"?rt(!0):cs==="0"||cs==="false"?rt(!1):window.innerWidth<=768?(f.classList.add("hidden"),document.body.classList.remove("hud-open")):document.body.classList.add("hud-open"),Lr&&Z(Lr),b&&(b==="fdi"?xt.triggerAttack(Je.FDI):b==="ddos"?xt.triggerAttack(Je.DDOS):b==="ransom"?xt.triggerAttack(Je.RANSOM):b==="trip"&&xt.triggerAttack(Je.TRIP),t&&t.spawnCyberAttack&&t.spawnCyberAttack(b),Ni());const j=En.get("tunnel")||En.get("scada");if(j){const I=j.startsWith("http")?j:`https://${j}`;localStorage.setItem("pypy_tunnel_url",I),Ct&&(Ct.value=I)}const z=En.get("scadamodal")||En.get("modal");if((z==="1"||z==="scada")&&Ut(),B==="1"||B==="true"||$){const I=$||localStorage.getItem("pypy_backend_url")||"ws://localhost:8000/ws";xt.connectLiveBackend(I)}});
