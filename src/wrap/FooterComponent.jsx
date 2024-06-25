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
                            <a href="/person1">소개</a>
                        </li>
                        <li>
                            <a href="">목적</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
