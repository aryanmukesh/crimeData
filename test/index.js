const spawn = require('child_process').spawn; 

const process = spawn('python',['./hello.py', 'Xen','Aryan']);

process.stdout.on('data',data =>{
    console.log(data.toString());
});