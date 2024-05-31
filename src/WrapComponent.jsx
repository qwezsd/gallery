import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MenuComponent from './wrap/MenuComponent';
import IntroduceComponent from './wrap/main/IntroduceComponent';
import Person1Component from './wrap/main/Person1Component'
import Person2Component from './wrap/main/Person2Component'
import Person3Component from './wrap/main/Person3Component'
import Person4Component from './wrap/main/Person4Component'
export default function WrapComponent () {

    const [state, setState] = React.useState({
        introduce : false
    })

    const openIntroduce = () => {
        setState({
            introduce : true
        })
    }
    const closeIntroduce = () => {
        setState({
            introduce : false
        })
    }
    return (
        <div id='wrap'>
            <HeaderComponent />
            <MenuComponent openIntroduce ={openIntroduce} closeIntroduce = {closeIntroduce}/>
            {
                state.introduce &&
            <IntroduceComponent />
        }
            <Person1Component closeIntroduce = {closeIntroduce} />
            <Person2Component closeIntroduce = {closeIntroduce} />
            <Person3Component closeIntroduce = {closeIntroduce} />
            <Person4Component closeIntroduce = {closeIntroduce} />

        </div>
    );
};