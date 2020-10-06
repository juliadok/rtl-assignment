import React from 'react';
import { Container } from 'react-bootstrap';
import Article from './Article';
import Title from './Title';

interface ArticlesProps {
  articles: Articles;
}

const Articles = ({ articles }: ArticlesProps): React.ReactElement => {
  return (
    <Container className="pt-4">
      <Title articles={articles} />

      {articles.bundelItems.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </Container>
  );
};

export default Articles;
