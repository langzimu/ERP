(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9b05"],{"7WNJ":function(t,n,e){"use strict";var s=e("n0l2");e.n(s).a},"9azz":function(t,n,e){"use strict";var s=e("PdkE");e.n(s).a},PdkE:function(t,n,e){},c11S:function(t,n,e){"use strict";var s=e("jo9I");e.n(s).a},jo9I:function(t,n,e){},n0l2:function(t,n,e){},ntYl:function(t,n,e){"use strict";e.r(n);var s=e("fe1z"),o=e("ETGp"),a={name:"SocialSignin",beforeCreate:function(){this},methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},i=(e("9azz"),e("KHd+")),l=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"social-signup-container"},[e("div",{staticClass:"sign-btn",on:{click:function(n){t.wechatHandleClick("wechat")}}},[e("span",{staticClass:"wx-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" 微信\n  ")]),t._v(" "),e("div",{staticClass:"sign-btn",on:{click:function(n){t.tencentHandleClick("tencent")}}},[e("span",{staticClass:"qq-svg-container"},[e("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ\n  ")])])},[],!1,null,"19ab9e3c",null);l.options.__file="socialsignin.vue";var r=l.exports,c={name:"Login",components:{LangSelect:o.a,SocialSign:r},data:function(){return{loginForm:{username:"",password:"",country:"2"},passwordType:"password",loading:!1,showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},destroyed:function(){},beforeCreate:function(){this},methods:{showPwd:function(){"password"===this.passwordType?this.passwordType="":this.passwordType="password"},handleLogin:function(){var t=this;"1"===this.loginForm.country&&this.$store.dispatch("getuseCountry",1),"2"===this.loginForm.country&&this.$store.dispatch("getuseCountry",2),this.loading=!0,Object(s.b)(this.loginForm.username,this.loginForm.password).then(function(n){100===n.data.ret?(t.$message({showClose:!0,message:n.data.msg,type:"error"}),t.loading=!1):200===n.data.ret&&(t.$message({showClose:!0,message:"login successful",type:"success"}),t.$store.dispatch("LoginByUsername",t.loginForm).then(function(n){t.loading=!1,t.$router.push({path:t.redirect||"/"})}).catch(function(){t.loading=!1}))}).catch(function(){t.loading=!1})},afterQRScan:function(){}}},u=(e("c11S"),e("7WNJ"),Object(i.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"login-container"},[e("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,"auto-complete":"on","label-position":"left"}},[e("div",{staticClass:"title-container"},[e("h3",{staticClass:"title"},[t._v(t._s(t.$t("login.title")))]),t._v(" "),e("lang-select",{staticClass:"set-language"})],1),t._v(" "),e("el-form-item",{attrs:{prop:"username"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),e("el-input",{attrs:{placeholder:t.$t("login.username"),name:"username",type:"text",clearable:"","auto-complete":"off"},model:{value:t.loginForm.username,callback:function(n){t.$set(t.loginForm,"username",n)},expression:"loginForm.username"}})],1),t._v(" "),e("el-form-item",{attrs:{prop:"password"}},[e("span",{staticClass:"svg-container"},[e("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),e("el-input",{attrs:{type:t.passwordType,placeholder:t.$t("login.password"),name:"password","auto-complete":"off"},nativeOn:{keyup:function(n){return"button"in n||!t._k(n.keyCode,"enter",13,n.key,"Enter")?t.handleLogin(n):null}},model:{value:t.loginForm.password,callback:function(n){t.$set(t.loginForm,"password",n)},expression:"loginForm.password"}}),t._v(" "),e("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[e("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),t._v(" "),e("el-form-item",[e("el-select",{staticStyle:{"margin-left":"18px",width:"88%"},attrs:{clearable:""},model:{value:t.loginForm.country,callback:function(n){t.$set(t.loginForm,"country",n)},expression:"loginForm.country"}},[e("el-option",{attrs:{label:"china",value:"1"}}),t._v(" "),e("el-option",{attrs:{label:"philippines",value:"2"}})],1)],1),t._v(" "),e("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(n){return n.preventDefault(),t.handleLogin(n)}}},[t._v(t._s(t.$t("login.logIn")))])],1),t._v(" "),e("el-dialog",{attrs:{title:t.$t("login.thirdparty"),visible:t.showDialog,"append-to-body":""},on:{"update:visible":function(n){t.showDialog=n}}},[t._v("\n    "+t._s(t.$t("login.thirdpartyTips"))+"\n    "),e("br"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("social-sign")],1)],1)},[],!1,null,"1a0865cf",null));u.options.__file="index.vue";n.default=u.exports}}]);