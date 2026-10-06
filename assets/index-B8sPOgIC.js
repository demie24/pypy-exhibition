(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function ii(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Hh(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_r={duration:.5,overwrite:!1,delay:0},Il,je,Te,Ln=1e8,ge=1/Ln,Ro=Math.PI*2,Td=Ro/4,wd=0,Wh=Math.sqrt,Ad=Math.cos,Cd=Math.sin,Ye=function(t){return typeof t=="string"},Re=function(t){return typeof t=="function"},li=function(t){return typeof t=="number"},Nl=function(t){return typeof t>"u"},Yn=function(t){return typeof t=="object"},ln=function(t){return t!==!1},Ul=function(){return typeof window<"u"},Fr=function(t){return Re(t)||Ye(t)},Xh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qe=Array.isArray,Rd=/random\([^)]+\)/g,Pd=/,\s*/g,mc=/(?:-?\.?\d|\.)+/gi,qh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ka=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yh=/[+-]=-?[.\d]+/,Ld=/[^,'"\[\]\s]+/gi,Dd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ae,zn,Po,Ol,wn={},xa={},Kh,jh=function(t){return(xa=Fs(t,wn))&&pn},Fl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},gr=function(t,e){return!e&&console.warn(t)},$h=function(t,e){return t&&(wn[t]=e)&&xa&&(xa[t]=e)||wn},vr=function(){return 0},Id={suppressEvents:!0,isStart:!0,kill:!1},ca={suppressEvents:!0,kill:!1},Nd={suppressEvents:!0},kl={},Ti=[],Lo={},Zh,yn={},Ba={},_c=30,ha=[],Bl="",zl=function(t){var e=t[0],n,i;if(Yn(e)||Re(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ha.length;i--&&!ha[i].targetTest(e););n=ha[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new xu(t[i],n)))||t.splice(i,1);return t},Zi=function(t){return t._gsap||zl(Dn(t))[0]._gsap},Jh=function(t,e,n){return(n=t[e])&&Re(n)?t[e]():Nl(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Le=function(t){return Math.round(t*1e5)/1e5||0},we=function(t){return Math.round(t*1e7)/1e7||0},Ps=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ud=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ya=function(){var t=Ti.length,e=Ti.slice(0),n,i;for(Lo={},Ti.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Vl=function(t){return!!(t._initted||t._startAt||t.add)},Qh=function(t,e,n,i){Ti.length&&!je&&ya(),t.render(e,n,!!(je&&e<0&&Vl(t))),Ti.length&&!je&&ya()},tu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ld).length<2?e:Ye(t)?t.trim():t},eu=function(t){return t},An=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Od=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Fs=function(t,e){for(var n in e)t[n]=e[n];return t},gc=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ma=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ur=function(t){var e=t.parent||Ae,n=t.keyframes?Od(Qe(t.keyframes)):An;if(ln(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Fd=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},nu=function(t,e,n,i,r){var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ra=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ri=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ji=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},kd=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Do=function(t,e,n,i){return t._startAt&&(je?t._startAt.revert(ca):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Bd=function s(t){return!t||t._ts&&s(t.parent)},vc=function(t){return t._repeat?ks(t._tTime,t=t.duration()+t._rDelay)*t:0},ks=function(t,e){var n=Math.floor(t=we(t/e));return t&&n===t?n-1:n},Sa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Pa=function(t){return t._end=we(t._start+(t._tDur/Math.abs(t._ts||t._rts||ge)||0))},La=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=we(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Pa(t),n._dirty||Ji(n,t)),t},iu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Sa(t.rawTime(),e),(!e._dur||wr(0,e.totalDuration(),n)-e._tTime>ge)&&e.render(n,!0)),Ji(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ge}},Hn=function(t,e,n,i){return e.parent&&Ri(e),e._start=we((li(n)?n:n||t!==Ae?Rn(t,n,e):t._time)+e._delay),e._end=we(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),nu(t,e,"_first","_last",t._sort?"_start":0),Io(e)||(t._recent=e),i||iu(t,e),t._ts<0&&La(t,t._tTime),t},su=function(t,e){return(wn.ScrollTrigger||Fl("scrollTrigger",e))&&wn.ScrollTrigger.create(e,t)},ru=function(t,e,n,i,r){if(Hl(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zh!==Sn.frame)return Ti.push(t),t._lazy=[r,i],1},zd=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Io=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Vd=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&zd(t)&&!(!t._initted&&Io(t))||(t._ts<0||t._dp._ts<0)&&!Io(t))?0:1,o=t._rDelay,l=0,c,h,d;if(o&&t._repeat&&(l=wr(0,t._tDur,e),h=ks(l,o),t._yoyo&&h&1&&(a=1-a),h!==ks(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||je||i||t._zTime===ge||!e&&t._zTime){if(!t._initted&&ru(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ge:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Do(t,e,n,!0),t._onUpdate&&!n&&En(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&En(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ri(t,1),!n&&!je&&(En(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Gd=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Bs=function(t,e,n,i){var r=t._repeat,a=we(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:we(a*(r+1)+t._rDelay*r):a,o>0&&!i&&La(t,t._tTime=t._tDur*o),t.parent&&Pa(t),n||Ji(t.parent,t),t},xc=function(t){return t instanceof on?Ji(t):Bs(t,t._dur)},Hd={_start:0,endTime:vr,totalDuration:vr},Rn=function s(t,e,n){var i=t.labels,r=t._recent||Hd,a=t.duration()>=Ln?r.endTime(!1):t._dur,o,l,c;return Ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Qe(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},dr=function(t,e,n){var i=li(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;a.immediateRender=ln(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Ue(e[0],a,e[r+1])},Ni=function(t,e){return t||t===0?e(t):e},wr=function(t,e,n){return n<t?t:n>e?e:n},Je=function(t,e){return!Ye(t)||!(e=Dd.exec(t))?"":e[1]},Wd=function(t,e,n){return Ni(n,function(i){return wr(t,e,i)})},No=[].slice,au=function(t,e){return t&&Yn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yn(t[0]))&&!t.nodeType&&t!==zn},Xd=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ye(i)&&!e||au(i,1)?(r=n).push.apply(r,Dn(i)):n.push(i)})||n},Dn=function(t,e,n){return Te&&!e&&Te.selector?Te.selector(t):Ye(t)&&!n&&(Po||!zs())?No.call((e||Ol).querySelectorAll(t),0):Qe(t)?Xd(t,n):au(t)?No.call(t,0):t?[t]:[]},Uo=function(t){return t=Dn(t)[0]||gr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Dn(e,n.querySelectorAll?n:n===t?gr("Invalid scope")||Ol.createElement("div"):t)}},ou=function(t){return t.sort(function(){return .5-Math.random()})},lu=function(t){if(Re(t))return t;var e=Yn(t)?t:{each:t},n=Qi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,d=i;return Ye(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||e).length,m=a[_],p,x,y,v,A,w,T,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,Ln])[1],!M){for(T=-Ln;T<(T=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=a[_]=[],p=l?Math.min(M,_)*h-.5:i%M,x=M===Ln?0:l?_*d/M-.5:i/M|0,T=0,C=Ln,w=0;w<_;w++)y=w%M-p,v=x-(w/M|0),m[w]=A=c?Math.abs(c==="y"?v:y):Wh(y*y+v*v),A>T&&(T=A),A<C&&(C=A);i==="random"&&ou(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Je(e.amount||e.each)||0,n=n&&_<0?rf(n):n}return _=(m[u]-m.min)/m.max||0,we(m.b+(n?n(_):_)*m.v)+m.u}},Oo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=we(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(li(n)?0:Je(n))}},cu=function(t,e){var n=Qe(t),i,r;return!n&&Yn(t)&&(i=n=t.radius||Ln,t.values?(t=Dn(t.values),(r=!li(t[0]))&&(i*=i)):t=Oo(t.increment)),Ni(e,n?Re(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Ln,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-o,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:a,r||h===a||li(a)?h:h+Je(a)}:Oo(t))},hu=function(t,e,n,i){return Ni(Qe(t)?!e:n===!0?!!(n=0):!i,function(){return Qe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},qd=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Yd=function(t,e){return function(n){return t(parseFloat(n))+(e||Je(n))}},Kd=function(t,e,n){return du(t,e,0,1,n)},uu=function(t,e,n){return Ni(n,function(i){return t[~~e(i)]})},jd=function s(t,e,n){var i=e-t;return Qe(t)?uu(t,s(0,t.length),e):Ni(n,function(r){return(i+(r-t)%i)%i+t})},$d=function s(t,e,n){var i=e-t,r=i*2;return Qe(t)?uu(t,s(0,t.length-1),e):Ni(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},xr=function(t){return t.replace(Rd,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Pd);return hu(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},du=function(t,e,n,i,r){var a=e-t,o=i-n;return Ni(r,function(l){return n+((l-t)/a*o||0)})},Zd=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Ye(t),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Qe(t)&&!Qe(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=e}else i||(t=Fs(Qe(t)?[]:{},t));if(!h){for(l in e)Gl.call(o,t,l,"get",e[l]);r=function(g){return ql(g,o)||(a?t.p:t)}}}return Ni(n,r)},yc=function(t,e,n){var i=t.labels,r=Ln,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},En=function(t,e,n){var i=t.vars,r=i[e],a=Te,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ti.length&&ya(),o&&(Te=o),h=l?r.apply(c,l):r.call(c),Te=a,h},or=function(t){return Ri(t),t.scrollTrigger&&t.scrollTrigger.kill(!!je),t.progress()<1&&En(t,"onInterrupt"),t},ws,fu=[],pu=function(t){if(t)if(t=!t.name&&t.default||t,Ul()||t.headless){var e=t.name,n=Re(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:vr,render:ql,add:Gl,kill:mf,modifier:pf,rawVars:0},a={targetTest:0,get:0,getSetter:Xl,aliases:{},register:0};if(zs(),t!==i){if(yn[e])return;An(i,An(Ma(t,r),a)),Fs(i.prototype,Fs(r,Ma(t,a))),yn[i.prop=e]=i,t.targetTest&&(ha.push(i),kl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}$h(e,i),t.register&&t.register(pn,i,hn)}else fu.push(t)},_e=255,lr={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},za=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*_e+.5|0},mu=function(t,e,n){var i=t?li(t)?[t>>16,t>>8&_e,t&_e]:0:lr.black,r,a,o,l,c,h,d,u,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),lr[t])i=lr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&_e,i&_e,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&_e,t&_e]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(mc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=za(l+1/3,r,a),i[1]=za(l,r,a),i[2]=za(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(qh),n&&i.length<4&&(i[3]=1),i}else i=t.match(mc)||lr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/_e,a=i[1]/_e,o=i[2]/_e,d=Math.max(r,a,o),u=Math.min(r,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(a-o)/f+(a<o?6:0):d===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},_u=function(t){var e=[],n=[],i=-1;return t.split(wi).forEach(function(r){var a=r.match(Ts)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Mc=function(t,e,n){var i="",r=(t+i).match(wi),a=e?"hsla(":"rgba(",o=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=mu(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=_u(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(wi,"1").split(Ts),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(wi),d=c.length-1;o<d;o++)i+=c[o]+r[o];return i+c[d]},wi=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in lr)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Jd=/hsl[a]?\(/,gu=function(t){var e=t.join(" "),n;if(wi.lastIndex=0,wi.test(e))return n=Jd.test(e),t[1]=Mc(t[1],n),t[0]=Mc(t[0],n,_u(t[1])),!0},yr,Sn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,d,u,f,g=function _(m){var p=s()-i,x=m===!0,y,v,A,w;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,y=A-a,(y>0||x)&&(w=++d.frame,u=A-d.time*1e3,d.time=A=A/1e3,a+=y+(y>=r?4:r-y),v=1),x||(l=c(_)),v)for(f=0;f<o.length;f++)o[f](A,u,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Kh&&(!Po&&Ul()&&(zn=Po=window,Ol=zn.document||{},wn.gsap=pn,(zn.gsapVersions||(zn.gsapVersions=[])).push(pn.version),jh(xa||zn.GreenSockGlobals||!zn.gsap&&zn||{}),fu.forEach(pu)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},yr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),yr=0,c=vr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=d.time*1e3+r},add:function(m,p,x){var y=p?function(v,A,w,T){m(v,A,w,T),d.remove(y)}:m;return d.remove(m),o[x?"unshift":"push"](y),zs(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),zs=function(){return!yr&&Sn.wake()},ne={},Qd=/^[\d.\-M][\d.\-,\s]/,tf=/["']/g,ef=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(tf,"").trim():+c,i=l.substr(o+1).trim();return e},nf=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},sf=function(t){var e=(t+"").split("("),n=ne[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ef(e[1])]:nf(t).split(",").map(tu)):ne._CE&&Qd.test(t)?ne._CE("",t):n},rf=function(t){return function(e){return 1-t(1-e)}},Qi=function(t,e){return t&&(Re(t)?t:ne[t]||sf(t))||e},as=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return cn(t,function(o){ne[o]=wn[o]=r,ne[a=o.toLowerCase()]=n;for(var l in r)ne[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ne[o+"."+l]=r[l]}),r},vu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Va=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Ro*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Cd((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:vu(o);return r=Ro/r,l.config=function(c,h){return s(t,c,h)},l},Ga=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:vu(n);return i.config=function(r){return s(t,r)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;as(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ne.Linear.easeNone=ne.none=ne.Linear.easeIn;as("Elastic",Va("in"),Va("out"),Va());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};as("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);as("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});as("Circ",function(s){return-(Wh(1-s*s)-1)});as("Sine",function(s){return s===1?1:-Ad(s*Td)+1});as("Back",Ga("in"),Ga("out"),Ga());ne.SteppedEase=ne.steps=wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ge;return function(o){return((i*wr(0,a,o)|0)+r)*n}}};_r.ease=ne["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Bl+=s+","+s+"Params,"});var xu=function(t,e){this.id=wd++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Jh,this.set=e?e.getSetter:Xl},Mr=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bs(this,+e.duration,1,1),this.data=e.data,Te&&(this._ctx=Te,Te.data.push(this)),yr||Sn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(zs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(La(this,n),!r._dp||r.parent||iu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ge||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ks(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ge?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Sa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ge?0:this._rts,this.totalTime(wr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Pa(this),kd(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ge&&(this._tTime-=ge)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=we(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Nd);var i=je;return je=n,Vl(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),je=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Rn(this,n),ln(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i)),this._dur||(this._zTime=-ge),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ge,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ge)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Re(n)?n:eu,l=function(){var h=i.then;i.then=null,r&&r(),Re(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){or(this)},s})();An(Mr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ge,_prom:0,_ps:!1,_rts:1});var on=(function(s){Hh(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ln(n.sortChildren),Ae&&Hn(n.parent||Ae,ii(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&su(ii(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return dr(0,arguments,this),this},e.from=function(i,r,a){return dr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return dr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,ur(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ue(i,r,Rn(this,a),1),this},e.call=function(i,r,a){return Hn(this,Ue.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ue(i,a,Rn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,ur(a).immediateRender=ln(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,d){return o.startAt=a,ur(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,r,o,l,c,h,d)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:we(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,m,p,x,y,v,A,w,T;if(this!==Ae&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,v=this._start,y=this._ts,p=!y,d&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(u=we(h%m),h===l?(_=this._repeat,u=c):(A=we(h/m),_=~~A,_&&_===A&&(u=c,_--),u>c&&(u=c)),A=ks(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(u=c-u,T=1),_!==A&&!this._lock){var C=w&&A&1,M=C===(w&&_&1);if(_<A&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:we(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Gd(this,we(o),we(u)),x&&(h-=u-(u=x._start))),this._tTime=h,this._time=u,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!A&&(En(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,a),u!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=-ge);break}}f=g}else{f=this._last;for(var S=i<0?i:u;f;){if(g=f._prev,(f._act||S<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,r,a||je&&Vl(f)),u!==this._time||!this._ts&&!p){x=0,g&&(h+=this._zTime=S?-ge:ge);break}}f=g}}if(x&&!r&&(this.pause(),x.render(u>=o?0:-ge)._zTime=u>=o?1:-1,this._ts))return this._start=v,Pa(this),this.render(i,r,a);this._onUpdate&&!r&&En(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ri(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(En(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(li(r)||(r=Rn(this,r,i)),!(i instanceof Mr)){if(Qe(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ye(i))return this.addLabel(i,r);if(Re(i))i=Ue.delayedCall(0,i);else return this}return this!==i?Hn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ln);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ue?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Re(i)?this.killTweensOf(i):(i.parent===this&&Ra(this,i),i===this._recent&&(this._recent=this._last),Ji(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=we(Sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Rn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Ue.delayedCall(0,r||vr,a);return o.data="isPause",this._hasPause=1,Hn(this,o,Rn(this,i))},e.removePause=function(i){var r=this._first;for(i=Rn(this,i);r;)r._start===i&&r.data==="isPause"&&Ri(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Si!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Dn(i),l=this._first,c=li(r),h;l;)l instanceof Ue?Ud(l._targets,o)&&(c?(!Si||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Rn(a,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=Ue.to(a,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ge,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Bs(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},r));return u?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,An({startAt:{time:Rn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),yc(this,Rn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),yc(this,Rn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ge)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=we(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Ji(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ji(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Ln,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Hn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=we(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Bs(a,a===Ae&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ae._ts&&(Qh(Ae,Sa(i,Ae)),Zh=Sn.frame),Sn.frame>=_c){_c+=Tn.autoSleep||120;var r=Ae._first;if((!r||!r._ts)&&Tn.autoSleep&&Sn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Sn.sleep()}}},t})(Mr);An(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var af=function(t,e,n,i,r,a,o){var l=new hn(this._pt,t,e,0,1,Tu,null,r),c=0,h=0,d,u,f,g,_,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=xr(i)),a&&(x=[n,i],a(x,t,e),n=x[0],i=x[1]),u=n.match(ka)||[];d=ka.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Ps(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=ka.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Yh.test(i)||p)&&(l.e=0),this._pt=l,l},Gl=function(t,e,n,i,r,a,o,l,c,h){Re(i)&&(i=i(r||0,t,a));var d=t[e],u=n!=="get"?n:Re(d)?c?t[e.indexOf("set")||!Re(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Re(d)?c?uf:Eu:Wl,g;if(Ye(i)&&(~i.indexOf("random(")&&(i=xr(i)),i.charAt(1)==="="&&(g=Ps(u,i)+(Je(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Fo)return!isNaN(u*i)&&i!==""?(g=new hn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?ff:bu,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Fl(e,i),af.call(this,t,e,u,i,f,l||Tn.stringFilter,c))},of=function(t,e,n,i,r){if(Re(t)&&(t=fr(t,r,e,n,i)),!Yn(t)||t.style&&t.nodeType||Qe(t)||Xh(t))return Ye(t)?fr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=fr(t[o],r,e,n,i);return a},yu=function(t,e,n,i,r,a){var o,l,c,h;if(yn[t]&&(o=new yn[t]).init(r,o.rawVars?e[t]:of(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new hn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==ws))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Si,Fo,Hl=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,x=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!Il,v=t.timeline,A=i.easeReverse||d,w,T,C,M,S,L,G,k,Y,$,H,J,X;if(v&&(!u||!r)&&(r="none"),t._ease=Qi(r,_r.ease),t._rEase=A&&(Qi(A)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||u&&!i.stagger){if(k=m[0]?Zi(m[0]).harness:0,J=k&&i[k.prop],w=Ma(i,kl),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?ca:Id),_._lazy=0),a){if(Ri(t._startAt=Ue.set(m,An({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ln(l),startAt:null,delay:0,onUpdate:c&&function(){return En(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je||!o&&!f)&&t._startAt.revert(ca),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),C=An({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ln(l),immediateRender:o,stagger:0,parent:p},w),J&&(C[k.prop]=J),Ri(t._startAt=Ue.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je?t._startAt.revert(ca):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ge,ge);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ln(l)||l&&!g,T=0;T<m.length;T++){if(S=m[T],G=S._gsap||zl(m)[T]._gsap,t._ptLookup[T]=$={},Lo[G.id]&&Ti.length&&ya(),H=x===m?T:x.indexOf(S),k&&(Y=new k).init(S,J||w,t,H,x)!==!1&&(t._pt=M=new hn(t._pt,S,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(ft){$[ft]=M}),Y.priority&&(L=1)),!k||J)for(C in w)yn[C]&&(Y=yu(C,w,t,H,S,x))?Y.priority&&(L=1):$[C]=M=Gl.call(t,S,C,"get",w[C],H,x,0,i.stringFilter);t._op&&t._op[T]&&t.kill(S,t._op[T]),y&&t._pt&&(Si=t,Ae.killTweensOf(S,$,t.globalTime(e)),X=!t.parent,Si=0),t._pt&&l&&(Lo[G.id]=1)}L&&wu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,u&&e<=0&&v.render(Ln,!0,!0)},lf=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Fo=1,t.vars[e]="+=0",Hl(t,o),Fo=0,l?gr(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Le(n)+Je(d.e)),d.b&&(d.b=h.s+Je(d.b))},cf=function(t,e){var n=t[0]?Zi(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=Fs({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},hf=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Qe(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},fr=function(t,e,n,i,r){return Re(t)?t.call(e,n,i,r):Ye(t)&&~t.indexOf("random(")?xr(t):t},Mu=Bl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Su={};cn(Mu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Su[s]=1});var Ue=(function(s){Hh(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ur(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Ae,x=(Qe(n)||Xh(n)?li(n[0]):"length"in i)?[n]:Dn(n),y,v,A,w,T,C,M,S;if(o._targets=x.length?zl(x):gr("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||Fr(c)||Fr(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(y=o.timeline=new on({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),y.kill(),y.parent=y._dp=ii(o),y._start=0,u||Fr(c)||Fr(h)){if(w=x.length,M=u&&lu(u),Yn(u))for(T in u)~Mu.indexOf(T)&&(S||(S={}),S[T]=u[T]);for(v=0;v<w;v++)A=Ma(i,Su),A.stagger=0,L&&(A.easeReverse=L),S&&Fs(A,S),C=x[v],A.duration=+fr(c,ii(o),v,C,x),A.delay=(+fr(h,ii(o),v,C,x)||0)-o._delay,!u&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),y.to(C,A,M?M(v,C,x):0),y._ease=ne.none;y.duration()?c=h=0:o.timeline=0}else if(g){ur(An(y.vars.defaults,{ease:"none"})),y._ease=Qi(g.ease||i.ease||"none");var G=0,k,Y,$;if(Qe(g))g.forEach(function(H){return y.to(x,H,">")}),y.duration();else{A={};for(T in g)T==="ease"||T==="easeEach"||hf(T,g[T],A,g.easeEach);for(T in A)for(k=A[T].sort(function(H,J){return H.t-J.t}),G=0,v=0;v<k.length;v++)Y=k[v],$={ease:Y.e,duration:(Y.t-(v?k[v-1].t:0))/100*c},$[T]=Y.v,y.to(x,$,G),G+=$.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return f===!0&&!Il&&(Si=ii(o),Ae.killTweensOf(x),Si=0),Hn(p,ii(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===we(p._time)&&ln(d)&&Bd(ii(o))&&p.data!=="nested")&&(o._tTime=-ge,o.render(Math.max(0,-h)||0)),m&&su(ii(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ge&&!h?l:i<ge?0:i,u,f,g,_,m,p,x,y;if(!c)Vd(this,i,r,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(u=we(d%_),d===l?(g=this._repeat,u=c):(m=we(d/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(u=c-u),m=ks(this._tTime,_),u===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(we(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(ru(this,h?i:u,a,r,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var A=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(v?-1:1)/A:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!r&&!m&&(En(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Do(this,i,r,a),En(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&En(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Do(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ri(this,1),!r&&!(h&&!o)&&(d||o||p)&&(En(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){yr||Sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Hl(this,c),h=this._ease(c/this._dur),lf(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(La(this,0),this.parent||nu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?or(this):this.scrollTrigger&&this.scrollTrigger.kill(!!je),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Si&&Si.vars.overwrite!==!0)._first||or(this),this.parent&&a!==this.timeline.totalDuration()&&Bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Dn(i):o,c=this._ptLookup,h=this._pt,d,u,f,g,_,m,p;if((!r||r==="all")&&Fd(o,l))return r==="all"&&(this._pt=0),or(this);for(d=this._op=this._op||[],r!=="all"&&(Ye(r)&&(_={},cn(r,function(x){return _[x]=1}),r=_),r=cf(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],r==="all"?(d[p]=r,g=u,f={}):(f=d[p]=d[p]||{},g=r);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ra(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&or(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return dr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return dr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Ae.killTweensOf(i,r,a)},t})(Mr);An(Ue.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(s){Ue[s]=function(){var t=new on,e=No.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Wl=function(t,e,n){return t[e]=n},Eu=function(t,e,n){return t[e](n)},uf=function(t,e,n,i){return t[e](i.fp,n)},df=function(t,e,n){return t.setAttribute(e,n)},Xl=function(t,e){return Re(t[e])?Eu:Nl(t[e])&&t.setAttribute?df:Wl},bu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ff=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Tu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ql=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},pf=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},mf=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ra(this,e,"_pt"):e.dep||(n=1),e=i;return!n},_f=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},wu=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},hn=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||bu,this.d=l||this,this.set=c||Wl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=_f,this.m=n,this.mt=r,this.tween=i},s})();cn(Bl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return kl[s]=1});wn.TweenMax=wn.TweenLite=Ue;wn.TimelineLite=wn.TimelineMax=on;Ae=new on({sortChildren:!1,defaults:_r,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=gu;var ts=[],ua={},gf=[],Sc=0,vf=0,Ha=function(t){return(ua[t]||gf).map(function(e){return e()})},ko=function(){var t=Date.now(),e=[];t-Sc>2&&(Ha("matchMediaInit"),ts.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=zn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ha("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sc=t,Ha("matchMedia"))},Au=(function(){function s(e,n){this.selector=n&&Uo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vf++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Re(n)&&(r=i,i=n,n=Re);var a=this,o=function(){var c=Te,h=a.selector,d;return c&&c!==a&&c.data.push(a),r&&(a.selector=Uo(r)),Te=a,d=i.apply(a,arguments),Re(d)&&a._r.push(d),Te=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Re?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Te;Te=null,n(this),Te=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ue&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ue)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ts.length;a--;)ts[a].id===this.id&&ts.splice(a,1)},t.revert=function(n){this.kill(n||{})},s})(),xf=(function(){function s(e){this.contexts=[],this.scope=e,Te&&Te.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Yn(n)||(n={matches:n});var a=new Au(0,r||this.scope),o=a.conditions={},l,c,h;Te&&!a.selector&&(a.selector=Te.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=zn.matchMedia(n[c]),l&&(ts.indexOf(a)<0&&ts.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ko):l.addEventListener("change",ko)));return h&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Ea={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return pu(i)})},timeline:function(t){return new on(t)},getTweensOf:function(t,e){return Ae.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=Dn(t)[0]);var r=Zi(t||{}).get,a=n?eu:tu;return n==="native"&&(n=""),t&&(e?a((yn[e]&&yn[e].get||r)(t,e,n,i)):function(o,l,c){return a((yn[o]&&yn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Dn(t),t.length>1){var i=t.map(function(h){return pn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var a=yn[e],o=Zi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;ws._pt=0,d.init(t,n?h+n:h,ws,0,[t]),d.render(1,d),ws._pt&&ql(1,ws)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=pn.to(t,An((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return Ae.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Qi(t.ease,_r.ease)),gc(_r,t||{})},config:function(t){return gc(Tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!yn[o]&&!wn[o]&&gr(e+" effect requires "+o+" plugin.")}),Ba[e]=function(o,l,c){return n(Dn(o),An(l||{},r),c)},a&&(on.prototype[e]=function(o,l,c){return this.add(Ba[e](o,Yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ne[t]=Qi(e)},parseEase:function(t,e){return arguments.length?Qi(t,e):ne},getById:function(t){return Ae.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new on(t),i,r;for(n.smoothChildTiming=ln(t.smoothChildTiming),Ae.remove(n),n._dp=0,n._time=n._tTime=Ae._time,i=Ae._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ue&&i.vars.onComplete===i._targets[0]))&&Hn(n,i,i._start-i._delay),i=r;return Hn(Ae,n,0),n},context:function(t,e){return t?new Au(t,e):Te},matchMedia:function(t){return new xf(t)},matchMediaRefresh:function(){return ts.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ko()},addEventListener:function(t,e){var n=ua[t]||(ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ua[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:jd,wrapYoyo:$d,distribute:lu,random:hu,snap:cu,normalize:Kd,getUnit:Je,clamp:Wd,splitColor:mu,toArray:Dn,selector:Uo,mapRange:du,pipe:qd,unitize:Yd,interpolate:Zd,shuffle:ou},install:jh,effects:Ba,ticker:Sn,updateRoot:on.updateRoot,plugins:yn,globalTimeline:Ae,core:{PropTween:hn,globals:$h,Tween:Ue,Timeline:on,Animation:Mr,getCache:Zi,_removeLinkedListItem:Ra,reverting:function(){return je},context:function(t){return t&&Te&&(Te.data.push(t),t._ctx=Te),Te},suppressOverwrites:function(t){return Il=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ea[s]=Ue[s]});Sn.add(on.updateRoot);ws=Ea.to({},{duration:0});var yf=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Mf=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=yf(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Wa=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ye(r)&&(l={},cn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Mf(o,r)}}}},pn=Ea.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)je?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wa("roundProps",Oo),Wa("modifiers"),Wa("snap",cu))||Ea;Ue.version=on.version=pn.version="3.15.0";Kh=1;Ul()&&zs();ne.Power0;ne.Power1;ne.Power2;ne.Power3;ne.Power4;ne.Linear;ne.Quad;ne.Cubic;ne.Quart;ne.Quint;ne.Strong;ne.Elastic;ne.Back;ne.SteppedEase;ne.Bounce;ne.Sine;ne.Expo;ne.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ec,Ei,Ls,Yl,Ki,bc,Kl,Sf=function(){return typeof window<"u"},ci={},Wi=180/Math.PI,Ds=Math.PI/180,hs=Math.atan2,Tc=1e8,jl=/([A-Z])/g,Ef=/(left|right|width|margin|padding|x)/i,bf=/[\s,\(]\S/,Xn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Tf=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wf=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Af=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Cf=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Cu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ru=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Rf=function(t,e,n){return t.style[e]=n},Pf=function(t,e,n){return t.style.setProperty(e,n)},Lf=function(t,e,n){return t._gsap[e]=n},Df=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},If=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Nf=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Ce="transform",un=Ce+"Origin",Uf=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ci&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Xn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=si(i,o)}):this.tfm[t]=a.x?a[t]:si(i,t),t===un&&(this.tfm.zOrigin=a.zOrigin);else return Xn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(Ce)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=Ce}(r||e)&&this.props.push(t,e,r[t])},Pu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Of=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(jl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Kl(),(!r||!r.isStart)&&!n[Ce]&&(Pu(n),i.zOrigin&&n[un]&&(n[un]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lu=function(t,e){var n={target:t,props:[],revert:Of,save:Uf};return t._gsap||pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Du,zo=function(t,e){var n=Ei.createElementNS?Ei.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ei.createElement(t);return n&&n.style?n:Ei.createElement(t)},bn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(jl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Vs(e)||e,1)||""},wc="O,Moz,ms,Ms,Webkit".split(","),Vs=function(t,e,n){var i=e||Ki,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(wc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?wc[a]:"")+t},Vo=function(){Sf()&&window.document&&(Ec=window,Ei=Ec.document,Ls=Ei.documentElement,Ki=zo("div")||{style:{}},zo("div"),Ce=Vs(Ce),un=Ce+"Origin",Ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Du=!!Vs("perspective"),Kl=pn.core.reverting,Yl=1)},Ac=function(t){var e=t.ownerSVGElement,n=zo("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ls.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ls.removeChild(n),r},Cc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Iu=function(t){var e,n;try{e=t.getBBox()}catch{e=Ac(t),n=1}return e&&(e.width||e.height)||n||(e=Ac(t)),e&&!e.width&&!e.x&&!e.y?{x:+Cc(t,["x","cx","x1"])||0,y:+Cc(t,["y","cy","y1"])||0,width:0,height:0}:e},Nu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Iu(t))},Pi=function(t,e){if(e){var n=t.style,i;e in ci&&e!==un&&(e=Ce),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(jl,"-$1").toLowerCase())):n.removeAttribute(e)}},bi=function(t,e,n,i,r,a){var o=new hn(t._pt,e,n,0,1,a?Ru:Cu);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Rc={deg:1,rad:1,turn:1},Ff={grid:1,flex:1},Li=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ki.style,l=Ef.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,m,p;if(i===a||!r||Rc[i]||Rc[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),p=t.getCTM&&Nu(t),(f||a==="%")&&(ci[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Le(f?r/g*d:r/100*g);if(o[l?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ei||!_.appendChild)&&(_=Ei.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Sn.time&&!m.uncache)return Le(r/m.width*d);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=d+i,g=t[h],x?t.style[e]=x:Pi(t,e)}else(f||a==="%")&&!Ff[bn(_,"display")]&&(o.position=bn(t,"position")),_===t&&(o.position="static"),_.appendChild(Ki),g=Ki[h],_.removeChild(Ki),o.position="absolute";return l&&f&&(m=Zi(_),m.time=Sn.time,m.width=_[h]),Le(u?g*r/d:g&&r?d/g*r:0)},si=function(t,e,n,i){var r;return Yl||Vo(),e in Xn&&e!=="transform"&&(e=Xn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ci[e]&&e!=="transform"?(r=Er(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ta(bn(t,un))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ba[e]&&ba[e](t,e,n)||bn(t,e)||Jh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Li(t,e,r,n)+n:r},kf=function(t,e,n,i){if(!n||n==="none"){var r=Vs(e,t,1),a=r&&bn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=bn(t,"borderTopColor"))}var o=new hn(this._pt,t.style,e,0,1,Tu),l=0,c=0,h,d,u,f,g,_,m,p,x,y,v,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=bn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=bn(t,e)||i,_?t.style[e]=_:Pi(t,e)),h=[n,i],gu(h),n=h[0],i=h[1],u=n.match(Ts)||[],A=i.match(Ts)||[],A.length){for(;d=Ts.exec(i);)m=d[0],x=i.substring(l,d.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ps(f,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=Ts.lastIndex-y.length,y||(y=y||Tn.units[e]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(f=Li(t,e,_,y)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Ru:Cu;return Yh.test(i)&&(o.e=0),this._pt=o,o},Pc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bf=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Pc[n]||n,e[1]=Pc[i]||i,e.join(" ")},zf=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ci[o]&&(l=1,o=o==="transformOrigin"?un:Ce),Pi(n,o);l&&(Pi(n,Ce),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Er(n,1),a.uncache=1,Pu(i)))}},ba={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new hn(t._pt,e,n,0,0,zf);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Sr=[1,0,0,1,0,0],Uu={},Ou=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Lc=function(t){var e=bn(t,Ce);return Ou(e)?Sr:e.substr(7).match(qh).map(Le)},$l=function(t,e){var n=t._gsap||Zi(t),i=t.style,r=Lc(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Sr:r):(r===Sr&&!t.offsetParent&&t!==Ls&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Ls.appendChild(t)),r=Lc(t),l?i.display=l:Pi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Ls.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Go=function(t,e,n,i,r,a){var o=t._gsap,l=r||$l(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],x=l[5],y=e.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,w,T,C,M;n?l!==Sr&&(T=f*m-g*_)&&(C=v*(m/T)+A*(-_/T)+(_*x-m*p)/T,M=v*(-g/T)+A*(f/T)-(f*x-g*p)/T,v=C,A=M):(w=Iu(t),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),A=w.y+(~(y[1]||y[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(p=v-c,x=A-h,o.xOffset=d+(p*f+x*_)-p,o.yOffset=u+(p*g+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[un]="0px 0px",a&&(bi(a,o,"xOrigin",c,v),bi(a,o,"yOrigin",h,A),bi(a,o,"xOffset",d,o.xOffset),bi(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},Er=function(t,e){var n=t._gsap||new xu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=bn(t,un)||"0",h,d,u,f,g,_,m,p,x,y,v,A,w,T,C,M,S,L,G,k,Y,$,H,J,X,ft,I,P,ot,mt,V,K;return h=d=u=_=m=p=x=y=v=0,f=g=1,n.svg=!!(t.getCTM&&Nu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ce]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ce]!=="none"?l[Ce]:"")),i.scale=i.rotate=i.translate="none"),T=$l(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",J=""):J=!e&&t.getAttribute("data-svg-origin"),Go(t,J||c,!!J||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,w=n.yOrigin||0,T!==Sr&&(L=T[0],G=T[1],k=T[2],Y=T[3],h=$=T[4],d=H=T[5],T.length===6?(f=Math.sqrt(L*L+G*G),g=Math.sqrt(Y*Y+k*k),_=L||G?hs(G,L)*Wi:0,x=k||Y?hs(k,Y)*Wi+_:0,x&&(g*=Math.abs(Math.cos(x*Ds))),n.svg&&(h-=A-(A*L+w*k),d-=w-(A*G+w*Y))):(K=T[6],mt=T[7],I=T[8],P=T[9],ot=T[10],V=T[11],h=T[12],d=T[13],u=T[14],C=hs(K,ot),m=C*Wi,C&&(M=Math.cos(-C),S=Math.sin(-C),J=$*M+I*S,X=H*M+P*S,ft=K*M+ot*S,I=$*-S+I*M,P=H*-S+P*M,ot=K*-S+ot*M,V=mt*-S+V*M,$=J,H=X,K=ft),C=hs(-k,ot),p=C*Wi,C&&(M=Math.cos(-C),S=Math.sin(-C),J=L*M-I*S,X=G*M-P*S,ft=k*M-ot*S,V=Y*S+V*M,L=J,G=X,k=ft),C=hs(G,L),_=C*Wi,C&&(M=Math.cos(C),S=Math.sin(C),J=L*M+G*S,X=$*M+H*S,G=G*M-L*S,H=H*M-$*S,L=J,$=X),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Le(Math.sqrt(L*L+G*G+k*k)),g=Le(Math.sqrt(H*H+K*K)),C=hs($,H),x=Math.abs(C)>2e-4?C*Wi:0,v=V?1/(V<0?-V:V):0),n.svg&&(J=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ou(bn(t,Ce)),J&&t.setAttribute("transform",J))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Le(f),n.scaleY=Le(g),n.rotation=Le(_)+o,n.rotationX=Le(m)+o,n.rotationY=Le(p)+o,n.skewX=x+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[un]=Ta(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?Gf:Du?Fu:Vf,n.uncache=0,n},Ta=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xa=function(t,e,n){var i=Je(e);return Le(parseFloat(e)+parseFloat(Li(t,"x",n+"px",i)))+i},Vf=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Fu(t,e)},Oi="0deg",tr="0px",Fi=") ",Fu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(y&&(d!==Oi||h!==Oi)){var w=parseFloat(h)*Ds,T=Math.sin(w),C=Math.cos(w),M;w=parseFloat(d)*Ds,M=Math.cos(w),a=Xa(x,a,T*M*-y),o=Xa(x,o,-Math.sin(w)*-y),l=Xa(x,l,C*M*-y+y)}m!==tr&&(v+="perspective("+m+Fi),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(A||a!==tr||o!==tr||l!==tr)&&(v+=l!==tr||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Fi),c!==Oi&&(v+="rotate("+c+Fi),h!==Oi&&(v+="rotateY("+h+Fi),d!==Oi&&(v+="rotateX("+d+Fi),(u!==Oi||f!==Oi)&&(v+="skew("+u+", "+f+Fi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Fi),x.style[Ce]=v||"translate(0, 0)"},Gf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(a),v=parseFloat(o),A,w,T,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ds,c*=Ds,A=Math.cos(l)*d,w=Math.sin(l)*d,T=Math.sin(l-c)*-u,C=Math.cos(l-c)*u,c&&(h*=Ds,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=Le(A),w=Le(w),T=Le(T),C=Le(C)):(A=d,C=u,w=T=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=Li(f,"x",a,"px"),v=Li(f,"y",o,"px")),(g||_||m||p)&&(y=Le(y+g-(g*A+_*T)+m),v=Le(v+_-(g*w+_*C)+p)),(i||r)&&(M=f.getBBox(),y=Le(y+i/100*M.width),v=Le(v+r/100*M.height)),M="matrix("+A+","+w+","+T+","+C+","+y+","+v+")",f.setAttribute("transform",M),x&&(f.style[Ce]=M)},Hf=function(t,e,n,i,r){var a=360,o=Ye(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Wi:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=r.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Tc)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Tc)%a-~~(c/a)*a)),t._pt=u=new hn(t._pt,e,n,i,c,Tf),u.e=h,u.u="deg",t._props.push(n),u},Dc=function(t,e){for(var n in e)t[n]=e[n];return t},Wf=function(t,e,n){var i=Dc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ce]=e,o=Er(n,1),Pi(n,Ce),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ce],a[Ce]=e,o=Er(n,1),a[Ce]=c);for(l in ci)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Je(c),g=Je(h),d=f!==g?Li(n,l,c,g):parseFloat(c),u=parseFloat(h),t._pt=new hn(t._pt,o,l,d,u-d,Bo),t._pt.u=g||0,t._props.push(l));Dc(o,i)};cn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});ba[t>1?"border"+s:s]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return si(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var ku={name:"css",register:Vo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,d,u,f,g,_,m,p,x,y,v,A,w,T,C,M;Yl||Vo(),this.styles=this.styles||Lu(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(yn[_]&&yu(_,e,n,i,t,r)))){if(f=typeof h,g=ba[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=xr(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",wi.lastIndex=0,wi.test(c)||(m=Je(c),p=Je(h),p?m!==p&&(c=Li(t,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],Ye(c)&&~c.indexOf("random(")&&(c=xr(c)),Je(c+"")||c==="auto"||(c+=Tn.units[_]||Je(si(t,_))||""),(c+"").charAt(1)==="="&&(c=si(t,_))):c=si(t,_),u=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),d=parseFloat(h),_ in Xn&&(_==="autoAlpha"&&(u===1&&si(t,"visibility")==="hidden"&&d&&(u=0),C.push("visibility",0,o.visibility),bi(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Xn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ci,y){if(this.styles.save(_),M=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=bn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=bn(t,"perspective"),S?t.style.perspective=S:Pi(t,"perspective")}d=parseFloat(h)}if(v||(A=t._gsap,A.renderTransform&&!e.parseTransform||Er(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new hn(this._pt,o,Ce,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new hn(this._pt,A,"scaleY",A.scaleY,(x?Ps(A.scaleY,x+d):d)-A.scaleY||0,Bo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(un,0,o[un]),h=Bf(h),A.svg?Go(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&bi(this,A,"zOrigin",A.zOrigin,p),bi(this,o,_,Ta(c),Ta(h)));continue}else if(_==="svgOrigin"){Go(t,h,1,w,0,this);continue}else if(_ in Uu){Hf(this,A,_,u,x?Ps(u,x+h):h);continue}else if(_==="smoothOrigin"){bi(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){Wf(this,h,t);continue}}else _ in o||(_=Vs(_)||_);if(y||(d||d===0)&&(u||u===0)&&!bf.test(h)&&_ in o)m=(c+"").substr((u+"").length),d||(d=0),p=Je(h)||(_ in Tn.units?Tn.units[_]:m),m!==p&&(u=Li(t,_,c,p)),this._pt=new hn(this._pt,y?A:o,_,u,(x?Ps(u,x+d):d)-u,!y&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Cf:Bo),this._pt.u=p||0,y&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Af):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=wf);else if(_ in o)kf.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,r);else if(_!=="parseTransform"){Fl(_,h);continue}y||(_ in o?C.push(_,0,o[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),a.push(_)}}T&&wu(this)},render:function(t,e){if(e.tween._time||!Kl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:si,aliases:Xn,getSetter:function(t,e,n){var i=Xn[e];return i&&i.indexOf(",")<0&&(e=i),e in ci&&e!==un&&(t._gsap.x||si(t,"x"))?n&&bc===n?e==="scale"?Df:Lf:(bc=n||{})&&(e==="scale"?If:Nf):t.style&&!Nl(t.style[e])?Rf:~e.indexOf("-")?Pf:Xl(t,e)},core:{_removeProperty:Pi,_getMatrix:$l}};pn.utils.checkPrefix=Vs;pn.core.getStyleSaver=Lu;(function(s,t,e,n){var i=cn(s+","+t+","+e,function(r){ci[r]=1});cn(t,function(r){Tn.units[r]="deg",Uu[r]=1}),Xn[i[13]]=s+","+t,cn(n,function(r){var a=r.split(":");Xn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Tn.units[s]="px"});pn.registerPlugin(ku);var Vn=pn.registerPlugin(ku)||pn;Vn.core.Tween;var Zl={};(function s(t,e,n,i){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!t.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),P=I.getContext("2d");P.fillRect(0,0,1,1);var ot=I.transferToImageBitmap();P.createPattern(ot,"no-repeat")}catch{return!1}return!0})();function l(){}function c(I){var P=e.exports.Promise,ot=P!==void 0?P:t.Promise;return typeof ot=="function"?new ot(I):(I(l,l),null)}var h=(function(I,P){return{transform:function(ot){if(I)return ot;if(P.has(ot))return P.get(ot);var mt=new OffscreenCanvas(ot.width,ot.height),V=mt.getContext("2d");return V.drawImage(ot,0,0),P.set(ot,mt),mt},clear:function(){P.clear()}}})(o,new Map),d=(function(){var I=Math.floor(16.666666666666668),P,ot,mt={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(K){var lt=Math.random();return mt[lt]=requestAnimationFrame(function et(pt){V===pt||V+I-1<pt?(V=pt,delete mt[lt],K()):mt[lt]=requestAnimationFrame(et)}),lt},ot=function(K){mt[K]&&cancelAnimationFrame(mt[K])}):(P=function(K){return setTimeout(K,I)},ot=function(K){return clearTimeout(K)}),{frame:P,cancel:ot}})(),u=(function(){var I,P,ot={};function mt(V){function K(lt,et){V.postMessage({options:lt||{},callback:et})}V.init=function(et){var pt=et.transferControlToOffscreen();V.postMessage({canvas:pt},[pt])},V.fire=function(et,pt,St){if(P)return K(et,null),P;var bt=Math.random().toString(36).slice(2);return P=c(function(zt){function kt(Yt){Yt.data.callback===bt&&(delete ot[bt],V.removeEventListener("message",kt),P=null,h.clear(),St(),zt())}V.addEventListener("message",kt),K(et,bt),ot[bt]=kt.bind(null,{data:{callback:bt}})}),P},V.reset=function(){V.postMessage({reset:!0});for(var et in ot)ot[et](),delete ot[et]}}return function(){if(I)return I;if(!n&&r){var V=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([V])))}catch(K){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",K),null}mt(I)}return I}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(I,P){return P?P(I):I}function _(I){return I!=null}function m(I,P,ot){return g(I&&_(I[P])?I[P]:f[P],ot)}function p(I){return I<0?0:Math.floor(I)}function x(I,P){return Math.floor(Math.random()*(P-I))+I}function y(I){return parseInt(I,16)}function v(I){return I.map(A)}function A(I){var P=String(I).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:y(P.substring(0,2)),g:y(P.substring(2,4)),b:y(P.substring(4,6))}}function w(I){var P=m(I,"origin",Object);return P.x=m(P,"x",Number),P.y=m(P,"y",Number),P}function T(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function C(I){var P=I.getBoundingClientRect();I.width=P.width,I.height=P.height}function M(I){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=I,P}function S(I,P,ot,mt,V,K,lt,et,pt){I.save(),I.translate(P,ot),I.rotate(K),I.scale(mt,V),I.arc(0,0,1,lt,et,pt),I.restore()}function L(I){var P=I.angle*(Math.PI/180),ot=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-P+(.5*ot-Math.random()*ot),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function G(I,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var ot=P.tick++/P.totalTicks,mt=P.x+P.random*P.tiltCos,V=P.y+P.random*P.tiltSin,K=P.wobbleX+P.random*P.tiltCos,lt=P.wobbleY+P.random*P.tiltSin;if(I.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-ot)+")",I.beginPath(),a&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))I.fill(J(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(K-mt)*.1,Math.abs(lt-V)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var et=Math.PI/10*P.wobble,pt=Math.abs(K-mt)*.1,St=Math.abs(lt-V)*.1,bt=P.shape.bitmap.width*P.scalar,zt=P.shape.bitmap.height*P.scalar,kt=new DOMMatrix([Math.cos(et)*pt,Math.sin(et)*pt,-Math.sin(et)*St,Math.cos(et)*St,P.x,P.y]);kt.multiplySelf(new DOMMatrix(P.shape.matrix));var Yt=I.createPattern(h.transform(P.shape.bitmap),"no-repeat");Yt.setTransform(kt),I.globalAlpha=1-ot,I.fillStyle=Yt,I.fillRect(P.x-bt/2,P.y-zt/2,bt,zt),I.globalAlpha=1}else if(P.shape==="circle")I.ellipse?I.ellipse(P.x,P.y,Math.abs(K-mt)*P.ovalScalar,Math.abs(lt-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):S(I,P.x,P.y,Math.abs(K-mt)*P.ovalScalar,Math.abs(lt-V)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var N=Math.PI/2*3,ce=4*P.scalar,Gt=8*P.scalar,Wt=P.x,It=P.y,ee=5,Rt=Math.PI/ee;ee--;)Wt=P.x+Math.cos(N)*Gt,It=P.y+Math.sin(N)*Gt,I.lineTo(Wt,It),N+=Rt,Wt=P.x+Math.cos(N)*ce,It=P.y+Math.sin(N)*ce,I.lineTo(Wt,It),N+=Rt;else I.moveTo(Math.floor(P.x),Math.floor(P.y)),I.lineTo(Math.floor(P.wobbleX),Math.floor(V)),I.lineTo(Math.floor(K),Math.floor(lt)),I.lineTo(Math.floor(mt),Math.floor(P.wobbleY));return I.closePath(),I.fill(),P.tick<P.totalTicks}function k(I,P,ot,mt,V){var K=P.slice(),lt=I.getContext("2d"),et,pt,St=c(function(bt){function zt(){et=pt=null,lt.clearRect(0,0,mt.width,mt.height),h.clear(),V(),bt()}function kt(){n&&!(mt.width===i.width&&mt.height===i.height)&&(mt.width=I.width=i.width,mt.height=I.height=i.height),!mt.width&&!mt.height&&(ot(I),mt.width=I.width,mt.height=I.height),lt.clearRect(0,0,mt.width,mt.height),K=K.filter(function(Yt){return G(lt,Yt)}),K.length?et=d.frame(kt):zt()}et=d.frame(kt),pt=zt});return{addFettis:function(bt){return K=K.concat(bt),St},canvas:I,promise:St,reset:function(){et&&d.cancel(et),pt&&pt()}}}function Y(I,P){var ot=!I,mt=!!m(P||{},"resize"),V=!1,K=m(P,"disableForReducedMotion",Boolean),lt=r&&!!m(P||{},"useWorker"),et=lt?u():null,pt=ot?T:C,St=I&&et?!!I.__confetti_initialized:!1,bt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,zt;function kt(N,ce,Gt){for(var Wt=m(N,"particleCount",p),It=m(N,"angle",Number),ee=m(N,"spread",Number),Rt=m(N,"startVelocity",Number),R=m(N,"decay",Number),E=m(N,"gravity",Number),W=m(N,"drift",Number),rt=m(N,"colors",v),ct=m(N,"ticks",Number),nt=m(N,"shapes"),Nt=m(N,"scalar"),_t=!!m(N,"flat"),At=w(N),Zt=Wt,st=[],Tt=I.width*At.x,Bt=I.height*At.y;Zt--;)st.push(L({x:Tt,y:Bt,angle:It,spread:ee,startVelocity:Rt,color:rt[Zt%rt.length],shape:nt[x(0,nt.length)],ticks:ct,decay:R,gravity:E,drift:W,scalar:Nt,flat:_t}));return zt?zt.addFettis(st):(zt=k(I,st,pt,ce,Gt),zt.promise)}function Yt(N){var ce=K||m(N,"disableForReducedMotion",Boolean),Gt=m(N,"zIndex",Number);if(ce&&bt)return c(function(Rt){Rt()});ot&&zt?I=zt.canvas:ot&&!I&&(I=M(Gt),document.body.appendChild(I)),mt&&!St&&pt(I);var Wt={width:I.width,height:I.height};et&&!St&&et.init(I),St=!0,et&&(I.__confetti_initialized=!0);function It(){if(et){var Rt={getBoundingClientRect:function(){if(!ot)return I.getBoundingClientRect()}};pt(Rt),et.postMessage({resize:{width:Rt.width,height:Rt.height}});return}Wt.width=Wt.height=null}function ee(){zt=null,mt&&(V=!1,t.removeEventListener("resize",It)),ot&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,St=!1)}return mt&&!V&&(V=!0,t.addEventListener("resize",It,!1)),et?et.fire(N,Wt,ee):kt(N,Wt,ee)}return Yt.reset=function(){et&&et.reset(),zt&&zt.reset()},Yt}var $;function H(){return $||($=Y(null,{useWorker:!0,resize:!0})),$}function J(I,P,ot,mt,V,K,lt){var et=new Path2D(I),pt=new Path2D;pt.addPath(et,new DOMMatrix(P));var St=new Path2D;return St.addPath(pt,new DOMMatrix([Math.cos(lt)*V,Math.sin(lt)*V,-Math.sin(lt)*K,Math.cos(lt)*K,ot,mt])),St}function X(I){if(!a)throw new Error("path confetti are not supported in this browser");var P,ot;typeof I=="string"?P=I:(P=I.path,ot=I.matrix);var mt=new Path2D(P),V=document.createElement("canvas"),K=V.getContext("2d");if(!ot){for(var lt=1e3,et=lt,pt=lt,St=0,bt=0,zt,kt,Yt=0;Yt<lt;Yt+=2)for(var N=0;N<lt;N+=2)K.isPointInPath(mt,Yt,N,"nonzero")&&(et=Math.min(et,Yt),pt=Math.min(pt,N),St=Math.max(St,Yt),bt=Math.max(bt,N));zt=St-et,kt=bt-pt;var ce=10,Gt=Math.min(ce/zt,ce/kt);ot=[Gt,0,0,Gt,-Math.round(zt/2+et)*Gt,-Math.round(kt/2+pt)*Gt]}return{type:"path",path:P,matrix:ot}}function ft(I){var P,ot=1,mt="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?P=I:(P=I.text,ot="scalar"in I?I.scalar:ot,V="fontFamily"in I?I.fontFamily:V,mt="color"in I?I.color:mt);var K=10*ot,lt=""+K+"px "+V,et=new OffscreenCanvas(K,K),pt=et.getContext("2d");pt.font=lt;var St=pt.measureText(P),bt=Math.ceil(St.actualBoundingBoxRight+St.actualBoundingBoxLeft),zt=Math.ceil(St.actualBoundingBoxAscent+St.actualBoundingBoxDescent),kt=2,Yt=St.actualBoundingBoxLeft+kt,N=St.actualBoundingBoxAscent+kt;bt+=kt+kt,zt+=kt+kt,et=new OffscreenCanvas(bt,zt),pt=et.getContext("2d"),pt.font=lt,pt.fillStyle=mt,pt.fillText(P,Yt,N);var ce=1/ot;return{type:"bitmap",bitmap:et.transferToImageBitmap(),matrix:[ce,0,0,ce,-bt*ce/2,-zt*ce/2]}}e.exports=function(){return H().apply(this,arguments)},e.exports.reset=function(){H().reset()},e.exports.create=Y,e.exports.shapeFromPath=X,e.exports.shapeFromText=ft})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Zl,!1);const Xf=Zl.exports;Zl.exports.create;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="170",Is={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qf=0,Ic=1,Yf=2,Bu=1,zu=2,ni=3,Di=0,dn=1,Wn=2,Ai=0,Ns=1,Ho=2,Nc=3,Uc=4,Kf=5,qi=100,jf=101,$f=102,Zf=103,Jf=104,Qf=200,tp=201,ep=202,np=203,Wo=204,Xo=205,ip=206,sp=207,rp=208,ap=209,op=210,lp=211,cp=212,hp=213,up=214,qo=0,Yo=1,Ko=2,Gs=3,jo=4,$o=5,Zo=6,Jo=7,Vu=0,dp=1,fp=2,Ci=0,pp=1,mp=2,_p=3,Gu=4,gp=5,vp=6,xp=7,Hu=300,Hs=301,Ws=302,Qo=303,tl=304,Da=306,el=1e3,ji=1001,nl=1002,kn=1003,yp=1004,kr=1005,qn=1006,qa=1007,$i=1008,hi=1009,Wu=1010,Xu=1011,br=1012,Ql=1013,ns=1014,ri=1015,Ar=1016,tc=1017,ec=1018,Xs=1020,qu=35902,Yu=1021,Ku=1022,Fn=1023,ju=1024,$u=1025,Us=1026,qs=1027,Zu=1028,nc=1029,Ju=1030,ic=1031,sc=1033,da=33776,fa=33777,pa=33778,ma=33779,il=35840,sl=35841,rl=35842,al=35843,ol=36196,ll=37492,cl=37496,hl=37808,ul=37809,dl=37810,fl=37811,pl=37812,ml=37813,_l=37814,gl=37815,vl=37816,xl=37817,yl=37818,Ml=37819,Sl=37820,El=37821,_a=36492,bl=36494,Tl=36495,Qu=36283,wl=36284,Al=36285,Cl=36286,Mp=3200,Sp=3201,rc=0,Ep=1,Mi="",Pn="srgb",Ks="srgb-linear",Ia="linear",fe="srgb",us=7680,Oc=519,bp=512,Tp=513,wp=514,td=515,Ap=516,Cp=517,Rp=518,Pp=519,Fc=35044,kc="300 es",ai=2e3,wa=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,Rl=180/Math.PI;function Cr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Ke(s,t,e){return Math.max(t,Math.min(e,s))}function Lp(s,t){return(s%t+t)%t}function Ya(s,t,e){return(1-e)*s+e*t}function er(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Dp={DEG2RAD:ga};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,r,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],y=i[4],v=i[7],A=i[2],w=i[5],T=i[8];return r[0]=a*_+o*x+l*A,r[3]=a*m+o*y+l*w,r[6]=a*p+o*v+l*T,r[1]=c*_+h*x+d*A,r[4]=c*m+h*y+d*w,r[7]=c*p+h*v+d*T,r[2]=u*_+f*x+g*A,r[5]=u*m+f*y+g*w,r[8]=u*p+f*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Jt;function ed(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ip(){const s=Aa("canvas");return s.style.display="block",s}const Bc={};function cr(s){s in Bc||(Bc[s]=!0,console.warn(s))}function Np(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Up(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Op(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Ia:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const zc=[.64,.33,.3,.6,.15,.06],Vc=[.2126,.7152,.0722],Gc=[.3127,.329],Hc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Ks]:{primaries:zc,whitePoint:Gc,transfer:Ia,toXYZ:Hc,fromXYZ:Wc,luminanceCoefficients:Vc,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:zc,whitePoint:Gc,transfer:fe,toXYZ:Hc,fromXYZ:Wc,luminanceCoefficients:Vc,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}});let ds;class Fp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ds===void 0&&(ds=Aa("canvas")),ds.width=t.width,ds.height=t.height;const n=ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kp=0;class nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ja(i[a].image)):r.push(ja(i[a]))}else r=ja(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bp=0;class fn extends os{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=ji,i=ji,r=qn,a=$i,o=Fn,l=hi,c=fn.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Cr(),this.name="",this.source=new nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case el:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case nl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case el:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case nl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Hu;fn.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(f+1)/2,A=(p+1)/2,w=(h+u)/4,T=(d+_)/4,C=(g+m)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=T/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=C/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zp extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends zp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class id extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vp extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o;const p=l*u+c*f+h*g+d*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,p*x);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*x;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new D,Xc=new ss;class Rr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),zr.subVectors(this.max,nr),fs.subVectors(t.a,nr),ps.subVectors(t.b,nr),ms.subVectors(t.c,nr),pi.subVectors(ps,fs),mi.subVectors(ms,ps),ki.subVectors(fs,ms);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-ki.z,ki.y,pi.z,0,-pi.x,mi.z,0,-mi.x,ki.z,0,-ki.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-ki.y,ki.x,0];return!Za(e,fs,ps,ms,zr)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,fs,ps,ms,zr))?!1:(Vr.crossVectors(pi,mi),e=[Vr.x,Vr.y,Vr.z],Za(e,fs,ps,ms,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zn=[new D,new D,new D,new D,new D,new D,new D,new D],In=new D,Br=new Rr,fs=new D,ps=new D,ms=new D,pi=new D,mi=new D,ki=new D,nr=new D,zr=new D,Vr=new D,Bi=new D;function Za(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bi.fromArray(s,r);const o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Gp=new Rr,ir=new D,Ja=new D;class Na{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ir,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(Ja)),this.expandByPoint(ir.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new D,Qa=new D,Gr=new D,_i=new D,to=new D,Hr=new D,eo=new D;class Ua{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qa.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Qa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gr),o=_i.dot(this.direction),l=-_i.dot(Gr),c=_i.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Qa).addScaledVector(Gr,u),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,i,r){to.subVectors(e,t),Hr.subVectors(n,t),eo.crossVectors(to,Hr);let a=this.direction.dot(eo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(Hr.crossVectors(_i,Hr));if(l<0)return null;const c=o*this.direction.dot(to.cross(_i));if(c<0||l+c>a)return null;const h=-o*_i.dot(eo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,g,_,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,Wp)}lookAt(t,e,n){const i=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),gi.crossVectors(n,vn),gi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),gi.crossVectors(n,vn)),gi.normalize(),Wr.crossVectors(vn,gi),i[0]=gi.x,i[4]=Wr.x,i[8]=vn.x,i[1]=gi.y,i[5]=Wr.y,i[9]=vn.y,i[2]=gi.z,i[6]=Wr.z,i[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],A=n[15],w=i[0],T=i[4],C=i[8],M=i[12],S=i[1],L=i[5],G=i[9],k=i[13],Y=i[2],$=i[6],H=i[10],J=i[14],X=i[3],ft=i[7],I=i[11],P=i[15];return r[0]=a*w+o*S+l*Y+c*X,r[4]=a*T+o*L+l*$+c*ft,r[8]=a*C+o*G+l*H+c*I,r[12]=a*M+o*k+l*J+c*P,r[1]=h*w+d*S+u*Y+f*X,r[5]=h*T+d*L+u*$+f*ft,r[9]=h*C+d*G+u*H+f*I,r[13]=h*M+d*k+u*J+f*P,r[2]=g*w+_*S+m*Y+p*X,r[6]=g*T+_*L+m*$+p*ft,r[10]=g*C+_*G+m*H+p*I,r[14]=g*M+_*k+m*J+p*P,r[3]=x*w+y*S+v*Y+A*X,r[7]=x*T+y*L+v*$+A*ft,r[11]=x*C+y*G+v*H+A*I,r[15]=x*M+y*k+v*J+A*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*f-n*l*f)+_*(+e*l*f-e*c*u+r*a*u-i*a*f+i*c*h-r*l*h)+m*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,y=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,v=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,A=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,w=e*x+n*y+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=x*T,t[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*T,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*T,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*f-n*l*f)*T,t[4]=y*T,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*T,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*T,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*f+e*l*f)*T,t[8]=v*T,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*T,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*T,t[12]=A*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*T,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,x=l*c,y=l*h,v=l*d,A=n.x,w=n.y,T=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+v)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+p))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+y)*T,i[9]=(m-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=_s.set(i[0],i[1],i[2]).length();const a=_s.set(i[4],i[5],i[6]).length(),o=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Nn.copy(this);const c=1/r,h=1/a,d=1/o;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,e.setFromRotationMatrix(Nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ai){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(o===ai)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ai){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*c,f=(n+i)*h;let g,_;if(o===ai)g=(a+r)*d,_=-2*d;else if(o===wa)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new D,Nn=new xe,Hp=new D(0,0,0),Wp=new D(1,1,1),gi=new D,Wr=new D,vn=new D,qc=new xe,Yc=new ss;class Kn{constructor(t=0,e=0,n=0,i=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xp=0;const Kc=new D,gs=new ss,Qn=new xe,Xr=new D,sr=new D,qp=new D,Yp=new ss,jc=new D(1,0,0),$c=new D(0,1,0),Zc=new D(0,0,1),Jc={type:"added"},Kp={type:"removed"},vs={type:"childadded",child:null},no={type:"childremoved",child:null};class qe extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new D,e=new Kn,n=new ss,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new Jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(sr,Xr,this.up):Qn.lookAt(Xr,sr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(Qn),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kp),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new D(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new D,ti=new D,io=new D,ei=new D,xs=new D,ys=new D,Qc=new D,so=new D,ro=new D,ao=new D,oo=new me,lo=new me,co=new me;class On{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Un.subVectors(t,e),i.cross(Un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Un.subVectors(i,e),ti.subVectors(n,e),io.subVectors(t,e);const a=Un.dot(Un),o=Un.dot(ti),l=Un.dot(io),c=ti.dot(ti),h=ti.dot(io),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(t,e),lo.fromBufferAttribute(t,n),co.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(oo,r.x),a.addScaledVector(lo,r.y),a.addScaledVector(co,r.z),a}static isFrontFacing(t,e,n,i){return Un.subVectors(n,e),ti.subVectors(t,e),Un.cross(ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Un.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return On.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;xs.subVectors(i,n),ys.subVectors(r,n),so.subVectors(t,n);const l=xs.dot(so),c=ys.dot(so);if(l<=0&&c<=0)return e.copy(n);ro.subVectors(t,i);const h=xs.dot(ro),d=ys.dot(ro);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xs,a);ao.subVectors(t,r);const f=xs.dot(ao),g=ys.dot(ao);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ys,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Qc.subVectors(r,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Qc,o);const p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(xs,a).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},qr={h:0,s:0,l:0};function ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=Lp(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ho(a,r,t+1/3),this.g=ho(a,r,t),this.b=ho(a,r,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return re.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ke(Ze.r*255,0,255))*65536+Math.round(Ke(Ze.g*255,0,255))*256+Math.round(Ke(Ze.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ze.copy(this),e);const n=Ze.r,i=Ze.g,r=Ze.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Pn){re.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,i=Ze.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(qr);const n=Ya(vi.h,qr.h,e),i=Ya(vi.s,qr.s,e),r=Ya(vi.l,qr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new te;te.NAMES=sd;let jp=0;class ls extends os{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Cr(),this.name="",this.blending=Ns,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cs extends ls{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new D,Yr=new Ct;class Bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class rd extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ad extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Me extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $p=0;const Cn=new xe,uo=new qe,Ms=new D,xn=new Rr,rr=new Rr,Xe=new D;class nn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?ad:rd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(xn.min,rr.min),xn.expandByPoint(Xe),Xe.addVectors(xn.max,rr.max),xn.expandByPoint(Xe)):(xn.expandByPoint(rr.min),xn.expandByPoint(rr.max))}xn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(t,c),Xe.add(Ms)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new D,l[C]=new D;const c=new D,h=new D,d=new D,u=new Ct,f=new Ct,g=new Ct,_=new D,m=new D;function p(C,M,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[C].add(_),o[M].add(_),o[S].add(_),l[C].add(m),l[M].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,M=x.length;C<M;++C){const S=x[C],L=S.start,G=S.count;for(let k=L,Y=L+G;k<Y;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new D,v=new D,A=new D,w=new D;function T(C){A.fromBufferAttribute(i,C),w.copy(A);const M=o[C];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(w,M);const L=v.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,M=x.length;C<M;++C){const S=x[C],L=S.start,G=S.count;for(let k=L,Y=L+G;k<Y;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Bn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new nn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new xe,zi=new Ua,Kr=new Na,eh=new D,jr=new D,$r=new D,Zr=new D,fo=new D,Jr=new D,nh=new D,Qr=new D;class it extends qe{constructor(t=new nn,e=new Cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(fo.fromBufferAttribute(d,t),a?Jr.addScaledVector(fo,h):Jr.addScaledVector(fo.sub(e),h))}e.add(Jr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Kr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Kr,eh)===null||zi.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),zi.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const w=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);i=ta(this,p,t,n,c,h,d,w,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=ta(this,a,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const w=v,T=v+1,C=v+2;i=ta(this,p,t,n,c,h,d,w,T,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;i=ta(this,a,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Zp(s,t,e,n,i,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Di,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:s}}function ta(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,jr),s.getVertexPosition(l,$r),s.getVertexPosition(c,Zr);const h=Zp(s,t,e,n,jr,$r,Zr,nh);if(h){const d=new D;On.getBarycoord(nh,jr,$r,Zr,d),i&&(h.uv=On.getInterpolatedAttribute(i,o,l,c,d,new Ct)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new D,materialIndex:0};On.getNormal(jr,$r,Zr,u.normal),h.face=u,h.barycoord=d}return h}class qt extends nn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2));function g(_,m,p,x,y,v,A,w,T,C,M){const S=v/T,L=A/C,G=v/2,k=A/2,Y=w/2,$=T+1,H=C+1;let J=0,X=0;const ft=new D;for(let I=0;I<H;I++){const P=I*L-k;for(let ot=0;ot<$;ot++){const mt=ot*S-G;ft[_]=mt*x,ft[m]=P*y,ft[p]=Y,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=w>0?1:-1,h.push(ft.x,ft.y,ft.z),d.push(ot/T),d.push(1-I/C),J+=1}}for(let I=0;I<C;I++)for(let P=0;P<T;P++){const ot=u+P+$*I,mt=u+P+$*(I+1),V=u+(P+1)+$*(I+1),K=u+(P+1)+$*I;l.push(ot,mt,K),l.push(mt,V,K),X+=6}o.addGroup(f,X,M),f+=X,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(s){const t={};for(let e=0;e<s.length;e++){const n=Ys(s[e]);for(const i in n)t[i]=n[i]}return t}function Jp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function od(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Qp={clone:Ys,merge:tn};var tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ls{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ld extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new D,ih=new Ct,sh=new Ct;class Mn extends ld{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,ih,sh),e.subVectors(sh,ih)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ga*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ss=-90,Es=1;class nm extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(Ss,Es,t,e);i.layers=this.layers,this.add(i);const r=new Mn(Ss,Es,t,e);r.layers=this.layers,this.add(r);const a=new Mn(Ss,Es,t,e);a.layers=this.layers,this.add(a);const o=new Mn(Ss,Es,t,e);o.layers=this.layers,this.add(o);const l=new Mn(Ss,Es,t,e);l.layers=this.layers,this.add(l);const c=new Mn(Ss,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cd extends fn{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class im extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qt(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Ai});r.uniforms.tEquirect.value=e;const a=new it(i,r),o=e.minFilter;return e.minFilter===$i&&(e.minFilter=qn),new nm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const po=new D,sm=new D,rm=new Jt;class yi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=po.subVectors(n,e).cross(sm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rm.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Na,ea=new D;class oc{constructor(t=new yi,e=new yi,n=new yi,i=new yi,r=new yi,a=new yi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,u-c,m-f,v-p).normalize(),n[1].setComponents(l+r,u+c,m+f,v+p).normalize(),n[2].setComponents(l+a,u+h,m+g,v+x).normalize(),n[3].setComponents(l-a,u-h,m-g,v-x).normalize(),n[4].setComponents(l-o,u-d,m-_,v-y).normalize(),e===ai)n[5].setComponents(l+o,u+d,m+_,v+y).normalize();else if(e===wa)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ea.x=i.normal.x>0?t.max.x:t.min.x,ea.y=i.normal.y>0?t.max.y:t.min.y,ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function am(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class es extends nn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let y=0;y<c;y++){const v=y*d-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,v=x+c*(p+1),A=x+1+c*(p+1),w=x+1+c*p;f.push(y,v,w),f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.width,t.height,t.widthSegments,t.heightSegments)}}var om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mm=`#ifdef USE_BATCHING
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
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,Mm=`#ifdef USE_BUMPMAP
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pm=`#define PI 3.141592653589793
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jm=`uniform bool receiveShadow;
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
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,r_=`struct PhysicalMaterial {
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
}`,a_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,g_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R_=`#ifdef USE_NORMALMAP
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
#endif`,P_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,K_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j_=`#ifdef USE_SKINNING
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
#endif`,$_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,fg=`#if DEPTH_PACKING == 3200
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
}`,pg=`#define DISTANCE
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
}`,mg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define LAMBERT
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
}`,bg=`#define MATCAP
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
}`,Tg=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Ag=`#define NORMAL
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
}`,Cg=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Dg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Ng=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Fg=`uniform vec3 color;
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
}`,kg=`uniform float rotation;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:om,alphahash_pars_fragment:lm,alphamap_fragment:cm,alphamap_pars_fragment:hm,alphatest_fragment:um,alphatest_pars_fragment:dm,aomap_fragment:fm,aomap_pars_fragment:pm,batching_pars_vertex:mm,batching_vertex:_m,begin_vertex:gm,beginnormal_vertex:vm,bsdfs:xm,iridescence_fragment:ym,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Sm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Tm,color_fragment:wm,color_pars_fragment:Am,color_pars_vertex:Cm,color_vertex:Rm,common:Pm,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Im,displacementmap_vertex:Nm,emissivemap_fragment:Um,emissivemap_pars_fragment:Om,colorspace_fragment:Fm,colorspace_pars_fragment:km,envmap_fragment:Bm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Vm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:Qm,envmap_vertex:Hm,fog_vertex:Wm,fog_pars_vertex:Xm,fog_fragment:qm,fog_pars_fragment:Ym,gradientmap_pars_fragment:Km,lightmap_pars_fragment:jm,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Zm,lights_pars_begin:Jm,lights_toon_fragment:t_,lights_toon_pars_fragment:e_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:s_,lights_physical_pars_fragment:r_,lights_fragment_begin:a_,lights_fragment_maps:o_,lights_fragment_end:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:h_,logdepthbuf_pars_vertex:u_,logdepthbuf_vertex:d_,map_fragment:f_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:__,metalnessmap_fragment:g_,metalnessmap_pars_fragment:v_,morphinstance_vertex:x_,morphcolor_vertex:y_,morphnormal_vertex:M_,morphtarget_pars_vertex:S_,morphtarget_vertex:E_,normal_fragment_begin:b_,normal_fragment_maps:T_,normal_pars_fragment:w_,normal_pars_vertex:A_,normal_vertex:C_,normalmap_pars_fragment:R_,clearcoat_normal_fragment_begin:P_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:D_,iridescence_pars_fragment:I_,opaque_fragment:N_,packing:U_,premultiplied_alpha_fragment:O_,project_vertex:F_,dithering_fragment:k_,dithering_pars_fragment:B_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:H_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:K_,skinnormal_vertex:j_,specularmap_fragment:$_,specularmap_pars_fragment:Z_,tonemapping_fragment:J_,tonemapping_pars_fragment:Q_,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:ag,background_frag:og,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:_g,equirect_frag:gg,linedashed_vert:vg,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:Eg,meshmatcap_vert:bg,meshmatcap_frag:Tg,meshnormal_vert:wg,meshnormal_frag:Ag,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Pg,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ig,points_vert:Ng,points_frag:Ug,shadow_vert:Og,shadow_frag:Fg,sprite_vert:kg,sprite_frag:Bg},vt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Gn={basic:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:tn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:tn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new te(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:tn([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:tn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:tn([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:tn([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:tn([vt.common,vt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:tn([vt.lights,vt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Gn.physical={uniforms:tn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const na={r:0,b:0,g:0},Gi=new Kn,zg=new xe;function Vg(s,t,e,n,i,r,a){const o=new te(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?p(o,l):v&&v.isColor&&(p(v,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Da)?(h===void 0&&(h=new it(new qt(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ys(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Gi.copy(y.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(Gi)),h.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,(d!==v||u!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new es(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ys(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=re.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(na,od(s)),n.buffers.color.setClear(na.r,na.g,na.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function Gg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(S,L,G,k,Y){let $=!1;const H=d(k,G,L);r!==H&&(r=H,c(r.object)),$=f(S,k,G,Y),$&&g(S,k,G,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(S,L,G,k),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,L,G){const k=G.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let $=Y[L.id];$===void 0&&($={},Y[L.id]=$);let H=$[k];return H===void 0&&(H=u(l()),$[k]=H),H}function u(S){const L=[],G=[],k=[];for(let Y=0;Y<e;Y++)L[Y]=0,G[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,L,G,k){const Y=r.attributes,$=L.attributes;let H=0;const J=G.getAttributes();for(const X in J)if(J[X].location>=0){const I=Y[X];let P=$[X];if(P===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(P=S.instanceColor)),I===void 0||I.attribute!==P||P&&I.data!==P.data)return!0;H++}return r.attributesNum!==H||r.index!==k}function g(S,L,G,k){const Y={},$=L.attributes;let H=0;const J=G.getAttributes();for(const X in J)if(J[X].location>=0){let I=$[X];I===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(I=S.instanceColor));const P={};P.attribute=I,I&&I.data&&(P.data=I.data),Y[X]=P,H++}r.attributes=Y,r.attributesNum=H,r.index=k}function _(){const S=r.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){const G=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;G[S]=1,k[S]===0&&(s.enableVertexAttribArray(S),k[S]=1),Y[S]!==L&&(s.vertexAttribDivisor(S,L),Y[S]=L)}function x(){const S=r.newAttributes,L=r.enabledAttributes;for(let G=0,k=L.length;G<k;G++)L[G]!==S[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function y(S,L,G,k,Y,$,H){H===!0?s.vertexAttribIPointer(S,L,G,Y,$):s.vertexAttribPointer(S,L,G,k,Y,$)}function v(S,L,G,k){_();const Y=k.attributes,$=G.getAttributes(),H=L.defaultAttributeValues;for(const J in $){const X=$[J];if(X.location>=0){let ft=Y[J];if(ft===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor)),ft!==void 0){const I=ft.normalized,P=ft.itemSize,ot=t.get(ft);if(ot===void 0)continue;const mt=ot.buffer,V=ot.type,K=ot.bytesPerElement,lt=V===s.INT||V===s.UNSIGNED_INT||ft.gpuType===Ql;if(ft.isInterleavedBufferAttribute){const et=ft.data,pt=et.stride,St=ft.offset;if(et.isInstancedInterleavedBuffer){for(let bt=0;bt<X.locationSize;bt++)p(X.location+bt,et.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<X.locationSize;bt++)m(X.location+bt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let bt=0;bt<X.locationSize;bt++)y(X.location+bt,P/X.locationSize,V,I,pt*K,(St+P/X.locationSize*bt)*K,lt)}else{if(ft.isInstancedBufferAttribute){for(let et=0;et<X.locationSize;et++)p(X.location+et,ft.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let et=0;et<X.locationSize;et++)m(X.location+et);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let et=0;et<X.locationSize;et++)y(X.location+et,P/X.locationSize,V,I,P*K,P/X.locationSize*et*K,lt)}}else if(H!==void 0){const I=H[J];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(X.location,I);break;case 3:s.vertexAttrib3fv(X.location,I);break;case 4:s.vertexAttrib4fv(X.location,I);break;default:s.vertexAttrib1fv(X.location,I)}}}}x()}function A(){C();for(const S in n){const L=n[S];for(const G in L){const k=L[G];for(const Y in k)h(k[Y].object),delete k[Y];delete L[G]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const G in L){const k=L[G];for(const Y in k)h(k[Y].object),delete k[Y];delete L[G]}delete n[S.id]}function T(S){for(const L in n){const G=n[L];if(G[S.id]===void 0)continue;const k=G[S.id];for(const Y in k)h(k[Y].object),delete k[Y];delete G[S.id]}}function C(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Hg(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Wg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Fn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==hi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ri&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function Xg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new yi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(g,u,y,f);for(let A=0;A!==y;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function qg(s){let t=new WeakMap;function e(a,o){return o===Qo?a.mapping=Hs:o===tl&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qo||o===tl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new im(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ud extends ld{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Rs=4,rh=[.125,.215,.35,.446,.526,.582],Yi=20,mo=new ud,ah=new te;let _o=null,go=0,vo=0,xo=!1;const Xi=(1+Math.sqrt(5))/2,bs=1/Xi,oh=[new D(-Xi,bs,0),new D(Xi,bs,0),new D(-bs,0,Xi),new D(bs,0,Xi),new D(0,Xi,-bs),new D(0,Xi,bs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class lh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_o=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_o,go,vo),this._renderer.xr.enabled=xo,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ar,format:Fn,colorSpace:Ks,depthBuffer:!1},i=ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ch(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(r)),this._blurMaterial=Kg(r,t,e)}return i}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){const o=new Mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ah),h.toneMapping=Ci,h.autoClear=!1;const f=new Cs({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new it(new qt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(ah),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;ia(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oh[(i-r-1)%oh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new it(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let x=0;for(let T=0;T<Yi;++T){const C=T/_,M=Math.exp(-C*C/2);p.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-Rs?i-y+Rs:0),w=4*(this._cubeSize-v);ia(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(d,mo)}}function Yg(s){const t=[],e=[],n=[];let i=s;const r=s-Rs+1+rh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Rs?l=rh[a-s+Rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,C=w>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(M,_*g*w),y.set(u,m*g*w);const S=[w,w,w,w,w,w];v.set(S,p*g*w)}const A=new nn;A.setAttribute("position",new Bn(x,_)),A.setAttribute("uv",new Bn(y,m)),A.setAttribute("faceIndex",new Bn(v,p)),t.push(A),i>Rs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ch(s,t,e){const n=new is(s,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Kg(s,t,e){const n=new Float32Array(Yi),i=new D(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function hh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function uh(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function jg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qo||l===tl,h=l===Hs||l===Ws;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new lh(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new lh(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $g(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zg(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],w=x[y+1],T=x[y+2];u.push(A,w,w,T,T,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,w=y+1,T=y+2;u.push(A,w,w,T,T,A)}}else return;const m=new(ed(u)?ad:rd)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Jg(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Qg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function t0(s,t,e){const n=new WeakMap,i=new me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*w*4*d),C=new id(T,A,w,d);C.type=ri,C.needsUpdate=!0;const M=v*4;for(let L=0;L<d;L++){const G=p[L],k=x[L],Y=y[L],$=A*w*4*L;for(let H=0;H<G.count;H++){const J=H*M;g===!0&&(i.fromBufferAttribute(G,H),T[$+J+0]=i.x,T[$+J+1]=i.y,T[$+J+2]=i.z,T[$+J+3]=0),_===!0&&(i.fromBufferAttribute(k,H),T[$+J+4]=i.x,T[$+J+5]=i.y,T[$+J+6]=i.z,T[$+J+7]=0),m===!0&&(i.fromBufferAttribute(Y,H),T[$+J+8]=i.x,T[$+J+9]=i.y,T[$+J+10]=i.z,T[$+J+11]=Y.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Ct(A,w)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function e0(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class dd extends fn{constructor(t,e,n,i,r,a,o,l,c,h=Us){if(h!==Us&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Us&&(n=ns),n===void 0&&h===qs&&(n=Xs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fd=new fn,dh=new dd(1,1),pd=new id,md=new Vp,_d=new cd,fh=[],ph=[],mh=new Float32Array(16),_h=new Float32Array(9),gh=new Float32Array(4);function js(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=fh[i];if(r===void 0&&(r=new Float32Array(i),fh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function He(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Oa(s,t){let e=ph[t];e===void 0&&(e=new Int32Array(t),ph[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function n0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function i0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function s0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function r0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function a0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;gh.set(n),s.uniformMatrix2fv(this.addr,!1,gh),We(e,n)}}function o0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;_h.set(n),s.uniformMatrix3fv(this.addr,!1,_h),We(e,n)}}function l0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;mh.set(n),s.uniformMatrix4fv(this.addr,!1,mh),We(e,n)}}function c0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function h0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function u0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function d0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function f0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function p0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function m0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function _0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function g0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(dh.compareFunction=td,r=dh):r=fd,e.setTexture2D(t||r,i)}function v0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||md,i)}function x0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_d,i)}function y0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pd,i)}function M0(s){switch(s){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return a0;case 35675:return o0;case 35676:return l0;case 5124:case 35670:return c0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}function S0(s,t){s.uniform1fv(this.addr,t)}function E0(s,t){const e=js(t,this.size,2);s.uniform2fv(this.addr,e)}function b0(s,t){const e=js(t,this.size,3);s.uniform3fv(this.addr,e)}function T0(s,t){const e=js(t,this.size,4);s.uniform4fv(this.addr,e)}function w0(s,t){const e=js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function A0(s,t){const e=js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function C0(s,t){const e=js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function R0(s,t){s.uniform1iv(this.addr,t)}function P0(s,t){s.uniform2iv(this.addr,t)}function L0(s,t){s.uniform3iv(this.addr,t)}function D0(s,t){s.uniform4iv(this.addr,t)}function I0(s,t){s.uniform1uiv(this.addr,t)}function N0(s,t){s.uniform2uiv(this.addr,t)}function U0(s,t){s.uniform3uiv(this.addr,t)}function O0(s,t){s.uniform4uiv(this.addr,t)}function F0(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fd,r[a])}function k0(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||md,r[a])}function B0(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_d,r[a])}function z0(s,t,e){const n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pd,r[a])}function V0(s){switch(s){case 5126:return S0;case 35664:return E0;case 35665:return b0;case 35666:return T0;case 35674:return w0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return I0;case 36294:return N0;case 36295:return U0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V0(e.type)}}class W0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function vh(s,t){s.seq.push(t),s.map[t.id]=t}function X0(s,t,e){const n=s.name,i=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),a=yo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){vh(e,c===void 0?new G0(o,s,t):new H0(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new W0(o),vh(e,d)),e=d}}}class va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);X0(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function xh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const q0=37297;let Y0=0;function K0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const yh=new Jt;function j0(s){re._getMatrix(yh,re.workingColorSpace,s);const t=`mat3( ${yh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(s)){case Ia:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Mh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+K0(s.getShaderSource(t),a)}else return i}function $0(s,t){const e=j0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Z0(s,t){let e;switch(t){case pp:e="Linear";break;case mp:e="Reinhard";break;case _p:e="Cineon";break;case Gu:e="ACESFilmic";break;case vp:e="AgX";break;case xp:e="Neutral";break;case gp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sa=new D;function J0(){re.getLuminanceCoefficients(sa);const s=sa.x.toFixed(4),t=sa.y.toFixed(4),e=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function tv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ev(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function hr(s){return s!==""}function Sh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(s){return s.replace(nv,sv)}const iv=new Map;function sv(s,t){let e=Qt[t];if(e===void 0){const n=iv.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pl(e)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bh(s){return s.replace(rv,av)}function av(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Th(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function ov(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(t="SHADOWMAP_TYPE_VSM"),t}function lv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function hv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vu:t="ENVMAP_BLENDING_MULTIPLY";break;case dp:t="ENVMAP_BLENDING_MIX";break;case fp:t="ENVMAP_BLENDING_ADD";break}return t}function uv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dv(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ov(e),c=lv(e),h=cv(e),d=hv(e),u=uv(e),f=Q0(e),g=tv(r),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,$0("linearToOutputTexel",e.outputColorSpace),J0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=Pl(a),a=Sh(a,e),a=Eh(a,e),o=Pl(o),o=Sh(o,e),o=Eh(o,e),a=bh(a),o=bh(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,v=x+p+o,A=xh(i,i.VERTEX_SHADER,y),w=xh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(L){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(A).trim(),Y=i.getShaderInfoLog(w).trim();let $=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const J=Mh(i,A,"vertex"),X=Mh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+J+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||Y==="")&&(H=!1);H&&(L.diagnostics={runnable:$,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(A),i.deleteShader(w),C=new va(i,_),M=ev(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,q0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let fv=0;class pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mv(t),e.set(t,n)),n}}class mv{constructor(t){this.id=fv++,this.code=t,this.usedTimes=0}}function _v(s,t,e,n,i,r,a){const o=new ac,l=new pv,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,G,k){const Y=G.fog,$=k.geometry,H=M.isMeshStandardMaterial?G.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),X=J&&J.mapping===Da?J.image.height:null,ft=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const I=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,P=I!==void 0?I.length:0;let ot=0;$.morphAttributes.position!==void 0&&(ot=1),$.morphAttributes.normal!==void 0&&(ot=2),$.morphAttributes.color!==void 0&&(ot=3);let mt,V,K,lt;if(ft){const ae=Gn[ft];mt=ae.vertexShader,V=ae.fragmentShader}else mt=M.vertexShader,V=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),lt=l.getFragmentShaderID(M);const et=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),St=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,zt=!!M.map,kt=!!M.matcap,Yt=!!J,N=!!M.aoMap,ce=!!M.lightMap,Gt=!!M.bumpMap,Wt=!!M.normalMap,It=!!M.displacementMap,ee=!!M.emissiveMap,Rt=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,W=M.clearcoat>0,rt=M.dispersion>0,ct=M.iridescence>0,nt=M.sheen>0,Nt=M.transmission>0,_t=E&&!!M.anisotropyMap,At=W&&!!M.clearcoatMap,Zt=W&&!!M.clearcoatNormalMap,st=W&&!!M.clearcoatRoughnessMap,Tt=ct&&!!M.iridescenceMap,Bt=ct&&!!M.iridescenceThicknessMap,Xt=nt&&!!M.sheenColorMap,Pt=nt&&!!M.sheenRoughnessMap,Kt=!!M.specularMap,jt=!!M.specularColorMap,$t=!!M.specularIntensityMap,B=Nt&&!!M.transmissionMap,xt=Nt&&!!M.thicknessMap,Z=!!M.gradientMap,at=!!M.alphaMap,Et=M.alphaTest>0,yt=!!M.alphaHash,Vt=!!M.extensions;let ue=Ci;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Oe={shaderID:ft,shaderType:M.type,shaderName:M.name,vertexShader:mt,fragmentShader:V,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:St,instancingColor:St&&k.instanceColor!==null,instancingMorph:St&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ks,alphaToCoverage:!!M.alphaToCoverage,map:zt,matcap:kt,envMap:Yt,envMapMode:Yt&&J.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:ce,bumpMap:Gt,normalMap:Wt,displacementMap:u&&It,emissiveMap:ee,normalMapObjectSpace:Wt&&M.normalMapType===Ep,normalMapTangentSpace:Wt&&M.normalMapType===rc,metalnessMap:Rt,roughnessMap:R,anisotropy:E,anisotropyMap:_t,clearcoat:W,clearcoatMap:At,clearcoatNormalMap:Zt,clearcoatRoughnessMap:st,dispersion:rt,iridescence:ct,iridescenceMap:Tt,iridescenceThicknessMap:Bt,sheen:nt,sheenColorMap:Xt,sheenRoughnessMap:Pt,specularMap:Kt,specularColorMap:jt,specularIntensityMap:$t,transmission:Nt,transmissionMap:B,thicknessMap:xt,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:at,alphaTest:Et,alphaHash:yt,combine:M.combine,mapUv:zt&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:ce&&_(M.lightMap.channel),bumpMapUv:Gt&&_(M.bumpMap.channel),normalMapUv:Wt&&_(M.normalMap.channel),displacementMapUv:It&&_(M.displacementMap.channel),emissiveMapUv:ee&&_(M.emissiveMap.channel),metalnessMapUv:Rt&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:_t&&_(M.anisotropyMap.channel),clearcoatMapUv:At&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(M.sheenRoughnessMap.channel),specularMapUv:Kt&&_(M.specularMap.channel),specularColorMapUv:jt&&_(M.specularColorMap.channel),specularIntensityMapUv:$t&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:xt&&_(M.thicknessMap.channel),alphaMapUv:at&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Wt||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(zt||at),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:zt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:ee&&M.emissiveMap.isVideoTexture===!0&&re.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wn,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Vt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&M.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const S=g[M.type];let L;if(S){const G=Gn[S];L=Qp.clone(G.uniforms)}else L=M.uniforms;return L}function A(M,S){let L;for(let G=0,k=h.length;G<k;G++){const Y=h[G];if(Y.cacheKey===S){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new dv(s,S,M,r),h.push(L)),L}function w(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:C}}function gv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function vv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ah(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||vv),n.length>1&&n.sort(u||wh),i.length>1&&i.sort(u||wh)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function xv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ah,s.set(n,[a])):i>=r.length?(a=new Ah,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function yv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new te};break;case"SpotLight":e={position:new D,direction:new D,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Mv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Sv=0;function Ev(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bv(s){const t=new yv,e=Mv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new xe,a=new xe;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,A=0,w=0,T=0;c.sort(Ev);for(let M=0,S=c.length;M<S;M++){const L=c[M],G=L.color,k=L.intensity,Y=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*k,d+=G.g*k,u+=G.b*k;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],k);T++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,X=e.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=L.shadow.matrix,x++}n.directional[f]=H,f++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(G).multiplyScalar(k),H.distance=Y,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const J=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,J.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=J.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=$,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(G).multiplyScalar(k),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const J=L.shadow,X=e.get(L);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(k),H.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=T,n.version=Sv++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ch(s){const t=new bv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Tv(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Ch(s),t.set(i,[o])):r>=a.length?(o=new Ch(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class wv extends ls{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Av extends ls{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
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
}`;function Pv(s,t,e){let n=new oc;const i=new Ct,r=new Ct,a=new me,o=new wv({depthPacking:Sp}),l=new Av,c={},h=e.maxTextureSize,d={[Di]:dn,[dn]:Di,[Wn]:Wn},u=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Cv,fragmentShader:Rv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new nn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ai),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=p!==ni&&this.type===ni,Y=p===ni&&this.type!==ni;for(let $=0,H=w.length;$<H;$++){const J=w[$],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ft=X.getFrameExtents();if(i.multiply(ft),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ft.x),i.x=r.x*ft.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ft.y),i.y=r.y*ft.y,X.mapSize.y=r.y)),X.map===null||k===!0||Y===!0){const P=this.type!==ni?{minFilter:kn,magFilter:kn}:{};X.map!==null&&X.map.dispose(),X.map=new is(i.x,i.y,P),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const I=X.getViewportCount();for(let P=0;P<I;P++){const ot=X.getViewport(P);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),G.viewport(a),X.updateMatrices(J,P),n=X.getFrustum(),v(T,C,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===ni&&x(X,C),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,L)};function x(w,T){const C=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,C,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,C,f,_,null)}function y(w,T,C,M){let S=null;const L=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=S.uuid,k=T.uuid;let Y=c[G];Y===void 0&&(Y={},c[G]=Y);let $=Y[k];$===void 0&&($=S.clone(),Y[k]=$,T.addEventListener("dispose",A)),S=$}if(S.visible=T.visible,S.wireframe=T.wireframe,M===ni?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=s.properties.get(S);G.light=C}return S}function v(w,T,C,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ni)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const k=t.update(w),Y=w.material;if(Array.isArray(Y)){const $=k.groups;for(let H=0,J=$.length;H<J;H++){const X=$[H],ft=Y[X.materialIndex];if(ft&&ft.visible){const I=y(w,ft,M,S);w.onBeforeShadow(s,w,T,C,k,I,X),s.renderBufferDirect(C,null,k,I,w,X),w.onAfterShadow(s,w,T,C,k,I,X)}}}else if(Y.visible){const $=y(w,Y,M,S);w.onBeforeShadow(s,w,T,C,k,$,null),s.renderBufferDirect(C,null,k,$,w,null),w.onAfterShadow(s,w,T,C,k,$,null)}}const G=w.children;for(let k=0,Y=G.length;k<Y;k++)v(G[k],T,C,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Lv={[qo]:Yo,[Ko]:Zo,[jo]:Jo,[Gs]:$o,[Yo]:qo,[Zo]:Ko,[Jo]:jo,[$o]:Gs};function Dv(s,t){function e(){let B=!1;const xt=new me;let Z=null;const at=new me(0,0,0,0);return{setMask:function(Et){Z!==Et&&!B&&(s.colorMask(Et,Et,Et,Et),Z=Et)},setLocked:function(Et){B=Et},setClear:function(Et,yt,Vt,ue,Oe){Oe===!0&&(Et*=ue,yt*=ue,Vt*=ue),xt.set(Et,yt,Vt,ue),at.equals(xt)===!1&&(s.clearColor(Et,yt,Vt,ue),at.copy(xt))},reset:function(){B=!1,Z=null,at.set(-1,0,0,0)}}}function n(){let B=!1,xt=!1,Z=null,at=null,Et=null;return{setReversed:function(yt){if(xt!==yt){const Vt=t.get("EXT_clip_control");xt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const ue=Et;Et=null,this.setClear(ue)}xt=yt},getReversed:function(){return xt},setTest:function(yt){yt?et(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(yt){Z!==yt&&!B&&(s.depthMask(yt),Z=yt)},setFunc:function(yt){if(xt&&(yt=Lv[yt]),at!==yt){switch(yt){case qo:s.depthFunc(s.NEVER);break;case Yo:s.depthFunc(s.ALWAYS);break;case Ko:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case jo:s.depthFunc(s.EQUAL);break;case $o:s.depthFunc(s.GEQUAL);break;case Zo:s.depthFunc(s.GREATER);break;case Jo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=yt}},setLocked:function(yt){B=yt},setClear:function(yt){Et!==yt&&(xt&&(yt=1-yt),s.clearDepth(yt),Et=yt)},reset:function(){B=!1,Z=null,at=null,Et=null,xt=!1}}}function i(){let B=!1,xt=null,Z=null,at=null,Et=null,yt=null,Vt=null,ue=null,Oe=null;return{setTest:function(ae){B||(ae?et(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(ae){xt!==ae&&!B&&(s.stencilMask(ae),xt=ae)},setFunc:function(ae,Se,mn){(Z!==ae||at!==Se||Et!==mn)&&(s.stencilFunc(ae,Se,mn),Z=ae,at=Se,Et=mn)},setOp:function(ae,Se,mn){(yt!==ae||Vt!==Se||ue!==mn)&&(s.stencilOp(ae,Se,mn),yt=ae,Vt=Se,ue=mn)},setLocked:function(ae){B=ae},setClear:function(ae){Oe!==ae&&(s.clearStencil(ae),Oe=ae)},reset:function(){B=!1,xt=null,Z=null,at=null,Et=null,yt=null,Vt=null,ue=null,Oe=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,A=null,w=null,T=new te(0,0,0),C=0,M=!1,S=null,L=null,G=null,k=null,Y=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=J>=2);let ft=null,I={};const P=s.getParameter(s.SCISSOR_BOX),ot=s.getParameter(s.VIEWPORT),mt=new me().fromArray(P),V=new me().fromArray(ot);function K(B,xt,Z,at){const Et=new Uint8Array(4),yt=s.createTexture();s.bindTexture(B,yt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Z;Vt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(xt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return yt}const lt={};lt[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),lt[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),lt[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Gs),Gt(!1),Wt(Ic),et(s.CULL_FACE),N(Ai);function et(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function pt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function St(B,xt){return d[B]!==xt?(s.bindFramebuffer(B,xt),d[B]=xt,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=xt),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function bt(B,xt){let Z=f,at=!1;if(B){Z=u.get(xt),Z===void 0&&(Z=[],u.set(xt,Z));const Et=B.textures;if(Z.length!==Et.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Vt=Et.length;yt<Vt;yt++)Z[yt]=s.COLOR_ATTACHMENT0+yt;Z.length=Et.length,at=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,at=!0);at&&s.drawBuffers(Z)}function zt(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const kt={[qi]:s.FUNC_ADD,[jf]:s.FUNC_SUBTRACT,[$f]:s.FUNC_REVERSE_SUBTRACT};kt[Zf]=s.MIN,kt[Jf]=s.MAX;const Yt={[Qf]:s.ZERO,[tp]:s.ONE,[ep]:s.SRC_COLOR,[Wo]:s.SRC_ALPHA,[op]:s.SRC_ALPHA_SATURATE,[rp]:s.DST_COLOR,[ip]:s.DST_ALPHA,[np]:s.ONE_MINUS_SRC_COLOR,[Xo]:s.ONE_MINUS_SRC_ALPHA,[ap]:s.ONE_MINUS_DST_COLOR,[sp]:s.ONE_MINUS_DST_ALPHA,[lp]:s.CONSTANT_COLOR,[cp]:s.ONE_MINUS_CONSTANT_COLOR,[hp]:s.CONSTANT_ALPHA,[up]:s.ONE_MINUS_CONSTANT_ALPHA};function N(B,xt,Z,at,Et,yt,Vt,ue,Oe,ae){if(B===Ai){_===!0&&(pt(s.BLEND),_=!1);return}if(_===!1&&(et(s.BLEND),_=!0),B!==Kf){if(B!==m||ae!==M){if((p!==qi||v!==qi)&&(s.blendEquation(s.FUNC_ADD),p=qi,v=qi),ae)switch(B){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ho:s.blendFunc(s.ONE,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ho:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,y=null,A=null,w=null,T.set(0,0,0),C=0,m=B,M=ae}return}Et=Et||xt,yt=yt||Z,Vt=Vt||at,(xt!==p||Et!==v)&&(s.blendEquationSeparate(kt[xt],kt[Et]),p=xt,v=Et),(Z!==x||at!==y||yt!==A||Vt!==w)&&(s.blendFuncSeparate(Yt[Z],Yt[at],Yt[yt],Yt[Vt]),x=Z,y=at,A=yt,w=Vt),(ue.equals(T)===!1||Oe!==C)&&(s.blendColor(ue.r,ue.g,ue.b,Oe),T.copy(ue),C=Oe),m=B,M=!1}function ce(B,xt){B.side===Wn?pt(s.CULL_FACE):et(s.CULL_FACE);let Z=B.side===dn;xt&&(Z=!Z),Gt(Z),B.blending===Ns&&B.transparent===!1?N(Ai):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const at=B.stencilWrite;o.setTest(at),at&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(B){S!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),S=B)}function Wt(B){B!==qf?(et(s.CULL_FACE),B!==L&&(B===Ic?s.cullFace(s.BACK):B===Yf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),L=B}function It(B){B!==G&&(H&&s.lineWidth(B),G=B)}function ee(B,xt,Z){B?(et(s.POLYGON_OFFSET_FILL),(k!==xt||Y!==Z)&&(s.polygonOffset(xt,Z),k=xt,Y=Z)):pt(s.POLYGON_OFFSET_FILL)}function Rt(B){B?et(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function R(B){B===void 0&&(B=s.TEXTURE0+$-1),ft!==B&&(s.activeTexture(B),ft=B)}function E(B,xt,Z){Z===void 0&&(ft===null?Z=s.TEXTURE0+$-1:Z=ft);let at=I[Z];at===void 0&&(at={type:void 0,texture:void 0},I[Z]=at),(at.type!==B||at.texture!==xt)&&(ft!==Z&&(s.activeTexture(Z),ft=Z),s.bindTexture(B,xt||lt[B]),at.type=B,at.texture=xt)}function W(){const B=I[ft];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xt(B){mt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),mt.copy(B))}function Pt(B){V.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),V.copy(B))}function Kt(B,xt){let Z=c.get(xt);Z===void 0&&(Z=new WeakMap,c.set(xt,Z));let at=Z.get(B);at===void 0&&(at=s.getUniformBlockIndex(xt,B.name),Z.set(B,at))}function jt(B,xt){const at=c.get(xt).get(B);l.get(xt)!==at&&(s.uniformBlockBinding(xt,at,B.__bindingPointIndex),l.set(xt,at))}function $t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ft=null,I={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,A=null,w=null,T=new te(0,0,0),C=0,M=!1,S=null,L=null,G=null,k=null,Y=null,mt.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:pt,bindFramebuffer:St,drawBuffers:bt,useProgram:zt,setBlending:N,setMaterial:ce,setFlipSided:Gt,setCullFace:Wt,setLineWidth:It,setPolygonOffset:ee,setScissorTest:Rt,activeTexture:R,bindTexture:E,unbindTexture:W,compressedTexImage2D:rt,compressedTexImage3D:ct,texImage2D:Tt,texImage3D:Bt,updateUBOMapping:Kt,uniformBlockBinding:jt,texStorage2D:Zt,texStorage3D:st,texSubImage2D:nt,texSubImage3D:Nt,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:Xt,viewport:Pt,reset:$t}}function Rh(s,t,e,n){const i=Iv(n);switch(e){case Yu:return s*t;case ju:return s*t;case $u:return s*t*2;case Zu:return s*t/i.components*i.byteLength;case nc:return s*t/i.components*i.byteLength;case Ju:return s*t*2/i.components*i.byteLength;case ic:return s*t*2/i.components*i.byteLength;case Ku:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case sc:return s*t*4/i.components*i.byteLength;case da:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sl:case al:return Math.max(s,16)*Math.max(t,8)/4;case il:case rl:return Math.max(s,8)*Math.max(t,8)/2;case ol:case ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ml:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case _l:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _a:case bl:case Tl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qu:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Al:case Cl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iv(s){switch(s){case hi:case Wu:return{byteLength:1,components:1};case br:case Xu:case Ar:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case ns:case Ql:case ri:return{byteLength:4,components:1};case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Nv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):Aa("canvas")}function _(R,E,W){let rt=1;const ct=Rt(R);if((ct.width>W||ct.height>W)&&(rt=W/Math.max(ct.width,ct.height)),rt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const nt=Math.floor(rt*ct.width),Nt=Math.floor(rt*ct.height);d===void 0&&(d=g(nt,Nt));const _t=E?g(nt,Nt):d;return _t.width=nt,_t.height=Nt,_t.getContext("2d").drawImage(R,0,0,nt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+Nt+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,E,W,rt,ct=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let nt=E;if(E===s.RED&&(W===s.FLOAT&&(nt=s.R32F),W===s.HALF_FLOAT&&(nt=s.R16F),W===s.UNSIGNED_BYTE&&(nt=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.R8UI),W===s.UNSIGNED_SHORT&&(nt=s.R16UI),W===s.UNSIGNED_INT&&(nt=s.R32UI),W===s.BYTE&&(nt=s.R8I),W===s.SHORT&&(nt=s.R16I),W===s.INT&&(nt=s.R32I)),E===s.RG&&(W===s.FLOAT&&(nt=s.RG32F),W===s.HALF_FLOAT&&(nt=s.RG16F),W===s.UNSIGNED_BYTE&&(nt=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.RG8UI),W===s.UNSIGNED_SHORT&&(nt=s.RG16UI),W===s.UNSIGNED_INT&&(nt=s.RG32UI),W===s.BYTE&&(nt=s.RG8I),W===s.SHORT&&(nt=s.RG16I),W===s.INT&&(nt=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.RGB8UI),W===s.UNSIGNED_SHORT&&(nt=s.RGB16UI),W===s.UNSIGNED_INT&&(nt=s.RGB32UI),W===s.BYTE&&(nt=s.RGB8I),W===s.SHORT&&(nt=s.RGB16I),W===s.INT&&(nt=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(nt=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(nt=s.RGBA16UI),W===s.UNSIGNED_INT&&(nt=s.RGBA32UI),W===s.BYTE&&(nt=s.RGBA8I),W===s.SHORT&&(nt=s.RGBA16I),W===s.INT&&(nt=s.RGBA32I)),E===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(nt=s.RGB9_E5),E===s.RGBA){const Nt=ct?Ia:re.getTransfer(rt);W===s.FLOAT&&(nt=s.RGBA32F),W===s.HALF_FLOAT&&(nt=s.RGBA16F),W===s.UNSIGNED_BYTE&&(nt=Nt===fe?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(R,E){let W;return R?E===null||E===ns||E===Xs?W=s.DEPTH24_STENCIL8:E===ri?W=s.DEPTH32F_STENCIL8:E===br&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ns||E===Xs?W=s.DEPTH_COMPONENT24:E===ri?W=s.DEPTH_COMPONENT32F:E===br&&(W=s.DEPTH_COMPONENT16),W}function A(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==kn&&R.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),S(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const W=R.source,rt=u.get(W);if(rt){const ct=rt[E.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&M(R),Object.keys(rt).length===0&&u.delete(W)}n.remove(R)}function M(R){const E=n.get(R);s.deleteTexture(E.__webglTexture);const W=R.source,rt=u.get(W);delete rt[E.__cacheKey],a.memory.textures--}function S(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let ct=0;ct<E.__webglFramebuffer[rt].length;ct++)s.deleteFramebuffer(E.__webglFramebuffer[rt][ct]);else s.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)s.deleteFramebuffer(E.__webglFramebuffer[rt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let rt=0,ct=W.length;rt<ct;rt++){const nt=n.get(W[rt]);nt.__webglTexture&&(s.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(W[rt])}n.remove(R)}let L=0;function G(){L=0}function k(){const R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const W=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const rt=R.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(W,R,E);return}}e.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function H(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){V(W,R,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function J(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){V(W,R,E);return}e.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function X(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const ft={[el]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[nl]:s.MIRRORED_REPEAT},I={[kn]:s.NEAREST,[yp]:s.NEAREST_MIPMAP_NEAREST,[kr]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[qa]:s.LINEAR_MIPMAP_NEAREST,[$i]:s.LINEAR_MIPMAP_LINEAR},P={[bp]:s.NEVER,[Pp]:s.ALWAYS,[Tp]:s.LESS,[td]:s.LEQUAL,[wp]:s.EQUAL,[Rp]:s.GEQUAL,[Ap]:s.GREATER,[Cp]:s.NOTEQUAL};function ot(R,E){if(E.type===ri&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===qa||E.magFilter===kr||E.magFilter===$i||E.minFilter===qn||E.minFilter===qa||E.minFilter===kr||E.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ft[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ft[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ft[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,I[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kn||E.minFilter!==kr&&E.minFilter!==$i||E.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function mt(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const rt=E.source;let ct=u.get(rt);ct===void 0&&(ct={},u.set(rt,ct));const nt=Y(E);if(nt!==R.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ct[nt].usedTimes++;const Nt=ct[R.__cacheKey];Nt!==void 0&&(ct[R.__cacheKey].usedTimes--,Nt.usedTimes===0&&M(E)),R.__cacheKey=nt,R.__webglTexture=ct[nt].texture}return W}function V(R,E,W){let rt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(rt=s.TEXTURE_3D);const ct=mt(R,E),nt=E.source;e.bindTexture(rt,R.__webglTexture,s.TEXTURE0+W);const Nt=n.get(nt);if(nt.version!==Nt.__version||ct===!0){e.activeTexture(s.TEXTURE0+W);const _t=re.getPrimaries(re.workingColorSpace),At=E.colorSpace===Mi?null:re.getPrimaries(E.colorSpace),Zt=E.colorSpace===Mi||_t===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let st=_(E.image,!1,i.maxTextureSize);st=ee(E,st);const Tt=r.convert(E.format,E.colorSpace),Bt=r.convert(E.type);let Xt=y(E.internalFormat,Tt,Bt,E.colorSpace,E.isVideoTexture);ot(rt,E);let Pt;const Kt=E.mipmaps,jt=E.isVideoTexture!==!0,$t=Nt.__version===void 0||ct===!0,B=nt.dataReady,xt=A(E,st);if(E.isDepthTexture)Xt=v(E.format===qs,E.type),$t&&(jt?e.texStorage2D(s.TEXTURE_2D,1,Xt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Xt,st.width,st.height,0,Tt,Bt,null));else if(E.isDataTexture)if(Kt.length>0){jt&&$t&&e.texStorage2D(s.TEXTURE_2D,xt,Xt,Kt[0].width,Kt[0].height);for(let Z=0,at=Kt.length;Z<at;Z++)Pt=Kt[Z],jt?B&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Tt,Bt,Pt.data):e.texImage2D(s.TEXTURE_2D,Z,Xt,Pt.width,Pt.height,0,Tt,Bt,Pt.data);E.generateMipmaps=!1}else jt?($t&&e.texStorage2D(s.TEXTURE_2D,xt,Xt,st.width,st.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Tt,Bt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Xt,st.width,st.height,0,Tt,Bt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Xt,Kt[0].width,Kt[0].height,st.depth);for(let Z=0,at=Kt.length;Z<at;Z++)if(Pt=Kt[Z],E.format!==Fn)if(Tt!==null)if(jt){if(B)if(E.layerUpdates.size>0){const Et=Rh(Pt.width,Pt.height,E.format,E.type);for(const yt of E.layerUpdates){const Vt=Pt.data.subarray(yt*Et/Pt.data.BYTES_PER_ELEMENT,(yt+1)*Et/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,yt,Pt.width,Pt.height,1,Tt,Vt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,st.depth,Tt,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Xt,Pt.width,Pt.height,st.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,st.depth,Tt,Bt,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Xt,Pt.width,Pt.height,st.depth,0,Tt,Bt,Pt.data)}else{jt&&$t&&e.texStorage2D(s.TEXTURE_2D,xt,Xt,Kt[0].width,Kt[0].height);for(let Z=0,at=Kt.length;Z<at;Z++)Pt=Kt[Z],E.format!==Fn?Tt!==null?jt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Tt,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Xt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?B&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,Tt,Bt,Pt.data):e.texImage2D(s.TEXTURE_2D,Z,Xt,Pt.width,Pt.height,0,Tt,Bt,Pt.data)}else if(E.isDataArrayTexture)if(jt){if($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Xt,st.width,st.height,st.depth),B)if(E.layerUpdates.size>0){const Z=Rh(st.width,st.height,E.format,E.type);for(const at of E.layerUpdates){const Et=st.data.subarray(at*Z/st.data.BYTES_PER_ELEMENT,(at+1)*Z/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,st.width,st.height,1,Tt,Bt,Et)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Tt,Bt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,st.width,st.height,st.depth,0,Tt,Bt,st.data);else if(E.isData3DTexture)jt?($t&&e.texStorage3D(s.TEXTURE_3D,xt,Xt,st.width,st.height,st.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Tt,Bt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Xt,st.width,st.height,st.depth,0,Tt,Bt,st.data);else if(E.isFramebufferTexture){if($t)if(jt)e.texStorage2D(s.TEXTURE_2D,xt,Xt,st.width,st.height);else{let Z=st.width,at=st.height;for(let Et=0;Et<xt;Et++)e.texImage2D(s.TEXTURE_2D,Et,Xt,Z,at,0,Tt,Bt,null),Z>>=1,at>>=1}}else if(Kt.length>0){if(jt&&$t){const Z=Rt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,xt,Xt,Z.width,Z.height)}for(let Z=0,at=Kt.length;Z<at;Z++)Pt=Kt[Z],jt?B&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Tt,Bt,Pt):e.texImage2D(s.TEXTURE_2D,Z,Xt,Tt,Bt,Pt);E.generateMipmaps=!1}else if(jt){if($t){const Z=Rt(st);e.texStorage2D(s.TEXTURE_2D,xt,Xt,Z.width,Z.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Bt,st)}else e.texImage2D(s.TEXTURE_2D,0,Xt,Tt,Bt,st);m(E)&&p(rt),Nt.__version=nt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function K(R,E,W){if(E.image.length!==6)return;const rt=mt(R,E),ct=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);const nt=n.get(ct);if(ct.version!==nt.__version||rt===!0){e.activeTexture(s.TEXTURE0+W);const Nt=re.getPrimaries(re.workingColorSpace),_t=E.colorSpace===Mi?null:re.getPrimaries(E.colorSpace),At=E.colorSpace===Mi||Nt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let at=0;at<6;at++)!Zt&&!st?Tt[at]=_(E.image[at],!0,i.maxCubemapSize):Tt[at]=st?E.image[at].image:E.image[at],Tt[at]=ee(E,Tt[at]);const Bt=Tt[0],Xt=r.convert(E.format,E.colorSpace),Pt=r.convert(E.type),Kt=y(E.internalFormat,Xt,Pt,E.colorSpace),jt=E.isVideoTexture!==!0,$t=nt.__version===void 0||rt===!0,B=ct.dataReady;let xt=A(E,Bt);ot(s.TEXTURE_CUBE_MAP,E);let Z;if(Zt){jt&&$t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Kt,Bt.width,Bt.height);for(let at=0;at<6;at++){Z=Tt[at].mipmaps;for(let Et=0;Et<Z.length;Et++){const yt=Z[Et];E.format!==Fn?Xt!==null?jt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,0,0,yt.width,yt.height,Xt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,Kt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,0,0,yt.width,yt.height,Xt,Pt,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et,Kt,yt.width,yt.height,0,Xt,Pt,yt.data)}}}else{if(Z=E.mipmaps,jt&&$t){Z.length>0&&xt++;const at=Rt(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,xt,Kt,at.width,at.height)}for(let at=0;at<6;at++)if(st){jt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Tt[at].width,Tt[at].height,Xt,Pt,Tt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,Tt[at].width,Tt[at].height,0,Xt,Pt,Tt[at].data);for(let Et=0;Et<Z.length;Et++){const Vt=Z[Et].image[at].image;jt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,0,0,Vt.width,Vt.height,Xt,Pt,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,Kt,Vt.width,Vt.height,0,Xt,Pt,Vt.data)}}else{jt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Xt,Pt,Tt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,Xt,Pt,Tt[at]);for(let Et=0;Et<Z.length;Et++){const yt=Z[Et];jt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,0,0,Xt,Pt,yt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Et+1,Kt,Xt,Pt,yt.image[at])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),nt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function lt(R,E,W,rt,ct,nt){const Nt=r.convert(W.format,W.colorSpace),_t=r.convert(W.type),At=y(W.internalFormat,Nt,_t,W.colorSpace),Zt=n.get(E),st=n.get(W);if(st.__renderTarget=E,!Zt.__hasExternalTextures){const Tt=Math.max(1,E.width>>nt),Bt=Math.max(1,E.height>>nt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,At,Tt,Bt,E.depth,0,Nt,_t,null):e.texImage2D(ct,nt,At,Tt,Bt,0,Nt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Wt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,ct,st.__webglTexture,0,Gt(E)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,ct,st.__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(R,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer){const rt=E.depthTexture,ct=rt&&rt.isDepthTexture?rt.type:null,nt=v(E.stencilBuffer,ct),Nt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=Gt(E);Wt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,nt,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,nt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,nt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,R)}else{const rt=E.textures;for(let ct=0;ct<rt.length;ct++){const nt=rt[ct],Nt=r.convert(nt.format,nt.colorSpace),_t=r.convert(nt.type),At=y(nt.internalFormat,Nt,_t,nt.colorSpace),Zt=Gt(E);W&&Wt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,At,E.width,E.height):Wt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,At,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,At,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(E.depthTexture);rt.__renderTarget=E,(!rt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ct=rt.__webglTexture,nt=Gt(E);if(E.depthTexture.format===Us)Wt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ct,0);else if(E.depthTexture.format===qs)Wt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0,nt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function St(R){const E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const rt=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),rt){const ct=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,rt.removeEventListener("dispose",ct)};rt.addEventListener("dispose",ct),E.__depthDisposeCallback=ct}E.__boundDepthTexture=rt}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");pt(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[rt]),E.__webglDepthbuffer[rt]===void 0)E.__webglDepthbuffer[rt]=s.createRenderbuffer(),et(E.__webglDepthbuffer[rt],R,!1);else{const ct=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),et(E.__webglDepthbuffer,R,!1);else{const rt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,ct)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(R,E,W){const rt=n.get(R);E!==void 0&&lt(rt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&St(R)}function zt(R){const E=R.texture,W=n.get(R),rt=n.get(E);R.addEventListener("dispose",T);const ct=R.textures,nt=R.isWebGLCubeRenderTarget===!0,Nt=ct.length>1;if(Nt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=E.version,a.memory.textures++),nt){W.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[_t]=[];for(let At=0;At<E.mipmaps.length;At++)W.__webglFramebuffer[_t][At]=s.createFramebuffer()}else W.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let _t=0;_t<E.mipmaps.length;_t++)W.__webglFramebuffer[_t]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Nt)for(let _t=0,At=ct.length;_t<At;_t++){const Zt=n.get(ct[_t]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Wt(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const At=ct[_t];W.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[_t]);const Zt=r.convert(At.format,At.colorSpace),st=r.convert(At.type),Tt=y(At.internalFormat,Zt,st,At.colorSpace,R.isXRRenderTarget===!0),Bt=Gt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,Tt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,W.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),et(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(nt){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),ot(s.TEXTURE_CUBE_MAP,E);for(let _t=0;_t<6;_t++)if(E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)lt(W.__webglFramebuffer[_t][At],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else lt(W.__webglFramebuffer[_t],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(E)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let _t=0,At=ct.length;_t<At;_t++){const Zt=ct[_t],st=n.get(Zt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),ot(s.TEXTURE_2D,Zt),lt(W.__webglFramebuffer,R,Zt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),m(Zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),ot(_t,E),E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)lt(W.__webglFramebuffer[At],R,E,s.COLOR_ATTACHMENT0,_t,At);else lt(W.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,_t,0);m(E)&&p(_t),e.unbindTexture()}R.depthBuffer&&St(R)}function kt(R){const E=R.textures;for(let W=0,rt=E.length;W<rt;W++){const ct=E[W];if(m(ct)){const nt=x(R),Nt=n.get(ct).__webglTexture;e.bindTexture(nt,Nt),p(nt),e.unbindTexture()}}}const Yt=[],N=[];function ce(R){if(R.samples>0){if(Wt(R)===!1){const E=R.textures,W=R.width,rt=R.height;let ct=s.COLOR_BUFFER_BIT;const nt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=n.get(R),_t=E.length>1;if(_t)for(let At=0;At<E.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let At=0;At<E.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[At]);const Zt=n.get(E[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,W,rt,0,0,W,rt,ct,s.NEAREST),l===!0&&(Yt.length=0,N.length=0,Yt.push(s.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Yt.push(nt),N.push(nt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let At=0;At<E.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[At]);const Zt=n.get(E[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Gt(R){return Math.min(i.maxSamples,R.samples)}function Wt(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ee(R,E){const W=R.colorSpace,rt=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Ks&&W!==Mi&&(re.getTransfer(W)===fe?(rt!==Fn||ct!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=bt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Wt}function Uv(s,t){function e(n,i=Mi){let r;const a=re.getTransfer(i);if(n===hi)return s.UNSIGNED_BYTE;if(n===tc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return s.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return s.BYTE;if(n===Xu)return s.SHORT;if(n===br)return s.UNSIGNED_SHORT;if(n===Ql)return s.INT;if(n===ns)return s.UNSIGNED_INT;if(n===ri)return s.FLOAT;if(n===Ar)return s.HALF_FLOAT;if(n===Yu)return s.ALPHA;if(n===Ku)return s.RGB;if(n===Fn)return s.RGBA;if(n===ju)return s.LUMINANCE;if(n===$u)return s.LUMINANCE_ALPHA;if(n===Us)return s.DEPTH_COMPONENT;if(n===qs)return s.DEPTH_STENCIL;if(n===Zu)return s.RED;if(n===nc)return s.RED_INTEGER;if(n===Ju)return s.RG;if(n===ic)return s.RG_INTEGER;if(n===sc)return s.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===ll||n===cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===ll)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===_l||n===gl||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===bl||n===Tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===wl||n===Al||n===Cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Ov extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ye extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fv={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new fn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ii({vertexShader:kv,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vv extends os{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new zv,m=e.getContextAttributes();let p=null,x=null;const y=[],v=[],A=new Ct;let w=null;const T=new Mn;T.viewport=new me;const C=new Mn;C.viewport=new me;const M=[T,C],S=new Ov;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=y[V];return K===void 0&&(K=new Mo,y[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=y[V];return K===void 0&&(K=new Mo,y[V]=K),K.getGripSpace()},this.getHand=function(V){let K=y[V];return K===void 0&&(K=new Mo,y[V]=K),K.getHandSpace()};function k(V){const K=v.indexOf(V.inputSource);if(K===-1)return;const lt=y[K];lt!==void 0&&(lt.update(V.inputSource,V.frame,c||a),lt.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",$);for(let V=0;V<y.length;V++){const K=v[V];K!==null&&(v[V]=null,y[V].disconnect(K))}L=null,G=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,x=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new is(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,lt=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?qs:Us,lt=m.stencil?Xs:ns);const pt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(pt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new is(u.textureWidth,u.textureHeight,{format:Fn,type:hi,depthTexture:new dd(u.textureWidth,u.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(V){for(let K=0;K<V.removed.length;K++){const lt=V.removed[K],et=v.indexOf(lt);et>=0&&(v[et]=null,y[et].disconnect(lt))}for(let K=0;K<V.added.length;K++){const lt=V.added[K];let et=v.indexOf(lt);if(et===-1){for(let St=0;St<y.length;St++)if(St>=v.length){v.push(lt),et=St;break}else if(v[St]===null){v[St]=lt,et=St;break}if(et===-1)break}const pt=y[et];pt&&pt.connect(lt)}}const H=new D,J=new D;function X(V,K,lt){H.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(lt.matrixWorld);const et=H.distanceTo(J),pt=K.projectionMatrix.elements,St=lt.projectionMatrix.elements,bt=pt[14]/(pt[10]-1),zt=pt[14]/(pt[10]+1),kt=(pt[9]+1)/pt[5],Yt=(pt[9]-1)/pt[5],N=(pt[8]-1)/pt[0],ce=(St[8]+1)/St[0],Gt=bt*N,Wt=bt*ce,It=et/(-N+ce),ee=It*-N;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ee),V.translateZ(It),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),pt[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Rt=bt+It,R=zt+It,E=Gt-ee,W=Wt+(et-ee),rt=kt*zt/R*Rt,ct=Yt*zt/R*Rt;V.projectionMatrix.makePerspective(E,W,rt,ct,Rt,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ft(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let K=V.near,lt=V.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(lt=_.depthFar)),S.near=C.near=T.near=K,S.far=C.far=T.far=lt,(L!==S.near||G!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,G=S.far),T.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const et=V.parent,pt=S.cameras;ft(S,et);for(let St=0;St<pt.length;St++)ft(pt[St],et);pt.length===2?X(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),I(V,S,et)};function I(V,K,lt){lt===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(lt.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Rl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let P=null;function ot(V,K){if(h=K.getViewerPose(c||a),g=K,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let et=!1;lt.length!==S.cameras.length&&(S.cameras.length=0,et=!0);for(let St=0;St<lt.length;St++){const bt=lt[St];let zt=null;if(f!==null)zt=f.getViewport(bt);else{const Yt=d.getViewSubImage(u,bt);zt=Yt.viewport,St===0&&(t.setRenderTargetTextures(x,Yt.colorTexture,u.ignoreDepthValues?void 0:Yt.depthStencilTexture),t.setRenderTarget(x))}let kt=M[St];kt===void 0&&(kt=new Mn,kt.layers.enable(St),kt.viewport=new me,M[St]=kt),kt.matrix.fromArray(bt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(bt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(zt.x,zt.y,zt.width,zt.height),St===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),et===!0&&S.cameras.push(kt)}const pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const St=d.getDepthInformation(lt[0]);St&&St.isValid&&St.texture&&_.init(t,St,i.renderState)}}for(let lt=0;lt<y.length;lt++){const et=v[lt],pt=y[lt];et!==null&&pt!==void 0&&pt.update(et,K,c||a)}P&&P(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const mt=new hd;mt.setAnimationLoop(ot),this.setAnimationLoop=function(V){P=V},this.dispose=function(){}}}const Hi=new Kn,Gv=new xe;function Hv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,od(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Hi.copy(v),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(Hi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(x,A);const w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const y=d();x.__bindingPointIndex=y;const v=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],v=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,T=v.length;w<T;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=C.length;M<S;M++){const L=C[M];if(f(L,w,M,A)===!0){const G=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let $=0;$<k.length;$++){const H=k[$],J=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+Y,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,v,A){const w=x.value,T=y+"_"+v;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const C=A[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const y=x.uniforms;let v=0;const A=16;for(let T=0,C=y.length;T<C;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,L=M.length;S<L;S++){const G=M[S],k=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,$=k.length;Y<$;Y++){const H=k[Y],J=_(H),X=v%A,ft=X%J.boundary,I=X+ft;v+=ft,I!==0&&A-I<J.storage&&(v+=A-I),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=J.storage}}}const w=v%A;return w>0&&(v+=A-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Xv{constructor(t={}){const{canvas:e=Ip(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=Ci,this.toneMappingExposure=1;const v=this;let A=!1,w=0,T=0,C=null,M=-1,S=null;const L=new me,G=new me;let k=null;const Y=new te(0);let $=0,H=e.width,J=e.height,X=1,ft=null,I=null;const P=new me(0,0,H,J),ot=new me(0,0,H,J);let mt=!1;const V=new oc;let K=!1,lt=!1;const et=new xe,pt=new xe,St=new D,bt=new me,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Yt(){return C===null?X:1}let N=n;function ce(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",yt,!1),N===null){const F="webgl2";if(N=ce(F,b),N===null)throw ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Gt,Wt,It,ee,Rt,R,E,W,rt,ct,nt,Nt,_t,At,Zt,st,Tt,Bt,Xt,Pt,Kt,jt,$t,B;function xt(){Gt=new $g(N),Gt.init(),jt=new Uv(N,Gt),Wt=new Wg(N,Gt,t,jt),It=new Dv(N,Gt),Wt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),ee=new Qg(N),Rt=new gv,R=new Nv(N,Gt,It,Rt,Wt,jt,ee),E=new qg(v),W=new jg(v),rt=new am(N),$t=new Gg(N,rt),ct=new Zg(N,rt,ee,$t),nt=new e0(N,ct,rt,ee),Xt=new t0(N,Wt,R),st=new Xg(Rt),Nt=new _v(v,E,W,Gt,Wt,$t,st),_t=new Hv(v,Rt),At=new xv,Zt=new Tv(Gt),Bt=new Vg(v,E,W,It,nt,f,l),Tt=new Pv(v,nt,Wt),B=new Wv(N,ee,Wt,It),Pt=new Hg(N,Gt,ee),Kt=new Jg(N,Gt,ee),ee.programs=Nt.programs,v.capabilities=Wt,v.extensions=Gt,v.properties=Rt,v.renderLists=At,v.shadowMap=Tt,v.state=It,v.info=ee}xt();const Z=new Vv(v,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(H,J,!1))},this.getSize=function(b){return b.set(H,J)},this.setSize=function(b,F,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,J=F,e.width=Math.floor(b*X),e.height=Math.floor(F*X),q===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(H*X,J*X).floor()},this.setDrawingBufferSize=function(b,F,q){H=b,J=F,X=q,e.width=Math.floor(b*q),e.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,F,q,j){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,F,q,j),It.viewport(L.copy(P).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,F,q,j){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,F,q,j),It.scissor(G.copy(ot).multiplyScalar(X).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(b){It.setScissorTest(mt=b)},this.setOpaqueSort=function(b){ft=b},this.setTransparentSort=function(b){I=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,F=!0,q=!0){let j=0;if(b){let z=!1;if(C!==null){const dt=C.texture.format;z=dt===sc||dt===ic||dt===nc}if(z){const dt=C.texture.type,Mt=dt===hi||dt===ns||dt===br||dt===Xs||dt===tc||dt===ec,Lt=Bt.getClearColor(),Ut=Bt.getClearAlpha(),U=Lt.r,tt=Lt.g,ht=Lt.b;Mt?(g[0]=U,g[1]=tt,g[2]=ht,g[3]=Ut,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=U,_[1]=tt,_[2]=ht,_[3]=Ut,N.clearBufferiv(N.COLOR,0,_))}else j|=N.COLOR_BUFFER_BIT}F&&(j|=N.DEPTH_BUFFER_BIT),q&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),At.dispose(),Zt.dispose(),Rt.dispose(),E.dispose(),W.dispose(),nt.dispose(),$t.dispose(),B.dispose(),Nt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Pr),Z.removeEventListener("sessionend",Lr),jn.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=ee.autoReset,F=Tt.enabled,q=Tt.autoUpdate,j=Tt.needsUpdate,z=Tt.type;xt(),ee.autoReset=b,Tt.enabled=F,Tt.autoUpdate=q,Tt.needsUpdate=j,Tt.type=z}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Vt(b){const F=b.target;F.removeEventListener("dispose",Vt),ue(F)}function ue(b){Oe(b),Rt.remove(b)}function Oe(b){const F=Rt.get(b).programs;F!==void 0&&(F.forEach(function(q){Nt.releaseProgram(q)}),b.isShaderMaterial&&Nt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,j,z,dt){F===null&&(F=zt);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,Lt=Ir(b,F,q,j,z);It.setMaterial(j,Mt);let Ut=q.index,U=1;if(j.wireframe===!0){if(Ut=ct.getWireframeAttribute(q),Ut===void 0)return;U=2}const tt=q.drawRange,ht=q.attributes.position;let O=tt.start*U,Dt=(tt.start+tt.count)*U;dt!==null&&(O=Math.max(O,dt.start*U),Dt=Math.min(Dt,(dt.start+dt.count)*U)),Ut!==null?(O=Math.max(O,0),Dt=Math.min(Dt,Ut.count)):ht!=null&&(O=Math.max(O,0),Dt=Math.min(Dt,ht.count));const Ht=Dt-O;if(Ht<0||Ht===1/0)return;$t.setup(z,j,Lt,q,Ut);let Ot,wt=Pt;if(Ut!==null&&(Ot=rt.get(Ut),wt=Kt,wt.setIndex(Ot)),z.isMesh)j.wireframe===!0?(It.setLineWidth(j.wireframeLinewidth*Yt()),wt.setMode(N.LINES)):wt.setMode(N.TRIANGLES);else if(z.isLine){let ut=j.linewidth;ut===void 0&&(ut=1),It.setLineWidth(ut*Yt()),z.isLineSegments?wt.setMode(N.LINES):z.isLineLoop?wt.setMode(N.LINE_LOOP):wt.setMode(N.LINE_STRIP)}else z.isPoints?wt.setMode(N.POINTS):z.isSprite&&wt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)wt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))wt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const ut=z._multiDrawStarts,ie=z._multiDrawCounts,Ft=z._multiDrawCount,se=Ut?rt.get(Ut).bytesPerElement:1,de=Rt.get(j).currentProgram.getUniforms();for(let ve=0;ve<Ft;ve++)de.setValue(N,"_gl_DrawID",ve),wt.render(ut[ve]/se,ie[ve])}else if(z.isInstancedMesh)wt.renderInstances(O,Ht,z.count);else if(q.isInstancedBufferGeometry){const ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ie=Math.min(q.instanceCount,ut);wt.renderInstances(O,Ht,ie)}else wt.render(O,Ht)};function ae(b,F,q){b.transparent===!0&&b.side===Wn&&b.forceSinglePass===!1?(b.side=dn,b.needsUpdate=!0,$n(b,F,q),b.side=Di,b.needsUpdate=!0,$n(b,F,q),b.side=Wn):$n(b,F,q)}this.compile=function(b,F,q=null){q===null&&(q=b),p=Zt.get(q),p.init(F),y.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==q&&b.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const j=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const dt=z.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const Lt=dt[Mt];ae(Lt,q,z),j.add(Lt)}else ae(dt,q,z),j.add(dt)}),y.pop(),p=null,j},this.compileAsync=function(b,F,q=null){const j=this.compile(b,F,q);return new Promise(z=>{function dt(){if(j.forEach(function(Mt){Rt.get(Mt).currentProgram.isReady()&&j.delete(Mt)}),j.size===0){z(b);return}setTimeout(dt,10)}Gt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Se=null;function mn(b){Se&&Se(b)}function Pr(){jn.stop()}function Lr(){jn.start()}const jn=new hd;jn.setAnimationLoop(mn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){Se=b,Z.setAnimationLoop(b),b===null?jn.stop():jn.start()},Z.addEventListener("sessionstart",Pr),Z.addEventListener("sessionend",Lr),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,C),p=Zt.get(b,y.length),p.init(F),y.push(p),pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(pt),lt=this.localClippingEnabled,K=st.init(this.clippingPlanes,lt),m=At.get(b,x.length),m.init(),x.push(m),Z.enabled===!0&&Z.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&$s(dt,F,-1/0,v.sortObjects)}$s(b,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ft,I),kt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,kt&&Bt.addToRenderList(m,b),this.info.render.frame++,K===!0&&st.beginShadows();const q=p.state.shadowsArray;Tt.render(q,b,F),K===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,z=m.transmissive;if(p.setupLights(),F.isArrayCamera){const dt=F.cameras;if(z.length>0)for(let Mt=0,Lt=dt.length;Mt<Lt;Mt++){const Ut=dt[Mt];Dr(j,z,b,Ut)}kt&&Bt.render(b);for(let Mt=0,Lt=dt.length;Mt<Lt;Mt++){const Ut=dt[Mt];Zs(m,b,Ut,Ut.viewport)}}else z.length>0&&Dr(j,z,b,F),kt&&Bt.render(b),Zs(m,b,F);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,F),$t.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&st.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function $s(b,F,q,j){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){j&&bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);const Mt=nt.update(b),Lt=b.material;Lt.visible&&m.push(b,Mt,Lt,q,bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){const Mt=nt.update(b),Lt=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),bt.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),bt.copy(Mt.boundingSphere.center)),bt.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(Lt)){const Ut=Mt.groups;for(let U=0,tt=Ut.length;U<tt;U++){const ht=Ut[U],O=Lt[ht.materialIndex];O&&O.visible&&m.push(b,Mt,O,q,bt.z,ht)}}else Lt.visible&&m.push(b,Mt,Lt,q,bt.z,null)}}const dt=b.children;for(let Mt=0,Lt=dt.length;Mt<Lt;Mt++)$s(dt[Mt],F,q,j)}function Zs(b,F,q,j){const z=b.opaque,dt=b.transmissive,Mt=b.transparent;p.setupLightsView(q),K===!0&&st.setGlobalState(v.clippingPlanes,q),j&&It.viewport(L.copy(j)),z.length>0&&Ui(z,F,q),dt.length>0&&Ui(dt,F,q),Mt.length>0&&Ui(Mt,F,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Dr(b,F,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new is(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Ar:hi,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const dt=p.state.transmissionRenderTarget[j.id],Mt=j.viewport||L;dt.setSize(Mt.z,Mt.w);const Lt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(Y),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),kt&&Bt.render(q);const Ut=v.toneMapping;v.toneMapping=Ci;const U=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),K===!0&&st.setGlobalState(v.clippingPlanes,j),Ui(b,q,j),R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ht=0,O=F.length;ht<O;ht++){const Dt=F[ht],Ht=Dt.object,Ot=Dt.geometry,wt=Dt.material,ut=Dt.group;if(wt.side===Wn&&Ht.layers.test(j.layers)){const ie=wt.side;wt.side=dn,wt.needsUpdate=!0,Js(Ht,q,j,Ot,wt,ut),wt.side=ie,wt.needsUpdate=!0,tt=!0}}tt===!0&&(R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt))}v.setRenderTarget(Lt),v.setClearColor(Y,$),U!==void 0&&(j.viewport=U),v.toneMapping=Ut}function Ui(b,F,q){const j=F.isScene===!0?F.overrideMaterial:null;for(let z=0,dt=b.length;z<dt;z++){const Mt=b[z],Lt=Mt.object,Ut=Mt.geometry,U=j===null?Mt.material:j,tt=Mt.group;Lt.layers.test(q.layers)&&Js(Lt,F,q,Ut,U,tt)}}function Js(b,F,q,j,z,dt){b.onBeforeRender(v,F,q,j,z,dt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(v,F,q,j,b,dt),z.transparent===!0&&z.side===Wn&&z.forceSinglePass===!1?(z.side=dn,z.needsUpdate=!0,v.renderBufferDirect(q,F,j,z,b,dt),z.side=Di,z.needsUpdate=!0,v.renderBufferDirect(q,F,j,z,b,dt),z.side=Wn):v.renderBufferDirect(q,F,j,z,b,dt),b.onAfterRender(v,F,q,j,z,dt)}function $n(b,F,q){F.isScene!==!0&&(F=zt);const j=Rt.get(b),z=p.state.lights,dt=p.state.shadowsArray,Mt=z.state.version,Lt=Nt.getParameters(b,z.state,dt,F,q),Ut=Nt.getProgramCacheKey(Lt);let U=j.programs;j.environment=b.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(b.isMeshStandardMaterial?W:E).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,U===void 0&&(b.addEventListener("dispose",Vt),U=new Map,j.programs=U);let tt=U.get(Ut);if(tt!==void 0){if(j.currentProgram===tt&&j.lightsStateVersion===Mt)return cs(b,Lt),tt}else Lt.uniforms=Nt.getUniforms(b),b.onBeforeCompile(Lt,v),tt=Nt.acquireProgram(Lt,Ut),U.set(Ut,tt),j.uniforms=Lt.uniforms;const ht=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ht.clippingPlanes=st.uniform),cs(b,Lt),j.needsLights=Ur(b),j.lightsStateVersion=Mt,j.needsLights&&(ht.ambientLightColor.value=z.state.ambient,ht.lightProbe.value=z.state.probe,ht.directionalLights.value=z.state.directional,ht.directionalLightShadows.value=z.state.directionalShadow,ht.spotLights.value=z.state.spot,ht.spotLightShadows.value=z.state.spotShadow,ht.rectAreaLights.value=z.state.rectArea,ht.ltc_1.value=z.state.rectAreaLTC1,ht.ltc_2.value=z.state.rectAreaLTC2,ht.pointLights.value=z.state.point,ht.pointLightShadows.value=z.state.pointShadow,ht.hemisphereLights.value=z.state.hemi,ht.directionalShadowMap.value=z.state.directionalShadowMap,ht.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ht.spotShadowMap.value=z.state.spotShadowMap,ht.spotLightMatrix.value=z.state.spotLightMatrix,ht.spotLightMap.value=z.state.spotLightMap,ht.pointShadowMap.value=z.state.pointShadowMap,ht.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=tt,j.uniformsList=null,tt}function Qs(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=va.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function cs(b,F){const q=Rt.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Ir(b,F,q,j,z){F.isScene!==!0&&(F=zt),R.resetTextureUnits();const dt=F.fog,Mt=j.isMeshStandardMaterial?F.environment:null,Lt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ks,Ut=(j.isMeshStandardMaterial?W:E).get(j.envMap||Mt),U=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,tt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ht=!!q.morphAttributes.position,O=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let Ht=Ci;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const Ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=Ot!==void 0?Ot.length:0,ut=Rt.get(j),ie=p.state.lights;if(K===!0&&(lt===!0||b!==S)){const Ie=b===S&&j.id===M;st.setState(j,b,Ie)}let Ft=!1;j.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==ie.state.version||ut.outputColorSpace!==Lt||z.isBatchedMesh&&ut.batching===!1||!z.isBatchedMesh&&ut.batching===!0||z.isBatchedMesh&&ut.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ut.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ut.instancing===!1||!z.isInstancedMesh&&ut.instancing===!0||z.isSkinnedMesh&&ut.skinning===!1||!z.isSkinnedMesh&&ut.skinning===!0||z.isInstancedMesh&&ut.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ut.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ut.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ut.instancingMorph===!1&&z.morphTexture!==null||ut.envMap!==Ut||j.fog===!0&&ut.fog!==dt||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==st.numPlanes||ut.numIntersection!==st.numIntersection)||ut.vertexAlphas!==U||ut.vertexTangents!==tt||ut.morphTargets!==ht||ut.morphNormals!==O||ut.morphColors!==Dt||ut.toneMapping!==Ht||ut.morphTargetsCount!==wt)&&(Ft=!0):(Ft=!0,ut.__version=j.version);let se=ut.currentProgram;Ft===!0&&(se=$n(j,F,z));let de=!1,ve=!1,Fe=!1;const oe=se.getUniforms(),De=ut.uniforms;if(It.useProgram(se.program)&&(de=!0,ve=!0,Fe=!0),j.id!==M&&(M=j.id,ve=!0),de||S!==b){It.buffers.depth.getReversed()?(et.copy(b.projectionMatrix),Up(et),Op(et),oe.setValue(N,"projectionMatrix",et)):oe.setValue(N,"projectionMatrix",b.projectionMatrix),oe.setValue(N,"viewMatrix",b.matrixWorldInverse);const Pe=oe.map.cameraPosition;Pe!==void 0&&Pe.setValue(N,St.setFromMatrixPosition(b.matrixWorld)),Wt.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&oe.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,ve=!0,Fe=!0)}if(z.isSkinnedMesh){oe.setOptional(N,z,"bindMatrix"),oe.setOptional(N,z,"bindMatrixInverse");const Ie=z.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),oe.setValue(N,"boneTexture",Ie.boneTexture,R))}z.isBatchedMesh&&(oe.setOptional(N,z,"batchingTexture"),oe.setValue(N,"batchingTexture",z._matricesTexture,R),oe.setOptional(N,z,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",z._indirectTexture,R),oe.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",z._colorsTexture,R));const ke=q.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&Xt.update(z,q,se),(ve||ut.receiveShadow!==z.receiveShadow)&&(ut.receiveShadow=z.receiveShadow,oe.setValue(N,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(De.envMap.value=Ut,De.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),ve&&(oe.setValue(N,"toneMappingExposure",v.toneMappingExposure),ut.needsLights&&Nr(De,Fe),dt&&j.fog===!0&&_t.refreshFogUniforms(De,dt),_t.refreshMaterialUniforms(De,j,X,J,p.state.transmissionRenderTarget[b.id]),va.upload(N,Qs(ut),De,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(va.upload(N,Qs(ut),De,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&oe.setValue(N,"center",z.center),oe.setValue(N,"modelViewMatrix",z.modelViewMatrix),oe.setValue(N,"normalMatrix",z.normalMatrix),oe.setValue(N,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ie=j.uniformsGroups;for(let Pe=0,Ee=Ie.length;Pe<Ee;Pe++){const Be=Ie[Pe];B.update(Be,se),B.bind(Be,se)}}return se}function Nr(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ur(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,F,q){Rt.get(b.texture).__webglTexture=F,Rt.get(b.depthTexture).__webglTexture=q;const j=Rt.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const q=Rt.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,q=0){C=b,w=F,T=q;let j=!0,z=null,dt=!1,Mt=!1;if(b){const Ut=Rt.get(b);if(Ut.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Ut.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Ut.__hasExternalTextures)R.rebindTextures(b,Rt.get(b.texture).__webglTexture,Rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ht=b.depthTexture;if(Ut.__boundDepthTexture!==ht){if(ht!==null&&Rt.has(ht)&&(b.width!==ht.image.width||b.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const U=b.texture;(U.isData3DTexture||U.isDataArrayTexture||U.isCompressedArrayTexture)&&(Mt=!0);const tt=Rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(tt[F])?z=tt[F][q]:z=tt[F],dt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?z=Rt.get(b).__webglMultisampledFramebuffer:Array.isArray(tt)?z=tt[q]:z=tt,L.copy(b.viewport),G.copy(b.scissor),k=b.scissorTest}else L.copy(P).multiplyScalar(X).floor(),G.copy(ot).multiplyScalar(X).floor(),k=mt;if(It.bindFramebuffer(N.FRAMEBUFFER,z)&&j&&It.drawBuffers(b,z),It.viewport(L),It.scissor(G),It.setScissorTest(k),dt){const Ut=Rt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,q)}else if(Mt){const Ut=Rt.get(b.texture),U=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ut.__webglTexture,q||0,U)}M=-1},this.readRenderTargetPixels=function(b,F,q,j,z,dt,Mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){It.bindFramebuffer(N.FRAMEBUFFER,Lt);try{const Ut=b.texture,U=Ut.format,tt=Ut.type;if(!Wt.textureFormatReadable(U)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-j&&q>=0&&q<=b.height-z&&N.readPixels(F,q,j,z,jt.convert(U),jt.convert(tt),dt)}finally{const Ut=C!==null?Rt.get(C).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,F,q,j,z,dt,Mt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){const Ut=b.texture,U=Ut.format,tt=Ut.type;if(!Wt.textureFormatReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-j&&q>=0&&q<=b.height-z){It.bindFramebuffer(N.FRAMEBUFFER,Lt);const ht=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ht),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(F,q,j,z,jt.convert(U),jt.convert(tt),0);const O=C!==null?Rt.get(C).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,O);const Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Np(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ht),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt),N.deleteBuffer(ht),N.deleteSync(Dt),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,q=0){b.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const j=Math.pow(2,-q),z=Math.floor(b.image.width*j),dt=Math.floor(b.image.height*j),Mt=F!==null?F.x:0,Lt=F!==null?F.y:0;R.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Mt,Lt,z,dt),It.unbindTexture()},this.copyTextureToTexture=function(b,F,q=null,j=null,z=0){b.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],F=arguments[2],z=arguments[3]||0,q=null);let dt,Mt,Lt,Ut,U,tt,ht,O,Dt;const Ht=b.isCompressedTexture?b.mipmaps[z]:b.image;q!==null?(dt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Lt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,U=q.min.y,tt=q.isBox3?q.min.z:0):(dt=Ht.width,Mt=Ht.height,Lt=Ht.depth||1,Ut=0,U=0,tt=0),j!==null?(ht=j.x,O=j.y,Dt=j.z):(ht=0,O=0,Dt=0);const Ot=jt.convert(F.format),wt=jt.convert(F.type);let ut;F.isData3DTexture?(R.setTexture3D(F,0),ut=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),ut=N.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),ut=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const ie=N.getParameter(N.UNPACK_ROW_LENGTH),Ft=N.getParameter(N.UNPACK_IMAGE_HEIGHT),se=N.getParameter(N.UNPACK_SKIP_PIXELS),de=N.getParameter(N.UNPACK_SKIP_ROWS),ve=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ht.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ht.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,U),N.pixelStorei(N.UNPACK_SKIP_IMAGES,tt);const Fe=b.isDataArrayTexture||b.isData3DTexture,oe=F.isDataArrayTexture||F.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const De=Rt.get(b),ke=Rt.get(F),Ie=Rt.get(De.__renderTarget),Pe=Rt.get(ke.__renderTarget);It.bindFramebuffer(N.READ_FRAMEBUFFER,Ie.__webglFramebuffer),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ee=0;Ee<Lt;Ee++)Fe&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(b).__webglTexture,z,tt+Ee),b.isDepthTexture?(oe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(F).__webglTexture,z,Dt+Ee),N.blitFramebuffer(Ut,U,dt,Mt,ht,O,dt,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST)):oe?N.copyTexSubImage3D(ut,z,ht,O,Dt+Ee,Ut,U,dt,Mt):N.copyTexSubImage2D(ut,z,ht,O,Dt+Ee,Ut,U,dt,Mt);It.bindFramebuffer(N.READ_FRAMEBUFFER,null),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else oe?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(ut,z,ht,O,Dt,dt,Mt,Lt,Ot,wt,Ht.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(ut,z,ht,O,Dt,dt,Mt,Lt,Ot,Ht.data):N.texSubImage3D(ut,z,ht,O,Dt,dt,Mt,Lt,Ot,wt,Ht):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,ht,O,dt,Mt,Ot,wt,Ht.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,ht,O,Ht.width,Ht.height,Ot,Ht.data):N.texSubImage2D(N.TEXTURE_2D,z,ht,O,dt,Mt,Ot,wt,Ht);N.pixelStorei(N.UNPACK_ROW_LENGTH,ie),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft),N.pixelStorei(N.UNPACK_SKIP_PIXELS,se),N.pixelStorei(N.UNPACK_SKIP_ROWS,de),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ve),z===0&&F.generateMipmaps&&N.generateMipmap(ut),It.unbindTexture()},this.copyTextureToTexture3D=function(b,F,q=null,j=null,z=0){return b.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,j=arguments[1]||null,b=arguments[2],F=arguments[3],z=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,F,q,j,z)},this.initRenderTarget=function(b){Rt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),It.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,It.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class cc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new cc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qv extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gd extends ls{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ph=new xe,Ll=new Ua,ra=new Na,aa=new D;class Yv extends qe{constructor(t=new nn,e=new gd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;Ph.copy(i).invert(),Ll.copy(t.ray).applyMatrix4(Ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);aa.fromBufferAttribute(d,m),Lh(aa,m,l,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)aa.fromBufferAttribute(d,g),Lh(aa,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lh(s,t,e,n,i,r,a){const o=Ll.distanceSqToPoint(s);if(o<e){const l=new D;Ll.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,l=new xe;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ke(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ke(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vd extends di{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Kv extends vd{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function hc(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const oa=new D,So=new hc,Eo=new hc,bo=new hc;class xd extends di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(oa.subVectors(i[0],i[1]).add(i[0]),c=oa);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(oa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),So.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),Eo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),bo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(So.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Eo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),bo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(So.calc(l),Eo.calc(l),bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dh(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function jv(s,t){const e=1-s;return e*e*t}function $v(s,t){return 2*(1-s)*s*t}function Zv(s,t){return s*s*t}function pr(s,t,e,n){return jv(s,t)+$v(s,e)+Zv(s,n)}function Jv(s,t){const e=1-s;return e*e*e*t}function Qv(s,t){const e=1-s;return 3*e*e*s*t}function tx(s,t){return 3*(1-s)*s*s*t}function ex(s,t){return s*s*s*t}function mr(s,t,e,n,i){return Jv(s,t)+Qv(s,e)+tx(s,n)+ex(s,i)}class nx extends di{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,i.x,r.x,a.x,o.x),mr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ix extends di{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(mr(t,i.x,r.x,a.x,o.x),mr(t,i.y,r.y,a.y,o.y),mr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sx extends di{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rx extends di{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ax extends di{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(pr(t,i.x,r.x,a.x),pr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yd extends di{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(pr(t,i.x,r.x,a.x),pr(t,i.y,r.y,a.y),pr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ox extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(Dh(o,l.x,c.x,h.x,d.x),Dh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}}var lx=Object.freeze({__proto__:null,ArcCurve:Kv,CatmullRomCurve3:xd,CubicBezierCurve:nx,CubicBezierCurve3:ix,EllipseCurve:vd,LineCurve:sx,LineCurve3:rx,QuadraticBezierCurve:ax,QuadraticBezierCurve3:yd,SplineCurve:ox});class he extends nn{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function x(){const v=new D,A=new D;let w=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const M=[],S=C/r,L=S*(e-t)+t;for(let G=0;G<=i;G++){const k=G/i,Y=k*l+o,$=Math.sin(Y),H=Math.cos(Y);A.x=L*$,A.y=-S*n+m,A.z=L*H,d.push(A.x,A.y,A.z),v.set($,T,H).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-S),M.push(g++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){const S=_[M][C],L=_[M+1][C],G=_[M+1][C+1],k=_[M][C+1];(t>0||M!==0)&&(h.push(S,L,k),w+=3),(e>0||M!==r-1)&&(h.push(L,G,k),w+=3)}c.addGroup(p,w,0),p+=w}function y(v){const A=g,w=new Ct,T=new D;let C=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*S,0),u.push(0,S,0),f.push(.5,.5),g++;const L=g;for(let G=0;G<=i;G++){const Y=G/i*l+o,$=Math.cos(Y),H=Math.sin(Y);T.x=M*H,T.y=m*S,T.z=M*$,d.push(T.x,T.y,T.z),u.push(0,S,0),w.x=$*.5+.5,w.y=H*.5*S+.5,f.push(w.x,w.y),g++}for(let G=0;G<i;G++){const k=A+G,Y=L+G;v===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ui extends he{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fa extends nn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(r.slice(),3)),this.setAttribute("uv",new Me(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new D,v=new D,A=new D;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],v),f(e[w+2],A),l(y,v,A,x)}function l(x,y,v,A){const w=A+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const M=x.clone().lerp(v,C/w),S=y.clone().lerp(v,C/w),L=w-C;for(let G=0;G<=L;G++)G===0&&C===w?T[C][G]=M:T[C][G]=M.clone().lerp(S,G/L)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){const S=Math.floor(M/2);M%2===0?(u(T[C][S+1]),u(T[C+1][S]),u(T[C][S])):(u(T[C][S+1]),u(T[C+1][S+1]),u(T[C+1][S]))}}function c(x){const y=new D;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new D;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;a.push(v,1-A)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const y=a[x+0],v=a[x+2],A=a[x+4],w=Math.max(y,v,A),T=Math.min(y,v,A);w>.9&&T<.1&&(y<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new D,y=new D,v=new D,A=new D,w=new Ct,T=new Ct,C=new Ct;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),w.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),A.copy(x).add(y).add(v).divideScalar(3);const L=m(A);_(w,S+0,x,L),_(T,S+2,y,L),_(C,S+4,v,L)}}function _(x,y,v,A){A<0&&x.x===1&&(a[y]=x.x-1),v.x===0&&v.z===0&&(a[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.vertices,t.indices,t.radius,t.details)}}class rs extends Fa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rs(t.radius,t.detail)}}class uc extends Fa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uc(t.radius,t.detail)}}class Ca extends nn{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new D,g=new Ct;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,A=x+n+2,w=x+1;o.push(y,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ge extends nn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(i+w*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(i+w*r)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],A=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(y,v,w),(p!==n-1||l<Math.PI)&&f.push(v,A,w)}this.setIndex(f),this.setAttribute("position",new Me(g,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tr extends nn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class dc extends nn{constructor(t=new yd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new Ct;let h=new D;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),x(),p()}function m(y){h=t.getPointAt(y/e,h);const v=a.normals[y],A=a.binormals[y];for(let w=0;w<=i;w++){const T=w/i*Math.PI*2,C=Math.sin(T),M=-Math.cos(T);l.x=M*v.x+C*A.x,l.y=M*v.y+C*A.y,l.z=M*v.z+C*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const A=(i+1)*(y-1)+(v-1),w=(i+1)*y+(v-1),T=(i+1)*y+v,C=(i+1)*(y-1)+v;g.push(A,w,C),g.push(w,T,C)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new dc(new lx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ze extends ls{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class le extends ls{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new te(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class fc extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class cx extends fc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const To=new xe,Ih=new D,Nh=new D;class Md{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nh),e.updateMatrixWorld(),To.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Uh=new xe,ar=new D,wo=new D;class hx extends Md{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(ar),wo.copy(n.position),wo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wo),n.updateMatrixWorld(),i.makeTranslation(-ar.x,-ar.y,-ar.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}}class Oh extends fc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ux extends Md{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dx extends fc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new ux}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Fh=new xe;class fx{constructor(t,e,n=0,i=1/0){this.ray=new Ua(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fh),this}intersectObject(t,e=!0,n=[]){return Dl(t,this,n,e),n.sort(kh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Dl(t[i],this,n,e);return n.sort(kh),n}}function kh(s,t){return s.distance-t.distance}function Dl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Dl(r[a],t,e,!0)}}class Bh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class px extends os{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);const zh={type:"change"},pc={type:"start"},Sd={type:"end"},la=new Ua,Vh=new yi,mx=Math.cos(70*Dp.DEG2RAD),Ve=new D,an=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ao=1e-6;class _x extends px{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ss,this._lastTargetPosition=new D,this._quat=new ss().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bh,this._sphericalDelta=new Bh,this._scale=1,this._panOffset=new D,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new D,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vx.bind(this),this._onPointerDown=gx.bind(this),this._onPointerUp=xx.bind(this),this._onContextMenu=wx.bind(this),this._onMouseWheel=Sx.bind(this),this._onKeyDown=Ex.bind(this),this._onTouchStart=bx.bind(this),this._onTouchMove=Tx.bind(this),this._onMouseDown=yx.bind(this),this._onMouseMove=Mx.bind(this),this._interceptControlDown=Ax.bind(this),this._interceptControlUp=Cx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zh),this.update(),this.state=pe.NONE}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),i<-Math.PI?i+=an:i>Math.PI&&(i-=an),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ve.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<mx?this.object.lookAt(this.target):(Vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(Vh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ao||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ao||this._lastTargetPosition.distanceToSquared(this.target)>Ao?(this.dispatchEvent(zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ve.copy(i).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function gx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function vx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=pe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yx(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=pe.DOLLY;break;case Is.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pe.ROTATE}break;case Is.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(pc)}function Mx(s){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Sx(s){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(s.preventDefault(),this.dispatchEvent(pc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Sd))}function Ex(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function bx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=pe.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=pe.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(pc)}function Tx(s){switch(this._trackPointer(s),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=pe.NONE}}function wx(s){this.enabled!==!1&&s.preventDefault()}function Ax(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Q={grass:new le({color:8843180}),grassDark:new le({color:4906624}),rock:new le({color:9595976}),rockDark:new le({color:7424813}),sand:new le({color:16707722}),water:new ze({color:3718648,roughness:.15,metalness:.3,transparent:!0,opacity:.88}),road:new le({color:3359061}),roadLine:new Cs({color:16436245}),crosswalk:new Cs({color:16777215}),dirt:new le({color:10576391}),concrete:new le({color:14870768}),concreteDark:new le({color:9741240}),white:new le({color:16317180}),cyan:new le({color:440020}),yellow:new le({color:16498468}),red:new le({color:15680580}),orange:new le({color:16347926}),blue:new le({color:2450411}),darkBlue:new le({color:1981066}),darkGray:new le({color:1976635}),metal:new ze({color:9741240,roughness:.35,metalness:.7}),metalDark:new ze({color:4674921,roughness:.4,metalness:.8}),gold:new ze({color:16096779,roughness:.2,metalness:.9}),copper:new ze({color:14251782,roughness:.3,metalness:.8}),glass:new ze({color:10875900,roughness:.05,metalness:.9,transparent:!0,opacity:.7}),solarPanel:new ze({color:1981066,roughness:.1,metalness:.85}),wood:new le({color:7877903}),leavesGreen:new le({color:1409085}),leavesLight:new le({color:2278750}),leavesPink:new le({color:16020150}),glowCyan:new ze({color:62463,emissive:62463,emissiveIntensity:2.5,roughness:.1}),glowGreen:new ze({color:1096065,emissive:1096065,emissiveIntensity:2.5,roughness:.1}),glowRed:new ze({color:16711748,emissive:16711748,emissiveIntensity:3,roughness:.1}),glowAmber:new ze({color:16096779,emissive:16096779,emissiveIntensity:2.5,roughness:.1}),glowWhite:new ze({color:16777215,emissive:16777215,emissiveIntensity:2.2,roughness:.1}),porcelain:new ze({color:7877903,roughness:.1,metalness:.2}),hazardYellow:new Cs({color:16436245}),shield:new ze({color:3718648,transparent:!0,opacity:.45,roughness:.1,metalness:.9,side:Wn}),dogFur:new le({color:14653493}),dogFurLight:new le({color:16707722}),dogEarFur:new le({color:12877349}),dogNose:new le({color:1976635}),dogTongue:new le({color:16007006}),dogEye:new ze({color:988970,roughness:.1,metalness:.9}),dogEyePupil:new Cs({color:16777215}),dogCollar:new le({color:440020}),dogCollarTag:new ze({color:16096779,roughness:.2,metalness:.9}),dogVest:new le({color:16347926}),dogVestStripe:new ze({color:15857145,roughness:.1,metalness:.7}),helmetWhite:new ze({color:16777215,roughness:.2,metalness:.1}),helmetBadge:new le({color:165063}),platformCyan:new ze({color:988970,roughness:.3,metalness:.8})};function Rx(){const s=new ye,t=new he(26,27.5,3,48),e=new it(t,Q.grass);e.position.y=0,e.receiveShadow=!0,s.add(e);const n=new he(27.4,28.5,.6,48),i=new it(n,Q.sand);i.position.y=1.25,i.receiveShadow=!0,s.add(i);const r=new he(27.5,23,4,32),a=new it(r,Q.rock);a.position.y=-3.5,s.add(a);const o=new ui(23,8.5,32),l=new it(o,Q.rockDark);l.position.y=-9.5,l.rotation.x=Math.PI,s.add(l);const c=new he(44,44,1.4,48),h=new it(c,Q.water);h.position.y=-.7,h.receiveShadow=!0,s.add(h);const d=new it(new rs(5.5,2),Q.grassDark);d.position.set(-14,.5,-12),d.scale.set(1.4,.7,1.2),d.receiveShadow=!0,s.add(d);const u=new it(new rs(4.5,2),Q.grassDark);u.position.set(-16,.3,10),u.scale.set(1.2,.6,1.2),u.receiveShadow=!0,s.add(u);const f=Q.road,g=1.52,_=new Ca(13.5,16.5,48),m=new it(_,f);m.rotation.x=-Math.PI/2,m.position.y=g,m.receiveShadow=!0,s.add(m);const p=new Ca(14.9,15.1,48),x=new it(p,Q.roadLine);x.rotation.x=-Math.PI/2,x.position.y=g+.01,s.add(x);const y=new it(new es(3,30),f);y.rotation.x=-Math.PI/2,y.position.y=g,y.receiveShadow=!0,s.add(y);const v=new it(new es(30,3),f);v.rotation.x=-Math.PI/2,v.position.y=g,v.receiveShadow=!0,s.add(v);for(let A=-1;A<=1;A++){const w=new it(new es(.3,2.6),Q.crosswalk);w.rotation.x=-Math.PI/2,w.position.set(7.5+A*.6,g+.02,0),s.add(w)}return s}function Px(s,t){const e=new ye;e.position.set(s,1.5,t),e.name="bus32";const n=new it(new qt(8.5,.4,8.5),Q.concreteDark);n.position.y=.2,n.receiveShadow=!0,e.add(n);for(let p=-1;p<=1;p+=2){const x=p*2.2,y=-1.5,v=new it(new qt(2.2,2.4,2),Q.concrete);v.position.set(x,1.4,y),v.castShadow=!0,e.add(v);for(let T=-3;T<=3;T++){const C=new it(new qt(.08,1.8,2.2),Q.metalDark);C.position.set(x+T*.32,1.3,y),e.add(C)}const A=new it(new he(.35,.35,1.8,16),Q.metal);A.rotation.z=Math.PI/2,A.position.set(x,2.8,y+.3),e.add(A);const w=[Q.red,Q.yellow,Q.blue];for(let T=0;T<3;T++){const C=x+(T-1)*.65,M=y-.5;for(let L=0;L<4;L++){const G=new it(new he(.18-L*.02,.18-L*.02,.15,10),w[T]);G.position.set(C,2.6+L*.18,M),e.add(G)}const S=new it(new he(.04,.04,.3,8),Q.copper);S.position.set(C,3.4,M),e.add(S)}}const i=new ye;for(let p=-1;p<=1;p+=2){const x=new it(new he(.08,.12,4.2,8),Q.metal);x.position.set(p*3.4,2.1,0),i.add(x)}const r=new it(new qt(7,.25,.25),Q.metal);r.position.set(0,4.2,0),i.add(r),e.add(i);const a=new it(new qt(2.2,1.4,1.6),Q.darkGray);a.position.set(0,.9,2.2),e.add(a);const o=new ye;o.position.set(0,1.6,2.2);const l=new it(new qt(.15,1.2,.15),Q.copper);l.position.y=.6,o.add(l);const c=new it(new Ge(.18,12,12),Q.gold);c.position.y=1.2,o.add(c),e.add(o);const h=new it(new Ge(.22,16,16),Q.glowGreen);h.position.set(0,1.9,3.05),e.add(h);const d=new it(new qt(2.2,1.8,2.2),Q.white);d.position.set(-2.8,1.1,2.2),d.castShadow=!0,e.add(d);const u=new it(new qt(.7,.4,.7),Q.concreteDark);u.position.set(-2.8,2.2,2.2),e.add(u);const f=new it(new he(.35,.1,.15,12),Q.metal);f.rotation.x=.6,f.position.set(-2.4,2.5,2.2),e.add(f);const g=new it(new he(.12,.16,.28,12),Q.glowGreen);g.position.set(-2.8,2.3,2.2),e.add(g);for(let p=0;p<4;p++){const x=p*(Math.PI/2),y=new it(new qt(8,.8,.05),Q.metal);y.position.set(Math.cos(x)*4.1,.8,Math.sin(x)*4.1),y.rotation.y=x+Math.PI/2,e.add(y)}const _=new it(new qt(1.4,.45,.08),Q.hazardYellow);_.position.set(0,.9,4.14),e.add(_);const m=new it(new qt(1.5,.55,.04),Q.darkGray);return m.position.set(0,.9,4.12),e.add(m),e.userData={breakerArm:o,statusLed:h,statusStrobe:g,nodeId:"bus32"},e}function Lx(s,t){const e=new ye;e.position.set(s,1.5,t),e.name="gen30";const n=new it(new qt(8,.4,8),Q.concreteDark);n.position.y=.2,e.add(n);const i=new it(new qt(5,2.8,3.2),Q.white);i.position.set(0,1.6,-1.8),i.castShadow=!0,e.add(i);for(let a=-1;a<=1;a++){const o=new it(new ui(.7,.8,4),Q.cyan);o.position.set(a*1.5,3.4,-1.8),o.rotation.y=Math.PI/4,e.add(o)}const r=[];for(let a=-1;a<=1;a+=2){const o=a*2.2,l=1.8,c=new he(1.2,1.9,4.5,24),h=new it(c,Q.concrete);h.position.set(o,2.4,l),h.castShadow=!0,e.add(h);const d=new it(new Tr(1.22,.1,8,24),Q.concreteDark);d.rotation.x=Math.PI/2,d.position.set(o,4.65,l),e.add(d);for(let u=0;u<2;u++){const f=new le({color:16777215,transparent:!0,opacity:.85}),g=new it(new rs(.65-u*.15),f);g.position.set(o,5.2+u*.8,l),e.add(g),r.push(g)}}for(let a=-1;a<=1;a+=2){const o=new it(new he(.18,.22,4,12),Q.metal);o.position.set(a*1.8,3.5,-3.2),e.add(o)}return e.userData={puffs:r,nodeId:"gen30"},e}function Dx(s,t){const e=new ye;e.position.set(s,1.5,t),e.name="renewables";const n=Gh(0,0);e.add(n);const i=Gh(-4,-3);e.add(i);for(let a=0;a<2;a++)for(let o=0;o<3;o++){const l=new it(new qt(1.6,.08,1),Q.solarPanel);l.position.set(2.5+(o-1)*1.8,.7,(a-.5)*1.6),l.rotation.x=.35,l.castShadow=!0,e.add(l);const c=new it(new he(.05,.05,.6,6),Q.metal);c.position.set(2.5+(o-1)*1.8,.3,(a-.5)*1.6),e.add(c)}const r=new it(new qt(3,1.5,1.6),Q.white);r.position.set(2.5,.95,-2.8),r.castShadow=!0,e.add(r);for(let a=0;a<4;a++){const o=new it(new qt(.3,.12,.05),Q.glowGreen);o.position.set(1.8+a*.45,1.3,-2),e.add(o)}return e.userData={turbines:[n.userData.rotorHub,i.userData.rotorHub],nodeId:"renewables"},e}function Gh(s,t){const e=new ye;e.position.set(s,0,t);const n=new it(new he(.2,.42,7.5,16),Q.white);n.position.y=3.75,n.castShadow=!0,e.add(n);const i=new it(new qt(.9,.7,1.5),Q.cyan);i.position.set(0,7.5,0),e.add(i);const r=new it(new Ge(.12,8,8),Q.glowRed);r.position.set(0,8,-.4),e.add(r);const a=new ye;a.position.set(0,7.5,.85);const o=new it(new ui(.35,.6,16),Q.yellow);o.rotation.x=Math.PI/2,a.add(o);for(let l=0;l<3;l++){const c=l*Math.PI*2/3,h=new it(new qt(.25,3.2,.06),Q.white);h.position.set(Math.sin(c)*1.7,Math.cos(c)*1.7,0),h.rotation.z=-c,a.add(h);const d=new it(new qt(.26,.6,.07),Q.red);d.position.set(Math.sin(c)*3,Math.cos(c)*3,0),d.rotation.z=-c,a.add(d)}return e.add(a),e.userData={rotorHub:a},e}function Ix(s,t){const e=new ye;e.position.set(s,1.5,t),e.name="cityCenter";const n=new ye;n.position.set(-2,0,-1.8);const i=new it(new qt(3.2,3.8,2.6),Q.white);i.position.y=1.9,i.castShadow=!0,n.add(i);const r=new it(new he(1.1,1.1,.1,16),Q.darkGray);r.position.set(0,3.85,0),n.add(r);const a=new it(new qt(.8,.25,.05),Q.red);a.position.set(0,3.2,1.35),n.add(a);const o=new it(new qt(.25,.8,.05),Q.red);o.position.set(0,3.2,1.35),n.add(o),e.add(n);const l=new ye;l.position.set(2.2,0,-1.8);const c=new it(new qt(3,2.4,2.6),Q.darkGray);c.position.y=1.2,c.castShadow=!0,l.add(c);for(let u=-1;u<=1;u++){const f=new it(new ui(.6,.7,4),Q.orange);f.position.set(u*.9,2.6,0),f.rotation.y=Math.PI/4,l.add(f)}const h=new it(new he(.2,.25,3.4,12),Q.concreteDark);return h.position.set(1,2.6,1),l.add(h),e.add(l),[{x:-2.2,z:2,w:2,h:2.4,d:2,c:Q.yellow,r:Q.red},{x:.2,z:2.2,w:2.2,h:3.2,d:2,c:Q.blue,r:Q.darkBlue},{x:2.5,z:1.8,w:2,h:2,d:1.8,c:Q.white,r:Q.orange}].forEach(u=>{const f=new it(new qt(u.w,u.h,u.d),u.c);f.position.set(u.x,u.h/2,u.z),f.castShadow=!0,e.add(f);const g=new it(new ui(u.w*.75,1.1,4),u.r);g.position.set(u.x,u.h+.55,u.z),g.rotation.y=Math.PI/4,e.add(g)}),e.userData={nodeId:"cityCenter"},e}function Co(s,t,e=5.2){const n=new ye;n.position.set(s,1.5,t);const i=new it(new he(.25,1.2,e,4),Q.metal);i.position.y=e/2,i.rotation.y=Math.PI/4,i.castShadow=!0,n.add(i);const r=new it(new qt(3.6,.22,.22),Q.metal);r.position.y=e*.82,n.add(r);const a=new it(new qt(2.4,.2,.2),Q.metal);a.position.y=e*.94,n.add(a);for(let o=-1;o<=1;o++){const l=new it(new he(.1,.1,.5,8),Q.darkGray);l.position.set(o*1.6,e*.72,0),n.add(l)}return n}function Nx(){const s=new ye;s.name="pypyMascot";const t=new ye,e=new it(new he(1.4,1.5,.22,28),Q.platformCyan);e.position.y=.11,e.receiveShadow=!0,t.add(e);const n=new it(new Tr(1.45,.04,8,32),Q.glowCyan);n.rotation.x=Math.PI/2,n.position.y=.18,t.add(n);for(let V=0;V<3;V++){const K=V*Math.PI*2/3,lt=new it(new ui(.18,.4,12),Q.glowCyan);lt.position.set(Math.cos(K)*.9,-.15,Math.sin(K)*.9),lt.rotation.x=Math.PI,t.add(lt)}s.add(t);const i=new ye;i.position.set(0,.85,0);const r=new it(new qt(.95,.85,1.35),Q.dogFur);r.castShadow=!0,i.add(r);const a=new it(new qt(.65,.6,.2),Q.dogFurLight);a.position.set(0,-.05,.62),i.add(a);const o=new it(new qt(1.02,.9,.85),Q.dogVest);o.position.set(0,.02,-.05),i.add(o);const l=new it(new qt(1.04,.14,.87),Q.dogVestStripe);l.position.set(0,-.15,-.05),i.add(l);const c=new it(new qt(.12,.92,.87),Q.dogVestStripe);c.position.set(-.35,.02,-.05),i.add(c);const h=new it(new qt(.12,.92,.87),Q.dogVestStripe);h.position.set(.35,.02,-.05),i.add(h);const d=new it(new qt(.24,.14,.04),Q.darkGray);d.position.set(.35,.22,.4),i.add(d);const u=new it(new he(.48,.48,.12,16),Q.dogCollar);u.position.set(0,.35,.45),u.rotation.x=Math.PI/6,i.add(u);const f=new it(new he(.1,.1,.04,6),Q.dogCollarTag);f.position.set(0,.2,.66),f.rotation.x=Math.PI/2,i.add(f),[{x:-.38,z:.42},{x:.38,z:.42},{x:-.38,z:-.42},{x:.38,z:-.42}].forEach(V=>{const K=new it(new he(.16,.18,.55,12),Q.dogFur);K.position.set(V.x,-.42,V.z),K.castShadow=!0,i.add(K);const lt=new it(new Ge(.2,12,12),Q.dogFurLight);lt.position.set(V.x,-.65,V.z+.05),lt.scale.set(1,.6,1.2),i.add(lt)});const _=new ye;_.position.set(0,.25,-.65);const m=new it(new he(.11,.14,.55,10),Q.dogFur);m.position.set(0,.25,-.15),m.rotation.x=-Math.PI/3.5,_.add(m);const p=new it(new Ge(.18,12,12),Q.dogFurLight);p.position.set(0,.5,-.3),_.add(p),i.add(_),s.add(i);const x=new ye;x.position.set(0,1.7,.45);const y=new it(new Ge(.68,20,18),Q.dogFur);y.castShadow=!0,x.add(y);const v=new it(new qt(.52,.38,.45),Q.dogFurLight);v.position.set(0,-.12,.52),x.add(v);const A=new it(new Ge(.12,12,12),Q.dogNose);A.position.set(0,-.02,.74),x.add(A);const w=new it(new qt(.18,.05,.22),Q.dogTongue);w.position.set(0,-.25,.62),w.rotation.x=.2,x.add(w);const T=new it(new Ge(.14,16,16),Q.dogEye);T.position.set(-.25,.14,.55),x.add(T);const C=new it(new Ge(.14,16,16),Q.dogEye);C.position.set(.25,.14,.55),x.add(C);const M=new it(new Ge(.045,8,8),Q.dogEyePupil);M.position.set(-.21,.18,.66),x.add(M);const S=new it(new Ge(.045,8,8),Q.dogEyePupil);S.position.set(.29,.18,.66),x.add(S);const L=new it(new qt(.18,.62,.38),Q.dogEarFur);L.position.set(-.64,.02,.05),L.rotation.z=.25,L.rotation.x=.1,x.add(L);const G=new it(new qt(.18,.62,.38),Q.dogEarFur);G.position.set(.64,.02,.05),G.rotation.z=-.25,G.rotation.x=.1,x.add(G);const k=new ye;k.position.set(0,.42,.02),k.rotation.x=-.05;const Y=new it(new Ge(.68,24,16,0,Math.PI*2,0,Math.PI*.55),Q.helmetWhite);Y.castShadow=!0,k.add(Y);const $=new it(new he(.82,.84,.08,28),Q.helmetWhite);$.position.y=.02,k.add($);const H=new it(new he(.45,.55,.06,16,1,!1,0,Math.PI),Q.helmetWhite);H.position.set(0,.02,.5),H.rotation.x=.1,k.add(H);const J=new it(new qt(.14,.22,1.15),Q.helmetWhite);J.position.set(0,.52,0),k.add(J);const X=new it(new he(.18,.18,.04,16),Q.helmetBadge);X.position.set(0,.32,.64),X.rotation.x=Math.PI/2.8,k.add(X);const ft=new it(new qt(.2,.06,.02),Q.white);ft.position.set(0,.33,.66),ft.rotation.x=Math.PI/2.8,k.add(ft);const I=new it(new qt(.06,.2,.02),Q.white);I.position.set(0,.33,.66),I.rotation.x=Math.PI/2.8,k.add(I);const P=new it(new Tr(.66,.03,6,20,Math.PI),Q.darkGray);P.position.set(0,-.3,.12),P.rotation.y=Math.PI,k.add(P),x.add(k),s.add(x);const ot=new uc(2.6,2),mt=new it(ot,Q.shield);return mt.position.y=1.4,mt.scale.set(.001,.001,.001),s.add(mt),s.userData={head:x,tail:_,ears:[L,G],eyes:[T,C],shield:mt,antennaBall:{material:Q.gold},nodeId:"aiHub"},s}const Ux=Nx;function Ox(s,t,e,n=1){const i=new ye;i.position.set(s,t,e),i.scale.set(n,n,n);const r=new le({color:16777215,transparent:!0,opacity:.92});return[{x:0,y:0,z:0,r:1.2},{x:-1,y:-.2,z:.2,r:.85},{x:1.1,y:-.1,z:-.1,r:.95},{x:.4,y:.5,z:0,r:.9},{x:-.5,y:.4,z:-.2,r:.8}].forEach(o=>{const l=new it(new rs(o.r,1),r);l.position.set(o.x,o.y,o.z),i.add(l)}),i}function Fx(s=Q.red){const t=new ye,e=new it(new qt(1.4,.5,.75),s);e.position.y=.45,e.castShadow=!0,t.add(e);const n=new it(new qt(.8,.4,.65),Q.glass);n.position.set(-.1,.8,0),t.add(n);for(let a=-.45;a<=.45;a+=.9)for(let o=-.4;o<=.4;o+=.8){const l=new it(new he(.2,.2,.12,10),Q.darkGray);l.rotation.x=Math.PI/2,l.position.set(a,.2,o),t.add(l)}const i=new it(new Ge(.08,8,8),Q.glowWhite);i.position.set(.7,.45,.25),t.add(i);const r=new it(new Ge(.08,8,8),Q.glowWhite);return r.position.set(.7,.45,-.25),t.add(r),t}function kx(s,t,e){const n=new ye;n.position.set(s,t,e),n.name="cyberBug";const i=new it(new rs(.5,1),Q.red);n.add(i);const r=new it(new Ge(.1,8,8),Q.glowRed);r.position.set(-.18,.15,.42),n.add(r);const a=new it(new Ge(.1,8,8),Q.glowRed);a.position.set(.18,.15,.42),n.add(a);for(let o=0;o<4;o++){const l=o*Math.PI/2,c=new it(new ui(.08,.4,6),Q.darkGray);c.position.set(Math.cos(l)*.45,-.25,Math.sin(l)*.45),c.rotation.z=Math.cos(l)*.6,n.add(c)}return n}function Bx(s){const t=new xd(s),e=new dc(t,40,.05,8,!1),n=new it(e,Q.darkGray),i=[],r=6;for(let a=0;a<r;a++){const o=new it(new Ge(.25,12,12),Q.glowCyan);i.push({mesh:o,progress:a/r})}return{lineMesh:n,pulses:i,curve:t}}class zx{constructor(t){this.container=t,this.isNight=!1,this.interactiveObjects=[],this.powerLines=[],this.cyberBugs=[],this.clouds=[],this.cars=[],this.init(),this.setupLighting(),this.buildWorld(),this.setupInteractions(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}init(){this.scene=new qv,this.scene.background=new te(12576507),this.scene.fog=new cc(12576507,.01);const t=window.innerWidth/window.innerHeight;this.camera=new Mn(45,t,.1,1e3),this.camera.position.set(30,26,32),this.renderer=new Xv({antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=zu,this.renderer.toneMapping=Gu,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement),this.controls=new _x(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxPolarAngle=Math.PI/2.12,this.controls.minDistance=8,this.controls.maxDistance=85,this.controls.target.set(0,2,0),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}setupLighting(){this.hemiLight=new cx(16777215,12317430,.75),this.scene.add(this.hemiLight),this.sunLight=new dx(16775920,1.25),this.sunLight.position.set(28,42,22),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=110,this.sunLight.shadow.camera.left=-32,this.sunLight.shadow.camera.right=32,this.sunLight.shadow.camera.top=32,this.sunLight.shadow.camera.bottom=-32,this.sunLight.shadow.bias=-4e-4,this.scene.add(this.sunLight),this.cyberLight1=new Oh(440020,0,35),this.cyberLight1.position.set(-10,10,-10),this.scene.add(this.cyberLight1),this.cyberLight2=new Oh(11032055,0,35),this.cyberLight2.position.set(10,10,10),this.scene.add(this.cyberLight2)}toggleTheme(){return this.isNight=!this.isNight,this.isNight?(document.body.classList.add("night-mode"),this.scene.background.set(329745),this.scene.fog.color.set(329745),this.hemiLight.intensity=.25,this.sunLight.intensity=.3,this.cyberLight1.intensity=3,this.cyberLight2.intensity=3):(document.body.classList.remove("night-mode"),this.scene.background.set(12576507),this.scene.fog.color.set(12576507),this.hemiLight.intensity=.75,this.sunLight.intensity=1.25,this.cyberLight1.intensity=0,this.cyberLight2.intensity=0),this.isNight}buildWorld(){const t=Rx();this.scene.add(t),this.genStation=Lx(-11,-10),this.scene.add(this.genStation),this.interactiveObjects.push(this.genStation),this.substation=Px(0,0),this.scene.add(this.substation),this.interactiveObjects.push(this.substation);const e=Co(-5,-5,5.2),n=Co(6,6,5.2),i=Co(-6,6,5.2);this.scene.add(e,n,i),this.renewables=Dx(-12,10),this.scene.add(this.renewables),this.interactiveObjects.push(this.renewables),this.city=Ix(11,-7),this.scene.add(this.city),this.interactiveObjects.push(this.city),this.pypyRobot=Ux(),this.pypyRobot.position.set(3,4.5,3),this.scene.add(this.pypyRobot),this.interactiveObjects.push(this.pypyRobot),[{x:-16,y:16,z:-10,s:1.2,speed:.008},{x:12,y:18,z:14,s:1.4,speed:.006},{x:-6,y:15,z:18,s:1,speed:.009},{x:18,y:17,z:-12,s:1.3,speed:.007}].forEach(f=>{const g=Ox(f.x,f.y,f.z,f.s);g.userData={speed:f.speed,initialX:f.x},this.scene.add(g),this.clouds.push(g)});const a=[Q.red,Q.blue,Q.yellow];for(let f=0;f<3;f++){const g=Fx(a[f]);g.userData={angle:f*Math.PI*2/3,speed:.008+f*.003},this.scene.add(g),this.cars.push(g)}const o=[new D(-11,4.2,-10),new D(-5,5.6,-5),new D(0,4.2,0)],l=[new D(0,4.2,0),new D(6,5.6,6),new D(11,4.8,-7)],c=[new D(-12,6,10),new D(-6,5.6,6),new D(0,4.2,0)];[o,l,c].forEach(f=>{const g=Bx(f);this.scene.add(g.lineMesh),g.pulses.forEach(_=>this.scene.add(_.mesh)),this.powerLines.push(g)});const h=36,d=new nn,u=new Float32Array(h*3);this.sparkVelocities=[];for(let f=0;f<h;f++)u[f*3]=(Math.random()-.5)*4,u[f*3+1]=2+Math.random()*2.2,u[f*3+2]=(Math.random()-.5)*4,this.sparkVelocities.push({vx:(Math.random()-.5)*.08,vy:Math.random()*.08+.04,vz:(Math.random()-.5)*.08,life:Math.random()});d.setAttribute("position",new Bn(u,3)),this.sparkMaterial=new gd({color:62463,size:.38,transparent:!0,opacity:.85,blending:Ho}),this.sparkPoints=new Yv(d,this.sparkMaterial),this.scene.add(this.sparkPoints)}setupInteractions(){this.raycaster=new fx,this.mouse=new Ct,this.container.addEventListener("click",t=>{this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0);if(e.length>0){let n=e[0].object;for(;n.parent&&!n.userData.nodeId&&n!==this.scene;)n=n.parent;n&&n.userData.nodeId&&this.onNodeClick&&this.onNodeClick(n.userData.nodeId,n)}})}spawnCyberAttack(t){this.clearCyberBugs();for(let e=0;e<6;e++){const n=e*Math.PI*2/6,i=Math.cos(n)*3.5,r=Math.sin(n)*3.5,a=kx(i,2.5,r);this.scene.add(a),this.cyberBugs.push(a)}this.substation&&this.substation.userData.breakerArm&&Vn.to(this.substation.userData.breakerArm.rotation,{x:-Math.PI/2.8,duration:.6,ease:"back.out(2)"}),this.substation&&this.substation.userData.statusLed&&(this.substation.userData.statusLed.material=Q.glowRed),this.powerLines.forEach(e=>{e.pulses.forEach(n=>n.mesh.material=Q.glowRed)}),this.pypyRobot&&(this.pypyRobot.userData.eyes&&this.pypyRobot.userData.eyes.forEach(e=>e.material=Q.glowRed),this.pypyRobot.userData.ears&&(this.pypyRobot.userData.ears[0].rotation.z=.55,this.pypyRobot.userData.ears[1].rotation.z=-.55))}clearCyberBugs(){this.cyberBugs.forEach(t=>this.scene.remove(t)),this.cyberBugs=[],this.substation&&this.substation.userData.breakerArm&&Vn.to(this.substation.userData.breakerArm.rotation,{x:0,duration:.45,ease:"power2.inOut"}),this.substation&&this.substation.userData.statusLed&&(this.substation.userData.statusLed.material=Q.glowGreen),this.powerLines.forEach(t=>{t.pulses.forEach(e=>e.mesh.material=Q.glowCyan)}),this.pypyRobot&&(this.pypyRobot.userData.eyes&&this.pypyRobot.userData.eyes.forEach(t=>t.material=Q.dogEye),this.pypyRobot.userData.ears&&(this.pypyRobot.userData.ears[0].rotation.z=.25,this.pypyRobot.userData.ears[1].rotation.z=-.25))}animate(t){requestAnimationFrame(this.animate);const e=t*.001;this.controls.update(),this.renewables&&this.renewables.userData.turbines&&this.renewables.userData.turbines.forEach((a,o)=>{a.rotation.z+=.03+o*.008}),this.genStation&&this.genStation.userData.puffs&&this.genStation.userData.puffs.forEach((a,o)=>{a.position.y=5.2+Math.sin(e*2+o)*.35,a.scale.setScalar(.9+Math.cos(e*1.5+o)*.12)});const n=window.gridState&&window.gridState.isCompromised,i=n?.014:.007;if(this.powerLines.forEach(a=>{a.pulses.forEach(o=>{o.progress=(o.progress+i)%1;const l=a.curve.getPointAt(o.progress);o.mesh.position.copy(l),n?o.mesh.material=Q.glowRed:o.mesh.material=Q.glowCyan})}),this.substation&&this.substation.userData.statusStrobe){const a=this.substation.userData.statusStrobe;n?a.material=Math.sin(e*16)>0?Q.glowRed:Q.darkGray:a.material=Math.sin(e*4)>.2?Q.glowGreen:Q.darkGray}if(this.sparkPoints&&this.sparkVelocities){const a=this.sparkPoints.geometry.attributes.position.array,o=this.sparkVelocities.length;this.sparkMaterial.color.setHex(n?16711748:62463),this.sparkMaterial.size=n?.55:.28;for(let l=0;l<o;l++){const c=this.sparkVelocities[l];a[l*3]+=c.vx*(n?2.5:1),a[l*3+1]+=c.vy*(n?2.5:1),a[l*3+2]+=c.vz*(n?2.5:1),c.life+=.035,c.life>1&&(c.life=0,a[l*3]=(Math.random()-.5)*(n?4.5:2.5),a[l*3+1]=1.8+Math.random()*1.5,a[l*3+2]=(Math.random()-.5)*(n?4.5:2.5))}this.sparkPoints.geometry.attributes.position.needsUpdate=!0}const r=15;this.cars.forEach(a=>{a.userData.angle+=a.userData.speed;const o=Math.cos(a.userData.angle)*r,l=Math.sin(a.userData.angle)*r;a.position.set(o,1.52,l),a.rotation.y=-a.userData.angle+Math.PI/2}),this.clouds.forEach(a=>{a.position.x+=a.userData.speed*4,a.position.x>32&&(a.position.x=-32)}),this.pypyRobot&&(this.pypyRobot.position.y=4.5+Math.sin(e*2.5)*.2,this.pypyRobot.rotation.y=Math.sin(e*.8)*.15,this.pypyRobot.userData.tail&&(this.pypyRobot.userData.tail.rotation.y=Math.sin(e*12)*.45),this.pypyRobot.userData.ears&&(this.pypyRobot.userData.ears[0].rotation.x=.1+Math.sin(e*3.5)*.08,this.pypyRobot.userData.ears[1].rotation.x=.1+Math.sin(e*3.5+.4)*.08),this.pypyRobot.userData.head&&(this.pypyRobot.userData.head.rotation.z=Math.sin(e*1.5)*.05)),this.cyberBugs.forEach((a,o)=>{a.position.y=2.4+Math.sin(e*8+o)*.25,a.rotation.y+=.06,a.rotation.x=Math.sin(e*10+o)*.15}),this.renderer.render(this.scene,this.camera)}}const en={NONE:"NONE",FDI:"FDI (False Data Injection)",DDOS:"DDoS Cyber Storm",RANSOM:"Ransomware Breaker Lockout",TRIP:"N-1 Transmission Line Trip"};class Vx{constructor(){this.activeTab="overview",this.connected=!0,this.frequency=60,this.nominalFreq=60,this.totalLoad=6150.8,this.totalGen=6192.4,this.systemInertia=4.2,this.aiTrust=.998,this.threatScore=.02,this.currentAttack=en.NONE,this.statusText="IEEE 39-BUS SECURED",this.isCompromised=!1,this.shieldActive=!1,this.isRecovering=!1,this.wsLatency=14,this.messageRate=120,this.isLiveMode=!1,this.backendWsUrl="ws://localhost:8000/ws",this.ws=null,this.pages=[{id:"overview",label:"Ringkasan",icon:"📊",desc:"Gambaran menyeluruh keselamatan grid"},{id:"grid",label:"Digital Twin 3D",icon:"⚡",desc:"Telemetri 39-Bus, talian & suis"},{id:"detection",label:"Pengesanan AI",icon:"🛡️",desc:"Bukti ancaman LSTM, GNN, ST-GNN, PINN"},{id:"decision",label:"Keputusan AI",icon:"🧠",desc:"Konsensus PPO & DQN serta gabungan risiko"},{id:"recovery",label:"Pemulihan FLISR",icon:"🔄",desc:"Protokol keselamatan Layer 6 terbukti"},{id:"simulation",label:"Simulasi Serangan",icon:"🎯",desc:"Cyber range & suntikan ancaman"},{id:"forensics",label:"Log & Forensik",icon:"📜",desc:"Rekod audit mesej topik MQTT"},{id:"health",label:"Kesihatan Sistem",icon:"💓",desc:"Status perkhidmatan, broker & kontena"}],this.aiModels={lstm:{name:"LSTM Temporal",risk:.02,threshold:.65,status:"Selamat (Normal)",anomalous:!1,latency:"8ms"},gnn:{name:"GNN Topologi",risk:.03,threshold:.6,status:"Topologi Sah (Normal)",anomalous:!1,latency:"12ms"},stgnn:{name:"ST-GNN Spatio-Temporal",risk:.01,threshold:.7,status:"Aliran Kuasa Normal",anomalous:!1,latency:"15ms"},pinn:{name:"PINN Fizik (Kirchhoff)",residual:.002,threshold:.05,status:"KCL/KVL 100% Sah",anomalous:!1,latency:"6ms"}},this.rlRecovery={ppoAction:"Voltage Trim [Bus 32: +0.01 p.u.]",ppoConfidence:.96,dqnAction:"Breaker Reconnect Feeder #4",dqnConfidence:.94,agreement:"100% Persetujuan PPO/DQN",sandboxStatus:"AC Newton-Raphson Solver Converged"},this.recoverySteps=[{id:1,label:"Breaker OPEN Dikesan",desc:"Status suis pemutus litar disahkan terbuka",done:!0,active:!1},{id:2,label:"Arahan Palsu Disekat",desc:"Tapis trafik berniat jahat & asingkan penderia",done:!0,active:!1},{id:3,label:"Kelulusan Konsensus AI",desc:"Konsensus dwi-ejen PPO & DQN diluluskan",done:!0,active:!1},{id:4,label:"AC Solver Menumpu",desc:"Aliran kuasa AC selamat disahkan Newton-Raphson",done:!0,active:!1},{id:5,label:"Arahan CLOSE Dihantar",desc:"Isyarat penutupan selamat ke suis Feeder #4",done:!0,active:!1},{id:6,label:"GRID SECURED (Level 6)",desc:"Pengesahan telemetri baharu: Grid Selamat!",done:!0,active:!1}],this.services=[{name:"IEEE-39 Digital Twin",status:"ONLINE",latency:"4ms",role:"Simulasi Fizik Grid Kuasa"},{name:"MQTT Mosquitto Broker",status:"ONLINE",latency:"2ms",role:"Mesej Telemetri Port 1883"},{name:"AI Fusion & Detection Engine",status:"ONLINE",latency:"12ms",role:"Inferens Selari 4-Model"},{name:"PPO/DQN Recovery Orchestrator",status:"ONLINE",latency:"18ms",role:"Konsensus Pemulihan Pintar"},{name:"PINN Physics Validator",status:"ONLINE",latency:"6ms",role:"Pengesahan Hukum Kirchhoff"},{name:"Layer-6 Safety Gate Guard",status:"ONLINE",latency:"3ms",role:"Pemeriksaan Veto & Kelulusan"}],this.buses39=[];for(let t=1;t<=39;t++){const e=t>=30;let n=e?`Penjana G${t-29}`:"Nod Beban / Transmisi";t===5&&(n="Beban Hospital Utama (Keutamaan)"),t===8&&(n="Beban Industri Utama (Keutamaan)"),t===30&&(n="G1 Pangkalan Nuklear (1040 MW)"),t===31&&(n="G2 Hidroelektrik (646 MW)"),t===32&&(n="G3 / Pencawang Utama (650 MW)"),t===39&&(n="G10 / Interkoneksi Grid Import (1000 MW)"),this.buses39.push({num:t,id:`Bus_${t}`,name:`Bas #${t}`,type:e?"GENERATOR":"LOAD",isGen:e,role:n,voltage:e?1.03:1.012,power:e?t===30?1040:t===31?646:t===32?650:540:t===5?322:t===8?522:180,qPower:e?250:60,angle:-2.5+t*.2,risk:.01,status:"NORMAL"})}this.lines=[{id:"Line_1_2",from:1,to:2,flow:145.2,rating:400,breaker:"CLOSED"},{id:"Line_2_3",from:2,to:3,flow:210.5,rating:500,breaker:"CLOSED"},{id:"Line_3_4",from:3,to:4,flow:-85,rating:400,breaker:"CLOSED"},{id:"Line_4_5",from:4,to:5,flow:320.1,rating:600,breaker:"CLOSED"},{id:"Line_5_6",from:5,to:6,flow:190.4,rating:500,breaker:"CLOSED"},{id:"Line_14_15",from:14,to:15,flow:280,rating:600,breaker:"CLOSED"},{id:"Line_16_17",from:16,to:17,flow:175.8,rating:450,breaker:"CLOSED"},{id:"Line_32_feeder4",from:32,to:10,flow:450,rating:700,breaker:"CLOSED"}],this.logs=[],this.addLog("MQTT [pypy/grid/telemetry]: Data telemetri IEEE 39-Bus aktif","info"),this.addLog("AI [grid/ai/fusion]: 4 Model (LSTM, GNN, ST-GNN, PINN) disahkan bersedia","success"),this.addLog("PINN [grid/physics_validation]: Hukum Kirchhoff dipatuhi (Residu = 0.002 MW)","info"),this.addLog("IMMUNE [grid/l6_recovery]: Grid Secured Level 6 diaktifkan","success"),this.listeners=[],setInterval(()=>this.tick(),1e3)}subscribe(t){this.listeners.push(t)}notify(){this.listeners.forEach(t=>t(this))}setTab(t){this.activeTab=t,this.notify()}addLog(t,e="info"){const n=new Date().toLocaleTimeString("ms-MY",{hour12:!1});this.logs.unshift({time:n,msg:t,type:e}),this.logs.length>80&&this.logs.pop()}tick(){if(!this.isLiveMode&&!this.isCompromised&&!this.isRecovering){const t=(Math.random()-.5)*.02;this.frequency=parseFloat((60+t).toFixed(3)),this.totalLoad=parseFloat((6150.8+(Math.random()-.5)*4).toFixed(1));const e=this.buses39.find(n=>n.num===32);e&&(e.voltage=parseFloat((1.025+(Math.random()-.5)*.004).toFixed(3))),this.notify()}}connectLiveBackend(t){if(this.ws){try{this.ws.close()}catch{}this.ws=null}const e=t||this.backendWsUrl||"ws://localhost:8000/ws";this.backendWsUrl=e,this.addLog(`[BACKEND] Menyambung ke WebSocket: ${e}...`,"info");try{this.ws=new WebSocket(e),this.ws.onopen=()=>{this.isLiveMode=!0,this.connected=!0,this.addLog(`[BACKEND] Sambungan BERJAYA ke ${e}! Mod Live Telemetri Aktif.`,"success"),this.notify()},this.ws.onmessage=n=>{try{const i=JSON.parse(n.data);this.handleLiveMessage(i)}catch(i){console.error("Failed to parse backend message:",i)}},this.ws.onerror=n=>{console.warn("Backend WebSocket error:",n),this.isLiveMode&&this.addLog("[BACKEND] Ralat sambungan WebSocket. Kembali ke Mod Simulasi Autonomi.","warning"),this.isLiveMode=!1,this.notify()},this.ws.onclose=()=>{this.isLiveMode&&this.addLog("[BACKEND] Sambungan WebSocket terputus. Beralih ke Mod Simulasi Autonomi.","warning"),this.isLiveMode=!1,this.notify()}}catch(n){console.error("Failed to initialize WebSocket:",n),this.isLiveMode=!1,this.notify()}}disconnectLiveBackend(){if(this.ws){try{this.ws.close()}catch{}this.ws=null}this.isLiveMode=!1,this.addLog("[BACKEND] Mod Live ditamatkan. Kembali ke Mod Simulasi Tempatan.","info"),this.notify()}handleLiveMessage(t){if(t.type==="PONG"){const e=t.payload;e&&(this.wsLatency=Date.now()-e);return}if(t.type==="BOOTSTRAP"){t.telemetry&&this.applyLiveTelemetry(t.telemetry),t.threat&&(this.threatScore=t.threat.instability_risk||this.threatScore),t.trust_scores&&(this.aiTrust=t.trust_scores.overall_trust||this.aiTrust);return}if(t.topic&&t.payload){const{topic:e,payload:n}=t;e==="pypy/grid/telemetry"||e==="grid/telemetry"?this.applyLiveTelemetry(n):e.includes("attack")||e.includes("alerts")?this.addLog(`[MQTT: ${e}] ${typeof n=="string"?n:JSON.stringify(n)}`,"danger"):e==="pypy/ai/fusion"&&(n.overall_trust!==void 0&&(this.aiTrust=n.overall_trust),n.threat_score!==void 0&&(this.threatScore=n.threat_score));return}t.state&&t.state.buses&&this.applyLiveTelemetry(t)}applyLiveTelemetry(t){if(!t||!t.state)return;const e=t.state;if(e.frequency!==void 0&&(this.frequency=parseFloat(e.frequency.toFixed(3))),e.total_load!==void 0&&(this.totalLoad=parseFloat(e.total_load.toFixed(1))),e.total_gen!==void 0&&(this.totalGen=parseFloat(e.total_gen.toFixed(1))),t.attack_status){const n=t.attack_status.active_attack;this.isCompromised=!!n,n?(this.currentAttack=n,this.statusText=`AMARAN: ${n.toUpperCase()} AKTIF!`):(this.currentAttack=en.NONE,this.statusText="IEEE 39-BUS SECURED (LIVE)")}if(e.buses){const n=e.buses.Bus_32||e.buses[32]||e.buses[32];if(n){const i=this.buses39.find(r=>r.num===32);i&&(i.voltage=n.voltage_pu||n.voltage||i.voltage,i.power=n.active_power_mw||n.power||i.power,i.qPower=n.reactive_power_mvar||n.qPower||i.qPower,i.status=this.isCompromised?"ATTACKED":"NORMAL")}}this.notify()}triggerAttack(t){this.currentAttack=t,this.isCompromised=!0,this.shieldActive=!1,this.isRecovering=!1,this.recoverySteps.forEach(n=>{n.done=!1,n.active=!1});const e=this.buses39.find(n=>n.num===32);switch(t){case en.FDI:this.frequency=60.48,this.totalLoad=6980.5,this.aiTrust=.38,this.threatScore=.94,this.statusText="AMARAN: SERANGAN FDI DIKESAN!",this.aiModels.lstm.risk=.91,this.aiModels.lstm.anomalous=!0,this.aiModels.lstm.status="Anomali Temporal (Z-Score = 4.8)",this.aiModels.pinn.residual=.284,this.aiModels.pinn.anomalous=!0,this.aiModels.pinn.status="KCL/KVL TIDAK PATUH! (Data Palsu)",this.aiModels.gnn.risk=.84,this.aiModels.gnn.anomalous=!0,this.aiModels.gnn.status="Graf Hubungan Corrupt",this.aiModels.stgnn.risk=.76,this.aiModels.stgnn.anomalous=!0,this.aiModels.stgnn.status="Gelombang Aliran Tidak Selari",e&&(e.voltage=1.185,e.risk=.95,e.status="FDI ATTACK"),this.addLog("[MQTT: grid/alerts] Serangan FDI dikesan pada penderia Bus 32!","danger"),this.addLog("[PINN: physics_validation] Pelanggaran Kirchhoff: Residual 0.284 MW melebihi had toleransi!","danger"),this.addLog("[LSTM: ai/lstm] Anomali temporal tinggi pada bacaan fasa voltan","danger");break;case en.DDOS:this.frequency=59.82,this.aiTrust=.55,this.threatScore=.82,this.statusText="AMARAN: BANJIR PAKET DDOS!",this.aiModels.stgnn.risk=.89,this.aiModels.stgnn.anomalous=!0,this.aiModels.stgnn.status="Kelewatan Telemetri > 1,450ms",this.aiModels.gnn.risk=.78,this.aiModels.gnn.anomalous=!0,this.aiModels.gnn.status="Paket Drop Topologi 42%",this.addLog("[MQTT: grid/alerts] Banjir paket DDoS SCADA/MQTT melanda broker port 1883","danger"),this.addLog("[ST-GNN: ai/stgnn] Kelewatan spatio-temporal kritikal melebihi ambang selamat","danger");break;case en.RANSOM:this.frequency=59.41,this.totalLoad=5380,this.aiTrust=.22,this.threatScore=.92,this.statusText="AMARAN: PEMUTUS LITAR DIKUNCI RANSOMWARE!",this.aiModels.lstm.risk=.94,this.aiModels.lstm.anomalous=!0,this.aiModels.lstm.status="Penurunan Beban Mendadak (-770 MW)",this.aiModels.pinn.residual=.31,this.aiModels.pinn.anomalous=!0,this.aiModels.pinn.status="Aliran Terhalang Paksa";const n=this.lines.find(r=>r.id==="Line_32_feeder4");n&&(n.breaker="LOCKED_OPEN"),this.addLog("[BREAKER] Perintah berniat jahat dikesan: Feeder #4 dikunci OPEN secara paksa!","danger"),this.addLog("[AI ORCHESTRATOR] Percubaan rampasan suis dikesan oleh Layer 6 Safety Guard","danger");break;case en.TRIP:this.frequency=59.22,this.totalLoad=5790,this.aiTrust=.62,this.threatScore=.74,this.statusText="AMARAN: TALIAN 14-15 TERPUTUS (N-1 TRIP)!",this.aiModels.stgnn.risk=.88,this.aiModels.stgnn.anomalous=!0,this.aiModels.stgnn.status="Lebihan Aliran Spatio-Temporal",this.aiModels.pinn.residual=.195,this.aiModels.pinn.anomalous=!0,this.aiModels.pinn.status="Ketidakseimbangan Aliran AC";const i=this.lines.find(r=>r.id==="Line_14_15");i&&(i.breaker="TRIPPED"),this.addLog("[GRID] Talian 14-15 terputus! Kontinjensi N-1 diaktifkan","danger"),this.addLog("[PINN] Keseimbangan aliran kuasa AC terjejas","warning");break}this.notify()}async executeRecoveryPipeline(t){this.isRecovering=!0,this.addLog("[RECOVERY] Memulakan protokol pemulihan autonomi Level 6...","info");for(let n=0;n<this.recoverySteps.length;n++)this.recoverySteps.forEach(i=>i.active=!1),this.recoverySteps[n].active=!0,this.notify(),t&&t(this.recoverySteps[n]),await new Promise(i=>setTimeout(i,650)),this.recoverySteps[n].done=!0,n===0?this.addLog("[L6: STEP 1] Status pemutus litar disahkan OPEN di Digital Twin","info"):n===1?this.addLog("[L6: STEP 2] Arahan berniat jahat diasingkan & penderia ditapis","info"):n===2?this.addLog("[L6: STEP 3] Konsensus Dwi-Ejen PPO (0.96) & DQN (0.94) diluluskan","success"):n===3?this.addLog("[L6: STEP 4] AC Power Flow Solver menumpu dalam 3 lelaran Newton-Raphson","success"):n===4?this.addLog("[L6: STEP 5] Arahan CLOSE selamat dihantar ke pemutus litar","info"):n===5&&this.addLog("[L6: STEP 6] Pengesahan telemetri baharu: GRID SECURED LEVEL 6!","success");this.currentAttack=en.NONE,this.isCompromised=!1,this.isRecovering=!1,this.shieldActive=!0,this.frequency=60,this.totalLoad=6150.8,this.aiTrust=.999,this.threatScore=.01,this.statusText="GRID SECURED (Level 6 Verified)",this.aiModels.lstm.risk=.02,this.aiModels.lstm.anomalous=!1,this.aiModels.lstm.status="Selamat (Normal)",this.aiModels.gnn.risk=.02,this.aiModels.gnn.anomalous=!1,this.aiModels.gnn.status="Topologi Sah",this.aiModels.stgnn.risk=.01,this.aiModels.stgnn.anomalous=!1,this.aiModels.stgnn.status="Aliran Kuasa Normal",this.aiModels.pinn.residual=.002,this.aiModels.pinn.anomalous=!1,this.aiModels.pinn.status="KCL/KVL 100% Patuh";const e=this.buses39.find(n=>n.num===32);e&&(e.voltage=1.025,e.risk=.01,e.status="NORMAL"),this.lines.forEach(n=>n.breaker="CLOSED"),this.notify()}}const gt=new Vx;class Gx{constructor(){this.ctx=null,this.enabled=!0}init(){if(!this.ctx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggle(){return this.enabled=!this.enabled,this.enabled}playClick(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(600,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(1200,this.ctx.currentTime+.05),e.gain.setValueAtTime(.15,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.05),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.05)}playAttackSiren(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sawtooth";const n=this.ctx.currentTime;t.frequency.setValueAtTime(440,n),t.frequency.linearRampToValueAtTime(880,n+.2),t.frequency.linearRampToValueAtTime(440,n+.4),t.frequency.linearRampToValueAtTime(880,n+.6),e.gain.setValueAtTime(.2,n),e.gain.exponentialRampToValueAtTime(.01,n+.7),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(n+.7)}playShield(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="sine";const n=this.ctx.currentTime;t.frequency.setValueAtTime(220,n),t.frequency.exponentialRampToValueAtTime(880,n+.25),t.frequency.exponentialRampToValueAtTime(440,n+.5),e.gain.setValueAtTime(.25,n),e.gain.exponentialRampToValueAtTime(.001,n+.5),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(n+.5)}playGlitch(){if(!this.enabled||(this.init(),!this.ctx))return;const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square";const n=this.ctx.currentTime;t.frequency.setValueAtTime(150,n),t.frequency.setValueAtTime(300,n+.05),t.frequency.setValueAtTime(100,n+.1),t.frequency.setValueAtTime(600,n+.15),e.gain.setValueAtTime(.18,n),e.gain.exponentialRampToValueAtTime(.001,n+.25),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(n+.25)}playVictory(){if(!this.enabled||(this.init(),!this.ctx))return;const t=[523.25,659.25,783.99,1046.5],e=this.ctx.currentTime;t.forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.value=n;const o=e+i*.1;a.gain.setValueAtTime(.2,o),a.gain.exponentialRampToValueAtTime(.001,o+.25),r.connect(a),a.connect(this.ctx.destination),r.start(o),r.stop(o+.25)})}}const be=new Gx;window.addEventListener("DOMContentLoaded",()=>{window.gridState=gt;const s=document.getElementById("canvas-container"),t=new zx(s),e=document.getElementById("tele-freq"),n=document.getElementById("tele-load"),i=document.getElementById("tele-trust"),r=document.getElementById("tele-threat"),a=document.getElementById("grid-status-text"),o=document.querySelector(".status-indicator"),l=document.getElementById("comic-toast"),c=document.getElementById("toast-icon"),h=document.getElementById("toast-title"),d=document.getElementById("toast-desc"),u=document.getElementById("speech-text"),f=document.getElementById("hud-window"),g=document.getElementById("btn-toggle-hud"),_=document.getElementById("hud-toggle-text"),m=document.getElementById("btn-minimize-hud"),p=document.getElementById("hud-tab-icon"),x=document.getElementById("hud-tab-title"),y=document.getElementById("hud-tab-subtitle"),v=document.querySelectorAll(".nav-tab"),A=document.querySelectorAll(".tab-pane"),w=document.querySelectorAll(".cam-btn"),T=document.getElementById("btn-theme"),C=document.getElementById("theme-icon"),M=document.getElementById("btn-sound"),S=document.getElementById("sound-icon"),L=document.getElementById("btn-reset-cam"),G=document.getElementById("btn-auto-demo"),k=document.getElementById("btn-mode-toggle"),Y=document.getElementById("mode-icon"),$=document.getElementById("mode-text"),H=document.getElementById("backend-modal"),J=document.getElementById("btn-close-backend-modal"),X=document.getElementById("backend-ws-url"),ft=document.getElementById("btn-connect-backend"),I=document.getElementById("btn-disconnect-backend"),P=document.getElementById("bmc-status-box"),ot=document.getElementById("bmc-status-title"),mt=document.getElementById("bmc-status-sub");function V(){gt.isLiveMode?(k&&(k.classList.add("live"),Y&&(Y.textContent="📡"),$&&($.textContent="Live Docker")),P&&P.classList.add("live"),ot&&(ot.textContent="📡 Mod Live Backend Aktif"),mt&&(mt.textContent=`Bersambung ke ${gt.backendWsUrl||"WebSocket Gateway"}`)):(k&&(k.classList.remove("live"),Y&&(Y.textContent="🎮"),$&&($.textContent="Simulasi")),P&&P.classList.remove("live"),ot&&(ot.textContent="🎮 Mod Simulasi Autonomi (Aktif)"),mt&&(mt.textContent="Digital twin berjalan kendiri tanpa memerlukan server."))}k&&k.addEventListener("click",()=>{be.playClick(),X&&(X.value=localStorage.getItem("pypy_backend_url")||gt.backendWsUrl||"ws://localhost:8000/ws"),V(),H&&H.classList.remove("hidden")}),J&&J.addEventListener("click",()=>{be.playClick(),H&&H.classList.add("hidden")}),H&&H.addEventListener("click",U=>{U.target===H&&H.classList.add("hidden")}),ft&&ft.addEventListener("click",()=>{be.playClick();const U=X?X.value.trim():"ws://localhost:8000/ws";U&&(localStorage.setItem("pypy_backend_url",U),gt.connectLiveBackend(U),V(),H&&H.classList.add("hidden"),Se("📡","MENYAMBUNG KE BACKEND",`Menghubungi WebSocket ${U}...`,"normal"))}),I&&I.addEventListener("click",()=>{be.playClick(),gt.disconnectLiveBackend(),V(),H&&H.classList.add("hidden"),Se("🎮","MOD SIMULASI AKTIF","Beroperasi secara kendiri (Offline Digital Twin).","normal")});const K=document.getElementById("scada-modal"),lt=document.getElementById("btn-close-scada-modal"),et=document.getElementById("btn-header-scada"),pt=document.getElementById("nav-tab-scada"),St=document.getElementById("btn-quick-scada-open"),bt=document.getElementById("scada-tunnel-url"),zt=document.getElementById("btn-open-scada-tunnel"),kt="https://motivated-nail-jeff-monroe.trycloudflare.com";function Yt(U){return!U||typeof U!="string"||U.includes("cleaner-simply-moss-respected")?kt:U.startsWith("http")?U:`https://${U}`}const N=localStorage.getItem("pypy_tunnel_url");N&&N.includes("cleaner-simply-moss-respected")&&localStorage.removeItem("pypy_tunnel_url");function ce(){fetch("./tunnel_config.json?t="+Date.now()).then(U=>U.json()).then(U=>{if(U&&U.activeTunnelUrl){const tt=Yt(U.activeTunnelUrl);localStorage.setItem("pypy_tunnel_url",tt),bt&&(bt.value=tt),X&&(!X.value||X.value.includes("cleaner-simply"))&&(X.value=U.activeWsUrl||`wss://${tt.replace(/^https?:\/\//,"")}/ws`)}}).catch(()=>{})}ce();function Gt(){if(be.playClick(),bt){let U=localStorage.getItem("pypy_tunnel_url");U=Yt(U),localStorage.setItem("pypy_tunnel_url",U),bt.value=U}ce(),K&&K.classList.remove("hidden")}et&&et.addEventListener("click",Gt),pt&&pt.addEventListener("click",Gt),St&&St.addEventListener("click",Gt),lt&&lt.addEventListener("click",()=>{be.playClick(),K&&K.classList.add("hidden")}),K&&K.addEventListener("click",U=>{U.target===K&&K.classList.add("hidden")}),zt&&zt.addEventListener("click",()=>{be.playClick();let U=bt?bt.value.trim():"";U=Yt(U),localStorage.setItem("pypy_tunnel_url",U),bt&&(bt.value=U),window.open(U,"_blank"),Se("🌐","MEMBUKA DASHBOARD AWAM",`Membuka ${U}...`,"normal")}),document.querySelectorAll('#scada-modal a[href^="http://localhost:3001"]').forEach(U=>{U.addEventListener("click",tt=>{if(window.location.hostname!=="localhost"&&window.location.hostname!=="127.0.0.1"){tt.preventDefault();const O=Yt(localStorage.getItem("pypy_tunnel_url")),Dt=U.getAttribute("href"),Ht=Dt.includes("#")?Dt.substring(Dt.indexOf("#")):"",Ot=`${O}${Ht}`;window.open(Ot,"_blank"),Se("🌐","MEMBUKA DASHBOARD AWAM",`Mengarahkan ke ${Ot}...`,"normal")}})});const Wt=document.getElementById("btn-mascot-cheer"),It=document.getElementById("btn-mascot-scan"),ee=document.getElementById("btn-mascot-shield"),Rt=document.getElementById("waveform-canvas"),R=Rt?Rt.getContext("2d"):null,E=document.getElementById("wave-freq-text");let W=0;const rt=document.getElementById("gauge-freq-canvas"),ct=document.getElementById("gauge-load-canvas"),nt=document.getElementById("gauge-freq-val"),Nt=document.getElementById("gauge-load-val"),_t=document.getElementById("gauge-status-badge"),At=document.getElementById("ai-radar-canvas"),Zt=document.getElementById("scope-3phase-canvas"),st=Zt?Zt.getContext("2d"):null,Tt=document.getElementById("scope-status-badge"),Bt=document.querySelector(".phase-chip.va"),Xt=document.querySelector(".phase-chip.vb"),Pt=document.querySelector(".phase-chip.vc");let Kt=0;const jt={island:{pos:{x:30,y:26,z:32},target:{x:0,y:2,z:0}},substation:{pos:{x:0,y:9,z:12},target:{x:0,y:1.5,z:0}},generators:{pos:{x:-16,y:10,z:-4},target:{x:-11,y:2,z:-10}},city:{pos:{x:18,y:13,z:-1},target:{x:11,y:3,z:-7}},mascot:{pos:{x:4,y:6,z:7},target:{x:3,y:4,z:3}}};function $t(U){const tt=jt[U];tt&&(be.playClick(),Vn.to(t.camera.position,{x:tt.pos.x,y:tt.pos.y,z:tt.pos.z,duration:1.2,ease:"power2.inOut"}),Vn.to(t.controls.target,{x:tt.target.x,y:tt.target.y,z:tt.target.z,duration:1.2,ease:"power2.inOut",onUpdate:()=>t.controls.update()}))}w.forEach(U=>{U.addEventListener("click",()=>{w.forEach(ht=>ht.classList.remove("active")),U.classList.add("active");const tt=U.getAttribute("data-view");$t(tt)})});function B(){if(!R)return;const U=Rt.width,tt=Rt.height;R.fillStyle="#0a0f1d",R.fillRect(0,0,U,tt),R.strokeStyle="rgba(56, 189, 248, 0.15)",R.lineWidth=1,R.beginPath(),R.moveTo(0,tt/2),R.lineTo(U,tt/2),R.stroke(),R.strokeStyle=gt.isCompromised?"#ef4444":"#00f3ff",R.lineWidth=2,R.beginPath();const ht=gt.frequency/60,O=tt/2.6*(gt.buses39[31].voltage/1.025);for(let Dt=0;Dt<U;Dt++){const Ht=Dt/U*Math.PI*4*ht+W,Ot=gt.isCompromised?Math.sin(Ht*3)*4:0,wt=tt/2+Math.sin(Ht)*O+Ot;Dt===0?R.moveTo(Dt,wt):R.lineTo(Dt,wt)}R.stroke(),W+=.12*ht,E&&(E.textContent=`${gt.frequency.toFixed(2)} Hz`),requestAnimationFrame(B)}requestAnimationFrame(B);function xt(U,tt,ht){if(!U)return;const O=U.getContext("2d"),Dt=U.width,Ht=U.height;O.clearRect(0,0,Dt,Ht);const Ot=Dt/2,wt=Ht-20,ut=Math.min(Dt*.42,Ht-32),ie=10;O.beginPath(),O.arc(Ot,wt,ut,Math.PI,2*Math.PI,!1),O.strokeStyle="rgba(148, 163, 184, 0.2)",O.lineWidth=ie,O.lineCap="round",O.stroke();const Ft=De=>Math.PI+Math.PI*Math.max(0,Math.min(1,(De-59)/2));O.beginPath(),O.arc(Ot,wt,ut,Ft(59),Ft(59.7),!1),O.strokeStyle="#ef4444",O.lineWidth=ie,O.lineCap="butt",O.stroke(),O.beginPath(),O.arc(Ot,wt,ut,Ft(59.7),Ft(59.9),!1),O.strokeStyle="#f59e0b",O.lineWidth=ie,O.stroke(),O.beginPath(),O.arc(Ot,wt,ut,Ft(59.9),Ft(60.1),!1),O.strokeStyle="#10b981",O.lineWidth=ie,O.stroke(),O.beginPath(),O.arc(Ot,wt,ut,Ft(60.1),Ft(60.3),!1),O.strokeStyle="#f59e0b",O.lineWidth=ie,O.stroke(),O.beginPath(),O.arc(Ot,wt,ut,Ft(60.3),Ft(61),!1),O.strokeStyle="#ef4444",O.lineWidth=ie,O.stroke(),[59,59.5,60,60.5,61].forEach(De=>{const ke=Ft(De),Ie=ut-15,Pe=ut-6,Ee=Ot+Math.cos(ke)*Ie,Be=wt+Math.sin(ke)*Ie,_n=Ot+Math.cos(ke)*Pe,gn=wt+Math.sin(ke)*Pe;O.beginPath(),O.moveTo(Ee,Be),O.lineTo(_n,gn),O.strokeStyle="#64748b",O.lineWidth=1.5,O.stroke();const sn=ut-23,fi=Ot+Math.cos(ke)*sn,Or=wt+Math.sin(ke)*sn+3;O.fillStyle="#64748b",O.font="bold 8px Inter, sans-serif",O.textAlign="center",O.fillText(De.toFixed(1),fi,Or)});const de=Ft(tt),ve=ut-8,Fe=Ot+Math.cos(de)*ve,oe=wt+Math.sin(de)*ve;O.beginPath(),O.moveTo(Ot,wt),O.lineTo(Fe,oe),O.strokeStyle=ht?"#ef4444":"#0284c7",O.lineWidth=3,O.lineCap="round",O.stroke(),O.beginPath(),O.arc(Ot,wt,6,0,Math.PI*2),O.fillStyle="#1e293b",O.fill(),O.beginPath(),O.arc(Ot,wt,3,0,Math.PI*2),O.fillStyle=ht?"#ef4444":"#0284c7",O.fill()}function Z(U,tt,ht){if(!U)return;const O=U.getContext("2d"),Dt=U.width,Ht=U.height;O.clearRect(0,0,Dt,Ht);const Ot=Dt/2,wt=Ht-20,ut=Math.min(Dt*.42,Ht-32),ie=10;O.beginPath(),O.arc(Ot,wt,ut,Math.PI,2*Math.PI,!1),O.strokeStyle="rgba(148, 163, 184, 0.2)",O.lineWidth=ie,O.lineCap="round",O.stroke();const Ft=ke=>Math.PI+Math.PI*Math.max(0,Math.min(1,ke/1e4));O.beginPath(),O.arc(Ot,wt,ut,Ft(0),Ft(7e3),!1),O.strokeStyle="#10b981",O.lineWidth=ie,O.lineCap="butt",O.stroke(),O.beginPath(),O.arc(Ot,wt,ut,Ft(7e3),Ft(8800),!1),O.strokeStyle="#f59e0b",O.lineWidth=ie,O.stroke(),O.beginPath(),O.arc(Ot,wt,ut,Ft(8800),Ft(1e4),!1),O.strokeStyle="#ef4444",O.lineWidth=ie,O.stroke();const se=[0,2500,5e3,7500,1e4],de=["0","2.5k","5k","7.5k","10k"];se.forEach((ke,Ie)=>{const Pe=Ft(ke),Ee=ut-15,Be=ut-6,_n=Ot+Math.cos(Pe)*Ee,gn=wt+Math.sin(Pe)*Ee,sn=Ot+Math.cos(Pe)*Be,fi=wt+Math.sin(Pe)*Be;O.beginPath(),O.moveTo(_n,gn),O.lineTo(sn,fi),O.strokeStyle="#64748b",O.lineWidth=1.5,O.stroke();const Or=ut-23,Ed=Ot+Math.cos(Pe)*Or,bd=wt+Math.sin(Pe)*Or+3;O.fillStyle="#64748b",O.font="bold 8px Inter, sans-serif",O.textAlign="center",O.fillText(de[Ie],Ed,bd)});const ve=Ft(tt),Fe=ut-8,oe=Ot+Math.cos(ve)*Fe,De=wt+Math.sin(ve)*Fe;O.beginPath(),O.moveTo(Ot,wt),O.lineTo(oe,De),O.strokeStyle=ht?"#ef4444":"#0284c7",O.lineWidth=3,O.lineCap="round",O.stroke(),O.beginPath(),O.arc(Ot,wt,6,0,Math.PI*2),O.fillStyle="#1e293b",O.fill(),O.beginPath(),O.arc(Ot,wt,3,0,Math.PI*2),O.fillStyle=ht?"#ef4444":"#0284c7",O.fill()}function at(U,tt,ht){if(!U)return;const O=U.getContext("2d"),Dt=U.width,Ht=U.height;O.clearRect(0,0,Dt,Ht);const Ot=Dt/2,wt=Ht/2-2,ut=Math.min(Dt,Ht)*.36,ie=[-Math.PI/2,0,Math.PI/2,Math.PI],Ft=["⚡ PINN","🕸️ GNN","⏱️ ST-GNN","🧠 LSTM"];[.25,.5,.75,1].forEach(Ee=>{O.beginPath(),ie.forEach((Be,_n)=>{const gn=ut*Ee,sn=Ot+Math.cos(Be)*gn,fi=wt+Math.sin(Be)*gn;_n===0?O.moveTo(sn,fi):O.lineTo(sn,fi)}),O.closePath(),O.strokeStyle="rgba(56, 189, 248, 0.2)",O.lineWidth=1,O.stroke()}),ie.forEach((Ee,Be)=>{O.beginPath(),O.moveTo(Ot,wt);const _n=Ot+Math.cos(Ee)*ut,gn=wt+Math.sin(Ee)*ut;O.lineTo(_n,gn),O.strokeStyle="rgba(148, 163, 184, 0.25)",O.lineWidth=1,O.stroke();const sn=Ot+Math.cos(Ee)*(ut+14),fi=wt+Math.sin(Ee)*(ut+14);O.fillStyle="#64748b",O.font="bold 9px Inter, sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText(Ft[Be],sn,fi)});const se=Math.max(.12,Math.min(1,1-tt.pinn.residual/.15)),de=Math.max(.12,Math.min(1,1-tt.gnn.risk)),ve=Math.max(.12,Math.min(1,1-tt.stgnn.risk)),Fe=Math.max(.12,Math.min(1,1-tt.lstm.risk)),oe=[se,de,ve,Fe];O.beginPath(),oe.forEach((Ee,Be)=>{const _n=ut*Ee,gn=Ot+Math.cos(ie[Be])*_n,sn=wt+Math.sin(ie[Be])*_n;Be===0?O.moveTo(gn,sn):O.lineTo(gn,sn)}),O.closePath(),O.fillStyle=ht?"rgba(239, 68, 68, 0.35)":"rgba(2, 132, 199, 0.32)",O.fill(),O.strokeStyle=ht?"#ef4444":"#00f3ff",O.lineWidth=2.5,O.stroke(),oe.forEach((Ee,Be)=>{const _n=ut*Ee,gn=Ot+Math.cos(ie[Be])*_n,sn=wt+Math.sin(ie[Be])*_n;O.beginPath(),O.arc(gn,sn,4,0,Math.PI*2),O.fillStyle=ht?"#ef4444":"#00f3ff",O.fill(),O.strokeStyle="#ffffff",O.lineWidth=1.5,O.stroke()});const De=document.querySelector(".rl-item.pinn"),ke=document.querySelector(".rl-item.gnn"),Ie=document.querySelector(".rl-item.stgnn"),Pe=document.querySelector(".rl-item.lstm");De&&(De.textContent=`● PINN Kirchhoff: ${(se*100).toFixed(1)}%`),ke&&(ke.textContent=`● GNN Topologi: ${(de*100).toFixed(1)}%`),Ie&&(Ie.textContent=`● ST-GNN Kuasa: ${(ve*100).toFixed(1)}%`),Pe&&(Pe.textContent=`● LSTM Masa: ${(Fe*100).toFixed(1)}%`)}function Et(){if(!st)return;const U=Zt.width,tt=Zt.height;st.fillStyle="#060a12",st.fillRect(0,0,U,tt),st.strokeStyle="rgba(56, 189, 248, 0.12)",st.lineWidth=1;const ht=4;for(let se=1;se<ht;se++){const de=tt/ht*se;st.beginPath(),st.setLineDash(se===ht/2?[]:[2,4]),st.moveTo(0,de),st.lineTo(U,de),st.stroke()}const O=10;for(let se=1;se<O;se++){const de=U/O*se;st.beginPath(),st.setLineDash([2,4]),st.moveTo(de,0),st.lineTo(de,tt),st.stroke()}st.setLineDash([]);const Dt=gt.isCompromised,Ht=gt.frequency/60,Ot=tt/3*(gt.buses39[31].voltage/1.025);[{name:"Va",offset:0,color:"#f59e0b",ampMod:Dt?.85:1},{name:"Vb",offset:-2*Math.PI/3,color:"#06b6d4",ampMod:Dt?1.15:1},{name:"Vc",offset:2*Math.PI/3,color:"#ec4899",ampMod:Dt?.92:1}].forEach(se=>{st.strokeStyle=se.color,st.lineWidth=2,st.beginPath();for(let de=0;de<U;de++){const ve=de/U*Math.PI*4*Ht+Kt+se.offset;let Fe=tt/2+Math.sin(ve)*(Ot*se.ampMod);Dt&&(Fe+=Math.sin(ve*3)*(Ot*.22),Fe+=Math.sin(ve*5)*(Ot*.1),de%15===0&&(Fe+=(Math.random()-.5)*6)),de===0?st.moveTo(de,Fe):st.lineTo(de,Fe)}st.stroke()}),Kt+=.09*Ht,Tt&&(Dt?(Tt.textContent="⚡ DISTORTION & FDIA HARMONICS",Tt.className="badge-tag red"):(Tt.textContent="SINE WAVE NORMAL (60.0 Hz)",Tt.className="badge-tag green"));const ut=Dt?(.872+Math.sin(Kt)*.015).toFixed(3):(1.025+Math.sin(Kt*.5)*.003).toFixed(3),ie=Dt?(1.164+Math.cos(Kt)*.018).toFixed(3):(1.022+Math.cos(Kt*.5)*.003).toFixed(3),Ft=Dt?(.941+Math.sin(Kt+1)*.014).toFixed(3):(1.028+Math.sin(Kt*.5+1)*.003).toFixed(3);Bt&&(Bt.innerHTML=`<span class="dot-va"></span> Fasa A (Va): ${ut} pu`),Xt&&(Xt.innerHTML=`<span class="dot-vb"></span> Fasa B (Vb): ${ie} pu`),Pt&&(Pt.innerHTML=`<span class="dot-vc"></span> Fasa C (Vc): ${Ft} pu`),requestAnimationFrame(Et)}requestAnimationFrame(Et);const yt={overview:{icon:"📊",title:"Ringkasan Sistem (Overview)",subtitle:"Gambaran Menyeluruh Status Grid & Pertahanan AI"},grid:{icon:"⚡",title:"Matriks IEEE 39-Bus (Digital Twin)",subtitle:"Pemeriksaan 39 Bas, 10 Penjana Kuasa & 46 Talian"},detection:{icon:"🛡️",title:"Pengesanan AI Multi-Model",subtitle:"Bukti Ancaman LSTM, GNN, ST-GNN & PINN"},decision:{icon:"🧠",title:"Keputusan & Gabungan Bukti AI",subtitle:"Konsensus Dwi-Ejen PPO & DQN serta Skor Kepercayaan"},recovery:{icon:"🔄",title:"Pemulihan Autonomi Level 6 (FLISR)",subtitle:"6 Langkah Pengesahan Keselamatan Grid"},simulation:{icon:"🎯",title:"Cyber Range: Simulasi Serangan",subtitle:"Suntikan FDI, DDoS, Ransomware & Line Trip"},forensics:{icon:"📜",title:"Log Forensik & Jejak Audit MQTT",subtitle:"Rekod Mesej Telemetri Mengikut Topik"},health:{icon:"💓",title:"Kesihatan Perkhidmatan & Kontena",subtitle:"Status Kependaman Broker & Model AI"}};function Vt(U){be.playClick(),gt.setTab(U),f.classList.contains("hidden")&&ue(!0),v.forEach(ht=>{ht.getAttribute("data-tab")===U?ht.classList.add("active"):ht.classList.remove("active")}),A.forEach(ht=>{ht.id===`pane-${U}`?ht.classList.add("active"):ht.classList.remove("active")});const tt=yt[U]||yt.overview;switch(p.textContent=tt.icon,x.textContent=tt.title,y.textContent=tt.subtitle,U){case"overview":$t("island"),u.textContent="Mod Ringkasan: Status keseluruhan keselamatan grid IEEE 39-Bus dan metrik 4-model AI.";break;case"grid":$t("substation"),u.textContent="Mod Digital Twin: Periksa kesemua 39 bas sistem IEEE 39-Bus New England dalam matriks di sebelah!";break;case"detection":$t("island"),u.textContent="Mod Pengesanan AI: 4 model (LSTM, GNN, ST-GNN, PINN) menganalisis keselamatan grid secara selari.";break;case"decision":$t("mascot"),u.textContent="Mod Keputusan AI: Menggabungkan bukti penderia dan membandingkan konsensus dwi-ejen RL (PPO + DQN).";break;case"recovery":$t("substation"),u.textContent="Mod Pemulihan FLISR: Protokol 6 langkah keselamatan Level 6 memastikan grid hanya pulih apabila kestabilan AC disahkan!";break;case"simulation":$t("substation"),u.textContent="Cyber Range: Cuba suntik serangan FDI, DDoS, Ransomware atau Line Trip untuk melihat tindak balas 3D!";break;case"forensics":u.textContent="Log & Forensik: Jejak audit masa nyata bagi semua mesej telemetri dan amaran topik MQTT.";break;case"health":u.textContent="Kesihatan Sistem: Memantau kependaman perkhidmatan kontena, broker MQTT, dan enjin inferens AI.";break}b()}v.forEach(U=>{U.addEventListener("click",()=>{const tt=U.getAttribute("data-tab");tt&&Vt(tt)})});function ue(U=null){be.playClick();const tt=f.classList.contains("hidden");(U!==null?U:tt)?(f.classList.remove("hidden"),document.body.classList.add("hud-open"),_&&(_.textContent="👁️ Panel")):(f.classList.add("hidden"),document.body.classList.remove("hud-open"),_&&(_.textContent="👁️ Panel"))}g&&g.addEventListener("click",()=>ue()),m&&m.addEventListener("click",()=>ue(!1));const Oe=document.getElementById("btn-mobile-hud");Oe&&Oe.addEventListener("click",()=>ue(!0)),T.addEventListener("click",()=>{be.playClick();const U=t.toggleTheme();C.textContent=U?"☀️":"🌙",Se(U?"🌃":"☀️",U?"MOD CYBER-NIGHT AKTIF":"MOD SIANG DIAKTIFKAN",U?"Lampu neon futuristik dan grid bercahaya aktif!":"Pencahayaan matahari kartun terang.")}),M.addEventListener("click",()=>{const U=be.toggle();S.textContent=U?"🔊":"🔇",be.playClick()}),L.addEventListener("click",()=>{$t("island"),w.forEach(U=>U.classList.remove("active")),document.querySelector('.cam-btn[data-view="island"]').classList.add("active")});let ae=null;function Se(U,tt,ht,O="normal"){clearTimeout(ae),c.textContent=U,h.textContent=tt,d.textContent=ht,l.className="comic-toast "+(O==="danger"?"danger":O==="success"?"success":""),l.classList.remove("hidden"),ae=setTimeout(()=>{l.classList.add("hidden")},4500)}const mn=document.getElementById("full-39-bus-matrix"),Pr=document.getElementById("bic-title"),Lr=document.getElementById("bic-v"),jn=document.getElementById("bic-p"),$s=document.getElementById("bic-q"),Zs=document.getElementById("bic-status"),Dr=document.getElementById("bic-desc");mn&&gt.buses39&&(mn.innerHTML="",gt.buses39.forEach(U=>{const tt=document.createElement("div");tt.className=`bus-cell ${U.isGen?"gen":"load"} ${U.num===32?"target active":""}`,tt.innerHTML=`
        <span class="bc-num">B${U.num}</span>
        <span class="bc-type">${U.isGen?"GEN":"LOAD"}</span>
      `,tt.title=`Bas #${U.num}: ${U.role}`,tt.addEventListener("click",()=>{be.playClick(),document.querySelectorAll(".bus-cell").forEach(ht=>ht.classList.remove("active")),tt.classList.add("active"),Pr.textContent=`⚡ Bas #${U.num} — ${U.role}`,Lr.textContent=`${U.voltage.toFixed(3)} p.u.`,jn.textContent=`${U.power} MW`,$s.textContent=`${U.qPower} MVAR`,Zs.textContent=U.status,Zs.className=U.status==="NORMAL"?"green":"red",Dr.innerHTML=U.num===32?"🌟 <strong>Bas #32</strong> ialah stesen utama dalam IEEE 39-Bus yang menempatkan Penjana 3 dan Pencawang Pengagihan Utama!":`Bas #${U.num} adalah nod ${U.type} dalam rangkaian New England IEEE 39-Bus.`,U.num===32?$t("substation"):U.num>=30?$t("generators"):(U.num===5||U.num===8)&&$t("city")}),mn.appendChild(tt)}));const Ui=document.getElementById("sld-bus32");Ui&&Ui.addEventListener("click",()=>{be.playClick();const U=document.querySelector(".bus-cell.target");U&&U.click()});const Js=document.getElementById("forensics-terminal"),$n=document.getElementById("log-search-input"),Qs=document.getElementById("btn-clear-logs");function cs(U=""){if(!Js)return;const tt=gt.logs.filter(ht=>!U||ht.msg.toLowerCase().includes(U.toLowerCase()));Js.innerHTML=tt.map(ht=>`
      <div class="log-line">
        <span class="log-time">[${ht.time}]</span>
        <span class="log-msg ${ht.type}">${ht.msg}</span>
      </div>
    `).join("")}$n&&$n.addEventListener("input",U=>{cs(U.target.value)}),Qs&&Qs.addEventListener("click",()=>{gt.logs=[],cs()});const Ir=document.getElementById("services-table");Ir&&gt.services&&(Ir.innerHTML=gt.services.map(U=>`
      <div class="service-row">
        <div class="sr-left">
          <strong>${U.name}</strong>
          <span>${U.role}</span>
        </div>
        <div class="sr-right">
          <span class="sr-lat">${U.latency}</span>
          <span class="badge-tag green">${U.status}</span>
        </div>
      </div>
    `).join("")),document.querySelectorAll("[data-attack]").forEach(U=>{U.addEventListener("click",()=>{const tt=U.getAttribute("data-attack");be.playAttackSiren(),be.playGlitch(),tt==="fdi"?(gt.triggerAttack(en.FDI),t.spawnCyberAttack("fdi"),u.textContent="Grrr! Hidung saya terhidu data palsu! Serangan FDI di Bas #32! Model PINN kesan residu Kirchhoff 0.284 MW!",Se("⚡","SERANGAN FDI DILANCARKAN","Data penderia Bus #32 dimanipulasi! Voltan dilaporkan 1.185 pu (Palsu).","danger"),$t("substation")):tt==="ddos"?(gt.triggerAttack(en.DDOS),t.spawnCyberAttack("ddos"),u.textContent="Grrr! Banjir trafik DDoS! Protokol MQTT dihujani paket palsu! Ekor saya tegak tanda amaran!",Se("👾","BANJIR DDOS MENGGANAS","Kelewatan penderia SCADA/MQTT melebihi 1,450ms!","danger"),$t("substation")):tt==="ransom"?(gt.triggerAttack(en.RANSOM),t.spawnCyberAttack("ransom"),u.textContent="Auuu! Ransomware mengunci pemutus litar Feeder #4! Lengan suis terbuka paksa!",Se("🔒","RANSOMWARE MENGUNCI LITAR","Feeder #4 terkunci! Arahan berniat jahat dikesan oleh AI Guard.","danger"),$t("substation")):tt==="trip"&&(gt.triggerAttack(en.TRIP),t.spawnCyberAttack("trip"),u.textContent="Woof bahaya! Talian 14-15 terputus! Kontinjensi N-1 dikesan, aliran kuasa melencong ke talian lain!",Se("💥","KONTINJENSI N-1 (LINE TRIP)","Talian penghantaran terputus! Frekuensi menjunam ke 59.22 Hz.","danger"),$t("generators"))})});async function Nr(){if(!gt.isRecovering){if(be.playShield(),u.textContent="Woof! Memulakan Protokol Pemulihan Level 6: Mengasingkan arahan palsu, mengira aliran kuasa AC, dan menutup suis...",t.pypyRobot&&t.pypyRobot.userData.shield){const U=t.pypyRobot.userData.shield;Vn.fromTo(U.scale,{x:.1,y:.1,z:.1},{x:1.6,y:1.6,z:1.6,duration:1,ease:"elastic.out(1, 0.4)"})}await gt.executeRecoveryPipeline(U=>{const tt=document.getElementById(`step-box-${U.id}`);tt&&(tt.className="l6-step-box "+(U.done?"done ":"")+(U.active?"active ":""))}),be.playVictory(),t.clearCyberBugs(),Xf({particleCount:90,spread:75,origin:{y:.6}}),t.pypyRobot&&t.pypyRobot.userData.shield&&Vn.to(t.pypyRobot.userData.shield.scale,{x:.001,y:.001,z:.001,duration:1.5,delay:1}),u.textContent="Woof woof! BERJAYA! Konsensus PPO & DQN bersama pengesah fizik AC Newton-Raphson pulihkan grid! 🐾⚡",Se("🛡️","GRID SECURED (LEVEL 6)","Semua 39 Bas, 10 Generator, dan Pemutus Litar disahkan stabil pada 60.00 Hz!","success")}}const Ur=document.getElementById("btn-tab-recover");Ur&&Ur.addEventListener("click",Nr),G.addEventListener("click",async()=>{be.playClick(),Se("🎬","TUR PANDUAN BERMULA","Memulakan demonstrasi sistem pintar IEEE 39-Bus..."),Vt("overview"),await new Promise(tt=>setTimeout(tt,3500)),Vt("grid"),await new Promise(tt=>setTimeout(tt,4e3)),Vt("simulation"),await new Promise(tt=>setTimeout(tt,2e3));const U=document.querySelector('[data-attack="fdi"]');U&&U.click(),await new Promise(tt=>setTimeout(tt,4500)),Vt("detection"),await new Promise(tt=>setTimeout(tt,4e3)),Vt("recovery"),await new Promise(tt=>setTimeout(tt,2500)),Nr()}),Wt.addEventListener("click",()=>{be.playClick(),u.textContent="Woof woof! Gembira dapat berkhidmat! PYPY si jurutera siber comel bersedia jaga keselamatan grid! 🐶🦺⚡",t.pypyRobot&&(Vn.to(t.pypyRobot.rotation,{y:t.pypyRobot.rotation.y+Math.PI*2,duration:.8,ease:"back.out(2)"}),t.pypyRobot.userData.tail&&Vn.to(t.pypyRobot.userData.tail.rotation,{y:Math.PI/2.5,yoyo:!0,repeat:5,duration:.1}))}),It.addEventListener("click",()=>{be.playClick(),u.textContent="Hidung saya menghidu... Pengesahan Fizik PINN: Aliran arus KCL normal! Residu 0.002 MW (Pematuhan 100%)! 🐾",Se("🐶🔍","DERIA PINN PYPY","Hukum Kirchhoff dipatuhi di kesemua 39 nod bas tanpa anomali.")}),ee.addEventListener("click",()=>{if(be.playShield(),u.textContent="Auuuu! Topi putih keselamatan diikat rapi, Perisai Pertahanan AI diaktifkan melindungi grid!",t.pypyRobot&&t.pypyRobot.userData.shield){const U=t.pypyRobot.userData.shield;Vn.fromTo(U.scale,{x:.1,y:.1,z:.1},{x:1.4,y:1.4,z:1.4,duration:.6,yoyo:!0,repeat:1,ease:"power2.out"})}});function b(){e.textContent=gt.frequency.toFixed(3)+" Hz",n.textContent=gt.totalLoad.toLocaleString()+" MW",i.textContent=(gt.aiTrust*100).toFixed(1)+"%",r.textContent=gt.currentAttack,gt.isCompromised?(a.textContent="AMARAN: SERANGAN AKTIF",o.className="status-indicator danger",i.className="tele-val highlight-red",r.className="tele-val highlight-red"):(a.textContent=gt.statusText,o.className="status-indicator normal",i.className="tele-val highlight-green",r.className="tele-val highlight-blue");const U=document.getElementById("ov-lstm-val"),tt=document.getElementById("ov-gnn-val"),ht=document.getElementById("ov-stgnn-val"),O=document.getElementById("ov-pinn-val");U&&(U.textContent=`Risiko ${gt.aiModels.lstm.risk.toFixed(2)} (${gt.aiModels.lstm.status})`,U.className=gt.aiModels.lstm.anomalous?"red":"green"),tt&&(tt.textContent=`Risiko ${gt.aiModels.gnn.risk.toFixed(2)} (${gt.aiModels.gnn.status})`,tt.className=gt.aiModels.gnn.anomalous?"red":"green"),ht&&(ht.textContent=`Risiko ${gt.aiModels.stgnn.risk.toFixed(2)} (${gt.aiModels.stgnn.status})`,ht.className=gt.aiModels.stgnn.anomalous?"red":"green"),O&&(O.textContent=`Residu ${gt.aiModels.pinn.residual.toFixed(3)} MW (${gt.aiModels.pinn.status})`,O.className=gt.aiModels.pinn.anomalous?"red":"green");const Dt=document.getElementById("mf-lstm"),Ht=document.getElementById("mf-gnn"),Ot=document.getElementById("mf-stgnn"),wt=document.getElementById("mf-pinn");Dt&&(Dt.style.width=`${Math.min(100,gt.aiModels.lstm.risk*100)}%`,Dt.className="meter-fill "+(gt.aiModels.lstm.anomalous?"danger":"")),Ht&&(Ht.style.width=`${Math.min(100,gt.aiModels.gnn.risk*100)}%`,Ht.className="meter-fill "+(gt.aiModels.gnn.anomalous?"danger":"")),Ot&&(Ot.style.width=`${Math.min(100,gt.aiModels.stgnn.risk*100)}%`,Ot.className="meter-fill "+(gt.aiModels.stgnn.anomalous?"danger":"")),wt&&(wt.style.width=`${Math.min(100,gt.aiModels.pinn.residual*300)}%`,wt.className="meter-fill "+(gt.aiModels.pinn.anomalous?"danger":""));const ut=document.getElementById("dec-trust"),ie=document.getElementById("dec-threat");ut&&(ut.textContent=`${(gt.aiTrust*100).toFixed(1)}%`),ie&&(ie.textContent=`${gt.threatScore.toFixed(2)} (${gt.isCompromised?"KRITIKAL":"Selamat"})`),xt(rt,gt.frequency,gt.isCompromised),Z(ct,gt.totalLoad,gt.isCompromised),at(At,gt.aiModels,gt.isCompromised),nt&&(nt.textContent=gt.frequency.toFixed(3)+" Hz"),Nt&&(Nt.textContent=gt.totalLoad.toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})+" MW"),_t&&(_t.textContent=gt.isCompromised?`${gt.frequency.toFixed(2)} Hz AMARAN`:`${gt.frequency.toFixed(2)} Hz NORMAL`,_t.className=gt.isCompromised?"badge-tag red":"badge-tag green");const Ft=document.getElementById("sld-bus32"),se=document.getElementById("sld-line-bus32");Ft&&(gt.isCompromised?Ft.classList.add("attacked"):Ft.classList.remove("attacked")),se&&(se.style.stroke=gt.isCompromised?"#ef4444":"#0284c7"),V(),cs($n?$n.value:"")}gt.subscribe(b),t.onNodeClick=U=>{if(be.playClick(),U==="bus32"){Vt("grid");const tt=document.querySelector(".bus-cell.target");tt&&tt.click()}else Vt(U==="aiHub"?"decision":"grid")},b();const F=new URLSearchParams(window.location.search),q=F.get("open"),j=F.get("tab"),z=F.get("attack"),dt=F.get("live"),Mt=F.get("ws")||F.get("backend");q==="1"||q==="true"?ue(!0):q==="0"||q==="false"?ue(!1):window.innerWidth<=768?(f.classList.add("hidden"),document.body.classList.remove("hud-open")):document.body.classList.add("hud-open"),j&&Vt(j),z&&(z==="fdi"?gt.triggerAttack(en.FDI):z==="ddos"?gt.triggerAttack(en.DDOS):z==="ransom"?gt.triggerAttack(en.RANSOM):z==="trip"&&gt.triggerAttack(en.TRIP),t&&t.spawnCyberAttack&&t.spawnCyberAttack(z),b());const Lt=F.get("tunnel")||F.get("scada");if(Lt){const U=Lt.startsWith("http")?Lt:`https://${Lt}`;localStorage.setItem("pypy_tunnel_url",U),bt&&(bt.value=U)}const Ut=F.get("scadamodal")||F.get("modal");if((Ut==="1"||Ut==="scada")&&Gt(),dt==="1"||dt==="true"||Mt){const U=Mt||localStorage.getItem("pypy_backend_url")||"ws://localhost:8000/ws";gt.connectLiveBackend(U)}});
