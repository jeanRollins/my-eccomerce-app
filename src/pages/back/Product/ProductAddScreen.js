import React, { useEffect, useRef, useState } from 'react' ;
import { Button, Grid } from '@material-ui/core';
import { Title } from '../../../components/back/Title';
import { CategoryGetAlls } from '../../../libs/Category';
import { SpinnerLoad }  from '../../../components/back/SpinnerLoad' ;
import { useForm } from '../../../hooks/useForm';
import { useAlert } from '../../../hooks/useAlert';
import { ProductAdd } from '../../../libs/Product';
import { CategoriesList } from '../../../components/back/category/CategoriesList';
import { useHistory } from 'react-router-dom';
import { ImageViewSelector } from '../../../components/back/ImageViewSelector';

export const ProductAddScreen = () => {

    const history = useHistory() ;
    const [ categories , setCategories ] = useState( false ) ;
    const [ buttonState , setButtonState ] = useState( false ) ;


    const dataRefsValues     = useRef( [] );
    const form     = useRef( [] );

    const { AlertSnackBar, handleShowAlert } = useAlert() ;

    const [formValues, handleInputChange, , ] = useForm({
        name    : '' ,
        sku     : '' ,
        code    : '' ,
        technicalInformation : '' ,
        description   : '' ,
        categories    : [] 
    });

    const { name, sku, code, technicalInformation, description } = formValues ;

    const fetch = async () => {
        const _categories = await CategoryGetAlls() ;
        setCategories( _categories ) ;
    }
    
    useEffect( () => {
        fetch() ;
    }, [] ) ; 

    const handleAddProduct = async e => {
        
        e.preventDefault()  ;

        try {

            let validate = true ;
            setButtonState( true ) ;

            for await ( const row of dataRefsValues.current ) {
            
                if( row.value === '' ) {
                    row.focus() ;
                    validate = false ;
                    handleShowAlert( row.dataset.message );
                    break ;
                } 
            }  
    
            if( !validate ){
                setButtonState( false ) ;
                return false ;
            } 
    
            const formData  = new FormData( form.current ) ;
    
            const { action , data } = await ProductAdd( formData ) ;
    
            if ( action ){
                handleShowAlert( `${ data.name } agregado` , "success") ;
                history.replace('/back/product' ) ;
            } else {
                handleShowAlert( `Error al ingresar producto, itentente m??s tarde` , "success") ;
            } 

            setButtonState( false ) ;

        } catch (error) {
            console.log( 'error' , error ) ;
        }
    }

    return categories !== false ? (
        <>
            <AlertSnackBar />
            
            <Title
                text = { "Agregar Producto" }
            />
           
            <Grid
                container
            >
                <Grid
                    item
                    lg = { 12 }
                    md = { 12 }
                    sm = { 12 }
                    className = "p-x-2"
                >   
                    <Title
                        text = { "Datos principales " }
                        type = { 'subtitle' }
                    />
                </Grid>
            </Grid>

            <form 
                ref = { form } 
                onSubmit = { handleAddProduct }
                encType  = "multipart/form-data" 
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        lg = { 4 }
                        md = { 4 }
                        sm = { 12 }
                        className = "p-x-2"
                    >   
                        <label> Nombre :</label>
                        <input 
                            name = "name"
                            type = "text" 
                            data-message = "Nombre requerido"
                            className = "input" 
                            value = { name }
                            onChange={ handleInputChange }
                            ref = { ref => dataRefsValues.current[0] = ref  }
                        />
                    </Grid>

                    <Grid
                        item
                        lg = { 4 }
                        md = { 4 }
                        sm = { 12 }
                        className = "p-x-2"
                    >   
                        <label> C??digo Interno :</label>

                        <input 
                            name = "code"
                            type = "text" 
                            data-message = "C??digo requerido"
                            className = "input span-text-input" 
                            data-validation="number"
                            onChange={ handleInputChange }
                            value = { code }
                            ref = { ref => dataRefsValues.current[2] = ref  }
                        />
                        <span className="span-text"> COD </span>                       
                    </Grid>

                    <Grid
                        item
                        lg = { 4 }
                        md = { 4 }
                        sm = { 12 }
                        className = "p-x-2"
                    >   
                        <label> SKU :</label>
                        <input 
                            name  = "sku"
                            type  = "text" 
                            value = { sku }
                            data-message = "SKU requerido"
                            className    = "input" 
                            onChange     = { handleInputChange }
                            ref = { ref => dataRefsValues.current[1] = ref  }
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    className="m-top-2"
                >
                    <Grid
                        item
                        lg = { 6 }
                        md = { 6 }
                        sm = { 12 }
                        className = "p-x-2"
                    >   
                        <label> Informaci??n t??cnica :</label>
                        <textarea  
                            className = "input"
                            data-message = "Informaci??n t??cnica requerido"
                            name      = "technicalInformation"
                            value     = { technicalInformation } 
                            onChange  = { handleInputChange }
                            ref = { ref => dataRefsValues.current[3] = ref  }
                        ></textarea>
                    </Grid>

                    <Grid
                        item
                        lg = { 6 }
                        md = { 6 }
                        sm = { 12 }
                        className = "p-x-2"
                    >   
                        <label> Descripci??n :</label>
                        <textarea 
                            className    = "input" 
                            data-message = "Descripci??n requerido"
                            name         = "description"
                            value        = { description }
                            onChange={handleInputChange}
                            ref = { ref => dataRefsValues.current[4] = ref }
                        ></textarea> 
                    </Grid>
                </Grid>

                <Grid
                    container
                    className="m-top-2"
                >
                    <Grid
                        item
                        lg = { 12 }
                        md = { 12 }
                        sm = { 12 }
                        className = "p-x-2"
                    >   
                        <Title
                            text = { "Categor??as " }
                            type = { 'subtitle' }
                        />
                    </Grid>
                </Grid>

                <Grid container >
                    <CategoriesList
                        checks = { [] }
                        categories = { categories }
                    />
                </Grid>

                <Grid
                    container
                    className="m-top-2"
                >
                    <Grid
                        item
                        lg = { 12 }
                        md = { 12 }
                        sm = { 12 }
                        className = "p-x-2"
                    >   
                        <Title
                            text = { "Im??genes " }
                            type = { 'subtitle' }
                        />
                    </Grid>
                </Grid>
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
                        md = { 4 }
                        sm = { 12 }
                        className = "p-x-2 m-bottom-2"
                    >   
                        <Button 
                            fullWidth 
                            className = ""
                            type      = "submit" 
                            variant   = "contained" 
                            color     = "primary"
                            disabled = { buttonState } 
                        > 
                            Crear 
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </>
    ) : (
        <SpinnerLoad />
    )
}
