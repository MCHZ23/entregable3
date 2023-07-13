import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import RickAndMorty from './utils/RickAndMorty';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import FormLocation from './components/FormLocation';
import Imagen from './components/Imagen'

function App() {
  const [location, setLocation] = useState(null);
  const [idLocation, setIdLocation] = useState(RickAndMorty(126));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(7);

  useEffect(() => {
    fetchData();
  }, [idLocation, currentPage]);

  const fetchData = async () => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      setLocation(response.data);
      setHasError(false);
    } catch (error) {
      console.error(error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderResidents = () => {
    if (!location) return null;

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const residentsToShow = location.residents.slice(start, end);

    return residentsToShow.map((url) => (
      <ResidentCard key={url} url={url} />
    ));
  };

  return (

    
    <div className='container'>

      <div>

          <div>
            <h1 className='container__letter'>Rick And Morty</h1>
          </div>
          <div>
            <h1 className='container__name'>Rick And Morty</h1>
            
          </div>
      </div>
      <Imagen /> 
      
      
      <FormLocation setIdLocation={setIdLocation} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : hasError ? (
        <h1>❌ hey! you must provide with an id from 1 to 126😯😯</h1>
      ) : (
        <>
          <LocationInfo location={location} />
          <div className='resident-container'>{renderResidents()}</div>
          <div className='pagination'>
            {Array.from({ length: Math.ceil(location.residents.length / perPage) }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={page === currentPage}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
