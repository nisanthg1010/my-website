const express=require('express');
const app=express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
console.log('Hello World');
//res.send((500),'Error occurred');
 

// res.json({express:'Hello World'});

//res.render('index.ejs',{text:"NG"});

res.send("Nisanth");

});
const userRoute=require('./routes/user')
app.use('/user',userRoute);
app.listen(4000); 