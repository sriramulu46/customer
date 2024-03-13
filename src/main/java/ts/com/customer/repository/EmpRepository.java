package ts.com.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ts.com.customer.entity.Employee;

public interface EmpRepository extends JpaRepository<Employee, Integer> {

}
