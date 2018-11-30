import axios from '../../components/interceptor'
export default {
  getOrgs: async (org) => {
    let rest = await axios.get(`/api/orgs/${org}`)
    return rest.data
  },
  getorg: async (parentId) => {
    let rest = await axios.get(`/api/orgs/?parentId=${parentId}`)
    return rest.data
  },
  create: async (org) => {
    let rest = await axios.post('/api/orgs/', org)
    return rest.data
  },
  remove: async (id) => {
    let rest = await axios.delete(`/api/orgs/${id}`)
    return rest.data
  },
  update: async (org) => {
    let rest = await axios.put('/api/orgs', org)
    return rest.data
  }
}
