(this["webpackJsonpstar-wars-api"]=this["webpackJsonpstar-wars-api"]||[]).push([[0],{28:function(e,c,a){},29:function(e,c,a){"use strict";a.r(c);var t=a(1),r=a.n(t),n=a(12),s=a.n(n),i=a(5),j=a(11),l=a(2),d=a(0),h=function(e){var c=e.page,a=e.changeDataArray,r=Object(t.useRef)();return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://swapi.dev/api/".concat(c,"/?search=").concat(r.current.value)).then((function(e){return e.json()})).then((function(e){return a(e.results)}))},children:[Object(d.jsx)("input",{type:"text",placeholder:"Search for a ".concat(function(e){switch(e){case"people":return"character";case"species":return e;default:return e.slice(0,-1)}}(c),"!"),name:"search",ref:r}),Object(d.jsx)("input",{type:"submit",value:"Search"})]})},b=function(e){var c=e.dataArray,a=e.changeDisplayPage,r=e.changeDataArray;Object(t.useEffect)((function(){a("people")}),[a]);var n=c.map((function(e){return Object(d.jsx)("div",{className:"cardBG",children:Object(d.jsxs)("div",{className:"infoCard",children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Birth Year: "}),e.birth_year]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Gender: "}),e.gender]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Hair Color: "}),e.hair_color]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Eye Color: "}),e.eye_color]})]},e.name)})}));return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,{page:"people",changeDataArray:r}),Object(d.jsx)("div",{className:"cards",children:n})]})},p=function(e){var c=e.dataArray,a=e.changeDisplayPage,r=e.changeDataArray;Object(t.useEffect)((function(){a("films")}),[a]);var n=c.map((function(e){var c=new Date(e.release_date).toDateString().slice(4).split(" "),a=[c[1],c[0],c[2]].join(" ");return Object(d.jsx)("div",{className:"cardBG",children:Object(d.jsxs)("div",{className:"infoCard",children:[Object(d.jsx)("h1",{children:e.title}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Director: "}),e.director]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Producer: "}),e.producer]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Release Date: "}),a]})]},e.episode_id)})}));return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,{page:"films",changeDataArray:r}),Object(d.jsx)("div",{className:"cards",children:n})]})},O=function(e){var c=e.dataArray,a=e.changeDisplayPage,r=e.changeDataArray;Object(t.useEffect)((function(){a("planets")}),[a]);var n=c.map((function(e){return Object(d.jsx)("div",{className:"cardBG",children:Object(d.jsxs)("div",{className:"infoCard",children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Climate: "}),e.climate]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Diameter: "}),e.diameter]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Population: "}),e.population]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Orbital Period: "}),e.orbital_period]})]},e.name)})}));return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,{page:"planets",changeDataArray:r}),Object(d.jsx)("div",{className:"cards",children:n})]})},x=function(e){var c=e.dataArray,a=e.changeDisplayPage,r=e.changeDataArray;Object(t.useEffect)((function(){a("species")}),[a]);var n=c.map((function(e){return Object(d.jsx)("div",{className:"cardBG",children:Object(d.jsxs)("div",{className:"infoCard",children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Classification: "}),e.classification]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Designation: "}),e.designation]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Language: "}),e.language]})]},e.name)})}));return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,{page:"species",changeDataArray:r}),Object(d.jsx)("div",{className:"cards",children:n})]})},u=function(e){var c=e.dataArray,a=e.changeDisplayPage,r=e.changeDataArray;Object(t.useEffect)((function(){a("starships")}),[a]);var n=c.map((function(e){return Object(d.jsx)("div",{className:"cardBG",children:Object(d.jsxs)("div",{className:"infoCard",children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Manufacturer: "}),e.manufacturer]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Model: "}),e.model]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Crew: "}),e.crew]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Hyperdrive Rating: "}),e.hyperdrive_rating]})]},e.name)})}));return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,{page:"starships",changeDataArray:r}),Object(d.jsx)("div",{className:"cards",children:n})]})},o=function(e){var c=e.dataArray,a=e.changeDisplayPage,r=e.changeDataArray;Object(t.useEffect)((function(){a("vehicles")}),[a]);var n=c.map((function(e){return Object(d.jsx)("div",{className:"cardBG",children:Object(d.jsxs)("div",{className:"infoCard",children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Manufacturer: "}),e.manufacturer]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Model: "}),e.model]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Crew: "}),e.crew]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:"Type: "}),e.vehicle_class]})]},e.name)})}));return Object(d.jsxs)("main",{children:[Object(d.jsx)(h,{page:"vehicles",changeDataArray:r}),Object(d.jsx)("div",{className:"cards",children:n})]})},f=function(e){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("h1",{className:"title",children:Object(d.jsx)(i.b,{to:"/",children:"Star Wars Info"})}),Object(d.jsxs)("ul",{className:"navList",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/People",children:"People"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/Films",children:"Films"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/Planets",children:"Planets"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/Species",children:"Species"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/Starships",children:"Starships"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/Vehicles",children:"Vehicles"})})]})]})};var g=function(){var e=Object(t.useState)("people"),c=Object(j.a)(e,2),a=c[0],r=c[1],n=Object(t.useState)([]),s=Object(j.a)(n,2),i=s[0],h=s[1];Object(t.useEffect)((function(){fetch("https://swapi.dev/api/".concat(a,"/")).then((function(e){return e.json()})).then((function(e){return h(e.results.slice(0,6))}))}),[a]);var g=function(e){r(e)},m=function(e){h(e)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{}),Object(d.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(b,{dataArray:i,changeDisplayPage:g,changeDataArray:m})}}),Object(d.jsx)(l.a,{exact:!0,path:"/People",render:function(){return Object(d.jsx)(b,{dataArray:i,changeDisplayPage:g,changeDataArray:m})}}),Object(d.jsx)(l.a,{exact:!0,path:"/Films",render:function(){return Object(d.jsx)(p,{dataArray:i,changeDisplayPage:g})}}),Object(d.jsx)(l.a,{exact:!0,path:"/Planets",render:function(){return Object(d.jsx)(O,{dataArray:i,changeDisplayPage:g,changeDataArray:m})}}),Object(d.jsx)(l.a,{exact:!0,path:"/Species",render:function(){return Object(d.jsx)(x,{dataArray:i,changeDisplayPage:g,changeDataArray:m})}}),Object(d.jsx)(l.a,{exact:!0,path:"/Starships",render:function(){return Object(d.jsx)(u,{dataArray:i,changeDisplayPage:g,changeDataArray:m})}}),Object(d.jsx)(l.a,{exact:!0,path:"/Vehicles",render:function(){return Object(d.jsx)(o,{dataArray:i,changeDisplayPage:g,changeDataArray:m})}})]})};a(28);s.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4b0dcc2c.chunk.js.map