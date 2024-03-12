package ts.com.customer.entity.count;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cou")
public class Count {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "Instance_Count")
	private int Instance_Count;

	@Column(name = "Monthly_Efforts")
	private int Monthly_Efforts;

	@Column(name = "FTE_Count")
	private int FTE_Count;

	@Column(name = "Rate_Card")
	private int Rate_Card;




	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getInstance_Count() {
		return Instance_Count;
	}
	public void setInstance_Count(int instance_Count) {
		Instance_Count = instance_Count;
	}
	public int getMonthly_Efforts() {
		return Monthly_Efforts;
	}
	public void setMonthly_Efforts(int monthly_Efforts) {
		Monthly_Efforts = monthly_Efforts;
	}
	public int getFTE_Count() {
		return FTE_Count;
	}
	public void setFTE_Count(int fTE_Count) {
		FTE_Count = fTE_Count;
	}
	public int getRate_Card() {
		return Rate_Card;
	}
	public void setRate_Card(int rate_Card) {
		Rate_Card = rate_Card;
	}
	@Override
	public String toString() {
		return "Count [id=" + id + ", Instance_Count=" + Instance_Count + ", Monthly_Efforts=" + Monthly_Efforts
				+ ", FTE_Count=" + FTE_Count + ", Rate_Card=" + Rate_Card + "]";
	}
	
	
	



}
