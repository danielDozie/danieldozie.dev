import {getAllJournals } from "../../../lib/faunaClient"

export default async function handler(req, res) {
    const result = await getAllJournals;
    const data = result.data

    res.status(200).json(data)
  }
