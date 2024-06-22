import React from 'react';
import './scss/header.scss'

export default function HeaderComponent ({openIntroduce, closeIntroduce, openPerson1, closeMain}) {
    const [state, setState] = React.useState({
        openIntroduce : false,
        closeIntroduce : true,
        closeMain : true,
        font : false
    })

    const onClickIntroduce = (e) =>{
        e.preventDefault();
        closeMain()
        openIntroduce();
        setState({
            ...state,
            // font:true
        })
    }
    const onClickSol = (e) => {
        e.preventDefault();
        closeMain();
        closeIntroduce()
        openPerson1()
    }
    return (
        <div id='header'>
            <div className="container">
                <div className="title">
                    <div className="row1">
                        <ul>
                            <li onClick={onClickIntroduce}><h4>Introduce</h4></li>
                            <li onClick={onClickSol}><h4>혜정</h4></li>
                            <li><h4>산</h4></li>
                            <li><h4>유진</h4></li>
                            <li><h4>지혜</h4></li>
                        </ul>
                    </div>
                    <div className="row2">
                        <a href="/index"><h1>Love Always</h1></a>
                    </div>
                </div>
            </div>
        </div>
    );
};