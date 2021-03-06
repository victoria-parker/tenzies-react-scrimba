import React from 'react';
import Die from './components/Die';
import './style.css';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


export default function App(){
    const [dice, setDice]=React.useState(allNewDice())
    const [tenzies,setTenzies]=React.useState(false)

    React.useEffect(()=>{
        if(dice.every( die => die.isHeld) && dice.every(die => die.value)){
            setTenzies(true)
        }
    },[dice])


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

    function newGame(){
        setTenzies(false)
        setDice(allNewDice())
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
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='container'>
            {diceElements}
            </div>
            <button onClick={tenzies ? newGame : roll} className='rollButton'>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}