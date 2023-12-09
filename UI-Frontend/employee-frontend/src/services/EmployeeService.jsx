import axios from "axios";

const EMP_BASE_URL = "http://localhost:9999/api/v1/allEmployees";
const EMP_ADD_URL = "http://localhost:9999/api/v1/addEmployee";
const EMP_GET_BY_ID_URL = "http://localhost:9999/api/v1/employee/";

export const getEmployees = () => {
  return axios.get(EMP_BASE_URL);
};
export const postEmployee = (emp) => {
  return axios.post(EMP_ADD_URL, emp);
};
export const getEmployeeById = (id) => {
  return axios.get(EMP_GET_BY_ID_URL + id);
};
export const updateEmployee = (id, employee) => {
  return axios.put(EMP_GET_BY_ID_URL + id, employee);
};
export const deleteEmployee = (id) => {
  return axios.delete(EMP_GET_BY_ID_URL + id);
};
