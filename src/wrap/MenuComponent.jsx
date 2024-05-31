import React from 'react';
import './scss/menu.scss'

export default function MenuComponent ({openIntroduce, closeIntroduce}) {

    const [state, setState] = React.useState({
        openIntroduce : false,
        closeIntroduce : true,
        font : false
    })

    const onClickIntroduce = (e) =>{
        e.preventDefault();
        openIntroduce()
        setState({
            ...state,
            font:true
        })
    }
    const onClickSol = (e) => {
        e.preventDefault();
        closeIntroduce()
    }
    return (
        <div id='menu'>
            <div className="container">
                <div className="content">
                    <ul className={state.font ? 'click' : ''}>
                        <li onClick={onClickIntroduce}><h4>Introduce</h4></li>
                        <li onClick={onClickSol}><h4>솔</h4></li>
                        <li><h4>선재</h4></li>
                        <li><h4>혜정</h4></li>
                        <li><h4>산</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
