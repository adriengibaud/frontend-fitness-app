import { Provider } from 'react-redux';
import { store } from '../app/store';
import Layout from '../components/Layout';
import '../services/i18n';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
