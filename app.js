const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world ! Responce From Onboard'))
app.get('/hc', (req, res) => res.send('okay Onboard'))
app.listen(3000, () => console.log('Server ready'))
