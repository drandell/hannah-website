(this["webpackJsonphannah-website"]=this["webpackJsonphannah-website"]||[]).push([[0],{147:function(e,t,c){},148:function(e,t,c){},304:function(e,t,c){"use strict";c.r(t);var n=c(5),s=c(3),a=c.n(s),i=c(27),r=c.n(i),o=(c(147),c(148),c(21)),l=c(22),d=c(24),h=c(23),j=c(140),b=c(315),m=c(314),u=c(312),x=c(310),O=c(309),f=c(311),p=c(313),v=c(55),g=c(94),y=c.p+"static/media/aiti.7d00051d.png",k=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).style={maxHeight:"10%",maxWidth:"10%"},e}return Object(l.a)(c,[{key:"backToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return Object(n.jsx)("footer",{className:"text-muted py-5",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)(O.a,{className:"text-center",children:[Object(n.jsx)("img",{src:y,alt:"Aiti Logo",style:this.style}),Object(n.jsxs)("p",{className:"font-weight-light",children:[Object(n.jsx)("br",{}),"Associate member of the ITI (membership no. 00020564).",Object(n.jsx)("br",{}),"This membership is attached to me as an individual and not HLM Translations."]})]}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsxs)("p",{className:"font-weight-light",children:["\xa9 HLM Translations 2020 ",Object(n.jsx)("br",{}),"(Website created by Daniel Randell)"]})}),Object(n.jsx)(O.a,{children:Object(n.jsx)("div",{onClick:function(){return e.backToTop()},children:Object(n.jsx)("p",{className:"float-right",children:Object(n.jsx)(f.a,{variant:"outline-secondary",href:"#",children:"Back to Top"})})})})]})]})})}}]),c}(a.a.Component),w=c(93),N=c.p+"static/media/logo.516d4652.png",C=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).style={maxHeight:"100%",maxWidth:"100%"},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("section",{className:"jumbotron text-center bg-custom",children:Object(n.jsx)("img",{src:N,alt:"Logo",style:this.style})})})}}]),c}(s.Component),T=c(68),R=c.n(T),M=c.p+"static/media/about_me.db53a619.md",S=c.p+"static/media/learn_more.9cca240c.md",E=c.p+"static/media/testimonials.6c19fe4c.md",I=c(0),L=c.p+"static/media/promo.73c1763b.jpg",A=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).style={maxHeight:"100%",maxWidth:"100%"},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("section",{children:Object(n.jsx)("img",{src:L,alt:"Promo",style:this.style})})})}}]),c}(s.Component),H=c.p+"static/media/hlm.eb355a6b.jpg",B=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).servicesRef=Object(s.createRef)(),n.aboutMeRef=Object(s.createRef)(),n.testimonialsRef=Object(s.createRef)(),n.contactRef=Object(s.createRef)(),n.scrollToContent=void 0,n.scrollToRef=function(e){e.current&&e.current.scrollIntoView({behavior:"smooth"})},n.style={maxHeight:"30%",maxWidth:"30%",paddingTop:"2.5%",paddingBottom:"5%"},n.state={files:new Map([]),show:!1,collapsed:!1},n}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=new Map;fetch(M).then((function(e){return e.text()})).then((function(c){t.set("about",c),e.setState({files:t})})),fetch(S).then((function(e){return e.text()})).then((function(c){t.set("learnMore",c),e.setState({files:t})})),fetch(E).then((function(e){return e.text()})).then((function(c){t.set("testimonials",c),e.setState({files:t})})),this.handleShow=this.handleShow.bind(this),this.handleClose=this.handleClose.bind(this)}},{key:"getData",value:function(e,t,c){var n=this,s=!0;return fetch(t).then((function(e){return e.text()})).then((function(t){e.set(c,t),s&&n.setState({files:e})})),function(){s=!1}}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"setCollapsed",value:function(e){this.setState({collapsed:e})}},{key:"render",value:function(){var e=this,t=this.state;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("header",{style:{backgroundColor:"#9bc8c9"},children:[Object(n.jsx)(g.a,{query:"(min-width: 800px)",render:function(){return Object(n.jsx)(b.a,{sticky:"top",variant:"light",bg:"custom",children:Object(n.jsxs)(m.a,{className:"mx-auto",children:[Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.aboutMeRef)},children:"ABOUT ME"}),Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.servicesRef)},children:"SERVICES"}),Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.testimonialsRef)},children:"TESTIMONIALS"}),Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.contactRef)},children:"CONTACT ME"})]})})}}),Object(n.jsx)(g.a,{query:"(max-width: 799px)",render:function(){return Object(n.jsxs)(v.g,{children:[Object(n.jsx)(v.d,{color:"white",id:"hamburger1",onClick:function(){e.setCollapsed(!e.state.collapsed)}}),Object(n.jsx)(v.c,{id:"navbarCollapse1",isOpen:e.state.collapsed,navbar:!0,children:Object(n.jsxs)(v.h,{children:[Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.aboutMeRef)},children:"ABOUT ME"}),Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.servicesRef)},children:"SERVICES"}),Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.testimonialsRef)},children:"TESTIMONIALS"}),Object(n.jsx)(m.a.Link,{onClick:function(){e.scrollToRef(e.contactRef)},children:"CONTACT ME"})]})})]})}})]}),Object(n.jsxs)("main",{role:"main",children:[Object(n.jsx)(C,{}),Object(n.jsxs)(j.a,{cascade:!0,triggerOnce:!0,fraction:.25,duration:150,children:[Object(n.jsx)("div",{className:"card card-custom",ref:this.aboutMeRef,children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"card-main-title text-center",children:"About Me"}),Object(n.jsx)("img",{src:H,alt:"HLM",style:this.style})]}),Object(n.jsx)(R.a,{children:t.files.get("about")||"",skipHtml:!0})]})}),Object(n.jsx)(A,{}),Object(n.jsx)("div",{className:"card card-custom bg-custom",ref:this.servicesRef,children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"card-main-title-offset text-center",children:"Services"}),Object(n.jsxs)(u.a,{fluid:!0,className:"text-center",children:[Object(n.jsxs)(x.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsx)("div",{className:"card card-custom-mini shadow rounded",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title text-center",children:"German & French into English"}),Object(n.jsx)("p",{children:"I offer a range of linguistic solutions and specialise in translation for various industries. My high attention to detail means that your texts will be translated to an excellent standard."})]})})}),Object(n.jsx)(O.a,{children:Object(n.jsx)("div",{className:"card card-custom-mini shadow rounded",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title text-center",children:"Proofreading"}),Object(n.jsx)("p",{children:"It\u2019s quite common for non-native English speakers to translate documents into English. Unfortunately, this is when mistakes are made. I can proofread your text and ensure that it is completely accurate."})]})})})]}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(O.a,{children:Object(n.jsx)("div",{className:"card card-custom-mini shadow rounded",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title text-center",children:"MT Post-Editing"}),Object(n.jsx)("p",{children:"Machine translation has drastically improved over the last few years thanks to AI, but certain texts will still require a native English speaker to check for and correct any errors."})]})})}),Object(n.jsx)(O.a,{children:Object(n.jsx)("div",{className:"card card-custom-mini shadow rounded",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-title text-center",children:"US into UK English"}),Object(n.jsx)("p",{children:"Despite being the same language, both US English and UK English often use different spelling or even completely different terms to describe the same thing. I can tailor your text for the British market."})]})})})]}),Object(n.jsx)(f.a,{className:"btn-lg button-padding",onClick:this.handleShow,children:" Learn More "}),Object(n.jsxs)(p.a,{size:"lg",show:this.state.show,onHide:this.handleClose,centered:!0,children:[Object(n.jsx)(p.a.Header,{className:"text-center",children:Object(n.jsx)(p.a.Title,{children:"Services"})}),Object(n.jsx)(p.a.Body,{children:Object(n.jsx)(R.a,{skipHtml:!0,children:t.files.get("learnMore")||""})}),Object(n.jsx)(p.a.Footer,{children:Object(n.jsx)(f.a,{variant:"secondary",onClick:this.handleClose,children:"Close"})})]})]})]})}),Object(n.jsx)("div",{className:"card card-custom",ref:this.testimonialsRef,children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h4",{className:"card-main-title text-center",children:"Testimonials"}),Object(n.jsx)(R.a,{children:t.files.get("testimonials")||""})]})}),Object(n.jsx)("div",{className:"card card-custom bg-custom",ref:this.contactRef,children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("h4",{className:"card-main-title-offset text-center",children:["Contact Me",Object(n.jsx)(I.b.Provider,{value:{className:"react-icons"},children:Object(n.jsxs)("div",{style:{position:"absolute",right:"40px",top:"44px"},children:[Object(n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/hlmtranslations/",children:[" ",Object(n.jsx)(w.a,{style:{marginRight:"5px"}})," "]}),Object(n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/company/hlm-translations/",children:[" ",Object(n.jsx)(w.b,{})," "]})]})})]}),Object(n.jsx)(u.a,{fluid:!0,className:"text-center",children:Object(n.jsx)(x.a,{children:Object(n.jsx)(O.a,{children:Object(n.jsxs)("p",{children:["If you would like to request a quote or wish to learn more about my services, please do not hesitate to contact me at ",Object(n.jsx)("a",{href:"mailto:info@hlm-translations.co.uk?subject=Email Enquiry",children:"info@hlm-translations.co.uk"})]})})})})]})})]})]}),Object(n.jsx)(k,{})]})}}]),c}(s.Component),q=c(46),U=c(12),W=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(q.a,{basename:"".concat("","/"),children:Object(n.jsx)(U.c,{children:Object(n.jsx)(U.a,{exact:!0,path:"/",component:B})})})}}]),c}(s.Component),F=function(){return Object(s.useEffect)((function(){document.title="Hannah Martin Translation"}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(W,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[304,1,2]]]);
//# sourceMappingURL=main.2222a73c.chunk.js.map