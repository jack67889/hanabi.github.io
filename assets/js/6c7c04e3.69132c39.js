(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[449],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,p=h["".concat(s,".").concat(d)]||h[d]||m[d]||i;return a?r.createElement(p,l(l({ref:t},u),{},{components:a})):r.createElement(p,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(7294),n=a(9443);var i=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var m=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,m=e.values,h=e.groupId,d=e.className,p=i(),g=p.tabGroupChoices,f=p.setTabGroupChoices,y=(0,r.useState)(n),b=y[0],v=y[1],x=r.Children.toArray(e.children),k=[];if(null!=h){var w=g[h];null!=w&&w!==b&&m.some((function(e){return e.value===w}))&&v(w)}var E=function(e){var t=e.currentTarget,a=k.indexOf(t),r=m[a].value;v(r),null!=h&&(f(h,r),setTimeout((function(){var e,a,r,n,i,l,o,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,a>=0&&i<=c&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;a=k[r]||k[0];break;case c:var n=k.indexOf(e.target)-1;a=k[n]||k[k.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:E,onClick:E},a)}))),t?(0,r.cloneElement)(x.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){"use strict";var r=(0,a(7294).createContext)(void 0);t.Z=r},8787:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function i(e){var t=e.className,a=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,o({pathRadius:i,dashRatio:n,counterClockwise:a})),d:l({pathRadius:i,counterClockwise:a}),strokeWidth:s,fillOpacity:0})}function l(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function o(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,i=(1-a)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,a),r)-a)/(r-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,n=e.classes,l=e.counterClockwise,o=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),m=this.getPathRatio();return(0,r.createElement)("svg",{className:n.root+" "+a,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:n.background,style:o.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:n.trail,counterClockwise:l,dashRatio:t,pathRadius:u,strokeWidth:s,style:o.trail}),(0,r.createElement)(i,{className:n.path,counterClockwise:l,dashRatio:m*t,pathRadius:u,strokeWidth:s,style:o.path}),c?(0,r.createElement)("text",{className:n.text,style:o.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function c(e){var t=e.part,a=Math.round((t-1)/60*100);return r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(s,{value:a,text:a+"%"}))}},7943:function(e,t,a){"use strict";a.r(t),a.d(t,{contentTitle:function(){return L},default:function(){return J},frontMatter:function(){return F},metadata:function(){return X},toc:function(){return U}});var r,n,i,l,o,s,c,u,m,h,d,p,g,f,y,b,v,x,k,w,E,N,O,C,P,T,j,S,_,B,R,H=a(2122),I=a(9756),q=a(7294),Z=a(3905),D=a(8787),A=a(5064),M=a(8215),W=["title","titleId"];function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var z=function(e){var t=e.title,a=e.titleId,H=V(e,W);return q.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",baseProfile:"full",height:375,viewBox:"0 0 944 375",width:944,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,r||(r=q.createElement("defs",null,q.createElement("filter",{x:0,y:0,width:1,height:1,id:"2-save-question-2_yml__a"},q.createElement("feFlood",{floodColor:"#0ff"})))),n||(n=q.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/red0.svg"})),i||(i=q.createElement("image",{height:100,width:70,x:78,xlinkHref:"/img/pieces/cards/yellow1.svg"})),l||(l=q.createElement("image",{height:100,width:70,x:156,xlinkHref:"/img/pieces/cards/green2.svg"})),o||(o=q.createElement("image",{height:100,width:70,x:234,xlinkHref:"/img/pieces/cards/blue0.svg"})),s||(s=q.createElement("image",{height:100,width:70,x:312,xlinkHref:"/img/pieces/cards/purple0.svg"})),q.createElement("svg",Q({height:100,width:90,x:464,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,c||(c=q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Alice")),u||(u=q.createElement("text",{dominantBaseline:"central",dy:30,filter:"url(#2-save-question-2_yml__a)",x:"0%",y:"50%"},"Clue Giver")),m||(m=q.createElement("text",{dominantBaseline:"central",dy:30,x:"0%",y:"50%"},"Clue Giver"))),q.createElement("svg",Q({height:100,width:70,x:554,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,h||(h=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Q({height:100,width:70,x:632,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,d||(d=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Q({height:100,width:70,x:710,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,p||(p=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Q({height:100,width:70,x:788,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,g||(g=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Q({height:100,width:70,x:866,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,f||(f=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Q({height:100,width:90,x:464,y:125,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,y||(y=q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Bob"))),b||(b=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:551,y:122})),q.createElement("svg",Q({height:100,width:70,x:554,y:125,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,v||(v=q.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/1.svg"}))),q.createElement("svg",Q({height:100,width:70,x:632,y:125,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,x||(x=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Q({height:100,width:70,x:710,y:125,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,k||(k=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),q.createElement("svg",Q({height:100,width:70,x:788,y:125,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,w||(w=q.createElement("rect",{fill:"gray",height:100,rx:5,ry:5,width:70}))),E||(E=q.createElement("rect",{fill:"orange",height:106,rx:5,ry:5,width:76,x:863,y:122})),q.createElement("svg",Q({height:100,width:70,x:866,y:125,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,N||(N=q.createElement("image",{height:100,width:70,xlinkHref:"/img/pieces/cards/2.svg"}))),O||(O=q.createElement("image",{height:70,width:50,x:876,xlinkHref:"/img/pieces/arrow.svg",y:85})),C||(C=q.createElement("circle",{cx:901,cy:110,r:15,stroke:"#fff",strokeWidth:2})),q.createElement("svg",Q({height:16,width:16,x:893,y:102,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,P||(P=q.createElement("text",{dominantBaseline:"central",fill:"#fff",textAnchor:"middle",x:"50%",y:"50%",fontSize:"1.4em"},"2"))),q.createElement("svg",Q({height:100,width:90,x:464,y:250,className:"example","aria-labelledby":a},H),t?q.createElement("title",{id:a},t):null,T||(T=q.createElement("text",{className:"site-theme-text",dominantBaseline:"central",x:"0%",y:"50%",fontSize:"1.4em"},"Cathy"))),j||(j=q.createElement("image",{height:100,width:70,x:554,xlinkHref:"/img/pieces/cards/green5.svg",y:250})),S||(S=q.createElement("image",{height:100,width:70,x:632,xlinkHref:"/img/pieces/cards/blue3.svg",y:250})),_||(_=q.createElement("image",{height:100,width:70,x:710,xlinkHref:"/img/pieces/cards/green4.svg",y:250})),B||(B=q.createElement("image",{height:100,width:70,x:788,xlinkHref:"/img/pieces/cards/purple3.svg",y:250})),R||(R=q.createElement("image",{height:100,width:70,x:866,xlinkHref:"/img/pieces/cards/purple3.svg",y:250})))},G=["components"],F={id:"2-save-question-2",title:"The 2 Save (Question 2)"},L=void 0,X={unversionedId:"beginner/2-save-question-2",id:"beginner/2-save-question-2",isDocsHomePage:!1,title:"The 2 Save (Question 2)",description:"<Tabs",source:"@site/docs/beginner/2-save-question-2.md",sourceDirName:"beginner",slug:"/beginner/2-save-question-2",permalink:"/docs/beginner/2-save-question-2",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/2-save-question-2.md",version:"current",sidebarPosition:2,frontMatter:{id:"2-save-question-2",title:"The 2 Save (Question 2)"},sidebar:"mainSidebar",previous:{title:"The 2 Save (Question 1)",permalink:"/docs/beginner/2-save-question-1"},next:{title:"The 2 Save (Question 3)",permalink:"/docs/beginner/2-save-question-3"}},U=[],K={toc:U};function J(e){var t=e.components,a=(0,I.Z)(e,G);return(0,Z.kt)("wrapper",(0,H.Z)({},K,a,{components:t,mdxType:"MDXLayout"}),(0,Z.kt)(D.Z,{part:"20",mdxType:"BeginnersGuideProgress"}),(0,Z.kt)(A.Z,{defaultValue:"question",values:[{label:"Question",value:"question"},{label:"Solution",value:"solution"}],mdxType:"Tabs"},(0,Z.kt)(M.Z,{value:"question",mdxType:"TabItem"},(0,Z.kt)("ul",null,(0,Z.kt)("li",{parentName:"ul"},"Previously in the game, Bob was given a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue")," on a 1. He had planned on playing it on his next turn."),(0,Z.kt)("li",{parentName:"ul"},"Now, Alice clues number 2 to Bob, touching his slot 5."),(0,Z.kt)("li",{parentName:"ul"},"From Bob's perspective, is this a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),"?"),(0,Z.kt)("li",{parentName:"ul"},"What identity does Bob write on the card?"))),(0,Z.kt)(M.Z,{value:"solution",mdxType:"TabItem"},(0,Z.kt)("ul",null,(0,Z.kt)("li",{parentName:"ul"},"Bob knows that his 1 is either a red 1, a blue 1, or a purple 1.",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"(These are the 1's left to play on the stacks.)"))),(0,Z.kt)("li",{parentName:"ul"},"If this is a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue"),", then the identity of his 2 would be:",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"a yellow 2 (directly playable)"),(0,Z.kt)("li",{parentName:"ul"},"or a ",(0,Z.kt)("em",{parentName:"li"},"Delayed Play Clue")," on the two that matches his unknown 1 (e.g. red 2, blue 2, or purple 2)"))),(0,Z.kt)("li",{parentName:"ul"},"However, since Alice's clue touched Bob's chop, it could also be a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),". If it is a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),", then it could be a ",(0,Z.kt)("em",{parentName:"li"},"2 Save")," on an unplayable 2."),(0,Z.kt)("li",{parentName:"ul"},"Bob does not know whether or not this is a ",(0,Z.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue"),", but he has to treat it as a ",(0,Z.kt)("em",{parentName:"li"},"Save Clue")," for the time being until he gets move information."),(0,Z.kt)("li",{parentName:"ul"},"Bob writes down an identity of red 2, yellow 2, blue 2, or purple 2.",(0,Z.kt)("ul",{parentName:"li"},(0,Z.kt)("li",{parentName:"ul"},"(It cannot be a green 2 because that card is already played and is useless to the team; Alice would not waste a clue on a useless card like that.)")))))),(0,Z.kt)(z,{mdxType:"TwoSaveQuestion2"}))}J.isMDXComponent=!0},6010:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);