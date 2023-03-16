import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCountry } from '../../store/country/countrySlice';
import {
  ScreenView, MainCard, HeadCardList, CardCountry, Search,
} from '../../components';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.country);

  let countryList = countries;

  const onChangeSearch = (e) => setSearch(e.target.value.toLowerCase());

  countryList = countries.filter((country) => country.name.common.toLowerCase().includes(search));

  React.useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <ScreenView>
      <MainCard name="Europe" flag="/assets/img/map.png" />
      <HeadCardList />
      <Search onChangeSearch={onChangeSearch} valueSearch={search} />
      <div className={styles.container}>
        {
          countryList?.map((country, id) => (
            <Link
              key={country.cca2}
              to={`/details/${country.name.common}`}
              state={{ flag: country.flags.png }}
            >
              <CardCountry
                id={id}
                name={country.name.common}
                flag={country.flags.png}
              />
            </Link>
          ))
        }
      </div>
    </ScreenView>
  );
};

export default HomePage;
