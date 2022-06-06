import { Request } from '../core/services/http/request'
const request = new Request()
export const getList = () => {
  return request.get({ url: '/pc/municipal/getAreaList' })
}
export const getmunicipalList = (areaId, categoryId) => {
  return request.get({ url: `/pc/municipal/getmunicipalList?areaId=${areaId}&categoryId=${categoryId}` })
}
