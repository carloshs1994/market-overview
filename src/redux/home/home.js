const GET_DATA = 'market-overview/homeReducer/GET_DATA';
const initialState = [];

export const getGeneralData = (payload) => ({
  type: GET_DATA,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
