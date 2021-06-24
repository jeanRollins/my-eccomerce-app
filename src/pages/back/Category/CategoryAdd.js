import React, { useEffect, useState } from 'react' ;
import { Grid } from '@material-ui/core' ;
import { CategoryGetByfield } from '../../../libs/Category';

export const CategoryAdd = ( {  } ) => {

    const [ categories , setCategories ] = useState([]) ;


    const fetch = async () => {
        const _categories = await CategoryGetByfield() ;
        setCategories( _categories ) ;
    }

    useEffect( () => {
        fetch() ;
    },[])

    return (
        <form>
            <Grid container className="m-y-5">
                <Grid
                    item
                    lg = { 4 }
                    md = { 4 }
                    sm = { 12 }
                    className = "p-x-2"
                >   
                    <label> Categoría padre :</label>
                    <select className="select">
                        <option>Sin categoría padre</option>

                        { categories.map( c => (
                            <option option={ c.id }> { c.name } </option>
                        )) }

                    </select>
                </Grid>
            </Grid>

            <Grid container className="m-y-2">
                <Grid
                    item
                    lg = { 4 }
                    md = { 4 }
                    sm = { 12 }
                    className = "p-x-2"
                >   
                    <label> Nombre :</label>
                    <input 
                        type      = "text"
                        className = "input" 
                    />
                </Grid>
            </Grid>
        </form>
    )
}
