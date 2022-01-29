export const Config: {
  secret: string
  domain: string
  collection: string
  docID: string
} = {
  secret: process.env.FAUNA_SECRET_KEY || '<dummy_secret>',
  domain: process.env.FAUNA_DB_DOMAIN || 'db.eu.fauna.com',
  collection: process.env.FAUNA_DB_COLLECTION || '<collection-name>',
  docID: process.env.FAUNA_DB_DOC_ID || '<doc-ref-id>'
}
