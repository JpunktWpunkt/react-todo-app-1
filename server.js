import cors from 'cors';
import express from 'express';
/*const express = require('express')*///Ohne type modul
import { readFile, writeFile } from 'fs/promises';
import { v4 as uuid } from "uuid";

const server = express();
const port = 3001 //das muss an der Stelle geändert werden weil der dev standardmässig auf 3000 läuft
server.use(express.json());//ermöglicht es mit express json zu interagieren, wäre sonst nicht moeglich
server.use(cors());

server.get('/', (request, response) => {
	response.send('"Hello World!"');
});

const DATABASE_URI = "./database/database.json";

server.get('/api/todos', async (request, response) => {
	const data = await readFile(DATABASE_URI, "utf8");
	const json = JSON.parse(data);
	response.json(json.todos);
});

server.post('/api/todos', async (request, response) => {
	const data = await readFile(DATABASE_URI, "utf8");
	const json = JSON.parse(data);

const todo = {
	...request.body, isChecked: false,
	id:uuid(),
};
json.todos.push(todo);
await writeFile(DATABASE_URI, JSON.stringify(json, null, 4));
response.status(201);
	response.json(todo);

});


server.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})


