import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";

const UpdateEmployeeComponent = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        // calling the backend api for fetching the employee data with id
        const response = await getEmployeeById(id);
        setEmployee({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          emailId: response.data.emailId,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmployee();
  }, [id]);

  /*
  const changeFirstNameHandler = (event) => {
    setEmployee({ ...employee, firstName: event.target.value });
  };
  const changeLastNameHandler = (event) => {
    setEmployee({ ...employee, lastName: event.target.value });
  };
  const changeEmailIdHandler = (event) => {
    setEmployee({ ...employee, emailId: event.target.value });
  };
*/
  const changeHandler = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };
  const saveOrUpdateEmployee = async (event) => {
    // to keep the data on the console or else it will vanish
    event.preventDefault();
    console.log("employee" + JSON.stringify(employee));
    // Actual code which will call the services from the backend and redirect to main page
    await updateEmployee(id, employee);
    navigate("/");
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
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={employee.emailId}
                    onChange={changeHandler}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                >
                  Update
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

export default UpdateEmployeeComponent;
