import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import store from '../store/store';
import { searchByName, getCountry } from '../store/country/countrySlice';

describe('store', () => {
  const baseURL = 'https://restcountries.com/v3.1';
  const endpoint = '/region/europe';
  const url = baseURL + endpoint;
  const mock = new MockAdapter(axios);
  const data = [{ name: { common: 'a' } }, { name: { common: 'b' } }];
  mock.onGet(url).reply(200, data);

  it('should return undifined if there is no country', () => {
    store.dispatch(searchByName({ countryName: 'b' }));

    const { searchCountry } = store.getState().country;
    expect(searchCountry).toBeUndefined();
  });

  it('should fetch countries', async () => {
    await store.dispatch(getCountry());

    const { country } = store.getState();
    expect(country.countries).toHaveLength(2);
  });
});
