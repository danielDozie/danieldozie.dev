const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'xdm2fqtm',
  dataset: 'production',
  apiVersion: '2021-03-25', //v1
  token: '', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client