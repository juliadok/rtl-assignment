import React from 'react';
import { Container } from 'react-bootstrap';
import Article from './Article';
import Title from './Title';

interface ArticlesProps {
  articles: Articles;
  ratings: Ratings;
}

const Articles = ({ articles, ratings }: ArticlesProps): React.ReactElement => {
  return (
    <Container className="pt-4">
      <Title articles={articles} />

      {articles.bundelItems.map((article) => {
        const { rating2: rating } = ratings.find(({ id }) => id === article.id) || {};

        return <Article key={article.id} article={article} rating={rating} />;
      })}
    </Container>
  );
};

export default Articles;
