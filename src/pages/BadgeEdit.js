import React from 'react';
import header from '../images/platziconf-logo.svg';
import '../styles/BadgeEdit.css';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm.js'
import PageLoading from '../components/PageLoading'
import api from '../api'
class BadgeEdit extends React.Component{
    state = { 
        loading: true,
        error: null,
        form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        twitter:''
    }}

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e =>{
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            console.log(data)
            this.setState({loading:false, form: data})
        }catch(error){
        this.setState({laoding:false, error:error})
        }
    }
    handleChange = e =>{
        //hacemos una copia del estado del form
        //const nextForm = this.state.form;
        //nextForm[e.target.name] = e.target.value

        this.setState({
            form :{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }
    handleSubmit = async e =>{
        e.preventDefault();
        
        this.setState({loading:true, error:null})
        try{
            
            await api.badges.update(this.props.match.params.badgeId ,this.state.form)
            this.setState({loading:false})

            this.props.history.push('/badges')
        }catch(error){
            this.setState({loading: false,error: error})
        }
    }
    render(){
        if(this.state.loading){
               return <PageLoading />
        }
        return(
            <React.Fragment>
                
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                avatar="https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png"
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'job'}
                                email={this.state.form.email || 'email'}
                            />
                        </div>
                        <div className="col-6">
                        <h1>Edit Attendant</h1>
                            <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}
                            onSubmit={this.handleSubmit} 
                            error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;