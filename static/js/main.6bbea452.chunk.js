(this.webpackJsonpfeedback=this.webpackJsonpfeedback||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);n(15),n(16);var c=n(8),r=n.n(c),o=n(3),i=n(2),a=n(14),s=n(0),j=n(1);var u=function(e){var t=e.title,n=void 0===t?"Title of Section":t,c=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:n}),c]})};var b=function(e){return Object(j.jsx)("ul",{children:Object.keys(e).map((function(t){return Object(j.jsxs)("li",{children:[Object(j.jsx)("h3",{children:t}),Object(j.jsxs)("span",{children:[e[t],"positivePercentage"===t&&"%"]})]},t)}))})};var d,l=function(){return Object(j.jsx)("h3",{children:"Unfortunatelly, nobody has voted yet. Maybe our services are unuseful so nobody don't use it and vote it. But one is definitely true that WE DON'T BUY VOTES!"})},O=n(9),h=n(10).a.ul(d||(d=Object(O.a)(["\n    display: flex;\n    justify-content: 'space-around',\n"])));var f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(h,{children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{type:"button",id:e,onClick:n,children:e})},e)}))})},v={good:0,neutral:0,bad:0},p=function(){var e=Object(s.useState)(v),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object.keys(v),d=function(){var e=0,t=0;return r.map((function(t){return e+=n[t]})),t=0===n.good?0:100*n.good/e,t=Math.round(100*t)/100,{total:e,positivePercentage:t}}(),O=d.total,h=d.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{title:"Buttons to vote (10$ per one, ask Mr. Burke)",children:Object(j.jsx)(f,{options:r,onLeaveFeedback:function(e){c(Object(i.a)(Object(i.a)({},n),{},Object(o.a)({},e.target.id,n[e.target.id]+1)))}})}),Object(j.jsx)(u,{title:"Incorruptible votes: ",children:0===O?Object(j.jsx)(l,{}):Object(j.jsx)(b,Object(i.a)(Object(i.a)({},n),{},{total:O,positivePercentage:h}))})]})};r.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6bbea452.chunk.js.map