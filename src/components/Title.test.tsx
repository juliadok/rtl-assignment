import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Title from './Title';

describe('Title', () => {
  const articles = {
    label: 'some label',
    title: 'some title',
    description: 'some description',
  } as Articles;

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Title articles={articles} />);
  });

  it('should render articles label', () => {
    expect(wrapper.contains('some label')).toBe(true);
  });

  it('should render articles title', () => {
    expect(wrapper.contains('some title')).toBe(true);
  });

  it('should render articles description', () => {
    expect(wrapper.contains('some description')).toBe(true);
  });
});
