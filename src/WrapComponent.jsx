import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MenuComponent from './wrap/MenuComponent';
import IntroduceComponent from './wrap/main/IntroduceComponent';
import Person1Component from './wrap/main/Person1Component'
import Person2Component from './wrap/main/Person2Component'
import Person3Component from './wrap/main/Person3Component'
import Person4Component from './wrap/main/Person4Component'
import MainComponent from './wrap/MainComponent';
export default function WrapComponent () {

    const [state, setState] = React.useState({
        introduce : false,
        person1 : false
    })

    const openIntroduce = () => {
        setState({
            introduce : true
        })
    }
    const openPerson1 = () => {
        setState({
            person1 : true
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
            <MainComponent />
            <MenuComponent openPerson1 = {openPerson1} openIntroduce ={openIntroduce} closeIntroduce = {closeIntroduce}/>
            {
                state.introduce &&
            <IntroduceComponent />
        }
        {
            state.person1 &&
            <Person1Component closeIntroduce = {closeIntroduce} />
        }
            <Person2Component closeIntroduce = {closeIntroduce} />
            <Person3Component closeIntroduce = {closeIntroduce} />
            <Person4Component closeIntroduce = {closeIntroduce} />

        </div>
    );
};