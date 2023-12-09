package in.ineuron.shifat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ineuron.shifat.dao.IEmployeeRepository;
import in.ineuron.shifat.exception.EmployeeNotFoundException;
import in.ineuron.shifat.model.Employee;

@Service
public class EmployeeServiceImpl implements IEmployeeService {

	@Autowired
	private IEmployeeRepository repository;

	@Override
	public List<Employee> findAllEmployees() {
		Iterable<Employee> employees = repository.findAll();
		return ((List<Employee>) employees);
	}

	@Override
	public Employee saveEmployee(Employee employee) {
		Employee savedEmployee = repository.save(employee);
		return savedEmployee;
	}

	@Override
	public Employee findEmployeeById(Integer id) {
		// another way is to do with optional using if else
		Employee employee = repository.findById(id)
				.orElseThrow(() -> new EmployeeNotFoundException("Record not found with id: " + id));

		return employee;
	}

	@Override
	public void deleteEmployee(Integer id) {
		Employee employee = repository.findById(id)
				.orElseThrow(() -> new EmployeeNotFoundException("Record not found with id: " + id));
		if (employee != null)
			repository.delete(employee);

	}

}
