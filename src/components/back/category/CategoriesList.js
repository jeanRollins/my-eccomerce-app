import React, { useRef } from 'react'
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core'

export const CategoriesList = ({ categories , checks }) => {
    
    const categoriesRef = useRef([]) ;

    return (
        categories.map( c => (
            
            <Grid 
                item 
                xs={3} 
                key={c.id} 
                className = "p-x-4"
            >   
                <FormControlLabel
                    className = "m-top-1"
                    control = {
                        <Checkbox
                            color = "primary"
                            value = { c.id }
                            name  = "categories[]"
                            ref = { el => categoriesRef.current[c.id] = el }
                            defaultChecked = { checks.includes( c.id ) ? true : false }
                        />
                    }
                    label={c.name}
                />

                { c.data.map( cc => {

                    return (
                        <div key={cc.id}>
                            <FormControlLabel
                                className = "m-top-1"
                                style={{ width: '100%', marginLeft: '14px' }}
                                control={
                                    <Checkbox
                                        color="primary"
                                        value={cc.id}
                                        name  = "categories[]"
                                        ref = { el => categoriesRef.current[cc.id] = el }
                                        defaultChecked = { checks.includes( cc.id ) ? true : false }
                                    />
                                }
                                label={cc.name}
                            />

                            { cc.data.map( ccc => {

                                return (
                                    <FormControlLabel
                                        className = "m-top-1"
                                        key={ccc.id}
                                        style={{ width: '100%', marginLeft: '28px' }}
                                        control={
                                            <Checkbox
                                                color = "primary"
                                                value = { ccc.id }
                                                name  = "categories[]"
                                                ref = { el => categoriesRef.current[ccc.id] = el }
                                                defaultChecked = { checks.includes( ccc.id ) ? true : false }
                                            />
                                        }
                                        label={ccc.name}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </Grid>
        )) 
    )
}
