(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{10:function(e,t,n){e.exports={comment:"Comment_comment__3Mz33",comment_response:"Comment_comment_response__2rqUj",body:"Comment_body__2zzxR",header:"Comment_header__3zM0p",header_date:"Comment_header_date__1LkQG"}},13:function(e,t,n){e.exports={post:"Post_post__2EB2l",body:"Post_body__2MiGR",header:"Post_header__2IptI",date:"Post_date__Kr7ri",btn:"Post_btn__2zjqp"}},15:function(e,t,n){e.exports={wrapper:"Field_wrapper__PFoPD",content:"Field_content__bZ_Ml",label:"Field_label__1ffeG",field:"Field_field__f3b1c"}},16:function(e,t,n){e.exports={wrapper:"layout_wrapper__25n3_",header:"layout_header__3ieFQ"}},23:function(e,t,n){e.exports={btn:"Button_btn__2sT6n",btn_disabled:"Button_btn_disabled__3gKEb"}},24:function(e,t,n){},38:function(e,t,n){e.exports=n(68)},43:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(35),r=n.n(o),l=(n(43),n(11)),m=n(2),i=c.a.createContext({}),s=n(12),d=n(3),u=n(19),p=n.n(u),f=("".concat("https://api-posts-demo.herokuapp.com","/posts"),"".concat("https://api-posts-demo.herokuapp.com","/comments")),v=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat(a,"-").concat(n,"-").concat(t)},h=function(e){var t=e.children,n=Object(a.useState)([]),o=Object(d.a)(n,2),r=o[0],l=o[1],m=Object(a.useState)(null),u=Object(d.a)(m,2),h=u[0],b=u[1],_=Object(a.useState)(!1),E=Object(d.a)(_,2),C=E[0],N=E[1],j=Object(a.useState)(Date.now()),g=Object(d.a)(j,2),y=g[0],O=g[1];Object(a.useEffect)((function(){O(Date.now())}),[r]);var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;N(!0),p.a.get(e).then((function(e){var t=e.data;l(void 0===t?[]:t)})).catch((function(e){b(e)})).then((function(){N(!1)}))},k=function(e){w("".concat(f,"?postId=").concat(e))};return c.a.createElement(i.Provider,{value:{comments:r,isFetching:C,lastUpdate:y,errors:h,actions:{getCommnentById:function(e){return r.find((function(t){return t.id===e}))||{}},addComment:function(e){p.a.post(f,Object(s.a)({date:v()},e)).then((function(e){var t=e.data,n=(void 0===t?{}:t).postId;n&&k(n)})).catch((function(e){b(e)}))},fetchComments:w,fetchCommnentByPostId:k}}},t)},b=n(16),_=n.n(b),E=function(){return c.a.createElement("header",{className:_.a.header},c.a.createElement("div",{className:"container"},c.a.createElement(l.b,{to:"/"},"Home")))},C=function(e){var t=e.children;return c.a.createElement("div",{className:_.a.wrapper},c.a.createElement(E,null),t)},N=n(22),j=n.n(N),g=n(37),y=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(null),l=Object(d.a)(r,2),m=l[0],i=l[1],s=Object(a.useState)(!1),u=Object(d.a)(s,2),p=u[0],f=u[1];Object(a.useEffect)((function(){v()}),[]);var v=function(){var t=Object(g.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,o(a),i(null),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),o(null),i(t.t0);case 16:return t.prev=16,f(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,12,16,19]])})));return function(){return t.apply(this,arguments)}}();return{data:c,isFetching:p,errors:m,reload:v}},O="".concat("https://api-posts-demo.herokuapp.com","/posts"),w=("".concat("https://api-posts-demo.herokuapp.com","/comments"),n(9)),k=n.n(w),x=n(17),F=function(e){var t=e.children,n=e.caption,a=e.htmlFor,o=e.className,r=t||n;return r?c.a.createElement("label",{htmlFor:a,className:o},r):null},S=n(15),A=n.n(S),I=function(e){var t=e.name,n=e.label,a=e.placeholder,o=e.type,r=void 0===o?"text":o,l=e.className;return c.a.createElement("div",{className:k()(A.a.wrapper,l)},c.a.createElement("div",{className:A.a.content},c.a.createElement(F,{htmlFor:t,caption:n,className:A.a.label}),c.a.createElement(x.a,{className:A.a.field,name:t,component:"textarea"===r?"textarea":"input",type:r,placeholder:a})))},P=n(23),B=n.n(P),M=function(e){var t=e.children,n=e.caption,a=e.className,o=e.onClick,r=e.type,l=void 0===r?"submit":r,m=e.disabled,i=void 0!==m&&m,s=t||n;return s?c.a.createElement("button",{type:l,onClick:function(){o&&!i&&o()},className:k()(B.a.btn,i&&B.a.btn_disabled,a),disabled:i},s):null},z=n(24),D=n.n(z),q=function(e){var t={};return e.user||(t.user="Required"),e.content||(t.content="Required"),t},R=function(e){var t=e.onAddComment,n=e.className,o=Object(a.useState)(!1),r=Object(d.a)(o,2),l=r[0],m=r[1];return t?c.a.createElement("div",{className:k()(D.a.post,n)},c.a.createElement(M,{caption:l?"Close Form":"Add Comment",onClick:function(){m(!l)},className:D.a.btn}),l&&c.a.createElement(x.b,{onSubmit:function(e){t&&t(e),m(!1)},initialValues:{},validate:q,render:function(e){var t=e.handleSubmit,n=function(e){var t=q(e);return!(0===Object.keys(t).length&&t.constructor===Object)}(e.values);return c.a.createElement("form",{onSubmit:t},c.a.createElement(I,{label:"User Name",name:"user",placeholder:"e.g. Bla bla"}),c.a.createElement(I,{type:"textarea",label:"Comment",name:"content",placeholder:"Notes"}),c.a.createElement(M,{caption:"Submit",disabled:n}))}})):null},G=n(13),L=n.n(G),U=function(e){var t=e.children,n=e.className,a=e.title,o=e.date,r=e.onAddComment;return c.a.createElement("div",{className:k()(L.a.post,n)},c.a.createElement("div",{className:L.a.body},c.a.createElement("span",{className:L.a.header},a,c.a.createElement("span",{className:L.a.date},o)),c.a.createElement("span",{className:L.a.content},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})),c.a.createElement(R,{onAddComment:r})))},H=function(e){var t=e.data;return c.a.createElement(U,{key:t.id,title:t.title,date:t.publish_date},t.content)},J=function(){var e=function(){var e=y(O),t=e.data;return[(void 0===t?[]:t)||[],e.isFetching,e.reload]}(),t=Object(d.a)(e,2),n=t[0],a=t[1];return c.a.createElement("div",{className:"container"},!!n&&!a&&n.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c.a.createElement(l.b,{to:"/article/".concat(e.id),key:e.id},c.a.createElement(H,{data:e}))})))},K=n(10),Q=n.n(K),T=function(e){var t=e.children,n=e.className,a=e.user,o=e.date,r=e.onAddComment;return c.a.createElement("div",{className:k()(Q.a.comment,n)},c.a.createElement("div",{className:Q.a.body},c.a.createElement("span",{className:Q.a.header},a," - ",c.a.createElement("span",{className:Q.a.header_date},o)),c.a.createElement("span",{className:Q.a.content},t),c.a.createElement(R,{onAddComment:r})))},W=function e(t){var n=t.comment,a=void 0===n?{}:n,o=t.level,r=void 0===o?1:o,l=t.onAddComment,m=a.id,i=a.user,d=a.date,u=a.content,p=a.comments,f=void 0===p?[]:p;return c.a.createElement("div",null,c.a.createElement(T,{key:m,user:i,date:d,onAddComment:function(e){l(Object(s.a)({parent_id:m},e))}},u),c.a.createElement("div",{className:Q.a.comment_response},f.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c.a.createElement(e,{comment:t,level:r+1,key:t.id})}))))},V=function(e){var t=e.comments,n=void 0===t?[]:t,a=e.loading,o=void 0!==a&&a,r=e.onAddComment,l=function e(t,n){var a=[];return t.sort((function(e,t){return e.date>t.date?1:t.date>e.date?-1:0})).reverse().filter((function(e){return e.parent_id===n})).forEach((function(n){return n.comments=e(t,n.id),a.push(n)})),a}(n,null);return o?c.a.createElement("span",null,"Loading..."):l.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c.a.createElement(W,{comment:e,key:e.id,onAddComment:r})}))},Y=function(){var e=Object(m.f)().postId,t=function(e){var t=y("".concat(O,"?id=").concat(e)),n=t.data,a=void 0===n?[]:n,c=t.isFetching,o=t.reload;return[a&&a[0]||{},c,o]}(e),n=Object(d.a)(t,1)[0],o=function(){var e=c.a.useContext(i);if(!e)throw new Error("Components cannot be rendered outside <CommentsProvider>");return e}(),r=o.comments,l=o.isFetching,u=o.actions;Object(a.useEffect)((function(){u.fetchCommnentByPostId(e)}),[]);var p=function(t){console.log(t),u.addComment(Object(s.a)({postId:e,parent_id:null},t))};return c.a.createElement("div",{className:"container"},c.a.createElement(U,{title:n.title,date:n.publish_date,onAddComment:p},n.content),c.a.createElement(V,{comments:r,loading:l,onAddComment:p}))},Z=(n(67),function(){return c.a.createElement(l.a,null,c.a.createElement(h,null,c.a.createElement(C,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/"},c.a.createElement(J,null)),c.a.createElement(m.a,{path:"/article/:postId"},c.a.createElement(Y,null)),c.a.createElement(m.a,{path:"*"},c.a.createElement(J,null))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.7fe70b90.chunk.js.map