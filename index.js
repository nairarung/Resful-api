const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

//parse application/json
app.use(bodyParser.json());

//create database connection 

const conn = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password:"password",
    insecureAuth : true,
    database:"nairarun"
});

//connect to database
conn.connect((err) => {
    if(err) throw  err;
    console.log('MySQL connected....');
});

//show all tasks

app.get('/api/tasks',(req,res) => {
 let sql = "select * from GAMEPLAN";
 let query = conn.query(sql,(err,result) => {
    if(err) throw err;
    res.send(JSON.stringify({"status":200,"error":null,"response":result}));

  });
});

//show single task by taskid
app.get('/api/tasks/:tskid',(req,res) => {
    let sql = "select * from GAMEPLAN where TSK_id=" + req.params.tskid;
    let query = conn.query(sql,(err,result) => {
       if(err) throw err;
       res.send(JSON.stringify({"status":200,"error":null,"response":result}));
   
     });
   });

   //add new task 
   app.post('/api/tasks',(req, res) => {
    let data = {TSK_name: req.body.TSK_name, TSK_desc: req.body.TSK_desc,TSK_owner: req.body.TSK_owner,TSK_frm: req.body.TSK_frm,TSK_to: req.body.TSK_to};
    let sql = "INSERT INTO GAMEPLAN  SET ?";
    let query = conn.query(sql, data,(err, result) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": result}));
    });
  });

  //update the task
app.put('/api/tasks/:tskid',(req,res) => {
    let sql = "UPDATE GAMEPLAN SET TSK_name='" + req.body.TSK_name +"', TSK_desc='"+req.body.TSK_desc+
               "', TSK_owner='" + req.body.TSK_owner+"', TSK_frm='"+req.body.TSK_frm+ "', TSK_to='"+req.body.TSK_to+  
               "' where TSK_id=" + req.params.tskid;
    let query = conn.query(sql,(err,result) => {
       if(err) throw err;
       res.send(JSON.stringify({"status":200,"error":null,"response":result}));
   
     });
   });

  //Delete the task
app.delete('/api/tasks/:tskid',(req,res) => {
    let sql = "DELETE FROM GAMEPLAN where TSK_id=" + req.params.tskid;
    let query = conn.query(sql,(err,result) => {
       if(err) throw err;
       res.send(JSON.stringify({"status":200,"error":null,"response":result}));
   
     });
   });

   //Server Listening
   app.listen(3000,() => {
       console.log('Server Listening on port 3000....');
   });