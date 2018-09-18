import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SnippetComponent from './SnippetComponent';

describe('SnippetComponent', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<SnippetComponent />);
    expect(wrapper.containsMatchingElement(
      <div className="snippet-component">
        <button>
          hello
        </button>
      </div>
    )).toBe(true);
  });

  it('should be selectable by class "snippet-component"', function() {
    expect(shallow(<SimpleButton />).is('.simple-button')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<SimpleButton />).find('.simple-button').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<SimpleButton />).text()).toEqual('hello');
  });

  it('should show `bye` text when button is clicked', function() {
    const wrapper = shallow(<SimpleButton />);
    wrapper.find('button').simulate('click');
    expect(render(wrapper).text()).toEqual('bye');
  })
});
