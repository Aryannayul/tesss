"use strict";(self.webpackChunklahelu_client=self.webpackChunklahelu_client||[]).push([[625],{61373:(e,t,a)=>{a.r(t),a.d(t,{CropZoom:()=>V,Gallery:()=>k,ResumableZoom:()=>E,SnapbackZoom:()=>r,fitContainer:()=>_,stackTransition:()=>B,useImageResolution:()=>H,useTransformationState:()=>q});var n=a(96540),l=a(90348),i=a(47700);const u=(e,t)=>({x:(0,l.useSharedValue)(e),y:(0,l.useSharedValue)(t)}),o=(e,t)=>({width:(0,l.useSharedValue)(e),height:(0,l.useSharedValue)(t)}),h={vertical:0,horizontal:0},r=(s=({children:e,hitSlop:t=h,resizeConfig:a,timingConfig:r,gesturesEnabled:s=!0,scrollRef:c,onTap:v,onDoubleTap:d,onPinchStart:g,onPinchEnd:w,onUpdate:m,onGestureEnd:x})=>{const y=(0,l.useAnimatedRef)(),S=u(0,0),f=(0,l.useSharedValue)(1),p=u(0,0),b=u(0,0),M=u(0,0),E=u(0,0),P=o((null==a?void 0:a.size.width)??0,(null==a?void 0:a.size.height)??0),T=()=>{const e=(0,l.measure)(y);null!==e&&(P.width.value=e.width,P.height.value=e.height,p.x.value=e.pageX,p.y.value=e.pageY)},z=(0,l.useDerivedValue)((()=>(({resizeConfig:e,width:t,height:a,scale:n})=>{let i=t,u=a;if(void 0!==e){const{size:t,aspectRatio:a,scale:o}=e,h=a>1;i=h?(0,l.interpolate)(n,[1,o],[t.width,t.height*a],l.Extrapolation.CLAMP):t.width,u=h?t.height:(0,l.interpolate)(n,[1,o],[t.height,t.width/a],l.Extrapolation.CLAMP)}return{width:i,height:u,deltaX:(i-t)/2,deltaY:(u-a)/2}})({resizeConfig:a,width:P.width.value,height:P.height.value,scale:f.value})),[a,P,f]);(0,l.useDerivedValue)((()=>{const{width:e,height:t}=z.value;null==m||m({x:p.x.value,y:p.y.value,width:P.width.value,height:P.height.value,resizedWidth:a?e:void 0,resizedHeight:a?t:void 0,translateX:S.x.value,translateY:S.y.value,scale:f.value})}),[z,p,P,a,S,f]);const I=i.Gesture.Pinch().withTestId("pinch").hitSlop(t).enabled(s).onTouchesMove((e=>{if(2!==e.numberOfTouches)return;const t=e.allTouches[0],a=e.allTouches[1];E.x.value=(t.absoluteX+a.absoluteX)/2,E.y.value=(t.absoluteY+a.absoluteY)/2})).onStart((e=>{T(),g&&g(e),M.x.value=E.x.value,M.y.value=E.y.value,b.x.value=e.focalX-P.width.value/2,b.y.value=e.focalY-P.height.value/2})).onUpdate((e=>{T();const t=E.x.value-M.x.value,a=E.y.value-M.y.value,n=-1*(b.x.value*e.scale-b.x.value)+t,l=-1*(b.y.value*e.scale-b.y.value)+a;S.x.value=n,S.y.value=l,f.value=e.scale})).onEnd((e=>{w&&(0,l.runOnJS)(w)(e),S.x.value=(0,l.withTiming)(0,r),S.y.value=(0,l.withTiming)(0,r),f.value=(0,l.withTiming)(1,r,(e=>{x&&(0,l.runOnJS)(x)()}))}));void 0!==c&&I.blocksExternalGesture(c);const O=i.Gesture.Tap().withTestId("tap").enabled(s).maxDuration(250).numberOfTaps(1).runOnJS(!0).onEnd((e=>null==v?void 0:v(e))),V=i.Gesture.Tap().withTestId("doubleTap").enabled(s).numberOfTaps(2).maxDuration(250).runOnJS(!0).onEnd((e=>null==d?void 0:d(e))),X=(0,l.useAnimatedStyle)((()=>({width:null==a?void 0:a.size.width,height:null==a?void 0:a.size.height,justifyContent:"center",alignItems:"center"})),[a]),Y=(0,l.useAnimatedStyle)((()=>{const{width:e,height:t,deltaX:a,deltaY:n}=z.value;return{width:0===e?void 0:e,height:0===t?void 0:t,transform:[{translateX:S.x.value-a},{translateY:S.y.value-n},{scale:f.value}]}}),[z,S,f]),C=i.Gesture.Exclusive(V,O);return n.createElement(i.GestureDetector,{gesture:i.Gesture.Race(I,C)},n.createElement(l.default.View,{style:X,ref:y},n.createElement(l.default.View,{style:Y},e)))},e=>{const t=n.Children.count(e.children);if(1!==t)throw new Error(`SnapbackZoom expected one child but received ${t} children`);return n.createElement(s,e)});var s,c=a(9176),v=a(43999);const d=(e,t,a)=>Math.max(t,Math.min(e,a)),g=(e,t)=>t.width>t.height?Math.max(1,t.width/e.width):Math.max(1,t.height/e.height),w=e=>{const{toScale:t,fromScale:a,delta:n,origin:l,offset:i}=e,u=-1*(l.x*a-l.x),o=-1*(l.y*a-l.y),h=-1*(l.x*t-l.x),r=-1*(l.y*t-l.y);return{x:i.x+h-u+n.x,y:i.y+r-o+n.y}},m=e=>1*Math.pow(1-e,2),x=(e,t)=>{const{time:a,boundaries:n,position:l,translate:i}=t,u=performance.now()-a,{x:o,y:h}=n,r=Math.abs(l.x-e.absoluteX)>=20,s=Math.abs(l.y-e.absoluteY)>=20,c=u<=175,v=e.velocityX>=500&&r&&c,d=i.x===o;if(v&&d)return"right";const g=e.velocityX<=-500&&r&&c,w=i.x===-1*o;if(g&&w)return"left";const m=e.velocityY<=-500&&s&&c,x=i.y===-1*h;if(m&&x)return"up";const y=e.velocityY>=500&&s&&c,S=i.y===h;return y&&S?"down":void 0},y=e=>{const{container:t,translate:a,offset:n,panMode:i,decay:o,boundFn:h,userCallbacks:r}=e,{onSwipe:s,onGestureEnd:c,onOverPanning:v}=r,g=(0,l.useSharedValue)(0),w=u(0,0),y=(0,l.useSharedValue)(0),S=(0,l.useSharedValue)(!0),f=(0,l.useSharedValue)(!0);return{onPanStart:e=>{r.onPanStart&&(0,l.runOnJS)(r.onPanStart)(e),(0,l.cancelAnimation)(a.x),(0,l.cancelAnimation)(a.y),n.x.value=a.x.value,n.y.value=a.y.value,g.value=performance.now(),w.x.value=e.absoluteX,w.y.value=e.absoluteY},onPanChange:e=>{const l=e.translationX+n.x.value,u=e.translationY+n.y.value,{x:o,y:r}=h(),s=Math.max(0,Math.abs(l)-o),c=Math.max(0,Math.abs(u)-r);if(S.value=0===s,f.value=0===c,(s>0||c>0)&&v){const e=Math.sign(l)*s,t=Math.sign(u)*c;v(e,t)}if("friction"!==i){const e="free"===i;return a.x.value=e?l:d(l,-1*o,o),void(a.y.value=e?u:d(u,-1*r,r))}const g=1.5*Math.max(t.width.value,t.height.value);if(S.value)a.x.value=l;else{const t=Math.abs(Math.abs(l)-o)/g,n=m(d(t,0,1));a.x.value+=e.changeX*n}if(f.value)a.y.value=u;else{const t=Math.abs(Math.abs(u)-r)/g,n=m(d(t,0,1));a.y.value+=e.changeY*n}},onPanEnd:e=>{if("clamp"===i&&s){const t=h(),n=x(e,{boundaries:t,time:g.value,position:{x:w.x.value,y:w.y.value},translate:{x:a.x.value,y:a.y.value}});if(void 0!==n)return void(0,l.runOnJS)(s)(n)}r.onPanEnd&&(0,l.runOnJS)(r.onPanEnd)(e);const{x:t,y:n}=h(),u=[-1*t,t],v=[-1*n,n],m=d(a.x.value,-1*t,t),p=d(a.y.value,-1*n,n),b=o&&S.value,M=o&&f.value,E={velocity:e.velocityX,clamp:u},P={velocity:e.velocityY,clamp:v};a.x.value=b?(0,l.withDecay)(E):(0,l.withTiming)(m),a.y.value=M?(0,l.withDecay)(P):(0,l.withTiming)(p);const T=Math.abs(Math.abs(a.x.value)-t),z=Math.abs(Math.abs(a.y.value)-n);if(y.value=T>z?a.x.value:a.y.value,b||M){const e=T>z?E:P;y.value=(0,l.withDecay)(e,(e=>{e&&c&&(0,l.runOnJS)(c)()}))}else{const e=T>z?m:p;y.value=(0,l.withTiming)(e,void 0,(e=>{e&&c&&(0,l.runOnJS)(c)()}))}}}},S=e=>{const{container:t,translate:a,offset:i,scale:o,scaleOffset:h,minScale:r,maxScale:s,scaleMode:c,pinchCenteringMode:v,allowPinchPanning:g,boundFn:m,userCallbacks:x}=e,y="clamp"===v,S="clamp"===c,f=u(0,0),p=u(0,0),b=u(0,0),M=(0,l.useSharedValue)(0),[E,P]=(0,n.useState)(!0),T=e=>{"bounce"===c&&P(e)};return{gesturesEnabled:E,onTouchesDown:(e,t)=>{2===e.numberOfTouches&&t.begin()},onTouchesMove:(e,t)=>{if(2!==e.numberOfTouches)return;const a=e.allTouches[0],n=e.allTouches[1];p.x.value=(a.absoluteX+n.absoluteX)/2,p.y.value=(a.absoluteY+n.absoluteY)/2,t.activate()},onTouchesUp:(e,t)=>{2!==e.numberOfTouches&&t.end()},onPinchStart:e=>{(0,l.runOnJS)(T)(!1),x.onPinchStart&&(0,l.runOnJS)(x.onPinchStart)(e),(0,l.cancelAnimation)(a.x),(0,l.cancelAnimation)(a.y),(0,l.cancelAnimation)(o),f.x.value=p.x.value,f.y.value=p.y.value,b.x.value=e.focalX-t.width.value/2,b.y.value=e.focalY-t.height.value/2,i.x.value=a.x.value,i.y.value=a.y.value,h.value=o.value},onPinchUpdate:e=>{let t=e.scale*h.value;S&&(t=d(t,r,s.value));const n=p.x.value-f.x.value,l=p.y.value-f.y.value,{x:u,y:c}=w({toScale:t,fromScale:h.value,origin:{x:b.x.value,y:b.y.value},offset:{x:i.x.value,y:i.y.value},delta:{x:g?n:0,y:g?l:0}}),{x:v,y:x}=m(t),M=d(u,-1*v,v),E=d(c,-1*x,x);a.x.value=y?M:u,a.y.value=y?E:c,o.value=t},onPinchEnd:e=>{x.onPinchEnd&&(0,l.runOnJS)(x.onPinchEnd)(e);const t=d(o.value,r,s.value),n=!S&&g&&o.value>s.value?(p.y.value-f.y.value)/2:0,{x:i,y:u}=w({toScale:t,fromScale:o.value,origin:{x:b.x.value,y:b.y.value},offset:{x:a.x.value,y:a.y.value},delta:{x:0,y:n}}),{x:c,y:v}=m(t);((e,t,n)=>{(0,l.cancelAnimation)(a.x),(0,l.cancelAnimation)(a.y),(0,l.cancelAnimation)(o);const i=a.x.value!==e,u=a.y.value!==t,r=o.value!==n,s=i||u||r?1:0;a.x.value=(0,l.withTiming)(e),a.y.value=(0,l.withTiming)(t),o.value=(0,l.withTiming)(n,void 0,(e=>{h.value=o.value,e&&(0,l.runOnJS)(T)(!0)})),M.value=(0,l.withTiming)(s,void 0,(e=>{M.value=0,e&&void 0!==x.onGestureEnd&&(0,l.runOnJS)(x.onGestureEnd)()}))})(d(i,-1*c,c),d(u,-1*v,v),t)}}},f=({container:e,translate:t,scale:a,minScale:n,maxScale:i,scaleOffset:u,boundsFn:o,onGestureEnd:h})=>({onDoubleTapEnd:r=>{const s=r.x-e.width.value/2,c=r.y-e.height.value/2,v=a.value>=.8*i.value?n:i.value,{x:g,y:m}=w({toScale:v,fromScale:a.value,origin:{x:s,y:c},delta:{x:0,y:0},offset:{x:t.x.value,y:t.y.value}}),{x,y}=o(v),S=d(g,-1*x,x),f=d(m,-1*y,y);t.x.value=(0,l.withTiming)(S),t.y.value=(0,l.withTiming)(f),u.value=v,a.value=(0,l.withTiming)(v,void 0,(e=>{e&&h&&(0,l.runOnJS)(h)()}))}});function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}const b=e=>{const{scale:t,translation:a,itemSize:n,containerSize:l}=e,i=(n.width*t-l.width)/2,u=(n.height*t-l.height)/2,o=Math.max(i,0),h=Math.max(u,0),r=(-1*a.x+o)/(n.width*t),s=(-1*a.y+h)/(n.height*t);return{x:n.width*r,y:n.height*s,width:n.width*Math.min(1,l.width/(n.width*t)),height:n.height*Math.min(1,l.height/(n.height*t))}},M=v.default.create({flex:{flex:1},center:{justifyContent:"center",alignItems:"center"}}),E=function(e){return(0,n.forwardRef)(((t,a)=>{const{minScale:l,maxScale:i,children:u}=t,o=n.Children.count(u);if(1!==o)throw new Error(`ResumableZoom expected one child but received ${o} children`);if(void 0!==l&&l<1)throw new Error("minScale must be greater than or equals one");const h="number"==typeof i;if(h&&i<1)throw new Error("maxScale must be greater than one, or a SizeVector object in order to infer the max scale");if(l&&h&&l>i)throw new Error("minScale must not be greater maxScale");return n.createElement(e,p({},t,{reference:a}))}))}((e=>{const{reference:t,children:a,style:h,extendGestures:r=!1,decay:s=!0,tapsEnabled:v=!0,panEnabled:m=!0,pinchEnabled:x=!0,minScale:p=1,maxScale:E=6,panMode:P="clamp",scaleMode:T="bounce",pinchCenteringMode:z="clamp",allowPinchPanning:I=!0,onTap:O,onUpdate:V,onGestureEnd:X,onSwipe:Y,onPinchStart:C,onPinchEnd:A,onPanStart:G,onPanEnd:D,onOverPanning:J}=e,R=o(1,1),U=o(1,1),j=o(1,1),k=u(0,0),F=u(0,0),H=(0,l.useSharedValue)(p),Z=(0,l.useSharedValue)(p),W=(0,l.useDerivedValue)((()=>"object"==typeof E?g({width:U.width.value,height:U.height.value},E):E),[E,U]);(0,l.useDerivedValue)((()=>{j.width.value=r?Math.max(R.width.value,U.width.value):U.width.value,j.height.value=r?Math.max(R.height.value,U.height.value):U.height.value}),[r,R,U]);const L=e=>{const t=e??H.value,{width:a,height:n}=U,{width:l,height:i}=R;return{x:Math.max(0,a.value*t-l.value)/2,y:Math.max(0,n.value*t-i.value)/2}},$=(e,t,a,n)=>{k.x.value=n?(0,l.withTiming)(e):e,k.y.value=n?(0,l.withTiming)(t):t,H.value=n?(0,l.withTiming)(a):a,Z.value=a};(0,l.useDerivedValue)((()=>{null==V||V({width:U.width.value,height:U.height.value,translateX:k.x.value,translateY:k.y.value,scale:H.value})}),[U,k,H]);const{gesturesEnabled:q,onTouchesDown:_,onTouchesMove:B,onTouchesUp:N,onPinchStart:K,onPinchUpdate:Q,onPinchEnd:ee}=S({container:j,translate:k,offset:F,scale:H,scaleOffset:Z,minScale:p,maxScale:W,allowPinchPanning:I,scaleMode:T,pinchCenteringMode:z,boundFn:L,userCallbacks:{onGestureEnd:X,onPinchStart:C,onPinchEnd:A}}),{onPanStart:te,onPanChange:ae,onPanEnd:ne}=y({container:j,translate:k,offset:F,panMode:P,boundFn:L,decay:s,userCallbacks:{onSwipe:Y,onGestureEnd:X,onPanStart:G,onPanEnd:D,onOverPanning:J}}),{onDoubleTapEnd:le}=f({container:j,translate:k,scale:H,minScale:p,maxScale:W,scaleOffset:Z,boundsFn:L,onGestureEnd:X}),ie=i.Gesture.Pinch().withTestId("pinch").enabled(x).manualActivation(!0).onTouchesDown(_).onTouchesMove(B).onTouchesUp(N).onStart(K).onUpdate(Q).onEnd(ee),ue=i.Gesture.Pan().withTestId("pan").enabled(m&&q).maxPointers(1).onStart(te).onChange(ae).onEnd(ne),oe=i.Gesture.Tap().withTestId("tap").enabled(v&&q).maxDuration(250).numberOfTaps(1).runOnJS(!0).onEnd((e=>null==O?void 0:O(e))),he=i.Gesture.Tap().withTestId("doubleTap").enabled(v&&q).maxDuration(250).numberOfTaps(2).onEnd(le),re=(0,l.useAnimatedStyle)((()=>({width:j.width.value,height:j.height.value,transform:[{translateX:k.x.value},{translateY:k.y.value},{scale:H.value}]})),[j,k,H]),se=()=>({width:U.width.value,height:U.height.value,translateX:k.x.value,translateY:k.y.value,scale:H.value}),ce=(e,t=!0)=>{const a=d(e.scale,p,W.value),{x:n,y:l}=L(a),i=d(e.translateX,-1*n,n),u=d(e.translateY,-1*l,l);$(i,u,a,t)},ve=(e,t)=>{let a=k.x.value/H.value*-1,n=k.y.value/H.value*-1;const l=d(H.value*e,p,W.value);if(void 0!==t){const e=t.x/U.width.value,l=t.y/U.height.value,i=r?e*j.width.value:t.x,u=r?l*j.height.value:t.y;a=i-j.width.value/2,n=u-j.height.value/2}const{x:i,y:u}=w({toScale:l,fromScale:H.value,origin:{x:a,y:n},offset:{x:k.x.value,y:k.y.value},delta:{x:0,y:0}}),{x:o,y:h}=L(l),s=d(i,-1*o,o),c=d(u,-1*h,h);$(s,c,l,!0)},de=()=>b({scale:H.value,itemSize:{width:U.width.value,height:U.height.value},containerSize:{width:R.width.value,height:R.height.value},translation:{x:k.x.value,y:k.y.value}});(0,n.useImperativeHandle)(t,(()=>({reset:(e=!0)=>$(0,0,p,e),requestState:se,assignState:ce,zoom:ve,getVisibleRect:de})));const ge=i.Gesture.Exclusive(he,oe),we=i.Gesture.Race(ie,ue,ge);return n.createElement(c.default,{style:[h??M.flex,M.center],onLayout:e=>{R.width.value=e.nativeEvent.layout.width,R.height.value=e.nativeEvent.layout.height}},n.createElement(i.GestureDetector,{gesture:we},n.createElement(l.default.View,{testID:"root",style:[re,M.center]},n.createElement(l.default.View,{testID:"child",onLayout:e=>{U.width.value=e.nativeEvent.layout.width,U.height.value=e.nativeEvent.layout.height}},a))))})),P=(e,t)=>void 0!==t.width?{width:t.width,height:t.width/e}:{width:t.height*e,height:t.height};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},T.apply(this,arguments)}const z=2*Math.PI,I=180/Math.PI,O=v.default.create({root:{flex:1},absolute:{position:"absolute"},center:{justifyContent:"center",alignItems:"center"}}),V=function(e){return(0,n.forwardRef)(((t,a)=>{const{minScale:l,maxScale:i}=t;if(void 0!==l&&l<1)throw new Error("minScale property must be greater than or equals one");if(void 0!==i&&i<1)throw new Error("maxScale property must be greater than or equals one");if(void 0!==l&&void 0!==i&&l>i)throw new Error("minScale property must not be greater than maxScale");return n.createElement(e,T({},t,{reference:a}))}))}((e=>{const{reference:t,children:a,cropSize:h,resolution:r,minScale:s=1,maxScale:v,scaleMode:d="bounce",panMode:w="free",allowPinchPanning:m=!0,onUpdate:x,onGestureEnd:f,OverlayComponent:p,onPanStart:M,onPanEnd:E,onPinchStart:T,onPinchEnd:V,onTap:X}=e,Y=u(0,0),C=u(0,0),A=(0,l.useSharedValue)(s),G=(0,l.useSharedValue)(s),D=(0,l.useSharedValue)(0),J=u(0,0),R=o(1,1),U=o(1,1),j=(0,l.useSharedValue)(0),k=(0,l.useDerivedValue)((()=>{const{width:e,height:t}=R,a=g({width:e.value,height:t.value},r);return v??a}),[R,v,r]);(0,l.useDerivedValue)((()=>{const e=(e=>{const{crop:t,angle:a,resolution:n}=e,l=t.width/t.height;let i=t;const u=a%Math.PI==0,o=n.width/n.height,h=n.height/n.width;i=P(u?o:h,{width:l>=1?void 0:t.width,height:l>=1?t.height:void 0});let r=1;i.height<t.height&&(r=t.height/i.height),i.width<t.width&&(r=t.width/i.width),i.width=i.width*r,i.height=i.height*r;const s=Math.abs(i.height*Math.sin(a))+Math.abs(i.width*Math.cos(a)),c=Math.abs(i.height*Math.cos(a))+Math.abs(i.width*Math.sin(a));return P(o,{width:o>=1?void 0:s,height:o>=1?c:void 0})})({crop:h,resolution:r,angle:j.value}),t=D.value%Math.PI!=0,a=1===R.width.value&&1===R.height.value;R.width.value=a?e.width:(0,l.withTiming)(e.width),R.height.value=a?e.height:(0,l.withTiming)(e.height),U.width.value=t?e.height:e.width,U.height.value=t?e.width:e.height}),[h,r,j,D,R,U]),(0,l.useDerivedValue)((()=>{null==x||x({width:R.width.value,height:R.height.value,translateX:Y.x.value,translateY:Y.y.value,scale:A.value,rotate:D.value,rotateX:J.x.value,rotateY:J.y.value})}),[R,Y,A,J,D]);const F=e=>{const t=e??A.value;let a={width:R.width.value,height:R.height.value};return D.value%Math.PI!=0&&(a={width:a.height,height:a.width}),{x:Math.max(0,a.width*t-h.width)/2,y:Math.max(0,a.height*t-h.height)/2}},{gesturesEnabled:H,onTouchesDown:Z,onTouchesMove:W,onTouchesUp:L,onPinchStart:$,onPinchUpdate:q,onPinchEnd:_}=S({container:U,translate:Y,offset:C,scale:A,scaleOffset:G,minScale:s,maxScale:k,allowPinchPanning:m,scaleMode:d,pinchCenteringMode:"sync",boundFn:F,userCallbacks:{onGestureEnd:f,onPinchStart:T,onPinchEnd:V}}),{onPanStart:B,onPanChange:N,onPanEnd:K}=y({container:U,translate:Y,offset:C,panMode:w,boundFn:F,userCallbacks:{onGestureEnd:f,onPanStart:M,onPanEnd:E}}),Q=i.Gesture.Pinch().withTestId("pinch").manualActivation(!0).onTouchesDown(Z).onTouchesMove(W).onTouchesUp(L).onStart($).onUpdate(q).onEnd(_),ee=i.Gesture.Pan().withTestId("pan").enabled(H).maxPointers(1).onStart(B).onChange(N).onEnd(K),te=i.Gesture.Tap().withTestId("tap").enabled(H).maxDuration(250).numberOfTaps(1).runOnJS(!0).onEnd((e=>null==X?void 0:X(e))),ae=(0,l.useAnimatedStyle)((()=>({width:U.width.value,height:U.height.value,position:"absolute",transform:[{translateX:Y.x.value},{translateY:Y.y.value},{scale:A.value}]})),[U,Y,A]),ne=(0,l.useAnimatedStyle)((()=>({width:R.width.value,height:R.height.value,transform:[{translateX:Y.x.value},{translateY:Y.y.value},{scale:A.value},{rotate:`${D.value}rad`},{rotateX:`${J.x.value}rad`},{rotateY:`${J.y.value}rad`}]})),[R,Y,A,D,J]),le=(e,t=!0)=>{Y.x.value=t?(0,l.withTiming)(e.translateX):e.translateX,Y.y.value=t?(0,l.withTiming)(e.translateY):e.translateY,A.value=t?(0,l.withTiming)(e.scale):e.scale,G.value=e.scale,J.x.value=t?(0,l.withTiming)(e.rotateX):e.rotateX,J.y.value=t?(0,l.withTiming)(e.rotateY):e.rotateY,D.value=t?(0,l.withTiming)(e.rotate,void 0,(()=>{ie.value=!0,D.value=D.value%z})):e.rotate%z},ie=(0,l.useSharedValue)(!0),ue=(e=!0,t=!0,a)=>{if(!ie.value)return;e&&(ie.value=!1);const n=t?1:-1,l=D.value+n*(Math.PI/2);j.value=l,null==a||a(l%z),le({translateX:0,translateY:0,scale:s,rotate:l,rotateX:J.x.value,rotateY:J.y.value},e)},oe=(e=!0,t)=>{const a=J.y.value!==Math.PI?Math.PI:0;null==t||t(a*I),J.y.value=e?(0,l.withTiming)(a):a},he=(e=!0,t)=>{const a=J.x.value!==Math.PI?Math.PI:0;null==t||t(a*I),J.x.value=e?(0,l.withTiming)(a):a},re=e=>{const t={rotationAngle:D.value*I,flipHorizontal:J.y.value===Math.PI,flipVertical:J.x.value===Math.PI},a=(e=>{const{cropSize:t,itemSize:a,resolution:n,translation:l,scale:i,isRotated:u,fixedWidth:o}=e,h=b({scale:i,containerSize:t,itemSize:{width:u?a.height:a.width,height:u?a.width:a.height},translation:l}),r=n.width/a.width,s=h.x*r,c=h.y*r,v=h.width*r,d=h.height*r;let g,w=1;return void 0!==o&&(w=o/v,g={width:Math.ceil(n.width*w),height:Math.ceil(n.height*w)}),{crop:{originX:s*w,originY:c*w,width:Math.round(v*w),height:Math.round(d*w)},resize:g}})({scale:A.value,cropSize:h,resolution:r,itemSize:{width:R.width.value,height:R.height.value},translation:{x:Y.x.value,y:Y.y.value},isRotated:t.rotationAngle%180!=0,fixedWidth:e});return{crop:a.crop,resize:a.resize,context:t}},se=()=>({width:R.width.value,height:R.height.value,translateX:Y.x.value,translateY:Y.y.value,scale:A.value,rotate:D.value,rotateX:J.x.value,rotateY:J.y.value}),ce=(e,t=!0)=>{const a=(0,l.clamp)(e.scale,s,k.value),{x:n,y:i}=F(a),u=(0,l.clamp)(e.translateX,-1*n,n),o=(0,l.clamp)(e.translateY,-1*i,i),h=Math.PI/2,r=Math.floor(e.rotate%(2*Math.PI)/h)*h,c=1===Math.sign(e.rotateX-h)?Math.PI:0,v=1===Math.sign(e.rotateY-h)?Math.PI:0;le({translateX:u,translateY:o,scale:a,rotate:r,rotateX:c,rotateY:v},t)};(0,n.useImperativeHandle)(t,(()=>({rotate:ue,flipHorizontal:oe,flipVertical:he,reset:e=>le({translateX:0,translateY:0,scale:s,rotate:0,rotateX:0,rotateY:0},e),crop:re,requestState:se,assignState:ce})));const ve={minWidth:h.width,minHeight:h.height};return n.createElement(c.default,{style:[ve,O.root,O.center]},n.createElement(l.default.View,{style:ne},a),n.createElement(c.default,{style:O.absolute},null==p?void 0:p()),n.createElement(i.GestureDetector,{gesture:i.Gesture.Race(Q,ee,te)},n.createElement(l.default.View,{style:ae})))})),X=e=>{const{index:t,itemSize:a,gap:n}=e;return t*a+t*n},Y=n.createContext({}),C={duration:300,easing:l.Easing.linear},A=({length:e,gap:t,maxScale:a,itemSize:o,vertical:h,tapOnEdgeToItem:r,zoomEnabled:s,scaleMode:c,allowOverflow:v,allowPinchPanning:g,pinchCenteringMode:w,onTap:m,onPanStart:y,onPanEnd:p,onPinchStart:M,onPinchEnd:E,onSwipe:P,onVerticalPull:T,onGestureEnd:z})=>{const{activeIndex:I,scroll:O,scrollOffset:V,isScrolling:A,rootSize:G,rootChildSize:D,translate:J,scale:R,overflow:U,hideAdjacentItems:j}=(0,n.useContext)(Y),k=u(0,0),F=(0,l.useSharedValue)(1),H=(0,l.useSharedValue)(0),Z=u(0,0),W=(0,l.useSharedValue)(0),L=(0,l.useSharedValue)(!1),$=(0,l.useSharedValue)(!1),q=e=>{const t=e??R.value,{width:a,height:n}=D,{width:l,height:i}=G;return{x:Math.max(0,a.value*t-l.value)/2,y:Math.max(0,n.value*t-i.value)/2}},_=(e,t,a,n=!0)=>{(0,l.cancelAnimation)(J.x),(0,l.cancelAnimation)(J.y),(0,l.cancelAnimation)(R),J.x.value=n?(0,l.withTiming)(e):e,J.y.value=n?(0,l.withTiming)(t):t,R.value=n?(0,l.withTiming)(a):a,F.value=a};(0,l.useAnimatedReaction)((()=>({translate:J.y.value,isPulling:L.value,released:$.value})),(e=>{e.isPulling&&(null==T||T(e.translate,e.released))}),[J,L,$]),(0,l.useAnimatedReaction)((()=>({width:G.width.value,height:G.height.value})),(()=>_(0,0,1,!1)),[G]);const{gesturesEnabled:B,onTouchesDown:N,onTouchesMove:K,onTouchesUp:Q,onPinchStart:ee,onPinchUpdate:te,onPinchEnd:ae}=S({container:G,translate:J,offset:k,scale:R,scaleOffset:F,minScale:1,maxScale:a,scaleMode:c,allowPinchPanning:g,pinchCenteringMode:w,boundFn:q,userCallbacks:{onPinchStart:M,onPinchEnd:E,onGestureEnd:()=>{U.value="hidden",j.value=!1,null==z||z()}}}),{onDoubleTapEnd:ne}=f({container:G,translate:J,scale:R,minScale:1,maxScale:a,scaleOffset:F,boundsFn:q,onGestureEnd:z}),le=i.Gesture.Pinch().withTestId("pinch").enabled(s).manualActivation(!0).onTouchesDown(N).onTouchesMove(K).onTouchesUp(Q).onStart((e=>{v&&(U.value="visible",j.value=!0),ee(e)})).onUpdate(te).onEnd(ae),ie=i.Gesture.Pan().withTestId("pan").maxPointers(1).minVelocity(100).enabled(B).onStart((e=>{y&&(0,l.runOnJS)(y)(e),(0,l.cancelAnimation)(J.x),(0,l.cancelAnimation)(J.y),(0,l.cancelAnimation)(O);const t=Math.abs(e.velocityY)>Math.abs(e.velocityX);L.value=t&&1===R.value&&!h,A.value=!0,H.value=performance.now(),Z.x.value=e.absoluteX,Z.y.value=e.absoluteY,V.value=O.value,k.x.value=J.x.value,k.y.value=J.y.value})).onUpdate((a=>{if(L.value)return void(J.y.value=a.translationY);const n=k.x.value+a.translationX,l=k.y.value+a.translationY,{x:i,y:u}=q(R.value),r=Math.max(0,Math.abs(n)-i),s=Math.max(0,Math.abs(l)-u),c=-1*Math.sign(n)*r,v=-1*Math.sign(l)*s,g=V.value+(h?v:c),w=e-1;O.value=d(g,0,w*o.value+w*t),J.x.value=d(n,-1*i,i),J.y.value=d(l,-1*u,u)})).onEnd((a=>{const n=q(R.value),i=x(a,{boundaries:n,time:H.value,position:{x:Z.x.value,y:Z.y.value},translate:{x:L.value?100:J.x.value,y:L.value?0:J.y.value}});if(void 0!==i&&(a=>{(0,l.cancelAnimation)(O);let n=I.value;if("up"===a&&h&&(n+=1),"down"===a&&h&&(n-=1),"left"!==a||h||(n+=1),"right"!==a||h||(n-=1),n=d(n,0,e-1),n===I.value)return;const i=X({index:n,itemSize:o.value,gap:t});O.value=(0,l.withTiming)(i,C,(e=>{e&&(I.value=n,A.value=!1,_(0,0,1,!1))}))})(i),void 0!==i&&P&&(0,l.runOnJS)(P)(i),L.value)return $.value=!0,void(J.y.value=(0,l.withTiming)(0,void 0,(e=>{L.value=!e,$.value=!e})));(h&&(void 0===i||"left"===i||"right"===i)||!h&&(void 0===i||"up"===i||"down"===i))&&(a=>{(0,l.cancelAnimation)(O);const n=X({index:d(I.value-1,0,e-1),itemSize:o.value,gap:t}),i=X({index:I.value,itemSize:o.value,gap:t}),u=X({index:d(I.value+1,0,e-1),itemSize:o.value,gap:t}),r=h?a.velocityY:a.velocityX,s=((e,t,a)=>{const n=e+.05*t,l=a.map((e=>Math.abs(n-e))),i=Math.min.apply(null,l);return a.filter((e=>Math.abs(n-e)===i))[0]})(O.value,r,[n,i,u]);O.value=(0,l.withTiming)(s,C,(e=>{e&&(s!==i&&(I.value+=s===u?1:-1),A.value=!1,s!==i&&_(0,0,1,!1))}))})(a),void 0===i&&p&&(0,l.runOnJS)(p)(a);const u={velocity:a.velocityX,clamp:[-n.x,n.x]},r={velocity:a.velocityY,clamp:[-n.y,n.y]},s=Math.abs(Math.abs(J.x.value)-n.x),c=Math.abs(Math.abs(J.y.value)-n.y),v=s>c?u:r;W.value=s>c?J.x.value:J.y.value,W.value=(0,l.withDecay)(v,(()=>{z&&(0,l.runOnJS)(z)()})),J.x.value=(0,l.withDecay)(u),J.y.value=(0,l.withDecay)(r)})),ue=i.Gesture.Tap().withTestId("tap").enabled(B).numberOfTaps(1).maxDuration(250).onEnd((a=>{const n={width:G.width.value,height:G.height.value},i=b({scale:R.value,containerSize:n,itemSize:n,translation:{x:J.x.value,y:J.y.value}}),u=44/R.value,s=i.x+u,c=i.x+i.width-u;let v=I.value;const g=r&&!h;if(a.x<=s&&g&&(v-=1),a.x>=c&&g&&(v+=1),v=d(v,0,e-1),v===I.value)return void(m&&(0,l.runOnJS)(m)(a,I.value));const w=X({index:v,itemSize:o.value,gap:t});O.value=w,I.value=v,_(0,0,1,!1)})),oe=i.Gesture.Tap().withTestId("doubleTap").enabled(B&&s).numberOfTaps(2).maxDuration(250).onEnd(ne),he=(0,l.useAnimatedStyle)((()=>({width:Math.max(G.width.value,D.width.value),height:Math.max(G.height.value,D.height.value),position:"absolute",zIndex:2147483647,transform:[{translateX:J.x.value},{translateY:J.y.value},{scale:R.value}]})),[G,D,J,R]),re=i.Gesture.Race(ie,le,i.Gesture.Exclusive(oe,ue));return n.createElement(i.GestureDetector,{gesture:re},n.createElement(l.default.View,{style:he}))},G=n.memo(A,((e,t)=>e.onTap===t.onTap&&e.onPanStart===t.onPanStart&&e.onPanEnd===t.onPanEnd&&e.onPinchStart===t.onPinchStart&&e.onPinchEnd===t.onPinchEnd&&e.onSwipe===t.onSwipe&&e.length===t.length&&e.vertical===t.vertical&&e.tapOnEdgeToItem===t.tapOnEdgeToItem&&e.zoomEnabled===t.zoomEnabled&&e.scaleMode===t.scaleMode&&e.allowPinchPanning===t.allowPinchPanning&&e.allowOverflow===t.allowOverflow&&e.pinchCenteringMode===t.pinchCenteringMode&&e.onVerticalPull===t.onVerticalPull)),D=({index:e,gap:t,zIndex:a,item:i,vertical:h,renderItem:r,customTransition:s})=>{const{rootSize:c,rootChildSize:v,activeIndex:d,scroll:g,isScrolling:w,translate:m,scale:x,overflow:y,hideAdjacentItems:S}=(0,n.useContext)(Y),f=o(0,0),p=u(0,0),b=(0,l.useSharedValue)(1),M=(0,l.useAnimatedStyle)((()=>({transform:[{translateX:p.x.value},{translateY:p.y.value},{scale:b.value}]})),[p,b]),E=(0,l.useAnimatedStyle)((()=>({width:"100%",height:"100%",justifyContent:"center",alignItems:"center",position:"absolute",overflow:y.value,opacity:d.value!==e&&S.value?0:1})),[y,d,e,S]),P=(0,l.useAnimatedStyle)((()=>{if(void 0!==s)return s({index:e,gap:t,activeIndex:d.value,isScrolling:w.value,direction:h?"vertical":"horizontal",scroll:g.value,gallerySize:{width:c.width.value,height:c.height.value}});const a=-1*g.value+e*t,n=0===c.width.value&&0===c.height.value&&e!==d.value?0:1;return h?{transform:[{translateY:e*c.height.value+a}],opacity:n}:{transform:[{translateX:e*c.width.value+a}],opacity:n}}));return(0,l.useAnimatedReaction)((()=>({activeIndex:d.value,translate:{x:m.x.value,y:m.y.value},scale:x.value})),(t=>{e===t.activeIndex&&(p.x.value=t.translate.x,p.y.value=t.translate.y,b.value=t.scale)}),[d,m,x]),(0,l.useAnimatedReaction)((()=>d.value),(t=>{e===t?(v.width.value=f.width.value,v.height.value=f.height.value):(p.x.value=0,p.y.value=0,b.value=1)}),[d,f]),n.createElement(l.default.View,{testID:`child-${e}`,style:[E,P,{zIndex:a}]},n.createElement(l.default.View,{style:M,onLayout:t=>{f.width.value=t.nativeEvent.layout.width,f.height.value=t.nativeEvent.layout.height,e===d.value&&(v.width.value=t.nativeEvent.layout.width,v.height.value=t.nativeEvent.layout.height)}},r(i,e)))},J=n.memo(D,((e,t)=>e.index===t.index&&e.gap===t.gap&&e.zIndex===t.zIndex&&e.vertical===t.vertical&&e.customTransition===t.customTransition&&e.renderItem===t.renderItem)),R=e=>{const{reference:t,data:a,renderItem:i,keyExtractor:u,initialIndex:o=0,windowSize:h=5,maxScale:r=6,vertical:s=!1,gap:c=0,allowOverflow:v=!1,tapOnEdgeToItem:w=!0,zoomEnabled:m=!0,scaleMode:x="bounce",pinchCenteringMode:y="clamp",allowPinchPanning:S=!0,customTransition:f,onIndexChange:p,onScroll:b,onTap:M,onUpdate:E,onPanStart:P,onPanEnd:T,onPinchStart:z,onPinchEnd:I,onSwipe:O,onZoomBegin:V,onZoomEnd:C,onVerticalPull:A,onGestureEnd:D}=e,{activeIndex:R,rootSize:U,rootChildSize:j,scroll:k,translate:F,scale:H,hasZoomed:Z,overflow:W}=(0,n.useContext)(Y),L=Math.floor(h/2),[$,q]=(0,n.useState)(o),_=(0,l.useDerivedValue)((()=>s?U.height.value:U.width.value),[s,U]),B=(0,l.useDerivedValue)((()=>"object"==typeof r?0===r.length?6:g({width:j.width.value,height:j.height.value},r[R.value]):r),[r,R,j]),N=(0,l.useAnimatedStyle)((()=>({flex:1,justifyContent:"center",alignItems:"center",overflow:W.value})),[W]);(0,l.useAnimatedReaction)((()=>({scroll:k.value,itemSize:_.value})),(e=>null==b?void 0:b(e.scroll,(a.length-1)*e.itemSize)),[k,_]),(0,l.useAnimatedReaction)((()=>({width:j.width.value,height:j.height.value,translateX:F.x.value,translateY:F.y.value,scale:H.value})),(e=>E&&E(e)),[j,F,H]),(0,l.useAnimatedReaction)((()=>R.value),(e=>{p&&(0,l.runOnJS)(p)(e),(0,l.runOnJS)(q)(e)}),[R]),(0,l.useAnimatedReaction)((()=>({vertical:s,size:{width:U.width.value,height:U.height.value}})),(e=>{k.value=X({index:R.value,itemSize:e.vertical?e.size.height:e.size.width,gap:c})}),[s,U]),(0,l.useAnimatedReaction)((()=>H.value),((e,t)=>{1===e||Z.value?1===e&&1!==t&&Z.value&&(Z.value=!1,C&&(0,l.runOnJS)(C)(R.value)):(Z.value=!0,V&&(0,l.runOnJS)(V)(R.value))}),[H]);const K=e=>{const t=d(e,0,a.length-1);R.value=t,k.value=X({index:R.get(),itemSize:_.get(),gap:c})},Q=()=>({width:j.width.get(),height:j.height.get(),translateX:F.x.get(),translateY:F.y.get(),scale:H.get()}),ee=(e=!0)=>{F.x.value=e?(0,l.withTiming)(0):0,F.y.value=e?(0,l.withTiming)(0):0,H.value=e?(0,l.withTiming)(1):1};return(0,n.useImperativeHandle)(t,(()=>({setIndex:K,reset:ee,requestState:Q}))),n.createElement(l.default.View,{testID:"root",style:N,onLayout:e=>{const{width:t,height:a}=e.nativeEvent.layout,n=X({index:R.get(),itemSize:s?a:t,gap:c});U.width.set(t),U.height.set(a),k.set(n)}},a.map(((e,t)=>{if(t<$-L||t>$+L)return null;const l=(null==u?void 0:u(e,t))??`item-${t}`;return n.createElement(J,{key:l,zIndex:a.length-t,index:t,gap:c,item:e,vertical:s,renderItem:i,customTransition:f})})),n.createElement(G,{gap:c,maxScale:B,itemSize:_,length:a.length,vertical:s,tapOnEdgeToItem:w,zoomEnabled:m,scaleMode:x,allowOverflow:v,allowPinchPanning:S,pinchCenteringMode:y,onTap:M,onPanStart:P,onPanEnd:T,onPinchStart:z,onPinchEnd:I,onSwipe:O,onVerticalPull:A,onGestureEnd:D}))};function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},U.apply(this,arguments)}const j=(e,t)=>{const a=d(e.initialIndex??0,0,e.data.length-1),i=(0,l.useSharedValue)(a),h=o(0,0),r=o(0,0),s=u(0,0),c=(0,l.useSharedValue)(1),v={rootSize:h,rootChildSize:r,scroll:(0,l.useSharedValue)(0),scrollOffset:(0,l.useSharedValue)(0),translate:s,activeIndex:i,isScrolling:(0,l.useSharedValue)(!1),scale:c,hasZoomed:(0,l.useSharedValue)(!1),overflow:(0,l.useSharedValue)("hidden"),hideAdjacentItems:(0,l.useSharedValue)(!1)};return n.createElement(Y.Provider,{value:v},n.createElement(R,U({},e,{initialIndex:a,reference:t})))},k=(0,n.forwardRef)(j);var F=a(50728);function H(e){const[t,a]=(0,n.useState)(!0),[l,i]=(0,n.useState)(void 0),[u,o]=(0,n.useState)(void 0),h=(e,t)=>{o({width:e,height:t}),a(!1)},r=e=>{i(e),a(!1)},s=JSON.stringify(e);return(0,n.useEffect)((()=>{if(a(!0),"number"!=typeof e)void 0!==e.headers?F.default.getSizeWithHeaders(e.uri,e.headers,h,r):F.default.getSize(e.uri,h,r);else{const{width:t,height:a}=F.default.resolveAssetSource(e);h(t,a)}}),[s]),{isFetching:t,resolution:u,error:l}}var Z=a(63384);const{width:W,height:L}=Z.default.get("window"),$=-1*Math.max(W,L),q=e=>{const t=o(0,0),a=u(0,0),n=(0,l.useSharedValue)(1),i=u($,$),h=o(0,0),r=u(0,0),s=(0,l.useSharedValue)(0);return{onUpdate:l=>{if(t.width.value=l.width,t.height.value=l.height,a.x.value=l.translateX,a.y.value=l.translateY,n.value=l.scale,"crop"===e){const e=l;r.x.value=e.rotateX,r.y.value=e.rotateY,s.value=e.rotate}if("snapback"===e){const e=l;e.resizedWidth&&(h.width.value=e.resizedWidth),e.resizedHeight&&(h.height.value=e.resizedHeight),i.x.value=l.x,i.y.value=l.y}},transform:(0,l.useDerivedValue)((()=>{const e=s.value,t=r.x.value,l=r.y.value,i=n.value,u=[];return u[0]=i*Math.cos(l)*Math.cos(e),u[1]=i*Math.sin(l)*Math.sin(t)*Math.cos(e)-i*Math.cos(t)*Math.sin(e),u[2]=i*Math.sin(t)*Math.sin(e)+i*Math.sin(l)*Math.cos(t)*Math.cos(e),u[3]=0,u[4]=i*Math.cos(l)*Math.sin(e),u[5]=i*Math.cos(t)*Math.cos(e)+i*Math.sin(l)*Math.sin(t)*Math.sin(e),u[6]=i*Math.sin(l)*Math.cos(t)*Math.sin(e)-i*Math.sin(t)*Math.cos(e),u[7]=0,u[8]=-1*Math.sin(l),u[9]=Math.cos(l)*Math.sin(t),u[10]=Math.cos(l)*Math.cos(t),u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,[{translateX:a.x.value},{translateY:a.y.value},{matrix:u}]}),[a,n,s,r]),state:(()=>{const l={width:t.width,height:t.height,translateX:a.x,translateY:a.y,scale:n};return"crop"===e&&(l.rotateX=r.x,l.rotateY=r.y,l.rotate=s),"snapback"===e&&(l.x=i.x,l.y=i.y,l.resizedWidth=h.width,l.resizedHeight=h.height),l})()}},_=(e,t)=>{let a=t.width,n=t.width/e;return n>t.height&&(a=t.height*e,n=t.height),{width:a,height:n}},B=e=>{const{index:t,activeIndex:a,direction:n,gallerySize:i,scroll:u,isScrolling:o}=e;if("vertical"===n)return{transform:[{translateY:t*i.height-u}]};if(t<a-1||t>a+1)return{opacity:0,transform:[{translateX:0},{scale:0}]};let h=t*i.width-u,r=1,s=1;return t===a||o||(s=0),(t===a+1||t===a&&u<t*i.width)&&(r=(0,l.interpolate)(u,[(t-1)*i.width,t*i.width],[0,1],l.Extrapolation.CLAMP),s=.75+.25*r,h=0),{opacity:r,transform:[{translateX:h},{scale:s}]}}}}]);