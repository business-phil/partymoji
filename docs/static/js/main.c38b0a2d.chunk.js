(this.webpackJsonppartymoji=this.webpackJsonppartymoji||[]).push([[0],{346:function(e,a){},348:function(e,a){},361:function(e,a){},372:function(e,a){},373:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(52),o=n.n(i),c=n(20),s=n(5),u=n(438),l=n(454),d=n(424),m=n(427),f=n(443),h=n(446),p=n(455),j=function(e){return{name:e.name,params:e.params,description:e.description,fn:e.fn}},v=n(131),b=function(e){var a=Object(s.a)(e,3),n=a[0],t=a[1],r=a[2],i=function(e){var a=e.toString(16).toUpperCase();return 2===a.length?a:"0"+a};return"#".concat(i(n)).concat(i(t)).concat(i(r))},g=function(e){return[parseInt(e.toUpperCase().substr(1,2),16),parseInt(e.toUpperCase().substr(3,2),16),parseInt(e.toUpperCase().substr(5,2),16),255]},x=function(e){return e[3]<64},O=function(e){return[Math.floor(256*e.int32()),Math.floor(256*e.int32()),Math.floor(256*e.int32()),255]},C=function(e){var a=Object(s.a)(e,3),n=a[0],t=a[1],r=a[2];return Math.round((n+t+r)/3)},w=function(e,a,n){return Math.max(Math.min(e,n),a)},M=function(e){var a=Object(s.a)(e,4),n=a[0],t=a[1],r=a[2],i=a[3];return[w(n,0,255),w(t,0,255),w(r,0,255),w(i,0,255)]},V=[0,0,0,0],y=function(e,a,n){var t=Object(s.a)(e,2),r=t[0],i=t[1],o=Object(s.a)(n,2),c=o[0],u=o[1];if(c<0||c>=r||u<0||u>=i)return V;var l=F(e,c,u);return[a[l],a[l+1],a[l+2],a[l+3]]};function I(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected falsy value";if(!e)throw new v.AssertionError({message:a,actual:e})}var k=function(e,a){return{dimensions:e.dimensions,frames:e.frames.map((function(n,t){return a(n,t,e.frames.length)}))}},S=function(e,a){for(var n=Object(s.a)(e,2),t=n[0],r=n[1],i=new Uint8Array(t*r*4),o=0;o<r;o+=1)for(var c=0;c<t;c+=1){var u=M(a([c,o])),l=F(e,c,o);i[l]=u[0],i[l+1]=u[1],i[l+2]=u[2],i[l+3]=u[3]}return i},P=function(e){return function(a){var n=a.image,t=a.random,r=a.parameters;return k(n,(function(a,i,o){return S(n.dimensions,(function(c){return e({image:n,dimensions:n.dimensions,random:t,parameters:r,coord:c,frameCount:o,frameIndex:i,getSrcPixel:function(e){return y(n.dimensions,a,e)}})}))}))}},F=function(e,a,n){return 4*(a+n*Object(s.a)(e,1)[0])},T=function(e){for(var a=e.image,n=e.newWidth,t=e.newHeight,r=Object(s.a)(a.dimensions,2),i=r[0]/n,o=r[1]/t,c=W({dimensions:[n,t],frameCount:a.frames.length}),u=0;u<c.frames.length;u+=1)for(var l=0;l<t;l+=1)for(var d=0;d<n;d+=1){var m=Math.floor(d*i),f=Math.floor(l*o),h=R({image:a,frameIndex:u,coord:[m,f]});A({image:c,frameIndex:u,color:h,coord:[d,l]})}return c},N=function(e){for(var a=e.image,n=e.newWidth,t=e.newHeight,r=Object(s.a)(a.dimensions,2),i=r[0],o=r[1],c=Math.round((n-i)/2),u=Math.round((t-o)/2),l=W({dimensions:[n,t],frameCount:a.frames.length}),d=0;d<l.frames.length;d+=1)for(var m=0;m<t;m+=1)for(var f=0;f<n;f+=1){var h=f>c&&f<n-c&&m>u&&m<t-u?R({image:a,frameIndex:d,coord:[f-c,m-u]}):V;A({image:l,frameIndex:d,coord:[f,m],color:h})}return l},W=function(e){return{dimensions:e.dimensions,frames:Object(p.a)(0,e.frameCount).map((function(){return new Uint8Array(e.dimensions[0]*e.dimensions[1]*4)}))}},R=function(e){return y(e.image.dimensions,e.image.frames[e.frameIndex],e.coord)},A=function(e){var a=F(e.image.dimensions,e.coord[0],e.coord[1]),n=e.image.frames[e.frameIndex];n[a]=e.color[0],n[a+1]=e.color[1],n[a+2]=e.color[2],n[a+3]=e.color[3]},B=n(28),H=n(434),U=n(439),L=n(442),D=n(1),E=function(e){var a=e.description;return a?Object(D.jsx)(U.a,{title:a,children:Object(D.jsx)(L.a,{fontSize:"small",color:"action",children:"help"})}):null},_=function(e){var a=e.name,n=e.value,t=e.min,r=e.max,i=e.step,o=e.description,c=e.onChange;return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:o})]}),Object(D.jsxs)(d.a,{direction:"row",spacing:2,sx:{paddingLeft:"8px",paddingRight:"8px"},children:[Object(D.jsx)(H.a,{"aria-label":a,value:n,step:i,valueLabelDisplay:"off",getAriaValueText:function(e){return e.toString()},min:t,max:r,onChange:function(e,a){return c({valid:!0,value:a})}}),Object(D.jsx)(f.a,{variant:"body2",children:n})]})]})};function q(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(D.jsx)(_,{name:e.name,value:a.value.valid?a.value.value:void 0,onChange:a.onChange,min:e.min,max:e.max,step:e.step,description:e.description})}}}var G=n(435),J=n(432),z=n(447),X=function(e){var a=e.name,n=e.value,t=e.description,i=e.parse,o=e.onChange,c=r.a.useState(void 0===n?void 0:n.toString()),u=Object(s.a)(c,2),l=u[0],m=u[1],h=r.a.useState(""),p=Object(s.a)(h,2),j=p[0],v=p[1];return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:t})]}),Object(D.jsxs)(G.a,{children:[Object(D.jsx)(J.a,{error:!!j,value:l,onBlur:function(){if(void 0!==l&&(!n||l!==n.toString())){var e=i(l);e.valid?v(""):v(e.reason),o(e)}},onChange:function(e){m(e.target.value)}}),j&&Object(D.jsx)(z.a,{children:j})]})]})},Y=function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){var n=e.min,t=e.max;return Object(D.jsx)(X,{name:e.name,description:e.description,parse:function(e){var a=parseInt(e,10);return isNaN(a)||a.toString()!==e?{valid:!1,reason:"Must be an integer"}:void 0!==n&&a<n?{valid:!1,reason:"Must be greater than or equal to ".concat(n)}:void 0!==t&&a>t?{valid:!1,reason:"Must be less than or equal to ".concat(t)}:{valid:!0,value:a}},onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}},K=j({name:"Adjust Image",description:"Leave a parameter at 0 if you want to not change it",params:[q({name:"Number of Frames",description:"Set how many frames of animation there will be. Leave at 0 to not change the current frame count.",defaultValue:0,min:0,max:60}),Y({name:"Width",description:"Leave at 0 to not change the image",defaultValue:0,min:0}),Y({name:"Height",description:"Leave at 0 to not change the image",defaultValue:0,min:0}),q({name:"Brightness",min:-100,max:100,step:5,defaultValue:0}),q({name:"Contrast",min:-100,max:100,step:5,defaultValue:0})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(n,5),r=t[0],i=t[1],o=t[2],c=t[3],u=t[4],l=0!==r,d=i>0&&o>0,m=i*o>a.dimensions[0]*a.dimensions[1],f=0!==u?Z(a):0,h=a;return l&&r<a.frames.length&&(h=Q(h,r)),d&&!m&&(h=T({image:h,newWidth:i,newHeight:o})),h=k(h,(function(e){return S(h.dimensions,(function(a){var n=y(h.dimensions,e,a);return 0!==c&&(n=ee(n,c)),0!==u&&(n=$(n,f,u)),n}))})),d&&m&&(h=T({image:h,newWidth:i,newHeight:o})),l&&r>a.frames.length&&(h=Q(h,r)),h}}),Q=function(e,a){var n=e.frames;return{dimensions:e.dimensions,frames:Object(p.a)(0,a).map((function(e){return n[e]?n[e]:n[n.length-1]}))}},Z=function(e){for(var a=Object(s.a)(e.dimensions,2),n=a[0],t=a[1],r=0,i=0;i<e.frames.length;i+=1)for(var o=0;o<n;o+=1)for(var c=0;c<t;c+=1){var u=y(e.dimensions,e.frames[i],[o,c]),l=Object(s.a)(u,3),d=l[0],m=l[1],f=l[2],h=B.rgb.hsv(d,m,f);r+=Object(s.a)(h,3)[2]}return r/(e.frames.length*n*t)},$=function(e,a,n){var t=Object(s.a)(e,4),r=t[0],i=t[1],o=t[2],c=t[3],u=B.rgb.hsv(r,i,o),l=Object(s.a)(u,3),d=l[0],m=l[1],f=l[2],h=f+(f-a)*(n/100),p=B.hsv.rgb([d,m,h]),j=Object(s.a)(p,3);return[j[0],j[1],j[2],c]},ee=function(e,a){var n=a/100*255;return M([e[0]+n,e[1]+n,e[2]+n,e[3]])},ae=n(99),ne=n(426),te=n(448),re=n(449),ie=n(450),oe=function(e){var a=e.mainEle,n=e.children,t=r.a.useState(!0),i=Object(s.a)(t,2),o=i[0],c=i[1];return Object(D.jsx)(ne.a,{onClickAway:function(){return c(!0)},children:Object(D.jsxs)(te.a,{children:[Object(D.jsx)(re.a,{onClick:function(){return c(!o)},style:{textTransform:"none"},children:Object(D.jsxs)(d.a,{direction:"row",spacing:4,children:[Object(D.jsx)("div",{children:a}),Object(D.jsx)(L.a,{children:o?"expand_less":"expand_more"})]})}),Object(D.jsx)(ie.a,{in:!o,children:n})]})})},ce=function(e){var a=e.color;return Object(D.jsx)("div",{style:{width:"1.5em",height:"1.5em",backgroundColor:b(a)}})},se=function(e){var a=e.name,n=e.value,t=e.description,r=e.onChange;return Object(D.jsx)(oe,{mainEle:Object(D.jsxs)(d.a,{direction:"row",spacing:4,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:t}),n&&Object(D.jsx)(ce,{color:n})]}),children:Object(D.jsx)(ae.b,{disableAlpha:!0,presetColors:[],color:n?b(n):void 0,onChangeComplete:function(e){return r({valid:!0,value:g(e.hex)})}})})};function ue(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(D.jsx)(se,{name:e.name,value:a.value.valid?a.value.value:void 0,onChange:a.onChange,description:e.description})}}}var le=j({name:"Background Color",description:"Change all transparent pixles to the given color",params:[ue({name:"Color",defaultValue:g("#000000")})],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,1)[0],i=n(a);return x(i)?r:i}))}),de=n(429),me=n(436),fe=function(e){var a=e.name,n=e.options,t=e.value,r=e.description,i=e.onChange;return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:r})]}),Object(D.jsx)(G.a,{children:Object(D.jsx)(de.a,{autoWidth:!0,value:t,onChange:function(e){return i({valid:!0,value:e.target.value})},children:n.map((function(e){return Object(D.jsx)(me.a,{value:e.value,children:e.name},e.value)}))})})]})};function he(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(D.jsx)(fe,{name:e.name,value:a.value.valid?a.value.value:void 0,options:e.options,description:e.description,onChange:a.onChange})}}}var pe=n(19),je=n.n(pe),ve=n(33),be=n(186),ge=n(187),xe=n.n(ge),Oe=n(188),Ce=n.n(Oe),we=n(97),Me=n.n(we),Ve=function(){var e=Object(ve.a)(je.a.mark((function e(a){var n,t,r,i,o,c,s,u,l,d,m,f,h,p,j;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.transformList,t=a.inputDataUrl,r=a.fps,i=a.onImageFinished,o=Me()(t),e.next=4,ke(t);case 4:c=e.sent,s=[],u=c,l=Object(be.a)(n),e.prev=8,l.s();case 10:if((d=l.n()).done){e.next=23;break}return m=d.value,f=m.transform.fn({image:u,parameters:m.params,random:o}),h=Se(f,o),p=ye(f.frames,h),e.next=17,Ie(f.dimensions,p,h,r);case 17:j=e.sent,i(),u=f,s.push({gif:j,width:f.dimensions[0],height:f.dimensions[1]});case 21:e.next=10;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(8),l.e(e.t0);case 28:return e.prev=28,l.f(),e.finish(28);case 31:return e.abrupt("return",s);case 32:case"end":return e.stop()}}),e,null,[[8,25,28,31]])})));return function(a){return e.apply(this,arguments)}}(),ye=function(e,a){return e.map((function(e){for(var n=new Uint8Array(e.length),t=0;t<e.length;t+=4)a&&e[t+3]<128?(n[t]=a[0],n[t+1]=a[1],n[t+2]=a[2],n[t+3]=a[3]):(n[t]=e[t],n[t+1]=e[t+1],n[t+2]=e[t+2],n[t+3]=255);return n}))},Ie=function(){var e=Object(ve.a)(je.a.mark((function e(a,n,t,r){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var i=Object(s.a)(a,2),o=i[0],c=i[1],u=new Ce.a(o,c);if(u.setFrameRate(r),u.setRepeat(0),t){var l=b(t).slice(1);u.setTransparent("0x".concat(l))}u.writeHeader();var d=[];u.on("data",(function(e){d.push(e)})),u.on("end",(function(){var a=URL.createObjectURL(new Blob(d,{type:"image/gif"}));e(a)})),n.forEach((function(e){u.addFrame(e)})),u.finish()})));case 1:case"end":return e.stop()}}),e)})));return function(a,n,t,r){return e.apply(this,arguments)}}(),ke=function(e){return new Promise((function(a,n){return xe()(e,(function(e,t){if(e)return n(e);if(3===t.shape.length)return a({frames:[Uint8Array.from(t.data)],dimensions:[t.shape[0],t.shape[1]]});for(var r=Object(s.a)(t.shape,3),i=r[0],o=r[1],c=r[2],u=o*c*4,l=[],d=0;d<i;d+=1)l.push(t.data.subarray(d*u,(d+1)*u));return a({frames:l,dimensions:[o,c]})}))}))},Se=function(e,a){var n=!1,t=new Set,r=Object(s.a)(e.dimensions,2),i=r[0],o=r[1],c=b([0,255,0,255]);return e.frames.forEach((function(r){for(var s=0;s<o;s+=1)for(var u=0;u<i;u+=1){var l=y(e.dimensions,r,[u,s]);if(x(l))n=!0;else{var d=b(l);t.add(d),d===c&&(c=Pe(a,t))}}})),n?g(c):void 0},Pe=function e(a,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=b(O(a));return t>2e3?r:n.has(r)?e(a,n,t+1):r},Fe=function(e){var a=e.currentImageUrl,n=e.name,t=e.onChange;return Object(D.jsxs)(d.a,{spacing:4,children:[Object(D.jsxs)(re.a,{startIcon:Object(D.jsx)(L.a,{children:"image"}),sx:{maxWidth:"300px"},variant:"contained",component:"label",children:[n,Object(D.jsx)("input",{type:"file",hidden:!0,accept:"image/png,image/jpg,image/gif",name:"source-png",onChange:function(){var e=Object(ve.a)(je.a.mark((function e(a){var n,r,i,o;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Array.from(null!==(n=a.target.files)&&void 0!==n?n:[]),!(i=r[0])){e.next=7;break}return e.next=5,Te(i);case 5:o=e.sent,t(o);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()})]}),a&&Object(D.jsx)("img",{style:{maxWidth:"300px",maxHeight:"auto"},src:a,alt:"Source"})]})},Te=function(e){return new Promise((function(a){var n=new FileReader;n.onload=function(){return a(n.result)},n.readAsDataURL(e)}))};var Ne=j({name:"Background Image",description:"Select another image to be used as a background or foreground",params:[function(e){var a=e.name;return{name:a,defaultValue:{valid:!1},fn:function(e){return Object(D.jsx)(Fe,{currentImageUrl:e.value.valid?e.value.value.dataUrl:void 0,name:a,width:64,height:64,onChange:function(){var a=Object(ve.a)(je.a.mark((function a(n){var t;return je.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ke(n);case 2:t=a.sent,e.onChange({valid:!0,value:{dataUrl:n,image:t}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()})}}}({name:"Image"}),he({name:"Type",defaultValue:"background",options:[{name:"Background",value:"background"},{name:"Foreground",value:"foreground"}]})],fn:function(e){var a=e.image,n=e.parameters,t=N({image:n[0].image,newWidth:a.dimensions[0],newHeight:a.dimensions[1]}),r=n[1];return k(a,(function(e,n){return S(a.dimensions,(function(e){var i=n/a.frames.length,o=Math.floor(i*t.frames.length),c=R({image:t,frameIndex:o,coord:e}),s=R({image:a,frameIndex:n,coord:e});return"background"===r?x(s)?c:s:x(c)?s:c}))}))}}),We=j({name:"Bounce",description:"Make the image bounce up and down",params:[Y({name:"Bounce Speed",description:"Positive number",defaultValue:5,min:0})],fn:P((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(a,2);return r([o[0],o[1]+Math.round(i[0]*Math.sin(t/n*2*Math.PI))])}))}),Re=j({name:"Circle",description:"Make the image move in a circular pattern",params:[Y({name:"Radius",description:"Positive number",defaultValue:10,min:0})],fn:P((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(i,1)[0],c=Object(s.a)(a,2),u=c[0],l=c[1];return r([u+Math.round(o*Math.sin(-2*Math.PI*(t/n))),l+Math.round(o*Math.cos(-2*Math.PI*(t/n)))])}))}),Ae=function(e){var a=e.name,n=e.value,t=e.description,i=e.parse,o=e.onChange,c=r.a.useState(void 0===n?void 0:n.toString()),u=Object(s.a)(c,2),l=u[0],m=u[1],h=r.a.useState(""),p=Object(s.a)(h,2),j=p[0],v=p[1];return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:t})]}),Object(D.jsxs)(G.a,{children:[Object(D.jsx)(J.a,{error:!!j,value:l,onBlur:function(){if(void 0!==l&&(!n||l!==n.toString())){var e=i(l);e.valid?v(""):v(e.reason),o(e)}},onChange:function(e){m(e.target.value)}}),j&&Object(D.jsx)(z.a,{children:j})]})]})},Be=function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){var n=e.min,t=e.max;return Object(D.jsx)(Ae,{name:e.name,description:e.description,parse:function(e){var a=parseFloat(e);return isNaN(a)||a.toString()!==e?{valid:!1,reason:"Must be a number"}:void 0!==n&&a<n?{valid:!1,reason:"Must be greater than or equal to ".concat(n)}:void 0!==t&&a>t?{valid:!1,reason:"Must be less than or equal to ".concat(t)}:{valid:!0,value:a}},onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}},He=j({name:"Double Vision",description:"See the image in double",params:[Be({name:"Amplitude",defaultValue:10,min:0})],fn:P((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(i,1)[0],c=Object(s.a)(a,2),u=c[0],l=c[1],d=u%2===0?-1:1;return r([u+Math.round(d*o*Math.sin(-2*Math.PI*(t/n))),l])}))}),Ue=j({name:"Expand",description:"Make the image grow and shrink",params:[Y({name:"Radius",description:"Positive number",defaultValue:10,min:0})],fn:P((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=r/t,u=Math.cos(2*c*Math.PI)*o[0],l=Object(s.a)(a,2),d=l[0],m=l[1],f=d/2,h=m/2,p=Object(s.a)(n,2),j=p[0],v=p[1],b=(j-f)/d,g=(v-h)/m;return i([j-Math.floor(u*b),v-Math.round(u*g)])}))}),Le=j({name:"Fisheye",description:"Make the image grow and shrink in a distorted fashion",params:[Y({name:"Radius",description:"Positive Number",defaultValue:10,min:0})],fn:P((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=r/t,u=c<.5,l=Object(s.a)(a,2),d=l[0],m=l[1],f=(u?c:1-c)*o[0],h=d/2,p=m/2,j=Object(s.a)(n,2),v=j[0],b=j[1],g=Math.atan2(p-b,h-v);return i([v+Math.round(f*Math.cos(g)),b+Math.round(f*Math.sin(g))])}))}),De=j({name:"Grayscale",description:"Make the image black and white",params:[],fn:P((function(e){var a=e.coord,n=(0,e.getSrcPixel)(a);if(x(n))return[0,0,0,0];var t=C(n);return[t,t,t,255]}))}),Ee=j({name:"Hue Party",description:"Shift through all the hues",params:[],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.frameCount,r=e.frameIndex,i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=B.rgb.hsl([c,u,l]),f=Object(s.a)(m,3),h=f[1],p=f[2],j=B.hsl.rgb([r/t*255,h,p]),v=Object(s.a)(j,3);return[(c+v[0])/2,(u+v[1])/2,(l+v[2])/2,d]}))}),_e=n(15),qe=function(e){var a=e.name,n=e.value,t=e.description,r=e.onChange,i=void 0===n?void 0:b([].concat(Object(_e.a)(B.hsl.rgb([n,255,255])),[255]));return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:t})]}),Object(D.jsx)(ae.a,{color:i,onChangeComplete:function(e){var a=e.hsl;return r({valid:!0,value:a.h})}})]})};var Ge,Je=j({name:"Hue Shift",description:"Shift the hue to some other color",params:[(Ge={name:"Hue",defaultValue:128},{name:Ge.name,defaultValue:Ge.defaultValue?{valid:!0,value:Ge.defaultValue}:{valid:!1},fn:function(e){return Object(D.jsx)(qe,{name:Ge.name,value:e.value.valid?e.value.value:void 0,onChange:e.onChange})}})],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,1)[0],i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=B.rgb.hsl(c,u,l),f=Object(s.a)(m,3),h=f[1],p=f[2],j=B.hsl.rgb([r,h,p]),v=Object(s.a)(j,3);return[v[0],v[1],v[2],d]}))}),ze=function(e){var a=e.name,n=e.value,t=e.description,i=e.onChange,o=r.a.useState(n),c=Object(s.a)(o,2),u=c[0],l=c[1];return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:t})]}),Object(D.jsx)(G.a,{children:Object(D.jsx)(J.a,{value:u,onChange:function(e){return l(e.target.value)},onBlur:function(){return i(u?{valid:!0,value:u}:{valid:!1})}})})]})},Xe=[[0,15,40,255],[150,150,175,255],[180,180,205,255],[210,210,235,255]],Ye=j({name:"Lightning",description:"Make the background look like a thunderstorm",params:[function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(D.jsx)(ze,{name:e.name,description:e.description,onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}}({name:"Random Seed",description:"Can be anything. Will determine the randomness of the lightning.",defaultValue:"lightning"})],fn:function(e){var a=e.image,n=e.parameters,t=Me()(n[0]);return k(a,(function(e){var n=t(),r=n<.9?0:n<.95?1:n<.98?2:3;return S(a.dimensions,(function(n){var t=y(a.dimensions,e,n);if(x(t))return Xe[r];if(r>0){var i=1.02*r;return[t[0]*i,t[1]*i,t[2]*i,t[3]]}return t}))}))}}),Ke=j({name:"Nuke",description:"Oh no...",params:[],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.frameCount,r=e.frameIndex/t*255,i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=B.rgb.hsl(c,u,l),f=Object(s.a)(m,3),h=f[0],p=f[1],j=f[2],v=B.hsl.rgb([h,p,j>r?j:0]),b=Object(s.a)(v,3);return[b[0],b[1],b[2],j>r?d:0]}))}),Qe=[[255,141,139,255],[254,214,137,255],[136,255,137,255],[135,255,255,255],[139,181,254,255],[215,140,255,255],[255,140,255,255],[255,104,247,255],[254,108,183,255],[255,105,104,255]],Ze=j({name:"Party",description:"Make the image flash different colors",params:[],fn:P((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=(0,e.getSrcPixel)(a);if(x(r))return[0,0,0,0];var i=Math.floor(t/n*Qe.length),o=Qe[i],c=C(r);return[c*o[0]/255,c*o[1]/255,c*o[2]/255,255]}))}),$e=[[255,141,139,255],[254,214,137,255],[136,255,137,255],[135,255,255,255],[139,181,254,255],[215,140,255,255],[255,140,255,255],[255,104,247,255],[254,108,183,255],[255,105,104,255]],ea=j({name:"Party Background",description:"Transparent pixels will flash bright party colors",params:[],fn:P((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=(0,e.getSrcPixel)(a);if(x(r)){var i=Math.floor(t/n*$e.length);return $e[i]}return r}))}),aa=n(451),na=function(e){var a=e.name,n=e.newParamText,t=e.createNewParam,i=e.value,o=e.description,c=e.onChange,u=r.a.useState(void 0===i?[]:i.map((function(e,a){return{param:t(),pValue:e}}))),l=Object(s.a)(u,2),m=l[0],p=l[1];return Object(D.jsx)(h.a,{children:Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(D.jsx)(f.a,{variant:"body2",children:a}),Object(D.jsx)(E,{description:o})]}),m.map((function(e,n){var t=e.param,r=e.pValue,i=t.fn({value:{valid:!0,value:r},onChange:function(e){if(e.valid){var a=m.map((function(a,r){return n===r?{param:t,pValue:e.value}:a}));p(a),c({valid:!0,value:a.map((function(e){return e.pValue}))})}}});return Object(D.jsxs)(d.a,{direction:"row",children:[Object(D.jsx)(aa.a,{onClick:function(){var e=m.filter((function(e,a){return a!==n}));p(e),c({valid:!0,value:e.map((function(e){return e.pValue}))})},children:Object(D.jsx)(L.a,{children:"delete"})}),i]},"".concat(a,"-").concat(n))})),Object(D.jsx)(re.a,{variant:"contained",onClick:function(){var e=t(),a=[].concat(Object(_e.a)(m),[{param:e,pValue:e.defaultValue.valid?e.defaultValue.value:void 0}]);p(a),e.defaultValue.valid&&c({valid:!0,value:a.map((function(e){return e.pValue}))})},children:n})]})})};function ta(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(D.jsx)(na,{name:e.name,newParamText:e.newParamText,value:a.value.valid?a.value.value:void 0,createNewParam:e.createNewParam,description:e.description,onChange:a.onChange})}}}var ra=["#FF0000","#FF9600","#FFFF00","#00FF00","#00FF96","#00FFFF","#0000FF","#B400FF"].map(g),ia=j({name:"Pinwheel",description:"Create a pinwheel of colors",params:[Y({name:"Offset X",description:"Change the horizontal center of the pinwheel",defaultValue:0}),Y({name:"Offset Y",description:"Change the vertical center of the pinwheel",defaultValue:40}),q({name:"Group Count",description:"How many times each color is repeated. Positive integer",defaultValue:1,min:1,max:80}),ta({name:"Colors",newParamText:"New Color",description:"Colors for the pinwheel",defaultValue:ra,createNewParam:function(){return ue({name:"Color"})}})],fn:P((function(e){for(var a=e.coord,n=e.dimensions,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=i(a),u=Object(s.a)(o,4),l=u[0],d=u[1],m=u[2],f=u[3],h=f.length*m,p=Math.round(360/h),j=f.length;"00"!==(h/j).toFixed(2).slice(-2);)j-=1;if(x(c)){var v=n[0]/2+l,b=n[1]/2+d,g=Object(s.a)(a,2),O=g[0]-v,C=g[1]-b,w=(360+180*Math.atan2(C,O)/Math.PI)%360,M=Math.floor(w/p)%j,V=r/t;return f[(Math.floor(V*j)+M)%j]}return c}))}),oa=["#FF0000","#FF9600","#FFFF00","#00FF00","#00FF96","#00FFFF","#0000FF","#B400FF"].map(g),ca=[K,le,Ne,We,Re,He,Ue,Le,De,Ee,Je,Ye,Ke,Ze,ea,ia,j({name:"Radiance",description:"Radiate colors out in rings",params:[q({name:"Group Count",description:"How many times each color is repeated. Positive integer",defaultValue:1,min:1,max:90}),ta({name:"Colors",newParamText:"New Color",description:"The colors that make up each ring",defaultValue:oa,createNewParam:function(){return ue({name:"Color"})}})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(n,2),r=t[0],i=t[1],o=Object(p.a)(0,r).flatMap((function(){return i})),c=Object(s.a)(a.dimensions,2),u=c[0],l=c[1],d=u/2,m=l/2;return k(a,(function(e,n,t){return S(a.dimensions,(function(r){var i=y(a.dimensions,e,r);if(x(i)){var c=Object(s.a)(r,2),f=c[0],h=c[1],p=f-d,j=h-m,v=Math.sqrt(u/2*(u/2)+l/2*(l/2)),b=Math.sqrt(j*j+p*p),g=Math.floor((1-b/v)*o.length)%o.length,O=n/t,C=(Math.floor(O*o.length)+g)%o.length;return o[C]}return i}))}))}}),j({name:"Resize Image",description:"Change the dimensions of the image. If bigger than original, the extra space will be transparent. If smaller, the image will be cropped. ",params:[Y({name:"Width",defaultValue:128,min:0}),Y({name:"Height",defaultValue:128,min:0})],fn:function(e){var a=e.image,n=e.parameters;return N({image:a,newWidth:n[0],newHeight:n[1]})}}),j({name:"Ripple",description:"Create a ripple effect, like water",params:[Be({name:"Amplitude",defaultValue:10,description:"How strong the ripple effect should be"}),Y({name:"Period",defaultValue:2,min:0,description:"How many ripples you want. Positive number."})],fn:function(e){var a=e.image,n=e.parameters;return k(a,(function(e,t,r){var i=Object(s.a)(n,2),o=i[0],c=i[1],u=a.dimensions[1],l=t/r*2*Math.PI;return S(a.dimensions,(function(n){var t=Object(s.a)(n,2),r=t[0],i=t[1],d=Math.round(o*Math.sin(i/u*c*Math.PI+l));return y(a.dimensions,e,[r+d,i])}))}))}}),j({name:"Rotate",description:"Make the image rotate about the center point",params:[he({name:"Direction",defaultValue:-1,options:[{name:"Clockwise",value:-1},{name:"Counter-Clockwise",value:1}]})],fn:P((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=Object(s.a)(o,1)[0],u=a[0]/2,l=a[1]/2,d=Object(s.a)(n,2),m=d[0]-u,f=d[1]-l,h=r/t*(c||1),p=Math.cos(2*Math.PI*h),j=Math.sin(2*Math.PI*h);return i([Math.round(u+m*p-f*j),Math.round(l+f*p+m*j)])}))}),j({name:"Roxbury",description:"Baby, don't hurt me",params:[],fn:function(e){var a=e.image;return k(a,(function(e,n,t){var r=n/t,i=Math.floor(4*r),o=4*(r-i/4),c=Math.PI/2*.2,u=0===i?0:1===i?o*c:2===i?c:(1-o)*c,l=Math.cos(1.35*-u),d=Math.sin(1.35*-u),m=.25*a.dimensions[0],f=.7*a.dimensions[1];return S(a.dimensions,(function(n){var t=Object(s.a)(n,2),r=t[0],i=t[1],o=Math.floor(r-m+8*Math.sin(u)),c=Math.floor(i-f+8*Math.cos(u)),h=[Math.round(m+o*l-c*d),Math.round(f+c*l+o*d)];return y(a.dimensions,e,h)}))}))}}),j({name:"Shake",description:"Make the image shake back and forth",params:[Be({name:"Amplitude",defaultValue:10,min:0})],fn:P((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(i,1)[0],c=Object(s.a)(a,2),u=c[0],l=c[1];return r([u+Math.round(o*Math.cos(t/n*2*Math.PI)),l])}))}),j({name:"Static",description:"Adds random static to the image",params:[q({name:"Strength",description:"Higher number increases the amount of static pixels",defaultValue:25,min:5,max:100,step:5})],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=e.random,i=Object(s.a)(t,1)[0],o=n(a);if(x(o))return[0,0,0,0];var c=Math.ceil(100*r())<i,u=Math.ceil(255*r());return c?[u,u,u,o[3]]:o}))}),j({name:"Static Background",description:"Adds random static to the background",params:[q({name:"Strength",description:"Higher number increases the amount of static pixels",defaultValue:25,min:5,max:100,step:5})],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=e.random,i=Object(s.a)(t,1)[0],o=n(a);if(x(o)){var c=Math.ceil(100*r())<i,u=Math.ceil(255*r());return c?[u,u,u,255]:o}return o}))}),j({name:"Transparent Color",description:"All pixels similar in color to the chosen one will be made transparent",params:[ue({name:"Transparent Color",defaultValue:g("#000000")}),q({name:"Tolerance",description:'A higher number will mean colors that are "close" to the chosen color will be transparent. (0 - 100)',defaultValue:10,min:0,max:100,step:5})],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,2),i=r[0],o=r[1],c=n(a),u=c[0]-i[0],l=c[1]-i[1],d=c[2]-i[2];return Math.sqrt(u*u+l*l+d*d)/255*100<=o?[c[0],c[1],c[2],0]:c}))}),j({name:"Transpose",description:"Move the image left or right, up or down",params:[Y({name:"X",defaultValue:0}),Y({name:"Y",defaultValue:0})],fn:P((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,2),i=r[0],o=r[1],c=Object(s.a)(a,2);return n([c[0]+i,c[1]+o])}))})].sort((function(e,a){return e.name>a.name?1:-1})),sa=function(e){var a=ca.find((function(a){return a.name===e}));return I(a),a},ua=n(452),la=n(453),da=n(441),ma=q({name:"Frames per Second",defaultValue:20,min:1,max:60}),fa=function(e){var a=e.computeDisabled,n=e.appState,t=e.onFpsChange,i=e.onComputed,o=r.a.useState({loading:!1,results:[],computeTime:void 0}),c=Object(s.a)(o,2),u=c[0],l=c[1],h=r.a.useState(),p=Object(s.a)(h,2),j=p[0],v=p[1];return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsx)(f.a,{variant:"h5",children:"Create Gif"}),Object(D.jsx)("div",{style:{maxWidth:"300px"},children:ma.fn({value:{valid:!0,value:n.fps},onChange:function(e){e.valid&&t(e.value)}})}),Object(D.jsx)(re.a,{variant:"contained",sx:{maxWidth:"300px"},endIcon:!u.loading&&n.dirty?Object(D.jsx)(L.a,{children:"priority_high"}):void 0,disabled:a,onClick:Object(ve.a)(je.a.mark((function e(){var a;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.transforms.map((function(e){return{transform:sa(e.transformName),params:e.paramsValues.map((function(e){return I(e.valid),e.value}))}})),l({loading:!0}),setTimeout(Object(ve.a)(je.a.mark((function e(){var t,r,o,c;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(n.baseImage,"No source image, this button should be disabled!"),t=Date.now(),r=0,v(0),e.next=7,Ve({inputDataUrl:n.baseImage,transformList:a,fps:n.fps,onImageFinished:function(){v((r+=1)/a.length*100)}});case 7:o=e.sent,c=Math.ceil((Date.now()-t)/1e3),l({loading:!1,computeTime:c,results:o.map((function(e,a){return{transformName:n.transforms[a].transformName,gif:e.gif}}))}),v(void 0),i(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0),console.error(e.t0.stack);case 18:case"end":return e.stop()}}),e,null,[[0,14]])}))));case 3:case"end":return e.stop()}}),e)}))),children:u.loading?Object(D.jsx)(ua.a,{color:"inherit"}):"Compute"}),void 0!==j&&Object(D.jsx)(la.a,{variant:"determinate",value:j}),!u.loading&&void 0!==u.computeTime&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(m.a,{}),Object(D.jsxs)(f.a,{variant:"caption",children:["Compute Time: ",u.computeTime," second(s)"]})]}),!u.loading&&u.results.length>0&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(m.a,{}),Object(D.jsx)(da.a,{container:!0,spacing:2,padding:1,columns:{xs:4,sm:8,md:12},children:u.results.map((function(e,a){var n=e.gif,t=e.transformName;return Object(D.jsxs)(da.a,{item:!0,xs:4,sm:4,md:4,children:[Object(D.jsx)(f.a,{variant:"subtitle2",children:t}),Object(D.jsx)("img",{src:n,alt:"gif-".concat(t,"-").concat(a),style:{maxWidth:"300px",maxHeight:"auto"}})]},"".concat(t,"-").concat(a))}))})]})]})},ha=n(431),pa=function(e){var a=e.selectedTransform,n=e.possibleTransforms,t=e.index,i=e.onSelect,o=e.onRemove,s=e.onMoveLeft,u=e.onMoveRight;return Object(D.jsx)(h.a,{style:{padding:8},elevation:3,children:Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsxs)(d.a,{direction:"row",spacing:2,children:[Object(D.jsx)(f.a,{variant:"subtitle1",children:t+1}),Object(D.jsx)(U.a,{title:"Delete transform",children:Object(D.jsx)(aa.a,{"aria-label":"delete",onClick:o,children:Object(D.jsx)(L.a,{children:"delete"})})}),Object(D.jsx)(U.a,{title:"Move transform left",children:Object(D.jsx)(aa.a,{"aria-label":"delete",onClick:s,disabled:!s,children:Object(D.jsx)(L.a,{children:"chevron_left"})})}),Object(D.jsx)(U.a,{title:"Move transform right",children:Object(D.jsx)(aa.a,{"aria-label":"delete",onClick:u,disabled:!u,children:Object(D.jsx)(L.a,{children:"chevron_right"})})})]}),Object(D.jsx)(d.a,{direction:"row",spacing:4,children:Object(D.jsx)(G.a,{fullWidth:!0,children:Object(D.jsx)(ha.a,{disableClearable:!0,value:a.transform.name,options:n.map((function(e){return e.name})),onChange:function(e,a){var t=n.find((function(e){return e.name===a}));i({transform:t,paramValues:t.params.map((function(e){return e.defaultValue}))})},renderInput:function(e){return Object(D.jsx)(J.a,Object(c.a)(Object(c.a)({},e),{},{label:"Transform"}))}})})}),a.transform.description&&Object(D.jsx)(f.a,{variant:"caption",children:a.transform.description}),a.transform.params.length>0&&Object(D.jsx)(f.a,{variant:"subtitle1",children:"Parameters"}),Object(D.jsx)(d.a,{divider:Object(D.jsx)(m.a,{}),spacing:2,children:a.transform.params.map((function(e,n){var t=e.fn({value:a.paramValues[n],onChange:function(e){i(Object(c.a)(Object(c.a)({},a),{},{paramValues:a.paramValues.map((function(a,t){return t===n?e:a}))}))}});return Object(D.jsx)(r.a.Fragment,{children:t},"".concat(a.transform.name,"-").concat(e.name))}))})]})})},ja=function(e){var a=e.currentTransforms,n=e.possibleTransforms,t=e.onTransformsChange;return Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsx)(f.a,{variant:"h5",children:"Image Transforms"}),Object(D.jsxs)(da.a,{container:!0,spacing:2,padding:1,columns:{xs:4,sm:8,md:12},rowSpacing:4,children:[a.map((function(e,r){return Object(D.jsx)(da.a,{item:!0,xs:4,sm:4,md:4,children:Object(D.jsx)(pa,{index:r,possibleTransforms:n,selectedTransform:{transform:sa(e.transformName),paramValues:e.paramsValues},onRemove:function(){return t(a.filter((function(e,a){return a!==r})))},onMoveLeft:r>0?function(){return t(a.map((function(e,n){return n===r-1?a[n+1]:r===n?a[r-1]:e})))}:void 0,onMoveRight:r<a.length-1?function(){return t(a.map((function(e,n){return n===r+1?a[n-1]:r===n?a[r+1]:e})))}:void 0,onSelect:function(e){return t(a.map((function(a,n){return r===n?{transformName:e.transform.name,paramsValues:e.paramValues,computedImage:void 0}:{transformName:a.transformName,paramsValues:a.paramsValues,computedImage:void 0}})))}})},"".concat(e.transformName,"-").concat(r))})),Object(D.jsx)(da.a,{item:!0,xs:4,sm:4,md:4,children:Object(D.jsx)(d.a,{spacing:4,children:Object(D.jsx)(re.a,{fullWidth:!1,variant:"contained",startIcon:Object(D.jsx)(L.a,{children:"add"}),onClick:function(){return t([].concat(Object(_e.a)(a),[{transformName:n[0].name,paramsValues:n[0].params.map((function(e){return e.defaultValue}))}]))},children:"New Transform"})})})]})]})},va=n(433),ba=n(104),ga=function(e){var a=e.state,n=e.onImport,t=r.a.useState(),i=Object(s.a)(t,2),o=i[0],u=i[1],l=r.a.useState(!1),m=Object(s.a)(l,2),h=m[0],p=m[1],j=function(e){u(e),setTimeout((function(){return u(void 0)}),2e3)},v=function(){p(!0),setTimeout((function(){return p(!1)}),2e3)};return Object(D.jsxs)(d.a,{spacing:3,children:[Object(D.jsx)(f.a,{variant:"h5",children:"Import/Export"}),Object(D.jsxs)(re.a,{startIcon:Object(D.jsx)(L.a,{children:"file_upload"}),sx:{maxWidth:"300px"},variant:"contained",onClick:function(){var e=ba.compressToBase64(JSON.stringify(Object(c.a)(Object(c.a)({},a),{},{baseImage:void 0})));navigator.clipboard.writeText(e),j("Copied to clipboard")},children:["Export to clipboard ",Object(D.jsx)("br",{})," (NO Source Image)"]}),Object(D.jsxs)(re.a,{startIcon:Object(D.jsx)(L.a,{children:"file_upload"}),sx:{maxWidth:"300px"},variant:"contained",onClick:function(){var e=ba.compressToBase64(JSON.stringify(a));navigator.clipboard.writeText(e),j("Copied to clipboard")},children:["Export to clipboard ",Object(D.jsx)("br",{}),"(With Source Image)"]}),Object(D.jsx)(re.a,{startIcon:Object(D.jsx)(L.a,{children:"file_download"}),sx:{maxWidth:"300px"},variant:"contained",onClick:Object(ve.a)(je.a.mark((function e(){var a,t;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:if(a=e.sent){e.next=7;break}return v(),e.abrupt("return");case 7:if(t=JSON.parse(ba.decompressFromBase64(a)),Array.isArray(t.transforms)){e.next=11;break}return v(),e.abrupt("return");case 11:n(t),p(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),v();case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),children:"Import from clipboard"}),o&&Object(D.jsx)(va.a,{severity:"info",sx:{maxWidth:"300px"},children:o}),h&&Object(D.jsx)(va.a,{severity:"error",sx:{maxWidth:"300px"},children:"Error importing from clipboard"})]})},xa=function(){var e=r.a.useState({dirty:!1,transforms:[],baseImage:void 0,fps:20}),a=Object(s.a)(e,2),n=a[0],t=a[1];var i=!n.baseImage||0===n.transforms.length||!n.dirty||n.transforms.some((function(e){return sa(e.transformName).params.length>0&&e.paramsValues.every((function(e,a){return!1===e.valid}))}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.a,{}),Object(D.jsx)(l.a,{children:Object(D.jsxs)(d.a,{spacing:4,justifyContent:"space-evenly",divider:Object(D.jsx)(m.a,{}),children:[Object(D.jsx)(f.a,{variant:"h2",pt:4,children:"Partymoji"}),Object(D.jsxs)(d.a,{spacing:4,divider:Object(D.jsx)(m.a,{}),children:[Object(D.jsx)(h.a,{style:{padding:16},children:Object(D.jsxs)(d.a,{spacing:1,children:[Object(D.jsx)(f.a,{variant:"h5",children:"Source Image"}),Object(D.jsx)(Fe,{name:"Choose a source image",currentImageUrl:n.baseImage,onChange:function(e){t(Object(c.a)(Object(c.a)({},n),{},{baseImage:e,dirty:!0}))}})]})}),Object(D.jsx)(h.a,{style:{padding:16},children:Object(D.jsx)(ja,{currentTransforms:n.transforms,possibleTransforms:ca,onTransformsChange:function(e){return t(Object(c.a)(Object(c.a)({},n),{},{dirty:!0,transforms:e}))}})}),Object(D.jsx)(h.a,{style:{padding:16},children:Object(D.jsx)(fa,{computeDisabled:i,appState:n,onFpsChange:function(e){return t(Object(c.a)(Object(c.a)({},n),{},{fps:e,dirty:!0}))},onComputed:function(){return t(Object(c.a)(Object(c.a)({},n),{},{dirty:!1}))}})}),Object(D.jsx)(h.a,{style:{padding:16},children:Object(D.jsx)(ga,{state:n,onImport:function(e){return t(Object(c.a)(Object(c.a)({},e),{},{dirty:!0}))}})}),false,Object(D.jsx)("a",{href:"https://github.com/MikeyBurkman/partymoji",target:"_blank",rel:"noreferrer",children:Object(D.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",width:64,height:64,alt:"Github Link"})})]})]})})]})};o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(xa,{})}),document.getElementById("root"))}},[[373,1,2]]]);
//# sourceMappingURL=main.c38b0a2d.chunk.js.map