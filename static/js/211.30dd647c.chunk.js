"use strict";(self.webpackChunktweets_test=self.webpackChunktweets_test||[]).push([[211],{211:function(e,r,t){t.r(r),t.d(r,{default:function(){return V}});var a=t(433),s=t(165),o=t(861),n=t(413),l=t(439),c=t(243),i=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(r){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://644d457157f12a1d3ddbd32a.mockapi.io/api/users?limit=3&page=".concat(r));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0.message),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),u="ClearStorageBtn_clearWrapper__l9jaX",d="ClearStorageBtn_clearBtn__YcqDh",p=t(184),w=function(e){var r=e.clear;return(0,p.jsx)("div",{className:u,children:(0,p.jsx)("button",{className:d,onClick:r,type:"button",children:"Clear"})})},f="LoadMoreBtn_loadWrapper__Ro0ZI",g="LoadMoreBtn_loadBtn__eM882",m=function(e){var r=e.loadMore;return(0,p.jsx)("div",{className:f,children:(0,p.jsx)("button",{className:g,onClick:r,type:"button",children:"Load More"})})},_=t(691),v="Loader_loader_position__EoZju",h=function(){return(0,p.jsx)("div",{className:v,children:(0,p.jsx)(_.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})},x={card:"TweetCard_card__NmS7R",imageLogo:"TweetCard_imageLogo__fdmU+",backgroundImg:"TweetCard_backgroundImg__U5lv-",tweets:"TweetCard_tweets__Sc+Up",followers:"TweetCard_followers__Vv39s",followersText:"TweetCard_followersText__wghiE",btnWrapper:"TweetCard_btnWrapper__aKYEh"},j=t(791);var b=t.p+"static/media/Vector.cf8ce59140352968d546f9c171b1b3f5.svg",N="FollowButton_followBtn__tOi7Z",S=function(e){var r=e.addFollowers;return(0,p.jsx)("button",{className:N,onClick:r,type:"button",name:"followBtn",children:"Follow"})},Z="User_avatarWrap__Ydl62",C="User_line__os0Uu",k="User_circle__jbvhR",F="User_userAvatar__eWhgH",y=function(e){var r=e.avatar;return(0,p.jsx)("div",{className:Z,children:(0,p.jsx)("div",{className:C,children:(0,p.jsx)("div",{className:k,children:(0,p.jsx)("img",{className:F,src:r,alt:"User Avatar"})})})})},L="FollowingBtn_followingBtn__Qq76f",T=function(e){var r=e.removeFollowers;return(0,p.jsx)("button",{onClick:r,className:L,type:"button",children:"Following"})},B=t(402),I=function(e){var r=e.id,t=e.tweets,a=e.followers,s=e.avatar,o=e.toggleFollowers,n=e.isFollow,l=function(e){n?(o(e,!1,"minus"),B.Am.error("You are unsubscribed !")):(o(e,!0,"plus"),B.Am.success("You are following !"))};return(0,p.jsxs)("div",{className:x.card,children:[(0,p.jsx)("a",{href:"https://goit.global/ua/",children:(0,p.jsx)("img",{className:x.imageLogo,src:b,alt:"Logo"})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:x.backgroundImg}),(0,p.jsx)(y,{avatar:s}),(0,p.jsxs)("div",{className:x.followControl,children:[(0,p.jsxs)("div",{className:x.textWrap,children:[(0,p.jsxs)("p",{className:x.tweets,children:["777 ",t]}),(0,p.jsxs)("p",{className:x.followers,children:[a.toLocaleString("en-US"),(0,p.jsx)("span",{className:x.followersText,children:"followers"})]})]}),(0,p.jsx)("div",{className:x.btnWrapper,children:!1===n?(0,p.jsx)(S,{addFollowers:function(){return l(r)}}):(0,p.jsx)(T,{removeFollowers:function(){return l(r)}})})]})]})]})},U="TweetCardList_cardListWrapper__83B5D",A="TweetCardList_cardListItem__99VXb",W=t(984),J=function(e){var r=e.users,t=e.toggleFollowers;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:U,children:(0,p.jsx)("ul",{children:r.map((function(e){var r=e.id,a=e.tweets,s=e.user,o=e.followers,n=e.avatar,l=e.isFollow;return(0,p.jsx)("li",{className:A,children:(0,p.jsx)(I,{id:r,isFollow:l,tweets:a,name:s,followers:o,avatar:n,toggleFollowers:t})},(0,W.x0)())}))})})})},O=t(87),M=t(689),Y="TweetsPage_tweetsPage__9AbHJ",E="TweetsPage_backLink__izKmC",V=function(){var e=(0,j.useState)(JSON.parse(localStorage.getItem("users"))||[]),r=(0,l.Z)(e,2),t=r[0],c=r[1],u=(0,j.useState)(JSON.parse(localStorage.getItem("page"))||1),d=(0,l.Z)(u,2),f=d[0],g=d[1],_=(0,j.useState)(!1),v=(0,l.Z)(_,2),x=v[0],b=v[1],N=function(e){return e.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{isFollow:!!e.isFollow&&e.isFollow})}))};(0,j.useEffect)((function(){function e(){return(e=(0,o.Z)((0,s.Z)().mark((function e(){var r,t,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,i(1);case 4:r=e.sent,t=N(r),(a=JSON.parse(localStorage.getItem("users")))?c(a):(c(t),localStorage.setItem("users",JSON.stringify(t))),b(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),b(!1),B.Am.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var S=function(){var e=(0,o.Z)((0,s.Z)().mark((function e(){var r,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,i(f+1);case 4:r=e.sent,o=N(r),c((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(o))})),localStorage.setItem("users",JSON.stringify([].concat((0,a.Z)(t),(0,a.Z)(o)))),g((function(e){return e+1})),localStorage.setItem("page",JSON.stringify(f+1)),0===o.length?B.Am.error("Sorry we have not more users"):B.Am.success("Congratulation you added more users"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),B.Am.error(e.t0.message);case 16:return e.prev=16,b(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:Y,children:[(0,p.jsx)(O.rU,{className:E,to:"/",children:"Go Back"}),(0,p.jsx)(J,{toggleFollowers:function(e,r,a){var s=t.map((function(t){return t.id===e?(0,n.Z)((0,n.Z)({},t),{},{isFollow:r,followers:"plus"===a?t.followers+1:t.followers-1}):t}));localStorage.setItem("users",JSON.stringify(s)),c(s)},users:t}),(0,p.jsx)(B.x7,{position:"top-right"}),t.length>0&&t.length<12&&!x?(0,p.jsx)(m,{loadMore:S}):(0,p.jsx)(w,{clear:function(){localStorage.clear(),window.location.reload()}}),x&&(0,p.jsx)(h,{}),(0,p.jsx)(M.j3,{})]})}}}]);
//# sourceMappingURL=211.30dd647c.chunk.js.map