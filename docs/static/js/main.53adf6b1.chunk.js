(this.webpackJsonppartymoji=this.webpackJsonppartymoji||[]).push([[0],{239:function(e,a){},241:function(e,a){},254:function(e,a){},265:function(e,a){},372:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(52),o=n.n(i),c=n(23),s=n(5),u=n(437),l=n(453),d=n(419),m=n(426),f=n(441),h=n(445),p=function(e){return{name:e.name,params:e.params,description:e.description,fn:e.fn}},j=n(15),v=n(131),b=function(e){var a=Object(s.a)(e,3),n=a[0],t=a[1],r=a[2],i=function(e){var a=e.toString(16).toUpperCase();return 2===a.length?a:"0"+a};return"#".concat(i(n)).concat(i(t)).concat(i(r))},g=function(e){return[parseInt(e.toUpperCase().substr(1,2),16),parseInt(e.toUpperCase().substr(3,2),16),parseInt(e.toUpperCase().substr(5,2),16),255]},x=function(e){return e[3]<64},O=function(e){return[Math.floor(256*e.int32()),Math.floor(256*e.int32()),Math.floor(256*e.int32()),255]},C=function(e){var a=Object(s.a)(e,3),n=a[0],t=a[1],r=a[2];return Math.round((n+t+r)/3)},w=function(e,a,n){return Math.max(Math.min(e,n),a)},M=function(e){var a=Object(s.a)(e,4),n=a[0],t=a[1],r=a[2],i=a[3];return[w(n,0,255),w(t,0,255),w(r,0,255),w(i,0,255)]},V=function(e,a,n){var t=Object(s.a)(e,2),r=t[0],i=t[1],o=Object(s.a)(n,2),c=o[0],u=o[1];if(c<0||c>=r||u<0||u>=i)return[0,0,0,0];var l=F(e,c,u);return[a[l],a[l+1],a[l+2],a[l+3]]};function y(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected falsy value";if(!e)throw new v.AssertionError({message:a,actual:e})}var S=function(e,a){var n=e.frames.map((function(n,t){return{data:a(n.data,t,e.frames.length)}}));return{dimensions:e.dimensions,frames:n}},k=function(e,a){for(var n=Object(s.a)(e,2),t=n[0],r=n[1],i=new Uint8Array(t*r*4),o=0;o<r;o+=1)for(var c=0;c<t;c+=1){var u=M(a([c,o])),l=F(e,c,o);i[l]=u[0],i[l+1]=u[1],i[l+2]=u[2],i[l+3]=u[3]}return i},I=function(e){return function(a){var n=a.image,t=a.random,r=a.parameters;return S(n,(function(a,i,o){return k(n.dimensions,(function(c){return e({image:n,dimensions:n.dimensions,random:t,parameters:r,coord:c,frameCount:o,frameIndex:i,getSrcPixel:function(e){return V(n.dimensions,a,e)}})}))}))}},P=function(e){return Object(j.a)(new Array(e)).map((function(e,a){return a}))},F=function(e,a,n){return 4*(a+n*Object(s.a)(e,1)[0])},T=function(e){var a=F(e.dimensions,e.coord[0],e.coord[1]);e.image[a]=e.color[0],e.image[a+1]=e.color[1],e.image[a+2]=e.color[2],e.image[a+3]=e.color[3]},N=function(e){var a=e.image,n=e.newWidth,t=e.newHeight,r=Object(s.a)(a.dimensions,2),i=r[0],o=r[1],c=i/n,u=o/t,l=[n,t];return{frames:a.frames.map((function(e){for(var r=new Uint8Array(n*t*4),i=0;i<t;i+=1)for(var o=0;o<n;o+=1){var s=Math.floor(o*c),d=Math.floor(i*u),m=V(a.dimensions,e.data,[s,d]);T({color:m,coord:[o,i],dimensions:l,image:r})}return{data:r}})),dimensions:[n,t]}},U=n(27),A=n(438),B=n(442),R=n(433),W=n(1),H=function(e){var a=e.name,n=e.value,t=e.min,r=e.max,i=e.step,o=e.description,c=e.onChange;return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),o&&Object(W.jsx)(A.a,{title:o,children:Object(W.jsx)(B.a,{fontSize:"small",children:"help"})})]}),Object(W.jsxs)(d.a,{direction:"row",spacing:2,sx:{paddingLeft:"8px",paddingRight:"8px"},children:[Object(W.jsx)(R.a,{"aria-label":a,defaultValue:n,step:i,valueLabelDisplay:"off",getAriaValueText:function(e){return e.toString()},min:t,max:r,onChange:function(e,a){return c({valid:!0,value:a})}}),Object(W.jsx)(f.a,{variant:"body2",children:n})]})]})};function L(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(H,{name:e.name,value:a.value.valid?a.value.value:void 0,onChange:a.onChange,min:e.min,max:e.max,step:e.step,description:e.description})}}}var D=n(434),E=n(431),_=n(446),z=function(e){var a=e.name,n=e.value,t=e.description,i=e.parse,o=e.onChange,c=r.a.useState(void 0===n?void 0:n.toString()),u=Object(s.a)(c,2),l=u[0],m=u[1],h=r.a.useState(""),p=Object(s.a)(h,2),j=p[0],v=p[1];return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(A.a,{title:t,children:Object(W.jsx)(B.a,{fontSize:"small",children:"help"})})]}),Object(W.jsxs)(D.a,{children:[Object(W.jsx)(E.a,{error:!!j,defaultValue:n,onBlur:function(){if(void 0!==l&&(!n||l!==n.toString())){var e=i(l);e.valid?v(""):v(e.reason),o(e)}},onChange:function(e){m(e.target.value)}}),j&&Object(W.jsx)(_.a,{children:j})]})]})},q=function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){var n=e.min,t=e.max;return Object(W.jsx)(z,{name:e.name,description:e.description,parse:function(e){var a=parseInt(e,10);return isNaN(a)?{valid:!1,reason:"Must be an integer"}:void 0!==n&&a<n?{valid:!1,reason:"Must be greater than or equal to ".concat(n)}:void 0!==t&&a>t?{valid:!1,reason:"Must be less than or equal to ".concat(t)}:{valid:!0,value:a}},onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}},G=p({name:"Adjust Image",description:"Leave a parameter at 0 if you want to not change it",params:[L({name:"Number of Frames",description:"Set how many frames of animation there will be. Leave at 0 to not change the current frame count.",defaultValue:0,min:0,max:60}),q({name:"Width",description:"Leave at 0 to not change the image",defaultValue:0,min:0}),q({name:"Height",description:"Leave at 0 to not change the image",defaultValue:0,min:0}),L({name:"Brightness",min:-100,max:100,step:5,defaultValue:0}),L({name:"Contrast",min:-100,max:100,step:5,defaultValue:0})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(n,5),r=t[0],i=t[1],o=t[2],c=t[3],u=t[4],l=0!==u?X(a):0,d=a;return 0!==i&&0!==o&&(d=N({image:d,newWidth:i,newHeight:o})),d=S(d,(function(e){return k(d.dimensions,(function(a){var n=V(d.dimensions,e,a);return 0!==c&&(n=K(n,c)),0!==u&&(n=Y(n,l,u)),n}))})),r&&(d=J(d,r)),d}}),J=function(e,a){var n=e.frames,t=P(a).map((function(e){return{data:n[e]?n[e].data:n[n.length-1].data}}));return{dimensions:e.dimensions,frames:t}},X=function(e){for(var a=Object(s.a)(e.dimensions,2),n=a[0],t=a[1],r=0,i=0;i<e.frames.length;i+=1)for(var o=0;o<n;o+=1)for(var c=0;c<t;c+=1){var u=V(e.dimensions,e.frames[i].data,[o,c]),l=Object(s.a)(u,3),d=l[0],m=l[1],f=l[2],h=U.rgb.hsv(d,m,f);r+=Object(s.a)(h,3)[2]}return r/(e.frames.length*n*t)},Y=function(e,a,n){var t=Object(s.a)(e,4),r=t[0],i=t[1],o=t[2],c=t[3],u=U.rgb.hsv(r,i,o),l=Object(s.a)(u,3),d=l[0],m=l[1],f=l[2],h=f+(f-a)*(n/100),p=U.hsv.rgb([d,m,h]),j=Object(s.a)(p,3);return[j[0],j[1],j[2],c]},K=function(e,a){var n=a/100*255;return M([e[0]+n,e[1]+n,e[2]+n,e[3]])},Q=[[255,141,139,255],[254,214,137,255],[136,255,137,255],[135,255,255,255],[139,181,254,255],[215,140,255,255],[255,140,255,255],[255,104,247,255],[254,108,183,255],[255,105,104,255]],Z=p({name:"Background Party",description:"Transparent pixels will flash bright party colors",params:[],fn:I((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=(0,e.getSrcPixel)(a);if(x(r)){var i=Math.floor(t/n*Q.length);return Q[i]}return r}))}),$=n(428),ee=n(435),ae=function(e){var a=e.name,n=e.options,t=e.value,r=e.description,i=e.onChange;return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),r&&Object(W.jsx)(A.a,{title:r,children:Object(W.jsx)(B.a,{fontSize:"small",children:"help"})})]}),Object(W.jsx)(D.a,{children:Object(W.jsx)($.a,{autoWidth:!0,value:t,onChange:function(e){return i({valid:!0,value:e.target.value})},children:n.map((function(e){return Object(W.jsx)(ee.a,{value:e.value,children:e.name},e.value)}))})})]})};function ne(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(ae,{name:e.name,value:a.value.valid?a.value.value:void 0,options:e.options,description:e.description,onChange:a.onChange})}}}var te=n(19),re=n.n(te),ie=n(33),oe=n(181),ce=n(182),se=n.n(ce),ue=n(183),le=n.n(ue),de=n(96),me=n.n(de),fe=function(){var e=Object(ie.a)(re.a.mark((function e(a){var n,t,r,i,o,c,s,u,l,d,m,f,h,p,j;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.transformList,t=a.inputDataUrl,r=a.fps,i=a.onImageFinished,o=me()(t),e.next=4,je(t);case 4:c=e.sent,s=[],u=c,l=Object(oe.a)(n),e.prev=8,l.s();case 10:if((d=l.n()).done){e.next=23;break}return m=d.value,f=m.transform.fn({image:u,parameters:m.params,random:o}),h=ve(f,o),p=he(f.frames.map((function(e){return e.data})),h),e.next=17,pe(f.dimensions,p,h,r);case 17:j=e.sent,i(),u=f,s.push({gif:j,width:f.dimensions[0],height:f.dimensions[1]});case 21:e.next=10;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(8),l.e(e.t0);case 28:return e.prev=28,l.f(),e.finish(28);case 31:return e.abrupt("return",s);case 32:case"end":return e.stop()}}),e,null,[[8,25,28,31]])})));return function(a){return e.apply(this,arguments)}}(),he=function(e,a){return e.map((function(e){for(var n=new Uint8Array(e.length),t=0;t<e.length;t+=4)a&&e[t+3]<128?(n[t]=a[0],n[t+1]=a[1],n[t+2]=a[2],n[t+3]=a[3]):(n[t]=e[t],n[t+1]=e[t+1],n[t+2]=e[t+2],n[t+3]=255);return n}))},pe=function(){var e=Object(ie.a)(re.a.mark((function e(a,n,t,r){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var i=Object(s.a)(a,2),o=i[0],c=i[1],u=new le.a(o,c);if(u.setFrameRate(r),u.setRepeat(0),t){var l=b(t).slice(1);u.setTransparent("0x".concat(l))}u.writeHeader();var d=[];u.on("data",(function(e){d.push(e)})),u.on("end",(function(){var a=URL.createObjectURL(new Blob(d,{type:"image/gif"}));e(a)})),n.forEach((function(e){u.addFrame(e)})),u.finish()})));case 1:case"end":return e.stop()}}),e)})));return function(a,n,t,r){return e.apply(this,arguments)}}(),je=function(e){return new Promise((function(a,n){return se()(e,(function(e,t){return e?n(e):a({frames:[{data:Uint8Array.from(t.data)}],dimensions:[t.shape[0],t.shape[1]]})}))}))},ve=function(e,a){var n=!1,t=new Set,r=Object(s.a)(e.dimensions,2),i=r[0],o=r[1],c=b([0,255,0,255]);return e.frames.forEach((function(r){for(var s=0;s<o;s+=1)for(var u=0;u<i;u+=1){var l=V(e.dimensions,r.data,[u,s]);if(x(l))n=!0;else{var d=b(l);t.add(d),d===c&&(c=be(a,t))}}})),n?g(c):void 0},be=function e(a,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=b(O(a));return t>2e3?r:n.has(r)?e(a,n,t+1):r},ge=n(447),xe=function(e){var a=e.currentImageUrl,n=e.name,t=e.onChange;return Object(W.jsxs)(d.a,{spacing:4,children:[Object(W.jsxs)(ge.a,{startIcon:Object(W.jsx)(B.a,{children:"image"}),sx:{maxWidth:"300px"},variant:"contained",component:"label",children:[n,Object(W.jsx)("input",{type:"file",hidden:!0,accept:"image/png,image/jpg",name:"source-png",onChange:function(){var e=Object(ie.a)(re.a.mark((function e(a){var n,r,i,o;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Array.from(null!==(n=a.target.files)&&void 0!==n?n:[]),i=r[0],e.next=4,Oe(i);case 4:o=e.sent,t(o);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()})]}),a&&Object(W.jsx)("img",{style:{maxWidth:"300px",maxHeight:"auto"},src:a,alt:"Source"})]})},Oe=function(e){return new Promise((function(a){var n=new FileReader;n.onload=function(){return a(n.result)},n.readAsDataURL(e)}))};var Ce=p({name:"Background Image",description:"Select another image to be used as a background or foreground",params:[function(e){var a=e.name;return{name:a,defaultValue:{valid:!1},fn:function(e){return Object(W.jsx)(xe,{currentImageUrl:e.value.valid?e.value.value.dataUrl:void 0,name:a,width:64,height:64,onChange:function(){var a=Object(ie.a)(re.a.mark((function a(n){var t;return re.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,je(n);case 2:t=a.sent,e.onChange({valid:!0,value:{dataUrl:n,image:t}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()})}}}({name:"Image"}),ne({name:"Type",defaultValue:"background",options:[{name:"Background",value:"background"},{name:"Foreground",value:"foreground"}]})],fn:function(e){var a=e.image,n=e.parameters,t=N({image:n[0].image,newWidth:a.dimensions[0],newHeight:a.dimensions[1]}),r=n[1];return S(a,(function(e){return k(a.dimensions,(function(n){var i=V(a.dimensions,e,n),o=V(t.dimensions,t.frames[0].data,n);return"background"===r?x(i)?o:i:x(o)?i:o}))}))}}),we=p({name:"Bounce",description:"Make the image bounce up and down",params:[q({name:"Bounce Speed",description:"Positive number",defaultValue:5,min:0})],fn:I((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(a,2);return r([o[0],o[1]+Math.round(i[0]*Math.sin(t/n*2*Math.PI))])}))}),Me=p({name:"Circle",description:"Make the image move in a circular pattern",params:[q({name:"Radius",description:"Positive number",defaultValue:10,min:0})],fn:I((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(i,1)[0],c=Object(s.a)(a,2),u=c[0],l=c[1];return r([u+Math.round(o*Math.sin(-2*Math.PI*(t/n))),l+Math.round(o*Math.cos(-2*Math.PI*(t/n)))])}))}),Ve=p({name:"Expand",description:"Make the image grow and shrink",params:[q({name:"Radius",description:"Positive number",defaultValue:10,min:0})],fn:I((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=r/t,u=Math.cos(2*c*Math.PI)*o[0],l=Object(s.a)(a,2),d=l[0],m=l[1],f=d/2,h=m/2,p=Object(s.a)(n,2),j=p[0],v=p[1],b=(j-f)/d,g=(v-h)/m;return i([j-Math.floor(u*b),v-Math.round(u*g)])}))}),ye=p({name:"Fisheye",description:"Make the image grow and shrink in a distorted fashion",params:[q({name:"Radius",description:"Positive Number",defaultValue:10,min:0})],fn:I((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=r/t,u=c<.5,l=Object(s.a)(a,2),d=l[0],m=l[1],f=(u?c:1-c)*o[0],h=d/2,p=m/2,j=Object(s.a)(n,2),v=j[0],b=j[1],g=Math.atan2(p-b,h-v);return i([v+Math.round(f*Math.cos(g)),b+Math.round(f*Math.sin(g))])}))}),Se=p({name:"Grayscale",description:"Make the image black and white",params:[],fn:I((function(e){var a=e.coord,n=(0,e.getSrcPixel)(a);if(x(n))return[0,0,0,0];var t=C(n);return[t,t,t,255]}))}),ke=p({name:"Hue Party",description:"Shift through all the hues",params:[],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.frameCount,r=e.frameIndex,i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=U.rgb.hsl([c,u,l]),f=Object(s.a)(m,3),h=f[1],p=f[2],j=U.hsl.rgb([r/t*255,h,p]),v=Object(s.a)(j,3);return[(c+v[0])/2,(u+v[1])/2,(l+v[2])/2,d]}))}),Ie=n(99),Pe=function(e){var a=e.name,n=e.value,t=e.description,r=e.onChange,i=void 0===n?void 0:b([].concat(Object(j.a)(U.hsl.rgb([n,255,255])),[255]));return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(A.a,{title:t,children:Object(W.jsx)(B.a,{fontSize:"small",children:"help"})})]}),Object(W.jsx)(Ie.a,{color:i,onChangeComplete:function(e){var a=e.hsl;return r({valid:!0,value:a.h})}})]})};var Fe,Te=p({name:"Hue Shift",description:"Shift the hue to some other color",params:[(Fe={name:"Hue",defaultValue:128},{name:Fe.name,defaultValue:Fe.defaultValue?{valid:!0,value:Fe.defaultValue}:{valid:!1},fn:function(e){return Object(W.jsx)(Pe,{name:Fe.name,value:e.value.valid?e.value.value:void 0,onChange:e.onChange})}})],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,1)[0],i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=U.rgb.hsl(c,u,l),f=Object(s.a)(m,3),h=f[1],p=f[2],j=U.hsl.rgb([r,h,p]),v=Object(s.a)(j,3);return[v[0],v[1],v[2],d]}))}),Ne=function(e){var a=e.name,n=e.value,t=e.description,i=e.onChange,o=r.a.useState(n),c=Object(s.a)(o,2),u=c[0],l=c[1];return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(A.a,{title:t,children:Object(W.jsx)(B.a,{fontSize:"small",children:"help"})})]}),Object(W.jsx)(D.a,{children:Object(W.jsx)(E.a,{defaultValue:n,onChange:function(e){return l(e.target.value)},onBlur:function(){return i(u?{valid:!0,value:u}:{valid:!1})}})})]})},Ue=[[0,15,40,255],[150,150,175,255],[180,180,205,255],[210,210,235,255]],Ae=p({name:"Lightning",description:"Make the background look like a thunderstorm",params:[function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(Ne,{name:e.name,description:e.description,onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}}({name:"Random Seed",description:"Can be anything. Will determine the randomness of the lightning.",defaultValue:"lightning"})],fn:function(e){var a=e.image,n=e.parameters,t=me()(n[0]);return S(a,(function(e){var n=t(),r=n<.9?0:n<.95?1:n<.98?2:3;return k(a.dimensions,(function(n){var t=V(a.dimensions,e,n);if(x(t))return Ue[r];if(r>0){var i=1.02*r;return[t[0]*i,t[1]*i,t[2]*i,t[3]]}return t}))}))}}),Be=p({name:"Nuke",description:"Oh no...",params:[],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.frameCount,r=e.frameIndex/t*255,i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=U.rgb.hsl(c,u,l),f=Object(s.a)(m,3),h=f[0],p=f[1],j=f[2],v=U.hsl.rgb([h,p,j>r?j:0]),b=Object(s.a)(v,3);return[b[0],b[1],b[2],j>r?d:0]}))}),Re=[[255,141,139,255],[254,214,137,255],[136,255,137,255],[135,255,255,255],[139,181,254,255],[215,140,255,255],[255,140,255,255],[255,104,247,255],[254,108,183,255],[255,105,104,255]],We=p({name:"Party",description:"Make the image flash different colors",params:[],fn:I((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=(0,e.getSrcPixel)(a);if(x(r))return[0,0,0,0];var i=Math.floor(t/n*Re.length),o=Re[i],c=C(r);return[c*o[0]/255,c*o[1]/255,c*o[2]/255,255]}))}),He=n(425),Le=n(448),De=n(449),Ee=function(e){var a=e.mainEle,n=e.children,t=r.a.useState(!0),i=Object(s.a)(t,2),o=i[0],c=i[1];return Object(W.jsx)(He.a,{onClickAway:function(){return c(!0)},children:Object(W.jsxs)(Le.a,{children:[Object(W.jsx)(ge.a,{onClick:function(){return c(!o)},style:{textTransform:"none"},children:Object(W.jsxs)(d.a,{direction:"row",spacing:4,children:[Object(W.jsx)("div",{children:a}),Object(W.jsx)(B.a,{children:o?"expand_less":"expand_more"})]})}),Object(W.jsx)(De.a,{in:!o,children:n})]})})},_e=function(e){var a=e.color;return Object(W.jsx)("div",{style:{width:"1.5em",height:"1.5em",backgroundColor:b(a)}})},ze=function(e){var a=e.name,n=e.value,t=e.description,r=e.onChange;return Object(W.jsx)(Ee,{mainEle:Object(W.jsxs)(d.a,{direction:"row",spacing:4,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(A.a,{title:t,children:Object(W.jsx)(B.a,{children:"help"})}),n&&Object(W.jsx)(_e,{color:n})]}),children:Object(W.jsx)(Ie.b,{disableAlpha:!0,presetColors:[],color:n?b(n):void 0,onChangeComplete:function(e){return r({valid:!0,value:g(e.hex)})}})})};function qe(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(ze,{name:e.name,value:a.value.valid?a.value.value:void 0,onChange:a.onChange,description:e.description})}}}var Ge=n(450),Je=function(e){var a=e.name,n=e.newParamText,t=e.createNewParam,i=e.value,o=e.description,c=e.onChange,u=r.a.useState(void 0===i?[]:i.map((function(e,a){return{param:t(),pValue:e}}))),l=Object(s.a)(u,2),m=l[0],p=l[1];return Object(W.jsx)(h.a,{children:Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),o&&Object(W.jsx)(A.a,{title:o,children:Object(W.jsx)(B.a,{children:"help"})})]}),m.map((function(e,n){var t=e.param,r=e.pValue,i=t.fn({value:{valid:!0,value:r},onChange:function(e){if(e.valid){var a=m.map((function(a,r){return n===r?{param:t,pValue:e.value}:a}));p(a),c({valid:!0,value:a.map((function(e){return e.pValue}))})}}});return Object(W.jsxs)(d.a,{direction:"row",children:[Object(W.jsx)(Ge.a,{onClick:function(){var e=m.filter((function(e,a){return a!==n}));p(e),c({valid:!0,value:e.map((function(e){return e.pValue}))})},children:Object(W.jsx)(B.a,{children:"delete"})}),i]},"".concat(a,"-").concat(n))})),Object(W.jsx)(ge.a,{variant:"contained",onClick:function(){var e=t(),a=[].concat(Object(j.a)(m),[{param:e,pValue:e.defaultValue.valid?e.defaultValue.value:void 0}]);p(a),e.defaultValue.valid&&c({valid:!0,value:a.map((function(e){return e.pValue}))})},children:n})]})})};function Xe(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(Je,{name:e.name,newParamText:e.newParamText,value:a.value.valid?a.value.value:void 0,createNewParam:e.createNewParam,description:e.description,onChange:a.onChange})}}}var Ye=["#FF0000","#FF9600","#FFFF00","#00FF00","#00FF96","#00FFFF","#0000FF","#B400FF"].map(g),Ke=p({name:"Pinwheel",description:"Create a pinwheel of colors",params:[q({name:"Offset X",description:"Change the horizontal center of the pinwheel",defaultValue:0}),q({name:"Offset Y",description:"Change the vertical center of the pinwheel",defaultValue:40}),L({name:"Group Count",description:"How many times each color is repeated. Positive integer",defaultValue:1,min:1,max:80}),Xe({name:"Colors",newParamText:"New Color",description:"Colors for the pinwheel",defaultValue:Ye,createNewParam:function(){return qe({name:"Color"})}})],fn:I((function(e){for(var a=e.coord,n=e.dimensions,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=i(a),u=Object(s.a)(o,4),l=u[0],d=u[1],m=u[2],f=u[3],h=f.length*m,p=Math.round(360/h),j=f.length;"00"!==(h/j).toFixed(2).slice(-2);)j-=1;if(x(c)){var v=n[0]/2+l,b=n[1]/2+d,g=Object(s.a)(a,2),O=g[0]-v,C=g[1]-b,w=(360+180*Math.atan2(C,O)/Math.PI)%360,M=Math.floor(w/p)%j,V=r/t;return f[(Math.floor(V*j)+M)%j]}return c}))}),Qe=["#FF0000","#FF9600","#FFFF00","#00FF00","#00FF96","#00FFFF","#0000FF","#B400FF"].map(g),Ze=p({name:"Radiance",description:"Radiate colors out in rings",params:[L({name:"Group Count",description:"How many times each color is repeated. Positive integer",defaultValue:1,min:1,max:90}),Xe({name:"Colors",newParamText:"New Color",description:"The colors that make up each ring",defaultValue:Qe,createNewParam:function(){return qe({name:"Color"})}})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(n,2),r=t[0],i=t[1],o=P(r).flatMap((function(){return i})),c=Object(s.a)(a.dimensions,2),u=c[0],l=c[1],d=u/2,m=l/2;return S(a,(function(e,n,t){return k(a.dimensions,(function(r){var i=V(a.dimensions,e,r);if(x(i)){var c=Object(s.a)(r,2),f=c[0],h=c[1],p=f-d,j=h-m,v=Math.sqrt(u/2*(u/2)+l/2*(l/2)),b=Math.sqrt(j*j+p*p),g=Math.floor((1-b/v)*o.length)%o.length,O=n/t,C=(Math.floor(O*o.length)+g)%o.length;return o[C]}return i}))}))}}),$e=p({name:"Resize Image",description:"Change the dimensions of the image. If bigger than original, the extra space will be transparent. If smaller, the image will be cropped. ",params:[q({name:"Width",defaultValue:128,min:0}),q({name:"Height",defaultValue:128,min:0})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(a.dimensions,2),r=t[0],i=t[1],o=Object(s.a)(n,2),c=o[0],u=o[1],l=[c,u],d=(c-r)/2,m=(u-i)/2;return{frames:a.frames.map((function(e){for(var n=new Uint8Array(c*u*4),t=0;t<u;t+=1)for(var r=0;r<c;r+=1){var i=r>d&&r<c-d&&t>m&&t<u-m?V(a.dimensions,e.data,[r-d,t-m]):[0,0,0,0];T({color:i,coord:[r,t],dimensions:l,image:n})}return{data:n}})),dimensions:l}}}),ea=function(e){var a=e.name,n=e.value,t=e.description,i=e.parse,o=e.onChange,c=r.a.useState(void 0===n?void 0:n.toString()),u=Object(s.a)(c,2),l=u[0],m=u[1],h=r.a.useState(""),p=Object(s.a)(h,2),j=p[0],v=p[1];return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(A.a,{title:t,children:Object(W.jsx)(B.a,{fontSize:"small",children:"help"})})]}),Object(W.jsxs)(D.a,{children:[Object(W.jsx)(E.a,{error:!!j,defaultValue:n,onBlur:function(){if(void 0!==l&&(!n||l!==n.toString())){var e=i(l);e.valid?v(""):v(e.reason),o(e)}},onChange:function(e){m(e.target.value)}}),j&&Object(W.jsx)(_.a,{children:j})]})]})},aa=function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){var n=e.min,t=e.max;return Object(W.jsx)(ea,{name:e.name,description:e.description,parse:function(e){var a=parseFloat(e);return isNaN(a)?{valid:!1,reason:"Must be a number"}:void 0!==n&&a<n?{valid:!1,reason:"Must be greater than or equal to ".concat(n)}:void 0!==t&&a>t?{valid:!1,reason:"Must be less than or equal to ".concat(t)}:{valid:!0,value:a}},onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}},na=[G,Ce,Z,we,Me,Ve,ye,Se,ke,Te,Ae,Be,We,Ke,Ze,$e,p({name:"Ripple",description:"Create a ripple effect, like water",params:[aa({name:"Amplitude",defaultValue:10,description:"How strong the ripple effect should be"}),q({name:"Period",defaultValue:2,min:0,description:"How many ripples you want. Positive number."})],fn:function(e){var a=e.image,n=e.parameters;return S(a,(function(e,t,r){var i=Object(s.a)(n,2),o=i[0],c=i[1],u=a.dimensions[1],l=t/r*2*Math.PI;return k(a.dimensions,(function(n){var t=Object(s.a)(n,2),r=t[0],i=t[1],d=Math.round(o*Math.sin(i/u*c*Math.PI+l));return V(a.dimensions,e,[r+d,i])}))}))}}),p({name:"Rotate",description:"Make the image rotate about the center point",params:[ne({name:"Direction",defaultValue:-1,options:[{name:"Clockwise",value:-1},{name:"Counter-Clockwise",value:1}]})],fn:I((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=Object(s.a)(o,1)[0],u=a[0]/2,l=a[1]/2,d=Object(s.a)(n,2),m=d[0]-u,f=d[1]-l,h=r/t*(c||1),p=Math.cos(2*Math.PI*h),j=Math.sin(2*Math.PI*h);return i([Math.round(u+m*p-f*j),Math.round(l+f*p+m*j)])}))}),p({name:"Roxbury",description:"Baby, don't hurt me",params:[],fn:function(e){var a=e.image;return S(a,(function(e,n,t){var r=n/t,i=Math.floor(4*r),o=4*(r-i/4),c=Math.PI/2*.2,u=0===i?0:1===i?o*c:2===i?c:(1-o)*c,l=Math.cos(1.35*-u),d=Math.sin(1.35*-u),m=.25*a.dimensions[0],f=.7*a.dimensions[1];return k(a.dimensions,(function(n){var t=Object(s.a)(n,2),r=t[0],i=t[1],o=Math.floor(r-m+8*Math.sin(u)),c=Math.floor(i-f+8*Math.cos(u)),h=[Math.round(m+o*l-c*d),Math.round(f+c*l+o*d)];return V(a.dimensions,e,h)}))}))}}),p({name:"Shake",description:"Make the image shake back and forth",params:[aa({name:"Amplitude",defaultValue:10,min:0})],fn:I((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(i,1)[0],c=Object(s.a)(a,2),u=c[0],l=c[1];return r([u+Math.round(o*Math.cos(t/n*2*Math.PI)),l])}))}),p({name:"Solid Background",description:"Change all transparent pixles to the given color",params:[qe({name:"Background Color",defaultValue:g("#000000")})],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,1)[0],i=n(a);return x(i)?r:i}))}),p({name:"Static",description:"Adds random static to the image",params:[L({name:"Strength",description:"Higher number increases the amount of static pixels",defaultValue:25,min:5,max:100,step:5})],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=e.random,i=Object(s.a)(t,1)[0],o=n(a);if(x(o))return[0,0,0,0];var c=Math.ceil(100*r())<i,u=Math.ceil(255*r());return c?[u,u,u,o[3]]:o}))}),p({name:"Static Background",description:"Adds random static to the background",params:[L({name:"Strength",description:"Higher number increases the amount of static pixels",defaultValue:25,min:5,max:100,step:5})],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=e.random,i=Object(s.a)(t,1)[0],o=n(a);if(x(o)){var c=Math.ceil(100*r())<i,u=Math.ceil(255*r());return c?[u,u,u,255]:o}return o}))}),p({name:"Transparent Color",description:"All pixels similar in color to the chosen one will be made transparent",params:[qe({name:"Transparent Color",defaultValue:g("#000000")}),L({name:"Tolerance",description:'A higher number will mean colors that are "close" to the chosen color will be transparent. (0 - 100)',defaultValue:10,min:0,max:100,step:5})],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,2),i=r[0],o=r[1],c=n(a),u=c[0]-i[0],l=c[1]-i[1],d=c[2]-i[2];return Math.sqrt(u*u+l*l+d*d)/255*100<=o?[c[0],c[1],c[2],0]:c}))}),p({name:"Transpose",description:"Move the image left or right, up or down",params:[q({name:"X",defaultValue:0}),q({name:"Y",defaultValue:0})],fn:I((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,2),i=r[0],o=r[1],c=Object(s.a)(a,2);return n([c[0]+i,c[1]+o])}))})].sort((function(e,a){return e.name>a.name?1:-1})),ta=function(e){var a=na.find((function(a){return a.name===e}));return y(a),a},ra=n(451),ia=n(452),oa=n(440),ca=L({name:"Frames per Second",defaultValue:20,min:1,max:60}),sa=function(e){var a=e.isDirty,n=e.computeDisabled,t=e.baseImageUrl,i=e.transforms,o=e.onComputed,c=r.a.useState({loading:!1,results:[],computeTime:void 0}),u=Object(s.a)(c,2),l=u[0],h=u[1],p=r.a.useState(!1),j=Object(s.a)(p,2),v=j[0],b=j[1],g=r.a.useState(20),x=Object(s.a)(g,2),O=x[0],C=x[1],w=r.a.useState(),M=Object(s.a)(w,2),V=M[0],S=M[1],k=n&&!v;return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Create Gif"}),Object(W.jsx)("div",{style:{maxWidth:"300px"},children:ca.fn({value:{valid:!0,value:O},onChange:function(e){e.valid&&(C(e.value),b(!0))}})}),Object(W.jsx)(ge.a,{variant:"contained",sx:{maxWidth:"300px"},endIcon:l.loading||!a&&!v?void 0:Object(W.jsx)(B.a,{children:"priority_high"}),disabled:k,onClick:Object(ie.a)(re.a.mark((function e(){var a;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=i.map((function(e){return{transform:ta(e.transformName),params:e.paramsValues.map((function(e){return y(e.valid),e.value}))}})),h({loading:!0}),setTimeout(Object(ie.a)(re.a.mark((function e(){var n,r,c,s;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(t,"No source image, this button should be disabled!"),n=Date.now(),r=0,S(0),e.next=7,fe({inputDataUrl:t,transformList:a,fps:O,onImageFinished:function(){S((r+=1)/a.length*100)}});case 7:c=e.sent,s=Math.ceil((Date.now()-n)/1e3),h({loading:!1,computeTime:s,results:c.map((function(e,a){return{transformName:i[a].transformName,gif:e.gif}}))}),b(!1),S(void 0),o(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),console.error(e.t0.stack);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))));case 3:case"end":return e.stop()}}),e)}))),children:l.loading?Object(W.jsx)(ra.a,{color:"inherit"}):"Compute"}),void 0!==V&&Object(W.jsx)(ia.a,{variant:"determinate",value:V}),!l.loading&&l.computeTime&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(m.a,{}),Object(W.jsxs)(f.a,{variant:"caption",children:["Compute Time: ",l.computeTime," second(s)"]})]}),!l.loading&&l.results.length>0&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(m.a,{}),Object(W.jsx)(oa.a,{container:!0,spacing:2,padding:1,columns:{xs:4,sm:8,md:12},children:l.results.map((function(e,a){var n=e.gif,t=e.transformName;return Object(W.jsxs)(oa.a,{item:!0,xs:4,sm:4,md:4,children:[Object(W.jsx)(f.a,{variant:"subtitle2",children:t}),Object(W.jsx)("img",{src:n,alt:"gif-".concat(t,"-").concat(a),style:{maxWidth:"300px",maxHeight:"auto"}})]})}))})]})]})},ua=n(430),la=function(e){var a=e.selectedTransform,n=e.possibleTransforms,t=e.index,i=e.onSelect,o=e.onRemove,s=e.onMoveLeft,u=e.onMoveRight;return Object(W.jsx)(h.a,{style:{padding:8},elevation:3,children:Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:2,children:[Object(W.jsx)(f.a,{variant:"subtitle1",children:t+1}),Object(W.jsx)(A.a,{title:"Delete transform",children:Object(W.jsx)(Ge.a,{"aria-label":"delete",onClick:o,children:Object(W.jsx)(B.a,{children:"delete"})})}),Object(W.jsx)(A.a,{title:"Move transform left",children:Object(W.jsx)(Ge.a,{"aria-label":"delete",onClick:s,disabled:!s,children:Object(W.jsx)(B.a,{children:"chevron_left"})})}),Object(W.jsx)(A.a,{title:"Move transform right",children:Object(W.jsx)(Ge.a,{"aria-label":"delete",onClick:u,disabled:!u,children:Object(W.jsx)(B.a,{children:"chevron_right"})})})]}),Object(W.jsx)(d.a,{direction:"row",spacing:4,children:Object(W.jsx)(D.a,{fullWidth:!0,children:Object(W.jsx)(ua.a,{disableClearable:!0,value:a.transform.name,options:n.map((function(e){return e.name})),onChange:function(e,a){var t=n.find((function(e){return e.name===a}));i({transform:t,paramValues:t.params.map((function(e){return e.defaultValue}))})},renderInput:function(e){return Object(W.jsx)(E.a,Object(c.a)(Object(c.a)({},e),{},{label:"Transform"}))}})})}),a.transform.description&&Object(W.jsx)(f.a,{variant:"caption",children:a.transform.description}),a.transform.params.length>0&&Object(W.jsx)(f.a,{variant:"subtitle1",children:"Parameters"}),Object(W.jsx)(d.a,{divider:Object(W.jsx)(m.a,{}),spacing:2,children:a.transform.params.map((function(e,n){var t=e.fn({value:a.paramValues[n],onChange:function(e){i(Object(c.a)(Object(c.a)({},a),{},{paramValues:a.paramValues.map((function(a,t){return t===n?e:a}))}))}});return Object(W.jsx)(r.a.Fragment,{children:t},"".concat(a.transform.name,"-").concat(e.name))}))})]})})},da=function(e){var a=e.currentTransforms,n=e.possibleTransforms,t=e.onTransformsChange;return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Image Transforms"}),Object(W.jsxs)(oa.a,{container:!0,spacing:2,padding:1,columns:{xs:4,sm:8,md:12},children:[a.map((function(e,r){return Object(W.jsx)(oa.a,{item:!0,xs:4,sm:4,md:4,children:Object(W.jsx)(la,{index:r,possibleTransforms:n,selectedTransform:{transform:ta(e.transformName),paramValues:e.paramsValues},onRemove:function(){return t(a.filter((function(e,a){return a!==r})))},onMoveLeft:r>0?function(){return t(a.map((function(e,n){return n===r-1?a[n+1]:r===n?a[r-1]:e})))}:void 0,onMoveRight:r<a.length-1?function(){return t(a.map((function(e,n){return n===r+1?a[n-1]:r===n?a[r+1]:e})))}:void 0,onSelect:function(e){return t(a.map((function(a,n){return r===n?{transformName:e.transform.name,paramsValues:e.paramValues,computedImage:void 0}:{transformName:a.transformName,paramsValues:a.paramsValues,computedImage:void 0}})))}})})})),Object(W.jsx)(oa.a,{item:!0,xs:4,sm:4,md:4,children:Object(W.jsx)(d.a,{spacing:4,children:Object(W.jsx)(ge.a,{fullWidth:!1,variant:"contained",startIcon:Object(W.jsx)(B.a,{children:"add"}),onClick:function(){return t([].concat(Object(j.a)(a),[{transformName:n[0].name,paramsValues:n[0].params.map((function(e){return e.defaultValue}))}]))},children:"New Transform"})})})]})]})},ma=n(432),fa=n(104),ha=function(e){var a=e.state,n=e.onImport,t=r.a.useState(),i=Object(s.a)(t,2),o=i[0],u=i[1],l=r.a.useState(!1),m=Object(s.a)(l,2),h=m[0],p=m[1],j=function(e){u(e),setTimeout((function(){return u(void 0)}),2e3)},v=function(){p(!0),setTimeout((function(){return p(!1)}),2e3)};return Object(W.jsxs)(d.a,{spacing:3,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Import/Export"}),Object(W.jsxs)(ge.a,{startIcon:Object(W.jsx)(B.a,{children:"file_upload"}),sx:{maxWidth:"300px"},variant:"contained",onClick:function(){var e=fa.compressToBase64(JSON.stringify(Object(c.a)(Object(c.a)({},a),{},{baseImage:void 0})));navigator.clipboard.writeText(e),j("Copied to clipboard")},children:["Export to clipboard ",Object(W.jsx)("br",{})," (NO Source Image)"]}),Object(W.jsxs)(ge.a,{startIcon:Object(W.jsx)(B.a,{children:"file_upload"}),sx:{maxWidth:"300px"},variant:"contained",onClick:function(){var e=fa.compressToBase64(JSON.stringify(a));navigator.clipboard.writeText(e),j("Copied to clipboard")},children:["Export to clipboard ",Object(W.jsx)("br",{}),"(With Source Image)"]}),Object(W.jsx)(ge.a,{startIcon:Object(W.jsx)(B.a,{children:"file_download"}),sx:{maxWidth:"300px"},variant:"contained",onClick:Object(ie.a)(re.a.mark((function e(){var a,t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:if(a=e.sent){e.next=7;break}return v(),e.abrupt("return");case 7:if(t=JSON.parse(fa.decompressFromBase64(a)),Array.isArray(t.transforms)){e.next=11;break}return v(),e.abrupt("return");case 11:n(t),p(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),v();case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),children:"Import from clipboard"}),o&&Object(W.jsx)(ma.a,{severity:"info",sx:{maxWidth:"300px"},children:o}),h&&Object(W.jsx)(ma.a,{severity:"error",sx:{maxWidth:"300px"},children:"Error importing from clipboard"})]})},pa=function(){var e=r.a.useState({dirty:!1,transforms:[],baseImage:void 0}),a=Object(s.a)(e,2),n=a[0],t=a[1];var i=!n.baseImage||0===n.transforms.length||!n.dirty||n.transforms.some((function(e){return ta(e.transformName).params.length>0&&e.paramsValues.every((function(e,a){return!1===e.valid}))}));return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(u.a,{}),Object(W.jsx)(l.a,{children:Object(W.jsxs)(d.a,{spacing:4,justifyContent:"space-evenly",divider:Object(W.jsx)(m.a,{}),children:[Object(W.jsx)(f.a,{variant:"h2",pt:4,children:"Partymoji"}),Object(W.jsxs)(d.a,{spacing:4,divider:Object(W.jsx)(m.a,{}),children:[Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Source Image"}),Object(W.jsx)(xe,{name:"Choose a source image",currentImageUrl:n.baseImage,onChange:function(e){t(Object(c.a)(Object(c.a)({},n),{},{baseImage:e,dirty:!0}))}})]})}),Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsx)(da,{currentTransforms:n.transforms,possibleTransforms:na,onTransformsChange:function(e){return t(Object(c.a)(Object(c.a)({},n),{},{dirty:!0,transforms:e}))}})}),Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsx)(sa,{isDirty:n.dirty,baseImageUrl:n.baseImage,computeDisabled:i,transforms:n.transforms,onComputed:function(){return t(Object(c.a)(Object(c.a)({},n),{},{dirty:!1}))}})}),Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsx)(ha,{state:n,onImport:function(e){return t(Object(c.a)(Object(c.a)({},e),{},{dirty:!0}))}})}),false,Object(W.jsx)("a",{href:"https://github.com/MikeyBurkman/partymoji",target:"_blank",rel:"noreferrer",children:Object(W.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",width:64,height:64,alt:"Github Link"})})]})]})})]})};o.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(pa,{})}),document.getElementById("root"))}},[[372,1,2]]]);
//# sourceMappingURL=main.53adf6b1.chunk.js.map