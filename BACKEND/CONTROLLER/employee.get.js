const {EmployeeModel}=require("../MODEL/employee.mod")





async function EmployeeGet(req,res){
    try{
    const employee=await EmployeeModel.find();
    res.status(200).send(employee)
    }catch(err){
        res.status(200).send({"msg":err.message})
    }
    }

    module.exports={
        EmployeeGet
    }