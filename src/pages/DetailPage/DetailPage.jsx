import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { searchByName } from '../../store/country/countrySlice';
import {
  HeadCardList, MainCard, ScreenView, CardInfos,
} from '../../components';

const DetailPage = () => {
  const dispatch = useDispatch();
  const { countryName } = useParams();

  React.useEffect(() => {
    dispatch(searchByName({ countryName }));
  }, []);

  const { searchCountry } = useSelector((store) => store.country);

  return (
    <ScreenView>
      <MainCard flag={searchCountry?.flags} name={countryName} />
      <HeadCardList />
      {
        Object.keys(searchCountry).map((c, i) => (
          <CardInfos key={c} id={i} name={countryName} keyObj={c} valueObj={searchCountry[c]} />
        ))
      }
    </ScreenView>
  );
};

export default DetailPage;
