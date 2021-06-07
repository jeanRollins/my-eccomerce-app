import React from 'react' ;

export const Title = ({ text , type }) => {
    return (
        <>
            { ( type === 'subtitle' ) ? (

                <div align="left" className="m-bottom-2">
                    <h3 className = "text-secondary " > { text } </h3>
                </div>
            ) : (
                
                <div align="center" className="m-bottom-1">
                    <h2 className = "text-secondary " > { text } </h2>
                </div>
            )}
        </>
    )
}
