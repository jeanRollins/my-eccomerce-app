import { Grid } from '@material-ui/core';
import React from 'react';
import { RUTE_FILES } from '../../constants/Commons';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

export const ImagesSelected = ({ files , handleDelete, codeProduct }) => {
    
    console.log( 'files' , files );
    
    const deleteItem = ( e , img )=> {
        e.preventDefault() ;
        handleDelete( img._id, codeProduct, img.filename ) ;
    } 

    return (
        <>
            { files.map( img => (
                <Grid
                    item
                    xs = { 2 }
                    key = { img._id }
                    className = "p-x-1"
                >   
                    <a 
                        href="#" 
                        className="img-show-select-button"
                        onClick = { e => deleteItem( e, img )  }
                    > 
                        <DeleteForeverOutlinedIcon /> 
                    </a>
                    <a href="#" onClick = { e => e.preventDefault() } >
                       
                        <img 
                            className = "w-100 img-show-select shadow-light image-zoom"
                            src = { RUTE_FILES + img.filename }
                        />
                    </a>
                </Grid>
            ))}
        </>
    )
}
