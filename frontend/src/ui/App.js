import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'

import {Profile} from "./Profile";
// import {ProfileCard} from "./share/components/ProfileCard";
import {NavbarComp} from "./share/components/NavbarComp";

import {JobListings} from "./Job-listings";
import {JobForm} from "./Job-form"


export const App = () => (
    <>
        <BrowserRouter>
            <NavbarComp />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profiles' component={Profile} />
                <Route exact path="/job-listings" component={JobListings}/>
                <Route exact path="/job-form" component={JobForm}/>

                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
