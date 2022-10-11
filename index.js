// Write your solution in this file!
const employee={
name:"Nikan",
streetAddress:"6923 e. magdalena dr."
}

function updateEmployeeWithKeyAndValue(employee,key,value)
{
    const newObj= {...employee}
    newObj[key]=value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)
{
    const newObj=employee;
    newObj[key]=value;
    return newObj;
}
function deleteFromEmployeeByKey(employee,key)
{
    const newObj={...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee,key)
{
    delete employee[key]
    return employee;
}