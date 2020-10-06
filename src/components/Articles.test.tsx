import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Articles from './Articles';
import Title from './Title';
import Article from './Article';

describe('Articles', () => {
  const articles = {
    bundelItems: [{ id: 1 }, { id: 2 }],
  } as Articles;

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Articles articles={articles} />);
  });

  it('should render articles title', () => {
    expect(wrapper.contains(<Title articles={articles} />)).toBe(true);
  });

  it('should render two articles', () => {
    expect(wrapper.find(Article)).toHaveLength(2);
    expect(wrapper.contains(<Article key={1} article={articles.bundelItems[0]} />)).toBe(true);
    expect(wrapper.contains(<Article key={2} article={articles.bundelItems[1]} />)).toBe(true);
  });
});
