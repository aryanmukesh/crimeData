const express = require('express');
const path = require('path');

const port= 8001; 

const db = require('./config/mongoose');
const Report = require('./models/reports');

const app = express();


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views')); 
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function(req,res){
    
    return res.render('home',{
        title: "Home Page"
    });
    
});

app.get('/form',function(req,res){
    return res.render('form');
});

app.get('/map_aggravated_assault',function(req,res){
    return res.render('map_aggravated_assault');
});
app.get('/map_larceny',function(req,res){
    return res.render('map_larceny');
});
app.get('/map_vandalism',function(req,res){
    return res.render('map_vandalism');
});
app.get('/map_Residential_Burglary',function(req,res){
    return res.render('map_Residential_Burglary');
});
app.get('/map_auto_theft',function(req,res){
    return res.render('map_auto_theft');
});
app.get('/map_motor_vehicle',function(req,res){
    return res.render('map_motor_vehicle');
});
app.get('/map_robbery',function(req,res){
    return res.render('map_robbery');
});
app.get('/map_harassment',function(req,res){
    return res.render('map_harassment');
});
app.get('/map_verbal_disputes',function(req,res){
    return res.render('map_verbal_disputes');
});
app.get('/map_homicide',function(req,res){
    return res.render('map_homicide');
});





app.post('/report-complain', function(req,res){
    
    Report.create({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        offence: req.body.offence,
        desc: req.body.desc,
        date:req.body.date,
        time: req.body.time,
        long:req.body.long,
        lat:req.body.lat
    }, function(err, newReport){
        if(err){console.log('error in creating report!');
            return; }
    
        console.log("********",newReport);
        return res.redirect('/');
    });
    
});



app.listen(port, function(err){
    if(err){
        console.log("error in running the Server: ",err);
    }
    console.log("My Major Project is running on port: ",port);

});