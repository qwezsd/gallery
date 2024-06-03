import React from 'react';
import axios from 'axios'

export default function Person1Component () {

    const [state, setState] = React.useState({
        person1: []
    })
    
    axios({
        url : './data/person1.json',
        method : 'GET'
    })
    .then((res)=>{
        setState({
            person1 : res.data.person1
        })
    })
    .catch((err)=>{
        console.log(err)
    })

    return (
        <div id='person1'>
            <div className="container">
                <div className="content">
                    <div className="img-box">
                        <ul>
                        {state.person1.map((item, inx)=>{
                            return (
                                <li key={item.번호}>
                                    <img src={`./img/${item.이미지}`} alt="" />
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
