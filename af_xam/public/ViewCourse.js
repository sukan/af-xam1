import React,{Component} from 'react';
import axios from 'axios';

const Course = props=>(
    <tr>
        <td>{props.course.name}</td>
        <td>{props.course.code}</td>
        <td>{props.course.lecturerInCharge}</td>
        <td>{props.course.passmark}</td>
    </tr>
)
class ViewCourse extends  Component{

    constructor(props){
        super(props);

        this.state={
            courses:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/messages/courses/allCourses').then(resolve=>{
            this.setState({
                    courses : resolve.data.data
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    getCourses(){
        return this.state.courses.map(function(object,i){
            return <Course course={object} key={i}/>
        })
    }
    render(){
        return(
            <div className='card'>
                <div className='card-body'>
                    <table className='table'>
                        <thead>
                        <tr className="table-info">
                            <th>Name</th>
                             <th>Code</th>
                            <th>Pass Mark</th>
                            <th>Lecturer InCharge</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.getCourses()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ViewCourse;