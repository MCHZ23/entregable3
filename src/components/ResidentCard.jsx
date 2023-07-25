import axios from "axios";
import { useEffect, useState } from "react";
import './styles/ResidentCard.css';

const ResidentCard = ({ url }) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setCharacter(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  const getEpisodeNumber = (url) => {
    const episodeNumber = url.split("/").pop();
    return episodeNumber;
  };

  return (
    
    
    <article className="resident">
      <header className="resident__header">
        <img className="resident__image" src={character?.image} alt="" />
        <div className="resident__status">
          <div className={`resident__status-circle ${character?.status}`}></div>
          <span className="resident__status-value">{character?.status}</span>
        </div>
      </header>

      <section className="resident__body">
        <h3 className="resident__name">{character?.name}</h3>
        <hr className="resident__hr" />
        <ul className="resident__list">
          <li className="resident__item">
            <span className="resident__label">Specie:</span>
            <span className="resident__item-value">{character?.species}</span>
          </li>

          <li className="resident__item">
            <span className="resident__label">Origin:</span>
            <span className="resident__item-value">{character?.origin.name}</span>
          </li>

          <li className="resident__item">
            <span className="resident__label">Episode where Appear:</span>
            {character?.episode.map((episodeUrl, index) => (
              <span className="resident__item-value" key={episodeUrl}>
                {index !== 0 && ", "}
                {getEpisodeNumber(episodeUrl)}
              </span>
            ))}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
