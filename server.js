const express = require("express");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

const PORT = 8000;

app.use(errorMiddleware);
app.listen(PORT, () => console.log("Server on port", PORT));
