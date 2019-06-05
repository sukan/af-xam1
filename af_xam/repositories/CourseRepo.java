package com.af.practice.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.af.practice.model.courses;

public interface CourseRepo extends MongoRepository<courses,String>{
	courses findBy_id(ObjectId id);

}
