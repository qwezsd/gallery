import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MenuComponent from './wrap/MenuComponent';
import IntroduceComponent from './wrap/sub/IntroduceComponent';
import Person1Component from './wrap/sub/Person1Component'
import Person2Component from './wrap/sub/Person2Component'
import Person3Component from './wrap/sub/Person3Component'
import Person4Component from './wrap/sub/Person4Component'
import MainComponent from './wrap/MainComponent';
import './wrap.scss'
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent () {

    const [state, setState] = React.useState({
        main : true,
        introduce : false,
        person1 : false
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
    const openPerson1 = () => {
        setState({
            person1 : true
        })
    }
    const closeMain = () => {
        setState({
            main:false
        })
    }
    return (
        <div id='wrap'>
            <HeaderComponent closeMain = {closeMain} openPerson1 = {openPerson1} openIntroduce ={openIntroduce} closeIntroduce = {closeIntroduce}/>
            {state.main &&
            <MainComponent />
        }
            {/* <MenuComponent closeMain = {closeMain} openPerson1 = {openPerson1} openIntroduce ={openIntroduce} closeIntroduce = {closeIntroduce}/> */}
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
            <FooterComponent />
        </div>
    );
};