(this["webpackJsonpfly-app"]=this["webpackJsonpfly-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(15),i=c.n(n),l=c(8),o=c(33),r=c.n(o),j=(c(28),c(36)),d=(c(29),c(34)),h=c.n(d),b=c(2);var O=function(e){var t=Object(a.useState)(),c=Object(l.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(),o=Object(l.a)(i,2),r=o[0],j=o[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){n(t.coords.latitude.toFixed(5)),j(t.coords.longitude.toFixed(5)),e.handleLongitude(t.coords.longitude),e.handleLatitude(t.coords.latitude)}))}),[e]),Object(b.jsxs)("div",{className:"location-section",children:[Object(b.jsx)(h.a,{style:{fontSize:90}}),Object(b.jsx)("h2",{children:"Tvoja poloha"}),Object(b.jsxs)("div",{className:"location-box",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"postion",children:s}),Object(b.jsx)("p",{className:"postion-text",children:"severnej \u0161\xedrky"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"postion",children:r}),Object(b.jsx)("p",{className:"postion-text",children:"v\xfdchodnej d\u013a\u017eky"})]})]})]})},u=c(87),x=c(86),p=c(37),f=c(88);c(30),c(31);var m=function(e){return null!==e.flyData.states?Object(b.jsx)("div",{className:"card-list",children:e.flyData.states.map((function(e,t){return Object(b.jsx)(u.a,{style:{width:"20rem"},children:Object(b.jsxs)("ul",{children:[Object(b.jsx)(u.a.Body,{className:"flight",children:Object(b.jsx)(u.a.Title,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"card-subtitle",children:"\u010d\xedslo letu"}),Object(b.jsx)("h2",{className:"card-title",children:e[1]})]})})}),Object(b.jsxs)(x.a,{className:"list-group-flush",children:[Object(b.jsx)(p.a,{children:Object(b.jsxs)("li",{children:["P\xf4vod: ",e[2]]},"a"+t)}),Object(b.jsx)(p.a,{children:Object(b.jsxs)("li",{children:["Zemepisn\xe1 d\u013a\u017eka: ",e[5]]},"b"+t)}),Object(b.jsx)(p.a,{children:Object(b.jsxs)("li",{children:["Zemepisn\xe1 \u0161\xedrka: ",e[6]]},"c"+t)}),Object(b.jsx)(p.a,{children:Object(b.jsxs)("li",{children:["R\xfdchlos\u0165 km/h: ",(3.6*e[9]).toFixed(2)]},"d"+t)}),Object(b.jsx)(p.a,{children:Object(b.jsxs)("li",{children:["Klesanie / St\xfapanie: ",e[11]]},"e"+t)})]}),Object(b.jsx)(f.a,{className:"card-button",variant:"contained",href:"https://flightaware.com/live/flight/".concat(e[1]),target:"_blank",children:"Viac"})]},"".concat(t))},"".concat(t))}))}):Object(b.jsx)("div",{className:"stats-list",children:Object(b.jsx)("h2",{children:"\u017diadne \xfadaje sa nepodarilo na\u010d\xedta\u0165!!!"})})};c(71);var v=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),i=Object(l.a)(n,2),o=i[0],d=i[1],h=Object(a.useState)(),u=Object(l.a)(h,2),x=u[0],p=u[1],f=Object(a.useState)(),v=Object(l.a)(f,2),g=v[0],k=v[1],N=Object(a.useState)(),y=Object(l.a)(N,2),S=y[0],F=y[1],w=Object(a.useState)(),L=Object(l.a)(w,2),B=L[0],C=L[1];return Object(a.useEffect)((function(){void 0!==S&&void 0!==B&&void 0!==x&&void 0!==g&&r.a.request({method:"GET",url:"https://opensky-network.org/api/states/all?lamin=48.0500&lomin=16.8500&lamax=49.4800&lomax=22.2500"}).then((function(e){s(e.data),e.data.states,d(!1)})).catch((function(e){console.error(e)}))}),[S,B,x,g]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:"Kto mi let\xed nad hlavou?"}),Object(b.jsx)("p",{children:"Sed\xed\u0161, prem\xfd\u0161\u013ea\u0161 a zrazu nad tvojou hlavou let\xed lietadlo. Odkia\u013e let\xed? Kam let\xed? Odpove\u010f ti d\xe1 t\xe1to webov\xe1 aplik\xe1cia"}),Object(b.jsx)(O,{handleLongitude:function(e){C((e-.4102).toFixed(5)),F((e+.4102).toFixed(5))},handleLatitude:function(e){k((e-.2744).toFixed(5)),p((e+.2744).toFixed(5))}})]}),Object(b.jsx)("main",{children:o?Object(b.jsx)(j.a,{animation:"border",role:"status",children:Object(b.jsx)("span",{className:"sr-only",children:"Loading..."})}):Object(b.jsx)(m,{flyData:c})}),Object(b.jsxs)("footer",{className:"App-footer",children:[Object(b.jsxs)("p",{className:"who",children:["Created by",Object(b.jsx)("a",{href:"https://boris-belica.sk/",rel:"noreferrer",target:"_blank",children:" Boris Belica"})]}),Object(b.jsxs)("p",{className:"who",children:["Fly informations thank's to",Object(b.jsx)("a",{href:"https://opensky-network.org/",rel:"noreferrer",target:"_blank",children:" Opensky Network"})]})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),g()}},[[73,1,2]]]);
//# sourceMappingURL=main.1ac4e073.chunk.js.map