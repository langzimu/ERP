(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-06b1"],{"0zGY":function(e,t,n){"use strict";n.d(t,"g",function(){return i}),n.d(t,"l",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"h",function(){return d}),n.d(t,"o",function(){return p}),n.d(t,"j",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"n",function(){return m}),n.d(t,"f",function(){return y}),n.d(t,"k",function(){return v}),n.d(t,"a",function(){return f}),n.d(t,"m",function(){return g}),n.d(t,"d",function(){return h});var a=n("t3Un");function i(e){return Object(a.a)({url:"http://192.168.1.45:8080/country/getdeptlist",method:"post",params:e})}function r(e,t){var n=new URLSearchParams;return""!==e&&null!==e&&n.append("empids",e),""!==t&&null!==t&&n.append("stat",t),Object(a.a)({url:"http://192.168.1.45:8080/employee/startorendemp",method:"post",data:n})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empids",e),Object(a.a)({url:"http://192.168.1.45:8080/employee/deleteemp",method:"post",data:t})}function d(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("id",e),Object(a.a)({url:"http://192.168.1.45:8080/employee/getempinfo",method:"post",data:t})}function p(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("employeeid",e.id),""!==e.firstName&&null!==e.firstName&&void 0!==e.firstName&&t.append("firstname",e.firstName),""!==e.middleName&&null!==e.middleName&&void 0!==e.middleName&&t.append("middlename",e.middleName),""!==e.lastName&&null!==e.lastName&&void 0!==e.lastName&&t.append("lastname",e.lastName),""!==e.password&&null!==e.password&&void 0!==e.password&&t.append("passwd",e.password),""!==e.email&&null!==e.email&&void 0!==e.email&&t.append("email",e.email),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&t.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&t.append("birthday",e.birthday),""!==e.deptId&&null!==e.deptId&&void 0!==e.deptId&&t.append("deptid",e.deptId),""!==e.postId&&null!==e.postId&&void 0!==e.postId&&t.append("postid",e.postId),""!==e.repositoryid2&&null!==e.repositoryid2&&void 0!==e.repositoryid2&&t.append("repositoryid",e.repositoryid2),""!==e.regionId&&null!==e.regionId&&void 0!==e.regionId&&t.append("regionid",e.regionId),""!==e.certificateType&&null!==e.certificateType&&void 0!==e.certificateType&&t.append("certificatetype",e.certificateType),""!==e.certificateNumber&&null!==e.certificateNumber&&void 0!==e.certificateNumber&&t.append("certificatenumber",e.certificateNumber),Object(a.a)({url:"http://192.168.1.45:8080/employee/updateemp",method:"post",data:t})}function l(e){var t=new URLSearchParams;return t.append("firstname",e.firstname),t.append("middlename",e.middlename),t.append("lastname",e.lastname),t.append("passwd",e.passwd),t.append("email",e.email),t.append("phone",e.phone),t.append("gender",e.gender),t.append("countryid",e.country),t.append("provinceid",e.provinceid),t.append("cityid",e.cityid),t.append("address",e.address),""===e.birthday&&null===e.birthday||t.append("birthday",e.birthday),t.append("account",e.account),t.append("jobnumber",e.jobnumber),t.append("deptid",e.deptid),t.append("roleid",e.roleid),t.append("postid",e.postid),t.append("repositoryid",e.repositoryid),t.append("regionid",e.regionid1),t.append("certificatetype",e.certificatetype),t.append("certificatenumber",e.certificatenumber),Object(a.a)({url:"http://192.168.1.45:8080/employee/register",method:"post",data:t})}function s(e){var t=new URLSearchParams;return""!==e.repositoryid&&t.append("repositoryid",e.repositoryid),""!==e.regionid&&void 0!==e.regionid&&t.append("regionid",e.regionid),""!==e.postid&&t.append("postid",e.postid),""!==e.deptid&&t.append("deptid",e.deptid),""!==e.employeename&&t.append("employeename",e.employeename),""!==e.stat&&t.append("stat",e.stat),""!==e.time&&null!==e.time&&t.append("time",e.time),""!==e.jobnumber&&t.append("jobnumber",e.jobnumber),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/employee/getemplist",method:"post",data:t})}function c(e){var t=new URLSearchParams;return""!==e.employeeid&&t.append("employeeid",e.employeeid),""!==e.contractname&&t.append("contractname",e.contractname),""!==e.signtime&&null!==e.signtime&&t.append("signtime",e.signtime),""!==e.expiredtime&&null!==e.expiredtime&&t.append("expiredtime",e.expiredtime),""!==e.effectivetime&&null!==e.effectivetime&&t.append("effectivetime",e.effectivetime),""!==e.typeid&&t.append("typeid",e.typeid),""!==e.attribute&&t.append("attribute",e.attribute),""!==e.period&&t.append("period",e.period),""!==e.iscorrection&&t.append("iscorrection",e.iscorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceday&&t.append("advanceday",e.advanceday),""!==e.trialsalary&&t.append("trialsalary",e.trialsalary),""!==e.correctionsalary&&t.append("correctionsalary",e.correctionsalary),""!==e.remindpersonid&&t.append("remindpersonid",e.remindpersonid),Object(a.a)({url:"http://192.168.1.45:8080/contract/addcontract",method:"post",data:t})}function u(e){var t=new URLSearchParams;return""!==e.contractname&&t.append("contractname",e.contractname),""!==e.contractnumber&&t.append("contractnumber",e.contractnumber),""!==e.empnumber&&t.append("empnumber",e.empnumber),""!==e.empname&&t.append("empname",e.empname),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/contract/contractlist",method:"post",data:t})}function m(e){var t=new URLSearchParams;return""!==e.id&&t.append("contractid",e.id),""!==e.contractName&&t.append("contractname",e.contractName),""!==e.signTime&&t.append("signtime",e.signTime),""!==e.expiredTime&&t.append("expiredtime",e.expiredTime),""!==e.effectiveTime&&t.append("effectivetime",e.effectiveTime),""!==e.type&&t.append("typeid",e.type),""!==e.contractAttribute&&t.append("attribute",e.contractAttribute),""!==e.contractAttribute&&t.append("period",e.period),""!==e.isCorrection&&t.append("iscorrection",e.isCorrection),""!==e.stat&&t.append("stat",e.stat),""!==e.advanceDay&&t.append("advanceday",e.advanceDay),""!==e.trialSalary&&t.append("trialsalary",e.trialSalary),""!==e.correctionSalary&&t.append("correctionsalary",e.correctionSalary),""!==e.expiredRemindPersonId&&null!==e.expiredRemindPersonId&&t.append("remindpersonid",e.expiredRemindPersonId),Object(a.a)({url:"http://192.168.1.45:8080/contract/updatecontract",method:"post",data:t})}function y(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("empcontractids",e),Object(a.a)({url:"http://192.168.1.45:8080/contract/deleteempcontract",method:"post",data:t})}function v(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/employee/searchEmpCategory",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.category&&null!==e.category&&t.append("category",e.category),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),Object(a.a)({url:"http://192.168.1.45:8080/employee/addEmpCategory",method:"post",data:t})}function g(e){var t=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&t.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&t.append("id",e.id),Object(a.a)({url:"http://192.168.1.45:8080/employee/updateEmpCategory",method:"post",data:t})}function h(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("ids",e),Object(a.a)({url:"http://192.168.1.45:8080/employee/delateEmpCategory",method:"post",data:t})}},"30kq":function(e,t,n){},"6HaC":function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return d}),n.d(t,"a",function(){return p});var a=n("t3Un");function i(e){return Object(a.a)({url:"http://192.168.1.45:8080/country/getcountrylist",method:"post",params:e})}function r(e){return Object(a.a)({url:"http://192.168.1.45:8080/region/detaillist",method:"post",params:e})}function o(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("regionId",e),t.append("pagenum",1),t.append("pagesize",99999),Object(a.a)({url:"http://192.168.1.45:8080/repository/searchRepository",method:"post",data:t})}function d(e){var t=new URLSearchParams;return t.append("countryid",e),Object(a.a)({url:"http://192.168.1.45:8080/country/getprovincelist",method:"post",data:t})}function p(e){var t=new URLSearchParams;return t.append("provinceid",e),Object(a.a)({url:"http://192.168.1.45:8080/country/getcitylist",method:"post",data:t})}},BJvg:function(e,t,n){"use strict";n.d(t,"j",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"l",function(){return d}),n.d(t,"h",function(){return p}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return s}),n.d(t,"n",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"k",function(){return m}),n.d(t,"b",function(){return y}),n.d(t,"m",function(){return v}),n.d(t,"f",function(){return f}),n.d(t,"i",function(){return g});var a=n("t3Un");function i(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("type",e),t.append("pagenum",1),t.append("pagesize",9999),Object(a.a)({url:"http://192.168.1.45:8080/customer/searchCusCategory",method:"post",data:t})}function r(e){var t=new URLSearchParams;return""!==e.customername&&null!==e.customername&&void 0!==e.customername&&t.append("customername",e.customername),""!==e.level&&null!==e.level&&void 0!==e.level&&t.append("level",e.level),""!==e.createtime&&null!==e.createtime&&void 0!==e.createtime&&t.append("createtime",e.createtime),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.repositoryid&&null!==e.repositoryid&&void 0!==e.repositoryid&&t.append("repositoryid",e.repositoryid),""!==e.source&&null!==e.source&&void 0!==e.source&&t.append("source",e.source),""!==e.customerphone&&null!==e.customerphone&&void 0!==e.customerphone&&t.append("customerphone",e.customerphone),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/customer/customerlist",method:"post",data:t})}function o(e){var t=new URLSearchParams;return""!==e.firstname&&null!==e.firstname&&void 0!==e.firstname&&t.append("firstname",e.firstname),""!==e.middlename&&null!==e.middlename&&void 0!==e.middlename&&t.append("middlename",e.middlename),""!==e.lastname&&null!==e.lastname&&void 0!==e.lastname&&t.append("lastname",e.lastname),""!==e.email&&null!==e.email&&void 0!==e.email&&t.append("email",e.email),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&t.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.level&&null!==e.level&&void 0!==e.level&&t.append("level",e.level),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.repositoryid&&null!==e.repositoryid&&void 0!==e.repositoryid&&t.append("repositoryid",e.repositoryid),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&t.append("birthday",e.birthday),""!==e.source&&null!==e.source&&void 0!==e.source&&t.append("source",e.source),""!==e.newold&&null!==e.newold&&void 0!==e.newold&&t.append("newold",e.newold),""!==e.customertype&&null!==e.customertype&&void 0!==e.customertype&&t.append("customertype",e.customertype),Object(a.a)({url:"http://192.168.1.45:8080/customer/addCustomer",method:"post",data:t})}function d(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("customerid",e.id),""!==e.firstName&&null!==e.firstName&&void 0!==e.firstName&&t.append("firstname",e.firstName),""!==e.middleName&&null!==e.middleName&&void 0!==e.middleName&&t.append("middlename",e.middleName),""!==e.lastName&&null!==e.lastName&&void 0!==e.lastName&&t.append("lastname",e.lastName),""!==e.phoneNumber&&null!==e.phoneNumber&&void 0!==e.phoneNumber&&t.append("phone",e.phoneNumber),""!==e.gender&&null!==e.gender&&void 0!==e.gender&&t.append("gender",e.gender),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.level&&null!==e.level&&void 0!==e.level&&t.append("level",e.level),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.repositoryid&&null!==e.repositoryid&&void 0!==e.repositoryid&&t.append("repositoryid",e.repositoryid),""!==e.birthday&&null!==e.birthday&&void 0!==e.birthday&&t.append("birthday",e.birthday),""!==e.source&&null!==e.source&&void 0!==e.source&&t.append("source",e.source),""!==e.newOrOld&&null!==e.newOrOld&&void 0!==e.newOrOld&&t.append("newold",e.newOrOld),""!==e.customerType&&null!==e.customerType&&void 0!==e.customerType&&t.append("customertype",e.customerType),Object(a.a)({url:"http://192.168.1.45:8080/customer/updateCustomer",method:"post",data:t})}function p(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("customerids",e),Object(a.a)({url:"http://192.168.1.45:8080/customer/deletecustomer",method:"post",data:t})}function l(e){var t=new URLSearchParams;return""!==e.agentname&&null!==e.agentname&&void 0!==e.agentname&&t.append("agentname",e.agentname),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.pinyin&&null!==e.pinyin&&void 0!==e.pinyin&&t.append("pinyin",e.pinyin),""!==e.level&&null!==e.level&&void 0!==e.level&&t.append("level",e.level),""!==e.source&&null!==e.source&&void 0!==e.source&&t.append("source",e.source),""!==e.discount&&null!==e.discount&&void 0!==e.discount&&t.append("discount",e.discount),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.introduce&&null!==e.introduce&&void 0!==e.introduce&&t.append("introduce",e.introduce),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.contactname&&null!==e.contactname&&void 0!==e.contactname&&t.append("contactname",e.contactname),""!==e.traderid&&null!==e.traderid&&void 0!==e.traderid&&t.append("traderid",e.traderid),""!==e.transmode&&null!==e.transmode&&void 0!==e.transmode&&t.append("transmode",e.transmode),""!==e.deliverymode&&null!==e.deliverymode&&void 0!==e.deliverymode&&t.append("deliverymode",e.deliverymode),""!==e.createid&&null!==e.createid&&void 0!==e.createid&&t.append("createid",e.createid),""!==e.newold&&null!==e.newold&&void 0!==e.newold&&t.append("newold",e.newold),Object(a.a)({url:"http://192.168.1.45:8080/agent/addagent",method:"post",data:t})}function s(e){var t=new URLSearchParams;return""!==e.agentname&&null!==e.agentname&&void 0!==e.agentname&&t.append("agentname",e.agentname),""!==e.level&&null!==e.level&&void 0!==e.level&&t.append("level",e.level),""!==e.createtime&&null!==e.createtime&&void 0!==e.createtime&&t.append("createtime",e.createtime),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.source&&null!==e.source&&void 0!==e.source&&t.append("source",e.source),""!==e.pinyin&&null!==e.pinyin&&void 0!==e.pinyin&&t.append("pinyin",e.pinyin),""!==e.contactname&&null!==e.contactname&&void 0!==e.contactname&&t.append("contactname",e.contactname),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/agent/agentlist",method:"post",data:t})}function c(e){var t=new URLSearchParams;return""!==e.id&&null!==e.id&&void 0!==e.id&&t.append("agentid",e.id),""!==e.agentName&&null!==e.agentName&&void 0!==e.agentName&&t.append("agentname",e.agentName),""!==e.phone&&null!==e.phone&&void 0!==e.phone&&t.append("phone",e.phone),""!==e.type&&null!==e.type&&void 0!==e.type&&t.append("type",e.type),""!==e.pinyin&&null!==e.pinyin&&void 0!==e.pinyin&&t.append("pinyin",e.pinyin),""!==e.level&&null!==e.level&&void 0!==e.level&&t.append("level",e.level),""!==e.source&&null!==e.source&&void 0!==e.source&&t.append("source",e.source),""!==e.discount&&null!==e.discount&&void 0!==e.discount&&t.append("discount",e.discount),""!==e.countryid&&null!==e.countryid&&void 0!==e.countryid&&t.append("countryid",e.countryid),""!==e.provinceid&&null!==e.provinceid&&void 0!==e.provinceid&&t.append("provinceid",e.provinceid),""!==e.cityid&&null!==e.cityid&&void 0!==e.cityid&&t.append("cityid",e.cityid),""!==e.introduce&&null!==e.introduce&&void 0!==e.introduce&&t.append("introduce",e.introduce),""!==e.address&&null!==e.address&&void 0!==e.address&&t.append("address",e.address),""!==e.contactName&&null!==e.contactName&&void 0!==e.contactName&&t.append("contactname",e.contactName),""!==e.traderid&&null!==e.traderid&&void 0!==e.traderid&&t.append("traderid",e.traderid),""!==e.transMode&&null!==e.transMode&&void 0!==e.transMode&&t.append("transmode",e.transMode),""!==e.deliveryMode&&null!==e.deliveryMode&&void 0!==e.deliveryMode&&t.append("deliverymode",e.deliveryMode),""!==e.deliveryMode&&null!==e.deliveryMode&&void 0!==e.deliveryMode&&t.append("deliverymode",e.deliveryMode),Object(a.a)({url:"http://192.168.1.45:8080/agent/updateagent",method:"post",data:t})}function u(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("ids",e),Object(a.a)({url:"http://192.168.1.45:8080/agent/deleteagent",method:"post",data:t})}function m(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),t.append("pagenum",e.pagenum),t.append("pagesize",e.pagesize),Object(a.a)({url:"http://192.168.1.45:8080/customer/searchCusCategory",method:"post",data:t})}function y(e){var t=new URLSearchParams;return""!==e.categoryname&&null!==e.categoryname&&t.append("categoryname",e.categoryname),""!==e.category&&null!==e.category&&t.append("category",e.category),""!==e.iseffective&&null!==e.iseffective&&t.append("iseffective",e.iseffective),""!==e.type&&null!==e.type&&t.append("type",e.type),Object(a.a)({url:"http://192.168.1.45:8080/customer/addCusCategory",method:"post",data:t})}function v(e){var t=new URLSearchParams;return""!==e.categoryName&&null!==e.categoryName&&t.append("categoryname",e.categoryName),""!==e.isEffective&&null!==e.isEffective&&t.append("iseffective",e.isEffective),""!==e.id&&null!==e.id&&t.append("id",e.id),Object(a.a)({url:"http://192.168.1.45:8080/customer/updateCusCategory",method:"post",data:t})}function f(e){var t=new URLSearchParams;return""!==e&&null!==e&&t.append("ids",e),Object(a.a)({url:"http://192.168.1.45:8080/customer/delateCusCategory",method:"post",data:t})}function g(e){var t=new URLSearchParams;return""!==e&&null!==e&&void 0!==e&&t.append("customerJson",e),Object(a.a)({url:"http://192.168.1.45:8080/customer/manyinsert",method:"post",data:t})}},DNkW:function(e,t,n){var a=n("93I4"),i=Math.floor;e.exports=function(e){return!a(e)&&isFinite(e)&&i(e)===e}},LWcQ:function(e,t,n){"use strict";var a=n("6HaC"),i=n("0zGY"),r=n("ZySA"),o=n("Mz3J"),d={directives:{waves:r.a},components:{Pagination:o.a},filters:{genderFilter:function(e){return{1:"男",2:"女"}[e]}},props:{control:{type:Boolean,default:!1}},data:function(){return{managerPeople:"",regionManagerId:"",currentRow:null,list:[],total:0,tableKey:0,listLoading:!0,getemplist:{repositoryid:"",regionid:"",postid:"",deptid:"",employeename:"",pagenum:1,pagesize:10,stat:1,time:"",jobnumber:""},depts:[],props2:{value:"id",label:"regionName",children:"regionListVos"},regions2:[],getemplistregions:[],repositories:[],employeeVisible:this.control,regionManagerVisible:!1}},watch:{control:function(){this.employeeVisible=this.control,console.log(this.control)}},created:function(){this.gitemplist()},methods:{gitemplist:function(){var e=this;this.listLoading=!0,console.log(this.getemplist),Object(i.i)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount):e.$notify.error({title:"错误",message:"出错了",offset:100}),setTimeout(function(){e.listLoading=!1},50)}),Object(i.g)().then(function(t){200===t.data.ret?e.depts=t.data.data.content:e.$notify.error({title:"错误",message:"出错了",offset:100})}),Object(a.d)().then(function(t){200===t.data.ret&&(e.regions2=e.tranKTree(t.data.data.content))})},tranKTree:function(e){var t=this;if(e&&e.length)return e.map(function(e){return{id:e.id,regionName:e.regionName,regionListVos:t.tranKTree(e.regionListVos)}})},handleFilter:function(){var e=this;this.getemplist.regionid=this.getemplistregions[this.getemplistregions.length-1],Object(i.i)(this.getemplist).then(function(t){200===t.data.ret?(e.list=t.data.data.content.list,e.total=t.data.data.content.totalCount):e.$notify.error({title:"错误",message:"出错了",offset:100})})},handleAdd:function(){this.employeeVisible=!1,this.$router.push("/EmployeeInformation/NewEmployeeInformation")},handlechange4:function(e){var t=this;console.log(e);var n=e[e.length-1];Object(a.e)(n).then(function(e){200===e.data.ret?(console.log(e),t.repositories=e.data.data.content.list):t.$message.error("出错了")})},restemplist:function(){this.getemplist={repositoryid:"",regionid:"",postid:"",deptid:"",employeename:"",pagenum:1,pagesize:10,stat:1,time:"",jobnumber:""},this.getemplistregions=[]},handleCurrentChange:function(e){this.$emit("personName",e),this.employeeVisible=!1}}},p=(n("mVcM"),n("KHd+")),l=Object(p.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.employeeVisible,control:e.control,"close-on-press-escape":!1,top:"10px",title:"选择员工","append-to-body":""},on:{"update:visible":function(t){e.employeeVisible=t},close:function(t){e.$emit("update:control",!1)}}},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("NewEmployeeInformation.employeename"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.employeename,callback:function(t){e.$set(e.getemplist,"employeename",t)},expression:"getemplist.employeename"}}),e._v(" "),n("el-input",{staticClass:"filter-item",attrs:{placeholder:e.$t("NewEmployeeInformation.jobnumber2"),clearable:""},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.getemplist.jobnumber,callback:function(t){e.$set(e.getemplist,"jobnumber",t)},expression:"getemplist.jobnumber"}}),e._v(" "),n("el-date-picker",{staticClass:"filter-item",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.getemplist.time,callback:function(t){e.$set(e.getemplist,"time",t)},expression:"getemplist.time"}}),e._v(" "),n("el-popover",{attrs:{placement:"bottom",width:"500",trigger:"click"}},[n("el-cascader",{staticStyle:{width:"40%",float:"left","margin-left":"20px"},attrs:{options:e.regions2,props:e.props2,"show-all-levels":!1,placeholder:"请选择区域","change-on-select":"",filterable:"",clearable:""},on:{change:e.handlechange4},model:{value:e.getemplistregions,callback:function(t){e.getemplistregions=t},expression:"getemplistregions"}}),e._v(" "),n("el-select",{staticStyle:{width:"40%",float:"right","margin-right":"20px"},attrs:{placeholder:"请选择门店",clearable:"",filterable:""},model:{value:e.getemplist.repositoryid,callback:function(t){e.$set(e.getemplist,"repositoryid",t)},expression:"getemplist.repositoryid"}},e._l(e.repositories,function(e,t){return n("el-option",{key:t,attrs:{label:e.repositoryName,value:e.id}})})),e._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"40%",float:"left","margin-top":"10px","margin-left":"20px"},attrs:{value:e.getemplist.postid,placeholder:e.$t("NewEmployeeInformation.postid2"),clearable:""},model:{value:e.getemplist.postid,callback:function(t){e.$set(e.getemplist,"postid",t)},expression:"getemplist.postid"}},[n("el-option",{attrs:{label:"xxx",value:"1"}}),e._v(" "),n("el-option",{attrs:{label:"xxx",value:"2"}})],1),e._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"40%",float:"right","margin-top":"10px","margin-right":"20px"},attrs:{placeholder:e.$t("NewEmployeeInformation.deptid2"),clearable:""},model:{value:e.getemplist.deptid,callback:function(t){e.$set(e.getemplist,"deptid",t)},expression:"getemplist.deptid"}},e._l(e.depts,function(e,t){return n("el-option",{key:t,attrs:{label:e.deptName,value:e.id}})})),e._v(" "),n("div",{staticClass:"seachbutton",staticStyle:{width:"100%",float:"right","margin-top":"20px"}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))])],1),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v(e._s(e.$t("public.filter"))),n("svg-icon",{staticStyle:{"margin-left":"4px"},attrs:{"icon-class":"shaixuan"}})],1)],1),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(e._s(e.$t("public.search")))]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{width:"86px"},attrs:{icon:"el-icon-plus",type:"success"},on:{click:e.handleAdd}},[e._v(e._s(e.$t("public.add")))])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.id"),resizable:!1,property:"id",align:"center",width:"50"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.jobNumber"),resizable:!1,property:"jobNumber",align:"center",width:"100"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.account"),resizable:!1,property:"account",width:"150",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.name"),resizable:!1,align:"center",width:"109"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.firstName)+" "+e._s(t.row.middleName)+" "+e._s(t.row.lastName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.gender"),resizable:!1,prop:"gender",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("genderFilter")(t.row.gender)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.deptName"),resizable:!1,prop:"deptName",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.deptName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.regionName"),resizable:!1,prop:"regionName",align:"center",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.regionName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("NewEmployeeInformation.repositoryName"),resizable:!1,prop:"repositoryName",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.repositoryName))])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.getemplist.pagenum,limit:e.getemplist.pagesize},on:{"update:page":function(t){e.$set(e.getemplist,"pagenum",t)},"update:limit":function(t){e.$set(e.getemplist,"pagesize",t)},pagination:e.gitemplist}})],1)},[],!1,null,"86e7238c",null);l.options.__file="MyEmp.vue";t.a=l.exports},Y5bG:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),Math.easeInOutQuad=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function i(e,t,n){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,r=e-i,o=0;t=void 0===t?500:t;!function e(){o+=20,function(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}(Math.easeInOutQuad(o,i,r,t)),o<t?a(e):n&&"function"==typeof n&&n()}()}},ZySA:function(e,t,n){"use strict";var a=n("P2sY"),i=n.n(a),r=(n("jUE0"),{bind:function(e,t){e.addEventListener("click",function(n){var a=i()({},t.value),r=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=r.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var d=o.getBoundingClientRect(),p=o.querySelector(".waves-ripple");switch(p?p.className="waves-ripple":((p=document.createElement("span")).className="waves-ripple",p.style.height=p.style.width=Math.max(d.width,d.height)+"px",o.appendChild(p)),r.type){case"center":p.style.top=d.height/2-p.offsetHeight/2+"px",p.style.left=d.width/2-p.offsetWidth/2+"px";break;default:p.style.top=(n.pageY-d.top-p.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",p.style.left=(n.pageX-d.left-p.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return p.style.backgroundColor=r.color,p.className="waves-ripple z-active",!1}},!1)}}),o=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(o)),r.install=o;t.a=r},h5AQ:function(e,t,n){n("hRZT"),e.exports=n("WEpk").Number.isInteger},hRZT:function(e,t,n){var a=n("Y7ZC");a(a.S,"Number",{isInteger:n("DNkW")})},jUE0:function(e,t,n){},mVcM:function(e,t,n){"use strict";var a=n("30kq");n.n(a).a},ql3t:function(e,t,n){e.exports={default:n("h5AQ"),__esModule:!0}}}]);
