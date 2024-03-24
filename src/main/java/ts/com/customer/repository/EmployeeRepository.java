package ts.com.customer.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import ts.com.customer.model.Employee;

public interface EmployeeRepository  extends JpaRepository  <Employee  ,  Long>{
	List<Employee> findAll(Sort sort);
}
