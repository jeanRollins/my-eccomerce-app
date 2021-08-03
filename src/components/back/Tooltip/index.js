import React, { useRef } from 'react';
import './style.css';

export const MyTooltip = ({ Component, ComponentToAction }) => {

    const element = useRef() ;

    const showTooltip = () => {

        element.current.classList.toggle("tooltip-visibible") ;
    }

    return (
        <div 
            className="tooltip"
        >
            <div 
                className = "tooltip-action"
                onClick = {  e => showTooltip() }
            >
                <ComponentToAction />
            </div> 
            <div 
                className = "tooltip-text "
                ref = { element }
            >
                { Component !== undefined && <Component /> }
            </div>
        </div>
    )
}
