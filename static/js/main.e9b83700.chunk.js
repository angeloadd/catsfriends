(this.webpackJsonpcatsfriends=this.webpackJsonpcatsfriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=(n(13),n(3)),i=n(0),h=function(e){var t=e.name,n=e.email,c=e.id;return Object(i.jsxs)("div",{className:"tc card-style-custom grow dib pa3 br3 ma3 bw3 shadow-5",children:[Object(i.jsx)("img",{alt:"avatar",src:"https://robohash.org/".concat(c,"?set=set4"),width:"150"}),Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})},u=function(e){var t=e.cats;return Object(i.jsx)("section",{className:"flex justify-center items-center flex-wrap ma3 pv3",children:t.map((function(e,t){return Object(i.jsx)(h,{id:e.id,name:e.name,email:e.email},t)}))})},l=function(e){var t=e.searchChange;return Object(i.jsx)("input",{className:"input-style-custom br3 pa2 input-reset shadow-2",type:"search",placeholder:"Search Cats",onChange:t})},j=function(e){var t=e.searchChange;return Object(i.jsxs)("header",{className:"flex justify-center items-center flex-column shadow-5 pv4 header-style-custom",children:[Object(i.jsx)("h1",{className:"heading-style-custom f1 mb4 mt0",children:"Cats Friends"}),Object(i.jsx)(l,{searchChange:t})]})},d=function(e){var t=e.children;return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"1px solid var(--main-color)",height:"100vh"},children:t})},b=(n(15),n(5)),f=n(6),m=n(8),O=n(7),p=function(e){Object(m.a)(n,e);var t=Object(O.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(f.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{className:"error-font tc",children:"Ooooooops! Something Went Wrong"}):this.props.children}}]),n}(c.Component),x=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),h=Object(o.a)(a,2),l=h[0],b=h[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}));var f=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.length?Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(j,{searchChange:function(e){return b(e.target.value)}}),Object(i.jsx)(d,{children:Object(i.jsx)(p,{children:Object(i.jsx)(u,{cats:f})})})]}):Object(i.jsx)("h1",{className:"heading-style-custom tc",children:"Loading"})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(16);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.e9b83700.chunk.js.map