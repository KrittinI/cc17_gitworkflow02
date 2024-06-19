const express = require("express");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

app.use(notFound)
app.use(errorMiddleware);

const PORT = 8000
app.listen(PORT, () => console.log("Server on port", PORT))
