(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(57)},30:function(e,a,t){},31:function(e,a,t){},34:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=t(5),s=t(6),i=t(8),m=t(7),u=t(9),h=(t(30),t(31),t(4)),d=t.n(h),p=t(11),v=t(3),E=t(59),b=(t(34),t(21)),f=t.n(b),g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).onSubmit=function(){f.a.get("https://ftl-frontend-test.herokuapp.com/interest?amount=".concat(t.state.loan,"&numMonths=").concat(t.state.duration)).then(function(e){console.log(e.data),t.setState({interest:e.data.interestRate,monthlyPay:e.data.monthlyPayment.amount,principal:e.data.principal.amount})}).catch(function(e){return console.log(e)})},t.state={duration:"6",loan:500,isLoan:!1,interest:"",monthlyPay:"",principal:""},t.onInputChange=t.onInputChange.bind(Object(v.a)(Object(v.a)(t))),t.onRangeChange=t.onRangeChange.bind(Object(v.a)(Object(v.a)(t))),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"onInputChange",value:function(){var e=Object(p.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({duration:a.target.value});case 2:this.onSubmit();case 3:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"onRangeChange",value:function(){var e=Object(p.a)(d.a.mark(function e(a){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({loan:a.target.value});case 2:this.onSubmit();case 3:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement("h1",null,"Interest Finder"),r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,{style:{fontWeight:"500"}},"Enter the Loan duration : "),r.a.createElement("select",{className:"form-control input",value:this.state.duration,onChange:this.onInputChange},r.a.createElement("option",{value:"6"},"6 months"),r.a.createElement("option",{value:"7"},"7 months"),r.a.createElement("option",{value:"8"},"8 months"),r.a.createElement("option",{value:"9"},"9 months"),r.a.createElement("option",{value:"10"},"10 months"),r.a.createElement("option",{value:"11"},"11 months"),r.a.createElement("option",{value:"12"},"12 months")),r.a.createElement("div",{className:"range-container"},r.a.createElement("div",{className:"range-slider"},r.a.createElement("span",{id:"rs-bullet",className:"rs-label"},this.state.loan),r.a.createElement("input",{id:"rs-range-line",className:"rs-range",type:"range",value:this.state.loan,onChange:this.onRangeChange,min:"500",max:"5000",step:"50"})),r.a.createElement("div",{className:"box-minmax"},r.a.createElement("span",null,"$500"),r.a.createElement("span",null,"$5000"))))),r.a.createElement("div",{className:"output"},r.a.createElement("h5",null,"Interest - ",this.state.interest,"%"),r.a.createElement("h6",null,"Monthly Payment - $",this.state.monthlyPay),r.a.createElement("h6",null,"Principal amount - $",this.state.principal)),r.a.createElement("div",{className:"copyright"},r.a.createElement("h4",null,"By Shubham Dhage")))}}]),a}(n.Component);function N(){return r.a.createElement("div",{className:"Layout"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mx-auto"},r.a.createElement("div",{className:"col "},r.a.createElement("div",{className:"marvel-device iphone-x"},r.a.createElement("div",{className:"notch"},r.a.createElement("div",{className:"camera"}),r.a.createElement("div",{className:"speaker"})),r.a.createElement("div",{className:"top-bar"}),r.a.createElement("div",{className:"sleep"}),r.a.createElement("div",{className:"bottom-bar"}),r.a.createElement("div",{className:"volume"}),r.a.createElement("div",{className:"overflow"},r.a.createElement("div",{className:"shadow shadow--tr"}),r.a.createElement("div",{className:"shadow shadow--tl"}),r.a.createElement("div",{className:"shadow shadow--br"}),r.a.createElement("div",{className:"shadow shadow--bl"})),r.a.createElement("div",{className:"inner-shadow"}),r.a.createElement("div",{className:"screen"},r.a.createElement("div",{className:"form-calc"},r.a.createElement(g,null))))))))}var w=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(56);c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.9c220715.chunk.js.map