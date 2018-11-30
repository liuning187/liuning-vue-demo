import axios from '../../components/interceptor'
import axioss from 'axios'
export default {
  login: async (param) => {
    let rest = await axios.post(`/api/users/actions/login`, param)
    return rest.data
  },
  queryUserList: async ({pageNumber, pageSize}, {userName}, orgId) => {
    let rest = await axios.get(`/api/users?pageNumber=${pageNumber}&pageSize=${pageSize}&userName=${userName}&orgId=${orgId}`)
    return rest.data
  },
  create: async (user) => {
    let rest = await axios.post('/api/users/', user)
    return rest.data
  },
  remove: async (id) => {
    let resp = await axioss.delete(`/api/users/${id}`)
    return resp.data
  },
  update: async (user) => {
    let rest = await axios.put('/api/users', user)
    return rest.data
  }
}
