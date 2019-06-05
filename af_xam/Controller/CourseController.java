package com.af.practice.Controller;

import java.util.ArrayList;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.af.practice.model.courses;
import com.af.practice.model.subjects;
import com.af.practice.repositories.CourseRepo;

@RestController
@RequestMapping("/course")
public class CourseController {

	@Autowired
	private CourseRepo repository;
	
	@CrossOrigin("http://localhost:3000")
	@RequestMapping(value="/amount/{id}",method = RequestMethod.GET)
	public double getAmount(@PathVariable("id") ObjectId id) {
		courses course = repository.findBy_id(id);
		
		double total = 0.0;
		
		for(subjects sub:course.getSubjects()) {
			total += sub.getAmount();
		}
		return total;
	}
	
	//@RequestMapping(value = "/", method = RequestMethod.GET)
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/all")
	public List<courses> getAllPets() {
	  return repository.findAll();
	}
}
