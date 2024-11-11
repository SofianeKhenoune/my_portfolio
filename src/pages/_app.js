import Layout from '@/components/Layout/Layout';
import Spinner from '@/components/Spinner/Spinner';
import '@/styles/globals.scss';
import { useEffect, useState } from 'react';

/**
 * Renders the App component.
 *
 * @param {Object} props - The component props.
 * @param {React.Component} props.Component - The component to render.
 * @param {Object} props.pageProps - The props to pass to the component.
 * @returns {React.Component} - The rendered component.
 */
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  /**
   * Sets the loading state after a delay of 1000ms.
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 1000);

    /**
     * Clears the timeout when the component is unmounted.
     */
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  /**
   * Renders the component and the layout if the loading is true,
   * otherwise renders a spinner component.
   */
  return loading ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Spinner />
  );
}
