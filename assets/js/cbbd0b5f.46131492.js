(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[4500],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8787:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function i(e){var t=e.className,a=e.counterClockwise,n=e.dashRatio,i=e.pathRadius,s=e.strokeWidth,c=e.style;return(0,r.createElement)("path",{className:t,style:Object.assign({},c,l({pathRadius:i,dashRatio:n,counterClockwise:a})),d:o({pathRadius:i,counterClockwise:a}),strokeWidth:s,fillOpacity:0})}function o(e){var t=e.pathRadius,a=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+a+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+a+" 1 1 0,-"+2*t+"\n    "}function l(e){var t=e.counterClockwise,a=e.dashRatio,r=e.pathRadius,n=2*Math.PI*r,i=(1-a)*n;return{strokeDasharray:n+"px "+n+"px",strokeDashoffset:(t?-i:i)+"px"}}var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,a=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,a),r)-a)/(r-a)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,a=e.className,n=e.classes,o=e.counterClockwise,l=e.styles,s=e.strokeWidth,c=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,r.createElement)("svg",{className:n.root+" "+a,style:l.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,r.createElement)("circle",{className:n.background,style:l.background,cx:50,cy:50,r:50}):null,(0,r.createElement)(i,{className:n.trail,counterClockwise:o,dashRatio:t,pathRadius:u,strokeWidth:s,style:l.trail}),(0,r.createElement)(i,{className:n.path,counterClockwise:o,dashRatio:p*t,pathRadius:u,strokeWidth:s,style:l.path}),c?(0,r.createElement)("text",{className:n.text,style:l.text,x:50,y:50},c):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(r.Component);function c(e){var t=e.part,a=Math.round((t-1)/60*100);return r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(s,{value:a,text:a+"%"}))}},8764:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=a(8787),l=["components"],s={id:"early-game",title:"The Early Game"},c=void 0,u={unversionedId:"beginner/early-game",id:"beginner/early-game",isDocsHomePage:!1,title:"The Early Game",description:"- In Hanabi, the beginning of the game can be stressful - there can be a lot of important cards that need to be clued before they get discarded. For this reason, it is nice if players can be certain that their teammates will give a clue.",source:"@site/docs/beginner/early-game.md",sourceDirName:"beginner",slug:"/beginner/early-game",permalink:"/docs/beginner/early-game",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/early-game.md",version:"current",frontMatter:{id:"early-game",title:"The Early Game"},sidebar:"mainSidebar",previous:{title:"Minimum Clue Value Principle (Question 1)",permalink:"/docs/beginner/minimum-clue-value-principle-question-1"},next:{title:"The Early Game (Question 1)",permalink:"/docs/beginner/early-game-question-1"}},p=[{value:"The 5 Stall (Cluing Off Chop 5&#39;s)",id:"the-5-stall-cluing-off-chop-5s",children:[]}],m={toc:p};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{part:"48",mdxType:"BeginnersGuideProgress"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Hanabi, the beginning of the game can be stressful - there can be a lot of important cards that need to be clued before they get discarded. For this reason, it is nice if players can be certain that their teammates will give a clue."),(0,i.kt)("li",{parentName:"ul"},"We formalize this concept as ",(0,i.kt)("em",{parentName:"li"},"The Early Game"),". The ",(0,i.kt)("em",{parentName:"li"},"Early Game")," is defined as the period of time before someone discards for the first time. When they do, they initiate the ",(0,i.kt)("em",{parentName:"li"},"Mid-Game"),"."),(0,i.kt)("li",{parentName:"ul"},"Everyone agrees that they ",(0,i.kt)("strong",{parentName:"li"},"must"),' "extinguish" all of the available ',(0,i.kt)("em",{parentName:"li"},"Play Clues")," and ",(0,i.kt)("em",{parentName:"li"},"Save Clues")," before initiating the ",(0,i.kt)("em",{parentName:"li"},"Mid-Game"),". (There are no cards in the discard pile yet, but ",(0,i.kt)("em",{parentName:"li"},"Save Clues")," still need to be given to all of the 5's on chop and all of the 2's on chop that are not present in someone else's hand.)"),(0,i.kt)("li",{parentName:"ul"},"Furthermore, in the ",(0,i.kt)("em",{parentName:"li"},"Early Game"),", you can do a special move called a ",(0,i.kt)("em",{parentName:"li"},"5 Stall"),"; see below.")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"the-5-stall-cluing-off-chop-5s"},"The 5 Stall (Cluing Off Chop 5's)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Normally, you are only allowed to give a ",(0,i.kt)("em",{parentName:"li"},"Save Clue")," to a 5 if it is on chop. So if you use number 5 to clue a 5 that is ",(0,i.kt)("strong",{parentName:"li"},"not")," on chop, then it will typically look like a ",(0,i.kt)("em",{parentName:"li"},"Play Clue")," on that 5 (or some other advanced strategy)."),(0,i.kt)("li",{parentName:"ul"},"As a special exception, in the ",(0,i.kt)("em",{parentName:"li"},"Early Game"),", you ",(0,i.kt)("strong",{parentName:"li"},"are")," allowed to clue number 5 as a ",(0,i.kt)("em",{parentName:"li"},"Save Clue"),' to off chop 5\'s. Doing this is just interpreted as a "stall" clue and that you are trying to extend the ',(0,i.kt)("em",{parentName:"li"},"Early Game")," for a little bit longer."),(0,i.kt)("li",{parentName:"ul"},"However, you are ",(0,i.kt)("strong",{parentName:"li"},"only"),' allowed to do this if there is nothing else to do, meaning that all of the "normal" ',(0,i.kt)("em",{parentName:"li"},"Play Clues")," and ",(0,i.kt)("em",{parentName:"li"},"Save Clues")," have been extinguished."),(0,i.kt)("li",{parentName:"ul"},"Normally, ",(0,i.kt)("em",{parentName:"li"},"5 Stalls")," are only performed in the ",(0,i.kt)("em",{parentName:"li"},"Early Game"),". However, you might see someone do a ",(0,i.kt)("em",{parentName:"li"},"5 Stall")," in the ",(0,i.kt)("em",{parentName:"li"},"Mid-Game")," if they are in a special situation where they are not allowed to discard.")))}h.isMDXComponent=!0}}]);