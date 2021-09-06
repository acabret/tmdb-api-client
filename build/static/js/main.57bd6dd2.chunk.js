(this["webpackJsonpmuvinext-react"]=this["webpackJsonpmuvinext-react"]||[]).push([[0],{38:function(e,n,t){},51:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,l,s,d,j,u,b,h,m,f,g,p=t(0),O=t.n(p),x=t(15),v=t.n(x),w=(t(51),t(12)),k=t(5),y=t(25),S=t(13),C="/api/",z=function(e){var n=e.language,t=e.genre,a=e.voteGte,c=e.voteLte,r=e.dateGte,o=e.dateLte,i="?language=".concat(n),l=t?"&genre=".concat(t):"",s=a?"&voteGte=".concat(a):"",d=c?"&voteLte=".concat(c):"",j=r?"&dateGte=".concat(r,"-01-01"):"",u=o?"&dateLte=".concat(o,"-12-31"):"";return fetch("".concat(C,"movies/discover").concat(i).concat(l).concat(s).concat(d).concat(j).concat(u)).then((function(e){return e.json()}))},_=(t(38),t(6)),L=t(7),G="https://image.tmdb.org/t/p",F="/w154",E="/w780",I=t(3),P=L.a.article(a||(a=Object(_.a)(["\n  background-color: hsla(0, 0%, 15%, 1);\n  width: 40%;\n  margin: 0.5rem;\n  color: #fff;\n  border-radius: 5px;\n  overflow: hidden;\n  transition: transform 0.1s linear;\n  @media (min-width: 768px) {\n    width: 15%;\n  }\n  :hover {\n    transform: scale(1.03);\n  }\n"]))),B=Object(L.a)(y.b)(c||(c=Object(_.a)(["\n  text-decoration: none;\n  color: inherit;\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),D=L.a.div(r||(r=Object(_.a)(["\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  padding-top: calc(100% * 16 / 11);\n  width: 100%;\n"])),(function(e){var n=e.poster_path;return"".concat(G).concat(F).concat(n)})),N=L.a.div(o||(o=Object(_.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  /* transform: translate(50%, -50%); */\n  background-color: hsla(53, 100%, 42%, 0.75);\n  padding: 0.2rem 0.5rem;\n  border-radius: 5px;\n  z-index: 1;\n"]))),T=L.a.span(i||(i=Object(_.a)(["\n  font-size: 1rem;\n  font-weight: bold;\n  color: #000;\n"]))),V=L.a.h3(l||(l=Object(_.a)(["\n  padding: 0.35rem;\n  // color: white;\n  font-size: 1rem;\n  line-height: 1.1rem;\n  height: 2.2rem;\n  -webkit-line-clamp: 2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),J=function(e){var n=e.movie;return Object(I.jsx)(P,{children:Object(I.jsxs)(B,{to:{pathname:"/movie/".concat(n.id),state:{movie:n}},children:[Object(I.jsx)(D,{poster_path:n.poster_path,children:Object(I.jsx)(N,{children:Object(I.jsx)(T,{children:Number(n.vote_average).toFixed(1)})})}),Object(I.jsx)(V,{children:n.title})]})})},M=L.a.section(s||(s=Object(_.a)(["\n  padding: .5rem 0.25rem;\n  background-color: hsla(0, 0%, 6%, 1);\n"]))),Y=L.a.div(d||(d=Object(_.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: .5rem 0;\n  @media (min-width: 768px) {\n    justify-content: space-between;\n  }\n"]))),q=L.a.h3(j||(j=Object(_.a)(["\n  font-size: 1.4rem;\n  color: hsla(47, 92%, 51%, 1);\n"]))),A=function(e){var n=e.sectionTitle,t=e.movies;return Object(I.jsxs)(M,{children:[Object(I.jsx)(q,{children:n}),Object(I.jsx)(Y,{children:t.map((function(e){return Object(I.jsx)(J,{movie:e},e.id)}))})]})},H=t(23),K=t.n(H),Q=t(29),R=t(1),U=t(45),W=t(37),X=(t(64),Object(p.createContext)()),Z=Object(p.createContext)();function $(){return Object(p.useContext)(X)}function ee(e){var n=e.children,t=function(){var e=Object(p.useState)(null),n=Object(k.a)(e,2),t=n[0],a=n[1];return Object(p.useEffect)((function(){var e=window.localStorage.getItem("app-language");if(!e){var n=navigator.language;return window.localStorage.setItem("app-language",n),void a(n)}a(e)}),[]),{value:t,changeLanguage:function(e){window.localStorage.setItem("app-language",e),a(t)}}}();return Object(I.jsx)(X.Provider,{value:t.value,children:Object(I.jsx)(Z.Provider,{value:t.changeLanguage,children:n})})}var ne,te,ae,ce,re,oe,ie,le,se,de,je,ue=L.a.h1(u||(u=Object(_.a)(["\n  color: hsla(47, 92%, 51%, 1);\n  margin-bottom: 1rem;\n"]))),be=L.a.main(b||(b=Object(_.a)(["\n  position: relative;\n  padding: 1rem 0;\n  display: flex;\n  flex-direction: column;\n  // justify-content: center;\n  align-items: center;\n  z-index: 2;\n"]))),he=L.a.div(h||(h=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  @media (min-width: 768px) {\n    width: 300px;\n  }\n"]))),me=L.a.button(m||(m=Object(_.a)(["\n  position: relative;\n  display: block;\n  height: 3rem;\n  width: 100%;\n  background-color: hsla(47, 92%, 51%, 1);\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 400;\n  font-family: inherit;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: transform 0.2s linear;\n\n  :active {\n    transform: scale(0.95);\n  }\n"]))),fe=L.a.div(f||(f=Object(_.a)(["\n  width: 100%;\n  text-align: center;\n  color: white;\n  :last-of-type {\n    margin-bottom: 1rem;\n  }\n"]))),ge=L.a.span(g||(g=Object(_.a)(["\n  color: hsla(47, 92%, 51%, 1);\n"]))),pe=function(e){var n=Object(p.useState)([]),t=Object(k.a)(n,2),a=t[0],c=t[1],r=Object(p.useState)(null),o=Object(k.a)(r,2),i=o[0],l=o[1],s=Object(p.useState)([5,9]),d=Object(k.a)(s,2),j=d[0],u=d[1],b=Object(p.useState)([1990,(new Date).getFullYear()]),h=Object(k.a)(b,2),m=h[0],f=h[1],g=$();Object(p.useEffect)((function(){var n=e.genres.reduce((function(e,n){return e.concat({value:n.id,label:n.name})}),[]);c(Object(w.a)(n))}),[e.genres]);var O={option:function(e,n){return Object(R.a)(Object(R.a)({},e),{},{color:"white",backgroundColor:"hsla(0, 0%, 15%, 1)"})},control:function(e,n){return Object(R.a)(Object(R.a)({},e),{},{backgroundColor:"hsla(0, 0%, 15%, 1)"})},singleValue:function(e,n){return Object(R.a)(Object(R.a)({},e),{},{color:"hsla(47, 92%, 51%, 1)"})}},x={min:1,max:10,step:.1,value:j,defaultValue:j,onChange:function(e){return u(Object(w.a)(e))}},v={min:1900,max:(new Date).getFullYear(),step:1,value:m,defaultValue:m,onChange:function(e){return f(Object(w.a)(e))}},y=function(){var n=Object(Q.a)(K.a.mark((function n(){var t,a,c;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(g),t={voteGte:j[0],voteLte:j[1],genre:(null===i||void 0===i?void 0:i.value)?i.value:"",dateGte:m[0],dateLte:m[1],language:g},n.next=4,z(t);case 4:a=n.sent,c={id:(null===i||void 0===i?void 0:i.value)?i.value:0,name:(null===i||void 0===i?void 0:i.label)?i.label:"De todos los g\xe9neros",movies:Object(w.a)(a)},e.setSearchSection(c);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(I.jsxs)(be,{children:[Object(I.jsx)(ue,{children:"Muvinext"}),Object(I.jsxs)(he,{children:[Object(I.jsx)(U.a,{onChange:function(e){return l(e)},options:a,placeholder:"G\xe9neros",value:i,styles:O}),Object(I.jsx)(W.a,Object(R.a)({style:{margin:"1rem 0"},trackStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"}],handleStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"},{backgroundColor:" hsla(47, 92%, 51%, 1)"}]},x)),Object(I.jsxs)(fe,{children:["Puntajes entre"," ",Object(I.jsx)(ge,{children:j[0].toFixed(1)})," y"," ",Object(I.jsx)(ge,{children:j[1].toFixed(1)})]}),Object(I.jsx)(W.a,Object(R.a)({style:{margin:"1rem 0"},trackStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"}],handleStyle:[{backgroundColor:" hsla(47, 92%, 51%, 1)"},{backgroundColor:" hsla(47, 92%, 51%, 1)"}]},v)),Object(I.jsxs)(fe,{children:["Peliculas del a\xf1o ",Object(I.jsx)(ge,{children:m[0]})," y"," ",Object(I.jsx)(ge,{children:m[1]})]}),Object(I.jsx)(me,{onClick:y,children:"Buscar"})]})]})},Oe=function(e){var n=e.genres,t=e.sections,a=e.searchSection,c=e.setSearchSection;return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(pe,{genres:n,setSearchSection:c}),a&&Object(I.jsx)(A,{sectionTitle:a.name,movies:a.movies},a.id),t.map((function(e){return Object(I.jsx)(A,{sectionTitle:e.name,movies:e.movies},e.id)}))]})},xe=t(46),ve=L.a.div(ne||(ne=Object(_.a)(["\n  background-color: hsla(0, 0%, 6%, 1);\n  min-height: 100vh;\n"]))),we=L.a.div(te||(te=Object(_.a)(["\n  display: flex;\n  height: 3rem;\n  background-color: hsla(0, 0%, 15%, 1);\n  border-bottom: 1px solid hsla(0, 0%, 25%, 1);\n\n  @media (min-width: 768px) {\n    height: 5rem;\n  }\n"]))),ke=Object(L.a)(xe.a)(ae||(ae=Object(_.a)(["\n  position: relative;\n  color: hsla(0, 0%, 40%, 1);\n  font-size: 2rem;\n  transition: transform 0.1s linear;\n\n  @media (min-width: 768px) {\n    font-size: 3rem;\n  }\n"]))),ye=L.a.div(ce||(ce=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 3rem 0 0;\n  border-right: 1px solid hsla(0, 0%, 25%, 1);\n  cursor:pointer;\n  @media (min-width: 768px) {\n    flex: 10rem 0 0;\n  }\n\n  :hover "," {\n    transform: scale(1.05);\n  }\n"])),ke),Se=L.a.div(re||(re=Object(_.a)(["\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 0;\n  color: #fff;\n  padding-left: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  @media (min-width: 768px) {\n    padding-left: 2rem;\n    font-size: 2rem;\n    font-weight: 900;\n  }\n"]))),Ce=L.a.div(oe||(oe=Object(_.a)(["\n  display: flex;\n  //   align-items: flex-start;\n  //   flex-direction: row;\n  flex-wrap: wrap;\n  padding: 1rem;\n  //   width: 400px;\n  font-size: 1.125rem;\n\n  @media (min-width: 768px) {\n    flex-wrap: nowrap;\n    padding: 2rem 5rem;\n  }\n"]))),ze=L.a.div(ie||(ie=Object(_.a)(["\n  width: 100%;\n  overflow: hidden;\n  border-radius: 5px;\n  @media (min-width: 768px) {\n    // //   flex-basis:500px;\n    // width: 500px;\n    width: 30%;\n  }\n"]))),_e=L.a.div(le||(le=Object(_.a)(["\n  position: relative;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  padding-top: calc(100% * 16 / 11);\n  width: 100%;\n"])),(function(e){var n=e.poster_path;return"".concat(G).concat(E).concat(n)})),Le=L.a.div(se||(se=Object(_.a)(["\n  color: #fff;\n  width: 100%;\n  padding: 1rem 0;\n  font-weight:600;\n  @media (min-width: 768px) {\n    width: 70%;\n    padding: 1rem;\n  }\n"]))),Ge=L.a.div(de||(de=Object(_.a)(["\n  display: flex;\n  margin-bottom: .5rem;\n"]))),Fe=L.a.div(je||(je=Object(_.a)(["\n  margin: 0 .5rem;\n  color: ",";\n  font-weight:600;\n"])),(function(e){return e.color?e.color:"hsla(0, 0%, 40%, 1)"})),Ee=function(){var e=Object(S.f)(),n=e.location.state.movie;return Object(I.jsxs)(ve,{children:[Object(I.jsxs)(we,{children:[Object(I.jsx)(ye,{onClick:function(){return e.goBack()},children:Object(I.jsx)(ke,{})}),Object(I.jsx)(Se,{children:n.title})]}),Object(I.jsxs)(Ce,{children:[Object(I.jsx)(ze,{children:Object(I.jsx)(_e,{poster_path:n.poster_path})}),Object(I.jsxs)(Le,{children:[Object(I.jsxs)(Ge,{children:[Object(I.jsx)(Fe,{children:n.release_date.split("-")[0]}),Object(I.jsx)(Fe,{color:"hsla(53, 100%, 42%, 1)",children:Number(n.vote_average).toFixed(1)})]}),Object(I.jsx)("div",{children:n.overview})]})]})]})};var Ie=function(){var e=Object(p.useState)([]),n=Object(k.a)(e,2),t=n[0],a=n[1],c=Object(p.useState)([]),r=Object(k.a)(c,2),o=r[0],i=r[1],l=Object(p.useState)(null),s=Object(k.a)(l,2),d=s[0],j=s[1],u=$();return Object(p.useEffect)((function(){console.log("que es lang",u),u&&function(e){var n=e.language,t=n?"?language=".concat(n):"";return fetch("".concat(C,"movies/init").concat(t)).then((function(e){if(200===e.status)return e.json();throw Error("Hubo un error en la conexi\xf3n con el servidor")})).catch((function(e){return console.log(e)}))}({language:u}).then((function(e){a(Object(w.a)(e.genres)),i(Object(w.a)(e.sections))}))}),[u]),Object(I.jsx)(y.a,{children:Object(I.jsxs)(S.c,{children:[Object(I.jsx)(S.a,{path:"/movie/:id",children:Object(I.jsx)(Ee,{})}),Object(I.jsx)(S.a,{path:"/",children:Object(I.jsx)(Oe,{genres:t,sections:o,searchSection:d,setSearchSection:j})})]})})};v.a.render(Object(I.jsx)(O.a.StrictMode,{children:Object(I.jsx)(ee,{children:Object(I.jsx)(Ie,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.57bd6dd2.chunk.js.map