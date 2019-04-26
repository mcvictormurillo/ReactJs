import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from './Layout'
import Badges from '../pages/Badges.js'
import BadgeNew from '../pages/BadgeNew.js'
import BadgeEdit from '../pages/BadgeEdit.js'
import BadgeDetailsContainer from '../components/BadgeDetailsContainer'
import NotFound from '../pages/NotFound.js'
import AppData from './AppData.js'
function App(){

    return (
        <BrowserRouter>
        <Layout >
        <Switch>
            <Route exact path="/badges" component={Badges}/>
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
            <Route exact path="/api" component={AppData} />
            <Route component={NotFound}/>
            </Switch>
        </Layout>
            
            
        </BrowserRouter>
    )

}
export default App;