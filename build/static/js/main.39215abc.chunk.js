(this["webpackJsonpchucknorris-joker"]=this["webpackJsonpchucknorris-joker"]||[]).push([[0],{50:function(e,n,t){"use strict";t.r(n);var r,a,c=t(0),i=t.n(c),s=t(22),o=t.n(s),u=t(6),l=t(7),d=Object(l.a)(r||(r=Object(u.a)(["\n    *{\n        padding: 0;\n        margin: 0;\n    }\n    body{\n        background: #cccc;\n        font-family: 'Chango', cursive;\n    }\n"]))),p=t(2),b=t.n(p),j=t(4),h=t(5),g=t(9),x=t.n(g),m="https://api.chucknorris.io/",f={getJokeCategories:function(){var e=Object(j.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(m,"jokes/categories/"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),searchJoke:function(){var e=Object(j.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(m,"jokes/search?query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getJokeByCategory:function(){var e=Object(j.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(m,"jokes/random?category=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},v=t.p+"static/media/giphy.41854774.gif",O=l.b.div(a||(a=Object(u.a)(["\n  padding-bottom: 2rem;\n  min-height: 100vh;\n  width: 100%;\n  background: linear-gradient(347deg, rgba(144,140,212,1) 0%, rgba(127,255,212,1) 100%);\n  .home-content {\n    margin: auto;\n    width: 70%;\n    .search-box {\n      padding: 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      align-items: center;\n      h2 {\n        margin: 0.75rem;\n      }\n    }\n  }\n  .categories {\n    margin: 1rem;\n    display: flex;\n    justify-content: center;\n    ul {\n      width: 70%;\n      list-style: none;\n      flex-wrap: wrap;\n      display: flex;\n    }\n  }\n  .category {\n    margin: 0.5rem;\n    padding: 0.3rem;\n    padding-top: 0.5rem;\n    vertical-align: bottom;\n    min-width: 6rem;\n    height: 2rem;\n    background: whitesmoke;\n    color: #777;\n    border-radius: 0.2rem;\n    box-shadow: 2px 4px 5px 1px rgba(0,0,0,0.75);\n    transition: all 0.5s;\n    &:hover {\n      cursor: pointer;\n      color: #222;\n      box-shadow: 1px 3px 3px 0px rgba(0,0,0,0.75);\n    }\n  }\n  .active {\n    color: #222;\n    box-shadow: 1px 3px 3px 0px rgba(0,0,0,0.75);\n  }\n  .input-group {\n    input[type=text] {\n      height: 2rem;\n      font-family: 'Chango', cursive;\n      padding: 0.25rem;\n      font-size: 1rem;\n    }\n    button[type=submit] {\n      box-shadow: 1px 3px 3px 0px rgba(0,0,0,0.75);\n      border-radius: 1rem;\n      margin-left: 0.5rem;\n      padding: 0.5rem;\n      font-family: 'Chango', cursive;\n      &:hover {\n        cursor: pointer;\n        background: yellowgreen;\n      }\n    }\n  }\n  .joke-card {\n    background: whitesmoke;\n    display: flex;\n    margin: 1rem 0;\n    padding: 0.5rem;\n    align-items: center;\n    box-shadow: 1px 2px 2px rgba(0,0,0,0.75);\n    border-radius: 0.2rem;\n    img {\n      padding-right: 1rem;\n    }\n  }\n  .joker {\n    display: block;\n  }\n  .search-gif {\n    margin: 1rem auto;\n    text-align: center;\n  }\n"]))),k=t(1),y={id:"",icon_url:"",value:""},w=function(){var e=Object(c.useState)([]),n=Object(h.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(),i=Object(h.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(""),l=Object(h.a)(u,2),d=l[0],p=l[1],g=Object(c.useState)(""),x=Object(h.a)(g,2),m=x[0],w=x[1],C=Object(c.useState)(!1),J=Object(h.a)(C,2),N=J[0],S=J[1],B=Object(c.useState)([]),F=Object(h.a)(B,2),_=F[0],E=F[1],q=Object(c.useState)(""),z=Object(h.a)(q,2),A=z[0],I=z[1],M=function(){var e=Object(j.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,f.getJokeCategories();case 4:n=e.sent,r(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,S(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){M()}),[]);var R=function(){var e=Object(j.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,f.searchJoke(d);case 4:n=e.sent,E(n.result),o(null),I(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,S(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(j.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),p(""),w(""),I(n),e.next=7,f.getJokeByCategory(n);case 7:t=e.sent,o(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,E([y]),S(!1),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[0,11,14,18]])})));return function(n){return e.apply(this,arguments)}}();return Object(k.jsx)(O,{children:Object(k.jsxs)("div",{className:"home-content",children:[Object(k.jsx)("h1",{style:{textAlign:"center"},children:"Norris Jokes"}),Object(k.jsxs)("div",{className:"search-box",children:[Object(k.jsx)("h2",{children:"Find Joke"}),Object(k.jsxs)("div",{className:"input-group",children:[Object(k.jsx)("input",{type:"text",onChange:function(e){w(e.target.value),p(e.target.value)},value:m}),Object(k.jsx)("button",{type:"submit",onClick:R,disabled:!(null===m||void 0===m?void 0:m.length),children:" Find joke"})]})]}),Object(k.jsx)("div",{className:"categories",children:Object(k.jsx)("ul",{children:t.map((function(e,n){return Object(k.jsx)("li",{className:A===e?"active category":"category",onClick:function(){return D(e)},children:e},n)}))})}),Object(k.jsxs)("div",{className:s?"joke-card":"",children:[Object(k.jsx)("img",{src:null===s||void 0===s?void 0:s.icon_url,alt:null===s||void 0===s?void 0:s.value}),Object(k.jsx)("h3",{children:null===s||void 0===s?void 0:s.value})]}),_&&_[0]&&_[0].id?Object(k.jsxs)("h3",{children:["Results found for: ",d]}):"",Object(k.jsx)("div",{className:N?"search-gif":"joker",children:N?Object(k.jsx)("img",{className:"search-gif",src:v,alt:"load"}):_.map((function(e){return Object(k.jsxs)("div",{className:e&&e.value?"joke-card":"",children:[Object(k.jsx)("img",{src:e.icon_url,alt:e.value}),Object(k.jsx)("h3",{children:e.value})]},e.id)}))})]})})},C=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w,{}),Object(k.jsx)(d,{})]})};o.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.39215abc.chunk.js.map