(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2bba"],{"+Khs":function(e,t,n){"use strict";var o=n("Q2AE"),r={inserted:function(e,t,n){var r=t.value,i=o.a.getters&&o.a.getters.roles;if(!r[0])throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var a=r[0];i.some(function(e){return a.includes(e)})||r[1]===o.a.getters.userId||e.parentNode&&e.parentNode.removeChild(e)}},i=function(e){e.directive("permission2",r)};window.Vue&&(window.permission2=r,Vue.use(i)),r.install=i;t.a=r},"3qjA":function(e,t,n){"use strict";var o=n("VG0r"),r={props:{treecontrol:{type:Boolean,default:!1}},data:function(){return{digui:"",choosedata:"",editVisible:this.treecontrol,filterText:"",detalist:[],detaillistProps:{children:"productClassfyVos",label:"categoryName"}}},watch:{treecontrol:function(){this.editVisible=this.treecontrol,this.gettree()},filterText:function(e){this.$refs.tree2.filter(e)}},created:function(){this.gettree()},beforeCreate:function(){this},methods:{filterNode:function(e,t,n){if(!e)return!0;var o=[];this.getReturnNode(n,o,e);var r=!1;return o.forEach(function(e){r=r||e}),r},getReturnNode:function(e,t,n){var o=e.data&&e.data.categoryName&&-1!==e.data.categoryName.toUpperCase().indexOf(n.toUpperCase());o&&t.push(o),this.index++,!o&&1!==e.level&&e.parent&&this.getReturnNode(e.parent,t,n)},gettree:function(){var e=this;Object(o.l)().then(function(t){200===t.data.ret&&(e.detalist=t.data.data.content)})},handleNodeClick:function(e,t){return console.log(t),1===t.level?(this.$notify.error({title:"wrong",message:"顶层不可选择",offset:100}),!1):(this.digui=t,this.choosedata=e,1===this.choosedata.level?(this.$notify.error({title:"wrong",message:"顶层不可选择",offset:100}),this.editVisible=!0,!1):(this.$emit("tree",this.choosedata),this.$emit("finder",this.digui),this.editVisible=!1,void this.gettree()))},handleConfirm:function(){console.log(this.choosedata)}}},i=(n("QZz9"),n("KHd+")),a=Object(i.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.editVisible,treecontrol:e.treecontrol,"close-on-press-escape":!1,"append-to-body":"",top:"10px"},on:{"update:visible":function(t){e.editVisible=t},close:function(t){e.$emit("update:treecontrol",!1)}}},[n("h2",{ref:"geren",staticClass:"form-name"},[e._v("物品分类")]),e._v(" "),n("el-card",{staticClass:"box-card"},[n("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),n("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.detalist,props:e.detaillistProps,"filter-node-method":e.filterNode,"default-expand-all":""},on:{"node-click":e.handleNodeClick}})],1)],1)},[],!1,null,"25d2c5e4",null);a.options.__file="MyTree.vue";t.a=a.exports},"41Be":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n("Q2AE");function r(e){if(e&&e instanceof Array&&e.length>0){var t=e;return!!(o.a.getters&&o.a.getters.roles).some(function(e){return t.includes(e)})}return console.error("need roles!"),!1}},"6HaC":function(e,t,n){"use strict";n.d(t,"Q",function(){return r}),n.d(t,"r",function(){return i}),n.d(t,"k",function(){return a}),n.d(t,"j",function(){return s}),n.d(t,"i",function(){return l}),n.d(t,"t",function(){return d}),n.d(t,"v",function(){return c}),n.d(t,"E",function(){return u}),n.d(t,"F",function(){return p}),n.d(t,"A",function(){return m}),n.d(t,"M",function(){return f}),n.d(t,"J",function(){return g}),n.d(t,"K",function(){return h}),n.d(t,"y",function(){return v}),n.d(t,"u",function(){return b}),n.d(t,"b",function(){return y}),n.d(t,"p",function(){return w}),n.d(t,"q",function(){return N}),n.d(t,"w",function(){return C}),n.d(t,"x",function(){return I}),n.d(t,"B",function(){return S}),n.d(t,"C",function(){return _}),n.d(t,"L",function(){return $}),n.d(t,"O",function(){return R}),n.d(t,"G",function(){return x}),n.d(t,"H",function(){return j}),n.d(t,"s",function(){return O}),n.d(t,"D",function(){return P}),n.d(t,"I",function(){return L}),n.d(t,"N",function(){return k}),n.d(t,"P",function(){return z}),n.d(t,"o",function(){return U}),n.d(t,"l",function(){return T}),n.d(t,"a",function(){return E}),n.d(t,"n",function(){return V}),n.d(t,"z",function(){return q}),n.d(t,"c",function(){return A}),n.d(t,"h",function(){return B}),n.d(t,"f",function(){return F}),n.d(t,"g",function(){return Q}),n.d(t,"e",function(){return H}),n.d(t,"d",function(){return J}),n.d(t,"m",function(){return M});var o=n("t3Un");function r(e){var t=new URLSearchParams;return""!==e.carCode&&null!==e.carCode&&void 0!==e.carCode&&t.append("carCode",e.carCode),""!==e.batteryCode&&null!==e.batteryCode&&void 0!==e.batteryCode&&t.append("batteryCode",e.batteryCode),""!==e.motorCode&&null!==e.motorCode&&void 0!==e.motorCode&&t.append("motorCode",e.motorCode),""!==e.snCode&&null!==e.snCode&&void 0!==e.snCode&&t.append("snCode",e.snCode),Object(o.a)({url:"/vehicleTrack/vehicleInfo",method:"post",params:t})}function i(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("currencyId",e),Object(o.a)({url:"/zcc/getRate",method:"post",params:t})}function a(e){var t=new URLSearchParams;return""!==e.searchRepositoryId&&null!==e.searchRepositoryId&&void 0!==e.searchRepositoryId&&t.append("searchRepositoryId",e.searchRepositoryId),""!==e.productCode&&null!==e.productCode&&void 0!==e.productCode&&t.append("productCode",e.productCode),""!==e.productName&&null!==e.productName&&void 0!==e.productName&&t.append("productName",e.productName),""!==e.date&&null!==e.date&&void 0!==e.date&&t.append("date",e.date),""!==e.pageNum&&null!==e.pageNum&&void 0!==e.pageNum&&t.append("pageNum",e.pageNum),""!==e.pageSize&&null!==e.pageSize&&void 0!==e.pageSize&&t.append("pageSize",e.pageSize),""!==e.repositoryId&&null!==e.repositoryId&&void 0!==e.repositoryId&&t.append("repositoryId",e.repositoryId),""!==e.regionIds&&null!==e.regionIds&&void 0!==e.regionIds&&t.append("regionIds",e.regionIds),Object(o.a)({url:"/endmonth/endMonthCount",method:"post",params:t})}function s(e,t){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("searchRepositoryId",e),""!==t&&null!==t&&void 0!==t&&n.append("code",t),Object(o.a)({url:"/allinventory/countlist3",method:"post",params:n})}function l(e,t,n){var r=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&r.append("repositoryId",e),""!==t&&null!==t&&void 0!==t&&r.append("regionIds",t),""!==n&&null!==n&&void 0!==n&&r.append("code",n),Object(o.a)({url:"/allinventory/countlist",method:"post",params:r})}function d(){return Object(o.a)({url:"/materialslist/getBomNumber",method:"post"})}function c(e){return Object(o.a)({url:"/country/getcountrylist",method:"post",params:e})}function u(e){return Object(o.a)({url:"/region/detaillist",method:"post",params:e})}function p(e){return Object(o.a)({url:"/region/detaillist",method:"post",params:e})}function m(e){var t=new URLSearchParams;return""!==e.region&&null!==e.region&&void 0!==e.region&&t.append("parentid",e.region),Object(o.a)({url:"/region/listbyparentid",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e.regionid&&null!==e.regionid&&void 0!==e.regionid&&t.append("regionid",e.regionid),Object(o.a)({url:"/region/list",method:"post",data:t})}function g(e,t,n){var r=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&r.append("regionId",e),""!==t&&null!==t&&void 0!==t&&r.append("loginRepositoryId",t),""!==n&&null!==n&&void 0!==n&&r.append("regionIds",n),r.append("iseffective",1),r.append("pagenum",1),r.append("pagesize",99999),Object(o.a)({url:"/repository/searchRepository",method:"post",data:r})}function h(e,t,n){var r=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&r.append("regionId",e),""!==t&&null!==t&&void 0!==t&&r.append("loginRepositoryId",t),""!==n&&null!==n&&void 0!==n&&r.append("regionIds",n),r.append("iseffective",1),r.append("pagenum",1),r.append("pagesize",99999),Object(o.a)({url:"/repository/searchRepository",method:"post",data:r})}function v(e){var t=new URLSearchParams;return t.append("countryid",e),Object(o.a)({url:"/country/getprovincelist",method:"post",data:t})}function b(e){var t=new URLSearchParams;return t.append("provinceid",e),Object(o.a)({url:"/country/getcitylist",method:"post",data:t})}function y(e,t){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("repositoryId",e),""!==t&&null!==t&&void 0!==t&&n.append("productCode",t),Object(o.a)({url:"/location/batchlist",method:"post",data:n})}function w(e,t,n,r){var i=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&i.append("repositoryId",e),""!==t&&null!==t&&void 0!==t&&i.append("locationId",t),""!==n&&null!==n&&void 0!==n&&i.append("productCode",n),""!==r&&null!==r&&void 0!==r&&i.append("batch",r),Object(o.a)({url:"/location/getQuantity",method:"post",data:i})}function N(e,t,n,r){var i=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&i.append("repositoryId",e),""!==t&&null!==t&&void 0!==t&&i.append("locationId",t),""!==n&&null!==n&&void 0!==n&&i.append("productCode",n),""!==r&&null!==r&&void 0!==r&&i.append("batch",r),Object(o.a)({url:"/location/getQuantity2",method:"post",data:i})}function C(e,t){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("repositoryId",e),""!==t&&null!==t&&void 0!==t&&""!==t.productCode&&null!==t.productCode&&void 0!==t.productCode&&n.append("productCode",t.productCode),n.append("isEffective",1),Object(o.a)({url:"/location/getlocation",method:"post",data:n})}function I(e,t){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("repositoryId",e),""!==t.toolsCode&&null!==t.toolsCode&&void 0!==t.toolsCode&&n.append("productCode",t.toolsCode),n.append("isEffective",1),Object(o.a)({url:"/location/getlocation",method:"post",data:n})}function S(e,t){var n=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&n.append("searchRepositoryId",e),""!==t&&null!==t&&void 0!==t&&n.append("locationCode",t),n.append("isEffective",1),n.append("pageNum",1),n.append("pageSize",99999),Object(o.a)({url:"/location/locationlist",method:"post",data:n})}function _(){var e=new URLSearchParams;return e.append("pageNum",1),e.append("pageSize",9999),Object(o.a)({url:"/materialslist/materialslist",method:"post",data:e})}function $(){var e=new URLSearchParams;return e.append("stat",1),e.append("pageNum",1),e.append("pageSize",9999),Object(o.a)({url:"/processFile/search",method:"post",data:e})}function R(e){var t=new URLSearchParams;return t.append("deptId",e),t.append("stat",1),t.append("pageNum",1),t.append("pageSize",99999),Object(o.a)({url:"/workCenter/search",method:"post",data:t})}function x(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("sourceNumber",e),Object(o.a)({url:"/requireplan/requireplanlist",method:"post",data:t})}function j(e,t){var n=new URLSearchParams;return n.append("zcc",e),n.append("regionId",t),Object(o.a)({url:"/zcc/saveRegion",method:"post",data:n})}function O(e){var t=new URLSearchParams;return t.append("regionId",e),Object(o.a)({url:"/zcc/getRegion",method:"post",data:t})}function P(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("code",e),t.append("pagenum",1),t.append("pagesize",99999),Object(o.a)({url:"/product/productlist",method:"post",data:t})}function L(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("categoryname",e),t.append("pagenum",1),t.append("pagesize",9999),Object(o.a)({url:"/measurement/search",method:"post",data:t})}function k(e){var t=new URLSearchParams;return t.append("supplierName",e),t.append("pagenum",1),t.append("pagesize",99999),Object(o.a)({url:"/supplier/search",method:"post",data:t})}function z(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("supplierId",e),t.append("pageNum",1),t.append("pageSize",9999),Object(o.a)({url:"/payment/shouldPayList",method:"post",data:t})}function U(){return Object(o.a)({url:"/zcc/getId",method:"post"})}function T(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("customerPhone",e),Object(o.a)({url:"/installmentapply/existList",method:"post",data:t})}function E(e){var t=new URLSearchParams;return""!==e.collectId&&null!==e.collectId&&void 0!==e.collectId&&t.append("collectId",e.collectId),""!==e.sourceNumber&&null!==e.sourceNumber&&void 0!==e.sourceNumber&&t.append("sourceNumber",e.sourceNumber),""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("agentId",e.id),t.append("repositoryId",0),t.append("pageNum",1),t.append("pageSize",9999),Object(o.a)({url:"/agentCollect/agentCollectList",method:"post",data:t})}function V(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("detailId",e),Object(o.a)({url:"/role/getDetailById",method:"post",data:t})}function q(e){var t=new URLSearchParams;return""!==e.loginRepositoryId&&null!==e.loginRepositoryId&&void 0!==e.loginRepositoryId&&t.append("repositoryid",e.loginRepositoryId),""!==e.regionIds&&null!==e.regionIds&&void 0!==e.regionIds&&t.append("regionid",e.regionIds),Object(o.a)({url:"/region/getregionlistbyreid",method:"post",data:t})}function A(e){var t=new URLSearchParams;return t.append("applyNumber",e),Object(o.a)({url:"/receiptStat/checkReceiptApply",method:"post",data:t})}function B(e){var t=new URLSearchParams;return t.append("planNumber",e),Object(o.a)({url:"/receiptStat/checkReceiptPlan",method:"post",data:t})}function F(e){var t=new URLSearchParams;return t.append("orderNumber",e),Object(o.a)({url:"/receiptStat/checkReceiptOrder",method:"post",data:t})}function Q(e){var t=new URLSearchParams;return t.append("orderNumber",e),Object(o.a)({url:"/saleReceiptStat/checkReceiptOrder",method:"post",data:t})}function H(e){var t=new URLSearchParams;return t.append("opportunityNumber",e),Object(o.a)({url:"/saleReceiptStat/checkReceiptOpportunity",method:"post",data:t})}function J(e){var t=new URLSearchParams;return t.append("applyNumber",e),Object(o.a)({url:"/installmentReceiptStat/checkReceiptApply",method:"post",data:t})}function M(e){var t=new URLSearchParams;return""!==e.productCode&&null!==e.productCode&&void 0!==e.productCode&&t.append("productCode",e.productCode),""!==e.batch&&null!==e.batch&&void 0!==e.batch&&t.append("batch",e.batch),""!==e.repositoryId&&null!==e.repositoryId&&void 0!==e.repositoryId&&t.append("repositoryId",e.repositoryId),""!==e.locationId&&null!==e.locationId&&void 0!==e.locationId&&t.append("locationId",e.locationId),Object(o.a)({url:"/allinventory/getAllBatch",method:"post",data:t})}},"6nWH":function(e,t,n){},CAFZ:function(e,t,n){},IcGC:function(e,t,n){},Q4Eu:function(e,t,n){"use strict";var o=n("Q2AE"),r={inserted:function(e,t,n){var r=t.value,i=o.a.getters&&o.a.getters.roles;if(!(r&&r instanceof Array&&r.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var a=r;i.some(function(e){return a.includes(e)})||e.parentNode&&e.parentNode.removeChild(e)}},i=function(e){e.directive("permission",r)};window.Vue&&(window.permission=r,Vue.use(i)),r.install=i;t.a=r},QZz9:function(e,t,n){"use strict";var o=n("IcGC");n.n(o).a},XwEv:function(e,t,n){"use strict";var o=n("CAFZ");n.n(o).a},Y5bG:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),Math.easeInOutQuad=function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t};var o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function r(e,t,n){var r=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,i=e-r,a=0;t=void 0===t?500:t;!function e(){a+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(a,r,i,t)),a<t?o(e):n&&"function"==typeof n&&n()}()}},ZySA:function(e,t,n){"use strict";var o=n("P2sY"),r=n.n(o),i=(n("jUE0"),{bind:function(e,t){e.addEventListener("click",function(n){var o=r()({},t.value),i=r()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},o),a=i.ele;if(a){a.style.position="relative",a.style.overflow="hidden";var s=a.getBoundingClientRect(),l=a.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",a.appendChild(l)),i.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}},!1)}}),a=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(a)),i.install=a;t.a=i},coJn:function(e,t,n){"use strict";var o=n("6nWH");n.n(o).a},jUE0:function(e,t,n){},oQpc:function(e,t,n){"use strict";n.r(t);var o=n("uNNS"),r=n("6HaC"),i=n("moiu"),a=n("Q4Eu"),s=n("+Khs"),l=n("41Be"),d=n("ZySA"),c=n("Mz3J"),u=n("3qjA"),p={name:"NumberingRules",directives:{waves:d.a,permission:a.a,permission2:s.a},components:{Pagination:c.a,MyTree:u.a},filters:{commissionCategoryFilter:function(e){return{1:"利润提成",2:"销售收入提成"}[e]},commissionTypeFilter:function(e){return{1:"提成比例",2:"固定金额"}[e]}},data:function(){return{categorys:[],editNumberingform:"",Numberingform:{ruleName:"",type:"",iseffective:"1",prefix:"",dateType:1,length:"",createid:this.$store.getters.userId},editNumberingVisible:!1,treecontrol:!1,addNumberingVisible:!1,editVisible:!1,moreaction:"",productCategoryId:"",downloadLoading:!1,roleIds:[],list:[],nations:[],total:0,personalForm2:{},tableKey:0,listLoading:!0,getemplist:{ruleName:"",type:"",iseffective:"",pagenum:1,pagesize:10},NumberingformRule:{type:[{required:!0,message:"请选择规则",trigger:"change"}],ruleName:[{required:!0,message:"请填写规则",trigger:"change"}],prefix:[{required:!0,message:"请填写编号前缀",trigger:"change"}],length:[{required:!0,message:"请填写流水长度",trigger:"change"}]},editNumberingformRule:{ruleName:[{required:!0,message:"请填写规则",trigger:"change"}],prefix:[{required:!0,message:"请填写编号前缀",trigger:"change"}],length:[{required:!0,message:"请填写流水长度",trigger:"change"}]}}},activated:function(){this.getlist()},mounted:function(){this.getlist()},beforeCreate:function(){this},methods:{tree:function(e){console.log(e),this.productCategoryId=e.categoryName,this.editNumberingform.productCategoryId=e.id},treechoose:function(){console.log("this.treecontrol",this.treecontrol),this.treecontrol=!0,console.log("this.treecontrol",this.treecontrol)},open:function(e){var t=this;console.log("row",e),this.personalForm2.id=e.id,this.personalForm2.isEffective=1,Object(i.A)(this.personalForm2).then(function(e){200===e.data.ret?(t.$notify({title:t.$t("prompt.czcg"),message:t.$t("prompt.czcg"),type:"success",duration:1e3,offset:100}),t.getlist()):t.$notify.error({title:"wrong",message:"wrong",offset:100})})},close:function(e){var t=this;console.log("row",e),this.personalForm2.id=e.id,this.personalForm2.isEffective=2,Object(i.A)(this.personalForm2).then(function(e){200===e.data.ret?(t.$notify({title:t.$t("prompt.czcg"),message:t.$t("prompt.czcg"),type:"success",duration:1e3,offset:100}),t.getlist()):t.$notify.error({title:"wrong",message:"wrong",offset:100})})},checkPermission:l.a,getlist:function(){var e=this;Object(r.v)().then(function(t){200===t.data.ret&&(e.nations=t.data.data.content)});var t={iseffective:1};t.iseffective=1,t.type=2,t.pagesize=999,Object(o.c)().then(function(t){200===t.data.ret?e.roleIds=t.data.data.content:e.$notify.error({title:"wrong",message:"wrong",offset:100})}),this.listLoading=!0,Object(i.o)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount),setTimeout(function(){e.listLoading=!1},50)})},handleFilter:function(){var e=this;Object(i.o)(this.getemplist).then(function(t){200===t.data.ret&&(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount)}),this.productCategoryId="",this.getemplist={}},handleEdit:function(e){console.log(e),this.editNumberingform=e,this.productCategoryId=e.productCategoryName,this.editNumberingVisible=!0},handleEditOk:function(){var e=this;console.log(this.editNumberingform),this.$refs.editNumberingform.validate(function(t){if(!t)return e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100}),!1;Object(i.y)(e.editNumberingform).then(function(t){200===t.data.ret?(e.$notify({title:"修改成功",type:"success",offset:100}),e.getlist(),e.editNumberingVisible=!1):e.$notify.error({title:"wrong",message:t.data.msg,offset:100})}),e.$refs.editNumberingform.clearValidate(),e.$refs.editNumberingform.resetFields()})},handleSelectionChange:function(e){this.moreaction=e},handleCommand:function(e){var t=this,n=this.moreaction.map(function(e){return e.id}).join();"delete"===e&&this.$confirm(this.$t("prompt.scts"),this.$t("prompt.ts"),{confirmButtonText:this.$t("prompt.qd"),cancelButtonText:this.$t("prompt.qx"),type:"warning"}).then(function(){Object(i.i)(n,t.$store.getters.userId).then(function(e){200===e.data.ret||100===e.data.ret?(t.$notify({title:t.$t("prompt.sccg"),type:"success",offset:100}),t.getlist()):t.$notify.error({title:"wrong",message:"wrong",offset:100})})}).catch(function(){t.$message({type:"info",message:t.$t("prompt.yqxsc")})})},handleDelete:function(e){var t=this;this.$confirm(this.$t("prompt.scts"),this.$t("prompt.ts"),{confirmButtonText:this.$t("prompt.qd"),cancelButtonText:this.$t("prompt.qx"),type:"warning"}).then(function(){Object(i.i)(e.id,t.$store.getters.userId).then(function(e){200===e.data.ret||100===e.data.ret?(t.$notify({title:t.$t("prompt.sccg"),type:"success",offset:100}),t.getlist()):t.$notify.error({title:"wrong",message:"wrong",offset:100})})}).catch(function(){t.$message({type:"info",message:t.$t("prompt.yqxsc")})})},restNumberingform:function(){this.Numberingform={ruleName:"",type:"",iseffective:"1",prefix:"",dateType:"",length:""}},handleAdd:function(){this.$router.push("/BasicSettings/Commission")},handleOk:function(){var e=this;console.log(this.Numberingform),this.$refs.Numberingform.validate(function(t){if(!t)return e.$notify.error({title:"wrong",message:"Information is incomplete",offset:100}),!1;Object(i.e)(e.Numberingform).then(function(t){200===t.data.ret?(e.$notify({title:"新增成功",type:"success",offset:100}),e.getlist(),e.restNumberingform(),e.addNumberingVisible=!1):e.$notify.error({title:"wrong",message:t.data.msg,offset:100})}),e.$refs.Numberingform.clearValidate(),e.$refs.Numberingform.resetFields()})},handleExport:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-ef4a"),n.e("chunk-069c")]).then(n.bind(null,"S/jZ")).then(function(t){var n=e.formatJson(["id","ruleName","type","prefix","dateType","length","isEffective","createTime"],e.list);t.export_json_to_excel({header:["序号","编号规则名称","单据类型","编号前缀","日期类型","流水号长度","状态","创建日期"],data:n,filename:"编号规则资料表"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return t[e]})})},handlePrint:function(){console.log(456)}}},m=(n("coJn"),n("XwEv"),n("KHd+")),f=Object(m.a)(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ERP-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择提成类型",clearable:""},model:{value:e.getemplist.commissionType,callback:function(t){e.$set(e.getemplist,"commissionType",t)},expression:"getemplist.commissionType"}},[n("el-option",{attrs:{value:"1",label:"提成比例"}}),e._v(" "),n("el-option",{attrs:{value:"2",label:"固定金额"}})],1),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))]),e._v(" "),n("el-dropdown",{on:{command:e.handleCommand}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary"}},[e._v("\n        "+e._s(e.$t("public.batchoperation"))+" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{staticStyle:{width:"140px"},attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{directives:[{name:"permission",rawName:"v-permission",value:["1-39-277-2"],expression:"['1-39-277-2']"}],staticStyle:{"text-align":"left"},attrs:{command:"delete"}},[n("svg-icon",{staticStyle:{width:"40px"},attrs:{"icon-class":"shanchu"}}),e._v(e._s(e.$t("public.delete")))],1)],1)],1),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["1-39-277-6"],expression:"['1-39-277-6']"},{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{loading:e.downloadLoading},on:{click:e.handleExport}},[n("svg-icon",{attrs:{"icon-class":"daochu"}}),e._v(e._s(e.$t("public.export")))],1),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["1-39-277-7"],expression:"['1-39-277-7']"},{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-printer"},on:{click:e.handlePrint}},[e._v(e._s(e.$t("public.print")))]),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["1-39-277-1"],expression:"['1-39-277-1']"},{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px",float:"right"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",fixed:"left",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("BasicSettings.id"),resizable:!1,fixed:"left",prop:"id",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("BasicSettings.roleId"),resizable:!1,fixed:"left",prop:"ruleName",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.postName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("Product.categoryid"),resizable:!1,prop:"type",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.productCategoryName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("BasicSettings.commissionCategory"),resizable:!1,align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("commissionCategoryFilter")(t.row.commissionCategory)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("BasicSettings.commissionType"),resizable:!1,prop:"dateType",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("commissionTypeFilter")(t.row.commissionType)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("BasicSettings.commissionValue"),resizable:!1,prop:"length",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.commissionValue))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("public.countyrId"),resizable:!1,prop:"isEffective",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.countryName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("public.actions"),resizable:!1,align:"center","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["1-39-277-3"],expression:"['1-39-277-3']"}],attrs:{type:"primary",size:"mini"},on:{click:function(n){e.handleEdit(t.row)}}},[e._v(e._s(e.$t("public.edit")))]),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["1-39-277-2"],expression:"['1-39-277-2']"}],attrs:{size:"mini",type:"danger"},on:{click:function(n){e.handleDelete(t.row)}}},[e._v(e._s(e.$t("public.delete")))])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.getlist}}),e._v(" "),n("el-dialog",{staticClass:"normal",attrs:{visible:e.editNumberingVisible,title:"修改编号规则","append-to-body":"",width:"600px"},on:{"update:visible":function(t){e.editNumberingVisible=t}}},[n("el-form",{ref:"editNumberingform",staticStyle:{margin:"0 auto",width:"400px"},attrs:{model:e.editNumberingform,rules:e.editNumberingformRule,"label-width":"120px"}},[n("el-form-item",{staticStyle:{width:"40%","margin-top":"1%"},attrs:{label:e.$t("BasicSettings.roleId"),prop:"roleId"}},[n("el-select",{staticStyle:{width:"150px"},model:{value:e.editNumberingform.roleId,callback:function(t){e.$set(e.editNumberingform,"roleId",t)},expression:"editNumberingform.roleId"}},e._l(e.roleIds,function(e,t){return n("el-option",{key:t,attrs:{label:e.roleName,value:e.id}})}))],1),e._v(" "),n("el-form-item",{staticStyle:{width:"40%"},attrs:{label:e.$t("Product.categoryid"),prop:"productCategoryId"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:e.$t("Hmodule.wpfl"),clearable:""},model:{value:e.getemplist.productCategoryId,callback:function(t){e.$set(e.getemplist,"productCategoryId",t)},expression:"getemplist.productCategoryId"}},[n("el-option",{attrs:{label:e.$t("otherlanguage.zc"),value:"1"}}),e._v(" "),n("el-option",{attrs:{label:e.$t("otherlanguage.pj"),value:"2"}}),e._v(" "),n("el-option",{attrs:{label:e.$t("otherlanguage.jgj"),value:"3"}}),e._v(" "),n("el-option",{attrs:{label:e.$t("otherlanguage.xhp"),value:"4"}}),e._v(" "),n("el-option",{attrs:{label:e.$t("otherlanguage.dc"),value:"5"}})],1)],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%","margin-top":"1%"},attrs:{label:e.$t("BasicSettings.commissionCategory"),prop:"commissionType"}},[n("el-radio-group",{model:{value:e.editNumberingform.commissionCategory,callback:function(t){e.$set(e.editNumberingform,"commissionCategory",t)},expression:"editNumberingform.commissionCategory"}},[n("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("updates.lrtc")))]),e._v(" "),n("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("updates.xssrtc")))])],1)],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%","margin-top":"1%"},attrs:{label:e.$t("BasicSettings.commissionType"),prop:"commissionType"}},[n("el-radio-group",{model:{value:e.editNumberingform.commissionType,callback:function(t){e.$set(e.editNumberingform,"commissionType",t)},expression:"editNumberingform.commissionType"}},[n("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("updates.tcbl")))]),e._v(" "),n("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("updates.gdje")))])],1)],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"1%"},attrs:{label:e.$t("BasicSettings.commissionValue"),prop:"commissionValue"}},[n("el-input",{attrs:{placeholder:"请输入提成",clearable:""},model:{value:e.editNumberingform.commissionValue,callback:function(t){e.$set(e.editNumberingform,"commissionValue",t)},expression:"editNumberingform.commissionValue"}})],1),e._v(" "),n("el-form-item",{staticStyle:{"margin-top":"1%"},attrs:{label:e.$t("public.countyrId"),prop:"countryId"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"国家"},model:{value:e.editNumberingform.countryId,callback:function(t){e.$set(e.editNumberingform,"countryId",t)},expression:"editNumberingform.countryId"}},e._l(e.nations,function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.editNumberingVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleEditOk}},[e._v(e._s(e.$t("public.edit")))])],1)],1)],1)])},[],!1,null,"ddbe2084",null);f.options.__file="CommissionList.vue";t.default=f.exports},uNNS:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return s});var o=n("t3Un");function r(){return Object(o.a)({url:"/role/getrolelist",method:"post"})}function i(){return Object(o.a)({url:"/role/getauthoritydetaillist",method:"post"})}function a(e){var t=new URLSearchParams;return""!==e.rolename&&null!==e.rolename&&void 0!==e.rolename&&t.append("rolename",e.rolename),""!==e.createPersonId&&null!==e.createPersonId&&void 0!==e.createPersonId&&t.append("createPersonId",e.createPersonId),Object(o.a)({url:"/role/addrole",method:"post",data:t})}function s(e,t,n){var r=new URLSearchParams;return r.append("roleid",e),r.append("roleName",n),r.append("authority",t),Object(o.a)({url:"/role/updaterole",method:"post",data:r})}}}]);