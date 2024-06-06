import { render, screen } from '@testing-library/react';
import Hero from '../src/components/ui/home/Hero'  // Adjust the import based on your file structure

test('renders home page', () => {
  render(<Hero />);
  const headerElement = screen.getByText(/Lead the future./i);
  expect(headerElement).toBeInTheDocument();
});
