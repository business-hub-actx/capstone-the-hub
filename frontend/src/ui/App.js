import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Profile} from "./Profile";
import {JobListing} from "./JobListing"
// import {ProfileCard} from "./share/components/ProfileCard";
import {NavbarComp} from "./share/components/NavbarComp";

export const App = () => (
    <>
        <BrowserRouter>
            <NavbarComp />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profiles' component={Profile} />
                <Route exact path='/joblist' component={JobListing} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
