
import { HttpPost, HttpPostHeader } from "./HttpCall" ;
import { AddItem, AddItemJson } from "./Storage";

export const Auth = async ( email , password ) => {

    const url = `/api/back/login/signin` ;
    const { data } = await HttpPost( url , { email , password } ) ;

    if( data.action ){
        AddItemJson( 'user', data.data ) ;
        AddItem( 'token', data.data.token ) ;
    } 
    
    return data ;
}

export const ValidateSession = async token => {
    const url = `/api/back/login/validate` ;

    const axiosConfig = { headers : { 'auth-token' : token } };
    
    try {
        const { data } = await HttpPostHeader( url , { } , axiosConfig ) ;

        return !data.action ? false : true ;
    } 
    catch (error) {
        
        return false ;
    }
    
}