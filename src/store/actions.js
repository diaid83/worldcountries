import axios from 'axios';

const actions = {
  getCountries({ commit }) {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        console.log('response.data', response.data);
        commit('SET_COUNTRIES', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default actions;
