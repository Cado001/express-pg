import pg from 'pg'
const { Client } = pg

import connectionString from './secrets.js'

export const client = new Client ({
    connectionString
})

await client.connect ()
    .catch(console.error)