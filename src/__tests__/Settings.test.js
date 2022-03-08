import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Settings from '../components/Settings';
import store from '../redux/store';

test('matches voice search component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Settings />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
