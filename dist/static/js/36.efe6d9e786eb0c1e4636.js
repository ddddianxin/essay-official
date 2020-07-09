webpackJsonp([36],{"4R6/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("CCn6");function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function s(n,a){try{var o=t[n](a),i=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(i).then(function(e){s("next",e)},function(e){s("throw",e)});e(i)}("next")})}}var a={name:"register",data:function(){return{form:{mobile:"",code:""},computedTime:0,rules:{mobile:[{required:!0,message:"请输入手机号"},{type:"number",message:"手机号必须为数字值"},{pattern:/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,message:"手机号格式不对",trigger:"blur"}],code:[{required:!0,message:"请输入短信验证码"},{type:"number",message:"验证码必须为数字值"}]}}},components:{headTop:r("USSz").a},mounted:function(){},computed:{},methods:{submitForm:function(e){var t,r=this;this.$refs[e].validate((t=n(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,Object(s.M)(r.form.mobile);case 3:(n=e.sent)&&r.$message({message:n.msg,type:12e3==n.status?"success":"warning"}),e.next=9;break;case 7:return console.log("error submit!!"),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,r)})),function(e){return t.apply(this,arguments)}))},getVerifyCode:function(){var e=this;return n(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.form.mobile){t.next=4;break}e.$message({message:"手机号码不能为空",type:"warning"}),t.next=14;break;case 4:if(/^1\d{10}$/gi.test(e.form.mobile)){t.next=8;break}e.$message({message:"手机格式不正确",type:"warning"}),t.next=14;break;case 8:return e.computedTime=30,e.timer=setInterval(function(){e.computedTime--,0==e.computedTime&&clearInterval(e.timer)},1e3),t.next=12,Object(s.v)(e.form.mobile);case 12:(r=t.sent)&&e.$message({message:r.msg,type:12e3==r.status?"success":"warning"});case 14:case"end":return t.stop()}},t,e)}))()}},created:function(){}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("head-top",{attrs:{webActive:"home"}}),e._v(" "),r("div",{staticClass:"bgLogin",attrs:{id:"login"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"loginBg"},[r("div",{staticClass:"regBox"},[r("div",{staticClass:"login-panel"},[r("h2",{staticClass:"tc"},[e._v("六摩尔")]),e._v(" "),r("h3",{staticClass:"tc"},[e._v("sixmol")]),e._v(" "),r("el-form",{ref:"form",staticClass:"mt15",attrs:{model:e.form,rules:e.rules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",e._n(t))},expression:"form.mobile"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"验证码",prop:"code"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"请输入短信验证码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",e._n(t))},expression:"form.code"}})],1),e._v(" "),r("el-col",{attrs:{offset:1,span:11}},[r("el-button",{staticClass:"w",attrs:{type:"primary",disabled:!!e.computedTime},on:{click:function(t){return t.preventDefault(),e.getVerifyCode(t)}}},[e._v(e._s(e.computedTime?"已发送("+e.computedTime+"s)":"获取短信验证码"))])],1)],1)],1),e._v(" "),r("el-button",{staticClass:"w mt10",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("注册")]),e._v(" "),r("p",{staticClass:"tr"},[r("router-link",{staticClass:"color6",attrs:{to:{path:"/login/forgetkey",query:{}}}},[e._v("忘记密码？")])],1)],1)],1),e._v(" "),r("div",{staticClass:"loginP_bottom tc"},[e._v("已有账号？"),r("router-link",{staticClass:"colorGreen",attrs:{to:{path:"/login/login",query:{}}}},[e._v("登录")])],1)])])])])],1)},staticRenderFns:[]};var i=r("VU/8")(a,o,!1,function(e){r("kGDF")},"data-v-3cedf039",null);t.default=i.exports},kGDF:function(e,t){}});
//# sourceMappingURL=36.efe6d9e786eb0c1e4636.js.map