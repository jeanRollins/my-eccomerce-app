import React, { useContext, useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { IMAGE_LOGO } from '../../../constants/Commons';
import { useAlert } from '../../../hooks/useAlert';
import { useForm } from '../../../hooks/useForm';
import { Auth } from '../../../libs/Login';
import { AuthContext } from '../../../stateManagement/context/AuthContext';
import { GetItemJson } from '../../../libs/Storage';



export const LoginScreen = ({ history }) => {

    const { AlertSnackBar, handleShowAlert } = useAlert();

    const [ buttonState , setButtonState ] = useState( false ) ;
    const { dispatch } = useContext(AuthContext);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formValues;


    const handleLogin = async e => {
        e.preventDefault() ;
        setButtonState( true ) ;

        if ( email === '') {
            handleShowAlert("Email requerido");
            setButtonState( false ) ;
            return false;
        }

        if ( password === '') {
            handleShowAlert("Password requerido");
            setButtonState( false ) ;
            return false;
        }

        try {

            const { action , data } = await Auth(email, password);

            if (!action) {
                handleShowAlert("Email o contraseña incorrecta");
                setButtonState( false ) ;
                return;
            };

            dispatch({
                type: 'USER_VALID',
                payload: data
            }) ;

            //history.replace(`/back/dashboard`)

        } catch (error) {
            handleShowAlert("Hubo un error, itente más tarde");
        }
    };

    return (
        <>
            <AlertSnackBar />
            <Grid
                container
                justify="center"
                className="m-top-4"
            >
                <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                >
                    <img src={IMAGE_LOGO} alt="Imagen principal" className="w-100" />
                </Grid>
            </Grid>
            <form onSubmit = { handleLogin } >


                <Grid container className="m-top-4" >

                    <Grid item sm={1} md={2} lg={5} >
                    </Grid>

                    <Grid
                        item
                        xl={2}
                        lg={2}
                        md={8}
                        sm={12}
                        xs={12}
                    >

                        <label >Ingrese email</label>
                        <input
                            type="text"
                            name="email"
                            className="input"
                            value={email}
                            onChange={handleInputChange}
                        />

                    </Grid>

                </Grid>

                <Grid container className="m-top-4" >

                    <Grid item sm={1} md={2} lg={5} >
                    </Grid>

                    <Grid
                        item
                        xl={2}
                        lg={2}
                        md={8}
                        sm={12}
                        xs={12}
                    >

                        <label> Ingrese Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className="input"
                            value={password}
                            onChange={handleInputChange}
                        />

                    </Grid>



                </Grid>
                <Grid container className="m-top-2" >

                    <Grid item sm={1} md={2} lg={5} >
                    </Grid>

                    <Grid
                        item
                        xl={2}
                        lg={2}
                        md={8}
                        sm={12}
                        xs={12}
                    >
                        <Button 
                            fullWidth 
                            type     = "submit" 
                            variant  = "contained" 
                            disabled = { buttonState } 
                            color    = "primary"
                        >
                            Acceder 
                        </Button>

                    </Grid>
                </Grid>
            </form>
        </>
    )
}
