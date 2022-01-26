import express from 'express';
/*const express = require('express')*///Ohne type modul
const server = express()
const port = 3001 //das muss an der Stelle geändert werden weil der dev standardmässig auf 3000 läuft

server.get('/', (req, res) => {
	res.send('"Hello World!"')
})

server.get('/api/todos', (req, res) => {
	res.json([{id:1, name:"Alex"}])
})

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
