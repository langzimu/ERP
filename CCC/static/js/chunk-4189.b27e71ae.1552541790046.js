(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4189"],{"10Hk":function(t,e,a){},"2xeY":function(t,e,a){},"C+hE":function(t,e,a){"use strict";var o=a("2xeY");a.n(o).a},aVBj:function(t,e,a){"use strict";a.r(e);var o=a("P2sY"),r=a.n(o),s=a("BJvg"),i=a("ZySA"),l=a("Mz3J"),n=a("ql3t"),c=a.n(n),m=a("6HaC"),u={components:{MyEmp:a("LWcQ").a},props:{control:{type:Boolean,default:!1},editdata:{type:Object,default:null}},data:function(){return{editVisible:this.control,trader:this.editdata.traderName,empcontrol:!1,nations:[],provinces:[],cities:[],repositories:[],customerForm:this.editdata,customerFormrules:{phone:[{required:!0,validator:function(t,e,a){if(!e)return a(new Error("手机号不能为空"));setTimeout(function(){c()(e)?a():a(new Error("请输入数字值"))},1e3)},trigger:"change"}],agentName:[{required:!0,message:"请输入客户名称",trigger:"blur"}],type:[{required:!0,message:"请选择客户类型",trigger:"change"}],countryid:[{required:!0,message:"请选择国家",trigger:"change"}],contactName:[{required:!0,message:"请输入联系人",trigger:"blur"}]},customertypes:[],customertyp:1,levels:[],levelstype:2,sources:[],sourcestype:3}},watch:{control:function(){this.editVisible=this.control},editdata:function(){this.customerForm=this.editdata,this.trader=this.editdata.traderName,console.log(this.editdata)}},created:function(){this.getnationlist(),this.getCategory()},methods:{getCategory:function(){var t=this;Object(s.j)(this.customertyp).then(function(e){200===e.data.ret&&(t.customertypes=e.data.data.content.list)}),Object(s.j)(this.levelstype).then(function(e){200===e.data.ret&&(t.levels=e.data.data.content.list)}),Object(s.j)(this.sourcestype).then(function(e){200===e.data.ret&&(t.sources=e.data.data.content.list)})},getnationlist:function(){var t=this;Object(m.b)().then(function(e){200===e.data.ret&&(t.nations=e.data.data.content)})},handlechange:function(t){var e=this;Object(m.c)(t).then(function(t){200===t.data.ret&&(e.provinces=t.data.data.content)})},handlechange2:function(t){var e=this;Object(m.a)(t).then(function(t){console.log(t),200===t.data.ret&&(e.cities=t.data.data.content)})},handlechoose:function(){this.empcontrol=!0},personName:function(t){console.log(t),this.trader=t.personName,this.customerForm.traderid=t.id},handleEditok:function(){var t=this;Object(s.n)(this.customerForm).then(function(e){200===e.data.ret?(t.$notify({title:"操作成功",message:"操作成功",type:"success",duration:1e3,offset:100}),t.$emit("rest",!0),t.$refs.customerForm.clearValidate(),t.$refs.customerForm.resetFields(),t.$refs.customerForm2.clearValidate(),t.$refs.customerForm2.resetFields(),t.editVisible=!1):t.$notify.error({title:"错误",message:"出错了",offset:100})})},handlecancel:function(){this.$refs.customerForm.clearValidate(),this.$refs.customerForm.resetFields(),this.$refs.customerForm2.clearValidate(),this.$refs.customerForm2.resetFields(),this.editVisible=!1}}},d=(a("C+hE"),a("KHd+")),p=Object(d.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.editVisible,control:t.control,editdata:t.editdata,"close-on-press-escape":!1,top:"10px",title:"修改经销商"},on:{"update:visible":function(e){t.editVisible=e},close:function(e){t.$emit("update:control",!1)}}},[a("h2",{ref:"geren",staticClass:"form-name"},[t._v("基本信息")]),t._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"customerForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:t.customerForm,rules:t.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.agentname"),prop:"agentName"}},[a("el-input",{attrs:{placeholder:"请输入供货商名",clearable:""},model:{value:t.customerForm.agentName,callback:function(e){t.$set(t.customerForm,"agentName",e)},expression:"customerForm.agentName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.customertype"),prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.customerForm.type,placeholder:"请选择客户类型"},model:{value:t.customerForm.type,callback:function(e){t.$set(t.customerForm,"type",e)},expression:"customerForm.type"}},t._l(t.customertypes,function(t,e){return a("el-option",{key:e,attrs:{value:t.id,label:t.categoryName}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.level")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.customerForm.level,placeholder:"请选择客户优质级别"},model:{value:t.customerForm.level,callback:function(e){t.$set(t.customerForm,"level",e)},expression:"customerForm.level"}},t._l(t.levels,function(t,e){return a("el-option",{key:e,attrs:{value:t.id,label:t.categoryName}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.pinyin")}},[a("el-input",{attrs:{placeholder:"请输入拼音缩写",clearable:""},model:{value:t.customerForm.pinyin,callback:function(e){t.$set(t.customerForm,"pinyin",e)},expression:"customerForm.pinyin"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.source")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.customerForm.source,placeholder:"请选择客户来源"},model:{value:t.customerForm.source,callback:function(e){t.$set(t.customerForm,"source",e)},expression:"customerForm.source"}},t._l(t.sources,function(t,e){return a("el-option",{key:e,attrs:{value:t.id,label:t.categoryName}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.discount")}},[a("el-input",{attrs:{placeholder:"请输入折扣",clearable:""},model:{value:t.customerForm.discount,callback:function(e){t.$set(t.customerForm,"discount",t._n(e))},expression:"customerForm.discount"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("Customer.introduce")}},[a("el-input",{attrs:{type:"textarea",clearable:""},model:{value:t.customerForm.introduce,callback:function(e){t.$set(t.customerForm,"introduce",e)},expression:"customerForm.introduce"}})],1)],1)],1),t._v(" "),a("h2",{staticClass:"form-name"},[t._v("业务信息")]),t._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"customerForm2",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:t.customerForm,rules:t.customerFormrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("Customer.contactname"),prop:"contactName"}},[a("el-input",{attrs:{placeholder:"请输入联系人",clearable:""},model:{value:t.customerForm.contactName,callback:function(e){t.$set(t.customerForm,"contactName",t._n(e))},expression:"customerForm.contactName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("Customer.phone2"),prop:"phone"}},[a("el-input",{attrs:{placeholder:"请输入电话号码",clearable:""},model:{value:t.customerForm.phone,callback:function(e){t.$set(t.customerForm,"phone",t._n(e))},expression:"customerForm.phone"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("public.countyrId")}},[a("el-input",{attrs:{disabled:""},model:{value:t.customerForm.countryName,callback:function(e){t.$set(t.customerForm,"countryName",t._n(e))},expression:"customerForm.countryName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("public.countyrId")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择国家"},on:{change:t.handlechange},model:{value:t.customerForm.countryid,callback:function(e){t.$set(t.customerForm,"countryid",e)},expression:"customerForm.countryid"}},t._l(t.nations,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.provinceid")}},[a("el-input",{attrs:{disabled:""},model:{value:t.customerForm.provinceName,callback:function(e){t.$set(t.customerForm,"provinceName",t._n(e))},expression:"customerForm.provinceName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.provinceid")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择省"},on:{change:t.handlechange2},model:{value:t.customerForm.provinceid,callback:function(e){t.$set(t.customerForm,"provinceid",e)},expression:"customerForm.provinceid"}},t._l(t.provinces,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.cityid")}},[a("el-input",{attrs:{disabled:""},model:{value:t.customerForm.cityName,callback:function(e){t.$set(t.customerForm,"cityName",t._n(e))},expression:"customerForm.cityName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.cityid")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择市"},model:{value:t.customerForm.cityid,callback:function(e){t.$set(t.customerForm,"cityid",e)},expression:"customerForm.cityid"}},t._l(t.cities,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.traderid"),prop:"address"}},[a("el-input",{attrs:{placeholder:"请选择"},on:{focus:t.handlechoose},model:{value:t.trader,callback:function(e){t.trader=e},expression:"trader"}})],1),t._v(" "),a("my-emp",{attrs:{control:t.empcontrol},on:{"update:control":function(e){t.empcontrol=e},personName:t.personName}}),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.transmode"),prop:"address"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.customerForm.transMode,placeholder:"请选择"},model:{value:t.customerForm.transMode,callback:function(e){t.$set(t.customerForm,"transMode",e)},expression:"customerForm.transMode"}},[a("el-option",{attrs:{label:"x1",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"z2",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.deliverymode"),prop:"address"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{value:t.customerForm.deliveryMode,placeholder:"请选择"},model:{value:t.customerForm.deliveryMode,callback:function(e){t.$set(t.customerForm,"deliveryMode",e)},expression:"customerForm.deliveryMode"}},[a("el-option",{attrs:{label:"p1",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"q2",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("Customer.address2"),prop:"address"}},[a("el-input",{attrs:{placeholder:"请输入地址",clearable:""},model:{value:t.customerForm.address,callback:function(e){t.$set(t.customerForm,"address",e)},expression:"customerForm.address"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px","margin-left":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleEditok()}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.handlecancel()}}},[t._v("取消")])],1)])},[],!1,null,"5d51daf0",null);p.options.__file="MyDialog.vue";var f=p.exports,h={name:"AgentList",directives:{waves:i.a},components:{Pagination:l.a,MyDialog:f},data:function(){return{moreaction:[],editVisible:!1,customertypes:[],customertyp:1,levels:[],levelstype:2,sources:[],sourcestype:3,downloadLoading:!1,list:[],total:0,tableKey:0,listLoading:!0,getemplist:{agentname:"",phone:"",type:"",pinyin:"",level:"",pagenum:1,pagesize:10,contactname:"",source:"",createtime:""},customerForm:{agentname:"",phone:"",type:"",pinyin:"",level:"",source:"",discount:"",countryid:"",provinceid:"",cityid:"",introduce:"",address:"",contactname:"",traderid:"",transmode:"",deliverymode:"",createid:"",newold:""}}},mounted:function(){this.getlist(),this.getCategory()},methods:{getCategory:function(){var t=this;Object(s.j)(this.customertyp).then(function(e){200===e.data.ret?t.customertypes=e.data.data.content.list:t.$notify.error({title:"错误",message:"出错了",offset:100})}),Object(s.j)(this.levelstype).then(function(e){200===e.data.ret?t.levels=e.data.data.content.list:t.$notify.error({title:"错误",message:"出错了",offset:100})}),Object(s.j)(this.sourcestype).then(function(e){200===e.data.ret?t.sources=e.data.data.content.list:t.$notify.error({title:"错误",message:"出错了",offset:100})})},getlist:function(){var t=this;this.listLoading=!0,Object(s.d)(this.getemplist).then(function(e){200===e.data.ret?(t.list=e.data.data.content.list,t.total=e.data.data.content.totalCount):t.$notify.error({title:"错误",message:"出错了",offset:100}),setTimeout(function(){t.listLoading=!1},50)})},handleFilter:function(){var t=this;this.getemplist.pagenum=1,Object(s.d)(this.getemplist).then(function(e){200===e.data.ret?(t.list=e.data.data.content.list,t.total=e.data.data.content.totalCount):t.$notify.error({title:"错误",message:"出错了",offset:100})})},handleAdd:function(){this.$router.push("/Customer/NewAgent")},handleContract:function(){console.log(123)},handleExport:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-ef4a"),a.e("chunk-09ee")]).then(a.bind(null,"S/jZ")).then(function(e){var a=t.formatJson(["id","jobNumber","account","firstName","gender","birthday","email","postName","deptName","regionName","repositoryName","createTime","dimissionTime","stat"],t.list);e.export_json_to_excel({header:["编号","工号","员工登陆账号","姓名","性别","生日","邮箱","职位","所属部门","所属区域","所属门店","入职时间","离职时间","状态"],data:a,filename:"员工资料表"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},handlePrint:function(){console.log(456)},handleSelectionChange:function(t){this.moreaction=t},handleCommand:function(t){var e=this,a=this.moreaction.map(function(t){return t.id}).join();"delete"===t&&this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.g)(a).then(function(t){200===t.data.ret?(e.$notify({title:"删除成功",type:"success",offset:100}),e.getlist()):e.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.g)(t.id).then(function(t){200===t.data.ret?(e.$notify({title:"删除成功",type:"success",offset:100}),e.getlist()):e.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleEdit:function(t){console.log(t),this.editVisible=!0,this.customerForm=r()({},t),this.customerForm.newOrOld=String(t.newOrOld),this.customerForm.transMode=String(t.transMode),this.customerForm.deliveryMode=String(t.deliveryMode)},refreshlist:function(t){!0===t&&this.getlist()}}},v=(a("hI01"),Object(d.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ERP-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:t.$t("Customer.agentname"),clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.getemplist.agentname,callback:function(e){t.$set(t.getemplist,"agentname",e)},expression:"getemplist.agentname"}}),t._v(" "),a("el-input",{staticClass:"filter-item",attrs:{placeholder:t.$t("Customer.phone"),clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.getemplist.phone,callback:function(e){t.$set(t.getemplist,"phone",e)},expression:"getemplist.phone"}}),t._v(" "),a("el-date-picker",{staticClass:"filter-item",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.getemplist.createtime,callback:function(e){t.$set(t.getemplist,"createtime",e)},expression:"getemplist.createtime"}}),t._v(" "),a("el-select",{staticClass:"filter-item",attrs:{value:t.getemplist.type,placeholder:t.$t("Customer.customertype"),clearable:""},model:{value:t.getemplist.type,callback:function(e){t.$set(t.getemplist,"type",e)},expression:"getemplist.type"}},t._l(t.customertypes,function(t,e){return a("el-option",{key:e,attrs:{value:t.id,label:t.categoryName}})})),t._v(" "),a("el-select",{staticClass:"filter-item",attrs:{value:t.getemplist.level,placeholder:t.$t("Customer.level"),clearable:""},model:{value:t.getemplist.level,callback:function(e){t.$set(t.getemplist,"level",e)},expression:"getemplist.level"}},t._l(t.levels,function(t,e){return a("el-option",{key:e,attrs:{value:t.id,label:t.categoryName}})})),t._v(" "),a("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"click"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%",float:"left"},attrs:{value:t.getemplist.source,placeholder:t.$t("Customer.source"),clearable:""},model:{value:t.getemplist.source,callback:function(e){t.$set(t.getemplist,"source",e)},expression:"getemplist.source"}},t._l(t.sources,function(t,e){return a("el-option",{key:e,attrs:{value:t.id,label:t.categoryName}})})),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"40%",float:"left"},attrs:{placeholder:t.$t("Customer.contactname"),clearable:""},model:{value:t.getemplist.contactname,callback:function(e){t.$set(t.getemplist,"contactname",e)},expression:"getemplist.contactname"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"40%",float:"left","margin-top":"20px"},attrs:{placeholder:t.$t("Customer.pinyin"),clearable:""},model:{value:t.getemplist.pinyin,callback:function(e){t.$set(t.getemplist,"pinyin",e)},expression:"getemplist.pinyin"}}),t._v(" "),a("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("public.search")))])],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v(t._s(t.$t("public.filter"))),a("svg-icon",{staticStyle:{"margin-left":"4px"},attrs:{"icon-class":"shaixuan"}})],1)],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("public.search")))]),t._v(" "),a("el-dropdown",{on:{command:t.handleCommand}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"}},[t._v("\n        "+t._s(t.$t("public.batchoperation"))+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{staticStyle:{width:"140px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{staticStyle:{"text-align":"left"},attrs:{command:"delete"}},[a("svg-icon",{staticStyle:{width:"40px"},attrs:{"icon-class":"shanchu"}}),t._v(t._s(t.$t("public.delete")))],1)],1)],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{loading:t.downloadLoading},on:{click:t.handleExport}},[a("svg-icon",{attrs:{"icon-class":"daochu"}}),t._v(t._s(t.$t("public.export")))],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-printer"},on:{click:t.handlePrint}},[t._v(t._s(t.$t("public.print")))]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px",float:"right"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:t.handleAdd}},[t._v(t._s(t.$t("public.add")))])],1),t._v(" "),a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.id"),resizable:!1,prop:"id",align:"center",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.agentname"),resizable:!1,prop:"agentName",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.agentName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.customertype"),resizable:!1,prop:"agentType",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.agentType))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.level"),resizable:!1,prop:"agentLevel",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.agentLevel))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.traderid"),resizable:!1,prop:"traderName",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.traderName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.contactname"),resizable:!1,prop:"contactName",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.contactName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.phone"),resizable:!1,prop:"phone",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.phone))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.createName"),resizable:!1,prop:"createName",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.createName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Customer.createTime"),resizable:!1,prop:"createTime",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.createTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("public.actions"),resizable:!1,align:"center","min-width":"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v(t._s(t.$t("public.edit")))]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v(t._s(t.$t("public.delete")))])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.getemplist.pagenum,limit:t.getemplist.pagesize},on:{"update:page":function(e){t.$set(t.getemplist,"pagenum",e)},"update:limit":function(e){t.$set(t.getemplist,"pagesize",e)},pagination:t.getlist}}),t._v(" "),a("my-dialog",{attrs:{control:t.editVisible,editdata:t.customerForm},on:{"update:control":function(e){t.editVisible=e},"update:editdata":function(e){t.customerForm=e},rest:t.refreshlist}})],1)])},[],!1,null,"5c339bc4",null));v.options.__file="AgentList.vue";e.default=v.exports},hI01:function(t,e,a){"use strict";var o=a("10Hk");a.n(o).a}}]);