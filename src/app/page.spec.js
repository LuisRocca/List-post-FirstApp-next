import Home from './page';

import { render } from '@testing-library/react';
import { describe } from 'node:test';

describe('Home', () => {
  // Tests that the function renders a div with the correct background color
  it('should render a div with the correct background color', () => {
    const wrapper = render(<Home />);
    expect(
      wrapper
        .asFragment('div')
        .append('bg-blue-500 text-white py-16 welcome-animation')
    );
  });
  // Tests that the function renders a div with the class 'bg-blue-500 text-white py-16 welcome-animation'
  it('should render a div with the correct class ', () => {
    const wrapper = render(<Home />);
    expect(wrapper.asFragment('h1').append('text-4xl font-bold text-center'));
  });
  it('should render a div with the correct class ', () => {
    const wrapper = render(<Home />);
    expect(wrapper.asFragment('h1').append('¡Bienvenido a mi app!'));
  });
});
