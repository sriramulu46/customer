package ts.com.customer.repository.emp;

import org.springframework.data.jpa.repository.JpaRepository;

import ts.com.customer.entity.emp.Employee;

public interface EmpRepository extends JpaRepository<Employee, Integer> {

}
