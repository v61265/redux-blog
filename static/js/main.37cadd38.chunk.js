(this["webpackJsonpredux-blog"]=this["webpackJsonpredux-blog"]||[]).push([[0],{44:function(n,t,e){},45:function(n,t,e){"use strict";e.r(t);var r=e(0),c=e(1),i=e(20),o=e.n(i),u=e(3),a=e(6),s=e(7),l=e(2),b=e(4),j=function(n){return n.posts.posts},f=function(n){return n.posts.post},d=function(n){return n.posts.isLoadingPost},h=function(n){return n.posts.totalPostsNum},x=function(n){return n.posts.errMessage},p=function(n){return n.users.isLoadingUser},O=function(n){return n.users.user},g=function(n){return n.users.errMessage},v=e(15),m=e.n(v),w=e(18),y=e(19),k="token",z=function(n){localStorage.setItem(k,n)},S=function(){return localStorage.getItem(k)},E=function(n){var t=new Date(n),e=t.getFullYear(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],c=t.getDate();return"".concat(r," ").concat(c,", ").concat(e)},P="https://student-json-api.lidemy.me",C=Object(y.b)({name:"users",initialState:{user:null,isLoadingUser:!1,errMessage:""},reducers:{setUser:function(n,t){n.user=t.payload},setIsLoadingUser:function(n,t){n.isLoadingUser=t.payload},setErrMessage:function(n,t){n.errMessage=t.payload}}}),M=C.actions,_=M.setIsLoadingUser,A=M.setUser,N=M.setErrMessage,T=function(){return function(n){if(n(_(!0)),S())return function(){var n=S();return fetch("".concat(P,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))}().then((function(t){return 1!==t.ok?(z(null),n(_(!1)),n(N(t.message)),!1):(n(A(t.data)),n(_(!1)),!0)}))}},F=function(n,t){return function(e){return e(_(!0)),e(N("")),function(n,t){return fetch("".concat(P,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(n,t).then((function(n){return n.ok?(z(n.token),e(_(!1)),!0):(e(_(!1)),e(N(n.message)),!1)}))}},L=function(n,t,e){return function(r){return r(_(!0)),r(N("")),function(n,t,e){return fetch("".concat(P,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:e,username:n,password:t})}).then((function(n){return n.json()}))}(n,t,e).then(function(){var n=Object(w.a)(m.a.mark((function n(t){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(1===t.ok){n.next=4;break}return r(N(t.message)),r(_(!1)),n.abrupt("return",!1);case 4:return z(t.token),r(_(!1)),n.abrupt("return",!0);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}},I=C.reducer,D="@media screen and (min-width: 768px)";function R(){var n=Object(u.a)(["\n  display: flex;\n  font-size: ","px;\n  align-items: center;\n  position: relative;\n  display: block;\n  margin-left: 20px;\n  color: ",';\n  text-decoration: none;\n\n  &:before {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    width: 0;\n    border-bottom: 2px solid ',";\n    -webkit-transition: width 0.5s ease-in-out;\n    -moz-transition: width 0.5s ease-in-out;\n    -ms-transition: width 0.5s ease-in-out;\n    -o-transition: width 0.5s ease-in-out;\n    transition: width 0.5s ease-in-out;\n  }\n\n  &:hover:before {\n    width: 80%;\n  }\n"]);return R=function(){return n},n}function J(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return J=function(){return n},n}function U(){var n=Object(u.a)(["\n  font-size: ","px;\n  font-weight: bold;\n  margin-right: 10px;\n  display: flex;\n  height: 64px;\n  align-items: center;\n  color: ",";\n  text-decoration: none;\n"]);return U=function(){return n},n}function B(){var n=Object(u.a)(["\n  display: flex;\n"]);return B=function(){return n},n}function W(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: ",";\n  color: ",";\n  padding: 0 32px 5px 32px;\n  z-index: 99;\n\n  "," {\n    flex-direction: row;\n  }\n"]);return W=function(){return n},n}var Y=l.b.div(W(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),D),$=l.b.div(B()),H=Object(l.b)(a.b)(U(),(function(n){return n.theme.font.xxl}),(function(n){return n.theme.colors.orange})),K=l.b.div(J()),X=Object(l.b)(a.b)(R(),(function(n){return n.theme.font.sm}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.orange}));function q(){var n=Object(b.b)(),t=Object(b.c)(O),e=Object(s.f)();return Object(r.jsxs)(Y,{children:[Object(r.jsx)($,{children:Object(r.jsx)(H,{to:"/",children:"Redux Blog"})}),Object(r.jsxs)(K,{children:[Object(r.jsx)(X,{to:"/about",children:"About Me"}),Object(r.jsx)(X,{to:"/posts/1",children:"All Posts"}),Object(r.jsx)(K,{children:t&&Object(r.jsx)(X,{to:"/addPost",children:"Add Post"})}),!t&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(X,{to:"/register",children:"Register"}),Object(r.jsx)(X,{to:"/login",children:"Login"})]}),t&&Object(r.jsx)(X,{onClick:function(){n((function(n){n(_(!0)),z(""),n(A(null)),n(_(!1))})),e.push("/")},children:"Logout"})]})]})}function G(){var n=Object(u.a)(["\n  margin: 0 auto;\n"]);return G=function(){return n},n}function Q(){var n=Object(u.a)(["\n  height: 48px;\n  display: flex;\n  align-items: center;\n  left: 0;\n  right: 0;\n  background: ",";\n  color: ",";\n  text-align: center;\n"]);return Q=function(){return n},n}var V=l.b.div(Q(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white})),Z=l.b.div(G());function nn(){return Object(r.jsx)(V,{children:Object(r.jsx)(Z,{children:"2021 made by v61265"})})}function tn(){return(tn=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function en(n,t){if(null==n)return{};var e,r,c=function(n,t){if(null==n)return{};var e,r,c={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(c[e]=n[e]);return c}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(c[e]=n[e])}return c}var rn=c.createElement("rect",{x:17.5,y:30,width:15,height:40,fill:"#0a0a0a"},c.createElement("animate",{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"18;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"}),c.createElement("animate",{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"64;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"})),cn=c.createElement("rect",{x:42.5,y:30,width:15,height:40,fill:"#28292f"},c.createElement("animate",{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"}),c.createElement("animate",{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"})),on=c.createElement("rect",{x:67.5,y:30,width:15,height:40,fill:"#ffffff"},c.createElement("animate",{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"}),c.createElement("animate",{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"}));function un(n,t){var e=n.title,r=n.titleId,i=en(n,["title","titleId"]);return c.createElement("svg",tn({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"rgb(241, 242, 243)",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},i),e?c.createElement("title",{id:r},e):null,rn,cn,on)}var an=c.forwardRef(un);e.p;function sn(){var n=Object(u.a)(["\n  display: flex;\n  justify-contents: center;\n  text-align: center;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 3;\n"]);return sn=function(){return n},n}var ln=l.b.div(sn());function bn(){return Object(r.jsx)(ln,{children:Object(r.jsx)(an,{})})}function jn(){var n=Object(u.a)(["\n  color: ",";\n"]);return jn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  height: 300px;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background: ",";\n  color: ",";\n  padding: 0 32px;\n  font-size: ","px;\n"]);return fn=function(){return n},n}var dn=l.b.div(fn(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.font.xxxl})),hn=l.b.span(jn(),(function(n){return n.theme.colors.light_grey}));function xn(){return Object(r.jsx)(dn,{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:["Lidemy, ",Object(r.jsx)(hn,{children:"let's"})]}),Object(r.jsx)("div",{children:Object(r.jsx)(hn,{children:"keep learning and"})}),Object(r.jsx)("div",{children:Object(r.jsx)(hn,{children:"happy coding."})})]})})}function pn(){var n=Object(u.a)(["\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n  margin: 5px;\n  text-decoration: none;\n\n  &:hover {\n    color: #ffa78d;\n    -webkit-transition: all 0.3s ease-in-out;\n    -moz-transition: all 0.3s ease-in-out;\n    -o-transition: all 0.3s ease-in-out;\n    -ms-transition: all 0.3s ease-in-out;\n  }\n"]);return pn=function(){return n},n}var On=Object(l.b)(a.b)(pn(),(function(n){return n.theme.colors.orange}),(function(n){return"small"!==n.size?n.theme.font.md:n.theme.font.sm}),(function(n){if("small"!==n.size)return"bold"}));function gn(n){var t=n.to,e=n.size;return Object(r.jsx)(On,{to:t,size:e,children:"Read More"})}var vn=e.p+"static/media/home.1fa40934.jpg";function mn(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: black;\n  }\n"]);return mn=function(){return n},n}function wn(){var n=Object(u.a)(["\n  margin: 32px 0;\n\n  "," {\n    margin: 0px;\n  }\n"]);return wn=function(){return n},n}function yn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return yn=function(){return n},n}function kn(){var n=Object(u.a)(["\n  font-size: ","px;\n  font-weight: bold;\n  padding-right: 20px;\n\n  "," {\n    margin-bottom: 36px;\n  }\n"]);return kn=function(){return n},n}function zn(){var n=Object(u.a)(["\n  font-weight: bold;\n"]);return zn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Sn=function(){return n},n}function En(){var n=Object(u.a)(["\n  width: 80vw;\n  height: 80vw;\n  align-self: center;\n\n  "," {\n    height: 40vw;\n    width: 40vw;\n  }\n"]);return En=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  border-top: 2px solid ",";\n  border-bottom: 2px solid ",";\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n\n  padding: 10px;\n  justify-content: space-between;\n  margin-bottom: 32px;\n  min-height: 400px;\n\n  "," {\n    margin-bottom: 0px;\n    margin-right: 32px;\n    margin-bottom: 0px;\n  }\n"]);return Pn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  background: ",";\n  color: ",";\n  padding: 32px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  box-sizing: border-box;\n\n  "," {\n    height: 50vw;\n    width: 100%;\n    flex-direction: row;\n  }\n"]);return Cn=function(){return n},n}var Mn=l.b.div(Cn(),(function(n){return n.theme.colors.light_grey}),(function(n){return n.theme.colors.black}),D),_n=l.b.div(Pn(),(function(n){return n.theme.colors.almost_grey}),(function(n){return n.theme.colors.almost_grey}),D),An=l.b.div(En(),D),Nn=l.b.img(Sn()),Tn=l.b.div(zn()),Fn=l.b.div(kn(),(function(n){return n.theme.font.xl}),D),Ln=l.b.div(yn()),In=l.b.div(wn(),D),Dn=Object(l.b)(a.b)(mn(),(function(n){return n.theme.colors.orange}));function Rn(n){var t=n.post,e=E(t.createdAt);return Object(r.jsxs)(Mn,{children:[Object(r.jsxs)(_n,{children:[Object(r.jsx)(Tn,{children:"Article"}),Object(r.jsxs)(In,{children:[Object(r.jsx)(Fn,{children:t.title}),Object(r.jsx)(gn,{to:"/post/".concat(t.id)})]}),Object(r.jsxs)(Ln,{children:[Object(r.jsx)("div",{children:e}),Object(r.jsxs)(Dn,{to:"/author/".concat(t.user.id),children:["by ",t.user.nickname]})]})]}),Object(r.jsx)(An,{children:Object(r.jsx)(Nn,{src:vn})})]})}function Jn(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: black;\n  }\n"]);return Jn=function(){return n},n}function Un(){var n=Object(u.a)(["\n  margin: 0;\n"]);return Un=function(){return n},n}function Bn(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  & * {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 50%;\n  }\n"]);return Bn=function(){return n},n}function Wn(){var n=Object(u.a)(["\n  font-size: ","px;\n  font-weight: bold;\n  margin-bottom: 36px;\n  text-decoration: none;\n  color: black;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  white-space: normal;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);return Wn=function(){return n},n}function Yn(){var n=Object(u.a)(["\n  font-weight: bold;\n"]);return Yn=function(){return n},n}function $n(){var n=Object(u.a)(["\n  min-height: 80vw;\n  width: 80vw;\n  display: flex;\n  background: ",";\n  color: ",";\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  justify-content: space-between;\n\n  "," {\n    min-height: 25vw;\n    width: 25vw;\n  }\n"]);return $n=function(){return n},n}var Hn=l.b.div($n(),(function(n){return n.theme.colors.light_grey}),(function(n){return n.theme.colors.black}),D),Kn=l.b.div(Yn()),Xn=Object(l.b)(a.b)(Wn(),(function(n){return n.theme.font.lg})),qn=l.b.div(Bn()),Gn=l.b.div(Un()),Qn=Object(l.b)(a.b)(Jn(),(function(n){return n.theme.colors.orange}));function Vn(n){var t=n.post,e=E(t.createdAt);return Object(r.jsxs)(Hn,{children:[Object(r.jsx)(Kn,{children:"Article"}),Object(r.jsx)(Gn,{children:Object(r.jsx)(Xn,{to:"/post/".concat(t.id),children:t.title})}),Object(r.jsxs)(qn,{children:[Object(r.jsx)("div",{children:e}),Object(r.jsxs)(Qn,{to:"/author/".concat(t.user.id),children:["by ",t.user.nickname]})]})]})}function Zn(){var n=Object(u.a)(["\n  margin: 0 auto;\n  margin-top: ",";\n  padding: 32px;\n  min-height: ",";\n  background: white;\n\n  "," {\n    max-width: 600px;\n    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.4);\n    margin-top: ",";\n    margin-bottom: 32px;\n    min-height: 0px;\n  }\n"]);return Zn=function(){return n},n}var nt=l.b.div(Zn(),(function(n){if("middle"!==n.location)return"95px"}),(function(n){if("middle"!==n.location)return"calc(100vh - 48px - 95px);"}),D,(function(n){if("middle"!==n.location)return"110px"}));function tt(n){var t=n.children,e=n.location;return Object(r.jsx)(nt,{location:e,children:t})}var et=e.p+"static/media/input.5392032d.jpg";function rt(){var n=Object(u.a)(["\n  min-width: 100%;\n  min-height: 300px;\n  background: url(",");\n  background-size: cover;\n  margin-bottom: 18px;\n\n  "," {\n    margin-bottom: 0;\n    min-width: 30%;\n    margin-right: 32px;\n  }\n"]);return rt=function(){return n},n}function ct(){var n=Object(u.a)(["\n  margin: 0 auto;\n  margin-top: 95px;\n  padding: 32px;\n  min-height: calc(100vh - 48px - 95px);\n  background: white;\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    max-width: 600px;\n    box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.4);\n    margin-top: 110px;\n    margin-bottom: 32px;\n    min-height: 0px;\n    flex-direction: row;\n  }\n"]);return ct=function(){return n},n}var it=l.b.div(ct(),D),ot=l.b.div(rt(),et,D);function ut(n){var t=n.children;return Object(r.jsxs)(it,{children:[Object(r.jsx)(ot,{}),t]})}function at(){var n=Object(u.a)(["\n  padding: ",";\n  background: white;\n  color: ",";\n  border: 1px solid ",";\n  margin-top: 10px;\n  width: ",";\n  box-sizing: border-box;\n  min-width: 30px;\n\n  &:hover {\n    -webkit-transition: all 0.3s ease-in-out;\n    -moz-transition: all 0.3s ease-in-out;\n    -o-transition: all 0.3s ease-in-out;\n    -ms-transition: all 0.3s ease-in-out;\n    color: white;\n    background: ",";\n    cursor: pointer;\n  }\n\n  & + & {\n    margin-left: 5px;\n  }\n"]);return at=function(){return n},n}var st=l.b.button(at(),(function(n){if("medium"===n.size)return"5px 10px"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){if("medium"===n.size)return"100%"}),(function(n){return n.color}));function lt(n){var t=n.size,e=n.color,c=n.children,i=n.onClick;return Object(r.jsx)(st,{size:t,color:e,onClick:i,children:c})}function bt(){var n=Object(u.a)(["\n  margin: 0 auto;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n"]);return bt=function(){return n},n}function jt(){var n=Object(u.a)(["\n  width: 24px;\n  height: 24px;\n  text-align: center;\n  color: black;\n  border: 1px solid black;\n  background: white;\n  text-decoration: none;\n\n  &:hover {\n    background: black;\n    color: white;\n  }\n\n  & + & {\n    margin-left: 5px;\n  }\n\n  ","\n"]);return jt=function(){return n},n}var ft=Object(l.b)(a.b)(jt(),(function(n){return n.$active&&"\n  background: black;\n  color: white;"})),dt=l.b.div(bt());function ht(n){var t=n.num,e=Object(s.g)().pathname;return console.log(t),Object(r.jsx)(dt,{children:new Array(t).fill("").map((function(n,t){return Object(r.jsx)(ft,{to:"/posts/".concat(t+1),$active:e==="/posts/".concat(t+1)||"/"===e&&0===t,children:t+1},t)}))})}function xt(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return xt=function(){return n},n}function pt(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 18px;\n  min-weidth: 90px;\n"]);return pt=function(){return n},n}function Ot(){var n=Object(u.a)(["\n  margin-top: 5px;\n  align-self: flex-end;\n"]);return Ot=function(){return n},n}function gt(){var n=Object(u.a)(["\n  padding: 18px 0;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  display: flex;\n  flex-direction: column;\n  -webkit-filter: invert(1);\n\n  &:hover {\n    -webkit-filter: invert(0);\n  }\n"]);return gt=function(){return n},n}function vt(){var n=Object(u.a)(["\n  margin-top: 10px;\n  font-size: 14px;\n  line-height: 2rem;\n  white-space: pre-wrap;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return vt=function(){return n},n}function mt(){var n=Object(u.a)(["\n  text-decoration: none;\n  font-size: 32px;\n  color: #373f27;\n  font-weight: bold;\n"]);return mt=function(){return n},n}function wt(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: black;\n  }\n"]);return wt=function(){return n},n}function yt(){var n=Object(u.a)(["\n  font-size: 14px;\n  color: #373f27;\n  background: ",";\n  padding: 5px;\n  margin: 10px 0;\n"]);return yt=function(){return n},n}var kt=l.b.div(yt(),(function(n){return n.theme.colors.light_grey})),zt=Object(l.b)(a.b)(wt(),(function(n){return n.theme.colors.orange})),St=l.b.div(mt()),Et=l.b.div(vt()),Pt=l.b.div(gt()),Ct=l.b.div(Ot()),Mt=l.b.div(pt()),_t=l.b.div(xt());function At(n){var t=n.post,e=n.deletePostFunction,c=Object(b.c)(O),i=E(t.createdAt),o=Object(s.f)();return Object(r.jsx)(tt,{location:"middle",children:t&&t.user&&c&&Object(r.jsxs)(Pt,{children:[Object(r.jsxs)(_t,{children:[Object(r.jsx)(St,{children:t.title}),c.id===t.user.id&&Object(r.jsxs)(Mt,{children:[Object(r.jsx)(lt,{color:"black",onClick:function(){return o.push("/edit/".concat(t.id))},children:"\u7de8\u8f2f"}),Object(r.jsx)(lt,{color:function(n){return n.theme.colors.orange},onClick:function(n){return e(t.id)},children:"\u522a\u9664"})]})]}),Object(r.jsxs)(kt,{children:[i,"\u3000",Object(r.jsxs)(zt,{to:"/author/".concat(t.user.id),children:["by ",t.user.nickname]})]}),Object(r.jsx)(Et,{children:t.body}),Object(r.jsx)(Ct,{children:Object(r.jsx)(gn,{size:"small",to:"/post/".concat(t.id)})})]})})}var Nt=Object(y.b)({name:"posts",initialState:{isLoadingPost:!1,post:[],errMessage:null,posts:[],totalPostsNum:0},reducers:{setIsLoadingPost:function(n,t){n.isLoadingPost=t.payload},setPost:function(n,t){n.post=t.payload},setErrMessage:function(n,t){n.errMessage=t.payload},setPosts:function(n,t){n.posts=t.payload},setTotalPostsNum:function(n,t){n.totalPostsNum=t.payload},filterPost:function(n,t){n.posts=n.posts.filter((function(n){return n.id!==t.payload}))}}}),Tt=Nt.actions,Ft=Tt.setIsLoadingPost,Lt=Tt.setPost,It=Tt.setErrMessage,Dt=Tt.setPosts,Rt=Tt.setTotalPostsNum,Jt=Tt.filterPost,Ut=function(n){return function(t){return t(Ft(!0)),function(n){return fetch("".concat(P,"/posts?_expand=user&id=").concat(n)).then((function(n){return n.json()}))}(n).then((function(n){return t(Lt(n)),t(Ft(!1)),n})).catch((function(n){console.log(n)}))}},Bt=function(){return function(n){n(Ft(!0)),fetch("".concat(P,"/posts?_sort=createdAt&_order=desc&_expand=user")).then((function(n){return n.json()})).then((function(n){return n.length})).then((function(t){n(Rt(t)),n(Ft(!1))})).catch((function(t){console.log(t),n(Ft(!1))}))}},Wt=function(n,t){return function(e){return e(Ft(!0)),function(n,t){return fetch("".concat(P,"/posts?_expand=user&_sort=createdAt&_order=desc&_page=").concat(n,"&_limit=").concat(t)).then((function(n){return n.json()}))}(n,t).then((function(n){return e(Dt(n)),e(Ft(!1)),n})).catch((function(n){console.log(n),e(Ft(!1))}))}},Yt=function(n){return function(t){var e;t(Ft(!0)),(e=n,fetch("".concat(P,"/posts?_expand=user&_sort=createdAt&_order=desc&userId=").concat(e)).then((function(n){return n.json()}))).then((function(n){console.log(n),t(Dt(n)),t(Ft(!1))})).catch((function(n){console.log(n),t(Ft(!1))}))}},$t=function(n){return function(t){return t(Ft(!0)),function(n,t){var e=S();return fetch("".concat(P,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(e),"content-type":"application/json"},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(n.title,n.content).then((function(n){return n}))}},Ht=function(n){return function(t){return t(Ft(!0)),function(n){var t=S();return fetch("".concat(P,"/posts/").concat(n),{method:"DELETE",headers:{authorization:"Bearer ".concat(t),"content-type":"application/json"}}).then((function(n){return n}))}(n).then((function(e){return t(Jt(n)),t(Ft(!1)),e}))}},Kt=function(n,t,e){return function(r){return r(Ft(!0)),console.log("\u958b\u59cb\u4e32 API"),function(n,t,e){var r=S();return fetch("".concat(P,"/posts/").concat(n),{method:"PATCH",headers:{authorization:"Bearer ".concat(r),"content-type":"application/json"},body:JSON.stringify({title:t,body:e})}).then((function(n){return n.json()}))}(n,t,e).then((function(n){return r(Ft(!1)),n}))}},Xt=Nt.reducer;function qt(){var n=Object(u.a)(["\n  background: white;\n"]);return qt=function(){return n},n}function Gt(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 32px;\n\n  & > * + * {\n    margin-top: 32px;\n  }\n\n  "," {\n    flex-direction: row;\n    justify-content: center;\n\n    & > * + * {\n      margin-top: 0px;\n      margin-left: 32px;\n    }\n  }\n"]);return Gt=function(){return n},n}var Qt=l.b.div(Gt(),D),Vt=l.b.div(qt());function Zt(){var n=Object(b.b)(),t=Object(b.c)(d),e=Object(b.c)(j);return Object(c.useEffect)((function(){return n(Wt(1,4)),console.log("\u958b\u59cb\u6293\u8cc7\u6599",t),function(){n(Ft(!1)),n(Dt([]))}}),[n,e]),Object(r.jsxs)(Vt,{children:[Object(r.jsx)(xn,{}),t&&Object(r.jsx)(bn,{}),e[0]&&Object(r.jsx)(Rn,{post:e[0]}),Object(r.jsx)(Qt,{children:e[0]&&e.slice(1).map((function(n){return Object(r.jsx)(Vn,{post:n},n.id)}))})]})}var ne=e(9);function te(){var n=Object(u.a)(["\n  color: ",";\n"]);return te=function(){return n},n}var ee=l.b.span(te(),(function(n){return n.theme.colors.orange}));function re(n){var t=n.children;return Object(r.jsx)(ee,{children:t})}function ce(){var n=Object(u.a)(["\n  color: ",";\n  margin-bottom: 5px;\n  padding: 10px;\n  border: 0;\n  border-bottom: 1.5px solid ",";\n  width: 80vw;\n  box-sizing: border-box;\n  ","\n\n  &:focus {\n    outline: none;\n    background: ",";\n  }\n\n  "," {\n    width: ",";\n  }\n"]);return ce=function(){return n},n}var ie=l.b.input(ce(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.almost_grey}),(function(n){return"l"===n.size&&"font-size: 18px;"}),(function(n){return n.theme.colors.dark_grey}),D,(function(n){return"l"===n.size?"100%":"300px"}));function oe(n){var t=n.type,e=n.value,c=n.onChange,i=n.size;return Object(r.jsx)(ie,{type:t,value:e,onChange:c,size:i})}function ue(){var n=Object(u.a)(["\n  color: ",";\n  margin: 10px 0;\n  padding: 5px;\n  border: 1px solid ",";\n  width: 100%;\n  height: 20rem;\n  font-size: 16px;\n  box-sizing: border-box;\n  line-height: 1.5rem;\n\n  &:focus {\n    outline: none;\n  }\n"]);return ue=function(){return n},n}var ae=l.b.textarea(ue(),(function(n){return n.theme.colors.almost_grey}),(function(n){return n.theme.colors.almost_grey}));function se(n){var t=n.type,e=n.value,c=n.onChange;return Object(r.jsx)(ae,{type:t,value:e,onChange:c})}function le(){var n=Object(u.a)(["\n  margin: 8px 0;\n"]);return le=function(){return n},n}function be(){var n=Object(u.a)(["\n  color: red;\n"]);return be=function(){return n},n}function je(){var n=Object(u.a)(["\n  margin-top: 0px;\n"]);return je=function(){return n},n}var fe=l.b.h1(je()),de=l.b.div(be()),he=l.b.div(le());function xe(){var n=Object(b.b)(),t=Object(s.f)(),e=Object(b.c)(O),i=Object(b.c)(p),o=Object(b.c)(g),u=Object(c.useState)(""),a=Object(ne.a)(u,2),l=a[0],j=a[1],f=Object(c.useState)(""),d=Object(ne.a)(f,2),h=d[0],x=d[1];e&&t.push("/");var v=function(){var e=Object(w.a)(m.a.mark((function e(r){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!i){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,n(F(l,h));case 5:if(c=e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n(T());case 10:if(e.sent){e.next=13;break}return e.abrupt("return");case 13:c&&t.push("/");case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){n(_(!1)),n(N(""))}}),[]),Object(r.jsxs)(ut,{children:[i&&Object(r.jsx)(bn,{}),Object(r.jsxs)("div",{children:[Object(r.jsxs)(fe,{children:["Log",Object(r.jsx)(re,{children:"i"}),"n"]}),Object(r.jsxs)("form",{onSubmit:v,children:[Object(r.jsxs)(he,{children:["USERNAME",Object(r.jsx)("br",{}),Object(r.jsx)(oe,{value:l,onChange:function(n){return j(n.target.value)}})]}),Object(r.jsxs)(he,{children:["PASSWORD",Object(r.jsx)("br",{}),Object(r.jsx)(oe,{type:"password",value:h,onChange:function(n){return x(n.target.value)}})]}),o&&Object(r.jsx)(de,{children:o}),Object(r.jsx)(lt,{size:"medium",color:"black",children:"\u9001\u51fa"})]})]})]})}var pe=e(14),Oe=e.n(pe);function ge(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return ge=function(){return n},n}function ve(){var n=Object(u.a)(["\n  margin-top: 10px;\n  font-size: 14px;\n  line-height: 2rem;\n  white-space: pre-wrap;\n"]);return ve=function(){return n},n}function me(){var n=Object(u.a)(["\n  text-decoration: none;\n  font-size: 32px;\n  color: #373f27;\n  font-weight: bold;\n"]);return me=function(){return n},n}function we(){var n=Object(u.a)(["\n  margin-top: 5px;\n"]);return we=function(){return n},n}function ye(){var n=Object(u.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: black;\n  }\n"]);return ye=function(){return n},n}function ke(){var n=Object(u.a)(["\n  font-size: 14px;\n  color: #373f27;\n  background: ",";\n  padding: 5px;\n  margin: 10px 0;\n"]);return ke=function(){return n},n}var ze=l.b.div(ke(),(function(n){return n.theme.colors.light_grey})),Se=Object(l.b)(a.b)(ye(),(function(n){return n.theme.colors.orange})),Ee=l.b.div(we()),Pe=l.b.div(me()),Ce=l.b.div(ve()),Me=l.b.div(ge());function _e(n){var t=n.post,e=Object(b.b)(),c=Object(b.c)(O),i=Object(s.f)();return Object(r.jsx)(r.Fragment,{children:t[0]&&Object(r.jsxs)(tt,{children:[t[0]&&t[0].user&&c&&c.id===t[0].user.id&&Object(r.jsxs)(Me,{children:[Object(r.jsx)(lt,{color:"black",onClick:function(){return i.push("/edit/".concat(t[0].id))},children:"\u7de8\u8f2f"}),Object(r.jsx)(lt,{color:function(n){return n.theme.colors.orange},onClick:function(n){return r=t[0].id,alert("\u78ba\u5b9a\u8981\u522a\u9664\u55ce\uff1f"),void e(Ht(r)).then((function(n){return n.ok?(alert("\u522a\u9664\u6210\u529f"),i.push("/posts/1")):alert("\u522a\u9664\u5931\u6557")}));var r},children:"\u522a\u9664"})]}),Object(r.jsx)(Pe,{children:t[0].title}),Object(r.jsxs)(ze,{children:[Object(r.jsxs)(Se,{to:"/author/".concat(t[0].user.id),children:["by ",t[0].user.nickname]}),Object(r.jsx)(Ee,{children:new Date(t[0].createdAt).toLocaleString()})]}),Object(r.jsx)(Ce,{children:t[0].body})]})})}function Ae(){var n=Object(s.h)().id,t=Object(b.b)(),e=Object(b.c)(d),i=Object(b.c)(f);return Object(c.useEffect)((function(){return t(Ut(n)),function(){t(Ft(!1)),t(Lt([]))}}),[n,t]),Object(r.jsxs)(r.Fragment,{children:[e&&Object(r.jsx)(bn,{}),i[0]&&Object(r.jsx)(_e,{post:i},i[0].id)]})}function Ne(){var n=Object(u.a)(["\n  font-size: 14px;\n  & + & {\n    margin-top: 10px;\n  }\n"]);return Ne=function(){return n},n}function Te(){var n=Object(u.a)(["\n  color: red;\n"]);return Te=function(){return n},n}function Fe(){var n=Object(u.a)(["\n  margin-top: 0px;\n"]);return Fe=function(){return n},n}_e.propType={post:Oe.a.object},_e.propType={post:Oe.a.object,author:Oe.a.string};var Le=l.b.h1(Fe()),Ie=l.b.div(Te()),De=l.b.div(Ne());function Re(){var n=Object(c.useState)(""),t=Object(ne.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),u=Object(ne.a)(o,2),a=u[0],l=u[1],j=Object(s.f)(),f=Object(b.b)(),h=Object(b.c)(d),p=Object(b.c)(x);Object(b.c)(O)||j.push("/");return Object(c.useEffect)((function(){return function(){f(Ft(!1)),f(It(""))}}),[]),Object(r.jsxs)(tt,{children:[h&&Object(r.jsx)(bn,{}),Object(r.jsxs)(Le,{children:["New ",Object(r.jsx)(re,{children:"P"}),"ost"]}),Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),h||(f(It("")),f($t({title:e,content:a})).then((function(n){return f(Ft(!1)),0!==n.ok&&j.push("/post/".concat(n.id)),f(It(n.message))})))},children:[Object(r.jsxs)(De,{children:["TITLE",Object(r.jsx)("br",{}),Object(r.jsx)(oe,{value:e,onChange:function(n){return i(n.target.value)},size:"l"})]}),Object(r.jsxs)(De,{children:["CONTENT",Object(r.jsx)("br",{}),Object(r.jsx)(se,{value:a,onChange:function(n){return l(n.target.value)}})]}),p&&Object(r.jsx)(Ie,{children:p}),Object(r.jsx)(lt,{size:"medium",color:"black",children:"\u9001\u51fa"})]})]})}function Je(){var n=Object(u.a)(["\n  font-size: 14px;\n  & + & {\n    margin-top: 10px;\n  }\n"]);return Je=function(){return n},n}function Ue(){var n=Object(u.a)(["\n  color: red;\n"]);return Ue=function(){return n},n}function Be(){var n=Object(u.a)(["\n  margin-top: 0px;\n"]);return Be=function(){return n},n}var We=l.b.h1(Be()),Ye=l.b.div(Ue()),$e=l.b.div(Je());function He(){var n=Object(c.useState)(""),t=Object(ne.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),u=Object(ne.a)(o,2),a=u[0],l=u[1],j=Object(s.f)(),h=Object(b.b)(),p=Object(b.c)(f),g=Object(b.c)(d),v=Object(b.c)(x),m=Object(b.c)(O),w=Object(s.h)().id;Object(c.useEffect)((function(){return h(Ut(w)).then((function(n){i(n[0].title),l(n[0].body)})),function(){h(Ft(!1)),h(It(""))}}),[]);return Object(r.jsxs)(tt,{children:[g&&Object(r.jsx)(bn,{}),Object(r.jsxs)(We,{children:["Edit Post ",Object(r.jsx)(re,{children:"#"}),p[0]&&p[0].id]}),Object(r.jsxs)("form",{onSubmit:function(n){return function(n){if(n.preventDefault(),!g){if(m.id!==p[0].user.id)return alert("\u4f60\u6c92\u6709\u6b0a\u9650\u7de8\u8f2f\u9019\u7bc7\u6587\u7ae0\uff0c\u8acb\u78ba\u8a8d\u767b\u5165\u72c0\u6cc1\u3002");if(h(It("")),!e||!a)return h(It("\u6a19\u984c\u548c\u5167\u5bb9\u4e0d\u53ef\u7a7a\u767d"));h(Kt(w,e,a)).then((function(n){return h(Ft(!1)),j.push("/post/".concat(n.id))}))}}(n)},children:[Object(r.jsxs)($e,{children:["TITLE",Object(r.jsx)("br",{}),Object(r.jsx)(oe,{value:e,onChange:function(n){return i(n.target.value)},size:"l"})]}),Object(r.jsxs)($e,{children:["CONTENT",Object(r.jsx)("br",{}),Object(r.jsx)(se,{value:a,onChange:function(n){return l(n.target.value)}})]}),v&&Object(r.jsx)(Ye,{children:v}),Object(r.jsx)(lt,{size:"medium",color:"black",children:"\u9001\u51fa"})]})]})}var Ke=e.p+"static/media/me.13169f19.jpg";function Xe(){var n=Object(u.a)(["\n  margin-top: 36px;\n  text-align: center;\n"]);return Xe=function(){return n},n}function qe(){var n=Object(u.a)(["\n  height: 250px;\n  width: 250px;\n  background: url(",");\n  border-radius: 50%;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return qe=function(){return n},n}var Ge=l.b.div(qe(),Ke),Qe=l.b.h1(Xe());function Ve(){return Object(r.jsxs)(tt,{children:[Object(r.jsx)(Ge,{}),Object(r.jsxs)(Qe,{children:["About ",Object(r.jsx)(re,{children:"M"}),"e"]}),Object(r.jsx)("p",{children:"\u751f\u83dc\u3002\u6b63\u5728\u7df4\u7fd2\u7528 react \u548c redux \u505a\u90e8\u843d\u683c\u3002"}),Object(r.jsx)("p",{children:"\u8208\u8da3\u96dc\u98df\uff0c\u559c\u611b\u4e00\u5207\u6709\u8da3\u7684\u4e8b\u7269\u3002"}),Object(r.jsx)("p",{children:"\u904e\u4e86\u53ef\u4ee5\u7c3d\u5951\u7d04\u8b8a\u6210\u9b54\u6cd5\u5c11\u5973\u7684\u5e74\u7d00\uff0c\u7576\u9b54\u6cd5\u5e2b\u53c8\u592a\u5e74\u8f15\uff0c\u65bc\u662f\u53ea\u597d\u52aa\u529b\u6210\u70ba\u6eab\u67d4\u53c8\u5f37\u5927\u7684\u5de5\u7a0b\u5e2b\u3002"})]})}function Ze(){var n=Object(u.a)(["\n  color: red;\n"]);return Ze=function(){return n},n}function nr(){var n=Object(u.a)(["\n  margin-top: 0px;\n"]);return nr=function(){return n},n}function tr(){var n=Object(u.a)(["\n  margin: 8px 0;\n"]);return tr=function(){return n},n}var er=l.b.div(tr()),rr=l.b.h1(nr()),cr=l.b.div(Ze());function ir(){var n=Object(b.b)(),t=Object(b.c)(p),e=Object(b.c)(g),i=Object(b.c)(O),o=Object(c.useState)(""),u=Object(ne.a)(o,2),a=u[0],l=u[1],j=Object(c.useState)(""),f=Object(ne.a)(j,2),d=f[0],h=f[1],x=Object(c.useState)(""),v=Object(ne.a)(x,2),y=v[0],k=v[1],z=Object(s.f)();i&&z.push("/");var S=function(){var e=Object(w.a)(m.a.mark((function e(r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,n(L(a,d,y));case 5:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n(T());case 10:if(e.sent){e.next=13;break}return e.abrupt("return");case 13:z.push("/");case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){n(_(!1)),n(N(""))}}),[]),Object(r.jsxs)(ut,{children:[t&&Object(r.jsx)(bn,{}),Object(r.jsxs)("div",{children:[Object(r.jsxs)(rr,{children:[Object(r.jsx)(re,{children:"R"}),"egister"]}),Object(r.jsxs)("form",{onSubmit:function(n){return S(n)},children:[Object(r.jsxs)(er,{children:["USERNAME",Object(r.jsx)("br",{}),Object(r.jsx)(oe,{value:a,onChange:function(n){return l(n.target.value)}})]}),Object(r.jsxs)(er,{children:["PASSWORD",Object(r.jsx)("br",{}),Object(r.jsx)(oe,{type:"password",value:d,onChange:function(n){return h(n.target.value)}})]}),Object(r.jsxs)(er,{children:["NICKNAME",Object(r.jsx)("br",{}),Object(r.jsx)(oe,{value:y,onChange:function(n){return k(n.target.value)}})]}),e&&Object(r.jsx)(cr,{children:e}),Object(r.jsx)(lt,{size:"medium",color:"black",children:"\u9001\u51fa"})]})]})]})}function or(){var n=Object(u.a)(["\n  text-align: center;\n"]);return or=function(){return n},n}function ur(){var n=Object(u.a)(["\n  margin-top: 100px;\n"]);return ur=function(){return n},n}var ar=l.b.div(ur()),sr=l.b.h1(or());function lr(){var n=Object(s.h)().page||1,t=Object(c.useRef)(),e=Object(b.b)(),i=Object(b.c)(d),o=Object(b.c)(j),u=Object(b.c)(h);Object(c.useEffect)((function(){return console.log("refresh"),e(Ft(!0)),e(Bt()),t.current=Math.ceil(u/5),e(Wt(n,5)),function(){e(Ft(!1)),e(Dt([]))}}),[n,e,u,o]);var a=function(n){alert("\u78ba\u5b9a\u8981\u522a\u9664\u55ce\uff1f"),e(Ht(n)).then((function(n){return console.log(n),n.ok?(e(Bt()),alert("\u522a\u9664\u6210\u529f")):alert("\u522a\u9664\u5931\u6557")}))};return Object(r.jsxs)(ar,{children:[Object(r.jsx)(sr,{children:"ALL POSTS"}),i&&Object(r.jsx)(bn,{}),o.map((function(n){return Object(r.jsx)(At,{post:n,deletePostFunction:a},n.id)})),t.current&&Object(r.jsx)(ht,{num:t.current})]})}function br(){var n=Object(u.a)(["\n  text-align: center;\n"]);return br=function(){return n},n}function jr(){var n=Object(u.a)(["\n  margin-top: 100px;\n"]);return jr=function(){return n},n}var fr=l.b.div(jr()),dr=l.b.h1(br());function hr(){var n=Object(s.h)().id||1,t=Object(b.b)(),e=Object(b.c)(d),i=Object(b.c)(j);Object(c.useEffect)((function(){return t(Yt(n)),function(){t(Ft(!1)),t(Dt([]))}}),[t,n,i]);return Object(r.jsxs)(fr,{children:[Object(r.jsx)(dr,{children:i[0]?Object(r.jsxs)(r.Fragment,{children:[i[0].user.nickname,Object(r.jsx)(re,{children:"`s"})," POSTS"]}):"\u9019\u4f4d\u4f5c\u8005\u76ee\u524d\u6c92\u6709\u6587\u7ae0\u311b"}),e&&Object(r.jsx)(bn,{}),i[0]&&i.map((function(n){return Object(r.jsx)(At,{post:n,deletePostFunction:function(){return function(n){alert("\u78ba\u5b9a\u8981\u522a\u9664\u55ce\uff1f"),t(Ht(n)).then((function(n){return n.ok?alert("\u522a\u9664\u6210\u529f"):alert("\u522a\u9664\u5931\u6557")}))}(n.id)}},n.id)}))]})}function xr(){var n=Object(u.a)(["\n  min-height: calc(100vh - 48px - 95px);\n  "," {\n    min-height: calc(100vh - 48px - 64px);\n  }\n"]);return xr=function(){return n},n}function pr(){var n=Object(u.a)(["\n  margin-top: 95px;\n  "," {\n    margin-top: 64px;\n  }\n"]);return pr=function(){return n},n}var Or=l.b.div(pr(),D),gr=l.b.div(xr(),D);var vr=function(){var n=Object(b.b)(),t=Object(b.c)(p);return Object(c.useEffect)((function(){n(T())}),[]),Object(r.jsxs)(Or,{children:[t&&Object(r.jsx)(bn,{}),Object(r.jsx)(gr,{children:Object(r.jsxs)(a.a,{children:[Object(r.jsx)(q,{}),Object(r.jsx)(s.c,{children:Object(r.jsx)(s.a,{exact:!0,path:"/",children:Object(r.jsx)(Zt,{})})}),Object(r.jsx)(s.c,{children:Object(r.jsx)(s.a,{path:"/posts/:page",children:Object(r.jsx)(lr,{})})}),Object(r.jsx)(s.a,{exact:!0,path:"/login",children:Object(r.jsx)(xe,{})}),Object(r.jsx)(s.a,{path:"/post/:id",children:Object(r.jsx)(Ae,{})}),Object(r.jsx)(s.a,{exact:!0,path:"/addPost",children:Object(r.jsx)(Re,{})}),Object(r.jsx)(s.a,{exact:!0,path:"/about",children:Object(r.jsx)(Ve,{})}),Object(r.jsx)(s.a,{exact:!0,path:"/register",children:Object(r.jsx)(ir,{})}),Object(r.jsx)(s.a,{path:"/author/:id",children:Object(r.jsx)(hr,{})}),Object(r.jsx)(s.a,{path:"/edit/:id",children:Object(r.jsx)(He,{})})]})}),Object(r.jsx)(nn,{})]})},mr=(e(44),Object(y.a)({reducer:{posts:Xt,users:I}}));o.a.render(Object(r.jsx)(l.a,{theme:{colors:{black:"#000000",almost_grey:"#0D0D0D",white:"#FFFFFF",dark_grey:"#F5F5F5",light_grey:"#f5f5f570",orange:"#FF6F43"},font:{xxs:14,xs:16,sm:18,md:20,lg:22,xl:24,xxl:30,xxxl:40},height:{header:64}},children:Object(r.jsx)(b.a,{store:mr,children:Object(r.jsx)(vr,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.37cadd38.chunk.js.map