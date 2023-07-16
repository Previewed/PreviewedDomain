import { render } from '@testing-library/react';

import PricingTables from './pricing-tables';

describe('PricingTables', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingTables />);
    expect(baseElement).toBeTruthy();
  });
});
