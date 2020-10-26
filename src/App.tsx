import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import Header from './components/Header';
import Articles from './components/Articles';

function App(): React.ReactElement {
  const [error, setError] = useState<Error>();
  const [articles, setArticles] = useState<Articles>();
  const [ratings, setRatings] = useState([]);

  useEffect((): void => {
    (async (): Promise<void> => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/bundle-api.json`);
        const data = await response.json();
        setArticles(data);
      } catch (e) {
        setError(e);
      }
    })();
  }, []);

  useEffect((): void => {
    (async (): Promise<void> => {
      try {
        const response = await fetch('https://scholten.dev/ratings.php');
        const data = await response.json();
        setRatings(data);
      } catch (e) {
        setError(e);
      }
    })();
  }, []);

  return (
    <>
      <Header />

      {(!articles || !ratings) && (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}

      {error && <Alert variant="danger">{error.message}</Alert>}

      {articles && ratings && <Articles articles={articles} ratings={ratings} />}
    </>
  );
}

export default App;
