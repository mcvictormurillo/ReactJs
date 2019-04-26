import React from 'react';

class BadgeForm extends React.Component{

    //inicializar el estado
    //state = {
    //    jobTitle: 'Designer'
    //};

    /*handleChange = e =>{
        //console.log({
        //name: e.target.name,
        //value: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleSubmit = e =>{
        e.preventDefault();
        console.log('Form was submitted')
        console.log(this.state)
        
    };*/

    handleClick = e =>{
        console.log('Evento click')
    };


    render(){
        return(
            <div>
                
                <form action="" onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label >FirstName</label>
                        <input value={this.props.formValues.firstName} onChange={this.props.onChange} className="form-control" type="text" name="firstName"/>
                    </div>
                    <div className="form-group">
                        <label >LastName</label>
                        <input value={this.props.formValues.lastName} onChange={this.props.onChange} className="form-control" type="text" name="lastName"/>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input value={this.props.formValues.email} onChange={this.props.onChange} className="form-control" type="email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label >Job Title</label>
                        <input value={this.props.formValues.jobTitle} onChange={this.props.onChange} className="form-control" type="text" name="jobTitle"/>
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input  value={this.props.formValues.twitter} onChange={this.props.onChange} className="form-control" type="text" name="twitter"/>
                    </div>
                    <button  className="btn btn-primary">Save</button>

                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm;