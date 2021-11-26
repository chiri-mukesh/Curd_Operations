//file 4  for update data.
//import dbConnect fn.
const dbConnect=require('./mongodb');

const updateData=async()=>{
    let data = await dbConnect();//fn. call
    //for single update -->updateOne({})
    //for multiple update --> updateMany([{},{}...])
let result=await data.updateOne(
    {name:'Max 5'},{
        $set:{name:'Max pro 6',price:550}
    }
);
console.log(result);
}

updateData();//fn call
