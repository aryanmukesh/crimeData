//require the library
const mongoose = require('mongoose');


//connecting to Database
mongoose.connect('mongodb://localhost/contact_list_db');

//accquire the DB to check if connection is successful;
const db = mongoose.connection;

//on error
db.on('error', console.error.bind(console,'error in connecting to db'));


// on Successfull connection
db.once('open', function(){
    console.log("Successfully Connected to the DB");
});