const dbConnect=require('./mongodb')
const mongodb=require('mongodb')
// const main=require('./index')
const express=require('express');
const app=express();

/***********post api********* */
//for use post api-->app.use(express.json())
//post->use both req&resp and insert(req.body):=> use for insert data 
app.use(express.json())
app.post('/',async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.insert(req.body);
    resp.send(result);
})
/*********put api********** */
//also use put api->app.use(express.json())
 //put('/')-> for use {name:req.body.name} for body pass data
 //put('/:any')->ex. put('/:name')-->use for {name:req.params.name}-->for data pass throuh params
app.put("/:name",async (req,resp)=>{
    let data =await dbConnect();
    let result= data.updateOne(
        // {name:req.body.name},
         {name:req.params.name},
        {$set:req.body}
        )
        resp.send({result:"update"})
})

/*********delete api************ */
app.delete("/:id",async (req,resp)=>{
    // console.log(req.params.id);
    let data=await dbConnect();
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result);
})

//******get api****** */
app.get('',async (req,resp)=>{
    // resp.send(main)
    let data=await dbConnect();
    data=await data.find().toArray();
    //console.log(data);
    resp.send(data)
})

app.listen(5000);