(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(14),c=n.n(u),l=n(2),o=n(4),s=n.n(o),i=function(){return s.a.get("/api/persons").then(function(e){return e.data})},m=function(e){return s.a.post("/api/persons",e).then(function(e){return e.data})},d=function(e){return console.log("DELETED"),s.a.delete("/api/persons/"+e)},f=function(e){var t=e.persons,n=e.setFiltered,u=Object(a.useState)(""),c=Object(l.a)(u,2),o=c[0],s=c[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Search"),r.a.createElement("input",{type:"text",className:"input",placeholder:"Search...",onChange:function(e){var a=o;s(e.target.value);var r=t.filter(function(e){return-1!==e.name.toLowerCase().indexOf(a.toLowerCase())});return n(r)}}))},p=n(3),b=function(e){var t=e.state;if(null===t.message)return null;var n={background:"grey",fontSize:"20px",borderStyle:"solid",padding:"20px",marginBottom:"20px"};return n="error"===t.type?Object(p.a)({},n,{color:"red"}):Object(p.a)({},n,{color:"green"}),r.a.createElement("div",{style:n},t.message)},E=function(e){var t=e.persons,n=e.setPersons,u=Object(a.useState)(""),c=Object(l.a)(u,2),o=c[0],s=c[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),f=d[0],E=d[1],v=Object(a.useState)({message:null}),g=Object(l.a)(v,2),h=g[0],O=g[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Add a new"),"null"!==h&&r.a.createElement(b,{state:h}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:o,number:f};m(a).then(function(e){n(t.concat(e)),E("");var r={message:"".concat(a.name," has been successfully added to your phonebook"),type:"success"};O(r),setTimeout(function(){O(Object(p.a)({},h,{message:null}))},5e3)}).catch(function(e){var t={message:e.response.data.error,type:"error"};O(t),setTimeout(function(){O(Object(p.a)({},h,{message:null}))},5e3),E("")})}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:o,onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:f,onChange:function(e){E(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},v=function(e){var t=e.filtered,n=e.persons,u=Object(a.useState)({message:null}),c=Object(l.a)(u,2),o=c[0],s=c[1],i=function(e){window.confirm("Are you sure you want to permanently delete this person?")&&d(e).then(function(e){var t={message:"successfully deleted"+e.name,type:"success"};s(t),setTimeout(function(){return s(Object(p.a)({},o,{message:null}))},5e3)}).catch(function(e){s({message:"The persons has already been removed from our server",type:"error"}),setTimeout(function(){return s(Object(p.a)({},o,{message:null}))},5e3)})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),"null"!==o&&r.a.createElement(b,{state:o}),r.a.createElement("ul",null,0===t.length||null===t||t===[]?n.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("li",{className:"button"},e.name," : ",e.number),r.a.createElement("button",{onClick:function(){return i(e.id)}},"delete"))}):t.map(function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("li",{className:"button"},e.name," : ",e.number),r.a.createElement("button",{onClick:function(){return i(e.id)}},"delete"))})))},g=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)([]),o=Object(l.a)(c,2),s=o[0],m=o[1];return Object(a.useEffect)(function(){i().then(function(e){u(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{persons:n,setFiltered:m}),r.a.createElement(E,{persons:n,setPersons:u}),r.a.createElement(v,{filtered:s,persons:n}))};n(38);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.19c5099c.chunk.js.map