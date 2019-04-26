import React from 'react';
import '../styles/Badge.css'
import '../styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList';
import {Link} from 'react-router-dom'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import '../styles/PageLoading.css'
import MiniLoader from '../components/MiniLoader'
class Badges extends React.Component{
    

    constructor(props){
        super(props)
        console.log('1. constructor()')
        this.state = {
            loading: true,
            error: null,
            data: undefined,
            
            }
    }
    

    componentDidMount(){
        console.log('3. Component Did Mount()')
        this.fetchData();
        this.intervalId = setInterval(this.fetchData,5000)
    }


    fetchData = async ()=>{
        this.setState({
            loading: true,
            error: null
        })
        try{
            const data =  await api.badges.list()
            //console.log(data)
            this.setState({ loading:false, data: data})
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps, 
            prevState: prevState
        })
        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount(){
        console.log('6. ComponenWillUnMount()')
        clearTimeout(this.timeoutId)
        clearInterval(this.intervalId)
    }
    render(){
        console.log('2/4. render ()')
        if(this.state.loading === true && !this.state.data){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        
        return(
            <React.Fragment>
               
                <div >
                    <div className="Badge__header ">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="conflogo"/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges_buttons">
                        <Link to="/badges/new" className="btn btn-primary"> New Badge</Link>
                    </div>
                    <div className="Badges-list">
                        <div className="Badges-container">
                            <BadgesList badges={this.state.data}/>
                            {this.state.loading && <MiniLoader />}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;

