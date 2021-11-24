import { Link } from 'react-router-dom';
import countries from '../Data/countryList';

const Countries = () => {
  return (
    <div className="container">
      <h2>Countries list</h2>
      <div className="countries">
        {countries.map(({ id, country, icon }) => {
          return (
            <Link key={id} className="country__item" to={`/country/${id}`}>
              <div className="icon">
                <img src={`${icon}`} alt="country" />
              </div>
              {country}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
