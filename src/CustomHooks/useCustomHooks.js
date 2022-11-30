import { useState } from 'react'

const useCustomHooks = (solution) =>{

    const [turn,setTurn] = useState(0)
    const [currentGuess,setCurrentGuess] = useState('')
    const [guess,setGuess] = useState([...Array(6)])
    const [history,setHistory] = useState([])
    const [isCorrect,setIsCorrect] = useState(false)


    const formatGuess = () =>{
        let solutionArray = [...solution]
        let formatGuess = [...currentGuess].map((l)=>{
            return {key: l,color: 'grey'}
        })

        formatGuess.forEach((l,i)=>{
            if(solutionArray[i] === l.key){
                formatGuess[i].color = 'green'
                // solutionArray[i] = null
            }
        })

        formatGuess.forEach((l,i)=>{
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formatGuess[i].color = 'yellow'
                // solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formatGuess
    }

    const changeGuessValue = () =>{
     
    }

    const addNewGuessValue = () =>{
        if(currentGuess === solution){
            setIsCorrect(true)
        }

        setGuess((prevGuesses)=>{
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formatGuess
            return newGuesses
        })

        setHistory((preHistory)=>{
            return [...preHistory,currentGuess]
        })

        setTurn((prevTurn)=>{
            return prevTurn + 1
        })
        setCurrentGuess('')
    }

    const handleKeyEvent = ({key}) =>{

        if(key==='Enter'){

            if(turn > 5){
                console.log('Your turn is over')
            }

            if(history.includes(currentGuess)){
                console.log('This is also previous guess')
            }

            if(currentGuess.length !== 5){
                console.log('word length is not correct')
            }

           const formatted = formatGuess()
           console.log(formatted)
           addNewGuessValue(formatted)
        }

        if(key==='Backspace'){
            setCurrentGuess((prev)=>{
                return prev.slice(0,-1)
            })
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length<5){
                setCurrentGuess((prev)=>{
                    return prev + key
                })
            }
        }
    }

    return {turn,currentGuess,guess,history,isCorrect,handleKeyEvent}
}

export default useCustomHooks
