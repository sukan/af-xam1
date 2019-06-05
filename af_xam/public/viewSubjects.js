import React, {Component} from 'react';
import axios from 'axios';

const Course = props =>(
    <option value={props.course._id}>{props.course.name}</option>
)

const Subject = props =>(
    <tr>
        <td>{props.sub.name}</td>
        <td>{props.sub.description}</td>
        <td>{props.sub.amount}</td>
    </tr>
)
class ViewSubjects extends Component{



    constructor(props){
        super(props);

        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course:'',
            courses:[],
            subjects:[],
            total:''
        }
    }

    componentDidMount() {

        axios.get('http://localhost:3000/api/messages/courses/allCourses').then(resolve=>{
            console.log(resolve.data.data)
            this.setState({
                courses:resolve.data.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    getCourse(){
        return this.state.courses.map(function(object,i){
            return <Course course={object} key={i}/>
        })
    }

    onChangeCourse(e){
        this.setState({
            course:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const obj ={
            code:this.state.course
        }
        axios.post("http://localhost:3000/api/messages/courses/oneCourse",obj).then(resolve=>{
            console.log(resolve.data.data.subjects);

            this.setState({
                subjects:resolve.data.data.subjects

            })
        }).catch(err=>{
            console.log(err);
        })

        axios.get("http://localhost:8080/course/amount/"+this.state.course).then(resolve=>{
            console.log(resolve);
            this.setState({
                total:"Total fee for course: "+resolve.data
            })

        }).catch(err=>{
            console.log(err);
        })

    }

    getSub(){
        return this.state.subjects.map(function(object,i){

            return <Subject sub={object} key={i}/>
        })
    }
    render(){
        return(
            <div className='card'>
                <div className='card-header'>
                    <form onSubmit={this.onSubmit} className='form'>
                        <div className='form-group'>
                            <select value={this.state.course} className='form-control-sm' onChange={this.onChangeCourse}>
                                <option selected>Select the course</option>
                                {this.getCourse()}
                            </select> <input type='hidden' className='form-control-sm'/>
                            <button type='submit' className='btn btn-success'>Search</button>
                        </div>
                    </form>
                </div>
                <div className='card-body'>
                    <table className='table'>
                        <caption>{this.state.total}</caption>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Amount</td>
                        </tr>
                        </thead>
                        <tbody  className='tab-content'>
                        {this.getSub()}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}

export  default ViewSubjects;