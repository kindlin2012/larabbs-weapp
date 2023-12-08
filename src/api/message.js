// 创建message模块
//导入authrequest
import { request, authRequest } from '@/utils/request'
//导出createmessages方法
export function createMessage(data) {
  return authRequest('messages', {
    method: 'POST',
    data: data
  })
}
//导出getcurUserSend方法
export function getCurUserSend(data) {
  return authRequest('user/messages/sent',{
    method: 'GET',
    data: data
  })
}

//导出getcurUserReceived方法
export function getCurUserReceived(data) {
  return authRequest('user/messages/received',{
    method: 'GET',
    data: data
  })
}

//导出show方法
export function show(id, data) {
  return authRequest('messages/' + id, {
    method: 'GET',
    data: data

  })
}

//导出delete方法
export function cancelMessage(id, data) {
  return authRequest('messages/' + id, {
    method: 'DELETE',
    data: data
  })
}
