import RickAndMorty from '../utils/RickAndMorty'
import React from 'react'

const FormLocation = ({setIdLocation}) => {

  const handleSubmit = e =>{ 
    e.preventDefault()

    const inputValue = e.target.inputInfo.value.trim()
    if(inputValue === '' ||  inputValue === '0'){ 
      setIdLocation(RickAndMorty(126))
    } else { 
      setIdLocation(inputValue)
    }
    e.target.inputInfo.value = ''
  }

  return (
    <form className='allButton' onSubmit={handleSubmit}>
        <input name="inputInfo" type="text" />
        <button>Search</button>
    </form>
  )
}

export default FormLocation