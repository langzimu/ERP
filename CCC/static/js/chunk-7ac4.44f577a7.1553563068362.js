(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7ac4"],{"1p6i":function(e,t,l){"use strict";l.r(t);var a=l("P2sY"),s=l.n(a),i=l("DhTb"),r=l("ZySA"),o=l("Mz3J"),n=l("2xWV"),c=l("gDS+"),d=l.n(c),p={components:{MyDetail:l("4JxT").a,MyCenter:n.a},props:{editcontrol:{type:Boolean,default:!1},editdata:{type:Object,default:null}},data:function(){return{editVisible:this.editcontrol,personalForm:this.editdata,control:!1,workCenterId:"",centercontrol:!1,personalrules:{code:[{required:!0,message:"请输入工序编号",trigger:"blur"}],processName:[{required:!0,message:"请输入工序名称",trigger:"blur"}],workCenterId:[{required:!0,message:"请选择所属工作中心",trigger:"focus"}],testMethod:[{required:!0,message:"请选择校验方式",trigger:"change"}],timeUnit:[{required:!0,message:"请选择时间单位",trigger:"change"}],isCost:[{required:!0,message:"请选择是否计费",trigger:"change"}],isHelp:[{required:!0,message:"请选择是否外部协助",trigger:"change"}],stat:[{required:!0,message:"请选择启用状态",trigger:"change"}]},list2:[],validRules:{}}},watch:{editcontrol:function(){this.editVisible=this.editcontrol},editdata:function(){this.personalForm=this.editdata,this.workCenterId=this.personalForm.workCenterName,this.list2=this.personalForm.standardProcessDetailVos}},methods:{workcenterchoose:function(){this.centercontrol=!0},center:function(e){console.log(e),this.workCenterId=e.workCenterName,this.personalForm.workCenterId=e.id},handleAddproduct:function(){this.control=!0},productdetail:function(e){console.log(e);for(var t=this.$refs.editable.getRecords(),l=0;l<e.length;l++){for(var a=0;a<t.length;a++)if(e[l].productCode===t[a].productCode)return this.$notify.error({title:"错误",message:"工序已添加",offset:100}),!1;this.$refs.editable.insert(e[l])}},restAllForm:function(){this.personalForm={createPersonId:3,countryId:1,repositoryId:438,regionId:2},this.productTypeId=null},handleEditok:function(){var e=this;this.personalForm.repositoryId=438,this.personalForm.regionId=2,this.personalForm.createPersonId=3,this.personalForm.countryId=1,this.personalForm.modifyPersonId=3;var t=this.$refs.editable.getRecords();if(0===t.length)return this.$notify.error({title:"错误",message:"明细表不能为空",offset:100}),!1;t.map(function(e){return e}).forEach(function(e){return null!==e.processName&&""!==e.processName&&void 0!==e.processName||delete e.processName,null!==e.shortName&&""!==e.shortName&&void 0!==e.shortName||delete e.shortName,null!==e.description&&""!==e.description&&void 0!==e.description||delete e.description,e});var l=d()(t),a=this.personalForm;for(var s in a)""!==a[s]&&void 0!==a[s]&&null!==a[s]||delete a[s];var r=d()(a);Object(i.j)(r,l).then(function(t){200===t.data.ret?(e.$notify({title:"操作成功",message:"操作成功",type:"success",duration:1e3,offset:100}),e.$emit("rest",!0),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields(),e.editVisible=!1):e.$notify.error({title:"错误",message:"出错了",offset:100})})},handlecancel:function(){this.$refs.personalForm.clearValidate(),this.$refs.personalForm.resetFields(),this.editVisible=!1}}},m=(l("p19M"),l("KHd+")),u=Object(m.a)(p,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{staticClass:"edit",attrs:{visible:e.editVisible,editcontrol:e.editcontrol,editdata:e.editdata,"close-on-press-escape":!1,top:"10px",title:"修改标准工序"},on:{"update:visible":function(t){e.editVisible=t},close:function(t){e.$emit("update:editcontrol",!1)}}},[l("el-card",{staticClass:"box-card"},[l("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),l("div",{staticClass:"container"},[l("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-width":"135px"}},[l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.code3"),prop:"code"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.code,callback:function(t){e.$set(e.personalForm,"code",t)},expression:"personalForm.code"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.processName2"),prop:"processName"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.processName,callback:function(t){e.$set(e.personalForm,"processName",t)},expression:"personalForm.processName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.shortName")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.shortName,callback:function(t){e.$set(e.personalForm,"shortName",t)},expression:"personalForm.shortName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.workCenterId"),prop:"workCenterId"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},on:{focus:e.workcenterchoose},model:{value:e.workCenterId,callback:function(t){e.workCenterId=t},expression:"workCenterId"}})],1),e._v(" "),l("my-center",{attrs:{control:e.centercontrol},on:{"update:control":function(t){e.centercontrol=t},center:e.center}})],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.testMethod"),prop:"testMethod"}},[l("el-select",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.testMethod,callback:function(t){e.$set(e.personalForm,"testMethod",t)},expression:"personalForm.testMethod"}},[l("el-option",{attrs:{value:"1",label:"自检"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"别人检"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.timeUnit"),prop:"timeUnit"}},[l("el-select",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.timeUnit,callback:function(t){e.$set(e.personalForm,"timeUnit",t)},expression:"personalForm.timeUnit"}},[l("el-option",{attrs:{value:"1",label:"天"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"月"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.preTime")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.preTime,callback:function(t){e.$set(e.personalForm,"preTime",t)},expression:"personalForm.preTime"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.runTime")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.runTime,callback:function(t){e.$set(e.personalForm,"runTime",t)},expression:"personalForm.runTime"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.isCost"),prop:"isCost"}},[l("el-radio-group",{staticStyle:{"margin-left":"19px",width:"150px"},model:{value:e.personalForm.isCost,callback:function(t){e.$set(e.personalForm,"isCost",t)},expression:"personalForm.isCost"}},[l("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),l("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.isHelp"),"label-width":"120px",prop:"isHelp"}},[l("el-radio-group",{staticStyle:{"margin-left":"19px",width:"150px"},model:{value:e.personalForm.isHelp,callback:function(t){e.$set(e.personalForm,"isHelp",t)},expression:"personalForm.isHelp"}},[l("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),l("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.timeWage")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.timeWage,callback:function(t){e.$set(e.personalForm,"timeWage",t)},expression:"personalForm.timeWage"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.numberWage")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{clearable:""},model:{value:e.personalForm.numberWage,callback:function(t){e.$set(e.personalForm,"numberWage",t)},expression:"personalForm.numberWage"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.stat"),prop:"stat"}},[l("el-radio-group",{staticStyle:{"margin-left":"19px",width:"150px"},model:{value:e.personalForm.stat,callback:function(t){e.$set(e.personalForm,"stat",t)},expression:"personalForm.stat"}},[l("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),l("el-radio",{attrs:{label:2}},[e._v("停用")])],1)],1)],1)],1)],1)],1)]),e._v(" "),l("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[l("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("工序明细")]),e._v(" "),l("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[l("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd",width:"98px"},attrs:{type:"success"},on:{click:e.handleAddproduct}},[e._v("添加")]),e._v(" "),l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),l("my-detail",{attrs:{control:e.control},on:{"update:control":function(t){e.control=t},produt:e.productdetail}}),e._v(" "),l("div",{staticClass:"container"},[l("el-editable",{ref:"editable",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list2,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list2=t}}},[l("el-editable-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),e._v(" "),l("el-editable-column",{attrs:{label:"序号","min-width":"55",align:"center",type:"index"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"processFileName",align:"center",label:"工艺名称","min-width":"150px"}})],1)],1)],1),e._v(" "),l("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px","margin-left":"30px"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleEditok()}}},[e._v("修改")]),e._v(" "),l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)},[],!1,null,"862670f6",null);u.options.__file="MyDialog3.vue";var f=u.exports,h={props:{detailcontrol:{type:Boolean,default:!1},detaildata:{type:Object,default:null}},data:function(){return{editVisible:this.detailcontrol,personalForm:this.detaildata,list2:[]}},watch:{detailcontrol:function(){this.editVisible=this.detailcontrol},detaildata:function(){this.personalForm=this.detaildata,this.list2=this.personalForm.standardProcessDetailVos}},methods:{handlecancel:function(){this.editVisible=!1}}},b=(l("6KbV"),Object(m.a)(h,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{staticClass:"edit",attrs:{visible:e.editVisible,detailcontrol:e.detailcontrol,detaildata:e.detaildata,"close-on-press-escape":!1,"append-to-body":"",top:"10px",title:"修改采购入库单"},on:{"update:visible":function(t){e.editVisible=t},close:function(t){e.$emit("update:detailcontrol",!1)}}},[l("el-card",{staticClass:"box-card"},[l("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),l("div",{staticClass:"container"},[l("el-form",{staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,inline:!0,"status-icon":"","label-width":"135px"}},[l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.code3"),prop:"code"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.code,callback:function(t){e.$set(e.personalForm,"code",t)},expression:"personalForm.code"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.createrName"),prop:"code"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.createPersonName,callback:function(t){e.$set(e.personalForm,"createPersonName",t)},expression:"personalForm.createPersonName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.createTime"),prop:"code"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.createTime,callback:function(t){e.$set(e.personalForm,"createTime",t)},expression:"personalForm.createTime"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.processName2"),prop:"processName"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.processName,callback:function(t){e.$set(e.personalForm,"processName",t)},expression:"personalForm.processName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.shortName")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.shortName,callback:function(t){e.$set(e.personalForm,"shortName",t)},expression:"personalForm.shortName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.workCenterId"),prop:"workCenterId"}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.workCenterName,callback:function(t){e.$set(e.personalForm,"workCenterName",t)},expression:"personalForm.workCenterName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.testMethod"),prop:"testMethod"}},[l("el-select",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.testMethod,callback:function(t){e.$set(e.personalForm,"testMethod",t)},expression:"personalForm.testMethod"}},[l("el-option",{attrs:{value:"1",label:"自检"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"别人检"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.timeUnit"),prop:"timeUnit"}},[l("el-select",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.timeUnit,callback:function(t){e.$set(e.personalForm,"timeUnit",t)},expression:"personalForm.timeUnit"}},[l("el-option",{attrs:{value:"1",label:"天"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"月"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.preTime")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.preTime,callback:function(t){e.$set(e.personalForm,"preTime",t)},expression:"personalForm.preTime"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.runTime")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.runTime,callback:function(t){e.$set(e.personalForm,"runTime",t)},expression:"personalForm.runTime"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.isCost"),prop:"isCost"}},[l("el-radio-group",{staticStyle:{"margin-left":"19px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.isCost,callback:function(t){e.$set(e.personalForm,"isCost",t)},expression:"personalForm.isCost"}},[l("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),l("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.isHelp"),"label-width":"120px",prop:"isHelp"}},[l("el-radio-group",{staticStyle:{"margin-left":"19px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.isHelp,callback:function(t){e.$set(e.personalForm,"isHelp",t)},expression:"personalForm.isHelp"}},[l("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),l("el-radio",{attrs:{label:2}},[e._v("否")])],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.timeWage")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.timeWage,callback:function(t){e.$set(e.personalForm,"timeWage",t)},expression:"personalForm.timeWage"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.numberWage")}},[l("el-input",{staticStyle:{"margin-left":"18px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.numberWage,callback:function(t){e.$set(e.personalForm,"numberWage",t)},expression:"personalForm.numberWage"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("ProcessFile.stat"),prop:"stat"}},[l("el-radio-group",{staticStyle:{"margin-left":"19px",width:"150px"},attrs:{disabled:""},model:{value:e.personalForm.stat,callback:function(t){e.$set(e.personalForm,"stat",t)},expression:"personalForm.stat"}},[l("el-radio",{attrs:{label:1}},[e._v("启用")]),e._v(" "),l("el-radio",{attrs:{label:2}},[e._v("停用")])],1)],1)],1)],1)],1)],1)]),e._v(" "),l("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[l("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("工序明细")]),e._v(" "),l("div",{staticClass:"container"},[l("el-editable",{ref:"editable",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list2,"edit-config":{showIcon:!0,showStatus:!0},stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list2=t}}},[l("el-editable-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),e._v(" "),l("el-editable-column",{attrs:{label:"序号","min-width":"55",align:"center",type:"index"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"processFileName",align:"center",label:"工艺名称","min-width":"150px"}})],1)],1)]),e._v(" "),l("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px","margin-left":"30px"}},[l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)},[],!1,null,"0dde84ad",null));b.options.__file="DetailList3.vue";var v=b.exports,g={name:"StandardProcess",directives:{waves:r.a},components:{DetailList3:v,MyDialog3:f,MyCenter:n.a,Pagination:o.a},filters:{statFilter:function(e){return{1:"启用",2:"未启用"}[e]},timeUnitFilter:function(e){return{1:"天",2:"月"}[e]}},data:function(){return{workCenterId:"",centercontrol:!1,detailvisible:!1,visible2:!1,moreaction:"",downloadLoading:!1,list:[],total:0,tableKey:0,listLoading:!0,getemplist:{pageNum:1,pageSize:10,repositoryId:438,regionIds:2,createPersonId:3},personalForm:{},editVisible:!1,date:[]}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;this.listLoading=!0,Object(i.f)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount),setTimeout(function(){e.listLoading=!1},50)})},restFilter:function(){this.workCenterId="",this.getemplist.workCenterId=""},handleFilter:function(){var e=this;this.getemplist.pageNum=1,Object(i.f)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount)})},handleEdit:function(e){console.log(e),this.editVisible=!0,this.personalForm=s()({},e),this.personalForm.testMethod=String(e.testMethod),this.personalForm.timeUnit=String(e.timeUnit)},refreshlist:function(e){!0===e&&this.getlist()},handleDetail:function(e){console.log(e),this.detailvisible=!0,this.personalForm=s()({},e),this.personalForm.testMethod=String(e.testMethod),this.personalForm.timeUnit=String(e.timeUnit)},workcenterchoose:function(){this.centercontrol=!0},center:function(e){console.log(e),this.workCenterId=e.workCenterName,this.getemplist.workCenterId=e.id},handleSelectionChange:function(e){this.moreaction=e},handleCommand:function(e){var t=this,l=this.moreaction.map(function(e){return e.id}).join();"delete"===e&&this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.d)(l).then(function(e){200===e.data.ret?(t.$notify({title:"删除成功",type:"success",offset:100}),t.getlist()):t.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.d)(e.id).then(function(e){200===e.data.ret?(t.$notify({title:"删除成功",type:"success",offset:100}),t.getlist()):t.$notify.error({title:"错误",message:"出错了",offset:100})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleAdd:function(){this.$router.push("/ProcessFile/AddStandardProcess")},handleExport:function(){var e=this;this.downloadLoading=!0,Promise.all([l.e("chunk-ef4a"),l.e("chunk-73bb")]).then(l.bind(null,"S/jZ")).then(function(t){var l=e.formatJson(["id","ProcessFileName","ProcessFileShortName","typeName","regionName","buyerName","levelName","createName","createTime"],e.list);t.export_json_to_excel({header:["供应商编号","供应商名称","供应商简称","供应商类别","所在区域","采购员","供应商优质级别","建档人","建档日期"],data:l,filename:"经销商资料表"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handlePrint:function(){console.log(456)}}},w=(l("xDMW"),Object(m.a)(g,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"ERP-container"},[l("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px",height:"60px"}},[l("el-row",[l("el-form",{ref:"getemplist",staticStyle:{"margin-top":"-9px"},attrs:{model:e.getemplist,"label-width":"120px"}},[l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"工序编号"}},[l("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("ProcessFile.code"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.code,callback:function(t){e.$set(e.getemplist,"code",t)},expression:"getemplist.code"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"拼音缩写"}},[l("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("ProcessFile.shortName"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.shortName,callback:function(t){e.$set(e.getemplist,"shortName",t)},expression:"getemplist.shortName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"工作中心名称"}},[l("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("ProcessFile.workCenterId"),clearable:""},on:{focus:e.workcenterchoose},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.workCenterId,callback:function(t){e.workCenterId=t},expression:"workCenterId"}})],1),e._v(" "),l("my-center",{attrs:{control:e.centercontrol},on:{"update:control":function(t){e.centercontrol=t},center:e.center}})],1),e._v(" "),l("el-col",{staticStyle:{"margin-left":"154px"},attrs:{span:4}},[l("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"manual"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[l("el-select",{staticStyle:{width:"40%",float:"left","margin-left":"20px"},attrs:{placeholder:"请选择校验方式",clearable:""},model:{value:e.getemplist.testMethod,callback:function(t){e.$set(e.getemplist,"testMethod",t)},expression:"getemplist.testMethod"}},[l("el-option",{attrs:{value:"1",label:"自检"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"别人检"}})],1),e._v(" "),l("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px"},attrs:{placeholder:"是否计费",clearable:""},model:{value:e.getemplist.isCost,callback:function(t){e.$set(e.getemplist,"isCost",t)},expression:"getemplist.isCost"}},[l("el-option",{attrs:{value:"1",label:"是"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"否"}})],1),e._v(" "),l("el-select",{staticStyle:{width:"40%",float:"left","margin-left":"20px","margin-top":"20px"},attrs:{placeholder:"是否外部协助",clearable:""},model:{value:e.getemplist.isHelp,callback:function(t){e.$set(e.getemplist,"isHelp",t)},expression:"getemplist.isHelp"}},[l("el-option",{attrs:{value:"1",label:"是"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"否"}})],1),e._v(" "),l("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px","margin-top":"20px"},attrs:{placeholder:"启用状态",clearable:""},model:{value:e.getemplist.stat,callback:function(t){e.$set(e.getemplist,"stat",t)},expression:"getemplist.stat"}},[l("el-option",{attrs:{value:"1",label:"是"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"否"}})],1),e._v(" "),l("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{slot:"reference",type:"primary"},on:{click:function(t){e.visible2=!e.visible2}},slot:"reference"},[e._v(e._s(e.$t("public.filter"))),l("svg-icon",{staticStyle:{"margin-left":"4px"},attrs:{"icon-class":"shaixuan"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1)],1)],1)],1),e._v(" "),l("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[l("el-dropdown",{on:{command:e.handleCommand}},[l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"}},[e._v("\n        "+e._s(e.$t("public.batchoperation"))+" "),l("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),l("el-dropdown-menu",{staticStyle:{width:"140px"},attrs:{slot:"dropdown"},slot:"dropdown"},[l("el-dropdown-item",{staticStyle:{"text-align":"left"},attrs:{command:"delete"}},[l("svg-icon",{staticStyle:{width:"40px"},attrs:{"icon-class":"shanchu"}}),e._v(e._s(e.$t("public.delete")))],1)],1)],1),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{loading:e.downloadLoading},on:{click:e.handleExport}},[l("svg-icon",{attrs:{"icon-class":"daochu"}}),e._v(e._s(e.$t("public.export")))],1),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-printer"},on:{click:e.handlePrint}},[e._v(e._s(e.$t("public.print")))]),e._v(" "),l("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),l("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.code"),resizable:!1,prop:"id",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticClass:"link-type",on:{click:function(l){e.handleDetail(t.row)}}},[e._v(e._s(t.row.code))])]}}])},[l("detail-list3",{attrs:{detailcontrol:e.detailvisible,detaildata:e.personalForm},on:{"update:detailcontrol":function(t){e.detailvisible=t},"update:detaildata":function(t){e.personalForm=t}}})],1),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.processName"),resizable:!1,prop:"title",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.processName))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.shortName"),resizable:!1,prop:"sourceNumber",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.shortName))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.workCenterName"),resizable:!1,align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.workCenterName))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.timeUnit"),resizable:!1,align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(e._f("timeUnitFilter")(t.row.timeUnit)))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.preTime"),resizable:!1,align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.preTime))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.runTime"),resizable:!1,align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.runTime))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("ProcessFile.stat"),resizable:!1,align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(e._f("statFilter")(t.row.stat)))])]}}])}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("public.actions"),resizable:!1,align:"center","min-width":"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(l){e.handleEdit(t.row)}}},[e._v(e._s(e.$t("public.edit")))]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("public.delete")))])]}}])})],1),e._v(" "),l("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.getlist}}),e._v(" "),l("my-dialog3",{attrs:{editcontrol:e.editVisible,editdata:e.personalForm},on:{"update:editcontrol":function(t){e.editVisible=t},"update:editdata":function(t){e.personalForm=t},rest:e.refreshlist}})],1)],1)},[],!1,null,"5079ecce",null));w.options.__file="StandardProcess.vue";t.default=w.exports},"6KbV":function(e,t,l){"use strict";var a=l("FyAk");l.n(a).a},FyAk:function(e,t,l){},HOtO:function(e,t,l){},nc9G:function(e,t,l){},p19M:function(e,t,l){"use strict";var a=l("HOtO");l.n(a).a},xDMW:function(e,t,l){"use strict";var a=l("nc9G");l.n(a).a}}]);