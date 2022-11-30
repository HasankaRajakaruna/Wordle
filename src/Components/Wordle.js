import React, { useEffect } from 'react'
import useCustomHooks from '../CustomHooks/useCustomHooks';
import Grid from './Grid';

function Wordle({ solution }) {

  const { currentGuess, handleKeyEvent,guess,isCorrect,turn } = useCustomHooks(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyEvent)
    return () => window.removeEventListener('keyup', handleKeyEvent)
  }, [handleKeyEvent])

  useEffect(()=>{
    console.log(guess,turn,isCorrect)
  },[guess,turn,isCorrect])

  return (
    <div>
      <div>Solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guess={guess} turn={turn} />
    </div>
  )
}

export default Wordle;