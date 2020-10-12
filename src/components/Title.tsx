import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface TitleProps {
  articles: Articles;
}

const Title = ({ articles }: TitleProps): React.ReactElement => {
  return (
    <Row>
      <Col xs={12} md={{ span: 10, offset: 1 }} className="mb-5">
        <p className="text-uppercase text-center" data-qa-element="label">
          {articles.label}
        </p>
        <h1 className="text-uppercase text-center font-weight-bold" data-qa-element="title">
          {articles.title}
        </h1>
        <p className="text-center" data-qa-element="description">
          {articles.description}
        </p>
      </Col>
    </Row>
  );
};

export default Title;
