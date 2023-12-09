package in.ineuron.shifat.service;

import java.util.List;

import in.ineuron.shifat.model.Employee;

public interface IEmployeeService {

	public List<Employee> findAllEmployees();
	public Employee saveEmployee(Employee employee);
	public Employee findEmployeeById(Integer id);
	public void deleteEmployee(Integer id);
}
