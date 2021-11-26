//file 5 for delete single/multiple record
//import dbConnect fn.
const dbConnect=require('./mongodb')

const deleteData=async()=>{
    let data=await dbConnect()
    let result =await data.deleteMany({brand:'MIUI'})
    //delete({brand:'MIUI 6'})
console.log(result);
}

deleteData();//fn.calling

// for cmd >node delete /delete.js