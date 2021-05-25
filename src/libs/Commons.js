export const GetFormatTimeDate = ( type , isoDate ) => {
    
    const date = new Date( isoDate ) ;

    if( type === 'DATE' )
        return FormatDateTime( "DATE" , date ) ;
    
    if( type === 'TIME' )
        return FormatDateTime( "TIME" , date ) ;
    
    return isoDate ;

}

const DateStringFormat = date => {
    return date > 9 ? date + '' : ( '0' + date ) ;  
}
const FormatDateTime = ( type , date ) => {
    
    if( type == "DATE" ){
        const dayOfMonth = DateStringFormat( date.getDate() ) ;  
        const month      = DateStringFormat( date.getMonth() ) ;  
        return dayOfMonth + "-" + month + '-' +  date.getFullYear() ;
    }

    if( type == "TIME" ){
        const hour      = DateStringFormat( date.getHours() ) ;  
        const minutes   = DateStringFormat( date.getMinutes() ) ;  
        const seconds   = DateStringFormat( date.getSeconds() ) ;  
        return hour + ":" + minutes + ':' +  seconds ;
    }

    return date ;
}

export const formatNumber =  num  => {
    num = num + '' ;
    num = num.replace(/\./g,'');
    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
    num = num.split('').reverse().join('').replace(/^[\.]/,'');
    return num ;
}
