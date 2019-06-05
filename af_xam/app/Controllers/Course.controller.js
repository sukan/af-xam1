const Express = require('express');
const CourseRoute = Express.Router();
const Course = require('../Model/Course.model');
const Subject = require('../Model/Subject.model');

CourseRoute.get('/allCourses',(req,res)=>{
    Course.find().then(course=>{
        res.status(200).send({data:course});
    }).catch(err=>{
        res.status(500).send({message:err});
    })
});

CourseRoute.post('/oneCourse',(req,res)=>{
    Course.findOne({ _id : req.body.code},function(err,course){
        if(err){
            res.status(500).send({message:err});
        }else{
            if(!course){
                res.status(404).send({message:"No data found"})
            }else{
                res.status(200).send({data:course})
            }
        }

    });
});

CourseRoute.post('/addCourse',(req,res)=>{
    const arr=[];
    const course = new Course({
        name:req.body.name,
        code:req.body.code,
        passmark:req.body.mark,
        lecturerInCharge:req.body.lec,
        subjects:arr
    });

    course.save().then(resolve=>{
        res.status(200).send({message:"Added successfully",data:resolve})
    }).catch(err=>{
        res.status(500).send({message:err})
    })
})

CourseRoute.post('/addSubject',(req,res)=>{
    const subject = new Subject({
        name:req.body.name,
        amount:req.body.amount,
        description:req.body.desc
    })
    subject.save().then(sub=>{
        Course.findOne({code:req.body.course},function(err,course){
            if(err){
                res.status(500).send({message:err});
            }else{
                if(!course){
                    res.status(404).send({message:"No data found"})
                }else{
                    let newArray = [];
                    newArray = course.subjects;

                    newArray.push(sub);

                    course.subjects = newArray;

                    course.save().then(data=>{
                        res.status(200).send({message:"added successfully",data:data})
                    }).catch(err=>{
                        res.status(500).send({message:err})
                    })

                }
            }

        })
    })
})
module.exports = CourseRoute;