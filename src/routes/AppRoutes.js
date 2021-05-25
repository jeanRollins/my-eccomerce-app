import React, { useContext } from 'react' ;
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { AuthContext } from '../stateManagement/context/AuthContext';
import { LoginScreen } from '../pages/back/Login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import '../styles/base.css' ;

export const AppRoutes= () => {

    const { user } = useContext( AuthContext ) ;
    
    return (
        <Router>
            <>  
                <Switch>
                    <PublicRoutes 
                        exact 
                        path="/back/login" 
                        component={ LoginScreen } 
                        isAuthenticated = { user.valid } 
                    />
                   
                    <PrivateRoutes  
                        path="/" 
                        component={ DashboardRoutes }
                        isAuthenticated = { user.valid } 
                    />

                </Switch>
            </>
        </Router>
    )
}
