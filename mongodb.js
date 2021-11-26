//file 2
// export dbConnect fn.//common for all api.
const {MongoClient} =require('mongodb');
const url='mongodb://localhost:27017';

const databaseName='e-comm'
const client=new MongoClient(url);

 const dbConnect=async()=>{
 let result=await client.connect();
 db=result.db(databaseName);
 return db.collection('products')
}        //---(OR)----//

// async function dbConnect(){
//     let result=await client.connect();
//     db=result.db(databaseName);
//     return db.collection('products')
// }

module.exports  =dbConnect; //export dbConnect fn.








