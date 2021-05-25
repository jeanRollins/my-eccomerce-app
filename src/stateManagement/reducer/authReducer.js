import { ClearStorage, GetItemJson } from "../../libs/Storage";

export function authReducer ( state = {} , action ) {


    switch ( action.type ) {
        
        case 'USER_VALID' :
            const user = GetItemJson( 'user' ) ;
            return { ...user, valid : true } ;

        case 'CLOSE_SESSION' :
            ClearStorage() ;
            return { token : '', valid : false } ;

        default : return state ;
    }
}