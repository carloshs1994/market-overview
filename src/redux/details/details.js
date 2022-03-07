import axios from 'axios';

const GET_DATA = 'market-overview/detailsReducer/GET_DATA';
const initialState = [];

const getDetailData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getStockDetails = (ticker) => async (dispatch) => {
  const details = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${ticker.symbol}?apikey=58688fe7d21b8bb780234c39f6229ac3`);
  dispatch(getDetailData(details.data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
