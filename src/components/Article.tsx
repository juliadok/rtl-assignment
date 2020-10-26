import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';

import styles from './Article.module.css';

interface ArticleProps {
  article: Article;
  rating?: number;
}

const Article = ({ article, rating }: ArticleProps): React.ReactElement => {
  return (
    <Row as="a" href={article.urlAlias} target="_blank" className="mb-5 text-decoration-none text-reset">
      <Col as="span" xs={12} md={6} lg={4}>
        <Image src={article.afbeelding.afbeelding} className={`w-100 ${styles.image}`} data-qa-element="image" />
      </Col>
      <Col as="span" xs={12} md={6}>
        <Card as="span" className="border-0">
          <Card.Title as="span" className="text-uppercase" data-qa-element="chapeau">
            {article.chapeau}
          </Card.Title>
          <Card.Subtitle as="span" className="mb-2 font-weight-bold" data-qa-element="titel">
            {article.titel}
          </Card.Subtitle>
          <Card.Text as="span" className="d-none d-lg-block" data-qa-element="lead">
            <span className="d-block">{article.lead}</span>
            {rating ? <span className="d-block font-weight-bold">Rating: {rating}</span> : null}
          </Card.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default Article;
