import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
const GRAPHCMS_API = 'https://api-apeast.graphcms.com/v1/cjwebg0d60ijl01ff7o1h4o7u/master'

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})
