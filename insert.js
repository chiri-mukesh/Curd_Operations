//file 3 for insert data

//import fn. (dbConnect)
const dbConnect = require("./mongodb");


const insert = async () => {
  const db = await dbConnect(); //promise handle use async &await
  const result = await db.insert(
    //{}->insert single data in obj. use{}
    //[{}]->insert multiple data using [{}]
    [
    { name: "note 5", brand: "vivo", price: 320, category: "mobile" },
     { name: "9i", brand: "MIUI", price: 920, category: "mobile" },
     { name: "poco m2", brand: "MIUI", price: 800, category: "mobile" },
     { name: "poco m3", brand: "MIUI", price: 700, category: "mobile" },

    { name: "Max 5", brand: "Micromax", price: 420, category: "mobile" },
]
);

//no need cond. only use for checking
if( result.acknowledged) {//cond. for--->check data inserted or not.
  //acknowleged internally used in node.
  console.log("data inserted");
}

};//insert fn.

insert();//fn. calling

//data iserted use in cmd >node insert.js
