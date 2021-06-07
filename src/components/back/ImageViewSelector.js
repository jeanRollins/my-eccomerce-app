import React, { useState } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { AddAPhotoOutlined } from '@material-ui/icons';

export const ImageViewSelector = () => {

    const [viewImage, setViewImage] = useState([]);

    const showImage = e => {
        const fileArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));
        render(fileArray);
    }

    const render = fileArray => {
        setViewImage(
            fileArray.map(img => (
                <Grid
                    item
                    xs={2}
                    key={img}
                    className="pField textAlignCenter p-x-4 "
                >
                    <img
                        src={img}
                        className="w-100 h-100 border shadow-light"
                        alt="Imagen para subir"
                    />
                </Grid>
            ))
        )
    }

    return <>
            <Grid
                item
                xs={2}
                className="p-top-1 text-center p-x-4"
            >
                <label
                    htmlFor="icon-button-file"
                >
                    <input
                        type="file"
                        onChange={showImage}
                        id="icon-button-file"
                        name="inputFile"
                        className="d-none"
                        multiple
                    />
                    <IconButton
                        fontSize="large"
                        aria-label="upload picture"
                        component="span"
                    >
                        <AddAPhotoOutlined />
                    </IconButton>
                    <p > Agregar Imagen  </p>
                </label>
            </Grid>
            { viewImage }
        </> 
    
}
