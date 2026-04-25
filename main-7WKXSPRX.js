import{$ as sr,$a as Ne,A as ai,Aa as dt,Ab as H,B as Te,Ba as ci,Bb as Xi,C as xt,Ca as qt,Cb as is,D as nr,Da as kt,Db as Ki,E as rr,Ea as jt,Eb as ns,F as Ui,Fa as $i,Fb as mt,G as te,Ga as pe,Gb as Q,H as or,Ha as qo,I as Ao,Ia as Yo,Ib as Zi,J as To,Ja as qi,Jb as rs,K as Bt,Ka as k,Kb as os,L as ot,La as M,Lb as di,M as q,Ma as E,Mb as ss,N as K,Na as ht,Nb as oe,O as Z,Oa as Go,Ob as as,P as Po,Pa as Xo,Pb as cs,Q as f,Qa as cr,Qb as ls,R,Ra as Ko,Rb as mr,S as No,Sa as lr,Sb as ds,T as b,Ta as dr,Tb as hs,U as ft,Ua as ne,Ub as us,V as c,Va as X,Vb as ms,W as Lo,Wa as St,X as st,Xa as Rt,Y as gt,Z as ee,_ as ie,a as m,aa as P,ab as L,b as J,ba as A,bb as j,ca as zi,cb as ut,da as Fo,db as Yi,e as tt,ea as B,eb as hr,f as Eo,fa as x,g as Oe,ga as Vi,gb as li,h as v,ha as Hi,hb as Zo,i as lt,ia as Bo,ib as _t,j as Ct,ja as y,jb as Qo,k as et,ka as ar,kb as Mt,l as p,la as $t,lb as nt,m as Fi,ma as at,mb as T,n as Bi,na as jo,nb as Ut,o as Io,oa as w,ob as re,p as S,pa as me,pb as U,q as er,qa as Uo,qb as z,r as Ft,ra as zo,rb as ur,s as si,sa as Wi,sb as fe,t as Do,ta as Vo,tb as W,u as ji,ua as Ho,ub as Gi,v as Oo,va as Pe,vb as Le,w as Jt,wb as Jo,x as F,xa as Wo,xb as Et,y as ir,ya as it,yb as ts,z as Ae,za as $o,zb as es}from"./chunk-ORZOG5J6.js";var g="primary",xi=Symbol("RouteTitle"),vr=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function _e(i){return new vr(i)}function pr(i,n,t){for(let e=0;e<i.length;e++){let r=i[e],o=n[e];if(r[0]===":")t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function ys(i,n,t){let e=t.path.split("/"),r=e.indexOf("**");if(r===-1){if(e.length>i.length||t.pathMatch==="full"&&(n.hasChildren()||e.length<i.length))return null;let l={},d=i.slice(0,e.length);return pr(e,d,l)?{consumed:d,posParams:l}:null}if(r!==e.lastIndexOf("**"))return null;let o=e.slice(0,r),s=e.slice(r+1);if(o.length+s.length>i.length||t.pathMatch==="full"&&n.hasChildren()&&t.path!=="**")return null;let a={};return!pr(o,i.slice(0,o.length),a)||!pr(s,i.slice(i.length-s.length),a)?null:{consumed:i,posParams:a}}function rn(i){return new Promise((n,t)=>{i.pipe(te()).subscribe({next:e=>n(e),error:e=>t(e)})})}function Ic(i,n){if(i.length!==n.length)return!1;for(let t=0;t<i.length;++t)if(!zt(i[t],n[t]))return!1;return!0}function zt(i,n){let t=i?br(i):void 0,e=n?br(n):void 0;if(!t||!e||t.length!=e.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!ws(i[r],n[r]))return!1;return!0}function br(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function ws(i,n){if(Array.isArray(i)&&Array.isArray(n)){if(i.length!==n.length)return!1;let t=[...i].sort(),e=[...n].sort();return t.every((r,o)=>e[o]===r)}else return i===n}function Dc(i){return i.length>0?i[i.length-1]:null}function be(i){return Bi(i)?i:Ko(i)?et(Promise.resolve(i)):p(i)}function Cs(i){return Bi(i)?rn(i):Promise.resolve(i)}var Oc={exact:ks,subset:Ss},xs={exact:Ac,subset:Tc,ignored:()=>!0},Tr={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},fi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Pr(i,n,t){let e=i instanceof ct?i:n.parseUrl(i);return Xi(()=>yr(n.lastSuccessfulNavigation()?.finalUrl??new ct,e,m(m({},fi),t)))}function yr(i,n,t){return Oc[t.paths](i.root,n.root,t.matrixParams)&&xs[t.queryParams](i.queryParams,n.queryParams)&&!(t.fragment==="exact"&&i.fragment!==n.fragment)}function Ac(i,n){return zt(i,n)}function ks(i,n,t){if(!ge(i.segments,n.segments)||!tn(i.segments,n.segments,t)||i.numberOfChildren!==n.numberOfChildren)return!1;for(let e in n.children)if(!i.children[e]||!ks(i.children[e],n.children[e],t))return!1;return!0}function Tc(i,n){return Object.keys(n).length<=Object.keys(i).length&&Object.keys(n).every(t=>ws(i[t],n[t]))}function Ss(i,n,t){return Rs(i,n,n.segments,t)}function Rs(i,n,t,e){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!ge(r,t)||n.hasChildren()||!tn(r,t,e))}else if(i.segments.length===t.length){if(!ge(i.segments,t)||!tn(i.segments,t,e))return!1;for(let r in n.children)if(!i.children[r]||!Ss(i.children[r],n.children[r],e))return!1;return!0}else{let r=t.slice(0,i.segments.length),o=t.slice(i.segments.length);return!ge(i.segments,r)||!tn(i.segments,r,e)||!i.children[g]?!1:Rs(i.children[g],n,o,e)}}function tn(i,n,t){return n.every((e,r)=>xs[t](i[r].parameters,e.parameters))}var ct=class{root;queryParams;fragment;_queryParamMap;constructor(n=new C([],{}),t={},e=null){this.root=n,this.queryParams=t,this.fragment=e}get queryParamMap(){return this._queryParamMap??=_e(this.queryParams),this._queryParamMap}toString(){return Lc.serialize(this)}},C=class{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(e=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return en(this)}},se=class{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=_e(this.parameters),this._parameterMap}toString(){return Es(this)}};function Pc(i,n){return ge(i,n)&&i.every((t,e)=>zt(t.parameters,n[e].parameters))}function ge(i,n){return i.length!==n.length?!1:i.every((t,e)=>t.path===n[e].path)}function Nc(i,n){let t=[];return Object.entries(i.children).forEach(([e,r])=>{e===g&&(t=t.concat(n(r,e)))}),Object.entries(i.children).forEach(([e,r])=>{e!==g&&(t=t.concat(n(r,e)))}),t}var le=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:()=>new Gt,providedIn:"root"})}return i})(),Gt=class{parse(n){let t=new Cr(n);return new ct(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${hi(n.root,!0)}`,e=jc(n.queryParams),r=typeof n.fragment=="string"?`#${Fc(n.fragment)}`:"";return`${t}${e}${r}`}},Lc=new Gt;function en(i){return i.segments.map(n=>Es(n)).join("/")}function hi(i,n){if(!i.hasChildren())return en(i);if(n){let t=i.children[g]?hi(i.children[g],!1):"",e=[];return Object.entries(i.children).forEach(([r,o])=>{r!==g&&e.push(`${r}:${hi(o,!1)}`)}),e.length>0?`${t}(${e.join("//")})`:t}else{let t=Nc(i,(e,r)=>r===g?[hi(i.children[g],!1)]:[`${r}:${hi(e,!1)}`]);return Object.keys(i.children).length===1&&i.children[g]!=null?`${en(i)}/${t[0]}`:`${en(i)}/(${t.join("//")})`}}function Ms(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Qi(i){return Ms(i).replace(/%3B/gi,";")}function Fc(i){return encodeURI(i)}function wr(i){return Ms(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nn(i){return decodeURIComponent(i)}function ps(i){return nn(i.replace(/\+/g,"%20"))}function Es(i){return`${wr(i.path)}${Bc(i.parameters)}`}function Bc(i){return Object.entries(i).map(([n,t])=>`;${wr(n)}=${wr(t)}`).join("")}function jc(i){let n=Object.entries(i).map(([t,e])=>Array.isArray(e)?e.map(r=>`${Qi(t)}=${Qi(r)}`).join("&"):`${Qi(t)}=${Qi(e)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var Uc=/^[^\/()?;#]+/;function fr(i){let n=i.match(Uc);return n?n[0]:""}var zc=/^[^\/()?;=#]+/;function Vc(i){let n=i.match(zc);return n?n[0]:""}var Hc=/^[^=?&#]+/;function Wc(i){let n=i.match(Hc);return n?n[0]:""}var $c=/^[^&#]+/;function qc(i){let n=i.match($c);return n?n[0]:""}var Cr=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new C([],{}):new C([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new Z(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(t.length>0||Object.keys(e).length>0)&&(r[g]=new C(t,e)),r}parseSegment(){let n=fr(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new Z(4009,!1);return this.capture(n),new se(nn(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=Vc(this.remaining);if(!t)return;this.capture(t);let e="";if(this.consumeOptional("=")){let r=fr(this.remaining);r&&(e=r,this.capture(e))}n[nn(t)]=nn(e)}parseQueryParam(n){let t=Wc(this.remaining);if(!t)return;this.capture(t);let e="";if(this.consumeOptional("=")){let s=qc(this.remaining);s&&(e=s,this.capture(e))}let r=ps(t),o=ps(e);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=fr(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new Z(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=g);let a=this.parseChildren(t+1);e[s??g]=Object.keys(a).length===1&&a[g]?a[g]:new C([],a),this.consumeOptional("//")}return e}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new Z(4011,!1)}};function Is(i){return i.segments.length>0?new C([],{[g]:i}):i}function Ds(i){let n={};for(let[e,r]of Object.entries(i.children)){let o=Ds(r);if(e===g&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[e]=o)}let t=new C(i.segments,n);return Yc(t)}function Yc(i){if(i.numberOfChildren===1&&i.children[g]){let n=i.children[g];return new C(i.segments.concat(n.segments),n.children)}return i}function ae(i){return i instanceof ct}function Os(i,n,t=null,e=null,r=new Gt){let o=As(i);return Ts(o,n,t,e,r)}function As(i){let n;function t(o){let s={};for(let l of o.children){let d=t(l);s[l.outlet]=d}let a=new C(o.url,s);return o===i&&(n=a),a}let e=t(i.root),r=Is(e);return n??r}function Ts(i,n,t,e,r){let o=i;for(;o.parent;)o=o.parent;if(n.length===0)return gr(o,o,o,t,e,r);let s=Gc(n);if(s.toRoot())return gr(o,o,new C([],{}),t,e,r);let a=Xc(s,o,i),l=a.processChildren?mi(a.segmentGroup,a.index,s.commands):Ns(a.segmentGroup,a.index,s.commands);return gr(o,a.segmentGroup,l,t,e,r)}function on(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function gi(i){return typeof i=="object"&&i!=null&&i.outlets}function fs(i,n,t){i||="\u0275";let e=new ct;return e.queryParams={[i]:n},t.parse(t.serialize(e)).queryParams[i]}function gr(i,n,t,e,r,o){let s={};for(let[d,h]of Object.entries(e??{}))s[d]=Array.isArray(h)?h.map(u=>fs(d,u,o)):fs(d,h,o);let a;i===n?a=t:a=Ps(i,n,t);let l=Is(Ds(a));return new ct(l,s,r)}function Ps(i,n,t){let e={};return Object.entries(i.children).forEach(([r,o])=>{o===n?e[r]=t:e[r]=Ps(o,n,t)}),new C(i.segments,e)}var sn=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,e){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=e,n&&e.length>0&&on(e[0]))throw new Z(4003,!1);let r=e.find(gi);if(r&&r!==Dc(e))throw new Z(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Gc(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new sn(!0,0,i);let n=0,t=!1,e=i.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,d])=>{a[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new sn(t,n,e)}var Be=class{segmentGroup;processChildren;index;constructor(n,t,e){this.segmentGroup=n,this.processChildren=t,this.index=e}};function Xc(i,n,t){if(i.isAbsolute)return new Be(n,!0,0);if(!t)return new Be(n,!1,NaN);if(t.parent===null)return new Be(t,!0,0);let e=on(i.commands[0])?0:1,r=t.segments.length-1+e;return Kc(t,r,i.numberOfDoubleDots)}function Kc(i,n,t){let e=i,r=n,o=t;for(;o>r;){if(o-=r,e=e.parent,!e)throw new Z(4005,!1);r=e.segments.length}return new Be(e,!1,r-o)}function Zc(i){return gi(i[0])?i[0].outlets:{[g]:i}}function Ns(i,n,t){if(i??=new C([],{}),i.segments.length===0&&i.hasChildren())return mi(i,n,t);let e=Qc(i,n,t),r=t.slice(e.commandIndex);if(e.match&&e.pathIndex<i.segments.length){let o=new C(i.segments.slice(0,e.pathIndex),{});return o.children[g]=new C(i.segments.slice(e.pathIndex),i.children),mi(o,0,r)}else return e.match&&r.length===0?new C(i.segments,{}):e.match&&!i.hasChildren()?xr(i,n,t):e.match?mi(i,0,r):xr(i,n,t)}function mi(i,n,t){if(t.length===0)return new C(i.segments,{});{let e=Zc(t),r={};if(Object.keys(e).some(o=>o!==g)&&i.children[g]&&i.numberOfChildren===1&&i.children[g].segments.length===0){let o=mi(i.children[g],n,t);return new C(i.segments,o.children)}return Object.entries(e).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=Ns(i.children[o],n,s))}),Object.entries(i.children).forEach(([o,s])=>{e[o]===void 0&&(r[o]=s)}),new C(i.segments,r)}}function Qc(i,n,t){let e=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(e>=t.length)return o;let s=i.segments[r],a=t[e];if(gi(a))break;let l=`${a}`,d=e<t.length-1?t[e+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!_s(l,d,s))return o;e+=2}else{if(!_s(l,{},s))return o;e++}r++}return{match:!0,pathIndex:r,commandIndex:e}}function xr(i,n,t){let e=i.segments.slice(0,n),r=0;for(;r<t.length;){let o=t[r];if(gi(o)){let l=Jc(o.outlets);return new C(e,l)}if(r===0&&on(t[0])){let l=i.segments[n];e.push(new se(l.path,gs(t[0]))),r++;continue}let s=gi(o)?o.outlets[g]:`${o}`,a=r<t.length-1?t[r+1]:null;s&&a&&on(a)?(e.push(new se(s,gs(a))),r+=2):(e.push(new se(s,{})),r++)}return new C(e,{})}function Jc(i){let n={};return Object.entries(i).forEach(([t,e])=>{typeof e=="string"&&(e=[e]),e!==null&&(n[t]=xr(new C([],{}),0,e))}),n}function gs(i){let n={};return Object.entries(i).forEach(([t,e])=>n[t]=`${e}`),n}function _s(i,n,t){return i==t.path&&zt(n,t.parameters)}var je="imperative",Y=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(Y||{}),bt=class{id;url;constructor(n,t){this.id=n,this.url=t}},ce=class extends bt{type=Y.NavigationStart;navigationTrigger;restoredState;constructor(n,t,e="imperative",r=null){super(n,t),this.navigationTrigger=e,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},yt=class extends bt{urlAfterRedirects;type=Y.NavigationEnd;constructor(n,t,e){super(n,t),this.urlAfterRedirects=e}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},rt=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(rt||{}),ze=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(ze||{}),It=class extends bt{reason;code;type=Y.NavigationCancel;constructor(n,t,e,r){super(n,t),this.reason=e,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Ls(i){return i instanceof It&&(i.code===rt.Redirect||i.code===rt.SupersededByNewNavigation)}var Vt=class extends bt{reason;code;type=Y.NavigationSkipped;constructor(n,t,e,r){super(n,t),this.reason=e,this.code=r}},ve=class extends bt{error;target;type=Y.NavigationError;constructor(n,t,e,r){super(n,t),this.error=e,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_i=class extends bt{urlAfterRedirects;state;type=Y.RoutesRecognized;constructor(n,t,e,r){super(n,t),this.urlAfterRedirects=e,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},an=class extends bt{urlAfterRedirects;state;type=Y.GuardsCheckStart;constructor(n,t,e,r){super(n,t),this.urlAfterRedirects=e,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cn=class extends bt{urlAfterRedirects;state;shouldActivate;type=Y.GuardsCheckEnd;constructor(n,t,e,r,o){super(n,t),this.urlAfterRedirects=e,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ln=class extends bt{urlAfterRedirects;state;type=Y.ResolveStart;constructor(n,t,e,r){super(n,t),this.urlAfterRedirects=e,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dn=class extends bt{urlAfterRedirects;state;type=Y.ResolveEnd;constructor(n,t,e,r){super(n,t),this.urlAfterRedirects=e,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hn=class{route;type=Y.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},un=class{route;type=Y.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},mn=class{snapshot;type=Y.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pn=class{snapshot;type=Y.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},fn=class{snapshot;type=Y.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gn=class{snapshot;type=Y.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ve=class{routerEvent;position;anchor;scrollBehavior;type=Y.Scroll;constructor(n,t,e,r){this.routerEvent=n,this.position=t,this.anchor=e,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},He=class{},vi=class{},We=class{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function tl(i){return!(i instanceof He)&&!(i instanceof We)&&!(i instanceof vi)}var _n=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ye(this.rootInjector)}},ye=(()=>{class i{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,e){let r=this.getOrCreateContext(t);r.outlet=e,this.contexts.set(t,r)}onChildOutletDestroyed(t){let e=this.getContext(t);e&&(e.outlet=null,e.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new _n(this.rootInjector),this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(e){return new(e||i)(ft(st))};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),vn=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=kr(n,this._root);return t?t.children.map(e=>e.value):[]}firstChild(n){let t=kr(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=Sr(n,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return Sr(n,this._root).map(t=>t.value)}};function kr(i,n){if(i===n.value)return n;for(let t of n.children){let e=kr(i,t);if(e)return e}return null}function Sr(i,n){if(i===n.value)return[n];for(let t of n.children){let e=Sr(i,t);if(e.length)return e.unshift(n),e}return[]}var vt=class{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function Fe(i){let n={};return i&&i.children.forEach(t=>n[t.value.outlet]=t),n}var bi=class extends vn{snapshot;constructor(n,t){super(n),this.snapshot=t,Lr(this,n)}toString(){return this.snapshot.toString()}};function Fs(i,n){let t=el(i,n),e=new lt([new se("",{})]),r=new lt({}),o=new lt({}),s=new lt({}),a=new lt(""),l=new Ht(e,r,s,a,o,g,i,t.root);return l.snapshot=t.root,new bi(new vt(l,[]),t)}function el(i,n){let t={},e={},r={},s=new $e([],t,r,"",e,g,i,null,{},n);return new yi("",new vt(s,[]))}var Ht=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,t,e,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=e,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(S(d=>d[xi]))??p(void 0),this.url=n,this.params=t,this.queryParams=e,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(S(n=>_e(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(S(n=>_e(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Nr(i,n,t="emptyOnly"){let e,{routeConfig:r}=i;return n!==null&&(t==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?e={params:m(m({},n.params),i.params),data:m(m({},n.data),i.data),resolve:m(m(m(m({},i.data),n.data),r?.data),i._resolvedData)}:e={params:m({},i.params),data:m({},i.data),resolve:m(m({},i.data),i._resolvedData??{})},r&&js(r)&&(e.resolve[xi]=r.title),e}var $e=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[xi]}constructor(n,t,e,r,o,s,a,l,d,h){this.url=n,this.params=t,this.queryParams=e,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=_e(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=_e(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(e=>e.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},yi=class extends vn{url;constructor(n,t){super(t),this.url=n,Lr(this,t)}toString(){return Bs(this._root)}};function Lr(i,n){n.value._routerState=i,n.children.forEach(t=>Lr(i,t))}function Bs(i){let n=i.children.length>0?` { ${i.children.map(Bs).join(", ")} } `:"";return`${i.value}${n}`}function _r(i){if(i.snapshot){let n=i.snapshot,t=i._futureSnapshot;i.snapshot=t,zt(n.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),zt(n.params,t.params)||i.paramsSubject.next(t.params),Ic(n.url,t.url)||i.urlSubject.next(t.url),zt(n.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Rr(i,n){let t=zt(i.params,n.params)&&Pc(i.url,n.url),e=!i.parent!=!n.parent;return t&&!e&&(!i.parent||Rr(i.parent,n.parent))}function js(i){return typeof i.title=="string"||i.title===null}var Us=new b(""),ki=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=g;activateEvents=new B;deactivateEvents=new B;attachEvents=new B;detachEvents=new B;routerOutletData=ns();parentContexts=c(ye);location=c(pe);changeDetector=c(mt);inputBinder=c(Si,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:e,previousValue:r}=t.name;if(e)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Z(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Z(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Z(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new Z(4013,!1);this._activatedRoute=t;let r=this.location,s=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Mr(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:e}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[$t]})}return i})(),Mr=class{route;childContexts;parent;outletData;constructor(n,t,e,r){this.route=n,this.childContexts=t,this.parent=e,this.outletData=r}get(n,t){return n===Ht?this.route:n===ye?this.childContexts:n===Us?this.outletData:this.parent.get(n,t)}},Si=new b(""),Fr=(()=>{class i{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:e}=t,r=er([e.queryParams,e.params,e.data]).pipe(ot(([o,s,a],l)=>(a=m(m(m({},o),s),a),l===0?p(a):Promise.resolve(a)))).subscribe(o=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==e||e.component===null){this.unsubscribeFromRouteData(t);return}let s=rs(e.component);if(!s){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of s.inputs)t.activatedComponentRef.setInput(a,o[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})(),Br=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(e,r){e&1&&ut(0,"router-outlet")},dependencies:[ki],encapsulation:2})}return i})();function jr(i){let n=i.children&&i.children.map(jr),t=n?J(m({},i),{children:n}):m({},i);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==g&&(t.component=Br),t}function il(i,n,t){let e=wi(i,n._root,t?t._root:void 0);return new bi(e,n)}function wi(i,n,t){if(t&&i.shouldReuseRoute(n.value,t.value.snapshot)){let e=t.value;e._futureSnapshot=n.value;let r=nl(i,n,t);return new vt(e,r)}else{if(i.shouldAttach(n.value)){let o=i.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>wi(i,a)),s}}let e=rl(n.value),r=n.children.map(o=>wi(i,o));return new vt(e,r)}}function nl(i,n,t){return n.children.map(e=>{for(let r of t.children)if(i.shouldReuseRoute(e.value,r.value.snapshot))return wi(i,e,r);return wi(i,e)})}function rl(i){return new Ht(new lt(i.url),new lt(i.params),new lt(i.queryParams),new lt(i.fragment),new lt(i.data),i.outlet,i.component,i)}var qe=class{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},zs="ngNavigationCancelingError";function bn(i,n){let{redirectTo:t,navigationBehaviorOptions:e}=ae(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Vs(!1,rt.Redirect);return r.url=t,r.navigationBehaviorOptions=e,r}function Vs(i,n){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[zs]=!0,t.cancellationCode=n,t}function ol(i){return Hs(i)&&ae(i.url)}function Hs(i){return!!i&&i[zs]}var Er=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,e,r,o){this.routeReuseStrategy=n,this.futureState=t,this.currState=e,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let t=this.futureState._root,e=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,e,n),_r(this.futureState.root),this.activateChildRoutes(t,e,n)}deactivateChildRoutes(n,t,e){let r=Fe(t);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],e),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,e)})}deactivateRoutes(n,t,e){let r=n.value,o=t?t.value:null;if(r===o)if(r.component){let s=e.getContext(r.outlet);s&&this.deactivateChildRoutes(n,t,s.children)}else this.deactivateChildRoutes(n,t,e);else o&&this.deactivateRouteAndItsChildren(t,e)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let e=t.getContext(n.value.outlet),r=e&&n.value.component?e.children:t,o=Fe(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(e&&e.outlet){let s=e.outlet.detach(),a=e.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,t){let e=t.getContext(n.value.outlet),r=e&&n.value.component?e.children:t,o=Fe(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);e&&(e.outlet&&(e.outlet.deactivate(),e.children.onOutletDeactivated()),e.attachRef=null,e.route=null)}activateChildRoutes(n,t,e){let r=Fe(t);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],e),this.forwardEvent(new gn(o.value.snapshot))}),n.children.length&&this.forwardEvent(new pn(n.value.snapshot))}activateRoutes(n,t,e){let r=n.value,o=t?t.value:null;if(_r(r),r===o)if(r.component){let s=e.getOrCreateContext(r.outlet);this.activateChildRoutes(n,t,s.children)}else this.activateChildRoutes(n,t,e);else if(r.component){let s=e.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),_r(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,e)}},yn=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ue=class{component;route;constructor(n,t){this.component=n,this.route=t}};function sl(i,n,t){let e=i._root,r=n?n._root:null;return ui(e,r,t,[e.value])}function al(i){let n=i.routeConfig?i.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:i,guards:n}}function Ge(i,n){let t=Symbol(),e=n.get(i,t);return e===t?typeof i=="function"&&!No(i)?i:n.get(i):e}function ui(i,n,t,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Fe(n);return i.children.forEach(s=>{cl(s,o[s.value.outlet],t,e.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>pi(a,t.getContext(s),r)),r}function cl(i,n,t,e,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=i.value,s=n?n.value:null,a=t?t.getContext(i.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=ll(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new yn(e)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ui(i,n,a?a.children:null,e,r):ui(i,n,t,e,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ue(a.outlet.component,s))}else s&&pi(n,a,r),r.canActivateChecks.push(new yn(e)),o.component?ui(i,null,a?a.children:null,e,r):ui(i,null,t,e,r);return r}function ll(i,n,t){if(typeof t=="function")return gt(n._environmentInjector,()=>t(i,n));switch(t){case"pathParamsChange":return!ge(i.url,n.url);case"pathParamsOrQueryParamsChange":return!ge(i.url,n.url)||!zt(i.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Rr(i,n)||!zt(i.queryParams,n.queryParams);default:return!Rr(i,n)}}function pi(i,n,t){let e=Fe(i),r=i.value;Object.entries(e).forEach(([o,s])=>{r.component?n?pi(s,n.children.getContext(o),t):pi(s,null,t):pi(s,n,t)}),r.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new Ue(n.outlet.component,r)):t.canDeactivateChecks.push(new Ue(null,r)):t.canDeactivateChecks.push(new Ue(null,r))}function Ri(i){return typeof i=="function"}function dl(i){return typeof i=="boolean"}function hl(i){return i&&Ri(i.canLoad)}function ul(i){return i&&Ri(i.canActivate)}function ml(i){return i&&Ri(i.canActivateChild)}function pl(i){return i&&Ri(i.canDeactivate)}function fl(i){return i&&Ri(i.canMatch)}function Ws(i){return i instanceof Io||i?.name==="EmptyError"}var Ji=Symbol("INITIAL_VALUE");function Ye(){return ot(i=>er(i.map(n=>n.pipe(xt(1),Bt(Ji)))).pipe(S(n=>{for(let t of n)if(t!==!0){if(t===Ji)return Ji;if(t===!1||gl(t))return t}return!0}),F(n=>n!==Ji),xt(1)))}function gl(i){return ae(i)||i instanceof qe}function $s(i){return i.aborted?p(void 0).pipe(xt(1)):new Oe(n=>{let t=()=>{n.next(),n.complete()};return i.addEventListener("abort",t),()=>i.removeEventListener("abort",t)})}function qs(i){return q($s(i))}function _l(i){return Ft(n=>{let{targetSnapshot:t,currentSnapshot:e,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?p(J(m({},n),{guardsResult:!0})):vl(o,t,e).pipe(Ft(s=>s&&dl(s)?bl(t,r,i):p(s)),S(s=>J(m({},n),{guardsResult:s})))})}function vl(i,n,t){return et(i).pipe(Ft(e=>kl(e.component,e.route,t,n)),te(e=>e!==!0,!0))}function bl(i,n,t){return et(n).pipe(ai(e=>Do(wl(e.route.parent,t),yl(e.route,t),xl(i,e.path),Cl(i,e.route))),te(e=>e!==!0,!0))}function yl(i,n){return i!==null&&n&&n(new fn(i)),p(!0)}function wl(i,n){return i!==null&&n&&n(new mn(i)),p(!0)}function Cl(i,n){let t=n.routeConfig?n.routeConfig.canActivate:null;if(!t||t.length===0)return p(!0);let e=t.map(r=>ji(()=>{let o=n._environmentInjector,s=Ge(r,o),a=ul(s)?s.canActivate(n,i):gt(o,()=>s(n,i));return be(a).pipe(te())}));return p(e).pipe(Ye())}function xl(i,n){let t=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>al(o)).filter(o=>o!==null).map(o=>ji(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,d=Ge(a,l),h=ml(d)?d.canActivateChild(t,i):gt(l,()=>d(t,i));return be(h).pipe(te())});return p(s).pipe(Ye())}));return p(r).pipe(Ye())}function kl(i,n,t,e){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return p(!0);let o=r.map(s=>{let a=n._environmentInjector,l=Ge(s,a),d=pl(l)?l.canDeactivate(i,n,t,e):gt(a,()=>l(i,n,t,e));return be(d).pipe(te())});return p(o).pipe(Ye())}function Sl(i,n,t,e,r){let o=n.canLoad;if(o===void 0||o.length===0)return p(!0);let s=o.map(a=>{let l=Ge(a,i),d=hl(l)?l.canLoad(n,t):gt(i,()=>l(n,t)),h=be(d);return r?h.pipe(qs(r)):h});return p(s).pipe(Ye(),Ys(e))}function Ys(i){return Eo(K(n=>{if(typeof n!="boolean")throw bn(i,n)}),S(n=>n===!0))}function Rl(i,n,t,e,r,o){let s=n.canMatch;if(!s||s.length===0)return p(!0);let a=s.map(l=>{let d=Ge(l,i),h=fl(d)?d.canMatch(n,t,r):gt(i,()=>d(n,t,r));return be(h).pipe(qs(o))});return p(a).pipe(Ye(),Ys(e))}var Yt=class i extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,i.prototype)}},Ci=class i extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,i.prototype)}};function Ml(i){throw new Z(4e3,!1)}function El(i){throw Vs(!1,rt.GuardRejected)}var Ir=class{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}async lineralizeSegments(n,t){let e=[],r=t.root;for(;;){if(e=e.concat(r.segments),r.numberOfChildren===0)return e;if(r.numberOfChildren>1||!r.children[g])throw Ml(`${n.redirectTo}`);r=r.children[g]}}async applyRedirectCommands(n,t,e,r,o){let s=await Il(t,r,o);if(s instanceof ct)throw new Ci(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,e);if(s[0]==="/")throw new Ci(a);return a}applyRedirectCreateUrlTree(n,t,e,r){let o=this.createSegmentGroup(n,t.root,e,r);return new ct(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let e={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);e[r]=t[a]}else e[r]=o}),e}createSegmentGroup(n,t,e,r){let o=this.createSegments(n,t.segments,e,r),s={};return Object.entries(t.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,e,r)}),new C(o,s)}createSegments(n,t,e,r){return t.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,e))}findPosParam(n,t,e){let r=e[t.path.substring(1)];if(!r)throw new Z(4001,!1);return r}findOrReturn(n,t){let e=0;for(let r of t){if(r.path===n.path)return t.splice(e),r;e++}return n}};function Il(i,n,t){if(typeof i=="string")return Promise.resolve(i);let e=i;return rn(be(gt(t,()=>e(n))))}function Dl(i,n){return i.providers&&!i._injector&&(i._injector=qi(i.providers,n,`Route: ${i.path}`)),i._injector??n}function Pt(i){return i.outlet||g}function Ol(i,n){let t=i.filter(e=>Pt(e)===n);return t.push(...i.filter(e=>Pt(e)!==n)),t}var Dr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Gs(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function Al(i,n,t,e,r,o,s){let a=Xs(i,n,t);if(!a.matched)return p(a);let l=Gs(o(a));return e=Dl(n,e),Rl(e,n,t,r,l,s).pipe(S(d=>d===!0?a:m({},Dr)))}function Xs(i,n,t){if(n.path==="")return n.pathMatch==="full"&&(i.hasChildren()||t.length>0)?m({},Dr):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(n.matcher||ys)(t,i,n);if(!r)return m({},Dr);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?m(m({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function vs(i,n,t,e,r){return t.length>0&&Nl(i,t,e,r)?{segmentGroup:new C(n,Pl(e,new C(t,i.children))),slicedSegments:[]}:t.length===0&&Ll(i,t,e)?{segmentGroup:new C(i.segments,Tl(i,t,e,i.children)),slicedSegments:t}:{segmentGroup:new C(i.segments,i.children),slicedSegments:t}}function Tl(i,n,t,e){let r={};for(let o of t)if(Cn(i,n,o)&&!e[Pt(o)]){let s=new C([],{});r[Pt(o)]=s}return m(m({},e),r)}function Pl(i,n){let t={};t[g]=n;for(let e of i)if(e.path===""&&Pt(e)!==g){let r=new C([],{});t[Pt(e)]=r}return t}function Nl(i,n,t,e){return t.some(r=>!Cn(i,n,r)||!(Pt(r)!==g)?!1:!(e!==void 0&&Pt(r)===e))}function Ll(i,n,t){return t.some(e=>Cn(i,n,e))}function Cn(i,n,t){return(i.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Fl(i,n,t){return n.length===0&&!i.children[t]}var Or=class{};async function Bl(i,n,t,e,r,o,s="emptyOnly",a){return new Ar(i,n,t,e,r,s,o,a).recognize()}var jl=31,Ar=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,e,r,o,s,a,l){this.injector=n,this.configLoader=t,this.rootComponentType=e,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Ir(this.urlSerializer,this.urlTree)}noMatchError(n){return new Z(4002,`'${n.segmentGroup}'`)}async recognize(){let n=vs(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:e}=await this.match(n),r=new vt(e,t),o=new yi("",r),s=Os(e,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(n){let t=new $e([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),g,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,g,t),rootSnapshot:t}}catch(e){if(e instanceof Ci)return this.urlTree=e.urlTree,this.match(e.urlTree.root);throw e instanceof Yt?this.noMatchError(e):e}}async processSegmentGroup(n,t,e,r,o){if(e.segments.length===0&&e.hasChildren())return this.processChildren(n,t,e,o);let s=await this.processSegment(n,t,e,e.segments,r,!0,o);return s instanceof vt?[s]:[]}async processChildren(n,t,e,r){let o=[];for(let l of Object.keys(e.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let d=e.children[l],h=Ol(t,l),u=await this.processSegmentGroup(n,h,d,l,r);s.push(...u)}let a=Ks(s);return Ul(a),a}async processSegment(n,t,e,r,o,s,a){for(let l of t)try{return await this.processSegmentAgainstRoute(l._injector??n,t,l,e,r,o,s,a)}catch(d){if(d instanceof Yt||Ws(d))continue;throw d}if(Fl(e,r,o))return new Or;throw new Yt(e)}async processSegmentAgainstRoute(n,t,e,r,o,s,a,l){if(Pt(e)!==s&&(s===g||!Cn(r,o,e)))throw new Yt(r);if(e.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,e,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,t,e,o,s,l);throw new Yt(r)}async expandSegmentAgainstRouteUsingRedirect(n,t,e,r,o,s,a){let{matched:l,parameters:d,consumedSegments:h,positionalParamSegments:u,remainingSegments:_}=Xs(t,r,o);if(!l)throw new Yt(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>jl&&(this.allowRedirects=!1));let D=this.createSnapshot(n,r,o,d,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let I=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,u,Gs(D),n),O=await this.applyRedirects.lineralizeSegments(r,I);return this.processSegment(n,e,t,O.concat(_),s,!1,a)}createSnapshot(n,t,e,r,o){let s=new $e(e,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Vl(t),Pt(t),t.component??t._loadedComponent??null,t,Hl(t),n),a=Nr(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(n,t,e,r,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=ue=>this.createSnapshot(n,e,ue.consumedSegments,ue.parameters,s),l=await rn(Al(t,e,r,n,this.urlSerializer,a,this.abortSignal));if(e.path==="**"&&(t.children={}),!l?.matched)throw new Yt(t);n=e._injector??n;let{routes:d}=await this.getChildConfig(n,e,r),h=e._loadedInjector??n,{parameters:u,consumedSegments:_,remainingSegments:D}=l,I=this.createSnapshot(n,e,_,u,s),{segmentGroup:O,slicedSegments:pt}=vs(t,_,D,d,o);if(pt.length===0&&O.hasChildren()){let ue=await this.processChildren(h,d,O,I);return new vt(I,ue)}if(d.length===0&&pt.length===0)return new vt(I,[]);let De=Pt(e)===o,Wt=await this.processSegment(h,d,O,pt,De?g:o,!0,I);return new vt(I,Wt instanceof vt?[Wt]:[])}async getChildConfig(n,t,e){if(t.children)return{routes:t.children,injector:n};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(n).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await rn(Sl(n,t,e,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw El(t)}return{routes:[],injector:n}}};function Ul(i){i.sort((n,t)=>n.value.outlet===g?-1:t.value.outlet===g?1:n.value.outlet.localeCompare(t.value.outlet))}function zl(i){let n=i.value.routeConfig;return n&&n.path===""}function Ks(i){let n=[],t=new Set;for(let e of i){if(!zl(e)){n.push(e);continue}let r=n.find(o=>e.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...e.children),t.add(r)):n.push(e)}for(let e of t){let r=Ks(e.children);n.push(new vt(e.value,r))}return n.filter(e=>!t.has(e))}function Vl(i){return i.data||{}}function Hl(i){return i.resolve||{}}function Wl(i,n,t,e,r,o,s){return Ft(async a=>{let{state:l,tree:d}=await Bl(i,n,t,e,a.extractedUrl,r,o,s);return J(m({},a),{targetSnapshot:l,urlAfterRedirects:d})})}function $l(i){return Ft(n=>{let{targetSnapshot:t,guards:{canActivateChecks:e}}=n;if(!e.length)return p(n);let r=new Set(e.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of Zs(a))o.add(l);let s=0;return et(o).pipe(ai(a=>r.has(a)?ql(a,t,i):(a.data=Nr(a,a.parent,i).resolve,p(void 0))),K(()=>s++),or(1),Ft(a=>s===o.size?p(n):Ct))})}function Zs(i){let n=i.children.map(t=>Zs(t)).flat();return[i,...n]}function ql(i,n,t){let e=i.routeConfig,r=i._resolve;return e?.title!==void 0&&!js(e)&&(r[xi]=e.title),ji(()=>(i.data=Nr(i,i.parent,t).resolve,Yl(r,i,n).pipe(S(o=>(i._resolvedData=o,i.data=m(m({},i.data),o),null)))))}function Yl(i,n,t){let e=br(i);if(e.length===0)return p({});let r={};return et(e).pipe(Ft(o=>Gl(i[o],n,t).pipe(te(),K(s=>{if(s instanceof qe)throw bn(new Gt,s);r[o]=s}))),or(1),S(()=>r),Ae(o=>Ws(o)?Ct:Fi(o)))}function Gl(i,n,t){let e=n._environmentInjector,r=Ge(i,e),o=r.resolve?r.resolve(n,t):gt(e,()=>r(n,t));return be(o)}function bs(i){return ot(n=>{let t=i(n);return t?et(t).pipe(S(()=>n)):p(n)})}var Ur=(()=>{class i{buildTitle(t){let e,r=t.root;for(;r!==void 0;)e=this.getResolvedTitleForRoute(r)??e,r=r.children.find(o=>o.outlet===g);return e}getResolvedTitleForRoute(t){return t.data[xi]}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:()=>c(Qs),providedIn:"root"})}return i})(),Qs=(()=>{class i extends Ur{title;constructor(t){super(),this.title=t}updateTitle(t){let e=this.buildTitle(t);e!==void 0&&this.title.setTitle(e)}static \u0275fac=function(e){return new(e||i)(ft(us))};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),de=new b("",{factory:()=>({})}),we=new b(""),xn=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c(es);async loadComponent(t,e){if(this.componentLoaders.get(e))return this.componentLoaders.get(e);if(e._loadedComponent)return Promise.resolve(e._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(e);let r=(async()=>{try{let o=await Cs(gt(t,()=>e.loadComponent())),s=await ea(ta(o));return this.onLoadEndListener&&this.onLoadEndListener(e),e._loadedComponent=s,s}finally{this.componentLoaders.delete(e)}})();return this.componentLoaders.set(e,r),r}loadChildren(t,e){if(this.childrenLoaders.get(e))return this.childrenLoaders.get(e);if(e._loadedRoutes)return Promise.resolve({routes:e._loadedRoutes,injector:e._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(e);let r=(async()=>{try{let o=await Js(e,this.compiler,t,this.onLoadEndListener);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(e)}})();return this.childrenLoaders.set(e,r),r}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();async function Js(i,n,t,e){let r=await Cs(gt(t,()=>i.loadChildren())),o=await ea(ta(r)),s;o instanceof Yo||Array.isArray(o)?s=o:s=await n.compileModuleAsync(o),e&&e(i);let a,l,d=!1,h;return Array.isArray(s)?(l=s,d=!0):(a=s.create(t).injector,h=s,l=a.get(we,[],{optional:!0,self:!0}).flat()),{routes:l.map(jr),injector:a,factory:h}}function Xl(i){return i&&typeof i=="object"&&"default"in i}function ta(i){return Xl(i)?i.default:i}async function ea(i){return i}var kn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:()=>c(Kl),providedIn:"root"})}return i})(),Kl=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),zr=new b(""),Vr=new b("");function ia(i,n,t){let e=i.get(Vr),r=i.get(A);if(!r.startViewTransition||e.skipNextTransition)return e.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,s=new Promise(d=>{o=d}),a=r.startViewTransition(()=>(o(),Zl(i)));a.updateCallbackDone.catch(d=>{}),a.ready.catch(d=>{}),a.finished.catch(d=>{});let{onViewTransitionCreated:l}=e;return l&&gt(i,()=>l({transition:a,from:n,to:t})),s}function Zl(i){return new Promise(n=>{dt({read:()=>setTimeout(n)},{injector:i})})}var Ql=()=>{},Hr=new b(""),Sn=(()=>{class i{currentNavigation=y(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=y(null);events=new v;transitionAbortWithErrorSubject=new v;configLoader=c(xn);environmentInjector=c(st);destroyRef=c(zi);urlSerializer=c(le);rootContexts=c(ye);location=c(oe);inputBindingEnabled=c(Si,{optional:!0})!==null;titleStrategy=c(Ur);options=c(de,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(kn);createViewTransition=c(zr,{optional:!0});navigationErrorHandler=c(Hr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>p(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new hn(r)),e=r=>this.events.next(new un(r));this.configLoader.onLoadEndListener=e,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let e=++this.navigationId;H(()=>{this.transitions?.next(J(m({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:e,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new lt(null),this.transitions.pipe(F(e=>e!==null),ot(e=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===e.id;return p(e).pipe(ot(a=>{if(this.navigationId>e.id)return this.cancelNavigationTransition(e,"",rt.SupersededByNewNavigation),Ct;this.currentTransition=e;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?J(m({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let d=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!d&&h!=="reload")return this.events.next(new Vt(a.id,this.urlSerializer.serialize(a.rawUrl),"",ze.IgnoredSameUrlNavigation)),a.resolve(!1),Ct;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return p(a).pipe(ot(u=>(this.events.next(new ce(u.id,this.urlSerializer.serialize(u.extractedUrl),u.source,u.restoredState)),u.id!==this.navigationId?Ct:Promise.resolve(u))),Wl(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),K(u=>{e.targetSnapshot=u.targetSnapshot,e.urlAfterRedirects=u.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=u.urlAfterRedirects,_)),this.events.next(new vi)}),ot(u=>et(e.routesRecognizeHandler.deferredHandle??p(void 0)).pipe(S(()=>u))),K(()=>{let u=new _i(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(u)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:u,extractedUrl:_,source:D,restoredState:I,extras:O}=a,pt=new ce(u,this.urlSerializer.serialize(_),D,I);this.events.next(pt);let De=Fs(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=e=J(m({},a),{targetSnapshot:De,urlAfterRedirects:_,extras:J(m({},O),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Wt=>(Wt.finalUrl=_,Wt)),p(e)}else return this.events.next(new Vt(a.id,this.urlSerializer.serialize(a.extractedUrl),"",ze.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Ct}),S(a=>{let l=new an(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=e=J(m({},a),{guards:sl(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),e}),_l(a=>this.events.next(a)),ot(a=>{if(e.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw bn(this.urlSerializer,a.guardsResult);let l=new cn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return Ct;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",rt.GuardRejected),Ct;if(a.guards.canActivateChecks.length===0)return p(a);let d=new ln(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(d),!s())return Ct;let h=!1;return p(a).pipe($l(this.paramsInheritanceStrategy),K({next:()=>{h=!0;let u=new dn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(u)},complete:()=>{h||this.cancelNavigationTransition(a,"",rt.NoDataFromResolver)}}))}),bs(a=>{let l=h=>{let u=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let _=h._environmentInjector;u.push(this.configLoader.loadComponent(_,h.routeConfig).then(D=>{h.component=D}))}for(let _ of h.children)u.push(...l(_));return u},d=l(a.targetSnapshot.root);return d.length===0?p(a):et(Promise.all(d).then(()=>a))}),bs(()=>this.afterPreactivation()),ot(()=>{let{currentSnapshot:a,targetSnapshot:l}=e,d=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return d?et(d).pipe(S(()=>e)):p(e)}),xt(1),ot(a=>{let l=il(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=e=a=J(m({},a),{targetRouterState:l}),this.currentNavigation.update(h=>(h.targetRouterState=l,h)),this.events.next(new He);let d=e.beforeActivateHandler.deferredHandle;return d?et(d.then(()=>a)):p(a)}),K(a=>{new Er(t.routeReuseStrategy,e.targetRouterState,e.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=Ql,l)),this.lastSuccessfulNavigation.set(H(this.currentNavigation)),this.events.next(new yt(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),q($s(o.signal).pipe(F(()=>!r&&!e.targetRouterState),K(()=>{this.cancelNavigationTransition(e,o.signal.reason+"",rt.Aborted)}))),K({complete:()=>{r=!0}}),q(this.transitionAbortWithErrorSubject.pipe(K(a=>{throw a}))),Ui(()=>{o.abort(),r||this.cancelNavigationTransition(e,"",rt.SupersededByNewNavigation),this.currentTransition?.id===e.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ae(a=>{if(r=!0,this.destroyed)return e.resolve(!1),Ct;if(Hs(a))this.events.next(new It(e.id,this.urlSerializer.serialize(e.extractedUrl),a.message,a.cancellationCode)),ol(a)?this.events.next(new We(a.url,a.navigationBehaviorOptions)):e.resolve(!1);else{let l=new ve(e.id,this.urlSerializer.serialize(e.extractedUrl),a,e.targetSnapshot??void 0);try{let d=gt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof qe){let{message:h,cancellationCode:u}=bn(this.urlSerializer,d);this.events.next(new It(e.id,this.urlSerializer.serialize(e.extractedUrl),h,u)),this.events.next(new We(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(d){this.options.resolveNavigationPromiseOnError?e.resolve(!1):e.reject(d)}}return Ct}))}))}cancelNavigationTransition(t,e,r){let o=new It(t.id,this.urlSerializer.serialize(t.extractedUrl),e,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),e=H(this.currentNavigation),r=e?.targetBrowserUrl??e?.extractedUrl;return t.toString()!==r?.toString()&&!e?.extras.skipLocationChange}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Jl(i){return i!==je}var na=new b("");var ra=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:()=>c(td),providedIn:"root"})}return i})(),wn=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}shouldDestroyInjector(n){return!0}},td=(()=>{class i extends wn{static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Rn=(()=>{class i{urlSerializer=c(le);options=c(de,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(oe);urlHandlingStrategy=c(kn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ct;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:e,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,e):e,s=r??o;return s instanceof ct?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:t,finalUrl:e,initialUrl:r}){e&&t?(this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(e,r),this.routerState=t):this.rawUrlTree=r}routerState=Fs(null,c(st));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:()=>c(ed),providedIn:"root"})}return i})(),ed=(()=>{class i extends Rn{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(e=>{e.type==="popstate"&&setTimeout(()=>{t(e.url,e.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,e){t instanceof ce?this.updateStateMemento():t instanceof Vt?this.commitTransition(e):t instanceof _i?this.urlUpdateStrategy==="eager"&&(e.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof He?(this.commitTransition(e),this.urlUpdateStrategy==="deferred"&&!e.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(e),e)):t instanceof It&&!Ls(t)?this.restoreHistory(e):t instanceof ve?this.restoreHistory(e,!0):t instanceof yt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:e,id:r}){let{replaceUrl:o,state:s}=e;if(this.location.isCurrentPathEqualTo(t)||o){let a=this.browserPageId,l=m(m({},s),this.generateNgRouterState(r,a));this.location.replaceState(t,"",l)}else{let a=m(m({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,e=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(e&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,e){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:e}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Mn(i,n){i.events.pipe(F(t=>t instanceof yt||t instanceof It||t instanceof ve||t instanceof Vt),S(t=>t instanceof yt||t instanceof Vt?0:(t instanceof It?t.code===rt.Redirect||t.code===rt.SupersededByNewNavigation:!1)?2:1),F(t=>t!==2),xt(1)).subscribe(()=>{n()})}var Nt=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(Xo);stateManager=c(Rn);options=c(de,{optional:!0})||{};pendingTasks=c(Fo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Sn);urlSerializer=c(le);location=c(oe);urlHandlingStrategy=c(kn);injector=c(st);_events=new v;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(ra);injectorCleanup=c(na,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(we,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Si,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new tt;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(e=>{try{let r=this.navigationTransitions.currentTransition,o=H(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(e,o),e instanceof It&&e.code!==rt.Redirect&&e.code!==rt.SupersededByNewNavigation)this.navigated=!0;else if(e instanceof yt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(e instanceof We){let s=e.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(e.url,r.currentRawUrl),l=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Jl(r.source)},s);this.scheduleNavigation(a,je,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}tl(e)&&this._events.next(e)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),je,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,e,r,o)=>{this.navigateToSyncWithBrowser(t,r,e,o)})}navigateToSyncWithBrowser(t,e,r,o){let s=r?.navigationId?r:null;if(r){let l=m({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,e,s,o).catch(l=>{this.disposed||this.injector.get(Hi)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return H(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(jr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,e={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=e,d=l?this.currentUrlTree.fragment:s,h=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":h=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let u;try{let _=r?r.snapshot:this.routerState.snapshot.root;u=As(_)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),u=this.currentUrlTree.root}return Ts(u,t,h,d??null,this.urlSerializer)}navigateByUrl(t,e={skipLocationChange:!1}){let r=ae(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,je,null,e)}navigate(t,e={skipLocationChange:!1}){return id(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Po(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,e){let r;if(e===!0?r=m({},Tr):e===!1?r=m({},fi):r=m(m({},fi),e),ae(t))return yr(this.currentUrlTree,t,r);let o=this.parseUrl(t);return yr(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((e,[r,o])=>(o!=null&&(e[r]=o),e),{})}scheduleNavigation(t,e,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,d;s?(a=s.resolve,l=s.reject,d=s.promise):d=new Promise((u,_)=>{a=u,l=_});let h=this.pendingTasks.add();return Mn(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:e,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:a,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function id(i){for(let n=0;n<i.length;n++)if(i[n]==null)throw new Z(4008,!1)}var nd=(()=>{class i{router=c(Nt);stateManager=c(Rn);fragment=y("");queryParams=y({});path=y("");serializer=c(le);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof yt&&this.updateState()})}updateState(){let{fragment:t,root:e,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new ct(e)))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Xe=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new Ki("href"),{optional:!0});reactiveHref=is(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return H(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return H(this._target)}_target=y(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return H(this._queryParams)}_queryParams=y(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return H(this._fragment)}_fragment=y(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return H(this._queryParamsHandling)}_queryParamsHandling=y(void 0);set state(t){this._state.set(t)}get state(){return H(this._state)}_state=y(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return H(this._info)}_info=y(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return H(this._relativeTo)}_relativeTo=y(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return H(this._preserveFragment)}_preserveFragment=y(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return H(this._skipLocationChange)}_skipLocationChange=y(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return H(this._replaceUrl)}_replaceUrl=y(!1);isAnchorElement;onChanges=new v;applicationErrorHandler=c(Hi);options=c(de,{optional:!0});reactiveRouterState=c(nd);constructor(t,e,r,o,s,a){this.router=t,this.route=e,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let l=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=y(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(ae(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,e,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(t!==0||e||r||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,e){let r=this.renderer,o=this.el.nativeElement;e!==null?r.setAttribute(o,t,e):r.removeAttribute(o,t)}_urlTree=Xi(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=r=>r==="preserve"||r==="merge";(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:ae(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(t,e)=>this.computeHref(t)===this.computeHref(e)});get urlTree(){return H(this._urlTree)}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null}static \u0275fac=function(e){return new(e||i)(jt(Nt),jt(Ht),jo("tabindex"),jt(kt),jt(w),jt(di))};static \u0275dir=E({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(e,r){e&1&&_t("click",function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),e&2&&X("href",r.reactiveHref(),Wo)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Q],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Q],replaceUrl:[2,"replaceUrl","replaceUrl",Q],routerLink:"routerLink"},features:[$t]})}return i})(),$r=(()=>{class i{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new B;link=c(Xe,{optional:!0});constructor(t,e,r,o){this.router=t,this.element=e,this.renderer=r,this.cdr=o,this.routerEventsSubscription=t.events.subscribe(s=>{s instanceof yt&&this.update()})}ngAfterContentInit(){p(this.links.changes,p(null)).pipe(si()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(e=>!!e).map(e=>e.onChanges);this.linkInputChangesSubscription=et(t).pipe(si()).subscribe(e=>{this._isActive!==this.isLinkActive(this.router)(e)&&this.update()})}set routerLinkActive(t){let e=Array.isArray(t)?t:t.split(" ");this.classes=e.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(e=>{t?this.renderer.addClass(this.element.nativeElement,e):this.renderer.removeClass(this.element.nativeElement,e)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let e=rd(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?m({},Tr):m({},fi);return r=>{let o=r.urlTree;return o?H(Pr(o,t,e)):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(e){return new(e||i)(jt(Nt),jt(w),jt(kt),jt(mt))};static \u0275dir=E({type:i,selectors:[["","routerLinkActive",""]],contentQueries:function(e,r,o){if(e&1&&Ut(o,Xe,5),e&2){let s;U(s=z())&&(r.links=s)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[$t]})}return i})();function rd(i){let n=i;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Mi=class{};var oa=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(t,e,r,o){this.router=t,this.injector=e,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(F(t=>t instanceof yt),ai(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(t,e){let r=[];for(let o of e){o.providers&&!o._injector&&(o._injector=qi(o.providers,t,""));let s=o._injector??t;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return et(r).pipe(si())}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>{if(t.destroyed)return p(null);let r;e.loadChildren&&e.canLoad===void 0?r=et(this.loader.loadChildren(t,e)):r=p(null);let o=r.pipe(Ft(s=>s===null?p(void 0):(e._loadedRoutes=s.routes,e._loadedInjector=s.injector,e._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??t,s.routes))));if(e.loadComponent&&!e._loadedComponent){let s=this.loader.loadComponent(t,e);return et([o,s]).pipe(si())}else return o})}static \u0275fac=function(e){return new(e||i)(ft(Nt),ft(st),ft(Mi),ft(xn))};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),sa=new b(""),od=(()=>{class i{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=je;restoredId=0;store={};urlSerializer=c(le);zone=c(x);viewportScroller=c(mr);transitions=c(Sn);constructor(t){this.options=t,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof ce?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof yt?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof Vt&&t.code===ze.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{if(!(t instanceof Ve)||t.scrollBehavior==="manual")return;let e={behavior:"instant"};t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],e):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position,e):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(t,e){let r=H(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new Ve(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,e,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(e){$i()};static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})();function qr(i,...n){return Lo([{provide:we,multi:!0,useValue:i},[],{provide:Ht,useFactory:aa},{provide:dr,multi:!0,useFactory:ca},n.map(t=>t.\u0275providers)])}function aa(){return c(Nt).routerState.root}function Ei(i,n){return{\u0275kind:i,\u0275providers:n}}function ca(){let i=c(P);return n=>{let t=i.get(ne);if(n!==t.components[0])return;let e=i.get(Nt),r=i.get(la);i.get(Yr)===1&&e.initialNavigation(),i.get(ua,null,{optional:!0})?.setUpPreloading(),i.get(sa,null,{optional:!0})?.init(),e.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var la=new b("",{factory:()=>new v}),Yr=new b("",{factory:()=>1});function da(){let i=[{provide:Ho,useValue:!0},{provide:Yr,useValue:0},lr(()=>{let n=c(P);return n.get(os,Promise.resolve()).then(()=>new Promise(e=>{let r=n.get(Nt),o=n.get(la);Mn(r,()=>{e(!0)}),n.get(Sn).afterPreactivation=()=>(e(!0),o.closed?p(void 0):o),r.initialNavigation()}))})];return Ei(2,i)}function ha(){let i=[lr(()=>{c(Nt).setUpLocationChangeListener()}),{provide:Yr,useValue:2}];return Ei(3,i)}var ua=new b("");function ma(i){return Ei(0,[{provide:ua,useExisting:oa},{provide:Mi,useExisting:i}])}function pa(){return Ei(8,[Fr,{provide:Si,useExisting:Fr}])}function fa(i){$o("NgRouterViewTransitions");let n=[{provide:zr,useValue:ia},{provide:Vr,useValue:m({skipNextTransition:!!i?.skipInitialTransition},i)}];return Ei(9,n)}var ga=[oe,{provide:le,useClass:Gt},Nt,ye,{provide:Ht,useFactory:aa},xn,[]],Gr=(()=>{class i{constructor(){}static forRoot(t,e){return{ngModule:i,providers:[ga,[],{provide:we,multi:!0,useValue:t},[],e?.errorHandler?{provide:Hr,useValue:e.errorHandler}:[],{provide:de,useValue:e||{}},e?.useHash?ad():cd(),sd(),e?.preloadingStrategy?ma(e.preloadingStrategy).\u0275providers:[],e?.initialNavigation?ld(e):[],e?.bindToComponentInputs?pa().\u0275providers:[],e?.enableViewTransitions?fa().\u0275providers:[],dd()]}}static forChild(t){return{ngModule:i,providers:[{provide:we,multi:!0,useValue:t}]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({})}return i})();function sd(){return{provide:sa,useFactory:()=>{let i=c(mr),n=c(de);return n.scrollOffset&&i.setOffset(n.scrollOffset),new od(n)}}}function ad(){return{provide:di,useClass:as}}function cd(){return{provide:di,useClass:ss}}function ld(i){return[i.initialNavigation==="disabled"?ha().\u0275providers:[],i.initialNavigation==="enabledBlocking"?da().\u0275providers:[]]}var Wr=new b("");function dd(){return[{provide:Wr,useFactory:ca},{provide:dr,multi:!0,useExisting:Wr}]}var _a=[{path:"tacitus-card-printer",loadComponent:()=>import("./chunk-3CJWTBF6.js").then(i=>i.CardPrinterComponent)}];var va={providers:[Bo(),qr(_a)]};function Ce(i){return i.buttons===0||i.detail===0}function xe(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Xr;function ba(){if(Xr==null){let i=typeof document<"u"?document.head:null;Xr=!!(i&&(i.createShadowRoot||i.attachShadow))}return Xr}function Kr(i){if(ba()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Dt(i){return i.composedPath?i.composedPath()[0]:i.target}var Zr;try{Zr=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Zr=!1}var V=(()=>{class i{_platformId=c(zo);isBrowser=this._platformId?ls(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Zr)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ii;function ya(){if(Ii==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ii=!0}))}finally{Ii=Ii||!1}return Ii}function Ke(i){return ya()?i:!!i.capture}function Xt(i,n=0){return wa(i)?Number(i):arguments.length===2?n:0}function wa(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Ot(i){return i instanceof w?i.nativeElement:i}var Ca=new b("cdk-input-modality-detector-options"),xa={ignoreKeys:[18,17,224,91,16]},ka=650,Qr={passive:!0,capture:!0},Sa=(()=>{class i{_platform=c(V);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new lt(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Dt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<ka||(this._modality.next(Ce(t)?"keyboard":"mouse"),this._mostRecentTarget=Dt(t))};_onTouchstart=t=>{if(xe(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Dt(t)};constructor(){let t=c(x),e=c(A),r=c(Ca,{optional:!0});if(this._options=m(m({},xa),r),this.modalityDetected=this._modality.pipe(To(1)),this.modalityChanged=this.modalityDetected.pipe(rr()),this._platform.isBrowser){let o=c(qt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(e,"keydown",this._onKeydown,Qr),o.listen(e,"mousedown",this._onMousedown,Qr),o.listen(e,"touchstart",this._onTouchstart,Qr)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Di=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Di||{}),Ra=new b("cdk-focus-monitor-default-options"),En=Ke({passive:!0,capture:!0}),Ze=(()=>{class i{_ngZone=c(x);_platform=c(V);_inputModalityDetector=c(Sa);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(A);_stopInputModalityDetector=new v;constructor(){let t=c(Ra,{optional:!0});this._detectionMode=t?.detectionMode||Di.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=Dt(t);for(let r=e;r;r=r.parentElement)t.type==="focus"?this._onFocus(t,r):this._onBlur(t,r)};monitor(t,e=!1){let r=Ot(t);if(!this._platform.isBrowser||r.nodeType!==1)return p();let o=Kr(r)||this._document,s=this._elementInfo.get(r);if(s)return e&&(s.checkChildren=!0),s.subject;let a={checkChildren:e,subject:new v,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){let e=Ot(t),r=this._elementInfo.get(e);r&&(r.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(r))}focusVia(t,e,r){let o=Ot(t),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,e,l)):(this._setOrigin(e),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Di.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===Di.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?ka:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,e){let r=this._elementInfo.get(e),o=Dt(t);!r||!r.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),r)}_onBlur(t,e){let r=this._elementInfo.get(e);!r||r.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(r,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,r=this._rootNodeFocusListenerCount.get(e)||0;r||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,En),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,En)}),this._rootNodeFocusListenerCount.set(e,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(q(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let r=this._rootNodeFocusListenerCount.get(e);r>1?this._rootNodeFocusListenerCount.set(e,r-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,En),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,En),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,r){this._setClasses(t,e),this._emitOrigin(r,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((r,o)=>{(o===t||r.checkChildren&&o.contains(t))&&e.push([o,r])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var In=new WeakMap,At=(()=>{class i{_appRef;_injector=c(P);_environmentInjector=c(st);load(t){let e=this._appRef=this._appRef||this._injector.get(ne),r=In.get(e);r||(r={loaders:new Set,refs:[]},In.set(e,r),e.onDestroy(()=>{In.get(e)?.refs.forEach(o=>o.destroy()),In.delete(e)})),r.loaders.has(t)||(r.loaders.add(t),r.refs.push(Zi(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ma=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Dn;function ud(){if(Dn===void 0&&(Dn=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Dn=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Dn}function Qe(i){return ud()?.createHTML(i)||i}function Jr(i){return Array.isArray(i)?i:[i]}var Ea=new Set,ke,to=(()=>{class i{_platform=c(V);_nonce=c(Vo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):pd}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&md(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function md(i,n){if(!Ea.has(i))try{ke||(ke=document.createElement("style"),n&&ke.setAttribute("nonce",n),ke.setAttribute("type","text/css"),document.head.appendChild(ke)),ke.sheet&&(ke.sheet.insertRule(`@media ${i} {body{ }}`,0),Ea.add(i))}catch(t){console.error(t)}}function pd(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}function fd(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Ia=(()=>{class i{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),gd=(()=>{class i{_mutationObserverFactory=c(Ia);_observedElements=new Map;_ngZone=c(x);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=Ot(t);return new Oe(r=>{let s=this._observeElement(e).pipe(S(a=>a.filter(l=>!fd(l))),F(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new v,r=this._mutationObserverFactory.create(o=>e.next(o));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:r}=this._observedElements.get(t);e&&e.disconnect(),r.complete(),this._observedElements.delete(t)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Da=(()=>{class i{_contentObserver=c(gd);_elementRef=c(w);event=new B;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=Xt(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(Te(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",Q],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),Oa=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({providers:[Ia]})}return i})();var An=(()=>{class i{_platform=c(V);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return vd(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=_d(Rd(t));if(e&&(Aa(e)===-1||!this.isVisible(e)))return!1;let r=t.nodeName.toLowerCase(),o=Aa(t);return t.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!kd(t)?!1:r==="audio"?t.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Sd(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _d(i){try{return i.frameElement}catch{return null}}function vd(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function bd(i){let n=i.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function yd(i){return Cd(i)&&i.type=="hidden"}function wd(i){return xd(i)&&i.hasAttribute("href")}function Cd(i){return i.nodeName.toLowerCase()=="input"}function xd(i){return i.nodeName.toLowerCase()=="a"}function Ta(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let n=i.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Aa(i){if(!Ta(i))return null;let n=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function kd(i){let n=i.nodeName.toLowerCase(),t=n==="input"&&i.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function Sd(i){return yd(i)?!1:bd(i)||wd(i)||i.hasAttribute("contenteditable")||Ta(i)}function Rd(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var On=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,e,r,o=!1,s){this._element=n,this._checker=t,this._ngZone=e,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(n),!!e}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=0;e<t.length;e++){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let e=t.length-1;e>=0;e--){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?dt(n,{injector:this._injector}):setTimeout(n)}},eo=(()=>{class i{_checker=c(An);_ngZone=c(x);_document=c(A);_injector=c(P);constructor(){c(At).load(Ma)}create(t,e=!1){return new On(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Md=200,Tn=class{_letterKeyStream=new v;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new v;selectedItem=this._selectedItem;constructor(n,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:Md;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(K(t=>this._pressedLetters.push(t)),Te(n),F(()=>this._pressedLetters.length>0),S(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let r=(this._selectedItemIndex+e)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Je(i,...n){return n.length?n.some(t=>i[t]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var Pn=class{_items;_activeItemIndex=y(-1);_activeItem=y(null);_wrap=!1;_typeaheadSubscription=tt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof me?this._itemChangesSubscription=n.changes.subscribe(e=>this._itemsChanged(e.toArray())):cr(n)&&(this._effectRef=ar(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new v;change=new v;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Tn(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Je(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),e=typeof n=="number"?n:t.indexOf(n),r=t[e];this._activeItem.set(r??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let r=(this._activeItemIndex()+n*e+t.length)%t.length,o=t[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let e=this._getItemsArray();if(e[n]){for(;this._skipPredicateFn(e[n]);)if(n+=t,!e[n])return;this.setActiveItem(n)}}_getItemsArray(){return cr(this._items)?this._items():this._items instanceof me?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let e=n.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Oi=class extends Pn{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var ro={},Se=class i{_appId=c(Uo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){return this._appId!=="ng"&&(n+=this._appId),ro.hasOwnProperty(n)||(ro[n]=0),`${n}${t?i._infix+"-":""}${ro[n]++}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})};var Ed=new b("cdk-dir-doc",{providedIn:"root",factory:()=>c(A)}),Id=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function La(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Id.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Kt=(()=>{class i{get value(){return this.valueSignal()}valueSignal=y("ltr");change=new B;constructor(){let t=c(Ed,{optional:!0});if(t){let e=t.body?t.body.dir:null,r=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(La(e||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var G=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({})}return i})();function $(i){return i==null?"":typeof i=="string"?i:`${i}px`}function wt(i){return i!=null&&`${i}`!="false"}var Lt=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})(Lt||{}),Nn,Re;function Ln(){if(Re==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Re=!1,Re;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Re=!0;else{let i=Element.prototype.scrollTo;i?Re=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Re=!1}}return Re}function ti(){if(typeof document!="object"||!document)return Lt.NORMAL;if(Nn==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",i.appendChild(t),document.body.appendChild(i),Nn=Lt.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Nn=i.scrollLeft===0?Lt.NEGATED:Lt.INVERTED),i.remove()}return Nn}function oo(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ad=20,Ee=(()=>{class i{_ngZone=c(x);_platform=c(V);_renderer=c(qt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new v;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=Ad){return this._platform.isBrowser?new Oe(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=t>0?this._scrolled.pipe(ir(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):p()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let r=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(F(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,t)&&e.push(o)}),e}_scrollableContainsElement(t,e){let r=Ot(e),o=t.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ei=(()=>{class i{elementRef=c(w);scrollDispatcher=c(Ee);ngZone=c(x);dir=c(Kt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new v;_renderer=c(kt);_cleanupScroll;_elementScrolled=new v;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=r?t.end:t.start),t.right==null&&(t.right=r?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),r&&ti()!=Lt.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),ti()==Lt.INVERTED?t.left=t.right:ti()==Lt.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;Ln()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",r="right",o=this.elementRef.nativeElement;if(t=="top")return o.scrollTop;if(t=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return t=="start"?t=s?r:e:t=="end"&&(t=s?e:r),s&&ti()==Lt.INVERTED?t==e?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&ti()==Lt.NEGATED?t==e?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==e?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Td=20,he=(()=>{class i{_platform=c(V);_listeners;_viewportSize=null;_change=new v;_document=c(A);constructor(){let t=c(x),e=c(qt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[e.listen("window","resize",r),e.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+e,height:r,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),r=t.documentElement,o=r.getBoundingClientRect(),s=-o.top||t.body?.scrollTop||e.scrollY||r.scrollTop||0,a=-o.left||t.body?.scrollLeft||e.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(t=Td){return t>0?this._change.pipe(ir(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Me=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({})}return i})(),so=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[G,Me,G,Me]})}return i})();var Pd=new b("MATERIAL_ANIMATIONS"),Fa=null;function Nd(){return c(Pd,{optional:!0})?.animationsDisabled||c(Wi,{optional:!0})==="NoopAnimations"?"di-disabled":(Fa??=c(to).matchMedia("(prefers-reduced-motion)").matches,Fa?"reduced-motion":"enabled")}function Zt(){return Nd()!=="enabled"}var jn=["*"],Ld=["content"],Fd=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Bd=["mat-drawer","mat-drawer-content","*"];function jd(i,n){if(i&1){let t=li();L(0,"div",1),_t("click",function(){ee(t);let r=Mt();return ie(r._onBackdropClicked())}),j()}if(i&2){let t=Mt();W("mat-drawer-shown",t._isShowingBackdrop())}}function Ud(i,n){i&1&&(L(0,"mat-drawer-content"),T(1,2),j())}var zd=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Vd=["mat-sidenav","mat-sidenav-content","*"];function Hd(i,n){if(i&1){let t=li();L(0,"div",1),_t("click",function(){ee(t);let r=Mt();return ie(r._onBackdropClicked())}),j()}if(i&2){let t=Mt();W("mat-drawer-shown",t._isShowingBackdrop())}}function Wd(i,n){i&1&&(L(0,"mat-sidenav-content"),T(1,2),j())}var $d=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var qd=new b("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ho=new b("MAT_DRAWER_CONTAINER"),Fn=(()=>{class i extends ei{_platform=c(V);_changeDetectorRef=c(mt);_container=c(co);constructor(){let t=c(w),e=c(Ee),r=c(x);super(t,e,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,r){e&2&&(fe("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),W("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Et([{provide:ei,useExisting:i}]),ht],ngContentSelectors:jn,decls:1,vars:0,template:function(e,r){e&1&&(nt(),T(0))},encapsulation:2,changeDetection:0})}return i})(),ao=(()=>{class i{_elementRef=c(w);_focusTrapFactory=c(eo);_focusMonitor=c(Ze);_platform=c(V);_ngZone=c(x);_renderer=c(kt);_interactivityChecker=c(An);_doc=c(A);_container=c(ho,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=wt(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=wt(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(wt(t))}_opened=y(!1);_openedVia=null;_animationStarted=new v;_animationEnd=new v;openedChange=new B(!0);_openedStream=this.openedChange.pipe(F(t=>t),S(()=>{}));openedStart=this._animationStarted.pipe(F(()=>this.opened),nr(void 0));_closedStream=this.openedChange.pipe(F(t=>!t),S(()=>{}));closedStart=this._animationStarted.pipe(F(()=>!this.opened),nr(void 0));_destroyed=new v;onPositionChanged=new B;_content;_modeChanged=new v;_injector=c(P);_changeDetectorRef=c(mt);constructor(){this.openedChange.pipe(q(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Je(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",r),s=this._renderer.listen(t,"mousedown",r)})),t.focus(e)}_focusByCssSelector(t,e){let r=this._elementRef.nativeElement.querySelector(t);r&&this._forceFocus(r,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":dt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),r}_setOpen(t,e,r){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(xt(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,r=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,e)),r.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["mat-drawer"]],viewQuery:function(e,r){if(e&1&&re(Ld,5),e&2){let o;U(o=z())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,r){e&2&&(X("align",null)("tabIndex",r.mode!=="side"?"-1":null),fe("visibility",!r._container&&!r.opened?"hidden":null),W("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:jn,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,r){e&1&&(nt(),L(0,"div",1,0),T(2),j())},dependencies:[ei],encapsulation:2,changeDetection:0})}return i})(),co=(()=>{class i{_dir=c(Kt,{optional:!0});_element=c(w);_ngZone=c(x);_changeDetectorRef=c(mt);_animationDisabled=Zt();_transitionsEnabled=!1;_allDrawers;_drawers=new me;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=wt(t)}_autosize=c(qd);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:wt(t)}_backdropOverride=null;backdropClick=new B;_start=null;_end=null;_left=null;_right=null;_destroyed=new v;_doCheckSubject=new v;_contentMargins={left:null,right:null};_contentMarginChanges=new v;get scrollable(){return this._userContent||this._content}_injector=c(P);constructor(){let t=c(V),e=c(he);this._dir?.change.pipe(q(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(q(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Bt(this._allDrawers),q(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Bt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Te(10),q(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();t+=r,e-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();e+=r,t-=r}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(q(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(q(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(q(this._drawers.changes)).subscribe(()=>{dt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(q(Jt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,r="mat-drawer-container-has-open";t?e.add(r):e.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["mat-drawer-container"]],contentQueries:function(e,r,o){if(e&1&&Ut(o,Fn,5)(o,ao,5),e&2){let s;U(s=z())&&(r._content=s.first),U(s=z())&&(r._allDrawers=s)}},viewQuery:function(e,r){if(e&1&&re(Fn,5),e&2){let o;U(o=z())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,r){e&2&&W("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Et([{provide:ho,useExisting:i}])],ngContentSelectors:Bd,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,r){e&1&&(nt(Fd),St(0,jd,1,2,"div",0),T(1),T(2,1),St(3,Ud,2,0,"mat-drawer-content")),e&2&&(Rt(r.hasBackdrop?0:-1),it(3),Rt(r._content?-1:3))},dependencies:[Fn],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return i})(),Bn=(()=>{class i extends Fn{static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Et([{provide:ei,useExisting:i}]),ht],ngContentSelectors:jn,decls:1,vars:0,template:function(e,r){e&1&&(nt(),T(0))},encapsulation:2,changeDetection:0})}return i})(),uo=(()=>{class i extends ao{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=wt(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Xt(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Xt(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,r){e&2&&(X("tabIndex",r.mode!=="side"?"-1":null)("align",null),fe("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),W("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Et([{provide:ao,useExisting:i}]),ht],ngContentSelectors:jn,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,r){e&1&&(nt(),L(0,"div",1,0),T(2),j())},dependencies:[ei],encapsulation:2,changeDetection:0})}return i})(),Ba=(()=>{class i extends co{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-sidenav-container"]],contentQueries:function(e,r,o){if(e&1&&Ut(o,Bn,5)(o,uo,5),e&2){let s;U(s=z())&&(r._content=s.first),U(s=z())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,r){e&2&&W("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Et([{provide:ho,useExisting:i},{provide:co,useExisting:i}]),ht],ngContentSelectors:Vd,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,r){e&1&&(nt(zd),St(0,Hd,1,2,"div",0),T(1),T(2,1),St(3,Wd,2,0,"mat-sidenav-content")),e&2&&(Rt(r.hasBackdrop?0:-1),it(3),Rt(r._content?-1:3))},dependencies:[Bn],styles:[$d],encapsulation:2,changeDetection:0})}return i})(),ja=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[Me,G,Me]})}return i})();var Ai=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},mo=class extends Ai{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,t,e,r,o){super(),this.component=n,this.viewContainerRef=t,this.injector=e,this.projectableNodes=r,this.bindings=o||null}},ii=class extends Ai{templateRef;viewContainerRef;context;injector;constructor(n,t,e,r){super(),this.templateRef=n,this.viewContainerRef=t,this.context=e,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},po=class extends Ai{element;constructor(n){super(),this.element=n instanceof w?n.nativeElement:n}},fo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof mo)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ii)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof po)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ti=class extends fo{outletElement;_appRef;_defaultInjector;constructor(n,t,e){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=e}attachComponentPortal(n){let t;if(n.viewContainerRef){let e=n.injector||n.viewContainerRef.injector,r=e.get(qo,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:e,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>t.destroy())}else{let e=this._appRef,r=n.injector||this._defaultInjector||P.NULL,o=r.get(st,e.injector);t=Zi(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),e.attachView(t.hostView),this.setDisposeFn(()=>{e.viewCount>0&&e.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,e=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return e.rootNodes.forEach(r=>this.outletElement.appendChild(r)),e.detectChanges(),this.setDisposeFn(()=>{let r=t.indexOf(e);r!==-1&&t.remove(r)}),this._attachedPortal=n,e}attachDomPortal=n=>{let t=n.element;t.parentNode;let e=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(e,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{e.parentNode&&e.parentNode.replaceChild(t,e)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Ua=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({})}return i})();var Un=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Tt=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Tt||{}),go=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Tt.HIDDEN;constructor(n,t,e,r=!1){this._renderer=n,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},za=Ke({passive:!0,capture:!0}),_o=class{_events=new Map;addHandler(n,t,e,r){let o=this._events.get(t);if(o){let s=o.get(e);s?s.add(r):o.set(e,new Set([r]))}else this._events.set(t,new Map([[e,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,za)})}removeHandler(n,t,e){let r=this._events.get(n);if(!r)return;let o=r.get(t);o&&(o.delete(e),o.size===0&&r.delete(t),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,za)))}_delegateEventHandler=n=>{let t=Dt(n);t&&this._events.get(n.type)?.forEach((e,r)=>{(r===t||r.contains(t))&&e.forEach(o=>o.handleEvent(n))})}},Va={enterDuration:225,exitDuration:150},Gd=800,Ha=Ke({passive:!0,capture:!0}),Wa=["mousedown","touchstart"],$a=["mouseup","mouseleave","touchend","touchcancel"],Xd=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Pi=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new _o;constructor(n,t,e,r,o){this._target=n,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=Ot(e)),o&&o.get(At).load(Xd)}fadeInRipple(n,t,e={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},Va),e.animation);e.centered&&(n=r.left+r.width/2,t=r.top+r.height/2);let s=e.radius||Kd(n,t,r),a=n-r.left,l=t-r.top,d=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${a-s}px`,h.style.top=`${l-s}px`,h.style.height=`${s*2}px`,h.style.width=`${s*2}px`,e.color!=null&&(h.style.backgroundColor=e.color),h.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(h);let u=window.getComputedStyle(h),_=u.transitionProperty,D=u.transitionDuration,I=_==="none"||D==="0s"||D==="0s, 0s"||r.width===0&&r.height===0,O=new go(this,h,e,I);h.style.transform="scale3d(1, 1, 1)",O.state=Tt.FADING_IN,e.persistent||(this._mostRecentTransientRipple=O);let pt=null;return!I&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let De=()=>{pt&&(pt.fallbackTimer=null),clearTimeout(ue),this._finishRippleTransition(O)},Wt=()=>this._destroyRipple(O),ue=setTimeout(Wt,d+100);h.addEventListener("transitionend",De),h.addEventListener("transitioncancel",Wt),pt={onTransitionEnd:De,onTransitionCancel:Wt,fallbackTimer:ue}}),this._activeRipples.set(O,pt),(I||!d)&&this._finishRippleTransition(O),O}fadeOutRipple(n){if(n.state===Tt.FADING_OUT||n.state===Tt.HIDDEN)return;let t=n.element,e=m(m({},Va),n.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",n.state=Tt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=Ot(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Wa.forEach(e=>{i._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{$a.forEach(t=>{this._triggerElement.addEventListener(t,this,Ha)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Tt.FADING_IN?this._startFadeOutTransition(n):n.state===Tt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:e}=n.config;n.state=Tt.VISIBLE,!e&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Tt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=Ce(n),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Gd;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!xe(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===Tt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Tt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Wa.forEach(t=>i._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&($a.forEach(t=>n.removeEventListener(t,this,Ha)),this._pointerUpEventsRegistered=!1))}};function Kd(i,n,t){let e=Math.max(Math.abs(i-t.left),Math.abs(i-t.right)),r=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(e*e+r*r)}var vo=new b("mat-ripple-global-options"),qa=(()=>{class i{_elementRef=c(w);_animationsDisabled=Zt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=c(x),e=c(V),r=c(vo,{optional:!0}),o=c(P);this._globalOptions=r||{},this._rippleRenderer=new Pi(this,t,this._elementRef,e,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:m(m(m({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,r){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,m(m({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,m(m({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,r){e&2&&W("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Ya=Ln();function tc(i){return new zn(i.get(he),i.get(A))}var zn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=$(-this._previousScrollPosition.left),n.style.top=$(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,e=n.style,r=t.style,o=e.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Ya&&(e.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ya&&(e.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function ec(i,n){return new Vn(i.get(Ee),i.get(x),i.get(he),n)}var Vn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,e,r){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=e,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(F(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ni=class{enable(){}disable(){}attach(){}};function bo(i,n){return n.some(t=>{let e=i.bottom<t.top,r=i.top>t.bottom,o=i.right<t.left,s=i.left>t.right;return e||r||o||s})}function Ga(i,n){return n.some(t=>{let e=i.top<t.top,r=i.bottom>t.bottom,o=i.left<t.left,s=i.right>t.right;return e||r||o||s})}function Gn(i,n){return new Hn(i.get(Ee),i.get(he),i.get(x),n)}var Hn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,e,r){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=e,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:r}=this._viewportRuler.getViewportSize();bo(t,[{width:e,height:r,bottom:r,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},ic=(()=>{class i{_injector=c(P);constructor(){}noop=()=>new Ni;close=t=>ec(this._injector,t);block=()=>tc(this._injector);reposition=t=>Gn(this._injector,t);static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ni=class{positionStrategy;scrollStrategy=new Ni;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let e of t)n[e]!==void 0&&(this[e]=n[e])}}};var Wn=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var nc=(()=>{class i{_attachedOverlays=[];_document=c(A);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,r){return r.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),rc=(()=>{class i extends nc{_ngZone=c(x);_renderer=c(qt).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let r=e.length-1;r>-1;r--){let o=e[r];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),oc=(()=>{class i extends nc{_platform=c(V);_ngZone=c(x);_renderer=c(qt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(e,"pointerdown",this._pointerDownListener,r),o.listen(e,"click",this._clickListener,r),o.listen(e,"auxclick",this._clickListener,r),o.listen(e,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Dt(t)};_clickListener=t=>{let e=Dt(t),r=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,l))){if(Xa(a.overlayElement,e)||Xa(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Xa(i,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=n;for(;e;){if(e===i)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var sc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),ac=(()=>{class i{_platform=c(V);_containerElement;_document=c(A);_styleLoader=c(At);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||oo()){let r=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let e=this._document.createElement("div");e.classList.add(t),oo()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(sc)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),yo=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,e,r){this._renderer=t,this._ngZone=e,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function wo(i){return i&&i.nodeType===1}var $n=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new v;_attachments=new v;_detachments=new v;_positionStrategy;_scrollStrategy;_locationChanges=tt.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new v;_outsidePointerEvents=new v;_afterNextRenderRef;constructor(n,t,e,r,o,s,a,l,d,h=!1,u,_){this._portalOutlet=n,this._host=t,this._pane=e,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=h,this._injector=u,this._renderer=_,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=dt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=m(m({},this._config),n),this._updateElementSize()}setDirection(n){this._config=J(m({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=$(this._config.width),n.height=$(this._config.height),n.minWidth=$(this._config.minWidth),n.minHeight=$(this._config.minHeight),n.maxWidth=$(this._config.maxWidth),n.maxHeight=$(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;wo(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new yo(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,e){let r=Jr(t||[]).filter(o=>!!o);r.length&&(e?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=dt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},Ka="cdk-overlay-connected-position-bounding-box",Zd=/([A-Za-z%]+)$/;function Xn(i,n){return new qn(n,i.get(he),i.get(A),i.get(V),i.get(ac))}var qn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new v;_resizeSubscription=tt.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,e,r,o){this._viewportRuler=t,this._document=e,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(Ka),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,e=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),d=this._getOverlayPoint(l,t,a),h=this._getOverlayFit(d,t,e,a);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(h,d,e)){o.push({position:a,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<h.visibleArea)&&(s={overlayFit:h,overlayPoint:d,originPoint:l,position:a,overlayRect:t})}if(o.length){let a=null,l=-1;for(let d of o){let h=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);h>l&&(l=h,a=d)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ie(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ka),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof w?this._origin.nativeElement:wo(this._origin)?this._origin:null}_getOriginPoint(n,t,e){let r;if(e.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=e.originX=="start"?s:a}t.left<0&&(r-=t.left);let o;return e.originY=="center"?o=n.top+n.height/2:o=e.originY=="top"?n.top:n.bottom,t.top<0&&(o-=t.top),{x:r,y:o}}_getOverlayPoint(n,t,e){let r;e.overlayX=="center"?r=-t.width/2:e.overlayX==="start"?r=this._isRtl()?-t.width:0:r=this._isRtl()?0:-t.width;let o;return e.overlayY=="center"?o=-t.height/2:o=e.overlayY=="top"?0:-t.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,t,e,r){let o=Qa(t),{x:s,y:a}=n,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(s+=l),d&&(a+=d);let h=0-s,u=s+o.width-e.width,_=0-a,D=a+o.height-e.height,I=this._subtractOverflows(o.width,h,u),O=this._subtractOverflows(o.height,_,D),pt=I*O;return{visibleArea:pt,isCompletelyWithinViewport:o.width*o.height===pt,fitsInViewportVertically:O===o.height,fitsInViewportHorizontally:I==o.width}}_canFitWithFlexibleDimensions(n,t,e){if(this._hasFlexibleDimensions){let r=e.bottom-t.y,o=e.right-t.x,s=Za(this._overlayRef.getConfig().minHeight),a=Za(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,d=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&d}return!1}_pushOverlayOnScreen(n,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=Qa(t),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-e.top-n.y,0),d=Math.max(o.left-e.left-n.x,0),h=0,u=0;return r.width<=o.width?h=d||-s:h=n.x<this._getViewportMarginStart()?o.left-e.left-n.x:0,r.height<=o.height?u=l||-a:u=n.y<this._getViewportMarginTop()?o.top-e.top-n.y:0,this._previousPushAmount={x:h,y:u},{x:n.x+h,y:n.y+u}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Qd(this._lastScrollVisibility,e)){let r=new Wn(n,e);this._positionChanges.next(r)}this._lastScrollVisibility=e}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,r=n.overlayY;n.overlayX==="center"?e="center":this._isRtl()?e=n.overlayX==="start"?"right":"left":e=n.overlayX==="start"?"left":"right";for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${e} ${r}`}_calculateBoundingBoxRect(n,t){let e=this._viewportRect,r=this._isRtl(),o,s,a;if(t.overlayY==="top")s=n.y,o=e.height-s+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=e.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=e.height-a+this._getViewportMarginTop();else{let D=Math.min(e.bottom-n.y+e.top,n.y),I=this._lastBoundingBoxSize.height;o=D*2,s=n.y-D,o>I&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-I/2)}let l=t.overlayX==="start"&&!r||t.overlayX==="end"&&r,d=t.overlayX==="end"&&!r||t.overlayX==="start"&&r,h,u,_;if(d)_=e.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=n.x-this._getViewportMarginStart();else if(l)u=n.x,h=e.right-n.x-this._getViewportMarginEnd();else{let D=Math.min(e.right-n.x+e.left,n.x),I=this._lastBoundingBoxSize.width;h=D*2,u=n.x-D,h>I&&!this._isInitialRender&&!this._growAfterOpen&&(u=n.x-I/2)}return{top:s,left:u,bottom:a,right:_,width:h,height:o}}_setBoundingBoxStyles(n,t){let e=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=$(e.width),r.height=$(e.height),r.top=$(e.top)||"auto",r.bottom=$(e.bottom)||"auto",r.left=$(e.left)||"auto",r.right=$(e.right)||"auto",t.overlayX==="center"?r.alignItems="center":r.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?r.justifyContent="center":r.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=$(o)),s&&(r.maxWidth=$(s))}this._lastBoundingBoxSize=e,Ie(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Ie(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ie(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let e={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let h=this._viewportRuler.getViewportScrollPosition();Ie(e,this._getExactOverlayY(t,n,h)),Ie(e,this._getExactOverlayX(t,n,h))}else e.position="static";let a="",l=this._getOffset(t,"x"),d=this._getOffset(t,"y");l&&(a+=`translateX(${l}px) `),d&&(a+=`translateY(${d}px)`),e.transform=a.trim(),s.maxHeight&&(r?e.maxHeight=$(s.maxHeight):o&&(e.maxHeight="")),s.maxWidth&&(r?e.maxWidth=$(s.maxWidth):o&&(e.maxWidth="")),Ie(this._pane.style,e)}_getExactOverlayY(n,t,e){let r={top:"",bottom:""},o=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=$(o.y);return r}_getExactOverlayX(n,t,e){let r={left:"",right:""},o=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,e));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=$(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ga(n,e),isOriginOutsideView:bo(n,e),isOverlayClipped:Ga(t,e),isOverlayOutsideView:bo(t,e)}}_subtractOverflows(n,...t){return t.reduce((e,r)=>e-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+n-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Jr(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof w)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,e=n.height||0;return{top:n.y,bottom:n.y+e,left:n.x,right:n.x+t,height:e,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let e=t.getBoundingClientRect();return n&&(t.style.display=""),e}};function Ie(i,n){for(let t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i}function Za(i){if(typeof i!="number"&&i!=null){let[n,t]=i.split(Zd);return!t||t==="px"?parseFloat(n):null}return i||null}function Qa(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Qd(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Ja="cdk-global-overlay-wrapper";function cc(i){return new Yn}var Yn=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Ja),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=e,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),d=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),h=this._xPosition,u=this._xOffset,_=this._overlayRef.getConfig().direction==="rtl",D="",I="",O="";l?O="flex-start":h==="center"?(O="center",_?I=u:D=u):_?h==="left"||h==="end"?(O="flex-end",D=u):(h==="right"||h==="start")&&(O="flex-start",I=u):h==="left"||h==="start"?(O="flex-start",D=u):(h==="right"||h==="end")&&(O="flex-end",I=u),n.position=this._cssPosition,n.marginLeft=l?"0":D,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":I,t.justifyContent=O,t.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(Ja),e.justifyContent=e.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},lc=(()=>{class i{_injector=c(P);constructor(){}global(){return cc()}flexibleConnectedTo(t){return Xn(this._injector,t)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),dc=new b("OVERLAY_DEFAULT_CONFIG");function Kn(i,n){i.get(At).load(sc);let t=i.get(ac),e=i.get(A),r=i.get(Se),o=i.get(ne),s=i.get(Kt),a=i.get(kt,null,{optional:!0})||i.get(qt).createRenderer(null,null),l=new ni(n),d=i.get(dc,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in e.body?l.usePopover=n?.usePopover??d:l.usePopover=!1;let h=e.createElement("div"),u=e.createElement("div");h.id=r.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),u.appendChild(h),l.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return wo(_)?_.after(u):_?.type==="parent"?_.element.appendChild(u):t.getContainerElement().appendChild(u),new $n(new Ti(h,o,i),u,h,l,i.get(x),i.get(rc),e,i.get(oe),i.get(oc),n?.disableAnimations??i.get(Wi,null,{optional:!0})==="NoopAnimations",i.get(st),a)}var hc=(()=>{class i{scrollStrategies=c(ic);_positionBuilder=c(lc);_injector=c(P);constructor(){}create(t){return Kn(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||i)};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Co=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({providers:[hc],imports:[G,Ua,so,so]})}return i})();var Zn=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[G]})}return i})();var eh=["mat-menu-item",""],ih=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],nh=["mat-icon, [matMenuItemIcon]","*"];function rh(i,n){i&1&&(sr(),L(0,"svg",2),ut(1,"polygon",3),j())}var oh=["*"];function sh(i,n){if(i&1){let t=li();Yi(0,"div",0),Qo("click",function(){ee(t);let r=Mt();return ie(r.closed.emit("click"))})("animationstart",function(r){ee(t);let o=Mt();return ie(o._onAnimationStart(r.animationName))})("animationend",function(r){ee(t);let o=Mt();return ie(o._onAnimationDone(r.animationName))})("animationcancel",function(r){ee(t);let o=Mt();return ie(o._onAnimationDone(r.animationName))}),Yi(1,"div",1),T(2),hr()()}if(i&2){let t=Mt();Gi(t._classList),W("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Zo("id",t.panelId),X("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var ko=new b("MAT_MENU_PANEL"),Li=(()=>{class i{_elementRef=c(w);_document=c(A);_focusMonitor=c(Ze);_parentMenu=c(ko,{optional:!0});_changeDetectorRef=c(mt);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new v;_focused=new v;_highlighted=!1;_triggersSubmenu=!1;constructor(){c(At).load(Un),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<e.length;r++)e[r].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,r){e&1&&_t("click",function(s){return r._checkDisabled(s)})("mouseenter",function(){return r._handleMouseEnter()}),e&2&&(X("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),W("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Q],disableRipple:[2,"disableRipple","disableRipple",Q]},exportAs:["matMenuItem"],attrs:eh,ngContentSelectors:nh,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,r){e&1&&(nt(ih),T(0),L(1,"span",0),T(2,1),j(),ut(3,"div",1),St(4,rh,2,0,":svg:svg",2)),e&2&&(it(3),Ne("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),it(),Rt(r._triggersSubmenu?4:-1))},dependencies:[qa],encapsulation:2,changeDetection:0})}return i})();var ah=new b("MatMenuContent");var ch=new b("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),xo="_mat-menu-enter",Qn="_mat-menu-exit",oi=(()=>{class i{_elementRef=c(w);_changeDetectorRef=c(mt);_injector=c(P);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Zt();_allItems;_directDescendantItems=new me;_classList={};_panelAnimationState="void";_animationDone=new v;_isAnimating=y(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,r=m({},this._classList);e&&e.length&&e.split(" ").forEach(o=>{r[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{r[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=r}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new B;close=this.closed;panelId=c(Se).getId("mat-menu-panel-");constructor(){let t=c(ch);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Oi(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(Bt(this._directDescendantItems),ot(t=>Jt(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let r=t.toArray(),o=Math.max(0,Math.min(r.length-1,e.activeItemIndex||0));r[o]&&!r[o].disabled?e.setActiveItem(o):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Bt(this._directDescendantItems),ot(e=>Jt(...e.map(r=>r._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,r=this._keyManager;switch(e){case 27:Je(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=dt(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(t).setFirstItemActive(),!r.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=J(m({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Qn;(e||t===xo)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===xo||t===Qn)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Qn),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?xo:Qn)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Bt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["mat-menu"]],contentQueries:function(e,r,o){if(e&1&&Ut(o,ah,5)(o,Li,5)(o,Li,4),e&2){let s;U(s=z())&&(r.lazyContent=s.first),U(s=z())&&(r._allItems=s),U(s=z())&&(r.items=s)}},viewQuery:function(e,r){if(e&1&&re(ci,5),e&2){let o;U(o=z())&&(r.templateRef=o.first)}},hostVars:3,hostBindings:function(e,r){e&2&&X("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Q],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Q(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[Et([{provide:ko,useExisting:i}])],ngContentSelectors:oh,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,r){e&1&&(nt(),Go(0,sh,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),lh=new b("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=c(P);return()=>Gn(i)}});var ri=new WeakMap,dh=(()=>{class i{_canHaveBackdrop;_element=c(w);_viewContainerRef=c(pe);_menuItemInstance=c(Li,{optional:!0,self:!0});_dir=c(Kt,{optional:!0});_focusMonitor=c(Ze);_ngZone=c(x);_injector=c(P);_scrollStrategy=c(lh);_changeDetectorRef=c(mt);_animationsDisabled=Zt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=tt.EMPTY;_menuCloseSubscription=tt.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=c(ko,{optional:!0});this._parentMaterialMenu=e instanceof oi?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&ri.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let r=ri.get(e);ri.set(e,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(e),s=o.getConfig(),a=s.positionStrategy;this._setPosition(e,a),this._canHaveBackdrop?s.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:s.hasBackdrop=e.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof oi&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(q(e.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,r=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof oi&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(xt(1)).subscribe(()=>{e.detach(),ri.has(r)||r.lazyContent?.detach()}),r._setIsOpen(!1)):(e.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&ri.delete(r),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=Kn(this._injector,e),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof oi&&this._menu._handleKeydown(r)})}return this._overlayRef}_getOverlayConfig(t){return new ni({positionStrategy:Xn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",s=r.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(o,s)})})}_setPosition(t,e){let[r,o]=t.xPosition==="before"?["end","start"]:["start","end"],[s,a]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,d]=[s,a],[h,u]=[r,o],_=0;if(this._triggersSubmenu()){if(u=r=t.xPosition==="before"?"start":"end",o=h=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let D=this._parentMaterialMenu.items.first;this._parentInnerPadding=D?D._getHostElement().offsetTop:0}_=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(l=s==="top"?"bottom":"top",d=a==="top"?"bottom":"top");e.withPositions([{originX:r,originY:l,overlayX:h,overlayY:s,offsetY:_},{originX:o,originY:l,overlayX:u,overlayY:s,offsetY:_},{originX:r,originY:d,overlayX:h,overlayY:a,offsetY:-_},{originX:o,originY:d,overlayX:u,overlayY:a,offsetY:-_}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:p(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(F(s=>this._menuOpen&&s!==this._menuItemInstance)):p();return Jt(t,r,o,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new ii(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return ri.get(t)===this}_triggerIsAriaDisabled(){return Q(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){$i()};static \u0275dir=E({type:i})}return i})(),uc=(()=>{class i extends dh{_cleanupTouchstart;_hoverSubscription=tt.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new B;onMenuOpen=this.menuOpened;menuClosed=new B;onMenuClose=this.menuClosed;constructor(){super(!0);let t=c(kt);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{xe(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){Ce(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,r){e&1&&_t("click",function(s){return r._handleClick(s)})("mousedown",function(s){return r._handleMousedown(s)})("keydown",function(s){return r._handleKeydown(s)}),e&2&&X("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[ht]})}return i})();var mc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[Zn,Co,G,Me]})}return i})();function pc(i){return Error(`Unable to find icon with the name "${i}"`)}function uh(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function fc(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function gc(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var Qt=class{url;svgText;options;svgElement=null;constructor(n,t,e){this.url=n,this.svgText=t,this.options=e}},vc=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,r,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=r}addSvgIcon(t,e,r){return this.addSvgIconInNamespace("",t,e,r)}addSvgIconLiteral(t,e,r){return this.addSvgIconLiteralInNamespace("",t,e,r)}addSvgIconInNamespace(t,e,r,o){return this._addSvgIconConfig(t,e,new Qt(r,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,r,o){let s=this._sanitizer.sanitize(Pe.HTML,r);if(!s)throw gc(r);let a=Qe(s);return this._addSvgIconConfig(t,e,new Qt("",a,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,r){return this._addSvgIconSetConfig(t,new Qt(e,null,r))}addSvgIconSetLiteralInNamespace(t,e,r){let o=this._sanitizer.sanitize(Pe.HTML,e);if(!o)throw gc(e);let s=Qe(o);return this._addSvgIconSetConfig(t,new Qt("",s,r))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Pe.RESOURCE_URL,t);if(!e)throw fc(t);let r=this._cachedIconsByUrl.get(e);return r?p(Jn(r)):this._loadSvgIconFromConfig(new Qt(t,null)).pipe(K(o=>this._cachedIconsByUrl.set(e,o)),S(o=>Jn(o)))}getNamedSvgIcon(t,e=""){let r=_c(e,t),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(e);return s?this._getSvgFromIconSetConfigs(t,s):Fi(pc(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?p(Jn(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(S(e=>Jn(e)))}_getSvgFromIconSetConfigs(t,e){let r=this._extractIconWithNameFromAnySet(t,e);if(r)return p(r);let o=e.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Ae(a=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Pe.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(d)),p(null)})));return Oo(o).pipe(S(()=>{let s=this._extractIconWithNameFromAnySet(t,e);if(!s)throw pc(t);return s}))}_extractIconWithNameFromAnySet(t,e){for(let r=e.length-1;r>=0;r--){let o=e[r];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(K(e=>t.svgText=e),S(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?p(null):this._fetchIcon(t).pipe(K(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,r){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Qe("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let r=e.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(t){let e=this._svgElementFromString(Qe("<svg></svg>")),r=t.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&e.setAttribute(s,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:r}=t,o=r?.withCredentials??!1;if(!this._httpClient)throw uh();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let s=this._sanitizer.sanitize(Pe.RESOURCE_URL,e);if(!s)throw fc(e);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(S(d=>Qe(d)),Ui(()=>this._inProgressUrlFetches.delete(s)),Ao());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(t,e,r){return this._svgIconConfigs.set(_c(t,e),r),this}_addSvgIconSetConfig(t,e){let r=this._iconSetConfigs.get(t);return r?r.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](e,t);if(o)return mh(o)?new Qt(o.url,null,o.options):new Qt(o,null)}}static \u0275fac=function(e){return new(e||i)(ft(hs,8),ft(ms),ft(A,8),ft(Vi))};static \u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Jn(i){return i.cloneNode(!0)}function _c(i,n){return i+":"+n}function mh(i){return!!(i.url&&i.options)}var ph=["*"],fh=new b("MAT_ICON_DEFAULT_OPTIONS"),gh=new b("mat-icon-location",{providedIn:"root",factory:()=>{let i=c(A),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),bc=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],_h=bc.map(i=>`[${i}]`).join(", "),vh=/^url\(['"]?#(.*?)['"]?\)$/,yc=(()=>{class i{_elementRef=c(w);_iconRegistry=c(vc);_location=c(gh);_errorHandler=c(Vi);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=tt.EMPTY;constructor(){let t=c(new Ki("aria-hidden"),{optional:!0}),e=c(fh,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let r=t.childNodes[e];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>t.classList.remove(r)),e.forEach(r=>t.classList.add(r)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(_h),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)bc.forEach(s=>{let a=e[o],l=a.getAttribute(s),d=l?l.match(vh):null;if(d){let h=r.get(a);h||(h=[],r.set(a,h)),h.push({name:s,value:d[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,r]=this._splitIconName(t);e&&(this._svgNamespace=e),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,e).pipe(xt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${e}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=k({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,r){e&2&&(X("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Gi(r.color?"mat-"+r.color:""),W("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Q],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ph,decls:1,vars:0,template:function(e,r){e&1&&(nt(),T(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),wc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[G]})}return i})();var Cc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[G]})}return i})();var xc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[G]})}return i})();var yh=["*"],wh=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Ch=["unscopedContent"],xh=["text"],kh=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Sh=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Rh=new b("ListOption"),Ro=(()=>{class i{_elementRef=c(w);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return i})(),Mh=(()=>{class i{_elementRef=c(w);constructor(){}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return i})(),Eh=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return i})(),kc=(()=>{class i{_listOption=c(Rh,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,hostVars:4,hostBindings:function(e,r){e&2&&W("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return i})(),Ih=(()=>{class i extends kc{static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275dir=E({type:i,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ht]})}return i})(),Mo=(()=>{class i extends kc{static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275dir=E({type:i,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ht]})}return i})(),Dh=new b("MAT_LIST_CONFIG"),So=(()=>{class i{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=wt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(wt(t))}_disabled=y(!1);_defaultOptions=c(Dh,{optional:!0});static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,hostVars:1,hostBindings:function(e,r){e&2&&X("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return i})(),Oh=(()=>{class i{_elementRef=c(w);_ngZone=c(x);_listBase=c(So,{optional:!0});_platform=c(V);_hostElement;_isButtonElement;_noopAnimations=Zt();_avatars;_icons;set lines(t){this._explicitLines=Xt(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=wt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(wt(t))}_disabled=y(!1);_subscriptions=new tt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){c(At).load(Un);let t=c(vo,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Pi(this,this._ngZone,this._hostElement,this._platform,c(P)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Jt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||i)};static \u0275dir=E({type:i,contentQueries:function(e,r,o){if(e&1&&Ut(o,Ih,4)(o,Mo,4),e&2){let s;U(s=z())&&(r._avatars=s),U(s=z())&&(r._icons=s)}},hostVars:4,hostBindings:function(e,r){e&2&&(X("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),W("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return i})();var Sc=(()=>{class i extends Oh{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=wt(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,r,o){if(e&1&&Ut(o,Mh,5)(o,Ro,5)(o,Eh,5),e&2){let s;U(s=z())&&(r._lines=s),U(s=z())&&(r._titles=s),U(s=z())&&(r._meta=s)}},viewQuery:function(e,r){if(e&1&&re(Ch,5)(xh,5),e&2){let o;U(o=z())&&(r._unscopedContent=o.first),U(o=z())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,r){e&2&&(X("aria-current",r._getAriaCurrent()),W("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ht],ngContentSelectors:Sh,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,r){e&1&&(nt(kh),T(0),L(1,"span",1),T(2,1),T(3,2),L(4,"span",2,0),_t("cdkObserveContent",function(){return r._updateItemLines(!0)}),T(6,3),j()(),T(7,4),T(8,5),ut(9,"div",3))},dependencies:[Da],encapsulation:2,changeDetection:0})}return i})();var Rc=(()=>{class i extends So{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(r){return(t||(t=at(i)))(r||i)}})();static \u0275cmp=k({type:i,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[Et([{provide:So,useExisting:i}]),ht],ngContentSelectors:yh,decls:1,vars:0,template:function(e,r){e&1&&(nt(),T(0))},styles:[wh],encapsulation:2,changeDetection:0})}return i})();var Mc=(()=>{class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=M({type:i});static \u0275inj=R({imports:[Oa,Zn,xc,G,Cc]})}return i})();var Th=()=>["/tacitus-card-printer"];function Ph(i,n){i&1&&(L(0,"span",8),Le(1," Tools "),ut(2,"mat-icon",14),j())}function Nh(i,n){i&1&&ut(0,"mat-icon",9)}function Lh(i,n){i&1&&(L(0,"span",8),Le(1,"Sinum Navigator"),j())}function Fh(i,n){i&1&&(L(0,"span",8),Le(1,"Proxy Printer"),j())}var tr=class i{title=y("haaly-toolbox");darkMode=y(!1);isSidebarOpen=y(!0);toggleSidebar(){this.isSidebarOpen.update(n=>!n)}ngOnInit(){let n=localStorage.getItem("theme");n?this.darkMode.set(n==="dark"):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&this.darkMode.set(!0),this.applyTheme()}toggleDarkMode(){this.darkMode.update(n=>!n),this.applyTheme()}applyTheme(){let n="dark",t=this.darkMode()?"dark":"light",e=document.body.classList.contains(n);this.darkMode()&&!e?document.body.classList.add(n):!this.darkMode()&&e&&document.body.classList.remove(n),localStorage.setItem("theme",t)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["app-root"]],decls:24,vars:9,consts:[["mainMenu","matMenu"],[1,"toolbox-header"],[1,"theme-toggle"],["matButton","","title","Main menu",3,"matMenuTriggerFor"],["aria-label","menu","fontIcon","more_vert"],["mat-menu-item","",3,"click"],["mode","side","opened","",1,"toolbox-sidenav"],[1,"toolbox-nav-header",3,"click"],["matListItemTitle",""],["matListItemIcon","","fontIcon","keyboard_double_arrow_right"],["matListItemIcon","","fontIcon","assistant_navigation","aria-label","Sinum Navigator"],["mat-list-item","","routerLinkActive","active-link",3,"routerLink"],["matListItemIcon","","fontIcon","print","aria-label","Proxy Printer"],[1,"toolbox-content"],["fontIcon","keyboard_double_arrow_left",1,"collapse-icon"]],template:function(t,e){if(t&1&&(L(0,"div",1)(1,"h1"),Le(2,"Haaly's Toolbox"),j(),L(3,"div",2)(4,"button",3),ut(5,"mat-icon",4),j(),L(6,"mat-menu",null,0)(8,"button",5),_t("click",function(){return e.toggleDarkMode()}),Le(9),j()()()(),L(10,"mat-sidenav-container")(11,"mat-sidenav",6)(12,"mat-nav-list")(13,"mat-list-item",7),_t("click",function(){return e.toggleSidebar()}),St(14,Ph,3,0,"span",8)(15,Nh,1,0,"mat-icon",9),j(),L(16,"mat-list-item"),ut(17,"mat-icon",10),St(18,Lh,2,0,"span",8),j(),L(19,"a",11),ut(20,"mat-icon",12),St(21,Fh,2,0,"span",8),j()()(),L(22,"mat-sidenav-content",13),ut(23,"router-outlet"),j()()),t&2){let r=ur(7);it(4),Ne("matMenuTriggerFor",r),it(5),Jo(" ",e.darkMode()?"Light mode":"Dark mode"," "),it(2),fe("width",e.isSidebarOpen()?15:6,"rem"),it(3),Rt(e.isSidebarOpen()?14:15),it(4),Rt(e.isSidebarOpen()?18:-1),it(),Ne("routerLink",ts(8,Th)),it(2),Rt(e.isSidebarOpen()?21:-1)}},dependencies:[ki,Gr,Xe,$r,ja,uo,Ba,Bn,mc,oi,Li,uc,wc,yc,Mc,Rc,Sc,Mo,Ro,cs],styles:[".toolbox-header[_ngcontent-%COMP%]{background-color:var(--header-bg);border-bottom:1px solid var(--border-color);padding:1rem;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 4px #0000001a}.toolbox-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;color:var(--text-primary);font-size:1.5rem}.toolbox-sidenav[_ngcontent-%COMP%]{background-color:var(--sidenav-bg)!important;border-right:1px solid var(--border-color);padding:1rem}.toolbox-sidenav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-primary);margin:.5rem 0;padding:.5rem;cursor:pointer;border-radius:4px}.toolbox-sidenav[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{background-color:var(--bg-secondary)}.toolbox-content[_ngcontent-%COMP%]{min-height:calc(100vh - 4rem);background-color:var(--bg-primary);padding:2rem}.toolbox-content[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{color:var(--text-primary)}.theme-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;cursor:pointer}.theme-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;font-size:1.5rem;padding:.25rem;color:var(--text-primary)}.theme-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:.7}.toolbox-nav-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.toolbox-nav-header[_ngcontent-%COMP%]{background-color:var(--mat-sys-inverse-primary);border-radius:1.5rem!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}"]})};ds(tr,va).catch(i=>console.error(i));
