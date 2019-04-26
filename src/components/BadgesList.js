import React from 'react'
import "../styles/Badge.css";
import "../styles/BadgesList.css";
import {Link} from 'react-router-dom'
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges);
  
    React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
  
      setFilteredBadges(result);
    }, [badges, query]);
  
    return { query, setQuery, filteredBadges };
  }

  function BadgesList(props) {
    const badges = props.badges;
    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

        if(badges.length === 0){
            return(
                <div>
                    <div className="form-group">
                        <label >Filter Badges</label>
                        <input type="text" className="form-control"
                        value={query}
                        onChange={(e) =>{
                            setQuery(e.target.value)
                        }}/>
                    </div>  
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new" >
                    Create new badge</Link>
                </div>

            )
        }
        return(
            <ul className="list-unstyled">  
            <div className="form-group">
                <label >Filter Badges</label>
                <input type="text" className="form-control"
                value={query}
                onChange={(e) =>{
                    setQuery(e.target.value)
                }}/>
            </div>              
             {filteredBadges.map((badge)=>{
                    return(
                        <li key={badge.id}>
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                            <div className="card  mt-1 BadgesListItem" >
                                <div className="row no-gutters">
                                    <div className="col-md-3 ">
                                    <Gravatar className="BadgesListItem__avatar"
                                    email={badge.email}/>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h6 className="card-title">{badge.firstName} {badge.lastName}</h6>
                                            <p className="card-text">@{badge.twitter}</p>
                                            <p className="card-text">{badge.jobTitle}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            </Link>

                            
                        </li>
                    )
                })
                }
            </ul>
        )
    
}


export default BadgesList;