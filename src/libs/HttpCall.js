import axios from 'axios' ;
import { API_SERVICE } from '../constants/Commons';


export  const HttpGet = async url => {
    return await axios( API_SERVICE +  url ) ;
}

export  const HttpPost = async ( url, data ) => {
    return await axios.post( API_SERVICE + url, data ) ;
}

export const HttpPostHeader = async ( url, data , headers ) => {
    return await axios.post( API_SERVICE + url, data, headers ) ;
}