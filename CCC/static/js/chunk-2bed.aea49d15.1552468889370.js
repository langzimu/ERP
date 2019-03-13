(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2bed"],{ppTo:function(t,e,a){"use strict";var n=a("qU03");a.n(n).a},qU03:function(t,e,a){},r8AQ:function(t,e,a){"use strict";a.r(e);var n=a("P2sY"),o=a.n(n),r=a("0zGY"),i=a("ZySA"),l=a("g2qR"),c=a("Mz3J"),s={name:"EmployeeContract",directives:{waves:i.a},components:{Pagination:c.a,MyCreate:l.a},data:function(){return{remindpersonid:"",createcontrol:!1,alltypes:[],typeids:{type:3,pagenum:1,pagesize:9999},moredelete:[],downloadLoading:!1,list:[],total:0,tableKey:0,listLoading:!0,getcontractlist:{contractname:"",contractnumber:"",empnumber:"",empname:"",pagenum:1,pagesize:10},editVisible:!1,employeeName:"",contractNumber:"",contractForm:{employeeId:"",contractName:"",signTime:"",expiredTime:"",effectiveTime:"",type:"",contractAttribute:"",period:"",isCorrection:"",stat:"",advanceDay:"",trialSalary:"",correctionSalary:"",remindPerson:""},contractFormRules:{employeeId:[{required:!0,message:"请选择员工",trigger:"focus"}],type:[{required:!0,message:"请选择合同类别",trigger:"change"}],contractName:[{required:!0,message:"请输入合同名称",trigger:"blur"}],signTime:[{required:!0,message:"请选择签约时间",trigger:"blur"}],expiredTime:[{required:!0,message:"请选择签约时间",trigger:"blur"}],effectiveTime:[{required:!0,message:"请选择签约时间",trigger:"blur"}]}}},mounted:function(){this.getlist()},methods:{getlist:function(){var t=this;this.listLoading=!0,Object(r.c)(this.getcontractlist).then(function(e){200===e.data.ret?(t.list=e.data.data.content.list,t.total=e.data.data.content.totalCount):(console.log("列表出错"),t.listLoading=!1),setTimeout(function(){t.listLoading=!1},50)}),Object(r.k)(this.typeids).then(function(e){200===e.data.ret?t.alltypes=e.data.data.content.list:console.log("合同类别数据出错了")})},restcontractForm:function(){this.employeeName="",this.contractNumber="",this.contractForm={employeeId:"",contractName:"",signTime:"",expiredTime:"",effectiveTime:"",type:"",contractAttribute:"",period:"",isCorrection:"",stat:"",advanceDay:"",trialSalary:"",correctionSalary:"",remindPerson:""}},handleEdit:function(t){console.log(t),this.editVisible=!0,this.employeeName=t.empName,this.contractNumber=t.contractNumber,this.contractForm=o()({},t),this.remindpersonid=this.contractForm.remindPerson,this.contractForm.period=String(t.period),this.contractForm.contractAttribute=String(t.contractAttribute),console.log(this.contractForm)},handleEditok:function(){var t=this;console.log(this.contractForm),this.$refs.contractForm.validate(function(e){if(!e)return t.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;Object(r.n)(t.contractForm).then(function(e){200===e.data.ret?(t.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),t.$refs.contractForm.resetFields(),t.editVisible=!1,t.getlist()):t.$notify.error({title:"错误",message:"出现错误",offset:100})})})},handlecancel:function(){this.$refs.contractForm.resetFields(),this.editVisible=!1},handleFilter:function(){var t=this;console.log(this.getcontractlist),Object(r.c)(this.getcontractlist).then(function(e){200===e.data.ret?(t.list=e.data.data.content.list,t.total=e.data.data.content.totalCount):console.log("列表出错")})},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.f)(t.id).then(function(t){200===t.data.ret?(e.$notify({title:"删除成功",type:"success",offset:100}),e.getlist()):e.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleSelectionChange:function(t){console.log(t),this.moredelete=t},handleCommand:function(t){var e=this;if("delete"===t){var a=this.moredelete.map(function(t){return t.id}).join();this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.f)(a).then(function(t){200===t.data.ret?(e.$notify({title:"删除成功",type:"success",offset:100}),e.getlist()):e.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}},handleAdd:function(){this.$router.push("/EmployeeInformation/NewEmployeeContract")},handleContract:function(){console.log(123)},handleExport:function(){var t=this;this.downloadLoading=!0,Promise.all([a.e("chunk-ef4a"),a.e("chunk-bfbd")]).then(a.bind(null,"S/jZ")).then(function(e){var a=t.formatJson(["id","jobNumber","account","firstName","gender","birthday","email","postName","deptName","regionName","repositoryName","createTime","dimissionTime","stat"],t.list);e.export_json_to_excel({header:["合同编号","合同名称","","姓名","性别","生日","邮箱","职位","所属部门","所属区域","所属门店","入职时间","离职时间","状态"],data:a,filename:"员工资料表"}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},handlePrint:function(){console.log(456)},controlremin:function(){this.createcontrol=!0},createname:function(t){this.remindpersonid=t.personName,this.contractForm.remindpersonid=t.id}}},m=(a("ppTo"),a("KHd+")),d=Object(m.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ERP-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",attrs:{placeholder:t.$t("NewEmployeeInformation.contractnumber"),clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.getcontractlist.contractnumber,callback:function(e){t.$set(t.getcontractlist,"contractnumber",e)},expression:"getcontractlist.contractnumber"}}),t._v(" "),a("el-input",{staticClass:"filter-item",attrs:{placeholder:t.$t("NewEmployeeInformation.contractname"),clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.getcontractlist.contractname,callback:function(e){t.$set(t.getcontractlist,"contractname",e)},expression:"getcontractlist.contractname"}}),t._v(" "),a("el-input",{staticClass:"filter-item",attrs:{placeholder:t.$t("NewEmployeeInformation.empnumber"),clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.getcontractlist.empnumber,callback:function(e){t.$set(t.getcontractlist,"empnumber",e)},expression:"getcontractlist.empnumber"}}),t._v(" "),a("el-input",{staticClass:"filter-item",attrs:{placeholder:t.$t("NewEmployeeInformation.empname"),clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.getcontractlist.empname,callback:function(e){t.$set(t.getcontractlist,"empname",e)},expression:"getcontractlist.empname"}}),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("public.search")))]),t._v(" "),a("el-dropdown",{on:{command:t.handleCommand}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"}},[t._v("\n        "+t._s(t.$t("public.batchoperation"))+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{staticStyle:{width:"140px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{staticStyle:{"text-align":"left"},attrs:{command:"delete"}},[a("svg-icon",{staticStyle:{width:"40px"},attrs:{"icon-class":"shanchu"}}),t._v(t._s(t.$t("public.delete")))],1)],1)],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{loading:t.downloadLoading},on:{click:t.handleExport}},[a("svg-icon",{attrs:{"icon-class":"daochu"}}),t._v(t._s(t.$t("public.export")))],1),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-printer"},on:{click:t.handlePrint}},[t._v(t._s(t.$t("public.print")))]),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px",float:"right"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:t.handleAdd}},[t._v(t._s(t.$t("public.add")))])],1),t._v(" "),a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,ref:"list",staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("NewEmployeeInformation.contractnumber"),resizable:!1,prop:"contractNumber",align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.contractNumber))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("NewEmployeeInformation.contractname"),resizable:!1,prop:"contractName",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.contractName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("NewEmployeeInformation.jobnumber"),resizable:!1,prop:"empNumber",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.empNumber))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("NewEmployeeInformation.empname"),resizable:!1,prop:"empName",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.empName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("NewEmployeeInformation.signtime"),resizable:!1,prop:"signTime",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.signTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("NewEmployeeInformation.effectivetime"),resizable:!1,prop:"effectiveTime",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.effectiveTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("NewEmployeeInformation.expiredtime"),resizable:!1,prop:"expiredTime",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.expiredTime))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("public.actions"),resizable:!1,align:"center","min-width":"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v(t._s(t.$t("public.edit")))]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v(t._s(t.$t("public.delete")))])]}}])})],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.getcontractlist.pagenum,limit:t.getcontractlist.pagesize},on:{"update:page":function(e){t.$set(t.getcontractlist,"pagenum",e)},"update:limit":function(e){t.$set(t.getcontractlist,"pagesize",e)},pagination:t.getlist}}),t._v(" "),a("el-dialog",{attrs:{visible:t.editVisible,title:"合同编号"+t.contractNumber,top:"10px"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"contractForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:t.contractForm,rules:t.contractFormRules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("NewEmployeeInformation.employeeid"),prop:"employeeId"}},[a("el-input",{attrs:{disabled:!0,placeholder:"请选择员工",clearable:""},model:{value:t.employeeName,callback:function(e){t.employeeName=e},expression:"employeeName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("NewEmployeeInformation.typeid"),prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择合同类别"},model:{value:t.contractForm.type,callback:function(e){t.$set(t.contractForm,"type",e)},expression:"contractForm.type"}},t._l(t.alltypes,function(t,e){return a("el-option",{key:e,attrs:{label:t.categoryName,value:t.id}})}))],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.contractname"),prop:"contractName"}},[a("el-input",{attrs:{placeholder:"请输入合同名称",clearable:""},model:{value:t.contractForm.contractName,callback:function(e){t.$set(t.contractForm,"contractName",e)},expression:"contractForm.contractName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.signtime"),prop:"signTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择签约时间","value-format":"yyyy-MM-dd"},model:{value:t.contractForm.signTime,callback:function(e){t.$set(t.contractForm,"signTime",e)},expression:"contractForm.signTime"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.expiredtime"),prop:"expiredTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择到期时间","value-format":"yyyy-MM-dd"},model:{value:t.contractForm.expiredTime,callback:function(e){t.$set(t.contractForm,"expiredTime",e)},expression:"contractForm.expiredTime"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.effectivetime"),prop:"effectiveTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择生效时间","value-format":"yyyy-MM-dd"},model:{value:t.contractForm.effectiveTime,callback:function(e){t.$set(t.contractForm,"effectiveTime",e)},expression:"contractForm.effectiveTime"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("NewEmployeeInformation.period")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择合同期限"},model:{value:t.contractForm.period,callback:function(e){t.$set(t.contractForm,"period",e)},expression:"contractForm.period"}},[a("el-option",{attrs:{label:"类型1",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"类型2",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("NewEmployeeInformation.attribute")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择合同属性"},model:{value:t.contractForm.contractAttribute,callback:function(e){t.$set(t.contractForm,"contractAttribute",e)},expression:"contractForm.contractAttribute"}},[a("el-option",{attrs:{label:"类型1",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"类型2",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("NewEmployeeInformation.iscorrection")}},[a("el-radio-group",{staticStyle:{width:"80%"},model:{value:t.contractForm.isCorrection,callback:function(e){t.$set(t.contractForm,"isCorrection",e)},expression:"contractForm.isCorrection"}},[a("el-radio",{staticStyle:{width:"50%"},attrs:{label:1}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("否")])],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:t.$t("NewEmployeeInformation.contractstat")}},[a("el-radio-group",{staticStyle:{width:"80%"},model:{value:t.contractForm.stat,callback:function(e){t.$set(t.contractForm,"stat",e)},expression:"contractForm.stat"}},[a("el-radio",{staticStyle:{width:"50%"},attrs:{label:1}},[t._v("生效")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("未生效")])],1)],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.trialsalary")}},[a("el-input",{attrs:{placeholder:"请输入试用工资",clearable:""},model:{value:t.contractForm.trialSalary,callback:function(e){t.$set(t.contractForm,"trialSalary",e)},expression:"contractForm.trialSalary"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.correctionsalary")}},[a("el-input",{attrs:{placeholder:"请输入转正工资",clearable:""},model:{value:t.contractForm.correctionSalary,callback:function(e){t.$set(t.contractForm,"correctionSalary",e)},expression:"contractForm.correctionSalary"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.remindpersonid")}},[a("el-input",{attrs:{placeholder:"请选择提醒人",clearable:""},on:{focus:t.controlremin},model:{value:t.remindpersonid,callback:function(e){t.remindpersonid=e},expression:"remindpersonid"}})],1),t._v(" "),a("my-create",{attrs:{createcontrol:t.createcontrol},on:{"update:createcontrol":function(e){t.createcontrol=e},createname:t.createname}}),t._v(" "),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:t.$t("NewEmployeeInformation.advanceday")}},[a("el-input",{attrs:{placeholder:"请输入提前时间",clearable:""},model:{value:t.contractForm.advanceDay,callback:function(e){t.$set(t.contractForm,"advanceDay",e)},expression:"contractForm.advanceDay"}},[a("template",{slot:"append"},[t._v("天")])],2)],1)],1),t._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px","margin-left":"30px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleEditok()}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.handlecancel()}}},[t._v("取消")])],1)],1)],1)])},[],!1,null,"10c9b4bc",null);d.options.__file="EmployeeContract.vue";e.default=d.exports}}]);