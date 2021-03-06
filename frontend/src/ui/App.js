import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './Home'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import {Profile} from "./Profile";
import {NavbarComp} from "./share/components/NavbarComp";
import {Provider} from "react-redux"
import {JobListings} from "./Job-listings";
import {JobForm} from "./Job-form"


export const App = (store) => (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <NavbarComp/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profiles' component={Profile}/>
                    <Route exact path="/job-listings" component={JobListings}/>
                    <Route exact path="/job-form" component={JobForm}/>
                    <Route component={FourOhFour}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
)
