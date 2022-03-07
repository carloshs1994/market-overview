import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PrintDetails from '../components/PrintDetails';
import store from '../redux/store';
import stock from './__mocks__/fetchDetails';

test('matches voice search component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <PrintDetails stockDetails={stock} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
