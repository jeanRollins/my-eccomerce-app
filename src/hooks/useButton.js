import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react' ;

export const useButton = textInitial  => {
    
    const [ disabled, setDisabled ] = useState( false ) ; 
    const [ text, setText ] = useState( textInitial ) ; 


    
    const clickAction = async ( action) => {
        const tt = text ;
        setText( "EJECUTANDO..." ) ;
        setDisabled( true ) ;
        await action() ;
        setDisabled( false ) ;
        setText( tt ) ;
    }

    useEffect( () => {
       
    }, [text] )
  
    const ButtonVariant = ({ 
                            action , 
                            color = "primary", 
                            fullWidth = true , 
                            type = "button", 
                            variant="contained" 
                        }) =>{

        return (
            <Button 
                type  = { type } 
                color = { color }
                variant = { variant } 
                fullWidth = { fullWidth }
                disabled = { disabled }
                onClick =  { async e => {
                    const tt = text ;
                    setText( "EJECUTANDO..." ) ;
                    setDisabled( true ) ;
                    await action() ;
                    setDisabled( false ) ;
                    setText( tt ) ;
                }}
            > { text }
            
            </Button>
        ) ;
    } 
    return {
        ButtonVariant
    }
}
