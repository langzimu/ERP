(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5397"],{GLI9:function(e,t,o){"use strict";o("Kw5r").default.directive("noMoreClick",{inserted:function(e,t){e.addEventListener("click",function(t){e.classList.add("is-disabled"),e.disabled=!0,setTimeout(function(){e.disabled=!1,e.classList.remove("is-disabled")},3e3)})}})},Gm5Y:function(e,t,o){"use strict";o.r(t);var r=o("ql3t"),s=o.n(r),a=(o("GLI9"),o("rwJ9")),i=o("6HaC"),l=o("BJvg"),c=o("/PQ/"),n=o("Q4Eu"),m=o("+Khs"),u=o("41Be"),d=o("LWcQ"),p={name:"NewAgent",directives:{permission:n.a,permission2:m.a},components:{MyEmp:d.a},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},settleMode:[],invoiceType:[],payMode:[],invoiceTypes:[],invoicetypeparms:{type:4,pagenum:1,pagesize:99999},isshow:!1,isshow2:!1,isshow3:!1,trader:"",empcontrol:!1,nations:[],provinces:[],cities:[],repositories:[],customerForm:{agentname:"",phone:"",type:"",pinyin:"",level:"",source:"",discount:"",countryid:this.$store.getters.countryId,provinceid:"",cityid:"",introduce:"",address:"",contactname:"",traderid:"",transmode:"",deliverymode:"",createid:"",newold:""},customerFormrules:{phone:[{required:!0,validator:function(e,t,o){if(!t)return o(new Error("手机号不能为空"));setTimeout(function(){s()(t)?o():o(new Error("请输入数字值"))},1e3)},trigger:"change"}],agentname:[{required:!0,message:"请输入客户名称",trigger:"blur"}],type:[{required:!0,message:"请选择客户类型",trigger:"change"}],countryid:[{required:!0,message:"请选择国家",trigger:"change"}],contactname:[{required:!0,message:"请输入联系人",trigger:"blur"}],accountsDays:[{required:!0,message:"请输入天数",trigger:"change"}]},customertypes:[],customertyp:4,levels:[],levelstype:5,sources:[],sourcestype:7,transmodes:[],transmodedata:6,deliverymodes:[],deliverymodedata:8}},created:function(){this.getnationlist(),this.getCategory(),this.jungleshow(),this.getTypes(),this.handlechange(this.$store.getters.countryId)},beforeCreate:function(){this},methods:{onlynumber:function(){console.log("123");var e=this.customerForm.discount.charAt(0);this.customerForm.discount=this.customerForm.discount.replace(/[^\d\.\%]/g,""),this.customerForm.discount=this.customerForm.discount.replace(/^\./g,""),this.customerForm.discount=this.customerForm.discount.replace(/\.{2,}/g,"."),this.customerForm.discount=this.customerForm.discount.replace(".","$#$").replace(/\./g,"").replace("$#$","."),"-"===e&&(this.customerForm.discount="-"+this.customerForm.discount)},getTypes:function(){var e=this;Object(a.c)(this.invoicetypeparms).then(function(t){200===t.data.ret&&(e.invoiceTypes=t.data.data.content.list)}),Object(c.j)(7).then(function(t){200===t.data.ret&&(e.payMode=t.data.data.content.list)}),Object(c.j)(5).then(function(t){200===t.data.ret&&(e.settleMode=t.data.data.content.list)})},test:function(){console.log("运送id",this.customerForm.transmode),console.log("交货方式",this.customerForm.deliverymode)},jungleshow:function(){var e=this.$store.getters.roles;this.isshow=e.includes("1-14-21-1"),this.isshow2=e.includes("1-22-28-1"),this.isshow3=e.includes("54-83-1")},checkPermission:u.a,getCategory:function(){var e=this;Object(c.j)(3).then(function(t){200===t.data.ret?e.transmodes=t.data.data.content.list:e.$notify.error({title:"wrong",message:"wrong",offset:100})}),Object(c.j)(2).then(function(t){200===t.data.ret?e.deliverymodes=t.data.data.content.list:e.$notify.error({title:"wrong",message:"wrong",offset:100})}),Object(l.k)(this.customertyp).then(function(t){200===t.data.ret?e.customertypes=t.data.data.content.list:e.$notify.error({title:"wrong",message:"wrong",offset:100})}),Object(l.k)(this.levelstype).then(function(t){200===t.data.ret?e.levels=t.data.data.content.list:e.$notify.error({title:"wrong",message:"wrong",offset:100})}),Object(l.k)(this.sourcestype).then(function(t){200===t.data.ret?e.sources=t.data.data.content.list:e.$notify.error({title:"wrong",message:"wrong",offset:100})})},getnationlist:function(){var e=this;Object(i.v)().then(function(t){200===t.data.ret?e.nations=t.data.data.content:e.$notify.error({title:"wrong",message:"wrong",offset:100})})},handlechange:function(e){var t=this;Object(i.y)(e).then(function(e){200===e.data.ret?t.provinces=e.data.data.content:t.$notify.error({title:"wrong",message:"wrong",offset:100})}),this.customerForm.provinceid="",this.customerForm.cityid="",this.cities=[]},handlechange2:function(e){var t=this;Object(i.u)(e).then(function(e){console.log(e),200===e.data.ret?t.cities=e.data.data.content:t.$notify.error({title:"wrong",message:"wrong",offset:100})}),this.customerForm.cityid=""},handlechoose:function(){this.empcontrol=!0},personName:function(e){console.log(e),this.trader=e.personName,this.customerForm.traderid=e.id},handlesave:function(){var e=this;console.log("保存的数据",this.customerForm),this.$refs.customerForm.validate(function(t){if(!t)return e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100}),!1;e.$refs.customerForm2.validate(function(t){if(!t)return e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100}),!1;e.$refs.customerForm3.validate(function(t){if(!t)return e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100}),!1;e.$refs.customerForm4.validate(function(t){if(!t)return e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100}),!1;Object(l.c)(e.customerForm).then(function(t){console.log(t),200===t.data.ret?(e.$notify({title:"successful",message:"save successful",type:"success",offset:100}),e.restAllForm(),e.$refs.customerForm.clearValidate(),e.$refs.customerForm.resetFields(),e.$refs.customerForm2.clearValidate(),e.$refs.customerForm2.resetFields(),e.$refs.customerForm3.clearValidate(),e.$refs.customerForm3.resetFields(),e.$refs.customerForm4.clearValidate(),e.$refs.customerForm4.resetFields()):e.$notify.error({title:"wrong",message:t.data.msg,offset:100})})})})})})},restAllForm:function(){this.customerForm={agentname:"",phone:"",type:"",pinyin:"",level:"",source:"",discount:"",countryid:this.$store.getters.countryId,provinceid:"",cityid:"",introduce:"",address:"",contactname:"",traderid:"",transmode:"",deliverymode:"",createid:"",newold:""},this.trader=""},handleentry:function(){var e=this;this.$refs.customerForm.validate(function(t){if(!t){e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100});var o=e.$refs.geren.offsetTop;return console.log(o),document.documentElement.scrollTop=o-100,!1}e.$refs.customerForm2.validate(function(t){if(!t){e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100});var o=e.$refs.yewu.offsetTop;return console.log(o),document.documentElement.scrollTop=o-100,!1}e.$refs.customerForm3.validate(function(t){if(!t){e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100});var o=e.$refs.caiwu.offsetTop;return console.log(o),document.documentElement.scrollTop=o-100,!1}e.$refs.customerForm4.validate(function(t){if(!t){e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100});var o=e.$refs.fuzhu.offsetTop;return console.log(o),document.documentElement.scrollTop=o-100,!1}Object(l.c)(e.customerForm).then(function(t){if(console.log(t),200===t.data.ret){e.$notify({title:"successful",message:"save successful",type:"success",offset:100}),e.restAllForm(),e.$refs.customerForm.clearValidate(),e.$refs.customerForm.resetFields(),e.$refs.customerForm2.clearValidate(),e.$refs.customerForm2.resetFields(),e.$refs.customerForm3.clearValidate(),e.$refs.customerForm3.resetFields(),e.$refs.customerForm4.clearValidate(),e.$refs.customerForm4.resetFields();var o=e.$refs.geren.offsetTop;console.log(o),document.documentElement.scrollTop=o-100}else e.$notify.error({title:"wrong",message:t.data.msg,offset:100})})})})})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/Customer/NewAgent",name:"NewAgent",fullPath:"/Customer/NewAgent",title:"NewAgent"}).then(function(e){e.visitedViews})},go_creat:function(){this.$router.push("/Customer/CustomerCategory"),this.$refs.clear.blur()},go_creat2:function(){this.$router.push("/Customer/CustomerCategory"),this.$refs.clear2.blur()},go_creat3:function(){this.$router.push("/Customer/CustomerCategory"),this.$refs.clear3.blur()},go_creat4:function(){this.$router.push("/Supplier/SupplierCategory"),this.$refs.clear4.blur()},go_creat5:function(){this.$router.push("/Supplier/SupplierCategory"),this.$refs.clear5.blur()},go_creat6:function(){this.$router.push("/Supplier/SupplierCategory"),this.$refs.clear6.blur()},go_creat7:function(){this.$router.push("/SaleCategory/SaleCategoryList"),this.$refs.clear7.blur()},go_creat8:function(){this.$router.push("/Supplier/SupplierCategory"),this.$refs.clear8.blur()}}},f=(o("J+n9"),o("KHd+")),h=Object(f.a)(p,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ERP-container"},[o("div",{staticClass:"app-container"},[o("h2",{ref:"geren",staticClass:"form-name"},[e._v(e._s(e.$t("Hmodule.basicinfo")))]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"customerForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.customerForm,rules:e.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.agentname"),prop:"agentname"}},[o("el-input",{attrs:{placeholder:"请输入供货商名",clearable:""},model:{value:e.customerForm.agentname,callback:function(t){e.$set(e.customerForm,"agentname",t)},expression:"customerForm.agentname"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.customertype"),prop:"type"}},[o("el-select",{ref:"clear",staticStyle:{width:"100%"},attrs:{value:e.customerForm.type,placeholder:"请选择经销商类型"},on:{focus:e.getCategory},model:{value:e.customerForm.type,callback:function(t){e.$set(e.customerForm,"type",t)},expression:"customerForm.type"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.customertypes,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}),e._v(" "),[e.isshow?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.level2")}},[o("el-select",{ref:"clear2",staticStyle:{width:"100%"},attrs:{value:e.customerForm.level,placeholder:"请选择经销商优质级别"},on:{focus:e.getCategory},model:{value:e.customerForm.level,callback:function(t){e.$set(e.customerForm,"level",t)},expression:"customerForm.level"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.levels,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}),e._v(" "),[e.isshow?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat2}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.source2")}},[o("el-select",{ref:"clear3",staticStyle:{width:"100%"},attrs:{value:e.customerForm.source,placeholder:"请选择客户来源"},on:{focus:e.getCategory},model:{value:e.customerForm.source,callback:function(t){e.$set(e.customerForm,"source",t)},expression:"customerForm.source"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.sources,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}),e._v(" "),[e.isshow?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat3}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.discount2"),prop:"discount"}},[o("el-input",{attrs:{placeholder:"请输入折扣",clearable:""},on:{change:e.onlynumber},model:{value:e.customerForm.discount,callback:function(t){e.$set(e.customerForm,"discount",t)},expression:"customerForm.discount"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.introduce2")}},[o("el-input",{attrs:{type:"textarea",clearable:""},model:{value:e.customerForm.introduce,callback:function(t){e.$set(e.customerForm,"introduce",t)},expression:"customerForm.introduce"}})],1)],1)],1),e._v(" "),o("h2",{ref:"yewu",staticClass:"form-name"},[e._v(e._s(e.$t("updates.ywxx")))]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"customerForm2",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.customerForm,rules:e.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.contactname"),prop:"contactname"}},[o("el-input",{attrs:{placeholder:"请输入联系人",clearable:""},model:{value:e.customerForm.contactname,callback:function(t){e.$set(e.customerForm,"contactname",e._n(t))},expression:"customerForm.contactname"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.phone2"),prop:"phone"}},[o("el-input",{attrs:{placeholder:"请输入电话号码",clearable:""},model:{value:e.customerForm.phone,callback:function(t){e.$set(e.customerForm,"phone",e._n(t))},expression:"customerForm.phone"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("public.countyrId"),prop:"countryid"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择国家"},on:{change:e.handlechange},model:{value:e.customerForm.countryid,callback:function(t){e.$set(e.customerForm,"countryid",t)},expression:"customerForm.countryid"}},e._l(e.nations,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.provinceid")}},[o("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择省"},on:{change:e.handlechange2},model:{value:e.customerForm.provinceid,callback:function(t){e.$set(e.customerForm,"provinceid",t)},expression:"customerForm.provinceid"}},e._l(e.provinces,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.cityid")}},[o("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择市"},model:{value:e.customerForm.cityid,callback:function(t){e.$set(e.customerForm,"cityid",t)},expression:"customerForm.cityid"}},e._l(e.cities,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.traderid"),prop:"address"}},[o("el-input",{attrs:{placeholder:e.$t("updates.qxz"),clearable:""},on:{focus:e.handlechoose},model:{value:e.trader,callback:function(t){e.trader=t},expression:"trader"}})],1),e._v(" "),o("my-emp",{attrs:{control:e.empcontrol},on:{"update:control":function(t){e.empcontrol=t},personName:e.personName}}),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.transmode"),prop:"address"}},[o("el-select",{ref:"clear4",staticStyle:{width:"100%"},attrs:{value:e.customerForm.transmode,placeholder:e.$t("updates.qxz")},on:{focus:e.getCategory,change:e.test},model:{value:e.customerForm.transmode,callback:function(t){e.$set(e.customerForm,"transmode",t)},expression:"customerForm.transmode"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.transmodes,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}),e._v(" "),[e.isshow2?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat4}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.deliverymode"),prop:"address"}},[o("el-select",{ref:"clear5",staticStyle:{width:"100%"},attrs:{value:e.customerForm.deliverymode,placeholder:e.$t("updates.qxz")},on:{focus:e.getCategory,change:e.test},model:{value:e.customerForm.deliverymode,callback:function(t){e.$set(e.customerForm,"deliverymode",t)},expression:"customerForm.deliverymode"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.deliverymodes,function(e,t){return o("el-option",{key:t,attrs:{value:e.id,label:e.categoryName}})}),e._v(" "),[e.isshow2?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat5}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.address2"),prop:"address"}},[o("el-input",{attrs:{placeholder:"请输入地址",clearable:""},model:{value:e.customerForm.address,callback:function(t){e.$set(e.customerForm,"address",t)},expression:"customerForm.address"}})],1)],1)],1),e._v(" "),o("h2",{ref:"caiwu",staticClass:"form-name"},[e._v(e._s(e.$t("updates.cwxx")))]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"customerForm3",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.customerForm,rules:e.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.accountsDays"),prop:"accountsDays"}},[o("el-input",{attrs:{placeholder:"请输入天数",clearable:""},model:{value:e.customerForm.accountsDays,callback:function(t){e.$set(e.customerForm,"accountsDays",e._n(t))},expression:"customerForm.accountsDays"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.settleMode")}},[o("el-select",{ref:"clear6",staticStyle:{width:"100%"},attrs:{placeholder:"请选择结算方式"},model:{value:e.customerForm.settleMode,callback:function(t){e.$set(e.customerForm,"settleMode",t)},expression:"customerForm.settleMode"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.settleMode,function(e,t){return o("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}),e._v(" "),[e.isshow2?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat6}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.currency")}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择币种"},model:{value:e.customerForm.currency,callback:function(t){e.$set(e.customerForm,"currency",t)},expression:"customerForm.currency"}},[o("el-option",{attrs:{value:"1",label:"RMB"}}),e._v(" "),o("el-option",{attrs:{value:"2",label:"USD"}})],1)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.invoiceType")}},[o("el-select",{ref:"clear7",staticStyle:{width:"100%"},attrs:{placeholder:"请选择发票类型"},model:{value:e.customerForm.invoiceType,callback:function(t){e.$set(e.customerForm,"invoiceType",t)},expression:"customerForm.invoiceType"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.invoiceTypes,function(e,t){return o("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}),e._v(" "),[e.isshow3?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat7}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.payMode")}},[o("el-select",{ref:"clear8",staticStyle:{width:"100%"},attrs:{placeholder:"请选择支付方式"},model:{value:e.customerForm.payMode,callback:function(t){e.$set(e.customerForm,"payMode",t)},expression:"customerForm.payMode"}},[o("el-option",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"",value:""}}),e._v(" "),e._l(e.payMode,function(e,t){return o("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}),e._v(" "),[e.isshow2?o("el-button",{staticStyle:{width:"100%"},attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.go_creat8}},[e._v(e._s(e.$t("updates.create")))]):e._e()]],2)],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.openingbank")}},[o("el-input",{attrs:{placeholder:"请输入开户行",clearable:""},model:{value:e.customerForm.openingbank,callback:function(t){e.$set(e.customerForm,"openingbank",t)},expression:"customerForm.openingbank"}})],1),e._v(" "),o("my-emp",{attrs:{control:e.empcontrol},on:{"update:control":function(t){e.empcontrol=t},personName:e.personName}}),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.accountname")}},[o("el-input",{attrs:{placeholder:"请输入户名",clearable:""},model:{value:e.customerForm.accountname,callback:function(t){e.$set(e.customerForm,"accountname",t)},expression:"customerForm.accountname"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.account")}},[o("el-input",{attrs:{placeholder:"请输入账号",clearable:""},model:{value:e.customerForm.account,callback:function(t){e.$set(e.customerForm,"account",t)},expression:"customerForm.account"}})],1)],1)],1),e._v(" "),o("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v(e._s(e.$t("updates.fzxx")))]),e._v(" "),o("div",{staticClass:"container"},[o("el-form",{ref:"customerForm4",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.customerForm,rules:e.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.establishmenttime")}},[o("el-date-picker",{staticStyle:{width:"100%"},attrs:{"picker-options":e.pickerOptions,placeholder:e.$t("Hmodule.xzrq"),"value-format":"yyyy-MM-dd",type:"date"},model:{value:e.customerForm.establishmenttime,callback:function(t){e.$set(e.customerForm,"establishmenttime",t)},expression:"customerForm.establishmenttime"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Customer.totalnumber")}},[o("el-input",{attrs:{placeholder:"请输入员工总数",clearable:""},model:{value:e.customerForm.totalnumber,callback:function(t){e.$set(e.customerForm,"totalnumber",e._n(t))},expression:"customerForm.totalnumber"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.corporaterepresentative")}},[o("el-input",{attrs:{placeholder:"请输入法人代表",clearable:""},model:{value:e.customerForm.corporaterepresentative,callback:function(t){e.$set(e.customerForm,"corporaterepresentative",t)},expression:"customerForm.corporaterepresentative"}})],1),e._v(" "),o("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Customer.businesslicense")}},[o("el-input",{attrs:{placeholder:"请输入营业执照号",clearable:""},model:{value:e.customerForm.businesslicense,callback:function(t){e.$set(e.customerForm,"businesslicense",t)},expression:"customerForm.businesslicense"}})],1)],1)],1),e._v(" "),o("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[o("el-button",{directives:[{name:"no-more-click",rawName:"v-no-more-click"},{name:"permission",rawName:"v-permission",value:["1-14-17-1"],expression:"['1-14-17-1']"}],attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v(e._s(e.$t("Hmodule.baoc")))]),e._v(" "),o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["1-14-17-1"],expression:"['1-14-17-1']"}],attrs:{type:"success"},on:{click:function(t){e.handleentry()}}},[e._v(e._s(e.$t("updates.jxlr")))]),e._v(" "),o("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["1-14-17-1"],expression:"['1-14-17-1']"}],attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v(e._s(e.$t("Hmodule.cancel")))])],1)])])},[],!1,null,"9d5307c8",null);h.options.__file="NewAgent.vue";t.default=h.exports},"J+n9":function(e,t,o){"use strict";var r=o("Tkkv");o.n(r).a},Tkkv:function(e,t,o){}}]);