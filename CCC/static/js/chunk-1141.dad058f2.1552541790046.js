(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1141"],{"+610":function(e,t,a){"use strict";var l=a("btnB");a.n(l).a},FXfK:function(e,t,a){"use strict";a.r(t);var l=a("VG0r"),r={name:"NewProduct",components:{MyEmp:a("777i").a},data:function(){return{measurements:[],empcontrol:!1,picidsVisible:!1,picidsImageUrl:"",picidsData:{type:2},detailpicVisible:!1,detailpicImageUrl:"",detailpicData:{type:7},categorys:[],types:[],levels:[],supplierid:"",personalForm:{code:"",barcode:"",productname:"",typeid:"",categoryid:"",color:"",brand:"",kpigrade:"",point:"",zhibaoqi:"",weight:"",volume:"",costprice:"",tradeprice:"",saleprice:"",purchaseprice:"",lowerprice:"",createid:"",level:"",purchasemeasurement:"",salemeasurement:"",stockmeasurement:"",producemeasurement:"",source:"",valuation:"",isactive:"",picids:[],detailpicid:[],memberprice:""},personalrules:{code:[{required:!0,message:"请输入物料编码",trigger:"blur"}],productname:[{required:!0,message:"请输入产品名称",trigger:"blur"}],valuation:[{required:!0,message:"请选择计价方式",trigger:"change"}],costprice:[{required:!0,message:"请输入成本价",trigger:"blur"}],saleprice:[{required:!0,message:"请输入零售价",trigger:"blur"}],purchaseprice:[{required:!0,message:"请输入采购价",trigger:"blur"}],isBatch:[{required:!0,message:"请选择批次设置",trigger:"change"}]}}},created:function(){this.getcategorys()},methods:{getcategorys:function(){var e=this;Object(l.o)(1).then(function(t){console.log(t),200===t.data.ret&&(e.categorys=t.data.data.content.list)}),Object(l.o)(2).then(function(t){200===t.data.ret&&(e.types=t.data.data.content.list)}),Object(l.o)(3).then(function(t){200===t.data.ret&&(e.levels=t.data.data.content.list)}),Object(l.p)().then(function(t){200===t.data.ret&&(e.measurements=t.data.data.content)})},submitUpload:function(){this.$refs.upload.submit()},handlepicRemove:function(e,t){console.log(e,t)},handlepicPreview:function(e){this.picidsImageUrl=e.url,this.picidsVisible=!0},handlepicsuccess:function(e){this.personalForm.picids.push(e.data.content.picId),console.log(e.data.content.picId)},detailpicsubmitUpload:function(){this.$refs.detailpicupload.submit()},handledetailpicRemove:function(e,t){console.log(e,t)},handledetailpicPreview:function(e){this.picidsImageUrl=e.url,this.picidsVisible=!0},handledetailpicsuccess:function(e){this.personalForm.detailpicid.push(e.data.content.picId),console.log(e.data.content.picId)},handlesave:function(){var e=this;this.$refs.personalForm.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;e.$refs.personalForm2.validate(function(t){if(!t)return e.$notify.error({title:"错误",message:"信息未填完整",offset:100}),!1;Object(l.e)(e.personalForm).then(function(t){console.log(t),200===t.data.ret?(e.$notify({title:"成功",message:"保存成功",type:"success",offset:100}),e.restAllForm(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields(),e.$refs.personalForm2.clearValidate(),e.$refs.personalForm2.resetFields(),e.$refs.detailpicupload.clearFiles(),e.$refs.upload.clearFiles(),e.$router.go(-1)):e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})})},restAllForm:function(){this.personalForm={code:"",barcode:"",productname:"",typeid:"",categoryid:"",color:"",brand:"",kpigrade:"",point:"",zhibaoqi:"",weight:"",volume:"",costprice:"",tradeprice:"",saleprice:"",purchaseprice:"",lowerprice:"",supplierid:"",createid:"",level:"",purchasemeasurement:"",salemeasurement:"",stockmeasurement:"",producemeasurement:"",source:"",valuation:"",isactive:"",picids:[],detailpicid:[],memberprice:""},this.supplierid=""},handleentry:function(){var e=this;this.$refs.personalForm.validate(function(t){if(!t){e.$notify.error({title:"错误",message:"信息未填完整",offset:100});var a=e.$refs.lianxi.offsetTop;return console.log(a),document.documentElement.scrollTop=a-100,!1}e.$refs.personalForm2.validate(function(t){if(!t){e.$notify.error({title:"错误",message:"信息未填完整",offset:100});var a=e.$refs.lianxi.offsetTop;return console.log(a),document.documentElement.scrollTop=a-100,!1}Object(l.e)(e.personalForm).then(function(t){if(console.log(t),200===t.data.ret){e.$notify({title:"成功",message:"保存成功",type:"success",offset:100});var a=e.$refs.geren.offsetTop;console.log(a),document.documentElement.scrollTop=a-100,e.restAllForm(),e.$refs.personalForm.clearValidate(),e.$refs.personalForm.resetFields(),e.$refs.personalForm2.clearValidate(),e.$refs.personalForm2.resetFields(),e.$refs.detailpicupload.clearFiles(),e.$refs.upload.clearFiles()}else e.$notify.error({title:"错误",message:t.data.msg,offset:100})})})})},handlecancel:function(){this.$router.go(-1);this.$store.dispatch("delView",{path:"/Product/NewProduct",name:"NewProduct",fullPath:"/Product/NewProduct",title:"NewProduct"}).then(function(e){e.visitedViews})},handlechoose:function(){this.empcontrol=!0},personName:function(e){console.log(e),this.supplierid=e.personName,this.personalForm.supplierid=e.id},updatecate:function(){this.getcategorys()}}},o=(a("+610"),a("KHd+")),s=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ERP-container"},[a("div",{staticClass:"app-container"},[a("h2",{ref:"geren",staticClass:"form-name"},[e._v("基本信息")]),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"personalForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.code"),prop:"code"}},[a("el-input",{attrs:{placeholder:"请输入物料编码",clearable:""},model:{value:e.personalForm.code,callback:function(t){e.$set(e.personalForm,"code",t)},expression:"personalForm.code"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.productname"),prop:"productname"}},[a("el-input",{attrs:{placeholder:"请输入产品名称",clearable:""},model:{value:e.personalForm.productname,callback:function(t){e.$set(e.personalForm,"productname",t)},expression:"personalForm.productname"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.barcode")}},[a("el-input",{attrs:{placeholder:"请输入条码",clearable:""},model:{value:e.personalForm.barcode,callback:function(t){e.$set(e.personalForm,"barcode",t)},expression:"personalForm.barcode"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.categoryid")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择物品分类"},on:{focus:e.updatecate},model:{value:e.personalForm.categoryid,callback:function(t){e.$set(e.personalForm,"categoryid",t)},expression:"personalForm.categoryid"}},e._l(e.categorys,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.typeid")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择规格型号"},on:{focus:e.updatecate},model:{value:e.personalForm.typeid,callback:function(t){e.$set(e.personalForm,"typeid",t)},expression:"personalForm.typeid"}},e._l(e.types,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.purchasemeasurement")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择采购计量单位"},on:{focus:e.updatecate},model:{value:e.personalForm.purchasemeasurement,callback:function(t){e.$set(e.personalForm,"purchasemeasurement",t)},expression:"personalForm.purchasemeasurement"}},e._l(e.measurements,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.salemeasurement")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择销售计量单位"},on:{focus:e.updatecate},model:{value:e.personalForm.salemeasurement,callback:function(t){e.$set(e.personalForm,"salemeasurement",t)},expression:"personalForm.salemeasurement"}},e._l(e.measurements,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.stockmeasurement")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择库存计量单位"},on:{focus:e.updatecate},model:{value:e.personalForm.stockmeasurement,callback:function(t){e.$set(e.personalForm,"stockmeasurement",t)},expression:"personalForm.stockmeasurement"}},e._l(e.measurements,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.producemeasurement")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择生产计量单位"},on:{focus:e.updatecate},model:{value:e.personalForm.producemeasurement,callback:function(t){e.$set(e.personalForm,"producemeasurement",t)},expression:"personalForm.producemeasurement"}},e._l(e.measurements,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.color")}},[a("el-input",{attrs:{placeholder:"请输入颜色",clearable:""},model:{value:e.personalForm.color,callback:function(t){e.$set(e.personalForm,"color",t)},expression:"personalForm.color"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.brand")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择品牌"},model:{value:e.personalForm.brand,callback:function(t){e.$set(e.personalForm,"brand",t)},expression:"personalForm.brand"}},[a("el-option",{attrs:{value:"1",label:"类1"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"类2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.level")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择档次级别"},on:{focus:e.updatecate},model:{value:e.personalForm.level,callback:function(t){e.$set(e.personalForm,"level",t)},expression:"personalForm.level"}},e._l(e.levels,function(e,t){return a("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})}))],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.supplierid")}},[a("el-input",{attrs:{placeholder:"请选择供应商",clearable:""},on:{focus:e.handlechoose},model:{value:e.supplierid,callback:function(t){e.supplierid=t},expression:"supplierid"}})],1),e._v(" "),a("my-emp",{attrs:{control:e.empcontrol},on:{"update:control":function(t){e.empcontrol=t},personName:e.personName}}),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.source")}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择来源"},model:{value:e.personalForm.source,callback:function(t){e.$set(e.personalForm,"source",t)},expression:"personalForm.source"}},[a("el-option",{attrs:{value:"1",label:"类1"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"类2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.kpigrade")}},[a("el-input",{attrs:{placeholder:"请输入绩效分",clearable:""},model:{value:e.personalForm.kpigrade,callback:function(t){e.$set(e.personalForm,"kpigrade",t)},expression:"personalForm.kpigrade"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.point")}},[a("el-input",{attrs:{placeholder:"请输入商品积分",clearable:""},model:{value:e.personalForm.point,callback:function(t){e.$set(e.personalForm,"point",t)},expression:"personalForm.point"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.zhibaoqi")}},[a("el-input",{attrs:{placeholder:"请输入质保期",clearable:""},model:{value:e.personalForm.zhibaoqi,callback:function(t){e.$set(e.personalForm,"zhibaoqi",t)},expression:"personalForm.zhibaoqi"}},[a("template",{slot:"append"},[e._v("天")])],2)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.weight")}},[a("el-input",{attrs:{placeholder:"请输入重量",clearable:""},model:{value:e.personalForm.weight,callback:function(t){e.$set(e.personalForm,"weight",t)},expression:"personalForm.weight"}},[a("template",{slot:"append"},[e._v("KG")])],2)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.volume")}},[a("el-input",{attrs:{placeholder:"请输入体积",clearable:""},model:{value:e.personalForm.volume,callback:function(t){e.$set(e.personalForm,"volume",t)},expression:"personalForm.volume"}},[a("template",{slot:"append"},[e._v("m³")])],2)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.isactive")}},[a("el-radio-group",{staticStyle:{width:"80%"},model:{value:e.personalForm.isactive,callback:function(t){e.$set(e.personalForm,"isactive",t)},expression:"personalForm.isactive"}},[a("el-radio",{staticStyle:{width:"50%"},attrs:{label:1}},[e._v("YES")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("NO")])],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.isBatch"),prop:"isBatch"}},[a("el-radio-group",{staticStyle:{width:"80%"},model:{value:e.personalForm.isBatch,callback:function(t){e.$set(e.personalForm,"isBatch",t)},expression:"personalForm.isBatch"}},[a("el-radio",{staticStyle:{width:"50%"},attrs:{label:1}},[e._v("使用")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("不使用")])],1)],1)],1)],1),e._v(" "),a("h2",{ref:"lianxi",staticClass:"form-name"},[e._v("价格信息")]),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{ref:"personalForm2",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,rules:e.personalrules,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.valuation"),prop:"valuation"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.personalForm.valuation,callback:function(t){e.$set(e.personalForm,"valuation",t)},expression:"personalForm.valuation"}},[a("el-option",{attrs:{value:"1",label:"类1"}}),e._v(" "),a("el-option",{attrs:{value:"2",label:"类2"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.costprice"),prop:"costprice"}},[a("el-input",{attrs:{placeholder:"请输入成本价",clearable:""},model:{value:e.personalForm.costprice,callback:function(t){e.$set(e.personalForm,"costprice",t)},expression:"personalForm.costprice"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.tradeprice")}},[a("el-input",{attrs:{placeholder:"请输入批发价",clearable:""},model:{value:e.personalForm.tradeprice,callback:function(t){e.$set(e.personalForm,"tradeprice",t)},expression:"personalForm.tradeprice"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.saleprice"),prop:"saleprice"}},[a("el-input",{attrs:{placeholder:"请输入零售价",clearable:""},model:{value:e.personalForm.saleprice,callback:function(t){e.$set(e.personalForm,"saleprice",t)},expression:"personalForm.saleprice"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.purchaseprice"),prop:"purchaseprice"}},[a("el-input",{attrs:{placeholder:"请输入采购价",clearable:""},model:{value:e.personalForm.purchaseprice,callback:function(t){e.$set(e.personalForm,"purchaseprice",t)},expression:"personalForm.purchaseprice"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.lowerprice")}},[a("el-input",{attrs:{placeholder:"请输入最低价",clearable:""},model:{value:e.personalForm.lowerprice,callback:function(t){e.$set(e.personalForm,"lowerprice",t)},expression:"personalForm.lowerprice"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("Product.memberprice")}},[a("el-input",{attrs:{placeholder:"请输入会员价",clearable:""},model:{value:e.personalForm.memberprice,callback:function(t){e.$set(e.personalForm,"memberprice",t)},expression:"personalForm.memberprice"}})],1)],1)],1),e._v(" "),a("h2",{staticClass:"form-name"},[e._v("图片信息")]),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{staticClass:"demo-ruleForm",staticStyle:{"margin-left":"30px"},attrs:{model:e.personalForm,inline:!0,"status-icon":"","label-position":"top","label-width":"300px"}},[a("el-form-item",{staticStyle:{width:"100%","margin-top":"1%"},attrs:{label:e.$t("Product.picids")}},[a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v(e._s(e.$t("public.uploadimage")))]),e._v(" "),a("el-upload",{ref:"upload",attrs:{"on-preview":e.handlepicPreview,"on-remove":e.handlepicRemove,"on-success":e.handlepicsuccess,data:e.picidsData,"auto-upload":!1,action:"http://192.168.1.26:9090/erp/upload/uploadpic","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.picidsVisible},on:{"update:visible":function(t){e.picidsVisible=t}}},[a("img",{attrs:{src:e.picidsImageUrl,width:"100%",alt:""}})])],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%","margin-top":"1%"},attrs:{label:e.$t("Product.detailpicid")}},[a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"small",type:"success"},on:{click:e.detailpicsubmitUpload}},[e._v(e._s(e.$t("public.uploadimage")))]),e._v(" "),a("el-upload",{ref:"detailpicupload",attrs:{"on-preview":e.handledetailpicPreview,"on-remove":e.handledetailpicRemove,"on-success":e.handledetailpicsuccess,data:e.detailpicData,"auto-upload":!1,action:"http://192.168.1.26:9090/erp/upload/uploadpic","list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.detailpicVisible},on:{"update:visible":function(t){e.detailpicVisible=t}}},[a("img",{attrs:{src:e.detailpicImageUrl,width:"100%",alt:""}})])],1)],1)],1),e._v(" "),a("div",{staticClass:"buttons",staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handlesave()}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){e.handleentry()}}},[e._v("继续录入")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.handlecancel()}}},[e._v("取消")])],1)])])},[],!1,null,"7925a0b2",null);s.options.__file="NewProduct.vue";t.default=s.exports},btnB:function(e,t,a){}}]);