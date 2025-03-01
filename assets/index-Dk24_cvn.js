import{H as kt,g as vt,d as _t,a as bt,w as M,n as X}from"./index-B-bTPAo1.js";import{l as Oe,b as Te}from"./index-B-bTPAo1.js";import{O as S,P as wt,Q as $t,S as zt}from"./app-vjFV_IuD.js";class Y extends Map{constructor(t,e=St){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(const[n,r]of t)this.set(n,r)}get(t){return super.get(G(this,t))}has(t){return super.has(G(this,t))}set(t,e){return super.set(Et(this,t),e)}delete(t){return super.delete(Ct(this,t))}}function G({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):e}function Et({_intern:i,_key:t},e){const n=t(e);return i.has(n)?i.get(n):(i.set(n,e),e)}function Ct({_intern:i,_key:t},e){const n=t(e);return i.has(n)&&(e=i.get(n),i.delete(n)),e}function St(i){return i!==null&&typeof i=="object"?i.valueOf():i}function J(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e<n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e<r||e===void 0&&r>=r)&&(e=r)}return e}function U(i,t){let e;if(t===void 0)for(const n of i)n!=null&&(e>n||e===void 0&&n>=n)&&(e=n);else{let n=-1;for(let r of i)(r=t(r,++n,i))!=null&&(e>r||e===void 0&&r>=r)&&(e=r)}return e}function Mt(i,t){let e,n=-1,r=-1;if(t===void 0)for(const s of i)++r,s!=null&&(e>s||e===void 0&&s>=s)&&(e=s,n=r);else for(let s of i)(s=t(s,++r,i))!=null&&(e>s||e===void 0&&s>=s)&&(e=s,n=r);return n}const B=Math.PI,P=2*B,z=1e-6,Xt=P-z;function nt(i){this._+=i[0];for(let t=1,e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function At(i){let t=Math.floor(i);if(!(t>=0))throw new Error(`invalid digits: ${i}`);if(t>15)return nt;const e=10**t;return function(n){this._+=n[0];for(let r=1,s=n.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+n[r]}}class Rt{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?nt:At(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,r){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(t,e,n,r,s,l){this._append`C${+t},${+e},${+n},${+r},${this._x1=+s},${this._y1=+l}`}arcTo(t,e,n,r,s){if(t=+t,e=+e,n=+n,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let l=this._x1,o=this._y1,h=n-t,d=r-e,c=l-t,u=o-e,f=c*c+u*u;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(f>z)if(!(Math.abs(u*h-d*c)>z)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let g=n-l,m=r-o,x=h*h+d*d,k=g*g+m*m,v=Math.sqrt(x),b=Math.sqrt(f),C=s*Math.tan((B-Math.acos((x+f-k)/(2*v*b)))/2),w=C/b,$=C/v;Math.abs(w-1)>z&&this._append`L${t+w*c},${e+w*u}`,this._append`A${s},${s},0,0,${+(u*g>c*m)},${this._x1=t+$*h},${this._y1=e+$*d}`}}arc(t,e,n,r,s,l){if(t=+t,e=+e,n=+n,l=!!l,n<0)throw new Error(`negative radius: ${n}`);let o=n*Math.cos(r),h=n*Math.sin(r),d=t+o,c=e+h,u=1^l,f=l?r-s:s-r;this._x1===null?this._append`M${d},${c}`:(Math.abs(this._x1-d)>z||Math.abs(this._y1-c)>z)&&this._append`L${d},${c}`,n&&(f<0&&(f=f%P+P),f>Xt?this._append`A${n},${n},0,1,${u},${t-o},${e-h}A${n},${n},0,1,${u},${this._x1=d},${this._y1=c}`:f>z&&this._append`A${n},${n},0,${+(f>=B)},${u},${this._x1=t+n*Math.cos(s)},${this._y1=e+n*Math.sin(s)}`)}rect(t,e,n,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}}function jt(i,t){switch(arguments.length){case 0:break;case 1:this.range(i);break;default:this.range(t).domain(i);break}return this}const tt=Symbol("implicit");function D(){var i=new Y,t=[],e=[],n=tt;function r(s){let l=i.get(s);if(l===void 0){if(n!==tt)return n;i.set(s,l=t.push(s)-1)}return e[l%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],i=new Y;for(const l of s)i.has(l)||i.set(l,t.push(l)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(n=s,r):n},r.copy=function(){return D(t,e).unknown(n)},jt.apply(r,arguments),r}function Ot(i){for(var t=i.length/6|0,e=new Array(t),n=0;n<t;)e[n]="#"+i.slice(n*6,++n*6);return e}const Tt=Ot("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");function et(i){return function(){return i}}function Ht(i){let t=3;return i.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const n=Math.floor(e);if(!(n>=0))throw new RangeError(`invalid digits: ${e}`);t=n}return i},()=>new Rt(t)}var Bt=Array.prototype.slice;function Pt(i){return i[0]}function Dt(i){return i[1]}class Lt{constructor(t,e){this._context=t,this._x=e}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,e){switch(t=+t,e=+e,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,e,t,e):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+e)/2,t,this._y0,t,e);break}}this._x0=t,this._y0=e}}function Wt(i){return new Lt(i,!0)}function Ft(i){return i.source}function Nt(i){return i.target}function It(i){let t=Ft,e=Nt,n=Pt,r=Dt,s=null,l=null,o=Ht(h);function h(){let d;const c=Bt.call(arguments),u=t.apply(this,c),f=e.apply(this,c);if(s==null&&(l=i(d=o())),l.lineStart(),c[0]=u,l.point(+n.apply(this,c),+r.apply(this,c)),c[0]=f,l.point(+n.apply(this,c),+r.apply(this,c)),l.lineEnd(),d)return l=null,d+""||null}return h.source=function(d){return arguments.length?(t=d,h):t},h.target=function(d){return arguments.length?(e=d,h):e},h.x=function(d){return arguments.length?(n=typeof d=="function"?d:et(+d),h):n},h.y=function(d){return arguments.length?(r=typeof d=="function"?d:et(+d),h):r},h.context=function(d){return arguments.length?(d==null?s=l=null:l=i(s=d),h):s},h}function Vt(){return It(Wt)}const rt=typeof navigator<"u"&&navigator.userAgent.includes("Macintosh"),qt=D(Tt),at=(i=1,t=3,e=2)=>n=>i+t/e**n.state.depth,st={autoFit:!1,duration:500,embedGlobalCSS:!0,fitRatio:.95,maxInitialScale:2,scrollForPan:rt,initialExpandLevel:-1,zoom:!0,pan:!0,toggleRecursively:!1,color:i=>{var t;return qt(`${((t=i.state)==null?void 0:t.path)||""}`)},lineWidth:at(),maxWidth:0,nodeMinHeight:16,paddingX:8,spacingHorizontal:80,spacingVertical:5};function Xe(i){const t={},e={...i},{color:n,colorFreezeLevel:r,lineWidth:s}=e;if((n==null?void 0:n.length)===1){const l=n[0];t.color=()=>l}else if(n!=null&&n.length){const l=D(n);t.color=o=>l(`${o.state.path}`)}if(r){const l=t.color||st.color;t.color=o=>(o={...o,state:{...o.state,path:o.state.path.split(".").slice(0,r).join(".")}},l(o))}if(s){const l=Array.isArray(s)?s:[s,0,1];t.lineWidth=at(...l)}return["duration","fitRatio","initialExpandLevel","maxInitialScale","maxWidth","nodeMinHeight","paddingX","spacingHorizontal","spacingVertical"].forEach(l=>{const o=e[l];typeof o=="number"&&(t[l]=o)}),["zoom","pan"].forEach(l=>{const o=e[l];o!=null&&(t[l]=!!o)}),t}function Kt(i){let t=0;for(let e=0;e<i.length;e++)t=(t<<5)-t+i.charCodeAt(e)|0;return(t>>>0).toString(36)}function _(i){if(typeof i=="string"){const e=i;i=n=>n.matches(e)}const t=i;return function(){let e=Array.from(this.childNodes);return t&&(e=e.filter(n=>t(n))),e}}function Zt(i){var t=0,e=i.children,n=e&&e.length;if(!n)t=1;else for(;--n>=0;)t+=e[n].value;i.value=t}function Qt(){return this.eachAfter(Zt)}function Yt(i){var t=this,e,n=[t],r,s,l;do for(e=n.reverse(),n=[];t=e.pop();)if(i(t),r=t.children,r)for(s=0,l=r.length;s<l;++s)n.push(r[s]);while(n.length);return this}function Gt(i){for(var t=this,e=[t],n,r;t=e.pop();)if(i(t),n=t.children,n)for(r=n.length-1;r>=0;--r)e.push(n[r]);return this}function Jt(i){for(var t=this,e=[t],n=[],r,s,l;t=e.pop();)if(n.push(t),r=t.children,r)for(s=0,l=r.length;s<l;++s)e.push(r[s]);for(;t=n.pop();)i(t);return this}function Ut(i){return this.eachAfter(function(t){for(var e=+i(t.data)||0,n=t.children,r=n&&n.length;--r>=0;)e+=n[r].value;t.value=e})}function te(i){return this.eachBefore(function(t){t.children&&t.children.sort(i)})}function ee(i){for(var t=this,e=ie(t,i),n=[t];t!==e;)t=t.parent,n.push(t);for(var r=n.length;i!==e;)n.splice(r,0,i),i=i.parent;return n}function ie(i,t){if(i===t)return i;var e=i.ancestors(),n=t.ancestors(),r=null;for(i=e.pop(),t=n.pop();i===t;)r=i,i=e.pop(),t=n.pop();return r}function ne(){for(var i=this,t=[i];i=i.parent;)t.push(i);return t}function re(){var i=[];return this.each(function(t){i.push(t)}),i}function ae(){var i=[];return this.eachBefore(function(t){t.children||i.push(t)}),i}function se(){var i=this,t=[];return i.each(function(e){e!==i&&t.push({source:e.parent,target:e})}),t}function L(i,t){var e=new A(i),n=+i.value&&(e.value=i.value),r,s=[e],l,o,h,d;for(t==null&&(t=le);r=s.pop();)if(n&&(r.value=+r.data.value),(o=t(r.data))&&(d=o.length))for(r.children=new Array(d),h=d-1;h>=0;--h)s.push(l=r.children[h]=new A(o[h])),l.parent=r,l.depth=r.depth+1;return e.eachBefore(ce)}function oe(){return L(this).eachBefore(he)}function le(i){return i.children}function he(i){i.data=i.data.data}function ce(i){var t=0;do i.height=t;while((i=i.parent)&&i.height<++t)}function A(i){this.data=i,this.depth=this.height=0,this.parent=null}A.prototype=L.prototype={constructor:A,count:Qt,each:Yt,eachAfter:Jt,eachBefore:Gt,sum:Ut,sort:te,path:ee,ancestors:ne,descendants:re,leaves:ae,links:se,copy:oe};const de="2.1.2",ue={version:de},{version:pe}=ue,fe=Object.freeze({children:i=>i.children,nodeSize:i=>i.data.size,spacing:0});function lt(i){const t=Object.assign({},fe,i);function e(o){const h=t[o];return typeof h=="function"?h:()=>h}function n(o){const h=l(s(),o,d=>d.children);return h.update(),h.data}function r(){const o=e("nodeSize"),h=e("spacing");return class ot extends L.prototype.constructor{constructor(c){super(c)}copy(){const c=l(this.constructor,this,u=>u.children);return c.each(u=>u.data=u.data.data),c}get size(){return o(this)}spacing(c){return h(this,c)}get nodes(){return this.descendants()}get xSize(){return this.size[0]}get ySize(){return this.size[1]}get top(){return this.y}get bottom(){return this.y+this.ySize}get left(){return this.x-this.xSize/2}get right(){return this.x+this.xSize/2}get root(){const c=this.ancestors();return c[c.length-1]}get numChildren(){return this.hasChildren?this.children.length:0}get hasChildren(){return!this.noChildren}get noChildren(){return this.children===null}get firstChild(){return this.hasChildren?this.children[0]:null}get lastChild(){return this.hasChildren?this.children[this.numChildren-1]:null}get extents(){return(this.children||[]).reduce((c,u)=>ot.maxExtents(c,u.extents),this.nodeExtents)}get nodeExtents(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}static maxExtents(c,u){return{top:Math.min(c.top,u.top),bottom:Math.max(c.bottom,u.bottom),left:Math.min(c.left,u.left),right:Math.max(c.right,u.right)}}}}function s(){const o=r(),h=e("nodeSize"),d=e("spacing");return class extends o{constructor(c){super(c),Object.assign(this,{x:0,y:0,relX:0,prelim:0,shift:0,change:0,lExt:this,lExtRelX:0,lThr:null,rExt:this,rExtRelX:0,rThr:null})}get size(){return h(this.data)}spacing(c){return d(this.data,c.data)}get x(){return this.data.x}set x(c){this.data.x=c}get y(){return this.data.y}set y(c){this.data.y=c}update(){return ht(this),ct(this),this}}}function l(o,h,d){const c=(u,f)=>{const g=new o(u);Object.assign(g,{parent:f,depth:f===null?0:f.depth+1,height:0,length:1});const m=d(u)||[];return g.children=m.length===0?null:m.map(x=>c(x,g)),g.children&&Object.assign(g,g.children.reduce((x,k)=>({height:Math.max(x.height,k.height+1),length:x.length+k.length}),g)),g};return c(h,null)}return Object.assign(n,{nodeSize(o){return arguments.length?(t.nodeSize=o,n):t.nodeSize},spacing(o){return arguments.length?(t.spacing=o,n):t.spacing},children(o){return arguments.length?(t.children=o,n):t.children},hierarchy(o,h){const d=typeof h>"u"?t.children:h;return l(r(),o,d)},dump(o){const h=e("nodeSize"),d=c=>u=>{const f=c+"  ",g=c+"    ",{x:m,y:x}=u,k=h(u),v=u.children||[],b=v.length===0?" ":`,${f}children: [${g}${v.map(d(g)).join(g)}${f}],${c}`;return`{ size: [${k.join(", ")}],${f}x: ${m}, y: ${x}${b}},`};return d(`
`)(o)}}),n}lt.version=pe;const ht=(i,t=0)=>(i.y=t,(i.children||[]).reduce((e,n)=>{const[r,s]=e;ht(n,i.y+i.ySize);const l=(r===0?n.lExt:n.rExt).bottom;r!==0&&me(i,r,s);const o=$e(l,r,s);return[r+1,o]},[0,null]),ge(i),we(i),i),ct=(i,t,e)=>{typeof t>"u"&&(t=-i.relX-i.prelim,e=0);const n=t+i.relX;return i.relX=n+i.prelim-e,i.prelim=0,i.x=e+i.relX,(i.children||[]).forEach(r=>ct(r,n,i.x)),i},ge=i=>{(i.children||[]).reduce((t,e)=>{const[n,r]=t,s=n+e.shift,l=r+s+e.change;return e.relX+=l,[s,l]},[0,0])},me=(i,t,e)=>{const n=i.children[t-1],r=i.children[t];let s=n,l=n.relX,o=r,h=r.relX,d=!0;for(;s&&o;){s.bottom>e.lowY&&(e=e.next);const c=l+s.prelim-(h+o.prelim)+s.xSize/2+o.xSize/2+s.spacing(o);(c>0||c<0&&d)&&(h+=c,xe(r,c),ye(i,t,e.index,c)),d=!1;const u=s.bottom,f=o.bottom;u<=f&&(s=ve(s),s&&(l+=s.relX)),u>=f&&(o=ke(o),o&&(h+=o.relX))}!s&&o?_e(i,t,o,h):s&&!o&&be(i,t,s,l)},xe=(i,t)=>{i.relX+=t,i.lExtRelX+=t,i.rExtRelX+=t},ye=(i,t,e,n)=>{const r=i.children[t],s=t-e;if(s>1){const l=n/s;i.children[e+1].shift+=l,r.shift-=l,r.change-=n-l}},ke=i=>i.hasChildren?i.firstChild:i.lThr,ve=i=>i.hasChildren?i.lastChild:i.rThr,_e=(i,t,e,n)=>{const r=i.firstChild,s=r.lExt,l=i.children[t];s.lThr=e;const o=n-e.relX-r.lExtRelX;s.relX+=o,s.prelim-=o,r.lExt=l.lExt,r.lExtRelX=l.lExtRelX},be=(i,t,e,n)=>{const r=i.children[t],s=r.rExt,l=i.children[t-1];s.rThr=e;const o=n-e.relX-r.rExtRelX;s.relX+=o,s.prelim-=o,r.rExt=l.rExt,r.rExtRelX=l.rExtRelX},we=i=>{if(i.hasChildren){const t=i.firstChild,e=i.lastChild,n=(t.prelim+t.relX-t.xSize/2+e.relX+e.prelim+e.xSize/2)/2;Object.assign(i,{prelim:n,lExt:t.lExt,lExtRelX:t.lExtRelX,rExt:e.rExt,rExtRelX:e.rExtRelX})}},$e=(i,t,e)=>{for(;e!==null&&i>=e.lowY;)e=e.next;return{lowY:i,index:t,next:e}},dt=".markmap{--markmap-max-width: 9999px;--markmap-a-color: #0097e6;--markmap-a-hover-color: #00a8ff;--markmap-code-bg: #f0f0f0;--markmap-code-color: #555;--markmap-highlight-bg: #ffeaa7;--markmap-table-border: 1px solid currentColor;--markmap-font: 300 16px/20px sans-serif;--markmap-circle-open-bg: #fff;--markmap-text-color: #333;--markmap-highlight-node-bg: #ff02;font:var(--markmap-font);color:var(--markmap-text-color)}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign p{margin:0}.markmap-foreign a{color:var(--markmap-a-color)}.markmap-foreign a:hover{color:var(--markmap-a-hover-color)}.markmap-foreign code{padding:.25em;font-size:calc(1em - 2px);color:var(--markmap-code-color);background-color:var(--markmap-code-bg);border-radius:2px}.markmap-foreign pre{margin:0}.markmap-foreign pre>code{display:block}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:700}.markmap-foreign mark{background:var(--markmap-highlight-bg)}.markmap-foreign table,.markmap-foreign th,.markmap-foreign td{border-collapse:collapse;border:var(--markmap-table-border)}.markmap-foreign img{display:inline-block}.markmap-foreign svg{fill:currentColor}.markmap-foreign>div{width:var(--markmap-max-width);text-align:left}.markmap-foreign>div>div{display:inline-block}.markmap-highlight rect{fill:var(--markmap-highlight-node-bg)}.markmap-dark .markmap{--markmap-code-bg: #1a1b26;--markmap-code-color: #ddd;--markmap-circle-open-bg: #444;--markmap-text-color: #eee}",Ae=dt,O="g.markmap-node",ze="path.markmap-link",Ee="g.markmap-highlight",T=Vt();function it(i,t){const e=Mt(i,t);return i[e]}function H(i){i.stopPropagation()}const Ce=new kt;class ut{constructor(t,e){this.options={...st},this._disposeList=[],this.handleZoom=n=>{const{transform:r}=n;this.g.attr("transform",r)},this.handlePan=n=>{n.preventDefault();const r=S(this.svg.node()),s=r.translate(-n.deltaX/r.k,-n.deltaY/r.k);this.svg.call(this.zoom.transform,s)},this.handleClick=(n,r)=>{let s=this.options.toggleRecursively;(rt?n.metaKey:n.ctrlKey)&&(s=!s),this.toggleNode(r,s)},this.ensureView=this.ensureVisible,this.svg=t.datum?t:wt(t),this.styleNode=this.svg.append("style"),this.zoom=$t().filter(n=>this.options.scrollForPan&&n.type==="wheel"?n.ctrlKey&&!n.button:(!n.ctrlKey||n.type==="wheel")&&!n.button).on("zoom",this.handleZoom),this.setOptions(e),this.state={id:this.options.id||this.svg.attr("id")||vt(),rect:{x1:0,y1:0,x2:0,y2:0}},this.g=this.svg.append("g"),this.g.append("g").attr("class","markmap-highlight"),this._observer=new ResizeObserver(_t(()=>{this.renderData()},100)),this._disposeList.push(Ce.tap(()=>{this.setData()}),()=>this._observer.disconnect())}getStyleContent(){const{style:t}=this.options,{id:e}=this.state,n=typeof t=="function"?t(e):"";return[this.options.embedGlobalCSS&&dt,n].filter(Boolean).join(`
`)}updateStyle(){this.svg.attr("class",bt(this.svg.attr("class"),"markmap",this.state.id));const t=this.getStyleContent();this.styleNode.text(t)}async toggleNode(t,e=!1){var n,r;const s=(n=t.payload)!=null&&n.fold?0:1;e?M(t,(l,o)=>{l.payload={...l.payload,fold:s},o()}):t.payload={...t.payload,fold:(r=t.payload)!=null&&r.fold?0:1},await this.renderData(t)}_initializeData(t){let e=0;const{color:n,initialExpandLevel:r}=this.options;let s=0,l=0;return M(t,(o,h,d)=>{var c,u,f,g;l+=1,o.children=(c=o.children)==null?void 0:c.map(x=>({...x})),e+=1,o.state={...o.state,depth:l,id:e,rect:{x:0,y:0,width:0,height:0},size:[0,0]},o.state.key=[(u=d==null?void 0:d.state)==null?void 0:u.id,o.state.id].filter(Boolean).join(".")+Kt(o.content),o.state.path=[(f=d==null?void 0:d.state)==null?void 0:f.path,o.state.id].filter(Boolean).join("."),n(o);const m=((g=o.payload)==null?void 0:g.fold)===2;m?s+=1:(s||r>=0&&o.state.depth>=r)&&(o.payload={...o.payload,fold:1}),h(),m&&(s-=1),l-=1}),t}_relayout(){if(!this.state.data)return;this.g.selectAll(_(O)).selectAll(_("foreignObject")).each(function(h){var d;const c=(d=this.firstChild)==null?void 0:d.firstChild,u=[c.scrollWidth,c.scrollHeight];h.state.size=u});const{lineWidth:t,paddingX:e,spacingHorizontal:n,spacingVertical:r}=this.options,s=lt({}).children(h=>{var d;if(!((d=h.payload)!=null&&d.fold))return h.children}).nodeSize(h=>{const[d,c]=h.data.state.size;return[c,d+(d?e*2:0)+n]}).spacing((h,d)=>(h.parent===d.parent?r:r*2)+t(h.data)),l=s.hierarchy(this.state.data);s(l);const o=l.descendants();o.forEach(h=>{const d=h.data;d.state.rect={x:h.y,y:h.x-h.xSize/2,width:h.ySize-n,height:h.xSize}}),this.state.rect={x1:U(o,h=>h.data.state.rect.x)||0,y1:U(o,h=>h.data.state.rect.y)||0,x2:J(o,h=>h.data.state.rect.x+h.data.state.rect.width)||0,y2:J(o,h=>h.data.state.rect.y+h.data.state.rect.height)||0}}setOptions(t){this.options={...this.options,...t},this.options.zoom?this.svg.call(this.zoom):this.svg.on(".zoom",null),this.options.pan?this.svg.on("wheel",this.handlePan):this.svg.on("wheel",null)}async setData(t,e){e&&this.setOptions(e),t&&(this.state.data=this._initializeData(t)),this.state.data&&(this.updateStyle(),await this.renderData())}async setHighlight(t){this.state.highlight=t||void 0,await this.renderData()}_getHighlightRect(t){const e=this.svg.node(),n=4/S(e).k,r={...t.state.rect};return r.x-=n,r.y-=n,r.width+=2*n,r.height+=2*n,r}async renderData(t){const{paddingX:e,autoFit:n,color:r,maxWidth:s,lineWidth:l}=this.options,o=this.state.data;if(!o)return;const h={},d={},c=[];M(o,(a,p,y)=>{var E;(E=a.payload)!=null&&E.fold||p(),h[a.state.id]=a,y&&(d[a.state.id]=y.state.id),c.push(a)});const u={},f={},g=a=>{!a||u[a.state.id]||M(a,(p,y)=>{u[p.state.id]=a.state.id,y()})},m=a=>f[u[a.state.id]]||o.state.rect,x=a=>(h[u[a.state.id]]||o).state.rect;f[o.state.id]=o.state.rect,t&&g(t);let{highlight:k}=this.state;k&&!h[k.state.id]&&(k=void 0);let v=this.g.selectAll(_(Ee)).selectAll(_("rect")).data(k?[this._getHighlightRect(k)]:[]).join("rect").attr("x",a=>a.x).attr("y",a=>a.y).attr("width",a=>a.width).attr("height",a=>a.height);const b=this.g.selectAll(_(O)).each(a=>{f[a.state.id]=a.state.rect}).data(c,a=>a.state.key),C=b.enter().append("g").attr("data-depth",a=>a.state.depth).attr("data-path",a=>a.state.path).each(a=>{g(h[d[a.state.id]])}),w=b.exit().each(a=>{g(h[d[a.state.id]])}),$=b.merge(C).attr("class",a=>{var p;return["markmap-node",((p=a.payload)==null?void 0:p.fold)&&"markmap-fold"].filter(Boolean).join(" ")}),W=$.selectAll(_("line")).data(a=>[a],a=>a.state.key),F=W.enter().append("line").attr("stroke",a=>r(a)).attr("stroke-width",0),N=W.merge(F),I=$.selectAll(_("circle")).data(a=>{var p;return(p=a.children)!=null&&p.length?[a]:[]},a=>a.state.key),V=I.enter().append("circle").attr("stroke-width",0).attr("r",0).on("click",(a,p)=>this.handleClick(a,p)).on("mousedown",H).merge(I).attr("stroke",a=>r(a)).attr("fill",a=>{var p;return(p=a.payload)!=null&&p.fold&&a.children?r(a):"var(--markmap-circle-open-bg)"}),q=this._observer,K=$.selectAll(_("foreignObject")).data(a=>[a],a=>a.state.key),R=K.enter().append("foreignObject").attr("class","markmap-foreign").attr("x",e).attr("y",0).style("opacity",0).on("mousedown",H).on("dblclick",H);R.append("xhtml:div").append("xhtml:div").html(a=>a.content).attr("xmlns","http://www.w3.org/1999/xhtml"),R.each(function(){var a;const p=(a=this.firstChild)==null?void 0:a.firstChild;q.observe(p)});const Z=w.selectAll(_("foreignObject"));Z.each(function(){var a;const p=(a=this.firstChild)==null?void 0:a.firstChild;q.unobserve(p)});const Q=R.merge(K),pt=c.flatMap(a=>{var p;return(p=a.payload)!=null&&p.fold?[]:a.children.map(y=>({source:a,target:y}))}),j=this.g.selectAll(_(ze)).data(pt,a=>a.target.state.key),ft=j.exit(),gt=j.enter().insert("path","g").attr("class","markmap-link").attr("data-depth",a=>a.target.state.depth).attr("data-path",a=>a.target.state.path).attr("d",a=>{const p=m(a.target),y=[p.x+p.width,p.y+p.height];return T({source:y,target:y})}).attr("stroke-width",0).merge(j);this.svg.style("--markmap-max-width",s?`${s}px`:null),await new Promise(requestAnimationFrame),this._relayout(),v=v.data(k?[this._getHighlightRect(k)]:[]).join("rect"),this.transition(v).attr("x",a=>a.x).attr("y",a=>a.y).attr("width",a=>a.width).attr("height",a=>a.height),C.attr("transform",a=>{const p=m(a);return`translate(${p.x+p.width-a.state.rect.width},${p.y+p.height-a.state.rect.height})`}),this.transition(w).attr("transform",a=>{const p=x(a),y=p.x+p.width-a.state.rect.width,E=p.y+p.height-a.state.rect.height;return`translate(${y},${E})`}).remove(),this.transition($).attr("transform",a=>`translate(${a.state.rect.x},${a.state.rect.y})`);const mt=w.selectAll(_("line"));this.transition(mt).attr("x1",a=>a.state.rect.width).attr("stroke-width",0),F.attr("x1",a=>a.state.rect.width).attr("x2",a=>a.state.rect.width),N.attr("y1",a=>a.state.rect.height+l(a)/2).attr("y2",a=>a.state.rect.height+l(a)/2),this.transition(N).attr("x1",-1).attr("x2",a=>a.state.rect.width+2).attr("stroke",a=>r(a)).attr("stroke-width",l);const xt=w.selectAll(_("circle"));this.transition(xt).attr("r",0).attr("stroke-width",0),V.attr("cx",a=>a.state.rect.width).attr("cy",a=>a.state.rect.height+l(a)/2),this.transition(V).attr("r",6).attr("stroke-width","1.5"),this.transition(Z).style("opacity",0),Q.attr("width",a=>Math.max(0,a.state.rect.width-e*2)).attr("height",a=>a.state.rect.height),this.transition(Q).style("opacity",1),this.transition(ft).attr("d",a=>{const p=x(a.target),y=[p.x+p.width,p.y+p.height+l(a.target)/2];return T({source:y,target:y})}).attr("stroke-width",0).remove(),this.transition(gt).attr("stroke",a=>r(a.target)).attr("stroke-width",a=>l(a.target)).attr("d",a=>{const p=a.source,y=a.target,E=[p.state.rect.x+p.state.rect.width,p.state.rect.y+p.state.rect.height+l(p)/2],yt=[y.state.rect.x,y.state.rect.y+y.state.rect.height+l(y)/2];return T({source:E,target:yt})}),n&&this.fit()}transition(t){const{duration:e}=this.options;return t.transition().duration(e)}async fit(t=this.options.maxInitialScale){const e=this.svg.node(),{width:n,height:r}=e.getBoundingClientRect(),{fitRatio:s}=this.options,{x1:l,y1:o,x2:h,y2:d}=this.state.rect,c=h-l,u=d-o,f=Math.min(n/c*s,r/u*s,t),g=zt.translate((n-c*f)/2-l*f,(r-u*f)/2-o*f).scale(f);return this.transition(this.svg).call(this.zoom.transform,g).end().catch(X)}findElement(t){let e;return this.g.selectAll(_(O)).each(function(n){n===t&&(e={data:n,g:this})}),e}async ensureVisible(t,e){var n;const r=(n=this.findElement(t))==null?void 0:n.data;if(!r)return;const s=this.svg.node(),l=s.getBoundingClientRect(),o=S(s),[h,d]=[r.state.rect.x,r.state.rect.x+r.state.rect.width+2].map(v=>v*o.k+o.x),[c,u]=[r.state.rect.y,r.state.rect.y+r.state.rect.height].map(v=>v*o.k+o.y),f={left:0,right:0,top:0,bottom:0,...e},g=[f.left-h,l.width-f.right-d],m=[f.top-c,l.height-f.bottom-u],x=g[0]*g[1]>0?it(g,Math.abs)/o.k:0,k=m[0]*m[1]>0?it(m,Math.abs)/o.k:0;if(x||k){const v=o.translate(x,k);return this.transition(this.svg).call(this.zoom.transform,v).end().catch(X)}}async centerNode(t,e){var n;const r=(n=this.findElement(t))==null?void 0:n.data;if(!r)return;const s=this.svg.node(),l=s.getBoundingClientRect(),o=S(s),h=(r.state.rect.x+r.state.rect.width/2)*o.k+o.x,d=(r.state.rect.y+r.state.rect.height/2)*o.k+o.y,c={left:0,right:0,top:0,bottom:0,...e},u=(c.left+l.width-c.right)/2,f=(c.top+l.height-c.bottom)/2,g=(u-h)/o.k,m=(f-d)/o.k;if(g||m){const x=o.translate(g,m);return this.transition(this.svg).call(this.zoom.transform,x).end().catch(X)}}async rescale(t){const e=this.svg.node(),{width:n,height:r}=e.getBoundingClientRect(),s=n/2,l=r/2,o=S(e),h=o.translate((s-o.x)*(1-t)/o.k,(l-o.y)*(1-t)/o.k).scale(t);return this.transition(this.svg).call(this.zoom.transform,h).end().catch(X)}destroy(){this.svg.on(".zoom",null),this.svg.html(null),this._disposeList.forEach(t=>{t()})}static create(t,e,n=null){const r=new ut(t,e);return n&&r.setData(n).then(()=>{r.fit()}),r}}export{ut as Markmap,_ as childSelector,qt as defaultColorFn,st as defaultOptions,Xe as deriveOptions,Ae as globalCSS,rt as isMacintosh,at as lineWidthFactory,Oe as loadCSS,Te as loadJS,Ce as refreshHook,Kt as simpleHash};
