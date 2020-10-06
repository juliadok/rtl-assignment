import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Article from './Article';

describe('Article', () => {
  const article = {
    id: 123,
    urlAlias: 'some url',
    afbeelding: { afbeelding: 'some image' },
    chapeau: 'some heading',
    titel: 'some title',
    lead: 'some introduction',
  } as Article;

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Article article={article} />);
  });

  it('should render an article url', () => {
    expect(wrapper.find({ href: 'some url' })).toHaveLength(1);
  });

  it('should render an article image', () => {
    expect(wrapper.find({ src: 'some image' })).toHaveLength(1);
  });

  it('should render an article heading', () => {
    expect(wrapper.contains('some heading')).toBe(true);
  });

  it('should render an article title', () => {
    expect(wrapper.contains('some title')).toBe(true);
  });

  it('should render an article introduction', () => {
    expect(wrapper.contains('some introduction')).toBe(true);
  });
});
