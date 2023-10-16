const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./config/database');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3300;

        this.routersAdmin = '/api';
        this.routersProducto = '/api';
        this.routersCliente = '/api';
        
        //conectar base de datos
        this.conectarDB();
        //middleware
        this.middleware();
        //routers
        this.routers();
        
    }
    async conectarDB(){
        await dbConnection();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routers(){
        this.app.use(this.routersAdmin, require('./routers/admin'));
        this.app.use(this.routersProducto, require('./routers/producto'));
        this.app.use(this.routersCliente, require('./routers/cliente'));
        // this.app.use(this.routersConfig, require('./routers/config'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor Corriendo en el Puerto : ${this.port}`);
        });
    }
}
module.exports={
    Server
}