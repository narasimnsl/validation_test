import '../scss/main.scss'
import React from 'react';
import Aux from '../hoc/aux'
import CreateAccount from './pages/createAccount';



const main = ({ location }) => (
   
    <Aux>
         <CreateAccount/>
    </Aux>
)

export default main;
