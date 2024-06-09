import React from 'react';
import axios from 'axios';
import './scss/main.scss'

export default function MainComponent () {
    const [state, setState] = React.useState({
        main:[]
    })

    axios({
        url: './data/main.json',
        method : 'GET'
    })
    .then((res)=>{
        setState({
            main : res.data.main
        })
    })
    .catch(((err)=>{
    }))

    return (
        <div id='main'>
            <div className="container">
                <div className="content">
                    <div className="img-box">
                        <ul>
                            {state.main.map((item, idx)=>{
                                return (
                                <li key={item.번호}>
                                    <img src={`./img/main/${item.이미지}`} alt="" />
                                </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};