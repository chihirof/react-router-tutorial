import React from 'react';
import { render, screen } from '@testing-library/react';

import Expenses from '@src/routes/Expenses';

test('test1', () => {
  render(<Expenses />);
  expect(screen.getByText('Expenses-content')).toBeTruthy();
})
