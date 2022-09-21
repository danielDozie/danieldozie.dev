const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

export default client 