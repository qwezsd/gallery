import React from 'react';
import './scss/menu.scss'

export default function MenuComponent ({openIntroduce, closeIntroduce, openPerson1, closeMain}) {

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
            font:true
        })
    }
    const onClickSol = (e) => {
        e.preventDefault();
        closeMain();
        closeIntroduce()
        openPerson1()
    }
    return (
        <div id='menu'>
            <div className="container">
                <div className="content">
                    <ul className={state.font ? 'click' : ''}>
                        <li onClick={onClickIntroduce}><h4>Introduce</h4></li>
                        <li onClick={onClickSol}><h4>가나다</h4></li>
                        <li><h4>라마바</h4></li>
                        <li><h4>사아</h4></li>
                        <li><h4>자차타</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
