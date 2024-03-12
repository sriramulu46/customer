package ts.com.customer.service.count;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ts.com.customer.entity.count.Count;
import ts.com.customer.repository.count.CountRepository;

@Service
public class CountServiceImpl implements CountService{
	
	
	@Autowired
	public CountServiceImpl (CountRepository countRep) {
		super();
		System.out.println("Count Rep:= "+this.countRep );
		this.countRep = countRep;
		
	}

	private CountRepository countRep;

	@Override
	public Count saveCount(Count count) {
		Count newCount = countRep.save(null);
		return newCount;
	}

	@Override
	public List<Count> getAllCount() {
	 System.out.println("CountService" +countRep);
	 System.out.println("Find all count"+countRep);
		return (List<Count>) countRep.findAll();
	}

	@Override
	public Count getCountById(int count) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteCount(int count) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Count> findAll() {
		return (List<Count>) countRep.findAll();
	}

	
	


}
