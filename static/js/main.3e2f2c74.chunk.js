(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(274)},164:function(e,t,a){},168:function(e,t,a){},219:function(e,t,a){},235:function(e,t){},237:function(e,t){},245:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(4),c=a.n(o),l=(a(164),a(166),a(8)),i=a(7),s=a(12),m=a(9),u=a(11),h=(a(168),a(35)),b=a(3),d=a(137),p=a.n(d),f=a(28);a(120),a(219);var g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return void 0===this.props.email?r.a.createElement("div",{className:"contactText"},r.a.createElement("p",null)):r.a.createElement("div",{className:"contactText"},r.a.createElement(b.e,null,r.a.createElement("p",null,"You can contact me at ",r.a.createElement(p.a,{email:this.props.email}),".")))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("a",{className:"icon",href:"https://www.github.com/pillig"},r.a.createElement(h.a,null)),r.a.createElement("a",{className:"icon",href:"https://www.linkedin.com/in/parker-illig"},r.a.createElement(h.c,null)),r.a.createElement("a",{className:"icon",href:"https://twitter.com/typicalgatsby"},r.a.createElement(h.e,null)),r.a.createElement("a",{className:"icon",href:"https://www.instagram.com/pillig45/"},r.a.createElement(h.b,null)),r.a.createElement("a",{className:"icon",href:"https://steamcommunity.com/id/TheJayGatsby"},r.a.createElement(h.d,null))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={email:void 0},f.firestore().collection("email").doc("gmail").get().then(function(e){return e.exists?e.data().address:"ERROR"}).then(function(e){a.setState({email:e})}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{email:this.state.email}),r.a.createElement(E,null))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement("p",{"background-color":"#565656"},"Hey, I'm Parker. ",r.a.createElement("br",null),r.a.createElement("br",null),"I'm from Littleton, Colorado and currently living in Longmont, Colorado.",r.a.createElement("br",null),"My main hobbies are movies and gaming, but am constantly finding new things to learn about.",r.a.createElement("br",null),"I love studying world history and am currently listening to the Hardcore History and the Revolutions podcast.",r.a.createElement("br",null),"I graduated from the University of Colorado Boulder in 2017 with a Bachelor's degree in Computer Science & Economics.",r.a.createElement("br",null),r.a.createElement("br",null),"I'm currently working as a software engineer in Boulder, Colorado.",r.a.createElement("br",null),r.a.createElement("br",null),"\u79c1\u306f\u65e5\u672c\u8a9e\u3092\u52c9\u5f37\u3057\u3066\u3044\u307e\u3059\u3002"))}}]),t}(n.Component),O=a(139),j=a(276);a(245);var y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={key:void 0,image_url:""},f.firestore().collection("keys").doc("googlebooks").get().then(function(e){return e.exists?e.data().key:"ERROR"}).then(function(e){a.get_book_info(e)}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"get_book_info",value:function(e){var t=this.props.data.title[0].replace(/\s/g,"%20"),a=this.props.data.authors[0].author[0].name[0].replace(/\s/g,"%20"),n="https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(t,"+inauthor:").concat(a,"&key=").concat(e);console.log(n);var r=new XMLHttpRequest,o=this;r.addEventListener("load",function(e){var t=JSON.parse(this.responseText);if(t.totalItems>0){var a=t.items[0].volumeInfo;a.imageLinks.thumbnail&&o.setState({image_url:a.imageLinks.thumbnail})}}),r.open("GET",n),r.send()}}]),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"book-container"},r.a.createElement("div",{className:"book-image"},r.a.createElement(j.a,{width:200,preview:!1,src:this.state.image_url})))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.books),r.a.createElement("div",{className:"read-book-list"},this.props.books.map(function(e,t){return r.a.createElement(y,{data:e,key:t})}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={key:void 0,books:[]},f.firestore().collection("keys").doc("goodreads").get().then(function(e){return e.exists?e.data().key:"ERROR"}).then(function(e){a.get_books(e)}),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"get_books",value:function(e){var t="https://www.goodreads.com/review/list/".concat("94308288",".xml?key=").concat(e,"&v=2&shelf=read&sort=date_read"),a="".concat("https://cors-anywhere.herokuapp.com","/").concat(t),n=new XMLHttpRequest,r=this;n.addEventListener("load",function(e){Object(O.parseString)(this.responseText,function(e,t){var a=[],n=t.GoodreadsResponse.reviews[0].review,o=new Date,c=!0,l=!1,i=void 0;try{for(var s,m=n[Symbol.iterator]();!(c=(s=m.next()).done);c=!0){var u=s.value;new Date(u.read_at).getFullYear()===o.getFullYear()&&a.push(u.book[0])}}catch(e){l=!0,i=e}finally{try{c||null==m.return||m.return()}finally{if(l)throw i}}r.setState({books:a})})}),n.open("GET",a),n.send()}}]),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"book-list-container"},r.a.createElement("div",{className:"book-list-header"},"Books Read This Year"),r.a.createElement(w,{books:this.state.books}))}}]),t}(n.Component);f.initializeApp({apiKey:"AIzaSyC2Rd5TUOga6pTsoi6-KTKT-Fj5UcQh9Ro",authDomain:"pillig-personal-site.firebaseapp.com",projectId:"pillig-personal-site"});var N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App bg-light"},r.a.createElement("div",{className:"row"},r.a.createElement(k,{className:"about column left"}),r.a.createElement(C,{className:"goodreads column right"})),r.a.createElement("div",{className:"footer row"},r.a.createElement(v,{className:"contact"})))}}]),t}(n.Component),I=a(57),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(I.a)(a)),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.i,{className:"navbar-dark bg-dark",expand:"md"},r.a.createElement(b.j,{href:"/"},"Parker Illig"),r.a.createElement(b.k,{onClick:this.toggle}),r.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.f,{pills:!0,fill:!0,className:"ml-auto",navbar:!0},r.a.createElement(b.g,null,r.a.createElement(b.h,{href:"#about"},"About")),r.a.createElement(b.g,null,r.a.createElement(b.h,{href:"#contact"},"Contact")),r.a.createElement(b.l,{nav:!0,inNavbar:!0},r.a.createElement(b.d,{nav:!0,caret:!0},"Projects"),r.a.createElement(b.c,{className:"Projects",right:!0},r.a.createElement(b.b,{header:!0},"CSCI 3308 - Software Development & Tools"),r.a.createElement(b.b,{href:"https://github.com/pillig/CSCI3308Project"},"Your Yelp"),r.a.createElement(b.b,{header:!0},"CSCI 4830 - Big Data HCI"),r.a.createElement(b.b,{href:"https://github.com/pillig/book"},"Book 1"),r.a.createElement(b.b,{href:"https://github.com/pillig/book2"},"Book 2"),r.a.createElement(b.b,{href:"https://github.com/pillig/book3"},"Book 3"),r.a.createElement(b.b,{header:!0},"CSCI 4502 - Data Mining"),r.a.createElement(b.b,{href:"https://github.com/taylorjandrews/GitCu"},"GitCU"),r.a.createElement(b.b,{header:!0},"Personal"),r.a.createElement(b.b,{href:"https://github.com/pillig/back-bot"},"Back-bot")))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("navbar")),c.a.render(r.a.createElement(N,null),document.getElementById("info")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[159,2,1]]]);
//# sourceMappingURL=main.3e2f2c74.chunk.js.map