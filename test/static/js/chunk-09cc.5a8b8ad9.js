(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-09cc"],{"/PQ/":function(e,n,t){"use strict";t.d(n,"i",function(){return p}),t.d(n,"b",function(){return d}),t.d(n,"h",function(){return o}),t.d(n,"l",function(){return i}),t.d(n,"e",function(){return r}),t.d(n,"k",function(){return l}),t.d(n,"c",function(){return s}),t.d(n,"f",function(){return u}),t.d(n,"j",function(){return c}),t.d(n,"a",function(){return m}),t.d(n,"m",function(){return v}),t.d(n,"d",function(){return I}),t.d(n,"g",function(){return y});var a=t("t3Un");function p(e){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("type",e),n.append("pagenum",1),n.append("pagesize",9999),Object(a.a)({url:"http://192.168.1.45:8080/supplierCategory/searchCategory",method:"post",data:n})}function d(e){var n=new URLSearchParams;return""!==e.supplierName&&null!==e.supplierName&&void 0!==e.supplierName&&n.append("supplierName",e.supplierName),""!==e.createId&&null!==e.createId&&void 0!==e.createId&&n.append("createId",e.createId),""!==e.typeId&&null!==e.typeId&&void 0!==e.typeId&&n.append("typeId",e.typeId),""!==e.supplierShortName&&null!==e.supplierShortName&&void 0!==e.supplierShortName&&n.append("supplierShortName",e.supplierShortName),""!==e.supplierIntroduction&&null!==e.supplierIntroduction&&void 0!==e.supplierIntroduction&&n.append("supplierIntroduction",e.supplierIntroduction),""!==e.countryId&&null!==e.countryId&&void 0!==e.countryId&&n.append("countryId",e.countryId),""!==e.provinceId&&null!==e.provinceId&&void 0!==e.provinceId&&n.append("provinceId",e.provinceId),""!==e.cityId&&null!==e.cityId&&void 0!==e.cityId&&n.append("cityId",e.cityId),""!==e.detailAddress&&null!==e.detailAddress&&void 0!==e.detailAddress&&n.append("detailAddress",e.detailAddress),""!==e.groupId&&null!==e.groupId&&void 0!==e.groupId&&n.append("groupId",e.groupId),""!==e.zipCode&&null!==e.zipCode&&void 0!==e.zipCode&&n.append("zipCode",e.zipCode),""!==e.contactPersonName&&null!==e.contactPersonName&&void 0!==e.contactPersonName&&n.append("contactPersonName",e.contactPersonName),""!==e.contactPersonPhone&&null!==e.contactPersonPhone&&void 0!==e.contactPersonPhone&&n.append("contactPersonPhone",e.contactPersonPhone),""!==e.regionId&&null!==e.regionId&&void 0!==e.regionId&&n.append("regionId",e.regionId),""!==e.giveId&&null!==e.giveId&&void 0!==e.giveId&&n.append("giveId",e.giveId),""!==e.transportId&&null!==e.transportId&&void 0!==e.transportId&&n.append("transportId",e.transportId),""!==e.levelId&&null!==e.levelId&&void 0!==e.levelId&&n.append("levelId",e.levelId),""!==e.isHot&&null!==e.isHot&&void 0!==e.isHot&&n.append("isHot",e.isHot),""!==e.isEffective&&null!==e.isEffective&&void 0!==e.isEffective&&n.append("isEffective",e.isEffective),""!==e.buyerId&&null!==e.buyerId&&void 0!==e.buyerId&&n.append("buyerId",e.buyerId),""!==e.businessScopeIntroduction&&null!==e.businessScopeIntroduction&&void 0!==e.businessScopeIntroduction&&n.append("businessScopeIntroduction",e.businessScopeIntroduction),""!==e.paymentId&&null!==e.paymentId&&void 0!==e.paymentId&&n.append("paymentId",e.paymentId),""!==e.moneyId&&null!==e.moneyId&&void 0!==e.moneyId&&n.append("moneyId",e.moneyId),""!==e.bankName&&null!==e.bankName&&void 0!==e.bankName&&n.append("bankName",e.bankName),""!==e.accountName&&null!==e.accountName&&void 0!==e.accountName&&n.append("accountName",e.accountName),""!==e.account&&null!==e.account&&void 0!==e.account&&n.append("account",e.account),""!==e.establishDate&&null!==e.establishDate&&void 0!==e.establishDate&&n.append("establishDate",e.establishDate),""!==e.legalPerson&&null!==e.legalPerson&&void 0!==e.legalPerson&&n.append("legalPerson",e.legalPerson),""!==e.taxNumber&&null!==e.taxNumber&&void 0!==e.taxNumber&&n.append("taxNumber",e.taxNumber),""!==e.businessLicense&&null!==e.businessLicense&&void 0!==e.businessLicense&&n.append("businessLicense",e.businessLicense),""!==e.companyTypeId&&null!==e.companyTypeId&&void 0!==e.companyTypeId&&n.append("companyTypeId",e.companyTypeId),Object(a.a)({url:"http://192.168.1.45:8080/supplier/create",method:"post",data:n})}function o(e){var n=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&n.append("id",e.id),""!==e.supplierName&&null!==e.supplierName&&void 0!==e.supplierName&&n.append("supplierName",e.supplierName),""!==e.typeId&&null!==e.typeId&&void 0!==e.typeId&&n.append("typeId",e.typeId),""!==e.regionId&&null!==e.regionId&&void 0!==e.regionId&&n.append("regionId",e.regionId),""!==e.levelId&&null!==e.levelId&&void 0!==e.levelId&&n.append("levelId",e.levelId),""!==e.pagenum&&null!==e.pagenum&&void 0!==e.pagenum&&n.append("pagenum",e.pagenum),""!==e.pagesize&&null!==e.pagesize&&void 0!==e.pagesize&&n.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/supplier/search",method:"post",data:n})}function i(e){var n=new URLSearchParams;return""!==e.supplierName&&null!==e.supplierName&&void 0!==e.supplierName&&n.append("supplierName",e.supplierName),""!==e.typeId&&null!==e.typeId&&void 0!==e.typeId&&n.append("typeId",e.typeId),""!==e.supplierShortName&&null!==e.supplierShortName&&void 0!==e.supplierShortName&&n.append("supplierShortName",e.supplierShortName),""!==e.supplierIntroduction&&null!==e.supplierIntroduction&&void 0!==e.supplierIntroduction&&n.append("supplierIntroduction",e.supplierIntroduction),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&n.append("countryId",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&n.append("provinceId",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&n.append("cityId",e.cityid),""!==e.detailAddress&&null!==e.detailAddress&&void 0!==e.detailAddress&&n.append("detailAddress",e.detailAddress),""!==e.groupId&&null!==e.groupId&&void 0!==e.groupId&&n.append("groupId",e.groupId),""!==e.groupId&&null!==e.groupId&&void 0!==e.groupId&&n.append("groupId",e.groupId),""!==e.zipCode&&null!==e.zipCode&&void 0!==e.zipCode&&n.append("zipCode",e.zipCode),""!==e.contactPersonName&&null!==e.contactPersonName&&void 0!==e.contactPersonName&&n.append("contactPersonName",e.contactPersonName),""!==e.contactPersonPhone&&null!==e.contactPersonPhone&&void 0!==e.contactPersonPhone&&n.append("contactPersonPhone",e.contactPersonPhone),""!==e.regionId&&null!==e.regionId&&void 0!==e.regionId&&n.append("regionId",e.regionId),""!==e.giveId&&null!==e.giveId&&void 0!==e.giveId&&n.append("giveId",e.giveId),""!==e.transportId&&null!==e.transportId&&void 0!==e.transportId&&n.append("transportId",e.transportId),""!==e.levelId&&null!==e.levelId&&void 0!==e.levelId&&n.append("levelId",e.levelId),""!==e.isHot&&null!==e.isHot&&void 0!==e.isHot&&n.append("isHot",e.isHot),""!==e.isEffective&&null!==e.isEffective&&void 0!==e.isEffective&&n.append("isEffective",e.isEffective),""!==e.buyerId&&null!==e.buyerId&&void 0!==e.buyerId&&n.append("buyerId",e.buyerId),""!==e.businessScopeIntroduction&&null!==e.businessScopeIntroduction&&void 0!==e.businessScopeIntroduction&&n.append("businessScopeIntroduction",e.businessScopeIntroduction),""!==e.paymentId&&null!==e.paymentId&&void 0!==e.paymentId&&n.append("paymentId",e.paymentId),""!==e.moneyId&&null!==e.moneyId&&void 0!==e.moneyId&&n.append("moneyId",e.moneyId),""!==e.bankName&&null!==e.bankName&&void 0!==e.bankName&&n.append("bankName",e.bankName),""!==e.accountName&&null!==e.accountName&&void 0!==e.accountName&&n.append("accountName",e.accountName),""!==e.account&&null!==e.account&&void 0!==e.account&&n.append("account",e.account),""!==e.establishDate&&null!==e.establishDate&&void 0!==e.establishDate&&n.append("establishDate",e.establishDate),""!==e.legalPerson&&null!==e.legalPerson&&void 0!==e.legalPerson&&n.append("legalPerson",e.legalPerson),""!==e.taxNumber&&null!==e.taxNumber&&void 0!==e.taxNumber&&n.append("taxNumber",e.taxNumber),""!==e.businessLicense&&null!==e.businessLicense&&void 0!==e.businessLicense&&n.append("businessLicense",e.businessLicense),""!==e.companyTypeId&&null!==e.companyTypeId&&void 0!==e.companyTypeId&&n.append("companyTypeId",e.companyTypeId),""!==e.id&&null!==e.id&&void 0!==e.id&&n.append("id",e.id),Object(a.a)({url:"http://192.168.1.45:8080/supplier/update",method:"post",data:n})}function r(e){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("modelids",e),Object(a.a)({url:"http://192.168.1.45:8080/supplier/delete",method:"post",data:n})}function l(){return Object(a.a)({url:"http://192.168.1.45:8080/supplierGroup/search",method:"post"})}function s(e){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("groupName",e),Object(a.a)({url:"http://192.168.1.45:8080/supplierGroup/create",method:"post",data:n})}function u(e){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("id",e),Object(a.a)({url:"http://192.168.1.45:8080/supplierGroup/delete",method:"post",data:n})}function c(e){var n=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&n.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&n.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&n.append("type",e.type),n.append("pagenum",e.pagenum),n.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/supplierCategory/searchCategory",method:"post",data:n})}function m(e){var n=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&n.append("categoryname",e.categoryname),""!==e.category&&null!==e.category&&n.append("category",e.category),""!==e.iseffective&&null!==e.iseffective&&n.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&n.append("type",e.type),Object(a.a)({url:"http://192.168.1.45:8080/supplierCategory/addCategory",method:"post",data:n})}function v(e){var n=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&n.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&n.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&n.append("id",e.id),Object(a.a)({url:"http://192.168.1.45:8080/supplierCategory/updateCategory",method:"post",data:n})}function I(e){var n=new URLSearchParams;return""!==e&&null!==e&&n.append("ids",e),Object(a.a)({url:"http://192.168.1.45:8080/supplierCategory/delateCategory",method:"post",data:n})}function y(e){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("supplierJson",e),Object(a.a)({url:"http://192.168.1.45:8080/supplierRecommendation/manyinsert",method:"post",data:n})}},20:function(e,n){},21:function(e,n){},22:function(e,n){},Rfdi:function(e,n,t){},W0nk:function(e,n,t){"use strict";var a=t("Rfdi");t.n(a).a},"gDS+":function(e,n,t){e.exports={default:t("oh+g"),__esModule:!0}},mkS8:function(e,n,t){"use strict";t.r(n);var a=t("gDS+"),p=t.n(a),d=t("N5aa"),o=t("/PQ/"),i={name:"ManySupplier",components:{UploadExcelComponent:d.a},data:function(){return{tableData:[],tableHeader:[],dizhi:"/static/file/ceshi.xlsx",uploadHead:[]}},methods:{beforeUpload:function(e){return e.size/1024/1024<1||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var n=e.results,t=e.header;this.tableData=n,this.tableHeader=["供应商编号","供应商名称","供应商简称","供应商类别","所在区域","采购员","供应商优质级别","建档人","建档日期"],this.uploadHead=n.map(function(e){return{id:e.供应商编号,supplierName:e.供应商名称,supplierShortName:e.供应商简称,typeName:e.供应商类别,regionName:e.所在区域,buyerName:e.采购员,levelName:e.供应商优质级别,createName:e.建档人,createTime:e.建档日期}}),console.log(t)},uploads:function(){var e=this;Object(o.g)(p()(this.uploadHead)).then(function(n){200===n.data.ret?e.$notify({title:"成功",message:"修改成功",type:"success",offset:100}):e.$notify.error({title:"错误",message:n.data.msg,offset:100})})}}},r=(t("W0nk"),t("KHd+")),l=Object(r.a)(i,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-container"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("下载模板  ")])]),e._v(" "),t("a",{attrs:{href:"/static/file/经销商资料表.xlsx"}},[t("el-button",{attrs:{type:"primary"}},[e._v("下载模板")])],1)]),e._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("上传Excel表格")])]),e._v(" "),t("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1),e._v(" "),t("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("表格数据")]),e._v(" "),t("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"primary"},on:{click:e.uploads}},[e._v("导入数据")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,function(e){return t("el-table-column",{key:e,attrs:{prop:e,label:e}})}))],1)],1)},[],!1,null,"4a6e1402",null);l.options.__file="ManySupplier.vue";n.default=l.exports},"oh+g":function(e,n,t){var a=t("WEpk"),p=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return p.stringify.apply(p,arguments)}}}]);
