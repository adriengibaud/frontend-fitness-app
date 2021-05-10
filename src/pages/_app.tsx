import { Provider } from 'react-redux';
import { store } from '../app/store';
import Layout from '../components/Layout';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
