(this["webpackJsonpfly-app"]=this["webpackJsonpfly-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(15),i=c.n(n),l=c(8),o=c(33),r=c.n(o),j=(c(28),c(34)),d=c.n(j),b=(c(29),c(35)),h=c.n(b),O=c(2);var u=function(e){var t=Object(a.useState)(),c=Object(l.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(),o=Object(l.a)(i,2),r=o[0],j=o[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){n(t.coords.latitude.toFixed(5)),j(t.coords.longitude.toFixed(5)),e.handleLongitude(t.coords.longitude),e.handleLatitude(t.coords.latitude)}))}),[e]),Object(O.jsxs)("div",{className:"location-section",children:[Object(O.jsx)(h.a,{style:{fontSize:90}}),Object(O.jsx)("h2",{children:"Tvoja poloha"}),Object(O.jsxs)("div",{className:"location-box",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"postion",children:s}),Object(O.jsx)("p",{className:"postion-text",children:"severnej \u0161\xedrky"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"postion",children:r}),Object(O.jsx)("p",{className:"postion-text",children:"v\xfdchodnej d\u013a\u017eky"})]})]})]})},x=c(88),p=c(87),f=c(37),m=c(89);c(30),c(31);var v=function(e){return null!==e.flyData.states?Object(O.jsx)("div",{className:"card-list",children:e.flyData.states.map((function(e,t){return Object(O.jsx)(x.a,{style:{width:"20rem"},children:Object(O.jsxs)("ul",{children:[Object(O.jsx)(x.a.Body,{className:"flight",children:Object(O.jsx)(x.a.Title,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"card-subtitle",children:"\u010d\xedslo letu"}),Object(O.jsx)("h2",{className:"card-title",children:e[1]})]})})}),Object(O.jsxs)(p.a,{className:"list-group-flush",children:[Object(O.jsx)(f.a,{children:Object(O.jsxs)("li",{children:["P\xf4vod: ",e[2]]},"a"+t)}),Object(O.jsx)(f.a,{children:Object(O.jsxs)("li",{children:["Zemepisn\xe1 d\u013a\u017eka: ",e[5]]},"b"+t)}),Object(O.jsx)(f.a,{children:Object(O.jsxs)("li",{children:["Zemepisn\xe1 \u0161\xedrka: ",e[6]]},"c"+t)}),Object(O.jsx)(f.a,{children:Object(O.jsxs)("li",{children:["R\xfdchlos\u0165 km/h: ",(3.6*e[9]).toFixed(2)]},"d"+t)}),Object(O.jsx)(f.a,{children:Object(O.jsxs)("li",{children:["Klesanie / St\xfapanie: ",e[11]]},"e"+t)})]}),Object(O.jsx)(m.a,{className:"card-button",variant:"contained",href:"https://flightaware.com/live/flight/".concat(e[1]),target:"_blank",children:"Viac"})]},"".concat(t))},"".concat(t))}))}):Object(O.jsx)("div",{className:"card-list",children:Object(O.jsx)("h2",{children:"\u017diadne lety neboli n\xe1jden\xe9!"})})};c(72);var g=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),i=Object(l.a)(n,2),o=i[0],j=i[1],b=Object(a.useState)(),h=Object(l.a)(b,2),x=h[0],p=h[1],f=Object(a.useState)(),m=Object(l.a)(f,2),g=m[0],k=m[1],N=Object(a.useState)(),y=Object(l.a)(N,2),S=y[0],F=y[1],w=Object(a.useState)(),L=Object(l.a)(w,2),B=L[0],C=L[1];return Object(a.useEffect)((function(){var e={method:"GET",url:"https://opensky-network.org/api/states/all?lamin=".concat(g,"&lomin=").concat(B,"&lamax=").concat(x,"&lomax=").concat(S)};void 0!==S&&void 0!==B&&void 0!==x&&void 0!==g&&r.a.request(e).then((function(e){s(e.data),e.data.states,j(!1)})).catch((function(e){console.error(e)}))}),[S,B,x,g]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("h1",{children:"Kto mi let\xed nad hlavou?"}),Object(O.jsx)("p",{children:"Sed\xed\u0161, prem\xfd\u0161\u013ea\u0161 a zrazu nad tvojou hlavou let\xed lietadlo. Odkia\u013e let\xed? Kam let\xed? Odpove\u010f ti d\xe1 t\xe1to webov\xe1 aplik\xe1cia"}),Object(O.jsx)(u,{handleLongitude:function(e){C((e-.4102).toFixed(5)),F((e+.4102).toFixed(5))},handleLatitude:function(e){k((e-.2744).toFixed(5)),p((e+.2744).toFixed(5))}})]}),Object(O.jsx)("main",{children:o?Object(O.jsx)(d.a,{radius:50,color:"#E71D36",stroke:2,visible:!0}):Object(O.jsx)(v,{flyData:c})}),Object(O.jsxs)("footer",{className:"App-footer",children:[Object(O.jsxs)("p",{className:"who",children:["Created by",Object(O.jsx)("a",{href:"https://boris-belica.sk/",rel:"noreferrer",target:"_blank",children:" Boris Belica"})]}),Object(O.jsxs)("p",{className:"who",children:["Fly informations thank's to",Object(O.jsx)("a",{href:"https://opensky-network.org/",rel:"noreferrer",target:"_blank",children:" Opensky Network"})]})]})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),k()}},[[74,1,2]]]);
//# sourceMappingURL=main.a3283bbf.chunk.js.map