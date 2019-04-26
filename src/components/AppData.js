import React from 'react'
import CharacterCard from './CharacterCard.js'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../images/logo.svg'
import Loader from './Loader.js'

class AppData extends React.Component{
    state = {
        data:{
            
            laoding:true,
            error:null,
            results:[],
            nextPage: 1,
            pag : 1,
        }
    }

    componentDidMount(){
        this.fetchCharacters()
    }
    fetchCharacters = async () =>{
        this.setState({ loading:true, error:null})
        
        
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${ this.state.data.nextPage}`)
            
            const data = await response.json();
           
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results,
                        data.results
                        
                    ),
                    nextPage: this.state.data.nextPage + 1,

                },
                
        })
        }catch(error){
            this.state({
                loading: false,
                error: error,
     
            })
        }
    }

    render () {
        if(this.state.error){
            return `Erros es: ${this.state.error.message}`
        }
        return (
            <div className="container">
                <div className="App">
                    <img className="Logo" src={logo} alt="Rick y Morty"/>
                    <ul className="row">
                        {this.state.data.results.map((character)=>{
                            return (
                                <li className="col-6 col-md-3 mt-2" key={character.id}>
                                    <CharacterCard character={character} />
                                </li>
                            )
                        })}

                    </ul>
                    {this.state.loading && (
                         <div>
                            <Loader />
                        </div>
                    )}

                    { !this.state.loading &&(
                        <button  className="btn btn-primary" onClick={()=>this.fetchCharacters()} >Cargar Mas Contenido</button>
                    )

                    }
                </div>
            </div>
        )
    }
}

export default AppData;