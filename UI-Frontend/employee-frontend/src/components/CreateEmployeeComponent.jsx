import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postEmployee } from "../services/EmployeeService";

const CreateEmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const changeFirstNameHandler = (event) => {
    setEmployee({ ...employee, firstName: event.target.value });
  };
  const changeLastNameHandler = (event) => {
    setEmployee({ ...employee, lastName: event.target.value });
  };
  const changeEmailIdHandler = (event) => {
    setEmployee({ ...employee, emailId: event.target.value });
  };

  const saveOrUpdateEmployee = (event) => {
    // to keep the data on the console or else it will vanish
    event.preventDefault();
    console.log("employee" + JSON.stringify(employee));
    // Actual code which will call the services from the backend and redirect to main page
    postEmployee(employee).then((res) => {
      navigate("/");
    });
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={employee.emailId}
                    onChange={changeEmailIdHandler}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
