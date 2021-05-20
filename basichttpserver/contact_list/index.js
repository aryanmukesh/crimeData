const express = require('express');
const path = require('path');

const port = 8000;

const db = require('./config/mongoose');
const Report = require('./models/report');

const app = express(); //has all the functionalities of express libraries needed to run a server

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

/*
//middleware1

app.use(function(req, res, next){
    req.myName="IRON";
    // console.log('Middleware1 called');
    next();
});

//middleware2
*/




app.get('/',function(req,res){
   
    return res.render('home');
});

app.get('/larceny',function(req,res){
    return res.render('larceny');
})

app.get('/report', function(req,res){
    return res.render('report');
});

app.post('/create-report', function(req,res){
    
    Contact.create({
        name: req.body.name,
        phone: req.body.phone,
        address:req.body.address,
        offence: req.body.offence,
        date: req.body.date,
        time: req.body.time,
        desc: req.body.desc,
        long: req.body.long,
        lat: req.body.lat
    }, function(err, newReport){
        if(err){
            console.log("error in creating a contact!!!!!");
            return;
        }
        console.log("***********", newReport);
        return res.redirect('back');
    });
    

});



app.get('/delete-contact/:phone', function(req,res){
    console.log(req.params);
    let phone = req.params.phone;

});



 



app.get('/practise', function(req,res){
    return res.render('practise', {
        title:"Let's Play!"
    });
});



app.listen(port, function(err){
    if(err)
    {
        console.log("error in running the server:",err);
    }
    console.log("My Express server is running on port: ",port);
});