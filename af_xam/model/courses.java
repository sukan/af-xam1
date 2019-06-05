package com.af.practice.model;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class courses {

	
	@Id
	ObjectId _id;
	
	String name;
	String code;
	String lecturerInCharge;
	int passmark;
	ArrayList<subjects> subjects;
	
	
	public courses(ObjectId _id, String name, String code, String lecturerInCharge, int passmark,
			ArrayList<subjects> subjects) {
		super();
		this._id = _id;
		this.name = name;
		this.code = code;
		this.lecturerInCharge = lecturerInCharge;
		this.passmark = passmark;
		this.subjects = subjects;
	}

	public courses() {
		super();
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getLecturerInCharge() {
		return lecturerInCharge;
	}
	public void setLecturerInCharge(String lecturerInCharge) {
		this.lecturerInCharge = lecturerInCharge;
	}
	public int getPassmark() {
		return passmark;
	}
	public void setPassmark(int passmark) {
		this.passmark = passmark;
	}

	public ArrayList<subjects> getSubjects() {
		return subjects;
	}

	public void setSubjects(ArrayList<subjects> subjects) {
		this.subjects = subjects;
	}
	
	public ObjectId get_id() {
		return _id;
	}

	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	
}
