(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6782],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8787:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e){var t=e.className,r=e.counterClockwise,a=e.dashRatio,i=e.pathRadius,l=e.strokeWidth,s=e.style;return(0,n.createElement)("path",{className:t,style:Object.assign({},s,c({pathRadius:i,dashRatio:a,counterClockwise:r})),d:o({pathRadius:i,counterClockwise:r}),strokeWidth:l,fillOpacity:0})}function o(e){var t=e.pathRadius,r=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+r+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+r+" 1 1 0,-"+2*t+"\n    "}function c(e){var t=e.counterClockwise,r=e.dashRatio,n=e.pathRadius,a=2*Math.PI*n,i=(1-r)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(t?-i:i)+"px"}}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,r=e.minValue,n=e.maxValue;return(Math.min(Math.max(t,r),n)-r)/(n-r)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,r=e.className,a=e.classes,o=e.counterClockwise,c=e.styles,l=e.strokeWidth,s=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+r,style:c.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:c.background,cx:50,cy:50,r:50}):null,(0,n.createElement)(i,{className:a.trail,counterClockwise:o,dashRatio:t,pathRadius:u,strokeWidth:l,style:c.trail}),(0,n.createElement)(i,{className:a.path,counterClockwise:o,dashRatio:p*t,pathRadius:u,strokeWidth:l,style:c.path}),s?(0,n.createElement)("text",{className:a.text,style:c.text,x:50,y:50},s):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(n.Component);function s(e){var t=e.part,r=Math.round((t-1)/60*100);return n.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},n.createElement(l,{value:r,text:r+"%"}))}},3673:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(8787),c=["components"],l={id:"three-main-principles",title:"The Three Main Principles"},s=void 0,u={unversionedId:"beginner/three-main-principles",id:"beginner/three-main-principles",isDocsHomePage:!1,title:"The Three Main Principles",description:"- So far, we have covered:",source:"@site/docs/beginner/three-main-principles.md",sourceDirName:"beginner",slug:"/beginner/three-main-principles",permalink:"/docs/beginner/three-main-principles",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/three-main-principles.md",version:"current",frontMatter:{id:"three-main-principles",title:"The Three Main Principles"},sidebar:"mainSidebar",previous:{title:"Clue Interpretation (Question 5)",permalink:"/docs/beginner/clue-interpretation-question-5"},next:{title:"Good Touch Principle (GTP)",permalink:"/docs/beginner/good-touch-principle"}},p=[],m={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{part:"37",mdxType:"BeginnersGuideProgress"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"So far, we have covered:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"how to discard (i.e. the chop)"),(0,i.kt)("li",{parentName:"ul"},"how to tell what a clue means (i.e. a ",(0,i.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,i.kt)("em",{parentName:"li"},"Save Clue"),")"),(0,i.kt)("li",{parentName:"ul"},"how to tell what the focus of a clue is (i.e. ",(0,i.kt)("em",{parentName:"li"},"Chop-Focus")," or left-most)"))),(0,i.kt)("li",{parentName:"ul"},"But that doesn't really tell you much about the ",(0,i.kt)("em",{parentName:"li"},"strategy")," involved to play Hanabi. How do players find the best move for a certain situation?"),(0,i.kt)("li",{parentName:"ul"},"Hanabi is very complicated, so it is impossible to write a guide on how to find the best move. (And that's a good thing, because the game continues to be interesting to play, even after thousands of games!)"),(0,i.kt)("li",{parentName:"ul"},"Luckily, beginners can focus on internalizing just ",(0,i.kt)("strong",{parentName:"li"},"three main principles"),":",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Good Touch Principle")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Save Principle")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Minimum Clue Value Principle")))),(0,i.kt)("li",{parentName:"ul"},"Let's go through each principle individually.")))}h.isMDXComponent=!0}}]);