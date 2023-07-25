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
    <form onSubmit={handleSubmit}>
      <div className='allButton'>
      <input name="inputInfo" type="text" />
        <button className='text-container'>Search</button>
      </div>
        
    </form>
  )
}

export default FormLocation