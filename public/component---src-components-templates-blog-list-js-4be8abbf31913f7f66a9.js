(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0/Pd":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qzLn"),i=r("vOnD"),c=r("ibEc"),l=r("kOA+"),s=r.n(l);function d(){var e=p(["\n    margin: 0;\n  "]);return d=function(){return e},e}function m(){var e=p(["\n    font-size: 1rem;\n    min-height: auto;\n    min-width: auto;\n    margin-left: 0;\n  "]);return m=function(){return e},e}function u(){var e=p(["\n      padding: 1rem;\n    "]);return u=function(){return e},e}function g(){var e=p(["\n    align-items: flex-start;\n    flex-direction: column;\n  "]);return g=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var f=Object(i.c)(s.a).withConfig({displayName:"style__PostItemLink",componentId:"sc-17tuqy5-0"})(["color:var(--colorLetters);display:flex;text-decoration:none;&:hover{color:var(--hover);}body#grid &{background-color:var(--background);}",""],c.a.lessThan("large")(g())),h=i.c.section.withConfig({displayName:"style__PostItemWrapper",componentId:"sc-17tuqy5-1"})(["border-bottom:1px solid var(--rose);padding:2rem 2rem;width:100%;body#grid &{border:var(--rose);padding:2rem 1rem;flex-direction:column;justify-content:center;}",""],c.a.lessThan("large")(u())),v=i.c.div.withConfig({displayName:"style__PostItemTag",componentId:"sc-17tuqy5-2"})(["display:flex;align-items:center;justify-content:center;border-radius:3px;background:",";color:var(--white);font-size:1.3rem;font-weight:700;text-transform:uppercase;margin-left:1.5rem;margin-bottom:15px;flex-basis:auto;width:90px;height:40px;",""],(function(e){return e.background}),c.a.lessThan("large")(m())),y=i.c.div.withConfig({displayName:"style__PostItemInfo",componentId:"sc-17tuqy5-3"})(["flex-direction:column;margin-left:1.5rem;",""],c.a.lessThan("large")(d())),w=i.c.time.withConfig({displayName:"style__PostItemDate",componentId:"sc-17tuqy5-4"})(["font-size:0.9rem;line-height:1.2;"]),b=i.c.h1.withConfig({displayName:"style__PostItemTitle",componentId:"sc-17tuqy5-5"})(["font-size:1.6rem;font-weight:700;margin:0.2rem 0 0.5rem;line-height:1.9rem;body#grid &{line-height:1.1;margin:0.8rem 0;}"]),x=i.c.p.withConfig({displayName:"style__PostItemDescription",componentId:"sc-17tuqy5-6"})(["font-size:1.2rem;font-weight:300;line-height:1.2;"]);t.a=function(e){var t=e.slug,r=e.category,n=e.date,i=e.timeToRead,c=e.title,l=e.description,s=e.background;return a.a.createElement(f,{to:t,cover:!0,direction:"right",bg:Object(o.a)(),duration:.6},a.a.createElement(h,null,a.a.createElement(v,{background:s},r),a.a.createElement(y,null,a.a.createElement(w,null,n," • ",i," min de leitura"),a.a.createElement(b,null,c),a.a.createElement(x,null,l))))}},"26I/":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("Zttt"),i=r("vrFN"),c=r("0/Pd"),l=r("qzLn"),s=r("kOA+"),d=r.n(s),m=r("vOnD"),u=r("ibEc"),g=r("mrSG"),p=r("OXR1"),f=n.forwardRef((function(e,t){return n.createElement(p.a,Object(g.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),n.createElement("path",{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z",key:"k0"}),n.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))}));f.displayName="ArrowBackIos";var h=n.forwardRef((function(e,t){return n.createElement(p.a,Object(g.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),n.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z",key:"k0"}),n.createElement("path",{fill:"none",d:"M0 0h24v24H0z",key:"k1"}))}));h.displayName="ArrowForwardIos";function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    font-size: .8rem;\n    padding: 1rem;\n  "]);return v=function(){return e},e}var y=m.c.div.withConfig({displayName:"style__PaginationWrapper",componentId:"pnhcb7-0"})(["display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--rose);color:var(--white);padding:1.5rem 3rem;"," a{color:var(--colorLetters);text-decoration:none;transition:color 0.5s;cursor:pointer;&:hover{color:var(--hover);}}p{color:var(--colorLetters);}"],u.a.lessThan("large")(v())),w=Object(m.c)(f).withConfig({displayName:"style__ArrowLeft",componentId:"pnhcb7-1"})(["color:var(--colorLetters);width:12px;margin-right:5px;&:hover{color:var(--hover);}"]),b=Object(m.c)(h).withConfig({displayName:"style__ArrowRight",componentId:"pnhcb7-2"})(["color:var(--colorLetters);width:12px;margin-left:5px;&:hover{color:var(--hover);}"]),x=function(e){var t=e.isFirst,r=e.isLast,n=e.currentPage,o=e.numPages,i=e.prevPage,c=e.nextPage;return a.a.createElement(y,null,!t&&a.a.createElement(d.a,{to:i,cover:!0,direction:"left",bg:Object(l.a)(),duration:.6},a.a.createElement(w,null)," página anterior"),a.a.createElement("p",null,n," de ",o),!r&&a.a.createElement(d.a,{to:c,cover:!0,direction:"right",bg:Object(l.a)(),duration:.6},"próxima página",a.a.createElement(b,null)))},E=m.c.section.withConfig({displayName:"style__ListWrapper",componentId:"sc-15gyjyc-0"})(["body#grid &{background-color:var(--rose);border-bottom:1px solid var(--rose);display:grid;grid-area:posts;grid-gap:1px;grid-template-columns:repeat(auto-fit,minmax(380px,1fr));margin-top:-9px;}"]);r.d(t,"query",(function(){return k}));var k="3572607332";t.default=function(e){var t=e.data.allMarkdownRemark.edges,r=e.pageContext,n=r.currentPage,l=r.numPages,s=1===n,d=n===l,m=n-1==1?"/":"/page/"+(n-1),u="/page/"+(n+1);return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"Home"}),a.a.createElement(E,null,t.map((function(e){var t=e.node,r=t.frontmatter,n=r.category,o=r.date,i=r.description,l=r.title,s=r.background,d=t.timeToRead,m=t.fields.slug;return a.a.createElement(c.a,{slug:m,category:n,date:o,timeToRead:d,title:l,description:i,background:s})}))),a.a.createElement(x,{isFirst:s,isLast:d,currentPage:n,numPages:l,prevPage:m,nextPage:u}))}}}]);
//# sourceMappingURL=component---src-components-templates-blog-list-js-4be8abbf31913f7f66a9.js.map