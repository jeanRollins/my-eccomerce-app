
import { HttpGet, HttpPost, HttpPostHeader } from "./HttpCall" ;
import { GetItem } from "./Storage";

export const CategoryGetAlls = async ( ) => {
    const url = `/api/back/category/get` ;
    const { data : { data } } = await HttpGet( url ) ;
    return data ;
}

export const CategoryGetByfield = async form  => {
    const url = `/api/back/category/getByfield` ;
    const { data : { data } } = await HttpPost( url, form ) ;
    return data ;
}

export const CategoryAdd = async form => {
    const url = `/api/back/category/add` ;

    const token = GetItem('token') ;
    const axiosConfig = { headers : { 
                                'auth-token' : token ,
                                'Content-Type': 'application/json'
                            } 
                        };

    const { data  } = await HttpPostHeader( url, form, axiosConfig ) ;
    return data ;
}