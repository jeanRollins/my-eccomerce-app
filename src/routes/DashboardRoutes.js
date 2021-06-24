import { Grid } from '@material-ui/core';
import React from 'react' ;
import { Route, Switch } from 'react-router' ;
import { Menu } from '../components/back/Menu';
import { Navbar } from '../components/back/Navbar';
import { DashboardScreen } from '../pages/back/Dashboard/DashboardScreen';
import { ProductsScreen } from '../pages/back/Product/ProductsScreen';

import { ProductAddScreen } from '../pages/back/Product/ProductAddScreen';
import { ProductEditScreen } from '../pages/back/Product/ProductEditScreen';
import { CategoryScreen } from '../pages/back/Category/CategoryScreen';



export const DashboardRoutes = () => {

    const { MenuResponsive } = Menu() ;

    return (
        <>
            <Navbar/>
            <MenuResponsive/>

            <div className="container">
                <Grid
                    container
                    className=""
                >
                    <Grid
                        item
                        lg={12}
                        md={12}
                        sm={12}
                    >
                        <Switch>
                            <Route  path = "/back/dashboard" exact = { true }  component = { DashboardScreen } />
                            <Route  path = "/back/product"  exact = { true }  component = { ProductsScreen } />
                            <Route  path = "/back/product/add"  exact = { true }  component = { ProductAddScreen } />
                            <Route  path = "/back/product/edit/:codeProduct"  exact = { true }  children = {<ProductEditScreen/>}  />

                            <Route  path = "/back/category"  exact = { true }  component = { CategoryScreen } />

                        </Switch>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
