(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){var i={"./Alien Collection Graphic.jpeg":29,"./Alien Forms Bubble Graphic.jpeg":30,"./Alien Line-up Logo.jpeg":31,"./Alien Logo.jpeg":32,"./Alien rush graphic.jpeg":33,"./Armored Up - Omni-kix Cannonbolt.jpeg":34,"./Armored Up - Omni-kix Slapback.jpeg":35,"./Ben Tennyson Omnitrix Graphic.jpeg":36,"./Diamondhead DNA Transformation.jpeg":37,"./Four Arms DNA Transformation.jpeg":38,"./Going Hero - Omni-kix XLR8.jpeg":39,"./Heat Blast DNA Transformation.jpeg":40,"./Overflow DNA Transformation.jpeg":41};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=r,e.exports=c,c.id=28},29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Alien Collection Graphic.e2997ec3.jpeg"},30:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Alien Forms Bubble Graphic.4812bf2e.jpeg"},31:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Alien Line-up Logo.258561e9.jpeg"},32:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Alien Logo.f9544efd.jpeg"},33:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Alien rush graphic.9c343d6f.jpeg"},34:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Armored Up - Omni-kix Cannonbolt.cc3891ad.jpeg"},35:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Armored Up - Omni-kix Slapback.33410a89.jpeg"},36:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Ben Tennyson Omnitrix Graphic.062d0371.jpeg"},37:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Diamondhead DNA Transformation.ed93ad67.jpeg"},38:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Four Arms DNA Transformation.52661faa.jpeg"},39:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Going Hero - Omni-kix XLR8.fcc45539.jpeg"},40:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Heat Blast DNA Transformation.cb58800c.jpeg"},41:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Overflow DNA Transformation.ea85c5f3.jpeg"},50:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(20),a=n.n(r),s=n(18),o=n(9),j=n(8),u=n(19),d=n(12),l=n(2),p=(n(26),n(1)),b=function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{id:"grid",children:e.shopItems})})},f=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{id:"cart-grid",children:e.cartItems}),Object(p.jsx)("div",{children:"Checkout"})]})},O=function(){return Object(p.jsx)("div",{children:"Home"})};var m=function(e){var t={};return e.keys().forEach((function(n,i){t[n.replace("./","")]=e(n)})),t},h=function(e){return Object(p.jsxs)("div",{className:"shop-item",children:[Object(p.jsx)("img",{src:e.img,alt:""}),Object(p.jsx)("div",{children:e.name}),Object(p.jsx)("div",{children:e.price}),Object(p.jsx)("button",{type:"button",className:"cart-btn",onClick:function(){return e.onClick(e.index)},children:"Add to Cart"})]})},x=function(e){var t=e.img,n=e.index,i=e.name,c=e.price,r=e.quantity,a=e.onRemove;return Object(p.jsxs)("div",{className:"cart-item",children:[Object(p.jsx)("img",{src:t,alt:""}),Object(p.jsx)("div",{style:{verticalAlign:"center",lineHeight:"100px"},children:i}),Object(p.jsxs)("div",{style:{verticalAlign:"center",lineHeight:"100px"},children:["Price: ",c]}),Object(p.jsxs)("div",{children:["Quantity: ",r||1]}),Object(p.jsx)("button",{className:"remove-btn",onClick:function(){return a(n)},children:"Remove"})]})},g=function(){var e=m(n(28)),t=Object(i.useState)([]),c=Object(u.a)(t,2),r=c[0],a=c[1],g=Object(i.useState)({}),v=Object(u.a)(g,2),A=v[0],k=v[1],y=function(e){a((function(t){return t.filter((function(t,n){return n!==e}))})),k((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(o.a)({},e,2))}))},N=function(t){t in A?(k((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(o.a)({},t,e[t]+1))})),r.splice(t,1),a((function(){return[].concat(Object(s.a)(r),[Object(p.jsx)(x,{img:e[Object.keys(e)[t]].default,index:t,name:Object.keys(e)[t].slice(0,-5),price:10*(t+1),quantity:A[t],onRemove:y})])}))):(k((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(o.a)({},t,2))})),a((function(){return[].concat(Object(s.a)(r),[Object(p.jsx)(x,{img:e[Object.keys(e)[t]].default,index:t,name:Object.keys(e)[t].slice(0,-5),price:10*(t+1),quantity:A[t],onRemove:y})])})))},C=Object.keys(e).map((function(t,n){return Object(p.jsx)(h,{img:e[t].default,name:t.slice(0,-5),index:n,price:10*(n+1),onClick:N})}));return Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/shop",children:"Shop"})}),Object(p.jsx)("li",{children:Object(p.jsx)(d.b,{to:"/cart",children:"Cart"})})]})}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/shop",children:Object(p.jsx)(b,{shopItems:C})}),Object(p.jsx)(l.a,{path:"/cart",children:Object(p.jsx)(f,{cartItems:r})}),Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(O,{})})]})]})})})};a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7addd55d.chunk.js.map