const express = require("express")
const cors = require("cors")
const { connection } = require("./database/util")
const bodyParser = require("body-parser")
const dotEnv = require("dotenv")
var path = require('path')


dotEnv.config()
const app = express()
connection()


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());



app.use(express.static(path.join(__dirname, './public')));

app.use("/api",  require('./routes/games'));
app.use("/rest/api/ui",  require('./routes/Ui'));
app.use('/api/accounts', require('./routes/users'));

app.listen(process.env.PORT, function() {
	console.log(`La magia ocurre en el puerto ${process.env.PORT}`);
  });
  