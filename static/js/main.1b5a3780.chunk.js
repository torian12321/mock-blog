(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{10:function(e,t,n){e.exports={comment:"Comment_comment__3Mz33",comment_response:"Comment_comment_response__2rqUj",body:"Comment_body__2zzxR",header:"Comment_header__3zM0p",header_date:"Comment_header_date__1LkQG"}},13:function(e,t,n){e.exports={post:"Post_post__2EB2l",body:"Post_body__2MiGR",header:"Post_header__2IptI",date:"Post_date__Kr7ri"}},15:function(e,t,n){e.exports={wrapper:"Field_wrapper__PFoPD",content:"Field_content__bZ_Ml",label:"Field_label__1ffeG",field:"Field_field__f3b1c"}},16:function(e,t,n){e.exports={btn:"AddComment_btn__2iVx1",formContainer:"AddComment_formContainer__2si1H"}},17:function(e,t,n){e.exports={wrapper:"layout_wrapper__25n3_",header:"layout_header__3ieFQ"}},24:function(e,t,n){e.exports={btn:"Button_btn__2sT6n",btn_disabled:"Button_btn_disabled__3gKEb"}},38:function(e,t,n){e.exports=n(68)},43:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(35),r=n.n(c),l=(n(43),n(11)),m=n(2),i=o.a.createContext({}),s=n(12),d=n(3),u=n(20),p=n.n(u),f=("".concat("https://api-posts-demo.herokuapp.com","/posts"),"".concat("https://api-posts-demo.herokuapp.com","/comments")),b=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return"".concat(a,"-").concat(n,"-").concat(t)},v=function(e){var t=e.children,n=Object(a.useState)([]),c=Object(d.a)(n,2),r=c[0],l=c[1],m=Object(a.useState)(null),u=Object(d.a)(m,2),v=u[0],h=u[1],_=Object(a.useState)(!1),E=Object(d.a)(_,2),C=E[0],N=E[1],g=Object(a.useState)(Date.now()),O=Object(d.a)(g,2),j=O[0],y=O[1];Object(a.useEffect)((function(){y(Date.now())}),[r]);var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f;N(!0),p.a.get(e).then((function(e){var t=e.data;l(void 0===t?[]:t)})).catch((function(e){h(e)})).then((function(){N(!1)}))},w=function(e){k("".concat(f,"?postId=").concat(e))};return o.a.createElement(i.Provider,{value:{comments:r,isFetching:C,lastUpdate:j,errors:v,actions:{getCommnentById:function(e){return r.find((function(t){return t.id===e}))||{}},addComment:function(e){p.a.post(f,Object(s.a)({date:b()},e)).then((function(e){var t=e.data,n=(void 0===t?{}:t).postId;n&&w(n)})).catch((function(e){h(e)}))},fetchComments:k,fetchCommnentByPostId:w}}},t)},h=n(17),_=n.n(h),E={HOME:"".concat("/mock-blog/"),ARTICLE_DETAIL:"".concat("/mock-blog/","article/:postId")},C=function(e){return E.ARTICLE_DETAIL.replace(":postId",e)},N=function(){return o.a.createElement("header",{className:_.a.header},o.a.createElement("nav",{className:"container"},o.a.createElement(l.b,{to:E.HOME},"Home")))},g=function(e){var t=e.children;return o.a.createElement("div",{className:_.a.wrapper},o.a.createElement(N,null),t)},O=n(23),j=n.n(O),y=n(37),k=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),o=n[0],c=n[1],r=Object(a.useState)(null),l=Object(d.a)(r,2),m=l[0],i=l[1],s=Object(a.useState)(!1),u=Object(d.a)(s,2),p=u[0],f=u[1];Object(a.useEffect)((function(){b()}),[]);var b=function(){var t=Object(y.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c(a),i(null),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),c(null),i(t.t0);case 16:return t.prev=16,f(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,12,16,19]])})));return function(){return t.apply(this,arguments)}}();return{data:o,isFetching:p,errors:m,reload:b}},w="".concat("https://api-posts-demo.herokuapp.com","/posts"),x=("".concat("https://api-posts-demo.herokuapp.com","/comments"),n(9)),A=n.n(x),I=n(18),F=function(e){var t=e.children,n=e.caption,a=e.htmlFor,c=e.className,r=t||n;return r?o.a.createElement("label",{htmlFor:a,className:c},r):null},S=n(15),M=n.n(S),P=function(e){var t=e.name,n=e.label,a=e.placeholder,c=e.type,r=void 0===c?"text":c,l=e.className;return o.a.createElement("div",{className:A()(M.a.wrapper,l)},o.a.createElement("div",{className:M.a.content},o.a.createElement(F,{htmlFor:t,caption:n,className:M.a.label}),o.a.createElement(I.a,{className:M.a.field,name:t,component:"textarea"===r?"textarea":"input",type:r,placeholder:a})))},B=n(24),L=n.n(B),D=function(e){var t=e.children,n=e.caption,a=e.className,c=e.onClick,r=e.type,l=void 0===r?"submit":r,m=e.disabled,i=void 0!==m&&m,s=t||n;return s?o.a.createElement("button",{type:l,onClick:function(){c&&!i&&c()},className:A()(L.a.btn,i&&L.a.btn_disabled,a),disabled:i},s):null},T=n(16),R=n.n(T),H=function(e){var t={};return e.user||(t.user="Required"),e.content||(t.content="Required"),t},z=function(e){var t=e.onAddComment,n=e.className,c=Object(a.useState)(!1),r=Object(d.a)(c,2),l=r[0],m=r[1];return t?o.a.createElement("div",{className:A()(R.a.post,n)},o.a.createElement(D,{caption:l?"Close Form":"Add Comment",onClick:function(){m(!l)},className:R.a.btn}),l&&o.a.createElement("div",{className:R.a.formContainer},o.a.createElement(I.b,{onSubmit:function(e){t&&t(e),m(!1)},initialValues:{},validate:H,render:function(e){var t=e.handleSubmit,n=function(e){var t=H(e);return!(0===Object.keys(t).length&&t.constructor===Object)}(e.values);return o.a.createElement("form",{onSubmit:t},o.a.createElement(P,{label:"User Name",name:"user",placeholder:"e.g. Bla bla"}),o.a.createElement(P,{type:"textarea",label:"Comment",name:"content",placeholder:"Notes"}),o.a.createElement(D,{caption:"Submit",disabled:n,className:R.a.btn}))}}))):null},q=n(13),G=n.n(q),U=function(e){var t=e.children,n=e.className,a=e.title,c=e.date,r=e.onAddComment;return o.a.createElement("article",{className:A()(G.a.post,n)},o.a.createElement("div",{className:G.a.body},o.a.createElement("h1",{className:G.a.header},a,o.a.createElement("span",{className:G.a.date},c)),o.a.createElement("span",{className:G.a.content},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})),o.a.createElement(z,{onAddComment:r})))},J=function(e){var t=e.data;return o.a.createElement(U,{key:t.id,title:t.title,date:t.publish_date},t.content)},K=function(){var e=function(){var e=k(w),t=e.data;return[(void 0===t?[]:t)||[],e.isFetching,e.reload]}(),t=Object(d.a)(e,2),n=t[0],a=t[1];return o.a.createElement("div",{className:"container"},!!n&&!a&&n.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.createElement(l.b,{to:C(e.id),key:e.id},o.a.createElement(J,{data:e}))})))},Q=n(10),V=n.n(Q),W=function(e){var t=e.children,n=e.className,a=e.user,c=e.date,r=e.onAddComment;return o.a.createElement("div",{className:A()(V.a.comment,n)},o.a.createElement("div",{className:V.a.body},o.a.createElement("span",{className:V.a.header},a," - ",o.a.createElement("span",{className:V.a.header_date},c)),o.a.createElement("span",{className:V.a.content},t),o.a.createElement(z,{onAddComment:r})))},Y=function e(t){var n=t.comment,a=void 0===n?{}:n,c=t.level,r=void 0===c?1:c,l=t.onAddComment,m=a.id,i=a.user,d=a.date,u=a.content,p=a.comments,f=void 0===p?[]:p;return o.a.createElement("div",null,o.a.createElement(W,{key:m,user:i,date:d,onAddComment:function(e){l(Object(s.a)({parent_id:m},e))}},u),o.a.createElement("div",{className:V.a.comment_response},f.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.createElement(e,{comment:t,level:r+1,key:t.id})}))))},Z=function(e){var t=e.comments,n=void 0===t?[]:t,a=e.loading,c=void 0!==a&&a,r=e.onAddComment,l=function e(t,n){var a=[];return t.sort((function(e,t){return e.date>t.date?1:t.date>e.date?-1:0})).reverse().filter((function(e){return e.parent_id===n})).forEach((function(n){return n.comments=e(t,n.id),a.push(n)})),a}(n,null);return c?o.a.createElement("span",null,"Loading..."):l.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.a.createElement(Y,{comment:e,key:e.id,onAddComment:r})}))},$=function(){var e=Object(m.f)().postId,t=function(e){var t=k("".concat(w,"?id=").concat(e)),n=t.data,a=void 0===n?[]:n,o=t.isFetching,c=t.reload;return[a&&a[0]||{},o,c]}(e),n=Object(d.a)(t,1)[0],c=function(){var e=o.a.useContext(i);if(!e)throw new Error("Components cannot be rendered outside <CommentsProvider>");return e}(),r=c.comments,l=c.isFetching,u=c.actions;Object(a.useEffect)((function(){u.fetchCommnentByPostId(e)}),[]);var p=function(t){console.log(t),u.addComment(Object(s.a)({postId:e,parent_id:null},t))};return o.a.createElement("div",{className:"container"},o.a.createElement(U,{title:n.title,date:n.publish_date,onAddComment:p},n.content),o.a.createElement(Z,{comments:r,loading:l,onAddComment:p}))},X=(n(67),function(){return o.a.createElement(l.a,null,o.a.createElement(v,null,o.a.createElement(g,null,o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:E.HOME},o.a.createElement(K,null)),o.a.createElement(m.a,{path:E.ARTICLE_DETAIL},o.a.createElement($,null)),o.a.createElement(m.a,{path:"*"},o.a.createElement(K,null))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.1b5a3780.chunk.js.map