const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'xdm2fqtm',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

export default client 