package in.ineuron.shifat.dao;

import org.springframework.data.repository.CrudRepository;

import in.ineuron.shifat.model.Employee;

public interface IEmployeeRepository extends CrudRepository<Employee, Integer> {

}
