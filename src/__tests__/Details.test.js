import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import store from '../redux/store';

test('matches voice search component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Details />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
