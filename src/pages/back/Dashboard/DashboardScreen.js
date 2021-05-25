import React from 'react' ;
import { Grid } from '@material-ui/core'
import { CardHome } from '../../../components/back/CardHome'
import { ICON_SALES, ICON_SALES2 } from '../../../constants/Commons';
import { Chart } from '../../../components/back/Chart';

export const DashboardScreen = () => {
    return (
        <>
            <Grid
                container
                className=""
            >
                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    className="p-x-1"

                >   
                    <CardHome  
                        file = { ICON_SALES }
                        text = {"Ventas realizadas 10"}
                    />
                </Grid>

                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    className="p-x-1"
                >
                
                <CardHome  
                        file = { ICON_SALES2 }
                        text = {"Ventas hoy $10.958"}
                    />
                </Grid>

                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    className="p-x-1"

                >
                    <CardHome  
                        file = { ICON_SALES }
                        text = {"Ventas realizadas 10"}
                    />
                </Grid>

                <Grid
                    item
                    lg={3}
                    md={3}
                    sm={3}
                    className="p-x-1"

                >
                    <CardHome  
                        file = { ICON_SALES2 }
                        text = {"Ventas hoy $10.958"}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                className="m-top-3 "
            >
                <Grid
                    item
                    lg = { 6 }
                    md = { 6 }
                    sm = { 6 }
                    className="p-x-1"
                >
                    <Chart />
                </Grid>
                <Grid
                    item
                    lg = { 6 }
                    md = { 6 }
                    sm = { 6 }
                >
                    <Chart />
                </Grid>
            </Grid>

        </>
    )
}
