import React, { useState } from 'react' ; 
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const useAlert = () => {

    const [ open, setOpen ] = useState( false ) ;
    const [ message, setMessage ] = useState( '' ) ;
    const [ type, setType ] = useState( "success" ) ;

    const handleCloseAlert = ( event, reason ) => {        
        if (reason === 'clickaway') return ;
        setOpen(false);
    };

    const handleShowAlert = ( text , type = "error" ) => {
        setMessage(text) ;
        setType( type )  ;
        setOpen( true );
    }

    const AlertSnackBar = () => <Snackbar 
                                    open = { open } 
                                    autoHideDuration = { 4000 } 
                                    onClose = { handleCloseAlert } 
                                >
                                    <Alert 
                                        onClose  = { handleCloseAlert } 
                                        severity = { type } 
                                    >
                                        { message }
                                    </Alert>
                                </Snackbar>
                           
    

    return { AlertSnackBar, handleShowAlert } ;
}
