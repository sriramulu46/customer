package ts.com.customer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ts.com.customer.exception.ResourceNotFoundException;
import ts.com.customer.model.Employee;
import ts.com.customer.repository.EmployeeRepository;

@RestController

@CrossOrigin("http://localhost:3000")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping("/employees")
	List<Employee> getAllUser() {
		System.out.println("Get Method ");
//		return employeeRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
		return employeeRepository.findAll();
	}

	//

	@PostMapping("/newemployee")
	Employee newemployee(@RequestBody Employee newemployee) {
		System.out.println("New Employeee add");
		System.out.println(newemployee.toString());
		return employeeRepository.save(newemployee);
//		return null;
	}

	@PutMapping("/employees/{id}") // Updated path to match frontend request URL
	Employee updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
		return employeeRepository.findById(id).map(employee -> {
			employee.setCustomer_Name(updatedEmployee.getCustomer_Name());
			employee.setEmp_Name(updatedEmployee.getEmp_Name());
			employee.setRole_Maturity(updatedEmployee.getRole_Maturity());
			employee.setSkill_Profile(updatedEmployee.getSkill_Profile());
			employee.setBill_Rate(updatedEmployee.getBill_Rate());
			employee.setDB_Estimate(updatedEmployee.getDB_Estimate());
			employee.setG_Level(updatedEmployee.getG_Level());
			employee.setInstance_Count(updatedEmployee.getInstance_Count());
			employee.setMonthly_Efforts(updatedEmployee.getMonthly_Efforts());
			employee.setFtecount(updatedEmployee.getFtecount());
			employee.setRate_Card(updatedEmployee.getRate_Card());
			employee.setEfforts(updatedEmployee.getEfforts());
			employee.setEfforts_Hrs(updatedEmployee.getEfforts_Hrs());
			employee.setSDE(updatedEmployee.getSDE());
			employee.setEfforts_Pending(updatedEmployee.getEfforts_Pending());
			System.out.println("Put method working" +updatedEmployee);
			return employeeRepository.save(employee);
		}).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id));
		
	}

	@GetMapping("/employees/{id}")
	Employee getEmployeeById(@PathVariable Long id) {
		System.out.println("get mapping id");
		return employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id));
	}

	@DeleteMapping("/employee/{id}")
	void deleteEmployee(@PathVariable Long id) {
		employeeRepository.deleteById(id);
	}

}
