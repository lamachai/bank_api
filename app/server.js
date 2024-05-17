//extern imports
import express from "express";
import bodyParser from "body-parser";

//local imports
import router from "./routes/routes.js";
import { sequelize } from "./models/models.js";

//app
const app = express();


//configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(router);


//database conection
(()=>{
    sequelize.sync({alter: true}).then((res)=>{
        console.log("Database connected well");
    }).catch((err)=>{
        console.error("Failed to connect", err);
    })
})();

export default app;