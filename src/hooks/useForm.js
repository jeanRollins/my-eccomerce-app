import { useState } from "react" ;


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const resetForm = () => {
        setValues( initialState ) ;
    } ;

    const handleInputChange = ({ target }) => {

        let { value , dataset } = target ;

        if( dataset.validation === 'number' && !validateNumber( value ) ){
            value = value.replace( value , '' ) ;
        }

        setValues({
            ...values,
            [ target.name ]: value
        });

    }

    const validateNumber = char => {
        const valuesNumber  = /^[0-9]+$/;
        return ( char.match( valuesNumber ) )
    }

    

    const handleCheckboxChange = ({ target }) => {
        let { value, name, checked } = target ;
        name = name.replace( '[]', '' ) ;
        
        const arr = checked ? [...values[name], value ] : values[ name ].filter( e => e !== value ) ;
        
        setValues({ ...values, [name] : arr });
    }

    return [ values, handleInputChange, resetForm, handleCheckboxChange ];
}
