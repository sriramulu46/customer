
package ts.com.customer.controller.count;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ts.com.customer.entity.count.Count;
import ts.com.customer.entity.emp.Employee;
import ts.com.customer.repository.count.CountRepository;
import ts.com.customer.service.count.CountService;

@Controller
public class CountController {

	private final CountService countService;
	private final CountRepository countRep;

	@Autowired
	public CountController(CountService countService, CountRepository countRepository) {
		this.countService = countService;
		this.countRep = countRepository; // Initialize countRep here
	}

	/*
	 * @Autowired public CountController(CountService countService, CountRepository
	 * countRepository) { this.countService = countService; this.countRepository =
	 * countRepository; }
	 */

	private Count count;

	@GetMapping("/countlist")
	public String index(Model model) {
		List<Count> countListall = countService.getAllCount();
		model.addAttribute("countListall", countListall);
		return "index";
	}

	//after posting mapping return/countlist: 68 & 38 retun indexpage(42)
	@PostMapping("/countpost")
	public String submitcount(@RequestParam("Instance_Count") int Instance_Count,
			@RequestParam("Monthly_Efforts") int Monthly_Efforts, @RequestParam("FTE_Count") int FTE_Count,
			@RequestParam("Rate_Card") int Rate_Card, Model cou) {

		cou.addAttribute("success", "datasuccssfull");

		System.out.println("submitting valus" + Instance_Count);
		System.out.println("submitting valus" + Monthly_Efforts);
		System.out.println("submitting valus" + FTE_Count);
		System.out.println("submitting valus" + Rate_Card);
		System.out.println("please find the value cou:" + cou);

//		Count newEmp = count.submitcount(Count );
		Count count = new Count();
		count.setInstance_Count(Instance_Count);
		count.setMonthly_Efforts(Monthly_Efforts);
		count.setFTE_Count(FTE_Count);
		count.setRate_Card(Rate_Card);

		countRep.save(count);
//		System.out.println("Save the values: " + saveCount());
		return "redirect:/countlist";
	}

//it will open Ccount.html page return to post mapping line: 45
	@GetMapping("/savecount")
	public String saveCount() {
		return "count";
	}
	
	
	/*
	 * @GetMapping("/all") public String index(Model m) { if (countService != null)
	 * { List<Count> list = countService.getAllCount(); m.addAttribute("List",
	 * list); System.out.println("Count list" + list); } else {
	 * 
	 * System.err.println("countService is null. Cannot retrieve count list."); }
	 * return "index";
	 * 
	 * }
	 */

	/*
	 * @GetMapping("/enter") public String greeting(
	 * 
	 * @RequestParam(name = "name", required = false, defaultValue =
	 * "Welcome to count controller") String name, Model model) {
	 * model.addAttribute("name", name); return "count"; }
	 */

}
