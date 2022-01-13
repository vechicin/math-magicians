import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  const linkElement = render(<BrowserRouter><App /></BrowserRouter>);
  expect(linkElement).toMatchSnapshot();
});
