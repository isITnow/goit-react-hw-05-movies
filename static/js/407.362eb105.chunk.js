"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{6864:function(e,n,t){t.d(n,{Z:function(){return c}});var r="container_container__yWowe",a=t(184),c=function(e){var n=e.children;return(0,a.jsx)("div",{className:r,children:n})}},9937:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(6731),a=t(184),c=function(e){var n=e.films;return(0,a.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(n),children:t})},n)}))})}},2407:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(885),a=t(2791),c=t(8174),u=t(4390),i=t(9937),o=t(1413),s=t(2982),f="saerchForm_form__auW9J",l="saerchForm_btn__FkOwi",p="saerchForm_input__4YzdX",h=t(6731),m=t(184),v=function(){var e,n=(0,h.lr)(),t=(0,r.Z)(n,2),u=t[0],i=t[1],v=(0,a.useMemo)((function(){return(0,s.Z)(u).reduce((function(e,n){var t=(0,r.Z)(n,2),a=t[0],c=t[1];return e[a]=c,e}),{})}),[u]),d=(0,a.useState)(null!==(e=v.search)&&void 0!==e?e:""),g=(0,r.Z)(d,2),y=g[0],_=g[1];return(0,m.jsxs)("form",{className:f,onSubmit:function(e){e.preventDefault(),y.trim()?i((function(e){return(0,o.Z)((0,o.Z)({},v),{},{search:y})})):c.Am.error("Please, enter your request")},children:[(0,m.jsx)("input",{name:"film",type:"text",placeholder:"\u041f\u0438\u0448\u0438 \u0434\u0430\u0432\u0430\u0439",className:p,onChange:function(e){var n=e.target.value;_(n)},value:y}),(0,m.jsx)("button",{type:"submit",className:l,children:"Search"})]})},d=t(6864),g=function(){var e=(0,h.lr)(),n=(0,r.Z)(e,1)[0].get("search"),t=(0,a.useState)([]),o=(0,r.Z)(t,2),s=o[0],f=o[1];return(0,a.useEffect)((function(){n&&u.b.fetchFilmByQuery(n).then((function(e){var t=e.data;if(!t.results.length)return f([]),void c.Am.warn('No results matching "'.concat(n,'"'));f(t.results)})).catch((function(e){return console.log(e.message)})).finally((function(){}))}),[n]),(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(v,{}),s.length>0&&(0,m.jsx)(i.Z,{films:s})]})}},4390:function(e,n,t){t.d(n,{b:function(){return v}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),i=t.n(u),o="https://api.themoviedb.org/3",s="d70849b39c7b399ded2dffef6ee1baa4",f=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/search/movie?&language=en-U&include_adult=true&api_key=").concat(s,"&page=").concat(t,"&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v={fetchFilmReviews:m,fetchFilmCast:h,fetchFilmByID:p,fetchFilmByQuery:l,fetchFilmTrending:f}}}]);
//# sourceMappingURL=407.362eb105.chunk.js.map