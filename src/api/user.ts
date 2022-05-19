import request from '@/utils/request'

export function GetOrganizations() {
  return request({
    url: '/organizations',
    method: 'GET',
    params: {
      page: 0,
      size: 20
    }
  })
}
