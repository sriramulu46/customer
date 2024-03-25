package ts.com.customer.model;


import java.text.DecimalFormat;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import jakarta.persistence.*;

@Entity
@Table (name = "emp")
@JsonPropertyOrder({"id", "customer_Name", "emp_Name", "role_Maturity", "skill_Profile", "bill_Rate", "db_Estimate", "g_Level"
					,"instance_Count", "monthly_Efforts", "ftecount", "rate_Card",
					"efforts", "efforts_Hrs", "rate_Ero", "sDE", "efforts_Pending"})
public class Employee {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_Name")
	private String Customer_Name;

	@Column(name = "emp_Name")
	private String Emp_Name;

	@Column(name = "role_Maturity")
	private String Role_Maturity;

	@Column(name = "skill_Profile")
	private String Skill_Profile;

	

	@Column(name = "bill_Rate")
	private int Bill_Rate;

	@Column(name = "DB_Estimate")
	private double DB_Estimate;

	@Column(name = "g_Level")
	private String G_Level;
	
	
	
	
	
	@Column(name = "instance_Count")
	private Integer Instance_Count;
	
	@Column(name = "monthly_Efforts")
	private Integer Monthly_Efforts;
	
	
	@Column(name = "ftecount")
	private Double ftecount;
	
	
	
	@Column(name = "rate_Card")
	private Integer Rate_Card;
	
	@Column(name = "efforts")
	private Double Efforts;
	
	@Column(name = "efforts_Hrs")
	private Double Efforts_Hrs;
	
	@Column(name = "rate_Ero")
	private Double Rate_Ero;
	
	@Column(name = "sDE")
	private Double SDE;
	
	@Column(name = "efforts_Pending")
	private Double Efforts_Pending;
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCustomer_Name() {
		return Customer_Name;
	}
	public void setCustomer_Name(String customer_Name) {
		Customer_Name = customer_Name;
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
	public double getDB_Estimate() {
		return DB_Estimate;
	}
	public void setDB_Estimate(double dB_Estimate) {
		DB_Estimate = dB_Estimate;
	}
	public String getG_Level() {
		return G_Level;
	}
	public void setG_Level(String g_Level) {
		G_Level = g_Level;
	}
	public Integer getInstance_Count() {
		return Instance_Count;
	}
	public void setInstance_Count(Integer instance_Count) {
		Instance_Count = instance_Count;
	}
	public Integer getMonthly_Efforts() {
		return Monthly_Efforts;
	}
	public void setMonthly_Efforts(Integer monthly_Efforts) {
		Monthly_Efforts = monthly_Efforts;
	}
	
	
	public Double getFtecount() {
		return ftecount;
	}
	public void setFtecount(Double ftecount) {
		this.ftecount = ftecount;
	}
	
	
	public Integer getRate_Card() {
		return Rate_Card;
	}
	public void setRate_Card(Integer rate_Card) {
		Rate_Card = rate_Card;
	}
	public Double getEfforts() {
		return Efforts;
	}
	public void setEfforts(Double efforts) {
		DecimalFormat df = new DecimalFormat("#.##");
		this.Efforts = Double.valueOf(df.format(efforts));
	}
	public Double getEfforts_Hrs() {
		return Efforts_Hrs;
	}
	public void setEfforts_Hrs(Double efforts_Hrs) {
		DecimalFormat effortsHrs = new DecimalFormat("#.##");
		this.Efforts_Hrs = Double.valueOf(effortsHrs.format(efforts_Hrs));
	}
	public Double getRate_Ero() {
		return Rate_Ero;
	}
	public void setRate_Ero(Double rate_Ero) {
		DecimalFormat rateero = new DecimalFormat("#.##");
		this.Rate_Ero = Double.valueOf(rateero.format(rate_Ero));
	}
	public Double getSDE() {
		return SDE;
	}
	public void setSDE(Double sDE) {
		DecimalFormat sde = new DecimalFormat("#.##");
		this.SDE = Double.valueOf(sde.format(sDE));
	}
	public Double getEfforts_Pending() {
		return Efforts_Pending;
	}
	public void setEfforts_Pending(Double efforts_Pending) {
		DecimalFormat effortspending = new DecimalFormat("#.##");
		this.Efforts_Pending = Double.valueOf(effortspending.format(efforts_Pending));
		
		
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", Customer_Name=" + Customer_Name + ", Emp_Name=" + Emp_Name + ", Role_Maturity="
				+ Role_Maturity + ", Skill_Profile=" + Skill_Profile + ", Bill_Rate=" + Bill_Rate + ", DB_Estimate="
				+ DB_Estimate + ", G_Level=" + G_Level + ", Instance_Count=" + Instance_Count + ", Monthly_Efforts="
				+ Monthly_Efforts + ", ftecount=" + ftecount + ", Rate_Card=" + Rate_Card + ", Efforts=" + Efforts
				+ ", Efforts_Hrs=" + Efforts_Hrs + ", Rate_Ero=" + Rate_Ero + ", SDE=" + SDE + ", Efforts_Pending="
				+ Efforts_Pending + "]";
	}
	
	public Employee() {
		this.DB_Estimate = 0.0;
		this.ftecount = 0.0;
		
	}
    

	
}
