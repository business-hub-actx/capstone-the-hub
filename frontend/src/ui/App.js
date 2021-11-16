import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {JobListings} from "./Job-listings";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/job-listings"component={JobListings}/>
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
