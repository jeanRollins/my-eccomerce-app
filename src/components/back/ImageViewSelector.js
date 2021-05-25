import React, { useState } from 'react' ;
import { Grid, IconButton } from '@material-ui/core';
import { AddAPhotoOutlined } from '@material-ui/icons';

export const ImageViewSelector = ({}) => {

    const [ viewImage , setViewImage ] = useState( [] ) ;

    const showImage =  e  => {
        const fileArray = Array.from( e.target.files ).map( file => URL.createObjectURL( file ) ) ;
        setViewImage( fileArray ) ;
    }
    
    return (
        <>
            <Grid
                item
                xs={2}
                className=" text-center p-x-4"
            >
                <input
                    accept="image/*"
                    className="d-none"
                    onChange={e => showImage(e)}
                    name="inputFile"
                    type="file"
                    id="icon-button-file"
                    multiple
                />
                <label htmlFor={"icon-button-file"}>
                    <IconButton
                        fontSize="large"
                        aria-label="upload picture"
                        component="span"
                    >
                        <AddAPhotoOutlined />
                    </IconButton>
                    <p  > Agregar Imagen  </p>
                </label>

            </Grid>

            {
                viewImage.map( image => (
                    <Grid
                        key={image}
                        item
                        xs={2}
                        className="pField textAlignCenter p-x-4 "
                    >
                        <img src={image} className="w-100 h-100 border" />
                    </Grid>
                ))
            }
        </>
    )
}
