import React, { useState } from 'react' ;
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@material-ui/core';



export const useConfirm = () => {

    const [ open, setOpen ] = useState( false );

    const showConfirmDialog = () => setOpen( true ) ;

    const closeConfirmDialog = () => setOpen( false ) ;

    const ConfirmDialog = (text , title, handleAction, data = null) => {

        return (
            <Dialog
                open={open}
                onClose={closeConfirmDialog}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    { title }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        { text }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick = { closeConfirmDialog } color="primary">
                        Cancelar
                    </Button>
                    <Button onClick = { async e => {
                        await handleAction(data) ; 
                        closeConfirmDialog() ;
                    } 
                    } color="primary">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
    return [ ConfirmDialog, showConfirmDialog, closeConfirmDialog ]
}
