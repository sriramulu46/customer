package ts.com.customer.service.emp;

import java.util.List;

import org.springframework.stereotype.Service;

import ts.com.customer.entity.emp.Employee;

@Service
public interface EmpService {

	public Employee saveEmp(Employee emp);

	public List<Employee> getAllEmp();

	public Employee getEmpById(int id);

	public boolean deleteEmp(int id);

}
