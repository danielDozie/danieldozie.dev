const faunadb = require('faunadb'),
  q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNA_SERVER_KEY })

//Getting a  single article by Ref ID
export const getSingleJournal = client.query(
  q.Get(q.Ref(q.Collection("Journal"),  "307838719232049737"))
)

//Getting Index of all articles
/*
  Here you use the regular js Map function to loop through the 
  indices with the paginate keyword. The Lambda is used for the 
  declarative map function that accept a single variable and the GET method is called
  to retrieve the associated data.
*/
export const getAllJournals = client.query(
  q.Map(q.Paginate(q.Match(q.Index('all_journal'))),
  q.Lambda(("journals"), q.Get(q.Var("journals")))
  )
)
