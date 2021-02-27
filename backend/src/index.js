const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Tipos de parametros
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" {filtros,paginação}
 *      //const params = req.query;(Acessar os parametros enviados)
 * Route Params: Parametros utilizados para identificar recursos
        //app.get('/users/:id', (req, res) => {
        const params = req.params;

        return res.json({
            evento: 'Semana Omnistack 11',
            nome: 'Henry Leão'
        });
    });
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *      //const params = req.body;(Acessa os dados enviados no corpo da requisição)
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where() -> Ferramenta KNEXJS
  * 
  * Instalação: 
  * 1-> npm install knex
  * 3-> # Instalar o tipo de banco desejado (adding a --save) flag:
        $ npm install pg
        $ npm install sqlite3
        $ npm install mysql
        $ npm install mysql2
        $ npm install oracledb
        $ npm install mssql
  * 2-> npx init (Cria o arquivo de conexão)            
  */