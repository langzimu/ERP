(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-62e0"],{IkrI:function(e,t,r){"use strict";r.r(t);var a=r("gDS+"),l=r.n(a),o=r("LVwP"),i=r("moiu"),n=r("L9ez"),s=r("sK/4"),c=r("QfFs"),d=r("UIic"),p=r("UNml"),u={name:"AddAdjustPrice",components:{MyRepository:s.a,MyDetail:d.a,MyCreate:p.a,MyAccept:c.a},data:function(){return{depts:[],handlePersonId:"",adjustRepositoryId:"",createcontrol:!1,repositorycontrol:!1,control:!1,personalForm:{createPersonId:3,countryId:1,repositoryId:438,regionId:2,sourceType:"1"},personalrules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],handlePersonId:[{required:!0,message:"请选择经办人",trigger:"focus"}],adjustRepositoryId:[{required:!0,message:"请选择调价仓库",trigger:"focus"}],adjustDate:[{required:!0,message:"请选择调价日期",trigger:"change"}],effectiveDate:[{required:!0,message:"请选择生效日期",trigger:"change"}]},list2:[],locationlistparms:{pageNum:1,pageSize:1999,repositoryId:""},locationlist:[],validRules:{locationId:[]}}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;Object(i.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},handlechoose:function(){this.createcontrol=!0},createname:function(e){console.log(e),this.handlePersonId=e.personName,this.personalForm.handlePersonId=e.id},handlechooseRep:function(){this.repositorycontrol=!0},repositoryname:function(e){var t=this;console.log(e),this.adjustRepositoryId=e.repositoryName,this.personalForm.adjustRepositoryId=e.id,this.locationlistparms.repositoryId=e.id,Object(o.g)(this.locationlistparms).then(function(e){200===e.data.ret&&(t.locationlist=e.data.data.content.list.map(function(e){return{value:e.id,label:e.locationName}}))})},handleAddproduct:function(){this.control=!0},productdetail:function(e){console.log(e);for(var t=this.$refs.editable.getRecords(),r=0;r<e.length;r++){for(var a=0;a<t.length;a++)if(e[r].productCode===t[a].productCode)return this.$notify.error({title:"错误",message:"物品已添加",offset:100}),!1;this.$refs.editable.insert(e[r])}},getSize:function(e,t){return e*t},restAllForm:function(){this.personalForm={createPersonId:3,countryId:1,repositoryId:438,regionId:2,sourceType:"1"},this.handlePersonId="",this.adjustRepositoryId=""},handlesave:function(){var e=this,t=this.$refs.editable.getRecords();if(console.log(this.personalForm),console.log(t),0===t.length)return this.$notify.error({title:"错误",message:"明细表不能为空",offset:100}),!1;t.map(function(e){return e}).forEach(function(e){return null!==e.locationId&&""!==e.locationId&&void 0!==e.locationId||delete e.locationId,null!==e.productCode&&""!==e.productCode&&void 0!==e.productCode||delete e.productCode,null!==e.productName&&""!==e.productName&&void 0!==e.productName||delete e.productName,null!==e.color&&""!==e.color&&void 0!==e.color||delete e.color,null!==e.typeId&&""!==e.typeId&&void 0!==e.typeId||delete e.typeId,null!==e.unit&&""!==e.unit&&void 0!==e.unit||delete e.unit,null!==e.salePrice&&""!==e.salePrice&&void 0!==e.salePrice||delete e.salePrice,null!==e.newSalePrice&&""!==e.newSalePrice&&void 0!==e.newSalePrice||delete e.newSalePrice,null!==e.tradePrice&&""!==e.tradePrice&&void 0!==e.tradePrice||delete e.tradePrice,null!==e.newTradePrice&&""!==e.newTradePrice&&void 0!==e.newTradePrice||delete e.newTradePrice,null!==e.memberPrice&&""!==e.memberPrice&&void 0!==e.memberPrice||delete e.memberPrice,null!==e.newMemberPrice&&""!==e.newMemberPrice&&void 0!==e.newMemberPrice||delete e.newMemberPrice,null!==e.remarks&&""!==e.remarks&&void 0!==e.remarks||delete e.remarks,e});var r=this.personalForm;for(var a in r)""!==r[a]&&void 0!==r[a]&&null!==r[a]||delete r[a];var o=l()(r),i=l()(t),s=this.personalForm;this.$refs.personalForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;e.$refs.editable.validate().then(function(t){t&&Object(n.a)(o,i,s).then(function(t){console.log(t),200===t.data.ret?(e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.editable.clear(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields()):e.$notify.error({title:"错误",message:t.data.msg,offset:100})})}).catch(function(t){return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/AdjustPrice/AddAdjustPrice",name:"AddAdjustPrice",fullPath:"/AdjustPrice/AddAdjustPrice",title:"AddAdjustPrice"}).then(function(e){e.visitedViews})}}},m=(r("cBJS"),r("KHd+")),f=Object(m.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ERP-container"},[r("div",{staticClass:"app-container",staticStyle:{"padding-right":"0"}},[r("el-card",{staticClass:"box-card"},[r("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),r("div",{staticClass:"container"},[r("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-width":"100px"}},[r("el-row",[r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("AdjustPrice.title"),prop:"title"}},[r("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请输入调价单主题",clearable:""},model:{value:e.personalForm.title,callback:function(t){e.$set(e.personalForm,"title",t)},expression:"personalForm.title"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("AdjustPrice.handlePersonId"),prop:"handlePersonId"}},[r("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请选择经办人",clearable:""},on:{focus:e.handlechoose},model:{value:e.handlePersonId,callback:function(t){e.handlePersonId=t},expression:"handlePersonId"}})],1),e._v(" "),r("my-create",{attrs:{createcontrol:e.createcontrol},on:{"update:createcontrol":function(t){e.createcontrol=t},createname:e.createname}})],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("AdjustPrice.adjustDeptId")}},[r("el-select",{staticStyle:{"margin-left":"18px",width:"218px"},attrs:{placeholder:"请选择调价部门",clearable:""},model:{value:e.personalForm.adjustDeptId,callback:function(t){e.$set(e.personalForm,"adjustDeptId",t)},expression:"personalForm.adjustDeptId"}},e._l(e.depts,function(e,t){return r("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})}))],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("AdjustPrice.adjustRepositoryId"),prop:"adjustRepositoryId"}},[r("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请选择调价仓库",clearable:""},on:{focus:e.handlechooseRep},model:{value:e.adjustRepositoryId,callback:function(t){e.adjustRepositoryId=t},expression:"adjustRepositoryId"}})],1),e._v(" "),r("my-repository",{attrs:{repositorycontrol:e.repositorycontrol},on:{"update:repositorycontrol":function(t){e.repositorycontrol=t},repositoryname:e.repositoryname}})],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("AdjustPrice.adjustDate"),prop:"adjustDate"}},[r("el-date-picker",{staticStyle:{"margin-left":"18px"},attrs:{type:"date",placeholder:"选择调价日期","value-format":"yyyy-MM-dd"},model:{value:e.personalForm.adjustDate,callback:function(t){e.$set(e.personalForm,"adjustDate",t)},expression:"personalForm.adjustDate"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("AdjustPrice.effectiveDate"),prop:"effectiveDate"}},[r("el-date-picker",{staticStyle:{"margin-left":"18px"},attrs:{type:"date",placeholder:"选择生效日期","value-format":"yyyy-MM-dd"},model:{value:e.personalForm.effectiveDate,callback:function(t){e.$set(e.personalForm,"effectiveDate",t)},expression:"personalForm.effectiveDate"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:6}},[r("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("AdjustPrice.summary"),prop:"summary"}},[r("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请输入摘要",clearable:""},model:{value:e.personalForm.summary,callback:function(t){e.$set(e.personalForm,"summary",t)},expression:"personalForm.summary"}})],1)],1)],1)],1)],1)]),e._v(" "),r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[r("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("调价单明细")]),e._v(" "),r("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[r("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd"},attrs:{type:"success"},on:{click:e.handleAddproduct}},[e._v("添加商品")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),r("my-detail",{attrs:{control:e.control},on:{"update:control":function(t){e.control=t},product:e.productdetail}}),e._v(" "),r("div",{staticClass:"container"},[r("el-editable",{ref:"editable",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list2,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list2=t}}},[r("el-editable-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),r("el-editable-column",{attrs:{label:"编号",width:"55",align:"center",type:"index"}}),e._v(" "),r("el-editable-column",{attrs:{"edit-render":{name:"ElSelect",options:e.locationlist},prop:"locationId",align:"center",label:"货位",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"productCode",align:"center",label:"物品编号",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"productName",align:"center",label:"物品名称",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"color",align:"center",label:"颜色",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"typeIdname",align:"center",label:"规格",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"unit",align:"center",label:"单位",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"salePrice",align:"center",label:"零售原价",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber"},prop:"newSalePrice",align:"center",label:"零售调整价",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"tradePrice",align:"center",label:"批发原价",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber"},prop:"newTradePrice",align:"center",label:"批发调整价",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{prop:"memberPrice",align:"center",label:"会员原价",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber"},prop:"newMemberPrice",align:"center",label:"会员调整价",width:"150px"}}),e._v(" "),r("el-editable-column",{attrs:{"edit-render":{name:"ElInput"},prop:"remarks",align:"center",label:"备注",width:"150px"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[r("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd",width:"98px"},attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)])},[],!1,null,"ca4c234c",null);f.options.__file="AddAdjustPrice.vue";t.default=f.exports},U60J:function(e,t,r){},cBJS:function(e,t,r){"use strict";var a=r("U60J");r.n(a).a}}]);