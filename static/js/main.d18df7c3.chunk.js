(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(t){t.exports={"backend-url":"http://backend.us-south.cf.appdomain.cloud"}},255:function(t,e,n){t.exports=n.p+"static/media/logo.52c3ccde.svg"},278:function(t,e,n){t.exports=n(520)},283:function(t,e,n){},284:function(t,e,n){},520:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),i=(n(283),n(17)),l=n(18),u=n(20),s=n(19),d=n(21),f=n(11),h=(n(284),n(8)),b=n(217),g=n.n(b),p=(n(301),n(302),n(10)),m={bg:"#fff",cardBg:"#fff",for:"#6A76FF",for1:"#6A76FF",against:"#FF62A4",against1:"#FF62A4",neutral:"#B56CD2",neutral1:"#B56CD2",font:"#000",search:"#3F3A3B",searchHighlight:"#3F3A3B",linkHover:"#27d6ff",left:"#3498db",right:"#e74c3c"};function v(){var t=Object(f.a)(["\n\t/* background-color: ",";\n\tcolor: ",";\n*/\n\tborder: 1px solid #ddd;\n\tz-index: 10;\n\n\t:focus {\n\t\t/* background-color: ","; */\n\t\t/* color: ","; */\n\t\tbox-shadow: 0 0 0 0 #fff;\n\t\tborder: 1px solid #999;\n\n\t\t:hover {\n\t\t\tbox-shadow: 0 0 0 0 #fff;\n\t\t\tborder: 1px solid #666;\n\t\t}\n\t}\n\n\t:hover {\n\t\tbox-shadow: 0 0 0 0 #fff;\n\t\tborder: 1px solid #aaa;\n\t}\n"]);return v=function(){return t},t}function O(){var t=Object(f.a)(["\n\twidth: 190px;\n\t/* background-color: #424242;\n\tbox-shadow: 0 0 0 0 #000;\n\tborder: 0 solid #fff;\n\n\t:hover {\n\t\tbackground-color: #767676;\n\t}\n\n\t:active {\n\t\tbackground-color: #121212 !important;\n\t} */\n"]);return O=function(){return t},t}function j(){var t=Object(f.a)(["\n\twidth: 80%;\n\ttop: ",";\n\ttransition: top 500ms ease;\n\tmargin-top: 50px;\n"]);return j=function(){return t},t}var x=Object(h.a)(p.k)(j(),function(t){return t.center?window.innerHeight/2-50+"px":"20px"}),E=Object(h.a)(p.a)(O()),y=Object(h.a)(p.j)(v(),m.search,m.font,m.searchHighlight,m.font),k=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t)))._onFormChange=function(t){n.setState({searchQuery:t.target.value})},n._onKeyDown=function(t){"Enter"===t.key?n._handleSearch():"Escape"===t.key&&n.setState({searchQuery:""},n._handleSearch)},n._handleSearch=function(){n.props.onSearch(n.state.searchQuery)},n.state={searchQuery:""},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(x,{center:this.props.center},r.a.createElement(y,{size:"lg",placeholder:"Search...",value:this.state.searchQuery,onChange:this._onFormChange,onKeyDown:this._onKeyDown}),r.a.createElement(p.l,{type:"append"},r.a.createElement(E,{theme:"dark",onClick:this._handleSearch},"Search")))}}]),e}(r.a.Component),w=n(22),C=function(t){function e(t){var n;Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t)))._getColor=function(){switch(n.props.group){case 0:return m.for;case 1:return m.neutral;case 2:return m.against;default:return m.neutral}};var a=n.props.bias,r=parseInt((100*a).toFixed(2));return n.data=[{name:"hi",value:r},{name:"filler",value:100-r}],n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this._getColor();return r.a.createElement("div",null,r.a.createElement(w.e,{width:50,height:50},r.a.createElement(w.d,{data:this.data,cx:25,cy:25,innerRadius:12,outerRadius:20,fill:"#8884d8",paddingAngle:5},r.a.createElement(w.c,{fill:t}),r.a.createElement(w.c,{fill:"#ddd"}))))}}]),e}(r.a.Component);function S(){var t=Object(f.a)(["\n\tjustify-self: flex-end;\n\tpadding-left: 105px;\n"]);return S=function(){return t},t}function _(){var t=Object(f.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return _=function(){return t},t}function F(){var t=Object(f.a)(["\n\tpadding: 16px;\n"]);return F=function(){return t},t}function B(){var t=Object(f.a)(["\n\t/* box-shadow: ","; */\n\tbox-shadow: ",";\n\t/* border-radius: 5px; */\n"]);return B=function(){return t},t}function M(){var t=Object(f.a)(["\n\tobject-fit: cover;\n\theight: 180px;\n"]);return M=function(){return t},t}function A(){var t=Object(f.a)(["\n\tmargin: 8px;\n"]);return A=function(){return t},t}function H(){var t=Object(f.a)(["\n\tcolor: ",";\n\tline-height: 1.25;\n\tfont-style: none;\n"]);return H=function(){return t},t}function D(){var t=Object(f.a)(["\n\tcolor: ",";\n\n\t:hover {\n\t\tcolor: ",";\n\t}\n"]);return D=function(){return t},t}function K(){var t=Object(f.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n"]);return K=function(){return t},t}function N(){var t=Object(f.a)(["\n\tmargin-bottom: 8px;\n"]);return N=function(){return t},t}function L(){var t=Object(f.a)(["\n\tfont-size: 16px;\n\tmargin: 12px;\n"]);return L=function(){return t},t}var T=Object(h.a)(p.f)(L()),I=h.a.div(N()),z=(Object(h.a)(p.d)(K(),m.footer,m.font),h.a.a(D(),m.font,function(t){switch(t.group){case 0:return m.for;case 1:return m.neutral;case 2:return m.against;default:return m.neutral}})),P=h.a.span(H(),m.font),Q=h.a.div(A()),R=h.a.img(M()),W=Object(h.a)(p.b)(B(),function(t){return t.selected?"0 4px 8px 0 rgb(254,229,173,0.3), 0 6px 20px 0 rgb(254,229,173,0.26)":"0 0 0 0 rgb(0,0,0,0)"},function(t){return t.selected?"0 0 4px 2px rgb(0,0,0, 0.5)":"0 0 0 0 #fff"}),J=Object(h.a)(p.c)(F()),V=Object(h.a)(p.m)(_()),$=Object(h.a)(p.g)(S()),q=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t)))._toggleCollapse=function(){n.setState({collapse:!n.state.collapse})},n.state={collapse:!1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=(t.footer,t.item),n=t.selected,a=t.id;return r.a.createElement(I,{id:a},r.a.createElement(W,{selected:n},r.a.createElement(T,null,r.a.createElement(z,{href:e.url,group:e.group,target:"_blank"},e.headline)),r.a.createElement(R,{src:e.image}),r.a.createElement(J,null,r.a.createElement(V,null,r.a.createElement(p.g,null,r.a.createElement(p.a,{theme:"dark",pill:!0,size:"sm",onClick:this._toggleCollapse},"Summary")),r.a.createElement($,null,"Bias:"),r.a.createElement(p.g,null,r.a.createElement(C,{bias:e.subjectivity,group:e.group}))),r.a.createElement(p.m,null,r.a.createElement(p.h,{open:this.state.collapse},r.a.createElement(Q,{className:"p-3 mt-3 border rounded"},r.a.createElement(P,null,e.summary)))))))}}]),e}(r.a.Component),G=n(251);function U(){var t=Object(f.a)(["\n\tcolor: ",";\n\n\t:hover {\n\t\tcolor: ",";\n\t}\n"]);return U=function(){return t},t}function X(){var t=Object(f.a)(["\n\tbackground-color: ",";\n\tcolor: ",";\n"]);return X=function(){return t},t}function Y(){var t=Object(f.a)(["\n\tbackground-image: ",";\n\t/* color: ","; */\n\tcolor: #fff;\n"]);return Y=function(){return t},t}function Z(){var t=Object(f.a)(["\n\tmargin-bottom: 8px;\n"]);return Z=function(){return t},t}function tt(){var t=Object(f.a)(["\n\tfont-size: 14px;\n"]);return tt=function(){return t},t}function et(){var t=Object(f.a)(["\n\theight: 100%;\n\toverflow-y: auto;\n\t/* background-color: ","; */\n\tbackground-image: ",";\n\n\t::-webkit-scrollbar {\n\t\tbackground-color: #fff;\n\t\twidth:8px\n\t}\n\n\t::-webkit-scrollbar-track {\n\t\tbackground-color: ",";\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: rgba(255,255,255,0.3);\n\t\tborder-radius:16px;\n\t\tborder:4px solid rgba(255,255,255,0.3);\n\t}\n\n\t::-webkit-scrollbar-button {display:none}\n"]);return et=function(){return t},t}function nt(){var t=Object(f.a)(["\n\t/* box-shadow: 0px 0px; */\n\t/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\n"]);return nt=function(){return t},t}var at=Object(h.a)(p.b)(nt()),rt=Object(h.a)(p.c)(et(),m.cardBg,function(t){return"For"===t.category?"linear-gradient(to left, ".concat(m.for," , ").concat(m.for1,")"):"Against"===t.category?"linear-gradient(to right, ".concat(m.against," , ").concat(m.against1,")"):"linear-gradient(to right, ".concat(m.neutral," , ").concat(m.neutral1,")")},function(t){return"For"===t.category?m.for1:"Against"===t.category?m.against1:m.neutral1}),ot=(Object(h.a)(p.f)(tt()),h.a.div(Z()),Object(h.a)(p.e)(Y(),function(t){return"For"===t.category?"linear-gradient(to left, ".concat(m.for," , ").concat(m.for1,")"):"Against"===t.category?"linear-gradient(to right, ".concat(m.against," , ").concat(m.against1,")"):"linear-gradient(to right, ".concat(m.neutral," , ").concat(m.neutral1,")")},m.font)),ct=Object(h.a)(p.d)(X(),m.footer,m.font),it=(h.a.a(U(),m.font,m.linkHover),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).scrollTo=function(t){var e=document.getElementById(t),a=document.getElementById("scroller-"+n.props.header);e&&a&&a.scrollTo({top:e.offsetTop-70,left:0,behavior:"smooth"})},n._toggleCollapse=function(){n.setState({collapse:!n.state.collapse})},n._renderContent=function(){var t=n.props,e=t.items,a=t.selected;return e.map(function(t){return r.a.createElement(q,{footer:e.length,key:t.headline,item:t,selected:t.headline===a,id:t.headline})})},n._renderLoader=function(){return r.a.createElement(G.a,{height:370,width:400,speed:2,primaryColor:"rgba(255, 255, 255, 0.4)",secondaryColor:"rgba(190, 190, 190, 0.2)"},r.a.createElement("rect",{x:"16",y:"13",rx:"4",ry:"4",width:"256",height:"13"}),r.a.createElement("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"208"}),r.a.createElement("rect",{x:"17",y:"40",rx:"4",ry:"4",width:"175",height:"13"}),r.a.createElement("rect",{x:"30",y:"302",rx:"8",ry:"8",width:"121",height:"40"}),r.a.createElement("circle",{cx:"338",cy:"321",r:"31"}))},n._renderCardContent=function(){return n.props.waiting?n._renderLoader():n._renderContent()},n.state={collapse:!1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.header,a=t.items,o=1===a.length?" article":" articles";return r.a.createElement(at,{className:e},r.a.createElement(ot,{category:n},r.a.createElement("b",null,n)),r.a.createElement(rt,{category:n,id:"scroller-"+n},this._renderCardContent()),r.a.createElement(ct,null,a.length+o))}}]),e}(r.a.Component)),lt=n(155),ut=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t)))._onMouseEnter=function(t){n.setState({selected:t.title}),n.props.setSelected(t.title,t.group)},n._onMouseLeave=function(t){n.setState({selected:""}),n.props.setSelected("",-1)},n.data=n.props.data.map(function(t){return{title:t.headline,value:100*t.p_group,r:0,group:t.group}}),n.state={selected:""},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.data.map(function(t){return t.value}),n=[Math.floor(Math.min.apply(Math,Object(lt.a)(e))),Math.ceil(Math.max.apply(Math,Object(lt.a)(e)))];return r.a.createElement("div",null,r.a.createElement(w.g,{width:1280,height:45,margin:{top:0,right:10,bottom:0,left:10}},r.a.createElement(w.i,{type:"number",dataKey:"r",tick:!1,tickLine:!1,axisLine:!1}),r.a.createElement(w.h,{type:"number",dataKey:"value",domain:n,allowDecimals:!1,tickCount:3}),r.a.createElement(w.j,{type:"number",dataKey:"r",range:[350,350]}),this.data.map(function(e){var n=null;if(t.state.selected===e.title)n="rgb(0,0,0, 0.7)";else switch(e.group){case 0:n="rgb(106,118,255, 0.8)";break;case 1:n="rgb(181,108,210, 0.8)";break;case 2:n="rgb(255,98,164, 0.8)";break;default:n="rgba(255,255,255, 0.8)"}return r.a.createElement(w.f,{data:[e],onMouseEnter:t._onMouseEnter,onMouseLeave:t._onMouseLeave,fill:n,key:e.title})})))}}]),e}(r.a.Component),st=n(252),dt=n.n(st),ft=function(t){function e(t){var n;Object(i.a)(this,e),n=Object(u.a)(this,Object(s.a)(e).call(this,t));dt()();var a=n.props.trend.length;return n.data=n.props.trend.map(function(t){return{date:t.formattedAxisTime,value:t.value[0]}}).slice(a-60,a),console.log(n.data),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(w.b,{width:1280,height:250,data:this.data,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(w.h,{type:"category",dataKey:"date"}),r.a.createElement(w.i,{tickCount:2}),r.a.createElement(w.a,{type:"monotone",dataKey:"value",stroke:"rgba(241, 196, 15,1.0)",fill:"rgba(241, 196, 15,0.3)",strokeWidth:2,activeDot:{r:4}}))}}]),e}(r.a.Component);function ht(){var t=Object(f.a)(["\n\tbackground-color: rgba(241, 196, 15,1.0);\n"]);return ht=function(){return t},t}function bt(){var t=Object(f.a)(["\n\t/* background-color: ","; */\n\tbackground: ",";\n\t/* color: ","; */\n\tcolor: #fff;\n"]);return bt=function(){return t},t}function gt(){var t=Object(f.a)(["\n\tmargin-left: -20px;\n\t/* background: linear-gradient(to left, #18dcff , #ff4d4d); */\n"]);return gt=function(){return t},t}function pt(){var t=Object(f.a)(["\n\theight: 350px;\n\tmargin-bottom: 30px;\n"]);return pt=function(){return t},t}function mt(){var t=Object(f.a)(["\n\twidth: 100%;\n\theight: 150px;\n\tmargin: 8px;\n\tmargin-top: 30px;\n\t/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\n"]);return mt=function(){return t},t}function vt(){var t=Object(f.a)(["\n\tmargin-top: 30px;\n\twidth: 428px;\n\theight: 500px;\n"]);return vt=function(){return t},t}function Ot(){var t=Object(f.a)(["\n\twidth: 50%;\n"]);return Ot=function(){return t},t}function jt(){var t=Object(f.a)(["\n\tmargin-top: 20px;\n"]);return jt=function(){return t},t}var xt=h.a.div(jt()),Et=Object(h.a)(p.g)(Ot()),yt=Object(h.a)(it)(vt()),kt=Object(h.a)(p.b)(mt()),wt=Object(h.a)(kt)(pt()),Ct=Object(h.a)(p.c)(gt()),St=Object(h.a)(p.e)(bt(),m.header,"linear-gradient(to right, ".concat(m.left," , ").concat(m.right,")"),m.font),_t=Object(h.a)(p.e)(ht()),Ft=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).setSelected=function(t,e){n.setState({selected:t}),""!==t&&n.ref[e]&&n.ref[e].scrollTo(t)},n._renderWhenReady=function(){return n.props.waiting?null:r.a.createElement("div",null,r.a.createElement(p.m,null,r.a.createElement(p.i,{in:n.state.fade,timeout:1200},r.a.createElement(kt,null,r.a.createElement(St,null,r.a.createElement("b",null,"Political Spectrum")),r.a.createElement(Ct,null,r.a.createElement(ut,{data:n.props.data,setSelected:n.setSelected}))))),r.a.createElement(p.m,null,r.a.createElement(p.i,{in:n.state.fade,timeout:1800},r.a.createElement(wt,null,r.a.createElement(_t,null,r.a.createElement("b",null,"Historic Trends")),r.a.createElement(Ct,null,r.a.createElement(ft,{trend:n.props.trend}))))))},n.state={selected:"",fade:!1},n.ref=[],n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setState({fade:!0})}},{key:"render",value:function(){var t=this;return r.a.createElement(xt,{className:this.props.className},r.a.createElement(p.m,null,["For","Neutral","Against"].map(function(e,n){return r.a.createElement(p.i,{in:t.state.fade,key:e,timeout:300+250*n},r.a.createElement(Et,{key:e},r.a.createElement(yt,{header:e,key:e,items:t.props.data.filter(function(t){return t.group===n}),selected:t.state.selected,ref:function(e){t.ref[n]=e},waiting:t.props.waiting})))})),this._renderWhenReady())}}]),e}(r.a.Component),Bt=n(253),Mt=n(67),At=(n(490),n(254)),Ht=n(255),Dt=n.n(Ht);function Kt(){var t=Object(f.a)(["\n\tmargin-top: 250px;\n\tmargin-bottom: -400px;\n"]);return Kt=function(){return t},t}function Nt(){var t=Object(f.a)(["\n\theight: 200px;\n\twidth: 200px;\n\tobject-fit: cover;\n\t/* top: 200px; */\n\t/* margin-bottom: -100px; */\n"]);return Nt=function(){return t},t}function Lt(){var t=Object(f.a)(["\n\theight: ",";\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: center;\n"]);return Lt=function(){return t},t}var Tt=h.a.div(Lt(),window.innerHeight.toString()+"px"),It=h.a.img(Nt()),zt=h.a.div(Kt()),Pt=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).search=function(t){n.setState({search:t,searchSmall:""===t,waiting:!0,data:[],trend:[]}),n._runSearch(t)},n._runSearch=function(t){Mt.b.info("Searching for articles",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),Mt.b.success("Running AI algorithm",{position:"top-right",delay:3e3,autoClose:9e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),g.a.post(Bt["backend-url"]+"/search",{search:t}).then(function(t){var e=void 0===t.data.results?[]:t.data.results,a=t.data.results.length;Object(Mt.b)("Found "+a.toString()+" articles!",{position:"top-right",bodyClassName:Object(At.css)({color:"black"}),autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}),n.setState({data:e,waiting:!1,trend:JSON.parse(t.data.trends).default.timelineData})})},n._results=function(){return n.state.searchSmall?null:r.a.createElement(Ft,{data:n.state.data,waiting:n.state.waiting,trend:n.state.trend})},n._renderHeader=function(){return n.state.searchSmall?r.a.createElement(zt,null,r.a.createElement(It,{src:Dt.a}),r.a.createElement("h2",null,"InformMi")):null},n.state={search:"",searchSmall:!0,data:[],waiting:!1,trend:[]},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(Tt,null,r.a.createElement(Mt.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnVisibilityChange:!0,draggable:!0,pauseOnHover:!0}),r.a.createElement(Mt.a,null),this._renderHeader(),r.a.createElement(k,{onSearch:this.search,center:this.state.searchSmall}),this._results())}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[278,1,2]]]);
//# sourceMappingURL=main.d18df7c3.chunk.js.map