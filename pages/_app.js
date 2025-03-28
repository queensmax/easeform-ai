import '../styles/globals.css';
import Layout from '../components/Layout';
import NetworkBackground from '../components/NetworkBackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NetworkBackground />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
