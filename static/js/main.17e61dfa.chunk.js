(this.webpackJsonpfeedback=this.webpackJsonpfeedback||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);n(15),n(16);var c=n(8),r=n.n(c),o=n(3),i=n(2),a=n(14),s=n(0),u=n(1);var j=function(e){var t=e.title,n=void 0===t?"Title of Section":t,c=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:n}),c]})};var b=function(e){return Object(u.jsx)("ul",{children:Object.keys(e).map((function(t){return Object(u.jsxs)("li",{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsxs)("span",{children:[e[t],"positivePercentage"===t&&"%"]})]},t)}))})};var d,l=function(){return Object(u.jsx)("h3",{children:"Unfortunatelly, nobody has voted yet. Maybe our services are unuseful so nobody don't use it and vote it. But one is definitely true that WE DON'T BUY VOTES!"})},O=n(9),h=n(10).a.ul(d||(d=Object(O.a)(["\n    display: flex;\n    justify-content: 'space-around',\n"])));var f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)(h,{children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",id:e,onClick:n,children:e})},e)}))})},v={good:0,neutral:0,bad:0},p=function(){var e=Object(s.useState)(v),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object.keys(v),d=function(){var e=0,t=0;return r.map((function(t){return e+=n[t]})),t=0===n.good?0:100*n.good/e,t=Math.round(100*t)/100,{total:e,positivePercentage:t}}(),O=d.total,h=d.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{title:"Buttons to vote (10$ per one, ask Mr. Burke)",children:Object(u.jsx)(f,{options:r,onLeaveFeedback:function(e){c((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},e.target.id,t[e.target.id]+1))}))}})}),Object(u.jsx)(j,{title:"Incorruptible votes: ",children:0===O?Object(u.jsx)(l,{}):Object(u.jsx)(b,Object(i.a)(Object(i.a)({},n),{},{total:O,positivePercentage:h}))})]})};r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.17e61dfa.chunk.js.map