import { useState } from "react" ;


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const resetForm = () => {
        setValues( initialState ) ;
        /*
        const checks = document.querySelectorAll( ".ssdsas"  ) ;

        checks.forEach( elem => {
            
            console.log('elem' , elem.firstElementChild.childNodes[0].value );

            elem.firstElementChild.childNodes[0].checked = false ;
        });
        */
    } ;

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    const handleCheckboxChange = ({ target }) => {
        let { value, name, checked } = target ;
        name = name.replace( '[]', '' ) ;
        
        const arr = checked ? [...values[name], value ] : values[ name ].filter( e => e !== value ) ;
        
        setValues({ ...values, [name] : arr });
    }

    return [ values, handleInputChange, resetForm, handleCheckboxChange ];
}
