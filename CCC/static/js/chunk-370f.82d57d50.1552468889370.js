(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-370f"],{AX7O:function(e,t,o){},Gm5Y:function(e,t,o){"use strict";o.r(t);var r=o("ql3t"),s=o.n(r),a=o("6HaC"),l=o("BJvg"),n={name:"NewAgent",components:{MyEmp:o("LWcQ").a},data:function(){return{trader:"",empcontrol:!1,nations:[],provinces:[],cities:[],repositories:[],customerForm:{agentname:"",phone:"",type:"",pinyin:"",level:"",source:"",discount:"",countryid:"",provinceid:"",cityid:"",introduce:"",address:"",contactname:"",traderid:"",transmode:"",deliverymode:"",createid:"",newold:""},customerFormrules:{phone:[{required:!0,validator:function(e,t,o){if(!t)return o(new Error("手机号不能为空"));setTimeout(function(){s()(t)?o():o(new Error("请输入数字值"))},1e3)},trigger:"change"}],agentname:[{required:!0,message:"请输入客户名称",trigger:"blur"}],type:[{required:!0,message:"请选择客户类型",trigger:"change"}],countryid:[{required:!0,message:"请选择国家",trigger:"change"}],contactname:[{required:!0,message:"请输入联系人",trigger:"blur"}]},customertypes:[],customertyp:1,levels:[],levelstype:2,sources:[],sourcestype:3}},created:function(){this.getnationlist(),this.getCategory()},methods:{getCategory:function(){var e=this;Object(l.j)(this.customertyp).then(function(t){200===t.data.ret?e.customertypes=t.data.data.content.list:e.$notify.error({title:"错误",message:"出错了",offset:100})}),Object(l.j)(this.levelstype).then(function(t){200===t.data.ret?e.levels=t.data.data.content.list:e.$notify.error({title:"错误",message:"出错了",offset:100})}),Object(l.j)(this.sourcestype).then(function(t){200===t.data.ret?e.sources=t.data.data.content.list:e.$notify.error({title:"错误",message:"出错了",offset:100})})},getnationlist:function(){var e=this;Object(a.b)().then(function(t){200===t.data.ret?e.nations=t.data.data.content:e.$notify.error({title:"错误",message:"出错了",offset:100})})},handlechange:function(e){var t=this;Object(a.c)(e).then(function(e){200===e.data.ret?t.provinces=e.data.data.content:t.$notify.error({title:"错误",message:"出错了",offset:100})})},handlechange2:function(e){var t=this;Object(a.a)(e).then(function(e){console.log(e),200===e.data.ret?t.cities=e.data.data.content:t.$notify.error({title:"错误",message:"出错了",offset:100})})},handlechoose:function(){this.empcontrol=!0},personName:function(e){console.log(e),this.trader=e.personName,this.customerForm.traderid=e.id},handlesave:function(){var e=this;this.$refs.customerForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;Object(l.c)(e.customerForm).then(function(t){console.log(t),200===t.data.ret?(e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.customerForm.clearValidate(),e.$refs.customerForm.resetFields(),e.$refs.customerForm2.clearValidate(),e.$refs.customerForm2.resetFields()):e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})},restAllForm:function(){this.customerForm={agentname:"",phone:"",type:"",pinyin:"",level:"",source:"",discount:"",countryid:"",provinceid:"",cityid:"",introduce:"",address:"",contactname:"",traderid:"",transmode:"",deliverymode:"",createid:"",newold:""},this.trader=""},handleentry:function(){var e=this;this.$refs.customerForm.validate(function(t){if(!t){e.$notify.error({title:"错误",message:"信息未填完整",offset:100});var o=e.$refs.geren.offsetTop;return console.log(o),document.documentElement.scrollTop=o-100,!1}Object(l.c)(e.customerForm).then(function(t){if(console.log(t),200===t.data.ret){e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.customerForm.clearValidate(),e.$refs.customerForm.resetFields(),e.$refs.customerForm2.clearValidate(),e.$refs.customerForm2.resetFields();var o=e.$refs.geren.offsetTop;console.log(o),document.documentElement.scrollTop=o-100}else e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/Customer/NewAgent",name:"NewAgent",fullPath:"/Customer/NewAgent",title:"NewAgent"}).then(function(e){e.visitedViews})},updateType:function(){this.getCategory()},updateLevel:function(){this.getCategory()},updateSource:function(){this.getCategory()}}},c=(o("rQVH"),o("KHd+")),i=Object(c.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ERP-container"},[o("div",{staticClass:"app-container"},[o("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"customerForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.customerForm,rules:e.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.agentname"),prop:"agentname"}},[o("el-input",{attrs:{placeholder:"请输入供货商名",clearable:""},model:{value:e.customerForm.agentname,callback:function(t){e.$set(e.customerForm,"agentname",t)},expression:"customerForm.agentname"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.customertype"),prop:"type"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{value:e.customerForm.type,placeholder:"请选择客户类型"},on:{focus:e.updateType},model:{value:e.customerForm.type,callback:function(t){e.$set(e.customerForm,"type",t)},expression:"customerForm.type"}},e._l(e.customertypes,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.level")}},[o("el-select",{staticStyle:{width:"100%"},attrs:{value:e.customerForm.level,placeholder:"请选择客户优质级别"},on:{focus:e.updateLevel},model:{value:e.customerForm.level,callback:function(t){e.$set(e.customerForm,"level",t)},expression:"customerForm.level"}},e._l(e.levels,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.pinyin")}},[o("el-input",{attrs:{placeholder:"请输入拼音缩写",clearable:""},model:{value:e.customerForm.pinyin,callback:function(t){e.$set(e.customerForm,"pinyin",t)},expression:"customerForm.pinyin"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.source")}},[o("el-select",{staticStyle:{width:"100%"},attrs:{value:e.customerForm.source,placeholder:"请选择客户来源"},on:{focus:e.updateSource},model:{value:e.customerForm.source,callback:function(t){e.$set(e.customerForm,"source",t)},expression:"customerForm.source"}},e._l(e.sources,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.discount")}},[o("el-input",{attrs:{placeholder:"请输入折扣",clearable:""},model:{value:e.customerForm.discount,callback:function(t){e.$set(e.customerForm,"discount",e._n(t))},expression:"customerForm.discount"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.introduce")}},[o("el-input",{attrs:{type:"textarea",clearable:""},model:{value:e.customerForm.introduce,callback:function(t){e.$set(e.customerForm,"introduce",t)},expression:"customerForm.introduce"}})],1)],1)],1),e._v(" "),o("h2",{staticClass:"form-name"},[e._v("业务信息")]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"customerForm2",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.customerForm,rules:e.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.contactname"),prop:"contactname"}},[o("el-input",{attrs:{placeholder:"请输入联系人",clearable:""},model:{value:e.customerForm.contactname,callback:function(t){e.$set(e.customerForm,"contactname",e._n(t))},expression:"customerForm.contactname"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.phone2"),prop:"phone"}},[o("el-input",{attrs:{placeholder:"请输入电话号码",clearable:""},model:{value:e.customerForm.phone,callback:function(t){e.$set(e.customerForm,"phone",e._n(t))},expression:"customerForm.phone"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("public.countyrId"),prop:"countryid"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择国家"},on:{change:e.handlechange},model:{value:e.customerForm.countryid,callback:function(t){e.$set(e.customerForm,"countryid",t)},expression:"customerForm.countryid"}},e._l(e.nations,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.provinceid")}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择省"},on:{change:e.handlechange2},model:{value:e.customerForm.provinceid,callback:function(t){e.$set(e.customerForm,"provinceid",t)},expression:"customerForm.provinceid"}},e._l(e.provinces,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.cityid")}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择市"},model:{value:e.customerForm.cityid,callback:function(t){e.$set(e.customerForm,"cityid",t)},expression:"customerForm.cityid"}},e._l(e.cities,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.traderid"),prop:"address"}},[o("el-input",{attrs:{placeholder:"请选择",clearable:""},on:{focus:e.handlechoose},model:{value:e.trader,callback:function(t){e.trader=t},expression:"trader"}})],1),e._v(" "),o("my-emp",{attrs:{control:e.empcontrol},on:{"update:control":function(t){e.empcontrol=t},personName:e.personName}}),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.transmode"),prop:"address"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{value:e.customerForm.transmode,placeholder:"请选择"},model:{value:e.customerForm.transmode,callback:function(t){e.$set(e.customerForm,"transmode",t)},expression:"customerForm.transmode"}},[o("el-option",{attrs:{label:"x1",value:"1"}}),e._v(" "),o("el-option",{attrs:{label:"z2",value:"2"}})],1)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.deliverymode"),prop:"address"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{value:e.customerForm.deliverymode,placeholder:"请选择"},model:{value:e.customerForm.deliverymode,callback:function(t){e.$set(e.customerForm,"deliverymode",t)},expression:"customerForm.deliverymode"}},[o("el-option",{attrs:{label:"p1",value:"1"}}),e._v(" "),o("el-option",{attrs:{label:"q2",value:"2"}})],1)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.address2"),prop:"address"}},[o("el-input",{attrs:{placeholder:"请输入地址",clearable:""},model:{value:e.customerForm.address,callback:function(t){e.$set(e.customerForm,"address",t)},expression:"customerForm.address"}})],1)],1)],1),e._v(" "),o("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),o("el-button",{attrs:{type:"success"},on:{click:function(t){e.handleentry()}}},[e._v("继续录入")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)])])},[],!1,null,"3dc5dcfc",null);i.options.__file="NewAgent.vue";t.default=i.exports},rQVH:function(e,t,o){"use strict";var r=o("AX7O");o.n(r).a}}]);