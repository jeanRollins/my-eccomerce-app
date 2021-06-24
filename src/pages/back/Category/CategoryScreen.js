import React, { useEffect, useState } from 'react' ;
import { Grid } from '@material-ui/core';
import { CategoriesList } from '../../../components/back/category/CategoriesList';
import { Title } from '../../../components/back/Title';
import { CategoryGetAlls } from '../../../libs/Category';
import { SpinnerLoad }  from '../../../components/back/SpinnerLoad' ;

export const CategoryScreen = () => {

    const [ categories , setCategories ] = useState( false ) ;
    
    const fetch = async () => {
        const _categories = await CategoryGetAlls() ;
        setCategories( _categories ) ;
    }
    
    useEffect( () => {
        fetch() ;
    }, [] ) ; 

    return categories !== false ? (
        <>
            <Title
                text = { "Categorías" }
            />
           
            <Grid container >
                <CategoriesList
                    checks = { [] }
                    categories = { categories }
                    fetch = { fetch }
                    showAdd = { true }
                />
            </Grid>


        </>
    ) : (
        <SpinnerLoad />
    )
}
