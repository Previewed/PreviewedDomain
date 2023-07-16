import { render } from '@testing-library/react';

import FeaturesBlocks from './features-blocks';

describe('FeaturesBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesBlocks />);
    expect(baseElement).toBeTruthy();
  });
});
