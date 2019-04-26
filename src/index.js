

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Badges from './pages/Badges.js'
import App from './components/App.js'

const container = document.getElementById('app');
ReactDOM.render(<App />, container);
/*
ReactDOM.render(<Badge 
    firtsName="Victor Manuel" 
    lastName="Murillo Camayo" 
    avatar="https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png"
    jobTitle="Frontend Engineer"
    twitter="mcvictor"
    />,container)
*/







/*
const element = document.createElement('h1')
element.innerText = 'Hello, platzi Badges!!!!!!';

const container = document.getElementById('app');
container.appendChild(element)
*/

/*
const elementJSX = <h1> Hello, Platzi con React JS</h1>
const elementReact = React.createElement(
    'a',
    {href:'https://platzi.com' },
    'ir a platzi')

const name="Victor Manuel Murillo"
const element = React.createElement(
    'h1',
    {},
    `Hola, soy ${name}`
)
const sum = () =>3+5
//const jxs = <h1> Hola soy {name} y tengo { sum() } </h1>
const jxs = (
    <div>
        <h1>Hola soy {name}</h1>
        <p>Soy ingeniero FrontEnd</p>
    </div>
);

const elementR = React.createElement(
    'div',
    {},
    React.createElement('h1',{},`Hola soy ${name}`),
    React.createElement('p',{},'Soy ingeniero Front End')
);
ReactDOM.render(elementR,container) 

*/