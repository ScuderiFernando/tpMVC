const express = require("express");
const app = express();

app.use(express.static("public"))



const mainRouter = require("./routers/main")

app.use("/",mainRouter)
app.use("/about",mainRouter)






app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"))