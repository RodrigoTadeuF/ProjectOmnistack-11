const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); 
app.use(errors());

module.exports = app;

/*
 *Rotas / Recurso 
 */

/**
 * Métodos HTTP
 * 
 * GET: Usado quando queremos BUSCAR uma informação do back-end
 * POST: Usado quando queremos CRIAR uma informação no back-end
 * PUT: Usando quando queremos ALTERAR uma informação no back-end
 * DELETE: Usado quando queremos DELETAR uma informação no back-end
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo de "?"  (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, Neo4j, Redis, Cassandra 
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users')select('*').where()
  */