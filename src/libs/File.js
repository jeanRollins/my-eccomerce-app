import { HttpPostHeader } from "./HttpCall";
import { GetItem } from "./Storage";

export const FileAddAndUpdateProduct = async form => {
    const url = `/api/back/file/add` ;

    const token = GetItem('token') ;
    const axiosConfig = { headers : { 
                            'auth-token'   : token ,
                            'Content-Type' : 'multipart/form-data'
                        }};

    const { data } = await HttpPostHeader( url, form, axiosConfig ) ;
    return data ;
}

export const FileRemove = async form => {
    const url = `/api/back/file/remove` ;
    const token = GetItem('token') ;

    const axiosConfig = { headers : { 
                            'auth-token'   : token ,
                            'Content-Type' : 'application/json'
                        }};

    const { data } = await HttpPostHeader( url, form, axiosConfig ) ;
    return data ;
}