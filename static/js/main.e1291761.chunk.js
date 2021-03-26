(this["webpackJsonpjs-band-book-online-shop"]=this["webpackJsonpjs-band-book-online-shop"]||[]).push([[0],{111:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(22),o=n.n(a),u=n(17),i=n(20),s=n(52),l=(n(66),n(6)),d=n(53),b=n.n(d),j=n(49),h=(n(85),n(86),n(87),n(31)),f=n(13),p=(n(111),n(1)),O=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,121))})),g=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,122))})),x=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,123))})),k=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,120))})),v=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,124))}));var m=function(){var e=Object(u.c)(f.d.getIsLoggedIn);return Object(p.jsxs)(h.d,{children:[e&&Object(p.jsx)(h.a,{}),Object(p.jsxs)(r.Suspense,{fallback:Object(p.jsx)(b.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),children:[Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/js-band-book-online-shop/",children:e?Object(p.jsx)(l.a,{to:"/js-band-book-online-shop/catalog"}):Object(p.jsx)(l.a,{to:"/js-band-book-online-shop/login"})}),Object(p.jsx)(l.b,{exact:!0,path:"/js-band-book-online-shop/catalog",children:e?Object(p.jsx)(g,{}):Object(p.jsx)(l.a,{to:"/js-band-book-online-shop/login"})}),Object(p.jsx)(l.b,{path:"/js-band-book-online-shop/catalog/:id",children:e?Object(p.jsx)(x,{}):Object(p.jsx)(l.a,{to:"/js-band-book-online-shop/login"})}),Object(p.jsx)(l.b,{path:"/js-band-book-online-shop/cart",children:e?Object(p.jsx)(k,{}):Object(p.jsx)(l.a,{to:"/js-band-book-online-shop/login"})}),Object(p.jsx)(l.b,{path:"/js-band-book-online-shop/login",children:e?Object(p.jsx)(l.a,{exact:!0,to:"/js-band-book-online-shop/catalog"}):Object(p.jsx)(O,{})}),Object(p.jsx)(l.b,{children:Object(p.jsx)(v,{})})]}),Object(p.jsx)(j.a,{autoClose:1800})]})]})},B=n(24),y=n(4),A=n(19),I=n(55),w=n.n(I),M=n(8),C=n(18),N=C.c.cart,R=C.c.cartModalReducer,z=f.c.authorization,E=f.c.books,L=f.c.isLoading,T=f.c.bookDetails,D=f.c.error,Y=f.c.filter,S={key:"auth",storage:w.a,whitelist:["authorization"]},G=Object(B.a)(Object(y.e)({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})),X=Object(y.a)({reducer:Object(A.g)(S,Object(M.c)({authorization:z,books:E,isLoading:L,bookDetails:T,error:D,filter:Y,cart:N,cartModalReducer:R})),middleware:G,devTools:!1}),F={persistor:Object(A.h)(X),store:X};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{store:F.store,children:Object(p.jsx)(s.a,{loading:null,persistor:F.persistor,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(m,{})})})})}),document.getElementById("root"))},13:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return N})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return v}));var r,c,a,o,u=n(23),i=function(e){return e.books},s=function(e){return e.filter},l={getTokenSelector:function(e){return e.authorization.token},getBooksSelector:i,getFiltredBooks:Object(u.a)([i,s],(function(e,t){return e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))})),getFilter:s,getIsLoggedIn:function(e){return e.authorization.isLoggedIn},getBook:function(e){return e.bookDetails},getUserInfo:function(e){return e.authorization}},d=n(33),b=n(2),j=n(4),h=n(7),f=n.n(h),p=n(15),O=n(28),g={logIn:Object(j.c)("auth/login",function(){var e=Object(p.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,O.a.userLogin(t);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r());case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),getBooks:Object(j.c)("books/getBooks",function(){var e=Object(p.a)(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,O.a.getBooks(t);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r());case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),getBookById:Object(j.c)("books/getBookById",function(){var e=Object(p.a)(f.a.mark((function e(t,n){var r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,c=t.token,a=n.rejectWithValue,e.prev=2,e.next=5,O.a.getBookById(r,c);case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",a());case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}())},x=n(16),k=n(21),v={changeFilter:Object(j.b)("books/changeFilter"),signOutAction:Object(j.b)("books/signOut")},m=n(18),B=m.c.cart,y=m.c.cartModalReducer,A={userName:"",avatar:"",token:"",isLoggedIn:!1},I=Object(j.d)(A,(r={},Object(b.a)(r,v.signOutAction,(function(){return{userName:A.username,avatar:A.avatar,token:A.token,isLoggedIn:A.isLoggedIn}})),Object(b.a)(r,g.logIn.fulfilled,(function(e,t){var n=t.payload;return{userName:n.username,avatar:n.avatar,token:n.token,isLoggedIn:!0}})),r)),w=Object(j.d)([],Object(b.a)({},g.getBooks.fulfilled,(function(e,t){return t.payload}))),M=Object(j.d)({},(c={},Object(b.a)(c,g.getBookById.fulfilled,(function(e,t){return t.payload})),Object(b.a)(c,k.a.addToCart,(function(e,t){var n=t.payload;return Object(d.a)(Object(d.a)({},e),{},{count:n.count})})),c)),C=Object(j.d)("",Object(b.a)({},v.changeFilter,(function(e,t){return t.payload}))),N={authorization:I,books:w,isLoading:Object(j.d)(!1,(a={},Object(b.a)(a,g.logIn.pending,(function(){return!0})),Object(b.a)(a,g.getBooks.pending,(function(){return!0})),Object(b.a)(a,g.getBookById.pending,(function(){return!0})),Object(b.a)(a,g.logIn.fulfilled,(function(){return!1})),Object(b.a)(a,g.getBooks.fulfilled,(function(){return!1})),Object(b.a)(a,g.getBookById.fulfilled,(function(){return!1})),Object(b.a)(a,g.logIn.rejected,(function(){return!1})),Object(b.a)(a,g.getBooks.rejected,(function(){return!1})),Object(b.a)(a,g.getBookById.rejected,(function(){return!1})),Object(b.a)(a,x.a.purchaseOperation.rejected,(function(){return!1})),Object(b.a)(a,x.a.purchaseOperation.fulfilled,(function(){return!1})),Object(b.a)(a,x.a.purchaseOperation.pending,(function(){return!0})),a)),bookDetails:M,error:Object(j.d)(null,(o={},Object(b.a)(o,g.logIn.rejected,(function(e,t){return t.payload})),Object(b.a)(o,g.logIn.pending,(function(){return null})),Object(b.a)(o,g.getBooks.rejected,(function(e,t){return t.payload})),Object(b.a)(o,g.getBooks.pending,(function(){return null})),Object(b.a)(o,g.getBookById.rejected,(function(e,t){return t.payload})),Object(b.a)(o,g.getBookById.pending,(function(){return null})),Object(b.a)(o,x.a.purchaseOperation.rejected,(function(e,t){return t.payload})),Object(b.a)(o,x.a.purchaseOperation.pending,(function(){return null})),o)),filter:C,cart:B,cartModalReducer:y}},16:function(e,t,n){"use strict";var r=n(7),c=n.n(r),a=n(15),o=n(4),u=n(28),i=Object(o.c)("cart/purchase",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.books,a=t.token,o=n.rejectWithValue,e.prev=2,e.next=5,u.a.purchase(r,a);case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",o());case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}());t.a={purchaseOperation:i}},18:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return s.a})),n.d(t,"b",(function(){return l.a}));var r,c,a={getCartInfo:function(e){return e.cart},getCartModal:function(e){return e.cartModalReducer}},o=n(2),u=n(24),i=n(4),s=n(21),l=n(16),d={cart:Object(i.d)([],(r={},Object(o.a)(r,s.a.addToCart,(function(e,t){var n=t.payload,r=e.find((function(e){return e.bookId===n.bookId}));return r?(r.count+=n.count,e):[].concat(Object(u.a)(e),[n])})),Object(o.a)(r,l.a.purchaseOperation.fulfilled,(function(){return[]})),r)),cartModalReducer:Object(i.d)(!1,(c={},Object(o.a)(c,l.a.purchaseOperation.fulfilled,(function(){return!0})),Object(o.a)(c,s.a.cartModalClose,(function(){return!1})),c))}},21:function(e,t,n){"use strict";var r=n(4),c=Object(r.b)("cart/addToCart"),a=Object(r.b)("cart/cartModalClose");t.a={addToCart:c,cartModalClose:a}},28:function(e,t,n){"use strict";var r=n(24),c=n(7),a=n.n(c),o=n(15),u=n(25),i=n.n(u);i.a.defaults.baseURL="https://js-band-store-api.glitch.me/";var s=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("signin",{username:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("books",{headers:{Authorization:"Bearer ".concat(t)}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("books/".concat(t),{headers:{Authorization:"Bearer ".concat(n)}});case 2:return r=e.sent,c=r.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("purchase",{books:Object(r.a)(t)},{headers:{Authorization:"Bearer ".concat(n)}});case 2:return c=e.sent,o=c.data,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.a={getBookById:d,getBooks:l,userLogin:s,purchase:b}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return x}));n(0);var r=n(20),c=n(17),a=n(13),o=n(18),u=n(48),i=n(34),s=n.n(i),l=n(1),d=function(){var e=Object(c.b)(),t=Object(c.c)(a.d.getUserInfo),n=t.userName,i=t.avatar,d=Object(c.c)(o.d.getCartInfo);return Object(l.jsxs)("div",{className:"AppBar",children:[Object(l.jsxs)("div",{className:s.a.userMenu,children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("img",{src:i,alt:"avatar",width:"40px"}),"Wellcome",Object(l.jsx)("span",{style:{color:"blue",marginRight:"15px",marginLeft:"7px"},children:n})]}),Object(l.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return e(a.a.signOutAction())},children:"Sign out"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:s.a.header,children:[Object(l.jsx)(r.b,{exact:"true",to:"/js-band-book-online-shop/catalog",style:{color:"black"},children:Object(l.jsx)("h2",{children:"JS Band Store"})}),Object(l.jsxs)(r.b,{to:"/js-band-book-online-shop/cart",style:{color:"black"},children:[Object(l.jsx)("img",{src:u.a,alt:"cart"}),"Cart(",d.reduce((function(e,t){return e+t.count}),0),")"]})]})]}),Object(l.jsx)("hr",{})]})},b=n(6),j=n(54),h=n.n(j),f=function(e){var t=e.book,n=Object(b.g)();return Object(l.jsxs)("li",{className:h.a.card,children:[Object(l.jsx)("img",{src:t.cover,width:"100%"}),Object(l.jsx)("h4",{className:"title",children:t.title})," ",Object(l.jsx)("h5",{children:t.author}),Object(l.jsxs)("h6",{children:[t.price,"$"]}),Object(l.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){n.push("/catalog/".concat(t.id))},children:"View"})]})},p=function(e){var t=e.children;return Object(l.jsx)("div",{className:"container",style:{marginTop:"30px"},children:t})},O=n(37),g=n.n(O),x=function(e){var t=e.cartInfo,n=Object(c.b)();return Object(l.jsx)("div",{className:g.a.authModalBackdrop,children:Object(l.jsx)("div",{className:g.a.authModal,children:Object(l.jsx)("div",{className:"modal-dialog",children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)("div",{className:"modal-header",children:Object(l.jsx)("p",{className:"modal-title",children:"You successfully placed on order!"})}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("table",{border:"1px",className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Count"}),Object(l.jsx)("th",{children:"Price"}),Object(l.jsx)("th",{children:"Total"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.title}),Object(l.jsx)("td",{children:e.count}),Object(l.jsx)("td",{children:e.price}),Object(l.jsx)("td",{children:e.price*e.count})]},e.bookId)}))})]}),Object(l.jsxs)("div",{children:["Total price:",t.reduce((function(e,t){return e+t.count*t.price}),0),"$"]})]})}),Object(l.jsx)("div",{className:"modal-footer",children:Object(l.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){n(o.a.cartModalClose())},children:"Close"})})]})})})})}},34:function(e,t,n){e.exports={userMenu:"AppBar_userMenu__3MBGC",header:"AppBar_header__1Xapc"}},37:function(e,t,n){e.exports={authModalBackdrop:"CartModal_authModalBackdrop__2ZM1S",authModal:"CartModal_authModal__qHYTX"}},48:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAB9ElEQVRIS8XWTahNURTA8d/18Xiej0gk5SNlgjJSRqRM3wADBmYGTEwZoBSlTCgDkomZwshIDBgovRGJIWFggleEyEfrdbb2u+45513nnu4a3bvXXuu/9j57fXQMSTpD4krgjVifBfET99oMKsAL8akH5CF2tAVPJ/6GeV2QWBttG5z7P4jrxcKGFsAfMNnrca3EuxaAucvRXuBY+9UyeKQsnQIcuhM4O6Ag9uBW4atTBn6L1XiCrQMC38RefMFYGfgqDuEHRgYEfo9lmErTMvAu3E/XMiDw78LPEVwuA4/hc7Exfsf1NJFZiGoYshavq2p1inAnHjShYh1eFj5mR9ZUgb9jLq7gcEPwUVzMP10V+Cm24A3WNAQ/wnbEA1sevqrAp3AaceWrGoJfYX6Rx/vqwJvwrCGw2zzy+HYdeE6Rx4NkL8DXOnDo08sex52GESRfU27qRp8YEGJQuIH9DcHTzOvAd7G7sGjSsY7jfE6uA+dDQZMDfyzq9F8fdeDYeAArcKGwuoQXNVGcwyI8R+y/hihIfYFj8ySWZHZRe6c9lkwX0GPZ/22Y6A50JifOX3eyX1wymYY+cj9qQJKTOPO/4NTEwz66VlxjmcQJH2fKnt1tpicOP5sRg2Dq01WfeSmiq0XuxzDxj/QDrnlP/amHBv4DYd5PLNKsYRAAAAAASUVORK5CYII="},54:function(e,t,n){e.exports={card:"Card_card__65W55"}},66:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.e1291761.chunk.js.map