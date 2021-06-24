import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Button } from '@material-ui/core';

export const MyTooltip = () => {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => setOpen(false);
    
    const handleTooltipOpen = ()  => setOpen(true);
    
    const TooltipDialog = () => ( 
        <ClickAwayListener onClickAway={handleTooltipClose}>
            
            <Tooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Add"
            >
                <Button onClick={handleTooltipOpen}>Click</Button>
            </Tooltip>
    
        </ClickAwayListener>
    ) ;

    return [TooltipDialog,handleTooltipOpen, handleTooltipClose ] ;
}
