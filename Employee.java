package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "firstname")
	private String firstname;

	@Column(name = "vediogame")
	private String vediogame;
	
	@Column(name = "emailid")
	private String emailid;	
	
	@Column(name = "img")
	private String img;


	
	public Employee() {
		super();
	}
	
	public Employee(String firstname, String vediogame, String emailid,String img) {
		super();
		this.firstname = firstname;
		this.vediogame = vediogame;
		this.emailid = emailid;
		this.img = img;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getVediogame() {
		return vediogame;
	}

	public void setVediogame(String vediogame) {
		this.vediogame = vediogame;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	
}
