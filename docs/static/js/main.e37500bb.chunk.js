(this.webpackJsonppartymoji=this.webpackJsonppartymoji||[]).push([[0],{231:function(e,a){},233:function(e,a){},246:function(e,a){},257:function(e,a){},372:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(51),o=n.n(i),c=n(23),s=n(5),u=n(435),l=n(451),d=n(417),m=n(424),f=n(439),h=n(441),p=function(e){return{name:e.name,params:e.params,description:e.description,fn:e.fn}},j=n(16),v=n(129),b=function(e){var a=Object(s.a)(e,3),n=a[0],t=a[1],r=a[2],i=function(e){var a=e.toString(16).toUpperCase();return 2===a.length?a:"0"+a};return"#".concat(i(n)).concat(i(t)).concat(i(r))},g=function(e){return[parseInt(e.toUpperCase().substr(1,2),16),parseInt(e.toUpperCase().substr(3,2),16),parseInt(e.toUpperCase().substr(5,2),16),255]},O=function(e){return e[3]<64},x=function(e){return[Math.floor(256*e.int32()),Math.floor(256*e.int32()),Math.floor(256*e.int32()),255]},w=function(e){var a=Object(s.a)(e,3),n=a[0],t=a[1],r=a[2];return Math.round((n+t+r)/3)},C=function(e){var a=Object(s.a)(e,4),n=a[0],t=a[1],r=a[2],i=a[3],o=function(e){return Math.max(Math.min(e,255),0)};return[o(n),o(t),o(r),o(i)]},M=function(e,a,n){var t=Object(s.a)(e,2),r=t[0],i=t[1],o=Object(s.a)(n,2),c=o[0],u=o[1];if(c<0||c>=r||u<0||u>=i)return[0,0,0,0];var l=I(e,c,u);return[a[l],a[l+1],a[l+2],a[l+3]]};function V(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected falsy value";if(!e)throw new v.AssertionError({message:a,actual:e})}var k=function(e,a){var n=e.frames.map((function(n,t){return{data:a(n.data,t,e.frames.length)}}));return{dimensions:e.dimensions,frames:n}},y=function(e,a){for(var n=Object(s.a)(e,2),t=n[0],r=n[1],i=new Uint8Array(t*r*4),o=0;o<r;o+=1)for(var c=0;c<t;c+=1){var u=C(a([c,o])),l=I(e,c,o);i[l]=u[0],i[l+1]=u[1],i[l+2]=u[2],i[l+3]=u[3]}return i},S=function(e){return function(a){var n=a.image,t=a.random,r=a.parameters;return k(n,(function(a,i,o){return y(n.dimensions,(function(c){return e({image:n,dimensions:n.dimensions,random:t,parameters:r,coord:c,frameCount:o,frameIndex:i,getSrcPixel:function(e){return M(n.dimensions,a,e)}})}))}))}},P=function(e){return Object(j.a)(new Array(e)).map((function(e,a){return a}))},I=function(e,a,n){return 4*(a+n*Object(s.a)(e,1)[0])},F=function(e){var a=I(e.dimensions,e.coord[0],e.coord[1]);e.image[a]=e.color[0],e.image[a+1]=e.color[1],e.image[a+2]=e.color[2],e.image[a+3]=e.color[3]},T=function(e){var a=e.image,n=e.newWidth,t=e.newHeight,r=Object(s.a)(a.dimensions,2),i=r[0],o=r[1],c=i/n,u=o/t,l=[n,t];return{frames:a.frames.map((function(e){for(var r=new Uint8Array(n*t*4),i=0;i<t;i+=1)for(var o=0;o<n;o+=1){var s=Math.floor(o*c),d=Math.floor(i*u),m=M(a.dimensions,e.data,[s,d]);F({color:m,coord:[o,i],dimensions:l,image:r})}return{data:r}})),dimensions:[n,t]}},N=[[255,141,139,255],[254,214,137,255],[136,255,137,255],[135,255,255,255],[139,181,254,255],[215,140,255,255],[255,140,255,255],[255,104,247,255],[254,108,183,255],[255,105,104,255]],R=p({name:"Background Party",description:"Transparent pixels will flash bright party colors",params:[],fn:S((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=(0,e.getSrcPixel)(a);if(O(r)){var i=Math.floor(t/n*N.length);return N[i]}return r}))}),B=n(436),U=n(440),A=n(432),H=n(426),z=n(433),W=n(1),E=function(e){var a=e.name,n=e.options,t=e.value,r=e.description,i=e.onChange;return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),r&&Object(W.jsx)(B.a,{title:r,children:Object(W.jsx)(U.a,{fontSize:"small",children:"help"})})]}),Object(W.jsx)(A.a,{children:Object(W.jsx)(H.a,{autoWidth:!0,value:t,onChange:function(e){return i({valid:!0,value:e.target.value})},children:n.map((function(e){return Object(W.jsx)(z.a,{value:e.value,children:e.name},e.value)}))})})]})};function q(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(E,{name:e.name,value:a.value.valid?a.value.value:void 0,options:e.options,description:e.description,onChange:a.onChange})}}}var D=n(19),_=n.n(D),L=n(29),G=n(179),J=n.n(G),X=n(180),Y=n.n(X),K=n(96),Q=n.n(K),Z=function(){var e=Object(L.a)(_.a.mark((function e(a,n,t){var r,i,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Q()(a),e.next=3,ae(a);case 3:return i=e.sent,o=[],n.reduce((function(e,a){var n=a.transform.fn({image:e,parameters:a.params,random:r});return o.push(n),n}),i),e.next=8,Promise.all(o.map(function(){var e=Object(L.a)(_.a.mark((function e(a){var n,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ne(a,r),i=$(a.frames.map((function(e){return e.data})),n),e.next=4,ee(a.dimensions,i,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(a,n,t){return e.apply(this,arguments)}}(),$=function(e,a){return e.map((function(e){for(var n=new Uint8Array(e.length),t=0;t<e.length;t+=4)a&&e[t+3]<128?(n[t]=a[0],n[t+1]=a[1],n[t+2]=a[2],n[t+3]=a[3]):(n[t]=e[t],n[t+1]=e[t+1],n[t+2]=e[t+2],n[t+3]=255);return n}))},ee=function(){var e=Object(L.a)(_.a.mark((function e(a,n,t,r){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var i=Object(s.a)(a,2),o=i[0],c=i[1],u=new Y.a(o,c);if(u.setFrameRate(r),u.setRepeat(0),t){var l=b(t).slice(1);u.setTransparent("0x".concat(l))}u.writeHeader();var d=[];u.on("data",(function(e){d.push(e)})),u.on("end",(function(){var a=URL.createObjectURL(new Blob(d,{type:"image/gif"}));e(a)})),n.forEach((function(e){u.addFrame(e)})),u.finish()})));case 1:case"end":return e.stop()}}),e)})));return function(a,n,t,r){return e.apply(this,arguments)}}(),ae=function(e){return new Promise((function(a,n){return J()(e,(function(e,t){return e?n(e):a({frames:[{data:Uint8Array.from(t.data)}],dimensions:[t.shape[0],t.shape[1]]})}))}))},ne=function(e,a){var n=!1,t=new Set,r=Object(s.a)(e.dimensions,2),i=r[0],o=r[1],c=b([0,255,0,255]);return e.frames.forEach((function(r){for(var s=0;s<o;s+=1)for(var u=0;u<i;u+=1){var l=M(e.dimensions,r.data,[u,s]);if(O(l))n=!0;else{var d=b(l);t.add(d),d===c&&(c=te(a,t))}}})),n?g(c):void 0},te=function e(a,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=b(x(a));return t>2e3?r:n.has(r)?e(a,n,t+1):r},re=n(444),ie=function(e){var a=e.currentImageUrl,n=e.name,t=e.width,r=e.height,i=e.onChange;return Object(W.jsxs)(d.a,{maxWidth:300,spacing:4,children:[Object(W.jsxs)(re.a,{startIcon:Object(W.jsx)(U.a,{children:"image"}),variant:"contained",component:"label",children:[n,Object(W.jsx)("input",{type:"file",hidden:!0,accept:"image/png,image/jpg",name:"source-png",onChange:function(){var e=Object(L.a)(_.a.mark((function e(a){var n,t,r,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Array.from(null!==(n=a.target.files)&&void 0!==n?n:[]),r=t[0],e.next=4,oe(r);case 4:o=e.sent,i(o);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()})]}),a&&Object(W.jsx)("img",{width:t,height:r,src:a,alt:"Source"})]})},oe=function(e){return new Promise((function(a){var n=new FileReader;n.onload=function(){return a(n.result)},n.readAsDataURL(e)}))};var ce=p({name:"Background Image",description:"Select another image to be used as a background or foreground",params:[function(e){var a=e.name;return{name:a,defaultValue:{valid:!1},fn:function(e){return Object(W.jsx)(ie,{currentImageUrl:e.value.valid?e.value.value.dataUrl:void 0,name:a,width:64,height:64,onChange:function(){var a=Object(L.a)(_.a.mark((function a(n){var t;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ae(n);case 2:t=a.sent,e.onChange({valid:!0,value:{dataUrl:n,image:t}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()})}}}({name:"Image"}),q({name:"Type",defaultValue:"background",options:[{name:"Background",value:"background"},{name:"Foreground",value:"foreground"}]})],fn:function(e){var a=e.image,n=e.parameters,t=T({image:n[0].image,newWidth:a.dimensions[0],newHeight:a.dimensions[1]}),r=n[1];return k(a,(function(e){return y(a.dimensions,(function(n){var i=M(a.dimensions,e,n),o=M(t.dimensions,t.frames[0].data,n);return"background"===r?O(i)?o:i:O(o)?i:o}))}))}}),se=n(430),ue=n(445),le=function(e){var a=e.name,n=e.value,t=e.description,i=e.parse,o=e.onChange,c=r.a.useState(void 0===n?void 0:n.toString()),u=Object(s.a)(c,2),l=u[0],m=u[1],h=r.a.useState(""),p=Object(s.a)(h,2),j=p[0],v=p[1];return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(B.a,{title:t,children:Object(W.jsx)(U.a,{fontSize:"small",children:"help"})})]}),Object(W.jsxs)(A.a,{children:[Object(W.jsx)(se.a,{error:!!j,defaultValue:n,onBlur:function(){if(void 0!==l&&(!n||l!==n.toString())){var e=i(l);e.valid?v(""):v(e.reason),o(e)}},onChange:function(e){m(e.target.value)}}),j&&Object(W.jsx)(ue.a,{children:j})]})]})},de=function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){var n=e.min,t=e.max;return Object(W.jsx)(le,{name:e.name,description:e.description,parse:function(e){var a=parseFloat(e);return isNaN(a)?{valid:!1,reason:"Must be a number"}:void 0!==n&&a<n?{valid:!1,reason:"Must be greater than or equal to ".concat(n)}:void 0!==t&&a>t?{valid:!1,reason:"Must be less than or equal to ".concat(t)}:{valid:!0,value:a}},onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}},me=p({name:"Bounce",description:"Make the image bounce up and down",params:[de({name:"Bounce Speed",description:"Positive number",defaultValue:5,min:0})],fn:S((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(a,2);return r([o[0],o[1]+Math.round(i[0]*Math.sin(t/n*2*Math.PI))])}))}),fe=function(e){var a=e.name,n=e.value,t=e.description,i=e.parse,o=e.onChange,c=r.a.useState(void 0===n?void 0:n.toString()),u=Object(s.a)(c,2),l=u[0],m=u[1],h=r.a.useState(""),p=Object(s.a)(h,2),j=p[0],v=p[1];return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(B.a,{title:t,children:Object(W.jsx)(U.a,{fontSize:"small",children:"help"})})]}),Object(W.jsxs)(A.a,{children:[Object(W.jsx)(se.a,{error:!!j,defaultValue:n,onBlur:function(){if(void 0!==l&&(!n||l!==n.toString())){var e=i(l);e.valid?v(""):v(e.reason),o(e)}},onChange:function(e){m(e.target.value)}}),j&&Object(W.jsx)(ue.a,{children:j})]})]})},he=function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){var n=e.min,t=e.max;return Object(W.jsx)(fe,{name:e.name,description:e.description,parse:function(e){var a=parseInt(e,10);return isNaN(a)?{valid:!1,reason:"Must be an integer"}:void 0!==n&&a<n?{valid:!1,reason:"Must be greater than or equal to ".concat(n)}:void 0!==t&&a>t?{valid:!1,reason:"Must be less than or equal to ".concat(t)}:{valid:!0,value:a}},onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}},pe=p({name:"Brightness",description:"Increase or decrease the brightness of the image",params:[he({name:"Amount",description:"-100 to 100",defaultValue:0,min:-100,max:100})],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,1)[0]/100*255,i=n(a);return C([i[0]+r,i[1]+r,i[2]+r,i[3]])}))}),je=p({name:"Circle",description:"Make the image move in a circular pattern",params:[de({name:"Radius",description:"Positive number",defaultValue:10,min:0})],fn:S((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(i,1)[0],c=Object(s.a)(a,2),u=c[0],l=c[1];return r([u+Math.round(o*Math.sin(-2*Math.PI*(t/n))),l+Math.round(o*Math.cos(-2*Math.PI*(t/n)))])}))}),ve=p({name:"Expand",description:"Make the image grow and shrink",params:[de({name:"Radius",description:"Positive number",defaultValue:10,min:0})],fn:S((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=r/t,u=Math.cos(2*c*Math.PI)*o[0],l=Object(s.a)(a,2),d=l[0],m=l[1],f=d/2,h=m/2,p=Object(s.a)(n,2),j=p[0],v=p[1],b=(j-f)/d,g=(v-h)/m;return i([j-Math.floor(u*b),v-Math.round(u*g)])}))}),be=p({name:"Fisheye",description:"Make the image grow and shrink in a distorted fashion",params:[de({name:"Radius",description:"Positive Number",defaultValue:10,min:0})],fn:S((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=r/t,u=c<.5,l=Object(s.a)(a,2),d=l[0],m=l[1],f=(u?c:1-c)*o[0],h=d/2,p=m/2,j=Object(s.a)(n,2),v=j[0],b=j[1],g=Math.atan2(p-b,h-v);return i([v+Math.round(f*Math.cos(g)),b+Math.round(f*Math.sin(g))])}))}),ge=p({name:"Frame Count",description:"Set how many frames of animation there will be. This is required for all animation transforms",params:[he({name:"Number of Frames",description:"Positive integer",defaultValue:10,min:1})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(n,1)[0],r=a.frames,i=P(t).map((function(e){return{data:r[e]?r[e].data:r[r.length-1].data}}));return{dimensions:a.dimensions,frames:i}}}),Oe=p({name:"Grayscale",description:"Make the image black and white",params:[],fn:S((function(e){var a=e.coord,n=(0,e.getSrcPixel)(a);if(O(n))return[0,0,0,0];var t=w(n);return[t,t,t,255]}))}),xe=n(37),we=p({name:"Hue Party",description:"Shift through all the hues",params:[],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.frameCount,r=e.frameIndex,i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=xe.rgb.hsl([c,u,l]),f=Object(s.a)(m,3),h=f[1],p=f[2],j=xe.hsl.rgb([r/t*255,h,p]),v=Object(s.a)(j,3);return[(c+v[0])/2,(u+v[1])/2,(l+v[2])/2,d]}))}),Ce=n(99),Me=function(e){var a=e.name,n=e.value,t=e.description,r=e.onChange,i=void 0===n?void 0:b([].concat(Object(j.a)(xe.hsl.rgb([n,255,255])),[255]));return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(B.a,{title:t,children:Object(W.jsx)(U.a,{fontSize:"small",children:"help"})})]}),Object(W.jsx)(Ce.a,{color:i,onChangeComplete:function(e){var a=e.hsl;return r({valid:!0,value:a.h})}})]})};var Ve,ke=p({name:"Hue Shift",description:"Shift the hue to some other color",params:[(Ve={name:"Hue",defaultValue:128},{name:Ve.name,defaultValue:Ve.defaultValue?{valid:!0,value:Ve.defaultValue}:{valid:!1},fn:function(e){return Object(W.jsx)(Me,{name:Ve.name,value:e.value.valid?e.value.value:void 0,onChange:e.onChange})}})],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,1)[0],i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=xe.rgb.hsl(c,u,l),f=Object(s.a)(m,3),h=f[1],p=f[2],j=xe.hsl.rgb([r,h,p]),v=Object(s.a)(j,3);return[v[0],v[1],v[2],d]}))}),ye=function(e){var a=e.name,n=e.value,t=e.description,i=e.onChange,o=r.a.useState(n),c=Object(s.a)(o,2),u=c[0],l=c[1];return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(B.a,{title:t,children:Object(W.jsx)(U.a,{fontSize:"small",children:"help"})})]}),Object(W.jsx)(A.a,{children:Object(W.jsx)(se.a,{defaultValue:n,onChange:function(e){return l(e.target.value)},onBlur:function(){return i(u?{valid:!0,value:u}:{valid:!1})}})})]})},Se=[[0,15,40,255],[150,150,175,255],[180,180,205,255],[210,210,235,255]],Pe=p({name:"Lightning",description:"Make the background look like a thunderstorm",params:[function(e){return{name:e.name,defaultValue:void 0!==e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(ye,{name:e.name,description:e.description,onChange:a.onChange,value:a.value.valid?a.value.value:void 0})}}}({name:"Random Seed",description:"Can be anything. Will determine the randomness of the lightning.",defaultValue:"lightning"})],fn:function(e){var a=e.image,n=e.parameters,t=Q()(n[0]);return k(a,(function(e){var n=t(),r=n<.9?0:n<.95?1:n<.98?2:3;return y(a.dimensions,(function(n){var t=M(a.dimensions,e,n);if(O(t))return Se[r];if(r>0){var i=1.02*r;return[t[0]*i,t[1]*i,t[2]*i,t[3]]}return t}))}))}}),Ie=p({name:"Nuke",description:"Oh no...",params:[],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.frameCount,r=e.frameIndex/t*255,i=n(a),o=Object(s.a)(i,4),c=o[0],u=o[1],l=o[2],d=o[3],m=xe.rgb.hsl(c,u,l),f=Object(s.a)(m,3),h=f[0],p=f[1],j=f[2],v=xe.hsl.rgb([h,p,j>r?j:0]),b=Object(s.a)(v,3);return[b[0],b[1],b[2],j>r?d:0]}))}),Fe=[[255,141,139,255],[254,214,137,255],[136,255,137,255],[135,255,255,255],[139,181,254,255],[215,140,255,255],[255,140,255,255],[255,104,247,255],[254,108,183,255],[255,105,104,255]],Te=p({name:"Party",description:"Make the image flash different colors",params:[],fn:S((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=(0,e.getSrcPixel)(a);if(O(r))return[0,0,0,0];var i=Math.floor(t/n*Fe.length),o=Fe[i],c=w(r);return[c*o[0]/255,c*o[1]/255,c*o[2]/255,255]}))}),Ne=n(423),Re=n(446),Be=n(447),Ue=function(e){var a=e.mainEle,n=e.children,t=r.a.useState(!0),i=Object(s.a)(t,2),o=i[0],c=i[1];return Object(W.jsx)(Ne.a,{onClickAway:function(){return c(!0)},children:Object(W.jsxs)(Re.a,{children:[Object(W.jsx)(re.a,{onClick:function(){return c(!o)},style:{textTransform:"none"},children:Object(W.jsxs)(d.a,{direction:"row",spacing:4,children:[Object(W.jsx)("div",{children:a}),Object(W.jsx)(U.a,{children:o?"expand_less":"expand_more"})]})}),Object(W.jsx)(Be.a,{in:!o,children:n})]})})},Ae=function(e){var a=e.color;return Object(W.jsx)("div",{style:{width:"1.5em",height:"1.5em",backgroundColor:b(a)}})},He=function(e){var a=e.name,n=e.value,t=e.description,r=e.onChange;return Object(W.jsx)(Ue,{mainEle:Object(W.jsxs)(d.a,{direction:"row",spacing:4,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),t&&Object(W.jsx)(B.a,{title:t,children:Object(W.jsx)(U.a,{children:"help"})}),n&&Object(W.jsx)(Ae,{color:n})]}),children:Object(W.jsx)(Ce.b,{disableAlpha:!0,presetColors:[],color:n?b(n):void 0,onChangeComplete:function(e){return r({valid:!0,value:g(e.hex)})}})})};function ze(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(He,{name:e.name,value:a.value.valid?a.value.value:void 0,onChange:a.onChange})}}}var We=n(448),Ee=function(e){var a=e.name,n=e.newParamText,t=e.createNewParam,i=e.value,o=e.description,c=e.onChange,u=r.a.useState(void 0===i?[]:i.map((function(e,a){return{param:t(),pValue:e}}))),l=Object(s.a)(u,2),m=l[0],p=l[1];return Object(W.jsx)(h.a,{children:Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:1,children:[Object(W.jsx)(f.a,{variant:"body2",children:a}),o&&Object(W.jsx)(B.a,{title:o,children:Object(W.jsx)(U.a,{children:"help"})})]}),m.map((function(e,n){var t=e.param,r=e.pValue,i=t.fn({value:{valid:!0,value:r},onChange:function(e){if(e.valid){var a=m.map((function(a,r){return n===r?{param:t,pValue:e.value}:a}));p(a),c({valid:!0,value:a.map((function(e){return e.pValue}))})}}});return Object(W.jsxs)(d.a,{direction:"row",children:[Object(W.jsx)(We.a,{onClick:function(){var e=m.filter((function(e,a){return a!==n}));p(e),c({valid:!0,value:e.map((function(e){return e.pValue}))})},children:Object(W.jsx)(U.a,{children:"delete"})}),i]},"".concat(a,"-").concat(n))})),Object(W.jsx)(re.a,{variant:"contained",onClick:function(){var e=t(),a=[].concat(Object(j.a)(m),[{param:e,pValue:e.defaultValue.valid?e.defaultValue.value:void 0}]);p(a),e.defaultValue.valid&&c({valid:!0,value:a.map((function(e){return e.pValue}))})},children:n})]})})};function qe(e){return{name:e.name,defaultValue:e.defaultValue?{valid:!0,value:e.defaultValue}:{valid:!1},fn:function(a){return Object(W.jsx)(Ee,{name:e.name,newParamText:e.newParamText,value:a.value.valid?a.value.value:void 0,createNewParam:e.createNewParam,description:e.description,onChange:a.onChange})}}}var De=["#FF0000","#FF9600","#FFFF00","#00FF00","#00FF96","#00FFFF","#0000FF","#B400FF"].map(g),_e=p({name:"Pinwheel",description:"Create a pinwheel of colors",params:[he({name:"Offset X",description:"Change the horizontal center of the pinwheel",defaultValue:0}),he({name:"Offset Y",description:"Change the vertical center of the pinwheel",defaultValue:40}),he({name:"Group Count",description:"How many times each color is repeated. Positive integer",defaultValue:1,min:1}),qe({name:"Colors",newParamText:"New Color",description:"Colors for the pinwheel",defaultValue:De,createNewParam:function(){return ze({name:"Color"})}})],fn:S((function(e){for(var a=e.coord,n=e.dimensions,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=i(a),u=Object(s.a)(o,4),l=u[0],d=u[1],m=u[2],f=u[3],h=f.length*m,p=Math.round(360/h),j=f.length;"00"!==(h/j).toFixed(2).slice(-2);)j-=1;if(O(c)){var v=n[0]/2+l,b=n[1]/2+d,g=Object(s.a)(a,2),x=g[0]-v,w=g[1]-b,C=(360+180*Math.atan2(w,x)/Math.PI)%360,M=Math.floor(C/p)%j,V=r/t;return f[(Math.floor(V*j)+M)%j]}return c}))}),Le=["#FF0000","#FF9600","#FFFF00","#00FF00","#00FF96","#00FFFF","#0000FF","#B400FF"].map(g),Ge=[ce,R,me,pe,je,ve,be,ge,Oe,we,ke,Pe,Ie,Te,_e,p({name:"Radiance",description:"Radiate colors out in rings",params:[he({name:"Group Count",description:"How many times each color is repeated. Positive integer",defaultValue:1,min:1}),qe({name:"Colors",newParamText:"New Color",description:"The colors that make up each ring",defaultValue:Le,createNewParam:function(){return ze({name:"Color"})}})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(n,2),r=t[0],i=t[1],o=P(r).flatMap((function(){return i})),c=Object(s.a)(a.dimensions,2),u=c[0],l=c[1],d=u/2,m=l/2;return k(a,(function(e,n,t){return y(a.dimensions,(function(r){var i=M(a.dimensions,e,r);if(O(i)){var c=Object(s.a)(r,2),f=c[0],h=c[1],p=f-d,j=h-m,v=Math.sqrt(u/2*(u/2)+l/2*(l/2)),b=Math.sqrt(j*j+p*p),g=Math.floor((1-b/v)*o.length)%o.length,x=n/t,w=(Math.floor(x*o.length)+g)%o.length;return o[w]}return i}))}))}}),p({name:"Resize",description:"Resize the image. Will grow/shrink the image.",params:[he({name:"Width",defaultValue:128,min:1}),he({name:"Height",defaultValue:128,min:1})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(n,2),r=t[0],i=t[1];return T({image:a,newWidth:r,newHeight:i})}}),p({name:"Resize Background",description:"Resize only the background. Will not change the size of the image itself. Extra pixels will be made transparent",params:[he({name:"Width",defaultValue:128,min:0}),he({name:"Height",defaultValue:128,min:0})],fn:function(e){var a=e.image,n=e.parameters,t=Object(s.a)(a.dimensions,2),r=t[0],i=t[1],o=Object(s.a)(n,2),c=o[0],u=o[1];V(c>=r,"New width for resize-background needs to be greater than or equal to the original"),V(u>=i,"New height for resize-background needs to be greater than or equal to the original");var l=[c,u],d=(c-r)/2,m=(u-i)/2;return{frames:a.frames.map((function(e){for(var n=new Uint8Array(c*u*4),t=0;t<u;t+=1)for(var r=0;r<c;r+=1){var i=r>d&&r<c-d&&t>m&&t<u-m?M(a.dimensions,e.data,[r-d,t-m]):[0,0,0,0];F({color:i,coord:[r,t],dimensions:l,image:n})}return{data:n}})),dimensions:l}}}),p({name:"Ripple",description:"Create a ripple effect, like water",params:[de({name:"Amplitude",defaultValue:10,description:"How strong the ripple effect should be"}),de({name:"Period",defaultValue:2,min:0,description:"How many ripples you want. Positive number."})],fn:function(e){var a=e.image,n=e.parameters;return k(a,(function(e,t,r){var i=Object(s.a)(n,2),o=i[0],c=i[1],u=a.dimensions[1],l=t/r*2*Math.PI;return y(a.dimensions,(function(n){var t=Object(s.a)(n,2),r=t[0],i=t[1],d=Math.round(o*Math.sin(i/u*c*Math.PI+l));return M(a.dimensions,e,[r+d,i])}))}))}}),p({name:"Rotate",description:"Make the image rotate about the center point",params:[q({name:"Direction",defaultValue:-1,options:[{name:"Clockwise",value:-1},{name:"Counter-Clockwise",value:1}]})],fn:S((function(e){var a=e.dimensions,n=e.coord,t=e.frameCount,r=e.frameIndex,i=e.getSrcPixel,o=e.parameters,c=Object(s.a)(o,1)[0],u=a[0]/2,l=a[1]/2,d=Object(s.a)(n,2),m=d[0]-u,f=d[1]-l,h=r/t*(c||1),p=Math.cos(2*Math.PI*h),j=Math.sin(2*Math.PI*h);return i([Math.round(u+m*p-f*j),Math.round(l+f*p+m*j)])}))}),p({name:"Roxbury",description:"Baby, don't hurt me",params:[],fn:function(e){var a=e.image;return k(a,(function(e,n,t){var r=n/t,i=Math.floor(4*r),o=4*(r-i/4),c=Math.PI/2*.2,u=0===i?0:1===i?o*c:2===i?c:(1-o)*c,l=Math.cos(1.35*-u),d=Math.sin(1.35*-u),m=.25*a.dimensions[0],f=.7*a.dimensions[1];return y(a.dimensions,(function(n){var t=Object(s.a)(n,2),r=t[0],i=t[1],o=Math.floor(r-m+8*Math.sin(u)),c=Math.floor(i-f+8*Math.cos(u)),h=[Math.round(m+o*l-c*d),Math.round(f+c*l+o*d)];return M(a.dimensions,e,h)}))}))}}),p({name:"Shake",description:"Make the image shake back and forth",params:[de({name:"Amplitude",defaultValue:10,min:0})],fn:S((function(e){var a=e.coord,n=e.frameCount,t=e.frameIndex,r=e.getSrcPixel,i=e.parameters,o=Object(s.a)(i,1)[0],c=Object(s.a)(a,2),u=c[0],l=c[1];return r([u+Math.round(o*Math.cos(t/n*2*Math.PI)),l])}))}),p({name:"Solid Background",description:"Change all transparent pixles to the given color",params:[ze({name:"Background Color",defaultValue:g("#000000")})],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,1)[0],i=n(a);return O(i)?r:i}))}),p({name:"Static",description:"Adds random static to the image",params:[de({name:"Strength",description:"Positive nunber",defaultValue:1.2,min:0})],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=e.random,i=Object(s.a)(t,1)[0],o=n(a);return O(o)?[0,0,0,0]:Math.ceil(r()*i)>1?[255-o[0],255-o[1],255-o[2],o[3]]:o}))}),p({name:"Transparent Color",description:"All pixels similar in color to the chosen one will be made transparent",params:[ze({name:"Transparent Color",defaultValue:g("#000000")}),he({name:"Tolerance",description:'A higher number will mean colors that are "close" to the chosen color will be transparent. (0 - 100)',defaultValue:10,min:0,max:100})],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,2),i=r[0],o=r[1],c=n(a),u=c[0]-i[0],l=c[1]-i[1],d=c[2]-i[2];return Math.sqrt(u*u+l*l+d*d)/255*100<=o?[c[0],c[1],c[2],0]:c}))}),p({name:"Transpose",description:"Move the image left or right, up or down",params:[he({name:"X",defaultValue:0}),he({name:"Y",defaultValue:0})],fn:S((function(e){var a=e.coord,n=e.getSrcPixel,t=e.parameters,r=Object(s.a)(t,2),i=r[0],o=r[1],c=Object(s.a)(a,2);return n([c[0]+i,c[1]+o])}))})],Je=function(e){var a=Ge.find((function(a){return a.name===e}));return V(a),a},Xe=n(449),Ye=n(438),Ke=he({name:"Frames per Second",defaultValue:20,min:0}),Qe=function(e){var a=e.isDirty,n=e.computeDisabled,t=e.baseImageUrl,i=e.transforms,o=e.onComputed,c=r.a.useState({loading:!1,results:[],computeTime:void 0}),u=Object(s.a)(c,2),l=u[0],h=u[1],p=r.a.useState(!1),j=Object(s.a)(p,2),v=j[0],b=j[1],g=r.a.useState(20),O=Object(s.a)(g,2),x=O[0],w=O[1],C=n&&!v;return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Create Gif"}),Ke.fn({value:{valid:!0,value:x},onChange:function(e){e.valid&&(w(e.value),b(!0))}}),Object(W.jsx)(re.a,{variant:"contained",endIcon:l.loading||!a&&!v?void 0:Object(W.jsx)(U.a,{children:"priority_high"}),disabled:C,onClick:Object(L.a)(_.a.mark((function e(){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=i.map((function(e){return{transform:Je(e.transformName),params:e.paramsValues.map((function(e){return V(e.valid),e.value}))}})),h({loading:!0}),setTimeout(Object(L.a)(_.a.mark((function e(){var n,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V(t,"No source image, this button should be disabled!"),n=Date.now(),e.next=5,Z(t,a,x);case 5:r=e.sent,c=Math.ceil((Date.now()-n)/1e3),h({loading:!1,computeTime:c,results:r.map((function(e,a){return{transformName:i[a].transformName,gif:e}}))}),b(!1),o(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),console.error(e.t0.stack);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))));case 3:case"end":return e.stop()}}),e)}))),children:l.loading?Object(W.jsx)(Xe.a,{color:"inherit"}):"Compute"}),Object(W.jsx)(m.a,{}),!l.loading&&l.computeTime&&Object(W.jsxs)(f.a,{variant:"caption",children:["Compute Time: ",l.computeTime," second(s)"]}),Object(W.jsx)(m.a,{}),!l.loading&&Object(W.jsx)(Ye.a,{container:!0,spacing:2,padding:1,columns:{xs:4,sm:8,md:12},children:l.results.map((function(e,a){var n=e.gif,t=e.transformName;return Object(W.jsxs)(Ye.a,{item:!0,xs:4,sm:4,md:4,children:[Object(W.jsx)(f.a,{variant:"subtitle2",children:t}),Object(W.jsx)("img",{src:n,alt:"gif-".concat(t,"-").concat(a)})]})}))})]})},Ze=n(428),$e=function(e){var a=e.selectedTransform,n=e.possibleTransforms,t=e.index,i=e.onSelect,o=e.onRemove,s=e.onMoveLeft,u=e.onMoveRight;return Object(W.jsx)(h.a,{style:{padding:8},elevation:3,children:Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsxs)(d.a,{direction:"row",spacing:2,children:[Object(W.jsx)(f.a,{variant:"subtitle1",children:t+1}),Object(W.jsx)(B.a,{title:"Delete transform",children:Object(W.jsx)(We.a,{"aria-label":"delete",onClick:o,children:Object(W.jsx)(U.a,{children:"delete"})})}),Object(W.jsx)(B.a,{title:"Move transform left",children:Object(W.jsx)(We.a,{"aria-label":"delete",onClick:s,disabled:!s,children:Object(W.jsx)(U.a,{children:"chevron_left"})})}),Object(W.jsx)(B.a,{title:"Move transform right",children:Object(W.jsx)(We.a,{"aria-label":"delete",onClick:u,disabled:!u,children:Object(W.jsx)(U.a,{children:"chevron_right"})})})]}),Object(W.jsx)(d.a,{direction:"row",spacing:4,children:Object(W.jsx)(A.a,{fullWidth:!0,children:Object(W.jsx)(Ze.a,{disableClearable:!0,value:a.transform.name,options:n.map((function(e){return e.name})),onChange:function(e,a){var t=n.find((function(e){return e.name===a}));i({transform:t,paramValues:t.params.map((function(e){return e.defaultValue}))})},renderInput:function(e){return Object(W.jsx)(se.a,Object(c.a)(Object(c.a)({},e),{},{label:"Transform"}))}})})}),a.transform.description&&Object(W.jsx)(f.a,{variant:"caption",children:a.transform.description}),a.transform.params.length>0&&Object(W.jsx)(f.a,{variant:"subtitle1",children:"Parameters"}),Object(W.jsx)(d.a,{divider:Object(W.jsx)(m.a,{}),spacing:2,children:a.transform.params.map((function(e,n){var t=e.fn({value:a.paramValues[n],onChange:function(e){i(Object(c.a)(Object(c.a)({},a),{},{paramValues:a.paramValues.map((function(a,t){return t===n?e:a}))}))}});return Object(W.jsx)(r.a.Fragment,{children:t},"".concat(a.transform.name,"-").concat(e.name))}))})]})})},ea=function(e){var a=e.currentTransforms,n=e.possibleTransforms,t=e.onTransformsChange;return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Image Transforms"}),Object(W.jsx)(re.a,{fullWidth:!1,variant:"contained",onClick:function(){return t([].concat(Object(j.a)(a),[{transformName:n[0].name,paramsValues:n[0].params.map((function(e){return e.defaultValue}))}]))},children:"New Transform"}),Object(W.jsx)(Ye.a,{container:!0,spacing:2,padding:1,columns:{xs:4,sm:8,md:12},children:a.map((function(e,r){return Object(W.jsx)(Ye.a,{item:!0,xs:4,sm:4,md:4,children:Object(W.jsx)($e,{index:r,possibleTransforms:n,selectedTransform:{transform:Je(e.transformName),paramValues:e.paramsValues},onRemove:function(){return t(a.filter((function(e,a){return a!==r})))},onMoveLeft:r>0?function(){return t(a.map((function(e,n){return n===r-1?a[n+1]:r===n?a[r-1]:e})))}:void 0,onMoveRight:r<a.length-1?function(){return t(a.map((function(e,n){return n===r+1?a[n-1]:r===n?a[r+1]:e})))}:void 0,onSelect:function(e){return t(a.map((function(a,n){return r===n?{transformName:e.transform.name,paramsValues:e.paramValues,computedImage:void 0}:{transformName:a.transformName,paramsValues:a.paramsValues,computedImage:void 0}})))}})})}))})]})},aa=n(450),na=n(429),ta=n(431),ra=n(135),ia=function(e){var a=e.state,n=e.onImport,t=r.a.useState(!0),i=Object(s.a)(t,2),o=i[0],u=i[1],l=r.a.useState(),h=Object(s.a)(l,2),p=h[0],j=h[1],v=r.a.useState(!1),b=Object(s.a)(v,2),g=b[0],O=b[1],x=function(){O(!0),setTimeout((function(){return O(!1)}),2e3)};return Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Import/Export"}),Object(W.jsxs)(d.a,{direction:"row",spacing:4,divider:Object(W.jsx)(m.a,{orientation:"vertical",flexItem:!0}),children:[Object(W.jsx)(d.a,{spacing:1,children:Object(W.jsxs)(d.a,{direction:"row",spacing:2,children:[Object(W.jsx)(aa.a,{control:Object(W.jsx)(na.a,{checked:o,onChange:function(e){return u(e.target.checked)}}),label:"Include Source Image"}),Object(W.jsx)(re.a,{endIcon:Object(W.jsx)(U.a,{children:"file_upload"}),variant:"contained",onClick:function(){var e=o?a:Object(c.a)(Object(c.a)({},a),{},{baseImage:void 0}),n=ra.compressToBase64(JSON.stringify(e));navigator.clipboard.writeText(n),j("Copied to clipboard"),setTimeout((function(){return j(void 0)}),2e3)},children:"Export to clipboard"})]})}),Object(W.jsx)(d.a,{spacing:1,children:Object(W.jsx)(re.a,{endIcon:Object(W.jsx)(U.a,{children:"file_download"}),variant:"contained",onClick:Object(L.a)(_.a.mark((function e(){var a,t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:if(a=e.sent){e.next=7;break}return x(),e.abrupt("return");case 7:if(t=JSON.parse(ra.decompressFromBase64(a)),Array.isArray(t.transforms)){e.next=11;break}return x(),e.abrupt("return");case 11:n(t),O(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0),x();case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),children:"Import from clipboard"})})]}),p&&Object(W.jsx)(ta.a,{severity:"info",children:p}),g&&Object(W.jsx)(ta.a,{severity:"error",children:"Error importing from clipboard"})]})},oa=function(){var e=r.a.useState({dirty:!1,transforms:[],baseImage:void 0}),a=Object(s.a)(e,2),n=a[0],t=a[1];var i=!n.baseImage||0===n.transforms.length||!n.dirty||n.transforms.some((function(e){return Je(e.transformName).params.length>0&&e.paramsValues.every((function(e,a){return!1===e.valid}))}));return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(u.a,{}),Object(W.jsx)(l.a,{children:Object(W.jsxs)(d.a,{spacing:4,justifyContent:"space-evenly",divider:Object(W.jsx)(m.a,{}),children:[Object(W.jsx)(f.a,{variant:"h2",pt:4,children:"Partymoji"}),Object(W.jsxs)(d.a,{spacing:4,divider:Object(W.jsx)(m.a,{}),children:[Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsxs)(d.a,{spacing:1,children:[Object(W.jsx)(f.a,{variant:"h5",children:"Source Image"}),Object(W.jsx)(ie,{name:"Choose a source image",currentImageUrl:n.baseImage,onChange:function(e){t(Object(c.a)(Object(c.a)({},n),{},{baseImage:e,dirty:!0}))}})]})}),Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsx)(ea,{currentTransforms:n.transforms,possibleTransforms:Ge,onTransformsChange:function(e){return t(Object(c.a)(Object(c.a)({},n),{},{dirty:!0,transforms:e}))}})}),Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsx)(Qe,{isDirty:n.dirty,baseImageUrl:n.baseImage,computeDisabled:i,transforms:n.transforms,onComputed:function(){return t(Object(c.a)(Object(c.a)({},n),{},{dirty:!1}))}})}),Object(W.jsx)(h.a,{style:{padding:16},children:Object(W.jsx)(ia,{state:n,onImport:function(e){return t(Object(c.a)(Object(c.a)({},e),{},{dirty:!0}))}})}),false,Object(W.jsx)("a",{href:"https://github.com/MikeyBurkman/partymoji",target:"_blank",rel:"noreferrer",children:Object(W.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",width:64,height:64,alt:"Github Link"})})]})]})})]})};o.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(oa,{})}),document.getElementById("root"))}},[[372,1,2]]]);
//# sourceMappingURL=main.e37500bb.chunk.js.map