import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AppProvider from '../src/providers/AppProvider';
import '../styles/dashboard.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Provider>
  );
}