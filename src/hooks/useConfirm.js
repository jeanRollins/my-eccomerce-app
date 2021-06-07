import React, { useState } from 'react' ;
import Draggable from 'react-draggable' ;
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper } from '@material-ui/core';

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

export const useConfirm = () => {

    const [ open, setOpen ] = useState(false);

    const showConfirmDialog = () => setOpen( true ) ;

    const closeConfirmDialog = () => setOpen( false ) ;

    const ConfirmDialog = () => {

        return (
            <Dialog
                open={open}
                onClose={closeConfirmDialog}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Subscribe
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick = { closeConfirmDialog } color="primary">
                        Cancel
                    </Button>
                    <Button onClick = { closeConfirmDialog } color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
    return [ ConfirmDialog, showConfirmDialog, closeConfirmDialog ]
}
