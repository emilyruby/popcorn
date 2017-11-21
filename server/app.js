const algoliasearch = require('algoliasearch')
const express = require('express')
const bodyParser = require('body-parser')
const validator = require('validator')
const requestImageSize = require('request-image-size')
const path = require('path')

const app = express()
const client = algoliasearch('H1LZZCXWZT', process.env.API_KEY)
const index = client.initIndex('movies')

app.use(express.static(path.join(__dirname, '../app/build')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../app/build/index.html')))

async function validate (obj) {
  let result = true
  let unvalidatedKeys = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const validated = await validateType(key, obj[key])
      if (validated === false) {
        unvalidatedKeys.push(key)
        result = validated
      }
    }
  }
  return [result, unvalidatedKeys]
}

async function validateType (key, value) {
  switch (key) {
    case 'title':
      if (typeof value === 'string') {
        return validator.isAscii(value)
      }
      break
    case 'image':
      if (typeof value === 'string') {
        const r = await requestImageSize(value)
          .then(size => {
            return true
          })
          .catch(err => {
            console.error(err)
            return false
          })
        return r
      }
      break
    case 'year':
      if (typeof value === 'number') {
        return (validator.isInt(value.toString()))
      }
      break
    case 'rating':
      return typeof value === 'number' || validator.isNumeric(value.toString())
    default:
      return false
  }
}

app.post('/api/1/movies', bodyParser.json(), async (req, res) => {
  if (req.body) {
    try {
      const [result, unvalidatedKeys] = await validate(req.body)
      if (result) {
        const content = await index.addObjects([req.body])
        res.send(content.objectIDs[0])
        return
      }
      res.status(400).send(unvalidatedKeys)
    } catch (e) {
      console.error(e)
      res.status(500).send('ERROR')
    }
  }
})

app.delete('/api/1/movies/:id', async (req, res) => {
  try {
    const result = await index.deleteObject(req.params.id)
    res.send(result.objectID)
  } catch (e) {
    console.error(e)
    res.status(500).send('ERROR')
  }
})

app.listen(9000, () => console.log('App is listening on port 9000!'))
