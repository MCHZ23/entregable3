import { useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import RickAndMorty from './utils/RickAndMorty'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

function App() {

  const [location, setLocation] = useState()
  const [idlocation, setIdLocation] = useState(RickAndMorty(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  
  useEffect(() => {
    
    const url= `https://rickandmortyapi.com/api/location/${idlocation}`
    setIsLoading(true)

    axios.get(url)
    .then(res => {setLocation(res.data)
      setHasError(false)
    })
    .catch(err => {console.error(err)
      setHasError(true)
    })
    .finally(()  => { 
      setIsLoading(false)
    })
  }, [idlocation])


  return (


    <div className='container'>

      <h1>Rick And Morty App</h1>

      <FormLocation setIdLocation={setIdLocation}/>
      { 
        isLoading
         ? ( <h1>Loading...</h1>)
         : (

        hasError
          ? ( <h1>❌ hey! you must provide with an id from 1 to 126😯😯</h1>)
          : (
            <> 
            <LocationInfo location={location}
            />
              <div className='resident-container'>
                {
                  location?.residents.map(url =>  (
                    <ResidentCard 
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
            ) 
          )

      }
           
     
    </div>
     

  )  
}

export default App
