(this["webpackJsonpmuvinext-react"]=this["webpackJsonpmuvinext-react"]||[]).push([[0],{38:function(e,n,t){},51:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o,s,l,d,j,b,h,u,m,f,p,x,O,v,g,w,k,y,S,z,C,_,G=t(0),F=t.n(G),L=t(15),E=t.n(L),B=(t(51),t(12)),D=t(5),N=t(25),T=t(13),V="en-US",J="https://image.tmdb.org/t/p",M="/w154",P="/w780",Y="/api/",A=function(e){var n=e.language,t=void 0===n?V:n,a=e.genre,c=e.voteGte,r=e.voteLte,i=e.dateGte,o=e.dateLte,s="?language=".concat(t),l=a?"&genre=".concat(a):"",d=c?"&voteGte=".concat(c):"",j=r?"&voteLte=".concat(r):"",b=i?"&dateGte=".concat(i,"-01-01"):"",h=o?"&dateLte=".concat(o,"-12-31"):"";return fetch("".concat(Y,"movies/discover").concat(s).concat(l).concat(d).concat(j).concat(b).concat(h)).then((function(e){return e.json()}))},H=(t(38),t(6)),I=t(7),U=t(4),q=I.a.article(a||(a=Object(H.a)(["\n  background-color: hsla(0, 0%, 15%, 1);\n  width: 40%;\n  margin: 0.5rem;\n  color: #fff;\n  border-radius: 5px;\n  overflow: hidden;\n  transition: transform 0.1s linear;\n  @media (min-width: 768px) {\n    width: 15%;\n  }\n  :hover {\n    transform: scale(1.03);\n  }\n"]))),K=Object(I.a)(N.b)(c||(c=Object(H.a)(["\n  text-decoration: none;\n  color: inherit;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),Q=I.a.div(r||(r=Object(H.a)(["\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  padding-top: calc(100% * 16 / 11);\n  width: 100%;\n"])),(function(e){var n=e.poster_path;return"".concat(J).concat(M).concat(n)})),R=I.a.div(i||(i=Object(H.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  /* transform: translate(50%, -50%); */\n  background-color: hsla(53, 100%, 42%, 0.75);\n  padding: 0.2rem 0.5rem;\n  border-radius: 5px;\n  z-index: 1;\n"]))),W=I.a.span(o||(o=Object(H.a)(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: #000;\n"]))),X=I.a.h3(s||(s=Object(H.a)(["\n  padding: 0.35rem;\n  // color: white;\n  font-size: 1rem;\n  line-height: 1.1rem;\n  height: 2.2rem;\n  -webkit-line-clamp: 2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),Z=function(e){var n=e.movie;return Object(U.jsx)(q,{children:Object(U.jsxs)(K,{to:{pathname:"/movie/".concat(n.id),state:{movie:n}},children:[Object(U.jsx)(Q,{poster_path:n.poster_path,children:Object(U.jsx)(R,{children:Object(U.jsx)(W,{children:Number(n.vote_average).toFixed(1)})})}),Object(U.jsx)(X,{children:n.title})]})})},$=I.a.section(l||(l=Object(H.a)(["\n  padding: .5rem 0.25rem;\n  background-color: hsla(0, 0%, 6%, 1);\n"]))),ee=I.a.div(d||(d=Object(H.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: .5rem 0;\n  @media (min-width: 768px) {\n    justify-content: space-between;\n  }\n"]))),ne=I.a.h3(j||(j=Object(H.a)(["\n  font-size: 1.4rem;\n  color: hsla(47, 92%, 51%, 1);\n"]))),te=function(e){var n=e.sectionTitle,t=e.movies;return Object(U.jsxs)($,{children:[Object(U.jsx)(ne,{children:n}),Object(U.jsx)(ee,{children:t.map((function(e){return Object(U.jsx)(Z,{movie:e},e.id)}))})]})},ae=t(23),ce=t.n(ae),re=t(29),ie=t(1),oe=t(45),se=t(37),le=(t(64),I.a.h1(b||(b=Object(H.a)(["\n  color: hsla(47, 92%, 51%, 1);\n  margin-bottom:1rem;\n  "])))),de=I.a.main(h||(h=Object(H.a)(["\n  position: relative;\n  padding: 1rem 0;\n  display: flex;\n  flex-direction:column;\n  // justify-content: center;\n  align-items:center;\n  z-index: 2;\n"]))),je=I.a.div(u||(u=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n"]))),be=I.a.button(m||(m=Object(H.a)(["\n  position: relative;\n  display: block;\n  height: 3rem;\n  width: 100%;\n  background-color: hsla(47, 92%, 51%, 1);\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 400;\n  font-family: inherit;\n  border: none;\n  border-radius: 5px;\n  cursor:pointer;\n  transition: transform 0.2s linear;\n\n  :active {\n    transform: scale(0.95);\n  }\n"]))),he=I.a.div(f||(f=Object(H.a)(["\n  width: 100%;\n  text-align: center;\n  color: white;\n  :last-of-type{\n    margin-bottom:1rem;\n  }\n"]))),ue=I.a.span(p||(p=Object(H.a)(["\n  color: hsla(47, 92%, 51%, 1);\n"]))),me=function(e){var n=Object(G.useState)([]),t=Object(D.a)(n,2),a=t[0],c=t[1],r=Object(G.useState)(null),i=Object(D.a)(r,2),o=i[0],s=i[1],l=Object(G.useState)([5,9]),d=Object(D.a)(l,2),j=d[0],b=d[1],h=Object(G.useState)([1990,(new Date).getFullYear()]),u=Object(D.a)(h,2),m=u[0],f=u[1];Object(G.useEffect)((function(){var n=e.genres.reduce((function(e,n){return e.concat({value:n.id,label:n.name})}),[]);c(Object(B.a)(n))}),[e.genres]);var p={option:function(e,n){return Object(ie.a)(Object(ie.a)({},e),{},{color:"white",backgroundColor:"hsla(0, 0%, 15%, 1)"})},control:function(e,n){return Object(ie.a)(Object(ie.a)({},e),{},{backgroundColor:"hsla(0, 0%, 15%, 1)"})},singleValue:function(e,n){return Object(ie.a)(Object(ie.a)({},e),{},{color:"hsla(47, 92%, 51%, 1)"})}},x={min:1,max:10,step:.1,value:j,defaultValue:j,onChange:function(e){return b(Object(B.a)(e))}},O={min:1900,max:(new Date).getFullYear(),step:1,value:m,defaultValue:m,onChange:function(e){return f(Object(B.a)(e))}},v=function(){var n=Object(re.a)(ce.a.mark((function n(){var t,a,c;return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={voteGte:j[0],voteLte:j[1],genre:(null===o||void 0===o?void 0:o.value)?o.value:"",dateGte:m[0],dateLte:m[1]},n.next=3,A(t);case 3:a=n.sent,c={id:(null===o||void 0===o?void 0:o.value)?o.value:0,name:(null===o||void 0===o?void 0:o.label)?o.label:"De todos los g\xe9neros",movies:Object(B.a)(a)},e.setSearchSection(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(U.jsxs)(de,{children:[Object(U.jsx)(le,{children:"Muvinext"}),Object(U.jsxs)(je,{children:[Object(U.jsx)(oe.a,{onChange:function(e){return s(e)},options:a,placeholder:"G\xe9neros",value:o,styles:p}),Object(U.jsx)(se.a,Object(ie.a)({style:{margin:"1rem 0"},trackStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"}],handleStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"},{backgroundColor:" hsla(47, 92%, 51%, 1)"}]},x)),Object(U.jsxs)(he,{children:["Puntajes entre ",Object(U.jsx)(ue,{children:j[0].toFixed(1)})," y"," ",Object(U.jsx)(ue,{children:j[1].toFixed(1)})]}),Object(U.jsx)(se.a,Object(ie.a)({style:{margin:"1rem 0"},trackStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"}],handleStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"},{backgroundColor:" hsla(47, 92%, 51%, 1)"}]},O)),Object(U.jsxs)(he,{children:["Peliculas del a\xf1o ",Object(U.jsx)(ue,{children:m[0]})," y"," ",Object(U.jsx)(ue,{children:m[1]})]}),Object(U.jsx)(be,{onClick:v,children:"Buscar"})]})]})},fe=function(e){var n=e.genres,t=e.sections,a=e.searchSection,c=e.setSearchSection;return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(me,{genres:n,setSearchSection:c}),a&&Object(U.jsx)(te,{sectionTitle:a.name,movies:a.movies},a.id),t.map((function(e){return Object(U.jsx)(te,{sectionTitle:e.name,movies:e.movies},e.id)}))]})},pe=t(46),xe=I.a.div(x||(x=Object(H.a)(["\n  background-color: hsla(0, 0%, 6%, 1);\n  min-height: 100vh;\n"]))),Oe=I.a.div(O||(O=Object(H.a)(["\n  display: flex;\n  height: 3rem;\n  background-color: hsla(0, 0%, 15%, 1);\n  border-bottom: 1px solid hsla(0, 0%, 25%, 1);\n\n  @media (min-width: 768px) {\n    height: 5rem;\n  }\n"]))),ve=Object(I.a)(pe.a)(v||(v=Object(H.a)(["\n  position: relative;\n  color: hsla(0, 0%, 40%, 1);\n  font-size: 2rem;\n  transition: transform 0.1s linear;\n\n  @media (min-width: 768px) {\n    font-size: 3rem;\n  }\n"]))),ge=I.a.div(g||(g=Object(H.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 3rem 0 0;\n  border-right: 1px solid hsla(0, 0%, 25%, 1);\n  cursor:pointer;\n  @media (min-width: 768px) {\n    flex: 10rem 0 0;\n  }\n\n  :hover "," {\n    transform: scale(1.05);\n  }\n"])),ve),we=I.a.div(w||(w=Object(H.a)(["\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 0;\n  color: #fff;\n  padding-left: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (min-width: 768px) {\n    padding-left: 2rem;\n    font-size: 2rem;\n    font-weight: 900;\n  }\n"]))),ke=I.a.div(k||(k=Object(H.a)(["\n  display: flex;\n  //   align-items: flex-start;\n  //   flex-direction: row;\n  flex-wrap: wrap;\n  padding: 1rem;\n  //   width: 400px;\n  font-size: 1.125rem;\n\n  @media (min-width: 768px) {\n    flex-wrap: nowrap;\n    padding: 2rem 5rem;\n  }\n"]))),ye=I.a.div(y||(y=Object(H.a)(["\n  width: 100%;\n  overflow: hidden;\n  border-radius: 5px;\n  @media (min-width: 768px) {\n    // //   flex-basis:500px;\n    // width: 500px;\n    width: 30%;\n  }\n"]))),Se=I.a.div(S||(S=Object(H.a)(["\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  padding-top: calc(100% * 16 / 11);\n  width: 100%;\n"])),(function(e){var n=e.poster_path;return"".concat(J).concat(P).concat(n)})),ze=I.a.div(z||(z=Object(H.a)(["\n  color: #fff;\n  width: 100%;\n  padding: 1rem 0;\n  font-weight:600;\n  @media (min-width: 768px) {\n    width: 70%;\n    padding: 1rem;\n  }\n"]))),Ce=I.a.div(C||(C=Object(H.a)(["\n  display: flex;\n  margin-bottom: .5rem;\n"]))),_e=I.a.div(_||(_=Object(H.a)(["\n  margin: 0 .5rem;\n  color: ",";\n  font-weight:600;\n"])),(function(e){return e.color?e.color:"hsla(0, 0%, 40%, 1)"})),Ge=function(){var e=Object(T.f)(),n=e.location.state.movie;return Object(U.jsxs)(xe,{children:[Object(U.jsxs)(Oe,{children:[Object(U.jsx)(ge,{onClick:function(){return e.goBack()},children:Object(U.jsx)(ve,{})}),Object(U.jsx)(we,{children:n.title})]}),Object(U.jsxs)(ke,{children:[Object(U.jsx)(ye,{children:Object(U.jsx)(Se,{poster_path:n.poster_path})}),Object(U.jsxs)(ze,{children:[Object(U.jsxs)(Ce,{children:[Object(U.jsx)(_e,{children:n.release_date.split("-")[0]}),Object(U.jsx)(_e,{color:"hsla(53, 100%, 42%, 1)",children:Number(n.vote_average).toFixed(1)})]}),Object(U.jsx)("div",{children:n.overview})]})]})]})};var Fe=function(){var e=Object(G.useState)([]),n=Object(D.a)(e,2),t=n[0],a=n[1],c=Object(G.useState)([]),r=Object(D.a)(c,2),i=r[0],o=r[1],s=Object(G.useState)(null),l=Object(D.a)(s,2),d=l[0],j=l[1];return Object(G.useEffect)((function(){var e;console.log("running use effect"),(e={language:V},e.language,fetch("".concat(Y,"movies/init")).then((function(e){if(200===e.status)return e.json();throw Error("Hubo un error en la conexi\xf3n con el servidor")})).catch((function(e){return console.log(e)}))).then((function(e){a(Object(B.a)(e.genres)),o(Object(B.a)(e.sections))}))}),[V]),Object(U.jsx)(N.a,{children:Object(U.jsxs)(T.c,{children:[Object(U.jsx)(T.a,{path:"/movie/:id",children:Object(U.jsx)(Ge,{})}),Object(U.jsx)(T.a,{path:"/",children:Object(U.jsx)(fe,{genres:t,sections:i,searchSection:d,setSearchSection:j})})]})})};E.a.render(Object(U.jsx)(F.a.StrictMode,{children:Object(U.jsx)(Fe,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.96f2ffcb.chunk.js.map