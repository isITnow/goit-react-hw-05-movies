"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[955],{9955:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),c=t(2791),a=t(7689),u=t(4390),i=t(8174),o=t(184),s=function(){var e=(0,a.UO)().movieId,n=(0,c.useState)([]),t=(0,r.Z)(n,2),s=t[0],f=t[1];if((0,c.useEffect)((function(){u.b.fetchFilmReviews(e).then((function(e){var n=e.data;n.results.length?f(n.results):i.Am.warn("No reviews")})).catch((function(e){return console.log(e.message)}))}),[e]),s.length)return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"Reviews"}),(0,o.jsx)("ul",{children:s.map((function(e){var n=e.author,t=e.id,r=e.content;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:n||"no name"}),(0,o.jsx)("p",{children:r})]},t)}))})]})}},4390:function(e,n,t){t.d(n,{b:function(){return d}});var r=t(5861),c=t(7757),a=t.n(c),u=t(4569),i=t.n(u),o="https://api.themoviedb.org/3",s="d70849b39c7b399ded2dffef6ee1baa4",f=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/search/movie?&language=en-U&include_adult=true&api_key=").concat(s,"&page=").concat(t,"&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d={fetchFilmReviews:v,fetchFilmCast:l,fetchFilmByID:h,fetchFilmByQuery:p,fetchFilmTrending:f}}}]);
//# sourceMappingURL=955.7d7c63aa.chunk.js.map