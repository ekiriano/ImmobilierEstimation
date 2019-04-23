const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
//path module
const path = require('path');

// Api Routes Importation
const users = require("./routes/api/users");
const defaultEstimation = require("./routes/api/estimation/default");
const superEstimation = require("./routes/api/estimation/super");
const app = express();
const pdf = require('html-pdf');
const pdftemplate = require('./index.js')

// post / pdf generation and fetching of the data 
app.post('/create-pdf', (req, res) => {
	pdf.create(pdftemplate(req.data), {}).toFile('result.pdf', (err) => {
		if(err){
			res.send(Promise.reject());
		}
		res.send(Promise.resolve());
	});
});

// get / send the generated pdf to client
app.get('/fetch-pdf', (req,res) => {
	res.sendFile(`${__dirname}/result.pdf`)
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());



// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/estimation/default", defaultEstimation);
app.use("/api/estimation/super", superEstimation);

// For heroku deploy
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
