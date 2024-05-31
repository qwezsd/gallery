import React from 'react';
import './scss/header.scss'

export default function HeaderComponent () {
    // 스크롤 내리면 Header 커지기 
    return (
        <div id='header'>
            <div className="container">
                <div className="title">
                    <h1>Gallery</h1>
                    
                </div>
            </div>
        </div>
    );
};