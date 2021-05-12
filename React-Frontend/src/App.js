import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
        <Router>
          <div>
            <HeaderComponent/>
            <div className="container">  
              <Switch>
                <Route path="/" exact component={EmployeeList}></Route>
                <Route path="/employees" exact component={EmployeeList}></Route>
                <Route path="/addEmployee/:id" component={AddEmployee}></Route>
                <Route path="/viewEmployee/:id" component={ViewEmployee}></Route>

                {/* <Route path="/updateEmployee/:id" component={AddEmployee}></Route> */}
              </Switch>   
            </div>
            <FooterComponent/>
          </div>
          
        </Router>
      
    </div>
    
  );
}

export default App;
