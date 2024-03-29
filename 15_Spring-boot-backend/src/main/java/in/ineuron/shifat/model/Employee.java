package in.ineuron.shifat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Table(name = "EMPLOYEES_BACKEND")
@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NonNull
	private String firstName;
	
	@NonNull
	private String lastName;
	
	@NonNull
	private String emailId;
	
}
