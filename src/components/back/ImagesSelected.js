import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { RUTE_FILES } from '../../constants/Commons';
import { useConfirm } from '../../hooks/useConfirm';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { RViewerTrigger, RViewer } from 'react-viewerjs';

export const ImagesSelected = ({ files, handleDelete }) => {

    const [ConfirmDialog, showConfirmDialog, closeConfirmDialog] = useConfirm();
    const [imgSelected, setImgSelected] = useState({});


    const deleteItem = (e, img) => {
        e.preventDefault();
        setImgSelected(img);
        showConfirmDialog();
    }

    const images = files.map(f => RUTE_FILES + f.filename);

    console.log('images ::::: ', images);
    return (
        <>
            { ConfirmDialog(
                "Al eliminar imagen, no se podrá recuperar",
                "¿Desea eliminar imagen?",
                handleDelete,
                imgSelected
            )}
            <RViewer imageUrls = { images } >
                
                { files.map( img => (
                    <RViewerTrigger
                        key = { img._id }
                    >
                        <Grid
                            item
                            xs={2}
                            className="p-x-1"
                        >
                            <a
                                href="#"
                                className="img-show-select-button"
                                onClick={e => deleteItem(e, img)}
                            >
                                <DeleteForeverOutlinedIcon />
                            </a>
                            <a href="#" onClick={e => e.preventDefault()} >

                                <img
                                    className="w-100 img-show-select shadow-light image-zoom"
                                    src={RUTE_FILES + img.filename}
                                />
                            </a>
                        </Grid>
                    </RViewerTrigger>

                ))}
            </RViewer>

        </>
    )
}
