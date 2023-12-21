import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./sendMail.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/app", router);

const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

startServer();