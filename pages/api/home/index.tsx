import client from '../../../lib/sanityClient'

export default async function handler(req, res) {
const menuQuery = `*[_type == "menu" ]| order(_createdAt asc){
  _id,
  name,
  link{
  current
}
}`
const menu = await client.fetch(menuQuery)
res.status(200).json(menu)
}