const {EmployeeModel}=require("../MODEL/employee.mod")

async function EmployeeDelete(req,res){
    try{
    const id=req.params.id;
    await EmployeeModel.findByIdAndDelete(id);
    res.status(200).send({"msg":"Deletes a specific employee"})
    
    
    }catch(err){
        res.status(400).send({"msg":err.message})
    
    }
    }

    module.exports={
        EmployeeDelete
    }