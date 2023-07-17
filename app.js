const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error");

//config
dotenv.config({ path: "config/config.env" });

app.use(express.json());
app.use(cookieParser());
//parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//this is for testing . not included in code.
app.post("/example", (req, res) => {
  console.log(req.body); //the parsed URL-encoded data will be available in req.body.
});

//route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

//routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

//Middleware for Error
app.use(errorMiddleware);

module.exports = app;
