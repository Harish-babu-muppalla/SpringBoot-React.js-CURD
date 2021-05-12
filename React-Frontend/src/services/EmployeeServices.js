import axios from 'axios';
const Employee_API_URL_employess = "http://localhost:8080/api/v1/employees"
class EmployeeServices{
    getEmployees(){
        return axios.get(Employee_API_URL_employess);
    }
    createEmployee(employee){
        return axios.post(Employee_API_URL_employess, employee);
    }

    getEmployeeById(empId){
        return axios.get(Employee_API_URL_employess + '/'+empId);
    }

    updateEmployee(employee,empid){
        return axios.put(Employee_API_URL_employess+ '/'+empid,employee);
    }
    deleteEmployee(empid){
        return axios.delete(Employee_API_URL_employess+ '/'+empid);
    }
}

export default new EmployeeServices()