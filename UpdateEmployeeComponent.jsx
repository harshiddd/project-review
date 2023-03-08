import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstname: '',
            vediogame: '',
            emailid: '',
            img:''
        }
        this.changeFirstnameHandler = this.changeFirstnameHandler.bind(this);
        this.changeVediogameHandler = this.changeVediogameHandler.bind(this);
        this.changeEmailidHandler = this.changeEmailidHandler.bind(this);
        this.changeImgHandler = this.changeImgHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
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

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstname: this.state.firstname, vediogame: this.state.vediogame, emailid: this.state.emailid, img: this.state.img};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstname} onChange={this.changeFirstnameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Vedio Game:</label>
                                            <input placeholder="Vediogame" name="vediogame" className="form-control" 
                                                value={this.state.vediogame} onChange={this.changeVediogameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailid} onChange={this.changeEmailidHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="Img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
