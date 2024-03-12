package ts.com.customer.service.count;

import java.util.List;

import org.springframework.stereotype.Service;

import ts.com.customer.entity.count.Count;

@Service
public interface CountService {

	public Count saveCount(Count count);

	public List<Count> getAllCount();
	

	public Count getCountById(int id);

	public boolean deleteCount(int id);

	


}
