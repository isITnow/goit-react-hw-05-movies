"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[908],{6864:function(e,n,t){t.d(n,{Z:function(){return a}});var r="container_container__yWowe",c=t(184),a=function(e){var n=e.children;return(0,c.jsx)("div",{className:r,children:n})}},1908:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(885),c=t(7689),a=t(2791),i=t(4390),s=t(6731),o="movieInfo_card__yfx-2",u="movieInfo_info__iGgAB",l="movieInfo_btn__OPtvE",f=t(184),d=function(e){var n,t,r,a=e.film,i=(0,c.TH)(),d=a.title,h=a.genres,p=a.overview,v=a.poster_path,m=a.vote_average,x=a.release_date,g="".concat(d," (").concat(x.slice(0,4),")"),j=Math.floor(10*m),_="https://image.tmdb.org/t/p/w500".concat(v),w=(null===(n=i.state)||void 0===n?void 0:n.from)||"/";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.rU,{to:w,className:l,children:"\u2190 Go back"}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("img",{width:"300",src:_,alt:d}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("h2",{children:g}),(0,f.jsx)("p",{children:"User Score: ".concat(j,"%")}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:p}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:h.length>0?h.map((function(e){return e.name})).join(", "):"no info"})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"cast",state:null!==(t=i.state)&&void 0!==t&&t.from?i.state:null,children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"reviews",state:null!==(r=i.state)&&void 0!==r&&r.from?i.state:null,children:"Reviews"})})]})]})]})},h=t(6864),p=function(){var e=(0,c.UO)().movieId,n=(0,a.useState)({}),t=(0,r.Z)(n,2),s=t[0],o=t[1],u=(0,a.useState)("idle"),l=(0,r.Z)(u,2),p=l[0],v=l[1];return(0,a.useEffect)((function(){i.b.fetchFilmByID(e).then((function(e){var n=e.data;o(n),v("success")})).catch((function(e){return console.log(e.message)}))}),[e]),(0,f.jsx)("main",{children:(0,f.jsxs)(h.Z,{children:["success"===p&&(0,f.jsx)(d,{film:s}),(0,f.jsx)(c.j3,{})]})})}},4390:function(e,n,t){t.d(n,{b:function(){return v}});var r=t(5861),c=t(7757),a=t.n(c),i=t(4569),s=t.n(i),o="https://api.themoviedb.org/3",u="d70849b39c7b399ded2dffef6ee1baa4",l=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/trending/movie/day?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/search/movie?&language=en-U&include_adult=true&api_key=").concat(u,"&page=").concat(t,"&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v={fetchFilmReviews:p,fetchFilmCast:h,fetchFilmByID:d,fetchFilmByQuery:f,fetchFilmTrending:l}}}]);
//# sourceMappingURL=908.4fbc0d3e.chunk.js.map