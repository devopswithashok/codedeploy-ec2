const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world v2'))
app.get('/hc', (req, res) => res.send('okay hc'))
app.listen(3000, () => console.log('Server ready'))
