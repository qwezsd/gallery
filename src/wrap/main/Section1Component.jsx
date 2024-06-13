import React from 'react';
import axios from 'axios';
import './scss/section1.scss'

export default function Section1ComPonent () {
    const [state, setState] = React.useState({
        section1:[]
    })

    axios({
        url: './data/section1.json',
        method : 'GET'
    })
    .then((res)=>{
        setState({
            section1 : res.data.section1
        })
    })
    .catch(((err)=>{
    }))

    return (
        <div id='section1'>
            <div className="container">
                <div className="content">
                    <div className="img-box">
                        <ul>
                            {state.section1.map((item, idx)=>{
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