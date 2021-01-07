(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{69:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),c=t.n(a),i=t(34),o=t.n(i),s=t(11),l=t(3),u=t(6),d=t(4),j=t(40);function m(){var e=Object(u.a)(["\n  padding: 0.5em 1em;\n  background-color: black;\n  color: white;\n  &:hover {\n    background-color: ",";\n  }\n"]);return m=function(){return e},e}function b(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 1em;\n  top: 1em;\n"]);return b=function(){return e},e}var v=d.c.div(b()),h=Object(d.c)(s.b)(m(),Object(j.a)(.3,"black")),p=function(){return Object(r.jsxs)(v,{children:[Object(r.jsx)(h,{to:"/",children:"Home"}),Object(r.jsx)(h,{to:"/about",children:"About"})]})},f=function(){return Object(r.jsx)("div",{children:"About Page"})},O=t(23),x=t.n(O),g=t(38),y=t(15),_=t(16),k=t(18),w=t(17),N=t(39),M=t.n(N);function L(){var e=Object(u.a)([""]);return L=function(){return e},e}function U(){var e=Object(u.a)(["\n  position: relative;\n  top: -2em;\n  height: 20em;\n  margin-right: 1em;\n  object-fit: cover;\n  border: 1px solid black;\n"]);return U=function(){return e},e}function A(){var e=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  padding: 1em;\n  border: 1px solid black;\n  background-color: white;\n"]);return A=function(){return e},e}function C(){var e=Object(u.a)(["\n  width: 50%;\n  padding: 1em;\n"]);return C=function(){return e},e}var D=d.c.div(C()),J=d.c.div(A()),S=d.c.img(U()),z=d.c.div(L()),B=function(e){var n=e.id,t=e.title,a=e.year,c=e.summary,i=e.imageUrl,o=e.genres;return Object(r.jsx)(D,{children:Object(r.jsx)(s.b,{to:{pathname:"/movie/".concat(n),state:{title:t,year:a,summary:c,imageUrl:i,genres:o}},children:Object(r.jsxs)(J,{children:[Object(r.jsx)(S,{src:i,alt:t,title:t}),Object(r.jsxs)(z,{children:[Object(r.jsx)("h1",{className:"movie__title",children:t}),Object(r.jsx)("span",{className:"movie__year",children:a}),Object(r.jsxs)("p",{className:"movie__summary",children:[c.slice(0,140),"..."]}),Object(r.jsx)("ul",{className:"genres",children:o.map((function(e,n){return Object(r.jsx)("li",{className:"genres__genre",children:e},n)}))})]})]})})})};function E(){var e=Object(u.a)(["\n  width: 100%;\n  max-width: 67.5em;\n  display: flex;\n  flex-wrap: wrap;\n"]);return E=function(){return e},e}function H(){var e=Object(u.a)(["\n  position: absolute;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n"]);return H=function(){return e},e}function I(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1em;\n"]);return I=function(){return e},e}var P=d.c.section(I()),q=d.c.div(H()),F=d.c.div(E()),G=function(e){Object(k.a)(t,e);var n=Object(w.a)(t);function t(){var e;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(g.a)(x.a.mark((function n(){var t,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:t=n.sent,r=t.data.data.movies,e.setState({isLoading:!1,movies:r});case 5:case"end":return n.stop()}}),n)}))),e}return Object(_.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,n=e.isLoading,t=e.movies;return Object(r.jsx)(P,{children:n?Object(r.jsx)(q,{children:Object(r.jsx)("span",{children:"Loading..."})}):Object(r.jsx)(F,{children:t.map((function(e){return Object(r.jsx)(B,{id:e.id,title:e.title,year:e.year,summary:e.summary,imageUrl:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),t}(a.Component),K=function(e){Object(k.a)(t,e);var n=Object(w.a)(t);function t(){return Object(y.a)(this,t),n.apply(this,arguments)}return Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.history;void 0===e.location.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location.state;return void 0===e?null:Object(r.jsxs)("div",{className:"movie-detail",children:[Object(r.jsx)("img",{className:"movie-detail__img",src:e.imageUrl,alt:e.title,title:e.title}),Object(r.jsxs)("div",{className:"movie-detail__data",children:[Object(r.jsx)("h1",{className:"movie-detail__title",children:e.title}),Object(r.jsx)("span",{className:"movie-detail__year",children:e.year}),Object(r.jsx)("p",{className:"movie-detail__summary",children:e.summary}),Object(r.jsx)("ul",{className:"genres",children:e.genres.map((function(e,n){return Object(r.jsx)("li",{className:"genres__genre",children:e},n)}))})]})]})}}]),t}(a.Component),Q=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(p,{}),Object(r.jsx)(l.a,{path:"/",component:G,exact:!0}),Object(r.jsx)(l.a,{path:"/about",component:f,exact:!0}),Object(r.jsx)(l.a,{path:"/movie/:id",component:K,exact:!0})]})};function R(){var e=Object(u.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    a {\n        color: black;\n        text-decoration: none;\n        outline: none\n    }\n\n    body{\n        ","\n    }\n\n    ul{\n        padding-left: 1em\n    }\n\n"]);return R=function(){return e},e}var T=Object(d.b)(R(),(function(e){return"background-color:".concat(e.theme.palette.gray)}));o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsxs)(d.a,{theme:{palette:{gray:"#f8f9fa",red:"#ffa8a8",teal:"#63e6be"}},children:[Object(r.jsx)(Q,{}),Object(r.jsx)(T,{})]})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.4b9dfc98.chunk.js.map