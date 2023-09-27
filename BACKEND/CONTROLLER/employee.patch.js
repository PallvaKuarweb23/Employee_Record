const {EmployeeModel}=require("../MODEL/employee.mod")

async function EmployeePatch(req,res){
    try{
    const id=req.params.id;
    const updateemployee=await EmployeeModel.findByIdAndUpdate(
        id,
        req.body,
        {new:true}
    );
    res.status(200).send(updateemployee);
    }catch(err){
        res.status(200).send({"msg":err.message})
    }
    }

    module.exports={
        EmployeePatch
    }