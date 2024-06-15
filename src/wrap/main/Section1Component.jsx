import React from 'react';
import axios from 'axios';
import './scss/section1.scss'

export default function Section1Component () {
    const [state, setState] = React.useState({
        section1 : []
    })

    axios({
        url : './data/section1.json',
        method : 'GET'
    })
    .then((res)=>{
        setState({
            section1 : res.data.section1
        })
    })
    .catch((err)=>{
        console.log(err)
    })
    return (
        <div id='section1'>
            <div className="container">
                <div className="content">
                    <div className="img-box">
                            {state.section1.map((item, idx)=>{
                                return(
                                <div className='set_img' key={item.번호}>
                                    <img src={`./img/main/section1/${item.이미지}`} alt="" />
                                </div>
                                )
                            })
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

