import React from 'react';
import axios from 'axios';

export default function Section2Component () {
    const [state, setState] = React.state({
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
                            {
                                <li>

                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

