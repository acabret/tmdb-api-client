(this["webpackJsonpmuvinext-react"]=this["webpackJsonpmuvinext-react"]||[]).push([[0],{38:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var c,a,o,r,i,s,l,u,j,d=t(0),b=t.n(d),v=t(12),O=t.n(v),m=(t(38),t(10)),h=t(4),p="en-US",f="/w154",g="/api/",x=function(e){var n=e.language,t=void 0===n?p:n,c=e.genre,a=e.voteGte,o=e.voteLte,r=e.dateGte,i=e.dateLte,s="?language=".concat(t),l=c?"&genre=".concat(c):"",u=a?"&voteGte=".concat(a):"",j=o?"&voteLte=".concat(o):"",d=r?"&dateGte=".concat(r,"-01-01"):"",b=i?"&dateLte=".concat(i,"-12-31"):"";return fetch("".concat(g,"movies/discover").concat(s).concat(l).concat(u).concat(j).concat(d).concat(b)).then((function(e){return e.json()}))},w=t(14),S=t(15),k=t(5),y=S.a.article(c||(c=Object(w.a)(["\n  background-color: gray;\n  /* width: 11rem; */\n  width: 40%;\n  margin: 1rem .5rem;\n  @media (min-width: 768px) {\n    width: 15%;\n  }\n"]))),G=S.a.div(a||(a=Object(w.a)(["\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  padding-top: calc( 100% * 16/11);\n  width: 100%;\n"])),(function(e){var n=e.poster_path;return"".concat("https://image.tmdb.org/t/p").concat(f).concat(n)})),L=S.a.div(o||(o=Object(w.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  /* transform: translate(50%, -50%); */\n  background-color: hsla(53, 100%, 42%, 1);\n  padding: 0.2rem 0.5rem;\n  z-index: 10;\n"]))),z=S.a.span(r||(r=Object(w.a)(["\n  font-size: 1rem;\n  font-weight: bold;\n"]))),C=S.a.h3(i||(i=Object(w.a)(["\n  font-size: 1rem ;\n\n\n\n"]))),E=function(e){var n=e.movie;return Object(k.jsxs)(y,{children:[Object(k.jsx)(G,{poster_path:n.poster_path,children:Object(k.jsx)(L,{children:Object(k.jsx)(z,{children:Number(n.vote_average).toFixed(1)})})}),Object(k.jsx)(C,{children:n.title})]})},_=S.a.div(s||(s=Object(w.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem 0;\n  background-color: red;\n  @media (min-width: 768px) {\n    justify-content:space-around;\n  }\n"]))),D=S.a.h3(l||(l=Object(w.a)(["\n    font-size: 1.4rem;\n    margin-bottom: .75rem;\n"]))),F=function(e){var n=e.sectionTitle,t=e.movies;return console.log("peliculas de ",n,"peliculas",t),Object(k.jsxs)("section",{children:[Object(k.jsx)(D,{children:n}),Object(k.jsx)(_,{children:t.map((function(e){return Object(k.jsx)(E,{movie:e},e.id)}))})]})},T=t(1),B=t(17),J=t.n(B),V=t(22),Y=t(33),H=t(27),I=(t(47),S.a.main(u||(u=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n"])))),M=S.a.div(j||(j=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n"]))),N=function(e){var n=Object(d.useState)([]),t=Object(h.a)(n,2),c=t[0],a=t[1],o=Object(d.useState)(null),r=Object(h.a)(o,2),i=r[0],s=r[1],l=Object(d.useState)([5,9]),u=Object(h.a)(l,2),j=u[0],b=u[1],v=Object(d.useState)([1990,(new Date).getFullYear()]),O=Object(h.a)(v,2),p=O[0],f=O[1];Object(d.useEffect)((function(){var n=e.genres.reduce((function(e,n){return e.concat({value:n.id,label:n.name})}),[]);a(Object(m.a)(n))}),[e.genres]);var g=function(){var n=Object(V.a)(J.a.mark((function n(){var t,c,a;return J.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={voteGte:j[0],voteLte:j[1],genre:(null===i||void 0===i?void 0:i.value)?i.value:"",dateGte:p[0],dateLte:p[1]},n.next=3,x(t);case 3:c=n.sent,console.log(c),a={id:(null===i||void 0===i?void 0:i.value)?i.value:0,name:(null===i||void 0===i?void 0:i.label)?i.label:"De todos los g\xe9neros",movies:Object(m.a)(c)},e.setSearchSection(a);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w={min:1,max:10,step:.1,value:j,defaultValue:j,onChange:function(e){return b(Object(m.a)(e))}},S={min:1900,max:(new Date).getFullYear(),step:1,value:p,defaultValue:p,onChange:function(e){return f(Object(m.a)(e))}};return Object(k.jsx)(I,{children:Object(k.jsxs)(M,{children:[Object(k.jsx)(Y.a,{onChange:function(e){console.log(e),s(e)},options:c,placeholder:"G\xe9neros",value:i}),Object(k.jsx)(H.a,Object(T.a)({},w)),Object(k.jsxs)("p",{children:["valor min:",j[0]]}),Object(k.jsxs)("p",{children:["valor max:",j[1]]}),Object(k.jsx)(H.a,Object(T.a)({},S)),Object(k.jsxs)("p",{children:["valor min a\xf1o:",p[0]]}),Object(k.jsxs)("p",{children:["valor max a\xf1o:",p[1]]}),Object(k.jsx)("button",{onClick:g,children:"Buscar"})]})})};var U=function(){var e=Object(d.useState)([]),n=Object(h.a)(e,2),t=n[0],c=n[1],a=Object(d.useState)([]),o=Object(h.a)(a,2),r=o[0],i=o[1],s=Object(d.useState)(null),l=Object(h.a)(s,2),u=l[0],j=l[1];return Object(d.useEffect)((function(){var e;console.log("running use effect"),(e={language:p},e.language,fetch("".concat(g,"movies/init")).then((function(e){if(200===e.status)return e.json();throw Error("Hubo un error en la conexi\xf3n con el servidor")})).catch((function(e){return console.log(e)}))).then((function(e){c(Object(m.a)(e.genres)),i(Object(m.a)(e.sections))}))}),[p]),console.log("estado search section",u),Object(k.jsxs)("div",{children:[Object(k.jsx)(N,{genres:t,setSearchSection:j}),u&&Object(k.jsx)(F,{sectionTitle:u.name,movies:u.movies},u.id),r.map((function(e){return Object(k.jsx)(F,{sectionTitle:e.name,movies:e.movies},e.id)}))]})};O.a.render(Object(k.jsx)(b.a.StrictMode,{children:Object(k.jsx)(U,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5dbbc91a.chunk.js.map