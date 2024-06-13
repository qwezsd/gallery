import React from 'react';
import axios from 'axios';

export default function Section2Component () {

    axios({
        url : './data/section2.json',
        method : 'GET'
    })
    .then((res)=>{
        console.log(res)
        console.log('양치하기')
    })
    .catch((err)=>{
        console.log(err)
        console.log('쿠팡 시키기')
    })
    return (
        <div id='section2'>
            
        </div>
    );
};

