// Create node project:
// Initiate npm
// Install express

// In it we want to create simple endpoint which will get a query param called number
// And whatever the number is you have to return a message as following
// You have to return space separated numbers
// But if the number is divisible by 3 put Fiz in pace of it
// If the number is divisible by 5 put Buz in pace of it
// If number is divisible by both put FixBuz in pace of it
// Else put the number it self
// For example if we get request /task-1?number=20, we'll return..

// `1 2 Fiz 4 Buz Fiz 7 8 Fiz Buz 11 Fiz 13 14 FizBuz 16 17 Fiz 19 Buz`
const express = require('express');
const app = express();

app.get("/task-1",(req,res)=>{
        const num = parseInt(req.query.number);  
        const data = [];
        for(let i=1; i<=num; i++){
            if(i % 3 == 0 && i % 5 == 0){
                data.push('FizBuz')
            }else if(i % 3 == 0){
                data.push('Fiz')
            }else if(i % 5 == 0 ){
                data.push('Buz')
            }else{
                data.push(i.toString())
            }
        }
        res.send(data.join(' '))
})

app.listen(3000,(err)=>{
    if (err) {
        console.log("Server Not Started");
    }else{
        console.log("Server Started on port 3000");
    }
})