(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[5518],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,g=h["".concat(c,".").concat(d)]||h[d]||m[d]||i;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),a=r(9443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var m=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,m=e.values,h=e.groupId,d=e.className,g=i(),p=g.tabGroupChoices,f=g.setTabGroupChoices,y=(0,n.useState)(a),b=y[0],x=y[1],v=n.Children.toArray(e.children),k=[];if(null!=h){var w=p[h];null!=w&&w!==b&&m.some((function(e){return e.value===w}))&&x(w)}var E=function(e){var t=e.currentTarget,r=k.indexOf(t),n=m[r].value;x(n),null!=h&&(f(h,n),setTimeout((function(){var e,r,n,a,i,l,o,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,r>=0&&i<=s&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case s:var a=k.indexOf(e.target)-1;r=k[a]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:E,onClick:E},r)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,c=e.strokeWidth,s=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},s,o({pathRadius:i,dashRatio:a,counterClockwise:r})),d:l({pathRadius:i,counterClockwise:r}),strokeWidth:c,fillOpacity:0})}function l(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,i=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,l=e.counterClockwise,o=e.styles,c=e.strokeWidth,s=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:o.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(i,{className:a.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:c,style:o.trail}),(0,n.createElement)(i,{className:a.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:c,style:o.path}),s?(0,n.createElement)("text",{className:a.text,style:o.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function s(e){var t=e.part,r=Math.round((t-1)/60*100);return n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(c,{value:r,text:r+"%"}))}},2024:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return te},default:function(){return ie},frontMatter:function(){return ee},metadata:function(){return re},toc:function(){return ne}});var n,a,i,l,o,c,s,u,m,h,d,g,p,f,y,b,x,v,k,w,E,N,C,O,P,j,I,T,_,H,R,S,B,q,Z,D,W,M,A,Q=r(2122),V=r(9756),G=r(7294),z=r(3905),F=r(8787),L=r(5064),X=r(8215),U=["title","titleId"];function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var Y=function(e){var t=e.title,r=e.titleId,Q=J(e,U);return G.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,n||(n=G.createElement("defs",null,G.createElement("filter",{x:0,y:0,width:1,height:1,id:"clue-interpretation-question-2_yml__a"},G.createElement("feFlood",{floodColor:"#0ff"})))),a||(a=G.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red1.svg"})),i||(i=G.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow3.svg"})),l||(l=G.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),o||(o=G.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue3.svg"})),c||(c=G.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple1.svg"})),G.createElement("svg",K({height:100,width:90,x:464,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,s||(s=G.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=G.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#clue-interpretation-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=G.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),G.createElement("svg",K({height:100,width:70,x:554,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,h||(h=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),G.createElement("svg",K({height:100,width:70,x:632,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,d||(d=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),G.createElement("svg",K({height:100,width:70,x:710,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,g||(g=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),G.createElement("svg",K({height:100,width:70,x:788,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,p||(p=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),G.createElement("svg",K({height:100,width:70,x:866,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,f||(f=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),G.createElement("svg",K({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,y||(y=G.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),G.createElement("svg",K({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,b||(b=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),G.createElement("svg",K({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,x||(x=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),G.createElement("svg",K({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,v||(v=G.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),k||(k=G.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:122})),G.createElement("svg",K({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,w||(w=G.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/green.svg"}))),E||(E=G.createElement("image",{height:70,width:50,x:798,xlinkHref:"/img/pieces/arrow.svg",y:85})),N||(N=G.createElement("circle",{cx:823,cy:110,fill:"#90ee90",r:15,stroke:"#000",strokeWidth:2})),C||(C=G.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),G.createElement("svg",K({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,O||(O=G.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/green.svg"}))),P||(P=G.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow.svg",y:85})),j||(j=G.createElement("circle",{cx:901,cy:110,fill:"#90ee90",r:15,stroke:"#000",strokeWidth:2})),G.createElement("svg",K({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":r},Q),t?G.createElement("title",{id:r},t):null,I||(I=G.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),T||(T=G.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/blue4.svg",y:250})),_||(_=G.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue3.svg",y:250})),H||(H=G.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green2.svg",y:250})),R||(R=G.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:785,y:247})),S||(S=G.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:250})),B||(B=G.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:247})),q||(q=G.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/red3.svg",y:250})),Z||(Z=G.createElement("image",{height:200,opacity:.2,width:200,x:91,xlinkHref:"/img/pieces/trashcan.png",y:120})),D||(D=G.createElement("image",{height:100,width:70,x:121,xlinkHref:"/img/pieces/cards/green1.svg",y:136.667})),W||(W=G.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/blue2.svg",y:170})),M||(M=G.createElement("image",{height:100,width:70,x:191,xlinkHref:"/img/pieces/cards/green3.svg",y:203.333})),A||(A=G.createElement("rect",{fill:"none",height:200,rx:10,ry:10,stroke:"#006400",strokeWidth:2,width:200,x:91,y:120})))},$=["components"],ee={id:"clue-interpretation-question-2",title:"Clue Interpretation (Question 2)"},te=void 0,re={unversionedId:"beginner/clue-interpretation-question-2",id:"beginner/clue-interpretation-question-2",isDocsHomePage:!1,title:"Clue Interpretation (Question 2)",description:"<Tabs",source:"@site/docs/beginner/clue-interpretation-question-2.md",sourceDirName:"beginner",slug:"/beginner/clue-interpretation-question-2",permalink:"/docs/beginner/clue-interpretation-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/clue-interpretation-question-2.md",version:"current",frontMatter:{id:"clue-interpretation-question-2",title:"Clue Interpretation (Question 2)"},sidebar:"mainSidebar",previous:{title:"Clue Interpretation (Question 1)",permalink:"/docs/beginner/clue-interpretation-question-1"},next:{title:"Clue Interpretation (Question 3)",permalink:"/docs/beginner/clue-interpretation-question-3"}},ne=[],ae={toc:ne};function ie(e){var t=e.components,r=(0,V.Z)(e,$);return(0,z.kt)("wrapper",(0,Q.Z)({},ae,r,{components:t,mdxType:"MDXLayout"}),(0,z.kt)(F.Z,{part:"33",mdxType:"BeginnersGuideProgress"}),(0,z.kt)(L.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,z.kt)(X.Z,{value:"question",mdxType:"TabItem"},(0,z.kt)("ul",null,(0,z.kt)("li",{parentName:"ul"},"Bob has a completely unclued hand."),(0,z.kt)("li",{parentName:"ul"},"Alice clues green to Bob, touching slot 4 and slot 5.")),(0,z.kt)("ol",null,(0,z.kt)("li",{parentName:"ol"},"What slot is focused?"),(0,z.kt)("li",{parentName:"ol"},"Is this a ",(0,z.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,z.kt)("em",{parentName:"li"},"Save Clue"),"?"),(0,z.kt)("li",{parentName:"ol"},"What identity does Bob write on the focused card?"))),(0,z.kt)(X.Z,{value:"solution",mdxType:"TabItem"},(0,z.kt)("ol",null,(0,z.kt)("li",{parentName:"ol"},"Slot 5 is focused (i.e. the chop card)."),(0,z.kt)("li",{parentName:"ol"},"Since green 2 is played on the stacks, the card on slot 5 must be either a green 3, a green 4, or a green 5.",(0,z.kt)("ul",{parentName:"li"},(0,z.kt)("li",{parentName:"ul"},"If it is a green 3, then this would be a ",(0,z.kt)("em",{parentName:"li"},"Chop-Focus Play Clue"),". That is legal."),(0,z.kt)("li",{parentName:"ul"},"If it is a green 4, then it wouldn't make any sense, because green 4 is neither playable nor critical. (All clues must either be ",(0,z.kt)("em",{parentName:"li"},"Play Clues")," or ",(0,z.kt)("em",{parentName:"li"},"Save Clues"),".)"),(0,z.kt)("li",{parentName:"ul"},"If it is a green 5, then it wouldn't make any sense, because green 5 is not playable. Green 5 is critical, but it must be saved with a number 5 clue as a ",(0,z.kt)("em",{parentName:"li"},"5 Save"),"."),(0,z.kt)("li",{parentName:"ul"},"Thus, it must be a ",(0,z.kt)("em",{parentName:"li"},"Chop-Focus Play Clue")," on the green 3."))),(0,z.kt)("li",{parentName:"ol"},'Bob writes "green 3" on slot 5.')))),(0,z.kt)(Y,{mdxType:"ClueInterpretationQuestion2"}))}ie.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);