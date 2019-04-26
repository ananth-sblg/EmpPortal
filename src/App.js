import React from 'react';
import EmployeeList from './components/employee/employeeList';
import EmployeeDetails from './components/employee/employeeDetails';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/navbar';
import SignIn from './components/layouts/signIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/employees" component={EmployeeList} />
            <Route path="/employee/:id" component={EmployeeDetails} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
