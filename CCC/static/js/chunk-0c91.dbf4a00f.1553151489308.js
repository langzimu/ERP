(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0c91"],{"+te0":function(e,t,l){},ZjjT:function(e,t,l){"use strict";var o=l("+te0");l.n(o).a},aOaJ:function(e,t,l){"use strict";l.r(t);var o=l("gDS+"),r=l.n(o),a=l("LVwP"),n=l("moiu"),i=l("XdVW"),d=l("oxG2"),s=l("U+tH"),c=l("1DYF"),p=l("bll9"),u={name:"AddBuildUp",components:{MyBulid:l("2HIk").a,MyRepository:d.a,MyDetail:c.a,MyCreate:p.a,MyAccept:s.a},data:function(){return{depts:[],handlePersonId:"",buildupRepositoryId:"",createcontrol:!1,repositorycontrol:!1,control:!1,buildcontrol:!1,personalForm:{createPersonId:3,countryId:1,repositoryId:438,regionId:2,sourceType:"1"},personalrules:{handlePersonId:[{required:!0,message:"请选择组装人",trigger:"focus"}],buildupRepositoryId:[{required:!0,message:"请选择组装仓库",trigger:"focus"}]},list2:[],list3:[],locationlistparms:{pageNum:1,pageSize:1999,repositoryId:""},locationlist:[],validRules:{}}},mounted:function(){this.getlist()},methods:{getlist:function(){var e=this;Object(n.m)().then(function(t){200===t.data.ret&&(e.depts=t.data.data.content)})},handlechoose:function(){this.createcontrol=!0},createname:function(e){console.log(e),this.handlePersonId=e.personName,this.personalForm.handlePersonId=e.id},handlechooseRep:function(){this.repositorycontrol=!0},repositoryname:function(e){var t=this;console.log(e),this.buildupRepositoryId=e.repositoryName,this.personalForm.buildupRepositoryId=e.id,this.locationlistparms.repositoryId=e.id,Object(a.g)(this.locationlistparms).then(function(e){200===e.data.ret&&(t.locationlist=e.data.data.content.list.map(function(e){return{value:e.id,label:e.locationName}}))})},handleAddproduct:function(){this.control=!0},productdetail:function(e){console.log(e);for(var t=this.$refs.editable.getRecords(),l=0;l<e.length;l++){for(var o=0;o<t.length;o++)if(e[l].productCode===t[o].productCode)return this.$notify.error({title:"错误",message:"物品已添加",offset:100}),!1;this.$refs.editable.insert(e[l])}},handleAddproduct2:function(){this.buildcontrol=!0},productdetail2:function(e){console.log(e);for(var t=this.$refs.editable2.getRecords(),l=0;l<e.length;l++){for(var o=0;o<t.length;o++)if(e[l].productCode===t[o].productCode)return this.$notify.error({title:"错误",message:"物品已添加",offset:100}),!1;this.$refs.editable2.insert(e[l])}},getSize:function(e,t){return e*t},getSize2:function(e,t){return e*t},restAllForm:function(){this.personalForm={createPersonId:3,countryId:1,repositoryId:438,regionId:2},this.buildupRepositoryId="",this.handlePersonId=""},handlesave:function(){var e=this,t=this.$refs.editable.getRecords();if(0===t.length)return this.$notify.error({title:"错误",message:"明细表不能为空",offset:100}),!1;t.map(function(e){return e}).forEach(function(e){return null!==e.locationId&&""!==e.locationId&&void 0!==e.locationId||delete e.locationId,null!==e.productCode&&""!==e.productCode&&void 0!==e.productCode||delete e.productCode,null!==e.productName&&""!==e.productName&&void 0!==e.productName||delete e.productName,null!==e.color&&""!==e.color&&void 0!==e.color||delete e.color,null!==e.typeId&&""!==e.typeId&&void 0!==e.typeId||delete e.typeId,null!==e.unit&&""!==e.unit&&void 0!==e.unit||delete e.unit,null!==e.quantity&&""!==e.quantity&&void 0!==e.quantity||delete e.quantity,null!==e.price&&""!==e.price&&void 0!==e.price||delete e.price,null!==e.totalMoney&&""!==e.totalMoney&&void 0!==e.totalMoney||delete e.totalMoney,null!==e.remarks&&""!==e.remarks&&void 0!==e.remarks||delete e.remarks,null!==e.typeIdname&&""!==e.typeIdname&&void 0!==e.typeIdname||delete e.typeIdname,null!==e.productType&&""!==e.productType&&void 0!==e.productType||delete e.productType,e});var l=this.$refs.editable2.getRecords();if(0===l.length)return this.$notify.error({title:"错误",message:"明细表不能为空",offset:100}),!1;l.map(function(e){return e}).forEach(function(e){return null!==e.locationId&&""!==e.locationId&&void 0!==e.locationId||delete e.locationId,null!==e.productCode&&""!==e.productCode&&void 0!==e.productCode||delete e.productCode,null!==e.productName&&""!==e.productName&&void 0!==e.productName||delete e.productName,null!==e.color&&""!==e.color&&void 0!==e.color||delete e.color,null!==e.typeId&&""!==e.typeId&&void 0!==e.typeId||delete e.typeId,null!==e.unit&&""!==e.unit&&void 0!==e.unit||delete e.unit,null!==e.quantity&&""!==e.quantity&&void 0!==e.quantity||delete e.quantity,null!==e.price&&""!==e.price&&void 0!==e.price||delete e.price,null!==e.totalMoney&&""!==e.totalMoney&&void 0!==e.totalMoney||delete e.totalMoney,null!==e.remarks&&""!==e.remarks&&void 0!==e.remarks||delete e.remarks,null!==e.typeIdname&&""!==e.typeIdname&&void 0!==e.typeIdname||delete e.typeIdname,null!==e.productType&&""!==e.productType&&void 0!==e.productType||delete e.productType,e});var o=r()(this.personalForm),a=r()(t),n=r()(l);console.log(o),console.log(a),console.log(n),console.log(this.personalForm),this.$refs.personalForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;e.$refs.editable.validate().then(function(t){t&&Object(i.a)(o,a,n,e.personalForm).then(function(t){console.log(t),200===t.data.ret?(e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.editable.clear(),e.$refs.editable2.clear(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields()):e.$notify.error({title:"错误",message:t.data.msg,offset:100})})}).catch(function(t){return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/BuildUp/NewBuildUp",name:"NewBuildUp",fullPath:"/BuildUp/NewBuildUp",title:"NewBuildUp"}).then(function(e){e.visitedViews})}}},m=(l("ZjjT"),l("KHd+")),f=Object(m.a)(u,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"ERP-container"},[l("div",{staticClass:"app-container",staticStyle:{"padding-right":"0"}},[l("el-card",{staticClass:"box-card"},[l("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),l("div",{staticClass:"container"},[l("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-width":"100px"}},[l("el-row",[l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("BuildUp.title")}},[l("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请输入组装单主题",clearable:""},model:{value:e.personalForm.title,callback:function(t){e.$set(e.personalForm,"title",t)},expression:"personalForm.title"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("BuildUp.handlePersonId"),prop:"handlePersonId"}},[l("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请选择经办人",clearable:""},on:{focus:e.handlechoose},model:{value:e.handlePersonId,callback:function(t){e.handlePersonId=t},expression:"handlePersonId"}})],1),e._v(" "),l("my-create",{attrs:{createcontrol:e.createcontrol},on:{"update:createcontrol":function(t){e.createcontrol=t},createname:e.createname}})],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("BuildUp.buildupDeptId")}},[l("el-select",{staticStyle:{"margin-left":"18px",width:"218px"},attrs:{placeholder:"请选择组装部门",clearable:""},model:{value:e.personalForm.buildupDeptId,callback:function(t){e.$set(e.personalForm,"buildupDeptId",t)},expression:"personalForm.buildupDeptId"}},e._l(e.depts,function(e,t){return l("el-option",{key:t,attrs:{value:e.id,label:e.deptName}})}))],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("BuildUp.buildupRepositoryId"),prop:"buildupRepositoryId"}},[l("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请选择仓库",clearable:""},on:{focus:e.handlechooseRep},model:{value:e.buildupRepositoryId,callback:function(t){e.buildupRepositoryId=t},expression:"buildupRepositoryId"}})],1),e._v(" "),l("my-repository",{attrs:{repositorycontrol:e.repositorycontrol},on:{"update:repositorycontrol":function(t){e.repositorycontrol=t},repositoryname:e.repositoryname}})],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:e.$t("BuildUp.summary"),prop:"summary"}},[l("el-input",{staticStyle:{"margin-left":"18px"},attrs:{placeholder:"请输入摘要",clearable:""},model:{value:e.personalForm.summary,callback:function(t){e.$set(e.personalForm,"summary",t)},expression:"personalForm.summary"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"合为一个单据"}},[l("el-select",{staticStyle:{"margin-left":"18px",width:"218px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.personalForm.type,callback:function(t){e.$set(e.personalForm,"type",t)},expression:"personalForm.type"}},[l("el-option",{attrs:{value:"1",label:"是"}}),e._v(" "),l("el-option",{attrs:{value:"2",label:"否"}})],1)],1)],1)],1)],1)],1)]),e._v(" "),l("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[l("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("待组装的商品")]),e._v(" "),l("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[l("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd"},attrs:{type:"success"},on:{click:e.handleAddproduct}},[e._v("添加商品")]),e._v(" "),l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),l("my-detail",{attrs:{control:e.control},on:{"update:control":function(t){e.control=t},product:e.productdetail}}),e._v(" "),l("div",{staticClass:"container"},[l("el-editable",{ref:"editable",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list2,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list2=t}}},[l("el-editable-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),l("el-editable-column",{attrs:{label:"编号",width:"55",align:"center",type:"index"}}),e._v(" "),l("el-editable-column",{attrs:{"edit-render":{name:"ElSelect",options:e.locationlist},prop:"locationId",align:"center",label:"货位",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"productCode",align:"center",label:"物品编号",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"productName",align:"center",label:"物品名称",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"color",align:"center",label:"颜色",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"typeIdname",align:"center",label:"规格",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"unit",align:"center",label:"单位",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber"},prop:"quantity",align:"center",label:"数量",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"price",align:"center",label:"单价",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"totalMoney",align:"center",label:"金额",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("p",[e._v(e._s(e.getSize2(t.row.quantity,t.row.price)))])]}}])}),e._v(" "),l("el-editable-column",{attrs:{"edit-render":{name:"ElInput"},prop:"remarks",align:"center",label:"备注",width:"150px"}})],1)],1)],1),e._v(" "),l("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"15px"}},[l("h2",{ref:"fuzhu",staticClass:"form-name"},[e._v("组装后的商品")]),e._v(" "),l("div",{staticClass:"buttons",staticStyle:{"margin-top":"58px"}},[l("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd"},attrs:{type:"success"},on:{click:e.handleAddproduct2}},[e._v("添加商品")]),e._v(" "),l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.$refs.editable2.removeSelecteds()}}},[e._v("删除")])],1),e._v(" "),l("my-bulid",{attrs:{buildcontrol:e.buildcontrol},on:{"update:buildcontrol":function(t){e.buildcontrol=t},product2:e.productdetail2}}),e._v(" "),l("div",{staticClass:"container"},[l("el-editable",{ref:"editable2",staticClass:"click-table1",staticStyle:{width:"100%"},attrs:{data:e.list3,"edit-config":{showIcon:!0,showStatus:!0},"edit-rules":e.validRules,stripe:"",border:"",size:"medium"},on:{"update:data":function(t){e.list3=t}}},[l("el-editable-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),l("el-editable-column",{attrs:{label:"编号",width:"55",align:"center",type:"index"}}),e._v(" "),l("el-editable-column",{attrs:{"edit-render":{name:"ElSelect",options:e.locationlist},prop:"locationId",align:"center",label:"货位",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"productCode",align:"center",label:"物品编号",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"productName",align:"center",label:"物品名称",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"color",align:"center",label:"颜色",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"typeIdname",align:"center",label:"规格",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"unit",align:"center",label:"单位",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{"edit-render":{name:"ElInputNumber"},prop:"quantity",align:"center",label:"数量",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"price",align:"center",label:"单价",width:"150px"}}),e._v(" "),l("el-editable-column",{attrs:{prop:"totalMoney",align:"center",label:"金额",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("p",[e._v(e._s(e.getSize(t.row.quantity,t.row.price)))])]}}])}),e._v(" "),l("el-editable-column",{attrs:{"edit-render":{name:"ElInput"},prop:"remarks",align:"center",label:"备注",width:"150px"}})],1)],1)],1),e._v(" "),l("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[l("el-button",{staticStyle:{background:"#3696fd","border-color":"#3696fd",width:"98px"},attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)],1)])},[],!1,null,"c6684b52",null);f.options.__file="AddBuildUp.vue";t.default=f.exports}}]);