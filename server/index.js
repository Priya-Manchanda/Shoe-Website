const express = require("express");
const mongoConnect = require("./db");
mongoConnect();
const app = express();
var cors = require('cors')
app.use(cors())
const UserRoute = require("./routes/user");

app.use(express.json());
app.use("/api/user", UserRoute);
app.listen(7000, () => {
  console.log("Server running on port 7000");
});
