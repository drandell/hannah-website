(this["webpackJsonphannah-website"]=this["webpackJsonphannah-website"]||[]).push([[0],{123:function(e,t,a){e.exports=a(277)},128:function(e,t,a){},129:function(e,t,a){},251:function(e,t){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a.n(r),o=(a(128),a(129),a(16)),i=a(17),s=a(19),m=a(18),u=a(35),d=a(102),h=a(285),f=a(284),E=a(280),b=a(281),p=a(282),v=a(279),g=a(283),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"backToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return c.a.createElement("footer",{className:"text-muted py-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{onClick:function(){return e.backToTop()}},c.a.createElement("p",{className:"float-right"},c.a.createElement(v.a,{variant:"outline-secondary",href:"#"},"Back to Top"))),c.a.createElement("p",{className:"font-weight-light"},"\xa9 Hannah Martin 2020 (Website created by Daniel Randell)")))}}]),a}(c.a.Component),k=a(95),w=a.n(k),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).style={maxHeight:"100%",maxWidth:"100%"},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"jumbotron text-center bg-custom"},c.a.createElement("img",{src:w.a,alt:"Logo",style:this.style})))}}]),a}(n.Component),O=a(47),x=a.n(O),j=a(96),M=a.n(j),C=a(97),T=a.n(C),R=a(98),S=a.n(R),H=a(67),I=a(44),L=a(110),B=function(){var e=Object(n.useState)(!1),t=Object(I.a)(e,2),a=t[0],r=t[1];return c.a.createElement(L.a,{rounded:!0,duration:.4,color:"#ffffff",toggled:a,toggle:r})},F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).servicesRef=Object(n.createRef)(),c.aboutMeRef=Object(n.createRef)(),c.testimonialsRef=Object(n.createRef)(),c.scrollToContent=void 0,c.scrollToRef=function(e){e.current&&e.current.scrollIntoView({behavior:"smooth"})},c.handleShow=c.handleShow.bind(Object(u.a)(c)),c.handleClose=c.handleClose.bind(Object(u.a)(c)),c.state={files:new Map([]),show:!1,openMenu:!1},c}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=new Map;fetch(M.a).then((function(e){return e.text()})).then((function(a){t.set("about",a),e.setState({files:t})})),fetch(T.a).then((function(e){return e.text()})).then((function(a){t.set("learnMore",a),e.setState({files:t})})),fetch(S.a).then((function(e){return e.text()})).then((function(a){t.set("testimonials",a),e.setState({files:t})}))}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this,t=this.state;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement(h.a,{sticky:"top",variant:"light",bg:"custom"},c.a.createElement(H.a,{query:"(min-width: 800px)",render:function(){return c.a.createElement(f.a,{className:"mx-auto"},c.a.createElement(f.a.Link,{onClick:function(){e.scrollToRef(e.aboutMeRef)}},"ABOUT ME"),c.a.createElement(f.a.Link,{onClick:function(){e.scrollToRef(e.servicesRef)}},"SERVICES"),c.a.createElement(f.a.Link,{onClick:function(){e.scrollToRef(e.testimonialsRef)}},"TESTIMONIALS"),c.a.createElement(f.a.Link,{href:"/contact-me"},"CONTACT ME"))}}),c.a.createElement(H.a,{query:"(max-width: 799px)",render:function(){return c.a.createElement(B,null)}}))),c.a.createElement("main",{role:"main"},c.a.createElement(N,null),c.a.createElement(d.Fade,{cascade:!0,triggerOnce:!0,fraction:.25,duration:150},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card card-custom",ref:this.aboutMeRef},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-main-title text-center"},"About Me"),c.a.createElement(x.a,{source:t.files.get("about"),skipHtml:!0})))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card card-custom bg-custom",ref:this.servicesRef},c.a.createElement("div",null,c.a.createElement("h4",{className:"card-main-title-offset text-center"},"Services"),c.a.createElement(E.a,{fluid:!0,className:"text-center"},c.a.createElement(b.a,null,c.a.createElement(p.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},"DE + FR > English Translation"),c.a.createElement("p",null,"I offer a range of linguistic solutions and specialise in translation for various industries. My high attention to detail means that your texts will be translated to an excellent standard.")))),c.a.createElement(p.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},"Proofreading"),c.a.createElement("p",null,"It\u2019s quite common for non-native English speakers to translate documents into English. Unfortunately, this is when mistakes are made. I can proofread your text and ensure that it is completely accurate."))))),c.a.createElement(b.a,null,c.a.createElement(p.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},"MT Post-Editing"),c.a.createElement("p",null,"Machine translation has drastically improved over the last few years thanks to AI, but certain texts will still require a native English speaker to check for and correct any errors.")))),c.a.createElement(p.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"}," US into UK English"),c.a.createElement("p",null,"Despite being the same language, both US English and UK English often use different spelling or even completely different terms to describe the same thing. I can tailor your text for the British market."))))),c.a.createElement(v.a,{className:"button-padding",onClick:this.handleShow}," Learn More "),c.a.createElement(g.a,{size:"lg",show:this.state.show,onHide:this.handleClose,centered:!0},c.a.createElement(g.a.Header,{closeButton:!0},c.a.createElement(g.a.Title,null,"Learn More")),c.a.createElement(g.a.Body,null,c.a.createElement(x.a,{source:t.files.get("learnMore"),skipHtml:!0})),c.a.createElement(g.a.Footer,null,c.a.createElement(v.a,{variant:"secondary",onClick:this.handleClose},"Close"))))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card card-custom",ref:this.testimonialsRef},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-main-title text-center"},"Testimonials"),c.a.createElement(x.a,{source:t.files.get("testimonials"),skipHtml:!1,escapeHtml:!1})))))),c.a.createElement(y,null))}}]),a}(n.Component),A=a(108),U=a(6),W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement(h.a,{sticky:"top",variant:"light",bg:"custom"},c.a.createElement(f.a,{className:"mx-auto"},c.a.createElement(f.a.Link,{href:"/"},"HOME")))),c.a.createElement("h2",null,"Contact Me"),c.a.createElement(y,null))}}]),a}(n.Component),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(A.a,{basename:"".concat("","/")},c.a.createElement(U.c,null,c.a.createElement(U.a,{exact:!0,path:"/contact-me",component:W}),c.a.createElement(U.a,{exact:!0,path:"/",component:F})))}}]),a}(n.Component),D=function(){return Object(n.useEffect)((function(){document.title="Hannah Martin Translation"}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a.p+"static/media/logo.6a287e4d.png"},96:function(e,t,a){e.exports=a.p+"static/media/about_me.3cab3118.md"},97:function(e,t,a){e.exports=a.p+"static/media/learn_more.f02fe86e.md"},98:function(e,t,a){e.exports=a.p+"static/media/testimonials.dbb0b454.md"}},[[123,1,2]]]);
//# sourceMappingURL=main.63562ca9.chunk.js.map