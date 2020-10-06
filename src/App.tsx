import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Header from './components/Header';
import Articles from './components/Articles';

import './App.css';

function App(): React.ReactElement {
  const [error, setError] = useState<Error>();
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Articles>();

  useEffect((): void => {
    (async (): Promise<void> => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/bundle-api.json`);
        const data = await response.json();
        setArticles(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <Alert variant="primary">Loading...</Alert>;
  }

  if (error) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  if (!articles) {
    return <Alert variant="danger">No articles</Alert>;
  }

  return (
    <>
      <Header />
      <Articles articles={articles} />
    </>
  );
}

export default App;
