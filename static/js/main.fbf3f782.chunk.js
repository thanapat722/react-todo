(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),o=c(19),r=c.n(o),l=(c(27),c(28),c(7)),i=c(2),d=c.p+"static/media/logo.31c7a6e2.svg",x=c.p+"static/media/mb.9f351dce.svg";var b=function(){return Object(n.jsxs)("div",{className:"bg-gray-700 min-h-screen flex justify-center items-center",children:[Object(n.jsxs)("div",{className:"text-wrap z-10 noselect",children:[Object(n.jsx)("p",{className:"text-lg text-blue-400 font-extrabold",children:"React"}),Object(n.jsx)("h1",{className:"text-white text-5xl font-bold",children:"TODO APP"}),Object(n.jsx)("div",{className:"btn mt-20 flex items-center justify-center",children:Object(n.jsx)(l.b,{to:"/react-todo/todo",className:"text-white text-xl font-bold flex text-center items-center justify-center rounded-lg bg-blue-500 w-10 h-10 transition-all hover:bg-blue-600",children:"\u2192"})})]}),Object(n.jsx)("img",{src:d,alt:"React-logo",className:"App-logo absolute z-0 opacity-10 noselect"}),Object(n.jsxs)("p",{className:"text-sm text-white absolute bottom-8 text-center font-light flex items-center noselect",children:["Created\xa0with\xa0",Object(n.jsx)("a",{href:"https://reactjs.org/",className:"text-blue-400 font-normal transition-all hover:text-blue-500",children:"React"}),"\xa0and\xa0",Object(n.jsx)("a",{href:"https://tailwindcss.com/",className:"text-blue-400 font-normal transition-all hover:text-blue-500",children:"tailwindcss"}),"\xa0\xa9\xa0",Object(n.jsx)("img",{src:x,alt:"MB-Logo",className:"mb-1 max-h-4 mb-logo"})]})]})},m=c(17),u=c(21),j=c(12);function h(e){var t=e.obj,c=e.deleteList,s=e.toggleDone;return Object(n.jsxs)("div",{className:"mb-2 px-4 py-2 flex bg-gray-800 text-white rounded-md cursor-pointer transition-all hover:bg-gray-600",title:t.done?"Mark as Undone":"Mark as Done",onClick:s,children:[Object(n.jsx)("h1",{className:t.done?"noselect max-w-full flex-auto overflow-ellipsis line-through text-green-500 whitespace-nowrap":"noselect max-w-full flex-auto overflow-ellipsis whitespace-nowrap",children:t.str}),Object(n.jsx)("button",{className:"text-gray-500 transition-all hover:text-red-600",title:"Delete task",onClick:function(e){e.stopPropagation(),c()},children:"Del"})]})}function f(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],o=Object(s.useState)([]),r=Object(j.a)(o,2),l=r[0],i=r[1],d=Object(s.useState)(0),x=Object(j.a)(d,2),b=x[0],f=x[1],p=Object(s.useRef)(null);return Object(n.jsx)("div",{className:"bg-gray-700 min-h-screen",children:Object(n.jsxs)("div",{className:"wrapper flex flex-col flex-wrap justify-center items-center",children:[Object(n.jsxs)("form",{className:"input-group flex md:w-2/4 mt-24",onSubmit:function(e){return function(e){e.preventDefault(),i([].concat(Object(u.a)(l),[{str:p.current.value,id:b,done:!1}])),a(""),f(b+1)}(e)},children:[Object(n.jsx)("input",{type:"text",ref:p,value:c,className:"todo flex-auto bg-gray-800 px-4 py-2 box-border rounded-md text-white border-gray-300 focus:outline-none",placeholder:"Enter todo task...",onInput:function(){return a(p.current.value)},required:!0}),Object(n.jsx)("button",{className:"add-btn flex bg-blue-500 px-4 py-2 ml-2 rounded-md text-white transition-all hover:bg-blue-600 focus:outline-none",children:"Add"})]}),Object(n.jsx)("h1",{className:"flex mt-6 text-xl text-white noselect",children:"Todo List"}),Object(n.jsx)("div",{className:"list-container mt-6 md:w-2/4 w-4/5",children:l.map((function(e,t){return Object(n.jsx)(h,{obj:e,toggleDone:function(){return t=e.id,void i(l.map((function(e){return e.id===t?Object(m.a)(Object(m.a)({},e),{},{done:!e.done}):e})));var t},deleteList:function(){return t=e.id,void i(l.filter((function(e){return e.id!==t})));var t}},e.id)}))})]})})}var p=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"bg-gray-800 z-50 fixed min-w-full",children:Object(n.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(n.jsx)("div",{className:"flex items-center justify-center h-16",children:Object(n.jsx)("div",{className:"flex items-center",children:Object(n.jsxs)("div",{className:"flex items-baseline space-x-4",children:[Object(n.jsx)(l.c,{exact:!0,to:"/react-todo/",activeClassName:"bg-black bg-opacity-40 text-white px-3 py-2 rounded-md text-sm font-medium",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Home"}),Object(n.jsx)(l.c,{to:"/react-todo/todo",activeClassName:"bg-black bg-opacity-40 text-white px-3 py-2 rounded-md text-sm font-medium",className:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",children:"Todo"})]})})})})})})};var g=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(p,{}),Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{exact:!0,path:"/react-todo/",component:b}),Object(n.jsx)(i.a,{exact:!0,path:"/react-todo/todo",component:f})]})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.fbf3f782.chunk.js.map