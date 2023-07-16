import { render } from '@testing-library/react';

import Process from './process';

describe('Process', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Process />);
    expect(baseElement).toBeTruthy();
  });
});
