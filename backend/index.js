//>> Importar express, mysql, cors
import express, { response } from 'express';
import mysql from 'mysql';
import cors from 'cors';

//>> Criar o aplicativo - iniciar express
const app = express();
//>> Criar conexão com o banco de dados
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

/*
>> Usado para fazer requisições usando o método "GET"
  app.get(path, callback);
    -> path - caminho, rota da requisição. Ou seja, caminho que conterá na URL, 
    ¬ para cada request 
    -> callback - a função de retorno para quando for feita a requisição
*/
app.get("/", (req, res) => {
  res.json("HELLLLOOOOOO HELLFIRE");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  /*
  >> Com esse método é feito asquerys no banco
    db.query(q, (err, data) => {});
      -> q - é a query
      -> no segundo parametro é um callback que recebe dois params:
        +> err - seria o erro, se acontecer um 
        +> data - dados vindos da query
  */
  db.query(q, (err, data) => {
    if (err) return res.json(err); 
    
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const { title, description, cover } = req.body;

  const q = "INSERT INTO books (`title, `description`, `cover`) VALUES (?)";
  const values = [
    title,
    description, 
    cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book criado com sucesso!");
  });
});

// >> Usar middlewares;
app.use(express.json())
app.use(cors(
  {
    origin:'http://127.0.0.1:5173/', 
    accessControlAllowCredentials:true,
    credentials:true,            
    optionSuccessStatus:200
  }
));

/*
>> Fornecer a porta da aplicação e passar um callback 
¬ que sempre será chamado quando a aplicação executada
*/ 
app.listen(8800, () => {
  console.log("heloooooooo, backend conectado!");
});
