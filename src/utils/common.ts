// export const isTokenExpired = (exp) => {
//   if (exp) {
//     if (exp * 1000 - moment().unix() * 1000 > 0) {
//       return false
//     }
//     return true
//   }
//   return false
// }

import { routeConfig } from '../routeConfig'

export const getPostPathById = (id: string) => {
  return routeConfig.post.path.replace(':postId', id)
}
