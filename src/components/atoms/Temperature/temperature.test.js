import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../../App';

test('Test', () => {
  render(<App />)
  const lisbonBtn = screen.getByRole('button', {name:/Lisbon/})
  expect(lisbonBtn).toBeInTheDocument()
});
