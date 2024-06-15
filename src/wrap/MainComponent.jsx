import React from 'react';
import Section1Component from './main/Section1Component'
import Section2Component from './main/Section2Component'

export default function MainComponent () {
    return (
        <div id='main'>
            <Section1Component />
            <Section2Component />
        </div>
    );
};
