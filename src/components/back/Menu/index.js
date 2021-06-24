import React, { useRef } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


import './styles.css';
import { MyAvatar } from '../MyAvatar';
import { IMAGE_LOGO } from '../../../constants/Commons';


import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';

import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import { NavLink, useHistory } from 'react-router-dom';


const menuItems = [
    {
        name: 'Home',
        url: '/back/dashboard',
        type: 'link',
        flag: 'dashboard',
        icon:  'home'
    },
    {
        name: 'Productos',
        type: 'submenus',
        url: '/back/product',
        flag: 'features',
        icon:  'product',
        data: [
            {
                name: 'Listado',
                url: '/back/product'
            },
            {
                name: 'Agregar',
                url: '/back/product/add'
            }
        ]
    },
    {
        name: 'Categorías',
        url: '/back/category',
        type: 'link',
        flag: 'categorias',
        icon:  'category'
    },
    {
        name: 'Configuración',
        type: 'submenus',
        flag: 'services',
        url: '/back/config',
        icon: 'setting',
        data: [
            {
                name: 'App Design',
                url: '#'
            },
            {
                name: 'Web Design',
                url: '#'
            }
        ]
    }
];

const GetMenuIcon = ( { icon } ) => {

    switch (icon) {
        case 'home': return  <HomeRoundedIcon /> ; 
    
        case 'product': return  <StorefrontRoundedIcon /> ;

        case 'setting': return  <SettingsApplicationsRoundedIcon /> ;

        case 'category': return  <CategoryOutlinedIcon /> ;

        default : return <HomeRoundedIcon /> ; 
    }
}

export const Menu = () => {

    const history = useHistory() ;

    const sidebar = useRef();
    const btnMenuToggle = useRef();
    const itemsMenu = useRef([]);

    const iconMenu = useRef();
    const iconClose = useRef();

    const handleToggleMenu = () => {

        btnMenuToggle.current.classList.toggle('click');
        sidebar.current.classList.toggle('show');

        iconMenu.current.classList.toggle('d-none');

        iconClose.current.classList.toggle('d-none');
    };

    const IconMenu = () => (
        <div
            style={{ color: 'white' }}
            ref={btnMenuToggle}
            className="btn"
            onClick={handleToggleMenu}
        >
            <span ref={iconMenu} className="m-top-1" > <MenuIcon /> </span>
            <span ref={iconClose} className="m-top-1 d-none" > <CloseIcon /> </span>

        </div>
    );

    const selected = ( e , index, type, url ) => {
        e.preventDefault() ;
        
        const element = itemsMenu.current[ index ] ;

        itemsMenu.current.forEach( el => el.classList.remove( "active" ) ) ;

        if( type === 'submenus') {
            element.lastChild.classList.toggle( 'show' ) ;
            element.firstChild.lastChild.classList.toggle('rotate') ;
        } 
        else {
            history.replace( url );
        }
        element.classList.add( "active" ) ;
    }

    const MenuResponsive = () => (
        <nav className="sidebar show" ref={sidebar}  >

            <div className="m-y-2 content-app-name m-left-2">
                <MyAvatar
                    file = { IMAGE_LOGO }
                />
                <div className="text-light app-name"> My-ecommerce </div>
            </div>

            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={index === 0 ? 'active' : ''}
                        ref={r => itemsMenu.current[index] = r}
                    >
                        <a 
                            href = { item.url } 
                            onClick = { e => selected( e, index, item.type, item.url ) } >
                            <div
                                className = "menu-icon-item"
                            >
                                <GetMenuIcon 
                                    icon = { item.icon }  
                                />
                            </div>
                      

                            <strong> {item.name} </strong>

                            {item.type === 'submenus' && (

                                <span>
                                    <ArrowDropDownIcon />
                                </span>
                            )}
                        </a>

                        { item.type === 'submenus' && (

                            <ul className="">

                                { item.data.map( ( subitem, i ) => (
                                    <li key = { i } >
                                        <NavLink to = { subitem.url } >

                                            <strong> { subitem.name } </strong>
                                        </NavLink>

                                    </li>

                                ))}

                            </ul>
                        )}

                    </li>
                ))}

            </ul>
        </nav>
    )



    return { MenuResponsive, IconMenu };
}
