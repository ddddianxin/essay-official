webpackJsonp([54],{lmQZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gvrZ"),i=n("CCn6"),r=n("yclV");var s={name:"news",data:function(){return{cn:0,id:"",organizationId:"",val:""}},components:{headTop:a.a},mounted:function(){this.cn=Object(r.a)("inCN"),this.initData()},computed:{},methods:{initData:function(){var t,e=this;return(t=regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.id=e.$route.query.id,e.organizationId=e.$route.query.organizationId,t.next=4,Object(i.d)(e.id,e.organizationId,e.cn);case 4:n=t.sent,e.val=n.data.list[0];case 6:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function a(i,r){try{var s=e[i](r),c=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}("next")})})()}},created:function(){}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m_bg"},[n("head-top",{attrs:{webActive:"recruit",title:"人才招聘"}}),t._v(" "),n("div",{staticClass:"mDetail"},[n("h2",{staticClass:"mDetailTit"},[t._v(t._s(t.val.contentTitle))]),t._v(" "),n("div",{staticClass:"mDetailRecSource"},[n("div",[n("span",{staticClass:"wap_recSalary"},[t._v(t._s(t.val.contentSubtitle))]),t._v(" "),n("span",{staticClass:"wap_recExp"},[t._v(t._s(t.val.remark))])]),t._v(" "),n("span",[t._v(t._s(t.val.publishTime))])]),t._v(" "),n("div",{staticClass:"mDetailText",domProps:{innerHTML:t._s(t.val.contentHtml)}})])],1)},staticRenderFns:[]};var o=n("VU/8")(s,c,!1,function(t){n("pRVD")},null,null);e.default=o.exports},pRVD:function(t,e){}});
//# sourceMappingURL=54.d3b3de08e5beff9b3215.js.map