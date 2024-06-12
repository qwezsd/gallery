import React from 'react';
import './scss/header.scss'

export default function HeaderComponent () {
    // 스크롤 내리면 Header 커지기 
    return (
        <div id='header'>
            <div className="container">
                <div className="title">
                    <a href="/index"><h1>[title]</h1></a>
                    
                </div>
            </div>
        </div>
    );
};