import request from '@/utils/request'

export function logins() {
  return request({
    url: '/history/logins',
    method: 'GET',
    params: {
      page: 0,
      size: 20
    }
  })
}
