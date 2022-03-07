import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PrintStocks from '../components/PrintStocks';
import store from '../redux/store';
import listOfStocks from './__mocks__/fetchStocks';

test('matches voice search component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <PrintStocks list={listOfStocks} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
