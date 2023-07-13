
const LocationInfo = ({ location }) => { 
    return (
      <article>
        <div className='estilazo'>

        <div className='stilux'>
           <h2>{ location?.name }</h2>

             <ul className='ordenada'>

                 <li className='type'>
                   <span className='place'>Type:</span>
                   <span className='location'>{location?.type}</span>
                 </li>

                 <li>
                    <span className='dimencion'>Dimension:</span>
                    <span className='dimension'>{location?.dimension}</span>
                 </li>

                 <li className='population'>
                    <span className='population0'>Population:</span>
                    <span className='population1'>{location?.residents.length}</span>
                  </li>

             </ul>
           </div>

        </div>
      </article>
    )
}

export default LocationInfo