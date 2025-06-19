import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>Employee Management System</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default App;
