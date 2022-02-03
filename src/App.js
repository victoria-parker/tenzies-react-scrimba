import React from 'react';
import Die from './components/Die';
import './style.css';


export default function App(){
    const [dice, setDice]=React.useState(allNewDice())

    function allNewDice(){
        let arr=[]
        for(let i=0; i < 10; i++){
            let randomNumber=Math.floor(Math.random() * 6) + 1;
            arr.push(randomNumber)
        }
        return arr;
    }

    
    const diceElements=dice.map((value,index) => <Die key={index} number={value} />)

    return(
        <main>
            <div className='container'>
            {diceElements}
            </div>
        </main>
    )
}