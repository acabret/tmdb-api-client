(this["webpackJsonpmuvinext-react"]=this["webpackJsonpmuvinext-react"]||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a,c,o,r,i,l,s,u,d,b,j,h,O,m,g=t(0),p=t.n(g),v=t(14),f=t.n(v),x=(t(38),t(10)),w=t(4),k="en-US",y="/w154",S="/api/",C=function(e){var n=e.language,t=void 0===n?k:n,a=e.genre,c=e.voteGte,o=e.voteLte,r=e.dateGte,i=e.dateLte,l="?language=".concat(t),s=a?"&genre=".concat(a):"",u=c?"&voteGte=".concat(c):"",d=o?"&voteLte=".concat(o):"",b=r?"&dateGte=".concat(r,"-01-01"):"",j=i?"&dateLte=".concat(i,"-12-31"):"";return fetch("".concat(S,"movies/discover").concat(l).concat(s).concat(u).concat(d).concat(b).concat(j)).then((function(e){return e.json()}))},z=(t(39),t(12)),G=t(13),L=t(5),F=G.a.article(a||(a=Object(z.a)(["\n  background-color: hsla(0, 0%, 15%, 1);\n  /* width: 11rem; */\n  width: 40%;\n  margin: 0.5rem;\n  border-radius: 5px;\n  overflow: hidden;\n  @media (min-width: 768px) {\n    width: 15%;\n  }\n"]))),E=G.a.div(c||(c=Object(z.a)(["\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  padding-top: calc(100% * 16 / 11);\n  width: 100%;\n"])),(function(e){var n=e.poster_path;return"".concat("https://image.tmdb.org/t/p").concat(y).concat(n)})),_=G.a.div(o||(o=Object(z.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  /* transform: translate(50%, -50%); */\n  background-color: hsla(53, 100%, 42%, .75);\n  padding: 0.2rem 0.5rem;\n  border-radius: 5px;\n  z-index: 1;\n"]))),D=G.a.span(r||(r=Object(z.a)(["\n  font-size: 1rem;\n  font-weight: bold;\n"]))),T=G.a.h3(i||(i=Object(z.a)(["\n  padding: 0.35rem;\n  color:white;\n  font-size: 1rem;\n  line-height: 1.1rem;\n  height: 2.2rem;\n  -webkit-line-clamp:2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),V=function(e){var n=e.movie;return Object(L.jsxs)(F,{children:[Object(L.jsx)(E,{poster_path:n.poster_path,children:Object(L.jsx)(_,{children:Object(L.jsx)(D,{children:Number(n.vote_average).toFixed(1)})})}),Object(L.jsx)(T,{children:n.title})]})},B=G.a.section(l||(l=Object(z.a)(["\n  padding: .5rem 0.25rem;\n  background-color: hsla(0, 0%, 6%, 1);\n"]))),J=G.a.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: .5rem 0;\n  @media (min-width: 768px) {\n    justify-content: space-between;\n  }\n"]))),M=G.a.h3(u||(u=Object(z.a)(["\n  font-size: 1.4rem;\n  color: hsla(47, 92%, 51%, 1);\n"]))),P=function(e){var n=e.sectionTitle,t=e.movies;return console.log("peliculas de ",n,"peliculas",t),Object(L.jsxs)(B,{children:[Object(L.jsx)(M,{children:n}),Object(L.jsx)(J,{children:t.map((function(e){return Object(L.jsx)(V,{movie:e},e.id)}))})]})},Y=t(17),A=t.n(Y),H=t(22),I=t(1),N=t(33),U=t(27),q=(t(48),G.a.h1(d||(d=Object(z.a)(["\n  color: hsla(47, 92%, 51%, 1);\n  margin-bottom:1rem;\n  "])))),K=G.a.main(b||(b=Object(z.a)(["\n  position: relative;\n  padding: 1rem 0;\n  display: flex;\n  flex-direction:column;\n  // justify-content: center;\n  align-items:center;\n  z-index: 2;\n"]))),Q=G.a.div(j||(j=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n"]))),R=G.a.button(h||(h=Object(z.a)(["\n  position: relative;\n  display: block;\n  height: 3rem;\n  width: 100%;\n  background-color: hsla(47, 92%, 51%, 1);\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 400;\n  font-family: inherit;\n  border: none;\n  border-radius: 5px;\n  transition: transform 0.2s linear;\n\n  :active {\n    transform: scale(0.95);\n  }\n"]))),W=G.a.div(O||(O=Object(z.a)(["\n  width: 100%;\n  text-align: center;\n  color: white;\n  :last-of-type{\n    margin-bottom:1rem;\n  }\n"]))),X=G.a.span(m||(m=Object(z.a)(["\n  color: hsla(47, 92%, 51%, 1);\n"]))),Z=function(e){var n=Object(g.useState)([]),t=Object(w.a)(n,2),a=t[0],c=t[1],o=Object(g.useState)(null),r=Object(w.a)(o,2),i=r[0],l=r[1],s=Object(g.useState)([5,9]),u=Object(w.a)(s,2),d=u[0],b=u[1],j=Object(g.useState)([1990,(new Date).getFullYear()]),h=Object(w.a)(j,2),O=h[0],m=h[1];Object(g.useEffect)((function(){var n=e.genres.reduce((function(e,n){return e.concat({value:n.id,label:n.name})}),[]);c(Object(x.a)(n))}),[e.genres]);var p={option:function(e,n){return Object(I.a)(Object(I.a)({},e),{},{color:"white",backgroundColor:"hsla(0, 0%, 15%, 1)"})},control:function(e,n){return Object(I.a)(Object(I.a)({},e),{},{backgroundColor:"hsla(0, 0%, 15%, 1)"})},singleValue:function(e,n){return Object(I.a)(Object(I.a)({},e),{},{color:"hsla(47, 92%, 51%, 1)"})}},v={min:1,max:10,step:.1,value:d,defaultValue:d,onChange:function(e){return b(Object(x.a)(e))}},f={min:1900,max:(new Date).getFullYear(),step:1,value:O,defaultValue:O,onChange:function(e){return m(Object(x.a)(e))}},k=function(){var n=Object(H.a)(A.a.mark((function n(){var t,a,c;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={voteGte:d[0],voteLte:d[1],genre:(null===i||void 0===i?void 0:i.value)?i.value:"",dateGte:O[0],dateLte:O[1]},n.next=3,C(t);case 3:a=n.sent,c={id:(null===i||void 0===i?void 0:i.value)?i.value:0,name:(null===i||void 0===i?void 0:i.label)?i.label:"De todos los g\xe9neros",movies:Object(x.a)(a)},e.setSearchSection(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(L.jsxs)(K,{children:[Object(L.jsx)(q,{children:"Muvinext"}),Object(L.jsxs)(Q,{children:[Object(L.jsx)(N.a,{onChange:function(e){return l(e)},options:a,placeholder:"G\xe9neros",value:i,styles:p}),Object(L.jsx)(U.a,Object(I.a)({style:{margin:"1rem 0"},trackStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"}],handleStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"},{backgroundColor:" hsla(47, 92%, 51%, 1)"}]},v)),Object(L.jsxs)(W,{children:["Puntajes entre ",Object(L.jsx)(X,{children:d[0].toFixed(1)})," y"," ",Object(L.jsx)(X,{children:d[1].toFixed(1)})]}),Object(L.jsx)(U.a,Object(I.a)({style:{margin:"1rem 0"},trackStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"}],handleStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"},{backgroundColor:" hsla(47, 92%, 51%, 1)"}]},f)),Object(L.jsxs)(W,{children:["Peliculas del a\xf1o ",Object(L.jsx)(X,{children:O[0]})," y"," ",Object(L.jsx)(X,{children:O[1]})]}),Object(L.jsx)(R,{onClick:k,children:"Buscar"})]})]})};var $=function(){var e=Object(g.useState)([]),n=Object(w.a)(e,2),t=n[0],a=n[1],c=Object(g.useState)([]),o=Object(w.a)(c,2),r=o[0],i=o[1],l=Object(g.useState)(null),s=Object(w.a)(l,2),u=s[0],d=s[1];return Object(g.useEffect)((function(){var e;console.log("running use effect"),(e={language:k},e.language,fetch("".concat(S,"movies/init")).then((function(e){if(200===e.status)return e.json();throw Error("Hubo un error en la conexi\xf3n con el servidor")})).catch((function(e){return console.log(e)}))).then((function(e){a(Object(x.a)(e.genres)),i(Object(x.a)(e.sections))}))}),[k]),console.log("estado search section",u),Object(L.jsxs)("div",{class:"App",children:[Object(L.jsx)(Z,{genres:t,setSearchSection:d}),u&&Object(L.jsx)(P,{sectionTitle:u.name,movies:u.movies},u.id),r.map((function(e){return Object(L.jsx)(P,{sectionTitle:e.name,movies:e.movies},e.id)}))]})};f.a.render(Object(L.jsx)(p.a.StrictMode,{children:Object(L.jsx)($,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.90687687.chunk.js.map