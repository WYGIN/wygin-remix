import { render } from '@testing-library/react';

import Wyg from './wyg';

describe('Wyg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Wyg />);
    expect(baseElement).toBeTruthy();
  });
});
