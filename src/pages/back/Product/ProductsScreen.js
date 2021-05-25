import React, { useState , useEffect } from 'react' ;
import { ProductGetAlls }  from '../../../libs/Product' ;
import { SpinnerLoad }  from '../../../components/back/SpinnerLoad' ;
import { Title }  from '../../../components/back/Title' ;
import { GetFormatTimeDate, formatNumber } from '../../../libs/Commons';
import { Grid, IconButton, Switch } from '@material-ui/core';
import PaginateTable, { GetRowCurrent } from '../../../components/back/PaginateTable';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const columns = [
    { field: 'id', headerName: 'N°', width: 70, },
    { field: 'sku', headerName: 'SKU', width: 130, },
    { field: 'name'    , headerName: 'Nombre', width: 200, },
    { field: 'dateCrated', headerName: 'Fecha creación', width: 180 },
    { field: 'timeCrated', headerName: 'Hora creación', width: 180 },
    { field: 'stock',    headerName: 'Stock', width: 120 },
    { field: 'priceNormal', headerName: '$ Normal', width: 150 },
    { field: '_idt', headerName: 'Editar' , width: 120, 
        renderCell: params => {
            
            return(
                <>
                    <IconButton 
                        //onClick = { e => GoToPatientFile( params ) } 
                        aria-label="delete" 
                    >
                        <EditRoundedIcon fontSize="large" />
                    </IconButton>
                </>
              
            )  ;
        }
    } ,
    { field: 'action',  headerName: 'Disponible' , width: 120, 
        renderCell: params => {
            return (
                <>
                    <Switch
                        //onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </>
              
            )  ;
        }
    } 
];

export const ProductsScreen = () => {
    
    const [ products, setProducts ] = useState( false ) ;

    const fetch = async () => {
        SetProductsData() ;
    }

    const SetProductsData = async () => {
        let counter = 1 ;
        const _products = await ProductGetAlls() ;

        setProducts( _products.map( p => {
            const dateCrated  = GetFormatTimeDate( "DATE" , p.createdAt ) ;
            const timeCrated  = GetFormatTimeDate( "TIME" , p.createdAt ) ;
            const priceNormal = '$' + formatNumber( p.normalPrice ) ;
            const priceOffer  = '$' + formatNumber( p.offerPrice ) ;

            return {  
                ...p ,
                id : counter++ ,
                dateCrated ,
                timeCrated ,
                priceNormal ,
                priceOffer 
            } ;
        })) ;

    }

    useEffect(() => {
        fetch() ;
    }, [])


    return  products !== false ? (
        <>
            <Title
                text = { "Productos" }
            />

            <Grid
                container
                className=""
            >
                <Grid
                    item
                    lg = { 12 }
                    md = { 12 }
                    sm = { 12 }
                >   
                    <PaginateTable 
                        rows     = { products }
                        columns  = { columns  }
                        selected = { false }
                    />   
                    
                </Grid>
            </Grid>

        </>
    ) : (
        <SpinnerLoad />
    )
}
