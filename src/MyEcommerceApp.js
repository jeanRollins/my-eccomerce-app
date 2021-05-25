import React, { useEffect, useReducer } from 'react' ;
import { AddItemJson, GetItemJson } from './libs/Storage';
import { AppRoutes } from './routes/AppRoutes';
import { AuthContext } from './stateManagement/context/AuthContext';
import { authReducer } from './stateManagement/reducer/authReducer';


const init = () => {
    const   us = GetItemJson('user') ;
    return  us === null ? { token : '', valid : false } : us ;
} 
    
export const MyEcommerceApp = () => {

    const [ user , dispatch ] = useReducer(  authReducer , {},  init ) ;

    useEffect(() => {
        AddItemJson( 'user', user ) ;
    }, [ user ]) ;

    return (
        <AuthContext.Provider value = {{ user, dispatch }}>
            <AppRoutes />
        </AuthContext.Provider>
    ) ;  
}
