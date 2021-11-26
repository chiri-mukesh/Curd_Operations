// file 1
//import dbConnect fn.
const dbConnect=require('./mongodb')
// console.log(dbConnect);

const main= async (req,resp)=>{
    let data=await dbConnect();//fn. call
    data=await data.find().toArray()//await use for handle promise
    console.log(data);
}

main();//fn. calling