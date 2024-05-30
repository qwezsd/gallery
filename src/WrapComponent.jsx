import React from 'react';
import HeaderComponent from './main/HeaderComponent';
import MenuComponent from './main/MenuComponent';

export default function WrapComponent () {
    return (
        <div id='wrap'>
            <HeaderComponent />
            <MenuComponent />
        </div>
    );
};