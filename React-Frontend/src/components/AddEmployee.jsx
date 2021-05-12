import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';

class AddEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName : '',
            lastName : '',
            email:''
          
        };
        this.changeFirstNameHandler =this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler =this.changeLastNameHandler.bind(this);
        this.changeEmailHandler =this.changeEmailHandler.bind(this);
        this.saveorUpdateEmployee = this.saveorUpdateEmployee.bind(this);

    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeServices.getEmployeeById(this.state.id).then((res) =>{
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email
                });
            });

        }

    }
    saveorUpdateEmployee = (e) => {
        let emp = {firstName :this.state.firstName,lastName :this.state.lastName,email :this.state.email};
        console.log("emp "+JSON.stringify(emp));
        if(this.state.id === '_add'){
            EmployeeServices.createEmployee(emp).then(res => {
                alert("saved");
                this.props.history.push('/employees')
                console.log("after")
            });
        }else{
            EmployeeServices.updateEmployee(emp,this.state.id).then(res => {
                this.context.history.push('/');
            })
        }
       
    }
    changeFirstNameHandler = (event) =>{
        this.setState({firstName : event.target.value})
    }
    changeLastNameHandler = (event) =>{
        this.setState({lastName : event.target.value})
    }
    changeEmailHandler = (event) =>{
        this.setState({email : event.target.value})
    }
    
    cancel(){
        this.props.history.push('/employees')
    }
    getTitle(){
        if(this.state.id === '_add'){
            return  <h3 className="text-center">Add Employee</h3> 
        }else{
            return <h3 className="text-center">update Employee</h3>
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {this.getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="first Name" name="firstName" className="form-control"
                                     value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="last Name" name="lastName" className="form-control"
                                     value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input placeholder="email" name="email" className="form-control"
                                     value={this.state.email} onChange={this.changeEmailHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.saveorUpdateEmployee}>save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft :"10px"}}>cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AddEmployee;