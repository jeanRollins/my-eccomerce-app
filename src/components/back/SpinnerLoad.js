import React from 'react' ;
import CircularProgress from '@material-ui/core/CircularProgress';

const style = {
    width  : '60px',
    height : '60px', 
    color  : '#242d63'
}

export const SpinnerLoad = () =>  (
    <div align="center" className="m-top-7">
        <CircularProgress style = { style } />
        <p className = "text-secondary font-weight" > Cargando...</p>
    </div>
)

