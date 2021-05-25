
export const AddItemJson =  ( field , value ) => {
    localStorage.setItem( field, JSON.stringify( value ) ) ;
} ; 

export const GetItemJson =  ( field ) => {
    const data =  localStorage.getItem( field ) ;
    return JSON.parse( data ) ;
} ; 

export const GetItem = field  => {
    const data = localStorage.getItem( field ) ;
    return data ;
} ; 

export const AddItem = ( field , value ) => {
    localStorage.setItem( field, value ) ;
} ; 

export const RemoveItem =  field => {
    localStorage.removeItem( field ) ;
} ;

export const ClearStorage = ( ) => {
    localStorage.clear(  ) ;
} ;

