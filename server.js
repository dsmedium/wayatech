const express = require('express');
const app = express();
const path = require("path");
const sendMail = require('./mail.js')
const port = process.env.PORT;


// Data Parsing
app.use(express.urlencoded({
    extended : false
}));
app.use(express.json());
app.use(express.static('public'))


app.post('/em',(req,res)=>{
    const {subject,email,text} = req.body;
    sendMail(email,subject,text,(err,data)=>{
        if(err){
            res.status(500).json({message: 'internal error'})

        }
        else{
            res.json({message:'Email sent'})
        }
    })

});
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname ,'views','index.html'))
});
app.listen(PORT,()=>{
    console.log('listening at port',PORT)
});
