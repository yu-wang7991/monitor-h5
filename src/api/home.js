import { Request } from '../core/services/http/request'
const request = new Request()
export const getList = () => {
  return request.get({ url: '/pc/municipal/getList' })
}
