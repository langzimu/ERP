(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-69bc"],{"+Khs":function(e,t,i){"use strict";var n=i("Q2AE"),a={inserted:function(e,t,i){var a=t.value,o=n.a.getters&&n.a.getters.roles;if(!a[0])throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=a[0];o.some(function(e){return r.includes(e)})||a[1]===n.a.getters.userId||e.parentNode&&e.parentNode.removeChild(e)}},o=function(e){e.directive("permission2",a)};window.Vue&&(window.permission2=a,Vue.use(o)),a.install=o;t.a=a},"/4CO":function(e,t,i){"use strict";var n,a={filters:{statfilter:function(e){return{0:n.$t("updates.wsh"),1:n.$t("updates.shz"),2:n.$t("Hmodule.shtg"),3:n.$t("Hmodule.shbtg")}[e]},stockTypeIdFilter:function(e){return{1:"采购1"}[e]},sourceTypeFilter:function(e){return{1:n.$t("updates.cgsq"),2:n.$t("updates.cgjhd"),3:n.$t("updates.cgxjd"),4:n.$t("Hmodule.Nosource")}[e]},currencyIdFilter:function(e){return{1:"PHP",2:"USD",3:"RMB"}[e]},receiptStatFilter:function(e){return{1:n.$t("updates.zd"),2:n.$t("updates.zx"),3:n.$t("updates.jd")}[e]},payIdFilter:function(e){return{1:"现金"}[e]}},props:{detailcontrol:{type:Boolean,default:!1},detaildata:{type:Object,default:null}},data:function(){return{reviewList:[],list2:[],total:0,tableKey:0,editVisible:this.detailcontrol,personalForm:this.detaildata}},watch:{detailcontrol:function(){this.editVisible=this.detailcontrol},detaildata:function(){this.personalForm=this.detaildata,this.list2=this.personalForm.stockOrderVos,console.log(this.personalForm)}},beforeCreate:function(){n=this},methods:{getTaxMoney2:function(e){return e.taxMoney=e.price*e.taxRate,e.taxMoney},getTaxMoney:function(e){return e.includeTaxMoney=e.plannedQuantity*e.includeTaxPrice,e.includeTaxMoney},getMoney:function(e){return e.money=e.plannedQuantity*e.price,e.money},handlecancel:function(){this.editVisible=!1}}},o=(i("eoLv"),i("KHd+")),r=Object(o.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{staticClass:"edit",attrs:{visible:e.editVisible,detailcontrol:e.detailcontrol,detaildata:e.detaildata,"close-on-press-escape":!1,title:e.personalForm.sourceNumber+e.$t("updates.xqing"),"append-to-body":"",width:"1010px",top:"-10px"},on:{"update:visible":function(t){e.editVisible=t},close:function(t){e.$emit("update:detailcontrol",!1)}}},[i("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"63px"},attrs:{shadow:"never"}},[i("el-table",{key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list2,border:"",fit:"",height:"800px"}},[i("el-table-column",{attrs:{label:e.$t("StockQuery.productCode"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.personalForm.productCode))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.productName"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.personalForm.productName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.typeId"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.personalForm.typeId))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.unit"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.personalForm.unit))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.orderNumber"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.orderNumber))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.orderDate"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.orderDate))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.stockPersonName"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.stockPersonName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.supplierName"),resizable:!1,prop:"judgeStat",align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.supplierName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.price"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.stockOrderDetailVos[0].price))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.taxRate"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.stockOrderDetailVos[0].taxRate))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.includeTaxPrice"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.stockOrderDetailVos[0].includeTaxPrice))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.stockQuantity"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.stockOrderDetailVos[0].stockQuantity))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.money"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.stockOrderDetailVos[0].money))])]}}])})],1)],1)],1)},[],!1,null,"a4f8358e",null);r.options.__file="DetailList.vue";t.a=r.exports},"41Be":function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("Q2AE");function a(e){if(e&&e instanceof Array&&e.length>0){var t=e;return!!(n.a.getters&&n.a.getters.roles).some(function(e){return t.includes(e)})}return console.error("need roles!"),!1}},NG3u:function(e,t,i){"use strict";i.d(t,"d",function(){return a}),i.d(t,"a",function(){return o}),i.d(t,"b",function(){return r}),i.d(t,"c",function(){return l});var n=i("t3Un");function a(e){var t=new URLSearchParams;return""!==e.productCode&&null!==e.productCode&&void 0!==e.productCode&&t.append("productCode",e.productCode),""!==e.productName&&null!==e.productName&&void 0!==e.productName&&t.append("productName",e.productName),""!==e.beginTime&&null!==e.beginTime&&void 0!==e.beginTime&&t.append("beginTime",e.beginTime),""!==e.endTime&&null!==e.endTime&&void 0!==e.endTime&&t.append("endTime",e.endTime),t.append("pageNum",e.pageNum),t.append("pageSize",e.pageSize),Object(n.a)({url:"/stockquery/stockpricelist",method:"post",data:t})}function o(e){var t=new URLSearchParams;return""!==e.productCode&&null!==e.productCode&&void 0!==e.productCode&&t.append("productCode",e.productCode),""!==e.supplierId&&null!==e.supplierId&&void 0!==e.supplierId&&t.append("supplierId",e.supplierId),""!==e.beginTime&&null!==e.beginTime&&void 0!==e.beginTime&&t.append("beginTime",e.beginTime),""!==e.endTime&&null!==e.endTime&&void 0!==e.endTime&&t.append("endTime",e.endTime),""!==e.repositoryId&&null!==e.repositoryId&&void 0!==e.repositoryId&&t.append("repositoryId",e.repositoryId),""!==e.regionIds&&null!==e.regionIds&&void 0!==e.regionIds&&t.append("regionIds",e.regionIds),t.append("pageNum",e.pageNum),t.append("pageSize",e.pageSize),Object(n.a)({url:"/stockArrival/searchArrivalSummary",method:"post",data:t})}function r(e){var t=new URLSearchParams;return""!==e.productCode&&null!==e.productCode&&void 0!==e.productCode&&t.append("productCode",e.productCode),""!==e.supplierId&&null!==e.supplierId&&void 0!==e.supplierId&&t.append("supplierId",e.supplierId),""!==e.beginTime&&null!==e.beginTime&&void 0!==e.beginTime&&t.append("beginTime",e.beginTime),""!==e.endTime&&null!==e.endTime&&void 0!==e.endTime&&t.append("endTime",e.endTime),""!==e.repositoryId&&null!==e.repositoryId&&void 0!==e.repositoryId&&t.append("repositoryId",e.repositoryId),""!==e.regionIds&&null!==e.regionIds&&void 0!==e.regionIds&&t.append("regionIds",e.regionIds),t.append("pageNum",e.pageNum),t.append("pageSize",e.pageSize),Object(n.a)({url:"/stockArrival/searchOnSummary",method:"post",data:t})}function l(e){var t=new URLSearchParams;return""!==e.productCode&&null!==e.productCode&&void 0!==e.productCode&&t.append("productCode",e.productCode),""!==e.supplierId&&null!==e.supplierId&&void 0!==e.supplierId&&t.append("supplierId",e.supplierId),""!==e.beginTime&&null!==e.beginTime&&void 0!==e.beginTime&&t.append("beginTime",e.beginTime),""!==e.endTime&&null!==e.endTime&&void 0!==e.endTime&&t.append("endTime",e.endTime),""!==e.repositoryId&&null!==e.repositoryId&&void 0!==e.repositoryId&&t.append("repositoryId",e.repositoryId),""!==e.regionIds&&null!==e.regionIds&&void 0!==e.regionIds&&t.append("regionIds",e.regionIds),t.append("pageNum",e.pageNum),t.append("pageSize",e.pageSize),Object(n.a)({url:"/stockquery/stockcountlist",method:"post",data:t})}},Q4Eu:function(e,t,i){"use strict";var n=i("Q2AE"),a={inserted:function(e,t,i){var a=t.value,o=n.a.getters&&n.a.getters.roles;if(!(a&&a instanceof Array&&a.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=a;o.some(function(e){return r.includes(e)})||e.parentNode&&e.parentNode.removeChild(e)}},o=function(e){e.directive("permission",a)};window.Vue&&(window.permission=a,Vue.use(o)),a.install=o;t.a=a},TC7k:function(e,t,i){"use strict";var n=i("lH7M");i.n(n).a},aqiu:function(e,t,i){},eoLv:function(e,t,i){"use strict";var n=i("mu8y");i.n(n).a},fwIH:function(e,t,i){"use strict";i.r(t);var n=i("P2sY"),a=i.n(n),o=i("NG3u"),r=i("ZySA"),l=i("Q4Eu"),s=i("+Khs"),c=i("41Be"),d=i("Mz3J"),u=i("/4CO"),p=i("jgVJ"),m={name:"StockPrice",directives:{waves:r.a,permission:l.a,permission2:s.a},components:{MyDetail:p.a,DetailList:u.a,Pagination:d.a},data:function(){return{productName:"",control:!1,detailvisible:!1,list:[],total:0,tableKey:0,listLoading:!1,getemplist:{pageNum:1,pageSize:10,repositoryId:this.$store.getters.repositoryId,regionIds:this.$store.getters.regionIds},personalForm:{},editVisible:!1,date:[]}},mounted:function(){this.getamouthDate()},beforeCreate:function(){this},methods:{checkPermission:c.a,getamouthDate:function(){var e=new Date,t=new Date;t.setDate(1),this.date=[t,e]},handleAddproduct:function(){this.control=!0},product:function(e){this.getemplist.productName=e.productName},getlist:function(){var e=this;this.listLoading=!0,Object(o.d)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount),setTimeout(function(){e.listLoading=!1},50)})},restFilter:function(){this.supplierId="",this.getemplist.supplierId=""},restFilter2:function(){this.stockPersonId="",this.getemplist.stockPersonId=""},handleFilter:function(){var e=this;this.getemplist.pageNum=1,null!==this.date&&""!==this.date?(this.getemplist.beginTime=this.date[0],this.getemplist.endTime=this.date[1]):(this.getemplist.beginTime=null,this.getemplist.endTime=null),Object(o.d)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount)})},handleDetail:function(e){console.log(e),this.detailvisible=!0,this.personalForm=a()({},e)},handleExport:function(){var e=this;this.downloadLoading=!0,Promise.all([i.e("chunk-ef4a"),i.e("chunk-069c")]).then(i.bind(null,"S/jZ")).then(function(t){var i=e.formatJson(["id","StockQueryName","StockQueryShortName","typeName","regionName","buyerName","levelName","createName","createTime"],e.list);t.export_json_to_excel({header:["供应商编号","供应商名称","供应商简称","供应商类别","所在区域","采购员","供应商优质级别","建档人","建档日期"],data:i,filename:"经销商资料表"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handlePrint:function(){console.log(456)}}},g=(i("TC7k"),i("KHd+")),f=Object(g.a)(m,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ERP-container"},[i("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[i("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("StockQuery.productName"),clearable:""},on:{focus:e.handleAddproduct},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.productName,callback:function(t){e.$set(e.getemplist,"productName",t)},expression:"getemplist.productName"}}),e._v(" "),i("my-detail",{attrs:{control:e.control},on:{"update:control":function(t){e.control=t},product:e.product}}),e._v(" "),i("el-date-picker",{attrs:{placeholder:e.$t("updates.cgsjd"),type:"daterange","range-separator":"-","unlink-panels":"","start-placeholder":"Start","end-placeholder":"End","value-format":"yyyy-MM-dd"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px","margin-top":"10px"},attrs:{type:"primary",icon:"el-icon-search",round:""},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),i("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},on:{click:e.handleExport}},[i("svg-icon",{attrs:{"icon-class":"daochu"}}),e._v(e._s(e.$t("public.export")))],1),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-printer"},on:{click:e.handlePrint}},[e._v(e._s(e.$t("public.print")))])],1),e._v(" "),i("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"10px"},attrs:{shadow:"never"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:e.$t("StockQuery.productCode"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"link-type",on:{click:function(i){e.handleDetail(t.row)}}},[e._v(e._s(t.row.productCode))])]}}])},[i("detail-list",{attrs:{detailcontrol:e.detailvisible,detaildata:e.personalForm},on:{"update:detailcontrol":function(t){e.detailvisible=t},"update:detaildata":function(t){e.personalForm=t}}})],1),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.productName"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.productName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.typeId"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.typeId))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.unit"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.unit))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.maxPrice"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.maxPrice))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.minPrice"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.minPrice))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.avgPrice"),resizable:!1,align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.avgPrice))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("StockQuery.recentlyPrice"),resizable:!1,prop:"judgeStat",align:"center","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.recentlyPrice))])]}}])})],1),e._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pageNum,limit:e.getemplist.pageSize},on:{"update:page":function(t){e.$set(e.getemplist,"pageNum",t)},"update:limit":function(t){e.$set(e.getemplist,"pageSize",t)},pagination:e.getlist}})],1)],1)},[],!1,null,"5419565c",null);f.options.__file="StockPrice.vue";t.default=f.exports},jgVJ:function(e,t,i){"use strict";var n=i("VG0r"),a=i("ZySA"),o=i("Mz3J"),r=i("yo+U"),l=i("fNFo"),s={directives:{waves:a.a},components:{MyTree:l.a,MySupplier:r.a,Pagination:o.a},filters:{genderFilter:function(e){return{1:"男",2:"女"}[e]}},props:{control:{type:Boolean,default:!1}},data:function(){return{supplierid:"",empcontrol:!1,types:[],treecontrol:!1,categoryid:"",productVisible:this.control,visible2:!1,moreaction:"",list:[],total:0,tableKey:0,listLoading:!0,getemplist:{productid:"",code:"",productname:"",categoryid:"",typeid:"",isactive:"",Productid:"",pagenum:1,pagesize:10}}},watch:{control:function(){this.productVisible=this.control,console.log(this.control),this.getlist()}},created:function(){this.getlist()},beforeCreate:function(){this},methods:{getlist:function(){var e=this;this.listLoading=!0,Object(n.t)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount),setTimeout(function(){e.listLoading=!1},50)}),Object(n.v)(2).then(function(t){200===t.data.ret&&(e.types=t.data.data.content.list)})},restFilter:function(){this.categoryid="",this.getemplist.categoryid=""},restFilter2:function(){this.supplierid="",this.getemplist.supplierid=""},handleFilter:function(){var e=this;this.getemplist.pagenum=1,Object(n.t)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount)})},handleSelectionChange:function(e){this.moreaction=e},handlechoose:function(){this.empcontrol=!0},supplierName:function(e){console.log(e),this.supplierid=e.supplierName,this.getemplist.supplierid=e.id},treechoose:function(){this.treecontrol=!0},tree:function(e){this.categoryid=e.categoryName,this.getemplist.categoryid=e.id},handleAdd:function(){this.$router.push("/Product/NewProduct"),this.productVisible=!1},handleAddTo:function(){this.productVisible=!1,console.log(this.moreaction),this.$emit("product",this.moreaction)}}},c=(i("qQO2"),i("KHd+")),d=Object(c.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.productVisible,control:e.control,"close-on-press-escape":!1,title:e.$t("Hmodule.xzsp"),top:"10px","append-to-body":""},on:{"update:visible":function(t){e.productVisible=t},close:function(t){e.$emit("update:control",!1)}}},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("Product.code"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.code,callback:function(t){e.$set(e.getemplist,"code",t)},expression:"getemplist.code"}}),e._v(" "),i("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("Product.productname"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.productname,callback:function(t){e.$set(e.getemplist,"productname",t)},expression:"getemplist.productname"}}),e._v(" "),i("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("Product.supplierid"),clearable:""},on:{focus:e.handlechoose,clear:e.restFilter2},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.supplierid,callback:function(t){e.supplierid=t},expression:"supplierid"}}),e._v(" "),i("my-supplier",{attrs:{control:e.empcontrol},on:{"update:control":function(t){e.empcontrol=t},supplierName:e.supplierName}}),e._v(" "),i("el-select",{staticClass:"filter-item",attrs:{placeholder:e.$t("Hmodule.wpfl"),clearable:""},model:{value:e.getemplist.categoryid,callback:function(t){e.$set(e.getemplist,"categoryid",t)},expression:"getemplist.categoryid"}},[i("el-option",{attrs:{label:e.$t("otherlanguage.zc"),value:"1"}}),e._v(" "),i("el-option",{attrs:{label:e.$t("otherlanguage.pj"),value:"2"}}),e._v(" "),i("el-option",{attrs:{label:e.$t("otherlanguage.jgj"),value:"3"}}),e._v(" "),i("el-option",{attrs:{label:e.$t("otherlanguage.xhp"),value:"4"}}),e._v(" "),i("el-option",{attrs:{label:e.$t("otherlanguage.dc"),value:"5"}})],1),e._v(" "),i("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"click"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[i("el-select",{staticStyle:{width:"40%",float:"left","margin-left":"20px"},attrs:{placeholder:e.$t("Hmodule.qxzggxh"),clearable:""},model:{value:e.getemplist.typeid,callback:function(t){e.$set(e.getemplist,"typeid",t)},expression:"getemplist.typeid"}},e._l(e.types,function(e,t){return i("el-option",{key:t,attrs:{label:e.categoryName,value:e.id}})})),e._v(" "),i("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px"},attrs:{placeholder:e.$t("Hmodule.qxzsxj"),clearable:""},model:{value:e.getemplist.isactive,callback:function(t){e.$set(e.getemplist,"isactive",t)},expression:"getemplist.isactive"}},[i("el-option",{attrs:{label:e.$t("Hmodule.s1"),value:"1"}}),e._v(" "),i("el-option",{attrs:{label:e.$t("Hmodule.x2"),value:"2"}})],1),e._v(" "),i("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{slot:"reference",type:"primary"},on:{click:function(t){e.visible2=!e.visible2}},slot:"reference"},[e._v(e._s(e.$t("public.filter"))),i("svg-icon",{staticStyle:{"margin-left":"4px"},attrs:{"icon-class":"shaixuan"}})],1)],1),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))]),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"current-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{label:e.$t("Product.code"),resizable:!1,prop:"code",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.code))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.productname"),resizable:!1,prop:"ProductName",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.productName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.categoryid"),resizable:!1,prop:"category",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.category))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.typeid"),resizable:!1,align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.productType))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.color"),resizable:!1,prop:"color",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.color))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.kpigrade"),resizable:!1,prop:"kpiGrade",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.kpiGrade))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.point"),resizable:!1,prop:"point",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.point))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.saleprice"),resizable:!1,prop:"costPrice",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.salePrice))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.purchaseprice"),resizable:!1,prop:"purchasePrice",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.purchasePrice))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.createid"),resizable:!1,prop:"createName",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.createName))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("Product.createTime"),resizable:!1,prop:"createTime",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.createTime))])]}}])})],1),e._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],staticStyle:{padding:"0"},attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.getlist}}),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"text-align":"center"},attrs:{type:"success"},on:{click:e.handleAddTo}},[e._v(e._s(e.$t("Hmodule.sure")))])],1)],1)},[],!1,null,"91080b68",null);d.options.__file="MyDetail.vue";t.a=d.exports},lH7M:function(e,t,i){},mu8y:function(e,t,i){},qQO2:function(e,t,i){"use strict";var n=i("aqiu");i.n(n).a}}]);