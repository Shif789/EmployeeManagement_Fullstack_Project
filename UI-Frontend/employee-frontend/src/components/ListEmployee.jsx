import React, { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    // Calling api from backend to get the data of employee
    getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const navigate = useNavigate();

  // method to call create employee component
  const addEmployee = () => {
    navigate("/add-employee");
  };

  // method to call update employee component
  const updateEmployee = (id) => {
    console.log(id);
    navigate(`/update-employee/${id}`);
  };

  return (
    <div className="m-4">
      <h3 className="text-center">Employee List</h3>
      <div className="row">
        <button className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <br />

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    updateEmployee(employee.id);
                  }}
                >
                  UPDATE
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    const id = employee.id;
                    // Calling api from backend to delete the data of employee
                    deleteEmployee(id);
                    //display the same page with record not matching with the given id
                    setEmployees(
                      employees.filter((employee) => employee.id !== id)
                    );
                  }}
                >
                  DELETE
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
