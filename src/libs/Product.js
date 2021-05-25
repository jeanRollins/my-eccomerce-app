
import { HttpGet, HttpPostHeader } from "./HttpCall" ;
import { GetItem } from "./Storage";

export const ProductGetAlls = async ( ) => {
    const url = `/api/back/product/getAll` ;
    const { data : { data } } = await HttpGet( url ) ;
    return data ;
}

export const ProductAdd = async form => {
    const url = `/api/back/product/add` ;

    const token = GetItem('token') ;
    const axiosConfig = { headers : { 
                                'auth-token' : token ,
                                'Content-Type': 'multipart/form-data'
                            } 
                        };

    const { data  } = await HttpPostHeader( url, form, axiosConfig ) ;
    return data ;
}