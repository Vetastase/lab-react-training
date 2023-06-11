import { useState } from 'react'
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const dicePaths = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]

function Dice() {

  const [pips, setPips] = useState(5)
  const [isTimeoutSet, setIsTimeoutSet] = useState(false)

  const handleClick = () => {
    setPips(0)

    const chosenPips = Math.floor(Math.random() * 6) + 1

    // this will only run if I haven't set the timeout
    if (!isTimeoutSet)
    {  
        // block the timeout (block clicks)
        setIsTimeoutSet(true) 
        setTimeout(() => {
            setPips(chosenPips)

            // after the 3 secondds of blocking, allow for another click
            setIsTimeoutSet(false)
        }, 1000)
    }
  }

  return (
    <div>

        <img onClick={handleClick} alt="" style={{width: "200px"}} src={dicePaths[pips]} />
    
    </div>
  )
}

export default Dice

         // , handleClick, setPips, setTimeout