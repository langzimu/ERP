import request from '@/utils/request'

//   添加采购退货
export function addSubject(query) {
  var params = new URLSearchParams()
  params.append('subjectFinanceJson', query) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/subject/addSubject',
    method: 'post',
    data: params
  })
}

// 查询采购退货
export function subjectList(query) {
  var params = new URLSearchParams()
  return request({
    url: '/erp/subject/subjectList',
    method: 'post',
    data: params
  })
}

// 删除采购退货
export function deleteSubject(query) {
  var params = new URLSearchParams()
  params.append('subjectId', query) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/subject/deleteSubject',
    method: 'post',
    data: params
  })
}

//  修改采购退货
export function updateSubject(query) {
  var params = new URLSearchParams()
  params.append('subjectFinanceJson', query) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/subject/updateSubject',
    method: 'post',
    data: params
  })
}

//  添加采购退货
export function addSubjectDetail(query, query2) {
  var params = new URLSearchParams()
  params.append('subjectDetailJson', query) // 你要传给后台的参数值 key/value
  params.append('subjectFinanceJson', query2) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/subject/addSubjectDetail',
    method: 'post',
    data: params
  })
}

// 查询采购退货
export function itemList(query) {
  console.log('query', query)
  var params = new URLSearchParams()
  if (query.subjectId !== '' && query.subjectId !== null && query.subjectId !== undefined) {
    params.append('subjectId', query.subjectId) // 你要传给后台的参数值 key/value
  }
  if (query.subjectType !== '' && query.subjectType !== null && query.subjectType !== undefined) {
    params.append('subjectType', query.subjectType) // 你要传给后台的参数值 key/value
  }
  return request({
    url: '/erp/subject/itemList2',
    method: 'post',
    data: params
  })
}

// 删除采购退货
export function deleteSubjectDetail(query) {
  var params = new URLSearchParams()
  params.append('subjectDetailId', query) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/subject/deleteSubjectDetail',
    method: 'post',
    data: params
  })
}

//  修改采购退货
export function updateSubjectDetail(query) {
  var params = new URLSearchParams()
  params.append('subjectDetailJson', query) // 你要传给后台的参数值 key/value
  return request({
    url: '/erp/subject/updateSubjectDetail',
    method: 'post',
    data: params
  })
}
