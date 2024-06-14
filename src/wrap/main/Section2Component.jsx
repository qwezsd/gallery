import React from 'react';
import axios from 'axios';
import './scss/section2.scss'

export default function Section2Component () {
    const [state, setState] = React.useState({
        section2 : []
    })

    axios({
        url : './data/section2.json',
        method : 'GET'
    })
    .then((res)=>{
        setState({
            section2 : res.data.section2
        })
    })
    .catch((err)=>{
        console.log(err)
        console.log('쿠팡 시키기')
    })
    return (
        <div id='section2'>
            <div className="container">
                <div className="content">
                    <div className="img-box">
                        <ul>
                            {state.section2.map((item, idx)=>{
                                return(
                                <li key={item.번호}>
                                    <img src={`./img/main/section2/${item.이미지}`} alt="" />
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

