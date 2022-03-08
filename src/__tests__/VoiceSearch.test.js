import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import VoiceSearch from '../components/VoiceSearch';
import store from '../redux/store';

test('matches voice search component snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <VoiceSearch />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
