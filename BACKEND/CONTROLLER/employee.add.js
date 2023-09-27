const { EmployeeModel } = require("../MODEL/employee.mod");


async function Employeepost(req, res) {
    try {
        const { name, work, discription, userID } = req.body;

        // Check if any of the required fields are blank
        if (!name || !work || !discription || !userID === undefined) {
            return res.status(400).json({ "msg": "All fields are required." });
        }

        const employee = new EmployeeModel({
            name,
            work,
            discription,
            userID,
            
        });

        await employee.save();

        res.status(200).json({ "msg": "Employee is added", employee });
    } catch (err) {
        res.status(401).json({ "msg": err.message });
    }
}

module.exports = {
    Employeepost
};
