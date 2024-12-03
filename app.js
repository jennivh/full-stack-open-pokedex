import express from 'express'
const { static: serveStatic } = express
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000
app.use(serveStatic('dist'))


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('85') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})