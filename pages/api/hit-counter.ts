import type { NextApiRequest, NextApiResponse } from 'next'
import faunadb, { values } from 'faunadb'

import { Config } from '../../config'

export default async function incrementHitCounter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { Add, Update, Select, query, Ref } = faunadb

    // We connect to the database on every request.
    const client = new faunadb.Client({
      secret: Config.secret,
      domain: Config.domain
    })

    const docRef = Ref(faunadb.Collection(Config.collection), Config.docID)

    // The `faunadb.query` object has a bunch
    // of helper methods to create a query.
    const doc = query.Get(docRef)

    // A query on its own is a description of what we want.
    // To execute it, we have to pass it to `client.query`:
    const document: values.Document<{ value: number }> = await client.query(
      Update(docRef, {
        data: {
          value: Add(Select(['data', 'value'], doc), 1)
        }
      })
    )

    return res.status(200).json({ value: document.data.value })
  } catch (e) {
    res.json({ error: 'yes', value: 'Unable to count...' })
  }
}
