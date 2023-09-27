const express=require("express")
// const {ArticlesModel}=require("../model/Articles.model")
const {Employeepost}=require("../CONTROLLER/employee.add")
const {EmployeeGet}=require("../CONTROLLER/employee.get")
const {EmployeePatch}=require("../CONTROLLER/employee.patch")
const {EmployeeDelete}=require("../CONTROLLER/employee.delete")

const EmployeeRouter=express.Router()

EmployeeRouter.post("/add",Employeepost)



EmployeeRouter.get("/get",EmployeeGet)



EmployeeRouter.patch("/patch/:id",EmployeePatch)


EmployeeRouter.delete("/delete/:id",EmployeeDelete)


module.exports={
    EmployeeRouter
}