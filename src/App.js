import React from 'react';
import Die from './components/Die';
import './style.css';
import { nanoid } from 'nanoid';


export default function App(){
    const [dice, setDice]=React.useState(allNewDice())

    function generateNewDie(){
        return {value: Math.floor(Math.random() * 6) + 1, isHeld: false, id: nanoid()}
    }

    function allNewDice(){
        let arr=[]
        for(let i=0; i < 10; i++){
            ;
            arr.push(generateNewDie())
        }
        return arr;
    }

    function roll(){

        setDice(prevDice => prevDice.map(die => {
            return die.isHeld ? {...die} : generateNewDie()
        }))
    }
    
    function holdDice(id){
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die 
        }))
    }



    const diceElements=dice.map((die) => (
      <Die  key={die.id} 
            number={die.value} 
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    
    ))

    
    return(
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='container'>
            {diceElements}
            </div>
            <button onClick={roll} className='rollButton'>Roll</button>
        </main>
    )
}