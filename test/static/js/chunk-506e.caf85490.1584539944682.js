(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-506e"],{225:function(e,t){},261:function(e,t){},262:function(e,t){},HdfR:function(e,t,a){"use strict";a.r(t);var s=a("gDS+"),n=a.n(s),r=a("4d7F"),i=a.n(r),o=a("EUZL"),l=a.n(o),c={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},beforeCreate:function(){this},methods:{generateData:function(e){var t=e.header,a=e.results;this.excelData.header=t,this.excelData.results=a,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files[0];t&&this.upload(t)},upload:function(e){(this.$refs["excel-upload-input"].value=null,this.beforeUpload)?this.beforeUpload(e)&&this.readerData(e):this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new i.a(function(a,s){var n=new FileReader;n.onload=function(e){var s=e.target.result,n=t.fixData(s),r=l.a.read(btoa(n),{type:"base64"}),i=r.SheetNames[0],o=r.Sheets[i],c=t.getHeaderRow(o),d=l.a.utils.sheet_to_json(o);t.generateData({header:c,results:d}),t.loading=!1,a()},n.readAsArrayBuffer(e)})},fixData:function(e){for(var t="",a=0,s=10240;a<e.byteLength/s;++a)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*s,a*s+s)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*s)))},getHeaderRow:function(e){var t=[],a=l.a.utils.decode_range(e["!ref"]),s=void 0,n=a.s.r;for(s=a.s.c;s<=a.e.c;++s){var r=e[l.a.utils.encode_cell({c:s,r:n})],i="UNKNOWN "+s;r&&r.t&&(i=l.a.utils.format_cell(r)),t.push(i)}return t},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},d=(a("cSgU"),a("KHd+")),u=Object(d.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),e._v(" "),a("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v("\n    Drop excel file here or\n    "),a("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v("Browse")])],1)])},[],!1,null,"933009d8",null);u.options.__file="index.vue";var p=u.exports,f=a("VG0r"),h={name:"Manyinsert",components:{UploadExcelComponent:p},data:function(){return{contentdata:"",dialogVisible:!1,tableData:[],tableHeader:[],dizhi:"static/file/ceshi.xlsx",uploadHead:[]}},beforeCreate:function(){this},methods:{beforeUpload:function(e){return e.size/1024/1024<1||(this.$message({message:"Please do not upload files larger than 1m in size.",type:"warning"}),!1)},handleSuccess:function(e){var t=e.results,a=e.header;this.tableData=t,this.tableHeader=["开始编码（01整车，02零部件，03紧固件）（必填）","分类名称（必填）","车辆型号（01，02填）","配置（01填）","版本（01，02填）","颜色（01，02填）","直径规格（03填）","长度规格（03填）","性能等级（03填）","表面处理（03填）","条形码","商品名称(必填)","质保期(天数)","重量(保留两位小数)","体积(保留两位小数)","会员价","出厂价(必填)","批发价","销售价(必填)","最低价","档次级别编号(id)","基本计量单位名称（必填）","来源(2生产3采购)","成本核算计价方式(1约当产量法，2定额成本法，3定额比例法)(必填)","上下架(1上架，2下架)","是否适用批次(1使用2不使用)(必填)","有效天数","采购周期(天)","保养周期(天数)","1可以作为赠品，2不可以","生产能力(日产量)","生产中心","绩效分（分数）","积分（分数）"],this.uploadHead=t.map(function(e){return{beginCode:e["开始编码（01整车，02零部件，03紧固件）（必填）"],categoryName:e["分类名称（必填）"],productTypeName:e["车辆型号（01，02填）"],disposeName:e["配置（01填）"],versionName:e["版本（01，02填）"],color:e["颜色（01，02填）"],diameterName:e["直径规格（03填）"],lengthName:e["长度规格（03填）"],performanceLevelName:e["性能等级（03填）"],faceName:e["表面处理（03填）"],barCode:e["条形码"],productName:e["商品名称(必填)"],zhiBaoQi:e["质保期(天数)"],weight:e["重量(保留两位小数)"],volume:e["体积(保留两位小数)"],memberPrice:e["会员价"],costPrice:e["出厂价(必填)"],tradePrice:e["批发价"],salePrice:e["销售价(必填)"],lowerPrice:e["最低价"],level:e["档次级别编号(id)"],unitName:e["基本计量单位名称（必填）"],source:e["来源(2生产3采购)"],valuation:e["成本核算计价方式(1约当产量法，2定额成本法，3定额比例法)(必填)"],isActive:e["上下架(1上架，2下架)"],isBatch:e["是否适用批次(1使用2不使用)(必填)"],effectiveDay:e["有效天数"],stockCircle:e["采购周期(天)"],careCircle:e["保养周期(天数)"],isGift:e["1可以作为赠品，2不可以"],produceAbility:e["生产能力(日产量)"],workCenterName:e["生产中心"],kpiGrade:e["绩效分（分数）"],point:e["积分（分数）"]}}),console.log(a)},uploads:function(){var e=this;console.log("json",this.uploadHead),Object(f.n)(n()(this.uploadHead)).then(function(t){200===t.data.ret?(e.dialogVisible=!0,e.contentdata=t.data.msg):e.$notify.error({title:"wrong",message:t.data.msg,duration:0})})},handleClose:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})}}},v=(a("kGAt"),Object(d.a)(h,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.$t("updates.xzmb"))+"  ")])]),e._v(" "),a("a",{attrs:{href:"static/file/物品资料表.xlsx"}},[a("el-button",{attrs:{type:"primary"}},[e._v(e._s(e.$t("updates.xzmb")))])],1)]),e._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.$t("updates.scbg")))])]),e._v(" "),a("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload}})],1),e._v(" "),a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v(e._s(e.$t("updates.bgsj")))]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"primary"},on:{click:e.uploads}},[e._v(e._s(e.$t("updates.drsj")))])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:"","highlight-current-row":""}},e._l(e.tableHeader,function(e){return a("el-table-column",{key:e,attrs:{prop:e,label:e}})}))],1),e._v(" "),a("el-dialog",{staticClass:"edit",attrs:{visible:e.dialogVisible,"before-close":e.handleClose,title:"提示",width:"1010px",top:"-10px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"noties"},[e._v(e._s(e.contentdata))]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],1)},[],!1,null,"1eb19020",null));v.options.__file="Manyinsert.vue";t.default=v.exports},"Hu+0":function(e,t,a){},Uo93:function(e,t,a){},cSgU:function(e,t,a){"use strict";var s=a("Uo93");a.n(s).a},"gDS+":function(e,t,a){e.exports={default:a("oh+g"),__esModule:!0}},kGAt:function(e,t,a){"use strict";var s=a("Hu+0");a.n(s).a},"oh+g":function(e,t,a){var s=a("WEpk"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}}}]);