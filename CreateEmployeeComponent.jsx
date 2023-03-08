import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstname: '',
            vediogame: '',
            emailid: '',
            img: ''
        }
        this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
        this.changeVediogameHandler = this.changeVediogameHandler.bind(this);
        this.changeEmailidHandler = this.changeEmailidHandler.bind(this);
        this.changeImgHandler = this.changeImgHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({
                    firstname: employee.firstname,
                   vediogame: employee.vediogame,
                    emailid : employee.emailid,
                    img : employee.img
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstname: this.state.firstname, vediogame: this.state.vediogame, emailid: this.state.emailid, img: this.state.img};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeFirstnameHandler= (event) => {
        this.setState({firstname: event.target.value});
    }

    changeVediogameHandler= (event) => {
        this.setState({vediogame: event.target.value});
    }

    changeEmailidHandler= (event) => {
        this.setState({emailid: event.target.value});
    }
    changeImgHandler= (event) => {
        this.setState({img: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center p-4 m-2 text-info">Add</h3>
        }else{
            return <h3 className="text-center p-4 m-2 text-info">Update</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstname} onChange={this.changeFirstnameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Vedio Game: </label>
                                            <input placeholder="Vediogame" name="vediogame" className="form-control" 
                                                value={this.state.vediogame} onChange={this.changeVediogameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailid" className="form-control" 
                                                value={this.state.emailid} onChange={this.changeEmailidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div>
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.saveOrUpdateEmployee}><BsCheckCircleFill/> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><BsFillXCircleFill/> Cancel</button>
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
