(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+hPa":function(e,t,a){e.exports=a.p+"static/bg03-96965f1345ad626c180c0cb3d66324c0.jpg"},"2o5t":function(e,t,a){e.exports=a.p+"static/bg01-f219fa7113dd258d658d0a6ed99a57f5.jpg"},KssD:function(e,t,a){e.exports=a.p+"static/bg02-869af6d522ce9f72d82622850316ccec.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),s=a("7oih"),o=a("obyI"),l=a.n(o);function r(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("ul",{className:"icons"},l.a.socialLinks.map((function(e){var t=e.icon,a=e.name,n=e.url;return i.a.createElement("li",null,i.a.createElement("a",{href:n,class:"icon "+t},i.a.createElement("span",{class:"label"},a)))}))),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© Bilal Ahmed Abbas 2021")))}function c(){return i.a.createElement("header",{id:"header"},i.a.createElement("h1",null,l.a.heading),i.a.createElement("p",null,l.a.subHeading))}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=a("dI71"),p=function(e){function t(){var t;return(t=e.call(this)||this).state={message:""},t.onSubmit=t.onSubmit.bind(u(t)),t}Object(m.a)(t,e);var a=t.prototype;return a.onSubmit=function(e){var t=this;e.preventDefault(),e.stopPropagation(),this.setState({message:"Thank you!"}),setTimeout((function(){t.setState({message:""})}),3e3)},a.render=function(){var e=this.state.message;return i.a.createElement("form",{id:"signup-form",onSubmit:this.onSubmit,method:"post",action:"#"},i.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email Address"}),i.a.createElement("input",{type:"submit",value:"Sign Up"}),i.a.createElement("span",{className:(e?"visible success":"")+" message"},e))},t}(n.Component),d=function(e){function t(){var t;return(t=e.call(this)||this).state={pos:0,lastPos:0},t.rotateSlide=t.rotateSlide.bind(u(t)),t}Object(m.a)(t,e);var a=t.prototype;return a.rotateSlide=function(){var e=this,t=this.props.settings;setInterval((function(){var a=e.state,n=a.pos,i=a.lastPos;i=n,++n>=t.images.length&&(n=0),setTimeout((function(){i=n,e.setState({lastPos:i})}),t.delay/2),e.setState({lastPos:i,pos:n})}),t.delay)},a.componentDidMount=function(){this.rotateSlide()},a.render=function(){var e=this.state,t=e.pos,a=e.lastPos,n=this.props.settings;return i.a.createElement("div",{id:"bg"},n.images.map((function(e,n){return i.a.createElement("div",{key:e.url,style:{backgroundPosition:e.position,backgroundImage:'url("'+e.url+'")'},className:n===t?"visible top":n===a?"visible":""})})),";")},t}(n.PureComponent),f={images:[{url:a("2o5t"),position:"center"},{url:a("KssD"),position:"center"},{url:a("+hPa"),position:"center"}],delay:6e3};t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(c,null),i.a.createElement(p,null),i.a.createElement(r,null),i.a.createElement(d,{settings:f}))}},obyI:function(e,t){e.exports={siteTitle:"Bilal does Web",manifestName:"Bilal does web launches 4-10-2021",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",heading:"Website launches on 4th October 2021",subHeading:"I am launching my website soon so if you would like to be the first to know please sign up (no spams, I promise).",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/bilibilal1"},{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/bilixbilal"},{icon:"fa-linkedin",name:"Linkedin",url:"https://linkedin.com/in/bilal-ahmed-20b517208"},{icon:"fa-envelope-o",name:"Email",url:"mailto:bilalahmedabbas7@gmail.com"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-03fadce692af1965c6b3.js.map