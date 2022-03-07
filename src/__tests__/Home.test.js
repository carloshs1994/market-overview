import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import store from '../redux/store';

test('matches voice search component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
