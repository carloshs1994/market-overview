import axios from 'axios';
import HashTable from '../../components/HashTable';

const STORE_STOCKS = 'market-overview/homeReducer/STORE_STOCKS';
const STORE_ALL_STOCKS = 'market-overview/homeReducer/STORE_ALL_STOCKS';
const initialState = {
  activeStocks: [],
  stocksByName: [],
  stocksBySymbol: [],
};

const storeActiveStocks = (payload) => ({
  type: STORE_STOCKS,
  payload,
});

const storeAllStocks = (payloadByName, payloadBySymbol) => ({
  type: STORE_ALL_STOCKS,
  payloadByName,
  payloadBySymbol,
});

export const getStocksFromAPI = () => async (dispatch) => {
  const resultMostActives = await axios.get('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=58688fe7d21b8bb780234c39f6229ac3');
  dispatch(storeActiveStocks(resultMostActives.data));
  const stocksBySymbol = new HashTable(36);
  const stocksByName = new HashTable(162);
  const resultAllStocks = await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=58688fe7d21b8bb780234c39f6229ac3');
  resultAllStocks.data.forEach((stock) => {
    if (stock.name[0] === stock.symbol[0]) stocksBySymbol.set(stock.symbol, stock);
    if (stock.name[0] !== stock.symbol[0]) stocksByName.set(stock.name.toUpperCase(), stock);
  });
  dispatch(storeAllStocks(stocksByName, stocksBySymbol));
  // console.log(stocksByName.table);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_STOCKS:
      return { ...state, activeStocks: action.payload };
    case STORE_ALL_STOCKS:
      return {
        ...state,
        stocksByName: action.payloadByName,
        stocksBySymbol: action.payloadBySymbol,
      };
    default:
      return state;
  }
};

export default reducer;
