import axios from 'axios';

const STORE_STOCKS = 'market-overview/homeReducer/STORE_STOCKS';
const initialState = [];

const storeStocks = (payload) => ({
  type: STORE_STOCKS,
  payload,
});

export const getStocksFromAPI = () => async (dispatch) => {
  const result = await axios.get('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=58688fe7d21b8bb780234c39f6229ac3');
  dispatch(storeStocks(result.data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_STOCKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
