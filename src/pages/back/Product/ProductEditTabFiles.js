import React, { useRef } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Title } from '../../../components/back/Title';
import { ImagesSelected } from '../../../components/back/ImagesSelected';
import { FileAddAndUpdateProduct, FileRemove } from '../../../libs/File';
import { useAlert } from '../../../hooks/useAlert';
import { ImageViewSelector } from '../../../components/back/ImageViewSelector';

export const ProductEditTabFiles = ({ files, codeProduct, fetch }) => {

    const form = useRef();

    const { AlertSnackBar, handleShowAlert } = useAlert();
    

    const handleAddImages = async e => {
        e.preventDefault();
        
        try {
            let formData = new FormData( form.current ) ;
            formData.append( 'code' , codeProduct ) ;

            const { action } = await FileAddAndUpdateProduct( formData ) ;
            
            action ? await fetch() : handleShowAlert( "Hubo un problema al agregar imagen, intente más tarde." ) ; 
        } 
        catch (error) {
            handleShowAlert( "Hubo un problema al agregar imagen, intente más tarde." );
        }
    }

    const handleDelete = async data => {
        
        const { codeProduct, filename, _id } = data ;  
        
        try {
            const data = { path : filename , idFile: _id, code : codeProduct } ;
            const { action } = await FileRemove( data ) ;
            
            action ? await fetch() : handleShowAlert( "Hubo un problema al borrar imagen, intente más tarde." ) ;
        } 
        catch (error) {
            handleShowAlert( "Hubo un problema al borrar imagen, intente más tarde." ) ;     
        }
    }


    return (
        <>  
            <AlertSnackBar/>
            <Grid
                container
                className="m-top-2"
            >
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className="p-x-2"
                >
                    <Title
                        text={"Subida de imágenes "}
                        type={'subtitle'}
                    />
                </Grid>
            </Grid>
            <form
                ref      = { form }
                onSubmit = { handleAddImages }
                encType  = "multipart/form-data"
                action   = "/"
            >
                <Grid
                    container
                >
                    <ImageViewSelector />

                </Grid>
                <Grid
                    container
                    className="m-top-2"
                >
                    <Grid
                        item
                        lg = { 2 }
                        md = { 3 }
                        sm = { 6 }
                        className="p-x-2 text-center"
                    >
                        <Button
                            type      = "submit"
                            color     = "primary"
                            variant   = "contained"
                            className = ""
                        >
                            Agregar
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <Grid
                container
                className="m-top-2"
            >
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    className="p-x-2"
                >
                    <Title
                        text={"Imágenes disponibles"}
                        type={'subtitle'}
                    />
                </Grid>
            </Grid>
            <Grid
                container
            >
                <ImagesSelected
                    files        = { files }
                    handleDelete = { handleDelete }
                />
            </Grid>
        </>
    )
}
