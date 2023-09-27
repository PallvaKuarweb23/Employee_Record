const mongoose=require("mongoose")

const EmployeeSchema=mongoose.Schema({
    name:{type:String,required:true},
    work:{type:String,required:true},
    discription:{type:String,required:true},
    userID:{type:String,required:true},
   
    
    
})

const EmployeeModel=mongoose.model("article",EmployeeSchema)

module.exports={
    EmployeeModel
}