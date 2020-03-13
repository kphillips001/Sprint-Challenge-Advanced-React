import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// Testing if entire App renders
test("Rendering App without crashing", () => {
  render(<App />);
});