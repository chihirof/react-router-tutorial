import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import App from '@src/App.js'
import Home from '@src/Home.jsx'

test('test1-1', () => {
  render(<App />, {wrapper: MemoryRouter});
  expect(screen.getByText(/Bookkeeper!/i)).toBeInTheDocument()
})

test('test1-2', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Bookkeeper!/i)).toBeInTheDocument()
})

test('test2', () => {
  render(<Home />)
  expect(screen.getByText(/Select an menu/i)).toBeInTheDocument()
})

test('test3', async () => {
  render(<Home />)
  fireEvent.click(screen.getByText('Invoices'))
  await waitFor(() => screen.getByText('Invoices-content'))
  expect(screen.getByText(/Invoices-content/i)).toBeInTheDocument()
  console.log(window.location.toString())
})

test('test4', async () => {
  render(<Home />)
  fireEvent.click(screen.getByText('Expenses'))
  await waitFor(() => screen.getByText('Expenses-content'))
  expect(screen.getByText(/Expenses-content/i)).toBeInTheDocument()
  console.log(window.location.toString())
})
