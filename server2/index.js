const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
// const server = process.env.server||"GateWay"
app.get("/", (req, res, next) => {
    res.send(`<h1 align="center">Request Diproses Di Webserver-2</h1>`);
});
app.listen(PORT, () => {
    console.log(`Server Running at port:${PORT}`)
});
