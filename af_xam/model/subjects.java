package com.af.practice.model;

public class subjects {

	String name;
	String description;
	int amount;
	
	
	public subjects() {
		super();
	}
	public subjects(String name, String description, int amount) {
		super();
		this.name = name;
		this.description = description;
		this.amount = amount;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmmount(int amount) {
		this.amount = amount;
	}
	
}
