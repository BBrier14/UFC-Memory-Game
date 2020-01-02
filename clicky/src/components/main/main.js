import React, { Component } from 'react';

import FighterBox from './fighterbox';
import Score from './score';

const shuffleArray = arr => (
    arr
    .map(a => [Math.random(), a])
    .sort((a,b) => a[0] - b[0])
    .map(a => a[1])
);

const initFighters = [
    {
        name: 'Conor Mcgregor',
        img: 'img/fighters/conor.png',
        clicked: false
    },
    {
        name: 'Cody Garbrandt',
        img: 'img/fighters/cody.png',
        clicked: false
    },
    {
        name: 'Khabib Nurmogomedov',
        img: 'img/fighters/khabib.png',
        clicked: false
    },
    {
        name: 'Max Holloway',
        img: 'img/fighters/max.png',
        clicked: false
    },
    {
        name: 'Nate Diaz',
        img: 'img/fighters/natediaz.png',
        clicked: false
    },
    {
        name: 'TJ Dillashaw',
        img: 'img/fighters/tj.png',
        clicked: false
    },
    {
        name: 'Tony Ferguson',
        img: 'img/fighters/tony.png',
        clicked: false
    },
    {
        name: 'Zabit Magnomedsharipov',
        img: 'img/fighters/zabit.png',
        clicked: false
    }
]