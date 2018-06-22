'use strict'

const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'appverse',
    username: process.env.DB_USER || 'appverse',
    password: process.env.DB_PASS || 'appverse',
    host: process.env.DB_HOST || 'localhost'
  }
  await db(config)
}

setup()
