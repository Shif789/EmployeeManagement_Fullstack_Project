package in.ineuron.shifat.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ineuron.shifat.model.Employee;
import in.ineuron.shifat.service.IEmployeeService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	private IEmployeeService service;

	// GET All Employees :: http://localhost:9999/api/v1/allEmployees
	@GetMapping(value = "/allEmployees")
	public ResponseEntity<List<Employee>> getAllEmployees() {
		List<Employee> allEmployees = service.findAllEmployees();
		ResponseEntity<List<Employee>> responseEntity = new ResponseEntity<>(allEmployees, HttpStatus.OK);
		return responseEntity;
	}

	// SAVE Employee :: http://localhost:9999/api/v1/addEmployee
	@PostMapping(value = "/addEmployee")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {

		Employee savedEmployee = service.saveEmployee(employee);
		ResponseEntity<Employee> responseEntity = new ResponseEntity<>(savedEmployee, HttpStatus.OK);
		return responseEntity;
	}

	// GET Employee based on id :: http://localhost:9999/api/v1/employee/{id}
	@GetMapping(value = "/employee/{id}")
	public ResponseEntity<?> getEmployeeById(@PathVariable Integer id) {
		Employee employee = service.findEmployeeById(id);
		ResponseEntity<Employee> responseEntity = new ResponseEntity<>(employee, HttpStatus.OK);
		return responseEntity;
	}

	// UPDATE Employee based on id :: http://localhost:9999/api/v1/employee/{id}
	@PutMapping(value = "/employee/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable Integer id, @RequestBody Employee employee) {
		Employee employeeById = service.findEmployeeById(id);

		employeeById.setFirstName(employee.getFirstName());
		employeeById.setLastName(employee.getLastName());
		employeeById.setEmailId(employee.getEmailId());

		Employee updatedEmployee = service.saveEmployee(employeeById);
		ResponseEntity<Employee> responseEntity = new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
		return responseEntity;
	}

	// DELETE Employee based on id :: http://localhost:9999/api/v1/employee/{id}
	@DeleteMapping(value = "/employee/{id}")
	public ResponseEntity<?> removeEmployee(@PathVariable Integer id) {
		service.deleteEmployee(id);

		Map<String, Boolean> map = new HashMap<>();
		map.put("deleted", Boolean.TRUE);
		
		ResponseEntity<Map<String, Boolean>> responseEntity = new ResponseEntity<>(map, HttpStatus.OK);
		return responseEntity;
	}
}
