import React from 'react';


export default function Die(props){
    const style={
        backgroundColor : props.isHeld ? "#59E391" : 'white'
    }

return (
    <div className='die' style={style} onClick={props.holdDice}>
        <h2>{props.number}</h2>
    </div>
)
}