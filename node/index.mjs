import mysql from 'mysql'
import express from 'express'

import { dbConfig } from './config.mjs'
import { generateName } from './name-generator.mjs'
import { PeopleRepository } from './people-repository.mjs'
import { prepareResponse } from './html.mjs'
const HOST = 'localhost'
const PORT = 3000

const db = mysql.createConnection(dbConfig);

const peopleRepository = new PeopleRepository(db);

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
  const name = generateName();
  const peoples = await peopleRepository.index();
  await peopleRepository.create(name);
  const html = prepareResponse(peoples);
  res.status(200).send(html)
})

app.listen(3000, ()=> {
  console.log(`http://${HOST}:${PORT}`)
})