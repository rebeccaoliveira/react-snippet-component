import React from 'react';
import { shallow } from 'enzyme';

import SnippetComponent from './SnippetComponent';

describe('SnippetComponent', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<SnippetComponent />);
    expect(SnippetComponent).toMatchSnapshot();
  });

});
