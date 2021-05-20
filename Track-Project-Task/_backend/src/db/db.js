

const mongoose=require('mongoose');
const dataBaseName="Tracker"
const connectionURL=`mongodb://127.0.0.1:27017/${dataBaseName}`;
mongoose.connect(connectionURL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}).then((connection)=>{

    console.log("Connection Established Successfully "+connection)
}).catch((err)=>{
    console.log("xxxxxxxxxxxxxxxxxx Failed to Establish DataBase Connection xxxxxxxxxxxxxxx "+err)
})