(this["webpackJsonphannah-website"]=this["webpackJsonphannah-website"]||[]).push([[0],{122:function(e,t,a){e.exports=a(276)},127:function(e,t,a){},128:function(e,t,a){},250:function(e,t){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(127),a(128),a(16)),i=a(17),s=a(19),m=a(18),u=a(101),d=a(284),h=a(283),f=a(279),E=a(280),b=a(281),p=a(278),v=a(282),g=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"backToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return r.a.createElement("footer",{className:"text-muted py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{onClick:function(){return e.backToTop()}},r.a.createElement("p",{className:"float-right"},r.a.createElement(p.a,{variant:"outline-secondary",href:"#"},"Back to Top"))),r.a.createElement("p",{className:"font-weight-light"},"\xa9 Hannah Martin 2020 (Website created by Daniel Randell)")))}}]),a}(r.a.Component),y=a(94),k=a.n(y),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).style={maxHeight:"100%",maxWidth:"100%"},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"jumbotron text-center bg-custom"},r.a.createElement("img",{src:k.a,alt:"Logo",style:this.style})))}}]),a}(n.Component),N=a(46),x=a.n(N),O=a(95),j=a.n(O),C=a(96),M=a.n(C),T=a(97),R=a.n(T),S=a(66),H=a(43),I=a(109),L=function(){var e=Object(n.useState)(!1),t=Object(H.a)(e,2),a=t[0],c=t[1];return r.a.createElement(I.a,{rounded:!0,duration:.4,color:"#ffffff",toggled:a,toggle:c})},B=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).servicesRef=Object(n.createRef)(),r.aboutMeRef=Object(n.createRef)(),r.testimonialsRef=Object(n.createRef)(),r.scrollToContent=void 0,r.scrollToRef=function(e){e.current&&e.current.scrollIntoView({behavior:"smooth"})},r.state={files:new Map([]),show:!1},r}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=new Map;fetch(j.a).then((function(e){return e.text()})).then((function(a){t.set("about",a),e.setState({files:t})})),fetch(M.a).then((function(e){return e.text()})).then((function(a){t.set("learnMore",a),e.setState({files:t})})),fetch(R.a).then((function(e){return e.text()})).then((function(a){t.set("testimonials",a),e.setState({files:t})})),this.handleShow=this.handleShow.bind(this),this.handleClose=this.handleClose.bind(this)}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this,t=this.state;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(d.a,{sticky:"top",variant:"light",bg:"custom"},r.a.createElement(S.a,{query:"(min-width: 800px)",render:function(){return r.a.createElement(h.a,{className:"mx-auto"},r.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.aboutMeRef)}},"ABOUT ME"),r.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.servicesRef)}},"SERVICES"),r.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.testimonialsRef)}},"TESTIMONIALS"),r.a.createElement(h.a.Link,{href:"/contact-me"},"CONTACT ME"))}}),r.a.createElement(S.a,{query:"(max-width: 799px)",render:function(){return r.a.createElement(L,null)}}))),r.a.createElement("main",{role:"main"},r.a.createElement(w,null),r.a.createElement(u.Fade,{cascade:!0,triggerOnce:!0,fraction:.25,duration:150},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-custom",ref:this.aboutMeRef},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-main-title text-center"},"About Me"),r.a.createElement(x.a,{source:t.files.get("about"),skipHtml:!0})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-custom bg-custom",ref:this.servicesRef},r.a.createElement("div",null,r.a.createElement("h4",{className:"card-main-title-offset text-center"},"Services"),r.a.createElement(f.a,{fluid:!0,className:"text-center"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("div",{className:"card card-custom-mini shadow rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"},"DE + FR > English Translation"),r.a.createElement("p",null,"I offer a range of linguistic solutions and specialise in translation for various industries. My high attention to detail means that your texts will be translated to an excellent standard.")))),r.a.createElement(b.a,null,r.a.createElement("div",{className:"card card-custom-mini shadow rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"},"Proofreading"),r.a.createElement("p",null,"It\u2019s quite common for non-native English speakers to translate documents into English. Unfortunately, this is when mistakes are made. I can proofread your text and ensure that it is completely accurate."))))),r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("div",{className:"card card-custom-mini shadow rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"},"MT Post-Editing"),r.a.createElement("p",null,"Machine translation has drastically improved over the last few years thanks to AI, but certain texts will still require a native English speaker to check for and correct any errors.")))),r.a.createElement(b.a,null,r.a.createElement("div",{className:"card card-custom-mini shadow rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center"}," US into UK English"),r.a.createElement("p",null,"Despite being the same language, both US English and UK English often use different spelling or even completely different terms to describe the same thing. I can tailor your text for the British market."))))),r.a.createElement(p.a,{className:"button-padding",onClick:this.handleShow}," Learn More "),r.a.createElement(v.a,{size:"lg",show:this.state.show,onHide:this.handleClose,centered:!0},r.a.createElement(v.a.Header,{closeButton:!0},r.a.createElement(v.a.Title,null,"Learn More")),r.a.createElement(v.a.Body,null,r.a.createElement(x.a,{source:t.files.get("learnMore"),skipHtml:!0})),r.a.createElement(v.a.Footer,null,r.a.createElement(p.a,{variant:"secondary",onClick:this.handleClose},"Close"))))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-custom",ref:this.testimonialsRef},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-main-title text-center"},"Testimonials"),r.a.createElement(x.a,{source:t.files.get("testimonials"),skipHtml:!1,escapeHtml:!1})))))),r.a.createElement(g,null))}}]),a}(n.Component),F=a(107),A=a(6),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(d.a,{sticky:"top",variant:"light",bg:"custom"},r.a.createElement(h.a,{className:"mx-auto"},r.a.createElement(h.a.Link,{href:"/"},"HOME")))),r.a.createElement("h2",null,"Contact Me"),r.a.createElement(g,null))}}]),a}(n.Component),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(F.a,{basename:"".concat("","/")},r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/contact-me",component:U}),r.a.createElement(A.a,{exact:!0,path:"/",component:B})))}}]),a}(n.Component),q=function(){return Object(n.useEffect)((function(){document.title="Hannah Martin Translation"}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a.p+"static/media/logo.6a287e4d.png"},95:function(e,t,a){e.exports=a.p+"static/media/about_me.3cab3118.md"},96:function(e,t,a){e.exports=a.p+"static/media/learn_more.f02fe86e.md"},97:function(e,t,a){e.exports=a.p+"static/media/testimonials.dbb0b454.md"}},[[122,1,2]]]);
//# sourceMappingURL=main.b2b4393a.chunk.js.map