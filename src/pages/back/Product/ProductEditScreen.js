import React, { useEffect, useState } from 'react';
import { CategoryGetAlls } from '../../../libs/Category';
import { SpinnerLoad } from '../../../components/back/SpinnerLoad';
import { ProductGet } from '../../../libs/Product';
import { useParams } from 'react-router-dom';
import { PanelTab } from '../../../components/back/PanelTab';
import { ProductEditTabDatesPrincipal } from './ProductEditTabDatesPrincipal';
import { ProductEditTabFiles } from './ProductEditTabFiles';



export const ProductEditScreen = () => {

    const { codeProduct } = useParams();
    const [ product, setProduct] = useState(false);
    const [ categories, setCategories] = useState(false);
    const [ categoriesList, setCategoriesList] = useState(false);
    const [ categoriesSelected, setCategoriesSelected ] = useState( [] ) ;


    const tabs = [
        { 
            title: 'Datos principales' , 
            Component: () => <ProductEditTabDatesPrincipal 
                                product = { product }
                                categories = { categories }
                                categoriesSelected = { categoriesSelected }
                            /> 
        },
        { 
            title: 'Archivos' , 
            Component: () => <ProductEditTabFiles 
                                fetch = { fetch } 
                                files = { product.files }
                                codeProduct = { codeProduct }
                            /> 
        },
        { 
            title: 'Stock valores' , 
            Component: () => <> Stock valores!!! </> 
        }
    ] ;





    const fetch = async () => {
        setCategories( false ) ;
        const _categories = await CategoryGetAlls();
        let _product    = await ProductGet(codeProduct);
        _product.files = _product.files.map( f =>  ({...f, codeProduct} ) ) ;

        setCategoriesSelected( _product.categories.map( c => c._id ) ) ;
        setCategoriesList(_product.categories.map(c => c._id));
        setProduct(_product);
        setCategories(_categories);
    }


    useEffect(() => {
        fetch();
    }, []);

    return ( categories !== false && product !== false && categoriesList !== false) ?
        (
            <>
                <PanelTab 
                    tabs = { tabs }
                />

            </>
        ) : (
            <SpinnerLoad />
        )
}
