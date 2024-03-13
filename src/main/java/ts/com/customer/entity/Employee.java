package ts.com.customer.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String Emp_Name;

	private String Role_Maturity;

	private String Skill_Profile;

	private int Bill_Rate;

	private int DB_Estimate;

	private String G_Level;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmp_Name() {
		return Emp_Name;
	}

	public void setEmp_Name(String emp_Name) {
		Emp_Name = emp_Name;
	}

	public String getRole_Maturity() {
		return Role_Maturity;
	}

	public void setRole_Maturity(String role_Maturity) {
		Role_Maturity = role_Maturity;
	}

	public String getSkill_Profile() {
		return Skill_Profile;
	}

	public void setSkill_Profile(String skill_Profile) {
		Skill_Profile = skill_Profile;
	}

	public int getBill_Rate() {
		return Bill_Rate;
	}

	public void setBill_Rate(int bill_Rate) {
		Bill_Rate = bill_Rate;
	}

	public int getDB_Estimate() {
		return DB_Estimate;
	}

	public void setDB_Estimate(int dB_Estimate) {
		DB_Estimate = dB_Estimate;
	}

	public String getG_Level() {
		return G_Level;
	}

	public void setG_Level(String g_Level) {
		G_Level = g_Level;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", Emp_Name=" + Emp_Name + ", Role_Maturity=" + Role_Maturity + ", Skill_Profile="
				+ Skill_Profile + ", Bill_Rate=" + Bill_Rate + ", DB_Estimate=" + DB_Estimate + ", G_Level=" + G_Level
				+ "]";
	}

}
