import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import countries from '../Data/countryList';

type CountryType = typeof countries[0];

const initialArticle = {
  id: 0,
  country: '',
  icon: '',
  imgSrc: '',
  description: '',
};

const Country = () => {
  const [article, setArticle] = useState<CountryType>(initialArticle);

  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  //@ts-ignore
  const pageId = parseInt(id, 10);

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }

    const matchedCountry = countries.find((item) => {
      return item.id === pageId;
    });

    if (matchedCountry) {
      setArticle(matchedCountry);
      return;
    }

    navigate('../../404');
  }, [id]);

  const { imgSrc, country, description } = article;

  return (
    <div className="container">
      <h2>{country}</h2>
      <div className="img">
        <img src={imgSrc} alt={country} />
      </div>
      <p>{description}</p>
      <div className="row">
        <Link
          className="button"
          to={`/country/${pageId === 1 ? countries.length : pageId - 1}`}
        >
          Previous
        </Link>
        <Link className="button" to="/countries">
          Go back to countries list
        </Link>
        <Link
          className="button"
          to={`/country/${pageId === countries.length ? 1 : pageId + 1}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Country;
