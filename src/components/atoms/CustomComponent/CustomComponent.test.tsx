import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './CustomComponent.stories';

describe('CustomComponent', () => {
  const { Primary, Secondary } = composeStories(stories);
  it('should match snapshot Primary', () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Secondary', () => {
    const { container } = render(<Secondary />);
    expect(container).toMatchSnapshot();
  });
});
