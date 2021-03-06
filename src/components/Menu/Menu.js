import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        path: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        path: '/product-list',
        exact: false
    }
];

const MenuLink = ({ to, label, activeOnlyWhenExact }) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active' : '';
                return (
                    <li className={`nav-item ${active}`}>
                        <Link className="nav-link" 
                            to={to}>
                            {label}
                        </Link>
                    </li>
                );  
            }}
        /> 
    );
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>
        );
    }

    showMenus = menus => {
        var result = null;

        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        to={menu.path}
                        label={menu.name}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            })
        }

        return result;
    }
}

export default Menu;