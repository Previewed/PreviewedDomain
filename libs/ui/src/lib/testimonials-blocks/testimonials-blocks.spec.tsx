import { render } from '@testing-library/react';

import TestimonialsBlocks from './testimonials-blocks';

describe('TestimonialsBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialsBlocks />);
    expect(baseElement).toBeTruthy();
  });
});
