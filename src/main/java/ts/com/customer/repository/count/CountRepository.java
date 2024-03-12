package ts.com.customer.repository.count;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import ts.com.customer.entity.count.Count;

@Service
public interface CountRepository extends CrudRepository <Count, Integer>{

}
