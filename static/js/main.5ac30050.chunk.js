(this["webpackJsonphannah-website"]=this["webpackJsonphannah-website"]||[]).push([[0],{118:function(e,t,a){e.exports=a.p+"static/media/logo.6a287e4d.png"},119:function(e,t,a){e.exports=a.p+"static/media/about_me.3cab3118.md"},120:function(e,t,a){e.exports=a.p+"static/media/learn_more.232ffb02.md"},121:function(e,t,a){e.exports=a.p+"static/media/testimonials.1845c6d6.md"},129:function(e,t,a){e.exports=a(300)},134:function(e,t,a){},135:function(e,t,a){},276:function(e,t){},300:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(12),r=a.n(l),o=(a(134),a(135),a(19)),s=a(20),i=a(22),m=a(21),u=a(124),d=a(311),h=a(310),f=a(308),E=a(305),b=a(306),p=a(307),v=a(309),g=a(44),k=a(76),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"backToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return c.a.createElement("footer",{className:"text-muted py-5"},c.a.createElement("div",{className:"container"},c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement("p",{className:"font-weight-light"},"\xa9 Hannah Martin 2020 (Website created by Daniel Randell)")),c.a.createElement(b.a,null,c.a.createElement("div",{onClick:function(){return e.backToTop()}},c.a.createElement("p",{className:"float-right"},c.a.createElement(p.a,{variant:"outline-secondary",href:"#"},"Back to Top")))))))}}]),a}(c.a.Component),N=a(118),w=a.n(N),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).style={maxHeight:"100%",maxWidth:"100%"},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"jumbotron text-center bg-custom"},c.a.createElement("img",{src:w.a,alt:"Logo",style:this.style})))}}]),a}(n.Component),x=a(54),O=a.n(x),R=a(119),T=a.n(R),j=a(120),M=a.n(j),S=a(121),I=a.n(S),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).servicesRef=Object(n.createRef)(),c.aboutMeRef=Object(n.createRef)(),c.testimonialsRef=Object(n.createRef)(),c.contactRef=Object(n.createRef)(),c.scrollToContent=void 0,c.scrollToRef=function(e){e.current&&e.current.scrollIntoView({behavior:"smooth"})},c.state={files:new Map([]),show:!1,collapsed:!1},c}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Map;fetch(T.a).then((function(e){return e.text()})).then((function(a){t.set("about",a),e.setState({files:t})})),fetch(M.a).then((function(e){return e.text()})).then((function(a){t.set("learnMore",a),e.setState({files:t})})),fetch(I.a).then((function(e){return e.text()})).then((function(a){t.set("testimonials",a),e.setState({files:t})})),this.handleShow=this.handleShow.bind(this),this.handleClose=this.handleClose.bind(this)}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"setCollapsed",value:function(e){this.setState({collapsed:e})}},{key:"render",value:function(){var e=this,t=this.state;return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{style:{backgroundColor:"#9bc8c9"}},c.a.createElement(k.a,{query:"(min-width: 800px)",render:function(){return c.a.createElement(d.a,{sticky:"top",variant:"light",bg:"custom"},c.a.createElement(h.a,{className:"mx-auto"},c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.aboutMeRef)}},"ABOUT ME"),c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.servicesRef)}},"SERVICES"),c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.testimonialsRef)}},"TESTIMONIALS"),c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.contactRef)}},"CONTACT ME")))}}),c.a.createElement(k.a,{query:"(max-width: 799px)",render:function(){return c.a.createElement(g.g,null,c.a.createElement(g.d,{color:"white",id:"hamburger1",onClick:function(){e.setCollapsed(!e.state.collapsed)}}),c.a.createElement(g.c,{id:"navbarCollapse1",isOpen:e.state.collapsed,navbar:!0},c.a.createElement(g.h,null,c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.aboutMeRef)}},"ABOUT ME"),c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.servicesRef)}},"SERVICES"),c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.testimonialsRef)}},"TESTIMONIALS"),c.a.createElement(h.a.Link,{onClick:function(){e.scrollToRef(e.contactRef)}},"CONTACT ME"))))}})),c.a.createElement("main",{role:"main"},c.a.createElement(C,null),c.a.createElement(u.Fade,{cascade:!0,triggerOnce:!0,fraction:.25,duration:150},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card card-custom",ref:this.aboutMeRef},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-main-title text-center"},"About Me"),c.a.createElement(O.a,{source:t.files.get("about"),skipHtml:!0})))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card card-custom bg-custom",ref:this.servicesRef},c.a.createElement("div",null,c.a.createElement("h4",{className:"card-main-title-offset text-center"},"Services"),c.a.createElement(f.a,{fluid:!0,className:"text-center"},c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},"DE + FR > English Translation"),c.a.createElement("p",null,"I offer a range of linguistic solutions and specialise in translation for various industries. My high attention to detail means that your texts will be translated to an excellent standard.")))),c.a.createElement(b.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},"Proofreading"),c.a.createElement("p",null,"It\u2019s quite common for non-native English speakers to translate documents into English. Unfortunately, this is when mistakes are made. I can proofread your text and ensure that it is completely accurate."))))),c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"},"MT Post-Editing"),c.a.createElement("p",null,"Machine translation has drastically improved over the last few years thanks to AI, but certain texts will still require a native English speaker to check for and correct any errors.")))),c.a.createElement(b.a,null,c.a.createElement("div",{className:"card card-custom-mini shadow rounded"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title text-center"}," US into UK English"),c.a.createElement("p",null,"Despite being the same language, both US English and UK English often use different spelling or even completely different terms to describe the same thing. I can tailor your text for the British market."))))),c.a.createElement(p.a,{className:"btn-lg button-padding",onClick:this.handleShow}," Learn More "),c.a.createElement(v.a,{size:"lg",show:this.state.show,onHide:this.handleClose,centered:!0},c.a.createElement(v.a.Header,{className:"text-center"},c.a.createElement(v.a.Title,null,"Services")),c.a.createElement(v.a.Body,null,c.a.createElement(O.a,{source:t.files.get("learnMore"),skipHtml:!0})),c.a.createElement(v.a.Footer,null,c.a.createElement(p.a,{variant:"secondary",onClick:this.handleClose},"Close"))))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card card-custom",ref:this.testimonialsRef},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-main-title text-center"},"Testimonials"),c.a.createElement(O.a,{source:t.files.get("testimonials"),skipHtml:!1,escapeHtml:!1})))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card card-custom bg-custom",ref:this.contactRef},c.a.createElement("div",null,c.a.createElement("h4",{className:"card-main-title-offset text-center"},"Contact Me"),c.a.createElement(f.a,{fluid:!0,className:"text-center"},c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement("p",null,"If you would like to request a quote or wish to learn more about my services, please do not hesitate to contact me at ",c.a.createElement("a",{href:"mailto:info@hlm-translations.co.uk?subject=Email Enquiry"},"info@hlm-translations.co.uk")))))))))),c.a.createElement(y,null))}}]),a}(n.Component),H=a(38),A=a(9),q=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement(d.a,{sticky:"top",variant:"light",bg:"custom"},c.a.createElement(h.a,{className:"mx-auto"},c.a.createElement(h.a.Link,{href:"/"},"HOME")))),c.a.createElement("h2",null,"Contact Me"),c.a.createElement(y,null))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(H.a,{basename:"".concat("","/")},c.a.createElement(A.c,null,c.a.createElement(A.a,{exact:!0,path:"/contact-me",component:q}),c.a.createElement(A.a,{exact:!0,path:"/",component:L})))}}]),a}(n.Component),F=function(){return Object(n.useEffect)((function(){document.title="Hannah Martin Translation"}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[129,1,2]]]);
//# sourceMappingURL=main.5ac30050.chunk.js.map