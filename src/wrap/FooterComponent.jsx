import React from 'react';
import './scss/footer.scss'

export default function FooterComponent () {
    return (
        <div id='footer'>
            <div className="container">
                <div className="content">
                    <div className="title">
                    <a href="/index"><h1>Love Always</h1></a>
                    </div>
                    <ul>
                        <li>
                            <a href="/person1">
                                <h4>소개</h4>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <h4>목적</h4>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
