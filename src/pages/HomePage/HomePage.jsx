import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getCountry } from '../../store/country/countrySlice';
import {
  ScreenView, MainCard, HeadCardList, CardCountry,
} from '../../components';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.country);

  React.useEffect(() => {
    dispatch(getCountry());
  }, []);
  return (
    <ScreenView>
      <MainCard name="Europe" flag="/assets/img/map.png" />
      <HeadCardList />
      <div className={styles.container}>
        {
          countries?.map((country, id) => (
            <NavLink
              key={country.cca2}
              to={`/details/${country.name.common}`}
            >
              <CardCountry
                id={id}
                name={country.name.common}
                flag={country.flags.png}
              />
            </NavLink>
          ))
        }
      </div>
    </ScreenView>
  );
};

export default HomePage;
