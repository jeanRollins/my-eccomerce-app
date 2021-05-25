
import { HttpGet } from "./HttpCall" ;

export const CategoryGetAlls = async ( ) => {
    const url = `/api/back/category/get` ;
    const { data : { data } } = await HttpGet( url ) ;
    return data ;
}