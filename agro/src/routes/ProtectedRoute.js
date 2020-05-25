import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { LOGIN } from './router'

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route render={props => authenticated ? <Component to={...props} /> : <Redirect to={LOGIN} /> } {...rest} />
    )
}

export default ProtectedRoute
